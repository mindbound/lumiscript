var WQ=Object.create;var{getPrototypeOf:RQ,defineProperty:q6,getOwnPropertyNames:GQ}=Object;var XQ=Object.prototype.hasOwnProperty;function YQ(l){return this[l]}var JQ,QQ,tr=(l,v,w)=>{var i=l!=null&&typeof l==="object";if(i){var n=v?JQ??=new WeakMap:QQ??=new WeakMap,P=n.get(l);if(P)return P}w=l!=null?WQ(RQ(l)):{};let O=v||!l||!l.__esModule?q6(w,"default",{value:l,enumerable:!0}):w;for(let H of GQ(l))if(!XQ.call(O,H))q6(O,H,{get:YQ.bind(l,H),enumerable:!0});if(i)n.set(l,O);return O};var R1=(l,v)=>()=>(v||l((v={exports:{}}).exports,v),v.exports);var zQ=(l)=>l;function mQ(l,v){this[l]=zQ.bind(null,v)}var KQ=(l,v)=>{for(var w in v)q6(l,w,{get:v[w],enumerable:!0,configurable:!0,set:mQ.bind(v,w)})};var vg=R1((UQ,rn)=>{(function(){function l(W,I){Object.defineProperty(i.prototype,W,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function v(W){if(W===null||typeof W!=="object")return null;return W=$o&&W[$o]||W["@@iterator"],typeof W==="function"?W:null}function w(W,I){W=(W=W.constructor)&&(W.displayName||W.name)||"ReactClass";var gr=W+"."+I;wr[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,W),wr[gr]=!0)}function i(W,I,gr){this.props=W,this.context=I,this.refs=rl,this.updater=gr||_o}function n(){}function P(W,I,gr){this.props=W,this.context=I,this.refs=rl,this.updater=gr||_o}function O(){}function H(W){return""+W}function R(W){try{H(W);var I=!1}catch(Mr){I=!0}if(I){I=console;var gr=I.error,ir=typeof Symbol==="function"&&Symbol.toStringTag&&W[Symbol.toStringTag]||W.constructor.name||"Object";return gr.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ir),H(W)}}function X(W){if(W==null)return null;if(typeof W==="function")return W.$$typeof===rb?null:W.displayName||W.name||null;if(typeof W==="string")return W;switch(W){case Xr:return"Fragment";case F:return"Profiler";case V:return"StrictMode";case xr:return"Suspense";case br:return"SuspenseList";case Wg:return"Activity"}if(typeof W==="object")switch(typeof W.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),W.$$typeof){case zr:return"Portal";case Or:return W.displayName||"Context";case or:return(W._context.displayName||"Context")+".Consumer";case Ar:var I=W.render;return W=W.displayName,W||(W=I.displayName||I.name||"",W=W!==""?"ForwardRef("+W+")":"ForwardRef"),W;case Cr:return I=W.displayName||null,I!==null?I:X(W.type)||"Memo";case fr:I=W._payload,W=W._init;try{return X(W(I))}catch(gr){}}return null}function G(W){if(W===Xr)return"<>";if(typeof W==="object"&&W!==null&&W.$$typeof===fr)return"<...>";try{var I=X(W);return I?"<"+I+">":"<...>"}catch(gr){return"<...>"}}function A(){var W=Sr.A;return W===null?null:W.getOwner()}function Y(){return Error("react-stack-top-frame")}function L(W){if(N1.call(W,"key")){var I=Object.getOwnPropertyDescriptor(W,"key").get;if(I&&I.isReactWarning)return!1}return W.key!==void 0}function S(W,I){function gr(){C5||(C5=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}gr.isReactWarning=!0,Object.defineProperty(W,"key",{get:gr,configurable:!0})}function T(){var W=X(this.type);return $0[W]||($0[W]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),W=this.props.ref,W!==void 0?W:null}function _(W,I,gr,ir,Mr,Fr){var Nr=gr.ref;return W={$$typeof:vr,type:W,key:I,props:gr,_owner:ir},(Nr!==void 0?Nr:null)!==null?Object.defineProperty(W,"ref",{enumerable:!1,get:T}):Object.defineProperty(W,"ref",{enumerable:!1,value:null}),W._store={},Object.defineProperty(W._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(W,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(W,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Mr}),Object.defineProperty(W,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(W.props),Object.freeze(W)),W}function rr(W,I){return I=_(W.type,I,W.props,W._owner,W._debugStack,W._debugTask),W._store&&(I._store.validated=W._store.validated),I}function nr(W){er(W)?W._store&&(W._store.validated=1):typeof W==="object"&&W!==null&&W.$$typeof===fr&&(W._payload.status==="fulfilled"?er(W._payload.value)&&W._payload.value._store&&(W._payload.value._store.validated=1):W._store&&(W._store.validated=1))}function er(W){return typeof W==="object"&&W!==null&&W.$$typeof===vr}function a(W){var I={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(gr){return I[gr]})}function p(W,I){return typeof W==="object"&&W!==null&&W.key!=null?(R(W.key),a(""+W.key)):I.toString(36)}function lr(W){switch(W.status){case"fulfilled":return W.value;case"rejected":throw W.reason;default:switch(typeof W.status==="string"?W.then(O,O):(W.status="pending",W.then(function(I){W.status==="pending"&&(W.status="fulfilled",W.value=I)},function(I){W.status==="pending"&&(W.status="rejected",W.reason=I)})),W.status){case"fulfilled":return W.value;case"rejected":throw W.reason}}throw W}function B(W,I,gr,ir,Mr){var Fr=typeof W;if(Fr==="undefined"||Fr==="boolean")W=null;var Nr=!1;if(W===null)Nr=!0;else switch(Fr){case"bigint":case"string":case"number":Nr=!0;break;case"object":switch(W.$$typeof){case vr:case zr:Nr=!0;break;case fr:return Nr=W._init,B(Nr(W._payload),I,gr,ir,Mr)}}if(Nr){Nr=W,Mr=Mr(Nr);var lg=ir===""?"."+p(Nr,0):ir;return tg(Mr)?(gr="",lg!=null&&(gr=lg.replace(Z1,"$&/")+"/"),B(Mr,I,gr,"",function(Jo){return Jo})):Mr!=null&&(er(Mr)&&(Mr.key!=null&&(Nr&&Nr.key===Mr.key||R(Mr.key)),gr=rr(Mr,gr+(Mr.key==null||Nr&&Nr.key===Mr.key?"":(""+Mr.key).replace(Z1,"$&/")+"/")+lg),ir!==""&&Nr!=null&&er(Nr)&&Nr.key==null&&Nr._store&&!Nr._store.validated&&(gr._store.validated=2),Mr=gr),I.push(Mr)),1}if(Nr=0,lg=ir===""?".":ir+":",tg(W))for(var Jr=0;Jr<W.length;Jr++)ir=W[Jr],Fr=lg+p(ir,Jr),Nr+=B(ir,I,gr,Fr,Mr);else if(Jr=v(W),typeof Jr==="function")for(Jr===W.entries&&(B1||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),B1=!0),W=Jr.call(W),Jr=0;!(ir=W.next()).done;)ir=ir.value,Fr=lg+p(ir,Jr++),Nr+=B(ir,I,gr,Fr,Mr);else if(Fr==="object"){if(typeof W.then==="function")return B(lr(W),I,gr,ir,Mr);throw I=String(W),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Nr}function y(W,I,gr){if(W==null)return W;var ir=[],Mr=0;return B(W,ir,"","",function(Fr){return I.call(gr,Fr,Mr++)}),ir}function j(W){if(W._status===-1){var I=W._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=W._result;var gr=I();if(gr.then(function(Mr){if(W._status===0||W._status===-1){W._status=1,W._result=Mr;var Fr=W._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Mr)}},function(Mr){if(W._status===0||W._status===-1){W._status=2,W._result=Mr;var Fr=W._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Mr)}}),I=W._ioInfo,I!=null){I.value=gr;var ir=gr.displayName;typeof ir==="string"&&(I.name=ir)}W._status===-1&&(W._status=0,W._result=gr)}if(W._status===1)return I=W._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw W._result}function x(){var W=Sr.H;return W===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),W}function Wr(){Sr.asyncTransitions--}function qr(W){if(I0===null)try{var I=("require"+Math.random()).slice(0,7);I0=(rn&&rn[I]).call(rn,"timers").setImmediate}catch(gr){I0=function(ir){T5===!1&&(T5=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Mr=new MessageChannel;Mr.port1.onmessage=ir,Mr.port2.postMessage(void 0)}}return I0(W)}function Gr(W){return 1<W.length&&typeof AggregateError==="function"?AggregateError(W):W[0]}function Zr(W,I){I!==F0-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F0=I}function k(W,I,gr){var ir=Sr.actQueue;if(ir!==null)if(ir.length!==0)try{s(ir),qr(function(){return k(W,I,gr)});return}catch(Mr){Sr.thrownErrors.push(Mr)}else Sr.actQueue=null;0<Sr.thrownErrors.length?(ir=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,gr(ir)):I(W)}function s(W){if(!B0){B0=!0;var I=0;try{for(;I<W.length;I++){var gr=W[I];do{Sr.didUsePromise=!1;var ir=gr(!1);if(ir!==null){if(Sr.didUsePromise){W[I]=gr,W.splice(0,I);return}gr=ir}else break}while(1)}W.length=0}catch(Mr){W.splice(0,I+1),Sr.thrownErrors.push(Mr)}finally{B0=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vr=Symbol.for("react.transitional.element"),zr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),or=Symbol.for("react.consumer"),Or=Symbol.for("react.context"),Ar=Symbol.for("react.forward_ref"),xr=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Wg=Symbol.for("react.activity"),$o=Symbol.iterator,wr={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(W){w(W,"forceUpdate")},enqueueReplaceState:function(W){w(W,"replaceState")},enqueueSetState:function(W){w(W,"setState")}},Yo=Object.assign,rl={};Object.freeze(rl),i.prototype.isReactComponent={},i.prototype.setState=function(W,I){if(typeof W!=="object"&&typeof W!=="function"&&W!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,I,"setState")},i.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};var ag={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(Uv in ag)ag.hasOwnProperty(Uv)&&l(Uv,ag[Uv]);n.prototype=i.prototype,ag=P.prototype=new n,ag.constructor=P,Yo(ag,i.prototype),ag.isPureReactComponent=!0;var tg=Array.isArray,rb=Symbol.for("react.client.reference"),Sr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},N1=Object.prototype.hasOwnProperty,Rg=console.createTask?console.createTask:function(){return null};ag={react_stack_bottom_frame:function(W){return W()}};var C5,he,$0={},L0=ag.react_stack_bottom_frame.bind(ag,Y)(),Zn=Rg(G(Y)),B1=!1,Z1=/\/+/g,Kv=typeof reportError==="function"?reportError:function(W){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof W==="object"&&W!==null&&typeof W.message==="string"?String(W.message):String(W),error:W});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",W);return}console.error(W)},T5=!1,I0=null,F0=0,N0=!1,B0=!1,gb=typeof queueMicrotask==="function"?function(W){queueMicrotask(function(){return queueMicrotask(W)})}:qr;ag=Object.freeze({__proto__:null,c:function(W){return x().useMemoCache(W)}});var Uv={map:y,forEach:function(W,I,gr){y(W,function(){I.apply(this,arguments)},gr)},count:function(W){var I=0;return y(W,function(){I++}),I},toArray:function(W){return y(W,function(I){return I})||[]},only:function(W){if(!er(W))throw Error("React.Children.only expected to receive a single React element child.");return W}};UQ.Activity=Wg,UQ.Children=Uv,UQ.Component=i,UQ.Fragment=Xr,UQ.Profiler=F,UQ.PureComponent=P,UQ.StrictMode=V,UQ.Suspense=xr,UQ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sr,UQ.__COMPILER_RUNTIME=ag,UQ.act=function(W){var I=Sr.actQueue,gr=F0;F0++;var ir=Sr.actQueue=I!==null?I:[],Mr=!1;try{var Fr=W()}catch(Jr){Sr.thrownErrors.push(Jr)}if(0<Sr.thrownErrors.length)throw Zr(I,gr),W=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,W;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var Nr=Fr;return gb(function(){Mr||N0||(N0=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Jr,Jo){Mr=!0,Nr.then(function(gl){if(Zr(I,gr),gr===0){try{s(ir),qr(function(){return k(gl,Jr,Jo)})}catch(ob){Sr.thrownErrors.push(ob)}if(0<Sr.thrownErrors.length){var $v=Gr(Sr.thrownErrors);Sr.thrownErrors.length=0,Jo($v)}}else Jr(gl)},function(gl){Zr(I,gr),0<Sr.thrownErrors.length?(gl=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,Jo(gl)):Jo(gl)})}}}var lg=Fr;if(Zr(I,gr),gr===0&&(s(ir),ir.length!==0&&gb(function(){Mr||N0||(N0=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sr.actQueue=null),0<Sr.thrownErrors.length)throw W=Gr(Sr.thrownErrors),Sr.thrownErrors.length=0,W;return{then:function(Jr,Jo){Mr=!0,gr===0?(Sr.actQueue=ir,qr(function(){return k(lg,Jr,Jo)})):Jr(lg)}}},UQ.cache=function(W){return function(){return W.apply(null,arguments)}},UQ.cacheSignal=function(){return null},UQ.captureOwnerStack=function(){var W=Sr.getCurrentStack;return W===null?null:W()},UQ.cloneElement=function(W,I,gr){if(W===null||W===void 0)throw Error("The argument must be a React element, but you passed "+W+".");var ir=Yo({},W.props),Mr=W.key,Fr=W._owner;if(I!=null){var Nr;r:{if(N1.call(I,"ref")&&(Nr=Object.getOwnPropertyDescriptor(I,"ref").get)&&Nr.isReactWarning){Nr=!1;break r}Nr=I.ref!==void 0}Nr&&(Fr=A()),L(I)&&(R(I.key),Mr=""+I.key);for(lg in I)!N1.call(I,lg)||lg==="key"||lg==="__self"||lg==="__source"||lg==="ref"&&I.ref===void 0||(ir[lg]=I[lg])}var lg=arguments.length-2;if(lg===1)ir.children=gr;else if(1<lg){Nr=Array(lg);for(var Jr=0;Jr<lg;Jr++)Nr[Jr]=arguments[Jr+2];ir.children=Nr}ir=_(W.type,Mr,ir,Fr,W._debugStack,W._debugTask);for(Mr=2;Mr<arguments.length;Mr++)nr(arguments[Mr]);return ir},UQ.createContext=function(W){return W={$$typeof:Or,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null},W.Provider=W,W.Consumer={$$typeof:or,_context:W},W._currentRenderer=null,W._currentRenderer2=null,W},UQ.createElement=function(W,I,gr){for(var ir=2;ir<arguments.length;ir++)nr(arguments[ir]);ir={};var Mr=null;if(I!=null)for(Jr in he||!("__self"in I)||"key"in I||(he=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(R(I.key),Mr=""+I.key),I)N1.call(I,Jr)&&Jr!=="key"&&Jr!=="__self"&&Jr!=="__source"&&(ir[Jr]=I[Jr]);var Fr=arguments.length-2;if(Fr===1)ir.children=gr;else if(1<Fr){for(var Nr=Array(Fr),lg=0;lg<Fr;lg++)Nr[lg]=arguments[lg+2];Object.freeze&&Object.freeze(Nr),ir.children=Nr}if(W&&W.defaultProps)for(Jr in Fr=W.defaultProps,Fr)ir[Jr]===void 0&&(ir[Jr]=Fr[Jr]);Mr&&S(ir,typeof W==="function"?W.displayName||W.name||"Unknown":W);var Jr=1e4>Sr.recentlyCreatedOwnerStacks++;return _(W,Mr,ir,A(),Jr?Error("react-stack-top-frame"):L0,Jr?Rg(G(W)):Zn)},UQ.createRef=function(){var W={current:null};return Object.seal(W),W},UQ.forwardRef=function(W){W!=null&&W.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof W!=="function"?console.error("forwardRef requires a render function but was given %s.",W===null?"null":typeof W):W.length!==0&&W.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",W.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),W!=null&&W.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:Ar,render:W},gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ir){gr=ir,W.name||W.displayName||(Object.defineProperty(W,"name",{value:ir}),W.displayName=ir)}}),I},UQ.isValidElement=er,UQ.lazy=function(W){W={_status:-1,_result:W};var I={$$typeof:fr,_payload:W,_init:j},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return W._ioInfo=gr,I._debugInfo=[{awaited:gr}],I},UQ.memo=function(W,I){W==null&&console.error("memo: The first argument must be a component. Instead received: %s",W===null?"null":typeof W),I={$$typeof:Cr,type:W,compare:I===void 0?null:I};var gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ir){gr=ir,W.name||W.displayName||(Object.defineProperty(W,"name",{value:ir}),W.displayName=ir)}}),I},UQ.startTransition=function(W){var I=Sr.T,gr={};gr._updatedFibers=new Set,Sr.T=gr;try{var ir=W(),Mr=Sr.S;Mr!==null&&Mr(gr,ir),typeof ir==="object"&&ir!==null&&typeof ir.then==="function"&&(Sr.asyncTransitions++,ir.then(Wr,Wr),ir.then(O,Kv))}catch(Fr){Kv(Fr)}finally{I===null&&gr._updatedFibers&&(W=gr._updatedFibers.size,gr._updatedFibers.clear(),10<W&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&gr.types!==null&&(I.types!==null&&I.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=gr.types),Sr.T=I}},UQ.unstable_useCacheRefresh=function(){return x().useCacheRefresh()},UQ.use=function(W){return x().use(W)},UQ.useActionState=function(W,I,gr){return x().useActionState(W,I,gr)},UQ.useCallback=function(W,I){return x().useCallback(W,I)},UQ.useContext=function(W){var I=x();return W.$$typeof===or&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(W)},UQ.useDebugValue=function(W,I){return x().useDebugValue(W,I)},UQ.useDeferredValue=function(W,I){return x().useDeferredValue(W,I)},UQ.useEffect=function(W,I){return W==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useEffect(W,I)},UQ.useEffectEvent=function(W){return x().useEffectEvent(W)},UQ.useId=function(){return x().useId()},UQ.useImperativeHandle=function(W,I,gr){return x().useImperativeHandle(W,I,gr)},UQ.useInsertionEffect=function(W,I){return W==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useInsertionEffect(W,I)},UQ.useLayoutEffect=function(W,I){return W==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useLayoutEffect(W,I)},UQ.useMemo=function(W,I){return x().useMemo(W,I)},UQ.useOptimistic=function(W,I){return x().useOptimistic(W,I)},UQ.useReducer=function(W,I,gr){return x().useReducer(W,I,gr)},UQ.useRef=function(W){return x().useRef(W)},UQ.useState=function(W){return x().useState(W)},UQ.useSyncExternalStore=function(W,I,gr){return x().useSyncExternalStore(W,I,gr)},UQ.useTransition=function(){return x().useTransition()},UQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var tW=R1(($Q)=>{(function(){function l(){if(a=!1,y){var k=$Q.unstable_now();Wr=k;var s=!0;try{r:{nr=!1,er&&(er=!1,lr(j),j=-1),rr=!0;var vr=_;try{g:{P(k);for(T=w(Y);T!==null&&!(T.expirationTime>k&&H());){var zr=T.callback;if(typeof zr==="function"){T.callback=null,_=T.priorityLevel;var Xr=zr(T.expirationTime<=k);if(k=$Q.unstable_now(),typeof Xr==="function"){T.callback=Xr,P(k),s=!0;break g}T===w(Y)&&i(Y),P(k)}else i(Y);T=w(Y)}if(T!==null)s=!0;else{var V=w(L);V!==null&&R(O,V.startTime-k),s=!1}}break r}finally{T=null,_=vr,rr=!1}s=void 0}}finally{s?qr():y=!1}}}function v(k,s){var vr=k.length;k.push(s);r:for(;0<vr;){var zr=vr-1>>>1,Xr=k[zr];if(0<n(Xr,s))k[zr]=s,k[vr]=Xr,vr=zr;else break r}}function w(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var s=k[0],vr=k.pop();if(vr!==s){k[0]=vr;r:for(var zr=0,Xr=k.length,V=Xr>>>1;zr<V;){var F=2*(zr+1)-1,or=k[F],Or=F+1,Ar=k[Or];if(0>n(or,vr))Or<Xr&&0>n(Ar,or)?(k[zr]=Ar,k[Or]=vr,zr=Or):(k[zr]=or,k[F]=vr,zr=F);else if(Or<Xr&&0>n(Ar,vr))k[zr]=Ar,k[Or]=vr,zr=Or;else break r}}return s}function n(k,s){var vr=k.sortIndex-s.sortIndex;return vr!==0?vr:k.id-s.id}function P(k){for(var s=w(L);s!==null;){if(s.callback===null)i(L);else if(s.startTime<=k)i(L),s.sortIndex=s.expirationTime,v(Y,s);else break;s=w(L)}}function O(k){if(er=!1,P(k),!nr)if(w(Y)!==null)nr=!0,y||(y=!0,qr());else{var s=w(L);s!==null&&R(O,s.startTime-k)}}function H(){return a?!0:$Q.unstable_now()-Wr<x?!1:!0}function R(k,s){j=p(function(){k($Q.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),$Q.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var X=performance;$Q.unstable_now=function(){return X.now()}}else{var G=Date,A=G.now();$Q.unstable_now=function(){return G.now()-A}}var Y=[],L=[],S=1,T=null,_=3,rr=!1,nr=!1,er=!1,a=!1,p=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null,y=!1,j=-1,x=5,Wr=-1;if(typeof B==="function")var qr=function(){B(l)};else if(typeof MessageChannel<"u"){var Gr=new MessageChannel,Zr=Gr.port2;Gr.port1.onmessage=l,qr=function(){Zr.postMessage(null)}}else qr=function(){p(l,0)};$Q.unstable_IdlePriority=5,$Q.unstable_ImmediatePriority=1,$Q.unstable_LowPriority=4,$Q.unstable_NormalPriority=3,$Q.unstable_Profiling=null,$Q.unstable_UserBlockingPriority=2,$Q.unstable_cancelCallback=function(k){k.callback=null},$Q.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<k?Math.floor(1000/k):5},$Q.unstable_getCurrentPriorityLevel=function(){return _},$Q.unstable_next=function(k){switch(_){case 1:case 2:case 3:var s=3;break;default:s=_}var vr=_;_=s;try{return k()}finally{_=vr}},$Q.unstable_requestPaint=function(){a=!0},$Q.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var vr=_;_=k;try{return s()}finally{_=vr}},$Q.unstable_scheduleCallback=function(k,s,vr){var zr=$Q.unstable_now();switch(typeof vr==="object"&&vr!==null?(vr=vr.delay,vr=typeof vr==="number"&&0<vr?zr+vr:zr):vr=zr,k){case 1:var Xr=-1;break;case 2:Xr=250;break;case 5:Xr=1073741823;break;case 4:Xr=1e4;break;default:Xr=5000}return Xr=vr+Xr,k={id:S++,callback:s,priorityLevel:k,startTime:vr,expirationTime:Xr,sortIndex:-1},vr>zr?(k.sortIndex=vr,v(L,k),w(Y)===null&&k===w(L)&&(er?(lr(j),j=-1):er=!0,R(O,vr-zr))):(k.sortIndex=Xr,v(Y,k),nr||rr||(nr=!0,y||(y=!0,qr()))),k},$Q.unstable_shouldYield=H,$Q.unstable_wrapCallback=function(k){var s=_;return function(){var vr=_;_=s;try{return k.apply(this,arguments)}finally{_=vr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var PW=R1((LQ)=>{var A6=tr(vg());(function(){function l(){}function v(G){return""+G}function w(G,A,Y){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{v(L);var S=!1}catch(T){S=!0}return S&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),v(L)),{$$typeof:R,key:L==null?null:""+L,children:G,containerInfo:A,implementation:Y}}function i(G,A){if(G==="font")return"";if(typeof A==="string")return A==="use-credentials"?A:""}function n(G){return G===null?"`null`":G===void 0?"`undefined`":G===""?"an empty string":'something with type "'+typeof G+'"'}function P(G){return G===null?"`null`":G===void 0?"`undefined`":G===""?"an empty string":typeof G==="string"?JSON.stringify(G):typeof G==="number"?"`"+G+"`":'something with type "'+typeof G+'"'}function O(){var G=X.H;return G===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),G}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var H={d:{f:l,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},R=Symbol.for("react.portal"),X=A6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),LQ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,LQ.createPortal=function(G,A){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error("Target container is not a DOM element.");return w(G,A,null,Y)},LQ.flushSync=function(G){var A=X.T,Y=H.p;try{if(X.T=null,H.p=2,G)return G()}finally{X.T=A,H.p=Y,H.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},LQ.preconnect=function(G,A){typeof G==="string"&&G?A!=null&&typeof A!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(A)):A!=null&&typeof A.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",n(A.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G)),typeof G==="string"&&(A?(A=A.crossOrigin,A=typeof A==="string"?A==="use-credentials"?A:"":void 0):A=null,H.d.C(G,A))},LQ.prefetchDNS=function(G){if(typeof G!=="string"||!G)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G));else if(1<arguments.length){var A=arguments[1];typeof A==="object"&&A.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(A)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(A))}typeof G==="string"&&H.d.D(G)},LQ.preinit=function(G,A){if(typeof G==="string"&&G?A==null||typeof A!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(A)):A.as!=="style"&&A.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(A.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(G)),typeof G==="string"&&A&&typeof A.as==="string"){var Y=A.as,L=i(Y,A.crossOrigin),S=typeof A.integrity==="string"?A.integrity:void 0,T=typeof A.fetchPriority==="string"?A.fetchPriority:void 0;Y==="style"?H.d.S(G,typeof A.precedence==="string"?A.precedence:void 0,{crossOrigin:L,integrity:S,fetchPriority:T}):Y==="script"&&H.d.X(G,{crossOrigin:L,integrity:S,fetchPriority:T,nonce:typeof A.nonce==="string"?A.nonce:void 0})}},LQ.preinitModule=function(G,A){var Y="";if(typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A!==void 0&&typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":A&&("as"in A)&&A.as!=="script"&&(Y+=" The `as` option encountered was "+P(A.as)+"."),Y)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",Y);else switch(Y=A&&typeof A.as==="string"?A.as:"script",Y){case"script":break;default:Y=P(Y),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',Y,G)}if(typeof G==="string")if(typeof A==="object"&&A!==null){if(A.as==null||A.as==="script")Y=i(A.as,A.crossOrigin),H.d.M(G,{crossOrigin:Y,integrity:typeof A.integrity==="string"?A.integrity:void 0,nonce:typeof A.nonce==="string"?A.nonce:void 0})}else A==null&&H.d.M(G)},LQ.preload=function(G,A){var Y="";if(typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A==null||typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":typeof A.as==="string"&&A.as||(Y+=" The `as` option encountered was "+n(A.as)+"."),Y&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',Y),typeof G==="string"&&typeof A==="object"&&A!==null&&typeof A.as==="string"){Y=A.as;var L=i(Y,A.crossOrigin);H.d.L(G,Y,{crossOrigin:L,integrity:typeof A.integrity==="string"?A.integrity:void 0,nonce:typeof A.nonce==="string"?A.nonce:void 0,type:typeof A.type==="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority==="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy==="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet==="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes==="string"?A.imageSizes:void 0,media:typeof A.media==="string"?A.media:void 0})}},LQ.preloadModule=function(G,A){var Y="";typeof G==="string"&&G||(Y+=" The `href` argument encountered was "+n(G)+"."),A!==void 0&&typeof A!=="object"?Y+=" The `options` argument encountered was "+n(A)+".":A&&("as"in A)&&typeof A.as!=="string"&&(Y+=" The `as` option encountered was "+n(A.as)+"."),Y&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',Y),typeof G==="string"&&(A?(Y=i(A.as,A.crossOrigin),H.d.m(G,{as:typeof A.as==="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Y,integrity:typeof A.integrity==="string"?A.integrity:void 0})):H.d.m(G))},LQ.requestFormReset=function(G){H.d.r(G)},LQ.unstable_batchedUpdates=function(G,A){return G(A)},LQ.useFormState=function(G,A,Y){return O().useFormState(G,A,Y)},LQ.useFormStatus=function(){return O().useHostTransitionStatus()},LQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Ch=R1((VI,OW)=>{OW.exports=PW()});var HW=R1((IQ)=>{var eg=tr(tW()),Th=tr(vg()),M6=tr(Ch());(function(){function l(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function v(r,g,o,e){if(o>=g.length)return e;var h=g[o],b=lo(r)?r.slice():cr({},r);return b[h]=v(r[h],g,o+1,e),b}function w(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var e=0;e<o.length-1;e++)if(g[e]!==o[e]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return i(r,g,o,0)}}function i(r,g,o,e){var h=g[e],b=lo(r)?r.slice():cr({},r);return e+1===g.length?(b[o[e]]=b[h],lo(b)?b.splice(h,1):delete b[h]):b[h]=i(r[h],g,o,e+1),b}function n(r,g,o){var e=g[o],h=lo(r)?r.slice():cr({},r);if(o+1===g.length)return lo(h)?h.splice(e,1):delete h[e],h;return h[e]=n(r[e],g,o+1),h}function P(){return!1}function O(){return null}function H(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function R(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function X(){}function G(){}function A(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function Y(r,g,o,e){return new wX(r,g,o,e)}function L(r,g){r.context===fv&&(Z4(r.current,2,g,r,null,null),j1())}function S(r,g){if(Kl!==null){var o=g.staleFamilies;g=g.updatedFamilies,Kb(),MP(r.current,g,o),j1()}}function T(r){Kl=r}function _(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function nr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function er(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,e=g;;){var h=o.return;if(h===null)break;var b=h.alternate;if(b===null){if(e=h.return,e!==null){o=e;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===o)return a(h),r;if(b===e)return a(h),g;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==e.return)o=h,e=b;else{for(var u=!1,t=h.child;t;){if(t===o){u=!0,o=h,e=b;break}if(t===e){u=!0,e=h,o=b;break}t=t.sibling}if(!u){for(t=b.child;t;){if(t===o){u=!0,o=b,e=h;break}if(t===e){u=!0,e=b,o=h;break}t=t.sibling}if(!u)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==e)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function lr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=lr(r),g!==null)return g;r=r.sibling}return null}function B(r){if(r===null||typeof r!=="object")return null;return r=Qq&&r[Qq]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===UY?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case oh:return"Fragment";case D4:return"Profiler";case ai:return"StrictMode";case _4:return"Suspense";case y4:return"SuspenseList";case E4:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case gh:return"Portal";case Je:return r.displayName||"Context";case V4:return(r._context.displayName||"Context")+".Consumer";case Cb:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ji:return g=r.displayName||null,g!==null?g:y(r.type)||"Memo";case ul:g=r._payload,r=r._init;try{return y(r(g))}catch(o){}}return null}function j(r){return typeof r.tag==="number"?x(r):typeof r.name==="string"?r.name:null}function x(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(g);case 8:return g===ai?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return x(r.return)}return null}function Wr(r){return{current:r}}function qr(r,g){0>se?console.error("Unexpected pop."):(g!==a4[se]&&console.error("Unexpected Fiber popped."),r.current=c4[se],c4[se]=null,a4[se]=null,se--)}function Gr(r,g,o){se++,c4[se]=r.current,a4[se]=o,r.current=g}function Zr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){Gr(_v,g,r),Gr(Tb,r,r),Gr(Vv,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?jH(g):Pv:Pv;break;default:if(o=g.tagName,g=g.namespaceURI)g=jH(g),g=fH(g,o);else switch(o){case"svg":g=Zh;break;case"math":g=cu;break;default:g=Pv}}o=o.toLowerCase(),o=V8(null,o),o={context:g,ancestorInfo:o},qr(Vv,r),Gr(Vv,o,r)}function s(r){qr(Vv,r),qr(Tb,r),qr(_v,r)}function vr(){return Zr(Vv.current)}function zr(r){r.memoizedState!==null&&Gr(fi,r,r);var g=Zr(Vv.current),o=r.type,e=fH(g.context,o);o=V8(g.ancestorInfo,o),e={context:e,ancestorInfo:o},g!==e&&(Gr(Tb,r,r),Gr(Vv,e,r))}function Xr(r){Tb.current===r&&(qr(Vv,r),qr(Tb,r)),fi.current===r&&(qr(fi,r),$w._currentValue=W1)}function V(){}function F(){if(Sb===0){zq=console.log,mq=console.info,Kq=console.warn,Uq=console.error,$q=console.group,Lq=console.groupCollapsed,Iq=console.groupEnd;var r={configurable:!0,enumerable:!0,value:V,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Sb++}function or(){if(Sb--,Sb===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:zq}),info:cr({},r,{value:mq}),warn:cr({},r,{value:Kq}),error:cr({},r,{value:Uq}),group:cr({},r,{value:$q}),groupCollapsed:cr({},r,{value:Lq}),groupEnd:cr({},r,{value:Iq})})}0>Sb&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Or(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Ar(r){if(j4===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);j4=g&&g[1]||"",Fq=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j4+r+Fq}function xr(r,g){if(!r||f4)return"";var o=p4.get(r);if(o!==void 0)return o;f4=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var e=null;e=C.H,C.H=null,F();try{var h={DetermineComponentFrameRoot:function(){try{if(g){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(hr){var N=hr}Reflect.construct(r,[],Q)}else{try{Q.call()}catch(hr){N=hr}r.call(Q.prototype)}}else{try{throw Error()}catch(hr){N=hr}(Q=r())&&typeof Q.catch==="function"&&Q.catch(function(){})}}catch(hr){if(hr&&N&&typeof hr.stack==="string")return[hr.stack,N.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=h.DetermineComponentFrameRoot(),t=u[0],q=u[1];if(t&&q){var M=t.split(`
`),U=q.split(`
`);for(u=b=0;b<M.length&&!M[b].includes("DetermineComponentFrameRoot");)b++;for(;u<U.length&&!U[u].includes("DetermineComponentFrameRoot");)u++;if(b===M.length||u===U.length)for(b=M.length-1,u=U.length-1;1<=b&&0<=u&&M[b]!==U[u];)u--;for(;1<=b&&0<=u;b--,u--)if(M[b]!==U[u]){if(b!==1||u!==1)do if(b--,u--,0>u||M[b]!==U[u]){var $=`
`+M[b].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&p4.set(r,$),$}while(1<=b&&0<=u);break}}}finally{f4=!1,C.H=e,or(),Error.prepareStackTrace=o}return M=(M=r?r.displayName||r.name:"")?Ar(M):"",typeof r==="function"&&p4.set(r,M),M}function br(r,g){switch(r.tag){case 26:case 27:case 5:return Ar(r.type);case 16:return Ar("Lazy");case 13:return r.child!==g&&g!==null?Ar("Suspense Fallback"):Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return xr(r.type,!1);case 11:return xr(r.type.render,!1);case 1:return xr(r.type,!0);case 31:return Ar("Activity");default:return""}}function Cr(r){try{var g="",o=null;do{g+=br(r,o);var e=r._debugInfo;if(e)for(var h=e.length-1;0<=h;h--){var b=e[h];if(typeof b.name==="string"){var u=g;r:{var{name:t,env:q,debugLocation:M}=b;if(M!=null){var U=Or(M),$=U.lastIndexOf(`
`),Q=$===-1?U:U.slice($+1);if(Q.indexOf(t)!==-1){var N=`
`+Q;break r}}N=Ar(t+(q?" ["+q+"]":""))}g=u+N}}o=r,r=r.return}while(r);return g}catch(hr){return`
Error generating stack: `+hr.message+`
`+hr.stack}}function fr(r){return(r=r?r.displayName||r.name:"")?Ar(r):""}function Wg(){if(nl===null)return null;var r=nl._debugOwner;return r!=null?j(r):null}function $o(){if(nl===null)return"";var r=nl;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Ar(r.type);break;case 13:g+=Ar("Suspense");break;case 19:g+=Ar("SuspenseList");break;case 31:g+=Ar("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=fr(r.type));break;case 11:r._debugOwner||g!==""||(g+=fr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var e=o._debugStack;if(r&&e){var h=Or(e);h!==""&&(g+=`
`+h)}}else if(r.debugStack!=null){var b=r.debugStack;(r=r.owner)&&b&&(g+=`
`+Or(b))}else break;var u=g}catch(t){u=`
Error generating stack: `+t.message+`
`+t.stack}return u}function wr(r,g,o,e,h,b,u){var t=nl;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,e,h,b,u)):g(o,e,h,b,u)}finally{_o(t)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){C.getCurrentStack=r===null?null:$o,Qe=!1,nl=r}function Yo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rl(r){try{return ag(r),!1}catch(g){return!0}}function ag(r){return""+r}function tg(r,g){if(rl(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),ag(r)}function rb(r,g){if(rl(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),ag(r)}function Sr(r){if(rl(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yo(r)),ag(r)}function N1(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{eh=g.inject(r),zo=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Rg(r){if(typeof ZY==="function"&&xY(r),zo&&typeof zo.setStrictMode==="function")try{zo.setStrictMode(eh,r)}catch(g){ze||(ze=!0,console.error("React instrumentation encountered an error: %o",g))}}function C5(r){return r>>>=0,r===0?32:31-(CY(r)/TY|0)|0}function he(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function $0(r,g,o){var e=r.pendingLanes;if(e===0)return 0;var h=0,b=r.suspendedLanes,u=r.pingedLanes;r=r.warmLanes;var t=e&134217727;return t!==0?(e=t&~b,e!==0?h=he(e):(u&=t,u!==0?h=he(u):o||(o=t&~r,o!==0&&(h=he(o))))):(t=e&~b,t!==0?h=he(t):u!==0?h=he(u):o||(o=e&~r,o!==0&&(h=he(o)))),h===0?0:g!==0&&g!==h&&(g&b)===0&&(b=h&-h,o=g&-g,b>=o||b===32&&(o&4194048)!==0)?g:h}function L0(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Zn(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function B1(){var r=si;return si<<=1,(si&62914560)===0&&(si=4194304),r}function Z1(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function Kv(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function T5(r,g,o,e,h,b){var u=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:t,expirationTimes:q,hiddenUpdates:M}=r;for(o=u&~o;0<o;){var U=31-Io(o),$=1<<U;t[U]=0,q[U]=-1;var Q=M[U];if(Q!==null)for(M[U]=null,U=0;U<Q.length;U++){var N=Q[U];N!==null&&(N.lane&=-536870913)}o&=~$}e!==0&&I0(r,e,0),b!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=b&~(u&~g))}function I0(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var e=31-Io(g);r.entangledLanes|=g,r.entanglements[e]=r.entanglements[e]|1073741824|o&261930}function F0(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var e=31-Io(o),h=1<<e;h&g|r[e]&g&&(r[e]|=g),o&=~h}}function N0(r,g){var o=g&-g;return o=(o&42)!==0?1:B0(o),(o&(r.suspendedLanes|g))!==0?0:o}function B0(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function gb(r,g,o){if(me)for(r=r.pendingUpdatersLaneMap;0<o;){var e=31-Io(o),h=1<<e;r[e].add(g),o&=~h}}function Uv(r,g){if(me)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:e}=r;0<g;){var h=31-Io(g);r=1<<h,h=o[h],0<h.size&&(h.forEach(function(b){var u=b.alternate;u!==null&&e.has(u)||e.add(b)}),h.clear()),g&=~r}}function W(r){return r&=-r,tl!==0&&tl<r?_l!==0&&_l<r?(r&134217727)!==0?Ke:ru:_l:tl}function I(){var r=wg.p;if(r!==0)return r;return r=window.event,r===void 0?Ke:Mq(r.type)}function gr(r,g){var o=wg.p;try{return wg.p=r,g()}finally{wg.p=o}}function ir(r){delete r[Ao],delete r[Fo],delete r[ot],delete r[SY],delete r[kY]}function Mr(r){var g=r[Ao];if(g)return g;for(var o=r.parentNode;o;){if(g=o[Ev]||o[Ao]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=eq(r);r!==null;){if(o=r[Ao])return o;r=eq(r)}return g}r=o,o=r.parentNode}return null}function Fr(r){if(r=r[Ao]||r[Ev]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Nr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function lg(r){var g=r[Nq];return g||(g=r[Nq]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Jr(r){r[kb]=!0}function Jo(r,g){gl(r,g),gl(r+"Capture",g)}function gl(r,g){p0[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p0[r]=g;var o=r.toLowerCase();lt[o]=r,r==="onDoubleClick"&&(lt.ondblclick=r);for(r=0;r<g.length;r++)Bq.add(g[r])}function $v(r,g){DY[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function ob(r){if(Vl.call(xq,r))return!0;if(Vl.call(Zq,r))return!1;if(VY.test(r))return xq[r]=!0;return Zq[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function K8(r,g,o){if(ob(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return tg(o,g),r===""+o?o:r}}function S5(r,g,o){if(ob(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var e=g.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){r.removeAttribute(g);return}}tg(o,g),r.setAttribute(g,""+o)}}function k5(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}tg(o,g),r.setAttribute(g,""+o)}}function _e(r,g,o,e){if(e===null)r.removeAttribute(o);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}tg(e,o),r.setAttributeNS(g,o,""+e)}}function Yl(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Sr(r),r;default:return""}}function U8(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function TG(r,g,o){var e=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof e<"u"&&typeof e.get==="function"&&typeof e.set==="function"){var{get:h,set:b}=e;return Object.defineProperty(r,g,{configurable:!0,get:function(){return h.call(this)},set:function(u){Sr(u),o=""+u,b.call(this,u)}}),Object.defineProperty(r,g,{enumerable:e.enumerable}),{getValue:function(){return o},setValue:function(u){Sr(u),o=""+u},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function xn(r){if(!r._valueTracker){var g=U8(r)?"checked":"value";r._valueTracker=TG(r,g,""+r[g])}}function $8(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),e="";return r&&(e=U8(r)?r.checked?"true":"false":r.value),r=e,r!==o?(g.setValue(r),!0):!1}function D5(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Jl(r){return r.replace(_Y,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function L8(r,g){g.checked===void 0||g.defaultChecked===void 0||Tq||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component",g.type),Tq=!0),g.value===void 0||g.defaultValue===void 0||Cq||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component",g.type),Cq=!0)}function Cn(r,g,o,e,h,b,u,t){if(r.name="",u!=null&&typeof u!=="function"&&typeof u!=="symbol"&&typeof u!=="boolean"?(tg(u,"type"),r.type=u):r.removeAttribute("type"),g!=null)if(u==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+Yl(g)}else r.value!==""+Yl(g)&&(r.value=""+Yl(g));else u!=="submit"&&u!=="reset"||r.removeAttribute("value");g!=null?Tn(r,u,Yl(g)):o!=null?Tn(r,u,Yl(o)):e!=null&&r.removeAttribute("value"),h==null&&b!=null&&(r.defaultChecked=!!b),h!=null&&(r.checked=h&&typeof h!=="function"&&typeof h!=="symbol"),t!=null&&typeof t!=="function"&&typeof t!=="symbol"&&typeof t!=="boolean"?(tg(t,"name"),r.name=""+Yl(t)):r.removeAttribute("name")}function I8(r,g,o,e,h,b,u,t){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(tg(b,"type"),r.type=b),g!=null||o!=null){if(!(b!=="submit"&&b!=="reset"||g!==void 0&&g!==null)){xn(r);return}o=o!=null?""+Yl(o):"",g=g!=null?""+Yl(g):o,t||g===r.value||(r.value=g),r.defaultValue=g}e=e!=null?e:h,e=typeof e!=="function"&&typeof e!=="symbol"&&!!e,r.checked=t?r.checked:!!e,r.defaultChecked=!!e,u!=null&&typeof u!=="function"&&typeof u!=="symbol"&&typeof u!=="boolean"&&(tg(u,"name"),r.name=u),xn(r)}function Tn(r,g,o){g==="number"&&D5(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function F8(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?Th.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||kq||(kq=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||Dq||(Dq=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||Sq||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Sq=!0)}function N8(){var r=Wg();return r?`

Check the render method of \``+r+"`.":""}function x1(r,g,o,e){if(r=r.options,g){g={};for(var h=0;h<o.length;h++)g["$"+o[h]]=!0;for(o=0;o<r.length;o++)h=g.hasOwnProperty("$"+r[o].value),r[o].selected!==h&&(r[o].selected=h),h&&e&&(r[o].defaultSelected=!0)}else{o=""+Yl(o),g=null;for(h=0;h<r.length;h++){if(r[h].value===o){r[h].selected=!0,e&&(r[h].defaultSelected=!0);return}g!==null||r[h].disabled||(g=r[h])}g!==null&&(g.selected=!0)}}function B8(r,g){for(r=0;r<_q.length;r++){var o=_q[r];if(g[o]!=null){var e=lo(g[o]);g.multiple&&!e?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,N8()):!g.multiple&&e&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,N8())}}g.value===void 0||g.defaultValue===void 0||Vq||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),Vq=!0)}function Z8(r,g){g.value===void 0||g.defaultValue===void 0||yq||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Wg()||"A component"),yq=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function x8(r,g,o){if(g!=null&&(g=""+Yl(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+Yl(o):""}function C8(r,g,o,e){if(g==null){if(e!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(lo(e)){if(1<e.length)throw Error("<textarea> can only have at most one child.");e=e[0]}o=e}o==null&&(o=""),g=o}o=Yl(g),r.defaultValue=o,e=r.textContent,e===o&&e!==""&&e!==null&&(r.value=e),xn(r)}function T8(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?T8(r.children[0],g):r}function ol(r){return"  "+"  ".repeat(r)}function C1(r){return"+ "+"  ".repeat(r)}function Z0(r){return"- "+"  ".repeat(r)}function S8(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function lb(r,g){return Eq.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function V5(r,g,o){var e=120-2*o;if(g===null)return C1(o)+lb(r,e)+`
`;if(typeof g==="string"){for(var h=0;h<g.length&&h<r.length&&g.charCodeAt(h)===r.charCodeAt(h);h++);return h>e-8&&10<h&&(r="..."+r.slice(h-8),g="..."+g.slice(h-8)),C1(o)+lb(r,e)+`
`+Z0(o)+lb(g,e)+`
`}return ol(o)+lb(r,e)+`
`}function Sn(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function eb(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(lo(r))return"[...]";if(r.$$typeof===Ye)return(g=y(r.type))?"<"+g+">":"<...>";var o=Sn(r);if(o==="Object"){o="",g-=2;for(var e in r)if(r.hasOwnProperty(e)){var h=JSON.stringify(e);if(h!=='"'+e+'"'&&(e=h),g-=e.length-2,h=eb(r[e],15>g?g:15),g-=h.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+e+":"+h}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function T1(r,g){return typeof r!=="string"||Eq.test(r)?"{"+eb(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function kn(r,g,o){var e=120-o.length-r.length,h=[],b;for(b in g)if(g.hasOwnProperty(b)&&b!=="children"){var u=T1(g[b],120-o.length-b.length-1);e-=b.length+u.length+2,h.push(b+"="+u)}return h.length===0?o+"<"+r+`>
`:0<e?o+"<"+r+" "+h.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+h.join(`
`+o+"  ")+`
`+o+`>
`}function SG(r,g,o){var e="",h=cr({},g),b;for(b in r)if(r.hasOwnProperty(b)){delete h[b];var u=120-2*o-b.length-2,t=eb(r[b],u);g.hasOwnProperty(b)?(u=eb(g[b],u),e+=C1(o)+b+": "+t+`
`,e+=Z0(o)+b+": "+u+`
`):e+=C1(o)+b+": "+t+`
`}for(var q in h)h.hasOwnProperty(q)&&(r=eb(h[q],120-2*o-q.length-2),e+=Z0(o)+q+": "+r+`
`);return e}function kG(r,g,o,e){var h="",b=new Map;for(M in o)o.hasOwnProperty(M)&&b.set(M.toLowerCase(),M);if(b.size===1&&b.has("children"))h+=kn(r,g,ol(e));else{for(var u in g)if(g.hasOwnProperty(u)&&u!=="children"){var t=120-2*(e+1)-u.length-1,q=b.get(u.toLowerCase());if(q!==void 0){b.delete(u.toLowerCase());var M=g[u];q=o[q];var U=T1(M,t);t=T1(q,t),typeof M==="object"&&M!==null&&typeof q==="object"&&q!==null&&Sn(M)==="Object"&&Sn(q)==="Object"&&(2<Object.keys(M).length||2<Object.keys(q).length||-1<U.indexOf("...")||-1<t.indexOf("..."))?h+=ol(e+1)+u+`={{
`+SG(M,q,e+2)+ol(e+1)+`}}
`:(h+=C1(e+1)+u+"="+U+`
`,h+=Z0(e+1)+u+"="+t+`
`)}else h+=ol(e+1)+u+"="+T1(g[u],t)+`
`}b.forEach(function($){if($!=="children"){var Q=120-2*(e+1)-$.length-1;h+=Z0(e+1)+$+"="+T1(o[$],Q)+`
`}}),h=h===""?ol(e)+"<"+r+`>
`:ol(e)+"<"+r+`
`+h+ol(e)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(b="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=""+g;h+=V5(b,""+r,e+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")h=r==null?h+V5(""+g,null,e+1):h+V5(""+g,void 0,e+1);return h}function k8(r,g){var o=S8(r);if(o===null){o="";for(r=r.child;r;)o+=k8(r,g),r=r.sibling;return o}return ol(g)+"<"+o+`>
`}function Dn(r,g){var o=T8(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return ol(g)+`...
`+Dn(o,g+1);o="";var e=r.fiber._debugInfo;if(e)for(var h=0;h<e.length;h++){var b=e[h].name;typeof b==="string"&&(o+=ol(g)+"<"+b+`>
`,g++)}if(e="",h=r.fiber.pendingProps,r.fiber.tag===6)e=V5(h,r.serverProps,g),g++;else if(b=S8(r.fiber),b!==null)if(r.serverProps===void 0){e=g;var u=120-2*e-b.length-2,t="";for(M in h)if(h.hasOwnProperty(M)&&M!=="children"){var q=T1(h[M],15);if(u-=M.length+q.length+2,0>u){t+=" ...";break}t+=" "+M+"="+q}e=ol(e)+"<"+b+t+`>
`,g++}else r.serverProps===null?(e=kn(b,h,C1(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(e=kG(b,h,r.serverProps,g),g++);var M="";h=r.fiber.child;for(b=0;h&&b<r.children.length;)u=r.children[b],u.fiber===h?(M+=Dn(u,g),b++):M+=k8(h,g),h=h.sibling;h&&0<r.children.length&&(M+=ol(g)+`...
`),h=r.serverTail,r.serverProps===null&&g--;for(r=0;r<h.length;r++)b=h[r],M=typeof b==="string"?M+(Z0(g)+lb(b,120-2*g)+`
`):M+kn(b.type,b.props,Z0(g));return o+e+M}function Vn(r){try{return`

`+Dn(r,0)}catch(g){return""}}function D8(r,g,o){for(var e=g,h=null,b=0;e;)e===r&&(b=0),h={fiber:e,children:h!==null?[h]:[],serverProps:e===g?o:e===r?null:void 0,serverTail:[],distanceFromLeaf:b},b++,e=e.return;return h!==null?Vn(h).replaceAll(/^[+-]/gm,">"):""}function V8(r,g){var o=cr({},r||aq),e={tag:g};if(cq.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),EY.indexOf(g)!==-1&&(o.pTagInButtonScope=null),yY.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=e,g==="form"&&(o.formTag=e),g==="a"&&(o.aTagInScope=e),g==="button"&&(o.buttonTagInScope=e),g==="nobr"&&(o.nobrTagInScope=e),g==="p"&&(o.pTagInButtonScope=e),g==="li"&&(o.listItemTagAutoclosing=e),g==="dd"||g==="dt")o.dlItemTagAutoclosing=e;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=e),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function _8(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return cY.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function DG(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function y8(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function _n(r,g){g=g||aq;var o=g.current;if(g=(o=_8(r,o&&o.tag,g.implicitRootScope)?null:o)?null:DG(r,g),g=o||g,!g)return!0;var e=g.tag;if(g=String(!!o)+"|"+r+"|"+e,gu[g])return!1;gu[g]=!0;var h=(g=nl)?y8(g.return,e):null,b=g!==null&&h!==null?D8(h,g,null):"",u="<"+r+">";return o?(o="",e==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,u,e,o,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,u,e,b),g&&(r=g.return,h===null||r===null||h===r&&r._debugOwner===g._debugOwner||wr(h,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,e,u)})),!1}function _5(r,g,o){if(o||_8("#text",g,!1))return!0;if(o="#text|"+g,gu[o])return!1;gu[o]=!0;var e=(o=nl)?y8(o,g):null;return o=o!==null&&e!==null?D8(e,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function vb(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function VG(r){return r.replace(fY,function(g,o){return o.toUpperCase()})}function E8(r,g,o){var e=g.indexOf("--")===0;e||(-1<g.indexOf("-")?vh.hasOwnProperty(g)&&vh[g]||(vh[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,VG(g.replace(jY,"ms-")))):aY.test(g)?vh.hasOwnProperty(g)&&vh[g]||(vh[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!pq.test(o)||vt.hasOwnProperty(o)&&vt[o]||(vt[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(pq,""))),typeof o==="number"&&(isNaN(o)?dq||(dq=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||sq||(sq=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?e?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":e?r.setProperty(g,o):typeof o!=="number"||o===0||rA.has(g)?g==="float"?r.cssFloat=o:(rb(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function c8(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var e={};if(o){for(var h in o)if(o.hasOwnProperty(h)&&!g.hasOwnProperty(h))for(var b=et[h]||[h],u=0;u<b.length;u++)e[b[u]]=h}for(var t in g)if(g.hasOwnProperty(t)&&(!o||o[t]!==g[t]))for(h=et[t]||[t],b=0;b<h.length;b++)e[h[b]]=t;t={};for(var q in g)for(h=et[q]||[q],b=0;b<h.length;b++)t[h[b]]=q;q={};for(var M in e)if(h=e[M],(b=t[M])&&h!==b&&(u=h+","+b,!q[u])){q[u]=!0,u=console;var U=g[h];u.error.call(u,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",U==null||typeof U==="boolean"||U===""?"Removing":"Updating",h,b)}}for(var $ in o)!o.hasOwnProperty($)||g!=null&&g.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var Q in g)M=g[Q],g.hasOwnProperty(Q)&&o[Q]!==M&&E8(r,Q,M)}else for(e in g)g.hasOwnProperty(e)&&E8(r,e,g[e])}function hb(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function a8(r){return pY.get(r)||r}function _G(r,g){if(Vl.call(bh,g)&&bh[g])return!0;if(sY.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=gA.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),bh[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),bh[g]=!0}if(dY.test(g)){if(r=g.toLowerCase(),r=gA.hasOwnProperty(r)?r:null,r==null)return bh[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),bh[g]=!0)}return!0}function yG(r,g){var o=[],e;for(e in g)_G(r,e)||o.push(e);g=o.map(function(h){return"`"+h+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function EG(r,g,o,e){if(Vl.call(No,g)&&No[g])return!0;var h=g.toLowerCase();if(h==="onfocusin"||h==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),No[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(e!=null){if(r=e.possibleRegistrationNames,e.registrationNameDependencies.hasOwnProperty(g))return!0;if(e=r.hasOwnProperty(h)?r[h]:null,e!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,e),No[g]=!0;if(lA.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),No[g]=!0}else if(lA.test(g))return rJ.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),No[g]=!0;if(gJ.test(g)||oJ.test(g))return!0;if(h==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),No[g]=!0;if(h==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),No[g]=!0;if(h==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),No[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),No[g]=!0;if(lu.hasOwnProperty(h)){if(h=lu[h],h!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,h),No[g]=!0}else if(g!==h)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,h),No[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(h=g.toLowerCase().slice(0,5),h==="data-"||h==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),No[g]=!0}case"function":case"symbol":return No[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),No[g]=!0}}return!0}function cG(r,g,o){var e=[],h;for(h in g)EG(r,h,g[h],o)||e.push(h);g=e.map(function(b){return"`"+b+"`"}).join(", "),e.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<e.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function bb(r){return lJ.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function ye(){}function yn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function j8(r){var g=Fr(r);if(g&&(r=g.stateNode)){var o=r[Fo]||null;r:switch(r=g.stateNode,g.type){case"input":if(Cn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;tg(g,"name"),o=o.querySelectorAll('input[name="'+Jl(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var e=o[g];if(e!==r&&e.form===r.form){var h=e[Fo]||null;if(!h)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Cn(e,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(g=0;g<o.length;g++)e=o[g],e.form===r.form&&$8(e)}break r;case"textarea":x8(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&x1(r,!!o.multiple,g,!1)}}}function f8(r,g,o){if(ht)return r(g,o);ht=!0;try{var e=r(g);return e}finally{if(ht=!1,wh!==null||ih!==null){if(j1(),wh&&(g=wh,r=ih,ih=wh=null,j8(g),r))for(g=0;g<r.length;g++)j8(r[g])}}}function wb(r,g){var o=r.stateNode;if(o===null)return null;var e=o[Fo]||null;if(e===null)return null;o=e[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(r=r.type,e=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!e;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function p8(){if(eu)return eu;var r,g=wt,o=g.length,e,h="value"in cv?cv.value:cv.textContent,b=h.length;for(r=0;r<o&&g[r]===h[r];r++);var u=o-r;for(e=1;e<=u&&g[o-e]===h[b-e];e++);return eu=h.slice(r,1<e?1-e:void 0)}function y5(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function E5(){return!0}function d8(){return!1}function yo(r){function g(o,e,h,b,u){this._reactName=o,this._targetInst=h,this.type=e,this.nativeEvent=b,this.target=u,this.currentTarget=null;for(var t in r)r.hasOwnProperty(t)&&(o=r[t],this[t]=o?o(b):b[t]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?E5:d8,this.isPropagationStopped=d8,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=E5)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=E5)},persist:function(){},isPersistent:E5}),g}function aG(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=qJ[r])?!!g[r]:!1}function En(){return aG}function s8(r,g){switch(r){case"keyup":return KJ.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==bA;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rP(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function jG(r,g){switch(r){case"compositionend":return rP(g);case"keypress":if(g.which!==iA)return null;return nA=!0,uA;case"textInput":return r=g.data,r===uA&&nA?null:r;default:return null}}function fG(r,g){if(uh)return r==="compositionend"||!tt&&s8(r,g)?(r=p8(),eu=wt=cv=null,uh=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return wA&&g.locale!=="ko"?null:g.data;default:return null}}function gP(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!$J[r.type]:g==="textarea"?!0:!1}function pG(r){if(!Ue)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function oP(r,g,o,e){wh?ih?ih.push(e):ih=[e]:wh=e,g=Ci(g,"onChange"),0<g.length&&(o=new vu("onChange","change",null,o,e),r.push({event:o,listeners:g}))}function dG(r){CH(r,0)}function c5(r){var g=Nr(r);if($8(g))return r}function lP(r,g){if(r==="change")return g}function eP(){cb&&(cb.detachEvent("onpropertychange",vP),ab=cb=null)}function vP(r){if(r.propertyName==="value"&&c5(ab)){var g=[];oP(g,ab,r,yn(r)),f8(dG,g)}}function sG(r,g,o){r==="focusin"?(eP(),cb=g,ab=o,cb.attachEvent("onpropertychange",vP)):r==="focusout"&&eP()}function rX(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return c5(ab)}function gX(r,g){if(r==="click")return c5(g)}function oX(r,g){if(r==="input"||r==="change")return c5(g)}function lX(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function ib(r,g){if(Bo(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),e=Object.keys(g);if(o.length!==e.length)return!1;for(e=0;e<o.length;e++){var h=o[e];if(!Vl.call(g,h)||!Bo(r[h],g[h]))return!1}return!0}function hP(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function bP(r,g){var o=hP(r);r=0;for(var e;o;){if(o.nodeType===3){if(e=r+o.textContent.length,r<=g&&e>=g)return{node:o,offset:g-r};r=e}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=hP(o)}}function wP(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?wP(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function iP(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=D5(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(e){o=!1}if(o)r=g.contentWindow;else break;g=D5(r.document)}return g}function cn(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function uP(r,g,o){var e=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ot||nh==null||nh!==D5(e)||(e=nh,("selectionStart"in e)&&cn(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),jb&&ib(jb,e)||(jb=e,e=Ci(Pt,"onSelect"),0<e.length&&(g=new vu("onSelect","select",null,g,o),r.push({event:g,listeners:e}),g.target=nh)))}function x0(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function C0(r){if(Ht[r])return Ht[r];if(!th[r])return r;var g=th[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in PA)return Ht[r]=g[o];return r}function Sl(r,g){MA.set(r,g),Jo(g,[r])}function eX(r){for(var g=bu,o=0;o<r.length;o++){var e=r[o];if(typeof e==="object"&&e!==null)if(lo(e)&&e.length===2&&typeof e[0]==="string"){if(g!==bu&&g!==Rt)return Mt;g=Rt}else return Mt;else{if(typeof e==="function"||typeof e==="string"&&50<e.length||g!==bu&&g!==Wt)return Mt;g=Wt}}return g}function an(r,g,o,e){for(var h in r)Vl.call(r,h)&&h[0]!=="_"&&be(h,r[h],g,o,e)}function be(r,g,o,e,h){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Ye){var b=y(g.type)||"…",u=g.key;g=g.props;var t=Object.keys(g),q=t.length;if(u==null&&q===0){g="<"+b+" />";break}if(3>e||q===1&&t[0]==="children"&&u==null){g="<"+b+" … />";break}o.push([h+"  ".repeat(e)+r,"<"+b]),u!==null&&be("key",u,o,e+1,h),r=!1;for(var M in g)M==="children"?g.children!=null&&(!lo(g.children)||0<g.children.length)&&(r=!0):Vl.call(g,M)&&M[0]!=="_"&&be(M,g[M],o,e+1,h);o.push(["",r?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(g),b=b.slice(8,b.length-1),b==="Array"){if(M=eX(g),M===Wt||M===bu){g=JSON.stringify(g);break}else if(M===Rt){o.push([h+"  ".repeat(e)+r,""]);for(r=0;r<g.length;r++)b=g[r],be(b[0],b[1],o,e+1,h);return}}if(b==="Promise"){if(g.status==="fulfilled"){if(b=o.length,be(r,g.value,o,e,h),o.length>b){o=o[b],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(b=o.length,be(r,g.reason,o,e,h),o.length>b)){o=o[b],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(e)+r,"Promise"]);return}b==="Object"&&(M=Object.getPrototypeOf(g))&&typeof M.constructor==="function"&&(b=M.constructor.name),o.push([h+"  ".repeat(e)+r,b==="Object"?3>e?"":"…":b]),3>e&&an(g,o,e+1,h);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===xJ?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([h+"  ".repeat(e)+r,g])}function nP(r,g,o,e){var h=!0;for(u in r)u in g||(o.push([wu+"  ".repeat(e)+u,"…"]),h=!1);for(var b in g)if(b in r){var u=r[b],t=g[b];if(u!==t){if(e===0&&b==="children")h="  ".repeat(e)+b,o.push([wu+h,"…"],[iu+h,"…"]);else{if(!(3<=e)){if(typeof u==="object"&&typeof t==="object"&&u!==null&&t!==null&&u.$$typeof===t.$$typeof)if(t.$$typeof===Ye){if(u.type===t.type&&u.key===t.key){u=y(t.type)||"…",h="  ".repeat(e)+b,u="<"+u+" … />",o.push([wu+h,u],[iu+h,u]),h=!1;continue}}else{var q=Object.prototype.toString.call(u),M=Object.prototype.toString.call(t);if(q===M&&(M==="[object Object]"||M==="[object Array]")){q=[GA+"  ".repeat(e)+b,M==="[object Array]"?"Array":""],o.push(q),M=o.length,nP(u,t,o,e+1)?M===o.length&&(q[1]="Referentially unequal but deeply equal objects. Consider memoization."):h=!1;continue}}else if(typeof u==="function"&&typeof t==="function"&&u.name===t.name&&u.length===t.length&&(q=Function.prototype.toString.call(u),M=Function.prototype.toString.call(t),q===M)){u=t.name===""?"() => {}":t.name+"() {}",o.push([GA+"  ".repeat(e)+b,u+" Referentially unequal function closure. Consider memoization."]);continue}}be(b,u,o,e,wu),be(b,t,o,e,iu)}h=!1}}else o.push([iu+"  ".repeat(e)+b,"…"]),h=!1;return h}function ll(r){jr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function we(r,g,o,e){Qg&&(jv.start=g,jv.end=o,rv.color="warning",rv.tooltipText=e,rv.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,e,jv)):performance.measure(e,jv))}function a5(r,g,o){we(r,g,o,"Reconnect")}function j5(r,g,o,e,h){var b=x(r);if(b!==null&&Qg){var{alternate:u,actualDuration:t}=r;if(u===null||u.child!==r.child)for(var q=r.child;q!==null;q=q.sibling)t-=q.actualDuration;e=0.5>t?e?"tertiary-light":"primary-light":10>t?e?"tertiary":"primary":100>t?e?"tertiary-dark":"primary-dark":"error";var M=r.memoizedProps;t=r._debugTask,M!==null&&u!==null&&u.memoizedProps!==M?(q=[CJ],M=nP(u.memoizedProps,M,q,0),1<q.length&&(M&&!av&&(u.lanes&h)===0&&100<r.actualDuration?(av=!0,q[0]=TJ,rv.color="warning",rv.tooltipText=XA):(rv.color=e,rv.tooltipText=b),rv.properties=q,jv.start=g,jv.end=o,t!=null?t.run(performance.measure.bind(performance,"​"+b,jv)):performance.measure("​"+b,jv))):t!=null?t.run(console.timeStamp.bind(console,b,g,o,zl,void 0,e)):console.timeStamp(b,g,o,zl,void 0,e)}}function jn(r,g,o,e){if(Qg){var h=x(r);if(h!==null){for(var b=null,u=[],t=0;t<e.length;t++){var q=e[t];b==null&&q.source!==null&&(b=q.source._debugTask),q=q.value,u.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r.key!==null&&be("key",r.key,u,0,""),r.memoizedProps!==null&&an(r.memoizedProps,u,0,""),b==null&&(b=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:zl,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:u}}},b?b.run(performance.measure.bind(performance,"​"+h,r)):performance.measure("​"+h,r)}}}function ie(r,g,o,e,h){if(h!==null){if(Qg){var b=x(r);if(b!==null){e=[];for(var u=0;u<h.length;u++){var t=h[u].value;e.push(["Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r.key!==null&&be("key",r.key,e,0,""),r.memoizedProps!==null&&an(r.memoizedProps,e,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:zl,tooltipText:"A lifecycle or effect errored",properties:e}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+b,g)):performance.measure("​"+b,g)}}}else b=x(r),b!==null&&Qg&&(h=1>e?"secondary-light":100>e?"secondary":500>e?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,b,g,o,zl,void 0,h)):console.timeStamp(b,g,o,zl,void 0,h))}function vX(r,g,o,e){if(Qg&&!(g<=r)){var h=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",e?e.run(console.timeStamp.bind(console,o,r,g,jr,ar,h)):console.timeStamp(o,r,g,jr,ar,h)}}function tP(r,g,o,e){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",e?e.run(console.timeStamp.bind(console,"Prewarm",r,g,jr,ar,o)):console.timeStamp("Prewarm",r,g,jr,ar,o))}function PP(r,g,o,e){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",e?e.run(console.timeStamp.bind(console,"Suspended",r,g,jr,ar,o)):console.timeStamp("Suspended",r,g,jr,ar,o))}function hX(r,g,o,e,h,b){if(Qg&&!(g<=r)){o=[];for(var u=0;u<e.length;u++){var t=e[u].value;o.push(["Recoverable Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:jr,trackGroup:ar,tooltipText:h?"Hydration Failed":"Recovered after Error",properties:o}}},b?b.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function fn(r,g,o,e){!Qg||g<=r||(e?e.run(console.timeStamp.bind(console,"Errored",r,g,jr,ar,"error")):console.timeStamp("Errored",r,g,jr,ar,"error"))}function bX(r,g,o,e){!Qg||g<=r||(e?e.run(console.timeStamp.bind(console,o,r,g,jr,ar,"secondary-light")):console.timeStamp(o,r,g,jr,ar,"secondary-light"))}function OP(r,g,o,e,h){if(Qg&&!(g<=r)){for(var b=[],u=0;u<o.length;u++){var t=o[u].value;b.push(["Error",typeof t==="object"&&t!==null&&typeof t.message==="string"?String(t.message):String(t)])}r={start:r,end:g,detail:{devtools:{color:"error",track:jr,trackGroup:ar,tooltipText:e?"Remaining Effects Errored":"Commit Errored",properties:b}}},h?h.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function ub(r,g,o){!Qg||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,jr,ar,"secondary-dark")):console.timeStamp("Animating",r,g,jr,ar,"secondary-dark"))}function f5(){for(var r=Ph,g=Gt=Ph=0;g<r;){var o=ml[g];ml[g++]=null;var e=ml[g];ml[g++]=null;var h=ml[g];ml[g++]=null;var b=ml[g];if(ml[g++]=null,e!==null&&h!==null){var u=e.pending;u===null?h.next=h:(h.next=u.next,u.next=h),e.pending=h}b!==0&&HP(o,h,b)}}function p5(r,g,o,e){ml[Ph++]=r,ml[Ph++]=g,ml[Ph++]=o,ml[Ph++]=e,Gt|=e,r.lanes|=e,r=r.alternate,r!==null&&(r.lanes|=e)}function pn(r,g,o,e){return p5(r,g,o,e),d5(r)}function Qo(r,g){return p5(r,null,null,g),d5(r)}function HP(r,g,o){r.lanes|=o;var e=r.alternate;e!==null&&(e.lanes|=o);for(var h=!1,b=r.return;b!==null;)b.childLanes|=o,e=b.alternate,e!==null&&(e.childLanes|=o),b.tag===22&&(r=b.stateNode,r===null||r._visibility&fb||(h=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,h&&g!==null&&(h=31-Io(o),r=b.hiddenUpdates,e=r[h],e===null?r[h]=[g]:e.push(g),g.lane=o|536870912),b):null}function d5(r){if(Yw>rQ)throw P1=Yw=0,Jw=r6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");P1>gQ&&(P1=0,Jw=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&LH(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&LH(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function T0(r){if(Kl===null)return r;var g=Kl(r);return g===void 0?r:g.current}function dn(r){if(Kl===null)return r;var g=Kl(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=T0(r.render),r.render!==g)?(g={$$typeof:Cb,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function qP(r,g){if(Kl===null)return!1;var o=r.elementType;g=g.type;var e=!1,h=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(e=!0);break;case 0:typeof g==="function"?e=!0:h===ul&&(e=!0);break;case 11:h===Cb?e=!0:h===ul&&(e=!0);break;case 14:case 15:h===ji?e=!0:h===ul&&(e=!0);break;default:return!1}return e&&(r=Kl(o),r!==void 0&&r===Kl(g))?!0:!1}function AP(r){Kl!==null&&typeof WeakSet==="function"&&(Oh===null&&(Oh=new WeakSet),Oh.add(r))}function MP(r,g,o){do{var e=r,h=e.alternate,b=e.child,u=e.sibling,t=e.tag;e=e.type;var q=null;switch(t){case 0:case 15:case 1:q=e;break;case 11:q=e.render}if(Kl===null)throw Error("Expected resolveFamily to be set during hot reload.");var M=!1;if(e=!1,q!==null&&(q=Kl(q),q!==void 0&&(o.has(q)?e=!0:g.has(q)&&(t===1?e=!0:M=!0))),Oh!==null&&(Oh.has(r)||h!==null&&Oh.has(h))&&(e=!0),e&&(r._debugNeedsRemount=!0),e||M)h=Qo(r,2),h!==null&&Bg(h,r,2);if(b===null||e||MP(b,g,o),u===null)break;r=u}while(1)}function wX(r,g,o,e){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,YA||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function sn(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ee(r,g){var o=r.alternate;switch(o===null?(o=Y(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=T0(r.type);break;case 1:o.type=T0(r.type);break;case 11:o.type=dn(r.type)}return o}function WP(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function r2(r,g,o,e,h,b){var u=0,t=r;if(typeof r==="function")sn(r)&&(u=1),t=T0(t);else if(typeof r==="string")u=vr(),u=AY(r,o,u)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E4:return g=Y(31,o,g,h),g.elementType=E4,g.lanes=b,g;case oh:return S0(o.children,h,b,g);case ai:u=8,h|=mo,h|=yl;break;case D4:return r=o,e=h,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=Y(12,r,g,e|kr),g.elementType=D4,g.lanes=b,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case _4:return g=Y(13,o,g,h),g.elementType=_4,g.lanes=b,g;case y4:return g=Y(19,o,g,h),g.elementType=y4,g.lanes=b,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Je:u=10;break r;case V4:u=9;break r;case Cb:u=11,t=dn(t);break r;case ji:u=14;break r;case ul:u=16,t=null;break r}if(t="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)t+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":lo(r)?o="array":r!==void 0&&r.$$typeof===Ye?(o="<"+(y(r.type)||"Unknown")+" />",t=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(u=e?j(e):null)&&(t+=`

Check the render method of \``+u+"`."),u=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+t)),t=null}return g=Y(u,o,g,h),g.elementType=r,g.type=t,g.lanes=b,g._debugOwner=e,g}function s5(r,g,o){return g=r2(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function S0(r,g,o,e){return r=Y(7,r,e,g),r.lanes=o,r}function g2(r,g,o){return r=Y(6,r,null,g),r.lanes=o,r}function RP(r){var g=Y(18,null,null,Kr);return g.stateNode=r,g}function o2(r,g,o){return g=Y(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function el(r,g){if(typeof r==="object"&&r!==null){var o=Xt.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:Cr(g)},Xt.set(r,g),g}return{value:r,source:g,stack:Cr(g)}}function ce(r,g){Lv(),Hh[qh++]=pb,Hh[qh++]=uu,uu=r,pb=g}function GP(r,g,o){Lv(),Ul[$l++]=ov,Ul[$l++]=lv,Ul[$l++]=s0,s0=r;var e=ov;r=lv;var h=32-Io(e)-1;e&=~(1<<h),o+=1;var b=32-Io(g)+h;if(30<b){var u=h-h%5;b=(e&(1<<u)-1).toString(32),e>>=u,h-=u,ov=1<<32-Io(g)+h|o<<h|e,lv=b+r}else ov=1<<b|o<<h|e,lv=r}function l2(r){Lv(),r.return!==null&&(ce(r,1),GP(r,1,0))}function e2(r){for(;r===uu;)uu=Hh[--qh],Hh[qh]=null,pb=Hh[--qh],Hh[qh]=null;for(;r===s0;)s0=Ul[--$l],Ul[$l]=null,lv=Ul[--$l],Ul[$l]=null,ov=Ul[--$l],Ul[$l]=null}function XP(){return Lv(),s0!==null?{id:ov,overflow:lv}:null}function YP(r,g){Lv(),Ul[$l++]=ov,Ul[$l++]=lv,Ul[$l++]=s0,ov=g.id,lv=g.overflow,s0=r}function Lv(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k0(r,g){if(r.return===null){if(Pl===null)Pl={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(Pl.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Pl.distanceFromLeaf>g&&(Pl.distanceFromLeaf=g)}return Pl}var o=k0(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function JP(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function ri(r,g){$e||(r=k0(r,0),r.serverProps=null,g!==null&&(g=oq(g),r.serverTail.push(g)))}function Iv(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",e=Pl;throw e!==null&&(Pl=null,o=Vn(e)),nb(el(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),Yt}function QP(r){var{stateNode:g,type:o,memoizedProps:e}=r;switch(g[Ao]=r,g[Fo]=e,J4(o,e),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<Qw.length;o++)dr(Qw[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":$v("input",e),dr("invalid",g),L8(g,e),I8(g,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"option":F8(g,e);break;case"select":$v("select",e),dr("invalid",g),B8(g,e);break;case"textarea":$v("textarea",e),dr("invalid",g),Z8(g,e),C8(g,e.value,e.defaultValue,e.children)}o=e.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||e.suppressHydrationWarning===!0||DH(g.textContent,o)?(e.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),e.onScroll!=null&&dr("scroll",g),e.onScrollEnd!=null&&dr("scrollend",g),e.onClick!=null&&(g.onclick=ye),g=!0):g=!1,g||Iv(r,!0)}function zP(r){for(Mo=r.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Ll=!1;return;case 27:case 3:Ll=!0;return;default:Mo=Mo.return}}function S1(r){if(r!==Mo)return!1;if(!pr)return zP(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||U4(r.type,r.memoizedProps);o=!o}if(o&&zg){for(o=zg;o;){var e=k0(r,0),h=oq(o);e.serverTail.push(h),o=h.type==="Suspense"?F4(o):il(o.nextSibling)}Iv(r)}if(zP(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=F4(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=F4(r)}else g===27?(g=zg,Dv(r.type)?(r=t6,t6=null,zg=r):zg=g):zg=Mo?il(r.stateNode.nextSibling):null;return!0}function D0(){zg=Mo=null,$e=pr=!1}function v2(){var r=pv;return r!==null&&(To===null?To=r:To.push.apply(To,r),pv=null),r}function nb(r){pv===null?pv=[r]:pv.push(r)}function h2(){var r=Pl;if(r!==null){Pl=null;for(var g=Vn(r);0<r.children.length;)r=r.children[0];wr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function gi(){Ah=nu=null,Mh=!1}function Fv(r,g,o){Gr(Jt,g._currentValue,r),g._currentValue=o,Gr(Qt,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==QA&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=QA}function ae(r,g){r._currentValue=Jt.current;var o=Qt.current;qr(Qt,g),r._currentRenderer=o,qr(Jt,g)}function b2(r,g,o){for(;r!==null;){var e=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,e!==null&&(e.childLanes|=g)):e!==null&&(e.childLanes&g)!==g&&(e.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function w2(r,g,o,e){var h=r.child;h!==null&&(h.return=r);for(;h!==null;){var b=h.dependencies;if(b!==null){var u=h.child;b=b.firstContext;r:for(;b!==null;){var t=b;b=h;for(var q=0;q<g.length;q++)if(t.context===g[q]){b.lanes|=o,t=b.alternate,t!==null&&(t.lanes|=o),b2(b.return,o,r),e||(u=null);break r}b=t.next}}else if(h.tag===18){if(u=h.return,u===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");u.lanes|=o,b=u.alternate,b!==null&&(b.lanes|=o),b2(u,o,r),u=null}else u=h.child;if(u!==null)u.return=h;else for(u=h;u!==null;){if(u===r){u=null;break}if(h=u.sibling,h!==null){h.return=u.return,u=h;break}u=u.return}h=u}}function k1(r,g,o,e){r=null;for(var h=g,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var u=h.alternate;if(u===null)throw Error("Should have a current fiber. This is a bug in React.");if(u=u.memoizedProps,u!==null){var t=h.type;Bo(h.pendingProps.value,u.value)||(r!==null?r.push(t):r=[t])}}else if(h===fi.current){if(u=h.alternate,u===null)throw Error("Should have a current fiber. This is a bug in React.");u.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push($w):r=[$w])}h=h.return}r!==null&&w2(g,r,o,e),g.flags|=262144}function oi(r){for(r=r.firstContext;r!==null;){if(!Bo(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V0(r){nu=r,Ah=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Ug(r){return Mh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),mP(nu,r)}function li(r,g){return nu===null&&V0(r),mP(r,g)}function mP(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},Ah===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Ah=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else Ah=Ah.next=g;return o}function i2(){return{controller:new DJ,data:new Map,refCount:0}}function _0(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function tb(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&VJ(_J,function(){r.controller.abort()})}function ue(r,g,o){if((r&127)!==0)0>Le&&(Le=fg(),sb=tu(g),zt=g,o!=null&&(mt=x(o)),(og&(vo|ql))!==uo&&(Zg=!0,r0=db),r=Fb(),g=Ib(),r!==Wh||g!==rw?Wh=-1.1:g!==null&&(r0=db),g1=r,rw=g);else if((r&4194048)!==0&&0>Il&&(Il=fg(),gw=tu(g),zA=g,o!=null&&(mA=x(o)),0>hv)){if(r=Fb(),g=Ib(),r!==o0||g!==o1)o0=-1.1;g0=r,o1=g}}function iX(r){if(0>Le){Le=fg(),sb=r._debugTask!=null?r._debugTask:null,(og&(vo|ql))!==uo&&(r0=db);var g=Fb(),o=Ib();g!==Wh||o!==rw?Wh=-1.1:o!==null&&(r0=db),g1=g,rw=o}if(0>Il&&(Il=fg(),gw=r._debugTask!=null?r._debugTask:null,0>hv)){if(r=Fb(),g=Ib(),r!==o0||g!==o1)o0=-1.1;g0=r,o1=g}}function je(){var r=r1;return r1=0,r}function ei(r){var g=r1;return r1=r,g}function Pb(r){var g=r1;return r1+=r,g}function vi(){mr=Qr=-1.1}function vl(){var r=Qr;return Qr=-1.1,r}function hl(r){0<=r&&(Qr=r)}function ne(){var r=Ig;return Ig=-0,r}function te(r){0<=r&&(Ig=r)}function Pe(){var r=$g;return $g=null,r}function Oe(){var r=Zg;return Zg=!1,r}function u2(r){Zo=fg(),0>r.actualStartTime&&(r.actualStartTime=Zo)}function n2(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,r.selfBaseDuration=g,Zo=-1}}function KP(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,Zo=-1}}function He(){if(0<=Zo){var r=fg(),g=r-Zo;Zo=-1,r1+=g,Ig+=g,mr=r}}function UP(r){$g===null&&($g=[]),$g.push(r),vv===null&&(vv=[]),vv.push(r)}function qe(){Zo=fg(),0>Qr&&(Qr=Zo)}function Ob(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function uX(r,g){if(lw===null){var o=lw=[];Ut=0,l1=R4(),Rh={status:"pending",value:void 0,then:function(e){o.push(e)}}}return Ut++,g.then($P,$P),g}function $P(){if(--Ut===0&&(-1<Il||(hv=-1.1),lw!==null)){Rh!==null&&(Rh.status="fulfilled");var r=lw;lw=null,l1=0,Rh=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function nX(r,g){var o=[],e={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return r.then(function(){e.status="fulfilled",e.value=g;for(var h=0;h<o.length;h++)(0,o[h])(g)},function(h){e.status="rejected",e.reason=h;for(h=0;h<o.length;h++)(0,o[h])(void 0)}),e}function t2(){var r=e1.current;return r!==null?r:Mg.pooledCache}function hi(r,g){g===null?Gr(e1,e1.current,r):Gr(e1,g.pool,r)}function LP(){var r=t2();return r===null?null:{parent:jg._currentValue,pool:r}}function IP(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function FP(r){return r=r.status,r==="fulfilled"||r==="rejected"}function NP(r,g,o){C.actQueue!==null&&(C.didUsePromise=!0);var e=r.thenables;if(o=e[o],o===void 0?e.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(ye,ye),g=o),g._debugInfo===void 0){r=performance.now(),e=g.displayName;var h={name:typeof e==="string"?e:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:h}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){h.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZP(r),r;default:if(typeof g.status==="string")g.then(ye,ye);else{if(r=Mg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(b){if(g.status==="pending"){var u=g;u.status="fulfilled",u.value=b}},function(b){if(g.status==="pending"){var u=g;u.status="rejected",u.reason=b}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZP(r),r}throw h1=g,uw=!0,Gh}}function Nv(r){try{return aJ(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw h1=g,uw=!0,Gh;throw g}}function BP(){if(h1===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=h1;return h1=null,uw=!1,r}function ZP(r){if(r===Gh||r===Ru)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Oo(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function P2(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function bi(r,g,o){for(var e=Object.keys(r.props),h=0;h<e.length;h++){var b=e[h];if(b!=="children"&&b!=="key"){g===null&&(g=s5(r,o.mode,0),g._debugInfo=Dr,g.return=o),wr(g,function(u){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u)},b);break}}}function wi(r){var g=nw;return nw+=1,Xh===null&&(Xh=IP()),NP(Xh,r,g)}function Hb(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function xP(r,g){if(g.$$typeof===mY)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function ii(r,g){var o=P2();o!==null?o.run(xP.bind(null,r,g)):xP(r,g)}function CP(r,g){var o=x(r)||"Component";cA[o]||(cA[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function ui(r,g){var o=P2();o!==null?o.run(CP.bind(null,r,g)):CP(r,g)}function TP(r,g){var o=x(r)||"Component";aA[o]||(aA[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function ni(r,g){var o=P2();o!==null?o.run(TP.bind(null,r,g)):TP(r,g)}function SP(r){function g(J,z){if(r){var K=J.deletions;K===null?(J.deletions=[z],J.flags|=16):K.push(z)}}function o(J,z){if(!r)return null;for(;z!==null;)g(J,z),z=z.sibling;return null}function e(J){for(var z=new Map;J!==null;)J.key!==null?z.set(J.key,J):z.set(J.index,J),J=J.sibling;return z}function h(J,z){return J=Ee(J,z),J.index=0,J.sibling=null,J}function b(J,z,K){if(J.index=K,!r)return J.flags|=1048576,z;if(K=J.alternate,K!==null)return K=K.index,K<z?(J.flags|=67108866,z):K;return J.flags|=67108866,z}function u(J){return r&&J.alternate===null&&(J.flags|=67108866),J}function t(J,z,K,D){if(z===null||z.tag!==6)return z=g2(K,J.mode,D),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,K),z.return=J,z._debugInfo=Dr,z}function q(J,z,K,D){var ur=K.type;if(ur===oh)return z=U(J,z,K.props.children,D,K.key),bi(K,z,J),z;if(z!==null&&(z.elementType===ur||qP(z,K)||typeof ur==="object"&&ur!==null&&ur.$$typeof===ul&&Nv(ur)===z.type))return z=h(z,K.props),Hb(z,K),z.return=J,z._debugOwner=K._owner,z._debugInfo=Dr,z;return z=s5(K,J.mode,D),Hb(z,K),z.return=J,z._debugInfo=Dr,z}function M(J,z,K,D){if(z===null||z.tag!==4||z.stateNode.containerInfo!==K.containerInfo||z.stateNode.implementation!==K.implementation)return z=o2(K,J.mode,D),z.return=J,z._debugInfo=Dr,z;return z=h(z,K.children||[]),z.return=J,z._debugInfo=Dr,z}function U(J,z,K,D,ur){if(z===null||z.tag!==7)return z=S0(K,J.mode,D,ur),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,K),z.return=J,z._debugInfo=Dr,z}function $(J,z,K){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return z=g2(""+z,J.mode,K),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;if(typeof z==="object"&&z!==null){switch(z.$$typeof){case Ye:return K=s5(z,J.mode,K),Hb(K,z),K.return=J,J=Oo(z._debugInfo),K._debugInfo=Dr,Dr=J,K;case gh:return z=o2(z,J.mode,K),z.return=J,z._debugInfo=Dr,z;case ul:var D=Oo(z._debugInfo);return z=Nv(z),J=$(J,z,K),Dr=D,J}if(lo(z)||B(z))return K=S0(z,J.mode,K,null),K.return=J,K._debugOwner=J,K._debugTask=J._debugTask,J=Oo(z._debugInfo),K._debugInfo=Dr,Dr=J,K;if(typeof z.then==="function")return D=Oo(z._debugInfo),J=$(J,wi(z),K),Dr=D,J;if(z.$$typeof===Je)return $(J,li(J,z),K);ii(J,z)}return typeof z==="function"&&ui(J,z),typeof z==="symbol"&&ni(J,z),null}function Q(J,z,K,D){var ur=z!==null?z.key:null;if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur!==null?null:t(J,z,""+K,D);if(typeof K==="object"&&K!==null){switch(K.$$typeof){case Ye:return K.key===ur?(ur=Oo(K._debugInfo),J=q(J,z,K,D),Dr=ur,J):null;case gh:return K.key===ur?M(J,z,K,D):null;case ul:return ur=Oo(K._debugInfo),K=Nv(K),J=Q(J,z,K,D),Dr=ur,J}if(lo(K)||B(K)){if(ur!==null)return null;return ur=Oo(K._debugInfo),J=U(J,z,K,D,null),Dr=ur,J}if(typeof K.then==="function")return ur=Oo(K._debugInfo),J=Q(J,z,wi(K),D),Dr=ur,J;if(K.$$typeof===Je)return Q(J,z,li(J,K),D);ii(J,K)}return typeof K==="function"&&ui(J,K),typeof K==="symbol"&&ni(J,K),null}function N(J,z,K,D,ur){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return J=J.get(K)||null,t(z,J,""+D,ur);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Ye:return K=J.get(D.key===null?K:D.key)||null,J=Oo(D._debugInfo),z=q(z,K,D,ur),Dr=J,z;case gh:return J=J.get(D.key===null?K:D.key)||null,M(z,J,D,ur);case ul:var $r=Oo(D._debugInfo);return D=Nv(D),z=N(J,z,K,D,ur),Dr=$r,z}if(lo(D)||B(D))return K=J.get(K)||null,J=Oo(D._debugInfo),z=U(z,K,D,ur,null),Dr=J,z;if(typeof D.then==="function")return $r=Oo(D._debugInfo),z=N(J,z,K,wi(D),ur),Dr=$r,z;if(D.$$typeof===Je)return N(J,z,K,li(z,D),ur);ii(z,D)}return typeof D==="function"&&ui(z,D),typeof D==="symbol"&&ni(z,D),null}function hr(J,z,K,D){if(typeof K!=="object"||K===null)return D;switch(K.$$typeof){case Ye:case gh:G(J,z,K);var ur=K.key;if(typeof ur!=="string")break;if(D===null){D=new Set,D.add(ur);break}if(!D.has(ur)){D.add(ur);break}wr(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ur)});break;case ul:K=Nv(K),hr(J,z,K,D)}return D}function Pr(J,z,K,D){for(var ur=null,$r=null,Yr=null,Rr=z,Tr=z=0,mg=null;Rr!==null&&Tr<K.length;Tr++){Rr.index>Tr?(mg=Rr,Rr=null):mg=Rr.sibling;var _g=Q(J,Rr,K[Tr],D);if(_g===null){Rr===null&&(Rr=mg);break}ur=hr(J,_g,K[Tr],ur),r&&Rr&&_g.alternate===null&&g(J,Rr),z=b(_g,z,Tr),Yr===null?$r=_g:Yr.sibling=_g,Yr=_g,Rr=mg}if(Tr===K.length)return o(J,Rr),pr&&ce(J,Tr),$r;if(Rr===null){for(;Tr<K.length;Tr++)Rr=$(J,K[Tr],D),Rr!==null&&(ur=hr(J,Rr,K[Tr],ur),z=b(Rr,z,Tr),Yr===null?$r=Rr:Yr.sibling=Rr,Yr=Rr);return pr&&ce(J,Tr),$r}for(Rr=e(Rr);Tr<K.length;Tr++)mg=N(Rr,J,Tr,K[Tr],D),mg!==null&&(ur=hr(J,mg,K[Tr],ur),r&&mg.alternate!==null&&Rr.delete(mg.key===null?Tr:mg.key),z=b(mg,z,Tr),Yr===null?$r=mg:Yr.sibling=mg,Yr=mg);return r&&Rr.forEach(function(Hv){return g(J,Hv)}),pr&&ce(J,Tr),$r}function Xg(J,z,K,D){if(K==null)throw Error("An iterable object provided no iterator.");for(var ur=null,$r=null,Yr=z,Rr=z=0,Tr=null,mg=null,_g=K.next();Yr!==null&&!_g.done;Rr++,_g=K.next()){Yr.index>Rr?(Tr=Yr,Yr=null):Tr=Yr.sibling;var Hv=Q(J,Yr,_g.value,D);if(Hv===null){Yr===null&&(Yr=Tr);break}mg=hr(J,Hv,_g.value,mg),r&&Yr&&Hv.alternate===null&&g(J,Yr),z=b(Hv,z,Rr),$r===null?ur=Hv:$r.sibling=Hv,$r=Hv,Yr=Tr}if(_g.done)return o(J,Yr),pr&&ce(J,Rr),ur;if(Yr===null){for(;!_g.done;Rr++,_g=K.next())Yr=$(J,_g.value,D),Yr!==null&&(mg=hr(J,Yr,_g.value,mg),z=b(Yr,z,Rr),$r===null?ur=Yr:$r.sibling=Yr,$r=Yr);return pr&&ce(J,Rr),ur}for(Yr=e(Yr);!_g.done;Rr++,_g=K.next())Tr=N(Yr,J,Rr,_g.value,D),Tr!==null&&(mg=hr(J,Tr,_g.value,mg),r&&Tr.alternate!==null&&Yr.delete(Tr.key===null?Rr:Tr.key),z=b(Tr,z,Rr),$r===null?ur=Tr:$r.sibling=Tr,$r=Tr);return r&&Yr.forEach(function(MQ){return g(J,MQ)}),pr&&ce(J,Rr),ur}function sr(J,z,K,D){if(typeof K==="object"&&K!==null&&K.type===oh&&K.key===null&&(bi(K,null,J),K=K.props.children),typeof K==="object"&&K!==null){switch(K.$$typeof){case Ye:var ur=Oo(K._debugInfo);r:{for(var $r=K.key;z!==null;){if(z.key===$r){if($r=K.type,$r===oh){if(z.tag===7){o(J,z.sibling),D=h(z,K.props.children),D.return=J,D._debugOwner=K._owner,D._debugInfo=Dr,bi(K,D,J),J=D;break r}}else if(z.elementType===$r||qP(z,K)||typeof $r==="object"&&$r!==null&&$r.$$typeof===ul&&Nv($r)===z.type){o(J,z.sibling),D=h(z,K.props),Hb(D,K),D.return=J,D._debugOwner=K._owner,D._debugInfo=Dr,J=D;break r}o(J,z);break}else g(J,z);z=z.sibling}K.type===oh?(D=S0(K.props.children,J.mode,D,K.key),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,bi(K,D,J),J=D):(D=s5(K,J.mode,D),Hb(D,K),D.return=J,D._debugInfo=Dr,J=D)}return J=u(J),Dr=ur,J;case gh:r:{ur=K;for(K=ur.key;z!==null;){if(z.key===K)if(z.tag===4&&z.stateNode.containerInfo===ur.containerInfo&&z.stateNode.implementation===ur.implementation){o(J,z.sibling),D=h(z,ur.children||[]),D.return=J,J=D;break r}else{o(J,z);break}else g(J,z);z=z.sibling}D=o2(ur,J.mode,D),D.return=J,J=D}return u(J);case ul:return ur=Oo(K._debugInfo),K=Nv(K),J=sr(J,z,K,D),Dr=ur,J}if(lo(K))return ur=Oo(K._debugInfo),J=Pr(J,z,K,D),Dr=ur,J;if(B(K)){if(ur=Oo(K._debugInfo),$r=B(K),typeof $r!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Yr=$r.call(K);if(Yr===K){if(J.tag!==0||Object.prototype.toString.call(J.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Yr)!=="[object Generator]")yA||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),yA=!0}else K.entries!==$r||Ft||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ft=!0);return J=Xg(J,z,Yr,D),Dr=ur,J}if(typeof K.then==="function")return ur=Oo(K._debugInfo),J=sr(J,z,wi(K),D),Dr=ur,J;if(K.$$typeof===Je)return sr(J,z,li(J,K),D);ii(J,K)}if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur=""+K,z!==null&&z.tag===6?(o(J,z.sibling),D=h(z,ur),D.return=J,J=D):(o(J,z),D=g2(ur,J.mode,D),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,J=D),u(J);return typeof K==="function"&&ui(J,K),typeof K==="symbol"&&ni(J,K),o(J,z)}return function(J,z,K,D){var ur=Dr;Dr=null;try{nw=0;var $r=sr(J,z,K,D);return Xh=null,$r}catch(mg){if(mg===Gh||mg===Ru)throw mg;var Yr=Y(29,mg,null,J.mode);Yr.lanes=D,Yr.return=J;var Rr=Yr._debugInfo=Dr;if(Yr._debugOwner=J._debugOwner,Yr._debugTask=J._debugTask,Rr!=null){for(var Tr=Rr.length-1;0<=Tr;Tr--)if(typeof Rr[Tr].stack==="string"){Yr._debugOwner=Rr[Tr],Yr._debugTask=Rr[Tr].debugTask;break}}return Yr}finally{Dr=ur}}}function kP(r,g){var o=lo(r);return r=!o&&typeof B(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function O2(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function H2(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Bv(r){return{lane:r,tag:fA,payload:null,callback:null,next:null}}function Zv(r,g,o){var e=r.updateQueue;if(e===null)return null;if(e=e.shared,Bt===e&&!sA){var h=x(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,h),sA=!0}if((og&vo)!==uo)return h=e.pending,h===null?g.next=g:(g.next=h.next,h.next=g),e.pending=g,g=d5(r),HP(r,null,o),g;return p5(r,e,g,o),d5(r)}function qb(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var e=g.lanes;e&=r.pendingLanes,o|=e,g.lanes=o,F0(r,o)}}function ti(r,g){var{updateQueue:o,alternate:e}=r;if(e!==null&&(e=e.updateQueue,o===e)){var h=null,b=null;if(o=o.firstBaseUpdate,o!==null){do{var u={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};b===null?h=b=u:b=b.next=u,o=o.next}while(o!==null);b===null?h=b=g:b=b.next=g}else h=b=g;o={baseState:e.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:e.shared,callbacks:e.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Ab(){if(Zt){var r=Rh;if(r!==null)throw r}}function Mb(r,g,o,e){Zt=!1;var h=r.updateQueue;l0=!1,Bt=h.shared;var{firstBaseUpdate:b,lastBaseUpdate:u}=h,t=h.shared.pending;if(t!==null){h.shared.pending=null;var q=t,M=q.next;q.next=null,u===null?b=M:u.next=M,u=q;var U=r.alternate;U!==null&&(U=U.updateQueue,t=U.lastBaseUpdate,t!==u&&(t===null?U.firstBaseUpdate=M:t.next=M,U.lastBaseUpdate=q))}if(b!==null){var $=h.baseState;u=0,U=M=q=null,t=b;do{var Q=t.lane&-536870913,N=Q!==t.lane;if(N?(Vr&Q)===Q:(e&Q)===Q){Q!==0&&Q===l1&&(Zt=!0),U!==null&&(U=U.next={lane:0,tag:t.tag,payload:t.payload,callback:null,next:null});r:{Q=r;var hr=t,Pr=g,Xg=o;switch(hr.tag){case pA:if(hr=hr.payload,typeof hr==="function"){Mh=!0;var sr=hr.call(Xg,$,Pr);if(Q.mode&mo){Rg(!0);try{hr.call(Xg,$,Pr)}finally{Rg(!1)}}Mh=!1,$=sr;break r}$=hr;break r;case Nt:Q.flags=Q.flags&-65537|128;case fA:if(sr=hr.payload,typeof sr==="function"){if(Mh=!0,hr=sr.call(Xg,$,Pr),Q.mode&mo){Rg(!0);try{sr.call(Xg,$,Pr)}finally{Rg(!1)}}Mh=!1}else hr=sr;if(hr===null||hr===void 0)break r;$=cr({},$,hr);break r;case dA:l0=!0}}Q=t.callback,Q!==null&&(r.flags|=64,N&&(r.flags|=8192),N=h.callbacks,N===null?h.callbacks=[Q]:N.push(Q))}else N={lane:Q,tag:t.tag,payload:t.payload,callback:t.callback,next:null},U===null?(M=U=N,q=$):U=U.next=N,u|=Q;if(t=t.next,t===null)if(t=h.shared.pending,t===null)break;else N=t,t=N.next,N.next=null,h.lastBaseUpdate=N,h.shared.pending=null}while(1);U===null&&(q=$),h.baseState=q,h.firstBaseUpdate=M,h.lastBaseUpdate=U,b===null&&(h.shared.lanes=0),h0|=u,r.lanes=u,r.memoizedState=$}Bt=null}function DP(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function tX(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)DP(o[r],g)}function VP(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)DP(o[r],g)}function _P(r,g){var o=Ne;Gr(Xu,o,r),Gr(Yh,g,r),Ne=o|g.baseLanes}function q2(r){Gr(Xu,Ne,r),Gr(Yh,Yh.current,r)}function A2(r){Ne=Xu.current,qr(Yh,r),qr(Xu,r)}function xv(r){var g=r.alternate;Gr(Vg,Vg.current&Jh,r),Gr(Ol,r,r),Fl===null&&(g===null||Yh.current!==null?Fl=r:g.memoizedState!==null&&(Fl=r))}function M2(r){Gr(Vg,Vg.current,r),Gr(Ol,r,r),Fl===null&&(Fl=r)}function yP(r){r.tag===22?(Gr(Vg,Vg.current,r),Gr(Ol,r,r),Fl===null&&(Fl=r)):Cv(r)}function Cv(r){Gr(Vg,Vg.current,r),Gr(Ol,Ol.current,r)}function bl(r){qr(Ol,r),Fl===r&&(Fl=null),qr(Vg,r)}function Pi(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||L4(o)||I4(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function Er(){var r=Z;Bl===null?Bl=[r]:Bl.push(r)}function d(){var r=Z;if(Bl!==null&&(uv++,Bl[uv]!==r)){var g=x(Ur);if(!rM.has(g)&&(rM.add(g),Bl!==null)){for(var o="",e=0;e<=uv;e++){var h=Bl[e],b=e===uv?r:h;for(h=e+1+". "+h;30>h.length;)h+=" ";h+=b+`
`,o+=h}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function D1(r){r===void 0||r===null||lo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Z,typeof r)}function Oi(){var r=x(Ur);oM.has(r)||(oM.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Tg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function W2(r,g){if(Ow)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Z),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,Z,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!Bo(r[o],g[o]))return!1;return!0}function R2(r,g,o,e,h,b){if(wv=b,Ur=g,Bl=r!==null?r._debugHookTypes:null,uv=-1,Ow=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")b=x(Ur),xt.has(b)||(xt.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,C.H=r!==null&&r.memoizedState!==null?Tt:Bl!==null?lM:Ct,w1=b=(g.mode&mo)!==Kr;var u=$t(o,e,h);if(w1=!1,zh&&(u=G2(g,o,e,h)),b){Rg(!0);try{u=G2(g,o,e,h)}finally{Rg(!1)}}return EP(r,g),u}function EP(r,g){g._debugHookTypes=Bl,g.dependencies===null?iv!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:iv}):g.dependencies._debugThenableState=iv,C.H=Hw;var o=Ag!==null&&Ag.next!==null;if(wv=0,Bl=Z=pg=Ag=Ur=null,uv=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Ju=!1,Pw=0,iv=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||dg||(r=r.dependencies,r!==null&&oi(r)&&(dg=!0)),uw?(uw=!1,r=!0):r=!1,r&&(g=x(g)||"Unknown",gM.has(g)||xt.has(g)||(gM.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function G2(r,g,o,e){Ur=r;var h=0;do{if(zh&&(iv=null),Pw=0,zh=!1,h>=fJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(h+=1,Ow=!1,pg=Ag=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}uv=-1,C.H=eM,b=$t(g,o,e)}while(zh);return b}function PX(){var r=C.H,g=r.useState()[0];return g=typeof g.then==="function"?Wb(g):g,r=r.useState()[0],(Ag!==null?Ag.memoizedState:null)!==r&&(Ur.flags|=1024),g}function X2(){var r=Qu!==0;return Qu=0,r}function Y2(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&yl)!==Kr?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function J2(r){if(Ju){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}Ju=!1}wv=0,Bl=pg=Ag=Ur=null,uv=-1,Z=null,zh=!1,Pw=Qu=0,iv=null}function Lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pg===null?Ur.memoizedState=pg=r:pg=pg.next=r,pg}function ug(){if(Ag===null){var r=Ur.alternate;r=r!==null?r.memoizedState:null}else r=Ag.next;var g=pg===null?Ur.memoizedState:pg.next;if(g!==null)pg=g,Ag=r;else{if(r===null){if(Ur.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Ag=r,r={memoizedState:Ag.memoizedState,baseState:Ag.baseState,baseQueue:Ag.baseQueue,queue:Ag.queue,next:null},pg===null?Ur.memoizedState=pg=r:pg=pg.next=r}return pg}function Hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wb(r){var g=Pw;return Pw+=1,iv===null&&(iv=IP()),r=NP(iv,r,g),g=Ur,(pg===null?g.memoizedState:pg.next)===null&&(g=g.alternate,C.H=g!==null&&g.memoizedState!==null?Tt:Ct),r}function Tv(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Wb(r);if(r.$$typeof===Je)return Ug(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function y0(r){var g=null,o=Ur.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var e=Ur.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(g={data:e.data.map(function(h){return h.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=Hi(),Ur.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||Ow)for(o=g.data[g.index]=Array(r),e=0;e<r;e++)o[e]=KY;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function kl(r,g){return typeof g==="function"?g(r):g}function Q2(r,g,o){var e=Lo();if(o!==void 0){var h=o(g);if(w1){Rg(!0);try{o(g)}finally{Rg(!1)}}}else h=g;return e.memoizedState=e.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},e.queue=r,r=r.dispatch=MX.bind(null,Ur,r),[e.memoizedState,r]}function V1(r){var g=ug();return z2(g,Ag,r)}function z2(r,g,o){var e=r.queue;if(e===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");e.lastRenderedReducer=o;var h=r.baseQueue,b=e.pending;if(b!==null){if(h!==null){var u=h.next;h.next=b.next,b.next=u}g.baseQueue!==h&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=h=b,e.pending=null}if(b=r.baseState,h===null)r.memoizedState=b;else{g=h.next;var t=u=null,q=null,M=g,U=!1;do{var $=M.lane&-536870913;if($!==M.lane?(Vr&$)===$:(wv&$)===$){var Q=M.revertLane;if(Q===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),$===l1&&(U=!0);else if((wv&Q)===Q){M=M.next,Q===l1&&(U=!0);continue}else $={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},q===null?(t=q=$,u=b):q=q.next=$,Ur.lanes|=Q,h0|=Q;$=M.action,w1&&o(b,$),b=M.hasEagerState?M.eagerState:o(b,$)}else Q={lane:$,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},q===null?(t=q=Q,u=b):q=q.next=Q,Ur.lanes|=$,h0|=$;M=M.next}while(M!==null&&M!==g);if(q===null?u=b:q.next=t,!Bo(b,r.memoizedState)&&(dg=!0,U&&(o=Rh,o!==null)))throw o;r.memoizedState=b,r.baseState=u,r.baseQueue=q,e.lastRenderedState=b}return h===null&&(e.lanes=0),[r.memoizedState,e.dispatch]}function Rb(r){var g=ug(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:e,pending:h}=o,b=g.memoizedState;if(h!==null){o.pending=null;var u=h=h.next;do b=r(b,u.action),u=u.next;while(u!==h);Bo(b,g.memoizedState)||(dg=!0),g.memoizedState=b,g.baseQueue===null&&(g.baseState=b),o.lastRenderedState=b}return[b,e]}function m2(r,g,o){var e=Ur,h=Lo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=o();Qh||b===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Qh=!0)}else{if(b=g(),Qh||(o=g(),Bo(b,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qh=!0)),Mg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||cP(e,g,b)}return h.memoizedState=b,o={value:b,getSnapshot:g},h.queue=o,Wi(jP.bind(null,e,o,r),[r]),e.flags|=2048,y1(Nl|Co,{destroy:void 0},aP.bind(null,e,o,b,g),null),b}function qi(r,g,o){var e=Ur,h=ug(),b=pr;if(b){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!Qh){var u=g();Bo(o,u)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Qh=!0)}if(u=!Bo((Ag||h).memoizedState,o))h.memoizedState=o,dg=!0;h=h.queue;var t=jP.bind(null,e,h,r);if(Eo(2048,Co,t,[r]),h.getSnapshot!==g||u||pg!==null&&pg.memoizedState.tag&Nl){if(e.flags|=2048,y1(Nl|Co,{destroy:void 0},aP.bind(null,e,h,o,g),null),Mg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(wv&127)!==0||cP(e,g,o)}return o}function cP(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=Ur.updateQueue,g===null?(g=Hi(),Ur.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function aP(r,g,o,e){g.value=o,g.getSnapshot=e,fP(g)&&pP(r)}function jP(r,g,o){return o(function(){fP(g)&&(ue(2,"updateSyncExternalStore()",r),pP(r))})}function fP(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!Bo(r,o)}catch(e){return!0}}function pP(r){var g=Qo(r,2);g!==null&&Bg(g,r,2)}function K2(r){var g=Lo();if(typeof r==="function"){var o=r;if(r=o(),w1){Rg(!0);try{o()}finally{Rg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:r},g}function U2(r){r=K2(r);var g=r.queue,o=qO.bind(null,Ur,g);return g.dispatch=o,[r.memoizedState,o]}function $2(r){var g=Lo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=_2.bind(null,Ur,!0,o),o.dispatch=g,[r,g]}function dP(r,g){var o=ug();return sP(o,Ag,r,g)}function sP(r,g,o,e){return r.baseState=o,z2(r,Ag,typeof e==="function"?e:kl)}function rO(r,g){var o=ug();if(Ag!==null)return sP(o,Ag,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OX(r,g,o,e,h){if(Qi(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var b={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){b.listeners.push(u)}};C.T!==null?o(!0):b.isTransition=!1,e(b),o=g.pending,o===null?(b.next=g.pending=b,gO(g,b)):(b.next=o.next,g.pending=o.next=b)}}function gO(r,g){var{action:o,payload:e}=g,h=r.state;if(g.isTransition){var b=C.T,u={};u._updatedFibers=new Set,C.T=u;try{var t=o(h,e),q=C.S;q!==null&&q(u,t),oO(r,g,t)}catch(M){L2(r,g,M)}finally{b!==null&&u.types!==null&&(b.types!==null&&b.types!==u.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=u.types),C.T=b,b===null&&u._updatedFibers&&(r=u._updatedFibers.size,u._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{u=o(h,e),oO(r,g,u)}catch(M){L2(r,g,M)}}function oO(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(C.asyncTransitions++,o.then(Ji,Ji),o.then(function(e){lO(r,g,e)},function(e){return L2(r,g,e)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):lO(r,g,o)}function lO(r,g,o){g.status="fulfilled",g.value=o,eO(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,gO(r,o)))}function L2(r,g,o){var e=r.pending;if(r.pending=null,e!==null){e=e.next;do g.status="rejected",g.reason=o,eO(g),g=g.next;while(g!==e)}r.action=null}function eO(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function vO(r,g){return g}function _1(r,g){if(pr){var o=Mg.formState;if(o!==null){r:{var e=Ur;if(pr){if(zg){g:{var h=zg;for(var b=Ll;h.nodeType!==8;){if(!b){h=null;break g}if(h=il(h.nextSibling),h===null){h=null;break g}}b=h.data,h=b===w6||b===VM?h:null}if(h){zg=il(h.nextSibling),e=h.data===w6;break r}}Iv(e)}e=!1}e&&(g=o[0])}}return o=Lo(),o.memoizedState=o.baseState=g,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vO,lastRenderedState:g},o.queue=e,o=qO.bind(null,Ur,e),e.dispatch=o,e=K2(!1),b=_2.bind(null,Ur,!1,e.queue),e=Lo(),h={state:g,dispatch:null,action:r,pending:null},e.queue=h,o=OX.bind(null,Ur,h,b,o),h.dispatch=o,e.memoizedState=r,[g,o,!1]}function Ai(r){var g=ug();return hO(g,Ag,r)}function hO(r,g,o){if(g=z2(r,g,vO)[0],r=V1(kl)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var e=Wb(g)}catch(u){if(u===Gh)throw Ru;throw u}else e=g;g=ug();var h=g.queue,b=h.dispatch;return o!==g.memoizedState&&(Ur.flags|=2048,y1(Nl|Co,{destroy:void 0},HX.bind(null,h,o),null)),[e,b,r]}function HX(r,g){r.action=g}function Mi(r){var g=ug(),o=Ag;if(o!==null)return hO(g,o,r);ug(),g=g.memoizedState,o=ug();var e=o.queue.dispatch;return o.memoizedState=r,[g,e,!1]}function y1(r,g,o,e){return r={tag:r,create:o,deps:e,inst:g,next:null},g=Ur.updateQueue,g===null&&(g=Hi(),Ur.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(e=o.next,o.next=r,r.next=e,g.lastEffect=r),r}function I2(r){var g=Lo();return r={current:r},g.memoizedState=r}function E0(r,g,o,e){var h=Lo();Ur.flags|=r,h.memoizedState=y1(Nl|g,{destroy:void 0},o,e===void 0?null:e)}function Eo(r,g,o,e){var h=ug();e=e===void 0?null:e;var b=h.memoizedState.inst;Ag!==null&&e!==null&&W2(e,Ag.memoizedState.deps)?h.memoizedState=y1(g,b,o,e):(Ur.flags|=r,h.memoizedState=y1(Nl|g,b,o,e))}function Wi(r,g){(Ur.mode&yl)!==Kr?E0(276826112,Co,r,g):E0(8390656,Co,r,g)}function qX(r){Ur.flags|=4;var g=Ur.updateQueue;if(g===null)g=Hi(),Ur.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function F2(r){var g=Lo(),o={impl:r};return g.memoizedState=o,function(){if((og&vo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function Ri(r){var g=ug().memoizedState;return qX({ref:g,nextImpl:r}),function(){if((og&vo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function N2(r,g){var o=4194308;return(Ur.mode&yl)!==Kr&&(o|=134217728),E0(o,Hl,r,g)}function bO(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function B2(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var e=4194308;(Ur.mode&yl)!==Kr&&(e|=134217728),E0(e,Hl,bO.bind(null,g,r),o)}function Gi(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,Eo(4,Hl,bO.bind(null,g,r),o)}function Z2(r,g){return Lo().memoizedState=[r,g===void 0?null:g],r}function Xi(r,g){var o=ug();g=g===void 0?null:g;var e=o.memoizedState;if(g!==null&&W2(g,e[1]))return e[0];return o.memoizedState=[r,g],r}function x2(r,g){var o=Lo();g=g===void 0?null:g;var e=r();if(w1){Rg(!0);try{r()}finally{Rg(!1)}}return o.memoizedState=[e,g],e}function Yi(r,g){var o=ug();g=g===void 0?null:g;var e=o.memoizedState;if(g!==null&&W2(g,e[1]))return e[0];if(e=r(),w1){Rg(!0);try{r()}finally{Rg(!1)}}return o.memoizedState=[e,g],e}function C2(r,g){var o=Lo();return T2(o,r,g)}function wO(r,g){var o=ug();return uO(o,Ag.memoizedState,r,g)}function iO(r,g){var o=ug();return Ag===null?T2(o,r,g):uO(o,Ag.memoizedState,r,g)}function T2(r,g,o){if(o===void 0||(wv&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=nH(),Ur.lanes|=r,h0|=r,o}function uO(r,g,o,e){if(Bo(o,g))return o;if(Yh.current!==null)return r=T2(r,o,e),Bo(r,g)||(dg=!0),r;if((wv&42)===0||(wv&1073741824)!==0&&(Vr&261930)===0)return dg=!0,r.memoizedState=o;return r=nH(),Ur.lanes|=r,h0|=r,g}function Ji(){C.asyncTransitions--}function nO(r,g,o,e,h){var b=wg.p;wg.p=b!==0&&b<_l?b:_l;var u=C.T,t={};t._updatedFibers=new Set,C.T=t,_2(r,!1,g,o);try{var q=h(),M=C.S;if(M!==null&&M(t,q),q!==null&&typeof q==="object"&&typeof q.then==="function"){C.asyncTransitions++,q.then(Ji,Ji);var U=nX(q,e);Gb(r,g,U,wl(r))}else Gb(r,g,e,wl(r))}catch($){Gb(r,g,{then:function(){},status:"rejected",reason:$},wl(r))}finally{wg.p=b,u!==null&&t.types!==null&&(u.types!==null&&u.types!==t.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),u.types=t.types),C.T=u,u===null&&t._updatedFibers&&(r=t._updatedFibers.size,t._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function S2(r,g,o,e){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var h=tO(r).queue;iX(r),nO(r,h,g,W1,o===null?X:function(){return PO(r),o(e)})}function tO(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:W1,baseState:W1,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:W1},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function PO(r){C.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=tO(r);g.next===null&&(g=r.alternate.memoizedState),Gb(r,g.next.queue,{},wl(r))}function k2(){var r=K2(!1);return r=nO.bind(null,Ur,r.queue,!0,!1),Lo().memoizedState=r,[!1,r]}function OO(){var r=V1(kl)[0],g=ug().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function HO(){var r=Rb(kl)[0],g=ug().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function c0(){return Ug($w)}function D2(){var r=Lo(),g=Mg.identifierPrefix;if(pr){var o=lv,e=ov;o=(e&~(1<<32-Io(e)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Qu++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=jJ++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function V2(){return Lo().memoizedState=AX.bind(null,Ur)}function AX(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var e=wl(o),h=Bv(e),b=Zv(o,h,e);b!==null&&(ue(e,"refresh()",r),Bg(b,o,e),qb(b,o,e)),r=i2(),g!==null&&g!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),h.payload={cache:r};return}o=o.return}}function MX(r,g,o){var e=arguments;typeof e[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),e=wl(r);var h={lane:e,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Qi(r)?AO(g,h):(h=pn(r,g,h,e),h!==null&&(ue(e,"dispatch()",r),Bg(h,r,e),MO(h,g,e)))}function qO(r,g,o){var e=arguments;typeof e[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),e=wl(r),Gb(r,g,o,e)&&ue(e,"setState()",r)}function Gb(r,g,o,e){var h={lane:e,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qi(r))AO(g,h);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=g.lastRenderedReducer,b!==null)){var u=C.H;C.H=cl;try{var t=g.lastRenderedState,q=b(t,o);if(h.hasEagerState=!0,h.eagerState=q,Bo(q,t))return p5(r,g,h,0),Mg===null&&f5(),!1}catch(M){}finally{C.H=u}}if(o=pn(r,g,h,e),o!==null)return Bg(o,r,e),MO(o,g,e),!0}return!1}function _2(r,g,o,e){if(C.T===null&&l1===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),e={lane:2,revertLane:R4(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Qi(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=pn(r,o,e,2),g!==null&&(ue(2,"setOptimistic()",r),Bg(g,r,2))}function Qi(r){var g=r.alternate;return r===Ur||g!==null&&g===Ur}function AO(r,g){zh=Ju=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function MO(r,g,o){if((o&4194048)!==0){var e=g.lanes;e&=r.pendingLanes,o|=e,g.lanes=o,F0(r,o)}}function y2(r){if(r!==null&&typeof r!=="function"){var g=String(r);HM.has(g)||(HM.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E2(r,g,o,e){var h=r.memoizedState,b=o(e,h);if(r.mode&mo){Rg(!0);try{b=o(e,h)}finally{Rg(!1)}}b===void 0&&(g=y(g)||"Component",nM.has(g)||(nM.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),h=b===null||b===void 0?h:cr({},h,b),r.memoizedState=h,r.lanes===0&&(r.updateQueue.baseState=h)}function WO(r,g,o,e,h,b,u){var t=r.stateNode;if(typeof t.shouldComponentUpdate==="function"){if(o=t.shouldComponentUpdate(e,b,u),r.mode&mo){Rg(!0);try{o=t.shouldComponentUpdate(e,b,u)}finally{Rg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!ib(o,e)||!ib(h,b):!0}function RO(r,g,o,e){var h=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,e),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,e),g.state!==h&&(r=x(r)||"Component",hM.has(r)||(hM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),St.enqueueReplaceState(g,g.state,null))}function a0(r,g){var o=g;if("ref"in g){o={};for(var e in g)e!=="ref"&&(o[e]=g[e])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var h in r)o[h]===void 0&&(o[h]=r[h])}return o}function GO(r){At(r),console.warn(`%s

%s
`,mh?"An error occurred in the <"+mh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function XO(r){var g=mh?"The above error occurred in the <"+mh+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((kt||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var e=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,pM+" "+r[0],dM,fu+e+fu,sM):r.splice(0,0,pM,dM,fu+e+fu,sM),r.unshift(console),e=qQ.apply(console.error,r),e()}else console.error(`%o

%s

%s
`,r,g,o)}function YO(r){At(r)}function zi(r,g){try{mh=g.source?x(g.source):null,kt=null;var o=g.value;if(C.actQueue!==null)C.thrownErrors.push(o);else{var e=r.onUncaughtError;e(o,{componentStack:g.stack})}}catch(h){setTimeout(function(){throw h})}}function JO(r,g,o){try{mh=o.source?x(o.source):null,kt=x(g);var e=r.onCaughtError;e(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function c2(r,g,o){return o=Bv(o),o.tag=Nt,o.payload={element:null},o.callback=function(){wr(g.source,zi,r,g)},o}function a2(r){return r=Bv(r),r.tag=Nt,r}function j2(r,g,o,e){var h=o.type.getDerivedStateFromError;if(typeof h==="function"){var b=e.value;r.payload=function(){return h(b)},r.callback=function(){AP(o),wr(e.source,JO,g,o,e)}}var u=o.stateNode;u!==null&&typeof u.componentDidCatch==="function"&&(r.callback=function(){AP(o),wr(e.source,JO,g,o,e),typeof h!=="function"&&(w0===null?w0=new Set([this]):w0.add(this)),yJ(this,e),typeof h==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",x(o)||"Unknown")})}function WX(r,g,o,e,h){if(o.flags|=32768,me&&Ub(r,h),e!==null&&typeof e==="object"&&typeof e.then==="function"){if(g=o.alternate,g!==null&&k1(g,o,h,!0),pr&&($e=!0),o=Ol.current,o!==null){switch(o.tag){case 31:case 13:return Fl===null?Bi():o.alternate===null&&Fg===tv&&(Fg=Ku),o.flags&=-257,o.flags|=65536,o.lanes=h,e===Gu?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([e]):g.add(e),q4(r,e,h)),!1;case 22:return o.flags|=65536,e===Gu?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([e])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([e]):o.add(e)),q4(r,e,h)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return q4(r,e,h),Bi(),!1}if(pr)return $e=!0,g=Ol.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=h,e!==Yt&&nb(el(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:e}),o))):(e!==Yt&&nb(el(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:e}),o)),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,e=el(e,o),h=c2(r.stateNode,e,h),ti(r,h),Fg!==e0&&(Fg=i1)),!1;var b=el(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:e}),o);if(Gw===null?Gw=[b]:Gw.push(b),Fg!==e0&&(Fg=i1),g===null)return!0;e=el(e,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=h&-h,o.lanes|=r,r=c2(o.stateNode,e,r),ti(o,r),!1;case 1:if(g=o.type,b=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(w0===null||!w0.has(b))))return o.flags|=65536,h&=-h,o.lanes|=h,h=a2(h),j2(h,r,o,e),ti(o,h),!1}o=o.return}while(o!==null);return!1}function Ho(r,g,o,e){g.child=r===null?jA(g,null,o,e):b1(g,r.child,o,e)}function QO(r,g,o,e,h){o=o.render;var b=g.ref;if("ref"in e){var u={};for(var t in e)t!=="ref"&&(u[t]=e[t])}else u=e;if(V0(g),e=R2(r,g,o,u,b,h),t=X2(),r!==null&&!dg)return Y2(r,g,h),fe(r,g,h);return pr&&t&&l2(g),g.flags|=1,Ho(r,g,e,h),g.child}function zO(r,g,o,e,h){if(r===null){var b=o.type;if(typeof b==="function"&&!sn(b)&&b.defaultProps===void 0&&o.compare===null)return o=T0(b),g.tag=15,g.type=o,p2(g,b),mO(r,g,o,e,h);return r=r2(o.type,null,e,g,g.mode,h),r.ref=g.ref,r.return=g,g.child=r}if(b=r.child,!l4(r,h)){var u=b.memoizedProps;if(o=o.compare,o=o!==null?o:ib,o(u,e)&&r.ref===g.ref)return fe(r,g,h)}return g.flags|=1,r=Ee(b,e),r.ref=g.ref,r.return=g,g.child=r}function mO(r,g,o,e,h){if(r!==null){var b=r.memoizedProps;if(ib(b,e)&&r.ref===g.ref&&g.type===r.type)if(dg=!1,g.pendingProps=e=b,l4(r,h))(r.flags&131072)!==0&&(dg=!0);else return g.lanes=r.lanes,fe(r,g,h)}return f2(r,g,o,e,h)}function KO(r,g,o,e){var h=e.children,b=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((g.flags&128)!==0){if(b=b!==null?b.baseLanes|o:o,r!==null){e=g.child=r.child;for(h=0;e!==null;)h=h|e.lanes|e.childLanes,e=e.sibling;e=h&~b}else e=0,g.child=null;return UO(r,g,b,o,e)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&hi(g,b!==null?b.cachePool:null),b!==null?_P(g,b):q2(g),yP(g);else return e=g.lanes=536870912,UO(r,g,b!==null?b.baseLanes|o:o,o,e)}else b!==null?(hi(g,b.cachePool),_P(g,b),Cv(g),g.memoizedState=null):(r!==null&&hi(g,null),q2(g),Cv(g));return Ho(r,g,h,o),g.child}function Xb(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function UO(r,g,o,e,h){var b=t2();return b=b===null?null:{parent:jg._currentValue,pool:b},g.memoizedState={baseLanes:o,cachePool:b},r!==null&&hi(g,null),q2(g),yP(g),r!==null&&k1(r,g,e,!0),g.childLanes=h,null}function mi(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=Ui({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function $O(r,g,o){return b1(g,r.child,null,o),r=mi(g,g.pendingProps),r.flags|=2,bl(g),g.memoizedState=null,r}function RX(r,g,o){var e=g.pendingProps,h=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(e.mode==="hidden")return r=mi(g,e),g.lanes=536870912,Xb(null,r);if(M2(g),(r=zg)?(o=gq(r,Ll),o=o!==null&&o.data===H1?o:null,o!==null&&(e={dehydrated:o,treeContext:XP(),retryLane:536870912,hydrationErrors:null},g.memoizedState=e,e=RP(o),e.return=g,g.child=e,Mo=g,zg=null)):o=null,o===null)throw ri(g,r),Iv(g);return g.lanes=536870912,null}return mi(g,e)}var b=r.memoizedState;if(b!==null){var u=b.dehydrated;if(M2(g),h)if(g.flags&256)g.flags&=-257,g=$O(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(JP(),(o&536870912)!==0&&Ni(g),dg||k1(r,g,o,!1),h=(o&r.childLanes)!==0,dg||h){if(e=Mg,e!==null&&(u=N0(e,o),u!==0&&u!==b.retryLane))throw b.retryLane=u,Qo(r,u),Bg(e,r,u),Dt;Bi(),g=$O(r,g,o)}else r=b.treeContext,zg=il(u.nextSibling),Mo=g,pr=!0,pv=null,$e=!1,Pl=null,Ll=!1,r!==null&&YP(g,r),g=mi(g,e),g.flags|=4096;return g}return b=r.child,e={mode:e.mode,children:e.children},(o&536870912)!==0&&(o&r.lanes)!==0&&Ni(g),r=Ee(b,e),r.ref=g.ref,g.child=r,r.return=g,r}function Ki(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function f2(r,g,o,e,h){if(o.prototype&&typeof o.prototype.render==="function"){var b=y(o)||"Unknown";qM[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),qM[b]=!0)}if(g.mode&mo&&El.recordLegacyContextWarning(g,null),r===null&&(p2(g,g.type),o.contextTypes&&(b=y(o)||"Unknown",MM[b]||(MM[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),V0(g),o=R2(r,g,o,e,void 0,h),e=X2(),r!==null&&!dg)return Y2(r,g,h),fe(r,g,h);return pr&&e&&l2(g),g.flags|=1,Ho(r,g,o,h),g.child}function LO(r,g,o,e,h,b){if(V0(g),uv=-1,Ow=r!==null&&r.type!==g.type,g.updateQueue=null,o=G2(g,e,o,h),EP(r,g),e=X2(),r!==null&&!dg)return Y2(r,g,b),fe(r,g,b);return pr&&e&&l2(g),g.flags|=1,Ho(r,g,o,b),g.child}function IO(r,g,o,e,h){switch(O(g)){case!1:var b=g.stateNode,u=new g.type(g.memoizedProps,b.context).state;b.updater.enqueueSetState(b,u,null);break;case!0:g.flags|=128,g.flags|=65536,b=Error("Simulated error coming from DevTools");var t=h&-h;if(g.lanes|=t,u=Mg,u===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");t=a2(t),j2(t,u,g,el(b,g)),ti(g,t)}if(V0(g),g.stateNode===null){if(u=fv,b=o.contextType,"contextType"in o&&b!==null&&(b===void 0||b.$$typeof!==Je)&&!OM.has(o)&&(OM.add(o),t=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===V4?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(o)||"Component",t)),typeof b==="object"&&b!==null&&(u=Ug(b)),b=new o(e,u),g.mode&mo){Rg(!0);try{b=new o(e,u)}finally{Rg(!1)}}if(u=g.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=St,g.stateNode=b,b._reactInternals=g,b._reactInternalInstance=vM,typeof o.getDerivedStateFromProps==="function"&&u===null&&(u=y(o)||"Component",bM.has(u)||(bM.add(u),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",u,b.state===null?"null":"undefined",u))),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var q=t=u=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?u="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(u="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?t="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(t="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?q="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(q="UNSAFE_componentWillUpdate"),u!==null||t!==null||q!==null){b=y(o)||"Component";var M=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";iM.has(b)||(iM.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,M,u!==null?`
  `+u:"",t!==null?`
  `+t:"",q!==null?`
  `+q:""))}}b=g.stateNode,u=y(o)||"Component",b.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",u):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",u)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",u),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",u),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",u),o.childContextTypes&&!PM.has(o)&&(PM.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",u)),o.contextTypes&&!tM.has(o)&&(tM.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",u)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",u),o.prototype&&o.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(o)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",u),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",u),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",u),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",u),t=b.props!==e,b.props!==void 0&&t&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",u),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",u,u),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||wM.has(o)||(wM.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(o))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",u),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",u),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",u),(t=b.state)&&(typeof t!=="object"||lo(t))&&console.error("%s.state: must be set to an object or null",u),typeof b.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",u),b=g.stateNode,b.props=e,b.state=g.memoizedState,b.refs={},O2(g),u=o.contextType,b.context=typeof u==="object"&&u!==null?Ug(u):fv,b.state===e&&(u=y(o)||"Component",uM.has(u)||(uM.add(u),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",u))),g.mode&mo&&El.recordLegacyContextWarning(g,b),El.recordUnsafeLifecycleWarnings(g,b),b.state=g.memoizedState,u=o.getDerivedStateFromProps,typeof u==="function"&&(E2(g,o,u,e),b.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(u=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),u!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",x(g)||"Component"),St.enqueueReplaceState(b,b.state,null)),Mb(g,e,b,h),Ab(),b.state=g.memoizedState),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Kr&&(g.flags|=134217728),b=!0}else if(r===null){b=g.stateNode;var U=g.memoizedProps;t=a0(o,U),b.props=t;var $=b.context;q=o.contextType,u=fv,typeof q==="object"&&q!==null&&(u=Ug(q)),M=o.getDerivedStateFromProps,q=typeof M==="function"||typeof b.getSnapshotBeforeUpdate==="function",U=g.pendingProps!==U,q||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(U||$!==u)&&RO(g,b,e,u),l0=!1;var Q=g.memoizedState;b.state=Q,Mb(g,e,b,h),Ab(),$=g.memoizedState,U||Q!==$||l0?(typeof M==="function"&&(E2(g,o,M,e),$=g.memoizedState),(t=l0||WO(g,o,t,e,Q,$,u))?(q||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Kr&&(g.flags|=134217728)):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Kr&&(g.flags|=134217728),g.memoizedProps=e,g.memoizedState=$),b.props=e,b.state=$,b.context=u,b=t):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&yl)!==Kr&&(g.flags|=134217728),b=!1)}else{b=g.stateNode,H2(r,g),u=g.memoizedProps,q=a0(o,u),b.props=q,M=g.pendingProps,Q=b.context,$=o.contextType,t=fv,typeof $==="object"&&$!==null&&(t=Ug($)),U=o.getDerivedStateFromProps,($=typeof U==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(u!==M||Q!==t)&&RO(g,b,e,t),l0=!1,Q=g.memoizedState,b.state=Q,Mb(g,e,b,h),Ab();var N=g.memoizedState;u!==M||Q!==N||l0||r!==null&&r.dependencies!==null&&oi(r.dependencies)?(typeof U==="function"&&(E2(g,o,U,e),N=g.memoizedState),(q=l0||WO(g,o,q,e,Q,N,t)||r!==null&&r.dependencies!==null&&oi(r.dependencies))?($||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(e,N,t),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(e,N,t)),typeof b.componentDidUpdate==="function"&&(g.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof b.componentDidUpdate!=="function"||u===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||u===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),g.memoizedProps=e,g.memoizedState=N),b.props=e,b.state=N,b.context=t,b=q):(typeof b.componentDidUpdate!=="function"||u===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||u===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),b=!1)}if(t=b,Ki(r,g),u=(g.flags&128)!==0,t||u){if(t=g.stateNode,_o(g),u&&typeof o.getDerivedStateFromError!=="function")o=null,Zo=-1;else if(o=BA(t),g.mode&mo){Rg(!0);try{BA(t)}finally{Rg(!1)}}g.flags|=1,r!==null&&u?(g.child=b1(g,r.child,null,h),g.child=b1(g,null,o,h)):Ho(r,g,o,h),g.memoizedState=t.state,r=g.child}else r=fe(r,g,h);return h=g.stateNode,b&&h.props!==e&&(Kh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",x(g)||"a component"),Kh=!0),r}function FO(r,g,o,e){return D0(),g.flags|=256,Ho(r,g,o,e),g.child}function p2(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=y(g)||"Unknown",WM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),WM[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=y(g)||"Unknown",AM[g]||(console.error("%s: Function components do not support contextType.",g),AM[g]=!0))}function d2(r){return{baseLanes:r,cachePool:LP()}}function s2(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function NO(r,g,o){var e,h=g.pendingProps;P(g)&&(g.flags|=128);var b=!1,u=(g.flags&128)!==0;if((e=u)||(e=r!==null&&r.memoizedState===null?!1:(Vg.current&tw)!==0),e&&(b=!0,g.flags&=-129),e=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(b?xv(g):Cv(g),(r=zg)?(o=gq(r,Ll),o=o!==null&&o.data!==H1?o:null,o!==null&&(e={dehydrated:o,treeContext:XP(),retryLane:536870912,hydrationErrors:null},g.memoizedState=e,e=RP(o),e.return=g,g.child=e,Mo=g,zg=null)):o=null,o===null)throw ri(g,r),Iv(g);return I4(o)?g.lanes=32:g.lanes=536870912,null}var t=h.children;if(h=h.fallback,b){Cv(g);var q=g.mode;return t=Ui({mode:"hidden",children:t},q),h=S0(h,q,o,null),t.return=g,h.return=g,t.sibling=h,g.child=t,h=g.child,h.memoizedState=d2(o),h.childLanes=s2(r,e,o),g.memoizedState=Vt,Xb(null,h)}return xv(g),r4(g,t)}var M=r.memoizedState;if(M!==null){var U=M.dehydrated;if(U!==null){if(u)g.flags&256?(xv(g),g.flags&=-257,g=g4(r,g,o)):g.memoizedState!==null?(Cv(g),g.child=r.child,g.flags|=128,g=null):(Cv(g),t=h.fallback,q=g.mode,h=Ui({mode:"visible",children:h.children},q),t=S0(t,q,o,null),t.flags|=2,h.return=g,t.return=g,h.sibling=t,g.child=h,b1(g,r.child,null,o),h=g.child,h.memoizedState=d2(o),h.childLanes=s2(r,e,o),g.memoizedState=Vt,g=Xb(null,h));else if(xv(g),JP(),(o&536870912)!==0&&Ni(g),I4(U)){if(e=U.nextSibling&&U.nextSibling.dataset,e){t=e.dgst;var $=e.msg;q=e.stck;var Q=e.cstck}b=$,e=t,h=q,U=Q,t=b,q=U,t=t?Error(t):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),t.stack=h||"",t.digest=e,e=q===void 0?null:q,h={value:t,source:null,stack:e},typeof e==="string"&&Xt.set(t,h),nb(h),g=g4(r,g,o)}else if(dg||k1(r,g,o,!1),e=(o&r.childLanes)!==0,dg||e){if(e=Mg,e!==null&&(h=N0(e,o),h!==0&&h!==M.retryLane))throw M.retryLane=h,Qo(r,h),Bg(e,r,h),Dt;L4(U)||Bi(),g=g4(r,g,o)}else L4(U)?(g.flags|=192,g.child=r.child,g=null):(r=M.treeContext,zg=il(U.nextSibling),Mo=g,pr=!0,pv=null,$e=!1,Pl=null,Ll=!1,r!==null&&YP(g,r),g=r4(g,h.children),g.flags|=4096);return g}}if(b)return Cv(g),t=h.fallback,q=g.mode,Q=r.child,U=Q.sibling,h=Ee(Q,{mode:"hidden",children:h.children}),h.subtreeFlags=Q.subtreeFlags&65011712,U!==null?t=Ee(U,t):(t=S0(t,q,o,null),t.flags|=2),t.return=g,h.return=g,h.sibling=t,g.child=h,Xb(null,h),h=g.child,t=r.child.memoizedState,t===null?t=d2(o):(q=t.cachePool,q!==null?(Q=jg._currentValue,q=q.parent!==Q?{parent:Q,pool:Q}:q):q=LP(),t={baseLanes:t.baseLanes|o,cachePool:q}),h.memoizedState=t,h.childLanes=s2(r,e,o),g.memoizedState=Vt,Xb(r.child,h);return M!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&Ni(g),xv(g),o=r.child,r=o.sibling,o=Ee(o,{mode:"visible",children:h.children}),o.return=g,o.sibling=null,r!==null&&(e=g.deletions,e===null?(g.deletions=[r],g.flags|=16):e.push(r)),g.child=o,g.memoizedState=null,o}function r4(r,g){return g=Ui({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function Ui(r,g){return r=Y(22,r,null,g),r.lanes=0,r}function g4(r,g,o){return b1(g,r.child,null,o),r=r4(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function BO(r,g,o){r.lanes|=g;var e=r.alternate;e!==null&&(e.lanes|=g),b2(r.return,g,o)}function o4(r,g,o,e,h,b){var u=r.memoizedState;u===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:e,tail:o,tailMode:h,treeForkCount:b}:(u.isBackwards=g,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=o,u.tailMode=h,u.treeForkCount=b)}function ZO(r,g,o){var e=g.pendingProps,h=e.revealOrder,b=e.tail,u=e.children,t=Vg.current;if((e=(t&tw)!==0)?(t=t&Jh|tw,g.flags|=128):t&=Jh,Gr(Vg,t,g),t=h==null?"null":h,h!=="forwards"&&h!=="unstable_legacy-backwards"&&h!=="together"&&h!=="independent"&&!RM[t])if(RM[t]=!0,h==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(h==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof h==="string")switch(h.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',h,h.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',h,h.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h);if(t=b==null?"null":b,!mu[t])if(b==null){if(h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")mu[t]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(mu[t]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):h!=="forwards"&&h!=="backwards"&&h!=="unstable_legacy-backwards"&&(mu[t]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));r:if((h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")&&u!==void 0&&u!==null&&u!==!1)if(lo(u)){for(t=0;t<u.length;t++)if(!kP(u[t],t))break r}else if(t=B(u),typeof t==="function"){if(t=t.call(u))for(var q=t.next(),M=0;!q.done;q=t.next()){if(!kP(q.value,M))break r;M++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',h);if(Ho(r,g,u,o),pr?(Lv(),u=pb):u=0,!e&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&BO(r,o,g);else if(r.tag===19)BO(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(h){case"forwards":o=g.child;for(h=null;o!==null;)r=o.alternate,r!==null&&Pi(r)===null&&(h=o),o=o.sibling;o=h,o===null?(h=g.child,g.child=null):(h=o.sibling,o.sibling=null),o4(g,!1,h,o,b,u);break;case"backwards":case"unstable_legacy-backwards":o=null,h=g.child;for(g.child=null;h!==null;){if(r=h.alternate,r!==null&&Pi(r)===null){g.child=h;break}r=h.sibling,h.sibling=o,o=h,h=r}o4(g,!0,o,null,b,u);break;case"together":o4(g,!1,null,null,void 0,u);break;default:g.memoizedState=null}return g.child}function fe(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Zo=-1,h0|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(k1(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=Ee(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=Ee(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function l4(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&oi(r)?!0:!1}function GX(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),Fv(g,jg,r.memoizedState.cache),D0();break;case 27:case 5:zr(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:Fv(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var e=g.stateNode;e.effectDuration=-0,e.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,M2(g),null;break;case 13:if(e=g.memoizedState,e!==null){if(e.dehydrated!==null)return xv(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return NO(r,g,o);return xv(g),r=fe(r,g,o),r!==null?r.sibling:null}xv(g);break;case 19:var h=(r.flags&128)!==0;if(e=(o&g.childLanes)!==0,e||(k1(r,g,o,!1),e=(o&g.childLanes)!==0),h){if(e)return ZO(r,g,o);g.flags|=128}if(h=g.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gr(Vg,Vg.current,g),e)break;else return null;case 22:return g.lanes=0,KO(r,g,o,g.pendingProps);case 24:Fv(g,jg,r.memoizedState.cache)}return fe(r,g,o)}function e4(r,g,o){if(g._debugNeedsRemount&&r!==null){o=r2(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var e=g.return;if(e===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===e.child)e.child=o;else{var h=e.child;if(h===null)throw Error("Expected parent to have a child.");for(;h.sibling!==g;)if(h=h.sibling,h===null)throw Error("Expected to find the previous sibling.");h.sibling=o}return g=e.deletions,g===null?(e.deletions=[r],e.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)dg=!0;else{if(!l4(r,o)&&(g.flags&128)===0)return dg=!1,GX(r,g,o);dg=(r.flags&131072)!==0?!0:!1}else{if(dg=!1,e=pr)Lv(),e=(g.flags&1048576)!==0;e&&(e=g.index,Lv(),GP(g,pb,e))}switch(g.lanes=0,g.tag){case 16:r:if(e=g.pendingProps,r=Nv(g.elementType),g.type=r,typeof r==="function")sn(r)?(e=a0(r,e),g.tag=1,g.type=r=T0(r),g=IO(null,g,r,e,o)):(g.tag=0,p2(g,r),g.type=r=T0(r),g=f2(null,g,r,e,o));else{if(r!==void 0&&r!==null){if(h=r.$$typeof,h===Cb){g.tag=11,g.type=r=dn(r),g=QO(null,g,r,e,o);break r}else if(h===ji){g.tag=14,g=zO(null,g,r,e,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===ul&&(g=" Did you wrap a component in React.lazy() more than once?"),o=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return f2(r,g,g.type,g.pendingProps,o);case 1:return e=g.type,h=a0(e,g.pendingProps),IO(r,g,e,h,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");e=g.pendingProps;var b=g.memoizedState;h=b.element,H2(r,g),Mb(g,e,null,o);var u=g.memoizedState;if(e=u.cache,Fv(g,jg,e),e!==b.cache&&w2(g,[jg],o,!0),Ab(),e=u.element,b.isDehydrated)if(b={element:e,isDehydrated:!1,cache:u.cache},g.updateQueue.baseState=b,g.memoizedState=b,g.flags&256){g=FO(r,g,e,o);break r}else if(e!==h){h=el(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),nb(h),g=FO(r,g,e,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}zg=il(r.firstChild),Mo=g,pr=!0,pv=null,$e=!1,Pl=null,Ll=!0,o=jA(g,null,e,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(D0(),e===h){g=fe(r,g,o);break r}Ho(r,g,e,o)}g=g.child}return g;case 26:return Ki(r,g),r===null?(o=bq(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,e=Zr(_v.current),e=Ti(e).createElement(o),e[Ao]=g,e[Fo]=r,qo(e,o,r),Jr(e),g.stateNode=e):g.memoizedState=bq(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return zr(g),r===null&&pr&&(e=Zr(_v.current),h=vr(),e=g.stateNode=vq(g.type,g.pendingProps,e,h,!1),$e||(h=cH(e,g.type,g.pendingProps,h),h!==null&&(k0(g,0).serverProps=h)),Mo=g,Ll=!0,h=zg,Dv(g.type)?(t6=h,zg=il(e.firstChild)):zg=h),Ho(r,g,g.pendingProps.children,o),Ki(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(b=vr(),e=_n(g.type,b.ancestorInfo),h=zg,(u=!h)||(u=iY(h,g.type,g.pendingProps,Ll),u!==null?(g.stateNode=u,$e||(b=cH(u,g.type,g.pendingProps,b),b!==null&&(k0(g,0).serverProps=b)),Mo=g,zg=il(u.firstChild),Ll=!1,b=!0):b=!1,u=!b),u&&(e&&ri(g,h),Iv(g))),zr(g),h=g.type,b=g.pendingProps,u=r!==null?r.memoizedProps:null,e=b.children,U4(h,b)?e=null:u!==null&&U4(h,u)&&(g.flags|=32),g.memoizedState!==null&&(h=R2(r,g,PX,null,null,o),$w._currentValue=h),Ki(r,g),Ho(r,g,e,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=vr(),e=r.ancestorInfo.current,o=e!=null?_5(o,e.tag,r.ancestorInfo.implicitRootScope):!0,r=zg,(e=!r)||(e=uY(r,g.pendingProps,Ll),e!==null?(g.stateNode=e,Mo=g,zg=null,e=!0):e=!1,e=!e),e&&(o&&ri(g,r),Iv(g))),null;case 13:return NO(r,g,o);case 4:return k(g,g.stateNode.containerInfo),e=g.pendingProps,r===null?g.child=b1(g,null,e,o):Ho(r,g,e,o),g.child;case 11:return QO(r,g,g.type,g.pendingProps,o);case 7:return Ho(r,g,g.pendingProps,o),g.child;case 8:return Ho(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,e=g.stateNode,e.effectDuration=-0,e.passiveEffectDuration=-0,Ho(r,g,g.pendingProps.children,o),g.child;case 10:return e=g.type,h=g.pendingProps,b=h.value,"value"in h||GM||(GM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fv(g,e,b),Ho(r,g,h.children,o),g.child;case 9:return h=g.type._context,e=g.pendingProps.children,typeof e!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V0(g),h=Ug(h),e=$t(e,h,void 0),g.flags|=1,Ho(r,g,e,o),g.child;case 14:return zO(r,g,g.type,g.pendingProps,o);case 15:return mO(r,g,g.type,g.pendingProps,o);case 19:return ZO(r,g,o);case 31:return RX(r,g,o);case 22:return KO(r,g,o,g.pendingProps);case 24:return V0(g),e=Ug(jg),r===null?(h=t2(),h===null&&(h=Mg,b=i2(),h.pooledCache=b,_0(b),b!==null&&(h.pooledCacheLanes|=o),h=b),g.memoizedState={parent:e,cache:h},O2(g),Fv(g,jg,h)):((r.lanes&o)!==0&&(H2(r,g),Mb(g,null,null,o),Ab()),h=r.memoizedState,b=g.memoizedState,h.parent!==e?(h={parent:e,cache:e},g.memoizedState=h,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=h),Fv(g,jg,e)):(e=b.cache,Fv(g,jg,e),e!==h.cache&&w2(g,[jg],o,!0))),Ho(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function pe(r){r.flags|=4}function v4(r,g,o,e,h){if(g=(r.mode&kJ)!==Kr)g=!1;if(g){if(r.flags|=16777216,(h&335544128)===h)if(r.stateNode.complete)r.flags|=8192;else if(HH())r.flags|=8192;else throw h1=Gu,It}else r.flags&=-16777217}function xO(r,g){if(g.type!=="stylesheet"||(g.state.loading&Zl)!==M1)r.flags&=-16777217;else if(r.flags|=16777216,!tq(g))if(HH())r.flags|=8192;else throw h1=Gu,It}function $i(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?B1():536870912,r.lanes|=g,t1|=g)}function Yb(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var e=null;o!==null;)o.alternate!==null&&(e=o),o=o.sibling;e===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:e.sibling=null}}function Gg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,e=0;if(g)if((r.mode&kr)!==Kr){for(var{selfBaseDuration:h,child:b}=r;b!==null;)o|=b.lanes|b.childLanes,e|=b.subtreeFlags&65011712,e|=b.flags&65011712,h+=b.treeBaseDuration,b=b.sibling;r.treeBaseDuration=h}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,e|=h.subtreeFlags&65011712,e|=h.flags&65011712,h.return=r,h=h.sibling;else if((r.mode&kr)!==Kr){h=r.actualDuration,b=r.selfBaseDuration;for(var u=r.child;u!==null;)o|=u.lanes|u.childLanes,e|=u.subtreeFlags,e|=u.flags,h+=u.actualDuration,b+=u.treeBaseDuration,u=u.sibling;r.actualDuration=h,r.treeBaseDuration=b}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,e|=h.subtreeFlags,e|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=e,r.childLanes=o,g}function XX(r,g,o){var e=g.pendingProps;switch(e2(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gg(g),null;case 1:return Gg(g),null;case 3:if(o=g.stateNode,e=null,r!==null&&(e=r.memoizedState.cache),g.memoizedState.cache!==e&&(g.flags|=2048),ae(jg,g),s(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)S1(g)?(h2(),pe(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,v2());return Gg(g),null;case 26:var{type:h,memoizedState:b}=g;return r===null?(pe(g),b!==null?(Gg(g),xO(g,b)):(Gg(g),v4(g,h,null,e,o))):b?b!==r.memoizedState?(pe(g),Gg(g),xO(g,b)):(Gg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==e&&pe(g),Gg(g),v4(g,h,r,e,o)),null;case 27:if(Xr(g),o=Zr(_v.current),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==e&&pe(g);else{if(!e){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Gg(g),null}r=vr(),S1(g)?QP(g,r):(r=vq(h,e,o,r,!0),g.stateNode=r,pe(g))}return Gg(g),null;case 5:if(Xr(g),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==e&&pe(g);else{if(!e){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Gg(g),null}var u=vr();if(S1(g))QP(g,u);else{switch(b=Zr(_v.current),_n(h,u.ancestorInfo),u=u.context,b=Ti(b),u){case Zh:b=b.createElementNS(hh,h);break;case cu:b=b.createElementNS(ou,h);break;default:switch(h){case"svg":b=b.createElementNS(hh,h);break;case"math":b=b.createElementNS(ou,h);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof e.is==="string"?b.createElement("select",{is:e.is}):b.createElement("select"),e.multiple?b.multiple=!0:e.size&&(b.size=e.size);break;default:b=typeof e.is==="string"?b.createElement(h,{is:e.is}):b.createElement(h),h.indexOf("-")===-1&&(h!==h.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",h),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||Vl.call(yM,h)||(yM[h]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",h)))}}b[Ao]=g,b[Fo]=e;r:for(u=g.child;u!==null;){if(u.tag===5||u.tag===6)b.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===g)break r;for(;u.sibling===null;){if(u.return===null||u.return===g)break r;u=u.return}u.sibling.return=u.return,u=u.sibling}g.stateNode=b;r:switch(qo(b,h,e),h){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break r;case"img":e=!0;break r;default:e=!1}e&&pe(g)}}return Gg(g),v4(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==e&&pe(g);else{if(typeof e!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Zr(_v.current),o=vr(),S1(g)){if(r=g.stateNode,o=g.memoizedProps,h=!$e,e=null,b=Mo,b!==null)switch(b.tag){case 3:h&&(h=lq(r,o,e),h!==null&&(k0(g,0).serverProps=h));break;case 27:case 5:e=b.memoizedProps,h&&(h=lq(r,o,e),h!==null&&(k0(g,0).serverProps=h))}r[Ao]=g,r=r.nodeValue===o||e!==null&&e.suppressHydrationWarning===!0||DH(r.nodeValue,o)?!0:!1,r||Iv(g,!0)}else h=o.ancestorInfo.current,h!=null&&_5(e,h.tag,o.ancestorInfo.implicitRootScope),r=Ti(r).createTextNode(e),r[Ao]=g,g.stateNode=r}return Gg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(e=S1(g),o!==null){if(r===null){if(!e)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Ao]=g,Gg(g),(g.mode&kr)!==Kr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else h2(),D0(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,Gg(g),(g.mode&kr)!==Kr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=v2(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return bl(g),g;return bl(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Gg(g),null;case 13:if(e=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=e,b=S1(g),h!==null&&h.dehydrated!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=g.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[Ao]=g,Gg(g),(g.mode&kr)!==Kr&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration))}else h2(),D0(),(g.flags&128)===0&&(h=g.memoizedState=null),g.flags|=4,Gg(g),(g.mode&kr)!==Kr&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration));h=!1}else h=v2(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h){if(g.flags&256)return bl(g),g;return bl(g),null}}if(bl(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Kr&&Ob(g),g;return o=e!==null,r=r!==null&&r.memoizedState!==null,o&&(e=g.child,h=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(h=e.alternate.memoizedState.cachePool.pool),b=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(b=e.memoizedState.cachePool.pool),b!==h&&(e.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),$i(g,g.updateQueue),Gg(g),(g.mode&kr)!==Kr&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(g),r===null&&X4(g.stateNode.containerInfo),Gg(g),null;case 10:return ae(g.type,g),Gg(g),null;case 19:if(qr(Vg,g),e=g.memoizedState,e===null)return Gg(g),null;if(h=(g.flags&128)!==0,b=e.rendering,b===null)if(h)Yb(e,!1);else{if(Fg!==tv||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(b=Pi(r),b!==null){g.flags|=128,Yb(e,!1),r=b.updateQueue,g.updateQueue=r,$i(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)WP(o,r),o=o.sibling;return Gr(Vg,Vg.current&Jh|tw,g),pr&&ce(g,e.treeForkCount),g.child}r=r.sibling}e.tail!==null&&bo()>Nu&&(g.flags|=128,h=!0,Yb(e,!1),g.lanes=4194304)}else{if(!h)if(r=Pi(b),r!==null){if(g.flags|=128,h=!0,r=r.updateQueue,g.updateQueue=r,$i(g,r),Yb(e,!0),e.tail===null&&e.tailMode==="hidden"&&!b.alternate&&!pr)return Gg(g),null}else 2*bo()-e.renderingStartTime>Nu&&o!==536870912&&(g.flags|=128,h=!0,Yb(e,!1),g.lanes=4194304);e.isBackwards?(b.sibling=g.child,g.child=b):(r=e.last,r!==null?r.sibling=b:g.child=b,e.last=b)}if(e.tail!==null)return r=e.tail,e.rendering=r,e.tail=r.sibling,e.renderingStartTime=bo(),r.sibling=null,o=Vg.current,o=h?o&Jh|tw:o&Jh,Gr(Vg,o,g),pr&&ce(g,e.treeForkCount),r;return Gg(g),null;case 22:case 23:return bl(g),A2(g),e=g.memoizedState!==null,r!==null?r.memoizedState!==null!==e&&(g.flags|=8192):e&&(g.flags|=8192),e?(o&536870912)!==0&&(g.flags&128)===0&&(Gg(g),g.subtreeFlags&6&&(g.flags|=8192)):Gg(g),o=g.updateQueue,o!==null&&$i(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),e=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(e=g.memoizedState.cachePool.pool),e!==o&&(g.flags|=2048),r!==null&&qr(e1,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),ae(jg,g),Gg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function YX(r,g){switch(e2(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Kr&&Ob(g),g):null;case 3:return ae(jg,g),s(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Xr(g),null;case 31:if(g.memoizedState!==null){if(bl(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Kr&&Ob(g),g):null;case 13:if(bl(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D0()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Kr&&Ob(g),g):null;case 19:return qr(Vg,g),null;case 4:return s(g),null;case 10:return ae(g.type,g),null;case 22:case 23:return bl(g),A2(g),r!==null&&qr(e1,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Kr&&Ob(g),g):null;case 24:return ae(jg,g),null;case 25:return null;default:return null}}function CO(r,g){switch(e2(g),g.tag){case 3:ae(jg,g),s(g);break;case 26:case 27:case 5:Xr(g);break;case 4:s(g);break;case 31:g.memoizedState!==null&&bl(g);break;case 13:bl(g);break;case 19:qr(Vg,g);break;case 10:ae(g.type,g);break;case 22:case 23:bl(g),A2(g),r!==null&&qr(e1,g);break;case 24:ae(jg,g)}}function Ae(r){return(r.mode&kr)!==Kr}function TO(r,g){Ae(r)?(qe(),Jb(g,r),He()):Jb(g,r)}function h4(r,g,o){Ae(r)?(qe(),E1(o,r,g),He()):E1(o,r,g)}function Jb(r,g){try{var o=g.updateQueue,e=o!==null?o.lastEffect:null;if(e!==null){var h=e.next;o=h;do{if((o.tag&r)===r&&(e=void 0,(r&xo)!==Yu&&(Fh=!0),e=wr(g,EJ,o),(r&xo)!==Yu&&(Fh=!1),e!==void 0&&typeof e!=="function")){var b=void 0;b=(o.tag&Hl)!==0?"useLayoutEffect":(o.tag&xo)!==0?"useInsertionEffect":"useEffect";var u=void 0;u=e===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof e.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+e,wr(g,function(t,q){console.error("%s must not return anything besides a function, which is used for clean-up.%s",t,q)},b,u)}o=o.next}while(o!==h)}}catch(t){bg(g,g.return,t)}}function E1(r,g,o){try{var e=g.updateQueue,h=e!==null?e.lastEffect:null;if(h!==null){var b=h.next;e=b;do{if((e.tag&r)===r){var u=e.inst,t=u.destroy;t!==void 0&&(u.destroy=void 0,(r&xo)!==Yu&&(Fh=!0),h=g,wr(h,cJ,h,o,t),(r&xo)!==Yu&&(Fh=!1))}e=e.next}while(e!==b)}}catch(q){bg(g,g.return,q)}}function SO(r,g){Ae(r)?(qe(),Jb(g,r),He()):Jb(g,r)}function b4(r,g,o){Ae(r)?(qe(),E1(o,r,g),He()):E1(o,r,g)}function kO(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Kh||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{wr(r,VP,g,o)}catch(e){bg(r,r.return,e)}}}function JX(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function QX(r,g){var{memoizedProps:o,memoizedState:e}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Kh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{var h=a0(r.type,o),b=wr(r,JX,g,h,e);o=XM,b!==void 0||o.has(r.type)||(o.add(r.type),wr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",x(r))})),g.__reactInternalSnapshotBeforeUpdate=b}catch(u){bg(r,r.return,u)}}function DO(r,g,o){o.props=a0(r.type,r.memoizedProps),o.state=r.memoizedState,Ae(r)?(qe(),wr(r,kA,r,g,o),He()):wr(r,kA,r,g,o)}function zX(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(Ae(r))try{qe(),r.refCleanup=g(o)}finally{He()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",x(r)),g.current=o}}function Qb(r,g){try{wr(r,zX,r)}catch(o){bg(r,g,o)}}function Me(r,g){var{ref:o,refCleanup:e}=r;if(o!==null)if(typeof e==="function")try{if(Ae(r))try{qe(),wr(r,e)}finally{He(r)}else wr(r,e)}catch(h){bg(r,g,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(Ae(r))try{qe(),wr(r,o,null)}finally{He(r)}else wr(r,o,null)}catch(h){bg(r,g,h)}else o.current=null}function VO(r,g,o,e){var h=r.memoizedProps,b=h.id,u=h.onCommit;h=h.onRender,g=g===null?"mount":"update",Au&&(g="nested-update"),typeof h==="function"&&h(b,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof u==="function"&&u(b,g,e,o)}function mX(r,g,o,e){var h=r.memoizedProps;r=h.id,h=h.onPostCommit,g=g===null?"mount":"update",Au&&(g="nested-update"),typeof h==="function"&&h(r,g,e,o)}function _O(r){var{type:g,memoizedProps:o,stateNode:e}=r;try{wr(r,pX,e,g,o,r)}catch(h){bg(r,r.return,h)}}function w4(r,g,o){try{wr(r,sX,r.stateNode,r.type,o,g,r)}catch(e){bg(r,r.return,e)}}function yO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Dv(r.type)||r.tag===4}function i4(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||yO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Dv(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function u4(r,g,o){var e=r.tag;if(e===5||e===6)r=r.stateNode,g?(dH(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(dH(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=ye));else if(e!==4&&(e===27&&Dv(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(u4(r,g,o),r=r.sibling;r!==null;)u4(r,g,o),r=r.sibling}function Li(r,g,o){var e=r.tag;if(e===5||e===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(e!==4&&(e===27&&Dv(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Li(r,g,o),r=r.sibling;r!==null;)Li(r,g,o),r=r.sibling}function KX(r){for(var g,o=r.return;o!==null;){if(yO(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=i4(r),Li(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(pH(o),g.flags&=-33),g=i4(r),Li(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=i4(r),u4(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function EO(r){var{stateNode:g,memoizedProps:o}=r;try{wr(r,HY,r.type,o,g,r)}catch(e){bg(r,r.return,e)}}function cO(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function UX(r,g){if(r=r.containerInfo,i6=pu,r=iP(r),cn(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var e=o.getSelection&&o.getSelection();if(e&&e.rangeCount!==0){o=e.anchorNode;var{anchorOffset:h,focusNode:b}=e;e=e.focusOffset;try{o.nodeType,b.nodeType}catch(hr){o=null;break r}var u=0,t=-1,q=-1,M=0,U=0,$=r,Q=null;g:for(;;){for(var N;;){if($!==o||h!==0&&$.nodeType!==3||(t=u+h),$!==b||e!==0&&$.nodeType!==3||(q=u+e),$.nodeType===3&&(u+=$.nodeValue.length),(N=$.firstChild)===null)break;Q=$,$=N}for(;;){if($===r)break g;if(Q===o&&++M===h&&(t=u),Q===b&&++U===e&&(q=u),(N=$.nextSibling)!==null)break;$=Q,Q=$.parentNode}$=N}o=t===-1||q===-1?null:{start:t,end:q}}else o=null}o=o||{start:0,end:0}}else o=null;u6={focusedElem:r,selectionRange:o},pu=!1;for(io=g;io!==null;)if(g=io,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,io=r;else for(;io!==null;){switch(r=g=io,o=r.alternate,h=r.flags,r.tag){case 0:if((h&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)h=r[o],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:(h&1024)!==0&&o!==null&&QX(r,o);break;case 3:if((h&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)$4(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$4(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((h&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,io=r;break}io=g.return}}function aO(r,g,o){var e=vl(),h=ne(),b=Pe(),u=Oe(),t=o.flags;switch(o.tag){case 0:case 11:case 15:We(r,o),t&4&&TO(o,Hl|Nl);break;case 1:if(We(r,o),t&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||Kh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Ae(o)?(qe(),wr(o,Lt,o,r),He()):wr(o,Lt,o,r);else{var q=a0(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||Kh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Ae(o)?(qe(),wr(o,CA,o,r,q,g,r.__reactInternalSnapshotBeforeUpdate),He()):wr(o,CA,o,r,q,g,r.__reactInternalSnapshotBeforeUpdate)}t&64&&kO(o),t&512&&Qb(o,o.return);break;case 3:if(g=je(),We(r,o),t&64&&(t=o.updateQueue,t!==null)){if(q=null,o.child!==null)switch(o.child.tag){case 27:case 5:q=o.child.stateNode;break;case 1:q=o.child.stateNode}try{wr(o,VP,t,q)}catch(U){bg(o,o.return,U)}}r.effectDuration+=ei(g);break;case 27:g===null&&t&4&&EO(o);case 26:case 5:if(We(r,o),g===null){if(t&4)_O(o);else if(t&64){r=o.type,g=o.memoizedProps,q=o.stateNode;try{wr(o,dX,q,r,g,o)}catch(U){bg(o,o.return,U)}}}t&512&&Qb(o,o.return);break;case 12:if(t&4){t=je(),We(r,o),r=o.stateNode,r.effectDuration+=Pb(t);try{wr(o,VO,o,g,dv,r.effectDuration)}catch(U){bg(o,o.return,U)}}else We(r,o);break;case 31:We(r,o),t&4&&pO(r,o);break;case 13:We(r,o),t&4&&dO(r,o),t&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(t=CX.bind(null,o),nY(r,t))));break;case 22:if(t=o.memoizedState!==null||nv,!t){g=g!==null&&g.memoizedState!==null||sg,q=nv;var M=sg;nv=t,(sg=g)&&!M?(Re(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&a5(o,Qr,mr)):We(r,o),nv=q,sg=M}break;case 30:break;default:We(r,o)}(o.mode&kr)!==Kr&&0<=Qr&&0<=mr&&((Zg||0.05<Ig)&&ie(o,Qr,mr,Ig,$g),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<mr-Qr&&(cO(o.return.alternate,o.return)||we(o,Qr,mr,"Mount"))),hl(e),te(h),$g=b,Zg=u}function jO(r){var g=r.alternate;g!==null&&(r.alternate=null,jO(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&ir(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function de(r,g,o){for(o=o.child;o!==null;)fO(r,g,o),o=o.sibling}function fO(r,g,o){if(zo&&typeof zo.onCommitFiberUnmount==="function")try{zo.onCommitFiberUnmount(eh,o)}catch(M){ze||(ze=!0,console.error("React instrumentation encountered an error: %o",M))}var e=vl(),h=ne(),b=Pe(),u=Oe();switch(o.tag){case 26:sg||Me(o,g),de(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:sg||Me(o,g);var t=ro,q=jo;Dv(o.type)&&(ro=o.stateNode,jo=!1),de(r,g,o),wr(o,Nb,o.stateNode),ro=t,jo=q;break;case 5:sg||Me(o,g);case 6:if(t=ro,q=jo,ro=null,de(r,g,o),ro=t,jo=q,ro!==null)if(jo)try{wr(o,oY,ro,o.stateNode)}catch(M){bg(o,g,M)}else try{wr(o,gY,ro,o.stateNode)}catch(M){bg(o,g,M)}break;case 18:ro!==null&&(jo?(r=ro,sH(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),rh(r)):sH(ro,o.stateNode));break;case 4:t=ro,q=jo,ro=o.stateNode.containerInfo,jo=!0,de(r,g,o),ro=t,jo=q;break;case 0:case 11:case 14:case 15:E1(xo,o,g),sg||h4(o,g,Hl),de(r,g,o);break;case 1:sg||(Me(o,g),t=o.stateNode,typeof t.componentWillUnmount==="function"&&DO(o,g,t)),de(r,g,o);break;case 21:de(r,g,o);break;case 22:sg=(t=sg)||o.memoizedState!==null,de(r,g,o),sg=t;break;default:de(r,g,o)}(o.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(o,Qr,mr,Ig,$g),hl(e),te(h),$g=b,Zg=u}function pO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{wr(g,PY,r)}catch(o){bg(g,g.return,o)}}}function dO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{wr(g,OY,r)}catch(o){bg(g,g.return,o)}}function $X(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new YM),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new YM),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Ii(r,g){var o=$X(r);g.forEach(function(e){if(!o.has(e)){if(o.add(e),me)if(Uh!==null&&$h!==null)Ub($h,Uh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var h=TX.bind(null,r,e);e.then(h,h)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var e=0;e<o.length;e++){var h=r,b=g,u=o[e],t=vl(),q=b;r:for(;q!==null;){switch(q.tag){case 27:if(Dv(q.type)){ro=q.stateNode,jo=!1;break r}break;case 5:ro=q.stateNode,jo=!1;break r;case 3:case 4:ro=q.stateNode.containerInfo,jo=!0;break r}q=q.return}if(ro===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");fO(h,b,u),ro=null,jo=!1,(u.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&we(u,Qr,mr,"Unmount"),hl(t),h=u,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)sO(g,r),g=g.sibling}function sO(r,g){var o=vl(),e=ne(),h=Pe(),b=Oe(),u=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),ao(r),t&4&&(E1(xo|Nl,r,r.return),Jb(xo|Nl,r),h4(r,r.return,Hl|Nl));break;case 1:if(co(g,r),ao(r),t&512&&(sg||u===null||Me(u,u.return)),t&64&&nv&&(t=r.updateQueue,t!==null&&(u=t.callbacks,u!==null))){var q=t.shared.hiddenCallbacks;t.shared.hiddenCallbacks=q===null?u:q.concat(u)}break;case 26:if(q=al,co(g,r),ao(r),t&512&&(sg||u===null||Me(u,u.return)),t&4){var M=u!==null?u.memoizedState:null;if(t=r.memoizedState,u===null)if(t===null)if(r.stateNode===null){r:{t=r.type,u=r.memoizedProps,q=q.ownerDocument||q;g:switch(t){case"title":if(M=q.getElementsByTagName("title")[0],!M||M[kb]||M[Ao]||M.namespaceURI===hh||M.hasAttribute("itemprop"))M=q.createElement(t),q.head.insertBefore(M,q.querySelector("head > title"));qo(M,t,u),M[Ao]=r,Jr(M),t=M;break r;case"link":var U=uq("link","href",q).get(t+(u.href||""));if(U){for(var $=0;$<U.length;$++)if(M=U[$],M.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&M.getAttribute("rel")===(u.rel==null?null:u.rel)&&M.getAttribute("title")===(u.title==null?null:u.title)&&M.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){U.splice($,1);break g}}M=q.createElement(t),qo(M,t,u),q.head.appendChild(M);break;case"meta":if(U=uq("meta","content",q).get(t+(u.content||""))){for($=0;$<U.length;$++)if(M=U[$],tg(u.content,"content"),M.getAttribute("content")===(u.content==null?null:""+u.content)&&M.getAttribute("name")===(u.name==null?null:u.name)&&M.getAttribute("property")===(u.property==null?null:u.property)&&M.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&M.getAttribute("charset")===(u.charSet==null?null:u.charSet)){U.splice($,1);break g}}M=q.createElement(t),qo(M,t,u),q.head.appendChild(M);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+t+'". This is a bug in React.')}M[Ao]=r,Jr(M),t=M}r.stateNode=t}else nq(q,r.type,r.stateNode);else r.stateNode=iq(q,t,r.memoizedProps);else M!==t?(M===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):M.count--,t===null?nq(q,r.type,r.stateNode):iq(q,t,r.memoizedProps)):t===null&&r.stateNode!==null&&w4(r,r.memoizedProps,u.memoizedProps)}break;case 27:co(g,r),ao(r),t&512&&(sg||u===null||Me(u,u.return)),u!==null&&t&4&&w4(r,r.memoizedProps,u.memoizedProps);break;case 5:if(co(g,r),ao(r),t&512&&(sg||u===null||Me(u,u.return)),r.flags&32){q=r.stateNode;try{wr(r,pH,q)}catch(Pr){bg(r,r.return,Pr)}}t&4&&r.stateNode!=null&&(q=r.memoizedProps,w4(r,q,u!==null?u.memoizedProps:q)),t&1024&&(_t=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),ao(r),t&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");t=r.memoizedProps,u=u!==null?u.memoizedProps:t,q=r.stateNode;try{wr(r,rY,q,u,t)}catch(Pr){bg(r,r.return,Pr)}}break;case 3:if(q=je(),au=null,M=al,al=Si(g.containerInfo),co(g,r),al=M,ao(r),t&4&&u!==null&&u.memoizedState.isDehydrated)try{wr(r,tY,g.containerInfo)}catch(Pr){bg(r,r.return,Pr)}_t&&(_t=!1,rH(r)),g.effectDuration+=ei(q);break;case 4:t=al,al=Si(r.stateNode.containerInfo),co(g,r),ao(r),al=t;break;case 12:t=je(),co(g,r),ao(r),r.stateNode.effectDuration+=Pb(t);break;case 31:co(g,r),ao(r),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Ii(r,t)));break;case 13:co(g,r),ao(r),r.child.flags&8192&&r.memoizedState!==null!==(u!==null&&u.memoizedState!==null)&&(Fu=bo()),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Ii(r,t)));break;case 22:q=r.memoizedState!==null;var Q=u!==null&&u.memoizedState!==null,N=nv,hr=sg;if(nv=N||q,sg=hr||Q,co(g,r),sg=hr,nv=N,Q&&!q&&!N&&!hr&&(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&a5(r,Qr,mr),ao(r),t&8192)r:for(g=r.stateNode,g._visibility=q?g._visibility&~fb:g._visibility|fb,!q||u===null||Q||nv||sg||(j0(r),(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&we(r,Qr,mr,"Disconnect")),u=null,g=r;;){if(g.tag===5||g.tag===26){if(u===null){Q=u=g;try{M=Q.stateNode,q?wr(Q,eY,M):wr(Q,bY,Q.stateNode,Q.memoizedProps)}catch(Pr){bg(Q,Q.return,Pr)}}}else if(g.tag===6){if(u===null){Q=g;try{U=Q.stateNode,q?wr(Q,vY,U):wr(Q,wY,U,Q.memoizedProps)}catch(Pr){bg(Q,Q.return,Pr)}}}else if(g.tag===18){if(u===null){Q=g;try{$=Q.stateNode,q?wr(Q,lY,$):wr(Q,hY,Q.stateNode)}catch(Pr){bg(Q,Q.return,Pr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;u===g&&(u=null),g=g.return}u===g&&(u=null),g.sibling.return=g.return,g=g.sibling}t&4&&(t=r.updateQueue,t!==null&&(u=t.retryQueue,u!==null&&(t.retryQueue=null,Ii(r,u))));break;case 19:co(g,r),ao(r),t&4&&(t=r.updateQueue,t!==null&&(r.updateQueue=null,Ii(r,t)));break;case 30:break;case 21:break;default:co(g,r),ao(r)}(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&((Zg||0.05<Ig)&&ie(r,Qr,mr,Ig,$g),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<mr-Qr&&(cO(r.return.alternate,r.return)||we(r,Qr,mr,"Mount"))),hl(o),te(e),$g=h,Zg=b}function ao(r){var g=r.flags;if(g&2){try{wr(r,KX,r)}catch(o){bg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function rH(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;rH(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function We(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)aO(r,g.alternate,g),g=g.sibling}function gH(r){var g=vl(),o=ne(),e=Pe(),h=Oe();switch(r.tag){case 0:case 11:case 14:case 15:h4(r,r.return,Hl),j0(r);break;case 1:Me(r,r.return);var b=r.stateNode;typeof b.componentWillUnmount==="function"&&DO(r,r.return,b),j0(r);break;case 27:wr(r,Nb,r.stateNode);case 26:case 5:Me(r,r.return),j0(r);break;case 22:r.memoizedState===null&&j0(r);break;case 30:j0(r);break;default:j0(r)}(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(r,Qr,mr,Ig,$g),hl(g),te(o),$g=e,Zg=h}function j0(r){for(r=r.child;r!==null;)gH(r),r=r.sibling}function oH(r,g,o,e){var h=vl(),b=ne(),u=Pe(),t=Oe(),q=o.flags;switch(o.tag){case 0:case 11:case 15:Re(r,o,e),TO(o,Hl);break;case 1:if(Re(r,o,e),g=o.stateNode,typeof g.componentDidMount==="function"&&wr(o,Lt,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{wr(o,tX,g,r)}catch(M){bg(o,o.return,M)}}e&&q&64&&kO(o),Qb(o,o.return);break;case 27:EO(o);case 26:case 5:Re(r,o,e),e&&g===null&&q&4&&_O(o),Qb(o,o.return);break;case 12:if(e&&q&4){q=je(),Re(r,o,e),e=o.stateNode,e.effectDuration+=Pb(q);try{wr(o,VO,o,g,dv,e.effectDuration)}catch(M){bg(o,o.return,M)}}else Re(r,o,e);break;case 31:Re(r,o,e),e&&q&4&&pO(r,o);break;case 13:Re(r,o,e),e&&q&4&&dO(r,o);break;case 22:o.memoizedState===null&&Re(r,o,e),Qb(o,o.return);break;case 30:break;default:Re(r,o,e)}(o.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(o,Qr,mr,Ig,$g),hl(h),te(b),$g=u,Zg=t}function Re(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)oH(r,g.alternate,g,o),g=g.sibling}function n4(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_0(r),o!=null&&tb(o))}function t4(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_0(g),r!=null&&tb(r))}function Dl(r,g,o,e,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var b=g.sibling;lH(r,g,o,e,b!==null?b.actualStartTime:h),g=b}}function lH(r,g,o,e,h){var b=vl(),u=ne(),t=Pe(),q=Oe(),M=av,U=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Kr&&0<g.actualStartTime&&(g.flags&1)!==0&&j5(g,g.actualStartTime,h,eo,o),Dl(r,g,o,e,h),U&2048&&SO(g,Co|Nl);break;case 1:(g.mode&kr)!==Kr&&0<g.actualStartTime&&((g.flags&128)!==0?jn(g,g.actualStartTime,h,[]):(g.flags&1)!==0&&j5(g,g.actualStartTime,h,eo,o)),Dl(r,g,o,e,h);break;case 3:var $=je(),Q=eo;eo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dl(r,g,o,e,h),eo=Q,U&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),e=g.memoizedState.cache,e!==o&&(_0(e),o!=null&&tb(o))),r.passiveEffectDuration+=ei($);break;case 12:if(U&2048){U=je(),Dl(r,g,o,e,h),r=g.stateNode,r.passiveEffectDuration+=Pb(U);try{wr(g,mX,g,g.alternate,dv,r.passiveEffectDuration)}catch(N){bg(g,g.return,N)}}else Dl(r,g,o,e,h);break;case 31:U=eo,$=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,$!==null&&Q===null?(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(eo=!1,$=$.hydrationErrors,$!==null&&jn(g,g.actualStartTime,h,$)):eo=!0):eo=!1,Dl(r,g,o,e,h),eo=U;break;case 13:U=eo,$=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,$===null||$.dehydrated===null||Q!==null&&Q.dehydrated!==null?eo=!1:(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(eo=!1,$=$.hydrationErrors,$!==null&&jn(g,g.actualStartTime,h,$)):eo=!0),Dl(r,g,o,e,h),eo=U;break;case 23:break;case 22:Q=g.stateNode,$=g.alternate,g.memoizedState!==null?Q._visibility&gv?Dl(r,g,o,e,h):zb(r,g,o,e,h):Q._visibility&gv?Dl(r,g,o,e,h):(Q._visibility|=gv,c1(r,g,o,e,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),h),(g.mode&kr)===Kr||eo||(r=g.actualStartTime,0<=r&&0.05<h-r&&a5(g,r,h),0<=Qr&&0<=mr&&0.05<mr-Qr&&a5(g,Qr,mr))),U&2048&&n4($,g);break;case 24:Dl(r,g,o,e,h),U&2048&&t4(g.alternate,g);break;default:Dl(r,g,o,e,h)}if((g.mode&kr)!==Kr){if(r=!eo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<h-o&&we(g,o,h,"Mount");0<=Qr&&0<=mr&&((Zg||0.05<Ig)&&ie(g,Qr,mr,Ig,$g),r&&0.05<mr-Qr&&we(g,Qr,mr,"Mount"))}hl(b),te(u),$g=t,Zg=q,av=M}function c1(r,g,o,e,h,b){h=h&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var u=g.sibling;eH(r,g,o,e,h,u!==null?u.actualStartTime:b),g=u}}function eH(r,g,o,e,h,b){var u=vl(),t=ne(),q=Pe(),M=Oe(),U=av;h&&(g.mode&kr)!==Kr&&0<g.actualStartTime&&(g.flags&1)!==0&&j5(g,g.actualStartTime,b,eo,o);var $=g.flags;switch(g.tag){case 0:case 11:case 15:c1(r,g,o,e,h,b),SO(g,Co);break;case 23:break;case 22:var Q=g.stateNode;g.memoizedState!==null?Q._visibility&gv?c1(r,g,o,e,h,b):zb(r,g,o,e,b):(Q._visibility|=gv,c1(r,g,o,e,h,b)),h&&$&2048&&n4(g.alternate,g);break;case 24:c1(r,g,o,e,h,b),h&&$&2048&&t4(g.alternate,g);break;default:c1(r,g,o,e,h,b)}(g.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(g,Qr,mr,Ig,$g),hl(u),te(t),$g=q,Zg=M,av=U}function zb(r,g,o,e,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var b=g.child;b!==null;){g=b.sibling;var u=r,t=o,q=e,M=g!==null?g.actualStartTime:h,U=av;(b.mode&kr)!==Kr&&0<b.actualStartTime&&(b.flags&1)!==0&&j5(b,b.actualStartTime,M,eo,t);var $=b.flags;switch(b.tag){case 22:zb(u,b,t,q,M),$&2048&&n4(b.alternate,b);break;case 24:zb(u,b,t,q,M),$&2048&&t4(b.alternate,b);break;default:zb(u,b,t,q,M)}av=U,b=g}}function a1(r,g,o){if(r.subtreeFlags&qw)for(r=r.child;r!==null;)vH(r,g,o),r=r.sibling}function vH(r,g,o){switch(r.tag){case 26:a1(r,g,o),r.flags&qw&&r.memoizedState!==null&&MY(o,al,r.memoizedState,r.memoizedProps);break;case 5:a1(r,g,o);break;case 3:case 4:var e=al;al=Si(r.stateNode.containerInfo),a1(r,g,o),al=e;break;case 22:r.memoizedState===null&&(e=r.alternate,e!==null&&e.memoizedState!==null?(e=qw,qw=16777216,a1(r,g,o),qw=e):a1(r,g,o));break;default:a1(r,g,o)}}function hH(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function mb(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var e=g[o],h=vl();io=e,iH(e,r),(e.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&we(e,Qr,mr,"Unmount"),hl(h)}hH(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bH(r),r=r.sibling}function bH(r){var g=vl(),o=ne(),e=Pe(),h=Oe();switch(r.tag){case 0:case 11:case 15:mb(r),r.flags&2048&&b4(r,r.return,Co|Nl);break;case 3:var b=je();mb(r),r.stateNode.passiveEffectDuration+=ei(b);break;case 12:b=je(),mb(r),r.stateNode.passiveEffectDuration+=Pb(b);break;case 22:b=r.stateNode,r.memoizedState!==null&&b._visibility&gv&&(r.return===null||r.return.tag!==13)?(b._visibility&=~gv,Fi(r),(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&we(r,Qr,mr,"Disconnect")):mb(r);break;default:mb(r)}(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(r,Qr,mr,Ig,$g),hl(g),te(o),Zg=h,$g=e}function Fi(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var e=g[o],h=vl();io=e,iH(e,r),(e.mode&kr)!==Kr&&0<=Qr&&0<=mr&&0.05<mr-Qr&&we(e,Qr,mr,"Unmount"),hl(h)}hH(r)}for(r=r.child;r!==null;)wH(r),r=r.sibling}function wH(r){var g=vl(),o=ne(),e=Pe(),h=Oe();switch(r.tag){case 0:case 11:case 15:b4(r,r.return,Co),Fi(r);break;case 22:var b=r.stateNode;b._visibility&gv&&(b._visibility&=~gv,Fi(r));break;default:Fi(r)}(r.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(r,Qr,mr,Ig,$g),hl(g),te(o),Zg=h,$g=e}function iH(r,g){for(;io!==null;){var o=io,e=o,h=g,b=vl(),u=ne(),t=Pe(),q=Oe();switch(e.tag){case 0:case 11:case 15:b4(e,h,Co);break;case 23:case 22:e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(h=e.memoizedState.cachePool.pool,h!=null&&_0(h));break;case 24:tb(e.memoizedState.cache)}if((e.mode&kr)!==Kr&&0<=Qr&&0<=mr&&(Zg||0.05<Ig)&&ie(e,Qr,mr,Ig,$g),hl(b),te(u),Zg=q,$g=t,e=o.child,e!==null)e.return=o,io=e;else r:for(o=r;io!==null;){if(e=io,b=e.sibling,u=e.return,jO(e),e===o){io=null;break r}if(b!==null){b.return=u,io=b;break r}io=u}}}function LX(){dJ.forEach(function(r){return r()})}function uH(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||C.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function wl(r){if((og&vo)!==uo&&Vr!==0)return Vr&-Vr;var g=C.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),R4()):I()}function nH(){if(po===0)if((Vr&536870912)===0||pr){var r=di;di<<=1,(di&3932160)===0&&(di=262144),po=r}else po=536870912;return r=Ol.current,r!==null&&(r.flags|=32),po}function Bg(r,g,o){if(Fh&&console.error("useInsertionEffect must not schedule updates."),g6&&(xu=!0),r===Mg&&(ng===u1||ng===n1)||r.cancelPendingCommit!==null)f1(r,0),Sv(r,Vr,po,!1);if(Kv(r,o),(og&vo)!==uo&&r===Mg){if(Qe)switch(g.tag){case 0:case 11:case 15:r=yr&&x(yr)||"Unknown",CM.has(r)||(CM.add(r),g=x(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:xM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),xM=!0)}}else me&&gb(r,g,o),kX(g),r===Mg&&((og&vo)===uo&&(b0|=o),Fg===e0&&Sv(r,Vr,po,!1)),Ge(r)}function tH(r,g,o){if((og&(vo|ql))!==uo)throw Error("Should not already be working.");if(Vr!==0&&yr!==null){var e=yr,h=bo();switch($A){case Ww:case u1:var b=ow;Qg&&((e=e._debugTask)?e.run(console.timeStamp.bind(console,"Suspended",b,h,zl,void 0,"primary-light")):console.timeStamp("Suspended",b,h,zl,void 0,"primary-light"));break;case n1:b=ow,Qg&&((e=e._debugTask)?e.run(console.timeStamp.bind(console,"Action",b,h,zl,void 0,"primary-light")):console.timeStamp("Action",b,h,zl,void 0,"primary-light"));break;default:Qg&&(e=h-ow,3>e||console.timeStamp("Blocked",ow,h,zl,void 0,5>e?"primary-light":10>e?"primary":100>e?"primary-dark":"error"))}}b=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||L0(r,g))?FX(r,g):O4(r,g,!0);var u=o;do{if(b===tv){Lh&&!o&&Sv(r,g,0,!1),g=ng,ow=fg(),$A=g;break}else{if(e=bo(),h=r.current.alternate,u&&!IX(h)){ll(g),h=wo,b=e,!Qg||b<=h||(Sg?Sg.run(console.timeStamp.bind(console,"Teared Render",h,b,jr,ar,"error")):console.timeStamp("Teared Render",h,b,jr,ar,"error")),f0(g,e),b=O4(r,g,!1),u=!1;continue}if(b===i1){if(u=g,r.errorRecoveryDisabledLanes&u)var t=0;else t=r.pendingLanes&-536870913,t=t!==0?t:t&536870912?536870912:0;if(t!==0){ll(g),fn(wo,e,g,Sg),f0(g,e),g=t;r:{e=r,b=u,u=Gw;var q=e.current.memoizedState.isDehydrated;if(q&&(f1(e,t).flags|=256),t=O4(e,t,!1),t!==i1){if(ct&&!q){e.errorRecoveryDisabledLanes|=b,b0|=b,b=e0;break r}e=To,To=u,e!==null&&(To===null?To=e:To.push.apply(To,e))}b=t}if(u=!1,b!==i1)continue;else e=bo()}}if(b===Mw){ll(g),fn(wo,e,g,Sg),f0(g,e),f1(r,0),Sv(r,g,0,!0);break}r:{switch(o=r,b){case tv:case Mw:throw Error("Root did not complete. This is a bug in React.");case e0:if((g&4194048)!==g)break;case Uu:ll(g),tP(wo,e,g,Sg),f0(g,e),h=g,(h&127)!==0?Ou=e:(h&4194048)!==0&&(Hu=e),Sv(o,g,po,!v0);break r;case i1:To=null;break;case Ku:case JM:break;default:throw Error("Unknown root exit status.")}if(C.actQueue!==null)H4(o,h,g,To,Xw,Iu,po,b0,t1,b,null,null,wo,e);else{if((g&62914560)===g&&(u=Fu+mM-bo(),10<u)){if(Sv(o,g,po,!v0),$0(o,0,!0)!==0)break r;jl=g,o.timeoutHandle=EM(PH.bind(null,o,h,To,Xw,Iu,g,po,b0,t1,v0,b,"Throttled",wo,e),u);break r}PH(o,h,To,Xw,Iu,g,po,b0,t1,v0,b,null,wo,e)}}}break}while(1);Ge(r)}function PH(r,g,o,e,h,b,u,t,q,M,U,$,Q,N){r.timeoutHandle=A1;var hr=g.subtreeFlags,Pr=null;if(hr&8192||(hr&16785408)===16785408){if(Pr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ye},vH(g,b,Pr),hr=(b&62914560)===b?Fu-bo():(b&4194048)===b?zM-bo():0,hr=WY(Pr,hr),hr!==null){jl=b,r.cancelPendingCommit=hr(H4.bind(null,r,g,b,o,e,h,u,t,q,U,Pr,Pr.waitingForViewTransition?"Waiting for the previous Animation":0<Pr.count?0<Pr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Pr.imgCount===1?"Suspended on an Image":0<Pr.imgCount?"Suspended on Images":null,Q,N)),Sv(r,b,u,!M);return}}H4(r,g,b,o,e,h,u,t,q,U,Pr,$,Q,N)}function IX(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var e=0;e<o.length;e++){var h=o[e],b=h.getSnapshot;h=h.value;try{if(!Bo(b(),h))return!1}catch(u){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function Sv(r,g,o,e){g&=~at,g&=~b0,r.suspendedLanes|=g,r.pingedLanes&=~g,e&&(r.warmLanes|=g),e=r.expirationTimes;for(var h=g;0<h;){var b=31-Io(h),u=1<<b;e[b]=-1,h&=~u}o!==0&&I0(r,o,g)}function j1(){return(og&(vo|ql))===uo?($b(0,!1),!1):!0}function P4(){if(yr!==null){if(ng===fo)var r=yr.return;else r=yr,gi(),J2(r),Xh=null,nw=0,r=yr;for(;r!==null;)CO(r.alternate,r),r=r.return;yr=null}}function f0(r,g){(r&127)!==0&&(sv=g),(r&4194048)!==0&&(Ie=g),(r&62914560)!==0&&(KA=g),(r&2080374784)!==0&&(UA=g)}function f1(r,g){Qg&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",ar,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",ar,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",ar,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",ar,"primary-light"));var o=wo;if(wo=fg(),Vr!==0&&0<o){if(ll(Vr),Fg===Ku||Fg===e0)tP(o,wo,g,Sg);else{var e=wo,h=Sg;if(Qg&&!(e<=o)){var b=(g&738197653)===g?"tertiary-dark":"primary-dark",u=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";h?h.run(console.timeStamp.bind(console,u,o,e,jr,ar,b)):console.timeStamp(u,o,e,jr,ar,b)}}f0(Vr,wo)}if(o=Sg,Sg=null,(g&127)!==0){Sg=sb,h=0<=Le&&Le<sv?sv:Le,e=0<=g1&&g1<sv?sv:g1,b=0<=e?e:0<=h?h:wo,0<=Ou?(ll(2),PP(Ou,b,g,o)):(qu&127)!==0&&(ll(2),ub(sv,b,bv)),o=h;var t=e,q=rw,M=0<Wh,U=r0===db,$=r0===Pu;if(h=wo,e=sb,b=zt,u=mt,Qg){if(jr="Blocking",0<o?o>h&&(o=h):o=h,0<t?t>o&&(t=o):t=o,q!==null&&o>t){var Q=M?"secondary-light":"warning";e?e.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+q,t,o,jr,ar,Q)):console.timeStamp(M?"Consecutive":"Event: "+q,t,o,jr,ar,Q)}h>o&&(t=U?"error":(g&738197653)===g?"tertiary-light":"primary-light",U=$?"Promise Resolved":U?"Cascading Update":5<h-o?"Update Blocked":"Update",$=[],u!=null&&$.push(["Component name",u]),b!=null&&$.push(["Method name",b]),o={start:o,end:h,detail:{devtools:{properties:$,track:jr,trackGroup:ar,color:t}}},e?e.run(performance.measure.bind(performance,U,o)):performance.measure(U,o))}Le=-1.1,r0=0,mt=zt=null,Ou=-1.1,Wh=g1,g1=-1.1,sv=fg()}if((g&4194048)!==0&&(Sg=gw,h=0<=hv&&hv<Ie?Ie:hv,o=0<=Il&&Il<Ie?Ie:Il,e=0<=g0&&g0<Ie?Ie:g0,b=0<=e?e:0<=o?o:wo,0<=Hu?(ll(256),PP(Hu,b,g,Sg)):(qu&4194048)!==0&&(ll(256),ub(Ie,b,bv)),$=e,t=o1,q=0<o0,M=Kt===Pu,b=wo,e=gw,u=zA,U=mA,Qg&&(jr="Transition",0<o?o>b&&(o=b):o=b,0<h?h>o&&(h=o):h=o,0<$?$>h&&($=h):$=h,h>$&&t!==null&&(Q=q?"secondary-light":"warning",e?e.run(console.timeStamp.bind(console,q?"Consecutive":"Event: "+t,$,h,jr,ar,Q)):console.timeStamp(q?"Consecutive":"Event: "+t,$,h,jr,ar,Q)),o>h&&(e?e.run(console.timeStamp.bind(console,"Action",h,o,jr,ar,"primary-dark")):console.timeStamp("Action",h,o,jr,ar,"primary-dark")),b>o&&(h=M?"Promise Resolved":5<b-o?"Update Blocked":"Update",$=[],U!=null&&$.push(["Component name",U]),u!=null&&$.push(["Method name",u]),o={start:o,end:b,detail:{devtools:{properties:$,track:jr,trackGroup:ar,color:"primary-light"}}},e?e.run(performance.measure.bind(performance,h,o)):performance.measure(h,o))),Il=hv=-1.1,Kt=0,Hu=-1.1,o0=g0,g0=-1.1,Ie=fg()),(g&62914560)!==0&&(qu&62914560)!==0&&(ll(4194304),ub(KA,wo,bv)),(g&2080374784)!==0&&(qu&2080374784)!==0&&(ll(268435456),ub(UA,wo,bv)),o=r.timeoutHandle,o!==A1&&(r.timeoutHandle=A1,nQ(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),jl=0,P4(),Mg=r,yr=o=Ee(r.current,null),Vr=g,ng=fo,Al=null,v0=!1,Lh=L0(r,g),ct=!1,Fg=tv,t1=po=at=b0=h0=0,To=Gw=null,Iu=!1,(g&8)!==0&&(g|=g&32),e=r.entangledLanes,e!==0)for(r=r.entanglements,e&=g;0<e;)h=31-Io(e),b=1<<h,g|=r[h],e&=~b;return Ne=g,f5(),r=RA(),1000<r-WA&&(C.recentlyCreatedOwnerStacks=0,WA=r),El.discardPendingWarnings(),o}function OH(r,g){Ur=null,C.H=Hw,C.getCurrentStack=null,Qe=!1,nl=null,g===Gh||g===Ru?(g=BP(),ng=Ww):g===It?(g=BP(),ng=QM):ng=g===Dt?Et:g!==null&&typeof g==="object"&&typeof g.then==="function"?Rw:$u,Al=g;var o=yr;o===null?(Fg=Mw,zi(r,el(g,r.current))):o.mode&kr&&n2(o)}function HH(){var r=Ol.current;return r===null?!0:(Vr&4194048)===Vr?Fl===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fl:!1}function qH(){var r=C.H;return C.H=Hw,r===null?Hw:r}function AH(){var r=C.A;return C.A=pJ,r}function Ni(r){Sg===null&&(Sg=r._debugTask==null?null:r._debugTask)}function Bi(){Fg=e0,v0||(Vr&4194048)!==Vr&&Ol.current!==null||(Lh=!0),(h0&134217727)===0&&(b0&134217727)===0||Mg===null||Sv(Mg,Vr,po,!1)}function O4(r,g,o){var e=og;og|=vo;var h=qH(),b=AH();if(Mg!==r||Vr!==g){if(me){var u=r.memoizedUpdaters;0<u.size&&(Ub(r,Vr),u.clear()),Uv(r,g)}Xw=null,f1(r,g)}g=!1,u=Fg;r:do try{if(ng!==fo&&yr!==null){var t=yr,q=Al;switch(ng){case Et:P4(),u=Uu;break r;case Ww:case u1:case n1:case Rw:Ol.current===null&&(g=!0);var M=ng;if(ng=fo,Al=null,p1(r,t,q,M),o&&Lh){u=tv;break r}break;default:M=ng,ng=fo,Al=null,p1(r,t,q,M)}}MH(),u=Fg;break}catch(U){OH(r,U)}while(1);return g&&r.shellSuspendCounter++,gi(),og=e,C.H=h,C.A=b,yr===null&&(Mg=null,Vr=0,f5()),u}function MH(){for(;yr!==null;)WH(yr)}function FX(r,g){var o=og;og|=vo;var e=qH(),h=AH();if(Mg!==r||Vr!==g){if(me){var b=r.memoizedUpdaters;0<b.size&&(Ub(r,Vr),b.clear()),Uv(r,g)}Xw=null,Nu=bo()+KM,f1(r,g)}else Lh=L0(r,g);r:do try{if(ng!==fo&&yr!==null)g:switch(g=yr,b=Al,ng){case $u:ng=fo,Al=null,p1(r,g,b,$u);break;case u1:case n1:if(FP(b)){ng=fo,Al=null,RH(g);break}g=function(){ng!==u1&&ng!==n1||Mg!==r||(ng=Lu),Ge(r)},b.then(g,g);break r;case Ww:ng=Lu;break r;case QM:ng=yt;break r;case Lu:FP(b)?(ng=fo,Al=null,RH(g)):(ng=fo,Al=null,p1(r,g,b,Lu));break;case yt:var u=null;switch(yr.tag){case 26:u=yr.memoizedState;case 5:case 27:var t=yr;if(u?tq(u):t.stateNode.complete){ng=fo,Al=null;var q=t.sibling;if(q!==null)yr=q;else{var M=t.return;M!==null?(yr=M,Zi(M)):yr=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}ng=fo,Al=null,p1(r,g,b,yt);break;case Rw:ng=fo,Al=null,p1(r,g,b,Rw);break;case Et:P4(),Fg=Uu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}C.actQueue!==null?MH():NX();break}catch(U){OH(r,U)}while(1);if(gi(),C.H=e,C.A=h,og=o,yr!==null)return tv;return Mg=null,Vr=0,f5(),Fg}function NX(){for(;yr!==null&&!IY();)WH(yr)}function WH(r){var g=r.alternate;(r.mode&kr)!==Kr?(u2(r),g=wr(r,e4,g,r,Ne),n2(r)):g=wr(r,e4,g,r,Ne),r.memoizedProps=r.pendingProps,g===null?Zi(r):yr=g}function RH(r){var g=wr(r,BX,r);r.memoizedProps=r.pendingProps,g===null?Zi(r):yr=g}function BX(r){var g=r.alternate,o=(r.mode&kr)!==Kr;switch(o&&u2(r),r.tag){case 15:case 0:g=LO(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=LO(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:J2(r);default:CO(g,r),r=yr=WP(r,Ne),g=e4(g,r,Ne)}return o&&n2(r),g}function p1(r,g,o,e){gi(),J2(g),Xh=null,nw=0;var h=g.return;try{if(WX(r,h,g,o,Vr)){Fg=Mw,zi(r,el(o,r.current)),yr=null;return}}catch(b){if(h!==null)throw yr=h,b;Fg=Mw,zi(r,el(o,r.current)),yr=null;return}if(g.flags&32768){if(pr||e===$u)r=!0;else if(Lh||(Vr&536870912)!==0)r=!1;else if(v0=r=!0,e===u1||e===n1||e===Ww||e===Rw)e=Ol.current,e!==null&&e.tag===13&&(e.flags|=16384);GH(g,r)}else Zi(g)}function Zi(r){var g=r;do{if((g.flags&32768)!==0){GH(g,v0);return}var o=g.alternate;if(r=g.return,u2(g),o=wr(g,XX,o,g,Ne),(g.mode&kr)!==Kr&&KP(g),o!==null){yr=o;return}if(g=g.sibling,g!==null){yr=g;return}yr=g=r}while(g!==null);Fg===tv&&(Fg=JM)}function GH(r,g){do{var o=YX(r.alternate,r);if(o!==null){o.flags&=32767,yr=o;return}if((r.mode&kr)!==Kr){KP(r),o=r.actualDuration;for(var e=r.child;e!==null;)o+=e.actualDuration,e=e.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){yr=r;return}yr=r=o}while(r!==null);Fg=Uu,yr=null}function H4(r,g,o,e,h,b,u,t,q,M,U,$,Q,N){r.cancelPendingCommit=null;do Kb();while(go!==i0);if(El.flushLegacyContextWarning(),El.flushPendingUnsafeLifecycleWarnings(),(og&(vo|ql))!==uo)throw Error("Should not already be working.");if(ll(o),M===i1?fn(Q,N,o,Sg):e!==null?hX(Q,N,o,e,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Sg):vX(Q,N,o,Sg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=g.lanes|g.childLanes,b|=Gt,T5(r,o,b,u,t,q),r===Mg&&(yr=Mg=null,Vr=0),Ih=g,u0=r,jl=o,pt=b,st=h,NM=e,dt=N,BM=$,fl=Bu,ZM=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,SX(lh,function(){return Kw=window.event,fl===Bu&&(fl=ft),zH(),null})):(r.callbackNode=null,r.callbackPriority=0),vv=null,dv=fg(),$!==null&&bX(N,dv,$,Sg),e=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||e){e=C.T,C.T=null,h=wg.p,wg.p=tl,u=og,og|=ql;try{UX(r,g,o)}finally{og=u,wg.p=h,C.T=e}}go=$M,XH(),YH(),JH()}}function XH(){if(go===$M){go=i0;var r=u0,g=Ih,o=jl,e=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||e){e=C.T,C.T=null;var h=wg.p;wg.p=tl;var b=og;og|=ql;try{Uh=o,$h=r,vi(),sO(g,r),$h=Uh=null,o=u6;var u=iP(r.containerInfo),t=o.focusedElem,q=o.selectionRange;if(u!==t&&t&&t.ownerDocument&&wP(t.ownerDocument.documentElement,t)){if(q!==null&&cn(t)){var{start:M,end:U}=q;if(U===void 0&&(U=M),"selectionStart"in t)t.selectionStart=M,t.selectionEnd=Math.min(U,t.value.length);else{var $=t.ownerDocument||document,Q=$&&$.defaultView||window;if(Q.getSelection){var N=Q.getSelection(),hr=t.textContent.length,Pr=Math.min(q.start,hr),Xg=q.end===void 0?Pr:Math.min(q.end,hr);!N.extend&&Pr>Xg&&(u=Xg,Xg=Pr,Pr=u);var sr=bP(t,Pr),J=bP(t,Xg);if(sr&&J&&(N.rangeCount!==1||N.anchorNode!==sr.node||N.anchorOffset!==sr.offset||N.focusNode!==J.node||N.focusOffset!==J.offset)){var z=$.createRange();z.setStart(sr.node,sr.offset),N.removeAllRanges(),Pr>Xg?(N.addRange(z),N.extend(J.node,J.offset)):(z.setEnd(J.node,J.offset),N.addRange(z))}}}}$=[];for(N=t;N=N.parentNode;)N.nodeType===1&&$.push({element:N,left:N.scrollLeft,top:N.scrollTop});typeof t.focus==="function"&&t.focus();for(t=0;t<$.length;t++){var K=$[t];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}pu=!!i6,u6=i6=null}finally{og=b,wg.p=h,C.T=e}}r.current=g,go=LM}}function YH(){if(go===LM){go=i0;var r=ZM;if(r!==null){dv=fg();var g=ev,o=dv;!Qg||o<=g||(bv?bv.run(console.timeStamp.bind(console,r,g,o,jr,ar,"secondary-light")):console.timeStamp(r,g,o,jr,ar,"secondary-light"))}r=u0,g=Ih,o=jl;var e=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||e){e=C.T,C.T=null;var h=wg.p;wg.p=tl;var b=og;og|=ql;try{Uh=o,$h=r,vi(),aO(r,g.alternate,g),$h=Uh=null}finally{og=b,wg.p=h,C.T=e}}r=dt,g=BM,ev=fg(),r=g===null?r:dv,g=ev,o=fl===jt,e=Sg,vv!==null?OP(r,g,vv,!1,e):!Qg||g<=r||(e?e.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,jr,ar,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,jr,ar,o?"error":"secondary-dark")),go=IM}}function JH(){if(go===FM||go===IM){if(go===FM){var r=ev;ev=fg();var g=ev,o=fl===jt;!Qg||g<=r||(bv?bv.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,jr,ar,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,jr,ar,o?" error":"secondary-light")),fl!==jt&&(fl=UM)}go=i0,FY(),r=u0;var e=Ih;g=jl,o=NM;var h=e.actualDuration!==0||(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0;h?go=Zu:(go=i0,Ih=u0=null,QH(r,r.pendingLanes),P1=0,Jw=null);var b=r.pendingLanes;if(b===0&&(w0=null),h||$H(r),b=W(g),e=e.stateNode,zo&&typeof zo.onCommitFiberRoot==="function")try{var u=(e.current.flags&128)===128;switch(b){case tl:var t=s4;break;case _l:t=rt;break;case Ke:t=lh;break;case ru:t=gt;break;default:t=lh}zo.onCommitFiberRoot(eh,e,t,u)}catch($){ze||(ze=!0,console.error("React instrumentation encountered an error: %o",$))}if(me&&r.memoizedUpdaters.clear(),LX(),o!==null){u=C.T,t=wg.p,wg.p=tl,C.T=null;try{var q=r.onRecoverableError;for(e=0;e<o.length;e++){var M=o[e],U=ZX(M.stack);wr(M.source,q,M.value,U)}}finally{C.T=u,wg.p=t}}(jl&3)!==0&&Kb(),Ge(r),b=r.pendingLanes,(g&261930)!==0&&(b&42)!==0?(Mu=!0,r===r6?Yw++:(Yw=0,r6=r)):Yw=0,h||f0(g,ev),$b(0,!1)}}function ZX(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function QH(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,tb(g)))}function Kb(){return XH(),YH(),JH(),zH()}function zH(){if(go!==Zu)return!1;var r=u0,g=pt;pt=0;var o=W(jl),e=Ke===0||Ke>o?Ke:o;o=C.T;var h=wg.p;try{wg.p=e,C.T=null;var b=st;st=null,e=u0;var u=jl;if(go=i0,Ih=u0=null,jl=0,(og&(vo|ql))!==uo)throw Error("Cannot flush passive effects while already rendering.");ll(u),g6=!0,xu=!1;var t=0;if(vv=null,t=bo(),fl===UM)ub(ev,t,bv);else{var q=ev,M=t,U=fl===ft;!Qg||M<=q||(Sg?Sg.run(console.timeStamp.bind(console,U?"Waiting for Paint":"Waiting",q,M,jr,ar,"secondary-light")):console.timeStamp(U?"Waiting for Paint":"Waiting",q,M,jr,ar,"secondary-light"))}q=og,og|=ql;var $=e.current;vi(),bH($);var Q=e.current;$=dt,vi(),lH(e,Q,u,b,$),$H(e),og=q;var N=bo();if(Q=t,$=Sg,vv!==null?OP(Q,N,vv,!0,$):!Qg||N<=Q||($?$.run(console.timeStamp.bind(console,"Remaining Effects",Q,N,jr,ar,"secondary-dark")):console.timeStamp("Remaining Effects",Q,N,jr,ar,"secondary-dark")),f0(u,N),$b(0,!1),xu?e===Jw?P1++:(P1=0,Jw=e):P1=0,xu=g6=!1,zo&&typeof zo.onPostCommitFiberRoot==="function")try{zo.onPostCommitFiberRoot(eh,e)}catch(Pr){ze||(ze=!0,console.error("React instrumentation encountered an error: %o",Pr))}var hr=e.current.stateNode;return hr.effectDuration=0,hr.passiveEffectDuration=0,!0}finally{wg.p=h,C.T=o,QH(r,g)}}function mH(r,g,o){g=el(o,g),UP(g),g=c2(r.stateNode,g,2),r=Zv(r,g,2),r!==null&&(Kv(r,2),Ge(r))}function bg(r,g,o){if(Fh=!1,r.tag===3)mH(r,r,o);else{for(;g!==null;){if(g.tag===3){mH(g,r,o);return}if(g.tag===1){var e=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof e.componentDidCatch==="function"&&(w0===null||!w0.has(e))){r=el(o,r),UP(r),o=a2(2),e=Zv(g,o,2),e!==null&&(j2(o,e,g,r),Kv(e,2),Ge(e));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function q4(r,g,o){var e=r.pingCache;if(e===null){e=r.pingCache=new sJ;var h=new Set;e.set(g,h)}else h=e.get(g),h===void 0&&(h=new Set,e.set(g,h));h.has(o)||(ct=!0,h.add(o),e=xX.bind(null,r,g,o),me&&Ub(r,o),g.then(e,e))}function xX(r,g,o){var e=r.pingCache;e!==null&&e.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Le&&(sv=Le=fg(),sb=tu("Promise Resolved"),r0=Pu):(o&4194048)!==0&&0>Il&&(Ie=Il=fg(),gw=tu("Promise Resolved"),Kt=Pu),uH()&&C.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Mg===r&&(Vr&o)===o&&(Fg===e0||Fg===Ku&&(Vr&62914560)===Vr&&bo()-Fu<mM?(og&vo)===uo&&f1(r,0):at|=o,t1===Vr&&(t1=0)),Ge(r)}function KH(r,g){g===0&&(g=B1()),r=Qo(r,g),r!==null&&(Kv(r,g),Ge(r))}function CX(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),KH(r,o)}function TX(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:e,memoizedState:h}=r;h!==null&&(o=h.retryLane);break;case 19:e=r.stateNode;break;case 22:e=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}e!==null&&e.delete(g),KH(r,o)}function A4(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var e=r,h=g,b=h.type===ai;b=o||b,h.tag!==22?h.flags&67108864?b&&wr(h,UH,e,h):A4(e,h,b):h.memoizedState===null&&(b&&h.flags&8192?wr(h,UH,e,h):h.subtreeFlags&67108864&&wr(h,A4,e,h,b)),g=g.sibling}}function UH(r,g){Rg(!0);try{gH(g),wH(g),oH(r,g.alternate,g,!1),eH(r,g,0,null,!1,0)}finally{Rg(!1)}}function $H(r){var g=!0;r.current.mode&(mo|yl)||(g=!1),A4(r,r.current,g)}function LH(r){if((og&vo)===uo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=x(r)||"ReactComponent",Cu!==null){if(Cu.has(g))return;Cu.add(g)}else Cu=new Set([g]);wr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Ub(r,g){me&&r.memoizedUpdaters.forEach(function(o){gb(r,o,g)})}function SX(r,g){var o=C.actQueue;return o!==null?(o.push(g),oQ):d4(r,g)}function kX(r){uH()&&C.actQueue===null&&wr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,x(r))})}function Ge(r){r!==Nh&&r.next===null&&(Nh===null?Tu=Nh=r:Nh=Nh.next=r),Su=!0,C.actQueue!==null?l6||(l6=!0,BH()):o6||(o6=!0,BH())}function $b(r,g){if(!e6&&Su){e6=!0;do{var o=!1;for(var e=Tu;e!==null;){if(!g)if(r!==0){var h=e.pendingLanes;if(h===0)var b=0;else{var{suspendedLanes:u,pingedLanes:t}=e;b=(1<<31-Io(42|r)+1)-1,b&=h&~(u&~t),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(o=!0,NH(e,b))}else b=Vr,b=$0(e,e===Mg?b:0,e.cancelPendingCommit!==null||e.timeoutHandle!==A1),(b&3)===0||L0(e,b)||(o=!0,NH(e,b));e=e.next}}while(o);e6=!1}}function DX(){Kw=window.event,M4()}function M4(){Su=l6=o6=!1;var r=0;n0!==0&&jX()&&(r=n0);for(var g=bo(),o=null,e=Tu;e!==null;){var h=e.next,b=IH(e,g);if(b===0)e.next=null,o===null?Tu=h:o.next=h,h===null&&(Nh=o);else if(o=e,r!==0||(b&3)!==0)Su=!0;e=h}go!==i0&&go!==Zu||$b(r,!1),n0!==0&&(n0=0)}function IH(r,g){for(var{suspendedLanes:o,pingedLanes:e,expirationTimes:h}=r,b=r.pendingLanes&-62914561;0<b;){var u=31-Io(b),t=1<<u,q=h[u];if(q===-1){if((t&o)===0||(t&e)!==0)h[u]=Zn(t,g)}else q<=g&&(r.expiredLanes|=t);b&=~t}if(g=Mg,o=Vr,o=$0(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==A1),e=r.callbackNode,o===0||r===g&&(ng===u1||ng===n1)||r.cancelPendingCommit!==null)return e!==null&&W4(e),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||L0(r,o)){if(g=o&-o,g!==r.callbackPriority||C.actQueue!==null&&e!==v6)W4(e);else return g;switch(W(o)){case tl:case _l:o=rt;break;case Ke:o=lh;break;case ru:o=gt;break;default:o=lh}return e=FH.bind(null,r),C.actQueue!==null?(C.actQueue.push(e),o=v6):o=d4(o,e),r.callbackPriority=g,r.callbackNode=o,g}return e!==null&&W4(e),r.callbackPriority=2,r.callbackNode=null,2}function FH(r,g){if(Mu=Au=!1,Kw=window.event,go!==i0&&go!==Zu)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(fl===Bu&&(fl=ft),Kb()&&r.callbackNode!==o)return null;var e=Vr;if(e=$0(r,r===Mg?e:0,r.cancelPendingCommit!==null||r.timeoutHandle!==A1),e===0)return null;return tH(r,e,g),IH(r,bo()),r.callbackNode!=null&&r.callbackNode===o?FH.bind(null,r):null}function NH(r,g){if(Kb())return null;Au=Mu,Mu=!1,tH(r,g,!0)}function W4(r){r!==v6&&r!==null&&LY(r)}function BH(){C.actQueue!==null&&C.actQueue.push(function(){return M4(),null}),tQ(function(){(og&(vo|ql))!==uo?d4(s4,DX):M4()})}function R4(){if(n0===0){var r=l1;r===0&&(r=pi,pi<<=1,(pi&261888)===0&&(pi=256)),n0=r}return n0}function ZH(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return tg(r,"action"),bb(""+r)}function xH(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function VX(r,g,o,e,h){if(g==="submit"&&o&&o.stateNode===h){var b=ZH((h[Fo]||null).action),u=e.submitter;u&&(g=(g=u[Fo]||null)?ZH(g.formAction):u.getAttribute("formAction"),g!==null&&(b=g,u=null));var t=new vu("action","action",null,e,h);r.push({event:t,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(n0!==0){var q=u?xH(h,u):new FormData(h),M={pending:!0,data:q,method:h.method,action:b};Object.freeze(M),S2(o,M,null,q)}}else typeof b==="function"&&(t.preventDefault(),q=u?xH(h,u):new FormData(h),M={pending:!0,data:q,method:h.method,action:b},Object.freeze(M),S2(o,M,b,q))},currentTarget:h}]})}}function xi(r,g,o){r.currentTarget=o;try{g(r)}catch(e){At(e)}r.currentTarget=null}function CH(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var e=r[o];r:{var h=void 0,b=e.event;if(e=e.listeners,g)for(var u=e.length-1;0<=u;u--){var t=e[u],q=t.instance,M=t.currentTarget;if(t=t.listener,q!==h&&b.isPropagationStopped())break r;q!==null?wr(q,xi,b,t,M):xi(b,t,M),h=q}else for(u=0;u<e.length;u++){if(t=e[u],q=t.instance,M=t.currentTarget,t=t.listener,q!==h&&b.isPropagationStopped())break r;q!==null?wr(q,xi,b,t,M):xi(b,t,M),h=q}}}}function dr(r,g){h6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[ot];o===void 0&&(o=g[ot]=new Set);var e=r+"__bubble";o.has(e)||(TH(g,r,2,!1),o.add(e))}function G4(r,g,o){h6.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var e=0;g&&(e|=4),TH(o,r,e,g)}function X4(r){if(!r[ku]){r[ku]=!0,Bq.forEach(function(o){o!=="selectionchange"&&(h6.has(o)||G4(o,!1,r),G4(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[ku]||(g[ku]=!0,G4("selectionchange",!1,g))}}function TH(r,g,o,e){switch(Mq(g)){case tl:var h=YY;break;case _l:h=JY;break;default:h=C4}o=h.bind(null,g,o,r),h=void 0,!bt||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(h=!0),e?h!==void 0?r.addEventListener(g,o,{capture:!0,passive:h}):r.addEventListener(g,o,!0):h!==void 0?r.addEventListener(g,o,{passive:h}):r.addEventListener(g,o,!1)}function Y4(r,g,o,e,h){var b=e;if((g&1)===0&&(g&2)===0&&e!==null)r:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var t=e.stateNode.containerInfo;if(t===h)break;if(u===4)for(u=e.return;u!==null;){var q=u.tag;if((q===3||q===4)&&u.stateNode.containerInfo===h)return;u=u.return}for(;t!==null;){if(u=Mr(t),u===null)return;if(q=u.tag,q===5||q===6||q===26||q===27){e=b=u;continue r}t=t.parentNode}}e=e.return}f8(function(){var M=b,U=yn(o),$=[];r:{var Q=MA.get(r);if(Q!==void 0){var N=vu,hr=r;switch(r){case"keypress":if(y5(o)===0)break r;case"keydown":case"keyup":N=MJ;break;case"focusin":hr="focus",N=nt;break;case"focusout":hr="blur",N=nt;break;case"beforeblur":case"afterblur":N=nt;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=eA;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=hJ;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=GJ;break;case OA:case HA:case qA:N=iJ;break;case AA:N=YJ;break;case"scroll":case"scrollend":N=eJ;break;case"wheel":N=QJ;break;case"copy":case"cut":case"paste":N=nJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=hA;break;case"toggle":case"beforetoggle":N=mJ}var Pr=(g&4)!==0,Xg=!Pr&&(r==="scroll"||r==="scrollend"),sr=Pr?Q!==null?Q+"Capture":null:Q;Pr=[];for(var J=M,z;J!==null;){var K=J;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||sr===null||(K=wb(J,sr),K!=null&&Pr.push(Lb(J,K,z))),Xg)break;J=J.return}0<Pr.length&&(Q=new N(Q,hr,null,o,U),$.push({event:Q,listeners:Pr}))}}if((g&7)===0){r:{if(Q=r==="mouseover"||r==="pointerover",N=r==="mouseout"||r==="pointerout",Q&&o!==Db&&(hr=o.relatedTarget||o.fromElement)&&(Mr(hr)||hr[Ev]))break r;if(N||Q){if(Q=U.window===U?U:(Q=U.ownerDocument)?Q.defaultView||Q.parentWindow:window,N){if(hr=o.relatedTarget||o.toElement,N=M,hr=hr?Mr(hr):null,hr!==null&&(Xg=rr(hr),Pr=hr.tag,hr!==Xg||Pr!==5&&Pr!==27&&Pr!==6))hr=null}else N=null,hr=M;if(N!==hr){if(Pr=eA,K="onMouseLeave",sr="onMouseEnter",J="mouse",r==="pointerout"||r==="pointerover")Pr=hA,K="onPointerLeave",sr="onPointerEnter",J="pointer";if(Xg=N==null?Q:Nr(N),z=hr==null?Q:Nr(hr),Q=new Pr(K,J+"leave",N,o,U),Q.target=Xg,Q.relatedTarget=z,K=null,Mr(U)===M&&(Pr=new Pr(sr,J+"enter",hr,o,U),Pr.target=z,Pr.relatedTarget=Xg,K=Pr),Xg=K,N&&hr)g:{Pr=_X,sr=N,J=hr,z=0;for(K=sr;K;K=Pr(K))z++;K=0;for(var D=J;D;D=Pr(D))K++;for(;0<z-K;)sr=Pr(sr),z--;for(;0<K-z;)J=Pr(J),K--;for(;z--;){if(sr===J||J!==null&&sr===J.alternate){Pr=sr;break g}sr=Pr(sr),J=Pr(J)}Pr=null}else Pr=null;N!==null&&SH($,Q,N,Pr,!1),hr!==null&&Xg!==null&&SH($,Xg,hr,Pr,!0)}}}r:{if(Q=M?Nr(M):window,N=Q.nodeName&&Q.nodeName.toLowerCase(),N==="select"||N==="input"&&Q.type==="file")var ur=lP;else if(gP(Q))if(tA)ur=oX;else{ur=rX;var $r=sG}else N=Q.nodeName,!N||N.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?M&&hb(M.elementType)&&(ur=lP):ur=gX;if(ur&&(ur=ur(r,M))){oP($,ur,o,U);break r}$r&&$r(r,Q,M),r==="focusout"&&M&&Q.type==="number"&&M.memoizedProps.value!=null&&Tn(Q,"number",Q.value)}switch($r=M?Nr(M):window,r){case"focusin":if(gP($r)||$r.contentEditable==="true")nh=$r,Pt=M,jb=null;break;case"focusout":jb=Pt=nh=null;break;case"mousedown":Ot=!0;break;case"contextmenu":case"mouseup":case"dragend":Ot=!1,uP($,o,U);break;case"selectionchange":if(LJ)break;case"keydown":case"keyup":uP($,o,U)}var Yr;if(tt)r:{switch(r){case"compositionstart":var Rr="onCompositionStart";break r;case"compositionend":Rr="onCompositionEnd";break r;case"compositionupdate":Rr="onCompositionUpdate";break r}Rr=void 0}else uh?s8(r,o)&&(Rr="onCompositionEnd"):r==="keydown"&&o.keyCode===bA&&(Rr="onCompositionStart");if(Rr&&(wA&&o.locale!=="ko"&&(uh||Rr!=="onCompositionStart"?Rr==="onCompositionEnd"&&uh&&(Yr=p8()):(cv=U,wt=("value"in cv)?cv.value:cv.textContent,uh=!0)),$r=Ci(M,Rr),0<$r.length&&(Rr=new vA(Rr,r,null,o,U),$.push({event:Rr,listeners:$r}),Yr?Rr.data=Yr:(Yr=rP(o),Yr!==null&&(Rr.data=Yr)))),Yr=UJ?jG(r,o):fG(r,o))Rr=Ci(M,"onBeforeInput"),0<Rr.length&&($r=new PJ("onBeforeInput","beforeinput",null,o,U),$.push({event:$r,listeners:Rr}),$r.data=Yr);VX($,r,M,o,U)}CH($,g)})}function Lb(r,g,o){return{instance:r,listener:g,currentTarget:o}}function Ci(r,g){for(var o=g+"Capture",e=[];r!==null;){var h=r,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=wb(r,o),h!=null&&e.unshift(Lb(r,h,b)),h=wb(r,g),h!=null&&e.push(Lb(r,h,b))),r.tag===3)return e;r=r.return}return[]}function _X(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function SH(r,g,o,e,h){for(var b=g._reactName,u=[];o!==null&&o!==e;){var t=o,q=t.alternate,M=t.stateNode;if(t=t.tag,q!==null&&q===e)break;t!==5&&t!==26&&t!==27||M===null||(q=M,h?(M=wb(o,b),M!=null&&u.unshift(Lb(o,M,q))):h||(M=wb(o,b),M!=null&&u.push(Lb(o,M,q)))),o=o.return}u.length!==0&&r.push({event:g,listeners:u})}function J4(r,g){yG(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||oA||(oA=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:p0,possibleRegistrationNames:lt};hb(r)||typeof g.is==="string"||cG(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,e){g!==o&&(o=kv(o),kv(g)!==o&&(e[r]=g))}function yX(r,g,o){g.forEach(function(e){o[VH(e)]=e==="style"?z4(r):r.getAttribute(e)})}function Xe(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function kH(r,g){return r=r.namespaceURI===ou||r.namespaceURI===hh?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function kv(r){return rl(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yo(r)),ag(r)),(typeof r==="string"?r:""+r).replace(lQ,`
`).replace(eQ,"")}function DH(r,g){return g=kv(g),kv(r)===g?!0:!1}function qg(r,g,o,e,h,b){switch(o){case"children":if(typeof e==="string")_5(e,g,!1),g==="body"||g==="textarea"&&e===""||vb(r,e);else if(typeof e==="number"||typeof e==="bigint")_5(""+e,g,!1),g!=="body"&&vb(r,""+e);break;case"className":k5(r,"class",e);break;case"tabIndex":k5(r,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":k5(r,o,e);break;case"style":c8(r,e,b);break;case"data":if(g!=="object"){k5(r,"data",e);break}case"src":case"href":if(e===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(e==null||typeof e==="function"||typeof e==="symbol"||typeof e==="boolean"){r.removeAttribute(o);break}tg(e,o),e=bb(""+e),r.setAttribute(o,e);break;case"action":case"formAction":if(e!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof e==="function"&&(h.encType==null&&h.method==null||_u||(_u=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),h.target==null||Vu||(Vu=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||h.type==="submit"||h.type==="image"||Du?g!=="button"||h.type==null||h.type==="submit"||Du?typeof e==="function"&&(h.name==null||kM||(kM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),h.formEncType==null&&h.formMethod==null||_u||(_u=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),h.formTarget==null||Vu||(Vu=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Du=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Du=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof e==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(o==="formAction"?(g!=="input"&&qg(r,g,"name",h.name,h,null),qg(r,g,"formEncType",h.formEncType,h,null),qg(r,g,"formMethod",h.formMethod,h,null),qg(r,g,"formTarget",h.formTarget,h,null)):(qg(r,g,"encType",h.encType,h,null),qg(r,g,"method",h.method,h,null),qg(r,g,"target",h.target,h,null)));if(e==null||typeof e==="symbol"||typeof e==="boolean"){r.removeAttribute(o);break}tg(e,o),e=bb(""+e),r.setAttribute(o,e);break;case"onClick":e!=null&&(typeof e!=="function"&&Xe(o,e),r.onclick=ye);break;case"onScroll":e!=null&&(typeof e!=="function"&&Xe(o,e),dr("scroll",r));break;case"onScrollEnd":e!=null&&(typeof e!=="function"&&Xe(o,e),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!=="object"||!("__html"in e))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=e.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=e&&typeof e!=="function"&&typeof e!=="symbol";break;case"muted":r.muted=e&&typeof e!=="function"&&typeof e!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e==="function"||typeof e==="boolean"||typeof e==="symbol"){r.removeAttribute("xlink:href");break}tg(e,o),o=bb(""+e),r.setAttributeNS(O1,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!=="function"&&typeof e!=="symbol"?(tg(e,o),r.setAttribute(o,""+e)):r.removeAttribute(o);break;case"inert":e!==""||yu[o]||(yu[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!=="function"&&typeof e!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":e===!0?r.setAttribute(o,""):e!==!1&&e!=null&&typeof e!=="function"&&typeof e!=="symbol"?(tg(e,o),r.setAttribute(o,e)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!=="function"&&typeof e!=="symbol"&&!isNaN(e)&&1<=e?(tg(e,o),r.setAttribute(o,e)):r.removeAttribute(o);break;case"rowSpan":case"start":e==null||typeof e==="function"||typeof e==="symbol"||isNaN(e)?r.removeAttribute(o):(tg(e,o),r.setAttribute(o,e));break;case"popover":dr("beforetoggle",r),dr("toggle",r),S5(r,"popover",e);break;case"xlinkActuate":_e(r,O1,"xlink:actuate",e);break;case"xlinkArcrole":_e(r,O1,"xlink:arcrole",e);break;case"xlinkRole":_e(r,O1,"xlink:role",e);break;case"xlinkShow":_e(r,O1,"xlink:show",e);break;case"xlinkTitle":_e(r,O1,"xlink:title",e);break;case"xlinkType":_e(r,O1,"xlink:type",e);break;case"xmlBase":_e(r,b6,"xml:base",e);break;case"xmlLang":_e(r,b6,"xml:lang",e);break;case"xmlSpace":_e(r,b6,"xml:space",e);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),S5(r,"is",e);break;case"innerText":case"textContent":break;case"popoverTarget":DM||e==null||typeof e!=="object"||(DM=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",e));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=a8(o),S5(r,o,e)):p0.hasOwnProperty(o)&&e!=null&&typeof e!=="function"&&Xe(o,e)}}function Q4(r,g,o,e,h,b){switch(o){case"style":c8(r,e,b);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!=="object"||!("__html"in e))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=e.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof e==="string"?vb(r,e):(typeof e==="number"||typeof e==="bigint")&&vb(r,""+e);break;case"onScroll":e!=null&&(typeof e!=="function"&&Xe(o,e),dr("scroll",r));break;case"onScrollEnd":e!=null&&(typeof e!=="function"&&Xe(o,e),dr("scrollend",r));break;case"onClick":e!=null&&(typeof e!=="function"&&Xe(o,e),r.onclick=ye);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p0.hasOwnProperty(o))e!=null&&typeof e!=="function"&&Xe(o,e);else r:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),g=o.slice(2,h?o.length-7:void 0),b=r[Fo]||null,b=b!=null?b[o]:null,typeof b==="function"&&r.removeEventListener(g,b,h),typeof e==="function")){typeof b!=="function"&&b!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,e,h);break r}o in r?r[o]=e:e===!0?r.setAttribute(o,""):S5(r,o,e)}}}function qo(r,g,o){switch(J4(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var e=!1,h=!1,b;for(b in o)if(o.hasOwnProperty(b)){var u=o[b];if(u!=null)switch(b){case"src":e=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:qg(r,g,b,u,o,null)}}h&&qg(r,g,"srcSet",o.srcSet,o,null),e&&qg(r,g,"src",o.src,o,null);return;case"input":$v("input",o),dr("invalid",r);var t=b=u=h=null,q=null,M=null;for(e in o)if(o.hasOwnProperty(e)){var U=o[e];if(U!=null)switch(e){case"name":h=U;break;case"type":u=U;break;case"checked":q=U;break;case"defaultChecked":M=U;break;case"value":b=U;break;case"defaultValue":t=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:qg(r,g,e,U,o,null)}}L8(r,o),I8(r,b,t,q,M,u,h,!1);return;case"select":$v("select",o),dr("invalid",r),e=u=b=null;for(h in o)if(o.hasOwnProperty(h)&&(t=o[h],t!=null))switch(h){case"value":b=t;break;case"defaultValue":u=t;break;case"multiple":e=t;default:qg(r,g,h,t,o,null)}B8(r,o),g=b,o=u,r.multiple=!!e,g!=null?x1(r,!!e,g,!1):o!=null&&x1(r,!!e,o,!0);return;case"textarea":$v("textarea",o),dr("invalid",r),b=h=e=null;for(u in o)if(o.hasOwnProperty(u)&&(t=o[u],t!=null))switch(u){case"value":e=t;break;case"defaultValue":h=t;break;case"children":b=t;break;case"dangerouslySetInnerHTML":if(t!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:qg(r,g,u,t,o,null)}Z8(r,o),C8(r,e,h,b);return;case"option":F8(r,o);for(q in o)if(o.hasOwnProperty(q)&&(e=o[q],e!=null))switch(q){case"selected":r.selected=e&&typeof e!=="function"&&typeof e!=="symbol";break;default:qg(r,g,q,e,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(e=0;e<Qw.length;e++)dr(Qw[e],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in o)if(o.hasOwnProperty(M)&&(e=o[M],e!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:qg(r,g,M,e,o,null)}return;default:if(hb(g)){for(U in o)o.hasOwnProperty(U)&&(e=o[U],e!==void 0&&Q4(r,g,U,e,o,void 0));return}}for(t in o)o.hasOwnProperty(t)&&(e=o[t],e!=null&&qg(r,g,t,e,o,null))}function EX(r,g,o,e){switch(J4(g,e),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,u=null,t=null,q=null,M=null,U=null;for(N in o){var $=o[N];if(o.hasOwnProperty(N)&&$!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":q=$;default:e.hasOwnProperty(N)||qg(r,g,N,null,e,$)}}for(var Q in e){var N=e[Q];if($=o[Q],e.hasOwnProperty(Q)&&(N!=null||$!=null))switch(Q){case"type":b=N;break;case"name":h=N;break;case"checked":M=N;break;case"defaultChecked":U=N;break;case"value":u=N;break;case"defaultValue":t=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:N!==$&&qg(r,g,Q,N,e,$)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,e=e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null,g||!e||SM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),SM=!0),!g||e||TM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),TM=!0),Cn(r,u,t,q,M,U,b,h);return;case"select":N=u=t=Q=null;for(b in o)if(q=o[b],o.hasOwnProperty(b)&&q!=null)switch(b){case"value":break;case"multiple":N=q;default:e.hasOwnProperty(b)||qg(r,g,b,null,e,q)}for(h in e)if(b=e[h],q=o[h],e.hasOwnProperty(h)&&(b!=null||q!=null))switch(h){case"value":Q=b;break;case"defaultValue":t=b;break;case"multiple":u=b;default:b!==q&&qg(r,g,h,b,e,q)}e=t,g=u,o=N,Q!=null?x1(r,!!g,Q,!1):!!o!==!!g&&(e!=null?x1(r,!!g,e,!0):x1(r,!!g,g?[]:"",!1));return;case"textarea":N=Q=null;for(t in o)if(h=o[t],o.hasOwnProperty(t)&&h!=null&&!e.hasOwnProperty(t))switch(t){case"value":break;case"children":break;default:qg(r,g,t,null,e,h)}for(u in e)if(h=e[u],b=o[u],e.hasOwnProperty(u)&&(h!=null||b!=null))switch(u){case"value":Q=h;break;case"defaultValue":N=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:h!==b&&qg(r,g,u,h,e,b)}x8(r,Q,N);return;case"option":for(var hr in o)if(Q=o[hr],o.hasOwnProperty(hr)&&Q!=null&&!e.hasOwnProperty(hr))switch(hr){case"selected":r.selected=!1;break;default:qg(r,g,hr,null,e,Q)}for(q in e)if(Q=e[q],N=o[q],e.hasOwnProperty(q)&&Q!==N&&(Q!=null||N!=null))switch(q){case"selected":r.selected=Q&&typeof Q!=="function"&&typeof Q!=="symbol";break;default:qg(r,g,q,Q,e,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pr in o)Q=o[Pr],o.hasOwnProperty(Pr)&&Q!=null&&!e.hasOwnProperty(Pr)&&qg(r,g,Pr,null,e,Q);for(M in e)if(Q=e[M],N=o[M],e.hasOwnProperty(M)&&Q!==N&&(Q!=null||N!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:qg(r,g,M,Q,e,N)}return;default:if(hb(g)){for(var Xg in o)Q=o[Xg],o.hasOwnProperty(Xg)&&Q!==void 0&&!e.hasOwnProperty(Xg)&&Q4(r,g,Xg,void 0,e,Q);for(U in e)Q=e[U],N=o[U],!e.hasOwnProperty(U)||Q===N||Q===void 0&&N===void 0||Q4(r,g,U,Q,e,N);return}}for(var sr in o)Q=o[sr],o.hasOwnProperty(sr)&&Q!=null&&!e.hasOwnProperty(sr)&&qg(r,g,sr,null,e,Q);for($ in e)Q=e[$],N=o[$],!e.hasOwnProperty($)||Q===N||Q==null&&N==null||qg(r,g,$,Q,e,N)}function VH(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function z4(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var e=r[o];g[e]=r.getPropertyValue(e)}return g}function _H(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var e,h=e="",b;for(b in g)if(g.hasOwnProperty(b)){var u=g[b];u!=null&&typeof u!=="boolean"&&u!==""&&(b.indexOf("--")===0?(rb(u,b),e+=h+b+":"+(""+u).trim()):typeof u!=="number"||u===0||rA.has(b)?(rb(u,b),e+=h+b.replace(jq,"-$1").toLowerCase().replace(fq,"-ms-")+":"+(""+u).trim()):e+=h+b.replace(jq,"-$1").toLowerCase().replace(fq,"-ms-")+":"+u+"px",h=";")}e=e||null,g=r.getAttribute("style"),g!==e&&(e=kv(e),kv(g)!==e&&(o.style=z4(r)))}}function Ql(r,g,o,e,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":return}else if(e!=null)switch(typeof e){case"function":case"symbol":case"boolean":break;default:if(tg(e,g),r===""+e)return}ho(g,r,e,b)}function yH(r,g,o,e,h,b){if(h.delete(o),r=r.getAttribute(o),r===null){switch(typeof e){case"function":case"symbol":return}if(!e)return}else switch(typeof e){case"function":case"symbol":break;default:if(e)return}ho(g,r,e,b)}function m4(r,g,o,e,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof e){case"undefined":case"function":case"symbol":return}else if(e!=null)switch(typeof e){case"function":case"symbol":break;default:if(tg(e,o),r===""+e)return}ho(g,r,e,b)}function EH(r,g,o,e,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(e))return}else if(e!=null)switch(typeof e){case"function":case"symbol":case"boolean":break;default:if(!isNaN(e)&&(tg(e,g),r===""+e))return}ho(g,r,e,b)}function K4(r,g,o,e,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":return}else if(e!=null)switch(typeof e){case"function":case"symbol":case"boolean":break;default:if(tg(e,g),o=bb(""+e),r===o)return}ho(g,r,e,b)}function cH(r,g,o,e){for(var h={},b=new Set,u=r.attributes,t=0;t<u.length;t++)switch(u[t].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(u[t].name)}if(hb(g)){for(var q in o)if(o.hasOwnProperty(q)){var M=o[q];if(M!=null){if(p0.hasOwnProperty(q))typeof M!=="function"&&Xe(q,M);else if(o.suppressHydrationWarning!==!0)switch(q){case"children":typeof M!=="string"&&typeof M!=="number"||ho("children",r.textContent,M,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":u=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=kH(r,M),ho(q,u,M,h));continue;case"style":b.delete(q),_H(r,M,h);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(q.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",q);continue;case"className":b.delete("class"),u=K8(r,"class",M),ho("className",u,M,h);continue;default:e.context===Pv&&g!=="svg"&&g!=="math"?b.delete(q.toLowerCase()):b.delete(q),u=K8(r,q,M),ho(q,u,M,h)}}}}else for(M in o)if(o.hasOwnProperty(M)&&(q=o[M],q!=null)){if(p0.hasOwnProperty(M))typeof q!=="function"&&Xe(M,q);else if(o.suppressHydrationWarning!==!0)switch(M){case"children":typeof q!=="string"&&typeof q!=="number"||ho("children",r.textContent,q,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":u=r.innerHTML,q=q?q.__html:void 0,q!=null&&(q=kH(r,q),u!==q&&(h[M]={__html:u}));continue;case"className":Ql(r,M,"class",q,b,h);continue;case"tabIndex":Ql(r,M,"tabindex",q,b,h);continue;case"style":b.delete(M),_H(r,q,h);continue;case"multiple":b.delete(M),ho(M,r.multiple,q,h);continue;case"muted":b.delete(M),ho(M,r.muted,q,h);continue;case"autoFocus":b.delete("autofocus"),ho(M,r.autofocus,q,h);continue;case"data":if(g!=="object"){b.delete(M),u=r.getAttribute("data"),ho(M,u,q,h);continue}case"src":case"href":if(!(q!==""||g==="a"&&M==="href"||g==="object"&&M==="data")){M==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',M,M);continue}K4(r,M,M,q,b,h);continue;case"action":case"formAction":if(u=r.getAttribute(M),typeof q==="function"){b.delete(M.toLowerCase()),M==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(u===vQ){b.delete(M.toLowerCase()),ho(M,"function",q,h);continue}K4(r,M,M.toLowerCase(),q,b,h);continue;case"xlinkHref":K4(r,M,"xlink:href",q,b,h);continue;case"contentEditable":m4(r,M,"contenteditable",q,b,h);continue;case"spellCheck":m4(r,M,"spellcheck",q,b,h);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":m4(r,M,M,q,b,h);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":yH(r,M,M.toLowerCase(),q,b,h);continue;case"capture":case"download":r:{t=r;var U=u=M,$=h;if(b.delete(U),t=t.getAttribute(U),t===null)switch(typeof q){case"undefined":case"function":case"symbol":break r;default:if(q===!1)break r}else if(q!=null)switch(typeof q){case"function":case"symbol":break;case"boolean":if(q===!0&&t==="")break r;break;default:if(tg(q,u),t===""+q)break r}ho(u,t,q,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(t=r,U=u=M,$=h,b.delete(U),t=t.getAttribute(U),t===null)switch(typeof q){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(q)||1>q)break r}else if(q!=null)switch(typeof q){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(q)||1>q)&&(tg(q,u),t===""+q))break r}ho(u,t,q,$)}continue;case"rowSpan":EH(r,M,"rowspan",q,b,h);continue;case"start":EH(r,M,M,q,b,h);continue;case"xHeight":Ql(r,M,"x-height",q,b,h);continue;case"xlinkActuate":Ql(r,M,"xlink:actuate",q,b,h);continue;case"xlinkArcrole":Ql(r,M,"xlink:arcrole",q,b,h);continue;case"xlinkRole":Ql(r,M,"xlink:role",q,b,h);continue;case"xlinkShow":Ql(r,M,"xlink:show",q,b,h);continue;case"xlinkTitle":Ql(r,M,"xlink:title",q,b,h);continue;case"xlinkType":Ql(r,M,"xlink:type",q,b,h);continue;case"xmlBase":Ql(r,M,"xml:base",q,b,h);continue;case"xmlLang":Ql(r,M,"xml:lang",q,b,h);continue;case"xmlSpace":Ql(r,M,"xml:space",q,b,h);continue;case"inert":q!==""||yu[M]||(yu[M]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",M)),yH(r,M,M,q,b,h);continue;default:if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){t=a8(M),u=!1,e.context===Pv&&g!=="svg"&&g!=="math"?b.delete(t.toLowerCase()):(U=M.toLowerCase(),U=lu.hasOwnProperty(U)?lu[U]||null:null,U!==null&&U!==M&&(u=!0,b.delete(U)),b.delete(t));r:if(U=r,$=t,t=q,ob($))if(U.hasAttribute($))U=U.getAttribute($),tg(t,$),t=U===""+t?t:U;else{switch(typeof t){case"function":case"symbol":break r;case"boolean":if(U=$.toLowerCase().slice(0,5),U!=="data-"&&U!=="aria-")break r}t=t===void 0?void 0:null}else t=void 0;u||ho(M,t,q,h)}}}return 0<b.size&&o.suppressHydrationWarning!==!0&&yX(r,b,h),Object.keys(h).length===0?null:h}function cX(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function aH(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aX(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),e=0;e<o.length;e++){var h=o[e],b=h.transferSize,u=h.initiatorType,t=h.duration;if(b&&t&&aH(u)){u=0,t=h.responseEnd;for(e+=1;e<o.length;e++){var q=o[e],M=q.startTime;if(M>t)break;var{transferSize:U,initiatorType:$}=q;U&&aH($)&&(q=q.responseEnd,u+=U*(q<t?1:(t-M)/(q-M)))}if(--e,g+=8*(b+u)/(h.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Ti(r){return r.nodeType===9?r:r.ownerDocument}function jH(r){switch(r){case hh:return Zh;case ou:return cu;default:return Pv}}function fH(r,g){if(r===Pv)switch(g){case"svg":return Zh;case"math":return cu;default:return Pv}return r===Zh&&g==="foreignObject"?Pv:r}function U4(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function jX(){var r=window.event;if(r&&r.type==="popstate"){if(r===n6)return!1;return n6=r,!0}return n6=null,!1}function Ib(){var r=window.event;return r&&r!==Kw?r.type:null}function Fb(){var r=window.event;return r&&r!==Kw?r.timeStamp:-1.1}function fX(r){setTimeout(function(){throw r})}function pX(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function dX(){}function sX(r,g,o,e){EX(r,g,o,e),r[Fo]=e}function pH(r){vb(r,"")}function rY(r,g,o){r.nodeValue=o}function dH(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Fo]||null;if(g!==null){var o=Fr(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Dv(r){return r==="head"}function gY(r,g){r.removeChild(g)}function oY(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function sH(r,g){var o=g,e=0;do{var h=o.nextSibling;if(r.removeChild(o),h&&h.nodeType===8)if(o=h.data,o===mw||o===Eu){if(e===0){r.removeChild(h),rh(g);return}e--}else if(o===zw||o===t0||o===q1||o===Bh||o===H1)e++;else if(o===bQ)Nb(r.ownerDocument.documentElement);else if(o===iQ){o=r.ownerDocument.head,Nb(o);for(var b=o.firstChild;b;){var{nextSibling:u,nodeName:t}=b;b[kb]||t==="SCRIPT"||t==="STYLE"||t==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=u}}else o===wQ&&Nb(r.ownerDocument.body);o=h}while(o);rh(g)}function rq(r,g){var o=r;r=0;do{var e=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),e&&e.nodeType===8)if(o=e.data,o===mw)if(r===0)break;else r--;else o!==zw&&o!==t0&&o!==q1&&o!==Bh||r++;o=e}while(o)}function lY(r){rq(r,!0)}function eY(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function vY(r){r.nodeValue=""}function hY(r){rq(r,!1)}function bY(r,g){g=g[uQ],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function wY(r,g){r.nodeValue=g}function $4(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":$4(o),ir(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function iY(r,g,o,e){for(;r.nodeType===1;){var h=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!e&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!e)if(g==="input"&&r.type==="hidden"){tg(h.name,"name");var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;else if(!r[kb])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(b!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=il(r.nextSibling),r===null)break}return null}function uY(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=il(r.nextSibling),r===null)return null}return r}function gq(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=il(r.nextSibling),r===null)return null}return r}function L4(r){return r.data===t0||r.data===q1}function I4(r){return r.data===Bh||r.data===t0&&r.ownerDocument.readyState!==_M}function nY(r,g){var o=r.ownerDocument;if(r.data===q1)r._reactRetry=g;else if(r.data!==t0||o.readyState!==_M)g();else{var e=function(){g(),o.removeEventListener("DOMContentLoaded",e)};o.addEventListener("DOMContentLoaded",e),r._reactRetry=e}}function il(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===zw||g===Bh||g===t0||g===q1||g===H1||g===w6||g===VM)break;if(g===mw||g===Eu)return null}}return r}function oq(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},e=r.attributes,h=0;h<e.length;h++){var b=e[h];o[VH(b.name)]=b.name.toLowerCase()==="style"?z4(r):b.value}return{type:g,props:o}}return r.nodeType===8?r.data===H1?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function lq(r,g,o){return o===null||o[hQ]!==!0?(r.nodeValue===g?r=null:(g=kv(g),r=kv(r.nodeValue)===g?null:r.nodeValue),r):null}function F4(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===mw||o===Eu){if(g===0)return il(r.nextSibling);g--}else o!==zw&&o!==Bh&&o!==t0&&o!==q1&&o!==H1||g++}r=r.nextSibling}return null}function eq(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===zw||o===Bh||o===t0||o===q1||o===H1){if(g===0)return r;g--}else o!==mw&&o!==Eu||g++}r=r.previousSibling}return null}function tY(r){rh(r)}function PY(r){rh(r)}function OY(r){rh(r)}function vq(r,g,o,e,h){switch(h&&_n(r,e.ancestorInfo),g=Ti(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function HY(r,g,o,e){if(!o[Ev]&&Fr(o)){var h=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",h,h,h)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(h=o.attributes;h.length;)o.removeAttributeNode(h[0]);qo(o,r,g),o[Ao]=e,o[Fo]=g}function Nb(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);ir(r)}function Si(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function hq(r,g,o){var e=xh;if(e&&typeof g==="string"&&g){var h=Jl(g);h='link[rel="'+r+'"][href="'+h+'"]',typeof o==="string"&&(h+='[crossorigin="'+o+'"]'),fM.has(h)||(fM.add(h),r={rel:r,crossOrigin:o,href:g},e.querySelector(h)===null&&(g=e.createElement("link"),qo(g,"link",r),Jr(g),e.head.appendChild(g)))}}function bq(r,g,o,e){var h=(h=_v.current)?Si(h):null;if(!h)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=d1(o.href),g=lg(h).hoistableStyles,e=g.get(o),e||(e={type:"style",instance:null,count:0,state:null},g.set(o,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=d1(o.href);var b=lg(h).hoistableStyles,u=b.get(r);if(!u&&(h=h.ownerDocument||h,u={type:"stylesheet",instance:null,count:0,state:{loading:M1,preload:null}},b.set(r,u),(b=h.querySelector(Bb(r)))&&!b._p&&(u.instance=b,u.state.loading=Uw|Zl),!xl.has(r))){var t={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};xl.set(r,t),b||qY(h,r,t,u.state)}if(g&&e===null)throw o=`

  - `+ki(g)+`
  + `+ki(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return u}if(g&&e!==null)throw o=`

  - `+ki(g)+`
  + `+ki(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=s1(o),g=lg(h).hoistableScripts,e=g.get(o),e||(e={type:"script",instance:null,count:0,state:null},g.set(o,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function ki(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Vl.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Vl.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Vl.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function d1(r){return'href="'+Jl(r)+'"'}function Bb(r){return'link[rel="stylesheet"]['+r+"]"}function wq(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function qY(r,g,o,e){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?e.loading=Uw:(g=r.createElement("link"),e.preload=g,g.addEventListener("load",function(){return e.loading|=Uw}),g.addEventListener("error",function(){return e.loading|=aM}),qo(g,"link",o),Jr(g),r.head.appendChild(g))}function s1(r){return'[src="'+Jl(r)+'"]'}function Zb(r){return"script[async]"+r}function iq(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var e=r.querySelector('style[data-href~="'+Jl(o.href)+'"]');if(e)return g.instance=e,Jr(e),e;var h=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return e=(r.ownerDocument||r).createElement("style"),Jr(e),qo(e,"style",h),Di(e,o.precedence,r),g.instance=e;case"stylesheet":h=d1(o.href);var b=r.querySelector(Bb(h));if(b)return g.state.loading|=Zl,g.instance=b,Jr(b),b;e=wq(o),(h=xl.get(h))&&N4(e,h),b=(r.ownerDocument||r).createElement("link"),Jr(b);var u=b;return u._p=new Promise(function(t,q){u.onload=t,u.onerror=q}),qo(b,"link",e),g.state.loading|=Zl,Di(b,o.precedence,r),g.instance=b;case"script":if(b=s1(o.src),h=r.querySelector(Zb(b)))return g.instance=h,Jr(h),h;if(e=o,h=xl.get(b))e=cr({},o),B4(e,h);return r=r.ownerDocument||r,h=r.createElement("script"),Jr(h),qo(h,"link",e),r.head.appendChild(h),g.instance=h;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Zl)===M1&&(e=g.instance,g.state.loading|=Zl,Di(e,o.precedence,r));return g.instance}function Di(r,g,o){for(var e=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=e.length?e[e.length-1]:null,b=h,u=0;u<e.length;u++){var t=e[u];if(t.dataset.precedence===g)b=t;else if(b!==h)break}b?b.parentNode.insertBefore(r,b.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function N4(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function B4(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function uq(r,g,o){if(au===null){var e=new Map,h=au=new Map;h.set(o,e)}else h=au,e=h.get(o),e||(e=new Map,h.set(o,e));if(e.has(r))return e;e.set(r,null),o=o.getElementsByTagName(r);for(h=0;h<o.length;h++){var b=o[h];if(!(b[kb]||b[Ao]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==hh){var u=b.getAttribute(g)||"";u=r+u;var t=e.get(u);t?t.push(b):e.set(u,[b])}}return e}function nq(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function AY(r,g,o){var e=!o.ancestorInfo.containerTagInScope;if(o.context===Zh||g.itemProp!=null)return!e||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){e&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:h,disabled:b}=g;o=[],g.onLoad&&o.push("`onLoad`"),h&&o.push("`onError`"),b!=null&&o.push("`disabled`"),h=cX(o,"and"),h+=o.length===1?" prop":" props",b=o.length===1?"an "+h:"the "+h,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,b,h)}e&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&e&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){e&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":e&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function tq(r){return r.type==="stylesheet"&&(r.state.loading&jM)===M1?!1:!0}function MY(r,g,o,e){if(o.type==="stylesheet"&&(typeof e.media!=="string"||matchMedia(e.media).matches!==!1)&&(o.state.loading&Zl)===M1){if(o.instance===null){var h=d1(e.href),b=g.querySelector(Bb(h));if(b){g=b._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=Vi.bind(r),g.then(r,r)),o.state.loading|=Zl,o.instance=b,Jr(b);return}b=g.ownerDocument||g,e=wq(e),(h=xl.get(h))&&N4(e,h),b=b.createElement("link"),Jr(b);var u=b;u._p=new Promise(function(t,q){u.onload=t,u.onerror=q}),qo(b,"link",e),o.instance=b}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&jM)===M1&&(r.count++,o=Vi.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function WY(r,g){return r.stylesheets&&r.count===0&&_i(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var e=setTimeout(function(){if(r.stylesheets&&_i(r,r.stylesheets),r.unsuspend){var b=r.unsuspend;r.unsuspend=null,b()}},PQ+g);0<r.imgBytes&&P6===0&&(P6=125*aX()*HQ);var h=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&_i(r,r.stylesheets),r.unsuspend)){var b=r.unsuspend;r.unsuspend=null,b()}},(r.imgBytes>P6?50:OQ)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(e),clearTimeout(h)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_i(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function _i(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,ju=new Map,g.forEach(RY,r),ju=null,Vi.call(r))}function RY(r,g){if(!(g.state.loading&Zl)){var o=ju.get(r);if(o)var e=o.get(O6);else{o=new Map,ju.set(r,o);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var u=h[b];if(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")o.set(u.dataset.precedence,u),e=u}e&&o.set(O6,e)}h=g.instance,u=h.getAttribute("data-precedence"),b=o.get(u)||e,b===e&&o.set(O6,h),o.set(u,h),this.count++,e=Vi.bind(this),h.addEventListener("load",e),h.addEventListener("error",e),b?b.parentNode.insertBefore(h,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),g.state.loading|=Zl}}function GY(r,g,o,e,h,b,u,t,q){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=A1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Z1(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Z1(0),this.hiddenUpdates=Z1(null),this.identifierPrefix=e,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function Pq(r,g,o,e,h,b,u,t,q,M,U,$){return r=new GY(r,g,o,u,q,M,U,$,t),g=SJ,b===!0&&(g|=mo|yl),g|=kr,b=Y(3,null,null,g),r.current=b,b.stateNode=r,g=i2(),_0(g),r.pooledCache=g,_0(g),b.memoizedState={element:e,isDehydrated:o,cache:g},O2(b),r}function Oq(r){if(!r)return fv;return r=fv,r}function Z4(r,g,o,e,h,b){if(zo&&typeof zo.onScheduleFiberRoot==="function")try{zo.onScheduleFiberRoot(eh,e,o)}catch(u){ze||(ze=!0,console.error("React instrumentation encountered an error: %o",u))}h=Oq(h),e.context===null?e.context=h:e.pendingContext=h,Qe&&nl!==null&&!rW&&(rW=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,x(nl)||"Unknown")),e=Bv(g),e.payload={element:o},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),e.callback=b),o=Zv(r,e,g),o!==null&&(ue(g,"root.render()",null),Bg(o,r,g),qb(o,r,g))}function Hq(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function x4(r,g){Hq(r,g),(r=r.alternate)&&Hq(r,g)}function qq(r){if(r.tag===13||r.tag===31){var g=Qo(r,67108864);g!==null&&Bg(g,r,67108864),x4(r,67108864)}}function Aq(r){if(r.tag===13||r.tag===31){var g=wl(r);g=B0(g);var o=Qo(r,g);o!==null&&Bg(o,r,g),x4(r,g)}}function XY(){return nl}function YY(r,g,o,e){var h=C.T;C.T=null;var b=wg.p;try{wg.p=tl,C4(r,g,o,e)}finally{wg.p=b,C.T=h}}function JY(r,g,o,e){var h=C.T;C.T=null;var b=wg.p;try{wg.p=_l,C4(r,g,o,e)}finally{wg.p=b,C.T=h}}function C4(r,g,o,e){if(pu){var h=T4(e);if(h===null)Y4(r,g,e,du,o),Wq(r,e);else if(QY(h,r,g,o,e))e.stopPropagation();else if(Wq(r,e),g&4&&-1<AQ.indexOf(r)){for(;h!==null;){var b=Fr(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var u=he(b.pendingLanes);if(u!==0){var t=b;t.pendingLanes|=2;for(t.entangledLanes|=2;u;){var q=1<<31-Io(u);t.entanglements[1]|=q,u&=~q}Ge(b),(og&(vo|ql))===uo&&(Nu=bo()+KM,$b(0,!1))}}break;case 31:case 13:t=Qo(b,2),t!==null&&Bg(t,b,2),j1(),x4(b,2)}if(b=T4(e),b===null&&Y4(r,g,e,du,o),b===h)break;h=b}h!==null&&e.stopPropagation()}else Y4(r,g,e,null,o)}}function T4(r){return r=yn(r),S4(r)}function S4(r){if(du=null,r=Mr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=nr(g),r!==null)return r;r=null}else if(o===31){if(r=er(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return du=r,null}function Mq(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return tl;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _l;case"message":switch(NY()){case s4:return tl;case rt:return _l;case lh:case BY:return Ke;case gt:return ru;default:return Ke}default:return Ke}}function Wq(r,g){switch(r){case"focusin":case"focusout":P0=null;break;case"dragenter":case"dragleave":O0=null;break;case"mouseover":case"mouseout":H0=null;break;case"pointerover":case"pointerout":Lw.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Iw.delete(g.pointerId)}}function xb(r,g,o,e,h,b){if(r===null||r.nativeEvent!==b)return r={blockedOn:g,domEventName:o,eventSystemFlags:e,nativeEvent:b,targetContainers:[h]},g!==null&&(g=Fr(g),g!==null&&qq(g)),r;return r.eventSystemFlags|=e,g=r.targetContainers,h!==null&&g.indexOf(h)===-1&&g.push(h),r}function QY(r,g,o,e,h){switch(g){case"focusin":return P0=xb(P0,r,g,o,e,h),!0;case"dragenter":return O0=xb(O0,r,g,o,e,h),!0;case"mouseover":return H0=xb(H0,r,g,o,e,h),!0;case"pointerover":var b=h.pointerId;return Lw.set(b,xb(Lw.get(b)||null,r,g,o,e,h)),!0;case"gotpointercapture":return b=h.pointerId,Iw.set(b,xb(Iw.get(b)||null,r,g,o,e,h)),!0}return!1}function Rq(r){var g=Mr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=nr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){Aq(o)});return}}else if(g===31){if(g=er(o),g!==null){r.blockedOn=g,gr(r.priority,function(){Aq(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yi(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=T4(r.nativeEvent);if(o===null){o=r.nativeEvent;var e=new o.constructor(o.type,o),h=e;Db!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Db=h,o.target.dispatchEvent(e),Db===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Db=null}else return g=Fr(o),g!==null&&qq(g),r.blockedOn=o,!1;g.shift()}return!0}function Gq(r,g,o){yi(r)&&o.delete(g)}function zY(){H6=!1,P0!==null&&yi(P0)&&(P0=null),O0!==null&&yi(O0)&&(O0=null),H0!==null&&yi(H0)&&(H0=null),Lw.forEach(Gq),Iw.forEach(Gq)}function Ei(r,g){r.blockedOn===g&&(r.blockedOn=null,H6||(H6=!0,eg.unstable_scheduleCallback(eg.unstable_NormalPriority,zY)))}function Xq(r){su!==r&&(su=r,eg.unstable_scheduleCallback(eg.unstable_NormalPriority,function(){su===r&&(su=null);for(var g=0;g<r.length;g+=3){var o=r[g],e=r[g+1],h=r[g+2];if(typeof e!=="function")if(S4(e||o)===null)continue;else break;var b=Fr(o);b!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:h,method:o.method,action:e},Object.freeze(o),S2(b,o,e,h))}}))}function rh(r){function g(q){return Ei(q,r)}P0!==null&&Ei(P0,r),O0!==null&&Ei(O0,r),H0!==null&&Ei(H0,r),Lw.forEach(g),Iw.forEach(g);for(var o=0;o<q0.length;o++){var e=q0[o];e.blockedOn===r&&(e.blockedOn=null)}for(;0<q0.length&&(o=q0[0],o.blockedOn===null);)Rq(o),o.blockedOn===null&&q0.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(e=0;e<o.length;e+=3){var h=o[e],b=o[e+1],u=h[Fo]||null;if(typeof b==="function")u||Xq(o);else if(u){var t=null;if(b&&b.hasAttribute("formAction")){if(h=b,u=b[Fo]||null)t=u.formAction;else if(S4(h)!==null)continue}else t=u.action;typeof t==="function"?o[e+1]=t:(o.splice(e,3),e-=3),Xq(o)}}}function Yq(){function r(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(u){return h=u})},focusReset:"manual",scroll:"manual"})}function g(){h!==null&&(h(),h=null),e||setTimeout(o,20)}function o(){if(!e&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var e=!1,h=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){e=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),h!==null&&(h(),h=null)}}}function k4(r){this._internalRoot=r}function ci(r){this._internalRoot=r}function Jq(r){r[Ev]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,mY=Symbol.for("react.element"),Ye=Symbol.for("react.transitional.element"),gh=Symbol.for("react.portal"),oh=Symbol.for("react.fragment"),ai=Symbol.for("react.strict_mode"),D4=Symbol.for("react.profiler"),V4=Symbol.for("react.consumer"),Je=Symbol.for("react.context"),Cb=Symbol.for("react.forward_ref"),_4=Symbol.for("react.suspense"),y4=Symbol.for("react.suspense_list"),ji=Symbol.for("react.memo"),ul=Symbol.for("react.lazy"),E4=Symbol.for("react.activity"),KY=Symbol.for("react.memo_cache_sentinel"),Qq=Symbol.iterator,UY=Symbol.for("react.client.reference"),lo=Array.isArray,C=Th.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wg=M6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$Y=Object.freeze({pending:!1,data:null,method:null,action:null}),c4=[],a4=[],se=-1,Vv=Wr(null),Tb=Wr(null),_v=Wr(null),fi=Wr(null),Sb=0,zq,mq,Kq,Uq,$q,Lq,Iq;V.__reactDisabledLog=!0;var j4,Fq,f4=!1,p4=new(typeof WeakMap==="function"?WeakMap:Map),nl=null,Qe=!1,Vl=Object.prototype.hasOwnProperty,d4=eg.unstable_scheduleCallback,LY=eg.unstable_cancelCallback,IY=eg.unstable_shouldYield,FY=eg.unstable_requestPaint,bo=eg.unstable_now,NY=eg.unstable_getCurrentPriorityLevel,s4=eg.unstable_ImmediatePriority,rt=eg.unstable_UserBlockingPriority,lh=eg.unstable_NormalPriority,BY=eg.unstable_LowPriority,gt=eg.unstable_IdlePriority,ZY=eg.log,xY=eg.unstable_setDisableYieldValue,eh=null,zo=null,ze=!1,me=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Io=Math.clz32?Math.clz32:C5,CY=Math.log,TY=Math.LN2,pi=256,di=262144,si=4194304,tl=2,_l=8,Ke=32,ru=268435456,yv=Math.random().toString(36).slice(2),Ao="__reactFiber$"+yv,Fo="__reactProps$"+yv,Ev="__reactContainer$"+yv,ot="__reactEvents$"+yv,SY="__reactListeners$"+yv,kY="__reactHandles$"+yv,Nq="__reactResources$"+yv,kb="__reactMarker$"+yv,Bq=new Set,p0={},lt={},DY={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},VY=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zq={},xq={},_Y=/[\n"\\]/g,Cq=!1,Tq=!1,Sq=!1,kq=!1,Dq=!1,Vq=!1,_q=["value","defaultValue"],yq=!1,Eq=/["'&<>\n\t]|^\s|\s$/,yY="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),cq="applet caption html table td th marquee object template foreignObject desc title".split(" "),EY=cq.concat(["button"]),cY="dd dt li option optgroup p rp rt".split(" "),aq={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},gu={},et={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},jq=/([A-Z])/g,fq=/^ms-/,aY=/^(?:webkit|moz|o)[A-Z]/,jY=/^-ms-/,fY=/-(.)/g,pq=/;\s*$/,vh={},vt={},dq=!1,sq=!1,rA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),ou="http://www.w3.org/1998/Math/MathML",hh="http://www.w3.org/2000/svg",pY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gA={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},bh={},dY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oA=!1,No={},lA=/^on./,rJ=/^on[^A-Z]/,gJ=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oJ=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lJ=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Db=null,wh=null,ih=null,ht=!1,Ue=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bt=!1;if(Ue)try{var Vb={};Object.defineProperty(Vb,"passive",{get:function(){bt=!0}}),window.addEventListener("test",Vb,Vb),window.removeEventListener("test",Vb,Vb)}catch(r){bt=!1}var cv=null,wt=null,eu=null,d0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=yo(d0),_b=cr({},d0,{view:0,detail:0}),eJ=yo(_b),it,ut,yb,hu=cr({},_b,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==yb&&(yb&&r.type==="mousemove"?(it=r.screenX-yb.screenX,ut=r.screenY-yb.screenY):ut=it=0,yb=r),it},movementY:function(r){return"movementY"in r?r.movementY:ut}}),eA=yo(hu),vJ=cr({},hu,{dataTransfer:0}),hJ=yo(vJ),bJ=cr({},_b,{relatedTarget:0}),nt=yo(bJ),wJ=cr({},d0,{animationName:0,elapsedTime:0,pseudoElement:0}),iJ=yo(wJ),uJ=cr({},d0,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nJ=yo(uJ),tJ=cr({},d0,{data:0}),vA=yo(tJ),PJ=vA,OJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HJ={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qJ={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},AJ=cr({},_b,{key:function(r){if(r.key){var g=OJ[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=y5(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?HJ[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(r){return r.type==="keypress"?y5(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?y5(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),MJ=yo(AJ),WJ=cr({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hA=yo(WJ),RJ=cr({},_b,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En}),GJ=yo(RJ),XJ=cr({},d0,{propertyName:0,elapsedTime:0,pseudoElement:0}),YJ=yo(XJ),JJ=cr({},hu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),QJ=yo(JJ),zJ=cr({},d0,{newState:0,oldState:0}),mJ=yo(zJ),KJ=[9,13,27,32],bA=229,tt=Ue&&"CompositionEvent"in window,Eb=null;Ue&&"documentMode"in document&&(Eb=document.documentMode);var UJ=Ue&&"TextEvent"in window&&!Eb,wA=Ue&&(!tt||Eb&&8<Eb&&11>=Eb),iA=32,uA=String.fromCharCode(iA),nA=!1,uh=!1,$J={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},cb=null,ab=null,tA=!1;Ue&&(tA=pG("input")&&(!document.documentMode||9<document.documentMode));var Bo=typeof Object.is==="function"?Object.is:lX,LJ=Ue&&"documentMode"in document&&11>=document.documentMode,nh=null,Pt=null,jb=null,Ot=!1,th={animationend:x0("Animation","AnimationEnd"),animationiteration:x0("Animation","AnimationIteration"),animationstart:x0("Animation","AnimationStart"),transitionrun:x0("Transition","TransitionRun"),transitionstart:x0("Transition","TransitionStart"),transitioncancel:x0("Transition","TransitionCancel"),transitionend:x0("Transition","TransitionEnd")},Ht={},PA={};Ue&&(PA=document.createElement("div").style,("AnimationEvent"in window)||(delete th.animationend.animation,delete th.animationiteration.animation,delete th.animationstart.animation),("TransitionEvent"in window)||delete th.transitionend.transition);var OA=C0("animationend"),HA=C0("animationiteration"),qA=C0("animationstart"),IJ=C0("transitionrun"),FJ=C0("transitionstart"),NJ=C0("transitioncancel"),AA=C0("transitionend"),MA=new Map,qt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qt.push("scrollEnd");var WA=0;if(typeof performance==="object"&&typeof performance.now==="function")var BJ=performance,RA=function(){return BJ.now()};else{var ZJ=Date;RA=function(){return ZJ.now()}}var At=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},xJ="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",bu=0,Mt=1,Wt=2,Rt=3,wu="– ",iu="+ ",GA="  ",Qg=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",zl="Components ⚛",ar="Scheduler ⚛",jr="Blocking",av=!1,rv={color:"primary",properties:null,tooltipText:"",track:zl},jv={start:-0,end:-0,detail:{devtools:rv}},CJ=["Changed Props",""],XA="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",TJ=["Changed Props",XA],fb=1,gv=2,ml=[],Ph=0,Gt=0,fv={};Object.freeze(fv);var Kl=null,Oh=null,Kr=0,SJ=1,kr=2,mo=8,yl=16,kJ=32,YA=!1;try{var JA=Object.preventExtensions({})}catch(r){YA=!0}var Xt=new WeakMap,Hh=[],qh=0,uu=null,pb=0,Ul=[],$l=0,s0=null,ov=1,lv="",Mo=null,zg=null,pr=!1,$e=!1,Pl=null,pv=null,Ll=!1,Yt=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Jt=Wr(null),Qt=Wr(null),QA={},nu=null,Ah=null,Mh=!1,DJ=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,e){r.push(e)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},VJ=eg.unstable_scheduleCallback,_J=eg.unstable_NormalPriority,jg={$$typeof:Je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=eg.unstable_now,tu=console.createTask?console.createTask:function(){return null},db=1,Pu=2,wo=-0,dv=-0,ev=-0,vv=null,Zo=-1.1,r1=-0,Ig=-0,Qr=-1.1,mr=-1.1,$g=null,Zg=!1,sv=-0,Le=-1.1,sb=null,r0=0,zt=null,mt=null,g1=-1.1,rw=null,Wh=-1.1,Ou=-1.1,Ie=-0,hv=-1.1,Il=-1.1,Kt=0,gw=null,zA=null,mA=null,g0=-1.1,o1=null,o0=-1.1,Hu=-1.1,KA=-0,UA=-0,qu=0,bv=null,$A=0,ow=-1.1,Au=!1,Mu=!1,lw=null,Ut=0,l1=0,Rh=null,LA=C.S;C.S=function(r,g){if(zM=bo(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>hv&&0>Il){hv=fg();var o=Fb(),e=Ib();if(o!==o0||e!==o1)o0=-1.1;g0=o,o1=e}uX(r,g)}LA!==null&&LA(r,g)};var e1=Wr(null),El={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},ew=[],vw=[],hw=[],bw=[],ww=[],iw=[],v1=new Set;El.recordUnsafeLifecycleWarnings=function(r,g){v1.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&ew.push(r),r.mode&mo&&typeof g.UNSAFE_componentWillMount==="function"&&vw.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&hw.push(r),r.mode&mo&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&bw.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&ww.push(r),r.mode&mo&&typeof g.UNSAFE_componentWillUpdate==="function"&&iw.push(r))},El.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<ew.length&&(ew.forEach(function(t){r.add(x(t)||"Component"),v1.add(t.type)}),ew=[]);var g=new Set;0<vw.length&&(vw.forEach(function(t){g.add(x(t)||"Component"),v1.add(t.type)}),vw=[]);var o=new Set;0<hw.length&&(hw.forEach(function(t){o.add(x(t)||"Component"),v1.add(t.type)}),hw=[]);var e=new Set;0<bw.length&&(bw.forEach(function(t){e.add(x(t)||"Component"),v1.add(t.type)}),bw=[]);var h=new Set;0<ww.length&&(ww.forEach(function(t){h.add(x(t)||"Component"),v1.add(t.type)}),ww=[]);var b=new Set;if(0<iw.length&&(iw.forEach(function(t){b.add(x(t)||"Component"),v1.add(t.type)}),iw=[]),0<g.size){var u=A(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,u)}0<e.size&&(u=A(e),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,u)),0<b.size&&(u=A(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,u)),0<r.size&&(u=A(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u)),0<o.size&&(u=A(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u)),0<h.size&&(u=A(h),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,u))};var Wu=new Map,IA=new Set;El.recordLegacyContextWarning=function(r,g){var o=null;for(var e=r;e!==null;)e.mode&mo&&(o=e),e=e.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!IA.has(r.type)&&(e=Wu.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(e===void 0&&(e=[],Wu.set(o,e)),e.push(r))},El.flushLegacyContextWarning=function(){Wu.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(h){o.add(x(h)||"Component"),IA.add(h.type)});var e=A(o);wr(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,e)})}})},El.discardPendingWarnings=function(){ew=[],vw=[],hw=[],bw=[],ww=[],iw=[],Wu=new Map};var FA={react_stack_bottom_frame:function(r,g,o){var e=Qe;Qe=!0;try{return r(g,o)}finally{Qe=e}}},$t=FA.react_stack_bottom_frame.bind(FA),NA={react_stack_bottom_frame:function(r){var g=Qe;Qe=!0;try{return r.render()}finally{Qe=g}}},BA=NA.react_stack_bottom_frame.bind(NA),ZA={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){bg(r,r.return,o)}}},Lt=ZA.react_stack_bottom_frame.bind(ZA),xA={react_stack_bottom_frame:function(r,g,o,e,h){try{g.componentDidUpdate(o,e,h)}catch(b){bg(r,r.return,b)}}},CA=xA.react_stack_bottom_frame.bind(xA),TA={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},yJ=TA.react_stack_bottom_frame.bind(TA),SA={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(e){bg(r,g,e)}}},kA=SA.react_stack_bottom_frame.bind(SA),DA={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},EJ=DA.react_stack_bottom_frame.bind(DA),VA={react_stack_bottom_frame:function(r,g,o){try{o()}catch(e){bg(r,g,e)}}},cJ=VA.react_stack_bottom_frame.bind(VA),_A={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},aJ=_A.react_stack_bottom_frame.bind(_A),Gh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),It=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Ru=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Gu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},h1=null,uw=!1,Xh=null,nw=0,Dr=null,Ft,yA=Ft=!1,EA={},cA={},aA={};G=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var e=x(r),h=e||"null";if(!EA[h]){EA[h]=!0,o=o._owner,r=r._debugOwner;var b="";r&&typeof r.tag==="number"&&(h=x(r))&&(b=`

Check the render method of \``+h+"`."),b||e&&(b=`

Check the top-level render call using <`+e+">.");var u="";o!=null&&r!==o&&(e=null,typeof o.tag==="number"?e=x(o):typeof o.name==="string"&&(e=o.name),e&&(u=" It was passed a child from "+e+".")),wr(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,u)})}}};var b1=SP(!0),jA=SP(!1),fA=0,pA=1,dA=2,Nt=3,l0=!1,sA=!1,Bt=null,Zt=!1,Yh=Wr(null),Xu=Wr(0),Ol=Wr(null),Fl=null,Jh=1,tw=2,Vg=Wr(0),Yu=0,Nl=1,xo=2,Hl=4,Co=8,Qh,rM=new Set,gM=new Set,xt=new Set,oM=new Set,wv=0,Ur=null,Ag=null,pg=null,Ju=!1,zh=!1,w1=!1,Qu=0,Pw=0,iv=null,jJ=0,fJ=25,Z=null,Bl=null,uv=-1,Ow=!1,Hw={readContext:Ug,use:Tv,useCallback:Tg,useContext:Tg,useEffect:Tg,useImperativeHandle:Tg,useLayoutEffect:Tg,useInsertionEffect:Tg,useMemo:Tg,useReducer:Tg,useRef:Tg,useState:Tg,useDebugValue:Tg,useDeferredValue:Tg,useTransition:Tg,useSyncExternalStore:Tg,useId:Tg,useHostTransitionStatus:Tg,useFormState:Tg,useActionState:Tg,useOptimistic:Tg,useMemoCache:Tg,useCacheRefresh:Tg};Hw.useEffectEvent=Tg;var Ct=null,lM=null,Tt=null,eM=null,Fe=null,cl=null,zu=null;Ct={readContext:function(r){return Ug(r)},use:Tv,useCallback:function(r,g){return Z="useCallback",Er(),D1(g),Z2(r,g)},useContext:function(r){return Z="useContext",Er(),Ug(r)},useEffect:function(r,g){return Z="useEffect",Er(),D1(g),Wi(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",Er(),D1(o),B2(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",Er(),D1(g),E0(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",Er(),D1(g),N2(r,g)},useMemo:function(r,g){Z="useMemo",Er(),D1(g);var o=C.H;C.H=Fe;try{return x2(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",Er();var e=C.H;C.H=Fe;try{return Q2(r,g,o)}finally{C.H=e}},useRef:function(r){return Z="useRef",Er(),I2(r)},useState:function(r){Z="useState",Er();var g=C.H;C.H=Fe;try{return U2(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",Er()},useDeferredValue:function(r,g){return Z="useDeferredValue",Er(),C2(r,g)},useTransition:function(){return Z="useTransition",Er(),k2()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",Er(),m2(r,g,o)},useId:function(){return Z="useId",Er(),D2()},useFormState:function(r,g){return Z="useFormState",Er(),Oi(),_1(r,g)},useActionState:function(r,g){return Z="useActionState",Er(),_1(r,g)},useOptimistic:function(r){return Z="useOptimistic",Er(),$2(r)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return Z="useCacheRefresh",Er(),V2()},useEffectEvent:function(r){return Z="useEffectEvent",Er(),F2(r)}},lM={readContext:function(r){return Ug(r)},use:Tv,useCallback:function(r,g){return Z="useCallback",d(),Z2(r,g)},useContext:function(r){return Z="useContext",d(),Ug(r)},useEffect:function(r,g){return Z="useEffect",d(),Wi(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),B2(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",d(),E0(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),N2(r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=Fe;try{return x2(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var e=C.H;C.H=Fe;try{return Q2(r,g,o)}finally{C.H=e}},useRef:function(r){return Z="useRef",d(),I2(r)},useState:function(r){Z="useState",d();var g=C.H;C.H=Fe;try{return U2(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),C2(r,g)},useTransition:function(){return Z="useTransition",d(),k2()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),m2(r,g,o)},useId:function(){return Z="useId",d(),D2()},useActionState:function(r,g){return Z="useActionState",d(),_1(r,g)},useFormState:function(r,g){return Z="useFormState",d(),Oi(),_1(r,g)},useOptimistic:function(r){return Z="useOptimistic",d(),$2(r)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return Z="useCacheRefresh",d(),V2()},useEffectEvent:function(r){return Z="useEffectEvent",d(),F2(r)}},Tt={readContext:function(r){return Ug(r)},use:Tv,useCallback:function(r,g){return Z="useCallback",d(),Xi(r,g)},useContext:function(r){return Z="useContext",d(),Ug(r)},useEffect:function(r,g){Z="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Gi(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),Eo(4,Hl,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=cl;try{return Yi(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var e=C.H;C.H=cl;try{return V1(r,g,o)}finally{C.H=e}},useRef:function(){return Z="useRef",d(),ug().memoizedState},useState:function(){Z="useState",d();var r=C.H;C.H=cl;try{return V1(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),wO(r,g)},useTransition:function(){return Z="useTransition",d(),OO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),qi(r,g,o)},useId:function(){return Z="useId",d(),ug().memoizedState},useFormState:function(r){return Z="useFormState",d(),Oi(),Ai(r)},useActionState:function(r){return Z="useActionState",d(),Ai(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),dP(r,g)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Ri(r)}},eM={readContext:function(r){return Ug(r)},use:Tv,useCallback:function(r,g){return Z="useCallback",d(),Xi(r,g)},useContext:function(r){return Z="useContext",d(),Ug(r)},useEffect:function(r,g){Z="useEffect",d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Gi(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),Eo(4,Hl,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=C.H;C.H=zu;try{return Yi(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var e=C.H;C.H=zu;try{return Rb(r,g,o)}finally{C.H=e}},useRef:function(){return Z="useRef",d(),ug().memoizedState},useState:function(){Z="useState",d();var r=C.H;C.H=zu;try{return Rb(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),iO(r,g)},useTransition:function(){return Z="useTransition",d(),HO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),qi(r,g,o)},useId:function(){return Z="useId",d(),ug().memoizedState},useFormState:function(r){return Z="useFormState",d(),Oi(),Mi(r)},useActionState:function(r){return Z="useActionState",d(),Mi(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),rO(r,g)},useHostTransitionStatus:c0,useMemoCache:y0,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Ri(r)}},Fe={readContext:function(r){return R(),Ug(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return Z="useCallback",H(),Er(),Z2(r,g)},useContext:function(r){return Z="useContext",H(),Er(),Ug(r)},useEffect:function(r,g){return Z="useEffect",H(),Er(),Wi(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",H(),Er(),B2(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",H(),Er(),E0(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",H(),Er(),N2(r,g)},useMemo:function(r,g){Z="useMemo",H(),Er();var o=C.H;C.H=Fe;try{return x2(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",H(),Er();var e=C.H;C.H=Fe;try{return Q2(r,g,o)}finally{C.H=e}},useRef:function(r){return Z="useRef",H(),Er(),I2(r)},useState:function(r){Z="useState",H(),Er();var g=C.H;C.H=Fe;try{return U2(r)}finally{C.H=g}},useDebugValue:function(){Z="useDebugValue",H(),Er()},useDeferredValue:function(r,g){return Z="useDeferredValue",H(),Er(),C2(r,g)},useTransition:function(){return Z="useTransition",H(),Er(),k2()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",H(),Er(),m2(r,g,o)},useId:function(){return Z="useId",H(),Er(),D2()},useFormState:function(r,g){return Z="useFormState",H(),Er(),_1(r,g)},useActionState:function(r,g){return Z="useActionState",H(),Er(),_1(r,g)},useOptimistic:function(r){return Z="useOptimistic",H(),Er(),$2(r)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return Z="useCacheRefresh",Er(),V2()},useEffectEvent:function(r){return Z="useEffectEvent",H(),Er(),F2(r)}},cl={readContext:function(r){return R(),Ug(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return Z="useCallback",H(),d(),Xi(r,g)},useContext:function(r){return Z="useContext",H(),d(),Ug(r)},useEffect:function(r,g){Z="useEffect",H(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",H(),d(),Gi(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",H(),d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",H(),d(),Eo(4,Hl,r,g)},useMemo:function(r,g){Z="useMemo",H(),d();var o=C.H;C.H=cl;try{return Yi(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",H(),d();var e=C.H;C.H=cl;try{return V1(r,g,o)}finally{C.H=e}},useRef:function(){return Z="useRef",H(),d(),ug().memoizedState},useState:function(){Z="useState",H(),d();var r=C.H;C.H=cl;try{return V1(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",H(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",H(),d(),wO(r,g)},useTransition:function(){return Z="useTransition",H(),d(),OO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",H(),d(),qi(r,g,o)},useId:function(){return Z="useId",H(),d(),ug().memoizedState},useFormState:function(r){return Z="useFormState",H(),d(),Ai(r)},useActionState:function(r){return Z="useActionState",H(),d(),Ai(r)},useOptimistic:function(r,g){return Z="useOptimistic",H(),d(),dP(r,g)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",H(),d(),Ri(r)}},zu={readContext:function(r){return R(),Ug(r)},use:function(r){return H(),Tv(r)},useCallback:function(r,g){return Z="useCallback",H(),d(),Xi(r,g)},useContext:function(r){return Z="useContext",H(),d(),Ug(r)},useEffect:function(r,g){Z="useEffect",H(),d(),Eo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",H(),d(),Gi(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",H(),d(),Eo(4,xo,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",H(),d(),Eo(4,Hl,r,g)},useMemo:function(r,g){Z="useMemo",H(),d();var o=C.H;C.H=cl;try{return Yi(r,g)}finally{C.H=o}},useReducer:function(r,g,o){Z="useReducer",H(),d();var e=C.H;C.H=cl;try{return Rb(r,g,o)}finally{C.H=e}},useRef:function(){return Z="useRef",H(),d(),ug().memoizedState},useState:function(){Z="useState",H(),d();var r=C.H;C.H=cl;try{return Rb(kl)}finally{C.H=r}},useDebugValue:function(){Z="useDebugValue",H(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",H(),d(),iO(r,g)},useTransition:function(){return Z="useTransition",H(),d(),HO()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",H(),d(),qi(r,g,o)},useId:function(){return Z="useId",H(),d(),ug().memoizedState},useFormState:function(r){return Z="useFormState",H(),d(),Mi(r)},useActionState:function(r){return Z="useActionState",H(),d(),Mi(r)},useOptimistic:function(r,g){return Z="useOptimistic",H(),d(),rO(r,g)},useMemoCache:function(r){return H(),y0(r)},useHostTransitionStatus:c0,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ug().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",H(),d(),Ri(r)}};var vM={},hM=new Set,bM=new Set,wM=new Set,iM=new Set,uM=new Set,nM=new Set,tM=new Set,PM=new Set,OM=new Set,HM=new Set;Object.freeze(vM);var St={enqueueSetState:function(r,g,o){r=r._reactInternals;var e=wl(r),h=Bv(e);h.payload=g,o!==void 0&&o!==null&&(y2(o),h.callback=o),g=Zv(r,h,e),g!==null&&(ue(e,"this.setState()",r),Bg(g,r,e),qb(g,r,e))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var e=wl(r),h=Bv(e);h.tag=pA,h.payload=g,o!==void 0&&o!==null&&(y2(o),h.callback=o),g=Zv(r,h,e),g!==null&&(ue(e,"this.replaceState()",r),Bg(g,r,e),qb(g,r,e))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=wl(r),e=Bv(o);e.tag=dA,g!==void 0&&g!==null&&(y2(g),e.callback=g),g=Zv(r,e,o),g!==null&&(ue(o,"this.forceUpdate()",r),Bg(g,r,o),qb(g,r,o))}},mh=null,kt=null,Dt=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),dg=!1,qM={},AM={},MM={},WM={},Kh=!1,RM={},mu={},Vt={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},GM=!1,XM=null;XM=new Set;var nv=!1,sg=!1,_t=!1,YM=typeof WeakSet==="function"?WeakSet:Set,io=null,Uh=null,$h=null,ro=null,jo=!1,al=null,eo=!1,qw=8192,pJ={getCacheForType:function(r){var g=Ug(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Ug(jg).controller.signal},getOwner:function(){return nl}};if(typeof Symbol==="function"&&Symbol.for){var Aw=Symbol.for;Aw("selector.component"),Aw("selector.has_pseudo_class"),Aw("selector.role"),Aw("selector.test_id"),Aw("selector.text")}var dJ=[],sJ=typeof WeakMap==="function"?WeakMap:Map,uo=0,vo=2,ql=4,tv=0,Mw=1,i1=2,Ku=3,e0=4,Uu=6,JM=5,og=uo,Mg=null,yr=null,Vr=0,fo=0,$u=1,u1=2,Ww=3,QM=4,yt=5,Rw=6,Lu=7,Et=8,n1=9,ng=fo,Al=null,v0=!1,Lh=!1,ct=!1,Ne=0,Fg=tv,h0=0,b0=0,at=0,po=0,t1=0,Gw=null,To=null,Iu=!1,Fu=0,zM=0,mM=300,Nu=1/0,KM=500,Xw=null,Sg=null,w0=null,Bu=0,jt=1,ft=2,UM=3,i0=0,$M=1,LM=2,IM=3,FM=4,Zu=5,go=0,u0=null,Ih=null,jl=0,pt=0,dt=-0,st=null,NM=null,BM=null,fl=Bu,ZM=null,rQ=50,Yw=0,r6=null,g6=!1,xu=!1,gQ=50,P1=0,Jw=null,Fh=!1,Cu=null,xM=!1,CM=new Set,oQ={},Tu=null,Nh=null,o6=!1,l6=!1,Su=!1,e6=!1,n0=0,v6={};(function(){for(var r=0;r<qt.length;r++){var g=qt[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),Sl(o,"on"+g)}Sl(OA,"onAnimationEnd"),Sl(HA,"onAnimationIteration"),Sl(qA,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(IJ,"onTransitionRun"),Sl(FJ,"onTransitionStart"),Sl(NJ,"onTransitionCancel"),Sl(AA,"onTransitionEnd")})(),gl("onMouseEnter",["mouseout","mouseover"]),gl("onMouseLeave",["mouseout","mouseover"]),gl("onPointerEnter",["pointerout","pointerover"]),gl("onPointerLeave",["pointerout","pointerover"]),Jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qw="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qw)),ku="_reactListening"+Math.random().toString(36).slice(2),TM=!1,SM=!1,Du=!1,kM=!1,Vu=!1,_u=!1,DM=!1,yu={},lQ=/\r\n?/g,eQ=/\u0000|\uFFFD/g,O1="http://www.w3.org/1999/xlink",b6="http://www.w3.org/XML/1998/namespace",vQ="javascript:throw new Error('React form unexpectedly submitted.')",hQ="suppressHydrationWarning",H1="&",Eu="/&",zw="$",mw="/$",t0="$?",q1="$~",Bh="$!",bQ="html",wQ="body",iQ="head",w6="F!",VM="F",_M="loading",uQ="style",Pv=0,Zh=1,cu=2,i6=null,u6=null,yM={dialog:!0,webview:!0},n6=null,Kw=void 0,EM=typeof setTimeout==="function"?setTimeout:void 0,nQ=typeof clearTimeout==="function"?clearTimeout:void 0,A1=-1,cM=typeof Promise==="function"?Promise:void 0,tQ=typeof queueMicrotask==="function"?queueMicrotask:typeof cM<"u"?function(r){return cM.resolve(null).then(r).catch(fX)}:EM,t6=null,M1=0,Uw=1,aM=2,jM=3,Zl=4,xl=new Map,fM=new Set,Ov=wg.d;wg.d={f:function(){var r=Ov.f(),g=j1();return r||g},r:function(r){var g=Fr(r);g!==null&&g.tag===5&&g.type==="form"?PO(g):Ov.r(r)},D:function(r){Ov.D(r),hq("dns-prefetch",r,null)},C:function(r,g){Ov.C(r,g),hq("preconnect",r,g)},L:function(r,g,o){Ov.L(r,g,o);var e=xh;if(e&&r&&g){var h='link[rel="preload"][as="'+Jl(g)+'"]';g==="image"?o&&o.imageSrcSet?(h+='[imagesrcset="'+Jl(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(h+='[imagesizes="'+Jl(o.imageSizes)+'"]')):h+='[href="'+Jl(r)+'"]':h+='[href="'+Jl(r)+'"]';var b=h;switch(g){case"style":b=d1(r);break;case"script":b=s1(r)}xl.has(b)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),xl.set(b,r),e.querySelector(h)!==null||g==="style"&&e.querySelector(Bb(b))||g==="script"&&e.querySelector(Zb(b))||(g=e.createElement("link"),qo(g,"link",r),Jr(g),e.head.appendChild(g)))}},m:function(r,g){Ov.m(r,g);var o=xh;if(o&&r){var e=g&&typeof g.as==="string"?g.as:"script",h='link[rel="modulepreload"][as="'+Jl(e)+'"][href="'+Jl(r)+'"]',b=h;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=s1(r)}if(!xl.has(b)&&(r=cr({rel:"modulepreload",href:r},g),xl.set(b,r),o.querySelector(h)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zb(b)))return}e=o.createElement("link"),qo(e,"link",r),Jr(e),o.head.appendChild(e)}}},X:function(r,g){Ov.X(r,g);var o=xh;if(o&&r){var e=lg(o).hoistableScripts,h=s1(r),b=e.get(h);b||(b=o.querySelector(Zb(h)),b||(r=cr({src:r,async:!0},g),(g=xl.get(h))&&B4(r,g),b=o.createElement("script"),Jr(b),qo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},e.set(h,b))}},S:function(r,g,o){Ov.S(r,g,o);var e=xh;if(e&&r){var h=lg(e).hoistableStyles,b=d1(r);g=g||"default";var u=h.get(b);if(!u){var t={loading:M1,preload:null};if(u=e.querySelector(Bb(b)))t.loading=Uw|Zl;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=xl.get(b))&&N4(r,o);var q=u=e.createElement("link");Jr(q),qo(q,"link",r),q._p=new Promise(function(M,U){q.onload=M,q.onerror=U}),q.addEventListener("load",function(){t.loading|=Uw}),q.addEventListener("error",function(){t.loading|=aM}),t.loading|=Zl,Di(u,g,e)}u={type:"stylesheet",instance:u,count:1,state:t},h.set(b,u)}}},M:function(r,g){Ov.M(r,g);var o=xh;if(o&&r){var e=lg(o).hoistableScripts,h=s1(r),b=e.get(h);b||(b=o.querySelector(Zb(h)),b||(r=cr({src:r,async:!0,type:"module"},g),(g=xl.get(h))&&B4(r,g),b=o.createElement("script"),Jr(b),qo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},e.set(h,b))}}};var xh=typeof document>"u"?null:document,au=null,PQ=60000,OQ=800,HQ=500,P6=0,O6=null,ju=null,W1=$Y,$w={$$typeof:Je,Provider:null,Consumer:null,_currentValue:W1,_currentValue2:W1,_threadCount:0},pM="%c%s%c",dM="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",sM="",fu=" ",qQ=Function.prototype.bind,rW=!1,gW=null,oW=null,lW=null,eW=null,vW=null,hW=null,bW=null,wW=null,iW=null,uW=null;gW=function(r,g,o,e){g=l(r,g),g!==null&&(o=v(g.memoizedState,o,0,e),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},oW=function(r,g,o){g=l(r,g),g!==null&&(o=n(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},lW=function(r,g,o,e){g=l(r,g),g!==null&&(o=w(g.memoizedState,o,e),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Bg(o,r,2))},eW=function(r,g,o){r.pendingProps=v(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},vW=function(r,g){r.pendingProps=n(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},hW=function(r,g,o){r.pendingProps=w(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Bg(g,r,2)},bW=function(r){var g=Qo(r,2);g!==null&&Bg(g,r,2)},wW=function(r){var g=B1(),o=Qo(r,g);o!==null&&Bg(o,r,g)},iW=function(r){O=r},uW=function(r){P=r};var pu=!0,du=null,H6=!1,P0=null,O0=null,H0=null,Lw=new Map,Iw=new Map,q0=[],AQ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),su=null;if(ci.prototype.render=k4.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):_(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var e=g.current,h=wl(e);Z4(e,h,o,g,null,null)},ci.prototype.unmount=k4.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(vo|ql))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Z4(r.current,2,null,r,null,null),j1(),g[Ev]=null}},ci.prototype.unstable_scheduleHydration=function(r){if(r){var g=I();r={blockedOn:null,target:r,priority:g};for(var o=0;o<q0.length&&g!==0&&g<q0[o].priority;o++);q0.splice(o,0,r),o===0&&Rq(r)}},function(){var r=Th.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),wg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(g),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.5"};return r.overrideHookState=gW,r.overrideHookStateDeletePath=oW,r.overrideHookStateRenamePath=lW,r.overrideProps=eW,r.overridePropsDeletePath=vW,r.overridePropsRenamePath=hW,r.scheduleUpdate=bW,r.scheduleRetry=wW,r.setErrorHandler=iW,r.setSuspenseHandler=uW,r.scheduleRefresh=S,r.scheduleRoot=L,r.setRefreshHandler=T,r.getCurrentFiber=XY,N1(r)}()&&Ue&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var nW=window.location.protocol;/^(https?|file):$/.test(nW)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(nW==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}IQ.createRoot=function(r,g){if(!_(r))throw Error("Target container is not a DOM element.");Jq(r);var o=!1,e="",h=GO,b=XO,u=YO;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Ye&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(e=g.identifierPrefix),g.onUncaughtError!==void 0&&(h=g.onUncaughtError),g.onCaughtError!==void 0&&(b=g.onCaughtError),g.onRecoverableError!==void 0&&(u=g.onRecoverableError)),g=Pq(r,1,!1,null,null,o,e,null,h,b,u,Yq),r[Ev]=g.current,X4(r),new k4(g)},IQ.hydrateRoot=function(r,g,o){if(!_(r))throw Error("Target container is not a DOM element.");Jq(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var e=!1,h="",b=GO,u=XO,t=YO,q=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(e=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(b=o.onUncaughtError),o.onCaughtError!==void 0&&(u=o.onCaughtError),o.onRecoverableError!==void 0&&(t=o.onRecoverableError),o.formState!==void 0&&(q=o.formState)),g=Pq(r,1,!0,g,o!=null?o:null,e,h,q,b,u,t,Yq),g.context=Oq(null),o=g.current,e=wl(o),e=B0(e),h=Bv(e),h.callback=null,Zv(o,h,e),ue(e,"hydrateRoot()",null),o=e,g.current.lanes=o,Kv(g,o),Ge(g),r[Ev]=g.current,X4(r),new ci(g)},IQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var AW=R1((pI,qW)=>{qW.exports=HW()});var rg=R1((Ez)=>{var m1=tr(vg());(function(){function l(V){if(V==null)return null;if(typeof V==="function")return V.$$typeof===x?null:V.displayName||V.name||null;if(typeof V==="string")return V;switch(V){case T:return"Fragment";case rr:return"Profiler";case _:return"StrictMode";case p:return"Suspense";case lr:return"SuspenseList";case j:return"Activity"}if(typeof V==="object")switch(typeof V.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),V.$$typeof){case S:return"Portal";case er:return V.displayName||"Context";case nr:return(V._context.displayName||"Context")+".Consumer";case a:var F=V.render;return V=V.displayName,V||(V=F.displayName||F.name||"",V=V!==""?"ForwardRef("+V+")":"ForwardRef"),V;case B:return F=V.displayName||null,F!==null?F:l(V.type)||"Memo";case y:F=V._payload,V=V._init;try{return l(V(F))}catch(or){}}return null}function v(V){return""+V}function w(V){try{v(V);var F=!1}catch(Ar){F=!0}if(F){F=console;var or=F.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&V[Symbol.toStringTag]||V.constructor.name||"Object";return or.call(F,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),v(V)}}function i(V){if(V===T)return"<>";if(typeof V==="object"&&V!==null&&V.$$typeof===y)return"<...>";try{var F=l(V);return F?"<"+F+">":"<...>"}catch(or){return"<...>"}}function n(){var V=Wr.A;return V===null?null:V.getOwner()}function P(){return Error("react-stack-top-frame")}function O(V){if(qr.call(V,"key")){var F=Object.getOwnPropertyDescriptor(V,"key").get;if(F&&F.isReactWarning)return!1}return V.key!==void 0}function H(V,F){function or(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",F))}or.isReactWarning=!0,Object.defineProperty(V,"key",{get:or,configurable:!0})}function R(){var V=l(this.type);return s[V]||(s[V]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),V=this.props.ref,V!==void 0?V:null}function X(V,F,or,Or,Ar,xr){var br=or.ref;return V={$$typeof:L,type:V,key:F,props:or,_owner:Or},(br!==void 0?br:null)!==null?Object.defineProperty(V,"ref",{enumerable:!1,get:R}):Object.defineProperty(V,"ref",{enumerable:!1,value:null}),V._store={},Object.defineProperty(V._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(V,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(V,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Ar}),Object.defineProperty(V,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:xr}),Object.freeze&&(Object.freeze(V.props),Object.freeze(V)),V}function G(V,F,or,Or,Ar,xr){var br=F.children;if(br!==void 0)if(Or)if(Gr(br)){for(Or=0;Or<br.length;Or++)A(br[Or]);Object.freeze&&Object.freeze(br)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else A(br);if(qr.call(F,"key")){br=l(V);var Cr=Object.keys(F).filter(function(Wg){return Wg!=="key"});Or=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Xr[br+Or]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Or,br,Cr,br),Xr[br+Or]=!0)}if(br=null,or!==void 0&&(w(or),br=""+or),O(F)&&(w(F.key),br=""+F.key),"key"in F){or={};for(var fr in F)fr!=="key"&&(or[fr]=F[fr])}else or=F;return br&&H(or,typeof V==="function"?V.displayName||V.name||"Unknown":V),X(V,br,or,n(),Ar,xr)}function A(V){Y(V)?V._store&&(V._store.validated=1):typeof V==="object"&&V!==null&&V.$$typeof===y&&(V._payload.status==="fulfilled"?Y(V._payload.value)&&V._payload.value._store&&(V._payload.value._store.validated=1):V._store&&(V._store.validated=1))}function Y(V){return typeof V==="object"&&V!==null&&V.$$typeof===L}var L=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),nr=Symbol.for("react.consumer"),er=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),x=Symbol.for("react.client.reference"),Wr=m1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qr=Object.prototype.hasOwnProperty,Gr=Array.isArray,Zr=console.createTask?console.createTask:function(){return null};m1={react_stack_bottom_frame:function(V){return V()}};var k,s={},vr=m1.react_stack_bottom_frame.bind(m1,P)(),zr=Zr(i(P)),Xr={};Ez.Fragment=T,Ez.jsxDEV=function(V,F,or,Or){var Ar=1e4>Wr.recentlyCreatedOwnerStacks++;return G(V,F,or,Or,Ar?Error("react-stack-top-frame"):vr,Ar?Zr(i(V)):zr)}})()});var z8=tr(vg(),1),m8=tr(AW(),1);var MW=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var mW=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var KW=MW+WW+RW+GW+XW+YW+JW+QW+zW+mW;var Jg=tr(vg(),1);var ln=tr(vg(),1);var gn=(...l)=>l.filter((v,w,i)=>{return Boolean(v)&&v.trim()!==""&&i.indexOf(v)===w}).join(" ").trim();var UW=(l)=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var $W=(l)=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(v,w,i)=>i?i.toUpperCase():w.toLowerCase());var W6=(l)=>{let v=$W(l);return v.charAt(0).toUpperCase()+v.slice(1)};var Fw=tr(vg(),1);var on={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var LW=(l)=>{for(let v in l)if(v.startsWith("aria-")||v==="role"||v==="title")return!0;return!1};var Sh=tr(vg(),1),VQ=Sh.createContext({});var IW=()=>Sh.useContext(VQ);var FW=Fw.forwardRef(({color:l,size:v,strokeWidth:w,absoluteStrokeWidth:i,className:n="",children:P,iconNode:O,...H},R)=>{let{size:X=24,strokeWidth:G=2,absoluteStrokeWidth:A=!1,color:Y="currentColor",className:L=""}=IW()??{},S=i??A?Number(w??G)*24/Number(v??X):w??G;return Fw.createElement("svg",{ref:R,...on,width:v??X??on.width,height:v??X??on.height,stroke:l??Y,strokeWidth:S,className:gn("lucide",L,n),...!P&&!LW(H)&&{"aria-hidden":"true"},...H},[...O.map(([T,_])=>Fw.createElement(T,_)),...Array.isArray(P)?P:[P]])});var c=(l,v)=>{let w=ln.forwardRef(({className:i,...n},P)=>ln.createElement(FW,{ref:P,iconNode:v,className:gn(`lucide-${UW(W6(l))}`,`lucide-${l}`,i),...n}));return w.displayName=W6(l),w};var _Q=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Be=c("braces",_Q);var yQ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],A0=c("chart-column",yQ);var EQ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wo=c("code-xml",EQ);var cQ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Ze=c("file-code-corner",cQ);var aQ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],M0=c("layers",aQ);var jQ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xe=c("loader-circle",jQ);var fQ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cl=c("triangle-alert",fQ);var pQ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],W0=c("user-round",pQ);var dQ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Nw=c("activity",dQ);var sQ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Bw=c("arrow-down-to-line",sQ);var rz=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zw=c("arrow-up-to-line",rz);var gz=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],xw=c("blocks",gz);var oz=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],X1=c("book-marked",oz);var lz=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cw=c("book-open",lz);var ez=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Tw=c("calendar",ez);var vz=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sw=c("check",vz);var hz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ro=c("chevron-down",hz);var bz=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kw=c("chevron-left",bz);var wz=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qv=c("chevron-right",wz);var iz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ml=c("chevron-up",iz);var uz=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],Dw=c("chevrons-up-down",uz);var nz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Vw=c("clock",nz);var tz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pl=c("copy",tz);var Pz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dl=c("database",Pz);var Oz=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Y1=c("download",Oz);var Hz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_w=c("eye",Hz);var qz=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],J1=c("folder-open",qz);var Az=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],yw=c("hash",Az);var Mz=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Ew=c("link-2",Mz);var Wz=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],cw=c("list-ordered",Wz);var Rz=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],aw=c("list",Rz);var Gz=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jw=c("lock",Gz);var Xz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],kh=c("message-square-plus",Xz);var Yz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],fw=c("message-square",Yz);var Jz=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],pw=c("package",Jz);var Qz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sl=c("pencil",Qz);var zz=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Q1=c("play",zz);var mz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dw=c("plus",mz);var Kz=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sw=c("radio",Kz);var Uz=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Av=c("refresh-cw",Uz);var $z=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],r5=c("save",$z);var Lz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],R0=c("search",Lz);var Iz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dh=c("shield-alert",Iz);var Fz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g5=c("shield",Fz);var Nz=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],o5=c("syringe",Nz);var Bz=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Ce=c("terminal",Bz);var Zz=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],l5=c("toggle-left",Zz);var xz=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],e5=c("toggle-right",xz);var Cz=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],z1=c("timer",Cz);var Tz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ko=c("trash-2",Tz);var Sz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],v5=c("type",Sz);var kz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],h5=c("upload",kz);var Dz=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Vh=c("user-plus",Dz);var Vz=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],b5=c("wrench",Vz);var _z=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=c("x",_z);var yz=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mv=c("zap",yz);var en={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Fn=tr(vg(),1);var Q5=tr(vg(),1);var Kg=tr(rg(),1),cz={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},NW=({script:l,selected:v,dot:w,duration:i,onSelect:n,onEdit:P,sendToBackend:O})=>{let H=(S)=>{S.stopPropagation(),O({type:"update_script",id:l.id,patch:{enabled:!l.enabled}})},R=(S)=>{S.stopPropagation(),O({type:"duplicate_script",id:l.id})},X=(S)=>{if(S.stopPropagation(),!window.confirm(`Delete "${l.name}"?`))return;O({type:"delete_script",id:l.id})},G=(S)=>{S.stopPropagation(),P()},A=w==="running",Y=(S)=>{if(S.stopPropagation(),A||!l.enabled)return;O({type:"run_script",id:l.id})},L=l.bindings?.length??0;return Kg.jsxDEV("div",{className:`ls-item${v?" ls-selected":""}${!l.enabled&&l.type!=="library"?" ls-disabled":""}`,onClick:n,children:[Kg.jsxDEV("span",{className:cz[w],title:w},void 0,!1,void 0,this),Kg.jsxDEV("div",{className:"ls-item-body",children:[Kg.jsxDEV("div",{className:"ls-item-name",title:l.name,children:l.name},void 0,!1,void 0,this),Kg.jsxDEV("div",{className:"ls-item-meta",children:[l.type!=="library"&&Kg.jsxDEV("span",{children:l.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),i!==void 0&&w!=="running"&&Kg.jsxDEV("span",{style:{color:w==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[i,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),l.type!=="library"&&L>0&&Kg.jsxDEV("div",{className:"ls-item-bindings",children:l.bindings.map((S,T)=>Kg.jsxDEV("span",{className:"ls-binding-badge",children:[S.type==="character"?Kg.jsxDEV(W0,{size:9},void 0,!1,void 0,this):Kg.jsxDEV(fw,{size:9},void 0,!1,void 0,this),Kg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.displayName},void 0,!1,void 0,this)]},T,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-item-actions",children:[Kg.jsxDEV("button",{className:"ls-icon-btn",onClick:G,title:"Edit script",children:Kg.jsxDEV(sl,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),l.type!=="library"&&Kg.jsxDEV("button",{className:"ls-icon-btn",onClick:Y,disabled:!l.enabled||A,title:!l.enabled?"Enable to run":A?"Running…":"Run script",children:A?Kg.jsxDEV(xe,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Kg.jsxDEV(Q1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),l.type!=="library"&&Kg.jsxDEV("button",{className:"ls-icon-btn",onClick:H,title:l.enabled?"Disable":"Enable",children:l.enabled?Kg.jsxDEV(e5,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Kg.jsxDEV(l5,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Kg.jsxDEV("button",{className:"ls-icon-btn",onClick:R,title:"Duplicate",children:Kg.jsxDEV(pl,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Kg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:X,title:"Delete",children:Kg.jsxDEV(Ko,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var xg=Uint8Array,Wl=Uint16Array,$6=Int32Array,hn=new xg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bn=new xg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),J6=new xg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SW=function(l,v){var w=new Wl(31);for(var i=0;i<31;++i)w[i]=v+=1<<l[i-1];var n=new $6(w[30]);for(var i=1;i<30;++i)for(var P=w[i];P<w[i+1];++P)n[P]=P-w[i]<<5|i;return{b:w,r:n}},kW=SW(hn,2),DW=kW.b,Q6=kW.r;DW[28]=258,Q6[258]=28;var VW=SW(bn,0),az=VW.b,BW=VW.r,z6=new Wl(32768);for(gg=0;gg<32768;++gg)Te=(gg&43690)>>1|(gg&21845)<<1,Te=(Te&52428)>>2|(Te&13107)<<2,Te=(Te&61680)>>4|(Te&3855)<<4,z6[gg]=((Te&65280)>>8|(Te&255)<<8)>>1;var Te,gg,ke=function(l,v,w){var i=l.length,n=0,P=new Wl(v);for(;n<i;++n)if(l[n])++P[l[n]-1];var O=new Wl(v);for(n=1;n<v;++n)O[n]=O[n-1]+P[n-1]<<1;var H;if(w){H=new Wl(1<<v);var R=15-v;for(n=0;n<i;++n)if(l[n]){var X=n<<4|l[n],G=v-l[n],A=O[l[n]-1]++<<G;for(var Y=A|(1<<G)-1;A<=Y;++A)H[z6[A]>>R]=X}}else{H=new Wl(i);for(n=0;n<i;++n)if(l[n])H[n]=z6[O[l[n]-1]++]>>15-l[n]}return H},G0=new xg(288);for(gg=0;gg<144;++gg)G0[gg]=8;var gg;for(gg=144;gg<256;++gg)G0[gg]=9;var gg;for(gg=256;gg<280;++gg)G0[gg]=7;var gg;for(gg=280;gg<288;++gg)G0[gg]=8;var gg,u5=new xg(32);for(gg=0;gg<32;++gg)u5[gg]=5;var gg,jz=ke(G0,9,0),fz=ke(G0,9,1),pz=ke(u5,5,0),dz=ke(u5,5,1),R6=function(l){var v=l[0];for(var w=1;w<l.length;++w)if(l[w]>v)v=l[w];return v},re=function(l,v,w){var i=v/8|0;return(l[i]|l[i+1]<<8)>>(v&7)&w},G6=function(l,v){var w=v/8|0;return(l[w]|l[w+1]<<8|l[w+2]<<16)>>(v&7)},L6=function(l){return(l+7)/8|0},n5=function(l,v,w){if(v==null||v<0)v=0;if(w==null||w>l.length)w=l.length;return new xg(l.subarray(v,w))};var sz=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(l,v,w){var i=Error(v||sz[l]);if(i.code=l,Error.captureStackTrace)Error.captureStackTrace(i,ko);if(!w)throw i;return i},rm=function(l,v,w,i){var n=l.length,P=i?i.length:0;if(!n||v.f&&!v.l)return w||new xg(0);var O=!w,H=O||v.i!=2,R=v.i;if(O)w=new xg(n*3);var X=function(wr){var _o=w.length;if(wr>_o){var Yo=new xg(Math.max(_o*2,wr));Yo.set(w),w=Yo}},G=v.f||0,A=v.p||0,Y=v.b||0,L=v.l,S=v.d,T=v.m,_=v.n,rr=n*8;do{if(!L){G=re(l,A,1);var nr=re(l,A+1,3);if(A+=3,!nr){var er=L6(A)+4,a=l[er-4]|l[er-3]<<8,p=er+a;if(p>n){if(R)ko(0);break}if(H)X(Y+a);w.set(l.subarray(er,p),Y),v.b=Y+=a,v.p=A=p*8,v.f=G;continue}else if(nr==1)L=fz,S=dz,T=9,_=5;else if(nr==2){var lr=re(l,A,31)+257,B=re(l,A+10,15)+4,y=lr+re(l,A+5,31)+1;A+=14;var j=new xg(y),x=new xg(19);for(var Wr=0;Wr<B;++Wr)x[J6[Wr]]=re(l,A+Wr*3,7);A+=B*3;var qr=R6(x),Gr=(1<<qr)-1,Zr=ke(x,qr,1);for(var Wr=0;Wr<y;){var k=Zr[re(l,A,Gr)];A+=k&15;var er=k>>4;if(er<16)j[Wr++]=er;else{var s=0,vr=0;if(er==16)vr=3+re(l,A,3),A+=2,s=j[Wr-1];else if(er==17)vr=3+re(l,A,7),A+=3;else if(er==18)vr=11+re(l,A,127),A+=7;while(vr--)j[Wr++]=s}}var zr=j.subarray(0,lr),Xr=j.subarray(lr);T=R6(zr),_=R6(Xr),L=ke(zr,T,1),S=ke(Xr,_,1)}else ko(1);if(A>rr){if(R)ko(0);break}}if(H)X(Y+131072);var V=(1<<T)-1,F=(1<<_)-1,or=A;for(;;or=A){var s=L[G6(l,A)&V],Or=s>>4;if(A+=s&15,A>rr){if(R)ko(0);break}if(!s)ko(2);if(Or<256)w[Y++]=Or;else if(Or==256){or=A,L=null;break}else{var Ar=Or-254;if(Or>264){var Wr=Or-257,xr=hn[Wr];Ar=re(l,A,(1<<xr)-1)+DW[Wr],A+=xr}var br=S[G6(l,A)&F],Cr=br>>4;if(!br)ko(3);A+=br&15;var Xr=az[Cr];if(Cr>3){var xr=bn[Cr];Xr+=G6(l,A)&(1<<xr)-1,A+=xr}if(A>rr){if(R)ko(0);break}if(H)X(Y+131072);var fr=Y+Ar;if(Y<Xr){var Wg=P-Xr,$o=Math.min(Xr,fr);if(Wg+Y<0)ko(3);for(;Y<$o;++Y)w[Y]=i[Wg+Y]}for(;Y<fr;++Y)w[Y]=w[Y-Xr]}}if(v.l=L,v.p=or,v.b=Y,v.f=G,L)G=1,v.m=T,v.d=S,v.n=_}while(!G);return Y!=w.length&&O?n5(w,0,Y):w.subarray(0,Y)},Wv=function(l,v,w){w<<=v&7;var i=v/8|0;l[i]|=w,l[i+1]|=w>>8},w5=function(l,v,w){w<<=v&7;var i=v/8|0;l[i]|=w,l[i+1]|=w>>8,l[i+2]|=w>>16},X6=function(l,v){var w=[];for(var i=0;i<l.length;++i)if(l[i])w.push({s:i,f:l[i]});var n=w.length,P=w.slice();if(!n)return{t:yW,l:0};if(n==1){var O=new xg(w[0].s+1);return O[w[0].s]=1,{t:O,l:1}}w.sort(function(p,lr){return p.f-lr.f}),w.push({s:-1,f:25001});var H=w[0],R=w[1],X=0,G=1,A=2;w[0]={s:-1,f:H.f+R.f,l:H,r:R};while(G!=n-1)H=w[w[X].f<w[A].f?X++:A++],R=w[X!=G&&w[X].f<w[A].f?X++:A++],w[G++]={s:-1,f:H.f+R.f,l:H,r:R};var Y=P[0].s;for(var i=1;i<n;++i)if(P[i].s>Y)Y=P[i].s;var L=new Wl(Y+1),S=m6(w[G-1],L,0);if(S>v){var i=0,T=0,_=S-v,rr=1<<_;P.sort(function(lr,B){return L[B.s]-L[lr.s]||lr.f-B.f});for(;i<n;++i){var nr=P[i].s;if(L[nr]>v)T+=rr-(1<<S-L[nr]),L[nr]=v;else break}T>>=_;while(T>0){var er=P[i].s;if(L[er]<v)T-=1<<v-L[er]++-1;else++i}for(;i>=0&&T;--i){var a=P[i].s;if(L[a]==v)--L[a],++T}S=v}return{t:new xg(L),l:S}},m6=function(l,v,w){return l.s==-1?Math.max(m6(l.l,v,w+1),m6(l.r,v,w+1)):v[l.s]=w},ZW=function(l){var v=l.length;while(v&&!l[--v]);var w=new Wl(++v),i=0,n=l[0],P=1,O=function(R){w[i++]=R};for(var H=1;H<=v;++H)if(l[H]==n&&H!=v)++P;else{if(!n&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(n),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(n);P=1,n=l[H]}return{c:w.subarray(0,i),n:v}},i5=function(l,v){var w=0;for(var i=0;i<v.length;++i)w+=l[i]*v[i];return w},_W=function(l,v,w){var i=w.length,n=L6(v+2);l[n]=i&255,l[n+1]=i>>8,l[n+2]=l[n]^255,l[n+3]=l[n+1]^255;for(var P=0;P<i;++P)l[n+P+4]=w[P];return(n+4+i)*8},xW=function(l,v,w,i,n,P,O,H,R,X,G){Wv(v,G++,w),++n[256];var A=X6(n,15),Y=A.t,L=A.l,S=X6(P,15),T=S.t,_=S.l,rr=ZW(Y),nr=rr.c,er=rr.n,a=ZW(T),p=a.c,lr=a.n,B=new Wl(19);for(var y=0;y<nr.length;++y)++B[nr[y]&31];for(var y=0;y<p.length;++y)++B[p[y]&31];var j=X6(B,7),x=j.t,Wr=j.l,qr=19;for(;qr>4&&!x[J6[qr-1]];--qr);var Gr=X+5<<3,Zr=i5(n,G0)+i5(P,u5)+O,k=i5(n,Y)+i5(P,T)+O+14+3*qr+i5(B,x)+2*B[16]+3*B[17]+7*B[18];if(R>=0&&Gr<=Zr&&Gr<=k)return _W(v,G,l.subarray(R,R+X));var s,vr,zr,Xr;if(Wv(v,G,1+(k<Zr)),G+=2,k<Zr){s=ke(Y,L,0),vr=Y,zr=ke(T,_,0),Xr=T;var V=ke(x,Wr,0);Wv(v,G,er-257),Wv(v,G+5,lr-1),Wv(v,G+10,qr-4),G+=14;for(var y=0;y<qr;++y)Wv(v,G+3*y,x[J6[y]]);G+=3*qr;var F=[nr,p];for(var or=0;or<2;++or){var Or=F[or];for(var y=0;y<Or.length;++y){var Ar=Or[y]&31;if(Wv(v,G,V[Ar]),G+=x[Ar],Ar>15)Wv(v,G,Or[y]>>5&127),G+=Or[y]>>12}}}else s=jz,vr=G0,zr=pz,Xr=u5;for(var y=0;y<H;++y){var xr=i[y];if(xr>255){var Ar=xr>>18&31;if(w5(v,G,s[Ar+257]),G+=vr[Ar+257],Ar>7)Wv(v,G,xr>>23&31),G+=hn[Ar];var br=xr&31;if(w5(v,G,zr[br]),G+=Xr[br],br>3)w5(v,G,xr>>5&8191),G+=bn[br]}else w5(v,G,s[xr]),G+=vr[xr]}return w5(v,G,s[256]),G+vr[256]},gm=new $6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),yW=new xg(0),om=function(l,v,w,i,n,P){var O=P.z||l.length,H=new xg(i+O+5*(1+Math.ceil(O/7000))+n),R=H.subarray(i,H.length-n),X=P.l,G=(P.r||0)&7;if(v){if(G)R[0]=P.r>>3;var A=gm[v-1],Y=A>>13,L=A&8191,S=(1<<w)-1,T=P.p||new Wl(32768),_=P.h||new Wl(S+1),rr=Math.ceil(w/3),nr=2*rr,er=function(rl){return(l[rl]^l[rl+1]<<rr^l[rl+2]<<nr)&S},a=new $6(25000),p=new Wl(288),lr=new Wl(32),B=0,y=0,j=P.i||0,x=0,Wr=P.w||0,qr=0;for(;j+2<O;++j){var Gr=er(j),Zr=j&32767,k=_[Gr];if(T[Zr]=k,_[Gr]=Zr,Wr<=j){var s=O-j;if((B>7000||x>24576)&&(s>423||!X)){G=xW(l,R,0,a,p,lr,y,x,qr,j-qr,G),x=B=y=0,qr=j;for(var vr=0;vr<286;++vr)p[vr]=0;for(var vr=0;vr<30;++vr)lr[vr]=0}var zr=2,Xr=0,V=L,F=Zr-k&32767;if(s>2&&Gr==er(j-F)){var or=Math.min(Y,s)-1,Or=Math.min(32767,j),Ar=Math.min(258,s);while(F<=Or&&--V&&Zr!=k){if(l[j+zr]==l[j+zr-F]){var xr=0;for(;xr<Ar&&l[j+xr]==l[j+xr-F];++xr);if(xr>zr){if(zr=xr,Xr=F,xr>or)break;var br=Math.min(F,xr-2),Cr=0;for(var vr=0;vr<br;++vr){var fr=j-F+vr&32767,Wg=T[fr],$o=fr-Wg&32767;if($o>Cr)Cr=$o,k=fr}}}Zr=k,k=T[Zr],F+=Zr-k&32767}}if(Xr){a[x++]=268435456|Q6[zr]<<18|BW[Xr];var wr=Q6[zr]&31,_o=BW[Xr]&31;y+=hn[wr]+bn[_o],++p[257+wr],++lr[_o],Wr=j+zr,++B}else a[x++]=l[j],++p[l[j]]}}for(j=Math.max(j,Wr);j<O;++j)a[x++]=l[j],++p[l[j]];if(G=xW(l,R,X,a,p,lr,y,x,qr,j-qr,G),!X)P.r=G&7|R[G/8|0]<<3,G-=7,P.h=_,P.p=T,P.i=j,P.w=Wr}else{for(var j=P.w||0;j<O+X;j+=65535){var Yo=j+65535;if(Yo>=O)R[G/8|0]=X,Yo=O;G=_W(R,G+1,l.subarray(j,Yo))}P.i=O}return n5(H,0,i+L6(G)+n)},lm=function(){var l=new Int32Array(256);for(var v=0;v<256;++v){var w=v,i=9;while(--i)w=(w&1&&-306674912)^w>>>1;l[v]=w}return l}(),em=function(){var l=-1;return{p:function(v){var w=l;for(var i=0;i<v.length;++i)w=lm[w&255^v[i]]^w>>>8;l=w},d:function(){return~l}}};var vm=function(l,v,w,i,n){if(!n){if(n={l:1},v.dictionary){var P=v.dictionary.subarray(-32768),O=new xg(P.length+l.length);O.set(P),O.set(l,P.length),l=O,n.w=P.length}}return om(l,v.level==null?6:v.level,v.mem==null?n.l?Math.ceil(Math.max(8,Math.min(13,Math.log(l.length)))*1.5):20:12+v.mem,w,i,n)},EW=function(l,v){var w={};for(var i in l)w[i]=l[i];for(var i in v)w[i]=v[i];return w};var Se=function(l,v){return l[v]|l[v+1]<<8},ge=function(l,v){return(l[v]|l[v+1]<<8|l[v+2]<<16|l[v+3]<<24)>>>0},Y6=function(l,v){return ge(l,v)+ge(l,v+4)*4294967296},Go=function(l,v,w){for(;w;++v)l[v]=w,w>>>=8};function hm(l,v){return vm(l,v||{},0,0)}function bm(l,v){return rm(l,{i:2},v&&v.out,v&&v.dictionary)}var cW=function(l,v,w,i){for(var n in l){var P=l[n],O=v+n,H=i;if(Array.isArray(P))H=EW(i,P[1]),P=P[0];if(P instanceof xg)w[O]=[P,H];else w[O+="/"]=[new xg(0),H],cW(P,O,w,i)}},CW=typeof TextEncoder<"u"&&new TextEncoder,K6=typeof TextDecoder<"u"&&new TextDecoder,wm=0;try{K6.decode(yW,{stream:!0}),wm=1}catch(l){}var im=function(l){for(var v="",w=0;;){var i=l[w++],n=(i>127)+(i>223)+(i>239);if(w+n>l.length)return{s:v,r:n5(l,w-1)};if(!n)v+=String.fromCharCode(i);else if(n==3)i=((i&15)<<18|(l[w++]&63)<<12|(l[w++]&63)<<6|l[w++]&63)-65536,v+=String.fromCharCode(55296|i>>10,56320|i&1023);else if(n&1)v+=String.fromCharCode((i&31)<<6|l[w++]&63);else v+=String.fromCharCode((i&15)<<12|(l[w++]&63)<<6|l[w++]&63)}};function vn(l,v){if(v){var w=new xg(l.length);for(var i=0;i<l.length;++i)w[i]=l.charCodeAt(i);return w}if(CW)return CW.encode(l);var n=l.length,P=new xg(l.length+(l.length>>1)),O=0,H=function(G){P[O++]=G};for(var i=0;i<n;++i){if(O+5>P.length){var R=new xg(O+8+(n-i<<1));R.set(P),P=R}var X=l.charCodeAt(i);if(X<128||v)H(X);else if(X<2048)H(192|X>>6),H(128|X&63);else if(X>55295&&X<57344)X=65536+(X&1047552)|l.charCodeAt(++i)&1023,H(240|X>>18),H(128|X>>12&63),H(128|X>>6&63),H(128|X&63);else H(224|X>>12),H(128|X>>6&63),H(128|X&63)}return n5(P,0,O)}function I6(l,v){if(v){var w="";for(var i=0;i<l.length;i+=16384)w+=String.fromCharCode.apply(null,l.subarray(i,i+16384));return w}else if(K6)return K6.decode(l);else{var n=im(l),P=n.s,w=n.r;if(w.length)ko(8);return P}}var um=function(l,v){return v+30+Se(l,v+26)+Se(l,v+28)},nm=function(l,v,w){var i=Se(l,v+28),n=I6(l.subarray(v+46,v+46+i),!(Se(l,v+8)&2048)),P=v+46+i,O=ge(l,v+20),H=w&&O==4294967295?tm(l,P):[O,ge(l,v+24),ge(l,v+42)],R=H[0],X=H[1],G=H[2];return[Se(l,v+10),R,X,n,P+Se(l,v+30)+Se(l,v+32),G]},tm=function(l,v){for(;Se(l,v)!=1;v+=4+Se(l,v+2));return[Y6(l,v+12),Y6(l,v+4),Y6(l,v+20)]},U6=function(l){var v=0;if(l)for(var w in l){var i=l[w].length;if(i>65535)ko(9);v+=i+4}return v},TW=function(l,v,w,i,n,P,O,H){var R=i.length,X=w.extra,G=H&&H.length,A=U6(X);if(Go(l,v,O!=null?33639248:67324752),v+=4,O!=null)l[v++]=20,l[v++]=w.os;l[v]=20,v+=2,l[v++]=w.flag<<1|(P<0&&8),l[v++]=n&&8,l[v++]=w.compression&255,l[v++]=w.compression>>8;var Y=new Date(w.mtime==null?Date.now():w.mtime),L=Y.getFullYear()-1980;if(L<0||L>119)ko(10);if(Go(l,v,L<<25|Y.getMonth()+1<<21|Y.getDate()<<16|Y.getHours()<<11|Y.getMinutes()<<5|Y.getSeconds()>>1),v+=4,P!=-1)Go(l,v,w.crc),Go(l,v+4,P<0?-P-2:P),Go(l,v+8,w.size);if(Go(l,v+12,R),Go(l,v+14,A),v+=16,O!=null)Go(l,v,G),Go(l,v+6,w.attrs),Go(l,v+10,O),v+=14;if(l.set(i,v),v+=R,A)for(var S in X){var T=X[S],_=T.length;Go(l,v,+S),Go(l,v+2,_),l.set(T,v+4),v+=4+_}if(G)l.set(H,v),v+=G;return v},Pm=function(l,v,w,i,n){Go(l,v,101010256),Go(l,v+8,w),Go(l,v+10,w),Go(l,v+12,i),Go(l,v+16,n)};function aW(l,v){if(!v)v={};var w={},i=[];cW(l,"",w,v);var n=0,P=0;for(var O in w){var H=w[O],R=H[0],X=H[1],G=X.level==0?0:8,A=vn(O),Y=A.length,L=X.comment,S=L&&vn(L),T=S&&S.length,_=U6(X.extra);if(Y>65535)ko(11);var rr=G?hm(R,X):R,nr=rr.length,er=em();er.p(R),i.push(EW(X,{size:R.length,crc:er.d(),c:rr,f:A,m:S,u:Y!=O.length||S&&L.length!=T,o:n,compression:G})),n+=30+Y+_+nr,P+=76+2*(Y+_)+(T||0)+nr}var a=new xg(P+22),p=n,lr=P-n;for(var B=0;B<i.length;++B){var A=i[B];TW(a,A.o,A,A.f,A.u,A.c.length);var y=30+A.f.length+U6(A.extra);a.set(A.c,A.o+y),TW(a,n,A,A.f,A.u,A.c.length,A.o,A.m),n+=16+y+(A.m?A.m.length:0)}return Pm(a,n,i.length,lr,p),a}function jW(l,v){var w={},i=l.length-22;for(;ge(l,i)!=101010256;--i)if(!i||l.length-i>65558)ko(13);var n=Se(l,i+8);if(!n)return{};var P=ge(l,i+16),O=P==4294967295||n==65535;if(O){var H=ge(l,i-12);if(O=ge(l,H)==101075792,O)n=ge(l,H+32),P=ge(l,H+48)}var R=v&&v.filter;for(var X=0;X<n;++X){var G=nm(l,P,O),A=G[0],Y=G[1],L=G[2],S=G[3],T=G[4],_=G[5],rr=um(l,_);if(P=T,!R||R({name:S,size:Y,originalSize:L,compression:A}))if(!A)w[S]=n5(l,rr,rr+Y);else if(A==8)w[S]=bm(l.subarray(rr,rr+Y),{out:new xg(L)});else ko(14,"unknown compression type "+A)}return w}function F6(l){let v=l.map((i)=>({name:i.name,code:i.code,type:i.type,triggers:i.triggers,bindings:i.bindings,folder:i.folder,metadata:i.metadata})),w={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:v};return aW({"pack.json":vn(JSON.stringify(w,null,2))})}function fW(l,v){let w=F6(l),i=new Blob([w.buffer],{type:"application/zip"}),n=URL.createObjectURL(i),P=document.createElement("a");P.href=n,P.download=`${v}.lumiscript.zip`,P.click(),URL.revokeObjectURL(n)}var pW;function E(l,v,w){function i(H,R){if(!H._zod)Object.defineProperty(H,"_zod",{value:{def:R,constr:O,traits:new Set},enumerable:!1});if(H._zod.traits.has(l))return;H._zod.traits.add(l),v(H,R);let X=O.prototype,G=Object.keys(X);for(let A=0;A<G.length;A++){let Y=G[A];if(!(Y in H))H[Y]=X[Y].bind(H)}}let n=w?.Parent??Object;class P extends n{}Object.defineProperty(P,"name",{value:l});function O(H){var R;let X=w?.Parent?new P:this;i(X,H),(R=X._zod).deferred??(R.deferred=[]);for(let G of X._zod.deferred)G();return X}return Object.defineProperty(O,"init",{value:i}),Object.defineProperty(O,Symbol.hasInstance,{value:(H)=>{if(w?.Parent&&H instanceof w.Parent)return!0;return H?._zod?.traits?.has(l)}}),Object.defineProperty(O,"name",{value:l}),O}var R_g=Symbol("zod_brand");class Rv extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class t5 extends Error{constructor(l){super(`Encountered unidirectional transform during encode: ${l}`);this.name="ZodEncodeError"}}(pW=globalThis).__zod_globalConfig??(pW.__zod_globalConfig={});var _h=globalThis.__zod_globalConfig;function Gv(l){if(l)Object.assign(_h,l);return _h}var Og={};KQ(Og,{unwrapMessage:()=>P5,uint8ArrayToHex:()=>Sm,uint8ArrayToBase64url:()=>Cm,uint8ArrayToBase64:()=>b9,stringifyPrimitive:()=>o9,slugify:()=>B6,shallowClone:()=>r9,safeExtend:()=>Lm,required:()=>Nm,randomString:()=>Jm,propertyKeyTypes:()=>x6,promiseAllObject:()=>Ym,primitiveTypes:()=>g9,prefixIssues:()=>M5,pick:()=>Km,partial:()=>Fm,parsedType:()=>Bm,optionalKeys:()=>C6,omit:()=>Um,objectClone:()=>Rm,numKeys:()=>Qm,nullish:()=>q5,normalizeParams:()=>_r,mergeDefs:()=>Xv,merge:()=>Im,jsonStringifyReplacer:()=>Eh,joinValues:()=>Wm,issue:()=>ch,isPlainObject:()=>K1,isObject:()=>yh,hexToUint8Array:()=>Tm,getSizableOrigin:()=>v9,getParsedType:()=>zm,getLengthableOrigin:()=>W5,getEnumValues:()=>O5,getElementAtPath:()=>Xm,floatSafeRemainder:()=>sW,finalizeIssue:()=>De,extend:()=>$m,explicitlyAborted:()=>T6,escapeRegex:()=>Yv,esc:()=>wn,defineLazy:()=>Pg,createTransparentProxy:()=>mm,cloneDef:()=>Gm,clone:()=>oe,cleanRegex:()=>A5,cleanEnum:()=>Zm,captureStackTrace:()=>un,cached:()=>H5,base64urlToUint8Array:()=>xm,base64ToUint8Array:()=>h9,assignProp:()=>X0,assertNotEqual:()=>Hm,assertNever:()=>Am,assertIs:()=>qm,assertEqual:()=>Om,assert:()=>Mm,allowsEval:()=>Z6,aborted:()=>Y0,NUMBER_FORMAT_RANGES:()=>l9,Class:()=>w9,BIGINT_FORMAT_RANGES:()=>e9});function Om(l){return l}function Hm(l){return l}function qm(l){}function Am(l){throw Error("Unexpected value in exhaustive check")}function Mm(l){}function O5(l){let v=Object.values(l).filter((i)=>typeof i==="number");return Object.entries(l).filter(([i,n])=>v.indexOf(+i)===-1).map(([i,n])=>n)}function Wm(l,v="|"){return l.map((w)=>o9(w)).join(v)}function Eh(l,v){if(typeof v==="bigint")return v.toString();return v}function H5(l){return{get value(){{let w=l();return Object.defineProperty(this,"value",{value:w}),w}throw Error("cached value already set")}}}function q5(l){return l===null||l===void 0}function A5(l){let v=l.startsWith("^")?1:0,w=l.endsWith("$")?l.length-1:l.length;return l.slice(v,w)}function sW(l,v){let w=l/v,i=Math.round(w),n=Number.EPSILON*Math.max(Math.abs(w),1);if(Math.abs(w-i)<n)return 0;return w-i}var dW=Symbol("evaluating");function Pg(l,v,w){let i=void 0;Object.defineProperty(l,v,{get(){if(i===dW)return;if(i===void 0)i=dW,i=w();return i},set(n){Object.defineProperty(l,v,{value:n})},configurable:!0})}function Rm(l){return Object.create(Object.getPrototypeOf(l),Object.getOwnPropertyDescriptors(l))}function X0(l,v,w){Object.defineProperty(l,v,{value:w,writable:!0,enumerable:!0,configurable:!0})}function Xv(...l){let v={};for(let w of l){let i=Object.getOwnPropertyDescriptors(w);Object.assign(v,i)}return Object.defineProperties({},v)}function Gm(l){return Xv(l._zod.def)}function Xm(l,v){if(!v)return l;return v.reduce((w,i)=>w?.[i],l)}function Ym(l){let v=Object.keys(l),w=v.map((i)=>l[i]);return Promise.all(w).then((i)=>{let n={};for(let P=0;P<v.length;P++)n[v[P]]=i[P];return n})}function Jm(l=10){let w="";for(let i=0;i<l;i++)w+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return w}function wn(l){return JSON.stringify(l)}function B6(l){return l.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var un="captureStackTrace"in Error?Error.captureStackTrace:(...l)=>{};function yh(l){return typeof l==="object"&&l!==null&&!Array.isArray(l)}var Z6=H5(()=>{if(_h.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(l){return!1}});function K1(l){if(yh(l)===!1)return!1;let v=l.constructor;if(v===void 0)return!0;if(typeof v!=="function")return!0;let w=v.prototype;if(yh(w)===!1)return!1;if(Object.prototype.hasOwnProperty.call(w,"isPrototypeOf")===!1)return!1;return!0}function r9(l){if(K1(l))return{...l};if(Array.isArray(l))return[...l];if(l instanceof Map)return new Map(l);if(l instanceof Set)return new Set(l);return l}function Qm(l){let v=0;for(let w in l)if(Object.prototype.hasOwnProperty.call(l,w))v++;return v}var zm=(l)=>{let v=typeof l;switch(v){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(l)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(l))return"array";if(l===null)return"null";if(l.then&&typeof l.then==="function"&&l.catch&&typeof l.catch==="function")return"promise";if(typeof Map<"u"&&l instanceof Map)return"map";if(typeof Set<"u"&&l instanceof Set)return"set";if(typeof Date<"u"&&l instanceof Date)return"date";if(typeof File<"u"&&l instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${v}`)}},x6=new Set(["string","number","symbol"]),g9=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Yv(l){return l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oe(l,v,w){let i=new l._zod.constr(v??l._zod.def);if(!v||w?.parent)i._zod.parent=l;return i}function _r(l){let v=l;if(!v)return{};if(typeof v==="string")return{error:()=>v};if(v?.message!==void 0){if(v?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");v.error=v.message}if(delete v.message,typeof v.error==="string")return{...v,error:()=>v.error};return v}function mm(l){let v;return new Proxy({},{get(w,i,n){return v??(v=l()),Reflect.get(v,i,n)},set(w,i,n,P){return v??(v=l()),Reflect.set(v,i,n,P)},has(w,i){return v??(v=l()),Reflect.has(v,i)},deleteProperty(w,i){return v??(v=l()),Reflect.deleteProperty(v,i)},ownKeys(w){return v??(v=l()),Reflect.ownKeys(v)},getOwnPropertyDescriptor(w,i){return v??(v=l()),Reflect.getOwnPropertyDescriptor(v,i)},defineProperty(w,i,n){return v??(v=l()),Reflect.defineProperty(v,i,n)}})}function o9(l){if(typeof l==="bigint")return l.toString()+"n";if(typeof l==="string")return`"${l}"`;return`${l}`}function C6(l){return Object.keys(l).filter((v)=>{return l[v]._zod.optin==="optional"&&l[v]._zod.optout==="optional"})}var l9={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},e9={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Km(l,v){let w=l._zod.def,i=w.checks;if(i&&i.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Xv(l._zod.def,{get shape(){let O={};for(let H in v){if(!(H in w.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;O[H]=w.shape[H]}return X0(this,"shape",O),O},checks:[]});return oe(l,P)}function Um(l,v){let w=l._zod.def,i=w.checks;if(i&&i.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Xv(l._zod.def,{get shape(){let O={...l._zod.def.shape};for(let H in v){if(!(H in w.shape))throw Error(`Unrecognized key: "${H}"`);if(!v[H])continue;delete O[H]}return X0(this,"shape",O),O},checks:[]});return oe(l,P)}function $m(l,v){if(!K1(v))throw Error("Invalid input to extend: expected a plain object");let w=l._zod.def.checks;if(w&&w.length>0){let P=l._zod.def.shape;for(let O in v)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let n=Xv(l._zod.def,{get shape(){let P={...l._zod.def.shape,...v};return X0(this,"shape",P),P}});return oe(l,n)}function Lm(l,v){if(!K1(v))throw Error("Invalid input to safeExtend: expected a plain object");let w=Xv(l._zod.def,{get shape(){let i={...l._zod.def.shape,...v};return X0(this,"shape",i),i}});return oe(l,w)}function Im(l,v){if(l._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let w=Xv(l._zod.def,{get shape(){let i={...l._zod.def.shape,...v._zod.def.shape};return X0(this,"shape",i),i},get catchall(){return v._zod.def.catchall},checks:v._zod.def.checks??[]});return oe(l,w)}function Fm(l,v,w){let n=v._zod.def.checks;if(n&&n.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Xv(v._zod.def,{get shape(){let H=v._zod.def.shape,R={...H};if(w)for(let X in w){if(!(X in H))throw Error(`Unrecognized key: "${X}"`);if(!w[X])continue;R[X]=l?new l({type:"optional",innerType:H[X]}):H[X]}else for(let X in H)R[X]=l?new l({type:"optional",innerType:H[X]}):H[X];return X0(this,"shape",R),R},checks:[]});return oe(v,O)}function Nm(l,v,w){let i=Xv(v._zod.def,{get shape(){let n=v._zod.def.shape,P={...n};if(w)for(let O in w){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!w[O])continue;P[O]=new l({type:"nonoptional",innerType:n[O]})}else for(let O in n)P[O]=new l({type:"nonoptional",innerType:n[O]});return X0(this,"shape",P),P}});return oe(v,i)}function Y0(l,v=0){if(l.aborted===!0)return!0;for(let w=v;w<l.issues.length;w++)if(l.issues[w]?.continue!==!0)return!0;return!1}function T6(l,v=0){if(l.aborted===!0)return!0;for(let w=v;w<l.issues.length;w++)if(l.issues[w]?.continue===!1)return!0;return!1}function M5(l,v){return v.map((w)=>{var i;return(i=w).path??(i.path=[]),w.path.unshift(l),w})}function P5(l){return typeof l==="string"?l:l?.message}function De(l,v,w){let i=l.message?l.message:P5(l.inst?._zod.def?.error?.(l))??P5(v?.error?.(l))??P5(w.customError?.(l))??P5(w.localeError?.(l))??"Invalid input",{inst:n,continue:P,input:O,...H}=l;if(H.path??(H.path=[]),H.message=i,v?.reportInput)H.input=O;return H}function v9(l){if(l instanceof Set)return"set";if(l instanceof Map)return"map";if(l instanceof File)return"file";return"unknown"}function W5(l){if(Array.isArray(l))return"array";if(typeof l==="string")return"string";return"unknown"}function Bm(l){let v=typeof l;switch(v){case"number":return Number.isNaN(l)?"nan":"number";case"object":{if(l===null)return"null";if(Array.isArray(l))return"array";let w=l;if(w&&Object.getPrototypeOf(w)!==Object.prototype&&"constructor"in w&&w.constructor)return w.constructor.name}}return v}function ch(...l){let[v,w,i]=l;if(typeof v==="string")return{message:v,code:"custom",input:w,inst:i};return{...v}}function Zm(l){return Object.entries(l).filter(([v,w])=>{return Number.isNaN(Number.parseInt(v,10))}).map((v)=>v[1])}function h9(l){let v=atob(l),w=new Uint8Array(v.length);for(let i=0;i<v.length;i++)w[i]=v.charCodeAt(i);return w}function b9(l){let v="";for(let w=0;w<l.length;w++)v+=String.fromCharCode(l[w]);return btoa(v)}function xm(l){let v=l.replace(/-/g,"+").replace(/_/g,"/"),w="=".repeat((4-v.length%4)%4);return h9(v+w)}function Cm(l){return b9(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Tm(l){let v=l.replace(/^0x/,"");if(v.length%2!==0)throw Error("Invalid hex string length");let w=new Uint8Array(v.length/2);for(let i=0;i<v.length;i+=2)w[i/2]=Number.parseInt(v.slice(i,i+2),16);return w}function Sm(l){return Array.from(l).map((v)=>v.toString(16).padStart(2,"0")).join("")}class w9{constructor(...l){}}var i9=(l,v)=>{l.name="$ZodError",Object.defineProperty(l,"_zod",{value:l._zod,enumerable:!1}),Object.defineProperty(l,"issues",{value:v,enumerable:!1}),l.message=JSON.stringify(v,Eh,2),Object.defineProperty(l,"toString",{value:()=>l.message,enumerable:!1})},nn=E("$ZodError",i9),S6=E("$ZodError",i9,{Parent:Error});function u9(l,v=(w)=>w.message){let w={},i=[];for(let n of l.issues)if(n.path.length>0)w[n.path[0]]=w[n.path[0]]||[],w[n.path[0]].push(v(n));else i.push(v(n));return{formErrors:i,fieldErrors:w}}function n9(l,v=(w)=>w.message){let w={_errors:[]},i=(n,P=[])=>{for(let O of n.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((H)=>i({issues:H},[...P,...O.path]));else if(O.code==="invalid_key")i({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")i({issues:O.issues},[...P,...O.path]);else{let H=[...P,...O.path];if(H.length===0)w._errors.push(v(O));else{let R=w,X=0;while(X<H.length){let G=H[X];if(X!==H.length-1)R[G]=R[G]||{_errors:[]};else R[G]=R[G]||{_errors:[]},R[G]._errors.push(v(O));R=R[G],X++}}}};return i(l),w}var tn=(l)=>(v,w,i,n)=>{let P=i?{...i,async:!1}:{async:!1},O=v._zod.run({value:w,issues:[]},P);if(O instanceof Promise)throw new Rv;if(O.issues.length){let H=new(n?.Err??l)(O.issues.map((R)=>De(R,P,Gv())));throw un(H,n?.callee),H}return O.value};var Pn=(l)=>async(v,w,i,n)=>{let P=i?{...i,async:!0}:{async:!0},O=v._zod.run({value:w,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let H=new(n?.Err??l)(O.issues.map((R)=>De(R,P,Gv())));throw un(H,n?.callee),H}return O.value};var R5=(l)=>(v,w,i)=>{let n=i?{...i,async:!1}:{async:!1},P=v._zod.run({value:w,issues:[]},n);if(P instanceof Promise)throw new Rv;return P.issues.length?{success:!1,error:new(l??nn)(P.issues.map((O)=>De(O,n,Gv())))}:{success:!0,data:P.value}},t9=R5(S6),G5=(l)=>async(v,w,i)=>{let n=i?{...i,async:!0}:{async:!0},P=v._zod.run({value:w,issues:[]},n);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new l(P.issues.map((O)=>De(O,n,Gv())))}:{success:!0,data:P.value}},P9=G5(S6),O9=(l)=>(v,w,i)=>{let n=i?{...i,direction:"backward"}:{direction:"backward"};return tn(l)(v,w,n)};var H9=(l)=>(v,w,i)=>{return tn(l)(v,w,i)};var q9=(l)=>async(v,w,i)=>{let n=i?{...i,direction:"backward"}:{direction:"backward"};return Pn(l)(v,w,n)};var A9=(l)=>async(v,w,i)=>{return Pn(l)(v,w,i)};var M9=(l)=>(v,w,i)=>{let n=i?{...i,direction:"backward"}:{direction:"backward"};return R5(l)(v,w,n)};var W9=(l)=>(v,w,i)=>{return R5(l)(v,w,i)};var R9=(l)=>async(v,w,i)=>{let n=i?{...i,direction:"backward"}:{direction:"backward"};return G5(l)(v,w,n)};var G9=(l)=>async(v,w,i)=>{return G5(l)(v,w,i)};var X9=/^[cC][0-9a-z]{6,}$/,Y9=/^[0-9a-z]+$/,J9=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Q9=/^[0-9a-vA-V]{20}$/,z9=/^[A-Za-z0-9]{27}$/,m9=/^[a-zA-Z0-9_-]{21}$/,K9=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var U9=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,k6=(l)=>{if(!l)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${l}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var $9=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var Dm="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function L9(){return new RegExp(Dm,"u")}var I9=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,F9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var N9=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,B9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Z9=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,D6=/^[A-Za-z0-9_-]*$/;var x9=/^https?$/,C9=/^\+[1-9]\d{6,14}$/,T9="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",S9=new RegExp(`^${T9}$`);function k9(l){return typeof l.precision==="number"?l.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":l.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${l.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function D9(l){return new RegExp(`^${k9(l)}$`)}function V9(l){let v=k9({precision:l.precision}),w=["Z"];if(l.local)w.push("");if(l.offset)w.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let i=`${v}(?:${w.join("|")})`;return new RegExp(`^${T9}T(?:${i})$`)}var _9=(l)=>{let v=l?`[\\s\\S]{${l?.minimum??0},${l?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${v}$`)};var y9=/^[^A-Z]*$/,E9=/^[^a-z]*$/;var Rl=E("$ZodCheck",(l,v)=>{var w;l._zod??(l._zod={}),l._zod.def=v,(w=l._zod).onattach??(w.onattach=[])});var c9=E("$ZodCheckMaxLength",(l,v)=>{var w;Rl.init(l,v),(w=l._zod.def).when??(w.when=(i)=>{let n=i.value;return!q5(n)&&n.length!==void 0}),l._zod.onattach.push((i)=>{let n=i._zod.bag.maximum??Number.POSITIVE_INFINITY;if(v.maximum<n)i._zod.bag.maximum=v.maximum}),l._zod.check=(i)=>{let n=i.value;if(n.length<=v.maximum)return;let O=W5(n);i.issues.push({origin:O,code:"too_big",maximum:v.maximum,inclusive:!0,input:n,inst:l,continue:!v.abort})}}),a9=E("$ZodCheckMinLength",(l,v)=>{var w;Rl.init(l,v),(w=l._zod.def).when??(w.when=(i)=>{let n=i.value;return!q5(n)&&n.length!==void 0}),l._zod.onattach.push((i)=>{let n=i._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(v.minimum>n)i._zod.bag.minimum=v.minimum}),l._zod.check=(i)=>{let n=i.value;if(n.length>=v.minimum)return;let O=W5(n);i.issues.push({origin:O,code:"too_small",minimum:v.minimum,inclusive:!0,input:n,inst:l,continue:!v.abort})}}),j9=E("$ZodCheckLengthEquals",(l,v)=>{var w;Rl.init(l,v),(w=l._zod.def).when??(w.when=(i)=>{let n=i.value;return!q5(n)&&n.length!==void 0}),l._zod.onattach.push((i)=>{let n=i._zod.bag;n.minimum=v.length,n.maximum=v.length,n.length=v.length}),l._zod.check=(i)=>{let n=i.value,P=n.length;if(P===v.length)return;let O=W5(n),H=P>v.length;i.issues.push({origin:O,...H?{code:"too_big",maximum:v.length}:{code:"too_small",minimum:v.length},inclusive:!0,exact:!0,input:i.value,inst:l,continue:!v.abort})}}),X5=E("$ZodCheckStringFormat",(l,v)=>{var w,i;if(Rl.init(l,v),l._zod.onattach.push((n)=>{let P=n._zod.bag;if(P.format=v.format,v.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(v.pattern)}),v.pattern)(w=l._zod).check??(w.check=(n)=>{if(v.pattern.lastIndex=0,v.pattern.test(n.value))return;n.issues.push({origin:"string",code:"invalid_format",format:v.format,input:n.value,...v.pattern?{pattern:v.pattern.toString()}:{},inst:l,continue:!v.abort})});else(i=l._zod).check??(i.check=()=>{})}),f9=E("$ZodCheckRegex",(l,v)=>{X5.init(l,v),l._zod.check=(w)=>{if(v.pattern.lastIndex=0,v.pattern.test(w.value))return;w.issues.push({origin:"string",code:"invalid_format",format:"regex",input:w.value,pattern:v.pattern.toString(),inst:l,continue:!v.abort})}}),p9=E("$ZodCheckLowerCase",(l,v)=>{v.pattern??(v.pattern=y9),X5.init(l,v)}),d9=E("$ZodCheckUpperCase",(l,v)=>{v.pattern??(v.pattern=E9),X5.init(l,v)}),s9=E("$ZodCheckIncludes",(l,v)=>{Rl.init(l,v);let w=Yv(v.includes),i=new RegExp(typeof v.position==="number"?`^.{${v.position}}${w}`:w);v.pattern=i,l._zod.onattach.push((n)=>{let P=n._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(i)}),l._zod.check=(n)=>{if(n.value.includes(v.includes,v.position))return;n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:v.includes,input:n.value,inst:l,continue:!v.abort})}}),r7=E("$ZodCheckStartsWith",(l,v)=>{Rl.init(l,v);let w=new RegExp(`^${Yv(v.prefix)}.*`);v.pattern??(v.pattern=w),l._zod.onattach.push((i)=>{let n=i._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),l._zod.check=(i)=>{if(i.value.startsWith(v.prefix))return;i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:v.prefix,input:i.value,inst:l,continue:!v.abort})}}),g7=E("$ZodCheckEndsWith",(l,v)=>{Rl.init(l,v);let w=new RegExp(`.*${Yv(v.suffix)}$`);v.pattern??(v.pattern=w),l._zod.onattach.push((i)=>{let n=i._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),l._zod.check=(i)=>{if(i.value.endsWith(v.suffix))return;i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:v.suffix,input:i.value,inst:l,continue:!v.abort})}});var o7=E("$ZodCheckOverwrite",(l,v)=>{Rl.init(l,v),l._zod.check=(w)=>{w.value=v.tx(w.value)}});class V6{constructor(l=[]){if(this.content=[],this.indent=0,this)this.args=l}indented(l){this.indent+=1,l(this),this.indent-=1}write(l){if(typeof l==="function"){l(this,{execution:"sync"}),l(this,{execution:"async"});return}let w=l.split(`
`).filter((P)=>P),i=Math.min(...w.map((P)=>P.length-P.trimStart().length)),n=w.map((P)=>P.slice(i)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of n)this.content.push(P)}compile(){let l=Function,v=this?.args,i=[...(this?.content??[""]).map((n)=>`  ${n}`)];return new l(...v,i.join(`
`))}}var e7={major:4,minor:4,patch:3};var yg=E("$ZodType",(l,v)=>{var w;l??(l={}),l._zod.def=v,l._zod.bag=l._zod.bag||{},l._zod.version=e7;let i=[...l._zod.def.checks??[]];if(l._zod.traits.has("$ZodCheck"))i.unshift(l);for(let n of i)for(let P of n._zod.onattach)P(l);if(i.length===0)(w=l._zod).deferred??(w.deferred=[]),l._zod.deferred?.push(()=>{l._zod.run=l._zod.parse});else{let n=(O,H,R)=>{let X=Y0(O),G;for(let A of H){if(A._zod.def.when){if(T6(O))continue;if(!A._zod.def.when(O))continue}else if(X)continue;let Y=O.issues.length,L=A._zod.check(O);if(L instanceof Promise&&R?.async===!1)throw new Rv;if(G||L instanceof Promise)G=(G??Promise.resolve()).then(async()=>{if(await L,O.issues.length===Y)return;if(!X)X=Y0(O,Y)});else{if(O.issues.length===Y)continue;if(!X)X=Y0(O,Y)}}if(G)return G.then(()=>{return O});return O},P=(O,H,R)=>{if(Y0(O))return O.aborted=!0,O;let X=n(H,i,R);if(X instanceof Promise){if(R.async===!1)throw new Rv;return X.then((G)=>l._zod.parse(G,R))}return l._zod.parse(X,R)};l._zod.run=(O,H)=>{if(H.skipChecks)return l._zod.parse(O,H);if(H.direction==="backward"){let X=l._zod.parse({value:O.value,issues:[]},{...H,skipChecks:!0});if(X instanceof Promise)return X.then((G)=>{return P(G,O,H)});return P(X,O,H)}let R=l._zod.parse(O,H);if(R instanceof Promise){if(H.async===!1)throw new Rv;return R.then((X)=>n(X,i,H))}return n(R,i,H)}}Pg(l,"~standard",()=>({validate:(n)=>{try{let P=t9(l,n);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return P9(l,n).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),An=E("$ZodString",(l,v)=>{yg.init(l,v),l._zod.pattern=[...l?._zod.bag?.patterns??[]].pop()??_9(l._zod.bag),l._zod.parse=(w,i)=>{if(v.coerce)try{w.value=String(w.value)}catch(n){}if(typeof w.value==="string")return w;return w.issues.push({expected:"string",code:"invalid_type",input:w.value,inst:l}),w}}),Lg=E("$ZodStringFormat",(l,v)=>{X5.init(l,v),An.init(l,v)}),P7=E("$ZodGUID",(l,v)=>{v.pattern??(v.pattern=U9),Lg.init(l,v)}),O7=E("$ZodUUID",(l,v)=>{if(v.version){let i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[v.version];if(i===void 0)throw Error(`Invalid UUID version: "${v.version}"`);v.pattern??(v.pattern=k6(i))}else v.pattern??(v.pattern=k6());Lg.init(l,v)}),H7=E("$ZodEmail",(l,v)=>{v.pattern??(v.pattern=$9),Lg.init(l,v)}),q7=E("$ZodURL",(l,v)=>{Lg.init(l,v),l._zod.check=(w)=>{try{let i=w.value.trim();if(!v.normalize&&v.protocol?.source===x9.source){if(!/^https?:\/\//i.test(i)){w.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:w.value,inst:l,continue:!v.abort});return}}let n=new URL(i);if(v.hostname){if(v.hostname.lastIndex=0,!v.hostname.test(n.hostname))w.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:v.hostname.source,input:w.value,inst:l,continue:!v.abort})}if(v.protocol){if(v.protocol.lastIndex=0,!v.protocol.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol))w.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:v.protocol.source,input:w.value,inst:l,continue:!v.abort})}if(v.normalize)w.value=n.href;else w.value=i;return}catch(i){w.issues.push({code:"invalid_format",format:"url",input:w.value,inst:l,continue:!v.abort})}}}),A7=E("$ZodEmoji",(l,v)=>{v.pattern??(v.pattern=L9()),Lg.init(l,v)}),M7=E("$ZodNanoID",(l,v)=>{v.pattern??(v.pattern=m9),Lg.init(l,v)}),W7=E("$ZodCUID",(l,v)=>{v.pattern??(v.pattern=X9),Lg.init(l,v)}),R7=E("$ZodCUID2",(l,v)=>{v.pattern??(v.pattern=Y9),Lg.init(l,v)}),G7=E("$ZodULID",(l,v)=>{v.pattern??(v.pattern=J9),Lg.init(l,v)}),X7=E("$ZodXID",(l,v)=>{v.pattern??(v.pattern=Q9),Lg.init(l,v)}),Y7=E("$ZodKSUID",(l,v)=>{v.pattern??(v.pattern=z9),Lg.init(l,v)}),J7=E("$ZodISODateTime",(l,v)=>{v.pattern??(v.pattern=V9(v)),Lg.init(l,v)}),Q7=E("$ZodISODate",(l,v)=>{v.pattern??(v.pattern=S9),Lg.init(l,v)}),z7=E("$ZodISOTime",(l,v)=>{v.pattern??(v.pattern=D9(v)),Lg.init(l,v)}),m7=E("$ZodISODuration",(l,v)=>{v.pattern??(v.pattern=K9),Lg.init(l,v)}),K7=E("$ZodIPv4",(l,v)=>{v.pattern??(v.pattern=I9),Lg.init(l,v),l._zod.bag.format="ipv4"}),U7=E("$ZodIPv6",(l,v)=>{v.pattern??(v.pattern=F9),Lg.init(l,v),l._zod.bag.format="ipv6",l._zod.check=(w)=>{try{new URL(`http://[${w.value}]`)}catch{w.issues.push({code:"invalid_format",format:"ipv6",input:w.value,inst:l,continue:!v.abort})}}});var $7=E("$ZodCIDRv4",(l,v)=>{v.pattern??(v.pattern=N9),Lg.init(l,v)}),L7=E("$ZodCIDRv6",(l,v)=>{v.pattern??(v.pattern=B9),Lg.init(l,v),l._zod.check=(w)=>{let i=w.value.split("/");try{if(i.length!==2)throw Error();let[n,P]=i;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${n}]`)}catch{w.issues.push({code:"invalid_format",format:"cidrv6",input:w.value,inst:l,continue:!v.abort})}}});function I7(l){if(l==="")return!0;if(/\s/.test(l))return!1;if(l.length%4!==0)return!1;try{return atob(l),!0}catch{return!1}}var F7=E("$ZodBase64",(l,v)=>{v.pattern??(v.pattern=Z9),Lg.init(l,v),l._zod.bag.contentEncoding="base64",l._zod.check=(w)=>{if(I7(w.value))return;w.issues.push({code:"invalid_format",format:"base64",input:w.value,inst:l,continue:!v.abort})}});function Vm(l){if(!D6.test(l))return!1;let v=l.replace(/[-_]/g,(i)=>i==="-"?"+":"/"),w=v.padEnd(Math.ceil(v.length/4)*4,"=");return I7(w)}var N7=E("$ZodBase64URL",(l,v)=>{v.pattern??(v.pattern=D6),Lg.init(l,v),l._zod.bag.contentEncoding="base64url",l._zod.check=(w)=>{if(Vm(w.value))return;w.issues.push({code:"invalid_format",format:"base64url",input:w.value,inst:l,continue:!v.abort})}}),B7=E("$ZodE164",(l,v)=>{v.pattern??(v.pattern=C9),Lg.init(l,v)});function _m(l,v=null){try{let w=l.split(".");if(w.length!==3)return!1;let[i]=w;if(!i)return!1;let n=JSON.parse(atob(i));if("typ"in n&&n?.typ!=="JWT")return!1;if(!n.alg)return!1;if(v&&(!("alg"in n)||n.alg!==v))return!1;return!0}catch{return!1}}var Z7=E("$ZodJWT",(l,v)=>{Lg.init(l,v),l._zod.check=(w)=>{if(_m(w.value,v.alg))return;w.issues.push({code:"invalid_format",format:"jwt",input:w.value,inst:l,continue:!v.abort})}});var x7=E("$ZodUnknown",(l,v)=>{yg.init(l,v),l._zod.parse=(w)=>w}),C7=E("$ZodNever",(l,v)=>{yg.init(l,v),l._zod.parse=(w,i)=>{return w.issues.push({expected:"never",code:"invalid_type",input:w.value,inst:l}),w}});function v7(l,v,w){if(l.issues.length)v.issues.push(...M5(w,l.issues));v.value[w]=l.value}var T7=E("$ZodArray",(l,v)=>{yg.init(l,v),l._zod.parse=(w,i)=>{let n=w.value;if(!Array.isArray(n))return w.issues.push({expected:"array",code:"invalid_type",input:n,inst:l}),w;w.value=Array(n.length);let P=[];for(let O=0;O<n.length;O++){let H=n[O],R=v.element._zod.run({value:H,issues:[]},i);if(R instanceof Promise)P.push(R.then((X)=>v7(X,w,O)));else v7(R,w,O)}if(P.length)return Promise.all(P).then(()=>w);return w}});function qn(l,v,w,i,n,P){let O=w in i;if(l.issues.length){if(n&&P&&!O)return;v.issues.push(...M5(w,l.issues))}if(!O&&!n){if(!l.issues.length)v.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[w]});return}if(l.value===void 0){if(O)v.value[w]=void 0}else v.value[w]=l.value}function S7(l){let v=Object.keys(l.shape);for(let i of v)if(!l.shape?.[i]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${i}": expected a Zod schema`);let w=C6(l.shape);return{...l,keys:v,keySet:new Set(v),numKeys:v.length,optionalKeys:new Set(w)}}function k7(l,v,w,i,n,P){let O=[],H=n.keySet,R=n.catchall._zod,X=R.def.type,G=R.optin==="optional",A=R.optout==="optional";for(let Y in v){if(Y==="__proto__")continue;if(H.has(Y))continue;if(X==="never"){O.push(Y);continue}let L=R.run({value:v[Y],issues:[]},i);if(L instanceof Promise)l.push(L.then((S)=>qn(S,w,Y,v,G,A)));else qn(L,w,Y,v,G,A)}if(O.length)w.issues.push({code:"unrecognized_keys",keys:O,input:v,inst:P});if(!l.length)return w;return Promise.all(l).then(()=>{return w})}var ym=E("$ZodObject",(l,v)=>{if(yg.init(l,v),!Object.getOwnPropertyDescriptor(v,"shape")?.get){let H=v.shape;Object.defineProperty(v,"shape",{get:()=>{let R={...H};return Object.defineProperty(v,"shape",{value:R}),R}})}let i=H5(()=>S7(v));Pg(l._zod,"propValues",()=>{let H=v.shape,R={};for(let X in H){let G=H[X]._zod;if(G.values){R[X]??(R[X]=new Set);for(let A of G.values)R[X].add(A)}}return R});let n=yh,P=v.catchall,O;l._zod.parse=(H,R)=>{O??(O=i.value);let X=H.value;if(!n(X))return H.issues.push({expected:"object",code:"invalid_type",input:X,inst:l}),H;H.value={};let G=[],A=O.shape;for(let Y of O.keys){let L=A[Y],S=L._zod.optin==="optional",T=L._zod.optout==="optional",_=L._zod.run({value:X[Y],issues:[]},R);if(_ instanceof Promise)G.push(_.then((rr)=>qn(rr,H,Y,X,S,T)));else qn(_,H,Y,X,S,T)}if(!P)return G.length?Promise.all(G).then(()=>H):H;return k7(G,X,H,R,i.value,l)}}),D7=E("$ZodObjectJIT",(l,v)=>{ym.init(l,v);let w=l._zod.parse,i=H5(()=>S7(v)),n=(Y)=>{let L=new V6(["shape","payload","ctx"]),S=i.value,T=(er)=>{let a=wn(er);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};L.write("const input = payload.value;");let _=Object.create(null),rr=0;for(let er of S.keys)_[er]=`key_${rr++}`;L.write("const newResult = {};");for(let er of S.keys){let a=_[er],p=wn(er),lr=Y[er],B=lr?._zod?.optin==="optional",y=lr?._zod?.optout==="optional";if(L.write(`const ${a} = ${T(er)};`),B&&y)L.write(`
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
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let nr=L.compile();return(er,a)=>nr(Y,er,a)},P,O=yh,H=!_h.jitless,X=H&&Z6.value,G=v.catchall,A;l._zod.parse=(Y,L)=>{A??(A=i.value);let S=Y.value;if(!O(S))return Y.issues.push({expected:"object",code:"invalid_type",input:S,inst:l}),Y;if(H&&X&&L?.async===!1&&L.jitless!==!0){if(!P)P=n(v.shape);if(Y=P(Y,L),!G)return Y;return k7([],S,Y,L,A,l)}return w(Y,L)}});function h7(l,v,w,i){for(let P of l)if(P.issues.length===0)return v.value=P.value,v;let n=l.filter((P)=>!Y0(P));if(n.length===1)return v.value=n[0].value,n[0];return v.issues.push({code:"invalid_union",input:v.value,inst:w,errors:l.map((P)=>P.issues.map((O)=>De(O,i,Gv())))}),v}var V7=E("$ZodUnion",(l,v)=>{yg.init(l,v),Pg(l._zod,"optin",()=>v.options.some((i)=>i._zod.optin==="optional")?"optional":void 0),Pg(l._zod,"optout",()=>v.options.some((i)=>i._zod.optout==="optional")?"optional":void 0),Pg(l._zod,"values",()=>{if(v.options.every((i)=>i._zod.values))return new Set(v.options.flatMap((i)=>Array.from(i._zod.values)));return}),Pg(l._zod,"pattern",()=>{if(v.options.every((i)=>i._zod.pattern)){let i=v.options.map((n)=>n._zod.pattern);return new RegExp(`^(${i.map((n)=>A5(n.source)).join("|")})$`)}return});let w=v.options.length===1?v.options[0]._zod.run:null;l._zod.parse=(i,n)=>{if(w)return w(i,n);let P=!1,O=[];for(let H of v.options){let R=H._zod.run({value:i.value,issues:[]},n);if(R instanceof Promise)O.push(R),P=!0;else{if(R.issues.length===0)return R;O.push(R)}}if(!P)return h7(O,i,l,n);return Promise.all(O).then((H)=>{return h7(H,i,l,n)})}});var _7=E("$ZodIntersection",(l,v)=>{yg.init(l,v),l._zod.parse=(w,i)=>{let n=w.value,P=v.left._zod.run({value:n,issues:[]},i),O=v.right._zod.run({value:n,issues:[]},i);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([R,X])=>{return b7(w,R,X)});return b7(w,P,O)}});function _6(l,v){if(l===v)return{valid:!0,data:l};if(l instanceof Date&&v instanceof Date&&+l===+v)return{valid:!0,data:l};if(K1(l)&&K1(v)){let w=Object.keys(v),i=Object.keys(l).filter((P)=>w.indexOf(P)!==-1),n={...l,...v};for(let P of i){let O=_6(l[P],v[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};n[P]=O.data}return{valid:!0,data:n}}if(Array.isArray(l)&&Array.isArray(v)){if(l.length!==v.length)return{valid:!1,mergeErrorPath:[]};let w=[];for(let i=0;i<l.length;i++){let n=l[i],P=v[i],O=_6(n,P);if(!O.valid)return{valid:!1,mergeErrorPath:[i,...O.mergeErrorPath]};w.push(O.data)}return{valid:!0,data:w}}return{valid:!1,mergeErrorPath:[]}}function b7(l,v,w){let i=new Map,n;for(let H of v.issues)if(H.code==="unrecognized_keys"){n??(n=H);for(let R of H.keys){if(!i.has(R))i.set(R,{});i.get(R).l=!0}}else l.issues.push(H);for(let H of w.issues)if(H.code==="unrecognized_keys")for(let R of H.keys){if(!i.has(R))i.set(R,{});i.get(R).r=!0}else l.issues.push(H);let P=[...i].filter(([,H])=>H.l&&H.r).map(([H])=>H);if(P.length&&n)l.issues.push({...n,keys:P});if(Y0(l))return l;let O=_6(v.value,w.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return l.value=O.data,l}var y7=E("$ZodEnum",(l,v)=>{yg.init(l,v);let w=O5(v.entries),i=new Set(w);l._zod.values=i,l._zod.pattern=new RegExp(`^(${w.filter((n)=>x6.has(typeof n)).map((n)=>typeof n==="string"?Yv(n):n.toString()).join("|")})$`),l._zod.parse=(n,P)=>{let O=n.value;if(i.has(O))return n;return n.issues.push({code:"invalid_value",values:w,input:O,inst:l}),n}}),E7=E("$ZodLiteral",(l,v)=>{if(yg.init(l,v),v.values.length===0)throw Error("Cannot create literal schema with no valid values");let w=new Set(v.values);l._zod.values=w,l._zod.pattern=new RegExp(`^(${v.values.map((i)=>typeof i==="string"?Yv(i):i?Yv(i.toString()):String(i)).join("|")})$`),l._zod.parse=(i,n)=>{let P=i.value;if(w.has(P))return i;return i.issues.push({code:"invalid_value",values:v.values,input:P,inst:l}),i}});var c7=E("$ZodTransform",(l,v)=>{yg.init(l,v),l._zod.optin="optional",l._zod.parse=(w,i)=>{if(i.direction==="backward")throw new t5(l.constructor.name);let n=v.transform(w.value,w);if(i.async)return(n instanceof Promise?n:Promise.resolve(n)).then((O)=>{return w.value=O,w.fallback=!0,w});if(n instanceof Promise)throw new Rv;return w.value=n,w.fallback=!0,w}});function w7(l,v){if(v===void 0&&(l.issues.length||l.fallback))return{issues:[],value:void 0};return l}var y6=E("$ZodOptional",(l,v)=>{yg.init(l,v),l._zod.optin="optional",l._zod.optout="optional",Pg(l._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,void 0]):void 0}),Pg(l._zod,"pattern",()=>{let w=v.innerType._zod.pattern;return w?new RegExp(`^(${A5(w.source)})?$`):void 0}),l._zod.parse=(w,i)=>{if(v.innerType._zod.optin==="optional"){let n=w.value,P=v.innerType._zod.run(w,i);if(P instanceof Promise)return P.then((O)=>w7(O,n));return w7(P,n)}if(w.value===void 0)return w;return v.innerType._zod.run(w,i)}}),a7=E("$ZodExactOptional",(l,v)=>{y6.init(l,v),Pg(l._zod,"values",()=>v.innerType._zod.values),Pg(l._zod,"pattern",()=>v.innerType._zod.pattern),l._zod.parse=(w,i)=>{return v.innerType._zod.run(w,i)}}),j7=E("$ZodNullable",(l,v)=>{yg.init(l,v),Pg(l._zod,"optin",()=>v.innerType._zod.optin),Pg(l._zod,"optout",()=>v.innerType._zod.optout),Pg(l._zod,"pattern",()=>{let w=v.innerType._zod.pattern;return w?new RegExp(`^(${A5(w.source)}|null)$`):void 0}),Pg(l._zod,"values",()=>{return v.innerType._zod.values?new Set([...v.innerType._zod.values,null]):void 0}),l._zod.parse=(w,i)=>{if(w.value===null)return w;return v.innerType._zod.run(w,i)}}),f7=E("$ZodDefault",(l,v)=>{yg.init(l,v),l._zod.optin="optional",Pg(l._zod,"values",()=>v.innerType._zod.values),l._zod.parse=(w,i)=>{if(i.direction==="backward")return v.innerType._zod.run(w,i);if(w.value===void 0)return w.value=v.defaultValue,w;let n=v.innerType._zod.run(w,i);if(n instanceof Promise)return n.then((P)=>i7(P,v));return i7(n,v)}});function i7(l,v){if(l.value===void 0)l.value=v.defaultValue;return l}var p7=E("$ZodPrefault",(l,v)=>{yg.init(l,v),l._zod.optin="optional",Pg(l._zod,"values",()=>v.innerType._zod.values),l._zod.parse=(w,i)=>{if(i.direction==="backward")return v.innerType._zod.run(w,i);if(w.value===void 0)w.value=v.defaultValue;return v.innerType._zod.run(w,i)}}),d7=E("$ZodNonOptional",(l,v)=>{yg.init(l,v),Pg(l._zod,"values",()=>{let w=v.innerType._zod.values;return w?new Set([...w].filter((i)=>i!==void 0)):void 0}),l._zod.parse=(w,i)=>{let n=v.innerType._zod.run(w,i);if(n instanceof Promise)return n.then((P)=>u7(P,l));return u7(n,l)}});function u7(l,v){if(!l.issues.length&&l.value===void 0)l.issues.push({code:"invalid_type",expected:"nonoptional",input:l.value,inst:v});return l}var s7=E("$ZodCatch",(l,v)=>{yg.init(l,v),l._zod.optin="optional",Pg(l._zod,"optout",()=>v.innerType._zod.optout),Pg(l._zod,"values",()=>v.innerType._zod.values),l._zod.parse=(w,i)=>{if(i.direction==="backward")return v.innerType._zod.run(w,i);let n=v.innerType._zod.run(w,i);if(n instanceof Promise)return n.then((P)=>{if(w.value=P.value,P.issues.length)w.value=v.catchValue({...w,error:{issues:P.issues.map((O)=>De(O,i,Gv()))},input:w.value}),w.issues=[],w.fallback=!0;return w});if(w.value=n.value,n.issues.length)w.value=v.catchValue({...w,error:{issues:n.issues.map((P)=>De(P,i,Gv()))},input:w.value}),w.issues=[],w.fallback=!0;return w}});var rR=E("$ZodPipe",(l,v)=>{yg.init(l,v),Pg(l._zod,"values",()=>v.in._zod.values),Pg(l._zod,"optin",()=>v.in._zod.optin),Pg(l._zod,"optout",()=>v.out._zod.optout),Pg(l._zod,"propValues",()=>v.in._zod.propValues),l._zod.parse=(w,i)=>{if(i.direction==="backward"){let P=v.out._zod.run(w,i);if(P instanceof Promise)return P.then((O)=>Hn(O,v.in,i));return Hn(P,v.in,i)}let n=v.in._zod.run(w,i);if(n instanceof Promise)return n.then((P)=>Hn(P,v.out,i));return Hn(n,v.out,i)}});function Hn(l,v,w){if(l.issues.length)return l.aborted=!0,l;return v._zod.run({value:l.value,issues:l.issues,fallback:l.fallback},w)}var gR=E("$ZodReadonly",(l,v)=>{yg.init(l,v),Pg(l._zod,"propValues",()=>v.innerType._zod.propValues),Pg(l._zod,"values",()=>v.innerType._zod.values),Pg(l._zod,"optin",()=>v.innerType?._zod?.optin),Pg(l._zod,"optout",()=>v.innerType?._zod?.optout),l._zod.parse=(w,i)=>{if(i.direction==="backward")return v.innerType._zod.run(w,i);let n=v.innerType._zod.run(w,i);if(n instanceof Promise)return n.then(n7);return n7(n)}});function n7(l){return l.value=Object.freeze(l.value),l}var oR=E("$ZodCustom",(l,v)=>{Rl.init(l,v),yg.init(l,v),l._zod.parse=(w,i)=>{return w},l._zod.check=(w)=>{let i=w.value,n=v.fn(i);if(n instanceof Promise)return n.then((P)=>t7(P,w,i,l));t7(n,w,i,l);return}});function t7(l,v,w,i){if(!l){let n={code:"custom",input:w,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};if(i._zod.def.params)n.params=i._zod.def.params;v.issues.push(ch(n))}}var lR,D_g=Symbol("ZodOutput"),V_g=Symbol("ZodInput");class eR{constructor(){this._map=new WeakMap,this._idmap=new Map}add(l,...v){let w=v[0];if(this._map.set(l,w),w&&typeof w==="object"&&"id"in w)this._idmap.set(w.id,l);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(l){let v=this._map.get(l);if(v&&typeof v==="object"&&"id"in v)this._idmap.delete(v.id);return this._map.delete(l),this}get(l){let v=l._zod.parent;if(v){let w={...this.get(v)??{}};delete w.id;let i={...w,...this._map.get(l)};return Object.keys(i).length?i:void 0}return this._map.get(l)}has(l){return this._map.has(l)}}function Em(){return new eR}(lR=globalThis).__zod_globalRegistry??(lR.__zod_globalRegistry=Em());var U1=globalThis.__zod_globalRegistry;function vR(l,v){return new l({type:"string",..._r(v)})}function hR(l,v){return new l({type:"string",format:"email",check:"string_format",abort:!1,..._r(v)})}function E6(l,v){return new l({type:"string",format:"guid",check:"string_format",abort:!1,..._r(v)})}function bR(l,v){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(v)})}function wR(l,v){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(v)})}function iR(l,v){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(v)})}function uR(l,v){return new l({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(v)})}function nR(l,v){return new l({type:"string",format:"url",check:"string_format",abort:!1,..._r(v)})}function tR(l,v){return new l({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(v)})}function PR(l,v){return new l({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(v)})}function OR(l,v){return new l({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(v)})}function HR(l,v){return new l({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(v)})}function qR(l,v){return new l({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(v)})}function AR(l,v){return new l({type:"string",format:"xid",check:"string_format",abort:!1,..._r(v)})}function MR(l,v){return new l({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(v)})}function WR(l,v){return new l({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(v)})}function RR(l,v){return new l({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(v)})}function GR(l,v){return new l({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(v)})}function XR(l,v){return new l({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(v)})}function YR(l,v){return new l({type:"string",format:"base64",check:"string_format",abort:!1,..._r(v)})}function JR(l,v){return new l({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(v)})}function QR(l,v){return new l({type:"string",format:"e164",check:"string_format",abort:!1,..._r(v)})}function zR(l,v){return new l({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(v)})}function mR(l,v){return new l({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(v)})}function KR(l,v){return new l({type:"string",format:"date",check:"string_format",..._r(v)})}function UR(l,v){return new l({type:"string",format:"time",check:"string_format",precision:null,..._r(v)})}function $R(l,v){return new l({type:"string",format:"duration",check:"string_format",..._r(v)})}function LR(l){return new l({type:"unknown"})}function IR(l,v){return new l({type:"never",..._r(v)})}function Mn(l,v){return new c9({check:"max_length",..._r(v),maximum:l})}function ah(l,v){return new a9({check:"min_length",..._r(v),minimum:l})}function Wn(l,v){return new j9({check:"length_equals",..._r(v),length:l})}function c6(l,v){return new f9({check:"string_format",format:"regex",..._r(v),pattern:l})}function a6(l){return new p9({check:"string_format",format:"lowercase",..._r(l)})}function j6(l){return new d9({check:"string_format",format:"uppercase",..._r(l)})}function f6(l,v){return new s9({check:"string_format",format:"includes",..._r(v),includes:l})}function p6(l,v){return new r7({check:"string_format",format:"starts_with",..._r(v),prefix:l})}function d6(l,v){return new g7({check:"string_format",format:"ends_with",..._r(v),suffix:l})}function J0(l){return new o7({check:"overwrite",tx:l})}function s6(l){return J0((v)=>v.normalize(l))}function r8(){return J0((l)=>l.trim())}function g8(){return J0((l)=>l.toLowerCase())}function o8(){return J0((l)=>l.toUpperCase())}function l8(){return J0((l)=>B6(l))}function FR(l,v,w){return new l({type:"array",element:v,..._r(w)})}function NR(l,v,w){return new l({type:"custom",check:"custom",fn:v,..._r(w)})}function BR(l,v){let w=cm((i)=>{return i.addIssue=(n)=>{if(typeof n==="string")i.issues.push(ch(n,i.value,w._zod.def));else{let P=n;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=i.value),P.inst??(P.inst=w),P.continue??(P.continue=!w._zod.def.abort),i.issues.push(ch(P))}},l(i.value,i)},v);return w}function cm(l,v){let w=new Rl({check:"custom",..._r(v)});return w._zod.check=l,w}function e8(l){let v=l?.target??"draft-2020-12";if(v==="draft-4")v="draft-04";if(v==="draft-7")v="draft-07";return{processors:l.processors??{},metadataRegistry:l?.metadata??U1,target:v,unrepresentable:l?.unrepresentable??"throw",override:l?.override??(()=>{}),io:l?.io??"output",counter:0,seen:new Map,cycles:l?.cycles??"ref",reused:l?.reused??"inline",external:l?.external??void 0}}function no(l,v,w={path:[],schemaPath:[]}){var i;let n=l._zod.def,P=v.seen.get(l);if(P){if(P.count++,w.schemaPath.includes(l))P.cycle=w.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:w.path};v.seen.set(l,O);let H=l._zod.toJSONSchema?.();if(H)O.schema=H;else{let G={...w,schemaPath:[...w.schemaPath,l],path:w.path};if(l._zod.processJSONSchema)l._zod.processJSONSchema(v,O.schema,G);else{let Y=O.schema,L=v.processors[n.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);L(l,v,Y,G)}let A=l._zod.parent;if(A){if(!O.ref)O.ref=A;no(A,v,G),v.seen.get(A).isParent=!0}}let R=v.metadataRegistry.get(l);if(R)Object.assign(O.schema,R);if(v.io==="input"&&Do(l))delete O.schema.examples,delete O.schema.default;if(v.io==="input"&&"_prefault"in O.schema)(i=O.schema).default??(i.default=O.schema._prefault);return delete O.schema._prefault,v.seen.get(l).schema}function v8(l,v){let w=l.seen.get(v);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let i=new Map;for(let O of l.seen.entries()){let H=l.metadataRegistry.get(O[0])?.id;if(H){let R=i.get(H);if(R&&R!==O[0])throw Error(`Duplicate schema id "${H}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(H,O[0])}}let n=(O)=>{let H=l.target==="draft-2020-12"?"$defs":"definitions";if(l.external){let A=l.external.registry.get(O[0])?.id,Y=l.external.uri??((S)=>S);if(A)return{ref:Y(A)};let L=O[1].defId??O[1].schema.id??`schema${l.counter++}`;return O[1].defId=L,{defId:L,ref:`${Y("__shared")}#/${H}/${L}`}}if(O[1]===w)return{ref:"#"};let X=`${"#"}/${H}/`,G=O[1].schema.id??`__schema${l.counter++}`;return{defId:G,ref:X+G}},P=(O)=>{if(O[1].schema.$ref)return;let H=O[1],{ref:R,defId:X}=n(O);if(H.def={...H.schema},X)H.defId=X;let G=H.schema;for(let A in G)delete G[A];G.$ref=R};if(l.cycles==="throw")for(let O of l.seen.entries()){let H=O[1];if(H.cycle)throw Error(`Cycle detected: #/${H.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of l.seen.entries()){let H=O[1];if(v===O[0]){P(O);continue}if(l.external){let X=l.external.registry.get(O[0])?.id;if(v!==O[0]&&X){P(O);continue}}if(l.metadataRegistry.get(O[0])?.id){P(O);continue}if(H.cycle){P(O);continue}if(H.count>1){if(l.reused==="ref"){P(O);continue}}}}function h8(l,v){let w=l.seen.get(v);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let i=(H)=>{let R=l.seen.get(H);if(R.ref===null)return;let X=R.def??R.schema,G={...X},A=R.ref;if(R.ref=null,A){i(A);let L=l.seen.get(A),S=L.schema;if(S.$ref&&(l.target==="draft-07"||l.target==="draft-04"||l.target==="openapi-3.0"))X.allOf=X.allOf??[],X.allOf.push(S);else Object.assign(X,S);if(Object.assign(X,G),H._zod.parent===A)for(let _ in X){if(_==="$ref"||_==="allOf")continue;if(!(_ in G))delete X[_]}if(S.$ref&&L.def)for(let _ in X){if(_==="$ref"||_==="allOf")continue;if(_ in L.def&&JSON.stringify(X[_])===JSON.stringify(L.def[_]))delete X[_]}}let Y=H._zod.parent;if(Y&&Y!==A){i(Y);let L=l.seen.get(Y);if(L?.schema.$ref){if(X.$ref=L.schema.$ref,L.def)for(let S in X){if(S==="$ref"||S==="allOf")continue;if(S in L.def&&JSON.stringify(X[S])===JSON.stringify(L.def[S]))delete X[S]}}}l.override({zodSchema:H,jsonSchema:X,path:R.path??[]})};for(let H of[...l.seen.entries()].reverse())i(H[0]);let n={};if(l.target==="draft-2020-12")n.$schema="https://json-schema.org/draft/2020-12/schema";else if(l.target==="draft-07")n.$schema="http://json-schema.org/draft-07/schema#";else if(l.target==="draft-04")n.$schema="http://json-schema.org/draft-04/schema#";else if(l.target==="openapi-3.0");if(l.external?.uri){let H=l.external.registry.get(v)?.id;if(!H)throw Error("Schema is missing an `id` property");n.$id=l.external.uri(H)}Object.assign(n,w.def??w.schema);let P=l.metadataRegistry.get(v)?.id;if(P!==void 0&&n.id===P)delete n.id;let O=l.external?.defs??{};for(let H of l.seen.entries()){let R=H[1];if(R.def&&R.defId){if(R.def.id===R.defId)delete R.def.id;O[R.defId]=R.def}}if(l.external);else if(Object.keys(O).length>0)if(l.target==="draft-2020-12")n.$defs=O;else n.definitions=O;try{let H=JSON.parse(JSON.stringify(n));return Object.defineProperty(H,"~standard",{value:{...v["~standard"],jsonSchema:{input:Y5(v,"input",l.processors),output:Y5(v,"output",l.processors)}},enumerable:!1,writable:!1}),H}catch(H){throw Error("Error converting schema to JSON.")}}function Do(l,v){let w=v??{seen:new Set};if(w.seen.has(l))return!1;w.seen.add(l);let i=l._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return Do(i.element,w);if(i.type==="set")return Do(i.valueType,w);if(i.type==="lazy")return Do(i.getter(),w);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault")return Do(i.innerType,w);if(i.type==="intersection")return Do(i.left,w)||Do(i.right,w);if(i.type==="record"||i.type==="map")return Do(i.keyType,w)||Do(i.valueType,w);if(i.type==="pipe"){if(l._zod.traits.has("$ZodCodec"))return!0;return Do(i.in,w)||Do(i.out,w)}if(i.type==="object"){for(let n in i.shape)if(Do(i.shape[n],w))return!0;return!1}if(i.type==="union"){for(let n of i.options)if(Do(n,w))return!0;return!1}if(i.type==="tuple"){for(let n of i.items)if(Do(n,w))return!0;if(i.rest&&Do(i.rest,w))return!0;return!1}return!1}var ZR=(l,v={})=>(w)=>{let i=e8({...w,processors:v});return no(l,i),v8(i,l),h8(i,l)},Y5=(l,v,w={})=>(i)=>{let{libraryOptions:n,target:P}=i??{},O=e8({...n??{},target:P,io:v,processors:w});return no(l,O),v8(O,l),h8(O,l)};var am={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},xR=(l,v,w,i)=>{let n=w;n.type="string";let{minimum:P,maximum:O,format:H,patterns:R,contentEncoding:X}=l._zod.bag;if(typeof P==="number")n.minLength=P;if(typeof O==="number")n.maxLength=O;if(H){if(n.format=am[H]??H,n.format==="")delete n.format;if(H==="time")delete n.format}if(X)n.contentEncoding=X;if(R&&R.size>0){let G=[...R];if(G.length===1)n.pattern=G[0].source;else if(G.length>1)n.allOf=[...G.map((A)=>({...v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"?{type:"string"}:{},pattern:A.source}))]}};var CR=(l,v,w,i)=>{w.not={}};var TR=(l,v,w,i)=>{};var SR=(l,v,w,i)=>{let n=l._zod.def,P=O5(n.entries);if(P.every((O)=>typeof O==="number"))w.type="number";if(P.every((O)=>typeof O==="string"))w.type="string";w.enum=P},kR=(l,v,w,i)=>{let n=l._zod.def,P=[];for(let O of n.values)if(O===void 0){if(v.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(v.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(w.type=O===null?"null":typeof O,v.target==="draft-04"||v.target==="openapi-3.0")w.enum=[O];else w.const=O}else{if(P.every((O)=>typeof O==="number"))w.type="number";if(P.every((O)=>typeof O==="string"))w.type="string";if(P.every((O)=>typeof O==="boolean"))w.type="boolean";if(P.every((O)=>O===null))w.type="null";w.enum=P}};var DR=(l,v,w,i)=>{if(v.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var VR=(l,v,w,i)=>{if(v.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var _R=(l,v,w,i)=>{let n=w,P=l._zod.def,{minimum:O,maximum:H}=l._zod.bag;if(typeof O==="number")n.minItems=O;if(typeof H==="number")n.maxItems=H;n.type="array",n.items=no(P.element,v,{...i,path:[...i.path,"items"]})},yR=(l,v,w,i)=>{let n=w,P=l._zod.def;n.type="object",n.properties={};let O=P.shape;for(let X in O)n.properties[X]=no(O[X],v,{...i,path:[...i.path,"properties",X]});let H=new Set(Object.keys(O)),R=new Set([...H].filter((X)=>{let G=P.shape[X]._zod;if(v.io==="input")return G.optin===void 0;else return G.optout===void 0}));if(R.size>0)n.required=Array.from(R);if(P.catchall?._zod.def.type==="never")n.additionalProperties=!1;else if(!P.catchall){if(v.io==="output")n.additionalProperties=!1}else if(P.catchall)n.additionalProperties=no(P.catchall,v,{...i,path:[...i.path,"additionalProperties"]})},ER=(l,v,w,i)=>{let n=l._zod.def,P=n.inclusive===!1,O=n.options.map((H,R)=>no(H,v,{...i,path:[...i.path,P?"oneOf":"anyOf",R]}));if(P)w.oneOf=O;else w.anyOf=O},cR=(l,v,w,i)=>{let n=l._zod.def,P=no(n.left,v,{...i,path:[...i.path,"allOf",0]}),O=no(n.right,v,{...i,path:[...i.path,"allOf",1]}),H=(X)=>("allOf"in X)&&Object.keys(X).length===1,R=[...H(P)?P.allOf:[P],...H(O)?O.allOf:[O]];w.allOf=R};var aR=(l,v,w,i)=>{let n=l._zod.def,P=no(n.innerType,v,i),O=v.seen.get(l);if(v.target==="openapi-3.0")O.ref=n.innerType,w.nullable=!0;else w.anyOf=[P,{type:"null"}]},jR=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);P.ref=n.innerType},fR=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);P.ref=n.innerType,w.default=JSON.parse(JSON.stringify(n.defaultValue))},pR=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);if(P.ref=n.innerType,v.io==="input")w._prefault=JSON.parse(JSON.stringify(n.defaultValue))},dR=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);P.ref=n.innerType;let O;try{O=n.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}w.default=O},sR=(l,v,w,i)=>{let n=l._zod.def,P=n.in._zod.traits.has("$ZodTransform"),O=v.io==="input"?P?n.out:n.in:n.out;no(O,v,i);let H=v.seen.get(l);H.ref=O},r3=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);P.ref=n.innerType,w.readOnly=!0};var b8=(l,v,w,i)=>{let n=l._zod.def;no(n.innerType,v,i);let P=v.seen.get(l);P.ref=n.innerType};var hK=E("ZodISODateTime",(l,v)=>{J7.init(l,v),Ng.init(l,v)});function g3(l){return mR(hK,l)}var bK=E("ZodISODate",(l,v)=>{Q7.init(l,v),Ng.init(l,v)});function o3(l){return KR(bK,l)}var wK=E("ZodISOTime",(l,v)=>{z7.init(l,v),Ng.init(l,v)});function l3(l){return UR(wK,l)}var iK=E("ZodISODuration",(l,v)=>{m7.init(l,v),Ng.init(l,v)});function e3(l){return $R(iK,l)}var tK=(l,v)=>{nn.init(l,v),l.name="ZodError",Object.defineProperties(l,{format:{value:(w)=>n9(l,w)},flatten:{value:(w)=>u9(l,w)},addIssue:{value:(w)=>{l.issues.push(w),l.message=JSON.stringify(l.issues,Eh,2)}},addIssues:{value:(w)=>{l.issues.push(...w),l.message=JSON.stringify(l.issues,Eh,2)}},isEmpty:{get(){return l.issues.length===0}}})};var Gl=E("ZodError",tK,{Parent:Error});var v3=tn(Gl),h3=Pn(Gl),b3=R5(Gl),w3=G5(Gl),i3=O9(Gl),u3=H9(Gl),n3=q9(Gl),t3=A9(Gl),P3=M9(Gl),O3=W9(Gl),H3=R9(Gl),q3=G9(Gl);var A3=new WeakMap;function Xn(l,v,w){let i=Object.getPrototypeOf(l),n=A3.get(i);if(!n)n=new Set,A3.set(i,n);if(n.has(v))return;n.add(v);for(let P in w){let O=w[P];Object.defineProperty(i,P,{configurable:!0,enumerable:!1,get(){let H=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H}),H},set(H){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:H})}})}}var oo=E("ZodType",(l,v)=>{return yg.init(l,v),Object.assign(l["~standard"],{jsonSchema:{input:Y5(l,"input"),output:Y5(l,"output")}}),l.toJSONSchema=ZR(l,{}),l.def=v,l.type=v.type,Object.defineProperty(l,"_def",{value:v}),l.parse=(w,i)=>v3(l,w,i,{callee:l.parse}),l.safeParse=(w,i)=>b3(l,w,i),l.parseAsync=async(w,i)=>h3(l,w,i,{callee:l.parseAsync}),l.safeParseAsync=async(w,i)=>w3(l,w,i),l.spa=l.safeParseAsync,l.encode=(w,i)=>i3(l,w,i),l.decode=(w,i)=>u3(l,w,i),l.encodeAsync=async(w,i)=>n3(l,w,i),l.decodeAsync=async(w,i)=>t3(l,w,i),l.safeEncode=(w,i)=>P3(l,w,i),l.safeDecode=(w,i)=>O3(l,w,i),l.safeEncodeAsync=async(w,i)=>H3(l,w,i),l.safeDecodeAsync=async(w,i)=>q3(l,w,i),Xn(l,"ZodType",{check(...w){let i=this.def;return this.clone(Og.mergeDefs(i,{checks:[...i.checks??[],...w.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...w){return this.check(...w)},clone(w,i){return oe(this,w,i)},brand(){return this},register(w,i){return w.add(this,i),this},refine(w,i){return this.check(eU(w,i))},superRefine(w,i){return this.check(vU(w,i))},overwrite(w){return this.check(J0(w))},optional(){return R3(this)},exactOptional(){return yK(this)},nullable(){return G3(this)},nullish(){return R3(G3(this))},nonoptional(w){return pK(this,w)},array(){return Jv(this)},or(w){return CK([this,w])},and(w){return SK(this,w)},transform(w){return X3(this,VK(w))},default(w){return aK(this,w)},prefault(w){return fK(this,w)},catch(w){return sK(this,w)},pipe(w){return X3(this,w)},readonly(){return oU(this)},describe(w){let i=this.clone();return U1.add(i,{description:w}),i},meta(...w){if(w.length===0)return U1.get(this);let i=this.clone();return U1.add(i,w[0]),i},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(w){return w(this)}}),Object.defineProperty(l,"description",{get(){return U1.get(l)?.description},configurable:!0}),l}),Y3=E("_ZodString",(l,v)=>{An.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(i,n,P)=>xR(l,i,n,P);let w=l._zod.bag;l.format=w.format??null,l.minLength=w.minimum??null,l.maxLength=w.maximum??null,Xn(l,"_ZodString",{regex(...i){return this.check(c6(...i))},includes(...i){return this.check(f6(...i))},startsWith(...i){return this.check(p6(...i))},endsWith(...i){return this.check(d6(...i))},min(...i){return this.check(ah(...i))},max(...i){return this.check(Mn(...i))},length(...i){return this.check(Wn(...i))},nonempty(...i){return this.check(ah(1,...i))},lowercase(i){return this.check(a6(i))},uppercase(i){return this.check(j6(i))},trim(){return this.check(r8())},normalize(...i){return this.check(s6(...i))},toLowerCase(){return this.check(g8())},toUpperCase(){return this.check(o8())},slugify(){return this.check(l8())}})}),OK=E("ZodString",(l,v)=>{An.init(l,v),Y3.init(l,v),l.email=(w)=>l.check(hR(HK,w)),l.url=(w)=>l.check(nR(qK,w)),l.jwt=(w)=>l.check(zR(LK,w)),l.emoji=(w)=>l.check(tR(AK,w)),l.guid=(w)=>l.check(E6(M3,w)),l.uuid=(w)=>l.check(bR(Gn,w)),l.uuidv4=(w)=>l.check(wR(Gn,w)),l.uuidv6=(w)=>l.check(iR(Gn,w)),l.uuidv7=(w)=>l.check(uR(Gn,w)),l.nanoid=(w)=>l.check(PR(MK,w)),l.guid=(w)=>l.check(E6(M3,w)),l.cuid=(w)=>l.check(OR(WK,w)),l.cuid2=(w)=>l.check(HR(RK,w)),l.ulid=(w)=>l.check(qR(GK,w)),l.base64=(w)=>l.check(YR(KK,w)),l.base64url=(w)=>l.check(JR(UK,w)),l.xid=(w)=>l.check(AR(XK,w)),l.ksuid=(w)=>l.check(MR(YK,w)),l.ipv4=(w)=>l.check(WR(JK,w)),l.ipv6=(w)=>l.check(RR(QK,w)),l.cidrv4=(w)=>l.check(GR(zK,w)),l.cidrv6=(w)=>l.check(XR(mK,w)),l.e164=(w)=>l.check(QR($K,w)),l.datetime=(w)=>l.check(g3(w)),l.date=(w)=>l.check(o3(w)),l.time=(w)=>l.check(l3(w)),l.duration=(w)=>l.check(e3(w))});function Eg(l){return vR(OK,l)}var Ng=E("ZodStringFormat",(l,v)=>{Lg.init(l,v),Y3.init(l,v)}),HK=E("ZodEmail",(l,v)=>{H7.init(l,v),Ng.init(l,v)});var M3=E("ZodGUID",(l,v)=>{P7.init(l,v),Ng.init(l,v)});var Gn=E("ZodUUID",(l,v)=>{O7.init(l,v),Ng.init(l,v)});var qK=E("ZodURL",(l,v)=>{q7.init(l,v),Ng.init(l,v)});var AK=E("ZodEmoji",(l,v)=>{A7.init(l,v),Ng.init(l,v)});var MK=E("ZodNanoID",(l,v)=>{M7.init(l,v),Ng.init(l,v)});var WK=E("ZodCUID",(l,v)=>{W7.init(l,v),Ng.init(l,v)});var RK=E("ZodCUID2",(l,v)=>{R7.init(l,v),Ng.init(l,v)});var GK=E("ZodULID",(l,v)=>{G7.init(l,v),Ng.init(l,v)});var XK=E("ZodXID",(l,v)=>{X7.init(l,v),Ng.init(l,v)});var YK=E("ZodKSUID",(l,v)=>{Y7.init(l,v),Ng.init(l,v)});var JK=E("ZodIPv4",(l,v)=>{K7.init(l,v),Ng.init(l,v)});var QK=E("ZodIPv6",(l,v)=>{U7.init(l,v),Ng.init(l,v)});var zK=E("ZodCIDRv4",(l,v)=>{$7.init(l,v),Ng.init(l,v)});var mK=E("ZodCIDRv6",(l,v)=>{L7.init(l,v),Ng.init(l,v)});var KK=E("ZodBase64",(l,v)=>{F7.init(l,v),Ng.init(l,v)});var UK=E("ZodBase64URL",(l,v)=>{N7.init(l,v),Ng.init(l,v)});var $K=E("ZodE164",(l,v)=>{B7.init(l,v),Ng.init(l,v)});var LK=E("ZodJWT",(l,v)=>{Z7.init(l,v),Ng.init(l,v)});var IK=E("ZodUnknown",(l,v)=>{x7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>TR(l,w,i,n)});function W3(){return LR(IK)}var FK=E("ZodNever",(l,v)=>{C7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>CR(l,w,i,n)});function NK(l){return IR(FK,l)}var BK=E("ZodArray",(l,v)=>{T7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>_R(l,w,i,n),l.element=v.element,Xn(l,"ZodArray",{min(w,i){return this.check(ah(w,i))},nonempty(w){return this.check(ah(1,w))},max(w,i){return this.check(Mn(w,i))},length(w,i){return this.check(Wn(w,i))},unwrap(){return this.element}})});function Jv(l,v){return FR(BK,l,v)}var ZK=E("ZodObject",(l,v)=>{D7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>yR(l,w,i,n),Og.defineLazy(l,"shape",()=>{return v.shape}),Xn(l,"ZodObject",{keyof(){return J5(Object.keys(this._zod.def.shape))},catchall(w){return this.clone({...this._zod.def,catchall:w})},passthrough(){return this.clone({...this._zod.def,catchall:W3()})},loose(){return this.clone({...this._zod.def,catchall:W3()})},strict(){return this.clone({...this._zod.def,catchall:NK()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(w){return Og.extend(this,w)},safeExtend(w){return Og.safeExtend(this,w)},merge(w){return Og.merge(this,w)},pick(w){return Og.pick(this,w)},omit(w){return Og.omit(this,w)},partial(...w){return Og.partial(J3,this,w[0])},required(...w){return Og.required(Q3,this,w[0])}})});function $1(l,v){let w={type:"object",shape:l??{},...Og.normalizeParams(v)};return new ZK(w)}var xK=E("ZodUnion",(l,v)=>{V7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>ER(l,w,i,n),l.options=v.options});function CK(l,v){return new xK({type:"union",options:l,...Og.normalizeParams(v)})}var TK=E("ZodIntersection",(l,v)=>{_7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>cR(l,w,i,n)});function SK(l,v){return new TK({type:"intersection",left:l,right:v})}var w8=E("ZodEnum",(l,v)=>{y7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(i,n,P)=>SR(l,i,n,P),l.enum=v.entries,l.options=Object.values(v.entries);let w=new Set(Object.keys(v.entries));l.extract=(i,n)=>{let P={};for(let O of i)if(w.has(O))P[O]=v.entries[O];else throw Error(`Key ${O} not found in enum`);return new w8({...v,checks:[],...Og.normalizeParams(n),entries:P})},l.exclude=(i,n)=>{let P={...v.entries};for(let O of i)if(w.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new w8({...v,checks:[],...Og.normalizeParams(n),entries:P})}});function J5(l,v){let w=Array.isArray(l)?Object.fromEntries(l.map((i)=>[i,i])):l;return new w8({type:"enum",entries:w,...Og.normalizeParams(v)})}var kK=E("ZodLiteral",(l,v)=>{E7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>kR(l,w,i,n),l.values=new Set(v.values),Object.defineProperty(l,"value",{get(){if(v.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return v.values[0]}})});function i8(l,v){return new kK({type:"literal",values:Array.isArray(l)?l:[l],...Og.normalizeParams(v)})}var DK=E("ZodTransform",(l,v)=>{c7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>VR(l,w,i,n),l._zod.parse=(w,i)=>{if(i.direction==="backward")throw new t5(l.constructor.name);w.addIssue=(P)=>{if(typeof P==="string")w.issues.push(Og.issue(P,w.value,v));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=w.value),O.inst??(O.inst=l),w.issues.push(Og.issue(O))}};let n=v.transform(w.value,w);if(n instanceof Promise)return n.then((P)=>{return w.value=P,w.fallback=!0,w});return w.value=n,w.fallback=!0,w}});function VK(l){return new DK({type:"transform",transform:l})}var J3=E("ZodOptional",(l,v)=>{y6.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>b8(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function R3(l){return new J3({type:"optional",innerType:l})}var _K=E("ZodExactOptional",(l,v)=>{a7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>b8(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function yK(l){return new _K({type:"optional",innerType:l})}var EK=E("ZodNullable",(l,v)=>{j7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>aR(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function G3(l){return new EK({type:"nullable",innerType:l})}var cK=E("ZodDefault",(l,v)=>{f7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>fR(l,w,i,n),l.unwrap=()=>l._zod.def.innerType,l.removeDefault=l.unwrap});function aK(l,v){return new cK({type:"default",innerType:l,get defaultValue(){return typeof v==="function"?v():Og.shallowClone(v)}})}var jK=E("ZodPrefault",(l,v)=>{p7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>pR(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function fK(l,v){return new jK({type:"prefault",innerType:l,get defaultValue(){return typeof v==="function"?v():Og.shallowClone(v)}})}var Q3=E("ZodNonOptional",(l,v)=>{d7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>jR(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function pK(l,v){return new Q3({type:"nonoptional",innerType:l,...Og.normalizeParams(v)})}var dK=E("ZodCatch",(l,v)=>{s7.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>dR(l,w,i,n),l.unwrap=()=>l._zod.def.innerType,l.removeCatch=l.unwrap});function sK(l,v){return new dK({type:"catch",innerType:l,catchValue:typeof v==="function"?v:()=>v})}var rU=E("ZodPipe",(l,v)=>{rR.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>sR(l,w,i,n),l.in=v.in,l.out=v.out});function X3(l,v){return new rU({type:"pipe",in:l,out:v})}var gU=E("ZodReadonly",(l,v)=>{gR.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>r3(l,w,i,n),l.unwrap=()=>l._zod.def.innerType});function oU(l){return new gU({type:"readonly",innerType:l})}var lU=E("ZodCustom",(l,v)=>{oR.init(l,v),oo.init(l,v),l._zod.processJSONSchema=(w,i,n)=>DR(l,w,i,n)});function eU(l,v={}){return NR(lU,l,v)}function vU(l,v){return BR(l,v)}var z3=$1({type:J5(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),m3=$1({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:Jv(Eg()).optional()}),hU=$1({name:Eg().min(1).max(200),code:Eg(),type:J5(["trigger","library"]),triggers:Jv(Eg()).optional(),bindings:Jv(z3).optional(),folder:Eg().optional(),metadata:m3.optional()}),K3=$1({format:i8("lumiscript-pack-v1"),exportedAt:Eg(),scripts:Jv(hU).min(1).max(100)}),bU=$1({name:Eg().min(1).max(200),file:Eg().min(1),type:J5(["trigger","library"]),triggers:Jv(Eg()).optional(),bindings:Jv(z3).optional(),folder:Eg().optional(),metadata:m3.optional()}),EEg=$1({format:i8("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:Jv(bU).min(1).max(100)});var U3=1048576;async function $3(l){let v=new Uint8Array(await l.arrayBuffer()),w;try{w=jW(v)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let i=w["pack.json"];if(!i)throw Error("Invalid script pack: missing pack.json");if(i.byteLength>U3)throw Error(`Pack exceeds the ${U3/1024/1024} MB decompressed size limit`);let n=I6(i),P;try{P=JSON.parse(n)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return K3.parse(P).scripts}var hg=tr(rg(),1);function wU(l){let w="";for(let i=0;i<l.length;i+=32768)w+=String.fromCharCode(...l.subarray(i,i+32768));return btoa(w)}function iU(l){let v=new Map;for(let n of l){let P=n.folder??"";if(!v.has(P))v.set(P,[]);v.get(P).push(n)}let w=new Map;if(v.has(""))w.set("",v.get(""));let i=[...v.keys()].filter((n)=>n!=="").sort();for(let n of i)w.set(n,v.get(n));return w}var Yn=({scripts:l,selectedId:v,execInfo:w,onSelect:i,onEdit:n,sendToBackend:P})=>{let[O,H]=Q5.useState("trigger"),[R,X]=Q5.useState(new Set),G=Q5.useRef(null),A=l.filter((a)=>a.type===O),Y=iU(A),L=Y.size>1||Y.size===1&&!Y.has(""),S=(a)=>{X((p)=>{let lr=new Set(p);if(lr.has(a))lr.delete(a);else lr.add(a);return lr})},T=()=>{let a=O==="library"?"Library name:":"Script name:",p=window.prompt(a);if(!p?.trim())return;P({type:"create_script",name:p.trim(),scriptType:O})},_=(a)=>{if(A.length===0)return;if(a.shiftKey){let lr=F6(A);P({type:"save_pack_to_disk",bytesB64:wU(lr),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;fW(A,p.trim())},rr=()=>{G.current?.click()},nr=async(a)=>{let p=a.target.files?.[0];if(!p)return;a.target.value="";try{let lr=await $3(p),B=(x)=>x==="library"?"[L]":"[T]",y=lr.map((x)=>`  ${B(x.type)} ${x.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},er=(a)=>{let p=w[a.id];return hg.jsxDEV(NW,{script:a,selected:a.id===v,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>i(a.id),onEdit:()=>n(a.id),sendToBackend:P},a.id,!1,void 0,this)};return hg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[hg.jsxDEV("div",{className:"ls-list-header",children:[hg.jsxDEV("div",{className:"ls-list-type-tabs",children:[hg.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>H("trigger"),title:"Scripts",children:hg.jsxDEV(Wo,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>H("library"),title:"Libraries",children:hg.jsxDEV(X1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-actions",children:[hg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:hg.jsxDEV(h5,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:A.length===0,children:hg.jsxDEV(Y1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:T,title:"New script",children:hg.jsxDEV(dw,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("input",{ref:G,type:"file",accept:".zip",style:{display:"none"},onChange:nr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-body",children:A.length===0?hg.jsxDEV("div",{className:"ls-list-empty",children:[hg.jsxDEV(Ze,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),hg.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),hg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...Y.entries()].map(([a,p])=>{let lr=R.has(a);return a===""?hg.jsxDEV("div",{children:p.map(er)},"__unfiled",!1,void 0,this):hg.jsxDEV("div",{className:"ls-folder-group",children:[hg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>S(a),children:[lr?hg.jsxDEV(qv,{size:11},void 0,!1,void 0,this):hg.jsxDEV(Ro,{size:11},void 0,!1,void 0,this),hg.jsxDEV(J1,{size:11},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(B)=>{B.stopPropagation();let y=window.prompt("Rename folder:",a);if(y===null||y.trim()===""||y.trim()===a)return;for(let j of p)P({type:"update_script",id:j.id,patch:{folder:y.trim()}})},children:hg.jsxDEV(sl,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&p.map(er)]},`folder-${a}`,!0,void 0,this)}):A.map(er)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var $5=tr(vg(),1),HG=tr(Ch(),1);var Cg=tr(vg(),1);function L3(l,v){(v==null||v>l.length)&&(v=l.length);for(var w=0,i=Array(v);w<v;w++)i[w]=l[w];return i}function uU(l){if(Array.isArray(l))return l}function nU(l,v,w){return(v=qU(v))in l?Object.defineProperty(l,v,{value:w,enumerable:!0,configurable:!0,writable:!0}):l[v]=w,l}function tU(l,v){var w=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(w!=null){var i,n,P,O,H=[],R=!0,X=!1;try{if(P=(w=w.call(l)).next,v===0);else for(;!(R=(i=P.call(w)).done)&&(H.push(i.value),H.length!==v);R=!0);}catch(G){X=!0,n=G}finally{try{if(!R&&w.return!=null&&(O=w.return(),Object(O)!==O))return}finally{if(X)throw n}}return H}}function PU(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I3(l,v){var w=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);v&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable})),w.push.apply(w,i)}return w}function u8(l){for(var v=1;v<arguments.length;v++){var w=arguments[v]!=null?arguments[v]:{};v%2?I3(Object(w),!0).forEach(function(i){nU(l,i,w[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(w)):I3(Object(w)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(w,i))})}return l}function F3(l,v){if(l==null)return{};var w,i,n=OU(l,v);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(l);for(i=0;i<P.length;i++)w=P[i],v.indexOf(w)===-1&&{}.propertyIsEnumerable.call(l,w)&&(n[w]=l[w])}return n}function OU(l,v){if(l==null)return{};var w={};for(var i in l)if({}.hasOwnProperty.call(l,i)){if(v.indexOf(i)!==-1)continue;w[i]=l[i]}return w}function N3(l,v){return uU(l)||tU(l,v)||AU(l,v)||PU()}function HU(l,v){if(typeof l!="object"||!l)return l;var w=l[Symbol.toPrimitive];if(w!==void 0){var i=w.call(l,v);if(typeof i!="object")return i;throw TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(l)}function qU(l){var v=HU(l,"string");return typeof v=="symbol"?v:v+""}function AU(l,v){if(l){if(typeof l=="string")return L3(l,v);var w={}.toString.call(l).slice(8,-1);return w==="Object"&&l.constructor&&(w=l.constructor.name),w==="Map"||w==="Set"?Array.from(l):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?L3(l,v):void 0}}function MU(l,v,w){if(v in l)Object.defineProperty(l,v,{value:w,enumerable:!0,configurable:!0,writable:!0});else l[v]=w;return l}function B3(l,v){var w=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);if(v)i=i.filter(function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable});w.push.apply(w,i)}return w}function Z3(l){for(var v=1;v<arguments.length;v++){var w=arguments[v]!=null?arguments[v]:{};if(v%2)B3(Object(w),!0).forEach(function(i){MU(l,i,w[i])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(l,Object.getOwnPropertyDescriptors(w));else B3(Object(w)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(w,i))})}return l}function WU(){for(var l=arguments.length,v=Array(l),w=0;w<l;w++)v[w]=arguments[w];return function(i){return v.reduceRight(function(n,P){return P(n)},i)}}function z5(l){return function v(){var w=this;for(var i=arguments.length,n=Array(i),P=0;P<i;P++)n[P]=arguments[P];return n.length>=l.length?l.apply(this,n):function(){for(var O=arguments.length,H=Array(O),R=0;R<O;R++)H[R]=arguments[R];return v.apply(w,[].concat(n,H))}}}function Qn(l){return{}.toString.call(l).includes("Object")}function RU(l){return!Object.keys(l).length}function m5(l){return typeof l==="function"}function GU(l,v){return Object.prototype.hasOwnProperty.call(l,v)}function XU(l,v){if(!Qn(v))Q0("changeType");if(Object.keys(v).some(function(w){return!GU(l,w)}))Q0("changeField");return v}function YU(l){if(!m5(l))Q0("selectorType")}function JU(l){if(!(m5(l)||Qn(l)))Q0("handlerType");if(Qn(l)&&Object.values(l).some(function(v){return!m5(v)}))Q0("handlersType")}function QU(l){if(!l)Q0("initialIsRequired");if(!Qn(l))Q0("initialType");if(RU(l))Q0("initialContent")}function zU(l,v){throw Error(l[v]||l.default)}var mU={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Q0=z5(zU)(mU),Jn={changes:XU,selector:YU,handler:JU,initial:QU};function KU(l){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Jn.initial(l),Jn.handler(v);var w={current:l},i=z5(LU)(w,v),n=z5($U)(w),P=z5(Jn.changes)(l),O=z5(UU)(w);function H(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(G){return G};return Jn.selector(X),X(w.current)}function R(X){WU(i,n,P,O)(X)}return[H,R]}function UU(l,v){return m5(v)?v(l.current):v}function $U(l,v){return l.current=Z3(Z3({},l.current),v),v}function LU(l,v,w){return m5(v)?v(l.current):Object.keys(w).forEach(function(i){var n;return(n=v[i])===null||n===void 0?void 0:n.call(v,l.current[i])}),w}var IU={create:KU},x3=IU;var C3={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function T3(l){return function v(){var w=this;for(var i=arguments.length,n=Array(i),P=0;P<i;P++)n[P]=arguments[P];return n.length>=l.length?l.apply(this,n):function(){for(var O=arguments.length,H=Array(O),R=0;R<O;R++)H[R]=arguments[R];return v.apply(w,[].concat(n,H))}}}function S3(l){return{}.toString.call(l).includes("Object")}function FU(l){if(!l)k3("configIsRequired");if(!S3(l))k3("configType");if(l.urls)return NU(),{paths:{vs:l.urls.monacoBase}};return l}function NU(){console.warn(D3.deprecation)}function BU(l,v){throw Error(l[v]||l.default)}var D3={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},k3=T3(BU)(D3),V3={config:FU};var _3=function(){for(var v=arguments.length,w=Array(v),i=0;i<v;i++)w[i]=arguments[i];return function(n){return w.reduceRight(function(P,O){return O(P)},n)}};function n8(l,v){return Object.keys(v).forEach(function(w){if(v[w]instanceof Object){if(l[w])Object.assign(v[w],n8(l[w],v[w]))}}),u8(u8({},l),v)}var ZU={type:"cancelation",msg:"operation is manually canceled"};function zn(l){var v=!1,w=new Promise(function(i,n){l.then(function(P){return v?n(ZU):i(P)}),l.catch(n)});return w.cancel=function(){return v=!0},w}var xU=["monaco"],CU=x3.create({config:C3,isInitialized:!1,resolve:null,reject:null,monaco:null}),y3=N3(CU,2),K5=y3[0],mn=y3[1];function TU(l){var v=V3.config(l),w=v.monaco,i=F3(v,xU);mn(function(n){return{config:n8(n.config,i),monaco:w}})}function SU(){var l=K5(function(v){var{monaco:w,isInitialized:i,resolve:n}=v;return{monaco:w,isInitialized:i,resolve:n}});if(!l.isInitialized){if(mn({isInitialized:!0}),l.monaco)return l.resolve(l.monaco),zn(t8);if(window.monaco&&window.monaco.editor)return E3(window.monaco),l.resolve(window.monaco),zn(t8);_3(kU,VU)(_U)}return zn(t8)}function kU(l){return document.body.appendChild(l)}function DU(l){var v=document.createElement("script");return l&&(v.src=l),v}function VU(l){var v=K5(function(i){var{config:n,reject:P}=i;return{config:n,reject:P}}),w=DU("".concat(v.config.paths.vs,"/loader.js"));return w.onload=function(){return l()},w.onerror=v.reject,w}function _U(){var l=K5(function(w){var{config:i,resolve:n,reject:P}=w;return{config:i,resolve:n,reject:P}}),v=window.require;v.config(l.config),v(["vs/editor/editor.main"],function(w){var i=w.m||w;E3(i),l.resolve(i)},function(w){l.reject(w)})}function E3(l){if(!K5().monaco)mn({monaco:l})}function yU(){return K5(function(l){var v=l.monaco;return v})}var t8=new Promise(function(l,v){return mn({resolve:l,reject:v})}),L1={config:TU,init:SU,__getMonacoInstance:yU};var c3=tr(vg(),1),to=tr(vg(),1);var a3=tr(vg(),1),Un=tr(vg(),1),j3=tr(vg(),1),p3=tr(vg(),1),$n=tr(vg(),1),h$=tr(vg(),1);var rG=tr(vg(),1),kg=tr(vg(),1);var Ln=tr(vg(),1),EU={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},P8=EU,cU={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},aU=cU;function jU({children:l}){return j3.default.createElement("div",{style:aU.container},l)}var fU=jU,pU=fU;function dU({width:l,height:v,isEditorReady:w,loading:i,_ref:n,className:P,wrapperProps:O}){return Un.default.createElement("section",{style:{...P8.wrapper,width:l,height:v},...O},!w&&Un.default.createElement(pU,null,i),Un.default.createElement("div",{ref:n,style:{...P8.fullWidth,...!w&&P8.hide},className:P}))}var sU=dU,f3=a3.memo(sU);function r$(l){p3.useEffect(l,[])}var d3=r$;function g$(l,v,w=!0){let i=$n.useRef(!0);$n.useEffect(i.current||!w?()=>{i.current=!1}:l,v)}var Xl=g$;function U5(){}function jh(l,v,w,i){return o$(l,i)||l$(l,v,w,i)}function o$(l,v){return l.editor.getModel(s3(l,v))}function l$(l,v,w,i){return l.editor.createModel(v,w,i?s3(l,i):void 0)}function s3(l,v){return l.Uri.parse(v)}function e$({original:l,modified:v,language:w,originalLanguage:i,modifiedLanguage:n,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:H=!1,keepCurrentModifiedModel:R=!1,theme:X="light",loading:G="Loading...",options:A={},height:Y="100%",width:L="100%",className:S,wrapperProps:T={},beforeMount:_=U5,onMount:rr=U5}){let[nr,er]=to.useState(!1),[a,p]=to.useState(!0),lr=to.useRef(null),B=to.useRef(null),y=to.useRef(null),j=to.useRef(rr),x=to.useRef(_),Wr=to.useRef(!1);d3(()=>{let k=L1.init();return k.then((s)=>(B.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>lr.current?Zr():k.cancel()}),Xl(()=>{if(lr.current&&B.current){let k=lr.current.getOriginalEditor(),s=jh(B.current,l||"",i||w||"text",P||"");s!==k.getModel()&&k.setModel(s)}},[P],nr),Xl(()=>{if(lr.current&&B.current){let k=lr.current.getModifiedEditor(),s=jh(B.current,v||"",n||w||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],nr),Xl(()=>{let k=lr.current.getModifiedEditor();k.getOption(B.current.editor.EditorOption.readOnly)?k.setValue(v||""):v!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:v||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[v],nr),Xl(()=>{lr.current?.getModel()?.original.setValue(l||"")},[l],nr),Xl(()=>{let{original:k,modified:s}=lr.current.getModel();B.current.editor.setModelLanguage(k,i||w||"text"),B.current.editor.setModelLanguage(s,n||w||"text")},[w,i,n],nr),Xl(()=>{B.current?.editor.setTheme(X)},[X],nr),Xl(()=>{lr.current?.updateOptions(A)},[A],nr);let qr=to.useCallback(()=>{if(!B.current)return;x.current(B.current);let k=jh(B.current,l||"",i||w||"text",P||""),s=jh(B.current,v||"",n||w||"text",O||"");lr.current?.setModel({original:k,modified:s})},[w,v,n,l,i,P,O]),Gr=to.useCallback(()=>{!Wr.current&&y.current&&(lr.current=B.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...A}),qr(),B.current?.editor.setTheme(X),er(!0),Wr.current=!0)},[A,X,qr]);to.useEffect(()=>{nr&&j.current(lr.current,B.current)},[nr]),to.useEffect(()=>{!a&&!nr&&Gr()},[a,nr,Gr]);function Zr(){let k=lr.current?.getModel();H||k?.original?.dispose(),R||k?.modified?.dispose(),lr.current?.dispose()}return to.default.createElement(f3,{width:L,height:Y,isEditorReady:nr,loading:G,_ref:y,className:S,wrapperProps:T})}var v$=e$,mcg=c3.memo(v$);function b$(l){let v=Ln.useRef();return Ln.useEffect(()=>{v.current=l},[l]),v.current}var w$=b$,Kn=new Map;function i$({defaultValue:l,defaultLanguage:v,defaultPath:w,value:i,language:n,path:P,theme:O="light",line:H,loading:R="Loading...",options:X={},overrideServices:G={},saveViewState:A=!0,keepCurrentModel:Y=!1,width:L="100%",height:S="100%",className:T,wrapperProps:_={},beforeMount:rr=U5,onMount:nr=U5,onChange:er,onValidate:a=U5}){let[p,lr]=kg.useState(!1),[B,y]=kg.useState(!0),j=kg.useRef(null),x=kg.useRef(null),Wr=kg.useRef(null),qr=kg.useRef(nr),Gr=kg.useRef(rr),Zr=kg.useRef(),k=kg.useRef(i),s=w$(P),vr=kg.useRef(!1),zr=kg.useRef(!1);d3(()=>{let F=L1.init();return F.then((or)=>(j.current=or)&&y(!1)).catch((or)=>or?.type!=="cancelation"&&console.error("Monaco initialization: error:",or)),()=>x.current?V():F.cancel()}),Xl(()=>{let F=jh(j.current,l||i||"",v||n||"",P||w||"");F!==x.current?.getModel()&&(A&&Kn.set(s,x.current?.saveViewState()),x.current?.setModel(F),A&&x.current?.restoreViewState(Kn.get(P)))},[P],p),Xl(()=>{x.current?.updateOptions(X)},[X],p),Xl(()=>{!x.current||i===void 0||(x.current.getOption(j.current.editor.EditorOption.readOnly)?x.current.setValue(i):i!==x.current.getValue()&&(zr.current=!0,x.current.executeEdits("",[{range:x.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),x.current.pushUndoStop(),zr.current=!1))},[i],p),Xl(()=>{let F=x.current?.getModel();F&&n&&j.current?.editor.setModelLanguage(F,n)},[n],p),Xl(()=>{H!==void 0&&x.current?.revealLine(H)},[H],p),Xl(()=>{j.current?.editor.setTheme(O)},[O],p);let Xr=kg.useCallback(()=>{if(!(!Wr.current||!j.current)&&!vr.current){Gr.current(j.current);let F=P||w,or=jh(j.current,i||l||"",v||n||"",F||"");x.current=j.current?.editor.create(Wr.current,{model:or,automaticLayout:!0,...X},G),A&&x.current.restoreViewState(Kn.get(F)),j.current.editor.setTheme(O),H!==void 0&&x.current.revealLine(H),lr(!0),vr.current=!0}},[l,v,w,i,n,P,X,G,A,O,H]);kg.useEffect(()=>{p&&qr.current(x.current,j.current)},[p]),kg.useEffect(()=>{!B&&!p&&Xr()},[B,p,Xr]),k.current=i,kg.useEffect(()=>{p&&er&&(Zr.current?.dispose(),Zr.current=x.current?.onDidChangeModelContent((F)=>{zr.current||er(x.current.getValue(),F)}))},[p,er]),kg.useEffect(()=>{if(p){let F=j.current.editor.onDidChangeMarkers((or)=>{let Or=x.current.getModel()?.uri;if(Or&&or.find((Ar)=>Ar.path===Or.path)){let Ar=j.current.editor.getModelMarkers({resource:Or});a?.(Ar)}});return()=>{F?.dispose()}}return()=>{}},[p,a]);function V(){Zr.current?.dispose(),Y?A&&Kn.set(P,x.current.saveViewState()):x.current.getModel()?.dispose(),x.current.dispose()}return kg.default.createElement(f3,{width:L,height:S,isEditorReady:p,loading:R,_ref:Wr,className:T,wrapperProps:_})}var u$=i$,n$=rG.memo(u$),gG=n$;var fh=tr(vg(),1);var Po=tr(rg(),1),t$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},oG=({entries:l,isRunning:v,onClear:w})=>{let[i,n]=fh.useState(!1),P=fh.useRef(null);fh.useEffect(()=>{if(!i&&P.current)P.current.scrollTop=P.current.scrollHeight},[l,i]);let O=()=>{let H=l.filter((R)=>R.type!=="separator").map((R)=>`[${R.timestamp}] ${R.type.toUpperCase()}: ${R.message}`).join(`
`);navigator.clipboard.writeText(H).catch(()=>{})};return Po.jsxDEV("div",{className:`ls-console${i?" ls-collapsed":""}`,children:[Po.jsxDEV("div",{className:"ls-console-header",onClick:()=>n((H)=>!H),children:[Po.jsxDEV(Ce,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-console-title",children:["Console",v?" — running…":l.length>0?` (${l.length})`:""]},void 0,!0,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),O()},title:"Copy output",disabled:l.length===0,children:Po.jsxDEV(pl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(H)=>{H.stopPropagation(),w()},title:"Clear console",disabled:l.length===0,children:Po.jsxDEV(Ko,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),i?Po.jsxDEV(Ro,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Po.jsxDEV(Ml,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!i&&Po.jsxDEV("div",{className:"ls-console-output",ref:P,children:l.length===0?Po.jsxDEV("div",{className:"ls-console-empty",children:v?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):l.map((H,R)=>H.type==="separator"?Po.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},R,!1,void 0,this):Po.jsxDEV("div",{className:`ls-entry ${t$[H.type]??"ls-log"}`,children:[Po.jsxDEV("span",{className:"ls-entry-time",children:H.timestamp},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-type",children:H.type.toUpperCase()},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-msg",children:H.message},void 0,!1,void 0,this)]},R,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=tr(rg(),1),lG=({bindings:l,activeContext:v,onAdd:w,onRemove:i})=>{let n=()=>{let{characterId:O,characterName:H}=v;if(!O)return;if(l.some((R)=>R.type==="character"&&R.characterId===O))return;w({type:"character",characterId:O,displayName:H??O})},P=()=>{let{chatId:O,characterName:H}=v;if(!O)return;if(l.some((X)=>X.type==="chat"&&X.chatId===O))return;let R=H?`${H} — ${O.slice(0,8)}`:O.slice(0,8);w({type:"chat",chatId:O,displayName:R})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(Ew,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),l.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):l.map((O,H)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?Vo.jsxDEV(Vh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(kh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>i(H),title:"Remove binding",children:Vo.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:n,disabled:!v.characterId,title:v.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(Vh,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!v.chatId,title:v.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(kh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var eG=tr(vg(),1);var so=tr(rg(),1),vG=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Ccg=vG.flatMap((l)=>l.events.map((v)=>v.name)),hG=({scriptId:l,triggers:v,sendToBackend:w})=>{let[i,n]=eG.useState(!0),P=new Set(v),O=(H)=>{let R=P.has(H)?v.filter((X)=>X!==H):[...v,H];w({type:"update_script",id:l,patch:{triggers:R}})};return so.jsxDEV("div",{className:`ls-triggers${i?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>n((H)=>!H),children:[so.jsxDEV(Mv,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:i?so.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):so.jsxDEV(Ml,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!i&&so.jsxDEV("div",{className:"ls-triggers-body",children:vG.map((H)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:H.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:H.events.map((R)=>so.jsxDEV("button",{className:`ls-trigger-chip${P.has(R.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(R.name),title:R.description,children:R.name},R.name,!1,void 0,this))},void 0,!1,void 0,this)]},H.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var bG=`
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
`;var nG=tr(vg(),1);function wG(l){return l.split("`").map((w,i)=>{if(i%2===1)return w;return w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function P$(l){return l.split("`").map((i,n)=>{if(n%2===1)return i;return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function z0(l,v){let w=`| ${l.join(" | ")} |`,i=`| ${l.map(()=>"---").join(" | ")} |`,n=v.map((P)=>`| ${P.map(P$).join(" | ")} |`);return[w,i,...n].join(`
`)}function O$(l){return l.optional&&!l.field.endsWith("?")?`${l.field}?`:l.field}function H$(l){if(l==="silent")return"*silent*";if(l==="boolean")return'`"true" / "false"`';return"`string`"}function q$(l){return l.aliases==="—"?"—":`\`${l.aliases}\``}function A$(l){let v=l.perms.length===0&&!l.note?"*none*":l.perms.map((w)=>`\`${w}\``).join(", ");return l.note?`${v}${l.perms.length?" ":""}${l.note}`:v}function M$(){return`## Lumiverse Events

${z0(["Event","Group","Payload shape"],O8.map((v)=>[`\`${v.name}\``,v.group,`\`${v.payload}\``]))}`}function W$(){return`## Permission Matrix

${H8.map((v)=>{let w=z0(["Method","Required permissions"],v.rows.map((i)=>[`\`${i.method}\``,A$(i)]));return`### ${v.group}

${w}`}).join(`

`)}`}function R$(){let l=z0(["Event","Payload fields","Emitted by"],q8.map((w)=>[`\`${w.name}\``,`\`${w.payload}\``,w.emittedBy])),v="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${l}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function G$(){let l=A8.map((w)=>{let i=z0(["Macro","Aliases","Returns","Description"],w.rows.map((P)=>[`\`${P.macro}\``,q$(P),H$(P.returns),P.desc])),n=[`### ${w.label}`];if(w.description)n.push(`*${w.description}*`);return n.push(i),n.join(`

`)}),v='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${l.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function X$(){return`## Key Types

${M8.map((l)=>iG(l)).join(`

`)}`}function iG(l,v="###"){let w=wG(l.name),i=l.note?`*${wG(l.note)}*

`:"",n=z0(["Field","Type","Description"],l.fields.map((P)=>[`\`${O$(P)}\``,`\`${P.type}\``,P.desc]));return`${v} ${w}

${i}${n}`}function Y$(){return`## API Functions

${W8.map((v)=>{let w=z0(["Method","Arguments","Description"],v.rows.map((i)=>[`\`${i.name}\``,i.args,i.desc]));return`### ${v.group}

${w}`}).join(`

`)}`}function J$(){let v=z0(["Method","Arguments","Description"],R8.map((n)=>[`\`${n.name}\``,n.args,n.desc])),w=z0(["Method","Arguments","Description"],G8.map((n)=>[`\`${n.name}\``,n.args,n.desc])),i=X8.map((n)=>iG(n,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",v,"","### ls:council-prompt","",w,"","### Built-in types","",i].join(`
`)}function Q$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function z$(){let v=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,w=[M$(),W$(),R$(),G$(),X$(),Y$(),J$(),Q$()];return`${v}

---

${w.join(`

---

`)}
`}function uG(){let l=z$(),w=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,i=new Blob([l],{type:"text/markdown;charset=utf-8"}),n=URL.createObjectURL(i),P=document.createElement("a");P.href=n,P.download=w,P.click(),URL.revokeObjectURL(n)}var m=tr(rg(),1),m0=({icon:l,title:v,defaultOpen:w=!1,children:i})=>{let[n,P]=nG.useState(w);return m.jsxDEV("div",{className:"ls-ref-section",children:[m.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[m.jsxDEV("span",{className:"ls-ref-section-title",children:[l,v]},void 0,!0,void 0,this),n?m.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):m.jsxDEV(qv,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n&&m.jsxDEV("div",{className:"ls-ref-section-body",children:i},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Hg=({children:l})=>m.jsxDEV("code",{className:"ls-ref-code",children:l},void 0,!1,void 0,this),m$=({children:l})=>m.jsxDEV("span",{className:"ls-ref-perm",children:l},void 0,!1,void 0,this),K$=()=>m.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),U$=()=>m.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),ph=({label:l,cols:v})=>m.jsxDEV("tr",{children:m.jsxDEV("td",{colSpan:v,className:"ls-ref-group-header",children:l},void 0,!1,void 0,this)},void 0,!1,void 0,this),O8=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],$$=()=>{let l="";return m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:O8.map((v)=>{let w=v.group!==l?v.group:"";return l=v.group,m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},H8=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],L$=()=>m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:H8.map((l)=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV(ph,{label:l.group,cols:2},`hdr-${l.group}`,!1,void 0,this),l.rows.map((v)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:[v.perms.length===0&&!v.note?m.jsxDEV(K$,{},void 0,!1,void 0,this):null,v.perms.map((w)=>m.jsxDEV(m$,{children:w},w,!1,void 0,this)),v.note?m.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:v.perms.length?4:0},children:v.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},v.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q8=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],I$=()=>m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:q8.map((l)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A8=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],F$=({type:l})=>{if(l==="silent")return m.jsxDEV(U$,{},void 0,!1,void 0,this);if(l==="boolean")return m.jsxDEV(Hg,{children:'"true" / "false"'},void 0,!1,void 0,this);return m.jsxDEV(Hg,{children:"string"},void 0,!1,void 0,this)},N$=()=>m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:A8.map((l)=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV(ph,{label:l.description?m.jsxDEV(m.Fragment,{children:[l.label," — ",m.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:l.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):l.label,cols:4},`hdr-${l.label}`,!1,void 0,this),l.rows.map((v)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:v.aliases==="—"?m.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):m.jsxDEV(Hg,{children:v.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:m.jsxDEV(F$,{type:v.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M8=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],B$=()=>m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:M8.map((l)=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV("tr",{children:m.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[l.name,l.note&&m.jsxDEV("div",{className:"ls-ref-type-note",children:l.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${l.name}`,!1,void 0,this),l.fields.map((v)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),W8=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],Z$=()=>m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:W8.map((l)=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV(ph,{label:l.group,cols:3},`hdr-${l.group}`,!1,void 0,this),l.rows.map((v)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.group}-${v.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),R8=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],G8=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],x$=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],X8=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],C$=()=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",m.jsxDEV(Hg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",m.jsxDEV(Hg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",m.jsxDEV(Hg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",m.jsxDEV(Hg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",m.jsxDEV(Hg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",m.jsxDEV(Hg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),m.jsxDEV("table",{className:"ls-ref-table",children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:[m.jsxDEV(ph,{label:"ls:components",cols:3},void 0,!1,void 0,this),R8.map((l)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this)),m.jsxDEV(ph,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),G8.map((l)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this)),m.jsxDEV(ph,{label:"ls:icons",cols:3},void 0,!1,void 0,this),x$.map((l)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:l.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:l.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},l.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[m.jsxDEV("thead",{children:m.jsxDEV("tr",{children:[m.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),m.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("tbody",{children:X8.map((l)=>m.jsxDEV(m.Fragment,{children:[m.jsxDEV("tr",{children:m.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[l.name,l.note&&m.jsxDEV("div",{className:"ls-ref-type-note",children:l.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${l.name}`,!1,void 0,this),l.fields.map((v)=>m.jsxDEV("tr",{children:[m.jsxDEV("td",{children:m.jsxDEV(Hg,{children:v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV("td",{children:m.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${l.name}-${v.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),tG=()=>m.jsxDEV("div",{className:"ls-ref",children:[m.jsxDEV("div",{className:"ls-ref-toolbar",children:m.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>uG(),title:"Download the current reference as a Markdown file",children:[m.jsxDEV(Y1,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(Mv,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:m.jsxDEV($$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(jw,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:m.jsxDEV(L$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(sw,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[m.jsxDEV(I$,{},void 0,!1,void 0,this),m.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",m.jsxDEV(Hg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(yw,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[m.jsxDEV(N$,{},void 0,!1,void 0,this),m.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",m.jsxDEV(Hg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",m.jsxDEV(Hg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(Be,{size:11},void 0,!1,void 0,this),title:"Key Types",children:m.jsxDEV(B$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(aw,{size:11},void 0,!1,void 0,this),title:"API Functions",children:m.jsxDEV(Z$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(xw,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:m.jsxDEV(C$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),m.jsxDEV(m0,{icon:m.jsxDEV(pw,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[m.jsxDEV("p",{className:"ls-ref-muted",children:[m.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",m.jsxDEV(Hg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",m.jsxDEV(Hg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",m.jsxDEV(Hg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",m.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),m.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[m.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",m.jsxDEV(Hg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",m.jsxDEV(Hg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",m.jsxDEV(Hg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",m.jsxDEV(Hg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Lr=tr(rg(),1),PG=!1,OG=({script:l,allScripts:v,activeContext:w,isRunning:i,consoleEntries:n,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:H,sendToBackend:R})=>{let[X,G]=Cg.useState(l.code),[A,Y]=Cg.useState(!1),[L,S]=Cg.useState(!1),[T,_]=Cg.useState(l.name),[rr,nr]=Cg.useState("code"),[er,a]=Cg.useState(!1),[p,lr]=Cg.useState(!1),B=Cg.useRef(null),y=Cg.useRef(null),j=Cg.useRef(null),x=Cg.useRef(l.id),Wr=Cg.useRef(R);Cg.useEffect(()=>{x.current=l.id},[l.id]),Cg.useEffect(()=>{Wr.current=R},[R]),Cg.useEffect(()=>{G(l.code),Y(!1),_(l.name),lr(!1)},[l.id,l.code,l.name]),Cg.useEffect(()=>{return()=>{if(B.current)clearTimeout(B.current),B.current=null;let F=j.current;if(F!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${x.current}, len=${F.length})`);try{Wr.current({type:"update_script",id:x.current,patch:{code:F}})}catch(or){console.error("[LumiScript] ScriptEditor unmount-flush failed:",or)}j.current=null}}},[]),Cg.useEffect(()=>{R({type:"get_active_context"})},[l.id,R]),Cg.useEffect(()=>{let F=setInterval(()=>{R({type:"get_active_context"})},2000);return()=>clearInterval(F)},[R]);let qr=Cg.useCallback((F)=>{console.log(`[LumiScript] saveCode: script=${l.id}, len=${F.length}, head="${F.slice(0,40).replace(/\n/g,"\\n")}"`),R({type:"update_script",id:l.id,patch:{code:F}}),j.current=null,Y(!1)},[l.id,R]),Gr=(F)=>{if(F===void 0)return;if(G(F),Y(F!==l.code),j.current=F,B.current)clearTimeout(B.current);B.current=setTimeout(()=>qr(F),O)},Zr=(F,or)=>{if(y.current=F,!PG){PG=!0;let Or=or.languages.typescript.javascriptDefaults;Or.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),Or.setCompilerOptions({target:or.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),Or.addExtraLib(bG,"ts:lumiverse/lumiscript-api.d.ts")}F.addCommand(or.KeyMod.CtrlCmd|or.KeyCode.KeyS,()=>{if(B.current)clearTimeout(B.current);qr(F.getValue())}),F.getModel()?.setEOL(or.editor.EndOfLineSequence.LF)},k=()=>{if(i)return;if(B.current)clearTimeout(B.current),B.current=null;if(A)qr(y.current?.getValue()??X);R({type:"run_script",id:l.id})},s=()=>{let F=T.trim();if(F&&F!==l.name)R({type:"update_script",id:l.id,patch:{name:F}});S(!1)},vr=(F)=>{let or=l.bindings??[];R({type:"update_script",id:l.id,patch:{bindings:[...or,F]}})},zr=(F)=>{R({type:"update_script",id:l.id,patch:{bindings:(l.bindings??[]).filter((or,Or)=>Or!==F)}})},Xr=()=>{if(l.allowDangerous)R({type:"update_script",id:l.id,patch:{allowDangerous:!1}});else if(p)lr(!1),R({type:"update_script",id:l.id,patch:{allowDangerous:!0}});else lr(!0)},V=(F)=>new Date(F).toLocaleString();return Lr.jsxDEV("div",{className:"ls-editor-root",children:[Lr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?Lr.jsxDEV("input",{className:"ls-editor-name-input",value:T,autoFocus:!0,onChange:(F)=>_(F.target.value),onBlur:s,onKeyDown:(F)=>{if(F.key==="Enter")s();if(F.key==="Escape")_(l.name),S(!1)}},void 0,!1,void 0,this):Lr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>S(!0),title:"Click to rename",style:{cursor:"text"},children:l.name},void 0,!1,void 0,this),A&&Lr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>nr("code"),title:"Code editor",children:[Lr.jsxDEV(Wo,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>nr("docs"),title:"API reference",children:[Lr.jsxDEV(Cw,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),l.type!=="library"&&Lr.jsxDEV("button",{className:`ls-btn${i?"":" ls-accent"}`,onClick:k,disabled:i,children:[i?Lr.jsxDEV(xe,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Lr.jsxDEV(Q1,{size:15},void 0,!1,void 0,this),i?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Lr.jsxDEV("div",{className:"ls-editor-monaco",children:Lr.jsxDEV(gG,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:X,onChange:Gr,onMount:Zr,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},l.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Lr.jsxDEV("div",{className:"ls-editor-docs",children:Lr.jsxDEV(tG,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Lr.jsxDEV(oG,{entries:n,isRunning:i,onClear:H},void 0,!1,void 0,this),l.type==="trigger"&&Lr.jsxDEV(hG,{scriptId:l.id,triggers:l.triggers??[],sendToBackend:R},void 0,!1,void 0,this),l.type==="trigger"&&Lr.jsxDEV(lG,{bindings:l.bindings??[],activeContext:w,onAdd:vr,onRemove:zr},void 0,!1,void 0,this),p&&Lr.jsxDEV("div",{className:"ls-danger-confirm",children:[Lr.jsxDEV(Dh,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:Xr,children:"Enable"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-meta-footer",children:[Lr.jsxDEV("span",{className:"ls-meta-item",children:Lr.jsxDEV("button",{className:"ls-danger-btn",onClick:Xr,title:"Toggle dangerous mode",children:[l.allowDangerous?Lr.jsxDEV(Dh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Lr.jsxDEV(g5,{size:11},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:l.allowDangerous?"ls-dangerous":"",children:l.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Lr.jsxDEV(J1,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("select",{className:"ls-folder-select",value:l.folder??"",onChange:(F)=>{let or=F.target.value;if(or==="__new__"){let Or=window.prompt("New folder name:");if(Or?.trim())R({type:"update_script",id:l.id,patch:{folder:Or.trim()}})}else R({type:"update_script",id:l.id,patch:{folder:or}})},children:[Lr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(v.map((F)=>F.folder).filter((F)=>!!F))].sort().map((F)=>Lr.jsxDEV("option",{value:F,children:F},F,!1,void 0,this)),Lr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(Vw,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Updated ",V(l.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(Tw,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Created ",V(l.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:l.id,onClick:()=>{navigator.clipboard.writeText(l.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[er?Lr.jsxDEV(Sw,{size:10},void 0,!1,void 0,this):Lr.jsxDEV(pl,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["ID ",l.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Uo=tr(rg(),1),qG=({scripts:l,initialScriptId:v,activeContext:w,execInfo:i,activeRunScriptId:n,isRunning:P,consoleHistory:O,editorFontSize:H,autosaveDebounceMs:R,onClearConsole:X,onClose:G,sendToBackend:A})=>{let[Y,L]=$5.useState(v),S=l.find((er)=>er.id===Y)??null;$5.useEffect(()=>{L(v)},[v]),$5.useEffect(()=>{let er=(a)=>{if(a.key==="Escape")G()};return document.addEventListener("keydown",er),()=>document.removeEventListener("keydown",er)},[G]);let T=S?O[S.id]??[]:[],_=P&&S?.id===n;return HG.createPortal(Uo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(er)=>{if(er.target===er.currentTarget)G()},children:Uo.jsxDEV("div",{className:"ls-modal-card",onClick:(er)=>er.stopPropagation(),children:[Uo.jsxDEV("div",{className:"ls-modal-header",children:[Uo.jsxDEV("span",{className:"ls-modal-title",children:[Uo.jsxDEV(Ce,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),Uo.jsxDEV("button",{className:"ls-modal-close",onClick:G,title:"Close (Esc)",children:Uo.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Uo.jsxDEV("div",{className:"ls-modal-body",children:[Uo.jsxDEV("div",{className:"ls-modal-sidebar",children:Uo.jsxDEV(Yn,{scripts:l,selectedId:Y,execInfo:i,onSelect:L,onEdit:L,sendToBackend:A},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-modal-main",children:S?Uo.jsxDEV(OG,{script:S,allScripts:l,activeContext:w,isRunning:_,consoleEntries:T,editorFontSize:H,autosaveDebounceMs:R,onClearConsole:()=>{if(S)X(S.id)},sendToBackend:A},void 0,!1,void 0,this):Uo.jsxDEV("div",{className:"ls-placeholder",children:[Uo.jsxDEV(Ce,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),Uo.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var In=tr(rg(),1),AG=({scripts:l,activeContext:v,execInfo:w,activeRunScriptId:i,isRunning:n,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:R,onScriptOpened:X,sendToBackend:G})=>{let[A,Y]=Fn.useState(null);return Fn.useEffect(()=>{if(A&&X)X(A)},[A,X]),In.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[In.jsxDEV(Yn,{scripts:l,selectedId:A,execInfo:w,onSelect:()=>{},onEdit:Y,sendToBackend:G},void 0,!1,void 0,this),A!==null&&In.jsxDEV(qG,{scripts:l,initialScriptId:A,activeContext:v,execInfo:w,activeRunScriptId:i,isRunning:n,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:H,onClearConsole:R,onClose:()=>Y(null),sendToBackend:G},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var MG=tr(vg(),1);var cg=tr(rg(),1),T$=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function S$(l){if(l===void 0)return"undefined";if(l===null)return"null";if(typeof l==="string")return l.length>80?l.slice(0,77)+"…":l;try{let v=JSON.stringify(l);return v.length>80?v.slice(0,77)+"…":v}catch{return String(l)}}var WG=({variables:l,sendToBackend:v})=>{let[w,i]=MG.useState(new Set(["local","global","chat","character"])),n=(O)=>{i((H)=>{let R=new Set(H);if(R.has(O))R.delete(O);else R.add(O);return R})},P=l?Object.values(l).reduce((O,H)=>O+Object.keys(H).length,0):0;return cg.jsxDEV("div",{className:"ls-status-section",children:[cg.jsxDEV("div",{className:"ls-inject-header",children:[cg.jsxDEV(dl,{size:10},void 0,!1,void 0,this),"Variables",P>0&&cg.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),cg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>v({type:"get_variables"}),children:cg.jsxDEV(Av,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),cg.jsxDEV("div",{className:"ls-status-section-body",children:!l?cg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?cg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):T$.map(({key:O,label:H,hint:R})=>{let X=l[O],G=Object.keys(X),A=w.has(O);if(G.length===0)return null;return cg.jsxDEV("div",{className:"ls-vars-scope",children:[cg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>n(O),children:[A?cg.jsxDEV(Ro,{size:10},void 0,!1,void 0,this):cg.jsxDEV(Ml,{size:10},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-name",children:H},void 0,!1,void 0,this),R&&cg.jsxDEV("span",{className:"ls-vars-scope-hint",children:R},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-scope-count",children:G.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&cg.jsxDEV("div",{className:"ls-vars-scope-body",children:G.sort().map((Y)=>cg.jsxDEV("div",{className:"ls-vars-entry",children:[cg.jsxDEV("span",{className:"ls-vars-key",children:Y},void 0,!1,void 0,this),cg.jsxDEV("span",{className:"ls-vars-value",title:String(X[Y]),children:S$(X[Y])},void 0,!1,void 0,this)]},Y,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var K0=tr(vg(),1);function Nn(l){if(!Number.isFinite(l)||l<=0)return"0 B";let v=["B","KB","MB","GB"],w=Math.min(v.length-1,Math.floor(Math.log(l)/Math.log(1024))),i=l/Math.pow(1024,w);return`${w===0?i.toFixed(0):i.toFixed(1)} ${v[w]}`}function L5(l){let v;if(typeof l==="number")v=l;else{if(!l)return"—";v=new Date(l).getTime()}if(!Number.isFinite(v)||v<=0)return"—";let w=Date.now()-v;if(w<60000)return"just now";if(w<3600000)return`${Math.floor(w/60000)}m ago`;if(w<86400000)return`${Math.floor(w/3600000)}h ago`;if(w<2592000000)return`${Math.floor(w/86400000)}d ago`;return new Date(v).toISOString().slice(0,10)}var Y8={script:"script",character:"char",chat:"chat"},RG={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Bn(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(w,i,n,P,O,H,R)=>{if(i)return`<span class="ls-json-key">${i}</span>${n}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(H)return`<span class="ls-json-null">${H}</span>`;if(R)return`<span class="ls-json-number">${R}</span>`;return w})}async function J8(l){try{return await navigator.clipboard.writeText(l),!0}catch{return!1}}var Ir=tr(rg(),1),dh=["script","character","chat"],k$=10485760,D$=41943040,V$=52428800;function _$(l){if(l>=D$)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(l>=k$)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function y$(l){if(l.scope==="character"){if(l.characterName)return`character: ${l.characterName} (${l.characterId})
${l.path}`;if(l.characterId)return`character: ${l.characterId} (not currently loaded)
${l.path}`}if(l.scope==="chat"){if(l.chatName)return`chat: ${l.chatName} (${l.chatId})
${l.path}`;if(l.chatId)return`chat: ${l.chatId} (not currently loaded)
${l.path}`}return l.path}function E$(l,v,w,i){switch(w){case"name":return l.name.localeCompare(v.name,void 0,{sensitivity:"base"});case"scope":return l.scope.localeCompare(v.scope);case"owner":{let n=i.get(l.scriptId)??l.scriptId,P=i.get(v.scriptId)??v.scriptId;return n.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return l.sizeBytes-v.sizeBytes;case"updated":return new Date(l.modifiedAt).getTime()-new Date(v.modifiedAt).getTime()}}var GG=({collections:l,scripts:v,sendToBackend:w,onInspect:i,onDrop:n})=>{let[P,O]=K0.useState(""),[H,R]=K0.useState(()=>new Set(dh)),[X,G]=K0.useState(null),[A,Y]=K0.useState("asc"),L=K0.useMemo(()=>{let B=new Map;for(let y of v)B.set(y.id,y.name);return B},[v]),S=K0.useMemo(()=>{if(!l)return null;let B=l;if(H.size<dh.length)B=B.filter((j)=>H.has(j.scope));let y=P.trim().toLowerCase();if(y)B=B.filter((j)=>j.name.toLowerCase().includes(y));if(X){let j=A==="asc"?1:-1;B=B.slice().sort((x,Wr)=>E$(x,Wr,X,L)*j)}return B},[l,H,P,X,A,L]),T=()=>w({type:"list_collections"}),_=(B)=>{R((y)=>{let j=new Set(y);if(j.has(B))j.delete(B);else j.add(B);if(j.size===0)return new Set(dh);return j})},rr=(B)=>{if(X!==B){G(B),Y("asc");return}if(A==="asc"){Y("desc");return}G(null)},nr=()=>{O(""),R(new Set(dh))},er=l?.length??0,a=S?.length??0,p=P.trim().length>0||H.size<dh.length,lr=(B)=>{if(X!==B)return Ir.jsxDEV(Dw,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return A==="asc"?Ir.jsxDEV(Ml,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Ir.jsxDEV(Ro,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Ir.jsxDEV("div",{className:"ls-status-section",children:[Ir.jsxDEV("div",{className:"ls-inject-header",children:[Ir.jsxDEV(dl,{size:10},void 0,!1,void 0,this),"Collections",er>0&&Ir.jsxDEV("span",{className:"ls-inject-count",children:er},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:T,children:Ir.jsxDEV(Av,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-status-section-body",children:l===null?Ir.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):l.length===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Ir.jsxDEV(Ir.Fragment,{children:[Ir.jsxDEV("div",{className:"ls-collections-filter",children:[Ir.jsxDEV("div",{className:"ls-collections-filter-search",children:[Ir.jsxDEV(R0,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(B)=>O(B.target.value)},void 0,!1,void 0,this),P&&Ir.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Ir.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-collections-filter-chips",children:dh.map((B)=>{let y=H.has(B);return Ir.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":B,"aria-pressed":y,title:y?`Hide ${B}-scoped`:`Show ${B}-scoped`,onClick:()=>_(B),children:Y8[B]},B,!1,void 0,this)})},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${a}/${er}`:er},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:[Ir.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Ir.jsxDEV("button",{onClick:nr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Ir.jsxDEV("div",{className:"ls-collections-list",children:[Ir.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S.map((B)=>{let y=L.get(B.scriptId)??`(${B.scriptId.slice(0,8)}…)`,j=!L.has(B.scriptId),x=j?`scriptId: ${B.scriptId} (not currently loaded)`:`${y} (${B.scriptId})`;return Ir.jsxDEV("div",{className:"ls-collections-row",children:[Ir.jsxDEV("span",{className:"ls-collections-name",title:B.name,children:B.name},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-scope","data-scope":B.scope,title:y$(B),children:Y8[B.scope]},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:`ls-collections-owner${j?" ls-collections-owner-unknown":""}`,title:x,children:y},void 0,!1,void 0,this),(()=>{let Wr=_$(B.sizeBytes),qr=(B.sizeBytes/V$*100).toFixed(B.sizeBytes<1048576?2:1),Gr=`${B.sizeBytes.toLocaleString()} bytes (${qr}% of 50 MB cap)`;return Ir.jsxDEV("span",{className:"ls-collections-size","data-budget":Wr.tier,title:Gr,style:Wr.tier==="normal"?void 0:{color:Wr.color,fontWeight:600},children:Nn(B.sizeBytes)},void 0,!1,void 0,this)})(),Ir.jsxDEV("span",{className:"ls-collections-updated",title:B.modifiedAt,children:L5(B.modifiedAt)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-actions",children:[Ir.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>i(B.path),children:Ir.jsxDEV(_w,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>n(B),children:Ir.jsxDEV(Ko,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},B.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Dg=tr(vg(),1),JG=tr(Ch(),1);var le=tr(vg(),1),XG=tr(Ch(),1);var Yg=tr(rg(),1);function c$(l){let{id:v,createdAt:w,updatedAt:i,...n}=l;try{return JSON.stringify(n,null,2)}catch{return"{}"}}var YG=({path:l,record:v,onClose:w,sendToBackend:i})=>{let[n,P]=le.useState(()=>c$(v)),[O,H]=le.useState(null),R=le.useRef(null),X=le.useRef(null),G=le.useRef(null);le.useEffect(()=>{let T=(_)=>{if(_.key==="Escape")w()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[w]),le.useEffect(()=>{let T=(_)=>{if(_.key!=="Tab")return;let rr=R.current;if(!rr)return;let nr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(nr.length===0)return;let er=nr[0],a=nr[nr.length-1],p=document.activeElement,lr=p!==null&&rr.contains(p);if(_.shiftKey){if(!lr||p===er)_.preventDefault(),a.focus()}else if(!lr||p===a)_.preventDefault(),er.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[]),le.useEffect(()=>{let T=setTimeout(()=>X.current?.focus(),0);return()=>clearTimeout(T)},[]);let A=()=>{let T;try{T=JSON.parse(n)}catch(_){let rr=_ instanceof Error?_.message:String(_);H(`JSON parse error: ${rr}`);return}if(T===null||typeof T!=="object"||Array.isArray(T)){H("Record must be a JSON object — not an array, null, or primitive.");return}H(null),i({type:"update_record",path:l,recordId:String(v.id),patch:T}),w()},Y=(T)=>{if((T.metaKey||T.ctrlKey)&&T.key==="Enter")T.preventDefault(),A()},L=String(v.id),S=Yg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)w()},children:Yg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:R,onClick:(T)=>T.stopPropagation(),children:[Yg.jsxDEV("div",{className:"ls-modal-header",children:[Yg.jsxDEV("span",{className:"ls-modal-title",children:[Yg.jsxDEV(sl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Yg.jsxDEV("button",{className:"ls-modal-close",onClick:w,title:"Cancel (Esc)",children:Yg.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-body",children:[Yg.jsxDEV("div",{className:"ls-edit-meta",children:[Yg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Yg.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Yg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Yg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Yg.jsxDEV("pre",{ref:G,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Bn(n)+`
`}},void 0,!1,void 0,this),Yg.jsxDEV("textarea",{ref:X,className:"ls-edit-textarea",value:n,onChange:(T)=>{if(P(T.target.value),O)H(null)},onKeyDown:Y,onScroll:(T)=>{let _=G.current;if(!_)return;_.scrollTop=T.currentTarget.scrollTop,_.scrollLeft=T.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Yg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Yg.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),Yg.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-drop-actions",children:[Yg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:w,children:"Cancel"},void 0,!1,void 0,this),Yg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:A,title:"Save (Ctrl/Cmd+Enter)",children:[Yg.jsxDEV(r5,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return XG.createPortal(S,document.body)};var f=tr(rg(),1),I1=50,a$=150,j$=1200,f$=4000,QG=({path:l,summary:v,records:w,total:i,error:n,stats:P,refreshToken:O,onClose:H,sendToBackend:R})=>{let[X,G]=Dg.useState(""),[A,Y]=Dg.useState(""),[L,S]=Dg.useState(0),[T,_]=Dg.useState("shallow"),[rr,nr]=Dg.useState(0),[er,a]=Dg.useState(()=>new Set),[p,lr]=Dg.useState(null),[B,y]=Dg.useState(null),[j,x]=Dg.useState("records");Dg.useEffect(()=>{let F=setTimeout(()=>Y(X),a$);return()=>clearTimeout(F)},[X]),Dg.useEffect(()=>{S(0)},[A,T]),Dg.useEffect(()=>{let F=A.trim();if(T==="jsonquery")R({type:"inspect_collection",path:l,jsonqueryFilter:F||void 0,limit:I1,offset:L*I1});else R({type:"inspect_collection",path:l,textFilter:F||void 0,deepFilter:T==="deep"||void 0,limit:I1,offset:L*I1})},[l,A,T,L,O,rr,R]),Dg.useEffect(()=>{let F=(or)=>{if(or.key==="Escape")H()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[H]);let Wr=Math.max(1,Math.ceil(i/I1)),qr=i===0?0:L*I1+1,Gr=Math.min(i,(L+1)*I1),Zr=Dg.useMemo(()=>{let F=l.match(/\/([^/]+)\.json$/);return F?F[1]:l},[l]),k=Dg.useMemo(()=>{if(!v)return null;if(v.scope==="character"&&v.characterName)return`character: ${v.characterName}`;if(v.scope==="chat"&&v.chatName)return`chat: ${v.chatName}`;return null},[v]),s=(F)=>{a((or)=>{let Or=new Set(or);return Or.add(F),Or}),setTimeout(()=>{a((or)=>{if(!or.has(F))return or;let Or=new Set(or);return Or.delete(F),Or})},j$)},vr=async(F)=>{if(await J8(String(F.id)))s(`${F.id}:id`)},zr=async(F)=>{if(await J8(JSON.stringify(F,null,2)))s(`${F.id}:json`)};Dg.useEffect(()=>{if(B===null)return;let F=setTimeout(()=>y(null),f$);return()=>clearTimeout(F)},[B]);let Xr=(F)=>{let or=String(F.id);if(B===or)R({type:"delete_record",path:l,recordId:or}),y(null);else y(or)};Dg.useEffect(()=>{y(null),lr(null)},[L,A,T,l]),Dg.useEffect(()=>{x("records")},[l]),Dg.useEffect(()=>{if(j!=="stats")return;R({type:"analyze_collection",path:l})},[j,l,O,rr,R]);let V=f.jsxDEV("div",{className:"ls-modal-overlay",onClick:(F)=>{if(F.target===F.currentTarget)H()},children:f.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(F)=>F.stopPropagation(),children:[f.jsxDEV("div",{className:"ls-modal-header",children:[f.jsxDEV("span",{className:"ls-modal-title",children:[f.jsxDEV(dl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-name",children:Zr},void 0,!1,void 0,this),k&&f.jsxDEV("span",{className:"ls-inspect-title-path",title:l,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-path",title:l,children:l},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:()=>nr((F)=>F+1),title:"Refresh records",style:{marginRight:4},children:f.jsxDEV(Av,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:H,title:"Close (Esc)",children:f.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":j==="records",onClick:()=>x("records"),children:[f.jsxDEV(cw,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":j==="stats",onClick:()=>x("stats"),children:[f.jsxDEV(A0,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j==="records"&&f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{className:"ls-inspect-toolbar",children:[f.jsxDEV("div",{className:"ls-inspect-search",children:[f.jsxDEV(R0,{size:12},void 0,!1,void 0,this),f.jsxDEV("input",{type:T==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:T==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":T==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:X,onChange:(F)=>G(F.target.value),autoFocus:!0,spellCheck:T!=="jsonquery",autoCorrect:T==="jsonquery"?"off":"on",autoCapitalize:T==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),f.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>_("shallow"),children:f.jsxDEV(R0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>_("deep"),children:f.jsxDEV(M0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>_("jsonquery"),children:f.jsxDEV(Wo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-pager",children:[f.jsxDEV("span",{className:"ls-inspect-pager-status",children:i===0?"No matching records":f.jsxDEV(f.Fragment,{children:["Showing ",f.jsxDEV("strong",{children:qr},void 0,!1,void 0,this),"–",f.jsxDEV("strong",{children:Gr},void 0,!1,void 0,this)," of ",f.jsxDEV("strong",{children:i},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.max(0,F-1)),disabled:L===0,title:"Previous page",children:f.jsxDEV(kw,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((F)=>Math.min(Wr-1,F+1)),disabled:L>=Wr-1,title:"Next page",children:f.jsxDEV(qv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n&&f.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[f.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),f.jsxDEV("span",{children:n},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-body",children:w===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):w.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:i===0&&A?f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{children:["No records match “",A,"”"]},void 0,!0,void 0,this),f.jsxDEV("button",{onClick:()=>G(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):i===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):f.jsxDEV("div",{className:"ls-inspect-records",children:w.map((F)=>{let or=String(F.id),Or=er.has(`${F.id}:id`),Ar=er.has(`${F.id}:json`);return f.jsxDEV("div",{className:"ls-inspect-record",children:[f.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${or}`,children:[f.jsxDEV("code",{children:[or.slice(0,12),"…"]},void 0,!0,void 0,this),f.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",f.jsxDEV("time",{title:new Date(F.createdAt).toISOString(),children:L5(F.createdAt)},void 0,!1,void 0,this),F.updatedAt!==F.createdAt&&f.jsxDEV(f.Fragment,{children:[" · ","updated ",f.jsxDEV("time",{title:new Date(F.updatedAt).toISOString(),children:L5(F.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Or?"Copied!":"Copy ID",onClick:()=>vr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Or?"var(--lumiverse-accent)":"inherit",opacity:Or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(pl,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Ar?"Copied!":"Copy full JSON",onClick:()=>zr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Ar?"var(--lumiverse-accent)":"inherit",opacity:Ar?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(Be,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(F),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(sl,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action"+(B===or?" ls-inspect-record-action-confirm":""),title:B===or?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Xr(F),style:{background:B===or?"rgba(246, 130, 130, 0.18)":"transparent",border:B===or?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:B===or?"3px 6px":4,marginLeft:2,cursor:"pointer",color:B===or?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:B===or?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:B===or?600:400,borderRadius:3},children:[f.jsxDEV(Ko,{size:11},void 0,!1,void 0,this),B===or?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Bn(p$(F))}},void 0,!1,void 0,this)]},or,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j==="stats"&&f.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):f.jsxDEV(rL,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return f.jsxDEV(f.Fragment,{children:[JG.createPortal(V,document.body),p&&f.jsxDEV(YG,{path:l,record:p,onClose:()=>lr(null),sendToBackend:R},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function p$(l){let{id:v,createdAt:w,updatedAt:i,...n}=l;try{return JSON.stringify(n,null,2)}catch{return String(l)}}var d$={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function s$(l){if(typeof l==="string")return`"${l.length>32?l.slice(0,30)+"…":l}"`;if(l===null)return"null";return String(l)}function Q8(l){if(!Number.isFinite(l))return"—";return Number.isInteger(l)?String(l):l.toFixed(2)}var rL=({stats:l})=>{return f.jsxDEV("div",{className:"ls-inspect-stats",children:[f.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",f.jsxDEV("strong",{children:l.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",l.totalRecords===1?"record":"records"," ·"," ",f.jsxDEV("strong",{children:l.fields.length},void 0,!1,void 0,this)," ",l.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-grid",children:l.fields.map((v)=>f.jsxDEV(gL,{field:v,totalRecords:l.totalRecords},v.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},gL=({field:l,totalRecords:v})=>{let w=v===0?0:Math.round(l.presence/v*100),i=Object.entries(l.types);return i.sort((n,P)=>P[1]-n[1]),f.jsxDEV("div",{className:"ls-inspect-stats-card",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[f.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:l.name,children:l.name},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${l.presence} of ${v} records`,children:[w,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:i.map(([n,P])=>f.jsxDEV("span",{className:d$[n],children:[n," · ",P]},n,!0,void 0,this))},void 0,!1,void 0,this),l.numericRange&&f.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[f.jsxDEV("span",{children:["min ",f.jsxDEV("strong",{children:Q8(l.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["max ",f.jsxDEV("strong",{children:Q8(l.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["mean ",f.jsxDEV("strong",{children:Q8(l.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),l.topValues.length>0&&f.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",l.topValues.length," of ",l.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:l.topValues.map((n,P)=>f.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(n.value),children:[f.jsxDEV("code",{children:s$(n.value)},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",n.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var I5=tr(vg(),1),zG=tr(Ch(),1);var ig=tr(rg(),1);function oL(l){if(l.scope==="character"&&l.characterName&&l.characterId)return{label:"Character",name:l.characterName,id:l.characterId};if(l.scope==="chat"&&l.chatName&&l.chatId)return{label:"Chat",name:l.chatName,id:l.chatId};return null}var mG=({target:l,recordCount:v,onConfirm:w,onCancel:i})=>{let n=I5.useRef(null);I5.useEffect(()=>{let O=(H)=>{if(H.key==="Escape")i()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[i]),I5.useEffect(()=>{let O=(H)=>{if(H.key!=="Tab")return;let R=n.current;if(!R)return;let X=Array.from(R.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(X.length===0)return;let G=X[0],A=X[X.length-1],Y=document.activeElement,L=Y!==null&&R.contains(Y);if(H.shiftKey){if(!L||Y===G)H.preventDefault(),A.focus()}else if(!L||Y===A)H.preventDefault(),G.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=ig.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)i()},children:ig.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:n,onClick:(O)=>O.stopPropagation(),children:[ig.jsxDEV("div",{className:"ls-modal-header",children:[ig.jsxDEV("span",{className:"ls-modal-title",children:[ig.jsxDEV(Ko,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ig.jsxDEV("button",{className:"ls-modal-close",onClick:i,title:"Cancel (Esc)",children:ig.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ig.jsxDEV("div",{className:"ls-drop-body",children:[ig.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ig.jsxDEV("div",{className:"ls-drop-target",children:[ig.jsxDEV("div",{className:"ls-drop-target-name",children:l.name},void 0,!1,void 0,this),ig.jsxDEV("div",{className:"ls-drop-target-meta",children:[ig.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":l.scope,children:RG[l.scope]},void 0,!1,void 0,this),ig.jsxDEV("span",{className:"ls-drop-target-size",children:Nn(l.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=oL(l);if(!O)return null;return ig.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",ig.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ig.jsxDEV("div",{className:"ls-drop-target-path",title:l.path,children:l.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v===null?ig.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):v>=0?ig.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:v===0?"Collection is currently empty.":ig.jsxDEV(ig.Fragment,{children:["Will delete ",ig.jsxDEV("strong",{children:v.toLocaleString()},void 0,!1,void 0,this)," ",v===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ig.jsxDEV("div",{className:"ls-drop-warning",children:[ig.jsxDEV(Cl,{size:12},void 0,!1,void 0,this),ig.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ig.jsxDEV("div",{className:"ls-drop-actions",children:[ig.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:i,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ig.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:w,children:[ig.jsxDEV(Ko,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return zG.createPortal(P,document.body)};var Qv=tr(rg(),1),KG=({variables:l,collections:v,scripts:w,sendToBackend:i,inspectPath:n,inspectRecords:P,inspectTotal:O,inspectError:H,inspectStats:R,inspectRefreshToken:X,onInspect:G,dropTarget:A,dropTargetCount:Y,onDrop:L,onDropConfirm:S})=>{return Qv.jsxDEV(Qv.Fragment,{children:[Qv.jsxDEV("div",{className:"ls-storage-list",children:[Qv.jsxDEV(WG,{variables:l,sendToBackend:i},void 0,!1,void 0,this),Qv.jsxDEV(GG,{collections:v,scripts:w,sendToBackend:i,onInspect:G,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n!==null&&Qv.jsxDEV(QG,{path:n,summary:v?.find((T)=>T.path===n),records:P,total:O,error:H,stats:R,refreshToken:X,onClose:()=>G(null),sendToBackend:i},void 0,!1,void 0,this),A!==null&&Qv.jsxDEV(mG,{target:A,recordCount:Y,onConfirm:S,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Hr=tr(rg(),1),UG=({onBackendMessage:l,sendToBackend:v})=>{let[w,i]=Jg.useState("manage"),[n,P]=Jg.useState([]),[O,H]=Jg.useState(en),[R,X]=Jg.useState({characterId:null,characterName:null,chatId:null}),[G,A]=Jg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[Y,L]=Jg.useState([]),[S,T]=Jg.useState([]),[_,rr]=Jg.useState(null),[nr,er]=Jg.useState(null),[a,p]=Jg.useState(null),[lr,B]=Jg.useState(null),[y,j]=Jg.useState(0),[x,Wr]=Jg.useState(null),[qr,Gr]=Jg.useState(0),[Zr,k]=Jg.useState(null),[s,vr]=Jg.useState(null),[zr,Xr]=Jg.useState(null),[V,F]=Jg.useState({});Jg.useEffect(()=>{let Ar=l((xr)=>{let br=xr;switch(br.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${br.scripts.length} script(s)`),P(br.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${br.script.id}, codeLen=${br.script.code?.length??-1}`),P((Cr)=>Cr.map((fr)=>fr.id===br.script.id?br.script:fr));break}case"settings_updated":H(br.settings);break;case"active_context":X({characterId:br.characterId,characterName:br.characterName,chatId:br.chatId}),v({type:"get_variables"});break;case"variables_updated":rr(br.variables);break;case"collections_list":er(br.collections);break;case"collection_records":B((Cr)=>{return br.records}),j(br.total),Wr(br.error??null);break;case"collection_stats":k((Cr)=>{return br.stats});break;case"collection_count":Xr((Cr)=>{return br.count});break;case"collections_updated":v({type:"list_collections"}),Gr((Cr)=>Cr+1);break;case"injections_updated":L(br.injections);break;case"tools_updated":T(br.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};A((fr)=>{let Wg=fr.consoleHistory[br.scriptId]??[],$o=Wg.length>0?[...Wg,Cr]:Wg;return{...fr,activeScriptId:br.scriptId,runId:br.runId,isRunning:!0,consoleHistory:{...fr.consoleHistory,[br.scriptId]:$o},scriptExecInfo:{...fr.scriptExecInfo,[br.scriptId]:{...fr.scriptExecInfo[br.scriptId],dot:"running"}}}}),F((fr)=>({...fr,[br.scriptId]:(fr[br.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;A((fr)=>{let Wg=fr.consoleHistory[br.scriptId]??[];if(Wg.length>=Cr)return fr;let wr=Wg.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:br.entry;return{...fr,consoleHistory:{...fr.consoleHistory,[br.scriptId]:[...Wg,wr]}}});break}case"execution_ended":A((Cr)=>{let fr=Cr.consoleHistory[br.scriptId]??[],Wg=Cr.scriptExecInfo[br.scriptId],$o=!br.success&&br.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:br.error}]:[],wr=!br.success?!0:Wg?.stickyError??!1,_o=!br.success||wr?"error":"success",Yo=br.duration??0,ag=br.success&&Yo===0&&(Wg?.duration??0)>0?Wg.duration:br.duration;return{...Cr,isRunning:!1,consoleHistory:$o.length?{...Cr.consoleHistory,[br.scriptId]:[...fr,...$o]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[br.scriptId]:{dot:_o,duration:ag,error:br.error??Wg?.error,stickyError:wr}}}});break;case"error":console.warn("[LumiScript]",br.message);break}});return v({type:"get_scripts"}),v({type:"get_settings"}),v({type:"get_active_context"}),v({type:"get_injections"}),v({type:"get_tools"}),Ar},[l,v]),Jg.useEffect(()=>{if(w==="storage")v({type:"list_collections"})},[w,v]),Jg.useEffect(()=>{if(Xr(null),s)v({type:"count_collection",path:s.path})},[s,v]);let or=Jg.useCallback((Ar)=>{A((xr)=>({...xr,consoleHistory:{...xr.consoleHistory,[Ar]:[]}}))},[]),Or=Jg.useCallback((Ar)=>{A((xr)=>{let br=xr.scriptExecInfo[Ar];if(!br?.stickyError)return xr;return{...xr,scriptExecInfo:{...xr.scriptExecInfo,[Ar]:{...br,dot:"idle",stickyError:!1}}}})},[]);return Hr.jsxDEV("div",{className:"ls-panel",children:[Hr.jsxDEV("div",{className:"ls-tabs",children:[Hr.jsxDEV("button",{className:`ls-tab-pill${w==="manage"?" ls-active":""}`,onClick:()=>i("manage"),children:[Hr.jsxDEV(Wo,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${w==="status"?" ls-active":""}`,onClick:()=>i("status"),children:[Hr.jsxDEV(Nw,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Hr.jsxDEV("button",{className:`ls-tab-pill${w==="storage"?" ls-active":""}`,onClick:()=>i("storage"),children:[Hr.jsxDEV(dl,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[w==="manage"&&Hr.jsxDEV(AG,{scripts:n,activeContext:R,execInfo:G.scriptExecInfo,activeRunScriptId:G.activeScriptId,isRunning:G.isRunning,consoleHistory:G.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:or,onScriptOpened:Or,sendToBackend:v},void 0,!1,void 0,this),w==="status"&&Hr.jsxDEV(eL,{scripts:n,execInfo:G.scriptExecInfo,invocationCounts:V,injections:Y,tools:S,sendToBackend:v},void 0,!1,void 0,this),w==="storage"&&Hr.jsxDEV(KG,{variables:_,collections:nr,scripts:n,sendToBackend:v,inspectPath:a,inspectRecords:lr,inspectTotal:y,inspectError:x,inspectStats:Zr,inspectRefreshToken:qr,onInspect:(Ar)=>{p(Ar),B(null),j(0),k(null)},dropTarget:s,dropTargetCount:zr,onDrop:vr,onDropConfirm:()=>{if(!s)return;let Ar=s.path;if(a===Ar)p(null),B(null),j(0),k(null);v({type:"drop_collection",path:Ar}),vr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},lL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},eL=({scripts:l,execInfo:v,invocationCounts:w,injections:i,tools:n,sendToBackend:P})=>{let O=l.filter((A)=>A.type==="trigger"&&A.enabled),H=Object.fromEntries(l.map((A)=>[A.id,A.name])),[R,X]=Jg.useState(new Set),G=(A)=>{X((Y)=>{let L=new Set(Y);if(L.has(A))L.delete(A);else L.add(A);return L})};return Hr.jsxDEV("div",{className:"ls-status-list",children:[Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(Wo,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((A)=>{let Y=v[A.id],L=Y?.dot??"idle",S={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],T=A.triggers??[],_=w[A.id];return Hr.jsxDEV("div",{className:"ls-status-row",children:[Hr.jsxDEV("div",{className:"ls-status-row-main",children:[Hr.jsxDEV("span",{className:S,title:lL[L]},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-name",children:A.name},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-status-right",children:[_!==void 0&&_>0&&Hr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${_} time${_!==1?"s":""} this session`,children:["×",_]},void 0,!0,void 0,this),Y?.duration!==void 0&&L!=="running"&&Hr.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[Y.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),T.length>0?Hr.jsxDEV("div",{className:"ls-status-events",children:T.map((rr)=>Hr.jsxDEV("span",{className:"ls-event-badge",children:[Hr.jsxDEV(Mv,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Hr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&Y?.error&&Hr.jsxDEV("div",{className:"ls-status-error-row",children:Hr.jsxDEV("span",{className:"ls-status-error-text",children:Y.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},A.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(b5,{size:10},void 0,!1,void 0,this),"Active Tools",n.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:n.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:n.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):n.map((A)=>Hr.jsxDEV("div",{className:"ls-tool-row",children:[Hr.jsxDEV("div",{className:"ls-tool-name",title:A.description,children:A.name},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-tool-meta",children:[A.council_eligible&&Hr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:A.scriptId,children:A.scriptName},void 0,!1,void 0,this),Hr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${A.name}`,title:`Unregister "${A.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:A.name}),children:Hr.jsxDEV(Ko,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},A.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section",children:[Hr.jsxDEV("div",{className:"ls-inject-header",children:[Hr.jsxDEV(o5,{size:10},void 0,!1,void 0,this),"Active Injections",i.length>0&&Hr.jsxDEV("span",{className:"ls-inject-count",children:i.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("div",{className:"ls-status-section-body",children:i.length===0?Hr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):i.map((A)=>{let Y=R.has(A.id);return Hr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>G(A.id),children:[Hr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${A.mode}`,title:A.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:A.mode==="intercept"?Hr.jsxDEV(Bw,{size:11},void 0,!1,void 0,this):Hr.jsxDEV(Zw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-body",children:[Hr.jsxDEV("div",{className:"ls-inject-header-row",children:[Hr.jsxDEV("span",{className:"ls-inject-id",title:A.id,children:A.id},void 0,!1,void 0,this),Hr.jsxDEV("div",{className:"ls-inject-meta",children:[Hr.jsxDEV("span",{className:"ls-inject-role",children:A.role},void 0,!1,void 0,this),A.mode==="intercept"&&A.depth>0&&Hr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${A.depth} message${A.depth!==1?"s":""}`,children:["d:",A.depth]},void 0,!0,void 0,this),A.ephemeral&&Hr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Hr.jsxDEV(z1,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-script",title:A.scriptId,children:H[A.scriptId]??A.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Hr.jsxDEV("span",{className:"ls-inject-chevron",children:Y?Hr.jsxDEV(Ml,{size:10},void 0,!1,void 0,this):Hr.jsxDEV(Ro,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&Hr.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:A.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},A.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var F5=tr(vg(),1);var Br=tr(rg(),1),$G=({onBackendMessage:l,sendToBackend:v})=>{let[w,i]=F5.useState(en),[n,P]=F5.useState([]);F5.useEffect(()=>{let X=l((G)=>{let A=G;if(A.type==="scripts_updated")P(A.scripts);if(A.type==="settings_updated")i(A.settings)});return v({type:"get_settings"}),v({type:"get_scripts"}),X},[l,v]);let O=n.filter((X)=>X.type==="trigger").length,H=n.filter((X)=>X.type==="library").length,R=(X)=>{v({type:"update_settings",patch:{enabled:X}})};return Br.jsxDEV("div",{className:"ls-settings",children:[Br.jsxDEV("div",{className:"ls-settings-header",children:Br.jsxDEV("span",{className:"ls-settings-title",children:[Br.jsxDEV(Ce,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-toggle-row",children:[Br.jsxDEV("label",{className:"ls-toggle",children:[Br.jsxDEV("input",{type:"checkbox",checked:w.enabled,onChange:(X)=>R(X.target.checked)},void 0,!1,void 0,this),Br.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-counts",children:[Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(Wo,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(X1,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:H},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(z1,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(w.scriptTimeoutMs/1000),onChange:(X)=>{let G=Math.max(5,Math.min(300,Number(X.target.value)||60));v({type:"update_settings",patch:{scriptTimeoutMs:G*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:w.consoleHistoryLimit,onChange:(X)=>{let G=Math.max(50,Math.min(2000,Number(X.target.value)||500));v({type:"update_settings",patch:{consoleHistoryLimit:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(v5,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:w.editorFontSize,onChange:(X)=>{let G=Math.max(10,Math.min(24,Number(X.target.value)||12));v({type:"update_settings",patch:{editorFontSize:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:w.autosaveDebounceMs,onChange:(X)=>{let G=Math.max(300,Math.min(5000,Number(X.target.value)||1200));v({type:"update_settings",patch:{autosaveDebounceMs:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(Ze,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:w.defaultTriggerTemplate,onChange:(X)=>v({type:"update_settings",patch:{defaultTriggerTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:w.defaultLibraryTemplate,onChange:(X)=>v({type:"update_settings",patch:{defaultLibraryTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function vL(l){let v=l?.type;return typeof v==="string"&&v.startsWith("dom_")}var Xo=new Map;function sh(l,v){Xo.set(l,v)}function Tl(l){let v=Xo.get(l);for(let[w,i]of zv)if(i.elementId===l){if(v)v.removeEventListener(i.event,i.handler);zv.delete(w)}Xo.delete(l)}var Z5=new Map,N5=new Map,F1=new Map,B5=new Map,zv=new Map;function LG(l,v){return`${l}:${v}`}function hL(l){let v=l.target,w={type:l.type};if(v){if(v.id)w.targetId=v.id;if("value"in v)w.targetValue=v.value;if("checked"in v)w.targetChecked=v.checked;if(v.dataset&&Object.keys(v.dataset).length>0){let i={};for(let[n,P]of Object.entries(v.dataset))if(P!==void 0)i[n]=P;w.dataset=i}}if(l instanceof MouseEvent)w.clientX=l.clientX,w.clientY=l.clientY;else if(typeof TouchEvent<"u"&&l instanceof TouchEvent){let i=l.touches[0]??l.changedTouches[0];if(i)w.clientX=i.clientX,w.clientY=i.clientY}if(l instanceof CustomEvent&&l.detail!==void 0)try{JSON.stringify(l.detail),w.detail=l.detail}catch{}return w}function bL(l,v){return`@scope ([data-ls-script="${v}"]) {
${l}
}`}function wL(l,v=5000){let w=document.querySelector(l);if(w)return Promise.resolve(w);return new Promise((i,n)=>{let P=!1,O=new MutationObserver(()=>{let H=document.querySelector(l);if(H&&!P)P=!0,O.disconnect(),i(H)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),n(Error(`waitForElement: timeout for "${l}"`))},v)})}function iL(l){return l.querySelector('[class*="_bubble_"]')}var ee=new Map,uL=50;function nL(l,v,w){if(ee.size>=uL){let i=ee.keys().next().value;if(i)ee.get(i)?.cancel(),ee.delete(i)}ee.set(l,{scriptId:v,cancel:w})}function tL(l){for(let[v,w]of ee)if(w.scriptId===l)w.cancel(),ee.delete(v)}function FG(l,v,w){let i=v((n)=>{if(!vL(n))return;let P=n;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:H,target:R,html:X,position:G,stableId:A,parentElementId:Y}=P;if(Xo.has(H)){console.warn(`[LumiScript] dom_inject: elementId "${H}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${H}">${X}</div>`,S=null;if(Y){let T=Xo.get(Y);if(!T){console.warn(`[LumiScript] dom_inject: parentElementId "${Y}" not in elementMap — drop`);break}let _=T.querySelector(R);if(!_){console.warn(`[LumiScript] dom_inject: selector "${R}" not found within parent "${Y}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,_.insertAdjacentElement(G,rr),S=rr}else S=l.dom.inject(R,L,G);if(S){if(Xo.set(H,S),Z5.set(H,O),A)N5.set(LG(O,A),H)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:H,messageId:R,html:X,position:G,stableId:A}=P,Y=(rr)=>{let nr=rr.querySelector("[data-part]"),er=nr?.getAttribute("data-part")??"character",a=nr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=G==="header"?` data-ls-tint="${er}"`:"",lr=` data-ls-mode="${a}"`,B=`<div data-ls-script="${O}" data-ls-el="${H}"${p}${lr}>${X}</div>`,y,j;if(G==="header")y=rr,j="afterbegin";else if(G==="footer"&&a==="minimal")y=rr,j="beforeend";else y=iL(rr)??rr,j="beforeend";let x=l.dom.inject(y,B,j);if(Xo.set(H,x),Z5.set(H,O),A)N5.set(LG(O,A),H)},L=`[data-message-id="${R}"]`,S=document.querySelector(L);if(S){Y(S);break}let T=!1;nL(H,O,()=>{T=!0}),wL(L).then((rr)=>{if(ee.delete(H),T)return;Y(rr)}).catch(()=>{ee.delete(H)});break}case"dom_update":{let O=Xo.get(P.elementId);if(!O)break;let H=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;H.innerHTML=P.html;break}case"dom_remove":{IG(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:H,css:R}=P,X=bL(R,O),G=l.dom.addStyle(X);F1.set(H,G),B5.set(H,O);break}case"dom_remove_style":{let O=F1.get(P.styleId);if(O)O(),F1.delete(P.styleId),B5.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:H,event:R,preventDefault:X}=P,G=Xo.get(O);if(!G)break;let A=(Y)=>{if(X)Y.preventDefault();let L=hL(Y);w({type:"dom_event",elementId:O,listenerId:H,event:R,data:L})};G.addEventListener(R,A),zv.set(H,{elementId:O,event:R,handler:A});break}case"dom_unlisten":{let O=zv.get(P.listenerId);if(!O)break;let H=Xo.get(O.elementId);if(H)H.removeEventListener(O.event,O.handler);zv.delete(P.listenerId);break}case"dom_cleanup_script":{let{scriptId:O}=P;tL(O);for(let[H,R]of Z5)if(R===O)IG(H);for(let[H,R]of B5)if(R===O){let X=F1.get(H);if(X)X();F1.delete(H),B5.delete(H)}for(let[H]of N5)if(H.startsWith(O+":"))N5.delete(H);break}case"dom_make_draggable":{let{elementId:O,handleSelector:H}=P,R=Xo.get(O);if(!R)break;let X=!1,G=!1;R.addEventListener("pointerdown",(A)=>{if(A.button!==0)return;if(H&&!A.target.closest(H))return;let Y=R.firstElementChild?.firstElementChild??R.firstElementChild??R,L=Y.getBoundingClientRect();Y.style.transform="none",Y.style.top=`${L.top}px`,Y.style.left=`${L.left}px`,Y.style.bottom="auto",Y.style.right="auto",X=!0,G=!1;let S=A.clientX-L.left,T=A.clientY-L.top;Y.style.cursor="grabbing";let _=(nr)=>{if(!X)return;G=!0,Y.style.top=`${nr.clientY-T}px`,Y.style.left=`${nr.clientX-S}px`},rr=()=>{if(!X)return;X=!1,Y.style.cursor="",document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",_),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),A.preventDefault()}),R.addEventListener("click",(A)=>{if(G)A.stopImmediatePropagation(),A.preventDefault(),G=!1},!0);break}}});return()=>{i();for(let[,n]of ee)n.cancel();ee.clear();for(let[,n]of zv){let P=Xo.get(n.elementId);if(P)P.removeEventListener(n.event,n.handler)}zv.clear();for(let[,n]of Xo)try{n.remove()}catch{}Xo.clear(),Z5.clear(),N5.clear();for(let[,n]of F1)try{n()}catch{}F1.clear(),B5.clear()}}function IG(l){for(let[w,i]of zv)if(i.elementId===l){let n=Xo.get(l);if(n)n.removeEventListener(i.event,i.handler);zv.delete(w)}let v=Xo.get(l);if(v)try{v.remove()}catch{}Xo.delete(l),Z5.delete(l)}function PL(l){let v=l?.type;return v==="ls_modal_open"||v==="ls_modal_set_title"||v==="ls_modal_dismiss"}var U0=new Map;function NG(l,v,w){let i=v((n)=>{if(!PL(n))return;let P=n;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:H,rootElementId:R,options:X}=P;if(U0.has(H))break;let G;try{G=l.ui.showModal({title:X.title,width:X.width,maxHeight:X.maxHeight,persistent:X.persistent})}catch(Y){console.warn("[LumiScript] ctx.ui.showModal failed:",Y),w({type:"ls_modal_dismissed",modalId:H});break}sh(R,G.root),G.root.setAttribute("data-ls-script",O),G.root.setAttribute("data-ls-modal",H);let A={modalId:H,rootElementId:R,handle:G,echoed:!1};U0.set(H,A),G.onDismiss(()=>{if(A.echoed)return;A.echoed=!0,Tl(R),U0.delete(H),w({type:"ls_modal_dismissed",modalId:H})}),w({type:"ls_modal_opened",modalId:H});break}case"ls_modal_set_title":{let O=U0.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=U0.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Tl(O.rootElementId),U0.delete(P.modalId),w({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{i();for(let n of U0.values()){try{n.handle.dismiss()}catch{}Tl(n.rootElementId)}U0.clear()}}function OL(l){return l?.type==="ls_context_menu_show"}function BG(l,v,w){let i=v(async(n)=>{if(!OL(n))return;let P=n,O=null;try{O=(await l.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(H){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",H)}w({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{i()}}function HL(l){let v=l?.type;return v==="ls_input_bar_action_register"||v==="ls_input_bar_action_set_label"||v==="ls_input_bar_action_set_subtitle"||v==="ls_input_bar_action_set_enabled"||v==="ls_input_bar_action_destroy"}var Ve=new Map;function qL(l,v){return`${l}:${v}`}function ZG(l,v,w){let i=v((n)=>{if(!HL(n))return;let P=n,O=qL(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let H=Ve.get(O);if(H){try{H.destroy()}catch{}Ve.delete(O)}let R;try{R=l.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(X){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",X);break}Ve.set(O,R),R.onClick(()=>{w({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),w({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let H=Ve.get(O);if(!H)break;try{H.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let H=Ve.get(O);if(!H)break;if(typeof H.setSubtitle!=="function")break;try{H.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let H=Ve.get(O);if(!H)break;try{H.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let H=Ve.get(O);if(!H)break;try{H.destroy()}catch{}Ve.delete(O);break}}});return()=>{i();for(let n of Ve.values())try{n.destroy()}catch{}Ve.clear()}}function AL(l){let v=l?.type;return v==="ls_float_widget_create"||v==="ls_float_widget_move"||v==="ls_float_widget_set_visible"||v==="ls_float_widget_destroy"}var mv=new Map;function xG(l,v,w){let i=v((n)=>{if(!AL(n))return;let P=n;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:H,rootElementId:R,options:X}=P,G=mv.get(H);if(G){try{G.handle.destroy()}catch{}Tl(G.rootElementId),mv.delete(H)}let A;try{A=l.ui.createFloatWidget({width:X.width,height:X.height,initialPosition:X.initialPosition,snapToEdge:X.snapToEdge,tooltip:X.tooltip,chromeless:X.chromeless})}catch(Y){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",Y);break}sh(R,A.root),A.root.setAttribute("data-ls-script",O),A.root.setAttribute("data-ls-widget",H),mv.set(H,{widgetId:H,rootElementId:R,handle:A}),A.onDragEnd((Y)=>{w({type:"ls_float_widget_drag_end",widgetId:H,x:Y.x,y:Y.y})}),w({type:"ls_float_widget_created",widgetId:H});break}case"ls_float_widget_move":{let O=mv.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=mv.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=mv.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Tl(O.rootElementId),mv.delete(P.widgetId);break}}});return()=>{i();for(let n of mv.values()){try{n.handle.destroy()}catch{}Tl(n.rootElementId)}mv.clear()}}function ML(l){let v=l?.type;return v==="ls_drawer_tab_register"||v==="ls_drawer_tab_set_title"||v==="ls_drawer_tab_set_short_name"||v==="ls_drawer_tab_set_badge"||v==="ls_drawer_tab_activate"||v==="ls_drawer_tab_destroy"}var ve=new Map;function WL(l,v){return`${l}:${v}`}function CG(l,v,w){let i=v((n)=>{if(!ML(n))return;let P=n,O=WL(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let H=ve.get(O);if(H){try{H.handle.destroy()}catch{}Tl(H.rootElementId),ve.delete(O)}let R;try{R=l.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(X){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",X);break}sh(P.rootElementId,R.root),R.root.setAttribute("data-ls-script",P.scriptId),R.root.setAttribute("data-ls-tab",P.tabId),ve.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:R}),R.onActivate(()=>{w({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),w({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let H=ve.get(O);if(!H)break;try{H.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let H=ve.get(O);if(!H)break;try{H.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let H=ve.get(O);if(!H)break;try{H.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let H=ve.get(O);if(!H)break;try{H.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let H=ve.get(O);if(!H)break;try{H.handle.destroy()}catch{}Tl(H.rootElementId),ve.delete(O);break}}});return()=>{i();for(let n of ve.values()){try{n.handle.destroy()}catch{}Tl(n.rootElementId)}ve.clear()}}var x5=tr(rg(),1);function hjg(l){let v=[],w=l.dom.addStyle(KW);v.push(w);let i=[],n=l.onBackendMessage((rr)=>{for(let nr of i)nr(rr)});v.push(n);let P=(rr)=>{return i.push(rr),()=>{let nr=i.indexOf(rr);if(nr!==-1)i.splice(nr,1)}},O=(rr)=>{l.sendToBackend(rr)},H=FG(l,P,O);v.push(H);let R=NG(l,P,O);v.push(R);let X=BG(l,P,O);v.push(X);let G=ZG(l,P,O);v.push(G);let A=xG(l,P,O);v.push(A);let Y=CG(l,P,O);v.push(Y),O({type:"frontend_ready"});let L=l.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),S=m8.createRoot(L.root);S.render(x5.jsxDEV(z8.StrictMode,{children:x5.jsxDEV(UG,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>{try{S.unmount()}catch{}try{L.destroy()}catch{}});let T=l.ui.mount("settings_extensions"),_=m8.createRoot(T);return _.render(x5.jsxDEV(z8.StrictMode,{children:x5.jsxDEV($G,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),v.push(()=>_.unmount()),()=>{for(let rr of v)try{rr()}catch{}l.dom.cleanup()}}export{hjg as setup};
