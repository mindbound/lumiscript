var M$=Object.create;var{getPrototypeOf:W$,defineProperty:MP,getOwnPropertyNames:R$}=Object;var G$=Object.prototype.hasOwnProperty;function X$(o){return this[o]}var Y$,J$,Ar=(o,h,u)=>{var O=o!=null&&typeof o==="object";if(O){var P=h?Y$??=new WeakMap:J$??=new WeakMap,A=P.get(o);if(A)return A}u=o!=null?M$(W$(o)):{};let M=h||!o||!o.__esModule?MP(u,"default",{value:o,enumerable:!0}):u;for(let W of R$(o))if(!G$.call(M,W))MP(M,W,{get:X$.bind(o,W),enumerable:!0});if(O)P.set(o,M);return M};var Jh=(o,h)=>()=>(h||o((h={exports:{}}).exports,h),h.exports);var Q$=(o)=>o;function z$(o,h){this[o]=Q$.bind(null,h)}var K$=(o,h)=>{for(var u in h)MP(o,u,{get:h[u],enumerable:!0,configurable:!0,set:z$.bind(h,u)})};var hg=Jh((e$,s6)=>{(function(){function o(Y,Z){Object.defineProperty(O.prototype,Y,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",Z[0],Z[1])}})}function h(Y){if(Y===null||typeof Y!=="object")return null;return Y=B0&&Y[B0]||Y["@@iterator"],typeof Y==="function"?Y:null}function u(Y,Z){Y=(Y=Y.constructor)&&(Y.displayName||Y.name)||"ReactClass";var gr=Y+"."+Z;ur[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",Z,Y),ur[gr]=!0)}function O(Y,Z,gr){this.props=Y,this.context=Z,this.refs=s0,this.updater=gr||_0}function P(){}function A(Y,Z,gr){this.props=Y,this.context=Z,this.refs=s0,this.updater=gr||_0}function M(){}function W(Y){return""+Y}function J(Y){try{W(Y);var Z=!1}catch(Yr){Z=!0}if(Z){Z=console;var gr=Z.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&Y[Symbol.toStringTag]||Y.constructor.name||"Object";return gr.call(Z,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),W(Y)}}function z(Y){if(Y==null)return null;if(typeof Y==="function")return Y.$$typeof===d5?null:Y.displayName||Y.name||null;if(typeof Y==="string")return Y;switch(Y){case Rr:return"Fragment";case n:return"Profiler";case k:return"StrictMode";case Sr:return"Suspense";case br:return"SuspenseList";case Yg:return"Activity"}if(typeof Y==="object")switch(typeof Y.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),Y.$$typeof){case vr:return"Portal";case Kr:return Y.displayName||"Context";case Pr:return(Y._context.displayName||"Context")+".Consumer";case Xr:var Z=Y.render;return Y=Y.displayName,Y||(Y=Z.displayName||Z.name||"",Y=Y!==""?"ForwardRef("+Y+")":"ForwardRef"),Y;case ir:return Z=Y.displayName||null,Z!==null?Z:z(Y.type)||"Memo";case pr:Z=Y._payload,Y=Y._init;try{return z(Y(Z))}catch(gr){}}return null}function Q(Y){if(Y===Rr)return"<>";if(typeof Y==="object"&&Y!==null&&Y.$$typeof===pr)return"<...>";try{var Z=z(Y);return Z?"<"+Z+">":"<...>"}catch(gr){return"<...>"}}function G(){var Y=nr.A;return Y===null?null:Y.getOwner()}function K(){return Error("react-stack-top-frame")}function N(Y){if(xh.call(Y,"key")){var Z=Object.getOwnPropertyDescriptor(Y,"key").get;if(Z&&Z.isReactWarning)return!1}return Y.key!==void 0}function j(Y,Z){function gr(){S2||(S2=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",Z))}gr.isReactWarning=!0,Object.defineProperty(Y,"key",{get:gr,configurable:!0})}function T(){var Y=z(this.type);return Bl[Y]||(Bl[Y]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),Y=this.props.ref,Y!==void 0?Y:null}function y(Y,Z,gr,Or,Yr,xr){var Tr=gr.ref;return Y={$$typeof:hr,type:Y,key:Z,props:gr,_owner:Or},(Tr!==void 0?Tr:null)!==null?Object.defineProperty(Y,"ref",{enumerable:!1,get:T}):Object.defineProperty(Y,"ref",{enumerable:!1,value:null}),Y._store={},Object.defineProperty(Y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(Y,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(Y,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Yr}),Object.defineProperty(Y,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:xr}),Object.freeze&&(Object.freeze(Y.props),Object.freeze(Y)),Y}function rr(Y,Z){return Z=y(Y.type,Z,Y.props,Y._owner,Y._debugStack,Y._debugTask),Y._store&&(Z._store.validated=Y._store.validated),Z}function qr(Y){or(Y)?Y._store&&(Y._store.validated=1):typeof Y==="object"&&Y!==null&&Y.$$typeof===pr&&(Y._payload.status==="fulfilled"?or(Y._payload.value)&&Y._payload.value._store&&(Y._payload.value._store.validated=1):Y._store&&(Y._store.validated=1))}function or(Y){return typeof Y==="object"&&Y!==null&&Y.$$typeof===hr}function p(Y){var Z={"=":"=0",":":"=2"};return"$"+Y.replace(/[=:]/g,function(gr){return Z[gr]})}function s(Y,Z){return typeof Y==="object"&&Y!==null&&Y.key!=null?(J(Y.key),p(""+Y.key)):Z.toString(36)}function lr(Y){switch(Y.status){case"fulfilled":return Y.value;case"rejected":throw Y.reason;default:switch(typeof Y.status==="string"?Y.then(M,M):(Y.status="pending",Y.then(function(Z){Y.status==="pending"&&(Y.status="fulfilled",Y.value=Z)},function(Z){Y.status==="pending"&&(Y.status="rejected",Y.reason=Z)})),Y.status){case"fulfilled":return Y.value;case"rejected":throw Y.reason}}throw Y}function m(Y,Z,gr,Or,Yr){var xr=typeof Y;if(xr==="undefined"||xr==="boolean")Y=null;var Tr=!1;if(Y===null)Tr=!0;else switch(xr){case"bigint":case"string":case"number":Tr=!0;break;case"object":switch(Y.$$typeof){case hr:case vr:Tr=!0;break;case pr:return Tr=Y._init,m(Tr(Y._payload),Z,gr,Or,Yr)}}if(Tr){Tr=Y,Yr=Yr(Tr);var og=Or===""?"."+s(Tr,0):Or;return Ag(Yr)?(gr="",og!=null&&(gr=og.replace(Ch,"$&/")+"/"),m(Yr,Z,gr,"",function(e0){return e0})):Yr!=null&&(or(Yr)&&(Yr.key!=null&&(Tr&&Tr.key===Yr.key||J(Yr.key)),gr=rr(Yr,gr+(Yr.key==null||Tr&&Tr.key===Yr.key?"":(""+Yr.key).replace(Ch,"$&/")+"/")+og),Or!==""&&Tr!=null&&or(Tr)&&Tr.key==null&&Tr._store&&!Tr._store.validated&&(gr._store.validated=2),Yr=gr),Z.push(Yr)),1}if(Tr=0,og=Or===""?".":Or+":",Ag(Y))for(var $r=0;$r<Y.length;$r++)Or=Y[$r],xr=og+s(Or,$r),Tr+=m(Or,Z,gr,xr,Yr);else if($r=h(Y),typeof $r==="function")for($r===Y.entries&&(Th||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Th=!0),Y=$r.call(Y),$r=0;!(Or=Y.next()).done;)Or=Or.value,xr=og+s(Or,$r++),Tr+=m(Or,Z,gr,xr,Yr);else if(xr==="object"){if(typeof Y.then==="function")return m(lr(Y),Z,gr,Or,Yr);throw Z=String(Y),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(Y).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Tr}function V(Y,Z,gr){if(Y==null)return Y;var Or=[],Yr=0;return m(Y,Or,"","",function(xr){return Z.call(gr,xr,Yr++)}),Or}function c(Y){if(Y._status===-1){var Z=Y._ioInfo;Z!=null&&(Z.start=Z.end=performance.now()),Z=Y._result;var gr=Z();if(gr.then(function(Yr){if(Y._status===0||Y._status===-1){Y._status=1,Y._result=Yr;var xr=Y._ioInfo;xr!=null&&(xr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Yr)}},function(Yr){if(Y._status===0||Y._status===-1){Y._status=2,Y._result=Yr;var xr=Y._ioInfo;xr!=null&&(xr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Yr)}}),Z=Y._ioInfo,Z!=null){Z.value=gr;var Or=gr.displayName;typeof Or==="string"&&(Z.name=Or)}Y._status===-1&&(Y._status=0,Y._result=gr)}if(Y._status===1)return Z=Y._result,Z===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Z),"default"in Z||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Z),Z.default;throw Y._result}function i(){var Y=nr.H;return Y===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),Y}function Qr(){nr.asyncTransitions--}function Gr(Y){if(Zl===null)try{var Z=("require"+Math.random()).slice(0,7);Zl=(s6&&s6[Z]).call(s6,"timers").setImmediate}catch(gr){Zl=function(Or){i2===!1&&(i2=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Yr=new MessageChannel;Yr.port1.onmessage=Or,Yr.port2.postMessage(void 0)}}return Zl(Y)}function zr(Y){return 1<Y.length&&typeof AggregateError==="function"?AggregateError(Y):Y[0]}function mr(Y,Z){Z!==xl-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),xl=Z}function D(Y,Z,gr){var Or=nr.actQueue;if(Or!==null)if(Or.length!==0)try{d(Or),Gr(function(){return D(Y,Z,gr)});return}catch(Yr){nr.thrownErrors.push(Yr)}else nr.actQueue=null;0<nr.thrownErrors.length?(Or=zr(nr.thrownErrors),nr.thrownErrors.length=0,gr(Or)):Z(Y)}function d(Y){if(!Cl){Cl=!0;var Z=0;try{for(;Z<Y.length;Z++){var gr=Y[Z];do{nr.didUsePromise=!1;var Or=gr(!1);if(Or!==null){if(nr.didUsePromise){Y[Z]=gr,Y.splice(0,Z);return}gr=Or}else break}while(1)}Y.length=0}catch(Yr){Y.splice(0,Z+1),nr.thrownErrors.push(Yr)}finally{Cl=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var hr=Symbol.for("react.transitional.element"),vr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),Kr=Symbol.for("react.context"),Xr=Symbol.for("react.forward_ref"),Sr=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),ir=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Yg=Symbol.for("react.activity"),B0=Symbol.iterator,ur={},_0={isMounted:function(){return!1},enqueueForceUpdate:function(Y){u(Y,"forceUpdate")},enqueueReplaceState:function(Y){u(Y,"replaceState")},enqueueSetState:function(Y){u(Y,"setState")}},K0=Object.assign,s0={};Object.freeze(s0),O.prototype.isReactComponent={},O.prototype.setState=function(Y,Z){if(typeof Y!=="object"&&typeof Y!=="function"&&Y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,Y,Z,"setState")},O.prototype.forceUpdate=function(Y){this.updater.enqueueForceUpdate(this,Y,"forceUpdate")};var cg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(F1 in cg)cg.hasOwnProperty(F1)&&o(F1,cg[F1]);P.prototype=O.prototype,cg=A.prototype=new P,cg.constructor=A,K0(cg,O.prototype),cg.isPureReactComponent=!0;var Ag=Array.isArray,d5=Symbol.for("react.client.reference"),nr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},xh=Object.prototype.hasOwnProperty,Jg=console.createTask?console.createTask:function(){return null};cg={react_stack_bottom_frame:function(Y){return Y()}};var S2,ho,Bl={},Nl=cg.react_stack_bottom_frame.bind(cg,K)(),Tu=Jg(Q(K)),Th=!1,Ch=/\/+/g,L1=typeof reportError==="function"?reportError:function(Y){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof Y==="object"&&Y!==null&&typeof Y.message==="string"?String(Y.message):String(Y),error:Y});if(!window.dispatchEvent(Z))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",Y);return}console.error(Y)},i2=!1,Zl=null,xl=0,Tl=!1,Cl=!1,s5=typeof queueMicrotask==="function"?function(Y){queueMicrotask(function(){return queueMicrotask(Y)})}:Gr;cg=Object.freeze({__proto__:null,c:function(Y){return i().useMemoCache(Y)}});var F1={map:V,forEach:function(Y,Z,gr){V(Y,function(){Z.apply(this,arguments)},gr)},count:function(Y){var Z=0;return V(Y,function(){Z++}),Z},toArray:function(Y){return V(Y,function(Z){return Z})||[]},only:function(Y){if(!or(Y))throw Error("React.Children.only expected to receive a single React element child.");return Y}};e$.Activity=Yg,e$.Children=F1,e$.Component=O,e$.Fragment=Rr,e$.Profiler=n,e$.PureComponent=A,e$.StrictMode=k,e$.Suspense=Sr,e$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nr,e$.__COMPILER_RUNTIME=cg,e$.act=function(Y){var Z=nr.actQueue,gr=xl;xl++;var Or=nr.actQueue=Z!==null?Z:[],Yr=!1;try{var xr=Y()}catch($r){nr.thrownErrors.push($r)}if(0<nr.thrownErrors.length)throw mr(Z,gr),Y=zr(nr.thrownErrors),nr.thrownErrors.length=0,Y;if(xr!==null&&typeof xr==="object"&&typeof xr.then==="function"){var Tr=xr;return s5(function(){Yr||Tl||(Tl=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function($r,e0){Yr=!0,Tr.then(function(rv){if(mr(Z,gr),gr===0){try{d(Or),Gr(function(){return D(rv,$r,e0)})}catch(rw){nr.thrownErrors.push(rw)}if(0<nr.thrownErrors.length){var I1=zr(nr.thrownErrors);nr.thrownErrors.length=0,e0(I1)}}else $r(rv)},function(rv){mr(Z,gr),0<nr.thrownErrors.length?(rv=zr(nr.thrownErrors),nr.thrownErrors.length=0,e0(rv)):e0(rv)})}}}var og=xr;if(mr(Z,gr),gr===0&&(d(Or),Or.length!==0&&s5(function(){Yr||Tl||(Tl=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),nr.actQueue=null),0<nr.thrownErrors.length)throw Y=zr(nr.thrownErrors),nr.thrownErrors.length=0,Y;return{then:function($r,e0){Yr=!0,gr===0?(nr.actQueue=Or,Gr(function(){return D(og,$r,e0)})):$r(og)}}},e$.cache=function(Y){return function(){return Y.apply(null,arguments)}},e$.cacheSignal=function(){return null},e$.captureOwnerStack=function(){var Y=nr.getCurrentStack;return Y===null?null:Y()},e$.cloneElement=function(Y,Z,gr){if(Y===null||Y===void 0)throw Error("The argument must be a React element, but you passed "+Y+".");var Or=K0({},Y.props),Yr=Y.key,xr=Y._owner;if(Z!=null){var Tr;r:{if(xh.call(Z,"ref")&&(Tr=Object.getOwnPropertyDescriptor(Z,"ref").get)&&Tr.isReactWarning){Tr=!1;break r}Tr=Z.ref!==void 0}Tr&&(xr=G()),N(Z)&&(J(Z.key),Yr=""+Z.key);for(og in Z)!xh.call(Z,og)||og==="key"||og==="__self"||og==="__source"||og==="ref"&&Z.ref===void 0||(Or[og]=Z[og])}var og=arguments.length-2;if(og===1)Or.children=gr;else if(1<og){Tr=Array(og);for(var $r=0;$r<og;$r++)Tr[$r]=arguments[$r+2];Or.children=Tr}Or=y(Y.type,Yr,Or,xr,Y._debugStack,Y._debugTask);for(Yr=2;Yr<arguments.length;Yr++)qr(arguments[Yr]);return Or},e$.createContext=function(Y){return Y={$$typeof:Kr,_currentValue:Y,_currentValue2:Y,_threadCount:0,Provider:null,Consumer:null},Y.Provider=Y,Y.Consumer={$$typeof:Pr,_context:Y},Y._currentRenderer=null,Y._currentRenderer2=null,Y},e$.createElement=function(Y,Z,gr){for(var Or=2;Or<arguments.length;Or++)qr(arguments[Or]);Or={};var Yr=null;if(Z!=null)for($r in ho||!("__self"in Z)||"key"in Z||(ho=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),N(Z)&&(J(Z.key),Yr=""+Z.key),Z)xh.call(Z,$r)&&$r!=="key"&&$r!=="__self"&&$r!=="__source"&&(Or[$r]=Z[$r]);var xr=arguments.length-2;if(xr===1)Or.children=gr;else if(1<xr){for(var Tr=Array(xr),og=0;og<xr;og++)Tr[og]=arguments[og+2];Object.freeze&&Object.freeze(Tr),Or.children=Tr}if(Y&&Y.defaultProps)for($r in xr=Y.defaultProps,xr)Or[$r]===void 0&&(Or[$r]=xr[$r]);Yr&&j(Or,typeof Y==="function"?Y.displayName||Y.name||"Unknown":Y);var $r=1e4>nr.recentlyCreatedOwnerStacks++;return y(Y,Yr,Or,G(),$r?Error("react-stack-top-frame"):Nl,$r?Jg(Q(Y)):Tu)},e$.createRef=function(){var Y={current:null};return Object.seal(Y),Y},e$.forwardRef=function(Y){Y!=null&&Y.$$typeof===ir?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof Y!=="function"?console.error("forwardRef requires a render function but was given %s.",Y===null?"null":typeof Y):Y.length!==0&&Y.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",Y.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),Y!=null&&Y.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var Z={$$typeof:Xr,render:Y},gr;return Object.defineProperty(Z,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,Y.name||Y.displayName||(Object.defineProperty(Y,"name",{value:Or}),Y.displayName=Or)}}),Z},e$.isValidElement=or,e$.lazy=function(Y){Y={_status:-1,_result:Y};var Z={$$typeof:pr,_payload:Y,_init:c},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return Y._ioInfo=gr,Z._debugInfo=[{awaited:gr}],Z},e$.memo=function(Y,Z){Y==null&&console.error("memo: The first argument must be a component. Instead received: %s",Y===null?"null":typeof Y),Z={$$typeof:ir,type:Y,compare:Z===void 0?null:Z};var gr;return Object.defineProperty(Z,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,Y.name||Y.displayName||(Object.defineProperty(Y,"name",{value:Or}),Y.displayName=Or)}}),Z},e$.startTransition=function(Y){var Z=nr.T,gr={};gr._updatedFibers=new Set,nr.T=gr;try{var Or=Y(),Yr=nr.S;Yr!==null&&Yr(gr,Or),typeof Or==="object"&&Or!==null&&typeof Or.then==="function"&&(nr.asyncTransitions++,Or.then(Qr,Qr),Or.then(M,L1))}catch(xr){L1(xr)}finally{Z===null&&gr._updatedFibers&&(Y=gr._updatedFibers.size,gr._updatedFibers.clear(),10<Y&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),Z!==null&&gr.types!==null&&(Z.types!==null&&Z.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),Z.types=gr.types),nr.T=Z}},e$.unstable_useCacheRefresh=function(){return i().useCacheRefresh()},e$.use=function(Y){return i().use(Y)},e$.useActionState=function(Y,Z,gr){return i().useActionState(Y,Z,gr)},e$.useCallback=function(Y,Z){return i().useCallback(Y,Z)},e$.useContext=function(Y){var Z=i();return Y.$$typeof===Pr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),Z.useContext(Y)},e$.useDebugValue=function(Y,Z){return i().useDebugValue(Y,Z)},e$.useDeferredValue=function(Y,Z){return i().useDeferredValue(Y,Z)},e$.useEffect=function(Y,Z){return Y==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),i().useEffect(Y,Z)},e$.useEffectEvent=function(Y){return i().useEffectEvent(Y)},e$.useId=function(){return i().useId()},e$.useImperativeHandle=function(Y,Z,gr){return i().useImperativeHandle(Y,Z,gr)},e$.useInsertionEffect=function(Y,Z){return Y==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),i().useInsertionEffect(Y,Z)},e$.useLayoutEffect=function(Y,Z){return Y==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),i().useLayoutEffect(Y,Z)},e$.useMemo=function(Y,Z){return i().useMemo(Y,Z)},e$.useOptimistic=function(Y,Z){return i().useOptimistic(Y,Z)},e$.useReducer=function(Y,Z,gr){return i().useReducer(Y,Z,gr)},e$.useRef=function(Y){return i().useRef(Y)},e$.useState=function(Y){return i().useState(Y)},e$.useSyncExternalStore=function(Y,Z,gr){return i().useSyncExternalStore(Y,Z,gr)},e$.useTransition=function(){return i().useTransition()},e$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OR=Jh(($$)=>{(function(){function o(){if(p=!1,V){var D=$$.unstable_now();Qr=D;var d=!0;try{r:{qr=!1,or&&(or=!1,lr(c),c=-1),rr=!0;var hr=y;try{g:{A(D);for(T=u(K);T!==null&&!(T.expirationTime>D&&W());){var vr=T.callback;if(typeof vr==="function"){T.callback=null,y=T.priorityLevel;var Rr=vr(T.expirationTime<=D);if(D=$$.unstable_now(),typeof Rr==="function"){T.callback=Rr,A(D),d=!0;break g}T===u(K)&&O(K),A(D)}else O(K);T=u(K)}if(T!==null)d=!0;else{var k=u(N);k!==null&&J(M,k.startTime-D),d=!1}}break r}finally{T=null,y=hr,rr=!1}d=void 0}}finally{d?Gr():V=!1}}}function h(D,d){var hr=D.length;D.push(d);r:for(;0<hr;){var vr=hr-1>>>1,Rr=D[vr];if(0<P(Rr,d))D[vr]=d,D[hr]=Rr,hr=vr;else break r}}function u(D){return D.length===0?null:D[0]}function O(D){if(D.length===0)return null;var d=D[0],hr=D.pop();if(hr!==d){D[0]=hr;r:for(var vr=0,Rr=D.length,k=Rr>>>1;vr<k;){var n=2*(vr+1)-1,Pr=D[n],Kr=n+1,Xr=D[Kr];if(0>P(Pr,hr))Kr<Rr&&0>P(Xr,Pr)?(D[vr]=Xr,D[Kr]=hr,vr=Kr):(D[vr]=Pr,D[n]=hr,vr=n);else if(Kr<Rr&&0>P(Xr,hr))D[vr]=Xr,D[Kr]=hr,vr=Kr;else break r}}return d}function P(D,d){var hr=D.sortIndex-d.sortIndex;return hr!==0?hr:D.id-d.id}function A(D){for(var d=u(N);d!==null;){if(d.callback===null)O(N);else if(d.startTime<=D)O(N),d.sortIndex=d.expirationTime,h(K,d);else break;d=u(N)}}function M(D){if(or=!1,A(D),!qr)if(u(K)!==null)qr=!0,V||(V=!0,Gr());else{var d=u(N);d!==null&&J(M,d.startTime-D)}}function W(){return p?!0:$$.unstable_now()-Qr<i?!1:!0}function J(D,d){c=s(function(){D($$.unstable_now())},d)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),$$.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var z=performance;$$.unstable_now=function(){return z.now()}}else{var Q=Date,G=Q.now();$$.unstable_now=function(){return Q.now()-G}}var K=[],N=[],j=1,T=null,y=3,rr=!1,qr=!1,or=!1,p=!1,s=typeof setTimeout==="function"?setTimeout:null,lr=typeof clearTimeout==="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null,V=!1,c=-1,i=5,Qr=-1;if(typeof m==="function")var Gr=function(){m(o)};else if(typeof MessageChannel<"u"){var zr=new MessageChannel,mr=zr.port2;zr.port1.onmessage=o,Gr=function(){mr.postMessage(null)}}else Gr=function(){s(o,0)};$$.unstable_IdlePriority=5,$$.unstable_ImmediatePriority=1,$$.unstable_LowPriority=4,$$.unstable_NormalPriority=3,$$.unstable_Profiling=null,$$.unstable_UserBlockingPriority=2,$$.unstable_cancelCallback=function(D){D.callback=null},$$.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):i=0<D?Math.floor(1000/D):5},$$.unstable_getCurrentPriorityLevel=function(){return y},$$.unstable_next=function(D){switch(y){case 1:case 2:case 3:var d=3;break;default:d=y}var hr=y;y=d;try{return D()}finally{y=hr}},$$.unstable_requestPaint=function(){p=!0},$$.unstable_runWithPriority=function(D,d){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var hr=y;y=D;try{return d()}finally{y=hr}},$$.unstable_scheduleCallback=function(D,d,hr){var vr=$$.unstable_now();switch(typeof hr==="object"&&hr!==null?(hr=hr.delay,hr=typeof hr==="number"&&0<hr?vr+hr:vr):hr=vr,D){case 1:var Rr=-1;break;case 2:Rr=250;break;case 5:Rr=1073741823;break;case 4:Rr=1e4;break;default:Rr=5000}return Rr=hr+Rr,D={id:j++,callback:d,priorityLevel:D,startTime:hr,expirationTime:Rr,sortIndex:-1},hr>vr?(D.sortIndex=hr,h(N,D),u(K)===null&&D===u(N)&&(or?(lr(c),c=-1):or=!0,J(M,hr-vr))):(D.sortIndex=Rr,h(K,D),qr||rr||(qr=!0,V||(V=!0,Gr()))),D},$$.unstable_shouldYield=W,$$.unstable_wrapCallback=function(D){var d=y;return function(){var hr=y;y=d;try{return D.apply(this,arguments)}finally{y=hr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var HR=Jh((U$)=>{var WP=Ar(hg());(function(){function o(){}function h(Q){return""+Q}function u(Q,G,K){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{h(N);var j=!1}catch(T){j=!0}return j&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&N[Symbol.toStringTag]||N.constructor.name||"Object"),h(N)),{$$typeof:J,key:N==null?null:""+N,children:Q,containerInfo:G,implementation:K}}function O(Q,G){if(Q==="font")return"";if(typeof G==="string")return G==="use-credentials"?G:""}function P(Q){return Q===null?"`null`":Q===void 0?"`undefined`":Q===""?"an empty string":'something with type "'+typeof Q+'"'}function A(Q){return Q===null?"`null`":Q===void 0?"`undefined`":Q===""?"an empty string":typeof Q==="string"?JSON.stringify(Q):typeof Q==="number"?"`"+Q+"`":'something with type "'+typeof Q+'"'}function M(){var Q=z.H;return Q===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),Q}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var W={d:{f:o,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},J=Symbol.for("react.portal"),z=WP.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),U$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,U$.createPortal=function(Q,G){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!G||G.nodeType!==1&&G.nodeType!==9&&G.nodeType!==11)throw Error("Target container is not a DOM element.");return u(Q,G,null,K)},U$.flushSync=function(Q){var G=z.T,K=W.p;try{if(z.T=null,W.p=2,Q)return Q()}finally{z.T=G,W.p=K,W.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},U$.preconnect=function(Q,G){typeof Q==="string"&&Q?G!=null&&typeof G!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",A(G)):G!=null&&typeof G.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",P(G.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(Q)),typeof Q==="string"&&(G?(G=G.crossOrigin,G=typeof G==="string"?G==="use-credentials"?G:"":void 0):G=null,W.d.C(Q,G))},U$.prefetchDNS=function(Q){if(typeof Q!=="string"||!Q)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(Q));else if(1<arguments.length){var G=arguments[1];typeof G==="object"&&G.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",A(G)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",A(G))}typeof Q==="string"&&W.d.D(Q)},U$.preinit=function(Q,G){if(typeof Q==="string"&&Q?G==null||typeof G!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",A(G)):G.as!=="style"&&G.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',A(G.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",P(Q)),typeof Q==="string"&&G&&typeof G.as==="string"){var K=G.as,N=O(K,G.crossOrigin),j=typeof G.integrity==="string"?G.integrity:void 0,T=typeof G.fetchPriority==="string"?G.fetchPriority:void 0;K==="style"?W.d.S(Q,typeof G.precedence==="string"?G.precedence:void 0,{crossOrigin:N,integrity:j,fetchPriority:T}):K==="script"&&W.d.X(Q,{crossOrigin:N,integrity:j,fetchPriority:T,nonce:typeof G.nonce==="string"?G.nonce:void 0})}},U$.preinitModule=function(Q,G){var K="";if(typeof Q==="string"&&Q||(K+=" The `href` argument encountered was "+P(Q)+"."),G!==void 0&&typeof G!=="object"?K+=" The `options` argument encountered was "+P(G)+".":G&&("as"in G)&&G.as!=="script"&&(K+=" The `as` option encountered was "+A(G.as)+"."),K)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",K);else switch(K=G&&typeof G.as==="string"?G.as:"script",K){case"script":break;default:K=A(K),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',K,Q)}if(typeof Q==="string")if(typeof G==="object"&&G!==null){if(G.as==null||G.as==="script")K=O(G.as,G.crossOrigin),W.d.M(Q,{crossOrigin:K,integrity:typeof G.integrity==="string"?G.integrity:void 0,nonce:typeof G.nonce==="string"?G.nonce:void 0})}else G==null&&W.d.M(Q)},U$.preload=function(Q,G){var K="";if(typeof Q==="string"&&Q||(K+=" The `href` argument encountered was "+P(Q)+"."),G==null||typeof G!=="object"?K+=" The `options` argument encountered was "+P(G)+".":typeof G.as==="string"&&G.as||(K+=" The `as` option encountered was "+P(G.as)+"."),K&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',K),typeof Q==="string"&&typeof G==="object"&&G!==null&&typeof G.as==="string"){K=G.as;var N=O(K,G.crossOrigin);W.d.L(Q,K,{crossOrigin:N,integrity:typeof G.integrity==="string"?G.integrity:void 0,nonce:typeof G.nonce==="string"?G.nonce:void 0,type:typeof G.type==="string"?G.type:void 0,fetchPriority:typeof G.fetchPriority==="string"?G.fetchPriority:void 0,referrerPolicy:typeof G.referrerPolicy==="string"?G.referrerPolicy:void 0,imageSrcSet:typeof G.imageSrcSet==="string"?G.imageSrcSet:void 0,imageSizes:typeof G.imageSizes==="string"?G.imageSizes:void 0,media:typeof G.media==="string"?G.media:void 0})}},U$.preloadModule=function(Q,G){var K="";typeof Q==="string"&&Q||(K+=" The `href` argument encountered was "+P(Q)+"."),G!==void 0&&typeof G!=="object"?K+=" The `options` argument encountered was "+P(G)+".":G&&("as"in G)&&typeof G.as!=="string"&&(K+=" The `as` option encountered was "+P(G.as)+"."),K&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',K),typeof Q==="string"&&(G?(K=O(G.as,G.crossOrigin),W.d.m(Q,{as:typeof G.as==="string"&&G.as!=="script"?G.as:void 0,crossOrigin:K,integrity:typeof G.integrity==="string"?G.integrity:void 0})):W.d.m(Q))},U$.requestFormReset=function(Q){W.d.r(Q)},U$.unstable_batchedUpdates=function(Q,G){return Q(G)},U$.useFormState=function(Q,G,K){return M().useFormState(Q,G,K)},U$.useFormStatus=function(){return M().useHostTransitionStatus()},U$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var S5=Jh((SZ,PR)=>{PR.exports=HR()});var qR=Jh((L$)=>{var lg=Ar(OR()),i5=Ar(hg()),RP=Ar(S5());(function(){function o(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function h(r,g,v,l){if(v>=g.length)return l;var w=g[v],b=v0(r)?r.slice():cr({},r);return b[w]=h(r[w],g,v+1,l),b}function u(r,g,v){if(g.length!==v.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<v.length-1;l++)if(g[l]!==v[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return O(r,g,v,0)}}function O(r,g,v,l){var w=g[l],b=v0(r)?r.slice():cr({},r);return l+1===g.length?(b[v[l]]=b[w],v0(b)?b.splice(w,1):delete b[w]):b[w]=O(r[w],g,v,l+1),b}function P(r,g,v){var l=g[v],w=v0(r)?r.slice():cr({},r);if(v+1===g.length)return v0(w)?w.splice(l,1):delete w[l],w;return w[l]=P(r[l],g,v+1),w}function A(){return!1}function M(){return null}function W(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function J(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function z(){}function Q(){}function G(r){var g=[];return r.forEach(function(v){g.push(v)}),g.sort().join(", ")}function K(r,g,v,l){return new oz(r,g,v,l)}function N(r,g){r.context===f1&&(TO(r.current,2,g,r,null,null),jh())}function j(r,g){if(Lv!==null){var v=g.staleFamilies;g=g.updatedFamilies,Uw(),WA(r.current,g,v),jh()}}function T(r){Lv=r}function y(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,v=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(v=g.return),r=g.return;while(r)}return g.tag===3?v:null}function qr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function or(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function p(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function s(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var v=r,l=g;;){var w=v.return;if(w===null)break;var b=w.alternate;if(b===null){if(l=w.return,l!==null){v=l;continue}break}if(w.child===b.child){for(b=w.child;b;){if(b===v)return p(w),r;if(b===l)return p(w),g;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(v.return!==l.return)v=w,l=b;else{for(var H=!1,q=w.child;q;){if(q===v){H=!0,v=w,l=b;break}if(q===l){H=!0,l=w,v=b;break}q=q.sibling}if(!H){for(q=b.child;q;){if(q===v){H=!0,v=b,l=w;break}if(q===l){H=!0,l=b,v=w;break}q=q.sibling}if(!H)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(v.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(v.tag!==3)throw Error("Unable to find node on an unmounted component.");return v.stateNode.current===v?r:g}function lr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=lr(r),g!==null)return g;r=r.sibling}return null}function m(r){if(r===null||typeof r!=="object")return null;return r=zW&&r[zW]||r["@@iterator"],typeof r==="function"?r:null}function V(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===eK?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case g5:return"Fragment";case nO:return"Profiler";case c4:return"StrictMode";case tO:return"Suspense";case VO:return"SuspenseList";case _O:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case r5:return"Portal";case Ko:return r.displayName||"Context";case DO:return(r._context.displayName||"Context")+".Consumer";case mw:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j4:return g=r.displayName||null,g!==null?g:V(r.type)||"Memo";case Ov:g=r._payload,r=r._init;try{return V(r(g))}catch(v){}}return null}function c(r){return typeof r.tag==="number"?i(r):typeof r.name==="string"?r.name:null}function i(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(g);case 8:return g===c4?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var v=g.length-1;0<=v;v--)if(typeof g[v].name==="string")return g[v].name}if(r.return!==null)return i(r.return)}return null}function Qr(r){return{current:r}}function Gr(r,g){0>ao?console.error("Unexpected pop."):(g!==yO[ao]&&console.error("Unexpected Fiber popped."),r.current=EO[ao],EO[ao]=null,yO[ao]=null,ao--)}function zr(r,g,v){ao++,EO[ao]=r.current,yO[ao]=v,r.current=g}function mr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function D(r,g){zr(V1,g,r),zr(Sw,r,r),zr(t1,null,r);var v=g.nodeType;switch(v){case 9:case 11:v=v===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?y9(g):q1:q1;break;default:if(v=g.tagName,g=g.namespaceURI)g=y9(g),g=c9(g,v);else switch(v){case"svg":g=C5;break;case"math":g=y6;break;default:g=q1}}v=v.toLowerCase(),v=nq(null,v),v={context:g,ancestorInfo:v},Gr(t1,r),zr(t1,v,r)}function d(r){Gr(t1,r),Gr(Sw,r),Gr(V1,r)}function hr(){return mr(t1.current)}function vr(r){r.memoizedState!==null&&zr(f4,r,r);var g=mr(t1.current),v=r.type,l=c9(g.context,v);v=nq(g.ancestorInfo,v),l={context:l,ancestorInfo:v},g!==l&&(zr(Sw,r,r),zr(t1,l,r))}function Rr(r){Sw.current===r&&(Gr(t1,r),Gr(Sw,r)),f4.current===r&&(Gr(f4,r),Fb._currentValue=Yh)}function k(){}function n(){if(iw===0){KW=console.log,eW=console.info,$W=console.warn,UW=console.error,LW=console.group,FW=console.groupCollapsed,IW=console.groupEnd;var r={configurable:!0,enumerable:!0,value:k,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}iw++}function Pr(){if(iw--,iw===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:KW}),info:cr({},r,{value:eW}),warn:cr({},r,{value:$W}),error:cr({},r,{value:UW}),group:cr({},r,{value:LW}),groupCollapsed:cr({},r,{value:FW}),groupEnd:cr({},r,{value:IW})})}0>iw&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Kr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Xr(r){if(cO===void 0)try{throw Error()}catch(v){var g=v.stack.trim().match(/\n( *(at )?)/);cO=g&&g[1]||"",BW=-1<v.stack.indexOf(`
    at`)?" (<anonymous>)":-1<v.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cO+r+BW}function Sr(r,g){if(!r||jO)return"";var v=fO.get(r);if(v!==void 0)return v;jO=!0,v=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=S.H,S.H=null,n();try{var w={DetermineComponentFrameRoot:function(){try{if(g){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(wr){var x=wr}Reflect.construct(r,[],$)}else{try{$.call()}catch(wr){x=wr}r.call($.prototype)}}else{try{throw Error()}catch(wr){x=wr}($=r())&&typeof $.catch==="function"&&$.catch(function(){})}}catch(wr){if(wr&&x&&typeof wr.stack==="string")return[wr.stack,x.stack]}return[null,null]}};w.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(w.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(w.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var H=w.DetermineComponentFrameRoot(),q=H[0],R=H[1];if(q&&R){var X=q.split(`
`),I=R.split(`
`);for(H=b=0;b<X.length&&!X[b].includes("DetermineComponentFrameRoot");)b++;for(;H<I.length&&!I[H].includes("DetermineComponentFrameRoot");)H++;if(b===X.length||H===I.length)for(b=X.length-1,H=I.length-1;1<=b&&0<=H&&X[b]!==I[H];)H--;for(;1<=b&&0<=H;b--,H--)if(X[b]!==I[H]){if(b!==1||H!==1)do if(b--,H--,0>H||X[b]!==I[H]){var B=`
`+X[b].replace(" at new "," at ");return r.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",r.displayName)),typeof r==="function"&&fO.set(r,B),B}while(1<=b&&0<=H);break}}}finally{jO=!1,S.H=l,Pr(),Error.prepareStackTrace=v}return X=(X=r?r.displayName||r.name:"")?Xr(X):"",typeof r==="function"&&fO.set(r,X),X}function br(r,g){switch(r.tag){case 26:case 27:case 5:return Xr(r.type);case 16:return Xr("Lazy");case 13:return r.child!==g&&g!==null?Xr("Suspense Fallback"):Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 15:return Sr(r.type,!1);case 11:return Sr(r.type.render,!1);case 1:return Sr(r.type,!0);case 31:return Xr("Activity");default:return""}}function ir(r){try{var g="",v=null;do{g+=br(r,v);var l=r._debugInfo;if(l)for(var w=l.length-1;0<=w;w--){var b=l[w];if(typeof b.name==="string"){var H=g;r:{var{name:q,env:R,debugLocation:X}=b;if(X!=null){var I=Kr(X),B=I.lastIndexOf(`
`),$=B===-1?I:I.slice(B+1);if($.indexOf(q)!==-1){var x=`
`+$;break r}}x=Xr(q+(R?" ["+R+"]":""))}g=H+x}}v=r,r=r.return}while(r);return g}catch(wr){return`
Error generating stack: `+wr.message+`
`+wr.stack}}function pr(r){return(r=r?r.displayName||r.name:"")?Xr(r):""}function Yg(){if(Hv===null)return null;var r=Hv._debugOwner;return r!=null?c(r):null}function B0(){if(Hv===null)return"";var r=Hv;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Xr(r.type);break;case 13:g+=Xr("Suspense");break;case 19:g+=Xr("SuspenseList");break;case 31:g+=Xr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=pr(r.type));break;case 11:r._debugOwner||g!==""||(g+=pr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var v=r;r=v._debugOwner;var l=v._debugStack;if(r&&l){var w=Kr(l);w!==""&&(g+=`
`+w)}}else if(r.debugStack!=null){var b=r.debugStack;(r=r.owner)&&b&&(g+=`
`+Kr(b))}else break;var H=g}catch(q){H=`
Error generating stack: `+q.message+`
`+q.stack}return H}function ur(r,g,v,l,w,b,H){var q=Hv;_0(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,v,l,w,b,H)):g(v,l,w,b,H)}finally{_0(q)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _0(r){S.getCurrentStack=r===null?null:B0,eo=!1,Hv=r}function K0(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function s0(r){try{return cg(r),!1}catch(g){return!0}}function cg(r){return""+r}function Ag(r,g){if(s0(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,K0(r)),cg(r)}function d5(r,g){if(s0(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,K0(r)),cg(r)}function nr(r){if(s0(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",K0(r)),cg(r)}function xh(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{o5=g.inject(r),U0=g}catch(v){console.error("React instrumentation encountered an error: %o.",v)}return g.checkDCE?!0:!1}function Jg(r){if(typeof NK==="function"&&ZK(r),U0&&typeof U0.setStrictMode==="function")try{U0.setStrictMode(o5,r)}catch(g){$o||($o=!0,console.error("React instrumentation encountered an error: %o",g))}}function S2(r){return r>>>=0,r===0?32:31-(xK(r)/TK|0)|0}function ho(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Bl(r,g,v){var l=r.pendingLanes;if(l===0)return 0;var w=0,b=r.suspendedLanes,H=r.pingedLanes;r=r.warmLanes;var q=l&134217727;return q!==0?(l=q&~b,l!==0?w=ho(l):(H&=q,H!==0?w=ho(H):v||(v=q&~r,v!==0&&(w=ho(v))))):(q=l&~b,q!==0?w=ho(q):H!==0?w=ho(H):v||(v=l&~r,v!==0&&(w=ho(v)))),w===0?0:g!==0&&g!==w&&(g&b)===0&&(b=w&-w,v=g&-g,b>=v||b===32&&(v&4194048)!==0)?g:w}function Nl(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Tu(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Th(){var r=d4;return d4<<=1,(d4&62914560)===0&&(d4=4194304),r}function Ch(r){for(var g=[],v=0;31>v;v++)g.push(r);return g}function L1(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function i2(r,g,v,l,w,b){var H=r.pendingLanes;r.pendingLanes=v,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=v,r.entangledLanes&=v,r.errorRecoveryDisabledLanes&=v,r.shellSuspendCounter=0;var{entanglements:q,expirationTimes:R,hiddenUpdates:X}=r;for(v=H&~v;0<v;){var I=31-Z0(v),B=1<<I;q[I]=0,R[I]=-1;var $=X[I];if($!==null)for(X[I]=null,I=0;I<$.length;I++){var x=$[I];x!==null&&(x.lane&=-536870913)}v&=~B}l!==0&&Zl(r,l,0),b!==0&&w===0&&r.tag!==0&&(r.suspendedLanes|=b&~(H&~g))}function Zl(r,g,v){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-Z0(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|v&261930}function xl(r,g){var v=r.entangledLanes|=g;for(r=r.entanglements;v;){var l=31-Z0(v),w=1<<l;w&g|r[l]&g&&(r[l]|=g),v&=~w}}function Tl(r,g){var v=g&-g;return v=(v&42)!==0?1:Cl(v),(v&(r.suspendedLanes|g))!==0?0:v}function Cl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function s5(r,g,v){if(Uo)for(r=r.pendingUpdatersLaneMap;0<v;){var l=31-Z0(v),w=1<<l;r[l].add(g),v&=~w}}function F1(r,g){if(Uo)for(var{pendingUpdatersLaneMap:v,memoizedUpdaters:l}=r;0<g;){var w=31-Z0(g);r=1<<w,w=v[w],0<w.size&&(w.forEach(function(b){var H=b.alternate;H!==null&&l.has(H)||l.add(b)}),w.clear()),g&=~r}}function Y(r){return r&=-r,Pv!==0&&Pv<r?Vv!==0&&Vv<r?(r&134217727)!==0?Lo:s4:Vv:Pv}function Z(){var r=ug.p;if(r!==0)return r;return r=window.event,r===void 0?Lo:WW(r.type)}function gr(r,g){var v=ug.p;try{return ug.p=r,g()}finally{ug.p=v}}function Or(r){delete r[R0],delete r[x0],delete r[rH],delete r[CK],delete r[mK]}function Yr(r){var g=r[R0];if(g)return g;for(var v=r.parentNode;v;){if(g=v[E1]||v[R0]){if(v=g.alternate,g.child!==null||v!==null&&v.child!==null)for(r=gW(r);r!==null;){if(v=r[R0])return v;r=gW(r)}return g}r=v,v=r.parentNode}return null}function xr(r){if(r=r[R0]||r[E1]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Tr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function og(r){var g=r[NW];return g||(g=r[NW]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function $r(r){r[kw]=!0}function e0(r,g){rv(r,g),rv(r+"Capture",g)}function rv(r,g){al[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),al[r]=g;var v=r.toLowerCase();gH[v]=r,r==="onDoubleClick"&&(gH.ondblclick=r);for(r=0;r<g.length;r++)ZW.add(g[r])}function I1(r,g){SK[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function rw(r){if(tv.call(TW,r))return!0;if(tv.call(xW,r))return!1;if(iK.test(r))return TW[r]=!0;return xW[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function $q(r,g,v){if(rw(g)){if(!r.hasAttribute(g)){switch(typeof v){case"symbol":case"object":return v;case"function":return v;case"boolean":if(v===!1)return v}return v===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&v===!0)return!0;return Ag(v,g),r===""+v?v:r}}function k2(r,g,v){if(rw(g))if(v===null)r.removeAttribute(g);else{switch(typeof v){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}Ag(v,g),r.setAttribute(g,""+v)}}function n2(r,g,v){if(v===null)r.removeAttribute(g);else{switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}Ag(v,g),r.setAttribute(g,""+v)}}function to(r,g,v,l){if(l===null)r.removeAttribute(v);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(v);return}Ag(l,v),r.setAttributeNS(g,v,""+l)}}function zv(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return nr(r),r;default:return""}}function Uq(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function TQ(r,g,v){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:w,set:b}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return w.call(this)},set:function(H){nr(H),v=""+H,b.call(this,H)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return v},setValue:function(H){nr(H),v=""+H},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function Cu(r){if(!r._valueTracker){var g=Uq(r)?"checked":"value";r._valueTracker=TQ(r,g,""+r[g])}}function Lq(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var v=g.getValue(),l="";return r&&(l=Uq(r)?r.checked?"true":"false":r.value),r=l,r!==v?(g.setValue(r),!0):!1}function D2(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function Kv(r){return r.replace(kK,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function Fq(r,g){g.checked===void 0||g.defaultChecked===void 0||mW||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Yg()||"A component",g.type),mW=!0),g.value===void 0||g.defaultValue===void 0||CW||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Yg()||"A component",g.type),CW=!0)}function mu(r,g,v,l,w,b,H,q){if(r.name="",H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"?(Ag(H,"type"),r.type=H):r.removeAttribute("type"),g!=null)if(H==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+zv(g)}else r.value!==""+zv(g)&&(r.value=""+zv(g));else H!=="submit"&&H!=="reset"||r.removeAttribute("value");g!=null?Su(r,H,zv(g)):v!=null?Su(r,H,zv(v)):l!=null&&r.removeAttribute("value"),w==null&&b!=null&&(r.defaultChecked=!!b),w!=null&&(r.checked=w&&typeof w!=="function"&&typeof w!=="symbol"),q!=null&&typeof q!=="function"&&typeof q!=="symbol"&&typeof q!=="boolean"?(Ag(q,"name"),r.name=""+zv(q)):r.removeAttribute("name")}function Iq(r,g,v,l,w,b,H,q){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Ag(b,"type"),r.type=b),g!=null||v!=null){if(!(b!=="submit"&&b!=="reset"||g!==void 0&&g!==null)){Cu(r);return}v=v!=null?""+zv(v):"",g=g!=null?""+zv(g):v,q||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:w,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=q?r.checked:!!l,r.defaultChecked=!!l,H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&typeof H!=="boolean"&&(Ag(H,"name"),r.name=H),Cu(r)}function Su(r,g,v){g==="number"&&D2(r.ownerDocument)===r||r.defaultValue===""+v||(r.defaultValue=""+v)}function Bq(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?i5.Children.forEach(g.children,function(v){v==null||typeof v==="string"||typeof v==="number"||typeof v==="bigint"||iW||(iW=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||kW||(kW=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||SW||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),SW=!0)}function Nq(){var r=Yg();return r?`

Check the render method of \``+r+"`.":""}function mh(r,g,v,l){if(r=r.options,g){g={};for(var w=0;w<v.length;w++)g["$"+v[w]]=!0;for(v=0;v<r.length;v++)w=g.hasOwnProperty("$"+r[v].value),r[v].selected!==w&&(r[v].selected=w),w&&l&&(r[v].defaultSelected=!0)}else{v=""+zv(v),g=null;for(w=0;w<r.length;w++){if(r[w].value===v){r[w].selected=!0,l&&(r[w].defaultSelected=!0);return}g!==null||r[w].disabled||(g=r[w])}g!==null&&(g.selected=!0)}}function Zq(r,g){for(r=0;r<DW.length;r++){var v=DW[r];if(g[v]!=null){var l=v0(g[v]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",v,Nq()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",v,Nq())}}g.value===void 0||g.defaultValue===void 0||nW||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),nW=!0)}function xq(r,g){g.value===void 0||g.defaultValue===void 0||tW||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Yg()||"A component"),tW=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function Tq(r,g,v){if(g!=null&&(g=""+zv(g),g!==r.value&&(r.value=g),v==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=v!=null?""+zv(v):""}function Cq(r,g,v,l){if(g==null){if(l!=null){if(v!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(v0(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}v=l}v==null&&(v=""),g=v}v=zv(g),r.defaultValue=v,l=r.textContent,l===v&&l!==""&&l!==null&&(r.value=l),Cu(r)}function mq(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?mq(r.children[0],g):r}function gv(r){return"  "+"  ".repeat(r)}function Sh(r){return"+ "+"  ".repeat(r)}function ml(r){return"- "+"  ".repeat(r)}function Sq(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function gw(r,g){return VW.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function t2(r,g,v){var l=120-2*v;if(g===null)return Sh(v)+gw(r,l)+`
`;if(typeof g==="string"){for(var w=0;w<g.length&&w<r.length&&g.charCodeAt(w)===r.charCodeAt(w);w++);return w>l-8&&10<w&&(r="..."+r.slice(w-8),g="..."+g.slice(w-8)),Sh(v)+gw(r,l)+`
`+ml(v)+gw(g,l)+`
`}return gv(v)+gw(r,l)+`
`}function iu(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,v){return v})}function vw(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(v0(r))return"[...]";if(r.$$typeof===zo)return(g=V(r.type))?"<"+g+">":"<...>";var v=iu(r);if(v==="Object"){v="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var w=JSON.stringify(l);if(w!=='"'+l+'"'&&(l=w),g-=l.length-2,w=vw(r[l],15>g?g:15),g-=w.length,0>g){v+=v===""?"...":", ...";break}v+=(v===""?"":",")+l+":"+w}return"{"+v+"}"}return v;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function ih(r,g){return typeof r!=="string"||VW.test(r)?"{"+vw(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function ku(r,g,v){var l=120-v.length-r.length,w=[],b;for(b in g)if(g.hasOwnProperty(b)&&b!=="children"){var H=ih(g[b],120-v.length-b.length-1);l-=b.length+H.length+2,w.push(b+"="+H)}return w.length===0?v+"<"+r+`>
`:0<l?v+"<"+r+" "+w.join(" ")+`>
`:v+"<"+r+`
`+v+"  "+w.join(`
`+v+"  ")+`
`+v+`>
`}function CQ(r,g,v){var l="",w=cr({},g),b;for(b in r)if(r.hasOwnProperty(b)){delete w[b];var H=120-2*v-b.length-2,q=vw(r[b],H);g.hasOwnProperty(b)?(H=vw(g[b],H),l+=Sh(v)+b+": "+q+`
`,l+=ml(v)+b+": "+H+`
`):l+=Sh(v)+b+": "+q+`
`}for(var R in w)w.hasOwnProperty(R)&&(r=vw(w[R],120-2*v-R.length-2),l+=ml(v)+R+": "+r+`
`);return l}function mQ(r,g,v,l){var w="",b=new Map;for(X in v)v.hasOwnProperty(X)&&b.set(X.toLowerCase(),X);if(b.size===1&&b.has("children"))w+=ku(r,g,gv(l));else{for(var H in g)if(g.hasOwnProperty(H)&&H!=="children"){var q=120-2*(l+1)-H.length-1,R=b.get(H.toLowerCase());if(R!==void 0){b.delete(H.toLowerCase());var X=g[H];R=v[R];var I=ih(X,q);q=ih(R,q),typeof X==="object"&&X!==null&&typeof R==="object"&&R!==null&&iu(X)==="Object"&&iu(R)==="Object"&&(2<Object.keys(X).length||2<Object.keys(R).length||-1<I.indexOf("...")||-1<q.indexOf("..."))?w+=gv(l+1)+H+`={{
`+CQ(X,R,l+2)+gv(l+1)+`}}
`:(w+=Sh(l+1)+H+"="+I+`
`,w+=ml(l+1)+H+"="+q+`
`)}else w+=gv(l+1)+H+"="+ih(g[H],q)+`
`}b.forEach(function(B){if(B!=="children"){var $=120-2*(l+1)-B.length-1;w+=ml(l+1)+B+"="+ih(v[B],$)+`
`}}),w=w===""?gv(l)+"<"+r+`>
`:gv(l)+"<"+r+`
`+w+gv(l)+`>
`}if(r=v.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(b="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=""+g;w+=t2(b,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")w=r==null?w+t2(""+g,null,l+1):w+t2(""+g,void 0,l+1);return w}function iq(r,g){var v=Sq(r);if(v===null){v="";for(r=r.child;r;)v+=iq(r,g),r=r.sibling;return v}return gv(g)+"<"+v+`>
`}function nu(r,g){var v=mq(r,g);if(v!==r&&(r.children.length!==1||r.children[0]!==v))return gv(g)+`...
`+nu(v,g+1);v="";var l=r.fiber._debugInfo;if(l)for(var w=0;w<l.length;w++){var b=l[w].name;typeof b==="string"&&(v+=gv(g)+"<"+b+`>
`,g++)}if(l="",w=r.fiber.pendingProps,r.fiber.tag===6)l=t2(w,r.serverProps,g),g++;else if(b=Sq(r.fiber),b!==null)if(r.serverProps===void 0){l=g;var H=120-2*l-b.length-2,q="";for(X in w)if(w.hasOwnProperty(X)&&X!=="children"){var R=ih(w[X],15);if(H-=X.length+R.length+2,0>H){q+=" ...";break}q+=" "+X+"="+R}l=gv(l)+"<"+b+q+`>
`,g++}else r.serverProps===null?(l=ku(b,w,Sh(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=mQ(b,w,r.serverProps,g),g++);var X="";w=r.fiber.child;for(b=0;w&&b<r.children.length;)H=r.children[b],H.fiber===w?(X+=nu(H,g),b++):X+=iq(w,g),w=w.sibling;w&&0<r.children.length&&(X+=gv(g)+`...
`),w=r.serverTail,r.serverProps===null&&g--;for(r=0;r<w.length;r++)b=w[r],X=typeof b==="string"?X+(ml(g)+gw(b,120-2*g)+`
`):X+ku(b.type,b.props,ml(g));return v+l+X}function Du(r){try{return`

`+nu(r,0)}catch(g){return""}}function kq(r,g,v){for(var l=g,w=null,b=0;l;)l===r&&(b=0),w={fiber:l,children:w!==null?[w]:[],serverProps:l===g?v:l===r?null:void 0,serverTail:[],distanceFromLeaf:b},b++,l=l.return;return w!==null?Du(w).replaceAll(/^[+-]/gm,">"):""}function nq(r,g){var v=cr({},r||EW),l={tag:g};if(_W.indexOf(g)!==-1&&(v.aTagInScope=null,v.buttonTagInScope=null,v.nobrTagInScope=null),DK.indexOf(g)!==-1&&(v.pTagInButtonScope=null),nK.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(v.listItemTagAutoclosing=null,v.dlItemTagAutoclosing=null),v.current=l,g==="form"&&(v.formTag=l),g==="a"&&(v.aTagInScope=l),g==="button"&&(v.buttonTagInScope=l),g==="nobr"&&(v.nobrTagInScope=l),g==="p"&&(v.pTagInButtonScope=l),g==="li"&&(v.listItemTagAutoclosing=l),g==="dd"||g==="dt")v.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?v.containerTagInScope=null:v.containerTagInScope||(v.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?v.implicitRootScope===!0&&(v.implicitRootScope=!1):v.implicitRootScope=!0,v}function Dq(r,g,v){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(v)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!v)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return tK.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return v||g===null;case"html":return v&&g==="#document"||g===null;case"body":return v&&(g==="#document"||g==="html")||g===null}return!0}function SQ(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function tq(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function tu(r,g){g=g||EW;var v=g.current;if(g=(v=Dq(r,v&&v.tag,g.implicitRootScope)?null:v)?null:SQ(r,g),g=v||g,!g)return!0;var l=g.tag;if(g=String(!!v)+"|"+r+"|"+l,r6[g])return!1;r6[g]=!0;var w=(g=Hv)?tq(g.return,l):null,b=g!==null&&w!==null?kq(w,g,null):"",H="<"+r+">";return v?(v="",l==="table"&&r==="tr"&&(v+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,H,l,v,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,H,l,b),g&&(r=g.return,w===null||r===null||w===r&&r._debugOwner===g._debugOwner||ur(w,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,H)})),!1}function V2(r,g,v){if(v||Dq("#text",g,!1))return!0;if(v="#text|"+g,r6[v])return!1;r6[v]=!0;var l=(v=Hv)?tq(v,g):null;return v=v!==null&&l!==null?kq(l,v,v.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,v):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,v),!1}function ow(r,g){if(g){var v=r.firstChild;if(v&&v===r.lastChild&&v.nodeType===3){v.nodeValue=g;return}}r.textContent=g}function iQ(r){return r.replace(EK,function(g,v){return v.toUpperCase()})}function Vq(r,g,v){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,iQ(g.replace(_K,"ms-")))):VK.test(g)?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!jW.test(v)||oH.hasOwnProperty(v)&&oH[v]||(oH[v]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,v.replace(jW,""))),typeof v==="number"&&(isNaN(v)?fW||(fW=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(v)||pW||(pW=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),v==null||typeof v==="boolean"||v===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,v):typeof v!=="number"||v===0||aW.has(g)?g==="float"?r.cssFloat=v:(d5(v,g),r[g]=(""+v).trim()):r[g]=v+"px"}function _q(r,g,v){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,v!=null){if(g){var l={};if(v){for(var w in v)if(v.hasOwnProperty(w)&&!g.hasOwnProperty(w))for(var b=vH[w]||[w],H=0;H<b.length;H++)l[b[H]]=w}for(var q in g)if(g.hasOwnProperty(q)&&(!v||v[q]!==g[q]))for(w=vH[q]||[q],b=0;b<w.length;b++)l[w[b]]=q;q={};for(var R in g)for(w=vH[R]||[R],b=0;b<w.length;b++)q[w[b]]=R;R={};for(var X in l)if(w=l[X],(b=q[X])&&w!==b&&(H=w+","+b,!R[H])){R[H]=!0,H=console;var I=g[w];H.error.call(H,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",I==null||typeof I==="boolean"||I===""?"Removing":"Updating",w,b)}}for(var B in v)!v.hasOwnProperty(B)||g!=null&&g.hasOwnProperty(B)||(B.indexOf("--")===0?r.setProperty(B,""):B==="float"?r.cssFloat="":r[B]="");for(var $ in g)X=g[$],g.hasOwnProperty($)&&v[$]!==X&&Vq(r,$,X)}else for(l in g)g.hasOwnProperty(l)&&Vq(r,l,g[l])}function lw(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Eq(r){return yK.get(r)||r}function kQ(r,g){if(tv.call(w5,g)&&w5[g])return!0;if(jK.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),w5[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),w5[g]=!0}if(cK.test(g)){if(r=g.toLowerCase(),r=dW.hasOwnProperty(r)?r:null,r==null)return w5[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),w5[g]=!0)}return!0}function nQ(r,g){var v=[],l;for(l in g)kQ(r,l)||v.push(l);g=v.map(function(w){return"`"+w+"`"}).join(", "),v.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<v.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function DQ(r,g,v,l){if(tv.call(T0,g)&&T0[g])return!0;var w=g.toLowerCase();if(w==="onfocusin"||w==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),T0[g]=!0;if(typeof v==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(w)?r[w]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),T0[g]=!0;if(r7.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),T0[g]=!0}else if(r7.test(g))return fK.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),T0[g]=!0;if(pK.test(g)||aK.test(g))return!0;if(w==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),T0[g]=!0;if(w==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),T0[g]=!0;if(w==="is"&&v!==null&&v!==void 0&&typeof v!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof v),T0[g]=!0;if(typeof v==="number"&&isNaN(v))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),T0[g]=!0;if(v6.hasOwnProperty(w)){if(w=v6[w],w!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,w),T0[g]=!0}else if(g!==w)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,w),T0[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof v){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(w=g.toLowerCase().slice(0,5),w==="data-"||w==="aria-")return!0;return v?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',v,g,g,v,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',v,g,g,v,g,g,g),T0[g]=!0}case"function":case"symbol":return T0[g]=!0,!1;case"string":if(v==="false"||v==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",v,g,v==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,v),T0[g]=!0}}return!0}function tQ(r,g,v){var l=[],w;for(w in g)DQ(r,w,g[w],v)||l.push(w);g=l.map(function(b){return"`"+b+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function hw(r){return dK.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function Vo(){}function Vu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function yq(r){var g=xr(r);if(g&&(r=g.stateNode)){var v=r[x0]||null;r:switch(r=g.stateNode,g.type){case"input":if(mu(r,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name),g=v.name,v.type==="radio"&&g!=null){for(v=r;v.parentNode;)v=v.parentNode;Ag(g,"name"),v=v.querySelectorAll('input[name="'+Kv(""+g)+'"][type="radio"]');for(g=0;g<v.length;g++){var l=v[g];if(l!==r&&l.form===r.form){var w=l[x0]||null;if(!w)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");mu(l,w.value,w.defaultValue,w.defaultValue,w.checked,w.defaultChecked,w.type,w.name)}}for(g=0;g<v.length;g++)l=v[g],l.form===r.form&&Lq(l)}break r;case"textarea":Tq(r,v.value,v.defaultValue);break r;case"select":g=v.value,g!=null&&mh(r,!!v.multiple,g,!1)}}}function cq(r,g,v){if(lH)return r(g,v);lH=!0;try{var l=r(g);return l}finally{if(lH=!1,b5!==null||u5!==null){if(jh(),b5&&(g=b5,r=u5,u5=b5=null,yq(g),r))for(g=0;g<r.length;g++)yq(r[g])}}}function ww(r,g){var v=r.stateNode;if(v===null)return null;var l=v[x0]||null;if(l===null)return null;v=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(v&&typeof v!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof v+"` type.");return v}function jq(){if(o6)return o6;var r,g=wH,v=g.length,l,w="value"in y1?y1.value:y1.textContent,b=w.length;for(r=0;r<v&&g[r]===w[r];r++);var H=v-r;for(l=1;l<=H&&g[v-l]===w[b-l];l++);return o6=w.slice(r,1<l?1-l:void 0)}function _2(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function E2(){return!0}function fq(){return!1}function E0(r){function g(v,l,w,b,H){this._reactName=v,this._targetInst=w,this.type=l,this.nativeEvent=b,this.target=H,this.currentTarget=null;for(var q in r)r.hasOwnProperty(q)&&(v=r[q],this[q]=v?v(b):b[q]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?E2:fq,this.isPropagationStopped=fq,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var v=this.nativeEvent;v&&(v.preventDefault?v.preventDefault():typeof v.returnValue!=="unknown"&&(v.returnValue=!1),this.isDefaultPrevented=E2)},stopPropagation:function(){var v=this.nativeEvent;v&&(v.stopPropagation?v.stopPropagation():typeof v.cancelBubble!=="unknown"&&(v.cancelBubble=!0),this.isPropagationStopped=E2)},persist:function(){},isPersistent:E2}),g}function VQ(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=Pe[r])?!!g[r]:!1}function _u(){return VQ}function pq(r,g){switch(r){case"keyup":return Ke.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==l7;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aq(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function _Q(r,g){switch(r){case"compositionend":return aq(g);case"keypress":if(g.which!==w7)return null;return u7=!0,b7;case"textInput":return r=g.data,r===b7&&u7?null:r;default:return null}}function EQ(r,g){if(O5)return r==="compositionend"||!HH&&pq(r,g)?(r=jq(),o6=wH=y1=null,O5=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return h7&&g.locale!=="ko"?null:g.data;default:return null}}function dq(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!$e[r.type]:g==="textarea"?!0:!1}function yQ(r){if(!Fo)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function sq(r,g,v,l){b5?u5?u5.push(l):u5=[l]:b5=l,g=S4(g,"onChange"),0<g.length&&(v=new l6("onChange","change",null,v,l),r.push({event:v,listeners:g}))}function cQ(r){C9(r,0)}function y2(r){var g=Tr(r);if(Lq(g))return r}function rA(r,g){if(r==="change")return g}function gA(){Ew&&(Ew.detachEvent("onpropertychange",vA),yw=Ew=null)}function vA(r){if(r.propertyName==="value"&&y2(yw)){var g=[];sq(g,yw,r,Vu(r)),cq(cQ,g)}}function jQ(r,g,v){r==="focusin"?(gA(),Ew=g,yw=v,Ew.attachEvent("onpropertychange",vA)):r==="focusout"&&gA()}function fQ(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return y2(yw)}function pQ(r,g){if(r==="click")return y2(g)}function aQ(r,g){if(r==="input"||r==="change")return y2(g)}function dQ(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function bw(r,g){if(C0(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var v=Object.keys(r),l=Object.keys(g);if(v.length!==l.length)return!1;for(l=0;l<v.length;l++){var w=v[l];if(!tv.call(g,w)||!C0(r[w],g[w]))return!1}return!0}function oA(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lA(r,g){var v=oA(r);r=0;for(var l;v;){if(v.nodeType===3){if(l=r+v.textContent.length,r<=g&&l>=g)return{node:v,offset:g-r};r=l}r:{for(;v;){if(v.nextSibling){v=v.nextSibling;break r}v=v.parentNode}v=void 0}v=oA(v)}}function hA(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?hA(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function wA(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=D2(r.document);g instanceof r.HTMLIFrameElement;){try{var v=typeof g.contentWindow.location.href==="string"}catch(l){v=!1}if(v)r=g.contentWindow;else break;g=D2(r.document)}return g}function Eu(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function bA(r,g,v){var l=v.window===v?v.document:v.nodeType===9?v:v.ownerDocument;qH||H5==null||H5!==D2(l)||(l=H5,("selectionStart"in l)&&Eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cw&&bw(cw,l)||(cw=l,l=S4(PH,"onSelect"),0<l.length&&(g=new l6("onSelect","select",null,g,v),r.push({event:g,listeners:l}),g.target=H5)))}function Sl(r,g){var v={};return v[r.toLowerCase()]=g.toLowerCase(),v["Webkit"+r]="webkit"+g,v["Moz"+r]="moz"+g,v}function il(r){if(AH[r])return AH[r];if(!P5[r])return r;var g=P5[r],v;for(v in g)if(g.hasOwnProperty(v)&&v in H7)return AH[r]=g[v];return r}function kv(r,g){W7.set(r,g),e0(g,[r])}function sQ(r){for(var g=w6,v=0;v<r.length;v++){var l=r[v];if(typeof l==="object"&&l!==null)if(v0(l)&&l.length===2&&typeof l[0]==="string"){if(g!==w6&&g!==XH)return RH;g=XH}else return RH;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==w6&&g!==GH)return RH;g=GH}}return g}function yu(r,g,v,l){for(var w in r)tv.call(r,w)&&w[0]!=="_"&&wo(w,r[w],g,v,l)}function wo(r,g,v,l,w){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===zo){var b=V(g.type)||"…",H=g.key;g=g.props;var q=Object.keys(g),R=q.length;if(H==null&&R===0){g="<"+b+" />";break}if(3>l||R===1&&q[0]==="children"&&H==null){g="<"+b+" … />";break}v.push([w+"  ".repeat(l)+r,"<"+b]),H!==null&&wo("key",H,v,l+1,w),r=!1;for(var X in g)X==="children"?g.children!=null&&(!v0(g.children)||0<g.children.length)&&(r=!0):tv.call(g,X)&&X[0]!=="_"&&wo(X,g[X],v,l+1,w);v.push(["",r?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(g),b=b.slice(8,b.length-1),b==="Array"){if(X=sQ(g),X===GH||X===w6){g=JSON.stringify(g);break}else if(X===XH){v.push([w+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)b=g[r],wo(b[0],b[1],v,l+1,w);return}}if(b==="Promise"){if(g.status==="fulfilled"){if(b=v.length,wo(r,g.value,v,l,w),v.length>b){v=v[b],v[1]="Promise<"+(v[1]||"Object")+">";return}}else if(g.status==="rejected"&&(b=v.length,wo(r,g.reason,v,l,w),v.length>b)){v=v[b],v[1]="Rejected Promise<"+v[1]+">";return}v.push(["  ".repeat(l)+r,"Promise"]);return}b==="Object"&&(X=Object.getPrototypeOf(g))&&typeof X.constructor==="function"&&(b=X.constructor.name),v.push([w+"  ".repeat(l)+r,b==="Object"?3>l?"":"…":b]),3>l&&yu(g,v,l+1,w);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===Ze?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}v.push([w+"  ".repeat(l)+r,g])}function uA(r,g,v,l){var w=!0;for(H in r)H in g||(v.push([b6+"  ".repeat(l)+H,"…"]),w=!1);for(var b in g)if(b in r){var H=r[b],q=g[b];if(H!==q){if(l===0&&b==="children")w="  ".repeat(l)+b,v.push([b6+w,"…"],[u6+w,"…"]);else{if(!(3<=l)){if(typeof H==="object"&&typeof q==="object"&&H!==null&&q!==null&&H.$$typeof===q.$$typeof)if(q.$$typeof===zo){if(H.type===q.type&&H.key===q.key){H=V(q.type)||"…",w="  ".repeat(l)+b,H="<"+H+" … />",v.push([b6+w,H],[u6+w,H]),w=!1;continue}}else{var R=Object.prototype.toString.call(H),X=Object.prototype.toString.call(q);if(R===X&&(X==="[object Object]"||X==="[object Array]")){R=[X7+"  ".repeat(l)+b,X==="[object Array]"?"Array":""],v.push(R),X=v.length,uA(H,q,v,l+1)?X===v.length&&(R[1]="Referentially unequal but deeply equal objects. Consider memoization."):w=!1;continue}}else if(typeof H==="function"&&typeof q==="function"&&H.name===q.name&&H.length===q.length&&(R=Function.prototype.toString.call(H),X=Function.prototype.toString.call(q),R===X)){H=q.name===""?"() => {}":q.name+"() {}",v.push([X7+"  ".repeat(l)+b,H+" Referentially unequal function closure. Consider memoization."]);continue}}wo(b,H,v,l,b6),wo(b,q,v,l,u6)}w=!1}}else v.push([u6+"  ".repeat(l)+b,"…"]),w=!1;return w}function vv(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function bo(r,g,v,l){$g&&(j1.start=g,j1.end=v,so.color="warning",so.tooltipText=l,so.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,j1)):performance.measure(l,j1))}function c2(r,g,v){bo(r,g,v,"Reconnect")}function j2(r,g,v,l,w){var b=i(r);if(b!==null&&$g){var{alternate:H,actualDuration:q}=r;if(H===null||H.child!==r.child)for(var R=r.child;R!==null;R=R.sibling)q-=R.actualDuration;l=0.5>q?l?"tertiary-light":"primary-light":10>q?l?"tertiary":"primary":100>q?l?"tertiary-dark":"primary-dark":"error";var X=r.memoizedProps;q=r._debugTask,X!==null&&H!==null&&H.memoizedProps!==X?(R=[xe],X=uA(H.memoizedProps,X,R,0),1<R.length&&(X&&!c1&&(H.lanes&w)===0&&100<r.actualDuration?(c1=!0,R[0]=Te,so.color="warning",so.tooltipText=Y7):(so.color=l,so.tooltipText=b),so.properties=R,j1.start=g,j1.end=v,q!=null?q.run(performance.measure.bind(performance,"​"+b,j1)):performance.measure("​"+b,j1))):q!=null?q.run(console.timeStamp.bind(console,b,g,v,$v,void 0,l)):console.timeStamp(b,g,v,$v,void 0,l)}}function cu(r,g,v,l){if($g){var w=i(r);if(w!==null){for(var b=null,H=[],q=0;q<l.length;q++){var R=l[q];b==null&&R.source!==null&&(b=R.source._debugTask),R=R.value,H.push(["Error",typeof R==="object"&&R!==null&&typeof R.message==="string"?String(R.message):String(R)])}r.key!==null&&wo("key",r.key,H,0,""),r.memoizedProps!==null&&yu(r.memoizedProps,H,0,""),b==null&&(b=r._debugTask),r={start:g,end:v,detail:{devtools:{color:"error",track:$v,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:H}}},b?b.run(performance.measure.bind(performance,"​"+w,r)):performance.measure("​"+w,r)}}}function uo(r,g,v,l,w){if(w!==null){if($g){var b=i(r);if(b!==null){l=[];for(var H=0;H<w.length;H++){var q=w[H].value;l.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r.key!==null&&wo("key",r.key,l,0,""),r.memoizedProps!==null&&yu(r.memoizedProps,l,0,""),g={start:g,end:v,detail:{devtools:{color:"error",track:$v,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+b,g)):performance.measure("​"+b,g)}}}else b=i(r),b!==null&&$g&&(w=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,b,g,v,$v,void 0,w)):console.timeStamp(b,g,v,$v,void 0,w))}function rz(r,g,v,l){if($g&&!(g<=r)){var w=(v&738197653)===v?"tertiary-dark":"primary-dark";v=(v&536870912)===v?"Prepared":(v&201326741)===v?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,v,r,g,fr,jr,w)):console.timeStamp(v,r,g,fr,jr,w)}}function OA(r,g,v,l){!$g||g<=r||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,jr,v)):console.timeStamp("Prewarm",r,g,fr,jr,v))}function HA(r,g,v,l){!$g||g<=r||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,jr,v)):console.timeStamp("Suspended",r,g,fr,jr,v))}function gz(r,g,v,l,w,b){if($g&&!(g<=r)){v=[];for(var H=0;H<l.length;H++){var q=l[H].value;v.push(["Recoverable Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:jr,tooltipText:w?"Hydration Failed":"Recovered after Error",properties:v}}},b?b.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function ju(r,g,v,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,jr,"error")):console.timeStamp("Errored",r,g,fr,jr,"error"))}function vz(r,g,v,l){!$g||g<=r||(l?l.run(console.timeStamp.bind(console,v,r,g,fr,jr,"secondary-light")):console.timeStamp(v,r,g,fr,jr,"secondary-light"))}function PA(r,g,v,l,w){if($g&&!(g<=r)){for(var b=[],H=0;H<v.length;H++){var q=v[H].value;b.push(["Error",typeof q==="object"&&q!==null&&typeof q.message==="string"?String(q.message):String(q)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:jr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:b}}},w?w.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function uw(r,g,v){!$g||g<=r||(v?v.run(console.timeStamp.bind(console,"Animating",r,g,fr,jr,"secondary-dark")):console.timeStamp("Animating",r,g,fr,jr,"secondary-dark"))}function f2(){for(var r=q5,g=YH=q5=0;g<r;){var v=Uv[g];Uv[g++]=null;var l=Uv[g];Uv[g++]=null;var w=Uv[g];Uv[g++]=null;var b=Uv[g];if(Uv[g++]=null,l!==null&&w!==null){var H=l.pending;H===null?w.next=w:(w.next=H.next,H.next=w),l.pending=w}b!==0&&qA(v,w,b)}}function p2(r,g,v,l){Uv[q5++]=r,Uv[q5++]=g,Uv[q5++]=v,Uv[q5++]=l,YH|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function fu(r,g,v,l){return p2(r,g,v,l),a2(r)}function $0(r,g){return p2(r,null,null,g),a2(r)}function qA(r,g,v){r.lanes|=v;var l=r.alternate;l!==null&&(l.lanes|=v);for(var w=!1,b=r.return;b!==null;)b.childLanes|=v,l=b.alternate,l!==null&&(l.childLanes|=v),b.tag===22&&(r=b.stateNode,r===null||r._visibility&jw||(w=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,w&&g!==null&&(w=31-Z0(v),r=b.hiddenUpdates,l=r[w],l===null?r[w]=[g]:l.push(g),g.lane=v|536870912),b):null}function a2(r){if(Qb>fe)throw Ah=Qb=0,zb=dH=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Ah>pe&&(Ah=0,zb=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&F9(r);for(var g=r,v=g.return;v!==null;)g.alternate===null&&(g.flags&4098)!==0&&F9(r),g=v,v=g.return;return g.tag===3?g.stateNode:null}function kl(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r:g.current}function pu(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=kl(r.render),r.render!==g)?(g={$$typeof:mw,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function AA(r,g){if(Lv===null)return!1;var v=r.elementType;g=g.type;var l=!1,w=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:w===Ov&&(l=!0);break;case 11:w===mw?l=!0:w===Ov&&(l=!0);break;case 14:case 15:w===j4?l=!0:w===Ov&&(l=!0);break;default:return!1}return l&&(r=Lv(v),r!==void 0&&r===Lv(g))?!0:!1}function MA(r){Lv!==null&&typeof WeakSet==="function"&&(A5===null&&(A5=new WeakSet),A5.add(r))}function WA(r,g,v){do{var l=r,w=l.alternate,b=l.child,H=l.sibling,q=l.tag;l=l.type;var R=null;switch(q){case 0:case 15:case 1:R=l;break;case 11:R=l.render}if(Lv===null)throw Error("Expected resolveFamily to be set during hot reload.");var X=!1;if(l=!1,R!==null&&(R=Lv(R),R!==void 0&&(v.has(R)?l=!0:g.has(R)&&(q===1?l=!0:X=!0))),A5!==null&&(A5.has(r)||w!==null&&A5.has(w))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||X)w=$0(r,2),w!==null&&Tg(w,r,2);if(b===null||l||WA(b,g,v),H===null)break;r=H}while(1)}function oz(r,g,v,l){this.tag=r,this.key=v,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,J7||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function au(r){return r=r.prototype,!(!r||!r.isReactComponent)}function _o(r,g){var v=r.alternate;switch(v===null?(v=K(r.tag,g,r.key,r.mode),v.elementType=r.elementType,v.type=r.type,v.stateNode=r.stateNode,v._debugOwner=r._debugOwner,v._debugStack=r._debugStack,v._debugTask=r._debugTask,v._debugHookTypes=r._debugHookTypes,v.alternate=r,r.alternate=v):(v.pendingProps=g,v.type=r.type,v.flags=0,v.subtreeFlags=0,v.deletions=null,v.actualDuration=-0,v.actualStartTime=-1.1),v.flags=r.flags&65011712,v.childLanes=r.childLanes,v.lanes=r.lanes,v.child=r.child,v.memoizedProps=r.memoizedProps,v.memoizedState=r.memoizedState,v.updateQueue=r.updateQueue,g=r.dependencies,v.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},v.sibling=r.sibling,v.index=r.index,v.ref=r.ref,v.refCleanup=r.refCleanup,v.selfBaseDuration=r.selfBaseDuration,v.treeBaseDuration=r.treeBaseDuration,v._debugInfo=r._debugInfo,v._debugNeedsRemount=r._debugNeedsRemount,v.tag){case 0:case 15:v.type=kl(r.type);break;case 1:v.type=kl(r.type);break;case 11:v.type=pu(r.type)}return v}function RA(r,g){r.flags&=65011714;var v=r.alternate;return v===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=v.childLanes,r.lanes=v.lanes,r.child=v.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=v.memoizedProps,r.memoizedState=v.memoizedState,r.updateQueue=v.updateQueue,r.type=v.type,g=v.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=v.selfBaseDuration,r.treeBaseDuration=v.treeBaseDuration),r}function du(r,g,v,l,w,b){var H=0,q=r;if(typeof r==="function")au(r)&&(H=1),q=kl(q);else if(typeof r==="string")H=hr(),H=qK(r,v,H)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case _O:return g=K(31,v,g,w),g.elementType=_O,g.lanes=b,g;case g5:return nl(v.children,w,b,g);case c4:H=8,w|=L0,w|=_v;break;case nO:return r=v,l=w,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=K(12,r,g,l|Dr),g.elementType=nO,g.lanes=b,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case tO:return g=K(13,v,g,w),g.elementType=tO,g.lanes=b,g;case VO:return g=K(19,v,g,w),g.elementType=VO,g.lanes=b,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Ko:H=10;break r;case DO:H=9;break r;case mw:H=11,q=pu(q);break r;case j4:H=14;break r;case Ov:H=16,q=null;break r}if(q="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)q+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?v="null":v0(r)?v="array":r!==void 0&&r.$$typeof===zo?(v="<"+(V(r.type)||"Unknown")+" />",q=" Did you accidentally export a JSX literal instead of a component?"):v=typeof r,(H=l?c(l):null)&&(q+=`

Check the render method of \``+H+"`."),H=29,v=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(v+"."+q)),q=null}return g=K(H,v,g,w),g.elementType=r,g.type=q,g.lanes=b,g._debugOwner=l,g}function d2(r,g,v){return g=du(r.type,r.key,r.props,r._owner,g,v),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function nl(r,g,v,l){return r=K(7,r,l,g),r.lanes=v,r}function su(r,g,v){return r=K(6,r,null,g),r.lanes=v,r}function GA(r){var g=K(18,null,null,Fr);return g.stateNode=r,g}function r8(r,g,v){return g=K(4,r.children!==null?r.children:[],r.key,g),g.lanes=v,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function ov(r,g){if(typeof r==="object"&&r!==null){var v=JH.get(r);if(v!==void 0)return v;return g={value:r,source:g,stack:ir(g)},JH.set(r,g),g}return{value:r,source:g,stack:ir(g)}}function Eo(r,g){B1(),M5[W5++]=fw,M5[W5++]=O6,O6=r,fw=g}function XA(r,g,v){B1(),Fv[Iv++]=g1,Fv[Iv++]=v1,Fv[Iv++]=sl,sl=r;var l=g1;r=v1;var w=32-Z0(l)-1;l&=~(1<<w),v+=1;var b=32-Z0(g)+w;if(30<b){var H=w-w%5;b=(l&(1<<H)-1).toString(32),l>>=H,w-=H,g1=1<<32-Z0(g)+w|v<<w|l,v1=b+r}else g1=1<<b|v<<w|l,v1=r}function g8(r){B1(),r.return!==null&&(Eo(r,1),XA(r,1,0))}function v8(r){for(;r===O6;)O6=M5[--W5],M5[W5]=null,fw=M5[--W5],M5[W5]=null;for(;r===sl;)sl=Fv[--Iv],Fv[Iv]=null,v1=Fv[--Iv],Fv[Iv]=null,g1=Fv[--Iv],Fv[Iv]=null}function YA(){return B1(),sl!==null?{id:g1,overflow:v1}:null}function JA(r,g){B1(),Fv[Iv++]=g1,Fv[Iv++]=v1,Fv[Iv++]=sl,g1=g.id,v1=g.overflow,sl=r}function B1(){ar||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Dl(r,g){if(r.return===null){if(qv===null)qv={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(qv.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");qv.distanceFromLeaf>g&&(qv.distanceFromLeaf=g)}return qv}var v=Dl(r.return,g+1).children;if(0<v.length&&v[v.length-1].fiber===r)return v=v[v.length-1],v.distanceFromLeaf>g&&(v.distanceFromLeaf=g),v;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},v.push(g),g}function QA(){ar&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function s2(r,g){Io||(r=Dl(r,0),r.serverProps=null,g!==null&&(g=s9(g),r.serverTail.push(g)))}function N1(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,v="",l=qv;throw l!==null&&(qv=null,v=Du(l)),Ow(ov(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+v),r)),QH}function zA(r){var{stateNode:g,type:v,memoizedProps:l}=r;switch(g[R0]=r,g[x0]=l,zO(v,l),v){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(v=0;v<Kb.length;v++)dr(Kb[v],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":I1("input",l),dr("invalid",g),Fq(g,l),Iq(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":Bq(g,l);break;case"select":I1("select",l),dr("invalid",g),Zq(g,l);break;case"textarea":I1("textarea",l),dr("invalid",g),xq(g,l),Cq(g,l.value,l.defaultValue,l.children)}v=l.children,typeof v!=="string"&&typeof v!=="number"&&typeof v!=="bigint"||g.textContent===""+v||l.suppressHydrationWarning===!0||k9(g.textContent,v)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=Vo),g=!0):g=!1,g||N1(r,!0)}function KA(r){for(G0=r.return;G0;)switch(G0.tag){case 5:case 31:case 13:Bv=!1;return;case 27:case 3:Bv=!0;return;default:G0=G0.return}}function kh(r){if(r!==G0)return!1;if(!ar)return KA(r),ar=!0,!1;var g=r.tag,v;if(v=g!==3&&g!==27){if(v=g===5)v=r.type,v=!(v!=="form"&&v!=="button")||LO(r.type,r.memoizedProps);v=!v}if(v&&Ug){for(v=Ug;v;){var l=Dl(r,0),w=s9(v);l.serverTail.push(w),v=w.type==="Suspense"?NO(v):uv(v.nextSibling)}N1(r)}if(KA(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Ug=NO(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Ug=NO(r)}else g===27?(g=Ug,D1(r.type)?(r=HP,HP=null,Ug=r):Ug=g):Ug=G0?uv(r.stateNode.nextSibling):null;return!0}function tl(){Ug=G0=null,Io=ar=!1}function o8(){var r=p1;return r!==null&&(k0===null?k0=r:k0.push.apply(k0,r),p1=null),r}function Ow(r){p1===null?p1=[r]:p1.push(r)}function l8(){var r=qv;if(r!==null){qv=null;for(var g=Du(r);0<r.children.length;)r=r.children[0];ur(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function r4(){R5=H6=null,G5=!1}function Z1(r,g,v){zr(zH,g._currentValue,r),g._currentValue=v,zr(KH,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==z7&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=z7}function yo(r,g){r._currentValue=zH.current;var v=KH.current;Gr(KH,g),r._currentRenderer=v,Gr(zH,g)}function h8(r,g,v){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===v)break;r=r.return}r!==v&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function w8(r,g,v,l){var w=r.child;w!==null&&(w.return=r);for(;w!==null;){var b=w.dependencies;if(b!==null){var H=w.child;b=b.firstContext;r:for(;b!==null;){var q=b;b=w;for(var R=0;R<g.length;R++)if(q.context===g[R]){b.lanes|=v,q=b.alternate,q!==null&&(q.lanes|=v),h8(b.return,v,r),l||(H=null);break r}b=q.next}}else if(w.tag===18){if(H=w.return,H===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");H.lanes|=v,b=H.alternate,b!==null&&(b.lanes|=v),h8(H,v,r),H=null}else H=w.child;if(H!==null)H.return=w;else for(H=w;H!==null;){if(H===r){H=null;break}if(w=H.sibling,w!==null){w.return=H.return,H=w;break}H=H.return}w=H}}function nh(r,g,v,l){r=null;for(var w=g,b=!1;w!==null;){if(!b){if((w.flags&524288)!==0)b=!0;else if((w.flags&262144)!==0)break}if(w.tag===10){var H=w.alternate;if(H===null)throw Error("Should have a current fiber. This is a bug in React.");if(H=H.memoizedProps,H!==null){var q=w.type;C0(w.pendingProps.value,H.value)||(r!==null?r.push(q):r=[q])}}else if(w===f4.current){if(H=w.alternate,H===null)throw Error("Should have a current fiber. This is a bug in React.");H.memoizedState.memoizedState!==w.memoizedState.memoizedState&&(r!==null?r.push(Fb):r=[Fb])}w=w.return}r!==null&&w8(g,r,v,l),g.flags|=262144}function g4(r){for(r=r.firstContext;r!==null;){if(!C0(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Vl(r){H6=r,R5=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Fg(r){return G5&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),eA(H6,r)}function v4(r,g){return H6===null&&Vl(r),eA(r,g)}function eA(r,g){var v=g._currentValue;if(g={context:g,memoizedValue:v,next:null},R5===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");R5=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else R5=R5.next=g;return v}function b8(){return{controller:new Se,data:new Map,refCount:0}}function _l(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Hw(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&ie(ke,function(){r.controller.abort()})}function Oo(r,g,v){if((r&127)!==0)0>Bo&&(Bo=fg(),aw=P6(g),eH=g,v!=null&&($H=i(v)),(vg&(l0|Wv))!==O0&&(Cg=!0,s1=pw),r=Nw(),g=Bw(),r!==X5||g!==dw?X5=-1.1:g!==null&&(s1=pw),gh=r,dw=g);else if((r&4194048)!==0&&0>Nv&&(Nv=fg(),sw=P6(g),K7=g,v!=null&&(e7=i(v)),0>h1)){if(r=Nw(),g=Bw(),r!==gl||g!==vh)gl=-1.1;rl=r,vh=g}}function lz(r){if(0>Bo){Bo=fg(),aw=r._debugTask!=null?r._debugTask:null,(vg&(l0|Wv))!==O0&&(s1=pw);var g=Nw(),v=Bw();g!==X5||v!==dw?X5=-1.1:v!==null&&(s1=pw),gh=g,dw=v}if(0>Nv&&(Nv=fg(),sw=r._debugTask!=null?r._debugTask:null,0>h1)){if(r=Nw(),g=Bw(),r!==gl||g!==vh)gl=-1.1;rl=r,vh=g}}function co(){var r=rh;return rh=0,r}function o4(r){var g=rh;return rh=r,g}function Pw(r){var g=rh;return rh+=r,g}function l4(){Lr=Ur=-1.1}function lv(){var r=Ur;return Ur=-1.1,r}function hv(r){0<=r&&(Ur=r)}function Ho(){var r=Ng;return Ng=-0,r}function Po(r){0<=r&&(Ng=r)}function qo(){var r=Ig;return Ig=null,r}function Ao(){var r=Cg;return Cg=!1,r}function u8(r){m0=fg(),0>r.actualStartTime&&(r.actualStartTime=m0)}function O8(r){if(0<=m0){var g=fg()-m0;r.actualDuration+=g,r.selfBaseDuration=g,m0=-1}}function $A(r){if(0<=m0){var g=fg()-m0;r.actualDuration+=g,m0=-1}}function Mo(){if(0<=m0){var r=fg(),g=r-m0;m0=-1,rh+=g,Ng+=g,Lr=r}}function UA(r){Ig===null&&(Ig=[]),Ig.push(r),l1===null&&(l1=[]),l1.push(r)}function Wo(){m0=fg(),0>Ur&&(Ur=m0)}function qw(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function hz(r,g){if(gb===null){var v=gb=[];LH=0,oh=XO(),Y5={status:"pending",value:void 0,then:function(l){v.push(l)}}}return LH++,g.then(LA,LA),g}function LA(){if(--LH===0&&(-1<Nv||(h1=-1.1),gb!==null)){Y5!==null&&(Y5.status="fulfilled");var r=gb;gb=null,oh=0,Y5=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function wz(r,g){var v=[],l={status:"pending",value:null,reason:null,then:function(w){v.push(w)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var w=0;w<v.length;w++)(0,v[w])(g)},function(w){l.status="rejected",l.reason=w;for(w=0;w<v.length;w++)(0,v[w])(void 0)}),l}function H8(){var r=lh.current;return r!==null?r:Xg.pooledCache}function h4(r,g){g===null?zr(lh,lh.current,r):zr(lh,g.pool,r)}function FA(){var r=H8();return r===null?null:{parent:jg._currentValue,pool:r}}function IA(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function BA(r){return r=r.status,r==="fulfilled"||r==="rejected"}function NA(r,g,v){S.actQueue!==null&&(S.didUsePromise=!0);var l=r.thenables;if(v=l[v],v===void 0?l.push(g):v!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(Vo,Vo),g=v),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var w={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:w}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){w.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,xA(r),r;default:if(typeof g.status==="string")g.then(Vo,Vo);else{if(r=Xg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(b){if(g.status==="pending"){var H=g;H.status="fulfilled",H.value=b}},function(b){if(g.status==="pending"){var H=g;H.status="rejected",H.reason=b}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,xA(r),r}throw wh=g,ub=!0,J5}}function x1(r){try{return Ve(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw wh=g,ub=!0,J5;throw g}}function ZA(){if(wh===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=wh;return wh=null,ub=!1,r}function xA(r){if(r===J5||r===Y6)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function A0(r){var g=tr;return r!=null&&(tr=g===null?r:g.concat(r)),g}function P8(){var r=tr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var v=r[g].debugTask;if(v!=null)return v}}return null}function w4(r,g,v){for(var l=Object.keys(r.props),w=0;w<l.length;w++){var b=l[w];if(b!=="children"&&b!=="key"){g===null&&(g=d2(r,v.mode,0),g._debugInfo=tr,g.return=v),ur(g,function(H){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",H)},b);break}}}function b4(r){var g=Ob;return Ob+=1,Q5===null&&(Q5=IA()),NA(Q5,r,g)}function Aw(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function TA(r,g){if(g.$$typeof===zK)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function u4(r,g){var v=P8();v!==null?v.run(TA.bind(null,r,g)):TA(r,g)}function CA(r,g){var v=i(r)||"Component";_7[v]||(_7[v]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,v,g,v))}function O4(r,g){var v=P8();v!==null?v.run(CA.bind(null,r,g)):CA(r,g)}function mA(r,g){var v=i(r)||"Component";E7[v]||(E7[v]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,v,g,v))}function H4(r,g){var v=P8();v!==null?v.run(mA.bind(null,r,g)):mA(r,g)}function SA(r){function g(e,U){if(r){var F=e.deletions;F===null?(e.deletions=[U],e.flags|=16):F.push(U)}}function v(e,U){if(!r)return null;for(;U!==null;)g(e,U),U=U.sibling;return null}function l(e){for(var U=new Map;e!==null;)e.key!==null?U.set(e.key,e):U.set(e.index,e),e=e.sibling;return U}function w(e,U){return e=_o(e,U),e.index=0,e.sibling=null,e}function b(e,U,F){if(e.index=F,!r)return e.flags|=1048576,U;if(F=e.alternate,F!==null)return F=F.index,F<U?(e.flags|=67108866,U):F;return e.flags|=67108866,U}function H(e){return r&&e.alternate===null&&(e.flags|=67108866),e}function q(e,U,F,t){if(U===null||U.tag!==6)return U=su(F,e.mode,t),U.return=e,U._debugOwner=e,U._debugTask=e._debugTask,U._debugInfo=tr,U;return U=w(U,F),U.return=e,U._debugInfo=tr,U}function R(e,U,F,t){var Hr=F.type;if(Hr===g5)return U=I(e,U,F.props.children,t,F.key),w4(F,U,e),U;if(U!==null&&(U.elementType===Hr||AA(U,F)||typeof Hr==="object"&&Hr!==null&&Hr.$$typeof===Ov&&x1(Hr)===U.type))return U=w(U,F.props),Aw(U,F),U.return=e,U._debugOwner=F._owner,U._debugInfo=tr,U;return U=d2(F,e.mode,t),Aw(U,F),U.return=e,U._debugInfo=tr,U}function X(e,U,F,t){if(U===null||U.tag!==4||U.stateNode.containerInfo!==F.containerInfo||U.stateNode.implementation!==F.implementation)return U=r8(F,e.mode,t),U.return=e,U._debugInfo=tr,U;return U=w(U,F.children||[]),U.return=e,U._debugInfo=tr,U}function I(e,U,F,t,Hr){if(U===null||U.tag!==7)return U=nl(F,e.mode,t,Hr),U.return=e,U._debugOwner=e,U._debugTask=e._debugTask,U._debugInfo=tr,U;return U=w(U,F),U.return=e,U._debugInfo=tr,U}function B(e,U,F){if(typeof U==="string"&&U!==""||typeof U==="number"||typeof U==="bigint")return U=su(""+U,e.mode,F),U.return=e,U._debugOwner=e,U._debugTask=e._debugTask,U._debugInfo=tr,U;if(typeof U==="object"&&U!==null){switch(U.$$typeof){case zo:return F=d2(U,e.mode,F),Aw(F,U),F.return=e,e=A0(U._debugInfo),F._debugInfo=tr,tr=e,F;case r5:return U=r8(U,e.mode,F),U.return=e,U._debugInfo=tr,U;case Ov:var t=A0(U._debugInfo);return U=x1(U),e=B(e,U,F),tr=t,e}if(v0(U)||m(U))return F=nl(U,e.mode,F,null),F.return=e,F._debugOwner=e,F._debugTask=e._debugTask,e=A0(U._debugInfo),F._debugInfo=tr,tr=e,F;if(typeof U.then==="function")return t=A0(U._debugInfo),e=B(e,b4(U),F),tr=t,e;if(U.$$typeof===Ko)return B(e,v4(e,U),F);u4(e,U)}return typeof U==="function"&&O4(e,U),typeof U==="symbol"&&H4(e,U),null}function $(e,U,F,t){var Hr=U!==null?U.key:null;if(typeof F==="string"&&F!==""||typeof F==="number"||typeof F==="bigint")return Hr!==null?null:q(e,U,""+F,t);if(typeof F==="object"&&F!==null){switch(F.$$typeof){case zo:return F.key===Hr?(Hr=A0(F._debugInfo),e=R(e,U,F,t),tr=Hr,e):null;case r5:return F.key===Hr?X(e,U,F,t):null;case Ov:return Hr=A0(F._debugInfo),F=x1(F),e=$(e,U,F,t),tr=Hr,e}if(v0(F)||m(F)){if(Hr!==null)return null;return Hr=A0(F._debugInfo),e=I(e,U,F,t,null),tr=Hr,e}if(typeof F.then==="function")return Hr=A0(F._debugInfo),e=$(e,U,b4(F),t),tr=Hr,e;if(F.$$typeof===Ko)return $(e,U,v4(e,F),t);u4(e,F)}return typeof F==="function"&&O4(e,F),typeof F==="symbol"&&H4(e,F),null}function x(e,U,F,t,Hr){if(typeof t==="string"&&t!==""||typeof t==="number"||typeof t==="bigint")return e=e.get(F)||null,q(U,e,""+t,Hr);if(typeof t==="object"&&t!==null){switch(t.$$typeof){case zo:return F=e.get(t.key===null?F:t.key)||null,e=A0(t._debugInfo),U=R(U,F,t,Hr),tr=e,U;case r5:return e=e.get(t.key===null?F:t.key)||null,X(U,e,t,Hr);case Ov:var Br=A0(t._debugInfo);return t=x1(t),U=x(e,U,F,t,Hr),tr=Br,U}if(v0(t)||m(t))return F=e.get(F)||null,e=A0(t._debugInfo),U=I(U,F,t,Hr,null),tr=e,U;if(typeof t.then==="function")return Br=A0(t._debugInfo),U=x(e,U,F,b4(t),Hr),tr=Br,U;if(t.$$typeof===Ko)return x(e,U,F,v4(U,t),Hr);u4(U,t)}return typeof t==="function"&&O4(U,t),typeof t==="symbol"&&H4(U,t),null}function wr(e,U,F,t){if(typeof F!=="object"||F===null)return t;switch(F.$$typeof){case zo:case r5:Q(e,U,F);var Hr=F.key;if(typeof Hr!=="string")break;if(t===null){t=new Set,t.add(Hr);break}if(!t.has(Hr)){t.add(Hr);break}ur(U,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",Hr)});break;case Ov:F=x1(F),wr(e,U,F,t)}return t}function Mr(e,U,F,t){for(var Hr=null,Br=null,er=null,Jr=U,kr=U=0,Lg=null;Jr!==null&&kr<F.length;kr++){Jr.index>kr?(Lg=Jr,Jr=null):Lg=Jr.sibling;var Vg=$(e,Jr,F[kr],t);if(Vg===null){Jr===null&&(Jr=Lg);break}Hr=wr(e,Vg,F[kr],Hr),r&&Jr&&Vg.alternate===null&&g(e,Jr),U=b(Vg,U,kr),er===null?Br=Vg:er.sibling=Vg,er=Vg,Jr=Lg}if(kr===F.length)return v(e,Jr),ar&&Eo(e,kr),Br;if(Jr===null){for(;kr<F.length;kr++)Jr=B(e,F[kr],t),Jr!==null&&(Hr=wr(e,Jr,F[kr],Hr),U=b(Jr,U,kr),er===null?Br=Jr:er.sibling=Jr,er=Jr);return ar&&Eo(e,kr),Br}for(Jr=l(Jr);kr<F.length;kr++)Lg=x(Jr,e,kr,F[kr],t),Lg!==null&&(Hr=wr(e,Lg,F[kr],Hr),r&&Lg.alternate!==null&&Jr.delete(Lg.key===null?kr:Lg.key),U=b(Lg,U,kr),er===null?Br=Lg:er.sibling=Lg,er=Lg);return r&&Jr.forEach(function(M1){return g(e,M1)}),ar&&Eo(e,kr),Br}function zg(e,U,F,t){if(F==null)throw Error("An iterable object provided no iterator.");for(var Hr=null,Br=null,er=U,Jr=U=0,kr=null,Lg=null,Vg=F.next();er!==null&&!Vg.done;Jr++,Vg=F.next()){er.index>Jr?(kr=er,er=null):kr=er.sibling;var M1=$(e,er,Vg.value,t);if(M1===null){er===null&&(er=kr);break}Lg=wr(e,M1,Vg.value,Lg),r&&er&&M1.alternate===null&&g(e,er),U=b(M1,U,Jr),Br===null?Hr=M1:Br.sibling=M1,Br=M1,er=kr}if(Vg.done)return v(e,er),ar&&Eo(e,Jr),Hr;if(er===null){for(;!Vg.done;Jr++,Vg=F.next())er=B(e,Vg.value,t),er!==null&&(Lg=wr(e,er,Vg.value,Lg),U=b(er,U,Jr),Br===null?Hr=er:Br.sibling=er,Br=er);return ar&&Eo(e,Jr),Hr}for(er=l(er);!Vg.done;Jr++,Vg=F.next())kr=x(er,e,Jr,Vg.value,t),kr!==null&&(Lg=wr(e,kr,Vg.value,Lg),r&&kr.alternate!==null&&er.delete(kr.key===null?Jr:kr.key),U=b(kr,U,Jr),Br===null?Hr=kr:Br.sibling=kr,Br=kr);return r&&er.forEach(function(A$){return g(e,A$)}),ar&&Eo(e,Jr),Hr}function sr(e,U,F,t){if(typeof F==="object"&&F!==null&&F.type===g5&&F.key===null&&(w4(F,null,e),F=F.props.children),typeof F==="object"&&F!==null){switch(F.$$typeof){case zo:var Hr=A0(F._debugInfo);r:{for(var Br=F.key;U!==null;){if(U.key===Br){if(Br=F.type,Br===g5){if(U.tag===7){v(e,U.sibling),t=w(U,F.props.children),t.return=e,t._debugOwner=F._owner,t._debugInfo=tr,w4(F,t,e),e=t;break r}}else if(U.elementType===Br||AA(U,F)||typeof Br==="object"&&Br!==null&&Br.$$typeof===Ov&&x1(Br)===U.type){v(e,U.sibling),t=w(U,F.props),Aw(t,F),t.return=e,t._debugOwner=F._owner,t._debugInfo=tr,e=t;break r}v(e,U);break}else g(e,U);U=U.sibling}F.type===g5?(t=nl(F.props.children,e.mode,t,F.key),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=tr,w4(F,t,e),e=t):(t=d2(F,e.mode,t),Aw(t,F),t.return=e,t._debugInfo=tr,e=t)}return e=H(e),tr=Hr,e;case r5:r:{Hr=F;for(F=Hr.key;U!==null;){if(U.key===F)if(U.tag===4&&U.stateNode.containerInfo===Hr.containerInfo&&U.stateNode.implementation===Hr.implementation){v(e,U.sibling),t=w(U,Hr.children||[]),t.return=e,e=t;break r}else{v(e,U);break}else g(e,U);U=U.sibling}t=r8(Hr,e.mode,t),t.return=e,e=t}return H(e);case Ov:return Hr=A0(F._debugInfo),F=x1(F),e=sr(e,U,F,t),tr=Hr,e}if(v0(F))return Hr=A0(F._debugInfo),e=Mr(e,U,F,t),tr=Hr,e;if(m(F)){if(Hr=A0(F._debugInfo),Br=m(F),typeof Br!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var er=Br.call(F);if(er===F){if(e.tag!==0||Object.prototype.toString.call(e.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(er)!=="[object Generator]")t7||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),t7=!0}else F.entries!==Br||NH||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),NH=!0);return e=zg(e,U,er,t),tr=Hr,e}if(typeof F.then==="function")return Hr=A0(F._debugInfo),e=sr(e,U,b4(F),t),tr=Hr,e;if(F.$$typeof===Ko)return sr(e,U,v4(e,F),t);u4(e,F)}if(typeof F==="string"&&F!==""||typeof F==="number"||typeof F==="bigint")return Hr=""+F,U!==null&&U.tag===6?(v(e,U.sibling),t=w(U,Hr),t.return=e,e=t):(v(e,U),t=su(Hr,e.mode,t),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=tr,e=t),H(e);return typeof F==="function"&&O4(e,F),typeof F==="symbol"&&H4(e,F),v(e,U)}return function(e,U,F,t){var Hr=tr;tr=null;try{Ob=0;var Br=sr(e,U,F,t);return Q5=null,Br}catch(Lg){if(Lg===J5||Lg===Y6)throw Lg;var er=K(29,Lg,null,e.mode);er.lanes=t,er.return=e;var Jr=er._debugInfo=tr;if(er._debugOwner=e._debugOwner,er._debugTask=e._debugTask,Jr!=null){for(var kr=Jr.length-1;0<=kr;kr--)if(typeof Jr[kr].stack==="string"){er._debugOwner=Jr[kr],er._debugTask=Jr[kr].debugTask;break}}return er}finally{tr=Hr}}}function iA(r,g){var v=v0(r);return r=!v&&typeof m(r)==="function",v||r?(v=v?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",v,g,v),!1):!0}function q8(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function A8(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function T1(r){return{lane:r,tag:c7,payload:null,callback:null,next:null}}function C1(r,g,v){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,xH===l&&!p7){var w=i(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,w),p7=!0}if((vg&l0)!==O0)return w=l.pending,w===null?g.next=g:(g.next=w.next,w.next=g),l.pending=g,g=a2(r),qA(r,null,v),g;return p2(r,l,g,v),a2(r)}function Mw(r,g,v){if(g=g.updateQueue,g!==null&&(g=g.shared,(v&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,v|=l,g.lanes=v,xl(r,v)}}function P4(r,g){var{updateQueue:v,alternate:l}=r;if(l!==null&&(l=l.updateQueue,v===l)){var w=null,b=null;if(v=v.firstBaseUpdate,v!==null){do{var H={lane:v.lane,tag:v.tag,payload:v.payload,callback:null,next:null};b===null?w=b=H:b=b.next=H,v=v.next}while(v!==null);b===null?w=b=g:b=b.next=g}else w=b=g;v={baseState:l.baseState,firstBaseUpdate:w,lastBaseUpdate:b,shared:l.shared,callbacks:l.callbacks},r.updateQueue=v;return}r=v.lastBaseUpdate,r===null?v.firstBaseUpdate=g:r.next=g,v.lastBaseUpdate=g}function Ww(){if(TH){var r=Y5;if(r!==null)throw r}}function Rw(r,g,v,l){TH=!1;var w=r.updateQueue;vl=!1,xH=w.shared;var{firstBaseUpdate:b,lastBaseUpdate:H}=w,q=w.shared.pending;if(q!==null){w.shared.pending=null;var R=q,X=R.next;R.next=null,H===null?b=X:H.next=X,H=R;var I=r.alternate;I!==null&&(I=I.updateQueue,q=I.lastBaseUpdate,q!==H&&(q===null?I.firstBaseUpdate=X:q.next=X,I.lastBaseUpdate=R))}if(b!==null){var B=w.baseState;H=0,I=X=R=null,q=b;do{var $=q.lane&-536870913,x=$!==q.lane;if(x?(Vr&$)===$:(l&$)===$){$!==0&&$===oh&&(TH=!0),I!==null&&(I=I.next={lane:0,tag:q.tag,payload:q.payload,callback:null,next:null});r:{$=r;var wr=q,Mr=g,zg=v;switch(wr.tag){case j7:if(wr=wr.payload,typeof wr==="function"){G5=!0;var sr=wr.call(zg,B,Mr);if($.mode&L0){Jg(!0);try{wr.call(zg,B,Mr)}finally{Jg(!1)}}G5=!1,B=sr;break r}B=wr;break r;case ZH:$.flags=$.flags&-65537|128;case c7:if(sr=wr.payload,typeof sr==="function"){if(G5=!0,wr=sr.call(zg,B,Mr),$.mode&L0){Jg(!0);try{sr.call(zg,B,Mr)}finally{Jg(!1)}}G5=!1}else wr=sr;if(wr===null||wr===void 0)break r;B=cr({},B,wr);break r;case f7:vl=!0}}$=q.callback,$!==null&&(r.flags|=64,x&&(r.flags|=8192),x=w.callbacks,x===null?w.callbacks=[$]:x.push($))}else x={lane:$,tag:q.tag,payload:q.payload,callback:q.callback,next:null},I===null?(X=I=x,R=B):I=I.next=x,H|=$;if(q=q.next,q===null)if(q=w.shared.pending,q===null)break;else x=q,q=x.next,x.next=null,w.lastBaseUpdate=x,w.shared.pending=null}while(1);I===null&&(R=B),w.baseState=R,w.firstBaseUpdate=X,w.lastBaseUpdate=I,b===null&&(w.shared.lanes=0),hl|=H,r.lanes=H,r.memoizedState=B}xH=null}function kA(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function bz(r,g){var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)kA(v[r],g)}function nA(r,g){var v=r.callbacks;if(v!==null)for(r.callbacks=null,r=0;r<v.length;r++)kA(v[r],g)}function DA(r,g){var v=xo;zr(Q6,v,r),zr(z5,g,r),xo=v|g.baseLanes}function M8(r){zr(Q6,xo,r),zr(z5,z5.current,r)}function W8(r){xo=Q6.current,Gr(z5,r),Gr(Q6,r)}function m1(r){var g=r.alternate;zr(tg,tg.current&K5,r),zr(Av,r,r),Zv===null&&(g===null||z5.current!==null?Zv=r:g.memoizedState!==null&&(Zv=r))}function R8(r){zr(tg,tg.current,r),zr(Av,r,r),Zv===null&&(Zv=r)}function tA(r){r.tag===22?(zr(tg,tg.current,r),zr(Av,r,r),Zv===null&&(Zv=r)):S1(r)}function S1(r){zr(tg,tg.current,r),zr(Av,Av.current,r)}function wv(r){Gr(Av,r),Zv===r&&(Zv=null),Gr(tg,r)}function q4(r){for(var g=r;g!==null;){if(g.tag===13){var v=g.memoizedState;if(v!==null&&(v=v.dehydrated,v===null||IO(v)||BO(v)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function yr(){var r=C;Tv===null?Tv=[r]:Tv.push(r)}function a(){var r=C;if(Tv!==null&&(O1++,Tv[O1]!==r)){var g=i(Ir);if(!a7.has(g)&&(a7.add(g),Tv!==null)){for(var v="",l=0;l<=O1;l++){var w=Tv[l],b=l===O1?r:w;for(w=l+1+". "+w;30>w.length;)w+=" ";w+=b+`
`,v+=w}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,v)}}}function Dh(r){r===void 0||r===null||v0(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",C,typeof r)}function A4(){var r=i(Ir);s7.has(r)||(s7.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function ig(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function G8(r,g){if(qb)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",C),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,C,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var v=0;v<g.length&&v<r.length;v++)if(!C0(r[v],g[v]))return!1;return!0}function X8(r,g,v,l,w,b){if(b1=b,Ir=g,Tv=r!==null?r._debugHookTypes:null,O1=-1,qb=r!==null&&r.type!==g.type,Object.prototype.toString.call(v)==="[object AsyncFunction]"||Object.prototype.toString.call(v)==="[object AsyncGeneratorFunction]")b=i(Ir),CH.has(b)||(CH.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,S.H=r!==null&&r.memoizedState!==null?SH:Tv!==null?r3:mH,uh=b=(g.mode&L0)!==Fr;var H=FH(v,l,w);if(uh=!1,$5&&(H=Y8(g,v,l,w)),b){Jg(!0);try{H=Y8(g,v,l,w)}finally{Jg(!1)}}return VA(r,g),H}function VA(r,g){g._debugHookTypes=Tv,g.dependencies===null?u1!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:u1}):g.dependencies._debugThenableState=u1,S.H=Ab;var v=Gg!==null&&Gg.next!==null;if(b1=0,Tv=C=pg=Gg=Ir=null,O1=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),K6=!1,Pb=0,u1=null,v)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||ag||(r=r.dependencies,r!==null&&g4(r)&&(ag=!0)),ub?(ub=!1,r=!0):r=!1,r&&(g=i(g)||"Unknown",d7.has(g)||CH.has(g)||(d7.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function Y8(r,g,v,l){Ir=r;var w=0;do{if($5&&(u1=null),Pb=0,$5=!1,w>=Ee)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(w+=1,qb=!1,pg=Gg=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}O1=-1,S.H=g3,b=FH(g,v,l)}while($5);return b}function uz(){var r=S.H,g=r.useState()[0];return g=typeof g.then==="function"?Gw(g):g,r=r.useState()[0],(Gg!==null?Gg.memoizedState:null)!==r&&(Ir.flags|=1024),g}function J8(){var r=e6!==0;return e6=0,r}function Q8(r,g,v){g.updateQueue=r.updateQueue,g.flags=(g.mode&_v)!==Fr?g.flags&-402655237:g.flags&-2053,r.lanes&=~v}function z8(r){if(K6){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}K6=!1}b1=0,Tv=pg=Gg=Ir=null,O1=-1,C=null,$5=!1,Pb=e6=0,u1=null}function N0(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pg===null?Ir.memoizedState=pg=r:pg=pg.next=r,pg}function Hg(){if(Gg===null){var r=Ir.alternate;r=r!==null?r.memoizedState:null}else r=Gg.next;var g=pg===null?Ir.memoizedState:pg.next;if(g!==null)pg=g,Gg=r;else{if(r===null){if(Ir.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Gg=r,r={memoizedState:Gg.memoizedState,baseState:Gg.baseState,baseQueue:Gg.baseQueue,queue:Gg.queue,next:null},pg===null?Ir.memoizedState=pg=r:pg=pg.next=r}return pg}function M4(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gw(r){var g=Pb;return Pb+=1,u1===null&&(u1=IA()),r=NA(u1,r,g),g=Ir,(pg===null?g.memoizedState:pg.next)===null&&(g=g.alternate,S.H=g!==null&&g.memoizedState!==null?SH:mH),r}function i1(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Gw(r);if(r.$$typeof===Ko)return Fg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function El(r){var g=null,v=Ir.updateQueue;if(v!==null&&(g=v.memoCache),g==null){var l=Ir.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(w){return w.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),v===null&&(v=M4(),Ir.updateQueue=v),v.memoCache=g,v=g.data[g.index],v===void 0||qb)for(v=g.data[g.index]=Array(r),l=0;l<r;l++)v[l]=KK;else v.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",v.length,r);return g.index++,v}function nv(r,g){return typeof g==="function"?g(r):g}function K8(r,g,v){var l=N0();if(v!==void 0){var w=v(g);if(uh){Jg(!0);try{v(g)}finally{Jg(!1)}}}else w=g;return l.memoizedState=l.baseState=w,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:w},l.queue=r,r=r.dispatch=Az.bind(null,Ir,r),[l.memoizedState,r]}function th(r){var g=Hg();return e8(g,Gg,r)}function e8(r,g,v){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=v;var w=r.baseQueue,b=l.pending;if(b!==null){if(w!==null){var H=w.next;w.next=b.next,b.next=H}g.baseQueue!==w&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=w=b,l.pending=null}if(b=r.baseState,w===null)r.memoizedState=b;else{g=w.next;var q=H=null,R=null,X=g,I=!1;do{var B=X.lane&-536870913;if(B!==X.lane?(Vr&B)===B:(b1&B)===B){var $=X.revertLane;if($===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),B===oh&&(I=!0);else if((b1&$)===$){X=X.next,$===oh&&(I=!0);continue}else B={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},R===null?(q=R=B,H=b):R=R.next=B,Ir.lanes|=$,hl|=$;B=X.action,uh&&v(b,B),b=X.hasEagerState?X.eagerState:v(b,B)}else $={lane:B,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},R===null?(q=R=$,H=b):R=R.next=$,Ir.lanes|=B,hl|=B;X=X.next}while(X!==null&&X!==g);if(R===null?H=b:R.next=q,!C0(b,r.memoizedState)&&(ag=!0,I&&(v=Y5,v!==null)))throw v;r.memoizedState=b,r.baseState=H,r.baseQueue=R,l.lastRenderedState=b}return w===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Xw(r){var g=Hg(),v=g.queue;if(v===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");v.lastRenderedReducer=r;var{dispatch:l,pending:w}=v,b=g.memoizedState;if(w!==null){v.pending=null;var H=w=w.next;do b=r(b,H.action),H=H.next;while(H!==w);C0(b,g.memoizedState)||(ag=!0),g.memoizedState=b,g.baseQueue===null&&(g.baseState=b),v.lastRenderedState=b}return[b,l]}function $8(r,g,v){var l=Ir,w=N0();if(ar){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=v();e5||b===v()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),e5=!0)}else{if(b=g(),e5||(v=g(),C0(b,v)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),e5=!0)),Xg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||_A(l,g,b)}return w.memoizedState=b,v={value:b,getSnapshot:g},w.queue=v,X4(yA.bind(null,l,v,r),[r]),l.flags|=2048,_h(xv|i0,{destroy:void 0},EA.bind(null,l,v,b,g),null),b}function W4(r,g,v){var l=Ir,w=Hg(),b=ar;if(b){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");v=v()}else if(v=g(),!e5){var H=g();C0(v,H)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),e5=!0)}if(H=!C0((Gg||w).memoizedState,v))w.memoizedState=v,ag=!0;w=w.queue;var q=yA.bind(null,l,w,r);if(y0(2048,i0,q,[r]),w.getSnapshot!==g||H||pg!==null&&pg.memoizedState.tag&xv){if(l.flags|=2048,_h(xv|i0,{destroy:void 0},EA.bind(null,l,w,v,g),null),Xg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(b1&127)!==0||_A(l,g,v)}return v}function _A(r,g,v){r.flags|=16384,r={getSnapshot:g,value:v},g=Ir.updateQueue,g===null?(g=M4(),Ir.updateQueue=g,g.stores=[r]):(v=g.stores,v===null?g.stores=[r]:v.push(r))}function EA(r,g,v,l){g.value=v,g.getSnapshot=l,cA(g)&&jA(r)}function yA(r,g,v){return v(function(){cA(g)&&(Oo(2,"updateSyncExternalStore()",r),jA(r))})}function cA(r){var g=r.getSnapshot;r=r.value;try{var v=g();return!C0(r,v)}catch(l){return!0}}function jA(r){var g=$0(r,2);g!==null&&Tg(g,r,2)}function U8(r){var g=N0();if(typeof r==="function"){var v=r;if(r=v(),uh){Jg(!0);try{v()}finally{Jg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nv,lastRenderedState:r},g}function L8(r){r=U8(r);var g=r.queue,v=AM.bind(null,Ir,g);return g.dispatch=v,[r.memoizedState,v]}function F8(r){var g=N0();g.memoizedState=g.baseState=r;var v={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=v,g=t8.bind(null,Ir,!0,v),v.dispatch=g,[r,g]}function fA(r,g){var v=Hg();return pA(v,Gg,r,g)}function pA(r,g,v,l){return r.baseState=v,e8(r,Gg,typeof l==="function"?l:nv)}function aA(r,g){var v=Hg();if(Gg!==null)return pA(v,Gg,r,g);return v.baseState=r,[r,v.queue.dispatch]}function Oz(r,g,v,l,w){if(e4(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var b={payload:w,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(H){b.listeners.push(H)}};S.T!==null?v(!0):b.isTransition=!1,l(b),v=g.pending,v===null?(b.next=g.pending=b,dA(g,b)):(b.next=v.next,g.pending=v.next=b)}}function dA(r,g){var{action:v,payload:l}=g,w=r.state;if(g.isTransition){var b=S.T,H={};H._updatedFibers=new Set,S.T=H;try{var q=v(w,l),R=S.S;R!==null&&R(H,q),sA(r,g,q)}catch(X){I8(r,g,X)}finally{b!==null&&H.types!==null&&(b.types!==null&&b.types!==H.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=H.types),S.T=b,b===null&&H._updatedFibers&&(r=H._updatedFibers.size,H._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{H=v(w,l),sA(r,g,H)}catch(X){I8(r,g,X)}}function sA(r,g,v){v!==null&&typeof v==="object"&&typeof v.then==="function"?(S.asyncTransitions++,v.then(K4,K4),v.then(function(l){rM(r,g,l)},function(l){return I8(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):rM(r,g,v)}function rM(r,g,v){g.status="fulfilled",g.value=v,gM(g),r.state=v,g=r.pending,g!==null&&(v=g.next,v===g?r.pending=null:(v=v.next,g.next=v,dA(r,v)))}function I8(r,g,v){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=v,gM(g),g=g.next;while(g!==l)}r.action=null}function gM(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function vM(r,g){return g}function Vh(r,g){if(ar){var v=Xg.formState;if(v!==null){r:{var l=Ir;if(ar){if(Ug){g:{var w=Ug;for(var b=Bv;w.nodeType!==8;){if(!b){w=null;break g}if(w=uv(w.nextSibling),w===null){w=null;break g}}b=w.data,w=b===wP||b===n3?w:null}if(w){Ug=uv(w.nextSibling),l=w.data===wP;break r}}N1(l)}l=!1}l&&(g=v[0])}}return v=N0(),v.memoizedState=v.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vM,lastRenderedState:g},v.queue=l,v=AM.bind(null,Ir,l),l.dispatch=v,l=U8(!1),b=t8.bind(null,Ir,!1,l.queue),l=N0(),w={state:g,dispatch:null,action:r,pending:null},l.queue=w,v=Oz.bind(null,Ir,w,b,v),w.dispatch=v,l.memoizedState=r,[g,v,!1]}function R4(r){var g=Hg();return oM(g,Gg,r)}function oM(r,g,v){if(g=e8(r,g,vM)[0],r=th(nv)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Gw(g)}catch(H){if(H===J5)throw Y6;throw H}else l=g;g=Hg();var w=g.queue,b=w.dispatch;return v!==g.memoizedState&&(Ir.flags|=2048,_h(xv|i0,{destroy:void 0},Hz.bind(null,w,v),null)),[l,b,r]}function Hz(r,g){r.action=g}function G4(r){var g=Hg(),v=Gg;if(v!==null)return oM(g,v,r);Hg(),g=g.memoizedState,v=Hg();var l=v.queue.dispatch;return v.memoizedState=r,[g,l,!1]}function _h(r,g,v,l){return r={tag:r,create:v,deps:l,inst:g,next:null},g=Ir.updateQueue,g===null&&(g=M4(),Ir.updateQueue=g),v=g.lastEffect,v===null?g.lastEffect=r.next=r:(l=v.next,v.next=r,r.next=l,g.lastEffect=r),r}function B8(r){var g=N0();return r={current:r},g.memoizedState=r}function yl(r,g,v,l){var w=N0();Ir.flags|=r,w.memoizedState=_h(xv|g,{destroy:void 0},v,l===void 0?null:l)}function y0(r,g,v,l){var w=Hg();l=l===void 0?null:l;var b=w.memoizedState.inst;Gg!==null&&l!==null&&G8(l,Gg.memoizedState.deps)?w.memoizedState=_h(g,b,v,l):(Ir.flags|=r,w.memoizedState=_h(xv|g,b,v,l))}function X4(r,g){(Ir.mode&_v)!==Fr?yl(276826112,i0,r,g):yl(8390656,i0,r,g)}function Pz(r){Ir.flags|=4;var g=Ir.updateQueue;if(g===null)g=M4(),Ir.updateQueue=g,g.events=[r];else{var v=g.events;v===null?g.events=[r]:v.push(r)}}function N8(r){var g=N0(),v={impl:r};return g.memoizedState=v,function(){if((vg&l0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return v.impl.apply(void 0,arguments)}}function Y4(r){var g=Hg().memoizedState;return Pz({ref:g,nextImpl:r}),function(){if((vg&l0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function Z8(r,g){var v=4194308;return(Ir.mode&_v)!==Fr&&(v|=134217728),yl(v,Mv,r,g)}function lM(r,g){if(typeof g==="function"){r=r();var v=g(r);return function(){typeof v==="function"?v():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function x8(r,g,v){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),v=v!==null&&v!==void 0?v.concat([r]):null;var l=4194308;(Ir.mode&_v)!==Fr&&(l|=134217728),yl(l,Mv,lM.bind(null,g,r),v)}function J4(r,g,v){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),v=v!==null&&v!==void 0?v.concat([r]):null,y0(4,Mv,lM.bind(null,g,r),v)}function T8(r,g){return N0().memoizedState=[r,g===void 0?null:g],r}function Q4(r,g){var v=Hg();g=g===void 0?null:g;var l=v.memoizedState;if(g!==null&&G8(g,l[1]))return l[0];return v.memoizedState=[r,g],r}function C8(r,g){var v=N0();g=g===void 0?null:g;var l=r();if(uh){Jg(!0);try{r()}finally{Jg(!1)}}return v.memoizedState=[l,g],l}function z4(r,g){var v=Hg();g=g===void 0?null:g;var l=v.memoizedState;if(g!==null&&G8(g,l[1]))return l[0];if(l=r(),uh){Jg(!0);try{r()}finally{Jg(!1)}}return v.memoizedState=[l,g],l}function m8(r,g){var v=N0();return S8(v,r,g)}function hM(r,g){var v=Hg();return bM(v,Gg.memoizedState,r,g)}function wM(r,g){var v=Hg();return Gg===null?S8(v,r,g):bM(v,Gg.memoizedState,r,g)}function S8(r,g,v){if(v===void 0||(b1&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=v,r=u9(),Ir.lanes|=r,hl|=r,v}function bM(r,g,v,l){if(C0(v,g))return v;if(z5.current!==null)return r=S8(r,v,l),C0(r,g)||(ag=!0),r;if((b1&42)===0||(b1&1073741824)!==0&&(Vr&261930)===0)return ag=!0,r.memoizedState=v;return r=u9(),Ir.lanes|=r,hl|=r,g}function K4(){S.asyncTransitions--}function uM(r,g,v,l,w){var b=ug.p;ug.p=b!==0&&b<Vv?b:Vv;var H=S.T,q={};q._updatedFibers=new Set,S.T=q,t8(r,!1,g,v);try{var R=w(),X=S.S;if(X!==null&&X(q,R),R!==null&&typeof R==="object"&&typeof R.then==="function"){S.asyncTransitions++,R.then(K4,K4);var I=wz(R,l);Yw(r,g,I,bv(r))}else Yw(r,g,l,bv(r))}catch(B){Yw(r,g,{then:function(){},status:"rejected",reason:B},bv(r))}finally{ug.p=b,H!==null&&q.types!==null&&(H.types!==null&&H.types!==q.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),H.types=q.types),S.T=H,H===null&&q._updatedFibers&&(r=q._updatedFibers.size,q._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function i8(r,g,v,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var w=OM(r).queue;lz(r),uM(r,w,g,Yh,v===null?z:function(){return HM(r),v(l)})}function OM(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Yh,baseState:Yh,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nv,lastRenderedState:Yh},next:null};var v={};return g.next={memoizedState:v,baseState:v,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nv,lastRenderedState:v},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function HM(r){S.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=OM(r);g.next===null&&(g=r.alternate.memoizedState),Yw(r,g.next.queue,{},bv(r))}function k8(){var r=U8(!1);return r=uM.bind(null,Ir,r.queue,!0,!1),N0().memoizedState=r,[!1,r]}function PM(){var r=th(nv)[0],g=Hg().memoizedState;return[typeof r==="boolean"?r:Gw(r),g]}function qM(){var r=Xw(nv)[0],g=Hg().memoizedState;return[typeof r==="boolean"?r:Gw(r),g]}function cl(){return Fg(Fb)}function n8(){var r=N0(),g=Xg.identifierPrefix;if(ar){var v=v1,l=g1;v=(l&~(1<<32-Z0(l)-1)).toString(32)+v,g="_"+g+"R_"+v,v=e6++,0<v&&(g+="H"+v.toString(32)),g+="_"}else v=_e++,g="_"+g+"r_"+v.toString(32)+"_";return r.memoizedState=g}function D8(){return N0().memoizedState=qz.bind(null,Ir)}function qz(r,g){for(var v=r.return;v!==null;){switch(v.tag){case 24:case 3:var l=bv(v),w=T1(l),b=C1(v,w,l);b!==null&&(Oo(l,"refresh()",r),Tg(b,v,l),Mw(b,v,l)),r=b8(),g!==null&&g!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),w.payload={cache:r};return}v=v.return}}function Az(r,g,v){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=bv(r);var w={lane:l,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};e4(r)?MM(g,w):(w=fu(r,g,w,l),w!==null&&(Oo(l,"dispatch()",r),Tg(w,r,l),WM(w,g,l)))}function AM(r,g,v){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=bv(r),Yw(r,g,v,l)&&Oo(l,"setState()",r)}function Yw(r,g,v,l){var w={lane:l,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};if(e4(r))MM(g,w);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=g.lastRenderedReducer,b!==null)){var H=S.H;S.H=yv;try{var q=g.lastRenderedState,R=b(q,v);if(w.hasEagerState=!0,w.eagerState=R,C0(R,q))return p2(r,g,w,0),Xg===null&&f2(),!1}catch(X){}finally{S.H=H}}if(v=fu(r,g,w,l),v!==null)return Tg(v,r,l),WM(v,g,l),!0}return!1}function t8(r,g,v,l){if(S.T===null&&oh===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:XO(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},e4(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=fu(r,v,l,2),g!==null&&(Oo(2,"setOptimistic()",r),Tg(g,r,2))}function e4(r){var g=r.alternate;return r===Ir||g!==null&&g===Ir}function MM(r,g){$5=K6=!0;var v=r.pending;v===null?g.next=g:(g.next=v.next,v.next=g),r.pending=g}function WM(r,g,v){if((v&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,v|=l,g.lanes=v,xl(r,v)}}function V8(r){if(r!==null&&typeof r!=="function"){var g=String(r);q3.has(g)||(q3.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function _8(r,g,v,l){var w=r.memoizedState,b=v(l,w);if(r.mode&L0){Jg(!0);try{b=v(l,w)}finally{Jg(!1)}}b===void 0&&(g=V(g)||"Component",u3.has(g)||(u3.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),w=b===null||b===void 0?w:cr({},w,b),r.memoizedState=w,r.lanes===0&&(r.updateQueue.baseState=w)}function RM(r,g,v,l,w,b,H){var q=r.stateNode;if(typeof q.shouldComponentUpdate==="function"){if(v=q.shouldComponentUpdate(l,b,H),r.mode&L0){Jg(!0);try{v=q.shouldComponentUpdate(l,b,H)}finally{Jg(!1)}}return v===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",V(g)||"Component"),v}return g.prototype&&g.prototype.isPureReactComponent?!bw(v,l)||!bw(w,b):!0}function GM(r,g,v,l){var w=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(v,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(v,l),g.state!==w&&(r=i(r)||"Component",o3.has(r)||(o3.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),iH.enqueueReplaceState(g,g.state,null))}function jl(r,g){var v=g;if("ref"in g){v={};for(var l in g)l!=="ref"&&(v[l]=g[l])}if(r=r.defaultProps){v===g&&(v=cr({},v));for(var w in r)v[w]===void 0&&(v[w]=r[w])}return v}function XM(r){WH(r),console.warn(`%s

%s
`,U5?"An error occurred in the <"+U5+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function YM(r){var g=U5?"The above error occurred in the <"+U5+"> component.":"The above error occurred in one of your React components.",v="React will try to recreate this component tree from scratch using the error boundary you provided, "+((kH||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,v].slice(0),typeof r[0]==="string"?r.splice(0,1,j3+" "+r[0],f3,f6+l+f6,p3):r.splice(0,0,j3,f3,f6+l+f6,p3),r.unshift(console),l=P$.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,v)}function JM(r){WH(r)}function $4(r,g){try{U5=g.source?i(g.source):null,kH=null;var v=g.value;if(S.actQueue!==null)S.thrownErrors.push(v);else{var l=r.onUncaughtError;l(v,{componentStack:g.stack})}}catch(w){setTimeout(function(){throw w})}}function QM(r,g,v){try{U5=v.source?i(v.source):null,kH=i(g);var l=r.onCaughtError;l(v.value,{componentStack:v.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(w){setTimeout(function(){throw w})}}function E8(r,g,v){return v=T1(v),v.tag=ZH,v.payload={element:null},v.callback=function(){ur(g.source,$4,r,g)},v}function y8(r){return r=T1(r),r.tag=ZH,r}function c8(r,g,v,l){var w=v.type.getDerivedStateFromError;if(typeof w==="function"){var b=l.value;r.payload=function(){return w(b)},r.callback=function(){MA(v),ur(l.source,QM,g,v,l)}}var H=v.stateNode;H!==null&&typeof H.componentDidCatch==="function"&&(r.callback=function(){MA(v),ur(l.source,QM,g,v,l),typeof w!=="function"&&(bl===null?bl=new Set([this]):bl.add(this)),ne(this,l),typeof w==="function"||(v.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",i(v)||"Unknown")})}function Mz(r,g,v,l,w){if(v.flags|=32768,Uo&&Lw(r,w),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=v.alternate,g!==null&&nh(g,v,w,!0),ar&&(Io=!0),v=Av.current,v!==null){switch(v.tag){case 31:case 13:return Zv===null?T4():v.alternate===null&&Zg===P1&&(Zg=L6),v.flags&=-257,v.flags|=65536,v.lanes=w,l===J6?v.flags|=16384:(g=v.updateQueue,g===null?v.updateQueue=new Set([l]):g.add(l),MO(r,l,w)),!1;case 22:return v.flags|=65536,l===J6?v.flags|=16384:(g=v.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},v.updateQueue=g):(v=g.retryQueue,v===null?g.retryQueue=new Set([l]):v.add(l)),MO(r,l,w)),!1}throw Error("Unexpected Suspense handler tag ("+v.tag+"). This is a bug in React.")}return MO(r,l,w),T4(),!1}if(ar)return Io=!0,g=Av.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=w,l!==QH&&Ow(ov(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),v))):(l!==QH&&Ow(ov(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),v)),r=r.current.alternate,r.flags|=65536,w&=-w,r.lanes|=w,l=ov(l,v),w=E8(r.stateNode,l,w),P4(r,w),Zg!==ol&&(Zg=Oh)),!1;var b=ov(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),v);if(Yb===null?Yb=[b]:Yb.push(b),Zg!==ol&&(Zg=Oh),g===null)return!0;l=ov(l,v),v=g;do{switch(v.tag){case 3:return v.flags|=65536,r=w&-w,v.lanes|=r,r=E8(v.stateNode,l,r),P4(v,r),!1;case 1:if(g=v.type,b=v.stateNode,(v.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(bl===null||!bl.has(b))))return v.flags|=65536,w&=-w,v.lanes|=w,w=y8(w),c8(w,r,v,l),P4(v,w),!1}v=v.return}while(v!==null);return!1}function M0(r,g,v,l){g.child=r===null?y7(g,null,v,l):bh(g,r.child,v,l)}function zM(r,g,v,l,w){v=v.render;var b=g.ref;if("ref"in l){var H={};for(var q in l)q!=="ref"&&(H[q]=l[q])}else H=l;if(Vl(g),l=X8(r,g,v,H,b,w),q=J8(),r!==null&&!ag)return Q8(r,g,w),jo(r,g,w);return ar&&q&&g8(g),g.flags|=1,M0(r,g,l,w),g.child}function KM(r,g,v,l,w){if(r===null){var b=v.type;if(typeof b==="function"&&!au(b)&&b.defaultProps===void 0&&v.compare===null)return v=kl(b),g.tag=15,g.type=v,f8(g,b),eM(r,g,v,l,w);return r=du(v.type,null,l,g,g.mode,w),r.ref=g.ref,r.return=g,g.child=r}if(b=r.child,!gO(r,w)){var H=b.memoizedProps;if(v=v.compare,v=v!==null?v:bw,v(H,l)&&r.ref===g.ref)return jo(r,g,w)}return g.flags|=1,r=_o(b,l),r.ref=g.ref,r.return=g,g.child=r}function eM(r,g,v,l,w){if(r!==null){var b=r.memoizedProps;if(bw(b,l)&&r.ref===g.ref&&g.type===r.type)if(ag=!1,g.pendingProps=l=b,gO(r,w))(r.flags&131072)!==0&&(ag=!0);else return g.lanes=r.lanes,jo(r,g,w)}return j8(r,g,v,l,w)}function $M(r,g,v,l){var w=l.children,b=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:jw,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(b=b!==null?b.baseLanes|v:v,r!==null){l=g.child=r.child;for(w=0;l!==null;)w=w|l.lanes|l.childLanes,l=l.sibling;l=w&~b}else l=0,g.child=null;return UM(r,g,b,v,l)}if((v&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&h4(g,b!==null?b.cachePool:null),b!==null?DA(g,b):M8(g),tA(g);else return l=g.lanes=536870912,UM(r,g,b!==null?b.baseLanes|v:v,v,l)}else b!==null?(h4(g,b.cachePool),DA(g,b),S1(g),g.memoizedState=null):(r!==null&&h4(g,null),M8(g),S1(g));return M0(r,g,w,v),g.child}function Jw(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:jw,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function UM(r,g,v,l,w){var b=H8();return b=b===null?null:{parent:jg._currentValue,pool:b},g.memoizedState={baseLanes:v,cachePool:b},r!==null&&h4(g,null),M8(g),tA(g),r!==null&&nh(r,g,l,!0),g.childLanes=w,null}function U4(r,g){var v=g.hidden;return v!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,v===!0?"hidden":v===!1?"hidden={false}":"hidden={...}",v?'mode="hidden"':'mode="visible"'),g=F4({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function LM(r,g,v){return bh(g,r.child,null,v),r=U4(g,g.pendingProps),r.flags|=2,wv(g),g.memoizedState=null,r}function Wz(r,g,v){var l=g.pendingProps,w=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(ar){if(l.mode==="hidden")return r=U4(g,l),g.lanes=536870912,Jw(null,r);if(R8(g),(r=Ug)?(v=d9(r,Bv),v=v!==null&&v.data===Wh?v:null,v!==null&&(l={dehydrated:v,treeContext:YA(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GA(v),l.return=g,g.child=l,G0=g,Ug=null)):v=null,v===null)throw s2(g,r),N1(g);return g.lanes=536870912,null}return U4(g,l)}var b=r.memoizedState;if(b!==null){var H=b.dehydrated;if(R8(g),w)if(g.flags&256)g.flags&=-257,g=LM(r,g,v);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(QA(),(v&536870912)!==0&&x4(g),ag||nh(r,g,v,!1),w=(v&r.childLanes)!==0,ag||w){if(l=Xg,l!==null&&(H=Tl(l,v),H!==0&&H!==b.retryLane))throw b.retryLane=H,$0(r,H),Tg(l,r,H),nH;T4(),g=LM(r,g,v)}else r=b.treeContext,Ug=uv(H.nextSibling),G0=g,ar=!0,p1=null,Io=!1,qv=null,Bv=!1,r!==null&&JA(g,r),g=U4(g,l),g.flags|=4096;return g}return b=r.child,l={mode:l.mode,children:l.children},(v&536870912)!==0&&(v&r.lanes)!==0&&x4(g),r=_o(b,l),r.ref=g.ref,g.child=r,r.return=g,r}function L4(r,g){var v=g.ref;if(v===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof v!=="function"&&typeof v!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==v)g.flags|=4194816}}function j8(r,g,v,l,w){if(v.prototype&&typeof v.prototype.render==="function"){var b=V(v)||"Unknown";A3[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),A3[b]=!0)}if(g.mode&L0&&Ev.recordLegacyContextWarning(g,null),r===null&&(f8(g,g.type),v.contextTypes&&(b=V(v)||"Unknown",W3[b]||(W3[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),Vl(g),v=X8(r,g,v,l,void 0,w),l=J8(),r!==null&&!ag)return Q8(r,g,w),jo(r,g,w);return ar&&l&&g8(g),g.flags|=1,M0(r,g,v,w),g.child}function FM(r,g,v,l,w,b){if(Vl(g),O1=-1,qb=r!==null&&r.type!==g.type,g.updateQueue=null,v=Y8(g,l,v,w),VA(r,g),l=J8(),r!==null&&!ag)return Q8(r,g,b),jo(r,g,b);return ar&&l&&g8(g),g.flags|=1,M0(r,g,v,b),g.child}function IM(r,g,v,l,w){switch(M(g)){case!1:var b=g.stateNode,H=new g.type(g.memoizedProps,b.context).state;b.updater.enqueueSetState(b,H,null);break;case!0:g.flags|=128,g.flags|=65536,b=Error("Simulated error coming from DevTools");var q=w&-w;if(g.lanes|=q,H=Xg,H===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");q=y8(q),c8(q,H,g,ov(b,g)),P4(g,q)}if(Vl(g),g.stateNode===null){if(H=f1,b=v.contextType,"contextType"in v&&b!==null&&(b===void 0||b.$$typeof!==Ko)&&!P3.has(v)&&(P3.add(v),q=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===DO?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",V(v)||"Component",q)),typeof b==="object"&&b!==null&&(H=Fg(b)),b=new v(l,H),g.mode&L0){Jg(!0);try{b=new v(l,H)}finally{Jg(!1)}}if(H=g.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=iH,g.stateNode=b,b._reactInternals=g,b._reactInternalInstance=v3,typeof v.getDerivedStateFromProps==="function"&&H===null&&(H=V(v)||"Component",l3.has(H)||(l3.add(H),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",H,b.state===null?"null":"undefined",H))),typeof v.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var R=q=H=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?H="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(H="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?q="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(q="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?R="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(R="UNSAFE_componentWillUpdate"),H!==null||q!==null||R!==null){b=V(v)||"Component";var X=typeof v.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";w3.has(b)||(w3.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,X,H!==null?`
  `+H:"",q!==null?`
  `+q:"",R!==null?`
  `+R:""))}}b=g.stateNode,H=V(v)||"Component",b.render||(v.prototype&&typeof v.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",H):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",H)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",H),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",H),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",H),v.childContextTypes&&!H3.has(v)&&(H3.add(v),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",H)),v.contextTypes&&!O3.has(v)&&(O3.add(v),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",H)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",H),v.prototype&&v.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",V(v)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",H),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",H),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",H),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",H),q=b.props!==l,b.props!==void 0&&q&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",H),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",H,H),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||h3.has(v)||(h3.add(v),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",V(v))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",H),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",H),typeof v.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",H),(q=b.state)&&(typeof q!=="object"||v0(q))&&console.error("%s.state: must be set to an object or null",H),typeof b.getChildContext==="function"&&typeof v.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",H),b=g.stateNode,b.props=l,b.state=g.memoizedState,b.refs={},q8(g),H=v.contextType,b.context=typeof H==="object"&&H!==null?Fg(H):f1,b.state===l&&(H=V(v)||"Component",b3.has(H)||(b3.add(H),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",H))),g.mode&L0&&Ev.recordLegacyContextWarning(g,b),Ev.recordUnsafeLifecycleWarnings(g,b),b.state=g.memoizedState,H=v.getDerivedStateFromProps,typeof H==="function"&&(_8(g,v,H,l),b.state=g.memoizedState),typeof v.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(H=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),H!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",i(g)||"Component"),iH.enqueueReplaceState(b,b.state,null)),Rw(g,l,b,w),Ww(),b.state=g.memoizedState),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&_v)!==Fr&&(g.flags|=134217728),b=!0}else if(r===null){b=g.stateNode;var I=g.memoizedProps;q=jl(v,I),b.props=q;var B=b.context;R=v.contextType,H=f1,typeof R==="object"&&R!==null&&(H=Fg(R)),X=v.getDerivedStateFromProps,R=typeof X==="function"||typeof b.getSnapshotBeforeUpdate==="function",I=g.pendingProps!==I,R||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(I||B!==H)&&GM(g,b,l,H),vl=!1;var $=g.memoizedState;b.state=$,Rw(g,l,b,w),Ww(),B=g.memoizedState,I||$!==B||vl?(typeof X==="function"&&(_8(g,v,X,l),B=g.memoizedState),(q=vl||RM(g,v,q,l,$,B,H))?(R||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&_v)!==Fr&&(g.flags|=134217728)):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&_v)!==Fr&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=B),b.props=l,b.state=B,b.context=H,b=q):(typeof b.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&_v)!==Fr&&(g.flags|=134217728),b=!1)}else{b=g.stateNode,A8(r,g),H=g.memoizedProps,R=jl(v,H),b.props=R,X=g.pendingProps,$=b.context,B=v.contextType,q=f1,typeof B==="object"&&B!==null&&(q=Fg(B)),I=v.getDerivedStateFromProps,(B=typeof I==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(H!==X||$!==q)&&GM(g,b,l,q),vl=!1,$=g.memoizedState,b.state=$,Rw(g,l,b,w),Ww();var x=g.memoizedState;H!==X||$!==x||vl||r!==null&&r.dependencies!==null&&g4(r.dependencies)?(typeof I==="function"&&(_8(g,v,I,l),x=g.memoizedState),(R=vl||RM(g,v,R,l,$,x,q)||r!==null&&r.dependencies!==null&&g4(r.dependencies))?(B||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(l,x,q),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(l,x,q)),typeof b.componentDidUpdate==="function"&&(g.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof b.componentDidUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=x),b.props=l,b.state=x,b.context=q,b=R):(typeof b.componentDidUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||H===r.memoizedProps&&$===r.memoizedState||(g.flags|=1024),b=!1)}if(q=b,L4(r,g),H=(g.flags&128)!==0,q||H){if(q=g.stateNode,_0(g),H&&typeof v.getDerivedStateFromError!=="function")v=null,m0=-1;else if(v=Z7(q),g.mode&L0){Jg(!0);try{Z7(q)}finally{Jg(!1)}}g.flags|=1,r!==null&&H?(g.child=bh(g,r.child,null,w),g.child=bh(g,null,v,w)):M0(r,g,v,w),g.memoizedState=q.state,r=g.child}else r=jo(r,g,w);return w=g.stateNode,b&&w.props!==l&&(L5||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",i(g)||"a component"),L5=!0),r}function BM(r,g,v,l){return tl(),g.flags|=256,M0(r,g,v,l),g.child}function f8(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=V(g)||"Unknown",R3[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),R3[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=V(g)||"Unknown",M3[g]||(console.error("%s: Function components do not support contextType.",g),M3[g]=!0))}function p8(r){return{baseLanes:r,cachePool:FA()}}function a8(r,g,v){return r=r!==null?r.childLanes&~v:0,g&&(r|=a0),r}function NM(r,g,v){var l,w=g.pendingProps;A(g)&&(g.flags|=128);var b=!1,H=(g.flags&128)!==0;if((l=H)||(l=r!==null&&r.memoizedState===null?!1:(tg.current&Hb)!==0),l&&(b=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(ar){if(b?m1(g):S1(g),(r=Ug)?(v=d9(r,Bv),v=v!==null&&v.data!==Wh?v:null,v!==null&&(l={dehydrated:v,treeContext:YA(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GA(v),l.return=g,g.child=l,G0=g,Ug=null)):v=null,v===null)throw s2(g,r),N1(g);return BO(v)?g.lanes=32:g.lanes=536870912,null}var q=w.children;if(w=w.fallback,b){S1(g);var R=g.mode;return q=F4({mode:"hidden",children:q},R),w=nl(w,R,v,null),q.return=g,w.return=g,q.sibling=w,g.child=q,w=g.child,w.memoizedState=p8(v),w.childLanes=a8(r,l,v),g.memoizedState=DH,Jw(null,w)}return m1(g),d8(g,q)}var X=r.memoizedState;if(X!==null){var I=X.dehydrated;if(I!==null){if(H)g.flags&256?(m1(g),g.flags&=-257,g=s8(r,g,v)):g.memoizedState!==null?(S1(g),g.child=r.child,g.flags|=128,g=null):(S1(g),q=w.fallback,R=g.mode,w=F4({mode:"visible",children:w.children},R),q=nl(q,R,v,null),q.flags|=2,w.return=g,q.return=g,w.sibling=q,g.child=w,bh(g,r.child,null,v),w=g.child,w.memoizedState=p8(v),w.childLanes=a8(r,l,v),g.memoizedState=DH,g=Jw(null,w));else if(m1(g),QA(),(v&536870912)!==0&&x4(g),BO(I)){if(l=I.nextSibling&&I.nextSibling.dataset,l){q=l.dgst;var B=l.msg;R=l.stck;var $=l.cstck}b=B,l=q,w=R,I=$,q=b,R=I,q=q?Error(q):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),q.stack=w||"",q.digest=l,l=R===void 0?null:R,w={value:q,source:null,stack:l},typeof l==="string"&&JH.set(q,w),Ow(w),g=s8(r,g,v)}else if(ag||nh(r,g,v,!1),l=(v&r.childLanes)!==0,ag||l){if(l=Xg,l!==null&&(w=Tl(l,v),w!==0&&w!==X.retryLane))throw X.retryLane=w,$0(r,w),Tg(l,r,w),nH;IO(I)||T4(),g=s8(r,g,v)}else IO(I)?(g.flags|=192,g.child=r.child,g=null):(r=X.treeContext,Ug=uv(I.nextSibling),G0=g,ar=!0,p1=null,Io=!1,qv=null,Bv=!1,r!==null&&JA(g,r),g=d8(g,w.children),g.flags|=4096);return g}}if(b)return S1(g),q=w.fallback,R=g.mode,$=r.child,I=$.sibling,w=_o($,{mode:"hidden",children:w.children}),w.subtreeFlags=$.subtreeFlags&65011712,I!==null?q=_o(I,q):(q=nl(q,R,v,null),q.flags|=2),q.return=g,w.return=g,w.sibling=q,g.child=w,Jw(null,w),w=g.child,q=r.child.memoizedState,q===null?q=p8(v):(R=q.cachePool,R!==null?($=jg._currentValue,R=R.parent!==$?{parent:$,pool:$}:R):R=FA(),q={baseLanes:q.baseLanes|v,cachePool:R}),w.memoizedState=q,w.childLanes=a8(r,l,v),g.memoizedState=DH,Jw(r.child,w);return X!==null&&(v&62914560)===v&&(v&r.lanes)!==0&&x4(g),m1(g),v=r.child,r=v.sibling,v=_o(v,{mode:"visible",children:w.children}),v.return=g,v.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=v,g.memoizedState=null,v}function d8(r,g){return g=F4({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function F4(r,g){return r=K(22,r,null,g),r.lanes=0,r}function s8(r,g,v){return bh(g,r.child,null,v),r=d8(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function ZM(r,g,v){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),h8(r.return,g,v)}function rO(r,g,v,l,w,b){var H=r.memoizedState;H===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:v,tailMode:w,treeForkCount:b}:(H.isBackwards=g,H.rendering=null,H.renderingStartTime=0,H.last=l,H.tail=v,H.tailMode=w,H.treeForkCount=b)}function xM(r,g,v){var l=g.pendingProps,w=l.revealOrder,b=l.tail,H=l.children,q=tg.current;if((l=(q&Hb)!==0)?(q=q&K5|Hb,g.flags|=128):q&=K5,zr(tg,q,g),q=w==null?"null":w,w!=="forwards"&&w!=="unstable_legacy-backwards"&&w!=="together"&&w!=="independent"&&!G3[q])if(G3[q]=!0,w==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(w==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof w==="string")switch(w.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',w,w.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',w,w.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',w)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',w);if(q=b==null?"null":b,!U6[q])if(b==null){if(w==="forwards"||w==="backwards"||w==="unstable_legacy-backwards")U6[q]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(U6[q]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):w!=="forwards"&&w!=="backwards"&&w!=="unstable_legacy-backwards"&&(U6[q]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));r:if((w==="forwards"||w==="backwards"||w==="unstable_legacy-backwards")&&H!==void 0&&H!==null&&H!==!1)if(v0(H)){for(q=0;q<H.length;q++)if(!iA(H[q],q))break r}else if(q=m(H),typeof q==="function"){if(q=q.call(H))for(var R=q.next(),X=0;!R.done;R=q.next()){if(!iA(R.value,X))break r;X++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',w);if(M0(r,g,H,v),ar?(B1(),H=fw):H=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ZM(r,v,g);else if(r.tag===19)ZM(r,v,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(w){case"forwards":v=g.child;for(w=null;v!==null;)r=v.alternate,r!==null&&q4(r)===null&&(w=v),v=v.sibling;v=w,v===null?(w=g.child,g.child=null):(w=v.sibling,v.sibling=null),rO(g,!1,w,v,b,H);break;case"backwards":case"unstable_legacy-backwards":v=null,w=g.child;for(g.child=null;w!==null;){if(r=w.alternate,r!==null&&q4(r)===null){g.child=w;break}r=w.sibling,w.sibling=v,v=w,w=r}rO(g,!0,v,null,b,H);break;case"together":rO(g,!1,null,null,void 0,H);break;default:g.memoizedState=null}return g.child}function jo(r,g,v){if(r!==null&&(g.dependencies=r.dependencies),m0=-1,hl|=g.lanes,(v&g.childLanes)===0)if(r!==null){if(nh(r,g,v,!1),(v&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,v=_o(r,r.pendingProps),g.child=v;for(v.return=g;r.sibling!==null;)r=r.sibling,v=v.sibling=_o(r,r.pendingProps),v.return=g;v.sibling=null}return g.child}function gO(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&g4(r)?!0:!1}function Rz(r,g,v){switch(g.tag){case 3:D(g,g.stateNode.containerInfo),Z1(g,jg,r.memoizedState.cache),tl();break;case 27:case 5:vr(g);break;case 4:D(g,g.stateNode.containerInfo);break;case 10:Z1(g,g.type,g.memoizedProps.value);break;case 12:(v&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,R8(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return m1(g),g.flags|=128,null;if((v&g.child.childLanes)!==0)return NM(r,g,v);return m1(g),r=jo(r,g,v),r!==null?r.sibling:null}m1(g);break;case 19:var w=(r.flags&128)!==0;if(l=(v&g.childLanes)!==0,l||(nh(r,g,v,!1),l=(v&g.childLanes)!==0),w){if(l)return xM(r,g,v);g.flags|=128}if(w=g.memoizedState,w!==null&&(w.rendering=null,w.tail=null,w.lastEffect=null),zr(tg,tg.current,g),l)break;else return null;case 22:return g.lanes=0,$M(r,g,v,g.pendingProps);case 24:Z1(g,jg,r.memoizedState.cache)}return jo(r,g,v)}function vO(r,g,v){if(g._debugNeedsRemount&&r!==null){v=du(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),v._debugStack=g._debugStack,v._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,v.index=g.index,v.sibling=g.sibling,v.return=g.return,v.ref=g.ref,v._debugInfo=g._debugInfo,g===l.child)l.child=v;else{var w=l.child;if(w===null)throw Error("Expected parent to have a child.");for(;w.sibling!==g;)if(w=w.sibling,w===null)throw Error("Expected to find the previous sibling.");w.sibling=v}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),v.flags|=2,v}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)ag=!0;else{if(!gO(r,v)&&(g.flags&128)===0)return ag=!1,Rz(r,g,v);ag=(r.flags&131072)!==0?!0:!1}else{if(ag=!1,l=ar)B1(),l=(g.flags&1048576)!==0;l&&(l=g.index,B1(),XA(g,fw,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=x1(g.elementType),g.type=r,typeof r==="function")au(r)?(l=jl(r,l),g.tag=1,g.type=r=kl(r),g=IM(null,g,r,l,v)):(g.tag=0,f8(g,r),g.type=r=kl(r),g=j8(null,g,r,l,v));else{if(r!==void 0&&r!==null){if(w=r.$$typeof,w===mw){g.tag=11,g.type=r=pu(r),g=zM(null,g,r,l,v);break r}else if(w===j4){g.tag=14,g=KM(null,g,r,l,v);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===Ov&&(g=" Did you wrap a component in React.lazy() more than once?"),v=V(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+v+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return j8(r,g,g.type,g.pendingProps,v);case 1:return l=g.type,w=jl(l,g.pendingProps),IM(r,g,l,w,v);case 3:r:{if(D(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var b=g.memoizedState;w=b.element,A8(r,g),Rw(g,l,null,v);var H=g.memoizedState;if(l=H.cache,Z1(g,jg,l),l!==b.cache&&w8(g,[jg],v,!0),Ww(),l=H.element,b.isDehydrated)if(b={element:l,isDehydrated:!1,cache:H.cache},g.updateQueue.baseState=b,g.memoizedState=b,g.flags&256){g=BM(r,g,l,v);break r}else if(l!==w){w=ov(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),Ow(w),g=BM(r,g,l,v);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Ug=uv(r.firstChild),G0=g,ar=!0,p1=null,Io=!1,qv=null,Bv=!0,v=y7(g,null,l,v);for(g.child=v;v;)v.flags=v.flags&-3|4096,v=v.sibling}else{if(tl(),l===w){g=jo(r,g,v);break r}M0(r,g,l,v)}g=g.child}return g;case 26:return L4(r,g),r===null?(v=lW(g.type,null,g.pendingProps,null))?g.memoizedState=v:ar||(v=g.type,r=g.pendingProps,l=mr(V1.current),l=i4(l).createElement(v),l[R0]=g,l[x0]=r,W0(l,v,r),$r(l),g.stateNode=l):g.memoizedState=lW(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return vr(g),r===null&&ar&&(l=mr(V1.current),w=hr(),l=g.stateNode=vW(g.type,g.pendingProps,l,w,!1),Io||(w=_9(l,g.type,g.pendingProps,w),w!==null&&(Dl(g,0).serverProps=w)),G0=g,Bv=!0,w=Ug,D1(g.type)?(HP=w,Ug=uv(l.firstChild)):Ug=w),M0(r,g,g.pendingProps.children,v),L4(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&ar&&(b=hr(),l=tu(g.type,b.ancestorInfo),w=Ug,(H=!w)||(H=lK(w,g.type,g.pendingProps,Bv),H!==null?(g.stateNode=H,Io||(b=_9(H,g.type,g.pendingProps,b),b!==null&&(Dl(g,0).serverProps=b)),G0=g,Ug=uv(H.firstChild),Bv=!1,b=!0):b=!1,H=!b),H&&(l&&s2(g,w),N1(g))),vr(g),w=g.type,b=g.pendingProps,H=r!==null?r.memoizedProps:null,l=b.children,LO(w,b)?l=null:H!==null&&LO(w,H)&&(g.flags|=32),g.memoizedState!==null&&(w=X8(r,g,uz,null,null,v),Fb._currentValue=w),L4(r,g),M0(r,g,l,v),g.child;case 6:return r===null&&ar&&(v=g.pendingProps,r=hr(),l=r.ancestorInfo.current,v=l!=null?V2(v,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Ug,(l=!r)||(l=hK(r,g.pendingProps,Bv),l!==null?(g.stateNode=l,G0=g,Ug=null,l=!0):l=!1,l=!l),l&&(v&&s2(g,r),N1(g))),null;case 13:return NM(r,g,v);case 4:return D(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=bh(g,null,l,v):M0(r,g,l,v),g.child;case 11:return zM(r,g,g.type,g.pendingProps,v);case 7:return M0(r,g,g.pendingProps,v),g.child;case 8:return M0(r,g,g.pendingProps.children,v),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,M0(r,g,g.pendingProps.children,v),g.child;case 10:return l=g.type,w=g.pendingProps,b=w.value,"value"in w||X3||(X3=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Z1(g,l,b),M0(r,g,w.children,v),g.child;case 9:return w=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Vl(g),w=Fg(w),l=FH(l,w,void 0),g.flags|=1,M0(r,g,l,v),g.child;case 14:return KM(r,g,g.type,g.pendingProps,v);case 15:return eM(r,g,g.type,g.pendingProps,v);case 19:return xM(r,g,v);case 31:return Wz(r,g,v);case 22:return $M(r,g,v,g.pendingProps);case 24:return Vl(g),l=Fg(jg),r===null?(w=H8(),w===null&&(w=Xg,b=b8(),w.pooledCache=b,_l(b),b!==null&&(w.pooledCacheLanes|=v),w=b),g.memoizedState={parent:l,cache:w},q8(g),Z1(g,jg,w)):((r.lanes&v)!==0&&(A8(r,g),Rw(g,null,null,v),Ww()),w=r.memoizedState,b=g.memoizedState,w.parent!==l?(w={parent:l,cache:l},g.memoizedState=w,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=w),Z1(g,jg,l)):(l=b.cache,Z1(g,jg,l),l!==w.cache&&w8(g,[jg],v,!0))),M0(r,g,g.pendingProps.children,v),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function fo(r){r.flags|=4}function oO(r,g,v,l,w){if(g=(r.mode&me)!==Fr)g=!1;if(g){if(r.flags|=16777216,(w&335544128)===w)if(r.stateNode.complete)r.flags|=8192;else if(q9())r.flags|=8192;else throw wh=J6,BH}else r.flags&=-16777217}function TM(r,g){if(g.type!=="stylesheet"||(g.state.loading&Cv)!==Xh)r.flags&=-16777217;else if(r.flags|=16777216,!OW(g))if(q9())r.flags|=8192;else throw wh=J6,BH}function I4(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?Th():536870912,r.lanes|=g,qh|=g)}function Qw(r,g){if(!ar)switch(r.tailMode){case"hidden":g=r.tail;for(var v=null;g!==null;)g.alternate!==null&&(v=g),g=g.sibling;v===null?r.tail=null:v.sibling=null;break;case"collapsed":v=r.tail;for(var l=null;v!==null;)v.alternate!==null&&(l=v),v=v.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function Qg(r){var g=r.alternate!==null&&r.alternate.child===r.child,v=0,l=0;if(g)if((r.mode&Dr)!==Fr){for(var{selfBaseDuration:w,child:b}=r;b!==null;)v|=b.lanes|b.childLanes,l|=b.subtreeFlags&65011712,l|=b.flags&65011712,w+=b.treeBaseDuration,b=b.sibling;r.treeBaseDuration=w}else for(w=r.child;w!==null;)v|=w.lanes|w.childLanes,l|=w.subtreeFlags&65011712,l|=w.flags&65011712,w.return=r,w=w.sibling;else if((r.mode&Dr)!==Fr){w=r.actualDuration,b=r.selfBaseDuration;for(var H=r.child;H!==null;)v|=H.lanes|H.childLanes,l|=H.subtreeFlags,l|=H.flags,w+=H.actualDuration,b+=H.treeBaseDuration,H=H.sibling;r.actualDuration=w,r.treeBaseDuration=b}else for(w=r.child;w!==null;)v|=w.lanes|w.childLanes,l|=w.subtreeFlags,l|=w.flags,w.return=r,w=w.sibling;return r.subtreeFlags|=l,r.childLanes=v,g}function Gz(r,g,v){var l=g.pendingProps;switch(v8(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qg(g),null;case 1:return Qg(g),null;case 3:if(v=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),yo(jg,g),d(g),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),r===null||r.child===null)kh(g)?(l8(),fo(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,o8());return Qg(g),null;case 26:var{type:w,memoizedState:b}=g;return r===null?(fo(g),b!==null?(Qg(g),TM(g,b)):(Qg(g),oO(g,w,null,l,v))):b?b!==r.memoizedState?(fo(g),Qg(g),TM(g,b)):(Qg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&fo(g),Qg(g),oO(g,w,r,l,v)),null;case 27:if(Rr(g),v=mr(V1.current),w=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&fo(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Qg(g),null}r=hr(),kh(g)?zA(g,r):(r=vW(w,l,v,r,!0),g.stateNode=r,fo(g))}return Qg(g),null;case 5:if(Rr(g),w=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&fo(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Qg(g),null}var H=hr();if(kh(g))zA(g,H);else{switch(b=mr(V1.current),tu(w,H.ancestorInfo),H=H.context,b=i4(b),H){case C5:b=b.createElementNS(h5,w);break;case y6:b=b.createElementNS(g6,w);break;default:switch(w){case"svg":b=b.createElementNS(h5,w);break;case"math":b=b.createElementNS(g6,w);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof l.is==="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?b.multiple=!0:l.size&&(b.size=l.size);break;default:b=typeof l.is==="string"?b.createElement(w,{is:l.is}):b.createElement(w),w.indexOf("-")===-1&&(w!==w.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",w),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||tv.call(t3,w)||(t3[w]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",w)))}}b[R0]=g,b[x0]=l;r:for(H=g.child;H!==null;){if(H.tag===5||H.tag===6)b.appendChild(H.stateNode);else if(H.tag!==4&&H.tag!==27&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===g)break r;for(;H.sibling===null;){if(H.return===null||H.return===g)break r;H=H.return}H.sibling.return=H.return,H=H.sibling}g.stateNode=b;r:switch(W0(b,w,l),w){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&fo(g)}}return Qg(g),oO(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,v),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&fo(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=mr(V1.current),v=hr(),kh(g)){if(r=g.stateNode,v=g.memoizedProps,w=!Io,l=null,b=G0,b!==null)switch(b.tag){case 3:w&&(w=rW(r,v,l),w!==null&&(Dl(g,0).serverProps=w));break;case 27:case 5:l=b.memoizedProps,w&&(w=rW(r,v,l),w!==null&&(Dl(g,0).serverProps=w))}r[R0]=g,r=r.nodeValue===v||l!==null&&l.suppressHydrationWarning===!0||k9(r.nodeValue,v)?!0:!1,r||N1(g,!0)}else w=v.ancestorInfo.current,w!=null&&V2(l,w.tag,v.ancestorInfo.implicitRootScope),r=i4(r).createTextNode(l),r[R0]=g,g.stateNode=r}return Qg(g),null;case 31:if(v=g.memoizedState,r===null||r.memoizedState!==null){if(l=kh(g),v!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[R0]=g,Qg(g),(g.mode&Dr)!==Fr&&v!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else l8(),tl(),(g.flags&128)===0&&(v=g.memoizedState=null),g.flags|=4,Qg(g),(g.mode&Dr)!==Fr&&v!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else v=o8(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=v),r=!0;if(!r){if(g.flags&256)return wv(g),g;return wv(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Qg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(w=l,b=kh(g),w!==null&&w.dehydrated!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=g.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[R0]=g,Qg(g),(g.mode&Dr)!==Fr&&w!==null&&(w=g.child,w!==null&&(g.treeBaseDuration-=w.treeBaseDuration))}else l8(),tl(),(g.flags&128)===0&&(w=g.memoizedState=null),g.flags|=4,Qg(g),(g.mode&Dr)!==Fr&&w!==null&&(w=g.child,w!==null&&(g.treeBaseDuration-=w.treeBaseDuration));w=!1}else w=o8(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=w),w=!0;if(!w){if(g.flags&256)return wv(g),g;return wv(g),null}}if(wv(g),(g.flags&128)!==0)return g.lanes=v,(g.mode&Dr)!==Fr&&qw(g),g;return v=l!==null,r=r!==null&&r.memoizedState!==null,v&&(l=g.child,w=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(w=l.alternate.memoizedState.cachePool.pool),b=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(b=l.memoizedState.cachePool.pool),b!==w&&(l.flags|=2048)),v!==r&&v&&(g.child.flags|=8192),I4(g,g.updateQueue),Qg(g),(g.mode&Dr)!==Fr&&v&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return d(g),r===null&&JO(g.stateNode.containerInfo),Qg(g),null;case 10:return yo(g.type,g),Qg(g),null;case 19:if(Gr(tg,g),l=g.memoizedState,l===null)return Qg(g),null;if(w=(g.flags&128)!==0,b=l.rendering,b===null)if(w)Qw(l,!1);else{if(Zg!==P1||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(b=q4(r),b!==null){g.flags|=128,Qw(l,!1),r=b.updateQueue,g.updateQueue=r,I4(g,r),g.subtreeFlags=0,r=v;for(v=g.child;v!==null;)RA(v,r),v=v.sibling;return zr(tg,tg.current&K5|Hb,g),ar&&Eo(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&w0()>x6&&(g.flags|=128,w=!0,Qw(l,!1),g.lanes=4194304)}else{if(!w)if(r=q4(b),r!==null){if(g.flags|=128,w=!0,r=r.updateQueue,g.updateQueue=r,I4(g,r),Qw(l,!0),l.tail===null&&l.tailMode==="hidden"&&!b.alternate&&!ar)return Qg(g),null}else 2*w0()-l.renderingStartTime>x6&&v!==536870912&&(g.flags|=128,w=!0,Qw(l,!1),g.lanes=4194304);l.isBackwards?(b.sibling=g.child,g.child=b):(r=l.last,r!==null?r.sibling=b:g.child=b,l.last=b)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=w0(),r.sibling=null,v=tg.current,v=w?v&K5|Hb:v&K5,zr(tg,v,g),ar&&Eo(g,l.treeForkCount),r;return Qg(g),null;case 22:case 23:return wv(g),W8(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(v&536870912)!==0&&(g.flags&128)===0&&(Qg(g),g.subtreeFlags&6&&(g.flags|=8192)):Qg(g),v=g.updateQueue,v!==null&&I4(g,v.retryQueue),v=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(v=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==v&&(g.flags|=2048),r!==null&&Gr(lh,g),null;case 24:return v=null,r!==null&&(v=r.memoizedState.cache),g.memoizedState.cache!==v&&(g.flags|=2048),yo(jg,g),Qg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Xz(r,g){switch(v8(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 3:return yo(jg,g),d(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Rr(g),null;case 31:if(g.memoizedState!==null){if(wv(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");tl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 13:if(wv(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");tl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 19:return Gr(tg,g),null;case 4:return d(g),null;case 10:return yo(g.type,g),null;case 22:case 23:return wv(g),W8(g),r!==null&&Gr(lh,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&Dr)!==Fr&&qw(g),g):null;case 24:return yo(jg,g),null;case 25:return null;default:return null}}function CM(r,g){switch(v8(g),g.tag){case 3:yo(jg,g),d(g);break;case 26:case 27:case 5:Rr(g);break;case 4:d(g);break;case 31:g.memoizedState!==null&&wv(g);break;case 13:wv(g);break;case 19:Gr(tg,g);break;case 10:yo(g.type,g);break;case 22:case 23:wv(g),W8(g),r!==null&&Gr(lh,g);break;case 24:yo(jg,g)}}function Ro(r){return(r.mode&Dr)!==Fr}function mM(r,g){Ro(r)?(Wo(),zw(g,r),Mo()):zw(g,r)}function lO(r,g,v){Ro(r)?(Wo(),Eh(v,r,g),Mo()):Eh(v,r,g)}function zw(r,g){try{var v=g.updateQueue,l=v!==null?v.lastEffect:null;if(l!==null){var w=l.next;v=w;do{if((v.tag&r)===r&&(l=void 0,(r&S0)!==z6&&(Z5=!0),l=ur(g,De,v),(r&S0)!==z6&&(Z5=!1),l!==void 0&&typeof l!=="function")){var b=void 0;b=(v.tag&Mv)!==0?"useLayoutEffect":(v.tag&S0)!==0?"useInsertionEffect":"useEffect";var H=void 0;H=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,ur(g,function(q,R){console.error("%s must not return anything besides a function, which is used for clean-up.%s",q,R)},b,H)}v=v.next}while(v!==w)}}catch(q){bg(g,g.return,q)}}function Eh(r,g,v){try{var l=g.updateQueue,w=l!==null?l.lastEffect:null;if(w!==null){var b=w.next;l=b;do{if((l.tag&r)===r){var H=l.inst,q=H.destroy;q!==void 0&&(H.destroy=void 0,(r&S0)!==z6&&(Z5=!0),w=g,ur(w,te,w,v,q),(r&S0)!==z6&&(Z5=!1))}l=l.next}while(l!==b)}}catch(R){bg(g,g.return,R)}}function SM(r,g){Ro(r)?(Wo(),zw(g,r),Mo()):zw(g,r)}function hO(r,g,v){Ro(r)?(Wo(),Eh(v,r,g),Mo()):Eh(v,r,g)}function iM(r){var g=r.updateQueue;if(g!==null){var v=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||L5||(v.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",i(r)||"instance"),v.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",i(r)||"instance"));try{ur(r,nA,g,v)}catch(l){bg(r,r.return,l)}}}function Yz(r,g,v){return r.getSnapshotBeforeUpdate(g,v)}function Jz(r,g){var{memoizedProps:v,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||L5||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",i(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",i(r)||"instance"));try{var w=jl(r.type,v),b=ur(r,Yz,g,w,l);v=Y3,b!==void 0||v.has(r.type)||(v.add(r.type),ur(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",i(r))})),g.__reactInternalSnapshotBeforeUpdate=b}catch(H){bg(r,r.return,H)}}function kM(r,g,v){v.props=jl(r.type,r.memoizedProps),v.state=r.memoizedState,Ro(r)?(Wo(),ur(r,i7,r,g,v),Mo()):ur(r,i7,r,g,v)}function Qz(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var v=r.stateNode;break;case 30:v=r.stateNode;break;default:v=r.stateNode}if(typeof g==="function")if(Ro(r))try{Wo(),r.refCleanup=g(v)}finally{Mo()}else r.refCleanup=g(v);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",i(r)),g.current=v}}function Kw(r,g){try{ur(r,Qz,r)}catch(v){bg(r,g,v)}}function Go(r,g){var{ref:v,refCleanup:l}=r;if(v!==null)if(typeof l==="function")try{if(Ro(r))try{Wo(),ur(r,l)}finally{Mo(r)}else ur(r,l)}catch(w){bg(r,g,w)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof v==="function")try{if(Ro(r))try{Wo(),ur(r,v,null)}finally{Mo(r)}else ur(r,v,null)}catch(w){bg(r,g,w)}else v.current=null}function nM(r,g,v,l){var w=r.memoizedProps,b=w.id,H=w.onCommit;w=w.onRender,g=g===null?"mount":"update",R6&&(g="nested-update"),typeof w==="function"&&w(b,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,v),typeof H==="function"&&H(b,g,l,v)}function zz(r,g,v,l){var w=r.memoizedProps;r=w.id,w=w.onPostCommit,g=g===null?"mount":"update",R6&&(g="nested-update"),typeof w==="function"&&w(r,g,l,v)}function DM(r){var{type:g,memoizedProps:v,stateNode:l}=r;try{ur(r,yz,l,g,v,r)}catch(w){bg(r,r.return,w)}}function wO(r,g,v){try{ur(r,jz,r.stateNode,r.type,v,g,r)}catch(l){bg(r,r.return,l)}}function tM(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&D1(r.type)||r.tag===4}function bO(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||tM(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&D1(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function uO(r,g,v){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(f9(v),(v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v).insertBefore(r,g)):(f9(v),g=v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v,g.appendChild(r),v=v._reactRootContainer,v!==null&&v!==void 0||g.onclick!==null||(g.onclick=Vo));else if(l!==4&&(l===27&&D1(r.type)&&(v=r.stateNode,g=null),r=r.child,r!==null))for(uO(r,g,v),r=r.sibling;r!==null;)uO(r,g,v),r=r.sibling}function B4(r,g,v){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?v.insertBefore(r,g):v.appendChild(r);else if(l!==4&&(l===27&&D1(r.type)&&(v=r.stateNode),r=r.child,r!==null))for(B4(r,g,v),r=r.sibling;r!==null;)B4(r,g,v),r=r.sibling}function Kz(r){for(var g,v=r.return;v!==null;){if(tM(v)){g=v;break}v=v.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,v=bO(r),B4(r,v,g);break;case 5:v=g.stateNode,g.flags&32&&(j9(v),g.flags&=-33),g=bO(r),B4(r,g,v);break;case 3:case 4:g=g.stateNode.containerInfo,v=bO(r),uO(r,v,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function VM(r){var{stateNode:g,memoizedProps:v}=r;try{ur(r,HK,r.type,v,g,r)}catch(l){bg(r,r.return,l)}}function _M(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function ez(r,g){if(r=r.containerInfo,bP=p6,r=wA(r),Eu(r)){if("selectionStart"in r)var v={start:r.selectionStart,end:r.selectionEnd};else r:{v=(v=r.ownerDocument)&&v.defaultView||window;var l=v.getSelection&&v.getSelection();if(l&&l.rangeCount!==0){v=l.anchorNode;var{anchorOffset:w,focusNode:b}=l;l=l.focusOffset;try{v.nodeType,b.nodeType}catch(wr){v=null;break r}var H=0,q=-1,R=-1,X=0,I=0,B=r,$=null;g:for(;;){for(var x;;){if(B!==v||w!==0&&B.nodeType!==3||(q=H+w),B!==b||l!==0&&B.nodeType!==3||(R=H+l),B.nodeType===3&&(H+=B.nodeValue.length),(x=B.firstChild)===null)break;$=B,B=x}for(;;){if(B===r)break g;if($===v&&++X===w&&(q=H),$===b&&++I===l&&(R=H),(x=B.nextSibling)!==null)break;B=$,$=B.parentNode}B=x}v=q===-1||R===-1?null:{start:q,end:R}}else v=null}v=v||{start:0,end:0}}else v=null;uP={focusedElem:r,selectionRange:v},p6=!1;for(u0=g;u0!==null;)if(g=u0,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,u0=r;else for(;u0!==null;){switch(r=g=u0,v=r.alternate,w=r.flags,r.tag){case 0:if((w&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(v=0;v<r.length;v++)w=r[v],w.ref.impl=w.nextImpl;break;case 11:case 15:break;case 1:(w&1024)!==0&&v!==null&&Jz(r,v);break;case 3:if((w&1024)!==0){if(r=r.stateNode.containerInfo,v=r.nodeType,v===9)FO(r);else if(v===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":FO(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((w&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,u0=r;break}u0=g.return}}function EM(r,g,v){var l=lv(),w=Ho(),b=qo(),H=Ao(),q=v.flags;switch(v.tag){case 0:case 11:case 15:Xo(r,v),q&4&&mM(v,Mv|xv);break;case 1:if(Xo(r,v),q&4)if(r=v.stateNode,g===null)v.type.defaultProps||"ref"in v.memoizedProps||L5||(r.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",i(v)||"instance"),r.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",i(v)||"instance")),Ro(v)?(Wo(),ur(v,IH,v,r),Mo()):ur(v,IH,v,r);else{var R=jl(v.type,g.memoizedProps);g=g.memoizedState,v.type.defaultProps||"ref"in v.memoizedProps||L5||(r.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",i(v)||"instance"),r.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",i(v)||"instance")),Ro(v)?(Wo(),ur(v,C7,v,r,R,g,r.__reactInternalSnapshotBeforeUpdate),Mo()):ur(v,C7,v,r,R,g,r.__reactInternalSnapshotBeforeUpdate)}q&64&&iM(v),q&512&&Kw(v,v.return);break;case 3:if(g=co(),Xo(r,v),q&64&&(q=v.updateQueue,q!==null)){if(R=null,v.child!==null)switch(v.child.tag){case 27:case 5:R=v.child.stateNode;break;case 1:R=v.child.stateNode}try{ur(v,nA,q,R)}catch(I){bg(v,v.return,I)}}r.effectDuration+=o4(g);break;case 27:g===null&&q&4&&VM(v);case 26:case 5:if(Xo(r,v),g===null){if(q&4)DM(v);else if(q&64){r=v.type,g=v.memoizedProps,R=v.stateNode;try{ur(v,cz,R,r,g,v)}catch(I){bg(v,v.return,I)}}}q&512&&Kw(v,v.return);break;case 12:if(q&4){q=co(),Xo(r,v),r=v.stateNode,r.effectDuration+=Pw(q);try{ur(v,nM,v,g,a1,r.effectDuration)}catch(I){bg(v,v.return,I)}}else Xo(r,v);break;case 31:Xo(r,v),q&4&&jM(r,v);break;case 13:Xo(r,v),q&4&&fM(r,v),q&64&&(r=v.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(q=xz.bind(null,v),wK(r,q))));break;case 22:if(q=v.memoizedState!==null||H1,!q){g=g!==null&&g.memoizedState!==null||dg,R=H1;var X=dg;H1=q,(dg=g)&&!X?(Yo(r,v,(v.subtreeFlags&8772)!==0),(v.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(v,Ur,Lr)):Xo(r,v),H1=R,dg=X}break;case 30:break;default:Xo(r,v)}(v.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&((Cg||0.05<Ng)&&uo(v,Ur,Lr,Ng,Ig),v.alternate===null&&v.return!==null&&v.return.alternate!==null&&0.05<Lr-Ur&&(_M(v.return.alternate,v.return)||bo(v,Ur,Lr,"Mount"))),hv(l),Po(w),Ig=b,Cg=H}function yM(r){var g=r.alternate;g!==null&&(r.alternate=null,yM(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&Or(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function po(r,g,v){for(v=v.child;v!==null;)cM(r,g,v),v=v.sibling}function cM(r,g,v){if(U0&&typeof U0.onCommitFiberUnmount==="function")try{U0.onCommitFiberUnmount(o5,v)}catch(X){$o||($o=!0,console.error("React instrumentation encountered an error: %o",X))}var l=lv(),w=Ho(),b=qo(),H=Ao();switch(v.tag){case 26:dg||Go(v,g),po(r,g,v),v.memoizedState?v.memoizedState.count--:v.stateNode&&(r=v.stateNode,r.parentNode.removeChild(r));break;case 27:dg||Go(v,g);var q=sg,R=f0;D1(v.type)&&(sg=v.stateNode,f0=!1),po(r,g,v),ur(v,Zw,v.stateNode),sg=q,f0=R;break;case 5:dg||Go(v,g);case 6:if(q=sg,R=f0,sg=null,po(r,g,v),sg=q,f0=R,sg!==null)if(f0)try{ur(v,az,sg,v.stateNode)}catch(X){bg(v,g,X)}else try{ur(v,pz,sg,v.stateNode)}catch(X){bg(v,g,X)}break;case 18:sg!==null&&(f0?(r=sg,p9(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,v.stateNode),sh(r)):p9(sg,v.stateNode));break;case 4:q=sg,R=f0,sg=v.stateNode.containerInfo,f0=!0,po(r,g,v),sg=q,f0=R;break;case 0:case 11:case 14:case 15:Eh(S0,v,g),dg||lO(v,g,Mv),po(r,g,v);break;case 1:dg||(Go(v,g),q=v.stateNode,typeof q.componentWillUnmount==="function"&&kM(v,g,q)),po(r,g,v);break;case 21:po(r,g,v);break;case 22:dg=(q=dg)||v.memoizedState!==null,po(r,g,v),dg=q;break;default:po(r,g,v)}(v.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(v,Ur,Lr,Ng,Ig),hv(l),Po(w),Ig=b,Cg=H}function jM(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{ur(g,uK,r)}catch(v){bg(g,g.return,v)}}}function fM(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ur(g,OK,r)}catch(v){bg(g,g.return,v)}}function $z(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new J3),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new J3),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function N4(r,g){var v=$z(r);g.forEach(function(l){if(!v.has(l)){if(v.add(l),Uo)if(F5!==null&&I5!==null)Lw(I5,F5);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var w=Tz.bind(null,r,l);l.then(w,w)}})}function c0(r,g){var v=g.deletions;if(v!==null)for(var l=0;l<v.length;l++){var w=r,b=g,H=v[l],q=lv(),R=b;r:for(;R!==null;){switch(R.tag){case 27:if(D1(R.type)){sg=R.stateNode,f0=!1;break r}break;case 5:sg=R.stateNode,f0=!1;break r;case 3:case 4:sg=R.stateNode.containerInfo,f0=!0;break r}R=R.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");cM(w,b,H),sg=null,f0=!1,(H.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&bo(H,Ur,Lr,"Unmount"),hv(q),w=H,b=w.alternate,b!==null&&(b.return=null),w.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)pM(g,r),g=g.sibling}function pM(r,g){var v=lv(),l=Ho(),w=qo(),b=Ao(),H=r.alternate,q=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:c0(g,r),j0(r),q&4&&(Eh(S0|xv,r,r.return),zw(S0|xv,r),lO(r,r.return,Mv|xv));break;case 1:if(c0(g,r),j0(r),q&512&&(dg||H===null||Go(H,H.return)),q&64&&H1&&(q=r.updateQueue,q!==null&&(H=q.callbacks,H!==null))){var R=q.shared.hiddenCallbacks;q.shared.hiddenCallbacks=R===null?H:R.concat(H)}break;case 26:if(R=cv,c0(g,r),j0(r),q&512&&(dg||H===null||Go(H,H.return)),q&4){var X=H!==null?H.memoizedState:null;if(q=r.memoizedState,H===null)if(q===null)if(r.stateNode===null){r:{q=r.type,H=r.memoizedProps,R=R.ownerDocument||R;g:switch(q){case"title":if(X=R.getElementsByTagName("title")[0],!X||X[kw]||X[R0]||X.namespaceURI===h5||X.hasAttribute("itemprop"))X=R.createElement(q),R.head.insertBefore(X,R.querySelector("head > title"));W0(X,q,H),X[R0]=r,$r(X),q=X;break r;case"link":var I=bW("link","href",R).get(q+(H.href||""));if(I){for(var B=0;B<I.length;B++)if(X=I[B],X.getAttribute("href")===(H.href==null||H.href===""?null:H.href)&&X.getAttribute("rel")===(H.rel==null?null:H.rel)&&X.getAttribute("title")===(H.title==null?null:H.title)&&X.getAttribute("crossorigin")===(H.crossOrigin==null?null:H.crossOrigin)){I.splice(B,1);break g}}X=R.createElement(q),W0(X,q,H),R.head.appendChild(X);break;case"meta":if(I=bW("meta","content",R).get(q+(H.content||""))){for(B=0;B<I.length;B++)if(X=I[B],Ag(H.content,"content"),X.getAttribute("content")===(H.content==null?null:""+H.content)&&X.getAttribute("name")===(H.name==null?null:H.name)&&X.getAttribute("property")===(H.property==null?null:H.property)&&X.getAttribute("http-equiv")===(H.httpEquiv==null?null:H.httpEquiv)&&X.getAttribute("charset")===(H.charSet==null?null:H.charSet)){I.splice(B,1);break g}}X=R.createElement(q),W0(X,q,H),R.head.appendChild(X);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+q+'". This is a bug in React.')}X[R0]=r,$r(X),q=X}r.stateNode=q}else uW(R,r.type,r.stateNode);else r.stateNode=wW(R,q,r.memoizedProps);else X!==q?(X===null?H.stateNode!==null&&(H=H.stateNode,H.parentNode.removeChild(H)):X.count--,q===null?uW(R,r.type,r.stateNode):wW(R,q,r.memoizedProps)):q===null&&r.stateNode!==null&&wO(r,r.memoizedProps,H.memoizedProps)}break;case 27:c0(g,r),j0(r),q&512&&(dg||H===null||Go(H,H.return)),H!==null&&q&4&&wO(r,r.memoizedProps,H.memoizedProps);break;case 5:if(c0(g,r),j0(r),q&512&&(dg||H===null||Go(H,H.return)),r.flags&32){R=r.stateNode;try{ur(r,j9,R)}catch(Mr){bg(r,r.return,Mr)}}q&4&&r.stateNode!=null&&(R=r.memoizedProps,wO(r,R,H!==null?H.memoizedProps:R)),q&1024&&(tH=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(c0(g,r),j0(r),q&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");q=r.memoizedProps,H=H!==null?H.memoizedProps:q,R=r.stateNode;try{ur(r,fz,R,H,q)}catch(Mr){bg(r,r.return,Mr)}}break;case 3:if(R=co(),c6=null,X=cv,cv=k4(g.containerInfo),c0(g,r),cv=X,j0(r),q&4&&H!==null&&H.memoizedState.isDehydrated)try{ur(r,bK,g.containerInfo)}catch(Mr){bg(r,r.return,Mr)}tH&&(tH=!1,aM(r)),g.effectDuration+=o4(R);break;case 4:q=cv,cv=k4(r.stateNode.containerInfo),c0(g,r),j0(r),cv=q;break;case 12:q=co(),c0(g,r),j0(r),r.stateNode.effectDuration+=Pw(q);break;case 31:c0(g,r),j0(r),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,N4(r,q)));break;case 13:c0(g,r),j0(r),r.child.flags&8192&&r.memoizedState!==null!==(H!==null&&H.memoizedState!==null)&&(Z6=w0()),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,N4(r,q)));break;case 22:R=r.memoizedState!==null;var $=H!==null&&H.memoizedState!==null,x=H1,wr=dg;if(H1=x||R,dg=wr||$,c0(g,r),dg=wr,H1=x,$&&!R&&!x&&!wr&&(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(r,Ur,Lr),j0(r),q&8192)r:for(g=r.stateNode,g._visibility=R?g._visibility&~jw:g._visibility|jw,!R||H===null||$||H1||dg||(fl(r),(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&bo(r,Ur,Lr,"Disconnect")),H=null,g=r;;){if(g.tag===5||g.tag===26){if(H===null){$=H=g;try{X=$.stateNode,R?ur($,sz,X):ur($,vK,$.stateNode,$.memoizedProps)}catch(Mr){bg($,$.return,Mr)}}}else if(g.tag===6){if(H===null){$=g;try{I=$.stateNode,R?ur($,rK,I):ur($,oK,I,$.memoizedProps)}catch(Mr){bg($,$.return,Mr)}}}else if(g.tag===18){if(H===null){$=g;try{B=$.stateNode,R?ur($,dz,B):ur($,gK,$.stateNode)}catch(Mr){bg($,$.return,Mr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;H===g&&(H=null),g=g.return}H===g&&(H=null),g.sibling.return=g.return,g=g.sibling}q&4&&(q=r.updateQueue,q!==null&&(H=q.retryQueue,H!==null&&(q.retryQueue=null,N4(r,H))));break;case 19:c0(g,r),j0(r),q&4&&(q=r.updateQueue,q!==null&&(r.updateQueue=null,N4(r,q)));break;case 30:break;case 21:break;default:c0(g,r),j0(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&((Cg||0.05<Ng)&&uo(r,Ur,Lr,Ng,Ig),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Lr-Ur&&(_M(r.return.alternate,r.return)||bo(r,Ur,Lr,"Mount"))),hv(v),Po(l),Ig=w,Cg=b}function j0(r){var g=r.flags;if(g&2){try{ur(r,Kz,r)}catch(v){bg(r,r.return,v)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function aM(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;aM(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Xo(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)EM(r,g.alternate,g),g=g.sibling}function dM(r){var g=lv(),v=Ho(),l=qo(),w=Ao();switch(r.tag){case 0:case 11:case 14:case 15:lO(r,r.return,Mv),fl(r);break;case 1:Go(r,r.return);var b=r.stateNode;typeof b.componentWillUnmount==="function"&&kM(r,r.return,b),fl(r);break;case 27:ur(r,Zw,r.stateNode);case 26:case 5:Go(r,r.return),fl(r);break;case 22:r.memoizedState===null&&fl(r);break;case 30:fl(r);break;default:fl(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(r,Ur,Lr,Ng,Ig),hv(g),Po(v),Ig=l,Cg=w}function fl(r){for(r=r.child;r!==null;)dM(r),r=r.sibling}function sM(r,g,v,l){var w=lv(),b=Ho(),H=qo(),q=Ao(),R=v.flags;switch(v.tag){case 0:case 11:case 15:Yo(r,v,l),mM(v,Mv);break;case 1:if(Yo(r,v,l),g=v.stateNode,typeof g.componentDidMount==="function"&&ur(v,IH,v,g),g=v.updateQueue,g!==null){r=v.stateNode;try{ur(v,bz,g,r)}catch(X){bg(v,v.return,X)}}l&&R&64&&iM(v),Kw(v,v.return);break;case 27:VM(v);case 26:case 5:Yo(r,v,l),l&&g===null&&R&4&&DM(v),Kw(v,v.return);break;case 12:if(l&&R&4){R=co(),Yo(r,v,l),l=v.stateNode,l.effectDuration+=Pw(R);try{ur(v,nM,v,g,a1,l.effectDuration)}catch(X){bg(v,v.return,X)}}else Yo(r,v,l);break;case 31:Yo(r,v,l),l&&R&4&&jM(r,v);break;case 13:Yo(r,v,l),l&&R&4&&fM(r,v);break;case 22:v.memoizedState===null&&Yo(r,v,l),Kw(v,v.return);break;case 30:break;default:Yo(r,v,l)}(v.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(v,Ur,Lr,Ng,Ig),hv(w),Po(b),Ig=H,Cg=q}function Yo(r,g,v){v=v&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)sM(r,g.alternate,g,v),g=g.sibling}function OO(r,g){var v=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(v=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==v&&(r!=null&&_l(r),v!=null&&Hw(v))}function HO(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_l(g),r!=null&&Hw(r))}function Dv(r,g,v,l,w){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var b=g.sibling;r9(r,g,v,l,b!==null?b.actualStartTime:w),g=b}}function r9(r,g,v,l,w){var b=lv(),H=Ho(),q=qo(),R=Ao(),X=c1,I=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&Dr)!==Fr&&0<g.actualStartTime&&(g.flags&1)!==0&&j2(g,g.actualStartTime,w,o0,v),Dv(r,g,v,l,w),I&2048&&SM(g,i0|xv);break;case 1:(g.mode&Dr)!==Fr&&0<g.actualStartTime&&((g.flags&128)!==0?cu(g,g.actualStartTime,w,[]):(g.flags&1)!==0&&j2(g,g.actualStartTime,w,o0,v)),Dv(r,g,v,l,w);break;case 3:var B=co(),$=o0;o0=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dv(r,g,v,l,w),o0=$,I&2048&&(v=null,g.alternate!==null&&(v=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==v&&(_l(l),v!=null&&Hw(v))),r.passiveEffectDuration+=o4(B);break;case 12:if(I&2048){I=co(),Dv(r,g,v,l,w),r=g.stateNode,r.passiveEffectDuration+=Pw(I);try{ur(g,zz,g,g.alternate,a1,r.passiveEffectDuration)}catch(x){bg(g,g.return,x)}}else Dv(r,g,v,l,w);break;case 31:I=o0,B=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,B!==null&&$===null?($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(o0=!1,B=B.hydrationErrors,B!==null&&cu(g,g.actualStartTime,w,B)):o0=!0):o0=!1,Dv(r,g,v,l,w),o0=I;break;case 13:I=o0,B=g.alternate!==null?g.alternate.memoizedState:null,$=g.memoizedState,B===null||B.dehydrated===null||$!==null&&$.dehydrated!==null?o0=!1:($=g.deletions,$!==null&&0<$.length&&$[0].tag===18?(o0=!1,B=B.hydrationErrors,B!==null&&cu(g,g.actualStartTime,w,B)):o0=!0),Dv(r,g,v,l,w),o0=I;break;case 23:break;case 22:$=g.stateNode,B=g.alternate,g.memoizedState!==null?$._visibility&r1?Dv(r,g,v,l,w):ew(r,g,v,l,w):$._visibility&r1?Dv(r,g,v,l,w):($._visibility|=r1,yh(r,g,v,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),w),(g.mode&Dr)===Fr||o0||(r=g.actualStartTime,0<=r&&0.05<w-r&&c2(g,r,w),0<=Ur&&0<=Lr&&0.05<Lr-Ur&&c2(g,Ur,Lr))),I&2048&&OO(B,g);break;case 24:Dv(r,g,v,l,w),I&2048&&HO(g.alternate,g);break;default:Dv(r,g,v,l,w)}if((g.mode&Dr)!==Fr){if(r=!o0&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)v=g.actualStartTime,0<=v&&0.05<w-v&&bo(g,v,w,"Mount");0<=Ur&&0<=Lr&&((Cg||0.05<Ng)&&uo(g,Ur,Lr,Ng,Ig),r&&0.05<Lr-Ur&&bo(g,Ur,Lr,"Mount"))}hv(b),Po(H),Ig=q,Cg=R,c1=X}function yh(r,g,v,l,w,b){w=w&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var H=g.sibling;g9(r,g,v,l,w,H!==null?H.actualStartTime:b),g=H}}function g9(r,g,v,l,w,b){var H=lv(),q=Ho(),R=qo(),X=Ao(),I=c1;w&&(g.mode&Dr)!==Fr&&0<g.actualStartTime&&(g.flags&1)!==0&&j2(g,g.actualStartTime,b,o0,v);var B=g.flags;switch(g.tag){case 0:case 11:case 15:yh(r,g,v,l,w,b),SM(g,i0);break;case 23:break;case 22:var $=g.stateNode;g.memoizedState!==null?$._visibility&r1?yh(r,g,v,l,w,b):ew(r,g,v,l,b):($._visibility|=r1,yh(r,g,v,l,w,b)),w&&B&2048&&OO(g.alternate,g);break;case 24:yh(r,g,v,l,w,b),w&&B&2048&&HO(g.alternate,g);break;default:yh(r,g,v,l,w,b)}(g.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(g,Ur,Lr,Ng,Ig),hv(H),Po(q),Ig=R,Cg=X,c1=I}function ew(r,g,v,l,w){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var b=g.child;b!==null;){g=b.sibling;var H=r,q=v,R=l,X=g!==null?g.actualStartTime:w,I=c1;(b.mode&Dr)!==Fr&&0<b.actualStartTime&&(b.flags&1)!==0&&j2(b,b.actualStartTime,X,o0,q);var B=b.flags;switch(b.tag){case 22:ew(H,b,q,R,X),B&2048&&OO(b.alternate,b);break;case 24:ew(H,b,q,R,X),B&2048&&HO(b.alternate,b);break;default:ew(H,b,q,R,X)}c1=I,b=g}}function ch(r,g,v){if(r.subtreeFlags&Mb)for(r=r.child;r!==null;)v9(r,g,v),r=r.sibling}function v9(r,g,v){switch(r.tag){case 26:ch(r,g,v),r.flags&Mb&&r.memoizedState!==null&&AK(v,cv,r.memoizedState,r.memoizedProps);break;case 5:ch(r,g,v);break;case 3:case 4:var l=cv;cv=k4(r.stateNode.containerInfo),ch(r,g,v),cv=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Mb,Mb=16777216,ch(r,g,v),Mb=l):ch(r,g,v));break;default:ch(r,g,v)}}function o9(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function $w(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var v=0;v<g.length;v++){var l=g[v],w=lv();u0=l,w9(l,r),(l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&bo(l,Ur,Lr,"Unmount"),hv(w)}o9(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)l9(r),r=r.sibling}function l9(r){var g=lv(),v=Ho(),l=qo(),w=Ao();switch(r.tag){case 0:case 11:case 15:$w(r),r.flags&2048&&hO(r,r.return,i0|xv);break;case 3:var b=co();$w(r),r.stateNode.passiveEffectDuration+=o4(b);break;case 12:b=co(),$w(r),r.stateNode.passiveEffectDuration+=Pw(b);break;case 22:b=r.stateNode,r.memoizedState!==null&&b._visibility&r1&&(r.return===null||r.return.tag!==13)?(b._visibility&=~r1,Z4(r),(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&bo(r,Ur,Lr,"Disconnect")):$w(r);break;default:$w(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(r,Ur,Lr,Ng,Ig),hv(g),Po(v),Cg=w,Ig=l}function Z4(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var v=0;v<g.length;v++){var l=g[v],w=lv();u0=l,w9(l,r),(l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&0.05<Lr-Ur&&bo(l,Ur,Lr,"Unmount"),hv(w)}o9(r)}for(r=r.child;r!==null;)h9(r),r=r.sibling}function h9(r){var g=lv(),v=Ho(),l=qo(),w=Ao();switch(r.tag){case 0:case 11:case 15:hO(r,r.return,i0),Z4(r);break;case 22:var b=r.stateNode;b._visibility&r1&&(b._visibility&=~r1,Z4(r));break;default:Z4(r)}(r.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(r,Ur,Lr,Ng,Ig),hv(g),Po(v),Cg=w,Ig=l}function w9(r,g){for(;u0!==null;){var v=u0,l=v,w=g,b=lv(),H=Ho(),q=qo(),R=Ao();switch(l.tag){case 0:case 11:case 15:hO(l,w,i0);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(w=l.memoizedState.cachePool.pool,w!=null&&_l(w));break;case 24:Hw(l.memoizedState.cache)}if((l.mode&Dr)!==Fr&&0<=Ur&&0<=Lr&&(Cg||0.05<Ng)&&uo(l,Ur,Lr,Ng,Ig),hv(b),Po(H),Cg=R,Ig=q,l=v.child,l!==null)l.return=v,u0=l;else r:for(v=r;u0!==null;){if(l=u0,b=l.sibling,H=l.return,yM(l),l===v){u0=null;break r}if(b!==null){b.return=H,u0=b;break r}u0=H}}}function Uz(){ce.forEach(function(r){return r()})}function b9(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||S.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function bv(r){if((vg&l0)!==O0&&Vr!==0)return Vr&-Vr;var g=S.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),XO()):Z()}function u9(){if(a0===0)if((Vr&536870912)===0||ar){var r=a4;a4<<=1,(a4&3932160)===0&&(a4=262144),a0=r}else a0=536870912;return r=Av.current,r!==null&&(r.flags|=32),a0}function Tg(r,g,v){if(Z5&&console.error("useInsertionEffect must not schedule updates."),sH&&(m6=!0),r===Xg&&(Pg===Hh||Pg===Ph)||r.cancelPendingCommit!==null)fh(r,0),k1(r,Vr,a0,!1);if(L1(r,v),(vg&l0)!==O0&&r===Xg){if(eo)switch(g.tag){case 0:case 11:case 15:r=Er&&i(Er)||"Unknown",C3.has(r)||(C3.add(r),g=i(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:T3||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),T3=!0)}}else Uo&&s5(r,g,v),mz(g),r===Xg&&((vg&l0)===O0&&(wl|=v),Zg===ol&&k1(r,Vr,a0,!1)),Jo(r)}function O9(r,g,v){if((vg&(l0|Wv))!==O0)throw Error("Should not already be working.");if(Vr!==0&&Er!==null){var l=Er,w=w0();switch(L7){case Gb:case Hh:var b=rb;$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",b,w,$v,void 0,"primary-light")):console.timeStamp("Suspended",b,w,$v,void 0,"primary-light"));break;case Ph:b=rb,$g&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",b,w,$v,void 0,"primary-light")):console.timeStamp("Action",b,w,$v,void 0,"primary-light"));break;default:$g&&(l=w-rb,3>l||console.timeStamp("Blocked",rb,w,$v,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}b=(v=!v&&(g&127)===0&&(g&r.expiredLanes)===0||Nl(r,g))?Fz(r,g):qO(r,g,!0);var H=v;do{if(b===P1){B5&&!v&&k1(r,g,0,!1),g=Pg,rb=fg(),L7=g;break}else{if(l=w0(),w=r.current.alternate,H&&!Lz(w)){vv(g),w=b0,b=l,!$g||b<=w||(kg?kg.run(console.timeStamp.bind(console,"Teared Render",w,b,fr,jr,"error")):console.timeStamp("Teared Render",w,b,fr,jr,"error")),pl(g,l),b=qO(r,g,!1),H=!1;continue}if(b===Oh){if(H=g,r.errorRecoveryDisabledLanes&H)var q=0;else q=r.pendingLanes&-536870913,q=q!==0?q:q&536870912?536870912:0;if(q!==0){vv(g),ju(b0,l,g,kg),pl(g,l),g=q;r:{l=r,b=H,H=Yb;var R=l.current.memoizedState.isDehydrated;if(R&&(fh(l,q).flags|=256),q=qO(l,q,!1),q!==Oh){if(EH&&!R){l.errorRecoveryDisabledLanes|=b,wl|=b,b=ol;break r}l=k0,k0=H,l!==null&&(k0===null?k0=l:k0.push.apply(k0,l))}b=q}if(H=!1,b!==Oh)continue;else l=w0()}}if(b===Rb){vv(g),ju(b0,l,g,kg),pl(g,l),fh(r,0),k1(r,g,0,!0);break}r:{switch(v=r,b){case P1:case Rb:throw Error("Root did not complete. This is a bug in React.");case ol:if((g&4194048)!==g)break;case F6:vv(g),OA(b0,l,g,kg),pl(g,l),w=g,(w&127)!==0?A6=l:(w&4194048)!==0&&(M6=l),k1(v,g,a0,!ll);break r;case Oh:k0=null;break;case L6:case Q3:break;default:throw Error("Unknown root exit status.")}if(S.actQueue!==null)AO(v,w,g,k0,Jb,N6,a0,wl,qh,b,null,null,b0,l);else{if((g&62914560)===g&&(H=Z6+e3-w0(),10<H)){if(k1(v,g,a0,!ll),Bl(v,0,!0)!==0)break r;jv=g,v.timeoutHandle=V3(H9.bind(null,v,w,k0,Jb,N6,g,a0,wl,qh,ll,b,"Throttled",b0,l),H);break r}H9(v,w,k0,Jb,N6,g,a0,wl,qh,ll,b,null,b0,l)}}}break}while(1);Jo(r)}function H9(r,g,v,l,w,b,H,q,R,X,I,B,$,x){r.timeoutHandle=Gh;var wr=g.subtreeFlags,Mr=null;if(wr&8192||(wr&16785408)===16785408){if(Mr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vo},v9(g,b,Mr),wr=(b&62914560)===b?Z6-w0():(b&4194048)===b?K3-w0():0,wr=MK(Mr,wr),wr!==null){jv=b,r.cancelPendingCommit=wr(AO.bind(null,r,g,b,v,l,w,H,q,R,I,Mr,Mr.waitingForViewTransition?"Waiting for the previous Animation":0<Mr.count?0<Mr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Mr.imgCount===1?"Suspended on an Image":0<Mr.imgCount?"Suspended on Images":null,$,x)),k1(r,b,H,!X);return}}AO(r,g,b,v,l,w,H,q,R,I,Mr,B,$,x)}function Lz(r){for(var g=r;;){var v=g.tag;if((v===0||v===11||v===15)&&g.flags&16384&&(v=g.updateQueue,v!==null&&(v=v.stores,v!==null)))for(var l=0;l<v.length;l++){var w=v[l],b=w.getSnapshot;w=w.value;try{if(!C0(b(),w))return!1}catch(H){return!1}}if(v=g.child,g.subtreeFlags&16384&&v!==null)v.return=g,g=v;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function k1(r,g,v,l){g&=~yH,g&=~wl,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var w=g;0<w;){var b=31-Z0(w),H=1<<b;l[b]=-1,w&=~H}v!==0&&Zl(r,v,g)}function jh(){return(vg&(l0|Wv))===O0?(Fw(0,!1),!1):!0}function PO(){if(Er!==null){if(Pg===p0)var r=Er.return;else r=Er,r4(),z8(r),Q5=null,Ob=0,r=Er;for(;r!==null;)CM(r.alternate,r),r=r.return;Er=null}}function pl(r,g){(r&127)!==0&&(d1=g),(r&4194048)!==0&&(No=g),(r&62914560)!==0&&($7=g),(r&2080374784)!==0&&(U7=g)}function fh(r,g){$g&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jr,"primary-light"));var v=b0;if(b0=fg(),Vr!==0&&0<v){if(vv(Vr),Zg===L6||Zg===ol)OA(v,b0,g,kg);else{var l=b0,w=kg;if($g&&!(l<=v)){var b=(g&738197653)===g?"tertiary-dark":"primary-dark",H=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";w?w.run(console.timeStamp.bind(console,H,v,l,fr,jr,b)):console.timeStamp(H,v,l,fr,jr,b)}}pl(Vr,b0)}if(v=kg,kg=null,(g&127)!==0){kg=aw,w=0<=Bo&&Bo<d1?d1:Bo,l=0<=gh&&gh<d1?d1:gh,b=0<=l?l:0<=w?w:b0,0<=A6?(vv(2),HA(A6,b,g,v)):(W6&127)!==0&&(vv(2),uw(d1,b,w1)),v=w;var q=l,R=dw,X=0<X5,I=s1===pw,B=s1===q6;if(w=b0,l=aw,b=eH,H=$H,$g){if(fr="Blocking",0<v?v>w&&(v=w):v=w,0<q?q>v&&(q=v):q=v,R!==null&&v>q){var $=X?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,X?"Consecutive":"Event: "+R,q,v,fr,jr,$)):console.timeStamp(X?"Consecutive":"Event: "+R,q,v,fr,jr,$)}w>v&&(q=I?"error":(g&738197653)===g?"tertiary-light":"primary-light",I=B?"Promise Resolved":I?"Cascading Update":5<w-v?"Update Blocked":"Update",B=[],H!=null&&B.push(["Component name",H]),b!=null&&B.push(["Method name",b]),v={start:v,end:w,detail:{devtools:{properties:B,track:fr,trackGroup:jr,color:q}}},l?l.run(performance.measure.bind(performance,I,v)):performance.measure(I,v))}Bo=-1.1,s1=0,$H=eH=null,A6=-1.1,X5=gh,gh=-1.1,d1=fg()}if((g&4194048)!==0&&(kg=sw,w=0<=h1&&h1<No?No:h1,v=0<=Nv&&Nv<No?No:Nv,l=0<=rl&&rl<No?No:rl,b=0<=l?l:0<=v?v:b0,0<=M6?(vv(256),HA(M6,b,g,kg)):(W6&4194048)!==0&&(vv(256),uw(No,b,w1)),B=l,q=vh,R=0<gl,X=UH===q6,b=b0,l=sw,H=K7,I=e7,$g&&(fr="Transition",0<v?v>b&&(v=b):v=b,0<w?w>v&&(w=v):w=v,0<B?B>w&&(B=w):B=w,w>B&&q!==null&&($=R?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,R?"Consecutive":"Event: "+q,B,w,fr,jr,$)):console.timeStamp(R?"Consecutive":"Event: "+q,B,w,fr,jr,$)),v>w&&(l?l.run(console.timeStamp.bind(console,"Action",w,v,fr,jr,"primary-dark")):console.timeStamp("Action",w,v,fr,jr,"primary-dark")),b>v&&(w=X?"Promise Resolved":5<b-v?"Update Blocked":"Update",B=[],I!=null&&B.push(["Component name",I]),H!=null&&B.push(["Method name",H]),v={start:v,end:b,detail:{devtools:{properties:B,track:fr,trackGroup:jr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,w,v)):performance.measure(w,v))),Nv=h1=-1.1,UH=0,M6=-1.1,gl=rl,rl=-1.1,No=fg()),(g&62914560)!==0&&(W6&62914560)!==0&&(vv(4194304),uw($7,b0,w1)),(g&2080374784)!==0&&(W6&2080374784)!==0&&(vv(268435456),uw(U7,b0,w1)),v=r.timeoutHandle,v!==Gh&&(r.timeoutHandle=Gh,w$(v)),v=r.cancelPendingCommit,v!==null&&(r.cancelPendingCommit=null,v()),jv=0,PO(),Xg=r,Er=v=_o(r.current,null),Vr=g,Pg=p0,Rv=null,ll=!1,B5=Nl(r,g),EH=!1,Zg=P1,qh=a0=yH=wl=hl=0,k0=Yb=null,N6=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)w=31-Z0(l),b=1<<w,g|=r[w],l&=~b;return xo=g,f2(),r=G7(),1000<r-R7&&(S.recentlyCreatedOwnerStacks=0,R7=r),Ev.discardPendingWarnings(),v}function P9(r,g){Ir=null,S.H=Ab,S.getCurrentStack=null,eo=!1,Hv=null,g===J5||g===Y6?(g=ZA(),Pg=Gb):g===BH?(g=ZA(),Pg=z3):Pg=g===nH?_H:g!==null&&typeof g==="object"&&typeof g.then==="function"?Xb:I6,Rv=g;var v=Er;v===null?(Zg=Rb,$4(r,ov(g,r.current))):v.mode&Dr&&O8(v)}function q9(){var r=Av.current;return r===null?!0:(Vr&4194048)===Vr?Zv===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Zv:!1}function A9(){var r=S.H;return S.H=Ab,r===null?Ab:r}function M9(){var r=S.A;return S.A=ye,r}function x4(r){kg===null&&(kg=r._debugTask==null?null:r._debugTask)}function T4(){Zg=ol,ll||(Vr&4194048)!==Vr&&Av.current!==null||(B5=!0),(hl&134217727)===0&&(wl&134217727)===0||Xg===null||k1(Xg,Vr,a0,!1)}function qO(r,g,v){var l=vg;vg|=l0;var w=A9(),b=M9();if(Xg!==r||Vr!==g){if(Uo){var H=r.memoizedUpdaters;0<H.size&&(Lw(r,Vr),H.clear()),F1(r,g)}Jb=null,fh(r,g)}g=!1,H=Zg;r:do try{if(Pg!==p0&&Er!==null){var q=Er,R=Rv;switch(Pg){case _H:PO(),H=F6;break r;case Gb:case Hh:case Ph:case Xb:Av.current===null&&(g=!0);var X=Pg;if(Pg=p0,Rv=null,ph(r,q,R,X),v&&B5){H=P1;break r}break;default:X=Pg,Pg=p0,Rv=null,ph(r,q,R,X)}}W9(),H=Zg;break}catch(I){P9(r,I)}while(1);return g&&r.shellSuspendCounter++,r4(),vg=l,S.H=w,S.A=b,Er===null&&(Xg=null,Vr=0,f2()),H}function W9(){for(;Er!==null;)R9(Er)}function Fz(r,g){var v=vg;vg|=l0;var l=A9(),w=M9();if(Xg!==r||Vr!==g){if(Uo){var b=r.memoizedUpdaters;0<b.size&&(Lw(r,Vr),b.clear()),F1(r,g)}Jb=null,x6=w0()+$3,fh(r,g)}else B5=Nl(r,g);r:do try{if(Pg!==p0&&Er!==null)g:switch(g=Er,b=Rv,Pg){case I6:Pg=p0,Rv=null,ph(r,g,b,I6);break;case Hh:case Ph:if(BA(b)){Pg=p0,Rv=null,G9(g);break}g=function(){Pg!==Hh&&Pg!==Ph||Xg!==r||(Pg=B6),Jo(r)},b.then(g,g);break r;case Gb:Pg=B6;break r;case z3:Pg=VH;break r;case B6:BA(b)?(Pg=p0,Rv=null,G9(g)):(Pg=p0,Rv=null,ph(r,g,b,B6));break;case VH:var H=null;switch(Er.tag){case 26:H=Er.memoizedState;case 5:case 27:var q=Er;if(H?OW(H):q.stateNode.complete){Pg=p0,Rv=null;var R=q.sibling;if(R!==null)Er=R;else{var X=q.return;X!==null?(Er=X,C4(X)):Er=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}Pg=p0,Rv=null,ph(r,g,b,VH);break;case Xb:Pg=p0,Rv=null,ph(r,g,b,Xb);break;case _H:PO(),Zg=F6;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}S.actQueue!==null?W9():Iz();break}catch(I){P9(r,I)}while(1);if(r4(),S.H=l,S.A=w,vg=v,Er!==null)return P1;return Xg=null,Vr=0,f2(),Zg}function Iz(){for(;Er!==null&&!LK();)R9(Er)}function R9(r){var g=r.alternate;(r.mode&Dr)!==Fr?(u8(r),g=ur(r,vO,g,r,xo),O8(r)):g=ur(r,vO,g,r,xo),r.memoizedProps=r.pendingProps,g===null?C4(r):Er=g}function G9(r){var g=ur(r,Bz,r);r.memoizedProps=r.pendingProps,g===null?C4(r):Er=g}function Bz(r){var g=r.alternate,v=(r.mode&Dr)!==Fr;switch(v&&u8(r),r.tag){case 15:case 0:g=FM(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=FM(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:z8(r);default:CM(g,r),r=Er=RA(r,xo),g=vO(g,r,xo)}return v&&O8(r),g}function ph(r,g,v,l){r4(),z8(g),Q5=null,Ob=0;var w=g.return;try{if(Mz(r,w,g,v,Vr)){Zg=Rb,$4(r,ov(v,r.current)),Er=null;return}}catch(b){if(w!==null)throw Er=w,b;Zg=Rb,$4(r,ov(v,r.current)),Er=null;return}if(g.flags&32768){if(ar||l===I6)r=!0;else if(B5||(Vr&536870912)!==0)r=!1;else if(ll=r=!0,l===Hh||l===Ph||l===Gb||l===Xb)l=Av.current,l!==null&&l.tag===13&&(l.flags|=16384);X9(g,r)}else C4(g)}function C4(r){var g=r;do{if((g.flags&32768)!==0){X9(g,ll);return}var v=g.alternate;if(r=g.return,u8(g),v=ur(g,Gz,v,g,xo),(g.mode&Dr)!==Fr&&$A(g),v!==null){Er=v;return}if(g=g.sibling,g!==null){Er=g;return}Er=g=r}while(g!==null);Zg===P1&&(Zg=Q3)}function X9(r,g){do{var v=Xz(r.alternate,r);if(v!==null){v.flags&=32767,Er=v;return}if((r.mode&Dr)!==Fr){$A(r),v=r.actualDuration;for(var l=r.child;l!==null;)v+=l.actualDuration,l=l.sibling;r.actualDuration=v}if(v=r.return,v!==null&&(v.flags|=32768,v.subtreeFlags=0,v.deletions=null),!g&&(r=r.sibling,r!==null)){Er=r;return}Er=r=v}while(r!==null);Zg=F6,Er=null}function AO(r,g,v,l,w,b,H,q,R,X,I,B,$,x){r.cancelPendingCommit=null;do Uw();while(r0!==ul);if(Ev.flushLegacyContextWarning(),Ev.flushPendingUnsafeLifecycleWarnings(),(vg&(l0|Wv))!==O0)throw Error("Should not already be working.");if(vv(v),X===Oh?ju($,x,v,kg):l!==null?gz($,x,v,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,kg):rz($,x,v,kg),g!==null){if(v===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=g.lanes|g.childLanes,b|=YH,i2(r,v,b,H,q,R),r===Xg&&(Er=Xg=null,Vr=0),N5=g,Ol=r,jv=v,fH=b,aH=w,N3=l,pH=x,Z3=B,fv=T6,x3=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,Cz(v5,function(){return Ub=window.event,fv===T6&&(fv=jH),K9(),null})):(r.callbackNode=null,r.callbackPriority=0),l1=null,a1=fg(),B!==null&&vz(x,a1,B,kg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,w=ug.p,ug.p=Pv,H=vg,vg|=Wv;try{ez(r,g,v)}finally{vg=H,ug.p=w,S.T=l}}r0=L3,Y9(),J9(),Q9()}}function Y9(){if(r0===L3){r0=ul;var r=Ol,g=N5,v=jv,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var w=ug.p;ug.p=Pv;var b=vg;vg|=Wv;try{F5=v,I5=r,l4(),pM(g,r),I5=F5=null,v=uP;var H=wA(r.containerInfo),q=v.focusedElem,R=v.selectionRange;if(H!==q&&q&&q.ownerDocument&&hA(q.ownerDocument.documentElement,q)){if(R!==null&&Eu(q)){var{start:X,end:I}=R;if(I===void 0&&(I=X),"selectionStart"in q)q.selectionStart=X,q.selectionEnd=Math.min(I,q.value.length);else{var B=q.ownerDocument||document,$=B&&B.defaultView||window;if($.getSelection){var x=$.getSelection(),wr=q.textContent.length,Mr=Math.min(R.start,wr),zg=R.end===void 0?Mr:Math.min(R.end,wr);!x.extend&&Mr>zg&&(H=zg,zg=Mr,Mr=H);var sr=lA(q,Mr),e=lA(q,zg);if(sr&&e&&(x.rangeCount!==1||x.anchorNode!==sr.node||x.anchorOffset!==sr.offset||x.focusNode!==e.node||x.focusOffset!==e.offset)){var U=B.createRange();U.setStart(sr.node,sr.offset),x.removeAllRanges(),Mr>zg?(x.addRange(U),x.extend(e.node,e.offset)):(U.setEnd(e.node,e.offset),x.addRange(U))}}}}B=[];for(x=q;x=x.parentNode;)x.nodeType===1&&B.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof q.focus==="function"&&q.focus();for(q=0;q<B.length;q++){var F=B[q];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}p6=!!bP,uP=bP=null}finally{vg=b,ug.p=w,S.T=l}}r.current=g,r0=F3}}function J9(){if(r0===F3){r0=ul;var r=x3;if(r!==null){a1=fg();var g=o1,v=a1;!$g||v<=g||(w1?w1.run(console.timeStamp.bind(console,r,g,v,fr,jr,"secondary-light")):console.timeStamp(r,g,v,fr,jr,"secondary-light"))}r=Ol,g=N5,v=jv;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var w=ug.p;ug.p=Pv;var b=vg;vg|=Wv;try{F5=v,I5=r,l4(),EM(r,g.alternate,g),I5=F5=null}finally{vg=b,ug.p=w,S.T=l}}r=pH,g=Z3,o1=fg(),r=g===null?r:a1,g=o1,v=fv===cH,l=kg,l1!==null?PA(r,g,l1,!1,l):!$g||g<=r||(l?l.run(console.timeStamp.bind(console,v?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,v?"error":"secondary-dark")):console.timeStamp(v?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,v?"error":"secondary-dark")),r0=I3}}function Q9(){if(r0===B3||r0===I3){if(r0===B3){var r=o1;o1=fg();var g=o1,v=fv===cH;!$g||g<=r||(w1?w1.run(console.timeStamp.bind(console,v?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,v?"error":"secondary-light")):console.timeStamp(v?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,v?" error":"secondary-light")),fv!==cH&&(fv=U3)}r0=ul,FK(),r=Ol;var l=N5;g=jv,v=N3;var w=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;w?r0=C6:(r0=ul,N5=Ol=null,z9(r,r.pendingLanes),Ah=0,zb=null);var b=r.pendingLanes;if(b===0&&(bl=null),w||L9(r),b=Y(g),l=l.stateNode,U0&&typeof U0.onCommitFiberRoot==="function")try{var H=(l.current.flags&128)===128;switch(b){case Pv:var q=aO;break;case Vv:q=dO;break;case Lo:q=v5;break;case s4:q=sO;break;default:q=v5}U0.onCommitFiberRoot(o5,l,q,H)}catch(B){$o||($o=!0,console.error("React instrumentation encountered an error: %o",B))}if(Uo&&r.memoizedUpdaters.clear(),Uz(),v!==null){H=S.T,q=ug.p,ug.p=Pv,S.T=null;try{var R=r.onRecoverableError;for(l=0;l<v.length;l++){var X=v[l],I=Nz(X.stack);ur(X.source,R,X.value,I)}}finally{S.T=H,ug.p=q}}(jv&3)!==0&&Uw(),Jo(r),b=r.pendingLanes,(g&261930)!==0&&(b&42)!==0?(G6=!0,r===dH?Qb++:(Qb=0,dH=r)):Qb=0,w||pl(g,o1),Fw(0,!1)}}function Nz(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function z9(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,Hw(g)))}function Uw(){return Y9(),J9(),Q9(),K9()}function K9(){if(r0!==C6)return!1;var r=Ol,g=fH;fH=0;var v=Y(jv),l=Lo===0||Lo>v?Lo:v;v=S.T;var w=ug.p;try{ug.p=l,S.T=null;var b=aH;aH=null,l=Ol;var H=jv;if(r0=ul,N5=Ol=null,jv=0,(vg&(l0|Wv))!==O0)throw Error("Cannot flush passive effects while already rendering.");vv(H),sH=!0,m6=!1;var q=0;if(l1=null,q=w0(),fv===U3)uw(o1,q,w1);else{var R=o1,X=q,I=fv===jH;!$g||X<=R||(kg?kg.run(console.timeStamp.bind(console,I?"Waiting for Paint":"Waiting",R,X,fr,jr,"secondary-light")):console.timeStamp(I?"Waiting for Paint":"Waiting",R,X,fr,jr,"secondary-light"))}R=vg,vg|=Wv;var B=l.current;l4(),l9(B);var $=l.current;B=pH,l4(),r9(l,$,H,b,B),L9(l),vg=R;var x=w0();if($=q,B=kg,l1!==null?PA($,x,l1,!0,B):!$g||x<=$||(B?B.run(console.timeStamp.bind(console,"Remaining Effects",$,x,fr,jr,"secondary-dark")):console.timeStamp("Remaining Effects",$,x,fr,jr,"secondary-dark")),pl(H,x),Fw(0,!1),m6?l===zb?Ah++:(Ah=0,zb=l):Ah=0,m6=sH=!1,U0&&typeof U0.onPostCommitFiberRoot==="function")try{U0.onPostCommitFiberRoot(o5,l)}catch(Mr){$o||($o=!0,console.error("React instrumentation encountered an error: %o",Mr))}var wr=l.current.stateNode;return wr.effectDuration=0,wr.passiveEffectDuration=0,!0}finally{ug.p=w,S.T=v,z9(r,g)}}function e9(r,g,v){g=ov(v,g),UA(g),g=E8(r.stateNode,g,2),r=C1(r,g,2),r!==null&&(L1(r,2),Jo(r))}function bg(r,g,v){if(Z5=!1,r.tag===3)e9(r,r,v);else{for(;g!==null;){if(g.tag===3){e9(g,r,v);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(bl===null||!bl.has(l))){r=ov(v,r),UA(r),v=y8(2),l=C1(g,v,2),l!==null&&(c8(v,l,g,r),L1(l,2),Jo(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,v)}}function MO(r,g,v){var l=r.pingCache;if(l===null){l=r.pingCache=new je;var w=new Set;l.set(g,w)}else w=l.get(g),w===void 0&&(w=new Set,l.set(g,w));w.has(v)||(EH=!0,w.add(v),l=Zz.bind(null,r,g,v),Uo&&Lw(r,v),g.then(l,l))}function Zz(r,g,v){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&v,r.warmLanes&=~v,(v&127)!==0?0>Bo&&(d1=Bo=fg(),aw=P6("Promise Resolved"),s1=q6):(v&4194048)!==0&&0>Nv&&(No=Nv=fg(),sw=P6("Promise Resolved"),UH=q6),b9()&&S.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Xg===r&&(Vr&v)===v&&(Zg===ol||Zg===L6&&(Vr&62914560)===Vr&&w0()-Z6<e3?(vg&l0)===O0&&fh(r,0):yH|=v,qh===Vr&&(qh=0)),Jo(r)}function $9(r,g){g===0&&(g=Th()),r=$0(r,g),r!==null&&(L1(r,g),Jo(r))}function xz(r){var g=r.memoizedState,v=0;g!==null&&(v=g.retryLane),$9(r,v)}function Tz(r,g){var v=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:w}=r;w!==null&&(v=w.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),$9(r,v)}function WO(r,g,v){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,w=g,b=w.type===c4;b=v||b,w.tag!==22?w.flags&67108864?b&&ur(w,U9,l,w):WO(l,w,b):w.memoizedState===null&&(b&&w.flags&8192?ur(w,U9,l,w):w.subtreeFlags&67108864&&ur(w,WO,l,w,b)),g=g.sibling}}function U9(r,g){Jg(!0);try{dM(g),h9(g),sM(r,g.alternate,g,!1),g9(r,g,0,null,!1,0)}finally{Jg(!1)}}function L9(r){var g=!0;r.current.mode&(L0|_v)||(g=!1),WO(r,r.current,g)}function F9(r){if((vg&l0)===O0){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=i(r)||"ReactComponent",S6!==null){if(S6.has(g))return;S6.add(g)}else S6=new Set([g]);ur(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Lw(r,g){Uo&&r.memoizedUpdaters.forEach(function(v){s5(r,v,g)})}function Cz(r,g){var v=S.actQueue;return v!==null?(v.push(g),ae):pO(r,g)}function mz(r){b9()&&S.actQueue===null&&ur(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,i(r))})}function Jo(r){r!==x5&&r.next===null&&(x5===null?i6=x5=r:x5=x5.next=r),k6=!0,S.actQueue!==null?gP||(gP=!0,Z9()):rP||(rP=!0,Z9())}function Fw(r,g){if(!vP&&k6){vP=!0;do{var v=!1;for(var l=i6;l!==null;){if(!g)if(r!==0){var w=l.pendingLanes;if(w===0)var b=0;else{var{suspendedLanes:H,pingedLanes:q}=l;b=(1<<31-Z0(42|r)+1)-1,b&=w&~(H&~q),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(v=!0,N9(l,b))}else b=Vr,b=Bl(l,l===Xg?b:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Gh),(b&3)===0||Nl(l,b)||(v=!0,N9(l,b));l=l.next}}while(v);vP=!1}}function Sz(){Ub=window.event,RO()}function RO(){k6=gP=rP=!1;var r=0;Hl!==0&&_z()&&(r=Hl);for(var g=w0(),v=null,l=i6;l!==null;){var w=l.next,b=I9(l,g);if(b===0)l.next=null,v===null?i6=w:v.next=w,w===null&&(x5=v);else if(v=l,r!==0||(b&3)!==0)k6=!0;l=w}r0!==ul&&r0!==C6||Fw(r,!1),Hl!==0&&(Hl=0)}function I9(r,g){for(var{suspendedLanes:v,pingedLanes:l,expirationTimes:w}=r,b=r.pendingLanes&-62914561;0<b;){var H=31-Z0(b),q=1<<H,R=w[H];if(R===-1){if((q&v)===0||(q&l)!==0)w[H]=Tu(q,g)}else R<=g&&(r.expiredLanes|=q);b&=~q}if(g=Xg,v=Vr,v=Bl(r,r===g?v:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Gh),l=r.callbackNode,v===0||r===g&&(Pg===Hh||Pg===Ph)||r.cancelPendingCommit!==null)return l!==null&&GO(l),r.callbackNode=null,r.callbackPriority=0;if((v&3)===0||Nl(r,v)){if(g=v&-v,g!==r.callbackPriority||S.actQueue!==null&&l!==oP)GO(l);else return g;switch(Y(v)){case Pv:case Vv:v=dO;break;case Lo:v=v5;break;case s4:v=sO;break;default:v=v5}return l=B9.bind(null,r),S.actQueue!==null?(S.actQueue.push(l),v=oP):v=pO(v,l),r.callbackPriority=g,r.callbackNode=v,g}return l!==null&&GO(l),r.callbackPriority=2,r.callbackNode=null,2}function B9(r,g){if(G6=R6=!1,Ub=window.event,r0!==ul&&r0!==C6)return r.callbackNode=null,r.callbackPriority=0,null;var v=r.callbackNode;if(fv===T6&&(fv=jH),Uw()&&r.callbackNode!==v)return null;var l=Vr;if(l=Bl(r,r===Xg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Gh),l===0)return null;return O9(r,l,g),I9(r,w0()),r.callbackNode!=null&&r.callbackNode===v?B9.bind(null,r):null}function N9(r,g){if(Uw())return null;R6=G6,G6=!1,O9(r,g,!0)}function GO(r){r!==oP&&r!==null&&UK(r)}function Z9(){S.actQueue!==null&&S.actQueue.push(function(){return RO(),null}),b$(function(){(vg&(l0|Wv))!==O0?pO(aO,Sz):RO()})}function XO(){if(Hl===0){var r=oh;r===0&&(r=p4,p4<<=1,(p4&261888)===0&&(p4=256)),Hl=r}return Hl}function x9(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Ag(r,"action"),hw(""+r)}function T9(r,g){var v=g.ownerDocument.createElement("input");return v.name=g.name,v.value=g.value,r.id&&v.setAttribute("form",r.id),g.parentNode.insertBefore(v,g),r=new FormData(r),v.parentNode.removeChild(v),r}function iz(r,g,v,l,w){if(g==="submit"&&v&&v.stateNode===w){var b=x9((w[x0]||null).action),H=l.submitter;H&&(g=(g=H[x0]||null)?x9(g.formAction):H.getAttribute("formAction"),g!==null&&(b=g,H=null));var q=new l6("action","action",null,l,w);r.push({event:q,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Hl!==0){var R=H?T9(w,H):new FormData(w),X={pending:!0,data:R,method:w.method,action:b};Object.freeze(X),i8(v,X,null,R)}}else typeof b==="function"&&(q.preventDefault(),R=H?T9(w,H):new FormData(w),X={pending:!0,data:R,method:w.method,action:b},Object.freeze(X),i8(v,X,b,R))},currentTarget:w}]})}}function m4(r,g,v){r.currentTarget=v;try{g(r)}catch(l){WH(l)}r.currentTarget=null}function C9(r,g){g=(g&4)!==0;for(var v=0;v<r.length;v++){var l=r[v];r:{var w=void 0,b=l.event;if(l=l.listeners,g)for(var H=l.length-1;0<=H;H--){var q=l[H],R=q.instance,X=q.currentTarget;if(q=q.listener,R!==w&&b.isPropagationStopped())break r;R!==null?ur(R,m4,b,q,X):m4(b,q,X),w=R}else for(H=0;H<l.length;H++){if(q=l[H],R=q.instance,X=q.currentTarget,q=q.listener,R!==w&&b.isPropagationStopped())break r;R!==null?ur(R,m4,b,q,X):m4(b,q,X),w=R}}}}function dr(r,g){lP.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var v=g[rH];v===void 0&&(v=g[rH]=new Set);var l=r+"__bubble";v.has(l)||(m9(g,r,2,!1),v.add(l))}function YO(r,g,v){lP.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),m9(v,r,l,g)}function JO(r){if(!r[n6]){r[n6]=!0,ZW.forEach(function(v){v!=="selectionchange"&&(lP.has(v)||YO(v,!1,r),YO(v,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[n6]||(g[n6]=!0,YO("selectionchange",!1,g))}}function m9(r,g,v,l){switch(WW(g)){case Pv:var w=XK;break;case Vv:w=YK;break;default:w=mO}v=w.bind(null,g,v,r),w=void 0,!hH||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(w=!0),l?w!==void 0?r.addEventListener(g,v,{capture:!0,passive:w}):r.addEventListener(g,v,!0):w!==void 0?r.addEventListener(g,v,{passive:w}):r.addEventListener(g,v,!1)}function QO(r,g,v,l,w){var b=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var H=l.tag;if(H===3||H===4){var q=l.stateNode.containerInfo;if(q===w)break;if(H===4)for(H=l.return;H!==null;){var R=H.tag;if((R===3||R===4)&&H.stateNode.containerInfo===w)return;H=H.return}for(;q!==null;){if(H=Yr(q),H===null)return;if(R=H.tag,R===5||R===6||R===26||R===27){l=b=H;continue r}q=q.parentNode}}l=l.return}cq(function(){var X=b,I=Vu(v),B=[];r:{var $=W7.get(r);if($!==void 0){var x=l6,wr=r;switch(r){case"keypress":if(_2(v)===0)break r;case"keydown":case"keyup":x=Ae;break;case"focusin":wr="focus",x=OH;break;case"focusout":wr="blur",x=OH;break;case"beforeblur":case"afterblur":x=OH;break;case"click":if(v.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=g7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ge;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Re;break;case P7:case q7:case A7:x=le;break;case M7:x=Xe;break;case"scroll":case"scrollend":x=sK;break;case"wheel":x=Je;break;case"copy":case"cut":case"paste":x=we;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=o7;break;case"toggle":case"beforetoggle":x=ze}var Mr=(g&4)!==0,zg=!Mr&&(r==="scroll"||r==="scrollend"),sr=Mr?$!==null?$+"Capture":null:$;Mr=[];for(var e=X,U;e!==null;){var F=e;if(U=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||U===null||sr===null||(F=ww(e,sr),F!=null&&Mr.push(Iw(e,F,U))),zg)break;e=e.return}0<Mr.length&&($=new x($,wr,null,v,I),B.push({event:$,listeners:Mr}))}}if((g&7)===0){r:{if($=r==="mouseover"||r==="pointerover",x=r==="mouseout"||r==="pointerout",$&&v!==nw&&(wr=v.relatedTarget||v.fromElement)&&(Yr(wr)||wr[E1]))break r;if(x||$){if($=I.window===I?I:($=I.ownerDocument)?$.defaultView||$.parentWindow:window,x){if(wr=v.relatedTarget||v.toElement,x=X,wr=wr?Yr(wr):null,wr!==null&&(zg=rr(wr),Mr=wr.tag,wr!==zg||Mr!==5&&Mr!==27&&Mr!==6))wr=null}else x=null,wr=X;if(x!==wr){if(Mr=g7,F="onMouseLeave",sr="onMouseEnter",e="mouse",r==="pointerout"||r==="pointerover")Mr=o7,F="onPointerLeave",sr="onPointerEnter",e="pointer";if(zg=x==null?$:Tr(x),U=wr==null?$:Tr(wr),$=new Mr(F,e+"leave",x,v,I),$.target=zg,$.relatedTarget=U,F=null,Yr(I)===X&&(Mr=new Mr(sr,e+"enter",wr,v,I),Mr.target=U,Mr.relatedTarget=zg,F=Mr),zg=F,x&&wr)g:{Mr=kz,sr=x,e=wr,U=0;for(F=sr;F;F=Mr(F))U++;F=0;for(var t=e;t;t=Mr(t))F++;for(;0<U-F;)sr=Mr(sr),U--;for(;0<F-U;)e=Mr(e),F--;for(;U--;){if(sr===e||e!==null&&sr===e.alternate){Mr=sr;break g}sr=Mr(sr),e=Mr(e)}Mr=null}else Mr=null;x!==null&&S9(B,$,x,Mr,!1),wr!==null&&zg!==null&&S9(B,zg,wr,Mr,!0)}}}r:{if($=X?Tr(X):window,x=$.nodeName&&$.nodeName.toLowerCase(),x==="select"||x==="input"&&$.type==="file")var Hr=rA;else if(dq($))if(O7)Hr=aQ;else{Hr=fQ;var Br=jQ}else x=$.nodeName,!x||x.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?X&&lw(X.elementType)&&(Hr=rA):Hr=pQ;if(Hr&&(Hr=Hr(r,X))){sq(B,Hr,v,I);break r}Br&&Br(r,$,X),r==="focusout"&&X&&$.type==="number"&&X.memoizedProps.value!=null&&Su($,"number",$.value)}switch(Br=X?Tr(X):window,r){case"focusin":if(dq(Br)||Br.contentEditable==="true")H5=Br,PH=X,cw=null;break;case"focusout":cw=PH=H5=null;break;case"mousedown":qH=!0;break;case"contextmenu":case"mouseup":case"dragend":qH=!1,bA(B,v,I);break;case"selectionchange":if(Ue)break;case"keydown":case"keyup":bA(B,v,I)}var er;if(HH)r:{switch(r){case"compositionstart":var Jr="onCompositionStart";break r;case"compositionend":Jr="onCompositionEnd";break r;case"compositionupdate":Jr="onCompositionUpdate";break r}Jr=void 0}else O5?pq(r,v)&&(Jr="onCompositionEnd"):r==="keydown"&&v.keyCode===l7&&(Jr="onCompositionStart");if(Jr&&(h7&&v.locale!=="ko"&&(O5||Jr!=="onCompositionStart"?Jr==="onCompositionEnd"&&O5&&(er=jq()):(y1=I,wH=("value"in y1)?y1.value:y1.textContent,O5=!0)),Br=S4(X,Jr),0<Br.length&&(Jr=new v7(Jr,r,null,v,I),B.push({event:Jr,listeners:Br}),er?Jr.data=er:(er=aq(v),er!==null&&(Jr.data=er)))),er=ee?_Q(r,v):EQ(r,v))Jr=S4(X,"onBeforeInput"),0<Jr.length&&(Br=new ue("onBeforeInput","beforeinput",null,v,I),B.push({event:Br,listeners:Jr}),Br.data=er);iz(B,r,X,v,I)}C9(B,g)})}function Iw(r,g,v){return{instance:r,listener:g,currentTarget:v}}function S4(r,g){for(var v=g+"Capture",l=[];r!==null;){var w=r,b=w.stateNode;if(w=w.tag,w!==5&&w!==26&&w!==27||b===null||(w=ww(r,v),w!=null&&l.unshift(Iw(r,w,b)),w=ww(r,g),w!=null&&l.push(Iw(r,w,b))),r.tag===3)return l;r=r.return}return[]}function kz(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function S9(r,g,v,l,w){for(var b=g._reactName,H=[];v!==null&&v!==l;){var q=v,R=q.alternate,X=q.stateNode;if(q=q.tag,R!==null&&R===l)break;q!==5&&q!==26&&q!==27||X===null||(R=X,w?(X=ww(v,b),X!=null&&H.unshift(Iw(v,X,R))):w||(X=ww(v,b),X!=null&&H.push(Iw(v,X,R)))),v=v.return}H.length!==0&&r.push({event:g,listeners:H})}function zO(r,g){nQ(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||sW||(sW=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var v={registrationNameDependencies:al,possibleRegistrationNames:gH};lw(r)||typeof g.is==="string"||tQ(r,g,v),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function h0(r,g,v,l){g!==v&&(v=n1(v),n1(g)!==v&&(l[r]=g))}function nz(r,g,v){g.forEach(function(l){v[n9(l)]=l==="style"?eO(r):r.getAttribute(l)})}function Qo(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function i9(r,g){return r=r.namespaceURI===g6||r.namespaceURI===h5?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function n1(r){return s0(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",K0(r)),cg(r)),(typeof r==="string"?r:""+r).replace(de,`
`).replace(se,"")}function k9(r,g){return g=n1(g),n1(r)===g?!0:!1}function Rg(r,g,v,l,w,b){switch(v){case"children":if(typeof l==="string")V2(l,g,!1),g==="body"||g==="textarea"&&l===""||ow(r,l);else if(typeof l==="number"||typeof l==="bigint")V2(""+l,g,!1),g!=="body"&&ow(r,""+l);break;case"className":n2(r,"class",l);break;case"tabIndex":n2(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":n2(r,v,l);break;case"style":_q(r,l,b);break;case"data":if(g!=="object"){n2(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||v!=="href")){v==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v),r.removeAttribute(v);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(v);break}Ag(l,v),l=hw(""+l),r.setAttribute(v,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?v==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(w.encType==null&&w.method==null||V6||(V6=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),w.target==null||t6||(t6=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?v==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||w.type==="submit"||w.type==="image"||D6?g!=="button"||w.type==null||w.type==="submit"||D6?typeof l==="function"&&(w.name==null||i3||(i3=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),w.formEncType==null&&w.formMethod==null||V6||(V6=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),w.formTarget==null||t6||(t6=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(D6=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(D6=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):v==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(v,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(v==="formAction"?(g!=="input"&&Rg(r,g,"name",w.name,w,null),Rg(r,g,"formEncType",w.formEncType,w,null),Rg(r,g,"formMethod",w.formMethod,w,null),Rg(r,g,"formTarget",w.formTarget,w,null)):(Rg(r,g,"encType",w.encType,w,null),Rg(r,g,"method",w.method,w,null),Rg(r,g,"target",w.target,w,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(v);break}Ag(l,v),l=hw(""+l),r.setAttribute(v,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Qo(v,l),r.onclick=Vo);break;case"onScroll":l!=null&&(typeof l!=="function"&&Qo(v,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Qo(v,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=l.__html,v!=null){if(w.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=v}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Ag(l,v),v=hw(""+l),r.setAttributeNS(Mh,"xlink:href",v);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Ag(l,v),r.setAttribute(v,""+l)):r.removeAttribute(v);break;case"inert":l!==""||_6[v]||(_6[v]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",v));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(v,""):r.removeAttribute(v);break;case"capture":case"download":l===!0?r.setAttribute(v,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Ag(l,v),r.setAttribute(v,l)):r.removeAttribute(v);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Ag(l,v),r.setAttribute(v,l)):r.removeAttribute(v);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(v):(Ag(l,v),r.setAttribute(v,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),k2(r,"popover",l);break;case"xlinkActuate":to(r,Mh,"xlink:actuate",l);break;case"xlinkArcrole":to(r,Mh,"xlink:arcrole",l);break;case"xlinkRole":to(r,Mh,"xlink:role",l);break;case"xlinkShow":to(r,Mh,"xlink:show",l);break;case"xlinkTitle":to(r,Mh,"xlink:title",l);break;case"xlinkType":to(r,Mh,"xlink:type",l);break;case"xmlBase":to(r,hP,"xml:base",l);break;case"xmlLang":to(r,hP,"xml:lang",l);break;case"xmlSpace":to(r,hP,"xml:space",l);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),k2(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":k3||l==null||typeof l!=="object"||(k3=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<v.length)||v[0]!=="o"&&v[0]!=="O"||v[1]!=="n"&&v[1]!=="N"?(v=Eq(v),k2(r,v,l)):al.hasOwnProperty(v)&&l!=null&&typeof l!=="function"&&Qo(v,l)}}function KO(r,g,v,l,w,b){switch(v){case"style":_q(r,l,b);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=l.__html,v!=null){if(w.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=v}}break;case"children":typeof l==="string"?ow(r,l):(typeof l==="number"||typeof l==="bigint")&&ow(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Qo(v,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Qo(v,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Qo(v,l),r.onclick=Vo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(al.hasOwnProperty(v))l!=null&&typeof l!=="function"&&Qo(v,l);else r:{if(v[0]==="o"&&v[1]==="n"&&(w=v.endsWith("Capture"),g=v.slice(2,w?v.length-7:void 0),b=r[x0]||null,b=b!=null?b[v]:null,typeof b==="function"&&r.removeEventListener(g,b,w),typeof l==="function")){typeof b!=="function"&&b!==null&&(v in r?r[v]=null:r.hasAttribute(v)&&r.removeAttribute(v)),r.addEventListener(g,l,w);break r}v in r?r[v]=l:l===!0?r.setAttribute(v,""):k2(r,v,l)}}}function W0(r,g,v){switch(zO(g,v),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,w=!1,b;for(b in v)if(v.hasOwnProperty(b)){var H=v[b];if(H!=null)switch(b){case"src":l=!0;break;case"srcSet":w=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Rg(r,g,b,H,v,null)}}w&&Rg(r,g,"srcSet",v.srcSet,v,null),l&&Rg(r,g,"src",v.src,v,null);return;case"input":I1("input",v),dr("invalid",r);var q=b=H=w=null,R=null,X=null;for(l in v)if(v.hasOwnProperty(l)){var I=v[l];if(I!=null)switch(l){case"name":w=I;break;case"type":H=I;break;case"checked":R=I;break;case"defaultChecked":X=I;break;case"value":b=I;break;case"defaultValue":q=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Rg(r,g,l,I,v,null)}}Fq(r,v),Iq(r,b,q,R,X,H,w,!1);return;case"select":I1("select",v),dr("invalid",r),l=H=b=null;for(w in v)if(v.hasOwnProperty(w)&&(q=v[w],q!=null))switch(w){case"value":b=q;break;case"defaultValue":H=q;break;case"multiple":l=q;default:Rg(r,g,w,q,v,null)}Zq(r,v),g=b,v=H,r.multiple=!!l,g!=null?mh(r,!!l,g,!1):v!=null&&mh(r,!!l,v,!0);return;case"textarea":I1("textarea",v),dr("invalid",r),b=w=l=null;for(H in v)if(v.hasOwnProperty(H)&&(q=v[H],q!=null))switch(H){case"value":l=q;break;case"defaultValue":w=q;break;case"children":b=q;break;case"dangerouslySetInnerHTML":if(q!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Rg(r,g,H,q,v,null)}xq(r,v),Cq(r,l,w,b);return;case"option":Bq(r,v);for(R in v)if(v.hasOwnProperty(R)&&(l=v[R],l!=null))switch(R){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Rg(r,g,R,l,v,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<Kb.length;l++)dr(Kb[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in v)if(v.hasOwnProperty(X)&&(l=v[X],l!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Rg(r,g,X,l,v,null)}return;default:if(lw(g)){for(I in v)v.hasOwnProperty(I)&&(l=v[I],l!==void 0&&KO(r,g,I,l,v,void 0));return}}for(q in v)v.hasOwnProperty(q)&&(l=v[q],l!=null&&Rg(r,g,q,l,v,null))}function Dz(r,g,v,l){switch(zO(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var w=null,b=null,H=null,q=null,R=null,X=null,I=null;for(x in v){var B=v[x];if(v.hasOwnProperty(x)&&B!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":R=B;default:l.hasOwnProperty(x)||Rg(r,g,x,null,l,B)}}for(var $ in l){var x=l[$];if(B=v[$],l.hasOwnProperty($)&&(x!=null||B!=null))switch($){case"type":b=x;break;case"name":w=x;break;case"checked":X=x;break;case"defaultChecked":I=x;break;case"value":H=x;break;case"defaultValue":q=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==B&&Rg(r,g,$,x,l,B)}}g=v.type==="checkbox"||v.type==="radio"?v.checked!=null:v.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||S3||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),S3=!0),!g||l||m3||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),m3=!0),mu(r,H,q,R,X,I,b,w);return;case"select":x=H=q=$=null;for(b in v)if(R=v[b],v.hasOwnProperty(b)&&R!=null)switch(b){case"value":break;case"multiple":x=R;default:l.hasOwnProperty(b)||Rg(r,g,b,null,l,R)}for(w in l)if(b=l[w],R=v[w],l.hasOwnProperty(w)&&(b!=null||R!=null))switch(w){case"value":$=b;break;case"defaultValue":q=b;break;case"multiple":H=b;default:b!==R&&Rg(r,g,w,b,l,R)}l=q,g=H,v=x,$!=null?mh(r,!!g,$,!1):!!v!==!!g&&(l!=null?mh(r,!!g,l,!0):mh(r,!!g,g?[]:"",!1));return;case"textarea":x=$=null;for(q in v)if(w=v[q],v.hasOwnProperty(q)&&w!=null&&!l.hasOwnProperty(q))switch(q){case"value":break;case"children":break;default:Rg(r,g,q,null,l,w)}for(H in l)if(w=l[H],b=v[H],l.hasOwnProperty(H)&&(w!=null||b!=null))switch(H){case"value":$=w;break;case"defaultValue":x=w;break;case"children":break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:w!==b&&Rg(r,g,H,w,l,b)}Tq(r,$,x);return;case"option":for(var wr in v)if($=v[wr],v.hasOwnProperty(wr)&&$!=null&&!l.hasOwnProperty(wr))switch(wr){case"selected":r.selected=!1;break;default:Rg(r,g,wr,null,l,$)}for(R in l)if($=l[R],x=v[R],l.hasOwnProperty(R)&&$!==x&&($!=null||x!=null))switch(R){case"selected":r.selected=$&&typeof $!=="function"&&typeof $!=="symbol";break;default:Rg(r,g,R,$,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Mr in v)$=v[Mr],v.hasOwnProperty(Mr)&&$!=null&&!l.hasOwnProperty(Mr)&&Rg(r,g,Mr,null,l,$);for(X in l)if($=l[X],x=v[X],l.hasOwnProperty(X)&&$!==x&&($!=null||x!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Rg(r,g,X,$,l,x)}return;default:if(lw(g)){for(var zg in v)$=v[zg],v.hasOwnProperty(zg)&&$!==void 0&&!l.hasOwnProperty(zg)&&KO(r,g,zg,void 0,l,$);for(I in l)$=l[I],x=v[I],!l.hasOwnProperty(I)||$===x||$===void 0&&x===void 0||KO(r,g,I,$,l,x);return}}for(var sr in v)$=v[sr],v.hasOwnProperty(sr)&&$!=null&&!l.hasOwnProperty(sr)&&Rg(r,g,sr,null,l,$);for(B in l)$=l[B],x=v[B],!l.hasOwnProperty(B)||$===x||$==null&&x==null||Rg(r,g,B,$,l,x)}function n9(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function eO(r){var g={};r=r.style;for(var v=0;v<r.length;v++){var l=r[v];g[l]=r.getPropertyValue(l)}return g}function D9(r,g,v){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,w=l="",b;for(b in g)if(g.hasOwnProperty(b)){var H=g[b];H!=null&&typeof H!=="boolean"&&H!==""&&(b.indexOf("--")===0?(d5(H,b),l+=w+b+":"+(""+H).trim()):typeof H!=="number"||H===0||aW.has(b)?(d5(H,b),l+=w+b.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+(""+H).trim()):l+=w+b.replace(yW,"-$1").toLowerCase().replace(cW,"-ms-")+":"+H+"px",w=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=n1(l),n1(g)!==l&&(v.style=eO(r)))}}function ev(r,g,v,l,w,b){if(w.delete(v),r=r.getAttribute(v),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Ag(l,g),r===""+l)return}h0(g,r,l,b)}function t9(r,g,v,l,w,b){if(w.delete(v),r=r.getAttribute(v),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}h0(g,r,l,b)}function $O(r,g,v,l,w,b){if(w.delete(v),r=r.getAttribute(v),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Ag(l,v),r===""+l)return}h0(g,r,l,b)}function V9(r,g,v,l,w,b){if(w.delete(v),r=r.getAttribute(v),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Ag(l,g),r===""+l))return}h0(g,r,l,b)}function UO(r,g,v,l,w,b){if(w.delete(v),r=r.getAttribute(v),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Ag(l,g),v=hw(""+l),r===v)return}h0(g,r,l,b)}function _9(r,g,v,l){for(var w={},b=new Set,H=r.attributes,q=0;q<H.length;q++)switch(H[q].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(H[q].name)}if(lw(g)){for(var R in v)if(v.hasOwnProperty(R)){var X=v[R];if(X!=null){if(al.hasOwnProperty(R))typeof X!=="function"&&Qo(R,X);else if(v.suppressHydrationWarning!==!0)switch(R){case"children":typeof X!=="string"&&typeof X!=="number"||h0("children",r.textContent,X,w);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":H=r.innerHTML,X=X?X.__html:void 0,X!=null&&(X=i9(r,X),h0(R,H,X,w));continue;case"style":b.delete(R),D9(r,X,w);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(R.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",R);continue;case"className":b.delete("class"),H=$q(r,"class",X),h0("className",H,X,w);continue;default:l.context===q1&&g!=="svg"&&g!=="math"?b.delete(R.toLowerCase()):b.delete(R),H=$q(r,R,X),h0(R,H,X,w)}}}}else for(X in v)if(v.hasOwnProperty(X)&&(R=v[X],R!=null)){if(al.hasOwnProperty(X))typeof R!=="function"&&Qo(X,R);else if(v.suppressHydrationWarning!==!0)switch(X){case"children":typeof R!=="string"&&typeof R!=="number"||h0("children",r.textContent,R,w);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":H=r.innerHTML,R=R?R.__html:void 0,R!=null&&(R=i9(r,R),H!==R&&(w[X]={__html:H}));continue;case"className":ev(r,X,"class",R,b,w);continue;case"tabIndex":ev(r,X,"tabindex",R,b,w);continue;case"style":b.delete(X),D9(r,R,w);continue;case"multiple":b.delete(X),h0(X,r.multiple,R,w);continue;case"muted":b.delete(X),h0(X,r.muted,R,w);continue;case"autoFocus":b.delete("autofocus"),h0(X,r.autofocus,R,w);continue;case"data":if(g!=="object"){b.delete(X),H=r.getAttribute("data"),h0(X,H,R,w);continue}case"src":case"href":if(!(R!==""||g==="a"&&X==="href"||g==="object"&&X==="data")){X==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',X,X):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',X,X);continue}UO(r,X,X,R,b,w);continue;case"action":case"formAction":if(H=r.getAttribute(X),typeof R==="function"){b.delete(X.toLowerCase()),X==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(H===r$){b.delete(X.toLowerCase()),h0(X,"function",R,w);continue}UO(r,X,X.toLowerCase(),R,b,w);continue;case"xlinkHref":UO(r,X,"xlink:href",R,b,w);continue;case"contentEditable":$O(r,X,"contenteditable",R,b,w);continue;case"spellCheck":$O(r,X,"spellcheck",R,b,w);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":$O(r,X,X,R,b,w);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t9(r,X,X.toLowerCase(),R,b,w);continue;case"capture":case"download":r:{q=r;var I=H=X,B=w;if(b.delete(I),q=q.getAttribute(I),q===null)switch(typeof R){case"undefined":case"function":case"symbol":break r;default:if(R===!1)break r}else if(R!=null)switch(typeof R){case"function":case"symbol":break;case"boolean":if(R===!0&&q==="")break r;break;default:if(Ag(R,H),q===""+R)break r}h0(H,q,R,B)}continue;case"cols":case"rows":case"size":case"span":r:{if(q=r,I=H=X,B=w,b.delete(I),q=q.getAttribute(I),q===null)switch(typeof R){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(R)||1>R)break r}else if(R!=null)switch(typeof R){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(R)||1>R)&&(Ag(R,H),q===""+R))break r}h0(H,q,R,B)}continue;case"rowSpan":V9(r,X,"rowspan",R,b,w);continue;case"start":V9(r,X,X,R,b,w);continue;case"xHeight":ev(r,X,"x-height",R,b,w);continue;case"xlinkActuate":ev(r,X,"xlink:actuate",R,b,w);continue;case"xlinkArcrole":ev(r,X,"xlink:arcrole",R,b,w);continue;case"xlinkRole":ev(r,X,"xlink:role",R,b,w);continue;case"xlinkShow":ev(r,X,"xlink:show",R,b,w);continue;case"xlinkTitle":ev(r,X,"xlink:title",R,b,w);continue;case"xlinkType":ev(r,X,"xlink:type",R,b,w);continue;case"xmlBase":ev(r,X,"xml:base",R,b,w);continue;case"xmlLang":ev(r,X,"xml:lang",R,b,w);continue;case"xmlSpace":ev(r,X,"xml:space",R,b,w);continue;case"inert":R!==""||_6[X]||(_6[X]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",X)),t9(r,X,X,R,b,w);continue;default:if(!(2<X.length)||X[0]!=="o"&&X[0]!=="O"||X[1]!=="n"&&X[1]!=="N"){q=Eq(X),H=!1,l.context===q1&&g!=="svg"&&g!=="math"?b.delete(q.toLowerCase()):(I=X.toLowerCase(),I=v6.hasOwnProperty(I)?v6[I]||null:null,I!==null&&I!==X&&(H=!0,b.delete(I)),b.delete(q));r:if(I=r,B=q,q=R,rw(B))if(I.hasAttribute(B))I=I.getAttribute(B),Ag(q,B),q=I===""+q?q:I;else{switch(typeof q){case"function":case"symbol":break r;case"boolean":if(I=B.toLowerCase().slice(0,5),I!=="data-"&&I!=="aria-")break r}q=q===void 0?void 0:null}else q=void 0;H||h0(X,q,R,w)}}}return 0<b.size&&v.suppressHydrationWarning!==!0&&nz(r,b,w),Object.keys(w).length===0?null:w}function tz(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function E9(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vz(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,v=performance.getEntriesByType("resource"),l=0;l<v.length;l++){var w=v[l],b=w.transferSize,H=w.initiatorType,q=w.duration;if(b&&q&&E9(H)){H=0,q=w.responseEnd;for(l+=1;l<v.length;l++){var R=v[l],X=R.startTime;if(X>q)break;var{transferSize:I,initiatorType:B}=R;I&&E9(B)&&(R=R.responseEnd,H+=I*(R<q?1:(q-X)/(R-X)))}if(--l,g+=8*(b+H)/(w.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function i4(r){return r.nodeType===9?r:r.ownerDocument}function y9(r){switch(r){case h5:return C5;case g6:return y6;default:return q1}}function c9(r,g){if(r===q1)switch(g){case"svg":return C5;case"math":return y6;default:return q1}return r===C5&&g==="foreignObject"?q1:r}function LO(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function _z(){var r=window.event;if(r&&r.type==="popstate"){if(r===OP)return!1;return OP=r,!0}return OP=null,!1}function Bw(){var r=window.event;return r&&r!==Ub?r.type:null}function Nw(){var r=window.event;return r&&r!==Ub?r.timeStamp:-1.1}function Ez(r){setTimeout(function(){throw r})}function yz(r,g,v){switch(g){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src?r.src=v.src:v.srcSet&&(r.srcset=v.srcSet)}}function cz(){}function jz(r,g,v,l){Dz(r,g,v,l),r[x0]=l}function j9(r){ow(r,"")}function fz(r,g,v){r.nodeValue=v}function f9(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[x0]||null;if(g!==null){var v=xr(r);v!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,ur(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,ur(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function D1(r){return r==="head"}function pz(r,g){r.removeChild(g)}function az(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function p9(r,g){var v=g,l=0;do{var w=v.nextSibling;if(r.removeChild(v),w&&w.nodeType===8)if(v=w.data,v===$b||v===E6){if(l===0){r.removeChild(w),sh(g);return}l--}else if(v===eb||v===Pl||v===Rh||v===T5||v===Wh)l++;else if(v===v$)Zw(r.ownerDocument.documentElement);else if(v===l$){v=r.ownerDocument.head,Zw(v);for(var b=v.firstChild;b;){var{nextSibling:H,nodeName:q}=b;b[kw]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&b.rel.toLowerCase()==="stylesheet"||v.removeChild(b),b=H}}else v===o$&&Zw(r.ownerDocument.body);v=w}while(v);sh(g)}function a9(r,g){var v=r;r=0;do{var l=v.nextSibling;if(v.nodeType===1?g?(v._stashedDisplay=v.style.display,v.style.display="none"):(v.style.display=v._stashedDisplay||"",v.getAttribute("style")===""&&v.removeAttribute("style")):v.nodeType===3&&(g?(v._stashedText=v.nodeValue,v.nodeValue=""):v.nodeValue=v._stashedText||""),l&&l.nodeType===8)if(v=l.data,v===$b)if(r===0)break;else r--;else v!==eb&&v!==Pl&&v!==Rh&&v!==T5||r++;v=l}while(v)}function dz(r){a9(r,!0)}function sz(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function rK(r){r.nodeValue=""}function gK(r){a9(r,!1)}function vK(r,g){g=g[h$],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function oK(r,g){r.nodeValue=g}function FO(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var v=g;switch(g=g.nextSibling,v.nodeName){case"HTML":case"HEAD":case"BODY":FO(v),Or(v);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(v.rel.toLowerCase()==="stylesheet")continue}r.removeChild(v)}}function lK(r,g,v,l){for(;r.nodeType===1;){var w=v;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){Ag(w.name,"name");var b=w.name==null?null:""+w.name;if(w.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;else if(!r[kw])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(b!==w.rel||r.getAttribute("href")!==(w.href==null||w.href===""?null:w.href)||r.getAttribute("crossorigin")!==(w.crossOrigin==null?null:w.crossOrigin)||r.getAttribute("title")!==(w.title==null?null:w.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(w.src==null?null:w.src)||r.getAttribute("type")!==(w.type==null?null:w.type)||r.getAttribute("crossorigin")!==(w.crossOrigin==null?null:w.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=uv(r.nextSibling),r===null)break}return null}function hK(r,g,v){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!v)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function d9(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function IO(r){return r.data===Pl||r.data===Rh}function BO(r){return r.data===T5||r.data===Pl&&r.ownerDocument.readyState!==D3}function wK(r,g){var v=r.ownerDocument;if(r.data===Rh)r._reactRetry=g;else if(r.data!==Pl||v.readyState!==D3)g();else{var l=function(){g(),v.removeEventListener("DOMContentLoaded",l)};v.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function uv(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===eb||g===T5||g===Pl||g===Rh||g===Wh||g===wP||g===n3)break;if(g===$b||g===E6)return null}}return r}function s9(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),v={},l=r.attributes,w=0;w<l.length;w++){var b=l[w];v[n9(b.name)]=b.name.toLowerCase()==="style"?eO(r):b.value}return{type:g,props:v}}return r.nodeType===8?r.data===Wh?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function rW(r,g,v){return v===null||v[g$]!==!0?(r.nodeValue===g?r=null:(g=n1(g),r=n1(r.nodeValue)===g?null:r.nodeValue),r):null}function NO(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var v=r.data;if(v===$b||v===E6){if(g===0)return uv(r.nextSibling);g--}else v!==eb&&v!==T5&&v!==Pl&&v!==Rh&&v!==Wh||g++}r=r.nextSibling}return null}function gW(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var v=r.data;if(v===eb||v===T5||v===Pl||v===Rh||v===Wh){if(g===0)return r;g--}else v!==$b&&v!==E6||g++}r=r.previousSibling}return null}function bK(r){sh(r)}function uK(r){sh(r)}function OK(r){sh(r)}function vW(r,g,v,l,w){switch(w&&tu(r,l.ancestorInfo),g=i4(v),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function HK(r,g,v,l){if(!v[E1]&&xr(v)){var w=v.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",w,w,w)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(w=v.attributes;w.length;)v.removeAttributeNode(w[0]);W0(v,r,g),v[R0]=l,v[x0]=g}function Zw(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);Or(r)}function k4(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function oW(r,g,v){var l=m5;if(l&&typeof g==="string"&&g){var w=Kv(g);w='link[rel="'+r+'"][href="'+w+'"]',typeof v==="string"&&(w+='[crossorigin="'+v+'"]'),c3.has(w)||(c3.add(w),r={rel:r,crossOrigin:v,href:g},l.querySelector(w)===null&&(g=l.createElement("link"),W0(g,"link",r),$r(g),l.head.appendChild(g)))}}function lW(r,g,v,l){var w=(w=V1.current)?k4(w):null;if(!w)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof v.precedence==="string"&&typeof v.href==="string"?(v=ah(v.href),g=og(w).hoistableStyles,l=g.get(v),l||(l={type:"style",instance:null,count:0,state:null},g.set(v,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(v.rel==="stylesheet"&&typeof v.href==="string"&&typeof v.precedence==="string"){r=ah(v.href);var b=og(w).hoistableStyles,H=b.get(r);if(!H&&(w=w.ownerDocument||w,H={type:"stylesheet",instance:null,count:0,state:{loading:Xh,preload:null}},b.set(r,H),(b=w.querySelector(xw(r)))&&!b._p&&(H.instance=b,H.state.loading=Lb|Cv),!mv.has(r))){var q={rel:"preload",as:"style",href:v.href,crossOrigin:v.crossOrigin,integrity:v.integrity,media:v.media,hrefLang:v.hrefLang,referrerPolicy:v.referrerPolicy};mv.set(r,q),b||PK(w,r,q,H.state)}if(g&&l===null)throw v=`

  - `+n4(g)+`
  + `+n4(v),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return H}if(g&&l!==null)throw v=`

  - `+n4(g)+`
  + `+n4(v),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return null;case"script":return g=v.async,v=v.src,typeof v==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(v=dh(v),g=og(w).hoistableScripts,l=g.get(v),l||(l={type:"script",instance:null,count:0,state:null},g.set(v,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function n4(r){var g=0,v="<link";return typeof r.rel==="string"?(g++,v+=' rel="'+r.rel+'"'):tv.call(r,"rel")&&(g++,v+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,v+=' href="'+r.href+'"'):tv.call(r,"href")&&(g++,v+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,v+=' precedence="'+r.precedence+'"'):tv.call(r,"precedence")&&(g++,v+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(v+=" ..."),v+" />"}function ah(r){return'href="'+Kv(r)+'"'}function xw(r){return'link[rel="stylesheet"]['+r+"]"}function hW(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function PK(r,g,v,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=Lb:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=Lb}),g.addEventListener("error",function(){return l.loading|=E3}),W0(g,"link",v),$r(g),r.head.appendChild(g))}function dh(r){return'[src="'+Kv(r)+'"]'}function Tw(r){return"script[async]"+r}function wW(r,g,v){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+Kv(v.href)+'"]');if(l)return g.instance=l,$r(l),l;var w=cr({},v,{"data-href":v.href,"data-precedence":v.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),$r(l),W0(l,"style",w),D4(l,v.precedence,r),g.instance=l;case"stylesheet":w=ah(v.href);var b=r.querySelector(xw(w));if(b)return g.state.loading|=Cv,g.instance=b,$r(b),b;l=hW(v),(w=mv.get(w))&&ZO(l,w),b=(r.ownerDocument||r).createElement("link"),$r(b);var H=b;return H._p=new Promise(function(q,R){H.onload=q,H.onerror=R}),W0(b,"link",l),g.state.loading|=Cv,D4(b,v.precedence,r),g.instance=b;case"script":if(b=dh(v.src),w=r.querySelector(Tw(b)))return g.instance=w,$r(w),w;if(l=v,w=mv.get(b))l=cr({},v),xO(l,w);return r=r.ownerDocument||r,w=r.createElement("script"),$r(w),W0(w,"link",l),r.head.appendChild(w),g.instance=w;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&Cv)===Xh&&(l=g.instance,g.state.loading|=Cv,D4(l,v.precedence,r));return g.instance}function D4(r,g,v){for(var l=v.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),w=l.length?l[l.length-1]:null,b=w,H=0;H<l.length;H++){var q=l[H];if(q.dataset.precedence===g)b=q;else if(b!==w)break}b?b.parentNode.insertBefore(r,b.nextSibling):(g=v.nodeType===9?v.head:v,g.insertBefore(r,g.firstChild))}function ZO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function xO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function bW(r,g,v){if(c6===null){var l=new Map,w=c6=new Map;w.set(v,l)}else w=c6,l=w.get(v),l||(l=new Map,w.set(v,l));if(l.has(r))return l;l.set(r,null),v=v.getElementsByTagName(r);for(w=0;w<v.length;w++){var b=v[w];if(!(b[kw]||b[R0]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==h5){var H=b.getAttribute(g)||"";H=r+H;var q=l.get(H);q?q.push(b):l.set(H,[b])}}return l}function uW(r,g,v){r=r.ownerDocument||r,r.head.insertBefore(v,g==="title"?r.querySelector("head > title"):null)}function qK(r,g,v){var l=!v.ancestorInfo.containerTagInScope;if(v.context===C5||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:w,disabled:b}=g;v=[],g.onLoad&&v.push("`onLoad`"),w&&v.push("`onError`"),b!=null&&v.push("`disabled`"),w=tz(v,"and"),w+=v.length===1?" prop":" props",b=v.length===1?"an "+w:"the "+w,v.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,b,w)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function OW(r){return r.type==="stylesheet"&&(r.state.loading&y3)===Xh?!1:!0}function AK(r,g,v,l){if(v.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(v.state.loading&Cv)===Xh){if(v.instance===null){var w=ah(l.href),b=g.querySelector(xw(w));if(b){g=b._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=t4.bind(r),g.then(r,r)),v.state.loading|=Cv,v.instance=b,$r(b);return}b=g.ownerDocument||g,l=hW(l),(w=mv.get(w))&&ZO(l,w),b=b.createElement("link"),$r(b);var H=b;H._p=new Promise(function(q,R){H.onload=q,H.onerror=R}),W0(b,"link",l),v.instance=b}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(v,g),(g=v.state.preload)&&(v.state.loading&y3)===Xh&&(r.count++,v=t4.bind(r),g.addEventListener("load",v),g.addEventListener("error",v))}}function MK(r,g){return r.stylesheets&&r.count===0&&V4(r,r.stylesheets),0<r.count||0<r.imgCount?function(v){var l=setTimeout(function(){if(r.stylesheets&&V4(r,r.stylesheets),r.unsuspend){var b=r.unsuspend;r.unsuspend=null,b()}},u$+g);0<r.imgBytes&&PP===0&&(PP=125*Vz()*H$);var w=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&V4(r,r.stylesheets),r.unsuspend)){var b=r.unsuspend;r.unsuspend=null,b()}},(r.imgBytes>PP?50:O$)+g);return r.unsuspend=v,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(w)}}:null}function t4(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)V4(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function V4(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,j6=new Map,g.forEach(WK,r),j6=null,t4.call(r))}function WK(r,g){if(!(g.state.loading&Cv)){var v=j6.get(r);if(v)var l=v.get(qP);else{v=new Map,j6.set(r,v);for(var w=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<w.length;b++){var H=w[b];if(H.nodeName==="LINK"||H.getAttribute("media")!=="not all")v.set(H.dataset.precedence,H),l=H}l&&v.set(qP,l)}w=g.instance,H=w.getAttribute("data-precedence"),b=v.get(H)||l,b===l&&v.set(qP,w),v.set(H,w),this.count++,l=t4.bind(this),w.addEventListener("load",l),w.addEventListener("error",l),b?b.parentNode.insertBefore(w,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(w,r.firstChild)),g.state.loading|=Cv}}function RK(r,g,v,l,w,b,H,q,R){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Gh,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ch(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ch(0),this.hiddenUpdates=Ch(null),this.identifierPrefix=l,this.onUncaughtError=w,this.onCaughtError=b,this.onRecoverableError=H,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=v?"hydrateRoot()":"createRoot()"}function HW(r,g,v,l,w,b,H,q,R,X,I,B){return r=new RK(r,g,v,H,R,X,I,B,q),g=Ce,b===!0&&(g|=L0|_v),g|=Dr,b=K(3,null,null,g),r.current=b,b.stateNode=r,g=b8(),_l(g),r.pooledCache=g,_l(g),b.memoizedState={element:l,isDehydrated:v,cache:g},q8(b),r}function PW(r){if(!r)return f1;return r=f1,r}function TO(r,g,v,l,w,b){if(U0&&typeof U0.onScheduleFiberRoot==="function")try{U0.onScheduleFiberRoot(o5,l,v)}catch(H){$o||($o=!0,console.error("React instrumentation encountered an error: %o",H))}w=PW(w),l.context===null?l.context=w:l.pendingContext=w,eo&&Hv!==null&&!a3&&(a3=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,i(Hv)||"Unknown")),l=T1(g),l.payload={element:v},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),l.callback=b),v=C1(r,l,g),v!==null&&(Oo(g,"root.render()",null),Tg(v,r,g),Mw(v,r,g))}function qW(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var v=r.retryLane;r.retryLane=v!==0&&v<g?v:g}}function CO(r,g){qW(r,g),(r=r.alternate)&&qW(r,g)}function AW(r){if(r.tag===13||r.tag===31){var g=$0(r,67108864);g!==null&&Tg(g,r,67108864),CO(r,67108864)}}function MW(r){if(r.tag===13||r.tag===31){var g=bv(r);g=Cl(g);var v=$0(r,g);v!==null&&Tg(v,r,g),CO(r,g)}}function GK(){return Hv}function XK(r,g,v,l){var w=S.T;S.T=null;var b=ug.p;try{ug.p=Pv,mO(r,g,v,l)}finally{ug.p=b,S.T=w}}function YK(r,g,v,l){var w=S.T;S.T=null;var b=ug.p;try{ug.p=Vv,mO(r,g,v,l)}finally{ug.p=b,S.T=w}}function mO(r,g,v,l){if(p6){var w=SO(l);if(w===null)QO(r,g,l,a6,v),RW(r,l);else if(JK(w,r,g,v,l))l.stopPropagation();else if(RW(r,l),g&4&&-1<q$.indexOf(r)){for(;w!==null;){var b=xr(w);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var H=ho(b.pendingLanes);if(H!==0){var q=b;q.pendingLanes|=2;for(q.entangledLanes|=2;H;){var R=1<<31-Z0(H);q.entanglements[1]|=R,H&=~R}Jo(b),(vg&(l0|Wv))===O0&&(x6=w0()+$3,Fw(0,!1))}}break;case 31:case 13:q=$0(b,2),q!==null&&Tg(q,b,2),jh(),CO(b,2)}if(b=SO(l),b===null&&QO(r,g,l,a6,v),b===w)break;w=b}w!==null&&l.stopPropagation()}else QO(r,g,l,null,v)}}function SO(r){return r=Vu(r),iO(r)}function iO(r){if(a6=null,r=Yr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var v=g.tag;if(v===13){if(r=qr(g),r!==null)return r;r=null}else if(v===31){if(r=or(g),r!==null)return r;r=null}else if(v===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return a6=r,null}function WW(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Pv;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Vv;case"message":switch(IK()){case aO:return Pv;case dO:return Vv;case v5:case BK:return Lo;case sO:return s4;default:return Lo}default:return Lo}}function RW(r,g){switch(r){case"focusin":case"focusout":ql=null;break;case"dragenter":case"dragleave":Al=null;break;case"mouseover":case"mouseout":Ml=null;break;case"pointerover":case"pointerout":Ib.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bb.delete(g.pointerId)}}function Cw(r,g,v,l,w,b){if(r===null||r.nativeEvent!==b)return r={blockedOn:g,domEventName:v,eventSystemFlags:l,nativeEvent:b,targetContainers:[w]},g!==null&&(g=xr(g),g!==null&&AW(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,w!==null&&g.indexOf(w)===-1&&g.push(w),r}function JK(r,g,v,l,w){switch(g){case"focusin":return ql=Cw(ql,r,g,v,l,w),!0;case"dragenter":return Al=Cw(Al,r,g,v,l,w),!0;case"mouseover":return Ml=Cw(Ml,r,g,v,l,w),!0;case"pointerover":var b=w.pointerId;return Ib.set(b,Cw(Ib.get(b)||null,r,g,v,l,w)),!0;case"gotpointercapture":return b=w.pointerId,Bb.set(b,Cw(Bb.get(b)||null,r,g,v,l,w)),!0}return!1}function GW(r){var g=Yr(r.target);if(g!==null){var v=rr(g);if(v!==null){if(g=v.tag,g===13){if(g=qr(v),g!==null){r.blockedOn=g,gr(r.priority,function(){MW(v)});return}}else if(g===31){if(g=or(v),g!==null){r.blockedOn=g,gr(r.priority,function(){MW(v)});return}}else if(g===3&&v.stateNode.current.memoizedState.isDehydrated){r.blockedOn=v.tag===3?v.stateNode.containerInfo:null;return}}}r.blockedOn=null}function _4(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var v=SO(r.nativeEvent);if(v===null){v=r.nativeEvent;var l=new v.constructor(v.type,v),w=l;nw!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),nw=w,v.target.dispatchEvent(l),nw===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),nw=null}else return g=xr(v),g!==null&&AW(g),r.blockedOn=v,!1;g.shift()}return!0}function XW(r,g,v){_4(r)&&v.delete(g)}function QK(){AP=!1,ql!==null&&_4(ql)&&(ql=null),Al!==null&&_4(Al)&&(Al=null),Ml!==null&&_4(Ml)&&(Ml=null),Ib.forEach(XW),Bb.forEach(XW)}function E4(r,g){r.blockedOn===g&&(r.blockedOn=null,AP||(AP=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,QK)))}function YW(r){d6!==r&&(d6=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){d6===r&&(d6=null);for(var g=0;g<r.length;g+=3){var v=r[g],l=r[g+1],w=r[g+2];if(typeof l!=="function")if(iO(l||v)===null)continue;else break;var b=xr(v);b!==null&&(r.splice(g,3),g-=3,v={pending:!0,data:w,method:v.method,action:l},Object.freeze(v),i8(b,v,l,w))}}))}function sh(r){function g(R){return E4(R,r)}ql!==null&&E4(ql,r),Al!==null&&E4(Al,r),Ml!==null&&E4(Ml,r),Ib.forEach(g),Bb.forEach(g);for(var v=0;v<Wl.length;v++){var l=Wl[v];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Wl.length&&(v=Wl[0],v.blockedOn===null);)GW(v),v.blockedOn===null&&Wl.shift();if(v=(r.ownerDocument||r).$$reactFormReplay,v!=null)for(l=0;l<v.length;l+=3){var w=v[l],b=v[l+1],H=w[x0]||null;if(typeof b==="function")H||YW(v);else if(H){var q=null;if(b&&b.hasAttribute("formAction")){if(w=b,H=b[x0]||null)q=H.formAction;else if(iO(w)!==null)continue}else q=H.action;typeof q==="function"?v[l+1]=q:(v.splice(l,3),l-=3),YW(v)}}}function JW(){function r(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(H){return w=H})},focusReset:"manual",scroll:"manual"})}function g(){w!==null&&(w(),w=null),l||setTimeout(v,20)}function v(){if(!l&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,w=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(v,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),w!==null&&(w(),w=null)}}}function kO(r){this._internalRoot=r}function y4(r){this._internalRoot=r}function QW(r){r[E1]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,zK=Symbol.for("react.element"),zo=Symbol.for("react.transitional.element"),r5=Symbol.for("react.portal"),g5=Symbol.for("react.fragment"),c4=Symbol.for("react.strict_mode"),nO=Symbol.for("react.profiler"),DO=Symbol.for("react.consumer"),Ko=Symbol.for("react.context"),mw=Symbol.for("react.forward_ref"),tO=Symbol.for("react.suspense"),VO=Symbol.for("react.suspense_list"),j4=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),_O=Symbol.for("react.activity"),KK=Symbol.for("react.memo_cache_sentinel"),zW=Symbol.iterator,eK=Symbol.for("react.client.reference"),v0=Array.isArray,S=i5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ug=RP.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$K=Object.freeze({pending:!1,data:null,method:null,action:null}),EO=[],yO=[],ao=-1,t1=Qr(null),Sw=Qr(null),V1=Qr(null),f4=Qr(null),iw=0,KW,eW,$W,UW,LW,FW,IW;k.__reactDisabledLog=!0;var cO,BW,jO=!1,fO=new(typeof WeakMap==="function"?WeakMap:Map),Hv=null,eo=!1,tv=Object.prototype.hasOwnProperty,pO=lg.unstable_scheduleCallback,UK=lg.unstable_cancelCallback,LK=lg.unstable_shouldYield,FK=lg.unstable_requestPaint,w0=lg.unstable_now,IK=lg.unstable_getCurrentPriorityLevel,aO=lg.unstable_ImmediatePriority,dO=lg.unstable_UserBlockingPriority,v5=lg.unstable_NormalPriority,BK=lg.unstable_LowPriority,sO=lg.unstable_IdlePriority,NK=lg.log,ZK=lg.unstable_setDisableYieldValue,o5=null,U0=null,$o=!1,Uo=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Z0=Math.clz32?Math.clz32:S2,xK=Math.log,TK=Math.LN2,p4=256,a4=262144,d4=4194304,Pv=2,Vv=8,Lo=32,s4=268435456,_1=Math.random().toString(36).slice(2),R0="__reactFiber$"+_1,x0="__reactProps$"+_1,E1="__reactContainer$"+_1,rH="__reactEvents$"+_1,CK="__reactListeners$"+_1,mK="__reactHandles$"+_1,NW="__reactResources$"+_1,kw="__reactMarker$"+_1,ZW=new Set,al={},gH={},SK={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},iK=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xW={},TW={},kK=/[\n"\\]/g,CW=!1,mW=!1,SW=!1,iW=!1,kW=!1,nW=!1,DW=["value","defaultValue"],tW=!1,VW=/["'&<>\n\t]|^\s|\s$/,nK="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),_W="applet caption html table td th marquee object template foreignObject desc title".split(" "),DK=_W.concat(["button"]),tK="dd dt li option optgroup p rp rt".split(" "),EW={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},r6={},vH={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},yW=/([A-Z])/g,cW=/^ms-/,VK=/^(?:webkit|moz|o)[A-Z]/,_K=/^-ms-/,EK=/-(.)/g,jW=/;\s*$/,l5={},oH={},fW=!1,pW=!1,aW=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),g6="http://www.w3.org/1998/Math/MathML",h5="http://www.w3.org/2000/svg",yK=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v6={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},dW={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},w5={},cK=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jK=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sW=!1,T0={},r7=/^on./,fK=/^on[^A-Z]/,pK=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aK=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dK=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,nw=null,b5=null,u5=null,lH=!1,Fo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hH=!1;if(Fo)try{var Dw={};Object.defineProperty(Dw,"passive",{get:function(){hH=!0}}),window.addEventListener("test",Dw,Dw),window.removeEventListener("test",Dw,Dw)}catch(r){hH=!1}var y1=null,wH=null,o6=null,dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},l6=E0(dl),tw=cr({},dl,{view:0,detail:0}),sK=E0(tw),bH,uH,Vw,h6=cr({},tw,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==Vw&&(Vw&&r.type==="mousemove"?(bH=r.screenX-Vw.screenX,uH=r.screenY-Vw.screenY):uH=bH=0,Vw=r),bH},movementY:function(r){return"movementY"in r?r.movementY:uH}}),g7=E0(h6),re=cr({},h6,{dataTransfer:0}),ge=E0(re),ve=cr({},tw,{relatedTarget:0}),OH=E0(ve),oe=cr({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),le=E0(oe),he=cr({},dl,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),we=E0(he),be=cr({},dl,{data:0}),v7=E0(be),ue=v7,Oe={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},He={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},qe=cr({},tw,{key:function(r){if(r.key){var g=Oe[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=_2(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?He[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(r){return r.type==="keypress"?_2(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?_2(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Ae=E0(qe),Me=cr({},h6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o7=E0(Me),We=cr({},tw,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Re=E0(We),Ge=cr({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=E0(Ge),Ye=cr({},h6,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Je=E0(Ye),Qe=cr({},dl,{newState:0,oldState:0}),ze=E0(Qe),Ke=[9,13,27,32],l7=229,HH=Fo&&"CompositionEvent"in window,_w=null;Fo&&"documentMode"in document&&(_w=document.documentMode);var ee=Fo&&"TextEvent"in window&&!_w,h7=Fo&&(!HH||_w&&8<_w&&11>=_w),w7=32,b7=String.fromCharCode(w7),u7=!1,O5=!1,$e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ew=null,yw=null,O7=!1;Fo&&(O7=yQ("input")&&(!document.documentMode||9<document.documentMode));var C0=typeof Object.is==="function"?Object.is:dQ,Ue=Fo&&"documentMode"in document&&11>=document.documentMode,H5=null,PH=null,cw=null,qH=!1,P5={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionrun:Sl("Transition","TransitionRun"),transitionstart:Sl("Transition","TransitionStart"),transitioncancel:Sl("Transition","TransitionCancel"),transitionend:Sl("Transition","TransitionEnd")},AH={},H7={};Fo&&(H7=document.createElement("div").style,("AnimationEvent"in window)||(delete P5.animationend.animation,delete P5.animationiteration.animation,delete P5.animationstart.animation),("TransitionEvent"in window)||delete P5.transitionend.transition);var P7=il("animationend"),q7=il("animationiteration"),A7=il("animationstart"),Le=il("transitionrun"),Fe=il("transitionstart"),Ie=il("transitioncancel"),M7=il("transitionend"),W7=new Map,MH="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");MH.push("scrollEnd");var R7=0;if(typeof performance==="object"&&typeof performance.now==="function")var Be=performance,G7=function(){return Be.now()};else{var Ne=Date;G7=function(){return Ne.now()}}var WH=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},Ze="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",w6=0,RH=1,GH=2,XH=3,b6="– ",u6="+ ",X7="  ",$g=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",$v="Components ⚛",jr="Scheduler ⚛",fr="Blocking",c1=!1,so={color:"primary",properties:null,tooltipText:"",track:$v},j1={start:-0,end:-0,detail:{devtools:so}},xe=["Changed Props",""],Y7="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",Te=["Changed Props",Y7],jw=1,r1=2,Uv=[],q5=0,YH=0,f1={};Object.freeze(f1);var Lv=null,A5=null,Fr=0,Ce=1,Dr=2,L0=8,_v=16,me=32,J7=!1;try{var Q7=Object.preventExtensions({})}catch(r){J7=!0}var JH=new WeakMap,M5=[],W5=0,O6=null,fw=0,Fv=[],Iv=0,sl=null,g1=1,v1="",G0=null,Ug=null,ar=!1,Io=!1,qv=null,p1=null,Bv=!1,QH=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),zH=Qr(null),KH=Qr(null),z7={},H6=null,R5=null,G5=!1,Se=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(v,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(v){return v()})}},ie=lg.unstable_scheduleCallback,ke=lg.unstable_NormalPriority,jg={$$typeof:Ko,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=lg.unstable_now,P6=console.createTask?console.createTask:function(){return null},pw=1,q6=2,b0=-0,a1=-0,o1=-0,l1=null,m0=-1.1,rh=-0,Ng=-0,Ur=-1.1,Lr=-1.1,Ig=null,Cg=!1,d1=-0,Bo=-1.1,aw=null,s1=0,eH=null,$H=null,gh=-1.1,dw=null,X5=-1.1,A6=-1.1,No=-0,h1=-1.1,Nv=-1.1,UH=0,sw=null,K7=null,e7=null,rl=-1.1,vh=null,gl=-1.1,M6=-1.1,$7=-0,U7=-0,W6=0,w1=null,L7=0,rb=-1.1,R6=!1,G6=!1,gb=null,LH=0,oh=0,Y5=null,F7=S.S;S.S=function(r,g){if(K3=w0(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>h1&&0>Nv){h1=fg();var v=Nw(),l=Bw();if(v!==gl||l!==vh)gl=-1.1;rl=v,vh=l}hz(r,g)}F7!==null&&F7(r,g)};var lh=Qr(null),Ev={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},vb=[],ob=[],lb=[],hb=[],wb=[],bb=[],hh=new Set;Ev.recordUnsafeLifecycleWarnings=function(r,g){hh.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&vb.push(r),r.mode&L0&&typeof g.UNSAFE_componentWillMount==="function"&&ob.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&lb.push(r),r.mode&L0&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&hb.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&wb.push(r),r.mode&L0&&typeof g.UNSAFE_componentWillUpdate==="function"&&bb.push(r))},Ev.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<vb.length&&(vb.forEach(function(q){r.add(i(q)||"Component"),hh.add(q.type)}),vb=[]);var g=new Set;0<ob.length&&(ob.forEach(function(q){g.add(i(q)||"Component"),hh.add(q.type)}),ob=[]);var v=new Set;0<lb.length&&(lb.forEach(function(q){v.add(i(q)||"Component"),hh.add(q.type)}),lb=[]);var l=new Set;0<hb.length&&(hb.forEach(function(q){l.add(i(q)||"Component"),hh.add(q.type)}),hb=[]);var w=new Set;0<wb.length&&(wb.forEach(function(q){w.add(i(q)||"Component"),hh.add(q.type)}),wb=[]);var b=new Set;if(0<bb.length&&(bb.forEach(function(q){b.add(i(q)||"Component"),hh.add(q.type)}),bb=[]),0<g.size){var H=G(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,H)}0<l.size&&(H=G(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,H)),0<b.size&&(H=G(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,H)),0<r.size&&(H=G(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H)),0<v.size&&(H=G(v),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H)),0<w.size&&(H=G(w),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,H))};var X6=new Map,I7=new Set;Ev.recordLegacyContextWarning=function(r,g){var v=null;for(var l=r;l!==null;)l.mode&L0&&(v=l),l=l.return;v===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!I7.has(r.type)&&(l=X6.get(v),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],X6.set(v,l)),l.push(r))},Ev.flushLegacyContextWarning=function(){X6.forEach(function(r){if(r.length!==0){var g=r[0],v=new Set;r.forEach(function(w){v.add(i(w)||"Component"),I7.add(w.type)});var l=G(v);ur(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},Ev.discardPendingWarnings=function(){vb=[],ob=[],lb=[],hb=[],wb=[],bb=[],X6=new Map};var B7={react_stack_bottom_frame:function(r,g,v){var l=eo;eo=!0;try{return r(g,v)}finally{eo=l}}},FH=B7.react_stack_bottom_frame.bind(B7),N7={react_stack_bottom_frame:function(r){var g=eo;eo=!0;try{return r.render()}finally{eo=g}}},Z7=N7.react_stack_bottom_frame.bind(N7),x7={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(v){bg(r,r.return,v)}}},IH=x7.react_stack_bottom_frame.bind(x7),T7={react_stack_bottom_frame:function(r,g,v,l,w){try{g.componentDidUpdate(v,l,w)}catch(b){bg(r,r.return,b)}}},C7=T7.react_stack_bottom_frame.bind(T7),m7={react_stack_bottom_frame:function(r,g){var v=g.stack;r.componentDidCatch(g.value,{componentStack:v!==null?v:""})}},ne=m7.react_stack_bottom_frame.bind(m7),S7={react_stack_bottom_frame:function(r,g,v){try{v.componentWillUnmount()}catch(l){bg(r,g,l)}}},i7=S7.react_stack_bottom_frame.bind(S7),k7={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},De=k7.react_stack_bottom_frame.bind(k7),n7={react_stack_bottom_frame:function(r,g,v){try{v()}catch(l){bg(r,g,l)}}},te=n7.react_stack_bottom_frame.bind(n7),D7={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},Ve=D7.react_stack_bottom_frame.bind(D7),J5=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),BH=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Y6=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),J6={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},wh=null,ub=!1,Q5=null,Ob=0,tr=null,NH,t7=NH=!1,V7={},_7={},E7={};Q=function(r,g,v){if(v!==null&&typeof v==="object"&&v._store&&(!v._store.validated&&v.key==null||v._store.validated===2)){if(typeof v._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");v._store.validated=1;var l=i(r),w=l||"null";if(!V7[w]){V7[w]=!0,v=v._owner,r=r._debugOwner;var b="";r&&typeof r.tag==="number"&&(w=i(r))&&(b=`

Check the render method of \``+w+"`."),b||l&&(b=`

Check the top-level render call using <`+l+">.");var H="";v!=null&&r!==v&&(l=null,typeof v.tag==="number"?l=i(v):typeof v.name==="string"&&(l=v.name),l&&(H=" It was passed a child from "+l+".")),ur(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,H)})}}};var bh=SA(!0),y7=SA(!1),c7=0,j7=1,f7=2,ZH=3,vl=!1,p7=!1,xH=null,TH=!1,z5=Qr(null),Q6=Qr(0),Av=Qr(null),Zv=null,K5=1,Hb=2,tg=Qr(0),z6=0,xv=1,S0=2,Mv=4,i0=8,e5,a7=new Set,d7=new Set,CH=new Set,s7=new Set,b1=0,Ir=null,Gg=null,pg=null,K6=!1,$5=!1,uh=!1,e6=0,Pb=0,u1=null,_e=0,Ee=25,C=null,Tv=null,O1=-1,qb=!1,Ab={readContext:Fg,use:i1,useCallback:ig,useContext:ig,useEffect:ig,useImperativeHandle:ig,useLayoutEffect:ig,useInsertionEffect:ig,useMemo:ig,useReducer:ig,useRef:ig,useState:ig,useDebugValue:ig,useDeferredValue:ig,useTransition:ig,useSyncExternalStore:ig,useId:ig,useHostTransitionStatus:ig,useFormState:ig,useActionState:ig,useOptimistic:ig,useMemoCache:ig,useCacheRefresh:ig};Ab.useEffectEvent=ig;var mH=null,r3=null,SH=null,g3=null,Zo=null,yv=null,$6=null;mH={readContext:function(r){return Fg(r)},use:i1,useCallback:function(r,g){return C="useCallback",yr(),Dh(g),T8(r,g)},useContext:function(r){return C="useContext",yr(),Fg(r)},useEffect:function(r,g){return C="useEffect",yr(),Dh(g),X4(r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",yr(),Dh(v),x8(r,g,v)},useInsertionEffect:function(r,g){C="useInsertionEffect",yr(),Dh(g),yl(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",yr(),Dh(g),Z8(r,g)},useMemo:function(r,g){C="useMemo",yr(),Dh(g);var v=S.H;S.H=Zo;try{return C8(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",yr();var l=S.H;S.H=Zo;try{return K8(r,g,v)}finally{S.H=l}},useRef:function(r){return C="useRef",yr(),B8(r)},useState:function(r){C="useState",yr();var g=S.H;S.H=Zo;try{return L8(r)}finally{S.H=g}},useDebugValue:function(){C="useDebugValue",yr()},useDeferredValue:function(r,g){return C="useDeferredValue",yr(),m8(r,g)},useTransition:function(){return C="useTransition",yr(),k8()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",yr(),$8(r,g,v)},useId:function(){return C="useId",yr(),n8()},useFormState:function(r,g){return C="useFormState",yr(),A4(),Vh(r,g)},useActionState:function(r,g){return C="useActionState",yr(),Vh(r,g)},useOptimistic:function(r){return C="useOptimistic",yr(),F8(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return C="useCacheRefresh",yr(),D8()},useEffectEvent:function(r){return C="useEffectEvent",yr(),N8(r)}},r3={readContext:function(r){return Fg(r)},use:i1,useCallback:function(r,g){return C="useCallback",a(),T8(r,g)},useContext:function(r){return C="useContext",a(),Fg(r)},useEffect:function(r,g){return C="useEffect",a(),X4(r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",a(),x8(r,g,v)},useInsertionEffect:function(r,g){C="useInsertionEffect",a(),yl(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",a(),Z8(r,g)},useMemo:function(r,g){C="useMemo",a();var v=S.H;S.H=Zo;try{return C8(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",a();var l=S.H;S.H=Zo;try{return K8(r,g,v)}finally{S.H=l}},useRef:function(r){return C="useRef",a(),B8(r)},useState:function(r){C="useState",a();var g=S.H;S.H=Zo;try{return L8(r)}finally{S.H=g}},useDebugValue:function(){C="useDebugValue",a()},useDeferredValue:function(r,g){return C="useDeferredValue",a(),m8(r,g)},useTransition:function(){return C="useTransition",a(),k8()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",a(),$8(r,g,v)},useId:function(){return C="useId",a(),n8()},useActionState:function(r,g){return C="useActionState",a(),Vh(r,g)},useFormState:function(r,g){return C="useFormState",a(),A4(),Vh(r,g)},useOptimistic:function(r){return C="useOptimistic",a(),F8(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return C="useCacheRefresh",a(),D8()},useEffectEvent:function(r){return C="useEffectEvent",a(),N8(r)}},SH={readContext:function(r){return Fg(r)},use:i1,useCallback:function(r,g){return C="useCallback",a(),Q4(r,g)},useContext:function(r){return C="useContext",a(),Fg(r)},useEffect:function(r,g){C="useEffect",a(),y0(2048,i0,r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",a(),J4(r,g,v)},useInsertionEffect:function(r,g){return C="useInsertionEffect",a(),y0(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",a(),y0(4,Mv,r,g)},useMemo:function(r,g){C="useMemo",a();var v=S.H;S.H=yv;try{return z4(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",a();var l=S.H;S.H=yv;try{return th(r,g,v)}finally{S.H=l}},useRef:function(){return C="useRef",a(),Hg().memoizedState},useState:function(){C="useState",a();var r=S.H;S.H=yv;try{return th(nv)}finally{S.H=r}},useDebugValue:function(){C="useDebugValue",a()},useDeferredValue:function(r,g){return C="useDeferredValue",a(),hM(r,g)},useTransition:function(){return C="useTransition",a(),PM()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",a(),W4(r,g,v)},useId:function(){return C="useId",a(),Hg().memoizedState},useFormState:function(r){return C="useFormState",a(),A4(),R4(r)},useActionState:function(r){return C="useActionState",a(),R4(r)},useOptimistic:function(r,g){return C="useOptimistic",a(),fA(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return C="useCacheRefresh",a(),Hg().memoizedState},useEffectEvent:function(r){return C="useEffectEvent",a(),Y4(r)}},g3={readContext:function(r){return Fg(r)},use:i1,useCallback:function(r,g){return C="useCallback",a(),Q4(r,g)},useContext:function(r){return C="useContext",a(),Fg(r)},useEffect:function(r,g){C="useEffect",a(),y0(2048,i0,r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",a(),J4(r,g,v)},useInsertionEffect:function(r,g){return C="useInsertionEffect",a(),y0(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",a(),y0(4,Mv,r,g)},useMemo:function(r,g){C="useMemo",a();var v=S.H;S.H=$6;try{return z4(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",a();var l=S.H;S.H=$6;try{return Xw(r,g,v)}finally{S.H=l}},useRef:function(){return C="useRef",a(),Hg().memoizedState},useState:function(){C="useState",a();var r=S.H;S.H=$6;try{return Xw(nv)}finally{S.H=r}},useDebugValue:function(){C="useDebugValue",a()},useDeferredValue:function(r,g){return C="useDeferredValue",a(),wM(r,g)},useTransition:function(){return C="useTransition",a(),qM()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",a(),W4(r,g,v)},useId:function(){return C="useId",a(),Hg().memoizedState},useFormState:function(r){return C="useFormState",a(),A4(),G4(r)},useActionState:function(r){return C="useActionState",a(),G4(r)},useOptimistic:function(r,g){return C="useOptimistic",a(),aA(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return C="useCacheRefresh",a(),Hg().memoizedState},useEffectEvent:function(r){return C="useEffectEvent",a(),Y4(r)}},Zo={readContext:function(r){return J(),Fg(r)},use:function(r){return W(),i1(r)},useCallback:function(r,g){return C="useCallback",W(),yr(),T8(r,g)},useContext:function(r){return C="useContext",W(),yr(),Fg(r)},useEffect:function(r,g){return C="useEffect",W(),yr(),X4(r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",W(),yr(),x8(r,g,v)},useInsertionEffect:function(r,g){C="useInsertionEffect",W(),yr(),yl(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",W(),yr(),Z8(r,g)},useMemo:function(r,g){C="useMemo",W(),yr();var v=S.H;S.H=Zo;try{return C8(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",W(),yr();var l=S.H;S.H=Zo;try{return K8(r,g,v)}finally{S.H=l}},useRef:function(r){return C="useRef",W(),yr(),B8(r)},useState:function(r){C="useState",W(),yr();var g=S.H;S.H=Zo;try{return L8(r)}finally{S.H=g}},useDebugValue:function(){C="useDebugValue",W(),yr()},useDeferredValue:function(r,g){return C="useDeferredValue",W(),yr(),m8(r,g)},useTransition:function(){return C="useTransition",W(),yr(),k8()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",W(),yr(),$8(r,g,v)},useId:function(){return C="useId",W(),yr(),n8()},useFormState:function(r,g){return C="useFormState",W(),yr(),Vh(r,g)},useActionState:function(r,g){return C="useActionState",W(),yr(),Vh(r,g)},useOptimistic:function(r){return C="useOptimistic",W(),yr(),F8(r)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return C="useCacheRefresh",yr(),D8()},useEffectEvent:function(r){return C="useEffectEvent",W(),yr(),N8(r)}},yv={readContext:function(r){return J(),Fg(r)},use:function(r){return W(),i1(r)},useCallback:function(r,g){return C="useCallback",W(),a(),Q4(r,g)},useContext:function(r){return C="useContext",W(),a(),Fg(r)},useEffect:function(r,g){C="useEffect",W(),a(),y0(2048,i0,r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",W(),a(),J4(r,g,v)},useInsertionEffect:function(r,g){return C="useInsertionEffect",W(),a(),y0(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",W(),a(),y0(4,Mv,r,g)},useMemo:function(r,g){C="useMemo",W(),a();var v=S.H;S.H=yv;try{return z4(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",W(),a();var l=S.H;S.H=yv;try{return th(r,g,v)}finally{S.H=l}},useRef:function(){return C="useRef",W(),a(),Hg().memoizedState},useState:function(){C="useState",W(),a();var r=S.H;S.H=yv;try{return th(nv)}finally{S.H=r}},useDebugValue:function(){C="useDebugValue",W(),a()},useDeferredValue:function(r,g){return C="useDeferredValue",W(),a(),hM(r,g)},useTransition:function(){return C="useTransition",W(),a(),PM()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",W(),a(),W4(r,g,v)},useId:function(){return C="useId",W(),a(),Hg().memoizedState},useFormState:function(r){return C="useFormState",W(),a(),R4(r)},useActionState:function(r){return C="useActionState",W(),a(),R4(r)},useOptimistic:function(r,g){return C="useOptimistic",W(),a(),fA(r,g)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return C="useCacheRefresh",a(),Hg().memoizedState},useEffectEvent:function(r){return C="useEffectEvent",W(),a(),Y4(r)}},$6={readContext:function(r){return J(),Fg(r)},use:function(r){return W(),i1(r)},useCallback:function(r,g){return C="useCallback",W(),a(),Q4(r,g)},useContext:function(r){return C="useContext",W(),a(),Fg(r)},useEffect:function(r,g){C="useEffect",W(),a(),y0(2048,i0,r,g)},useImperativeHandle:function(r,g,v){return C="useImperativeHandle",W(),a(),J4(r,g,v)},useInsertionEffect:function(r,g){return C="useInsertionEffect",W(),a(),y0(4,S0,r,g)},useLayoutEffect:function(r,g){return C="useLayoutEffect",W(),a(),y0(4,Mv,r,g)},useMemo:function(r,g){C="useMemo",W(),a();var v=S.H;S.H=yv;try{return z4(r,g)}finally{S.H=v}},useReducer:function(r,g,v){C="useReducer",W(),a();var l=S.H;S.H=yv;try{return Xw(r,g,v)}finally{S.H=l}},useRef:function(){return C="useRef",W(),a(),Hg().memoizedState},useState:function(){C="useState",W(),a();var r=S.H;S.H=yv;try{return Xw(nv)}finally{S.H=r}},useDebugValue:function(){C="useDebugValue",W(),a()},useDeferredValue:function(r,g){return C="useDeferredValue",W(),a(),wM(r,g)},useTransition:function(){return C="useTransition",W(),a(),qM()},useSyncExternalStore:function(r,g,v){return C="useSyncExternalStore",W(),a(),W4(r,g,v)},useId:function(){return C="useId",W(),a(),Hg().memoizedState},useFormState:function(r){return C="useFormState",W(),a(),G4(r)},useActionState:function(r){return C="useActionState",W(),a(),G4(r)},useOptimistic:function(r,g){return C="useOptimistic",W(),a(),aA(r,g)},useMemoCache:function(r){return W(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return C="useCacheRefresh",a(),Hg().memoizedState},useEffectEvent:function(r){return C="useEffectEvent",W(),a(),Y4(r)}};var v3={},o3=new Set,l3=new Set,h3=new Set,w3=new Set,b3=new Set,u3=new Set,O3=new Set,H3=new Set,P3=new Set,q3=new Set;Object.freeze(v3);var iH={enqueueSetState:function(r,g,v){r=r._reactInternals;var l=bv(r),w=T1(l);w.payload=g,v!==void 0&&v!==null&&(V8(v),w.callback=v),g=C1(r,w,l),g!==null&&(Oo(l,"this.setState()",r),Tg(g,r,l),Mw(g,r,l))},enqueueReplaceState:function(r,g,v){r=r._reactInternals;var l=bv(r),w=T1(l);w.tag=j7,w.payload=g,v!==void 0&&v!==null&&(V8(v),w.callback=v),g=C1(r,w,l),g!==null&&(Oo(l,"this.replaceState()",r),Tg(g,r,l),Mw(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var v=bv(r),l=T1(v);l.tag=f7,g!==void 0&&g!==null&&(V8(g),l.callback=g),g=C1(r,l,v),g!==null&&(Oo(v,"this.forceUpdate()",r),Tg(g,r,v),Mw(g,r,v))}},U5=null,kH=null,nH=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),ag=!1,A3={},M3={},W3={},R3={},L5=!1,G3={},U6={},DH={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},X3=!1,Y3=null;Y3=new Set;var H1=!1,dg=!1,tH=!1,J3=typeof WeakSet==="function"?WeakSet:Set,u0=null,F5=null,I5=null,sg=null,f0=!1,cv=null,o0=!1,Mb=8192,ye={getCacheForType:function(r){var g=Fg(jg),v=g.data.get(r);return v===void 0&&(v=r(),g.data.set(r,v)),v},cacheSignal:function(){return Fg(jg).controller.signal},getOwner:function(){return Hv}};if(typeof Symbol==="function"&&Symbol.for){var Wb=Symbol.for;Wb("selector.component"),Wb("selector.has_pseudo_class"),Wb("selector.role"),Wb("selector.test_id"),Wb("selector.text")}var ce=[],je=typeof WeakMap==="function"?WeakMap:Map,O0=0,l0=2,Wv=4,P1=0,Rb=1,Oh=2,L6=3,ol=4,F6=6,Q3=5,vg=O0,Xg=null,Er=null,Vr=0,p0=0,I6=1,Hh=2,Gb=3,z3=4,VH=5,Xb=6,B6=7,_H=8,Ph=9,Pg=p0,Rv=null,ll=!1,B5=!1,EH=!1,xo=0,Zg=P1,hl=0,wl=0,yH=0,a0=0,qh=0,Yb=null,k0=null,N6=!1,Z6=0,K3=0,e3=300,x6=1/0,$3=500,Jb=null,kg=null,bl=null,T6=0,cH=1,jH=2,U3=3,ul=0,L3=1,F3=2,I3=3,B3=4,C6=5,r0=0,Ol=null,N5=null,jv=0,fH=0,pH=-0,aH=null,N3=null,Z3=null,fv=T6,x3=null,fe=50,Qb=0,dH=null,sH=!1,m6=!1,pe=50,Ah=0,zb=null,Z5=!1,S6=null,T3=!1,C3=new Set,ae={},i6=null,x5=null,rP=!1,gP=!1,k6=!1,vP=!1,Hl=0,oP={};(function(){for(var r=0;r<MH.length;r++){var g=MH[r],v=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),kv(v,"on"+g)}kv(P7,"onAnimationEnd"),kv(q7,"onAnimationIteration"),kv(A7,"onAnimationStart"),kv("dblclick","onDoubleClick"),kv("focusin","onFocus"),kv("focusout","onBlur"),kv(Le,"onTransitionRun"),kv(Fe,"onTransitionStart"),kv(Ie,"onTransitionCancel"),kv(M7,"onTransitionEnd")})(),rv("onMouseEnter",["mouseout","mouseover"]),rv("onMouseLeave",["mouseout","mouseover"]),rv("onPointerEnter",["pointerout","pointerover"]),rv("onPointerLeave",["pointerout","pointerover"]),e0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),e0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),e0("onBeforeInput",["compositionend","keypress","textInput","paste"]),e0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),e0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),e0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kb)),n6="_reactListening"+Math.random().toString(36).slice(2),m3=!1,S3=!1,D6=!1,i3=!1,t6=!1,V6=!1,k3=!1,_6={},de=/\r\n?/g,se=/\u0000|\uFFFD/g,Mh="http://www.w3.org/1999/xlink",hP="http://www.w3.org/XML/1998/namespace",r$="javascript:throw new Error('React form unexpectedly submitted.')",g$="suppressHydrationWarning",Wh="&",E6="/&",eb="$",$b="/$",Pl="$?",Rh="$~",T5="$!",v$="html",o$="body",l$="head",wP="F!",n3="F",D3="loading",h$="style",q1=0,C5=1,y6=2,bP=null,uP=null,t3={dialog:!0,webview:!0},OP=null,Ub=void 0,V3=typeof setTimeout==="function"?setTimeout:void 0,w$=typeof clearTimeout==="function"?clearTimeout:void 0,Gh=-1,_3=typeof Promise==="function"?Promise:void 0,b$=typeof queueMicrotask==="function"?queueMicrotask:typeof _3<"u"?function(r){return _3.resolve(null).then(r).catch(Ez)}:V3,HP=null,Xh=0,Lb=1,E3=2,y3=3,Cv=4,mv=new Map,c3=new Set,A1=ug.d;ug.d={f:function(){var r=A1.f(),g=jh();return r||g},r:function(r){var g=xr(r);g!==null&&g.tag===5&&g.type==="form"?HM(g):A1.r(r)},D:function(r){A1.D(r),oW("dns-prefetch",r,null)},C:function(r,g){A1.C(r,g),oW("preconnect",r,g)},L:function(r,g,v){A1.L(r,g,v);var l=m5;if(l&&r&&g){var w='link[rel="preload"][as="'+Kv(g)+'"]';g==="image"?v&&v.imageSrcSet?(w+='[imagesrcset="'+Kv(v.imageSrcSet)+'"]',typeof v.imageSizes==="string"&&(w+='[imagesizes="'+Kv(v.imageSizes)+'"]')):w+='[href="'+Kv(r)+'"]':w+='[href="'+Kv(r)+'"]';var b=w;switch(g){case"style":b=ah(r);break;case"script":b=dh(r)}mv.has(b)||(r=cr({rel:"preload",href:g==="image"&&v&&v.imageSrcSet?void 0:r,as:g},v),mv.set(b,r),l.querySelector(w)!==null||g==="style"&&l.querySelector(xw(b))||g==="script"&&l.querySelector(Tw(b))||(g=l.createElement("link"),W0(g,"link",r),$r(g),l.head.appendChild(g)))}},m:function(r,g){A1.m(r,g);var v=m5;if(v&&r){var l=g&&typeof g.as==="string"?g.as:"script",w='link[rel="modulepreload"][as="'+Kv(l)+'"][href="'+Kv(r)+'"]',b=w;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=dh(r)}if(!mv.has(b)&&(r=cr({rel:"modulepreload",href:r},g),mv.set(b,r),v.querySelector(w)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(v.querySelector(Tw(b)))return}l=v.createElement("link"),W0(l,"link",r),$r(l),v.head.appendChild(l)}}},X:function(r,g){A1.X(r,g);var v=m5;if(v&&r){var l=og(v).hoistableScripts,w=dh(r),b=l.get(w);b||(b=v.querySelector(Tw(w)),b||(r=cr({src:r,async:!0},g),(g=mv.get(w))&&xO(r,g),b=v.createElement("script"),$r(b),W0(b,"link",r),v.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(w,b))}},S:function(r,g,v){A1.S(r,g,v);var l=m5;if(l&&r){var w=og(l).hoistableStyles,b=ah(r);g=g||"default";var H=w.get(b);if(!H){var q={loading:Xh,preload:null};if(H=l.querySelector(xw(b)))q.loading=Lb|Cv;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},v),(v=mv.get(b))&&ZO(r,v);var R=H=l.createElement("link");$r(R),W0(R,"link",r),R._p=new Promise(function(X,I){R.onload=X,R.onerror=I}),R.addEventListener("load",function(){q.loading|=Lb}),R.addEventListener("error",function(){q.loading|=E3}),q.loading|=Cv,D4(H,g,l)}H={type:"stylesheet",instance:H,count:1,state:q},w.set(b,H)}}},M:function(r,g){A1.M(r,g);var v=m5;if(v&&r){var l=og(v).hoistableScripts,w=dh(r),b=l.get(w);b||(b=v.querySelector(Tw(w)),b||(r=cr({src:r,async:!0,type:"module"},g),(g=mv.get(w))&&xO(r,g),b=v.createElement("script"),$r(b),W0(b,"link",r),v.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},l.set(w,b))}}};var m5=typeof document>"u"?null:document,c6=null,u$=60000,O$=800,H$=500,PP=0,qP=null,j6=null,Yh=$K,Fb={$$typeof:Ko,Provider:null,Consumer:null,_currentValue:Yh,_currentValue2:Yh,_threadCount:0},j3="%c%s%c",f3="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",p3="",f6=" ",P$=Function.prototype.bind,a3=!1,d3=null,s3=null,rR=null,gR=null,vR=null,oR=null,lR=null,hR=null,wR=null,bR=null;d3=function(r,g,v,l){g=o(r,g),g!==null&&(v=h(g.memoizedState,v,0,l),g.memoizedState=v,g.baseState=v,r.memoizedProps=cr({},r.memoizedProps),v=$0(r,2),v!==null&&Tg(v,r,2))},s3=function(r,g,v){g=o(r,g),g!==null&&(v=P(g.memoizedState,v,0),g.memoizedState=v,g.baseState=v,r.memoizedProps=cr({},r.memoizedProps),v=$0(r,2),v!==null&&Tg(v,r,2))},rR=function(r,g,v,l){g=o(r,g),g!==null&&(v=u(g.memoizedState,v,l),g.memoizedState=v,g.baseState=v,r.memoizedProps=cr({},r.memoizedProps),v=$0(r,2),v!==null&&Tg(v,r,2))},gR=function(r,g,v){r.pendingProps=h(r.memoizedProps,g,0,v),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$0(r,2),g!==null&&Tg(g,r,2)},vR=function(r,g){r.pendingProps=P(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$0(r,2),g!==null&&Tg(g,r,2)},oR=function(r,g,v){r.pendingProps=u(r.memoizedProps,g,v),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=$0(r,2),g!==null&&Tg(g,r,2)},lR=function(r){var g=$0(r,2);g!==null&&Tg(g,r,2)},hR=function(r){var g=Th(),v=$0(r,g);v!==null&&Tg(v,r,g)},wR=function(r){M=r},bR=function(r){A=r};var p6=!0,a6=null,AP=!1,ql=null,Al=null,Ml=null,Ib=new Map,Bb=new Map,Wl=[],q$="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),d6=null;if(y4.prototype.render=kO.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var v=arguments;typeof v[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):y(v[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof v[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),v=r;var l=g.current,w=bv(l);TO(l,w,v,g,null,null)},y4.prototype.unmount=kO.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(vg&(l0|Wv))!==O0&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),TO(r.current,2,null,r,null,null),jh(),g[E1]=null}},y4.prototype.unstable_scheduleHydration=function(r){if(r){var g=Z();r={blockedOn:null,target:r,priority:g};for(var v=0;v<Wl.length&&g!==0&&g<Wl[v].priority;v++);Wl.splice(v,0,r),v===0&&GW(r)}},function(){var r=i5.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),ug.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=s(g),r=r!==null?lr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.5"};return r.overrideHookState=d3,r.overrideHookStateDeletePath=s3,r.overrideHookStateRenamePath=rR,r.overrideProps=gR,r.overridePropsDeletePath=vR,r.overridePropsRenamePath=oR,r.scheduleUpdate=lR,r.scheduleRetry=hR,r.setErrorHandler=wR,r.setSuspenseHandler=bR,r.scheduleRefresh=j,r.scheduleRoot=N,r.setRefreshHandler=T,r.getCurrentFiber=GK,xh(r)}()&&Fo&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var uR=window.location.protocol;/^(https?|file):$/.test(uR)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(uR==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}L$.createRoot=function(r,g){if(!y(r))throw Error("Target container is not a DOM element.");QW(r);var v=!1,l="",w=XM,b=YM,H=JM;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===zo&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(v=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(w=g.onUncaughtError),g.onCaughtError!==void 0&&(b=g.onCaughtError),g.onRecoverableError!==void 0&&(H=g.onRecoverableError)),g=HW(r,1,!1,null,null,v,l,null,w,b,H,JW),r[E1]=g.current,JO(r),new kO(g)},L$.hydrateRoot=function(r,g,v){if(!y(r))throw Error("Target container is not a DOM element.");QW(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,w="",b=XM,H=YM,q=JM,R=null;return v!==null&&v!==void 0&&(v.unstable_strictMode===!0&&(l=!0),v.identifierPrefix!==void 0&&(w=v.identifierPrefix),v.onUncaughtError!==void 0&&(b=v.onUncaughtError),v.onCaughtError!==void 0&&(H=v.onCaughtError),v.onRecoverableError!==void 0&&(q=v.onRecoverableError),v.formState!==void 0&&(R=v.formState)),g=HW(r,1,!0,g,v!=null?v:null,l,w,R,b,H,q,JW),g.context=PW(null),v=g.current,l=bv(v),l=Cl(l),w=T1(l),w.callback=null,C1(v,w,l),Oo(l,"hydrateRoot()",null),v=l,g.current.lanes=v,L1(g,v),Jo(g),r[E1]=g.current,JO(r),new y4(g)},L$.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var MR=Jh((EZ,AR)=>{AR.exports=qR()});var rg=Jh((DU)=>{var Uh=Ar(hg());(function(){function o(k){if(k==null)return null;if(typeof k==="function")return k.$$typeof===i?null:k.displayName||k.name||null;if(typeof k==="string")return k;switch(k){case T:return"Fragment";case rr:return"Profiler";case y:return"StrictMode";case s:return"Suspense";case lr:return"SuspenseList";case c:return"Activity"}if(typeof k==="object")switch(typeof k.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),k.$$typeof){case j:return"Portal";case or:return k.displayName||"Context";case qr:return(k._context.displayName||"Context")+".Consumer";case p:var n=k.render;return k=k.displayName,k||(k=n.displayName||n.name||"",k=k!==""?"ForwardRef("+k+")":"ForwardRef"),k;case m:return n=k.displayName||null,n!==null?n:o(k.type)||"Memo";case V:n=k._payload,k=k._init;try{return o(k(n))}catch(Pr){}}return null}function h(k){return""+k}function u(k){try{h(k);var n=!1}catch(Xr){n=!0}if(n){n=console;var Pr=n.error,Kr=typeof Symbol==="function"&&Symbol.toStringTag&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Pr.call(n,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Kr),h(k)}}function O(k){if(k===T)return"<>";if(typeof k==="object"&&k!==null&&k.$$typeof===V)return"<...>";try{var n=o(k);return n?"<"+n+">":"<...>"}catch(Pr){return"<...>"}}function P(){var k=Qr.A;return k===null?null:k.getOwner()}function A(){return Error("react-stack-top-frame")}function M(k){if(Gr.call(k,"key")){var n=Object.getOwnPropertyDescriptor(k,"key").get;if(n&&n.isReactWarning)return!1}return k.key!==void 0}function W(k,n){function Pr(){D||(D=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",n))}Pr.isReactWarning=!0,Object.defineProperty(k,"key",{get:Pr,configurable:!0})}function J(){var k=o(this.type);return d[k]||(d[k]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),k=this.props.ref,k!==void 0?k:null}function z(k,n,Pr,Kr,Xr,Sr){var br=Pr.ref;return k={$$typeof:N,type:k,key:n,props:Pr,_owner:Kr},(br!==void 0?br:null)!==null?Object.defineProperty(k,"ref",{enumerable:!1,get:J}):Object.defineProperty(k,"ref",{enumerable:!1,value:null}),k._store={},Object.defineProperty(k._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(k,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(k,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Xr}),Object.defineProperty(k,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Sr}),Object.freeze&&(Object.freeze(k.props),Object.freeze(k)),k}function Q(k,n,Pr,Kr,Xr,Sr){var br=n.children;if(br!==void 0)if(Kr)if(zr(br)){for(Kr=0;Kr<br.length;Kr++)G(br[Kr]);Object.freeze&&Object.freeze(br)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else G(br);if(Gr.call(n,"key")){br=o(k);var ir=Object.keys(n).filter(function(Yg){return Yg!=="key"});Kr=0<ir.length?"{key: someKey, "+ir.join(": ..., ")+": ...}":"{key: someKey}",Rr[br+Kr]||(ir=0<ir.length?"{"+ir.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Kr,br,ir,br),Rr[br+Kr]=!0)}if(br=null,Pr!==void 0&&(u(Pr),br=""+Pr),M(n)&&(u(n.key),br=""+n.key),"key"in n){Pr={};for(var pr in n)pr!=="key"&&(Pr[pr]=n[pr])}else Pr=n;return br&&W(Pr,typeof k==="function"?k.displayName||k.name||"Unknown":k),z(k,br,Pr,P(),Xr,Sr)}function G(k){K(k)?k._store&&(k._store.validated=1):typeof k==="object"&&k!==null&&k.$$typeof===V&&(k._payload.status==="fulfilled"?K(k._payload.value)&&k._payload.value._store&&(k._payload.value._store.validated=1):k._store&&(k._store.validated=1))}function K(k){return typeof k==="object"&&k!==null&&k.$$typeof===N}var N=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),qr=Symbol.for("react.consumer"),or=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),lr=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),c=Symbol.for("react.activity"),i=Symbol.for("react.client.reference"),Qr=Uh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gr=Object.prototype.hasOwnProperty,zr=Array.isArray,mr=console.createTask?console.createTask:function(){return null};Uh={react_stack_bottom_frame:function(k){return k()}};var D,d={},hr=Uh.react_stack_bottom_frame.bind(Uh,A)(),vr=mr(O(A)),Rr={};DU.Fragment=T,DU.jsxDEV=function(k,n,Pr,Kr){var Xr=1e4>Qr.recentlyCreatedOwnerStacks++;return Q(k,n,Pr,Kr,Xr?Error("react-stack-top-frame"):hr,Xr?mr(O(k)):vr)}})()});var Kq=Ar(hg(),1),eq=Ar(MR(),1);var WR=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var RR=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var eR=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var $R=WR+RR+GR+XR+YR+JR+QR+zR+KR+eR;var eg=Ar(hg(),1);var vu=Ar(hg(),1);var ru=(...o)=>o.filter((h,u,O)=>{return Boolean(h)&&h.trim()!==""&&O.indexOf(h)===u}).join(" ").trim();var UR=(o)=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var LR=(o)=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,u,O)=>O?O.toUpperCase():u.toLowerCase());var GP=(o)=>{let h=LR(o);return h.charAt(0).toUpperCase()+h.slice(1)};var Nb=Ar(hg(),1);var gu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var FR=(o)=>{for(let h in o)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};var k5=Ar(hg(),1),i$=k5.createContext({});var IR=()=>k5.useContext(i$);var BR=Nb.forwardRef(({color:o,size:h,strokeWidth:u,absoluteStrokeWidth:O,className:P="",children:A,iconNode:M,...W},J)=>{let{size:z=24,strokeWidth:Q=2,absoluteStrokeWidth:G=!1,color:K="currentColor",className:N=""}=IR()??{},j=O??G?Number(u??Q)*24/Number(h??z):u??Q;return Nb.createElement("svg",{ref:J,...gu,width:h??z??gu.width,height:h??z??gu.height,stroke:o??K,strokeWidth:j,className:ru("lucide",N,P),...!A&&!FR(W)&&{"aria-hidden":"true"},...W},[...M.map(([T,y])=>Nb.createElement(T,y)),...Array.isArray(A)?A:[A]])});var E=(o,h)=>{let u=vu.forwardRef(({className:O,...P},A)=>vu.createElement(BR,{ref:A,iconNode:h,className:ru(`lucide-${UR(GP(o))}`,`lucide-${o}`,O),...P}));return u.displayName=GP(o),u};var k$=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],To=E("braces",k$);var n$=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Rl=E("chart-column",n$);var D$=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],X0=E("code-xml",D$);var t$=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Co=E("file-code-corner",t$);var V$=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gl=E("layers",V$);var _$=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xl=E("loader-circle",_$);var E$=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sv=E("triangle-alert",E$);var y$=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Yl=E("user-round",y$);var c$=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zb=E("activity",c$);var j$=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],xb=E("arrow-down-to-line",j$);var f$=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Tb=E("arrow-up-to-line",f$);var p$=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Cb=E("blocks",p$);var a$=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],zh=E("book-marked",a$);var d$=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],mb=E("book-open",d$);var s$=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Sb=E("calendar",s$);var rU=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ib=E("check",rU);var gU=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Y0=E("chevron-down",gU);var vU=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kb=E("chevron-left",vU);var oU=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],W1=E("chevron-right",oU);var lU=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Gv=E("chevron-up",lU);var hU=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],nb=E("chevrons-up-down",hU);var wU=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Db=E("clock",wU);var bU=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pv=E("copy",bU);var uU=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],av=E("database",uU);var OU=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Kh=E("download",OU);var HU=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],tb=E("eye",HU);var PU=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],eh=E("folder-open",PU);var qU=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Vb=E("hash",qU);var AU=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],_b=E("link-2",AU);var MU=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],Eb=E("list-ordered",MU);var WU=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],yb=E("list",WU);var RU=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],cb=E("lock",RU);var GU=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],n5=E("message-square-plus",GU);var XU=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],jb=E("message-square",XU);var YU=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fb=E("package",YU);var JU=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],dv=E("pencil",JU);var QU=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],pb=E("play",QU);var zU=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ab=E("plus",zU);var KU=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],db=E("radio",KU);var eU=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],R1=E("refresh-cw",eU);var $U=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],sb=E("save",$U);var UU=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Jl=E("search",UU);var LU=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],D5=E("shield-alert",LU);var FU=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],r2=E("shield",FU);var IU=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],g2=E("syringe",IU);var BU=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],mo=E("terminal",BU);var NU=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],$h=E("timer",NU);var ZU=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v2=E("toggle-left",ZU);var xU=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],o2=E("toggle-right",xU);var TU=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],F0=E("trash-2",TU);var CU=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],l2=E("type",CU);var mU=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],h2=E("upload",mU);var SU=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],t5=E("user-plus",SU);var iU=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],w2=E("wrench",iU);var kU=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],n0=E("x",kU);var nU=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],G1=E("zap",nU);var ou={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var Nu=Ar(hg(),1);var e2=Ar(hg(),1);var mg=Ar(rg(),1),tU={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},NR=({script:o,selected:h,dot:u,duration:O,onSelect:P,onEdit:A,sendToBackend:M})=>{let W=(K)=>{K.stopPropagation(),M({type:"update_script",id:o.id,patch:{enabled:!o.enabled}})},J=(K)=>{K.stopPropagation(),M({type:"duplicate_script",id:o.id})},z=(K)=>{if(K.stopPropagation(),!window.confirm(`Delete "${o.name}"?`))return;M({type:"delete_script",id:o.id})},Q=(K)=>{K.stopPropagation(),A()},G=o.bindings?.length??0;return mg.jsxDEV("div",{className:`ls-item${h?" ls-selected":""}${!o.enabled&&o.type!=="library"?" ls-disabled":""}`,onClick:P,children:[mg.jsxDEV("span",{className:tU[u],title:u},void 0,!1,void 0,this),mg.jsxDEV("div",{className:"ls-item-body",children:[mg.jsxDEV("div",{className:"ls-item-name",title:o.name,children:o.name},void 0,!1,void 0,this),mg.jsxDEV("div",{className:"ls-item-meta",children:[o.type!=="library"&&mg.jsxDEV("span",{children:o.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),O!==void 0&&u!=="running"&&mg.jsxDEV("span",{style:{color:u==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[O,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),o.type!=="library"&&G>0&&mg.jsxDEV("div",{className:"ls-item-bindings",children:o.bindings.map((K,N)=>mg.jsxDEV("span",{className:"ls-binding-badge",children:[K.type==="character"?mg.jsxDEV(Yl,{size:9},void 0,!1,void 0,this):mg.jsxDEV(jb,{size:9},void 0,!1,void 0,this),mg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:K.displayName},void 0,!1,void 0,this)]},N,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mg.jsxDEV("div",{className:"ls-item-actions",children:[mg.jsxDEV("button",{className:"ls-icon-btn",onClick:Q,title:"Edit script",children:mg.jsxDEV(dv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.type!=="library"&&mg.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:o.enabled?"Disable":"Enable",children:o.enabled?mg.jsxDEV(o2,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):mg.jsxDEV(v2,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),mg.jsxDEV("button",{className:"ls-icon-btn",onClick:J,title:"Duplicate",children:mg.jsxDEV(pv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),mg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:z,title:"Delete",children:mg.jsxDEV(F0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Sg=Uint8Array,Xv=Uint16Array,FP=Int32Array,hu=new Sg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wu=new Sg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zP=new Sg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SR=function(o,h){var u=new Xv(31);for(var O=0;O<31;++O)u[O]=h+=1<<o[O-1];var P=new FP(u[30]);for(var O=1;O<30;++O)for(var A=u[O];A<u[O+1];++A)P[A]=A-u[O]<<5|O;return{b:u,r:P}},iR=SR(hu,2),kR=iR.b,KP=iR.r;kR[28]=258,KP[258]=28;var nR=SR(wu,0),VU=nR.b,ZR=nR.r,eP=new Xv(32768);for(gg=0;gg<32768;++gg)So=(gg&43690)>>1|(gg&21845)<<1,So=(So&52428)>>2|(So&13107)<<2,So=(So&61680)>>4|(So&3855)<<4,eP[gg]=((So&65280)>>8|(So&255)<<8)>>1;var So,gg,ko=function(o,h,u){var O=o.length,P=0,A=new Xv(h);for(;P<O;++P)if(o[P])++A[o[P]-1];var M=new Xv(h);for(P=1;P<h;++P)M[P]=M[P-1]+A[P-1]<<1;var W;if(u){W=new Xv(1<<h);var J=15-h;for(P=0;P<O;++P)if(o[P]){var z=P<<4|o[P],Q=h-o[P],G=M[o[P]-1]++<<Q;for(var K=G|(1<<Q)-1;G<=K;++G)W[eP[G]>>J]=z}}else{W=new Xv(O);for(P=0;P<O;++P)if(o[P])W[P]=eP[M[o[P]-1]++]>>15-o[P]}return W},Ql=new Sg(288);for(gg=0;gg<144;++gg)Ql[gg]=8;var gg;for(gg=144;gg<256;++gg)Ql[gg]=9;var gg;for(gg=256;gg<280;++gg)Ql[gg]=7;var gg;for(gg=280;gg<288;++gg)Ql[gg]=8;var gg,O2=new Sg(32);for(gg=0;gg<32;++gg)O2[gg]=5;var gg,_U=ko(Ql,9,0),EU=ko(Ql,9,1),yU=ko(O2,5,0),cU=ko(O2,5,1),XP=function(o){var h=o[0];for(var u=1;u<o.length;++u)if(o[u]>h)h=o[u];return h},sv=function(o,h,u){var O=h/8|0;return(o[O]|o[O+1]<<8)>>(h&7)&u},YP=function(o,h){var u=h/8|0;return(o[u]|o[u+1]<<8|o[u+2]<<16)>>(h&7)},IP=function(o){return(o+7)/8|0},H2=function(o,h,u){if(h==null||h<0)h=0;if(u==null||u>o.length)u=o.length;return new Sg(o.subarray(h,u))};var jU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],D0=function(o,h,u){var O=Error(h||jU[o]);if(O.code=o,Error.captureStackTrace)Error.captureStackTrace(O,D0);if(!u)throw O;return O},fU=function(o,h,u,O){var P=o.length,A=O?O.length:0;if(!P||h.f&&!h.l)return u||new Sg(0);var M=!u,W=M||h.i!=2,J=h.i;if(M)u=new Sg(P*3);var z=function(ur){var _0=u.length;if(ur>_0){var K0=new Sg(Math.max(_0*2,ur));K0.set(u),u=K0}},Q=h.f||0,G=h.p||0,K=h.b||0,N=h.l,j=h.d,T=h.m,y=h.n,rr=P*8;do{if(!N){Q=sv(o,G,1);var qr=sv(o,G+1,3);if(G+=3,!qr){var or=IP(G)+4,p=o[or-4]|o[or-3]<<8,s=or+p;if(s>P){if(J)D0(0);break}if(W)z(K+p);u.set(o.subarray(or,s),K),h.b=K+=p,h.p=G=s*8,h.f=Q;continue}else if(qr==1)N=EU,j=cU,T=9,y=5;else if(qr==2){var lr=sv(o,G,31)+257,m=sv(o,G+10,15)+4,V=lr+sv(o,G+5,31)+1;G+=14;var c=new Sg(V),i=new Sg(19);for(var Qr=0;Qr<m;++Qr)i[zP[Qr]]=sv(o,G+Qr*3,7);G+=m*3;var Gr=XP(i),zr=(1<<Gr)-1,mr=ko(i,Gr,1);for(var Qr=0;Qr<V;){var D=mr[sv(o,G,zr)];G+=D&15;var or=D>>4;if(or<16)c[Qr++]=or;else{var d=0,hr=0;if(or==16)hr=3+sv(o,G,3),G+=2,d=c[Qr-1];else if(or==17)hr=3+sv(o,G,7),G+=3;else if(or==18)hr=11+sv(o,G,127),G+=7;while(hr--)c[Qr++]=d}}var vr=c.subarray(0,lr),Rr=c.subarray(lr);T=XP(vr),y=XP(Rr),N=ko(vr,T,1),j=ko(Rr,y,1)}else D0(1);if(G>rr){if(J)D0(0);break}}if(W)z(K+131072);var k=(1<<T)-1,n=(1<<y)-1,Pr=G;for(;;Pr=G){var d=N[YP(o,G)&k],Kr=d>>4;if(G+=d&15,G>rr){if(J)D0(0);break}if(!d)D0(2);if(Kr<256)u[K++]=Kr;else if(Kr==256){Pr=G,N=null;break}else{var Xr=Kr-254;if(Kr>264){var Qr=Kr-257,Sr=hu[Qr];Xr=sv(o,G,(1<<Sr)-1)+kR[Qr],G+=Sr}var br=j[YP(o,G)&n],ir=br>>4;if(!br)D0(3);G+=br&15;var Rr=VU[ir];if(ir>3){var Sr=wu[ir];Rr+=YP(o,G)&(1<<Sr)-1,G+=Sr}if(G>rr){if(J)D0(0);break}if(W)z(K+131072);var pr=K+Xr;if(K<Rr){var Yg=A-Rr,B0=Math.min(Rr,pr);if(Yg+K<0)D0(3);for(;K<B0;++K)u[K]=O[Yg+K]}for(;K<pr;++K)u[K]=u[K-Rr]}}if(h.l=N,h.p=Pr,h.b=K,h.f=Q,N)Q=1,h.m=T,h.d=j,h.n=y}while(!Q);return K!=u.length&&M?H2(u,0,K):u.subarray(0,K)},X1=function(o,h,u){u<<=h&7;var O=h/8|0;o[O]|=u,o[O+1]|=u>>8},b2=function(o,h,u){u<<=h&7;var O=h/8|0;o[O]|=u,o[O+1]|=u>>8,o[O+2]|=u>>16},JP=function(o,h){var u=[];for(var O=0;O<o.length;++O)if(o[O])u.push({s:O,f:o[O]});var P=u.length,A=u.slice();if(!P)return{t:tR,l:0};if(P==1){var M=new Sg(u[0].s+1);return M[u[0].s]=1,{t:M,l:1}}u.sort(function(s,lr){return s.f-lr.f}),u.push({s:-1,f:25001});var W=u[0],J=u[1],z=0,Q=1,G=2;u[0]={s:-1,f:W.f+J.f,l:W,r:J};while(Q!=P-1)W=u[u[z].f<u[G].f?z++:G++],J=u[z!=Q&&u[z].f<u[G].f?z++:G++],u[Q++]={s:-1,f:W.f+J.f,l:W,r:J};var K=A[0].s;for(var O=1;O<P;++O)if(A[O].s>K)K=A[O].s;var N=new Xv(K+1),j=$P(u[Q-1],N,0);if(j>h){var O=0,T=0,y=j-h,rr=1<<y;A.sort(function(lr,m){return N[m.s]-N[lr.s]||lr.f-m.f});for(;O<P;++O){var qr=A[O].s;if(N[qr]>h)T+=rr-(1<<j-N[qr]),N[qr]=h;else break}T>>=y;while(T>0){var or=A[O].s;if(N[or]<h)T-=1<<h-N[or]++-1;else++O}for(;O>=0&&T;--O){var p=A[O].s;if(N[p]==h)--N[p],++T}j=h}return{t:new Sg(N),l:j}},$P=function(o,h,u){return o.s==-1?Math.max($P(o.l,h,u+1),$P(o.r,h,u+1)):h[o.s]=u},xR=function(o){var h=o.length;while(h&&!o[--h]);var u=new Xv(++h),O=0,P=o[0],A=1,M=function(J){u[O++]=J};for(var W=1;W<=h;++W)if(o[W]==P&&W!=h)++A;else{if(!P&&A>2){for(;A>138;A-=138)M(32754);if(A>2)M(A>10?A-11<<5|28690:A-3<<5|12305),A=0}else if(A>3){M(P),--A;for(;A>6;A-=6)M(8304);if(A>2)M(A-3<<5|8208),A=0}while(A--)M(P);A=1,P=o[W]}return{c:u.subarray(0,O),n:h}},u2=function(o,h){var u=0;for(var O=0;O<h.length;++O)u+=o[O]*h[O];return u},DR=function(o,h,u){var O=u.length,P=IP(h+2);o[P]=O&255,o[P+1]=O>>8,o[P+2]=o[P]^255,o[P+3]=o[P+1]^255;for(var A=0;A<O;++A)o[P+A+4]=u[A];return(P+4+O)*8},TR=function(o,h,u,O,P,A,M,W,J,z,Q){X1(h,Q++,u),++P[256];var G=JP(P,15),K=G.t,N=G.l,j=JP(A,15),T=j.t,y=j.l,rr=xR(K),qr=rr.c,or=rr.n,p=xR(T),s=p.c,lr=p.n,m=new Xv(19);for(var V=0;V<qr.length;++V)++m[qr[V]&31];for(var V=0;V<s.length;++V)++m[s[V]&31];var c=JP(m,7),i=c.t,Qr=c.l,Gr=19;for(;Gr>4&&!i[zP[Gr-1]];--Gr);var zr=z+5<<3,mr=u2(P,Ql)+u2(A,O2)+M,D=u2(P,K)+u2(A,T)+M+14+3*Gr+u2(m,i)+2*m[16]+3*m[17]+7*m[18];if(J>=0&&zr<=mr&&zr<=D)return DR(h,Q,o.subarray(J,J+z));var d,hr,vr,Rr;if(X1(h,Q,1+(D<mr)),Q+=2,D<mr){d=ko(K,N,0),hr=K,vr=ko(T,y,0),Rr=T;var k=ko(i,Qr,0);X1(h,Q,or-257),X1(h,Q+5,lr-1),X1(h,Q+10,Gr-4),Q+=14;for(var V=0;V<Gr;++V)X1(h,Q+3*V,i[zP[V]]);Q+=3*Gr;var n=[qr,s];for(var Pr=0;Pr<2;++Pr){var Kr=n[Pr];for(var V=0;V<Kr.length;++V){var Xr=Kr[V]&31;if(X1(h,Q,k[Xr]),Q+=i[Xr],Xr>15)X1(h,Q,Kr[V]>>5&127),Q+=Kr[V]>>12}}}else d=_U,hr=Ql,vr=yU,Rr=O2;for(var V=0;V<W;++V){var Sr=O[V];if(Sr>255){var Xr=Sr>>18&31;if(b2(h,Q,d[Xr+257]),Q+=hr[Xr+257],Xr>7)X1(h,Q,Sr>>23&31),Q+=hu[Xr];var br=Sr&31;if(b2(h,Q,vr[br]),Q+=Rr[br],br>3)b2(h,Q,Sr>>5&8191),Q+=wu[br]}else b2(h,Q,d[Sr]),Q+=hr[Sr]}return b2(h,Q,d[256]),Q+hr[256]},pU=new FP([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),tR=new Sg(0),aU=function(o,h,u,O,P,A){var M=A.z||o.length,W=new Sg(O+M+5*(1+Math.ceil(M/7000))+P),J=W.subarray(O,W.length-P),z=A.l,Q=(A.r||0)&7;if(h){if(Q)J[0]=A.r>>3;var G=pU[h-1],K=G>>13,N=G&8191,j=(1<<u)-1,T=A.p||new Xv(32768),y=A.h||new Xv(j+1),rr=Math.ceil(u/3),qr=2*rr,or=function(s0){return(o[s0]^o[s0+1]<<rr^o[s0+2]<<qr)&j},p=new FP(25000),s=new Xv(288),lr=new Xv(32),m=0,V=0,c=A.i||0,i=0,Qr=A.w||0,Gr=0;for(;c+2<M;++c){var zr=or(c),mr=c&32767,D=y[zr];if(T[mr]=D,y[zr]=mr,Qr<=c){var d=M-c;if((m>7000||i>24576)&&(d>423||!z)){Q=TR(o,J,0,p,s,lr,V,i,Gr,c-Gr,Q),i=m=V=0,Gr=c;for(var hr=0;hr<286;++hr)s[hr]=0;for(var hr=0;hr<30;++hr)lr[hr]=0}var vr=2,Rr=0,k=N,n=mr-D&32767;if(d>2&&zr==or(c-n)){var Pr=Math.min(K,d)-1,Kr=Math.min(32767,c),Xr=Math.min(258,d);while(n<=Kr&&--k&&mr!=D){if(o[c+vr]==o[c+vr-n]){var Sr=0;for(;Sr<Xr&&o[c+Sr]==o[c+Sr-n];++Sr);if(Sr>vr){if(vr=Sr,Rr=n,Sr>Pr)break;var br=Math.min(n,Sr-2),ir=0;for(var hr=0;hr<br;++hr){var pr=c-n+hr&32767,Yg=T[pr],B0=pr-Yg&32767;if(B0>ir)ir=B0,D=pr}}}mr=D,D=T[mr],n+=mr-D&32767}}if(Rr){p[i++]=268435456|KP[vr]<<18|ZR[Rr];var ur=KP[vr]&31,_0=ZR[Rr]&31;V+=hu[ur]+wu[_0],++s[257+ur],++lr[_0],Qr=c+vr,++m}else p[i++]=o[c],++s[o[c]]}}for(c=Math.max(c,Qr);c<M;++c)p[i++]=o[c],++s[o[c]];if(Q=TR(o,J,z,p,s,lr,V,i,Gr,c-Gr,Q),!z)A.r=Q&7|J[Q/8|0]<<3,Q-=7,A.h=y,A.p=T,A.i=c,A.w=Qr}else{for(var c=A.w||0;c<M+z;c+=65535){var K0=c+65535;if(K0>=M)J[Q/8|0]=z,K0=M;Q=DR(J,Q+1,o.subarray(c,K0))}A.i=M}return H2(W,0,O+IP(Q)+P)},dU=function(){var o=new Int32Array(256);for(var h=0;h<256;++h){var u=h,O=9;while(--O)u=(u&1&&-306674912)^u>>>1;o[h]=u}return o}(),sU=function(){var o=-1;return{p:function(h){var u=o;for(var O=0;O<h.length;++O)u=dU[u&255^h[O]]^u>>>8;o=u},d:function(){return~o}}};var rL=function(o,h,u,O,P){if(!P){if(P={l:1},h.dictionary){var A=h.dictionary.subarray(-32768),M=new Sg(A.length+o.length);M.set(A),M.set(o,A.length),o=M,P.w=A.length}}return aU(o,h.level==null?6:h.level,h.mem==null?P.l?Math.ceil(Math.max(8,Math.min(13,Math.log(o.length)))*1.5):20:12+h.mem,u,O,P)},VR=function(o,h){var u={};for(var O in o)u[O]=o[O];for(var O in h)u[O]=h[O];return u};var io=function(o,h){return o[h]|o[h+1]<<8},ro=function(o,h){return(o[h]|o[h+1]<<8|o[h+2]<<16|o[h+3]<<24)>>>0},QP=function(o,h){return ro(o,h)+ro(o,h+4)*4294967296},J0=function(o,h,u){for(;u;++h)o[h]=u,u>>>=8};function gL(o,h){return rL(o,h||{},0,0)}function vL(o,h){return fU(o,{i:2},h&&h.out,h&&h.dictionary)}var _R=function(o,h,u,O){for(var P in o){var A=o[P],M=h+P,W=O;if(Array.isArray(A))W=VR(O,A[1]),A=A[0];if(A instanceof Sg)u[M]=[A,W];else u[M+="/"]=[new Sg(0),W],_R(A,M,u,O)}},CR=typeof TextEncoder<"u"&&new TextEncoder,UP=typeof TextDecoder<"u"&&new TextDecoder,oL=0;try{UP.decode(tR,{stream:!0}),oL=1}catch(o){}var lL=function(o){for(var h="",u=0;;){var O=o[u++],P=(O>127)+(O>223)+(O>239);if(u+P>o.length)return{s:h,r:H2(o,u-1)};if(!P)h+=String.fromCharCode(O);else if(P==3)O=((O&15)<<18|(o[u++]&63)<<12|(o[u++]&63)<<6|o[u++]&63)-65536,h+=String.fromCharCode(55296|O>>10,56320|O&1023);else if(P&1)h+=String.fromCharCode((O&31)<<6|o[u++]&63);else h+=String.fromCharCode((O&15)<<12|(o[u++]&63)<<6|o[u++]&63)}};function lu(o,h){if(h){var u=new Sg(o.length);for(var O=0;O<o.length;++O)u[O]=o.charCodeAt(O);return u}if(CR)return CR.encode(o);var P=o.length,A=new Sg(o.length+(o.length>>1)),M=0,W=function(Q){A[M++]=Q};for(var O=0;O<P;++O){if(M+5>A.length){var J=new Sg(M+8+(P-O<<1));J.set(A),A=J}var z=o.charCodeAt(O);if(z<128||h)W(z);else if(z<2048)W(192|z>>6),W(128|z&63);else if(z>55295&&z<57344)z=65536+(z&1047552)|o.charCodeAt(++O)&1023,W(240|z>>18),W(128|z>>12&63),W(128|z>>6&63),W(128|z&63);else W(224|z>>12),W(128|z>>6&63),W(128|z&63)}return H2(A,0,M)}function BP(o,h){if(h){var u="";for(var O=0;O<o.length;O+=16384)u+=String.fromCharCode.apply(null,o.subarray(O,O+16384));return u}else if(UP)return UP.decode(o);else{var P=lL(o),A=P.s,u=P.r;if(u.length)D0(8);return A}}var hL=function(o,h){return h+30+io(o,h+26)+io(o,h+28)},wL=function(o,h,u){var O=io(o,h+28),P=BP(o.subarray(h+46,h+46+O),!(io(o,h+8)&2048)),A=h+46+O,M=ro(o,h+20),W=u&&M==4294967295?bL(o,A):[M,ro(o,h+24),ro(o,h+42)],J=W[0],z=W[1],Q=W[2];return[io(o,h+10),J,z,P,A+io(o,h+30)+io(o,h+32),Q]},bL=function(o,h){for(;io(o,h)!=1;h+=4+io(o,h+2));return[QP(o,h+12),QP(o,h+4),QP(o,h+20)]},LP=function(o){var h=0;if(o)for(var u in o){var O=o[u].length;if(O>65535)D0(9);h+=O+4}return h},mR=function(o,h,u,O,P,A,M,W){var J=O.length,z=u.extra,Q=W&&W.length,G=LP(z);if(J0(o,h,M!=null?33639248:67324752),h+=4,M!=null)o[h++]=20,o[h++]=u.os;o[h]=20,h+=2,o[h++]=u.flag<<1|(A<0&&8),o[h++]=P&&8,o[h++]=u.compression&255,o[h++]=u.compression>>8;var K=new Date(u.mtime==null?Date.now():u.mtime),N=K.getFullYear()-1980;if(N<0||N>119)D0(10);if(J0(o,h,N<<25|K.getMonth()+1<<21|K.getDate()<<16|K.getHours()<<11|K.getMinutes()<<5|K.getSeconds()>>1),h+=4,A!=-1)J0(o,h,u.crc),J0(o,h+4,A<0?-A-2:A),J0(o,h+8,u.size);if(J0(o,h+12,J),J0(o,h+14,G),h+=16,M!=null)J0(o,h,Q),J0(o,h+6,u.attrs),J0(o,h+10,M),h+=14;if(o.set(O,h),h+=J,G)for(var j in z){var T=z[j],y=T.length;J0(o,h,+j),J0(o,h+2,y),o.set(T,h+4),h+=4+y}if(Q)o.set(W,h),h+=Q;return h},uL=function(o,h,u,O,P){J0(o,h,101010256),J0(o,h+8,u),J0(o,h+10,u),J0(o,h+12,O),J0(o,h+16,P)};function ER(o,h){if(!h)h={};var u={},O=[];_R(o,"",u,h);var P=0,A=0;for(var M in u){var W=u[M],J=W[0],z=W[1],Q=z.level==0?0:8,G=lu(M),K=G.length,N=z.comment,j=N&&lu(N),T=j&&j.length,y=LP(z.extra);if(K>65535)D0(11);var rr=Q?gL(J,z):J,qr=rr.length,or=sU();or.p(J),O.push(VR(z,{size:J.length,crc:or.d(),c:rr,f:G,m:j,u:K!=M.length||j&&N.length!=T,o:P,compression:Q})),P+=30+K+y+qr,A+=76+2*(K+y)+(T||0)+qr}var p=new Sg(A+22),s=P,lr=A-P;for(var m=0;m<O.length;++m){var G=O[m];mR(p,G.o,G,G.f,G.u,G.c.length);var V=30+G.f.length+LP(G.extra);p.set(G.c,G.o+V),mR(p,P,G,G.f,G.u,G.c.length,G.o,G.m),P+=16+V+(G.m?G.m.length:0)}return uL(p,P,O.length,lr,s),p}function yR(o,h){var u={},O=o.length-22;for(;ro(o,O)!=101010256;--O)if(!O||o.length-O>65558)D0(13);var P=io(o,O+8);if(!P)return{};var A=ro(o,O+16),M=A==4294967295||P==65535;if(M){var W=ro(o,O-12);if(M=ro(o,W)==101075792,M)P=ro(o,W+32),A=ro(o,W+48)}var J=h&&h.filter;for(var z=0;z<P;++z){var Q=wL(o,A,M),G=Q[0],K=Q[1],N=Q[2],j=Q[3],T=Q[4],y=Q[5],rr=hL(o,y);if(A=T,!J||J({name:j,size:K,originalSize:N,compression:G}))if(!G)u[j]=H2(o,rr,rr+K);else if(G==8)u[j]=vL(o.subarray(rr,rr+K),{out:new Sg(N)});else D0(14,"unknown compression type "+G)}return u}function NP(o){let h=o.map((O)=>({name:O.name,code:O.code,type:O.type,triggers:O.triggers,bindings:O.bindings,folder:O.folder,metadata:O.metadata})),u={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:h};return ER({"pack.json":lu(JSON.stringify(u,null,2))})}function cR(o,h){let u=NP(o),O=new Blob([u.buffer],{type:"application/zip"}),P=URL.createObjectURL(O),A=document.createElement("a");A.href=P,A.download=`${h}.lumiscript.zip`,A.click(),URL.revokeObjectURL(P)}var pVg=Object.freeze({status:"aborted"});function _(o,h,u){function O(W,J){if(!W._zod)Object.defineProperty(W,"_zod",{value:{def:J,constr:M,traits:new Set},enumerable:!1});if(W._zod.traits.has(o))return;W._zod.traits.add(o),h(W,J);let z=M.prototype,Q=Object.keys(z);for(let G=0;G<Q.length;G++){let K=Q[G];if(!(K in W))W[K]=z[K].bind(W)}}let P=u?.Parent??Object;class A extends P{}Object.defineProperty(A,"name",{value:o});function M(W){var J;let z=u?.Parent?new A:this;O(z,W),(J=z._zod).deferred??(J.deferred=[]);for(let Q of z._zod.deferred)Q();return z}return Object.defineProperty(M,"init",{value:O}),Object.defineProperty(M,Symbol.hasInstance,{value:(W)=>{if(u?.Parent&&W instanceof u.Parent)return!0;return W?._zod?.traits?.has(o)}}),Object.defineProperty(M,"name",{value:o}),M}var aVg=Symbol("zod_brand");class Y1 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class P2 extends Error{constructor(o){super(`Encountered unidirectional transform during encode: ${o}`);this.name="ZodEncodeError"}}var bu={};function J1(o){if(o)Object.assign(bu,o);return bu}var Mg={};K$(Mg,{unwrapMessage:()=>q2,uint8ArrayToHex:()=>CL,uint8ArrayToBase64url:()=>xL,uint8ArrayToBase64:()=>oG,stringifyPrimitive:()=>dR,slugify:()=>xP,shallowClone:()=>pR,safeExtend:()=>UL,required:()=>IL,randomString:()=>YL,propertyKeyTypes:()=>CP,promiseAllObject:()=>XL,primitiveTypes:()=>aR,prefixIssues:()=>G2,pick:()=>KL,partial:()=>FL,parsedType:()=>BL,optionalKeys:()=>mP,omit:()=>eL,objectClone:()=>WL,numKeys:()=>JL,nullish:()=>W2,normalizeParams:()=>_r,mergeDefs:()=>Q1,merge:()=>LL,jsonStringifyReplacer:()=>_5,joinValues:()=>ML,issue:()=>E5,isPlainObject:()=>Lh,isObject:()=>V5,hexToUint8Array:()=>TL,getSizableOrigin:()=>gG,getParsedType:()=>QL,getLengthableOrigin:()=>X2,getEnumValues:()=>A2,getElementAtPath:()=>GL,floatSafeRemainder:()=>fR,finalizeIssue:()=>no,extend:()=>$L,escapeRegex:()=>z1,esc:()=>uu,defineLazy:()=>qg,createTransparentProxy:()=>zL,cloneDef:()=>RL,clone:()=>go,cleanRegex:()=>R2,cleanEnum:()=>NL,captureStackTrace:()=>Ou,cached:()=>M2,base64urlToUint8Array:()=>ZL,base64ToUint8Array:()=>vG,assignProp:()=>zl,assertNotEqual:()=>HL,assertNever:()=>qL,assertIs:()=>PL,assertEqual:()=>OL,assert:()=>AL,allowsEval:()=>TP,aborted:()=>Kl,NUMBER_FORMAT_RANGES:()=>sR,Class:()=>lG,BIGINT_FORMAT_RANGES:()=>rG});function OL(o){return o}function HL(o){return o}function PL(o){}function qL(o){throw Error("Unexpected value in exhaustive check")}function AL(o){}function A2(o){let h=Object.values(o).filter((O)=>typeof O==="number");return Object.entries(o).filter(([O,P])=>h.indexOf(+O)===-1).map(([O,P])=>P)}function ML(o,h="|"){return o.map((u)=>dR(u)).join(h)}function _5(o,h){if(typeof h==="bigint")return h.toString();return h}function M2(o){return{get value(){{let u=o();return Object.defineProperty(this,"value",{value:u}),u}throw Error("cached value already set")}}}function W2(o){return o===null||o===void 0}function R2(o){let h=o.startsWith("^")?1:0,u=o.endsWith("$")?o.length-1:o.length;return o.slice(h,u)}function fR(o,h){let u=(o.toString().split(".")[1]||"").length,O=h.toString(),P=(O.split(".")[1]||"").length;if(P===0&&/\d?e-\d?/.test(O)){let J=O.match(/\d?e-(\d?)/);if(J?.[1])P=Number.parseInt(J[1])}let A=u>P?u:P,M=Number.parseInt(o.toFixed(A).replace(".","")),W=Number.parseInt(h.toFixed(A).replace(".",""));return M%W/10**A}var jR=Symbol("evaluating");function qg(o,h,u){let O=void 0;Object.defineProperty(o,h,{get(){if(O===jR)return;if(O===void 0)O=jR,O=u();return O},set(P){Object.defineProperty(o,h,{value:P})},configurable:!0})}function WL(o){return Object.create(Object.getPrototypeOf(o),Object.getOwnPropertyDescriptors(o))}function zl(o,h,u){Object.defineProperty(o,h,{value:u,writable:!0,enumerable:!0,configurable:!0})}function Q1(...o){let h={};for(let u of o){let O=Object.getOwnPropertyDescriptors(u);Object.assign(h,O)}return Object.defineProperties({},h)}function RL(o){return Q1(o._zod.def)}function GL(o,h){if(!h)return o;return h.reduce((u,O)=>u?.[O],o)}function XL(o){let h=Object.keys(o),u=h.map((O)=>o[O]);return Promise.all(u).then((O)=>{let P={};for(let A=0;A<h.length;A++)P[h[A]]=O[A];return P})}function YL(o=10){let u="";for(let O=0;O<o;O++)u+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return u}function uu(o){return JSON.stringify(o)}function xP(o){return o.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var Ou="captureStackTrace"in Error?Error.captureStackTrace:(...o)=>{};function V5(o){return typeof o==="object"&&o!==null&&!Array.isArray(o)}var TP=M2(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(o){return!1}});function Lh(o){if(V5(o)===!1)return!1;let h=o.constructor;if(h===void 0)return!0;if(typeof h!=="function")return!0;let u=h.prototype;if(V5(u)===!1)return!1;if(Object.prototype.hasOwnProperty.call(u,"isPrototypeOf")===!1)return!1;return!0}function pR(o){if(Lh(o))return{...o};if(Array.isArray(o))return[...o];return o}function JL(o){let h=0;for(let u in o)if(Object.prototype.hasOwnProperty.call(o,u))h++;return h}var QL=(o)=>{let h=typeof o;switch(h){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(o)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(o))return"array";if(o===null)return"null";if(o.then&&typeof o.then==="function"&&o.catch&&typeof o.catch==="function")return"promise";if(typeof Map<"u"&&o instanceof Map)return"map";if(typeof Set<"u"&&o instanceof Set)return"set";if(typeof Date<"u"&&o instanceof Date)return"date";if(typeof File<"u"&&o instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${h}`)}},CP=new Set(["string","number","symbol"]),aR=new Set(["string","number","bigint","boolean","symbol","undefined"]);function z1(o){return o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function go(o,h,u){let O=new o._zod.constr(h??o._zod.def);if(!h||u?.parent)O._zod.parent=o;return O}function _r(o){let h=o;if(!h)return{};if(typeof h==="string")return{error:()=>h};if(h?.message!==void 0){if(h?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");h.error=h.message}if(delete h.message,typeof h.error==="string")return{...h,error:()=>h.error};return h}function zL(o){let h;return new Proxy({},{get(u,O,P){return h??(h=o()),Reflect.get(h,O,P)},set(u,O,P,A){return h??(h=o()),Reflect.set(h,O,P,A)},has(u,O){return h??(h=o()),Reflect.has(h,O)},deleteProperty(u,O){return h??(h=o()),Reflect.deleteProperty(h,O)},ownKeys(u){return h??(h=o()),Reflect.ownKeys(h)},getOwnPropertyDescriptor(u,O){return h??(h=o()),Reflect.getOwnPropertyDescriptor(h,O)},defineProperty(u,O,P){return h??(h=o()),Reflect.defineProperty(h,O,P)}})}function dR(o){if(typeof o==="bigint")return o.toString()+"n";if(typeof o==="string")return`"${o}"`;return`${o}`}function mP(o){return Object.keys(o).filter((h)=>{return o[h]._zod.optin==="optional"&&o[h]._zod.optout==="optional"})}var sR={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},rG={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function KL(o,h){let u=o._zod.def,O=u.checks;if(O&&O.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let A=Q1(o._zod.def,{get shape(){let M={};for(let W in h){if(!(W in u.shape))throw Error(`Unrecognized key: "${W}"`);if(!h[W])continue;M[W]=u.shape[W]}return zl(this,"shape",M),M},checks:[]});return go(o,A)}function eL(o,h){let u=o._zod.def,O=u.checks;if(O&&O.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let A=Q1(o._zod.def,{get shape(){let M={...o._zod.def.shape};for(let W in h){if(!(W in u.shape))throw Error(`Unrecognized key: "${W}"`);if(!h[W])continue;delete M[W]}return zl(this,"shape",M),M},checks:[]});return go(o,A)}function $L(o,h){if(!Lh(h))throw Error("Invalid input to extend: expected a plain object");let u=o._zod.def.checks;if(u&&u.length>0){let A=o._zod.def.shape;for(let M in h)if(Object.getOwnPropertyDescriptor(A,M)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let P=Q1(o._zod.def,{get shape(){let A={...o._zod.def.shape,...h};return zl(this,"shape",A),A}});return go(o,P)}function UL(o,h){if(!Lh(h))throw Error("Invalid input to safeExtend: expected a plain object");let u=Q1(o._zod.def,{get shape(){let O={...o._zod.def.shape,...h};return zl(this,"shape",O),O}});return go(o,u)}function LL(o,h){let u=Q1(o._zod.def,{get shape(){let O={...o._zod.def.shape,...h._zod.def.shape};return zl(this,"shape",O),O},get catchall(){return h._zod.def.catchall},checks:[]});return go(o,u)}function FL(o,h,u){let P=h._zod.def.checks;if(P&&P.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let M=Q1(h._zod.def,{get shape(){let W=h._zod.def.shape,J={...W};if(u)for(let z in u){if(!(z in W))throw Error(`Unrecognized key: "${z}"`);if(!u[z])continue;J[z]=o?new o({type:"optional",innerType:W[z]}):W[z]}else for(let z in W)J[z]=o?new o({type:"optional",innerType:W[z]}):W[z];return zl(this,"shape",J),J},checks:[]});return go(h,M)}function IL(o,h,u){let O=Q1(h._zod.def,{get shape(){let P=h._zod.def.shape,A={...P};if(u)for(let M in u){if(!(M in A))throw Error(`Unrecognized key: "${M}"`);if(!u[M])continue;A[M]=new o({type:"nonoptional",innerType:P[M]})}else for(let M in P)A[M]=new o({type:"nonoptional",innerType:P[M]});return zl(this,"shape",A),A}});return go(h,O)}function Kl(o,h=0){if(o.aborted===!0)return!0;for(let u=h;u<o.issues.length;u++)if(o.issues[u]?.continue!==!0)return!0;return!1}function G2(o,h){return h.map((u)=>{var O;return(O=u).path??(O.path=[]),u.path.unshift(o),u})}function q2(o){return typeof o==="string"?o:o?.message}function no(o,h,u){let O={...o,path:o.path??[]};if(!o.message){let P=q2(o.inst?._zod.def?.error?.(o))??q2(h?.error?.(o))??q2(u.customError?.(o))??q2(u.localeError?.(o))??"Invalid input";O.message=P}if(delete O.inst,delete O.continue,!h?.reportInput)delete O.input;return O}function gG(o){if(o instanceof Set)return"set";if(o instanceof Map)return"map";if(o instanceof File)return"file";return"unknown"}function X2(o){if(Array.isArray(o))return"array";if(typeof o==="string")return"string";return"unknown"}function BL(o){let h=typeof o;switch(h){case"number":return Number.isNaN(o)?"nan":"number";case"object":{if(o===null)return"null";if(Array.isArray(o))return"array";let u=o;if(u&&Object.getPrototypeOf(u)!==Object.prototype&&"constructor"in u&&u.constructor)return u.constructor.name}}return h}function E5(...o){let[h,u,O]=o;if(typeof h==="string")return{message:h,code:"custom",input:u,inst:O};return{...h}}function NL(o){return Object.entries(o).filter(([h,u])=>{return Number.isNaN(Number.parseInt(h,10))}).map((h)=>h[1])}function vG(o){let h=atob(o),u=new Uint8Array(h.length);for(let O=0;O<h.length;O++)u[O]=h.charCodeAt(O);return u}function oG(o){let h="";for(let u=0;u<o.length;u++)h+=String.fromCharCode(o[u]);return btoa(h)}function ZL(o){let h=o.replace(/-/g,"+").replace(/_/g,"/"),u="=".repeat((4-h.length%4)%4);return vG(h+u)}function xL(o){return oG(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function TL(o){let h=o.replace(/^0x/,"");if(h.length%2!==0)throw Error("Invalid hex string length");let u=new Uint8Array(h.length/2);for(let O=0;O<h.length;O+=2)u[O/2]=Number.parseInt(h.slice(O,O+2),16);return u}function CL(o){return Array.from(o).map((h)=>h.toString(16).padStart(2,"0")).join("")}class lG{constructor(...o){}}var hG=(o,h)=>{o.name="$ZodError",Object.defineProperty(o,"_zod",{value:o._zod,enumerable:!1}),Object.defineProperty(o,"issues",{value:h,enumerable:!1}),o.message=JSON.stringify(h,_5,2),Object.defineProperty(o,"toString",{value:()=>o.message,enumerable:!1})},Hu=_("$ZodError",hG),SP=_("$ZodError",hG,{Parent:Error});function wG(o,h=(u)=>u.message){let u={},O=[];for(let P of o.issues)if(P.path.length>0)u[P.path[0]]=u[P.path[0]]||[],u[P.path[0]].push(h(P));else O.push(h(P));return{formErrors:O,fieldErrors:u}}function bG(o,h=(u)=>u.message){let u={_errors:[]},O=(P)=>{for(let A of P.issues)if(A.code==="invalid_union"&&A.errors.length)A.errors.map((M)=>O({issues:M}));else if(A.code==="invalid_key")O({issues:A.issues});else if(A.code==="invalid_element")O({issues:A.issues});else if(A.path.length===0)u._errors.push(h(A));else{let M=u,W=0;while(W<A.path.length){let J=A.path[W];if(W!==A.path.length-1)M[J]=M[J]||{_errors:[]};else M[J]=M[J]||{_errors:[]},M[J]._errors.push(h(A));M=M[J],W++}}};return O(o),u}var Pu=(o)=>(h,u,O,P)=>{let A=O?Object.assign(O,{async:!1}):{async:!1},M=h._zod.run({value:u,issues:[]},A);if(M instanceof Promise)throw new Y1;if(M.issues.length){let W=new(P?.Err??o)(M.issues.map((J)=>no(J,A,J1())));throw Ou(W,P?.callee),W}return M.value};var qu=(o)=>async(h,u,O,P)=>{let A=O?Object.assign(O,{async:!0}):{async:!0},M=h._zod.run({value:u,issues:[]},A);if(M instanceof Promise)M=await M;if(M.issues.length){let W=new(P?.Err??o)(M.issues.map((J)=>no(J,A,J1())));throw Ou(W,P?.callee),W}return M.value};var Y2=(o)=>(h,u,O)=>{let P=O?{...O,async:!1}:{async:!1},A=h._zod.run({value:u,issues:[]},P);if(A instanceof Promise)throw new Y1;return A.issues.length?{success:!1,error:new(o??Hu)(A.issues.map((M)=>no(M,P,J1())))}:{success:!0,data:A.value}},uG=Y2(SP),J2=(o)=>async(h,u,O)=>{let P=O?Object.assign(O,{async:!0}):{async:!0},A=h._zod.run({value:u,issues:[]},P);if(A instanceof Promise)A=await A;return A.issues.length?{success:!1,error:new o(A.issues.map((M)=>no(M,P,J1())))}:{success:!0,data:A.value}},OG=J2(SP),HG=(o)=>(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return Pu(o)(h,u,P)};var PG=(o)=>(h,u,O)=>{return Pu(o)(h,u,O)};var qG=(o)=>async(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return qu(o)(h,u,P)};var AG=(o)=>async(h,u,O)=>{return qu(o)(h,u,O)};var MG=(o)=>(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return Y2(o)(h,u,P)};var WG=(o)=>(h,u,O)=>{return Y2(o)(h,u,O)};var RG=(o)=>async(h,u,O)=>{let P=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return J2(o)(h,u,P)};var GG=(o)=>async(h,u,O)=>{return J2(o)(h,u,O)};var XG=/^[cC][^\s-]{8,}$/,YG=/^[0-9a-z]+$/,JG=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,QG=/^[0-9a-vA-V]{20}$/,zG=/^[A-Za-z0-9]{27}$/,KG=/^[a-zA-Z0-9_-]{21}$/,eG=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var $G=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,iP=(o)=>{if(!o)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${o}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var UG=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var SL="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function LG(){return new RegExp(SL,"u")}var FG=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,IG=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var BG=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,NG=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ZG=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,kP=/^[A-Za-z0-9_-]*$/;var xG=/^\+[1-9]\d{6,14}$/,TG="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",CG=new RegExp(`^${TG}$`);function mG(o){return typeof o.precision==="number"?o.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":o.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${o.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function SG(o){return new RegExp(`^${mG(o)}$`)}function iG(o){let h=mG({precision:o.precision}),u=["Z"];if(o.local)u.push("");if(o.offset)u.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let O=`${h}(?:${u.join("|")})`;return new RegExp(`^${TG}T(?:${O})$`)}var kG=(o)=>{let h=o?`[\\s\\S]{${o?.minimum??0},${o?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${h}$`)};var nG=/^[^A-Z]*$/,DG=/^[^a-z]*$/;var Yv=_("$ZodCheck",(o,h)=>{var u;o._zod??(o._zod={}),o._zod.def=h,(u=o._zod).onattach??(u.onattach=[])});var tG=_("$ZodCheckMaxLength",(o,h)=>{var u;Yv.init(o,h),(u=o._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),o._zod.onattach.push((O)=>{let P=O._zod.bag.maximum??Number.POSITIVE_INFINITY;if(h.maximum<P)O._zod.bag.maximum=h.maximum}),o._zod.check=(O)=>{let P=O.value;if(P.length<=h.maximum)return;let M=X2(P);O.issues.push({origin:M,code:"too_big",maximum:h.maximum,inclusive:!0,input:P,inst:o,continue:!h.abort})}}),VG=_("$ZodCheckMinLength",(o,h)=>{var u;Yv.init(o,h),(u=o._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),o._zod.onattach.push((O)=>{let P=O._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(h.minimum>P)O._zod.bag.minimum=h.minimum}),o._zod.check=(O)=>{let P=O.value;if(P.length>=h.minimum)return;let M=X2(P);O.issues.push({origin:M,code:"too_small",minimum:h.minimum,inclusive:!0,input:P,inst:o,continue:!h.abort})}}),_G=_("$ZodCheckLengthEquals",(o,h)=>{var u;Yv.init(o,h),(u=o._zod.def).when??(u.when=(O)=>{let P=O.value;return!W2(P)&&P.length!==void 0}),o._zod.onattach.push((O)=>{let P=O._zod.bag;P.minimum=h.length,P.maximum=h.length,P.length=h.length}),o._zod.check=(O)=>{let P=O.value,A=P.length;if(A===h.length)return;let M=X2(P),W=A>h.length;O.issues.push({origin:M,...W?{code:"too_big",maximum:h.length}:{code:"too_small",minimum:h.length},inclusive:!0,exact:!0,input:O.value,inst:o,continue:!h.abort})}}),Q2=_("$ZodCheckStringFormat",(o,h)=>{var u,O;if(Yv.init(o,h),o._zod.onattach.push((P)=>{let A=P._zod.bag;if(A.format=h.format,h.pattern)A.patterns??(A.patterns=new Set),A.patterns.add(h.pattern)}),h.pattern)(u=o._zod).check??(u.check=(P)=>{if(h.pattern.lastIndex=0,h.pattern.test(P.value))return;P.issues.push({origin:"string",code:"invalid_format",format:h.format,input:P.value,...h.pattern?{pattern:h.pattern.toString()}:{},inst:o,continue:!h.abort})});else(O=o._zod).check??(O.check=()=>{})}),EG=_("$ZodCheckRegex",(o,h)=>{Q2.init(o,h),o._zod.check=(u)=>{if(h.pattern.lastIndex=0,h.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:"regex",input:u.value,pattern:h.pattern.toString(),inst:o,continue:!h.abort})}}),yG=_("$ZodCheckLowerCase",(o,h)=>{h.pattern??(h.pattern=nG),Q2.init(o,h)}),cG=_("$ZodCheckUpperCase",(o,h)=>{h.pattern??(h.pattern=DG),Q2.init(o,h)}),jG=_("$ZodCheckIncludes",(o,h)=>{Yv.init(o,h);let u=z1(h.includes),O=new RegExp(typeof h.position==="number"?`^.{${h.position}}${u}`:u);h.pattern=O,o._zod.onattach.push((P)=>{let A=P._zod.bag;A.patterns??(A.patterns=new Set),A.patterns.add(O)}),o._zod.check=(P)=>{if(P.value.includes(h.includes,h.position))return;P.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:h.includes,input:P.value,inst:o,continue:!h.abort})}}),fG=_("$ZodCheckStartsWith",(o,h)=>{Yv.init(o,h);let u=new RegExp(`^${z1(h.prefix)}.*`);h.pattern??(h.pattern=u),o._zod.onattach.push((O)=>{let P=O._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(u)}),o._zod.check=(O)=>{if(O.value.startsWith(h.prefix))return;O.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:h.prefix,input:O.value,inst:o,continue:!h.abort})}}),pG=_("$ZodCheckEndsWith",(o,h)=>{Yv.init(o,h);let u=new RegExp(`.*${z1(h.suffix)}$`);h.pattern??(h.pattern=u),o._zod.onattach.push((O)=>{let P=O._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(u)}),o._zod.check=(O)=>{if(O.value.endsWith(h.suffix))return;O.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:h.suffix,input:O.value,inst:o,continue:!h.abort})}});var aG=_("$ZodCheckOverwrite",(o,h)=>{Yv.init(o,h),o._zod.check=(u)=>{u.value=h.tx(u.value)}});class nP{constructor(o=[]){if(this.content=[],this.indent=0,this)this.args=o}indented(o){this.indent+=1,o(this),this.indent-=1}write(o){if(typeof o==="function"){o(this,{execution:"sync"}),o(this,{execution:"async"});return}let u=o.split(`
`).filter((A)=>A),O=Math.min(...u.map((A)=>A.length-A.trimStart().length)),P=u.map((A)=>A.slice(O)).map((A)=>" ".repeat(this.indent*2)+A);for(let A of P)this.content.push(A)}compile(){let o=Function,h=this?.args,O=[...(this?.content??[""]).map((P)=>`  ${P}`)];return new o(...h,O.join(`
`))}}var sG={major:4,minor:3,patch:6};var _g=_("$ZodType",(o,h)=>{var u;o??(o={}),o._zod.def=h,o._zod.bag=o._zod.bag||{},o._zod.version=sG;let O=[...o._zod.def.checks??[]];if(o._zod.traits.has("$ZodCheck"))O.unshift(o);for(let P of O)for(let A of P._zod.onattach)A(o);if(O.length===0)(u=o._zod).deferred??(u.deferred=[]),o._zod.deferred?.push(()=>{o._zod.run=o._zod.parse});else{let P=(M,W,J)=>{let z=Kl(M),Q;for(let G of W){if(G._zod.def.when){if(!G._zod.def.when(M))continue}else if(z)continue;let K=M.issues.length,N=G._zod.check(M);if(N instanceof Promise&&J?.async===!1)throw new Y1;if(Q||N instanceof Promise)Q=(Q??Promise.resolve()).then(async()=>{if(await N,M.issues.length===K)return;if(!z)z=Kl(M,K)});else{if(M.issues.length===K)continue;if(!z)z=Kl(M,K)}}if(Q)return Q.then(()=>{return M});return M},A=(M,W,J)=>{if(Kl(M))return M.aborted=!0,M;let z=P(W,O,J);if(z instanceof Promise){if(J.async===!1)throw new Y1;return z.then((Q)=>o._zod.parse(Q,J))}return o._zod.parse(z,J)};o._zod.run=(M,W)=>{if(W.skipChecks)return o._zod.parse(M,W);if(W.direction==="backward"){let z=o._zod.parse({value:M.value,issues:[]},{...W,skipChecks:!0});if(z instanceof Promise)return z.then((Q)=>{return A(Q,M,W)});return A(z,M,W)}let J=o._zod.parse(M,W);if(J instanceof Promise){if(W.async===!1)throw new Y1;return J.then((z)=>P(z,O,W))}return P(J,O,W)}}qg(o,"~standard",()=>({validate:(P)=>{try{let A=uG(o,P);return A.success?{value:A.data}:{issues:A.error?.issues}}catch(A){return OG(o,P).then((M)=>M.success?{value:M.data}:{issues:M.error?.issues})}},vendor:"zod",version:1}))}),Ru=_("$ZodString",(o,h)=>{_g.init(o,h),o._zod.pattern=[...o?._zod.bag?.patterns??[]].pop()??kG(o._zod.bag),o._zod.parse=(u,O)=>{if(h.coerce)try{u.value=String(u.value)}catch(P){}if(typeof u.value==="string")return u;return u.issues.push({expected:"string",code:"invalid_type",input:u.value,inst:o}),u}}),Bg=_("$ZodStringFormat",(o,h)=>{Q2.init(o,h),Ru.init(o,h)}),uX=_("$ZodGUID",(o,h)=>{h.pattern??(h.pattern=$G),Bg.init(o,h)}),OX=_("$ZodUUID",(o,h)=>{if(h.version){let O={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[h.version];if(O===void 0)throw Error(`Invalid UUID version: "${h.version}"`);h.pattern??(h.pattern=iP(O))}else h.pattern??(h.pattern=iP());Bg.init(o,h)}),HX=_("$ZodEmail",(o,h)=>{h.pattern??(h.pattern=UG),Bg.init(o,h)}),PX=_("$ZodURL",(o,h)=>{Bg.init(o,h),o._zod.check=(u)=>{try{let O=u.value.trim(),P=new URL(O);if(h.hostname){if(h.hostname.lastIndex=0,!h.hostname.test(P.hostname))u.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:h.hostname.source,input:u.value,inst:o,continue:!h.abort})}if(h.protocol){if(h.protocol.lastIndex=0,!h.protocol.test(P.protocol.endsWith(":")?P.protocol.slice(0,-1):P.protocol))u.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:h.protocol.source,input:u.value,inst:o,continue:!h.abort})}if(h.normalize)u.value=P.href;else u.value=O;return}catch(O){u.issues.push({code:"invalid_format",format:"url",input:u.value,inst:o,continue:!h.abort})}}}),qX=_("$ZodEmoji",(o,h)=>{h.pattern??(h.pattern=LG()),Bg.init(o,h)}),AX=_("$ZodNanoID",(o,h)=>{h.pattern??(h.pattern=KG),Bg.init(o,h)}),MX=_("$ZodCUID",(o,h)=>{h.pattern??(h.pattern=XG),Bg.init(o,h)}),WX=_("$ZodCUID2",(o,h)=>{h.pattern??(h.pattern=YG),Bg.init(o,h)}),RX=_("$ZodULID",(o,h)=>{h.pattern??(h.pattern=JG),Bg.init(o,h)}),GX=_("$ZodXID",(o,h)=>{h.pattern??(h.pattern=QG),Bg.init(o,h)}),XX=_("$ZodKSUID",(o,h)=>{h.pattern??(h.pattern=zG),Bg.init(o,h)}),YX=_("$ZodISODateTime",(o,h)=>{h.pattern??(h.pattern=iG(h)),Bg.init(o,h)}),JX=_("$ZodISODate",(o,h)=>{h.pattern??(h.pattern=CG),Bg.init(o,h)}),QX=_("$ZodISOTime",(o,h)=>{h.pattern??(h.pattern=SG(h)),Bg.init(o,h)}),zX=_("$ZodISODuration",(o,h)=>{h.pattern??(h.pattern=eG),Bg.init(o,h)}),KX=_("$ZodIPv4",(o,h)=>{h.pattern??(h.pattern=FG),Bg.init(o,h),o._zod.bag.format="ipv4"}),eX=_("$ZodIPv6",(o,h)=>{h.pattern??(h.pattern=IG),Bg.init(o,h),o._zod.bag.format="ipv6",o._zod.check=(u)=>{try{new URL(`http://[${u.value}]`)}catch{u.issues.push({code:"invalid_format",format:"ipv6",input:u.value,inst:o,continue:!h.abort})}}});var $X=_("$ZodCIDRv4",(o,h)=>{h.pattern??(h.pattern=BG),Bg.init(o,h)}),UX=_("$ZodCIDRv6",(o,h)=>{h.pattern??(h.pattern=NG),Bg.init(o,h),o._zod.check=(u)=>{let O=u.value.split("/");try{if(O.length!==2)throw Error();let[P,A]=O;if(!A)throw Error();let M=Number(A);if(`${M}`!==A)throw Error();if(M<0||M>128)throw Error();new URL(`http://[${P}]`)}catch{u.issues.push({code:"invalid_format",format:"cidrv6",input:u.value,inst:o,continue:!h.abort})}}});function LX(o){if(o==="")return!0;if(o.length%4!==0)return!1;try{return atob(o),!0}catch{return!1}}var FX=_("$ZodBase64",(o,h)=>{h.pattern??(h.pattern=ZG),Bg.init(o,h),o._zod.bag.contentEncoding="base64",o._zod.check=(u)=>{if(LX(u.value))return;u.issues.push({code:"invalid_format",format:"base64",input:u.value,inst:o,continue:!h.abort})}});function iL(o){if(!kP.test(o))return!1;let h=o.replace(/[-_]/g,(O)=>O==="-"?"+":"/"),u=h.padEnd(Math.ceil(h.length/4)*4,"=");return LX(u)}var IX=_("$ZodBase64URL",(o,h)=>{h.pattern??(h.pattern=kP),Bg.init(o,h),o._zod.bag.contentEncoding="base64url",o._zod.check=(u)=>{if(iL(u.value))return;u.issues.push({code:"invalid_format",format:"base64url",input:u.value,inst:o,continue:!h.abort})}}),BX=_("$ZodE164",(o,h)=>{h.pattern??(h.pattern=xG),Bg.init(o,h)});function kL(o,h=null){try{let u=o.split(".");if(u.length!==3)return!1;let[O]=u;if(!O)return!1;let P=JSON.parse(atob(O));if("typ"in P&&P?.typ!=="JWT")return!1;if(!P.alg)return!1;if(h&&(!("alg"in P)||P.alg!==h))return!1;return!0}catch{return!1}}var NX=_("$ZodJWT",(o,h)=>{Bg.init(o,h),o._zod.check=(u)=>{if(kL(u.value,h.alg))return;u.issues.push({code:"invalid_format",format:"jwt",input:u.value,inst:o,continue:!h.abort})}});var ZX=_("$ZodUnknown",(o,h)=>{_g.init(o,h),o._zod.parse=(u)=>u}),xX=_("$ZodNever",(o,h)=>{_g.init(o,h),o._zod.parse=(u,O)=>{return u.issues.push({expected:"never",code:"invalid_type",input:u.value,inst:o}),u}});function rX(o,h,u){if(o.issues.length)h.issues.push(...G2(u,o.issues));h.value[u]=o.value}var TX=_("$ZodArray",(o,h)=>{_g.init(o,h),o._zod.parse=(u,O)=>{let P=u.value;if(!Array.isArray(P))return u.issues.push({expected:"array",code:"invalid_type",input:P,inst:o}),u;u.value=Array(P.length);let A=[];for(let M=0;M<P.length;M++){let W=P[M],J=h.element._zod.run({value:W,issues:[]},O);if(J instanceof Promise)A.push(J.then((z)=>rX(z,u,M)));else rX(J,u,M)}if(A.length)return Promise.all(A).then(()=>u);return u}});function Wu(o,h,u,O,P){if(o.issues.length){if(P&&!(u in O))return;h.issues.push(...G2(u,o.issues))}if(o.value===void 0){if(u in O)h.value[u]=void 0}else h.value[u]=o.value}function CX(o){let h=Object.keys(o.shape);for(let O of h)if(!o.shape?.[O]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${O}": expected a Zod schema`);let u=mP(o.shape);return{...o,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(u)}}function mX(o,h,u,O,P,A){let M=[],W=P.keySet,J=P.catchall._zod,z=J.def.type,Q=J.optout==="optional";for(let G in h){if(W.has(G))continue;if(z==="never"){M.push(G);continue}let K=J.run({value:h[G],issues:[]},O);if(K instanceof Promise)o.push(K.then((N)=>Wu(N,u,G,h,Q)));else Wu(K,u,G,h,Q)}if(M.length)u.issues.push({code:"unrecognized_keys",keys:M,input:h,inst:A});if(!o.length)return u;return Promise.all(o).then(()=>{return u})}var nL=_("$ZodObject",(o,h)=>{if(_g.init(o,h),!Object.getOwnPropertyDescriptor(h,"shape")?.get){let W=h.shape;Object.defineProperty(h,"shape",{get:()=>{let J={...W};return Object.defineProperty(h,"shape",{value:J}),J}})}let O=M2(()=>CX(h));qg(o._zod,"propValues",()=>{let W=h.shape,J={};for(let z in W){let Q=W[z]._zod;if(Q.values){J[z]??(J[z]=new Set);for(let G of Q.values)J[z].add(G)}}return J});let P=V5,A=h.catchall,M;o._zod.parse=(W,J)=>{M??(M=O.value);let z=W.value;if(!P(z))return W.issues.push({expected:"object",code:"invalid_type",input:z,inst:o}),W;W.value={};let Q=[],G=M.shape;for(let K of M.keys){let N=G[K],j=N._zod.optout==="optional",T=N._zod.run({value:z[K],issues:[]},J);if(T instanceof Promise)Q.push(T.then((y)=>Wu(y,W,K,z,j)));else Wu(T,W,K,z,j)}if(!A)return Q.length?Promise.all(Q).then(()=>W):W;return mX(Q,z,W,J,O.value,o)}}),SX=_("$ZodObjectJIT",(o,h)=>{nL.init(o,h);let u=o._zod.parse,O=M2(()=>CX(h)),P=(K)=>{let N=new nP(["shape","payload","ctx"]),j=O.value,T=(or)=>{let p=uu(or);return`shape[${p}]._zod.run({ value: input[${p}], issues: [] }, ctx)`};N.write("const input = payload.value;");let y=Object.create(null),rr=0;for(let or of j.keys)y[or]=`key_${rr++}`;N.write("const newResult = {};");for(let or of j.keys){let p=y[or],s=uu(or),m=K[or]?._zod?.optout==="optional";if(N.write(`const ${p} = ${T(or)};`),m)N.write(`
        if (${p}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${p}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${p}.value;
        }
        
      `);else N.write(`
        if (${p}.issues.length) {
          payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${p}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${p}.value;
        }
        
      `)}N.write("payload.value = newResult;"),N.write("return payload;");let qr=N.compile();return(or,p)=>qr(K,or,p)},A,M=V5,W=!bu.jitless,z=W&&TP.value,Q=h.catchall,G;o._zod.parse=(K,N)=>{G??(G=O.value);let j=K.value;if(!M(j))return K.issues.push({expected:"object",code:"invalid_type",input:j,inst:o}),K;if(W&&z&&N?.async===!1&&N.jitless!==!0){if(!A)A=P(h.shape);if(K=A(K,N),!Q)return K;return mX([],j,K,N,G,o)}return u(K,N)}});function gX(o,h,u,O){for(let A of o)if(A.issues.length===0)return h.value=A.value,h;let P=o.filter((A)=>!Kl(A));if(P.length===1)return h.value=P[0].value,P[0];return h.issues.push({code:"invalid_union",input:h.value,inst:u,errors:o.map((A)=>A.issues.map((M)=>no(M,O,J1())))}),h}var iX=_("$ZodUnion",(o,h)=>{_g.init(o,h),qg(o._zod,"optin",()=>h.options.some((P)=>P._zod.optin==="optional")?"optional":void 0),qg(o._zod,"optout",()=>h.options.some((P)=>P._zod.optout==="optional")?"optional":void 0),qg(o._zod,"values",()=>{if(h.options.every((P)=>P._zod.values))return new Set(h.options.flatMap((P)=>Array.from(P._zod.values)));return}),qg(o._zod,"pattern",()=>{if(h.options.every((P)=>P._zod.pattern)){let P=h.options.map((A)=>A._zod.pattern);return new RegExp(`^(${P.map((A)=>R2(A.source)).join("|")})$`)}return});let u=h.options.length===1,O=h.options[0]._zod.run;o._zod.parse=(P,A)=>{if(u)return O(P,A);let M=!1,W=[];for(let J of h.options){let z=J._zod.run({value:P.value,issues:[]},A);if(z instanceof Promise)W.push(z),M=!0;else{if(z.issues.length===0)return z;W.push(z)}}if(!M)return gX(W,P,o,A);return Promise.all(W).then((J)=>{return gX(J,P,o,A)})}});var kX=_("$ZodIntersection",(o,h)=>{_g.init(o,h),o._zod.parse=(u,O)=>{let P=u.value,A=h.left._zod.run({value:P,issues:[]},O),M=h.right._zod.run({value:P,issues:[]},O);if(A instanceof Promise||M instanceof Promise)return Promise.all([A,M]).then(([J,z])=>{return vX(u,J,z)});return vX(u,A,M)}});function DP(o,h){if(o===h)return{valid:!0,data:o};if(o instanceof Date&&h instanceof Date&&+o===+h)return{valid:!0,data:o};if(Lh(o)&&Lh(h)){let u=Object.keys(h),O=Object.keys(o).filter((A)=>u.indexOf(A)!==-1),P={...o,...h};for(let A of O){let M=DP(o[A],h[A]);if(!M.valid)return{valid:!1,mergeErrorPath:[A,...M.mergeErrorPath]};P[A]=M.data}return{valid:!0,data:P}}if(Array.isArray(o)&&Array.isArray(h)){if(o.length!==h.length)return{valid:!1,mergeErrorPath:[]};let u=[];for(let O=0;O<o.length;O++){let P=o[O],A=h[O],M=DP(P,A);if(!M.valid)return{valid:!1,mergeErrorPath:[O,...M.mergeErrorPath]};u.push(M.data)}return{valid:!0,data:u}}return{valid:!1,mergeErrorPath:[]}}function vX(o,h,u){let O=new Map,P;for(let W of h.issues)if(W.code==="unrecognized_keys"){P??(P=W);for(let J of W.keys){if(!O.has(J))O.set(J,{});O.get(J).l=!0}}else o.issues.push(W);for(let W of u.issues)if(W.code==="unrecognized_keys")for(let J of W.keys){if(!O.has(J))O.set(J,{});O.get(J).r=!0}else o.issues.push(W);let A=[...O].filter(([,W])=>W.l&&W.r).map(([W])=>W);if(A.length&&P)o.issues.push({...P,keys:A});if(Kl(o))return o;let M=DP(h.value,u.value);if(!M.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(M.mergeErrorPath)}`);return o.value=M.data,o}var nX=_("$ZodEnum",(o,h)=>{_g.init(o,h);let u=A2(h.entries),O=new Set(u);o._zod.values=O,o._zod.pattern=new RegExp(`^(${u.filter((P)=>CP.has(typeof P)).map((P)=>typeof P==="string"?z1(P):P.toString()).join("|")})$`),o._zod.parse=(P,A)=>{let M=P.value;if(O.has(M))return P;return P.issues.push({code:"invalid_value",values:u,input:M,inst:o}),P}}),DX=_("$ZodLiteral",(o,h)=>{if(_g.init(o,h),h.values.length===0)throw Error("Cannot create literal schema with no valid values");let u=new Set(h.values);o._zod.values=u,o._zod.pattern=new RegExp(`^(${h.values.map((O)=>typeof O==="string"?z1(O):O?z1(O.toString()):String(O)).join("|")})$`),o._zod.parse=(O,P)=>{let A=O.value;if(u.has(A))return O;return O.issues.push({code:"invalid_value",values:h.values,input:A,inst:o}),O}});var tX=_("$ZodTransform",(o,h)=>{_g.init(o,h),o._zod.parse=(u,O)=>{if(O.direction==="backward")throw new P2(o.constructor.name);let P=h.transform(u.value,u);if(O.async)return(P instanceof Promise?P:Promise.resolve(P)).then((M)=>{return u.value=M,u});if(P instanceof Promise)throw new Y1;return u.value=P,u}});function oX(o,h){if(o.issues.length&&h===void 0)return{issues:[],value:void 0};return o}var tP=_("$ZodOptional",(o,h)=>{_g.init(o,h),o._zod.optin="optional",o._zod.optout="optional",qg(o._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,void 0]):void 0}),qg(o._zod,"pattern",()=>{let u=h.innerType._zod.pattern;return u?new RegExp(`^(${R2(u.source)})?$`):void 0}),o._zod.parse=(u,O)=>{if(h.innerType._zod.optin==="optional"){let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>oX(A,u.value));return oX(P,u.value)}if(u.value===void 0)return u;return h.innerType._zod.run(u,O)}}),VX=_("$ZodExactOptional",(o,h)=>{tP.init(o,h),qg(o._zod,"values",()=>h.innerType._zod.values),qg(o._zod,"pattern",()=>h.innerType._zod.pattern),o._zod.parse=(u,O)=>{return h.innerType._zod.run(u,O)}}),_X=_("$ZodNullable",(o,h)=>{_g.init(o,h),qg(o._zod,"optin",()=>h.innerType._zod.optin),qg(o._zod,"optout",()=>h.innerType._zod.optout),qg(o._zod,"pattern",()=>{let u=h.innerType._zod.pattern;return u?new RegExp(`^(${R2(u.source)}|null)$`):void 0}),qg(o._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,null]):void 0}),o._zod.parse=(u,O)=>{if(u.value===null)return u;return h.innerType._zod.run(u,O)}}),EX=_("$ZodDefault",(o,h)=>{_g.init(o,h),o._zod.optin="optional",qg(o._zod,"values",()=>h.innerType._zod.values),o._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);if(u.value===void 0)return u.value=h.defaultValue,u;let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>lX(A,h));return lX(P,h)}});function lX(o,h){if(o.value===void 0)o.value=h.defaultValue;return o}var yX=_("$ZodPrefault",(o,h)=>{_g.init(o,h),o._zod.optin="optional",qg(o._zod,"values",()=>h.innerType._zod.values),o._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);if(u.value===void 0)u.value=h.defaultValue;return h.innerType._zod.run(u,O)}}),cX=_("$ZodNonOptional",(o,h)=>{_g.init(o,h),qg(o._zod,"values",()=>{let u=h.innerType._zod.values;return u?new Set([...u].filter((O)=>O!==void 0)):void 0}),o._zod.parse=(u,O)=>{let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>hX(A,o));return hX(P,o)}});function hX(o,h){if(!o.issues.length&&o.value===void 0)o.issues.push({code:"invalid_type",expected:"nonoptional",input:o.value,inst:h});return o}var jX=_("$ZodCatch",(o,h)=>{_g.init(o,h),qg(o._zod,"optin",()=>h.innerType._zod.optin),qg(o._zod,"optout",()=>h.innerType._zod.optout),qg(o._zod,"values",()=>h.innerType._zod.values),o._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>{if(u.value=A.value,A.issues.length)u.value=h.catchValue({...u,error:{issues:A.issues.map((M)=>no(M,O,J1()))},input:u.value}),u.issues=[];return u});if(u.value=P.value,P.issues.length)u.value=h.catchValue({...u,error:{issues:P.issues.map((A)=>no(A,O,J1()))},input:u.value}),u.issues=[];return u}});var fX=_("$ZodPipe",(o,h)=>{_g.init(o,h),qg(o._zod,"values",()=>h.in._zod.values),qg(o._zod,"optin",()=>h.in._zod.optin),qg(o._zod,"optout",()=>h.out._zod.optout),qg(o._zod,"propValues",()=>h.in._zod.propValues),o._zod.parse=(u,O)=>{if(O.direction==="backward"){let A=h.out._zod.run(u,O);if(A instanceof Promise)return A.then((M)=>Mu(M,h.in,O));return Mu(A,h.in,O)}let P=h.in._zod.run(u,O);if(P instanceof Promise)return P.then((A)=>Mu(A,h.out,O));return Mu(P,h.out,O)}});function Mu(o,h,u){if(o.issues.length)return o.aborted=!0,o;return h._zod.run({value:o.value,issues:o.issues},u)}var pX=_("$ZodReadonly",(o,h)=>{_g.init(o,h),qg(o._zod,"propValues",()=>h.innerType._zod.propValues),qg(o._zod,"values",()=>h.innerType._zod.values),qg(o._zod,"optin",()=>h.innerType?._zod?.optin),qg(o._zod,"optout",()=>h.innerType?._zod?.optout),o._zod.parse=(u,O)=>{if(O.direction==="backward")return h.innerType._zod.run(u,O);let P=h.innerType._zod.run(u,O);if(P instanceof Promise)return P.then(wX);return wX(P)}});function wX(o){return o.value=Object.freeze(o.value),o}var aX=_("$ZodCustom",(o,h)=>{Yv.init(o,h),_g.init(o,h),o._zod.parse=(u,O)=>{return u},o._zod.check=(u)=>{let O=u.value,P=h.fn(O);if(P instanceof Promise)return P.then((A)=>bX(A,u,O,o));bX(P,u,O,o);return}});function bX(o,h,u,O){if(!o){let P={code:"custom",input:u,inst:O,path:[...O._zod.def.path??[]],continue:!O._zod.def.abort};if(O._zod.def.params)P.params=O._zod.def.params;h.issues.push(E5(P))}}var dX,X_g=Symbol("ZodOutput"),Y_g=Symbol("ZodInput");class sX{constructor(){this._map=new WeakMap,this._idmap=new Map}add(o,...h){let u=h[0];if(this._map.set(o,u),u&&typeof u==="object"&&"id"in u)this._idmap.set(u.id,o);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(o){let h=this._map.get(o);if(h&&typeof h==="object"&&"id"in h)this._idmap.delete(h.id);return this._map.delete(o),this}get(o){let h=o._zod.parent;if(h){let u={...this.get(h)??{}};delete u.id;let O={...u,...this._map.get(o)};return Object.keys(O).length?O:void 0}return this._map.get(o)}has(o){return this._map.has(o)}}function DL(){return new sX}(dX=globalThis).__zod_globalRegistry??(dX.__zod_globalRegistry=DL());var Fh=globalThis.__zod_globalRegistry;function rY(o,h){return new o({type:"string",..._r(h)})}function gY(o,h){return new o({type:"string",format:"email",check:"string_format",abort:!1,..._r(h)})}function VP(o,h){return new o({type:"string",format:"guid",check:"string_format",abort:!1,..._r(h)})}function vY(o,h){return new o({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(h)})}function oY(o,h){return new o({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(h)})}function lY(o,h){return new o({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(h)})}function hY(o,h){return new o({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(h)})}function wY(o,h){return new o({type:"string",format:"url",check:"string_format",abort:!1,..._r(h)})}function bY(o,h){return new o({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(h)})}function uY(o,h){return new o({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(h)})}function OY(o,h){return new o({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(h)})}function HY(o,h){return new o({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(h)})}function PY(o,h){return new o({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(h)})}function qY(o,h){return new o({type:"string",format:"xid",check:"string_format",abort:!1,..._r(h)})}function AY(o,h){return new o({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(h)})}function MY(o,h){return new o({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(h)})}function WY(o,h){return new o({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(h)})}function RY(o,h){return new o({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(h)})}function GY(o,h){return new o({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(h)})}function XY(o,h){return new o({type:"string",format:"base64",check:"string_format",abort:!1,..._r(h)})}function YY(o,h){return new o({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(h)})}function JY(o,h){return new o({type:"string",format:"e164",check:"string_format",abort:!1,..._r(h)})}function QY(o,h){return new o({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(h)})}function zY(o,h){return new o({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(h)})}function KY(o,h){return new o({type:"string",format:"date",check:"string_format",..._r(h)})}function eY(o,h){return new o({type:"string",format:"time",check:"string_format",precision:null,..._r(h)})}function $Y(o,h){return new o({type:"string",format:"duration",check:"string_format",..._r(h)})}function UY(o){return new o({type:"unknown"})}function LY(o,h){return new o({type:"never",..._r(h)})}function Gu(o,h){return new tG({check:"max_length",..._r(h),maximum:o})}function y5(o,h){return new VG({check:"min_length",..._r(h),minimum:o})}function Xu(o,h){return new _G({check:"length_equals",..._r(h),length:o})}function _P(o,h){return new EG({check:"string_format",format:"regex",..._r(h),pattern:o})}function EP(o){return new yG({check:"string_format",format:"lowercase",..._r(o)})}function yP(o){return new cG({check:"string_format",format:"uppercase",..._r(o)})}function cP(o,h){return new jG({check:"string_format",format:"includes",..._r(h),includes:o})}function jP(o,h){return new fG({check:"string_format",format:"starts_with",..._r(h),prefix:o})}function fP(o,h){return new pG({check:"string_format",format:"ends_with",..._r(h),suffix:o})}function el(o){return new aG({check:"overwrite",tx:o})}function pP(o){return el((h)=>h.normalize(o))}function aP(){return el((o)=>o.trim())}function dP(){return el((o)=>o.toLowerCase())}function sP(){return el((o)=>o.toUpperCase())}function rq(){return el((o)=>xP(o))}function FY(o,h,u){return new o({type:"array",element:h,..._r(u)})}function IY(o,h,u){return new o({type:"custom",check:"custom",fn:h,..._r(u)})}function BY(o){let h=tL((u)=>{return u.addIssue=(O)=>{if(typeof O==="string")u.issues.push(E5(O,u.value,h._zod.def));else{let P=O;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=u.value),P.inst??(P.inst=h),P.continue??(P.continue=!h._zod.def.abort),u.issues.push(E5(P))}},o(u.value,u)});return h}function tL(o,h){let u=new Yv({check:"custom",..._r(h)});return u._zod.check=o,u}function gq(o){let h=o?.target??"draft-2020-12";if(h==="draft-4")h="draft-04";if(h==="draft-7")h="draft-07";return{processors:o.processors??{},metadataRegistry:o?.metadata??Fh,target:h,unrepresentable:o?.unrepresentable??"throw",override:o?.override??(()=>{}),io:o?.io??"output",counter:0,seen:new Map,cycles:o?.cycles??"ref",reused:o?.reused??"inline",external:o?.external??void 0}}function H0(o,h,u={path:[],schemaPath:[]}){var O;let P=o._zod.def,A=h.seen.get(o);if(A){if(A.count++,u.schemaPath.includes(o))A.cycle=u.path;return A.schema}let M={schema:{},count:1,cycle:void 0,path:u.path};h.seen.set(o,M);let W=o._zod.toJSONSchema?.();if(W)M.schema=W;else{let Q={...u,schemaPath:[...u.schemaPath,o],path:u.path};if(o._zod.processJSONSchema)o._zod.processJSONSchema(h,M.schema,Q);else{let K=M.schema,N=h.processors[P.type];if(!N)throw Error(`[toJSONSchema]: Non-representable type encountered: ${P.type}`);N(o,h,K,Q)}let G=o._zod.parent;if(G){if(!M.ref)M.ref=G;H0(G,h,Q),h.seen.get(G).isParent=!0}}let J=h.metadataRegistry.get(o);if(J)Object.assign(M.schema,J);if(h.io==="input"&&t0(o))delete M.schema.examples,delete M.schema.default;if(h.io==="input"&&M.schema._prefault)(O=M.schema).default??(O.default=M.schema._prefault);return delete M.schema._prefault,h.seen.get(o).schema}function vq(o,h){let u=o.seen.get(h);if(!u)throw Error("Unprocessed schema. This is a bug in Zod.");let O=new Map;for(let M of o.seen.entries()){let W=o.metadataRegistry.get(M[0])?.id;if(W){let J=O.get(W);if(J&&J!==M[0])throw Error(`Duplicate schema id "${W}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);O.set(W,M[0])}}let P=(M)=>{let W=o.target==="draft-2020-12"?"$defs":"definitions";if(o.external){let G=o.external.registry.get(M[0])?.id,K=o.external.uri??((j)=>j);if(G)return{ref:K(G)};let N=M[1].defId??M[1].schema.id??`schema${o.counter++}`;return M[1].defId=N,{defId:N,ref:`${K("__shared")}#/${W}/${N}`}}if(M[1]===u)return{ref:"#"};let z=`${"#"}/${W}/`,Q=M[1].schema.id??`__schema${o.counter++}`;return{defId:Q,ref:z+Q}},A=(M)=>{if(M[1].schema.$ref)return;let W=M[1],{ref:J,defId:z}=P(M);if(W.def={...W.schema},z)W.defId=z;let Q=W.schema;for(let G in Q)delete Q[G];Q.$ref=J};if(o.cycles==="throw")for(let M of o.seen.entries()){let W=M[1];if(W.cycle)throw Error(`Cycle detected: #/${W.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let M of o.seen.entries()){let W=M[1];if(h===M[0]){A(M);continue}if(o.external){let z=o.external.registry.get(M[0])?.id;if(h!==M[0]&&z){A(M);continue}}if(o.metadataRegistry.get(M[0])?.id){A(M);continue}if(W.cycle){A(M);continue}if(W.count>1){if(o.reused==="ref"){A(M);continue}}}}function oq(o,h){let u=o.seen.get(h);if(!u)throw Error("Unprocessed schema. This is a bug in Zod.");let O=(M)=>{let W=o.seen.get(M);if(W.ref===null)return;let J=W.def??W.schema,z={...J},Q=W.ref;if(W.ref=null,Q){O(Q);let K=o.seen.get(Q),N=K.schema;if(N.$ref&&(o.target==="draft-07"||o.target==="draft-04"||o.target==="openapi-3.0"))J.allOf=J.allOf??[],J.allOf.push(N);else Object.assign(J,N);if(Object.assign(J,z),M._zod.parent===Q)for(let T in J){if(T==="$ref"||T==="allOf")continue;if(!(T in z))delete J[T]}if(N.$ref&&K.def)for(let T in J){if(T==="$ref"||T==="allOf")continue;if(T in K.def&&JSON.stringify(J[T])===JSON.stringify(K.def[T]))delete J[T]}}let G=M._zod.parent;if(G&&G!==Q){O(G);let K=o.seen.get(G);if(K?.schema.$ref){if(J.$ref=K.schema.$ref,K.def)for(let N in J){if(N==="$ref"||N==="allOf")continue;if(N in K.def&&JSON.stringify(J[N])===JSON.stringify(K.def[N]))delete J[N]}}}o.override({zodSchema:M,jsonSchema:J,path:W.path??[]})};for(let M of[...o.seen.entries()].reverse())O(M[0]);let P={};if(o.target==="draft-2020-12")P.$schema="https://json-schema.org/draft/2020-12/schema";else if(o.target==="draft-07")P.$schema="http://json-schema.org/draft-07/schema#";else if(o.target==="draft-04")P.$schema="http://json-schema.org/draft-04/schema#";else if(o.target==="openapi-3.0");if(o.external?.uri){let M=o.external.registry.get(h)?.id;if(!M)throw Error("Schema is missing an `id` property");P.$id=o.external.uri(M)}Object.assign(P,u.def??u.schema);let A=o.external?.defs??{};for(let M of o.seen.entries()){let W=M[1];if(W.def&&W.defId)A[W.defId]=W.def}if(o.external);else if(Object.keys(A).length>0)if(o.target==="draft-2020-12")P.$defs=A;else P.definitions=A;try{let M=JSON.parse(JSON.stringify(P));return Object.defineProperty(M,"~standard",{value:{...h["~standard"],jsonSchema:{input:z2(h,"input",o.processors),output:z2(h,"output",o.processors)}},enumerable:!1,writable:!1}),M}catch(M){throw Error("Error converting schema to JSON.")}}function t0(o,h){let u=h??{seen:new Set};if(u.seen.has(o))return!1;u.seen.add(o);let O=o._zod.def;if(O.type==="transform")return!0;if(O.type==="array")return t0(O.element,u);if(O.type==="set")return t0(O.valueType,u);if(O.type==="lazy")return t0(O.getter(),u);if(O.type==="promise"||O.type==="optional"||O.type==="nonoptional"||O.type==="nullable"||O.type==="readonly"||O.type==="default"||O.type==="prefault")return t0(O.innerType,u);if(O.type==="intersection")return t0(O.left,u)||t0(O.right,u);if(O.type==="record"||O.type==="map")return t0(O.keyType,u)||t0(O.valueType,u);if(O.type==="pipe")return t0(O.in,u)||t0(O.out,u);if(O.type==="object"){for(let P in O.shape)if(t0(O.shape[P],u))return!0;return!1}if(O.type==="union"){for(let P of O.options)if(t0(P,u))return!0;return!1}if(O.type==="tuple"){for(let P of O.items)if(t0(P,u))return!0;if(O.rest&&t0(O.rest,u))return!0;return!1}return!1}var NY=(o,h={})=>(u)=>{let O=gq({...u,processors:h});return H0(o,O),vq(O,o),oq(O,o)},z2=(o,h,u={})=>(O)=>{let{libraryOptions:P,target:A}=O??{},M=gq({...P??{},target:A,io:h,processors:u});return H0(o,M),vq(M,o),oq(M,o)};var VL={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},ZY=(o,h,u,O)=>{let P=u;P.type="string";let{minimum:A,maximum:M,format:W,patterns:J,contentEncoding:z}=o._zod.bag;if(typeof A==="number")P.minLength=A;if(typeof M==="number")P.maxLength=M;if(W){if(P.format=VL[W]??W,P.format==="")delete P.format;if(W==="time")delete P.format}if(z)P.contentEncoding=z;if(J&&J.size>0){let Q=[...J];if(Q.length===1)P.pattern=Q[0].source;else if(Q.length>1)P.allOf=[...Q.map((G)=>({...h.target==="draft-07"||h.target==="draft-04"||h.target==="openapi-3.0"?{type:"string"}:{},pattern:G.source}))]}};var xY=(o,h,u,O)=>{u.not={}};var TY=(o,h,u,O)=>{};var CY=(o,h,u,O)=>{let P=o._zod.def,A=A2(P.entries);if(A.every((M)=>typeof M==="number"))u.type="number";if(A.every((M)=>typeof M==="string"))u.type="string";u.enum=A},mY=(o,h,u,O)=>{let P=o._zod.def,A=[];for(let M of P.values)if(M===void 0){if(h.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof M==="bigint")if(h.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else A.push(Number(M));else A.push(M);if(A.length===0);else if(A.length===1){let M=A[0];if(u.type=M===null?"null":typeof M,h.target==="draft-04"||h.target==="openapi-3.0")u.enum=[M];else u.const=M}else{if(A.every((M)=>typeof M==="number"))u.type="number";if(A.every((M)=>typeof M==="string"))u.type="string";if(A.every((M)=>typeof M==="boolean"))u.type="boolean";if(A.every((M)=>M===null))u.type="null";u.enum=A}};var SY=(o,h,u,O)=>{if(h.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var iY=(o,h,u,O)=>{if(h.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var kY=(o,h,u,O)=>{let P=u,A=o._zod.def,{minimum:M,maximum:W}=o._zod.bag;if(typeof M==="number")P.minItems=M;if(typeof W==="number")P.maxItems=W;P.type="array",P.items=H0(A.element,h,{...O,path:[...O.path,"items"]})},nY=(o,h,u,O)=>{let P=u,A=o._zod.def;P.type="object",P.properties={};let M=A.shape;for(let z in M)P.properties[z]=H0(M[z],h,{...O,path:[...O.path,"properties",z]});let W=new Set(Object.keys(M)),J=new Set([...W].filter((z)=>{let Q=A.shape[z]._zod;if(h.io==="input")return Q.optin===void 0;else return Q.optout===void 0}));if(J.size>0)P.required=Array.from(J);if(A.catchall?._zod.def.type==="never")P.additionalProperties=!1;else if(!A.catchall){if(h.io==="output")P.additionalProperties=!1}else if(A.catchall)P.additionalProperties=H0(A.catchall,h,{...O,path:[...O.path,"additionalProperties"]})},DY=(o,h,u,O)=>{let P=o._zod.def,A=P.inclusive===!1,M=P.options.map((W,J)=>H0(W,h,{...O,path:[...O.path,A?"oneOf":"anyOf",J]}));if(A)u.oneOf=M;else u.anyOf=M},tY=(o,h,u,O)=>{let P=o._zod.def,A=H0(P.left,h,{...O,path:[...O.path,"allOf",0]}),M=H0(P.right,h,{...O,path:[...O.path,"allOf",1]}),W=(z)=>("allOf"in z)&&Object.keys(z).length===1,J=[...W(A)?A.allOf:[A],...W(M)?M.allOf:[M]];u.allOf=J};var VY=(o,h,u,O)=>{let P=o._zod.def,A=H0(P.innerType,h,O),M=h.seen.get(o);if(h.target==="openapi-3.0")M.ref=P.innerType,u.nullable=!0;else u.anyOf=[A,{type:"null"}]},_Y=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);A.ref=P.innerType},EY=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);A.ref=P.innerType,u.default=JSON.parse(JSON.stringify(P.defaultValue))},yY=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);if(A.ref=P.innerType,h.io==="input")u._prefault=JSON.parse(JSON.stringify(P.defaultValue))},cY=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);A.ref=P.innerType;let M;try{M=P.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}u.default=M},jY=(o,h,u,O)=>{let P=o._zod.def,A=h.io==="input"?P.in._zod.def.type==="transform"?P.out:P.in:P.out;H0(A,h,O);let M=h.seen.get(o);M.ref=A},fY=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);A.ref=P.innerType,u.readOnly=!0};var lq=(o,h,u,O)=>{let P=o._zod.def;H0(P.innerType,h,O);let A=h.seen.get(o);A.ref=P.innerType};var gF=_("ZodISODateTime",(o,h)=>{YX.init(o,h),xg.init(o,h)});function pY(o){return zY(gF,o)}var vF=_("ZodISODate",(o,h)=>{JX.init(o,h),xg.init(o,h)});function aY(o){return KY(vF,o)}var oF=_("ZodISOTime",(o,h)=>{QX.init(o,h),xg.init(o,h)});function dY(o){return eY(oF,o)}var lF=_("ZodISODuration",(o,h)=>{zX.init(o,h),xg.init(o,h)});function sY(o){return $Y(lF,o)}var rJ=(o,h)=>{Hu.init(o,h),o.name="ZodError",Object.defineProperties(o,{format:{value:(u)=>bG(o,u)},flatten:{value:(u)=>wG(o,u)},addIssue:{value:(u)=>{o.issues.push(u),o.message=JSON.stringify(o.issues,_5,2)}},addIssues:{value:(u)=>{o.issues.push(...u),o.message=JSON.stringify(o.issues,_5,2)}},isEmpty:{get(){return o.issues.length===0}}})},s_g=_("ZodError",rJ),Jv=_("ZodError",rJ,{Parent:Error});var gJ=Pu(Jv),vJ=qu(Jv),oJ=Y2(Jv),lJ=J2(Jv),hJ=HG(Jv),wJ=PG(Jv),bJ=qG(Jv),uJ=AG(Jv),OJ=MG(Jv),HJ=WG(Jv),PJ=RG(Jv),qJ=GG(Jv);var g0=_("ZodType",(o,h)=>{return _g.init(o,h),Object.assign(o["~standard"],{jsonSchema:{input:z2(o,"input"),output:z2(o,"output")}}),o.toJSONSchema=NY(o,{}),o.def=h,o.type=h.type,Object.defineProperty(o,"_def",{value:h}),o.check=(...u)=>{return o.clone(Mg.mergeDefs(h,{checks:[...h.checks??[],...u.map((O)=>typeof O==="function"?{_zod:{check:O,def:{check:"custom"},onattach:[]}}:O)]}),{parent:!0})},o.with=o.check,o.clone=(u,O)=>go(o,u,O),o.brand=()=>o,o.register=(u,O)=>{return u.add(o,O),o},o.parse=(u,O)=>gJ(o,u,O,{callee:o.parse}),o.safeParse=(u,O)=>oJ(o,u,O),o.parseAsync=async(u,O)=>vJ(o,u,O,{callee:o.parseAsync}),o.safeParseAsync=async(u,O)=>lJ(o,u,O),o.spa=o.safeParseAsync,o.encode=(u,O)=>hJ(o,u,O),o.decode=(u,O)=>wJ(o,u,O),o.encodeAsync=async(u,O)=>bJ(o,u,O),o.decodeAsync=async(u,O)=>uJ(o,u,O),o.safeEncode=(u,O)=>OJ(o,u,O),o.safeDecode=(u,O)=>HJ(o,u,O),o.safeEncodeAsync=async(u,O)=>PJ(o,u,O),o.safeDecodeAsync=async(u,O)=>qJ(o,u,O),o.refine=(u,O)=>o.check(dF(u,O)),o.superRefine=(u)=>o.check(sF(u)),o.overwrite=(u)=>o.check(el(u)),o.optional=()=>WJ(o),o.exactOptional=()=>kF(o),o.nullable=()=>RJ(o),o.nullish=()=>WJ(RJ(o)),o.nonoptional=(u)=>EF(o,u),o.array=()=>K1(o),o.or=(u)=>ZF([o,u]),o.and=(u)=>TF(o,u),o.transform=(u)=>GJ(o,SF(u)),o.default=(u)=>tF(o,u),o.prefault=(u)=>_F(o,u),o.catch=(u)=>cF(o,u),o.pipe=(u)=>GJ(o,u),o.readonly=()=>pF(o),o.describe=(u)=>{let O=o.clone();return Fh.add(O,{description:u}),O},Object.defineProperty(o,"description",{get(){return Fh.get(o)?.description},configurable:!0}),o.meta=(...u)=>{if(u.length===0)return Fh.get(o);let O=o.clone();return Fh.add(O,u[0]),O},o.isOptional=()=>o.safeParse(void 0).success,o.isNullable=()=>o.safeParse(null).success,o.apply=(u)=>u(o),o}),XJ=_("_ZodString",(o,h)=>{Ru.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(O,P,A)=>ZY(o,O,P,A);let u=o._zod.bag;o.format=u.format??null,o.minLength=u.minimum??null,o.maxLength=u.maximum??null,o.regex=(...O)=>o.check(_P(...O)),o.includes=(...O)=>o.check(cP(...O)),o.startsWith=(...O)=>o.check(jP(...O)),o.endsWith=(...O)=>o.check(fP(...O)),o.min=(...O)=>o.check(y5(...O)),o.max=(...O)=>o.check(Gu(...O)),o.length=(...O)=>o.check(Xu(...O)),o.nonempty=(...O)=>o.check(y5(1,...O)),o.lowercase=(O)=>o.check(EP(O)),o.uppercase=(O)=>o.check(yP(O)),o.trim=()=>o.check(aP()),o.normalize=(...O)=>o.check(pP(...O)),o.toLowerCase=()=>o.check(dP()),o.toUpperCase=()=>o.check(sP()),o.slugify=()=>o.check(rq())}),uF=_("ZodString",(o,h)=>{Ru.init(o,h),XJ.init(o,h),o.email=(u)=>o.check(gY(OF,u)),o.url=(u)=>o.check(wY(HF,u)),o.jwt=(u)=>o.check(QY($F,u)),o.emoji=(u)=>o.check(bY(PF,u)),o.guid=(u)=>o.check(VP(AJ,u)),o.uuid=(u)=>o.check(vY(Ju,u)),o.uuidv4=(u)=>o.check(oY(Ju,u)),o.uuidv6=(u)=>o.check(lY(Ju,u)),o.uuidv7=(u)=>o.check(hY(Ju,u)),o.nanoid=(u)=>o.check(uY(qF,u)),o.guid=(u)=>o.check(VP(AJ,u)),o.cuid=(u)=>o.check(OY(AF,u)),o.cuid2=(u)=>o.check(HY(MF,u)),o.ulid=(u)=>o.check(PY(WF,u)),o.base64=(u)=>o.check(XY(zF,u)),o.base64url=(u)=>o.check(YY(KF,u)),o.xid=(u)=>o.check(qY(RF,u)),o.ksuid=(u)=>o.check(AY(GF,u)),o.ipv4=(u)=>o.check(MY(XF,u)),o.ipv6=(u)=>o.check(WY(YF,u)),o.cidrv4=(u)=>o.check(RY(JF,u)),o.cidrv6=(u)=>o.check(GY(QF,u)),o.e164=(u)=>o.check(JY(eF,u)),o.datetime=(u)=>o.check(pY(u)),o.date=(u)=>o.check(aY(u)),o.time=(u)=>o.check(dY(u)),o.duration=(u)=>o.check(sY(u))});function Eg(o){return rY(uF,o)}var xg=_("ZodStringFormat",(o,h)=>{Bg.init(o,h),XJ.init(o,h)}),OF=_("ZodEmail",(o,h)=>{HX.init(o,h),xg.init(o,h)});var AJ=_("ZodGUID",(o,h)=>{uX.init(o,h),xg.init(o,h)});var Ju=_("ZodUUID",(o,h)=>{OX.init(o,h),xg.init(o,h)});var HF=_("ZodURL",(o,h)=>{PX.init(o,h),xg.init(o,h)});var PF=_("ZodEmoji",(o,h)=>{qX.init(o,h),xg.init(o,h)});var qF=_("ZodNanoID",(o,h)=>{AX.init(o,h),xg.init(o,h)});var AF=_("ZodCUID",(o,h)=>{MX.init(o,h),xg.init(o,h)});var MF=_("ZodCUID2",(o,h)=>{WX.init(o,h),xg.init(o,h)});var WF=_("ZodULID",(o,h)=>{RX.init(o,h),xg.init(o,h)});var RF=_("ZodXID",(o,h)=>{GX.init(o,h),xg.init(o,h)});var GF=_("ZodKSUID",(o,h)=>{XX.init(o,h),xg.init(o,h)});var XF=_("ZodIPv4",(o,h)=>{KX.init(o,h),xg.init(o,h)});var YF=_("ZodIPv6",(o,h)=>{eX.init(o,h),xg.init(o,h)});var JF=_("ZodCIDRv4",(o,h)=>{$X.init(o,h),xg.init(o,h)});var QF=_("ZodCIDRv6",(o,h)=>{UX.init(o,h),xg.init(o,h)});var zF=_("ZodBase64",(o,h)=>{FX.init(o,h),xg.init(o,h)});var KF=_("ZodBase64URL",(o,h)=>{IX.init(o,h),xg.init(o,h)});var eF=_("ZodE164",(o,h)=>{BX.init(o,h),xg.init(o,h)});var $F=_("ZodJWT",(o,h)=>{NX.init(o,h),xg.init(o,h)});var UF=_("ZodUnknown",(o,h)=>{ZX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>TY(o,u,O,P)});function MJ(){return UY(UF)}var LF=_("ZodNever",(o,h)=>{xX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>xY(o,u,O,P)});function FF(o){return LY(LF,o)}var IF=_("ZodArray",(o,h)=>{TX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>kY(o,u,O,P),o.element=h.element,o.min=(u,O)=>o.check(y5(u,O)),o.nonempty=(u)=>o.check(y5(1,u)),o.max=(u,O)=>o.check(Gu(u,O)),o.length=(u,O)=>o.check(Xu(u,O)),o.unwrap=()=>o.element});function K1(o,h){return FY(IF,o,h)}var BF=_("ZodObject",(o,h)=>{SX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>nY(o,u,O,P),Mg.defineLazy(o,"shape",()=>{return h.shape}),o.keyof=()=>K2(Object.keys(o._zod.def.shape)),o.catchall=(u)=>o.clone({...o._zod.def,catchall:u}),o.passthrough=()=>o.clone({...o._zod.def,catchall:MJ()}),o.loose=()=>o.clone({...o._zod.def,catchall:MJ()}),o.strict=()=>o.clone({...o._zod.def,catchall:FF()}),o.strip=()=>o.clone({...o._zod.def,catchall:void 0}),o.extend=(u)=>{return Mg.extend(o,u)},o.safeExtend=(u)=>{return Mg.safeExtend(o,u)},o.merge=(u)=>Mg.merge(o,u),o.pick=(u)=>Mg.pick(o,u),o.omit=(u)=>Mg.omit(o,u),o.partial=(...u)=>Mg.partial(YJ,o,u[0]),o.required=(...u)=>Mg.required(JJ,o,u[0])});function Ih(o,h){let u={type:"object",shape:o??{},...Mg.normalizeParams(h)};return new BF(u)}var NF=_("ZodUnion",(o,h)=>{iX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>DY(o,u,O,P),o.options=h.options});function ZF(o,h){return new NF({type:"union",options:o,...Mg.normalizeParams(h)})}var xF=_("ZodIntersection",(o,h)=>{kX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>tY(o,u,O,P)});function TF(o,h){return new xF({type:"intersection",left:o,right:h})}var hq=_("ZodEnum",(o,h)=>{nX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(O,P,A)=>CY(o,O,P,A),o.enum=h.entries,o.options=Object.values(h.entries);let u=new Set(Object.keys(h.entries));o.extract=(O,P)=>{let A={};for(let M of O)if(u.has(M))A[M]=h.entries[M];else throw Error(`Key ${M} not found in enum`);return new hq({...h,checks:[],...Mg.normalizeParams(P),entries:A})},o.exclude=(O,P)=>{let A={...h.entries};for(let M of O)if(u.has(M))delete A[M];else throw Error(`Key ${M} not found in enum`);return new hq({...h,checks:[],...Mg.normalizeParams(P),entries:A})}});function K2(o,h){let u=Array.isArray(o)?Object.fromEntries(o.map((O)=>[O,O])):o;return new hq({type:"enum",entries:u,...Mg.normalizeParams(h)})}var CF=_("ZodLiteral",(o,h)=>{DX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>mY(o,u,O,P),o.values=new Set(h.values),Object.defineProperty(o,"value",{get(){if(h.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return h.values[0]}})});function wq(o,h){return new CF({type:"literal",values:Array.isArray(o)?o:[o],...Mg.normalizeParams(h)})}var mF=_("ZodTransform",(o,h)=>{tX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>iY(o,u,O,P),o._zod.parse=(u,O)=>{if(O.direction==="backward")throw new P2(o.constructor.name);u.addIssue=(A)=>{if(typeof A==="string")u.issues.push(Mg.issue(A,u.value,h));else{let M=A;if(M.fatal)M.continue=!1;M.code??(M.code="custom"),M.input??(M.input=u.value),M.inst??(M.inst=o),u.issues.push(Mg.issue(M))}};let P=h.transform(u.value,u);if(P instanceof Promise)return P.then((A)=>{return u.value=A,u});return u.value=P,u}});function SF(o){return new mF({type:"transform",transform:o})}var YJ=_("ZodOptional",(o,h)=>{tP.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>lq(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function WJ(o){return new YJ({type:"optional",innerType:o})}var iF=_("ZodExactOptional",(o,h)=>{VX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>lq(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function kF(o){return new iF({type:"optional",innerType:o})}var nF=_("ZodNullable",(o,h)=>{_X.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>VY(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function RJ(o){return new nF({type:"nullable",innerType:o})}var DF=_("ZodDefault",(o,h)=>{EX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>EY(o,u,O,P),o.unwrap=()=>o._zod.def.innerType,o.removeDefault=o.unwrap});function tF(o,h){return new DF({type:"default",innerType:o,get defaultValue(){return typeof h==="function"?h():Mg.shallowClone(h)}})}var VF=_("ZodPrefault",(o,h)=>{yX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>yY(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function _F(o,h){return new VF({type:"prefault",innerType:o,get defaultValue(){return typeof h==="function"?h():Mg.shallowClone(h)}})}var JJ=_("ZodNonOptional",(o,h)=>{cX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>_Y(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function EF(o,h){return new JJ({type:"nonoptional",innerType:o,...Mg.normalizeParams(h)})}var yF=_("ZodCatch",(o,h)=>{jX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>cY(o,u,O,P),o.unwrap=()=>o._zod.def.innerType,o.removeCatch=o.unwrap});function cF(o,h){return new yF({type:"catch",innerType:o,catchValue:typeof h==="function"?h:()=>h})}var jF=_("ZodPipe",(o,h)=>{fX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>jY(o,u,O,P),o.in=h.in,o.out=h.out});function GJ(o,h){return new jF({type:"pipe",in:o,out:h})}var fF=_("ZodReadonly",(o,h)=>{pX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>fY(o,u,O,P),o.unwrap=()=>o._zod.def.innerType});function pF(o){return new fF({type:"readonly",innerType:o})}var aF=_("ZodCustom",(o,h)=>{aX.init(o,h),g0.init(o,h),o._zod.processJSONSchema=(u,O,P)=>SY(o,u,O,P)});function dF(o,h={}){return IY(aF,o,h)}function sF(o){return BY(o)}var QJ=Ih({type:K2(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),zJ=Ih({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:K1(Eg()).optional()}),rI=Ih({name:Eg().min(1).max(200),code:Eg(),type:K2(["trigger","library"]),triggers:K1(Eg()).optional(),bindings:K1(QJ).optional(),folder:Eg().optional(),metadata:zJ.optional()}),KJ=Ih({format:wq("lumiscript-pack-v1"),exportedAt:Eg(),scripts:K1(rI).min(1).max(100)}),gI=Ih({name:Eg().min(1).max(200),file:Eg().min(1),type:K2(["trigger","library"]),triggers:K1(Eg()).optional(),bindings:K1(QJ).optional(),folder:Eg().optional(),metadata:zJ.optional()}),zyg=Ih({format:wq("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:K1(gI).min(1).max(100)});var eJ=1048576;async function $J(o){let h=new Uint8Array(await o.arrayBuffer()),u;try{u=yR(h)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let O=u["pack.json"];if(!O)throw Error("Invalid script pack: missing pack.json");if(O.byteLength>eJ)throw Error(`Pack exceeds the ${eJ/1024/1024} MB decompressed size limit`);let P=BP(O),A;try{A=JSON.parse(P)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return KJ.parse(A).scripts}var wg=Ar(rg(),1);function vI(o){let u="";for(let O=0;O<o.length;O+=32768)u+=String.fromCharCode(...o.subarray(O,O+32768));return btoa(u)}function oI(o){let h=new Map;for(let P of o){let A=P.folder??"";if(!h.has(A))h.set(A,[]);h.get(A).push(P)}let u=new Map;if(h.has(""))u.set("",h.get(""));let O=[...h.keys()].filter((P)=>P!=="").sort();for(let P of O)u.set(P,h.get(P));return u}var Qu=({scripts:o,selectedId:h,execInfo:u,onSelect:O,onEdit:P,sendToBackend:A})=>{let[M,W]=e2.useState("trigger"),[J,z]=e2.useState(new Set),Q=e2.useRef(null),G=o.filter((p)=>p.type===M),K=oI(G),N=K.size>1||K.size===1&&!K.has(""),j=(p)=>{z((s)=>{let lr=new Set(s);if(lr.has(p))lr.delete(p);else lr.add(p);return lr})},T=()=>{let p=M==="library"?"Library name:":"Script name:",s=window.prompt(p);if(!s?.trim())return;A({type:"create_script",name:s.trim(),scriptType:M})},y=(p)=>{if(G.length===0)return;if(p.shiftKey){let lr=NP(G);A({type:"save_pack_to_disk",bytesB64:vI(lr),scriptType:M});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;cR(G,s.trim())},rr=()=>{Q.current?.click()},qr=async(p)=>{let s=p.target.files?.[0];if(!s)return;p.target.value="";try{let lr=await $J(s),m=(i)=>i==="library"?"[L]":"[T]",V=lr.map((i)=>`  ${m(i.type)} ${i.name}`).join(`
`);if(!window.confirm(`Import ${lr.length} script${lr.length>1?"s":""}?

${V}

Imported scripts will be disabled. Review and enable them manually.`))return;A({type:"import_scripts",entries:lr})}catch(lr){window.alert(`Import failed: ${lr instanceof Error?lr.message:String(lr)}`)}},or=(p)=>{let s=u[p.id];return wg.jsxDEV(NR,{script:p,selected:p.id===h,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>O(p.id),onEdit:()=>P(p.id),sendToBackend:A},p.id,!1,void 0,this)};return wg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[wg.jsxDEV("div",{className:"ls-list-header",children:[wg.jsxDEV("div",{className:"ls-list-type-tabs",children:[wg.jsxDEV("button",{className:`ls-type-tab${M==="trigger"?" ls-active":""}`,onClick:()=>W("trigger"),title:"Scripts",children:wg.jsxDEV(X0,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:`ls-type-tab${M==="library"?" ls-active":""}`,onClick:()=>W("library"),title:"Libraries",children:wg.jsxDEV(zh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("div",{className:"ls-list-actions",children:[wg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:wg.jsxDEV(h2,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:"ls-icon-btn",onClick:y,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:G.length===0,children:wg.jsxDEV(Kh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("button",{className:"ls-icon-btn",onClick:T,title:"New script",children:wg.jsxDEV(ab,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("input",{ref:Q,type:"file",accept:".zip",style:{display:"none"},onChange:qr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wg.jsxDEV("div",{className:"ls-list-body",children:G.length===0?wg.jsxDEV("div",{className:"ls-list-empty",children:[wg.jsxDEV(Co,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),wg.jsxDEV("p",{children:["No ",M==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),wg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):N?[...K.entries()].map(([p,s])=>{let lr=J.has(p);return p===""?wg.jsxDEV("div",{children:s.map(or)},"__unfiled",!1,void 0,this):wg.jsxDEV("div",{className:"ls-folder-group",children:[wg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>j(p),children:[lr?wg.jsxDEV(W1,{size:11},void 0,!1,void 0,this):wg.jsxDEV(Y0,{size:11},void 0,!1,void 0,this),wg.jsxDEV(eh,{size:11},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-name",children:p},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(m)=>{m.stopPropagation();let V=window.prompt("Rename folder:",p);if(V===null||V.trim()===""||V.trim()===p)return;for(let c of s)A({type:"update_script",id:c.id,patch:{folder:V.trim()}})},children:wg.jsxDEV(dv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),wg.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!lr&&s.map(or)]},`folder-${p}`,!0,void 0,this)}):G.map(or)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var I2=Ar(hg(),1),HQ=Ar(S5(),1);var Q0=Ar(hg(),1);function UJ(o,h){(h==null||h>o.length)&&(h=o.length);for(var u=0,O=Array(h);u<h;u++)O[u]=o[u];return O}function lI(o){if(Array.isArray(o))return o}function hI(o,h,u){return(h=HI(h))in o?Object.defineProperty(o,h,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[h]=u,o}function wI(o,h){var u=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(u!=null){var O,P,A,M,W=[],J=!0,z=!1;try{if(A=(u=u.call(o)).next,h===0);else for(;!(J=(O=A.call(u)).done)&&(W.push(O.value),W.length!==h);J=!0);}catch(Q){z=!0,P=Q}finally{try{if(!J&&u.return!=null&&(M=u.return(),Object(M)!==M))return}finally{if(z)throw P}}return W}}function bI(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LJ(o,h){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(o);h&&(O=O.filter(function(P){return Object.getOwnPropertyDescriptor(o,P).enumerable})),u.push.apply(u,O)}return u}function bq(o){for(var h=1;h<arguments.length;h++){var u=arguments[h]!=null?arguments[h]:{};h%2?LJ(Object(u),!0).forEach(function(O){hI(o,O,u[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):LJ(Object(u)).forEach(function(O){Object.defineProperty(o,O,Object.getOwnPropertyDescriptor(u,O))})}return o}function FJ(o,h){if(o==null)return{};var u,O,P=uI(o,h);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(o);for(O=0;O<A.length;O++)u=A[O],h.indexOf(u)===-1&&{}.propertyIsEnumerable.call(o,u)&&(P[u]=o[u])}return P}function uI(o,h){if(o==null)return{};var u={};for(var O in o)if({}.hasOwnProperty.call(o,O)){if(h.indexOf(O)!==-1)continue;u[O]=o[O]}return u}function IJ(o,h){return lI(o)||wI(o,h)||PI(o,h)||bI()}function OI(o,h){if(typeof o!="object"||!o)return o;var u=o[Symbol.toPrimitive];if(u!==void 0){var O=u.call(o,h);if(typeof O!="object")return O;throw TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(o)}function HI(o){var h=OI(o,"string");return typeof h=="symbol"?h:h+""}function PI(o,h){if(o){if(typeof o=="string")return UJ(o,h);var u={}.toString.call(o).slice(8,-1);return u==="Object"&&o.constructor&&(u=o.constructor.name),u==="Map"||u==="Set"?Array.from(o):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?UJ(o,h):void 0}}function qI(o,h,u){if(h in o)Object.defineProperty(o,h,{value:u,enumerable:!0,configurable:!0,writable:!0});else o[h]=u;return o}function BJ(o,h){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(o);if(h)O=O.filter(function(P){return Object.getOwnPropertyDescriptor(o,P).enumerable});u.push.apply(u,O)}return u}function NJ(o){for(var h=1;h<arguments.length;h++){var u=arguments[h]!=null?arguments[h]:{};if(h%2)BJ(Object(u),!0).forEach(function(O){qI(o,O,u[O])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(o,Object.getOwnPropertyDescriptors(u));else BJ(Object(u)).forEach(function(O){Object.defineProperty(o,O,Object.getOwnPropertyDescriptor(u,O))})}return o}function AI(){for(var o=arguments.length,h=Array(o),u=0;u<o;u++)h[u]=arguments[u];return function(O){return h.reduceRight(function(P,A){return A(P)},O)}}function $2(o){return function h(){var u=this;for(var O=arguments.length,P=Array(O),A=0;A<O;A++)P[A]=arguments[A];return P.length>=o.length?o.apply(this,P):function(){for(var M=arguments.length,W=Array(M),J=0;J<M;J++)W[J]=arguments[J];return h.apply(u,[].concat(P,W))}}}function Ku(o){return{}.toString.call(o).includes("Object")}function MI(o){return!Object.keys(o).length}function U2(o){return typeof o==="function"}function WI(o,h){return Object.prototype.hasOwnProperty.call(o,h)}function RI(o,h){if(!Ku(h))$l("changeType");if(Object.keys(h).some(function(u){return!WI(o,u)}))$l("changeField");return h}function GI(o){if(!U2(o))$l("selectorType")}function XI(o){if(!(U2(o)||Ku(o)))$l("handlerType");if(Ku(o)&&Object.values(o).some(function(h){return!U2(h)}))$l("handlersType")}function YI(o){if(!o)$l("initialIsRequired");if(!Ku(o))$l("initialType");if(MI(o))$l("initialContent")}function JI(o,h){throw Error(o[h]||o.default)}var QI={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$l=$2(JI)(QI),zu={changes:RI,selector:GI,handler:XI,initial:YI};function zI(o){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};zu.initial(o),zu.handler(h);var u={current:o},O=$2($I)(u,h),P=$2(eI)(u),A=$2(zu.changes)(o),M=$2(KI)(u);function W(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(Q){return Q};return zu.selector(z),z(u.current)}function J(z){AI(O,P,A,M)(z)}return[W,J]}function KI(o,h){return U2(h)?h(o.current):h}function eI(o,h){return o.current=NJ(NJ({},o.current),h),h}function $I(o,h,u){return U2(h)?h(o.current):Object.keys(u).forEach(function(O){var P;return(P=h[O])===null||P===void 0?void 0:P.call(h,o.current[O])}),u}var UI={create:zI},ZJ=UI;var xJ={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function TJ(o){return function h(){var u=this;for(var O=arguments.length,P=Array(O),A=0;A<O;A++)P[A]=arguments[A];return P.length>=o.length?o.apply(this,P):function(){for(var M=arguments.length,W=Array(M),J=0;J<M;J++)W[J]=arguments[J];return h.apply(u,[].concat(P,W))}}}function CJ(o){return{}.toString.call(o).includes("Object")}function LI(o){if(!o)mJ("configIsRequired");if(!CJ(o))mJ("configType");if(o.urls)return FI(),{paths:{vs:o.urls.monacoBase}};return o}function FI(){console.warn(SJ.deprecation)}function II(o,h){throw Error(o[h]||o.default)}var SJ={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},mJ=TJ(II)(SJ),iJ={config:LI};var kJ=function(){for(var h=arguments.length,u=Array(h),O=0;O<h;O++)u[O]=arguments[O];return function(P){return u.reduceRight(function(A,M){return M(A)},P)}};function uq(o,h){return Object.keys(h).forEach(function(u){if(h[u]instanceof Object){if(o[u])Object.assign(h[u],uq(o[u],h[u]))}}),bq(bq({},o),h)}var BI={type:"cancelation",msg:"operation is manually canceled"};function eu(o){var h=!1,u=new Promise(function(O,P){o.then(function(A){return h?P(BI):O(A)}),o.catch(P)});return u.cancel=function(){return h=!0},u}var NI=["monaco"],ZI=ZJ.create({config:xJ,isInitialized:!1,resolve:null,reject:null,monaco:null}),nJ=IJ(ZI,2),L2=nJ[0],$u=nJ[1];function xI(o){var h=iJ.config(o),u=h.monaco,O=FJ(h,NI);$u(function(P){return{config:uq(P.config,O),monaco:u}})}function TI(){var o=L2(function(h){var{monaco:u,isInitialized:O,resolve:P}=h;return{monaco:u,isInitialized:O,resolve:P}});if(!o.isInitialized){if($u({isInitialized:!0}),o.monaco)return o.resolve(o.monaco),eu(Oq);if(window.monaco&&window.monaco.editor)return DJ(window.monaco),o.resolve(window.monaco),eu(Oq);kJ(CI,SI)(iI)}return eu(Oq)}function CI(o){return document.body.appendChild(o)}function mI(o){var h=document.createElement("script");return o&&(h.src=o),h}function SI(o){var h=L2(function(O){var{config:P,reject:A}=O;return{config:P,reject:A}}),u=mI("".concat(h.config.paths.vs,"/loader.js"));return u.onload=function(){return o()},u.onerror=h.reject,u}function iI(){var o=L2(function(u){var{config:O,resolve:P,reject:A}=u;return{config:O,resolve:P,reject:A}}),h=window.require;h.config(o.config),h(["vs/editor/editor.main"],function(u){var O=u.m||u;DJ(O),o.resolve(O)},function(u){o.reject(u)})}function DJ(o){if(!L2().monaco)$u({monaco:o})}function kI(){return L2(function(o){var h=o.monaco;return h})}var Oq=new Promise(function(o,h){return $u({resolve:o,reject:h})}),Bh={config:xI,init:TI,__getMonacoInstance:kI};var tJ=Ar(hg(),1),P0=Ar(hg(),1);var VJ=Ar(hg(),1),Lu=Ar(hg(),1),_J=Ar(hg(),1),yJ=Ar(hg(),1),Fu=Ar(hg(),1),rB=Ar(hg(),1);var fJ=Ar(hg(),1),ng=Ar(hg(),1);var Iu=Ar(hg(),1),nI={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Hq=nI,DI={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},tI=DI;function VI({children:o}){return _J.default.createElement("div",{style:tI.container},o)}var _I=VI,EI=_I;function yI({width:o,height:h,isEditorReady:u,loading:O,_ref:P,className:A,wrapperProps:M}){return Lu.default.createElement("section",{style:{...Hq.wrapper,width:o,height:h},...M},!u&&Lu.default.createElement(EI,null,O),Lu.default.createElement("div",{ref:P,style:{...Hq.fullWidth,...!u&&Hq.hide},className:A}))}var cI=yI,EJ=VJ.memo(cI);function jI(o){yJ.useEffect(o,[])}var cJ=jI;function fI(o,h,u=!0){let O=Fu.useRef(!0);Fu.useEffect(O.current||!u?()=>{O.current=!1}:o,h)}var Qv=fI;function F2(){}function c5(o,h,u,O){return pI(o,O)||aI(o,h,u,O)}function pI(o,h){return o.editor.getModel(jJ(o,h))}function aI(o,h,u,O){return o.editor.createModel(h,u,O?jJ(o,O):void 0)}function jJ(o,h){return o.Uri.parse(h)}function dI({original:o,modified:h,language:u,originalLanguage:O,modifiedLanguage:P,originalModelPath:A,modifiedModelPath:M,keepCurrentOriginalModel:W=!1,keepCurrentModifiedModel:J=!1,theme:z="light",loading:Q="Loading...",options:G={},height:K="100%",width:N="100%",className:j,wrapperProps:T={},beforeMount:y=F2,onMount:rr=F2}){let[qr,or]=P0.useState(!1),[p,s]=P0.useState(!0),lr=P0.useRef(null),m=P0.useRef(null),V=P0.useRef(null),c=P0.useRef(rr),i=P0.useRef(y),Qr=P0.useRef(!1);cJ(()=>{let D=Bh.init();return D.then((d)=>(m.current=d)&&s(!1)).catch((d)=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>lr.current?mr():D.cancel()}),Qv(()=>{if(lr.current&&m.current){let D=lr.current.getOriginalEditor(),d=c5(m.current,o||"",O||u||"text",A||"");d!==D.getModel()&&D.setModel(d)}},[A],qr),Qv(()=>{if(lr.current&&m.current){let D=lr.current.getModifiedEditor(),d=c5(m.current,h||"",P||u||"text",M||"");d!==D.getModel()&&D.setModel(d)}},[M],qr),Qv(()=>{let D=lr.current.getModifiedEditor();D.getOption(m.current.editor.EditorOption.readOnly)?D.setValue(h||""):h!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:h||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[h],qr),Qv(()=>{lr.current?.getModel()?.original.setValue(o||"")},[o],qr),Qv(()=>{let{original:D,modified:d}=lr.current.getModel();m.current.editor.setModelLanguage(D,O||u||"text"),m.current.editor.setModelLanguage(d,P||u||"text")},[u,O,P],qr),Qv(()=>{m.current?.editor.setTheme(z)},[z],qr),Qv(()=>{lr.current?.updateOptions(G)},[G],qr);let Gr=P0.useCallback(()=>{if(!m.current)return;i.current(m.current);let D=c5(m.current,o||"",O||u||"text",A||""),d=c5(m.current,h||"",P||u||"text",M||"");lr.current?.setModel({original:D,modified:d})},[u,h,P,o,O,A,M]),zr=P0.useCallback(()=>{!Qr.current&&V.current&&(lr.current=m.current.editor.createDiffEditor(V.current,{automaticLayout:!0,...G}),Gr(),m.current?.editor.setTheme(z),or(!0),Qr.current=!0)},[G,z,Gr]);P0.useEffect(()=>{qr&&c.current(lr.current,m.current)},[qr]),P0.useEffect(()=>{!p&&!qr&&zr()},[p,qr,zr]);function mr(){let D=lr.current?.getModel();W||D?.original?.dispose(),J||D?.modified?.dispose(),lr.current?.dispose()}return P0.default.createElement(EJ,{width:N,height:K,isEditorReady:qr,loading:Q,_ref:V,className:j,wrapperProps:T})}var sI=dI,ocg=tJ.memo(sI);function gB(o){let h=Iu.useRef();return Iu.useEffect(()=>{h.current=o},[o]),h.current}var vB=gB,Uu=new Map;function oB({defaultValue:o,defaultLanguage:h,defaultPath:u,value:O,language:P,path:A,theme:M="light",line:W,loading:J="Loading...",options:z={},overrideServices:Q={},saveViewState:G=!0,keepCurrentModel:K=!1,width:N="100%",height:j="100%",className:T,wrapperProps:y={},beforeMount:rr=F2,onMount:qr=F2,onChange:or,onValidate:p=F2}){let[s,lr]=ng.useState(!1),[m,V]=ng.useState(!0),c=ng.useRef(null),i=ng.useRef(null),Qr=ng.useRef(null),Gr=ng.useRef(qr),zr=ng.useRef(rr),mr=ng.useRef(),D=ng.useRef(O),d=vB(A),hr=ng.useRef(!1),vr=ng.useRef(!1);cJ(()=>{let n=Bh.init();return n.then((Pr)=>(c.current=Pr)&&V(!1)).catch((Pr)=>Pr?.type!=="cancelation"&&console.error("Monaco initialization: error:",Pr)),()=>i.current?k():n.cancel()}),Qv(()=>{let n=c5(c.current,o||O||"",h||P||"",A||u||"");n!==i.current?.getModel()&&(G&&Uu.set(d,i.current?.saveViewState()),i.current?.setModel(n),G&&i.current?.restoreViewState(Uu.get(A)))},[A],s),Qv(()=>{i.current?.updateOptions(z)},[z],s),Qv(()=>{!i.current||O===void 0||(i.current.getOption(c.current.editor.EditorOption.readOnly)?i.current.setValue(O):O!==i.current.getValue()&&(vr.current=!0,i.current.executeEdits("",[{range:i.current.getModel().getFullModelRange(),text:O,forceMoveMarkers:!0}]),i.current.pushUndoStop(),vr.current=!1))},[O],s),Qv(()=>{let n=i.current?.getModel();n&&P&&c.current?.editor.setModelLanguage(n,P)},[P],s),Qv(()=>{W!==void 0&&i.current?.revealLine(W)},[W],s),Qv(()=>{c.current?.editor.setTheme(M)},[M],s);let Rr=ng.useCallback(()=>{if(!(!Qr.current||!c.current)&&!hr.current){zr.current(c.current);let n=A||u,Pr=c5(c.current,O||o||"",h||P||"",n||"");i.current=c.current?.editor.create(Qr.current,{model:Pr,automaticLayout:!0,...z},Q),G&&i.current.restoreViewState(Uu.get(n)),c.current.editor.setTheme(M),W!==void 0&&i.current.revealLine(W),lr(!0),hr.current=!0}},[o,h,u,O,P,A,z,Q,G,M,W]);ng.useEffect(()=>{s&&Gr.current(i.current,c.current)},[s]),ng.useEffect(()=>{!m&&!s&&Rr()},[m,s,Rr]),D.current=O,ng.useEffect(()=>{s&&or&&(mr.current?.dispose(),mr.current=i.current?.onDidChangeModelContent((n)=>{vr.current||or(i.current.getValue(),n)}))},[s,or]),ng.useEffect(()=>{if(s){let n=c.current.editor.onDidChangeMarkers((Pr)=>{let Kr=i.current.getModel()?.uri;if(Kr&&Pr.find((Xr)=>Xr.path===Kr.path)){let Xr=c.current.editor.getModelMarkers({resource:Kr});p?.(Xr)}});return()=>{n?.dispose()}}return()=>{}},[s,p]);function k(){mr.current?.dispose(),K?G&&Uu.set(A,i.current.saveViewState()):i.current.getModel()?.dispose(),i.current.dispose()}return ng.default.createElement(EJ,{width:N,height:j,isEditorReady:s,loading:J,_ref:Qr,className:T,wrapperProps:y})}var lB=oB,hB=fJ.memo(lB),pJ=hB;var j5=Ar(hg(),1);var q0=Ar(rg(),1),wB={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},aJ=({entries:o,isRunning:h,onClear:u})=>{let[O,P]=j5.useState(!1),A=j5.useRef(null);j5.useEffect(()=>{if(!O&&A.current)A.current.scrollTop=A.current.scrollHeight},[o,O]);let M=()=>{let W=o.filter((J)=>J.type!=="separator").map((J)=>`[${J.timestamp}] ${J.type.toUpperCase()}: ${J.message}`).join(`
`);navigator.clipboard.writeText(W).catch(()=>{})};return q0.jsxDEV("div",{className:`ls-console${O?" ls-collapsed":""}`,children:[q0.jsxDEV("div",{className:"ls-console-header",onClick:()=>P((W)=>!W),children:[q0.jsxDEV(mo,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-console-title",children:["Console",h?" — running…":o.length>0?` (${o.length})`:""]},void 0,!0,void 0,this),q0.jsxDEV("button",{className:"ls-icon-btn",onClick:(W)=>{W.stopPropagation(),M()},title:"Copy output",disabled:o.length===0,children:q0.jsxDEV(pv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),q0.jsxDEV("button",{className:"ls-icon-btn",onClick:(W)=>{W.stopPropagation(),u()},title:"Clear console",disabled:o.length===0,children:q0.jsxDEV(F0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),O?q0.jsxDEV(Y0,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):q0.jsxDEV(Gv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&q0.jsxDEV("div",{className:"ls-console-output",ref:A,children:o.length===0?q0.jsxDEV("div",{className:"ls-console-empty",children:h?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):o.map((W,J)=>W.type==="separator"?q0.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},J,!1,void 0,this):q0.jsxDEV("div",{className:`ls-entry ${wB[W.type]??"ls-log"}`,children:[q0.jsxDEV("span",{className:"ls-entry-time",children:W.timestamp},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-entry-type",children:W.type.toUpperCase()},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-entry-msg",children:W.message},void 0,!1,void 0,this)]},J,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var V0=Ar(rg(),1),dJ=({bindings:o,activeContext:h,onAdd:u,onRemove:O})=>{let P=()=>{let{characterId:M,characterName:W}=h;if(!M)return;if(o.some((J)=>J.type==="character"&&J.characterId===M))return;u({type:"character",characterId:M,displayName:W??M})},A=()=>{let{chatId:M,characterName:W}=h;if(!M)return;if(o.some((z)=>z.type==="chat"&&z.chatId===M))return;let J=W?`${W} — ${M.slice(0,8)}`:M.slice(0,8);u({type:"chat",chatId:M,displayName:J})};return V0.jsxDEV("div",{className:"ls-bindings",children:V0.jsxDEV("div",{className:"ls-bindings-row",children:[V0.jsxDEV(_b,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),o.length===0?V0.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):o.map((M,W)=>V0.jsxDEV("span",{className:"ls-binding-chip",children:[M.type==="character"?V0.jsxDEV(t5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):V0.jsxDEV(n5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),V0.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:M.displayName},void 0,!1,void 0,this),V0.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>O(W),title:"Remove binding",children:V0.jsxDEV(n0,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},W,!0,void 0,this)),V0.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!h.characterId,title:h.characterId?"Bind to current character":"Open a chat first",children:[V0.jsxDEV(t5,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),V0.jsxDEV("button",{className:"ls-bindings-add",onClick:A,disabled:!h.chatId,title:h.chatId?"Bind to current chat":"Open a chat first",children:[V0.jsxDEV(n5,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var sJ=Ar(hg(),1);var d0=Ar(rg(),1),rQ=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Mcg=rQ.flatMap((o)=>o.events.map((h)=>h.name)),gQ=({scriptId:o,triggers:h,sendToBackend:u})=>{let[O,P]=sJ.useState(!0),A=new Set(h),M=(W)=>{let J=A.has(W)?h.filter((z)=>z!==W):[...h,W];u({type:"update_script",id:o,patch:{triggers:J}})};return d0.jsxDEV("div",{className:`ls-triggers${O?" ls-triggers-collapsed":""}`,children:[d0.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>P((W)=>!W),children:[d0.jsxDEV(G1,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),d0.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),A.size>0&&d0.jsxDEV("span",{className:"ls-triggers-count",children:A.size},void 0,!1,void 0,this),d0.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:O?d0.jsxDEV(Y0,{size:12},void 0,!1,void 0,this):d0.jsxDEV(Gv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&d0.jsxDEV("div",{className:"ls-triggers-body",children:rQ.map((W)=>d0.jsxDEV("div",{className:"ls-trigger-group",children:[d0.jsxDEV("span",{className:"ls-trigger-group-label",children:W.label},void 0,!1,void 0,this),d0.jsxDEV("div",{className:"ls-trigger-chips",children:W.events.map((J)=>d0.jsxDEV("button",{className:`ls-trigger-chip${A.has(J.name)?" ls-trigger-chip-active":""}`,onClick:()=>M(J.name),title:J.description,children:J.name},J.name,!1,void 0,this))},void 0,!1,void 0,this)]},W.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var vQ=`
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
  createdAt: number; updatedAt: number;
}
interface CharacterCreateInput {
  name: string; description?: string; personality?: string; scenario?: string;
  firstMessage?: string; mesExample?: string; creatorNotes?: string;
  systemPrompt?: string; postHistoryInstructions?: string;
  tags?: string[]; alternateGreetings?: string[]; creator?: string;
  /** Replace the character's world book attachments. Pass [] to detach all. Omit to leave unchanged. */
  worldBookIds?: string[];
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
`;var wQ=Ar(hg(),1);function oQ(o){return o.split("`").map((u,O)=>{if(O%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function bB(o){return o.split("`").map((O,P)=>{if(P%2===1)return O;return O.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Ul(o,h){let u=`| ${o.join(" | ")} |`,O=`| ${o.map(()=>"---").join(" | ")} |`,P=h.map((A)=>`| ${A.map(bB).join(" | ")} |`);return[u,O,...P].join(`
`)}function uB(o){return o.optional&&!o.field.endsWith("?")?`${o.field}?`:o.field}function OB(o){if(o==="silent")return"*silent*";if(o==="boolean")return'`"true" / "false"`';return"`string`"}function HB(o){return o.aliases==="—"?"—":`\`${o.aliases}\``}function PB(o){let h=o.perms.length===0&&!o.note?"*none*":o.perms.map((u)=>`\`${u}\``).join(", ");return o.note?`${h}${o.perms.length?" ":""}${o.note}`:h}function qB(){return`## Lumiverse Events

${Ul(["Event","Group","Payload shape"],Pq.map((h)=>[`\`${h.name}\``,h.group,`\`${h.payload}\``]))}`}function AB(){return`## Permission Matrix

${qq.map((h)=>{let u=Ul(["Method","Required permissions"],h.rows.map((O)=>[`\`${O.method}\``,PB(O)]));return`### ${h.group}

${u}`}).join(`

`)}`}function MB(){let o=Ul(["Event","Payload fields","Emitted by"],Aq.map((u)=>[`\`${u.name}\``,`\`${u.payload}\``,u.emittedBy])),h="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${o}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function WB(){let o=Mq.map((u)=>{let O=Ul(["Macro","Aliases","Returns","Description"],u.rows.map((A)=>[`\`${A.macro}\``,HB(A),OB(A.returns),A.desc])),P=[`### ${u.label}`];if(u.description)P.push(`*${u.description}*`);return P.push(O),P.join(`

`)}),h='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${o.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function RB(){return`## Key Types

${Wq.map((o)=>lQ(o)).join(`

`)}`}function lQ(o,h="###"){let u=oQ(o.name),O=o.note?`*${oQ(o.note)}*

`:"",P=Ul(["Field","Type","Description"],o.fields.map((A)=>[`\`${uB(A)}\``,`\`${A.type}\``,A.desc]));return`${h} ${u}

${O}${P}`}function GB(){return`## API Functions

${Rq.map((h)=>{let u=Ul(["Method","Arguments","Description"],h.rows.map((O)=>[`\`${O.name}\``,O.args,O.desc]));return`### ${h.group}

${u}`}).join(`

`)}`}function XB(){let h=Ul(["Method","Arguments","Description"],Gq.map((P)=>[`\`${P.name}\``,P.args,P.desc])),u=Ul(["Method","Arguments","Description"],Xq.map((P)=>[`\`${P.name}\``,P.args,P.desc])),O=Yq.map((P)=>lQ(P,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",h,"","### ls:council-prompt","",u,"","### Built-in types","",O].join(`
`)}function YB(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function JB(){let h=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,u=[qB(),AB(),MB(),WB(),RB(),GB(),XB(),YB()];return`${h}

---

${u.join(`

---

`)}
`}function hQ(){let o=JB(),u=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,O=new Blob([o],{type:"text/markdown;charset=utf-8"}),P=URL.createObjectURL(O),A=document.createElement("a");A.href=P,A.download=u,A.click(),URL.revokeObjectURL(P)}var L=Ar(rg(),1),Ll=({icon:o,title:h,defaultOpen:u=!1,children:O})=>{let[P,A]=wQ.useState(u);return L.jsxDEV("div",{className:"ls-ref-section",children:[L.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>A((M)=>!M),children:[L.jsxDEV("span",{className:"ls-ref-section-title",children:[o,h]},void 0,!0,void 0,this),P?L.jsxDEV(Y0,{size:12},void 0,!1,void 0,this):L.jsxDEV(W1,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),P&&L.jsxDEV("div",{className:"ls-ref-section-body",children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Wg=({children:o})=>L.jsxDEV("code",{className:"ls-ref-code",children:o},void 0,!1,void 0,this),QB=({children:o})=>L.jsxDEV("span",{className:"ls-ref-perm",children:o},void 0,!1,void 0,this),zB=()=>L.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),KB=()=>L.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),f5=({label:o,cols:h})=>L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:h,className:"ls-ref-group-header",children:o},void 0,!1,void 0,this)},void 0,!1,void 0,this),Pq=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],eB=()=>{let o="";return L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Pq.map((h)=>{let u=h.group!==o?h.group:"";return o=h.group,L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:u},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qq=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],$B=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:qq.map((o)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:o.group,cols:2},`hdr-${o.group}`,!1,void 0,this),o.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:[h.perms.length===0&&!h.note?L.jsxDEV(zB,{},void 0,!1,void 0,this):null,h.perms.map((u)=>L.jsxDEV(QB,{children:u},u,!1,void 0,this)),h.note?L.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:h.perms.length?4:0},children:h.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},h.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Aq=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],UB=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Aq.map((o)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:o.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},o.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mq=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],LB=({type:o})=>{if(o==="silent")return L.jsxDEV(KB,{},void 0,!1,void 0,this);if(o==="boolean")return L.jsxDEV(Wg,{children:'"true" / "false"'},void 0,!1,void 0,this);return L.jsxDEV(Wg,{children:"string"},void 0,!1,void 0,this)},FB=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Mq.map((o)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:o.description?L.jsxDEV(L.Fragment,{children:[o.label," — ",L.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:o.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):o.label,cols:4},`hdr-${o.label}`,!1,void 0,this),o.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:h.aliases==="—"?L.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):L.jsxDEV(Wg,{children:h.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:L.jsxDEV(LB,{type:h.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wq=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],IB=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Wq.map((o)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[o.name,o.note&&L.jsxDEV("div",{className:"ls-ref-type-note",children:o.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${o.name}`,!1,void 0,this),o.fields.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${o.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Rq=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],BB=()=>L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Rq.map((o)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV(f5,{label:o.group,cols:3},`hdr-${o.group}`,!1,void 0,this),o.rows.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${o.group}-${h.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gq=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],Xq=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],NB=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],Yq=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],ZB=()=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",L.jsxDEV(Wg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",L.jsxDEV(Wg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",L.jsxDEV(Wg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",L.jsxDEV(Wg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",L.jsxDEV(Wg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",L.jsxDEV(Wg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),L.jsxDEV("table",{className:"ls-ref-table",children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:[L.jsxDEV(f5,{label:"ls:components",cols:3},void 0,!1,void 0,this),Gq.map((o)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:o.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},o.name,!0,void 0,this)),L.jsxDEV(f5,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),Xq.map((o)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:o.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},o.name,!0,void 0,this)),L.jsxDEV(f5,{label:"ls:icons",cols:3},void 0,!1,void 0,this),NB.map((o)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:o.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:o.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},o.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[L.jsxDEV("thead",{children:L.jsxDEV("tr",{children:[L.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),L.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("tbody",{children:Yq.map((o)=>L.jsxDEV(L.Fragment,{children:[L.jsxDEV("tr",{children:L.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[o.name,o.note&&L.jsxDEV("div",{className:"ls-ref-type-note",children:o.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${o.name}`,!1,void 0,this),o.fields.map((h)=>L.jsxDEV("tr",{children:[L.jsxDEV("td",{children:L.jsxDEV(Wg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV("td",{children:L.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${o.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),bQ=()=>L.jsxDEV("div",{className:"ls-ref",children:[L.jsxDEV("div",{className:"ls-ref-toolbar",children:L.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>hQ(),title:"Download the current reference as a Markdown file",children:[L.jsxDEV(Kh,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(G1,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:L.jsxDEV(eB,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(cb,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:L.jsxDEV($B,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(db,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[L.jsxDEV(UB,{},void 0,!1,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",L.jsxDEV(Wg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(Vb,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[L.jsxDEV(FB,{},void 0,!1,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",L.jsxDEV(Wg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",L.jsxDEV(Wg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(To,{size:11},void 0,!1,void 0,this),title:"Key Types",children:L.jsxDEV(IB,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(yb,{size:11},void 0,!1,void 0,this),title:"API Functions",children:L.jsxDEV(BB,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(Cb,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:L.jsxDEV(ZB,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),L.jsxDEV(Ll,{icon:L.jsxDEV(fb,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[L.jsxDEV("p",{className:"ls-ref-muted",children:[L.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",L.jsxDEV(Wg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",L.jsxDEV(Wg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",L.jsxDEV(Wg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",L.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),L.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[L.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",L.jsxDEV(Wg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",L.jsxDEV(Wg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",L.jsxDEV(Wg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",L.jsxDEV(Wg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Nr=Ar(rg(),1),uQ=!1,OQ=({script:o,allScripts:h,activeContext:u,isRunning:O,consoleEntries:P,editorFontSize:A,autosaveDebounceMs:M,onClearConsole:W,sendToBackend:J})=>{let[z,Q]=Q0.useState(o.code),[G,K]=Q0.useState(!1),[N,j]=Q0.useState(!1),[T,y]=Q0.useState(o.name),[rr,qr]=Q0.useState("code"),[or,p]=Q0.useState(!1),[s,lr]=Q0.useState(!1),m=Q0.useRef(null),V=Q0.useRef(null);Q0.useEffect(()=>{Q(o.code),K(!1),y(o.name),lr(!1)},[o.id,o.code,o.name]),Q0.useEffect(()=>{J({type:"get_active_context"})},[o.id,J]),Q0.useEffect(()=>{let vr=setInterval(()=>{J({type:"get_active_context"})},2000);return()=>clearInterval(vr)},[J]);let c=Q0.useCallback((vr)=>{J({type:"update_script",id:o.id,patch:{code:vr}}),K(!1)},[o.id,J]),i=(vr)=>{if(vr===void 0)return;if(Q(vr),K(vr!==o.code),m.current)clearTimeout(m.current);m.current=setTimeout(()=>c(vr),M)},Qr=(vr,Rr)=>{if(V.current=vr,!uQ){uQ=!0;let k=Rr.languages.typescript.javascriptDefaults;k.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),k.setCompilerOptions({target:Rr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),k.addExtraLib(vQ,"ts:lumiverse/lumiscript-api.d.ts")}vr.addCommand(Rr.KeyMod.CtrlCmd|Rr.KeyCode.KeyS,()=>{if(m.current)clearTimeout(m.current);c(vr.getValue())}),vr.getModel()?.setEOL(Rr.editor.EndOfLineSequence.LF)},Gr=()=>{if(O)return;if(m.current)clearTimeout(m.current),m.current=null;if(G)c(V.current?.getValue()??z);J({type:"run_script",id:o.id})},zr=()=>{let vr=T.trim();if(vr&&vr!==o.name)J({type:"update_script",id:o.id,patch:{name:vr}});j(!1)},mr=(vr)=>{let Rr=o.bindings??[];J({type:"update_script",id:o.id,patch:{bindings:[...Rr,vr]}})},D=(vr)=>{J({type:"update_script",id:o.id,patch:{bindings:(o.bindings??[]).filter((Rr,k)=>k!==vr)}})},d=()=>{if(o.allowDangerous)J({type:"update_script",id:o.id,patch:{allowDangerous:!1}});else if(s)lr(!1),J({type:"update_script",id:o.id,patch:{allowDangerous:!0}});else lr(!0)},hr=(vr)=>new Date(vr).toLocaleString();return Nr.jsxDEV("div",{className:"ls-editor-root",children:[Nr.jsxDEV("div",{className:"ls-editor-topbar",children:[N?Nr.jsxDEV("input",{className:"ls-editor-name-input",value:T,autoFocus:!0,onChange:(vr)=>y(vr.target.value),onBlur:zr,onKeyDown:(vr)=>{if(vr.key==="Enter")zr();if(vr.key==="Escape")y(o.name),j(!1)}},void 0,!1,void 0,this):Nr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>j(!0),title:"Click to rename",style:{cursor:"text"},children:o.name},void 0,!1,void 0,this),G&&Nr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>qr("code"),title:"Code editor",children:[Nr.jsxDEV(X0,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Nr.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>qr("docs"),title:"API reference",children:[Nr.jsxDEV(mb,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),o.type!=="library"&&Nr.jsxDEV("button",{className:`ls-btn${O?"":" ls-accent"}`,onClick:Gr,disabled:O,children:[O?Nr.jsxDEV(Xl,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Nr.jsxDEV(pb,{size:15},void 0,!1,void 0,this),O?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Nr.jsxDEV("div",{className:"ls-editor-monaco",children:Nr.jsxDEV(pJ,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:z,onChange:i,onMount:Qr,options:{minimap:{enabled:!1},fontSize:A,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},o.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Nr.jsxDEV("div",{className:"ls-editor-docs",children:Nr.jsxDEV(bQ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Nr.jsxDEV(aJ,{entries:P,isRunning:O,onClear:W},void 0,!1,void 0,this),o.type==="trigger"&&Nr.jsxDEV(gQ,{scriptId:o.id,triggers:o.triggers??[],sendToBackend:J},void 0,!1,void 0,this),o.type==="trigger"&&Nr.jsxDEV(dJ,{bindings:o.bindings??[],activeContext:u,onAdd:mr,onRemove:D},void 0,!1,void 0,this),s&&Nr.jsxDEV("div",{className:"ls-danger-confirm",children:[Nr.jsxDEV(D5,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:d,children:"Enable"},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>lr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-meta-footer",children:[Nr.jsxDEV("span",{className:"ls-meta-item",children:Nr.jsxDEV("button",{className:"ls-danger-btn",onClick:d,title:"Toggle dangerous mode",children:[o.allowDangerous?Nr.jsxDEV(D5,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Nr.jsxDEV(r2,{size:11},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:o.allowDangerous?"ls-dangerous":"",children:o.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Nr.jsxDEV(eh,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("select",{className:"ls-folder-select",value:o.folder??"",onChange:(vr)=>{let Rr=vr.target.value;if(Rr==="__new__"){let k=window.prompt("New folder name:");if(k?.trim())J({type:"update_script",id:o.id,patch:{folder:k.trim()}})}else J({type:"update_script",id:o.id,patch:{folder:Rr}})},children:[Nr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(h.map((vr)=>vr.folder).filter((vr)=>!!vr))].sort().map((vr)=>Nr.jsxDEV("option",{value:vr,children:vr},vr,!1,void 0,this)),Nr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-meta-item",children:[Nr.jsxDEV(Db,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("span",{children:["Updated ",hr(o.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-meta-item",children:[Nr.jsxDEV(Sb,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("span",{children:["Created ",hr(o.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:o.id,onClick:()=>{navigator.clipboard.writeText(o.id).catch(()=>{}),p(!0),setTimeout(()=>p(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[or?Nr.jsxDEV(ib,{size:10},void 0,!1,void 0,this):Nr.jsxDEV(pv,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("span",{children:["ID ",o.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var I0=Ar(rg(),1),PQ=({scripts:o,initialScriptId:h,activeContext:u,execInfo:O,activeRunScriptId:P,isRunning:A,consoleHistory:M,editorFontSize:W,autosaveDebounceMs:J,onClearConsole:z,onClose:Q,sendToBackend:G})=>{let[K,N]=I2.useState(h),j=o.find((or)=>or.id===K)??null;I2.useEffect(()=>{N(h)},[h]),I2.useEffect(()=>{let or=(p)=>{if(p.key==="Escape")Q()};return document.addEventListener("keydown",or),()=>document.removeEventListener("keydown",or)},[Q]);let T=j?M[j.id]??[]:[],y=A&&j?.id===P;return HQ.createPortal(I0.jsxDEV("div",{className:"ls-modal-overlay",onClick:(or)=>{if(or.target===or.currentTarget)Q()},children:I0.jsxDEV("div",{className:"ls-modal-card",onClick:(or)=>or.stopPropagation(),children:[I0.jsxDEV("div",{className:"ls-modal-header",children:[I0.jsxDEV("span",{className:"ls-modal-title",children:[I0.jsxDEV(mo,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),I0.jsxDEV("button",{className:"ls-modal-close",onClick:Q,title:"Close (Esc)",children:I0.jsxDEV(n0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),I0.jsxDEV("div",{className:"ls-modal-body",children:[I0.jsxDEV("div",{className:"ls-modal-sidebar",children:I0.jsxDEV(Qu,{scripts:o,selectedId:K,execInfo:O,onSelect:N,onEdit:N,sendToBackend:G},void 0,!1,void 0,this)},void 0,!1,void 0,this),I0.jsxDEV("div",{className:"ls-modal-main",children:j?I0.jsxDEV(OQ,{script:j,allScripts:o,activeContext:u,isRunning:y,consoleEntries:T,editorFontSize:W,autosaveDebounceMs:J,onClearConsole:()=>{if(j)z(j.id)},sendToBackend:G},void 0,!1,void 0,this):I0.jsxDEV("div",{className:"ls-placeholder",children:[I0.jsxDEV(mo,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),I0.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var Bu=Ar(rg(),1),qQ=({scripts:o,activeContext:h,execInfo:u,activeRunScriptId:O,isRunning:P,consoleHistory:A,editorFontSize:M,autosaveDebounceMs:W,onClearConsole:J,onScriptOpened:z,sendToBackend:Q})=>{let[G,K]=Nu.useState(null);return Nu.useEffect(()=>{if(G&&z)z(G)},[G,z]),Bu.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[Bu.jsxDEV(Qu,{scripts:o,selectedId:G,execInfo:u,onSelect:()=>{},onEdit:K,sendToBackend:Q},void 0,!1,void 0,this),G!==null&&Bu.jsxDEV(PQ,{scripts:o,initialScriptId:G,activeContext:h,execInfo:u,activeRunScriptId:O,isRunning:P,consoleHistory:A,editorFontSize:M,autosaveDebounceMs:W,onClearConsole:J,onClose:()=>K(null),sendToBackend:Q},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var AQ=Ar(hg(),1);var yg=Ar(rg(),1),xB=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function TB(o){if(o===void 0)return"undefined";if(o===null)return"null";if(typeof o==="string")return o.length>80?o.slice(0,77)+"…":o;try{let h=JSON.stringify(o);return h.length>80?h.slice(0,77)+"…":h}catch{return String(o)}}var MQ=({variables:o,sendToBackend:h})=>{let[u,O]=AQ.useState(new Set(["local","global","chat","character"])),P=(M)=>{O((W)=>{let J=new Set(W);if(J.has(M))J.delete(M);else J.add(M);return J})},A=o?Object.values(o).reduce((M,W)=>M+Object.keys(W).length,0):0;return yg.jsxDEV("div",{className:"ls-status-section",children:[yg.jsxDEV("div",{className:"ls-inject-header",children:[yg.jsxDEV(av,{size:10},void 0,!1,void 0,this),"Variables",A>0&&yg.jsxDEV("span",{className:"ls-inject-count",children:A},void 0,!1,void 0,this),yg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>h({type:"get_variables"}),children:yg.jsxDEV(R1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yg.jsxDEV("div",{className:"ls-status-section-body",children:!o?yg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):A===0?yg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):xB.map(({key:M,label:W,hint:J})=>{let z=o[M],Q=Object.keys(z),G=u.has(M);if(Q.length===0)return null;return yg.jsxDEV("div",{className:"ls-vars-scope",children:[yg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>P(M),children:[G?yg.jsxDEV(Y0,{size:10},void 0,!1,void 0,this):yg.jsxDEV(Gv,{size:10},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-name",children:W},void 0,!1,void 0,this),J&&yg.jsxDEV("span",{className:"ls-vars-scope-hint",children:J},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-count",children:Q.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G&&yg.jsxDEV("div",{className:"ls-vars-scope-body",children:Q.sort().map((K)=>yg.jsxDEV("div",{className:"ls-vars-entry",children:[yg.jsxDEV("span",{className:"ls-vars-key",children:K},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-value",title:String(z[K]),children:TB(z[K])},void 0,!1,void 0,this)]},K,!0,void 0,this))},void 0,!1,void 0,this)]},M,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Fl=Ar(hg(),1);function Zu(o){if(!Number.isFinite(o)||o<=0)return"0 B";let h=["B","KB","MB","GB"],u=Math.min(h.length-1,Math.floor(Math.log(o)/Math.log(1024))),O=o/Math.pow(1024,u);return`${u===0?O.toFixed(0):O.toFixed(1)} ${h[u]}`}function B2(o){let h;if(typeof o==="number")h=o;else{if(!o)return"—";h=new Date(o).getTime()}if(!Number.isFinite(h)||h<=0)return"—";let u=Date.now()-h;if(u<60000)return"just now";if(u<3600000)return`${Math.floor(u/60000)}m ago`;if(u<86400000)return`${Math.floor(u/3600000)}h ago`;if(u<2592000000)return`${Math.floor(u/86400000)}d ago`;return new Date(h).toISOString().slice(0,10)}var Jq={script:"script",character:"char",chat:"chat"},WQ={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function xu(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(u,O,P,A,M,W,J)=>{if(O)return`<span class="ls-json-key">${O}</span>${P}`;if(A)return`<span class="ls-json-string">${A}</span>`;if(M)return`<span class="ls-json-bool">${M}</span>`;if(W)return`<span class="ls-json-null">${W}</span>`;if(J)return`<span class="ls-json-number">${J}</span>`;return u})}async function Qq(o){try{return await navigator.clipboard.writeText(o),!0}catch{return!1}}var Zr=Ar(rg(),1),p5=["script","character","chat"],CB=10485760,mB=41943040,SB=52428800;function iB(o){if(o>=mB)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(o>=CB)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function kB(o){if(o.scope==="character"){if(o.characterName)return`character: ${o.characterName} (${o.characterId})
${o.path}`;if(o.characterId)return`character: ${o.characterId} (not currently loaded)
${o.path}`}if(o.scope==="chat"){if(o.chatName)return`chat: ${o.chatName} (${o.chatId})
${o.path}`;if(o.chatId)return`chat: ${o.chatId} (not currently loaded)
${o.path}`}return o.path}function nB(o,h,u,O){switch(u){case"name":return o.name.localeCompare(h.name,void 0,{sensitivity:"base"});case"scope":return o.scope.localeCompare(h.scope);case"owner":{let P=O.get(o.scriptId)??o.scriptId,A=O.get(h.scriptId)??h.scriptId;return P.localeCompare(A,void 0,{sensitivity:"base"})}case"size":return o.sizeBytes-h.sizeBytes;case"updated":return new Date(o.modifiedAt).getTime()-new Date(h.modifiedAt).getTime()}}var RQ=({collections:o,scripts:h,sendToBackend:u,onInspect:O,onDrop:P})=>{let[A,M]=Fl.useState(""),[W,J]=Fl.useState(()=>new Set(p5)),[z,Q]=Fl.useState(null),[G,K]=Fl.useState("asc"),N=Fl.useMemo(()=>{let m=new Map;for(let V of h)m.set(V.id,V.name);return m},[h]),j=Fl.useMemo(()=>{if(!o)return null;let m=o;if(W.size<p5.length)m=m.filter((c)=>W.has(c.scope));let V=A.trim().toLowerCase();if(V)m=m.filter((c)=>c.name.toLowerCase().includes(V));if(z){let c=G==="asc"?1:-1;m=m.slice().sort((i,Qr)=>nB(i,Qr,z,N)*c)}return m},[o,W,A,z,G,N]),T=()=>u({type:"list_collections"}),y=(m)=>{J((V)=>{let c=new Set(V);if(c.has(m))c.delete(m);else c.add(m);if(c.size===0)return new Set(p5);return c})},rr=(m)=>{if(z!==m){Q(m),K("asc");return}if(G==="asc"){K("desc");return}Q(null)},qr=()=>{M(""),J(new Set(p5))},or=o?.length??0,p=j?.length??0,s=A.trim().length>0||W.size<p5.length,lr=(m)=>{if(z!==m)return Zr.jsxDEV(nb,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return G==="asc"?Zr.jsxDEV(Gv,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Zr.jsxDEV(Y0,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Zr.jsxDEV("div",{className:"ls-status-section",children:[Zr.jsxDEV("div",{className:"ls-inject-header",children:[Zr.jsxDEV(av,{size:10},void 0,!1,void 0,this),"Collections",or>0&&Zr.jsxDEV("span",{className:"ls-inject-count",children:or},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:T,children:Zr.jsxDEV(R1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-status-section-body",children:o===null?Zr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):o.length===0?Zr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Zr.jsxDEV(Zr.Fragment,{children:[Zr.jsxDEV("div",{className:"ls-collections-filter",children:[Zr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Zr.jsxDEV(Jl,{size:10},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:A,onChange:(m)=>M(m.target.value)},void 0,!1,void 0,this),A&&Zr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>M(""),children:Zr.jsxDEV(n0,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-collections-filter-chips",children:p5.map((m)=>{let V=W.has(m);return Zr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":m,"aria-pressed":V,title:V?`Hide ${m}-scoped`:`Show ${m}-scoped`,onClick:()=>y(m),children:Jq[m]},m,!1,void 0,this)})},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-filter-count",children:s?`${p}/${or}`:or},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p===0?Zr.jsxDEV("div",{className:"ls-section-empty",children:[Zr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Zr.jsxDEV("button",{onClick:qr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Zr.jsxDEV("div",{className:"ls-collections-list",children:[Zr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",lr("name")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",lr("scope")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",lr("owner")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",lr("size")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",lr("updated")]},void 0,!0,void 0,this),Zr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j.map((m)=>{let V=N.get(m.scriptId)??`(${m.scriptId.slice(0,8)}…)`,c=!N.has(m.scriptId),i=c?`scriptId: ${m.scriptId} (not currently loaded)`:`${V} (${m.scriptId})`;return Zr.jsxDEV("div",{className:"ls-collections-row",children:[Zr.jsxDEV("span",{className:"ls-collections-name",title:m.name,children:m.name},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-scope","data-scope":m.scope,title:kB(m),children:Jq[m.scope]},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:`ls-collections-owner${c?" ls-collections-owner-unknown":""}`,title:i,children:V},void 0,!1,void 0,this),(()=>{let Qr=iB(m.sizeBytes),Gr=(m.sizeBytes/SB*100).toFixed(m.sizeBytes<1048576?2:1),zr=`${m.sizeBytes.toLocaleString()} bytes (${Gr}% of 50 MB cap)`;return Zr.jsxDEV("span",{className:"ls-collections-size","data-budget":Qr.tier,title:zr,style:Qr.tier==="normal"?void 0:{color:Qr.color,fontWeight:600},children:Zu(m.sizeBytes)},void 0,!1,void 0,this)})(),Zr.jsxDEV("span",{className:"ls-collections-updated",title:m.modifiedAt,children:B2(m.modifiedAt)},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-collections-actions",children:[Zr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>O(m.path),children:Zr.jsxDEV(tb,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>P(m),children:Zr.jsxDEV(F0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},m.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Dg=Ar(hg(),1),YQ=Ar(S5(),1);var vo=Ar(hg(),1),GQ=Ar(S5(),1);var Kg=Ar(rg(),1);function DB(o){let{id:h,createdAt:u,updatedAt:O,...P}=o;try{return JSON.stringify(P,null,2)}catch{return"{}"}}var XQ=({path:o,record:h,onClose:u,sendToBackend:O})=>{let[P,A]=vo.useState(()=>DB(h)),[M,W]=vo.useState(null),J=vo.useRef(null),z=vo.useRef(null),Q=vo.useRef(null);vo.useEffect(()=>{let T=(y)=>{if(y.key==="Escape")u()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[u]),vo.useEffect(()=>{let T=(y)=>{if(y.key!=="Tab")return;let rr=J.current;if(!rr)return;let qr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(qr.length===0)return;let or=qr[0],p=qr[qr.length-1],s=document.activeElement,lr=s!==null&&rr.contains(s);if(y.shiftKey){if(!lr||s===or)y.preventDefault(),p.focus()}else if(!lr||s===p)y.preventDefault(),or.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[]),vo.useEffect(()=>{let T=setTimeout(()=>z.current?.focus(),0);return()=>clearTimeout(T)},[]);let G=()=>{let T;try{T=JSON.parse(P)}catch(y){let rr=y instanceof Error?y.message:String(y);W(`JSON parse error: ${rr}`);return}if(T===null||typeof T!=="object"||Array.isArray(T)){W("Record must be a JSON object — not an array, null, or primitive.");return}W(null),O({type:"update_record",path:o,recordId:String(h.id),patch:T}),u()},K=(T)=>{if((T.metaKey||T.ctrlKey)&&T.key==="Enter")T.preventDefault(),G()},N=String(h.id),j=Kg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)u()},children:Kg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:J,onClick:(T)=>T.stopPropagation(),children:[Kg.jsxDEV("div",{className:"ls-modal-header",children:[Kg.jsxDEV("span",{className:"ls-modal-title",children:[Kg.jsxDEV(dv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Kg.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:Kg.jsxDEV(n0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-edit-body",children:[Kg.jsxDEV("div",{className:"ls-edit-meta",children:[Kg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Kg.jsxDEV("code",{className:"ls-edit-meta-value",title:N,children:N},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Kg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Kg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Kg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Kg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Kg.jsxDEV("pre",{ref:Q,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:xu(P)+`
`}},void 0,!1,void 0,this),Kg.jsxDEV("textarea",{ref:z,className:"ls-edit-textarea",value:P,onChange:(T)=>{if(A(T.target.value),M)W(null)},onKeyDown:K,onScroll:(T)=>{let y=Q.current;if(!y)return;y.scrollTop=T.currentTarget.scrollTop,y.scrollLeft=T.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M&&Kg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Kg.jsxDEV(Sv,{size:12},void 0,!1,void 0,this),Kg.jsxDEV("span",{children:M},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-drop-actions",children:[Kg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,children:"Cancel"},void 0,!1,void 0,this),Kg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:G,title:"Save (Ctrl/Cmd+Enter)",children:[Kg.jsxDEV(sb,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return GQ.createPortal(j,document.body)};var f=Ar(rg(),1),Nh=50,tB=150,VB=1200,_B=4000,JQ=({path:o,summary:h,records:u,total:O,error:P,stats:A,refreshToken:M,onClose:W,sendToBackend:J})=>{let[z,Q]=Dg.useState(""),[G,K]=Dg.useState(""),[N,j]=Dg.useState(0),[T,y]=Dg.useState("shallow"),[rr,qr]=Dg.useState(0),[or,p]=Dg.useState(()=>new Set),[s,lr]=Dg.useState(null),[m,V]=Dg.useState(null),[c,i]=Dg.useState("records");Dg.useEffect(()=>{let n=setTimeout(()=>K(z),tB);return()=>clearTimeout(n)},[z]),Dg.useEffect(()=>{j(0)},[G,T]),Dg.useEffect(()=>{let n=G.trim();if(T==="jsonquery")J({type:"inspect_collection",path:o,jsonqueryFilter:n||void 0,limit:Nh,offset:N*Nh});else J({type:"inspect_collection",path:o,textFilter:n||void 0,deepFilter:T==="deep"||void 0,limit:Nh,offset:N*Nh})},[o,G,T,N,M,rr,J]),Dg.useEffect(()=>{let n=(Pr)=>{if(Pr.key==="Escape")W()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[W]);let Qr=Math.max(1,Math.ceil(O/Nh)),Gr=O===0?0:N*Nh+1,zr=Math.min(O,(N+1)*Nh),mr=Dg.useMemo(()=>{let n=o.match(/\/([^/]+)\.json$/);return n?n[1]:o},[o]),D=Dg.useMemo(()=>{if(!h)return null;if(h.scope==="character"&&h.characterName)return`character: ${h.characterName}`;if(h.scope==="chat"&&h.chatName)return`chat: ${h.chatName}`;return null},[h]),d=(n)=>{p((Pr)=>{let Kr=new Set(Pr);return Kr.add(n),Kr}),setTimeout(()=>{p((Pr)=>{if(!Pr.has(n))return Pr;let Kr=new Set(Pr);return Kr.delete(n),Kr})},VB)},hr=async(n)=>{if(await Qq(String(n.id)))d(`${n.id}:id`)},vr=async(n)=>{if(await Qq(JSON.stringify(n,null,2)))d(`${n.id}:json`)};Dg.useEffect(()=>{if(m===null)return;let n=setTimeout(()=>V(null),_B);return()=>clearTimeout(n)},[m]);let Rr=(n)=>{let Pr=String(n.id);if(m===Pr)J({type:"delete_record",path:o,recordId:Pr}),V(null);else V(Pr)};Dg.useEffect(()=>{V(null),lr(null)},[N,G,T,o]),Dg.useEffect(()=>{i("records")},[o]),Dg.useEffect(()=>{if(c!=="stats")return;J({type:"analyze_collection",path:o})},[c,o,M,rr,J]);let k=f.jsxDEV("div",{className:"ls-modal-overlay",onClick:(n)=>{if(n.target===n.currentTarget)W()},children:f.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(n)=>n.stopPropagation(),children:[f.jsxDEV("div",{className:"ls-modal-header",children:[f.jsxDEV("span",{className:"ls-modal-title",children:[f.jsxDEV(av,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-name",children:mr},void 0,!1,void 0,this),D&&f.jsxDEV("span",{className:"ls-inspect-title-path",title:o,style:{color:"var(--lumiverse-accent)"},children:D},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-title-path",title:o,children:o},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:()=>qr((n)=>n+1),title:"Refresh records",style:{marginRight:4},children:f.jsxDEV(R1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-modal-close",onClick:W,title:"Close (Esc)",children:f.jsxDEV(n0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="records",onClick:()=>i("records"),children:[f.jsxDEV(Eb,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),f.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":c==="stats",onClick:()=>i("stats"),children:[f.jsxDEV(Rl,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c==="records"&&f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{className:"ls-inspect-toolbar",children:[f.jsxDEV("div",{className:"ls-inspect-search",children:[f.jsxDEV(Jl,{size:12},void 0,!1,void 0,this),f.jsxDEV("input",{type:T==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:T==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":T==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:z,onChange:(n)=>Q(n.target.value),autoFocus:!0,spellCheck:T!=="jsonquery",autoCorrect:T==="jsonquery"?"off":"on",autoCapitalize:T==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),f.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>y("shallow"),children:f.jsxDEV(Jl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>y("deep"),children:f.jsxDEV(Gl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":T==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>y("jsonquery"),children:f.jsxDEV(X0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-pager",children:[f.jsxDEV("span",{className:"ls-inspect-pager-status",children:O===0?"No matching records":f.jsxDEV(f.Fragment,{children:["Showing ",f.jsxDEV("strong",{children:Gr},void 0,!1,void 0,this),"–",f.jsxDEV("strong",{children:zr},void 0,!1,void 0,this)," of ",f.jsxDEV("strong",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((n)=>Math.max(0,n-1)),disabled:N===0,title:"Previous page",children:f.jsxDEV(kb,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>j((n)=>Math.min(Qr-1,n+1)),disabled:N>=Qr-1,title:"Next page",children:f.jsxDEV(W1,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),P&&f.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[f.jsxDEV(Sv,{size:12},void 0,!1,void 0,this),f.jsxDEV("span",{children:P},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-body",children:u===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):u.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:O===0&&G?f.jsxDEV(f.Fragment,{children:[f.jsxDEV("div",{children:["No records match “",G,"”"]},void 0,!0,void 0,this),f.jsxDEV("button",{onClick:()=>Q(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):O===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):f.jsxDEV("div",{className:"ls-inspect-records",children:u.map((n)=>{let Pr=String(n.id),Kr=or.has(`${n.id}:id`),Xr=or.has(`${n.id}:json`);return f.jsxDEV("div",{className:"ls-inspect-record",children:[f.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${Pr}`,children:[f.jsxDEV("code",{children:[Pr.slice(0,12),"…"]},void 0,!0,void 0,this),f.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",f.jsxDEV("time",{title:new Date(n.createdAt).toISOString(),children:B2(n.createdAt)},void 0,!1,void 0,this),n.updatedAt!==n.createdAt&&f.jsxDEV(f.Fragment,{children:[" · ","updated ",f.jsxDEV("time",{title:new Date(n.updatedAt).toISOString(),children:B2(n.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Kr?"Copied!":"Copy ID",onClick:()=>hr(n),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Kr?"var(--lumiverse-accent)":"inherit",opacity:Kr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(pv,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:Xr?"Copied!":"Copy full JSON",onClick:()=>vr(n),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Xr?"var(--lumiverse-accent)":"inherit",opacity:Xr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(To,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>lr(n),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[f.jsxDEV(dv,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),f.jsxDEV("button",{className:"ls-inspect-record-action"+(m===Pr?" ls-inspect-record-action-confirm":""),title:m===Pr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Rr(n),style:{background:m===Pr?"rgba(246, 130, 130, 0.18)":"transparent",border:m===Pr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:m===Pr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:m===Pr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:m===Pr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:m===Pr?600:400,borderRadius:3},children:[f.jsxDEV(F0,{size:11},void 0,!1,void 0,this),m===Pr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:xu(EB(n))}},void 0,!1,void 0,this)]},Pr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c==="stats"&&f.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:A===null?f.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):A.fields.length===0?f.jsxDEV("div",{className:"ls-inspect-empty",children:A.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):f.jsxDEV(jB,{stats:A},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return f.jsxDEV(f.Fragment,{children:[YQ.createPortal(k,document.body),s&&f.jsxDEV(XQ,{path:o,record:s,onClose:()=>lr(null),sendToBackend:J},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function EB(o){let{id:h,createdAt:u,updatedAt:O,...P}=o;try{return JSON.stringify(P,null,2)}catch{return String(o)}}var yB={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function cB(o){if(typeof o==="string")return`"${o.length>32?o.slice(0,30)+"…":o}"`;if(o===null)return"null";return String(o)}function zq(o){if(!Number.isFinite(o))return"—";return Number.isInteger(o)?String(o):o.toFixed(2)}var jB=({stats:o})=>{return f.jsxDEV("div",{className:"ls-inspect-stats",children:[f.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",f.jsxDEV("strong",{children:o.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",o.totalRecords===1?"record":"records"," ·"," ",f.jsxDEV("strong",{children:o.fields.length},void 0,!1,void 0,this)," ",o.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-grid",children:o.fields.map((h)=>f.jsxDEV(fB,{field:h,totalRecords:o.totalRecords},h.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},fB=({field:o,totalRecords:h})=>{let u=h===0?0:Math.round(o.presence/h*100),O=Object.entries(o.types);return O.sort((P,A)=>A[1]-P[1]),f.jsxDEV("div",{className:"ls-inspect-stats-card",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[f.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:o.name,children:o.name},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${o.presence} of ${h} records`,children:[u,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:O.map(([P,A])=>f.jsxDEV("span",{className:yB[P],children:[P," · ",A]},P,!0,void 0,this))},void 0,!1,void 0,this),o.numericRange&&f.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[f.jsxDEV("span",{children:["min ",f.jsxDEV("strong",{children:zq(o.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["max ",f.jsxDEV("strong",{children:zq(o.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),f.jsxDEV("span",{children:["mean ",f.jsxDEV("strong",{children:zq(o.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),o.topValues.length>0&&f.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[f.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",o.topValues.length," of ",o.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),f.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:o.topValues.map((P,A)=>f.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(P.value),children:[f.jsxDEV("code",{children:cB(P.value)},void 0,!1,void 0,this),f.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",P.count]},void 0,!0,void 0,this)]},A,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var N2=Ar(hg(),1),QQ=Ar(S5(),1);var Og=Ar(rg(),1);function pB(o){if(o.scope==="character"&&o.characterName&&o.characterId)return{label:"Character",name:o.characterName,id:o.characterId};if(o.scope==="chat"&&o.chatName&&o.chatId)return{label:"Chat",name:o.chatName,id:o.chatId};return null}var zQ=({target:o,recordCount:h,onConfirm:u,onCancel:O})=>{let P=N2.useRef(null);N2.useEffect(()=>{let M=(W)=>{if(W.key==="Escape")O()};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[O]),N2.useEffect(()=>{let M=(W)=>{if(W.key!=="Tab")return;let J=P.current;if(!J)return;let z=Array.from(J.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(z.length===0)return;let Q=z[0],G=z[z.length-1],K=document.activeElement,N=K!==null&&J.contains(K);if(W.shiftKey){if(!N||K===Q)W.preventDefault(),G.focus()}else if(!N||K===G)W.preventDefault(),Q.focus()};return document.addEventListener("keydown",M),()=>document.removeEventListener("keydown",M)},[]);let A=Og.jsxDEV("div",{className:"ls-modal-overlay",onClick:(M)=>{if(M.target===M.currentTarget)O()},children:Og.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:P,onClick:(M)=>M.stopPropagation(),children:[Og.jsxDEV("div",{className:"ls-modal-header",children:[Og.jsxDEV("span",{className:"ls-modal-title",children:[Og.jsxDEV(F0,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),Og.jsxDEV("button",{className:"ls-modal-close",onClick:O,title:"Cancel (Esc)",children:Og.jsxDEV(n0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-body",children:[Og.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target",children:[Og.jsxDEV("div",{className:"ls-drop-target-name",children:o.name},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target-meta",children:[Og.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":o.scope,children:WQ[o.scope]},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-drop-target-size",children:Zu(o.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let M=pB(o);if(!M)return null;return Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${M.label.toLowerCase()}Id: ${M.id}`,children:[M.label,": ",Og.jsxDEV("strong",{children:M.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),Og.jsxDEV("div",{className:"ls-drop-target-path",title:o.path,children:o.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h===null?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):h>=0?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:h===0?"Collection is currently empty.":Og.jsxDEV(Og.Fragment,{children:["Will delete ",Og.jsxDEV("strong",{children:h.toLocaleString()},void 0,!1,void 0,this)," ",h===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,Og.jsxDEV("div",{className:"ls-drop-warning",children:[Og.jsxDEV(Sv,{size:12},void 0,!1,void 0,this),Og.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-actions",children:[Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:O,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:u,children:[Og.jsxDEV(F0,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return QQ.createPortal(A,document.body)};var e1=Ar(rg(),1),KQ=({variables:o,collections:h,scripts:u,sendToBackend:O,inspectPath:P,inspectRecords:A,inspectTotal:M,inspectError:W,inspectStats:J,inspectRefreshToken:z,onInspect:Q,dropTarget:G,dropTargetCount:K,onDrop:N,onDropConfirm:j})=>{return e1.jsxDEV(e1.Fragment,{children:[e1.jsxDEV("div",{className:"ls-storage-list",children:[e1.jsxDEV(MQ,{variables:o,sendToBackend:O},void 0,!1,void 0,this),e1.jsxDEV(RQ,{collections:h,scripts:u,sendToBackend:O,onInspect:Q,onDrop:N},void 0,!1,void 0,this)]},void 0,!0,void 0,this),P!==null&&e1.jsxDEV(JQ,{path:P,summary:h?.find((T)=>T.path===P),records:A,total:M,error:W,stats:J,refreshToken:z,onClose:()=>Q(null),sendToBackend:O},void 0,!1,void 0,this),G!==null&&e1.jsxDEV(zQ,{target:G,recordCount:K,onConfirm:j,onCancel:()=>N(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Wr=Ar(rg(),1),eQ=({onBackendMessage:o,sendToBackend:h})=>{let[u,O]=eg.useState("manage"),[P,A]=eg.useState([]),[M,W]=eg.useState(ou),[J,z]=eg.useState({characterId:null,characterName:null,chatId:null}),[Q,G]=eg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[K,N]=eg.useState([]),[j,T]=eg.useState([]),[y,rr]=eg.useState(null),[qr,or]=eg.useState(null),[p,s]=eg.useState(null),[lr,m]=eg.useState(null),[V,c]=eg.useState(0),[i,Qr]=eg.useState(null),[Gr,zr]=eg.useState(0),[mr,D]=eg.useState(null),[d,hr]=eg.useState(null),[vr,Rr]=eg.useState(null),[k,n]=eg.useState({});eg.useEffect(()=>{let Xr=o((Sr)=>{let br=Sr;switch(br.type){case"scripts_updated":A(br.scripts);break;case"script_patched":A((ir)=>ir.map((pr)=>pr.id===br.script.id?br.script:pr));break;case"settings_updated":W(br.settings);break;case"active_context":z({characterId:br.characterId,characterName:br.characterName,chatId:br.chatId}),h({type:"get_variables"});break;case"variables_updated":rr(br.variables);break;case"collections_list":or(br.collections);break;case"collection_records":m((ir)=>{return br.records}),c(br.total),Qr(br.error??null);break;case"collection_stats":D((ir)=>{return br.stats});break;case"collection_count":Rr((ir)=>{return br.count});break;case"collections_updated":h({type:"list_collections"}),zr((ir)=>ir+1);break;case"injections_updated":N(br.injections);break;case"tools_updated":T(br.tools);break;case"execution_started":{let ir={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};G((pr)=>{let Yg=pr.consoleHistory[br.scriptId]??[],B0=Yg.length>0?[...Yg,ir]:Yg;return{...pr,activeScriptId:br.scriptId,runId:br.runId,isRunning:!0,consoleHistory:{...pr.consoleHistory,[br.scriptId]:B0},scriptExecInfo:{...pr.scriptExecInfo,[br.scriptId]:{...pr.scriptExecInfo[br.scriptId],dot:"running"}}}}),n((pr)=>({...pr,[br.scriptId]:(pr[br.scriptId]??0)+1}));break}case"console_entry":{let ir=M.consoleHistoryLimit;G((pr)=>{let Yg=pr.consoleHistory[br.scriptId]??[];if(Yg.length>=ir)return pr;let ur=Yg.length===ir-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${ir} entries. Clear the console to resume capture.]`}:br.entry;return{...pr,consoleHistory:{...pr.consoleHistory,[br.scriptId]:[...Yg,ur]}}});break}case"execution_ended":G((ir)=>{let pr=ir.consoleHistory[br.scriptId]??[],Yg=ir.scriptExecInfo[br.scriptId],B0=!br.success&&br.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:br.error}]:[],ur=!br.success?!0:Yg?.stickyError??!1,_0=!br.success||ur?"error":"success",K0=br.duration??0,cg=br.success&&K0===0&&(Yg?.duration??0)>0?Yg.duration:br.duration;return{...ir,isRunning:!1,consoleHistory:B0.length?{...ir.consoleHistory,[br.scriptId]:[...pr,...B0]}:ir.consoleHistory,scriptExecInfo:{...ir.scriptExecInfo,[br.scriptId]:{dot:_0,duration:cg,error:br.error??Yg?.error,stickyError:ur}}}});break;case"error":console.warn("[LumiScript]",br.message);break}});return h({type:"get_scripts"}),h({type:"get_settings"}),h({type:"get_active_context"}),h({type:"get_injections"}),h({type:"get_tools"}),Xr},[o,h]),eg.useEffect(()=>{if(u==="storage")h({type:"list_collections"})},[u,h]),eg.useEffect(()=>{if(Rr(null),d)h({type:"count_collection",path:d.path})},[d,h]);let Pr=eg.useCallback((Xr)=>{G((Sr)=>({...Sr,consoleHistory:{...Sr.consoleHistory,[Xr]:[]}}))},[]),Kr=eg.useCallback((Xr)=>{G((Sr)=>{let br=Sr.scriptExecInfo[Xr];if(!br?.stickyError)return Sr;return{...Sr,scriptExecInfo:{...Sr.scriptExecInfo,[Xr]:{...br,dot:"idle",stickyError:!1}}}})},[]);return Wr.jsxDEV("div",{className:"ls-panel",children:[Wr.jsxDEV("div",{className:"ls-tabs",children:[Wr.jsxDEV("button",{className:`ls-tab-pill${u==="manage"?" ls-active":""}`,onClick:()=>O("manage"),children:[Wr.jsxDEV(X0,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Wr.jsxDEV("button",{className:`ls-tab-pill${u==="status"?" ls-active":""}`,onClick:()=>O("status"),children:[Wr.jsxDEV(Zb,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Wr.jsxDEV("button",{className:`ls-tab-pill${u==="storage"?" ls-active":""}`,onClick:()=>O("storage"),children:[Wr.jsxDEV(av,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[u==="manage"&&Wr.jsxDEV(qQ,{scripts:P,activeContext:J,execInfo:Q.scriptExecInfo,activeRunScriptId:Q.activeScriptId,isRunning:Q.isRunning,consoleHistory:Q.consoleHistory,editorFontSize:M.editorFontSize,autosaveDebounceMs:M.autosaveDebounceMs,onClearConsole:Pr,onScriptOpened:Kr,sendToBackend:h},void 0,!1,void 0,this),u==="status"&&Wr.jsxDEV(dB,{scripts:P,execInfo:Q.scriptExecInfo,invocationCounts:k,injections:K,tools:j,sendToBackend:h},void 0,!1,void 0,this),u==="storage"&&Wr.jsxDEV(KQ,{variables:y,collections:qr,scripts:P,sendToBackend:h,inspectPath:p,inspectRecords:lr,inspectTotal:V,inspectError:i,inspectStats:mr,inspectRefreshToken:Gr,onInspect:(Xr)=>{s(Xr),m(null),c(0),D(null)},dropTarget:d,dropTargetCount:vr,onDrop:hr,onDropConfirm:()=>{if(!d)return;let Xr=d.path;if(p===Xr)s(null),m(null),c(0),D(null);h({type:"drop_collection",path:Xr}),hr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},aB={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},dB=({scripts:o,execInfo:h,invocationCounts:u,injections:O,tools:P,sendToBackend:A})=>{let M=o.filter((G)=>G.type==="trigger"&&G.enabled),W=Object.fromEntries(o.map((G)=>[G.id,G.name])),[J,z]=eg.useState(new Set),Q=(G)=>{z((K)=>{let N=new Set(K);if(N.has(G))N.delete(G);else N.add(G);return N})};return Wr.jsxDEV("div",{className:"ls-status-list",children:[Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(X0,{size:10},void 0,!1,void 0,this),"Scripts",M.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:M.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:M.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):M.map((G)=>{let K=h[G.id],N=K?.dot??"idle",j={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[N],T=G.triggers??[],y=u[G.id];return Wr.jsxDEV("div",{className:"ls-status-row",children:[Wr.jsxDEV("div",{className:"ls-status-row-main",children:[Wr.jsxDEV("span",{className:j,title:aB[N]},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-status-name",children:G.name},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-status-right",children:[y!==void 0&&y>0&&Wr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${y} time${y!==1?"s":""} this session`,children:["×",y]},void 0,!0,void 0,this),K?.duration!==void 0&&N!=="running"&&Wr.jsxDEV("span",{className:"ls-status-duration",style:{color:N==="error"?"#ef4444":void 0},children:[K.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),T.length>0?Wr.jsxDEV("div",{className:"ls-status-events",children:T.map((rr)=>Wr.jsxDEV("span",{className:"ls-event-badge",children:[Wr.jsxDEV(G1,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Wr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),N==="error"&&K?.error&&Wr.jsxDEV("div",{className:"ls-status-error-row",children:Wr.jsxDEV("span",{className:"ls-status-error-text",children:K.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},G.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(w2,{size:10},void 0,!1,void 0,this),"Active Tools",P.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:P.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:P.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):P.map((G)=>Wr.jsxDEV("div",{className:"ls-tool-row",children:[Wr.jsxDEV("div",{className:"ls-tool-name",title:G.description,children:G.name},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-tool-meta",children:[G.council_eligible&&Wr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-script",title:G.scriptId,children:G.scriptName},void 0,!1,void 0,this),Wr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${G.name}`,title:`Unregister "${G.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>A({type:"unregister_tool",name:G.name}),children:Wr.jsxDEV(F0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},G.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section",children:[Wr.jsxDEV("div",{className:"ls-inject-header",children:[Wr.jsxDEV(g2,{size:10},void 0,!1,void 0,this),"Active Injections",O.length>0&&Wr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Wr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):O.map((G)=>{let K=J.has(G.id);return Wr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>Q(G.id),children:[Wr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${G.mode}`,title:G.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:G.mode==="intercept"?Wr.jsxDEV(xb,{size:11},void 0,!1,void 0,this):Wr.jsxDEV(Tb,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-inject-body",children:[Wr.jsxDEV("div",{className:"ls-inject-header-row",children:[Wr.jsxDEV("span",{className:"ls-inject-id",title:G.id,children:G.id},void 0,!1,void 0,this),Wr.jsxDEV("div",{className:"ls-inject-meta",children:[Wr.jsxDEV("span",{className:"ls-inject-role",children:G.role},void 0,!1,void 0,this),G.mode==="intercept"&&G.depth>0&&Wr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${G.depth} message${G.depth!==1?"s":""}`,children:["d:",G.depth]},void 0,!0,void 0,this),G.ephemeral&&Wr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Wr.jsxDEV($h,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-script",title:G.scriptId,children:W[G.scriptId]??G.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Wr.jsxDEV("span",{className:"ls-inject-chevron",children:K?Wr.jsxDEV(Gv,{size:10},void 0,!1,void 0,this):Wr.jsxDEV(Y0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),K&&Wr.jsxDEV("div",{className:"ls-inject-content",onClick:(N)=>N.stopPropagation(),children:G.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},G.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Z2=Ar(hg(),1);var Cr=Ar(rg(),1),$Q=({onBackendMessage:o,sendToBackend:h})=>{let[u,O]=Z2.useState(ou),[P,A]=Z2.useState([]);Z2.useEffect(()=>{let z=o((Q)=>{let G=Q;if(G.type==="scripts_updated")A(G.scripts);if(G.type==="settings_updated")O(G.settings)});return h({type:"get_settings"}),h({type:"get_scripts"}),z},[o,h]);let M=P.filter((z)=>z.type==="trigger").length,W=P.filter((z)=>z.type==="library").length,J=(z)=>{h({type:"update_settings",patch:{enabled:z}})};return Cr.jsxDEV("div",{className:"ls-settings",children:[Cr.jsxDEV("div",{className:"ls-settings-header",children:Cr.jsxDEV("span",{className:"ls-settings-title",children:[Cr.jsxDEV(mo,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-toggle-row",children:[Cr.jsxDEV("label",{className:"ls-toggle",children:[Cr.jsxDEV("input",{type:"checkbox",checked:u.enabled,onChange:(z)=>J(z.target.checked)},void 0,!1,void 0,this),Cr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-counts",children:[Cr.jsxDEV("div",{className:"ls-count-card",children:[Cr.jsxDEV(X0,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-num",children:M},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-count-card",children:[Cr.jsxDEV(zh,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-num",children:W},void 0,!1,void 0,this),Cr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV($h,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(u.scriptTimeoutMs/1000),onChange:(z)=>{let Q=Math.max(5,Math.min(300,Number(z.target.value)||60));h({type:"update_settings",patch:{scriptTimeoutMs:Q*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:u.consoleHistoryLimit,onChange:(z)=>{let Q=Math.max(50,Math.min(2000,Number(z.target.value)||500));h({type:"update_settings",patch:{consoleHistoryLimit:Q}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV(l2,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:u.editorFontSize,onChange:(z)=>{let Q=Math.max(10,Math.min(24,Number(z.target.value)||12));h({type:"update_settings",patch:{editorFontSize:Q}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-field",children:[Cr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Cr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:u.autosaveDebounceMs,onChange:(z)=>{let Q=Math.max(300,Math.min(5000,Number(z.target.value)||1200));h({type:"update_settings",patch:{autosaveDebounceMs:Q}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-section",children:[Cr.jsxDEV("div",{className:"ls-settings-section-label",children:[Cr.jsxDEV(Co,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-template-field",children:[Cr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Cr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:u.defaultTriggerTemplate,onChange:(z)=>h({type:"update_settings",patch:{defaultTriggerTemplate:z.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Cr.jsxDEV("div",{className:"ls-settings-template-field",children:[Cr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Cr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:u.defaultLibraryTemplate,onChange:(z)=>h({type:"update_settings",patch:{defaultLibraryTemplate:z.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function sB(o){let h=o?.type;return typeof h==="string"&&h.startsWith("dom_")}var z0=new Map;function a5(o,h){z0.set(o,h)}function iv(o){let h=z0.get(o);for(let[u,O]of $1)if(O.elementId===o){if(h)h.removeEventListener(O.event,O.handler);$1.delete(u)}z0.delete(o)}var C2=new Map,x2=new Map,Zh=new Map,T2=new Map,$1=new Map;function UQ(o,h){return`${o}:${h}`}function rN(o){let h=o.target,u={type:o.type};if(h){if(h.id)u.targetId=h.id;if("value"in h)u.targetValue=h.value;if("checked"in h)u.targetChecked=h.checked;if(h.dataset&&Object.keys(h.dataset).length>0){let O={};for(let[P,A]of Object.entries(h.dataset))if(A!==void 0)O[P]=A;u.dataset=O}}if(o instanceof MouseEvent)u.clientX=o.clientX,u.clientY=o.clientY;else if(typeof TouchEvent<"u"&&o instanceof TouchEvent){let O=o.touches[0]??o.changedTouches[0];if(O)u.clientX=O.clientX,u.clientY=O.clientY}if(o instanceof CustomEvent&&o.detail!==void 0)try{JSON.stringify(o.detail),u.detail=o.detail}catch{}return u}function gN(o,h){return`@scope ([data-ls-script="${h}"]) {
${o}
}`}function vN(o,h=5000){let u=document.querySelector(o);if(u)return Promise.resolve(u);return new Promise((O,P)=>{let A=!1,M=new MutationObserver(()=>{let W=document.querySelector(o);if(W&&!A)A=!0,M.disconnect(),O(W)});M.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!A)A=!0,M.disconnect(),P(Error(`waitForElement: timeout for "${o}"`))},h)})}function oN(o){return o.querySelector('[class*="_bubble_"]')}var oo=new Map,lN=50;function hN(o,h,u){if(oo.size>=lN){let O=oo.keys().next().value;if(O)oo.get(O)?.cancel(),oo.delete(O)}oo.set(o,{scriptId:h,cancel:u})}function wN(o){for(let[h,u]of oo)if(u.scriptId===o)u.cancel(),oo.delete(h)}function FQ(o,h,u){let O=h((P)=>{if(!sB(P))return;let A=P;switch(A.type){case"dom_inject":{let{scriptId:M,elementId:W,target:J,html:z,position:Q,stableId:G,parentElementId:K}=A;if(z0.has(W)){console.warn(`[LumiScript] dom_inject: elementId "${W}" already in elementMap — skipping duplicate insert`);break}let N=`<div data-ls-script="${M}" data-ls-el="${W}">${z}</div>`,j=null;if(K){let T=z0.get(K);if(!T){console.warn(`[LumiScript] dom_inject: parentElementId "${K}" not in elementMap — drop`);break}let y=T.querySelector(J);if(!y){console.warn(`[LumiScript] dom_inject: selector "${J}" not found within parent "${K}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=N,y.insertAdjacentElement(Q,rr),j=rr}else j=o.dom.inject(J,N,Q);if(j){if(z0.set(W,j),C2.set(W,M),G)x2.set(UQ(M,G),W)}break}case"dom_inject_at_message":{let{scriptId:M,elementId:W,messageId:J,html:z,position:Q,stableId:G}=A,K=(rr)=>{let qr=rr.querySelector("[data-part]"),or=qr?.getAttribute("data-part")??"character",p=qr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",s=Q==="header"?` data-ls-tint="${or}"`:"",lr=` data-ls-mode="${p}"`,m=`<div data-ls-script="${M}" data-ls-el="${W}"${s}${lr}>${z}</div>`,V,c;if(Q==="header")V=rr,c="afterbegin";else if(Q==="footer"&&p==="minimal")V=rr,c="beforeend";else V=oN(rr)??rr,c="beforeend";let i=o.dom.inject(V,m,c);if(z0.set(W,i),C2.set(W,M),G)x2.set(UQ(M,G),W)},N=`[data-message-id="${J}"]`,j=document.querySelector(N);if(j){K(j);break}let T=!1;hN(W,M,()=>{T=!0}),vN(N).then((rr)=>{if(oo.delete(W),T)return;K(rr)}).catch(()=>{oo.delete(W)});break}case"dom_update":{let M=z0.get(A.elementId);if(!M)break;let W=M.querySelector(`[data-ls-el="${A.elementId}"]`)??M;W.innerHTML=A.html;break}case"dom_remove":{LQ(A.elementId);break}case"dom_add_style":{let{scriptId:M,styleId:W,css:J}=A,z=gN(J,M),Q=o.dom.addStyle(z);Zh.set(W,Q),T2.set(W,M);break}case"dom_remove_style":{let M=Zh.get(A.styleId);if(M)M(),Zh.delete(A.styleId),T2.delete(A.styleId);break}case"dom_listen":{let{elementId:M,listenerId:W,event:J,preventDefault:z}=A,Q=z0.get(M);if(!Q)break;let G=(K)=>{if(z)K.preventDefault();let N=rN(K);u({type:"dom_event",elementId:M,listenerId:W,event:J,data:N})};Q.addEventListener(J,G),$1.set(W,{elementId:M,event:J,handler:G});break}case"dom_unlisten":{let M=$1.get(A.listenerId);if(!M)break;let W=z0.get(M.elementId);if(W)W.removeEventListener(M.event,M.handler);$1.delete(A.listenerId);break}case"dom_cleanup_script":{let{scriptId:M}=A;wN(M);for(let[W,J]of C2)if(J===M)LQ(W);for(let[W,J]of T2)if(J===M){let z=Zh.get(W);if(z)z();Zh.delete(W),T2.delete(W)}for(let[W]of x2)if(W.startsWith(M+":"))x2.delete(W);break}case"dom_make_draggable":{let{elementId:M,handleSelector:W}=A,J=z0.get(M);if(!J)break;let z=!1,Q=!1;J.addEventListener("pointerdown",(G)=>{if(G.button!==0)return;if(W&&!G.target.closest(W))return;let K=J.firstElementChild?.firstElementChild??J.firstElementChild??J,N=K.getBoundingClientRect();K.style.transform="none",K.style.top=`${N.top}px`,K.style.left=`${N.left}px`,K.style.bottom="auto",K.style.right="auto",z=!0,Q=!1;let j=G.clientX-N.left,T=G.clientY-N.top;K.style.cursor="grabbing";let y=(qr)=>{if(!z)return;Q=!0,K.style.top=`${qr.clientY-T}px`,K.style.left=`${qr.clientX-j}px`},rr=()=>{if(!z)return;z=!1,K.style.cursor="",document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",y),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),G.preventDefault()}),J.addEventListener("click",(G)=>{if(Q)G.stopImmediatePropagation(),G.preventDefault(),Q=!1},!0);break}}});return()=>{O();for(let[,P]of oo)P.cancel();oo.clear();for(let[,P]of $1){let A=z0.get(P.elementId);if(A)A.removeEventListener(P.event,P.handler)}$1.clear();for(let[,P]of z0)try{P.remove()}catch{}z0.clear(),C2.clear(),x2.clear();for(let[,P]of Zh)try{P()}catch{}Zh.clear(),T2.clear()}}function LQ(o){for(let[u,O]of $1)if(O.elementId===o){let P=z0.get(o);if(P)P.removeEventListener(O.event,O.handler);$1.delete(u)}let h=z0.get(o);if(h)try{h.remove()}catch{}z0.delete(o),C2.delete(o)}function bN(o){let h=o?.type;return h==="ls_modal_open"||h==="ls_modal_set_title"||h==="ls_modal_dismiss"}var Il=new Map;function IQ(o,h,u){let O=h((P)=>{if(!bN(P))return;let A=P;switch(A.type){case"ls_modal_open":{let{scriptId:M,modalId:W,rootElementId:J,options:z}=A;if(Il.has(W))break;let Q;try{Q=o.ui.showModal({title:z.title,width:z.width,maxHeight:z.maxHeight,persistent:z.persistent})}catch(K){console.warn("[LumiScript] ctx.ui.showModal failed:",K),u({type:"ls_modal_dismissed",modalId:W});break}a5(J,Q.root),Q.root.setAttribute("data-ls-script",M),Q.root.setAttribute("data-ls-modal",W);let G={modalId:W,rootElementId:J,handle:Q,echoed:!1};Il.set(W,G),Q.onDismiss(()=>{if(G.echoed)return;G.echoed=!0,iv(J),Il.delete(W),u({type:"ls_modal_dismissed",modalId:W})});break}case"ls_modal_set_title":{let M=Il.get(A.modalId);if(!M)break;try{M.handle.setTitle(A.title)}catch{}break}case"ls_modal_dismiss":{let M=Il.get(A.modalId);if(!M)break;try{M.handle.dismiss()}catch{if(!M.echoed)M.echoed=!0,iv(M.rootElementId),Il.delete(A.modalId),u({type:"ls_modal_dismissed",modalId:A.modalId})}break}}});return()=>{O();for(let P of Il.values()){try{P.handle.dismiss()}catch{}iv(P.rootElementId)}Il.clear()}}function uN(o){return o?.type==="ls_context_menu_show"}function BQ(o,h,u){let O=h(async(P)=>{if(!uN(P))return;let A=P,M=null;try{M=(await o.ui.showContextMenu({position:A.options.position,items:A.options.items})).selectedKey}catch(W){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",W)}u({type:"ls_context_menu_result",requestId:A.requestId,selectedKey:M})});return()=>{O()}}function ON(o){let h=o?.type;return h==="ls_input_bar_action_register"||h==="ls_input_bar_action_set_label"||h==="ls_input_bar_action_set_subtitle"||h==="ls_input_bar_action_set_enabled"||h==="ls_input_bar_action_destroy"}var Do=new Map;function HN(o,h){return`${o}:${h}`}function NQ(o,h,u){let O=h((P)=>{if(!ON(P))return;let A=P,M=HN(A.scriptId,A.actionId);switch(A.type){case"ls_input_bar_action_register":{let W=Do.get(M);if(W){try{W.destroy()}catch{}Do.delete(M)}let J;try{J=o.ui.registerInputBarAction({id:A.actionId,label:A.options.label,subtitle:A.options.subtitle,iconSvg:A.options.iconSvg,iconUrl:A.options.iconUrl,enabled:A.options.enabled})}catch(z){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",z);break}Do.set(M,J),J.onClick(()=>{u({type:"ls_input_bar_action_click",scriptId:A.scriptId,actionId:A.actionId})});break}case"ls_input_bar_action_set_label":{let W=Do.get(M);if(!W)break;try{W.setLabel(A.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let W=Do.get(M);if(!W)break;if(typeof W.setSubtitle!=="function")break;try{W.setSubtitle(A.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let W=Do.get(M);if(!W)break;try{W.setEnabled(A.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let W=Do.get(M);if(!W)break;try{W.destroy()}catch{}Do.delete(M);break}}});return()=>{O();for(let P of Do.values())try{P.destroy()}catch{}Do.clear()}}function PN(o){let h=o?.type;return h==="ls_float_widget_create"||h==="ls_float_widget_move"||h==="ls_float_widget_set_visible"||h==="ls_float_widget_destroy"}var U1=new Map;function ZQ(o,h,u){let O=h((P)=>{if(!PN(P))return;let A=P;switch(A.type){case"ls_float_widget_create":{let{scriptId:M,widgetId:W,rootElementId:J,options:z}=A,Q=U1.get(W);if(Q){try{Q.handle.destroy()}catch{}iv(Q.rootElementId),U1.delete(W)}let G;try{G=o.ui.createFloatWidget({width:z.width,height:z.height,initialPosition:z.initialPosition,snapToEdge:z.snapToEdge,tooltip:z.tooltip,chromeless:z.chromeless})}catch(K){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",K);break}a5(J,G.root),G.root.setAttribute("data-ls-script",M),G.root.setAttribute("data-ls-widget",W),U1.set(W,{widgetId:W,rootElementId:J,handle:G}),G.onDragEnd((K)=>{u({type:"ls_float_widget_drag_end",widgetId:W,x:K.x,y:K.y})});break}case"ls_float_widget_move":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.moveTo(A.x,A.y)}catch{}break}case"ls_float_widget_set_visible":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.setVisible(A.visible)}catch{}break}case"ls_float_widget_destroy":{let M=U1.get(A.widgetId);if(!M)break;try{M.handle.destroy()}catch{}iv(M.rootElementId),U1.delete(A.widgetId);break}}});return()=>{O();for(let P of U1.values()){try{P.handle.destroy()}catch{}iv(P.rootElementId)}U1.clear()}}function qN(o){let h=o?.type;return h==="ls_drawer_tab_register"||h==="ls_drawer_tab_set_title"||h==="ls_drawer_tab_set_short_name"||h==="ls_drawer_tab_set_badge"||h==="ls_drawer_tab_activate"||h==="ls_drawer_tab_destroy"}var lo=new Map;function AN(o,h){return`${o}:${h}`}function xQ(o,h,u){let O=h((P)=>{if(!qN(P))return;let A=P,M=AN(A.scriptId,A.tabId);switch(A.type){case"ls_drawer_tab_register":{let W=lo.get(M);if(W){try{W.handle.destroy()}catch{}iv(W.rootElementId),lo.delete(M)}let J;try{J=o.ui.registerDrawerTab({id:A.options.id,title:A.options.title,shortName:A.options.shortName,description:A.options.description,keywords:A.options.keywords,headerTitle:A.options.headerTitle,iconSvg:A.options.iconSvg,iconUrl:A.options.iconUrl})}catch(z){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",z);break}a5(A.rootElementId,J.root),J.root.setAttribute("data-ls-script",A.scriptId),J.root.setAttribute("data-ls-tab",A.tabId),lo.set(M,{scriptId:A.scriptId,tabId:A.tabId,rootElementId:A.rootElementId,handle:J}),J.onActivate(()=>{u({type:"ls_drawer_tab_activated",scriptId:A.scriptId,tabId:A.tabId})});break}case"ls_drawer_tab_set_title":{let W=lo.get(M);if(!W)break;try{W.handle.setTitle(A.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let W=lo.get(M);if(!W)break;try{W.handle.setShortName(A.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let W=lo.get(M);if(!W)break;try{W.handle.setBadge(A.badge)}catch{}break}case"ls_drawer_tab_activate":{let W=lo.get(M);if(!W)break;try{W.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let W=lo.get(M);if(!W)break;try{W.handle.destroy()}catch{}iv(W.rootElementId),lo.delete(M);break}}});return()=>{O();for(let P of lo.values()){try{P.handle.destroy()}catch{}iv(P.rootElementId)}lo.clear()}}var m2=Ar(rg(),1);function mjg(o){let h=[],u=o.dom.addStyle($R);h.push(u);let O=[],P=o.onBackendMessage((rr)=>{for(let qr of O)qr(rr)});h.push(P);let A=(rr)=>{return O.push(rr),()=>{let qr=O.indexOf(rr);if(qr!==-1)O.splice(qr,1)}},M=(rr)=>{o.sendToBackend(rr)},W=FQ(o,A,M);h.push(W);let J=IQ(o,A,M);h.push(J);let z=BQ(o,A,M);h.push(z);let Q=NQ(o,A,M);h.push(Q);let G=ZQ(o,A,M);h.push(G);let K=xQ(o,A,M);h.push(K),M({type:"frontend_ready"});let N=o.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),j=eq.createRoot(N.root);j.render(m2.jsxDEV(Kq.StrictMode,{children:m2.jsxDEV(eQ,{onBackendMessage:A,sendToBackend:M},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>{try{j.unmount()}catch{}try{N.destroy()}catch{}});let T=o.ui.mount("settings_extensions"),y=eq.createRoot(T);return y.render(m2.jsxDEV(Kq.StrictMode,{children:m2.jsxDEV($Q,{onBackendMessage:A,sendToBackend:M},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>y.unmount()),()=>{for(let rr of h)try{rr()}catch{}o.dom.cleanup()}}export{mjg as setup};
