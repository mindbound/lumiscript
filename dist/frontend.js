var RQ=Object.create;var{getPrototypeOf:GQ,defineProperty:A8,getOwnPropertyNames:tQ}=Object;var XQ=Object.prototype.hasOwnProperty;function YQ(v){return this[v]}var JQ,QQ,Hr=(v,e,w)=>{var u=v!=null&&typeof v==="object";if(u){var n=e?JQ??=new WeakMap:QQ??=new WeakMap,H=n.get(v);if(H)return H}w=v!=null?RQ(GQ(v)):{};let O=e||!v||!v.__esModule?A8(w,"default",{value:v,enumerable:!0}):w;for(let q of tQ(v))if(!XQ.call(O,q))A8(O,q,{get:YQ.bind(v,q),enumerable:!0});if(u)n.set(v,O);return O};var Ge=(v,e)=>()=>(e||v((e={exports:{}}).exports,e),e.exports);var zQ=(v)=>v;function KQ(v,e){this[v]=zQ.bind(null,e)}var UQ=(v,e)=>{for(var w in e)A8(v,w,{get:e[w],enumerable:!0,configurable:!0,set:KQ.bind(e,w)})};var eg=Ge(($Q,ri)=>{(function(){function v(R,I){Object.defineProperty(u.prototype,R,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",I[0],I[1])}})}function e(R){if(R===null||typeof R!=="object")return null;return R=mo&&R[mo]||R["@@iterator"],typeof R==="function"?R:null}function w(R,I){R=(R=R.constructor)&&(R.displayName||R.name)||"ReactClass";var gr=R+"."+I;wr[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",I,R),wr[gr]=!0)}function u(R,I,gr){this.props=R,this.context=I,this.refs=rv,this.updater=gr||_o}function n(){}function H(R,I,gr){this.props=R,this.context=I,this.refs=rv,this.updater=gr||_o}function O(){}function q(R){return""+R}function G(R){try{q(R);var I=!1}catch(Rr){I=!0}if(I){I=console;var gr=I.error,ur=typeof Symbol==="function"&&Symbol.toStringTag&&R[Symbol.toStringTag]||R.constructor.name||"Object";return gr.call(I,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ur),q(R)}}function X(R){if(R==null)return null;if(typeof R==="function")return R.$$typeof===sh?null:R.displayName||R.name||null;if(typeof R==="string")return R;switch(R){case Ar:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case xr:return"Suspense";case br:return"SuspenseList";case Rg:return"Activity"}if(typeof R==="object")switch(typeof R.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),R.$$typeof){case or:return"Portal";case Yr:return R.displayName||"Context";case nr:return(R._context.displayName||"Context")+".Consumer";case Wr:var I=R.render;return R=R.displayName,R||(R=I.displayName||I.name||"",R=R!==""?"ForwardRef("+R+")":"ForwardRef"),R;case Cr:return I=R.displayName||null,I!==null?I:X(R.type)||"Memo";case ar:I=R._payload,R=R._init;try{return X(R(I))}catch(gr){}}return null}function t(R){if(R===Ar)return"<>";if(typeof R==="object"&&R!==null&&R.$$typeof===ar)return"<...>";try{var I=X(R);return I?"<"+I+">":"<...>"}catch(gr){return"<...>"}}function M(){var R=Sr.A;return R===null?null:R.getOwner()}function Y(){return Error("react-stack-top-frame")}function L(R){if(Fe.call(R,"key")){var I=Object.getOwnPropertyDescriptor(R,"key").get;if(I&&I.isReactWarning)return!1}return R.key!==void 0}function _(R,I){function gr(){Cw||(Cw=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",I))}gr.isReactWarning=!0,Object.defineProperty(R,"key",{get:gr,configurable:!0})}function C(){var R=X(this.type);return m1[R]||(m1[R]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),R=this.props.ref,R!==void 0?R:null}function V(R,I,gr,ur,Rr,Fr){var Nr=gr.ref;return R={$$typeof:er,type:R,key:I,props:gr,_owner:ur},(Nr!==void 0?Nr:null)!==null?Object.defineProperty(R,"ref",{enumerable:!1,get:C}):Object.defineProperty(R,"ref",{enumerable:!1,value:null}),R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(R,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(R,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Rr}),Object.defineProperty(R,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Fr}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R}function rr(R,I){return I=V(R.type,I,R.props,R._owner,R._debugStack,R._debugTask),R._store&&(I._store.validated=R._store.validated),I}function Pr(R){lr(R)?R._store&&(R._store.validated=1):typeof R==="object"&&R!==null&&R.$$typeof===ar&&(R._payload.status==="fulfilled"?lr(R._payload.value)&&R._payload.value._store&&(R._payload.value._store.validated=1):R._store&&(R._store.validated=1))}function lr(R){return typeof R==="object"&&R!==null&&R.$$typeof===er}function j(R){var I={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(gr){return I[gr]})}function p(R,I){return typeof R==="object"&&R!==null&&R.key!=null?(G(R.key),j(""+R.key)):I.toString(36)}function vr(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status==="string"?R.then(O,O):(R.status="pending",R.then(function(I){R.status==="pending"&&(R.status="fulfilled",R.value=I)},function(I){R.status==="pending"&&(R.status="rejected",R.reason=I)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function N(R,I,gr,ur,Rr){var Fr=typeof R;if(Fr==="undefined"||Fr==="boolean")R=null;var Nr=!1;if(R===null)Nr=!0;else switch(Fr){case"bigint":case"string":case"number":Nr=!0;break;case"object":switch(R.$$typeof){case er:case or:Nr=!0;break;case ar:return Nr=R._init,N(Nr(R._payload),I,gr,ur,Rr)}}if(Nr){Nr=R,Rr=Rr(Nr);var vg=ur===""?"."+p(Nr,0):ur;return Hg(Rr)?(gr="",vg!=null&&(gr=vg.replace(Be,"$&/")+"/"),N(Rr,I,gr,"",function(Jo){return Jo})):Rr!=null&&(lr(Rr)&&(Rr.key!=null&&(Nr&&Nr.key===Rr.key||G(Rr.key)),gr=rr(Rr,gr+(Rr.key==null||Nr&&Nr.key===Rr.key?"":(""+Rr.key).replace(Be,"$&/")+"/")+vg),ur!==""&&Nr!=null&&lr(Nr)&&Nr.key==null&&Nr._store&&!Nr._store.validated&&(gr._store.validated=2),Rr=gr),I.push(Rr)),1}if(Nr=0,vg=ur===""?".":ur+":",Hg(R))for(var Qr=0;Qr<R.length;Qr++)ur=R[Qr],Fr=vg+p(ur,Qr),Nr+=N(ur,I,gr,Fr,Rr);else if(Qr=e(R),typeof Qr==="function")for(Qr===R.entries&&(Ne||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ne=!0),R=Qr.call(R),Qr=0;!(ur=R.next()).done;)ur=ur.value,Fr=vg+p(ur,Qr++),Nr+=N(ur,I,gr,Fr,Rr);else if(Fr==="object"){if(typeof R.then==="function")return N(vr(R),I,gr,ur,Rr);throw I=String(R),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Nr}function E(R,I,gr){if(R==null)return R;var ur=[],Rr=0;return N(R,ur,"","",function(Fr){return I.call(gr,Fr,Rr++)}),ur}function f(R){if(R._status===-1){var I=R._ioInfo;I!=null&&(I.start=I.end=performance.now()),I=R._result;var gr=I();if(gr.then(function(Rr){if(R._status===0||R._status===-1){R._status=1,R._result=Rr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Rr)}},function(Rr){if(R._status===0||R._status===-1){R._status=2,R._result=Rr;var Fr=R._ioInfo;Fr!=null&&(Fr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Rr)}}),I=R._ioInfo,I!=null){I.value=gr;var ur=gr.displayName;typeof ur==="string"&&(I.name=ur)}R._status===-1&&(R._status=0,R._result=gr)}if(R._status===1)return I=R._result,I===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,I),"default"in I||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,I),I.default;throw R._result}function x(){var R=Sr.H;return R===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),R}function tr(){Sr.asyncTransitions--}function Mr(R){if(I1===null)try{var I=("require"+Math.random()).slice(0,7);I1=(ri&&ri[I]).call(ri,"timers").setImmediate}catch(gr){I1=function(ur){Tw===!1&&(Tw=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Rr=new MessageChannel;Rr.port1.onmessage=ur,Rr.port2.postMessage(void 0)}}return I1(R)}function Xr(R){return 1<R.length&&typeof AggregateError==="function"?AggregateError(R):R[0]}function Zr(R,I){I!==F1-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F1=I}function k(R,I,gr){var ur=Sr.actQueue;if(ur!==null)if(ur.length!==0)try{s(ur),Mr(function(){return k(R,I,gr)});return}catch(Rr){Sr.thrownErrors.push(Rr)}else Sr.actQueue=null;0<Sr.thrownErrors.length?(ur=Xr(Sr.thrownErrors),Sr.thrownErrors.length=0,gr(ur)):I(R)}function s(R){if(!B1){B1=!0;var I=0;try{for(;I<R.length;I++){var gr=R[I];do{Sr.didUsePromise=!1;var ur=gr(!1);if(ur!==null){if(Sr.didUsePromise){R[I]=gr,R.splice(0,I);return}gr=ur}else break}while(1)}R.length=0}catch(Rr){R.splice(0,I+1),Sr.thrownErrors.push(Rr)}finally{B1=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var er=Symbol.for("react.transitional.element"),or=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),nr=Symbol.for("react.consumer"),Yr=Symbol.for("react.context"),Wr=Symbol.for("react.forward_ref"),xr=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),Cr=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Rg=Symbol.for("react.activity"),mo=Symbol.iterator,wr={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(R){w(R,"forceUpdate")},enqueueReplaceState:function(R){w(R,"replaceState")},enqueueSetState:function(R){w(R,"setState")}},Yo=Object.assign,rv={};Object.freeze(rv),u.prototype.isReactComponent={},u.prototype.setState=function(R,I){if(typeof R!=="object"&&typeof R!=="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,I,"setState")},u.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};var cg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(U0 in cg)cg.hasOwnProperty(U0)&&v(U0,cg[U0]);n.prototype=u.prototype,cg=H.prototype=new n,cg.constructor=H,Yo(cg,u.prototype),cg.isPureReactComponent=!0;var Hg=Array.isArray,sh=Symbol.for("react.client.reference"),Sr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Fe=Object.prototype.hasOwnProperty,Gg=console.createTask?console.createTask:function(){return null};cg={react_stack_bottom_frame:function(R){return R()}};var Cw,hl,m1={},L1=cg.react_stack_bottom_frame.bind(cg,Y)(),Bi=Gg(t(Y)),Ne=!1,Be=/\/+/g,K0=typeof reportError==="function"?reportError:function(R){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R==="object"&&R!==null&&typeof R.message==="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(I))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",R);return}console.error(R)},Tw=!1,I1=null,F1=0,N1=!1,B1=!1,rb=typeof queueMicrotask==="function"?function(R){queueMicrotask(function(){return queueMicrotask(R)})}:Mr;cg=Object.freeze({__proto__:null,c:function(R){return x().useMemoCache(R)}});var U0={map:E,forEach:function(R,I,gr){E(R,function(){I.apply(this,arguments)},gr)},count:function(R){var I=0;return E(R,function(){I++}),I},toArray:function(R){return E(R,function(I){return I})||[]},only:function(R){if(!lr(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};$Q.Activity=Rg,$Q.Children=U0,$Q.Component=u,$Q.Fragment=Ar,$Q.Profiler=S,$Q.PureComponent=H,$Q.StrictMode=T,$Q.Suspense=xr,$Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sr,$Q.__COMPILER_RUNTIME=cg,$Q.act=function(R){var I=Sr.actQueue,gr=F1;F1++;var ur=Sr.actQueue=I!==null?I:[],Rr=!1;try{var Fr=R()}catch(Qr){Sr.thrownErrors.push(Qr)}if(0<Sr.thrownErrors.length)throw Zr(I,gr),R=Xr(Sr.thrownErrors),Sr.thrownErrors.length=0,R;if(Fr!==null&&typeof Fr==="object"&&typeof Fr.then==="function"){var Nr=Fr;return rb(function(){Rr||N1||(N1=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Qr,Jo){Rr=!0,Nr.then(function(gv){if(Zr(I,gr),gr===0){try{s(ur),Mr(function(){return k(gv,Qr,Jo)})}catch(gb){Sr.thrownErrors.push(gb)}if(0<Sr.thrownErrors.length){var $0=Xr(Sr.thrownErrors);Sr.thrownErrors.length=0,Jo($0)}}else Qr(gv)},function(gv){Zr(I,gr),0<Sr.thrownErrors.length?(gv=Xr(Sr.thrownErrors),Sr.thrownErrors.length=0,Jo(gv)):Jo(gv)})}}}var vg=Fr;if(Zr(I,gr),gr===0&&(s(ur),ur.length!==0&&rb(function(){Rr||N1||(N1=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sr.actQueue=null),0<Sr.thrownErrors.length)throw R=Xr(Sr.thrownErrors),Sr.thrownErrors.length=0,R;return{then:function(Qr,Jo){Rr=!0,gr===0?(Sr.actQueue=ur,Mr(function(){return k(vg,Qr,Jo)})):Qr(vg)}}},$Q.cache=function(R){return function(){return R.apply(null,arguments)}},$Q.cacheSignal=function(){return null},$Q.captureOwnerStack=function(){var R=Sr.getCurrentStack;return R===null?null:R()},$Q.cloneElement=function(R,I,gr){if(R===null||R===void 0)throw Error("The argument must be a React element, but you passed "+R+".");var ur=Yo({},R.props),Rr=R.key,Fr=R._owner;if(I!=null){var Nr;r:{if(Fe.call(I,"ref")&&(Nr=Object.getOwnPropertyDescriptor(I,"ref").get)&&Nr.isReactWarning){Nr=!1;break r}Nr=I.ref!==void 0}Nr&&(Fr=M()),L(I)&&(G(I.key),Rr=""+I.key);for(vg in I)!Fe.call(I,vg)||vg==="key"||vg==="__self"||vg==="__source"||vg==="ref"&&I.ref===void 0||(ur[vg]=I[vg])}var vg=arguments.length-2;if(vg===1)ur.children=gr;else if(1<vg){Nr=Array(vg);for(var Qr=0;Qr<vg;Qr++)Nr[Qr]=arguments[Qr+2];ur.children=Nr}ur=V(R.type,Rr,ur,Fr,R._debugStack,R._debugTask);for(Rr=2;Rr<arguments.length;Rr++)Pr(arguments[Rr]);return ur},$Q.createContext=function(R){return R={$$typeof:Yr,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:nr,_context:R},R._currentRenderer=null,R._currentRenderer2=null,R},$Q.createElement=function(R,I,gr){for(var ur=2;ur<arguments.length;ur++)Pr(arguments[ur]);ur={};var Rr=null;if(I!=null)for(Qr in hl||!("__self"in I)||"key"in I||(hl=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(I)&&(G(I.key),Rr=""+I.key),I)Fe.call(I,Qr)&&Qr!=="key"&&Qr!=="__self"&&Qr!=="__source"&&(ur[Qr]=I[Qr]);var Fr=arguments.length-2;if(Fr===1)ur.children=gr;else if(1<Fr){for(var Nr=Array(Fr),vg=0;vg<Fr;vg++)Nr[vg]=arguments[vg+2];Object.freeze&&Object.freeze(Nr),ur.children=Nr}if(R&&R.defaultProps)for(Qr in Fr=R.defaultProps,Fr)ur[Qr]===void 0&&(ur[Qr]=Fr[Qr]);Rr&&_(ur,typeof R==="function"?R.displayName||R.name||"Unknown":R);var Qr=1e4>Sr.recentlyCreatedOwnerStacks++;return V(R,Rr,ur,M(),Qr?Error("react-stack-top-frame"):L1,Qr?Gg(t(R)):Bi)},$Q.createRef=function(){var R={current:null};return Object.seal(R),R},$Q.forwardRef=function(R){R!=null&&R.$$typeof===Cr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof R!=="function"?console.error("forwardRef requires a render function but was given %s.",R===null?"null":typeof R):R.length!==0&&R.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",R.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),R!=null&&R.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var I={$$typeof:Wr,render:R},gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,R.name||R.displayName||(Object.defineProperty(R,"name",{value:ur}),R.displayName=ur)}}),I},$Q.isValidElement=lr,$Q.lazy=function(R){R={_status:-1,_result:R};var I={$$typeof:ar,_payload:R,_init:f},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return R._ioInfo=gr,I._debugInfo=[{awaited:gr}],I},$Q.memo=function(R,I){R==null&&console.error("memo: The first argument must be a component. Instead received: %s",R===null?"null":typeof R),I={$$typeof:Cr,type:R,compare:I===void 0?null:I};var gr;return Object.defineProperty(I,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,R.name||R.displayName||(Object.defineProperty(R,"name",{value:ur}),R.displayName=ur)}}),I},$Q.startTransition=function(R){var I=Sr.T,gr={};gr._updatedFibers=new Set,Sr.T=gr;try{var ur=R(),Rr=Sr.S;Rr!==null&&Rr(gr,ur),typeof ur==="object"&&ur!==null&&typeof ur.then==="function"&&(Sr.asyncTransitions++,ur.then(tr,tr),ur.then(O,K0))}catch(Fr){K0(Fr)}finally{I===null&&gr._updatedFibers&&(R=gr._updatedFibers.size,gr._updatedFibers.clear(),10<R&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),I!==null&&gr.types!==null&&(I.types!==null&&I.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),I.types=gr.types),Sr.T=I}},$Q.unstable_useCacheRefresh=function(){return x().useCacheRefresh()},$Q.use=function(R){return x().use(R)},$Q.useActionState=function(R,I,gr){return x().useActionState(R,I,gr)},$Q.useCallback=function(R,I){return x().useCallback(R,I)},$Q.useContext=function(R){var I=x();return R.$$typeof===nr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),I.useContext(R)},$Q.useDebugValue=function(R,I){return x().useDebugValue(R,I)},$Q.useDeferredValue=function(R,I){return x().useDeferredValue(R,I)},$Q.useEffect=function(R,I){return R==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useEffect(R,I)},$Q.useEffectEvent=function(R){return x().useEffectEvent(R)},$Q.useId=function(){return x().useId()},$Q.useImperativeHandle=function(R,I,gr){return x().useImperativeHandle(R,I,gr)},$Q.useInsertionEffect=function(R,I){return R==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useInsertionEffect(R,I)},$Q.useLayoutEffect=function(R,I){return R==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),x().useLayoutEffect(R,I)},$Q.useMemo=function(R,I){return x().useMemo(R,I)},$Q.useOptimistic=function(R,I){return x().useOptimistic(R,I)},$Q.useReducer=function(R,I,gr){return x().useReducer(R,I,gr)},$Q.useRef=function(R){return x().useRef(R)},$Q.useState=function(R){return x().useState(R)},$Q.useSyncExternalStore=function(R,I,gr){return x().useSyncExternalStore(R,I,gr)},$Q.useTransition=function(){return x().useTransition()},$Q.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var P9=Ge((mQ)=>{(function(){function v(){if(j=!1,E){var k=mQ.unstable_now();tr=k;var s=!0;try{r:{Pr=!1,lr&&(lr=!1,vr(f),f=-1),rr=!0;var er=V;try{g:{H(k);for(C=w(Y);C!==null&&!(C.expirationTime>k&&q());){var or=C.callback;if(typeof or==="function"){C.callback=null,V=C.priorityLevel;var Ar=or(C.expirationTime<=k);if(k=mQ.unstable_now(),typeof Ar==="function"){C.callback=Ar,H(k),s=!0;break g}C===w(Y)&&u(Y),H(k)}else u(Y);C=w(Y)}if(C!==null)s=!0;else{var T=w(L);T!==null&&G(O,T.startTime-k),s=!1}}break r}finally{C=null,V=er,rr=!1}s=void 0}}finally{s?Mr():E=!1}}}function e(k,s){var er=k.length;k.push(s);r:for(;0<er;){var or=er-1>>>1,Ar=k[or];if(0<n(Ar,s))k[or]=s,k[er]=Ar,er=or;else break r}}function w(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var s=k[0],er=k.pop();if(er!==s){k[0]=er;r:for(var or=0,Ar=k.length,T=Ar>>>1;or<T;){var S=2*(or+1)-1,nr=k[S],Yr=S+1,Wr=k[Yr];if(0>n(nr,er))Yr<Ar&&0>n(Wr,nr)?(k[or]=Wr,k[Yr]=er,or=Yr):(k[or]=nr,k[S]=er,or=S);else if(Yr<Ar&&0>n(Wr,er))k[or]=Wr,k[Yr]=er,or=Yr;else break r}}return s}function n(k,s){var er=k.sortIndex-s.sortIndex;return er!==0?er:k.id-s.id}function H(k){for(var s=w(L);s!==null;){if(s.callback===null)u(L);else if(s.startTime<=k)u(L),s.sortIndex=s.expirationTime,e(Y,s);else break;s=w(L)}}function O(k){if(lr=!1,H(k),!Pr)if(w(Y)!==null)Pr=!0,E||(E=!0,Mr());else{var s=w(L);s!==null&&G(O,s.startTime-k)}}function q(){return j?!0:mQ.unstable_now()-tr<x?!1:!0}function G(k,s){f=p(function(){k(mQ.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),mQ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var X=performance;mQ.unstable_now=function(){return X.now()}}else{var t=Date,M=t.now();mQ.unstable_now=function(){return t.now()-M}}var Y=[],L=[],_=1,C=null,V=3,rr=!1,Pr=!1,lr=!1,j=!1,p=typeof setTimeout==="function"?setTimeout:null,vr=typeof clearTimeout==="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null,E=!1,f=-1,x=5,tr=-1;if(typeof N==="function")var Mr=function(){N(v)};else if(typeof MessageChannel<"u"){var Xr=new MessageChannel,Zr=Xr.port2;Xr.port1.onmessage=v,Mr=function(){Zr.postMessage(null)}}else Mr=function(){p(v,0)};mQ.unstable_IdlePriority=5,mQ.unstable_ImmediatePriority=1,mQ.unstable_LowPriority=4,mQ.unstable_NormalPriority=3,mQ.unstable_Profiling=null,mQ.unstable_UserBlockingPriority=2,mQ.unstable_cancelCallback=function(k){k.callback=null},mQ.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<k?Math.floor(1000/k):5},mQ.unstable_getCurrentPriorityLevel=function(){return V},mQ.unstable_next=function(k){switch(V){case 1:case 2:case 3:var s=3;break;default:s=V}var er=V;V=s;try{return k()}finally{V=er}},mQ.unstable_requestPaint=function(){j=!0},mQ.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var er=V;V=k;try{return s()}finally{V=er}},mQ.unstable_scheduleCallback=function(k,s,er){var or=mQ.unstable_now();switch(typeof er==="object"&&er!==null?(er=er.delay,er=typeof er==="number"&&0<er?or+er:or):er=or,k){case 1:var Ar=-1;break;case 2:Ar=250;break;case 5:Ar=1073741823;break;case 4:Ar=1e4;break;default:Ar=5000}return Ar=er+Ar,k={id:_++,callback:s,priorityLevel:k,startTime:er,expirationTime:Ar,sortIndex:-1},er>or?(k.sortIndex=er,e(L,k),w(Y)===null&&k===w(L)&&(lr?(vr(f),f=-1):lr=!0,G(O,er-or))):(k.sortIndex=Ar,e(Y,k),Pr||rr||(Pr=!0,E||(E=!0,Mr()))),k},mQ.unstable_shouldYield=q,mQ.unstable_wrapCallback=function(k){var s=V;return function(){var er=V;V=s;try{return k.apply(this,arguments)}finally{V=er}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var H9=Ge((LQ)=>{var M8=Hr(eg());(function(){function v(){}function e(t){return""+t}function w(t,M,Y){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{e(L);var _=!1}catch(C){_=!0}return _&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),e(L)),{$$typeof:G,key:L==null?null:""+L,children:t,containerInfo:M,implementation:Y}}function u(t,M){if(t==="font")return"";if(typeof M==="string")return M==="use-credentials"?M:""}function n(t){return t===null?"`null`":t===void 0?"`undefined`":t===""?"an empty string":'something with type "'+typeof t+'"'}function H(t){return t===null?"`null`":t===void 0?"`undefined`":t===""?"an empty string":typeof t==="string"?JSON.stringify(t):typeof t==="number"?"`"+t+"`":'something with type "'+typeof t+'"'}function O(){var t=X.H;return t===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),t}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var q={d:{f:v,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},G=Symbol.for("react.portal"),X=M8.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),LQ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,LQ.createPortal=function(t,M){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error("Target container is not a DOM element.");return w(t,M,null,Y)},LQ.flushSync=function(t){var M=X.T,Y=q.p;try{if(X.T=null,q.p=2,t)return t()}finally{X.T=M,q.p=Y,q.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},LQ.preconnect=function(t,M){typeof t==="string"&&t?M!=null&&typeof M!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",H(M)):M!=null&&typeof M.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",n(M.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(t)),typeof t==="string"&&(M?(M=M.crossOrigin,M=typeof M==="string"?M==="use-credentials"?M:"":void 0):M=null,q.d.C(t,M))},LQ.prefetchDNS=function(t){if(typeof t!=="string"||!t)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(t));else if(1<arguments.length){var M=arguments[1];typeof M==="object"&&M.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",H(M)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",H(M))}typeof t==="string"&&q.d.D(t)},LQ.preinit=function(t,M){if(typeof t==="string"&&t?M==null||typeof M!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",H(M)):M.as!=="style"&&M.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',H(M.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",n(t)),typeof t==="string"&&M&&typeof M.as==="string"){var Y=M.as,L=u(Y,M.crossOrigin),_=typeof M.integrity==="string"?M.integrity:void 0,C=typeof M.fetchPriority==="string"?M.fetchPriority:void 0;Y==="style"?q.d.S(t,typeof M.precedence==="string"?M.precedence:void 0,{crossOrigin:L,integrity:_,fetchPriority:C}):Y==="script"&&q.d.X(t,{crossOrigin:L,integrity:_,fetchPriority:C,nonce:typeof M.nonce==="string"?M.nonce:void 0})}},LQ.preinitModule=function(t,M){var Y="";if(typeof t==="string"&&t||(Y+=" The `href` argument encountered was "+n(t)+"."),M!==void 0&&typeof M!=="object"?Y+=" The `options` argument encountered was "+n(M)+".":M&&("as"in M)&&M.as!=="script"&&(Y+=" The `as` option encountered was "+H(M.as)+"."),Y)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",Y);else switch(Y=M&&typeof M.as==="string"?M.as:"script",Y){case"script":break;default:Y=H(Y),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',Y,t)}if(typeof t==="string")if(typeof M==="object"&&M!==null){if(M.as==null||M.as==="script")Y=u(M.as,M.crossOrigin),q.d.M(t,{crossOrigin:Y,integrity:typeof M.integrity==="string"?M.integrity:void 0,nonce:typeof M.nonce==="string"?M.nonce:void 0})}else M==null&&q.d.M(t)},LQ.preload=function(t,M){var Y="";if(typeof t==="string"&&t||(Y+=" The `href` argument encountered was "+n(t)+"."),M==null||typeof M!=="object"?Y+=" The `options` argument encountered was "+n(M)+".":typeof M.as==="string"&&M.as||(Y+=" The `as` option encountered was "+n(M.as)+"."),Y&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',Y),typeof t==="string"&&typeof M==="object"&&M!==null&&typeof M.as==="string"){Y=M.as;var L=u(Y,M.crossOrigin);q.d.L(t,Y,{crossOrigin:L,integrity:typeof M.integrity==="string"?M.integrity:void 0,nonce:typeof M.nonce==="string"?M.nonce:void 0,type:typeof M.type==="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority==="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy==="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet==="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes==="string"?M.imageSizes:void 0,media:typeof M.media==="string"?M.media:void 0})}},LQ.preloadModule=function(t,M){var Y="";typeof t==="string"&&t||(Y+=" The `href` argument encountered was "+n(t)+"."),M!==void 0&&typeof M!=="object"?Y+=" The `options` argument encountered was "+n(M)+".":M&&("as"in M)&&typeof M.as!=="string"&&(Y+=" The `as` option encountered was "+n(M.as)+"."),Y&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',Y),typeof t==="string"&&(M?(Y=u(M.as,M.crossOrigin),q.d.m(t,{as:typeof M.as==="string"&&M.as!=="script"?M.as:void 0,crossOrigin:Y,integrity:typeof M.integrity==="string"?M.integrity:void 0})):q.d.m(t))},LQ.requestFormReset=function(t){q.d.r(t)},LQ.unstable_batchedUpdates=function(t,M){return t(M)},LQ.useFormState=function(t,M,Y){return O().useFormState(t,M,Y)},LQ.useFormStatus=function(){return O().useHostTransitionStatus()},LQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var xh=Ge((VI,O9)=>{O9.exports=H9()});var q9=Ge((IQ)=>{var lg=Hr(P9()),Ch=Hr(eg()),W8=Hr(xh());(function(){function v(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function e(r,g,o,l){if(o>=g.length)return l;var h=g[o],b=oo(r)?r.slice():cr({},r);return b[h]=e(r[h],g,o+1,l),b}function w(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(g[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return u(r,g,o,0)}}function u(r,g,o,l){var h=g[l],b=oo(r)?r.slice():cr({},r);return l+1===g.length?(b[o[l]]=b[h],oo(b)?b.splice(h,1):delete b[h]):b[h]=u(r[h],g,o,l+1),b}function n(r,g,o){var l=g[o],h=oo(r)?r.slice():cr({},r);if(o+1===g.length)return oo(h)?h.splice(l,1):delete h[l],h;return h[l]=n(r[l],g,o+1),h}function H(){return!1}function O(){return null}function q(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function G(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function X(){}function t(){}function M(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function Y(r,g,o,l){return new wX(r,g,o,l)}function L(r,g){r.context===f0&&(B6(r.current,2,g,r,null,null),je())}function _(r,g){if(Uv!==null){var o=g.staleFamilies;g=g.updatedFamilies,Kb(),WH(r.current,g,o),je()}}function C(r){Uv=r}function V(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function Pr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function lr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function j(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,l=g;;){var h=o.return;if(h===null)break;var b=h.alternate;if(b===null){if(l=h.return,l!==null){o=l;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===o)return j(h),r;if(b===l)return j(h),g;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=h,l=b;else{for(var i=!1,P=h.child;P;){if(P===o){i=!0,o=h,l=b;break}if(P===l){i=!0,l=h,o=b;break}P=P.sibling}if(!i){for(P=b.child;P;){if(P===o){i=!0,o=b,l=h;break}if(P===l){i=!0,l=b,o=h;break}P=P.sibling}if(!i)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function vr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=vr(r),g!==null)return g;r=r.sibling}return null}function N(r){if(r===null||typeof r!=="object")return null;return r=QA&&r[QA]||r["@@iterator"],typeof r==="function"?r:null}function E(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===$Y?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case gh:return"Fragment";case k6:return"Profiler";case ju:return"StrictMode";case V6:return"Suspense";case _6:return"SuspenseList";case E6:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case rh:return"Portal";case Jl:return r.displayName||"Context";case D6:return(r._context.displayName||"Context")+".Consumer";case xb:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case fu:return g=r.displayName||null,g!==null?g:E(r.type)||"Memo";case iv:g=r._payload,r=r._init;try{return E(r(g))}catch(o){}}return null}function f(r){return typeof r.tag==="number"?x(r):typeof r.name==="string"?r.name:null}function x(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return E(g);case 8:return g===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return x(r.return)}return null}function tr(r){return{current:r}}function Mr(r,g){0>dl?console.error("Unexpected pop."):(g!==c6[dl]&&console.error("Unexpected Fiber popped."),r.current=y6[dl],y6[dl]=null,c6[dl]=null,dl--)}function Xr(r,g,o){dl++,y6[dl]=r.current,c6[dl]=o,r.current=g}function Zr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){Xr(V0,g,r),Xr(Cb,r,r),Xr(D0,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?fq(g):P0:P0;break;default:if(o=g.tagName,g=g.namespaceURI)g=fq(g),g=aq(g,o);else switch(o){case"svg":g=Bh;break;case"math":g=c2;break;default:g=P0}}o=o.toLowerCase(),o=VP(null,o),o={context:g,ancestorInfo:o},Mr(D0,r),Xr(D0,o,r)}function s(r){Mr(D0,r),Mr(Cb,r),Mr(V0,r)}function er(){return Zr(D0.current)}function or(r){r.memoizedState!==null&&Xr(au,r,r);var g=Zr(D0.current),o=r.type,l=aq(g.context,o);o=VP(g.ancestorInfo,o),l={context:l,ancestorInfo:o},g!==l&&(Xr(Cb,r,r),Xr(D0,l,r))}function Ar(r){Cb.current===r&&(Mr(D0,r),Mr(Cb,r)),au.current===r&&(Mr(au,r),$5._currentValue=Re)}function T(){}function S(){if(Tb===0){zA=console.log,KA=console.info,UA=console.warn,$A=console.error,mA=console.group,LA=console.groupCollapsed,IA=console.groupEnd;var r={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Tb++}function nr(){if(Tb--,Tb===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:zA}),info:cr({},r,{value:KA}),warn:cr({},r,{value:UA}),error:cr({},r,{value:$A}),group:cr({},r,{value:mA}),groupCollapsed:cr({},r,{value:LA}),groupEnd:cr({},r,{value:IA})})}0>Tb&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Yr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Wr(r){if(j6===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);j6=g&&g[1]||"",FA=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j6+r+FA}function xr(r,g){if(!r||f6)return"";var o=a6.get(r);if(o!==void 0)return o;f6=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=Z.H,Z.H=null,S();try{var h={DetermineComponentFrameRoot:function(){try{if(g){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(hr){var F=hr}Reflect.construct(r,[],Q)}else{try{Q.call()}catch(hr){F=hr}r.call(Q.prototype)}}else{try{throw Error()}catch(hr){F=hr}(Q=r())&&typeof Q.catch==="function"&&Q.catch(function(){})}}catch(hr){if(hr&&F&&typeof hr.stack==="string")return[hr.stack,F.stack]}return[null,null]}};h.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(h.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(h.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=h.DetermineComponentFrameRoot(),P=i[0],A=i[1];if(P&&A){var W=P.split(`
`),$=A.split(`
`);for(i=b=0;b<W.length&&!W[b].includes("DetermineComponentFrameRoot");)b++;for(;i<$.length&&!$[i].includes("DetermineComponentFrameRoot");)i++;if(b===W.length||i===$.length)for(b=W.length-1,i=$.length-1;1<=b&&0<=i&&W[b]!==$[i];)i--;for(;1<=b&&0<=i;b--,i--)if(W[b]!==$[i]){if(b!==1||i!==1)do if(b--,i--,0>i||W[b]!==$[i]){var m=`
`+W[b].replace(" at new "," at ");return r.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",r.displayName)),typeof r==="function"&&a6.set(r,m),m}while(1<=b&&0<=i);break}}}finally{f6=!1,Z.H=l,nr(),Error.prepareStackTrace=o}return W=(W=r?r.displayName||r.name:"")?Wr(W):"",typeof r==="function"&&a6.set(r,W),W}function br(r,g){switch(r.tag){case 26:case 27:case 5:return Wr(r.type);case 16:return Wr("Lazy");case 13:return r.child!==g&&g!==null?Wr("Suspense Fallback"):Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 15:return xr(r.type,!1);case 11:return xr(r.type.render,!1);case 1:return xr(r.type,!0);case 31:return Wr("Activity");default:return""}}function Cr(r){try{var g="",o=null;do{g+=br(r,o);var l=r._debugInfo;if(l)for(var h=l.length-1;0<=h;h--){var b=l[h];if(typeof b.name==="string"){var i=g;r:{var{name:P,env:A,debugLocation:W}=b;if(W!=null){var $=Yr(W),m=$.lastIndexOf(`
`),Q=m===-1?$:$.slice(m+1);if(Q.indexOf(P)!==-1){var F=`
`+Q;break r}}F=Wr(P+(A?" ["+A+"]":""))}g=i+F}}o=r,r=r.return}while(r);return g}catch(hr){return`
Error generating stack: `+hr.message+`
`+hr.stack}}function ar(r){return(r=r?r.displayName||r.name:"")?Wr(r):""}function Rg(){if(nv===null)return null;var r=nv._debugOwner;return r!=null?f(r):null}function mo(){if(nv===null)return"";var r=nv;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Wr(r.type);break;case 13:g+=Wr("Suspense");break;case 19:g+=Wr("SuspenseList");break;case 31:g+=Wr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=ar(r.type));break;case 11:r._debugOwner||g!==""||(g+=ar(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var h=Yr(l);h!==""&&(g+=`
`+h)}}else if(r.debugStack!=null){var b=r.debugStack;(r=r.owner)&&b&&(g+=`
`+Yr(b))}else break;var i=g}catch(P){i=`
Error generating stack: `+P.message+`
`+P.stack}return i}function wr(r,g,o,l,h,b,i){var P=nv;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,l,h,b,i)):g(o,l,h,b,i)}finally{_o(P)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){Z.getCurrentStack=r===null?null:mo,Ql=!1,nv=r}function Yo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rv(r){try{return cg(r),!1}catch(g){return!0}}function cg(r){return""+r}function Hg(r,g){if(rv(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),cg(r)}function sh(r,g){if(rv(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,Yo(r)),cg(r)}function Sr(r){if(rv(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Yo(r)),cg(r)}function Fe(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{vh=g.inject(r),zo=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Gg(r){if(typeof ZY==="function"&&xY(r),zo&&typeof zo.setStrictMode==="function")try{zo.setStrictMode(vh,r)}catch(g){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",g))}}function Cw(r){return r>>>=0,r===0?32:31-(CY(r)/TY|0)|0}function hl(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function m1(r,g,o){var l=r.pendingLanes;if(l===0)return 0;var h=0,b=r.suspendedLanes,i=r.pingedLanes;r=r.warmLanes;var P=l&134217727;return P!==0?(l=P&~b,l!==0?h=hl(l):(i&=P,i!==0?h=hl(i):o||(o=P&~r,o!==0&&(h=hl(o))))):(P=l&~b,P!==0?h=hl(P):i!==0?h=hl(i):o||(o=l&~r,o!==0&&(h=hl(o)))),h===0?0:g!==0&&g!==h&&(g&b)===0&&(b=h&-h,o=g&-g,b>=o||b===32&&(o&4194048)!==0)?g:h}function L1(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Bi(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Ne(){var r=su;return su<<=1,(su&62914560)===0&&(su=4194304),r}function Be(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function K0(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Tw(r,g,o,l,h,b){var i=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:P,expirationTimes:A,hiddenUpdates:W}=r;for(o=i&~o;0<o;){var $=31-Io(o),m=1<<$;P[$]=0,A[$]=-1;var Q=W[$];if(Q!==null)for(W[$]=null,$=0;$<Q.length;$++){var F=Q[$];F!==null&&(F.lane&=-536870913)}o&=~m}l!==0&&I1(r,l,0),b!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=b&~(i&~g))}function I1(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-Io(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function F1(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var l=31-Io(o),h=1<<l;h&g|r[l]&g&&(r[l]|=g),o&=~h}}function N1(r,g){var o=g&-g;return o=(o&42)!==0?1:B1(o),(o&(r.suspendedLanes|g))!==0?0:o}function B1(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function rb(r,g,o){if(Kl)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-Io(o),h=1<<l;r[l].add(g),o&=~h}}function U0(r,g){if(Kl)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<g;){var h=31-Io(g);r=1<<h,h=o[h],0<h.size&&(h.forEach(function(b){var i=b.alternate;i!==null&&l.has(i)||l.add(b)}),h.clear()),g&=~r}}function R(r){return r&=-r,Pv!==0&&Pv<r?_v!==0&&_v<r?(r&134217727)!==0?Ul:r2:_v:Pv}function I(){var r=wg.p;if(r!==0)return r;return r=window.event,r===void 0?Ul:WA(r.type)}function gr(r,g){var o=wg.p;try{return wg.p=r,g()}finally{wg.p=o}}function ur(r){delete r[Ao],delete r[Fo],delete r[gn],delete r[SY],delete r[kY]}function Rr(r){var g=r[Ao];if(g)return g;for(var o=r.parentNode;o;){if(g=o[E0]||o[Ao]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=lA(r);r!==null;){if(o=r[Ao])return o;r=lA(r)}return g}r=o,o=r.parentNode}return null}function Fr(r){if(r=r[Ao]||r[E0]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Nr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function vg(r){var g=r[NA];return g||(g=r[NA]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Qr(r){r[Sb]=!0}function Jo(r,g){gv(r,g),gv(r+"Capture",g)}function gv(r,g){p1[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),p1[r]=g;var o=r.toLowerCase();on[o]=r,r==="onDoubleClick"&&(on.ondblclick=r);for(r=0;r<g.length;r++)BA.add(g[r])}function $0(r,g){DY[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function gb(r){if(Vv.call(xA,r))return!0;if(Vv.call(ZA,r))return!1;if(VY.test(r))return xA[r]=!0;return ZA[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function UP(r,g,o){if(gb(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return Hg(o,g),r===""+o?o:r}}function Sw(r,g,o){if(gb(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}Hg(o,g),r.setAttribute(g,""+o)}}function kw(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}Hg(o,g),r.setAttribute(g,""+o)}}function Vl(r,g,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Hg(l,o),r.setAttributeNS(g,o,""+l)}}function Yv(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Sr(r),r;default:return""}}function $P(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function Tt(r,g,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:h,set:b}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return h.call(this)},set:function(i){Sr(i),o=""+i,b.call(this,i)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(i){Sr(i),o=""+i},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function Zi(r){if(!r._valueTracker){var g=$P(r)?"checked":"value";r._valueTracker=Tt(r,g,""+r[g])}}function mP(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),l="";return r&&(l=$P(r)?r.checked?"true":"false":r.value),r=l,r!==o?(g.setValue(r),!0):!1}function Dw(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Jv(r){return r.replace(_Y,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function LP(r,g){g.checked===void 0||g.defaultChecked===void 0||TA||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Rg()||"A component",g.type),TA=!0),g.value===void 0||g.defaultValue===void 0||CA||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Rg()||"A component",g.type),CA=!0)}function xi(r,g,o,l,h,b,i,P){if(r.name="",i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"?(Hg(i,"type"),r.type=i):r.removeAttribute("type"),g!=null)if(i==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+Yv(g)}else r.value!==""+Yv(g)&&(r.value=""+Yv(g));else i!=="submit"&&i!=="reset"||r.removeAttribute("value");g!=null?Ci(r,i,Yv(g)):o!=null?Ci(r,i,Yv(o)):l!=null&&r.removeAttribute("value"),h==null&&b!=null&&(r.defaultChecked=!!b),h!=null&&(r.checked=h&&typeof h!=="function"&&typeof h!=="symbol"),P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(Hg(P,"name"),r.name=""+Yv(P)):r.removeAttribute("name")}function IP(r,g,o,l,h,b,i,P){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Hg(b,"type"),r.type=b),g!=null||o!=null){if(!(b!=="submit"&&b!=="reset"||g!==void 0&&g!==null)){Zi(r);return}o=o!=null?""+Yv(o):"",g=g!=null?""+Yv(g):o,P||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:h,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=P?r.checked:!!l,r.defaultChecked=!!l,i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"&&(Hg(i,"name"),r.name=i),Zi(r)}function Ci(r,g,o){g==="number"&&Dw(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function FP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?Ch.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||kA||(kA=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||DA||(DA=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||SA||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),SA=!0)}function NP(){var r=Rg();return r?`

Check the render method of \``+r+"`.":""}function Ze(r,g,o,l){if(r=r.options,g){g={};for(var h=0;h<o.length;h++)g["$"+o[h]]=!0;for(o=0;o<r.length;o++)h=g.hasOwnProperty("$"+r[o].value),r[o].selected!==h&&(r[o].selected=h),h&&l&&(r[o].defaultSelected=!0)}else{o=""+Yv(o),g=null;for(h=0;h<r.length;h++){if(r[h].value===o){r[h].selected=!0,l&&(r[h].defaultSelected=!0);return}g!==null||r[h].disabled||(g=r[h])}g!==null&&(g.selected=!0)}}function BP(r,g){for(r=0;r<_A.length;r++){var o=_A[r];if(g[o]!=null){var l=oo(g[o]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,NP()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,NP())}}g.value===void 0||g.defaultValue===void 0||VA||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),VA=!0)}function ZP(r,g){g.value===void 0||g.defaultValue===void 0||EA||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Rg()||"A component"),EA=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function xP(r,g,o){if(g!=null&&(g=""+Yv(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+Yv(o):""}function CP(r,g,o,l){if(g==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(oo(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),g=o}o=Yv(g),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),Zi(r)}function TP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?TP(r.children[0],g):r}function ov(r){return"  "+"  ".repeat(r)}function xe(r){return"+ "+"  ".repeat(r)}function Z1(r){return"- "+"  ".repeat(r)}function SP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function ob(r,g){return yA.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function Vw(r,g,o){var l=120-2*o;if(g===null)return xe(o)+ob(r,l)+`
`;if(typeof g==="string"){for(var h=0;h<g.length&&h<r.length&&g.charCodeAt(h)===r.charCodeAt(h);h++);return h>l-8&&10<h&&(r="..."+r.slice(h-8),g="..."+g.slice(h-8)),xe(o)+ob(r,l)+`
`+Z1(o)+ob(g,l)+`
`}return ov(o)+ob(r,l)+`
`}function Ti(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function vb(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(oo(r))return"[...]";if(r.$$typeof===Yl)return(g=E(r.type))?"<"+g+">":"<...>";var o=Ti(r);if(o==="Object"){o="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var h=JSON.stringify(l);if(h!=='"'+l+'"'&&(l=h),g-=l.length-2,h=vb(r[l],15>g?g:15),g-=h.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+h}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function Ce(r,g){return typeof r!=="string"||yA.test(r)?"{"+vb(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function Si(r,g,o){var l=120-o.length-r.length,h=[],b;for(b in g)if(g.hasOwnProperty(b)&&b!=="children"){var i=Ce(g[b],120-o.length-b.length-1);l-=b.length+i.length+2,h.push(b+"="+i)}return h.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+h.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+h.join(`
`+o+"  ")+`
`+o+`>
`}function St(r,g,o){var l="",h=cr({},g),b;for(b in r)if(r.hasOwnProperty(b)){delete h[b];var i=120-2*o-b.length-2,P=vb(r[b],i);g.hasOwnProperty(b)?(i=vb(g[b],i),l+=xe(o)+b+": "+P+`
`,l+=Z1(o)+b+": "+i+`
`):l+=xe(o)+b+": "+P+`
`}for(var A in h)h.hasOwnProperty(A)&&(r=vb(h[A],120-2*o-A.length-2),l+=Z1(o)+A+": "+r+`
`);return l}function kt(r,g,o,l){var h="",b=new Map;for(W in o)o.hasOwnProperty(W)&&b.set(W.toLowerCase(),W);if(b.size===1&&b.has("children"))h+=Si(r,g,ov(l));else{for(var i in g)if(g.hasOwnProperty(i)&&i!=="children"){var P=120-2*(l+1)-i.length-1,A=b.get(i.toLowerCase());if(A!==void 0){b.delete(i.toLowerCase());var W=g[i];A=o[A];var $=Ce(W,P);P=Ce(A,P),typeof W==="object"&&W!==null&&typeof A==="object"&&A!==null&&Ti(W)==="Object"&&Ti(A)==="Object"&&(2<Object.keys(W).length||2<Object.keys(A).length||-1<$.indexOf("...")||-1<P.indexOf("..."))?h+=ov(l+1)+i+`={{
`+St(W,A,l+2)+ov(l+1)+`}}
`:(h+=xe(l+1)+i+"="+$+`
`,h+=Z1(l+1)+i+"="+P+`
`)}else h+=ov(l+1)+i+"="+Ce(g[i],P)+`
`}b.forEach(function(m){if(m!=="children"){var Q=120-2*(l+1)-m.length-1;h+=Z1(l+1)+m+"="+Ce(o[m],Q)+`
`}}),h=h===""?ov(l)+"<"+r+`>
`:ov(l)+"<"+r+`
`+h+ov(l)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(b="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=""+g;h+=Vw(b,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")h=r==null?h+Vw(""+g,null,l+1):h+Vw(""+g,void 0,l+1);return h}function kP(r,g){var o=SP(r);if(o===null){o="";for(r=r.child;r;)o+=kP(r,g),r=r.sibling;return o}return ov(g)+"<"+o+`>
`}function ki(r,g){var o=TP(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return ov(g)+`...
`+ki(o,g+1);o="";var l=r.fiber._debugInfo;if(l)for(var h=0;h<l.length;h++){var b=l[h].name;typeof b==="string"&&(o+=ov(g)+"<"+b+`>
`,g++)}if(l="",h=r.fiber.pendingProps,r.fiber.tag===6)l=Vw(h,r.serverProps,g),g++;else if(b=SP(r.fiber),b!==null)if(r.serverProps===void 0){l=g;var i=120-2*l-b.length-2,P="";for(W in h)if(h.hasOwnProperty(W)&&W!=="children"){var A=Ce(h[W],15);if(i-=W.length+A.length+2,0>i){P+=" ...";break}P+=" "+W+"="+A}l=ov(l)+"<"+b+P+`>
`,g++}else r.serverProps===null?(l=Si(b,h,xe(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=kt(b,h,r.serverProps,g),g++);var W="";h=r.fiber.child;for(b=0;h&&b<r.children.length;)i=r.children[b],i.fiber===h?(W+=ki(i,g),b++):W+=kP(h,g),h=h.sibling;h&&0<r.children.length&&(W+=ov(g)+`...
`),h=r.serverTail,r.serverProps===null&&g--;for(r=0;r<h.length;r++)b=h[r],W=typeof b==="string"?W+(Z1(g)+ob(b,120-2*g)+`
`):W+Si(b.type,b.props,Z1(g));return o+l+W}function Di(r){try{return`

`+ki(r,0)}catch(g){return""}}function DP(r,g,o){for(var l=g,h=null,b=0;l;)l===r&&(b=0),h={fiber:l,children:h!==null?[h]:[],serverProps:l===g?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:b},b++,l=l.return;return h!==null?Di(h).replaceAll(/^[+-]/gm,">"):""}function VP(r,g){var o=cr({},r||jA),l={tag:g};if(cA.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),yY.indexOf(g)!==-1&&(o.pTagInButtonScope=null),EY.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,g==="form"&&(o.formTag=l),g==="a"&&(o.aTagInScope=l),g==="button"&&(o.buttonTagInScope=l),g==="nobr"&&(o.nobrTagInScope=l),g==="p"&&(o.pTagInButtonScope=l),g==="li"&&(o.listItemTagAutoclosing=l),g==="dd"||g==="dt")o.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function _P(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return cY.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function Dt(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function EP(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function Vi(r,g){g=g||jA;var o=g.current;if(g=(o=_P(r,o&&o.tag,g.implicitRootScope)?null:o)?null:Dt(r,g),g=o||g,!g)return!0;var l=g.tag;if(g=String(!!o)+"|"+r+"|"+l,g2[g])return!1;g2[g]=!0;var h=(g=nv)?EP(g.return,l):null,b=g!==null&&h!==null?DP(h,g,null):"",i="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,i,l,o,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,i,l,b),g&&(r=g.return,h===null||r===null||h===r&&r._debugOwner===g._debugOwner||wr(h,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,i)})),!1}function _w(r,g,o){if(o||_P("#text",g,!1))return!0;if(o="#text|"+g,g2[o])return!1;g2[o]=!0;var l=(o=nv)?EP(o,g):null;return o=o!==null&&l!==null?DP(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function lb(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function Vt(r){return r.replace(aY,function(g,o){return o.toUpperCase()})}function yP(r,g,o){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?lh.hasOwnProperty(g)&&lh[g]||(lh[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,Vt(g.replace(fY,"ms-")))):jY.test(g)?lh.hasOwnProperty(g)&&lh[g]||(lh[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!pA.test(o)||ln.hasOwnProperty(o)&&ln[o]||(ln[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(pA,""))),typeof o==="number"&&(isNaN(o)?dA||(dA=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||sA||(sA=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,o):typeof o!=="number"||o===0||rM.has(g)?g==="float"?r.cssFloat=o:(sh(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function cP(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var l={};if(o){for(var h in o)if(o.hasOwnProperty(h)&&!g.hasOwnProperty(h))for(var b=vn[h]||[h],i=0;i<b.length;i++)l[b[i]]=h}for(var P in g)if(g.hasOwnProperty(P)&&(!o||o[P]!==g[P]))for(h=vn[P]||[P],b=0;b<h.length;b++)l[h[b]]=P;P={};for(var A in g)for(h=vn[A]||[A],b=0;b<h.length;b++)P[h[b]]=A;A={};for(var W in l)if(h=l[W],(b=P[W])&&h!==b&&(i=h+","+b,!A[i])){A[i]=!0,i=console;var $=g[h];i.error.call(i,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",$==null||typeof $==="boolean"||$===""?"Removing":"Updating",h,b)}}for(var m in o)!o.hasOwnProperty(m)||g!=null&&g.hasOwnProperty(m)||(m.indexOf("--")===0?r.setProperty(m,""):m==="float"?r.cssFloat="":r[m]="");for(var Q in g)W=g[Q],g.hasOwnProperty(Q)&&o[Q]!==W&&yP(r,Q,W)}else for(l in g)g.hasOwnProperty(l)&&yP(r,l,g[l])}function eb(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function jP(r){return pY.get(r)||r}function _t(r,g){if(Vv.call(hh,g)&&hh[g])return!0;if(sY.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=gM.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),hh[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),hh[g]=!0}if(dY.test(g)){if(r=g.toLowerCase(),r=gM.hasOwnProperty(r)?r:null,r==null)return hh[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),hh[g]=!0)}return!0}function Et(r,g){var o=[],l;for(l in g)_t(r,l)||o.push(l);g=o.map(function(h){return"`"+h+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function yt(r,g,o,l){if(Vv.call(No,g)&&No[g])return!0;var h=g.toLowerCase();if(h==="onfocusin"||h==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),No[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(h)?r[h]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),No[g]=!0;if(vM.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),No[g]=!0}else if(vM.test(g))return rJ.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),No[g]=!0;if(gJ.test(g)||oJ.test(g))return!0;if(h==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),No[g]=!0;if(h==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),No[g]=!0;if(h==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),No[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),No[g]=!0;if(v2.hasOwnProperty(h)){if(h=v2[h],h!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,h),No[g]=!0}else if(g!==h)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,h),No[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(h=g.toLowerCase().slice(0,5),h==="data-"||h==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),No[g]=!0}case"function":case"symbol":return No[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),No[g]=!0}}return!0}function ct(r,g,o){var l=[],h;for(h in g)yt(r,h,g[h],o)||l.push(h);g=l.map(function(b){return"`"+b+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function hb(r){return vJ.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function _l(){}function _i(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function fP(r){var g=Fr(r);if(g&&(r=g.stateNode)){var o=r[Fo]||null;r:switch(r=g.stateNode,g.type){case"input":if(xi(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;Hg(g,"name"),o=o.querySelectorAll('input[name="'+Jv(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var l=o[g];if(l!==r&&l.form===r.form){var h=l[Fo]||null;if(!h)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");xi(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(g=0;g<o.length;g++)l=o[g],l.form===r.form&&mP(l)}break r;case"textarea":xP(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&Ze(r,!!o.multiple,g,!1)}}}function aP(r,g,o){if(en)return r(g,o);en=!0;try{var l=r(g);return l}finally{if(en=!1,bh!==null||wh!==null){if(je(),bh&&(g=bh,r=wh,wh=bh=null,fP(g),r))for(g=0;g<r.length;g++)fP(r[g])}}}function bb(r,g){var o=r.stateNode;if(o===null)return null;var l=o[Fo]||null;if(l===null)return null;o=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function pP(){if(l2)return l2;var r,g=bn,o=g.length,l,h="value"in y0?y0.value:y0.textContent,b=h.length;for(r=0;r<o&&g[r]===h[r];r++);var i=o-r;for(l=1;l<=i&&g[o-l]===h[b-l];l++);return l2=h.slice(r,1<l?1-l:void 0)}function Ew(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function yw(){return!0}function dP(){return!1}function Eo(r){function g(o,l,h,b,i){this._reactName=o,this._targetInst=h,this.type=l,this.nativeEvent=b,this.target=i,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(o=r[P],this[P]=o?o(b):b[P]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?yw:dP,this.isPropagationStopped=dP,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=yw)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=yw)},persist:function(){},isPersistent:yw}),g}function jt(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=AJ[r])?!!g[r]:!1}function Ei(){return jt}function sP(r,g){switch(r){case"keyup":return UJ.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==bM;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rH(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function ft(r,g){switch(r){case"compositionend":return rH(g);case"keypress":if(g.which!==uM)return null;return nM=!0,iM;case"textInput":return r=g.data,r===iM&&nM?null:r;default:return null}}function at(r,g){if(uh)return r==="compositionend"||!Pn&&sP(r,g)?(r=pP(),l2=bn=y0=null,uh=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return wM&&g.locale!=="ko"?null:g.data;default:return null}}function gH(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!mJ[r.type]:g==="textarea"?!0:!1}function pt(r){if(!$l)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function oH(r,g,o,l){bh?wh?wh.push(l):wh=[l]:bh=l,g=Cu(g,"onChange"),0<g.length&&(o=new e2("onChange","change",null,o,l),r.push({event:o,listeners:g}))}function dt(r){Cq(r,0)}function cw(r){var g=Nr(r);if(mP(g))return r}function vH(r,g){if(r==="change")return g}function lH(){yb&&(yb.detachEvent("onpropertychange",eH),cb=yb=null)}function eH(r){if(r.propertyName==="value"&&cw(cb)){var g=[];oH(g,cb,r,_i(r)),aP(dt,g)}}function st(r,g,o){r==="focusin"?(lH(),yb=g,cb=o,yb.attachEvent("onpropertychange",eH)):r==="focusout"&&lH()}function rX(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return cw(cb)}function gX(r,g){if(r==="click")return cw(g)}function oX(r,g){if(r==="input"||r==="change")return cw(g)}function vX(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function wb(r,g){if(Bo(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),l=Object.keys(g);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var h=o[l];if(!Vv.call(g,h)||!Bo(r[h],g[h]))return!1}return!0}function hH(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function bH(r,g){var o=hH(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=g&&l>=g)return{node:o,offset:g-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=hH(o)}}function wH(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?wH(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function uH(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=Dw(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=g.contentWindow;else break;g=Dw(r.document)}return g}function yi(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function iH(r,g,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;On||ih==null||ih!==Dw(l)||(l=ih,("selectionStart"in l)&&yi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jb&&wb(jb,l)||(jb=l,l=Cu(Hn,"onSelect"),0<l.length&&(g=new e2("onSelect","select",null,g,o),r.push({event:g,listeners:l}),g.target=ih)))}function x1(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function C1(r){if(qn[r])return qn[r];if(!nh[r])return r;var g=nh[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in HM)return qn[r]=g[o];return r}function Sv(r,g){WM.set(r,g),Jo(g,[r])}function lX(r){for(var g=b2,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(oo(l)&&l.length===2&&typeof l[0]==="string"){if(g!==b2&&g!==Gn)return Wn;g=Gn}else return Wn;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==b2&&g!==Rn)return Wn;g=Rn}}return g}function ci(r,g,o,l){for(var h in r)Vv.call(r,h)&&h[0]!=="_"&&bl(h,r[h],g,o,l)}function bl(r,g,o,l,h){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Yl){var b=E(g.type)||"…",i=g.key;g=g.props;var P=Object.keys(g),A=P.length;if(i==null&&A===0){g="<"+b+" />";break}if(3>l||A===1&&P[0]==="children"&&i==null){g="<"+b+" … />";break}o.push([h+"  ".repeat(l)+r,"<"+b]),i!==null&&bl("key",i,o,l+1,h),r=!1;for(var W in g)W==="children"?g.children!=null&&(!oo(g.children)||0<g.children.length)&&(r=!0):Vv.call(g,W)&&W[0]!=="_"&&bl(W,g[W],o,l+1,h);o.push(["",r?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(g),b=b.slice(8,b.length-1),b==="Array"){if(W=lX(g),W===Rn||W===b2){g=JSON.stringify(g);break}else if(W===Gn){o.push([h+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)b=g[r],bl(b[0],b[1],o,l+1,h);return}}if(b==="Promise"){if(g.status==="fulfilled"){if(b=o.length,bl(r,g.value,o,l,h),o.length>b){o=o[b],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(b=o.length,bl(r,g.reason,o,l,h),o.length>b)){o=o[b],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}b==="Object"&&(W=Object.getPrototypeOf(g))&&typeof W.constructor==="function"&&(b=W.constructor.name),o.push([h+"  ".repeat(l)+r,b==="Object"?3>l?"":"…":b]),3>l&&ci(g,o,l+1,h);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===xJ?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([h+"  ".repeat(l)+r,g])}function nH(r,g,o,l){var h=!0;for(i in r)i in g||(o.push([w2+"  ".repeat(l)+i,"…"]),h=!1);for(var b in g)if(b in r){var i=r[b],P=g[b];if(i!==P){if(l===0&&b==="children")h="  ".repeat(l)+b,o.push([w2+h,"…"],[u2+h,"…"]);else{if(!(3<=l)){if(typeof i==="object"&&typeof P==="object"&&i!==null&&P!==null&&i.$$typeof===P.$$typeof)if(P.$$typeof===Yl){if(i.type===P.type&&i.key===P.key){i=E(P.type)||"…",h="  ".repeat(l)+b,i="<"+i+" … />",o.push([w2+h,i],[u2+h,i]),h=!1;continue}}else{var A=Object.prototype.toString.call(i),W=Object.prototype.toString.call(P);if(A===W&&(W==="[object Object]"||W==="[object Array]")){A=[tM+"  ".repeat(l)+b,W==="[object Array]"?"Array":""],o.push(A),W=o.length,nH(i,P,o,l+1)?W===o.length&&(A[1]="Referentially unequal but deeply equal objects. Consider memoization."):h=!1;continue}}else if(typeof i==="function"&&typeof P==="function"&&i.name===P.name&&i.length===P.length&&(A=Function.prototype.toString.call(i),W=Function.prototype.toString.call(P),A===W)){i=P.name===""?"() => {}":P.name+"() {}",o.push([tM+"  ".repeat(l)+b,i+" Referentially unequal function closure. Consider memoization."]);continue}}bl(b,i,o,l,w2),bl(b,P,o,l,u2)}h=!1}}else o.push([u2+"  ".repeat(l)+b,"…"]),h=!1;return h}function vv(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function wl(r,g,o,l){Qg&&(j0.start=g,j0.end=o,sl.color="warning",sl.tooltipText=l,sl.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,j0)):performance.measure(l,j0))}function jw(r,g,o){wl(r,g,o,"Reconnect")}function fw(r,g,o,l,h){var b=x(r);if(b!==null&&Qg){var{alternate:i,actualDuration:P}=r;if(i===null||i.child!==r.child)for(var A=r.child;A!==null;A=A.sibling)P-=A.actualDuration;l=0.5>P?l?"tertiary-light":"primary-light":10>P?l?"tertiary":"primary":100>P?l?"tertiary-dark":"primary-dark":"error";var W=r.memoizedProps;P=r._debugTask,W!==null&&i!==null&&i.memoizedProps!==W?(A=[CJ],W=nH(i.memoizedProps,W,A,0),1<A.length&&(W&&!c0&&(i.lanes&h)===0&&100<r.actualDuration?(c0=!0,A[0]=TJ,sl.color="warning",sl.tooltipText=XM):(sl.color=l,sl.tooltipText=b),sl.properties=A,j0.start=g,j0.end=o,P!=null?P.run(performance.measure.bind(performance,"​"+b,j0)):performance.measure("​"+b,j0))):P!=null?P.run(console.timeStamp.bind(console,b,g,o,zv,void 0,l)):console.timeStamp(b,g,o,zv,void 0,l)}}function ji(r,g,o,l){if(Qg){var h=x(r);if(h!==null){for(var b=null,i=[],P=0;P<l.length;P++){var A=l[P];b==null&&A.source!==null&&(b=A.source._debugTask),A=A.value,i.push(["Error",typeof A==="object"&&A!==null&&typeof A.message==="string"?String(A.message):String(A)])}r.key!==null&&bl("key",r.key,i,0,""),r.memoizedProps!==null&&ci(r.memoizedProps,i,0,""),b==null&&(b=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:zv,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:i}}},b?b.run(performance.measure.bind(performance,"​"+h,r)):performance.measure("​"+h,r)}}}function ul(r,g,o,l,h){if(h!==null){if(Qg){var b=x(r);if(b!==null){l=[];for(var i=0;i<h.length;i++){var P=h[i].value;l.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r.key!==null&&bl("key",r.key,l,0,""),r.memoizedProps!==null&&ci(r.memoizedProps,l,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:zv,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+b,g)):performance.measure("​"+b,g)}}}else b=x(r),b!==null&&Qg&&(h=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,b,g,o,zv,void 0,h)):console.timeStamp(b,g,o,zv,void 0,h))}function eX(r,g,o,l){if(Qg&&!(g<=r)){var h=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,h)):console.timeStamp(o,r,g,fr,jr,h)}}function PH(r,g,o,l){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,jr,o)):console.timeStamp("Prewarm",r,g,fr,jr,o))}function HH(r,g,o,l){!Qg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,jr,o)):console.timeStamp("Suspended",r,g,fr,jr,o))}function hX(r,g,o,l,h,b){if(Qg&&!(g<=r)){o=[];for(var i=0;i<l.length;i++){var P=l[i].value;o.push(["Recoverable Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:jr,tooltipText:h?"Hydration Failed":"Recovered after Error",properties:o}}},b?b.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function fi(r,g,o,l){!Qg||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,jr,"error")):console.timeStamp("Errored",r,g,fr,jr,"error"))}function bX(r,g,o,l){!Qg||g<=r||(l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,"secondary-light")):console.timeStamp(o,r,g,fr,jr,"secondary-light"))}function OH(r,g,o,l,h){if(Qg&&!(g<=r)){for(var b=[],i=0;i<o.length;i++){var P=o[i].value;b.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:jr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:b}}},h?h.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function ub(r,g,o){!Qg||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,fr,jr,"secondary-dark")):console.timeStamp("Animating",r,g,fr,jr,"secondary-dark"))}function aw(){for(var r=Ph,g=tn=Ph=0;g<r;){var o=Kv[g];Kv[g++]=null;var l=Kv[g];Kv[g++]=null;var h=Kv[g];Kv[g++]=null;var b=Kv[g];if(Kv[g++]=null,l!==null&&h!==null){var i=l.pending;i===null?h.next=h:(h.next=i.next,i.next=h),l.pending=h}b!==0&&qH(o,h,b)}}function pw(r,g,o,l){Kv[Ph++]=r,Kv[Ph++]=g,Kv[Ph++]=o,Kv[Ph++]=l,tn|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function ai(r,g,o,l){return pw(r,g,o,l),dw(r)}function Qo(r,g){return pw(r,null,null,g),dw(r)}function qH(r,g,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var h=!1,b=r.return;b!==null;)b.childLanes|=o,l=b.alternate,l!==null&&(l.childLanes|=o),b.tag===22&&(r=b.stateNode,r===null||r._visibility&fb||(h=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,h&&g!==null&&(h=31-Io(o),r=b.hiddenUpdates,l=r[h],l===null?r[h]=[g]:l.push(g),g.lane=o|536870912),b):null}function dw(r){if(X5>rQ)throw He=X5=0,Y5=r8=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");He>gQ&&(He=0,Y5=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&Lq(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&Lq(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function T1(r){if(Uv===null)return r;var g=Uv(r);return g===void 0?r:g.current}function pi(r){if(Uv===null)return r;var g=Uv(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=T1(r.render),r.render!==g)?(g={$$typeof:xb,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function AH(r,g){if(Uv===null)return!1;var o=r.elementType;g=g.type;var l=!1,h=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:h===iv&&(l=!0);break;case 11:h===xb?l=!0:h===iv&&(l=!0);break;case 14:case 15:h===fu?l=!0:h===iv&&(l=!0);break;default:return!1}return l&&(r=Uv(o),r!==void 0&&r===Uv(g))?!0:!1}function MH(r){Uv!==null&&typeof WeakSet==="function"&&(Hh===null&&(Hh=new WeakSet),Hh.add(r))}function WH(r,g,o){do{var l=r,h=l.alternate,b=l.child,i=l.sibling,P=l.tag;l=l.type;var A=null;switch(P){case 0:case 15:case 1:A=l;break;case 11:A=l.render}if(Uv===null)throw Error("Expected resolveFamily to be set during hot reload.");var W=!1;if(l=!1,A!==null&&(A=Uv(A),A!==void 0&&(o.has(A)?l=!0:g.has(A)&&(P===1?l=!0:W=!0))),Hh!==null&&(Hh.has(r)||h!==null&&Hh.has(h))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||W)h=Qo(r,2),h!==null&&Ng(h,r,2);if(b===null||l||WH(b,g,o),i===null)break;r=i}while(1)}function wX(r,g,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,YM||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function di(r){return r=r.prototype,!(!r||!r.isReactComponent)}function El(r,g){var o=r.alternate;switch(o===null?(o=Y(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=T1(r.type);break;case 1:o.type=T1(r.type);break;case 11:o.type=pi(r.type)}return o}function RH(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function si(r,g,o,l,h,b){var i=0,P=r;if(typeof r==="function")di(r)&&(i=1),P=T1(P);else if(typeof r==="string")i=er(),i=MY(r,o,i)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E6:return g=Y(31,o,g,h),g.elementType=E6,g.lanes=b,g;case gh:return S1(o.children,h,b,g);case ju:i=8,h|=Ko,h|=Ev;break;case k6:return r=o,l=h,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=Y(12,r,g,l|kr),g.elementType=k6,g.lanes=b,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case V6:return g=Y(13,o,g,h),g.elementType=V6,g.lanes=b,g;case _6:return g=Y(19,o,g,h),g.elementType=_6,g.lanes=b,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Jl:i=10;break r;case D6:i=9;break r;case xb:i=11,P=pi(P);break r;case fu:i=14;break r;case iv:i=16,P=null;break r}if(P="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)P+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":oo(r)?o="array":r!==void 0&&r.$$typeof===Yl?(o="<"+(E(r.type)||"Unknown")+" />",P=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(i=l?f(l):null)&&(P+=`

Check the render method of \``+i+"`."),i=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+P)),P=null}return g=Y(i,o,g,h),g.elementType=r,g.type=P,g.lanes=b,g._debugOwner=l,g}function sw(r,g,o){return g=si(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function S1(r,g,o,l){return r=Y(7,r,l,g),r.lanes=o,r}function r4(r,g,o){return r=Y(6,r,null,g),r.lanes=o,r}function GH(r){var g=Y(18,null,null,Ur);return g.stateNode=r,g}function g4(r,g,o){return g=Y(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function lv(r,g){if(typeof r==="object"&&r!==null){var o=Xn.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:Cr(g)},Xn.set(r,g),g}return{value:r,source:g,stack:Cr(g)}}function yl(r,g){m0(),Oh[qh++]=ab,Oh[qh++]=i2,i2=r,ab=g}function tH(r,g,o){m0(),$v[mv++]=g0,$v[mv++]=o0,$v[mv++]=s1,s1=r;var l=g0;r=o0;var h=32-Io(l)-1;l&=~(1<<h),o+=1;var b=32-Io(g)+h;if(30<b){var i=h-h%5;b=(l&(1<<i)-1).toString(32),l>>=i,h-=i,g0=1<<32-Io(g)+h|o<<h|l,o0=b+r}else g0=1<<b|o<<h|l,o0=r}function o4(r){m0(),r.return!==null&&(yl(r,1),tH(r,1,0))}function v4(r){for(;r===i2;)i2=Oh[--qh],Oh[qh]=null,ab=Oh[--qh],Oh[qh]=null;for(;r===s1;)s1=$v[--mv],$v[mv]=null,o0=$v[--mv],$v[mv]=null,g0=$v[--mv],$v[mv]=null}function XH(){return m0(),s1!==null?{id:g0,overflow:o0}:null}function YH(r,g){m0(),$v[mv++]=g0,$v[mv++]=o0,$v[mv++]=s1,g0=g.id,o0=g.overflow,s1=r}function m0(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function k1(r,g){if(r.return===null){if(Hv===null)Hv={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(Hv.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Hv.distanceFromLeaf>g&&(Hv.distanceFromLeaf=g)}return Hv}var o=k1(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function JH(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function ru(r,g){ml||(r=k1(r,0),r.serverProps=null,g!==null&&(g=oA(g),r.serverTail.push(g)))}function L0(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=Hv;throw l!==null&&(Hv=null,o=Di(l)),ib(lv(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),Yn}function QH(r){var{stateNode:g,type:o,memoizedProps:l}=r;switch(g[Ao]=r,g[Fo]=l,Y6(o,l),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<J5.length;o++)dr(J5[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":$0("input",l),dr("invalid",g),LP(g,l),IP(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":FP(g,l);break;case"select":$0("select",l),dr("invalid",g),BP(g,l);break;case"textarea":$0("textarea",l),dr("invalid",g),ZP(g,l),CP(g,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||l.suppressHydrationWarning===!0||Dq(g.textContent,o)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=_l),g=!0):g=!1,g||L0(r,!0)}function zH(r){for(Mo=r.return;Mo;)switch(Mo.tag){case 5:case 31:case 13:Lv=!1;return;case 27:case 3:Lv=!0;return;default:Mo=Mo.return}}function Te(r){if(r!==Mo)return!1;if(!pr)return zH(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||U6(r.type,r.memoizedProps);o=!o}if(o&&zg){for(o=zg;o;){var l=k1(r,0),h=oA(o);l.serverTail.push(h),o=h.type==="Suspense"?I6(o):uv(o.nextSibling)}L0(r)}if(zH(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=I6(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zg=I6(r)}else g===27?(g=zg,k0(r.type)?(r=P8,P8=null,zg=r):zg=g):zg=Mo?uv(r.stateNode.nextSibling):null;return!0}function D1(){zg=Mo=null,ml=pr=!1}function l4(){var r=a0;return r!==null&&(To===null?To=r:To.push.apply(To,r),a0=null),r}function ib(r){a0===null?a0=[r]:a0.push(r)}function e4(){var r=Hv;if(r!==null){Hv=null;for(var g=Di(r);0<r.children.length;)r=r.children[0];wr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function gu(){Ah=n2=null,Mh=!1}function I0(r,g,o){Xr(Jn,g._currentValue,r),g._currentValue=o,Xr(Qn,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==QM&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=QM}function cl(r,g){r._currentValue=Jn.current;var o=Qn.current;Mr(Qn,g),r._currentRenderer=o,Mr(Jn,g)}function h4(r,g,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function b4(r,g,o,l){var h=r.child;h!==null&&(h.return=r);for(;h!==null;){var b=h.dependencies;if(b!==null){var i=h.child;b=b.firstContext;r:for(;b!==null;){var P=b;b=h;for(var A=0;A<g.length;A++)if(P.context===g[A]){b.lanes|=o,P=b.alternate,P!==null&&(P.lanes|=o),h4(b.return,o,r),l||(i=null);break r}b=P.next}}else if(h.tag===18){if(i=h.return,i===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");i.lanes|=o,b=i.alternate,b!==null&&(b.lanes|=o),h4(i,o,r),i=null}else i=h.child;if(i!==null)i.return=h;else for(i=h;i!==null;){if(i===r){i=null;break}if(h=i.sibling,h!==null){h.return=i.return,i=h;break}i=i.return}h=i}}function Se(r,g,o,l){r=null;for(var h=g,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var i=h.alternate;if(i===null)throw Error("Should have a current fiber. This is a bug in React.");if(i=i.memoizedProps,i!==null){var P=h.type;Bo(h.pendingProps.value,i.value)||(r!==null?r.push(P):r=[P])}}else if(h===au.current){if(i=h.alternate,i===null)throw Error("Should have a current fiber. This is a bug in React.");i.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push($5):r=[$5])}h=h.return}r!==null&&b4(g,r,o,l),g.flags|=262144}function ou(r){for(r=r.firstContext;r!==null;){if(!Bo(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function V1(r){n2=r,Ah=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Ug(r){return Mh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),KH(n2,r)}function vu(r,g){return n2===null&&V1(r),KH(r,g)}function KH(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},Ah===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Ah=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else Ah=Ah.next=g;return o}function w4(){return{controller:new DJ,data:new Map,refCount:0}}function _1(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function nb(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&VJ(_J,function(){r.controller.abort()})}function il(r,g,o){if((r&127)!==0)0>Ll&&(Ll=fg(),db=P2(g),zn=g,o!=null&&(Kn=x(o)),(og&(lo|Av))!==uo&&(Bg=!0,s0=pb),r=Ib(),g=Lb(),r!==Wh||g!==sb?Wh=-1.1:g!==null&&(s0=pb),ge=r,sb=g);else if((r&4194048)!==0&&0>Iv&&(Iv=fg(),r5=P2(g),zM=g,o!=null&&(KM=x(o)),0>e0)){if(r=Ib(),g=Lb(),r!==g1||g!==oe)g1=-1.1;r1=r,oe=g}}function uX(r){if(0>Ll){Ll=fg(),db=r._debugTask!=null?r._debugTask:null,(og&(lo|Av))!==uo&&(s0=pb);var g=Ib(),o=Lb();g!==Wh||o!==sb?Wh=-1.1:o!==null&&(s0=pb),ge=g,sb=o}if(0>Iv&&(Iv=fg(),r5=r._debugTask!=null?r._debugTask:null,0>e0)){if(r=Ib(),g=Lb(),r!==g1||g!==oe)g1=-1.1;r1=r,oe=g}}function jl(){var r=re;return re=0,r}function lu(r){var g=re;return re=r,g}function Pb(r){var g=re;return re+=r,g}function eu(){Kr=zr=-1.1}function ev(){var r=zr;return zr=-1.1,r}function hv(r){0<=r&&(zr=r)}function nl(){var r=Lg;return Lg=-0,r}function Pl(r){0<=r&&(Lg=r)}function Hl(){var r=$g;return $g=null,r}function Ol(){var r=Bg;return Bg=!1,r}function u4(r){Zo=fg(),0>r.actualStartTime&&(r.actualStartTime=Zo)}function i4(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,r.selfBaseDuration=g,Zo=-1}}function UH(r){if(0<=Zo){var g=fg()-Zo;r.actualDuration+=g,Zo=-1}}function ql(){if(0<=Zo){var r=fg(),g=r-Zo;Zo=-1,re+=g,Lg+=g,Kr=r}}function $H(r){$g===null&&($g=[]),$g.push(r),l0===null&&(l0=[]),l0.push(r)}function Al(){Zo=fg(),0>zr&&(zr=Zo)}function Hb(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function iX(r,g){if(o5===null){var o=o5=[];$n=0,ve=R6(),Rh={status:"pending",value:void 0,then:function(l){o.push(l)}}}return $n++,g.then(mH,mH),g}function mH(){if(--$n===0&&(-1<Iv||(e0=-1.1),o5!==null)){Rh!==null&&(Rh.status="fulfilled");var r=o5;o5=null,ve=0,Rh=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function nX(r,g){var o=[],l={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var h=0;h<o.length;h++)(0,o[h])(g)},function(h){l.status="rejected",l.reason=h;for(h=0;h<o.length;h++)(0,o[h])(void 0)}),l}function n4(){var r=le.current;return r!==null?r:Wg.pooledCache}function hu(r,g){g===null?Xr(le,le.current,r):Xr(le,g.pool,r)}function LH(){var r=n4();return r===null?null:{parent:jg._currentValue,pool:r}}function IH(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function FH(r){return r=r.status,r==="fulfilled"||r==="rejected"}function NH(r,g,o){Z.actQueue!==null&&(Z.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(_l,_l),g=o),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var h={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:h}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){h.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZH(r),r;default:if(typeof g.status==="string")g.then(_l,_l);else{if(r=Wg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(b){if(g.status==="pending"){var i=g;i.status="fulfilled",i.value=b}},function(b){if(g.status==="pending"){var i=g;i.status="rejected",i.reason=b}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZH(r),r}throw he=g,u5=!0,Gh}}function F0(r){try{return jJ(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw he=g,u5=!0,Gh;throw g}}function BH(){if(he===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=he;return he=null,u5=!1,r}function ZH(r){if(r===Gh||r===G2)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Ho(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function P4(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function bu(r,g,o){for(var l=Object.keys(r.props),h=0;h<l.length;h++){var b=l[h];if(b!=="children"&&b!=="key"){g===null&&(g=sw(r,o.mode,0),g._debugInfo=Dr,g.return=o),wr(g,function(i){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i)},b);break}}}function wu(r){var g=i5;return i5+=1,th===null&&(th=IH()),NH(th,r,g)}function Ob(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function xH(r,g){if(g.$$typeof===KY)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function uu(r,g){var o=P4();o!==null?o.run(xH.bind(null,r,g)):xH(r,g)}function CH(r,g){var o=x(r)||"Component";cM[o]||(cM[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function iu(r,g){var o=P4();o!==null?o.run(CH.bind(null,r,g)):CH(r,g)}function TH(r,g){var o=x(r)||"Component";jM[o]||(jM[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function nu(r,g){var o=P4();o!==null?o.run(TH.bind(null,r,g)):TH(r,g)}function SH(r){function g(J,z){if(r){var U=J.deletions;U===null?(J.deletions=[z],J.flags|=16):U.push(z)}}function o(J,z){if(!r)return null;for(;z!==null;)g(J,z),z=z.sibling;return null}function l(J){for(var z=new Map;J!==null;)J.key!==null?z.set(J.key,J):z.set(J.index,J),J=J.sibling;return z}function h(J,z){return J=El(J,z),J.index=0,J.sibling=null,J}function b(J,z,U){if(J.index=U,!r)return J.flags|=1048576,z;if(U=J.alternate,U!==null)return U=U.index,U<z?(J.flags|=67108866,z):U;return J.flags|=67108866,z}function i(J){return r&&J.alternate===null&&(J.flags|=67108866),J}function P(J,z,U,D){if(z===null||z.tag!==6)return z=r4(U,J.mode,D),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,U),z.return=J,z._debugInfo=Dr,z}function A(J,z,U,D){var ir=U.type;if(ir===gh)return z=$(J,z,U.props.children,D,U.key),bu(U,z,J),z;if(z!==null&&(z.elementType===ir||AH(z,U)||typeof ir==="object"&&ir!==null&&ir.$$typeof===iv&&F0(ir)===z.type))return z=h(z,U.props),Ob(z,U),z.return=J,z._debugOwner=U._owner,z._debugInfo=Dr,z;return z=sw(U,J.mode,D),Ob(z,U),z.return=J,z._debugInfo=Dr,z}function W(J,z,U,D){if(z===null||z.tag!==4||z.stateNode.containerInfo!==U.containerInfo||z.stateNode.implementation!==U.implementation)return z=g4(U,J.mode,D),z.return=J,z._debugInfo=Dr,z;return z=h(z,U.children||[]),z.return=J,z._debugInfo=Dr,z}function $(J,z,U,D,ir){if(z===null||z.tag!==7)return z=S1(U,J.mode,D,ir),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;return z=h(z,U),z.return=J,z._debugInfo=Dr,z}function m(J,z,U){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return z=r4(""+z,J.mode,U),z.return=J,z._debugOwner=J,z._debugTask=J._debugTask,z._debugInfo=Dr,z;if(typeof z==="object"&&z!==null){switch(z.$$typeof){case Yl:return U=sw(z,J.mode,U),Ob(U,z),U.return=J,J=Ho(z._debugInfo),U._debugInfo=Dr,Dr=J,U;case rh:return z=g4(z,J.mode,U),z.return=J,z._debugInfo=Dr,z;case iv:var D=Ho(z._debugInfo);return z=F0(z),J=m(J,z,U),Dr=D,J}if(oo(z)||N(z))return U=S1(z,J.mode,U,null),U.return=J,U._debugOwner=J,U._debugTask=J._debugTask,J=Ho(z._debugInfo),U._debugInfo=Dr,Dr=J,U;if(typeof z.then==="function")return D=Ho(z._debugInfo),J=m(J,wu(z),U),Dr=D,J;if(z.$$typeof===Jl)return m(J,vu(J,z),U);uu(J,z)}return typeof z==="function"&&iu(J,z),typeof z==="symbol"&&nu(J,z),null}function Q(J,z,U,D){var ir=z!==null?z.key:null;if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ir!==null?null:P(J,z,""+U,D);if(typeof U==="object"&&U!==null){switch(U.$$typeof){case Yl:return U.key===ir?(ir=Ho(U._debugInfo),J=A(J,z,U,D),Dr=ir,J):null;case rh:return U.key===ir?W(J,z,U,D):null;case iv:return ir=Ho(U._debugInfo),U=F0(U),J=Q(J,z,U,D),Dr=ir,J}if(oo(U)||N(U)){if(ir!==null)return null;return ir=Ho(U._debugInfo),J=$(J,z,U,D,null),Dr=ir,J}if(typeof U.then==="function")return ir=Ho(U._debugInfo),J=Q(J,z,wu(U),D),Dr=ir,J;if(U.$$typeof===Jl)return Q(J,z,vu(J,U),D);uu(J,U)}return typeof U==="function"&&iu(J,U),typeof U==="symbol"&&nu(J,U),null}function F(J,z,U,D,ir){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return J=J.get(U)||null,P(z,J,""+D,ir);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Yl:return U=J.get(D.key===null?U:D.key)||null,J=Ho(D._debugInfo),z=A(z,U,D,ir),Dr=J,z;case rh:return J=J.get(D.key===null?U:D.key)||null,W(z,J,D,ir);case iv:var mr=Ho(D._debugInfo);return D=F0(D),z=F(J,z,U,D,ir),Dr=mr,z}if(oo(D)||N(D))return U=J.get(U)||null,J=Ho(D._debugInfo),z=$(z,U,D,ir,null),Dr=J,z;if(typeof D.then==="function")return mr=Ho(D._debugInfo),z=F(J,z,U,wu(D),ir),Dr=mr,z;if(D.$$typeof===Jl)return F(J,z,U,vu(z,D),ir);uu(z,D)}return typeof D==="function"&&iu(z,D),typeof D==="symbol"&&nu(z,D),null}function hr(J,z,U,D){if(typeof U!=="object"||U===null)return D;switch(U.$$typeof){case Yl:case rh:t(J,z,U);var ir=U.key;if(typeof ir!=="string")break;if(D===null){D=new Set,D.add(ir);break}if(!D.has(ir)){D.add(ir);break}wr(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ir)});break;case iv:U=F0(U),hr(J,z,U,D)}return D}function Or(J,z,U,D){for(var ir=null,mr=null,Jr=null,Gr=z,Tr=z=0,Kg=null;Gr!==null&&Tr<U.length;Tr++){Gr.index>Tr?(Kg=Gr,Gr=null):Kg=Gr.sibling;var Vg=Q(J,Gr,U[Tr],D);if(Vg===null){Gr===null&&(Gr=Kg);break}ir=hr(J,Vg,U[Tr],ir),r&&Gr&&Vg.alternate===null&&g(J,Gr),z=b(Vg,z,Tr),Jr===null?mr=Vg:Jr.sibling=Vg,Jr=Vg,Gr=Kg}if(Tr===U.length)return o(J,Gr),pr&&yl(J,Tr),mr;if(Gr===null){for(;Tr<U.length;Tr++)Gr=m(J,U[Tr],D),Gr!==null&&(ir=hr(J,Gr,U[Tr],ir),z=b(Gr,z,Tr),Jr===null?mr=Gr:Jr.sibling=Gr,Jr=Gr);return pr&&yl(J,Tr),mr}for(Gr=l(Gr);Tr<U.length;Tr++)Kg=F(Gr,J,Tr,U[Tr],D),Kg!==null&&(ir=hr(J,Kg,U[Tr],ir),r&&Kg.alternate!==null&&Gr.delete(Kg.key===null?Tr:Kg.key),z=b(Kg,z,Tr),Jr===null?mr=Kg:Jr.sibling=Kg,Jr=Kg);return r&&Gr.forEach(function(O0){return g(J,O0)}),pr&&yl(J,Tr),mr}function Xg(J,z,U,D){if(U==null)throw Error("An iterable object provided no iterator.");for(var ir=null,mr=null,Jr=z,Gr=z=0,Tr=null,Kg=null,Vg=U.next();Jr!==null&&!Vg.done;Gr++,Vg=U.next()){Jr.index>Gr?(Tr=Jr,Jr=null):Tr=Jr.sibling;var O0=Q(J,Jr,Vg.value,D);if(O0===null){Jr===null&&(Jr=Tr);break}Kg=hr(J,O0,Vg.value,Kg),r&&Jr&&O0.alternate===null&&g(J,Jr),z=b(O0,z,Gr),mr===null?ir=O0:mr.sibling=O0,mr=O0,Jr=Tr}if(Vg.done)return o(J,Jr),pr&&yl(J,Gr),ir;if(Jr===null){for(;!Vg.done;Gr++,Vg=U.next())Jr=m(J,Vg.value,D),Jr!==null&&(Kg=hr(J,Jr,Vg.value,Kg),z=b(Jr,z,Gr),mr===null?ir=Jr:mr.sibling=Jr,mr=Jr);return pr&&yl(J,Gr),ir}for(Jr=l(Jr);!Vg.done;Gr++,Vg=U.next())Tr=F(Jr,J,Gr,Vg.value,D),Tr!==null&&(Kg=hr(J,Tr,Vg.value,Kg),r&&Tr.alternate!==null&&Jr.delete(Tr.key===null?Gr:Tr.key),z=b(Tr,z,Gr),mr===null?ir=Tr:mr.sibling=Tr,mr=Tr);return r&&Jr.forEach(function(WQ){return g(J,WQ)}),pr&&yl(J,Gr),ir}function sr(J,z,U,D){if(typeof U==="object"&&U!==null&&U.type===gh&&U.key===null&&(bu(U,null,J),U=U.props.children),typeof U==="object"&&U!==null){switch(U.$$typeof){case Yl:var ir=Ho(U._debugInfo);r:{for(var mr=U.key;z!==null;){if(z.key===mr){if(mr=U.type,mr===gh){if(z.tag===7){o(J,z.sibling),D=h(z,U.props.children),D.return=J,D._debugOwner=U._owner,D._debugInfo=Dr,bu(U,D,J),J=D;break r}}else if(z.elementType===mr||AH(z,U)||typeof mr==="object"&&mr!==null&&mr.$$typeof===iv&&F0(mr)===z.type){o(J,z.sibling),D=h(z,U.props),Ob(D,U),D.return=J,D._debugOwner=U._owner,D._debugInfo=Dr,J=D;break r}o(J,z);break}else g(J,z);z=z.sibling}U.type===gh?(D=S1(U.props.children,J.mode,D,U.key),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,bu(U,D,J),J=D):(D=sw(U,J.mode,D),Ob(D,U),D.return=J,D._debugInfo=Dr,J=D)}return J=i(J),Dr=ir,J;case rh:r:{ir=U;for(U=ir.key;z!==null;){if(z.key===U)if(z.tag===4&&z.stateNode.containerInfo===ir.containerInfo&&z.stateNode.implementation===ir.implementation){o(J,z.sibling),D=h(z,ir.children||[]),D.return=J,J=D;break r}else{o(J,z);break}else g(J,z);z=z.sibling}D=g4(ir,J.mode,D),D.return=J,J=D}return i(J);case iv:return ir=Ho(U._debugInfo),U=F0(U),J=sr(J,z,U,D),Dr=ir,J}if(oo(U))return ir=Ho(U._debugInfo),J=Or(J,z,U,D),Dr=ir,J;if(N(U)){if(ir=Ho(U._debugInfo),mr=N(U),typeof mr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Jr=mr.call(U);if(Jr===U){if(J.tag!==0||Object.prototype.toString.call(J.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Jr)!=="[object Generator]")EM||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),EM=!0}else U.entries!==mr||Fn||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Fn=!0);return J=Xg(J,z,Jr,D),Dr=ir,J}if(typeof U.then==="function")return ir=Ho(U._debugInfo),J=sr(J,z,wu(U),D),Dr=ir,J;if(U.$$typeof===Jl)return sr(J,z,vu(J,U),D);uu(J,U)}if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return ir=""+U,z!==null&&z.tag===6?(o(J,z.sibling),D=h(z,ir),D.return=J,J=D):(o(J,z),D=r4(ir,J.mode,D),D.return=J,D._debugOwner=J,D._debugTask=J._debugTask,D._debugInfo=Dr,J=D),i(J);return typeof U==="function"&&iu(J,U),typeof U==="symbol"&&nu(J,U),o(J,z)}return function(J,z,U,D){var ir=Dr;Dr=null;try{i5=0;var mr=sr(J,z,U,D);return th=null,mr}catch(Kg){if(Kg===Gh||Kg===G2)throw Kg;var Jr=Y(29,Kg,null,J.mode);Jr.lanes=D,Jr.return=J;var Gr=Jr._debugInfo=Dr;if(Jr._debugOwner=J._debugOwner,Jr._debugTask=J._debugTask,Gr!=null){for(var Tr=Gr.length-1;0<=Tr;Tr--)if(typeof Gr[Tr].stack==="string"){Jr._debugOwner=Gr[Tr],Jr._debugTask=Gr[Tr].debugTask;break}}return Jr}finally{Dr=ir}}}function kH(r,g){var o=oo(r);return r=!o&&typeof N(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function H4(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function O4(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function N0(r){return{lane:r,tag:aM,payload:null,callback:null,next:null}}function B0(r,g,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,Bn===l&&!sM){var h=x(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,h),sM=!0}if((og&lo)!==uo)return h=l.pending,h===null?g.next=g:(g.next=h.next,h.next=g),l.pending=g,g=dw(r),qH(r,null,o),g;return pw(r,l,g,o),dw(r)}function qb(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,F1(r,o)}}function Pu(r,g){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var h=null,b=null;if(o=o.firstBaseUpdate,o!==null){do{var i={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};b===null?h=b=i:b=b.next=i,o=o.next}while(o!==null);b===null?h=b=g:b=b.next=g}else h=b=g;o={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Ab(){if(Zn){var r=Rh;if(r!==null)throw r}}function Mb(r,g,o,l){Zn=!1;var h=r.updateQueue;o1=!1,Bn=h.shared;var{firstBaseUpdate:b,lastBaseUpdate:i}=h,P=h.shared.pending;if(P!==null){h.shared.pending=null;var A=P,W=A.next;A.next=null,i===null?b=W:i.next=W,i=A;var $=r.alternate;$!==null&&($=$.updateQueue,P=$.lastBaseUpdate,P!==i&&(P===null?$.firstBaseUpdate=W:P.next=W,$.lastBaseUpdate=A))}if(b!==null){var m=h.baseState;i=0,$=W=A=null,P=b;do{var Q=P.lane&-536870913,F=Q!==P.lane;if(F?(Vr&Q)===Q:(l&Q)===Q){Q!==0&&Q===ve&&(Zn=!0),$!==null&&($=$.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});r:{Q=r;var hr=P,Or=g,Xg=o;switch(hr.tag){case pM:if(hr=hr.payload,typeof hr==="function"){Mh=!0;var sr=hr.call(Xg,m,Or);if(Q.mode&Ko){Gg(!0);try{hr.call(Xg,m,Or)}finally{Gg(!1)}}Mh=!1,m=sr;break r}m=hr;break r;case Nn:Q.flags=Q.flags&-65537|128;case aM:if(sr=hr.payload,typeof sr==="function"){if(Mh=!0,hr=sr.call(Xg,m,Or),Q.mode&Ko){Gg(!0);try{sr.call(Xg,m,Or)}finally{Gg(!1)}}Mh=!1}else hr=sr;if(hr===null||hr===void 0)break r;m=cr({},m,hr);break r;case dM:o1=!0}}Q=P.callback,Q!==null&&(r.flags|=64,F&&(r.flags|=8192),F=h.callbacks,F===null?h.callbacks=[Q]:F.push(Q))}else F={lane:Q,tag:P.tag,payload:P.payload,callback:P.callback,next:null},$===null?(W=$=F,A=m):$=$.next=F,i|=Q;if(P=P.next,P===null)if(P=h.shared.pending,P===null)break;else F=P,P=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}while(1);$===null&&(A=m),h.baseState=A,h.firstBaseUpdate=W,h.lastBaseUpdate=$,b===null&&(h.shared.lanes=0),e1|=i,r.lanes=i,r.memoizedState=m}Bn=null}function DH(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function PX(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)DH(o[r],g)}function VH(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)DH(o[r],g)}function _H(r,g){var o=Nl;Xr(X2,o,r),Xr(Xh,g,r),Nl=o|g.baseLanes}function q4(r){Xr(X2,Nl,r),Xr(Xh,Xh.current,r)}function A4(r){Nl=X2.current,Mr(Xh,r),Mr(X2,r)}function Z0(r){var g=r.alternate;Xr(Dg,Dg.current&Yh,r),Xr(Ov,r,r),Fv===null&&(g===null||Xh.current!==null?Fv=r:g.memoizedState!==null&&(Fv=r))}function M4(r){Xr(Dg,Dg.current,r),Xr(Ov,r,r),Fv===null&&(Fv=r)}function EH(r){r.tag===22?(Xr(Dg,Dg.current,r),Xr(Ov,r,r),Fv===null&&(Fv=r)):x0(r)}function x0(r){Xr(Dg,Dg.current,r),Xr(Ov,Ov.current,r)}function bv(r){Mr(Ov,r),Fv===r&&(Fv=null),Mr(Dg,r)}function Hu(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||m6(o)||L6(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function yr(){var r=B;Bv===null?Bv=[r]:Bv.push(r)}function d(){var r=B;if(Bv!==null&&(u0++,Bv[u0]!==r)){var g=x($r);if(!rW.has(g)&&(rW.add(g),Bv!==null)){for(var o="",l=0;l<=u0;l++){var h=Bv[l],b=l===u0?r:h;for(h=l+1+". "+h;30>h.length;)h+=" ";h+=b+`
`,o+=h}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function ke(r){r===void 0||r===null||oo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function Ou(){var r=x($r);oW.has(r)||(oW.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Cg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function W4(r,g){if(H5)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!Bo(r[o],g[o]))return!1;return!0}function R4(r,g,o,l,h,b){if(b0=b,$r=g,Bv=r!==null?r._debugHookTypes:null,u0=-1,H5=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")b=x($r),xn.has(b)||(xn.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,Z.H=r!==null&&r.memoizedState!==null?Tn:Bv!==null?vW:Cn,we=b=(g.mode&Ko)!==Ur;var i=mn(o,l,h);if(we=!1,Qh&&(i=G4(g,o,l,h)),b){Gg(!0);try{i=G4(g,o,l,h)}finally{Gg(!1)}}return yH(r,g),i}function yH(r,g){g._debugHookTypes=Bv,g.dependencies===null?w0!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:w0}):g.dependencies._debugThenableState=w0,Z.H=O5;var o=Mg!==null&&Mg.next!==null;if(b0=0,Bv=B=ag=Mg=$r=null,u0=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),J2=!1,P5=0,w0=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||pg||(r=r.dependencies,r!==null&&ou(r)&&(pg=!0)),u5?(u5=!1,r=!0):r=!1,r&&(g=x(g)||"Unknown",gW.has(g)||xn.has(g)||(gW.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function G4(r,g,o,l){$r=r;var h=0;do{if(Qh&&(w0=null),P5=0,Qh=!1,h>=aJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(h+=1,H5=!1,ag=Mg=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}u0=-1,Z.H=lW,b=mn(g,o,l)}while(Qh);return b}function HX(){var r=Z.H,g=r.useState()[0];return g=typeof g.then==="function"?Wb(g):g,r=r.useState()[0],(Mg!==null?Mg.memoizedState:null)!==r&&($r.flags|=1024),g}function t4(){var r=Q2!==0;return Q2=0,r}function X4(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&Ev)!==Ur?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Y4(r){if(J2){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}J2=!1}b0=0,Bv=ag=Mg=$r=null,u0=-1,B=null,Qh=!1,P5=Q2=0,w0=null}function Lo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ag===null?$r.memoizedState=ag=r:ag=ag.next=r,ag}function ig(){if(Mg===null){var r=$r.alternate;r=r!==null?r.memoizedState:null}else r=Mg.next;var g=ag===null?$r.memoizedState:ag.next;if(g!==null)ag=g,Mg=r;else{if(r===null){if($r.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Mg=r,r={memoizedState:Mg.memoizedState,baseState:Mg.baseState,baseQueue:Mg.baseQueue,queue:Mg.queue,next:null},ag===null?$r.memoizedState=ag=r:ag=ag.next=r}return ag}function qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wb(r){var g=P5;return P5+=1,w0===null&&(w0=IH()),r=NH(w0,r,g),g=$r,(ag===null?g.memoizedState:ag.next)===null&&(g=g.alternate,Z.H=g!==null&&g.memoizedState!==null?Tn:Cn),r}function C0(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Wb(r);if(r.$$typeof===Jl)return Ug(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function E1(r){var g=null,o=$r.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var l=$r.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(h){return h.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=qu(),$r.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||H5)for(o=g.data[g.index]=Array(r),l=0;l<r;l++)o[l]=UY;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function kv(r,g){return typeof g==="function"?g(r):g}function J4(r,g,o){var l=Lo();if(o!==void 0){var h=o(g);if(we){Gg(!0);try{o(g)}finally{Gg(!1)}}}else h=g;return l.memoizedState=l.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},l.queue=r,r=r.dispatch=WX.bind(null,$r,r),[l.memoizedState,r]}function De(r){var g=ig();return Q4(g,Mg,r)}function Q4(r,g,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var h=r.baseQueue,b=l.pending;if(b!==null){if(h!==null){var i=h.next;h.next=b.next,b.next=i}g.baseQueue!==h&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=h=b,l.pending=null}if(b=r.baseState,h===null)r.memoizedState=b;else{g=h.next;var P=i=null,A=null,W=g,$=!1;do{var m=W.lane&-536870913;if(m!==W.lane?(Vr&m)===m:(b0&m)===m){var Q=W.revertLane;if(Q===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),m===ve&&($=!0);else if((b0&Q)===Q){W=W.next,Q===ve&&($=!0);continue}else m={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},A===null?(P=A=m,i=b):A=A.next=m,$r.lanes|=Q,e1|=Q;m=W.action,we&&o(b,m),b=W.hasEagerState?W.eagerState:o(b,m)}else Q={lane:m,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},A===null?(P=A=Q,i=b):A=A.next=Q,$r.lanes|=m,e1|=m;W=W.next}while(W!==null&&W!==g);if(A===null?i=b:A.next=P,!Bo(b,r.memoizedState)&&(pg=!0,$&&(o=Rh,o!==null)))throw o;r.memoizedState=b,r.baseState=i,r.baseQueue=A,l.lastRenderedState=b}return h===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Rb(r){var g=ig(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:h}=o,b=g.memoizedState;if(h!==null){o.pending=null;var i=h=h.next;do b=r(b,i.action),i=i.next;while(i!==h);Bo(b,g.memoizedState)||(pg=!0),g.memoizedState=b,g.baseQueue===null&&(g.baseState=b),o.lastRenderedState=b}return[b,l]}function z4(r,g,o){var l=$r,h=Lo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=o();Jh||b===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Jh=!0)}else{if(b=g(),Jh||(o=g(),Bo(b,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)),Wg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||cH(l,g,b)}return h.memoizedState=b,o={value:b,getSnapshot:g},h.queue=o,Ru(fH.bind(null,l,o,r),[r]),l.flags|=2048,_e(Nv|Co,{destroy:void 0},jH.bind(null,l,o,b,g),null),b}function Au(r,g,o){var l=$r,h=ig(),b=pr;if(b){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!Jh){var i=g();Bo(o,i)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Jh=!0)}if(i=!Bo((Mg||h).memoizedState,o))h.memoizedState=o,pg=!0;h=h.queue;var P=fH.bind(null,l,h,r);if(yo(2048,Co,P,[r]),h.getSnapshot!==g||i||ag!==null&&ag.memoizedState.tag&Nv){if(l.flags|=2048,_e(Nv|Co,{destroy:void 0},jH.bind(null,l,h,o,g),null),Wg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(b0&127)!==0||cH(l,g,o)}return o}function cH(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=$r.updateQueue,g===null?(g=qu(),$r.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function jH(r,g,o,l){g.value=o,g.getSnapshot=l,aH(g)&&pH(r)}function fH(r,g,o){return o(function(){aH(g)&&(il(2,"updateSyncExternalStore()",r),pH(r))})}function aH(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!Bo(r,o)}catch(l){return!0}}function pH(r){var g=Qo(r,2);g!==null&&Ng(g,r,2)}function K4(r){var g=Lo();if(typeof r==="function"){var o=r;if(r=o(),we){Gg(!0);try{o()}finally{Gg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:r},g}function U4(r){r=K4(r);var g=r.queue,o=AO.bind(null,$r,g);return g.dispatch=o,[r.memoizedState,o]}function $4(r){var g=Lo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=V4.bind(null,$r,!0,o),o.dispatch=g,[r,g]}function dH(r,g){var o=ig();return sH(o,Mg,r,g)}function sH(r,g,o,l){return r.baseState=o,Q4(r,Mg,typeof l==="function"?l:kv)}function rO(r,g){var o=ig();if(Mg!==null)return sH(o,Mg,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OX(r,g,o,l,h){if(Qu(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var b={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){b.listeners.push(i)}};Z.T!==null?o(!0):b.isTransition=!1,l(b),o=g.pending,o===null?(b.next=g.pending=b,gO(g,b)):(b.next=o.next,g.pending=o.next=b)}}function gO(r,g){var{action:o,payload:l}=g,h=r.state;if(g.isTransition){var b=Z.T,i={};i._updatedFibers=new Set,Z.T=i;try{var P=o(h,l),A=Z.S;A!==null&&A(i,P),oO(r,g,P)}catch(W){m4(r,g,W)}finally{b!==null&&i.types!==null&&(b.types!==null&&b.types!==i.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=i.types),Z.T=b,b===null&&i._updatedFibers&&(r=i._updatedFibers.size,i._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{i=o(h,l),oO(r,g,i)}catch(W){m4(r,g,W)}}function oO(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(Z.asyncTransitions++,o.then(Ju,Ju),o.then(function(l){vO(r,g,l)},function(l){return m4(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):vO(r,g,o)}function vO(r,g,o){g.status="fulfilled",g.value=o,lO(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,gO(r,o)))}function m4(r,g,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=o,lO(g),g=g.next;while(g!==l)}r.action=null}function lO(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function eO(r,g){return g}function Ve(r,g){if(pr){var o=Wg.formState;if(o!==null){r:{var l=$r;if(pr){if(zg){g:{var h=zg;for(var b=Lv;h.nodeType!==8;){if(!b){h=null;break g}if(h=uv(h.nextSibling),h===null){h=null;break g}}b=h.data,h=b===w8||b===VW?h:null}if(h){zg=uv(h.nextSibling),l=h.data===w8;break r}}L0(l)}l=!1}l&&(g=o[0])}}return o=Lo(),o.memoizedState=o.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eO,lastRenderedState:g},o.queue=l,o=AO.bind(null,$r,l),l.dispatch=o,l=K4(!1),b=V4.bind(null,$r,!1,l.queue),l=Lo(),h={state:g,dispatch:null,action:r,pending:null},l.queue=h,o=OX.bind(null,$r,h,b,o),h.dispatch=o,l.memoizedState=r,[g,o,!1]}function Mu(r){var g=ig();return hO(g,Mg,r)}function hO(r,g,o){if(g=Q4(r,g,eO)[0],r=De(kv)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Wb(g)}catch(i){if(i===Gh)throw G2;throw i}else l=g;g=ig();var h=g.queue,b=h.dispatch;return o!==g.memoizedState&&($r.flags|=2048,_e(Nv|Co,{destroy:void 0},qX.bind(null,h,o),null)),[l,b,r]}function qX(r,g){r.action=g}function Wu(r){var g=ig(),o=Mg;if(o!==null)return hO(g,o,r);ig(),g=g.memoizedState,o=ig();var l=o.queue.dispatch;return o.memoizedState=r,[g,l,!1]}function _e(r,g,o,l){return r={tag:r,create:o,deps:l,inst:g,next:null},g=$r.updateQueue,g===null&&(g=qu(),$r.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,g.lastEffect=r),r}function L4(r){var g=Lo();return r={current:r},g.memoizedState=r}function y1(r,g,o,l){var h=Lo();$r.flags|=r,h.memoizedState=_e(Nv|g,{destroy:void 0},o,l===void 0?null:l)}function yo(r,g,o,l){var h=ig();l=l===void 0?null:l;var b=h.memoizedState.inst;Mg!==null&&l!==null&&W4(l,Mg.memoizedState.deps)?h.memoizedState=_e(g,b,o,l):($r.flags|=r,h.memoizedState=_e(Nv|g,b,o,l))}function Ru(r,g){($r.mode&Ev)!==Ur?y1(276826112,Co,r,g):y1(8390656,Co,r,g)}function AX(r){$r.flags|=4;var g=$r.updateQueue;if(g===null)g=qu(),$r.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function I4(r){var g=Lo(),o={impl:r};return g.memoizedState=o,function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function Gu(r){var g=ig().memoizedState;return AX({ref:g,nextImpl:r}),function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function F4(r,g){var o=4194308;return($r.mode&Ev)!==Ur&&(o|=134217728),y1(o,qv,r,g)}function bO(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function N4(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;($r.mode&Ev)!==Ur&&(l|=134217728),y1(l,qv,bO.bind(null,g,r),o)}function tu(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,yo(4,qv,bO.bind(null,g,r),o)}function B4(r,g){return Lo().memoizedState=[r,g===void 0?null:g],r}function Xu(r,g){var o=ig();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&W4(g,l[1]))return l[0];return o.memoizedState=[r,g],r}function Z4(r,g){var o=Lo();g=g===void 0?null:g;var l=r();if(we){Gg(!0);try{r()}finally{Gg(!1)}}return o.memoizedState=[l,g],l}function Yu(r,g){var o=ig();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&W4(g,l[1]))return l[0];if(l=r(),we){Gg(!0);try{r()}finally{Gg(!1)}}return o.memoizedState=[l,g],l}function x4(r,g){var o=Lo();return C4(o,r,g)}function wO(r,g){var o=ig();return iO(o,Mg.memoizedState,r,g)}function uO(r,g){var o=ig();return Mg===null?C4(o,r,g):iO(o,Mg.memoizedState,r,g)}function C4(r,g,o){if(o===void 0||(b0&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=nq(),$r.lanes|=r,e1|=r,o}function iO(r,g,o,l){if(Bo(o,g))return o;if(Xh.current!==null)return r=C4(r,o,l),Bo(r,g)||(pg=!0),r;if((b0&42)===0||(b0&1073741824)!==0&&(Vr&261930)===0)return pg=!0,r.memoizedState=o;return r=nq(),$r.lanes|=r,e1|=r,g}function Ju(){Z.asyncTransitions--}function nO(r,g,o,l,h){var b=wg.p;wg.p=b!==0&&b<_v?b:_v;var i=Z.T,P={};P._updatedFibers=new Set,Z.T=P,V4(r,!1,g,o);try{var A=h(),W=Z.S;if(W!==null&&W(P,A),A!==null&&typeof A==="object"&&typeof A.then==="function"){Z.asyncTransitions++,A.then(Ju,Ju);var $=nX(A,l);Gb(r,g,$,wv(r))}else Gb(r,g,l,wv(r))}catch(m){Gb(r,g,{then:function(){},status:"rejected",reason:m},wv(r))}finally{wg.p=b,i!==null&&P.types!==null&&(i.types!==null&&i.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),i.types=P.types),Z.T=i,i===null&&P._updatedFibers&&(r=P._updatedFibers.size,P._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function T4(r,g,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var h=PO(r).queue;uX(r),nO(r,h,g,Re,o===null?X:function(){return HO(r),o(l)})}function PO(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Re,baseState:Re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:Re},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function HO(r){Z.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=PO(r);g.next===null&&(g=r.alternate.memoizedState),Gb(r,g.next.queue,{},wv(r))}function S4(){var r=K4(!1);return r=nO.bind(null,$r,r.queue,!0,!1),Lo().memoizedState=r,[!1,r]}function OO(){var r=De(kv)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function qO(){var r=Rb(kv)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Wb(r),g]}function c1(){return Ug($5)}function k4(){var r=Lo(),g=Wg.identifierPrefix;if(pr){var o=o0,l=g0;o=(l&~(1<<32-Io(l)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Q2++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=fJ++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function D4(){return Lo().memoizedState=MX.bind(null,$r)}function MX(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=wv(o),h=N0(l),b=B0(o,h,l);b!==null&&(il(l,"refresh()",r),Ng(b,o,l),qb(b,o,l)),r=w4(),g!==null&&g!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),h.payload={cache:r};return}o=o.return}}function WX(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=wv(r);var h={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Qu(r)?MO(g,h):(h=ai(r,g,h,l),h!==null&&(il(l,"dispatch()",r),Ng(h,r,l),WO(h,g,l)))}function AO(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=wv(r),Gb(r,g,o,l)&&il(l,"setState()",r)}function Gb(r,g,o,l){var h={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qu(r))MO(g,h);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=g.lastRenderedReducer,b!==null)){var i=Z.H;Z.H=cv;try{var P=g.lastRenderedState,A=b(P,o);if(h.hasEagerState=!0,h.eagerState=A,Bo(A,P))return pw(r,g,h,0),Wg===null&&aw(),!1}catch(W){}finally{Z.H=i}}if(o=ai(r,g,h,l),o!==null)return Ng(o,r,l),WO(o,g,l),!0}return!1}function V4(r,g,o,l){if(Z.T===null&&ve===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:R6(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qu(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=ai(r,o,l,2),g!==null&&(il(2,"setOptimistic()",r),Ng(g,r,2))}function Qu(r){var g=r.alternate;return r===$r||g!==null&&g===$r}function MO(r,g){Qh=J2=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function WO(r,g,o){if((o&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,F1(r,o)}}function _4(r){if(r!==null&&typeof r!=="function"){var g=String(r);qW.has(g)||(qW.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E4(r,g,o,l){var h=r.memoizedState,b=o(l,h);if(r.mode&Ko){Gg(!0);try{b=o(l,h)}finally{Gg(!1)}}b===void 0&&(g=E(g)||"Component",nW.has(g)||(nW.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),h=b===null||b===void 0?h:cr({},h,b),r.memoizedState=h,r.lanes===0&&(r.updateQueue.baseState=h)}function RO(r,g,o,l,h,b,i){var P=r.stateNode;if(typeof P.shouldComponentUpdate==="function"){if(o=P.shouldComponentUpdate(l,b,i),r.mode&Ko){Gg(!0);try{o=P.shouldComponentUpdate(l,b,i)}finally{Gg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",E(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!wb(o,l)||!wb(h,b):!0}function GO(r,g,o,l){var h=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,l),g.state!==h&&(r=x(r)||"Component",hW.has(r)||(hW.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),Sn.enqueueReplaceState(g,g.state,null))}function j1(r,g){var o=g;if("ref"in g){o={};for(var l in g)l!=="ref"&&(o[l]=g[l])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var h in r)o[h]===void 0&&(o[h]=r[h])}return o}function tO(r){Mn(r),console.warn(`%s

%s
`,zh?"An error occurred in the <"+zh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function XO(r){var g=zh?"The above error occurred in the <"+zh+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((kn||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,pW+" "+r[0],dW,a2+l+a2,sW):r.splice(0,0,pW,dW,a2+l+a2,sW),r.unshift(console),l=AQ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,o)}function YO(r){Mn(r)}function zu(r,g){try{zh=g.source?x(g.source):null,kn=null;var o=g.value;if(Z.actQueue!==null)Z.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:g.stack})}}catch(h){setTimeout(function(){throw h})}}function JO(r,g,o){try{zh=o.source?x(o.source):null,kn=x(g);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function y4(r,g,o){return o=N0(o),o.tag=Nn,o.payload={element:null},o.callback=function(){wr(g.source,zu,r,g)},o}function c4(r){return r=N0(r),r.tag=Nn,r}function j4(r,g,o,l){var h=o.type.getDerivedStateFromError;if(typeof h==="function"){var b=l.value;r.payload=function(){return h(b)},r.callback=function(){MH(o),wr(l.source,JO,g,o,l)}}var i=o.stateNode;i!==null&&typeof i.componentDidCatch==="function"&&(r.callback=function(){MH(o),wr(l.source,JO,g,o,l),typeof h!=="function"&&(b1===null?b1=new Set([this]):b1.add(this)),EJ(this,l),typeof h==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",x(o)||"Unknown")})}function RX(r,g,o,l,h){if(o.flags|=32768,Kl&&Ub(r,h),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=o.alternate,g!==null&&Se(g,o,h,!0),pr&&(ml=!0),o=Ov.current,o!==null){switch(o.tag){case 31:case 13:return Fv===null?Bu():o.alternate===null&&Ig===n0&&(Ig=U2),o.flags&=-257,o.flags|=65536,o.lanes=h,l===t2?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([l]):g.add(l),q6(r,l,h)),!1;case 22:return o.flags|=65536,l===t2?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([l]):o.add(l)),q6(r,l,h)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return q6(r,l,h),Bu(),!1}if(pr)return ml=!0,g=Ov.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=h,l!==Yn&&ib(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==Yn&&ib(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,l=lv(l,o),h=y4(r.stateNode,l,h),Pu(r,h),Ig!==v1&&(Ig=ue)),!1;var b=lv(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(G5===null?G5=[b]:G5.push(b),Ig!==v1&&(Ig=ue),g===null)return!0;l=lv(l,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=h&-h,o.lanes|=r,r=y4(o.stateNode,l,r),Pu(o,r),!1;case 1:if(g=o.type,b=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(b1===null||!b1.has(b))))return o.flags|=65536,h&=-h,o.lanes|=h,h=c4(h),j4(h,r,o,l),Pu(o,h),!1}o=o.return}while(o!==null);return!1}function Oo(r,g,o,l){g.child=r===null?fM(g,null,o,l):be(g,r.child,o,l)}function QO(r,g,o,l,h){o=o.render;var b=g.ref;if("ref"in l){var i={};for(var P in l)P!=="ref"&&(i[P]=l[P])}else i=l;if(V1(g),l=R4(r,g,o,i,b,h),P=t4(),r!==null&&!pg)return X4(r,g,h),fl(r,g,h);return pr&&P&&o4(g),g.flags|=1,Oo(r,g,l,h),g.child}function zO(r,g,o,l,h){if(r===null){var b=o.type;if(typeof b==="function"&&!di(b)&&b.defaultProps===void 0&&o.compare===null)return o=T1(b),g.tag=15,g.type=o,a4(g,b),KO(r,g,o,l,h);return r=si(o.type,null,l,g,g.mode,h),r.ref=g.ref,r.return=g,g.child=r}if(b=r.child,!o6(r,h)){var i=b.memoizedProps;if(o=o.compare,o=o!==null?o:wb,o(i,l)&&r.ref===g.ref)return fl(r,g,h)}return g.flags|=1,r=El(b,l),r.ref=g.ref,r.return=g,g.child=r}function KO(r,g,o,l,h){if(r!==null){var b=r.memoizedProps;if(wb(b,l)&&r.ref===g.ref&&g.type===r.type)if(pg=!1,g.pendingProps=l=b,o6(r,h))(r.flags&131072)!==0&&(pg=!0);else return g.lanes=r.lanes,fl(r,g,h)}return f4(r,g,o,l,h)}function UO(r,g,o,l){var h=l.children,b=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(b=b!==null?b.baseLanes|o:o,r!==null){l=g.child=r.child;for(h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~b}else l=0,g.child=null;return $O(r,g,b,o,l)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&hu(g,b!==null?b.cachePool:null),b!==null?_H(g,b):q4(g),EH(g);else return l=g.lanes=536870912,$O(r,g,b!==null?b.baseLanes|o:o,o,l)}else b!==null?(hu(g,b.cachePool),_H(g,b),x0(g),g.memoizedState=null):(r!==null&&hu(g,null),q4(g),x0(g));return Oo(r,g,h,o),g.child}function tb(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function $O(r,g,o,l,h){var b=n4();return b=b===null?null:{parent:jg._currentValue,pool:b},g.memoizedState={baseLanes:o,cachePool:b},r!==null&&hu(g,null),q4(g),EH(g),r!==null&&Se(r,g,l,!0),g.childLanes=h,null}function Ku(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=$u({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function mO(r,g,o){return be(g,r.child,null,o),r=Ku(g,g.pendingProps),r.flags|=2,bv(g),g.memoizedState=null,r}function GX(r,g,o){var l=g.pendingProps,h=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=Ku(g,l),g.lanes=536870912,tb(null,r);if(M4(g),(r=zg)?(o=gA(r,Lv),o=o!==null&&o.data===qe?o:null,o!==null&&(l={dehydrated:o,treeContext:XH(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GH(o),l.return=g,g.child=l,Mo=g,zg=null)):o=null,o===null)throw ru(g,r),L0(g);return g.lanes=536870912,null}return Ku(g,l)}var b=r.memoizedState;if(b!==null){var i=b.dehydrated;if(M4(g),h)if(g.flags&256)g.flags&=-257,g=mO(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(JH(),(o&536870912)!==0&&Nu(g),pg||Se(r,g,o,!1),h=(o&r.childLanes)!==0,pg||h){if(l=Wg,l!==null&&(i=N1(l,o),i!==0&&i!==b.retryLane))throw b.retryLane=i,Qo(r,i),Ng(l,r,i),Dn;Bu(),g=mO(r,g,o)}else r=b.treeContext,zg=uv(i.nextSibling),Mo=g,pr=!0,a0=null,ml=!1,Hv=null,Lv=!1,r!==null&&YH(g,r),g=Ku(g,l),g.flags|=4096;return g}return b=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&Nu(g),r=El(b,l),r.ref=g.ref,g.child=r,r.return=g,r}function Uu(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function f4(r,g,o,l,h){if(o.prototype&&typeof o.prototype.render==="function"){var b=E(o)||"Unknown";AW[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),AW[b]=!0)}if(g.mode&Ko&&yv.recordLegacyContextWarning(g,null),r===null&&(a4(g,g.type),o.contextTypes&&(b=E(o)||"Unknown",WW[b]||(WW[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),V1(g),o=R4(r,g,o,l,void 0,h),l=t4(),r!==null&&!pg)return X4(r,g,h),fl(r,g,h);return pr&&l&&o4(g),g.flags|=1,Oo(r,g,o,h),g.child}function LO(r,g,o,l,h,b){if(V1(g),u0=-1,H5=r!==null&&r.type!==g.type,g.updateQueue=null,o=G4(g,l,o,h),yH(r,g),l=t4(),r!==null&&!pg)return X4(r,g,b),fl(r,g,b);return pr&&l&&o4(g),g.flags|=1,Oo(r,g,o,b),g.child}function IO(r,g,o,l,h){switch(O(g)){case!1:var b=g.stateNode,i=new g.type(g.memoizedProps,b.context).state;b.updater.enqueueSetState(b,i,null);break;case!0:g.flags|=128,g.flags|=65536,b=Error("Simulated error coming from DevTools");var P=h&-h;if(g.lanes|=P,i=Wg,i===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");P=c4(P),j4(P,i,g,lv(b,g)),Pu(g,P)}if(V1(g),g.stateNode===null){if(i=f0,b=o.contextType,"contextType"in o&&b!==null&&(b===void 0||b.$$typeof!==Jl)&&!OW.has(o)&&(OW.add(o),P=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===D6?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",E(o)||"Component",P)),typeof b==="object"&&b!==null&&(i=Ug(b)),b=new o(l,i),g.mode&Ko){Gg(!0);try{b=new o(l,i)}finally{Gg(!1)}}if(i=g.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Sn,g.stateNode=b,b._reactInternals=g,b._reactInternalInstance=eW,typeof o.getDerivedStateFromProps==="function"&&i===null&&(i=E(o)||"Component",bW.has(i)||(bW.add(i),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",i,b.state===null?"null":"undefined",i))),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var A=P=i=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?i="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(i="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?P="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(P="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?A="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(A="UNSAFE_componentWillUpdate"),i!==null||P!==null||A!==null){b=E(o)||"Component";var W=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";uW.has(b)||(uW.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,W,i!==null?`
  `+i:"",P!==null?`
  `+P:"",A!==null?`
  `+A:""))}}b=g.stateNode,i=E(o)||"Component",b.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",i):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",i)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",i),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",i),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",i),o.childContextTypes&&!HW.has(o)&&(HW.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",i)),o.contextTypes&&!PW.has(o)&&(PW.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",i)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",i),o.prototype&&o.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",E(o)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",i),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",i),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",i),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",i),P=b.props!==l,b.props!==void 0&&P&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",i),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",i,i),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||wW.has(o)||(wW.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",E(o))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",i),(P=b.state)&&(typeof P!=="object"||oo(P))&&console.error("%s.state: must be set to an object or null",i),typeof b.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",i),b=g.stateNode,b.props=l,b.state=g.memoizedState,b.refs={},H4(g),i=o.contextType,b.context=typeof i==="object"&&i!==null?Ug(i):f0,b.state===l&&(i=E(o)||"Component",iW.has(i)||(iW.add(i),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",i))),g.mode&Ko&&yv.recordLegacyContextWarning(g,b),yv.recordUnsafeLifecycleWarnings(g,b),b.state=g.memoizedState,i=o.getDerivedStateFromProps,typeof i==="function"&&(E4(g,o,i,l),b.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(i=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),i!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",x(g)||"Component"),Sn.enqueueReplaceState(b,b.state,null)),Mb(g,l,b,h),Ab(),b.state=g.memoizedState),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Ur&&(g.flags|=134217728),b=!0}else if(r===null){b=g.stateNode;var $=g.memoizedProps;P=j1(o,$),b.props=P;var m=b.context;A=o.contextType,i=f0,typeof A==="object"&&A!==null&&(i=Ug(A)),W=o.getDerivedStateFromProps,A=typeof W==="function"||typeof b.getSnapshotBeforeUpdate==="function",$=g.pendingProps!==$,A||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||($||m!==i)&&GO(g,b,l,i),o1=!1;var Q=g.memoizedState;b.state=Q,Mb(g,l,b,h),Ab(),m=g.memoizedState,$||Q!==m||o1?(typeof W==="function"&&(E4(g,o,W,l),m=g.memoizedState),(P=o1||RO(g,o,P,l,Q,m,i))?(A||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Ur&&(g.flags|=134217728)):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Ur&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=m),b.props=l,b.state=m,b.context=i,b=P):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Ur&&(g.flags|=134217728),b=!1)}else{b=g.stateNode,O4(r,g),i=g.memoizedProps,A=j1(o,i),b.props=A,W=g.pendingProps,Q=b.context,m=o.contextType,P=f0,typeof m==="object"&&m!==null&&(P=Ug(m)),$=o.getDerivedStateFromProps,(m=typeof $==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(i!==W||Q!==P)&&GO(g,b,l,P),o1=!1,Q=g.memoizedState,b.state=Q,Mb(g,l,b,h),Ab();var F=g.memoizedState;i!==W||Q!==F||o1||r!==null&&r.dependencies!==null&&ou(r.dependencies)?(typeof $==="function"&&(E4(g,o,$,l),F=g.memoizedState),(A=o1||RO(g,o,A,l,Q,F,P)||r!==null&&r.dependencies!==null&&ou(r.dependencies))?(m||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(l,F,P),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(l,F,P)),typeof b.componentDidUpdate==="function"&&(g.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof b.componentDidUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=F),b.props=l,b.state=F,b.context=P,b=A):(typeof b.componentDidUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&Q===r.memoizedState||(g.flags|=1024),b=!1)}if(P=b,Uu(r,g),i=(g.flags&128)!==0,P||i){if(P=g.stateNode,_o(g),i&&typeof o.getDerivedStateFromError!=="function")o=null,Zo=-1;else if(o=BM(P),g.mode&Ko){Gg(!0);try{BM(P)}finally{Gg(!1)}}g.flags|=1,r!==null&&i?(g.child=be(g,r.child,null,h),g.child=be(g,null,o,h)):Oo(r,g,o,h),g.memoizedState=P.state,r=g.child}else r=fl(r,g,h);return h=g.stateNode,b&&h.props!==l&&(Kh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",x(g)||"a component"),Kh=!0),r}function FO(r,g,o,l){return D1(),g.flags|=256,Oo(r,g,o,l),g.child}function a4(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=E(g)||"Unknown",RW[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),RW[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=E(g)||"Unknown",MW[g]||(console.error("%s: Function components do not support contextType.",g),MW[g]=!0))}function p4(r){return{baseLanes:r,cachePool:LH()}}function d4(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function NO(r,g,o){var l,h=g.pendingProps;H(g)&&(g.flags|=128);var b=!1,i=(g.flags&128)!==0;if((l=i)||(l=r!==null&&r.memoizedState===null?!1:(Dg.current&n5)!==0),l&&(b=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(b?Z0(g):x0(g),(r=zg)?(o=gA(r,Lv),o=o!==null&&o.data!==qe?o:null,o!==null&&(l={dehydrated:o,treeContext:XH(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GH(o),l.return=g,g.child=l,Mo=g,zg=null)):o=null,o===null)throw ru(g,r),L0(g);return L6(o)?g.lanes=32:g.lanes=536870912,null}var P=h.children;if(h=h.fallback,b){x0(g);var A=g.mode;return P=$u({mode:"hidden",children:P},A),h=S1(h,A,o,null),P.return=g,h.return=g,P.sibling=h,g.child=P,h=g.child,h.memoizedState=p4(o),h.childLanes=d4(r,l,o),g.memoizedState=Vn,tb(null,h)}return Z0(g),s4(g,P)}var W=r.memoizedState;if(W!==null){var $=W.dehydrated;if($!==null){if(i)g.flags&256?(Z0(g),g.flags&=-257,g=r6(r,g,o)):g.memoizedState!==null?(x0(g),g.child=r.child,g.flags|=128,g=null):(x0(g),P=h.fallback,A=g.mode,h=$u({mode:"visible",children:h.children},A),P=S1(P,A,o,null),P.flags|=2,h.return=g,P.return=g,h.sibling=P,g.child=h,be(g,r.child,null,o),h=g.child,h.memoizedState=p4(o),h.childLanes=d4(r,l,o),g.memoizedState=Vn,g=tb(null,h));else if(Z0(g),JH(),(o&536870912)!==0&&Nu(g),L6($)){if(l=$.nextSibling&&$.nextSibling.dataset,l){P=l.dgst;var m=l.msg;A=l.stck;var Q=l.cstck}b=m,l=P,h=A,$=Q,P=b,A=$,P=P?Error(P):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),P.stack=h||"",P.digest=l,l=A===void 0?null:A,h={value:P,source:null,stack:l},typeof l==="string"&&Xn.set(P,h),ib(h),g=r6(r,g,o)}else if(pg||Se(r,g,o,!1),l=(o&r.childLanes)!==0,pg||l){if(l=Wg,l!==null&&(h=N1(l,o),h!==0&&h!==W.retryLane))throw W.retryLane=h,Qo(r,h),Ng(l,r,h),Dn;m6($)||Bu(),g=r6(r,g,o)}else m6($)?(g.flags|=192,g.child=r.child,g=null):(r=W.treeContext,zg=uv($.nextSibling),Mo=g,pr=!0,a0=null,ml=!1,Hv=null,Lv=!1,r!==null&&YH(g,r),g=s4(g,h.children),g.flags|=4096);return g}}if(b)return x0(g),P=h.fallback,A=g.mode,Q=r.child,$=Q.sibling,h=El(Q,{mode:"hidden",children:h.children}),h.subtreeFlags=Q.subtreeFlags&65011712,$!==null?P=El($,P):(P=S1(P,A,o,null),P.flags|=2),P.return=g,h.return=g,h.sibling=P,g.child=h,tb(null,h),h=g.child,P=r.child.memoizedState,P===null?P=p4(o):(A=P.cachePool,A!==null?(Q=jg._currentValue,A=A.parent!==Q?{parent:Q,pool:Q}:A):A=LH(),P={baseLanes:P.baseLanes|o,cachePool:A}),h.memoizedState=P,h.childLanes=d4(r,l,o),g.memoizedState=Vn,tb(r.child,h);return W!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&Nu(g),Z0(g),o=r.child,r=o.sibling,o=El(o,{mode:"visible",children:h.children}),o.return=g,o.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=o,g.memoizedState=null,o}function s4(r,g){return g=$u({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function $u(r,g){return r=Y(22,r,null,g),r.lanes=0,r}function r6(r,g,o){return be(g,r.child,null,o),r=s4(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function BO(r,g,o){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),h4(r.return,g,o)}function g6(r,g,o,l,h,b){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:h,treeForkCount:b}:(i.isBackwards=g,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=o,i.tailMode=h,i.treeForkCount=b)}function ZO(r,g,o){var l=g.pendingProps,h=l.revealOrder,b=l.tail,i=l.children,P=Dg.current;if((l=(P&n5)!==0)?(P=P&Yh|n5,g.flags|=128):P&=Yh,Xr(Dg,P,g),P=h==null?"null":h,h!=="forwards"&&h!=="unstable_legacy-backwards"&&h!=="together"&&h!=="independent"&&!GW[P])if(GW[P]=!0,h==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(h==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof h==="string")switch(h.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',h,h.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',h,h.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',h);if(P=b==null?"null":b,!K2[P])if(b==null){if(h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")K2[P]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(K2[P]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):h!=="forwards"&&h!=="backwards"&&h!=="unstable_legacy-backwards"&&(K2[P]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));r:if((h==="forwards"||h==="backwards"||h==="unstable_legacy-backwards")&&i!==void 0&&i!==null&&i!==!1)if(oo(i)){for(P=0;P<i.length;P++)if(!kH(i[P],P))break r}else if(P=N(i),typeof P==="function"){if(P=P.call(i))for(var A=P.next(),W=0;!A.done;A=P.next()){if(!kH(A.value,W))break r;W++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',h);if(Oo(r,g,i,o),pr?(m0(),i=ab):i=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&BO(r,o,g);else if(r.tag===19)BO(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(h){case"forwards":o=g.child;for(h=null;o!==null;)r=o.alternate,r!==null&&Hu(r)===null&&(h=o),o=o.sibling;o=h,o===null?(h=g.child,g.child=null):(h=o.sibling,o.sibling=null),g6(g,!1,h,o,b,i);break;case"backwards":case"unstable_legacy-backwards":o=null,h=g.child;for(g.child=null;h!==null;){if(r=h.alternate,r!==null&&Hu(r)===null){g.child=h;break}r=h.sibling,h.sibling=o,o=h,h=r}g6(g,!0,o,null,b,i);break;case"together":g6(g,!1,null,null,void 0,i);break;default:g.memoizedState=null}return g.child}function fl(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Zo=-1,e1|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(Se(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=El(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=El(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function o6(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&ou(r)?!0:!1}function tX(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),I0(g,jg,r.memoizedState.cache),D1();break;case 27:case 5:or(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:I0(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,M4(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return Z0(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return NO(r,g,o);return Z0(g),r=fl(r,g,o),r!==null?r.sibling:null}Z0(g);break;case 19:var h=(r.flags&128)!==0;if(l=(o&g.childLanes)!==0,l||(Se(r,g,o,!1),l=(o&g.childLanes)!==0),h){if(l)return ZO(r,g,o);g.flags|=128}if(h=g.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xr(Dg,Dg.current,g),l)break;else return null;case 22:return g.lanes=0,UO(r,g,o,g.pendingProps);case 24:I0(g,jg,r.memoizedState.cache)}return fl(r,g,o)}function v6(r,g,o){if(g._debugNeedsRemount&&r!==null){o=si(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===l.child)l.child=o;else{var h=l.child;if(h===null)throw Error("Expected parent to have a child.");for(;h.sibling!==g;)if(h=h.sibling,h===null)throw Error("Expected to find the previous sibling.");h.sibling=o}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)pg=!0;else{if(!o6(r,o)&&(g.flags&128)===0)return pg=!1,tX(r,g,o);pg=(r.flags&131072)!==0?!0:!1}else{if(pg=!1,l=pr)m0(),l=(g.flags&1048576)!==0;l&&(l=g.index,m0(),tH(g,ab,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=F0(g.elementType),g.type=r,typeof r==="function")di(r)?(l=j1(r,l),g.tag=1,g.type=r=T1(r),g=IO(null,g,r,l,o)):(g.tag=0,a4(g,r),g.type=r=T1(r),g=f4(null,g,r,l,o));else{if(r!==void 0&&r!==null){if(h=r.$$typeof,h===xb){g.tag=11,g.type=r=pi(r),g=QO(null,g,r,l,o);break r}else if(h===fu){g.tag=14,g=zO(null,g,r,l,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===iv&&(g=" Did you wrap a component in React.lazy() more than once?"),o=E(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return f4(r,g,g.type,g.pendingProps,o);case 1:return l=g.type,h=j1(l,g.pendingProps),IO(r,g,l,h,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var b=g.memoizedState;h=b.element,O4(r,g),Mb(g,l,null,o);var i=g.memoizedState;if(l=i.cache,I0(g,jg,l),l!==b.cache&&b4(g,[jg],o,!0),Ab(),l=i.element,b.isDehydrated)if(b={element:l,isDehydrated:!1,cache:i.cache},g.updateQueue.baseState=b,g.memoizedState=b,g.flags&256){g=FO(r,g,l,o);break r}else if(l!==h){h=lv(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),ib(h),g=FO(r,g,l,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}zg=uv(r.firstChild),Mo=g,pr=!0,a0=null,ml=!1,Hv=null,Lv=!0,o=fM(g,null,l,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(D1(),l===h){g=fl(r,g,o);break r}Oo(r,g,l,o)}g=g.child}return g;case 26:return Uu(r,g),r===null?(o=bA(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,l=Zr(V0.current),l=Tu(l).createElement(o),l[Ao]=g,l[Fo]=r,qo(l,o,r),Qr(l),g.stateNode=l):g.memoizedState=bA(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return or(g),r===null&&pr&&(l=Zr(V0.current),h=er(),l=g.stateNode=eA(g.type,g.pendingProps,l,h,!1),ml||(h=cq(l,g.type,g.pendingProps,h),h!==null&&(k1(g,0).serverProps=h)),Mo=g,Lv=!0,h=zg,k0(g.type)?(P8=h,zg=uv(l.firstChild)):zg=h),Oo(r,g,g.pendingProps.children,o),Uu(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(b=er(),l=Vi(g.type,b.ancestorInfo),h=zg,(i=!h)||(i=uY(h,g.type,g.pendingProps,Lv),i!==null?(g.stateNode=i,ml||(b=cq(i,g.type,g.pendingProps,b),b!==null&&(k1(g,0).serverProps=b)),Mo=g,zg=uv(i.firstChild),Lv=!1,b=!0):b=!1,i=!b),i&&(l&&ru(g,h),L0(g))),or(g),h=g.type,b=g.pendingProps,i=r!==null?r.memoizedProps:null,l=b.children,U6(h,b)?l=null:i!==null&&U6(h,i)&&(g.flags|=32),g.memoizedState!==null&&(h=R4(r,g,HX,null,null,o),$5._currentValue=h),Uu(r,g),Oo(r,g,l,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=er(),l=r.ancestorInfo.current,o=l!=null?_w(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=zg,(l=!r)||(l=iY(r,g.pendingProps,Lv),l!==null?(g.stateNode=l,Mo=g,zg=null,l=!0):l=!1,l=!l),l&&(o&&ru(g,r),L0(g))),null;case 13:return NO(r,g,o);case 4:return k(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=be(g,null,l,o):Oo(r,g,l,o),g.child;case 11:return QO(r,g,g.type,g.pendingProps,o);case 7:return Oo(r,g,g.pendingProps,o),g.child;case 8:return Oo(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,Oo(r,g,g.pendingProps.children,o),g.child;case 10:return l=g.type,h=g.pendingProps,b=h.value,"value"in h||tW||(tW=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),I0(g,l,b),Oo(r,g,h.children,o),g.child;case 9:return h=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),V1(g),h=Ug(h),l=mn(l,h,void 0),g.flags|=1,Oo(r,g,l,o),g.child;case 14:return zO(r,g,g.type,g.pendingProps,o);case 15:return KO(r,g,g.type,g.pendingProps,o);case 19:return ZO(r,g,o);case 31:return GX(r,g,o);case 22:return UO(r,g,o,g.pendingProps);case 24:return V1(g),l=Ug(jg),r===null?(h=n4(),h===null&&(h=Wg,b=w4(),h.pooledCache=b,_1(b),b!==null&&(h.pooledCacheLanes|=o),h=b),g.memoizedState={parent:l,cache:h},H4(g),I0(g,jg,h)):((r.lanes&o)!==0&&(O4(r,g),Mb(g,null,null,o),Ab()),h=r.memoizedState,b=g.memoizedState,h.parent!==l?(h={parent:l,cache:l},g.memoizedState=h,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=h),I0(g,jg,l)):(l=b.cache,I0(g,jg,l),l!==h.cache&&b4(g,[jg],o,!0))),Oo(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function al(r){r.flags|=4}function l6(r,g,o,l,h){if(g=(r.mode&kJ)!==Ur)g=!1;if(g){if(r.flags|=16777216,(h&335544128)===h)if(r.stateNode.complete)r.flags|=8192;else if(qq())r.flags|=8192;else throw he=t2,In}else r.flags&=-16777217}function xO(r,g){if(g.type!=="stylesheet"||(g.state.loading&Zv)!==We)r.flags&=-16777217;else if(r.flags|=16777216,!PA(g))if(qq())r.flags|=8192;else throw he=t2,In}function mu(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?Ne():536870912,r.lanes|=g,Pe|=g)}function Xb(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function tg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(g)if((r.mode&kr)!==Ur){for(var{selfBaseDuration:h,child:b}=r;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags&65011712,l|=b.flags&65011712,h+=b.treeBaseDuration,b=b.sibling;r.treeBaseDuration=h}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=r,h=h.sibling;else if((r.mode&kr)!==Ur){h=r.actualDuration,b=r.selfBaseDuration;for(var i=r.child;i!==null;)o|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,h+=i.actualDuration,b+=i.treeBaseDuration,i=i.sibling;r.actualDuration=h,r.treeBaseDuration=b}else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=l,r.childLanes=o,g}function XX(r,g,o){var l=g.pendingProps;switch(v4(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tg(g),null;case 1:return tg(g),null;case 3:if(o=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),cl(jg,g),s(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)Te(g)?(e4(),al(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,l4());return tg(g),null;case 26:var{type:h,memoizedState:b}=g;return r===null?(al(g),b!==null?(tg(g),xO(g,b)):(tg(g),l6(g,h,null,l,o))):b?b!==r.memoizedState?(al(g),tg(g),xO(g,b)):(tg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&al(g),tg(g),l6(g,h,r,l,o)),null;case 27:if(Ar(g),o=Zr(V0.current),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&al(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return tg(g),null}r=er(),Te(g)?QH(g,r):(r=eA(h,l,o,r,!0),g.stateNode=r,al(g))}return tg(g),null;case 5:if(Ar(g),h=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&al(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return tg(g),null}var i=er();if(Te(g))QH(g,i);else{switch(b=Zr(V0.current),Vi(h,i.ancestorInfo),i=i.context,b=Tu(b),i){case Bh:b=b.createElementNS(eh,h);break;case c2:b=b.createElementNS(o2,h);break;default:switch(h){case"svg":b=b.createElementNS(eh,h);break;case"math":b=b.createElementNS(o2,h);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof l.is==="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?b.multiple=!0:l.size&&(b.size=l.size);break;default:b=typeof l.is==="string"?b.createElement(h,{is:l.is}):b.createElement(h),h.indexOf("-")===-1&&(h!==h.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",h),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||Vv.call(EW,h)||(EW[h]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",h)))}}b[Ao]=g,b[Fo]=l;r:for(i=g.child;i!==null;){if(i.tag===5||i.tag===6)b.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===g)break r;for(;i.sibling===null;){if(i.return===null||i.return===g)break r;i=i.return}i.sibling.return=i.return,i=i.sibling}g.stateNode=b;r:switch(qo(b,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&al(g)}}return tg(g),l6(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&al(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Zr(V0.current),o=er(),Te(g)){if(r=g.stateNode,o=g.memoizedProps,h=!ml,l=null,b=Mo,b!==null)switch(b.tag){case 3:h&&(h=vA(r,o,l),h!==null&&(k1(g,0).serverProps=h));break;case 27:case 5:l=b.memoizedProps,h&&(h=vA(r,o,l),h!==null&&(k1(g,0).serverProps=h))}r[Ao]=g,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||Dq(r.nodeValue,o)?!0:!1,r||L0(g,!0)}else h=o.ancestorInfo.current,h!=null&&_w(l,h.tag,o.ancestorInfo.implicitRootScope),r=Tu(r).createTextNode(l),r[Ao]=g,g.stateNode=r}return tg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(l=Te(g),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Ao]=g,tg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else e4(),D1(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,tg(g),(g.mode&kr)!==Ur&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=l4(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return bv(g),g;return bv(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return tg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=l,b=Te(g),h!==null&&h.dehydrated!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=g.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[Ao]=g,tg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration))}else e4(),D1(),(g.flags&128)===0&&(h=g.memoizedState=null),g.flags|=4,tg(g),(g.mode&kr)!==Ur&&h!==null&&(h=g.child,h!==null&&(g.treeBaseDuration-=h.treeBaseDuration));h=!1}else h=l4(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h){if(g.flags&256)return bv(g),g;return bv(g),null}}if(bv(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Ur&&Hb(g),g;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=g.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),b=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(b=l.memoizedState.cachePool.pool),b!==h&&(l.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),mu(g,g.updateQueue),tg(g),(g.mode&kr)!==Ur&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(g),r===null&&t6(g.stateNode.containerInfo),tg(g),null;case 10:return cl(g.type,g),tg(g),null;case 19:if(Mr(Dg,g),l=g.memoizedState,l===null)return tg(g),null;if(h=(g.flags&128)!==0,b=l.rendering,b===null)if(h)Xb(l,!1);else{if(Ig!==n0||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(b=Hu(r),b!==null){g.flags|=128,Xb(l,!1),r=b.updateQueue,g.updateQueue=r,mu(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)RH(o,r),o=o.sibling;return Xr(Dg,Dg.current&Yh|n5,g),pr&&yl(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&ho()>N2&&(g.flags|=128,h=!0,Xb(l,!1),g.lanes=4194304)}else{if(!h)if(r=Hu(b),r!==null){if(g.flags|=128,h=!0,r=r.updateQueue,g.updateQueue=r,mu(g,r),Xb(l,!0),l.tail===null&&l.tailMode==="hidden"&&!b.alternate&&!pr)return tg(g),null}else 2*ho()-l.renderingStartTime>N2&&o!==536870912&&(g.flags|=128,h=!0,Xb(l,!1),g.lanes=4194304);l.isBackwards?(b.sibling=g.child,g.child=b):(r=l.last,r!==null?r.sibling=b:g.child=b,l.last=b)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=ho(),r.sibling=null,o=Dg.current,o=h?o&Yh|n5:o&Yh,Xr(Dg,o,g),pr&&yl(g,l.treeForkCount),r;return tg(g),null;case 22:case 23:return bv(g),A4(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(o&536870912)!==0&&(g.flags&128)===0&&(tg(g),g.subtreeFlags&6&&(g.flags|=8192)):tg(g),o=g.updateQueue,o!==null&&mu(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==o&&(g.flags|=2048),r!==null&&Mr(le,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),cl(jg,g),tg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function YX(r,g){switch(v4(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Hb(g),g):null;case 3:return cl(jg,g),s(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Ar(g),null;case 31:if(g.memoizedState!==null){if(bv(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Hb(g),g):null;case 13:if(bv(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");D1()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Hb(g),g):null;case 19:return Mr(Dg,g),null;case 4:return s(g),null;case 10:return cl(g.type,g),null;case 22:case 23:return bv(g),A4(g),r!==null&&Mr(le,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Ur&&Hb(g),g):null;case 24:return cl(jg,g),null;case 25:return null;default:return null}}function CO(r,g){switch(v4(g),g.tag){case 3:cl(jg,g),s(g);break;case 26:case 27:case 5:Ar(g);break;case 4:s(g);break;case 31:g.memoizedState!==null&&bv(g);break;case 13:bv(g);break;case 19:Mr(Dg,g);break;case 10:cl(g.type,g);break;case 22:case 23:bv(g),A4(g),r!==null&&Mr(le,g);break;case 24:cl(jg,g)}}function Ml(r){return(r.mode&kr)!==Ur}function TO(r,g){Ml(r)?(Al(),Yb(g,r),ql()):Yb(g,r)}function e6(r,g,o){Ml(r)?(Al(),Ee(o,r,g),ql()):Ee(o,r,g)}function Yb(r,g){try{var o=g.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var h=l.next;o=h;do{if((o.tag&r)===r&&(l=void 0,(r&xo)!==Y2&&(Ih=!0),l=wr(g,yJ,o),(r&xo)!==Y2&&(Ih=!1),l!==void 0&&typeof l!=="function")){var b=void 0;b=(o.tag&qv)!==0?"useLayoutEffect":(o.tag&xo)!==0?"useInsertionEffect":"useEffect";var i=void 0;i=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,wr(g,function(P,A){console.error("%s must not return anything besides a function, which is used for clean-up.%s",P,A)},b,i)}o=o.next}while(o!==h)}}catch(P){bg(g,g.return,P)}}function Ee(r,g,o){try{var l=g.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var b=h.next;l=b;do{if((l.tag&r)===r){var i=l.inst,P=i.destroy;P!==void 0&&(i.destroy=void 0,(r&xo)!==Y2&&(Ih=!0),h=g,wr(h,cJ,h,o,P),(r&xo)!==Y2&&(Ih=!1))}l=l.next}while(l!==b)}}catch(A){bg(g,g.return,A)}}function SO(r,g){Ml(r)?(Al(),Yb(g,r),ql()):Yb(g,r)}function h6(r,g,o){Ml(r)?(Al(),Ee(o,r,g),ql()):Ee(o,r,g)}function kO(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Kh||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{wr(r,VH,g,o)}catch(l){bg(r,r.return,l)}}}function JX(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function QX(r,g){var{memoizedProps:o,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Kh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(r)||"instance"));try{var h=j1(r.type,o),b=wr(r,JX,g,h,l);o=XW,b!==void 0||o.has(r.type)||(o.add(r.type),wr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",x(r))})),g.__reactInternalSnapshotBeforeUpdate=b}catch(i){bg(r,r.return,i)}}function DO(r,g,o){o.props=j1(r.type,r.memoizedProps),o.state=r.memoizedState,Ml(r)?(Al(),wr(r,kM,r,g,o),ql()):wr(r,kM,r,g,o)}function zX(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(Ml(r))try{Al(),r.refCleanup=g(o)}finally{ql()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",x(r)),g.current=o}}function Jb(r,g){try{wr(r,zX,r)}catch(o){bg(r,g,o)}}function Wl(r,g){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(Ml(r))try{Al(),wr(r,l)}finally{ql(r)}else wr(r,l)}catch(h){bg(r,g,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(Ml(r))try{Al(),wr(r,o,null)}finally{ql(r)}else wr(r,o,null)}catch(h){bg(r,g,h)}else o.current=null}function VO(r,g,o,l){var h=r.memoizedProps,b=h.id,i=h.onCommit;h=h.onRender,g=g===null?"mount":"update",M2&&(g="nested-update"),typeof h==="function"&&h(b,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof i==="function"&&i(b,g,l,o)}function KX(r,g,o,l){var h=r.memoizedProps;r=h.id,h=h.onPostCommit,g=g===null?"mount":"update",M2&&(g="nested-update"),typeof h==="function"&&h(r,g,l,o)}function _O(r){var{type:g,memoizedProps:o,stateNode:l}=r;try{wr(r,pX,l,g,o,r)}catch(h){bg(r,r.return,h)}}function b6(r,g,o){try{wr(r,sX,r.stateNode,r.type,o,g,r)}catch(l){bg(r,r.return,l)}}function EO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&k0(r.type)||r.tag===4}function w6(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||EO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&k0(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function u6(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(dq(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(dq(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=_l));else if(l!==4&&(l===27&&k0(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(u6(r,g,o),r=r.sibling;r!==null;)u6(r,g,o),r=r.sibling}function Lu(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(l!==4&&(l===27&&k0(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Lu(r,g,o),r=r.sibling;r!==null;)Lu(r,g,o),r=r.sibling}function UX(r){for(var g,o=r.return;o!==null;){if(EO(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=w6(r),Lu(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(pq(o),g.flags&=-33),g=w6(r),Lu(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=w6(r),u6(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function yO(r){var{stateNode:g,memoizedProps:o}=r;try{wr(r,qY,r.type,o,g,r)}catch(l){bg(r,r.return,l)}}function cO(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function $X(r,g){if(r=r.containerInfo,u8=p2,r=uH(r),yi(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:h,focusNode:b}=l;l=l.focusOffset;try{o.nodeType,b.nodeType}catch(hr){o=null;break r}var i=0,P=-1,A=-1,W=0,$=0,m=r,Q=null;g:for(;;){for(var F;;){if(m!==o||h!==0&&m.nodeType!==3||(P=i+h),m!==b||l!==0&&m.nodeType!==3||(A=i+l),m.nodeType===3&&(i+=m.nodeValue.length),(F=m.firstChild)===null)break;Q=m,m=F}for(;;){if(m===r)break g;if(Q===o&&++W===h&&(P=i),Q===b&&++$===l&&(A=i),(F=m.nextSibling)!==null)break;m=Q,Q=m.parentNode}m=F}o=P===-1||A===-1?null:{start:P,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;i8={focusedElem:r,selectionRange:o},p2=!1;for(wo=g;wo!==null;)if(g=wo,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,wo=r;else for(;wo!==null;){switch(r=g=wo,o=r.alternate,h=r.flags,r.tag){case 0:if((h&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)h=r[o],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:(h&1024)!==0&&o!==null&&QX(r,o);break;case 3:if((h&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)$6(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$6(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((h&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,wo=r;break}wo=g.return}}function jO(r,g,o){var l=ev(),h=nl(),b=Hl(),i=Ol(),P=o.flags;switch(o.tag){case 0:case 11:case 15:Rl(r,o),P&4&&TO(o,qv|Nv);break;case 1:if(Rl(r,o),P&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||Kh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Ml(o)?(Al(),wr(o,Ln,o,r),ql()):wr(o,Ln,o,r);else{var A=j1(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||Kh||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",x(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",x(o)||"instance")),Ml(o)?(Al(),wr(o,CM,o,r,A,g,r.__reactInternalSnapshotBeforeUpdate),ql()):wr(o,CM,o,r,A,g,r.__reactInternalSnapshotBeforeUpdate)}P&64&&kO(o),P&512&&Jb(o,o.return);break;case 3:if(g=jl(),Rl(r,o),P&64&&(P=o.updateQueue,P!==null)){if(A=null,o.child!==null)switch(o.child.tag){case 27:case 5:A=o.child.stateNode;break;case 1:A=o.child.stateNode}try{wr(o,VH,P,A)}catch($){bg(o,o.return,$)}}r.effectDuration+=lu(g);break;case 27:g===null&&P&4&&yO(o);case 26:case 5:if(Rl(r,o),g===null){if(P&4)_O(o);else if(P&64){r=o.type,g=o.memoizedProps,A=o.stateNode;try{wr(o,dX,A,r,g,o)}catch($){bg(o,o.return,$)}}}P&512&&Jb(o,o.return);break;case 12:if(P&4){P=jl(),Rl(r,o),r=o.stateNode,r.effectDuration+=Pb(P);try{wr(o,VO,o,g,p0,r.effectDuration)}catch($){bg(o,o.return,$)}}else Rl(r,o);break;case 31:Rl(r,o),P&4&&pO(r,o);break;case 13:Rl(r,o),P&4&&dO(r,o),P&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(P=CX.bind(null,o),nY(r,P))));break;case 22:if(P=o.memoizedState!==null||i0,!P){g=g!==null&&g.memoizedState!==null||dg,A=i0;var W=dg;i0=P,(dg=g)&&!W?(Gl(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&jw(o,zr,Kr)):Rl(r,o),i0=A,dg=W}break;case 30:break;default:Rl(r,o)}(o.mode&kr)!==Ur&&0<=zr&&0<=Kr&&((Bg||0.05<Lg)&&ul(o,zr,Kr,Lg,$g),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Kr-zr&&(cO(o.return.alternate,o.return)||wl(o,zr,Kr,"Mount"))),hv(l),Pl(h),$g=b,Bg=i}function fO(r){var g=r.alternate;g!==null&&(r.alternate=null,fO(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&ur(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function pl(r,g,o){for(o=o.child;o!==null;)aO(r,g,o),o=o.sibling}function aO(r,g,o){if(zo&&typeof zo.onCommitFiberUnmount==="function")try{zo.onCommitFiberUnmount(vh,o)}catch(W){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",W))}var l=ev(),h=nl(),b=Hl(),i=Ol();switch(o.tag){case 26:dg||Wl(o,g),pl(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:dg||Wl(o,g);var P=sg,A=fo;k0(o.type)&&(sg=o.stateNode,fo=!1),pl(r,g,o),wr(o,Fb,o.stateNode),sg=P,fo=A;break;case 5:dg||Wl(o,g);case 6:if(P=sg,A=fo,sg=null,pl(r,g,o),sg=P,fo=A,sg!==null)if(fo)try{wr(o,oY,sg,o.stateNode)}catch(W){bg(o,g,W)}else try{wr(o,gY,sg,o.stateNode)}catch(W){bg(o,g,W)}break;case 18:sg!==null&&(fo?(r=sg,sq(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),se(r)):sq(sg,o.stateNode));break;case 4:P=sg,A=fo,sg=o.stateNode.containerInfo,fo=!0,pl(r,g,o),sg=P,fo=A;break;case 0:case 11:case 14:case 15:Ee(xo,o,g),dg||e6(o,g,qv),pl(r,g,o);break;case 1:dg||(Wl(o,g),P=o.stateNode,typeof P.componentWillUnmount==="function"&&DO(o,g,P)),pl(r,g,o);break;case 21:pl(r,g,o);break;case 22:dg=(P=dg)||o.memoizedState!==null,pl(r,g,o),dg=P;break;default:pl(r,g,o)}(o.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(o,zr,Kr,Lg,$g),hv(l),Pl(h),$g=b,Bg=i}function pO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{wr(g,HY,r)}catch(o){bg(g,g.return,o)}}}function dO(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{wr(g,OY,r)}catch(o){bg(g,g.return,o)}}function mX(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new YW),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new YW),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Iu(r,g){var o=mX(r);g.forEach(function(l){if(!o.has(l)){if(o.add(l),Kl)if(Uh!==null&&$h!==null)Ub($h,Uh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var h=TX.bind(null,r,l);l.then(h,h)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var l=0;l<o.length;l++){var h=r,b=g,i=o[l],P=ev(),A=b;r:for(;A!==null;){switch(A.tag){case 27:if(k0(A.type)){sg=A.stateNode,fo=!1;break r}break;case 5:sg=A.stateNode,fo=!1;break r;case 3:case 4:sg=A.stateNode.containerInfo,fo=!0;break r}A=A.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");aO(h,b,i),sg=null,fo=!1,(i.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&wl(i,zr,Kr,"Unmount"),hv(P),h=i,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)sO(g,r),g=g.sibling}function sO(r,g){var o=ev(),l=nl(),h=Hl(),b=Ol(),i=r.alternate,P=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),jo(r),P&4&&(Ee(xo|Nv,r,r.return),Yb(xo|Nv,r),e6(r,r.return,qv|Nv));break;case 1:if(co(g,r),jo(r),P&512&&(dg||i===null||Wl(i,i.return)),P&64&&i0&&(P=r.updateQueue,P!==null&&(i=P.callbacks,i!==null))){var A=P.shared.hiddenCallbacks;P.shared.hiddenCallbacks=A===null?i:A.concat(i)}break;case 26:if(A=jv,co(g,r),jo(r),P&512&&(dg||i===null||Wl(i,i.return)),P&4){var W=i!==null?i.memoizedState:null;if(P=r.memoizedState,i===null)if(P===null)if(r.stateNode===null){r:{P=r.type,i=r.memoizedProps,A=A.ownerDocument||A;g:switch(P){case"title":if(W=A.getElementsByTagName("title")[0],!W||W[Sb]||W[Ao]||W.namespaceURI===eh||W.hasAttribute("itemprop"))W=A.createElement(P),A.head.insertBefore(W,A.querySelector("head > title"));qo(W,P,i),W[Ao]=r,Qr(W),P=W;break r;case"link":var $=iA("link","href",A).get(P+(i.href||""));if($){for(var m=0;m<$.length;m++)if(W=$[m],W.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&W.getAttribute("rel")===(i.rel==null?null:i.rel)&&W.getAttribute("title")===(i.title==null?null:i.title)&&W.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){$.splice(m,1);break g}}W=A.createElement(P),qo(W,P,i),A.head.appendChild(W);break;case"meta":if($=iA("meta","content",A).get(P+(i.content||""))){for(m=0;m<$.length;m++)if(W=$[m],Hg(i.content,"content"),W.getAttribute("content")===(i.content==null?null:""+i.content)&&W.getAttribute("name")===(i.name==null?null:i.name)&&W.getAttribute("property")===(i.property==null?null:i.property)&&W.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&W.getAttribute("charset")===(i.charSet==null?null:i.charSet)){$.splice(m,1);break g}}W=A.createElement(P),qo(W,P,i),A.head.appendChild(W);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+P+'". This is a bug in React.')}W[Ao]=r,Qr(W),P=W}r.stateNode=P}else nA(A,r.type,r.stateNode);else r.stateNode=uA(A,P,r.memoizedProps);else W!==P?(W===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):W.count--,P===null?nA(A,r.type,r.stateNode):uA(A,P,r.memoizedProps)):P===null&&r.stateNode!==null&&b6(r,r.memoizedProps,i.memoizedProps)}break;case 27:co(g,r),jo(r),P&512&&(dg||i===null||Wl(i,i.return)),i!==null&&P&4&&b6(r,r.memoizedProps,i.memoizedProps);break;case 5:if(co(g,r),jo(r),P&512&&(dg||i===null||Wl(i,i.return)),r.flags&32){A=r.stateNode;try{wr(r,pq,A)}catch(Or){bg(r,r.return,Or)}}P&4&&r.stateNode!=null&&(A=r.memoizedProps,b6(r,A,i!==null?i.memoizedProps:A)),P&1024&&(_n=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),jo(r),P&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");P=r.memoizedProps,i=i!==null?i.memoizedProps:P,A=r.stateNode;try{wr(r,rY,A,i,P)}catch(Or){bg(r,r.return,Or)}}break;case 3:if(A=jl(),j2=null,W=jv,jv=Su(g.containerInfo),co(g,r),jv=W,jo(r),P&4&&i!==null&&i.memoizedState.isDehydrated)try{wr(r,PY,g.containerInfo)}catch(Or){bg(r,r.return,Or)}_n&&(_n=!1,rq(r)),g.effectDuration+=lu(A);break;case 4:P=jv,jv=Su(r.stateNode.containerInfo),co(g,r),jo(r),jv=P;break;case 12:P=jl(),co(g,r),jo(r),r.stateNode.effectDuration+=Pb(P);break;case 31:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 13:co(g,r),jo(r),r.child.flags&8192&&r.memoizedState!==null!==(i!==null&&i.memoizedState!==null)&&(F2=ho()),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 22:A=r.memoizedState!==null;var Q=i!==null&&i.memoizedState!==null,F=i0,hr=dg;if(i0=F||A,dg=hr||Q,co(g,r),dg=hr,i0=F,Q&&!A&&!F&&!hr&&(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&jw(r,zr,Kr),jo(r),P&8192)r:for(g=r.stateNode,g._visibility=A?g._visibility&~fb:g._visibility|fb,!A||i===null||Q||i0||dg||(f1(r),(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&wl(r,zr,Kr,"Disconnect")),i=null,g=r;;){if(g.tag===5||g.tag===26){if(i===null){Q=i=g;try{W=Q.stateNode,A?wr(Q,lY,W):wr(Q,bY,Q.stateNode,Q.memoizedProps)}catch(Or){bg(Q,Q.return,Or)}}}else if(g.tag===6){if(i===null){Q=g;try{$=Q.stateNode,A?wr(Q,eY,$):wr(Q,wY,$,Q.memoizedProps)}catch(Or){bg(Q,Q.return,Or)}}}else if(g.tag===18){if(i===null){Q=g;try{m=Q.stateNode,A?wr(Q,vY,m):wr(Q,hY,Q.stateNode)}catch(Or){bg(Q,Q.return,Or)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;i===g&&(i=null),g=g.return}i===g&&(i=null),g.sibling.return=g.return,g=g.sibling}P&4&&(P=r.updateQueue,P!==null&&(i=P.retryQueue,i!==null&&(P.retryQueue=null,Iu(r,i))));break;case 19:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Iu(r,P)));break;case 30:break;case 21:break;default:co(g,r),jo(r)}(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&((Bg||0.05<Lg)&&ul(r,zr,Kr,Lg,$g),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Kr-zr&&(cO(r.return.alternate,r.return)||wl(r,zr,Kr,"Mount"))),hv(o),Pl(l),$g=h,Bg=b}function jo(r){var g=r.flags;if(g&2){try{wr(r,UX,r)}catch(o){bg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function rq(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;rq(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Rl(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)jO(r,g.alternate,g),g=g.sibling}function gq(r){var g=ev(),o=nl(),l=Hl(),h=Ol();switch(r.tag){case 0:case 11:case 14:case 15:e6(r,r.return,qv),f1(r);break;case 1:Wl(r,r.return);var b=r.stateNode;typeof b.componentWillUnmount==="function"&&DO(r,r.return,b),f1(r);break;case 27:wr(r,Fb,r.stateNode);case 26:case 5:Wl(r,r.return),f1(r);break;case 22:r.memoizedState===null&&f1(r);break;case 30:f1(r);break;default:f1(r)}(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(r,zr,Kr,Lg,$g),hv(g),Pl(o),$g=l,Bg=h}function f1(r){for(r=r.child;r!==null;)gq(r),r=r.sibling}function oq(r,g,o,l){var h=ev(),b=nl(),i=Hl(),P=Ol(),A=o.flags;switch(o.tag){case 0:case 11:case 15:Gl(r,o,l),TO(o,qv);break;case 1:if(Gl(r,o,l),g=o.stateNode,typeof g.componentDidMount==="function"&&wr(o,Ln,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{wr(o,PX,g,r)}catch(W){bg(o,o.return,W)}}l&&A&64&&kO(o),Jb(o,o.return);break;case 27:yO(o);case 26:case 5:Gl(r,o,l),l&&g===null&&A&4&&_O(o),Jb(o,o.return);break;case 12:if(l&&A&4){A=jl(),Gl(r,o,l),l=o.stateNode,l.effectDuration+=Pb(A);try{wr(o,VO,o,g,p0,l.effectDuration)}catch(W){bg(o,o.return,W)}}else Gl(r,o,l);break;case 31:Gl(r,o,l),l&&A&4&&pO(r,o);break;case 13:Gl(r,o,l),l&&A&4&&dO(r,o);break;case 22:o.memoizedState===null&&Gl(r,o,l),Jb(o,o.return);break;case 30:break;default:Gl(r,o,l)}(o.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(o,zr,Kr,Lg,$g),hv(h),Pl(b),$g=i,Bg=P}function Gl(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)oq(r,g.alternate,g,o),g=g.sibling}function i6(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_1(r),o!=null&&nb(o))}function n6(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_1(g),r!=null&&nb(r))}function Dv(r,g,o,l,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var b=g.sibling;vq(r,g,o,l,b!==null?b.actualStartTime:h),g=b}}function vq(r,g,o,l,h){var b=ev(),i=nl(),P=Hl(),A=Ol(),W=c0,$=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&fw(g,g.actualStartTime,h,vo,o),Dv(r,g,o,l,h),$&2048&&SO(g,Co|Nv);break;case 1:(g.mode&kr)!==Ur&&0<g.actualStartTime&&((g.flags&128)!==0?ji(g,g.actualStartTime,h,[]):(g.flags&1)!==0&&fw(g,g.actualStartTime,h,vo,o)),Dv(r,g,o,l,h);break;case 3:var m=jl(),Q=vo;vo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dv(r,g,o,l,h),vo=Q,$&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==o&&(_1(l),o!=null&&nb(o))),r.passiveEffectDuration+=lu(m);break;case 12:if($&2048){$=jl(),Dv(r,g,o,l,h),r=g.stateNode,r.passiveEffectDuration+=Pb($);try{wr(g,KX,g,g.alternate,p0,r.passiveEffectDuration)}catch(F){bg(g,g.return,F)}}else Dv(r,g,o,l,h);break;case 31:$=vo,m=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,m!==null&&Q===null?(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(vo=!1,m=m.hydrationErrors,m!==null&&ji(g,g.actualStartTime,h,m)):vo=!0):vo=!1,Dv(r,g,o,l,h),vo=$;break;case 13:$=vo,m=g.alternate!==null?g.alternate.memoizedState:null,Q=g.memoizedState,m===null||m.dehydrated===null||Q!==null&&Q.dehydrated!==null?vo=!1:(Q=g.deletions,Q!==null&&0<Q.length&&Q[0].tag===18?(vo=!1,m=m.hydrationErrors,m!==null&&ji(g,g.actualStartTime,h,m)):vo=!0),Dv(r,g,o,l,h),vo=$;break;case 23:break;case 22:Q=g.stateNode,m=g.alternate,g.memoizedState!==null?Q._visibility&r0?Dv(r,g,o,l,h):Qb(r,g,o,l,h):Q._visibility&r0?Dv(r,g,o,l,h):(Q._visibility|=r0,ye(r,g,o,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),h),(g.mode&kr)===Ur||vo||(r=g.actualStartTime,0<=r&&0.05<h-r&&jw(g,r,h),0<=zr&&0<=Kr&&0.05<Kr-zr&&jw(g,zr,Kr))),$&2048&&i6(m,g);break;case 24:Dv(r,g,o,l,h),$&2048&&n6(g.alternate,g);break;default:Dv(r,g,o,l,h)}if((g.mode&kr)!==Ur){if(r=!vo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<h-o&&wl(g,o,h,"Mount");0<=zr&&0<=Kr&&((Bg||0.05<Lg)&&ul(g,zr,Kr,Lg,$g),r&&0.05<Kr-zr&&wl(g,zr,Kr,"Mount"))}hv(b),Pl(i),$g=P,Bg=A,c0=W}function ye(r,g,o,l,h,b){h=h&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var i=g.sibling;lq(r,g,o,l,h,i!==null?i.actualStartTime:b),g=i}}function lq(r,g,o,l,h,b){var i=ev(),P=nl(),A=Hl(),W=Ol(),$=c0;h&&(g.mode&kr)!==Ur&&0<g.actualStartTime&&(g.flags&1)!==0&&fw(g,g.actualStartTime,b,vo,o);var m=g.flags;switch(g.tag){case 0:case 11:case 15:ye(r,g,o,l,h,b),SO(g,Co);break;case 23:break;case 22:var Q=g.stateNode;g.memoizedState!==null?Q._visibility&r0?ye(r,g,o,l,h,b):Qb(r,g,o,l,b):(Q._visibility|=r0,ye(r,g,o,l,h,b)),h&&m&2048&&i6(g.alternate,g);break;case 24:ye(r,g,o,l,h,b),h&&m&2048&&n6(g.alternate,g);break;default:ye(r,g,o,l,h,b)}(g.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(g,zr,Kr,Lg,$g),hv(i),Pl(P),$g=A,Bg=W,c0=$}function Qb(r,g,o,l,h){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var b=g.child;b!==null;){g=b.sibling;var i=r,P=o,A=l,W=g!==null?g.actualStartTime:h,$=c0;(b.mode&kr)!==Ur&&0<b.actualStartTime&&(b.flags&1)!==0&&fw(b,b.actualStartTime,W,vo,P);var m=b.flags;switch(b.tag){case 22:Qb(i,b,P,A,W),m&2048&&i6(b.alternate,b);break;case 24:Qb(i,b,P,A,W),m&2048&&n6(b.alternate,b);break;default:Qb(i,b,P,A,W)}c0=$,b=g}}function ce(r,g,o){if(r.subtreeFlags&q5)for(r=r.child;r!==null;)eq(r,g,o),r=r.sibling}function eq(r,g,o){switch(r.tag){case 26:ce(r,g,o),r.flags&q5&&r.memoizedState!==null&&WY(o,jv,r.memoizedState,r.memoizedProps);break;case 5:ce(r,g,o);break;case 3:case 4:var l=jv;jv=Su(r.stateNode.containerInfo),ce(r,g,o),jv=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=q5,q5=16777216,ce(r,g,o),q5=l):ce(r,g,o));break;default:ce(r,g,o)}}function hq(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function zb(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],h=ev();wo=l,uq(l,r),(l.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&wl(l,zr,Kr,"Unmount"),hv(h)}hq(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bq(r),r=r.sibling}function bq(r){var g=ev(),o=nl(),l=Hl(),h=Ol();switch(r.tag){case 0:case 11:case 15:zb(r),r.flags&2048&&h6(r,r.return,Co|Nv);break;case 3:var b=jl();zb(r),r.stateNode.passiveEffectDuration+=lu(b);break;case 12:b=jl(),zb(r),r.stateNode.passiveEffectDuration+=Pb(b);break;case 22:b=r.stateNode,r.memoizedState!==null&&b._visibility&r0&&(r.return===null||r.return.tag!==13)?(b._visibility&=~r0,Fu(r),(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&wl(r,zr,Kr,"Disconnect")):zb(r);break;default:zb(r)}(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(r,zr,Kr,Lg,$g),hv(g),Pl(o),Bg=h,$g=l}function Fu(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],h=ev();wo=l,uq(l,r),(l.mode&kr)!==Ur&&0<=zr&&0<=Kr&&0.05<Kr-zr&&wl(l,zr,Kr,"Unmount"),hv(h)}hq(r)}for(r=r.child;r!==null;)wq(r),r=r.sibling}function wq(r){var g=ev(),o=nl(),l=Hl(),h=Ol();switch(r.tag){case 0:case 11:case 15:h6(r,r.return,Co),Fu(r);break;case 22:var b=r.stateNode;b._visibility&r0&&(b._visibility&=~r0,Fu(r));break;default:Fu(r)}(r.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(r,zr,Kr,Lg,$g),hv(g),Pl(o),Bg=h,$g=l}function uq(r,g){for(;wo!==null;){var o=wo,l=o,h=g,b=ev(),i=nl(),P=Hl(),A=Ol();switch(l.tag){case 0:case 11:case 15:h6(l,h,Co);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool,h!=null&&_1(h));break;case 24:nb(l.memoizedState.cache)}if((l.mode&kr)!==Ur&&0<=zr&&0<=Kr&&(Bg||0.05<Lg)&&ul(l,zr,Kr,Lg,$g),hv(b),Pl(i),Bg=A,$g=P,l=o.child,l!==null)l.return=o,wo=l;else r:for(o=r;wo!==null;){if(l=wo,b=l.sibling,i=l.return,fO(l),l===o){wo=null;break r}if(b!==null){b.return=i,wo=b;break r}wo=i}}}function LX(){dJ.forEach(function(r){return r()})}function iq(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||Z.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function wv(r){if((og&lo)!==uo&&Vr!==0)return Vr&-Vr;var g=Z.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),R6()):I()}function nq(){if(po===0)if((Vr&536870912)===0||pr){var r=du;du<<=1,(du&3932160)===0&&(du=262144),po=r}else po=536870912;return r=Ov.current,r!==null&&(r.flags|=32),po}function Ng(r,g,o){if(Ih&&console.error("useInsertionEffect must not schedule updates."),g8&&(x2=!0),r===Wg&&(ng===ie||ng===ne)||r.cancelPendingCommit!==null)fe(r,0),T0(r,Vr,po,!1);if(K0(r,o),(og&lo)!==uo&&r===Wg){if(Ql)switch(g.tag){case 0:case 11:case 15:r=Er&&x(Er)||"Unknown",CW.has(r)||(CW.add(r),g=x(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:xW||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),xW=!0)}}else Kl&&rb(r,g,o),kX(g),r===Wg&&((og&lo)===uo&&(h1|=o),Ig===v1&&T0(r,Vr,po,!1)),tl(r)}function Pq(r,g,o){if((og&(lo|Av))!==uo)throw Error("Should not already be working.");if(Vr!==0&&Er!==null){var l=Er,h=ho();switch(mM){case W5:case ie:var b=g5;Qg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",b,h,zv,void 0,"primary-light")):console.timeStamp("Suspended",b,h,zv,void 0,"primary-light"));break;case ne:b=g5,Qg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",b,h,zv,void 0,"primary-light")):console.timeStamp("Action",b,h,zv,void 0,"primary-light"));break;default:Qg&&(l=h-g5,3>l||console.timeStamp("Blocked",g5,h,zv,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}b=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||L1(r,g))?FX(r,g):H6(r,g,!0);var i=o;do{if(b===n0){mh&&!o&&T0(r,g,0,!1),g=ng,g5=fg(),mM=g;break}else{if(l=ho(),h=r.current.alternate,i&&!IX(h)){vv(g),h=bo,b=l,!Qg||b<=h||(Tg?Tg.run(console.timeStamp.bind(console,"Teared Render",h,b,fr,jr,"error")):console.timeStamp("Teared Render",h,b,fr,jr,"error")),a1(g,l),b=H6(r,g,!1),i=!1;continue}if(b===ue){if(i=g,r.errorRecoveryDisabledLanes&i)var P=0;else P=r.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){vv(g),fi(bo,l,g,Tg),a1(g,l),g=P;r:{l=r,b=i,i=G5;var A=l.current.memoizedState.isDehydrated;if(A&&(fe(l,P).flags|=256),P=H6(l,P,!1),P!==ue){if(cn&&!A){l.errorRecoveryDisabledLanes|=b,h1|=b,b=v1;break r}l=To,To=i,l!==null&&(To===null?To=l:To.push.apply(To,l))}b=P}if(i=!1,b!==ue)continue;else l=ho()}}if(b===M5){vv(g),fi(bo,l,g,Tg),a1(g,l),fe(r,0),T0(r,g,0,!0);break}r:{switch(o=r,b){case n0:case M5:throw Error("Root did not complete. This is a bug in React.");case v1:if((g&4194048)!==g)break;case $2:vv(g),PH(bo,l,g,Tg),a1(g,l),h=g,(h&127)!==0?O2=l:(h&4194048)!==0&&(q2=l),T0(o,g,po,!l1);break r;case ue:To=null;break;case U2:case JW:break;default:throw Error("Unknown root exit status.")}if(Z.actQueue!==null)O6(o,h,g,To,t5,I2,po,h1,Pe,b,null,null,bo,l);else{if((g&62914560)===g&&(i=F2+KW-ho(),10<i)){if(T0(o,g,po,!l1),m1(o,0,!0)!==0)break r;fv=g,o.timeoutHandle=yW(Hq.bind(null,o,h,To,t5,I2,g,po,h1,Pe,l1,b,"Throttled",bo,l),i);break r}Hq(o,h,To,t5,I2,g,po,h1,Pe,l1,b,null,bo,l)}}}break}while(1);tl(r)}function Hq(r,g,o,l,h,b,i,P,A,W,$,m,Q,F){r.timeoutHandle=Me;var hr=g.subtreeFlags,Or=null;if(hr&8192||(hr&16785408)===16785408){if(Or={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_l},eq(g,b,Or),hr=(b&62914560)===b?F2-ho():(b&4194048)===b?zW-ho():0,hr=RY(Or,hr),hr!==null){fv=b,r.cancelPendingCommit=hr(O6.bind(null,r,g,b,o,l,h,i,P,A,$,Or,Or.waitingForViewTransition?"Waiting for the previous Animation":0<Or.count?0<Or.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Or.imgCount===1?"Suspended on an Image":0<Or.imgCount?"Suspended on Images":null,Q,F)),T0(r,b,i,!W);return}}O6(r,g,b,o,l,h,i,P,A,$,Or,m,Q,F)}function IX(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var h=o[l],b=h.getSnapshot;h=h.value;try{if(!Bo(b(),h))return!1}catch(i){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function T0(r,g,o,l){g&=~jn,g&=~h1,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var h=g;0<h;){var b=31-Io(h),i=1<<b;l[b]=-1,h&=~i}o!==0&&I1(r,o,g)}function je(){return(og&(lo|Av))===uo?($b(0,!1),!1):!0}function P6(){if(Er!==null){if(ng===ao)var r=Er.return;else r=Er,gu(),Y4(r),th=null,i5=0,r=Er;for(;r!==null;)CO(r.alternate,r),r=r.return;Er=null}}function a1(r,g){(r&127)!==0&&(d0=g),(r&4194048)!==0&&(Il=g),(r&62914560)!==0&&(UM=g),(r&2080374784)!==0&&($M=g)}function fe(r,g){Qg&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jr,"primary-light"));var o=bo;if(bo=fg(),Vr!==0&&0<o){if(vv(Vr),Ig===U2||Ig===v1)PH(o,bo,g,Tg);else{var l=bo,h=Tg;if(Qg&&!(l<=o)){var b=(g&738197653)===g?"tertiary-dark":"primary-dark",i=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";h?h.run(console.timeStamp.bind(console,i,o,l,fr,jr,b)):console.timeStamp(i,o,l,fr,jr,b)}}a1(Vr,bo)}if(o=Tg,Tg=null,(g&127)!==0){Tg=db,h=0<=Ll&&Ll<d0?d0:Ll,l=0<=ge&&ge<d0?d0:ge,b=0<=l?l:0<=h?h:bo,0<=O2?(vv(2),HH(O2,b,g,o)):(A2&127)!==0&&(vv(2),ub(d0,b,h0)),o=h;var P=l,A=sb,W=0<Wh,$=s0===pb,m=s0===H2;if(h=bo,l=db,b=zn,i=Kn,Qg){if(fr="Blocking",0<o?o>h&&(o=h):o=h,0<P?P>o&&(P=o):P=o,A!==null&&o>P){var Q=W?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,W?"Consecutive":"Event: "+A,P,o,fr,jr,Q)):console.timeStamp(W?"Consecutive":"Event: "+A,P,o,fr,jr,Q)}h>o&&(P=$?"error":(g&738197653)===g?"tertiary-light":"primary-light",$=m?"Promise Resolved":$?"Cascading Update":5<h-o?"Update Blocked":"Update",m=[],i!=null&&m.push(["Component name",i]),b!=null&&m.push(["Method name",b]),o={start:o,end:h,detail:{devtools:{properties:m,track:fr,trackGroup:jr,color:P}}},l?l.run(performance.measure.bind(performance,$,o)):performance.measure($,o))}Ll=-1.1,s0=0,Kn=zn=null,O2=-1.1,Wh=ge,ge=-1.1,d0=fg()}if((g&4194048)!==0&&(Tg=r5,h=0<=e0&&e0<Il?Il:e0,o=0<=Iv&&Iv<Il?Il:Iv,l=0<=r1&&r1<Il?Il:r1,b=0<=l?l:0<=o?o:bo,0<=q2?(vv(256),HH(q2,b,g,Tg)):(A2&4194048)!==0&&(vv(256),ub(Il,b,h0)),m=l,P=oe,A=0<g1,W=Un===H2,b=bo,l=r5,i=zM,$=KM,Qg&&(fr="Transition",0<o?o>b&&(o=b):o=b,0<h?h>o&&(h=o):h=o,0<m?m>h&&(m=h):m=h,h>m&&P!==null&&(Q=A?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,A?"Consecutive":"Event: "+P,m,h,fr,jr,Q)):console.timeStamp(A?"Consecutive":"Event: "+P,m,h,fr,jr,Q)),o>h&&(l?l.run(console.timeStamp.bind(console,"Action",h,o,fr,jr,"primary-dark")):console.timeStamp("Action",h,o,fr,jr,"primary-dark")),b>o&&(h=W?"Promise Resolved":5<b-o?"Update Blocked":"Update",m=[],$!=null&&m.push(["Component name",$]),i!=null&&m.push(["Method name",i]),o={start:o,end:b,detail:{devtools:{properties:m,track:fr,trackGroup:jr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,h,o)):performance.measure(h,o))),Iv=e0=-1.1,Un=0,q2=-1.1,g1=r1,r1=-1.1,Il=fg()),(g&62914560)!==0&&(A2&62914560)!==0&&(vv(4194304),ub(UM,bo,h0)),(g&2080374784)!==0&&(A2&2080374784)!==0&&(vv(268435456),ub($M,bo,h0)),o=r.timeoutHandle,o!==Me&&(r.timeoutHandle=Me,nQ(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fv=0,P6(),Wg=r,Er=o=El(r.current,null),Vr=g,ng=ao,Mv=null,l1=!1,mh=L1(r,g),cn=!1,Ig=n0,Pe=po=jn=h1=e1=0,To=G5=null,I2=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)h=31-Io(l),b=1<<h,g|=r[h],l&=~b;return Nl=g,aw(),r=GM(),1000<r-RM&&(Z.recentlyCreatedOwnerStacks=0,RM=r),yv.discardPendingWarnings(),o}function Oq(r,g){$r=null,Z.H=O5,Z.getCurrentStack=null,Ql=!1,nv=null,g===Gh||g===G2?(g=BH(),ng=W5):g===In?(g=BH(),ng=QW):ng=g===Dn?yn:g!==null&&typeof g==="object"&&typeof g.then==="function"?R5:m2,Mv=g;var o=Er;o===null?(Ig=M5,zu(r,lv(g,r.current))):o.mode&kr&&i4(o)}function qq(){var r=Ov.current;return r===null?!0:(Vr&4194048)===Vr?Fv===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Fv:!1}function Aq(){var r=Z.H;return Z.H=O5,r===null?O5:r}function Mq(){var r=Z.A;return Z.A=pJ,r}function Nu(r){Tg===null&&(Tg=r._debugTask==null?null:r._debugTask)}function Bu(){Ig=v1,l1||(Vr&4194048)!==Vr&&Ov.current!==null||(mh=!0),(e1&134217727)===0&&(h1&134217727)===0||Wg===null||T0(Wg,Vr,po,!1)}function H6(r,g,o){var l=og;og|=lo;var h=Aq(),b=Mq();if(Wg!==r||Vr!==g){if(Kl){var i=r.memoizedUpdaters;0<i.size&&(Ub(r,Vr),i.clear()),U0(r,g)}t5=null,fe(r,g)}g=!1,i=Ig;r:do try{if(ng!==ao&&Er!==null){var P=Er,A=Mv;switch(ng){case yn:P6(),i=$2;break r;case W5:case ie:case ne:case R5:Ov.current===null&&(g=!0);var W=ng;if(ng=ao,Mv=null,ae(r,P,A,W),o&&mh){i=n0;break r}break;default:W=ng,ng=ao,Mv=null,ae(r,P,A,W)}}Wq(),i=Ig;break}catch($){Oq(r,$)}while(1);return g&&r.shellSuspendCounter++,gu(),og=l,Z.H=h,Z.A=b,Er===null&&(Wg=null,Vr=0,aw()),i}function Wq(){for(;Er!==null;)Rq(Er)}function FX(r,g){var o=og;og|=lo;var l=Aq(),h=Mq();if(Wg!==r||Vr!==g){if(Kl){var b=r.memoizedUpdaters;0<b.size&&(Ub(r,Vr),b.clear()),U0(r,g)}t5=null,N2=ho()+UW,fe(r,g)}else mh=L1(r,g);r:do try{if(ng!==ao&&Er!==null)g:switch(g=Er,b=Mv,ng){case m2:ng=ao,Mv=null,ae(r,g,b,m2);break;case ie:case ne:if(FH(b)){ng=ao,Mv=null,Gq(g);break}g=function(){ng!==ie&&ng!==ne||Wg!==r||(ng=L2),tl(r)},b.then(g,g);break r;case W5:ng=L2;break r;case QW:ng=En;break r;case L2:FH(b)?(ng=ao,Mv=null,Gq(g)):(ng=ao,Mv=null,ae(r,g,b,L2));break;case En:var i=null;switch(Er.tag){case 26:i=Er.memoizedState;case 5:case 27:var P=Er;if(i?PA(i):P.stateNode.complete){ng=ao,Mv=null;var A=P.sibling;if(A!==null)Er=A;else{var W=P.return;W!==null?(Er=W,Zu(W)):Er=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}ng=ao,Mv=null,ae(r,g,b,En);break;case R5:ng=ao,Mv=null,ae(r,g,b,R5);break;case yn:P6(),Ig=$2;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}Z.actQueue!==null?Wq():NX();break}catch($){Oq(r,$)}while(1);if(gu(),Z.H=l,Z.A=h,og=o,Er!==null)return n0;return Wg=null,Vr=0,aw(),Ig}function NX(){for(;Er!==null&&!IY();)Rq(Er)}function Rq(r){var g=r.alternate;(r.mode&kr)!==Ur?(u4(r),g=wr(r,v6,g,r,Nl),i4(r)):g=wr(r,v6,g,r,Nl),r.memoizedProps=r.pendingProps,g===null?Zu(r):Er=g}function Gq(r){var g=wr(r,BX,r);r.memoizedProps=r.pendingProps,g===null?Zu(r):Er=g}function BX(r){var g=r.alternate,o=(r.mode&kr)!==Ur;switch(o&&u4(r),r.tag){case 15:case 0:g=LO(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=LO(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Y4(r);default:CO(g,r),r=Er=RH(r,Nl),g=v6(g,r,Nl)}return o&&i4(r),g}function ae(r,g,o,l){gu(),Y4(g),th=null,i5=0;var h=g.return;try{if(RX(r,h,g,o,Vr)){Ig=M5,zu(r,lv(o,r.current)),Er=null;return}}catch(b){if(h!==null)throw Er=h,b;Ig=M5,zu(r,lv(o,r.current)),Er=null;return}if(g.flags&32768){if(pr||l===m2)r=!0;else if(mh||(Vr&536870912)!==0)r=!1;else if(l1=r=!0,l===ie||l===ne||l===W5||l===R5)l=Ov.current,l!==null&&l.tag===13&&(l.flags|=16384);tq(g,r)}else Zu(g)}function Zu(r){var g=r;do{if((g.flags&32768)!==0){tq(g,l1);return}var o=g.alternate;if(r=g.return,u4(g),o=wr(g,XX,o,g,Nl),(g.mode&kr)!==Ur&&UH(g),o!==null){Er=o;return}if(g=g.sibling,g!==null){Er=g;return}Er=g=r}while(g!==null);Ig===n0&&(Ig=JW)}function tq(r,g){do{var o=YX(r.alternate,r);if(o!==null){o.flags&=32767,Er=o;return}if((r.mode&kr)!==Ur){UH(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){Er=r;return}Er=r=o}while(r!==null);Ig=$2,Er=null}function O6(r,g,o,l,h,b,i,P,A,W,$,m,Q,F){r.cancelPendingCommit=null;do Kb();while(ro!==w1);if(yv.flushLegacyContextWarning(),yv.flushPendingUnsafeLifecycleWarnings(),(og&(lo|Av))!==uo)throw Error("Should not already be working.");if(vv(o),W===ue?fi(Q,F,o,Tg):l!==null?hX(Q,F,o,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Tg):eX(Q,F,o,Tg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=g.lanes|g.childLanes,b|=tn,Tw(r,o,b,i,P,A),r===Wg&&(Er=Wg=null,Vr=0),Lh=g,u1=r,fv=o,pn=b,sn=h,NW=l,dn=F,BW=m,av=B2,ZW=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,SX(oh,function(){return K5=window.event,av===B2&&(av=an),zq(),null})):(r.callbackNode=null,r.callbackPriority=0),l0=null,p0=fg(),m!==null&&bX(F,p0,m,Tg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null,h=wg.p,wg.p=Pv,i=og,og|=Av;try{$X(r,g,o)}finally{og=i,wg.p=h,Z.T=l}}ro=mW,Xq(),Yq(),Jq()}}function Xq(){if(ro===mW){ro=w1;var r=u1,g=Lh,o=fv,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=Z.T,Z.T=null;var h=wg.p;wg.p=Pv;var b=og;og|=Av;try{Uh=o,$h=r,eu(),sO(g,r),$h=Uh=null,o=i8;var i=uH(r.containerInfo),P=o.focusedElem,A=o.selectionRange;if(i!==P&&P&&P.ownerDocument&&wH(P.ownerDocument.documentElement,P)){if(A!==null&&yi(P)){var{start:W,end:$}=A;if($===void 0&&($=W),"selectionStart"in P)P.selectionStart=W,P.selectionEnd=Math.min($,P.value.length);else{var m=P.ownerDocument||document,Q=m&&m.defaultView||window;if(Q.getSelection){var F=Q.getSelection(),hr=P.textContent.length,Or=Math.min(A.start,hr),Xg=A.end===void 0?Or:Math.min(A.end,hr);!F.extend&&Or>Xg&&(i=Xg,Xg=Or,Or=i);var sr=bH(P,Or),J=bH(P,Xg);if(sr&&J&&(F.rangeCount!==1||F.anchorNode!==sr.node||F.anchorOffset!==sr.offset||F.focusNode!==J.node||F.focusOffset!==J.offset)){var z=m.createRange();z.setStart(sr.node,sr.offset),F.removeAllRanges(),Or>Xg?(F.addRange(z),F.extend(J.node,J.offset)):(z.setEnd(J.node,J.offset),F.addRange(z))}}}}m=[];for(F=P;F=F.parentNode;)F.nodeType===1&&m.push({element:F,left:F.scrollLeft,top:F.scrollTop});typeof P.focus==="function"&&P.focus();for(P=0;P<m.length;P++){var U=m[P];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}p2=!!u8,i8=u8=null}finally{og=b,wg.p=h,Z.T=l}}r.current=g,ro=LW}}function Yq(){if(ro===LW){ro=w1;var r=ZW;if(r!==null){p0=fg();var g=v0,o=p0;!Qg||o<=g||(h0?h0.run(console.timeStamp.bind(console,r,g,o,fr,jr,"secondary-light")):console.timeStamp(r,g,o,fr,jr,"secondary-light"))}r=u1,g=Lh,o=fv;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=Z.T,Z.T=null;var h=wg.p;wg.p=Pv;var b=og;og|=Av;try{Uh=o,$h=r,eu(),jO(r,g.alternate,g),$h=Uh=null}finally{og=b,wg.p=h,Z.T=l}}r=dn,g=BW,v0=fg(),r=g===null?r:p0,g=v0,o=av===fn,l=Tg,l0!==null?OH(r,g,l0,!1,l):!Qg||g<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")),ro=IW}}function Jq(){if(ro===FW||ro===IW){if(ro===FW){var r=v0;v0=fg();var g=v0,o=av===fn;!Qg||g<=r||(h0?h0.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?" error":"secondary-light")),av!==fn&&(av=$W)}ro=w1,FY(),r=u1;var l=Lh;g=fv,o=NW;var h=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;h?ro=Z2:(ro=w1,Lh=u1=null,Qq(r,r.pendingLanes),He=0,Y5=null);var b=r.pendingLanes;if(b===0&&(b1=null),h||mq(r),b=R(g),l=l.stateNode,zo&&typeof zo.onCommitFiberRoot==="function")try{var i=(l.current.flags&128)===128;switch(b){case Pv:var P=d6;break;case _v:P=s6;break;case Ul:P=oh;break;case r2:P=rn;break;default:P=oh}zo.onCommitFiberRoot(vh,l,P,i)}catch(m){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",m))}if(Kl&&r.memoizedUpdaters.clear(),LX(),o!==null){i=Z.T,P=wg.p,wg.p=Pv,Z.T=null;try{var A=r.onRecoverableError;for(l=0;l<o.length;l++){var W=o[l],$=ZX(W.stack);wr(W.source,A,W.value,$)}}finally{Z.T=i,wg.p=P}}(fv&3)!==0&&Kb(),tl(r),b=r.pendingLanes,(g&261930)!==0&&(b&42)!==0?(W2=!0,r===r8?X5++:(X5=0,r8=r)):X5=0,h||a1(g,v0),$b(0,!1)}}function ZX(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function Qq(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,nb(g)))}function Kb(){return Xq(),Yq(),Jq(),zq()}function zq(){if(ro!==Z2)return!1;var r=u1,g=pn;pn=0;var o=R(fv),l=Ul===0||Ul>o?Ul:o;o=Z.T;var h=wg.p;try{wg.p=l,Z.T=null;var b=sn;sn=null,l=u1;var i=fv;if(ro=w1,Lh=u1=null,fv=0,(og&(lo|Av))!==uo)throw Error("Cannot flush passive effects while already rendering.");vv(i),g8=!0,x2=!1;var P=0;if(l0=null,P=ho(),av===$W)ub(v0,P,h0);else{var A=v0,W=P,$=av===an;!Qg||W<=A||(Tg?Tg.run(console.timeStamp.bind(console,$?"Waiting for Paint":"Waiting",A,W,fr,jr,"secondary-light")):console.timeStamp($?"Waiting for Paint":"Waiting",A,W,fr,jr,"secondary-light"))}A=og,og|=Av;var m=l.current;eu(),bq(m);var Q=l.current;m=dn,eu(),vq(l,Q,i,b,m),mq(l),og=A;var F=ho();if(Q=P,m=Tg,l0!==null?OH(Q,F,l0,!0,m):!Qg||F<=Q||(m?m.run(console.timeStamp.bind(console,"Remaining Effects",Q,F,fr,jr,"secondary-dark")):console.timeStamp("Remaining Effects",Q,F,fr,jr,"secondary-dark")),a1(i,F),$b(0,!1),x2?l===Y5?He++:(He=0,Y5=l):He=0,x2=g8=!1,zo&&typeof zo.onPostCommitFiberRoot==="function")try{zo.onPostCommitFiberRoot(vh,l)}catch(Or){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",Or))}var hr=l.current.stateNode;return hr.effectDuration=0,hr.passiveEffectDuration=0,!0}finally{wg.p=h,Z.T=o,Qq(r,g)}}function Kq(r,g,o){g=lv(o,g),$H(g),g=y4(r.stateNode,g,2),r=B0(r,g,2),r!==null&&(K0(r,2),tl(r))}function bg(r,g,o){if(Ih=!1,r.tag===3)Kq(r,r,o);else{for(;g!==null;){if(g.tag===3){Kq(g,r,o);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(b1===null||!b1.has(l))){r=lv(o,r),$H(r),o=c4(2),l=B0(g,o,2),l!==null&&(j4(o,l,g,r),K0(l,2),tl(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function q6(r,g,o){var l=r.pingCache;if(l===null){l=r.pingCache=new sJ;var h=new Set;l.set(g,h)}else h=l.get(g),h===void 0&&(h=new Set,l.set(g,h));h.has(o)||(cn=!0,h.add(o),l=xX.bind(null,r,g,o),Kl&&Ub(r,o),g.then(l,l))}function xX(r,g,o){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Ll&&(d0=Ll=fg(),db=P2("Promise Resolved"),s0=H2):(o&4194048)!==0&&0>Iv&&(Il=Iv=fg(),r5=P2("Promise Resolved"),Un=H2),iq()&&Z.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Wg===r&&(Vr&o)===o&&(Ig===v1||Ig===U2&&(Vr&62914560)===Vr&&ho()-F2<KW?(og&lo)===uo&&fe(r,0):jn|=o,Pe===Vr&&(Pe=0)),tl(r)}function Uq(r,g){g===0&&(g=Ne()),r=Qo(r,g),r!==null&&(K0(r,g),tl(r))}function CX(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),Uq(r,o)}function TX(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:h}=r;h!==null&&(o=h.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),Uq(r,o)}function A6(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,h=g,b=h.type===ju;b=o||b,h.tag!==22?h.flags&67108864?b&&wr(h,$q,l,h):A6(l,h,b):h.memoizedState===null&&(b&&h.flags&8192?wr(h,$q,l,h):h.subtreeFlags&67108864&&wr(h,A6,l,h,b)),g=g.sibling}}function $q(r,g){Gg(!0);try{gq(g),wq(g),oq(r,g.alternate,g,!1),lq(r,g,0,null,!1,0)}finally{Gg(!1)}}function mq(r){var g=!0;r.current.mode&(Ko|Ev)||(g=!1),A6(r,r.current,g)}function Lq(r){if((og&lo)===uo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=x(r)||"ReactComponent",C2!==null){if(C2.has(g))return;C2.add(g)}else C2=new Set([g]);wr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Ub(r,g){Kl&&r.memoizedUpdaters.forEach(function(o){rb(r,o,g)})}function SX(r,g){var o=Z.actQueue;return o!==null?(o.push(g),oQ):p6(r,g)}function kX(r){iq()&&Z.actQueue===null&&wr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,x(r))})}function tl(r){r!==Fh&&r.next===null&&(Fh===null?T2=Fh=r:Fh=Fh.next=r),S2=!0,Z.actQueue!==null?v8||(v8=!0,Bq()):o8||(o8=!0,Bq())}function $b(r,g){if(!l8&&S2){l8=!0;do{var o=!1;for(var l=T2;l!==null;){if(!g)if(r!==0){var h=l.pendingLanes;if(h===0)var b=0;else{var{suspendedLanes:i,pingedLanes:P}=l;b=(1<<31-Io(42|r)+1)-1,b&=h&~(i&~P),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(o=!0,Nq(l,b))}else b=Vr,b=m1(l,l===Wg?b:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Me),(b&3)===0||L1(l,b)||(o=!0,Nq(l,b));l=l.next}}while(o);l8=!1}}function DX(){K5=window.event,M6()}function M6(){S2=v8=o8=!1;var r=0;i1!==0&&fX()&&(r=i1);for(var g=ho(),o=null,l=T2;l!==null;){var h=l.next,b=Iq(l,g);if(b===0)l.next=null,o===null?T2=h:o.next=h,h===null&&(Fh=o);else if(o=l,r!==0||(b&3)!==0)S2=!0;l=h}ro!==w1&&ro!==Z2||$b(r,!1),i1!==0&&(i1=0)}function Iq(r,g){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:h}=r,b=r.pendingLanes&-62914561;0<b;){var i=31-Io(b),P=1<<i,A=h[i];if(A===-1){if((P&o)===0||(P&l)!==0)h[i]=Bi(P,g)}else A<=g&&(r.expiredLanes|=P);b&=~P}if(g=Wg,o=Vr,o=m1(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Me),l=r.callbackNode,o===0||r===g&&(ng===ie||ng===ne)||r.cancelPendingCommit!==null)return l!==null&&W6(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||L1(r,o)){if(g=o&-o,g!==r.callbackPriority||Z.actQueue!==null&&l!==e8)W6(l);else return g;switch(R(o)){case Pv:case _v:o=s6;break;case Ul:o=oh;break;case r2:o=rn;break;default:o=oh}return l=Fq.bind(null,r),Z.actQueue!==null?(Z.actQueue.push(l),o=e8):o=p6(o,l),r.callbackPriority=g,r.callbackNode=o,g}return l!==null&&W6(l),r.callbackPriority=2,r.callbackNode=null,2}function Fq(r,g){if(W2=M2=!1,K5=window.event,ro!==w1&&ro!==Z2)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(av===B2&&(av=an),Kb()&&r.callbackNode!==o)return null;var l=Vr;if(l=m1(r,r===Wg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Me),l===0)return null;return Pq(r,l,g),Iq(r,ho()),r.callbackNode!=null&&r.callbackNode===o?Fq.bind(null,r):null}function Nq(r,g){if(Kb())return null;M2=W2,W2=!1,Pq(r,g,!0)}function W6(r){r!==e8&&r!==null&&LY(r)}function Bq(){Z.actQueue!==null&&Z.actQueue.push(function(){return M6(),null}),PQ(function(){(og&(lo|Av))!==uo?p6(d6,DX):M6()})}function R6(){if(i1===0){var r=ve;r===0&&(r=pu,pu<<=1,(pu&261888)===0&&(pu=256)),i1=r}return i1}function Zq(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Hg(r,"action"),hb(""+r)}function xq(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function VX(r,g,o,l,h){if(g==="submit"&&o&&o.stateNode===h){var b=Zq((h[Fo]||null).action),i=l.submitter;i&&(g=(g=i[Fo]||null)?Zq(g.formAction):i.getAttribute("formAction"),g!==null&&(b=g,i=null));var P=new e2("action","action",null,l,h);r.push({event:P,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(i1!==0){var A=i?xq(h,i):new FormData(h),W={pending:!0,data:A,method:h.method,action:b};Object.freeze(W),T4(o,W,null,A)}}else typeof b==="function"&&(P.preventDefault(),A=i?xq(h,i):new FormData(h),W={pending:!0,data:A,method:h.method,action:b},Object.freeze(W),T4(o,W,b,A))},currentTarget:h}]})}}function xu(r,g,o){r.currentTarget=o;try{g(r)}catch(l){Mn(l)}r.currentTarget=null}function Cq(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var h=void 0,b=l.event;if(l=l.listeners,g)for(var i=l.length-1;0<=i;i--){var P=l[i],A=P.instance,W=P.currentTarget;if(P=P.listener,A!==h&&b.isPropagationStopped())break r;A!==null?wr(A,xu,b,P,W):xu(b,P,W),h=A}else for(i=0;i<l.length;i++){if(P=l[i],A=P.instance,W=P.currentTarget,P=P.listener,A!==h&&b.isPropagationStopped())break r;A!==null?wr(A,xu,b,P,W):xu(b,P,W),h=A}}}}function dr(r,g){h8.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[gn];o===void 0&&(o=g[gn]=new Set);var l=r+"__bubble";o.has(l)||(Tq(g,r,2,!1),o.add(l))}function G6(r,g,o){h8.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),Tq(o,r,l,g)}function t6(r){if(!r[k2]){r[k2]=!0,BA.forEach(function(o){o!=="selectionchange"&&(h8.has(o)||G6(o,!1,r),G6(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[k2]||(g[k2]=!0,G6("selectionchange",!1,g))}}function Tq(r,g,o,l){switch(WA(g)){case Pv:var h=YY;break;case _v:h=JY;break;default:h=x6}o=h.bind(null,g,o,r),h=void 0,!hn||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(h=!0),l?h!==void 0?r.addEventListener(g,o,{capture:!0,passive:h}):r.addEventListener(g,o,!0):h!==void 0?r.addEventListener(g,o,{passive:h}):r.addEventListener(g,o,!1)}function X6(r,g,o,l,h){var b=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var P=l.stateNode.containerInfo;if(P===h)break;if(i===4)for(i=l.return;i!==null;){var A=i.tag;if((A===3||A===4)&&i.stateNode.containerInfo===h)return;i=i.return}for(;P!==null;){if(i=Rr(P),i===null)return;if(A=i.tag,A===5||A===6||A===26||A===27){l=b=i;continue r}P=P.parentNode}}l=l.return}aP(function(){var W=b,$=_i(o),m=[];r:{var Q=WM.get(r);if(Q!==void 0){var F=e2,hr=r;switch(r){case"keypress":if(Ew(o)===0)break r;case"keydown":case"keyup":F=WJ;break;case"focusin":hr="focus",F=nn;break;case"focusout":hr="blur",F=nn;break;case"beforeblur":case"afterblur":F=nn;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=lM;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=hJ;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=tJ;break;case OM:case qM:case AM:F=uJ;break;case MM:F=YJ;break;case"scroll":case"scrollend":F=lJ;break;case"wheel":F=QJ;break;case"copy":case"cut":case"paste":F=nJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=hM;break;case"toggle":case"beforetoggle":F=KJ}var Or=(g&4)!==0,Xg=!Or&&(r==="scroll"||r==="scrollend"),sr=Or?Q!==null?Q+"Capture":null:Q;Or=[];for(var J=W,z;J!==null;){var U=J;if(z=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||z===null||sr===null||(U=bb(J,sr),U!=null&&Or.push(mb(J,U,z))),Xg)break;J=J.return}0<Or.length&&(Q=new F(Q,hr,null,o,$),m.push({event:Q,listeners:Or}))}}if((g&7)===0){r:{if(Q=r==="mouseover"||r==="pointerover",F=r==="mouseout"||r==="pointerout",Q&&o!==kb&&(hr=o.relatedTarget||o.fromElement)&&(Rr(hr)||hr[E0]))break r;if(F||Q){if(Q=$.window===$?$:(Q=$.ownerDocument)?Q.defaultView||Q.parentWindow:window,F){if(hr=o.relatedTarget||o.toElement,F=W,hr=hr?Rr(hr):null,hr!==null&&(Xg=rr(hr),Or=hr.tag,hr!==Xg||Or!==5&&Or!==27&&Or!==6))hr=null}else F=null,hr=W;if(F!==hr){if(Or=lM,U="onMouseLeave",sr="onMouseEnter",J="mouse",r==="pointerout"||r==="pointerover")Or=hM,U="onPointerLeave",sr="onPointerEnter",J="pointer";if(Xg=F==null?Q:Nr(F),z=hr==null?Q:Nr(hr),Q=new Or(U,J+"leave",F,o,$),Q.target=Xg,Q.relatedTarget=z,U=null,Rr($)===W&&(Or=new Or(sr,J+"enter",hr,o,$),Or.target=z,Or.relatedTarget=Xg,U=Or),Xg=U,F&&hr)g:{Or=_X,sr=F,J=hr,z=0;for(U=sr;U;U=Or(U))z++;U=0;for(var D=J;D;D=Or(D))U++;for(;0<z-U;)sr=Or(sr),z--;for(;0<U-z;)J=Or(J),U--;for(;z--;){if(sr===J||J!==null&&sr===J.alternate){Or=sr;break g}sr=Or(sr),J=Or(J)}Or=null}else Or=null;F!==null&&Sq(m,Q,F,Or,!1),hr!==null&&Xg!==null&&Sq(m,Xg,hr,Or,!0)}}}r:{if(Q=W?Nr(W):window,F=Q.nodeName&&Q.nodeName.toLowerCase(),F==="select"||F==="input"&&Q.type==="file")var ir=vH;else if(gH(Q))if(PM)ir=oX;else{ir=rX;var mr=st}else F=Q.nodeName,!F||F.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?W&&eb(W.elementType)&&(ir=vH):ir=gX;if(ir&&(ir=ir(r,W))){oH(m,ir,o,$);break r}mr&&mr(r,Q,W),r==="focusout"&&W&&Q.type==="number"&&W.memoizedProps.value!=null&&Ci(Q,"number",Q.value)}switch(mr=W?Nr(W):window,r){case"focusin":if(gH(mr)||mr.contentEditable==="true")ih=mr,Hn=W,jb=null;break;case"focusout":jb=Hn=ih=null;break;case"mousedown":On=!0;break;case"contextmenu":case"mouseup":case"dragend":On=!1,iH(m,o,$);break;case"selectionchange":if(LJ)break;case"keydown":case"keyup":iH(m,o,$)}var Jr;if(Pn)r:{switch(r){case"compositionstart":var Gr="onCompositionStart";break r;case"compositionend":Gr="onCompositionEnd";break r;case"compositionupdate":Gr="onCompositionUpdate";break r}Gr=void 0}else uh?sP(r,o)&&(Gr="onCompositionEnd"):r==="keydown"&&o.keyCode===bM&&(Gr="onCompositionStart");if(Gr&&(wM&&o.locale!=="ko"&&(uh||Gr!=="onCompositionStart"?Gr==="onCompositionEnd"&&uh&&(Jr=pP()):(y0=$,bn=("value"in y0)?y0.value:y0.textContent,uh=!0)),mr=Cu(W,Gr),0<mr.length&&(Gr=new eM(Gr,r,null,o,$),m.push({event:Gr,listeners:mr}),Jr?Gr.data=Jr:(Jr=rH(o),Jr!==null&&(Gr.data=Jr)))),Jr=$J?ft(r,o):at(r,o))Gr=Cu(W,"onBeforeInput"),0<Gr.length&&(mr=new HJ("onBeforeInput","beforeinput",null,o,$),m.push({event:mr,listeners:Gr}),mr.data=Jr);VX(m,r,W,o,$)}Cq(m,g)})}function mb(r,g,o){return{instance:r,listener:g,currentTarget:o}}function Cu(r,g){for(var o=g+"Capture",l=[];r!==null;){var h=r,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=bb(r,o),h!=null&&l.unshift(mb(r,h,b)),h=bb(r,g),h!=null&&l.push(mb(r,h,b))),r.tag===3)return l;r=r.return}return[]}function _X(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function Sq(r,g,o,l,h){for(var b=g._reactName,i=[];o!==null&&o!==l;){var P=o,A=P.alternate,W=P.stateNode;if(P=P.tag,A!==null&&A===l)break;P!==5&&P!==26&&P!==27||W===null||(A=W,h?(W=bb(o,b),W!=null&&i.unshift(mb(o,W,A))):h||(W=bb(o,b),W!=null&&i.push(mb(o,W,A)))),o=o.return}i.length!==0&&r.push({event:g,listeners:i})}function Y6(r,g){Et(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||oM||(oM=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:p1,possibleRegistrationNames:on};eb(r)||typeof g.is==="string"||ct(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function eo(r,g,o,l){g!==o&&(o=S0(o),S0(g)!==o&&(l[r]=g))}function EX(r,g,o){g.forEach(function(l){o[Vq(l)]=l==="style"?Q6(r):r.getAttribute(l)})}function Xl(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function kq(r,g){return r=r.namespaceURI===o2||r.namespaceURI===eh?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function S0(r){return rv(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Yo(r)),cg(r)),(typeof r==="string"?r:""+r).replace(vQ,`
`).replace(lQ,"")}function Dq(r,g){return g=S0(g),S0(r)===g?!0:!1}function Ag(r,g,o,l,h,b){switch(o){case"children":if(typeof l==="string")_w(l,g,!1),g==="body"||g==="textarea"&&l===""||lb(r,l);else if(typeof l==="number"||typeof l==="bigint")_w(""+l,g,!1),g!=="body"&&lb(r,""+l);break;case"className":kw(r,"class",l);break;case"tabIndex":kw(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":kw(r,o,l);break;case"style":cP(r,l,b);break;case"data":if(g!=="object"){kw(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Hg(l,o),l=hb(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(h.encType==null&&h.method==null||_2||(_2=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),h.target==null||V2||(V2=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||h.type==="submit"||h.type==="image"||D2?g!=="button"||h.type==null||h.type==="submit"||D2?typeof l==="function"&&(h.name==null||kW||(kW=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),h.formEncType==null&&h.formMethod==null||_2||(_2=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),h.formTarget==null||V2||(V2=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(D2=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(D2=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(o==="formAction"?(g!=="input"&&Ag(r,g,"name",h.name,h,null),Ag(r,g,"formEncType",h.formEncType,h,null),Ag(r,g,"formMethod",h.formMethod,h,null),Ag(r,g,"formTarget",h.formTarget,h,null)):(Ag(r,g,"encType",h.encType,h,null),Ag(r,g,"method",h.method,h,null),Ag(r,g,"target",h.target,h,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Hg(l,o),l=hb(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Xl(o,l),r.onclick=_l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Xl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Xl(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Hg(l,o),o=hb(""+l),r.setAttributeNS(Oe,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Hg(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||E2[o]||(E2[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Hg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Hg(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(Hg(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),Sw(r,"popover",l);break;case"xlinkActuate":Vl(r,Oe,"xlink:actuate",l);break;case"xlinkArcrole":Vl(r,Oe,"xlink:arcrole",l);break;case"xlinkRole":Vl(r,Oe,"xlink:role",l);break;case"xlinkShow":Vl(r,Oe,"xlink:show",l);break;case"xlinkTitle":Vl(r,Oe,"xlink:title",l);break;case"xlinkType":Vl(r,Oe,"xlink:type",l);break;case"xmlBase":Vl(r,b8,"xml:base",l);break;case"xmlLang":Vl(r,b8,"xml:lang",l);break;case"xmlSpace":Vl(r,b8,"xml:space",l);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Sw(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":DW||l==null||typeof l!=="object"||(DW=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=jP(o),Sw(r,o,l)):p1.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&Xl(o,l)}}function J6(r,g,o,l,h,b){switch(o){case"style":cP(r,l,b);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(h.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?lb(r,l):(typeof l==="number"||typeof l==="bigint")&&lb(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Xl(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Xl(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Xl(o,l),r.onclick=_l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(p1.hasOwnProperty(o))l!=null&&typeof l!=="function"&&Xl(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),g=o.slice(2,h?o.length-7:void 0),b=r[Fo]||null,b=b!=null?b[o]:null,typeof b==="function"&&r.removeEventListener(g,b,h),typeof l==="function")){typeof b!=="function"&&b!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,l,h);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):Sw(r,o,l)}}}function qo(r,g,o){switch(Y6(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,h=!1,b;for(b in o)if(o.hasOwnProperty(b)){var i=o[b];if(i!=null)switch(b){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ag(r,g,b,i,o,null)}}h&&Ag(r,g,"srcSet",o.srcSet,o,null),l&&Ag(r,g,"src",o.src,o,null);return;case"input":$0("input",o),dr("invalid",r);var P=b=i=h=null,A=null,W=null;for(l in o)if(o.hasOwnProperty(l)){var $=o[l];if($!=null)switch(l){case"name":h=$;break;case"type":i=$;break;case"checked":A=$;break;case"defaultChecked":W=$;break;case"value":b=$;break;case"defaultValue":P=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ag(r,g,l,$,o,null)}}LP(r,o),IP(r,b,P,A,W,i,h,!1);return;case"select":$0("select",o),dr("invalid",r),l=i=b=null;for(h in o)if(o.hasOwnProperty(h)&&(P=o[h],P!=null))switch(h){case"value":b=P;break;case"defaultValue":i=P;break;case"multiple":l=P;default:Ag(r,g,h,P,o,null)}BP(r,o),g=b,o=i,r.multiple=!!l,g!=null?Ze(r,!!l,g,!1):o!=null&&Ze(r,!!l,o,!0);return;case"textarea":$0("textarea",o),dr("invalid",r),b=h=l=null;for(i in o)if(o.hasOwnProperty(i)&&(P=o[i],P!=null))switch(i){case"value":l=P;break;case"defaultValue":h=P;break;case"children":b=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ag(r,g,i,P,o,null)}ZP(r,o),CP(r,l,h,b);return;case"option":FP(r,o);for(A in o)if(o.hasOwnProperty(A)&&(l=o[A],l!=null))switch(A){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Ag(r,g,A,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<J5.length;l++)dr(J5[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in o)if(o.hasOwnProperty(W)&&(l=o[W],l!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ag(r,g,W,l,o,null)}return;default:if(eb(g)){for($ in o)o.hasOwnProperty($)&&(l=o[$],l!==void 0&&J6(r,g,$,l,o,void 0));return}}for(P in o)o.hasOwnProperty(P)&&(l=o[P],l!=null&&Ag(r,g,P,l,o,null))}function yX(r,g,o,l){switch(Y6(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,i=null,P=null,A=null,W=null,$=null;for(F in o){var m=o[F];if(o.hasOwnProperty(F)&&m!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":A=m;default:l.hasOwnProperty(F)||Ag(r,g,F,null,l,m)}}for(var Q in l){var F=l[Q];if(m=o[Q],l.hasOwnProperty(Q)&&(F!=null||m!=null))switch(Q){case"type":b=F;break;case"name":h=F;break;case"checked":W=F;break;case"defaultChecked":$=F;break;case"value":i=F;break;case"defaultValue":P=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:F!==m&&Ag(r,g,Q,F,l,m)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||SW||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),SW=!0),!g||l||TW||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),TW=!0),xi(r,i,P,A,W,$,b,h);return;case"select":F=i=P=Q=null;for(b in o)if(A=o[b],o.hasOwnProperty(b)&&A!=null)switch(b){case"value":break;case"multiple":F=A;default:l.hasOwnProperty(b)||Ag(r,g,b,null,l,A)}for(h in l)if(b=l[h],A=o[h],l.hasOwnProperty(h)&&(b!=null||A!=null))switch(h){case"value":Q=b;break;case"defaultValue":P=b;break;case"multiple":i=b;default:b!==A&&Ag(r,g,h,b,l,A)}l=P,g=i,o=F,Q!=null?Ze(r,!!g,Q,!1):!!o!==!!g&&(l!=null?Ze(r,!!g,l,!0):Ze(r,!!g,g?[]:"",!1));return;case"textarea":F=Q=null;for(P in o)if(h=o[P],o.hasOwnProperty(P)&&h!=null&&!l.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:Ag(r,g,P,null,l,h)}for(i in l)if(h=l[i],b=o[i],l.hasOwnProperty(i)&&(h!=null||b!=null))switch(i){case"value":Q=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:h!==b&&Ag(r,g,i,h,l,b)}xP(r,Q,F);return;case"option":for(var hr in o)if(Q=o[hr],o.hasOwnProperty(hr)&&Q!=null&&!l.hasOwnProperty(hr))switch(hr){case"selected":r.selected=!1;break;default:Ag(r,g,hr,null,l,Q)}for(A in l)if(Q=l[A],F=o[A],l.hasOwnProperty(A)&&Q!==F&&(Q!=null||F!=null))switch(A){case"selected":r.selected=Q&&typeof Q!=="function"&&typeof Q!=="symbol";break;default:Ag(r,g,A,Q,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Or in o)Q=o[Or],o.hasOwnProperty(Or)&&Q!=null&&!l.hasOwnProperty(Or)&&Ag(r,g,Or,null,l,Q);for(W in l)if(Q=l[W],F=o[W],l.hasOwnProperty(W)&&Q!==F&&(Q!=null||F!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ag(r,g,W,Q,l,F)}return;default:if(eb(g)){for(var Xg in o)Q=o[Xg],o.hasOwnProperty(Xg)&&Q!==void 0&&!l.hasOwnProperty(Xg)&&J6(r,g,Xg,void 0,l,Q);for($ in l)Q=l[$],F=o[$],!l.hasOwnProperty($)||Q===F||Q===void 0&&F===void 0||J6(r,g,$,Q,l,F);return}}for(var sr in o)Q=o[sr],o.hasOwnProperty(sr)&&Q!=null&&!l.hasOwnProperty(sr)&&Ag(r,g,sr,null,l,Q);for(m in l)Q=l[m],F=o[m],!l.hasOwnProperty(m)||Q===F||Q==null&&F==null||Ag(r,g,m,Q,l,F)}function Vq(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function Q6(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];g[l]=r.getPropertyValue(l)}return g}function _q(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,h=l="",b;for(b in g)if(g.hasOwnProperty(b)){var i=g[b];i!=null&&typeof i!=="boolean"&&i!==""&&(b.indexOf("--")===0?(sh(i,b),l+=h+b+":"+(""+i).trim()):typeof i!=="number"||i===0||rM.has(b)?(sh(i,b),l+=h+b.replace(fA,"-$1").toLowerCase().replace(aA,"-ms-")+":"+(""+i).trim()):l+=h+b.replace(fA,"-$1").toLowerCase().replace(aA,"-ms-")+":"+i+"px",h=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=S0(l),S0(g)!==l&&(o.style=Q6(r)))}}function Qv(r,g,o,l,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Hg(l,g),r===""+l)return}eo(g,r,l,b)}function Eq(r,g,o,l,h,b){if(h.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}eo(g,r,l,b)}function z6(r,g,o,l,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Hg(l,o),r===""+l)return}eo(g,r,l,b)}function yq(r,g,o,l,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Hg(l,g),r===""+l))return}eo(g,r,l,b)}function K6(r,g,o,l,h,b){if(h.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Hg(l,g),o=hb(""+l),r===o)return}eo(g,r,l,b)}function cq(r,g,o,l){for(var h={},b=new Set,i=r.attributes,P=0;P<i.length;P++)switch(i[P].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(i[P].name)}if(eb(g)){for(var A in o)if(o.hasOwnProperty(A)){var W=o[A];if(W!=null){if(p1.hasOwnProperty(A))typeof W!=="function"&&Xl(A,W);else if(o.suppressHydrationWarning!==!0)switch(A){case"children":typeof W!=="string"&&typeof W!=="number"||eo("children",r.textContent,W,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,W=W?W.__html:void 0,W!=null&&(W=kq(r,W),eo(A,i,W,h));continue;case"style":b.delete(A),_q(r,W,h);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(A.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",A);continue;case"className":b.delete("class"),i=UP(r,"class",W),eo("className",i,W,h);continue;default:l.context===P0&&g!=="svg"&&g!=="math"?b.delete(A.toLowerCase()):b.delete(A),i=UP(r,A,W),eo(A,i,W,h)}}}}else for(W in o)if(o.hasOwnProperty(W)&&(A=o[W],A!=null)){if(p1.hasOwnProperty(W))typeof A!=="function"&&Xl(W,A);else if(o.suppressHydrationWarning!==!0)switch(W){case"children":typeof A!=="string"&&typeof A!=="number"||eo("children",r.textContent,A,h);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,A=A?A.__html:void 0,A!=null&&(A=kq(r,A),i!==A&&(h[W]={__html:i}));continue;case"className":Qv(r,W,"class",A,b,h);continue;case"tabIndex":Qv(r,W,"tabindex",A,b,h);continue;case"style":b.delete(W),_q(r,A,h);continue;case"multiple":b.delete(W),eo(W,r.multiple,A,h);continue;case"muted":b.delete(W),eo(W,r.muted,A,h);continue;case"autoFocus":b.delete("autofocus"),eo(W,r.autofocus,A,h);continue;case"data":if(g!=="object"){b.delete(W),i=r.getAttribute("data"),eo(W,i,A,h);continue}case"src":case"href":if(!(A!==""||g==="a"&&W==="href"||g==="object"&&W==="data")){W==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',W,W):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',W,W);continue}K6(r,W,W,A,b,h);continue;case"action":case"formAction":if(i=r.getAttribute(W),typeof A==="function"){b.delete(W.toLowerCase()),W==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(i===eQ){b.delete(W.toLowerCase()),eo(W,"function",A,h);continue}K6(r,W,W.toLowerCase(),A,b,h);continue;case"xlinkHref":K6(r,W,"xlink:href",A,b,h);continue;case"contentEditable":z6(r,W,"contenteditable",A,b,h);continue;case"spellCheck":z6(r,W,"spellcheck",A,b,h);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":z6(r,W,W,A,b,h);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":Eq(r,W,W.toLowerCase(),A,b,h);continue;case"capture":case"download":r:{P=r;var $=i=W,m=h;if(b.delete($),P=P.getAttribute($),P===null)switch(typeof A){case"undefined":case"function":case"symbol":break r;default:if(A===!1)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":break;case"boolean":if(A===!0&&P==="")break r;break;default:if(Hg(A,i),P===""+A)break r}eo(i,P,A,m)}continue;case"cols":case"rows":case"size":case"span":r:{if(P=r,$=i=W,m=h,b.delete($),P=P.getAttribute($),P===null)switch(typeof A){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(A)||1>A)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(A)||1>A)&&(Hg(A,i),P===""+A))break r}eo(i,P,A,m)}continue;case"rowSpan":yq(r,W,"rowspan",A,b,h);continue;case"start":yq(r,W,W,A,b,h);continue;case"xHeight":Qv(r,W,"x-height",A,b,h);continue;case"xlinkActuate":Qv(r,W,"xlink:actuate",A,b,h);continue;case"xlinkArcrole":Qv(r,W,"xlink:arcrole",A,b,h);continue;case"xlinkRole":Qv(r,W,"xlink:role",A,b,h);continue;case"xlinkShow":Qv(r,W,"xlink:show",A,b,h);continue;case"xlinkTitle":Qv(r,W,"xlink:title",A,b,h);continue;case"xlinkType":Qv(r,W,"xlink:type",A,b,h);continue;case"xmlBase":Qv(r,W,"xml:base",A,b,h);continue;case"xmlLang":Qv(r,W,"xml:lang",A,b,h);continue;case"xmlSpace":Qv(r,W,"xml:space",A,b,h);continue;case"inert":A!==""||E2[W]||(E2[W]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",W)),Eq(r,W,W,A,b,h);continue;default:if(!(2<W.length)||W[0]!=="o"&&W[0]!=="O"||W[1]!=="n"&&W[1]!=="N"){P=jP(W),i=!1,l.context===P0&&g!=="svg"&&g!=="math"?b.delete(P.toLowerCase()):($=W.toLowerCase(),$=v2.hasOwnProperty($)?v2[$]||null:null,$!==null&&$!==W&&(i=!0,b.delete($)),b.delete(P));r:if($=r,m=P,P=A,gb(m))if($.hasAttribute(m))$=$.getAttribute(m),Hg(P,m),P=$===""+P?P:$;else{switch(typeof P){case"function":case"symbol":break r;case"boolean":if($=m.toLowerCase().slice(0,5),$!=="data-"&&$!=="aria-")break r}P=P===void 0?void 0:null}else P=void 0;i||eo(W,P,A,h)}}}return 0<b.size&&o.suppressHydrationWarning!==!0&&EX(r,b,h),Object.keys(h).length===0?null:h}function cX(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function jq(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jX(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var h=o[l],b=h.transferSize,i=h.initiatorType,P=h.duration;if(b&&P&&jq(i)){i=0,P=h.responseEnd;for(l+=1;l<o.length;l++){var A=o[l],W=A.startTime;if(W>P)break;var{transferSize:$,initiatorType:m}=A;$&&jq(m)&&(A=A.responseEnd,i+=$*(A<P?1:(P-W)/(A-W)))}if(--l,g+=8*(b+i)/(h.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Tu(r){return r.nodeType===9?r:r.ownerDocument}function fq(r){switch(r){case eh:return Bh;case o2:return c2;default:return P0}}function aq(r,g){if(r===P0)switch(g){case"svg":return Bh;case"math":return c2;default:return P0}return r===Bh&&g==="foreignObject"?P0:r}function U6(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function fX(){var r=window.event;if(r&&r.type==="popstate"){if(r===n8)return!1;return n8=r,!0}return n8=null,!1}function Lb(){var r=window.event;return r&&r!==K5?r.type:null}function Ib(){var r=window.event;return r&&r!==K5?r.timeStamp:-1.1}function aX(r){setTimeout(function(){throw r})}function pX(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function dX(){}function sX(r,g,o,l){yX(r,g,o,l),r[Fo]=l}function pq(r){lb(r,"")}function rY(r,g,o){r.nodeValue=o}function dq(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Fo]||null;if(g!==null){var o=Fr(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,wr(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function k0(r){return r==="head"}function gY(r,g){r.removeChild(g)}function oY(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function sq(r,g){var o=g,l=0;do{var h=o.nextSibling;if(r.removeChild(o),h&&h.nodeType===8)if(o=h.data,o===z5||o===y2){if(l===0){r.removeChild(h),se(g);return}l--}else if(o===Q5||o===n1||o===Ae||o===Nh||o===qe)l++;else if(o===bQ)Fb(r.ownerDocument.documentElement);else if(o===uQ){o=r.ownerDocument.head,Fb(o);for(var b=o.firstChild;b;){var{nextSibling:i,nodeName:P}=b;b[Sb]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=i}}else o===wQ&&Fb(r.ownerDocument.body);o=h}while(o);se(g)}function rA(r,g){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===z5)if(r===0)break;else r--;else o!==Q5&&o!==n1&&o!==Ae&&o!==Nh||r++;o=l}while(o)}function vY(r){rA(r,!0)}function lY(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function eY(r){r.nodeValue=""}function hY(r){rA(r,!1)}function bY(r,g){g=g[iQ],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function wY(r,g){r.nodeValue=g}function $6(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":$6(o),ur(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function uY(r,g,o,l){for(;r.nodeType===1;){var h=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){Hg(h.name,"name");var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;else if(!r[Sb])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(b!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=uv(r.nextSibling),r===null)break}return null}function iY(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function gA(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function m6(r){return r.data===n1||r.data===Ae}function L6(r){return r.data===Nh||r.data===n1&&r.ownerDocument.readyState!==_W}function nY(r,g){var o=r.ownerDocument;if(r.data===Ae)r._reactRetry=g;else if(r.data!==n1||o.readyState!==_W)g();else{var l=function(){g(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function uv(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Q5||g===Nh||g===n1||g===Ae||g===qe||g===w8||g===VW)break;if(g===z5||g===y2)return null}}return r}function oA(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},l=r.attributes,h=0;h<l.length;h++){var b=l[h];o[Vq(b.name)]=b.name.toLowerCase()==="style"?Q6(r):b.value}return{type:g,props:o}}return r.nodeType===8?r.data===qe?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function vA(r,g,o){return o===null||o[hQ]!==!0?(r.nodeValue===g?r=null:(g=S0(g),r=S0(r.nodeValue)===g?null:r.nodeValue),r):null}function I6(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===z5||o===y2){if(g===0)return uv(r.nextSibling);g--}else o!==Q5&&o!==Nh&&o!==n1&&o!==Ae&&o!==qe||g++}r=r.nextSibling}return null}function lA(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===Q5||o===Nh||o===n1||o===Ae||o===qe){if(g===0)return r;g--}else o!==z5&&o!==y2||g++}r=r.previousSibling}return null}function PY(r){se(r)}function HY(r){se(r)}function OY(r){se(r)}function eA(r,g,o,l,h){switch(h&&Vi(r,l.ancestorInfo),g=Tu(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function qY(r,g,o,l){if(!o[E0]&&Fr(o)){var h=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",h,h,h)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(h=o.attributes;h.length;)o.removeAttributeNode(h[0]);qo(o,r,g),o[Ao]=l,o[Fo]=g}function Fb(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);ur(r)}function Su(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function hA(r,g,o){var l=Zh;if(l&&typeof g==="string"&&g){var h=Jv(g);h='link[rel="'+r+'"][href="'+h+'"]',typeof o==="string"&&(h+='[crossorigin="'+o+'"]'),aW.has(h)||(aW.add(h),r={rel:r,crossOrigin:o,href:g},l.querySelector(h)===null&&(g=l.createElement("link"),qo(g,"link",r),Qr(g),l.head.appendChild(g)))}}function bA(r,g,o,l){var h=(h=V0.current)?Su(h):null;if(!h)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=pe(o.href),g=vg(h).hoistableStyles,l=g.get(o),l||(l={type:"style",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=pe(o.href);var b=vg(h).hoistableStyles,i=b.get(r);if(!i&&(h=h.ownerDocument||h,i={type:"stylesheet",instance:null,count:0,state:{loading:We,preload:null}},b.set(r,i),(b=h.querySelector(Nb(r)))&&!b._p&&(i.instance=b,i.state.loading=U5|Zv),!xv.has(r))){var P={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};xv.set(r,P),b||AY(h,r,P,i.state)}if(g&&l===null)throw o=`

  - `+ku(g)+`
  + `+ku(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return i}if(g&&l!==null)throw o=`

  - `+ku(g)+`
  + `+ku(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=de(o),g=vg(h).hoistableScripts,l=g.get(o),l||(l={type:"script",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function ku(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Vv.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Vv.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Vv.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function pe(r){return'href="'+Jv(r)+'"'}function Nb(r){return'link[rel="stylesheet"]['+r+"]"}function wA(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function AY(r,g,o,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=U5:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=U5}),g.addEventListener("error",function(){return l.loading|=jW}),qo(g,"link",o),Qr(g),r.head.appendChild(g))}function de(r){return'[src="'+Jv(r)+'"]'}function Bb(r){return"script[async]"+r}function uA(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+Jv(o.href)+'"]');if(l)return g.instance=l,Qr(l),l;var h=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),Qr(l),qo(l,"style",h),Du(l,o.precedence,r),g.instance=l;case"stylesheet":h=pe(o.href);var b=r.querySelector(Nb(h));if(b)return g.state.loading|=Zv,g.instance=b,Qr(b),b;l=wA(o),(h=xv.get(h))&&F6(l,h),b=(r.ownerDocument||r).createElement("link"),Qr(b);var i=b;return i._p=new Promise(function(P,A){i.onload=P,i.onerror=A}),qo(b,"link",l),g.state.loading|=Zv,Du(b,o.precedence,r),g.instance=b;case"script":if(b=de(o.src),h=r.querySelector(Bb(b)))return g.instance=h,Qr(h),h;if(l=o,h=xv.get(b))l=cr({},o),N6(l,h);return r=r.ownerDocument||r,h=r.createElement("script"),Qr(h),qo(h,"link",l),r.head.appendChild(h),g.instance=h;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Zv)===We&&(l=g.instance,g.state.loading|=Zv,Du(l,o.precedence,r));return g.instance}function Du(r,g,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,b=h,i=0;i<l.length;i++){var P=l[i];if(P.dataset.precedence===g)b=P;else if(b!==h)break}b?b.parentNode.insertBefore(r,b.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function F6(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function N6(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function iA(r,g,o){if(j2===null){var l=new Map,h=j2=new Map;h.set(o,l)}else h=j2,l=h.get(o),l||(l=new Map,h.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(h=0;h<o.length;h++){var b=o[h];if(!(b[Sb]||b[Ao]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==eh){var i=b.getAttribute(g)||"";i=r+i;var P=l.get(i);P?P.push(b):l.set(i,[b])}}return l}function nA(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function MY(r,g,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===Bh||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:h,disabled:b}=g;o=[],g.onLoad&&o.push("`onLoad`"),h&&o.push("`onError`"),b!=null&&o.push("`disabled`"),h=cX(o,"and"),h+=o.length===1?" prop":" props",b=o.length===1?"an "+h:"the "+h,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,b,h)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function PA(r){return r.type==="stylesheet"&&(r.state.loading&fW)===We?!1:!0}function WY(r,g,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&Zv)===We){if(o.instance===null){var h=pe(l.href),b=g.querySelector(Nb(h));if(b){g=b._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=Vu.bind(r),g.then(r,r)),o.state.loading|=Zv,o.instance=b,Qr(b);return}b=g.ownerDocument||g,l=wA(l),(h=xv.get(h))&&F6(l,h),b=b.createElement("link"),Qr(b);var i=b;i._p=new Promise(function(P,A){i.onload=P,i.onerror=A}),qo(b,"link",l),o.instance=b}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&fW)===We&&(r.count++,o=Vu.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function RY(r,g){return r.stylesheets&&r.count===0&&_u(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&_u(r,r.stylesheets),r.unsuspend){var b=r.unsuspend;r.unsuspend=null,b()}},HQ+g);0<r.imgBytes&&H8===0&&(H8=125*jX()*qQ);var h=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&_u(r,r.stylesheets),r.unsuspend)){var b=r.unsuspend;r.unsuspend=null,b()}},(r.imgBytes>H8?50:OQ)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function _u(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,f2=new Map,g.forEach(GY,r),f2=null,Vu.call(r))}function GY(r,g){if(!(g.state.loading&Zv)){var o=f2.get(r);if(o)var l=o.get(O8);else{o=new Map,f2.set(r,o);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var i=h[b];if(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")o.set(i.dataset.precedence,i),l=i}l&&o.set(O8,l)}h=g.instance,i=h.getAttribute("data-precedence"),b=o.get(i)||l,b===l&&o.set(O8,h),o.set(i,h),this.count++,l=Vu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),b?b.parentNode.insertBefore(h,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),g.state.loading|=Zv}}function tY(r,g,o,l,h,b,i,P,A){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Me,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.hiddenUpdates=Be(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function HA(r,g,o,l,h,b,i,P,A,W,$,m){return r=new tY(r,g,o,i,A,W,$,m,P),g=SJ,b===!0&&(g|=Ko|Ev),g|=kr,b=Y(3,null,null,g),r.current=b,b.stateNode=r,g=w4(),_1(g),r.pooledCache=g,_1(g),b.memoizedState={element:l,isDehydrated:o,cache:g},H4(b),r}function OA(r){if(!r)return f0;return r=f0,r}function B6(r,g,o,l,h,b){if(zo&&typeof zo.onScheduleFiberRoot==="function")try{zo.onScheduleFiberRoot(vh,l,o)}catch(i){zl||(zl=!0,console.error("React instrumentation encountered an error: %o",i))}h=OA(h),l.context===null?l.context=h:l.pendingContext=h,Ql&&nv!==null&&!r9&&(r9=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,x(nv)||"Unknown")),l=N0(g),l.payload={element:o},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),l.callback=b),o=B0(r,l,g),o!==null&&(il(g,"root.render()",null),Ng(o,r,g),qb(o,r,g))}function qA(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function Z6(r,g){qA(r,g),(r=r.alternate)&&qA(r,g)}function AA(r){if(r.tag===13||r.tag===31){var g=Qo(r,67108864);g!==null&&Ng(g,r,67108864),Z6(r,67108864)}}function MA(r){if(r.tag===13||r.tag===31){var g=wv(r);g=B1(g);var o=Qo(r,g);o!==null&&Ng(o,r,g),Z6(r,g)}}function XY(){return nv}function YY(r,g,o,l){var h=Z.T;Z.T=null;var b=wg.p;try{wg.p=Pv,x6(r,g,o,l)}finally{wg.p=b,Z.T=h}}function JY(r,g,o,l){var h=Z.T;Z.T=null;var b=wg.p;try{wg.p=_v,x6(r,g,o,l)}finally{wg.p=b,Z.T=h}}function x6(r,g,o,l){if(p2){var h=C6(l);if(h===null)X6(r,g,l,d2,o),RA(r,l);else if(QY(h,r,g,o,l))l.stopPropagation();else if(RA(r,l),g&4&&-1<MQ.indexOf(r)){for(;h!==null;){var b=Fr(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var i=hl(b.pendingLanes);if(i!==0){var P=b;P.pendingLanes|=2;for(P.entangledLanes|=2;i;){var A=1<<31-Io(i);P.entanglements[1]|=A,i&=~A}tl(b),(og&(lo|Av))===uo&&(N2=ho()+UW,$b(0,!1))}}break;case 31:case 13:P=Qo(b,2),P!==null&&Ng(P,b,2),je(),Z6(b,2)}if(b=C6(l),b===null&&X6(r,g,l,d2,o),b===h)break;h=b}h!==null&&l.stopPropagation()}else X6(r,g,l,null,o)}}function C6(r){return r=_i(r),T6(r)}function T6(r){if(d2=null,r=Rr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=Pr(g),r!==null)return r;r=null}else if(o===31){if(r=lr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return d2=r,null}function WA(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Pv;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _v;case"message":switch(NY()){case d6:return Pv;case s6:return _v;case oh:case BY:return Ul;case rn:return r2;default:return Ul}default:return Ul}}function RA(r,g){switch(r){case"focusin":case"focusout":P1=null;break;case"dragenter":case"dragleave":H1=null;break;case"mouseover":case"mouseout":O1=null;break;case"pointerover":case"pointerout":m5.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":L5.delete(g.pointerId)}}function Zb(r,g,o,l,h,b){if(r===null||r.nativeEvent!==b)return r={blockedOn:g,domEventName:o,eventSystemFlags:l,nativeEvent:b,targetContainers:[h]},g!==null&&(g=Fr(g),g!==null&&AA(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,h!==null&&g.indexOf(h)===-1&&g.push(h),r}function QY(r,g,o,l,h){switch(g){case"focusin":return P1=Zb(P1,r,g,o,l,h),!0;case"dragenter":return H1=Zb(H1,r,g,o,l,h),!0;case"mouseover":return O1=Zb(O1,r,g,o,l,h),!0;case"pointerover":var b=h.pointerId;return m5.set(b,Zb(m5.get(b)||null,r,g,o,l,h)),!0;case"gotpointercapture":return b=h.pointerId,L5.set(b,Zb(L5.get(b)||null,r,g,o,l,h)),!0}return!1}function GA(r){var g=Rr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=Pr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MA(o)});return}}else if(g===31){if(g=lr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MA(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Eu(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=C6(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),h=l;kb!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),kb=h,o.target.dispatchEvent(l),kb===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),kb=null}else return g=Fr(o),g!==null&&AA(g),r.blockedOn=o,!1;g.shift()}return!0}function tA(r,g,o){Eu(r)&&o.delete(g)}function zY(){q8=!1,P1!==null&&Eu(P1)&&(P1=null),H1!==null&&Eu(H1)&&(H1=null),O1!==null&&Eu(O1)&&(O1=null),m5.forEach(tA),L5.forEach(tA)}function yu(r,g){r.blockedOn===g&&(r.blockedOn=null,q8||(q8=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,zY)))}function XA(r){s2!==r&&(s2=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){s2===r&&(s2=null);for(var g=0;g<r.length;g+=3){var o=r[g],l=r[g+1],h=r[g+2];if(typeof l!=="function")if(T6(l||o)===null)continue;else break;var b=Fr(o);b!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:h,method:o.method,action:l},Object.freeze(o),T4(b,o,l,h))}}))}function se(r){function g(A){return yu(A,r)}P1!==null&&yu(P1,r),H1!==null&&yu(H1,r),O1!==null&&yu(O1,r),m5.forEach(g),L5.forEach(g);for(var o=0;o<q1.length;o++){var l=q1[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<q1.length&&(o=q1[0],o.blockedOn===null);)GA(o),o.blockedOn===null&&q1.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var h=o[l],b=o[l+1],i=h[Fo]||null;if(typeof b==="function")i||XA(o);else if(i){var P=null;if(b&&b.hasAttribute("formAction")){if(h=b,i=b[Fo]||null)P=i.formAction;else if(T6(h)!==null)continue}else P=i.action;typeof P==="function"?o[l+1]=P:(o.splice(l,3),l-=3),XA(o)}}}function YA(){function r(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(i){return h=i})},focusReset:"manual",scroll:"manual"})}function g(){h!==null&&(h(),h=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,h=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),h!==null&&(h(),h=null)}}}function S6(r){this._internalRoot=r}function cu(r){this._internalRoot=r}function JA(r){r[E0]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,KY=Symbol.for("react.element"),Yl=Symbol.for("react.transitional.element"),rh=Symbol.for("react.portal"),gh=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),k6=Symbol.for("react.profiler"),D6=Symbol.for("react.consumer"),Jl=Symbol.for("react.context"),xb=Symbol.for("react.forward_ref"),V6=Symbol.for("react.suspense"),_6=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),iv=Symbol.for("react.lazy"),E6=Symbol.for("react.activity"),UY=Symbol.for("react.memo_cache_sentinel"),QA=Symbol.iterator,$Y=Symbol.for("react.client.reference"),oo=Array.isArray,Z=Ch.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wg=W8.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mY=Object.freeze({pending:!1,data:null,method:null,action:null}),y6=[],c6=[],dl=-1,D0=tr(null),Cb=tr(null),V0=tr(null),au=tr(null),Tb=0,zA,KA,UA,$A,mA,LA,IA;T.__reactDisabledLog=!0;var j6,FA,f6=!1,a6=new(typeof WeakMap==="function"?WeakMap:Map),nv=null,Ql=!1,Vv=Object.prototype.hasOwnProperty,p6=lg.unstable_scheduleCallback,LY=lg.unstable_cancelCallback,IY=lg.unstable_shouldYield,FY=lg.unstable_requestPaint,ho=lg.unstable_now,NY=lg.unstable_getCurrentPriorityLevel,d6=lg.unstable_ImmediatePriority,s6=lg.unstable_UserBlockingPriority,oh=lg.unstable_NormalPriority,BY=lg.unstable_LowPriority,rn=lg.unstable_IdlePriority,ZY=lg.log,xY=lg.unstable_setDisableYieldValue,vh=null,zo=null,zl=!1,Kl=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Io=Math.clz32?Math.clz32:Cw,CY=Math.log,TY=Math.LN2,pu=256,du=262144,su=4194304,Pv=2,_v=8,Ul=32,r2=268435456,_0=Math.random().toString(36).slice(2),Ao="__reactFiber$"+_0,Fo="__reactProps$"+_0,E0="__reactContainer$"+_0,gn="__reactEvents$"+_0,SY="__reactListeners$"+_0,kY="__reactHandles$"+_0,NA="__reactResources$"+_0,Sb="__reactMarker$"+_0,BA=new Set,p1={},on={},DY={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},VY=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ZA={},xA={},_Y=/[\n"\\]/g,CA=!1,TA=!1,SA=!1,kA=!1,DA=!1,VA=!1,_A=["value","defaultValue"],EA=!1,yA=/["'&<>\n\t]|^\s|\s$/,EY="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),cA="applet caption html table td th marquee object template foreignObject desc title".split(" "),yY=cA.concat(["button"]),cY="dd dt li option optgroup p rp rt".split(" "),jA={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},g2={},vn={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},fA=/([A-Z])/g,aA=/^ms-/,jY=/^(?:webkit|moz|o)[A-Z]/,fY=/^-ms-/,aY=/-(.)/g,pA=/;\s*$/,lh={},ln={},dA=!1,sA=!1,rM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),o2="http://www.w3.org/1998/Math/MathML",eh="http://www.w3.org/2000/svg",pY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v2={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},gM={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},hh={},dY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oM=!1,No={},vM=/^on./,rJ=/^on[^A-Z]/,gJ=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oJ=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vJ=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,kb=null,bh=null,wh=null,en=!1,$l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hn=!1;if($l)try{var Db={};Object.defineProperty(Db,"passive",{get:function(){hn=!0}}),window.addEventListener("test",Db,Db),window.removeEventListener("test",Db,Db)}catch(r){hn=!1}var y0=null,bn=null,l2=null,d1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},e2=Eo(d1),Vb=cr({},d1,{view:0,detail:0}),lJ=Eo(Vb),wn,un,_b,h2=cr({},Vb,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ei,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==_b&&(_b&&r.type==="mousemove"?(wn=r.screenX-_b.screenX,un=r.screenY-_b.screenY):un=wn=0,_b=r),wn},movementY:function(r){return"movementY"in r?r.movementY:un}}),lM=Eo(h2),eJ=cr({},h2,{dataTransfer:0}),hJ=Eo(eJ),bJ=cr({},Vb,{relatedTarget:0}),nn=Eo(bJ),wJ=cr({},d1,{animationName:0,elapsedTime:0,pseudoElement:0}),uJ=Eo(wJ),iJ=cr({},d1,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),nJ=Eo(iJ),PJ=cr({},d1,{data:0}),eM=Eo(PJ),HJ=eM,OJ={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qJ={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AJ={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},MJ=cr({},Vb,{key:function(r){if(r.key){var g=OJ[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=Ew(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qJ[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ei,charCode:function(r){return r.type==="keypress"?Ew(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ew(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),WJ=Eo(MJ),RJ=cr({},h2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hM=Eo(RJ),GJ=cr({},Vb,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ei}),tJ=Eo(GJ),XJ=cr({},d1,{propertyName:0,elapsedTime:0,pseudoElement:0}),YJ=Eo(XJ),JJ=cr({},h2,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),QJ=Eo(JJ),zJ=cr({},d1,{newState:0,oldState:0}),KJ=Eo(zJ),UJ=[9,13,27,32],bM=229,Pn=$l&&"CompositionEvent"in window,Eb=null;$l&&"documentMode"in document&&(Eb=document.documentMode);var $J=$l&&"TextEvent"in window&&!Eb,wM=$l&&(!Pn||Eb&&8<Eb&&11>=Eb),uM=32,iM=String.fromCharCode(uM),nM=!1,uh=!1,mJ={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},yb=null,cb=null,PM=!1;$l&&(PM=pt("input")&&(!document.documentMode||9<document.documentMode));var Bo=typeof Object.is==="function"?Object.is:vX,LJ=$l&&"documentMode"in document&&11>=document.documentMode,ih=null,Hn=null,jb=null,On=!1,nh={animationend:x1("Animation","AnimationEnd"),animationiteration:x1("Animation","AnimationIteration"),animationstart:x1("Animation","AnimationStart"),transitionrun:x1("Transition","TransitionRun"),transitionstart:x1("Transition","TransitionStart"),transitioncancel:x1("Transition","TransitionCancel"),transitionend:x1("Transition","TransitionEnd")},qn={},HM={};$l&&(HM=document.createElement("div").style,("AnimationEvent"in window)||(delete nh.animationend.animation,delete nh.animationiteration.animation,delete nh.animationstart.animation),("TransitionEvent"in window)||delete nh.transitionend.transition);var OM=C1("animationend"),qM=C1("animationiteration"),AM=C1("animationstart"),IJ=C1("transitionrun"),FJ=C1("transitionstart"),NJ=C1("transitioncancel"),MM=C1("transitionend"),WM=new Map,An="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");An.push("scrollEnd");var RM=0;if(typeof performance==="object"&&typeof performance.now==="function")var BJ=performance,GM=function(){return BJ.now()};else{var ZJ=Date;GM=function(){return ZJ.now()}}var Mn=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},xJ="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",b2=0,Wn=1,Rn=2,Gn=3,w2="– ",u2="+ ",tM="  ",Qg=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",zv="Components ⚛",jr="Scheduler ⚛",fr="Blocking",c0=!1,sl={color:"primary",properties:null,tooltipText:"",track:zv},j0={start:-0,end:-0,detail:{devtools:sl}},CJ=["Changed Props",""],XM="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",TJ=["Changed Props",XM],fb=1,r0=2,Kv=[],Ph=0,tn=0,f0={};Object.freeze(f0);var Uv=null,Hh=null,Ur=0,SJ=1,kr=2,Ko=8,Ev=16,kJ=32,YM=!1;try{var JM=Object.preventExtensions({})}catch(r){YM=!0}var Xn=new WeakMap,Oh=[],qh=0,i2=null,ab=0,$v=[],mv=0,s1=null,g0=1,o0="",Mo=null,zg=null,pr=!1,ml=!1,Hv=null,a0=null,Lv=!1,Yn=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Jn=tr(null),Qn=tr(null),QM={},n2=null,Ah=null,Mh=!1,DJ=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},VJ=lg.unstable_scheduleCallback,_J=lg.unstable_NormalPriority,jg={$$typeof:Jl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=lg.unstable_now,P2=console.createTask?console.createTask:function(){return null},pb=1,H2=2,bo=-0,p0=-0,v0=-0,l0=null,Zo=-1.1,re=-0,Lg=-0,zr=-1.1,Kr=-1.1,$g=null,Bg=!1,d0=-0,Ll=-1.1,db=null,s0=0,zn=null,Kn=null,ge=-1.1,sb=null,Wh=-1.1,O2=-1.1,Il=-0,e0=-1.1,Iv=-1.1,Un=0,r5=null,zM=null,KM=null,r1=-1.1,oe=null,g1=-1.1,q2=-1.1,UM=-0,$M=-0,A2=0,h0=null,mM=0,g5=-1.1,M2=!1,W2=!1,o5=null,$n=0,ve=0,Rh=null,LM=Z.S;Z.S=function(r,g){if(zW=ho(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>e0&&0>Iv){e0=fg();var o=Ib(),l=Lb();if(o!==g1||l!==oe)g1=-1.1;r1=o,oe=l}iX(r,g)}LM!==null&&LM(r,g)};var le=tr(null),yv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},v5=[],l5=[],e5=[],h5=[],b5=[],w5=[],ee=new Set;yv.recordUnsafeLifecycleWarnings=function(r,g){ee.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&v5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillMount==="function"&&l5.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&e5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&h5.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&b5.push(r),r.mode&Ko&&typeof g.UNSAFE_componentWillUpdate==="function"&&w5.push(r))},yv.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<v5.length&&(v5.forEach(function(P){r.add(x(P)||"Component"),ee.add(P.type)}),v5=[]);var g=new Set;0<l5.length&&(l5.forEach(function(P){g.add(x(P)||"Component"),ee.add(P.type)}),l5=[]);var o=new Set;0<e5.length&&(e5.forEach(function(P){o.add(x(P)||"Component"),ee.add(P.type)}),e5=[]);var l=new Set;0<h5.length&&(h5.forEach(function(P){l.add(x(P)||"Component"),ee.add(P.type)}),h5=[]);var h=new Set;0<b5.length&&(b5.forEach(function(P){h.add(x(P)||"Component"),ee.add(P.type)}),b5=[]);var b=new Set;if(0<w5.length&&(w5.forEach(function(P){b.add(x(P)||"Component"),ee.add(P.type)}),w5=[]),0<g.size){var i=M(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,i)}0<l.size&&(i=M(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,i)),0<b.size&&(i=M(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,i)),0<r.size&&(i=M(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<o.size&&(i=M(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<h.size&&(i=M(h),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i))};var R2=new Map,IM=new Set;yv.recordLegacyContextWarning=function(r,g){var o=null;for(var l=r;l!==null;)l.mode&Ko&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!IM.has(r.type)&&(l=R2.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],R2.set(o,l)),l.push(r))},yv.flushLegacyContextWarning=function(){R2.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(h){o.add(x(h)||"Component"),IM.add(h.type)});var l=M(o);wr(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},yv.discardPendingWarnings=function(){v5=[],l5=[],e5=[],h5=[],b5=[],w5=[],R2=new Map};var FM={react_stack_bottom_frame:function(r,g,o){var l=Ql;Ql=!0;try{return r(g,o)}finally{Ql=l}}},mn=FM.react_stack_bottom_frame.bind(FM),NM={react_stack_bottom_frame:function(r){var g=Ql;Ql=!0;try{return r.render()}finally{Ql=g}}},BM=NM.react_stack_bottom_frame.bind(NM),ZM={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){bg(r,r.return,o)}}},Ln=ZM.react_stack_bottom_frame.bind(ZM),xM={react_stack_bottom_frame:function(r,g,o,l,h){try{g.componentDidUpdate(o,l,h)}catch(b){bg(r,r.return,b)}}},CM=xM.react_stack_bottom_frame.bind(xM),TM={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},EJ=TM.react_stack_bottom_frame.bind(TM),SM={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(l){bg(r,g,l)}}},kM=SM.react_stack_bottom_frame.bind(SM),DM={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},yJ=DM.react_stack_bottom_frame.bind(DM),VM={react_stack_bottom_frame:function(r,g,o){try{o()}catch(l){bg(r,g,l)}}},cJ=VM.react_stack_bottom_frame.bind(VM),_M={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},jJ=_M.react_stack_bottom_frame.bind(_M),Gh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),In=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),G2=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),t2={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},he=null,u5=!1,th=null,i5=0,Dr=null,Fn,EM=Fn=!1,yM={},cM={},jM={};t=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=x(r),h=l||"null";if(!yM[h]){yM[h]=!0,o=o._owner,r=r._debugOwner;var b="";r&&typeof r.tag==="number"&&(h=x(r))&&(b=`

Check the render method of \``+h+"`."),b||l&&(b=`

Check the top-level render call using <`+l+">.");var i="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=x(o):typeof o.name==="string"&&(l=o.name),l&&(i=" It was passed a child from "+l+".")),wr(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,i)})}}};var be=SH(!0),fM=SH(!1),aM=0,pM=1,dM=2,Nn=3,o1=!1,sM=!1,Bn=null,Zn=!1,Xh=tr(null),X2=tr(0),Ov=tr(null),Fv=null,Yh=1,n5=2,Dg=tr(0),Y2=0,Nv=1,xo=2,qv=4,Co=8,Jh,rW=new Set,gW=new Set,xn=new Set,oW=new Set,b0=0,$r=null,Mg=null,ag=null,J2=!1,Qh=!1,we=!1,Q2=0,P5=0,w0=null,fJ=0,aJ=25,B=null,Bv=null,u0=-1,H5=!1,O5={readContext:Ug,use:C0,useCallback:Cg,useContext:Cg,useEffect:Cg,useImperativeHandle:Cg,useLayoutEffect:Cg,useInsertionEffect:Cg,useMemo:Cg,useReducer:Cg,useRef:Cg,useState:Cg,useDebugValue:Cg,useDeferredValue:Cg,useTransition:Cg,useSyncExternalStore:Cg,useId:Cg,useHostTransitionStatus:Cg,useFormState:Cg,useActionState:Cg,useOptimistic:Cg,useMemoCache:Cg,useCacheRefresh:Cg};O5.useEffectEvent=Cg;var Cn=null,vW=null,Tn=null,lW=null,Fl=null,cv=null,z2=null;Cn={readContext:function(r){return Ug(r)},use:C0,useCallback:function(r,g){return B="useCallback",yr(),ke(g),B4(r,g)},useContext:function(r){return B="useContext",yr(),Ug(r)},useEffect:function(r,g){return B="useEffect",yr(),ke(g),Ru(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",yr(),ke(o),N4(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",yr(),ke(g),y1(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",yr(),ke(g),F4(r,g)},useMemo:function(r,g){B="useMemo",yr(),ke(g);var o=Z.H;Z.H=Fl;try{return Z4(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",yr();var l=Z.H;Z.H=Fl;try{return J4(r,g,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",yr(),L4(r)},useState:function(r){B="useState",yr();var g=Z.H;Z.H=Fl;try{return U4(r)}finally{Z.H=g}},useDebugValue:function(){B="useDebugValue",yr()},useDeferredValue:function(r,g){return B="useDeferredValue",yr(),x4(r,g)},useTransition:function(){return B="useTransition",yr(),S4()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",yr(),z4(r,g,o)},useId:function(){return B="useId",yr(),k4()},useFormState:function(r,g){return B="useFormState",yr(),Ou(),Ve(r,g)},useActionState:function(r,g){return B="useActionState",yr(),Ve(r,g)},useOptimistic:function(r){return B="useOptimistic",yr(),$4(r)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return B="useCacheRefresh",yr(),D4()},useEffectEvent:function(r){return B="useEffectEvent",yr(),I4(r)}},vW={readContext:function(r){return Ug(r)},use:C0,useCallback:function(r,g){return B="useCallback",d(),B4(r,g)},useContext:function(r){return B="useContext",d(),Ug(r)},useEffect:function(r,g){return B="useEffect",d(),Ru(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),N4(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",d(),y1(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),F4(r,g)},useMemo:function(r,g){B="useMemo",d();var o=Z.H;Z.H=Fl;try{return Z4(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=Z.H;Z.H=Fl;try{return J4(r,g,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",d(),L4(r)},useState:function(r){B="useState",d();var g=Z.H;Z.H=Fl;try{return U4(r)}finally{Z.H=g}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),x4(r,g)},useTransition:function(){return B="useTransition",d(),S4()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),z4(r,g,o)},useId:function(){return B="useId",d(),k4()},useActionState:function(r,g){return B="useActionState",d(),Ve(r,g)},useFormState:function(r,g){return B="useFormState",d(),Ou(),Ve(r,g)},useOptimistic:function(r){return B="useOptimistic",d(),$4(r)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return B="useCacheRefresh",d(),D4()},useEffectEvent:function(r){return B="useEffectEvent",d(),I4(r)}},Tn={readContext:function(r){return Ug(r)},use:C0,useCallback:function(r,g){return B="useCallback",d(),Xu(r,g)},useContext:function(r){return B="useContext",d(),Ug(r)},useEffect:function(r,g){B="useEffect",d(),yo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),tu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",d(),yo(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),yo(4,qv,r,g)},useMemo:function(r,g){B="useMemo",d();var o=Z.H;Z.H=cv;try{return Yu(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=Z.H;Z.H=cv;try{return De(r,g,o)}finally{Z.H=l}},useRef:function(){return B="useRef",d(),ig().memoizedState},useState:function(){B="useState",d();var r=Z.H;Z.H=cv;try{return De(kv)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),wO(r,g)},useTransition:function(){return B="useTransition",d(),OO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),Au(r,g,o)},useId:function(){return B="useId",d(),ig().memoizedState},useFormState:function(r){return B="useFormState",d(),Ou(),Mu(r)},useActionState:function(r){return B="useActionState",d(),Mu(r)},useOptimistic:function(r,g){return B="useOptimistic",d(),dH(r,g)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return B="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Gu(r)}},lW={readContext:function(r){return Ug(r)},use:C0,useCallback:function(r,g){return B="useCallback",d(),Xu(r,g)},useContext:function(r){return B="useContext",d(),Ug(r)},useEffect:function(r,g){B="useEffect",d(),yo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",d(),tu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",d(),yo(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",d(),yo(4,qv,r,g)},useMemo:function(r,g){B="useMemo",d();var o=Z.H;Z.H=z2;try{return Yu(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",d();var l=Z.H;Z.H=z2;try{return Rb(r,g,o)}finally{Z.H=l}},useRef:function(){return B="useRef",d(),ig().memoizedState},useState:function(){B="useState",d();var r=Z.H;Z.H=z2;try{return Rb(kv)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",d()},useDeferredValue:function(r,g){return B="useDeferredValue",d(),uO(r,g)},useTransition:function(){return B="useTransition",d(),qO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",d(),Au(r,g,o)},useId:function(){return B="useId",d(),ig().memoizedState},useFormState:function(r){return B="useFormState",d(),Ou(),Wu(r)},useActionState:function(r){return B="useActionState",d(),Wu(r)},useOptimistic:function(r,g){return B="useOptimistic",d(),rO(r,g)},useHostTransitionStatus:c1,useMemoCache:E1,useCacheRefresh:function(){return B="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",d(),Gu(r)}},Fl={readContext:function(r){return G(),Ug(r)},use:function(r){return q(),C0(r)},useCallback:function(r,g){return B="useCallback",q(),yr(),B4(r,g)},useContext:function(r){return B="useContext",q(),yr(),Ug(r)},useEffect:function(r,g){return B="useEffect",q(),yr(),Ru(r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",q(),yr(),N4(r,g,o)},useInsertionEffect:function(r,g){B="useInsertionEffect",q(),yr(),y1(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",q(),yr(),F4(r,g)},useMemo:function(r,g){B="useMemo",q(),yr();var o=Z.H;Z.H=Fl;try{return Z4(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",q(),yr();var l=Z.H;Z.H=Fl;try{return J4(r,g,o)}finally{Z.H=l}},useRef:function(r){return B="useRef",q(),yr(),L4(r)},useState:function(r){B="useState",q(),yr();var g=Z.H;Z.H=Fl;try{return U4(r)}finally{Z.H=g}},useDebugValue:function(){B="useDebugValue",q(),yr()},useDeferredValue:function(r,g){return B="useDeferredValue",q(),yr(),x4(r,g)},useTransition:function(){return B="useTransition",q(),yr(),S4()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",q(),yr(),z4(r,g,o)},useId:function(){return B="useId",q(),yr(),k4()},useFormState:function(r,g){return B="useFormState",q(),yr(),Ve(r,g)},useActionState:function(r,g){return B="useActionState",q(),yr(),Ve(r,g)},useOptimistic:function(r){return B="useOptimistic",q(),yr(),$4(r)},useMemoCache:function(r){return q(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return B="useCacheRefresh",yr(),D4()},useEffectEvent:function(r){return B="useEffectEvent",q(),yr(),I4(r)}},cv={readContext:function(r){return G(),Ug(r)},use:function(r){return q(),C0(r)},useCallback:function(r,g){return B="useCallback",q(),d(),Xu(r,g)},useContext:function(r){return B="useContext",q(),d(),Ug(r)},useEffect:function(r,g){B="useEffect",q(),d(),yo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",q(),d(),tu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",q(),d(),yo(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",q(),d(),yo(4,qv,r,g)},useMemo:function(r,g){B="useMemo",q(),d();var o=Z.H;Z.H=cv;try{return Yu(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",q(),d();var l=Z.H;Z.H=cv;try{return De(r,g,o)}finally{Z.H=l}},useRef:function(){return B="useRef",q(),d(),ig().memoizedState},useState:function(){B="useState",q(),d();var r=Z.H;Z.H=cv;try{return De(kv)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",q(),d()},useDeferredValue:function(r,g){return B="useDeferredValue",q(),d(),wO(r,g)},useTransition:function(){return B="useTransition",q(),d(),OO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",q(),d(),Au(r,g,o)},useId:function(){return B="useId",q(),d(),ig().memoizedState},useFormState:function(r){return B="useFormState",q(),d(),Mu(r)},useActionState:function(r){return B="useActionState",q(),d(),Mu(r)},useOptimistic:function(r,g){return B="useOptimistic",q(),d(),dH(r,g)},useMemoCache:function(r){return q(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return B="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",q(),d(),Gu(r)}},z2={readContext:function(r){return G(),Ug(r)},use:function(r){return q(),C0(r)},useCallback:function(r,g){return B="useCallback",q(),d(),Xu(r,g)},useContext:function(r){return B="useContext",q(),d(),Ug(r)},useEffect:function(r,g){B="useEffect",q(),d(),yo(2048,Co,r,g)},useImperativeHandle:function(r,g,o){return B="useImperativeHandle",q(),d(),tu(r,g,o)},useInsertionEffect:function(r,g){return B="useInsertionEffect",q(),d(),yo(4,xo,r,g)},useLayoutEffect:function(r,g){return B="useLayoutEffect",q(),d(),yo(4,qv,r,g)},useMemo:function(r,g){B="useMemo",q(),d();var o=Z.H;Z.H=cv;try{return Yu(r,g)}finally{Z.H=o}},useReducer:function(r,g,o){B="useReducer",q(),d();var l=Z.H;Z.H=cv;try{return Rb(r,g,o)}finally{Z.H=l}},useRef:function(){return B="useRef",q(),d(),ig().memoizedState},useState:function(){B="useState",q(),d();var r=Z.H;Z.H=cv;try{return Rb(kv)}finally{Z.H=r}},useDebugValue:function(){B="useDebugValue",q(),d()},useDeferredValue:function(r,g){return B="useDeferredValue",q(),d(),uO(r,g)},useTransition:function(){return B="useTransition",q(),d(),qO()},useSyncExternalStore:function(r,g,o){return B="useSyncExternalStore",q(),d(),Au(r,g,o)},useId:function(){return B="useId",q(),d(),ig().memoizedState},useFormState:function(r){return B="useFormState",q(),d(),Wu(r)},useActionState:function(r){return B="useActionState",q(),d(),Wu(r)},useOptimistic:function(r,g){return B="useOptimistic",q(),d(),rO(r,g)},useMemoCache:function(r){return q(),E1(r)},useHostTransitionStatus:c1,useCacheRefresh:function(){return B="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",q(),d(),Gu(r)}};var eW={},hW=new Set,bW=new Set,wW=new Set,uW=new Set,iW=new Set,nW=new Set,PW=new Set,HW=new Set,OW=new Set,qW=new Set;Object.freeze(eW);var Sn={enqueueSetState:function(r,g,o){r=r._reactInternals;var l=wv(r),h=N0(l);h.payload=g,o!==void 0&&o!==null&&(_4(o),h.callback=o),g=B0(r,h,l),g!==null&&(il(l,"this.setState()",r),Ng(g,r,l),qb(g,r,l))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var l=wv(r),h=N0(l);h.tag=pM,h.payload=g,o!==void 0&&o!==null&&(_4(o),h.callback=o),g=B0(r,h,l),g!==null&&(il(l,"this.replaceState()",r),Ng(g,r,l),qb(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=wv(r),l=N0(o);l.tag=dM,g!==void 0&&g!==null&&(_4(g),l.callback=g),g=B0(r,l,o),g!==null&&(il(o,"this.forceUpdate()",r),Ng(g,r,o),qb(g,r,o))}},zh=null,kn=null,Dn=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),pg=!1,AW={},MW={},WW={},RW={},Kh=!1,GW={},K2={},Vn={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},tW=!1,XW=null;XW=new Set;var i0=!1,dg=!1,_n=!1,YW=typeof WeakSet==="function"?WeakSet:Set,wo=null,Uh=null,$h=null,sg=null,fo=!1,jv=null,vo=!1,q5=8192,pJ={getCacheForType:function(r){var g=Ug(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Ug(jg).controller.signal},getOwner:function(){return nv}};if(typeof Symbol==="function"&&Symbol.for){var A5=Symbol.for;A5("selector.component"),A5("selector.has_pseudo_class"),A5("selector.role"),A5("selector.test_id"),A5("selector.text")}var dJ=[],sJ=typeof WeakMap==="function"?WeakMap:Map,uo=0,lo=2,Av=4,n0=0,M5=1,ue=2,U2=3,v1=4,$2=6,JW=5,og=uo,Wg=null,Er=null,Vr=0,ao=0,m2=1,ie=2,W5=3,QW=4,En=5,R5=6,L2=7,yn=8,ne=9,ng=ao,Mv=null,l1=!1,mh=!1,cn=!1,Nl=0,Ig=n0,e1=0,h1=0,jn=0,po=0,Pe=0,G5=null,To=null,I2=!1,F2=0,zW=0,KW=300,N2=1/0,UW=500,t5=null,Tg=null,b1=null,B2=0,fn=1,an=2,$W=3,w1=0,mW=1,LW=2,IW=3,FW=4,Z2=5,ro=0,u1=null,Lh=null,fv=0,pn=0,dn=-0,sn=null,NW=null,BW=null,av=B2,ZW=null,rQ=50,X5=0,r8=null,g8=!1,x2=!1,gQ=50,He=0,Y5=null,Ih=!1,C2=null,xW=!1,CW=new Set,oQ={},T2=null,Fh=null,o8=!1,v8=!1,S2=!1,l8=!1,i1=0,e8={};(function(){for(var r=0;r<An.length;r++){var g=An[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),Sv(o,"on"+g)}Sv(OM,"onAnimationEnd"),Sv(qM,"onAnimationIteration"),Sv(AM,"onAnimationStart"),Sv("dblclick","onDoubleClick"),Sv("focusin","onFocus"),Sv("focusout","onBlur"),Sv(IJ,"onTransitionRun"),Sv(FJ,"onTransitionStart"),Sv(NJ,"onTransitionCancel"),Sv(MM,"onTransitionEnd")})(),gv("onMouseEnter",["mouseout","mouseover"]),gv("onMouseLeave",["mouseout","mouseover"]),gv("onPointerEnter",["pointerout","pointerover"]),gv("onPointerLeave",["pointerout","pointerover"]),Jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var J5="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(J5)),k2="_reactListening"+Math.random().toString(36).slice(2),TW=!1,SW=!1,D2=!1,kW=!1,V2=!1,_2=!1,DW=!1,E2={},vQ=/\r\n?/g,lQ=/\u0000|\uFFFD/g,Oe="http://www.w3.org/1999/xlink",b8="http://www.w3.org/XML/1998/namespace",eQ="javascript:throw new Error('React form unexpectedly submitted.')",hQ="suppressHydrationWarning",qe="&",y2="/&",Q5="$",z5="/$",n1="$?",Ae="$~",Nh="$!",bQ="html",wQ="body",uQ="head",w8="F!",VW="F",_W="loading",iQ="style",P0=0,Bh=1,c2=2,u8=null,i8=null,EW={dialog:!0,webview:!0},n8=null,K5=void 0,yW=typeof setTimeout==="function"?setTimeout:void 0,nQ=typeof clearTimeout==="function"?clearTimeout:void 0,Me=-1,cW=typeof Promise==="function"?Promise:void 0,PQ=typeof queueMicrotask==="function"?queueMicrotask:typeof cW<"u"?function(r){return cW.resolve(null).then(r).catch(aX)}:yW,P8=null,We=0,U5=1,jW=2,fW=3,Zv=4,xv=new Map,aW=new Set,H0=wg.d;wg.d={f:function(){var r=H0.f(),g=je();return r||g},r:function(r){var g=Fr(r);g!==null&&g.tag===5&&g.type==="form"?HO(g):H0.r(r)},D:function(r){H0.D(r),hA("dns-prefetch",r,null)},C:function(r,g){H0.C(r,g),hA("preconnect",r,g)},L:function(r,g,o){H0.L(r,g,o);var l=Zh;if(l&&r&&g){var h='link[rel="preload"][as="'+Jv(g)+'"]';g==="image"?o&&o.imageSrcSet?(h+='[imagesrcset="'+Jv(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(h+='[imagesizes="'+Jv(o.imageSizes)+'"]')):h+='[href="'+Jv(r)+'"]':h+='[href="'+Jv(r)+'"]';var b=h;switch(g){case"style":b=pe(r);break;case"script":b=de(r)}xv.has(b)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),xv.set(b,r),l.querySelector(h)!==null||g==="style"&&l.querySelector(Nb(b))||g==="script"&&l.querySelector(Bb(b))||(g=l.createElement("link"),qo(g,"link",r),Qr(g),l.head.appendChild(g)))}},m:function(r,g){H0.m(r,g);var o=Zh;if(o&&r){var l=g&&typeof g.as==="string"?g.as:"script",h='link[rel="modulepreload"][as="'+Jv(l)+'"][href="'+Jv(r)+'"]',b=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=de(r)}if(!xv.has(b)&&(r=cr({rel:"modulepreload",href:r},g),xv.set(b,r),o.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Bb(b)))return}l=o.createElement("link"),qo(l,"link",r),Qr(l),o.head.appendChild(l)}}},X:function(r,g){H0.X(r,g);var o=Zh;if(o&&r){var l=vg(o).hoistableScripts,h=de(r),b=l.get(h);b||(b=o.querySelector(Bb(h)),b||(r=cr({src:r,async:!0},g),(g=xv.get(h))&&N6(r,g),b=o.createElement("script"),Qr(b),qo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(h,b))}},S:function(r,g,o){H0.S(r,g,o);var l=Zh;if(l&&r){var h=vg(l).hoistableStyles,b=pe(r);g=g||"default";var i=h.get(b);if(!i){var P={loading:We,preload:null};if(i=l.querySelector(Nb(b)))P.loading=U5|Zv;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=xv.get(b))&&F6(r,o);var A=i=l.createElement("link");Qr(A),qo(A,"link",r),A._p=new Promise(function(W,$){A.onload=W,A.onerror=$}),A.addEventListener("load",function(){P.loading|=U5}),A.addEventListener("error",function(){P.loading|=jW}),P.loading|=Zv,Du(i,g,l)}i={type:"stylesheet",instance:i,count:1,state:P},h.set(b,i)}}},M:function(r,g){H0.M(r,g);var o=Zh;if(o&&r){var l=vg(o).hoistableScripts,h=de(r),b=l.get(h);b||(b=o.querySelector(Bb(h)),b||(r=cr({src:r,async:!0,type:"module"},g),(g=xv.get(h))&&N6(r,g),b=o.createElement("script"),Qr(b),qo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(h,b))}}};var Zh=typeof document>"u"?null:document,j2=null,HQ=60000,OQ=800,qQ=500,H8=0,O8=null,f2=null,Re=mY,$5={$$typeof:Jl,Provider:null,Consumer:null,_currentValue:Re,_currentValue2:Re,_threadCount:0},pW="%c%s%c",dW="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",sW="",a2=" ",AQ=Function.prototype.bind,r9=!1,g9=null,o9=null,v9=null,l9=null,e9=null,h9=null,b9=null,w9=null,u9=null,i9=null;g9=function(r,g,o,l){g=v(r,g),g!==null&&(o=e(g.memoizedState,o,0,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Ng(o,r,2))},o9=function(r,g,o){g=v(r,g),g!==null&&(o=n(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Ng(o,r,2))},v9=function(r,g,o,l){g=v(r,g),g!==null&&(o=w(g.memoizedState,o,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Qo(r,2),o!==null&&Ng(o,r,2))},l9=function(r,g,o){r.pendingProps=e(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Ng(g,r,2)},e9=function(r,g){r.pendingProps=n(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Ng(g,r,2)},h9=function(r,g,o){r.pendingProps=w(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Qo(r,2),g!==null&&Ng(g,r,2)},b9=function(r){var g=Qo(r,2);g!==null&&Ng(g,r,2)},w9=function(r){var g=Ne(),o=Qo(r,g);o!==null&&Ng(o,r,g)},u9=function(r){O=r},i9=function(r){H=r};var p2=!0,d2=null,q8=!1,P1=null,H1=null,O1=null,m5=new Map,L5=new Map,q1=[],MQ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),s2=null;if(cu.prototype.render=S6.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):V(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=g.current,h=wv(l);B6(l,h,o,g,null,null)},cu.prototype.unmount=S6.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(lo|Av))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),B6(r.current,2,null,r,null,null),je(),g[E0]=null}},cu.prototype.unstable_scheduleHydration=function(r){if(r){var g=I();r={blockedOn:null,target:r,priority:g};for(var o=0;o<q1.length&&g!==0&&g<q1[o].priority;o++);q1.splice(o,0,r),o===0&&GA(r)}},function(){var r=Ch.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),wg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(g),r=r!==null?vr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.5"};return r.overrideHookState=g9,r.overrideHookStateDeletePath=o9,r.overrideHookStateRenamePath=v9,r.overrideProps=l9,r.overridePropsDeletePath=e9,r.overridePropsRenamePath=h9,r.scheduleUpdate=b9,r.scheduleRetry=w9,r.setErrorHandler=u9,r.setSuspenseHandler=i9,r.scheduleRefresh=_,r.scheduleRoot=L,r.setRefreshHandler=C,r.getCurrentFiber=XY,Fe(r)}()&&$l&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var n9=window.location.protocol;/^(https?|file):$/.test(n9)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(n9==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}IQ.createRoot=function(r,g){if(!V(r))throw Error("Target container is not a DOM element.");JA(r);var o=!1,l="",h=tO,b=XO,i=YO;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Yl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(h=g.onUncaughtError),g.onCaughtError!==void 0&&(b=g.onCaughtError),g.onRecoverableError!==void 0&&(i=g.onRecoverableError)),g=HA(r,1,!1,null,null,o,l,null,h,b,i,YA),r[E0]=g.current,t6(r),new S6(g)},IQ.hydrateRoot=function(r,g,o){if(!V(r))throw Error("Target container is not a DOM element.");JA(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,h="",b=tO,i=XO,P=YO,A=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(b=o.onUncaughtError),o.onCaughtError!==void 0&&(i=o.onCaughtError),o.onRecoverableError!==void 0&&(P=o.onRecoverableError),o.formState!==void 0&&(A=o.formState)),g=HA(r,1,!0,g,o!=null?o:null,l,h,A,b,i,P,YA),g.context=OA(null),o=g.current,l=wv(o),l=B1(l),h=N0(l),h.callback=null,B0(o,h,l),il(l,"hydrateRoot()",null),o=l,g.current.lanes=o,K0(g,o),tl(g),r[E0]=g.current,t6(r),new cu(g)},IQ.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var M9=Ge((pI,A9)=>{A9.exports=q9()});var rg=Ge((yz)=>{var ze=Hr(eg());(function(){function v(T){if(T==null)return null;if(typeof T==="function")return T.$$typeof===x?null:T.displayName||T.name||null;if(typeof T==="string")return T;switch(T){case C:return"Fragment";case rr:return"Profiler";case V:return"StrictMode";case p:return"Suspense";case vr:return"SuspenseList";case f:return"Activity"}if(typeof T==="object")switch(typeof T.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),T.$$typeof){case _:return"Portal";case lr:return T.displayName||"Context";case Pr:return(T._context.displayName||"Context")+".Consumer";case j:var S=T.render;return T=T.displayName,T||(T=S.displayName||S.name||"",T=T!==""?"ForwardRef("+T+")":"ForwardRef"),T;case N:return S=T.displayName||null,S!==null?S:v(T.type)||"Memo";case E:S=T._payload,T=T._init;try{return v(T(S))}catch(nr){}}return null}function e(T){return""+T}function w(T){try{e(T);var S=!1}catch(Wr){S=!0}if(S){S=console;var nr=S.error,Yr=typeof Symbol==="function"&&Symbol.toStringTag&&T[Symbol.toStringTag]||T.constructor.name||"Object";return nr.call(S,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Yr),e(T)}}function u(T){if(T===C)return"<>";if(typeof T==="object"&&T!==null&&T.$$typeof===E)return"<...>";try{var S=v(T);return S?"<"+S+">":"<...>"}catch(nr){return"<...>"}}function n(){var T=tr.A;return T===null?null:T.getOwner()}function H(){return Error("react-stack-top-frame")}function O(T){if(Mr.call(T,"key")){var S=Object.getOwnPropertyDescriptor(T,"key").get;if(S&&S.isReactWarning)return!1}return T.key!==void 0}function q(T,S){function nr(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",S))}nr.isReactWarning=!0,Object.defineProperty(T,"key",{get:nr,configurable:!0})}function G(){var T=v(this.type);return s[T]||(s[T]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),T=this.props.ref,T!==void 0?T:null}function X(T,S,nr,Yr,Wr,xr){var br=nr.ref;return T={$$typeof:L,type:T,key:S,props:nr,_owner:Yr},(br!==void 0?br:null)!==null?Object.defineProperty(T,"ref",{enumerable:!1,get:G}):Object.defineProperty(T,"ref",{enumerable:!1,value:null}),T._store={},Object.defineProperty(T._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(T,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(T,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Wr}),Object.defineProperty(T,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:xr}),Object.freeze&&(Object.freeze(T.props),Object.freeze(T)),T}function t(T,S,nr,Yr,Wr,xr){var br=S.children;if(br!==void 0)if(Yr)if(Xr(br)){for(Yr=0;Yr<br.length;Yr++)M(br[Yr]);Object.freeze&&Object.freeze(br)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else M(br);if(Mr.call(S,"key")){br=v(T);var Cr=Object.keys(S).filter(function(Rg){return Rg!=="key"});Yr=0<Cr.length?"{key: someKey, "+Cr.join(": ..., ")+": ...}":"{key: someKey}",Ar[br+Yr]||(Cr=0<Cr.length?"{"+Cr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Yr,br,Cr,br),Ar[br+Yr]=!0)}if(br=null,nr!==void 0&&(w(nr),br=""+nr),O(S)&&(w(S.key),br=""+S.key),"key"in S){nr={};for(var ar in S)ar!=="key"&&(nr[ar]=S[ar])}else nr=S;return br&&q(nr,typeof T==="function"?T.displayName||T.name||"Unknown":T),X(T,br,nr,n(),Wr,xr)}function M(T){Y(T)?T._store&&(T._store.validated=1):typeof T==="object"&&T!==null&&T.$$typeof===E&&(T._payload.status==="fulfilled"?Y(T._payload.value)&&T._payload.value._store&&(T._payload.value._store.validated=1):T._store&&(T._store.validated=1))}function Y(T){return typeof T==="object"&&T!==null&&T.$$typeof===L}var L=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),vr=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),x=Symbol.for("react.client.reference"),tr=ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Mr=Object.prototype.hasOwnProperty,Xr=Array.isArray,Zr=console.createTask?console.createTask:function(){return null};ze={react_stack_bottom_frame:function(T){return T()}};var k,s={},er=ze.react_stack_bottom_frame.bind(ze,H)(),or=Zr(u(H)),Ar={};yz.Fragment=C,yz.jsxDEV=function(T,S,nr,Yr){var Wr=1e4>tr.recentlyCreatedOwnerStacks++;return t(T,S,nr,Yr,Wr?Error("react-stack-top-frame"):er,Wr?Zr(u(T)):or)}})()});var zP=Hr(eg(),1),KP=Hr(M9(),1);var W9=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var R9=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var G9=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var t9=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var X9=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var Y9=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var J9=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var Q9=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var z9=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var K9=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var U9=W9+R9+G9+t9+X9+Y9+J9+Q9+z9+K9;var Jg=Hr(eg(),1);var vi=Hr(eg(),1);var gi=(...v)=>v.filter((e,w,u)=>{return Boolean(e)&&e.trim()!==""&&u.indexOf(e)===w}).join(" ").trim();var $9=(v)=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var m9=(v)=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,w,u)=>u?u.toUpperCase():w.toLowerCase());var R8=(v)=>{let e=m9(v);return e.charAt(0).toUpperCase()+e.slice(1)};var I5=Hr(eg(),1);var oi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var L9=(v)=>{for(let e in v)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Th=Hr(eg(),1),VQ=Th.createContext({});var I9=()=>Th.useContext(VQ);var F9=I5.forwardRef(({color:v,size:e,strokeWidth:w,absoluteStrokeWidth:u,className:n="",children:H,iconNode:O,...q},G)=>{let{size:X=24,strokeWidth:t=2,absoluteStrokeWidth:M=!1,color:Y="currentColor",className:L=""}=I9()??{},_=u??M?Number(w??t)*24/Number(e??X):w??t;return I5.createElement("svg",{ref:G,...oi,width:e??X??oi.width,height:e??X??oi.height,stroke:v??Y,strokeWidth:_,className:gi("lucide",L,n),...!H&&!L9(q)&&{"aria-hidden":"true"},...q},[...O.map(([C,V])=>I5.createElement(C,V)),...Array.isArray(H)?H:[H]])});var c=(v,e)=>{let w=vi.forwardRef(({className:u,...n},H)=>vi.createElement(F9,{ref:H,iconNode:e,className:gi(`lucide-${$9(R8(v))}`,`lucide-${v}`,u),...n}));return w.displayName=R8(v),w};var _Q=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Bl=c("braces",_Q);var EQ=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],A1=c("chart-column",EQ);var yQ=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Wo=c("code-xml",yQ);var cQ=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Zl=c("file-code-corner",cQ);var jQ=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],M1=c("layers",jQ);var fQ=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],W1=c("loader-circle",fQ);var aQ=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cv=c("triangle-alert",aQ);var pQ=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],R1=c("user-round",pQ);var dQ=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],F5=c("activity",dQ);var sQ=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],N5=c("arrow-down-to-line",sQ);var rz=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],B5=c("arrow-up-to-line",rz);var gz=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Z5=c("blocks",gz);var oz=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Xe=c("book-marked",oz);var vz=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],x5=c("book-open",vz);var lz=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],C5=c("calendar",lz);var ez=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],T5=c("check",ez);var hz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ro=c("chevron-down",hz);var bz=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],S5=c("chevron-left",bz);var wz=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],q0=c("chevron-right",wz);var uz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Wv=c("chevron-up",uz);var iz=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],k5=c("chevrons-up-down",iz);var nz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],D5=c("clock",nz);var Pz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pv=c("copy",Pz);var Hz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dv=c("database",Hz);var Oz=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ye=c("download",Oz);var qz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],V5=c("eye",qz);var Az=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Je=c("folder-open",Az);var Mz=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],_5=c("hash",Mz);var Wz=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],E5=c("link-2",Wz);var Rz=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],y5=c("list-ordered",Rz);var Gz=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],c5=c("list",Gz);var tz=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],j5=c("lock",tz);var Xz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],Sh=c("message-square-plus",Xz);var Yz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],f5=c("message-square",Yz);var Jz=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],a5=c("package",Jz);var Qz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sv=c("pencil",Qz);var zz=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],p5=c("play",zz);var Kz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],d5=c("plus",Kz);var Uz=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],s5=c("radio",Uz);var $z=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],A0=c("refresh-cw",$z);var mz=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rw=c("save",mz);var Lz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],G1=c("search",Lz);var Iz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],kh=c("shield-alert",Iz);var Fz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],gw=c("shield",Fz);var Nz=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],ow=c("syringe",Nz);var Bz=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],xl=c("terminal",Bz);var Zz=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],vw=c("toggle-left",Zz);var xz=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],lw=c("toggle-right",xz);var Cz=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Qe=c("timer",Cz);var Tz=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Uo=c("trash-2",Tz);var Sz=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],ew=c("type",Sz);var kz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],hw=c("upload",kz);var Dz=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Dh=c("user-plus",Dz);var Vz=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bw=c("wrench",Vz);var _z=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=c("x",_z);var Ez=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],M0=c("zap",Ez);var li={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Ii=Hr(eg(),1);var Qw=Hr(eg(),1);var Zg=Hr(rg(),1),cz={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},N9=({script:v,selected:e,dot:w,duration:u,onSelect:n,onEdit:H,sendToBackend:O})=>{let q=(Y)=>{Y.stopPropagation(),O({type:"update_script",id:v.id,patch:{enabled:!v.enabled}})},G=(Y)=>{Y.stopPropagation(),O({type:"duplicate_script",id:v.id})},X=(Y)=>{if(Y.stopPropagation(),!window.confirm(`Delete "${v.name}"?`))return;O({type:"delete_script",id:v.id})},t=(Y)=>{Y.stopPropagation(),H()},M=v.bindings?.length??0;return Zg.jsxDEV("div",{className:`ls-item${e?" ls-selected":""}${!v.enabled&&v.type!=="library"?" ls-disabled":""}`,onClick:n,children:[Zg.jsxDEV("span",{className:cz[w],title:w},void 0,!1,void 0,this),Zg.jsxDEV("div",{className:"ls-item-body",children:[Zg.jsxDEV("div",{className:"ls-item-name",title:v.name,children:v.name},void 0,!1,void 0,this),Zg.jsxDEV("div",{className:"ls-item-meta",children:[v.type!=="library"&&Zg.jsxDEV("span",{children:v.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),u!==void 0&&w!=="running"&&Zg.jsxDEV("span",{style:{color:w==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[u,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.type!=="library"&&M>0&&Zg.jsxDEV("div",{className:"ls-item-bindings",children:v.bindings.map((Y,L)=>Zg.jsxDEV("span",{className:"ls-binding-badge",children:[Y.type==="character"?Zg.jsxDEV(R1,{size:9},void 0,!1,void 0,this):Zg.jsxDEV(f5,{size:9},void 0,!1,void 0,this),Zg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Y.displayName},void 0,!1,void 0,this)]},L,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zg.jsxDEV("div",{className:"ls-item-actions",children:[Zg.jsxDEV("button",{className:"ls-icon-btn",onClick:t,title:"Edit script",children:Zg.jsxDEV(sv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),v.type!=="library"&&Zg.jsxDEV("button",{className:"ls-icon-btn",onClick:q,title:v.enabled?"Disable":"Enable",children:v.enabled?Zg.jsxDEV(lw,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Zg.jsxDEV(vw,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zg.jsxDEV("button",{className:"ls-icon-btn",onClick:G,title:"Duplicate",children:Zg.jsxDEV(pv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:X,title:"Delete",children:Zg.jsxDEV(Uo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var xg=Uint8Array,Rv=Uint16Array,m8=Int32Array,hi=new xg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bi=new xg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),J8=new xg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),S9=function(v,e){var w=new Rv(31);for(var u=0;u<31;++u)w[u]=e+=1<<v[u-1];var n=new m8(w[30]);for(var u=1;u<30;++u)for(var H=w[u];H<w[u+1];++H)n[H]=H-w[u]<<5|u;return{b:w,r:n}},k9=S9(hi,2),D9=k9.b,Q8=k9.r;D9[28]=258,Q8[258]=28;var V9=S9(bi,0),jz=V9.b,B9=V9.r,z8=new Rv(32768);for(gg=0;gg<32768;++gg)Cl=(gg&43690)>>1|(gg&21845)<<1,Cl=(Cl&52428)>>2|(Cl&13107)<<2,Cl=(Cl&61680)>>4|(Cl&3855)<<4,z8[gg]=((Cl&65280)>>8|(Cl&255)<<8)>>1;var Cl,gg,Sl=function(v,e,w){var u=v.length,n=0,H=new Rv(e);for(;n<u;++n)if(v[n])++H[v[n]-1];var O=new Rv(e);for(n=1;n<e;++n)O[n]=O[n-1]+H[n-1]<<1;var q;if(w){q=new Rv(1<<e);var G=15-e;for(n=0;n<u;++n)if(v[n]){var X=n<<4|v[n],t=e-v[n],M=O[v[n]-1]++<<t;for(var Y=M|(1<<t)-1;M<=Y;++M)q[z8[M]>>G]=X}}else{q=new Rv(u);for(n=0;n<u;++n)if(v[n])q[n]=z8[O[v[n]-1]++]>>15-v[n]}return q},t1=new xg(288);for(gg=0;gg<144;++gg)t1[gg]=8;var gg;for(gg=144;gg<256;++gg)t1[gg]=9;var gg;for(gg=256;gg<280;++gg)t1[gg]=7;var gg;for(gg=280;gg<288;++gg)t1[gg]=8;var gg,iw=new xg(32);for(gg=0;gg<32;++gg)iw[gg]=5;var gg,fz=Sl(t1,9,0),az=Sl(t1,9,1),pz=Sl(iw,5,0),dz=Sl(iw,5,1),G8=function(v){var e=v[0];for(var w=1;w<v.length;++w)if(v[w]>e)e=v[w];return e},rl=function(v,e,w){var u=e/8|0;return(v[u]|v[u+1]<<8)>>(e&7)&w},t8=function(v,e){var w=e/8|0;return(v[w]|v[w+1]<<8|v[w+2]<<16)>>(e&7)},L8=function(v){return(v+7)/8|0},nw=function(v,e,w){if(e==null||e<0)e=0;if(w==null||w>v.length)w=v.length;return new xg(v.subarray(e,w))};var sz=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(v,e,w){var u=Error(e||sz[v]);if(u.code=v,Error.captureStackTrace)Error.captureStackTrace(u,ko);if(!w)throw u;return u},rK=function(v,e,w,u){var n=v.length,H=u?u.length:0;if(!n||e.f&&!e.l)return w||new xg(0);var O=!w,q=O||e.i!=2,G=e.i;if(O)w=new xg(n*3);var X=function(wr){var _o=w.length;if(wr>_o){var Yo=new xg(Math.max(_o*2,wr));Yo.set(w),w=Yo}},t=e.f||0,M=e.p||0,Y=e.b||0,L=e.l,_=e.d,C=e.m,V=e.n,rr=n*8;do{if(!L){t=rl(v,M,1);var Pr=rl(v,M+1,3);if(M+=3,!Pr){var lr=L8(M)+4,j=v[lr-4]|v[lr-3]<<8,p=lr+j;if(p>n){if(G)ko(0);break}if(q)X(Y+j);w.set(v.subarray(lr,p),Y),e.b=Y+=j,e.p=M=p*8,e.f=t;continue}else if(Pr==1)L=az,_=dz,C=9,V=5;else if(Pr==2){var vr=rl(v,M,31)+257,N=rl(v,M+10,15)+4,E=vr+rl(v,M+5,31)+1;M+=14;var f=new xg(E),x=new xg(19);for(var tr=0;tr<N;++tr)x[J8[tr]]=rl(v,M+tr*3,7);M+=N*3;var Mr=G8(x),Xr=(1<<Mr)-1,Zr=Sl(x,Mr,1);for(var tr=0;tr<E;){var k=Zr[rl(v,M,Xr)];M+=k&15;var lr=k>>4;if(lr<16)f[tr++]=lr;else{var s=0,er=0;if(lr==16)er=3+rl(v,M,3),M+=2,s=f[tr-1];else if(lr==17)er=3+rl(v,M,7),M+=3;else if(lr==18)er=11+rl(v,M,127),M+=7;while(er--)f[tr++]=s}}var or=f.subarray(0,vr),Ar=f.subarray(vr);C=G8(or),V=G8(Ar),L=Sl(or,C,1),_=Sl(Ar,V,1)}else ko(1);if(M>rr){if(G)ko(0);break}}if(q)X(Y+131072);var T=(1<<C)-1,S=(1<<V)-1,nr=M;for(;;nr=M){var s=L[t8(v,M)&T],Yr=s>>4;if(M+=s&15,M>rr){if(G)ko(0);break}if(!s)ko(2);if(Yr<256)w[Y++]=Yr;else if(Yr==256){nr=M,L=null;break}else{var Wr=Yr-254;if(Yr>264){var tr=Yr-257,xr=hi[tr];Wr=rl(v,M,(1<<xr)-1)+D9[tr],M+=xr}var br=_[t8(v,M)&S],Cr=br>>4;if(!br)ko(3);M+=br&15;var Ar=jz[Cr];if(Cr>3){var xr=bi[Cr];Ar+=t8(v,M)&(1<<xr)-1,M+=xr}if(M>rr){if(G)ko(0);break}if(q)X(Y+131072);var ar=Y+Wr;if(Y<Ar){var Rg=H-Ar,mo=Math.min(Ar,ar);if(Rg+Y<0)ko(3);for(;Y<mo;++Y)w[Y]=u[Rg+Y]}for(;Y<ar;++Y)w[Y]=w[Y-Ar]}}if(e.l=L,e.p=nr,e.b=Y,e.f=t,L)t=1,e.m=C,e.d=_,e.n=V}while(!t);return Y!=w.length&&O?nw(w,0,Y):w.subarray(0,Y)},W0=function(v,e,w){w<<=e&7;var u=e/8|0;v[u]|=w,v[u+1]|=w>>8},ww=function(v,e,w){w<<=e&7;var u=e/8|0;v[u]|=w,v[u+1]|=w>>8,v[u+2]|=w>>16},X8=function(v,e){var w=[];for(var u=0;u<v.length;++u)if(v[u])w.push({s:u,f:v[u]});var n=w.length,H=w.slice();if(!n)return{t:E9,l:0};if(n==1){var O=new xg(w[0].s+1);return O[w[0].s]=1,{t:O,l:1}}w.sort(function(p,vr){return p.f-vr.f}),w.push({s:-1,f:25001});var q=w[0],G=w[1],X=0,t=1,M=2;w[0]={s:-1,f:q.f+G.f,l:q,r:G};while(t!=n-1)q=w[w[X].f<w[M].f?X++:M++],G=w[X!=t&&w[X].f<w[M].f?X++:M++],w[t++]={s:-1,f:q.f+G.f,l:q,r:G};var Y=H[0].s;for(var u=1;u<n;++u)if(H[u].s>Y)Y=H[u].s;var L=new Rv(Y+1),_=K8(w[t-1],L,0);if(_>e){var u=0,C=0,V=_-e,rr=1<<V;H.sort(function(vr,N){return L[N.s]-L[vr.s]||vr.f-N.f});for(;u<n;++u){var Pr=H[u].s;if(L[Pr]>e)C+=rr-(1<<_-L[Pr]),L[Pr]=e;else break}C>>=V;while(C>0){var lr=H[u].s;if(L[lr]<e)C-=1<<e-L[lr]++-1;else++u}for(;u>=0&&C;--u){var j=H[u].s;if(L[j]==e)--L[j],++C}_=e}return{t:new xg(L),l:_}},K8=function(v,e,w){return v.s==-1?Math.max(K8(v.l,e,w+1),K8(v.r,e,w+1)):e[v.s]=w},Z9=function(v){var e=v.length;while(e&&!v[--e]);var w=new Rv(++e),u=0,n=v[0],H=1,O=function(G){w[u++]=G};for(var q=1;q<=e;++q)if(v[q]==n&&q!=e)++H;else{if(!n&&H>2){for(;H>138;H-=138)O(32754);if(H>2)O(H>10?H-11<<5|28690:H-3<<5|12305),H=0}else if(H>3){O(n),--H;for(;H>6;H-=6)O(8304);if(H>2)O(H-3<<5|8208),H=0}while(H--)O(n);H=1,n=v[q]}return{c:w.subarray(0,u),n:e}},uw=function(v,e){var w=0;for(var u=0;u<e.length;++u)w+=v[u]*e[u];return w},_9=function(v,e,w){var u=w.length,n=L8(e+2);v[n]=u&255,v[n+1]=u>>8,v[n+2]=v[n]^255,v[n+3]=v[n+1]^255;for(var H=0;H<u;++H)v[n+H+4]=w[H];return(n+4+u)*8},x9=function(v,e,w,u,n,H,O,q,G,X,t){W0(e,t++,w),++n[256];var M=X8(n,15),Y=M.t,L=M.l,_=X8(H,15),C=_.t,V=_.l,rr=Z9(Y),Pr=rr.c,lr=rr.n,j=Z9(C),p=j.c,vr=j.n,N=new Rv(19);for(var E=0;E<Pr.length;++E)++N[Pr[E]&31];for(var E=0;E<p.length;++E)++N[p[E]&31];var f=X8(N,7),x=f.t,tr=f.l,Mr=19;for(;Mr>4&&!x[J8[Mr-1]];--Mr);var Xr=X+5<<3,Zr=uw(n,t1)+uw(H,iw)+O,k=uw(n,Y)+uw(H,C)+O+14+3*Mr+uw(N,x)+2*N[16]+3*N[17]+7*N[18];if(G>=0&&Xr<=Zr&&Xr<=k)return _9(e,t,v.subarray(G,G+X));var s,er,or,Ar;if(W0(e,t,1+(k<Zr)),t+=2,k<Zr){s=Sl(Y,L,0),er=Y,or=Sl(C,V,0),Ar=C;var T=Sl(x,tr,0);W0(e,t,lr-257),W0(e,t+5,vr-1),W0(e,t+10,Mr-4),t+=14;for(var E=0;E<Mr;++E)W0(e,t+3*E,x[J8[E]]);t+=3*Mr;var S=[Pr,p];for(var nr=0;nr<2;++nr){var Yr=S[nr];for(var E=0;E<Yr.length;++E){var Wr=Yr[E]&31;if(W0(e,t,T[Wr]),t+=x[Wr],Wr>15)W0(e,t,Yr[E]>>5&127),t+=Yr[E]>>12}}}else s=fz,er=t1,or=pz,Ar=iw;for(var E=0;E<q;++E){var xr=u[E];if(xr>255){var Wr=xr>>18&31;if(ww(e,t,s[Wr+257]),t+=er[Wr+257],Wr>7)W0(e,t,xr>>23&31),t+=hi[Wr];var br=xr&31;if(ww(e,t,or[br]),t+=Ar[br],br>3)ww(e,t,xr>>5&8191),t+=bi[br]}else ww(e,t,s[xr]),t+=er[xr]}return ww(e,t,s[256]),t+er[256]},gK=new m8([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),E9=new xg(0),oK=function(v,e,w,u,n,H){var O=H.z||v.length,q=new xg(u+O+5*(1+Math.ceil(O/7000))+n),G=q.subarray(u,q.length-n),X=H.l,t=(H.r||0)&7;if(e){if(t)G[0]=H.r>>3;var M=gK[e-1],Y=M>>13,L=M&8191,_=(1<<w)-1,C=H.p||new Rv(32768),V=H.h||new Rv(_+1),rr=Math.ceil(w/3),Pr=2*rr,lr=function(rv){return(v[rv]^v[rv+1]<<rr^v[rv+2]<<Pr)&_},j=new m8(25000),p=new Rv(288),vr=new Rv(32),N=0,E=0,f=H.i||0,x=0,tr=H.w||0,Mr=0;for(;f+2<O;++f){var Xr=lr(f),Zr=f&32767,k=V[Xr];if(C[Zr]=k,V[Xr]=Zr,tr<=f){var s=O-f;if((N>7000||x>24576)&&(s>423||!X)){t=x9(v,G,0,j,p,vr,E,x,Mr,f-Mr,t),x=N=E=0,Mr=f;for(var er=0;er<286;++er)p[er]=0;for(var er=0;er<30;++er)vr[er]=0}var or=2,Ar=0,T=L,S=Zr-k&32767;if(s>2&&Xr==lr(f-S)){var nr=Math.min(Y,s)-1,Yr=Math.min(32767,f),Wr=Math.min(258,s);while(S<=Yr&&--T&&Zr!=k){if(v[f+or]==v[f+or-S]){var xr=0;for(;xr<Wr&&v[f+xr]==v[f+xr-S];++xr);if(xr>or){if(or=xr,Ar=S,xr>nr)break;var br=Math.min(S,xr-2),Cr=0;for(var er=0;er<br;++er){var ar=f-S+er&32767,Rg=C[ar],mo=ar-Rg&32767;if(mo>Cr)Cr=mo,k=ar}}}Zr=k,k=C[Zr],S+=Zr-k&32767}}if(Ar){j[x++]=268435456|Q8[or]<<18|B9[Ar];var wr=Q8[or]&31,_o=B9[Ar]&31;E+=hi[wr]+bi[_o],++p[257+wr],++vr[_o],tr=f+or,++N}else j[x++]=v[f],++p[v[f]]}}for(f=Math.max(f,tr);f<O;++f)j[x++]=v[f],++p[v[f]];if(t=x9(v,G,X,j,p,vr,E,x,Mr,f-Mr,t),!X)H.r=t&7|G[t/8|0]<<3,t-=7,H.h=V,H.p=C,H.i=f,H.w=tr}else{for(var f=H.w||0;f<O+X;f+=65535){var Yo=f+65535;if(Yo>=O)G[t/8|0]=X,Yo=O;t=_9(G,t+1,v.subarray(f,Yo))}H.i=O}return nw(q,0,u+L8(t)+n)},vK=function(){var v=new Int32Array(256);for(var e=0;e<256;++e){var w=e,u=9;while(--u)w=(w&1&&-306674912)^w>>>1;v[e]=w}return v}(),lK=function(){var v=-1;return{p:function(e){var w=v;for(var u=0;u<e.length;++u)w=vK[w&255^e[u]]^w>>>8;v=w},d:function(){return~v}}};var eK=function(v,e,w,u,n){if(!n){if(n={l:1},e.dictionary){var H=e.dictionary.subarray(-32768),O=new xg(H.length+v.length);O.set(H),O.set(v,H.length),v=O,n.w=H.length}}return oK(v,e.level==null?6:e.level,e.mem==null?n.l?Math.ceil(Math.max(8,Math.min(13,Math.log(v.length)))*1.5):20:12+e.mem,w,u,n)},y9=function(v,e){var w={};for(var u in v)w[u]=v[u];for(var u in e)w[u]=e[u];return w};var Tl=function(v,e){return v[e]|v[e+1]<<8},gl=function(v,e){return(v[e]|v[e+1]<<8|v[e+2]<<16|v[e+3]<<24)>>>0},Y8=function(v,e){return gl(v,e)+gl(v,e+4)*4294967296},Go=function(v,e,w){for(;w;++e)v[e]=w,w>>>=8};function hK(v,e){return eK(v,e||{},0,0)}function bK(v,e){return rK(v,{i:2},e&&e.out,e&&e.dictionary)}var c9=function(v,e,w,u){for(var n in v){var H=v[n],O=e+n,q=u;if(Array.isArray(H))q=y9(u,H[1]),H=H[0];if(H instanceof xg)w[O]=[H,q];else w[O+="/"]=[new xg(0),q],c9(H,O,w,u)}},C9=typeof TextEncoder<"u"&&new TextEncoder,U8=typeof TextDecoder<"u"&&new TextDecoder,wK=0;try{U8.decode(E9,{stream:!0}),wK=1}catch(v){}var uK=function(v){for(var e="",w=0;;){var u=v[w++],n=(u>127)+(u>223)+(u>239);if(w+n>v.length)return{s:e,r:nw(v,w-1)};if(!n)e+=String.fromCharCode(u);else if(n==3)u=((u&15)<<18|(v[w++]&63)<<12|(v[w++]&63)<<6|v[w++]&63)-65536,e+=String.fromCharCode(55296|u>>10,56320|u&1023);else if(n&1)e+=String.fromCharCode((u&31)<<6|v[w++]&63);else e+=String.fromCharCode((u&15)<<12|(v[w++]&63)<<6|v[w++]&63)}};function ei(v,e){if(e){var w=new xg(v.length);for(var u=0;u<v.length;++u)w[u]=v.charCodeAt(u);return w}if(C9)return C9.encode(v);var n=v.length,H=new xg(v.length+(v.length>>1)),O=0,q=function(t){H[O++]=t};for(var u=0;u<n;++u){if(O+5>H.length){var G=new xg(O+8+(n-u<<1));G.set(H),H=G}var X=v.charCodeAt(u);if(X<128||e)q(X);else if(X<2048)q(192|X>>6),q(128|X&63);else if(X>55295&&X<57344)X=65536+(X&1047552)|v.charCodeAt(++u)&1023,q(240|X>>18),q(128|X>>12&63),q(128|X>>6&63),q(128|X&63);else q(224|X>>12),q(128|X>>6&63),q(128|X&63)}return nw(H,0,O)}function I8(v,e){if(e){var w="";for(var u=0;u<v.length;u+=16384)w+=String.fromCharCode.apply(null,v.subarray(u,u+16384));return w}else if(U8)return U8.decode(v);else{var n=uK(v),H=n.s,w=n.r;if(w.length)ko(8);return H}}var iK=function(v,e){return e+30+Tl(v,e+26)+Tl(v,e+28)},nK=function(v,e,w){var u=Tl(v,e+28),n=I8(v.subarray(e+46,e+46+u),!(Tl(v,e+8)&2048)),H=e+46+u,O=gl(v,e+20),q=w&&O==4294967295?PK(v,H):[O,gl(v,e+24),gl(v,e+42)],G=q[0],X=q[1],t=q[2];return[Tl(v,e+10),G,X,n,H+Tl(v,e+30)+Tl(v,e+32),t]},PK=function(v,e){for(;Tl(v,e)!=1;e+=4+Tl(v,e+2));return[Y8(v,e+12),Y8(v,e+4),Y8(v,e+20)]},$8=function(v){var e=0;if(v)for(var w in v){var u=v[w].length;if(u>65535)ko(9);e+=u+4}return e},T9=function(v,e,w,u,n,H,O,q){var G=u.length,X=w.extra,t=q&&q.length,M=$8(X);if(Go(v,e,O!=null?33639248:67324752),e+=4,O!=null)v[e++]=20,v[e++]=w.os;v[e]=20,e+=2,v[e++]=w.flag<<1|(H<0&&8),v[e++]=n&&8,v[e++]=w.compression&255,v[e++]=w.compression>>8;var Y=new Date(w.mtime==null?Date.now():w.mtime),L=Y.getFullYear()-1980;if(L<0||L>119)ko(10);if(Go(v,e,L<<25|Y.getMonth()+1<<21|Y.getDate()<<16|Y.getHours()<<11|Y.getMinutes()<<5|Y.getSeconds()>>1),e+=4,H!=-1)Go(v,e,w.crc),Go(v,e+4,H<0?-H-2:H),Go(v,e+8,w.size);if(Go(v,e+12,G),Go(v,e+14,M),e+=16,O!=null)Go(v,e,t),Go(v,e+6,w.attrs),Go(v,e+10,O),e+=14;if(v.set(u,e),e+=G,M)for(var _ in X){var C=X[_],V=C.length;Go(v,e,+_),Go(v,e+2,V),v.set(C,e+4),e+=4+V}if(t)v.set(q,e),e+=t;return e},HK=function(v,e,w,u,n){Go(v,e,101010256),Go(v,e+8,w),Go(v,e+10,w),Go(v,e+12,u),Go(v,e+16,n)};function j9(v,e){if(!e)e={};var w={},u=[];c9(v,"",w,e);var n=0,H=0;for(var O in w){var q=w[O],G=q[0],X=q[1],t=X.level==0?0:8,M=ei(O),Y=M.length,L=X.comment,_=L&&ei(L),C=_&&_.length,V=$8(X.extra);if(Y>65535)ko(11);var rr=t?hK(G,X):G,Pr=rr.length,lr=lK();lr.p(G),u.push(y9(X,{size:G.length,crc:lr.d(),c:rr,f:M,m:_,u:Y!=O.length||_&&L.length!=C,o:n,compression:t})),n+=30+Y+V+Pr,H+=76+2*(Y+V)+(C||0)+Pr}var j=new xg(H+22),p=n,vr=H-n;for(var N=0;N<u.length;++N){var M=u[N];T9(j,M.o,M,M.f,M.u,M.c.length);var E=30+M.f.length+$8(M.extra);j.set(M.c,M.o+E),T9(j,n,M,M.f,M.u,M.c.length,M.o,M.m),n+=16+E+(M.m?M.m.length:0)}return HK(j,n,u.length,vr,p),j}function f9(v,e){var w={},u=v.length-22;for(;gl(v,u)!=101010256;--u)if(!u||v.length-u>65558)ko(13);var n=Tl(v,u+8);if(!n)return{};var H=gl(v,u+16),O=H==4294967295||n==65535;if(O){var q=gl(v,u-12);if(O=gl(v,q)==101075792,O)n=gl(v,q+32),H=gl(v,q+48)}var G=e&&e.filter;for(var X=0;X<n;++X){var t=nK(v,H,O),M=t[0],Y=t[1],L=t[2],_=t[3],C=t[4],V=t[5],rr=iK(v,V);if(H=C,!G||G({name:_,size:Y,originalSize:L,compression:M}))if(!M)w[_]=nw(v,rr,rr+Y);else if(M==8)w[_]=bK(v.subarray(rr,rr+Y),{out:new xg(L)});else ko(14,"unknown compression type "+M)}return w}function F8(v){let e=v.map((u)=>({name:u.name,code:u.code,type:u.type,triggers:u.triggers,bindings:u.bindings,folder:u.folder,metadata:u.metadata})),w={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:e};return j9({"pack.json":ei(JSON.stringify(w,null,2))})}function a9(v,e){let w=F8(v),u=new Blob([w.buffer],{type:"application/zip"}),n=URL.createObjectURL(u),H=document.createElement("a");H.href=n,H.download=`${e}.lumiscript.zip`,H.click(),URL.revokeObjectURL(n)}var p9;function y(v,e,w){function u(q,G){if(!q._zod)Object.defineProperty(q,"_zod",{value:{def:G,constr:O,traits:new Set},enumerable:!1});if(q._zod.traits.has(v))return;q._zod.traits.add(v),e(q,G);let X=O.prototype,t=Object.keys(X);for(let M=0;M<t.length;M++){let Y=t[M];if(!(Y in q))q[Y]=X[Y].bind(q)}}let n=w?.Parent??Object;class H extends n{}Object.defineProperty(H,"name",{value:v});function O(q){var G;let X=w?.Parent?new H:this;u(X,q),(G=X._zod).deferred??(G.deferred=[]);for(let t of X._zod.deferred)t();return X}return Object.defineProperty(O,"init",{value:u}),Object.defineProperty(O,Symbol.hasInstance,{value:(q)=>{if(w?.Parent&&q instanceof w.Parent)return!0;return q?._zod?.traits?.has(v)}}),Object.defineProperty(O,"name",{value:v}),O}var G_g=Symbol("zod_brand");class R0 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Pw extends Error{constructor(v){super(`Encountered unidirectional transform during encode: ${v}`);this.name="ZodEncodeError"}}(p9=globalThis).__zod_globalConfig??(p9.__zod_globalConfig={});var Vh=globalThis.__zod_globalConfig;function G0(v){if(v)Object.assign(Vh,v);return Vh}var Og={};UQ(Og,{unwrapMessage:()=>Hw,uint8ArrayToHex:()=>SK,uint8ArrayToBase64url:()=>CK,uint8ArrayToBase64:()=>bR,stringifyPrimitive:()=>oR,slugify:()=>B8,shallowClone:()=>rR,safeExtend:()=>LK,required:()=>NK,randomString:()=>JK,propertyKeyTypes:()=>x8,promiseAllObject:()=>YK,primitiveTypes:()=>gR,prefixIssues:()=>Ww,pick:()=>UK,partial:()=>FK,parsedType:()=>BK,optionalKeys:()=>C8,omit:()=>$K,objectClone:()=>GK,numKeys:()=>QK,nullish:()=>Aw,normalizeParams:()=>_r,mergeDefs:()=>t0,merge:()=>IK,jsonStringifyReplacer:()=>Eh,joinValues:()=>RK,issue:()=>yh,isPlainObject:()=>Ke,isObject:()=>_h,hexToUint8Array:()=>TK,getSizableOrigin:()=>eR,getParsedType:()=>zK,getLengthableOrigin:()=>Rw,getEnumValues:()=>Ow,getElementAtPath:()=>XK,floatSafeRemainder:()=>s9,finalizeIssue:()=>kl,extend:()=>mK,explicitlyAborted:()=>T8,escapeRegex:()=>X0,esc:()=>wi,defineLazy:()=>Pg,createTransparentProxy:()=>KK,cloneDef:()=>tK,clone:()=>ol,cleanRegex:()=>Mw,cleanEnum:()=>ZK,captureStackTrace:()=>ui,cached:()=>qw,base64urlToUint8Array:()=>xK,base64ToUint8Array:()=>hR,assignProp:()=>X1,assertNotEqual:()=>qK,assertNever:()=>MK,assertIs:()=>AK,assertEqual:()=>OK,assert:()=>WK,allowsEval:()=>Z8,aborted:()=>Y1,NUMBER_FORMAT_RANGES:()=>vR,Class:()=>wR,BIGINT_FORMAT_RANGES:()=>lR});function OK(v){return v}function qK(v){return v}function AK(v){}function MK(v){throw Error("Unexpected value in exhaustive check")}function WK(v){}function Ow(v){let e=Object.values(v).filter((u)=>typeof u==="number");return Object.entries(v).filter(([u,n])=>e.indexOf(+u)===-1).map(([u,n])=>n)}function RK(v,e="|"){return v.map((w)=>oR(w)).join(e)}function Eh(v,e){if(typeof e==="bigint")return e.toString();return e}function qw(v){return{get value(){{let w=v();return Object.defineProperty(this,"value",{value:w}),w}throw Error("cached value already set")}}}function Aw(v){return v===null||v===void 0}function Mw(v){let e=v.startsWith("^")?1:0,w=v.endsWith("$")?v.length-1:v.length;return v.slice(e,w)}function s9(v,e){let w=v/e,u=Math.round(w),n=Number.EPSILON*Math.max(Math.abs(w),1);if(Math.abs(w-u)<n)return 0;return w-u}var d9=Symbol("evaluating");function Pg(v,e,w){let u=void 0;Object.defineProperty(v,e,{get(){if(u===d9)return;if(u===void 0)u=d9,u=w();return u},set(n){Object.defineProperty(v,e,{value:n})},configurable:!0})}function GK(v){return Object.create(Object.getPrototypeOf(v),Object.getOwnPropertyDescriptors(v))}function X1(v,e,w){Object.defineProperty(v,e,{value:w,writable:!0,enumerable:!0,configurable:!0})}function t0(...v){let e={};for(let w of v){let u=Object.getOwnPropertyDescriptors(w);Object.assign(e,u)}return Object.defineProperties({},e)}function tK(v){return t0(v._zod.def)}function XK(v,e){if(!e)return v;return e.reduce((w,u)=>w?.[u],v)}function YK(v){let e=Object.keys(v),w=e.map((u)=>v[u]);return Promise.all(w).then((u)=>{let n={};for(let H=0;H<e.length;H++)n[e[H]]=u[H];return n})}function JK(v=10){let w="";for(let u=0;u<v;u++)w+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return w}function wi(v){return JSON.stringify(v)}function B8(v){return v.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var ui="captureStackTrace"in Error?Error.captureStackTrace:(...v)=>{};function _h(v){return typeof v==="object"&&v!==null&&!Array.isArray(v)}var Z8=qw(()=>{if(Vh.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(v){return!1}});function Ke(v){if(_h(v)===!1)return!1;let e=v.constructor;if(e===void 0)return!0;if(typeof e!=="function")return!0;let w=e.prototype;if(_h(w)===!1)return!1;if(Object.prototype.hasOwnProperty.call(w,"isPrototypeOf")===!1)return!1;return!0}function rR(v){if(Ke(v))return{...v};if(Array.isArray(v))return[...v];if(v instanceof Map)return new Map(v);if(v instanceof Set)return new Set(v);return v}function QK(v){let e=0;for(let w in v)if(Object.prototype.hasOwnProperty.call(v,w))e++;return e}var zK=(v)=>{let e=typeof v;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(v)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(v))return"array";if(v===null)return"null";if(v.then&&typeof v.then==="function"&&v.catch&&typeof v.catch==="function")return"promise";if(typeof Map<"u"&&v instanceof Map)return"map";if(typeof Set<"u"&&v instanceof Set)return"set";if(typeof Date<"u"&&v instanceof Date)return"date";if(typeof File<"u"&&v instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${e}`)}},x8=new Set(["string","number","symbol"]),gR=new Set(["string","number","bigint","boolean","symbol","undefined"]);function X0(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ol(v,e,w){let u=new v._zod.constr(e??v._zod.def);if(!e||w?.parent)u._zod.parent=v;return u}function _r(v){let e=v;if(!e)return{};if(typeof e==="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");e.error=e.message}if(delete e.message,typeof e.error==="string")return{...e,error:()=>e.error};return e}function KK(v){let e;return new Proxy({},{get(w,u,n){return e??(e=v()),Reflect.get(e,u,n)},set(w,u,n,H){return e??(e=v()),Reflect.set(e,u,n,H)},has(w,u){return e??(e=v()),Reflect.has(e,u)},deleteProperty(w,u){return e??(e=v()),Reflect.deleteProperty(e,u)},ownKeys(w){return e??(e=v()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(w,u){return e??(e=v()),Reflect.getOwnPropertyDescriptor(e,u)},defineProperty(w,u,n){return e??(e=v()),Reflect.defineProperty(e,u,n)}})}function oR(v){if(typeof v==="bigint")return v.toString()+"n";if(typeof v==="string")return`"${v}"`;return`${v}`}function C8(v){return Object.keys(v).filter((e)=>{return v[e]._zod.optin==="optional"&&v[e]._zod.optout==="optional"})}var vR={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},lR={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function UK(v,e){let w=v._zod.def,u=w.checks;if(u&&u.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let H=t0(v._zod.def,{get shape(){let O={};for(let q in e){if(!(q in w.shape))throw Error(`Unrecognized key: "${q}"`);if(!e[q])continue;O[q]=w.shape[q]}return X1(this,"shape",O),O},checks:[]});return ol(v,H)}function $K(v,e){let w=v._zod.def,u=w.checks;if(u&&u.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let H=t0(v._zod.def,{get shape(){let O={...v._zod.def.shape};for(let q in e){if(!(q in w.shape))throw Error(`Unrecognized key: "${q}"`);if(!e[q])continue;delete O[q]}return X1(this,"shape",O),O},checks:[]});return ol(v,H)}function mK(v,e){if(!Ke(e))throw Error("Invalid input to extend: expected a plain object");let w=v._zod.def.checks;if(w&&w.length>0){let H=v._zod.def.shape;for(let O in e)if(Object.getOwnPropertyDescriptor(H,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let n=t0(v._zod.def,{get shape(){let H={...v._zod.def.shape,...e};return X1(this,"shape",H),H}});return ol(v,n)}function LK(v,e){if(!Ke(e))throw Error("Invalid input to safeExtend: expected a plain object");let w=t0(v._zod.def,{get shape(){let u={...v._zod.def.shape,...e};return X1(this,"shape",u),u}});return ol(v,w)}function IK(v,e){if(v._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let w=t0(v._zod.def,{get shape(){let u={...v._zod.def.shape,...e._zod.def.shape};return X1(this,"shape",u),u},get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ol(v,w)}function FK(v,e,w){let n=e._zod.def.checks;if(n&&n.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=t0(e._zod.def,{get shape(){let q=e._zod.def.shape,G={...q};if(w)for(let X in w){if(!(X in q))throw Error(`Unrecognized key: "${X}"`);if(!w[X])continue;G[X]=v?new v({type:"optional",innerType:q[X]}):q[X]}else for(let X in q)G[X]=v?new v({type:"optional",innerType:q[X]}):q[X];return X1(this,"shape",G),G},checks:[]});return ol(e,O)}function NK(v,e,w){let u=t0(e._zod.def,{get shape(){let n=e._zod.def.shape,H={...n};if(w)for(let O in w){if(!(O in H))throw Error(`Unrecognized key: "${O}"`);if(!w[O])continue;H[O]=new v({type:"nonoptional",innerType:n[O]})}else for(let O in n)H[O]=new v({type:"nonoptional",innerType:n[O]});return X1(this,"shape",H),H}});return ol(e,u)}function Y1(v,e=0){if(v.aborted===!0)return!0;for(let w=e;w<v.issues.length;w++)if(v.issues[w]?.continue!==!0)return!0;return!1}function T8(v,e=0){if(v.aborted===!0)return!0;for(let w=e;w<v.issues.length;w++)if(v.issues[w]?.continue===!1)return!0;return!1}function Ww(v,e){return e.map((w)=>{var u;return(u=w).path??(u.path=[]),w.path.unshift(v),w})}function Hw(v){return typeof v==="string"?v:v?.message}function kl(v,e,w){let u=v.message?v.message:Hw(v.inst?._zod.def?.error?.(v))??Hw(e?.error?.(v))??Hw(w.customError?.(v))??Hw(w.localeError?.(v))??"Invalid input",{inst:n,continue:H,input:O,...q}=v;if(q.path??(q.path=[]),q.message=u,e?.reportInput)q.input=O;return q}function eR(v){if(v instanceof Set)return"set";if(v instanceof Map)return"map";if(v instanceof File)return"file";return"unknown"}function Rw(v){if(Array.isArray(v))return"array";if(typeof v==="string")return"string";return"unknown"}function BK(v){let e=typeof v;switch(e){case"number":return Number.isNaN(v)?"nan":"number";case"object":{if(v===null)return"null";if(Array.isArray(v))return"array";let w=v;if(w&&Object.getPrototypeOf(w)!==Object.prototype&&"constructor"in w&&w.constructor)return w.constructor.name}}return e}function yh(...v){let[e,w,u]=v;if(typeof e==="string")return{message:e,code:"custom",input:w,inst:u};return{...e}}function ZK(v){return Object.entries(v).filter(([e,w])=>{return Number.isNaN(Number.parseInt(e,10))}).map((e)=>e[1])}function hR(v){let e=atob(v),w=new Uint8Array(e.length);for(let u=0;u<e.length;u++)w[u]=e.charCodeAt(u);return w}function bR(v){let e="";for(let w=0;w<v.length;w++)e+=String.fromCharCode(v[w]);return btoa(e)}function xK(v){let e=v.replace(/-/g,"+").replace(/_/g,"/"),w="=".repeat((4-e.length%4)%4);return hR(e+w)}function CK(v){return bR(v).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function TK(v){let e=v.replace(/^0x/,"");if(e.length%2!==0)throw Error("Invalid hex string length");let w=new Uint8Array(e.length/2);for(let u=0;u<e.length;u+=2)w[u/2]=Number.parseInt(e.slice(u,u+2),16);return w}function SK(v){return Array.from(v).map((e)=>e.toString(16).padStart(2,"0")).join("")}class wR{constructor(...v){}}var uR=(v,e)=>{v.name="$ZodError",Object.defineProperty(v,"_zod",{value:v._zod,enumerable:!1}),Object.defineProperty(v,"issues",{value:e,enumerable:!1}),v.message=JSON.stringify(e,Eh,2),Object.defineProperty(v,"toString",{value:()=>v.message,enumerable:!1})},ii=y("$ZodError",uR),S8=y("$ZodError",uR,{Parent:Error});function iR(v,e=(w)=>w.message){let w={},u=[];for(let n of v.issues)if(n.path.length>0)w[n.path[0]]=w[n.path[0]]||[],w[n.path[0]].push(e(n));else u.push(e(n));return{formErrors:u,fieldErrors:w}}function nR(v,e=(w)=>w.message){let w={_errors:[]},u=(n,H=[])=>{for(let O of n.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((q)=>u({issues:q},[...H,...O.path]));else if(O.code==="invalid_key")u({issues:O.issues},[...H,...O.path]);else if(O.code==="invalid_element")u({issues:O.issues},[...H,...O.path]);else{let q=[...H,...O.path];if(q.length===0)w._errors.push(e(O));else{let G=w,X=0;while(X<q.length){let t=q[X];if(X!==q.length-1)G[t]=G[t]||{_errors:[]};else G[t]=G[t]||{_errors:[]},G[t]._errors.push(e(O));G=G[t],X++}}}};return u(v),w}var ni=(v)=>(e,w,u,n)=>{let H=u?{...u,async:!1}:{async:!1},O=e._zod.run({value:w,issues:[]},H);if(O instanceof Promise)throw new R0;if(O.issues.length){let q=new(n?.Err??v)(O.issues.map((G)=>kl(G,H,G0())));throw ui(q,n?.callee),q}return O.value};var Pi=(v)=>async(e,w,u,n)=>{let H=u?{...u,async:!0}:{async:!0},O=e._zod.run({value:w,issues:[]},H);if(O instanceof Promise)O=await O;if(O.issues.length){let q=new(n?.Err??v)(O.issues.map((G)=>kl(G,H,G0())));throw ui(q,n?.callee),q}return O.value};var Gw=(v)=>(e,w,u)=>{let n=u?{...u,async:!1}:{async:!1},H=e._zod.run({value:w,issues:[]},n);if(H instanceof Promise)throw new R0;return H.issues.length?{success:!1,error:new(v??ii)(H.issues.map((O)=>kl(O,n,G0())))}:{success:!0,data:H.value}},PR=Gw(S8),tw=(v)=>async(e,w,u)=>{let n=u?{...u,async:!0}:{async:!0},H=e._zod.run({value:w,issues:[]},n);if(H instanceof Promise)H=await H;return H.issues.length?{success:!1,error:new v(H.issues.map((O)=>kl(O,n,G0())))}:{success:!0,data:H.value}},HR=tw(S8),OR=(v)=>(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return ni(v)(e,w,n)};var qR=(v)=>(e,w,u)=>{return ni(v)(e,w,u)};var AR=(v)=>async(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return Pi(v)(e,w,n)};var MR=(v)=>async(e,w,u)=>{return Pi(v)(e,w,u)};var WR=(v)=>(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return Gw(v)(e,w,n)};var RR=(v)=>(e,w,u)=>{return Gw(v)(e,w,u)};var GR=(v)=>async(e,w,u)=>{let n=u?{...u,direction:"backward"}:{direction:"backward"};return tw(v)(e,w,n)};var tR=(v)=>async(e,w,u)=>{return tw(v)(e,w,u)};var XR=/^[cC][0-9a-z]{6,}$/,YR=/^[0-9a-z]+$/,JR=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,QR=/^[0-9a-vA-V]{20}$/,zR=/^[A-Za-z0-9]{27}$/,KR=/^[a-zA-Z0-9_-]{21}$/,UR=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var $R=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,k8=(v)=>{if(!v)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${v}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var mR=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var DK="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function LR(){return new RegExp(DK,"u")}var IR=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,FR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var NR=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,BR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ZR=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,D8=/^[A-Za-z0-9_-]*$/;var xR=/^https?$/,CR=/^\+[1-9]\d{6,14}$/,TR="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",SR=new RegExp(`^${TR}$`);function kR(v){return typeof v.precision==="number"?v.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":v.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${v.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function DR(v){return new RegExp(`^${kR(v)}$`)}function VR(v){let e=kR({precision:v.precision}),w=["Z"];if(v.local)w.push("");if(v.offset)w.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let u=`${e}(?:${w.join("|")})`;return new RegExp(`^${TR}T(?:${u})$`)}var _R=(v)=>{let e=v?`[\\s\\S]{${v?.minimum??0},${v?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var ER=/^[^A-Z]*$/,yR=/^[^a-z]*$/;var Gv=y("$ZodCheck",(v,e)=>{var w;v._zod??(v._zod={}),v._zod.def=e,(w=v._zod).onattach??(w.onattach=[])});var cR=y("$ZodCheckMaxLength",(v,e)=>{var w;Gv.init(v,e),(w=v._zod.def).when??(w.when=(u)=>{let n=u.value;return!Aw(n)&&n.length!==void 0}),v._zod.onattach.push((u)=>{let n=u._zod.bag.maximum??Number.POSITIVE_INFINITY;if(e.maximum<n)u._zod.bag.maximum=e.maximum}),v._zod.check=(u)=>{let n=u.value;if(n.length<=e.maximum)return;let O=Rw(n);u.issues.push({origin:O,code:"too_big",maximum:e.maximum,inclusive:!0,input:n,inst:v,continue:!e.abort})}}),jR=y("$ZodCheckMinLength",(v,e)=>{var w;Gv.init(v,e),(w=v._zod.def).when??(w.when=(u)=>{let n=u.value;return!Aw(n)&&n.length!==void 0}),v._zod.onattach.push((u)=>{let n=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(e.minimum>n)u._zod.bag.minimum=e.minimum}),v._zod.check=(u)=>{let n=u.value;if(n.length>=e.minimum)return;let O=Rw(n);u.issues.push({origin:O,code:"too_small",minimum:e.minimum,inclusive:!0,input:n,inst:v,continue:!e.abort})}}),fR=y("$ZodCheckLengthEquals",(v,e)=>{var w;Gv.init(v,e),(w=v._zod.def).when??(w.when=(u)=>{let n=u.value;return!Aw(n)&&n.length!==void 0}),v._zod.onattach.push((u)=>{let n=u._zod.bag;n.minimum=e.length,n.maximum=e.length,n.length=e.length}),v._zod.check=(u)=>{let n=u.value,H=n.length;if(H===e.length)return;let O=Rw(n),q=H>e.length;u.issues.push({origin:O,...q?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:u.value,inst:v,continue:!e.abort})}}),Xw=y("$ZodCheckStringFormat",(v,e)=>{var w,u;if(Gv.init(v,e),v._zod.onattach.push((n)=>{let H=n._zod.bag;if(H.format=e.format,e.pattern)H.patterns??(H.patterns=new Set),H.patterns.add(e.pattern)}),e.pattern)(w=v._zod).check??(w.check=(n)=>{if(e.pattern.lastIndex=0,e.pattern.test(n.value))return;n.issues.push({origin:"string",code:"invalid_format",format:e.format,input:n.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:v,continue:!e.abort})});else(u=v._zod).check??(u.check=()=>{})}),aR=y("$ZodCheckRegex",(v,e)=>{Xw.init(v,e),v._zod.check=(w)=>{if(e.pattern.lastIndex=0,e.pattern.test(w.value))return;w.issues.push({origin:"string",code:"invalid_format",format:"regex",input:w.value,pattern:e.pattern.toString(),inst:v,continue:!e.abort})}}),pR=y("$ZodCheckLowerCase",(v,e)=>{e.pattern??(e.pattern=ER),Xw.init(v,e)}),dR=y("$ZodCheckUpperCase",(v,e)=>{e.pattern??(e.pattern=yR),Xw.init(v,e)}),sR=y("$ZodCheckIncludes",(v,e)=>{Gv.init(v,e);let w=X0(e.includes),u=new RegExp(typeof e.position==="number"?`^.{${e.position}}${w}`:w);e.pattern=u,v._zod.onattach.push((n)=>{let H=n._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(u)}),v._zod.check=(n)=>{if(n.value.includes(e.includes,e.position))return;n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:n.value,inst:v,continue:!e.abort})}}),r7=y("$ZodCheckStartsWith",(v,e)=>{Gv.init(v,e);let w=new RegExp(`^${X0(e.prefix)}.*`);e.pattern??(e.pattern=w),v._zod.onattach.push((u)=>{let n=u._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),v._zod.check=(u)=>{if(u.value.startsWith(e.prefix))return;u.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:u.value,inst:v,continue:!e.abort})}}),g7=y("$ZodCheckEndsWith",(v,e)=>{Gv.init(v,e);let w=new RegExp(`.*${X0(e.suffix)}$`);e.pattern??(e.pattern=w),v._zod.onattach.push((u)=>{let n=u._zod.bag;n.patterns??(n.patterns=new Set),n.patterns.add(w)}),v._zod.check=(u)=>{if(u.value.endsWith(e.suffix))return;u.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:u.value,inst:v,continue:!e.abort})}});var o7=y("$ZodCheckOverwrite",(v,e)=>{Gv.init(v,e),v._zod.check=(w)=>{w.value=e.tx(w.value)}});class V8{constructor(v=[]){if(this.content=[],this.indent=0,this)this.args=v}indented(v){this.indent+=1,v(this),this.indent-=1}write(v){if(typeof v==="function"){v(this,{execution:"sync"}),v(this,{execution:"async"});return}let w=v.split(`
`).filter((H)=>H),u=Math.min(...w.map((H)=>H.length-H.trimStart().length)),n=w.map((H)=>H.slice(u)).map((H)=>" ".repeat(this.indent*2)+H);for(let H of n)this.content.push(H)}compile(){let v=Function,e=this?.args,u=[...(this?.content??[""]).map((n)=>`  ${n}`)];return new v(...e,u.join(`
`))}}var l7={major:4,minor:4,patch:2};var _g=y("$ZodType",(v,e)=>{var w;v??(v={}),v._zod.def=e,v._zod.bag=v._zod.bag||{},v._zod.version=l7;let u=[...v._zod.def.checks??[]];if(v._zod.traits.has("$ZodCheck"))u.unshift(v);for(let n of u)for(let H of n._zod.onattach)H(v);if(u.length===0)(w=v._zod).deferred??(w.deferred=[]),v._zod.deferred?.push(()=>{v._zod.run=v._zod.parse});else{let n=(O,q,G)=>{let X=Y1(O),t;for(let M of q){if(M._zod.def.when){if(T8(O))continue;if(!M._zod.def.when(O))continue}else if(X)continue;let Y=O.issues.length,L=M._zod.check(O);if(L instanceof Promise&&G?.async===!1)throw new R0;if(t||L instanceof Promise)t=(t??Promise.resolve()).then(async()=>{if(await L,O.issues.length===Y)return;if(!X)X=Y1(O,Y)});else{if(O.issues.length===Y)continue;if(!X)X=Y1(O,Y)}}if(t)return t.then(()=>{return O});return O},H=(O,q,G)=>{if(Y1(O))return O.aborted=!0,O;let X=n(q,u,G);if(X instanceof Promise){if(G.async===!1)throw new R0;return X.then((t)=>v._zod.parse(t,G))}return v._zod.parse(X,G)};v._zod.run=(O,q)=>{if(q.skipChecks)return v._zod.parse(O,q);if(q.direction==="backward"){let X=v._zod.parse({value:O.value,issues:[]},{...q,skipChecks:!0});if(X instanceof Promise)return X.then((t)=>{return H(t,O,q)});return H(X,O,q)}let G=v._zod.parse(O,q);if(G instanceof Promise){if(q.async===!1)throw new R0;return G.then((X)=>n(X,u,q))}return n(G,u,q)}}Pg(v,"~standard",()=>({validate:(n)=>{try{let H=PR(v,n);return H.success?{value:H.data}:{issues:H.error?.issues}}catch(H){return HR(v,n).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),Ai=y("$ZodString",(v,e)=>{_g.init(v,e),v._zod.pattern=[...v?._zod.bag?.patterns??[]].pop()??_R(v._zod.bag),v._zod.parse=(w,u)=>{if(e.coerce)try{w.value=String(w.value)}catch(n){}if(typeof w.value==="string")return w;return w.issues.push({expected:"string",code:"invalid_type",input:w.value,inst:v}),w}}),mg=y("$ZodStringFormat",(v,e)=>{Xw.init(v,e),Ai.init(v,e)}),H7=y("$ZodGUID",(v,e)=>{e.pattern??(e.pattern=$R),mg.init(v,e)}),O7=y("$ZodUUID",(v,e)=>{if(e.version){let u={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(u===void 0)throw Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=k8(u))}else e.pattern??(e.pattern=k8());mg.init(v,e)}),q7=y("$ZodEmail",(v,e)=>{e.pattern??(e.pattern=mR),mg.init(v,e)}),A7=y("$ZodURL",(v,e)=>{mg.init(v,e),v._zod.check=(w)=>{try{let u=w.value.trim();if(!e.normalize&&e.protocol?.source===xR.source){if(!/^https?:\/\//i.test(u)){w.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:w.value,inst:v,continue:!e.abort});return}}let n=new URL(u);if(e.hostname){if(e.hostname.lastIndex=0,!e.hostname.test(n.hostname))w.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:w.value,inst:v,continue:!e.abort})}if(e.protocol){if(e.protocol.lastIndex=0,!e.protocol.test(n.protocol.endsWith(":")?n.protocol.slice(0,-1):n.protocol))w.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:w.value,inst:v,continue:!e.abort})}if(e.normalize)w.value=n.href;else w.value=u;return}catch(u){w.issues.push({code:"invalid_format",format:"url",input:w.value,inst:v,continue:!e.abort})}}}),M7=y("$ZodEmoji",(v,e)=>{e.pattern??(e.pattern=LR()),mg.init(v,e)}),W7=y("$ZodNanoID",(v,e)=>{e.pattern??(e.pattern=KR),mg.init(v,e)}),R7=y("$ZodCUID",(v,e)=>{e.pattern??(e.pattern=XR),mg.init(v,e)}),G7=y("$ZodCUID2",(v,e)=>{e.pattern??(e.pattern=YR),mg.init(v,e)}),t7=y("$ZodULID",(v,e)=>{e.pattern??(e.pattern=JR),mg.init(v,e)}),X7=y("$ZodXID",(v,e)=>{e.pattern??(e.pattern=QR),mg.init(v,e)}),Y7=y("$ZodKSUID",(v,e)=>{e.pattern??(e.pattern=zR),mg.init(v,e)}),J7=y("$ZodISODateTime",(v,e)=>{e.pattern??(e.pattern=VR(e)),mg.init(v,e)}),Q7=y("$ZodISODate",(v,e)=>{e.pattern??(e.pattern=SR),mg.init(v,e)}),z7=y("$ZodISOTime",(v,e)=>{e.pattern??(e.pattern=DR(e)),mg.init(v,e)}),K7=y("$ZodISODuration",(v,e)=>{e.pattern??(e.pattern=UR),mg.init(v,e)}),U7=y("$ZodIPv4",(v,e)=>{e.pattern??(e.pattern=IR),mg.init(v,e),v._zod.bag.format="ipv4"}),$7=y("$ZodIPv6",(v,e)=>{e.pattern??(e.pattern=FR),mg.init(v,e),v._zod.bag.format="ipv6",v._zod.check=(w)=>{try{new URL(`http://[${w.value}]`)}catch{w.issues.push({code:"invalid_format",format:"ipv6",input:w.value,inst:v,continue:!e.abort})}}});var m7=y("$ZodCIDRv4",(v,e)=>{e.pattern??(e.pattern=NR),mg.init(v,e)}),L7=y("$ZodCIDRv6",(v,e)=>{e.pattern??(e.pattern=BR),mg.init(v,e),v._zod.check=(w)=>{let u=w.value.split("/");try{if(u.length!==2)throw Error();let[n,H]=u;if(!H)throw Error();let O=Number(H);if(`${O}`!==H)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${n}]`)}catch{w.issues.push({code:"invalid_format",format:"cidrv6",input:w.value,inst:v,continue:!e.abort})}}});function I7(v){if(v==="")return!0;if(/\s/.test(v))return!1;if(v.length%4!==0)return!1;try{return atob(v),!0}catch{return!1}}var F7=y("$ZodBase64",(v,e)=>{e.pattern??(e.pattern=ZR),mg.init(v,e),v._zod.bag.contentEncoding="base64",v._zod.check=(w)=>{if(I7(w.value))return;w.issues.push({code:"invalid_format",format:"base64",input:w.value,inst:v,continue:!e.abort})}});function VK(v){if(!D8.test(v))return!1;let e=v.replace(/[-_]/g,(u)=>u==="-"?"+":"/"),w=e.padEnd(Math.ceil(e.length/4)*4,"=");return I7(w)}var N7=y("$ZodBase64URL",(v,e)=>{e.pattern??(e.pattern=D8),mg.init(v,e),v._zod.bag.contentEncoding="base64url",v._zod.check=(w)=>{if(VK(w.value))return;w.issues.push({code:"invalid_format",format:"base64url",input:w.value,inst:v,continue:!e.abort})}}),B7=y("$ZodE164",(v,e)=>{e.pattern??(e.pattern=CR),mg.init(v,e)});function _K(v,e=null){try{let w=v.split(".");if(w.length!==3)return!1;let[u]=w;if(!u)return!1;let n=JSON.parse(atob(u));if("typ"in n&&n?.typ!=="JWT")return!1;if(!n.alg)return!1;if(e&&(!("alg"in n)||n.alg!==e))return!1;return!0}catch{return!1}}var Z7=y("$ZodJWT",(v,e)=>{mg.init(v,e),v._zod.check=(w)=>{if(_K(w.value,e.alg))return;w.issues.push({code:"invalid_format",format:"jwt",input:w.value,inst:v,continue:!e.abort})}});var x7=y("$ZodUnknown",(v,e)=>{_g.init(v,e),v._zod.parse=(w)=>w}),C7=y("$ZodNever",(v,e)=>{_g.init(v,e),v._zod.parse=(w,u)=>{return w.issues.push({expected:"never",code:"invalid_type",input:w.value,inst:v}),w}});function e7(v,e,w){if(v.issues.length)e.issues.push(...Ww(w,v.issues));e.value[w]=v.value}var T7=y("$ZodArray",(v,e)=>{_g.init(v,e),v._zod.parse=(w,u)=>{let n=w.value;if(!Array.isArray(n))return w.issues.push({expected:"array",code:"invalid_type",input:n,inst:v}),w;w.value=Array(n.length);let H=[];for(let O=0;O<n.length;O++){let q=n[O],G=e.element._zod.run({value:q,issues:[]},u);if(G instanceof Promise)H.push(G.then((X)=>e7(X,w,O)));else e7(G,w,O)}if(H.length)return Promise.all(H).then(()=>w);return w}});function qi(v,e,w,u,n,H){let O=w in u;if(v.issues.length){if(n&&H&&!O)return;e.issues.push(...Ww(w,v.issues))}if(!O&&!n){if(!v.issues.length)e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[w]});return}if(v.value===void 0){if(O)e.value[w]=void 0}else e.value[w]=v.value}function S7(v){let e=Object.keys(v.shape);for(let u of e)if(!v.shape?.[u]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${u}": expected a Zod schema`);let w=C8(v.shape);return{...v,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(w)}}function k7(v,e,w,u,n,H){let O=[],q=n.keySet,G=n.catchall._zod,X=G.def.type,t=G.optin==="optional",M=G.optout==="optional";for(let Y in e){if(Y==="__proto__")continue;if(q.has(Y))continue;if(X==="never"){O.push(Y);continue}let L=G.run({value:e[Y],issues:[]},u);if(L instanceof Promise)v.push(L.then((_)=>qi(_,w,Y,e,t,M)));else qi(L,w,Y,e,t,M)}if(O.length)w.issues.push({code:"unrecognized_keys",keys:O,input:e,inst:H});if(!v.length)return w;return Promise.all(v).then(()=>{return w})}var EK=y("$ZodObject",(v,e)=>{if(_g.init(v,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){let q=e.shape;Object.defineProperty(e,"shape",{get:()=>{let G={...q};return Object.defineProperty(e,"shape",{value:G}),G}})}let u=qw(()=>S7(e));Pg(v._zod,"propValues",()=>{let q=e.shape,G={};for(let X in q){let t=q[X]._zod;if(t.values){G[X]??(G[X]=new Set);for(let M of t.values)G[X].add(M)}}return G});let n=_h,H=e.catchall,O;v._zod.parse=(q,G)=>{O??(O=u.value);let X=q.value;if(!n(X))return q.issues.push({expected:"object",code:"invalid_type",input:X,inst:v}),q;q.value={};let t=[],M=O.shape;for(let Y of O.keys){let L=M[Y],_=L._zod.optin==="optional",C=L._zod.optout==="optional",V=L._zod.run({value:X[Y],issues:[]},G);if(V instanceof Promise)t.push(V.then((rr)=>qi(rr,q,Y,X,_,C)));else qi(V,q,Y,X,_,C)}if(!H)return t.length?Promise.all(t).then(()=>q):q;return k7(t,X,q,G,u.value,v)}}),D7=y("$ZodObjectJIT",(v,e)=>{EK.init(v,e);let w=v._zod.parse,u=qw(()=>S7(e)),n=(Y)=>{let L=new V8(["shape","payload","ctx"]),_=u.value,C=(lr)=>{let j=wi(lr);return`shape[${j}]._zod.run({ value: input[${j}], issues: [] }, ctx)`};L.write("const input = payload.value;");let V=Object.create(null),rr=0;for(let lr of _.keys)V[lr]=`key_${rr++}`;L.write("const newResult = {};");for(let lr of _.keys){let j=V[lr],p=wi(lr),vr=Y[lr],N=vr?._zod?.optin==="optional",E=vr?._zod?.optout==="optional";if(L.write(`const ${j} = ${C(lr)};`),N&&E)L.write(`
        if (${j}.issues.length) {
          if (${p} in input) {
            payload.issues = payload.issues.concat(${j}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${p}, ...iss.path] : [${p}]
            })));
          }
        }
        
        if (${j}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${j}.value;
        }
        
      `);else if(!N)L.write(`
        const ${j}_present = ${p} in input;
        if (${j}.issues.length) {
          payload.issues = payload.issues.concat(${j}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        if (!${j}_present && !${j}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${p}]
          });
        }

        if (${j}_present) {
          if (${j}.value === undefined) {
            newResult[${p}] = undefined;
          } else {
            newResult[${p}] = ${j}.value;
          }
        }

      `);else L.write(`
        if (${j}.issues.length) {
          payload.issues = payload.issues.concat(${j}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${p}, ...iss.path] : [${p}]
          })));
        }
        
        if (${j}.value === undefined) {
          if (${p} in input) {
            newResult[${p}] = undefined;
          }
        } else {
          newResult[${p}] = ${j}.value;
        }
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let Pr=L.compile();return(lr,j)=>Pr(Y,lr,j)},H,O=_h,q=!Vh.jitless,X=q&&Z8.value,t=e.catchall,M;v._zod.parse=(Y,L)=>{M??(M=u.value);let _=Y.value;if(!O(_))return Y.issues.push({expected:"object",code:"invalid_type",input:_,inst:v}),Y;if(q&&X&&L?.async===!1&&L.jitless!==!0){if(!H)H=n(e.shape);if(Y=H(Y,L),!t)return Y;return k7([],_,Y,L,M,v)}return w(Y,L)}});function h7(v,e,w,u){for(let H of v)if(H.issues.length===0)return e.value=H.value,e;let n=v.filter((H)=>!Y1(H));if(n.length===1)return e.value=n[0].value,n[0];return e.issues.push({code:"invalid_union",input:e.value,inst:w,errors:v.map((H)=>H.issues.map((O)=>kl(O,u,G0())))}),e}var V7=y("$ZodUnion",(v,e)=>{_g.init(v,e),Pg(v._zod,"optin",()=>e.options.some((u)=>u._zod.optin==="optional")?"optional":void 0),Pg(v._zod,"optout",()=>e.options.some((u)=>u._zod.optout==="optional")?"optional":void 0),Pg(v._zod,"values",()=>{if(e.options.every((u)=>u._zod.values))return new Set(e.options.flatMap((u)=>Array.from(u._zod.values)));return}),Pg(v._zod,"pattern",()=>{if(e.options.every((u)=>u._zod.pattern)){let u=e.options.map((n)=>n._zod.pattern);return new RegExp(`^(${u.map((n)=>Mw(n.source)).join("|")})$`)}return});let w=e.options.length===1?e.options[0]._zod.run:null;v._zod.parse=(u,n)=>{if(w)return w(u,n);let H=!1,O=[];for(let q of e.options){let G=q._zod.run({value:u.value,issues:[]},n);if(G instanceof Promise)O.push(G),H=!0;else{if(G.issues.length===0)return G;O.push(G)}}if(!H)return h7(O,u,v,n);return Promise.all(O).then((q)=>{return h7(q,u,v,n)})}});var _7=y("$ZodIntersection",(v,e)=>{_g.init(v,e),v._zod.parse=(w,u)=>{let n=w.value,H=e.left._zod.run({value:n,issues:[]},u),O=e.right._zod.run({value:n,issues:[]},u);if(H instanceof Promise||O instanceof Promise)return Promise.all([H,O]).then(([G,X])=>{return b7(w,G,X)});return b7(w,H,O)}});function _8(v,e){if(v===e)return{valid:!0,data:v};if(v instanceof Date&&e instanceof Date&&+v===+e)return{valid:!0,data:v};if(Ke(v)&&Ke(e)){let w=Object.keys(e),u=Object.keys(v).filter((H)=>w.indexOf(H)!==-1),n={...v,...e};for(let H of u){let O=_8(v[H],e[H]);if(!O.valid)return{valid:!1,mergeErrorPath:[H,...O.mergeErrorPath]};n[H]=O.data}return{valid:!0,data:n}}if(Array.isArray(v)&&Array.isArray(e)){if(v.length!==e.length)return{valid:!1,mergeErrorPath:[]};let w=[];for(let u=0;u<v.length;u++){let n=v[u],H=e[u],O=_8(n,H);if(!O.valid)return{valid:!1,mergeErrorPath:[u,...O.mergeErrorPath]};w.push(O.data)}return{valid:!0,data:w}}return{valid:!1,mergeErrorPath:[]}}function b7(v,e,w){let u=new Map,n;for(let q of e.issues)if(q.code==="unrecognized_keys"){n??(n=q);for(let G of q.keys){if(!u.has(G))u.set(G,{});u.get(G).l=!0}}else v.issues.push(q);for(let q of w.issues)if(q.code==="unrecognized_keys")for(let G of q.keys){if(!u.has(G))u.set(G,{});u.get(G).r=!0}else v.issues.push(q);let H=[...u].filter(([,q])=>q.l&&q.r).map(([q])=>q);if(H.length&&n)v.issues.push({...n,keys:H});if(Y1(v))return v;let O=_8(e.value,w.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return v.value=O.data,v}var E7=y("$ZodEnum",(v,e)=>{_g.init(v,e);let w=Ow(e.entries),u=new Set(w);v._zod.values=u,v._zod.pattern=new RegExp(`^(${w.filter((n)=>x8.has(typeof n)).map((n)=>typeof n==="string"?X0(n):n.toString()).join("|")})$`),v._zod.parse=(n,H)=>{let O=n.value;if(u.has(O))return n;return n.issues.push({code:"invalid_value",values:w,input:O,inst:v}),n}}),y7=y("$ZodLiteral",(v,e)=>{if(_g.init(v,e),e.values.length===0)throw Error("Cannot create literal schema with no valid values");let w=new Set(e.values);v._zod.values=w,v._zod.pattern=new RegExp(`^(${e.values.map((u)=>typeof u==="string"?X0(u):u?X0(u.toString()):String(u)).join("|")})$`),v._zod.parse=(u,n)=>{let H=u.value;if(w.has(H))return u;return u.issues.push({code:"invalid_value",values:e.values,input:H,inst:v}),u}});var c7=y("$ZodTransform",(v,e)=>{_g.init(v,e),v._zod.parse=(w,u)=>{if(u.direction==="backward")throw new Pw(v.constructor.name);let n=e.transform(w.value,w);if(u.async)return(n instanceof Promise?n:Promise.resolve(n)).then((O)=>{return w.value=O,w});if(n instanceof Promise)throw new R0;return w.value=n,w}});function w7(v,e){if(v.issues.length&&e===void 0)return{issues:[],value:void 0};return v}var E8=y("$ZodOptional",(v,e)=>{_g.init(v,e),v._zod.optin="optional",v._zod.optout="optional",Pg(v._zod,"values",()=>{return e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0}),Pg(v._zod,"pattern",()=>{let w=e.innerType._zod.pattern;return w?new RegExp(`^(${Mw(w.source)})?$`):void 0}),v._zod.parse=(w,u)=>{if(e.innerType._zod.optin==="optional"){let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>w7(H,w.value));return w7(n,w.value)}if(w.value===void 0)return w;return e.innerType._zod.run(w,u)}}),j7=y("$ZodExactOptional",(v,e)=>{E8.init(v,e),Pg(v._zod,"values",()=>e.innerType._zod.values),Pg(v._zod,"pattern",()=>e.innerType._zod.pattern),v._zod.parse=(w,u)=>{return e.innerType._zod.run(w,u)}}),f7=y("$ZodNullable",(v,e)=>{_g.init(v,e),Pg(v._zod,"optin",()=>e.innerType._zod.optin),Pg(v._zod,"optout",()=>e.innerType._zod.optout),Pg(v._zod,"pattern",()=>{let w=e.innerType._zod.pattern;return w?new RegExp(`^(${Mw(w.source)}|null)$`):void 0}),Pg(v._zod,"values",()=>{return e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0}),v._zod.parse=(w,u)=>{if(w.value===null)return w;return e.innerType._zod.run(w,u)}}),a7=y("$ZodDefault",(v,e)=>{_g.init(v,e),v._zod.optin="optional",Pg(v._zod,"values",()=>e.innerType._zod.values),v._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);if(w.value===void 0)return w.value=e.defaultValue,w;let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>u7(H,e));return u7(n,e)}});function u7(v,e){if(v.value===void 0)v.value=e.defaultValue;return v}var p7=y("$ZodPrefault",(v,e)=>{_g.init(v,e),v._zod.optin="optional",Pg(v._zod,"values",()=>e.innerType._zod.values),v._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);if(w.value===void 0)w.value=e.defaultValue;return e.innerType._zod.run(w,u)}}),d7=y("$ZodNonOptional",(v,e)=>{_g.init(v,e),Pg(v._zod,"values",()=>{let w=e.innerType._zod.values;return w?new Set([...w].filter((u)=>u!==void 0)):void 0}),v._zod.parse=(w,u)=>{let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>i7(H,v));return i7(n,v)}});function i7(v,e){if(!v.issues.length&&v.value===void 0)v.issues.push({code:"invalid_type",expected:"nonoptional",input:v.value,inst:e});return v}var s7=y("$ZodCatch",(v,e)=>{_g.init(v,e),Pg(v._zod,"optin",()=>e.innerType._zod.optin),Pg(v._zod,"optout",()=>e.innerType._zod.optout),Pg(v._zod,"values",()=>e.innerType._zod.values),v._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>{if(w.value=H.value,H.issues.length)w.value=e.catchValue({...w,error:{issues:H.issues.map((O)=>kl(O,u,G0()))},input:w.value}),w.issues=[];return w});if(w.value=n.value,n.issues.length)w.value=e.catchValue({...w,error:{issues:n.issues.map((H)=>kl(H,u,G0()))},input:w.value}),w.issues=[];return w}});var r3=y("$ZodPipe",(v,e)=>{_g.init(v,e),Pg(v._zod,"values",()=>e.in._zod.values),Pg(v._zod,"optin",()=>e.in._zod.optin),Pg(v._zod,"optout",()=>e.out._zod.optout),Pg(v._zod,"propValues",()=>e.in._zod.propValues),v._zod.parse=(w,u)=>{if(u.direction==="backward"){let H=e.out._zod.run(w,u);if(H instanceof Promise)return H.then((O)=>Oi(O,e.in,u));return Oi(H,e.in,u)}let n=e.in._zod.run(w,u);if(n instanceof Promise)return n.then((H)=>Oi(H,e.out,u));return Oi(n,e.out,u)}});function Oi(v,e,w){if(v.issues.length)return v.aborted=!0,v;return e._zod.run({value:v.value,issues:v.issues},w)}var g3=y("$ZodReadonly",(v,e)=>{_g.init(v,e),Pg(v._zod,"propValues",()=>e.innerType._zod.propValues),Pg(v._zod,"values",()=>e.innerType._zod.values),Pg(v._zod,"optin",()=>e.innerType?._zod?.optin),Pg(v._zod,"optout",()=>e.innerType?._zod?.optout),v._zod.parse=(w,u)=>{if(u.direction==="backward")return e.innerType._zod.run(w,u);let n=e.innerType._zod.run(w,u);if(n instanceof Promise)return n.then(n7);return n7(n)}});function n7(v){return v.value=Object.freeze(v.value),v}var o3=y("$ZodCustom",(v,e)=>{Gv.init(v,e),_g.init(v,e),v._zod.parse=(w,u)=>{return w},v._zod.check=(w)=>{let u=w.value,n=e.fn(u);if(n instanceof Promise)return n.then((H)=>P7(H,w,u,v));P7(n,w,u,v);return}});function P7(v,e,w,u){if(!v){let n={code:"custom",input:w,inst:u,path:[...u._zod.def.path??[]],continue:!u._zod.def.abort};if(u._zod.def.params)n.params=u._zod.def.params;e.issues.push(yh(n))}}var v3,D_g=Symbol("ZodOutput"),V_g=Symbol("ZodInput");class l3{constructor(){this._map=new WeakMap,this._idmap=new Map}add(v,...e){let w=e[0];if(this._map.set(v,w),w&&typeof w==="object"&&"id"in w)this._idmap.set(w.id,v);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(v){let e=this._map.get(v);if(e&&typeof e==="object"&&"id"in e)this._idmap.delete(e.id);return this._map.delete(v),this}get(v){let e=v._zod.parent;if(e){let w={...this.get(e)??{}};delete w.id;let u={...w,...this._map.get(v)};return Object.keys(u).length?u:void 0}return this._map.get(v)}has(v){return this._map.has(v)}}function yK(){return new l3}(v3=globalThis).__zod_globalRegistry??(v3.__zod_globalRegistry=yK());var Ue=globalThis.__zod_globalRegistry;function e3(v,e){return new v({type:"string",..._r(e)})}function h3(v,e){return new v({type:"string",format:"email",check:"string_format",abort:!1,..._r(e)})}function y8(v,e){return new v({type:"string",format:"guid",check:"string_format",abort:!1,..._r(e)})}function b3(v,e){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(e)})}function w3(v,e){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(e)})}function u3(v,e){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(e)})}function i3(v,e){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(e)})}function n3(v,e){return new v({type:"string",format:"url",check:"string_format",abort:!1,..._r(e)})}function P3(v,e){return new v({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(e)})}function H3(v,e){return new v({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(e)})}function O3(v,e){return new v({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(e)})}function q3(v,e){return new v({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(e)})}function A3(v,e){return new v({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(e)})}function M3(v,e){return new v({type:"string",format:"xid",check:"string_format",abort:!1,..._r(e)})}function W3(v,e){return new v({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(e)})}function R3(v,e){return new v({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(e)})}function G3(v,e){return new v({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(e)})}function t3(v,e){return new v({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(e)})}function X3(v,e){return new v({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(e)})}function Y3(v,e){return new v({type:"string",format:"base64",check:"string_format",abort:!1,..._r(e)})}function J3(v,e){return new v({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(e)})}function Q3(v,e){return new v({type:"string",format:"e164",check:"string_format",abort:!1,..._r(e)})}function z3(v,e){return new v({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(e)})}function K3(v,e){return new v({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(e)})}function U3(v,e){return new v({type:"string",format:"date",check:"string_format",..._r(e)})}function $3(v,e){return new v({type:"string",format:"time",check:"string_format",precision:null,..._r(e)})}function m3(v,e){return new v({type:"string",format:"duration",check:"string_format",..._r(e)})}function L3(v){return new v({type:"unknown"})}function I3(v,e){return new v({type:"never",..._r(e)})}function Mi(v,e){return new cR({check:"max_length",..._r(e),maximum:v})}function ch(v,e){return new jR({check:"min_length",..._r(e),minimum:v})}function Wi(v,e){return new fR({check:"length_equals",..._r(e),length:v})}function c8(v,e){return new aR({check:"string_format",format:"regex",..._r(e),pattern:v})}function j8(v){return new pR({check:"string_format",format:"lowercase",..._r(v)})}function f8(v){return new dR({check:"string_format",format:"uppercase",..._r(v)})}function a8(v,e){return new sR({check:"string_format",format:"includes",..._r(e),includes:v})}function p8(v,e){return new r7({check:"string_format",format:"starts_with",..._r(e),prefix:v})}function d8(v,e){return new g7({check:"string_format",format:"ends_with",..._r(e),suffix:v})}function J1(v){return new o7({check:"overwrite",tx:v})}function s8(v){return J1((e)=>e.normalize(v))}function rP(){return J1((v)=>v.trim())}function gP(){return J1((v)=>v.toLowerCase())}function oP(){return J1((v)=>v.toUpperCase())}function vP(){return J1((v)=>B8(v))}function F3(v,e,w){return new v({type:"array",element:e,..._r(w)})}function N3(v,e,w){return new v({type:"custom",check:"custom",fn:e,..._r(w)})}function B3(v,e){let w=cK((u)=>{return u.addIssue=(n)=>{if(typeof n==="string")u.issues.push(yh(n,u.value,w._zod.def));else{let H=n;if(H.fatal)H.continue=!1;H.code??(H.code="custom"),H.input??(H.input=u.value),H.inst??(H.inst=w),H.continue??(H.continue=!w._zod.def.abort),u.issues.push(yh(H))}},v(u.value,u)},e);return w}function cK(v,e){let w=new Gv({check:"custom",..._r(e)});return w._zod.check=v,w}function lP(v){let e=v?.target??"draft-2020-12";if(e==="draft-4")e="draft-04";if(e==="draft-7")e="draft-07";return{processors:v.processors??{},metadataRegistry:v?.metadata??Ue,target:e,unrepresentable:v?.unrepresentable??"throw",override:v?.override??(()=>{}),io:v?.io??"output",counter:0,seen:new Map,cycles:v?.cycles??"ref",reused:v?.reused??"inline",external:v?.external??void 0}}function io(v,e,w={path:[],schemaPath:[]}){var u;let n=v._zod.def,H=e.seen.get(v);if(H){if(H.count++,w.schemaPath.includes(v))H.cycle=w.path;return H.schema}let O={schema:{},count:1,cycle:void 0,path:w.path};e.seen.set(v,O);let q=v._zod.toJSONSchema?.();if(q)O.schema=q;else{let t={...w,schemaPath:[...w.schemaPath,v],path:w.path};if(v._zod.processJSONSchema)v._zod.processJSONSchema(e,O.schema,t);else{let Y=O.schema,L=e.processors[n.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);L(v,e,Y,t)}let M=v._zod.parent;if(M){if(!O.ref)O.ref=M;io(M,e,t),e.seen.get(M).isParent=!0}}let G=e.metadataRegistry.get(v);if(G)Object.assign(O.schema,G);if(e.io==="input"&&Do(v))delete O.schema.examples,delete O.schema.default;if(e.io==="input"&&"_prefault"in O.schema)(u=O.schema).default??(u.default=O.schema._prefault);return delete O.schema._prefault,e.seen.get(v).schema}function eP(v,e){let w=v.seen.get(e);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let u=new Map;for(let O of v.seen.entries()){let q=v.metadataRegistry.get(O[0])?.id;if(q){let G=u.get(q);if(G&&G!==O[0])throw Error(`Duplicate schema id "${q}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);u.set(q,O[0])}}let n=(O)=>{let q=v.target==="draft-2020-12"?"$defs":"definitions";if(v.external){let M=v.external.registry.get(O[0])?.id,Y=v.external.uri??((_)=>_);if(M)return{ref:Y(M)};let L=O[1].defId??O[1].schema.id??`schema${v.counter++}`;return O[1].defId=L,{defId:L,ref:`${Y("__shared")}#/${q}/${L}`}}if(O[1]===w)return{ref:"#"};let X=`${"#"}/${q}/`,t=O[1].schema.id??`__schema${v.counter++}`;return{defId:t,ref:X+t}},H=(O)=>{if(O[1].schema.$ref)return;let q=O[1],{ref:G,defId:X}=n(O);if(q.def={...q.schema},X)q.defId=X;let t=q.schema;for(let M in t)delete t[M];t.$ref=G};if(v.cycles==="throw")for(let O of v.seen.entries()){let q=O[1];if(q.cycle)throw Error(`Cycle detected: #/${q.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of v.seen.entries()){let q=O[1];if(e===O[0]){H(O);continue}if(v.external){let X=v.external.registry.get(O[0])?.id;if(e!==O[0]&&X){H(O);continue}}if(v.metadataRegistry.get(O[0])?.id){H(O);continue}if(q.cycle){H(O);continue}if(q.count>1){if(v.reused==="ref"){H(O);continue}}}}function hP(v,e){let w=v.seen.get(e);if(!w)throw Error("Unprocessed schema. This is a bug in Zod.");let u=(q)=>{let G=v.seen.get(q);if(G.ref===null)return;let X=G.def??G.schema,t={...X},M=G.ref;if(G.ref=null,M){u(M);let L=v.seen.get(M),_=L.schema;if(_.$ref&&(v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"))X.allOf=X.allOf??[],X.allOf.push(_);else Object.assign(X,_);if(Object.assign(X,t),q._zod.parent===M)for(let V in X){if(V==="$ref"||V==="allOf")continue;if(!(V in t))delete X[V]}if(_.$ref&&L.def)for(let V in X){if(V==="$ref"||V==="allOf")continue;if(V in L.def&&JSON.stringify(X[V])===JSON.stringify(L.def[V]))delete X[V]}}let Y=q._zod.parent;if(Y&&Y!==M){u(Y);let L=v.seen.get(Y);if(L?.schema.$ref){if(X.$ref=L.schema.$ref,L.def)for(let _ in X){if(_==="$ref"||_==="allOf")continue;if(_ in L.def&&JSON.stringify(X[_])===JSON.stringify(L.def[_]))delete X[_]}}}v.override({zodSchema:q,jsonSchema:X,path:G.path??[]})};for(let q of[...v.seen.entries()].reverse())u(q[0]);let n={};if(v.target==="draft-2020-12")n.$schema="https://json-schema.org/draft/2020-12/schema";else if(v.target==="draft-07")n.$schema="http://json-schema.org/draft-07/schema#";else if(v.target==="draft-04")n.$schema="http://json-schema.org/draft-04/schema#";else if(v.target==="openapi-3.0");if(v.external?.uri){let q=v.external.registry.get(e)?.id;if(!q)throw Error("Schema is missing an `id` property");n.$id=v.external.uri(q)}Object.assign(n,w.def??w.schema);let H=v.metadataRegistry.get(e)?.id;if(H!==void 0&&n.id===H)delete n.id;let O=v.external?.defs??{};for(let q of v.seen.entries()){let G=q[1];if(G.def&&G.defId){if(G.def.id===G.defId)delete G.def.id;O[G.defId]=G.def}}if(v.external);else if(Object.keys(O).length>0)if(v.target==="draft-2020-12")n.$defs=O;else n.definitions=O;try{let q=JSON.parse(JSON.stringify(n));return Object.defineProperty(q,"~standard",{value:{...e["~standard"],jsonSchema:{input:Yw(e,"input",v.processors),output:Yw(e,"output",v.processors)}},enumerable:!1,writable:!1}),q}catch(q){throw Error("Error converting schema to JSON.")}}function Do(v,e){let w=e??{seen:new Set};if(w.seen.has(v))return!1;w.seen.add(v);let u=v._zod.def;if(u.type==="transform")return!0;if(u.type==="array")return Do(u.element,w);if(u.type==="set")return Do(u.valueType,w);if(u.type==="lazy")return Do(u.getter(),w);if(u.type==="promise"||u.type==="optional"||u.type==="nonoptional"||u.type==="nullable"||u.type==="readonly"||u.type==="default"||u.type==="prefault")return Do(u.innerType,w);if(u.type==="intersection")return Do(u.left,w)||Do(u.right,w);if(u.type==="record"||u.type==="map")return Do(u.keyType,w)||Do(u.valueType,w);if(u.type==="pipe"){if(v._zod.traits.has("$ZodCodec"))return!0;return Do(u.in,w)||Do(u.out,w)}if(u.type==="object"){for(let n in u.shape)if(Do(u.shape[n],w))return!0;return!1}if(u.type==="union"){for(let n of u.options)if(Do(n,w))return!0;return!1}if(u.type==="tuple"){for(let n of u.items)if(Do(n,w))return!0;if(u.rest&&Do(u.rest,w))return!0;return!1}return!1}var Z3=(v,e={})=>(w)=>{let u=lP({...w,processors:e});return io(v,u),eP(u,v),hP(u,v)},Yw=(v,e,w={})=>(u)=>{let{libraryOptions:n,target:H}=u??{},O=lP({...n??{},target:H,io:e,processors:w});return io(v,O),eP(O,v),hP(O,v)};var jK={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},x3=(v,e,w,u)=>{let n=w;n.type="string";let{minimum:H,maximum:O,format:q,patterns:G,contentEncoding:X}=v._zod.bag;if(typeof H==="number")n.minLength=H;if(typeof O==="number")n.maxLength=O;if(q){if(n.format=jK[q]??q,n.format==="")delete n.format;if(q==="time")delete n.format}if(X)n.contentEncoding=X;if(G&&G.size>0){let t=[...G];if(t.length===1)n.pattern=t[0].source;else if(t.length>1)n.allOf=[...t.map((M)=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:M.source}))]}};var C3=(v,e,w,u)=>{w.not={}};var T3=(v,e,w,u)=>{};var S3=(v,e,w,u)=>{let n=v._zod.def,H=Ow(n.entries);if(H.every((O)=>typeof O==="number"))w.type="number";if(H.every((O)=>typeof O==="string"))w.type="string";w.enum=H},k3=(v,e,w,u)=>{let n=v._zod.def,H=[];for(let O of n.values)if(O===void 0){if(e.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(e.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else H.push(Number(O));else H.push(O);if(H.length===0);else if(H.length===1){let O=H[0];if(w.type=O===null?"null":typeof O,e.target==="draft-04"||e.target==="openapi-3.0")w.enum=[O];else w.const=O}else{if(H.every((O)=>typeof O==="number"))w.type="number";if(H.every((O)=>typeof O==="string"))w.type="string";if(H.every((O)=>typeof O==="boolean"))w.type="boolean";if(H.every((O)=>O===null))w.type="null";w.enum=H}};var D3=(v,e,w,u)=>{if(e.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var V3=(v,e,w,u)=>{if(e.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var _3=(v,e,w,u)=>{let n=w,H=v._zod.def,{minimum:O,maximum:q}=v._zod.bag;if(typeof O==="number")n.minItems=O;if(typeof q==="number")n.maxItems=q;n.type="array",n.items=io(H.element,e,{...u,path:[...u.path,"items"]})},E3=(v,e,w,u)=>{let n=w,H=v._zod.def;n.type="object",n.properties={};let O=H.shape;for(let X in O)n.properties[X]=io(O[X],e,{...u,path:[...u.path,"properties",X]});let q=new Set(Object.keys(O)),G=new Set([...q].filter((X)=>{let t=H.shape[X]._zod;if(e.io==="input")return t.optin===void 0;else return t.optout===void 0}));if(G.size>0)n.required=Array.from(G);if(H.catchall?._zod.def.type==="never")n.additionalProperties=!1;else if(!H.catchall){if(e.io==="output")n.additionalProperties=!1}else if(H.catchall)n.additionalProperties=io(H.catchall,e,{...u,path:[...u.path,"additionalProperties"]})},y3=(v,e,w,u)=>{let n=v._zod.def,H=n.inclusive===!1,O=n.options.map((q,G)=>io(q,e,{...u,path:[...u.path,H?"oneOf":"anyOf",G]}));if(H)w.oneOf=O;else w.anyOf=O},c3=(v,e,w,u)=>{let n=v._zod.def,H=io(n.left,e,{...u,path:[...u.path,"allOf",0]}),O=io(n.right,e,{...u,path:[...u.path,"allOf",1]}),q=(X)=>("allOf"in X)&&Object.keys(X).length===1,G=[...q(H)?H.allOf:[H],...q(O)?O.allOf:[O]];w.allOf=G};var j3=(v,e,w,u)=>{let n=v._zod.def,H=io(n.innerType,e,u),O=e.seen.get(v);if(e.target==="openapi-3.0")O.ref=n.innerType,w.nullable=!0;else w.anyOf=[H,{type:"null"}]},f3=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);H.ref=n.innerType},a3=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);H.ref=n.innerType,w.default=JSON.parse(JSON.stringify(n.defaultValue))},p3=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);if(H.ref=n.innerType,e.io==="input")w._prefault=JSON.parse(JSON.stringify(n.defaultValue))},d3=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);H.ref=n.innerType;let O;try{O=n.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}w.default=O},s3=(v,e,w,u)=>{let n=v._zod.def,H=n.in._zod.traits.has("$ZodTransform"),O=e.io==="input"?H?n.out:n.in:n.out;io(O,e,u);let q=e.seen.get(v);q.ref=O},rG=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);H.ref=n.innerType,w.readOnly=!0};var bP=(v,e,w,u)=>{let n=v._zod.def;io(n.innerType,e,u);let H=e.seen.get(v);H.ref=n.innerType};var hU=y("ZodISODateTime",(v,e)=>{J7.init(v,e),Fg.init(v,e)});function gG(v){return K3(hU,v)}var bU=y("ZodISODate",(v,e)=>{Q7.init(v,e),Fg.init(v,e)});function oG(v){return U3(bU,v)}var wU=y("ZodISOTime",(v,e)=>{z7.init(v,e),Fg.init(v,e)});function vG(v){return $3(wU,v)}var uU=y("ZodISODuration",(v,e)=>{K7.init(v,e),Fg.init(v,e)});function lG(v){return m3(uU,v)}var PU=(v,e)=>{ii.init(v,e),v.name="ZodError",Object.defineProperties(v,{format:{value:(w)=>nR(v,w)},flatten:{value:(w)=>iR(v,w)},addIssue:{value:(w)=>{v.issues.push(w),v.message=JSON.stringify(v.issues,Eh,2)}},addIssues:{value:(w)=>{v.issues.push(...w),v.message=JSON.stringify(v.issues,Eh,2)}},isEmpty:{get(){return v.issues.length===0}}})};var tv=y("ZodError",PU,{Parent:Error});var eG=ni(tv),hG=Pi(tv),bG=Gw(tv),wG=tw(tv),uG=OR(tv),iG=qR(tv),nG=AR(tv),PG=MR(tv),HG=WR(tv),OG=RR(tv),qG=GR(tv),AG=tR(tv);var MG=new WeakMap;function ti(v,e,w){let u=Object.getPrototypeOf(v),n=MG.get(u);if(!n)n=new Set,MG.set(u,n);if(n.has(e))return;n.add(e);for(let H in w){let O=w[H];Object.defineProperty(u,H,{configurable:!0,enumerable:!1,get(){let q=O.bind(this);return Object.defineProperty(this,H,{configurable:!0,writable:!0,enumerable:!0,value:q}),q},set(q){Object.defineProperty(this,H,{configurable:!0,writable:!0,enumerable:!0,value:q})}})}}var go=y("ZodType",(v,e)=>{return _g.init(v,e),Object.assign(v["~standard"],{jsonSchema:{input:Yw(v,"input"),output:Yw(v,"output")}}),v.toJSONSchema=Z3(v,{}),v.def=e,v.type=e.type,Object.defineProperty(v,"_def",{value:e}),v.parse=(w,u)=>eG(v,w,u,{callee:v.parse}),v.safeParse=(w,u)=>bG(v,w,u),v.parseAsync=async(w,u)=>hG(v,w,u,{callee:v.parseAsync}),v.safeParseAsync=async(w,u)=>wG(v,w,u),v.spa=v.safeParseAsync,v.encode=(w,u)=>uG(v,w,u),v.decode=(w,u)=>iG(v,w,u),v.encodeAsync=async(w,u)=>nG(v,w,u),v.decodeAsync=async(w,u)=>PG(v,w,u),v.safeEncode=(w,u)=>HG(v,w,u),v.safeDecode=(w,u)=>OG(v,w,u),v.safeEncodeAsync=async(w,u)=>qG(v,w,u),v.safeDecodeAsync=async(w,u)=>AG(v,w,u),ti(v,"ZodType",{check(...w){let u=this.def;return this.clone(Og.mergeDefs(u,{checks:[...u.checks??[],...w.map((n)=>typeof n==="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...w){return this.check(...w)},clone(w,u){return ol(this,w,u)},brand(){return this},register(w,u){return w.add(this,u),this},refine(w,u){return this.check(l$(w,u))},superRefine(w,u){return this.check(e$(w,u))},overwrite(w){return this.check(J1(w))},optional(){return GG(this)},exactOptional(){return EU(this)},nullable(){return tG(this)},nullish(){return GG(tG(this))},nonoptional(w){return pU(this,w)},array(){return Y0(this)},or(w){return CU([this,w])},and(w){return SU(this,w)},transform(w){return XG(this,VU(w))},default(w){return jU(this,w)},prefault(w){return aU(this,w)},catch(w){return sU(this,w)},pipe(w){return XG(this,w)},readonly(){return o$(this)},describe(w){let u=this.clone();return Ue.add(u,{description:w}),u},meta(...w){if(w.length===0)return Ue.get(this);let u=this.clone();return Ue.add(u,w[0]),u},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(w){return w(this)}}),Object.defineProperty(v,"description",{get(){return Ue.get(v)?.description},configurable:!0}),v}),YG=y("_ZodString",(v,e)=>{Ai.init(v,e),go.init(v,e),v._zod.processJSONSchema=(u,n,H)=>x3(v,u,n,H);let w=v._zod.bag;v.format=w.format??null,v.minLength=w.minimum??null,v.maxLength=w.maximum??null,ti(v,"_ZodString",{regex(...u){return this.check(c8(...u))},includes(...u){return this.check(a8(...u))},startsWith(...u){return this.check(p8(...u))},endsWith(...u){return this.check(d8(...u))},min(...u){return this.check(ch(...u))},max(...u){return this.check(Mi(...u))},length(...u){return this.check(Wi(...u))},nonempty(...u){return this.check(ch(1,...u))},lowercase(u){return this.check(j8(u))},uppercase(u){return this.check(f8(u))},trim(){return this.check(rP())},normalize(...u){return this.check(s8(...u))},toLowerCase(){return this.check(gP())},toUpperCase(){return this.check(oP())},slugify(){return this.check(vP())}})}),OU=y("ZodString",(v,e)=>{Ai.init(v,e),YG.init(v,e),v.email=(w)=>v.check(h3(qU,w)),v.url=(w)=>v.check(n3(AU,w)),v.jwt=(w)=>v.check(z3(LU,w)),v.emoji=(w)=>v.check(P3(MU,w)),v.guid=(w)=>v.check(y8(WG,w)),v.uuid=(w)=>v.check(b3(Gi,w)),v.uuidv4=(w)=>v.check(w3(Gi,w)),v.uuidv6=(w)=>v.check(u3(Gi,w)),v.uuidv7=(w)=>v.check(i3(Gi,w)),v.nanoid=(w)=>v.check(H3(WU,w)),v.guid=(w)=>v.check(y8(WG,w)),v.cuid=(w)=>v.check(O3(RU,w)),v.cuid2=(w)=>v.check(q3(GU,w)),v.ulid=(w)=>v.check(A3(tU,w)),v.base64=(w)=>v.check(Y3(UU,w)),v.base64url=(w)=>v.check(J3($U,w)),v.xid=(w)=>v.check(M3(XU,w)),v.ksuid=(w)=>v.check(W3(YU,w)),v.ipv4=(w)=>v.check(R3(JU,w)),v.ipv6=(w)=>v.check(G3(QU,w)),v.cidrv4=(w)=>v.check(t3(zU,w)),v.cidrv6=(w)=>v.check(X3(KU,w)),v.e164=(w)=>v.check(Q3(mU,w)),v.datetime=(w)=>v.check(gG(w)),v.date=(w)=>v.check(oG(w)),v.time=(w)=>v.check(vG(w)),v.duration=(w)=>v.check(lG(w))});function Eg(v){return e3(OU,v)}var Fg=y("ZodStringFormat",(v,e)=>{mg.init(v,e),YG.init(v,e)}),qU=y("ZodEmail",(v,e)=>{q7.init(v,e),Fg.init(v,e)});var WG=y("ZodGUID",(v,e)=>{H7.init(v,e),Fg.init(v,e)});var Gi=y("ZodUUID",(v,e)=>{O7.init(v,e),Fg.init(v,e)});var AU=y("ZodURL",(v,e)=>{A7.init(v,e),Fg.init(v,e)});var MU=y("ZodEmoji",(v,e)=>{M7.init(v,e),Fg.init(v,e)});var WU=y("ZodNanoID",(v,e)=>{W7.init(v,e),Fg.init(v,e)});var RU=y("ZodCUID",(v,e)=>{R7.init(v,e),Fg.init(v,e)});var GU=y("ZodCUID2",(v,e)=>{G7.init(v,e),Fg.init(v,e)});var tU=y("ZodULID",(v,e)=>{t7.init(v,e),Fg.init(v,e)});var XU=y("ZodXID",(v,e)=>{X7.init(v,e),Fg.init(v,e)});var YU=y("ZodKSUID",(v,e)=>{Y7.init(v,e),Fg.init(v,e)});var JU=y("ZodIPv4",(v,e)=>{U7.init(v,e),Fg.init(v,e)});var QU=y("ZodIPv6",(v,e)=>{$7.init(v,e),Fg.init(v,e)});var zU=y("ZodCIDRv4",(v,e)=>{m7.init(v,e),Fg.init(v,e)});var KU=y("ZodCIDRv6",(v,e)=>{L7.init(v,e),Fg.init(v,e)});var UU=y("ZodBase64",(v,e)=>{F7.init(v,e),Fg.init(v,e)});var $U=y("ZodBase64URL",(v,e)=>{N7.init(v,e),Fg.init(v,e)});var mU=y("ZodE164",(v,e)=>{B7.init(v,e),Fg.init(v,e)});var LU=y("ZodJWT",(v,e)=>{Z7.init(v,e),Fg.init(v,e)});var IU=y("ZodUnknown",(v,e)=>{x7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>T3(v,w,u,n)});function RG(){return L3(IU)}var FU=y("ZodNever",(v,e)=>{C7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>C3(v,w,u,n)});function NU(v){return I3(FU,v)}var BU=y("ZodArray",(v,e)=>{T7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>_3(v,w,u,n),v.element=e.element,ti(v,"ZodArray",{min(w,u){return this.check(ch(w,u))},nonempty(w){return this.check(ch(1,w))},max(w,u){return this.check(Mi(w,u))},length(w,u){return this.check(Wi(w,u))},unwrap(){return this.element}})});function Y0(v,e){return F3(BU,v,e)}var ZU=y("ZodObject",(v,e)=>{D7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>E3(v,w,u,n),Og.defineLazy(v,"shape",()=>{return e.shape}),ti(v,"ZodObject",{keyof(){return Jw(Object.keys(this._zod.def.shape))},catchall(w){return this.clone({...this._zod.def,catchall:w})},passthrough(){return this.clone({...this._zod.def,catchall:RG()})},loose(){return this.clone({...this._zod.def,catchall:RG()})},strict(){return this.clone({...this._zod.def,catchall:NU()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(w){return Og.extend(this,w)},safeExtend(w){return Og.safeExtend(this,w)},merge(w){return Og.merge(this,w)},pick(w){return Og.pick(this,w)},omit(w){return Og.omit(this,w)},partial(...w){return Og.partial(JG,this,w[0])},required(...w){return Og.required(QG,this,w[0])}})});function $e(v,e){let w={type:"object",shape:v??{},...Og.normalizeParams(e)};return new ZU(w)}var xU=y("ZodUnion",(v,e)=>{V7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>y3(v,w,u,n),v.options=e.options});function CU(v,e){return new xU({type:"union",options:v,...Og.normalizeParams(e)})}var TU=y("ZodIntersection",(v,e)=>{_7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>c3(v,w,u,n)});function SU(v,e){return new TU({type:"intersection",left:v,right:e})}var wP=y("ZodEnum",(v,e)=>{E7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(u,n,H)=>S3(v,u,n,H),v.enum=e.entries,v.options=Object.values(e.entries);let w=new Set(Object.keys(e.entries));v.extract=(u,n)=>{let H={};for(let O of u)if(w.has(O))H[O]=e.entries[O];else throw Error(`Key ${O} not found in enum`);return new wP({...e,checks:[],...Og.normalizeParams(n),entries:H})},v.exclude=(u,n)=>{let H={...e.entries};for(let O of u)if(w.has(O))delete H[O];else throw Error(`Key ${O} not found in enum`);return new wP({...e,checks:[],...Og.normalizeParams(n),entries:H})}});function Jw(v,e){let w=Array.isArray(v)?Object.fromEntries(v.map((u)=>[u,u])):v;return new wP({type:"enum",entries:w,...Og.normalizeParams(e)})}var kU=y("ZodLiteral",(v,e)=>{y7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>k3(v,w,u,n),v.values=new Set(e.values),Object.defineProperty(v,"value",{get(){if(e.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function uP(v,e){return new kU({type:"literal",values:Array.isArray(v)?v:[v],...Og.normalizeParams(e)})}var DU=y("ZodTransform",(v,e)=>{c7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>V3(v,w,u,n),v._zod.parse=(w,u)=>{if(u.direction==="backward")throw new Pw(v.constructor.name);w.addIssue=(H)=>{if(typeof H==="string")w.issues.push(Og.issue(H,w.value,e));else{let O=H;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=w.value),O.inst??(O.inst=v),w.issues.push(Og.issue(O))}};let n=e.transform(w.value,w);if(n instanceof Promise)return n.then((H)=>{return w.value=H,w});return w.value=n,w}});function VU(v){return new DU({type:"transform",transform:v})}var JG=y("ZodOptional",(v,e)=>{E8.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>bP(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function GG(v){return new JG({type:"optional",innerType:v})}var _U=y("ZodExactOptional",(v,e)=>{j7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>bP(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function EU(v){return new _U({type:"optional",innerType:v})}var yU=y("ZodNullable",(v,e)=>{f7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>j3(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function tG(v){return new yU({type:"nullable",innerType:v})}var cU=y("ZodDefault",(v,e)=>{a7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>a3(v,w,u,n),v.unwrap=()=>v._zod.def.innerType,v.removeDefault=v.unwrap});function jU(v,e){return new cU({type:"default",innerType:v,get defaultValue(){return typeof e==="function"?e():Og.shallowClone(e)}})}var fU=y("ZodPrefault",(v,e)=>{p7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>p3(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function aU(v,e){return new fU({type:"prefault",innerType:v,get defaultValue(){return typeof e==="function"?e():Og.shallowClone(e)}})}var QG=y("ZodNonOptional",(v,e)=>{d7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>f3(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function pU(v,e){return new QG({type:"nonoptional",innerType:v,...Og.normalizeParams(e)})}var dU=y("ZodCatch",(v,e)=>{s7.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>d3(v,w,u,n),v.unwrap=()=>v._zod.def.innerType,v.removeCatch=v.unwrap});function sU(v,e){return new dU({type:"catch",innerType:v,catchValue:typeof e==="function"?e:()=>e})}var r$=y("ZodPipe",(v,e)=>{r3.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>s3(v,w,u,n),v.in=e.in,v.out=e.out});function XG(v,e){return new r$({type:"pipe",in:v,out:e})}var g$=y("ZodReadonly",(v,e)=>{g3.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>rG(v,w,u,n),v.unwrap=()=>v._zod.def.innerType});function o$(v){return new g$({type:"readonly",innerType:v})}var v$=y("ZodCustom",(v,e)=>{o3.init(v,e),go.init(v,e),v._zod.processJSONSchema=(w,u,n)=>D3(v,w,u,n)});function l$(v,e={}){return N3(v$,v,e)}function e$(v,e){return B3(v,e)}var zG=$e({type:Jw(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),KG=$e({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:Y0(Eg()).optional()}),h$=$e({name:Eg().min(1).max(200),code:Eg(),type:Jw(["trigger","library"]),triggers:Y0(Eg()).optional(),bindings:Y0(zG).optional(),folder:Eg().optional(),metadata:KG.optional()}),UG=$e({format:uP("lumiscript-pack-v1"),exportedAt:Eg(),scripts:Y0(h$).min(1).max(100)}),b$=$e({name:Eg().min(1).max(200),file:Eg().min(1),type:Jw(["trigger","library"]),triggers:Y0(Eg()).optional(),bindings:Y0(zG).optional(),folder:Eg().optional(),metadata:KG.optional()}),yyg=$e({format:uP("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:Y0(b$).min(1).max(100)});var $G=1048576;async function mG(v){let e=new Uint8Array(await v.arrayBuffer()),w;try{w=f9(e)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let u=w["pack.json"];if(!u)throw Error("Invalid script pack: missing pack.json");if(u.byteLength>$G)throw Error(`Pack exceeds the ${$G/1024/1024} MB decompressed size limit`);let n=I8(u),H;try{H=JSON.parse(n)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return UG.parse(H).scripts}var hg=Hr(rg(),1);function w$(v){let w="";for(let u=0;u<v.length;u+=32768)w+=String.fromCharCode(...v.subarray(u,u+32768));return btoa(w)}function u$(v){let e=new Map;for(let n of v){let H=n.folder??"";if(!e.has(H))e.set(H,[]);e.get(H).push(n)}let w=new Map;if(e.has(""))w.set("",e.get(""));let u=[...e.keys()].filter((n)=>n!=="").sort();for(let n of u)w.set(n,e.get(n));return w}var Xi=({scripts:v,selectedId:e,execInfo:w,onSelect:u,onEdit:n,sendToBackend:H})=>{let[O,q]=Qw.useState("trigger"),[G,X]=Qw.useState(new Set),t=Qw.useRef(null),M=v.filter((j)=>j.type===O),Y=u$(M),L=Y.size>1||Y.size===1&&!Y.has(""),_=(j)=>{X((p)=>{let vr=new Set(p);if(vr.has(j))vr.delete(j);else vr.add(j);return vr})},C=()=>{let j=O==="library"?"Library name:":"Script name:",p=window.prompt(j);if(!p?.trim())return;H({type:"create_script",name:p.trim(),scriptType:O})},V=(j)=>{if(M.length===0)return;if(j.shiftKey){let vr=F8(M);H({type:"save_pack_to_disk",bytesB64:w$(vr),scriptType:O});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;a9(M,p.trim())},rr=()=>{t.current?.click()},Pr=async(j)=>{let p=j.target.files?.[0];if(!p)return;j.target.value="";try{let vr=await mG(p),N=(x)=>x==="library"?"[L]":"[T]",E=vr.map((x)=>`  ${N(x.type)} ${x.name}`).join(`
`);if(!window.confirm(`Import ${vr.length} script${vr.length>1?"s":""}?

${E}

Imported scripts will be disabled. Review and enable them manually.`))return;H({type:"import_scripts",entries:vr})}catch(vr){window.alert(`Import failed: ${vr instanceof Error?vr.message:String(vr)}`)}},lr=(j)=>{let p=w[j.id];return hg.jsxDEV(N9,{script:j,selected:j.id===e,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>u(j.id),onEdit:()=>n(j.id),sendToBackend:H},j.id,!1,void 0,this)};return hg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[hg.jsxDEV("div",{className:"ls-list-header",children:[hg.jsxDEV("div",{className:"ls-list-type-tabs",children:[hg.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>q("trigger"),title:"Scripts",children:hg.jsxDEV(Wo,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>q("library"),title:"Libraries",children:hg.jsxDEV(Xe,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-actions",children:[hg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:hg.jsxDEV(hw,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:V,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:M.length===0,children:hg.jsxDEV(Ye,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("button",{className:"ls-icon-btn",onClick:C,title:"New script",children:hg.jsxDEV(d5,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("input",{ref:t,type:"file",accept:".zip",style:{display:"none"},onChange:Pr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hg.jsxDEV("div",{className:"ls-list-body",children:M.length===0?hg.jsxDEV("div",{className:"ls-list-empty",children:[hg.jsxDEV(Zl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),hg.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),hg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...Y.entries()].map(([j,p])=>{let vr=G.has(j);return j===""?hg.jsxDEV("div",{children:p.map(lr)},"__unfiled",!1,void 0,this):hg.jsxDEV("div",{className:"ls-folder-group",children:[hg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>_(j),children:[vr?hg.jsxDEV(q0,{size:11},void 0,!1,void 0,this):hg.jsxDEV(Ro,{size:11},void 0,!1,void 0,this),hg.jsxDEV(Je,{size:11},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-name",children:j},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(N)=>{N.stopPropagation();let E=window.prompt("Rename folder:",j);if(E===null||E.trim()===""||E.trim()===j)return;for(let f of p)H({type:"update_script",id:f.id,patch:{folder:E.trim()}})},children:hg.jsxDEV(sv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),hg.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!vr&&p.map(lr)]},`folder-${j}`,!0,void 0,this)}):M.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var mw=Hr(eg(),1),qt=Hr(xh(),1);var to=Hr(eg(),1);function LG(v,e){(e==null||e>v.length)&&(e=v.length);for(var w=0,u=Array(e);w<e;w++)u[w]=v[w];return u}function i$(v){if(Array.isArray(v))return v}function n$(v,e,w){return(e=A$(e))in v?Object.defineProperty(v,e,{value:w,enumerable:!0,configurable:!0,writable:!0}):v[e]=w,v}function P$(v,e){var w=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(w!=null){var u,n,H,O,q=[],G=!0,X=!1;try{if(H=(w=w.call(v)).next,e===0);else for(;!(G=(u=H.call(w)).done)&&(q.push(u.value),q.length!==e);G=!0);}catch(t){X=!0,n=t}finally{try{if(!G&&w.return!=null&&(O=w.return(),Object(O)!==O))return}finally{if(X)throw n}}return q}}function H$(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IG(v,e){var w=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);e&&(u=u.filter(function(n){return Object.getOwnPropertyDescriptor(v,n).enumerable})),w.push.apply(w,u)}return w}function iP(v){for(var e=1;e<arguments.length;e++){var w=arguments[e]!=null?arguments[e]:{};e%2?IG(Object(w),!0).forEach(function(u){n$(v,u,w[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(w)):IG(Object(w)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(w,u))})}return v}function FG(v,e){if(v==null)return{};var w,u,n=O$(v,e);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(v);for(u=0;u<H.length;u++)w=H[u],e.indexOf(w)===-1&&{}.propertyIsEnumerable.call(v,w)&&(n[w]=v[w])}return n}function O$(v,e){if(v==null)return{};var w={};for(var u in v)if({}.hasOwnProperty.call(v,u)){if(e.indexOf(u)!==-1)continue;w[u]=v[u]}return w}function NG(v,e){return i$(v)||P$(v,e)||M$(v,e)||H$()}function q$(v,e){if(typeof v!="object"||!v)return v;var w=v[Symbol.toPrimitive];if(w!==void 0){var u=w.call(v,e);if(typeof u!="object")return u;throw TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(v)}function A$(v){var e=q$(v,"string");return typeof e=="symbol"?e:e+""}function M$(v,e){if(v){if(typeof v=="string")return LG(v,e);var w={}.toString.call(v).slice(8,-1);return w==="Object"&&v.constructor&&(w=v.constructor.name),w==="Map"||w==="Set"?Array.from(v):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?LG(v,e):void 0}}function W$(v,e,w){if(e in v)Object.defineProperty(v,e,{value:w,enumerable:!0,configurable:!0,writable:!0});else v[e]=w;return v}function BG(v,e){var w=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);if(e)u=u.filter(function(n){return Object.getOwnPropertyDescriptor(v,n).enumerable});w.push.apply(w,u)}return w}function ZG(v){for(var e=1;e<arguments.length;e++){var w=arguments[e]!=null?arguments[e]:{};if(e%2)BG(Object(w),!0).forEach(function(u){W$(v,u,w[u])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(v,Object.getOwnPropertyDescriptors(w));else BG(Object(w)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(w,u))})}return v}function R$(){for(var v=arguments.length,e=Array(v),w=0;w<v;w++)e[w]=arguments[w];return function(u){return e.reduceRight(function(n,H){return H(n)},u)}}function zw(v){return function e(){var w=this;for(var u=arguments.length,n=Array(u),H=0;H<u;H++)n[H]=arguments[H];return n.length>=v.length?v.apply(this,n):function(){for(var O=arguments.length,q=Array(O),G=0;G<O;G++)q[G]=arguments[G];return e.apply(w,[].concat(n,q))}}}function Ji(v){return{}.toString.call(v).includes("Object")}function G$(v){return!Object.keys(v).length}function Kw(v){return typeof v==="function"}function t$(v,e){return Object.prototype.hasOwnProperty.call(v,e)}function X$(v,e){if(!Ji(e))Q1("changeType");if(Object.keys(e).some(function(w){return!t$(v,w)}))Q1("changeField");return e}function Y$(v){if(!Kw(v))Q1("selectorType")}function J$(v){if(!(Kw(v)||Ji(v)))Q1("handlerType");if(Ji(v)&&Object.values(v).some(function(e){return!Kw(e)}))Q1("handlersType")}function Q$(v){if(!v)Q1("initialIsRequired");if(!Ji(v))Q1("initialType");if(G$(v))Q1("initialContent")}function z$(v,e){throw Error(v[e]||v.default)}var K$={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Q1=zw(z$)(K$),Yi={changes:X$,selector:Y$,handler:J$,initial:Q$};function U$(v){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Yi.initial(v),Yi.handler(e);var w={current:v},u=zw(L$)(w,e),n=zw(m$)(w),H=zw(Yi.changes)(v),O=zw($$)(w);function q(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(t){return t};return Yi.selector(X),X(w.current)}function G(X){R$(u,n,H,O)(X)}return[q,G]}function $$(v,e){return Kw(e)?e(v.current):e}function m$(v,e){return v.current=ZG(ZG({},v.current),e),e}function L$(v,e,w){return Kw(e)?e(v.current):Object.keys(w).forEach(function(u){var n;return(n=e[u])===null||n===void 0?void 0:n.call(e,v.current[u])}),w}var I$={create:U$},xG=I$;var CG={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function TG(v){return function e(){var w=this;for(var u=arguments.length,n=Array(u),H=0;H<u;H++)n[H]=arguments[H];return n.length>=v.length?v.apply(this,n):function(){for(var O=arguments.length,q=Array(O),G=0;G<O;G++)q[G]=arguments[G];return e.apply(w,[].concat(n,q))}}}function SG(v){return{}.toString.call(v).includes("Object")}function F$(v){if(!v)kG("configIsRequired");if(!SG(v))kG("configType");if(v.urls)return N$(),{paths:{vs:v.urls.monacoBase}};return v}function N$(){console.warn(DG.deprecation)}function B$(v,e){throw Error(v[e]||v.default)}var DG={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},kG=TG(B$)(DG),VG={config:F$};var _G=function(){for(var e=arguments.length,w=Array(e),u=0;u<e;u++)w[u]=arguments[u];return function(n){return w.reduceRight(function(H,O){return O(H)},n)}};function nP(v,e){return Object.keys(e).forEach(function(w){if(e[w]instanceof Object){if(v[w])Object.assign(e[w],nP(v[w],e[w]))}}),iP(iP({},v),e)}var Z$={type:"cancelation",msg:"operation is manually canceled"};function Qi(v){var e=!1,w=new Promise(function(u,n){v.then(function(H){return e?n(Z$):u(H)}),v.catch(n)});return w.cancel=function(){return e=!0},w}var x$=["monaco"],C$=xG.create({config:CG,isInitialized:!1,resolve:null,reject:null,monaco:null}),EG=NG(C$,2),Uw=EG[0],zi=EG[1];function T$(v){var e=VG.config(v),w=e.monaco,u=FG(e,x$);zi(function(n){return{config:nP(n.config,u),monaco:w}})}function S$(){var v=Uw(function(e){var{monaco:w,isInitialized:u,resolve:n}=e;return{monaco:w,isInitialized:u,resolve:n}});if(!v.isInitialized){if(zi({isInitialized:!0}),v.monaco)return v.resolve(v.monaco),Qi(PP);if(window.monaco&&window.monaco.editor)return yG(window.monaco),v.resolve(window.monaco),Qi(PP);_G(k$,V$)(_$)}return Qi(PP)}function k$(v){return document.body.appendChild(v)}function D$(v){var e=document.createElement("script");return v&&(e.src=v),e}function V$(v){var e=Uw(function(u){var{config:n,reject:H}=u;return{config:n,reject:H}}),w=D$("".concat(e.config.paths.vs,"/loader.js"));return w.onload=function(){return v()},w.onerror=e.reject,w}function _$(){var v=Uw(function(w){var{config:u,resolve:n,reject:H}=w;return{config:u,resolve:n,reject:H}}),e=window.require;e.config(v.config),e(["vs/editor/editor.main"],function(w){var u=w.m||w;yG(u),v.resolve(u)},function(w){v.reject(w)})}function yG(v){if(!Uw().monaco)zi({monaco:v})}function E$(){return Uw(function(v){var e=v.monaco;return e})}var PP=new Promise(function(v,e){return zi({resolve:v,reject:e})}),me={config:T$,init:S$,__getMonacoInstance:E$};var cG=Hr(eg(),1),no=Hr(eg(),1);var jG=Hr(eg(),1),Ui=Hr(eg(),1),fG=Hr(eg(),1),pG=Hr(eg(),1),$i=Hr(eg(),1),hm=Hr(eg(),1);var rt=Hr(eg(),1),Sg=Hr(eg(),1);var mi=Hr(eg(),1),y$={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},HP=y$,c$={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},j$=c$;function f$({children:v}){return fG.default.createElement("div",{style:j$.container},v)}var a$=f$,p$=a$;function d$({width:v,height:e,isEditorReady:w,loading:u,_ref:n,className:H,wrapperProps:O}){return Ui.default.createElement("section",{style:{...HP.wrapper,width:v,height:e},...O},!w&&Ui.default.createElement(p$,null,u),Ui.default.createElement("div",{ref:n,style:{...HP.fullWidth,...!w&&HP.hide},className:H}))}var s$=d$,aG=jG.memo(s$);function rm(v){pG.useEffect(v,[])}var dG=rm;function gm(v,e,w=!0){let u=$i.useRef(!0);$i.useEffect(u.current||!w?()=>{u.current=!1}:v,e)}var Xv=gm;function $w(){}function jh(v,e,w,u){return om(v,u)||vm(v,e,w,u)}function om(v,e){return v.editor.getModel(sG(v,e))}function vm(v,e,w,u){return v.editor.createModel(e,w,u?sG(v,u):void 0)}function sG(v,e){return v.Uri.parse(e)}function lm({original:v,modified:e,language:w,originalLanguage:u,modifiedLanguage:n,originalModelPath:H,modifiedModelPath:O,keepCurrentOriginalModel:q=!1,keepCurrentModifiedModel:G=!1,theme:X="light",loading:t="Loading...",options:M={},height:Y="100%",width:L="100%",className:_,wrapperProps:C={},beforeMount:V=$w,onMount:rr=$w}){let[Pr,lr]=no.useState(!1),[j,p]=no.useState(!0),vr=no.useRef(null),N=no.useRef(null),E=no.useRef(null),f=no.useRef(rr),x=no.useRef(V),tr=no.useRef(!1);dG(()=>{let k=me.init();return k.then((s)=>(N.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>vr.current?Zr():k.cancel()}),Xv(()=>{if(vr.current&&N.current){let k=vr.current.getOriginalEditor(),s=jh(N.current,v||"",u||w||"text",H||"");s!==k.getModel()&&k.setModel(s)}},[H],Pr),Xv(()=>{if(vr.current&&N.current){let k=vr.current.getModifiedEditor(),s=jh(N.current,e||"",n||w||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],Pr),Xv(()=>{let k=vr.current.getModifiedEditor();k.getOption(N.current.editor.EditorOption.readOnly)?k.setValue(e||""):e!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[e],Pr),Xv(()=>{vr.current?.getModel()?.original.setValue(v||"")},[v],Pr),Xv(()=>{let{original:k,modified:s}=vr.current.getModel();N.current.editor.setModelLanguage(k,u||w||"text"),N.current.editor.setModelLanguage(s,n||w||"text")},[w,u,n],Pr),Xv(()=>{N.current?.editor.setTheme(X)},[X],Pr),Xv(()=>{vr.current?.updateOptions(M)},[M],Pr);let Mr=no.useCallback(()=>{if(!N.current)return;x.current(N.current);let k=jh(N.current,v||"",u||w||"text",H||""),s=jh(N.current,e||"",n||w||"text",O||"");vr.current?.setModel({original:k,modified:s})},[w,e,n,v,u,H,O]),Xr=no.useCallback(()=>{!tr.current&&E.current&&(vr.current=N.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...M}),Mr(),N.current?.editor.setTheme(X),lr(!0),tr.current=!0)},[M,X,Mr]);no.useEffect(()=>{Pr&&f.current(vr.current,N.current)},[Pr]),no.useEffect(()=>{!j&&!Pr&&Xr()},[j,Pr,Xr]);function Zr(){let k=vr.current?.getModel();q||k?.original?.dispose(),G||k?.modified?.dispose(),vr.current?.dispose()}return no.default.createElement(aG,{width:L,height:Y,isEditorReady:Pr,loading:t,_ref:E,className:_,wrapperProps:C})}var em=lm,Kcg=cG.memo(em);function bm(v){let e=mi.useRef();return mi.useEffect(()=>{e.current=v},[v]),e.current}var wm=bm,Ki=new Map;function um({defaultValue:v,defaultLanguage:e,defaultPath:w,value:u,language:n,path:H,theme:O="light",line:q,loading:G="Loading...",options:X={},overrideServices:t={},saveViewState:M=!0,keepCurrentModel:Y=!1,width:L="100%",height:_="100%",className:C,wrapperProps:V={},beforeMount:rr=$w,onMount:Pr=$w,onChange:lr,onValidate:j=$w}){let[p,vr]=Sg.useState(!1),[N,E]=Sg.useState(!0),f=Sg.useRef(null),x=Sg.useRef(null),tr=Sg.useRef(null),Mr=Sg.useRef(Pr),Xr=Sg.useRef(rr),Zr=Sg.useRef(),k=Sg.useRef(u),s=wm(H),er=Sg.useRef(!1),or=Sg.useRef(!1);dG(()=>{let S=me.init();return S.then((nr)=>(f.current=nr)&&E(!1)).catch((nr)=>nr?.type!=="cancelation"&&console.error("Monaco initialization: error:",nr)),()=>x.current?T():S.cancel()}),Xv(()=>{let S=jh(f.current,v||u||"",e||n||"",H||w||"");S!==x.current?.getModel()&&(M&&Ki.set(s,x.current?.saveViewState()),x.current?.setModel(S),M&&x.current?.restoreViewState(Ki.get(H)))},[H],p),Xv(()=>{x.current?.updateOptions(X)},[X],p),Xv(()=>{!x.current||u===void 0||(x.current.getOption(f.current.editor.EditorOption.readOnly)?x.current.setValue(u):u!==x.current.getValue()&&(or.current=!0,x.current.executeEdits("",[{range:x.current.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),x.current.pushUndoStop(),or.current=!1))},[u],p),Xv(()=>{let S=x.current?.getModel();S&&n&&f.current?.editor.setModelLanguage(S,n)},[n],p),Xv(()=>{q!==void 0&&x.current?.revealLine(q)},[q],p),Xv(()=>{f.current?.editor.setTheme(O)},[O],p);let Ar=Sg.useCallback(()=>{if(!(!tr.current||!f.current)&&!er.current){Xr.current(f.current);let S=H||w,nr=jh(f.current,u||v||"",e||n||"",S||"");x.current=f.current?.editor.create(tr.current,{model:nr,automaticLayout:!0,...X},t),M&&x.current.restoreViewState(Ki.get(S)),f.current.editor.setTheme(O),q!==void 0&&x.current.revealLine(q),vr(!0),er.current=!0}},[v,e,w,u,n,H,X,t,M,O,q]);Sg.useEffect(()=>{p&&Mr.current(x.current,f.current)},[p]),Sg.useEffect(()=>{!N&&!p&&Ar()},[N,p,Ar]),k.current=u,Sg.useEffect(()=>{p&&lr&&(Zr.current?.dispose(),Zr.current=x.current?.onDidChangeModelContent((S)=>{or.current||lr(x.current.getValue(),S)}))},[p,lr]),Sg.useEffect(()=>{if(p){let S=f.current.editor.onDidChangeMarkers((nr)=>{let Yr=x.current.getModel()?.uri;if(Yr&&nr.find((Wr)=>Wr.path===Yr.path)){let Wr=f.current.editor.getModelMarkers({resource:Yr});j?.(Wr)}});return()=>{S?.dispose()}}return()=>{}},[p,j]);function T(){Zr.current?.dispose(),Y?M&&Ki.set(H,x.current.saveViewState()):x.current.getModel()?.dispose(),x.current.dispose()}return Sg.default.createElement(aG,{width:L,height:_,isEditorReady:p,loading:G,_ref:tr,className:C,wrapperProps:V})}var im=um,nm=rt.memo(im),gt=nm;var fh=Hr(eg(),1);var Po=Hr(rg(),1),Pm={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},ot=({entries:v,isRunning:e,onClear:w})=>{let[u,n]=fh.useState(!1),H=fh.useRef(null);fh.useEffect(()=>{if(!u&&H.current)H.current.scrollTop=H.current.scrollHeight},[v,u]);let O=()=>{let q=v.filter((G)=>G.type!=="separator").map((G)=>`[${G.timestamp}] ${G.type.toUpperCase()}: ${G.message}`).join(`
`);navigator.clipboard.writeText(q).catch(()=>{})};return Po.jsxDEV("div",{className:`ls-console${u?" ls-collapsed":""}`,children:[Po.jsxDEV("div",{className:"ls-console-header",onClick:()=>n((q)=>!q),children:[Po.jsxDEV(xl,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-console-title",children:["Console",e?" — running…":v.length>0?` (${v.length})`:""]},void 0,!0,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(q)=>{q.stopPropagation(),O()},title:"Copy output",disabled:v.length===0,children:Po.jsxDEV(pv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(q)=>{q.stopPropagation(),w()},title:"Clear console",disabled:v.length===0,children:Po.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),u?Po.jsxDEV(Ro,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Po.jsxDEV(Wv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&Po.jsxDEV("div",{className:"ls-console-output",ref:H,children:v.length===0?Po.jsxDEV("div",{className:"ls-console-empty",children:e?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):v.map((q,G)=>q.type==="separator"?Po.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},G,!1,void 0,this):Po.jsxDEV("div",{className:`ls-entry ${Pm[q.type]??"ls-log"}`,children:[Po.jsxDEV("span",{className:"ls-entry-time",children:q.timestamp},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-type",children:q.type.toUpperCase()},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-msg",children:q.message},void 0,!1,void 0,this)]},G,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=Hr(rg(),1),vt=({bindings:v,activeContext:e,onAdd:w,onRemove:u})=>{let n=()=>{let{characterId:O,characterName:q}=e;if(!O)return;if(v.some((G)=>G.type==="character"&&G.characterId===O))return;w({type:"character",characterId:O,displayName:q??O})},H=()=>{let{chatId:O,characterName:q}=e;if(!O)return;if(v.some((X)=>X.type==="chat"&&X.chatId===O))return;let G=q?`${q} — ${O.slice(0,8)}`:O.slice(0,8);w({type:"chat",chatId:O,displayName:G})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(E5,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),v.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):v.map((O,q)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?Vo.jsxDEV(Dh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(Sh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>u(q),title:"Remove binding",children:Vo.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:n,disabled:!e.characterId,title:e.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(Dh,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:H,disabled:!e.chatId,title:e.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(Sh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var lt=Hr(eg(),1);var so=Hr(rg(),1),et=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Ccg=et.flatMap((v)=>v.events.map((e)=>e.name)),ht=({scriptId:v,triggers:e,sendToBackend:w})=>{let[u,n]=lt.useState(!0),H=new Set(e),O=(q)=>{let G=H.has(q)?e.filter((X)=>X!==q):[...e,q];w({type:"update_script",id:v,patch:{triggers:G}})};return so.jsxDEV("div",{className:`ls-triggers${u?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>n((q)=>!q),children:[so.jsxDEV(M0,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),H.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:H.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:u?so.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):so.jsxDEV(Wv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&so.jsxDEV("div",{className:"ls-triggers-body",children:et.map((q)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:q.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:q.events.map((G)=>so.jsxDEV("button",{className:`ls-trigger-chip${H.has(G.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(G.name),title:G.description,children:G.name},G.name,!1,void 0,this))},void 0,!1,void 0,this)]},q.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var bt=`
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
     */
    addStyle(css: string): { remove(): void };

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
`;var nt=Hr(eg(),1);function wt(v){return v.split("`").map((w,u)=>{if(u%2===1)return w;return w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function Hm(v){return v.split("`").map((u,n)=>{if(n%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function z1(v,e){let w=`| ${v.join(" | ")} |`,u=`| ${v.map(()=>"---").join(" | ")} |`,n=e.map((H)=>`| ${H.map(Hm).join(" | ")} |`);return[w,u,...n].join(`
`)}function Om(v){return v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field}function qm(v){if(v==="silent")return"*silent*";if(v==="boolean")return'`"true" / "false"`';return"`string`"}function Am(v){return v.aliases==="—"?"—":`\`${v.aliases}\``}function Mm(v){let e=v.perms.length===0&&!v.note?"*none*":v.perms.map((w)=>`\`${w}\``).join(", ");return v.note?`${e}${v.perms.length?" ":""}${v.note}`:e}function Wm(){return`## Lumiverse Events

${z1(["Event","Group","Payload shape"],OP.map((e)=>[`\`${e.name}\``,e.group,`\`${e.payload}\``]))}`}function Rm(){return`## Permission Matrix

${qP.map((e)=>{let w=z1(["Method","Required permissions"],e.rows.map((u)=>[`\`${u.method}\``,Mm(u)]));return`### ${e.group}

${w}`}).join(`

`)}`}function Gm(){let v=z1(["Event","Payload fields","Emitted by"],AP.map((w)=>[`\`${w.name}\``,`\`${w.payload}\``,w.emittedBy])),e="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${v}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function tm(){let v=MP.map((w)=>{let u=z1(["Macro","Aliases","Returns","Description"],w.rows.map((H)=>[`\`${H.macro}\``,Am(H),qm(H.returns),H.desc])),n=[`### ${w.label}`];if(w.description)n.push(`*${w.description}*`);return n.push(u),n.join(`

`)}),e='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${v.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function Xm(){return`## Key Types

${WP.map((v)=>ut(v)).join(`

`)}`}function ut(v,e="###"){let w=wt(v.name),u=v.note?`*${wt(v.note)}*

`:"",n=z1(["Field","Type","Description"],v.fields.map((H)=>[`\`${Om(H)}\``,`\`${H.type}\``,H.desc]));return`${e} ${w}

${u}${n}`}function Ym(){return`## API Functions

${RP.map((e)=>{let w=z1(["Method","Arguments","Description"],e.rows.map((u)=>[`\`${u.name}\``,u.args,u.desc]));return`### ${e.group}

${w}`}).join(`

`)}`}function Jm(){let e=z1(["Method","Arguments","Description"],GP.map((n)=>[`\`${n.name}\``,n.args,n.desc])),w=z1(["Method","Arguments","Description"],tP.map((n)=>[`\`${n.name}\``,n.args,n.desc])),u=XP.map((n)=>ut(n,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",e,"","### ls:council-prompt","",w,"","### Built-in types","",u].join(`
`)}function Qm(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function zm(){let e=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,w=[Wm(),Rm(),Gm(),tm(),Xm(),Ym(),Jm(),Qm()];return`${e}

---

${w.join(`

---

`)}
`}function it(){let v=zm(),w=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,u=new Blob([v],{type:"text/markdown;charset=utf-8"}),n=URL.createObjectURL(u),H=document.createElement("a");H.href=n,H.download=w,H.click(),URL.revokeObjectURL(n)}var K=Hr(rg(),1),K1=({icon:v,title:e,defaultOpen:w=!1,children:u})=>{let[n,H]=nt.useState(w);return K.jsxDEV("div",{className:"ls-ref-section",children:[K.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>H((O)=>!O),children:[K.jsxDEV("span",{className:"ls-ref-section-title",children:[v,e]},void 0,!0,void 0,this),n?K.jsxDEV(Ro,{size:12},void 0,!1,void 0,this):K.jsxDEV(q0,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n&&K.jsxDEV("div",{className:"ls-ref-section-body",children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qg=({children:v})=>K.jsxDEV("code",{className:"ls-ref-code",children:v},void 0,!1,void 0,this),Km=({children:v})=>K.jsxDEV("span",{className:"ls-ref-perm",children:v},void 0,!1,void 0,this),Um=()=>K.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),$m=()=>K.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),ah=({label:v,cols:e})=>K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:e,className:"ls-ref-group-header",children:v},void 0,!1,void 0,this)},void 0,!1,void 0,this),OP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],mm=()=>{let v="";return K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:OP.map((e)=>{let w=e.group!==v?e.group:"";return v=e.group,K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],Lm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:qP.map((v)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ah,{label:v.group,cols:2},`hdr-${v.group}`,!1,void 0,this),v.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:[e.perms.length===0&&!e.note?K.jsxDEV(Um,{},void 0,!1,void 0,this):null,e.perms.map((w)=>K.jsxDEV(Km,{children:w},w,!1,void 0,this)),e.note?K.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:e.perms.length?4:0},children:e.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},e.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),AP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],Im=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:AP.map((v)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],Fm=({type:v})=>{if(v==="silent")return K.jsxDEV($m,{},void 0,!1,void 0,this);if(v==="boolean")return K.jsxDEV(qg,{children:'"true" / "false"'},void 0,!1,void 0,this);return K.jsxDEV(qg,{children:"string"},void 0,!1,void 0,this)},Nm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:MP.map((v)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ah,{label:v.description?K.jsxDEV(K.Fragment,{children:[v.label," — ",K.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:v.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):v.label,cols:4},`hdr-${v.label}`,!1,void 0,this),v.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:e.aliases==="—"?K.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):K.jsxDEV(qg,{children:e.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:K.jsxDEV(Fm,{type:e.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},e.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],Bm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:WP.map((v)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&K.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${e.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],Zm=()=>K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:RP.map((v)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV(ah,{label:v.group,cols:3},`hdr-${v.group}`,!1,void 0,this),v.rows.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.group}-${e.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],tP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],xm=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],XP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],Cm=()=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",K.jsxDEV(qg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",K.jsxDEV(qg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",K.jsxDEV(qg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",K.jsxDEV(qg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",K.jsxDEV(qg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",K.jsxDEV(qg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),K.jsxDEV("table",{className:"ls-ref-table",children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:[K.jsxDEV(ah,{label:"ls:components",cols:3},void 0,!1,void 0,this),GP.map((v)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),K.jsxDEV(ah,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),tP.map((v)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),K.jsxDEV(ah,{label:"ls:icons",cols:3},void 0,!1,void 0,this),xm.map((v)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[K.jsxDEV("thead",{children:K.jsxDEV("tr",{children:[K.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),K.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("tbody",{children:XP.map((v)=>K.jsxDEV(K.Fragment,{children:[K.jsxDEV("tr",{children:K.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&K.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((e)=>K.jsxDEV("tr",{children:[K.jsxDEV("td",{children:K.jsxDEV(qg,{children:e.optional&&!e.field.endsWith("?")?`${e.field}?`:e.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV("td",{children:K.jsxDEV("span",{className:"ls-ref-muted",children:e.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${e.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Pt=()=>K.jsxDEV("div",{className:"ls-ref",children:[K.jsxDEV("div",{className:"ls-ref-toolbar",children:K.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>it(),title:"Download the current reference as a Markdown file",children:[K.jsxDEV(Ye,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(M0,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:K.jsxDEV(mm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(j5,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:K.jsxDEV(Lm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(s5,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[K.jsxDEV(Im,{},void 0,!1,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",K.jsxDEV(qg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(_5,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[K.jsxDEV(Nm,{},void 0,!1,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",K.jsxDEV(qg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",K.jsxDEV(qg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:K.jsxDEV(Bm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(c5,{size:11},void 0,!1,void 0,this),title:"API Functions",children:K.jsxDEV(Zm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(Z5,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:K.jsxDEV(Cm,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),K.jsxDEV(K1,{icon:K.jsxDEV(a5,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[K.jsxDEV("p",{className:"ls-ref-muted",children:[K.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",K.jsxDEV(qg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",K.jsxDEV(qg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",K.jsxDEV(qg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",K.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),K.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[K.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",K.jsxDEV(qg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",K.jsxDEV(qg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",K.jsxDEV(qg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",K.jsxDEV(qg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Lr=Hr(rg(),1),Ht=!1,Ot=({script:v,allScripts:e,activeContext:w,isRunning:u,consoleEntries:n,editorFontSize:H,autosaveDebounceMs:O,onClearConsole:q,sendToBackend:G})=>{let[X,t]=to.useState(v.code),[M,Y]=to.useState(!1),[L,_]=to.useState(!1),[C,V]=to.useState(v.name),[rr,Pr]=to.useState("code"),[lr,j]=to.useState(!1),[p,vr]=to.useState(!1),N=to.useRef(null),E=to.useRef(null);to.useEffect(()=>{t(v.code),Y(!1),V(v.name),vr(!1)},[v.id,v.code,v.name]),to.useEffect(()=>{G({type:"get_active_context"})},[v.id,G]),to.useEffect(()=>{let or=setInterval(()=>{G({type:"get_active_context"})},2000);return()=>clearInterval(or)},[G]);let f=to.useCallback((or)=>{G({type:"update_script",id:v.id,patch:{code:or}}),Y(!1)},[v.id,G]),x=(or)=>{if(or===void 0)return;if(t(or),Y(or!==v.code),N.current)clearTimeout(N.current);N.current=setTimeout(()=>f(or),O)},tr=(or,Ar)=>{if(E.current=or,!Ht){Ht=!0;let T=Ar.languages.typescript.javascriptDefaults;T.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),T.setCompilerOptions({target:Ar.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),T.addExtraLib(bt,"ts:lumiverse/lumiscript-api.d.ts")}or.addCommand(Ar.KeyMod.CtrlCmd|Ar.KeyCode.KeyS,()=>{if(N.current)clearTimeout(N.current);f(or.getValue())}),or.getModel()?.setEOL(Ar.editor.EndOfLineSequence.LF)},Mr=()=>{if(u)return;if(N.current)clearTimeout(N.current),N.current=null;if(M)f(E.current?.getValue()??X);G({type:"run_script",id:v.id})},Xr=()=>{let or=C.trim();if(or&&or!==v.name)G({type:"update_script",id:v.id,patch:{name:or}});_(!1)},Zr=(or)=>{let Ar=v.bindings??[];G({type:"update_script",id:v.id,patch:{bindings:[...Ar,or]}})},k=(or)=>{G({type:"update_script",id:v.id,patch:{bindings:(v.bindings??[]).filter((Ar,T)=>T!==or)}})},s=()=>{if(v.allowDangerous)G({type:"update_script",id:v.id,patch:{allowDangerous:!1}});else if(p)vr(!1),G({type:"update_script",id:v.id,patch:{allowDangerous:!0}});else vr(!0)},er=(or)=>new Date(or).toLocaleString();return Lr.jsxDEV("div",{className:"ls-editor-root",children:[Lr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?Lr.jsxDEV("input",{className:"ls-editor-name-input",value:C,autoFocus:!0,onChange:(or)=>V(or.target.value),onBlur:Xr,onKeyDown:(or)=>{if(or.key==="Enter")Xr();if(or.key==="Escape")V(v.name),_(!1)}},void 0,!1,void 0,this):Lr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>_(!0),title:"Click to rename",style:{cursor:"text"},children:v.name},void 0,!1,void 0,this),M&&Lr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>Pr("code"),title:"Code editor",children:[Lr.jsxDEV(Wo,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Lr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>Pr("docs"),title:"API reference",children:[Lr.jsxDEV(x5,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),v.type!=="library"&&Lr.jsxDEV("button",{className:`ls-btn${u?"":" ls-accent"}`,onClick:Mr,disabled:u,children:[u?Lr.jsxDEV(W1,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Lr.jsxDEV(p5,{size:15},void 0,!1,void 0,this),u?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Lr.jsxDEV("div",{className:"ls-editor-monaco",children:Lr.jsxDEV(gt,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:X,onChange:x,onMount:tr,options:{minimap:{enabled:!1},fontSize:H,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},v.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Lr.jsxDEV("div",{className:"ls-editor-docs",children:Lr.jsxDEV(Pt,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Lr.jsxDEV(ot,{entries:n,isRunning:u,onClear:q},void 0,!1,void 0,this),v.type==="trigger"&&Lr.jsxDEV(ht,{scriptId:v.id,triggers:v.triggers??[],sendToBackend:G},void 0,!1,void 0,this),v.type==="trigger"&&Lr.jsxDEV(vt,{bindings:v.bindings??[],activeContext:w,onAdd:Zr,onRemove:k},void 0,!1,void 0,this),p&&Lr.jsxDEV("div",{className:"ls-danger-confirm",children:[Lr.jsxDEV(kh,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:s,children:"Enable"},void 0,!1,void 0,this),Lr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>vr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("div",{className:"ls-meta-footer",children:[Lr.jsxDEV("span",{className:"ls-meta-item",children:Lr.jsxDEV("button",{className:"ls-danger-btn",onClick:s,title:"Toggle dangerous mode",children:[v.allowDangerous?Lr.jsxDEV(kh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Lr.jsxDEV(gw,{size:11},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:v.allowDangerous?"ls-dangerous":"",children:v.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Lr.jsxDEV(Je,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("select",{className:"ls-folder-select",value:v.folder??"",onChange:(or)=>{let Ar=or.target.value;if(Ar==="__new__"){let T=window.prompt("New folder name:");if(T?.trim())G({type:"update_script",id:v.id,patch:{folder:T.trim()}})}else G({type:"update_script",id:v.id,patch:{folder:Ar}})},children:[Lr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(e.map((or)=>or.folder).filter((or)=>!!or))].sort().map((or)=>Lr.jsxDEV("option",{value:or,children:or},or,!1,void 0,this)),Lr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(D5,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Updated ",er(v.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item",children:[Lr.jsxDEV(C5,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["Created ",er(v.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:v.id,onClick:()=>{navigator.clipboard.writeText(v.id).catch(()=>{}),j(!0),setTimeout(()=>j(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?Lr.jsxDEV(T5,{size:10},void 0,!1,void 0,this):Lr.jsxDEV(pv,{size:10},void 0,!1,void 0,this),Lr.jsxDEV("span",{children:["ID ",v.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $o=Hr(rg(),1),At=({scripts:v,initialScriptId:e,activeContext:w,execInfo:u,activeRunScriptId:n,isRunning:H,consoleHistory:O,editorFontSize:q,autosaveDebounceMs:G,onClearConsole:X,onClose:t,sendToBackend:M})=>{let[Y,L]=mw.useState(e),_=v.find((lr)=>lr.id===Y)??null;mw.useEffect(()=>{L(e)},[e]),mw.useEffect(()=>{let lr=(j)=>{if(j.key==="Escape")t()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[t]);let C=_?O[_.id]??[]:[],V=H&&_?.id===n;return qt.createPortal($o.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)t()},children:$o.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[$o.jsxDEV("div",{className:"ls-modal-header",children:[$o.jsxDEV("span",{className:"ls-modal-title",children:[$o.jsxDEV(xl,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),$o.jsxDEV("button",{className:"ls-modal-close",onClick:t,title:"Close (Esc)",children:$o.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$o.jsxDEV("div",{className:"ls-modal-body",children:[$o.jsxDEV("div",{className:"ls-modal-sidebar",children:$o.jsxDEV(Xi,{scripts:v,selectedId:Y,execInfo:u,onSelect:L,onEdit:L,sendToBackend:M},void 0,!1,void 0,this)},void 0,!1,void 0,this),$o.jsxDEV("div",{className:"ls-modal-main",children:_?$o.jsxDEV(Ot,{script:_,allScripts:v,activeContext:w,isRunning:V,consoleEntries:C,editorFontSize:q,autosaveDebounceMs:G,onClearConsole:()=>{if(_)X(_.id)},sendToBackend:M},void 0,!1,void 0,this):$o.jsxDEV("div",{className:"ls-placeholder",children:[$o.jsxDEV(xl,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),$o.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var Li=Hr(rg(),1),Mt=({scripts:v,activeContext:e,execInfo:w,activeRunScriptId:u,isRunning:n,consoleHistory:H,editorFontSize:O,autosaveDebounceMs:q,onClearConsole:G,onScriptOpened:X,sendToBackend:t})=>{let[M,Y]=Ii.useState(null);return Ii.useEffect(()=>{if(M&&X)X(M)},[M,X]),Li.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[Li.jsxDEV(Xi,{scripts:v,selectedId:M,execInfo:w,onSelect:()=>{},onEdit:Y,sendToBackend:t},void 0,!1,void 0,this),M!==null&&Li.jsxDEV(At,{scripts:v,initialScriptId:M,activeContext:e,execInfo:w,activeRunScriptId:u,isRunning:n,consoleHistory:H,editorFontSize:O,autosaveDebounceMs:q,onClearConsole:G,onClose:()=>Y(null),sendToBackend:t},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Wt=Hr(eg(),1);var yg=Hr(rg(),1),Tm=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function Sm(v){if(v===void 0)return"undefined";if(v===null)return"null";if(typeof v==="string")return v.length>80?v.slice(0,77)+"…":v;try{let e=JSON.stringify(v);return e.length>80?e.slice(0,77)+"…":e}catch{return String(v)}}var Rt=({variables:v,sendToBackend:e})=>{let[w,u]=Wt.useState(new Set(["local","global","chat","character"])),n=(O)=>{u((q)=>{let G=new Set(q);if(G.has(O))G.delete(O);else G.add(O);return G})},H=v?Object.values(v).reduce((O,q)=>O+Object.keys(q).length,0):0;return yg.jsxDEV("div",{className:"ls-status-section",children:[yg.jsxDEV("div",{className:"ls-inject-header",children:[yg.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Variables",H>0&&yg.jsxDEV("span",{className:"ls-inject-count",children:H},void 0,!1,void 0,this),yg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>e({type:"get_variables"}),children:yg.jsxDEV(A0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yg.jsxDEV("div",{className:"ls-status-section-body",children:!v?yg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):H===0?yg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):Tm.map(({key:O,label:q,hint:G})=>{let X=v[O],t=Object.keys(X),M=w.has(O);if(t.length===0)return null;return yg.jsxDEV("div",{className:"ls-vars-scope",children:[yg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>n(O),children:[M?yg.jsxDEV(Ro,{size:10},void 0,!1,void 0,this):yg.jsxDEV(Wv,{size:10},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-name",children:q},void 0,!1,void 0,this),G&&yg.jsxDEV("span",{className:"ls-vars-scope-hint",children:G},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-count",children:t.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M&&yg.jsxDEV("div",{className:"ls-vars-scope-body",children:t.sort().map((Y)=>yg.jsxDEV("div",{className:"ls-vars-entry",children:[yg.jsxDEV("span",{className:"ls-vars-key",children:Y},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-value",title:String(X[Y]),children:Sm(X[Y])},void 0,!1,void 0,this)]},Y,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var U1=Hr(eg(),1);function Fi(v){if(!Number.isFinite(v)||v<=0)return"0 B";let e=["B","KB","MB","GB"],w=Math.min(e.length-1,Math.floor(Math.log(v)/Math.log(1024))),u=v/Math.pow(1024,w);return`${w===0?u.toFixed(0):u.toFixed(1)} ${e[w]}`}function Lw(v){let e;if(typeof v==="number")e=v;else{if(!v)return"—";e=new Date(v).getTime()}if(!Number.isFinite(e)||e<=0)return"—";let w=Date.now()-e;if(w<60000)return"just now";if(w<3600000)return`${Math.floor(w/60000)}m ago`;if(w<86400000)return`${Math.floor(w/3600000)}h ago`;if(w<2592000000)return`${Math.floor(w/86400000)}d ago`;return new Date(e).toISOString().slice(0,10)}var YP={script:"script",character:"char",chat:"chat"},Gt={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function Ni(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(w,u,n,H,O,q,G)=>{if(u)return`<span class="ls-json-key">${u}</span>${n}`;if(H)return`<span class="ls-json-string">${H}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(q)return`<span class="ls-json-null">${q}</span>`;if(G)return`<span class="ls-json-number">${G}</span>`;return w})}async function JP(v){try{return await navigator.clipboard.writeText(v),!0}catch{return!1}}var Ir=Hr(rg(),1),ph=["script","character","chat"],km=10485760,Dm=41943040,Vm=52428800;function _m(v){if(v>=Dm)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(v>=km)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function Em(v){if(v.scope==="character"){if(v.characterName)return`character: ${v.characterName} (${v.characterId})
${v.path}`;if(v.characterId)return`character: ${v.characterId} (not currently loaded)
${v.path}`}if(v.scope==="chat"){if(v.chatName)return`chat: ${v.chatName} (${v.chatId})
${v.path}`;if(v.chatId)return`chat: ${v.chatId} (not currently loaded)
${v.path}`}return v.path}function ym(v,e,w,u){switch(w){case"name":return v.name.localeCompare(e.name,void 0,{sensitivity:"base"});case"scope":return v.scope.localeCompare(e.scope);case"owner":{let n=u.get(v.scriptId)??v.scriptId,H=u.get(e.scriptId)??e.scriptId;return n.localeCompare(H,void 0,{sensitivity:"base"})}case"size":return v.sizeBytes-e.sizeBytes;case"updated":return new Date(v.modifiedAt).getTime()-new Date(e.modifiedAt).getTime()}}var tt=({collections:v,scripts:e,sendToBackend:w,onInspect:u,onDrop:n})=>{let[H,O]=U1.useState(""),[q,G]=U1.useState(()=>new Set(ph)),[X,t]=U1.useState(null),[M,Y]=U1.useState("asc"),L=U1.useMemo(()=>{let N=new Map;for(let E of e)N.set(E.id,E.name);return N},[e]),_=U1.useMemo(()=>{if(!v)return null;let N=v;if(q.size<ph.length)N=N.filter((f)=>q.has(f.scope));let E=H.trim().toLowerCase();if(E)N=N.filter((f)=>f.name.toLowerCase().includes(E));if(X){let f=M==="asc"?1:-1;N=N.slice().sort((x,tr)=>ym(x,tr,X,L)*f)}return N},[v,q,H,X,M,L]),C=()=>w({type:"list_collections"}),V=(N)=>{G((E)=>{let f=new Set(E);if(f.has(N))f.delete(N);else f.add(N);if(f.size===0)return new Set(ph);return f})},rr=(N)=>{if(X!==N){t(N),Y("asc");return}if(M==="asc"){Y("desc");return}t(null)},Pr=()=>{O(""),G(new Set(ph))},lr=v?.length??0,j=_?.length??0,p=H.trim().length>0||q.size<ph.length,vr=(N)=>{if(X!==N)return Ir.jsxDEV(k5,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return M==="asc"?Ir.jsxDEV(Wv,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Ir.jsxDEV(Ro,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Ir.jsxDEV("div",{className:"ls-status-section",children:[Ir.jsxDEV("div",{className:"ls-inject-header",children:[Ir.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Ir.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:C,children:Ir.jsxDEV(A0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-status-section-body",children:v===null?Ir.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):v.length===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Ir.jsxDEV(Ir.Fragment,{children:[Ir.jsxDEV("div",{className:"ls-collections-filter",children:[Ir.jsxDEV("div",{className:"ls-collections-filter-search",children:[Ir.jsxDEV(G1,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:H,onChange:(N)=>O(N.target.value)},void 0,!1,void 0,this),H&&Ir.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Ir.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-collections-filter-chips",children:ph.map((N)=>{let E=q.has(N);return Ir.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":N,"aria-pressed":E,title:E?`Hide ${N}-scoped`:`Show ${N}-scoped`,onClick:()=>V(N),children:YP[N]},N,!1,void 0,this)})},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${j}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j===0?Ir.jsxDEV("div",{className:"ls-section-empty",children:[Ir.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Ir.jsxDEV("button",{onClick:Pr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Ir.jsxDEV("div",{className:"ls-collections-list",children:[Ir.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",vr("name")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",vr("scope")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",vr("owner")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",vr("size")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",vr("updated")]},void 0,!0,void 0,this),Ir.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),_.map((N)=>{let E=L.get(N.scriptId)??`(${N.scriptId.slice(0,8)}…)`,f=!L.has(N.scriptId),x=f?`scriptId: ${N.scriptId} (not currently loaded)`:`${E} (${N.scriptId})`;return Ir.jsxDEV("div",{className:"ls-collections-row",children:[Ir.jsxDEV("span",{className:"ls-collections-name",title:N.name,children:N.name},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-scope","data-scope":N.scope,title:Em(N),children:YP[N.scope]},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:x,children:E},void 0,!1,void 0,this),(()=>{let tr=_m(N.sizeBytes),Mr=(N.sizeBytes/Vm*100).toFixed(N.sizeBytes<1048576?2:1),Xr=`${N.sizeBytes.toLocaleString()} bytes (${Mr}% of 50 MB cap)`;return Ir.jsxDEV("span",{className:"ls-collections-size","data-budget":tr.tier,title:Xr,style:tr.tier==="normal"?void 0:{color:tr.color,fontWeight:600},children:Fi(N.sizeBytes)},void 0,!1,void 0,this)})(),Ir.jsxDEV("span",{className:"ls-collections-updated",title:N.modifiedAt,children:Lw(N.modifiedAt)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-collections-actions",children:[Ir.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>u(N.path),children:Ir.jsxDEV(V5,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>n(N),children:Ir.jsxDEV(Uo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},N.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var kg=Hr(eg(),1),Jt=Hr(xh(),1);var vl=Hr(eg(),1),Xt=Hr(xh(),1);var Yg=Hr(rg(),1);function cm(v){let{id:e,createdAt:w,updatedAt:u,...n}=v;try{return JSON.stringify(n,null,2)}catch{return"{}"}}var Yt=({path:v,record:e,onClose:w,sendToBackend:u})=>{let[n,H]=vl.useState(()=>cm(e)),[O,q]=vl.useState(null),G=vl.useRef(null),X=vl.useRef(null),t=vl.useRef(null);vl.useEffect(()=>{let C=(V)=>{if(V.key==="Escape")w()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[w]),vl.useEffect(()=>{let C=(V)=>{if(V.key!=="Tab")return;let rr=G.current;if(!rr)return;let Pr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Pr.length===0)return;let lr=Pr[0],j=Pr[Pr.length-1],p=document.activeElement,vr=p!==null&&rr.contains(p);if(V.shiftKey){if(!vr||p===lr)V.preventDefault(),j.focus()}else if(!vr||p===j)V.preventDefault(),lr.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[]),vl.useEffect(()=>{let C=setTimeout(()=>X.current?.focus(),0);return()=>clearTimeout(C)},[]);let M=()=>{let C;try{C=JSON.parse(n)}catch(V){let rr=V instanceof Error?V.message:String(V);q(`JSON parse error: ${rr}`);return}if(C===null||typeof C!=="object"||Array.isArray(C)){q("Record must be a JSON object — not an array, null, or primitive.");return}q(null),u({type:"update_record",path:v,recordId:String(e.id),patch:C}),w()},Y=(C)=>{if((C.metaKey||C.ctrlKey)&&C.key==="Enter")C.preventDefault(),M()},L=String(e.id),_=Yg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(C)=>{if(C.target===C.currentTarget)w()},children:Yg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:G,onClick:(C)=>C.stopPropagation(),children:[Yg.jsxDEV("div",{className:"ls-modal-header",children:[Yg.jsxDEV("span",{className:"ls-modal-title",children:[Yg.jsxDEV(sv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Yg.jsxDEV("button",{className:"ls-modal-close",onClick:w,title:"Cancel (Esc)",children:Yg.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-body",children:[Yg.jsxDEV("div",{className:"ls-edit-meta",children:[Yg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Yg.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Yg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Yg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Yg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Yg.jsxDEV("pre",{ref:t,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Ni(n)+`
`}},void 0,!1,void 0,this),Yg.jsxDEV("textarea",{ref:X,className:"ls-edit-textarea",value:n,onChange:(C)=>{if(H(C.target.value),O)q(null)},onKeyDown:Y,onScroll:(C)=>{let V=t.current;if(!V)return;V.scrollTop=C.currentTarget.scrollTop,V.scrollLeft=C.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Yg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Yg.jsxDEV(Cv,{size:12},void 0,!1,void 0,this),Yg.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-drop-actions",children:[Yg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:w,children:"Cancel"},void 0,!1,void 0,this),Yg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:M,title:"Save (Ctrl/Cmd+Enter)",children:[Yg.jsxDEV(rw,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Xt.createPortal(_,document.body)};var a=Hr(rg(),1),Le=50,jm=150,fm=1200,am=4000,Qt=({path:v,summary:e,records:w,total:u,error:n,stats:H,refreshToken:O,onClose:q,sendToBackend:G})=>{let[X,t]=kg.useState(""),[M,Y]=kg.useState(""),[L,_]=kg.useState(0),[C,V]=kg.useState("shallow"),[rr,Pr]=kg.useState(0),[lr,j]=kg.useState(()=>new Set),[p,vr]=kg.useState(null),[N,E]=kg.useState(null),[f,x]=kg.useState("records");kg.useEffect(()=>{let S=setTimeout(()=>Y(X),jm);return()=>clearTimeout(S)},[X]),kg.useEffect(()=>{_(0)},[M,C]),kg.useEffect(()=>{let S=M.trim();if(C==="jsonquery")G({type:"inspect_collection",path:v,jsonqueryFilter:S||void 0,limit:Le,offset:L*Le});else G({type:"inspect_collection",path:v,textFilter:S||void 0,deepFilter:C==="deep"||void 0,limit:Le,offset:L*Le})},[v,M,C,L,O,rr,G]),kg.useEffect(()=>{let S=(nr)=>{if(nr.key==="Escape")q()};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[q]);let tr=Math.max(1,Math.ceil(u/Le)),Mr=u===0?0:L*Le+1,Xr=Math.min(u,(L+1)*Le),Zr=kg.useMemo(()=>{let S=v.match(/\/([^/]+)\.json$/);return S?S[1]:v},[v]),k=kg.useMemo(()=>{if(!e)return null;if(e.scope==="character"&&e.characterName)return`character: ${e.characterName}`;if(e.scope==="chat"&&e.chatName)return`chat: ${e.chatName}`;return null},[e]),s=(S)=>{j((nr)=>{let Yr=new Set(nr);return Yr.add(S),Yr}),setTimeout(()=>{j((nr)=>{if(!nr.has(S))return nr;let Yr=new Set(nr);return Yr.delete(S),Yr})},fm)},er=async(S)=>{if(await JP(String(S.id)))s(`${S.id}:id`)},or=async(S)=>{if(await JP(JSON.stringify(S,null,2)))s(`${S.id}:json`)};kg.useEffect(()=>{if(N===null)return;let S=setTimeout(()=>E(null),am);return()=>clearTimeout(S)},[N]);let Ar=(S)=>{let nr=String(S.id);if(N===nr)G({type:"delete_record",path:v,recordId:nr}),E(null);else E(nr)};kg.useEffect(()=>{E(null),vr(null)},[L,M,C,v]),kg.useEffect(()=>{x("records")},[v]),kg.useEffect(()=>{if(f!=="stats")return;G({type:"analyze_collection",path:v})},[f,v,O,rr,G]);let T=a.jsxDEV("div",{className:"ls-modal-overlay",onClick:(S)=>{if(S.target===S.currentTarget)q()},children:a.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(S)=>S.stopPropagation(),children:[a.jsxDEV("div",{className:"ls-modal-header",children:[a.jsxDEV("span",{className:"ls-modal-title",children:[a.jsxDEV(dv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-title-name",children:Zr},void 0,!1,void 0,this),k&&a.jsxDEV("span",{className:"ls-inspect-title-path",title:v,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-title-path",title:v,children:v},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-modal-close",onClick:()=>Pr((S)=>S+1),title:"Refresh records",style:{marginRight:4},children:a.jsxDEV(A0,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-modal-close",onClick:q,title:"Close (Esc)",children:a.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[a.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>x("records"),children:[a.jsxDEV(y5,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),a.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>x("stats"),children:[a.jsxDEV(A1,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{className:"ls-inspect-toolbar",children:[a.jsxDEV("div",{className:"ls-inspect-search",children:[a.jsxDEV(G1,{size:12},void 0,!1,void 0,this),a.jsxDEV("input",{type:C==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:C==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":C==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:X,onChange:(S)=>t(S.target.value),autoFocus:!0,spellCheck:C!=="jsonquery",autoCorrect:C==="jsonquery"?"off":"on",autoCapitalize:C==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),a.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>V("shallow"),children:a.jsxDEV(G1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>V("deep"),children:a.jsxDEV(M1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>V("jsonquery"),children:a.jsxDEV(Wo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-pager",children:[a.jsxDEV("span",{className:"ls-inspect-pager-status",children:u===0?"No matching records":a.jsxDEV(a.Fragment,{children:["Showing ",a.jsxDEV("strong",{children:Mr},void 0,!1,void 0,this),"–",a.jsxDEV("strong",{children:Xr},void 0,!1,void 0,this)," of ",a.jsxDEV("strong",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>_((S)=>Math.max(0,S-1)),disabled:L===0,title:"Previous page",children:a.jsxDEV(S5,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>_((S)=>Math.min(tr-1,S+1)),disabled:L>=tr-1,title:"Next page",children:a.jsxDEV(q0,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n&&a.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[a.jsxDEV(Cv,{size:12},void 0,!1,void 0,this),a.jsxDEV("span",{children:n},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-body",children:w===null?a.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):w.length===0?a.jsxDEV("div",{className:"ls-inspect-empty",children:u===0&&M?a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{children:["No records match “",M,"”"]},void 0,!0,void 0,this),a.jsxDEV("button",{onClick:()=>t(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):u===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):a.jsxDEV("div",{className:"ls-inspect-records",children:w.map((S)=>{let nr=String(S.id),Yr=lr.has(`${S.id}:id`),Wr=lr.has(`${S.id}:json`);return a.jsxDEV("div",{className:"ls-inspect-record",children:[a.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${nr}`,children:[a.jsxDEV("code",{children:[nr.slice(0,12),"…"]},void 0,!0,void 0,this),a.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",a.jsxDEV("time",{title:new Date(S.createdAt).toISOString(),children:Lw(S.createdAt)},void 0,!1,void 0,this),S.updatedAt!==S.createdAt&&a.jsxDEV(a.Fragment,{children:[" · ","updated ",a.jsxDEV("time",{title:new Date(S.updatedAt).toISOString(),children:Lw(S.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:Yr?"Copied!":"Copy ID",onClick:()=>er(S),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Yr?"var(--lumiverse-accent)":"inherit",opacity:Yr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(pv,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:Wr?"Copied!":"Copy full JSON",onClick:()=>or(S),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Wr?"var(--lumiverse-accent)":"inherit",opacity:Wr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(Bl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>vr(S),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(sv,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action"+(N===nr?" ls-inspect-record-action-confirm":""),title:N===nr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Ar(S),style:{background:N===nr?"rgba(246, 130, 130, 0.18)":"transparent",border:N===nr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:N===nr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:N===nr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:N===nr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:N===nr?600:400,borderRadius:3},children:[a.jsxDEV(Uo,{size:11},void 0,!1,void 0,this),N===nr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:Ni(pm(S))}},void 0,!1,void 0,this)]},nr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&a.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:H===null?a.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):H.fields.length===0?a.jsxDEV("div",{className:"ls-inspect-empty",children:H.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):a.jsxDEV(rL,{stats:H},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return a.jsxDEV(a.Fragment,{children:[Jt.createPortal(T,document.body),p&&a.jsxDEV(Yt,{path:v,record:p,onClose:()=>vr(null),sendToBackend:G},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function pm(v){let{id:e,createdAt:w,updatedAt:u,...n}=v;try{return JSON.stringify(n,null,2)}catch{return String(v)}}var dm={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function sm(v){if(typeof v==="string")return`"${v.length>32?v.slice(0,30)+"…":v}"`;if(v===null)return"null";return String(v)}function QP(v){if(!Number.isFinite(v))return"—";return Number.isInteger(v)?String(v):v.toFixed(2)}var rL=({stats:v})=>{return a.jsxDEV("div",{className:"ls-inspect-stats",children:[a.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",a.jsxDEV("strong",{children:v.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",v.totalRecords===1?"record":"records"," ·"," ",a.jsxDEV("strong",{children:v.fields.length},void 0,!1,void 0,this)," ",v.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-grid",children:v.fields.map((e)=>a.jsxDEV(gL,{field:e,totalRecords:v.totalRecords},e.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},gL=({field:v,totalRecords:e})=>{let w=e===0?0:Math.round(v.presence/e*100),u=Object.entries(v.types);return u.sort((n,H)=>H[1]-n[1]),a.jsxDEV("div",{className:"ls-inspect-stats-card",children:[a.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[a.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:v.name,children:v.name},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${v.presence} of ${e} records`,children:[w,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:u.map(([n,H])=>a.jsxDEV("span",{className:dm[n],children:[n," · ",H]},n,!0,void 0,this))},void 0,!1,void 0,this),v.numericRange&&a.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[a.jsxDEV("span",{children:["min ",a.jsxDEV("strong",{children:QP(v.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),a.jsxDEV("span",{children:["max ",a.jsxDEV("strong",{children:QP(v.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),a.jsxDEV("span",{children:["mean ",a.jsxDEV("strong",{children:QP(v.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.topValues.length>0&&a.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[a.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",v.topValues.length," of ",v.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:v.topValues.map((n,H)=>a.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(n.value),children:[a.jsxDEV("code",{children:sm(n.value)},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",n.count]},void 0,!0,void 0,this)]},H,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Iw=Hr(eg(),1),zt=Hr(xh(),1);var ug=Hr(rg(),1);function oL(v){if(v.scope==="character"&&v.characterName&&v.characterId)return{label:"Character",name:v.characterName,id:v.characterId};if(v.scope==="chat"&&v.chatName&&v.chatId)return{label:"Chat",name:v.chatName,id:v.chatId};return null}var Kt=({target:v,recordCount:e,onConfirm:w,onCancel:u})=>{let n=Iw.useRef(null);Iw.useEffect(()=>{let O=(q)=>{if(q.key==="Escape")u()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[u]),Iw.useEffect(()=>{let O=(q)=>{if(q.key!=="Tab")return;let G=n.current;if(!G)return;let X=Array.from(G.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(X.length===0)return;let t=X[0],M=X[X.length-1],Y=document.activeElement,L=Y!==null&&G.contains(Y);if(q.shiftKey){if(!L||Y===t)q.preventDefault(),M.focus()}else if(!L||Y===M)q.preventDefault(),t.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let H=ug.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)u()},children:ug.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:n,onClick:(O)=>O.stopPropagation(),children:[ug.jsxDEV("div",{className:"ls-modal-header",children:[ug.jsxDEV("span",{className:"ls-modal-title",children:[ug.jsxDEV(Uo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ug.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:ug.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-body",children:[ug.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target",children:[ug.jsxDEV("div",{className:"ls-drop-target-name",children:v.name},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target-meta",children:[ug.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":v.scope,children:Gt[v.scope]},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-drop-target-size",children:Fi(v.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=oL(v);if(!O)return null;return ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",ug.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ug.jsxDEV("div",{className:"ls-drop-target-path",title:v.path,children:v.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),e===null?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):e>=0?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:e===0?"Collection is currently empty.":ug.jsxDEV(ug.Fragment,{children:["Will delete ",ug.jsxDEV("strong",{children:e.toLocaleString()},void 0,!1,void 0,this)," ",e===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ug.jsxDEV("div",{className:"ls-drop-warning",children:[ug.jsxDEV(Cv,{size:12},void 0,!1,void 0,this),ug.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-actions",children:[ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:w,children:[ug.jsxDEV(Uo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return zt.createPortal(H,document.body)};var J0=Hr(rg(),1),Ut=({variables:v,collections:e,scripts:w,sendToBackend:u,inspectPath:n,inspectRecords:H,inspectTotal:O,inspectError:q,inspectStats:G,inspectRefreshToken:X,onInspect:t,dropTarget:M,dropTargetCount:Y,onDrop:L,onDropConfirm:_})=>{return J0.jsxDEV(J0.Fragment,{children:[J0.jsxDEV("div",{className:"ls-storage-list",children:[J0.jsxDEV(Rt,{variables:v,sendToBackend:u},void 0,!1,void 0,this),J0.jsxDEV(tt,{collections:e,scripts:w,sendToBackend:u,onInspect:t,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n!==null&&J0.jsxDEV(Qt,{path:n,summary:e?.find((C)=>C.path===n),records:H,total:O,error:q,stats:G,refreshToken:X,onClose:()=>t(null),sendToBackend:u},void 0,!1,void 0,this),M!==null&&J0.jsxDEV(Kt,{target:M,recordCount:Y,onConfirm:_,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var qr=Hr(rg(),1),$t=({onBackendMessage:v,sendToBackend:e})=>{let[w,u]=Jg.useState("manage"),[n,H]=Jg.useState([]),[O,q]=Jg.useState(li),[G,X]=Jg.useState({characterId:null,characterName:null,chatId:null}),[t,M]=Jg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[Y,L]=Jg.useState([]),[_,C]=Jg.useState([]),[V,rr]=Jg.useState(null),[Pr,lr]=Jg.useState(null),[j,p]=Jg.useState(null),[vr,N]=Jg.useState(null),[E,f]=Jg.useState(0),[x,tr]=Jg.useState(null),[Mr,Xr]=Jg.useState(0),[Zr,k]=Jg.useState(null),[s,er]=Jg.useState(null),[or,Ar]=Jg.useState(null),[T,S]=Jg.useState({});Jg.useEffect(()=>{let Wr=v((xr)=>{let br=xr;switch(br.type){case"scripts_updated":H(br.scripts);break;case"script_patched":H((Cr)=>Cr.map((ar)=>ar.id===br.script.id?br.script:ar));break;case"settings_updated":q(br.settings);break;case"active_context":X({characterId:br.characterId,characterName:br.characterName,chatId:br.chatId}),e({type:"get_variables"});break;case"variables_updated":rr(br.variables);break;case"collections_list":lr(br.collections);break;case"collection_records":N((Cr)=>{return br.records}),f(br.total),tr(br.error??null);break;case"collection_stats":k((Cr)=>{return br.stats});break;case"collection_count":Ar((Cr)=>{return br.count});break;case"collections_updated":e({type:"list_collections"}),Xr((Cr)=>Cr+1);break;case"injections_updated":L(br.injections);break;case"tools_updated":C(br.tools);break;case"execution_started":{let Cr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};M((ar)=>{let Rg=ar.consoleHistory[br.scriptId]??[],mo=Rg.length>0?[...Rg,Cr]:Rg;return{...ar,activeScriptId:br.scriptId,runId:br.runId,isRunning:!0,consoleHistory:{...ar.consoleHistory,[br.scriptId]:mo},scriptExecInfo:{...ar.scriptExecInfo,[br.scriptId]:{...ar.scriptExecInfo[br.scriptId],dot:"running"}}}}),S((ar)=>({...ar,[br.scriptId]:(ar[br.scriptId]??0)+1}));break}case"console_entry":{let Cr=O.consoleHistoryLimit;M((ar)=>{let Rg=ar.consoleHistory[br.scriptId]??[];if(Rg.length>=Cr)return ar;let wr=Rg.length===Cr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Cr} entries. Clear the console to resume capture.]`}:br.entry;return{...ar,consoleHistory:{...ar.consoleHistory,[br.scriptId]:[...Rg,wr]}}});break}case"execution_ended":M((Cr)=>{let ar=Cr.consoleHistory[br.scriptId]??[],Rg=Cr.scriptExecInfo[br.scriptId],mo=!br.success&&br.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:br.error}]:[],wr=!br.success?!0:Rg?.stickyError??!1,_o=!br.success||wr?"error":"success",Yo=br.duration??0,cg=br.success&&Yo===0&&(Rg?.duration??0)>0?Rg.duration:br.duration;return{...Cr,isRunning:!1,consoleHistory:mo.length?{...Cr.consoleHistory,[br.scriptId]:[...ar,...mo]}:Cr.consoleHistory,scriptExecInfo:{...Cr.scriptExecInfo,[br.scriptId]:{dot:_o,duration:cg,error:br.error??Rg?.error,stickyError:wr}}}});break;case"error":console.warn("[LumiScript]",br.message);break}});return e({type:"get_scripts"}),e({type:"get_settings"}),e({type:"get_active_context"}),e({type:"get_injections"}),e({type:"get_tools"}),Wr},[v,e]),Jg.useEffect(()=>{if(w==="storage")e({type:"list_collections"})},[w,e]),Jg.useEffect(()=>{if(Ar(null),s)e({type:"count_collection",path:s.path})},[s,e]);let nr=Jg.useCallback((Wr)=>{M((xr)=>({...xr,consoleHistory:{...xr.consoleHistory,[Wr]:[]}}))},[]),Yr=Jg.useCallback((Wr)=>{M((xr)=>{let br=xr.scriptExecInfo[Wr];if(!br?.stickyError)return xr;return{...xr,scriptExecInfo:{...xr.scriptExecInfo,[Wr]:{...br,dot:"idle",stickyError:!1}}}})},[]);return qr.jsxDEV("div",{className:"ls-panel",children:[qr.jsxDEV("div",{className:"ls-tabs",children:[qr.jsxDEV("button",{className:`ls-tab-pill${w==="manage"?" ls-active":""}`,onClick:()=>u("manage"),children:[qr.jsxDEV(Wo,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${w==="status"?" ls-active":""}`,onClick:()=>u("status"),children:[qr.jsxDEV(F5,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),qr.jsxDEV("button",{className:`ls-tab-pill${w==="storage"?" ls-active":""}`,onClick:()=>u("storage"),children:[qr.jsxDEV(dv,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[w==="manage"&&qr.jsxDEV(Mt,{scripts:n,activeContext:G,execInfo:t.scriptExecInfo,activeRunScriptId:t.activeScriptId,isRunning:t.isRunning,consoleHistory:t.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:nr,onScriptOpened:Yr,sendToBackend:e},void 0,!1,void 0,this),w==="status"&&qr.jsxDEV(lL,{scripts:n,execInfo:t.scriptExecInfo,invocationCounts:T,injections:Y,tools:_,sendToBackend:e},void 0,!1,void 0,this),w==="storage"&&qr.jsxDEV(Ut,{variables:V,collections:Pr,scripts:n,sendToBackend:e,inspectPath:j,inspectRecords:vr,inspectTotal:E,inspectError:x,inspectStats:Zr,inspectRefreshToken:Mr,onInspect:(Wr)=>{p(Wr),N(null),f(0),k(null)},dropTarget:s,dropTargetCount:or,onDrop:er,onDropConfirm:()=>{if(!s)return;let Wr=s.path;if(j===Wr)p(null),N(null),f(0),k(null);e({type:"drop_collection",path:Wr}),er(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},vL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},lL=({scripts:v,execInfo:e,invocationCounts:w,injections:u,tools:n,sendToBackend:H})=>{let O=v.filter((M)=>M.type==="trigger"&&M.enabled),q=Object.fromEntries(v.map((M)=>[M.id,M.name])),[G,X]=Jg.useState(new Set),t=(M)=>{X((Y)=>{let L=new Set(Y);if(L.has(M))L.delete(M);else L.add(M);return L})};return qr.jsxDEV("div",{className:"ls-status-list",children:[qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(Wo,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((M)=>{let Y=e[M.id],L=Y?.dot??"idle",_={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],C=M.triggers??[],V=w[M.id];return qr.jsxDEV("div",{className:"ls-status-row",children:[qr.jsxDEV("div",{className:"ls-status-row-main",children:[qr.jsxDEV("span",{className:_,title:vL[L]},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-status-name",children:M.name},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-status-right",children:[V!==void 0&&V>0&&qr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${V} time${V!==1?"s":""} this session`,children:["×",V]},void 0,!0,void 0,this),Y?.duration!==void 0&&L!=="running"&&qr.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[Y.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),C.length>0?qr.jsxDEV("div",{className:"ls-status-events",children:C.map((rr)=>qr.jsxDEV("span",{className:"ls-event-badge",children:[qr.jsxDEV(M0,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):qr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&Y?.error&&qr.jsxDEV("div",{className:"ls-status-error-row",children:qr.jsxDEV("span",{className:"ls-status-error-text",children:Y.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},M.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(bw,{size:10},void 0,!1,void 0,this),"Active Tools",n.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:n.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:n.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):n.map((M)=>qr.jsxDEV("div",{className:"ls-tool-row",children:[qr.jsxDEV("div",{className:"ls-tool-name",title:M.description,children:M.name},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-tool-meta",children:[M.council_eligible&&qr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-inject-script",title:M.scriptId,children:M.scriptName},void 0,!1,void 0,this),qr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${M.name}`,title:`Unregister "${M.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>H({type:"unregister_tool",name:M.name}),children:qr.jsxDEV(Uo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},M.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section",children:[qr.jsxDEV("div",{className:"ls-inject-header",children:[qr.jsxDEV(ow,{size:10},void 0,!1,void 0,this),"Active Injections",u.length>0&&qr.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?qr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):u.map((M)=>{let Y=G.has(M.id);return qr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>t(M.id),children:[qr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${M.mode}`,title:M.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:M.mode==="intercept"?qr.jsxDEV(N5,{size:11},void 0,!1,void 0,this):qr.jsxDEV(B5,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-inject-body",children:[qr.jsxDEV("div",{className:"ls-inject-header-row",children:[qr.jsxDEV("span",{className:"ls-inject-id",title:M.id,children:M.id},void 0,!1,void 0,this),qr.jsxDEV("div",{className:"ls-inject-meta",children:[qr.jsxDEV("span",{className:"ls-inject-role",children:M.role},void 0,!1,void 0,this),M.mode==="intercept"&&M.depth>0&&qr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${M.depth} message${M.depth!==1?"s":""}`,children:["d:",M.depth]},void 0,!0,void 0,this),M.ephemeral&&qr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:qr.jsxDEV(Qe,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),qr.jsxDEV("span",{className:"ls-inject-script",title:M.scriptId,children:q[M.scriptId]??M.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),qr.jsxDEV("span",{className:"ls-inject-chevron",children:Y?qr.jsxDEV(Wv,{size:10},void 0,!1,void 0,this):qr.jsxDEV(Ro,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y&&qr.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:M.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},M.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Fw=Hr(eg(),1);var Br=Hr(rg(),1),mt=({onBackendMessage:v,sendToBackend:e})=>{let[w,u]=Fw.useState(li),[n,H]=Fw.useState([]);Fw.useEffect(()=>{let X=v((t)=>{let M=t;if(M.type==="scripts_updated")H(M.scripts);if(M.type==="settings_updated")u(M.settings)});return e({type:"get_settings"}),e({type:"get_scripts"}),X},[v,e]);let O=n.filter((X)=>X.type==="trigger").length,q=n.filter((X)=>X.type==="library").length,G=(X)=>{e({type:"update_settings",patch:{enabled:X}})};return Br.jsxDEV("div",{className:"ls-settings",children:[Br.jsxDEV("div",{className:"ls-settings-header",children:Br.jsxDEV("span",{className:"ls-settings-title",children:[Br.jsxDEV(xl,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-toggle-row",children:[Br.jsxDEV("label",{className:"ls-toggle",children:[Br.jsxDEV("input",{type:"checkbox",checked:w.enabled,onChange:(X)=>G(X.target.checked)},void 0,!1,void 0,this),Br.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-counts",children:[Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(Wo,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:O},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-count-card",children:[Br.jsxDEV(Xe,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-num",children:q},void 0,!1,void 0,this),Br.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(Qe,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(w.scriptTimeoutMs/1000),onChange:(X)=>{let t=Math.max(5,Math.min(300,Number(X.target.value)||60));e({type:"update_settings",patch:{scriptTimeoutMs:t*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:w.consoleHistoryLimit,onChange:(X)=>{let t=Math.max(50,Math.min(2000,Number(X.target.value)||500));e({type:"update_settings",patch:{consoleHistoryLimit:t}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(ew,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:w.editorFontSize,onChange:(X)=>{let t=Math.max(10,Math.min(24,Number(X.target.value)||12));e({type:"update_settings",patch:{editorFontSize:t}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-field",children:[Br.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Br.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:w.autosaveDebounceMs,onChange:(X)=>{let t=Math.max(300,Math.min(5000,Number(X.target.value)||1200));e({type:"update_settings",patch:{autosaveDebounceMs:t}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-section",children:[Br.jsxDEV("div",{className:"ls-settings-section-label",children:[Br.jsxDEV(Zl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:w.defaultTriggerTemplate,onChange:(X)=>e({type:"update_settings",patch:{defaultTriggerTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-settings-template-field",children:[Br.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Br.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:w.defaultLibraryTemplate,onChange:(X)=>e({type:"update_settings",patch:{defaultLibraryTemplate:X.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function eL(v){let e=v?.type;return typeof e==="string"&&e.startsWith("dom_")}var Xo=new Map;function dh(v,e){Xo.set(v,e)}function Tv(v){let e=Xo.get(v);for(let[w,u]of Q0)if(u.elementId===v){if(e)e.removeEventListener(u.event,u.handler);Q0.delete(w)}Xo.delete(v)}var Zw=new Map,Nw=new Map,Ie=new Map,Bw=new Map,Q0=new Map;function Lt(v,e){return`${v}:${e}`}function hL(v){let e=v.target,w={type:v.type};if(e){if(e.id)w.targetId=e.id;if("value"in e)w.targetValue=e.value;if("checked"in e)w.targetChecked=e.checked;if(e.dataset&&Object.keys(e.dataset).length>0){let u={};for(let[n,H]of Object.entries(e.dataset))if(H!==void 0)u[n]=H;w.dataset=u}}if(v instanceof MouseEvent)w.clientX=v.clientX,w.clientY=v.clientY;else if(typeof TouchEvent<"u"&&v instanceof TouchEvent){let u=v.touches[0]??v.changedTouches[0];if(u)w.clientX=u.clientX,w.clientY=u.clientY}if(v instanceof CustomEvent&&v.detail!==void 0)try{JSON.stringify(v.detail),w.detail=v.detail}catch{}return w}function bL(v,e){return`@scope ([data-ls-script="${e}"]) {
${v}
}`}function wL(v,e=5000){let w=document.querySelector(v);if(w)return Promise.resolve(w);return new Promise((u,n)=>{let H=!1,O=new MutationObserver(()=>{let q=document.querySelector(v);if(q&&!H)H=!0,O.disconnect(),u(q)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!H)H=!0,O.disconnect(),n(Error(`waitForElement: timeout for "${v}"`))},e)})}function uL(v){return v.querySelector('[class*="_bubble_"]')}var ll=new Map,iL=50;function nL(v,e,w){if(ll.size>=iL){let u=ll.keys().next().value;if(u)ll.get(u)?.cancel(),ll.delete(u)}ll.set(v,{scriptId:e,cancel:w})}function PL(v){for(let[e,w]of ll)if(w.scriptId===v)w.cancel(),ll.delete(e)}function Ft(v,e,w){let u=e((n)=>{if(!eL(n))return;let H=n;switch(H.type){case"dom_inject":{let{scriptId:O,elementId:q,target:G,html:X,position:t,stableId:M,parentElementId:Y}=H;if(Xo.has(q)){console.warn(`[LumiScript] dom_inject: elementId "${q}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${q}">${X}</div>`,_=null;if(Y){let C=Xo.get(Y);if(!C){console.warn(`[LumiScript] dom_inject: parentElementId "${Y}" not in elementMap — drop`);break}let V=C.querySelector(G);if(!V){console.warn(`[LumiScript] dom_inject: selector "${G}" not found within parent "${Y}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=L,V.insertAdjacentElement(t,rr),_=rr}else _=v.dom.inject(G,L,t);if(_){if(Xo.set(q,_),Zw.set(q,O),M)Nw.set(Lt(O,M),q)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:q,messageId:G,html:X,position:t,stableId:M}=H,Y=(rr)=>{let Pr=rr.querySelector("[data-part]"),lr=Pr?.getAttribute("data-part")??"character",j=Pr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=t==="header"?` data-ls-tint="${lr}"`:"",vr=` data-ls-mode="${j}"`,N=`<div data-ls-script="${O}" data-ls-el="${q}"${p}${vr}>${X}</div>`,E,f;if(t==="header")E=rr,f="afterbegin";else if(t==="footer"&&j==="minimal")E=rr,f="beforeend";else E=uL(rr)??rr,f="beforeend";let x=v.dom.inject(E,N,f);if(Xo.set(q,x),Zw.set(q,O),M)Nw.set(Lt(O,M),q)},L=`[data-message-id="${G}"]`,_=document.querySelector(L);if(_){Y(_);break}let C=!1;nL(q,O,()=>{C=!0}),wL(L).then((rr)=>{if(ll.delete(q),C)return;Y(rr)}).catch(()=>{ll.delete(q)});break}case"dom_update":{let O=Xo.get(H.elementId);if(!O)break;let q=O.querySelector(`[data-ls-el="${H.elementId}"]`)??O;q.innerHTML=H.html;break}case"dom_remove":{It(H.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:q,css:G}=H,X=bL(G,O),t=v.dom.addStyle(X);Ie.set(q,t),Bw.set(q,O);break}case"dom_remove_style":{let O=Ie.get(H.styleId);if(O)O(),Ie.delete(H.styleId),Bw.delete(H.styleId);break}case"dom_listen":{let{elementId:O,listenerId:q,event:G,preventDefault:X}=H,t=Xo.get(O);if(!t)break;let M=(Y)=>{if(X)Y.preventDefault();let L=hL(Y);w({type:"dom_event",elementId:O,listenerId:q,event:G,data:L})};t.addEventListener(G,M),Q0.set(q,{elementId:O,event:G,handler:M});break}case"dom_unlisten":{let O=Q0.get(H.listenerId);if(!O)break;let q=Xo.get(O.elementId);if(q)q.removeEventListener(O.event,O.handler);Q0.delete(H.listenerId);break}case"dom_cleanup_script":{let{scriptId:O}=H;PL(O);for(let[q,G]of Zw)if(G===O)It(q);for(let[q,G]of Bw)if(G===O){let X=Ie.get(q);if(X)X();Ie.delete(q),Bw.delete(q)}for(let[q]of Nw)if(q.startsWith(O+":"))Nw.delete(q);break}case"dom_make_draggable":{let{elementId:O,handleSelector:q}=H,G=Xo.get(O);if(!G)break;let X=!1,t=!1;G.addEventListener("pointerdown",(M)=>{if(M.button!==0)return;if(q&&!M.target.closest(q))return;let Y=G.firstElementChild?.firstElementChild??G.firstElementChild??G,L=Y.getBoundingClientRect();Y.style.transform="none",Y.style.top=`${L.top}px`,Y.style.left=`${L.left}px`,Y.style.bottom="auto",Y.style.right="auto",X=!0,t=!1;let _=M.clientX-L.left,C=M.clientY-L.top;Y.style.cursor="grabbing";let V=(Pr)=>{if(!X)return;t=!0,Y.style.top=`${Pr.clientY-C}px`,Y.style.left=`${Pr.clientX-_}px`},rr=()=>{if(!X)return;X=!1,Y.style.cursor="",document.removeEventListener("pointermove",V),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",V),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),M.preventDefault()}),G.addEventListener("click",(M)=>{if(t)M.stopImmediatePropagation(),M.preventDefault(),t=!1},!0);break}}});return()=>{u();for(let[,n]of ll)n.cancel();ll.clear();for(let[,n]of Q0){let H=Xo.get(n.elementId);if(H)H.removeEventListener(n.event,n.handler)}Q0.clear();for(let[,n]of Xo)try{n.remove()}catch{}Xo.clear(),Zw.clear(),Nw.clear();for(let[,n]of Ie)try{n()}catch{}Ie.clear(),Bw.clear()}}function It(v){for(let[w,u]of Q0)if(u.elementId===v){let n=Xo.get(v);if(n)n.removeEventListener(u.event,u.handler);Q0.delete(w)}let e=Xo.get(v);if(e)try{e.remove()}catch{}Xo.delete(v),Zw.delete(v)}function HL(v){let e=v?.type;return e==="ls_modal_open"||e==="ls_modal_set_title"||e==="ls_modal_dismiss"}var $1=new Map;function Nt(v,e,w){let u=e((n)=>{if(!HL(n))return;let H=n;switch(H.type){case"ls_modal_open":{let{scriptId:O,modalId:q,rootElementId:G,options:X}=H;if($1.has(q))break;let t;try{t=v.ui.showModal({title:X.title,width:X.width,maxHeight:X.maxHeight,persistent:X.persistent})}catch(Y){console.warn("[LumiScript] ctx.ui.showModal failed:",Y),w({type:"ls_modal_dismissed",modalId:q});break}dh(G,t.root),t.root.setAttribute("data-ls-script",O),t.root.setAttribute("data-ls-modal",q);let M={modalId:q,rootElementId:G,handle:t,echoed:!1};$1.set(q,M),t.onDismiss(()=>{if(M.echoed)return;M.echoed=!0,Tv(G),$1.delete(q),w({type:"ls_modal_dismissed",modalId:q})}),w({type:"ls_modal_opened",modalId:q});break}case"ls_modal_set_title":{let O=$1.get(H.modalId);if(!O)break;try{O.handle.setTitle(H.title)}catch{}break}case"ls_modal_dismiss":{let O=$1.get(H.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Tv(O.rootElementId),$1.delete(H.modalId),w({type:"ls_modal_dismissed",modalId:H.modalId})}break}}});return()=>{u();for(let n of $1.values()){try{n.handle.dismiss()}catch{}Tv(n.rootElementId)}$1.clear()}}function OL(v){return v?.type==="ls_context_menu_show"}function Bt(v,e,w){let u=e(async(n)=>{if(!OL(n))return;let H=n,O=null;try{O=(await v.ui.showContextMenu({position:H.options.position,items:H.options.items})).selectedKey}catch(q){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",q)}w({type:"ls_context_menu_result",requestId:H.requestId,selectedKey:O})});return()=>{u()}}function qL(v){let e=v?.type;return e==="ls_input_bar_action_register"||e==="ls_input_bar_action_set_label"||e==="ls_input_bar_action_set_subtitle"||e==="ls_input_bar_action_set_enabled"||e==="ls_input_bar_action_destroy"}var Dl=new Map;function AL(v,e){return`${v}:${e}`}function Zt(v,e,w){let u=e((n)=>{if(!qL(n))return;let H=n,O=AL(H.scriptId,H.actionId);switch(H.type){case"ls_input_bar_action_register":{let q=Dl.get(O);if(q){try{q.destroy()}catch{}Dl.delete(O)}let G;try{G=v.ui.registerInputBarAction({id:H.actionId,label:H.options.label,subtitle:H.options.subtitle,iconSvg:H.options.iconSvg,iconUrl:H.options.iconUrl,enabled:H.options.enabled})}catch(X){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",X);break}Dl.set(O,G),G.onClick(()=>{w({type:"ls_input_bar_action_click",scriptId:H.scriptId,actionId:H.actionId})}),w({type:"ls_input_bar_action_registered",scriptId:H.scriptId,actionId:H.actionId});break}case"ls_input_bar_action_set_label":{let q=Dl.get(O);if(!q)break;try{q.setLabel(H.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let q=Dl.get(O);if(!q)break;if(typeof q.setSubtitle!=="function")break;try{q.setSubtitle(H.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let q=Dl.get(O);if(!q)break;try{q.setEnabled(H.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let q=Dl.get(O);if(!q)break;try{q.destroy()}catch{}Dl.delete(O);break}}});return()=>{u();for(let n of Dl.values())try{n.destroy()}catch{}Dl.clear()}}function ML(v){let e=v?.type;return e==="ls_float_widget_create"||e==="ls_float_widget_move"||e==="ls_float_widget_set_visible"||e==="ls_float_widget_destroy"}var z0=new Map;function xt(v,e,w){let u=e((n)=>{if(!ML(n))return;let H=n;switch(H.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:q,rootElementId:G,options:X}=H,t=z0.get(q);if(t){try{t.handle.destroy()}catch{}Tv(t.rootElementId),z0.delete(q)}let M;try{M=v.ui.createFloatWidget({width:X.width,height:X.height,initialPosition:X.initialPosition,snapToEdge:X.snapToEdge,tooltip:X.tooltip,chromeless:X.chromeless})}catch(Y){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",Y);break}dh(G,M.root),M.root.setAttribute("data-ls-script",O),M.root.setAttribute("data-ls-widget",q),z0.set(q,{widgetId:q,rootElementId:G,handle:M}),M.onDragEnd((Y)=>{w({type:"ls_float_widget_drag_end",widgetId:q,x:Y.x,y:Y.y})}),w({type:"ls_float_widget_created",widgetId:q});break}case"ls_float_widget_move":{let O=z0.get(H.widgetId);if(!O)break;try{O.handle.moveTo(H.x,H.y)}catch{}break}case"ls_float_widget_set_visible":{let O=z0.get(H.widgetId);if(!O)break;try{O.handle.setVisible(H.visible)}catch{}break}case"ls_float_widget_destroy":{let O=z0.get(H.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Tv(O.rootElementId),z0.delete(H.widgetId);break}}});return()=>{u();for(let n of z0.values()){try{n.handle.destroy()}catch{}Tv(n.rootElementId)}z0.clear()}}function WL(v){let e=v?.type;return e==="ls_drawer_tab_register"||e==="ls_drawer_tab_set_title"||e==="ls_drawer_tab_set_short_name"||e==="ls_drawer_tab_set_badge"||e==="ls_drawer_tab_activate"||e==="ls_drawer_tab_destroy"}var el=new Map;function RL(v,e){return`${v}:${e}`}function Ct(v,e,w){let u=e((n)=>{if(!WL(n))return;let H=n,O=RL(H.scriptId,H.tabId);switch(H.type){case"ls_drawer_tab_register":{let q=el.get(O);if(q){try{q.handle.destroy()}catch{}Tv(q.rootElementId),el.delete(O)}let G;try{G=v.ui.registerDrawerTab({id:H.options.id,title:H.options.title,shortName:H.options.shortName,description:H.options.description,keywords:H.options.keywords,headerTitle:H.options.headerTitle,iconSvg:H.options.iconSvg,iconUrl:H.options.iconUrl})}catch(X){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",X);break}dh(H.rootElementId,G.root),G.root.setAttribute("data-ls-script",H.scriptId),G.root.setAttribute("data-ls-tab",H.tabId),el.set(O,{scriptId:H.scriptId,tabId:H.tabId,rootElementId:H.rootElementId,handle:G}),G.onActivate(()=>{w({type:"ls_drawer_tab_activated",scriptId:H.scriptId,tabId:H.tabId})}),w({type:"ls_drawer_tab_registered",scriptId:H.scriptId,tabId:H.tabId});break}case"ls_drawer_tab_set_title":{let q=el.get(O);if(!q)break;try{q.handle.setTitle(H.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let q=el.get(O);if(!q)break;try{q.handle.setShortName(H.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let q=el.get(O);if(!q)break;try{q.handle.setBadge(H.badge)}catch{}break}case"ls_drawer_tab_activate":{let q=el.get(O);if(!q)break;try{q.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let q=el.get(O);if(!q)break;try{q.handle.destroy()}catch{}Tv(q.rootElementId),el.delete(O);break}}});return()=>{u();for(let n of el.values()){try{n.handle.destroy()}catch{}Tv(n.rootElementId)}el.clear()}}var xw=Hr(rg(),1);function hfg(v){let e=[],w=v.dom.addStyle(U9);e.push(w);let u=[],n=v.onBackendMessage((rr)=>{for(let Pr of u)Pr(rr)});e.push(n);let H=(rr)=>{return u.push(rr),()=>{let Pr=u.indexOf(rr);if(Pr!==-1)u.splice(Pr,1)}},O=(rr)=>{v.sendToBackend(rr)},q=Ft(v,H,O);e.push(q);let G=Nt(v,H,O);e.push(G);let X=Bt(v,H,O);e.push(X);let t=Zt(v,H,O);e.push(t);let M=xt(v,H,O);e.push(M);let Y=Ct(v,H,O);e.push(Y),O({type:"frontend_ready"});let L=v.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),_=KP.createRoot(L.root);_.render(xw.jsxDEV(zP.StrictMode,{children:xw.jsxDEV($t,{onBackendMessage:H,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),e.push(()=>{try{_.unmount()}catch{}try{L.destroy()}catch{}});let C=v.ui.mount("settings_extensions"),V=KP.createRoot(C);return V.render(xw.jsxDEV(zP.StrictMode,{children:xw.jsxDEV(mt,{onBackendMessage:H,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),e.push(()=>V.unmount()),()=>{for(let rr of e)try{rr()}catch{}v.dom.cleanup()}}export{hfg as setup};
