var M$=Object.create;var{getPrototypeOf:W$,defineProperty:MP,getOwnPropertyNames:e$}=Object;var R$=Object.prototype.hasOwnProperty;function G$(v){return this[v]}var X$,Y$,Ar=(v,h,u)=>{var O=v!=null&&typeof v==="object";if(O){var P=h?X$??=new WeakMap:Y$??=new WeakMap,A=P.get(v);if(A)return A}u=v!=null?M$(W$(v)):{};let M=h||!v||!v.__esModule?MP(u,"default",{value:v,enumerable:!0}):u;for(let W of e$(v))if(!R$.call(M,W))MP(M,W,{get:G$.bind(v,W),enumerable:!0});if(O)P.set(v,M);return M};var Yh=(v,h)=>()=>(h||v((h={exports:{}}).exports,h),h.exports);var J$=(v)=>v;function Q$(v,h){this[v]=J$.bind(null,h)}var z$=(v,h)=>{for(var u in h)MP(v,u,{get:h[u],enumerable:!0,configurable:!0,set:Q$.bind(h,u)})};var hg=Yh((K$,s6)=>{(function(){function v(X,Z){Object.defineProperty(O.prototype,X,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",Z[0],Z[1])}})}function h(X){if(X===null||typeof X!=="object")return null;return X=No&&X[No]||X["@@iterator"],typeof X==="function"?X:null}function u(X,Z){X=(X=X.constructor)&&(X.displayName||X.name)||"ReactClass";var gr=X+"."+Z;ur[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",Z,X),ur[gr]=!0)}function O(X,Z,gr){this.props=X,this.context=Z,this.refs=r0,this.updater=gr||_o}function P(){}function A(X,Z,gr){this.props=X,this.context=Z,this.refs=r0,this.updater=gr||_o}function M(){}function W(X){return""+X}function Y(X){try{W(X);var Z=!1}catch(Xr){Z=!0}if(Z){Z=console;var gr=Z.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&X[Symbol.toStringTag]||X.constructor.name||"Object";return gr.call(Z,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),W(X)}}function Q(X){if(X==null)return null;if(typeof X==="function")return X.$$typeof===d5?null:X.displayName||X.name||null;if(typeof X==="string")return X;switch(X){case er:return"Fragment";case n:return"Profiler";case k:return"StrictMode";case ir:return"Suspense";case br:return"SuspenseList";case Xg:return"Activity"}if(typeof X==="object")switch(typeof X.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),X.$$typeof){case or:return"Portal";case zr:return X.displayName||"Context";case Pr:return(X._context.displayName||"Context")+".Consumer";case Gr:var Z=X.render;return X=X.displayName,X||(X=Z.displayName||Z.name||"",X=X!==""?"ForwardRef("+X+")":"ForwardRef"),X;case Sr:return Z=X.displayName||null,Z!==null?Z:Q(X.type)||"Memo";case ar:Z=X._payload,X=X._init;try{return Q(X(Z))}catch(gr){}}return null}function J(X){if(X===er)return"<>";if(typeof X==="object"&&X!==null&&X.$$typeof===ar)return"<...>";try{var Z=Q(X);return Z?"<"+Z+">":"<...>"}catch(gr){return"<...>"}}function R(){var X=nr.A;return X===null?null:X.getOwner()}function z(){return Error("react-stack-top-frame")}function B(X){if(xh.call(X,"key")){var Z=Object.getOwnPropertyDescriptor(X,"key").get;if(Z&&Z.isReactWarning)return!1}return X.key!==void 0}function j(X,Z){function gr(){i2||(i2=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",Z))}gr.isReactWarning=!0,Object.defineProperty(X,"key",{get:gr,configurable:!0})}function m(){var X=Q(this.type);return Nl[X]||(Nl[X]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),X=this.props.ref,X!==void 0?X:null}function y(X,Z,gr,Or,Xr,xr){var mr=gr.ref;return X={$$typeof:hr,type:X,key:Z,props:gr,_owner:Or},(mr!==void 0?mr:null)!==null?Object.defineProperty(X,"ref",{enumerable:!1,get:m}):Object.defineProperty(X,"ref",{enumerable:!1,value:null}),X._store={},Object.defineProperty(X._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(X,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(X,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Xr}),Object.defineProperty(X,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:xr}),Object.freeze&&(Object.freeze(X.props),Object.freeze(X)),X}function rr(X,Z){return Z=y(X.type,Z,X.props,X._owner,X._debugStack,X._debugTask),X._store&&(Z._store.validated=X._store.validated),Z}function qr(X){vr(X)?X._store&&(X._store.validated=1):typeof X==="object"&&X!==null&&X.$$typeof===ar&&(X._payload.status==="fulfilled"?vr(X._payload.value)&&X._payload.value._store&&(X._payload.value._store.validated=1):X._store&&(X._store.validated=1))}function vr(X){return typeof X==="object"&&X!==null&&X.$$typeof===hr}function a(X){var Z={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(gr){return Z[gr]})}function s(X,Z){return typeof X==="object"&&X!==null&&X.key!=null?(Y(X.key),a(""+X.key)):Z.toString(36)}function lr(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status==="string"?X.then(M,M):(X.status="pending",X.then(function(Z){X.status==="pending"&&(X.status="fulfilled",X.value=Z)},function(Z){X.status==="pending"&&(X.status="rejected",X.reason=Z)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function C(X,Z,gr,Or,Xr){var xr=typeof X;if(xr==="undefined"||xr==="boolean")X=null;var mr=!1;if(X===null)mr=!0;else switch(xr){case"bigint":case"string":case"number":mr=!0;break;case"object":switch(X.$$typeof){case hr:case or:mr=!0;break;case ar:return mr=X._init,C(mr(X._payload),Z,gr,Or,Xr)}}if(mr){mr=X,Xr=Xr(mr);var vg=Or===""?"."+s(mr,0):Or;return Ag(Xr)?(gr="",vg!=null&&(gr=vg.replace(Th,"$&/")+"/"),C(Xr,Z,gr,"",function(Ko){return Ko})):Xr!=null&&(vr(Xr)&&(Xr.key!=null&&(mr&&mr.key===Xr.key||Y(Xr.key)),gr=rr(Xr,gr+(Xr.key==null||mr&&mr.key===Xr.key?"":(""+Xr.key).replace(Th,"$&/")+"/")+vg),Or!==""&&mr!=null&&vr(mr)&&mr.key==null&&mr._store&&!mr._store.validated&&(gr._store.validated=2),Xr=gr),Z.push(Xr)),1}if(mr=0,vg=Or===""?".":Or+":",Ag(X))for(var $r=0;$r<X.length;$r++)Or=X[$r],xr=vg+s(Or,$r),mr+=C(Or,Z,gr,xr,Xr);else if($r=h(X),typeof $r==="function")for($r===X.entries&&(mh||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),mh=!0),X=$r.call(X),$r=0;!(Or=X.next()).done;)Or=Or.value,xr=vg+s(Or,$r++),mr+=C(Or,Z,gr,xr,Xr);else if(xr==="object"){if(typeof X.then==="function")return C(lr(X),Z,gr,Or,Xr);throw Z=String(X),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return mr}function V(X,Z,gr){if(X==null)return X;var Or=[],Xr=0;return C(X,Or,"","",function(xr){return Z.call(gr,xr,Xr++)}),Or}function c(X){if(X._status===-1){var Z=X._ioInfo;Z!=null&&(Z.start=Z.end=performance.now()),Z=X._result;var gr=Z();if(gr.then(function(Xr){if(X._status===0||X._status===-1){X._status=1,X._result=Xr;var xr=X._ioInfo;xr!=null&&(xr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Xr)}},function(Xr){if(X._status===0||X._status===-1){X._status=2,X._result=Xr;var xr=X._ioInfo;xr!=null&&(xr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Xr)}}),Z=X._ioInfo,Z!=null){Z.value=gr;var Or=gr.displayName;typeof Or==="string"&&(Z.name=Or)}X._status===-1&&(X._status=0,X._result=gr)}if(X._status===1)return Z=X._result,Z===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Z),"default"in Z||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Z),Z.default;throw X._result}function S(){var X=nr.H;return X===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),X}function Jr(){nr.asyncTransitions--}function Rr(X){if(Zl===null)try{var Z=("require"+Math.random()).slice(0,7);Zl=(s6&&s6[Z]).call(s6,"timers").setImmediate}catch(gr){Zl=function(Or){S2===!1&&(S2=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Xr=new MessageChannel;Xr.port1.onmessage=Or,Xr.port2.postMessage(void 0)}}return Zl(X)}function Qr(X){return 1<X.length&&typeof AggregateError==="function"?AggregateError(X):X[0]}function Cr(X,Z){Z!==xl-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),xl=Z}function D(X,Z,gr){var Or=nr.actQueue;if(Or!==null)if(Or.length!==0)try{d(Or),Rr(function(){return D(X,Z,gr)});return}catch(Xr){nr.thrownErrors.push(Xr)}else nr.actQueue=null;0<nr.thrownErrors.length?(Or=Qr(nr.thrownErrors),nr.thrownErrors.length=0,gr(Or)):Z(X)}function d(X){if(!Tl){Tl=!0;var Z=0;try{for(;Z<X.length;Z++){var gr=X[Z];do{nr.didUsePromise=!1;var Or=gr(!1);if(Or!==null){if(nr.didUsePromise){X[Z]=gr,X.splice(0,Z);return}gr=Or}else break}while(1)}X.length=0}catch(Xr){X.splice(0,Z+1),nr.thrownErrors.push(Xr)}finally{Tl=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var hr=Symbol.for("react.transitional.element"),or=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),zr=Symbol.for("react.context"),Gr=Symbol.for("react.forward_ref"),ir=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),Sr=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Xg=Symbol.for("react.activity"),No=Symbol.iterator,ur={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(X){u(X,"forceUpdate")},enqueueReplaceState:function(X){u(X,"replaceState")},enqueueSetState:function(X){u(X,"setState")}},zo=Object.assign,r0={};Object.freeze(r0),O.prototype.isReactComponent={},O.prototype.setState=function(X,Z){if(typeof X!=="object"&&typeof X!=="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,Z,"setState")},O.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};var cg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(F1 in cg)cg.hasOwnProperty(F1)&&v(F1,cg[F1]);P.prototype=O.prototype,cg=A.prototype=new P,cg.constructor=A,zo(cg,O.prototype),cg.isPureReactComponent=!0;var Ag=Array.isArray,d5=Symbol.for("react.client.reference"),nr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},xh=Object.prototype.hasOwnProperty,Yg=console.createTask?console.createTask:function(){return null};cg={react_stack_bottom_frame:function(X){return X()}};var i2,wv,Nl={},Bl=cg.react_stack_bottom_frame.bind(cg,z)(),mu=Yg(J(z)),mh=!1,Th=/\/+/g,L1=typeof reportError==="function"?reportError:function(X){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",X);return}console.error(X)},S2=!1,Zl=null,xl=0,ml=!1,Tl=!1,s5=typeof queueMicrotask==="function"?function(X){queueMicrotask(function(){return queueMicrotask(X)})}:Rr;cg=Object.freeze({__proto__:null,c:function(X){return S().useMemoCache(X)}});var F1={map:V,forEach:function(X,Z,gr){V(X,function(){Z.apply(this,arguments)},gr)},count:function(X){var Z=0;return V(X,function(){Z++}),Z},toArray:function(X){return V(X,function(Z){return Z})||[]},only:function(X){if(!vr(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};K$.Activity=Xg,K$.Children=F1,K$.Component=O,K$.Fragment=er,K$.Profiler=n,K$.PureComponent=A,K$.StrictMode=k,K$.Suspense=ir,K$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nr,K$.__COMPILER_RUNTIME=cg,K$.act=function(X){var Z=nr.actQueue,gr=xl;xl++;var Or=nr.actQueue=Z!==null?Z:[],Xr=!1;try{var xr=X()}catch($r){nr.thrownErrors.push($r)}if(0<nr.thrownErrors.length)throw Cr(Z,gr),X=Qr(nr.thrownErrors),nr.thrownErrors.length=0,X;if(xr!==null&&typeof xr==="object"&&typeof xr.then==="function"){var mr=xr;return s5(function(){Xr||ml||(ml=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function($r,Ko){Xr=!0,mr.then(function(g0){if(Cr(Z,gr),gr===0){try{d(Or),Rr(function(){return D(g0,$r,Ko)})}catch(rw){nr.thrownErrors.push(rw)}if(0<nr.thrownErrors.length){var I1=Qr(nr.thrownErrors);nr.thrownErrors.length=0,Ko(I1)}}else $r(g0)},function(g0){Cr(Z,gr),0<nr.thrownErrors.length?(g0=Qr(nr.thrownErrors),nr.thrownErrors.length=0,Ko(g0)):Ko(g0)})}}}var vg=xr;if(Cr(Z,gr),gr===0&&(d(Or),Or.length!==0&&s5(function(){Xr||ml||(ml=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),nr.actQueue=null),0<nr.thrownErrors.length)throw X=Qr(nr.thrownErrors),nr.thrownErrors.length=0,X;return{then:function($r,Ko){Xr=!0,gr===0?(nr.actQueue=Or,Rr(function(){return D(vg,$r,Ko)})):$r(vg)}}},K$.cache=function(X){return function(){return X.apply(null,arguments)}},K$.cacheSignal=function(){return null},K$.captureOwnerStack=function(){var X=nr.getCurrentStack;return X===null?null:X()},K$.cloneElement=function(X,Z,gr){if(X===null||X===void 0)throw Error("The argument must be a React element, but you passed "+X+".");var Or=zo({},X.props),Xr=X.key,xr=X._owner;if(Z!=null){var mr;r:{if(xh.call(Z,"ref")&&(mr=Object.getOwnPropertyDescriptor(Z,"ref").get)&&mr.isReactWarning){mr=!1;break r}mr=Z.ref!==void 0}mr&&(xr=R()),B(Z)&&(Y(Z.key),Xr=""+Z.key);for(vg in Z)!xh.call(Z,vg)||vg==="key"||vg==="__self"||vg==="__source"||vg==="ref"&&Z.ref===void 0||(Or[vg]=Z[vg])}var vg=arguments.length-2;if(vg===1)Or.children=gr;else if(1<vg){mr=Array(vg);for(var $r=0;$r<vg;$r++)mr[$r]=arguments[$r+2];Or.children=mr}Or=y(X.type,Xr,Or,xr,X._debugStack,X._debugTask);for(Xr=2;Xr<arguments.length;Xr++)qr(arguments[Xr]);return Or},K$.createContext=function(X){return X={$$typeof:zr,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:Pr,_context:X},X._currentRenderer=null,X._currentRenderer2=null,X},K$.createElement=function(X,Z,gr){for(var Or=2;Or<arguments.length;Or++)qr(arguments[Or]);Or={};var Xr=null;if(Z!=null)for($r in wv||!("__self"in Z)||"key"in Z||(wv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),B(Z)&&(Y(Z.key),Xr=""+Z.key),Z)xh.call(Z,$r)&&$r!=="key"&&$r!=="__self"&&$r!=="__source"&&(Or[$r]=Z[$r]);var xr=arguments.length-2;if(xr===1)Or.children=gr;else if(1<xr){for(var mr=Array(xr),vg=0;vg<xr;vg++)mr[vg]=arguments[vg+2];Object.freeze&&Object.freeze(mr),Or.children=mr}if(X&&X.defaultProps)for($r in xr=X.defaultProps,xr)Or[$r]===void 0&&(Or[$r]=xr[$r]);Xr&&j(Or,typeof X==="function"?X.displayName||X.name||"Unknown":X);var $r=1e4>nr.recentlyCreatedOwnerStacks++;return y(X,Xr,Or,R(),$r?Error("react-stack-top-frame"):Bl,$r?Yg(J(X)):mu)},K$.createRef=function(){var X={current:null};return Object.seal(X),X},K$.forwardRef=function(X){X!=null&&X.$$typeof===Sr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof X!=="function"?console.error("forwardRef requires a render function but was given %s.",X===null?"null":typeof X):X.length!==0&&X.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",X.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),X!=null&&X.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var Z={$$typeof:Gr,render:X},gr;return Object.defineProperty(Z,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,X.name||X.displayName||(Object.defineProperty(X,"name",{value:Or}),X.displayName=Or)}}),Z},K$.isValidElement=vr,K$.lazy=function(X){X={_status:-1,_result:X};var Z={$$typeof:ar,_payload:X,_init:c},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return X._ioInfo=gr,Z._debugInfo=[{awaited:gr}],Z},K$.memo=function(X,Z){X==null&&console.error("memo: The first argument must be a component. Instead received: %s",X===null?"null":typeof X),Z={$$typeof:Sr,type:X,compare:Z===void 0?null:Z};var gr;return Object.defineProperty(Z,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,X.name||X.displayName||(Object.defineProperty(X,"name",{value:Or}),X.displayName=Or)}}),Z},K$.startTransition=function(X){var Z=nr.T,gr={};gr._updatedFibers=new Set,nr.T=gr;try{var Or=X(),Xr=nr.S;Xr!==null&&Xr(gr,Or),typeof Or==="object"&&Or!==null&&typeof Or.then==="function"&&(nr.asyncTransitions++,Or.then(Jr,Jr),Or.then(M,L1))}catch(xr){L1(xr)}finally{Z===null&&gr._updatedFibers&&(X=gr._updatedFibers.size,gr._updatedFibers.clear(),10<X&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Z!==null&&gr.types!==null&&(Z.types!==null&&Z.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),Z.types=gr.types),nr.T=Z}},K$.unstable_useCacheRefresh=function(){return S().useCacheRefresh()},K$.use=function(X){return S().use(X)},K$.useActionState=function(X,Z,gr){return S().useActionState(X,Z,gr)},K$.useCallback=function(X,Z){return S().useCallback(X,Z)},K$.useContext=function(X){var Z=S();return X.$$typeof===Pr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),Z.useContext(X)},K$.useDebugValue=function(X,Z){return S().useDebugValue(X,Z)},K$.useDeferredValue=function(X,Z){return S().useDeferredValue(X,Z)},K$.useEffect=function(X,Z){return X==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),S().useEffect(X,Z)},K$.useEffectEvent=function(X){return S().useEffectEvent(X)},K$.useId=function(){return S().useId()},K$.useImperativeHandle=function(X,Z,gr){return S().useImperativeHandle(X,Z,gr)},K$.useInsertionEffect=function(X,Z){return X==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),S().useInsertionEffect(X,Z)},K$.useLayoutEffect=function(X,Z){return X==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),S().useLayoutEffect(X,Z)},K$.useMemo=function(X,Z){return S().useMemo(X,Z)},K$.useOptimistic=function(X,Z){return S().useOptimistic(X,Z)},K$.useReducer=function(X,Z,gr){return S().useReducer(X,Z,gr)},K$.useRef=function(X){return S().useRef(X)},K$.useState=function(X){return S().useState(X)},K$.useSyncExternalStore=function(X,Z,gr){return S().useSyncExternalStore(X,Z,gr)},K$.useTransition=function(){return S().useTransition()},K$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var O3=Yh(($$)=>{(function(){function v(){if(a=!1,V){var D=$$.unstable_now();Jr=D;var d=!0;try{r:{qr=!1,vr&&(vr=!1,lr(c),c=-1),rr=!0;var hr=y;try{g:{A(D);for(m=u(z);m!==null&&!(m.expirationTime>D&&W());){var or=m.callback;if(typeof or==="function"){m.callback=null,y=m.priorityLevel;var er=or(m.expirationTime<=D);if(D=$$.unstable_now(),typeof er==="function"){m.callback=er,A(D),d=!0;break g}m===u(z)&&O(z),A(D)}else O(z);m=u(z)}if(m!==null)d=!0;else{var k=u(B);k!==null&&Y(M,k.startTime-D),d=!1}}break r}finally{m=null,y=hr,rr=!1}d=void 0}}finally{d?Rr():V=!1}}}function h(D,d){var hr=D.length;D.push(d);r:for(;0<hr;){var or=hr-1>>>1,er=D[or];if(0<P(er,d))D[or]=d,D[hr]=er,hr=or;else break r}}function u(D){return D.length===0?null:D[0]}function O(D){if(D.length===0)return null;var d=D[0],hr=D.pop();if(hr!==d){D[0]=hr;r:for(var or=0,er=D.length,k=er>>>1;or<k;){var n=2*(or+1)-1,Pr=D[n],zr=n+1,Gr=D[zr];if(0>P(Pr,hr))zr<er&&0>P(Gr,Pr)?(D[or]=Gr,D[zr]=hr,or=zr):(D[or]=Pr,D[n]=hr,or=n);else if(zr<er&&0>P(Gr,hr))D[or]=Gr,D[zr]=hr,or=zr;else break r}}return d}function P(D,d){var hr=D.sortIndex-d.sortIndex;return hr!==0?hr:D.id-d.id}function A(D){for(var d=u(B);d!==null;){if(d.callback===null)O(B);else if(d.startTime<=D)O(B),d.sortIndex=d.expirationTime,h(z,d);else break;d=u(B)}}function M(D){if(vr=!1,A(D),!qr)if(u(z)!==null)qr=!0,V||(V=!0,Rr());else{var d=u(B);d!==null&&Y(M,d.startTime-D)}}function W(){return a?!0:$$.unstable_now()-Jr<S?!1:!0}function Y(D,d){c=s(function(){D($$.unstable_now())},d)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),$$.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var Q=performance;$$.unstable_now=function(){return Q.now()}}else{var J=Date,R=J.now();$$.unstable_now=function(){return J.now()-R}}var z=[],B=[],j=1,m=null,y=3,rr=!1,qr=!1,vr=!1,a=!1,s=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null,V=!1,c=-1,S=5,Jr=-1;if(typeof C==="function")var Rr=function(){C(v)};else if(typeof MessageChannel<"u"){var Qr=new MessageChannel,Cr=Qr.port2;Qr.port1.onmessage=v,Rr=function(){Cr.postMessage(null)}}else Rr=function(){s(v,0)};$$.unstable_IdlePriority=5,$$.unstable_ImmediatePriority=1,$$.unstable_LowPriority=4,$$.unstable_NormalPriority=3,$$.unstable_Profiling=null,$$.unstable_UserBlockingPriority=2,$$.unstable_cancelCallback=function(D){D.callback=null},$$.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1000/D):5},$$.unstable_getCurrentPriorityLevel=function(){return y},$$.unstable_next=function(D){switch(y){case 1:case 2:case 3:var d=3;break;default:d=y}var hr=y;y=d;try{return D()}finally{y=hr}},$$.unstable_requestPaint=function(){a=!0},$$.unstable_runWithPriority=function(D,d){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var hr=y;y=D;try{return d()}finally{y=hr}},$$.unstable_scheduleCallback=function(D,d,hr){var or=$$.unstable_now();switch(typeof hr==="object"&&hr!==null?(hr=hr.delay,hr=typeof hr==="number"&&0<hr?or+hr:or):hr=or,D){case 1:var er=-1;break;case 2:er=250;break;case 5:er=1073741823;break;case 4:er=1e4;break;default:er=5000}return er=hr+er,D={id:j++,callback:d,priorityLevel:D,startTime:hr,expirationTime:er,sortIndex:-1},hr>or?(D.sortIndex=hr,h(B,D),u(z)===null&&D===u(B)&&(vr?(lr(c),c=-1):vr=!0,Y(M,hr-or))):(D.sortIndex=er,h(z,D),qr||rr||(qr=!0,V||(V=!0,Rr()))),D},$$.unstable_shouldYield=W,$$.unstable_wrapCallback=function(D){var d=y;return function(){var hr=y;y=d;try{return D.apply(this,arguments)}finally{y=hr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var H3=Yh((U$)=>{var WP=Ar(hg());(function(){function v(){}function h(J){return""+J}function u(J,R,z){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{h(B);var j=!1}catch(m){j=!0}return j&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&B[Symbol.toStringTag]||B.constructor.name||"Object"),h(B)),{$$typeof:Y,key:B==null?null:""+B,children:J,containerInfo:R,implementation:z}}function O(J,R){if(J==="font")return"";if(typeof R==="string")return R==="use-credentials"?R:""}function P(J){return J===null?"`null`":J===void 0?"`undefined`":J===""?"an empty string":'something with type "'+typeof J+'"'}function A(J){return J===null?"`null`":J===void 0?"`undefined`":J===""?"an empty string":typeof J==="string"?JSON.stringify(J):typeof J==="number"?"`"+J+"`":'something with type "'+typeof J+'"'}function M(){var J=Q.H;return J===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),J}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var W={d:{f:v,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},Y=Symbol.for("react.portal"),Q=WP.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),U$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,U$.createPortal=function(J,R){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error("Target container is not a DOM element.");return u(J,R,null,z)},U$.flushSync=function(J){var R=Q.T,z=W.p;try{if(Q.T=null,W.p=2,J)return J()}finally{Q.T=R,W.p=z,W.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},U$.preconnect=function(J,R){typeof J==="string"&&J?R!=null&&typeof R!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",A(R)):R!=null&&typeof R.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",P(R.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(J)),typeof J==="string"&&(R?(R=R.crossOrigin,R=typeof R==="string"?R==="use-credentials"?R:"":void 0):R=null,W.d.C(J,R))},U$.prefetchDNS=function(J){if(typeof J!=="string"||!J)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(J));else if(1<arguments.length){var R=arguments[1];typeof R==="object"&&R.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",A(R)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",A(R))}typeof J==="string"&&W.d.D(J)},U$.preinit=function(J,R){if(typeof J==="string"&&J?R==null||typeof R!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",A(R)):R.as!=="style"&&R.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',A(R.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(J)),typeof J==="string"&&R&&typeof R.as==="string"){var z=R.as,B=O(z,R.crossOrigin),j=typeof R.integrity==="string"?R.integrity:void 0,m=typeof R.fetchPriority==="string"?R.fetchPriority:void 0;z==="style"?W.d.S(J,typeof R.precedence==="string"?R.precedence:void 0,{crossOrigin:B,integrity:j,fetchPriority:m}):z==="script"&&W.d.X(J,{crossOrigin:B,integrity:j,fetchPriority:m,nonce:typeof R.nonce==="string"?R.nonce:void 0})}},U$.preinitModule=function(J,R){var z="";if(typeof J==="string"&&J||(z+=" The `href` argument encountered was "+P(J)+"."),R!==void 0&&typeof R!=="object"?z+=" The `options` argument encountered was "+P(R)+".":R&&("as"in R)&&R.as!=="script"&&(z+=" The `as` option encountered was "+A(R.as)+"."),z)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",z);else switch(z=R&&typeof R.as==="string"?R.as:"script",z){case"script":break;default:z=A(z),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',z,J)}if(typeof J==="string")if(typeof R==="object"&&R!==null){if(R.as==null||R.as==="script")z=O(R.as,R.crossOrigin),W.d.M(J,{crossOrigin:z,integrity:typeof R.integrity==="string"?R.integrity:void 0,nonce:typeof R.nonce==="string"?R.nonce:void 0})}else R==null&&W.d.M(J)},U$.preload=function(J,R){var z="";if(typeof J==="string"&&J||(z+=" The `href` argument encountered was "+P(J)+"."),R==null||typeof R!=="object"?z+=" The `options` argument encountered was "+P(R)+".":typeof R.as==="string"&&R.as||(z+=" The `as` option encountered was "+P(R.as)+"."),z&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',z),typeof J==="string"&&typeof R==="object"&&R!==null&&typeof R.as==="string"){z=R.as;var B=O(z,R.crossOrigin);W.d.L(J,z,{crossOrigin:B,integrity:typeof R.integrity==="string"?R.integrity:void 0,nonce:typeof R.nonce==="string"?R.nonce:void 0,type:typeof R.type==="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority==="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy==="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet==="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes==="string"?R.imageSizes:void 0,media:typeof R.media==="string"?R.media:void 0})}},U$.preloadModule=function(J,R){var z="";typeof J==="string"&&J||(z+=" The `href` argument encountered was "+P(J)+"."),R!==void 0&&typeof R!=="object"?z+=" The `options` argument encountered was "+P(R)+".":R&&("as"in R)&&typeof R.as!=="string"&&(z+=" The `as` option encountered was "+P(R.as)+"."),z&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',z),typeof J==="string"&&(R?(z=O(R.as,R.crossOrigin),W.d.m(J,{as:typeof R.as==="string"&&R.as!=="script"?R.as:void 0,crossOrigin:z,integrity:typeof R.integrity==="string"?R.integrity:void 0})):W.d.m(J))},U$.requestFormReset=function(J){W.d.r(J)},U$.unstable_batchedUpdates=function(J,R){return J(R)},U$.useFormState=function(J,R,z){return M().useFormState(J,R,z)},U$.useFormStatus=function(){return M().useHostTransitionStatus()},U$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var i5=Yh((iZ,P3)=>{P3.exports=H3()});var q3=Yh((L$)=>{var lg=Ar(O3()),S5=Ar(hg()),eP=Ar(i5());(function(){function v(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function h(r,g,o,l){if(o>=g.length)return l;var w=g[o],b=oo(r)?r.slice():cr({},r);return b[w]=h(r[w],g,o+1,l),b}function u(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(g[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return O(r,g,o,0)}}function O(r,g,o,l){var w=g[l],b=oo(r)?r.slice():cr({},r);return l+1===g.length?(b[o[l]]=b[w],oo(b)?b.splice(w,1):delete b[w]):b[w]=O(r[w],g,o,l+1),b}function P(r,g,o){var l=g[o],w=oo(r)?r.slice():cr({},r);if(o+1===g.length)return oo(w)?w.splice(l,1):delete w[l],w;return w[l]=P(r[l],g,o+1),w}function A(){return!1}function M(){return null}function W(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function Y(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function Q(){}function J(){}function R(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function z(r,g,o,l){return new vQ(r,g,o,l)}function B(r,g){r.context===f1&&(mO(r.current,2,g,r,null,null),jh())}function j(r,g){if(F0!==null){var o=g.staleFamilies;g=g.updatedFamilies,Uw(),WA(r.current,g,o),jh()}}function m(r){F0=r}function y(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function qr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function vr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function a(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function s(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,l=g;;){var w=o.return;if(w===null)break;var b=w.alternate;if(b===null){if(l=w.return,l!==null){o=l;continue}break}if(w.child===b.child){for(b=w.child;b;){if(b===o)return a(w),r;if(b===l)return a(w),g;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=w,l=b;else{for(var H=!1,q=w.child;q;){if(q===o){H=!0,o=w,l=b;break}if(q===l){H=!0,l=w,o=b;break}q=q.sibling}if(!H){for(q=b.child;q;){if(q===o){H=!0,o=b,l=w;break}if(q===l){H=!0,l=b,o=w;break}q=q.sibling}if(!H)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function lr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=lr(r),g!==null)return g;r=r.sibling}return null}function C(r){if(r===null||typeof r!=="object")return null;return r=QW&&r[QW]||r["@@iterator"],typeof r==="function"?r:null}function V(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===Kz?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case g5:return"Fragment";case nO:return"Profiler";case c4:return"StrictMode";case tO:return"Suspense";case VO:return"SuspenseList";case _O:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case r5:return"Portal";case Kv:return r.displayName||"Context";case DO:return(r._context.displayName||"Context")+".Consumer";case Cw:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j4:return g=r.displayName||null,g!==null?g:V(r.type)||"Memo";case H0:g=r._payload,r=r._init;try{return V(r(g))}catch(o){}}return null}function c(r){return typeof r.tag==="number"?S(r):typeof r.name==="string"?r.name:null}function S(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(g);case 8:return g===c4?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return S(r.return)}return null}function Jr(r){return{current:r}}function Rr(r,g){0>dv?console.error("Unexpected pop."):(g!==yO[dv]&&console.error("Unexpected Fiber popped."),r.current=EO[dv],EO[dv]=null,yO[dv]=null,dv--)}function Qr(r,g,o){dv++,EO[dv]=r.current,yO[dv]=o,r.current=g}function Cr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function D(r,g){Qr(V1,g,r),Qr(iw,r,r),Qr(t1,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?y9(g):q1:q1;break;default:if(o=g.tagName,g=g.namespaceURI)g=y9(g),g=c9(g,o);else switch(o){case"svg":g=T5;break;case"math":g=y6;break;default:g=q1}}o=o.toLowerCase(),o=nq(null,o),o={context:g,ancestorInfo:o},Rr(t1,r),Qr(t1,o,r)}function d(r){Rr(t1,r),Rr(iw,r),Rr(V1,r)}function hr(){return Cr(t1.current)}function or(r){r.memoizedState!==null&&Qr(f4,r,r);var g=Cr(t1.current),o=r.type,l=c9(g.context,o);o=nq(g.ancestorInfo,o),l={context:l,ancestorInfo:o},g!==l&&(Qr(iw,r,r),Qr(t1,l,r))}function er(r){iw.current===r&&(Rr(t1,r),Rr(iw,r)),f4.current===r&&(Rr(f4,r),Fb._currentValue=Xh)}function k(){}function n(){if(Sw===0){zW=console.log,KW=console.info,$W=console.warn,UW=console.error,LW=console.group,FW=console.groupCollapsed,IW=console.groupEnd;var r={configurable:!0,enumerable:!0,value:k,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Sw++}function Pr(){if(Sw--,Sw===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:zW}),info:cr({},r,{value:KW}),warn:cr({},r,{value:$W}),error:cr({},r,{value:UW}),group:cr({},r,{value:LW}),groupCollapsed:cr({},r,{value:FW}),groupEnd:cr({},r,{value:IW})})}0>Sw&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function zr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Gr(r){if(cO===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);cO=g&&g[1]||"",NW=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cO+r+NW}function ir(r,g){if(!r||jO)return"";var o=fO.get(r);if(o!==void 0)return o;jO=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=i.H,i.H=null,n();try{var w={DetermineComponentFrameRoot:function(){try{if(g){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(wr){var x=wr}Reflect.construct(r,[],$)}else{try{$.call()}catch(wr){x=wr}r.call($.prototype)}}else{try{throw Error()}catch(wr){x=wr}($=r())&&typeof $.catch==="function"&&$.catch(function(){})}}catch(wr){if(wr&&x&&typeof wr.stack==="string")return[wr.stack,x.stack]}return[null,null]}};w.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(w.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(w.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var H=w.DetermineComponentFrameRoot(),q=H[0],e=H[1];if(q&&e){var G=q.split(`
`),I=e.split(`
`);for(H=b=0;b<G.length&&!G[b].includes("DetermineComponentFrameRoot");)b++;for(;H<I.length&&!I[H].includes("DetermineComponentFrameRoot");)H++;if(b===G.length||H===I.length)for(b=G.length-1,H=I.length-1;1<=b&&0<=H&&G[b]!==I[H];)H--;for(;1<=b&&0<=H;b--,H--)if(G[b]!==I[H]){if(b!==1||H!==1)do if(b--,H--,0>H||G[b]!==I[H]){var N=`
`+G[b].replace(" at new "," at ");return r.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",r.displayName)),typeof r==="function"&&fO.set(r,N),N}while(1<=b&&0<=H);break}}}finally{jO=!1,i.H=l,Pr(),Error.prepareStackTrace=o}return G=(G=r?r.displayName||r.name:"")?Gr(G):"",typeof r==="function"&&fO.set(r,G),G}function br(r,g){switch(r.tag){case 26:case 27:case 5:return Gr(r.type);case 16:return Gr("Lazy");case 13:return r.child!==g&&g!==null?Gr("Suspense Fallback"):Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 15:return ir(r.type,!1);case 11:return ir(r.type.render,!1);case 1:return ir(r.type,!0);case 31:return Gr("Activity");default:return""}}function Sr(r){try{var g="",o=null;do{g+=br(r,o);var l=r._debugInfo;if(l)for(var w=l.length-1;0<=w;w--){var b=l[w];if(typeof b.name==="string"){var H=g;r:{var{name:q,env:e,debugLocation:G}=b;if(G!=null){var I=zr(G),N=I.lastIndexOf(`
`),$=N===-1?I:I.slice(N+1);if($.indexOf(q)!==-1){var x=`
`+$;break r}}x=Gr(q+(e?" ["+e+"]":""))}g=H+x}}o=r,r=r.return}while(r);return g}catch(wr){return`
Error generating stack: `+wr.message+`
`+wr.stack}}function ar(r){return(r=r?r.displayName||r.name:"")?Gr(r):""}function Xg(){if(P0===null)return null;var r=P0._debugOwner;return r!=null?c(r):null}function No(){if(P0===null)return"";var r=P0;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Gr(r.type);break;case 13:g+=Gr("Suspense");break;case 19:g+=Gr("SuspenseList");break;case 31:g+=Gr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=ar(r.type));break;case 11:r._debugOwner||g!==""||(g+=ar(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var w=zr(l);w!==""&&(g+=`
`+w)}}else if(r.debugStack!=null){var b=r.debugStack;(r=r.owner)&&b&&(g+=`
`+zr(b))}else break;var H=g}catch(q){H=`
Error generating stack: `+q.message+`
`+q.stack}return H}function ur(r,g,o,l,w,b,H){var q=P0;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,l,w,b,H)):g(o,l,w,b,H)}finally{_o(q)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){i.getCurrentStack=r===null?null:No,$v=!1,P0=r}function zo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function r0(r){try{return cg(r),!1}catch(g){return!0}}function cg(r){return""+r}function Ag(r,g){if(r0(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,zo(r)),cg(r)}function d5(r,g){if(r0(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,zo(r)),cg(r)}function nr(r){if(r0(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",zo(r)),cg(r)}function xh(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{v5=g.inject(r),Uo=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Yg(r){if(typeof Bz==="function"&&Zz(r),Uo&&typeof Uo.setStrictMode==="function")try{Uo.setStrictMode(v5,r)}catch(g){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",g))}}function i2(r){return r>>>=0,r===0?32:31-(xz(r)/mz|0)|0}function wv(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Nl(r,g,o){var l=r.pendingLanes;if(l===0)return 0;var w=0,b=r.suspendedLanes,H=r.pingedLanes;r=r.warmLanes;var q=l&134217727;return q!==0?(l=q&~b,l!==0?w=wv(l):(H&=q,H!==0?w=wv(H):o||(o=q&~r,o!==0&&(w=wv(o))))):(q=l&~b,q!==0?w=wv(q):H!==0?w=wv(H):o||(o=l&~r,o!==0&&(w=wv(o)))),w===0?0:g!==0&&g!==w&&(g&b)===0&&(b=w&-w,o=g&-g,b>=o||b===32&&(o&4194048)!==0)?g:w}function Bl(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function mu(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function mh(){var r=d4;return d4<<=1,(d4&62914560)===0&&(d4=4194304),r}function Th(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function L1(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function S2(r,g,o,l,w,b){var H=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:q,expirationTimes:e,hiddenUpdates:G}=r;for(o=H&~o;0<o;){var I=31-Zo(o),N=1<<I;q[I]=0,e[I]=-1;var $=G[I];if($!==null)for(G[I]=null,I=0;I<$.length;I++){var x=$[I];x!==null&&(x.lane&=-536870913)}o&=~N}l!==0&&Zl(r,l,0),b!==0&&w===0&&r.tag!==0&&(r.suspendedLanes|=b&~(H&~g))}function Zl(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-Zo(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function xl(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var l=31-Zo(o),w=1<<l;w&g|r[l]&g&&(r[l]|=g),o&=~w}}function ml(r,g){var o=g&-g;return o=(o&42)!==0?1:Tl(o),(o&(r.suspendedLanes|g))!==0?0:o}function Tl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function s5(r,g,o){if(Lv)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-Zo(o),w=1<<l;r[l].add(g),o&=~w}}function F1(r,g){if(Lv)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<g;){var w=31-Zo(g);r=1<<w,w=o[w],0<w.size&&(w.forEach(function(b){var H=b.alternate;H!==null&&l.has(H)||l.add(b)}),w.clear()),g&=~r}}function X(r){return r&=-r,q0!==0&&q0<r?_0!==0&&_0<r?(r&134217727)!==0?Fv:s4:_0:q0}function Z(){var r=ug.p;if(r!==0)return r;return r=window.event,r===void 0?Fv:WW(r.type)}function gr(r,g){var o=ug.p;try{return ug.p=r,g()}finally{ug.p=o}}function Or(r){delete r[eo],delete r[xo],delete r[rH],delete r[Tz],delete r[Cz]}function Xr(r){var g=r[eo];if(g)return g;for(var o=r.parentNode;o;){if(g=o[E1]||o[eo]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=gW(r);r!==null;){if(o=r[eo])return o;r=gW(r)}return g}r=o,o=r.parentNode}return null}function xr(r){if(r=r[eo]||r[E1]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function mr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function vg(r){var g=r[BW];return g||(g=r[BW]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function $r(r){r[kw]=!0}function Ko(r,g){g0(r,g),g0(r+"Capture",g)}function g0(r,g){pl[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),pl[r]=g;var o=r.toLowerCase();gH[o]=r,r==="onDoubleClick"&&(gH.ondblclick=r);for(r=0;r<g.length;r++)ZW.add(g[r])}function I1(r,g){iz[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function rw(r){if(V0.call(mW,r))return!0;if(V0.call(xW,r))return!1;if(Sz.test(r))return mW[r]=!0;return xW[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $q(r,g,o){if(rw(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return Ag(o,g),r===""+o?o:r}}function k2(r,g,o){if(rw(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}Ag(o,g),r.setAttribute(g,""+o)}}function n2(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}Ag(o,g),r.setAttribute(g,""+o)}}function Vv(r,g,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Ag(l,o),r.setAttributeNS(g,o,""+l)}}function z0(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return nr(r),r;default:return""}}function Uq(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function mJ(r,g,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:w,set:b}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return w.call(this)},set:function(H){nr(H),o=""+H,b.call(this,H)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(H){nr(H),o=""+H},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function Tu(r){if(!r._valueTracker){var g=Uq(r)?"checked":"value";r._valueTracker=mJ(r,g,""+r[g])}}function Lq(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),l="";return r&&(l=Uq(r)?r.checked?"true":"false":r.value),r=l,r!==o?(g.setValue(r),!0):!1}function D2(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function K0(r){return r.replace(kz,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function Fq(r,g){g.checked===void 0||g.defaultChecked===void 0||CW||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component",g.type),CW=!0),g.value===void 0||g.defaultValue===void 0||TW||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component",g.type),TW=!0)}function Cu(r,g,o,l,w,b,H,q){if(r.name="",H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"?(Ag(H,"type"),r.type=H):r.removeAttribute("type"),g!=null)if(H==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+z0(g)}else r.value!==""+z0(g)&&(r.value=""+z0(g));else H!=="submit"&&H!=="reset"||r.removeAttribute("value");g!=null?iu(r,H,z0(g)):o!=null?iu(r,H,z0(o)):l!=null&&r.removeAttribute("value"),w==null&&b!=null&&(r.defaultChecked=!!b),w!=null&&(r.checked=w&&typeof w!=="function"&&typeof w!=="symbol"),q!=null&&typeof q!=="function"&&typeof q!=="symbol"&&typeof q!=="boolean"?(Ag(q,"name"),r.name=""+z0(q)):r.removeAttribute("name")}function Iq(r,g,o,l,w,b,H,q){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Ag(b,"type"),r.type=b),g!=null||o!=null){if(!(b!=="submit"&&b!=="reset"||g!==void 0&&g!==null)){Tu(r);return}o=o!=null?""+z0(o):"",g=g!=null?""+z0(g):o,q||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:w,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=q?r.checked:!!l,r.defaultChecked=!!l,H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"&&(Ag(H,"name"),r.name=H),Tu(r)}function iu(r,g,o){g==="number"&&D2(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Nq(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?S5.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||SW||(SW=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||kW||(kW=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||iW||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),iW=!0)}function Bq(){var r=Xg();return r?`

Check the render method of \``+r+"`.":""}function Ch(r,g,o,l){if(r=r.options,g){g={};for(var w=0;w<o.length;w++)g["$"+o[w]]=!0;for(o=0;o<r.length;o++)w=g.hasOwnProperty("$"+r[o].value),r[o].selected!==w&&(r[o].selected=w),w&&l&&(r[o].defaultSelected=!0)}else{o=""+z0(o),g=null;for(w=0;w<r.length;w++){if(r[w].value===o){r[w].selected=!0,l&&(r[w].defaultSelected=!0);return}g!==null||r[w].disabled||(g=r[w])}g!==null&&(g.selected=!0)}}function Zq(r,g){for(r=0;r<DW.length;r++){var o=DW[r];if(g[o]!=null){var l=oo(g[o]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,Bq()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,Bq())}}g.value===void 0||g.defaultValue===void 0||nW||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),nW=!0)}function xq(r,g){g.value===void 0||g.defaultValue===void 0||tW||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Xg()||"A component"),tW=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function mq(r,g,o){if(g!=null&&(g=""+z0(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+z0(o):""}function Tq(r,g,o,l){if(g==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(oo(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),g=o}o=z0(g),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),Tu(r)}function Cq(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?Cq(r.children[0],g):r}function o0(r){return"  "+"  ".repeat(r)}function ih(r){return"+ "+"  ".repeat(r)}function Cl(r){return"- "+"  ".repeat(r)}function iq(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function gw(r,g){return VW.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function t2(r,g,o){var l=120-2*o;if(g===null)return ih(o)+gw(r,l)+`
`;if(typeof g==="string"){for(var w=0;w<g.length&&w<r.length&&g.charCodeAt(w)===r.charCodeAt(w);w++);return w>l-8&&10<w&&(r="..."+r.slice(w-8),g="..."+g.slice(w-8)),ih(o)+gw(r,l)+`
`+Cl(o)+gw(g,l)+`
`}return o0(o)+gw(r,l)+`
`}function Su(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function ow(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(oo(r))return"[...]";if(r.$$typeof===zv)return(g=V(r.type))?"<"+g+">":"<...>";var o=Su(r);if(o==="Object"){o="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var w=JSON.stringify(l);if(w!=='"'+l+'"'&&(l=w),g-=l.length-2,w=ow(r[l],15>g?g:15),g-=w.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+w}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function Sh(r,g){return typeof r!=="string"||VW.test(r)?"{"+ow(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function ku(r,g,o){var l=120-o.length-r.length,w=[],b;for(b in g)if(g.hasOwnProperty(b)&&b!=="children"){var H=Sh(g[b],120-o.length-b.length-1);l-=b.length+H.length+2,w.push(b+"="+H)}return w.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+w.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+w.join(`
`+o+"  ")+`
`+o+`>
`}function TJ(r,g,o){var l="",w=cr({},g),b;for(b in r)if(r.hasOwnProperty(b)){delete w[b];var H=120-2*o-b.length-2,q=ow(r[b],H);g.hasOwnProperty(b)?(H=ow(g[b],H),l+=ih(o)+b+": "+q+`
`,l+=Cl(o)+b+": "+H+`
`):l+=ih(o)+b+": "+q+`
`}for(var e in w)w.hasOwnProperty(e)&&(r=ow(w[e],120-2*o-e.length-2),l+=Cl(o)+e+": "+r+`
`);return l}function CJ(r,g,o,l){var w="",b=new Map;for(G in o)o.hasOwnProperty(G)&&b.set(G.toLowerCase(),G);if(b.size===1&&b.has("children"))w+=ku(r,g,o0(l));else{for(var H in g)if(g.hasOwnProperty(H)&&H!=="children"){var q=120-2*(l+1)-H.length-1,e=b.get(H.toLowerCase());if(e!==void 0){b.delete(H.toLowerCase());var G=g[H];e=o[e];var I=Sh(G,q);q=Sh(e,q),typeof G==="object"&&G!==null&&typeof e==="object"&&e!==null&&Su(G)==="Object"&&Su(e)==="Object"&&(2<Object.keys(G).length||2<Object.keys(e).length||-1<I.indexOf("...")||-1<q.indexOf("..."))?w+=o0(l+1)+H+`={{
`+TJ(G,e,l+2)+o0(l+1)+`}}
`:(w+=ih(l+1)+H+"="+I+`
`,w+=Cl(l+1)+H+"="+q+`
`)}else w+=o0(l+1)+H+"="+Sh(g[H],q)+`
`}b.forEach(function(N){if(N!=="children"){var $=120-2*(l+1)-N.length-1;w+=Cl(l+1)+N+"="+Sh(o[N],$)+`
`}}),w=w===""?o0(l)+"<"+r+`>
`:o0(l)+"<"+r+`
`+w+o0(l)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(b="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=""+g;w+=t2(b,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")w=r==null?w+t2(""+g,null,l+1):w+t2(""+g,void 0,l+1);return w}function Sq(r,g){var o=iq(r);if(o===null){o="";for(r=r.child;r;)o+=Sq(r,g),r=r.sibling;return o}return o0(g)+"<"+o+`>
`}function nu(r,g){var o=Cq(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return o0(g)+`...
`+nu(o,g+1);o="";var l=r.fiber._debugInfo;if(l)for(var w=0;w<l.length;w++){var b=l[w].name;typeof b==="string"&&(o+=o0(g)+"<"+b+`>
`,g++)}if(l="",w=r.fiber.pendingProps,r.fiber.tag===6)l=t2(w,r.serverProps,g),g++;else if(b=iq(r.fiber),b!==null)if(r.serverProps===void 0){l=g;var H=120-2*l-b.length-2,q="";for(G in w)if(w.hasOwnProperty(G)&&G!=="children"){var e=Sh(w[G],15);if(H-=G.length+e.length+2,0>H){q+=" ...";break}q+=" "+G+"="+e}l=o0(l)+"<"+b+q+`>
`,g++}else r.serverProps===null?(l=ku(b,w,ih(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=CJ(b,w,r.serverProps,g),g++);var G="";w=r.fiber.child;for(b=0;w&&b<r.children.length;)H=r.children[b],H.fiber===w?(G+=nu(H,g),b++):G+=Sq(w,g),w=w.sibling;w&&0<r.children.length&&(G+=o0(g)+`...
`),w=r.serverTail,r.serverProps===null&&g--;for(r=0;r<w.length;r++)b=w[r],G=typeof b==="string"?G+(Cl(g)+gw(b,120-2*g)+`
`):G+ku(b.type,b.props,Cl(g));return o+l+G}function Du(r){try{return`

`+nu(r,0)}catch(g){return""}}function kq(r,g,o){for(var l=g,w=null,b=0;l;)l===r&&(b=0),w={fiber:l,children:w!==null?[w]:[],serverProps:l===g?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:b},b++,l=l.return;return w!==null?Du(w).replaceAll(/^[+-]/gm,">"):""}function nq(r,g){var o=cr({},r||EW),l={tag:g};if(_W.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),Dz.indexOf(g)!==-1&&(o.pTagInButtonScope=null),nz.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,g==="form"&&(o.formTag=l),g==="a"&&(o.aTagInScope=l),g==="button"&&(o.buttonTagInScope=l),g==="nobr"&&(o.nobrTagInScope=l),g==="p"&&(o.pTagInButtonScope=l),g==="li"&&(o.listItemTagAutoclosing=l),g==="dd"||g==="dt")o.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function Dq(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return tz.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function iJ(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function tq(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function tu(r,g){g=g||EW;var o=g.current;if(g=(o=Dq(r,o&&o.tag,g.implicitRootScope)?null:o)?null:iJ(r,g),g=o||g,!g)return!0;var l=g.tag;if(g=String(!!o)+"|"+r+"|"+l,r6[g])return!1;r6[g]=!0;var w=(g=P0)?tq(g.return,l):null,b=g!==null&&w!==null?kq(w,g,null):"",H="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,H,l,o,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,H,l,b),g&&(r=g.return,w===null||r===null||w===r&&r._debugOwner===g._debugOwner||ur(w,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,H)})),!1}function V2(r,g,o){if(o||Dq("#text",g,!1))return!0;if(o="#text|"+g,r6[o])return!1;r6[o]=!0;var l=(o=P0)?tq(o,g):null;return o=o!==null&&l!==null?kq(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function vw(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function SJ(r){return r.replace(Ez,function(g,o){return o.toUpperCase()})}function Vq(r,g,o){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,SJ(g.replace(_z,"ms-")))):Vz.test(g)?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!jW.test(o)||vH.hasOwnProperty(o)&&vH[o]||(vH[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(jW,""))),typeof o==="number"&&(isNaN(o)?fW||(fW=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||aW||(aW=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,o):typeof o!=="number"||o===0||pW.has(g)?g==="float"?r.cssFloat=o:(d5(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function _q(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var l={};if(o){for(var w in o)if(o.hasOwnProperty(w)&&!g.hasOwnProperty(w))for(var b=oH[w]||[w],H=0;H<b.length;H++)l[b[H]]=w}for(var q in g)if(g.hasOwnProperty(q)&&(!o||o[q]!==g[q]))for(w=oH[q]||[q],b=0;b<w.length;b++)l[w[b]]=q;q={};for(var e in g)for(w=oH[e]||[e],b=0;b<w.length;b++)q[w[b]]=e;e={};for(var G in l)if(w=l[G],(b=q[G])&&w!==b&&(H=w+","+b,!e[H])){e[H]=!0,H=console;var I=g[w];H.error.call(H,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",I==null||typeof I==="boolean"||I===""?"Removing":"Updating",w,b)}}for(var N in o)!o.hasOwnProperty(N)||g!=null&&g.hasOwnProperty(N)||(N.indexOf("--")===0?r.setProperty(N,""):N==="float"?r.cssFloat="":r[N]="");for(var $ in g)G=g[$],g.hasOwnProperty($)&&o[$]!==G&&Vq(r,$,G)}else for(l in g)g.hasOwnProperty(l)&&Vq(r,l,g[l])}function lw(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Eq(r){return yz.get(r)||r}function kJ(r,g){if(V0.call(w5,g)&&w5[g])return!0;if(jz.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),w5[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),w5[g]=!0}if(cz.test(g)){if(r=g.toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return w5[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),w5[g]=!0)}return!0}function nJ(r,g){var o=[],l;for(l in g)kJ(r,l)||o.push(l);g=o.map(function(w){return"`"+w+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function DJ(r,g,o,l){if(V0.call(mo,g)&&mo[g])return!0;var w=g.toLowerCase();if(w==="onfocusin"||w==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),mo[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(w)?r[w]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),mo[g]=!0;if(r7.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),mo[g]=!0}else if(r7.test(g))return fz.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),mo[g]=!0;if(az.test(g)||pz.test(g))return!0;if(w==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),mo[g]=!0;if(w==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),mo[g]=!0;if(w==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),mo[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),mo[g]=!0;if(o6.hasOwnProperty(w)){if(w=o6[w],w!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,w),mo[g]=!0}else if(g!==w)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,w),mo[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(w=g.toLowerCase().slice(0,5),w==="data-"||w==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),mo[g]=!0}case"function":case"symbol":return mo[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),mo[g]=!0}}return!0}function tJ(r,g,o){var l=[],w;for(w in g)DJ(r,w,g[w],o)||l.push(w);g=l.map(function(b){return"`"+b+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function hw(r){return dz.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function _v(){}function Vu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function yq(r){var g=xr(r);if(g&&(r=g.stateNode)){var o=r[xo]||null;r:switch(r=g.stateNode,g.type){case"input":if(Cu(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;Ag(g,"name"),o=o.querySelectorAll('input[name="'+K0(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var l=o[g];if(l!==r&&l.form===r.form){var w=l[xo]||null;if(!w)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Cu(l,w.value,w.defaultValue,w.defaultValue,w.checked,w.defaultChecked,w.type,w.name)}}for(g=0;g<o.length;g++)l=o[g],l.form===r.form&&Lq(l)}break r;case"textarea":mq(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&Ch(r,!!o.multiple,g,!1)}}}function cq(r,g,o){if(lH)return r(g,o);lH=!0;try{var l=r(g);return l}finally{if(lH=!1,b5!==null||u5!==null){if(jh(),b5&&(g=b5,r=u5,u5=b5=null,yq(g),r))for(g=0;g<r.length;g++)yq(r[g])}}}function ww(r,g){var o=r.stateNode;if(o===null)return null;var l=o[xo]||null;if(l===null)return null;o=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function jq(){if(v6)return v6;var r,g=wH,o=g.length,l,w="value"in y1?y1.value:y1.textContent,b=w.length;for(r=0;r<o&&g[r]===w[r];r++);var H=o-r;for(l=1;l<=H&&g[o-l]===w[b-l];l++);return v6=w.slice(r,1<l?1-l:void 0)}function _2(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function E2(){return!0}function fq(){return!1}function Eo(r){function g(o,l,w,b,H){this._reactName=o,this._targetInst=w,this.type=l,this.nativeEvent=b,this.target=H,this.currentTarget=null;for(var q in r)r.hasOwnProperty(q)&&(o=r[q],this[q]=o?o(b):b[q]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?E2:fq,this.isPropagationStopped=fq,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=E2)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=E2)},persist:function(){},isPersistent:E2}),g}function VJ(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=PK[r])?!!g[r]:!1}function _u(){return VJ}function aq(r,g){switch(r){case"keyup":return zK.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==l7;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pq(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function _J(r,g){switch(r){case"compositionend":return pq(g);case"keypress":if(g.which!==w7)return null;return u7=!0,b7;case"textInput":return r=g.data,r===b7&&u7?null:r;default:return null}}function EJ(r,g){if(O5)return r==="compositionend"||!HH&&aq(r,g)?(r=jq(),v6=wH=y1=null,O5=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return h7&&g.locale!=="ko"?null:g.data;default:return null}}function dq(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!$K[r.type]:g==="textarea"?!0:!1}function yJ(r){if(!Iv)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function sq(r,g,o,l){b5?u5?u5.push(l):u5=[l]:b5=l,g=i4(g,"onChange"),0<g.length&&(o=new l6("onChange","change",null,o,l),r.push({event:o,listeners:g}))}function cJ(r){T9(r,0)}function y2(r){var g=mr(r);if(Lq(g))return r}function rA(r,g){if(r==="change")return g}function gA(){Ew&&(Ew.detachEvent("onpropertychange",oA),yw=Ew=null)}function oA(r){if(r.propertyName==="value"&&y2(yw)){var g=[];sq(g,yw,r,Vu(r)),cq(cJ,g)}}function jJ(r,g,o){r==="focusin"?(gA(),Ew=g,yw=o,Ew.attachEvent("onpropertychange",oA)):r==="focusout"&&gA()}function fJ(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return y2(yw)}function aJ(r,g){if(r==="click")return y2(g)}function pJ(r,g){if(r==="input"||r==="change")return y2(g)}function dJ(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function bw(r,g){if(To(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),l=Object.keys(g);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var w=o[l];if(!V0.call(g,w)||!To(r[w],g[w]))return!1}return!0}function vA(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lA(r,g){var o=vA(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=g&&l>=g)return{node:o,offset:g-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=vA(o)}}function hA(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?hA(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function wA(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=D2(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=g.contentWindow;else break;g=D2(r.document)}return g}function Eu(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function bA(r,g,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qH||H5==null||H5!==D2(l)||(l=H5,("selectionStart"in l)&&Eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cw&&bw(cw,l)||(cw=l,l=i4(PH,"onSelect"),0<l.length&&(g=new l6("onSelect","select",null,g,o),r.push({event:g,listeners:l}),g.target=H5)))}function il(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function Sl(r){if(AH[r])return AH[r];if(!P5[r])return r;var g=P5[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in H7)return AH[r]=g[o];return r}function n0(r,g){W7.set(r,g),Ko(g,[r])}function sJ(r){for(var g=w6,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(oo(l)&&l.length===2&&typeof l[0]==="string"){if(g!==w6&&g!==GH)return eH;g=GH}else return eH;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==w6&&g!==RH)return eH;g=RH}}return g}function yu(r,g,o,l){for(var w in r)V0.call(r,w)&&w[0]!=="_"&&bv(w,r[w],g,o,l)}function bv(r,g,o,l,w){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===zv){var b=V(g.type)||"…",H=g.key;g=g.props;var q=Object.keys(g),e=q.length;if(H==null&&e===0){g="<"+b+" />";break}if(3>l||e===1&&q[0]==="children"&&H==null){g="<"+b+" … />";break}o.push([w+"  ".repeat(l)+r,"<"+b]),H!==null&&bv("key",H,o,l+1,w),r=!1;for(var G in g)G==="children"?g.children!=null&&(!oo(g.children)||0<g.children.length)&&(r=!0):V0.call(g,G)&&G[0]!=="_"&&bv(G,g[G],o,l+1,w);o.push(["",r?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(g),b=b.slice(8,b.length-1),b==="Array"){if(G=sJ(g),G===RH||G===w6){g=JSON.stringify(g);break}else if(G===GH){o.push([w+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)b=g[r],bv(b[0],b[1],o,l+1,w);return}}if(b==="Promise"){if(g.status==="fulfilled"){if(b=o.length,bv(r,g.value,o,l,w),o.length>b){o=o[b],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(b=o.length,bv(r,g.reason,o,l,w),o.length>b)){o=o[b],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}b==="Object"&&(G=Object.getPrototypeOf(g))&&typeof G.constructor==="function"&&(b=G.constructor.name),o.push([w+"  ".repeat(l)+r,b==="Object"?3>l?"":"…":b]),3>l&&yu(g,o,l+1,w);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===ZK?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([w+"  ".repeat(l)+r,g])}function uA(r,g,o,l){var w=!0;for(H in r)H in g||(o.push([b6+"  ".repeat(l)+H,"…"]),w=!1);for(var b in g)if(b in r){var H=r[b],q=g[b];if(H!==q){if(l===0&&b==="children")w="  ".repeat(l)+b,o.push([b6+w,"…"],[u6+w,"…"]);else{if(!(3<=l)){if(typeof H==="object"&&typeof q==="object"&&H!==null&&q!==null&&H.$$typeof===q.$$typeof)if(q.$$typeof===zv){if(H.type===q.type&&H.key===q.key){H=V(q.type)||"…",w="  ".repeat(l)+b,H="<"+H+" … />",o.push([b6+w,H],[u6+w,H]),w=!1;continue}}else{var e=Object.prototype.toString.call(H),G=Object.prototype.toString.call(q);if(e===G&&(G==="[object Object]"||G==="[object Array]")){e=[G7+"  ".repeat(l)+b,G==="[object Array]"?"Array":""],o.push(e),G=o.length,uA(H,q,o,l+1)?G===o.length&&(e[1]="Referentially unequal but deeply equal objects. Consider memoization."):w=!1;continue}}else if(typeof H==="function"&&typeof q==="function"&&H.name===q.name&&H.length===q.length&&(e=Function.prototype.toString.call(H),G=Function.prototype.toString.call(q),e===G)){H=q.name===""?"() => {}":q.name+"() {}",o.push([G7+"  ".repeat(l)+b,H+" Referentially unequal function closure. Consider memoization."]);continue}}bv(b,H,o,l,b6),bv(b,q,o,l,u6)}w=!1}}else o.push([u6+"  ".repeat(l)+b,"…"]),w=!1;return w}function v0(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function uv(r,g,o,l){$g&&(j1.start=g,j1.end=o,sv.color="warning",sv.tooltipText=l,sv.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,j1)):performance.measure(l,j1))}function c2(r,g,o){uv(r,g,o,"Reconnect")}function j2(r,g,o,l,w){var b=S(r);if(b!==null&&$g){var{alternate:H,actualDuration:q}=r;if(H===null||H.child!==r.child)for(var e=r.child;e!==null;e=e.sibling)q-=e.actualDuration;l=0.5>q?l?"tertiary-light":"primary-light":10>q?l?"tertiary":"primary":100>q?l?"tertiary-dark":"primary-dark":"error";var G=r.memoizedProps;q=r._debugTask,G!==null&&H!==null&&H.memoizedProps!==G?(e=[xK],G=uA(H.memoizedProps,G,e,0),1<e.length&&(G&&!c1&&(H.lanes&w)===0&&100<r.actualDuration?(c1=!0,e[0]=mK,sv.color="warning",sv.tooltipText=X7):(sv.color=l,sv.tooltipText=b),sv.properties=e,j1.start=g,j1.end=o,q!=null?q.run(performance.measure.bind(performance,"​"+b,j1)):performance.measure("​"+b,j1))):q!=null?q.run(console.timeStamp.bind(console,b,g,o,U0,void 0,l)):console.timeStamp(b,g,o,U0,void 0,l)}}function cu(r,g,o,l){if($g){var w=S(r);if(w!==null){for(var b=null,H=[],q=0;q<l.length;q++){var e=l[q];b==null&&e.source!==null&&(b=e.source._debugTask),e=e.value,H.push(["Error",typeof e==="object"&&e!==null&&typeof e.message==="string"?String(e.message):String(e)])}r.key!==null&&bv("key",r.key,H,0,""),r.memoizedProps!==null&&yu(r.memoizedProps,H,0,""),b==null&&(b=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:U0,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:H}}},b?b.run(performance.measure.bind(performance,"​"+w,r)):performance.measure("​"+w,r)}}}function Ov(r,g,o,l,w){if(w!==null){if($g){var b=S(r);if(b!==null){l=[];for(var H=0;H<w.length;H++){var q=w[H].value;l.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r.key!==null&&bv("key",r.key,l,0,""),r.memoizedProps!==null&&yu(r.memoizedProps,l,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:U0,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+b,g)):performance.measure("​"+b,g)}}}else b=S(r),b!==null&&$g&&(w=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,b,g,o,U0,void 0,w)):console.timeStamp(b,g,o,U0,void 0,w))}function rQ(r,g,o,l){if($g&&!(g<=r)){var w=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,w)):console.timeStamp(o,r,g,fr,jr,w)}}function OA(r,g,o,l){!$g||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,jr,o)):console.timeStamp("Prewarm",r,g,fr,jr,o))}function HA(r,g,o,l){!$g||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,jr,o)):console.timeStamp("Suspended",r,g,fr,jr,o))}function gQ(r,g,o,l,w,b){if($g&&!(g<=r)){o=[];for(var H=0;H<l.length;H++){var q=l[H].value;o.push(["Recoverable Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:jr,tooltipText:w?"Hydration Failed":"Recovered after Error",properties:o}}},b?b.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function ju(r,g,o,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,jr,"error")):console.timeStamp("Errored",r,g,fr,jr,"error"))}function oQ(r,g,o,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,"secondary-light")):console.timeStamp(o,r,g,fr,jr,"secondary-light"))}function PA(r,g,o,l,w){if($g&&!(g<=r)){for(var b=[],H=0;H<o.length;H++){var q=o[H].value;b.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:jr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:b}}},w?w.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function uw(r,g,o){!$g||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,fr,jr,"secondary-dark")):console.timeStamp("Animating",r,g,fr,jr,"secondary-dark"))}function f2(){for(var r=q5,g=XH=q5=0;g<r;){var o=L0[g];L0[g++]=null;var l=L0[g];L0[g++]=null;var w=L0[g];L0[g++]=null;var b=L0[g];if(L0[g++]=null,l!==null&&w!==null){var H=l.pending;H===null?w.next=w:(w.next=H.next,H.next=w),l.pending=w}b!==0&&qA(o,w,b)}}function a2(r,g,o,l){L0[q5++]=r,L0[q5++]=g,L0[q5++]=o,L0[q5++]=l,XH|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function fu(r,g,o,l){return a2(r,g,o,l),p2(r)}function $o(r,g){return a2(r,null,null,g),p2(r)}function qA(r,g,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var w=!1,b=r.return;b!==null;)b.childLanes|=o,l=b.alternate,l!==null&&(l.childLanes|=o),b.tag===22&&(r=b.stateNode,r===null||r._visibility&jw||(w=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,w&&g!==null&&(w=31-Zo(o),r=b.hiddenUpdates,l=r[w],l===null?r[w]=[g]:l.push(g),g.lane=o|536870912),b):null}function p2(r){if(Jb>fK)throw Ah=Jb=0,Qb=dH=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ah>aK&&(Ah=0,Qb=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&F9(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&F9(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function kl(r){if(F0===null)return r;var g=F0(r);return g===void 0?r:g.current}function au(r){if(F0===null)return r;var g=F0(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=kl(r.render),r.render!==g)?(g={$$typeof:Cw,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function AA(r,g){if(F0===null)return!1;var o=r.elementType;g=g.type;var l=!1,w=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:w===H0&&(l=!0);break;case 11:w===Cw?l=!0:w===H0&&(l=!0);break;case 14:case 15:w===j4?l=!0:w===H0&&(l=!0);break;default:return!1}return l&&(r=F0(o),r!==void 0&&r===F0(g))?!0:!1}function MA(r){F0!==null&&typeof WeakSet==="function"&&(A5===null&&(A5=new WeakSet),A5.add(r))}function WA(r,g,o){do{var l=r,w=l.alternate,b=l.child,H=l.sibling,q=l.tag;l=l.type;var e=null;switch(q){case 0:case 15:case 1:e=l;break;case 11:e=l.render}if(F0===null)throw Error("Expected resolveFamily to be set during hot reload.");var G=!1;if(l=!1,e!==null&&(e=F0(e),e!==void 0&&(o.has(e)?l=!0:g.has(e)&&(q===1?l=!0:G=!0))),A5!==null&&(A5.has(r)||w!==null&&A5.has(w))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||G)w=$o(r,2),w!==null&&mg(w,r,2);if(b===null||l||WA(b,g,o),H===null)break;r=H}while(1)}function vQ(r,g,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Y7||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function pu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Ev(r,g){var o=r.alternate;switch(o===null?(o=z(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=kl(r.type);break;case 1:o.type=kl(r.type);break;case 11:o.type=au(r.type)}return o}function eA(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function du(r,g,o,l,w,b){var H=0,q=r;if(typeof r==="function")pu(r)&&(H=1),q=kl(q);else if(typeof r==="string")H=hr(),H=qz(r,o,H)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case _O:return g=z(31,o,g,w),g.elementType=_O,g.lanes=b,g;case g5:return nl(o.children,w,b,g);case c4:H=8,w|=Lo,w|=E0;break;case nO:return r=o,l=w,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=z(12,r,g,l|Dr),g.elementType=nO,g.lanes=b,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case tO:return g=z(13,o,g,w),g.elementType=tO,g.lanes=b,g;case VO:return g=z(19,o,g,w),g.elementType=VO,g.lanes=b,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Kv:H=10;break r;case DO:H=9;break r;case Cw:H=11,q=au(q);break r;case j4:H=14;break r;case H0:H=16,q=null;break r}if(q="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)q+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":oo(r)?o="array":r!==void 0&&r.$$typeof===zv?(o="<"+(V(r.type)||"Unknown")+" />",q=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(H=l?c(l):null)&&(q+=`

Check the render method of \``+H+"`."),H=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+q)),q=null}return g=z(H,o,g,w),g.elementType=r,g.type=q,g.lanes=b,g._debugOwner=l,g}function d2(r,g,o){return g=du(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function nl(r,g,o,l){return r=z(7,r,l,g),r.lanes=o,r}function su(r,g,o){return r=z(6,r,null,g),r.lanes=o,r}function RA(r){var g=z(18,null,null,Fr);return g.stateNode=r,g}function r8(r,g,o){return g=z(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function l0(r,g){if(typeof r==="object"&&r!==null){var o=YH.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:Sr(g)},YH.set(r,g),g}return{value:r,source:g,stack:Sr(g)}}function yv(r,g){N1(),M5[W5++]=fw,M5[W5++]=O6,O6=r,fw=g}function GA(r,g,o){N1(),I0[N0++]=g1,I0[N0++]=o1,I0[N0++]=sl,sl=r;var l=g1;r=o1;var w=32-Zo(l)-1;l&=~(1<<w),o+=1;var b=32-Zo(g)+w;if(30<b){var H=w-w%5;b=(l&(1<<H)-1).toString(32),l>>=H,w-=H,g1=1<<32-Zo(g)+w|o<<w|l,o1=b+r}else g1=1<<b|o<<w|l,o1=r}function g8(r){N1(),r.return!==null&&(yv(r,1),GA(r,1,0))}function o8(r){for(;r===O6;)O6=M5[--W5],M5[W5]=null,fw=M5[--W5],M5[W5]=null;for(;r===sl;)sl=I0[--N0],I0[N0]=null,o1=I0[--N0],I0[N0]=null,g1=I0[--N0],I0[N0]=null}function XA(){return N1(),sl!==null?{id:g1,overflow:o1}:null}function YA(r,g){N1(),I0[N0++]=g1,I0[N0++]=o1,I0[N0++]=sl,g1=g.id,o1=g.overflow,sl=r}function N1(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Dl(r,g){if(r.return===null){if(A0===null)A0={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(A0.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");A0.distanceFromLeaf>g&&(A0.distanceFromLeaf=g)}return A0}var o=Dl(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function JA(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function s2(r,g){Nv||(r=Dl(r,0),r.serverProps=null,g!==null&&(g=s9(g),r.serverTail.push(g)))}function B1(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=A0;throw l!==null&&(A0=null,o=Du(l)),Ow(l0(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),JH}function QA(r){var{stateNode:g,type:o,memoizedProps:l}=r;switch(g[eo]=r,g[xo]=l,QO(o,l),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<zb.length;o++)dr(zb[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":I1("input",l),dr("invalid",g),Fq(g,l),Iq(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":Nq(g,l);break;case"select":I1("select",l),dr("invalid",g),Zq(g,l);break;case"textarea":I1("textarea",l),dr("invalid",g),xq(g,l),Tq(g,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||l.suppressHydrationWarning===!0||k9(g.textContent,o)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=_v),g=!0):g=!1,g||B1(r,!0)}function zA(r){for(Ro=r.return;Ro;)switch(Ro.tag){case 5:case 31:case 13:B0=!1;return;case 27:case 3:B0=!0;return;default:Ro=Ro.return}}function kh(r){if(r!==Ro)return!1;if(!pr)return zA(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||LO(r.type,r.memoizedProps);o=!o}if(o&&Ug){for(o=Ug;o;){var l=Dl(r,0),w=s9(o);l.serverTail.push(w),o=w.type==="Suspense"?BO(o):O0(o.nextSibling)}B1(r)}if(zA(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Ug=BO(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Ug=BO(r)}else g===27?(g=Ug,D1(r.type)?(r=HP,HP=null,Ug=r):Ug=g):Ug=Ro?O0(r.stateNode.nextSibling):null;return!0}function tl(){Ug=Ro=null,Nv=pr=!1}function v8(){var r=a1;return r!==null&&(ko===null?ko=r:ko.push.apply(ko,r),a1=null),r}function Ow(r){a1===null?a1=[r]:a1.push(r)}function l8(){var r=A0;if(r!==null){A0=null;for(var g=Du(r);0<r.children.length;)r=r.children[0];ur(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function r4(){e5=H6=null,R5=!1}function Z1(r,g,o){Qr(QH,g._currentValue,r),g._currentValue=o,Qr(zH,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==Q7&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=Q7}function cv(r,g){r._currentValue=QH.current;var o=zH.current;Rr(zH,g),r._currentRenderer=o,Rr(QH,g)}function h8(r,g,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function w8(r,g,o,l){var w=r.child;w!==null&&(w.return=r);for(;w!==null;){var b=w.dependencies;if(b!==null){var H=w.child;b=b.firstContext;r:for(;b!==null;){var q=b;b=w;for(var e=0;e<g.length;e++)if(q.context===g[e]){b.lanes|=o,q=b.alternate,q!==null&&(q.lanes|=o),h8(b.return,o,r),l||(H=null);break r}b=q.next}}else if(w.tag===18){if(H=w.return,H===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");H.lanes|=o,b=H.alternate,b!==null&&(b.lanes|=o),h8(H,o,r),H=null}else H=w.child;if(H!==null)H.return=w;else for(H=w;H!==null;){if(H===r){H=null;break}if(w=H.sibling,w!==null){w.return=H.return,H=w;break}H=H.return}w=H}}function nh(r,g,o,l){r=null;for(var w=g,b=!1;w!==null;){if(!b){if((w.flags&524288)!==0)b=!0;else if((w.flags&262144)!==0)break}if(w.tag===10){var H=w.alternate;if(H===null)throw Error("Should have a current fiber. This is a bug in React.");if(H=H.memoizedProps,H!==null){var q=w.type;To(w.pendingProps.value,H.value)||(r!==null?r.push(q):r=[q])}}else if(w===f4.current){if(H=w.alternate,H===null)throw Error("Should have a current fiber. This is a bug in React.");H.memoizedState.memoizedState!==w.memoizedState.memoizedState&&(r!==null?r.push(Fb):r=[Fb])}w=w.return}r!==null&&w8(g,r,o,l),g.flags|=262144}function g4(r){for(r=r.firstContext;r!==null;){if(!To(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Vl(r){H6=r,e5=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Fg(r){return R5&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),KA(H6,r)}function o4(r,g){return H6===null&&Vl(r),KA(r,g)}function KA(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},e5===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");e5=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else e5=e5.next=g;return o}function b8(){return{controller:new iK,data:new Map,refCount:0}}function _l(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Hw(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&SK(kK,function(){r.controller.abort()})}function Hv(r,g,o){if((r&127)!==0)0>Bv&&(Bv=fg(),pw=P6(g),KH=g,o!=null&&($H=S(o)),(og&(lo|e0))!==Oo&&(Tg=!0,s1=aw),r=Bw(),g=Nw(),r!==G5||g!==dw?G5=-1.1:g!==null&&(s1=aw),gh=r,dw=g);else if((r&4194048)!==0&&0>Z0&&(Z0=fg(),sw=P6(g),z7=g,o!=null&&(K7=S(o)),0>h1)){if(r=Bw(),g=Nw(),r!==gl||g!==oh)gl=-1.1;rl=r,oh=g}}function lQ(r){if(0>Bv){Bv=fg(),pw=r._debugTask!=null?r._debugTask:null,(og&(lo|e0))!==Oo&&(s1=aw);var g=Bw(),o=Nw();g!==G5||o!==dw?G5=-1.1:o!==null&&(s1=aw),gh=g,dw=o}if(0>Z0&&(Z0=fg(),sw=r._debugTask!=null?r._debugTask:null,0>h1)){if(r=Bw(),g=Nw(),r!==gl||g!==oh)gl=-1.1;rl=r,oh=g}}function jv(){var r=rh;return rh=0,r}function v4(r){var g=rh;return rh=r,g}function Pw(r){var g=rh;return rh+=r,g}function l4(){Lr=Ur=-1.1}function h0(){var r=Ur;return Ur=-1.1,r}function w0(r){0<=r&&(Ur=r)}function Pv(){var r=Bg;return Bg=-0,r}function qv(r){0<=r&&(Bg=r)}function Av(){var r=Ig;return Ig=null,r}function Mv(){var r=Tg;return Tg=!1,r}function u8(r){Co=fg(),0>r.actualStartTime&&(r.actualStartTime=Co)}function O8(r){if(0<=Co){var g=fg()-Co;r.actualDuration+=g,r.selfBaseDuration=g,Co=-1}}function $A(r){if(0<=Co){var g=fg()-Co;r.actualDuration+=g,Co=-1}}function Wv(){if(0<=Co){var r=fg(),g=r-Co;Co=-1,rh+=g,Bg+=g,Lr=r}}function UA(r){Ig===null&&(Ig=[]),Ig.push(r),l1===null&&(l1=[]),l1.push(r)}function ev(){Co=fg(),0>Ur&&(Ur=Co)}function qw(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function hQ(r,g){if(gb===null){var o=gb=[];LH=0,vh=GO(),X5={status:"pending",value:void 0,then:function(l){o.push(l)}}}return LH++,g.then(LA,LA),g}function LA(){if(--LH===0&&(-1<Z0||(h1=-1.1),gb!==null)){X5!==null&&(X5.status="fulfilled");var r=gb;gb=null,vh=0,X5=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function wQ(r,g){var o=[],l={status:"pending",value:null,reason:null,then:function(w){o.push(w)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var w=0;w<o.length;w++)(0,o[w])(g)},function(w){l.status="rejected",l.reason=w;for(w=0;w<o.length;w++)(0,o[w])(void 0)}),l}function H8(){var r=lh.current;return r!==null?r:Gg.pooledCache}function h4(r,g){g===null?Qr(lh,lh.current,r):Qr(lh,g.pool,r)}function FA(){var r=H8();return r===null?null:{parent:jg._currentValue,pool:r}}function IA(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function NA(r){return r=r.status,r==="fulfilled"||r==="rejected"}function BA(r,g,o){i.actQueue!==null&&(i.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(_v,_v),g=o),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var w={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:w}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){w.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,xA(r),r;default:if(typeof g.status==="string")g.then(_v,_v);else{if(r=Gg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(b){if(g.status==="pending"){var H=g;H.status="fulfilled",H.value=b}},function(b){if(g.status==="pending"){var H=g;H.status="rejected",H.reason=b}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,xA(r),r}throw wh=g,ub=!0,Y5}}function x1(r){try{return VK(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw wh=g,ub=!0,Y5;throw g}}function ZA(){if(wh===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=wh;return wh=null,ub=!1,r}function xA(r){if(r===Y5||r===X6)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Ao(r){var g=tr;return r!=null&&(tr=g===null?r:g.concat(r)),g}function P8(){var r=tr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function w4(r,g,o){for(var l=Object.keys(r.props),w=0;w<l.length;w++){var b=l[w];if(b!=="children"&&b!=="key"){g===null&&(g=d2(r,o.mode,0),g._debugInfo=tr,g.return=o),ur(g,function(H){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",H)},b);break}}}function b4(r){var g=Ob;return Ob+=1,J5===null&&(J5=IA()),BA(J5,r,g)}function Aw(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function mA(r,g){if(g.$$typeof===Qz)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function u4(r,g){var o=P8();o!==null?o.run(mA.bind(null,r,g)):mA(r,g)}function TA(r,g){var o=S(r)||"Component";_7[o]||(_7[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function O4(r,g){var o=P8();o!==null?o.run(TA.bind(null,r,g)):TA(r,g)}function CA(r,g){var o=S(r)||"Component";E7[o]||(E7[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function H4(r,g){var o=P8();o!==null?o.run(CA.bind(null,r,g)):CA(r,g)}function iA(r){function g(K,U){if(r){var F=K.deletions;F===null?(K.deletions=[U],K.flags|=16):F.push(U)}}function o(K,U){if(!r)return null;for(;U!==null;)g(K,U),U=U.sibling;return null}function l(K){for(var U=new Map;K!==null;)K.key!==null?U.set(K.key,K):U.set(K.index,K),K=K.sibling;return U}function w(K,U){return K=Ev(K,U),K.index=0,K.sibling=null,K}function b(K,U,F){if(K.index=F,!r)return K.flags|=1048576,U;if(F=K.alternate,F!==null)return F=F.index,F<U?(K.flags|=67108866,U):F;return K.flags|=67108866,U}function H(K){return r&&K.alternate===null&&(K.flags|=67108866),K}function q(K,U,F,t){if(U===null||U.tag!==6)return U=su(F,K.mode,t),U.return=K,U._debugOwner=K,U._debugTask=K._debugTask,U._debugInfo=tr,U;return U=w(U,F),U.return=K,U._debugInfo=tr,U}function e(K,U,F,t){var Hr=F.type;if(Hr===g5)return U=I(K,U,F.props.children,t,F.key),w4(F,U,K),U;if(U!==null&&(U.elementType===Hr||AA(U,F)||typeof Hr==="object"&&Hr!==null&&Hr.$$typeof===H0&&x1(Hr)===U.type))return U=w(U,F.props),Aw(U,F),U.return=K,U._debugOwner=F._owner,U._debugInfo=tr,U;return U=d2(F,K.mode,t),Aw(U,F),U.return=K,U._debugInfo=tr,U}function G(K,U,F,t){if(U===null||U.tag!==4||U.stateNode.containerInfo!==F.containerInfo||U.stateNode.implementation!==F.implementation)return U=r8(F,K.mode,t),U.return=K,U._debugInfo=tr,U;return U=w(U,F.children||[]),U.return=K,U._debugInfo=tr,U}function I(K,U,F,t,Hr){if(U===null||U.tag!==7)return U=nl(F,K.mode,t,Hr),U.return=K,U._debugOwner=K,U._debugTask=K._debugTask,U._debugInfo=tr,U;return U=w(U,F),U.return=K,U._debugInfo=tr,U}function N(K,U,F){if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return U=su(""+U,K.mode,F),U.return=K,U._debugOwner=K,U._debugTask=K._debugTask,U._debugInfo=tr,U;if(typeof U==="object"&&U!==null){switch(U.$$typeof){case zv:return F=d2(U,K.mode,F),Aw(F,U),F.return=K,K=Ao(U._debugInfo),F._debugInfo=tr,tr=K,F;case r5:return U=r8(U,K.mode,F),U.return=K,U._debugInfo=tr,U;case H0:var t=Ao(U._debugInfo);return U=x1(U),K=N(K,U,F),tr=t,K}if(oo(U)||C(U))return F=nl(U,K.mode,F,null),F.return=K,F._debugOwner=K,F._debugTask=K._debugTask,K=Ao(U._debugInfo),F._debugInfo=tr,tr=K,F;if(typeof U.then==="function")return t=Ao(U._debugInfo),K=N(K,b4(U),F),tr=t,K;if(U.$$typeof===Kv)return N(K,o4(K,U),F);u4(K,U)}return typeof U==="function"&&O4(K,U),typeof U==="symbol"&&H4(K,U),null}function $(K,U,F,t){var Hr=U!==null?U.key:null;if(typeof F==="string"&&F!==""||typeof F==="number"||typeof F==="bigint")return Hr!==null?null:q(K,U,""+F,t);if(typeof F==="object"&&F!==null){switch(F.$$typeof){case zv:return F.key===Hr?(Hr=Ao(F._debugInfo),K=e(K,U,F,t),tr=Hr,K):null;case r5:return F.key===Hr?G(K,U,F,t):null;case H0:return Hr=Ao(F._debugInfo),F=x1(F),K=$(K,U,F,t),tr=Hr,K}if(oo(F)||C(F)){if(Hr!==null)return null;return Hr=Ao(F._debugInfo),K=I(K,U,F,t,null),tr=Hr,K}if(typeof F.then==="function")return Hr=Ao(F._debugInfo),K=$(K,U,b4(F),t),tr=Hr,K;if(F.$$typeof===Kv)return $(K,U,o4(K,F),t);u4(K,F)}return typeof F==="function"&&O4(K,F),typeof F==="symbol"&&H4(K,F),null}function x(K,U,F,t,Hr){if(typeof t==="string"&&t!==""||typeof t==="number"||typeof t==="bigint")return K=K.get(F)||null,q(U,K,""+t,Hr);if(typeof t==="object"&&t!==null){switch(t.$$typeof){case zv:return F=K.get(t.key===null?F:t.key)||null,K=Ao(t._debugInfo),U=e(U,F,t,Hr),tr=K,U;case r5:return K=K.get(t.key===null?F:t.key)||null,G(U,K,t,Hr);case H0:var Nr=Ao(t._debugInfo);return t=x1(t),U=x(K,U,F,t,Hr),tr=Nr,U}if(oo(t)||C(t))return F=K.get(F)||null,K=Ao(t._debugInfo),U=I(U,F,t,Hr,null),tr=K,U;if(typeof t.then==="function")return Nr=Ao(t._debugInfo),U=x(K,U,F,b4(t),Hr),tr=Nr,U;if(t.$$typeof===Kv)return x(K,U,F,o4(U,t),Hr);u4(U,t)}return typeof t==="function"&&O4(U,t),typeof t==="symbol"&&H4(U,t),null}function wr(K,U,F,t){if(typeof F!=="object"||F===null)return t;switch(F.$$typeof){case zv:case r5:J(K,U,F);var Hr=F.key;if(typeof Hr!=="string")break;if(t===null){t=new Set,t.add(Hr);break}if(!t.has(Hr)){t.add(Hr);break}ur(U,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",Hr)});break;case H0:F=x1(F),wr(K,U,F,t)}return t}function Mr(K,U,F,t){for(var Hr=null,Nr=null,Kr=null,Yr=U,kr=U=0,Lg=null;Yr!==null&&kr<F.length;kr++){Yr.index>kr?(Lg=Yr,Yr=null):Lg=Yr.sibling;var Vg=$(K,Yr,F[kr],t);if(Vg===null){Yr===null&&(Yr=Lg);break}Hr=wr(K,Vg,F[kr],Hr),r&&Yr&&Vg.alternate===null&&g(K,Yr),U=b(Vg,U,kr),Kr===null?Nr=Vg:Kr.sibling=Vg,Kr=Vg,Yr=Lg}if(kr===F.length)return o(K,Yr),pr&&yv(K,kr),Nr;if(Yr===null){for(;kr<F.length;kr++)Yr=N(K,F[kr],t),Yr!==null&&(Hr=wr(K,Yr,F[kr],Hr),U=b(Yr,U,kr),Kr===null?Nr=Yr:Kr.sibling=Yr,Kr=Yr);return pr&&yv(K,kr),Nr}for(Yr=l(Yr);kr<F.length;kr++)Lg=x(Yr,K,kr,F[kr],t),Lg!==null&&(Hr=wr(K,Lg,F[kr],Hr),r&&Lg.alternate!==null&&Yr.delete(Lg.key===null?kr:Lg.key),U=b(Lg,U,kr),Kr===null?Nr=Lg:Kr.sibling=Lg,Kr=Lg);return r&&Yr.forEach(function(M1){return g(K,M1)}),pr&&yv(K,kr),Nr}function Qg(K,U,F,t){if(F==null)throw Error("An iterable object provided no iterator.");for(var Hr=null,Nr=null,Kr=U,Yr=U=0,kr=null,Lg=null,Vg=F.next();Kr!==null&&!Vg.done;Yr++,Vg=F.next()){Kr.index>Yr?(kr=Kr,Kr=null):kr=Kr.sibling;var M1=$(K,Kr,Vg.value,t);if(M1===null){Kr===null&&(Kr=kr);break}Lg=wr(K,M1,Vg.value,Lg),r&&Kr&&M1.alternate===null&&g(K,Kr),U=b(M1,U,Yr),Nr===null?Hr=M1:Nr.sibling=M1,Nr=M1,Kr=kr}if(Vg.done)return o(K,Kr),pr&&yv(K,Yr),Hr;if(Kr===null){for(;!Vg.done;Yr++,Vg=F.next())Kr=N(K,Vg.value,t),Kr!==null&&(Lg=wr(K,Kr,Vg.value,Lg),U=b(Kr,U,Yr),Nr===null?Hr=Kr:Nr.sibling=Kr,Nr=Kr);return pr&&yv(K,Yr),Hr}for(Kr=l(Kr);!Vg.done;Yr++,Vg=F.next())kr=x(Kr,K,Yr,Vg.value,t),kr!==null&&(Lg=wr(K,kr,Vg.value,Lg),r&&kr.alternate!==null&&Kr.delete(kr.key===null?Yr:kr.key),U=b(kr,U,Yr),Nr===null?Hr=kr:Nr.sibling=kr,Nr=kr);return r&&Kr.forEach(function(A$){return g(K,A$)}),pr&&yv(K,Yr),Hr}function sr(K,U,F,t){if(typeof F==="object"&&F!==null&&F.type===g5&&F.key===null&&(w4(F,null,K),F=F.props.children),typeof F==="object"&&F!==null){switch(F.$$typeof){case zv:var Hr=Ao(F._debugInfo);r:{for(var Nr=F.key;U!==null;){if(U.key===Nr){if(Nr=F.type,Nr===g5){if(U.tag===7){o(K,U.sibling),t=w(U,F.props.children),t.return=K,t._debugOwner=F._owner,t._debugInfo=tr,w4(F,t,K),K=t;break r}}else if(U.elementType===Nr||AA(U,F)||typeof Nr==="object"&&Nr!==null&&Nr.$$typeof===H0&&x1(Nr)===U.type){o(K,U.sibling),t=w(U,F.props),Aw(t,F),t.return=K,t._debugOwner=F._owner,t._debugInfo=tr,K=t;break r}o(K,U);break}else g(K,U);U=U.sibling}F.type===g5?(t=nl(F.props.children,K.mode,t,F.key),t.return=K,t._debugOwner=K,t._debugTask=K._debugTask,t._debugInfo=tr,w4(F,t,K),K=t):(t=d2(F,K.mode,t),Aw(t,F),t.return=K,t._debugInfo=tr,K=t)}return K=H(K),tr=Hr,K;case r5:r:{Hr=F;for(F=Hr.key;U!==null;){if(U.key===F)if(U.tag===4&&U.stateNode.containerInfo===Hr.containerInfo&&U.stateNode.implementation===Hr.implementation){o(K,U.sibling),t=w(U,Hr.children||[]),t.return=K,K=t;break r}else{o(K,U);break}else g(K,U);U=U.sibling}t=r8(Hr,K.mode,t),t.return=K,K=t}return H(K);case H0:return Hr=Ao(F._debugInfo),F=x1(F),K=sr(K,U,F,t),tr=Hr,K}if(oo(F))return Hr=Ao(F._debugInfo),K=Mr(K,U,F,t),tr=Hr,K;if(C(F)){if(Hr=Ao(F._debugInfo),Nr=C(F),typeof Nr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Kr=Nr.call(F);if(Kr===F){if(K.tag!==0||Object.prototype.toString.call(K.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Kr)!=="[object Generator]")t7||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),t7=!0}else F.entries!==Nr||BH||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),BH=!0);return K=Qg(K,U,Kr,t),tr=Hr,K}if(typeof F.then==="function")return Hr=Ao(F._debugInfo),K=sr(K,U,b4(F),t),tr=Hr,K;if(F.$$typeof===Kv)return sr(K,U,o4(K,F),t);u4(K,F)}if(typeof F==="string"&&F!==""||typeof F==="number"||typeof F==="bigint")return Hr=""+F,U!==null&&U.tag===6?(o(K,U.sibling),t=w(U,Hr),t.return=K,K=t):(o(K,U),t=su(Hr,K.mode,t),t.return=K,t._debugOwner=K,t._debugTask=K._debugTask,t._debugInfo=tr,K=t),H(K);return typeof F==="function"&&O4(K,F),typeof F==="symbol"&&H4(K,F),o(K,U)}return function(K,U,F,t){var Hr=tr;tr=null;try{Ob=0;var Nr=sr(K,U,F,t);return J5=null,Nr}catch(Lg){if(Lg===Y5||Lg===X6)throw Lg;var Kr=z(29,Lg,null,K.mode);Kr.lanes=t,Kr.return=K;var Yr=Kr._debugInfo=tr;if(Kr._debugOwner=K._debugOwner,Kr._debugTask=K._debugTask,Yr!=null){for(var kr=Yr.length-1;0<=kr;kr--)if(typeof Yr[kr].stack==="string"){Kr._debugOwner=Yr[kr],Kr._debugTask=Yr[kr].debugTask;break}}return Kr}finally{tr=Hr}}}function SA(r,g){var o=oo(r);return r=!o&&typeof C(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function q8(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function A8(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function m1(r){return{lane:r,tag:c7,payload:null,callback:null,next:null}}function T1(r,g,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,xH===l&&!a7){var w=S(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,w),a7=!0}if((og&lo)!==Oo)return w=l.pending,w===null?g.next=g:(g.next=w.next,w.next=g),l.pending=g,g=p2(r),qA(r,null,o),g;return a2(r,l,g,o),p2(r)}function Mw(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,xl(r,o)}}function P4(r,g){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var w=null,b=null;if(o=o.firstBaseUpdate,o!==null){do{var H={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};b===null?w=b=H:b=b.next=H,o=o.next}while(o!==null);b===null?w=b=g:b=b.next=g}else w=b=g;o={baseState:l.baseState,firstBaseUpdate:w,lastBaseUpdate:b,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Ww(){if(mH){var r=X5;if(r!==null)throw r}}function ew(r,g,o,l){mH=!1;var w=r.updateQueue;ol=!1,xH=w.shared;var{firstBaseUpdate:b,lastBaseUpdate:H}=w,q=w.shared.pending;if(q!==null){w.shared.pending=null;var e=q,G=e.next;e.next=null,H===null?b=G:H.next=G,H=e;var I=r.alternate;I!==null&&(I=I.updateQueue,q=I.lastBaseUpdate,q!==H&&(q===null?I.firstBaseUpdate=G:q.next=G,I.lastBaseUpdate=e))}if(b!==null){var N=w.baseState;H=0,I=G=e=null,q=b;do{var $=q.lane&-536870913,x=$!==q.lane;if(x?(Vr&$)===$:(l&$)===$){$!==0&&$===vh&&(mH=!0),I!==null&&(I=I.next={lane:0,tag:q.tag,payload:q.payload,callback:null,next:null});r:{$=r;var wr=q,Mr=g,Qg=o;switch(wr.tag){case j7:if(wr=wr.payload,typeof wr==="function"){R5=!0;var sr=wr.call(Qg,N,Mr);if($.mode&Lo){Yg(!0);try{wr.call(Qg,N,Mr)}finally{Yg(!1)}}R5=!1,N=sr;break r}N=wr;break r;case ZH:$.flags=$.flags&-65537|128;case c7:if(sr=wr.payload,typeof sr==="function"){if(R5=!0,wr=sr.call(Qg,N,Mr),$.mode&Lo){Yg(!0);try{sr.call(Qg,N,Mr)}finally{Yg(!1)}}R5=!1}else wr=sr;if(wr===null||wr===void 0)break r;N=cr({},N,wr);break r;case f7:ol=!0}}$=q.callback,$!==null&&(r.flags|=64,x&&(r.flags|=8192),x=w.callbacks,x===null?w.callbacks=[$]:x.push($))}else x={lane:$,tag:q.tag,payload:q.payload,callback:q.callback,next:null},I===null?(G=I=x,e=N):I=I.next=x,H|=$;if(q=q.next,q===null)if(q=w.shared.pending,q===null)break;else x=q,q=x.next,x.next=null,w.lastBaseUpdate=x,w.shared.pending=null}while(1);I===null&&(e=N),w.baseState=e,w.firstBaseUpdate=G,w.lastBaseUpdate=I,b===null&&(w.shared.lanes=0),hl|=H,r.lanes=H,r.memoizedState=N}xH=null}function kA(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function bQ(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)kA(o[r],g)}function nA(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)kA(o[r],g)}function DA(r,g){var o=mv;Qr(J6,o,r),Qr(Q5,g,r),mv=o|g.baseLanes}function M8(r){Qr(J6,mv,r),Qr(Q5,Q5.current,r)}function W8(r){mv=J6.current,Rr(Q5,r),Rr(J6,r)}function C1(r){var g=r.alternate;Qr(tg,tg.current&z5,r),Qr(M0,r,r),x0===null&&(g===null||Q5.current!==null?x0=r:g.memoizedState!==null&&(x0=r))}function e8(r){Qr(tg,tg.current,r),Qr(M0,r,r),x0===null&&(x0=r)}function tA(r){r.tag===22?(Qr(tg,tg.current,r),Qr(M0,r,r),x0===null&&(x0=r)):i1(r)}function i1(r){Qr(tg,tg.current,r),Qr(M0,M0.current,r)}function b0(r){Rr(M0,r),x0===r&&(x0=null),Rr(tg,r)}function q4(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||IO(o)||NO(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function yr(){var r=T;T0===null?T0=[r]:T0.push(r)}function p(){var r=T;if(T0!==null&&(O1++,T0[O1]!==r)){var g=S(Ir);if(!p7.has(g)&&(p7.add(g),T0!==null)){for(var o="",l=0;l<=O1;l++){var w=T0[l],b=l===O1?r:w;for(w=l+1+". "+w;30>w.length;)w+=" ";w+=b+`
`,o+=w}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function Dh(r){r===void 0||r===null||oo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",T,typeof r)}function A4(){var r=S(Ir);s7.has(r)||(s7.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Sg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function R8(r,g){if(qb)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",T),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,T,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!To(r[o],g[o]))return!1;return!0}function G8(r,g,o,l,w,b){if(b1=b,Ir=g,T0=r!==null?r._debugHookTypes:null,O1=-1,qb=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")b=S(Ir),TH.has(b)||(TH.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,i.H=r!==null&&r.memoizedState!==null?iH:T0!==null?re:CH,uh=b=(g.mode&Lo)!==Fr;var H=FH(o,l,w);if(uh=!1,$5&&(H=X8(g,o,l,w)),b){Yg(!0);try{H=X8(g,o,l,w)}finally{Yg(!1)}}return VA(r,g),H}function VA(r,g){g._debugHookTypes=T0,g.dependencies===null?u1!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:u1}):g.dependencies._debugThenableState=u1,i.H=Ab;var o=Rg!==null&&Rg.next!==null;if(b1=0,T0=T=ag=Rg=Ir=null,O1=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),z6=!1,Pb=0,u1=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||pg||(r=r.dependencies,r!==null&&g4(r)&&(pg=!0)),ub?(ub=!1,r=!0):r=!1,r&&(g=S(g)||"Unknown",d7.has(g)||TH.has(g)||(d7.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X8(r,g,o,l){Ir=r;var w=0;do{if($5&&(u1=null),Pb=0,$5=!1,w>=EK)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(w+=1,qb=!1,ag=Rg=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}O1=-1,i.H=ge,b=FH(g,o,l)}while($5);return b}function uQ(){var r=i.H,g=r.useState()[0];return g=typeof g.then==="function"?Rw(g):g,r=r.useState()[0],(Rg!==null?Rg.memoizedState:null)!==r&&(Ir.flags|=1024),g}function Y8(){var r=K6!==0;return K6=0,r}function J8(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&E0)!==Fr?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Q8(r){if(z6){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}z6=!1}b1=0,T0=ag=Rg=Ir=null,O1=-1,T=null,$5=!1,Pb=K6=0,u1=null}function Bo(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ag===null?Ir.memoizedState=ag=r:ag=ag.next=r,ag}function Hg(){if(Rg===null){var r=Ir.alternate;r=r!==null?r.memoizedState:null}else r=Rg.next;var g=ag===null?Ir.memoizedState:ag.next;if(g!==null)ag=g,Rg=r;else{if(r===null){if(Ir.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Rg=r,r={memoizedState:Rg.memoizedState,baseState:Rg.baseState,baseQueue:Rg.baseQueue,queue:Rg.queue,next:null},ag===null?Ir.memoizedState=ag=r:ag=ag.next=r}return ag}function M4(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rw(r){var g=Pb;return Pb+=1,u1===null&&(u1=IA()),r=BA(u1,r,g),g=Ir,(ag===null?g.memoizedState:ag.next)===null&&(g=g.alternate,i.H=g!==null&&g.memoizedState!==null?iH:CH),r}function S1(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Rw(r);if(r.$$typeof===Kv)return Fg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function El(r){var g=null,o=Ir.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var l=Ir.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(w){return w.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=M4(),Ir.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||qb)for(o=g.data[g.index]=Array(r),l=0;l<r;l++)o[l]=zz;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function D0(r,g){return typeof g==="function"?g(r):g}function z8(r,g,o){var l=Bo();if(o!==void 0){var w=o(g);if(uh){Yg(!0);try{o(g)}finally{Yg(!1)}}}else w=g;return l.memoizedState=l.baseState=w,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:w},l.queue=r,r=r.dispatch=AQ.bind(null,Ir,r),[l.memoizedState,r]}function th(r){var g=Hg();return K8(g,Rg,r)}function K8(r,g,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var w=r.baseQueue,b=l.pending;if(b!==null){if(w!==null){var H=w.next;w.next=b.next,b.next=H}g.baseQueue!==w&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=w=b,l.pending=null}if(b=r.baseState,w===null)r.memoizedState=b;else{g=w.next;var q=H=null,e=null,G=g,I=!1;do{var N=G.lane&-536870913;if(N!==G.lane?(Vr&N)===N:(b1&N)===N){var $=G.revertLane;if($===0)e!==null&&(e=e.next={lane:0,revertLane:0,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),N===vh&&(I=!0);else if((b1&$)===$){G=G.next,$===vh&&(I=!0);continue}else N={lane:0,revertLane:G.revertLane,gesture:null,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},e===null?(q=e=N,H=b):e=e.next=N,Ir.lanes|=$,hl|=$;N=G.action,uh&&o(b,N),b=G.hasEagerState?G.eagerState:o(b,N)}else $={lane:N,revertLane:G.revertLane,gesture:G.gesture,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},e===null?(q=e=$,H=b):e=e.next=$,Ir.lanes|=N,hl|=N;G=G.next}while(G!==null&&G!==g);if(e===null?H=b:e.next=q,!To(b,r.memoizedState)&&(pg=!0,I&&(o=X5,o!==null)))throw o;r.memoizedState=b,r.baseState=H,r.baseQueue=e,l.lastRenderedState=b}return w===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Gw(r){var g=Hg(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:w}=o,b=g.memoizedState;if(w!==null){o.pending=null;var H=w=w.next;do b=r(b,H.action),H=H.next;while(H!==w);To(b,g.memoizedState)||(pg=!0),g.memoizedState=b,g.baseQueue===null&&(g.baseState=b),o.lastRenderedState=b}return[b,l]}function $8(r,g,o){var l=Ir,w=Bo();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=o();K5||b===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),K5=!0)}else{if(b=g(),K5||(o=g(),To(b,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),K5=!0)),Gg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||_A(l,g,b)}return w.memoizedState=b,o={value:b,getSnapshot:g},w.queue=o,G4(yA.bind(null,l,o,r),[r]),l.flags|=2048,_h(m0|So,{destroy:void 0},EA.bind(null,l,o,b,g),null),b}function W4(r,g,o){var l=Ir,w=Hg(),b=pr;if(b){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!K5){var H=g();To(o,H)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),K5=!0)}if(H=!To((Rg||w).memoizedState,o))w.memoizedState=o,pg=!0;w=w.queue;var q=yA.bind(null,l,w,r);if(yo(2048,So,q,[r]),w.getSnapshot!==g||H||ag!==null&&ag.memoizedState.tag&m0){if(l.flags|=2048,_h(m0|So,{destroy:void 0},EA.bind(null,l,w,o,g),null),Gg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(b1&127)!==0||_A(l,g,o)}return o}function _A(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=Ir.updateQueue,g===null?(g=M4(),Ir.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function EA(r,g,o,l){g.value=o,g.getSnapshot=l,cA(g)&&jA(r)}function yA(r,g,o){return o(function(){cA(g)&&(Hv(2,"updateSyncExternalStore()",r),jA(r))})}function cA(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!To(r,o)}catch(l){return!0}}function jA(r){var g=$o(r,2);g!==null&&mg(g,r,2)}function U8(r){var g=Bo();if(typeof r==="function"){var o=r;if(r=o(),uh){Yg(!0);try{o()}finally{Yg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:r},g}function L8(r){r=U8(r);var g=r.queue,o=AM.bind(null,Ir,g);return g.dispatch=o,[r.memoizedState,o]}function F8(r){var g=Bo();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=t8.bind(null,Ir,!0,o),o.dispatch=g,[r,g]}function fA(r,g){var o=Hg();return aA(o,Rg,r,g)}function aA(r,g,o,l){return r.baseState=o,K8(r,Rg,typeof l==="function"?l:D0)}function pA(r,g){var o=Hg();if(Rg!==null)return aA(o,Rg,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OQ(r,g,o,l,w){if(K4(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var b={payload:w,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(H){b.listeners.push(H)}};i.T!==null?o(!0):b.isTransition=!1,l(b),o=g.pending,o===null?(b.next=g.pending=b,dA(g,b)):(b.next=o.next,g.pending=o.next=b)}}function dA(r,g){var{action:o,payload:l}=g,w=r.state;if(g.isTransition){var b=i.T,H={};H._updatedFibers=new Set,i.T=H;try{var q=o(w,l),e=i.S;e!==null&&e(H,q),sA(r,g,q)}catch(G){I8(r,g,G)}finally{b!==null&&H.types!==null&&(b.types!==null&&b.types!==H.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=H.types),i.T=b,b===null&&H._updatedFibers&&(r=H._updatedFibers.size,H._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{H=o(w,l),sA(r,g,H)}catch(G){I8(r,g,G)}}function sA(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(i.asyncTransitions++,o.then(z4,z4),o.then(function(l){rM(r,g,l)},function(l){return I8(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):rM(r,g,o)}function rM(r,g,o){g.status="fulfilled",g.value=o,gM(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,dA(r,o)))}function I8(r,g,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=o,gM(g),g=g.next;while(g!==l)}r.action=null}function gM(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function oM(r,g){return g}function Vh(r,g){if(pr){var o=Gg.formState;if(o!==null){r:{var l=Ir;if(pr){if(Ug){g:{var w=Ug;for(var b=B0;w.nodeType!==8;){if(!b){w=null;break g}if(w=O0(w.nextSibling),w===null){w=null;break g}}b=w.data,w=b===wP||b===ne?w:null}if(w){Ug=O0(w.nextSibling),l=w.data===wP;break r}}B1(l)}l=!1}l&&(g=o[0])}}return o=Bo(),o.memoizedState=o.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oM,lastRenderedState:g},o.queue=l,o=AM.bind(null,Ir,l),l.dispatch=o,l=U8(!1),b=t8.bind(null,Ir,!1,l.queue),l=Bo(),w={state:g,dispatch:null,action:r,pending:null},l.queue=w,o=OQ.bind(null,Ir,w,b,o),w.dispatch=o,l.memoizedState=r,[g,o,!1]}function e4(r){var g=Hg();return vM(g,Rg,r)}function vM(r,g,o){if(g=K8(r,g,oM)[0],r=th(D0)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Rw(g)}catch(H){if(H===Y5)throw X6;throw H}else l=g;g=Hg();var w=g.queue,b=w.dispatch;return o!==g.memoizedState&&(Ir.flags|=2048,_h(m0|So,{destroy:void 0},HQ.bind(null,w,o),null)),[l,b,r]}function HQ(r,g){r.action=g}function R4(r){var g=Hg(),o=Rg;if(o!==null)return vM(g,o,r);Hg(),g=g.memoizedState,o=Hg();var l=o.queue.dispatch;return o.memoizedState=r,[g,l,!1]}function _h(r,g,o,l){return r={tag:r,create:o,deps:l,inst:g,next:null},g=Ir.updateQueue,g===null&&(g=M4(),Ir.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,g.lastEffect=r),r}function N8(r){var g=Bo();return r={current:r},g.memoizedState=r}function yl(r,g,o,l){var w=Bo();Ir.flags|=r,w.memoizedState=_h(m0|g,{destroy:void 0},o,l===void 0?null:l)}function yo(r,g,o,l){var w=Hg();l=l===void 0?null:l;var b=w.memoizedState.inst;Rg!==null&&l!==null&&R8(l,Rg.memoizedState.deps)?w.memoizedState=_h(g,b,o,l):(Ir.flags|=r,w.memoizedState=_h(m0|g,b,o,l))}function G4(r,g){(Ir.mode&E0)!==Fr?yl(276826112,So,r,g):yl(8390656,So,r,g)}function PQ(r){Ir.flags|=4;var g=Ir.updateQueue;if(g===null)g=M4(),Ir.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function B8(r){var g=Bo(),o={impl:r};return g.memoizedState=o,function(){if((og&lo)!==Oo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function X4(r){var g=Hg().memoizedState;return PQ({ref:g,nextImpl:r}),function(){if((og&lo)!==Oo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function Z8(r,g){var o=4194308;return(Ir.mode&E0)!==Fr&&(o|=134217728),yl(o,W0,r,g)}function lM(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function x8(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;(Ir.mode&E0)!==Fr&&(l|=134217728),yl(l,W0,lM.bind(null,g,r),o)}function Y4(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,yo(4,W0,lM.bind(null,g,r),o)}function m8(r,g){return Bo().memoizedState=[r,g===void 0?null:g],r}function J4(r,g){var o=Hg();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R8(g,l[1]))return l[0];return o.memoizedState=[r,g],r}function T8(r,g){var o=Bo();g=g===void 0?null:g;var l=r();if(uh){Yg(!0);try{r()}finally{Yg(!1)}}return o.memoizedState=[l,g],l}function Q4(r,g){var o=Hg();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R8(g,l[1]))return l[0];if(l=r(),uh){Yg(!0);try{r()}finally{Yg(!1)}}return o.memoizedState=[l,g],l}function C8(r,g){var o=Bo();return i8(o,r,g)}function hM(r,g){var o=Hg();return bM(o,Rg.memoizedState,r,g)}function wM(r,g){var o=Hg();return Rg===null?i8(o,r,g):bM(o,Rg.memoizedState,r,g)}function i8(r,g,o){if(o===void 0||(b1&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=u9(),Ir.lanes|=r,hl|=r,o}function bM(r,g,o,l){if(To(o,g))return o;if(Q5.current!==null)return r=i8(r,o,l),To(r,g)||(pg=!0),r;if((b1&42)===0||(b1&1073741824)!==0&&(Vr&261930)===0)return pg=!0,r.memoizedState=o;return r=u9(),Ir.lanes|=r,hl|=r,g}function z4(){i.asyncTransitions--}function uM(r,g,o,l,w){var b=ug.p;ug.p=b!==0&&b<_0?b:_0;var H=i.T,q={};q._updatedFibers=new Set,i.T=q,t8(r,!1,g,o);try{var e=w(),G=i.S;if(G!==null&&G(q,e),e!==null&&typeof e==="object"&&typeof e.then==="function"){i.asyncTransitions++,e.then(z4,z4);var I=wQ(e,l);Xw(r,g,I,u0(r))}else Xw(r,g,l,u0(r))}catch(N){Xw(r,g,{then:function(){},status:"rejected",reason:N},u0(r))}finally{ug.p=b,H!==null&&q.types!==null&&(H.types!==null&&H.types!==q.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),H.types=q.types),i.T=H,H===null&&q._updatedFibers&&(r=q._updatedFibers.size,q._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function S8(r,g,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var w=OM(r).queue;lQ(r),uM(r,w,g,Xh,o===null?Q:function(){return HM(r),o(l)})}function OM(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Xh,baseState:Xh,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:Xh},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function HM(r){i.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=OM(r);g.next===null&&(g=r.alternate.memoizedState),Xw(r,g.next.queue,{},u0(r))}function k8(){var r=U8(!1);return r=uM.bind(null,Ir,r.queue,!0,!1),Bo().memoizedState=r,[!1,r]}function PM(){var r=th(D0)[0],g=Hg().memoizedState;return[typeof r==="boolean"?r:Rw(r),g]}function qM(){var r=Gw(D0)[0],g=Hg().memoizedState;return[typeof r==="boolean"?r:Rw(r),g]}function cl(){return Fg(Fb)}function n8(){var r=Bo(),g=Gg.identifierPrefix;if(pr){var o=o1,l=g1;o=(l&~(1<<32-Zo(l)-1)).toString(32)+o,g="_"+g+"R_"+o,o=K6++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=_K++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function D8(){return Bo().memoizedState=qQ.bind(null,Ir)}function qQ(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=u0(o),w=m1(l),b=T1(o,w,l);b!==null&&(Hv(l,"refresh()",r),mg(b,o,l),Mw(b,o,l)),r=b8(),g!==null&&g!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),w.payload={cache:r};return}o=o.return}}function AQ(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=u0(r);var w={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};K4(r)?MM(g,w):(w=fu(r,g,w,l),w!==null&&(Hv(l,"dispatch()",r),mg(w,r,l),WM(w,g,l)))}function AM(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=u0(r),Xw(r,g,o,l)&&Hv(l,"setState()",r)}function Xw(r,g,o,l){var w={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(K4(r))MM(g,w);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=g.lastRenderedReducer,b!==null)){var H=i.H;i.H=c0;try{var q=g.lastRenderedState,e=b(q,o);if(w.hasEagerState=!0,w.eagerState=e,To(e,q))return a2(r,g,w,0),Gg===null&&f2(),!1}catch(G){}finally{i.H=H}}if(o=fu(r,g,w,l),o!==null)return mg(o,r,l),WM(o,g,l),!0}return!1}function t8(r,g,o,l){if(i.T===null&&vh===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:GO(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},K4(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=fu(r,o,l,2),g!==null&&(Hv(2,"setOptimistic()",r),mg(g,r,2))}function K4(r){var g=r.alternate;return r===Ir||g!==null&&g===Ir}function MM(r,g){$5=z6=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function WM(r,g,o){if((o&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,xl(r,o)}}function V8(r){if(r!==null&&typeof r!=="function"){var g=String(r);qe.has(g)||(qe.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function _8(r,g,o,l){var w=r.memoizedState,b=o(l,w);if(r.mode&Lo){Yg(!0);try{b=o(l,w)}finally{Yg(!1)}}b===void 0&&(g=V(g)||"Component",ue.has(g)||(ue.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),w=b===null||b===void 0?w:cr({},w,b),r.memoizedState=w,r.lanes===0&&(r.updateQueue.baseState=w)}function eM(r,g,o,l,w,b,H){var q=r.stateNode;if(typeof q.shouldComponentUpdate==="function"){if(o=q.shouldComponentUpdate(l,b,H),r.mode&Lo){Yg(!0);try{o=q.shouldComponentUpdate(l,b,H)}finally{Yg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",V(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!bw(o,l)||!bw(w,b):!0}function RM(r,g,o,l){var w=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,l),g.state!==w&&(r=S(r)||"Component",ve.has(r)||(ve.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),SH.enqueueReplaceState(g,g.state,null))}function jl(r,g){var o=g;if("ref"in g){o={};for(var l in g)l!=="ref"&&(o[l]=g[l])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var w in r)o[w]===void 0&&(o[w]=r[w])}return o}function GM(r){WH(r),console.warn(`%s

%s
`,U5?"An error occurred in the <"+U5+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function XM(r){var g=U5?"The above error occurred in the <"+U5+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((kH||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,je+" "+r[0],fe,f6+l+f6,ae):r.splice(0,0,je,fe,f6+l+f6,ae),r.unshift(console),l=P$.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,o)}function YM(r){WH(r)}function $4(r,g){try{U5=g.source?S(g.source):null,kH=null;var o=g.value;if(i.actQueue!==null)i.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:g.stack})}}catch(w){setTimeout(function(){throw w})}}function JM(r,g,o){try{U5=o.source?S(o.source):null,kH=S(g);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(w){setTimeout(function(){throw w})}}function E8(r,g,o){return o=m1(o),o.tag=ZH,o.payload={element:null},o.callback=function(){ur(g.source,$4,r,g)},o}function y8(r){return r=m1(r),r.tag=ZH,r}function c8(r,g,o,l){var w=o.type.getDerivedStateFromError;if(typeof w==="function"){var b=l.value;r.payload=function(){return w(b)},r.callback=function(){MA(o),ur(l.source,JM,g,o,l)}}var H=o.stateNode;H!==null&&typeof H.componentDidCatch==="function"&&(r.callback=function(){MA(o),ur(l.source,JM,g,o,l),typeof w!=="function"&&(bl===null?bl=new Set([this]):bl.add(this)),nK(this,l),typeof w==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",S(o)||"Unknown")})}function MQ(r,g,o,l,w){if(o.flags|=32768,Lv&&Lw(r,w),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=o.alternate,g!==null&&nh(g,o,w,!0),pr&&(Nv=!0),o=M0.current,o!==null){switch(o.tag){case 31:case 13:return x0===null?m4():o.alternate===null&&Zg===P1&&(Zg=L6),o.flags&=-257,o.flags|=65536,o.lanes=w,l===Y6?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([l]):g.add(l),MO(r,l,w)),!1;case 22:return o.flags|=65536,l===Y6?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([l]):o.add(l)),MO(r,l,w)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return MO(r,l,w),m4(),!1}if(pr)return Nv=!0,g=M0.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=w,l!==JH&&Ow(l0(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==JH&&Ow(l0(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,w&=-w,r.lanes|=w,l=l0(l,o),w=E8(r.stateNode,l,w),P4(r,w),Zg!==vl&&(Zg=Oh)),!1;var b=l0(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(Xb===null?Xb=[b]:Xb.push(b),Zg!==vl&&(Zg=Oh),g===null)return!0;l=l0(l,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=w&-w,o.lanes|=r,r=E8(o.stateNode,l,r),P4(o,r),!1;case 1:if(g=o.type,b=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(bl===null||!bl.has(b))))return o.flags|=65536,w&=-w,o.lanes|=w,w=y8(w),c8(w,r,o,l),P4(o,w),!1}o=o.return}while(o!==null);return!1}function Mo(r,g,o,l){g.child=r===null?y7(g,null,o,l):bh(g,r.child,o,l)}function QM(r,g,o,l,w){o=o.render;var b=g.ref;if("ref"in l){var H={};for(var q in l)q!=="ref"&&(H[q]=l[q])}else H=l;if(Vl(g),l=G8(r,g,o,H,b,w),q=Y8(),r!==null&&!pg)return J8(r,g,w),fv(r,g,w);return pr&&q&&g8(g),g.flags|=1,Mo(r,g,l,w),g.child}function zM(r,g,o,l,w){if(r===null){var b=o.type;if(typeof b==="function"&&!pu(b)&&b.defaultProps===void 0&&o.compare===null)return o=kl(b),g.tag=15,g.type=o,f8(g,b),KM(r,g,o,l,w);return r=du(o.type,null,l,g,g.mode,w),r.ref=g.ref,r.return=g,g.child=r}if(b=r.child,!gO(r,w)){var H=b.memoizedProps;if(o=o.compare,o=o!==null?o:bw,o(H,l)&&r.ref===g.ref)return fv(r,g,w)}return g.flags|=1,r=Ev(b,l),r.ref=g.ref,r.return=g,g.child=r}function KM(r,g,o,l,w){if(r!==null){var b=r.memoizedProps;if(bw(b,l)&&r.ref===g.ref&&g.type===r.type)if(pg=!1,g.pendingProps=l=b,gO(r,w))(r.flags&131072)!==0&&(pg=!0);else return g.lanes=r.lanes,fv(r,g,w)}return j8(r,g,o,l,w)}function $M(r,g,o,l){var w=l.children,b=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:jw,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(b=b!==null?b.baseLanes|o:o,r!==null){l=g.child=r.child;for(w=0;l!==null;)w=w|l.lanes|l.childLanes,l=l.sibling;l=w&~b}else l=0,g.child=null;return UM(r,g,b,o,l)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&h4(g,b!==null?b.cachePool:null),b!==null?DA(g,b):M8(g),tA(g);else return l=g.lanes=536870912,UM(r,g,b!==null?b.baseLanes|o:o,o,l)}else b!==null?(h4(g,b.cachePool),DA(g,b),i1(g),g.memoizedState=null):(r!==null&&h4(g,null),M8(g),i1(g));return Mo(r,g,w,o),g.child}function Yw(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:jw,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function UM(r,g,o,l,w){var b=H8();return b=b===null?null:{parent:jg._currentValue,pool:b},g.memoizedState={baseLanes:o,cachePool:b},r!==null&&h4(g,null),M8(g),tA(g),r!==null&&nh(r,g,l,!0),g.childLanes=w,null}function U4(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=F4({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function LM(r,g,o){return bh(g,r.child,null,o),r=U4(g,g.pendingProps),r.flags|=2,b0(g),g.memoizedState=null,r}function WQ(r,g,o){var l=g.pendingProps,w=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=U4(g,l),g.lanes=536870912,Yw(null,r);if(e8(g),(r=Ug)?(o=d9(r,B0),o=o!==null&&o.data===Wh?o:null,o!==null&&(l={dehydrated:o,treeContext:XA(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=RA(o),l.return=g,g.child=l,Ro=g,Ug=null)):o=null,o===null)throw s2(g,r),B1(g);return g.lanes=536870912,null}return U4(g,l)}var b=r.memoizedState;if(b!==null){var H=b.dehydrated;if(e8(g),w)if(g.flags&256)g.flags&=-257,g=LM(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(JA(),(o&536870912)!==0&&x4(g),pg||nh(r,g,o,!1),w=(o&r.childLanes)!==0,pg||w){if(l=Gg,l!==null&&(H=ml(l,o),H!==0&&H!==b.retryLane))throw b.retryLane=H,$o(r,H),mg(l,r,H),nH;m4(),g=LM(r,g,o)}else r=b.treeContext,Ug=O0(H.nextSibling),Ro=g,pr=!0,a1=null,Nv=!1,A0=null,B0=!1,r!==null&&YA(g,r),g=U4(g,l),g.flags|=4096;return g}return b=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&x4(g),r=Ev(b,l),r.ref=g.ref,g.child=r,r.return=g,r}function L4(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function j8(r,g,o,l,w){if(o.prototype&&typeof o.prototype.render==="function"){var b=V(o)||"Unknown";Ae[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),Ae[b]=!0)}if(g.mode&Lo&&y0.recordLegacyContextWarning(g,null),r===null&&(f8(g,g.type),o.contextTypes&&(b=V(o)||"Unknown",We[b]||(We[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),Vl(g),o=G8(r,g,o,l,void 0,w),l=Y8(),r!==null&&!pg)return J8(r,g,w),fv(r,g,w);return pr&&l&&g8(g),g.flags|=1,Mo(r,g,o,w),g.child}function FM(r,g,o,l,w,b){if(Vl(g),O1=-1,qb=r!==null&&r.type!==g.type,g.updateQueue=null,o=X8(g,l,o,w),VA(r,g),l=Y8(),r!==null&&!pg)return J8(r,g,b),fv(r,g,b);return pr&&l&&g8(g),g.flags|=1,Mo(r,g,o,b),g.child}function IM(r,g,o,l,w){switch(M(g)){case!1:var b=g.stateNode,H=new g.type(g.memoizedProps,b.context).state;b.updater.enqueueSetState(b,H,null);break;case!0:g.flags|=128,g.flags|=65536,b=Error("Simulated error coming from DevTools");var q=w&-w;if(g.lanes|=q,H=Gg,H===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");q=y8(q),c8(q,H,g,l0(b,g)),P4(g,q)}if(Vl(g),g.stateNode===null){if(H=f1,b=o.contextType,"contextType"in o&&b!==null&&(b===void 0||b.$$typeof!==Kv)&&!Pe.has(o)&&(Pe.add(o),q=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===DO?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",V(o)||"Component",q)),typeof b==="object"&&b!==null&&(H=Fg(b)),b=new o(l,H),g.mode&Lo){Yg(!0);try{b=new o(l,H)}finally{Yg(!1)}}if(H=g.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=SH,g.stateNode=b,b._reactInternals=g,b._reactInternalInstance=oe,typeof o.getDerivedStateFromProps==="function"&&H===null&&(H=V(o)||"Component",le.has(H)||(le.add(H),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",H,b.state===null?"null":"undefined",H))),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var e=q=H=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?H="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(H="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?q="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(q="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?e="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(e="UNSAFE_componentWillUpdate"),H!==null||q!==null||e!==null){b=V(o)||"Component";var G=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";we.has(b)||(we.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,G,H!==null?`
  `+H:"",q!==null?`
  `+q:"",e!==null?`
  `+e:""))}}b=g.stateNode,H=V(o)||"Component",b.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",H):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",H)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",H),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",H),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",H),o.childContextTypes&&!He.has(o)&&(He.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",H)),o.contextTypes&&!Oe.has(o)&&(Oe.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",H)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",H),o.prototype&&o.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",V(o)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",H),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",H),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",H),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",H),q=b.props!==l,b.props!==void 0&&q&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",H),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",H,H),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||he.has(o)||(he.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",V(o))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",H),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",H),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",H),(q=b.state)&&(typeof q!=="object"||oo(q))&&console.error("%s.state: must be set to an object or null",H),typeof b.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",H),b=g.stateNode,b.props=l,b.state=g.memoizedState,b.refs={},q8(g),H=o.contextType,b.context=typeof H==="object"&&H!==null?Fg(H):f1,b.state===l&&(H=V(o)||"Component",be.has(H)||(be.add(H),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",H))),g.mode&Lo&&y0.recordLegacyContextWarning(g,b),y0.recordUnsafeLifecycleWarnings(g,b),b.state=g.memoizedState,H=o.getDerivedStateFromProps,typeof H==="function"&&(_8(g,o,H,l),b.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(H=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),H!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",S(g)||"Component"),SH.enqueueReplaceState(b,b.state,null)),ew(g,l,b,w),Ww(),b.state=g.memoizedState),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&E0)!==Fr&&(g.flags|=134217728),b=!0}else if(r===null){b=g.stateNode;var I=g.memoizedProps;q=jl(o,I),b.props=q;var N=b.context;e=o.contextType,H=f1,typeof e==="object"&&e!==null&&(H=Fg(e)),G=o.getDerivedStateFromProps,e=typeof G==="function"||typeof b.getSnapshotBeforeUpdate==="function",I=g.pendingProps!==I,e||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(I||N!==H)&&RM(g,b,l,H),ol=!1;var $=g.memoizedState;b.state=$,ew(g,l,b,w),Ww(),N=g.memoizedState,I||$!==N||ol?(typeof G==="function"&&(_8(g,o,G,l),N=g.memoizedState),(q=ol||eM(g,o,q,l,$,N,H))?(e||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&E0)!==Fr&&(g.flags|=134217728)):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&E0)!==Fr&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=N),b.props=l,b.state=N,b.context=H,b=q):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&E0)!==Fr&&(g.flags|=134217728),b=!1)}else{b=g.stateNode,A8(r,g),H=g.memoizedProps,e=jl(o,H),b.props=e,G=g.pendingProps,$=b.context,N=o.contextType,q=f1,typeof N==="object"&&N!==null&&(q=Fg(N)),I=o.getDerivedStateFromProps,(N=typeof I==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(H!==G||$!==q)&&RM(g,b,l,q),ol=!1,$=g.memoizedState,b.state=$,ew(g,l,b,w),Ww();var x=g.memoizedState;H!==G||$!==x||ol||r!==null&&r.dependencies!==null&&g4(r.dependencies)?(typeof I==="function"&&(_8(g,o,I,l),x=g.memoizedState),(e=ol||eM(g,o,e,l,$,x,q)||r!==null&&r.dependencies!==null&&g4(r.dependencies))?(N||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(l,x,q),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(l,x,q)),typeof b.componentDidUpdate==="function"&&(g.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof b.componentDidUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=x),b.props=l,b.state=x,b.context=q,b=e):(typeof b.componentDidUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),b=!1)}if(q=b,L4(r,g),H=(g.flags&128)!==0,q||H){if(q=g.stateNode,_o(g),H&&typeof o.getDerivedStateFromError!=="function")o=null,Co=-1;else if(o=Z7(q),g.mode&Lo){Yg(!0);try{Z7(q)}finally{Yg(!1)}}g.flags|=1,r!==null&&H?(g.child=bh(g,r.child,null,w),g.child=bh(g,null,o,w)):Mo(r,g,o,w),g.memoizedState=q.state,r=g.child}else r=fv(r,g,w);return w=g.stateNode,b&&w.props!==l&&(L5||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",S(g)||"a component"),L5=!0),r}function NM(r,g,o,l){return tl(),g.flags|=256,Mo(r,g,o,l),g.child}function f8(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=V(g)||"Unknown",ee[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),ee[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=V(g)||"Unknown",Me[g]||(console.error("%s: Function components do not support contextType.",g),Me[g]=!0))}function a8(r){return{baseLanes:r,cachePool:FA()}}function p8(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function BM(r,g,o){var l,w=g.pendingProps;A(g)&&(g.flags|=128);var b=!1,H=(g.flags&128)!==0;if((l=H)||(l=r!==null&&r.memoizedState===null?!1:(tg.current&Hb)!==0),l&&(b=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(b?C1(g):i1(g),(r=Ug)?(o=d9(r,B0),o=o!==null&&o.data!==Wh?o:null,o!==null&&(l={dehydrated:o,treeContext:XA(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=RA(o),l.return=g,g.child=l,Ro=g,Ug=null)):o=null,o===null)throw s2(g,r),B1(g);return NO(o)?g.lanes=32:g.lanes=536870912,null}var q=w.children;if(w=w.fallback,b){i1(g);var e=g.mode;return q=F4({mode:"hidden",children:q},e),w=nl(w,e,o,null),q.return=g,w.return=g,q.sibling=w,g.child=q,w=g.child,w.memoizedState=a8(o),w.childLanes=p8(r,l,o),g.memoizedState=DH,Yw(null,w)}return C1(g),d8(g,q)}var G=r.memoizedState;if(G!==null){var I=G.dehydrated;if(I!==null){if(H)g.flags&256?(C1(g),g.flags&=-257,g=s8(r,g,o)):g.memoizedState!==null?(i1(g),g.child=r.child,g.flags|=128,g=null):(i1(g),q=w.fallback,e=g.mode,w=F4({mode:"visible",children:w.children},e),q=nl(q,e,o,null),q.flags|=2,w.return=g,q.return=g,w.sibling=q,g.child=w,bh(g,r.child,null,o),w=g.child,w.memoizedState=a8(o),w.childLanes=p8(r,l,o),g.memoizedState=DH,g=Yw(null,w));else if(C1(g),JA(),(o&536870912)!==0&&x4(g),NO(I)){if(l=I.nextSibling&&I.nextSibling.dataset,l){q=l.dgst;var N=l.msg;e=l.stck;var $=l.cstck}b=N,l=q,w=e,I=$,q=b,e=I,q=q?Error(q):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),q.stack=w||"",q.digest=l,l=e===void 0?null:e,w={value:q,source:null,stack:l},typeof l==="string"&&YH.set(q,w),Ow(w),g=s8(r,g,o)}else if(pg||nh(r,g,o,!1),l=(o&r.childLanes)!==0,pg||l){if(l=Gg,l!==null&&(w=ml(l,o),w!==0&&w!==G.retryLane))throw G.retryLane=w,$o(r,w),mg(l,r,w),nH;IO(I)||m4(),g=s8(r,g,o)}else IO(I)?(g.flags|=192,g.child=r.child,g=null):(r=G.treeContext,Ug=O0(I.nextSibling),Ro=g,pr=!0,a1=null,Nv=!1,A0=null,B0=!1,r!==null&&YA(g,r),g=d8(g,w.children),g.flags|=4096);return g}}if(b)return i1(g),q=w.fallback,e=g.mode,$=r.child,I=$.sibling,w=Ev($,{mode:"hidden",children:w.children}),w.subtreeFlags=$.subtreeFlags&65011712,I!==null?q=Ev(I,q):(q=nl(q,e,o,null),q.flags|=2),q.return=g,w.return=g,w.sibling=q,g.child=w,Yw(null,w),w=g.child,q=r.child.memoizedState,q===null?q=a8(o):(e=q.cachePool,e!==null?($=jg._currentValue,e=e.parent!==$?{parent:$,pool:$}:e):e=FA(),q={baseLanes:q.baseLanes|o,cachePool:e}),w.memoizedState=q,w.childLanes=p8(r,l,o),g.memoizedState=DH,Yw(r.child,w);return G!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&x4(g),C1(g),o=r.child,r=o.sibling,o=Ev(o,{mode:"visible",children:w.children}),o.return=g,o.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=o,g.memoizedState=null,o}function d8(r,g){return g=F4({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function F4(r,g){return r=z(22,r,null,g),r.lanes=0,r}function s8(r,g,o){return bh(g,r.child,null,o),r=d8(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function ZM(r,g,o){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),h8(r.return,g,o)}function rO(r,g,o,l,w,b){var H=r.memoizedState;H===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:w,treeForkCount:b}:(H.isBackwards=g,H.rendering=null,H.renderingStartTime=0,H.last=l,H.tail=o,H.tailMode=w,H.treeForkCount=b)}function xM(r,g,o){var l=g.pendingProps,w=l.revealOrder,b=l.tail,H=l.children,q=tg.current;if((l=(q&Hb)!==0)?(q=q&z5|Hb,g.flags|=128):q&=z5,Qr(tg,q,g),q=w==null?"null":w,w!=="forwards"&&w!=="unstable_legacy-backwards"&&w!=="together"&&w!=="independent"&&!Re[q])if(Re[q]=!0,w==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(w==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof w==="string")switch(w.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',w,w.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',w,w.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',w)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',w);if(q=b==null?"null":b,!U6[q])if(b==null){if(w==="forwards"||w==="backwards"||w==="unstable_legacy-backwards")U6[q]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(U6[q]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):w!=="forwards"&&w!=="backwards"&&w!=="unstable_legacy-backwards"&&(U6[q]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));r:if((w==="forwards"||w==="backwards"||w==="unstable_legacy-backwards")&&H!==void 0&&H!==null&&H!==!1)if(oo(H)){for(q=0;q<H.length;q++)if(!SA(H[q],q))break r}else if(q=C(H),typeof q==="function"){if(q=q.call(H))for(var e=q.next(),G=0;!e.done;e=q.next()){if(!SA(e.value,G))break r;G++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',w);if(Mo(r,g,H,o),pr?(N1(),H=fw):H=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ZM(r,o,g);else if(r.tag===19)ZM(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(w){case"forwards":o=g.child;for(w=null;o!==null;)r=o.alternate,r!==null&&q4(r)===null&&(w=o),o=o.sibling;o=w,o===null?(w=g.child,g.child=null):(w=o.sibling,o.sibling=null),rO(g,!1,w,o,b,H);break;case"backwards":case"unstable_legacy-backwards":o=null,w=g.child;for(g.child=null;w!==null;){if(r=w.alternate,r!==null&&q4(r)===null){g.child=w;break}r=w.sibling,w.sibling=o,o=w,w=r}rO(g,!0,o,null,b,H);break;case"together":rO(g,!1,null,null,void 0,H);break;default:g.memoizedState=null}return g.child}function fv(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),Co=-1,hl|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(nh(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=Ev(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=Ev(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function gO(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&g4(r)?!0:!1}function eQ(r,g,o){switch(g.tag){case 3:D(g,g.stateNode.containerInfo),Z1(g,jg,r.memoizedState.cache),tl();break;case 27:case 5:or(g);break;case 4:D(g,g.stateNode.containerInfo);break;case 10:Z1(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,e8(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return C1(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return BM(r,g,o);return C1(g),r=fv(r,g,o),r!==null?r.sibling:null}C1(g);break;case 19:var w=(r.flags&128)!==0;if(l=(o&g.childLanes)!==0,l||(nh(r,g,o,!1),l=(o&g.childLanes)!==0),w){if(l)return xM(r,g,o);g.flags|=128}if(w=g.memoizedState,w!==null&&(w.rendering=null,w.tail=null,w.lastEffect=null),Qr(tg,tg.current,g),l)break;else return null;case 22:return g.lanes=0,$M(r,g,o,g.pendingProps);case 24:Z1(g,jg,r.memoizedState.cache)}return fv(r,g,o)}function oO(r,g,o){if(g._debugNeedsRemount&&r!==null){o=du(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===l.child)l.child=o;else{var w=l.child;if(w===null)throw Error("Expected parent to have a child.");for(;w.sibling!==g;)if(w=w.sibling,w===null)throw Error("Expected to find the previous sibling.");w.sibling=o}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)pg=!0;else{if(!gO(r,o)&&(g.flags&128)===0)return pg=!1,eQ(r,g,o);pg=(r.flags&131072)!==0?!0:!1}else{if(pg=!1,l=pr)N1(),l=(g.flags&1048576)!==0;l&&(l=g.index,N1(),GA(g,fw,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=x1(g.elementType),g.type=r,typeof r==="function")pu(r)?(l=jl(r,l),g.tag=1,g.type=r=kl(r),g=IM(null,g,r,l,o)):(g.tag=0,f8(g,r),g.type=r=kl(r),g=j8(null,g,r,l,o));else{if(r!==void 0&&r!==null){if(w=r.$$typeof,w===Cw){g.tag=11,g.type=r=au(r),g=QM(null,g,r,l,o);break r}else if(w===j4){g.tag=14,g=zM(null,g,r,l,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===H0&&(g=" Did you wrap a component in React.lazy() more than once?"),o=V(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return j8(r,g,g.type,g.pendingProps,o);case 1:return l=g.type,w=jl(l,g.pendingProps),IM(r,g,l,w,o);case 3:r:{if(D(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var b=g.memoizedState;w=b.element,A8(r,g),ew(g,l,null,o);var H=g.memoizedState;if(l=H.cache,Z1(g,jg,l),l!==b.cache&&w8(g,[jg],o,!0),Ww(),l=H.element,b.isDehydrated)if(b={element:l,isDehydrated:!1,cache:H.cache},g.updateQueue.baseState=b,g.memoizedState=b,g.flags&256){g=NM(r,g,l,o);break r}else if(l!==w){w=l0(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),Ow(w),g=NM(r,g,l,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Ug=O0(r.firstChild),Ro=g,pr=!0,a1=null,Nv=!1,A0=null,B0=!0,o=y7(g,null,l,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(tl(),l===w){g=fv(r,g,o);break r}Mo(r,g,l,o)}g=g.child}return g;case 26:return L4(r,g),r===null?(o=lW(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,l=Cr(V1.current),l=S4(l).createElement(o),l[eo]=g,l[xo]=r,Wo(l,o,r),$r(l),g.stateNode=l):g.memoizedState=lW(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return or(g),r===null&&pr&&(l=Cr(V1.current),w=hr(),l=g.stateNode=oW(g.type,g.pendingProps,l,w,!1),Nv||(w=_9(l,g.type,g.pendingProps,w),w!==null&&(Dl(g,0).serverProps=w)),Ro=g,B0=!0,w=Ug,D1(g.type)?(HP=w,Ug=O0(l.firstChild)):Ug=w),Mo(r,g,g.pendingProps.children,o),L4(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(b=hr(),l=tu(g.type,b.ancestorInfo),w=Ug,(H=!w)||(H=lz(w,g.type,g.pendingProps,B0),H!==null?(g.stateNode=H,Nv||(b=_9(H,g.type,g.pendingProps,b),b!==null&&(Dl(g,0).serverProps=b)),Ro=g,Ug=O0(H.firstChild),B0=!1,b=!0):b=!1,H=!b),H&&(l&&s2(g,w),B1(g))),or(g),w=g.type,b=g.pendingProps,H=r!==null?r.memoizedProps:null,l=b.children,LO(w,b)?l=null:H!==null&&LO(w,H)&&(g.flags|=32),g.memoizedState!==null&&(w=G8(r,g,uQ,null,null,o),Fb._currentValue=w),L4(r,g),Mo(r,g,l,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=hr(),l=r.ancestorInfo.current,o=l!=null?V2(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Ug,(l=!r)||(l=hz(r,g.pendingProps,B0),l!==null?(g.stateNode=l,Ro=g,Ug=null,l=!0):l=!1,l=!l),l&&(o&&s2(g,r),B1(g))),null;case 13:return BM(r,g,o);case 4:return D(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=bh(g,null,l,o):Mo(r,g,l,o),g.child;case 11:return QM(r,g,g.type,g.pendingProps,o);case 7:return Mo(r,g,g.pendingProps,o),g.child;case 8:return Mo(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,Mo(r,g,g.pendingProps.children,o),g.child;case 10:return l=g.type,w=g.pendingProps,b=w.value,"value"in w||Ge||(Ge=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Z1(g,l,b),Mo(r,g,w.children,o),g.child;case 9:return w=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Vl(g),w=Fg(w),l=FH(l,w,void 0),g.flags|=1,Mo(r,g,l,o),g.child;case 14:return zM(r,g,g.type,g.pendingProps,o);case 15:return KM(r,g,g.type,g.pendingProps,o);case 19:return xM(r,g,o);case 31:return WQ(r,g,o);case 22:return $M(r,g,o,g.pendingProps);case 24:return Vl(g),l=Fg(jg),r===null?(w=H8(),w===null&&(w=Gg,b=b8(),w.pooledCache=b,_l(b),b!==null&&(w.pooledCacheLanes|=o),w=b),g.memoizedState={parent:l,cache:w},q8(g),Z1(g,jg,w)):((r.lanes&o)!==0&&(A8(r,g),ew(g,null,null,o),Ww()),w=r.memoizedState,b=g.memoizedState,w.parent!==l?(w={parent:l,cache:l},g.memoizedState=w,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=w),Z1(g,jg,l)):(l=b.cache,Z1(g,jg,l),l!==w.cache&&w8(g,[jg],o,!0))),Mo(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function av(r){r.flags|=4}function vO(r,g,o,l,w){if(g=(r.mode&CK)!==Fr)g=!1;if(g){if(r.flags|=16777216,(w&335544128)===w)if(r.stateNode.complete)r.flags|=8192;else if(q9())r.flags|=8192;else throw wh=Y6,NH}else r.flags&=-16777217}function mM(r,g){if(g.type!=="stylesheet"||(g.state.loading&C0)!==Gh)r.flags&=-16777217;else if(r.flags|=16777216,!OW(g))if(q9())r.flags|=8192;else throw wh=Y6,NH}function I4(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?mh():536870912,r.lanes|=g,qh|=g)}function Jw(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function Jg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(g)if((r.mode&Dr)!==Fr){for(var{selfBaseDuration:w,child:b}=r;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags&65011712,l|=b.flags&65011712,w+=b.treeBaseDuration,b=b.sibling;r.treeBaseDuration=w}else for(w=r.child;w!==null;)o|=w.lanes|w.childLanes,l|=w.subtreeFlags&65011712,l|=w.flags&65011712,w.return=r,w=w.sibling;else if((r.mode&Dr)!==Fr){w=r.actualDuration,b=r.selfBaseDuration;for(var H=r.child;H!==null;)o|=H.lanes|H.childLanes,l|=H.subtreeFlags,l|=H.flags,w+=H.actualDuration,b+=H.treeBaseDuration,H=H.sibling;r.actualDuration=w,r.treeBaseDuration=b}else for(w=r.child;w!==null;)o|=w.lanes|w.childLanes,l|=w.subtreeFlags,l|=w.flags,w.return=r,w=w.sibling;return r.subtreeFlags|=l,r.childLanes=o,g}function RQ(r,g,o){var l=g.pendingProps;switch(o8(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jg(g),null;case 1:return Jg(g),null;case 3:if(o=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),cv(jg,g),d(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)kh(g)?(l8(),av(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,v8());return Jg(g),null;case 26:var{type:w,memoizedState:b}=g;return r===null?(av(g),b!==null?(Jg(g),mM(g,b)):(Jg(g),vO(g,w,null,l,o))):b?b!==r.memoizedState?(av(g),Jg(g),mM(g,b)):(Jg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&av(g),Jg(g),vO(g,w,r,l,o)),null;case 27:if(er(g),o=Cr(V1.current),w=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&av(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jg(g),null}r=hr(),kh(g)?QA(g,r):(r=oW(w,l,o,r,!0),g.stateNode=r,av(g))}return Jg(g),null;case 5:if(er(g),w=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&av(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jg(g),null}var H=hr();if(kh(g))QA(g,H);else{switch(b=Cr(V1.current),tu(w,H.ancestorInfo),H=H.context,b=S4(b),H){case T5:b=b.createElementNS(h5,w);break;case y6:b=b.createElementNS(g6,w);break;default:switch(w){case"svg":b=b.createElementNS(h5,w);break;case"math":b=b.createElementNS(g6,w);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof l.is==="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?b.multiple=!0:l.size&&(b.size=l.size);break;default:b=typeof l.is==="string"?b.createElement(w,{is:l.is}):b.createElement(w),w.indexOf("-")===-1&&(w!==w.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",w),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||V0.call(te,w)||(te[w]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",w)))}}b[eo]=g,b[xo]=l;r:for(H=g.child;H!==null;){if(H.tag===5||H.tag===6)b.appendChild(H.stateNode);else if(H.tag!==4&&H.tag!==27&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===g)break r;for(;H.sibling===null;){if(H.return===null||H.return===g)break r;H=H.return}H.sibling.return=H.return,H=H.sibling}g.stateNode=b;r:switch(Wo(b,w,l),w){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&av(g)}}return Jg(g),vO(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&av(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Cr(V1.current),o=hr(),kh(g)){if(r=g.stateNode,o=g.memoizedProps,w=!Nv,l=null,b=Ro,b!==null)switch(b.tag){case 3:w&&(w=rW(r,o,l),w!==null&&(Dl(g,0).serverProps=w));break;case 27:case 5:l=b.memoizedProps,w&&(w=rW(r,o,l),w!==null&&(Dl(g,0).serverProps=w))}r[eo]=g,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||k9(r.nodeValue,o)?!0:!1,r||B1(g,!0)}else w=o.ancestorInfo.current,w!=null&&V2(l,w.tag,o.ancestorInfo.implicitRootScope),r=S4(r).createTextNode(l),r[eo]=g,g.stateNode=r}return Jg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(l=kh(g),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[eo]=g,Jg(g),(g.mode&Dr)!==Fr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else l8(),tl(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,Jg(g),(g.mode&Dr)!==Fr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=v8(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return b0(g),g;return b0(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Jg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(w=l,b=kh(g),w!==null&&w.dehydrated!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=g.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[eo]=g,Jg(g),(g.mode&Dr)!==Fr&&w!==null&&(w=g.child,w!==null&&(g.treeBaseDuration-=w.treeBaseDuration))}else l8(),tl(),(g.flags&128)===0&&(w=g.memoizedState=null),g.flags|=4,Jg(g),(g.mode&Dr)!==Fr&&w!==null&&(w=g.child,w!==null&&(g.treeBaseDuration-=w.treeBaseDuration));w=!1}else w=v8(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=w),w=!0;if(!w){if(g.flags&256)return b0(g),g;return b0(g),null}}if(b0(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&Dr)!==Fr&&qw(g),g;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=g.child,w=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(w=l.alternate.memoizedState.cachePool.pool),b=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(b=l.memoizedState.cachePool.pool),b!==w&&(l.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),I4(g,g.updateQueue),Jg(g),(g.mode&Dr)!==Fr&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return d(g),r===null&&YO(g.stateNode.containerInfo),Jg(g),null;case 10:return cv(g.type,g),Jg(g),null;case 19:if(Rr(tg,g),l=g.memoizedState,l===null)return Jg(g),null;if(w=(g.flags&128)!==0,b=l.rendering,b===null)if(w)Jw(l,!1);else{if(Zg!==P1||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(b=q4(r),b!==null){g.flags|=128,Jw(l,!1),r=b.updateQueue,g.updateQueue=r,I4(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)eA(o,r),o=o.sibling;return Qr(tg,tg.current&z5|Hb,g),pr&&yv(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&wo()>x6&&(g.flags|=128,w=!0,Jw(l,!1),g.lanes=4194304)}else{if(!w)if(r=q4(b),r!==null){if(g.flags|=128,w=!0,r=r.updateQueue,g.updateQueue=r,I4(g,r),Jw(l,!0),l.tail===null&&l.tailMode==="hidden"&&!b.alternate&&!pr)return Jg(g),null}else 2*wo()-l.renderingStartTime>x6&&o!==536870912&&(g.flags|=128,w=!0,Jw(l,!1),g.lanes=4194304);l.isBackwards?(b.sibling=g.child,g.child=b):(r=l.last,r!==null?r.sibling=b:g.child=b,l.last=b)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=wo(),r.sibling=null,o=tg.current,o=w?o&z5|Hb:o&z5,Qr(tg,o,g),pr&&yv(g,l.treeForkCount),r;return Jg(g),null;case 22:case 23:return b0(g),W8(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(o&536870912)!==0&&(g.flags&128)===0&&(Jg(g),g.subtreeFlags&6&&(g.flags|=8192)):Jg(g),o=g.updateQueue,o!==null&&I4(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==o&&(g.flags|=2048),r!==null&&Rr(lh,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),cv(jg,g),Jg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function GQ(r,g){switch(o8(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 3:return cv(jg,g),d(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return er(g),null;case 31:if(g.memoizedState!==null){if(b0(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");tl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 13:if(b0(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");tl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 19:return Rr(tg,g),null;case 4:return d(g),null;case 10:return cv(g.type,g),null;case 22:case 23:return b0(g),W8(g),r!==null&&Rr(lh,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 24:return cv(jg,g),null;case 25:return null;default:return null}}function TM(r,g){switch(o8(g),g.tag){case 3:cv(jg,g),d(g);break;case 26:case 27:case 5:er(g);break;case 4:d(g);break;case 31:g.memoizedState!==null&&b0(g);break;case 13:b0(g);break;case 19:Rr(tg,g);break;case 10:cv(g.type,g);break;case 22:case 23:b0(g),W8(g),r!==null&&Rr(lh,g);break;case 24:cv(jg,g)}}function Rv(r){return(r.mode&Dr)!==Fr}function CM(r,g){Rv(r)?(ev(),Qw(g,r),Wv()):Qw(g,r)}function lO(r,g,o){Rv(r)?(ev(),Eh(o,r,g),Wv()):Eh(o,r,g)}function Qw(r,g){try{var o=g.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var w=l.next;o=w;do{if((o.tag&r)===r&&(l=void 0,(r&io)!==Q6&&(Z5=!0),l=ur(g,DK,o),(r&io)!==Q6&&(Z5=!1),l!==void 0&&typeof l!=="function")){var b=void 0;b=(o.tag&W0)!==0?"useLayoutEffect":(o.tag&io)!==0?"useInsertionEffect":"useEffect";var H=void 0;H=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,ur(g,function(q,e){console.error("%s must not return anything besides a function, which is used for clean-up.%s",q,e)},b,H)}o=o.next}while(o!==w)}}catch(q){bg(g,g.return,q)}}function Eh(r,g,o){try{var l=g.updateQueue,w=l!==null?l.lastEffect:null;if(w!==null){var b=w.next;l=b;do{if((l.tag&r)===r){var H=l.inst,q=H.destroy;q!==void 0&&(H.destroy=void 0,(r&io)!==Q6&&(Z5=!0),w=g,ur(w,tK,w,o,q),(r&io)!==Q6&&(Z5=!1))}l=l.next}while(l!==b)}}catch(e){bg(g,g.return,e)}}function iM(r,g){Rv(r)?(ev(),Qw(g,r),Wv()):Qw(g,r)}function hO(r,g,o){Rv(r)?(ev(),Eh(o,r,g),Wv()):Eh(o,r,g)}function SM(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||L5||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(r)||"instance"));try{ur(r,nA,g,o)}catch(l){bg(r,r.return,l)}}}function XQ(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function YQ(r,g){var{memoizedProps:o,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||L5||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(r)||"instance"));try{var w=jl(r.type,o),b=ur(r,XQ,g,w,l);o=Xe,b!==void 0||o.has(r.type)||(o.add(r.type),ur(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",S(r))})),g.__reactInternalSnapshotBeforeUpdate=b}catch(H){bg(r,r.return,H)}}function kM(r,g,o){o.props=jl(r.type,r.memoizedProps),o.state=r.memoizedState,Rv(r)?(ev(),ur(r,S7,r,g,o),Wv()):ur(r,S7,r,g,o)}function JQ(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(Rv(r))try{ev(),r.refCleanup=g(o)}finally{Wv()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",S(r)),g.current=o}}function zw(r,g){try{ur(r,JQ,r)}catch(o){bg(r,g,o)}}function Gv(r,g){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(Rv(r))try{ev(),ur(r,l)}finally{Wv(r)}else ur(r,l)}catch(w){bg(r,g,w)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(Rv(r))try{ev(),ur(r,o,null)}finally{Wv(r)}else ur(r,o,null)}catch(w){bg(r,g,w)}else o.current=null}function nM(r,g,o,l){var w=r.memoizedProps,b=w.id,H=w.onCommit;w=w.onRender,g=g===null?"mount":"update",e6&&(g="nested-update"),typeof w==="function"&&w(b,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof H==="function"&&H(b,g,l,o)}function QQ(r,g,o,l){var w=r.memoizedProps;r=w.id,w=w.onPostCommit,g=g===null?"mount":"update",e6&&(g="nested-update"),typeof w==="function"&&w(r,g,l,o)}function DM(r){var{type:g,memoizedProps:o,stateNode:l}=r;try{ur(r,yQ,l,g,o,r)}catch(w){bg(r,r.return,w)}}function wO(r,g,o){try{ur(r,jQ,r.stateNode,r.type,o,g,r)}catch(l){bg(r,r.return,l)}}function tM(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&D1(r.type)||r.tag===4}function bO(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||tM(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&D1(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function uO(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(f9(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(f9(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=_v));else if(l!==4&&(l===27&&D1(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(uO(r,g,o),r=r.sibling;r!==null;)uO(r,g,o),r=r.sibling}function N4(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(l!==4&&(l===27&&D1(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(N4(r,g,o),r=r.sibling;r!==null;)N4(r,g,o),r=r.sibling}function zQ(r){for(var g,o=r.return;o!==null;){if(tM(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=bO(r),N4(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(j9(o),g.flags&=-33),g=bO(r),N4(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=bO(r),uO(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function VM(r){var{stateNode:g,memoizedProps:o}=r;try{ur(r,Hz,r.type,o,g,r)}catch(l){bg(r,r.return,l)}}function _M(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function KQ(r,g){if(r=r.containerInfo,bP=a6,r=wA(r),Eu(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:w,focusNode:b}=l;l=l.focusOffset;try{o.nodeType,b.nodeType}catch(wr){o=null;break r}var H=0,q=-1,e=-1,G=0,I=0,N=r,$=null;g:for(;;){for(var x;;){if(N!==o||w!==0&&N.nodeType!==3||(q=H+w),N!==b||l!==0&&N.nodeType!==3||(e=H+l),N.nodeType===3&&(H+=N.nodeValue.length),(x=N.firstChild)===null)break;$=N,N=x}for(;;){if(N===r)break g;if($===o&&++G===w&&(q=H),$===b&&++I===l&&(e=H),(x=N.nextSibling)!==null)break;N=$,$=N.parentNode}N=x}o=q===-1||e===-1?null:{start:q,end:e}}else o=null}o=o||{start:0,end:0}}else o=null;uP={focusedElem:r,selectionRange:o},a6=!1;for(uo=g;uo!==null;)if(g=uo,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,uo=r;else for(;uo!==null;){switch(r=g=uo,o=r.alternate,w=r.flags,r.tag){case 0:if((w&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)w=r[o],w.ref.impl=w.nextImpl;break;case 11:case 15:break;case 1:(w&1024)!==0&&o!==null&&YQ(r,o);break;case 3:if((w&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)FO(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":FO(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((w&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,uo=r;break}uo=g.return}}function EM(r,g,o){var l=h0(),w=Pv(),b=Av(),H=Mv(),q=o.flags;switch(o.tag){case 0:case 11:case 15:Xv(r,o),q&4&&CM(o,W0|m0);break;case 1:if(Xv(r,o),q&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||L5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(o)||"instance")),Rv(o)?(ev(),ur(o,IH,o,r),Wv()):ur(o,IH,o,r);else{var e=jl(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||L5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(o)||"instance")),Rv(o)?(ev(),ur(o,T7,o,r,e,g,r.__reactInternalSnapshotBeforeUpdate),Wv()):ur(o,T7,o,r,e,g,r.__reactInternalSnapshotBeforeUpdate)}q&64&&SM(o),q&512&&zw(o,o.return);break;case 3:if(g=jv(),Xv(r,o),q&64&&(q=o.updateQueue,q!==null)){if(e=null,o.child!==null)switch(o.child.tag){case 27:case 5:e=o.child.stateNode;break;case 1:e=o.child.stateNode}try{ur(o,nA,q,e)}catch(I){bg(o,o.return,I)}}r.effectDuration+=v4(g);break;case 27:g===null&&q&4&&VM(o);case 26:case 5:if(Xv(r,o),g===null){if(q&4)DM(o);else if(q&64){r=o.type,g=o.memoizedProps,e=o.stateNode;try{ur(o,cQ,e,r,g,o)}catch(I){bg(o,o.return,I)}}}q&512&&zw(o,o.return);break;case 12:if(q&4){q=jv(),Xv(r,o),r=o.stateNode,r.effectDuration+=Pw(q);try{ur(o,nM,o,g,p1,r.effectDuration)}catch(I){bg(o,o.return,I)}}else Xv(r,o);break;case 31:Xv(r,o),q&4&&jM(r,o);break;case 13:Xv(r,o),q&4&&fM(r,o),q&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(q=xQ.bind(null,o),wz(r,q))));break;case 22:if(q=o.memoizedState!==null||H1,!q){g=g!==null&&g.memoizedState!==null||dg,e=H1;var G=dg;H1=q,(dg=g)&&!G?(Yv(r,o,(o.subtreeFlags&8772)!==0),(o.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(o,Ur,Lr)):Xv(r,o),H1=e,dg=G}break;case 30:break;default:Xv(r,o)}(o.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&((Tg||0.05<Bg)&&Ov(o,Ur,Lr,Bg,Ig),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Lr-Ur&&(_M(o.return.alternate,o.return)||uv(o,Ur,Lr,"Mount"))),w0(l),qv(w),Ig=b,Tg=H}function yM(r){var g=r.alternate;g!==null&&(r.alternate=null,yM(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&Or(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function pv(r,g,o){for(o=o.child;o!==null;)cM(r,g,o),o=o.sibling}function cM(r,g,o){if(Uo&&typeof Uo.onCommitFiberUnmount==="function")try{Uo.onCommitFiberUnmount(v5,o)}catch(G){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",G))}var l=h0(),w=Pv(),b=Av(),H=Mv();switch(o.tag){case 26:dg||Gv(o,g),pv(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:dg||Gv(o,g);var q=sg,e=fo;D1(o.type)&&(sg=o.stateNode,fo=!1),pv(r,g,o),ur(o,Zw,o.stateNode),sg=q,fo=e;break;case 5:dg||Gv(o,g);case 6:if(q=sg,e=fo,sg=null,pv(r,g,o),sg=q,fo=e,sg!==null)if(fo)try{ur(o,pQ,sg,o.stateNode)}catch(G){bg(o,g,G)}else try{ur(o,aQ,sg,o.stateNode)}catch(G){bg(o,g,G)}break;case 18:sg!==null&&(fo?(r=sg,a9(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),sh(r)):a9(sg,o.stateNode));break;case 4:q=sg,e=fo,sg=o.stateNode.containerInfo,fo=!0,pv(r,g,o),sg=q,fo=e;break;case 0:case 11:case 14:case 15:Eh(io,o,g),dg||lO(o,g,W0),pv(r,g,o);break;case 1:dg||(Gv(o,g),q=o.stateNode,typeof q.componentWillUnmount==="function"&&kM(o,g,q)),pv(r,g,o);break;case 21:pv(r,g,o);break;case 22:dg=(q=dg)||o.memoizedState!==null,pv(r,g,o),dg=q;break;default:pv(r,g,o)}(o.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(o,Ur,Lr,Bg,Ig),w0(l),qv(w),Ig=b,Tg=H}function jM(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{ur(g,uz,r)}catch(o){bg(g,g.return,o)}}}function fM(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ur(g,Oz,r)}catch(o){bg(g,g.return,o)}}function $Q(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new Ye),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new Ye),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function B4(r,g){var o=$Q(r);g.forEach(function(l){if(!o.has(l)){if(o.add(l),Lv)if(F5!==null&&I5!==null)Lw(I5,F5);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var w=mQ.bind(null,r,l);l.then(w,w)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var l=0;l<o.length;l++){var w=r,b=g,H=o[l],q=h0(),e=b;r:for(;e!==null;){switch(e.tag){case 27:if(D1(e.type)){sg=e.stateNode,fo=!1;break r}break;case 5:sg=e.stateNode,fo=!1;break r;case 3:case 4:sg=e.stateNode.containerInfo,fo=!0;break r}e=e.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");cM(w,b,H),sg=null,fo=!1,(H.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&uv(H,Ur,Lr,"Unmount"),w0(q),w=H,b=w.alternate,b!==null&&(b.return=null),w.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)aM(g,r),g=g.sibling}function aM(r,g){var o=h0(),l=Pv(),w=Av(),b=Mv(),H=r.alternate,q=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),jo(r),q&4&&(Eh(io|m0,r,r.return),Qw(io|m0,r),lO(r,r.return,W0|m0));break;case 1:if(co(g,r),jo(r),q&512&&(dg||H===null||Gv(H,H.return)),q&64&&H1&&(q=r.updateQueue,q!==null&&(H=q.callbacks,H!==null))){var e=q.shared.hiddenCallbacks;q.shared.hiddenCallbacks=e===null?H:e.concat(H)}break;case 26:if(e=j0,co(g,r),jo(r),q&512&&(dg||H===null||Gv(H,H.return)),q&4){var G=H!==null?H.memoizedState:null;if(q=r.memoizedState,H===null)if(q===null)if(r.stateNode===null){r:{q=r.type,H=r.memoizedProps,e=e.ownerDocument||e;g:switch(q){case"title":if(G=e.getElementsByTagName("title")[0],!G||G[kw]||G[eo]||G.namespaceURI===h5||G.hasAttribute("itemprop"))G=e.createElement(q),e.head.insertBefore(G,e.querySelector("head > title"));Wo(G,q,H),G[eo]=r,$r(G),q=G;break r;case"link":var I=bW("link","href",e).get(q+(H.href||""));if(I){for(var N=0;N<I.length;N++)if(G=I[N],G.getAttribute("href")===(H.href==null||H.href===""?null:H.href)&&G.getAttribute("rel")===(H.rel==null?null:H.rel)&&G.getAttribute("title")===(H.title==null?null:H.title)&&G.getAttribute("crossorigin")===(H.crossOrigin==null?null:H.crossOrigin)){I.splice(N,1);break g}}G=e.createElement(q),Wo(G,q,H),e.head.appendChild(G);break;case"meta":if(I=bW("meta","content",e).get(q+(H.content||""))){for(N=0;N<I.length;N++)if(G=I[N],Ag(H.content,"content"),G.getAttribute("content")===(H.content==null?null:""+H.content)&&G.getAttribute("name")===(H.name==null?null:H.name)&&G.getAttribute("property")===(H.property==null?null:H.property)&&G.getAttribute("http-equiv")===(H.httpEquiv==null?null:H.httpEquiv)&&G.getAttribute("charset")===(H.charSet==null?null:H.charSet)){I.splice(N,1);break g}}G=e.createElement(q),Wo(G,q,H),e.head.appendChild(G);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+q+'". This is a bug in React.')}G[eo]=r,$r(G),q=G}r.stateNode=q}else uW(e,r.type,r.stateNode);else r.stateNode=wW(e,q,r.memoizedProps);else G!==q?(G===null?H.stateNode!==null&&(H=H.stateNode,H.parentNode.removeChild(H)):G.count--,q===null?uW(e,r.type,r.stateNode):wW(e,q,r.memoizedProps)):q===null&&r.stateNode!==null&&wO(r,r.memoizedProps,H.memoizedProps)}break;case 27:co(g,r),jo(r),q&512&&(dg||H===null||Gv(H,H.return)),H!==null&&q&4&&wO(r,r.memoizedProps,H.memoizedProps);break;case 5:if(co(g,r),jo(r),q&512&&(dg||H===null||Gv(H,H.return)),r.flags&32){e=r.stateNode;try{ur(r,j9,e)}catch(Mr){bg(r,r.return,Mr)}}q&4&&r.stateNode!=null&&(e=r.memoizedProps,wO(r,e,H!==null?H.memoizedProps:e)),q&1024&&(tH=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),jo(r),q&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");q=r.memoizedProps,H=H!==null?H.memoizedProps:q,e=r.stateNode;try{ur(r,fQ,e,H,q)}catch(Mr){bg(r,r.return,Mr)}}break;case 3:if(e=jv(),c6=null,G=j0,j0=k4(g.containerInfo),co(g,r),j0=G,jo(r),q&4&&H!==null&&H.memoizedState.isDehydrated)try{ur(r,bz,g.containerInfo)}catch(Mr){bg(r,r.return,Mr)}tH&&(tH=!1,pM(r)),g.effectDuration+=v4(e);break;case 4:q=j0,j0=k4(r.stateNode.containerInfo),co(g,r),jo(r),j0=q;break;case 12:q=jv(),co(g,r),jo(r),r.stateNode.effectDuration+=Pw(q);break;case 31:co(g,r),jo(r),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,B4(r,q)));break;case 13:co(g,r),jo(r),r.child.flags&8192&&r.memoizedState!==null!==(H!==null&&H.memoizedState!==null)&&(Z6=wo()),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,B4(r,q)));break;case 22:e=r.memoizedState!==null;var $=H!==null&&H.memoizedState!==null,x=H1,wr=dg;if(H1=x||e,dg=wr||$,co(g,r),dg=wr,H1=x,$&&!e&&!x&&!wr&&(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(r,Ur,Lr),jo(r),q&8192)r:for(g=r.stateNode,g._visibility=e?g._visibility&~jw:g._visibility|jw,!e||H===null||$||H1||dg||(fl(r),(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&uv(r,Ur,Lr,"Disconnect")),H=null,g=r;;){if(g.tag===5||g.tag===26){if(H===null){$=H=g;try{G=$.stateNode,e?ur($,sQ,G):ur($,oz,$.stateNode,$.memoizedProps)}catch(Mr){bg($,$.return,Mr)}}}else if(g.tag===6){if(H===null){$=g;try{I=$.stateNode,e?ur($,rz,I):ur($,vz,I,$.memoizedProps)}catch(Mr){bg($,$.return,Mr)}}}else if(g.tag===18){if(H===null){$=g;try{N=$.stateNode,e?ur($,dQ,N):ur($,gz,$.stateNode)}catch(Mr){bg($,$.return,Mr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;H===g&&(H=null),g=g.return}H===g&&(H=null),g.sibling.return=g.return,g=g.sibling}q&4&&(q=r.updateQueue,q!==null&&(H=q.retryQueue,H!==null&&(q.retryQueue=null,B4(r,H))));break;case 19:co(g,r),jo(r),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,B4(r,q)));break;case 30:break;case 21:break;default:co(g,r),jo(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&((Tg||0.05<Bg)&&Ov(r,Ur,Lr,Bg,Ig),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Lr-Ur&&(_M(r.return.alternate,r.return)||uv(r,Ur,Lr,"Mount"))),w0(o),qv(l),Ig=w,Tg=b}function jo(r){var g=r.flags;if(g&2){try{ur(r,zQ,r)}catch(o){bg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function pM(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;pM(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Xv(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)EM(r,g.alternate,g),g=g.sibling}function dM(r){var g=h0(),o=Pv(),l=Av(),w=Mv();switch(r.tag){case 0:case 11:case 14:case 15:lO(r,r.return,W0),fl(r);break;case 1:Gv(r,r.return);var b=r.stateNode;typeof b.componentWillUnmount==="function"&&kM(r,r.return,b),fl(r);break;case 27:ur(r,Zw,r.stateNode);case 26:case 5:Gv(r,r.return),fl(r);break;case 22:r.memoizedState===null&&fl(r);break;case 30:fl(r);break;default:fl(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(r,Ur,Lr,Bg,Ig),w0(g),qv(o),Ig=l,Tg=w}function fl(r){for(r=r.child;r!==null;)dM(r),r=r.sibling}function sM(r,g,o,l){var w=h0(),b=Pv(),H=Av(),q=Mv(),e=o.flags;switch(o.tag){case 0:case 11:case 15:Yv(r,o,l),CM(o,W0);break;case 1:if(Yv(r,o,l),g=o.stateNode,typeof g.componentDidMount==="function"&&ur(o,IH,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{ur(o,bQ,g,r)}catch(G){bg(o,o.return,G)}}l&&e&64&&SM(o),zw(o,o.return);break;case 27:VM(o);case 26:case 5:Yv(r,o,l),l&&g===null&&e&4&&DM(o),zw(o,o.return);break;case 12:if(l&&e&4){e=jv(),Yv(r,o,l),l=o.stateNode,l.effectDuration+=Pw(e);try{ur(o,nM,o,g,p1,l.effectDuration)}catch(G){bg(o,o.return,G)}}else Yv(r,o,l);break;case 31:Yv(r,o,l),l&&e&4&&jM(r,o);break;case 13:Yv(r,o,l),l&&e&4&&fM(r,o);break;case 22:o.memoizedState===null&&Yv(r,o,l),zw(o,o.return);break;case 30:break;default:Yv(r,o,l)}(o.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(o,Ur,Lr,Bg,Ig),w0(w),qv(b),Ig=H,Tg=q}function Yv(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)sM(r,g.alternate,g,o),g=g.sibling}function OO(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_l(r),o!=null&&Hw(o))}function HO(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_l(g),r!=null&&Hw(r))}function t0(r,g,o,l,w){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var b=g.sibling;r9(r,g,o,l,b!==null?b.actualStartTime:w),g=b}}function r9(r,g,o,l,w){var b=h0(),H=Pv(),q=Av(),e=Mv(),G=c1,I=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&Dr)!==Fr&&0<g.actualStartTime&&(g.flags&1)!==0&&j2(g,g.actualStartTime,w,vo,o),t0(r,g,o,l,w),I&2048&&iM(g,So|m0);break;case 1:(g.mode&Dr)!==Fr&&0<g.actualStartTime&&((g.flags&128)!==0?cu(g,g.actualStartTime,w,[]):(g.flags&1)!==0&&j2(g,g.actualStartTime,w,vo,o)),t0(r,g,o,l,w);break;case 3:var N=jv(),$=vo;vo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,t0(r,g,o,l,w),vo=$,I&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==o&&(_l(l),o!=null&&Hw(o))),r.passiveEffectDuration+=v4(N);break;case 12:if(I&2048){I=jv(),t0(r,g,o,l,w),r=g.stateNode,r.passiveEffectDuration+=Pw(I);try{ur(g,QQ,g,g.alternate,p1,r.passiveEffectDuration)}catch(x){bg(g,g.return,x)}}else t0(r,g,o,l,w);break;case 31:I=vo,N=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,N!==null&&$===null?($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(vo=!1,N=N.hydrationErrors,N!==null&&cu(g,g.actualStartTime,w,N)):vo=!0):vo=!1,t0(r,g,o,l,w),vo=I;break;case 13:I=vo,N=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,N===null||N.dehydrated===null||$!==null&&$.dehydrated!==null?vo=!1:($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(vo=!1,N=N.hydrationErrors,N!==null&&cu(g,g.actualStartTime,w,N)):vo=!0),t0(r,g,o,l,w),vo=I;break;case 23:break;case 22:$=g.stateNode,N=g.alternate,g.memoizedState!==null?$._visibility&r1?t0(r,g,o,l,w):Kw(r,g,o,l,w):$._visibility&r1?t0(r,g,o,l,w):($._visibility|=r1,yh(r,g,o,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),w),(g.mode&Dr)===Fr||vo||(r=g.actualStartTime,0<=r&&0.05<w-r&&c2(g,r,w),0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(g,Ur,Lr))),I&2048&&OO(N,g);break;case 24:t0(r,g,o,l,w),I&2048&&HO(g.alternate,g);break;default:t0(r,g,o,l,w)}if((g.mode&Dr)!==Fr){if(r=!vo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<w-o&&uv(g,o,w,"Mount");0<=Ur&&0<=Lr&&((Tg||0.05<Bg)&&Ov(g,Ur,Lr,Bg,Ig),r&&0.05<Lr-Ur&&uv(g,Ur,Lr,"Mount"))}w0(b),qv(H),Ig=q,Tg=e,c1=G}function yh(r,g,o,l,w,b){w=w&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var H=g.sibling;g9(r,g,o,l,w,H!==null?H.actualStartTime:b),g=H}}function g9(r,g,o,l,w,b){var H=h0(),q=Pv(),e=Av(),G=Mv(),I=c1;w&&(g.mode&Dr)!==Fr&&0<g.actualStartTime&&(g.flags&1)!==0&&j2(g,g.actualStartTime,b,vo,o);var N=g.flags;switch(g.tag){case 0:case 11:case 15:yh(r,g,o,l,w,b),iM(g,So);break;case 23:break;case 22:var $=g.stateNode;g.memoizedState!==null?$._visibility&r1?yh(r,g,o,l,w,b):Kw(r,g,o,l,b):($._visibility|=r1,yh(r,g,o,l,w,b)),w&&N&2048&&OO(g.alternate,g);break;case 24:yh(r,g,o,l,w,b),w&&N&2048&&HO(g.alternate,g);break;default:yh(r,g,o,l,w,b)}(g.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(g,Ur,Lr,Bg,Ig),w0(H),qv(q),Ig=e,Tg=G,c1=I}function Kw(r,g,o,l,w){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var b=g.child;b!==null;){g=b.sibling;var H=r,q=o,e=l,G=g!==null?g.actualStartTime:w,I=c1;(b.mode&Dr)!==Fr&&0<b.actualStartTime&&(b.flags&1)!==0&&j2(b,b.actualStartTime,G,vo,q);var N=b.flags;switch(b.tag){case 22:Kw(H,b,q,e,G),N&2048&&OO(b.alternate,b);break;case 24:Kw(H,b,q,e,G),N&2048&&HO(b.alternate,b);break;default:Kw(H,b,q,e,G)}c1=I,b=g}}function ch(r,g,o){if(r.subtreeFlags&Mb)for(r=r.child;r!==null;)o9(r,g,o),r=r.sibling}function o9(r,g,o){switch(r.tag){case 26:ch(r,g,o),r.flags&Mb&&r.memoizedState!==null&&Az(o,j0,r.memoizedState,r.memoizedProps);break;case 5:ch(r,g,o);break;case 3:case 4:var l=j0;j0=k4(r.stateNode.containerInfo),ch(r,g,o),j0=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Mb,Mb=16777216,ch(r,g,o),Mb=l):ch(r,g,o));break;default:ch(r,g,o)}}function v9(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function $w(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],w=h0();uo=l,w9(l,r),(l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&uv(l,Ur,Lr,"Unmount"),w0(w)}v9(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)l9(r),r=r.sibling}function l9(r){var g=h0(),o=Pv(),l=Av(),w=Mv();switch(r.tag){case 0:case 11:case 15:$w(r),r.flags&2048&&hO(r,r.return,So|m0);break;case 3:var b=jv();$w(r),r.stateNode.passiveEffectDuration+=v4(b);break;case 12:b=jv(),$w(r),r.stateNode.passiveEffectDuration+=Pw(b);break;case 22:b=r.stateNode,r.memoizedState!==null&&b._visibility&r1&&(r.return===null||r.return.tag!==13)?(b._visibility&=~r1,Z4(r),(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&uv(r,Ur,Lr,"Disconnect")):$w(r);break;default:$w(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(r,Ur,Lr,Bg,Ig),w0(g),qv(o),Tg=w,Ig=l}function Z4(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],w=h0();uo=l,w9(l,r),(l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&uv(l,Ur,Lr,"Unmount"),w0(w)}v9(r)}for(r=r.child;r!==null;)h9(r),r=r.sibling}function h9(r){var g=h0(),o=Pv(),l=Av(),w=Mv();switch(r.tag){case 0:case 11:case 15:hO(r,r.return,So),Z4(r);break;case 22:var b=r.stateNode;b._visibility&r1&&(b._visibility&=~r1,Z4(r));break;default:Z4(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(r,Ur,Lr,Bg,Ig),w0(g),qv(o),Tg=w,Ig=l}function w9(r,g){for(;uo!==null;){var o=uo,l=o,w=g,b=h0(),H=Pv(),q=Av(),e=Mv();switch(l.tag){case 0:case 11:case 15:hO(l,w,So);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(w=l.memoizedState.cachePool.pool,w!=null&&_l(w));break;case 24:Hw(l.memoizedState.cache)}if((l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Tg||0.05<Bg)&&Ov(l,Ur,Lr,Bg,Ig),w0(b),qv(H),Tg=e,Ig=q,l=o.child,l!==null)l.return=o,uo=l;else r:for(o=r;uo!==null;){if(l=uo,b=l.sibling,H=l.return,yM(l),l===o){uo=null;break r}if(b!==null){b.return=H,uo=b;break r}uo=H}}}function UQ(){cK.forEach(function(r){return r()})}function b9(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||i.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function u0(r){if((og&lo)!==Oo&&Vr!==0)return Vr&-Vr;var g=i.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),GO()):Z()}function u9(){if(po===0)if((Vr&536870912)===0||pr){var r=p4;p4<<=1,(p4&3932160)===0&&(p4=262144),po=r}else po=536870912;return r=M0.current,r!==null&&(r.flags|=32),po}function mg(r,g,o){if(Z5&&console.error("useInsertionEffect must not schedule updates."),sH&&(C6=!0),r===Gg&&(Pg===Hh||Pg===Ph)||r.cancelPendingCommit!==null)fh(r,0),k1(r,Vr,po,!1);if(L1(r,o),(og&lo)!==Oo&&r===Gg){if($v)switch(g.tag){case 0:case 11:case 15:r=Er&&S(Er)||"Unknown",Te.has(r)||(Te.add(r),g=S(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:me||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),me=!0)}}else Lv&&s5(r,g,o),CQ(g),r===Gg&&((og&lo)===Oo&&(wl|=o),Zg===vl&&k1(r,Vr,po,!1)),Jv(r)}function O9(r,g,o){if((og&(lo|e0))!==Oo)throw Error("Should not already be working.");if(Vr!==0&&Er!==null){var l=Er,w=wo();switch(L7){case Rb:case Hh:var b=rb;$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",b,w,U0,void 0,"primary-light")):console.timeStamp("Suspended",b,w,U0,void 0,"primary-light"));break;case Ph:b=rb,$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",b,w,U0,void 0,"primary-light")):console.timeStamp("Action",b,w,U0,void 0,"primary-light"));break;default:$g&&(l=w-rb,3>l||console.timeStamp("Blocked",rb,w,U0,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}b=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||Bl(r,g))?FQ(r,g):qO(r,g,!0);var H=o;do{if(b===P1){N5&&!o&&k1(r,g,0,!1),g=Pg,rb=fg(),L7=g;break}else{if(l=wo(),w=r.current.alternate,H&&!LQ(w)){v0(g),w=bo,b=l,!$g||b<=w||(kg?kg.run(console.timeStamp.bind(console,"Teared Render",w,b,fr,jr,"error")):console.timeStamp("Teared Render",w,b,fr,jr,"error")),al(g,l),b=qO(r,g,!1),H=!1;continue}if(b===Oh){if(H=g,r.errorRecoveryDisabledLanes&H)var q=0;else q=r.pendingLanes&-536870913,q=q!==0?q:q&536870912?536870912:0;if(q!==0){v0(g),ju(bo,l,g,kg),al(g,l),g=q;r:{l=r,b=H,H=Xb;var e=l.current.memoizedState.isDehydrated;if(e&&(fh(l,q).flags|=256),q=qO(l,q,!1),q!==Oh){if(EH&&!e){l.errorRecoveryDisabledLanes|=b,wl|=b,b=vl;break r}l=ko,ko=H,l!==null&&(ko===null?ko=l:ko.push.apply(ko,l))}b=q}if(H=!1,b!==Oh)continue;else l=wo()}}if(b===eb){v0(g),ju(bo,l,g,kg),al(g,l),fh(r,0),k1(r,g,0,!0);break}r:{switch(o=r,b){case P1:case eb:throw Error("Root did not complete. This is a bug in React.");case vl:if((g&4194048)!==g)break;case F6:v0(g),OA(bo,l,g,kg),al(g,l),w=g,(w&127)!==0?A6=l:(w&4194048)!==0&&(M6=l),k1(o,g,po,!ll);break r;case Oh:ko=null;break;case L6:case Je:break;default:throw Error("Unknown root exit status.")}if(i.actQueue!==null)AO(o,w,g,ko,Yb,B6,po,wl,qh,b,null,null,bo,l);else{if((g&62914560)===g&&(H=Z6+Ke-wo(),10<H)){if(k1(o,g,po,!ll),Nl(o,0,!0)!==0)break r;f0=g,o.timeoutHandle=Ve(H9.bind(null,o,w,ko,Yb,B6,g,po,wl,qh,ll,b,"Throttled",bo,l),H);break r}H9(o,w,ko,Yb,B6,g,po,wl,qh,ll,b,null,bo,l)}}}break}while(1);Jv(r)}function H9(r,g,o,l,w,b,H,q,e,G,I,N,$,x){r.timeoutHandle=Rh;var wr=g.subtreeFlags,Mr=null;if(wr&8192||(wr&16785408)===16785408){if(Mr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_v},o9(g,b,Mr),wr=(b&62914560)===b?Z6-wo():(b&4194048)===b?ze-wo():0,wr=Mz(Mr,wr),wr!==null){f0=b,r.cancelPendingCommit=wr(AO.bind(null,r,g,b,o,l,w,H,q,e,I,Mr,Mr.waitingForViewTransition?"Waiting for the previous Animation":0<Mr.count?0<Mr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Mr.imgCount===1?"Suspended on an Image":0<Mr.imgCount?"Suspended on Images":null,$,x)),k1(r,b,H,!G);return}}AO(r,g,b,o,l,w,H,q,e,I,Mr,N,$,x)}function LQ(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var w=o[l],b=w.getSnapshot;w=w.value;try{if(!To(b(),w))return!1}catch(H){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function k1(r,g,o,l){g&=~yH,g&=~wl,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var w=g;0<w;){var b=31-Zo(w),H=1<<b;l[b]=-1,w&=~H}o!==0&&Zl(r,o,g)}function jh(){return(og&(lo|e0))===Oo?(Fw(0,!1),!1):!0}function PO(){if(Er!==null){if(Pg===ao)var r=Er.return;else r=Er,r4(),Q8(r),J5=null,Ob=0,r=Er;for(;r!==null;)TM(r.alternate,r),r=r.return;Er=null}}function al(r,g){(r&127)!==0&&(d1=g),(r&4194048)!==0&&(Zv=g),(r&62914560)!==0&&($7=g),(r&2080374784)!==0&&(U7=g)}function fh(r,g){$g&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jr,"primary-light"));var o=bo;if(bo=fg(),Vr!==0&&0<o){if(v0(Vr),Zg===L6||Zg===vl)OA(o,bo,g,kg);else{var l=bo,w=kg;if($g&&!(l<=o)){var b=(g&738197653)===g?"tertiary-dark":"primary-dark",H=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";w?w.run(console.timeStamp.bind(console,H,o,l,fr,jr,b)):console.timeStamp(H,o,l,fr,jr,b)}}al(Vr,bo)}if(o=kg,kg=null,(g&127)!==0){kg=pw,w=0<=Bv&&Bv<d1?d1:Bv,l=0<=gh&&gh<d1?d1:gh,b=0<=l?l:0<=w?w:bo,0<=A6?(v0(2),HA(A6,b,g,o)):(W6&127)!==0&&(v0(2),uw(d1,b,w1)),o=w;var q=l,e=dw,G=0<G5,I=s1===aw,N=s1===q6;if(w=bo,l=pw,b=KH,H=$H,$g){if(fr="Blocking",0<o?o>w&&(o=w):o=w,0<q?q>o&&(q=o):q=o,e!==null&&o>q){var $=G?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,G?"Consecutive":"Event: "+e,q,o,fr,jr,$)):console.timeStamp(G?"Consecutive":"Event: "+e,q,o,fr,jr,$)}w>o&&(q=I?"error":(g&738197653)===g?"tertiary-light":"primary-light",I=N?"Promise Resolved":I?"Cascading Update":5<w-o?"Update Blocked":"Update",N=[],H!=null&&N.push(["Component name",H]),b!=null&&N.push(["Method name",b]),o={start:o,end:w,detail:{devtools:{properties:N,track:fr,trackGroup:jr,color:q}}},l?l.run(performance.measure.bind(performance,I,o)):performance.measure(I,o))}Bv=-1.1,s1=0,$H=KH=null,A6=-1.1,G5=gh,gh=-1.1,d1=fg()}if((g&4194048)!==0&&(kg=sw,w=0<=h1&&h1<Zv?Zv:h1,o=0<=Z0&&Z0<Zv?Zv:Z0,l=0<=rl&&rl<Zv?Zv:rl,b=0<=l?l:0<=o?o:bo,0<=M6?(v0(256),HA(M6,b,g,kg)):(W6&4194048)!==0&&(v0(256),uw(Zv,b,w1)),N=l,q=oh,e=0<gl,G=UH===q6,b=bo,l=sw,H=z7,I=K7,$g&&(fr="Transition",0<o?o>b&&(o=b):o=b,0<w?w>o&&(w=o):w=o,0<N?N>w&&(N=w):N=w,w>N&&q!==null&&($=e?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,e?"Consecutive":"Event: "+q,N,w,fr,jr,$)):console.timeStamp(e?"Consecutive":"Event: "+q,N,w,fr,jr,$)),o>w&&(l?l.run(console.timeStamp.bind(console,"Action",w,o,fr,jr,"primary-dark")):console.timeStamp("Action",w,o,fr,jr,"primary-dark")),b>o&&(w=G?"Promise Resolved":5<b-o?"Update Blocked":"Update",N=[],I!=null&&N.push(["Component name",I]),H!=null&&N.push(["Method name",H]),o={start:o,end:b,detail:{devtools:{properties:N,track:fr,trackGroup:jr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,w,o)):performance.measure(w,o))),Z0=h1=-1.1,UH=0,M6=-1.1,gl=rl,rl=-1.1,Zv=fg()),(g&62914560)!==0&&(W6&62914560)!==0&&(v0(4194304),uw($7,bo,w1)),(g&2080374784)!==0&&(W6&2080374784)!==0&&(v0(268435456),uw(U7,bo,w1)),o=r.timeoutHandle,o!==Rh&&(r.timeoutHandle=Rh,w$(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),f0=0,PO(),Gg=r,Er=o=Ev(r.current,null),Vr=g,Pg=ao,R0=null,ll=!1,N5=Bl(r,g),EH=!1,Zg=P1,qh=po=yH=wl=hl=0,ko=Xb=null,B6=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)w=31-Zo(l),b=1<<w,g|=r[w],l&=~b;return mv=g,f2(),r=R7(),1000<r-e7&&(i.recentlyCreatedOwnerStacks=0,e7=r),y0.discardPendingWarnings(),o}function P9(r,g){Ir=null,i.H=Ab,i.getCurrentStack=null,$v=!1,P0=null,g===Y5||g===X6?(g=ZA(),Pg=Rb):g===NH?(g=ZA(),Pg=Qe):Pg=g===nH?_H:g!==null&&typeof g==="object"&&typeof g.then==="function"?Gb:I6,R0=g;var o=Er;o===null?(Zg=eb,$4(r,l0(g,r.current))):o.mode&Dr&&O8(o)}function q9(){var r=M0.current;return r===null?!0:(Vr&4194048)===Vr?x0===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===x0:!1}function A9(){var r=i.H;return i.H=Ab,r===null?Ab:r}function M9(){var r=i.A;return i.A=yK,r}function x4(r){kg===null&&(kg=r._debugTask==null?null:r._debugTask)}function m4(){Zg=vl,ll||(Vr&4194048)!==Vr&&M0.current!==null||(N5=!0),(hl&134217727)===0&&(wl&134217727)===0||Gg===null||k1(Gg,Vr,po,!1)}function qO(r,g,o){var l=og;og|=lo;var w=A9(),b=M9();if(Gg!==r||Vr!==g){if(Lv){var H=r.memoizedUpdaters;0<H.size&&(Lw(r,Vr),H.clear()),F1(r,g)}Yb=null,fh(r,g)}g=!1,H=Zg;r:do try{if(Pg!==ao&&Er!==null){var q=Er,e=R0;switch(Pg){case _H:PO(),H=F6;break r;case Rb:case Hh:case Ph:case Gb:M0.current===null&&(g=!0);var G=Pg;if(Pg=ao,R0=null,ah(r,q,e,G),o&&N5){H=P1;break r}break;default:G=Pg,Pg=ao,R0=null,ah(r,q,e,G)}}W9(),H=Zg;break}catch(I){P9(r,I)}while(1);return g&&r.shellSuspendCounter++,r4(),og=l,i.H=w,i.A=b,Er===null&&(Gg=null,Vr=0,f2()),H}function W9(){for(;Er!==null;)e9(Er)}function FQ(r,g){var o=og;og|=lo;var l=A9(),w=M9();if(Gg!==r||Vr!==g){if(Lv){var b=r.memoizedUpdaters;0<b.size&&(Lw(r,Vr),b.clear()),F1(r,g)}Yb=null,x6=wo()+$e,fh(r,g)}else N5=Bl(r,g);r:do try{if(Pg!==ao&&Er!==null)g:switch(g=Er,b=R0,Pg){case I6:Pg=ao,R0=null,ah(r,g,b,I6);break;case Hh:case Ph:if(NA(b)){Pg=ao,R0=null,R9(g);break}g=function(){Pg!==Hh&&Pg!==Ph||Gg!==r||(Pg=N6),Jv(r)},b.then(g,g);break r;case Rb:Pg=N6;break r;case Qe:Pg=VH;break r;case N6:NA(b)?(Pg=ao,R0=null,R9(g)):(Pg=ao,R0=null,ah(r,g,b,N6));break;case VH:var H=null;switch(Er.tag){case 26:H=Er.memoizedState;case 5:case 27:var q=Er;if(H?OW(H):q.stateNode.complete){Pg=ao,R0=null;var e=q.sibling;if(e!==null)Er=e;else{var G=q.return;G!==null?(Er=G,T4(G)):Er=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}Pg=ao,R0=null,ah(r,g,b,VH);break;case Gb:Pg=ao,R0=null,ah(r,g,b,Gb);break;case _H:PO(),Zg=F6;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}i.actQueue!==null?W9():IQ();break}catch(I){P9(r,I)}while(1);if(r4(),i.H=l,i.A=w,og=o,Er!==null)return P1;return Gg=null,Vr=0,f2(),Zg}function IQ(){for(;Er!==null&&!Lz();)e9(Er)}function e9(r){var g=r.alternate;(r.mode&Dr)!==Fr?(u8(r),g=ur(r,oO,g,r,mv),O8(r)):g=ur(r,oO,g,r,mv),r.memoizedProps=r.pendingProps,g===null?T4(r):Er=g}function R9(r){var g=ur(r,NQ,r);r.memoizedProps=r.pendingProps,g===null?T4(r):Er=g}function NQ(r){var g=r.alternate,o=(r.mode&Dr)!==Fr;switch(o&&u8(r),r.tag){case 15:case 0:g=FM(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=FM(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Q8(r);default:TM(g,r),r=Er=eA(r,mv),g=oO(g,r,mv)}return o&&O8(r),g}function ah(r,g,o,l){r4(),Q8(g),J5=null,Ob=0;var w=g.return;try{if(MQ(r,w,g,o,Vr)){Zg=eb,$4(r,l0(o,r.current)),Er=null;return}}catch(b){if(w!==null)throw Er=w,b;Zg=eb,$4(r,l0(o,r.current)),Er=null;return}if(g.flags&32768){if(pr||l===I6)r=!0;else if(N5||(Vr&536870912)!==0)r=!1;else if(ll=r=!0,l===Hh||l===Ph||l===Rb||l===Gb)l=M0.current,l!==null&&l.tag===13&&(l.flags|=16384);G9(g,r)}else T4(g)}function T4(r){var g=r;do{if((g.flags&32768)!==0){G9(g,ll);return}var o=g.alternate;if(r=g.return,u8(g),o=ur(g,RQ,o,g,mv),(g.mode&Dr)!==Fr&&$A(g),o!==null){Er=o;return}if(g=g.sibling,g!==null){Er=g;return}Er=g=r}while(g!==null);Zg===P1&&(Zg=Je)}function G9(r,g){do{var o=GQ(r.alternate,r);if(o!==null){o.flags&=32767,Er=o;return}if((r.mode&Dr)!==Fr){$A(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){Er=r;return}Er=r=o}while(r!==null);Zg=F6,Er=null}function AO(r,g,o,l,w,b,H,q,e,G,I,N,$,x){r.cancelPendingCommit=null;do Uw();while(ro!==ul);if(y0.flushLegacyContextWarning(),y0.flushPendingUnsafeLifecycleWarnings(),(og&(lo|e0))!==Oo)throw Error("Should not already be working.");if(v0(o),G===Oh?ju($,x,o,kg):l!==null?gQ($,x,o,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,kg):rQ($,x,o,kg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=g.lanes|g.childLanes,b|=XH,S2(r,o,b,H,q,e),r===Gg&&(Er=Gg=null,Vr=0),B5=g,Ol=r,f0=o,fH=b,pH=w,Be=l,aH=x,Ze=N,a0=m6,xe=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,TQ(o5,function(){return Ub=window.event,a0===m6&&(a0=jH),z9(),null})):(r.callbackNode=null,r.callbackPriority=0),l1=null,p1=fg(),N!==null&&oQ(x,p1,N,kg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=i.T,i.T=null,w=ug.p,ug.p=q0,H=og,og|=e0;try{KQ(r,g,o)}finally{og=H,ug.p=w,i.T=l}}ro=Le,X9(),Y9(),J9()}}function X9(){if(ro===Le){ro=ul;var r=Ol,g=B5,o=f0,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=i.T,i.T=null;var w=ug.p;ug.p=q0;var b=og;og|=e0;try{F5=o,I5=r,l4(),aM(g,r),I5=F5=null,o=uP;var H=wA(r.containerInfo),q=o.focusedElem,e=o.selectionRange;if(H!==q&&q&&q.ownerDocument&&hA(q.ownerDocument.documentElement,q)){if(e!==null&&Eu(q)){var{start:G,end:I}=e;if(I===void 0&&(I=G),"selectionStart"in q)q.selectionStart=G,q.selectionEnd=Math.min(I,q.value.length);else{var N=q.ownerDocument||document,$=N&&N.defaultView||window;if($.getSelection){var x=$.getSelection(),wr=q.textContent.length,Mr=Math.min(e.start,wr),Qg=e.end===void 0?Mr:Math.min(e.end,wr);!x.extend&&Mr>Qg&&(H=Qg,Qg=Mr,Mr=H);var sr=lA(q,Mr),K=lA(q,Qg);if(sr&&K&&(x.rangeCount!==1||x.anchorNode!==sr.node||x.anchorOffset!==sr.offset||x.focusNode!==K.node||x.focusOffset!==K.offset)){var U=N.createRange();U.setStart(sr.node,sr.offset),x.removeAllRanges(),Mr>Qg?(x.addRange(U),x.extend(K.node,K.offset)):(U.setEnd(K.node,K.offset),x.addRange(U))}}}}N=[];for(x=q;x=x.parentNode;)x.nodeType===1&&N.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof q.focus==="function"&&q.focus();for(q=0;q<N.length;q++){var F=N[q];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}a6=!!bP,uP=bP=null}finally{og=b,ug.p=w,i.T=l}}r.current=g,ro=Fe}}function Y9(){if(ro===Fe){ro=ul;var r=xe;if(r!==null){p1=fg();var g=v1,o=p1;!$g||o<=g||(w1?w1.run(console.timeStamp.bind(console,r,g,o,fr,jr,"secondary-light")):console.timeStamp(r,g,o,fr,jr,"secondary-light"))}r=Ol,g=B5,o=f0;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=i.T,i.T=null;var w=ug.p;ug.p=q0;var b=og;og|=e0;try{F5=o,I5=r,l4(),EM(r,g.alternate,g),I5=F5=null}finally{og=b,ug.p=w,i.T=l}}r=aH,g=Ze,v1=fg(),r=g===null?r:p1,g=v1,o=a0===cH,l=kg,l1!==null?PA(r,g,l1,!1,l):!$g||g<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")),ro=Ie}}function J9(){if(ro===Ne||ro===Ie){if(ro===Ne){var r=v1;v1=fg();var g=v1,o=a0===cH;!$g||g<=r||(w1?w1.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?" error":"secondary-light")),a0!==cH&&(a0=Ue)}ro=ul,Fz(),r=Ol;var l=B5;g=f0,o=Be;var w=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;w?ro=T6:(ro=ul,B5=Ol=null,Q9(r,r.pendingLanes),Ah=0,Qb=null);var b=r.pendingLanes;if(b===0&&(bl=null),w||L9(r),b=X(g),l=l.stateNode,Uo&&typeof Uo.onCommitFiberRoot==="function")try{var H=(l.current.flags&128)===128;switch(b){case q0:var q=pO;break;case _0:q=dO;break;case Fv:q=o5;break;case s4:q=sO;break;default:q=o5}Uo.onCommitFiberRoot(v5,l,q,H)}catch(N){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",N))}if(Lv&&r.memoizedUpdaters.clear(),UQ(),o!==null){H=i.T,q=ug.p,ug.p=q0,i.T=null;try{var e=r.onRecoverableError;for(l=0;l<o.length;l++){var G=o[l],I=BQ(G.stack);ur(G.source,e,G.value,I)}}finally{i.T=H,ug.p=q}}(f0&3)!==0&&Uw(),Jv(r),b=r.pendingLanes,(g&261930)!==0&&(b&42)!==0?(R6=!0,r===dH?Jb++:(Jb=0,dH=r)):Jb=0,w||al(g,v1),Fw(0,!1)}}function BQ(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function Q9(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,Hw(g)))}function Uw(){return X9(),Y9(),J9(),z9()}function z9(){if(ro!==T6)return!1;var r=Ol,g=fH;fH=0;var o=X(f0),l=Fv===0||Fv>o?Fv:o;o=i.T;var w=ug.p;try{ug.p=l,i.T=null;var b=pH;pH=null,l=Ol;var H=f0;if(ro=ul,B5=Ol=null,f0=0,(og&(lo|e0))!==Oo)throw Error("Cannot flush passive effects while already rendering.");v0(H),sH=!0,C6=!1;var q=0;if(l1=null,q=wo(),a0===Ue)uw(v1,q,w1);else{var e=v1,G=q,I=a0===jH;!$g||G<=e||(kg?kg.run(console.timeStamp.bind(console,I?"Waiting for Paint":"Waiting",e,G,fr,jr,"secondary-light")):console.timeStamp(I?"Waiting for Paint":"Waiting",e,G,fr,jr,"secondary-light"))}e=og,og|=e0;var N=l.current;l4(),l9(N);var $=l.current;N=aH,l4(),r9(l,$,H,b,N),L9(l),og=e;var x=wo();if($=q,N=kg,l1!==null?PA($,x,l1,!0,N):!$g||x<=$||(N?N.run(console.timeStamp.bind(console,"Remaining Effects",$,x,fr,jr,"secondary-dark")):console.timeStamp("Remaining Effects",$,x,fr,jr,"secondary-dark")),al(H,x),Fw(0,!1),C6?l===Qb?Ah++:(Ah=0,Qb=l):Ah=0,C6=sH=!1,Uo&&typeof Uo.onPostCommitFiberRoot==="function")try{Uo.onPostCommitFiberRoot(v5,l)}catch(Mr){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",Mr))}var wr=l.current.stateNode;return wr.effectDuration=0,wr.passiveEffectDuration=0,!0}finally{ug.p=w,i.T=o,Q9(r,g)}}function K9(r,g,o){g=l0(o,g),UA(g),g=E8(r.stateNode,g,2),r=T1(r,g,2),r!==null&&(L1(r,2),Jv(r))}function bg(r,g,o){if(Z5=!1,r.tag===3)K9(r,r,o);else{for(;g!==null;){if(g.tag===3){K9(g,r,o);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(bl===null||!bl.has(l))){r=l0(o,r),UA(r),o=y8(2),l=T1(g,o,2),l!==null&&(c8(o,l,g,r),L1(l,2),Jv(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function MO(r,g,o){var l=r.pingCache;if(l===null){l=r.pingCache=new jK;var w=new Set;l.set(g,w)}else w=l.get(g),w===void 0&&(w=new Set,l.set(g,w));w.has(o)||(EH=!0,w.add(o),l=ZQ.bind(null,r,g,o),Lv&&Lw(r,o),g.then(l,l))}function ZQ(r,g,o){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>Bv&&(d1=Bv=fg(),pw=P6("Promise Resolved"),s1=q6):(o&4194048)!==0&&0>Z0&&(Zv=Z0=fg(),sw=P6("Promise Resolved"),UH=q6),b9()&&i.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Gg===r&&(Vr&o)===o&&(Zg===vl||Zg===L6&&(Vr&62914560)===Vr&&wo()-Z6<Ke?(og&lo)===Oo&&fh(r,0):yH|=o,qh===Vr&&(qh=0)),Jv(r)}function $9(r,g){g===0&&(g=mh()),r=$o(r,g),r!==null&&(L1(r,g),Jv(r))}function xQ(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),$9(r,o)}function mQ(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:w}=r;w!==null&&(o=w.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),$9(r,o)}function WO(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,w=g,b=w.type===c4;b=o||b,w.tag!==22?w.flags&67108864?b&&ur(w,U9,l,w):WO(l,w,b):w.memoizedState===null&&(b&&w.flags&8192?ur(w,U9,l,w):w.subtreeFlags&67108864&&ur(w,WO,l,w,b)),g=g.sibling}}function U9(r,g){Yg(!0);try{dM(g),h9(g),sM(r,g.alternate,g,!1),g9(r,g,0,null,!1,0)}finally{Yg(!1)}}function L9(r){var g=!0;r.current.mode&(Lo|E0)||(g=!1),WO(r,r.current,g)}function F9(r){if((og&lo)===Oo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=S(r)||"ReactComponent",i6!==null){if(i6.has(g))return;i6.add(g)}else i6=new Set([g]);ur(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Lw(r,g){Lv&&r.memoizedUpdaters.forEach(function(o){s5(r,o,g)})}function TQ(r,g){var o=i.actQueue;return o!==null?(o.push(g),pK):aO(r,g)}function CQ(r){b9()&&i.actQueue===null&&ur(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,S(r))})}function Jv(r){r!==x5&&r.next===null&&(x5===null?S6=x5=r:x5=x5.next=r),k6=!0,i.actQueue!==null?gP||(gP=!0,Z9()):rP||(rP=!0,Z9())}function Fw(r,g){if(!oP&&k6){oP=!0;do{var o=!1;for(var l=S6;l!==null;){if(!g)if(r!==0){var w=l.pendingLanes;if(w===0)var b=0;else{var{suspendedLanes:H,pingedLanes:q}=l;b=(1<<31-Zo(42|r)+1)-1,b&=w&~(H&~q),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(o=!0,B9(l,b))}else b=Vr,b=Nl(l,l===Gg?b:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Rh),(b&3)===0||Bl(l,b)||(o=!0,B9(l,b));l=l.next}}while(o);oP=!1}}function iQ(){Ub=window.event,eO()}function eO(){k6=gP=rP=!1;var r=0;Hl!==0&&_Q()&&(r=Hl);for(var g=wo(),o=null,l=S6;l!==null;){var w=l.next,b=I9(l,g);if(b===0)l.next=null,o===null?S6=w:o.next=w,w===null&&(x5=o);else if(o=l,r!==0||(b&3)!==0)k6=!0;l=w}ro!==ul&&ro!==T6||Fw(r,!1),Hl!==0&&(Hl=0)}function I9(r,g){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:w}=r,b=r.pendingLanes&-62914561;0<b;){var H=31-Zo(b),q=1<<H,e=w[H];if(e===-1){if((q&o)===0||(q&l)!==0)w[H]=mu(q,g)}else e<=g&&(r.expiredLanes|=q);b&=~q}if(g=Gg,o=Vr,o=Nl(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Rh),l=r.callbackNode,o===0||r===g&&(Pg===Hh||Pg===Ph)||r.cancelPendingCommit!==null)return l!==null&&RO(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Bl(r,o)){if(g=o&-o,g!==r.callbackPriority||i.actQueue!==null&&l!==vP)RO(l);else return g;switch(X(o)){case q0:case _0:o=dO;break;case Fv:o=o5;break;case s4:o=sO;break;default:o=o5}return l=N9.bind(null,r),i.actQueue!==null?(i.actQueue.push(l),o=vP):o=aO(o,l),r.callbackPriority=g,r.callbackNode=o,g}return l!==null&&RO(l),r.callbackPriority=2,r.callbackNode=null,2}function N9(r,g){if(R6=e6=!1,Ub=window.event,ro!==ul&&ro!==T6)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(a0===m6&&(a0=jH),Uw()&&r.callbackNode!==o)return null;var l=Vr;if(l=Nl(r,r===Gg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Rh),l===0)return null;return O9(r,l,g),I9(r,wo()),r.callbackNode!=null&&r.callbackNode===o?N9.bind(null,r):null}function B9(r,g){if(Uw())return null;e6=R6,R6=!1,O9(r,g,!0)}function RO(r){r!==vP&&r!==null&&Uz(r)}function Z9(){i.actQueue!==null&&i.actQueue.push(function(){return eO(),null}),b$(function(){(og&(lo|e0))!==Oo?aO(pO,iQ):eO()})}function GO(){if(Hl===0){var r=vh;r===0&&(r=a4,a4<<=1,(a4&261888)===0&&(a4=256)),Hl=r}return Hl}function x9(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Ag(r,"action"),hw(""+r)}function m9(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function SQ(r,g,o,l,w){if(g==="submit"&&o&&o.stateNode===w){var b=x9((w[xo]||null).action),H=l.submitter;H&&(g=(g=H[xo]||null)?x9(g.formAction):H.getAttribute("formAction"),g!==null&&(b=g,H=null));var q=new l6("action","action",null,l,w);r.push({event:q,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Hl!==0){var e=H?m9(w,H):new FormData(w),G={pending:!0,data:e,method:w.method,action:b};Object.freeze(G),S8(o,G,null,e)}}else typeof b==="function"&&(q.preventDefault(),e=H?m9(w,H):new FormData(w),G={pending:!0,data:e,method:w.method,action:b},Object.freeze(G),S8(o,G,b,e))},currentTarget:w}]})}}function C4(r,g,o){r.currentTarget=o;try{g(r)}catch(l){WH(l)}r.currentTarget=null}function T9(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var w=void 0,b=l.event;if(l=l.listeners,g)for(var H=l.length-1;0<=H;H--){var q=l[H],e=q.instance,G=q.currentTarget;if(q=q.listener,e!==w&&b.isPropagationStopped())break r;e!==null?ur(e,C4,b,q,G):C4(b,q,G),w=e}else for(H=0;H<l.length;H++){if(q=l[H],e=q.instance,G=q.currentTarget,q=q.listener,e!==w&&b.isPropagationStopped())break r;e!==null?ur(e,C4,b,q,G):C4(b,q,G),w=e}}}}function dr(r,g){lP.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[rH];o===void 0&&(o=g[rH]=new Set);var l=r+"__bubble";o.has(l)||(C9(g,r,2,!1),o.add(l))}function XO(r,g,o){lP.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),C9(o,r,l,g)}function YO(r){if(!r[n6]){r[n6]=!0,ZW.forEach(function(o){o!=="selectionchange"&&(lP.has(o)||XO(o,!1,r),XO(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[n6]||(g[n6]=!0,XO("selectionchange",!1,g))}}function C9(r,g,o,l){switch(WW(g)){case q0:var w=Gz;break;case _0:w=Xz;break;default:w=CO}o=w.bind(null,g,o,r),w=void 0,!hH||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(w=!0),l?w!==void 0?r.addEventListener(g,o,{capture:!0,passive:w}):r.addEventListener(g,o,!0):w!==void 0?r.addEventListener(g,o,{passive:w}):r.addEventListener(g,o,!1)}function JO(r,g,o,l,w){var b=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var H=l.tag;if(H===3||H===4){var q=l.stateNode.containerInfo;if(q===w)break;if(H===4)for(H=l.return;H!==null;){var e=H.tag;if((e===3||e===4)&&H.stateNode.containerInfo===w)return;H=H.return}for(;q!==null;){if(H=Xr(q),H===null)return;if(e=H.tag,e===5||e===6||e===26||e===27){l=b=H;continue r}q=q.parentNode}}l=l.return}cq(function(){var G=b,I=Vu(o),N=[];r:{var $=W7.get(r);if($!==void 0){var x=l6,wr=r;switch(r){case"keypress":if(_2(o)===0)break r;case"keydown":case"keyup":x=AK;break;case"focusin":wr="focus",x=OH;break;case"focusout":wr="blur",x=OH;break;case"beforeblur":case"afterblur":x=OH;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=g7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gK;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=eK;break;case P7:case q7:case A7:x=lK;break;case M7:x=GK;break;case"scroll":case"scrollend":x=sz;break;case"wheel":x=YK;break;case"copy":case"cut":case"paste":x=wK;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=v7;break;case"toggle":case"beforetoggle":x=QK}var Mr=(g&4)!==0,Qg=!Mr&&(r==="scroll"||r==="scrollend"),sr=Mr?$!==null?$+"Capture":null:$;Mr=[];for(var K=G,U;K!==null;){var F=K;if(U=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||U===null||sr===null||(F=ww(K,sr),F!=null&&Mr.push(Iw(K,F,U))),Qg)break;K=K.return}0<Mr.length&&($=new x($,wr,null,o,I),N.push({event:$,listeners:Mr}))}}if((g&7)===0){r:{if($=r==="mouseover"||r==="pointerover",x=r==="mouseout"||r==="pointerout",$&&o!==nw&&(wr=o.relatedTarget||o.fromElement)&&(Xr(wr)||wr[E1]))break r;if(x||$){if($=I.window===I?I:($=I.ownerDocument)?$.defaultView||$.parentWindow:window,x){if(wr=o.relatedTarget||o.toElement,x=G,wr=wr?Xr(wr):null,wr!==null&&(Qg=rr(wr),Mr=wr.tag,wr!==Qg||Mr!==5&&Mr!==27&&Mr!==6))wr=null}else x=null,wr=G;if(x!==wr){if(Mr=g7,F="onMouseLeave",sr="onMouseEnter",K="mouse",r==="pointerout"||r==="pointerover")Mr=v7,F="onPointerLeave",sr="onPointerEnter",K="pointer";if(Qg=x==null?$:mr(x),U=wr==null?$:mr(wr),$=new Mr(F,K+"leave",x,o,I),$.target=Qg,$.relatedTarget=U,F=null,Xr(I)===G&&(Mr=new Mr(sr,K+"enter",wr,o,I),Mr.target=U,Mr.relatedTarget=Qg,F=Mr),Qg=F,x&&wr)g:{Mr=kQ,sr=x,K=wr,U=0;for(F=sr;F;F=Mr(F))U++;F=0;for(var t=K;t;t=Mr(t))F++;for(;0<U-F;)sr=Mr(sr),U--;for(;0<F-U;)K=Mr(K),F--;for(;U--;){if(sr===K||K!==null&&sr===K.alternate){Mr=sr;break g}sr=Mr(sr),K=Mr(K)}Mr=null}else Mr=null;x!==null&&i9(N,$,x,Mr,!1),wr!==null&&Qg!==null&&i9(N,Qg,wr,Mr,!0)}}}r:{if($=G?mr(G):window,x=$.nodeName&&$.nodeName.toLowerCase(),x==="select"||x==="input"&&$.type==="file")var Hr=rA;else if(dq($))if(O7)Hr=pJ;else{Hr=fJ;var Nr=jJ}else x=$.nodeName,!x||x.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?G&&lw(G.elementType)&&(Hr=rA):Hr=aJ;if(Hr&&(Hr=Hr(r,G))){sq(N,Hr,o,I);break r}Nr&&Nr(r,$,G),r==="focusout"&&G&&$.type==="number"&&G.memoizedProps.value!=null&&iu($,"number",$.value)}switch(Nr=G?mr(G):window,r){case"focusin":if(dq(Nr)||Nr.contentEditable==="true")H5=Nr,PH=G,cw=null;break;case"focusout":cw=PH=H5=null;break;case"mousedown":qH=!0;break;case"contextmenu":case"mouseup":case"dragend":qH=!1,bA(N,o,I);break;case"selectionchange":if(UK)break;case"keydown":case"keyup":bA(N,o,I)}var Kr;if(HH)r:{switch(r){case"compositionstart":var Yr="onCompositionStart";break r;case"compositionend":Yr="onCompositionEnd";break r;case"compositionupdate":Yr="onCompositionUpdate";break r}Yr=void 0}else O5?aq(r,o)&&(Yr="onCompositionEnd"):r==="keydown"&&o.keyCode===l7&&(Yr="onCompositionStart");if(Yr&&(h7&&o.locale!=="ko"&&(O5||Yr!=="onCompositionStart"?Yr==="onCompositionEnd"&&O5&&(Kr=jq()):(y1=I,wH=("value"in y1)?y1.value:y1.textContent,O5=!0)),Nr=i4(G,Yr),0<Nr.length&&(Yr=new o7(Yr,r,null,o,I),N.push({event:Yr,listeners:Nr}),Kr?Yr.data=Kr:(Kr=pq(o),Kr!==null&&(Yr.data=Kr)))),Kr=KK?_J(r,o):EJ(r,o))Yr=i4(G,"onBeforeInput"),0<Yr.length&&(Nr=new uK("onBeforeInput","beforeinput",null,o,I),N.push({event:Nr,listeners:Yr}),Nr.data=Kr);SQ(N,r,G,o,I)}T9(N,g)})}function Iw(r,g,o){return{instance:r,listener:g,currentTarget:o}}function i4(r,g){for(var o=g+"Capture",l=[];r!==null;){var w=r,b=w.stateNode;if(w=w.tag,w!==5&&w!==26&&w!==27||b===null||(w=ww(r,o),w!=null&&l.unshift(Iw(r,w,b)),w=ww(r,g),w!=null&&l.push(Iw(r,w,b))),r.tag===3)return l;r=r.return}return[]}function kQ(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function i9(r,g,o,l,w){for(var b=g._reactName,H=[];o!==null&&o!==l;){var q=o,e=q.alternate,G=q.stateNode;if(q=q.tag,e!==null&&e===l)break;q!==5&&q!==26&&q!==27||G===null||(e=G,w?(G=ww(o,b),G!=null&&H.unshift(Iw(o,G,e))):w||(G=ww(o,b),G!=null&&H.push(Iw(o,G,e)))),o=o.return}H.length!==0&&r.push({event:g,listeners:H})}function QO(r,g){nJ(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||sW||(sW=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:pl,possibleRegistrationNames:gH};lw(r)||typeof g.is==="string"||tJ(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,l){g!==o&&(o=n1(o),n1(g)!==o&&(l[r]=g))}function nQ(r,g,o){g.forEach(function(l){o[n9(l)]=l==="style"?KO(r):r.getAttribute(l)})}function Qv(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function S9(r,g){return r=r.namespaceURI===g6||r.namespaceURI===h5?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function n1(r){return r0(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",zo(r)),cg(r)),(typeof r==="string"?r:""+r).replace(dK,`
`).replace(sK,"")}function k9(r,g){return g=n1(g),n1(r)===g?!0:!1}function eg(r,g,o,l,w,b){switch(o){case"children":if(typeof l==="string")V2(l,g,!1),g==="body"||g==="textarea"&&l===""||vw(r,l);else if(typeof l==="number"||typeof l==="bigint")V2(""+l,g,!1),g!=="body"&&vw(r,""+l);break;case"className":n2(r,"class",l);break;case"tabIndex":n2(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":n2(r,o,l);break;case"style":_q(r,l,b);break;case"data":if(g!=="object"){n2(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Ag(l,o),l=hw(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(w.encType==null&&w.method==null||V6||(V6=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),w.target==null||t6||(t6=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||w.type==="submit"||w.type==="image"||D6?g!=="button"||w.type==null||w.type==="submit"||D6?typeof l==="function"&&(w.name==null||Se||(Se=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),w.formEncType==null&&w.formMethod==null||V6||(V6=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),w.formTarget==null||t6||(t6=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(D6=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(D6=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(o==="formAction"?(g!=="input"&&eg(r,g,"name",w.name,w,null),eg(r,g,"formEncType",w.formEncType,w,null),eg(r,g,"formMethod",w.formMethod,w,null),eg(r,g,"formTarget",w.formTarget,w,null)):(eg(r,g,"encType",w.encType,w,null),eg(r,g,"method",w.method,w,null),eg(r,g,"target",w.target,w,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Ag(l,o),l=hw(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Qv(o,l),r.onclick=_v);break;case"onScroll":l!=null&&(typeof l!=="function"&&Qv(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Qv(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(w.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Ag(l,o),o=hw(""+l),r.setAttributeNS(Mh,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Ag(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||_6[o]||(_6[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Ag(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Ag(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(Ag(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),k2(r,"popover",l);break;case"xlinkActuate":Vv(r,Mh,"xlink:actuate",l);break;case"xlinkArcrole":Vv(r,Mh,"xlink:arcrole",l);break;case"xlinkRole":Vv(r,Mh,"xlink:role",l);break;case"xlinkShow":Vv(r,Mh,"xlink:show",l);break;case"xlinkTitle":Vv(r,Mh,"xlink:title",l);break;case"xlinkType":Vv(r,Mh,"xlink:type",l);break;case"xmlBase":Vv(r,hP,"xml:base",l);break;case"xmlLang":Vv(r,hP,"xml:lang",l);break;case"xmlSpace":Vv(r,hP,"xml:space",l);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),k2(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":ke||l==null||typeof l!=="object"||(ke=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=Eq(o),k2(r,o,l)):pl.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&Qv(o,l)}}function zO(r,g,o,l,w,b){switch(o){case"style":_q(r,l,b);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(w.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?vw(r,l):(typeof l==="number"||typeof l==="bigint")&&vw(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Qv(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Qv(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Qv(o,l),r.onclick=_v);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(pl.hasOwnProperty(o))l!=null&&typeof l!=="function"&&Qv(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(w=o.endsWith("Capture"),g=o.slice(2,w?o.length-7:void 0),b=r[xo]||null,b=b!=null?b[o]:null,typeof b==="function"&&r.removeEventListener(g,b,w),typeof l==="function")){typeof b!=="function"&&b!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,l,w);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):k2(r,o,l)}}}function Wo(r,g,o){switch(QO(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,w=!1,b;for(b in o)if(o.hasOwnProperty(b)){var H=o[b];if(H!=null)switch(b){case"src":l=!0;break;case"srcSet":w=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:eg(r,g,b,H,o,null)}}w&&eg(r,g,"srcSet",o.srcSet,o,null),l&&eg(r,g,"src",o.src,o,null);return;case"input":I1("input",o),dr("invalid",r);var q=b=H=w=null,e=null,G=null;for(l in o)if(o.hasOwnProperty(l)){var I=o[l];if(I!=null)switch(l){case"name":w=I;break;case"type":H=I;break;case"checked":e=I;break;case"defaultChecked":G=I;break;case"value":b=I;break;case"defaultValue":q=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:eg(r,g,l,I,o,null)}}Fq(r,o),Iq(r,b,q,e,G,H,w,!1);return;case"select":I1("select",o),dr("invalid",r),l=H=b=null;for(w in o)if(o.hasOwnProperty(w)&&(q=o[w],q!=null))switch(w){case"value":b=q;break;case"defaultValue":H=q;break;case"multiple":l=q;default:eg(r,g,w,q,o,null)}Zq(r,o),g=b,o=H,r.multiple=!!l,g!=null?Ch(r,!!l,g,!1):o!=null&&Ch(r,!!l,o,!0);return;case"textarea":I1("textarea",o),dr("invalid",r),b=w=l=null;for(H in o)if(o.hasOwnProperty(H)&&(q=o[H],q!=null))switch(H){case"value":l=q;break;case"defaultValue":w=q;break;case"children":b=q;break;case"dangerouslySetInnerHTML":if(q!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:eg(r,g,H,q,o,null)}xq(r,o),Tq(r,l,w,b);return;case"option":Nq(r,o);for(e in o)if(o.hasOwnProperty(e)&&(l=o[e],l!=null))switch(e){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:eg(r,g,e,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<zb.length;l++)dr(zb[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in o)if(o.hasOwnProperty(G)&&(l=o[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:eg(r,g,G,l,o,null)}return;default:if(lw(g)){for(I in o)o.hasOwnProperty(I)&&(l=o[I],l!==void 0&&zO(r,g,I,l,o,void 0));return}}for(q in o)o.hasOwnProperty(q)&&(l=o[q],l!=null&&eg(r,g,q,l,o,null))}function DQ(r,g,o,l){switch(QO(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var w=null,b=null,H=null,q=null,e=null,G=null,I=null;for(x in o){var N=o[x];if(o.hasOwnProperty(x)&&N!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":e=N;default:l.hasOwnProperty(x)||eg(r,g,x,null,l,N)}}for(var $ in l){var x=l[$];if(N=o[$],l.hasOwnProperty($)&&(x!=null||N!=null))switch($){case"type":b=x;break;case"name":w=x;break;case"checked":G=x;break;case"defaultChecked":I=x;break;case"value":H=x;break;case"defaultValue":q=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==N&&eg(r,g,$,x,l,N)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||ie||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),ie=!0),!g||l||Ce||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),Ce=!0),Cu(r,H,q,e,G,I,b,w);return;case"select":x=H=q=$=null;for(b in o)if(e=o[b],o.hasOwnProperty(b)&&e!=null)switch(b){case"value":break;case"multiple":x=e;default:l.hasOwnProperty(b)||eg(r,g,b,null,l,e)}for(w in l)if(b=l[w],e=o[w],l.hasOwnProperty(w)&&(b!=null||e!=null))switch(w){case"value":$=b;break;case"defaultValue":q=b;break;case"multiple":H=b;default:b!==e&&eg(r,g,w,b,l,e)}l=q,g=H,o=x,$!=null?Ch(r,!!g,$,!1):!!o!==!!g&&(l!=null?Ch(r,!!g,l,!0):Ch(r,!!g,g?[]:"",!1));return;case"textarea":x=$=null;for(q in o)if(w=o[q],o.hasOwnProperty(q)&&w!=null&&!l.hasOwnProperty(q))switch(q){case"value":break;case"children":break;default:eg(r,g,q,null,l,w)}for(H in l)if(w=l[H],b=o[H],l.hasOwnProperty(H)&&(w!=null||b!=null))switch(H){case"value":$=w;break;case"defaultValue":x=w;break;case"children":break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:w!==b&&eg(r,g,H,w,l,b)}mq(r,$,x);return;case"option":for(var wr in o)if($=o[wr],o.hasOwnProperty(wr)&&$!=null&&!l.hasOwnProperty(wr))switch(wr){case"selected":r.selected=!1;break;default:eg(r,g,wr,null,l,$)}for(e in l)if($=l[e],x=o[e],l.hasOwnProperty(e)&&$!==x&&($!=null||x!=null))switch(e){case"selected":r.selected=$&&typeof $!=="function"&&typeof $!=="symbol";break;default:eg(r,g,e,$,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Mr in o)$=o[Mr],o.hasOwnProperty(Mr)&&$!=null&&!l.hasOwnProperty(Mr)&&eg(r,g,Mr,null,l,$);for(G in l)if($=l[G],x=o[G],l.hasOwnProperty(G)&&$!==x&&($!=null||x!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:eg(r,g,G,$,l,x)}return;default:if(lw(g)){for(var Qg in o)$=o[Qg],o.hasOwnProperty(Qg)&&$!==void 0&&!l.hasOwnProperty(Qg)&&zO(r,g,Qg,void 0,l,$);for(I in l)$=l[I],x=o[I],!l.hasOwnProperty(I)||$===x||$===void 0&&x===void 0||zO(r,g,I,$,l,x);return}}for(var sr in o)$=o[sr],o.hasOwnProperty(sr)&&$!=null&&!l.hasOwnProperty(sr)&&eg(r,g,sr,null,l,$);for(N in l)$=l[N],x=o[N],!l.hasOwnProperty(N)||$===x||$==null&&x==null||eg(r,g,N,$,l,x)}function n9(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function KO(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];g[l]=r.getPropertyValue(l)}return g}function D9(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,w=l="",b;for(b in g)if(g.hasOwnProperty(b)){var H=g[b];H!=null&&typeof H!=="boolean"&&H!==""&&(b.indexOf("--")===0?(d5(H,b),l+=w+b+":"+(""+H).trim()):typeof H!=="number"||H===0||pW.has(b)?(d5(H,b),l+=w+b.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+(""+H).trim()):l+=w+b.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+H+"px",w=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=n1(l),n1(g)!==l&&(o.style=KO(r)))}}function $0(r,g,o,l,w,b){if(w.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Ag(l,g),r===""+l)return}ho(g,r,l,b)}function t9(r,g,o,l,w,b){if(w.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}ho(g,r,l,b)}function $O(r,g,o,l,w,b){if(w.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Ag(l,o),r===""+l)return}ho(g,r,l,b)}function V9(r,g,o,l,w,b){if(w.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Ag(l,g),r===""+l))return}ho(g,r,l,b)}function UO(r,g,o,l,w,b){if(w.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Ag(l,g),o=hw(""+l),r===o)return}ho(g,r,l,b)}function _9(r,g,o,l){for(var w={},b=new Set,H=r.attributes,q=0;q<H.length;q++)switch(H[q].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(H[q].name)}if(lw(g)){for(var e in o)if(o.hasOwnProperty(e)){var G=o[e];if(G!=null){if(pl.hasOwnProperty(e))typeof G!=="function"&&Qv(e,G);else if(o.suppressHydrationWarning!==!0)switch(e){case"children":typeof G!=="string"&&typeof G!=="number"||ho("children",r.textContent,G,w);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":H=r.innerHTML,G=G?G.__html:void 0,G!=null&&(G=S9(r,G),ho(e,H,G,w));continue;case"style":b.delete(e),D9(r,G,w);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(e.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",e);continue;case"className":b.delete("class"),H=$q(r,"class",G),ho("className",H,G,w);continue;default:l.context===q1&&g!=="svg"&&g!=="math"?b.delete(e.toLowerCase()):b.delete(e),H=$q(r,e,G),ho(e,H,G,w)}}}}else for(G in o)if(o.hasOwnProperty(G)&&(e=o[G],e!=null)){if(pl.hasOwnProperty(G))typeof e!=="function"&&Qv(G,e);else if(o.suppressHydrationWarning!==!0)switch(G){case"children":typeof e!=="string"&&typeof e!=="number"||ho("children",r.textContent,e,w);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":H=r.innerHTML,e=e?e.__html:void 0,e!=null&&(e=S9(r,e),H!==e&&(w[G]={__html:H}));continue;case"className":$0(r,G,"class",e,b,w);continue;case"tabIndex":$0(r,G,"tabindex",e,b,w);continue;case"style":b.delete(G),D9(r,e,w);continue;case"multiple":b.delete(G),ho(G,r.multiple,e,w);continue;case"muted":b.delete(G),ho(G,r.muted,e,w);continue;case"autoFocus":b.delete("autofocus"),ho(G,r.autofocus,e,w);continue;case"data":if(g!=="object"){b.delete(G),H=r.getAttribute("data"),ho(G,H,e,w);continue}case"src":case"href":if(!(e!==""||g==="a"&&G==="href"||g==="object"&&G==="data")){G==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',G,G):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',G,G);continue}UO(r,G,G,e,b,w);continue;case"action":case"formAction":if(H=r.getAttribute(G),typeof e==="function"){b.delete(G.toLowerCase()),G==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(H===r$){b.delete(G.toLowerCase()),ho(G,"function",e,w);continue}UO(r,G,G.toLowerCase(),e,b,w);continue;case"xlinkHref":UO(r,G,"xlink:href",e,b,w);continue;case"contentEditable":$O(r,G,"contenteditable",e,b,w);continue;case"spellCheck":$O(r,G,"spellcheck",e,b,w);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":$O(r,G,G,e,b,w);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t9(r,G,G.toLowerCase(),e,b,w);continue;case"capture":case"download":r:{q=r;var I=H=G,N=w;if(b.delete(I),q=q.getAttribute(I),q===null)switch(typeof e){case"undefined":case"function":case"symbol":break r;default:if(e===!1)break r}else if(e!=null)switch(typeof e){case"function":case"symbol":break;case"boolean":if(e===!0&&q==="")break r;break;default:if(Ag(e,H),q===""+e)break r}ho(H,q,e,N)}continue;case"cols":case"rows":case"size":case"span":r:{if(q=r,I=H=G,N=w,b.delete(I),q=q.getAttribute(I),q===null)switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(e)||1>e)break r}else if(e!=null)switch(typeof e){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(e)||1>e)&&(Ag(e,H),q===""+e))break r}ho(H,q,e,N)}continue;case"rowSpan":V9(r,G,"rowspan",e,b,w);continue;case"start":V9(r,G,G,e,b,w);continue;case"xHeight":$0(r,G,"x-height",e,b,w);continue;case"xlinkActuate":$0(r,G,"xlink:actuate",e,b,w);continue;case"xlinkArcrole":$0(r,G,"xlink:arcrole",e,b,w);continue;case"xlinkRole":$0(r,G,"xlink:role",e,b,w);continue;case"xlinkShow":$0(r,G,"xlink:show",e,b,w);continue;case"xlinkTitle":$0(r,G,"xlink:title",e,b,w);continue;case"xlinkType":$0(r,G,"xlink:type",e,b,w);continue;case"xmlBase":$0(r,G,"xml:base",e,b,w);continue;case"xmlLang":$0(r,G,"xml:lang",e,b,w);continue;case"xmlSpace":$0(r,G,"xml:space",e,b,w);continue;case"inert":e!==""||_6[G]||(_6[G]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",G)),t9(r,G,G,e,b,w);continue;default:if(!(2<G.length)||G[0]!=="o"&&G[0]!=="O"||G[1]!=="n"&&G[1]!=="N"){q=Eq(G),H=!1,l.context===q1&&g!=="svg"&&g!=="math"?b.delete(q.toLowerCase()):(I=G.toLowerCase(),I=o6.hasOwnProperty(I)?o6[I]||null:null,I!==null&&I!==G&&(H=!0,b.delete(I)),b.delete(q));r:if(I=r,N=q,q=e,rw(N))if(I.hasAttribute(N))I=I.getAttribute(N),Ag(q,N),q=I===""+q?q:I;else{switch(typeof q){case"function":case"symbol":break r;case"boolean":if(I=N.toLowerCase().slice(0,5),I!=="data-"&&I!=="aria-")break r}q=q===void 0?void 0:null}else q=void 0;H||ho(G,q,e,w)}}}return 0<b.size&&o.suppressHydrationWarning!==!0&&nQ(r,b,w),Object.keys(w).length===0?null:w}function tQ(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function E9(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VQ(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var w=o[l],b=w.transferSize,H=w.initiatorType,q=w.duration;if(b&&q&&E9(H)){H=0,q=w.responseEnd;for(l+=1;l<o.length;l++){var e=o[l],G=e.startTime;if(G>q)break;var{transferSize:I,initiatorType:N}=e;I&&E9(N)&&(e=e.responseEnd,H+=I*(e<q?1:(q-G)/(e-G)))}if(--l,g+=8*(b+H)/(w.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function S4(r){return r.nodeType===9?r:r.ownerDocument}function y9(r){switch(r){case h5:return T5;case g6:return y6;default:return q1}}function c9(r,g){if(r===q1)switch(g){case"svg":return T5;case"math":return y6;default:return q1}return r===T5&&g==="foreignObject"?q1:r}function LO(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function _Q(){var r=window.event;if(r&&r.type==="popstate"){if(r===OP)return!1;return OP=r,!0}return OP=null,!1}function Nw(){var r=window.event;return r&&r!==Ub?r.type:null}function Bw(){var r=window.event;return r&&r!==Ub?r.timeStamp:-1.1}function EQ(r){setTimeout(function(){throw r})}function yQ(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function cQ(){}function jQ(r,g,o,l){DQ(r,g,o,l),r[xo]=l}function j9(r){vw(r,"")}function fQ(r,g,o){r.nodeValue=o}function f9(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[xo]||null;if(g!==null){var o=xr(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,ur(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,ur(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function D1(r){return r==="head"}function aQ(r,g){r.removeChild(g)}function pQ(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function a9(r,g){var o=g,l=0;do{var w=o.nextSibling;if(r.removeChild(o),w&&w.nodeType===8)if(o=w.data,o===$b||o===E6){if(l===0){r.removeChild(w),sh(g);return}l--}else if(o===Kb||o===Pl||o===eh||o===m5||o===Wh)l++;else if(o===o$)Zw(r.ownerDocument.documentElement);else if(o===l$){o=r.ownerDocument.head,Zw(o);for(var b=o.firstChild;b;){var{nextSibling:H,nodeName:q}=b;b[kw]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=H}}else o===v$&&Zw(r.ownerDocument.body);o=w}while(o);sh(g)}function p9(r,g){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===$b)if(r===0)break;else r--;else o!==Kb&&o!==Pl&&o!==eh&&o!==m5||r++;o=l}while(o)}function dQ(r){p9(r,!0)}function sQ(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function rz(r){r.nodeValue=""}function gz(r){p9(r,!1)}function oz(r,g){g=g[h$],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function vz(r,g){r.nodeValue=g}function FO(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":FO(o),Or(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function lz(r,g,o,l){for(;r.nodeType===1;){var w=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){Ag(w.name,"name");var b=w.name==null?null:""+w.name;if(w.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;else if(!r[kw])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(b!==w.rel||r.getAttribute("href")!==(w.href==null||w.href===""?null:w.href)||r.getAttribute("crossorigin")!==(w.crossOrigin==null?null:w.crossOrigin)||r.getAttribute("title")!==(w.title==null?null:w.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(w.src==null?null:w.src)||r.getAttribute("type")!==(w.type==null?null:w.type)||r.getAttribute("crossorigin")!==(w.crossOrigin==null?null:w.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=O0(r.nextSibling),r===null)break}return null}function hz(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=O0(r.nextSibling),r===null)return null}return r}function d9(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=O0(r.nextSibling),r===null)return null}return r}function IO(r){return r.data===Pl||r.data===eh}function NO(r){return r.data===m5||r.data===Pl&&r.ownerDocument.readyState!==De}function wz(r,g){var o=r.ownerDocument;if(r.data===eh)r._reactRetry=g;else if(r.data!==Pl||o.readyState!==De)g();else{var l=function(){g(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function O0(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Kb||g===m5||g===Pl||g===eh||g===Wh||g===wP||g===ne)break;if(g===$b||g===E6)return null}}return r}function s9(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},l=r.attributes,w=0;w<l.length;w++){var b=l[w];o[n9(b.name)]=b.name.toLowerCase()==="style"?KO(r):b.value}return{type:g,props:o}}return r.nodeType===8?r.data===Wh?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function rW(r,g,o){return o===null||o[g$]!==!0?(r.nodeValue===g?r=null:(g=n1(g),r=n1(r.nodeValue)===g?null:r.nodeValue),r):null}function BO(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===$b||o===E6){if(g===0)return O0(r.nextSibling);g--}else o!==Kb&&o!==m5&&o!==Pl&&o!==eh&&o!==Wh||g++}r=r.nextSibling}return null}function gW(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===Kb||o===m5||o===Pl||o===eh||o===Wh){if(g===0)return r;g--}else o!==$b&&o!==E6||g++}r=r.previousSibling}return null}function bz(r){sh(r)}function uz(r){sh(r)}function Oz(r){sh(r)}function oW(r,g,o,l,w){switch(w&&tu(r,l.ancestorInfo),g=S4(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function Hz(r,g,o,l){if(!o[E1]&&xr(o)){var w=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",w,w,w)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(w=o.attributes;w.length;)o.removeAttributeNode(w[0]);Wo(o,r,g),o[eo]=l,o[xo]=g}function Zw(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);Or(r)}function k4(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function vW(r,g,o){var l=C5;if(l&&typeof g==="string"&&g){var w=K0(g);w='link[rel="'+r+'"][href="'+w+'"]',typeof o==="string"&&(w+='[crossorigin="'+o+'"]'),ce.has(w)||(ce.add(w),r={rel:r,crossOrigin:o,href:g},l.querySelector(w)===null&&(g=l.createElement("link"),Wo(g,"link",r),$r(g),l.head.appendChild(g)))}}function lW(r,g,o,l){var w=(w=V1.current)?k4(w):null;if(!w)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=ph(o.href),g=vg(w).hoistableStyles,l=g.get(o),l||(l={type:"style",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=ph(o.href);var b=vg(w).hoistableStyles,H=b.get(r);if(!H&&(w=w.ownerDocument||w,H={type:"stylesheet",instance:null,count:0,state:{loading:Gh,preload:null}},b.set(r,H),(b=w.querySelector(xw(r)))&&!b._p&&(H.instance=b,H.state.loading=Lb|C0),!i0.has(r))){var q={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};i0.set(r,q),b||Pz(w,r,q,H.state)}if(g&&l===null)throw o=`

  - `+n4(g)+`
  + `+n4(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return H}if(g&&l!==null)throw o=`

  - `+n4(g)+`
  + `+n4(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=dh(o),g=vg(w).hoistableScripts,l=g.get(o),l||(l={type:"script",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function n4(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):V0.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):V0.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):V0.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function ph(r){return'href="'+K0(r)+'"'}function xw(r){return'link[rel="stylesheet"]['+r+"]"}function hW(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function Pz(r,g,o,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=Lb:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=Lb}),g.addEventListener("error",function(){return l.loading|=Ee}),Wo(g,"link",o),$r(g),r.head.appendChild(g))}function dh(r){return'[src="'+K0(r)+'"]'}function mw(r){return"script[async]"+r}function wW(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+K0(o.href)+'"]');if(l)return g.instance=l,$r(l),l;var w=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),$r(l),Wo(l,"style",w),D4(l,o.precedence,r),g.instance=l;case"stylesheet":w=ph(o.href);var b=r.querySelector(xw(w));if(b)return g.state.loading|=C0,g.instance=b,$r(b),b;l=hW(o),(w=i0.get(w))&&ZO(l,w),b=(r.ownerDocument||r).createElement("link"),$r(b);var H=b;return H._p=new Promise(function(q,e){H.onload=q,H.onerror=e}),Wo(b,"link",l),g.state.loading|=C0,D4(b,o.precedence,r),g.instance=b;case"script":if(b=dh(o.src),w=r.querySelector(mw(b)))return g.instance=w,$r(w),w;if(l=o,w=i0.get(b))l=cr({},o),xO(l,w);return r=r.ownerDocument||r,w=r.createElement("script"),$r(w),Wo(w,"link",l),r.head.appendChild(w),g.instance=w;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&C0)===Gh&&(l=g.instance,g.state.loading|=C0,D4(l,o.precedence,r));return g.instance}function D4(r,g,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),w=l.length?l[l.length-1]:null,b=w,H=0;H<l.length;H++){var q=l[H];if(q.dataset.precedence===g)b=q;else if(b!==w)break}b?b.parentNode.insertBefore(r,b.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function ZO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function xO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function bW(r,g,o){if(c6===null){var l=new Map,w=c6=new Map;w.set(o,l)}else w=c6,l=w.get(o),l||(l=new Map,w.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(w=0;w<o.length;w++){var b=o[w];if(!(b[kw]||b[eo]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==h5){var H=b.getAttribute(g)||"";H=r+H;var q=l.get(H);q?q.push(b):l.set(H,[b])}}return l}function uW(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function qz(r,g,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===T5||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:w,disabled:b}=g;o=[],g.onLoad&&o.push("`onLoad`"),w&&o.push("`onError`"),b!=null&&o.push("`disabled`"),w=tQ(o,"and"),w+=o.length===1?" prop":" props",b=o.length===1?"an "+w:"the "+w,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,b,w)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function OW(r){return r.type==="stylesheet"&&(r.state.loading&ye)===Gh?!1:!0}function Az(r,g,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&C0)===Gh){if(o.instance===null){var w=ph(l.href),b=g.querySelector(xw(w));if(b){g=b._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=t4.bind(r),g.then(r,r)),o.state.loading|=C0,o.instance=b,$r(b);return}b=g.ownerDocument||g,l=hW(l),(w=i0.get(w))&&ZO(l,w),b=b.createElement("link"),$r(b);var H=b;H._p=new Promise(function(q,e){H.onload=q,H.onerror=e}),Wo(b,"link",l),o.instance=b}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&ye)===Gh&&(r.count++,o=t4.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function Mz(r,g){return r.stylesheets&&r.count===0&&V4(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&V4(r,r.stylesheets),r.unsuspend){var b=r.unsuspend;r.unsuspend=null,b()}},u$+g);0<r.imgBytes&&PP===0&&(PP=125*VQ()*H$);var w=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&V4(r,r.stylesheets),r.unsuspend)){var b=r.unsuspend;r.unsuspend=null,b()}},(r.imgBytes>PP?50:O$)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(w)}}:null}function t4(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)V4(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function V4(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,j6=new Map,g.forEach(Wz,r),j6=null,t4.call(r))}function Wz(r,g){if(!(g.state.loading&C0)){var o=j6.get(r);if(o)var l=o.get(qP);else{o=new Map,j6.set(r,o);for(var w=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<w.length;b++){var H=w[b];if(H.nodeName==="LINK"||H.getAttribute("media")!=="not all")o.set(H.dataset.precedence,H),l=H}l&&o.set(qP,l)}w=g.instance,H=w.getAttribute("data-precedence"),b=o.get(H)||l,b===l&&o.set(qP,w),o.set(H,w),this.count++,l=t4.bind(this),w.addEventListener("load",l),w.addEventListener("error",l),b?b.parentNode.insertBefore(w,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(w,r.firstChild)),g.state.loading|=C0}}function ez(r,g,o,l,w,b,H,q,e){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Rh,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Th(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Th(0),this.hiddenUpdates=Th(null),this.identifierPrefix=l,this.onUncaughtError=w,this.onCaughtError=b,this.onRecoverableError=H,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=e,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function HW(r,g,o,l,w,b,H,q,e,G,I,N){return r=new ez(r,g,o,H,e,G,I,N,q),g=TK,b===!0&&(g|=Lo|E0),g|=Dr,b=z(3,null,null,g),r.current=b,b.stateNode=r,g=b8(),_l(g),r.pooledCache=g,_l(g),b.memoizedState={element:l,isDehydrated:o,cache:g},q8(b),r}function PW(r){if(!r)return f1;return r=f1,r}function mO(r,g,o,l,w,b){if(Uo&&typeof Uo.onScheduleFiberRoot==="function")try{Uo.onScheduleFiberRoot(v5,l,o)}catch(H){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",H))}w=PW(w),l.context===null?l.context=w:l.pendingContext=w,$v&&P0!==null&&!pe&&(pe=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,S(P0)||"Unknown")),l=m1(g),l.payload={element:o},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),l.callback=b),o=T1(r,l,g),o!==null&&(Hv(g,"root.render()",null),mg(o,r,g),Mw(o,r,g))}function qW(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function TO(r,g){qW(r,g),(r=r.alternate)&&qW(r,g)}function AW(r){if(r.tag===13||r.tag===31){var g=$o(r,67108864);g!==null&&mg(g,r,67108864),TO(r,67108864)}}function MW(r){if(r.tag===13||r.tag===31){var g=u0(r);g=Tl(g);var o=$o(r,g);o!==null&&mg(o,r,g),TO(r,g)}}function Rz(){return P0}function Gz(r,g,o,l){var w=i.T;i.T=null;var b=ug.p;try{ug.p=q0,CO(r,g,o,l)}finally{ug.p=b,i.T=w}}function Xz(r,g,o,l){var w=i.T;i.T=null;var b=ug.p;try{ug.p=_0,CO(r,g,o,l)}finally{ug.p=b,i.T=w}}function CO(r,g,o,l){if(a6){var w=iO(l);if(w===null)JO(r,g,l,p6,o),eW(r,l);else if(Yz(w,r,g,o,l))l.stopPropagation();else if(eW(r,l),g&4&&-1<q$.indexOf(r)){for(;w!==null;){var b=xr(w);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var H=wv(b.pendingLanes);if(H!==0){var q=b;q.pendingLanes|=2;for(q.entangledLanes|=2;H;){var e=1<<31-Zo(H);q.entanglements[1]|=e,H&=~e}Jv(b),(og&(lo|e0))===Oo&&(x6=wo()+$e,Fw(0,!1))}}break;case 31:case 13:q=$o(b,2),q!==null&&mg(q,b,2),jh(),TO(b,2)}if(b=iO(l),b===null&&JO(r,g,l,p6,o),b===w)break;w=b}w!==null&&l.stopPropagation()}else JO(r,g,l,null,o)}}function iO(r){return r=Vu(r),SO(r)}function SO(r){if(p6=null,r=Xr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=qr(g),r!==null)return r;r=null}else if(o===31){if(r=vr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return p6=r,null}function WW(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return q0;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _0;case"message":switch(Iz()){case pO:return q0;case dO:return _0;case o5:case Nz:return Fv;case sO:return s4;default:return Fv}default:return Fv}}function eW(r,g){switch(r){case"focusin":case"focusout":ql=null;break;case"dragenter":case"dragleave":Al=null;break;case"mouseover":case"mouseout":Ml=null;break;case"pointerover":case"pointerout":Ib.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nb.delete(g.pointerId)}}function Tw(r,g,o,l,w,b){if(r===null||r.nativeEvent!==b)return r={blockedOn:g,domEventName:o,eventSystemFlags:l,nativeEvent:b,targetContainers:[w]},g!==null&&(g=xr(g),g!==null&&AW(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,w!==null&&g.indexOf(w)===-1&&g.push(w),r}function Yz(r,g,o,l,w){switch(g){case"focusin":return ql=Tw(ql,r,g,o,l,w),!0;case"dragenter":return Al=Tw(Al,r,g,o,l,w),!0;case"mouseover":return Ml=Tw(Ml,r,g,o,l,w),!0;case"pointerover":var b=w.pointerId;return Ib.set(b,Tw(Ib.get(b)||null,r,g,o,l,w)),!0;case"gotpointercapture":return b=w.pointerId,Nb.set(b,Tw(Nb.get(b)||null,r,g,o,l,w)),!0}return!1}function RW(r){var g=Xr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=qr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MW(o)});return}}else if(g===31){if(g=vr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MW(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _4(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=iO(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),w=l;nw!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),nw=w,o.target.dispatchEvent(l),nw===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),nw=null}else return g=xr(o),g!==null&&AW(g),r.blockedOn=o,!1;g.shift()}return!0}function GW(r,g,o){_4(r)&&o.delete(g)}function Jz(){AP=!1,ql!==null&&_4(ql)&&(ql=null),Al!==null&&_4(Al)&&(Al=null),Ml!==null&&_4(Ml)&&(Ml=null),Ib.forEach(GW),Nb.forEach(GW)}function E4(r,g){r.blockedOn===g&&(r.blockedOn=null,AP||(AP=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,Jz)))}function XW(r){d6!==r&&(d6=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){d6===r&&(d6=null);for(var g=0;g<r.length;g+=3){var o=r[g],l=r[g+1],w=r[g+2];if(typeof l!=="function")if(SO(l||o)===null)continue;else break;var b=xr(o);b!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:w,method:o.method,action:l},Object.freeze(o),S8(b,o,l,w))}}))}function sh(r){function g(e){return E4(e,r)}ql!==null&&E4(ql,r),Al!==null&&E4(Al,r),Ml!==null&&E4(Ml,r),Ib.forEach(g),Nb.forEach(g);for(var o=0;o<Wl.length;o++){var l=Wl[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Wl.length&&(o=Wl[0],o.blockedOn===null);)RW(o),o.blockedOn===null&&Wl.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var w=o[l],b=o[l+1],H=w[xo]||null;if(typeof b==="function")H||XW(o);else if(H){var q=null;if(b&&b.hasAttribute("formAction")){if(w=b,H=b[xo]||null)q=H.formAction;else if(SO(w)!==null)continue}else q=H.action;typeof q==="function"?o[l+1]=q:(o.splice(l,3),l-=3),XW(o)}}}function YW(){function r(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(H){return w=H})},focusReset:"manual",scroll:"manual"})}function g(){w!==null&&(w(),w=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,w=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),w!==null&&(w(),w=null)}}}function kO(r){this._internalRoot=r}function y4(r){this._internalRoot=r}function JW(r){r[E1]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,Qz=Symbol.for("react.element"),zv=Symbol.for("react.transitional.element"),r5=Symbol.for("react.portal"),g5=Symbol.for("react.fragment"),c4=Symbol.for("react.strict_mode"),nO=Symbol.for("react.profiler"),DO=Symbol.for("react.consumer"),Kv=Symbol.for("react.context"),Cw=Symbol.for("react.forward_ref"),tO=Symbol.for("react.suspense"),VO=Symbol.for("react.suspense_list"),j4=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),_O=Symbol.for("react.activity"),zz=Symbol.for("react.memo_cache_sentinel"),QW=Symbol.iterator,Kz=Symbol.for("react.client.reference"),oo=Array.isArray,i=S5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ug=eP.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$z=Object.freeze({pending:!1,data:null,method:null,action:null}),EO=[],yO=[],dv=-1,t1=Jr(null),iw=Jr(null),V1=Jr(null),f4=Jr(null),Sw=0,zW,KW,$W,UW,LW,FW,IW;k.__reactDisabledLog=!0;var cO,NW,jO=!1,fO=new(typeof WeakMap==="function"?WeakMap:Map),P0=null,$v=!1,V0=Object.prototype.hasOwnProperty,aO=lg.unstable_scheduleCallback,Uz=lg.unstable_cancelCallback,Lz=lg.unstable_shouldYield,Fz=lg.unstable_requestPaint,wo=lg.unstable_now,Iz=lg.unstable_getCurrentPriorityLevel,pO=lg.unstable_ImmediatePriority,dO=lg.unstable_UserBlockingPriority,o5=lg.unstable_NormalPriority,Nz=lg.unstable_LowPriority,sO=lg.unstable_IdlePriority,Bz=lg.log,Zz=lg.unstable_setDisableYieldValue,v5=null,Uo=null,Uv=!1,Lv=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Zo=Math.clz32?Math.clz32:i2,xz=Math.log,mz=Math.LN2,a4=256,p4=262144,d4=4194304,q0=2,_0=8,Fv=32,s4=268435456,_1=Math.random().toString(36).slice(2),eo="__reactFiber$"+_1,xo="__reactProps$"+_1,E1="__reactContainer$"+_1,rH="__reactEvents$"+_1,Tz="__reactListeners$"+_1,Cz="__reactHandles$"+_1,BW="__reactResources$"+_1,kw="__reactMarker$"+_1,ZW=new Set,pl={},gH={},iz={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Sz=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xW={},mW={},kz=/[\n"\\]/g,TW=!1,CW=!1,iW=!1,SW=!1,kW=!1,nW=!1,DW=["value","defaultValue"],tW=!1,VW=/["'&<>\n\t]|^\s|\s$/,nz="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),_W="applet caption html table td th marquee object template foreignObject desc title".split(" "),Dz=_W.concat(["button"]),tz="dd dt li option optgroup p rp rt".split(" "),EW={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},r6={},oH={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},yW=/([A-Z])/g,cW=/^ms-/,Vz=/^(?:webkit|moz|o)[A-Z]/,_z=/^-ms-/,Ez=/-(.)/g,jW=/;\s*$/,l5={},vH={},fW=!1,aW=!1,pW=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),g6="http://www.w3.org/1998/Math/MathML",h5="http://www.w3.org/2000/svg",yz=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o6={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},dW={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},w5={},cz=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jz=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sW=!1,mo={},r7=/^on./,fz=/^on[^A-Z]/,az=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pz=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dz=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,nw=null,b5=null,u5=null,lH=!1,Iv=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hH=!1;if(Iv)try{var Dw={};Object.defineProperty(Dw,"passive",{get:function(){hH=!0}}),window.addEventListener("test",Dw,Dw),window.removeEventListener("test",Dw,Dw)}catch(r){hH=!1}var y1=null,wH=null,v6=null,dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l6=Eo(dl),tw=cr({},dl,{view:0,detail:0}),sz=Eo(tw),bH,uH,Vw,h6=cr({},tw,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==Vw&&(Vw&&r.type==="mousemove"?(bH=r.screenX-Vw.screenX,uH=r.screenY-Vw.screenY):uH=bH=0,Vw=r),bH},movementY:function(r){return"movementY"in r?r.movementY:uH}}),g7=Eo(h6),rK=cr({},h6,{dataTransfer:0}),gK=Eo(rK),oK=cr({},tw,{relatedTarget:0}),OH=Eo(oK),vK=cr({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),lK=Eo(vK),hK=cr({},dl,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),wK=Eo(hK),bK=cr({},dl,{data:0}),o7=Eo(bK),uK=o7,OK={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HK={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PK={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},qK=cr({},tw,{key:function(r){if(r.key){var g=OK[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=_2(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?HK[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(r){return r.type==="keypress"?_2(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?_2(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),AK=Eo(qK),MK=cr({},h6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v7=Eo(MK),WK=cr({},tw,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),eK=Eo(WK),RK=cr({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),GK=Eo(RK),XK=cr({},h6,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),YK=Eo(XK),JK=cr({},dl,{newState:0,oldState:0}),QK=Eo(JK),zK=[9,13,27,32],l7=229,HH=Iv&&"CompositionEvent"in window,_w=null;Iv&&"documentMode"in document&&(_w=document.documentMode);var KK=Iv&&"TextEvent"in window&&!_w,h7=Iv&&(!HH||_w&&8<_w&&11>=_w),w7=32,b7=String.fromCharCode(w7),u7=!1,O5=!1,$K={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ew=null,yw=null,O7=!1;Iv&&(O7=yJ("input")&&(!document.documentMode||9<document.documentMode));var To=typeof Object.is==="function"?Object.is:dJ,UK=Iv&&"documentMode"in document&&11>=document.documentMode,H5=null,PH=null,cw=null,qH=!1,P5={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionrun:il("Transition","TransitionRun"),transitionstart:il("Transition","TransitionStart"),transitioncancel:il("Transition","TransitionCancel"),transitionend:il("Transition","TransitionEnd")},AH={},H7={};Iv&&(H7=document.createElement("div").style,("AnimationEvent"in window)||(delete P5.animationend.animation,delete P5.animationiteration.animation,delete P5.animationstart.animation),("TransitionEvent"in window)||delete P5.transitionend.transition);var P7=Sl("animationend"),q7=Sl("animationiteration"),A7=Sl("animationstart"),LK=Sl("transitionrun"),FK=Sl("transitionstart"),IK=Sl("transitioncancel"),M7=Sl("transitionend"),W7=new Map,MH="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");MH.push("scrollEnd");var e7=0;if(typeof performance==="object"&&typeof performance.now==="function")var NK=performance,R7=function(){return NK.now()};else{var BK=Date;R7=function(){return BK.now()}}var WH=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},ZK="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",w6=0,eH=1,RH=2,GH=3,b6="– ",u6="+ ",G7="  ",$g=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",U0="Components ⚛",jr="Scheduler ⚛",fr="Blocking",c1=!1,sv={color:"primary",properties:null,tooltipText:"",track:U0},j1={start:-0,end:-0,detail:{devtools:sv}},xK=["Changed Props",""],X7="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",mK=["Changed Props",X7],jw=1,r1=2,L0=[],q5=0,XH=0,f1={};Object.freeze(f1);var F0=null,A5=null,Fr=0,TK=1,Dr=2,Lo=8,E0=16,CK=32,Y7=!1;try{var J7=Object.preventExtensions({})}catch(r){Y7=!0}var YH=new WeakMap,M5=[],W5=0,O6=null,fw=0,I0=[],N0=0,sl=null,g1=1,o1="",Ro=null,Ug=null,pr=!1,Nv=!1,A0=null,a1=null,B0=!1,JH=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),QH=Jr(null),zH=Jr(null),Q7={},H6=null,e5=null,R5=!1,iK=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},SK=lg.unstable_scheduleCallback,kK=lg.unstable_NormalPriority,jg={$$typeof:Kv,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=lg.unstable_now,P6=console.createTask?console.createTask:function(){return null},aw=1,q6=2,bo=-0,p1=-0,v1=-0,l1=null,Co=-1.1,rh=-0,Bg=-0,Ur=-1.1,Lr=-1.1,Ig=null,Tg=!1,d1=-0,Bv=-1.1,pw=null,s1=0,KH=null,$H=null,gh=-1.1,dw=null,G5=-1.1,A6=-1.1,Zv=-0,h1=-1.1,Z0=-1.1,UH=0,sw=null,z7=null,K7=null,rl=-1.1,oh=null,gl=-1.1,M6=-1.1,$7=-0,U7=-0,W6=0,w1=null,L7=0,rb=-1.1,e6=!1,R6=!1,gb=null,LH=0,vh=0,X5=null,F7=i.S;i.S=function(r,g){if(ze=wo(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>h1&&0>Z0){h1=fg();var o=Bw(),l=Nw();if(o!==gl||l!==oh)gl=-1.1;rl=o,oh=l}hQ(r,g)}F7!==null&&F7(r,g)};var lh=Jr(null),y0={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},ob=[],vb=[],lb=[],hb=[],wb=[],bb=[],hh=new Set;y0.recordUnsafeLifecycleWarnings=function(r,g){hh.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&ob.push(r),r.mode&Lo&&typeof g.UNSAFE_componentWillMount==="function"&&vb.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&lb.push(r),r.mode&Lo&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&hb.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&wb.push(r),r.mode&Lo&&typeof g.UNSAFE_componentWillUpdate==="function"&&bb.push(r))},y0.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<ob.length&&(ob.forEach(function(q){r.add(S(q)||"Component"),hh.add(q.type)}),ob=[]);var g=new Set;0<vb.length&&(vb.forEach(function(q){g.add(S(q)||"Component"),hh.add(q.type)}),vb=[]);var o=new Set;0<lb.length&&(lb.forEach(function(q){o.add(S(q)||"Component"),hh.add(q.type)}),lb=[]);var l=new Set;0<hb.length&&(hb.forEach(function(q){l.add(S(q)||"Component"),hh.add(q.type)}),hb=[]);var w=new Set;0<wb.length&&(wb.forEach(function(q){w.add(S(q)||"Component"),hh.add(q.type)}),wb=[]);var b=new Set;if(0<bb.length&&(bb.forEach(function(q){b.add(S(q)||"Component"),hh.add(q.type)}),bb=[]),0<g.size){var H=R(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,H)}0<l.size&&(H=R(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,H)),0<b.size&&(H=R(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,H)),0<r.size&&(H=R(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H)),0<o.size&&(H=R(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H)),0<w.size&&(H=R(w),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H))};var G6=new Map,I7=new Set;y0.recordLegacyContextWarning=function(r,g){var o=null;for(var l=r;l!==null;)l.mode&Lo&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!I7.has(r.type)&&(l=G6.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],G6.set(o,l)),l.push(r))},y0.flushLegacyContextWarning=function(){G6.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(w){o.add(S(w)||"Component"),I7.add(w.type)});var l=R(o);ur(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},y0.discardPendingWarnings=function(){ob=[],vb=[],lb=[],hb=[],wb=[],bb=[],G6=new Map};var N7={react_stack_bottom_frame:function(r,g,o){var l=$v;$v=!0;try{return r(g,o)}finally{$v=l}}},FH=N7.react_stack_bottom_frame.bind(N7),B7={react_stack_bottom_frame:function(r){var g=$v;$v=!0;try{return r.render()}finally{$v=g}}},Z7=B7.react_stack_bottom_frame.bind(B7),x7={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){bg(r,r.return,o)}}},IH=x7.react_stack_bottom_frame.bind(x7),m7={react_stack_bottom_frame:function(r,g,o,l,w){try{g.componentDidUpdate(o,l,w)}catch(b){bg(r,r.return,b)}}},T7=m7.react_stack_bottom_frame.bind(m7),C7={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},nK=C7.react_stack_bottom_frame.bind(C7),i7={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(l){bg(r,g,l)}}},S7=i7.react_stack_bottom_frame.bind(i7),k7={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},DK=k7.react_stack_bottom_frame.bind(k7),n7={react_stack_bottom_frame:function(r,g,o){try{o()}catch(l){bg(r,g,l)}}},tK=n7.react_stack_bottom_frame.bind(n7),D7={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},VK=D7.react_stack_bottom_frame.bind(D7),Y5=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),NH=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),X6=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Y6={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},wh=null,ub=!1,J5=null,Ob=0,tr=null,BH,t7=BH=!1,V7={},_7={},E7={};J=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=S(r),w=l||"null";if(!V7[w]){V7[w]=!0,o=o._owner,r=r._debugOwner;var b="";r&&typeof r.tag==="number"&&(w=S(r))&&(b=`

Check the render method of \``+w+"`."),b||l&&(b=`

Check the top-level render call using <`+l+">.");var H="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=S(o):typeof o.name==="string"&&(l=o.name),l&&(H=" It was passed a child from "+l+".")),ur(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,H)})}}};var bh=iA(!0),y7=iA(!1),c7=0,j7=1,f7=2,ZH=3,ol=!1,a7=!1,xH=null,mH=!1,Q5=Jr(null),J6=Jr(0),M0=Jr(null),x0=null,z5=1,Hb=2,tg=Jr(0),Q6=0,m0=1,io=2,W0=4,So=8,K5,p7=new Set,d7=new Set,TH=new Set,s7=new Set,b1=0,Ir=null,Rg=null,ag=null,z6=!1,$5=!1,uh=!1,K6=0,Pb=0,u1=null,_K=0,EK=25,T=null,T0=null,O1=-1,qb=!1,Ab={readContext:Fg,use:S1,useCallback:Sg,useContext:Sg,useEffect:Sg,useImperativeHandle:Sg,useLayoutEffect:Sg,useInsertionEffect:Sg,useMemo:Sg,useReducer:Sg,useRef:Sg,useState:Sg,useDebugValue:Sg,useDeferredValue:Sg,useTransition:Sg,useSyncExternalStore:Sg,useId:Sg,useHostTransitionStatus:Sg,useFormState:Sg,useActionState:Sg,useOptimistic:Sg,useMemoCache:Sg,useCacheRefresh:Sg};Ab.useEffectEvent=Sg;var CH=null,re=null,iH=null,ge=null,xv=null,c0=null,$6=null;CH={readContext:function(r){return Fg(r)},use:S1,useCallback:function(r,g){return T="useCallback",yr(),Dh(g),m8(r,g)},useContext:function(r){return T="useContext",yr(),Fg(r)},useEffect:function(r,g){return T="useEffect",yr(),Dh(g),G4(r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",yr(),Dh(o),x8(r,g,o)},useInsertionEffect:function(r,g){T="useInsertionEffect",yr(),Dh(g),yl(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",yr(),Dh(g),Z8(r,g)},useMemo:function(r,g){T="useMemo",yr(),Dh(g);var o=i.H;i.H=xv;try{return T8(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",yr();var l=i.H;i.H=xv;try{return z8(r,g,o)}finally{i.H=l}},useRef:function(r){return T="useRef",yr(),N8(r)},useState:function(r){T="useState",yr();var g=i.H;i.H=xv;try{return L8(r)}finally{i.H=g}},useDebugValue:function(){T="useDebugValue",yr()},useDeferredValue:function(r,g){return T="useDeferredValue",yr(),C8(r,g)},useTransition:function(){return T="useTransition",yr(),k8()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",yr(),$8(r,g,o)},useId:function(){return T="useId",yr(),n8()},useFormState:function(r,g){return T="useFormState",yr(),A4(),Vh(r,g)},useActionState:function(r,g){return T="useActionState",yr(),Vh(r,g)},useOptimistic:function(r){return T="useOptimistic",yr(),F8(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return T="useCacheRefresh",yr(),D8()},useEffectEvent:function(r){return T="useEffectEvent",yr(),B8(r)}},re={readContext:function(r){return Fg(r)},use:S1,useCallback:function(r,g){return T="useCallback",p(),m8(r,g)},useContext:function(r){return T="useContext",p(),Fg(r)},useEffect:function(r,g){return T="useEffect",p(),G4(r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",p(),x8(r,g,o)},useInsertionEffect:function(r,g){T="useInsertionEffect",p(),yl(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",p(),Z8(r,g)},useMemo:function(r,g){T="useMemo",p();var o=i.H;i.H=xv;try{return T8(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",p();var l=i.H;i.H=xv;try{return z8(r,g,o)}finally{i.H=l}},useRef:function(r){return T="useRef",p(),N8(r)},useState:function(r){T="useState",p();var g=i.H;i.H=xv;try{return L8(r)}finally{i.H=g}},useDebugValue:function(){T="useDebugValue",p()},useDeferredValue:function(r,g){return T="useDeferredValue",p(),C8(r,g)},useTransition:function(){return T="useTransition",p(),k8()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",p(),$8(r,g,o)},useId:function(){return T="useId",p(),n8()},useActionState:function(r,g){return T="useActionState",p(),Vh(r,g)},useFormState:function(r,g){return T="useFormState",p(),A4(),Vh(r,g)},useOptimistic:function(r){return T="useOptimistic",p(),F8(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return T="useCacheRefresh",p(),D8()},useEffectEvent:function(r){return T="useEffectEvent",p(),B8(r)}},iH={readContext:function(r){return Fg(r)},use:S1,useCallback:function(r,g){return T="useCallback",p(),J4(r,g)},useContext:function(r){return T="useContext",p(),Fg(r)},useEffect:function(r,g){T="useEffect",p(),yo(2048,So,r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",p(),Y4(r,g,o)},useInsertionEffect:function(r,g){return T="useInsertionEffect",p(),yo(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",p(),yo(4,W0,r,g)},useMemo:function(r,g){T="useMemo",p();var o=i.H;i.H=c0;try{return Q4(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",p();var l=i.H;i.H=c0;try{return th(r,g,o)}finally{i.H=l}},useRef:function(){return T="useRef",p(),Hg().memoizedState},useState:function(){T="useState",p();var r=i.H;i.H=c0;try{return th(D0)}finally{i.H=r}},useDebugValue:function(){T="useDebugValue",p()},useDeferredValue:function(r,g){return T="useDeferredValue",p(),hM(r,g)},useTransition:function(){return T="useTransition",p(),PM()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",p(),W4(r,g,o)},useId:function(){return T="useId",p(),Hg().memoizedState},useFormState:function(r){return T="useFormState",p(),A4(),e4(r)},useActionState:function(r){return T="useActionState",p(),e4(r)},useOptimistic:function(r,g){return T="useOptimistic",p(),fA(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return T="useCacheRefresh",p(),Hg().memoizedState},useEffectEvent:function(r){return T="useEffectEvent",p(),X4(r)}},ge={readContext:function(r){return Fg(r)},use:S1,useCallback:function(r,g){return T="useCallback",p(),J4(r,g)},useContext:function(r){return T="useContext",p(),Fg(r)},useEffect:function(r,g){T="useEffect",p(),yo(2048,So,r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",p(),Y4(r,g,o)},useInsertionEffect:function(r,g){return T="useInsertionEffect",p(),yo(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",p(),yo(4,W0,r,g)},useMemo:function(r,g){T="useMemo",p();var o=i.H;i.H=$6;try{return Q4(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",p();var l=i.H;i.H=$6;try{return Gw(r,g,o)}finally{i.H=l}},useRef:function(){return T="useRef",p(),Hg().memoizedState},useState:function(){T="useState",p();var r=i.H;i.H=$6;try{return Gw(D0)}finally{i.H=r}},useDebugValue:function(){T="useDebugValue",p()},useDeferredValue:function(r,g){return T="useDeferredValue",p(),wM(r,g)},useTransition:function(){return T="useTransition",p(),qM()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",p(),W4(r,g,o)},useId:function(){return T="useId",p(),Hg().memoizedState},useFormState:function(r){return T="useFormState",p(),A4(),R4(r)},useActionState:function(r){return T="useActionState",p(),R4(r)},useOptimistic:function(r,g){return T="useOptimistic",p(),pA(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return T="useCacheRefresh",p(),Hg().memoizedState},useEffectEvent:function(r){return T="useEffectEvent",p(),X4(r)}},xv={readContext:function(r){return Y(),Fg(r)},use:function(r){return W(),S1(r)},useCallback:function(r,g){return T="useCallback",W(),yr(),m8(r,g)},useContext:function(r){return T="useContext",W(),yr(),Fg(r)},useEffect:function(r,g){return T="useEffect",W(),yr(),G4(r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",W(),yr(),x8(r,g,o)},useInsertionEffect:function(r,g){T="useInsertionEffect",W(),yr(),yl(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",W(),yr(),Z8(r,g)},useMemo:function(r,g){T="useMemo",W(),yr();var o=i.H;i.H=xv;try{return T8(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",W(),yr();var l=i.H;i.H=xv;try{return z8(r,g,o)}finally{i.H=l}},useRef:function(r){return T="useRef",W(),yr(),N8(r)},useState:function(r){T="useState",W(),yr();var g=i.H;i.H=xv;try{return L8(r)}finally{i.H=g}},useDebugValue:function(){T="useDebugValue",W(),yr()},useDeferredValue:function(r,g){return T="useDeferredValue",W(),yr(),C8(r,g)},useTransition:function(){return T="useTransition",W(),yr(),k8()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",W(),yr(),$8(r,g,o)},useId:function(){return T="useId",W(),yr(),n8()},useFormState:function(r,g){return T="useFormState",W(),yr(),Vh(r,g)},useActionState:function(r,g){return T="useActionState",W(),yr(),Vh(r,g)},useOptimistic:function(r){return T="useOptimistic",W(),yr(),F8(r)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return T="useCacheRefresh",yr(),D8()},useEffectEvent:function(r){return T="useEffectEvent",W(),yr(),B8(r)}},c0={readContext:function(r){return Y(),Fg(r)},use:function(r){return W(),S1(r)},useCallback:function(r,g){return T="useCallback",W(),p(),J4(r,g)},useContext:function(r){return T="useContext",W(),p(),Fg(r)},useEffect:function(r,g){T="useEffect",W(),p(),yo(2048,So,r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",W(),p(),Y4(r,g,o)},useInsertionEffect:function(r,g){return T="useInsertionEffect",W(),p(),yo(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",W(),p(),yo(4,W0,r,g)},useMemo:function(r,g){T="useMemo",W(),p();var o=i.H;i.H=c0;try{return Q4(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",W(),p();var l=i.H;i.H=c0;try{return th(r,g,o)}finally{i.H=l}},useRef:function(){return T="useRef",W(),p(),Hg().memoizedState},useState:function(){T="useState",W(),p();var r=i.H;i.H=c0;try{return th(D0)}finally{i.H=r}},useDebugValue:function(){T="useDebugValue",W(),p()},useDeferredValue:function(r,g){return T="useDeferredValue",W(),p(),hM(r,g)},useTransition:function(){return T="useTransition",W(),p(),PM()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",W(),p(),W4(r,g,o)},useId:function(){return T="useId",W(),p(),Hg().memoizedState},useFormState:function(r){return T="useFormState",W(),p(),e4(r)},useActionState:function(r){return T="useActionState",W(),p(),e4(r)},useOptimistic:function(r,g){return T="useOptimistic",W(),p(),fA(r,g)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return T="useCacheRefresh",p(),Hg().memoizedState},useEffectEvent:function(r){return T="useEffectEvent",W(),p(),X4(r)}},$6={readContext:function(r){return Y(),Fg(r)},use:function(r){return W(),S1(r)},useCallback:function(r,g){return T="useCallback",W(),p(),J4(r,g)},useContext:function(r){return T="useContext",W(),p(),Fg(r)},useEffect:function(r,g){T="useEffect",W(),p(),yo(2048,So,r,g)},useImperativeHandle:function(r,g,o){return T="useImperativeHandle",W(),p(),Y4(r,g,o)},useInsertionEffect:function(r,g){return T="useInsertionEffect",W(),p(),yo(4,io,r,g)},useLayoutEffect:function(r,g){return T="useLayoutEffect",W(),p(),yo(4,W0,r,g)},useMemo:function(r,g){T="useMemo",W(),p();var o=i.H;i.H=c0;try{return Q4(r,g)}finally{i.H=o}},useReducer:function(r,g,o){T="useReducer",W(),p();var l=i.H;i.H=c0;try{return Gw(r,g,o)}finally{i.H=l}},useRef:function(){return T="useRef",W(),p(),Hg().memoizedState},useState:function(){T="useState",W(),p();var r=i.H;i.H=c0;try{return Gw(D0)}finally{i.H=r}},useDebugValue:function(){T="useDebugValue",W(),p()},useDeferredValue:function(r,g){return T="useDeferredValue",W(),p(),wM(r,g)},useTransition:function(){return T="useTransition",W(),p(),qM()},useSyncExternalStore:function(r,g,o){return T="useSyncExternalStore",W(),p(),W4(r,g,o)},useId:function(){return T="useId",W(),p(),Hg().memoizedState},useFormState:function(r){return T="useFormState",W(),p(),R4(r)},useActionState:function(r){return T="useActionState",W(),p(),R4(r)},useOptimistic:function(r,g){return T="useOptimistic",W(),p(),pA(r,g)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return T="useCacheRefresh",p(),Hg().memoizedState},useEffectEvent:function(r){return T="useEffectEvent",W(),p(),X4(r)}};var oe={},ve=new Set,le=new Set,he=new Set,we=new Set,be=new Set,ue=new Set,Oe=new Set,He=new Set,Pe=new Set,qe=new Set;Object.freeze(oe);var SH={enqueueSetState:function(r,g,o){r=r._reactInternals;var l=u0(r),w=m1(l);w.payload=g,o!==void 0&&o!==null&&(V8(o),w.callback=o),g=T1(r,w,l),g!==null&&(Hv(l,"this.setState()",r),mg(g,r,l),Mw(g,r,l))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var l=u0(r),w=m1(l);w.tag=j7,w.payload=g,o!==void 0&&o!==null&&(V8(o),w.callback=o),g=T1(r,w,l),g!==null&&(Hv(l,"this.replaceState()",r),mg(g,r,l),Mw(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=u0(r),l=m1(o);l.tag=f7,g!==void 0&&g!==null&&(V8(g),l.callback=g),g=T1(r,l,o),g!==null&&(Hv(o,"this.forceUpdate()",r),mg(g,r,o),Mw(g,r,o))}},U5=null,kH=null,nH=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),pg=!1,Ae={},Me={},We={},ee={},L5=!1,Re={},U6={},DH={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Ge=!1,Xe=null;Xe=new Set;var H1=!1,dg=!1,tH=!1,Ye=typeof WeakSet==="function"?WeakSet:Set,uo=null,F5=null,I5=null,sg=null,fo=!1,j0=null,vo=!1,Mb=8192,yK={getCacheForType:function(r){var g=Fg(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Fg(jg).controller.signal},getOwner:function(){return P0}};if(typeof Symbol==="function"&&Symbol.for){var Wb=Symbol.for;Wb("selector.component"),Wb("selector.has_pseudo_class"),Wb("selector.role"),Wb("selector.test_id"),Wb("selector.text")}var cK=[],jK=typeof WeakMap==="function"?WeakMap:Map,Oo=0,lo=2,e0=4,P1=0,eb=1,Oh=2,L6=3,vl=4,F6=6,Je=5,og=Oo,Gg=null,Er=null,Vr=0,ao=0,I6=1,Hh=2,Rb=3,Qe=4,VH=5,Gb=6,N6=7,_H=8,Ph=9,Pg=ao,R0=null,ll=!1,N5=!1,EH=!1,mv=0,Zg=P1,hl=0,wl=0,yH=0,po=0,qh=0,Xb=null,ko=null,B6=!1,Z6=0,ze=0,Ke=300,x6=1/0,$e=500,Yb=null,kg=null,bl=null,m6=0,cH=1,jH=2,Ue=3,ul=0,Le=1,Fe=2,Ie=3,Ne=4,T6=5,ro=0,Ol=null,B5=null,f0=0,fH=0,aH=-0,pH=null,Be=null,Ze=null,a0=m6,xe=null,fK=50,Jb=0,dH=null,sH=!1,C6=!1,aK=50,Ah=0,Qb=null,Z5=!1,i6=null,me=!1,Te=new Set,pK={},S6=null,x5=null,rP=!1,gP=!1,k6=!1,oP=!1,Hl=0,vP={};(function(){for(var r=0;r<MH.length;r++){var g=MH[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),n0(o,"on"+g)}n0(P7,"onAnimationEnd"),n0(q7,"onAnimationIteration"),n0(A7,"onAnimationStart"),n0("dblclick","onDoubleClick"),n0("focusin","onFocus"),n0("focusout","onBlur"),n0(LK,"onTransitionRun"),n0(FK,"onTransitionStart"),n0(IK,"onTransitionCancel"),n0(M7,"onTransitionEnd")})(),g0("onMouseEnter",["mouseout","mouseover"]),g0("onMouseLeave",["mouseout","mouseover"]),g0("onPointerEnter",["pointerout","pointerover"]),g0("onPointerLeave",["pointerout","pointerover"]),Ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ko("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zb)),n6="_reactListening"+Math.random().toString(36).slice(2),Ce=!1,ie=!1,D6=!1,Se=!1,t6=!1,V6=!1,ke=!1,_6={},dK=/\r\n?/g,sK=/\u0000|\uFFFD/g,Mh="http://www.w3.org/1999/xlink",hP="http://www.w3.org/XML/1998/namespace",r$="javascript:throw new Error('React form unexpectedly submitted.')",g$="suppressHydrationWarning",Wh="&",E6="/&",Kb="$",$b="/$",Pl="$?",eh="$~",m5="$!",o$="html",v$="body",l$="head",wP="F!",ne="F",De="loading",h$="style",q1=0,T5=1,y6=2,bP=null,uP=null,te={dialog:!0,webview:!0},OP=null,Ub=void 0,Ve=typeof setTimeout==="function"?setTimeout:void 0,w$=typeof clearTimeout==="function"?clearTimeout:void 0,Rh=-1,_e=typeof Promise==="function"?Promise:void 0,b$=typeof queueMicrotask==="function"?queueMicrotask:typeof _e<"u"?function(r){return _e.resolve(null).then(r).catch(EQ)}:Ve,HP=null,Gh=0,Lb=1,Ee=2,ye=3,C0=4,i0=new Map,ce=new Set,A1=ug.d;ug.d={f:function(){var r=A1.f(),g=jh();return r||g},r:function(r){var g=xr(r);g!==null&&g.tag===5&&g.type==="form"?HM(g):A1.r(r)},D:function(r){A1.D(r),vW("dns-prefetch",r,null)},C:function(r,g){A1.C(r,g),vW("preconnect",r,g)},L:function(r,g,o){A1.L(r,g,o);var l=C5;if(l&&r&&g){var w='link[rel="preload"][as="'+K0(g)+'"]';g==="image"?o&&o.imageSrcSet?(w+='[imagesrcset="'+K0(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(w+='[imagesizes="'+K0(o.imageSizes)+'"]')):w+='[href="'+K0(r)+'"]':w+='[href="'+K0(r)+'"]';var b=w;switch(g){case"style":b=ph(r);break;case"script":b=dh(r)}i0.has(b)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),i0.set(b,r),l.querySelector(w)!==null||g==="style"&&l.querySelector(xw(b))||g==="script"&&l.querySelector(mw(b))||(g=l.createElement("link"),Wo(g,"link",r),$r(g),l.head.appendChild(g)))}},m:function(r,g){A1.m(r,g);var o=C5;if(o&&r){var l=g&&typeof g.as==="string"?g.as:"script",w='link[rel="modulepreload"][as="'+K0(l)+'"][href="'+K0(r)+'"]',b=w;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=dh(r)}if(!i0.has(b)&&(r=cr({rel:"modulepreload",href:r},g),i0.set(b,r),o.querySelector(w)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(mw(b)))return}l=o.createElement("link"),Wo(l,"link",r),$r(l),o.head.appendChild(l)}}},X:function(r,g){A1.X(r,g);var o=C5;if(o&&r){var l=vg(o).hoistableScripts,w=dh(r),b=l.get(w);b||(b=o.querySelector(mw(w)),b||(r=cr({src:r,async:!0},g),(g=i0.get(w))&&xO(r,g),b=o.createElement("script"),$r(b),Wo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(w,b))}},S:function(r,g,o){A1.S(r,g,o);var l=C5;if(l&&r){var w=vg(l).hoistableStyles,b=ph(r);g=g||"default";var H=w.get(b);if(!H){var q={loading:Gh,preload:null};if(H=l.querySelector(xw(b)))q.loading=Lb|C0;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=i0.get(b))&&ZO(r,o);var e=H=l.createElement("link");$r(e),Wo(e,"link",r),e._p=new Promise(function(G,I){e.onload=G,e.onerror=I}),e.addEventListener("load",function(){q.loading|=Lb}),e.addEventListener("error",function(){q.loading|=Ee}),q.loading|=C0,D4(H,g,l)}H={type:"stylesheet",instance:H,count:1,state:q},w.set(b,H)}}},M:function(r,g){A1.M(r,g);var o=C5;if(o&&r){var l=vg(o).hoistableScripts,w=dh(r),b=l.get(w);b||(b=o.querySelector(mw(w)),b||(r=cr({src:r,async:!0,type:"module"},g),(g=i0.get(w))&&xO(r,g),b=o.createElement("script"),$r(b),Wo(b,"link",r),o.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(w,b))}}};var C5=typeof document>"u"?null:document,c6=null,u$=60000,O$=800,H$=500,PP=0,qP=null,j6=null,Xh=$z,Fb={$$typeof:Kv,Provider:null,Consumer:null,_currentValue:Xh,_currentValue2:Xh,_threadCount:0},je="%c%s%c",fe="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",ae="",f6=" ",P$=Function.prototype.bind,pe=!1,de=null,se=null,r3=null,g3=null,o3=null,v3=null,l3=null,h3=null,w3=null,b3=null;de=function(r,g,o,l){g=v(r,g),g!==null&&(o=h(g.memoizedState,o,0,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&mg(o,r,2))},se=function(r,g,o){g=v(r,g),g!==null&&(o=P(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&mg(o,r,2))},r3=function(r,g,o,l){g=v(r,g),g!==null&&(o=u(g.memoizedState,o,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=$o(r,2),o!==null&&mg(o,r,2))},g3=function(r,g,o){r.pendingProps=h(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&mg(g,r,2)},o3=function(r,g){r.pendingProps=P(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&mg(g,r,2)},v3=function(r,g,o){r.pendingProps=u(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$o(r,2),g!==null&&mg(g,r,2)},l3=function(r){var g=$o(r,2);g!==null&&mg(g,r,2)},h3=function(r){var g=mh(),o=$o(r,g);o!==null&&mg(o,r,g)},w3=function(r){M=r},b3=function(r){A=r};var a6=!0,p6=null,AP=!1,ql=null,Al=null,Ml=null,Ib=new Map,Nb=new Map,Wl=[],q$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),d6=null;if(y4.prototype.render=kO.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):y(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=g.current,w=u0(l);mO(l,w,o,g,null,null)},y4.prototype.unmount=kO.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(lo|e0))!==Oo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),mO(r.current,2,null,r,null,null),jh(),g[E1]=null}},y4.prototype.unstable_scheduleHydration=function(r){if(r){var g=Z();r={blockedOn:null,target:r,priority:g};for(var o=0;o<Wl.length&&g!==0&&g<Wl[o].priority;o++);Wl.splice(o,0,r),o===0&&RW(r)}},function(){var r=S5.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),ug.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=s(g),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:i,reconcilerVersion:"19.2.5"};return r.overrideHookState=de,r.overrideHookStateDeletePath=se,r.overrideHookStateRenamePath=r3,r.overrideProps=g3,r.overridePropsDeletePath=o3,r.overridePropsRenamePath=v3,r.scheduleUpdate=l3,r.scheduleRetry=h3,r.setErrorHandler=w3,r.setSuspenseHandler=b3,r.scheduleRefresh=j,r.scheduleRoot=B,r.setRefreshHandler=m,r.getCurrentFiber=Rz,xh(r)}()&&Iv&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var u3=window.location.protocol;/^(https?|file):$/.test(u3)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(u3==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}L$.createRoot=function(r,g){if(!y(r))throw Error("Target container is not a DOM element.");JW(r);var o=!1,l="",w=GM,b=XM,H=YM;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===zv&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(w=g.onUncaughtError),g.onCaughtError!==void 0&&(b=g.onCaughtError),g.onRecoverableError!==void 0&&(H=g.onRecoverableError)),g=HW(r,1,!1,null,null,o,l,null,w,b,H,YW),r[E1]=g.current,YO(r),new kO(g)},L$.hydrateRoot=function(r,g,o){if(!y(r))throw Error("Target container is not a DOM element.");JW(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,w="",b=GM,H=XM,q=YM,e=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(w=o.identifierPrefix),o.onUncaughtError!==void 0&&(b=o.onUncaughtError),o.onCaughtError!==void 0&&(H=o.onCaughtError),o.onRecoverableError!==void 0&&(q=o.onRecoverableError),o.formState!==void 0&&(e=o.formState)),g=HW(r,1,!0,g,o!=null?o:null,l,w,e,b,H,q,YW),g.context=PW(null),o=g.current,l=u0(o),l=Tl(l),w=m1(l),w.callback=null,T1(o,w,l),Hv(l,"hydrateRoot()",null),o=l,g.current.lanes=o,L1(g,o),Jv(g),r[E1]=g.current,YO(r),new y4(g)},L$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var M3=Yh((EZ,A3)=>{A3.exports=q3()});var rg=Yh((DU)=>{var Uh=Ar(hg());(function(){function v(k){if(k==null)return null;if(typeof k==="function")return k.$$typeof===S?null:k.displayName||k.name||null;if(typeof k==="string")return k;switch(k){case m:return"Fragment";case rr:return"Profiler";case y:return"StrictMode";case s:return"Suspense";case lr:return"SuspenseList";case c:return"Activity"}if(typeof k==="object")switch(typeof k.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),k.$$typeof){case j:return"Portal";case vr:return k.displayName||"Context";case qr:return(k._context.displayName||"Context")+".Consumer";case a:var n=k.render;return k=k.displayName,k||(k=n.displayName||n.name||"",k=k!==""?"ForwardRef("+k+")":"ForwardRef"),k;case C:return n=k.displayName||null,n!==null?n:v(k.type)||"Memo";case V:n=k._payload,k=k._init;try{return v(k(n))}catch(Pr){}}return null}function h(k){return""+k}function u(k){try{h(k);var n=!1}catch(Gr){n=!0}if(n){n=console;var Pr=n.error,zr=typeof Symbol==="function"&&Symbol.toStringTag&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Pr.call(n,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",zr),h(k)}}function O(k){if(k===m)return"<>";if(typeof k==="object"&&k!==null&&k.$$typeof===V)return"<...>";try{var n=v(k);return n?"<"+n+">":"<...>"}catch(Pr){return"<...>"}}function P(){var k=Jr.A;return k===null?null:k.getOwner()}function A(){return Error("react-stack-top-frame")}function M(k){if(Rr.call(k,"key")){var n=Object.getOwnPropertyDescriptor(k,"key").get;if(n&&n.isReactWarning)return!1}return k.key!==void 0}function W(k,n){function Pr(){D||(D=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",n))}Pr.isReactWarning=!0,Object.defineProperty(k,"key",{get:Pr,configurable:!0})}function Y(){var k=v(this.type);return d[k]||(d[k]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),k=this.props.ref,k!==void 0?k:null}function Q(k,n,Pr,zr,Gr,ir){var br=Pr.ref;return k={$$typeof:B,type:k,key:n,props:Pr,_owner:zr},(br!==void 0?br:null)!==null?Object.defineProperty(k,"ref",{enumerable:!1,get:Y}):Object.defineProperty(k,"ref",{enumerable:!1,value:null}),k._store={},Object.defineProperty(k._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(k,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(k,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Gr}),Object.defineProperty(k,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ir}),Object.freeze&&(Object.freeze(k.props),Object.freeze(k)),k}function J(k,n,Pr,zr,Gr,ir){var br=n.children;if(br!==void 0)if(zr)if(Qr(br)){for(zr=0;zr<br.length;zr++)R(br[zr]);Object.freeze&&Object.freeze(br)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else R(br);if(Rr.call(n,"key")){br=v(k);var Sr=Object.keys(n).filter(function(Xg){return Xg!=="key"});zr=0<Sr.length?"{key: someKey, "+Sr.join(": ..., ")+": ...}":"{key: someKey}",er[br+zr]||(Sr=0<Sr.length?"{"+Sr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,zr,br,Sr,br),er[br+zr]=!0)}if(br=null,Pr!==void 0&&(u(Pr),br=""+Pr),M(n)&&(u(n.key),br=""+n.key),"key"in n){Pr={};for(var ar in n)ar!=="key"&&(Pr[ar]=n[ar])}else Pr=n;return br&&W(Pr,typeof k==="function"?k.displayName||k.name||"Unknown":k),Q(k,br,Pr,P(),Gr,ir)}function R(k){z(k)?k._store&&(k._store.validated=1):typeof k==="object"&&k!==null&&k.$$typeof===V&&(k._payload.status==="fulfilled"?z(k._payload.value)&&k._payload.value._store&&(k._payload.value._store.validated=1):k._store&&(k._store.validated=1))}function z(k){return typeof k==="object"&&k!==null&&k.$$typeof===B}var B=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),qr=Symbol.for("react.consumer"),vr=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),c=Symbol.for("react.activity"),S=Symbol.for("react.client.reference"),Jr=Uh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rr=Object.prototype.hasOwnProperty,Qr=Array.isArray,Cr=console.createTask?console.createTask:function(){return null};Uh={react_stack_bottom_frame:function(k){return k()}};var D,d={},hr=Uh.react_stack_bottom_frame.bind(Uh,A)(),or=Cr(O(A)),er={};DU.Fragment=m,DU.jsxDEV=function(k,n,Pr,zr){var Gr=1e4>Jr.recentlyCreatedOwnerStacks++;return J(k,n,Pr,zr,Gr?Error("react-stack-top-frame"):hr,Gr?Cr(O(k)):or)}})()});var zq=Ar(hg(),1),Kq=Ar(M3(),1);var W3=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var e3=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var R3=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var G3=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var X3=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var Y3=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var J3=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var Q3=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var z3=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var K3=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var $3=W3+e3+R3+G3+X3+Y3+J3+Q3+z3+K3;var Kg=Ar(hg(),1);var ou=Ar(hg(),1);var ru=(...v)=>v.filter((h,u,O)=>{return Boolean(h)&&h.trim()!==""&&O.indexOf(h)===u}).join(" ").trim();var U3=(v)=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var L3=(v)=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,u,O)=>O?O.toUpperCase():u.toLowerCase());var RP=(v)=>{let h=L3(v);return h.charAt(0).toUpperCase()+h.slice(1)};var Bb=Ar(hg(),1);var gu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var F3=(v)=>{for(let h in v)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};var k5=Ar(hg(),1),S$=k5.createContext({});var I3=()=>k5.useContext(S$);var N3=Bb.forwardRef(({color:v,size:h,strokeWidth:u,absoluteStrokeWidth:O,className:P="",children:A,iconNode:M,...W},Y)=>{let{size:Q=24,strokeWidth:J=2,absoluteStrokeWidth:R=!1,color:z="currentColor",className:B=""}=I3()??{},j=O??R?Number(u??J)*24/Number(h??Q):u??J;return Bb.createElement("svg",{ref:Y,...gu,width:h??Q??gu.width,height:h??Q??gu.height,stroke:v??z,strokeWidth:j,className:ru("lucide",B,P),...!A&&!F3(W)&&{"aria-hidden":"true"},...W},[...M.map(([m,y])=>Bb.createElement(m,y)),...Array.isArray(A)?A:[A]])});var E=(v,h)=>{let u=ou.forwardRef(({className:O,...P},A)=>ou.createElement(N3,{ref:A,iconNode:h,className:ru(`lucide-${U3(RP(v))}`,`lucide-${v}`,O),...P}));return u.displayName=RP(v),u};var k$=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Tv=E("braces",k$);var n$=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],el=E("chart-column",n$);var D$=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Go=E("code-xml",D$);var t$=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Cv=E("file-code-corner",t$);var V$=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Rl=E("layers",V$);var _$=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Gl=E("loader-circle",_$);var E$=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],S0=E("triangle-alert",E$);var y$=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Xl=E("user-round",y$);var c$=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zb=E("activity",c$);var j$=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],xb=E("arrow-down-to-line",j$);var f$=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],mb=E("arrow-up-to-line",f$);var a$=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Tb=E("blocks",a$);var p$=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Qh=E("book-marked",p$);var d$=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cb=E("book-open",d$);var s$=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ib=E("calendar",s$);var rU=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sb=E("check",rU);var gU=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xo=E("chevron-down",gU);var oU=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kb=E("chevron-left",oU);var vU=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],W1=E("chevron-right",vU);var lU=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],G0=E("chevron-up",lU);var hU=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],nb=E("chevrons-up-down",hU);var wU=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Db=E("clock",wU);var bU=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],p0=E("copy",bU);var uU=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],d0=E("database",uU);var OU=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],zh=E("download",OU);var HU=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tb=E("eye",HU);var PU=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Kh=E("folder-open",PU);var qU=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Vb=E("hash",qU);var AU=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],_b=E("link-2",AU);var MU=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],Eb=E("list-ordered",MU);var WU=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],yb=E("list",WU);var eU=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],cb=E("lock",eU);var RU=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],n5=E("message-square-plus",RU);var GU=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],jb=E("message-square",GU);var XU=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fb=E("package",XU);var YU=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],s0=E("pencil",YU);var JU=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ab=E("play",JU);var QU=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pb=E("plus",QU);var zU=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],db=E("radio",zU);var KU=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],e1=E("refresh-cw",KU);var $U=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],sb=E("save",$U);var UU=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Yl=E("search",UU);var LU=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],D5=E("shield-alert",LU);var FU=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],r2=E("shield",FU);var IU=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],g2=E("syringe",IU);var NU=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],iv=E("terminal",NU);var BU=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],$h=E("timer",BU);var ZU=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],o2=E("toggle-left",ZU);var xU=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v2=E("toggle-right",xU);var mU=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Fo=E("trash-2",mU);var TU=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],l2=E("type",TU);var CU=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],h2=E("upload",CU);var iU=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],t5=E("user-plus",iU);var SU=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],w2=E("wrench",SU);var kU=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],no=E("x",kU);var nU=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],R1=E("zap",nU);var vu={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Bu=Ar(hg(),1);var K2=Ar(hg(),1);var Cg=Ar(rg(),1),tU={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},B3=({script:v,selected:h,dot:u,duration:O,onSelect:P,onEdit:A,sendToBackend:M})=>{let W=(z)=>{z.stopPropagation(),M({type:"update_script",id:v.id,patch:{enabled:!v.enabled}})},Y=(z)=>{z.stopPropagation(),M({type:"duplicate_script",id:v.id})},Q=(z)=>{if(z.stopPropagation(),!window.confirm(`Delete "${v.name}"?`))return;M({type:"delete_script",id:v.id})},J=(z)=>{z.stopPropagation(),A()},R=v.bindings?.length??0;return Cg.jsxDEV("div",{className:`ls-item${h?" ls-selected":""}${!v.enabled&&v.type!=="library"?" ls-disabled":""}`,onClick:P,children:[Cg.jsxDEV("span",{className:tU[u],title:u},void 0,!1,void 0,this),Cg.jsxDEV("div",{className:"ls-item-body",children:[Cg.jsxDEV("div",{className:"ls-item-name",title:v.name,children:v.name},void 0,!1,void 0,this),Cg.jsxDEV("div",{className:"ls-item-meta",children:[v.type!=="library"&&Cg.jsxDEV("span",{children:v.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),O!==void 0&&u!=="running"&&Cg.jsxDEV("span",{style:{color:u==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[O,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.type!=="library"&&R>0&&Cg.jsxDEV("div",{className:"ls-item-bindings",children:v.bindings.map((z,B)=>Cg.jsxDEV("span",{className:"ls-binding-badge",children:[z.type==="character"?Cg.jsxDEV(Xl,{size:9},void 0,!1,void 0,this):Cg.jsxDEV(jb,{size:9},void 0,!1,void 0,this),Cg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.displayName},void 0,!1,void 0,this)]},B,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cg.jsxDEV("div",{className:"ls-item-actions",children:[Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:J,title:"Edit script",children:Cg.jsxDEV(s0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),v.type!=="library"&&Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:v.enabled?"Disable":"Enable",children:v.enabled?Cg.jsxDEV(v2,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Cg.jsxDEV(o2,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Cg.jsxDEV("button",{className:"ls-icon-btn",onClick:Y,title:"Duplicate",children:Cg.jsxDEV(p0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Cg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:Q,title:"Delete",children:Cg.jsxDEV(Fo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var ig=Uint8Array,X0=Uint16Array,FP=Int32Array,hu=new ig([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wu=new ig([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),QP=new ig([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i3=function(v,h){var u=new X0(31);for(var O=0;O<31;++O)u[O]=h+=1<<v[O-1];var P=new FP(u[30]);for(var O=1;O<30;++O)for(var A=u[O];A<u[O+1];++A)P[A]=A-u[O]<<5|O;return{b:u,r:P}},S3=i3(hu,2),k3=S3.b,zP=S3.r;k3[28]=258,zP[258]=28;var n3=i3(wu,0),VU=n3.b,Z3=n3.r,KP=new X0(32768);for(gg=0;gg<32768;++gg)Sv=(gg&43690)>>1|(gg&21845)<<1,Sv=(Sv&52428)>>2|(Sv&13107)<<2,Sv=(Sv&61680)>>4|(Sv&3855)<<4,KP[gg]=((Sv&65280)>>8|(Sv&255)<<8)>>1;var Sv,gg,nv=function(v,h,u){var O=v.length,P=0,A=new X0(h);for(;P<O;++P)if(v[P])++A[v[P]-1];var M=new X0(h);for(P=1;P<h;++P)M[P]=M[P-1]+A[P-1]<<1;var W;if(u){W=new X0(1<<h);var Y=15-h;for(P=0;P<O;++P)if(v[P]){var Q=P<<4|v[P],J=h-v[P],R=M[v[P]-1]++<<J;for(var z=R|(1<<J)-1;R<=z;++R)W[KP[R]>>Y]=Q}}else{W=new X0(O);for(P=0;P<O;++P)if(v[P])W[P]=KP[M[v[P]-1]++]>>15-v[P]}return W},Jl=new ig(288);for(gg=0;gg<144;++gg)Jl[gg]=8;var gg;for(gg=144;gg<256;++gg)Jl[gg]=9;var gg;for(gg=256;gg<280;++gg)Jl[gg]=7;var gg;for(gg=280;gg<288;++gg)Jl[gg]=8;var gg,O2=new ig(32);for(gg=0;gg<32;++gg)O2[gg]=5;var gg,_U=nv(Jl,9,0),EU=nv(Jl,9,1),yU=nv(O2,5,0),cU=nv(O2,5,1),GP=function(v){var h=v[0];for(var u=1;u<v.length;++u)if(v[u]>h)h=v[u];return h},rv=function(v,h,u){var O=h/8|0;return(v[O]|v[O+1]<<8)>>(h&7)&u},XP=function(v,h){var u=h/8|0;return(v[u]|v[u+1]<<8|v[u+2]<<16)>>(h&7)},IP=function(v){return(v+7)/8|0},H2=function(v,h,u){if(h==null||h<0)h=0;if(u==null||u>v.length)u=v.length;return new ig(v.subarray(h,u))};var jU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Do=function(v,h,u){var O=Error(h||jU[v]);if(O.code=v,Error.captureStackTrace)Error.captureStackTrace(O,Do);if(!u)throw O;return O},fU=function(v,h,u,O){var P=v.length,A=O?O.length:0;if(!P||h.f&&!h.l)return u||new ig(0);var M=!u,W=M||h.i!=2,Y=h.i;if(M)u=new ig(P*3);var Q=function(ur){var _o=u.length;if(ur>_o){var zo=new ig(Math.max(_o*2,ur));zo.set(u),u=zo}},J=h.f||0,R=h.p||0,z=h.b||0,B=h.l,j=h.d,m=h.m,y=h.n,rr=P*8;do{if(!B){J=rv(v,R,1);var qr=rv(v,R+1,3);if(R+=3,!qr){var vr=IP(R)+4,a=v[vr-4]|v[vr-3]<<8,s=vr+a;if(s>P){if(Y)Do(0);break}if(W)Q(z+a);u.set(v.subarray(vr,s),z),h.b=z+=a,h.p=R=s*8,h.f=J;continue}else if(qr==1)B=EU,j=cU,m=9,y=5;else if(qr==2){var lr=rv(v,R,31)+257,C=rv(v,R+10,15)+4,V=lr+rv(v,R+5,31)+1;R+=14;var c=new ig(V),S=new ig(19);for(var Jr=0;Jr<C;++Jr)S[QP[Jr]]=rv(v,R+Jr*3,7);R+=C*3;var Rr=GP(S),Qr=(1<<Rr)-1,Cr=nv(S,Rr,1);for(var Jr=0;Jr<V;){var D=Cr[rv(v,R,Qr)];R+=D&15;var vr=D>>4;if(vr<16)c[Jr++]=vr;else{var d=0,hr=0;if(vr==16)hr=3+rv(v,R,3),R+=2,d=c[Jr-1];else if(vr==17)hr=3+rv(v,R,7),R+=3;else if(vr==18)hr=11+rv(v,R,127),R+=7;while(hr--)c[Jr++]=d}}var or=c.subarray(0,lr),er=c.subarray(lr);m=GP(or),y=GP(er),B=nv(or,m,1),j=nv(er,y,1)}else Do(1);if(R>rr){if(Y)Do(0);break}}if(W)Q(z+131072);var k=(1<<m)-1,n=(1<<y)-1,Pr=R;for(;;Pr=R){var d=B[XP(v,R)&k],zr=d>>4;if(R+=d&15,R>rr){if(Y)Do(0);break}if(!d)Do(2);if(zr<256)u[z++]=zr;else if(zr==256){Pr=R,B=null;break}else{var Gr=zr-254;if(zr>264){var Jr=zr-257,ir=hu[Jr];Gr=rv(v,R,(1<<ir)-1)+k3[Jr],R+=ir}var br=j[XP(v,R)&n],Sr=br>>4;if(!br)Do(3);R+=br&15;var er=VU[Sr];if(Sr>3){var ir=wu[Sr];er+=XP(v,R)&(1<<ir)-1,R+=ir}if(R>rr){if(Y)Do(0);break}if(W)Q(z+131072);var ar=z+Gr;if(z<er){var Xg=A-er,No=Math.min(er,ar);if(Xg+z<0)Do(3);for(;z<No;++z)u[z]=O[Xg+z]}for(;z<ar;++z)u[z]=u[z-er]}}if(h.l=B,h.p=Pr,h.b=z,h.f=J,B)J=1,h.m=m,h.d=j,h.n=y}while(!J);return z!=u.length&&M?H2(u,0,z):u.subarray(0,z)},G1=function(v,h,u){u<<=h&7;var O=h/8|0;v[O]|=u,v[O+1]|=u>>8},b2=function(v,h,u){u<<=h&7;var O=h/8|0;v[O]|=u,v[O+1]|=u>>8,v[O+2]|=u>>16},YP=function(v,h){var u=[];for(var O=0;O<v.length;++O)if(v[O])u.push({s:O,f:v[O]});var P=u.length,A=u.slice();if(!P)return{t:t3,l:0};if(P==1){var M=new ig(u[0].s+1);return M[u[0].s]=1,{t:M,l:1}}u.sort(function(s,lr){return s.f-lr.f}),u.push({s:-1,f:25001});var W=u[0],Y=u[1],Q=0,J=1,R=2;u[0]={s:-1,f:W.f+Y.f,l:W,r:Y};while(J!=P-1)W=u[u[Q].f<u[R].f?Q++:R++],Y=u[Q!=J&&u[Q].f<u[R].f?Q++:R++],u[J++]={s:-1,f:W.f+Y.f,l:W,r:Y};var z=A[0].s;for(var O=1;O<P;++O)if(A[O].s>z)z=A[O].s;var B=new X0(z+1),j=$P(u[J-1],B,0);if(j>h){var O=0,m=0,y=j-h,rr=1<<y;A.sort(function(lr,C){return B[C.s]-B[lr.s]||lr.f-C.f});for(;O<P;++O){var qr=A[O].s;if(B[qr]>h)m+=rr-(1<<j-B[qr]),B[qr]=h;else break}m>>=y;while(m>0){var vr=A[O].s;if(B[vr]<h)m-=1<<h-B[vr]++-1;else++O}for(;O>=0&&m;--O){var a=A[O].s;if(B[a]==h)--B[a],++m}j=h}return{t:new ig(B),l:j}},$P=function(v,h,u){return v.s==-1?Math.max($P(v.l,h,u+1),$P(v.r,h,u+1)):h[v.s]=u},x3=function(v){var h=v.length;while(h&&!v[--h]);var u=new X0(++h),O=0,P=v[0],A=1,M=function(Y){u[O++]=Y};for(var W=1;W<=h;++W)if(v[W]==P&&W!=h)++A;else{if(!P&&A>2){for(;A>138;A-=138)M(32754);if(A>2)M(A>10?A-11<<5|28690:A-3<<5|12305),A=0}else if(A>3){M(P),--A;for(;A>6;A-=6)M(8304);if(A>2)M(A-3<<5|8208),A=0}while(A--)M(P);A=1,P=v[W]}return{c:u.subarray(0,O),n:h}},u2=function(v,h){var u=0;for(var O=0;O<h.length;++O)u+=v[O]*h[O];return u},D3=function(v,h,u){var O=u.length,P=IP(h+2);v[P]=O&255,v[P+1]=O>>8,v[P+2]=v[P]^255,v[P+3]=v[P+1]^255;for(var A=0;A<O;++A)v[P+A+4]=u[A];return(P+4+O)*8},m3=function(v,h,u,O,P,A,M,W,Y,Q,J){G1(h,J++,u),++P[256];var R=YP(P,15),z=R.t,B=R.l,j=YP(A,15),m=j.t,y=j.l,rr=x3(z),qr=rr.c,vr=rr.n,a=x3(m),s=a.c,lr=a.n,C=new X0(19);for(var V=0;V<qr.length;++V)++C[qr[V]&31];for(var V=0;V<s.length;++V)++C[s[V]&31];var c=YP(C,7),S=c.t,Jr=c.l,Rr=19;for(;Rr>4&&!S[QP[Rr-1]];--Rr);var Qr=Q+5<<3,Cr=u2(P,Jl)+u2(A,O2)+M,D=u2(P,z)+u2(A,m)+M+14+3*Rr+u2(C,S)+2*C[16]+3*C[17]+7*C[18];if(Y>=0&&Qr<=Cr&&Qr<=D)return D3(h,J,v.subarray(Y,Y+Q));var d,hr,or,er;if(G1(h,J,1+(D<Cr)),J+=2,D<Cr){d=nv(z,B,0),hr=z,or=nv(m,y,0),er=m;var k=nv(S,Jr,0);G1(h,J,vr-257),G1(h,J+5,lr-1),G1(h,J+10,Rr-4),J+=14;for(var V=0;V<Rr;++V)G1(h,J+3*V,S[QP[V]]);J+=3*Rr;var n=[qr,s];for(var Pr=0;Pr<2;++Pr){var zr=n[Pr];for(var V=0;V<zr.length;++V){var Gr=zr[V]&31;if(G1(h,J,k[Gr]),J+=S[Gr],Gr>15)G1(h,J,zr[V]>>5&127),J+=zr[V]>>12}}}else d=_U,hr=Jl,or=yU,er=O2;for(var V=0;V<W;++V){var ir=O[V];if(ir>255){var Gr=ir>>18&31;if(b2(h,J,d[Gr+257]),J+=hr[Gr+257],Gr>7)G1(h,J,ir>>23&31),J+=hu[Gr];var br=ir&31;if(b2(h,J,or[br]),J+=er[br],br>3)b2(h,J,ir>>5&8191),J+=wu[br]}else b2(h,J,d[ir]),J+=hr[ir]}return b2(h,J,d[256]),J+hr[256]},aU=new FP([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),t3=new ig(0),pU=function(v,h,u,O,P,A){var M=A.z||v.length,W=new ig(O+M+5*(1+Math.ceil(M/7000))+P),Y=W.subarray(O,W.length-P),Q=A.l,J=(A.r||0)&7;if(h){if(J)Y[0]=A.r>>3;var R=aU[h-1],z=R>>13,B=R&8191,j=(1<<u)-1,m=A.p||new X0(32768),y=A.h||new X0(j+1),rr=Math.ceil(u/3),qr=2*rr,vr=function(r0){return(v[r0]^v[r0+1]<<rr^v[r0+2]<<qr)&j},a=new FP(25000),s=new X0(288),lr=new X0(32),C=0,V=0,c=A.i||0,S=0,Jr=A.w||0,Rr=0;for(;c+2<M;++c){var Qr=vr(c),Cr=c&32767,D=y[Qr];if(m[Cr]=D,y[Qr]=Cr,Jr<=c){var d=M-c;if((C>7000||S>24576)&&(d>423||!Q)){J=m3(v,Y,0,a,s,lr,V,S,Rr,c-Rr,J),S=C=V=0,Rr=c;for(var hr=0;hr<286;++hr)s[hr]=0;for(var hr=0;hr<30;++hr)lr[hr]=0}var or=2,er=0,k=B,n=Cr-D&32767;if(d>2&&Qr==vr(c-n)){var Pr=Math.min(z,d)-1,zr=Math.min(32767,c),Gr=Math.min(258,d);while(n<=zr&&--k&&Cr!=D){if(v[c+or]==v[c+or-n]){var ir=0;for(;ir<Gr&&v[c+ir]==v[c+ir-n];++ir);if(ir>or){if(or=ir,er=n,ir>Pr)break;var br=Math.min(n,ir-2),Sr=0;for(var hr=0;hr<br;++hr){var ar=c-n+hr&32767,Xg=m[ar],No=ar-Xg&32767;if(No>Sr)Sr=No,D=ar}}}Cr=D,D=m[Cr],n+=Cr-D&32767}}if(er){a[S++]=268435456|zP[or]<<18|Z3[er];var ur=zP[or]&31,_o=Z3[er]&31;V+=hu[ur]+wu[_o],++s[257+ur],++lr[_o],Jr=c+or,++C}else a[S++]=v[c],++s[v[c]]}}for(c=Math.max(c,Jr);c<M;++c)a[S++]=v[c],++s[v[c]];if(J=m3(v,Y,Q,a,s,lr,V,S,Rr,c-Rr,J),!Q)A.r=J&7|Y[J/8|0]<<3,J-=7,A.h=y,A.p=m,A.i=c,A.w=Jr}else{for(var c=A.w||0;c<M+Q;c+=65535){var zo=c+65535;if(zo>=M)Y[J/8|0]=Q,zo=M;J=D3(Y,J+1,v.subarray(c,zo))}A.i=M}return H2(W,0,O+IP(J)+P)},dU=function(){var v=new Int32Array(256);for(var h=0;h<256;++h){var u=h,O=9;while(--O)u=(u&1&&-306674912)^u>>>1;v[h]=u}return v}(),sU=function(){var v=-1;return{p:function(h){var u=v;for(var O=0;O<h.length;++O)u=dU[u&255^h[O]]^u>>>8;v=u},d:function(){return~v}}};var rL=function(v,h,u,O,P){if(!P){if(P={l:1},h.dictionary){var A=h.dictionary.subarray(-32768),M=new ig(A.length+v.length);M.set(A),M.set(v,A.length),v=M,P.w=A.length}}return pU(v,h.level==null?6:h.level,h.mem==null?P.l?Math.ceil(Math.max(8,Math.min(13,Math.log(v.length)))*1.5):20:12+h.mem,u,O,P)},V3=function(v,h){var u={};for(var O in v)u[O]=v[O];for(var O in h)u[O]=h[O];return u};var kv=function(v,h){return v[h]|v[h+1]<<8},gv=function(v,h){return(v[h]|v[h+1]<<8|v[h+2]<<16|v[h+3]<<24)>>>0},JP=function(v,h){return gv(v,h)+gv(v,h+4)*4294967296},Yo=function(v,h,u){for(;u;++h)v[h]=u,u>>>=8};function gL(v,h){return rL(v,h||{},0,0)}function oL(v,h){return fU(v,{i:2},h&&h.out,h&&h.dictionary)}var _3=function(v,h,u,O){for(var P in v){var A=v[P],M=h+P,W=O;if(Array.isArray(A))W=V3(O,A[1]),A=A[0];if(A instanceof ig)u[M]=[A,W];else u[M+="/"]=[new ig(0),W],_3(A,M,u,O)}},T3=typeof TextEncoder<"u"&&new TextEncoder,UP=typeof TextDecoder<"u"&&new TextDecoder,vL=0;try{UP.decode(t3,{stream:!0}),vL=1}catch(v){}var lL=function(v){for(var h="",u=0;;){var O=v[u++],P=(O>127)+(O>223)+(O>239);if(u+P>v.length)return{s:h,r:H2(v,u-1)};if(!P)h+=String.fromCharCode(O);else if(P==3)O=((O&15)<<18|(v[u++]&63)<<12|(v[u++]&63)<<6|v[u++]&63)-65536,h+=String.fromCharCode(55296|O>>10,56320|O&1023);else if(P&1)h+=String.fromCharCode((O&31)<<6|v[u++]&63);else h+=String.fromCharCode((O&15)<<12|(v[u++]&63)<<6|v[u++]&63)}};function lu(v,h){if(h){var u=new ig(v.length);for(var O=0;O<v.length;++O)u[O]=v.charCodeAt(O);return u}if(T3)return T3.encode(v);var P=v.length,A=new ig(v.length+(v.length>>1)),M=0,W=function(J){A[M++]=J};for(var O=0;O<P;++O){if(M+5>A.length){var Y=new ig(M+8+(P-O<<1));Y.set(A),A=Y}var Q=v.charCodeAt(O);if(Q<128||h)W(Q);else if(Q<2048)W(192|Q>>6),W(128|Q&63);else if(Q>55295&&Q<57344)Q=65536+(Q&1047552)|v.charCodeAt(++O)&1023,W(240|Q>>18),W(128|Q>>12&63),W(128|Q>>6&63),W(128|Q&63);else W(224|Q>>12),W(128|Q>>6&63),W(128|Q&63)}return H2(A,0,M)}function NP(v,h){if(h){var u="";for(var O=0;O<v.length;O+=16384)u+=String.fromCharCode.apply(null,v.subarray(O,O+16384));return u}else if(UP)return UP.decode(v);else{var P=lL(v),A=P.s,u=P.r;if(u.length)Do(8);return A}}var hL=function(v,h){return h+30+kv(v,h+26)+kv(v,h+28)},wL=function(v,h,u){var O=kv(v,h+28),P=NP(v.subarray(h+46,h+46+O),!(kv(v,h+8)&2048)),A=h+46+O,M=gv(v,h+20),W=u&&M==4294967295?bL(v,A):[M,gv(v,h+24),gv(v,h+42)],Y=W[0],Q=W[1],J=W[2];return[kv(v,h+10),Y,Q,P,A+kv(v,h+30)+kv(v,h+32),J]},bL=function(v,h){for(;kv(v,h)!=1;h+=4+kv(v,h+2));return[JP(v,h+12),JP(v,h+4),JP(v,h+20)]},LP=function(v){var h=0;if(v)for(var u in v){var O=v[u].length;if(O>65535)Do(9);h+=O+4}return h},C3=function(v,h,u,O,P,A,M,W){var Y=O.length,Q=u.extra,J=W&&W.length,R=LP(Q);if(Yo(v,h,M!=null?33639248:67324752),h+=4,M!=null)v[h++]=20,v[h++]=u.os;v[h]=20,h+=2,v[h++]=u.flag<<1|(A<0&&8),v[h++]=P&&8,v[h++]=u.compression&255,v[h++]=u.compression>>8;var z=new Date(u.mtime==null?Date.now():u.mtime),B=z.getFullYear()-1980;if(B<0||B>119)Do(10);if(Yo(v,h,B<<25|z.getMonth()+1<<21|z.getDate()<<16|z.getHours()<<11|z.getMinutes()<<5|z.getSeconds()>>1),h+=4,A!=-1)Yo(v,h,u.crc),Yo(v,h+4,A<0?-A-2:A),Yo(v,h+8,u.size);if(Yo(v,h+12,Y),Yo(v,h+14,R),h+=16,M!=null)Yo(v,h,J),Yo(v,h+6,u.attrs),Yo(v,h+10,M),h+=14;if(v.set(O,h),h+=Y,R)for(var j in Q){var m=Q[j],y=m.length;Yo(v,h,+j),Yo(v,h+2,y),v.set(m,h+4),h+=4+y}if(J)v.set(W,h),h+=J;return h},uL=function(v,h,u,O,P){Yo(v,h,101010256),Yo(v,h+8,u),Yo(v,h+10,u),Yo(v,h+12,O),Yo(v,h+16,P)};function E3(v,h){if(!h)h={};var u={},O=[];_3(v,"",u,h);var P=0,A=0;for(var M in u){var W=u[M],Y=W[0],Q=W[1],J=Q.level==0?0:8,R=lu(M),z=R.length,B=Q.comment,j=B&&lu(B),m=j&&j.length,y=LP(Q.extra);if(z>65535)Do(11);var rr=J?gL(Y,Q):Y,qr=rr.length,vr=sU();vr.p(Y),O.push(V3(Q,{size:Y.length,crc:vr.d(),c:rr,f:R,m:j,u:z!=M.length||j&&B.length!=m,o:P,compression:J})),P+=30+z+y+qr,A+=76+2*(z+y)+(m||0)+qr}var a=new ig(A+22),s=P,lr=A-P;for(var C=0;C<O.length;++C){var R=O[C];C3(a,R.o,R,R.f,R.u,R.c.length);var V=30+R.f.length+LP(R.extra);a.set(R.c,R.o+V),C3(a,P,R,R.f,R.u,R.c.length,R.o,R.m),P+=16+V+(R.m?R.m.length:0)}return uL(a,P,O.length,lr,s),a}function y3(v,h){var u={},O=v.length-22;for(;gv(v,O)!=101010256;--O)if(!O||v.length-O>65558)Do(13);var P=kv(v,O+8);if(!P)return{};var A=gv(v,O+16),M=A==4294967295||P==65535;if(M){var W=gv(v,O-12);if(M=gv(v,W)==101075792,M)P=gv(v,W+32),A=gv(v,W+48)}var Y=h&&h.filter;for(var Q=0;Q<P;++Q){var J=wL(v,A,M),R=J[0],z=J[1],B=J[2],j=J[3],m=J[4],y=J[5],rr=hL(v,y);if(A=m,!Y||Y({name:j,size:z,originalSize:B,compression:R}))if(!R)u[j]=H2(v,rr,rr+z);else if(R==8)u[j]=oL(v.subarray(rr,rr+z),{out:new ig(B)});else Do(14,"unknown compression type "+R)}return u}function BP(v){let h=v.map((O)=>({name:O.name,code:O.code,type:O.type,triggers:O.triggers,bindings:O.bindings,folder:O.folder,metadata:O.metadata})),u={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:h};return E3({"pack.json":lu(JSON.stringify(u,null,2))})}function c3(v,h){let u=BP(v),O=new Blob([u.buffer],{type:"application/zip"}),P=URL.createObjectURL(O),A=document.createElement("a");A.href=P,A.download=`${h}.lumiscript.zip`,A.click(),URL.revokeObjectURL(P)}var aVg=Object.freeze({status:"aborted"});function _(v,h,u){function O(W,Y){if(!W._zod)Object.defineProperty(W,"_zod",{value:{def:Y,constr:M,traits:new Set},enumerable:!1});if(W._zod.traits.has(v))return;W._zod.traits.add(v),h(W,Y);let Q=M.prototype,J=Object.keys(Q);for(let R=0;R<J.length;R++){let z=J[R];if(!(z in W))W[z]=Q[z].bind(W)}}let P=u?.Parent??Object;class A extends P{}Object.defineProperty(A,"name",{value:v});function M(W){var Y;let Q=u?.Parent?new A:this;O(Q,W),(Y=Q._zod).deferred??(Y.deferred=[]);for(let J of Q._zod.deferred)J();return Q}return Object.defineProperty(M,"init",{value:O}),Object.defineProperty(M,Symbol.hasInstance,{value:(W)=>{if(u?.Parent&&W instanceof u.Parent)return!0;return W?._zod?.traits?.has(v)}}),Object.defineProperty(M,"name",{value:v}),M}var pVg=Symbol("zod_brand");class X1 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class P2 extends Error{constructor(v){super(`Encountered unidirectional transform during encode: ${v}`);this.name="ZodEncodeError"}}var bu={};function Y1(v){if(v)Object.assign(bu,v);return bu}var Mg={};z$(Mg,{unwrapMessage:()=>q2,uint8ArrayToHex:()=>TL,uint8ArrayToBase64url:()=>xL,uint8ArrayToBase64:()=>vR,stringifyPrimitive:()=>d3,slugify:()=>xP,shallowClone:()=>a3,safeExtend:()=>UL,required:()=>IL,randomString:()=>XL,propertyKeyTypes:()=>TP,promiseAllObject:()=>GL,primitiveTypes:()=>p3,prefixIssues:()=>R2,pick:()=>zL,partial:()=>FL,parsedType:()=>NL,optionalKeys:()=>CP,omit:()=>KL,objectClone:()=>WL,numKeys:()=>YL,nullish:()=>W2,normalizeParams:()=>_r,mergeDefs:()=>J1,merge:()=>LL,jsonStringifyReplacer:()=>_5,joinValues:()=>ML,issue:()=>E5,isPlainObject:()=>Lh,isObject:()=>V5,hexToUint8Array:()=>mL,getSizableOrigin:()=>gR,getParsedType:()=>JL,getLengthableOrigin:()=>G2,getEnumValues:()=>A2,getElementAtPath:()=>RL,floatSafeRemainder:()=>f3,finalizeIssue:()=>Dv,extend:()=>$L,escapeRegex:()=>Q1,esc:()=>uu,defineLazy:()=>qg,createTransparentProxy:()=>QL,cloneDef:()=>eL,clone:()=>ov,cleanRegex:()=>e2,cleanEnum:()=>BL,captureStackTrace:()=>Ou,cached:()=>M2,base64urlToUint8Array:()=>ZL,base64ToUint8Array:()=>oR,assignProp:()=>Ql,assertNotEqual:()=>HL,assertNever:()=>qL,assertIs:()=>PL,assertEqual:()=>OL,assert:()=>AL,allowsEval:()=>mP,aborted:()=>zl,NUMBER_FORMAT_RANGES:()=>s3,Class:()=>lR,BIGINT_FORMAT_RANGES:()=>rR});function OL(v){return v}function HL(v){return v}function PL(v){}function qL(v){throw Error("Unexpected value in exhaustive check")}function AL(v){}function A2(v){let h=Object.values(v).filter((O)=>typeof O==="number");return Object.entries(v).filter(([O,P])=>h.indexOf(+O)===-1).map(([O,P])=>P)}function ML(v,h="|"){return v.map((u)=>d3(u)).join(h)}function _5(v,h){if(typeof h==="bigint")return h.toString();return h}function M2(v){return{get value(){{let u=v();return Object.defineProperty(this,"value",{value:u}),u}throw Error("cached value already set")}}}function W2(v){return v===null||v===void 0}function e2(v){let h=v.startsWith("^")?1:0,u=v.endsWith("$")?v.length-1:v.length;return v.slice(h,u)}function f3(v,h){let u=(v.toString().split(".")[1]||"").length,O=h.toString(),P=(O.split(".")[1]||"").length;if(P===0&&/\d?e-\d?/.test(O)){let Y=O.match(/\d?e-(\d?)/);if(Y?.[1])P=Number.parseInt(Y[1])}let A=u>P?u:P,M=Number.parseInt(v.toFixed(A).replace(".","")),W=Number.parseInt(h.toFixed(A).replace(".",""));return M%W/10**A}var j3=Symbol("evaluating");function qg(v,h,u){let O=void 0;Object.defineProperty(v,h,{get(){if(O===j3)return;if(O===void 0)O=j3,O=u();return O},set(P){Object.defineProperty(v,h,{value:P})},configurable:!0})}function WL(v){return Object.create(Object.getPrototypeOf(v),Object.getOwnPropertyDescriptors(v))}function Ql(v,h,u){Object.defineProperty(v,h,{value:u,writable:!0,enumerable:!0,configurable:!0})}function J1(...v){let h={};for(let u of v){let O=Object.getOwnPropertyDescriptors(u);Object.assign(h,O)}return Object.defineProperties({},h)}function eL(v){return J1(v._zod.def)}function RL(v,h){if(!h)return v;return h.reduce((u,O)=>u?.[O],v)}function GL(v){let h=Object.keys(v),u=h.map((O)=>v[O]);return Promise.all(u).then((O)=>{let P={};for(let A=0;A<h.length;A++)P[h[A]]=O[A];return P})}function XL(v=10){let u="";for(let O=0;O<v;O++)u+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return u}function uu(v){return JSON.stringify(v)}function xP(v){return v.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var Ou="captureStackTrace"in Error?Error.captureStackTrace:(...v)=>{};function V5(v){return typeof v==="object"&&v!==null&&!Array.isArray(v)}var mP=M2(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(v){return!1}});function Lh(v){if(V5(v)===!1)return!1;let h=v.constructor;if(h===void 0)return!0;if(typeof h!=="function")return!0;let u=h.prototype;if(V5(u)===!1)return!1;if(Object.prototype.hasOwnProperty.call(u,"isPrototypeOf")===!1)return!1;return!0}function a3(v){if(Lh(v))return{...v};if(Array.isArray(v))return[...v];return v}function YL(v){let h=0;for(let u in v)if(Object.prototype.hasOwnProperty.call(v,u))h++;return h}var JL=(v)=>{let h=typeof v;switch(h){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(v)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(v))return"array";if(v===null)return"null";if(v.then&&typeof v.then==="function"&&v.catch&&typeof v.catch==="function")return"promise";if(typeof Map<"u"&&v instanceof Map)return"map";if(typeof Set<"u"&&v instanceof Set)return"set";if(typeof Date<"u"&&v instanceof Date)return"date";if(typeof File<"u"&&v instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${h}`)}},TP=new Set(["string","number","symbol"]),p3=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Q1(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ov(v,h,u){let O=new v._zod.constr(h??v._zod.def);if(!h||u?.parent)O._zod.parent=v;return O}function _r(v){let h=v;if(!h)return{};if(typeof h==="string")return{error:()=>h};if(h?.message!==void 0){if(h?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");h.error=h.message}if(delete h.message,typeof h.error==="string")return{...h,error:()=>h.error};return h}function QL(v){let h;return new Proxy({},{get(u,O,P){return h??(h=v()),Reflect.get(h,O,P)},set(u,O,P,A){return h??(h=v()),Reflect.set(h,O,P,A)},has(u,O){return h??(h=v()),Reflect.has(h,O)},deleteProperty(u,O){return h??(h=v()),Reflect.deleteProperty(h,O)},ownKeys(u){return h??(h=v()),Reflect.ownKeys(h)},getOwnPropertyDescriptor(u,O){return h??(h=v()),Reflect.getOwnPropertyDescriptor(h,O)},defineProperty(u,O,P){return h??(h=v()),Reflect.defineProperty(h,O,P)}})}function d3(v){if(typeof v==="bigint")return v.toString()+"n";if(typeof v==="string")return`"${v}"`;return`${v}`}function CP(v){return Object.keys(v).filter((h)=>{return v[h]._zod.optin==="optional"&&v[h]._zod.optout==="optional"})}var s3={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},rR={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function zL(v,h){let u=v._zod.def,O=u.checks;if(O&&O.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let A=J1(v._zod.def,{get shape(){let M={};for(let W in h){if(!(W in u.shape))throw Error(`Unrecognized key: "${W}"`);if(!h[W])continue;M[W]=u.shape[W]}return Ql(this,"shape",M),M},checks:[]});return ov(v,A)}function KL(v,h){let u=v._zod.def,O=u.checks;if(O&&O.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let A=J1(v._zod.def,{get shape(){let M={...v._zod.def.shape};for(let W in h){if(!(W in u.shape))throw Error(`Unrecognized key: "${W}"`);if(!h[W])continue;delete M[W]}return Ql(this,"shape",M),M},checks:[]});return ov(v,A)}function $L(v,h){if(!Lh(h))throw Error("Invalid input to extend: expected a plain object");let u=v._zod.def.checks;if(u&&u.length>0){let A=v._zod.def.shape;for(let M in h)if(Object.getOwnPropertyDescriptor(A,M)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let P=J1(v._zod.def,{get shape(){let A={...v._zod.def.shape,...h};return Ql(this,"shape",A),A}});return ov(v,P)}function UL(v,h){if(!Lh(h))throw Error("Invalid input to safeExtend: expected a plain object");let u=J1(v._zod.def,{get shape(){let O={...v._zod.def.shape,...h};return Ql(this,"shape",O),O}});return ov(v,u)}function LL(v,h){let u=J1(v._zod.def,{get shape(){let O={...v._zod.def.shape,...h._zod.def.shape};return Ql(this,"shape",O),O},get catchall(){return h._zod.def.catchall},checks:[]});return ov(v,u)}function FL(v,h,u){let P=h._zod.def.checks;if(P&&P.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let M=J1(h._zod.def,{get shape(){let W=h._zod.def.shape,Y={...W};if(u)for(let Q in u){if(!(Q in W))throw Error(`Unrecognized key: "${Q}"`);if(!u[Q])continue;Y[Q]=v?new v({type:"optional",innerType:W[Q]}):W[Q]}else for(let Q in W)Y[Q]=v?new v({type:"optional",innerType:W[Q]}):W[Q];return Ql(this,"shape",Y),Y},checks:[]});return ov(h,M)}function IL(v,h,u){let O=J1(h._zod.def,{get shape(){let P=h._zod.def.shape,A={...P};if(u)for(let M in u){if(!(M in A))throw Error(`Unrecognized key: "${M}"`);if(!u[M])continue;A[M]=new v({type:"nonoptional",innerType:P[M]})}else for(let M in P)A[M]=new v({type:"nonoptional",innerType:P[M]});return Ql(this,"shape",A),A}});return ov(h,O)}function zl(v,h=0){if(v.aborted===!0)return!0;for(let u=h;u<v.issues.length;u++)if(v.issues[u]?.continue!==!0)return!0;return!1}function R2(v,h){return h.map((u)=>{var O;return(O=u).path??(O.path=[]),u.path.unshift(v),u})}function q2(v){return typeof v==="string"?v:v?.message}function Dv(v,h,u){let O={...v,path:v.path??[]};if(!v.message){let P=q2(v.inst?._zod.def?.error?.(v))??q2(h?.error?.(v))??q2(u.customError?.(v))??q2(u.localeError?.(v))??"Invalid input";O.message=P}if(delete O.inst,delete O.continue,!h?.reportInput)delete O.input;return O}function gR(v){if(v instanceof Set)return"set";if(v instanceof Map)return"map";if(v instanceof File)return"file";return"unknown"}function G2(v){if(Array.isArray(v))return"array";if(typeof v==="string")return"string";return"unknown"}function NL(v){let h=typeof v;switch(h){case"number":return Number.isNaN(v)?"nan":"number";case"object":{if(v===null)return"null";if(Array.isArray(v))return"array";let u=v;if(u&&Object.getPrototypeOf(u)!==Object.prototype&&"constructor"in u&&u.constructor)return u.constructor.name}}return h}function E5(...v){let[h,u,O]=v;if(typeof h==="string")return{message:h,code:"custom",input:u,inst:O};return{...h}}function BL(v){return Object.entries(v).filter(([h,u])=>{return Number.isNaN(Number.parseInt(h,10))}).map((h)=>h[1])}function oR(v){let h=atob(v),u=new Uint8Array(h.length);for(let O=0;O<h.length;O++)u[O]=h.charCodeAt(O);return u}function vR(v){let h="";for(let u=0;u<v.length;u++)h+=String.fromCharCode(v[u]);return btoa(h)}function ZL(v){let h=v.replace(/-/g,"+").replace(/_/g,"/"),u="=".repeat((4-h.length%4)%4);return oR(h+u)}function xL(v){return vR(v).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function mL(v){let h=v.replace(/^0x/,"");if(h.length%2!==0)throw Error("Invalid hex string length");let u=new Uint8Array(h.length/2);for(let O=0;O<h.length;O+=2)u[O/2]=Number.parseInt(h.slice(O,O+2),16);return u}function TL(v){return Array.from(v).map((h)=>h.toString(16).padStart(2,"0")).join("")}class lR{constructor(...v){}}var hR=(v,h)=>{v.name="$ZodError",Object.defineProperty(v,"_zod",{value:v._zod,enumerable:!1}),Object.defineProperty(v,"issues",{value:h,enumerable:!1}),v.message=JSON.stringify(h,_5,2),Object.defineProperty(v,"toString",{value:()=>v.message,enumerable:!1})},Hu=_("$ZodError",hR),iP=_("$ZodError",hR,{Parent:Error});function wR(v,h=(u)=>u.message){let u={},O=[];for(let P of v.issues)if(P.path.length>0)u[P.path[0]]=u[P.path[0]]||[],u[P.path[0]].push(h(P));else O.push(h(P));return{formErrors:O,fieldErrors:u}}function bR(v,h=(u)=>u.message){let u={_errors:[]},O=(P)=>{for(let A of P.issues)if(A.code==="invalid_union"&&A.errors.length)A.errors.map((M)=>O({issues:M}));else if(A.code==="invalid_key")O({issues:A.issues});else if(A.code==="invalid_element")O({issues:A.issues});else if(A.path.length===0)u._errors.push(h(A));else{let M=u,W=0;while(W<A.path.length){let Y=A.path[W];if(W!==A.path.length-1)M[Y]=M[Y]||{_errors:[]};else M[Y]=M[Y]||{_errors:[]},M[Y]._errors.push(h(A));M=M[Y],W++}}};return O(v),u}var Pu=(v)=>(h,u,O,P)=>{let A=O?Object.assign(O,{async:!1}):{async:!1},M=h._zod.run({value:u,issues:[]},A);if(M instanceof Promise)throw new X1;if(M.issues.length){let W=new(P?.Err??v)(M.issues.map((Y)=>Dv(Y,A,Y1())));throw Ou(W,P?.callee),W}return M.value};var qu=(v)=>async(h,u,O,P)=>{let A=O?Object.assign(O,{async:!0}):{async:!0},M=h._zod.run({value:u,issues:[]},A);if(M instanceof Promise)M=await M;if(M.issues.length){let W=new(P?.Err??v)(M.issues.map((Y)=>Dv(Y,A,Y1())));throw Ou(W,P?.callee),W}return M.value};var X2=(v)=>(h,u,O)=>{let P=O?{...O,async:!1}:{async:!1},A=h._zod.run({value:u,issues:[]},P);if(A instanceof Promise)throw new X1;return A.issues.length?{success:!1,error:new(v??Hu)(A.issues.map((M)=>Dv(M,P,Y1())))}:{success:!0,data:A.value}},uR=X2(iP),Y2=(v)=>async(h,u,O)=>{let P=O?Object.assign(O,{async:!0}):{async:!0},A=h._zod.run({value:u,issues:[]},P);if(A instanceof Promise)A=await A;return A.issues.length?{success:!1,error:new v(A.issues.map((M)=>Dv(M,P,Y1())))}:{success:!0,data:A.value}},OR=Y2(iP),HR=(v)=>(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return Pu(v)(h,u,P)};var PR=(v)=>(h,u,O)=>{return Pu(v)(h,u,O)};var qR=(v)=>async(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return qu(v)(h,u,P)};var AR=(v)=>async(h,u,O)=>{return qu(v)(h,u,O)};var MR=(v)=>(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return X2(v)(h,u,P)};var WR=(v)=>(h,u,O)=>{return X2(v)(h,u,O)};var eR=(v)=>async(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return Y2(v)(h,u,P)};var RR=(v)=>async(h,u,O)=>{return Y2(v)(h,u,O)};var GR=/^[cC][^\s-]{8,}$/,XR=/^[0-9a-z]+$/,YR=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,JR=/^[0-9a-vA-V]{20}$/,QR=/^[A-Za-z0-9]{27}$/,zR=/^[a-zA-Z0-9_-]{21}$/,KR=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var $R=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,SP=(v)=>{if(!v)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${v}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var UR=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var iL="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function LR(){return new RegExp(iL,"u")}var FR=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,IR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var NR=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,BR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ZR=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,kP=/^[A-Za-z0-9_-]*$/;var xR=/^\+[1-9]\d{6,14}$/,mR="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",TR=new RegExp(`^${mR}$`);function CR(v){return typeof v.precision==="number"?v.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":v.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${v.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function iR(v){return new RegExp(`^${CR(v)}$`)}function SR(v){let h=CR({precision:v.precision}),u=["Z"];if(v.local)u.push("");if(v.offset)u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let O=`${h}(?:${u.join("|")})`;return new RegExp(`^${mR}T(?:${O})$`)}var kR=(v)=>{let h=v?`[\\s\\S]{${v?.minimum??0},${v?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${h}$`)};var nR=/^[^A-Z]*$/,DR=/^[^a-z]*$/;var Y0=_("$ZodCheck",(v,h)=>{var u;v._zod??(v._zod={}),v._zod.def=h,(u=v._zod).onattach??(u.onattach=[])});var tR=_("$ZodCheckMaxLength",(v,h)=>{var u;Y0.init(v,h),(u=v._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),v._zod.onattach.push((O)=>{let P=O._zod.bag.maximum??Number.POSITIVE_INFINITY;if(h.maximum<P)O._zod.bag.maximum=h.maximum}),v._zod.check=(O)=>{let P=O.value;if(P.length<=h.maximum)return;let M=G2(P);O.issues.push({origin:M,code:"too_big",maximum:h.maximum,inclusive:!0,input:P,inst:v,continue:!h.abort})}}),VR=_("$ZodCheckMinLength",(v,h)=>{var u;Y0.init(v,h),(u=v._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),v._zod.onattach.push((O)=>{let P=O._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(h.minimum>P)O._zod.bag.minimum=h.minimum}),v._zod.check=(O)=>{let P=O.value;if(P.length>=h.minimum)return;let M=G2(P);O.issues.push({origin:M,code:"too_small",minimum:h.minimum,inclusive:!0,input:P,inst:v,continue:!h.abort})}}),_R=_("$ZodCheckLengthEquals",(v,h)=>{var u;Y0.init(v,h),(u=v._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),v._zod.onattach.push((O)=>{let P=O._zod.bag;P.minimum=h.length,P.maximum=h.length,P.length=h.length}),v._zod.check=(O)=>{let P=O.value,A=P.length;if(A===h.length)return;let M=G2(P),W=A>h.length;O.issues.push({origin:M,...W?{code:"too_big",maximum:h.length}:{code:"too_small",minimum:h.length},inclusive:!0,exact:!0,input:O.value,inst:v,continue:!h.abort})}}),J2=_("$ZodCheckStringFormat",(v,h)=>{var u,O;if(Y0.init(v,h),v._zod.onattach.push((P)=>{let A=P._zod.bag;if(A.format=h.format,h.pattern)A.patterns??(A.patterns=new Set),A.patterns.add(h.pattern)}),h.pattern)(u=v._zod).check??(u.check=(P)=>{if(h.pattern.lastIndex=0,h.pattern.test(P.value))return;P.issues.push({origin:"string",code:"invalid_format",format:h.format,input:P.value,...h.pattern?{pattern:h.pattern.toString()}:{},inst:v,continue:!h.abort})});else(O=v._zod).check??(O.check=()=>{})}),ER=_("$ZodCheckRegex",(v,h)=>{J2.init(v,h),v._zod.check=(u)=>{if(h.pattern.lastIndex=0,h.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:"regex",input:u.value,pattern:h.pattern.toString(),inst:v,continue:!h.abort})}}),yR=_("$ZodCheckLowerCase",(v,h)=>{h.pattern??(h.pattern=nR),J2.init(v,h)}),cR=_("$ZodCheckUpperCase",(v,h)=>{h.pattern??(h.pattern=DR),J2.init(v,h)}),jR=_("$ZodCheckIncludes",(v,h)=>{Y0.init(v,h);let u=Q1(h.includes),O=new RegExp(typeof h.position==="number"?`^.{${h.position}}${u}`:u);h.pattern=O,v._zod.onattach.push((P)=>{let A=P._zod.bag;A.patterns??(A.patterns=new Set),A.patterns.add(O)}),v._zod.check=(P)=>{if(P.value.includes(h.includes,h.position))return;P.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:h.includes,input:P.value,inst:v,continue:!h.abort})}}),fR=_("$ZodCheckStartsWith",(v,h)=>{Y0.init(v,h);let u=new RegExp(`^${Q1(h.prefix)}.*`);h.pattern??(h.pattern=u),v._zod.onattach.push((O)=>{let P=O._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(u)}),v._zod.check=(O)=>{if(O.value.startsWith(h.prefix))return;O.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:h.prefix,input:O.value,inst:v,continue:!h.abort})}}),aR=_("$ZodCheckEndsWith",(v,h)=>{Y0.init(v,h);let u=new RegExp(`.*${Q1(h.suffix)}$`);h.pattern??(h.pattern=u),v._zod.onattach.push((O)=>{let P=O._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(u)}),v._zod.check=(O)=>{if(O.value.endsWith(h.suffix))return;O.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:h.suffix,input:O.value,inst:v,continue:!h.abort})}});var pR=_("$ZodCheckOverwrite",(v,h)=>{Y0.init(v,h),v._zod.check=(u)=>{u.value=h.tx(u.value)}});class nP{constructor(v=[]){if(this.content=[],this.indent=0,this)this.args=v}indented(v){this.indent+=1,v(this),this.indent-=1}write(v){if(typeof v==="function"){v(this,{execution:"sync"}),v(this,{execution:"async"});return}let u=v.split(`
`).filter((A)=>A),O=Math.min(...u.map((A)=>A.length-A.trimStart().length)),P=u.map((A)=>A.slice(O)).map((A)=>" ".repeat(this.indent*2)+A);for(let A of P)this.content.push(A)}compile(){let v=Function,h=this?.args,O=[...(this?.content??[""]).map((P)=>`  ${P}`)];return new v(...h,O.join(`
`))}}var sR={major:4,minor:3,patch:6};var _g=_("$ZodType",(v,h)=>{var u;v??(v={}),v._zod.def=h,v._zod.bag=v._zod.bag||{},v._zod.version=sR;let O=[...v._zod.def.checks??[]];if(v._zod.traits.has("$ZodCheck"))O.unshift(v);for(let P of O)for(let A of P._zod.onattach)A(v);if(O.length===0)(u=v._zod).deferred??(u.deferred=[]),v._zod.deferred?.push(()=>{v._zod.run=v._zod.parse});else{let P=(M,W,Y)=>{let Q=zl(M),J;for(let R of W){if(R._zod.def.when){if(!R._zod.def.when(M))continue}else if(Q)continue;let z=M.issues.length,B=R._zod.check(M);if(B instanceof Promise&&Y?.async===!1)throw new X1;if(J||B instanceof Promise)J=(J??Promise.resolve()).then(async()=>{if(await B,M.issues.length===z)return;if(!Q)Q=zl(M,z)});else{if(M.issues.length===z)continue;if(!Q)Q=zl(M,z)}}if(J)return J.then(()=>{return M});return M},A=(M,W,Y)=>{if(zl(M))return M.aborted=!0,M;let Q=P(W,O,Y);if(Q instanceof Promise){if(Y.async===!1)throw new X1;return Q.then((J)=>v._zod.parse(J,Y))}return v._zod.parse(Q,Y)};v._zod.run=(M,W)=>{if(W.skipChecks)return v._zod.parse(M,W);if(W.direction==="backward"){let Q=v._zod.parse({value:M.value,issues:[]},{...W,skipChecks:!0});if(Q instanceof Promise)return Q.then((J)=>{return A(J,M,W)});return A(Q,M,W)}let Y=v._zod.parse(M,W);if(Y instanceof Promise){if(W.async===!1)throw new X1;return Y.then((Q)=>P(Q,O,W))}return P(Y,O,W)}}qg(v,"~standard",()=>({validate:(P)=>{try{let A=uR(v,P);return A.success?{value:A.data}:{issues:A.error?.issues}}catch(A){return OR(v,P).then((M)=>M.success?{value:M.data}:{issues:M.error?.issues})}},vendor:"zod",version:1}))}),eu=_("$ZodString",(v,h)=>{_g.init(v,h),v._zod.pattern=[...v?._zod.bag?.patterns??[]].pop()??kR(v._zod.bag),v._zod.parse=(u,O)=>{if(h.coerce)try{u.value=String(u.value)}catch(P){}if(typeof u.value==="string")return u;return u.issues.push({expected:"string",code:"invalid_type",input:u.value,inst:v}),u}}),Ng=_("$ZodStringFormat",(v,h)=>{J2.init(v,h),eu.init(v,h)}),uG=_("$ZodGUID",(v,h)=>{h.pattern??(h.pattern=$R),Ng.init(v,h)}),OG=_("$ZodUUID",(v,h)=>{if(h.version){let O={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[h.version];if(O===void 0)throw Error(`Invalid UUID version: "${h.version}"`);h.pattern??(h.pattern=SP(O))}else h.pattern??(h.pattern=SP());Ng.init(v,h)}),HG=_("$ZodEmail",(v,h)=>{h.pattern??(h.pattern=UR),Ng.init(v,h)}),PG=_("$ZodURL",(v,h)=>{Ng.init(v,h),v._zod.check=(u)=>{try{let O=u.value.trim(),P=new URL(O);if(h.hostname){if(h.hostname.lastIndex=0,!h.hostname.test(P.hostname))u.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:h.hostname.source,input:u.value,inst:v,continue:!h.abort})}if(h.protocol){if(h.protocol.lastIndex=0,!h.protocol.test(P.protocol.endsWith(":")?P.protocol.slice(0,-1):P.protocol))u.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:h.protocol.source,input:u.value,inst:v,continue:!h.abort})}if(h.normalize)u.value=P.href;else u.value=O;return}catch(O){u.issues.push({code:"invalid_format",format:"url",input:u.value,inst:v,continue:!h.abort})}}}),qG=_("$ZodEmoji",(v,h)=>{h.pattern??(h.pattern=LR()),Ng.init(v,h)}),AG=_("$ZodNanoID",(v,h)=>{h.pattern??(h.pattern=zR),Ng.init(v,h)}),MG=_("$ZodCUID",(v,h)=>{h.pattern??(h.pattern=GR),Ng.init(v,h)}),WG=_("$ZodCUID2",(v,h)=>{h.pattern??(h.pattern=XR),Ng.init(v,h)}),eG=_("$ZodULID",(v,h)=>{h.pattern??(h.pattern=YR),Ng.init(v,h)}),RG=_("$ZodXID",(v,h)=>{h.pattern??(h.pattern=JR),Ng.init(v,h)}),GG=_("$ZodKSUID",(v,h)=>{h.pattern??(h.pattern=QR),Ng.init(v,h)}),XG=_("$ZodISODateTime",(v,h)=>{h.pattern??(h.pattern=SR(h)),Ng.init(v,h)}),YG=_("$ZodISODate",(v,h)=>{h.pattern??(h.pattern=TR),Ng.init(v,h)}),JG=_("$ZodISOTime",(v,h)=>{h.pattern??(h.pattern=iR(h)),Ng.init(v,h)}),QG=_("$ZodISODuration",(v,h)=>{h.pattern??(h.pattern=KR),Ng.init(v,h)}),zG=_("$ZodIPv4",(v,h)=>{h.pattern??(h.pattern=FR),Ng.init(v,h),v._zod.bag.format="ipv4"}),KG=_("$ZodIPv6",(v,h)=>{h.pattern??(h.pattern=IR),Ng.init(v,h),v._zod.bag.format="ipv6",v._zod.check=(u)=>{try{new URL(`http://[${u.value}]`)}catch{u.issues.push({code:"invalid_format",format:"ipv6",input:u.value,inst:v,continue:!h.abort})}}});var $G=_("$ZodCIDRv4",(v,h)=>{h.pattern??(h.pattern=NR),Ng.init(v,h)}),UG=_("$ZodCIDRv6",(v,h)=>{h.pattern??(h.pattern=BR),Ng.init(v,h),v._zod.check=(u)=>{let O=u.value.split("/");try{if(O.length!==2)throw Error();let[P,A]=O;if(!A)throw Error();let M=Number(A);if(`${M}`!==A)throw Error();if(M<0||M>128)throw Error();new URL(`http://[${P}]`)}catch{u.issues.push({code:"invalid_format",format:"cidrv6",input:u.value,inst:v,continue:!h.abort})}}});function LG(v){if(v==="")return!0;if(v.length%4!==0)return!1;try{return atob(v),!0}catch{return!1}}var FG=_("$ZodBase64",(v,h)=>{h.pattern??(h.pattern=ZR),Ng.init(v,h),v._zod.bag.contentEncoding="base64",v._zod.check=(u)=>{if(LG(u.value))return;u.issues.push({code:"invalid_format",format:"base64",input:u.value,inst:v,continue:!h.abort})}});function SL(v){if(!kP.test(v))return!1;let h=v.replace(/[-_]/g,(O)=>O==="-"?"+":"/"),u=h.padEnd(Math.ceil(h.length/4)*4,"=");return LG(u)}var IG=_("$ZodBase64URL",(v,h)=>{h.pattern??(h.pattern=kP),Ng.init(v,h),v._zod.bag.contentEncoding="base64url",v._zod.check=(u)=>{if(SL(u.value))return;u.issues.push({code:"invalid_format",format:"base64url",input:u.value,inst:v,continue:!h.abort})}}),NG=_("$ZodE164",(v,h)=>{h.pattern??(h.pattern=xR),Ng.init(v,h)});function kL(v,h=null){try{let u=v.split(".");if(u.length!==3)return!1;let[O]=u;if(!O)return!1;let P=JSON.parse(atob(O));if("typ"in P&&P?.typ!=="JWT")return!1;if(!P.alg)return!1;if(h&&(!("alg"in P)||P.alg!==h))return!1;return!0}catch{return!1}}var BG=_("$ZodJWT",(v,h)=>{Ng.init(v,h),v._zod.check=(u)=>{if(kL(u.value,h.alg))return;u.issues.push({code:"invalid_format",format:"jwt",input:u.value,inst:v,continue:!h.abort})}});var ZG=_("$ZodUnknown",(v,h)=>{_g.init(v,h),v._zod.parse=(u)=>u}),xG=_("$ZodNever",(v,h)=>{_g.init(v,h),v._zod.parse=(u,O)=>{return u.issues.push({expected:"never",code:"invalid_type",input:u.value,inst:v}),u}});function rG(v,h,u){if(v.issues.length)h.issues.push(...R2(u,v.issues));h.value[u]=v.value}var mG=_("$ZodArray",(v,h)=>{_g.init(v,h),v._zod.parse=(u,O)=>{let P=u.value;if(!Array.isArray(P))return u.issues.push({expected:"array",code:"invalid_type",input:P,inst:v}),u;u.value=Array(P.length);let A=[];for(let M=0;M<P.length;M++){let W=P[M],Y=h.element._zod.run({value:W,issues:[]},O);if(Y instanceof Promise)A.push(Y.then((Q)=>rG(Q,u,M)));else rG(Y,u,M)}if(A.length)return Promise.all(A).then(()=>u);return u}});function Wu(v,h,u,O,P){if(v.issues.length){if(P&&!(u in O))return;h.issues.push(...R2(u,v.issues))}if(v.value===void 0){if(u in O)h.value[u]=void 0}else h.value[u]=v.value}function TG(v){let h=Object.keys(v.shape);for(let O of h)if(!v.shape?.[O]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${O}": expected a Zod schema`);let u=CP(v.shape);return{...v,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(u)}}function CG(v,h,u,O,P,A){let M=[],W=P.keySet,Y=P.catchall._zod,Q=Y.def.type,J=Y.optout==="optional";for(let R in h){if(W.has(R))continue;if(Q==="never"){M.push(R);continue}let z=Y.run({value:h[R],issues:[]},O);if(z instanceof Promise)v.push(z.then((B)=>Wu(B,u,R,h,J)));else Wu(z,u,R,h,J)}if(M.length)u.issues.push({code:"unrecognized_keys",keys:M,input:h,inst:A});if(!v.length)return u;return Promise.all(v).then(()=>{return u})}var nL=_("$ZodObject",(v,h)=>{if(_g.init(v,h),!Object.getOwnPropertyDescriptor(h,"shape")?.get){let W=h.shape;Object.defineProperty(h,"shape",{get:()=>{let Y={...W};return Object.defineProperty(h,"shape",{value:Y}),Y}})}let O=M2(()=>TG(h));qg(v._zod,"propValues",()=>{let W=h.shape,Y={};for(let Q in W){let J=W[Q]._zod;if(J.values){Y[Q]??(Y[Q]=new Set);for(let R of J.values)Y[Q].add(R)}}return Y});let P=V5,A=h.catchall,M;v._zod.parse=(W,Y)=>{M??(M=O.value);let Q=W.value;if(!P(Q))return W.issues.push({expected:"object",code:"invalid_type",input:Q,inst:v}),W;W.value={};let J=[],R=M.shape;for(let z of M.keys){let B=R[z],j=B._zod.optout==="optional",m=B._zod.run({value:Q[z],issues:[]},Y);if(m instanceof Promise)J.push(m.then((y)=>Wu(y,W,z,Q,j)));else Wu(m,W,z,Q,j)}if(!A)return J.length?Promise.all(J).then(()=>W):W;return CG(J,Q,W,Y,O.value,v)}}),iG=_("$ZodObjectJIT",(v,h)=>{nL.init(v,h);let u=v._zod.parse,O=M2(()=>TG(h)),P=(z)=>{let B=new nP(["shape","payload","ctx"]),j=O.value,m=(vr)=>{let a=uu(vr);return`shape[${a}]._zod.run({ value: input[${a}], issues: [] }, ctx)`};B.write("const input = payload.value;");let y=Object.create(null),rr=0;for(let vr of j.keys)y[vr]=`key_${rr++}`;B.write("const newResult = {};");for(let vr of j.keys){let a=y[vr],s=uu(vr),C=z[vr]?._zod?.optout==="optional";if(B.write(`const ${a} = ${m(vr)};`),C)B.write(`
        if (${a}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${a}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${a}.value;
        }
        
      `);else B.write(`
        if (${a}.issues.length) {
          payload.issues = payload.issues.concat(${a}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${a}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${a}.value;
        }
        
      `)}B.write("payload.value = newResult;"),B.write("return payload;");let qr=B.compile();return(vr,a)=>qr(z,vr,a)},A,M=V5,W=!bu.jitless,Q=W&&mP.value,J=h.catchall,R;v._zod.parse=(z,B)=>{R??(R=O.value);let j=z.value;if(!M(j))return z.issues.push({expected:"object",code:"invalid_type",input:j,inst:v}),z;if(W&&Q&&B?.async===!1&&B.jitless!==!0){if(!A)A=P(h.shape);if(z=A(z,B),!J)return z;return CG([],j,z,B,R,v)}return u(z,B)}});function gG(v,h,u,O){for(let A of v)if(A.issues.length===0)return h.value=A.value,h;let P=v.filter((A)=>!zl(A));if(P.length===1)return h.value=P[0].value,P[0];return h.issues.push({code:"invalid_union",input:h.value,inst:u,errors:v.map((A)=>A.issues.map((M)=>Dv(M,O,Y1())))}),h}var SG=_("$ZodUnion",(v,h)=>{_g.init(v,h),qg(v._zod,"optin",()=>h.options.some((P)=>P._zod.optin==="optional")?"optional":void 0),qg(v._zod,"optout",()=>h.options.some((P)=>P._zod.optout==="optional")?"optional":void 0),qg(v._zod,"values",()=>{if(h.options.every((P)=>P._zod.values))return new Set(h.options.flatMap((P)=>Array.from(P._zod.values)));return}),qg(v._zod,"pattern",()=>{if(h.options.every((P)=>P._zod.pattern)){let P=h.options.map((A)=>A._zod.pattern);return new RegExp(`^(${P.map((A)=>e2(A.source)).join("|")})$`)}return});let u=h.options.length===1,O=h.options[0]._zod.run;v._zod.parse=(P,A)=>{if(u)return O(P,A);let M=!1,W=[];for(let Y of h.options){let Q=Y._zod.run({value:P.value,issues:[]},A);if(Q instanceof Promise)W.push(Q),M=!0;else{if(Q.issues.length===0)return Q;W.push(Q)}}if(!M)return gG(W,P,v,A);return Promise.all(W).then((Y)=>{return gG(Y,P,v,A)})}});var kG=_("$ZodIntersection",(v,h)=>{_g.init(v,h),v._zod.parse=(u,O)=>{let P=u.value,A=h.left._zod.run({value:P,issues:[]},O),M=h.right._zod.run({value:P,issues:[]},O);if(A instanceof Promise||M instanceof Promise)return Promise.all([A,M]).then(([Y,Q])=>{return oG(u,Y,Q)});return oG(u,A,M)}});function DP(v,h){if(v===h)return{valid:!0,data:v};if(v instanceof Date&&h instanceof Date&&+v===+h)return{valid:!0,data:v};if(Lh(v)&&Lh(h)){let u=Object.keys(h),O=Object.keys(v).filter((A)=>u.indexOf(A)!==-1),P={...v,...h};for(let A of O){let M=DP(v[A],h[A]);if(!M.valid)return{valid:!1,mergeErrorPath:[A,...M.mergeErrorPath]};P[A]=M.data}return{valid:!0,data:P}}if(Array.isArray(v)&&Array.isArray(h)){if(v.length!==h.length)return{valid:!1,mergeErrorPath:[]};let u=[];for(let O=0;O<v.length;O++){let P=v[O],A=h[O],M=DP(P,A);if(!M.valid)return{valid:!1,mergeErrorPath:[O,...M.mergeErrorPath]};u.push(M.data)}return{valid:!0,data:u}}return{valid:!1,mergeErrorPath:[]}}function oG(v,h,u){let O=new Map,P;for(let W of h.issues)if(W.code==="unrecognized_keys"){P??(P=W);for(let Y of W.keys){if(!O.has(Y))O.set(Y,{});O.get(Y).l=!0}}else v.issues.push(W);for(let W of u.issues)if(W.code==="unrecognized_keys")for(let Y of W.keys){if(!O.has(Y))O.set(Y,{});O.get(Y).r=!0}else v.issues.push(W);let A=[...O].filter(([,W])=>W.l&&W.r).map(([W])=>W);if(A.length&&P)v.issues.push({...P,keys:A});if(zl(v))return v;let M=DP(h.value,u.value);if(!M.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(M.mergeErrorPath)}`);return v.value=M.data,v}var nG=_("$ZodEnum",(v,h)=>{_g.init(v,h);let u=A2(h.entries),O=new Set(u);v._zod.values=O,v._zod.pattern=new RegExp(`^(${u.filter((P)=>TP.has(typeof P)).map((P)=>typeof P==="string"?Q1(P):P.toString()).join("|")})$`),v._zod.parse=(P,A)=>{let M=P.value;if(O.has(M))return P;return P.issues.push({code:"invalid_value",values:u,input:M,inst:v}),P}}),DG=_("$ZodLiteral",(v,h)=>{if(_g.init(v,h),h.values.length===0)throw Error("Cannot create literal schema with no valid values");let u=new Set(h.values);v._zod.values=u,v._zod.pattern=new RegExp(`^(${h.values.map((O)=>typeof O==="string"?Q1(O):O?Q1(O.toString()):String(O)).join("|")})$`),v._zod.parse=(O,P)=>{let A=O.value;if(u.has(A))return O;return O.issues.push({code:"invalid_value",values:h.values,input:A,inst:v}),O}});var tG=_("$ZodTransform",(v,h)=>{_g.init(v,h),v._zod.parse=(u,O)=>{if(O.direction==="backward")throw new P2(v.constructor.name);let P=h.transform(u.value,u);if(O.async)return(P instanceof Promise?P:Promise.resolve(P)).then((M)=>{return u.value=M,u});if(P instanceof Promise)throw new X1;return u.value=P,u}});function vG(v,h){if(v.issues.length&&h===void 0)return{issues:[],value:void 0};return v}var tP=_("$ZodOptional",(v,h)=>{_g.init(v,h),v._zod.optin="optional",v._zod.optout="optional",qg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,void 0]):void 0}),qg(v._zod,"pattern",()=>{let u=h.innerType._zod.pattern;return u?new RegExp(`^(${e2(u.source)})?$`):void 0}),v._zod.parse=(u,O)=>{if(h.innerType._zod.optin==="optional"){let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>vG(A,u.value));return vG(P,u.value)}if(u.value===void 0)return u;return h.innerType._zod.run(u,O)}}),VG=_("$ZodExactOptional",(v,h)=>{tP.init(v,h),qg(v._zod,"values",()=>h.innerType._zod.values),qg(v._zod,"pattern",()=>h.innerType._zod.pattern),v._zod.parse=(u,O)=>{return h.innerType._zod.run(u,O)}}),_G=_("$ZodNullable",(v,h)=>{_g.init(v,h),qg(v._zod,"optin",()=>h.innerType._zod.optin),qg(v._zod,"optout",()=>h.innerType._zod.optout),qg(v._zod,"pattern",()=>{let u=h.innerType._zod.pattern;return u?new RegExp(`^(${e2(u.source)}|null)$`):void 0}),qg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,null]):void 0}),v._zod.parse=(u,O)=>{if(u.value===null)return u;return h.innerType._zod.run(u,O)}}),EG=_("$ZodDefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",qg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);if(u.value===void 0)return u.value=h.defaultValue,u;let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>lG(A,h));return lG(P,h)}});function lG(v,h){if(v.value===void 0)v.value=h.defaultValue;return v}var yG=_("$ZodPrefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",qg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);if(u.value===void 0)u.value=h.defaultValue;return h.innerType._zod.run(u,O)}}),cG=_("$ZodNonOptional",(v,h)=>{_g.init(v,h),qg(v._zod,"values",()=>{let u=h.innerType._zod.values;return u?new Set([...u].filter((O)=>O!==void 0)):void 0}),v._zod.parse=(u,O)=>{let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>hG(A,v));return hG(P,v)}});function hG(v,h){if(!v.issues.length&&v.value===void 0)v.issues.push({code:"invalid_type",expected:"nonoptional",input:v.value,inst:h});return v}var jG=_("$ZodCatch",(v,h)=>{_g.init(v,h),qg(v._zod,"optin",()=>h.innerType._zod.optin),qg(v._zod,"optout",()=>h.innerType._zod.optout),qg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>{if(u.value=A.value,A.issues.length)u.value=h.catchValue({...u,error:{issues:A.issues.map((M)=>Dv(M,O,Y1()))},input:u.value}),u.issues=[];return u});if(u.value=P.value,P.issues.length)u.value=h.catchValue({...u,error:{issues:P.issues.map((A)=>Dv(A,O,Y1()))},input:u.value}),u.issues=[];return u}});var fG=_("$ZodPipe",(v,h)=>{_g.init(v,h),qg(v._zod,"values",()=>h.in._zod.values),qg(v._zod,"optin",()=>h.in._zod.optin),qg(v._zod,"optout",()=>h.out._zod.optout),qg(v._zod,"propValues",()=>h.in._zod.propValues),v._zod.parse=(u,O)=>{if(O.direction==="backward"){let A=h.out._zod.run(u,O);if(A instanceof Promise)return A.then((M)=>Mu(M,h.in,O));return Mu(A,h.in,O)}let P=h.in._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>Mu(A,h.out,O));return Mu(P,h.out,O)}});function Mu(v,h,u){if(v.issues.length)return v.aborted=!0,v;return h._zod.run({value:v.value,issues:v.issues},u)}var aG=_("$ZodReadonly",(v,h)=>{_g.init(v,h),qg(v._zod,"propValues",()=>h.innerType._zod.propValues),qg(v._zod,"values",()=>h.innerType._zod.values),qg(v._zod,"optin",()=>h.innerType?._zod?.optin),qg(v._zod,"optout",()=>h.innerType?._zod?.optout),v._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then(wG);return wG(P)}});function wG(v){return v.value=Object.freeze(v.value),v}var pG=_("$ZodCustom",(v,h)=>{Y0.init(v,h),_g.init(v,h),v._zod.parse=(u,O)=>{return u},v._zod.check=(u)=>{let O=u.value,P=h.fn(O);if(P instanceof Promise)return P.then((A)=>bG(A,u,O,v));bG(P,u,O,v);return}});function bG(v,h,u,O){if(!v){let P={code:"custom",input:u,inst:O,path:[...O._zod.def.path??[]],continue:!O._zod.def.abort};if(O._zod.def.params)P.params=O._zod.def.params;h.issues.push(E5(P))}}var dG,G_g=Symbol("ZodOutput"),X_g=Symbol("ZodInput");class sG{constructor(){this._map=new WeakMap,this._idmap=new Map}add(v,...h){let u=h[0];if(this._map.set(v,u),u&&typeof u==="object"&&"id"in u)this._idmap.set(u.id,v);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(v){let h=this._map.get(v);if(h&&typeof h==="object"&&"id"in h)this._idmap.delete(h.id);return this._map.delete(v),this}get(v){let h=v._zod.parent;if(h){let u={...this.get(h)??{}};delete u.id;let O={...u,...this._map.get(v)};return Object.keys(O).length?O:void 0}return this._map.get(v)}has(v){return this._map.has(v)}}function DL(){return new sG}(dG=globalThis).__zod_globalRegistry??(dG.__zod_globalRegistry=DL());var Fh=globalThis.__zod_globalRegistry;function rX(v,h){return new v({type:"string",..._r(h)})}function gX(v,h){return new v({type:"string",format:"email",check:"string_format",abort:!1,..._r(h)})}function VP(v,h){return new v({type:"string",format:"guid",check:"string_format",abort:!1,..._r(h)})}function oX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(h)})}function vX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(h)})}function lX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(h)})}function hX(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(h)})}function wX(v,h){return new v({type:"string",format:"url",check:"string_format",abort:!1,..._r(h)})}function bX(v,h){return new v({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(h)})}function uX(v,h){return new v({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(h)})}function OX(v,h){return new v({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(h)})}function HX(v,h){return new v({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(h)})}function PX(v,h){return new v({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(h)})}function qX(v,h){return new v({type:"string",format:"xid",check:"string_format",abort:!1,..._r(h)})}function AX(v,h){return new v({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(h)})}function MX(v,h){return new v({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(h)})}function WX(v,h){return new v({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(h)})}function eX(v,h){return new v({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(h)})}function RX(v,h){return new v({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(h)})}function GX(v,h){return new v({type:"string",format:"base64",check:"string_format",abort:!1,..._r(h)})}function XX(v,h){return new v({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(h)})}function YX(v,h){return new v({type:"string",format:"e164",check:"string_format",abort:!1,..._r(h)})}function JX(v,h){return new v({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(h)})}function QX(v,h){return new v({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(h)})}function zX(v,h){return new v({type:"string",format:"date",check:"string_format",..._r(h)})}function KX(v,h){return new v({type:"string",format:"time",check:"string_format",precision:null,..._r(h)})}function $X(v,h){return new v({type:"string",format:"duration",check:"string_format",..._r(h)})}function UX(v){return new v({type:"unknown"})}function LX(v,h){return new v({type:"never",..._r(h)})}function Ru(v,h){return new tR({check:"max_length",..._r(h),maximum:v})}function y5(v,h){return new VR({check:"min_length",..._r(h),minimum:v})}function Gu(v,h){return new _R({check:"length_equals",..._r(h),length:v})}function _P(v,h){return new ER({check:"string_format",format:"regex",..._r(h),pattern:v})}function EP(v){return new yR({check:"string_format",format:"lowercase",..._r(v)})}function yP(v){return new cR({check:"string_format",format:"uppercase",..._r(v)})}function cP(v,h){return new jR({check:"string_format",format:"includes",..._r(h),includes:v})}function jP(v,h){return new fR({check:"string_format",format:"starts_with",..._r(h),prefix:v})}function fP(v,h){return new aR({check:"string_format",format:"ends_with",..._r(h),suffix:v})}function Kl(v){return new pR({check:"overwrite",tx:v})}function aP(v){return Kl((h)=>h.normalize(v))}function pP(){return Kl((v)=>v.trim())}function dP(){return Kl((v)=>v.toLowerCase())}function sP(){return Kl((v)=>v.toUpperCase())}function rq(){return Kl((v)=>xP(v))}function FX(v,h,u){return new v({type:"array",element:h,..._r(u)})}function IX(v,h,u){return new v({type:"custom",check:"custom",fn:h,..._r(u)})}function NX(v){let h=tL((u)=>{return u.addIssue=(O)=>{if(typeof O==="string")u.issues.push(E5(O,u.value,h._zod.def));else{let P=O;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=u.value),P.inst??(P.inst=h),P.continue??(P.continue=!h._zod.def.abort),u.issues.push(E5(P))}},v(u.value,u)});return h}function tL(v,h){let u=new Y0({check:"custom",..._r(h)});return u._zod.check=v,u}function gq(v){let h=v?.target??"draft-2020-12";if(h==="draft-4")h="draft-04";if(h==="draft-7")h="draft-07";return{processors:v.processors??{},metadataRegistry:v?.metadata??Fh,target:h,unrepresentable:v?.unrepresentable??"throw",override:v?.override??(()=>{}),io:v?.io??"output",counter:0,seen:new Map,cycles:v?.cycles??"ref",reused:v?.reused??"inline",external:v?.external??void 0}}function Ho(v,h,u={path:[],schemaPath:[]}){var O;let P=v._zod.def,A=h.seen.get(v);if(A){if(A.count++,u.schemaPath.includes(v))A.cycle=u.path;return A.schema}let M={schema:{},count:1,cycle:void 0,path:u.path};h.seen.set(v,M);let W=v._zod.toJSONSchema?.();if(W)M.schema=W;else{let J={...u,schemaPath:[...u.schemaPath,v],path:u.path};if(v._zod.processJSONSchema)v._zod.processJSONSchema(h,M.schema,J);else{let z=M.schema,B=h.processors[P.type];if(!B)throw Error(`[toJSONSchema]: Non-representable type encountered: ${P.type}`);B(v,h,z,J)}let R=v._zod.parent;if(R){if(!M.ref)M.ref=R;Ho(R,h,J),h.seen.get(R).isParent=!0}}let Y=h.metadataRegistry.get(v);if(Y)Object.assign(M.schema,Y);if(h.io==="input"&&to(v))delete M.schema.examples,delete M.schema.default;if(h.io==="input"&&M.schema._prefault)(O=M.schema).default??(O.default=M.schema._prefault);return delete M.schema._prefault,h.seen.get(v).schema}function oq(v,h){let u=v.seen.get(h);if(!u)throw Error("Unprocessed schema. This is a bug in Zod.");let O=new Map;for(let M of v.seen.entries()){let W=v.metadataRegistry.get(M[0])?.id;if(W){let Y=O.get(W);if(Y&&Y!==M[0])throw Error(`Duplicate schema id "${W}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);O.set(W,M[0])}}let P=(M)=>{let W=v.target==="draft-2020-12"?"$defs":"definitions";if(v.external){let R=v.external.registry.get(M[0])?.id,z=v.external.uri??((j)=>j);if(R)return{ref:z(R)};let B=M[1].defId??M[1].schema.id??`schema${v.counter++}`;return M[1].defId=B,{defId:B,ref:`${z("__shared")}#/${W}/${B}`}}if(M[1]===u)return{ref:"#"};let Q=`${"#"}/${W}/`,J=M[1].schema.id??`__schema${v.counter++}`;return{defId:J,ref:Q+J}},A=(M)=>{if(M[1].schema.$ref)return;let W=M[1],{ref:Y,defId:Q}=P(M);if(W.def={...W.schema},Q)W.defId=Q;let J=W.schema;for(let R in J)delete J[R];J.$ref=Y};if(v.cycles==="throw")for(let M of v.seen.entries()){let W=M[1];if(W.cycle)throw Error(`Cycle detected: #/${W.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let M of v.seen.entries()){let W=M[1];if(h===M[0]){A(M);continue}if(v.external){let Q=v.external.registry.get(M[0])?.id;if(h!==M[0]&&Q){A(M);continue}}if(v.metadataRegistry.get(M[0])?.id){A(M);continue}if(W.cycle){A(M);continue}if(W.count>1){if(v.reused==="ref"){A(M);continue}}}}function vq(v,h){let u=v.seen.get(h);if(!u)throw Error("Unprocessed schema. This is a bug in Zod.");let O=(M)=>{let W=v.seen.get(M);if(W.ref===null)return;let Y=W.def??W.schema,Q={...Y},J=W.ref;if(W.ref=null,J){O(J);let z=v.seen.get(J),B=z.schema;if(B.$ref&&(v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"))Y.allOf=Y.allOf??[],Y.allOf.push(B);else Object.assign(Y,B);if(Object.assign(Y,Q),M._zod.parent===J)for(let m in Y){if(m==="$ref"||m==="allOf")continue;if(!(m in Q))delete Y[m]}if(B.$ref&&z.def)for(let m in Y){if(m==="$ref"||m==="allOf")continue;if(m in z.def&&JSON.stringify(Y[m])===JSON.stringify(z.def[m]))delete Y[m]}}let R=M._zod.parent;if(R&&R!==J){O(R);let z=v.seen.get(R);if(z?.schema.$ref){if(Y.$ref=z.schema.$ref,z.def)for(let B in Y){if(B==="$ref"||B==="allOf")continue;if(B in z.def&&JSON.stringify(Y[B])===JSON.stringify(z.def[B]))delete Y[B]}}}v.override({zodSchema:M,jsonSchema:Y,path:W.path??[]})};for(let M of[...v.seen.entries()].reverse())O(M[0]);let P={};if(v.target==="draft-2020-12")P.$schema="https://json-schema.org/draft/2020-12/schema";else if(v.target==="draft-07")P.$schema="http://json-schema.org/draft-07/schema#";else if(v.target==="draft-04")P.$schema="http://json-schema.org/draft-04/schema#";else if(v.target==="openapi-3.0");if(v.external?.uri){let M=v.external.registry.get(h)?.id;if(!M)throw Error("Schema is missing an `id` property");P.$id=v.external.uri(M)}Object.assign(P,u.def??u.schema);let A=v.external?.defs??{};for(let M of v.seen.entries()){let W=M[1];if(W.def&&W.defId)A[W.defId]=W.def}if(v.external);else if(Object.keys(A).length>0)if(v.target==="draft-2020-12")P.$defs=A;else P.definitions=A;try{let M=JSON.parse(JSON.stringify(P));return Object.defineProperty(M,"~standard",{value:{...h["~standard"],jsonSchema:{input:Q2(h,"input",v.processors),output:Q2(h,"output",v.processors)}},enumerable:!1,writable:!1}),M}catch(M){throw Error("Error converting schema to JSON.")}}function to(v,h){let u=h??{seen:new Set};if(u.seen.has(v))return!1;u.seen.add(v);let O=v._zod.def;if(O.type==="transform")return!0;if(O.type==="array")return to(O.element,u);if(O.type==="set")return to(O.valueType,u);if(O.type==="lazy")return to(O.getter(),u);if(O.type==="promise"||O.type==="optional"||O.type==="nonoptional"||O.type==="nullable"||O.type==="readonly"||O.type==="default"||O.type==="prefault")return to(O.innerType,u);if(O.type==="intersection")return to(O.left,u)||to(O.right,u);if(O.type==="record"||O.type==="map")return to(O.keyType,u)||to(O.valueType,u);if(O.type==="pipe")return to(O.in,u)||to(O.out,u);if(O.type==="object"){for(let P in O.shape)if(to(O.shape[P],u))return!0;return!1}if(O.type==="union"){for(let P of O.options)if(to(P,u))return!0;return!1}if(O.type==="tuple"){for(let P of O.items)if(to(P,u))return!0;if(O.rest&&to(O.rest,u))return!0;return!1}return!1}var BX=(v,h={})=>(u)=>{let O=gq({...u,processors:h});return Ho(v,O),oq(O,v),vq(O,v)},Q2=(v,h,u={})=>(O)=>{let{libraryOptions:P,target:A}=O??{},M=gq({...P??{},target:A,io:h,processors:u});return Ho(v,M),oq(M,v),vq(M,v)};var VL={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},ZX=(v,h,u,O)=>{let P=u;P.type="string";let{minimum:A,maximum:M,format:W,patterns:Y,contentEncoding:Q}=v._zod.bag;if(typeof A==="number")P.minLength=A;if(typeof M==="number")P.maxLength=M;if(W){if(P.format=VL[W]??W,P.format==="")delete P.format;if(W==="time")delete P.format}if(Q)P.contentEncoding=Q;if(Y&&Y.size>0){let J=[...Y];if(J.length===1)P.pattern=J[0].source;else if(J.length>1)P.allOf=[...J.map((R)=>({...h.target==="draft-07"||h.target==="draft-04"||h.target==="openapi-3.0"?{type:"string"}:{},pattern:R.source}))]}};var xX=(v,h,u,O)=>{u.not={}};var mX=(v,h,u,O)=>{};var TX=(v,h,u,O)=>{let P=v._zod.def,A=A2(P.entries);if(A.every((M)=>typeof M==="number"))u.type="number";if(A.every((M)=>typeof M==="string"))u.type="string";u.enum=A},CX=(v,h,u,O)=>{let P=v._zod.def,A=[];for(let M of P.values)if(M===void 0){if(h.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof M==="bigint")if(h.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else A.push(Number(M));else A.push(M);if(A.length===0);else if(A.length===1){let M=A[0];if(u.type=M===null?"null":typeof M,h.target==="draft-04"||h.target==="openapi-3.0")u.enum=[M];else u.const=M}else{if(A.every((M)=>typeof M==="number"))u.type="number";if(A.every((M)=>typeof M==="string"))u.type="string";if(A.every((M)=>typeof M==="boolean"))u.type="boolean";if(A.every((M)=>M===null))u.type="null";u.enum=A}};var iX=(v,h,u,O)=>{if(h.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var SX=(v,h,u,O)=>{if(h.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var kX=(v,h,u,O)=>{let P=u,A=v._zod.def,{minimum:M,maximum:W}=v._zod.bag;if(typeof M==="number")P.minItems=M;if(typeof W==="number")P.maxItems=W;P.type="array",P.items=Ho(A.element,h,{...O,path:[...O.path,"items"]})},nX=(v,h,u,O)=>{let P=u,A=v._zod.def;P.type="object",P.properties={};let M=A.shape;for(let Q in M)P.properties[Q]=Ho(M[Q],h,{...O,path:[...O.path,"properties",Q]});let W=new Set(Object.keys(M)),Y=new Set([...W].filter((Q)=>{let J=A.shape[Q]._zod;if(h.io==="input")return J.optin===void 0;else return J.optout===void 0}));if(Y.size>0)P.required=Array.from(Y);if(A.catchall?._zod.def.type==="never")P.additionalProperties=!1;else if(!A.catchall){if(h.io==="output")P.additionalProperties=!1}else if(A.catchall)P.additionalProperties=Ho(A.catchall,h,{...O,path:[...O.path,"additionalProperties"]})},DX=(v,h,u,O)=>{let P=v._zod.def,A=P.inclusive===!1,M=P.options.map((W,Y)=>Ho(W,h,{...O,path:[...O.path,A?"oneOf":"anyOf",Y]}));if(A)u.oneOf=M;else u.anyOf=M},tX=(v,h,u,O)=>{let P=v._zod.def,A=Ho(P.left,h,{...O,path:[...O.path,"allOf",0]}),M=Ho(P.right,h,{...O,path:[...O.path,"allOf",1]}),W=(Q)=>("allOf"in Q)&&Object.keys(Q).length===1,Y=[...W(A)?A.allOf:[A],...W(M)?M.allOf:[M]];u.allOf=Y};var VX=(v,h,u,O)=>{let P=v._zod.def,A=Ho(P.innerType,h,O),M=h.seen.get(v);if(h.target==="openapi-3.0")M.ref=P.innerType,u.nullable=!0;else u.anyOf=[A,{type:"null"}]},_X=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);A.ref=P.innerType},EX=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);A.ref=P.innerType,u.default=JSON.parse(JSON.stringify(P.defaultValue))},yX=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);if(A.ref=P.innerType,h.io==="input")u._prefault=JSON.parse(JSON.stringify(P.defaultValue))},cX=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);A.ref=P.innerType;let M;try{M=P.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}u.default=M},jX=(v,h,u,O)=>{let P=v._zod.def,A=h.io==="input"?P.in._zod.def.type==="transform"?P.out:P.in:P.out;Ho(A,h,O);let M=h.seen.get(v);M.ref=A},fX=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);A.ref=P.innerType,u.readOnly=!0};var lq=(v,h,u,O)=>{let P=v._zod.def;Ho(P.innerType,h,O);let A=h.seen.get(v);A.ref=P.innerType};var gF=_("ZodISODateTime",(v,h)=>{XG.init(v,h),xg.init(v,h)});function aX(v){return QX(gF,v)}var oF=_("ZodISODate",(v,h)=>{YG.init(v,h),xg.init(v,h)});function pX(v){return zX(oF,v)}var vF=_("ZodISOTime",(v,h)=>{JG.init(v,h),xg.init(v,h)});function dX(v){return KX(vF,v)}var lF=_("ZodISODuration",(v,h)=>{QG.init(v,h),xg.init(v,h)});function sX(v){return $X(lF,v)}var rY=(v,h)=>{Hu.init(v,h),v.name="ZodError",Object.defineProperties(v,{format:{value:(u)=>bR(v,u)},flatten:{value:(u)=>wR(v,u)},addIssue:{value:(u)=>{v.issues.push(u),v.message=JSON.stringify(v.issues,_5,2)}},addIssues:{value:(u)=>{v.issues.push(...u),v.message=JSON.stringify(v.issues,_5,2)}},isEmpty:{get(){return v.issues.length===0}}})},s_g=_("ZodError",rY),J0=_("ZodError",rY,{Parent:Error});var gY=Pu(J0),oY=qu(J0),vY=X2(J0),lY=Y2(J0),hY=HR(J0),wY=PR(J0),bY=qR(J0),uY=AR(J0),OY=MR(J0),HY=WR(J0),PY=eR(J0),qY=RR(J0);var go=_("ZodType",(v,h)=>{return _g.init(v,h),Object.assign(v["~standard"],{jsonSchema:{input:Q2(v,"input"),output:Q2(v,"output")}}),v.toJSONSchema=BX(v,{}),v.def=h,v.type=h.type,Object.defineProperty(v,"_def",{value:h}),v.check=(...u)=>{return v.clone(Mg.mergeDefs(h,{checks:[...h.checks??[],...u.map((O)=>typeof O==="function"?{_zod:{check:O,def:{check:"custom"},onattach:[]}}:O)]}),{parent:!0})},v.with=v.check,v.clone=(u,O)=>ov(v,u,O),v.brand=()=>v,v.register=(u,O)=>{return u.add(v,O),v},v.parse=(u,O)=>gY(v,u,O,{callee:v.parse}),v.safeParse=(u,O)=>vY(v,u,O),v.parseAsync=async(u,O)=>oY(v,u,O,{callee:v.parseAsync}),v.safeParseAsync=async(u,O)=>lY(v,u,O),v.spa=v.safeParseAsync,v.encode=(u,O)=>hY(v,u,O),v.decode=(u,O)=>wY(v,u,O),v.encodeAsync=async(u,O)=>bY(v,u,O),v.decodeAsync=async(u,O)=>uY(v,u,O),v.safeEncode=(u,O)=>OY(v,u,O),v.safeDecode=(u,O)=>HY(v,u,O),v.safeEncodeAsync=async(u,O)=>PY(v,u,O),v.safeDecodeAsync=async(u,O)=>qY(v,u,O),v.refine=(u,O)=>v.check(dF(u,O)),v.superRefine=(u)=>v.check(sF(u)),v.overwrite=(u)=>v.check(Kl(u)),v.optional=()=>WY(v),v.exactOptional=()=>kF(v),v.nullable=()=>eY(v),v.nullish=()=>WY(eY(v)),v.nonoptional=(u)=>EF(v,u),v.array=()=>z1(v),v.or=(u)=>ZF([v,u]),v.and=(u)=>mF(v,u),v.transform=(u)=>RY(v,iF(u)),v.default=(u)=>tF(v,u),v.prefault=(u)=>_F(v,u),v.catch=(u)=>cF(v,u),v.pipe=(u)=>RY(v,u),v.readonly=()=>aF(v),v.describe=(u)=>{let O=v.clone();return Fh.add(O,{description:u}),O},Object.defineProperty(v,"description",{get(){return Fh.get(v)?.description},configurable:!0}),v.meta=(...u)=>{if(u.length===0)return Fh.get(v);let O=v.clone();return Fh.add(O,u[0]),O},v.isOptional=()=>v.safeParse(void 0).success,v.isNullable=()=>v.safeParse(null).success,v.apply=(u)=>u(v),v}),GY=_("_ZodString",(v,h)=>{eu.init(v,h),go.init(v,h),v._zod.processJSONSchema=(O,P,A)=>ZX(v,O,P,A);let u=v._zod.bag;v.format=u.format??null,v.minLength=u.minimum??null,v.maxLength=u.maximum??null,v.regex=(...O)=>v.check(_P(...O)),v.includes=(...O)=>v.check(cP(...O)),v.startsWith=(...O)=>v.check(jP(...O)),v.endsWith=(...O)=>v.check(fP(...O)),v.min=(...O)=>v.check(y5(...O)),v.max=(...O)=>v.check(Ru(...O)),v.length=(...O)=>v.check(Gu(...O)),v.nonempty=(...O)=>v.check(y5(1,...O)),v.lowercase=(O)=>v.check(EP(O)),v.uppercase=(O)=>v.check(yP(O)),v.trim=()=>v.check(pP()),v.normalize=(...O)=>v.check(aP(...O)),v.toLowerCase=()=>v.check(dP()),v.toUpperCase=()=>v.check(sP()),v.slugify=()=>v.check(rq())}),uF=_("ZodString",(v,h)=>{eu.init(v,h),GY.init(v,h),v.email=(u)=>v.check(gX(OF,u)),v.url=(u)=>v.check(wX(HF,u)),v.jwt=(u)=>v.check(JX($F,u)),v.emoji=(u)=>v.check(bX(PF,u)),v.guid=(u)=>v.check(VP(AY,u)),v.uuid=(u)=>v.check(oX(Yu,u)),v.uuidv4=(u)=>v.check(vX(Yu,u)),v.uuidv6=(u)=>v.check(lX(Yu,u)),v.uuidv7=(u)=>v.check(hX(Yu,u)),v.nanoid=(u)=>v.check(uX(qF,u)),v.guid=(u)=>v.check(VP(AY,u)),v.cuid=(u)=>v.check(OX(AF,u)),v.cuid2=(u)=>v.check(HX(MF,u)),v.ulid=(u)=>v.check(PX(WF,u)),v.base64=(u)=>v.check(GX(QF,u)),v.base64url=(u)=>v.check(XX(zF,u)),v.xid=(u)=>v.check(qX(eF,u)),v.ksuid=(u)=>v.check(AX(RF,u)),v.ipv4=(u)=>v.check(MX(GF,u)),v.ipv6=(u)=>v.check(WX(XF,u)),v.cidrv4=(u)=>v.check(eX(YF,u)),v.cidrv6=(u)=>v.check(RX(JF,u)),v.e164=(u)=>v.check(YX(KF,u)),v.datetime=(u)=>v.check(aX(u)),v.date=(u)=>v.check(pX(u)),v.time=(u)=>v.check(dX(u)),v.duration=(u)=>v.check(sX(u))});function Eg(v){return rX(uF,v)}var xg=_("ZodStringFormat",(v,h)=>{Ng.init(v,h),GY.init(v,h)}),OF=_("ZodEmail",(v,h)=>{HG.init(v,h),xg.init(v,h)});var AY=_("ZodGUID",(v,h)=>{uG.init(v,h),xg.init(v,h)});var Yu=_("ZodUUID",(v,h)=>{OG.init(v,h),xg.init(v,h)});var HF=_("ZodURL",(v,h)=>{PG.init(v,h),xg.init(v,h)});var PF=_("ZodEmoji",(v,h)=>{qG.init(v,h),xg.init(v,h)});var qF=_("ZodNanoID",(v,h)=>{AG.init(v,h),xg.init(v,h)});var AF=_("ZodCUID",(v,h)=>{MG.init(v,h),xg.init(v,h)});var MF=_("ZodCUID2",(v,h)=>{WG.init(v,h),xg.init(v,h)});var WF=_("ZodULID",(v,h)=>{eG.init(v,h),xg.init(v,h)});var eF=_("ZodXID",(v,h)=>{RG.init(v,h),xg.init(v,h)});var RF=_("ZodKSUID",(v,h)=>{GG.init(v,h),xg.init(v,h)});var GF=_("ZodIPv4",(v,h)=>{zG.init(v,h),xg.init(v,h)});var XF=_("ZodIPv6",(v,h)=>{KG.init(v,h),xg.init(v,h)});var YF=_("ZodCIDRv4",(v,h)=>{$G.init(v,h),xg.init(v,h)});var JF=_("ZodCIDRv6",(v,h)=>{UG.init(v,h),xg.init(v,h)});var QF=_("ZodBase64",(v,h)=>{FG.init(v,h),xg.init(v,h)});var zF=_("ZodBase64URL",(v,h)=>{IG.init(v,h),xg.init(v,h)});var KF=_("ZodE164",(v,h)=>{NG.init(v,h),xg.init(v,h)});var $F=_("ZodJWT",(v,h)=>{BG.init(v,h),xg.init(v,h)});var UF=_("ZodUnknown",(v,h)=>{ZG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>mX(v,u,O,P)});function MY(){return UX(UF)}var LF=_("ZodNever",(v,h)=>{xG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>xX(v,u,O,P)});function FF(v){return LX(LF,v)}var IF=_("ZodArray",(v,h)=>{mG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>kX(v,u,O,P),v.element=h.element,v.min=(u,O)=>v.check(y5(u,O)),v.nonempty=(u)=>v.check(y5(1,u)),v.max=(u,O)=>v.check(Ru(u,O)),v.length=(u,O)=>v.check(Gu(u,O)),v.unwrap=()=>v.element});function z1(v,h){return FX(IF,v,h)}var NF=_("ZodObject",(v,h)=>{iG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>nX(v,u,O,P),Mg.defineLazy(v,"shape",()=>{return h.shape}),v.keyof=()=>z2(Object.keys(v._zod.def.shape)),v.catchall=(u)=>v.clone({...v._zod.def,catchall:u}),v.passthrough=()=>v.clone({...v._zod.def,catchall:MY()}),v.loose=()=>v.clone({...v._zod.def,catchall:MY()}),v.strict=()=>v.clone({...v._zod.def,catchall:FF()}),v.strip=()=>v.clone({...v._zod.def,catchall:void 0}),v.extend=(u)=>{return Mg.extend(v,u)},v.safeExtend=(u)=>{return Mg.safeExtend(v,u)},v.merge=(u)=>Mg.merge(v,u),v.pick=(u)=>Mg.pick(v,u),v.omit=(u)=>Mg.omit(v,u),v.partial=(...u)=>Mg.partial(XY,v,u[0]),v.required=(...u)=>Mg.required(YY,v,u[0])});function Ih(v,h){let u={type:"object",shape:v??{},...Mg.normalizeParams(h)};return new NF(u)}var BF=_("ZodUnion",(v,h)=>{SG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>DX(v,u,O,P),v.options=h.options});function ZF(v,h){return new BF({type:"union",options:v,...Mg.normalizeParams(h)})}var xF=_("ZodIntersection",(v,h)=>{kG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>tX(v,u,O,P)});function mF(v,h){return new xF({type:"intersection",left:v,right:h})}var hq=_("ZodEnum",(v,h)=>{nG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(O,P,A)=>TX(v,O,P,A),v.enum=h.entries,v.options=Object.values(h.entries);let u=new Set(Object.keys(h.entries));v.extract=(O,P)=>{let A={};for(let M of O)if(u.has(M))A[M]=h.entries[M];else throw Error(`Key ${M} not found in enum`);return new hq({...h,checks:[],...Mg.normalizeParams(P),entries:A})},v.exclude=(O,P)=>{let A={...h.entries};for(let M of O)if(u.has(M))delete A[M];else throw Error(`Key ${M} not found in enum`);return new hq({...h,checks:[],...Mg.normalizeParams(P),entries:A})}});function z2(v,h){let u=Array.isArray(v)?Object.fromEntries(v.map((O)=>[O,O])):v;return new hq({type:"enum",entries:u,...Mg.normalizeParams(h)})}var TF=_("ZodLiteral",(v,h)=>{DG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>CX(v,u,O,P),v.values=new Set(h.values),Object.defineProperty(v,"value",{get(){if(h.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return h.values[0]}})});function wq(v,h){return new TF({type:"literal",values:Array.isArray(v)?v:[v],...Mg.normalizeParams(h)})}var CF=_("ZodTransform",(v,h)=>{tG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>SX(v,u,O,P),v._zod.parse=(u,O)=>{if(O.direction==="backward")throw new P2(v.constructor.name);u.addIssue=(A)=>{if(typeof A==="string")u.issues.push(Mg.issue(A,u.value,h));else{let M=A;if(M.fatal)M.continue=!1;M.code??(M.code="custom"),M.input??(M.input=u.value),M.inst??(M.inst=v),u.issues.push(Mg.issue(M))}};let P=h.transform(u.value,u);if(P instanceof Promise)return P.then((A)=>{return u.value=A,u});return u.value=P,u}});function iF(v){return new CF({type:"transform",transform:v})}var XY=_("ZodOptional",(v,h)=>{tP.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>lq(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function WY(v){return new XY({type:"optional",innerType:v})}var SF=_("ZodExactOptional",(v,h)=>{VG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>lq(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function kF(v){return new SF({type:"optional",innerType:v})}var nF=_("ZodNullable",(v,h)=>{_G.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>VX(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function eY(v){return new nF({type:"nullable",innerType:v})}var DF=_("ZodDefault",(v,h)=>{EG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>EX(v,u,O,P),v.unwrap=()=>v._zod.def.innerType,v.removeDefault=v.unwrap});function tF(v,h){return new DF({type:"default",innerType:v,get defaultValue(){return typeof h==="function"?h():Mg.shallowClone(h)}})}var VF=_("ZodPrefault",(v,h)=>{yG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>yX(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function _F(v,h){return new VF({type:"prefault",innerType:v,get defaultValue(){return typeof h==="function"?h():Mg.shallowClone(h)}})}var YY=_("ZodNonOptional",(v,h)=>{cG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>_X(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function EF(v,h){return new YY({type:"nonoptional",innerType:v,...Mg.normalizeParams(h)})}var yF=_("ZodCatch",(v,h)=>{jG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>cX(v,u,O,P),v.unwrap=()=>v._zod.def.innerType,v.removeCatch=v.unwrap});function cF(v,h){return new yF({type:"catch",innerType:v,catchValue:typeof h==="function"?h:()=>h})}var jF=_("ZodPipe",(v,h)=>{fG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>jX(v,u,O,P),v.in=h.in,v.out=h.out});function RY(v,h){return new jF({type:"pipe",in:v,out:h})}var fF=_("ZodReadonly",(v,h)=>{aG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>fX(v,u,O,P),v.unwrap=()=>v._zod.def.innerType});function aF(v){return new fF({type:"readonly",innerType:v})}var pF=_("ZodCustom",(v,h)=>{pG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,O,P)=>iX(v,u,O,P)});function dF(v,h={}){return IX(pF,v,h)}function sF(v){return NX(v)}var JY=Ih({type:z2(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),QY=Ih({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:z1(Eg()).optional()}),rI=Ih({name:Eg().min(1).max(200),code:Eg(),type:z2(["trigger","library"]),triggers:z1(Eg()).optional(),bindings:z1(JY).optional(),folder:Eg().optional(),metadata:QY.optional()}),zY=Ih({format:wq("lumiscript-pack-v1"),exportedAt:Eg(),scripts:z1(rI).min(1).max(100)}),gI=Ih({name:Eg().min(1).max(200),file:Eg().min(1),type:z2(["trigger","library"]),triggers:z1(Eg()).optional(),bindings:z1(JY).optional(),folder:Eg().optional(),metadata:QY.optional()}),Qyg=Ih({format:wq("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:z1(gI).min(1).max(100)});var KY=1048576;async function $Y(v){let h=new Uint8Array(await v.arrayBuffer()),u;try{u=y3(h)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let O=u["pack.json"];if(!O)throw Error("Invalid script pack: missing pack.json");if(O.byteLength>KY)throw Error(`Pack exceeds the ${KY/1024/1024} MB decompressed size limit`);let P=NP(O),A;try{A=JSON.parse(P)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return zY.parse(A).scripts}var wg=Ar(rg(),1);function oI(v){let u="";for(let O=0;O<v.length;O+=32768)u+=String.fromCharCode(...v.subarray(O,O+32768));return btoa(u)}function vI(v){let h=new Map;for(let P of v){let A=P.folder??"";if(!h.has(A))h.set(A,[]);h.get(A).push(P)}let u=new Map;if(h.has(""))u.set("",h.get(""));let O=[...h.keys()].filter((P)=>P!=="").sort();for(let P of O)u.set(P,h.get(P));return u}var Ju=({scripts:v,selectedId:h,execInfo:u,onSelect:O,onEdit:P,sendToBackend:A})=>{let[M,W]=K2.useState("trigger"),[Y,Q]=K2.useState(new Set),J=K2.useRef(null),R=v.filter((a)=>a.type===M),z=vI(R),B=z.size>1||z.size===1&&!z.has(""),j=(a)=>{Q((s)=>{let lr=new Set(s);if(lr.has(a))lr.delete(a);else lr.add(a);return lr})},m=()=>{let a=M==="library"?"Library name:":"Script name:",s=window.prompt(a);if(!s?.trim())return;A({type:"create_script",name:s.trim(),scriptType:M})},y=(a)=>{if(R.length===0)return;if(a.shiftKey){let lr=BP(R);A({type:"save_pack_to_disk",bytesB64:oI(lr),scriptType:M});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;c3(R,s.trim())},rr=()=>{J.current?.click()},qr=async(a)=>{let s=a.target.files?.[0];if(!s)return;a.target.value="";try{let lr=await $Y(s),C=(S)=>S==="library"?"[L]":"[T]",V=lr.map((S)=>`  ${C(S.type)} ${S.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${V}

Imported scripts will be disabled. Review and enable them manually.`))return;A({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},vr=(a)=>{let s=u[a.id];return wg.jsxDEV(B3,{script:a,selected:a.id===h,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>O(a.id),onEdit:()=>P(a.id),sendToBackend:A},a.id,!1,void 0,this)};return wg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[wg.jsxDEV("div",{className:"ls-list-header",children:[wg.jsxDEV("div",{className:"ls-list-type-tabs",children:[wg.jsxDEV("button",{className:`ls-type-tab${M==="trigger"?" ls-active":""}`,onClick:()=>W("trigger"),title:"Scripts",children:wg.jsxDEV(Go,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:`ls-type-tab${M==="library"?" ls-active":""}`,onClick:()=>W("library"),title:"Libraries",children:wg.jsxDEV(Qh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("div",{className:"ls-list-actions",children:[wg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:wg.jsxDEV(h2,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:"ls-icon-btn",onClick:y,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:R.length===0,children:wg.jsxDEV(zh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:"New script",children:wg.jsxDEV(pb,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("input",{ref:J,type:"file",accept:".zip",style:{display:"none"},onChange:qr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("div",{className:"ls-list-body",children:R.length===0?wg.jsxDEV("div",{className:"ls-list-empty",children:[wg.jsxDEV(Cv,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),wg.jsxDEV("p",{children:["No ",M==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),wg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):B?[...z.entries()].map(([a,s])=>{let lr=Y.has(a);return a===""?wg.jsxDEV("div",{children:s.map(vr)},"__unfiled",!1,void 0,this):wg.jsxDEV("div",{className:"ls-folder-group",children:[wg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>j(a),children:[lr?wg.jsxDEV(W1,{size:11},void 0,!1,void 0,this):wg.jsxDEV(Xo,{size:11},void 0,!1,void 0,this),wg.jsxDEV(Kh,{size:11},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-name",children:a},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(C)=>{C.stopPropagation();let V=window.prompt("Rename folder:",a);if(V===null||V.trim()===""||V.trim()===a)return;for(let c of s)A({type:"update_script",id:c.id,patch:{folder:V.trim()}})},children:wg.jsxDEV(s0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&s.map(vr)]},`folder-${a}`,!0,void 0,this)}):R.map(vr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var I2=Ar(hg(),1),HJ=Ar(i5(),1);var Jo=Ar(hg(),1);function UY(v,h){(h==null||h>v.length)&&(h=v.length);for(var u=0,O=Array(h);u<h;u++)O[u]=v[u];return O}function lI(v){if(Array.isArray(v))return v}function hI(v,h,u){return(h=HI(h))in v?Object.defineProperty(v,h,{value:u,enumerable:!0,configurable:!0,writable:!0}):v[h]=u,v}function wI(v,h){var u=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(u!=null){var O,P,A,M,W=[],Y=!0,Q=!1;try{if(A=(u=u.call(v)).next,h===0);else for(;!(Y=(O=A.call(u)).done)&&(W.push(O.value),W.length!==h);Y=!0);}catch(J){Q=!0,P=J}finally{try{if(!Y&&u.return!=null&&(M=u.return(),Object(M)!==M))return}finally{if(Q)throw P}}return W}}function bI(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LY(v,h){var u=Object.keys(v);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(v);h&&(O=O.filter(function(P){return Object.getOwnPropertyDescriptor(v,P).enumerable})),u.push.apply(u,O)}return u}function bq(v){for(var h=1;h<arguments.length;h++){var u=arguments[h]!=null?arguments[h]:{};h%2?LY(Object(u),!0).forEach(function(O){hI(v,O,u[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(u)):LY(Object(u)).forEach(function(O){Object.defineProperty(v,O,Object.getOwnPropertyDescriptor(u,O))})}return v}function FY(v,h){if(v==null)return{};var u,O,P=uI(v,h);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(v);for(O=0;O<A.length;O++)u=A[O],h.indexOf(u)===-1&&{}.propertyIsEnumerable.call(v,u)&&(P[u]=v[u])}return P}function uI(v,h){if(v==null)return{};var u={};for(var O in v)if({}.hasOwnProperty.call(v,O)){if(h.indexOf(O)!==-1)continue;u[O]=v[O]}return u}function IY(v,h){return lI(v)||wI(v,h)||PI(v,h)||bI()}function OI(v,h){if(typeof v!="object"||!v)return v;var u=v[Symbol.toPrimitive];if(u!==void 0){var O=u.call(v,h);if(typeof O!="object")return O;throw TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(v)}function HI(v){var h=OI(v,"string");return typeof h=="symbol"?h:h+""}function PI(v,h){if(v){if(typeof v=="string")return UY(v,h);var u={}.toString.call(v).slice(8,-1);return u==="Object"&&v.constructor&&(u=v.constructor.name),u==="Map"||u==="Set"?Array.from(v):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?UY(v,h):void 0}}function qI(v,h,u){if(h in v)Object.defineProperty(v,h,{value:u,enumerable:!0,configurable:!0,writable:!0});else v[h]=u;return v}function NY(v,h){var u=Object.keys(v);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(v);if(h)O=O.filter(function(P){return Object.getOwnPropertyDescriptor(v,P).enumerable});u.push.apply(u,O)}return u}function BY(v){for(var h=1;h<arguments.length;h++){var u=arguments[h]!=null?arguments[h]:{};if(h%2)NY(Object(u),!0).forEach(function(O){qI(v,O,u[O])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(v,Object.getOwnPropertyDescriptors(u));else NY(Object(u)).forEach(function(O){Object.defineProperty(v,O,Object.getOwnPropertyDescriptor(u,O))})}return v}function AI(){for(var v=arguments.length,h=Array(v),u=0;u<v;u++)h[u]=arguments[u];return function(O){return h.reduceRight(function(P,A){return A(P)},O)}}function $2(v){return function h(){var u=this;for(var O=arguments.length,P=Array(O),A=0;A<O;A++)P[A]=arguments[A];return P.length>=v.length?v.apply(this,P):function(){for(var M=arguments.length,W=Array(M),Y=0;Y<M;Y++)W[Y]=arguments[Y];return h.apply(u,[].concat(P,W))}}}function zu(v){return{}.toString.call(v).includes("Object")}function MI(v){return!Object.keys(v).length}function U2(v){return typeof v==="function"}function WI(v,h){return Object.prototype.hasOwnProperty.call(v,h)}function eI(v,h){if(!zu(h))$l("changeType");if(Object.keys(h).some(function(u){return!WI(v,u)}))$l("changeField");return h}function RI(v){if(!U2(v))$l("selectorType")}function GI(v){if(!(U2(v)||zu(v)))$l("handlerType");if(zu(v)&&Object.values(v).some(function(h){return!U2(h)}))$l("handlersType")}function XI(v){if(!v)$l("initialIsRequired");if(!zu(v))$l("initialType");if(MI(v))$l("initialContent")}function YI(v,h){throw Error(v[h]||v.default)}var JI={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$l=$2(YI)(JI),Qu={changes:eI,selector:RI,handler:GI,initial:XI};function QI(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qu.initial(v),Qu.handler(h);var u={current:v},O=$2($I)(u,h),P=$2(KI)(u),A=$2(Qu.changes)(v),M=$2(zI)(u);function W(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(J){return J};return Qu.selector(Q),Q(u.current)}function Y(Q){AI(O,P,A,M)(Q)}return[W,Y]}function zI(v,h){return U2(h)?h(v.current):h}function KI(v,h){return v.current=BY(BY({},v.current),h),h}function $I(v,h,u){return U2(h)?h(v.current):Object.keys(u).forEach(function(O){var P;return(P=h[O])===null||P===void 0?void 0:P.call(h,v.current[O])}),u}var UI={create:QI},ZY=UI;var xY={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function mY(v){return function h(){var u=this;for(var O=arguments.length,P=Array(O),A=0;A<O;A++)P[A]=arguments[A];return P.length>=v.length?v.apply(this,P):function(){for(var M=arguments.length,W=Array(M),Y=0;Y<M;Y++)W[Y]=arguments[Y];return h.apply(u,[].concat(P,W))}}}function TY(v){return{}.toString.call(v).includes("Object")}function LI(v){if(!v)CY("configIsRequired");if(!TY(v))CY("configType");if(v.urls)return FI(),{paths:{vs:v.urls.monacoBase}};return v}function FI(){console.warn(iY.deprecation)}function II(v,h){throw Error(v[h]||v.default)}var iY={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},CY=mY(II)(iY),SY={config:LI};var kY=function(){for(var h=arguments.length,u=Array(h),O=0;O<h;O++)u[O]=arguments[O];return function(P){return u.reduceRight(function(A,M){return M(A)},P)}};function uq(v,h){return Object.keys(h).forEach(function(u){if(h[u]instanceof Object){if(v[u])Object.assign(h[u],uq(v[u],h[u]))}}),bq(bq({},v),h)}var NI={type:"cancelation",msg:"operation is manually canceled"};function Ku(v){var h=!1,u=new Promise(function(O,P){v.then(function(A){return h?P(NI):O(A)}),v.catch(P)});return u.cancel=function(){return h=!0},u}var BI=["monaco"],ZI=ZY.create({config:xY,isInitialized:!1,resolve:null,reject:null,monaco:null}),nY=IY(ZI,2),L2=nY[0],$u=nY[1];function xI(v){var h=SY.config(v),u=h.monaco,O=FY(h,BI);$u(function(P){return{config:uq(P.config,O),monaco:u}})}function mI(){var v=L2(function(h){var{monaco:u,isInitialized:O,resolve:P}=h;return{monaco:u,isInitialized:O,resolve:P}});if(!v.isInitialized){if($u({isInitialized:!0}),v.monaco)return v.resolve(v.monaco),Ku(Oq);if(window.monaco&&window.monaco.editor)return DY(window.monaco),v.resolve(window.monaco),Ku(Oq);kY(TI,iI)(SI)}return Ku(Oq)}function TI(v){return document.body.appendChild(v)}function CI(v){var h=document.createElement("script");return v&&(h.src=v),h}function iI(v){var h=L2(function(O){var{config:P,reject:A}=O;return{config:P,reject:A}}),u=CI("".concat(h.config.paths.vs,"/loader.js"));return u.onload=function(){return v()},u.onerror=h.reject,u}function SI(){var v=L2(function(u){var{config:O,resolve:P,reject:A}=u;return{config:O,resolve:P,reject:A}}),h=window.require;h.config(v.config),h(["vs/editor/editor.main"],function(u){var O=u.m||u;DY(O),v.resolve(O)},function(u){v.reject(u)})}function DY(v){if(!L2().monaco)$u({monaco:v})}function kI(){return L2(function(v){var h=v.monaco;return h})}var Oq=new Promise(function(v,h){return $u({resolve:v,reject:h})}),Nh={config:xI,init:mI,__getMonacoInstance:kI};var tY=Ar(hg(),1),Po=Ar(hg(),1);var VY=Ar(hg(),1),Lu=Ar(hg(),1),_Y=Ar(hg(),1),yY=Ar(hg(),1),Fu=Ar(hg(),1),rN=Ar(hg(),1);var fY=Ar(hg(),1),ng=Ar(hg(),1);var Iu=Ar(hg(),1),nI={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Hq=nI,DI={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},tI=DI;function VI({children:v}){return _Y.default.createElement("div",{style:tI.container},v)}var _I=VI,EI=_I;function yI({width:v,height:h,isEditorReady:u,loading:O,_ref:P,className:A,wrapperProps:M}){return Lu.default.createElement("section",{style:{...Hq.wrapper,width:v,height:h},...M},!u&&Lu.default.createElement(EI,null,O),Lu.default.createElement("div",{ref:P,style:{...Hq.fullWidth,...!u&&Hq.hide},className:A}))}var cI=yI,EY=VY.memo(cI);function jI(v){yY.useEffect(v,[])}var cY=jI;function fI(v,h,u=!0){let O=Fu.useRef(!0);Fu.useEffect(O.current||!u?()=>{O.current=!1}:v,h)}var Q0=fI;function F2(){}function c5(v,h,u,O){return aI(v,O)||pI(v,h,u,O)}function aI(v,h){return v.editor.getModel(jY(v,h))}function pI(v,h,u,O){return v.editor.createModel(h,u,O?jY(v,O):void 0)}function jY(v,h){return v.Uri.parse(h)}function dI({original:v,modified:h,language:u,originalLanguage:O,modifiedLanguage:P,originalModelPath:A,modifiedModelPath:M,keepCurrentOriginalModel:W=!1,keepCurrentModifiedModel:Y=!1,theme:Q="light",loading:J="Loading...",options:R={},height:z="100%",width:B="100%",className:j,wrapperProps:m={},beforeMount:y=F2,onMount:rr=F2}){let[qr,vr]=Po.useState(!1),[a,s]=Po.useState(!0),lr=Po.useRef(null),C=Po.useRef(null),V=Po.useRef(null),c=Po.useRef(rr),S=Po.useRef(y),Jr=Po.useRef(!1);cY(()=>{let D=Nh.init();return D.then((d)=>(C.current=d)&&s(!1)).catch((d)=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>lr.current?Cr():D.cancel()}),Q0(()=>{if(lr.current&&C.current){let D=lr.current.getOriginalEditor(),d=c5(C.current,v||"",O||u||"text",A||"");d!==D.getModel()&&D.setModel(d)}},[A],qr),Q0(()=>{if(lr.current&&C.current){let D=lr.current.getModifiedEditor(),d=c5(C.current,h||"",P||u||"text",M||"");d!==D.getModel()&&D.setModel(d)}},[M],qr),Q0(()=>{let D=lr.current.getModifiedEditor();D.getOption(C.current.editor.EditorOption.readOnly)?D.setValue(h||""):h!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:h||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[h],qr),Q0(()=>{lr.current?.getModel()?.original.setValue(v||"")},[v],qr),Q0(()=>{let{original:D,modified:d}=lr.current.getModel();C.current.editor.setModelLanguage(D,O||u||"text"),C.current.editor.setModelLanguage(d,P||u||"text")},[u,O,P],qr),Q0(()=>{C.current?.editor.setTheme(Q)},[Q],qr),Q0(()=>{lr.current?.updateOptions(R)},[R],qr);let Rr=Po.useCallback(()=>{if(!C.current)return;S.current(C.current);let D=c5(C.current,v||"",O||u||"text",A||""),d=c5(C.current,h||"",P||u||"text",M||"");lr.current?.setModel({original:D,modified:d})},[u,h,P,v,O,A,M]),Qr=Po.useCallback(()=>{!Jr.current&&V.current&&(lr.current=C.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...R}),Rr(),C.current?.editor.setTheme(Q),vr(!0),Jr.current=!0)},[R,Q,Rr]);Po.useEffect(()=>{qr&&c.current(lr.current,C.current)},[qr]),Po.useEffect(()=>{!a&&!qr&&Qr()},[a,qr,Qr]);function Cr(){let D=lr.current?.getModel();W||D?.original?.dispose(),Y||D?.modified?.dispose(),lr.current?.dispose()}return Po.default.createElement(EY,{width:B,height:z,isEditorReady:qr,loading:J,_ref:V,className:j,wrapperProps:m})}var sI=dI,vcg=tY.memo(sI);function gN(v){let h=Iu.useRef();return Iu.useEffect(()=>{h.current=v},[v]),h.current}var oN=gN,Uu=new Map;function vN({defaultValue:v,defaultLanguage:h,defaultPath:u,value:O,language:P,path:A,theme:M="light",line:W,loading:Y="Loading...",options:Q={},overrideServices:J={},saveViewState:R=!0,keepCurrentModel:z=!1,width:B="100%",height:j="100%",className:m,wrapperProps:y={},beforeMount:rr=F2,onMount:qr=F2,onChange:vr,onValidate:a=F2}){let[s,lr]=ng.useState(!1),[C,V]=ng.useState(!0),c=ng.useRef(null),S=ng.useRef(null),Jr=ng.useRef(null),Rr=ng.useRef(qr),Qr=ng.useRef(rr),Cr=ng.useRef(),D=ng.useRef(O),d=oN(A),hr=ng.useRef(!1),or=ng.useRef(!1);cY(()=>{let n=Nh.init();return n.then((Pr)=>(c.current=Pr)&&V(!1)).catch((Pr)=>Pr?.type!=="cancelation"&&console.error("Monaco initialization: error:",Pr)),()=>S.current?k():n.cancel()}),Q0(()=>{let n=c5(c.current,v||O||"",h||P||"",A||u||"");n!==S.current?.getModel()&&(R&&Uu.set(d,S.current?.saveViewState()),S.current?.setModel(n),R&&S.current?.restoreViewState(Uu.get(A)))},[A],s),Q0(()=>{S.current?.updateOptions(Q)},[Q],s),Q0(()=>{!S.current||O===void 0||(S.current.getOption(c.current.editor.EditorOption.readOnly)?S.current.setValue(O):O!==S.current.getValue()&&(or.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:O,forceMoveMarkers:!0}]),S.current.pushUndoStop(),or.current=!1))},[O],s),Q0(()=>{let n=S.current?.getModel();n&&P&&c.current?.editor.setModelLanguage(n,P)},[P],s),Q0(()=>{W!==void 0&&S.current?.revealLine(W)},[W],s),Q0(()=>{c.current?.editor.setTheme(M)},[M],s);let er=ng.useCallback(()=>{if(!(!Jr.current||!c.current)&&!hr.current){Qr.current(c.current);let n=A||u,Pr=c5(c.current,O||v||"",h||P||"",n||"");S.current=c.current?.editor.create(Jr.current,{model:Pr,automaticLayout:!0,...Q},J),R&&S.current.restoreViewState(Uu.get(n)),c.current.editor.setTheme(M),W!==void 0&&S.current.revealLine(W),lr(!0),hr.current=!0}},[v,h,u,O,P,A,Q,J,R,M,W]);ng.useEffect(()=>{s&&Rr.current(S.current,c.current)},[s]),ng.useEffect(()=>{!C&&!s&&er()},[C,s,er]),D.current=O,ng.useEffect(()=>{s&&vr&&(Cr.current?.dispose(),Cr.current=S.current?.onDidChangeModelContent((n)=>{or.current||vr(S.current.getValue(),n)}))},[s,vr]),ng.useEffect(()=>{if(s){let n=c.current.editor.onDidChangeMarkers((Pr)=>{let zr=S.current.getModel()?.uri;if(zr&&Pr.find((Gr)=>Gr.path===zr.path)){let Gr=c.current.editor.getModelMarkers({resource:zr});a?.(Gr)}});return()=>{n?.dispose()}}return()=>{}},[s,a]);function k(){Cr.current?.dispose(),z?R&&Uu.set(A,S.current.saveViewState()):S.current.getModel()?.dispose(),S.current.dispose()}return ng.default.createElement(EY,{width:B,height:j,isEditorReady:s,loading:Y,_ref:Jr,className:m,wrapperProps:y})}var lN=vN,hN=fY.memo(lN),aY=hN;var j5=Ar(hg(),1);var qo=Ar(rg(),1),wN={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},pY=({entries:v,isRunning:h,onClear:u})=>{let[O,P]=j5.useState(!1),A=j5.useRef(null);j5.useEffect(()=>{if(!O&&A.current)A.current.scrollTop=A.current.scrollHeight},[v,O]);let M=()=>{let W=v.filter((Y)=>Y.type!=="separator").map((Y)=>`[${Y.timestamp}] ${Y.type.toUpperCase()}: ${Y.message}`).join(`
`);navigator.clipboard.writeText(W).catch(()=>{})};return qo.jsxDEV("div",{className:`ls-console${O?" ls-collapsed":""}`,children:[qo.jsxDEV("div",{className:"ls-console-header",onClick:()=>P((W)=>!W),children:[qo.jsxDEV(iv,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),qo.jsxDEV("span",{className:"ls-console-title",children:["Console",h?" — running…":v.length>0?` (${v.length})`:""]},void 0,!0,void 0,this),qo.jsxDEV("button",{className:"ls-icon-btn",onClick:(W)=>{W.stopPropagation(),M()},title:"Copy output",disabled:v.length===0,children:qo.jsxDEV(p0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),qo.jsxDEV("button",{className:"ls-icon-btn",onClick:(W)=>{W.stopPropagation(),u()},title:"Clear console",disabled:v.length===0,children:qo.jsxDEV(Fo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),O?qo.jsxDEV(Xo,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):qo.jsxDEV(G0,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&qo.jsxDEV("div",{className:"ls-console-output",ref:A,children:v.length===0?qo.jsxDEV("div",{className:"ls-console-empty",children:h?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):v.map((W,Y)=>W.type==="separator"?qo.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},Y,!1,void 0,this):qo.jsxDEV("div",{className:`ls-entry ${wN[W.type]??"ls-log"}`,children:[qo.jsxDEV("span",{className:"ls-entry-time",children:W.timestamp},void 0,!1,void 0,this),qo.jsxDEV("span",{className:"ls-entry-type",children:W.type.toUpperCase()},void 0,!1,void 0,this),qo.jsxDEV("span",{className:"ls-entry-msg",children:W.message},void 0,!1,void 0,this)]},Y,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=Ar(rg(),1),dY=({bindings:v,activeContext:h,onAdd:u,onRemove:O})=>{let P=()=>{let{characterId:M,characterName:W}=h;if(!M)return;if(v.some((Y)=>Y.type==="character"&&Y.characterId===M))return;u({type:"character",characterId:M,displayName:W??M})},A=()=>{let{chatId:M,characterName:W}=h;if(!M)return;if(v.some((Q)=>Q.type==="chat"&&Q.chatId===M))return;let Y=W?`${W} — ${M.slice(0,8)}`:M.slice(0,8);u({type:"chat",chatId:M,displayName:Y})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(_b,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),v.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):v.map((M,W)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[M.type==="character"?Vo.jsxDEV(t5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(n5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>O(W),title:"Remove binding",children:Vo.jsxDEV(no,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},W,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!h.characterId,title:h.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(t5,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:A,disabled:!h.chatId,title:h.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(n5,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var sY=Ar(hg(),1);var so=Ar(rg(),1),rJ=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Mcg=rJ.flatMap((v)=>v.events.map((h)=>h.name)),gJ=({scriptId:v,triggers:h,sendToBackend:u})=>{let[O,P]=sY.useState(!0),A=new Set(h),M=(W)=>{let Y=A.has(W)?h.filter((Q)=>Q!==W):[...h,W];u({type:"update_script",id:v,patch:{triggers:Y}})};return so.jsxDEV("div",{className:`ls-triggers${O?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>P((W)=>!W),children:[so.jsxDEV(R1,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),A.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:A.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:O?so.jsxDEV(Xo,{size:12},void 0,!1,void 0,this):so.jsxDEV(G0,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&so.jsxDEV("div",{className:"ls-triggers-body",children:rJ.map((W)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:W.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:W.events.map((Y)=>so.jsxDEV("button",{className:`ls-trigger-chip${A.has(Y.name)?" ls-trigger-chip-active":""}`,onClick:()=>M(Y.name),title:Y.description,children:Y.name},Y.name,!1,void 0,this))},void 0,!1,void 0,this)]},W.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var oJ=`
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
  /** Persona CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
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
`;var wJ=Ar(hg(),1);function vJ(v){return v.split("`").map((u,O)=>{if(O%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function bN(v){return v.split("`").map((O,P)=>{if(P%2===1)return O;return O.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Ul(v,h){let u=`| ${v.join(" | ")} |`,O=`| ${v.map(()=>"---").join(" | ")} |`,P=h.map((A)=>`| ${A.map(bN).join(" | ")} |`);return[u,O,...P].join(`
`)}function uN(v){return v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field}function ON(v){if(v==="silent")return"*silent*";if(v==="boolean")return'`"true" / "false"`';return"`string`"}function HN(v){return v.aliases==="—"?"—":`\`${v.aliases}\``}function PN(v){let h=v.perms.length===0&&!v.note?"*none*":v.perms.map((u)=>`\`${u}\``).join(", ");return v.note?`${h}${v.perms.length?" ":""}${v.note}`:h}function qN(){return`## Lumiverse Events

${Ul(["Event","Group","Payload shape"],Pq.map((h)=>[`\`${h.name}\``,h.group,`\`${h.payload}\``]))}`}function AN(){return`## Permission Matrix

${qq.map((h)=>{let u=Ul(["Method","Required permissions"],h.rows.map((O)=>[`\`${O.method}\``,PN(O)]));return`### ${h.group}

${u}`}).join(`

`)}`}function MN(){let v=Ul(["Event","Payload fields","Emitted by"],Aq.map((u)=>[`\`${u.name}\``,`\`${u.payload}\``,u.emittedBy])),h="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${v}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function WN(){let v=Mq.map((u)=>{let O=Ul(["Macro","Aliases","Returns","Description"],u.rows.map((A)=>[`\`${A.macro}\``,HN(A),ON(A.returns),A.desc])),P=[`### ${u.label}`];if(u.description)P.push(`*${u.description}*`);return P.push(O),P.join(`

`)}),h='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${v.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function eN(){return`## Key Types

${Wq.map((v)=>lJ(v)).join(`

`)}`}function lJ(v,h="###"){let u=vJ(v.name),O=v.note?`*${vJ(v.note)}*

`:"",P=Ul(["Field","Type","Description"],v.fields.map((A)=>[`\`${uN(A)}\``,`\`${A.type}\``,A.desc]));return`${h} ${u}

${O}${P}`}function RN(){return`## API Functions

${eq.map((h)=>{let u=Ul(["Method","Arguments","Description"],h.rows.map((O)=>[`\`${O.name}\``,O.args,O.desc]));return`### ${h.group}

${u}`}).join(`

`)}`}function GN(){let h=Ul(["Method","Arguments","Description"],Rq.map((P)=>[`\`${P.name}\``,P.args,P.desc])),u=Ul(["Method","Arguments","Description"],Gq.map((P)=>[`\`${P.name}\``,P.args,P.desc])),O=Xq.map((P)=>lJ(P,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",h,"","### ls:council-prompt","",u,"","### Built-in types","",O].join(`
`)}function XN(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function YN(){let h=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,u=[qN(),AN(),MN(),WN(),eN(),RN(),GN(),XN()];return`${h}

---

${u.join(`

---

`)}
`}function hJ(){let v=YN(),u=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,O=new Blob([v],{type:"text/markdown;charset=utf-8"}),P=URL.createObjectURL(O),A=document.createElement("a");A.href=P,A.download=u,A.click(),URL.revokeObjectURL(P)}var L=Ar(rg(),1),Ll=({icon:v,title:h,defaultOpen:u=!1,children:O})=>{let[P,A]=wJ.useState(u);return L.jsxDEV("div",{className:"ls-ref-section",children:[L.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>A((M)=>!M),children:[L.jsxDEV("span",{className:"ls-ref-section-title",children:[v,h]},void 0,!0,void 0,this),P?L.jsxDEV(Xo,{size:12},void 0,!1,void 0,this):L.jsxDEV(W1,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),P&&L.jsxDEV("div",{className:"ls-ref-section-body",children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Wg=({children:v})=>L.jsxDEV("code",{className:"ls-ref-code",children:v},void 0,!1,void 0,this),JN=({children:v})=>L.jsxDEV("span",{className:"ls-ref-perm",children:v},void 0,!1,void 0,this),QN=()=>L.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),zN=()=>L.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),f5=({label:v,cols:h})=>L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:h,className:"ls-ref-group-header",children:v},void 0,!1,void 0,this)},void 0,!1,void 0,this),Pq=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],KN=()=>{let v="";return L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Pq.map((h)=>{let u=h.group!==v?h.group:"";return v=h.group,L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:u},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qq=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],$N=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:qq.map((v)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:v.group,cols:2},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:[h.perms.length===0&&!h.note?L.jsxDEV(QN,{},void 0,!1,void 0,this):null,h.perms.map((u)=>L.jsxDEV(JN,{children:u},u,!1,void 0,this)),h.note?L.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:h.perms.length?4:0},children:h.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},h.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Aq=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],UN=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Aq.map((v)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mq=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],LN=({type:v})=>{if(v==="silent")return L.jsxDEV(zN,{},void 0,!1,void 0,this);if(v==="boolean")return L.jsxDEV(Wg,{children:'"true" / "false"'},void 0,!1,void 0,this);return L.jsxDEV(Wg,{children:"string"},void 0,!1,void 0,this)},FN=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Mq.map((v)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:v.description?L.jsxDEV(L.Fragment,{children:[v.label," — ",L.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:v.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):v.label,cols:4},`hdr-${v.label}`,!1,void 0,this),v.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:h.aliases==="—"?L.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):L.jsxDEV(Wg,{children:h.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:L.jsxDEV(LN,{type:h.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wq=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],IN=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Wq.map((v)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&L.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),eq=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],NN=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:eq.map((v)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:v.group,cols:3},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.group}-${h.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Rq=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],Gq=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],BN=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],Xq=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],ZN=()=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",L.jsxDEV(Wg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",L.jsxDEV(Wg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",L.jsxDEV(Wg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",L.jsxDEV(Wg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",L.jsxDEV(Wg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",L.jsxDEV(Wg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:[L.jsxDEV(f5,{label:"ls:components",cols:3},void 0,!1,void 0,this),Rq.map((v)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),L.jsxDEV(f5,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),Gq.map((v)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),L.jsxDEV(f5,{label:"ls:icons",cols:3},void 0,!1,void 0,this),BN.map((v)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Xq.map((v)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&L.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),bJ=()=>L.jsxDEV("div",{className:"ls-ref",children:[L.jsxDEV("div",{className:"ls-ref-toolbar",children:L.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>hJ(),title:"Download the current reference as a Markdown file",children:[L.jsxDEV(zh,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(R1,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:L.jsxDEV(KN,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(cb,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:L.jsxDEV($N,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(db,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[L.jsxDEV(UN,{},void 0,!1,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",L.jsxDEV(Wg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(Vb,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[L.jsxDEV(FN,{},void 0,!1,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",L.jsxDEV(Wg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",L.jsxDEV(Wg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(Tv,{size:11},void 0,!1,void 0,this),title:"Key Types",children:L.jsxDEV(IN,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(yb,{size:11},void 0,!1,void 0,this),title:"API Functions",children:L.jsxDEV(NN,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(Tb,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:L.jsxDEV(ZN,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(fb,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[L.jsxDEV("p",{className:"ls-ref-muted",children:[L.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",L.jsxDEV(Wg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",L.jsxDEV(Wg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",L.jsxDEV(Wg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",L.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[L.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",L.jsxDEV(Wg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",L.jsxDEV(Wg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",L.jsxDEV(Wg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",L.jsxDEV(Wg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Br=Ar(rg(),1),uJ=!1,OJ=({script:v,allScripts:h,activeContext:u,isRunning:O,consoleEntries:P,editorFontSize:A,autosaveDebounceMs:M,onClearConsole:W,sendToBackend:Y})=>{let[Q,J]=Jo.useState(v.code),[R,z]=Jo.useState(!1),[B,j]=Jo.useState(!1),[m,y]=Jo.useState(v.name),[rr,qr]=Jo.useState("code"),[vr,a]=Jo.useState(!1),[s,lr]=Jo.useState(!1),C=Jo.useRef(null),V=Jo.useRef(null);Jo.useEffect(()=>{J(v.code),z(!1),y(v.name),lr(!1)},[v.id,v.code,v.name]),Jo.useEffect(()=>{Y({type:"get_active_context"})},[v.id,Y]),Jo.useEffect(()=>{let or=setInterval(()=>{Y({type:"get_active_context"})},2000);return()=>clearInterval(or)},[Y]);let c=Jo.useCallback((or)=>{Y({type:"update_script",id:v.id,patch:{code:or}}),z(!1)},[v.id,Y]),S=(or)=>{if(or===void 0)return;if(J(or),z(or!==v.code),C.current)clearTimeout(C.current);C.current=setTimeout(()=>c(or),M)},Jr=(or,er)=>{if(V.current=or,!uJ){uJ=!0;let k=er.languages.typescript.javascriptDefaults;k.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),k.setCompilerOptions({target:er.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),k.addExtraLib(oJ,"ts:lumiverse/lumiscript-api.d.ts")}or.addCommand(er.KeyMod.CtrlCmd|er.KeyCode.KeyS,()=>{if(C.current)clearTimeout(C.current);c(or.getValue())}),or.getModel()?.setEOL(er.editor.EndOfLineSequence.LF)},Rr=()=>{if(O)return;if(C.current)clearTimeout(C.current),C.current=null;if(R)c(V.current?.getValue()??Q);Y({type:"run_script",id:v.id})},Qr=()=>{let or=m.trim();if(or&&or!==v.name)Y({type:"update_script",id:v.id,patch:{name:or}});j(!1)},Cr=(or)=>{let er=v.bindings??[];Y({type:"update_script",id:v.id,patch:{bindings:[...er,or]}})},D=(or)=>{Y({type:"update_script",id:v.id,patch:{bindings:(v.bindings??[]).filter((er,k)=>k!==or)}})},d=()=>{if(v.allowDangerous)Y({type:"update_script",id:v.id,patch:{allowDangerous:!1}});else if(s)lr(!1),Y({type:"update_script",id:v.id,patch:{allowDangerous:!0}});else lr(!0)},hr=(or)=>new Date(or).toLocaleString();return Br.jsxDEV("div",{className:"ls-editor-root",children:[Br.jsxDEV("div",{className:"ls-editor-topbar",children:[B?Br.jsxDEV("input",{className:"ls-editor-name-input",value:m,autoFocus:!0,onChange:(or)=>y(or.target.value),onBlur:Qr,onKeyDown:(or)=>{if(or.key==="Enter")Qr();if(or.key==="Escape")y(v.name),j(!1)}},void 0,!1,void 0,this):Br.jsxDEV("span",{className:"ls-editor-name",onClick:()=>j(!0),title:"Click to rename",style:{cursor:"text"},children:v.name},void 0,!1,void 0,this),R&&Br.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Br.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>qr("code"),title:"Code editor",children:[Br.jsxDEV(Go,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Br.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>qr("docs"),title:"API reference",children:[Br.jsxDEV(Cb,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),v.type!=="library"&&Br.jsxDEV("button",{className:`ls-btn${O?"":" ls-accent"}`,onClick:Rr,disabled:O,children:[O?Br.jsxDEV(Gl,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Br.jsxDEV(ab,{size:15},void 0,!1,void 0,this),O?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Br.jsxDEV("div",{className:"ls-editor-monaco",children:Br.jsxDEV(aY,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:Q,onChange:S,onMount:Jr,options:{minimap:{enabled:!1},fontSize:A,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},v.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Br.jsxDEV("div",{className:"ls-editor-docs",children:Br.jsxDEV(bJ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Br.jsxDEV(pY,{entries:P,isRunning:O,onClear:W},void 0,!1,void 0,this),v.type==="trigger"&&Br.jsxDEV(gJ,{scriptId:v.id,triggers:v.triggers??[],sendToBackend:Y},void 0,!1,void 0,this),v.type==="trigger"&&Br.jsxDEV(dY,{bindings:v.bindings??[],activeContext:u,onAdd:Cr,onRemove:D},void 0,!1,void 0,this),s&&Br.jsxDEV("div",{className:"ls-danger-confirm",children:[Br.jsxDEV(D5,{size:10},void 0,!1,void 0,this),Br.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Br.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:d,children:"Enable"},void 0,!1,void 0,this),Br.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("div",{className:"ls-meta-footer",children:[Br.jsxDEV("span",{className:"ls-meta-item",children:Br.jsxDEV("button",{className:"ls-danger-btn",onClick:d,title:"Toggle dangerous mode",children:[v.allowDangerous?Br.jsxDEV(D5,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Br.jsxDEV(r2,{size:11},void 0,!1,void 0,this),Br.jsxDEV("span",{className:v.allowDangerous?"ls-dangerous":"",children:v.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Br.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Br.jsxDEV(Kh,{size:10},void 0,!1,void 0,this),Br.jsxDEV("select",{className:"ls-folder-select",value:v.folder??"",onChange:(or)=>{let er=or.target.value;if(er==="__new__"){let k=window.prompt("New folder name:");if(k?.trim())Y({type:"update_script",id:v.id,patch:{folder:k.trim()}})}else Y({type:"update_script",id:v.id,patch:{folder:er}})},children:[Br.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(h.map((or)=>or.folder).filter((or)=>!!or))].sort().map((or)=>Br.jsxDEV("option",{value:or,children:or},or,!1,void 0,this)),Br.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{className:"ls-meta-item",children:[Br.jsxDEV(Db,{size:10},void 0,!1,void 0,this),Br.jsxDEV("span",{children:["Updated ",hr(v.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{className:"ls-meta-item",children:[Br.jsxDEV(ib,{size:10},void 0,!1,void 0,this),Br.jsxDEV("span",{children:["Created ",hr(v.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Br.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:v.id,onClick:()=>{navigator.clipboard.writeText(v.id).catch(()=>{}),a(!0),setTimeout(()=>a(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[vr?Br.jsxDEV(Sb,{size:10},void 0,!1,void 0,this):Br.jsxDEV(p0,{size:10},void 0,!1,void 0,this),Br.jsxDEV("span",{children:["ID ",v.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Io=Ar(rg(),1),PJ=({scripts:v,initialScriptId:h,activeContext:u,execInfo:O,activeRunScriptId:P,isRunning:A,consoleHistory:M,editorFontSize:W,autosaveDebounceMs:Y,onClearConsole:Q,onClose:J,sendToBackend:R})=>{let[z,B]=I2.useState(h),j=v.find((vr)=>vr.id===z)??null;I2.useEffect(()=>{B(h)},[h]),I2.useEffect(()=>{let vr=(a)=>{if(a.key==="Escape")J()};return document.addEventListener("keydown",vr),()=>document.removeEventListener("keydown",vr)},[J]);let m=j?M[j.id]??[]:[],y=A&&j?.id===P;return HJ.createPortal(Io.jsxDEV("div",{className:"ls-modal-overlay",onClick:(vr)=>{if(vr.target===vr.currentTarget)J()},children:Io.jsxDEV("div",{className:"ls-modal-card",onClick:(vr)=>vr.stopPropagation(),children:[Io.jsxDEV("div",{className:"ls-modal-header",children:[Io.jsxDEV("span",{className:"ls-modal-title",children:[Io.jsxDEV(iv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),Io.jsxDEV("button",{className:"ls-modal-close",onClick:J,title:"Close (Esc)",children:Io.jsxDEV(no,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Io.jsxDEV("div",{className:"ls-modal-body",children:[Io.jsxDEV("div",{className:"ls-modal-sidebar",children:Io.jsxDEV(Ju,{scripts:v,selectedId:z,execInfo:O,onSelect:B,onEdit:B,sendToBackend:R},void 0,!1,void 0,this)},void 0,!1,void 0,this),Io.jsxDEV("div",{className:"ls-modal-main",children:j?Io.jsxDEV(OJ,{script:j,allScripts:v,activeContext:u,isRunning:y,consoleEntries:m,editorFontSize:W,autosaveDebounceMs:Y,onClearConsole:()=>{if(j)Q(j.id)},sendToBackend:R},void 0,!1,void 0,this):Io.jsxDEV("div",{className:"ls-placeholder",children:[Io.jsxDEV(iv,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),Io.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var Nu=Ar(rg(),1),qJ=({scripts:v,activeContext:h,execInfo:u,activeRunScriptId:O,isRunning:P,consoleHistory:A,editorFontSize:M,autosaveDebounceMs:W,onClearConsole:Y,onScriptOpened:Q,sendToBackend:J})=>{let[R,z]=Bu.useState(null);return Bu.useEffect(()=>{if(R&&Q)Q(R)},[R,Q]),Nu.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[Nu.jsxDEV(Ju,{scripts:v,selectedId:R,execInfo:u,onSelect:()=>{},onEdit:z,sendToBackend:J},void 0,!1,void 0,this),R!==null&&Nu.jsxDEV(PJ,{scripts:v,initialScriptId:R,activeContext:h,execInfo:u,activeRunScriptId:O,isRunning:P,consoleHistory:A,editorFontSize:M,autosaveDebounceMs:W,onClearConsole:Y,onClose:()=>z(null),sendToBackend:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var AJ=Ar(hg(),1);var yg=Ar(rg(),1),xN=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function mN(v){if(v===void 0)return"undefined";if(v===null)return"null";if(typeof v==="string")return v.length>80?v.slice(0,77)+"…":v;try{let h=JSON.stringify(v);return h.length>80?h.slice(0,77)+"…":h}catch{return String(v)}}var MJ=({variables:v,sendToBackend:h})=>{let[u,O]=AJ.useState(new Set(["local","global","chat","character"])),P=(M)=>{O((W)=>{let Y=new Set(W);if(Y.has(M))Y.delete(M);else Y.add(M);return Y})},A=v?Object.values(v).reduce((M,W)=>M+Object.keys(W).length,0):0;return yg.jsxDEV("div",{className:"ls-status-section",children:[yg.jsxDEV("div",{className:"ls-inject-header",children:[yg.jsxDEV(d0,{size:10},void 0,!1,void 0,this),"Variables",A>0&&yg.jsxDEV("span",{className:"ls-inject-count",children:A},void 0,!1,void 0,this),yg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>h({type:"get_variables"}),children:yg.jsxDEV(e1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yg.jsxDEV("div",{className:"ls-status-section-body",children:!v?yg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):A===0?yg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):xN.map(({key:M,label:W,hint:Y})=>{let Q=v[M],J=Object.keys(Q),R=u.has(M);if(J.length===0)return null;return yg.jsxDEV("div",{className:"ls-vars-scope",children:[yg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>P(M),children:[R?yg.jsxDEV(Xo,{size:10},void 0,!1,void 0,this):yg.jsxDEV(G0,{size:10},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-name",children:W},void 0,!1,void 0,this),Y&&yg.jsxDEV("span",{className:"ls-vars-scope-hint",children:Y},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-count",children:J.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),R&&yg.jsxDEV("div",{className:"ls-vars-scope-body",children:J.sort().map((z)=>yg.jsxDEV("div",{className:"ls-vars-entry",children:[yg.jsxDEV("span",{className:"ls-vars-key",children:z},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-value",title:String(Q[z]),children:mN(Q[z])},void 0,!1,void 0,this)]},z,!0,void 0,this))},void 0,!1,void 0,this)]},M,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Fl=Ar(hg(),1);function Zu(v){if(!Number.isFinite(v)||v<=0)return"0 B";let h=["B","KB","MB","GB"],u=Math.min(h.length-1,Math.floor(Math.log(v)/Math.log(1024))),O=v/Math.pow(1024,u);return`${u===0?O.toFixed(0):O.toFixed(1)} ${h[u]}`}function N2(v){let h;if(typeof v==="number")h=v;else{if(!v)return"—";h=new Date(v).getTime()}if(!Number.isFinite(h)||h<=0)return"—";let u=Date.now()-h;if(u<60000)return"just now";if(u<3600000)return`${Math.floor(u/60000)}m ago`;if(u<86400000)return`${Math.floor(u/3600000)}h ago`;if(u<2592000000)return`${Math.floor(u/86400000)}d ago`;return new Date(h).toISOString().slice(0,10)}var Yq={script:"script",character:"char",chat:"chat"},WJ={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function xu(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(u,O,P,A,M,W,Y)=>{if(O)return`<span class="ls-json-key">${O}</span>${P}`;if(A)return`<span class="ls-json-string">${A}</span>`;if(M)return`<span class="ls-json-bool">${M}</span>`;if(W)return`<span class="ls-json-null">${W}</span>`;if(Y)return`<span class="ls-json-number">${Y}</span>`;return u})}async function Jq(v){try{return await navigator.clipboard.writeText(v),!0}catch{return!1}}var Zr=Ar(rg(),1),a5=["script","character","chat"],TN=10485760,CN=41943040,iN=52428800;function SN(v){if(v>=CN)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(v>=TN)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function kN(v){if(v.scope==="character"){if(v.characterName)return`character: ${v.characterName} (${v.characterId})
${v.path}`;if(v.characterId)return`character: ${v.characterId} (not currently loaded)
${v.path}`}if(v.scope==="chat"){if(v.chatName)return`chat: ${v.chatName} (${v.chatId})
${v.path}`;if(v.chatId)return`chat: ${v.chatId} (not currently loaded)
${v.path}`}return v.path}function nN(v,h,u,O){switch(u){case"name":return v.name.localeCompare(h.name,void 0,{sensitivity:"base"});case"scope":return v.scope.localeCompare(h.scope);case"owner":{let P=O.get(v.scriptId)??v.scriptId,A=O.get(h.scriptId)??h.scriptId;return P.localeCompare(A,void 0,{sensitivity:"base"})}case"size":return v.sizeBytes-h.sizeBytes;case"updated":return new Date(v.modifiedAt).getTime()-new Date(h.modifiedAt).getTime()}}var eJ=({collections:v,scripts:h,sendToBackend:u,onInspect:O,onDrop:P})=>{let[A,M]=Fl.useState(""),[W,Y]=Fl.useState(()=>new Set(a5)),[Q,J]=Fl.useState(null),[R,z]=Fl.useState("asc"),B=Fl.useMemo(()=>{let C=new Map;for(let V of h)C.set(V.id,V.name);return C},[h]),j=Fl.useMemo(()=>{if(!v)return null;let C=v;if(W.size<a5.length)C=C.filter((c)=>W.has(c.scope));let V=A.trim().toLowerCase();if(V)C=C.filter((c)=>c.name.toLowerCase().includes(V));if(Q){let c=R==="asc"?1:-1;C=C.slice().sort((S,Jr)=>nN(S,Jr,Q,B)*c)}return C},[v,W,A,Q,R,B]),m=()=>u({type:"list_collections"}),y=(C)=>{Y((V)=>{let c=new Set(V);if(c.has(C))c.delete(C);else c.add(C);if(c.size===0)return new Set(a5);return c})},rr=(C)=>{if(Q!==C){J(C),z("asc");return}if(R==="asc"){z("desc");return}J(null)},qr=()=>{M(""),Y(new Set(a5))},vr=v?.length??0,a=j?.length??0,s=A.trim().length>0||W.size<a5.length,lr=(C)=>{if(Q!==C)return Zr.jsxDEV(nb,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return R==="asc"?Zr.jsxDEV(G0,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Zr.jsxDEV(Xo,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Zr.jsxDEV("div",{className:"ls-status-section",children:[Zr.jsxDEV("div",{className:"ls-inject-header",children:[Zr.jsxDEV(d0,{size:10},void 0,!1,void 0,this),"Collections",vr>0&&Zr.jsxDEV("span",{className:"ls-inject-count",children:vr},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:m,children:Zr.jsxDEV(e1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-status-section-body",children:v===null?Zr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):v.length===0?Zr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Zr.jsxDEV(Zr.Fragment,{children:[Zr.jsxDEV("div",{className:"ls-collections-filter",children:[Zr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Zr.jsxDEV(Yl,{size:10},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:A,onChange:(C)=>M(C.target.value)},void 0,!1,void 0,this),A&&Zr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>M(""),children:Zr.jsxDEV(no,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-collections-filter-chips",children:a5.map((C)=>{let V=W.has(C);return Zr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":C,"aria-pressed":V,title:V?`Hide ${C}-scoped`:`Show ${C}-scoped`,onClick:()=>y(C),children:Yq[C]},C,!1,void 0,this)})},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-filter-count",children:s?`${a}/${vr}`:vr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a===0?Zr.jsxDEV("div",{className:"ls-section-empty",children:[Zr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Zr.jsxDEV("button",{onClick:qr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Zr.jsxDEV("div",{className:"ls-collections-list",children:[Zr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.map((C)=>{let V=B.get(C.scriptId)??`(${C.scriptId.slice(0,8)}…)`,c=!B.has(C.scriptId),S=c?`scriptId: ${C.scriptId} (not currently loaded)`:`${V} (${C.scriptId})`;return Zr.jsxDEV("div",{className:"ls-collections-row",children:[Zr.jsxDEV("span",{className:"ls-collections-name",title:C.name,children:C.name},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-scope","data-scope":C.scope,title:kN(C),children:Yq[C.scope]},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:`ls-collections-owner${c?" ls-collections-owner-unknown":""}`,title:S,children:V},void 0,!1,void 0,this),(()=>{let Jr=SN(C.sizeBytes),Rr=(C.sizeBytes/iN*100).toFixed(C.sizeBytes<1048576?2:1),Qr=`${C.sizeBytes.toLocaleString()} bytes (${Rr}% of 50 MB cap)`;return Zr.jsxDEV("span",{className:"ls-collections-size","data-budget":Jr.tier,title:Qr,style:Jr.tier==="normal"?void 0:{color:Jr.color,fontWeight:600},children:Zu(C.sizeBytes)},void 0,!1,void 0,this)})(),Zr.jsxDEV("span",{className:"ls-collections-updated",title:C.modifiedAt,children:N2(C.modifiedAt)},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-actions",children:[Zr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>O(C.path),children:Zr.jsxDEV(tb,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>P(C),children:Zr.jsxDEV(Fo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},C.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Dg=Ar(hg(),1),XJ=Ar(i5(),1);var vv=Ar(hg(),1),RJ=Ar(i5(),1);var zg=Ar(rg(),1);function DN(v){let{id:h,createdAt:u,updatedAt:O,...P}=v;try{return JSON.stringify(P,null,2)}catch{return"{}"}}var GJ=({path:v,record:h,onClose:u,sendToBackend:O})=>{let[P,A]=vv.useState(()=>DN(h)),[M,W]=vv.useState(null),Y=vv.useRef(null),Q=vv.useRef(null),J=vv.useRef(null);vv.useEffect(()=>{let m=(y)=>{if(y.key==="Escape")u()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[u]),vv.useEffect(()=>{let m=(y)=>{if(y.key!=="Tab")return;let rr=Y.current;if(!rr)return;let qr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(qr.length===0)return;let vr=qr[0],a=qr[qr.length-1],s=document.activeElement,lr=s!==null&&rr.contains(s);if(y.shiftKey){if(!lr||s===vr)y.preventDefault(),a.focus()}else if(!lr||s===a)y.preventDefault(),vr.focus()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[]),vv.useEffect(()=>{let m=setTimeout(()=>Q.current?.focus(),0);return()=>clearTimeout(m)},[]);let R=()=>{let m;try{m=JSON.parse(P)}catch(y){let rr=y instanceof Error?y.message:String(y);W(`JSON parse error: ${rr}`);return}if(m===null||typeof m!=="object"||Array.isArray(m)){W("Record must be a JSON object — not an array, null, or primitive.");return}W(null),O({type:"update_record",path:v,recordId:String(h.id),patch:m}),u()},z=(m)=>{if((m.metaKey||m.ctrlKey)&&m.key==="Enter")m.preventDefault(),R()},B=String(h.id),j=zg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(m)=>{if(m.target===m.currentTarget)u()},children:zg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:Y,onClick:(m)=>m.stopPropagation(),children:[zg.jsxDEV("div",{className:"ls-modal-header",children:[zg.jsxDEV("span",{className:"ls-modal-title",children:[zg.jsxDEV(s0,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),zg.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:zg.jsxDEV(no,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-edit-body",children:[zg.jsxDEV("div",{className:"ls-edit-meta",children:[zg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),zg.jsxDEV("code",{className:"ls-edit-meta-value",title:B,children:B},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",zg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",zg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",zg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",zg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[zg.jsxDEV("pre",{ref:J,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:xu(P)+`
`}},void 0,!1,void 0,this),zg.jsxDEV("textarea",{ref:Q,className:"ls-edit-textarea",value:P,onChange:(m)=>{if(A(m.target.value),M)W(null)},onKeyDown:z,onScroll:(m)=>{let y=J.current;if(!y)return;y.scrollTop=m.currentTarget.scrollTop,y.scrollLeft=m.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M&&zg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[zg.jsxDEV(S0,{size:12},void 0,!1,void 0,this),zg.jsxDEV("span",{children:M},void 0,!1,void 0,this)]},void 0,!0,void 0,this),zg.jsxDEV("div",{className:"ls-drop-actions",children:[zg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,children:"Cancel"},void 0,!1,void 0,this),zg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:R,title:"Save (Ctrl/Cmd+Enter)",children:[zg.jsxDEV(sb,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return RJ.createPortal(j,document.body)};var f=Ar(rg(),1),Bh=50,tN=150,VN=1200,_N=4000,YJ=({path:v,summary:h,records:u,total:O,error:P,stats:A,refreshToken:M,onClose:W,sendToBackend:Y})=>{let[Q,J]=Dg.useState(""),[R,z]=Dg.useState(""),[B,j]=Dg.useState(0),[m,y]=Dg.useState("shallow"),[rr,qr]=Dg.useState(0),[vr,a]=Dg.useState(()=>new Set),[s,lr]=Dg.useState(null),[C,V]=Dg.useState(null),[c,S]=Dg.useState("records");Dg.useEffect(()=>{let n=setTimeout(()=>z(Q),tN);return()=>clearTimeout(n)},[Q]),Dg.useEffect(()=>{j(0)},[R,m]),Dg.useEffect(()=>{let n=R.trim();if(m==="jsonquery")Y({type:"inspect_collection",path:v,jsonqueryFilter:n||void 0,limit:Bh,offset:B*Bh});else Y({type:"inspect_collection",path:v,textFilter:n||void 0,deepFilter:m==="deep"||void 0,limit:Bh,offset:B*Bh})},[v,R,m,B,M,rr,Y]),Dg.useEffect(()=>{let n=(Pr)=>{if(Pr.key==="Escape")W()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[W]);let Jr=Math.max(1,Math.ceil(O/Bh)),Rr=O===0?0:B*Bh+1,Qr=Math.min(O,(B+1)*Bh),Cr=Dg.useMemo(()=>{let n=v.match(/\/([^/]+)\.json$/);return n?n[1]:v},[v]),D=Dg.useMemo(()=>{if(!h)return null;if(h.scope==="character"&&h.characterName)return`character: ${h.characterName}`;if(h.scope==="chat"&&h.chatName)return`chat: ${h.chatName}`;return null},[h]),d=(n)=>{a((Pr)=>{let zr=new Set(Pr);return zr.add(n),zr}),setTimeout(()=>{a((Pr)=>{if(!Pr.has(n))return Pr;let zr=new Set(Pr);return zr.delete(n),zr})},VN)},hr=async(n)=>{if(await Jq(String(n.id)))d(`${n.id}:id`)},or=async(n)=>{if(await Jq(JSON.stringify(n,null,2)))d(`${n.id}:json`)};Dg.useEffect(()=>{if(C===null)return;let n=setTimeout(()=>V(null),_N);return()=>clearTimeout(n)},[C]);let er=(n)=>{let Pr=String(n.id);if(C===Pr)Y({type:"delete_record",path:v,recordId:Pr}),V(null);else V(Pr)};Dg.useEffect(()=>{V(null),lr(null)},[B,R,m,v]),Dg.useEffect(()=>{S("records")},[v]),Dg.useEffect(()=>{if(c!=="stats")return;Y({type:"analyze_collection",path:v})},[c,v,M,rr,Y]);let k=f.jsxDEV("div",{className:"ls-modal-overlay",onClick:(n)=>{if(n.target===n.currentTarget)W()},children:f.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(n)=>n.stopPropagation(),children:[f.jsxDEV("div",{className:"ls-modal-header",children:[f.jsxDEV("span",{className:"ls-modal-title",children:[f.jsxDEV(d0,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-name",children:Cr},void 0,!1,void 0,this),D&&f.jsxDEV("span",{className:"ls-inspect-title-path",title:v,style:{color:"var(--lumiverse-accent)"},children:D},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-path",title:v,children:v},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:()=>qr((n)=>n+1),title:"Refresh records",style:{marginRight:4},children:f.jsxDEV(e1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:W,title:"Close (Esc)",children:f.jsxDEV(no,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="records",onClick:()=>S("records"),children:[f.jsxDEV(Eb,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="stats",onClick:()=>S("stats"),children:[f.jsxDEV(el,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c==="records"&&f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{className:"ls-inspect-toolbar",children:[f.jsxDEV("div",{className:"ls-inspect-search",children:[f.jsxDEV(Yl,{size:12},void 0,!1,void 0,this),f.jsxDEV("input",{type:m==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:m==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":m==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:Q,onChange:(n)=>J(n.target.value),autoFocus:!0,spellCheck:m!=="jsonquery",autoCorrect:m==="jsonquery"?"off":"on",autoCapitalize:m==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),f.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":m==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>y("shallow"),children:f.jsxDEV(Yl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":m==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>y("deep"),children:f.jsxDEV(Rl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":m==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>y("jsonquery"),children:f.jsxDEV(Go,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-pager",children:[f.jsxDEV("span",{className:"ls-inspect-pager-status",children:O===0?"No matching records":f.jsxDEV(f.Fragment,{children:["Showing ",f.jsxDEV("strong",{children:Rr},void 0,!1,void 0,this),"–",f.jsxDEV("strong",{children:Qr},void 0,!1,void 0,this)," of ",f.jsxDEV("strong",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((n)=>Math.max(0,n-1)),disabled:B===0,title:"Previous page",children:f.jsxDEV(kb,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((n)=>Math.min(Jr-1,n+1)),disabled:B>=Jr-1,title:"Next page",children:f.jsxDEV(W1,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),P&&f.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[f.jsxDEV(S0,{size:12},void 0,!1,void 0,this),f.jsxDEV("span",{children:P},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-body",children:u===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):u.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:O===0&&R?f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{children:["No records match “",R,"”"]},void 0,!0,void 0,this),f.jsxDEV("button",{onClick:()=>J(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):O===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):f.jsxDEV("div",{className:"ls-inspect-records",children:u.map((n)=>{let Pr=String(n.id),zr=vr.has(`${n.id}:id`),Gr=vr.has(`${n.id}:json`);return f.jsxDEV("div",{className:"ls-inspect-record",children:[f.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${Pr}`,children:[f.jsxDEV("code",{children:[Pr.slice(0,12),"…"]},void 0,!0,void 0,this),f.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",f.jsxDEV("time",{title:new Date(n.createdAt).toISOString(),children:N2(n.createdAt)},void 0,!1,void 0,this),n.updatedAt!==n.createdAt&&f.jsxDEV(f.Fragment,{children:[" · ","updated ",f.jsxDEV("time",{title:new Date(n.updatedAt).toISOString(),children:N2(n.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:zr?"Copied!":"Copy ID",onClick:()=>hr(n),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:zr?"var(--lumiverse-accent)":"inherit",opacity:zr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(p0,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Gr?"Copied!":"Copy full JSON",onClick:()=>or(n),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Gr?"var(--lumiverse-accent)":"inherit",opacity:Gr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(Tv,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(n),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(s0,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action"+(C===Pr?" ls-inspect-record-action-confirm":""),title:C===Pr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>er(n),style:{background:C===Pr?"rgba(246, 130, 130, 0.18)":"transparent",border:C===Pr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:C===Pr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:C===Pr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:C===Pr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:C===Pr?600:400,borderRadius:3},children:[f.jsxDEV(Fo,{size:11},void 0,!1,void 0,this),C===Pr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:xu(EN(n))}},void 0,!1,void 0,this)]},Pr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c==="stats"&&f.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:A===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):A.fields.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:A.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):f.jsxDEV(jN,{stats:A},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return f.jsxDEV(f.Fragment,{children:[XJ.createPortal(k,document.body),s&&f.jsxDEV(GJ,{path:v,record:s,onClose:()=>lr(null),sendToBackend:Y},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function EN(v){let{id:h,createdAt:u,updatedAt:O,...P}=v;try{return JSON.stringify(P,null,2)}catch{return String(v)}}var yN={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function cN(v){if(typeof v==="string")return`"${v.length>32?v.slice(0,30)+"…":v}"`;if(v===null)return"null";return String(v)}function Qq(v){if(!Number.isFinite(v))return"—";return Number.isInteger(v)?String(v):v.toFixed(2)}var jN=({stats:v})=>{return f.jsxDEV("div",{className:"ls-inspect-stats",children:[f.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",f.jsxDEV("strong",{children:v.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",v.totalRecords===1?"record":"records"," ·"," ",f.jsxDEV("strong",{children:v.fields.length},void 0,!1,void 0,this)," ",v.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-grid",children:v.fields.map((h)=>f.jsxDEV(fN,{field:h,totalRecords:v.totalRecords},h.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},fN=({field:v,totalRecords:h})=>{let u=h===0?0:Math.round(v.presence/h*100),O=Object.entries(v.types);return O.sort((P,A)=>A[1]-P[1]),f.jsxDEV("div",{className:"ls-inspect-stats-card",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[f.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:v.name,children:v.name},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${v.presence} of ${h} records`,children:[u,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:O.map(([P,A])=>f.jsxDEV("span",{className:yN[P],children:[P," · ",A]},P,!0,void 0,this))},void 0,!1,void 0,this),v.numericRange&&f.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[f.jsxDEV("span",{children:["min ",f.jsxDEV("strong",{children:Qq(v.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["max ",f.jsxDEV("strong",{children:Qq(v.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["mean ",f.jsxDEV("strong",{children:Qq(v.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.topValues.length>0&&f.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",v.topValues.length," of ",v.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:v.topValues.map((P,A)=>f.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(P.value),children:[f.jsxDEV("code",{children:cN(P.value)},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",P.count]},void 0,!0,void 0,this)]},A,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var B2=Ar(hg(),1),JJ=Ar(i5(),1);var Og=Ar(rg(),1);function aN(v){if(v.scope==="character"&&v.characterName&&v.characterId)return{label:"Character",name:v.characterName,id:v.characterId};if(v.scope==="chat"&&v.chatName&&v.chatId)return{label:"Chat",name:v.chatName,id:v.chatId};return null}var QJ=({target:v,recordCount:h,onConfirm:u,onCancel:O})=>{let P=B2.useRef(null);B2.useEffect(()=>{let M=(W)=>{if(W.key==="Escape")O()};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[O]),B2.useEffect(()=>{let M=(W)=>{if(W.key!=="Tab")return;let Y=P.current;if(!Y)return;let Q=Array.from(Y.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Q.length===0)return;let J=Q[0],R=Q[Q.length-1],z=document.activeElement,B=z!==null&&Y.contains(z);if(W.shiftKey){if(!B||z===J)W.preventDefault(),R.focus()}else if(!B||z===R)W.preventDefault(),J.focus()};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[]);let A=Og.jsxDEV("div",{className:"ls-modal-overlay",onClick:(M)=>{if(M.target===M.currentTarget)O()},children:Og.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:P,onClick:(M)=>M.stopPropagation(),children:[Og.jsxDEV("div",{className:"ls-modal-header",children:[Og.jsxDEV("span",{className:"ls-modal-title",children:[Og.jsxDEV(Fo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),Og.jsxDEV("button",{className:"ls-modal-close",onClick:O,title:"Cancel (Esc)",children:Og.jsxDEV(no,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-body",children:[Og.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target",children:[Og.jsxDEV("div",{className:"ls-drop-target-name",children:v.name},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target-meta",children:[Og.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":v.scope,children:WJ[v.scope]},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-drop-target-size",children:Zu(v.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let M=aN(v);if(!M)return null;return Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${M.label.toLowerCase()}Id: ${M.id}`,children:[M.label,": ",Og.jsxDEV("strong",{children:M.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),Og.jsxDEV("div",{className:"ls-drop-target-path",title:v.path,children:v.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h===null?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):h>=0?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:h===0?"Collection is currently empty.":Og.jsxDEV(Og.Fragment,{children:["Will delete ",Og.jsxDEV("strong",{children:h.toLocaleString()},void 0,!1,void 0,this)," ",h===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,Og.jsxDEV("div",{className:"ls-drop-warning",children:[Og.jsxDEV(S0,{size:12},void 0,!1,void 0,this),Og.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-actions",children:[Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:O,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:u,children:[Og.jsxDEV(Fo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return JJ.createPortal(A,document.body)};var K1=Ar(rg(),1),zJ=({variables:v,collections:h,scripts:u,sendToBackend:O,inspectPath:P,inspectRecords:A,inspectTotal:M,inspectError:W,inspectStats:Y,inspectRefreshToken:Q,onInspect:J,dropTarget:R,dropTargetCount:z,onDrop:B,onDropConfirm:j})=>{return K1.jsxDEV(K1.Fragment,{children:[K1.jsxDEV("div",{className:"ls-storage-list",children:[K1.jsxDEV(MJ,{variables:v,sendToBackend:O},void 0,!1,void 0,this),K1.jsxDEV(eJ,{collections:h,scripts:u,sendToBackend:O,onInspect:J,onDrop:B},void 0,!1,void 0,this)]},void 0,!0,void 0,this),P!==null&&K1.jsxDEV(YJ,{path:P,summary:h?.find((m)=>m.path===P),records:A,total:M,error:W,stats:Y,refreshToken:Q,onClose:()=>J(null),sendToBackend:O},void 0,!1,void 0,this),R!==null&&K1.jsxDEV(QJ,{target:R,recordCount:z,onConfirm:j,onCancel:()=>B(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Wr=Ar(rg(),1),KJ=({onBackendMessage:v,sendToBackend:h})=>{let[u,O]=Kg.useState("manage"),[P,A]=Kg.useState([]),[M,W]=Kg.useState(vu),[Y,Q]=Kg.useState({characterId:null,characterName:null,chatId:null}),[J,R]=Kg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[z,B]=Kg.useState([]),[j,m]=Kg.useState([]),[y,rr]=Kg.useState(null),[qr,vr]=Kg.useState(null),[a,s]=Kg.useState(null),[lr,C]=Kg.useState(null),[V,c]=Kg.useState(0),[S,Jr]=Kg.useState(null),[Rr,Qr]=Kg.useState(0),[Cr,D]=Kg.useState(null),[d,hr]=Kg.useState(null),[or,er]=Kg.useState(null),[k,n]=Kg.useState({});Kg.useEffect(()=>{let Gr=v((ir)=>{let br=ir;switch(br.type){case"scripts_updated":A(br.scripts);break;case"script_patched":A((Sr)=>Sr.map((ar)=>ar.id===br.script.id?br.script:ar));break;case"settings_updated":W(br.settings);break;case"active_context":Q({characterId:br.characterId,characterName:br.characterName,chatId:br.chatId}),h({type:"get_variables"});break;case"variables_updated":rr(br.variables);break;case"collections_list":vr(br.collections);break;case"collection_records":C((Sr)=>{return br.records}),c(br.total),Jr(br.error??null);break;case"collection_stats":D((Sr)=>{return br.stats});break;case"collection_count":er((Sr)=>{return br.count});break;case"collections_updated":h({type:"list_collections"}),Qr((Sr)=>Sr+1);break;case"injections_updated":B(br.injections);break;case"tools_updated":m(br.tools);break;case"execution_started":{let Sr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};R((ar)=>{let Xg=ar.consoleHistory[br.scriptId]??[],No=Xg.length>0?[...Xg,Sr]:Xg;return{...ar,activeScriptId:br.scriptId,runId:br.runId,isRunning:!0,consoleHistory:{...ar.consoleHistory,[br.scriptId]:No},scriptExecInfo:{...ar.scriptExecInfo,[br.scriptId]:{...ar.scriptExecInfo[br.scriptId],dot:"running"}}}}),n((ar)=>({...ar,[br.scriptId]:(ar[br.scriptId]??0)+1}));break}case"console_entry":{let Sr=M.consoleHistoryLimit;R((ar)=>{let Xg=ar.consoleHistory[br.scriptId]??[];if(Xg.length>=Sr)return ar;let ur=Xg.length===Sr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Sr} entries. Clear the console to resume capture.]`}:br.entry;return{...ar,consoleHistory:{...ar.consoleHistory,[br.scriptId]:[...Xg,ur]}}});break}case"execution_ended":R((Sr)=>{let ar=Sr.consoleHistory[br.scriptId]??[],Xg=Sr.scriptExecInfo[br.scriptId],No=!br.success&&br.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:br.error}]:[],ur=!br.success?!0:Xg?.stickyError??!1,_o=!br.success||ur?"error":"success",zo=br.duration??0,cg=br.success&&zo===0&&(Xg?.duration??0)>0?Xg.duration:br.duration;return{...Sr,isRunning:!1,consoleHistory:No.length?{...Sr.consoleHistory,[br.scriptId]:[...ar,...No]}:Sr.consoleHistory,scriptExecInfo:{...Sr.scriptExecInfo,[br.scriptId]:{dot:_o,duration:cg,error:br.error??Xg?.error,stickyError:ur}}}});break;case"error":console.warn("[LumiScript]",br.message);break}});return h({type:"get_scripts"}),h({type:"get_settings"}),h({type:"get_active_context"}),h({type:"get_injections"}),h({type:"get_tools"}),Gr},[v,h]),Kg.useEffect(()=>{if(u==="storage")h({type:"list_collections"})},[u,h]),Kg.useEffect(()=>{if(er(null),d)h({type:"count_collection",path:d.path})},[d,h]);let Pr=Kg.useCallback((Gr)=>{R((ir)=>({...ir,consoleHistory:{...ir.consoleHistory,[Gr]:[]}}))},[]),zr=Kg.useCallback((Gr)=>{R((ir)=>{let br=ir.scriptExecInfo[Gr];if(!br?.stickyError)return ir;return{...ir,scriptExecInfo:{...ir.scriptExecInfo,[Gr]:{...br,dot:"idle",stickyError:!1}}}})},[]);return Wr.jsxDEV("div",{className:"ls-panel",children:[Wr.jsxDEV("div",{className:"ls-tabs",children:[Wr.jsxDEV("button",{className:`ls-tab-pill${u==="manage"?" ls-active":""}`,onClick:()=>O("manage"),children:[Wr.jsxDEV(Go,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Wr.jsxDEV("button",{className:`ls-tab-pill${u==="status"?" ls-active":""}`,onClick:()=>O("status"),children:[Wr.jsxDEV(Zb,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Wr.jsxDEV("button",{className:`ls-tab-pill${u==="storage"?" ls-active":""}`,onClick:()=>O("storage"),children:[Wr.jsxDEV(d0,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[u==="manage"&&Wr.jsxDEV(qJ,{scripts:P,activeContext:Y,execInfo:J.scriptExecInfo,activeRunScriptId:J.activeScriptId,isRunning:J.isRunning,consoleHistory:J.consoleHistory,editorFontSize:M.editorFontSize,autosaveDebounceMs:M.autosaveDebounceMs,onClearConsole:Pr,onScriptOpened:zr,sendToBackend:h},void 0,!1,void 0,this),u==="status"&&Wr.jsxDEV(dN,{scripts:P,execInfo:J.scriptExecInfo,invocationCounts:k,injections:z,tools:j,sendToBackend:h},void 0,!1,void 0,this),u==="storage"&&Wr.jsxDEV(zJ,{variables:y,collections:qr,scripts:P,sendToBackend:h,inspectPath:a,inspectRecords:lr,inspectTotal:V,inspectError:S,inspectStats:Cr,inspectRefreshToken:Rr,onInspect:(Gr)=>{s(Gr),C(null),c(0),D(null)},dropTarget:d,dropTargetCount:or,onDrop:hr,onDropConfirm:()=>{if(!d)return;let Gr=d.path;if(a===Gr)s(null),C(null),c(0),D(null);h({type:"drop_collection",path:Gr}),hr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},pN={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},dN=({scripts:v,execInfo:h,invocationCounts:u,injections:O,tools:P,sendToBackend:A})=>{let M=v.filter((R)=>R.type==="trigger"&&R.enabled),W=Object.fromEntries(v.map((R)=>[R.id,R.name])),[Y,Q]=Kg.useState(new Set),J=(R)=>{Q((z)=>{let B=new Set(z);if(B.has(R))B.delete(R);else B.add(R);return B})};return Wr.jsxDEV("div",{className:"ls-status-list",children:[Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(Go,{size:10},void 0,!1,void 0,this),"Scripts",M.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:M.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:M.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):M.map((R)=>{let z=h[R.id],B=z?.dot??"idle",j={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[B],m=R.triggers??[],y=u[R.id];return Wr.jsxDEV("div",{className:"ls-status-row",children:[Wr.jsxDEV("div",{className:"ls-status-row-main",children:[Wr.jsxDEV("span",{className:j,title:pN[B]},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-status-name",children:R.name},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-status-right",children:[y!==void 0&&y>0&&Wr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${y} time${y!==1?"s":""} this session`,children:["×",y]},void 0,!0,void 0,this),z?.duration!==void 0&&B!=="running"&&Wr.jsxDEV("span",{className:"ls-status-duration",style:{color:B==="error"?"#ef4444":void 0},children:[z.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),m.length>0?Wr.jsxDEV("div",{className:"ls-status-events",children:m.map((rr)=>Wr.jsxDEV("span",{className:"ls-event-badge",children:[Wr.jsxDEV(R1,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Wr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),B==="error"&&z?.error&&Wr.jsxDEV("div",{className:"ls-status-error-row",children:Wr.jsxDEV("span",{className:"ls-status-error-text",children:z.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},R.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(w2,{size:10},void 0,!1,void 0,this),"Active Tools",P.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:P.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:P.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):P.map((R)=>Wr.jsxDEV("div",{className:"ls-tool-row",children:[Wr.jsxDEV("div",{className:"ls-tool-name",title:R.description,children:R.name},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-tool-meta",children:[R.council_eligible&&Wr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-script",title:R.scriptId,children:R.scriptName},void 0,!1,void 0,this),Wr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${R.name}`,title:`Unregister "${R.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>A({type:"unregister_tool",name:R.name}),children:Wr.jsxDEV(Fo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},R.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(g2,{size:10},void 0,!1,void 0,this),"Active Injections",O.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):O.map((R)=>{let z=Y.has(R.id);return Wr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>J(R.id),children:[Wr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${R.mode}`,title:R.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:R.mode==="intercept"?Wr.jsxDEV(xb,{size:11},void 0,!1,void 0,this):Wr.jsxDEV(mb,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-inject-body",children:[Wr.jsxDEV("div",{className:"ls-inject-header-row",children:[Wr.jsxDEV("span",{className:"ls-inject-id",title:R.id,children:R.id},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-inject-meta",children:[Wr.jsxDEV("span",{className:"ls-inject-role",children:R.role},void 0,!1,void 0,this),R.mode==="intercept"&&R.depth>0&&Wr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${R.depth} message${R.depth!==1?"s":""}`,children:["d:",R.depth]},void 0,!0,void 0,this),R.ephemeral&&Wr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Wr.jsxDEV($h,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-script",title:R.scriptId,children:W[R.scriptId]??R.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-chevron",children:z?Wr.jsxDEV(G0,{size:10},void 0,!1,void 0,this):Wr.jsxDEV(Xo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),z&&Wr.jsxDEV("div",{className:"ls-inject-content",onClick:(B)=>B.stopPropagation(),children:R.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},R.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Z2=Ar(hg(),1);var Tr=Ar(rg(),1),$J=({onBackendMessage:v,sendToBackend:h})=>{let[u,O]=Z2.useState(vu),[P,A]=Z2.useState([]);Z2.useEffect(()=>{let Q=v((J)=>{let R=J;if(R.type==="scripts_updated")A(R.scripts);if(R.type==="settings_updated")O(R.settings)});return h({type:"get_settings"}),h({type:"get_scripts"}),Q},[v,h]);let M=P.filter((Q)=>Q.type==="trigger").length,W=P.filter((Q)=>Q.type==="library").length,Y=(Q)=>{h({type:"update_settings",patch:{enabled:Q}})};return Tr.jsxDEV("div",{className:"ls-settings",children:[Tr.jsxDEV("div",{className:"ls-settings-header",children:Tr.jsxDEV("span",{className:"ls-settings-title",children:[Tr.jsxDEV(iv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-toggle-row",children:[Tr.jsxDEV("label",{className:"ls-toggle",children:[Tr.jsxDEV("input",{type:"checkbox",checked:u.enabled,onChange:(Q)=>Y(Q.target.checked)},void 0,!1,void 0,this),Tr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-counts",children:[Tr.jsxDEV("div",{className:"ls-count-card",children:[Tr.jsxDEV(Go,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-count-num",children:M},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-count-card",children:[Tr.jsxDEV(Qh,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-count-num",children:W},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-section",children:[Tr.jsxDEV("div",{className:"ls-settings-section-label",children:[Tr.jsxDEV($h,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-field",children:[Tr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Tr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(u.scriptTimeoutMs/1000),onChange:(Q)=>{let J=Math.max(5,Math.min(300,Number(Q.target.value)||60));h({type:"update_settings",patch:{scriptTimeoutMs:J*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-field",children:[Tr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Tr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:u.consoleHistoryLimit,onChange:(Q)=>{let J=Math.max(50,Math.min(2000,Number(Q.target.value)||500));h({type:"update_settings",patch:{consoleHistoryLimit:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-section",children:[Tr.jsxDEV("div",{className:"ls-settings-section-label",children:[Tr.jsxDEV(l2,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-field",children:[Tr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Tr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:u.editorFontSize,onChange:(Q)=>{let J=Math.max(10,Math.min(24,Number(Q.target.value)||12));h({type:"update_settings",patch:{editorFontSize:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-field",children:[Tr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Tr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:u.autosaveDebounceMs,onChange:(Q)=>{let J=Math.max(300,Math.min(5000,Number(Q.target.value)||1200));h({type:"update_settings",patch:{autosaveDebounceMs:J}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-section",children:[Tr.jsxDEV("div",{className:"ls-settings-section-label",children:[Tr.jsxDEV(Cv,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-template-field",children:[Tr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Tr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:u.defaultTriggerTemplate,onChange:(Q)=>h({type:"update_settings",patch:{defaultTriggerTemplate:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-settings-template-field",children:[Tr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Tr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:u.defaultLibraryTemplate,onChange:(Q)=>h({type:"update_settings",patch:{defaultLibraryTemplate:Q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function sN(v){let h=v?.type;return typeof h==="string"&&h.startsWith("dom_")}var Qo=new Map;function p5(v,h){Qo.set(v,h)}function k0(v){let h=Qo.get(v);for(let[u,O]of $1)if(O.elementId===v){if(h)h.removeEventListener(O.event,O.handler);$1.delete(u)}Qo.delete(v)}var T2=new Map,x2=new Map,Zh=new Map,m2=new Map,$1=new Map;function UJ(v,h){return`${v}:${h}`}function rB(v){let h=v.target,u={type:v.type};if(h){if(h.id)u.targetId=h.id;if("value"in h)u.targetValue=h.value;if("checked"in h)u.targetChecked=h.checked;if(h.dataset&&Object.keys(h.dataset).length>0){let O={};for(let[P,A]of Object.entries(h.dataset))if(A!==void 0)O[P]=A;u.dataset=O}}if(v instanceof MouseEvent)u.clientX=v.clientX,u.clientY=v.clientY;else if(typeof TouchEvent<"u"&&v instanceof TouchEvent){let O=v.touches[0]??v.changedTouches[0];if(O)u.clientX=O.clientX,u.clientY=O.clientY}if(v instanceof CustomEvent&&v.detail!==void 0)try{JSON.stringify(v.detail),u.detail=v.detail}catch{}return u}function gB(v,h){return`@scope ([data-ls-script="${h}"]) {
${v}
}`}function oB(v,h=5000){let u=document.querySelector(v);if(u)return Promise.resolve(u);return new Promise((O,P)=>{let A=!1,M=new MutationObserver(()=>{let W=document.querySelector(v);if(W&&!A)A=!0,M.disconnect(),O(W)});M.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!A)A=!0,M.disconnect(),P(Error(`waitForElement: timeout for "${v}"`))},h)})}function vB(v){return v.querySelector('[class*="_bubble_"]')}var lv=new Map,lB=50;function hB(v,h,u){if(lv.size>=lB){let O=lv.keys().next().value;if(O)lv.get(O)?.cancel(),lv.delete(O)}lv.set(v,{scriptId:h,cancel:u})}function wB(v){for(let[h,u]of lv)if(u.scriptId===v)u.cancel(),lv.delete(h)}function FJ(v,h,u){let O=h((P)=>{if(!sN(P))return;let A=P;switch(A.type){case"dom_inject":{let{scriptId:M,elementId:W,target:Y,html:Q,position:J,stableId:R,parentElementId:z}=A;if(Qo.has(W)){console.warn(`[LumiScript] dom_inject: elementId "${W}" already in elementMap — skipping duplicate insert`);break}let B=`<div data-ls-script="${M}" data-ls-el="${W}">${Q}</div>`,j=null;if(z){let m=Qo.get(z);if(!m){console.warn(`[LumiScript] dom_inject: parentElementId "${z}" not in elementMap — drop`);break}let y=m.querySelector(Y);if(!y){console.warn(`[LumiScript] dom_inject: selector "${Y}" not found within parent "${z}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=B,y.insertAdjacentElement(J,rr),j=rr}else j=v.dom.inject(Y,B,J);if(j){if(Qo.set(W,j),T2.set(W,M),R)x2.set(UJ(M,R),W)}break}case"dom_inject_at_message":{let{scriptId:M,elementId:W,messageId:Y,html:Q,position:J,stableId:R}=A,z=(rr)=>{let qr=rr.querySelector("[data-part]"),vr=qr?.getAttribute("data-part")??"character",a=qr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",s=J==="header"?` data-ls-tint="${vr}"`:"",lr=` data-ls-mode="${a}"`,C=`<div data-ls-script="${M}" data-ls-el="${W}"${s}${lr}>${Q}</div>`,V,c;if(J==="header")V=rr,c="afterbegin";else if(J==="footer"&&a==="minimal")V=rr,c="beforeend";else V=vB(rr)??rr,c="beforeend";let S=v.dom.inject(V,C,c);if(Qo.set(W,S),T2.set(W,M),R)x2.set(UJ(M,R),W)},B=`[data-message-id="${Y}"]`,j=document.querySelector(B);if(j){z(j);break}let m=!1;hB(W,M,()=>{m=!0}),oB(B).then((rr)=>{if(lv.delete(W),m)return;z(rr)}).catch(()=>{lv.delete(W)});break}case"dom_update":{let M=Qo.get(A.elementId);if(!M)break;let W=M.querySelector(`[data-ls-el="${A.elementId}"]`)??M;W.innerHTML=A.html;break}case"dom_remove":{LJ(A.elementId);break}case"dom_add_style":{let{scriptId:M,styleId:W,css:Y}=A,Q=gB(Y,M),J=v.dom.addStyle(Q);Zh.set(W,J),m2.set(W,M);break}case"dom_remove_style":{let M=Zh.get(A.styleId);if(M)M(),Zh.delete(A.styleId),m2.delete(A.styleId);break}case"dom_listen":{let{elementId:M,listenerId:W,event:Y,preventDefault:Q}=A,J=Qo.get(M);if(!J)break;let R=(z)=>{if(Q)z.preventDefault();let B=rB(z);u({type:"dom_event",elementId:M,listenerId:W,event:Y,data:B})};J.addEventListener(Y,R),$1.set(W,{elementId:M,event:Y,handler:R});break}case"dom_unlisten":{let M=$1.get(A.listenerId);if(!M)break;let W=Qo.get(M.elementId);if(W)W.removeEventListener(M.event,M.handler);$1.delete(A.listenerId);break}case"dom_cleanup_script":{let{scriptId:M}=A;wB(M);for(let[W,Y]of T2)if(Y===M)LJ(W);for(let[W,Y]of m2)if(Y===M){let Q=Zh.get(W);if(Q)Q();Zh.delete(W),m2.delete(W)}for(let[W]of x2)if(W.startsWith(M+":"))x2.delete(W);break}case"dom_make_draggable":{let{elementId:M,handleSelector:W}=A,Y=Qo.get(M);if(!Y)break;let Q=!1,J=!1;Y.addEventListener("pointerdown",(R)=>{if(R.button!==0)return;if(W&&!R.target.closest(W))return;let z=Y.firstElementChild?.firstElementChild??Y.firstElementChild??Y,B=z.getBoundingClientRect();z.style.transform="none",z.style.top=`${B.top}px`,z.style.left=`${B.left}px`,z.style.bottom="auto",z.style.right="auto",Q=!0,J=!1;let j=R.clientX-B.left,m=R.clientY-B.top;z.style.cursor="grabbing";let y=(qr)=>{if(!Q)return;J=!0,z.style.top=`${qr.clientY-m}px`,z.style.left=`${qr.clientX-j}px`},rr=()=>{if(!Q)return;Q=!1,z.style.cursor="",document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",y),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),R.preventDefault()}),Y.addEventListener("click",(R)=>{if(J)R.stopImmediatePropagation(),R.preventDefault(),J=!1},!0);break}}});return()=>{O();for(let[,P]of lv)P.cancel();lv.clear();for(let[,P]of $1){let A=Qo.get(P.elementId);if(A)A.removeEventListener(P.event,P.handler)}$1.clear();for(let[,P]of Qo)try{P.remove()}catch{}Qo.clear(),T2.clear(),x2.clear();for(let[,P]of Zh)try{P()}catch{}Zh.clear(),m2.clear()}}function LJ(v){for(let[u,O]of $1)if(O.elementId===v){let P=Qo.get(v);if(P)P.removeEventListener(O.event,O.handler);$1.delete(u)}let h=Qo.get(v);if(h)try{h.remove()}catch{}Qo.delete(v),T2.delete(v)}function bB(v){let h=v?.type;return h==="ls_modal_open"||h==="ls_modal_set_title"||h==="ls_modal_dismiss"}var Il=new Map;function IJ(v,h,u){let O=h((P)=>{if(!bB(P))return;let A=P;switch(A.type){case"ls_modal_open":{let{scriptId:M,modalId:W,rootElementId:Y,options:Q}=A;if(Il.has(W))break;let J;try{J=v.ui.showModal({title:Q.title,width:Q.width,maxHeight:Q.maxHeight,persistent:Q.persistent})}catch(z){console.warn("[LumiScript] ctx.ui.showModal failed:",z),u({type:"ls_modal_dismissed",modalId:W});break}p5(Y,J.root),J.root.setAttribute("data-ls-script",M),J.root.setAttribute("data-ls-modal",W);let R={modalId:W,rootElementId:Y,handle:J,echoed:!1};Il.set(W,R),J.onDismiss(()=>{if(R.echoed)return;R.echoed=!0,k0(Y),Il.delete(W),u({type:"ls_modal_dismissed",modalId:W})});break}case"ls_modal_set_title":{let M=Il.get(A.modalId);if(!M)break;try{M.handle.setTitle(A.title)}catch{}break}case"ls_modal_dismiss":{let M=Il.get(A.modalId);if(!M)break;try{M.handle.dismiss()}catch{if(!M.echoed)M.echoed=!0,k0(M.rootElementId),Il.delete(A.modalId),u({type:"ls_modal_dismissed",modalId:A.modalId})}break}}});return()=>{O();for(let P of Il.values()){try{P.handle.dismiss()}catch{}k0(P.rootElementId)}Il.clear()}}function uB(v){return v?.type==="ls_context_menu_show"}function NJ(v,h,u){let O=h(async(P)=>{if(!uB(P))return;let A=P,M=null;try{M=(await v.ui.showContextMenu({position:A.options.position,items:A.options.items})).selectedKey}catch(W){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",W)}u({type:"ls_context_menu_result",requestId:A.requestId,selectedKey:M})});return()=>{O()}}function OB(v){let h=v?.type;return h==="ls_input_bar_action_register"||h==="ls_input_bar_action_set_label"||h==="ls_input_bar_action_set_subtitle"||h==="ls_input_bar_action_set_enabled"||h==="ls_input_bar_action_destroy"}var tv=new Map;function HB(v,h){return`${v}:${h}`}function BJ(v,h,u){let O=h((P)=>{if(!OB(P))return;let A=P,M=HB(A.scriptId,A.actionId);switch(A.type){case"ls_input_bar_action_register":{let W=tv.get(M);if(W){try{W.destroy()}catch{}tv.delete(M)}let Y;try{Y=v.ui.registerInputBarAction({id:A.actionId,label:A.options.label,subtitle:A.options.subtitle,iconSvg:A.options.iconSvg,iconUrl:A.options.iconUrl,enabled:A.options.enabled})}catch(Q){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",Q);break}tv.set(M,Y),Y.onClick(()=>{u({type:"ls_input_bar_action_click",scriptId:A.scriptId,actionId:A.actionId})});break}case"ls_input_bar_action_set_label":{let W=tv.get(M);if(!W)break;try{W.setLabel(A.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let W=tv.get(M);if(!W)break;if(typeof W.setSubtitle!=="function")break;try{W.setSubtitle(A.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let W=tv.get(M);if(!W)break;try{W.setEnabled(A.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let W=tv.get(M);if(!W)break;try{W.destroy()}catch{}tv.delete(M);break}}});return()=>{O();for(let P of tv.values())try{P.destroy()}catch{}tv.clear()}}function PB(v){let h=v?.type;return h==="ls_float_widget_create"||h==="ls_float_widget_move"||h==="ls_float_widget_set_visible"||h==="ls_float_widget_destroy"}var U1=new Map;function ZJ(v,h,u){let O=h((P)=>{if(!PB(P))return;let A=P;switch(A.type){case"ls_float_widget_create":{let{scriptId:M,widgetId:W,rootElementId:Y,options:Q}=A,J=U1.get(W);if(J){try{J.handle.destroy()}catch{}k0(J.rootElementId),U1.delete(W)}let R;try{R=v.ui.createFloatWidget({width:Q.width,height:Q.height,initialPosition:Q.initialPosition,snapToEdge:Q.snapToEdge,tooltip:Q.tooltip,chromeless:Q.chromeless})}catch(z){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",z);break}p5(Y,R.root),R.root.setAttribute("data-ls-script",M),R.root.setAttribute("data-ls-widget",W),U1.set(W,{widgetId:W,rootElementId:Y,handle:R}),R.onDragEnd((z)=>{u({type:"ls_float_widget_drag_end",widgetId:W,x:z.x,y:z.y})});break}case"ls_float_widget_move":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.moveTo(A.x,A.y)}catch{}break}case"ls_float_widget_set_visible":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.setVisible(A.visible)}catch{}break}case"ls_float_widget_destroy":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.destroy()}catch{}k0(M.rootElementId),U1.delete(A.widgetId);break}}});return()=>{O();for(let P of U1.values()){try{P.handle.destroy()}catch{}k0(P.rootElementId)}U1.clear()}}function qB(v){let h=v?.type;return h==="ls_drawer_tab_register"||h==="ls_drawer_tab_set_title"||h==="ls_drawer_tab_set_short_name"||h==="ls_drawer_tab_set_badge"||h==="ls_drawer_tab_activate"||h==="ls_drawer_tab_destroy"}var hv=new Map;function AB(v,h){return`${v}:${h}`}function xJ(v,h,u){let O=h((P)=>{if(!qB(P))return;let A=P,M=AB(A.scriptId,A.tabId);switch(A.type){case"ls_drawer_tab_register":{let W=hv.get(M);if(W){try{W.handle.destroy()}catch{}k0(W.rootElementId),hv.delete(M)}let Y;try{Y=v.ui.registerDrawerTab({id:A.options.id,title:A.options.title,shortName:A.options.shortName,description:A.options.description,keywords:A.options.keywords,headerTitle:A.options.headerTitle,iconSvg:A.options.iconSvg,iconUrl:A.options.iconUrl})}catch(Q){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",Q);break}p5(A.rootElementId,Y.root),Y.root.setAttribute("data-ls-script",A.scriptId),Y.root.setAttribute("data-ls-tab",A.tabId),hv.set(M,{scriptId:A.scriptId,tabId:A.tabId,rootElementId:A.rootElementId,handle:Y}),Y.onActivate(()=>{u({type:"ls_drawer_tab_activated",scriptId:A.scriptId,tabId:A.tabId})});break}case"ls_drawer_tab_set_title":{let W=hv.get(M);if(!W)break;try{W.handle.setTitle(A.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let W=hv.get(M);if(!W)break;try{W.handle.setShortName(A.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let W=hv.get(M);if(!W)break;try{W.handle.setBadge(A.badge)}catch{}break}case"ls_drawer_tab_activate":{let W=hv.get(M);if(!W)break;try{W.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let W=hv.get(M);if(!W)break;try{W.handle.destroy()}catch{}k0(W.rootElementId),hv.delete(M);break}}});return()=>{O();for(let P of hv.values()){try{P.handle.destroy()}catch{}k0(P.rootElementId)}hv.clear()}}var C2=Ar(rg(),1);function Cjg(v){let h=[],u=v.dom.addStyle($3);h.push(u);let O=[],P=v.onBackendMessage((rr)=>{for(let qr of O)qr(rr)});h.push(P);let A=(rr)=>{return O.push(rr),()=>{let qr=O.indexOf(rr);if(qr!==-1)O.splice(qr,1)}},M=(rr)=>{v.sendToBackend(rr)},W=FJ(v,A,M);h.push(W);let Y=IJ(v,A,M);h.push(Y);let Q=NJ(v,A,M);h.push(Q);let J=BJ(v,A,M);h.push(J);let R=ZJ(v,A,M);h.push(R);let z=xJ(v,A,M);h.push(z),M({type:"frontend_ready"});let B=v.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),j=Kq.createRoot(B.root);j.render(C2.jsxDEV(zq.StrictMode,{children:C2.jsxDEV(KJ,{onBackendMessage:A,sendToBackend:M},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>{try{j.unmount()}catch{}try{B.destroy()}catch{}});let m=v.ui.mount("settings_extensions"),y=Kq.createRoot(m);return y.render(C2.jsxDEV(zq.StrictMode,{children:C2.jsxDEV($J,{onBackendMessage:A,sendToBackend:M},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>y.unmount()),()=>{for(let rr of h)try{rr()}catch{}v.dom.cleanup()}}export{Cjg as setup};
