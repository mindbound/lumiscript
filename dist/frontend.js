var dF=Object.create;var{getPrototypeOf:aF,defineProperty:vM,getOwnPropertyNames:sF}=Object;var gB=Object.prototype.hasOwnProperty;function vB(w){return this[w]}var rB,wB,Xg=(w,O,P)=>{var b=w!=null&&typeof w==="object";if(b){var M=O?rB??=new WeakMap:wB??=new WeakMap,Y=M.get(w);if(Y)return Y}P=w!=null?dF(aF(w)):{};let G=O||!w||!w.__esModule?vM(P,"default",{value:w,enumerable:!0}):P;for(let R of sF(w))if(!gB.call(G,R))vM(G,R,{get:vB.bind(w,R),enumerable:!0});if(b)M.set(w,G);return G};var M4=(w,O)=>()=>(O||w((O={exports:{}}).exports,O),O.exports);var HB=(w)=>w;function OB(w,O){this[w]=HB.bind(null,O)}var qB=(w,O)=>{for(var P in O)vM(w,P,{get:O[P],enumerable:!0,configurable:!0,set:OB.bind(O,P)})};var O0=M4((AB,yq)=>{(function(){function w(K,C){Object.defineProperty(b.prototype,K,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",C[0],C[1])}})}function O(K){if(K===null||typeof K!=="object")return null;return K=or&&K[or]||K["@@iterator"],typeof K==="function"?K:null}function P(K,C){K=(K=K.constructor)&&(K.displayName||K.name)||"ReactClass";var n=K+"."+C;Ag[n]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",C,K),Ag[n]=!0)}function b(K,C,n){this.props=K,this.context=C,this.refs=hv,this.updater=n||Rv}function M(){}function Y(K,C,n){this.props=K,this.context=C,this.refs=hv,this.updater=n||Rv}function G(){}function R(K){return""+K}function $(K){try{R(K);var C=!1}catch(Rg){C=!0}if(C){C=console;var n=C.error,Hg=typeof Symbol==="function"&&Symbol.toStringTag&&K[Symbol.toStringTag]||K.constructor.name||"Object";return n.call(C,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Hg),R(K)}}function U(K){if(K==null)return null;if(typeof K==="function")return K.$$typeof===_6?null:K.displayName||K.name||null;if(typeof K==="string")return K;switch(K){case Wg:return"Fragment";case c:return"Profiler";case S:return"StrictMode";case ng:return"Suspense";case dg:return"SuspenseList";case J1:return"Activity"}if(typeof K==="object")switch(typeof K.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),K.$$typeof){case i:return"Portal";case Qg:return K.displayName||"Context";case Gg:return(K._context.displayName||"Context")+".Consumer";case Lg:var C=K.render;return K=K.displayName,K||(K=C.displayName||C.name||"",K=K!==""?"ForwardRef("+K+")":"ForwardRef"),K;case o0:return C=K.displayName||null,C!==null?C:U(K.type)||"Memo";case j0:C=K._payload,K=K._init;try{return U(K(C))}catch(n){}}return null}function z(K){if(K===Wg)return"<>";if(typeof K==="object"&&K!==null&&K.$$typeof===j0)return"<...>";try{var C=U(K);return C?"<"+C+">":"<...>"}catch(n){return"<...>"}}function J(){var K=og.A;return K===null?null:K.getOwner()}function L(){return Error("react-stack-top-frame")}function l(K){if(B4.call(K,"key")){var C=Object.getOwnPropertyDescriptor(K,"key").get;if(C&&C.isReactWarning)return!1}return K.key!==void 0}function t(K,C){function n(){IO||(IO=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",C))}n.isReactWarning=!0,Object.defineProperty(K,"key",{get:n,configurable:!0})}function j(){var K=U(this.type);return z5[K]||(z5[K]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),K=this.props.ref,K!==void 0?K:null}function s(K,C,n,Hg,Rg,Tg){var Cg=n.ref;return K={$$typeof:vg,type:K,key:C,props:n,_owner:Hg},(Cg!==void 0?Cg:null)!==null?Object.defineProperty(K,"ref",{enumerable:!1,get:j}):Object.defineProperty(K,"ref",{enumerable:!1,value:null}),K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(K,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(K,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Rg}),Object.defineProperty(K,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Tg}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K}function _(K,C){return C=s(K.type,C,K.props,K._owner,K._debugStack,K._debugTask),K._store&&(C._store.validated=K._store.validated),C}function Mg(K){qg(K)?K._store&&(K._store.validated=1):typeof K==="object"&&K!==null&&K.$$typeof===j0&&(K._payload.status==="fulfilled"?qg(K._payload.value)&&K._payload.value._store&&(K._payload.value._store.validated=1):K._store&&(K._store.validated=1))}function qg(K){return typeof K==="object"&&K!==null&&K.$$typeof===vg}function e(K){var C={"=":"=0",":":"=2"};return"$"+K.replace(/[=:]/g,function(n){return C[n]})}function a(K,C){return typeof K==="object"&&K!==null&&K.key!=null?($(K.key),e(""+K.key)):C.toString(36)}function Pg(K){switch(K.status){case"fulfilled":return K.value;case"rejected":throw K.reason;default:switch(typeof K.status==="string"?K.then(G,G):(K.status="pending",K.then(function(C){K.status==="pending"&&(K.status="fulfilled",K.value=C)},function(C){K.status==="pending"&&(K.status="rejected",K.reason=C)})),K.status){case"fulfilled":return K.value;case"rejected":throw K.reason}}throw K}function rg(K,C,n,Hg,Rg){var Tg=typeof K;if(Tg==="undefined"||Tg==="boolean")K=null;var Cg=!1;if(K===null)Cg=!0;else switch(Tg){case"bigint":case"string":case"number":Cg=!0;break;case"object":switch(K.$$typeof){case vg:case i:Cg=!0;break;case j0:return Cg=K._init,rg(Cg(K._payload),C,n,Hg,Rg)}}if(Cg){Cg=K,Rg=Rg(Cg);var g0=Hg===""?"."+a(Cg,0):Hg;return b0(Rg)?(n="",g0!=null&&(n=g0.replace(N4,"$&/")+"/"),rg(Rg,C,n,"",function(Q1){return Q1})):Rg!=null&&(qg(Rg)&&(Rg.key!=null&&(Cg&&Cg.key===Rg.key||$(Rg.key)),n=_(Rg,n+(Rg.key==null||Cg&&Cg.key===Rg.key?"":(""+Rg.key).replace(N4,"$&/")+"/")+g0),Hg!==""&&Cg!=null&&qg(Cg)&&Cg.key==null&&Cg._store&&!Cg._store.validated&&(n._store.validated=2),Rg=n),C.push(Rg)),1}if(Cg=0,g0=Hg===""?".":Hg+":",b0(K))for(var zg=0;zg<K.length;zg++)Hg=K[zg],Tg=g0+a(Hg,zg),Cg+=rg(Hg,C,n,Tg,Rg);else if(zg=O(K),typeof zg==="function")for(zg===K.entries&&(I4||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),I4=!0),K=zg.call(K),zg=0;!(Hg=K.next()).done;)Hg=Hg.value,Tg=g0+a(Hg,zg++),Cg+=rg(Hg,C,n,Tg,Rg);else if(Tg==="object"){if(typeof K.then==="function")return rg(Pg(K),C,n,Hg,Rg);throw C=String(K),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(K).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Cg}function d(K,C,n){if(K==null)return K;var Hg=[],Rg=0;return rg(K,Hg,"","",function(Tg){return C.call(n,Tg,Rg++)}),Hg}function wg(K){if(K._status===-1){var C=K._ioInfo;C!=null&&(C.start=C.end=performance.now()),C=K._result;var n=C();if(n.then(function(Rg){if(K._status===0||K._status===-1){K._status=1,K._result=Rg;var Tg=K._ioInfo;Tg!=null&&(Tg.end=performance.now()),n.status===void 0&&(n.status="fulfilled",n.value=Rg)}},function(Rg){if(K._status===0||K._status===-1){K._status=2,K._result=Rg;var Tg=K._ioInfo;Tg!=null&&(Tg.end=performance.now()),n.status===void 0&&(n.status="rejected",n.reason=Rg)}}),C=K._ioInfo,C!=null){C.value=n;var Hg=n.displayName;typeof Hg==="string"&&(C.name=Hg)}K._status===-1&&(K._status=0,K._result=n)}if(K._status===1)return C=K._result,C===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,C),"default"in C||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,C),C.default;throw K._result}function m(){var K=og.H;return K===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),K}function Bg(){og.asyncTransitions--}function Jg(K){if(L5===null)try{var C=("require"+Math.random()).slice(0,7);L5=(yq&&yq[C]).call(yq,"timers").setImmediate}catch(n){L5=function(Hg){NO===!1&&(NO=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Rg=new MessageChannel;Rg.port1.onmessage=Hg,Rg.port2.postMessage(void 0)}}return L5(K)}function Kg(K){return 1<K.length&&typeof AggregateError==="function"?AggregateError(K):K[0]}function Vg(K,C){C!==F5-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),F5=C}function V(K,C,n){var Hg=og.actQueue;if(Hg!==null)if(Hg.length!==0)try{p(Hg),Jg(function(){return V(K,C,n)});return}catch(Rg){og.thrownErrors.push(Rg)}else og.actQueue=null;0<og.thrownErrors.length?(Hg=Kg(og.thrownErrors),og.thrownErrors.length=0,n(Hg)):C(K)}function p(K){if(!I5){I5=!0;var C=0;try{for(;C<K.length;C++){var n=K[C];do{og.didUsePromise=!1;var Hg=n(!1);if(Hg!==null){if(og.didUsePromise){K[C]=n,K.splice(0,C);return}n=Hg}else break}while(1)}K.length=0}catch(Rg){K.splice(0,C+1),og.thrownErrors.push(Rg)}finally{I5=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vg=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),Wg=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),Gg=Symbol.for("react.consumer"),Qg=Symbol.for("react.context"),Lg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),dg=Symbol.for("react.suspense_list"),o0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),J1=Symbol.for("react.activity"),or=Symbol.iterator,Ag={},Rv={isMounted:function(){return!1},enqueueForceUpdate:function(K){P(K,"forceUpdate")},enqueueReplaceState:function(K){P(K,"replaceState")},enqueueSetState:function(K){P(K,"setState")}},k1=Object.assign,hv={};Object.freeze(hv),b.prototype.isReactComponent={},b.prototype.setState=function(K,C){if(typeof K!=="object"&&typeof K!=="function"&&K!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,K,C,"setState")},b.prototype.forceUpdate=function(K){this.updater.enqueueForceUpdate(this,K,"forceUpdate")};var v1={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(zw in v1)v1.hasOwnProperty(zw)&&w(zw,v1[zw]);M.prototype=b.prototype,v1=Y.prototype=new M,v1.constructor=Y,k1(v1,b.prototype),v1.isPureReactComponent=!0;var b0=Array.isArray,_6=Symbol.for("react.client.reference"),og={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},B4=Object.prototype.hasOwnProperty,R0=console.createTask?console.createTask:function(){return null};v1={react_stack_bottom_frame:function(K){return K()}};var IO,sv,z5={},U5=v1.react_stack_bottom_frame.bind(v1,L)(),zA=R0(z(L)),I4=!1,N4=/\/+/g,$w=typeof reportError==="function"?reportError:function(K){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof K==="object"&&K!==null&&typeof K.message==="string"?String(K.message):String(K),error:K});if(!window.dispatchEvent(C))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",K);return}console.error(K)},NO=!1,L5=null,F5=0,B5=!1,I5=!1,y6=typeof queueMicrotask==="function"?function(K){queueMicrotask(function(){return queueMicrotask(K)})}:Jg;v1=Object.freeze({__proto__:null,c:function(K){return m().useMemoCache(K)}});var zw={map:d,forEach:function(K,C,n){d(K,function(){C.apply(this,arguments)},n)},count:function(K){var C=0;return d(K,function(){C++}),C},toArray:function(K){return d(K,function(C){return C})||[]},only:function(K){if(!qg(K))throw Error("React.Children.only expected to receive a single React element child.");return K}};AB.Activity=J1,AB.Children=zw,AB.Component=b,AB.Fragment=Wg,AB.Profiler=c,AB.PureComponent=Y,AB.StrictMode=S,AB.Suspense=ng,AB.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=og,AB.__COMPILER_RUNTIME=v1,AB.act=function(K){var C=og.actQueue,n=F5;F5++;var Hg=og.actQueue=C!==null?C:[],Rg=!1;try{var Tg=K()}catch(zg){og.thrownErrors.push(zg)}if(0<og.thrownErrors.length)throw Vg(C,n),K=Kg(og.thrownErrors),og.thrownErrors.length=0,K;if(Tg!==null&&typeof Tg==="object"&&typeof Tg.then==="function"){var Cg=Tg;return y6(function(){Rg||B5||(B5=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(zg,Q1){Rg=!0,Cg.then(function(c1){if(Vg(C,n),n===0){try{p(Hg),Jg(function(){return V(c1,zg,Q1)})}catch(j6){og.thrownErrors.push(j6)}if(0<og.thrownErrors.length){var Uw=Kg(og.thrownErrors);og.thrownErrors.length=0,Q1(Uw)}}else zg(c1)},function(c1){Vg(C,n),0<og.thrownErrors.length?(c1=Kg(og.thrownErrors),og.thrownErrors.length=0,Q1(c1)):Q1(c1)})}}}var g0=Tg;if(Vg(C,n),n===0&&(p(Hg),Hg.length!==0&&y6(function(){Rg||B5||(B5=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),og.actQueue=null),0<og.thrownErrors.length)throw K=Kg(og.thrownErrors),og.thrownErrors.length=0,K;return{then:function(zg,Q1){Rg=!0,n===0?(og.actQueue=Hg,Jg(function(){return V(g0,zg,Q1)})):zg(g0)}}},AB.cache=function(K){return function(){return K.apply(null,arguments)}},AB.cacheSignal=function(){return null},AB.captureOwnerStack=function(){var K=og.getCurrentStack;return K===null?null:K()},AB.cloneElement=function(K,C,n){if(K===null||K===void 0)throw Error("The argument must be a React element, but you passed "+K+".");var Hg=k1({},K.props),Rg=K.key,Tg=K._owner;if(C!=null){var Cg;g:{if(B4.call(C,"ref")&&(Cg=Object.getOwnPropertyDescriptor(C,"ref").get)&&Cg.isReactWarning){Cg=!1;break g}Cg=C.ref!==void 0}Cg&&(Tg=J()),l(C)&&($(C.key),Rg=""+C.key);for(g0 in C)!B4.call(C,g0)||g0==="key"||g0==="__self"||g0==="__source"||g0==="ref"&&C.ref===void 0||(Hg[g0]=C[g0])}var g0=arguments.length-2;if(g0===1)Hg.children=n;else if(1<g0){Cg=Array(g0);for(var zg=0;zg<g0;zg++)Cg[zg]=arguments[zg+2];Hg.children=Cg}Hg=s(K.type,Rg,Hg,Tg,K._debugStack,K._debugTask);for(Rg=2;Rg<arguments.length;Rg++)Mg(arguments[Rg]);return Hg},AB.createContext=function(K){return K={$$typeof:Qg,_currentValue:K,_currentValue2:K,_threadCount:0,Provider:null,Consumer:null},K.Provider=K,K.Consumer={$$typeof:Gg,_context:K},K._currentRenderer=null,K._currentRenderer2=null,K},AB.createElement=function(K,C,n){for(var Hg=2;Hg<arguments.length;Hg++)Mg(arguments[Hg]);Hg={};var Rg=null;if(C!=null)for(zg in sv||!("__self"in C)||"key"in C||(sv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),l(C)&&($(C.key),Rg=""+C.key),C)B4.call(C,zg)&&zg!=="key"&&zg!=="__self"&&zg!=="__source"&&(Hg[zg]=C[zg]);var Tg=arguments.length-2;if(Tg===1)Hg.children=n;else if(1<Tg){for(var Cg=Array(Tg),g0=0;g0<Tg;g0++)Cg[g0]=arguments[g0+2];Object.freeze&&Object.freeze(Cg),Hg.children=Cg}if(K&&K.defaultProps)for(zg in Tg=K.defaultProps,Tg)Hg[zg]===void 0&&(Hg[zg]=Tg[zg]);Rg&&t(Hg,typeof K==="function"?K.displayName||K.name||"Unknown":K);var zg=1e4>og.recentlyCreatedOwnerStacks++;return s(K,Rg,Hg,J(),zg?Error("react-stack-top-frame"):U5,zg?R0(z(K)):zA)},AB.createRef=function(){var K={current:null};return Object.seal(K),K},AB.forwardRef=function(K){K!=null&&K.$$typeof===o0?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof K!=="function"?console.error("forwardRef requires a render function but was given %s.",K===null?"null":typeof K):K.length!==0&&K.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",K.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),K!=null&&K.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var C={$$typeof:Lg,render:K},n;return Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(Hg){n=Hg,K.name||K.displayName||(Object.defineProperty(K,"name",{value:Hg}),K.displayName=Hg)}}),C},AB.isValidElement=qg,AB.lazy=function(K){K={_status:-1,_result:K};var C={$$typeof:j0,_payload:K,_init:wg},n={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return K._ioInfo=n,C._debugInfo=[{awaited:n}],C},AB.memo=function(K,C){K==null&&console.error("memo: The first argument must be a component. Instead received: %s",K===null?"null":typeof K),C={$$typeof:o0,type:K,compare:C===void 0?null:C};var n;return Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(Hg){n=Hg,K.name||K.displayName||(Object.defineProperty(K,"name",{value:Hg}),K.displayName=Hg)}}),C},AB.startTransition=function(K){var C=og.T,n={};n._updatedFibers=new Set,og.T=n;try{var Hg=K(),Rg=og.S;Rg!==null&&Rg(n,Hg),typeof Hg==="object"&&Hg!==null&&typeof Hg.then==="function"&&(og.asyncTransitions++,Hg.then(Bg,Bg),Hg.then(G,$w))}catch(Tg){$w(Tg)}finally{C===null&&n._updatedFibers&&(K=n._updatedFibers.size,n._updatedFibers.clear(),10<K&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),C!==null&&n.types!==null&&(C.types!==null&&C.types!==n.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),C.types=n.types),og.T=C}},AB.unstable_useCacheRefresh=function(){return m().useCacheRefresh()},AB.use=function(K){return m().use(K)},AB.useActionState=function(K,C,n){return m().useActionState(K,C,n)},AB.useCallback=function(K,C){return m().useCallback(K,C)},AB.useContext=function(K){var C=m();return K.$$typeof===Gg&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),C.useContext(K)},AB.useDebugValue=function(K,C){return m().useDebugValue(K,C)},AB.useDeferredValue=function(K,C){return m().useDeferredValue(K,C)},AB.useEffect=function(K,C){return K==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),m().useEffect(K,C)},AB.useEffectEvent=function(K){return m().useEffectEvent(K)},AB.useId=function(){return m().useId()},AB.useImperativeHandle=function(K,C,n){return m().useImperativeHandle(K,C,n)},AB.useInsertionEffect=function(K,C){return K==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),m().useInsertionEffect(K,C)},AB.useLayoutEffect=function(K,C){return K==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),m().useLayoutEffect(K,C)},AB.useMemo=function(K,C){return m().useMemo(K,C)},AB.useOptimistic=function(K,C){return m().useOptimistic(K,C)},AB.useReducer=function(K,C,n){return m().useReducer(K,C,n)},AB.useRef=function(K){return m().useRef(K)},AB.useState=function(K){return m().useState(K)},AB.useSyncExternalStore=function(K,C,n){return m().useSyncExternalStore(K,C,n)},AB.useTransition=function(){return m().useTransition()},AB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var eh=M4((PB)=>{(function(){function w(){if(e=!1,d){var V=PB.unstable_now();Bg=V;var p=!0;try{g:{Mg=!1,qg&&(qg=!1,Pg(wg),wg=-1),_=!0;var vg=s;try{v:{Y(V);for(j=P(L);j!==null&&!(j.expirationTime>V&&R());){var i=j.callback;if(typeof i==="function"){j.callback=null,s=j.priorityLevel;var Wg=i(j.expirationTime<=V);if(V=PB.unstable_now(),typeof Wg==="function"){j.callback=Wg,Y(V),p=!0;break v}j===P(L)&&b(L),Y(V)}else b(L);j=P(L)}if(j!==null)p=!0;else{var S=P(l);S!==null&&$(G,S.startTime-V),p=!1}}break g}finally{j=null,s=vg,_=!1}p=void 0}}finally{p?Jg():d=!1}}}function O(V,p){var vg=V.length;V.push(p);g:for(;0<vg;){var i=vg-1>>>1,Wg=V[i];if(0<M(Wg,p))V[i]=p,V[vg]=Wg,vg=i;else break g}}function P(V){return V.length===0?null:V[0]}function b(V){if(V.length===0)return null;var p=V[0],vg=V.pop();if(vg!==p){V[0]=vg;g:for(var i=0,Wg=V.length,S=Wg>>>1;i<S;){var c=2*(i+1)-1,Gg=V[c],Qg=c+1,Lg=V[Qg];if(0>M(Gg,vg))Qg<Wg&&0>M(Lg,Gg)?(V[i]=Lg,V[Qg]=vg,i=Qg):(V[i]=Gg,V[c]=vg,i=c);else if(Qg<Wg&&0>M(Lg,vg))V[i]=Lg,V[Qg]=vg,i=Qg;else break g}}return p}function M(V,p){var vg=V.sortIndex-p.sortIndex;return vg!==0?vg:V.id-p.id}function Y(V){for(var p=P(l);p!==null;){if(p.callback===null)b(l);else if(p.startTime<=V)b(l),p.sortIndex=p.expirationTime,O(L,p);else break;p=P(l)}}function G(V){if(qg=!1,Y(V),!Mg)if(P(L)!==null)Mg=!0,d||(d=!0,Jg());else{var p=P(l);p!==null&&$(G,p.startTime-V)}}function R(){return e?!0:PB.unstable_now()-Bg<m?!1:!0}function $(V,p){wg=a(function(){V(PB.unstable_now())},p)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),PB.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var U=performance;PB.unstable_now=function(){return U.now()}}else{var z=Date,J=z.now();PB.unstable_now=function(){return z.now()-J}}var L=[],l=[],t=1,j=null,s=3,_=!1,Mg=!1,qg=!1,e=!1,a=typeof setTimeout==="function"?setTimeout:null,Pg=typeof clearTimeout==="function"?clearTimeout:null,rg=typeof setImmediate<"u"?setImmediate:null,d=!1,wg=-1,m=5,Bg=-1;if(typeof rg==="function")var Jg=function(){rg(w)};else if(typeof MessageChannel<"u"){var Kg=new MessageChannel,Vg=Kg.port2;Kg.port1.onmessage=w,Jg=function(){Vg.postMessage(null)}}else Jg=function(){a(w,0)};PB.unstable_IdlePriority=5,PB.unstable_ImmediatePriority=1,PB.unstable_LowPriority=4,PB.unstable_NormalPriority=3,PB.unstable_Profiling=null,PB.unstable_UserBlockingPriority=2,PB.unstable_cancelCallback=function(V){V.callback=null},PB.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<V?Math.floor(1000/V):5},PB.unstable_getCurrentPriorityLevel=function(){return s},PB.unstable_next=function(V){switch(s){case 1:case 2:case 3:var p=3;break;default:p=s}var vg=s;s=p;try{return V()}finally{s=vg}},PB.unstable_requestPaint=function(){e=!0},PB.unstable_runWithPriority=function(V,p){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var vg=s;s=V;try{return p()}finally{s=vg}},PB.unstable_scheduleCallback=function(V,p,vg){var i=PB.unstable_now();switch(typeof vg==="object"&&vg!==null?(vg=vg.delay,vg=typeof vg==="number"&&0<vg?i+vg:i):vg=i,V){case 1:var Wg=-1;break;case 2:Wg=250;break;case 5:Wg=1073741823;break;case 4:Wg=1e4;break;default:Wg=5000}return Wg=vg+Wg,V={id:t++,callback:p,priorityLevel:V,startTime:vg,expirationTime:Wg,sortIndex:-1},vg>i?(V.sortIndex=vg,O(l,V),P(L)===null&&V===P(l)&&(qg?(Pg(wg),wg=-1):qg=!0,$(G,vg-i))):(V.sortIndex=Wg,O(L,V),Mg||_||(Mg=!0,d||(d=!0,Jg()))),V},PB.unstable_shouldYield=R,PB.unstable_wrapCallback=function(V){var p=s;return function(){var vg=s;s=p;try{return V.apply(this,arguments)}finally{s=vg}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var ch=M4((bB)=>{var rM=Xg(O0());(function(){function w(){}function O(z){return""+z}function P(z,J,L){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{O(l);var t=!1}catch(j){t=!0}return t&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&l[Symbol.toStringTag]||l.constructor.name||"Object"),O(l)),{$$typeof:$,key:l==null?null:""+l,children:z,containerInfo:J,implementation:L}}function b(z,J){if(z==="font")return"";if(typeof J==="string")return J==="use-credentials"?J:""}function M(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":'something with type "'+typeof z+'"'}function Y(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":typeof z==="string"?JSON.stringify(z):typeof z==="number"?"`"+z+"`":'something with type "'+typeof z+'"'}function G(){var z=U.H;return z===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),z}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var R={d:{f:w,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},$=Symbol.for("react.portal"),U=rM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),bB.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,bB.createPortal=function(z,J){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!J||J.nodeType!==1&&J.nodeType!==9&&J.nodeType!==11)throw Error("Target container is not a DOM element.");return P(z,J,null,L)},bB.flushSync=function(z){var J=U.T,L=R.p;try{if(U.T=null,R.p=2,z)return z()}finally{U.T=J,R.p=L,R.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},bB.preconnect=function(z,J){typeof z==="string"&&z?J!=null&&typeof J!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",Y(J)):J!=null&&typeof J.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",M(J.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z)),typeof z==="string"&&(J?(J=J.crossOrigin,J=typeof J==="string"?J==="use-credentials"?J:"":void 0):J=null,R.d.C(z,J))},bB.prefetchDNS=function(z){if(typeof z!=="string"||!z)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z));else if(1<arguments.length){var J=arguments[1];typeof J==="object"&&J.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",Y(J)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",Y(J))}typeof z==="string"&&R.d.D(z)},bB.preinit=function(z,J){if(typeof z==="string"&&z?J==null||typeof J!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",Y(J)):J.as!=="style"&&J.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',Y(J.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z)),typeof z==="string"&&J&&typeof J.as==="string"){var L=J.as,l=b(L,J.crossOrigin),t=typeof J.integrity==="string"?J.integrity:void 0,j=typeof J.fetchPriority==="string"?J.fetchPriority:void 0;L==="style"?R.d.S(z,typeof J.precedence==="string"?J.precedence:void 0,{crossOrigin:l,integrity:t,fetchPriority:j}):L==="script"&&R.d.X(z,{crossOrigin:l,integrity:t,fetchPriority:j,nonce:typeof J.nonce==="string"?J.nonce:void 0})}},bB.preinitModule=function(z,J){var L="";if(typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),J!==void 0&&typeof J!=="object"?L+=" The `options` argument encountered was "+M(J)+".":J&&("as"in J)&&J.as!=="script"&&(L+=" The `as` option encountered was "+Y(J.as)+"."),L)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",L);else switch(L=J&&typeof J.as==="string"?J.as:"script",L){case"script":break;default:L=Y(L),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',L,z)}if(typeof z==="string")if(typeof J==="object"&&J!==null){if(J.as==null||J.as==="script")L=b(J.as,J.crossOrigin),R.d.M(z,{crossOrigin:L,integrity:typeof J.integrity==="string"?J.integrity:void 0,nonce:typeof J.nonce==="string"?J.nonce:void 0})}else J==null&&R.d.M(z)},bB.preload=function(z,J){var L="";if(typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),J==null||typeof J!=="object"?L+=" The `options` argument encountered was "+M(J)+".":typeof J.as==="string"&&J.as||(L+=" The `as` option encountered was "+M(J.as)+"."),L&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',L),typeof z==="string"&&typeof J==="object"&&J!==null&&typeof J.as==="string"){L=J.as;var l=b(L,J.crossOrigin);R.d.L(z,L,{crossOrigin:l,integrity:typeof J.integrity==="string"?J.integrity:void 0,nonce:typeof J.nonce==="string"?J.nonce:void 0,type:typeof J.type==="string"?J.type:void 0,fetchPriority:typeof J.fetchPriority==="string"?J.fetchPriority:void 0,referrerPolicy:typeof J.referrerPolicy==="string"?J.referrerPolicy:void 0,imageSrcSet:typeof J.imageSrcSet==="string"?J.imageSrcSet:void 0,imageSizes:typeof J.imageSizes==="string"?J.imageSizes:void 0,media:typeof J.media==="string"?J.media:void 0})}},bB.preloadModule=function(z,J){var L="";typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),J!==void 0&&typeof J!=="object"?L+=" The `options` argument encountered was "+M(J)+".":J&&("as"in J)&&typeof J.as!=="string"&&(L+=" The `as` option encountered was "+M(J.as)+"."),L&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',L),typeof z==="string"&&(J?(L=b(J.as,J.crossOrigin),R.d.m(z,{as:typeof J.as==="string"&&J.as!=="script"?J.as:void 0,crossOrigin:L,integrity:typeof J.integrity==="string"?J.integrity:void 0})):R.d.m(z))},bB.requestFormReset=function(z){R.d.r(z)},bB.unstable_batchedUpdates=function(z,J){return z(J)},bB.useFormState=function(z,J,L){return G().useFormState(z,J,L)},bB.useFormStatus=function(){return G().useHostTransitionStatus()},bB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var $H=M4((HS,th)=>{th.exports=ch()});var ph=M4((WB)=>{var v0=Xg(eh()),u6=Xg(O0()),wM=Xg($H());(function(){function w(g,v){for(g=g.memoizedState;g!==null&&0<v;)g=g.next,v--;return g}function O(g,v,r,H){if(r>=v.length)return H;var q=v[r],A=a0(g)?g.slice():yg({},g);return A[q]=O(g[q],v,r+1,H),A}function P(g,v,r){if(v.length!==r.length)console.warn("copyWithRename() expects paths of the same length");else{for(var H=0;H<r.length-1;H++)if(v[H]!==r[H]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return b(g,v,r,0)}}function b(g,v,r,H){var q=v[H],A=a0(g)?g.slice():yg({},g);return H+1===v.length?(A[r[H]]=A[q],a0(A)?A.splice(q,1):delete A[q]):A[q]=b(g[q],v,r,H+1),A}function M(g,v,r){var H=v[r],q=a0(g)?g.slice():yg({},g);if(r+1===v.length)return a0(q)?q.splice(H,1):delete q[H],q;return q[H]=M(g[H],v,r+1),q}function Y(){return!1}function G(){return null}function R(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function $(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function U(){}function z(){}function J(g){var v=[];return g.forEach(function(r){v.push(r)}),v.sort().join(", ")}function L(g,v,r,H){return new Ez(g,v,r,H)}function l(g,v){g.context===yw&&(zb(g.current,2,v,g,null,null),E4())}function t(g,v){if(Uv!==null){var r=v.staleFamilies;v=v.updatedFamilies,R8(),s9(g.current,v,r),E4()}}function j(g){Uv=g}function s(g){return!(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)}function _(g){var v=g,r=g;if(g.alternate)for(;v.return;)v=v.return;else{g=v;do v=g,(v.flags&4098)!==0&&(r=v.return),g=v.return;while(g)}return v.tag===3?r:null}function Mg(g){if(g.tag===13){var v=g.memoizedState;if(v===null&&(g=g.alternate,g!==null&&(v=g.memoizedState)),v!==null)return v.dehydrated}return null}function qg(g){if(g.tag===31){var v=g.memoizedState;if(v===null&&(g=g.alternate,g!==null&&(v=g.memoizedState)),v!==null)return v.dehydrated}return null}function e(g){if(_(g)!==g)throw Error("Unable to find node on an unmounted component.")}function a(g){var v=g.alternate;if(!v){if(v=_(g),v===null)throw Error("Unable to find node on an unmounted component.");return v!==g?null:g}for(var r=g,H=v;;){var q=r.return;if(q===null)break;var A=q.alternate;if(A===null){if(H=q.return,H!==null){r=H;continue}break}if(q.child===A.child){for(A=q.child;A;){if(A===r)return e(q),g;if(A===H)return e(q),v;A=A.sibling}throw Error("Unable to find node on an unmounted component.")}if(r.return!==H.return)r=q,H=A;else{for(var W=!1,X=q.child;X;){if(X===r){W=!0,r=q,H=A;break}if(X===H){W=!0,H=q,r=A;break}X=X.sibling}if(!W){for(X=A.child;X;){if(X===r){W=!0,r=A,H=q;break}if(X===H){W=!0,H=A,r=q;break}X=X.sibling}if(!W)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==H)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==3)throw Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?g:v}function Pg(g){var v=g.tag;if(v===5||v===26||v===27||v===6)return g;for(g=g.child;g!==null;){if(v=Pg(g),v!==null)return v;g=g.sibling}return null}function rg(g){if(g===null||typeof g!=="object")return null;return g=q7&&g[q7]||g["@@iterator"],typeof g==="function"?g:null}function d(g){if(g==null)return null;if(typeof g==="function")return g.$$typeof===AL?null:g.displayName||g.name||null;if(typeof g==="string")return g;switch(g){case e4:return"Fragment";case Nb:return"Profiler";case D2:return"StrictMode";case ub:return"Suspense";case Tb:return"SuspenseList";case Cb:return"Activity"}if(typeof g==="object")switch(typeof g.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),g.$$typeof){case n4:return"Portal";case Jr:return g.displayName||"Context";case Zb:return(g._context.displayName||"Context")+".Consumer";case B8:var v=g.render;return g=g.displayName,g||(g=v.displayName||v.name||"",g=g!==""?"ForwardRef("+g+")":"ForwardRef"),g;case m2:return v=g.displayName||null,v!==null?v:d(g.type)||"Memo";case wv:v=g._payload,g=g._init;try{return d(g(v))}catch(r){}}return null}function wg(g){return typeof g.tag==="number"?m(g):typeof g.name==="string"?g.name:null}function m(g){var v=g.type;switch(g.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(v._context.displayName||"Context")+".Consumer";case 10:return v.displayName||"Context";case 18:return"DehydratedFragment";case 11:return g=v.render,g=g.displayName||g.name||"",v.displayName||(g!==""?"ForwardRef("+g+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return v;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return d(v);case 8:return v===D2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof v==="function")return v.displayName||v.name||null;if(typeof v==="string")return v;break;case 29:if(v=g._debugInfo,v!=null){for(var r=v.length-1;0<=r;r--)if(typeof v[r].name==="string")return v[r].name}if(g.return!==null)return m(g.return)}return null}function Bg(g){return{current:g}}function Jg(g,v){0>ir?console.error("Unexpected pop."):(v!==lb[ir]&&console.error("Unexpected Fiber popped."),g.current=Sb[ir],Sb[ir]=null,lb[ir]=null,ir--)}function Kg(g,v,r){ir++,Sb[ir]=g.current,lb[ir]=r,g.current=v}function Vg(g){return g===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),g}function V(g,v){Kg(Dw,v,g),Kg(I8,g,g),Kg(xw,null,g);var r=v.nodeType;switch(r){case 9:case 11:r=r===9?"#document":"#fragment",v=(v=v.documentElement)?(v=v.namespaceURI)?TG(v):Hw:Hw;break;default:if(r=v.tagName,v=v.namespaceURI)v=TG(v),v=CG(v,r);else switch(r){case"svg":v=N6;break;case"math":v=xq;break;default:v=Hw}}r=r.toLowerCase(),r=F9(null,r),r={context:v,ancestorInfo:r},Jg(xw,g),Kg(xw,r,g)}function p(g){Jg(xw,g),Jg(I8,g),Jg(Dw,g)}function vg(){return Vg(xw.current)}function i(g){g.memoizedState!==null&&Kg(k2,g,g);var v=Vg(xw.current),r=g.type,H=CG(v.context,r);r=F9(v.ancestorInfo,r),H={context:H,ancestorInfo:r},v!==H&&(Kg(I8,g,g),Kg(xw,H,g))}function Wg(g){I8.current===g&&(Jg(xw,g),Jg(I8,g)),k2.current===g&&(Jg(k2,g),JH._currentValue=W4)}function S(){}function c(){if(N8===0){A7=console.log,P7=console.info,b7=console.warn,W7=console.error,M7=console.group,X7=console.groupCollapsed,Y7=console.groupEnd;var g={configurable:!0,enumerable:!0,value:S,writable:!0};Object.defineProperties(console,{info:g,log:g,warn:g,error:g,group:g,groupCollapsed:g,groupEnd:g})}N8++}function Gg(){if(N8--,N8===0){var g={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:yg({},g,{value:A7}),info:yg({},g,{value:P7}),warn:yg({},g,{value:b7}),error:yg({},g,{value:W7}),group:yg({},g,{value:M7}),groupCollapsed:yg({},g,{value:X7}),groupEnd:yg({},g,{value:Y7})})}0>N8&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Qg(g){var v=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,g=g.stack,Error.prepareStackTrace=v,g.startsWith(`Error: react-stack-top-frame
`)&&(g=g.slice(29)),v=g.indexOf(`
`),v!==-1&&(g=g.slice(v+1)),v=g.indexOf("react_stack_bottom_frame"),v!==-1&&(v=g.lastIndexOf(`
`,v)),v!==-1)g=g.slice(0,v);else return"";return g}function Lg(g){if(ob===void 0)try{throw Error()}catch(r){var v=r.stack.trim().match(/\n( *(at )?)/);ob=v&&v[1]||"",G7=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ob+g+G7}function ng(g,v){if(!g||xb)return"";var r=Db.get(g);if(r!==void 0)return r;xb=!0,r=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var H=null;H=D.H,D.H=null,c();try{var q={DetermineComponentFrameRoot:function(){try{if(v){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(gg){var o=gg}Reflect.construct(g,[],B)}else{try{B.call()}catch(gg){o=gg}g.call(B.prototype)}}else{try{throw Error()}catch(gg){o=gg}(B=g())&&typeof B.catch==="function"&&B.catch(function(){})}}catch(gg){if(gg&&o&&typeof gg.stack==="string")return[gg.stack,o.stack]}return[null,null]}};q.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var A=Object.getOwnPropertyDescriptor(q.DetermineComponentFrameRoot,"name");A&&A.configurable&&Object.defineProperty(q.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var W=q.DetermineComponentFrameRoot(),X=W[0],h=W[1];if(X&&h){var Q=X.split(`
`),u=h.split(`
`);for(W=A=0;A<Q.length&&!Q[A].includes("DetermineComponentFrameRoot");)A++;for(;W<u.length&&!u[W].includes("DetermineComponentFrameRoot");)W++;if(A===Q.length||W===u.length)for(A=Q.length-1,W=u.length-1;1<=A&&0<=W&&Q[A]!==u[W];)W--;for(;1<=A&&0<=W;A--,W--)if(Q[A]!==u[W]){if(A!==1||W!==1)do if(A--,W--,0>W||Q[A]!==u[W]){var T=`
`+Q[A].replace(" at new "," at ");return g.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",g.displayName)),typeof g==="function"&&Db.set(g,T),T}while(1<=A&&0<=W);break}}}finally{xb=!1,D.H=H,Gg(),Error.prepareStackTrace=r}return Q=(Q=g?g.displayName||g.name:"")?Lg(Q):"",typeof g==="function"&&Db.set(g,Q),Q}function dg(g,v){switch(g.tag){case 26:case 27:case 5:return Lg(g.type);case 16:return Lg("Lazy");case 13:return g.child!==v&&v!==null?Lg("Suspense Fallback"):Lg("Suspense");case 19:return Lg("SuspenseList");case 0:case 15:return ng(g.type,!1);case 11:return ng(g.type.render,!1);case 1:return ng(g.type,!0);case 31:return Lg("Activity");default:return""}}function o0(g){try{var v="",r=null;do{v+=dg(g,r);var H=g._debugInfo;if(H)for(var q=H.length-1;0<=q;q--){var A=H[q];if(typeof A.name==="string"){var W=v;g:{var{name:X,env:h,debugLocation:Q}=A;if(Q!=null){var u=Qg(Q),T=u.lastIndexOf(`
`),B=T===-1?u:u.slice(T+1);if(B.indexOf(X)!==-1){var o=`
`+B;break g}}o=Lg(X+(h?" ["+h+"]":""))}v=W+o}}r=g,g=g.return}while(g);return v}catch(gg){return`
Error generating stack: `+gg.message+`
`+gg.stack}}function j0(g){return(g=g?g.displayName||g.name:"")?Lg(g):""}function J1(){if(Hv===null)return null;var g=Hv._debugOwner;return g!=null?wg(g):null}function or(){if(Hv===null)return"";var g=Hv;try{var v="";switch(g.tag===6&&(g=g.return),g.tag){case 26:case 27:case 5:v+=Lg(g.type);break;case 13:v+=Lg("Suspense");break;case 19:v+=Lg("SuspenseList");break;case 31:v+=Lg("Activity");break;case 30:case 0:case 15:case 1:g._debugOwner||v!==""||(v+=j0(g.type));break;case 11:g._debugOwner||v!==""||(v+=j0(g.type.render))}for(;g;)if(typeof g.tag==="number"){var r=g;g=r._debugOwner;var H=r._debugStack;if(g&&H){var q=Qg(H);q!==""&&(v+=`
`+q)}}else if(g.debugStack!=null){var A=g.debugStack;(g=g.owner)&&A&&(v+=`
`+Qg(A))}else break;var W=v}catch(X){W=`
Error generating stack: `+X.message+`
`+X.stack}return W}function Ag(g,v,r,H,q,A,W){var X=Hv;Rv(g);try{return g!==null&&g._debugTask?g._debugTask.run(v.bind(null,r,H,q,A,W)):v(r,H,q,A,W)}finally{Rv(X)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function Rv(g){D.getCurrentStack=g===null?null:or,Qr=!1,Hv=g}function k1(g){return typeof Symbol==="function"&&Symbol.toStringTag&&g[Symbol.toStringTag]||g.constructor.name||"Object"}function hv(g){try{return v1(g),!1}catch(v){return!0}}function v1(g){return""+g}function b0(g,v){if(hv(g))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",v,k1(g)),v1(g)}function _6(g,v){if(hv(g))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",v,k1(g)),v1(g)}function og(g){if(hv(g))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",k1(g)),v1(g)}function B4(g){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var v=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(v.isDisabled)return!0;if(!v.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{t4=v.inject(g),$1=v}catch(r){console.error("React instrumentation encountered an error: %o.",r)}return v.checkDCE?!0:!1}function R0(g){if(typeof GL==="function"&&RL(g),$1&&typeof $1.setStrictMode==="function")try{$1.setStrictMode(t4,g)}catch(v){Kr||(Kr=!0,console.error("React instrumentation encountered an error: %o",v))}}function IO(g){return g>>>=0,g===0?32:31-(hL(g)/JL|0)|0}function sv(g){var v=g&42;if(v!==0)return v;switch(g&-g){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return g&261888;case 262144:case 524288:case 1048576:case 2097152:return g&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return g&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),g}}function z5(g,v,r){var H=g.pendingLanes;if(H===0)return 0;var q=0,A=g.suspendedLanes,W=g.pingedLanes;g=g.warmLanes;var X=H&134217727;return X!==0?(H=X&~A,H!==0?q=sv(H):(W&=X,W!==0?q=sv(W):r||(r=X&~g,r!==0&&(q=sv(r))))):(X=H&~A,X!==0?q=sv(X):W!==0?q=sv(W):r||(r=H&~g,r!==0&&(q=sv(r)))),q===0?0:v!==0&&v!==q&&(v&A)===0&&(A=q&-q,r=v&-v,A>=r||A===32&&(r&4194048)!==0)?v:q}function U5(g,v){return(g.pendingLanes&~(g.suspendedLanes&~g.pingedLanes)&v)===0}function zA(g,v){switch(g){case 1:case 2:case 4:case 8:case 64:return v+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return v+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function I4(){var g=_2;return _2<<=1,(_2&62914560)===0&&(_2=4194304),g}function N4(g){for(var v=[],r=0;31>r;r++)v.push(g);return v}function $w(g,v){g.pendingLanes|=v,v!==268435456&&(g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0)}function NO(g,v,r,H,q,A){var W=g.pendingLanes;g.pendingLanes=r,g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0,g.expiredLanes&=r,g.entangledLanes&=r,g.errorRecoveryDisabledLanes&=r,g.shellSuspendCounter=0;var{entanglements:X,expirationTimes:h,hiddenUpdates:Q}=g;for(r=W&~r;0<r;){var u=31-F1(r),T=1<<u;X[u]=0,h[u]=-1;var B=Q[u];if(B!==null)for(Q[u]=null,u=0;u<B.length;u++){var o=B[u];o!==null&&(o.lane&=-536870913)}r&=~T}H!==0&&L5(g,H,0),A!==0&&q===0&&g.tag!==0&&(g.suspendedLanes|=A&~(W&~v))}function L5(g,v,r){g.pendingLanes|=v,g.suspendedLanes&=~v;var H=31-F1(v);g.entangledLanes|=v,g.entanglements[H]=g.entanglements[H]|1073741824|r&261930}function F5(g,v){var r=g.entangledLanes|=v;for(g=g.entanglements;r;){var H=31-F1(r),q=1<<H;q&v|g[H]&v&&(g[H]|=v),r&=~q}}function B5(g,v){var r=v&-v;return r=(r&42)!==0?1:I5(r),(r&(g.suspendedLanes|v))!==0?0:r}function I5(g){switch(g){case 2:g=1;break;case 8:g=4;break;case 32:g=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:g=128;break;case 268435456:g=134217728;break;default:g=0}return g}function y6(g,v,r){if($r)for(g=g.pendingUpdatersLaneMap;0<r;){var H=31-F1(r),q=1<<H;g[H].add(v),r&=~q}}function zw(g,v){if($r)for(var{pendingUpdatersLaneMap:r,memoizedUpdaters:H}=g;0<v;){var q=31-F1(v);g=1<<q,q=r[q],0<q.size&&(q.forEach(function(A){var W=A.alternate;W!==null&&H.has(W)||H.add(A)}),q.clear()),v&=~g}}function K(g){return g&=-g,Ov!==0&&Ov<g?mv!==0&&mv<g?(g&134217727)!==0?zr:y2:mv:Ov}function C(){var g=H0.p;if(g!==0)return g;return g=window.event,g===void 0?zr:sG(g.type)}function n(g,v){var r=H0.p;try{return H0.p=g,v()}finally{H0.p=r}}function Hg(g){delete g[Y1],delete g[B1],delete g[_b],delete g[QL],delete g[KL]}function Rg(g){var v=g[Y1];if(v)return v;for(var r=g.parentNode;r;){if(v=r[kw]||r[Y1]){if(r=v.alternate,v.child!==null||r!==null&&r.child!==null)for(g=VG(g);g!==null;){if(r=g[Y1])return r;g=VG(g)}return v}g=r,r=g.parentNode}return null}function Tg(g){if(g=g[Y1]||g[kw]){var v=g.tag;if(v===5||v===6||v===13||v===31||v===26||v===27||v===3)return g}return null}function Cg(g){var v=g.tag;if(v===5||v===26||v===27||v===6)return g.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function g0(g){var v=g[R7];return v||(v=g[R7]={hoistableStyles:new Map,hoistableScripts:new Map}),v}function zg(g){g[Z8]=!0}function Q1(g,v){c1(g,v),c1(g+"Capture",v)}function c1(g,v){y5[g]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",g),y5[g]=v;var r=g.toLowerCase();yb[r]=g,g==="onDoubleClick"&&(yb.ondblclick=g);for(g=0;g<v.length;g++)h7.add(v[g])}function Uw(g,v){$L[v.type]||v.onChange||v.onInput||v.readOnly||v.disabled||v.value==null||(g==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),v.onChange||v.readOnly||v.disabled||v.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function j6(g){if(Dv.call(Q7,g))return!0;if(Dv.call(J7,g))return!1;if(zL.test(g))return Q7[g]=!0;return J7[g]=!0,console.error("Invalid attribute name: `%s`",g),!1}function b9(g,v,r){if(j6(v)){if(!g.hasAttribute(v)){switch(typeof r){case"symbol":case"object":return r;case"function":return r;case"boolean":if(r===!1)return r}return r===void 0?void 0:null}if(g=g.getAttribute(v),g===""&&r===!0)return!0;return b0(r,v),g===""+r?r:g}}function ZO(g,v,r){if(j6(v))if(r===null)g.removeAttribute(v);else{switch(typeof r){case"undefined":case"function":case"symbol":g.removeAttribute(v);return;case"boolean":var H=v.toLowerCase().slice(0,5);if(H!=="data-"&&H!=="aria-"){g.removeAttribute(v);return}}b0(r,v),g.setAttribute(v,""+r)}}function uO(g,v,r){if(r===null)g.removeAttribute(v);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(v);return}b0(r,v),g.setAttribute(v,""+r)}}function xr(g,v,r,H){if(H===null)g.removeAttribute(r);else{switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(r);return}b0(H,r),g.setAttributeNS(v,r,""+H)}}function Jv(g){switch(typeof g){case"bigint":case"boolean":case"number":case"string":case"undefined":return g;case"object":return og(g),g;default:return""}}function W9(g){var v=g.type;return(g=g.nodeName)&&g.toLowerCase()==="input"&&(v==="checkbox"||v==="radio")}function Jz(g,v,r){var H=Object.getOwnPropertyDescriptor(g.constructor.prototype,v);if(!g.hasOwnProperty(v)&&typeof H<"u"&&typeof H.get==="function"&&typeof H.set==="function"){var{get:q,set:A}=H;return Object.defineProperty(g,v,{configurable:!0,get:function(){return q.call(this)},set:function(W){og(W),r=""+W,A.call(this,W)}}),Object.defineProperty(g,v,{enumerable:H.enumerable}),{getValue:function(){return r},setValue:function(W){og(W),r=""+W},stopTracking:function(){g._valueTracker=null,delete g[v]}}}}function UA(g){if(!g._valueTracker){var v=W9(g)?"checked":"value";g._valueTracker=Jz(g,v,""+g[v])}}function M9(g){if(!g)return!1;var v=g._valueTracker;if(!v)return!0;var r=v.getValue(),H="";return g&&(H=W9(g)?g.checked?"true":"false":g.value),g=H,g!==r?(v.setValue(g),!0):!1}function TO(g){if(g=g||(typeof document<"u"?document:void 0),typeof g>"u")return null;try{return g.activeElement||g.body}catch(v){return g.body}}function Qv(g){return g.replace(UL,function(v){return"\\"+v.charCodeAt(0).toString(16)+" "})}function X9(g,v){v.checked===void 0||v.defaultChecked===void 0||$7||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",J1()||"A component",v.type),$7=!0),v.value===void 0||v.defaultValue===void 0||K7||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",J1()||"A component",v.type),K7=!0)}function LA(g,v,r,H,q,A,W,X){if(g.name="",W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"?(b0(W,"type"),g.type=W):g.removeAttribute("type"),v!=null)if(W==="number"){if(v===0&&g.value===""||g.value!=v)g.value=""+Jv(v)}else g.value!==""+Jv(v)&&(g.value=""+Jv(v));else W!=="submit"&&W!=="reset"||g.removeAttribute("value");v!=null?FA(g,W,Jv(v)):r!=null?FA(g,W,Jv(r)):H!=null&&g.removeAttribute("value"),q==null&&A!=null&&(g.defaultChecked=!!A),q!=null&&(g.checked=q&&typeof q!=="function"&&typeof q!=="symbol"),X!=null&&typeof X!=="function"&&typeof X!=="symbol"&&typeof X!=="boolean"?(b0(X,"name"),g.name=""+Jv(X)):g.removeAttribute("name")}function Y9(g,v,r,H,q,A,W,X){if(A!=null&&typeof A!=="function"&&typeof A!=="symbol"&&typeof A!=="boolean"&&(b0(A,"type"),g.type=A),v!=null||r!=null){if(!(A!=="submit"&&A!=="reset"||v!==void 0&&v!==null)){UA(g);return}r=r!=null?""+Jv(r):"",v=v!=null?""+Jv(v):r,X||v===g.value||(g.value=v),g.defaultValue=v}H=H!=null?H:q,H=typeof H!=="function"&&typeof H!=="symbol"&&!!H,g.checked=X?g.checked:!!H,g.defaultChecked=!!H,W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"&&(b0(W,"name"),g.name=W),UA(g)}function FA(g,v,r){v==="number"&&TO(g.ownerDocument)===g||g.defaultValue===""+r||(g.defaultValue=""+r)}function G9(g,v){v.value==null&&(typeof v.children==="object"&&v.children!==null?u6.Children.forEach(v.children,function(r){r==null||typeof r==="string"||typeof r==="number"||typeof r==="bigint"||U7||(U7=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):v.dangerouslySetInnerHTML==null||L7||(L7=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),v.selected==null||z7||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),z7=!0)}function R9(){var g=J1();return g?`

Check the render method of \``+g+"`.":""}function Z4(g,v,r,H){if(g=g.options,v){v={};for(var q=0;q<r.length;q++)v["$"+r[q]]=!0;for(r=0;r<g.length;r++)q=v.hasOwnProperty("$"+g[r].value),g[r].selected!==q&&(g[r].selected=q),q&&H&&(g[r].defaultSelected=!0)}else{r=""+Jv(r),v=null;for(q=0;q<g.length;q++){if(g[q].value===r){g[q].selected=!0,H&&(g[q].defaultSelected=!0);return}v!==null||g[q].disabled||(v=g[q])}v!==null&&(v.selected=!0)}}function h9(g,v){for(g=0;g<B7.length;g++){var r=B7[g];if(v[r]!=null){var H=a0(v[r]);v.multiple&&!H?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",r,R9()):!v.multiple&&H&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",r,R9())}}v.value===void 0||v.defaultValue===void 0||F7||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),F7=!0)}function J9(g,v){v.value===void 0||v.defaultValue===void 0||I7||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",J1()||"A component"),I7=!0),v.children!=null&&v.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function Q9(g,v,r){if(v!=null&&(v=""+Jv(v),v!==g.value&&(g.value=v),r==null)){g.defaultValue!==v&&(g.defaultValue=v);return}g.defaultValue=r!=null?""+Jv(r):""}function K9(g,v,r,H){if(v==null){if(H!=null){if(r!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(a0(H)){if(1<H.length)throw Error("<textarea> can only have at most one child.");H=H[0]}r=H}r==null&&(r=""),v=r}r=Jv(v),g.defaultValue=r,H=g.textContent,H===r&&H!==""&&H!==null&&(g.value=H),UA(g)}function $9(g,v){return g.serverProps===void 0&&g.serverTail.length===0&&g.children.length===1&&3<g.distanceFromLeaf&&g.distanceFromLeaf>15-v?$9(g.children[0],v):g}function t1(g){return"  "+"  ".repeat(g)}function u4(g){return"+ "+"  ".repeat(g)}function N5(g){return"- "+"  ".repeat(g)}function z9(g){switch(g.tag){case 26:case 27:case 5:return g.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return g=g.type,g.displayName||g.name||null;case 11:return g=g.type.render,g.displayName||g.name||null;case 1:return g=g.type,g.displayName||g.name||null;default:return null}}function i6(g,v){return N7.test(g)?(g=JSON.stringify(g),g.length>v-2?8>v?'{"..."}':"{"+g.slice(0,v-7)+'..."}':"{"+g+"}"):g.length>v?5>v?'{"..."}':g.slice(0,v-3)+"...":g}function CO(g,v,r){var H=120-2*r;if(v===null)return u4(r)+i6(g,H)+`
`;if(typeof v==="string"){for(var q=0;q<v.length&&q<g.length&&v.charCodeAt(q)===g.charCodeAt(q);q++);return q>H-8&&10<q&&(g="..."+g.slice(q-8),v="..."+v.slice(q-8)),u4(r)+i6(g,H)+`
`+N5(r)+i6(v,H)+`
`}return t1(r)+i6(g,H)+`
`}function BA(g){return Object.prototype.toString.call(g).replace(/^\[object (.*)\]$/,function(v,r){return r})}function f6(g,v){switch(typeof g){case"string":return g=JSON.stringify(g),g.length>v?5>v?'"..."':g.slice(0,v-4)+'..."':g;case"object":if(g===null)return"null";if(a0(g))return"[...]";if(g.$$typeof===hr)return(v=d(g.type))?"<"+v+">":"<...>";var r=BA(g);if(r==="Object"){r="",v-=2;for(var H in g)if(g.hasOwnProperty(H)){var q=JSON.stringify(H);if(q!=='"'+H+'"'&&(H=q),v-=H.length-2,q=f6(g[H],15>v?v:15),v-=q.length,0>v){r+=r===""?"...":", ...";break}r+=(r===""?"":",")+H+":"+q}return"{"+r+"}"}return r;case"function":return(v=g.displayName||g.name)?"function "+v:"function";default:return String(g)}}function T4(g,v){return typeof g!=="string"||N7.test(g)?"{"+f6(g,v-2)+"}":g.length>v-2?5>v?'"..."':'"'+g.slice(0,v-5)+'..."':'"'+g+'"'}function IA(g,v,r){var H=120-r.length-g.length,q=[],A;for(A in v)if(v.hasOwnProperty(A)&&A!=="children"){var W=T4(v[A],120-r.length-A.length-1);H-=A.length+W.length+2,q.push(A+"="+W)}return q.length===0?r+"<"+g+`>
`:0<H?r+"<"+g+" "+q.join(" ")+`>
`:r+"<"+g+`
`+r+"  "+q.join(`
`+r+"  ")+`
`+r+`>
`}function Qz(g,v,r){var H="",q=yg({},v),A;for(A in g)if(g.hasOwnProperty(A)){delete q[A];var W=120-2*r-A.length-2,X=f6(g[A],W);v.hasOwnProperty(A)?(W=f6(v[A],W),H+=u4(r)+A+": "+X+`
`,H+=N5(r)+A+": "+W+`
`):H+=u4(r)+A+": "+X+`
`}for(var h in q)q.hasOwnProperty(h)&&(g=f6(q[h],120-2*r-h.length-2),H+=N5(r)+h+": "+g+`
`);return H}function Kz(g,v,r,H){var q="",A=new Map;for(Q in r)r.hasOwnProperty(Q)&&A.set(Q.toLowerCase(),Q);if(A.size===1&&A.has("children"))q+=IA(g,v,t1(H));else{for(var W in v)if(v.hasOwnProperty(W)&&W!=="children"){var X=120-2*(H+1)-W.length-1,h=A.get(W.toLowerCase());if(h!==void 0){A.delete(W.toLowerCase());var Q=v[W];h=r[h];var u=T4(Q,X);X=T4(h,X),typeof Q==="object"&&Q!==null&&typeof h==="object"&&h!==null&&BA(Q)==="Object"&&BA(h)==="Object"&&(2<Object.keys(Q).length||2<Object.keys(h).length||-1<u.indexOf("...")||-1<X.indexOf("..."))?q+=t1(H+1)+W+`={{
`+Qz(Q,h,H+2)+t1(H+1)+`}}
`:(q+=u4(H+1)+W+"="+u+`
`,q+=N5(H+1)+W+"="+X+`
`)}else q+=t1(H+1)+W+"="+T4(v[W],X)+`
`}A.forEach(function(T){if(T!=="children"){var B=120-2*(H+1)-T.length-1;q+=N5(H+1)+T+"="+T4(r[T],B)+`
`}}),q=q===""?t1(H)+"<"+g+`>
`:t1(H)+"<"+g+`
`+q+t1(H)+`>
`}if(g=r.children,v=v.children,typeof g==="string"||typeof g==="number"||typeof g==="bigint"){if(A="",typeof v==="string"||typeof v==="number"||typeof v==="bigint")A=""+v;q+=CO(A,""+g,H+1)}else if(typeof v==="string"||typeof v==="number"||typeof v==="bigint")q=g==null?q+CO(""+v,null,H+1):q+CO(""+v,void 0,H+1);return q}function U9(g,v){var r=z9(g);if(r===null){r="";for(g=g.child;g;)r+=U9(g,v),g=g.sibling;return r}return t1(v)+"<"+r+`>
`}function NA(g,v){var r=$9(g,v);if(r!==g&&(g.children.length!==1||g.children[0]!==r))return t1(v)+`...
`+NA(r,v+1);r="";var H=g.fiber._debugInfo;if(H)for(var q=0;q<H.length;q++){var A=H[q].name;typeof A==="string"&&(r+=t1(v)+"<"+A+`>
`,v++)}if(H="",q=g.fiber.pendingProps,g.fiber.tag===6)H=CO(q,g.serverProps,v),v++;else if(A=z9(g.fiber),A!==null)if(g.serverProps===void 0){H=v;var W=120-2*H-A.length-2,X="";for(Q in q)if(q.hasOwnProperty(Q)&&Q!=="children"){var h=T4(q[Q],15);if(W-=Q.length+h.length+2,0>W){X+=" ...";break}X+=" "+Q+"="+h}H=t1(H)+"<"+A+X+`>
`,v++}else g.serverProps===null?(H=IA(A,q,u4(v)),v++):typeof g.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(H=Kz(A,q,g.serverProps,v),v++);var Q="";q=g.fiber.child;for(A=0;q&&A<g.children.length;)W=g.children[A],W.fiber===q?(Q+=NA(W,v),A++):Q+=U9(q,v),q=q.sibling;q&&0<g.children.length&&(Q+=t1(v)+`...
`),q=g.serverTail,g.serverProps===null&&v--;for(g=0;g<q.length;g++)A=q[g],Q=typeof A==="string"?Q+(N5(v)+i6(A,120-2*v)+`
`):Q+IA(A.type,A.props,N5(v));return r+H+Q}function ZA(g){try{return`

`+NA(g,0)}catch(v){return""}}function L9(g,v,r){for(var H=v,q=null,A=0;H;)H===g&&(A=0),q={fiber:H,children:q!==null?[q]:[],serverProps:H===v?r:H===g?null:void 0,serverTail:[],distanceFromLeaf:A},A++,H=H.return;return q!==null?ZA(q).replaceAll(/^[+-]/gm,">"):""}function F9(g,v){var r=yg({},g||u7),H={tag:v};if(Z7.indexOf(v)!==-1&&(r.aTagInScope=null,r.buttonTagInScope=null,r.nobrTagInScope=null),FL.indexOf(v)!==-1&&(r.pTagInButtonScope=null),LL.indexOf(v)!==-1&&v!=="address"&&v!=="div"&&v!=="p"&&(r.listItemTagAutoclosing=null,r.dlItemTagAutoclosing=null),r.current=H,v==="form"&&(r.formTag=H),v==="a"&&(r.aTagInScope=H),v==="button"&&(r.buttonTagInScope=H),v==="nobr"&&(r.nobrTagInScope=H),v==="p"&&(r.pTagInButtonScope=H),v==="li"&&(r.listItemTagAutoclosing=H),v==="dd"||v==="dt")r.dlItemTagAutoclosing=H;return v==="#document"||v==="html"?r.containerTagInScope=null:r.containerTagInScope||(r.containerTagInScope=H),g!==null||v!=="#document"&&v!=="html"&&v!=="body"?r.implicitRootScope===!0&&(r.implicitRootScope=!1):r.implicitRootScope=!0,r}function B9(g,v,r){switch(v){case"select":return g==="hr"||g==="option"||g==="optgroup"||g==="script"||g==="template"||g==="#text";case"optgroup":return g==="option"||g==="#text";case"option":return g==="#text";case"tr":return g==="th"||g==="td"||g==="style"||g==="script"||g==="template";case"tbody":case"thead":case"tfoot":return g==="tr"||g==="style"||g==="script"||g==="template";case"colgroup":return g==="col"||g==="template";case"table":return g==="caption"||g==="colgroup"||g==="tbody"||g==="tfoot"||g==="thead"||g==="style"||g==="script"||g==="template";case"head":return g==="base"||g==="basefont"||g==="bgsound"||g==="link"||g==="meta"||g==="title"||g==="noscript"||g==="noframes"||g==="style"||g==="script"||g==="template";case"html":if(r)break;return g==="head"||g==="body"||g==="frameset";case"frameset":return g==="frame";case"#document":if(!r)return g==="html"}switch(g){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return v!=="h1"&&v!=="h2"&&v!=="h3"&&v!=="h4"&&v!=="h5"&&v!=="h6";case"rp":case"rt":return BL.indexOf(v)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return v==null;case"head":return r||v===null;case"html":return r&&v==="#document"||v===null;case"body":return r&&(v==="#document"||v==="html")||v===null}return!0}function $z(g,v){switch(g){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return v.pTagInButtonScope;case"form":return v.formTag||v.pTagInButtonScope;case"li":return v.listItemTagAutoclosing;case"dd":case"dt":return v.dlItemTagAutoclosing;case"button":return v.buttonTagInScope;case"a":return v.aTagInScope;case"nobr":return v.nobrTagInScope}return null}function I9(g,v){for(;g;){switch(g.tag){case 5:case 26:case 27:if(g.type===v)return g}g=g.return}return null}function uA(g,v){v=v||u7;var r=v.current;if(v=(r=B9(g,r&&r.tag,v.implicitRootScope)?null:r)?null:$z(g,v),v=r||v,!v)return!0;var H=v.tag;if(v=String(!!r)+"|"+g+"|"+H,j2[v])return!1;j2[v]=!0;var q=(v=Hv)?I9(v.return,H):null,A=v!==null&&q!==null?L9(q,v,null):"",W="<"+g+">";return r?(r="",H==="table"&&g==="tr"&&(r+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,W,H,r,A)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,W,H,A),v&&(g=v.return,q===null||g===null||q===g&&g._debugOwner===v._debugOwner||Ag(q,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,H,W)})),!1}function SO(g,v,r){if(r||B9("#text",v,!1))return!0;if(r="#text|"+v,j2[r])return!1;j2[r]=!0;var H=(r=Hv)?I9(r,v):null;return r=r!==null&&H!==null?L9(H,r,r.tag!==6?{children:null}:null):"",/\S/.test(g)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,v,r):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,v,r),!1}function n6(g,v){if(v){var r=g.firstChild;if(r&&r===g.lastChild&&r.nodeType===3){r.nodeValue=v;return}}g.textContent=v}function zz(g){return g.replace(ZL,function(v,r){return r.toUpperCase()})}function N9(g,v,r){var H=v.indexOf("--")===0;H||(-1<v.indexOf("-")?p4.hasOwnProperty(v)&&p4[v]||(p4[v]=!0,console.error("Unsupported style property %s. Did you mean %s?",v,zz(v.replace(NL,"ms-")))):IL.test(v)?p4.hasOwnProperty(v)&&p4[v]||(p4[v]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",v,v.charAt(0).toUpperCase()+v.slice(1))):!S7.test(r)||ib.hasOwnProperty(r)&&ib[r]||(ib[r]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,v,r.replace(S7,""))),typeof r==="number"&&(isNaN(r)?l7||(l7=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",v)):isFinite(r)||o7||(o7=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",v)))),r==null||typeof r==="boolean"||r===""?H?g.setProperty(v,""):v==="float"?g.cssFloat="":g[v]="":H?g.setProperty(v,r):typeof r!=="number"||r===0||x7.has(v)?v==="float"?g.cssFloat=r:(_6(r,v),g[v]=(""+r).trim()):g[v]=r+"px"}function Z9(g,v,r){if(v!=null&&typeof v!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(v&&Object.freeze(v),g=g.style,r!=null){if(v){var H={};if(r){for(var q in r)if(r.hasOwnProperty(q)&&!v.hasOwnProperty(q))for(var A=jb[q]||[q],W=0;W<A.length;W++)H[A[W]]=q}for(var X in v)if(v.hasOwnProperty(X)&&(!r||r[X]!==v[X]))for(q=jb[X]||[X],A=0;A<q.length;A++)H[q[A]]=X;X={};for(var h in v)for(q=jb[h]||[h],A=0;A<q.length;A++)X[q[A]]=h;h={};for(var Q in H)if(q=H[Q],(A=X[Q])&&q!==A&&(W=q+","+A,!h[W])){h[W]=!0,W=console;var u=v[q];W.error.call(W,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",u==null||typeof u==="boolean"||u===""?"Removing":"Updating",q,A)}}for(var T in r)!r.hasOwnProperty(T)||v!=null&&v.hasOwnProperty(T)||(T.indexOf("--")===0?g.setProperty(T,""):T==="float"?g.cssFloat="":g[T]="");for(var B in v)Q=v[B],v.hasOwnProperty(B)&&r[B]!==Q&&N9(g,B,Q)}else for(H in v)v.hasOwnProperty(H)&&N9(g,H,v[H])}function e6(g){if(g.indexOf("-")===-1)return!1;switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function u9(g){return uL.get(g)||g}function Uz(g,v){if(Dv.call(a4,v)&&a4[v])return!0;if(CL.test(v)){if(g="aria-"+v.slice(4).toLowerCase(),g=D7.hasOwnProperty(g)?g:null,g==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",v),a4[v]=!0;if(v!==g)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",v,g),a4[v]=!0}if(TL.test(v)){if(g=v.toLowerCase(),g=D7.hasOwnProperty(g)?g:null,g==null)return a4[v]=!0,!1;v!==g&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",v,g),a4[v]=!0)}return!0}function Lz(g,v){var r=[],H;for(H in v)Uz(g,H)||r.push(H);v=r.map(function(q){return"`"+q+"`"}).join(", "),r.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",v,g):1<r.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",v,g)}function Fz(g,v,r,H){if(Dv.call(I1,v)&&I1[v])return!0;var q=v.toLowerCase();if(q==="onfocusin"||q==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),I1[v]=!0;if(typeof r==="function"&&(g==="form"&&v==="action"||g==="input"&&v==="formAction"||g==="button"&&v==="formAction"))return!0;if(H!=null){if(g=H.possibleRegistrationNames,H.registrationNameDependencies.hasOwnProperty(v))return!0;if(H=g.hasOwnProperty(q)?g[q]:null,H!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",v,H),I1[v]=!0;if(k7.test(v))return console.error("Unknown event handler property `%s`. It will be ignored.",v),I1[v]=!0}else if(k7.test(v))return SL.test(v)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",v),I1[v]=!0;if(lL.test(v)||oL.test(v))return!0;if(q==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),I1[v]=!0;if(q==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),I1[v]=!0;if(q==="is"&&r!==null&&r!==void 0&&typeof r!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof r),I1[v]=!0;if(typeof r==="number"&&isNaN(r))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",v),I1[v]=!0;if(f2.hasOwnProperty(q)){if(q=f2[q],q!==v)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",v,q),I1[v]=!0}else if(v!==q)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",v,q),I1[v]=!0;switch(v){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof r){case"boolean":switch(v){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(q=v.toLowerCase().slice(0,5),q==="data-"||q==="aria-")return!0;return r?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',r,v,v,r,v):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',r,v,v,r,v,v,v),I1[v]=!0}case"function":case"symbol":return I1[v]=!0,!1;case"string":if(r==="false"||r==="true"){switch(v){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",r,v,r==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',v,r),I1[v]=!0}}return!0}function Bz(g,v,r){var H=[],q;for(q in v)Fz(g,q,v[q],r)||H.push(q);v=H.map(function(A){return"`"+A+"`"}).join(", "),H.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",v,g):1<H.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",v,g)}function c6(g){return xL.test(""+g)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":g}function Dr(){}function TA(g){return g=g.target||g.srcElement||window,g.correspondingUseElement&&(g=g.correspondingUseElement),g.nodeType===3?g.parentNode:g}function T9(g){var v=Tg(g);if(v&&(g=v.stateNode)){var r=g[B1]||null;g:switch(g=v.stateNode,v.type){case"input":if(LA(g,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),v=r.name,r.type==="radio"&&v!=null){for(r=g;r.parentNode;)r=r.parentNode;b0(v,"name"),r=r.querySelectorAll('input[name="'+Qv(""+v)+'"][type="radio"]');for(v=0;v<r.length;v++){var H=r[v];if(H!==g&&H.form===g.form){var q=H[B1]||null;if(!q)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");LA(H,q.value,q.defaultValue,q.defaultValue,q.checked,q.defaultChecked,q.type,q.name)}}for(v=0;v<r.length;v++)H=r[v],H.form===g.form&&M9(H)}break g;case"textarea":Q9(g,r.value,r.defaultValue);break g;case"select":v=r.value,v!=null&&Z4(g,!!r.multiple,v,!1)}}}function C9(g,v,r){if(fb)return g(v,r);fb=!0;try{var H=g(v);return H}finally{if(fb=!1,s4!==null||g6!==null){if(E4(),s4&&(v=s4,g=g6,g6=s4=null,T9(v),g))for(v=0;v<g.length;v++)T9(g[v])}}}function t6(g,v){var r=g.stateNode;if(r===null)return null;var H=r[B1]||null;if(H===null)return null;r=H[v];g:switch(v){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(H=!H.disabled)||(g=g.type,H=!(g==="button"||g==="input"||g==="select"||g==="textarea")),g=!H;break g;default:g=!1}if(g)return null;if(r&&typeof r!=="function")throw Error("Expected `"+v+"` listener to be a function, instead got a value of `"+typeof r+"` type.");return r}function S9(){if(n2)return n2;var g,v=eb,r=v.length,H,q="value"in Vw?Vw.value:Vw.textContent,A=q.length;for(g=0;g<r&&v[g]===q[g];g++);var W=r-g;for(H=1;H<=W&&v[r-H]===q[A-H];H++);return n2=q.slice(g,1<H?1-H:void 0)}function lO(g){var v=g.keyCode;return"charCode"in g?(g=g.charCode,g===0&&v===13&&(g=13)):g=v,g===10&&(g=13),32<=g||g===13?g:0}function oO(){return!0}function l9(){return!1}function V1(g){function v(r,H,q,A,W){this._reactName=r,this._targetInst=q,this.type=H,this.nativeEvent=A,this.target=W,this.currentTarget=null;for(var X in g)g.hasOwnProperty(X)&&(r=g[X],this[X]=r?r(A):A[X]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?oO:l9,this.isPropagationStopped=l9,this}return yg(v.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!=="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=oO)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!=="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=oO)},persist:function(){},isPersistent:oO}),v}function Iz(g){var v=this.nativeEvent;return v.getModifierState?v.getModifierState(g):(g=cL[g])?!!v[g]:!1}function CA(){return Iz}function o9(g,v){switch(g){case"keyup":return qF.indexOf(v.keyCode)!==-1;case"keydown":return v.keyCode!==y7;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x9(g){return g=g.detail,typeof g==="object"&&"data"in g?g.data:null}function Nz(g,v){switch(g){case"compositionend":return x9(v);case"keypress":if(v.which!==i7)return null;return n7=!0,f7;case"textInput":return g=v.data,g===f7&&n7?null:g;default:return null}}function Zz(g,v){if(v6)return g==="compositionend"||!db&&o9(g,v)?(g=S9(),n2=eb=Vw=null,v6=!1,g):null;switch(g){case"paste":return null;case"keypress":if(!(v.ctrlKey||v.altKey||v.metaKey)||v.ctrlKey&&v.altKey){if(v.char&&1<v.char.length)return v.char;if(v.which)return String.fromCharCode(v.which)}return null;case"compositionend":return j7&&v.locale!=="ko"?null:v.data;default:return null}}function D9(g){var v=g&&g.nodeName&&g.nodeName.toLowerCase();return v==="input"?!!PF[g.type]:v==="textarea"?!0:!1}function uz(g){if(!Ur)return!1;g="on"+g;var v=g in document;return v||(v=document.createElement("div"),v.setAttribute(g,"return;"),v=typeof v[g]==="function"),v}function m9(g,v,r,H){s4?g6?g6.push(H):g6=[H]:s4=H,v=I2(v,"onChange"),0<v.length&&(r=new e2("onChange","change",null,r,H),g.push({event:r,listeners:v}))}function Tz(g){KG(g,0)}function xO(g){var v=Cg(g);if(M9(v))return g}function k9(g,v){if(g==="change")return v}function V9(){o8&&(o8.detachEvent("onpropertychange",E9),x8=o8=null)}function E9(g){if(g.propertyName==="value"&&xO(x8)){var v=[];m9(v,x8,g,TA(g)),C9(Tz,v)}}function Cz(g,v,r){g==="focusin"?(V9(),o8=v,x8=r,o8.attachEvent("onpropertychange",E9)):g==="focusout"&&V9()}function Sz(g){if(g==="selectionchange"||g==="keyup"||g==="keydown")return xO(x8)}function lz(g,v){if(g==="click")return xO(v)}function oz(g,v){if(g==="input"||g==="change")return xO(v)}function xz(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}function p6(g,v){if(N1(g,v))return!0;if(typeof g!=="object"||g===null||typeof v!=="object"||v===null)return!1;var r=Object.keys(g),H=Object.keys(v);if(r.length!==H.length)return!1;for(H=0;H<r.length;H++){var q=r[H];if(!Dv.call(v,q)||!N1(g[q],v[q]))return!1}return!0}function _9(g){for(;g&&g.firstChild;)g=g.firstChild;return g}function y9(g,v){var r=_9(g);g=0;for(var H;r;){if(r.nodeType===3){if(H=g+r.textContent.length,g<=v&&H>=v)return{node:r,offset:v-g};g=H}g:{for(;r;){if(r.nextSibling){r=r.nextSibling;break g}r=r.parentNode}r=void 0}r=_9(r)}}function j9(g,v){return g&&v?g===v?!0:g&&g.nodeType===3?!1:v&&v.nodeType===3?j9(g,v.parentNode):("contains"in g)?g.contains(v):g.compareDocumentPosition?!!(g.compareDocumentPosition(v)&16):!1:!1}function i9(g){g=g!=null&&g.ownerDocument!=null&&g.ownerDocument.defaultView!=null?g.ownerDocument.defaultView:window;for(var v=TO(g.document);v instanceof g.HTMLIFrameElement;){try{var r=typeof v.contentWindow.location.href==="string"}catch(H){r=!1}if(r)g=v.contentWindow;else break;v=TO(g.document)}return v}function SA(g){var v=g&&g.nodeName&&g.nodeName.toLowerCase();return v&&(v==="input"&&(g.type==="text"||g.type==="search"||g.type==="tel"||g.type==="url"||g.type==="password")||v==="textarea"||g.contentEditable==="true")}function f9(g,v,r){var H=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;sb||r6==null||r6!==TO(H)||(H=r6,("selectionStart"in H)&&SA(H)?H={start:H.selectionStart,end:H.selectionEnd}:(H=(H.ownerDocument&&H.ownerDocument.defaultView||window).getSelection(),H={anchorNode:H.anchorNode,anchorOffset:H.anchorOffset,focusNode:H.focusNode,focusOffset:H.focusOffset}),D8&&p6(D8,H)||(D8=H,H=I2(ab,"onSelect"),0<H.length&&(v=new e2("onSelect","select",null,v,r),g.push({event:v,listeners:H}),v.target=r6)))}function Z5(g,v){var r={};return r[g.toLowerCase()]=v.toLowerCase(),r["Webkit"+g]="webkit"+v,r["Moz"+g]="moz"+v,r}function u5(g){if(gW[g])return gW[g];if(!w6[g])return g;var v=w6[g],r;for(r in v)if(v.hasOwnProperty(r)&&r in c7)return gW[g]=v[r];return g}function lv(g,v){s7.set(g,v),Q1(v,[g])}function Dz(g){for(var v=t2,r=0;r<g.length;r++){var H=g[r];if(typeof H==="object"&&H!==null)if(a0(H)&&H.length===2&&typeof H[0]==="string"){if(v!==t2&&v!==OW)return wW;v=OW}else return wW;else{if(typeof H==="function"||typeof H==="string"&&50<H.length||v!==t2&&v!==HW)return wW;v=HW}}return v}function lA(g,v,r,H){for(var q in g)Dv.call(g,q)&&q[0]!=="_"&&gr(q,g[q],v,r,H)}function gr(g,v,r,H,q){switch(typeof v){case"object":if(v===null){v="null";break}else{if(v.$$typeof===hr){var A=d(v.type)||"…",W=v.key;v=v.props;var X=Object.keys(v),h=X.length;if(W==null&&h===0){v="<"+A+" />";break}if(3>H||h===1&&X[0]==="children"&&W==null){v="<"+A+" … />";break}r.push([q+"  ".repeat(H)+g,"<"+A]),W!==null&&gr("key",W,r,H+1,q),g=!1;for(var Q in v)Q==="children"?v.children!=null&&(!a0(v.children)||0<v.children.length)&&(g=!0):Dv.call(v,Q)&&Q[0]!=="_"&&gr(Q,v[Q],r,H+1,q);r.push(["",g?">…</"+A+">":"/>"]);return}if(A=Object.prototype.toString.call(v),A=A.slice(8,A.length-1),A==="Array"){if(Q=Dz(v),Q===HW||Q===t2){v=JSON.stringify(v);break}else if(Q===OW){r.push([q+"  ".repeat(H)+g,""]);for(g=0;g<v.length;g++)A=v[g],gr(A[0],A[1],r,H+1,q);return}}if(A==="Promise"){if(v.status==="fulfilled"){if(A=r.length,gr(g,v.value,r,H,q),r.length>A){r=r[A],r[1]="Promise<"+(r[1]||"Object")+">";return}}else if(v.status==="rejected"&&(A=r.length,gr(g,v.reason,r,H,q),r.length>A)){r=r[A],r[1]="Rejected Promise<"+r[1]+">";return}r.push(["  ".repeat(H)+g,"Promise"]);return}A==="Object"&&(Q=Object.getPrototypeOf(v))&&typeof Q.constructor==="function"&&(A=Q.constructor.name),r.push([q+"  ".repeat(H)+g,A==="Object"?3>H?"":"…":A]),3>H&&lA(v,r,H+1,q);return}case"function":v=v.name===""?"() => {}":v.name+"() {}";break;case"string":v=v===RF?"…":JSON.stringify(v);break;case"undefined":v="undefined";break;case"boolean":v=v?"true":"false";break;default:v=String(v)}r.push([q+"  ".repeat(H)+g,v])}function n9(g,v,r,H){var q=!0;for(W in g)W in v||(r.push([p2+"  ".repeat(H)+W,"…"]),q=!1);for(var A in v)if(A in g){var W=g[A],X=v[A];if(W!==X){if(H===0&&A==="children")q="  ".repeat(H)+A,r.push([p2+q,"…"],[d2+q,"…"]);else{if(!(3<=H)){if(typeof W==="object"&&typeof X==="object"&&W!==null&&X!==null&&W.$$typeof===X.$$typeof)if(X.$$typeof===hr){if(W.type===X.type&&W.key===X.key){W=d(X.type)||"…",q="  ".repeat(H)+A,W="<"+W+" … />",r.push([p2+q,W],[d2+q,W]),q=!1;continue}}else{var h=Object.prototype.toString.call(W),Q=Object.prototype.toString.call(X);if(h===Q&&(Q==="[object Object]"||Q==="[object Array]")){h=[rR+"  ".repeat(H)+A,Q==="[object Array]"?"Array":""],r.push(h),Q=r.length,n9(W,X,r,H+1)?Q===r.length&&(h[1]="Referentially unequal but deeply equal objects. Consider memoization."):q=!1;continue}}else if(typeof W==="function"&&typeof X==="function"&&W.name===X.name&&W.length===X.length&&(h=Function.prototype.toString.call(W),Q=Function.prototype.toString.call(X),h===Q)){W=X.name===""?"() => {}":X.name+"() {}",r.push([rR+"  ".repeat(H)+A,W+" Referentially unequal function closure. Consider memoization."]);continue}}gr(A,W,r,H,p2),gr(A,X,r,H,d2)}q=!1}}else r.push([d2+"  ".repeat(H)+A,"…"]),q=!1;return q}function p1(g){ig=g&63?"Blocking":g&64?"Gesture":g&4194176?"Transition":g&62914560?"Suspense":g&2080374784?"Idle":"Other"}function vr(g,v,r,H){Q0&&(_w.start=v,_w.end=r,fr.color="warning",fr.tooltipText=H,fr.properties=null,(g=g._debugTask)?g.run(performance.measure.bind(performance,H,_w)):performance.measure(H,_w))}function DO(g,v,r){vr(g,v,r,"Reconnect")}function mO(g,v,r,H,q){var A=m(g);if(A!==null&&Q0){var{alternate:W,actualDuration:X}=g;if(W===null||W.child!==g.child)for(var h=g.child;h!==null;h=h.sibling)X-=h.actualDuration;H=0.5>X?H?"tertiary-light":"primary-light":10>X?H?"tertiary":"primary":100>X?H?"tertiary-dark":"primary-dark":"error";var Q=g.memoizedProps;X=g._debugTask,Q!==null&&W!==null&&W.memoizedProps!==Q?(h=[hF],Q=n9(W.memoizedProps,Q,h,0),1<h.length&&(Q&&!Ew&&(W.lanes&q)===0&&100<g.actualDuration?(Ew=!0,h[0]=JF,fr.color="warning",fr.tooltipText=wR):(fr.color=H,fr.tooltipText=A),fr.properties=h,_w.start=v,_w.end=r,X!=null?X.run(performance.measure.bind(performance,"​"+A,_w)):performance.measure("​"+A,_w))):X!=null?X.run(console.timeStamp.bind(console,A,v,r,$v,void 0,H)):console.timeStamp(A,v,r,$v,void 0,H)}}function oA(g,v,r,H){if(Q0){var q=m(g);if(q!==null){for(var A=null,W=[],X=0;X<H.length;X++){var h=H[X];A==null&&h.source!==null&&(A=h.source._debugTask),h=h.value,W.push(["Error",typeof h==="object"&&h!==null&&typeof h.message==="string"?String(h.message):String(h)])}g.key!==null&&gr("key",g.key,W,0,""),g.memoizedProps!==null&&lA(g.memoizedProps,W,0,""),A==null&&(A=g._debugTask),g={start:v,end:r,detail:{devtools:{color:"error",track:$v,tooltipText:g.tag===13?"Hydration failed":"Error boundary caught an error",properties:W}}},A?A.run(performance.measure.bind(performance,"​"+q,g)):performance.measure("​"+q,g)}}}function rr(g,v,r,H,q){if(q!==null){if(Q0){var A=m(g);if(A!==null){H=[];for(var W=0;W<q.length;W++){var X=q[W].value;H.push(["Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g.key!==null&&gr("key",g.key,H,0,""),g.memoizedProps!==null&&lA(g.memoizedProps,H,0,""),v={start:v,end:r,detail:{devtools:{color:"error",track:$v,tooltipText:"A lifecycle or effect errored",properties:H}}},(g=g._debugTask)?g.run(performance.measure.bind(performance,"​"+A,v)):performance.measure("​"+A,v)}}}else A=m(g),A!==null&&Q0&&(q=1>H?"secondary-light":100>H?"secondary":500>H?"secondary-dark":"error",(g=g._debugTask)?g.run(console.timeStamp.bind(console,A,v,r,$v,void 0,q)):console.timeStamp(A,v,r,$v,void 0,q))}function mz(g,v,r,H){if(Q0&&!(v<=g)){var q=(r&738197653)===r?"tertiary-dark":"primary-dark";r=(r&536870912)===r?"Prepared":(r&201326741)===r?"Hydrated":"Render",H?H.run(console.timeStamp.bind(console,r,g,v,ig,jg,q)):console.timeStamp(r,g,v,ig,jg,q)}}function e9(g,v,r,H){!Q0||v<=g||(r=(r&738197653)===r?"tertiary-dark":"primary-dark",H?H.run(console.timeStamp.bind(console,"Prewarm",g,v,ig,jg,r)):console.timeStamp("Prewarm",g,v,ig,jg,r))}function c9(g,v,r,H){!Q0||v<=g||(r=(r&738197653)===r?"tertiary-dark":"primary-dark",H?H.run(console.timeStamp.bind(console,"Suspended",g,v,ig,jg,r)):console.timeStamp("Suspended",g,v,ig,jg,r))}function kz(g,v,r,H,q,A){if(Q0&&!(v<=g)){r=[];for(var W=0;W<H.length;W++){var X=H[W].value;r.push(["Recoverable Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g={start:g,end:v,detail:{devtools:{color:"primary-dark",track:ig,trackGroup:jg,tooltipText:q?"Hydration Failed":"Recovered after Error",properties:r}}},A?A.run(performance.measure.bind(performance,"Recovered",g)):performance.measure("Recovered",g)}}function xA(g,v,r,H){!Q0||v<=g||(H?H.run(console.timeStamp.bind(console,"Errored",g,v,ig,jg,"error")):console.timeStamp("Errored",g,v,ig,jg,"error"))}function Vz(g,v,r,H){!Q0||v<=g||(H?H.run(console.timeStamp.bind(console,r,g,v,ig,jg,"secondary-light")):console.timeStamp(r,g,v,ig,jg,"secondary-light"))}function t9(g,v,r,H,q){if(Q0&&!(v<=g)){for(var A=[],W=0;W<r.length;W++){var X=r[W].value;A.push(["Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g={start:g,end:v,detail:{devtools:{color:"error",track:ig,trackGroup:jg,tooltipText:H?"Remaining Effects Errored":"Commit Errored",properties:A}}},q?q.run(performance.measure.bind(performance,"Errored",g)):performance.measure("Errored",g)}}function d6(g,v,r){!Q0||v<=g||(r?r.run(console.timeStamp.bind(console,"Animating",g,v,ig,jg,"secondary-dark")):console.timeStamp("Animating",g,v,ig,jg,"secondary-dark"))}function kO(){for(var g=H6,v=qW=H6=0;v<g;){var r=zv[v];zv[v++]=null;var H=zv[v];zv[v++]=null;var q=zv[v];zv[v++]=null;var A=zv[v];if(zv[v++]=null,H!==null&&q!==null){var W=H.pending;W===null?q.next=q:(q.next=W.next,W.next=q),H.pending=q}A!==0&&p9(r,q,A)}}function VO(g,v,r,H){zv[H6++]=g,zv[H6++]=v,zv[H6++]=r,zv[H6++]=H,qW|=H,g.lanes|=H,g=g.alternate,g!==null&&(g.lanes|=H)}function DA(g,v,r,H){return VO(g,v,r,H),EO(g)}function K1(g,v){return VO(g,null,null,v),EO(g)}function p9(g,v,r){g.lanes|=r;var H=g.alternate;H!==null&&(H.lanes|=r);for(var q=!1,A=g.return;A!==null;)A.childLanes|=r,H=A.alternate,H!==null&&(H.childLanes|=r),A.tag===22&&(g=A.stateNode,g===null||g._visibility&m8||(q=!0)),g=A,A=A.return;return g.tag===3?(A=g.stateNode,q&&v!==null&&(q=31-F1(r),g=A.hiddenUpdates,H=g[q],H===null?g[q]=[v]:H.push(v),v.lane=r|536870912),A):null}function EO(g){if(WH>SF)throw H4=WH=0,MH=VW=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");H4>lF&&(H4=0,MH=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),g.alternate===null&&(g.flags&4098)!==0&&XG(g);for(var v=g,r=v.return;r!==null;)v.alternate===null&&(v.flags&4098)!==0&&XG(g),v=r,r=v.return;return v.tag===3?v.stateNode:null}function T5(g){if(Uv===null)return g;var v=Uv(g);return v===void 0?g:v.current}function mA(g){if(Uv===null)return g;var v=Uv(g);return v===void 0?g!==null&&g!==void 0&&typeof g.render==="function"&&(v=T5(g.render),g.render!==v)?(v={$$typeof:B8,render:v},g.displayName!==void 0&&(v.displayName=g.displayName),v):g:v.current}function d9(g,v){if(Uv===null)return!1;var r=g.elementType;v=v.type;var H=!1,q=typeof v==="object"&&v!==null?v.$$typeof:null;switch(g.tag){case 1:typeof v==="function"&&(H=!0);break;case 0:typeof v==="function"?H=!0:q===wv&&(H=!0);break;case 11:q===B8?H=!0:q===wv&&(H=!0);break;case 14:case 15:q===m2?H=!0:q===wv&&(H=!0);break;default:return!1}return H&&(g=Uv(r),g!==void 0&&g===Uv(v))?!0:!1}function a9(g){Uv!==null&&typeof WeakSet==="function"&&(O6===null&&(O6=new WeakSet),O6.add(g))}function s9(g,v,r){do{var H=g,q=H.alternate,A=H.child,W=H.sibling,X=H.tag;H=H.type;var h=null;switch(X){case 0:case 15:case 1:h=H;break;case 11:h=H.render}if(Uv===null)throw Error("Expected resolveFamily to be set during hot reload.");var Q=!1;if(H=!1,h!==null&&(h=Uv(h),h!==void 0&&(r.has(h)?H=!0:v.has(h)&&(X===1?H=!0:Q=!0))),O6!==null&&(O6.has(g)||q!==null&&O6.has(q))&&(H=!0),H&&(g._debugNeedsRemount=!0),H||Q)q=K1(g,2),q!==null&&Z0(q,g,2);if(A===null||H||s9(A,v,r),W===null)break;g=W}while(1)}function Ez(g,v,r,H){this.tag=g,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=v,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=H,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,HR||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function kA(g){return g=g.prototype,!(!g||!g.isReactComponent)}function mr(g,v){var r=g.alternate;switch(r===null?(r=L(g.tag,v,g.key,g.mode),r.elementType=g.elementType,r.type=g.type,r.stateNode=g.stateNode,r._debugOwner=g._debugOwner,r._debugStack=g._debugStack,r._debugTask=g._debugTask,r._debugHookTypes=g._debugHookTypes,r.alternate=g,g.alternate=r):(r.pendingProps=v,r.type=g.type,r.flags=0,r.subtreeFlags=0,r.deletions=null,r.actualDuration=-0,r.actualStartTime=-1.1),r.flags=g.flags&65011712,r.childLanes=g.childLanes,r.lanes=g.lanes,r.child=g.child,r.memoizedProps=g.memoizedProps,r.memoizedState=g.memoizedState,r.updateQueue=g.updateQueue,v=g.dependencies,r.dependencies=v===null?null:{lanes:v.lanes,firstContext:v.firstContext,_debugThenableState:v._debugThenableState},r.sibling=g.sibling,r.index=g.index,r.ref=g.ref,r.refCleanup=g.refCleanup,r.selfBaseDuration=g.selfBaseDuration,r.treeBaseDuration=g.treeBaseDuration,r._debugInfo=g._debugInfo,r._debugNeedsRemount=g._debugNeedsRemount,r.tag){case 0:case 15:r.type=T5(g.type);break;case 1:r.type=T5(g.type);break;case 11:r.type=mA(g.type)}return r}function gX(g,v){g.flags&=65011714;var r=g.alternate;return r===null?(g.childLanes=0,g.lanes=v,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null,g.selfBaseDuration=0,g.treeBaseDuration=0):(g.childLanes=r.childLanes,g.lanes=r.lanes,g.child=r.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=r.memoizedProps,g.memoizedState=r.memoizedState,g.updateQueue=r.updateQueue,g.type=r.type,v=r.dependencies,g.dependencies=v===null?null:{lanes:v.lanes,firstContext:v.firstContext,_debugThenableState:v._debugThenableState},g.selfBaseDuration=r.selfBaseDuration,g.treeBaseDuration=r.treeBaseDuration),g}function VA(g,v,r,H,q,A){var W=0,X=g;if(typeof g==="function")kA(g)&&(W=1),X=T5(X);else if(typeof g==="string")W=vg(),W=tU(g,r,W)?26:g==="html"||g==="head"||g==="body"?27:5;else g:switch(g){case Cb:return v=L(31,r,v,q),v.elementType=Cb,v.lanes=A,v;case e4:return C5(r.children,q,A,v);case D2:W=8,q|=z1,q|=kv;break;case Nb:return g=r,H=q,typeof g.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof g.id),v=L(12,g,v,H|xg),v.elementType=Nb,v.lanes=A,v.stateNode={effectDuration:0,passiveEffectDuration:0},v;case ub:return v=L(13,r,v,q),v.elementType=ub,v.lanes=A,v;case Tb:return v=L(19,r,v,q),v.elementType=Tb,v.lanes=A,v;default:if(typeof g==="object"&&g!==null)switch(g.$$typeof){case Jr:W=10;break g;case Zb:W=9;break g;case B8:W=11,X=mA(X);break g;case m2:W=14;break g;case wv:W=16,X=null;break g}if(X="",g===void 0||typeof g==="object"&&g!==null&&Object.keys(g).length===0)X+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";g===null?r="null":a0(g)?r="array":g!==void 0&&g.$$typeof===hr?(r="<"+(d(g.type)||"Unknown")+" />",X=" Did you accidentally export a JSX literal instead of a component?"):r=typeof g,(W=H?wg(H):null)&&(X+=`

Check the render method of \``+W+"`."),W=29,r=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(r+"."+X)),X=null}return v=L(W,r,v,q),v.elementType=g,v.type=X,v.lanes=A,v._debugOwner=H,v}function _O(g,v,r){return v=VA(g.type,g.key,g.props,g._owner,v,r),v._debugOwner=g._owner,v._debugStack=g._debugStack,v._debugTask=g._debugTask,v}function C5(g,v,r,H){return g=L(7,g,H,v),g.lanes=r,g}function EA(g,v,r){return g=L(6,g,null,v),g.lanes=r,g}function vX(g){var v=L(18,null,null,Ig);return v.stateNode=g,v}function _A(g,v,r){return v=L(4,g.children!==null?g.children:[],g.key,v),v.lanes=r,v.stateNode={containerInfo:g.containerInfo,pendingChildren:null,implementation:g.implementation},v}function d1(g,v){if(typeof g==="object"&&g!==null){var r=AW.get(g);if(r!==void 0)return r;return v={value:g,source:v,stack:o0(v)},AW.set(g,v),v}return{value:g,source:v,stack:o0(v)}}function kr(g,v){Lw(),q6[A6++]=k8,q6[A6++]=a2,a2=g,k8=v}function rX(g,v,r){Lw(),Lv[Fv++]=er,Lv[Fv++]=cr,Lv[Fv++]=i5,i5=g;var H=er;g=cr;var q=32-F1(H)-1;H&=~(1<<q),r+=1;var A=32-F1(v)+q;if(30<A){var W=q-q%5;A=(H&(1<<W)-1).toString(32),H>>=W,q-=W,er=1<<32-F1(v)+q|r<<q|H,cr=A+g}else er=1<<A|r<<q|H,cr=g}function yA(g){Lw(),g.return!==null&&(kr(g,1),rX(g,1,0))}function jA(g){for(;g===a2;)a2=q6[--A6],q6[A6]=null,k8=q6[--A6],q6[A6]=null;for(;g===i5;)i5=Lv[--Fv],Lv[Fv]=null,cr=Lv[--Fv],Lv[Fv]=null,er=Lv[--Fv],Lv[Fv]=null}function wX(){return Lw(),i5!==null?{id:er,overflow:cr}:null}function HX(g,v){Lw(),Lv[Fv++]=er,Lv[Fv++]=cr,Lv[Fv++]=i5,er=v.id,cr=v.overflow,i5=g}function Lw(){eg||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function S5(g,v){if(g.return===null){if(qv===null)qv={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:v};else{if(qv.fiber!==g)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");qv.distanceFromLeaf>v&&(qv.distanceFromLeaf=v)}return qv}var r=S5(g.return,v+1).children;if(0<r.length&&r[r.length-1].fiber===g)return r=r[r.length-1],r.distanceFromLeaf>v&&(r.distanceFromLeaf=v),r;return v={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:v},r.push(v),v}function OX(){eg&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function yO(g,v){Lr||(g=S5(g,0),g.serverProps=null,v!==null&&(v=mG(v),g.serverTail.push(v)))}function Fw(g){var v=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,r="",H=qv;throw H!==null&&(qv=null,r=ZA(H)),a6(d1(Error("Hydration failed because the server rendered "+(v?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+r),g)),PW}function qX(g){var{stateNode:v,type:r,memoizedProps:H}=g;switch(v[Y1]=g,v[B1]=H,bb(r,H),r){case"dialog":cg("cancel",v),cg("close",v);break;case"iframe":case"object":case"embed":cg("load",v);break;case"video":case"audio":for(r=0;r<XH.length;r++)cg(XH[r],v);break;case"source":cg("error",v);break;case"img":case"image":case"link":cg("error",v),cg("load",v);break;case"details":cg("toggle",v);break;case"input":Uw("input",H),cg("invalid",v),X9(v,H),Y9(v,H.value,H.defaultValue,H.checked,H.defaultChecked,H.type,H.name,!0);break;case"option":G9(v,H);break;case"select":Uw("select",H),cg("invalid",v),h9(v,H);break;case"textarea":Uw("textarea",H),cg("invalid",v),J9(v,H),K9(v,H.value,H.defaultValue,H.children)}r=H.children,typeof r!=="string"&&typeof r!=="number"&&typeof r!=="bigint"||v.textContent===""+r||H.suppressHydrationWarning===!0||LG(v.textContent,r)?(H.popover!=null&&(cg("beforetoggle",v),cg("toggle",v)),H.onScroll!=null&&cg("scroll",v),H.onScrollEnd!=null&&cg("scrollend",v),H.onClick!=null&&(v.onclick=Dr),v=!0):v=!1,v||Fw(g,!0)}function AX(g){for(G1=g.return;G1;)switch(G1.tag){case 5:case 31:case 13:Bv=!1;return;case 27:case 3:Bv=!0;return;default:G1=G1.return}}function C4(g){if(g!==G1)return!1;if(!eg)return AX(g),eg=!0,!1;var v=g.tag,r;if(r=v!==3&&v!==27){if(r=v===5)r=g.type,r=!(r!=="form"&&r!=="button")||Gb(g.type,g.memoizedProps);r=!r}if(r&&K0){for(r=K0;r;){var H=S5(g,0),q=mG(r);H.serverTail.push(q),r=q.type==="Suspense"?Qb(r):rv(r.nextSibling)}Fw(g)}if(AX(g),v===13){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");K0=Qb(g)}else if(v===31){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");K0=Qb(g)}else v===27?(v=K0,ow(g.type)?(g=dW,dW=null,K0=g):K0=v):K0=G1?rv(g.stateNode.nextSibling):null;return!0}function l5(){K0=G1=null,Lr=eg=!1}function iA(){var g=jw;return g!==null&&(C1===null?C1=g:C1.push.apply(C1,g),jw=null),g}function a6(g){jw===null?jw=[g]:jw.push(g)}function fA(){var g=qv;if(g!==null){qv=null;for(var v=ZA(g);0<g.children.length;)g=g.children[0];Ag(g.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",v)})}}function jO(){P6=s2=null,b6=!1}function Bw(g,v,r){Kg(bW,v._currentValue,g),v._currentValue=r,Kg(WW,v._currentRenderer,g),v._currentRenderer!==void 0&&v._currentRenderer!==null&&v._currentRenderer!==qR&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),v._currentRenderer=qR}function Vr(g,v){g._currentValue=bW.current;var r=WW.current;Jg(WW,v),g._currentRenderer=r,Jg(bW,v)}function nA(g,v,r){for(;g!==null;){var H=g.alternate;if((g.childLanes&v)!==v?(g.childLanes|=v,H!==null&&(H.childLanes|=v)):H!==null&&(H.childLanes&v)!==v&&(H.childLanes|=v),g===r)break;g=g.return}g!==r&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function eA(g,v,r,H){var q=g.child;q!==null&&(q.return=g);for(;q!==null;){var A=q.dependencies;if(A!==null){var W=q.child;A=A.firstContext;g:for(;A!==null;){var X=A;A=q;for(var h=0;h<v.length;h++)if(X.context===v[h]){A.lanes|=r,X=A.alternate,X!==null&&(X.lanes|=r),nA(A.return,r,g),H||(W=null);break g}A=X.next}}else if(q.tag===18){if(W=q.return,W===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");W.lanes|=r,A=W.alternate,A!==null&&(A.lanes|=r),nA(W,r,g),W=null}else W=q.child;if(W!==null)W.return=q;else for(W=q;W!==null;){if(W===g){W=null;break}if(q=W.sibling,q!==null){q.return=W.return,W=q;break}W=W.return}q=W}}function S4(g,v,r,H){g=null;for(var q=v,A=!1;q!==null;){if(!A){if((q.flags&524288)!==0)A=!0;else if((q.flags&262144)!==0)break}if(q.tag===10){var W=q.alternate;if(W===null)throw Error("Should have a current fiber. This is a bug in React.");if(W=W.memoizedProps,W!==null){var X=q.type;N1(q.pendingProps.value,W.value)||(g!==null?g.push(X):g=[X])}}else if(q===k2.current){if(W=q.alternate,W===null)throw Error("Should have a current fiber. This is a bug in React.");W.memoizedState.memoizedState!==q.memoizedState.memoizedState&&(g!==null?g.push(JH):g=[JH])}q=q.return}g!==null&&eA(v,g,r,H),v.flags|=262144}function iO(g){for(g=g.firstContext;g!==null;){if(!N1(g.context._currentValue,g.memoizedValue))return!0;g=g.next}return!1}function o5(g){s2=g,P6=null,g=g.dependencies,g!==null&&(g.firstContext=null)}function U0(g){return b6&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),PX(s2,g)}function fO(g,v){return s2===null&&o5(g),PX(g,v)}function PX(g,v){var r=v._currentValue;if(v={context:v,memoizedValue:r,next:null},P6===null){if(g===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");P6=v,g.dependencies={lanes:0,firstContext:v,_debugThenableState:null},g.flags|=524288}else P6=P6.next=v;return r}function cA(){return{controller:new $F,data:new Map,refCount:0}}function x5(g){g.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),g.refCount++}function s6(g){g.refCount--,0>g.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),g.refCount===0&&zF(UF,function(){g.controller.abort()})}function wr(g,v,r){if((g&127)!==0)0>Fr&&(Fr=f0(),E8=gq(v),MW=v,r!=null&&(XW=m(r)),(ag&(g1|bv))!==q1&&(u0=!0,nw=V8),g=$8(),v=K8(),g!==W6||v!==_8?W6=-1.1:v!==null&&(nw=V8),n5=g,_8=v);else if((g&4194048)!==0&&0>Iv&&(Iv=f0(),y8=gq(v),AR=v,r!=null&&(PR=m(r)),0>dr)){if(g=$8(),v=K8(),g!==cw||v!==e5)cw=-1.1;ew=g,e5=v}}function _z(g){if(0>Fr){Fr=f0(),E8=g._debugTask!=null?g._debugTask:null,(ag&(g1|bv))!==q1&&(nw=V8);var v=$8(),r=K8();v!==W6||r!==_8?W6=-1.1:r!==null&&(nw=V8),n5=v,_8=r}if(0>Iv&&(Iv=f0(),y8=g._debugTask!=null?g._debugTask:null,0>dr)){if(g=$8(),v=K8(),g!==cw||v!==e5)cw=-1.1;ew=g,e5=v}}function Er(){var g=f5;return f5=0,g}function nO(g){var v=f5;return f5=g,v}function g8(g){var v=f5;return f5+=g,v}function eO(){Fg=Ug=-1.1}function a1(){var g=Ug;return Ug=-1.1,g}function s1(g){0<=g&&(Ug=g)}function Hr(){var g=B0;return B0=-0,g}function Or(g){0<=g&&(B0=g)}function qr(){var g=L0;return L0=null,g}function Ar(){var g=u0;return u0=!1,g}function tA(g){Z1=f0(),0>g.actualStartTime&&(g.actualStartTime=Z1)}function pA(g){if(0<=Z1){var v=f0()-Z1;g.actualDuration+=v,g.selfBaseDuration=v,Z1=-1}}function bX(g){if(0<=Z1){var v=f0()-Z1;g.actualDuration+=v,Z1=-1}}function Pr(){if(0<=Z1){var g=f0(),v=g-Z1;Z1=-1,f5+=v,B0+=v,Fg=g}}function WX(g){L0===null&&(L0=[]),L0.push(g),pr===null&&(pr=[]),pr.push(g)}function br(){Z1=f0(),0>Ug&&(Ug=Z1)}function v8(g){for(var v=g.child;v;)g.actualDuration+=v.actualDuration,v=v.sibling}function yz(g,v){if(i8===null){var r=i8=[];GW=0,c5=Ob(),M6={status:"pending",value:void 0,then:function(H){r.push(H)}}}return GW++,v.then(MX,MX),v}function MX(){if(--GW===0&&(-1<Iv||(dr=-1.1),i8!==null)){M6!==null&&(M6.status="fulfilled");var g=i8;i8=null,c5=0,M6=null;for(var v=0;v<g.length;v++)(0,g[v])()}}function jz(g,v){var r=[],H={status:"pending",value:null,reason:null,then:function(q){r.push(q)}};return g.then(function(){H.status="fulfilled",H.value=v;for(var q=0;q<r.length;q++)(0,r[q])(v)},function(q){H.status="rejected",H.reason=q;for(q=0;q<r.length;q++)(0,r[q])(void 0)}),H}function dA(){var g=t5.current;return g!==null?g:G0.pooledCache}function cO(g,v){v===null?Kg(t5,t5.current,g):Kg(t5,v.pool,g)}function XX(){var g=dA();return g===null?null:{parent:i0._currentValue,pool:g}}function YX(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function GX(g){return g=g.status,g==="fulfilled"||g==="rejected"}function RX(g,v,r){D.actQueue!==null&&(D.didUsePromise=!0);var H=g.thenables;if(r=H[r],r===void 0?H.push(v):r!==v&&(g.didWarnAboutUncachedPromise||(g.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),v.then(Dr,Dr),v=r),v._debugInfo===void 0){g=performance.now(),H=v.displayName;var q={name:typeof H==="string"?H:"Promise",start:g,end:g,value:v};v._debugInfo=[{awaited:q}],v.status!=="fulfilled"&&v.status!=="rejected"&&(g=function(){q.end=performance.now()},v.then(g,g))}switch(v.status){case"fulfilled":return v.value;case"rejected":throw g=v.reason,JX(g),g;default:if(typeof v.status==="string")v.then(Dr,Dr);else{if(g=G0,g!==null&&100<g.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");g=v,g.status="pending",g.then(function(A){if(v.status==="pending"){var W=v;W.status="fulfilled",W.value=A}},function(A){if(v.status==="pending"){var W=v;W.status="rejected",W.reason=A}})}switch(v.status){case"fulfilled":return v.value;case"rejected":throw g=v.reason,JX(g),g}throw d5=v,d8=!0,X6}}function Iw(g){try{return IF(g)}catch(v){if(v!==null&&typeof v==="object"&&typeof v.then==="function")throw d5=v,d8=!0,X6;throw v}}function hX(){if(d5===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var g=d5;return d5=null,d8=!1,g}function JX(g){if(g===X6||g===Pq)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function W1(g){var v=Dg;return g!=null&&(Dg=v===null?g:v.concat(g)),v}function aA(){var g=Dg;if(g!=null){for(var v=g.length-1;0<=v;v--)if(g[v].name!=null){var r=g[v].debugTask;if(r!=null)return r}}return null}function tO(g,v,r){for(var H=Object.keys(g.props),q=0;q<H.length;q++){var A=H[q];if(A!=="children"&&A!=="key"){v===null&&(v=_O(g,r.mode,0),v._debugInfo=Dg,v.return=r),Ag(v,function(W){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",W)},A);break}}}function pO(g){var v=a8;return a8+=1,Y6===null&&(Y6=YX()),RX(Y6,g,v)}function r8(g,v){v=v.props.ref,g.ref=v!==void 0?v:null}function QX(g,v){if(v.$$typeof===OL)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw g=Object.prototype.toString.call(v),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}function dO(g,v){var r=aA();r!==null?r.run(QX.bind(null,g,v)):QX(g,v)}function KX(g,v){var r=m(g)||"Component";ZR[r]||(ZR[r]=!0,v=v.displayName||v.name||"Component",g.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,v,v,v):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,v,v,r,v,r))}function aO(g,v){var r=aA();r!==null?r.run(KX.bind(null,g,v)):KX(g,v)}function $X(g,v){var r=m(g)||"Component";uR[r]||(uR[r]=!0,v=String(v),g.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,v):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,r,v,r))}function sO(g,v){var r=aA();r!==null?r.run($X.bind(null,g,v)):$X(g,v)}function zX(g){function v(F,I){if(g){var Z=F.deletions;Z===null?(F.deletions=[I],F.flags|=16):Z.push(I)}}function r(F,I){if(!g)return null;for(;I!==null;)v(F,I),I=I.sibling;return null}function H(F){for(var I=new Map;F!==null;)F.key!==null?I.set(F.key,F):I.set(F.index,F),F=F.sibling;return I}function q(F,I){return F=mr(F,I),F.index=0,F.sibling=null,F}function A(F,I,Z){if(F.index=Z,!g)return F.flags|=1048576,I;if(Z=F.alternate,Z!==null)return Z=Z.index,Z<I?(F.flags|=67108866,I):Z;return F.flags|=67108866,I}function W(F){return g&&F.alternate===null&&(F.flags|=67108866),F}function X(F,I,Z,k){if(I===null||I.tag!==6)return I=EA(Z,F.mode,k),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;return I=q(I,Z),I.return=F,I._debugInfo=Dg,I}function h(F,I,Z,k){var Og=Z.type;if(Og===e4)return I=u(F,I,Z.props.children,k,Z.key),tO(Z,I,F),I;if(I!==null&&(I.elementType===Og||d9(I,Z)||typeof Og==="object"&&Og!==null&&Og.$$typeof===wv&&Iw(Og)===I.type))return I=q(I,Z.props),r8(I,Z),I.return=F,I._debugOwner=Z._owner,I._debugInfo=Dg,I;return I=_O(Z,F.mode,k),r8(I,Z),I.return=F,I._debugInfo=Dg,I}function Q(F,I,Z,k){if(I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation)return I=_A(Z,F.mode,k),I.return=F,I._debugInfo=Dg,I;return I=q(I,Z.children||[]),I.return=F,I._debugInfo=Dg,I}function u(F,I,Z,k,Og){if(I===null||I.tag!==7)return I=C5(Z,F.mode,k,Og),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;return I=q(I,Z),I.return=F,I._debugInfo=Dg,I}function T(F,I,Z){if(typeof I==="string"&&I!==""||typeof I==="number"||typeof I==="bigint")return I=EA(""+I,F.mode,Z),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;if(typeof I==="object"&&I!==null){switch(I.$$typeof){case hr:return Z=_O(I,F.mode,Z),r8(Z,I),Z.return=F,F=W1(I._debugInfo),Z._debugInfo=Dg,Dg=F,Z;case n4:return I=_A(I,F.mode,Z),I.return=F,I._debugInfo=Dg,I;case wv:var k=W1(I._debugInfo);return I=Iw(I),F=T(F,I,Z),Dg=k,F}if(a0(I)||rg(I))return Z=C5(I,F.mode,Z,null),Z.return=F,Z._debugOwner=F,Z._debugTask=F._debugTask,F=W1(I._debugInfo),Z._debugInfo=Dg,Dg=F,Z;if(typeof I.then==="function")return k=W1(I._debugInfo),F=T(F,pO(I),Z),Dg=k,F;if(I.$$typeof===Jr)return T(F,fO(F,I),Z);dO(F,I)}return typeof I==="function"&&aO(F,I),typeof I==="symbol"&&sO(F,I),null}function B(F,I,Z,k){var Og=I!==null?I.key:null;if(typeof Z==="string"&&Z!==""||typeof Z==="number"||typeof Z==="bigint")return Og!==null?null:X(F,I,""+Z,k);if(typeof Z==="object"&&Z!==null){switch(Z.$$typeof){case hr:return Z.key===Og?(Og=W1(Z._debugInfo),F=h(F,I,Z,k),Dg=Og,F):null;case n4:return Z.key===Og?Q(F,I,Z,k):null;case wv:return Og=W1(Z._debugInfo),Z=Iw(Z),F=B(F,I,Z,k),Dg=Og,F}if(a0(Z)||rg(Z)){if(Og!==null)return null;return Og=W1(Z._debugInfo),F=u(F,I,Z,k,null),Dg=Og,F}if(typeof Z.then==="function")return Og=W1(Z._debugInfo),F=B(F,I,pO(Z),k),Dg=Og,F;if(Z.$$typeof===Jr)return B(F,I,fO(F,Z),k);dO(F,Z)}return typeof Z==="function"&&aO(F,Z),typeof Z==="symbol"&&sO(F,Z),null}function o(F,I,Z,k,Og){if(typeof k==="string"&&k!==""||typeof k==="number"||typeof k==="bigint")return F=F.get(Z)||null,X(I,F,""+k,Og);if(typeof k==="object"&&k!==null){switch(k.$$typeof){case hr:return Z=F.get(k.key===null?Z:k.key)||null,F=W1(k._debugInfo),I=h(I,Z,k,Og),Dg=F,I;case n4:return F=F.get(k.key===null?Z:k.key)||null,Q(I,F,k,Og);case wv:var Zg=W1(k._debugInfo);return k=Iw(k),I=o(F,I,Z,k,Og),Dg=Zg,I}if(a0(k)||rg(k))return Z=F.get(Z)||null,F=W1(k._debugInfo),I=u(I,Z,k,Og,null),Dg=F,I;if(typeof k.then==="function")return Zg=W1(k._debugInfo),I=o(F,I,Z,pO(k),Og),Dg=Zg,I;if(k.$$typeof===Jr)return o(F,I,Z,fO(I,k),Og);dO(I,k)}return typeof k==="function"&&aO(I,k),typeof k==="symbol"&&sO(I,k),null}function gg(F,I,Z,k){if(typeof Z!=="object"||Z===null)return k;switch(Z.$$typeof){case hr:case n4:z(F,I,Z);var Og=Z.key;if(typeof Og!=="string")break;if(k===null){k=new Set,k.add(Og);break}if(!k.has(Og)){k.add(Og);break}Ag(I,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",Og)});break;case wv:Z=Iw(Z),gg(F,I,Z,k)}return k}function bg(F,I,Z,k){for(var Og=null,Zg=null,$g=null,hg=I,lg=I=0,$0=null;hg!==null&&lg<Z.length;lg++){hg.index>lg?($0=hg,hg=null):$0=hg.sibling;var V0=B(F,hg,Z[lg],k);if(V0===null){hg===null&&(hg=$0);break}Og=gg(F,V0,Z[lg],Og),g&&hg&&V0.alternate===null&&v(F,hg),I=A(V0,I,lg),$g===null?Zg=V0:$g.sibling=V0,$g=V0,hg=$0}if(lg===Z.length)return r(F,hg),eg&&kr(F,lg),Zg;if(hg===null){for(;lg<Z.length;lg++)hg=T(F,Z[lg],k),hg!==null&&(Og=gg(F,hg,Z[lg],Og),I=A(hg,I,lg),$g===null?Zg=hg:$g.sibling=hg,$g=hg);return eg&&kr(F,lg),Zg}for(hg=H(hg);lg<Z.length;lg++)$0=o(hg,F,lg,Z[lg],k),$0!==null&&(Og=gg(F,$0,Z[lg],Og),g&&$0.alternate!==null&&hg.delete($0.key===null?lg:$0.key),I=A($0,I,lg),$g===null?Zg=$0:$g.sibling=$0,$g=$0);return g&&hg.forEach(function(qw){return v(F,qw)}),eg&&kr(F,lg),Zg}function J0(F,I,Z,k){if(Z==null)throw Error("An iterable object provided no iterator.");for(var Og=null,Zg=null,$g=I,hg=I=0,lg=null,$0=null,V0=Z.next();$g!==null&&!V0.done;hg++,V0=Z.next()){$g.index>hg?(lg=$g,$g=null):lg=$g.sibling;var qw=B(F,$g,V0.value,k);if(qw===null){$g===null&&($g=lg);break}$0=gg(F,qw,V0.value,$0),g&&$g&&qw.alternate===null&&v(F,$g),I=A(qw,I,hg),Zg===null?Og=qw:Zg.sibling=qw,Zg=qw,$g=lg}if(V0.done)return r(F,$g),eg&&kr(F,hg),Og;if($g===null){for(;!V0.done;hg++,V0=Z.next())$g=T(F,V0.value,k),$g!==null&&($0=gg(F,$g,V0.value,$0),I=A($g,I,hg),Zg===null?Og=$g:Zg.sibling=$g,Zg=$g);return eg&&kr(F,hg),Og}for($g=H($g);!V0.done;hg++,V0=Z.next())lg=o($g,F,hg,V0.value,k),lg!==null&&($0=gg(F,lg,V0.value,$0),g&&lg.alternate!==null&&$g.delete(lg.key===null?hg:lg.key),I=A(lg,I,hg),Zg===null?Og=lg:Zg.sibling=lg,Zg=lg);return g&&$g.forEach(function(pF){return v(F,pF)}),eg&&kr(F,hg),Og}function tg(F,I,Z,k){if(typeof Z==="object"&&Z!==null&&Z.type===e4&&Z.key===null&&(tO(Z,null,F),Z=Z.props.children),typeof Z==="object"&&Z!==null){switch(Z.$$typeof){case hr:var Og=W1(Z._debugInfo);g:{for(var Zg=Z.key;I!==null;){if(I.key===Zg){if(Zg=Z.type,Zg===e4){if(I.tag===7){r(F,I.sibling),k=q(I,Z.props.children),k.return=F,k._debugOwner=Z._owner,k._debugInfo=Dg,tO(Z,k,F),F=k;break g}}else if(I.elementType===Zg||d9(I,Z)||typeof Zg==="object"&&Zg!==null&&Zg.$$typeof===wv&&Iw(Zg)===I.type){r(F,I.sibling),k=q(I,Z.props),r8(k,Z),k.return=F,k._debugOwner=Z._owner,k._debugInfo=Dg,F=k;break g}r(F,I);break}else v(F,I);I=I.sibling}Z.type===e4?(k=C5(Z.props.children,F.mode,k,Z.key),k.return=F,k._debugOwner=F,k._debugTask=F._debugTask,k._debugInfo=Dg,tO(Z,k,F),F=k):(k=_O(Z,F.mode,k),r8(k,Z),k.return=F,k._debugInfo=Dg,F=k)}return F=W(F),Dg=Og,F;case n4:g:{Og=Z;for(Z=Og.key;I!==null;){if(I.key===Z)if(I.tag===4&&I.stateNode.containerInfo===Og.containerInfo&&I.stateNode.implementation===Og.implementation){r(F,I.sibling),k=q(I,Og.children||[]),k.return=F,F=k;break g}else{r(F,I);break}else v(F,I);I=I.sibling}k=_A(Og,F.mode,k),k.return=F,F=k}return W(F);case wv:return Og=W1(Z._debugInfo),Z=Iw(Z),F=tg(F,I,Z,k),Dg=Og,F}if(a0(Z))return Og=W1(Z._debugInfo),F=bg(F,I,Z,k),Dg=Og,F;if(rg(Z)){if(Og=W1(Z._debugInfo),Zg=rg(Z),typeof Zg!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var $g=Zg.call(Z);if($g===Z){if(F.tag!==0||Object.prototype.toString.call(F.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call($g)!=="[object Generator]")IR||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),IR=!0}else Z.entries!==Zg||QW||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),QW=!0);return F=J0(F,I,$g,k),Dg=Og,F}if(typeof Z.then==="function")return Og=W1(Z._debugInfo),F=tg(F,I,pO(Z),k),Dg=Og,F;if(Z.$$typeof===Jr)return tg(F,I,fO(F,Z),k);dO(F,Z)}if(typeof Z==="string"&&Z!==""||typeof Z==="number"||typeof Z==="bigint")return Og=""+Z,I!==null&&I.tag===6?(r(F,I.sibling),k=q(I,Og),k.return=F,F=k):(r(F,I),k=EA(Og,F.mode,k),k.return=F,k._debugOwner=F,k._debugTask=F._debugTask,k._debugInfo=Dg,F=k),W(F);return typeof Z==="function"&&aO(F,Z),typeof Z==="symbol"&&sO(F,Z),r(F,I)}return function(F,I,Z,k){var Og=Dg;Dg=null;try{a8=0;var Zg=tg(F,I,Z,k);return Y6=null,Zg}catch($0){if($0===X6||$0===Pq)throw $0;var $g=L(29,$0,null,F.mode);$g.lanes=k,$g.return=F;var hg=$g._debugInfo=Dg;if($g._debugOwner=F._debugOwner,$g._debugTask=F._debugTask,hg!=null){for(var lg=hg.length-1;0<=lg;lg--)if(typeof hg[lg].stack==="string"){$g._debugOwner=hg[lg],$g._debugTask=hg[lg].debugTask;break}}return $g}finally{Dg=Og}}}function UX(g,v){var r=a0(g);return g=!r&&typeof rg(g)==="function",r||g?(r=r?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",r,v,r),!1):!0}function sA(g){g.updateQueue={baseState:g.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gP(g,v){g=g.updateQueue,v.updateQueue===g&&(v.updateQueue={baseState:g.baseState,firstBaseUpdate:g.firstBaseUpdate,lastBaseUpdate:g.lastBaseUpdate,shared:g.shared,callbacks:null})}function Nw(g){return{lane:g,tag:CR,payload:null,callback:null,next:null}}function Zw(g,v,r){var H=g.updateQueue;if(H===null)return null;if(H=H.shared,$W===H&&!oR){var q=m(g);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,q),oR=!0}if((ag&g1)!==q1)return q=H.pending,q===null?v.next=v:(v.next=q.next,q.next=v),H.pending=v,v=EO(g),p9(g,null,r),v;return VO(g,H,v,r),EO(g)}function w8(g,v,r){if(v=v.updateQueue,v!==null&&(v=v.shared,(r&4194048)!==0)){var H=v.lanes;H&=g.pendingLanes,r|=H,v.lanes=r,F5(g,r)}}function g2(g,v){var{updateQueue:r,alternate:H}=g;if(H!==null&&(H=H.updateQueue,r===H)){var q=null,A=null;if(r=r.firstBaseUpdate,r!==null){do{var W={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};A===null?q=A=W:A=A.next=W,r=r.next}while(r!==null);A===null?q=A=v:A=A.next=v}else q=A=v;r={baseState:H.baseState,firstBaseUpdate:q,lastBaseUpdate:A,shared:H.shared,callbacks:H.callbacks},g.updateQueue=r;return}g=r.lastBaseUpdate,g===null?r.firstBaseUpdate=v:g.next=v,r.lastBaseUpdate=v}function H8(){if(zW){var g=M6;if(g!==null)throw g}}function O8(g,v,r,H){zW=!1;var q=g.updateQueue;tw=!1,$W=q.shared;var{firstBaseUpdate:A,lastBaseUpdate:W}=q,X=q.shared.pending;if(X!==null){q.shared.pending=null;var h=X,Q=h.next;h.next=null,W===null?A=Q:W.next=Q,W=h;var u=g.alternate;u!==null&&(u=u.updateQueue,X=u.lastBaseUpdate,X!==W&&(X===null?u.firstBaseUpdate=Q:X.next=Q,u.lastBaseUpdate=h))}if(A!==null){var T=q.baseState;W=0,u=Q=h=null,X=A;do{var B=X.lane&-536870913,o=B!==X.lane;if(o?(mg&B)===B:(H&B)===B){B!==0&&B===c5&&(zW=!0),u!==null&&(u=u.next={lane:0,tag:X.tag,payload:X.payload,callback:null,next:null});g:{B=g;var gg=X,bg=v,J0=r;switch(gg.tag){case SR:if(gg=gg.payload,typeof gg==="function"){b6=!0;var tg=gg.call(J0,T,bg);if(B.mode&z1){R0(!0);try{gg.call(J0,T,bg)}finally{R0(!1)}}b6=!1,T=tg;break g}T=gg;break g;case KW:B.flags=B.flags&-65537|128;case CR:if(tg=gg.payload,typeof tg==="function"){if(b6=!0,gg=tg.call(J0,T,bg),B.mode&z1){R0(!0);try{tg.call(J0,T,bg)}finally{R0(!1)}}b6=!1}else gg=tg;if(gg===null||gg===void 0)break g;T=yg({},T,gg);break g;case lR:tw=!0}}B=X.callback,B!==null&&(g.flags|=64,o&&(g.flags|=8192),o=q.callbacks,o===null?q.callbacks=[B]:o.push(B))}else o={lane:B,tag:X.tag,payload:X.payload,callback:X.callback,next:null},u===null?(Q=u=o,h=T):u=u.next=o,W|=B;if(X=X.next,X===null)if(X=q.shared.pending,X===null)break;else o=X,X=o.next,o.next=null,q.lastBaseUpdate=o,q.shared.pending=null}while(1);u===null&&(h=T),q.baseState=h,q.firstBaseUpdate=Q,q.lastBaseUpdate=u,A===null&&(q.shared.lanes=0),aw|=W,g.lanes=W,g.memoizedState=T}$W=null}function LX(g,v){if(typeof g!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+g);g.call(v)}function iz(g,v){var r=g.shared.hiddenCallbacks;if(r!==null)for(g.shared.hiddenCallbacks=null,g=0;g<r.length;g++)LX(r[g],v)}function FX(g,v){var r=g.callbacks;if(r!==null)for(g.callbacks=null,g=0;g<r.length;g++)LX(r[g],v)}function BX(g,v){var r=Nr;Kg(Wq,r,g),Kg(G6,v,g),Nr=r|v.baseLanes}function vP(g){Kg(Wq,Nr,g),Kg(G6,G6.current,g)}function rP(g){Nr=Wq.current,Jg(G6,g),Jg(Wq,g)}function uw(g){var v=g.alternate;Kg(k0,k0.current&R6,g),Kg(Av,g,g),Nv===null&&(v===null||G6.current!==null?Nv=g:v.memoizedState!==null&&(Nv=g))}function wP(g){Kg(k0,k0.current,g),Kg(Av,g,g),Nv===null&&(Nv=g)}function IX(g){g.tag===22?(Kg(k0,k0.current,g),Kg(Av,g,g),Nv===null&&(Nv=g)):Tw(g)}function Tw(g){Kg(k0,k0.current,g),Kg(Av,Av.current,g)}function gv(g){Jg(Av,g),Nv===g&&(Nv=null),Jg(k0,g)}function v2(g){for(var v=g;v!==null;){if(v.tag===13){var r=v.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||hb(r)||Jb(r)))return v}else if(v.tag===19&&(v.memoizedProps.revealOrder==="forwards"||v.memoizedProps.revealOrder==="backwards"||v.memoizedProps.revealOrder==="unstable_legacy-backwards"||v.memoizedProps.revealOrder==="together")){if((v.flags&128)!==0)return v}else if(v.child!==null){v.child.return=v,v=v.child;continue}if(v===g)break;for(;v.sibling===null;){if(v.return===null||v.return===g)return null;v=v.return}v.sibling.return=v.return,v=v.sibling}return null}function _g(){var g=x;uv===null?uv=[g]:uv.push(g)}function f(){var g=x;if(uv!==null&&(vw++,uv[vw]!==g)){var v=m(Ng);if(!xR.has(v)&&(xR.add(v),uv!==null)){for(var r="",H=0;H<=vw;H++){var q=uv[H],A=H===vw?g:q;for(q=H+1+". "+q;30>q.length;)q+=" ";q+=A+`
`,r+=q}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,v,r)}}}function l4(g){g===void 0||g===null||a0(g)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",x,typeof g)}function r2(){var g=m(Ng);mR.has(g)||(mR.add(g),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",g))}function x0(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function HP(g,v){if(vH)return!1;if(v===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",x),!1;g.length!==v.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,x,"["+v.join(", ")+"]","["+g.join(", ")+"]");for(var r=0;r<v.length&&r<g.length;r++)if(!N1(g[r],v[r]))return!1;return!0}function OP(g,v,r,H,q,A){if(sr=A,Ng=v,uv=g!==null?g._debugHookTypes:null,vw=-1,vH=g!==null&&g.type!==v.type,Object.prototype.toString.call(r)==="[object AsyncFunction]"||Object.prototype.toString.call(r)==="[object AsyncGeneratorFunction]")A=m(Ng),UW.has(A)||(UW.add(A),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",A===null?"An unknown Component":"<"+A+">"));v.memoizedState=null,v.updateQueue=null,v.lanes=0,D.H=g!==null&&g.memoizedState!==null?FW:uv!==null?kR:LW,s5=A=(v.mode&z1)!==Ig;var W=RW(r,H,q);if(s5=!1,J6&&(W=qP(v,r,H,q)),A){R0(!0);try{W=qP(v,r,H,q)}finally{R0(!1)}}return NX(g,v),W}function NX(g,v){v._debugHookTypes=uv,v.dependencies===null?gw!==null&&(v.dependencies={lanes:0,firstContext:null,_debugThenableState:gw}):v.dependencies._debugThenableState=gw,D.H=rH;var r=Y0!==null&&Y0.next!==null;if(sr=0,uv=x=n0=Y0=Ng=null,vw=-1,g!==null&&(g.flags&65011712)!==(v.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Xq=!1,gH=0,gw=null,r)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");g===null||e0||(g=g.dependencies,g!==null&&iO(g)&&(e0=!0)),d8?(d8=!1,g=!0):g=!1,g&&(v=m(v)||"Unknown",DR.has(v)||UW.has(v)||(DR.add(v),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function qP(g,v,r,H){Ng=g;var q=0;do{if(J6&&(gw=null),gH=0,J6=!1,q>=ZF)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(q+=1,vH=!1,n0=Y0=null,g.updateQueue!=null){var A=g.updateQueue;A.lastEffect=null,A.events=null,A.stores=null,A.memoCache!=null&&(A.memoCache.index=0)}vw=-1,D.H=VR,A=RW(v,r,H)}while(J6);return A}function fz(){var g=D.H,v=g.useState()[0];return v=typeof v.then==="function"?q8(v):v,g=g.useState()[0],(Y0!==null?Y0.memoizedState:null)!==g&&(Ng.flags|=1024),v}function AP(){var g=Yq!==0;return Yq=0,g}function PP(g,v,r){v.updateQueue=g.updateQueue,v.flags=(v.mode&kv)!==Ig?v.flags&-402655237:v.flags&-2053,g.lanes&=~r}function bP(g){if(Xq){for(g=g.memoizedState;g!==null;){var v=g.queue;v!==null&&(v.pending=null),g=g.next}Xq=!1}sr=0,uv=n0=Y0=Ng=null,vw=-1,x=null,J6=!1,gH=Yq=0,gw=null}function L1(){var g={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return n0===null?Ng.memoizedState=n0=g:n0=n0.next=g,n0}function q0(){if(Y0===null){var g=Ng.alternate;g=g!==null?g.memoizedState:null}else g=Y0.next;var v=n0===null?Ng.memoizedState:n0.next;if(v!==null)n0=v,Y0=g;else{if(g===null){if(Ng.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Y0=g,g={memoizedState:Y0.memoizedState,baseState:Y0.baseState,baseQueue:Y0.baseQueue,queue:Y0.queue,next:null},n0===null?Ng.memoizedState=n0=g:n0=n0.next=g}return n0}function w2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function q8(g){var v=gH;return gH+=1,gw===null&&(gw=YX()),g=RX(gw,g,v),v=Ng,(n0===null?v.memoizedState:n0.next)===null&&(v=v.alternate,D.H=v!==null&&v.memoizedState!==null?FW:LW),g}function Cw(g){if(g!==null&&typeof g==="object"){if(typeof g.then==="function")return q8(g);if(g.$$typeof===Jr)return U0(g)}throw Error("An unsupported type was passed to use(): "+String(g))}function D5(g){var v=null,r=Ng.updateQueue;if(r!==null&&(v=r.memoCache),v==null){var H=Ng.alternate;H!==null&&(H=H.updateQueue,H!==null&&(H=H.memoCache,H!=null&&(v={data:H.data.map(function(q){return q.slice()}),index:0})))}if(v==null&&(v={data:[],index:0}),r===null&&(r=w2(),Ng.updateQueue=r),r.memoCache=v,r=v.data[v.index],r===void 0||vH)for(r=v.data[v.index]=Array(g),H=0;H<g;H++)r[H]=qL;else r.length!==g&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",r.length,g);return v.index++,r}function ov(g,v){return typeof v==="function"?v(g):v}function WP(g,v,r){var H=L1();if(r!==void 0){var q=r(v);if(s5){R0(!0);try{r(v)}finally{R0(!1)}}}else q=v;return H.memoizedState=H.baseState=q,g={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g,lastRenderedState:q},H.queue=g,g=g.dispatch=pz.bind(null,Ng,g),[H.memoizedState,g]}function o4(g){var v=q0();return MP(v,Y0,g)}function MP(g,v,r){var H=g.queue;if(H===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");H.lastRenderedReducer=r;var q=g.baseQueue,A=H.pending;if(A!==null){if(q!==null){var W=q.next;q.next=A.next,A.next=W}v.baseQueue!==q&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),v.baseQueue=q=A,H.pending=null}if(A=g.baseState,q===null)g.memoizedState=A;else{v=q.next;var X=W=null,h=null,Q=v,u=!1;do{var T=Q.lane&-536870913;if(T!==Q.lane?(mg&T)===T:(sr&T)===T){var B=Q.revertLane;if(B===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),T===c5&&(u=!0);else if((sr&B)===B){Q=Q.next,B===c5&&(u=!0);continue}else T={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},h===null?(X=h=T,W=A):h=h.next=T,Ng.lanes|=B,aw|=B;T=Q.action,s5&&r(A,T),A=Q.hasEagerState?Q.eagerState:r(A,T)}else B={lane:T,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},h===null?(X=h=B,W=A):h=h.next=B,Ng.lanes|=T,aw|=T;Q=Q.next}while(Q!==null&&Q!==v);if(h===null?W=A:h.next=X,!N1(A,g.memoizedState)&&(e0=!0,u&&(r=M6,r!==null)))throw r;g.memoizedState=A,g.baseState=W,g.baseQueue=h,H.lastRenderedState=A}return q===null&&(H.lanes=0),[g.memoizedState,H.dispatch]}function A8(g){var v=q0(),r=v.queue;if(r===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");r.lastRenderedReducer=g;var{dispatch:H,pending:q}=r,A=v.memoizedState;if(q!==null){r.pending=null;var W=q=q.next;do A=g(A,W.action),W=W.next;while(W!==q);N1(A,v.memoizedState)||(e0=!0),v.memoizedState=A,v.baseQueue===null&&(v.baseState=A),r.lastRenderedState=A}return[A,H]}function XP(g,v,r){var H=Ng,q=L1();if(eg){if(r===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var A=r();h6||A===r()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),h6=!0)}else{if(A=v(),h6||(r=v(),N1(A,r)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),h6=!0)),G0===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(mg&127)!==0||ZX(H,v,A)}return q.memoizedState=A,r={value:A,getSnapshot:v},q.queue=r,A2(TX.bind(null,H,r,g),[g]),H.flags|=2048,D4(Zv|T1,{destroy:void 0},uX.bind(null,H,r,A,v),null),A}function H2(g,v,r){var H=Ng,q=q0(),A=eg;if(A){if(r===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");r=r()}else if(r=v(),!h6){var W=v();N1(r,W)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),h6=!0)}if(W=!N1((Y0||q).memoizedState,r))q.memoizedState=r,e0=!0;q=q.queue;var X=TX.bind(null,H,q,g);if(E1(2048,T1,X,[g]),q.getSnapshot!==v||W||n0!==null&&n0.memoizedState.tag&Zv){if(H.flags|=2048,D4(Zv|T1,{destroy:void 0},uX.bind(null,H,q,r,v),null),G0===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");A||(sr&127)!==0||ZX(H,v,r)}return r}function ZX(g,v,r){g.flags|=16384,g={getSnapshot:v,value:r},v=Ng.updateQueue,v===null?(v=w2(),Ng.updateQueue=v,v.stores=[g]):(r=v.stores,r===null?v.stores=[g]:r.push(g))}function uX(g,v,r,H){v.value=r,v.getSnapshot=H,CX(v)&&SX(g)}function TX(g,v,r){return r(function(){CX(v)&&(wr(2,"updateSyncExternalStore()",g),SX(g))})}function CX(g){var v=g.getSnapshot;g=g.value;try{var r=v();return!N1(g,r)}catch(H){return!0}}function SX(g){var v=K1(g,2);v!==null&&Z0(v,g,2)}function YP(g){var v=L1();if(typeof g==="function"){var r=g;if(g=r(),s5){R0(!0);try{r()}finally{R0(!1)}}}return v.memoizedState=v.baseState=g,v.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ov,lastRenderedState:g},v}function GP(g){g=YP(g);var v=g.queue,r=dX.bind(null,Ng,v);return v.dispatch=r,[g.memoizedState,r]}function RP(g){var v=L1();v.memoizedState=v.baseState=g;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return v.queue=r,v=uP.bind(null,Ng,!0,r),r.dispatch=v,[g,v]}function lX(g,v){var r=q0();return oX(r,Y0,g,v)}function oX(g,v,r,H){return g.baseState=r,MP(g,Y0,typeof H==="function"?H:ov)}function xX(g,v){var r=q0();if(Y0!==null)return oX(r,Y0,g,v);return r.baseState=g,[g,r.queue.dispatch]}function nz(g,v,r,H,q){if(Y2(g))throw Error("Cannot update form state while rendering.");if(g=v.action,g!==null){var A={payload:q,action:g,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(W){A.listeners.push(W)}};D.T!==null?r(!0):A.isTransition=!1,H(A),r=v.pending,r===null?(A.next=v.pending=A,DX(v,A)):(A.next=r.next,v.pending=r.next=A)}}function DX(g,v){var{action:r,payload:H}=v,q=g.state;if(v.isTransition){var A=D.T,W={};W._updatedFibers=new Set,D.T=W;try{var X=r(q,H),h=D.S;h!==null&&h(W,X),mX(g,v,X)}catch(Q){hP(g,v,Q)}finally{A!==null&&W.types!==null&&(A.types!==null&&A.types!==W.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),A.types=W.types),D.T=A,A===null&&W._updatedFibers&&(g=W._updatedFibers.size,W._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{W=r(q,H),mX(g,v,W)}catch(Q){hP(g,v,Q)}}function mX(g,v,r){r!==null&&typeof r==="object"&&typeof r.then==="function"?(D.asyncTransitions++,r.then(X2,X2),r.then(function(H){kX(g,v,H)},function(H){return hP(g,v,H)}),v.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):kX(g,v,r)}function kX(g,v,r){v.status="fulfilled",v.value=r,VX(v),g.state=r,v=g.pending,v!==null&&(r=v.next,r===v?g.pending=null:(r=r.next,v.next=r,DX(g,r)))}function hP(g,v,r){var H=g.pending;if(g.pending=null,H!==null){H=H.next;do v.status="rejected",v.reason=r,VX(v),v=v.next;while(v!==H)}g.action=null}function VX(g){g=g.listeners;for(var v=0;v<g.length;v++)(0,g[v])()}function EX(g,v){return v}function x4(g,v){if(eg){var r=G0.formState;if(r!==null){g:{var H=Ng;if(eg){if(K0){v:{var q=K0;for(var A=Bv;q.nodeType!==8;){if(!A){q=null;break v}if(q=rv(q.nextSibling),q===null){q=null;break v}}A=q.data,q=A===eW||A===Fh?q:null}if(q){K0=rv(q.nextSibling),H=q.data===eW;break g}}Fw(H)}H=!1}H&&(v=r[0])}}return r=L1(),r.memoizedState=r.baseState=v,H={pending:null,lanes:0,dispatch:null,lastRenderedReducer:EX,lastRenderedState:v},r.queue=H,r=dX.bind(null,Ng,H),H.dispatch=r,H=YP(!1),A=uP.bind(null,Ng,!1,H.queue),H=L1(),q={state:v,dispatch:null,action:g,pending:null},H.queue=q,r=nz.bind(null,Ng,q,A,r),q.dispatch=r,H.memoizedState=g,[v,r,!1]}function O2(g){var v=q0();return _X(v,Y0,g)}function _X(g,v,r){if(v=MP(g,v,EX)[0],g=o4(ov)[0],typeof v==="object"&&v!==null&&typeof v.then==="function")try{var H=q8(v)}catch(W){if(W===X6)throw Pq;throw W}else H=v;v=q0();var q=v.queue,A=q.dispatch;return r!==v.memoizedState&&(Ng.flags|=2048,D4(Zv|T1,{destroy:void 0},ez.bind(null,q,r),null)),[H,A,g]}function ez(g,v){g.action=v}function q2(g){var v=q0(),r=Y0;if(r!==null)return _X(v,r,g);q0(),v=v.memoizedState,r=q0();var H=r.queue.dispatch;return r.memoizedState=g,[v,H,!1]}function D4(g,v,r,H){return g={tag:g,create:r,deps:H,inst:v,next:null},v=Ng.updateQueue,v===null&&(v=w2(),Ng.updateQueue=v),r=v.lastEffect,r===null?v.lastEffect=g.next=g:(H=r.next,r.next=g,g.next=H,v.lastEffect=g),g}function JP(g){var v=L1();return g={current:g},v.memoizedState=g}function m5(g,v,r,H){var q=L1();Ng.flags|=g,q.memoizedState=D4(Zv|v,{destroy:void 0},r,H===void 0?null:H)}function E1(g,v,r,H){var q=q0();H=H===void 0?null:H;var A=q.memoizedState.inst;Y0!==null&&H!==null&&HP(H,Y0.memoizedState.deps)?q.memoizedState=D4(v,A,r,H):(Ng.flags|=g,q.memoizedState=D4(Zv|v,A,r,H))}function A2(g,v){(Ng.mode&kv)!==Ig?m5(276826112,T1,g,v):m5(8390656,T1,g,v)}function cz(g){Ng.flags|=4;var v=Ng.updateQueue;if(v===null)v=w2(),Ng.updateQueue=v,v.events=[g];else{var r=v.events;r===null?v.events=[g]:r.push(g)}}function QP(g){var v=L1(),r={impl:g};return v.memoizedState=r,function(){if((ag&g1)!==q1)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return r.impl.apply(void 0,arguments)}}function P2(g){var v=q0().memoizedState;return cz({ref:v,nextImpl:g}),function(){if((ag&g1)!==q1)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return v.impl.apply(void 0,arguments)}}function KP(g,v){var r=4194308;return(Ng.mode&kv)!==Ig&&(r|=134217728),m5(r,Pv,g,v)}function yX(g,v){if(typeof v==="function"){g=g();var r=v(g);return function(){typeof r==="function"?r():v(null)}}if(v!==null&&v!==void 0)return v.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(v).join(", ")+"}"),g=g(),v.current=g,function(){v.current=null}}function $P(g,v,r){typeof v!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",v!==null?typeof v:"null"),r=r!==null&&r!==void 0?r.concat([g]):null;var H=4194308;(Ng.mode&kv)!==Ig&&(H|=134217728),m5(H,Pv,yX.bind(null,v,g),r)}function b2(g,v,r){typeof v!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",v!==null?typeof v:"null"),r=r!==null&&r!==void 0?r.concat([g]):null,E1(4,Pv,yX.bind(null,v,g),r)}function zP(g,v){return L1().memoizedState=[g,v===void 0?null:v],g}function W2(g,v){var r=q0();v=v===void 0?null:v;var H=r.memoizedState;if(v!==null&&HP(v,H[1]))return H[0];return r.memoizedState=[g,v],g}function UP(g,v){var r=L1();v=v===void 0?null:v;var H=g();if(s5){R0(!0);try{g()}finally{R0(!1)}}return r.memoizedState=[H,v],H}function M2(g,v){var r=q0();v=v===void 0?null:v;var H=r.memoizedState;if(v!==null&&HP(v,H[1]))return H[0];if(H=g(),s5){R0(!0);try{g()}finally{R0(!1)}}return r.memoizedState=[H,v],H}function LP(g,v){var r=L1();return FP(r,g,v)}function jX(g,v){var r=q0();return fX(r,Y0.memoizedState,g,v)}function iX(g,v){var r=q0();return Y0===null?FP(r,g,v):fX(r,Y0.memoizedState,g,v)}function FP(g,v,r){if(r===void 0||(sr&1073741824)!==0&&(mg&261930)===0)return g.memoizedState=v;return g.memoizedState=r,g=nY(),Ng.lanes|=g,aw|=g,r}function fX(g,v,r,H){if(N1(r,v))return r;if(G6.current!==null)return g=FP(g,r,H),N1(g,v)||(e0=!0),g;if((sr&42)===0||(sr&1073741824)!==0&&(mg&261930)===0)return e0=!0,g.memoizedState=r;return g=nY(),Ng.lanes|=g,aw|=g,v}function X2(){D.asyncTransitions--}function nX(g,v,r,H,q){var A=H0.p;H0.p=A!==0&&A<mv?A:mv;var W=D.T,X={};X._updatedFibers=new Set,D.T=X,uP(g,!1,v,r);try{var h=q(),Q=D.S;if(Q!==null&&Q(X,h),h!==null&&typeof h==="object"&&typeof h.then==="function"){D.asyncTransitions++,h.then(X2,X2);var u=jz(h,H);P8(g,v,u,vv(g))}else P8(g,v,H,vv(g))}catch(T){P8(g,v,{then:function(){},status:"rejected",reason:T},vv(g))}finally{H0.p=A,W!==null&&X.types!==null&&(W.types!==null&&W.types!==X.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),W.types=X.types),D.T=W,W===null&&X._updatedFibers&&(g=X._updatedFibers.size,X._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function BP(g,v,r,H){if(g.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var q=eX(g).queue;_z(g),nX(g,q,v,W4,r===null?U:function(){return cX(g),r(H)})}function eX(g){var v=g.memoizedState;if(v!==null)return v;v={memoizedState:W4,baseState:W4,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ov,lastRenderedState:W4},next:null};var r={};return v.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ov,lastRenderedState:r},next:null},g.memoizedState=v,g=g.alternate,g!==null&&(g.memoizedState=v),v}function cX(g){D.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var v=eX(g);v.next===null&&(v=g.alternate.memoizedState),P8(g,v.next.queue,{},vv(g))}function IP(){var g=YP(!1);return g=nX.bind(null,Ng,g.queue,!0,!1),L1().memoizedState=g,[!1,g]}function tX(){var g=o4(ov)[0],v=q0().memoizedState;return[typeof g==="boolean"?g:q8(g),v]}function pX(){var g=A8(ov)[0],v=q0().memoizedState;return[typeof g==="boolean"?g:q8(g),v]}function k5(){return U0(JH)}function NP(){var g=L1(),v=G0.identifierPrefix;if(eg){var r=cr,H=er;r=(H&~(1<<32-F1(H)-1)).toString(32)+r,v="_"+v+"R_"+r,r=Yq++,0<r&&(v+="H"+r.toString(32)),v+="_"}else r=NF++,v="_"+v+"r_"+r.toString(32)+"_";return g.memoizedState=v}function ZP(){return L1().memoizedState=tz.bind(null,Ng)}function tz(g,v){for(var r=g.return;r!==null;){switch(r.tag){case 24:case 3:var H=vv(r),q=Nw(H),A=Zw(r,q,H);A!==null&&(wr(H,"refresh()",g),Z0(A,r,H),w8(A,r,H)),g=cA(),v!==null&&v!==void 0&&A!==null&&console.error("The seed argument is not enabled outside experimental channels."),q.payload={cache:g};return}r=r.return}}function pz(g,v,r){var H=arguments;typeof H[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),H=vv(g);var q={lane:H,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};Y2(g)?aX(v,q):(q=DA(g,v,q,H),q!==null&&(wr(H,"dispatch()",g),Z0(q,g,H),sX(q,v,H)))}function dX(g,v,r){var H=arguments;typeof H[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),H=vv(g),P8(g,v,r,H)&&wr(H,"setState()",g)}function P8(g,v,r,H){var q={lane:H,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Y2(g))aX(v,q);else{var A=g.alternate;if(g.lanes===0&&(A===null||A.lanes===0)&&(A=v.lastRenderedReducer,A!==null)){var W=D.H;D.H=Ev;try{var X=v.lastRenderedState,h=A(X,r);if(q.hasEagerState=!0,q.eagerState=h,N1(h,X))return VO(g,v,q,0),G0===null&&kO(),!1}catch(Q){}finally{D.H=W}}if(r=DA(g,v,q,H),r!==null)return Z0(r,g,H),sX(r,v,H),!0}return!1}function uP(g,v,r,H){if(D.T===null&&c5===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),H={lane:2,revertLane:Ob(),gesture:null,action:H,hasEagerState:!1,eagerState:null,next:null},Y2(g)){if(v)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else v=DA(g,r,H,2),v!==null&&(wr(2,"setOptimistic()",g),Z0(v,g,2))}function Y2(g){var v=g.alternate;return g===Ng||v!==null&&v===Ng}function aX(g,v){J6=Xq=!0;var r=g.pending;r===null?v.next=v:(v.next=r.next,r.next=v),g.pending=v}function sX(g,v,r){if((r&4194048)!==0){var H=v.lanes;H&=g.pendingLanes,r|=H,v.lanes=r,F5(g,r)}}function TP(g){if(g!==null&&typeof g!=="function"){var v=String(g);pR.has(v)||(pR.add(v),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",g))}}function CP(g,v,r,H){var q=g.memoizedState,A=r(H,q);if(g.mode&z1){R0(!0);try{A=r(H,q)}finally{R0(!1)}}A===void 0&&(v=d(v)||"Component",nR.has(v)||(nR.add(v),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",v))),q=A===null||A===void 0?q:yg({},q,A),g.memoizedState=q,g.lanes===0&&(g.updateQueue.baseState=q)}function gY(g,v,r,H,q,A,W){var X=g.stateNode;if(typeof X.shouldComponentUpdate==="function"){if(r=X.shouldComponentUpdate(H,A,W),g.mode&z1){R0(!0);try{r=X.shouldComponentUpdate(H,A,W)}finally{R0(!1)}}return r===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",d(v)||"Component"),r}return v.prototype&&v.prototype.isPureReactComponent?!p6(r,H)||!p6(q,A):!0}function vY(g,v,r,H){var q=v.state;typeof v.componentWillReceiveProps==="function"&&v.componentWillReceiveProps(r,H),typeof v.UNSAFE_componentWillReceiveProps==="function"&&v.UNSAFE_componentWillReceiveProps(r,H),v.state!==q&&(g=m(g)||"Component",_R.has(g)||(_R.add(g),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",g)),BW.enqueueReplaceState(v,v.state,null))}function V5(g,v){var r=v;if("ref"in v){r={};for(var H in v)H!=="ref"&&(r[H]=v[H])}if(g=g.defaultProps){r===v&&(r=yg({},r));for(var q in g)r[q]===void 0&&(r[q]=g[q])}return r}function rY(g){rW(g),console.warn(`%s

%s
`,Q6?"An error occurred in the <"+Q6+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function wY(g){var v=Q6?"The above error occurred in the <"+Q6+"> component.":"The above error occurred in one of your React components.",r="React will try to recreate this component tree from scratch using the error boundary you provided, "+((IW||"Anonymous")+".");if(typeof g==="object"&&g!==null&&typeof g.environmentName==="string"){var H=g.environmentName;g=[`%o

%s

%s
`,g,v,r].slice(0),typeof g[0]==="string"?g.splice(0,1,Sh+" "+g[0],lh,kq+H+kq,oh):g.splice(0,0,Sh,lh,kq+H+kq,oh),g.unshift(console),H=cF.apply(console.error,g),H()}else console.error(`%o

%s

%s
`,g,v,r)}function HY(g){rW(g)}function G2(g,v){try{Q6=v.source?m(v.source):null,IW=null;var r=v.value;if(D.actQueue!==null)D.thrownErrors.push(r);else{var H=g.onUncaughtError;H(r,{componentStack:v.stack})}}catch(q){setTimeout(function(){throw q})}}function OY(g,v,r){try{Q6=r.source?m(r.source):null,IW=m(v);var H=g.onCaughtError;H(r.value,{componentStack:r.stack,errorBoundary:v.tag===1?v.stateNode:null})}catch(q){setTimeout(function(){throw q})}}function SP(g,v,r){return r=Nw(r),r.tag=KW,r.payload={element:null},r.callback=function(){Ag(v.source,G2,g,v)},r}function lP(g){return g=Nw(g),g.tag=KW,g}function oP(g,v,r,H){var q=r.type.getDerivedStateFromError;if(typeof q==="function"){var A=H.value;g.payload=function(){return q(A)},g.callback=function(){a9(r),Ag(H.source,OY,v,r,H)}}var W=r.stateNode;W!==null&&typeof W.componentDidCatch==="function"&&(g.callback=function(){a9(r),Ag(H.source,OY,v,r,H),typeof q!=="function"&&(g5===null?g5=new Set([this]):g5.add(this)),LF(this,H),typeof q==="function"||(r.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",m(r)||"Unknown")})}function dz(g,v,r,H,q){if(r.flags|=32768,$r&&h8(g,q),H!==null&&typeof H==="object"&&typeof H.then==="function"){if(v=r.alternate,v!==null&&S4(v,r,q,!0),eg&&(Lr=!0),r=Av.current,r!==null){switch(r.tag){case 31:case 13:return Nv===null?L2():r.alternate===null&&I0===ww&&(I0=hq),r.flags&=-257,r.flags|=65536,r.lanes=q,H===bq?r.flags|=16384:(v=r.updateQueue,v===null?r.updateQueue=new Set([H]):v.add(H),vb(g,H,q)),!1;case 22:return r.flags|=65536,H===bq?r.flags|=16384:(v=r.updateQueue,v===null?(v={transitions:null,markerInstances:null,retryQueue:new Set([H])},r.updateQueue=v):(r=v.retryQueue,r===null?v.retryQueue=new Set([H]):r.add(H)),vb(g,H,q)),!1}throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}return vb(g,H,q),L2(),!1}if(eg)return Lr=!0,v=Av.current,v!==null?((v.flags&65536)===0&&(v.flags|=256),v.flags|=65536,v.lanes=q,H!==PW&&a6(d1(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:H}),r))):(H!==PW&&a6(d1(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:H}),r)),g=g.current.alternate,g.flags|=65536,q&=-q,g.lanes|=q,H=d1(H,r),q=SP(g.stateNode,H,q),g2(g,q),I0!==pw&&(I0=g4)),!1;var A=d1(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:H}),r);if(PH===null?PH=[A]:PH.push(A),I0!==pw&&(I0=g4),v===null)return!0;H=d1(H,r),r=v;do{switch(r.tag){case 3:return r.flags|=65536,g=q&-q,r.lanes|=g,g=SP(r.stateNode,H,g),g2(r,g),!1;case 1:if(v=r.type,A=r.stateNode,(r.flags&128)===0&&(typeof v.getDerivedStateFromError==="function"||A!==null&&typeof A.componentDidCatch==="function"&&(g5===null||!g5.has(A))))return r.flags|=65536,q&=-q,r.lanes|=q,q=lP(q),oP(q,g,r,H),g2(r,q),!1}r=r.return}while(r!==null);return!1}function M1(g,v,r,H){v.child=g===null?TR(v,null,r,H):a5(v,g.child,r,H)}function qY(g,v,r,H,q){r=r.render;var A=v.ref;if("ref"in H){var W={};for(var X in H)X!=="ref"&&(W[X]=H[X])}else W=H;if(o5(v),H=OP(g,v,r,W,A,q),X=AP(),g!==null&&!e0)return PP(g,v,q),_r(g,v,q);return eg&&X&&yA(v),v.flags|=1,M1(g,v,H,q),v.child}function AY(g,v,r,H,q){if(g===null){var A=r.type;if(typeof A==="function"&&!kA(A)&&A.defaultProps===void 0&&r.compare===null)return r=T5(A),v.tag=15,v.type=r,DP(v,A),PY(g,v,r,H,q);return g=VA(r.type,null,H,v,v.mode,q),g.ref=v.ref,g.return=v,v.child=g}if(A=g.child,!yP(g,q)){var W=A.memoizedProps;if(r=r.compare,r=r!==null?r:p6,r(W,H)&&g.ref===v.ref)return _r(g,v,q)}return v.flags|=1,g=mr(A,H),g.ref=v.ref,g.return=v,v.child=g}function PY(g,v,r,H,q){if(g!==null){var A=g.memoizedProps;if(p6(A,H)&&g.ref===v.ref&&v.type===g.type)if(e0=!1,v.pendingProps=H=A,yP(g,q))(g.flags&131072)!==0&&(e0=!0);else return v.lanes=g.lanes,_r(g,v,q)}return xP(g,v,r,H,q)}function bY(g,v,r,H){var q=H.children,A=g!==null?g.memoizedState:null;if(g===null&&v.stateNode===null&&(v.stateNode={_visibility:m8,_pendingMarkers:null,_retryCache:null,_transitions:null}),H.mode==="hidden"){if((v.flags&128)!==0){if(A=A!==null?A.baseLanes|r:r,g!==null){H=v.child=g.child;for(q=0;H!==null;)q=q|H.lanes|H.childLanes,H=H.sibling;H=q&~A}else H=0,v.child=null;return WY(g,v,A,r,H)}if((r&536870912)!==0)v.memoizedState={baseLanes:0,cachePool:null},g!==null&&cO(v,A!==null?A.cachePool:null),A!==null?BX(v,A):vP(v),IX(v);else return H=v.lanes=536870912,WY(g,v,A!==null?A.baseLanes|r:r,r,H)}else A!==null?(cO(v,A.cachePool),BX(v,A),Tw(v),v.memoizedState=null):(g!==null&&cO(v,null),vP(v),Tw(v));return M1(g,v,q,r),v.child}function b8(g,v){return g!==null&&g.tag===22||v.stateNode!==null||(v.stateNode={_visibility:m8,_pendingMarkers:null,_retryCache:null,_transitions:null}),v.sibling}function WY(g,v,r,H,q){var A=dA();return A=A===null?null:{parent:i0._currentValue,pool:A},v.memoizedState={baseLanes:r,cachePool:A},g!==null&&cO(v,null),vP(v),IX(v),g!==null&&S4(g,v,H,!0),v.childLanes=q,null}function R2(g,v){var r=v.hidden;return r!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,r===!0?"hidden":r===!1?"hidden={false}":"hidden={...}",r?'mode="hidden"':'mode="visible"'),v=J2({mode:v.mode,children:v.children},g.mode),v.ref=g.ref,g.child=v,v.return=g,v}function MY(g,v,r){return a5(v,g.child,null,r),g=R2(v,v.pendingProps),g.flags|=2,gv(v),v.memoizedState=null,g}function az(g,v,r){var H=v.pendingProps,q=(v.flags&128)!==0;if(v.flags&=-129,g===null){if(eg){if(H.mode==="hidden")return g=R2(v,H),v.lanes=536870912,b8(null,g);if(wP(v),(g=K0)?(r=DG(g,Bv),r=r!==null&&r.data===q4?r:null,r!==null&&(H={dehydrated:r,treeContext:wX(),retryLane:536870912,hydrationErrors:null},v.memoizedState=H,H=vX(r),H.return=v,v.child=H,G1=v,K0=null)):r=null,r===null)throw yO(v,g),Fw(v);return v.lanes=536870912,null}return R2(v,H)}var A=g.memoizedState;if(A!==null){var W=A.dehydrated;if(wP(v),q)if(v.flags&256)v.flags&=-257,v=MY(g,v,r);else if(v.memoizedState!==null)v.child=g.child,v.flags|=128,v=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(OX(),(r&536870912)!==0&&U2(v),e0||S4(g,v,r,!1),q=(r&g.childLanes)!==0,e0||q){if(H=G0,H!==null&&(W=B5(H,r),W!==0&&W!==A.retryLane))throw A.retryLane=W,K1(g,W),Z0(H,g,W),NW;L2(),v=MY(g,v,r)}else g=A.treeContext,K0=rv(W.nextSibling),G1=v,eg=!0,jw=null,Lr=!1,qv=null,Bv=!1,g!==null&&HX(v,g),v=R2(v,H),v.flags|=4096;return v}return A=g.child,H={mode:H.mode,children:H.children},(r&536870912)!==0&&(r&g.lanes)!==0&&U2(v),g=mr(A,H),g.ref=v.ref,v.child=g,g.return=v,g}function h2(g,v){var r=v.ref;if(r===null)g!==null&&g.ref!==null&&(v.flags|=4194816);else{if(typeof r!=="function"&&typeof r!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(g===null||g.ref!==r)v.flags|=4194816}}function xP(g,v,r,H,q){if(r.prototype&&typeof r.prototype.render==="function"){var A=d(r)||"Unknown";dR[A]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",A,A),dR[A]=!0)}if(v.mode&z1&&Vv.recordLegacyContextWarning(v,null),g===null&&(DP(v,v.type),r.contextTypes&&(A=d(r)||"Unknown",sR[A]||(sR[A]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",A)))),o5(v),r=OP(g,v,r,H,void 0,q),H=AP(),g!==null&&!e0)return PP(g,v,q),_r(g,v,q);return eg&&H&&yA(v),v.flags|=1,M1(g,v,r,q),v.child}function XY(g,v,r,H,q,A){if(o5(v),vw=-1,vH=g!==null&&g.type!==v.type,v.updateQueue=null,r=qP(v,H,r,q),NX(g,v),H=AP(),g!==null&&!e0)return PP(g,v,A),_r(g,v,A);return eg&&H&&yA(v),v.flags|=1,M1(g,v,r,A),v.child}function YY(g,v,r,H,q){switch(G(v)){case!1:var A=v.stateNode,W=new v.type(v.memoizedProps,A.context).state;A.updater.enqueueSetState(A,W,null);break;case!0:v.flags|=128,v.flags|=65536,A=Error("Simulated error coming from DevTools");var X=q&-q;if(v.lanes|=X,W=G0,W===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");X=lP(X),oP(X,W,v,d1(A,v)),g2(v,X)}if(o5(v),v.stateNode===null){if(W=yw,A=r.contextType,"contextType"in r&&A!==null&&(A===void 0||A.$$typeof!==Jr)&&!tR.has(r)&&(tR.add(r),X=A===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof A!=="object"?" However, it is set to a "+typeof A+".":A.$$typeof===Zb?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(A).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",d(r)||"Component",X)),typeof A==="object"&&A!==null&&(W=U0(A)),A=new r(H,W),v.mode&z1){R0(!0);try{A=new r(H,W)}finally{R0(!1)}}if(W=v.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=BW,v.stateNode=A,A._reactInternals=v,A._reactInternalInstance=ER,typeof r.getDerivedStateFromProps==="function"&&W===null&&(W=d(r)||"Component",yR.has(W)||(yR.add(W),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",W,A.state===null?"null":"undefined",W))),typeof r.getDerivedStateFromProps==="function"||typeof A.getSnapshotBeforeUpdate==="function"){var h=X=W=null;if(typeof A.componentWillMount==="function"&&A.componentWillMount.__suppressDeprecationWarning!==!0?W="componentWillMount":typeof A.UNSAFE_componentWillMount==="function"&&(W="UNSAFE_componentWillMount"),typeof A.componentWillReceiveProps==="function"&&A.componentWillReceiveProps.__suppressDeprecationWarning!==!0?X="componentWillReceiveProps":typeof A.UNSAFE_componentWillReceiveProps==="function"&&(X="UNSAFE_componentWillReceiveProps"),typeof A.componentWillUpdate==="function"&&A.componentWillUpdate.__suppressDeprecationWarning!==!0?h="componentWillUpdate":typeof A.UNSAFE_componentWillUpdate==="function"&&(h="UNSAFE_componentWillUpdate"),W!==null||X!==null||h!==null){A=d(r)||"Component";var Q=typeof r.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";iR.has(A)||(iR.add(A),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,A,Q,W!==null?`
  `+W:"",X!==null?`
  `+X:"",h!==null?`
  `+h:""))}}A=v.stateNode,W=d(r)||"Component",A.render||(r.prototype&&typeof r.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",W):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",W)),!A.getInitialState||A.getInitialState.isReactClassApproved||A.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",W),A.getDefaultProps&&!A.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",W),A.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",W),r.childContextTypes&&!cR.has(r)&&(cR.add(r),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",W)),r.contextTypes&&!eR.has(r)&&(eR.add(r),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",W)),typeof A.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",W),r.prototype&&r.prototype.isPureReactComponent&&typeof A.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",d(r)||"A pure component"),typeof A.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",W),typeof A.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",W),typeof A.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",W),typeof A.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",W),X=A.props!==H,A.props!==void 0&&X&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",W),A.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",W,W),typeof A.getSnapshotBeforeUpdate!=="function"||typeof A.componentDidUpdate==="function"||jR.has(r)||(jR.add(r),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",d(r))),typeof A.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",W),typeof A.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",W),typeof r.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",W),(X=A.state)&&(typeof X!=="object"||a0(X))&&console.error("%s.state: must be set to an object or null",W),typeof A.getChildContext==="function"&&typeof r.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",W),A=v.stateNode,A.props=H,A.state=v.memoizedState,A.refs={},sA(v),W=r.contextType,A.context=typeof W==="object"&&W!==null?U0(W):yw,A.state===H&&(W=d(r)||"Component",fR.has(W)||(fR.add(W),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",W))),v.mode&z1&&Vv.recordLegacyContextWarning(v,A),Vv.recordUnsafeLifecycleWarnings(v,A),A.state=v.memoizedState,W=r.getDerivedStateFromProps,typeof W==="function"&&(CP(v,r,W,H),A.state=v.memoizedState),typeof r.getDerivedStateFromProps==="function"||typeof A.getSnapshotBeforeUpdate==="function"||typeof A.UNSAFE_componentWillMount!=="function"&&typeof A.componentWillMount!=="function"||(W=A.state,typeof A.componentWillMount==="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount==="function"&&A.UNSAFE_componentWillMount(),W!==A.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",m(v)||"Component"),BW.enqueueReplaceState(A,A.state,null)),O8(v,H,A,q),H8(),A.state=v.memoizedState),typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&kv)!==Ig&&(v.flags|=134217728),A=!0}else if(g===null){A=v.stateNode;var u=v.memoizedProps;X=V5(r,u),A.props=X;var T=A.context;h=r.contextType,W=yw,typeof h==="object"&&h!==null&&(W=U0(h)),Q=r.getDerivedStateFromProps,h=typeof Q==="function"||typeof A.getSnapshotBeforeUpdate==="function",u=v.pendingProps!==u,h||typeof A.UNSAFE_componentWillReceiveProps!=="function"&&typeof A.componentWillReceiveProps!=="function"||(u||T!==W)&&vY(v,A,H,W),tw=!1;var B=v.memoizedState;A.state=B,O8(v,H,A,q),H8(),T=v.memoizedState,u||B!==T||tw?(typeof Q==="function"&&(CP(v,r,Q,H),T=v.memoizedState),(X=tw||gY(v,r,X,H,B,T,W))?(h||typeof A.UNSAFE_componentWillMount!=="function"&&typeof A.componentWillMount!=="function"||(typeof A.componentWillMount==="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount==="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&kv)!==Ig&&(v.flags|=134217728)):(typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&kv)!==Ig&&(v.flags|=134217728),v.memoizedProps=H,v.memoizedState=T),A.props=H,A.state=T,A.context=W,A=X):(typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&kv)!==Ig&&(v.flags|=134217728),A=!1)}else{A=v.stateNode,gP(g,v),W=v.memoizedProps,h=V5(r,W),A.props=h,Q=v.pendingProps,B=A.context,T=r.contextType,X=yw,typeof T==="object"&&T!==null&&(X=U0(T)),u=r.getDerivedStateFromProps,(T=typeof u==="function"||typeof A.getSnapshotBeforeUpdate==="function")||typeof A.UNSAFE_componentWillReceiveProps!=="function"&&typeof A.componentWillReceiveProps!=="function"||(W!==Q||B!==X)&&vY(v,A,H,X),tw=!1,B=v.memoizedState,A.state=B,O8(v,H,A,q),H8();var o=v.memoizedState;W!==Q||B!==o||tw||g!==null&&g.dependencies!==null&&iO(g.dependencies)?(typeof u==="function"&&(CP(v,r,u,H),o=v.memoizedState),(h=tw||gY(v,r,h,H,B,o,X)||g!==null&&g.dependencies!==null&&iO(g.dependencies))?(T||typeof A.UNSAFE_componentWillUpdate!=="function"&&typeof A.componentWillUpdate!=="function"||(typeof A.componentWillUpdate==="function"&&A.componentWillUpdate(H,o,X),typeof A.UNSAFE_componentWillUpdate==="function"&&A.UNSAFE_componentWillUpdate(H,o,X)),typeof A.componentDidUpdate==="function"&&(v.flags|=4),typeof A.getSnapshotBeforeUpdate==="function"&&(v.flags|=1024)):(typeof A.componentDidUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=4),typeof A.getSnapshotBeforeUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=1024),v.memoizedProps=H,v.memoizedState=o),A.props=H,A.state=o,A.context=X,A=h):(typeof A.componentDidUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=4),typeof A.getSnapshotBeforeUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=1024),A=!1)}if(X=A,h2(g,v),W=(v.flags&128)!==0,X||W){if(X=v.stateNode,Rv(v),W&&typeof r.getDerivedStateFromError!=="function")r=null,Z1=-1;else if(r=hR(X),v.mode&z1){R0(!0);try{hR(X)}finally{R0(!1)}}v.flags|=1,g!==null&&W?(v.child=a5(v,g.child,null,q),v.child=a5(v,null,r,q)):M1(g,v,r,q),v.memoizedState=X.state,g=v.child}else g=_r(g,v,q);return q=v.stateNode,A&&q.props!==H&&(K6||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",m(v)||"a component"),K6=!0),g}function GY(g,v,r,H){return l5(),v.flags|=256,M1(g,v,r,H),v.child}function DP(g,v){v&&v.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,v.displayName||v.name||"Component"),typeof v.getDerivedStateFromProps==="function"&&(g=d(v)||"Unknown",gh[g]||(console.error("%s: Function components do not support getDerivedStateFromProps.",g),gh[g]=!0)),typeof v.contextType==="object"&&v.contextType!==null&&(v=d(v)||"Unknown",aR[v]||(console.error("%s: Function components do not support contextType.",v),aR[v]=!0))}function mP(g){return{baseLanes:g,cachePool:XX()}}function kP(g,v,r){return g=g!==null?g.childLanes&~r:0,v&&(g|=f1),g}function RY(g,v,r){var H,q=v.pendingProps;Y(v)&&(v.flags|=128);var A=!1,W=(v.flags&128)!==0;if((H=W)||(H=g!==null&&g.memoizedState===null?!1:(k0.current&s8)!==0),H&&(A=!0,v.flags&=-129),H=(v.flags&32)!==0,v.flags&=-33,g===null){if(eg){if(A?uw(v):Tw(v),(g=K0)?(r=DG(g,Bv),r=r!==null&&r.data!==q4?r:null,r!==null&&(H={dehydrated:r,treeContext:wX(),retryLane:536870912,hydrationErrors:null},v.memoizedState=H,H=vX(r),H.return=v,v.child=H,G1=v,K0=null)):r=null,r===null)throw yO(v,g),Fw(v);return Jb(r)?v.lanes=32:v.lanes=536870912,null}var X=q.children;if(q=q.fallback,A){Tw(v);var h=v.mode;return X=J2({mode:"hidden",children:X},h),q=C5(q,h,r,null),X.return=v,q.return=v,X.sibling=q,v.child=X,q=v.child,q.memoizedState=mP(r),q.childLanes=kP(g,H,r),v.memoizedState=ZW,b8(null,q)}return uw(v),VP(v,X)}var Q=g.memoizedState;if(Q!==null){var u=Q.dehydrated;if(u!==null){if(W)v.flags&256?(uw(v),v.flags&=-257,v=EP(g,v,r)):v.memoizedState!==null?(Tw(v),v.child=g.child,v.flags|=128,v=null):(Tw(v),X=q.fallback,h=v.mode,q=J2({mode:"visible",children:q.children},h),X=C5(X,h,r,null),X.flags|=2,q.return=v,X.return=v,q.sibling=X,v.child=q,a5(v,g.child,null,r),q=v.child,q.memoizedState=mP(r),q.childLanes=kP(g,H,r),v.memoizedState=ZW,v=b8(null,q));else if(uw(v),OX(),(r&536870912)!==0&&U2(v),Jb(u)){if(H=u.nextSibling&&u.nextSibling.dataset,H){X=H.dgst;var T=H.msg;h=H.stck;var B=H.cstck}A=T,H=X,q=h,u=B,X=A,h=u,X=X?Error(X):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),X.stack=q||"",X.digest=H,H=h===void 0?null:h,q={value:X,source:null,stack:H},typeof H==="string"&&AW.set(X,q),a6(q),v=EP(g,v,r)}else if(e0||S4(g,v,r,!1),H=(r&g.childLanes)!==0,e0||H){if(H=G0,H!==null&&(q=B5(H,r),q!==0&&q!==Q.retryLane))throw Q.retryLane=q,K1(g,q),Z0(H,g,q),NW;hb(u)||L2(),v=EP(g,v,r)}else hb(u)?(v.flags|=192,v.child=g.child,v=null):(g=Q.treeContext,K0=rv(u.nextSibling),G1=v,eg=!0,jw=null,Lr=!1,qv=null,Bv=!1,g!==null&&HX(v,g),v=VP(v,q.children),v.flags|=4096);return v}}if(A)return Tw(v),X=q.fallback,h=v.mode,B=g.child,u=B.sibling,q=mr(B,{mode:"hidden",children:q.children}),q.subtreeFlags=B.subtreeFlags&65011712,u!==null?X=mr(u,X):(X=C5(X,h,r,null),X.flags|=2),X.return=v,q.return=v,q.sibling=X,v.child=q,b8(null,q),q=v.child,X=g.child.memoizedState,X===null?X=mP(r):(h=X.cachePool,h!==null?(B=i0._currentValue,h=h.parent!==B?{parent:B,pool:B}:h):h=XX(),X={baseLanes:X.baseLanes|r,cachePool:h}),q.memoizedState=X,q.childLanes=kP(g,H,r),v.memoizedState=ZW,b8(g.child,q);return Q!==null&&(r&62914560)===r&&(r&g.lanes)!==0&&U2(v),uw(v),r=g.child,g=r.sibling,r=mr(r,{mode:"visible",children:q.children}),r.return=v,r.sibling=null,g!==null&&(H=v.deletions,H===null?(v.deletions=[g],v.flags|=16):H.push(g)),v.child=r,v.memoizedState=null,r}function VP(g,v){return v=J2({mode:"visible",children:v},g.mode),v.return=g,g.child=v}function J2(g,v){return g=L(22,g,null,v),g.lanes=0,g}function EP(g,v,r){return a5(v,g.child,null,r),g=VP(v,v.pendingProps.children),g.flags|=2,v.memoizedState=null,g}function hY(g,v,r){g.lanes|=v;var H=g.alternate;H!==null&&(H.lanes|=v),nA(g.return,v,r)}function _P(g,v,r,H,q,A){var W=g.memoizedState;W===null?g.memoizedState={isBackwards:v,rendering:null,renderingStartTime:0,last:H,tail:r,tailMode:q,treeForkCount:A}:(W.isBackwards=v,W.rendering=null,W.renderingStartTime=0,W.last=H,W.tail=r,W.tailMode=q,W.treeForkCount=A)}function JY(g,v,r){var H=v.pendingProps,q=H.revealOrder,A=H.tail,W=H.children,X=k0.current;if((H=(X&s8)!==0)?(X=X&R6|s8,v.flags|=128):X&=R6,Kg(k0,X,v),X=q==null?"null":q,q!=="forwards"&&q!=="unstable_legacy-backwards"&&q!=="together"&&q!=="independent"&&!vh[X])if(vh[X]=!0,q==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(q==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof q==="string")switch(q.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',q,q.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',q,q.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',q)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',q);if(X=A==null?"null":A,!Rq[X])if(A==null){if(q==="forwards"||q==="backwards"||q==="unstable_legacy-backwards")Rq[X]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else A!=="visible"&&A!=="collapsed"&&A!=="hidden"?(Rq[X]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',A)):q!=="forwards"&&q!=="backwards"&&q!=="unstable_legacy-backwards"&&(Rq[X]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',A));g:if((q==="forwards"||q==="backwards"||q==="unstable_legacy-backwards")&&W!==void 0&&W!==null&&W!==!1)if(a0(W)){for(X=0;X<W.length;X++)if(!UX(W[X],X))break g}else if(X=rg(W),typeof X==="function"){if(X=X.call(W))for(var h=X.next(),Q=0;!h.done;h=X.next()){if(!UX(h.value,Q))break g;Q++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',q);if(M1(g,v,W,r),eg?(Lw(),W=k8):W=0,!H&&g!==null&&(g.flags&128)!==0)g:for(g=v.child;g!==null;){if(g.tag===13)g.memoizedState!==null&&hY(g,r,v);else if(g.tag===19)hY(g,r,v);else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===v)break g;for(;g.sibling===null;){if(g.return===null||g.return===v)break g;g=g.return}g.sibling.return=g.return,g=g.sibling}switch(q){case"forwards":r=v.child;for(q=null;r!==null;)g=r.alternate,g!==null&&v2(g)===null&&(q=r),r=r.sibling;r=q,r===null?(q=v.child,v.child=null):(q=r.sibling,r.sibling=null),_P(v,!1,q,r,A,W);break;case"backwards":case"unstable_legacy-backwards":r=null,q=v.child;for(v.child=null;q!==null;){if(g=q.alternate,g!==null&&v2(g)===null){v.child=q;break}g=q.sibling,q.sibling=r,r=q,q=g}_P(v,!0,r,null,A,W);break;case"together":_P(v,!1,null,null,void 0,W);break;default:v.memoizedState=null}return v.child}function _r(g,v,r){if(g!==null&&(v.dependencies=g.dependencies),Z1=-1,aw|=v.lanes,(r&v.childLanes)===0)if(g!==null){if(S4(g,v,r,!1),(r&v.childLanes)===0)return null}else return null;if(g!==null&&v.child!==g.child)throw Error("Resuming work not yet implemented.");if(v.child!==null){g=v.child,r=mr(g,g.pendingProps),v.child=r;for(r.return=v;g.sibling!==null;)g=g.sibling,r=r.sibling=mr(g,g.pendingProps),r.return=v;r.sibling=null}return v.child}function yP(g,v){if((g.lanes&v)!==0)return!0;return g=g.dependencies,g!==null&&iO(g)?!0:!1}function sz(g,v,r){switch(v.tag){case 3:V(v,v.stateNode.containerInfo),Bw(v,i0,g.memoizedState.cache),l5();break;case 27:case 5:i(v);break;case 4:V(v,v.stateNode.containerInfo);break;case 10:Bw(v,v.type,v.memoizedProps.value);break;case 12:(r&v.childLanes)!==0&&(v.flags|=4),v.flags|=2048;var H=v.stateNode;H.effectDuration=-0,H.passiveEffectDuration=-0;break;case 31:if(v.memoizedState!==null)return v.flags|=128,wP(v),null;break;case 13:if(H=v.memoizedState,H!==null){if(H.dehydrated!==null)return uw(v),v.flags|=128,null;if((r&v.child.childLanes)!==0)return RY(g,v,r);return uw(v),g=_r(g,v,r),g!==null?g.sibling:null}uw(v);break;case 19:var q=(g.flags&128)!==0;if(H=(r&v.childLanes)!==0,H||(S4(g,v,r,!1),H=(r&v.childLanes)!==0),q){if(H)return JY(g,v,r);v.flags|=128}if(q=v.memoizedState,q!==null&&(q.rendering=null,q.tail=null,q.lastEffect=null),Kg(k0,k0.current,v),H)break;else return null;case 22:return v.lanes=0,bY(g,v,r,v.pendingProps);case 24:Bw(v,i0,g.memoizedState.cache)}return _r(g,v,r)}function jP(g,v,r){if(v._debugNeedsRemount&&g!==null){r=VA(v.type,v.key,v.pendingProps,v._debugOwner||null,v.mode,v.lanes),r._debugStack=v._debugStack,r._debugTask=v._debugTask;var H=v.return;if(H===null)throw Error("Cannot swap the root fiber.");if(g.alternate=null,v.alternate=null,r.index=v.index,r.sibling=v.sibling,r.return=v.return,r.ref=v.ref,r._debugInfo=v._debugInfo,v===H.child)H.child=r;else{var q=H.child;if(q===null)throw Error("Expected parent to have a child.");for(;q.sibling!==v;)if(q=q.sibling,q===null)throw Error("Expected to find the previous sibling.");q.sibling=r}return v=H.deletions,v===null?(H.deletions=[g],H.flags|=16):v.push(g),r.flags|=2,r}if(g!==null)if(g.memoizedProps!==v.pendingProps||v.type!==g.type)e0=!0;else{if(!yP(g,r)&&(v.flags&128)===0)return e0=!1,sz(g,v,r);e0=(g.flags&131072)!==0?!0:!1}else{if(e0=!1,H=eg)Lw(),H=(v.flags&1048576)!==0;H&&(H=v.index,Lw(),rX(v,k8,H))}switch(v.lanes=0,v.tag){case 16:g:if(H=v.pendingProps,g=Iw(v.elementType),v.type=g,typeof g==="function")kA(g)?(H=V5(g,H),v.tag=1,v.type=g=T5(g),v=YY(null,v,g,H,r)):(v.tag=0,DP(v,g),v.type=g=T5(g),v=xP(null,v,g,H,r));else{if(g!==void 0&&g!==null){if(q=g.$$typeof,q===B8){v.tag=11,v.type=g=mA(g),v=qY(null,v,g,H,r);break g}else if(q===m2){v.tag=14,v=AY(null,v,g,H,r);break g}}throw v="",g!==null&&typeof g==="object"&&g.$$typeof===wv&&(v=" Did you wrap a component in React.lazy() more than once?"),r=d(g)||g,Error("Element type is invalid. Received a promise that resolves to: "+r+". Lazy element type must resolve to a class or function."+v)}return v;case 0:return xP(g,v,v.type,v.pendingProps,r);case 1:return H=v.type,q=V5(H,v.pendingProps),YY(g,v,H,q,r);case 3:g:{if(V(v,v.stateNode.containerInfo),g===null)throw Error("Should have a current fiber. This is a bug in React.");H=v.pendingProps;var A=v.memoizedState;q=A.element,gP(g,v),O8(v,H,null,r);var W=v.memoizedState;if(H=W.cache,Bw(v,i0,H),H!==A.cache&&eA(v,[i0],r,!0),H8(),H=W.element,A.isDehydrated)if(A={element:H,isDehydrated:!1,cache:W.cache},v.updateQueue.baseState=A,v.memoizedState=A,v.flags&256){v=GY(g,v,H,r);break g}else if(H!==q){q=d1(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),v),a6(q),v=GY(g,v,H,r);break g}else{switch(g=v.stateNode.containerInfo,g.nodeType){case 9:g=g.body;break;default:g=g.nodeName==="HTML"?g.ownerDocument.body:g}K0=rv(g.firstChild),G1=v,eg=!0,jw=null,Lr=!1,qv=null,Bv=!0,r=TR(v,null,H,r);for(v.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(l5(),H===q){v=_r(g,v,r);break g}M1(g,v,H,r)}v=v.child}return v;case 26:return h2(g,v),g===null?(r=yG(v.type,null,v.pendingProps,null))?v.memoizedState=r:eg||(r=v.type,g=v.pendingProps,H=Vg(Dw.current),H=N2(H).createElement(r),H[Y1]=v,H[B1]=g,X1(H,r,g),zg(H),v.stateNode=H):v.memoizedState=yG(v.type,g.memoizedProps,v.pendingProps,g.memoizedState),null;case 27:return i(v),g===null&&eg&&(H=Vg(Dw.current),q=vg(),H=v.stateNode=EG(v.type,v.pendingProps,H,q,!1),Lr||(q=ZG(H,v.type,v.pendingProps,q),q!==null&&(S5(v,0).serverProps=q)),G1=v,Bv=!0,q=K0,ow(v.type)?(dW=q,K0=rv(H.firstChild)):K0=q),M1(g,v,v.pendingProps.children,r),h2(g,v),g===null&&(v.flags|=4194304),v.child;case 5:return g===null&&eg&&(A=vg(),H=uA(v.type,A.ancestorInfo),q=K0,(W=!q)||(W=_U(q,v.type,v.pendingProps,Bv),W!==null?(v.stateNode=W,Lr||(A=ZG(W,v.type,v.pendingProps,A),A!==null&&(S5(v,0).serverProps=A)),G1=v,K0=rv(W.firstChild),Bv=!1,A=!0):A=!1,W=!A),W&&(H&&yO(v,q),Fw(v))),i(v),q=v.type,A=v.pendingProps,W=g!==null?g.memoizedProps:null,H=A.children,Gb(q,A)?H=null:W!==null&&Gb(q,W)&&(v.flags|=32),v.memoizedState!==null&&(q=OP(g,v,fz,null,null,r),JH._currentValue=q),h2(g,v),M1(g,v,H,r),v.child;case 6:return g===null&&eg&&(r=v.pendingProps,g=vg(),H=g.ancestorInfo.current,r=H!=null?SO(r,H.tag,g.ancestorInfo.implicitRootScope):!0,g=K0,(H=!g)||(H=yU(g,v.pendingProps,Bv),H!==null?(v.stateNode=H,G1=v,K0=null,H=!0):H=!1,H=!H),H&&(r&&yO(v,g),Fw(v))),null;case 13:return RY(g,v,r);case 4:return V(v,v.stateNode.containerInfo),H=v.pendingProps,g===null?v.child=a5(v,null,H,r):M1(g,v,H,r),v.child;case 11:return qY(g,v,v.type,v.pendingProps,r);case 7:return M1(g,v,v.pendingProps,r),v.child;case 8:return M1(g,v,v.pendingProps.children,r),v.child;case 12:return v.flags|=4,v.flags|=2048,H=v.stateNode,H.effectDuration=-0,H.passiveEffectDuration=-0,M1(g,v,v.pendingProps.children,r),v.child;case 10:return H=v.type,q=v.pendingProps,A=q.value,"value"in q||rh||(rh=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Bw(v,H,A),M1(g,v,q.children,r),v.child;case 9:return q=v.type._context,H=v.pendingProps.children,typeof H!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),o5(v),q=U0(q),H=RW(H,q,void 0),v.flags|=1,M1(g,v,H,r),v.child;case 14:return AY(g,v,v.type,v.pendingProps,r);case 15:return PY(g,v,v.type,v.pendingProps,r);case 19:return JY(g,v,r);case 31:return az(g,v,r);case 22:return bY(g,v,r,v.pendingProps);case 24:return o5(v),H=U0(i0),g===null?(q=dA(),q===null&&(q=G0,A=cA(),q.pooledCache=A,x5(A),A!==null&&(q.pooledCacheLanes|=r),q=A),v.memoizedState={parent:H,cache:q},sA(v),Bw(v,i0,q)):((g.lanes&r)!==0&&(gP(g,v),O8(v,null,null,r),H8()),q=g.memoizedState,A=v.memoizedState,q.parent!==H?(q={parent:H,cache:H},v.memoizedState=q,v.lanes===0&&(v.memoizedState=v.updateQueue.baseState=q),Bw(v,i0,H)):(H=A.cache,Bw(v,i0,H),H!==q.cache&&eA(v,[i0],r,!0))),M1(g,v,v.pendingProps.children,r),v.child;case 29:throw v.pendingProps}throw Error("Unknown unit of work tag ("+v.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function yr(g){g.flags|=4}function iP(g,v,r,H,q){if(v=(g.mode&KF)!==Ig)v=!1;if(v){if(g.flags|=16777216,(q&335544128)===q)if(g.stateNode.complete)g.flags|=8192;else if(pY())g.flags|=8192;else throw d5=bq,JW}else g.flags&=-16777217}function QY(g,v){if(v.type!=="stylesheet"||(v.state.loading&Tv)!==b4)g.flags&=-16777217;else if(g.flags|=16777216,!eG(v))if(pY())g.flags|=8192;else throw d5=bq,JW}function Q2(g,v){v!==null&&(g.flags|=4),g.flags&16384&&(v=g.tag!==22?I4():536870912,g.lanes|=v,w4|=v)}function W8(g,v){if(!eg)switch(g.tailMode){case"hidden":v=g.tail;for(var r=null;v!==null;)v.alternate!==null&&(r=v),v=v.sibling;r===null?g.tail=null:r.sibling=null;break;case"collapsed":r=g.tail;for(var H=null;r!==null;)r.alternate!==null&&(H=r),r=r.sibling;H===null?v||g.tail===null?g.tail=null:g.tail.sibling=null:H.sibling=null}}function h0(g){var v=g.alternate!==null&&g.alternate.child===g.child,r=0,H=0;if(v)if((g.mode&xg)!==Ig){for(var{selfBaseDuration:q,child:A}=g;A!==null;)r|=A.lanes|A.childLanes,H|=A.subtreeFlags&65011712,H|=A.flags&65011712,q+=A.treeBaseDuration,A=A.sibling;g.treeBaseDuration=q}else for(q=g.child;q!==null;)r|=q.lanes|q.childLanes,H|=q.subtreeFlags&65011712,H|=q.flags&65011712,q.return=g,q=q.sibling;else if((g.mode&xg)!==Ig){q=g.actualDuration,A=g.selfBaseDuration;for(var W=g.child;W!==null;)r|=W.lanes|W.childLanes,H|=W.subtreeFlags,H|=W.flags,q+=W.actualDuration,A+=W.treeBaseDuration,W=W.sibling;g.actualDuration=q,g.treeBaseDuration=A}else for(q=g.child;q!==null;)r|=q.lanes|q.childLanes,H|=q.subtreeFlags,H|=q.flags,q.return=g,q=q.sibling;return g.subtreeFlags|=H,g.childLanes=r,v}function gU(g,v,r){var H=v.pendingProps;switch(jA(v),v.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return h0(v),null;case 1:return h0(v),null;case 3:if(r=v.stateNode,H=null,g!==null&&(H=g.memoizedState.cache),v.memoizedState.cache!==H&&(v.flags|=2048),Vr(i0,v),p(v),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),g===null||g.child===null)C4(v)?(fA(),yr(v)):g===null||g.memoizedState.isDehydrated&&(v.flags&256)===0||(v.flags|=1024,iA());return h0(v),null;case 26:var{type:q,memoizedState:A}=v;return g===null?(yr(v),A!==null?(h0(v),QY(v,A)):(h0(v),iP(v,q,null,H,r))):A?A!==g.memoizedState?(yr(v),h0(v),QY(v,A)):(h0(v),v.flags&=-16777217):(g=g.memoizedProps,g!==H&&yr(v),h0(v),iP(v,q,g,H,r)),null;case 27:if(Wg(v),r=Vg(Dw.current),q=v.type,g!==null&&v.stateNode!=null)g.memoizedProps!==H&&yr(v);else{if(!H){if(v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return h0(v),null}g=vg(),C4(v)?qX(v,g):(g=EG(q,H,r,g,!0),v.stateNode=g,yr(v))}return h0(v),null;case 5:if(Wg(v),q=v.type,g!==null&&v.stateNode!=null)g.memoizedProps!==H&&yr(v);else{if(!H){if(v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return h0(v),null}var W=vg();if(C4(v))qX(v,W);else{switch(A=Vg(Dw.current),uA(q,W.ancestorInfo),W=W.context,A=N2(A),W){case N6:A=A.createElementNS(d4,q);break;case xq:A=A.createElementNS(i2,q);break;default:switch(q){case"svg":A=A.createElementNS(d4,q);break;case"math":A=A.createElementNS(i2,q);break;case"script":A=A.createElement("div"),A.innerHTML="<script></script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof H.is==="string"?A.createElement("select",{is:H.is}):A.createElement("select"),H.multiple?A.multiple=!0:H.size&&(A.size=H.size);break;default:A=typeof H.is==="string"?A.createElement(q,{is:H.is}):A.createElement(q),q.indexOf("-")===-1&&(q!==q.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",q),Object.prototype.toString.call(A)!=="[object HTMLUnknownElement]"||Dv.call(Ih,q)||(Ih[q]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",q)))}}A[Y1]=v,A[B1]=H;g:for(W=v.child;W!==null;){if(W.tag===5||W.tag===6)A.appendChild(W.stateNode);else if(W.tag!==4&&W.tag!==27&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===v)break g;for(;W.sibling===null;){if(W.return===null||W.return===v)break g;W=W.return}W.sibling.return=W.return,W=W.sibling}v.stateNode=A;g:switch(X1(A,q,H),q){case"button":case"input":case"select":case"textarea":H=!!H.autoFocus;break g;case"img":H=!0;break g;default:H=!1}H&&yr(v)}}return h0(v),iP(v,v.type,g===null?null:g.memoizedProps,v.pendingProps,r),null;case 6:if(g&&v.stateNode!=null)g.memoizedProps!==H&&yr(v);else{if(typeof H!=="string"&&v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(g=Vg(Dw.current),r=vg(),C4(v)){if(g=v.stateNode,r=v.memoizedProps,q=!Lr,H=null,A=G1,A!==null)switch(A.tag){case 3:q&&(q=kG(g,r,H),q!==null&&(S5(v,0).serverProps=q));break;case 27:case 5:H=A.memoizedProps,q&&(q=kG(g,r,H),q!==null&&(S5(v,0).serverProps=q))}g[Y1]=v,g=g.nodeValue===r||H!==null&&H.suppressHydrationWarning===!0||LG(g.nodeValue,r)?!0:!1,g||Fw(v,!0)}else q=r.ancestorInfo.current,q!=null&&SO(H,q.tag,r.ancestorInfo.implicitRootScope),g=N2(g).createTextNode(H),g[Y1]=v,v.stateNode=g}return h0(v),null;case 31:if(r=v.memoizedState,g===null||g.memoizedState!==null){if(H=C4(v),r!==null){if(g===null){if(!H)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(g=v.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");g[Y1]=v,h0(v),(v.mode&xg)!==Ig&&r!==null&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration))}else fA(),l5(),(v.flags&128)===0&&(r=v.memoizedState=null),v.flags|=4,h0(v),(v.mode&xg)!==Ig&&r!==null&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration));g=!1}else r=iA(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=r),g=!0;if(!g){if(v.flags&256)return gv(v),v;return gv(v),null}if((v.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return h0(v),null;case 13:if(H=v.memoizedState,g===null||g.memoizedState!==null&&g.memoizedState.dehydrated!==null){if(q=H,A=C4(v),q!==null&&q.dehydrated!==null){if(g===null){if(!A)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(A=v.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");A[Y1]=v,h0(v),(v.mode&xg)!==Ig&&q!==null&&(q=v.child,q!==null&&(v.treeBaseDuration-=q.treeBaseDuration))}else fA(),l5(),(v.flags&128)===0&&(q=v.memoizedState=null),v.flags|=4,h0(v),(v.mode&xg)!==Ig&&q!==null&&(q=v.child,q!==null&&(v.treeBaseDuration-=q.treeBaseDuration));q=!1}else q=iA(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=q),q=!0;if(!q){if(v.flags&256)return gv(v),v;return gv(v),null}}if(gv(v),(v.flags&128)!==0)return v.lanes=r,(v.mode&xg)!==Ig&&v8(v),v;return r=H!==null,g=g!==null&&g.memoizedState!==null,r&&(H=v.child,q=null,H.alternate!==null&&H.alternate.memoizedState!==null&&H.alternate.memoizedState.cachePool!==null&&(q=H.alternate.memoizedState.cachePool.pool),A=null,H.memoizedState!==null&&H.memoizedState.cachePool!==null&&(A=H.memoizedState.cachePool.pool),A!==q&&(H.flags|=2048)),r!==g&&r&&(v.child.flags|=8192),Q2(v,v.updateQueue),h0(v),(v.mode&xg)!==Ig&&r&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration)),null;case 4:return p(v),g===null&&Ab(v.stateNode.containerInfo),h0(v),null;case 10:return Vr(v.type,v),h0(v),null;case 19:if(Jg(k0,v),H=v.memoizedState,H===null)return h0(v),null;if(q=(v.flags&128)!==0,A=H.rendering,A===null)if(q)W8(H,!1);else{if(I0!==ww||g!==null&&(g.flags&128)!==0)for(g=v.child;g!==null;){if(A=v2(g),A!==null){v.flags|=128,W8(H,!1),g=A.updateQueue,v.updateQueue=g,Q2(v,g),v.subtreeFlags=0,g=r;for(r=v.child;r!==null;)gX(r,g),r=r.sibling;return Kg(k0,k0.current&R6|s8,v),eg&&kr(v,H.treeForkCount),v.child}g=g.sibling}H.tail!==null&&w1()>Uq&&(v.flags|=128,q=!0,W8(H,!1),v.lanes=4194304)}else{if(!q)if(g=v2(A),g!==null){if(v.flags|=128,q=!0,g=g.updateQueue,v.updateQueue=g,Q2(v,g),W8(H,!0),H.tail===null&&H.tailMode==="hidden"&&!A.alternate&&!eg)return h0(v),null}else 2*w1()-H.renderingStartTime>Uq&&r!==536870912&&(v.flags|=128,q=!0,W8(H,!1),v.lanes=4194304);H.isBackwards?(A.sibling=v.child,v.child=A):(g=H.last,g!==null?g.sibling=A:v.child=A,H.last=A)}if(H.tail!==null)return g=H.tail,H.rendering=g,H.tail=g.sibling,H.renderingStartTime=w1(),g.sibling=null,r=k0.current,r=q?r&R6|s8:r&R6,Kg(k0,r,v),eg&&kr(v,H.treeForkCount),g;return h0(v),null;case 22:case 23:return gv(v),rP(v),H=v.memoizedState!==null,g!==null?g.memoizedState!==null!==H&&(v.flags|=8192):H&&(v.flags|=8192),H?(r&536870912)!==0&&(v.flags&128)===0&&(h0(v),v.subtreeFlags&6&&(v.flags|=8192)):h0(v),r=v.updateQueue,r!==null&&Q2(v,r.retryQueue),r=null,g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),H=null,v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(H=v.memoizedState.cachePool.pool),H!==r&&(v.flags|=2048),g!==null&&Jg(t5,v),null;case 24:return r=null,g!==null&&(r=g.memoizedState.cache),v.memoizedState.cache!==r&&(v.flags|=2048),Vr(i0,v),h0(v),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+v.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function vU(g,v){switch(jA(v),v.tag){case 1:return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&xg)!==Ig&&v8(v),v):null;case 3:return Vr(i0,v),p(v),g=v.flags,(g&65536)!==0&&(g&128)===0?(v.flags=g&-65537|128,v):null;case 26:case 27:case 5:return Wg(v),null;case 31:if(v.memoizedState!==null){if(gv(v),v.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");l5()}return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&xg)!==Ig&&v8(v),v):null;case 13:if(gv(v),g=v.memoizedState,g!==null&&g.dehydrated!==null){if(v.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");l5()}return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&xg)!==Ig&&v8(v),v):null;case 19:return Jg(k0,v),null;case 4:return p(v),null;case 10:return Vr(v.type,v),null;case 22:case 23:return gv(v),rP(v),g!==null&&Jg(t5,v),g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&xg)!==Ig&&v8(v),v):null;case 24:return Vr(i0,v),null;case 25:return null;default:return null}}function KY(g,v){switch(jA(v),v.tag){case 3:Vr(i0,v),p(v);break;case 26:case 27:case 5:Wg(v);break;case 4:p(v);break;case 31:v.memoizedState!==null&&gv(v);break;case 13:gv(v);break;case 19:Jg(k0,v);break;case 10:Vr(v.type,v);break;case 22:case 23:gv(v),rP(v),g!==null&&Jg(t5,v);break;case 24:Vr(i0,v)}}function Wr(g){return(g.mode&xg)!==Ig}function $Y(g,v){Wr(g)?(br(),M8(v,g),Pr()):M8(v,g)}function fP(g,v,r){Wr(g)?(br(),m4(r,g,v),Pr()):m4(r,g,v)}function M8(g,v){try{var r=v.updateQueue,H=r!==null?r.lastEffect:null;if(H!==null){var q=H.next;r=q;do{if((r.tag&g)===g&&(H=void 0,(g&u1)!==Mq&&(F6=!0),H=Ag(v,FF,r),(g&u1)!==Mq&&(F6=!1),H!==void 0&&typeof H!=="function")){var A=void 0;A=(r.tag&Pv)!==0?"useLayoutEffect":(r.tag&u1)!==0?"useInsertionEffect":"useEffect";var W=void 0;W=H===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof H.then==="function"?`

It looks like you wrote `+A+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+A+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+H,Ag(v,function(X,h){console.error("%s must not return anything besides a function, which is used for clean-up.%s",X,h)},A,W)}r=r.next}while(r!==q)}}catch(X){w0(v,v.return,X)}}function m4(g,v,r){try{var H=v.updateQueue,q=H!==null?H.lastEffect:null;if(q!==null){var A=q.next;H=A;do{if((H.tag&g)===g){var W=H.inst,X=W.destroy;X!==void 0&&(W.destroy=void 0,(g&u1)!==Mq&&(F6=!0),q=v,Ag(q,BF,q,r,X),(g&u1)!==Mq&&(F6=!1))}H=H.next}while(H!==A)}}catch(h){w0(v,v.return,h)}}function zY(g,v){Wr(g)?(br(),M8(v,g),Pr()):M8(v,g)}function nP(g,v,r){Wr(g)?(br(),m4(r,g,v),Pr()):m4(r,g,v)}function UY(g){var v=g.updateQueue;if(v!==null){var r=g.stateNode;g.type.defaultProps||"ref"in g.memoizedProps||K6||(r.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",m(g)||"instance"),r.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",m(g)||"instance"));try{Ag(g,FX,v,r)}catch(H){w0(g,g.return,H)}}}function rU(g,v,r){return g.getSnapshotBeforeUpdate(v,r)}function wU(g,v){var{memoizedProps:r,memoizedState:H}=v;v=g.stateNode,g.type.defaultProps||"ref"in g.memoizedProps||K6||(v.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",m(g)||"instance"),v.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",m(g)||"instance"));try{var q=V5(g.type,r),A=Ag(g,rU,v,q,H);r=wh,A!==void 0||r.has(g.type)||(r.add(g.type),Ag(g,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",m(g))})),v.__reactInternalSnapshotBeforeUpdate=A}catch(W){w0(g,g.return,W)}}function LY(g,v,r){r.props=V5(g.type,g.memoizedProps),r.state=g.memoizedState,Wr(g)?(br(),Ag(g,UR,g,v,r),Pr()):Ag(g,UR,g,v,r)}function HU(g){var v=g.ref;if(v!==null){switch(g.tag){case 26:case 27:case 5:var r=g.stateNode;break;case 30:r=g.stateNode;break;default:r=g.stateNode}if(typeof v==="function")if(Wr(g))try{br(),g.refCleanup=v(r)}finally{Pr()}else g.refCleanup=v(r);else typeof v==="string"?console.error("String refs are no longer supported."):v.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",m(g)),v.current=r}}function X8(g,v){try{Ag(g,HU,g)}catch(r){w0(g,v,r)}}function Mr(g,v){var{ref:r,refCleanup:H}=g;if(r!==null)if(typeof H==="function")try{if(Wr(g))try{br(),Ag(g,H)}finally{Pr(g)}else Ag(g,H)}catch(q){w0(g,v,q)}finally{g.refCleanup=null,g=g.alternate,g!=null&&(g.refCleanup=null)}else if(typeof r==="function")try{if(Wr(g))try{br(),Ag(g,r,null)}finally{Pr(g)}else Ag(g,r,null)}catch(q){w0(g,v,q)}else r.current=null}function FY(g,v,r,H){var q=g.memoizedProps,A=q.id,W=q.onCommit;q=q.onRender,v=v===null?"mount":"update",Oq&&(v="nested-update"),typeof q==="function"&&q(A,v,g.actualDuration,g.treeBaseDuration,g.actualStartTime,r),typeof W==="function"&&W(A,v,H,r)}function OU(g,v,r,H){var q=g.memoizedProps;g=q.id,q=q.onPostCommit,v=v===null?"mount":"update",Oq&&(v="nested-update"),typeof q==="function"&&q(g,v,H,r)}function BY(g){var{type:v,memoizedProps:r,stateNode:H}=g;try{Ag(g,uU,H,v,r,g)}catch(q){w0(g,g.return,q)}}function eP(g,v,r){try{Ag(g,CU,g.stateNode,g.type,r,v,g)}catch(H){w0(g,g.return,H)}}function IY(g){return g.tag===5||g.tag===3||g.tag===26||g.tag===27&&ow(g.type)||g.tag===4}function cP(g){g:for(;;){for(;g.sibling===null;){if(g.return===null||IY(g.return))return null;g=g.return}g.sibling.return=g.return;for(g=g.sibling;g.tag!==5&&g.tag!==6&&g.tag!==18;){if(g.tag===27&&ow(g.type))continue g;if(g.flags&2)continue g;if(g.child===null||g.tag===4)continue g;else g.child.return=g,g=g.child}if(!(g.flags&2))return g.stateNode}}function tP(g,v,r){var H=g.tag;if(H===5||H===6)g=g.stateNode,v?(lG(r),(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(g,v)):(lG(r),v=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,v.appendChild(g),r=r._reactRootContainer,r!==null&&r!==void 0||v.onclick!==null||(v.onclick=Dr));else if(H!==4&&(H===27&&ow(g.type)&&(r=g.stateNode,v=null),g=g.child,g!==null))for(tP(g,v,r),g=g.sibling;g!==null;)tP(g,v,r),g=g.sibling}function K2(g,v,r){var H=g.tag;if(H===5||H===6)g=g.stateNode,v?r.insertBefore(g,v):r.appendChild(g);else if(H!==4&&(H===27&&ow(g.type)&&(r=g.stateNode),g=g.child,g!==null))for(K2(g,v,r),g=g.sibling;g!==null;)K2(g,v,r),g=g.sibling}function qU(g){for(var v,r=g.return;r!==null;){if(IY(r)){v=r;break}r=r.return}if(v==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(v.tag){case 27:v=v.stateNode,r=cP(g),K2(g,r,v);break;case 5:r=v.stateNode,v.flags&32&&(SG(r),v.flags&=-33),v=cP(g),K2(g,v,r);break;case 3:case 4:v=v.stateNode.containerInfo,r=cP(g),tP(g,r,v);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function NY(g){var{stateNode:v,memoizedProps:r}=g;try{Ag(g,eU,g.type,r,v,g)}catch(H){w0(g,g.return,H)}}function ZY(g,v){return v.tag===31?(v=v.memoizedState,g.memoizedState!==null&&v===null):v.tag===13?(g=g.memoizedState,v=v.memoizedState,g!==null&&g.dehydrated!==null&&(v===null||v.dehydrated===null)):v.tag===3?g.memoizedState.isDehydrated&&(v.flags&256)===0:!1}function AU(g,v){if(g=g.containerInfo,cW=Vq,g=i9(g),SA(g)){if("selectionStart"in g)var r={start:g.selectionStart,end:g.selectionEnd};else g:{r=(r=g.ownerDocument)&&r.defaultView||window;var H=r.getSelection&&r.getSelection();if(H&&H.rangeCount!==0){r=H.anchorNode;var{anchorOffset:q,focusNode:A}=H;H=H.focusOffset;try{r.nodeType,A.nodeType}catch(gg){r=null;break g}var W=0,X=-1,h=-1,Q=0,u=0,T=g,B=null;v:for(;;){for(var o;;){if(T!==r||q!==0&&T.nodeType!==3||(X=W+q),T!==A||H!==0&&T.nodeType!==3||(h=W+H),T.nodeType===3&&(W+=T.nodeValue.length),(o=T.firstChild)===null)break;B=T,T=o}for(;;){if(T===g)break v;if(B===r&&++Q===q&&(X=W),B===A&&++u===H&&(h=W),(o=T.nextSibling)!==null)break;T=B,B=T.parentNode}T=o}r=X===-1||h===-1?null:{start:X,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;tW={focusedElem:g,selectionRange:r},Vq=!1;for(O1=v;O1!==null;)if(v=O1,g=v.child,(v.subtreeFlags&1028)!==0&&g!==null)g.return=v,O1=g;else for(;O1!==null;){switch(g=v=O1,r=g.alternate,q=g.flags,g.tag){case 0:if((q&4)!==0&&(g=g.updateQueue,g=g!==null?g.events:null,g!==null))for(r=0;r<g.length;r++)q=g[r],q.ref.impl=q.nextImpl;break;case 11:case 15:break;case 1:(q&1024)!==0&&r!==null&&wU(g,r);break;case 3:if((q&1024)!==0){if(g=g.stateNode.containerInfo,r=g.nodeType,r===9)Rb(g);else if(r===1)switch(g.nodeName){case"HEAD":case"HTML":case"BODY":Rb(g);break;default:g.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((q&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(g=v.sibling,g!==null){g.return=v.return,O1=g;break}O1=v.return}}function uY(g,v,r){var H=a1(),q=Hr(),A=qr(),W=Ar(),X=r.flags;switch(r.tag){case 0:case 11:case 15:Xr(g,r),X&4&&$Y(r,Pv|Zv);break;case 1:if(Xr(g,r),X&4)if(g=r.stateNode,v===null)r.type.defaultProps||"ref"in r.memoizedProps||K6||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",m(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",m(r)||"instance")),Wr(r)?(br(),Ag(r,hW,r,g),Pr()):Ag(r,hW,r,g);else{var h=V5(r.type,v.memoizedProps);v=v.memoizedState,r.type.defaultProps||"ref"in r.memoizedProps||K6||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",m(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",m(r)||"instance")),Wr(r)?(br(),Ag(r,KR,r,g,h,v,g.__reactInternalSnapshotBeforeUpdate),Pr()):Ag(r,KR,r,g,h,v,g.__reactInternalSnapshotBeforeUpdate)}X&64&&UY(r),X&512&&X8(r,r.return);break;case 3:if(v=Er(),Xr(g,r),X&64&&(X=r.updateQueue,X!==null)){if(h=null,r.child!==null)switch(r.child.tag){case 27:case 5:h=r.child.stateNode;break;case 1:h=r.child.stateNode}try{Ag(r,FX,X,h)}catch(u){w0(r,r.return,u)}}g.effectDuration+=nO(v);break;case 27:v===null&&X&4&&NY(r);case 26:case 5:if(Xr(g,r),v===null){if(X&4)BY(r);else if(X&64){g=r.type,v=r.memoizedProps,h=r.stateNode;try{Ag(r,TU,h,g,v,r)}catch(u){w0(r,r.return,u)}}}X&512&&X8(r,r.return);break;case 12:if(X&4){X=Er(),Xr(g,r),g=r.stateNode,g.effectDuration+=g8(X);try{Ag(r,FY,r,v,iw,g.effectDuration)}catch(u){w0(r,r.return,u)}}else Xr(g,r);break;case 31:Xr(g,r),X&4&&SY(g,r);break;case 13:Xr(g,r),X&4&&lY(g,r),X&64&&(g=r.memoizedState,g!==null&&(g=g.dehydrated,g!==null&&(X=hU.bind(null,r),jU(g,X))));break;case 22:if(X=r.memoizedState!==null||rw,!X){v=v!==null&&v.memoizedState!==null||c0,h=rw;var Q=c0;rw=X,(c0=v)&&!Q?(Yr(g,r,(r.subtreeFlags&8772)!==0),(r.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&DO(r,Ug,Fg)):Xr(g,r),rw=h,c0=Q}break;case 30:break;default:Xr(g,r)}(r.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&((u0||0.05<B0)&&rr(r,Ug,Fg,B0,L0),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Fg-Ug&&(ZY(r.return.alternate,r.return)||vr(r,Ug,Fg,"Mount"))),s1(H),Or(q),L0=A,u0=W}function TY(g){var v=g.alternate;v!==null&&(g.alternate=null,TY(v)),g.child=null,g.deletions=null,g.sibling=null,g.tag===5&&(v=g.stateNode,v!==null&&Hg(v)),g.stateNode=null,g._debugOwner=null,g.return=null,g.dependencies=null,g.memoizedProps=null,g.memoizedState=null,g.pendingProps=null,g.stateNode=null,g.updateQueue=null}function jr(g,v,r){for(r=r.child;r!==null;)CY(g,v,r),r=r.sibling}function CY(g,v,r){if($1&&typeof $1.onCommitFiberUnmount==="function")try{$1.onCommitFiberUnmount(t4,r)}catch(Q){Kr||(Kr=!0,console.error("React instrumentation encountered an error: %o",Q))}var H=a1(),q=Hr(),A=qr(),W=Ar();switch(r.tag){case 26:c0||Mr(r,v),jr(g,v,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(g=r.stateNode,g.parentNode.removeChild(g));break;case 27:c0||Mr(r,v);var X=t0,h=j1;ow(r.type)&&(t0=r.stateNode,j1=!1),jr(g,v,r),Ag(r,z8,r.stateNode),t0=X,j1=h;break;case 5:c0||Mr(r,v);case 6:if(X=t0,h=j1,t0=null,jr(g,v,r),t0=X,j1=h,t0!==null)if(j1)try{Ag(r,oU,t0,r.stateNode)}catch(Q){w0(r,v,Q)}else try{Ag(r,lU,t0,r.stateNode)}catch(Q){w0(r,v,Q)}break;case 18:t0!==null&&(j1?(g=t0,oG(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g,r.stateNode),f4(g)):oG(t0,r.stateNode));break;case 4:X=t0,h=j1,t0=r.stateNode.containerInfo,j1=!0,jr(g,v,r),t0=X,j1=h;break;case 0:case 11:case 14:case 15:m4(u1,r,v),c0||fP(r,v,Pv),jr(g,v,r);break;case 1:c0||(Mr(r,v),X=r.stateNode,typeof X.componentWillUnmount==="function"&&LY(r,v,X)),jr(g,v,r);break;case 21:jr(g,v,r);break;case 22:c0=(X=c0)||r.memoizedState!==null,jr(g,v,r),c0=X;break;default:jr(g,v,r)}(r.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(r,Ug,Fg,B0,L0),s1(H),Or(q),L0=A,u0=W}function SY(g,v){if(v.memoizedState===null&&(g=v.alternate,g!==null&&(g=g.memoizedState,g!==null))){g=g.dehydrated;try{Ag(v,fU,g)}catch(r){w0(v,v.return,r)}}}function lY(g,v){if(v.memoizedState===null&&(g=v.alternate,g!==null&&(g=g.memoizedState,g!==null&&(g=g.dehydrated,g!==null))))try{Ag(v,nU,g)}catch(r){w0(v,v.return,r)}}function PU(g){switch(g.tag){case 31:case 13:case 19:var v=g.stateNode;return v===null&&(v=g.stateNode=new Hh),v;case 22:return g=g.stateNode,v=g._retryCache,v===null&&(v=g._retryCache=new Hh),v;default:throw Error("Unexpected Suspense handler tag ("+g.tag+"). This is a bug in React.")}}function $2(g,v){var r=PU(g);v.forEach(function(H){if(!r.has(H)){if(r.add(H),$r)if($6!==null&&z6!==null)h8(z6,$6);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var q=JU.bind(null,g,H);H.then(q,q)}})}function _1(g,v){var r=v.deletions;if(r!==null)for(var H=0;H<r.length;H++){var q=g,A=v,W=r[H],X=a1(),h=A;g:for(;h!==null;){switch(h.tag){case 27:if(ow(h.type)){t0=h.stateNode,j1=!1;break g}break;case 5:t0=h.stateNode,j1=!1;break g;case 3:case 4:t0=h.stateNode.containerInfo,j1=!0;break g}h=h.return}if(t0===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");CY(q,A,W),t0=null,j1=!1,(W.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&vr(W,Ug,Fg,"Unmount"),s1(X),q=W,A=q.alternate,A!==null&&(A.return=null),q.return=null}if(v.subtreeFlags&13886)for(v=v.child;v!==null;)oY(v,g),v=v.sibling}function oY(g,v){var r=a1(),H=Hr(),q=qr(),A=Ar(),W=g.alternate,X=g.flags;switch(g.tag){case 0:case 11:case 14:case 15:_1(v,g),y1(g),X&4&&(m4(u1|Zv,g,g.return),M8(u1|Zv,g),fP(g,g.return,Pv|Zv));break;case 1:if(_1(v,g),y1(g),X&512&&(c0||W===null||Mr(W,W.return)),X&64&&rw&&(X=g.updateQueue,X!==null&&(W=X.callbacks,W!==null))){var h=X.shared.hiddenCallbacks;X.shared.hiddenCallbacks=h===null?W:h.concat(W)}break;case 26:if(h=_v,_1(v,g),y1(g),X&512&&(c0||W===null||Mr(W,W.return)),X&4){var Q=W!==null?W.memoizedState:null;if(X=g.memoizedState,W===null)if(X===null)if(g.stateNode===null){g:{X=g.type,W=g.memoizedProps,h=h.ownerDocument||h;v:switch(X){case"title":if(Q=h.getElementsByTagName("title")[0],!Q||Q[Z8]||Q[Y1]||Q.namespaceURI===d4||Q.hasAttribute("itemprop"))Q=h.createElement(X),h.head.insertBefore(Q,h.querySelector("head > title"));X1(Q,X,W),Q[Y1]=g,zg(Q),X=Q;break g;case"link":var u=fG("link","href",h).get(X+(W.href||""));if(u){for(var T=0;T<u.length;T++)if(Q=u[T],Q.getAttribute("href")===(W.href==null||W.href===""?null:W.href)&&Q.getAttribute("rel")===(W.rel==null?null:W.rel)&&Q.getAttribute("title")===(W.title==null?null:W.title)&&Q.getAttribute("crossorigin")===(W.crossOrigin==null?null:W.crossOrigin)){u.splice(T,1);break v}}Q=h.createElement(X),X1(Q,X,W),h.head.appendChild(Q);break;case"meta":if(u=fG("meta","content",h).get(X+(W.content||""))){for(T=0;T<u.length;T++)if(Q=u[T],b0(W.content,"content"),Q.getAttribute("content")===(W.content==null?null:""+W.content)&&Q.getAttribute("name")===(W.name==null?null:W.name)&&Q.getAttribute("property")===(W.property==null?null:W.property)&&Q.getAttribute("http-equiv")===(W.httpEquiv==null?null:W.httpEquiv)&&Q.getAttribute("charset")===(W.charSet==null?null:W.charSet)){u.splice(T,1);break v}}Q=h.createElement(X),X1(Q,X,W),h.head.appendChild(Q);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+X+'". This is a bug in React.')}Q[Y1]=g,zg(Q),X=Q}g.stateNode=X}else nG(h,g.type,g.stateNode);else g.stateNode=iG(h,X,g.memoizedProps);else Q!==X?(Q===null?W.stateNode!==null&&(W=W.stateNode,W.parentNode.removeChild(W)):Q.count--,X===null?nG(h,g.type,g.stateNode):iG(h,X,g.memoizedProps)):X===null&&g.stateNode!==null&&eP(g,g.memoizedProps,W.memoizedProps)}break;case 27:_1(v,g),y1(g),X&512&&(c0||W===null||Mr(W,W.return)),W!==null&&X&4&&eP(g,g.memoizedProps,W.memoizedProps);break;case 5:if(_1(v,g),y1(g),X&512&&(c0||W===null||Mr(W,W.return)),g.flags&32){h=g.stateNode;try{Ag(g,SG,h)}catch(bg){w0(g,g.return,bg)}}X&4&&g.stateNode!=null&&(h=g.memoizedProps,eP(g,h,W!==null?W.memoizedProps:h)),X&1024&&(uW=!0,g.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(_1(v,g),y1(g),X&4){if(g.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");X=g.memoizedProps,W=W!==null?W.memoizedProps:X,h=g.stateNode;try{Ag(g,SU,h,W,X)}catch(bg){w0(g,g.return,bg)}}break;case 3:if(h=Er(),Dq=null,Q=_v,_v=Z2(v.containerInfo),_1(v,g),_v=Q,y1(g),X&4&&W!==null&&W.memoizedState.isDehydrated)try{Ag(g,iU,v.containerInfo)}catch(bg){w0(g,g.return,bg)}uW&&(uW=!1,xY(g)),v.effectDuration+=nO(h);break;case 4:X=_v,_v=Z2(g.stateNode.containerInfo),_1(v,g),y1(g),_v=X;break;case 12:X=Er(),_1(v,g),y1(g),g.stateNode.effectDuration+=g8(X);break;case 31:_1(v,g),y1(g),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,$2(g,X)));break;case 13:_1(v,g),y1(g),g.child.flags&8192&&g.memoizedState!==null!==(W!==null&&W.memoizedState!==null)&&(zq=w1()),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,$2(g,X)));break;case 22:h=g.memoizedState!==null;var B=W!==null&&W.memoizedState!==null,o=rw,gg=c0;if(rw=o||h,c0=gg||B,_1(v,g),c0=gg,rw=o,B&&!h&&!o&&!gg&&(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&DO(g,Ug,Fg),y1(g),X&8192)g:for(v=g.stateNode,v._visibility=h?v._visibility&~m8:v._visibility|m8,!h||W===null||B||rw||c0||(E5(g),(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&vr(g,Ug,Fg,"Disconnect")),W=null,v=g;;){if(v.tag===5||v.tag===26){if(W===null){B=W=v;try{Q=B.stateNode,h?Ag(B,DU,Q):Ag(B,VU,B.stateNode,B.memoizedProps)}catch(bg){w0(B,B.return,bg)}}}else if(v.tag===6){if(W===null){B=v;try{u=B.stateNode,h?Ag(B,mU,u):Ag(B,EU,u,B.memoizedProps)}catch(bg){w0(B,B.return,bg)}}}else if(v.tag===18){if(W===null){B=v;try{T=B.stateNode,h?Ag(B,xU,T):Ag(B,kU,B.stateNode)}catch(bg){w0(B,B.return,bg)}}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===g)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===g)break g;for(;v.sibling===null;){if(v.return===null||v.return===g)break g;W===v&&(W=null),v=v.return}W===v&&(W=null),v.sibling.return=v.return,v=v.sibling}X&4&&(X=g.updateQueue,X!==null&&(W=X.retryQueue,W!==null&&(X.retryQueue=null,$2(g,W))));break;case 19:_1(v,g),y1(g),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,$2(g,X)));break;case 30:break;case 21:break;default:_1(v,g),y1(g)}(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&((u0||0.05<B0)&&rr(g,Ug,Fg,B0,L0),g.alternate===null&&g.return!==null&&g.return.alternate!==null&&0.05<Fg-Ug&&(ZY(g.return.alternate,g.return)||vr(g,Ug,Fg,"Mount"))),s1(r),Or(H),L0=q,u0=A}function y1(g){var v=g.flags;if(v&2){try{Ag(g,qU,g)}catch(r){w0(g,g.return,r)}g.flags&=-3}v&4096&&(g.flags&=-4097)}function xY(g){if(g.subtreeFlags&1024)for(g=g.child;g!==null;){var v=g;xY(v),v.tag===5&&v.flags&1024&&v.stateNode.reset(),g=g.sibling}}function Xr(g,v){if(v.subtreeFlags&8772)for(v=v.child;v!==null;)uY(g,v.alternate,v),v=v.sibling}function DY(g){var v=a1(),r=Hr(),H=qr(),q=Ar();switch(g.tag){case 0:case 11:case 14:case 15:fP(g,g.return,Pv),E5(g);break;case 1:Mr(g,g.return);var A=g.stateNode;typeof A.componentWillUnmount==="function"&&LY(g,g.return,A),E5(g);break;case 27:Ag(g,z8,g.stateNode);case 26:case 5:Mr(g,g.return),E5(g);break;case 22:g.memoizedState===null&&E5(g);break;case 30:E5(g);break;default:E5(g)}(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(g,Ug,Fg,B0,L0),s1(v),Or(r),L0=H,u0=q}function E5(g){for(g=g.child;g!==null;)DY(g),g=g.sibling}function mY(g,v,r,H){var q=a1(),A=Hr(),W=qr(),X=Ar(),h=r.flags;switch(r.tag){case 0:case 11:case 15:Yr(g,r,H),$Y(r,Pv);break;case 1:if(Yr(g,r,H),v=r.stateNode,typeof v.componentDidMount==="function"&&Ag(r,hW,r,v),v=r.updateQueue,v!==null){g=r.stateNode;try{Ag(r,iz,v,g)}catch(Q){w0(r,r.return,Q)}}H&&h&64&&UY(r),X8(r,r.return);break;case 27:NY(r);case 26:case 5:Yr(g,r,H),H&&v===null&&h&4&&BY(r),X8(r,r.return);break;case 12:if(H&&h&4){h=Er(),Yr(g,r,H),H=r.stateNode,H.effectDuration+=g8(h);try{Ag(r,FY,r,v,iw,H.effectDuration)}catch(Q){w0(r,r.return,Q)}}else Yr(g,r,H);break;case 31:Yr(g,r,H),H&&h&4&&SY(g,r);break;case 13:Yr(g,r,H),H&&h&4&&lY(g,r);break;case 22:r.memoizedState===null&&Yr(g,r,H),X8(r,r.return);break;case 30:break;default:Yr(g,r,H)}(r.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(r,Ug,Fg,B0,L0),s1(q),Or(A),L0=W,u0=X}function Yr(g,v,r){r=r&&(v.subtreeFlags&8772)!==0;for(v=v.child;v!==null;)mY(g,v.alternate,v,r),v=v.sibling}function pP(g,v){var r=null;g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),g=null,v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(g=v.memoizedState.cachePool.pool),g!==r&&(g!=null&&x5(g),r!=null&&s6(r))}function dP(g,v){g=null,v.alternate!==null&&(g=v.alternate.memoizedState.cache),v=v.memoizedState.cache,v!==g&&(x5(v),g!=null&&s6(g))}function xv(g,v,r,H,q){if(v.subtreeFlags&10256||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child))for(v=v.child;v!==null;){var A=v.sibling;kY(g,v,r,H,A!==null?A.actualStartTime:q),v=A}}function kY(g,v,r,H,q){var A=a1(),W=Hr(),X=qr(),h=Ar(),Q=Ew,u=v.flags;switch(v.tag){case 0:case 11:case 15:(v.mode&xg)!==Ig&&0<v.actualStartTime&&(v.flags&1)!==0&&mO(v,v.actualStartTime,q,s0,r),xv(g,v,r,H,q),u&2048&&zY(v,T1|Zv);break;case 1:(v.mode&xg)!==Ig&&0<v.actualStartTime&&((v.flags&128)!==0?oA(v,v.actualStartTime,q,[]):(v.flags&1)!==0&&mO(v,v.actualStartTime,q,s0,r)),xv(g,v,r,H,q);break;case 3:var T=Er(),B=s0;s0=v.alternate!==null&&v.alternate.memoizedState.isDehydrated&&(v.flags&256)===0,xv(g,v,r,H,q),s0=B,u&2048&&(r=null,v.alternate!==null&&(r=v.alternate.memoizedState.cache),H=v.memoizedState.cache,H!==r&&(x5(H),r!=null&&s6(r))),g.passiveEffectDuration+=nO(T);break;case 12:if(u&2048){u=Er(),xv(g,v,r,H,q),g=v.stateNode,g.passiveEffectDuration+=g8(u);try{Ag(v,OU,v,v.alternate,iw,g.passiveEffectDuration)}catch(o){w0(v,v.return,o)}}else xv(g,v,r,H,q);break;case 31:u=s0,T=v.alternate!==null?v.alternate.memoizedState:null,B=v.memoizedState,T!==null&&B===null?(B=v.deletions,B!==null&&0<B.length&&B[0].tag===18?(s0=!1,T=T.hydrationErrors,T!==null&&oA(v,v.actualStartTime,q,T)):s0=!0):s0=!1,xv(g,v,r,H,q),s0=u;break;case 13:u=s0,T=v.alternate!==null?v.alternate.memoizedState:null,B=v.memoizedState,T===null||T.dehydrated===null||B!==null&&B.dehydrated!==null?s0=!1:(B=v.deletions,B!==null&&0<B.length&&B[0].tag===18?(s0=!1,T=T.hydrationErrors,T!==null&&oA(v,v.actualStartTime,q,T)):s0=!0),xv(g,v,r,H,q),s0=u;break;case 23:break;case 22:B=v.stateNode,T=v.alternate,v.memoizedState!==null?B._visibility&nr?xv(g,v,r,H,q):Y8(g,v,r,H,q):B._visibility&nr?xv(g,v,r,H,q):(B._visibility|=nr,k4(g,v,r,H,(v.subtreeFlags&10256)!==0||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child),q),(v.mode&xg)===Ig||s0||(g=v.actualStartTime,0<=g&&0.05<q-g&&DO(v,g,q),0<=Ug&&0<=Fg&&0.05<Fg-Ug&&DO(v,Ug,Fg))),u&2048&&pP(T,v);break;case 24:xv(g,v,r,H,q),u&2048&&dP(v.alternate,v);break;default:xv(g,v,r,H,q)}if((v.mode&xg)!==Ig){if(g=!s0&&v.alternate===null&&v.return!==null&&v.return.alternate!==null)r=v.actualStartTime,0<=r&&0.05<q-r&&vr(v,r,q,"Mount");0<=Ug&&0<=Fg&&((u0||0.05<B0)&&rr(v,Ug,Fg,B0,L0),g&&0.05<Fg-Ug&&vr(v,Ug,Fg,"Mount"))}s1(A),Or(W),L0=X,u0=h,Ew=Q}function k4(g,v,r,H,q,A){q=q&&((v.subtreeFlags&10256)!==0||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child));for(v=v.child;v!==null;){var W=v.sibling;VY(g,v,r,H,q,W!==null?W.actualStartTime:A),v=W}}function VY(g,v,r,H,q,A){var W=a1(),X=Hr(),h=qr(),Q=Ar(),u=Ew;q&&(v.mode&xg)!==Ig&&0<v.actualStartTime&&(v.flags&1)!==0&&mO(v,v.actualStartTime,A,s0,r);var T=v.flags;switch(v.tag){case 0:case 11:case 15:k4(g,v,r,H,q,A),zY(v,T1);break;case 23:break;case 22:var B=v.stateNode;v.memoizedState!==null?B._visibility&nr?k4(g,v,r,H,q,A):Y8(g,v,r,H,A):(B._visibility|=nr,k4(g,v,r,H,q,A)),q&&T&2048&&pP(v.alternate,v);break;case 24:k4(g,v,r,H,q,A),q&&T&2048&&dP(v.alternate,v);break;default:k4(g,v,r,H,q,A)}(v.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(v,Ug,Fg,B0,L0),s1(W),Or(X),L0=h,u0=Q,Ew=u}function Y8(g,v,r,H,q){if(v.subtreeFlags&10256||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child))for(var A=v.child;A!==null;){v=A.sibling;var W=g,X=r,h=H,Q=v!==null?v.actualStartTime:q,u=Ew;(A.mode&xg)!==Ig&&0<A.actualStartTime&&(A.flags&1)!==0&&mO(A,A.actualStartTime,Q,s0,X);var T=A.flags;switch(A.tag){case 22:Y8(W,A,X,h,Q),T&2048&&pP(A.alternate,A);break;case 24:Y8(W,A,X,h,Q),T&2048&&dP(A.alternate,A);break;default:Y8(W,A,X,h,Q)}Ew=u,A=v}}function V4(g,v,r){if(g.subtreeFlags&wH)for(g=g.child;g!==null;)EY(g,v,r),g=g.sibling}function EY(g,v,r){switch(g.tag){case 26:V4(g,v,r),g.flags&wH&&g.memoizedState!==null&&pU(r,_v,g.memoizedState,g.memoizedProps);break;case 5:V4(g,v,r);break;case 3:case 4:var H=_v;_v=Z2(g.stateNode.containerInfo),V4(g,v,r),_v=H;break;case 22:g.memoizedState===null&&(H=g.alternate,H!==null&&H.memoizedState!==null?(H=wH,wH=16777216,V4(g,v,r),wH=H):V4(g,v,r));break;default:V4(g,v,r)}}function _Y(g){var v=g.alternate;if(v!==null&&(g=v.child,g!==null)){v.child=null;do v=g.sibling,g.sibling=null,g=v;while(g!==null)}}function G8(g){var v=g.deletions;if((g.flags&16)!==0){if(v!==null)for(var r=0;r<v.length;r++){var H=v[r],q=a1();O1=H,iY(H,g),(H.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&vr(H,Ug,Fg,"Unmount"),s1(q)}_Y(g)}if(g.subtreeFlags&10256)for(g=g.child;g!==null;)yY(g),g=g.sibling}function yY(g){var v=a1(),r=Hr(),H=qr(),q=Ar();switch(g.tag){case 0:case 11:case 15:G8(g),g.flags&2048&&nP(g,g.return,T1|Zv);break;case 3:var A=Er();G8(g),g.stateNode.passiveEffectDuration+=nO(A);break;case 12:A=Er(),G8(g),g.stateNode.passiveEffectDuration+=g8(A);break;case 22:A=g.stateNode,g.memoizedState!==null&&A._visibility&nr&&(g.return===null||g.return.tag!==13)?(A._visibility&=~nr,z2(g),(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&vr(g,Ug,Fg,"Disconnect")):G8(g);break;default:G8(g)}(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(g,Ug,Fg,B0,L0),s1(v),Or(r),u0=q,L0=H}function z2(g){var v=g.deletions;if((g.flags&16)!==0){if(v!==null)for(var r=0;r<v.length;r++){var H=v[r],q=a1();O1=H,iY(H,g),(H.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&0.05<Fg-Ug&&vr(H,Ug,Fg,"Unmount"),s1(q)}_Y(g)}for(g=g.child;g!==null;)jY(g),g=g.sibling}function jY(g){var v=a1(),r=Hr(),H=qr(),q=Ar();switch(g.tag){case 0:case 11:case 15:nP(g,g.return,T1),z2(g);break;case 22:var A=g.stateNode;A._visibility&nr&&(A._visibility&=~nr,z2(g));break;default:z2(g)}(g.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(g,Ug,Fg,B0,L0),s1(v),Or(r),u0=q,L0=H}function iY(g,v){for(;O1!==null;){var r=O1,H=r,q=v,A=a1(),W=Hr(),X=qr(),h=Ar();switch(H.tag){case 0:case 11:case 15:nP(H,q,T1);break;case 23:case 22:H.memoizedState!==null&&H.memoizedState.cachePool!==null&&(q=H.memoizedState.cachePool.pool,q!=null&&x5(q));break;case 24:s6(H.memoizedState.cache)}if((H.mode&xg)!==Ig&&0<=Ug&&0<=Fg&&(u0||0.05<B0)&&rr(H,Ug,Fg,B0,L0),s1(A),Or(W),u0=h,L0=X,H=r.child,H!==null)H.return=r,O1=H;else g:for(r=g;O1!==null;){if(H=O1,A=H.sibling,W=H.return,TY(H),H===r){O1=null;break g}if(A!==null){A.return=W,O1=A;break g}O1=W}}}function bU(){TF.forEach(function(g){return g()})}function fY(){var g=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return g||D.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),g}function vv(g){if((ag&g1)!==q1&&mg!==0)return mg&-mg;var v=D.T;return v!==null?(v._updatedFibers||(v._updatedFibers=new Set),v._updatedFibers.add(g),Ob()):C()}function nY(){if(f1===0)if((mg&536870912)===0||eg){var g=E2;E2<<=1,(E2&3932160)===0&&(E2=262144),f1=g}else f1=536870912;return g=Av.current,g!==null&&(g.flags|=32),f1}function Z0(g,v,r){if(F6&&console.error("useInsertionEffect must not schedule updates."),EW&&(Bq=!0),g===G0&&(A0===v4||A0===r4)||g.cancelPendingCommit!==null)_4(g,0),Sw(g,mg,f1,!1);if($w(g,r),(ag&g1)!==q1&&g===G0){if(Qr)switch(v.tag){case 0:case 11:case 15:g=Eg&&m(Eg)||"Unknown",Kh.has(g)||(Kh.add(g),v=m(v)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",v,g,g));break;case 1:Qh||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Qh=!0)}}else $r&&y6(g,v,r),KU(v),g===G0&&((ag&g1)===q1&&(sw|=r),I0===pw&&Sw(g,mg,f1,!1)),Gr(g)}function eY(g,v,r){if((ag&(g1|bv))!==q1)throw Error("Should not already be working.");if(mg!==0&&Eg!==null){var H=Eg,q=w1();switch(MR){case qH:case v4:var A=j8;Q0&&((H=H._debugTask)?H.run(console.timeStamp.bind(console,"Suspended",A,q,$v,void 0,"primary-light")):console.timeStamp("Suspended",A,q,$v,void 0,"primary-light"));break;case r4:A=j8,Q0&&((H=H._debugTask)?H.run(console.timeStamp.bind(console,"Action",A,q,$v,void 0,"primary-light")):console.timeStamp("Action",A,q,$v,void 0,"primary-light"));break;default:Q0&&(H=q-j8,3>H||console.timeStamp("Blocked",j8,q,$v,void 0,5>H?"primary-light":10>H?"primary":100>H?"primary-dark":"error"))}}A=(r=!r&&(v&127)===0&&(v&g.expiredLanes)===0||U5(g,v))?MU(g,v):sP(g,v,!0);var W=r;do{if(A===ww){U6&&!r&&Sw(g,v,0,!1),v=A0,j8=f0(),MR=v;break}else{if(H=w1(),q=g.current.alternate,W&&!WU(q)){p1(v),q=H1,A=H,!Q0||A<=q||(D0?D0.run(console.timeStamp.bind(console,"Teared Render",q,A,ig,jg,"error")):console.timeStamp("Teared Render",q,A,ig,jg,"error")),_5(v,H),A=sP(g,v,!1),W=!1;continue}if(A===g4){if(W=v,g.errorRecoveryDisabledLanes&W)var X=0;else X=g.pendingLanes&-536870913,X=X!==0?X:X&536870912?536870912:0;if(X!==0){p1(v),xA(H1,H,v,D0),_5(v,H),v=X;g:{H=g,A=W,W=PH;var h=H.current.memoizedState.isDehydrated;if(h&&(_4(H,X).flags|=256),X=sP(H,X,!1),X!==g4){if(SW&&!h){H.errorRecoveryDisabledLanes|=A,sw|=A,A=pw;break g}H=C1,C1=W,H!==null&&(C1===null?C1=H:C1.push.apply(C1,H))}A=X}if(W=!1,A!==g4)continue;else H=w1()}}if(A===OH){p1(v),xA(H1,H,v,D0),_5(v,H),_4(g,0),Sw(g,v,0,!0);break}g:{switch(r=g,A){case ww:case OH:throw Error("Root did not complete. This is a bug in React.");case pw:if((v&4194048)!==v)break;case Jq:p1(v),e9(H1,H,v,D0),_5(v,H),q=v,(q&127)!==0?rq=H:(q&4194048)!==0&&(wq=H),Sw(r,v,f1,!dw);break g;case g4:C1=null;break;case hq:case Oh:break;default:throw Error("Unknown root exit status.")}if(D.actQueue!==null)gb(r,q,v,C1,bH,$q,f1,sw,w4,A,null,null,H1,H);else{if((v&62914560)===v&&(W=zq+Ph-w1(),10<W)){if(Sw(r,v,f1,!dw),z5(r,0,!0)!==0)break g;yv=v,r.timeoutHandle=Nh(cY.bind(null,r,q,C1,bH,$q,v,f1,sw,w4,dw,A,"Throttled",H1,H),W);break g}cY(r,q,C1,bH,$q,v,f1,sw,w4,dw,A,null,H1,H)}}}break}while(1);Gr(g)}function cY(g,v,r,H,q,A,W,X,h,Q,u,T,B,o){g.timeoutHandle=P4;var gg=v.subtreeFlags,bg=null;if(gg&8192||(gg&16785408)===16785408){if(bg={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dr},EY(v,A,bg),gg=(A&62914560)===A?zq-w1():(A&4194048)===A?Ah-w1():0,gg=dU(bg,gg),gg!==null){yv=A,g.cancelPendingCommit=gg(gb.bind(null,g,v,A,r,H,q,W,X,h,u,bg,bg.waitingForViewTransition?"Waiting for the previous Animation":0<bg.count?0<bg.imgCount?"Suspended on CSS and Images":"Suspended on CSS":bg.imgCount===1?"Suspended on an Image":0<bg.imgCount?"Suspended on Images":null,B,o)),Sw(g,A,W,!Q);return}}gb(g,v,A,r,H,q,W,X,h,u,bg,T,B,o)}function WU(g){for(var v=g;;){var r=v.tag;if((r===0||r===11||r===15)&&v.flags&16384&&(r=v.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var H=0;H<r.length;H++){var q=r[H],A=q.getSnapshot;q=q.value;try{if(!N1(A(),q))return!1}catch(W){return!1}}if(r=v.child,v.subtreeFlags&16384&&r!==null)r.return=v,v=r;else{if(v===g)break;for(;v.sibling===null;){if(v.return===null||v.return===g)return!0;v=v.return}v.sibling.return=v.return,v=v.sibling}}return!0}function Sw(g,v,r,H){v&=~lW,v&=~sw,g.suspendedLanes|=v,g.pingedLanes&=~v,H&&(g.warmLanes|=v),H=g.expirationTimes;for(var q=v;0<q;){var A=31-F1(q),W=1<<A;H[A]=-1,q&=~W}r!==0&&L5(g,r,v)}function E4(){return(ag&(g1|bv))===q1?(J8(0,!1),!1):!0}function aP(){if(Eg!==null){if(A0===i1)var g=Eg.return;else g=Eg,jO(),bP(g),Y6=null,a8=0,g=Eg;for(;g!==null;)KY(g.alternate,g),g=g.return;Eg=null}}function _5(g,v){(g&127)!==0&&(fw=v),(g&4194048)!==0&&(Br=v),(g&62914560)!==0&&(bR=v),(g&2080374784)!==0&&(WR=v)}function _4(g,v){Q0&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jg,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jg,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jg,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jg,"primary-light"));var r=H1;if(H1=f0(),mg!==0&&0<r){if(p1(mg),I0===hq||I0===pw)e9(r,H1,v,D0);else{var H=H1,q=D0;if(Q0&&!(H<=r)){var A=(v&738197653)===v?"tertiary-dark":"primary-dark",W=(v&536870912)===v?"Prewarm":(v&201326741)===v?"Interrupted Hydration":"Interrupted Render";q?q.run(console.timeStamp.bind(console,W,r,H,ig,jg,A)):console.timeStamp(W,r,H,ig,jg,A)}}_5(mg,H1)}if(r=D0,D0=null,(v&127)!==0){D0=E8,q=0<=Fr&&Fr<fw?fw:Fr,H=0<=n5&&n5<fw?fw:n5,A=0<=H?H:0<=q?q:H1,0<=rq?(p1(2),c9(rq,A,v,r)):(Hq&127)!==0&&(p1(2),d6(fw,A,ar)),r=q;var X=H,h=_8,Q=0<W6,u=nw===V8,T=nw===vq;if(q=H1,H=E8,A=MW,W=XW,Q0){if(ig="Blocking",0<r?r>q&&(r=q):r=q,0<X?X>r&&(X=r):X=r,h!==null&&r>X){var B=Q?"secondary-light":"warning";H?H.run(console.timeStamp.bind(console,Q?"Consecutive":"Event: "+h,X,r,ig,jg,B)):console.timeStamp(Q?"Consecutive":"Event: "+h,X,r,ig,jg,B)}q>r&&(X=u?"error":(v&738197653)===v?"tertiary-light":"primary-light",u=T?"Promise Resolved":u?"Cascading Update":5<q-r?"Update Blocked":"Update",T=[],W!=null&&T.push(["Component name",W]),A!=null&&T.push(["Method name",A]),r={start:r,end:q,detail:{devtools:{properties:T,track:ig,trackGroup:jg,color:X}}},H?H.run(performance.measure.bind(performance,u,r)):performance.measure(u,r))}Fr=-1.1,nw=0,XW=MW=null,rq=-1.1,W6=n5,n5=-1.1,fw=f0()}if((v&4194048)!==0&&(D0=y8,q=0<=dr&&dr<Br?Br:dr,r=0<=Iv&&Iv<Br?Br:Iv,H=0<=ew&&ew<Br?Br:ew,A=0<=H?H:0<=r?r:H1,0<=wq?(p1(256),c9(wq,A,v,D0)):(Hq&4194048)!==0&&(p1(256),d6(Br,A,ar)),T=H,X=e5,h=0<cw,Q=YW===vq,A=H1,H=y8,W=AR,u=PR,Q0&&(ig="Transition",0<r?r>A&&(r=A):r=A,0<q?q>r&&(q=r):q=r,0<T?T>q&&(T=q):T=q,q>T&&X!==null&&(B=h?"secondary-light":"warning",H?H.run(console.timeStamp.bind(console,h?"Consecutive":"Event: "+X,T,q,ig,jg,B)):console.timeStamp(h?"Consecutive":"Event: "+X,T,q,ig,jg,B)),r>q&&(H?H.run(console.timeStamp.bind(console,"Action",q,r,ig,jg,"primary-dark")):console.timeStamp("Action",q,r,ig,jg,"primary-dark")),A>r&&(q=Q?"Promise Resolved":5<A-r?"Update Blocked":"Update",T=[],u!=null&&T.push(["Component name",u]),W!=null&&T.push(["Method name",W]),r={start:r,end:A,detail:{devtools:{properties:T,track:ig,trackGroup:jg,color:"primary-light"}}},H?H.run(performance.measure.bind(performance,q,r)):performance.measure(q,r))),Iv=dr=-1.1,YW=0,wq=-1.1,cw=ew,ew=-1.1,Br=f0()),(v&62914560)!==0&&(Hq&62914560)!==0&&(p1(4194304),d6(bR,H1,ar)),(v&2080374784)!==0&&(Hq&2080374784)!==0&&(p1(268435456),d6(WR,H1,ar)),r=g.timeoutHandle,r!==P4&&(g.timeoutHandle=P4,jF(r)),r=g.cancelPendingCommit,r!==null&&(g.cancelPendingCommit=null,r()),yv=0,aP(),G0=g,Eg=r=mr(g.current,null),mg=v,A0=i1,Wv=null,dw=!1,U6=U5(g,v),SW=!1,I0=ww,w4=f1=lW=sw=aw=0,C1=PH=null,$q=!1,(v&8)!==0&&(v|=v&32),H=g.entangledLanes,H!==0)for(g=g.entanglements,H&=v;0<H;)q=31-F1(H),A=1<<q,v|=g[q],H&=~A;return Nr=v,kO(),g=vR(),1000<g-gR&&(D.recentlyCreatedOwnerStacks=0,gR=g),Vv.discardPendingWarnings(),r}function tY(g,v){Ng=null,D.H=rH,D.getCurrentStack=null,Qr=!1,Hv=null,v===X6||v===Pq?(v=hX(),A0=qH):v===JW?(v=hX(),A0=qh):A0=v===NW?CW:v!==null&&typeof v==="object"&&typeof v.then==="function"?AH:Qq,Wv=v;var r=Eg;r===null?(I0=OH,G2(g,d1(v,g.current))):r.mode&xg&&pA(r)}function pY(){var g=Av.current;return g===null?!0:(mg&4194048)===mg?Nv===null?!0:!1:(mg&62914560)===mg||(mg&536870912)!==0?g===Nv:!1}function dY(){var g=D.H;return D.H=rH,g===null?rH:g}function aY(){var g=D.A;return D.A=uF,g}function U2(g){D0===null&&(D0=g._debugTask==null?null:g._debugTask)}function L2(){I0=pw,dw||(mg&4194048)!==mg&&Av.current!==null||(U6=!0),(aw&134217727)===0&&(sw&134217727)===0||G0===null||Sw(G0,mg,f1,!1)}function sP(g,v,r){var H=ag;ag|=g1;var q=dY(),A=aY();if(G0!==g||mg!==v){if($r){var W=g.memoizedUpdaters;0<W.size&&(h8(g,mg),W.clear()),zw(g,v)}bH=null,_4(g,v)}v=!1,W=I0;g:do try{if(A0!==i1&&Eg!==null){var X=Eg,h=Wv;switch(A0){case CW:aP(),W=Jq;break g;case qH:case v4:case r4:case AH:Av.current===null&&(v=!0);var Q=A0;if(A0=i1,Wv=null,y4(g,X,h,Q),r&&U6){W=ww;break g}break;default:Q=A0,A0=i1,Wv=null,y4(g,X,h,Q)}}sY(),W=I0;break}catch(u){tY(g,u)}while(1);return v&&g.shellSuspendCounter++,jO(),ag=H,D.H=q,D.A=A,Eg===null&&(G0=null,mg=0,kO()),W}function sY(){for(;Eg!==null;)gG(Eg)}function MU(g,v){var r=ag;ag|=g1;var H=dY(),q=aY();if(G0!==g||mg!==v){if($r){var A=g.memoizedUpdaters;0<A.size&&(h8(g,mg),A.clear()),zw(g,v)}bH=null,Uq=w1()+bh,_4(g,v)}else U6=U5(g,v);g:do try{if(A0!==i1&&Eg!==null)v:switch(v=Eg,A=Wv,A0){case Qq:A0=i1,Wv=null,y4(g,v,A,Qq);break;case v4:case r4:if(GX(A)){A0=i1,Wv=null,vG(v);break}v=function(){A0!==v4&&A0!==r4||G0!==g||(A0=Kq),Gr(g)},A.then(v,v);break g;case qH:A0=Kq;break g;case qh:A0=TW;break g;case Kq:GX(A)?(A0=i1,Wv=null,vG(v)):(A0=i1,Wv=null,y4(g,v,A,Kq));break;case TW:var W=null;switch(Eg.tag){case 26:W=Eg.memoizedState;case 5:case 27:var X=Eg;if(W?eG(W):X.stateNode.complete){A0=i1,Wv=null;var h=X.sibling;if(h!==null)Eg=h;else{var Q=X.return;Q!==null?(Eg=Q,F2(Q)):Eg=null}break v}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}A0=i1,Wv=null,y4(g,v,A,TW);break;case AH:A0=i1,Wv=null,y4(g,v,A,AH);break;case CW:aP(),I0=Jq;break g;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}D.actQueue!==null?sY():XU();break}catch(u){tY(g,u)}while(1);if(jO(),D.H=H,D.A=q,ag=r,Eg!==null)return ww;return G0=null,mg=0,kO(),I0}function XU(){for(;Eg!==null&&!WL();)gG(Eg)}function gG(g){var v=g.alternate;(g.mode&xg)!==Ig?(tA(g),v=Ag(g,jP,v,g,Nr),pA(g)):v=Ag(g,jP,v,g,Nr),g.memoizedProps=g.pendingProps,v===null?F2(g):Eg=v}function vG(g){var v=Ag(g,YU,g);g.memoizedProps=g.pendingProps,v===null?F2(g):Eg=v}function YU(g){var v=g.alternate,r=(g.mode&xg)!==Ig;switch(r&&tA(g),g.tag){case 15:case 0:v=XY(v,g,g.pendingProps,g.type,void 0,mg);break;case 11:v=XY(v,g,g.pendingProps,g.type.render,g.ref,mg);break;case 5:bP(g);default:KY(v,g),g=Eg=gX(g,Nr),v=jP(v,g,Nr)}return r&&pA(g),v}function y4(g,v,r,H){jO(),bP(v),Y6=null,a8=0;var q=v.return;try{if(dz(g,q,v,r,mg)){I0=OH,G2(g,d1(r,g.current)),Eg=null;return}}catch(A){if(q!==null)throw Eg=q,A;I0=OH,G2(g,d1(r,g.current)),Eg=null;return}if(v.flags&32768){if(eg||H===Qq)g=!0;else if(U6||(mg&536870912)!==0)g=!1;else if(dw=g=!0,H===v4||H===r4||H===qH||H===AH)H=Av.current,H!==null&&H.tag===13&&(H.flags|=16384);rG(v,g)}else F2(v)}function F2(g){var v=g;do{if((v.flags&32768)!==0){rG(v,dw);return}var r=v.alternate;if(g=v.return,tA(v),r=Ag(v,gU,r,v,Nr),(v.mode&xg)!==Ig&&bX(v),r!==null){Eg=r;return}if(v=v.sibling,v!==null){Eg=v;return}Eg=v=g}while(v!==null);I0===ww&&(I0=Oh)}function rG(g,v){do{var r=vU(g.alternate,g);if(r!==null){r.flags&=32767,Eg=r;return}if((g.mode&xg)!==Ig){bX(g),r=g.actualDuration;for(var H=g.child;H!==null;)r+=H.actualDuration,H=H.sibling;g.actualDuration=r}if(r=g.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!v&&(g=g.sibling,g!==null)){Eg=g;return}Eg=g=r}while(g!==null);I0=Jq,Eg=null}function gb(g,v,r,H,q,A,W,X,h,Q,u,T,B,o){g.cancelPendingCommit=null;do R8();while(p0!==v5);if(Vv.flushLegacyContextWarning(),Vv.flushPendingUnsafeLifecycleWarnings(),(ag&(g1|bv))!==q1)throw Error("Should not already be working.");if(p1(r),Q===g4?xA(B,o,r,D0):H!==null?kz(B,o,r,H,v!==null&&v.alternate!==null&&v.alternate.memoizedState.isDehydrated&&(v.flags&256)!==0,D0):mz(B,o,r,D0),v!==null){if(r===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),v===g.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(A=v.lanes|v.childLanes,A|=qW,NO(g,r,A,W,X,h),g===G0&&(Eg=G0=null,mg=0),L6=v,r5=g,yv=r,DW=A,kW=q,Rh=H,mW=o,hh=T,jv=Lq,Jh=null,v.actualDuration!==0||(v.subtreeFlags&10256)!==0||(v.flags&10256)!==0?(g.callbackNode=null,g.callbackPriority=0,QU(c4,function(){return RH=window.event,jv===Lq&&(jv=xW),AG(),null})):(g.callbackNode=null,g.callbackPriority=0),pr=null,iw=f0(),T!==null&&Vz(o,iw,T,D0),H=(v.flags&13878)!==0,(v.subtreeFlags&13878)!==0||H){H=D.T,D.T=null,q=H0.p,H0.p=Ov,W=ag,ag|=bv;try{AU(g,v,r)}finally{ag=W,H0.p=q,D.T=H}}p0=Mh,wG(),HG(),OG()}}function wG(){if(p0===Mh){p0=v5;var g=r5,v=L6,r=yv,H=(v.flags&13878)!==0;if((v.subtreeFlags&13878)!==0||H){H=D.T,D.T=null;var q=H0.p;H0.p=Ov;var A=ag;ag|=bv;try{$6=r,z6=g,eO(),oY(v,g),z6=$6=null,r=tW;var W=i9(g.containerInfo),X=r.focusedElem,h=r.selectionRange;if(W!==X&&X&&X.ownerDocument&&j9(X.ownerDocument.documentElement,X)){if(h!==null&&SA(X)){var{start:Q,end:u}=h;if(u===void 0&&(u=Q),"selectionStart"in X)X.selectionStart=Q,X.selectionEnd=Math.min(u,X.value.length);else{var T=X.ownerDocument||document,B=T&&T.defaultView||window;if(B.getSelection){var o=B.getSelection(),gg=X.textContent.length,bg=Math.min(h.start,gg),J0=h.end===void 0?bg:Math.min(h.end,gg);!o.extend&&bg>J0&&(W=J0,J0=bg,bg=W);var tg=y9(X,bg),F=y9(X,J0);if(tg&&F&&(o.rangeCount!==1||o.anchorNode!==tg.node||o.anchorOffset!==tg.offset||o.focusNode!==F.node||o.focusOffset!==F.offset)){var I=T.createRange();I.setStart(tg.node,tg.offset),o.removeAllRanges(),bg>J0?(o.addRange(I),o.extend(F.node,F.offset)):(I.setEnd(F.node,F.offset),o.addRange(I))}}}}T=[];for(o=X;o=o.parentNode;)o.nodeType===1&&T.push({element:o,left:o.scrollLeft,top:o.scrollTop});typeof X.focus==="function"&&X.focus();for(X=0;X<T.length;X++){var Z=T[X];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Vq=!!cW,tW=cW=null}finally{ag=A,H0.p=q,D.T=H}}g.current=v,p0=Xh}}function HG(){if(p0===Xh){p0=v5;var g=Jh;if(g!==null){iw=f0();var v=tr,r=iw;!Q0||r<=v||(ar?ar.run(console.timeStamp.bind(console,g,v,r,ig,jg,"secondary-light")):console.timeStamp(g,v,r,ig,jg,"secondary-light"))}g=r5,v=L6,r=yv;var H=(v.flags&8772)!==0;if((v.subtreeFlags&8772)!==0||H){H=D.T,D.T=null;var q=H0.p;H0.p=Ov;var A=ag;ag|=bv;try{$6=r,z6=g,eO(),uY(g,v.alternate,v),z6=$6=null}finally{ag=A,H0.p=q,D.T=H}}g=mW,v=hh,tr=f0(),g=v===null?g:iw,v=tr,r=jv===oW,H=D0,pr!==null?t9(g,v,pr,!1,H):!Q0||v<=g||(H?H.run(console.timeStamp.bind(console,r?"Commit Interrupted View Transition":"Commit",g,v,ig,jg,r?"error":"secondary-dark")):console.timeStamp(r?"Commit Interrupted View Transition":"Commit",g,v,ig,jg,r?"error":"secondary-dark")),p0=Yh}}function OG(){if(p0===Gh||p0===Yh){if(p0===Gh){var g=tr;tr=f0();var v=tr,r=jv===oW;!Q0||v<=g||(ar?ar.run(console.timeStamp.bind(console,r?"Interrupted View Transition":"Starting Animation",g,v,ig,jg,r?"error":"secondary-light")):console.timeStamp(r?"Interrupted View Transition":"Starting Animation",g,v,ig,jg,r?" error":"secondary-light")),jv!==oW&&(jv=Wh)}p0=v5,ML(),g=r5;var H=L6;v=yv,r=Rh;var q=H.actualDuration!==0||(H.subtreeFlags&10256)!==0||(H.flags&10256)!==0;q?p0=Fq:(p0=v5,L6=r5=null,qG(g,g.pendingLanes),H4=0,MH=null);var A=g.pendingLanes;if(A===0&&(g5=null),q||MG(g),A=K(v),H=H.stateNode,$1&&typeof $1.onCommitFiberRoot==="function")try{var W=(H.current.flags&128)===128;switch(A){case Ov:var X=kb;break;case mv:X=Vb;break;case zr:X=c4;break;case y2:X=Eb;break;default:X=c4}$1.onCommitFiberRoot(t4,H,X,W)}catch(T){Kr||(Kr=!0,console.error("React instrumentation encountered an error: %o",T))}if($r&&g.memoizedUpdaters.clear(),bU(),r!==null){W=D.T,X=H0.p,H0.p=Ov,D.T=null;try{var h=g.onRecoverableError;for(H=0;H<r.length;H++){var Q=r[H],u=GU(Q.stack);Ag(Q.source,h,Q.value,u)}}finally{D.T=W,H0.p=X}}(yv&3)!==0&&R8(),Gr(g),A=g.pendingLanes,(v&261930)!==0&&(A&42)!==0?(qq=!0,g===VW?WH++:(WH=0,VW=g)):WH=0,q||_5(v,tr),J8(0,!1)}}function GU(g){return g={componentStack:g},Object.defineProperty(g,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),g}function qG(g,v){(g.pooledCacheLanes&=v)===0&&(v=g.pooledCache,v!=null&&(g.pooledCache=null,s6(v)))}function R8(){return wG(),HG(),OG(),AG()}function AG(){if(p0!==Fq)return!1;var g=r5,v=DW;DW=0;var r=K(yv),H=zr===0||zr>r?zr:r;r=D.T;var q=H0.p;try{H0.p=H,D.T=null;var A=kW;kW=null,H=r5;var W=yv;if(p0=v5,L6=r5=null,yv=0,(ag&(g1|bv))!==q1)throw Error("Cannot flush passive effects while already rendering.");p1(W),EW=!0,Bq=!1;var X=0;if(pr=null,X=w1(),jv===Wh)d6(tr,X,ar);else{var h=tr,Q=X,u=jv===xW;!Q0||Q<=h||(D0?D0.run(console.timeStamp.bind(console,u?"Waiting for Paint":"Waiting",h,Q,ig,jg,"secondary-light")):console.timeStamp(u?"Waiting for Paint":"Waiting",h,Q,ig,jg,"secondary-light"))}h=ag,ag|=bv;var T=H.current;eO(),yY(T);var B=H.current;T=mW,eO(),kY(H,B,W,A,T),MG(H),ag=h;var o=w1();if(B=X,T=D0,pr!==null?t9(B,o,pr,!0,T):!Q0||o<=B||(T?T.run(console.timeStamp.bind(console,"Remaining Effects",B,o,ig,jg,"secondary-dark")):console.timeStamp("Remaining Effects",B,o,ig,jg,"secondary-dark")),_5(W,o),J8(0,!1),Bq?H===MH?H4++:(H4=0,MH=H):H4=0,Bq=EW=!1,$1&&typeof $1.onPostCommitFiberRoot==="function")try{$1.onPostCommitFiberRoot(t4,H)}catch(bg){Kr||(Kr=!0,console.error("React instrumentation encountered an error: %o",bg))}var gg=H.current.stateNode;return gg.effectDuration=0,gg.passiveEffectDuration=0,!0}finally{H0.p=q,D.T=r,qG(g,v)}}function PG(g,v,r){v=d1(r,v),WX(v),v=SP(g.stateNode,v,2),g=Zw(g,v,2),g!==null&&($w(g,2),Gr(g))}function w0(g,v,r){if(F6=!1,g.tag===3)PG(g,g,r);else{for(;v!==null;){if(v.tag===3){PG(v,g,r);return}if(v.tag===1){var H=v.stateNode;if(typeof v.type.getDerivedStateFromError==="function"||typeof H.componentDidCatch==="function"&&(g5===null||!g5.has(H))){g=d1(r,g),WX(g),r=lP(2),H=Zw(v,r,2),H!==null&&(oP(r,H,v,g),$w(H,2),Gr(H));return}}v=v.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,r)}}function vb(g,v,r){var H=g.pingCache;if(H===null){H=g.pingCache=new CF;var q=new Set;H.set(v,q)}else q=H.get(v),q===void 0&&(q=new Set,H.set(v,q));q.has(r)||(SW=!0,q.add(r),H=RU.bind(null,g,v,r),$r&&h8(g,r),v.then(H,H))}function RU(g,v,r){var H=g.pingCache;H!==null&&H.delete(v),g.pingedLanes|=g.suspendedLanes&r,g.warmLanes&=~r,(r&127)!==0?0>Fr&&(fw=Fr=f0(),E8=gq("Promise Resolved"),nw=vq):(r&4194048)!==0&&0>Iv&&(Br=Iv=f0(),y8=gq("Promise Resolved"),YW=vq),fY()&&D.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),G0===g&&(mg&r)===r&&(I0===pw||I0===hq&&(mg&62914560)===mg&&w1()-zq<Ph?(ag&g1)===q1&&_4(g,0):lW|=r,w4===mg&&(w4=0)),Gr(g)}function bG(g,v){v===0&&(v=I4()),g=K1(g,v),g!==null&&($w(g,v),Gr(g))}function hU(g){var v=g.memoizedState,r=0;v!==null&&(r=v.retryLane),bG(g,r)}function JU(g,v){var r=0;switch(g.tag){case 31:case 13:var{stateNode:H,memoizedState:q}=g;q!==null&&(r=q.retryLane);break;case 19:H=g.stateNode;break;case 22:H=g.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}H!==null&&H.delete(v),bG(g,r)}function rb(g,v,r){if((v.subtreeFlags&67117056)!==0)for(v=v.child;v!==null;){var H=g,q=v,A=q.type===D2;A=r||A,q.tag!==22?q.flags&67108864?A&&Ag(q,WG,H,q):rb(H,q,A):q.memoizedState===null&&(A&&q.flags&8192?Ag(q,WG,H,q):q.subtreeFlags&67108864&&Ag(q,rb,H,q,A)),v=v.sibling}}function WG(g,v){R0(!0);try{DY(v),jY(v),mY(g,v.alternate,v,!1),VY(g,v,0,null,!1,0)}finally{R0(!1)}}function MG(g){var v=!0;g.current.mode&(z1|kv)||(v=!1),rb(g,g.current,v)}function XG(g){if((ag&g1)===q1){var v=g.tag;if(v===3||v===1||v===0||v===11||v===14||v===15){if(v=m(g)||"ReactComponent",Iq!==null){if(Iq.has(v))return;Iq.add(v)}else Iq=new Set([v]);Ag(g,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function h8(g,v){$r&&g.memoizedUpdaters.forEach(function(r){y6(g,r,v)})}function QU(g,v){var r=D.actQueue;return r!==null?(r.push(v),oF):mb(g,v)}function KU(g){fY()&&D.actQueue===null&&Ag(g,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,m(g))})}function Gr(g){g!==B6&&g.next===null&&(B6===null?Nq=B6=g:B6=B6.next=g),Zq=!0,D.actQueue!==null?yW||(yW=!0,hG()):_W||(_W=!0,hG())}function J8(g,v){if(!jW&&Zq){jW=!0;do{var r=!1;for(var H=Nq;H!==null;){if(!v)if(g!==0){var q=H.pendingLanes;if(q===0)var A=0;else{var{suspendedLanes:W,pingedLanes:X}=H;A=(1<<31-F1(42|g)+1)-1,A&=q&~(W&~X),A=A&201326741?A&201326741|1:A?A|2:0}A!==0&&(r=!0,RG(H,A))}else A=mg,A=z5(H,H===G0?A:0,H.cancelPendingCommit!==null||H.timeoutHandle!==P4),(A&3)===0||U5(H,A)||(r=!0,RG(H,A));H=H.next}}while(r);jW=!1}}function $U(){RH=window.event,wb()}function wb(){Zq=yW=_W=!1;var g=0;w5!==0&&NU()&&(g=w5);for(var v=w1(),r=null,H=Nq;H!==null;){var q=H.next,A=YG(H,v);if(A===0)H.next=null,r===null?Nq=q:r.next=q,q===null&&(B6=r);else if(r=H,g!==0||(A&3)!==0)Zq=!0;H=q}p0!==v5&&p0!==Fq||J8(g,!1),w5!==0&&(w5=0)}function YG(g,v){for(var{suspendedLanes:r,pingedLanes:H,expirationTimes:q}=g,A=g.pendingLanes&-62914561;0<A;){var W=31-F1(A),X=1<<W,h=q[W];if(h===-1){if((X&r)===0||(X&H)!==0)q[W]=zA(X,v)}else h<=v&&(g.expiredLanes|=X);A&=~X}if(v=G0,r=mg,r=z5(g,g===v?r:0,g.cancelPendingCommit!==null||g.timeoutHandle!==P4),H=g.callbackNode,r===0||g===v&&(A0===v4||A0===r4)||g.cancelPendingCommit!==null)return H!==null&&Hb(H),g.callbackNode=null,g.callbackPriority=0;if((r&3)===0||U5(g,r)){if(v=r&-r,v!==g.callbackPriority||D.actQueue!==null&&H!==iW)Hb(H);else return v;switch(K(r)){case Ov:case mv:r=Vb;break;case zr:r=c4;break;case y2:r=Eb;break;default:r=c4}return H=GG.bind(null,g),D.actQueue!==null?(D.actQueue.push(H),r=iW):r=mb(r,H),g.callbackPriority=v,g.callbackNode=r,v}return H!==null&&Hb(H),g.callbackPriority=2,g.callbackNode=null,2}function GG(g,v){if(qq=Oq=!1,RH=window.event,p0!==v5&&p0!==Fq)return g.callbackNode=null,g.callbackPriority=0,null;var r=g.callbackNode;if(jv===Lq&&(jv=xW),R8()&&g.callbackNode!==r)return null;var H=mg;if(H=z5(g,g===G0?H:0,g.cancelPendingCommit!==null||g.timeoutHandle!==P4),H===0)return null;return eY(g,H,v),YG(g,w1()),g.callbackNode!=null&&g.callbackNode===r?GG.bind(null,g):null}function RG(g,v){if(R8())return null;Oq=qq,qq=!1,eY(g,v,!0)}function Hb(g){g!==iW&&g!==null&&bL(g)}function hG(){D.actQueue!==null&&D.actQueue.push(function(){return wb(),null}),iF(function(){(ag&(g1|bv))!==q1?mb(kb,$U):wb()})}function Ob(){if(w5===0){var g=c5;g===0&&(g=V2,V2<<=1,(V2&261888)===0&&(V2=256)),w5=g}return w5}function JG(g){if(g==null||typeof g==="symbol"||typeof g==="boolean")return null;if(typeof g==="function")return g;return b0(g,"action"),c6(""+g)}function QG(g,v){var r=v.ownerDocument.createElement("input");return r.name=v.name,r.value=v.value,g.id&&r.setAttribute("form",g.id),v.parentNode.insertBefore(r,v),g=new FormData(g),r.parentNode.removeChild(r),g}function zU(g,v,r,H,q){if(v==="submit"&&r&&r.stateNode===q){var A=JG((q[B1]||null).action),W=H.submitter;W&&(v=(v=W[B1]||null)?JG(v.formAction):W.getAttribute("formAction"),v!==null&&(A=v,W=null));var X=new e2("action","action",null,H,q);g.push({event:X,listeners:[{instance:null,listener:function(){if(H.defaultPrevented){if(w5!==0){var h=W?QG(q,W):new FormData(q),Q={pending:!0,data:h,method:q.method,action:A};Object.freeze(Q),BP(r,Q,null,h)}}else typeof A==="function"&&(X.preventDefault(),h=W?QG(q,W):new FormData(q),Q={pending:!0,data:h,method:q.method,action:A},Object.freeze(Q),BP(r,Q,A,h))},currentTarget:q}]})}}function B2(g,v,r){g.currentTarget=r;try{v(g)}catch(H){rW(H)}g.currentTarget=null}function KG(g,v){v=(v&4)!==0;for(var r=0;r<g.length;r++){var H=g[r];g:{var q=void 0,A=H.event;if(H=H.listeners,v)for(var W=H.length-1;0<=W;W--){var X=H[W],h=X.instance,Q=X.currentTarget;if(X=X.listener,h!==q&&A.isPropagationStopped())break g;h!==null?Ag(h,B2,A,X,Q):B2(A,X,Q),q=h}else for(W=0;W<H.length;W++){if(X=H[W],h=X.instance,Q=X.currentTarget,X=X.listener,h!==q&&A.isPropagationStopped())break g;h!==null?Ag(h,B2,A,X,Q):B2(A,X,Q),q=h}}}}function cg(g,v){fW.has(g)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',g);var r=v[_b];r===void 0&&(r=v[_b]=new Set);var H=g+"__bubble";r.has(H)||($G(v,g,2,!1),r.add(H))}function qb(g,v,r){fW.has(g)&&!v&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',g);var H=0;v&&(H|=4),$G(r,g,H,v)}function Ab(g){if(!g[uq]){g[uq]=!0,h7.forEach(function(r){r!=="selectionchange"&&(fW.has(r)||qb(r,!1,g),qb(r,!0,g))});var v=g.nodeType===9?g:g.ownerDocument;v===null||v[uq]||(v[uq]=!0,qb("selectionchange",!1,v))}}function $G(g,v,r,H){switch(sG(v)){case Ov:var q=vL;break;case mv:q=rL;break;default:q=Lb}r=q.bind(null,v,r,g),q=void 0,!nb||v!=="touchstart"&&v!=="touchmove"&&v!=="wheel"||(q=!0),H?q!==void 0?g.addEventListener(v,r,{capture:!0,passive:q}):g.addEventListener(v,r,!0):q!==void 0?g.addEventListener(v,r,{passive:q}):g.addEventListener(v,r,!1)}function Pb(g,v,r,H,q){var A=H;if((v&1)===0&&(v&2)===0&&H!==null)g:for(;;){if(H===null)return;var W=H.tag;if(W===3||W===4){var X=H.stateNode.containerInfo;if(X===q)break;if(W===4)for(W=H.return;W!==null;){var h=W.tag;if((h===3||h===4)&&W.stateNode.containerInfo===q)return;W=W.return}for(;X!==null;){if(W=Rg(X),W===null)return;if(h=W.tag,h===5||h===6||h===26||h===27){H=A=W;continue g}X=X.parentNode}}H=H.return}C9(function(){var Q=A,u=TA(r),T=[];g:{var B=s7.get(g);if(B!==void 0){var o=e2,gg=g;switch(g){case"keypress":if(lO(r)===0)break g;case"keydown":case"keyup":o=pL;break;case"focusin":gg="focus",o=pb;break;case"focusout":gg="blur",o=pb;break;case"beforeblur":case"afterblur":o=pb;break;case"click":if(r.button===2)break g;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":o=V7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":o=kL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":o=sL;break;case t7:case p7:case d7:o=_L;break;case a7:o=vF;break;case"scroll":case"scrollend":o=DL;break;case"wheel":o=wF;break;case"copy":case"cut":case"paste":o=jL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":o=_7;break;case"toggle":case"beforetoggle":o=OF}var bg=(v&4)!==0,J0=!bg&&(g==="scroll"||g==="scrollend"),tg=bg?B!==null?B+"Capture":null:B;bg=[];for(var F=Q,I;F!==null;){var Z=F;if(I=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||I===null||tg===null||(Z=t6(F,tg),Z!=null&&bg.push(Q8(F,Z,I))),J0)break;F=F.return}0<bg.length&&(B=new o(B,gg,null,r,u),T.push({event:B,listeners:bg}))}}if((v&7)===0){g:{if(B=g==="mouseover"||g==="pointerover",o=g==="mouseout"||g==="pointerout",B&&r!==u8&&(gg=r.relatedTarget||r.fromElement)&&(Rg(gg)||gg[kw]))break g;if(o||B){if(B=u.window===u?u:(B=u.ownerDocument)?B.defaultView||B.parentWindow:window,o){if(gg=r.relatedTarget||r.toElement,o=Q,gg=gg?Rg(gg):null,gg!==null&&(J0=_(gg),bg=gg.tag,gg!==J0||bg!==5&&bg!==27&&bg!==6))gg=null}else o=null,gg=Q;if(o!==gg){if(bg=V7,Z="onMouseLeave",tg="onMouseEnter",F="mouse",g==="pointerout"||g==="pointerover")bg=_7,Z="onPointerLeave",tg="onPointerEnter",F="pointer";if(J0=o==null?B:Cg(o),I=gg==null?B:Cg(gg),B=new bg(Z,F+"leave",o,r,u),B.target=J0,B.relatedTarget=I,Z=null,Rg(u)===Q&&(bg=new bg(tg,F+"enter",gg,r,u),bg.target=I,bg.relatedTarget=J0,Z=bg),J0=Z,o&&gg)v:{bg=UU,tg=o,F=gg,I=0;for(Z=tg;Z;Z=bg(Z))I++;Z=0;for(var k=F;k;k=bg(k))Z++;for(;0<I-Z;)tg=bg(tg),I--;for(;0<Z-I;)F=bg(F),Z--;for(;I--;){if(tg===F||F!==null&&tg===F.alternate){bg=tg;break v}tg=bg(tg),F=bg(F)}bg=null}else bg=null;o!==null&&zG(T,B,o,bg,!1),gg!==null&&J0!==null&&zG(T,J0,gg,bg,!0)}}}g:{if(B=Q?Cg(Q):window,o=B.nodeName&&B.nodeName.toLowerCase(),o==="select"||o==="input"&&B.type==="file")var Og=k9;else if(D9(B))if(e7)Og=oz;else{Og=Sz;var Zg=Cz}else o=B.nodeName,!o||o.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?Q&&e6(Q.elementType)&&(Og=k9):Og=lz;if(Og&&(Og=Og(g,Q))){m9(T,Og,r,u);break g}Zg&&Zg(g,B,Q),g==="focusout"&&Q&&B.type==="number"&&Q.memoizedProps.value!=null&&FA(B,"number",B.value)}switch(Zg=Q?Cg(Q):window,g){case"focusin":if(D9(Zg)||Zg.contentEditable==="true")r6=Zg,ab=Q,D8=null;break;case"focusout":D8=ab=r6=null;break;case"mousedown":sb=!0;break;case"contextmenu":case"mouseup":case"dragend":sb=!1,f9(T,r,u);break;case"selectionchange":if(bF)break;case"keydown":case"keyup":f9(T,r,u)}var $g;if(db)g:{switch(g){case"compositionstart":var hg="onCompositionStart";break g;case"compositionend":hg="onCompositionEnd";break g;case"compositionupdate":hg="onCompositionUpdate";break g}hg=void 0}else v6?o9(g,r)&&(hg="onCompositionEnd"):g==="keydown"&&r.keyCode===y7&&(hg="onCompositionStart");if(hg&&(j7&&r.locale!=="ko"&&(v6||hg!=="onCompositionStart"?hg==="onCompositionEnd"&&v6&&($g=S9()):(Vw=u,eb=("value"in Vw)?Vw.value:Vw.textContent,v6=!0)),Zg=I2(Q,hg),0<Zg.length&&(hg=new E7(hg,g,null,r,u),T.push({event:hg,listeners:Zg}),$g?hg.data=$g:($g=x9(r),$g!==null&&(hg.data=$g)))),$g=AF?Nz(g,r):Zz(g,r))hg=I2(Q,"onBeforeInput"),0<hg.length&&(Zg=new fL("onBeforeInput","beforeinput",null,r,u),T.push({event:Zg,listeners:hg}),Zg.data=$g);zU(T,g,Q,r,u)}KG(T,v)})}function Q8(g,v,r){return{instance:g,listener:v,currentTarget:r}}function I2(g,v){for(var r=v+"Capture",H=[];g!==null;){var q=g,A=q.stateNode;if(q=q.tag,q!==5&&q!==26&&q!==27||A===null||(q=t6(g,r),q!=null&&H.unshift(Q8(g,q,A)),q=t6(g,v),q!=null&&H.push(Q8(g,q,A))),g.tag===3)return H;g=g.return}return[]}function UU(g){if(g===null)return null;do g=g.return;while(g&&g.tag!==5&&g.tag!==27);return g?g:null}function zG(g,v,r,H,q){for(var A=v._reactName,W=[];r!==null&&r!==H;){var X=r,h=X.alternate,Q=X.stateNode;if(X=X.tag,h!==null&&h===H)break;X!==5&&X!==26&&X!==27||Q===null||(h=Q,q?(Q=t6(r,A),Q!=null&&W.unshift(Q8(r,Q,h))):q||(Q=t6(r,A),Q!=null&&W.push(Q8(r,Q,h)))),r=r.return}W.length!==0&&g.push({event:v,listeners:W})}function bb(g,v){Lz(g,v),g!=="input"&&g!=="textarea"&&g!=="select"||v==null||v.value!==null||m7||(m7=!0,g==="select"&&v.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",g):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",g));var r={registrationNameDependencies:y5,possibleRegistrationNames:yb};e6(g)||typeof v.is==="string"||Bz(g,v,r),v.contentEditable&&!v.suppressContentEditableWarning&&v.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function r1(g,v,r,H){v!==r&&(r=lw(r),lw(v)!==r&&(H[g]=v))}function LU(g,v,r){v.forEach(function(H){r[FG(H)]=H==="style"?Mb(g):g.getAttribute(H)})}function Rr(g,v){v===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",g,g,g):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",g,typeof v)}function UG(g,v){return g=g.namespaceURI===i2||g.namespaceURI===d4?g.ownerDocument.createElementNS(g.namespaceURI,g.tagName):g.ownerDocument.createElement(g.tagName),g.innerHTML=v,g.innerHTML}function lw(g){return hv(g)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",k1(g)),v1(g)),(typeof g==="string"?g:""+g).replace(xF,`
`).replace(DF,"")}function LG(g,v){return v=lw(v),lw(g)===v?!0:!1}function X0(g,v,r,H,q,A){switch(r){case"children":if(typeof H==="string")SO(H,v,!1),v==="body"||v==="textarea"&&H===""||n6(g,H);else if(typeof H==="number"||typeof H==="bigint")SO(""+H,v,!1),v!=="body"&&n6(g,""+H);break;case"className":uO(g,"class",H);break;case"tabIndex":uO(g,"tabindex",H);break;case"dir":case"role":case"viewBox":case"width":case"height":uO(g,r,H);break;case"style":Z9(g,H,A);break;case"data":if(v!=="object"){uO(g,"data",H);break}case"src":case"href":if(H===""&&(v!=="a"||r!=="href")){r==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',r,r):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',r,r),g.removeAttribute(r);break}if(H==null||typeof H==="function"||typeof H==="symbol"||typeof H==="boolean"){g.removeAttribute(r);break}b0(H,r),H=c6(""+H),g.setAttribute(r,H);break;case"action":case"formAction":if(H!=null&&(v==="form"?r==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof H==="function"&&(q.encType==null&&q.method==null||Sq||(Sq=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),q.target==null||Cq||(Cq=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):v==="input"||v==="button"?r==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):v!=="input"||q.type==="submit"||q.type==="image"||Tq?v!=="button"||q.type==null||q.type==="submit"||Tq?typeof H==="function"&&(q.name==null||Uh||(Uh=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),q.formEncType==null&&q.formMethod==null||Sq||(Sq=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),q.formTarget==null||Cq||(Cq=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Tq=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Tq=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):r==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof H==="function"){g.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof A==="function"&&(r==="formAction"?(v!=="input"&&X0(g,v,"name",q.name,q,null),X0(g,v,"formEncType",q.formEncType,q,null),X0(g,v,"formMethod",q.formMethod,q,null),X0(g,v,"formTarget",q.formTarget,q,null)):(X0(g,v,"encType",q.encType,q,null),X0(g,v,"method",q.method,q,null),X0(g,v,"target",q.target,q,null)));if(H==null||typeof H==="symbol"||typeof H==="boolean"){g.removeAttribute(r);break}b0(H,r),H=c6(""+H),g.setAttribute(r,H);break;case"onClick":H!=null&&(typeof H!=="function"&&Rr(r,H),g.onclick=Dr);break;case"onScroll":H!=null&&(typeof H!=="function"&&Rr(r,H),cg("scroll",g));break;case"onScrollEnd":H!=null&&(typeof H!=="function"&&Rr(r,H),cg("scrollend",g));break;case"dangerouslySetInnerHTML":if(H!=null){if(typeof H!=="object"||!("__html"in H))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(r=H.__html,r!=null){if(q.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=r}}break;case"multiple":g.multiple=H&&typeof H!=="function"&&typeof H!=="symbol";break;case"muted":g.muted=H&&typeof H!=="function"&&typeof H!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(H==null||typeof H==="function"||typeof H==="boolean"||typeof H==="symbol"){g.removeAttribute("xlink:href");break}b0(H,r),r=c6(""+H),g.setAttributeNS(O4,"xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":H!=null&&typeof H!=="function"&&typeof H!=="symbol"?(b0(H,r),g.setAttribute(r,""+H)):g.removeAttribute(r);break;case"inert":H!==""||lq[r]||(lq[r]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",r));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":H&&typeof H!=="function"&&typeof H!=="symbol"?g.setAttribute(r,""):g.removeAttribute(r);break;case"capture":case"download":H===!0?g.setAttribute(r,""):H!==!1&&H!=null&&typeof H!=="function"&&typeof H!=="symbol"?(b0(H,r),g.setAttribute(r,H)):g.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&!isNaN(H)&&1<=H?(b0(H,r),g.setAttribute(r,H)):g.removeAttribute(r);break;case"rowSpan":case"start":H==null||typeof H==="function"||typeof H==="symbol"||isNaN(H)?g.removeAttribute(r):(b0(H,r),g.setAttribute(r,H));break;case"popover":cg("beforetoggle",g),cg("toggle",g),ZO(g,"popover",H);break;case"xlinkActuate":xr(g,O4,"xlink:actuate",H);break;case"xlinkArcrole":xr(g,O4,"xlink:arcrole",H);break;case"xlinkRole":xr(g,O4,"xlink:role",H);break;case"xlinkShow":xr(g,O4,"xlink:show",H);break;case"xlinkTitle":xr(g,O4,"xlink:title",H);break;case"xlinkType":xr(g,O4,"xlink:type",H);break;case"xmlBase":xr(g,nW,"xml:base",H);break;case"xmlLang":xr(g,nW,"xml:lang",H);break;case"xmlSpace":xr(g,nW,"xml:space",H);break;case"is":A!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),ZO(g,"is",H);break;case"innerText":case"textContent":break;case"popoverTarget":Lh||H==null||typeof H!=="object"||(Lh=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",H));default:!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"?(r=u9(r),ZO(g,r,H)):y5.hasOwnProperty(r)&&H!=null&&typeof H!=="function"&&Rr(r,H)}}function Wb(g,v,r,H,q,A){switch(r){case"style":Z9(g,H,A);break;case"dangerouslySetInnerHTML":if(H!=null){if(typeof H!=="object"||!("__html"in H))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(r=H.__html,r!=null){if(q.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=r}}break;case"children":typeof H==="string"?n6(g,H):(typeof H==="number"||typeof H==="bigint")&&n6(g,""+H);break;case"onScroll":H!=null&&(typeof H!=="function"&&Rr(r,H),cg("scroll",g));break;case"onScrollEnd":H!=null&&(typeof H!=="function"&&Rr(r,H),cg("scrollend",g));break;case"onClick":H!=null&&(typeof H!=="function"&&Rr(r,H),g.onclick=Dr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(y5.hasOwnProperty(r))H!=null&&typeof H!=="function"&&Rr(r,H);else g:{if(r[0]==="o"&&r[1]==="n"&&(q=r.endsWith("Capture"),v=r.slice(2,q?r.length-7:void 0),A=g[B1]||null,A=A!=null?A[r]:null,typeof A==="function"&&g.removeEventListener(v,A,q),typeof H==="function")){typeof A!=="function"&&A!==null&&(r in g?g[r]=null:g.hasAttribute(r)&&g.removeAttribute(r)),g.addEventListener(v,H,q);break g}r in g?g[r]=H:H===!0?g.setAttribute(r,""):ZO(g,r,H)}}}function X1(g,v,r){switch(bb(v,r),v){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cg("error",g),cg("load",g);var H=!1,q=!1,A;for(A in r)if(r.hasOwnProperty(A)){var W=r[A];if(W!=null)switch(A){case"src":H=!0;break;case"srcSet":q=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:X0(g,v,A,W,r,null)}}q&&X0(g,v,"srcSet",r.srcSet,r,null),H&&X0(g,v,"src",r.src,r,null);return;case"input":Uw("input",r),cg("invalid",g);var X=A=W=q=null,h=null,Q=null;for(H in r)if(r.hasOwnProperty(H)){var u=r[H];if(u!=null)switch(H){case"name":q=u;break;case"type":W=u;break;case"checked":h=u;break;case"defaultChecked":Q=u;break;case"value":A=u;break;case"defaultValue":X=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:X0(g,v,H,u,r,null)}}X9(g,r),Y9(g,A,X,h,Q,W,q,!1);return;case"select":Uw("select",r),cg("invalid",g),H=W=A=null;for(q in r)if(r.hasOwnProperty(q)&&(X=r[q],X!=null))switch(q){case"value":A=X;break;case"defaultValue":W=X;break;case"multiple":H=X;default:X0(g,v,q,X,r,null)}h9(g,r),v=A,r=W,g.multiple=!!H,v!=null?Z4(g,!!H,v,!1):r!=null&&Z4(g,!!H,r,!0);return;case"textarea":Uw("textarea",r),cg("invalid",g),A=q=H=null;for(W in r)if(r.hasOwnProperty(W)&&(X=r[W],X!=null))switch(W){case"value":H=X;break;case"defaultValue":q=X;break;case"children":A=X;break;case"dangerouslySetInnerHTML":if(X!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:X0(g,v,W,X,r,null)}J9(g,r),K9(g,H,q,A);return;case"option":G9(g,r);for(h in r)if(r.hasOwnProperty(h)&&(H=r[h],H!=null))switch(h){case"selected":g.selected=H&&typeof H!=="function"&&typeof H!=="symbol";break;default:X0(g,v,h,H,r,null)}return;case"dialog":cg("beforetoggle",g),cg("toggle",g),cg("cancel",g),cg("close",g);break;case"iframe":case"object":cg("load",g);break;case"video":case"audio":for(H=0;H<XH.length;H++)cg(XH[H],g);break;case"image":cg("error",g),cg("load",g);break;case"details":cg("toggle",g);break;case"embed":case"source":case"link":cg("error",g),cg("load",g);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in r)if(r.hasOwnProperty(Q)&&(H=r[Q],H!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:X0(g,v,Q,H,r,null)}return;default:if(e6(v)){for(u in r)r.hasOwnProperty(u)&&(H=r[u],H!==void 0&&Wb(g,v,u,H,r,void 0));return}}for(X in r)r.hasOwnProperty(X)&&(H=r[X],H!=null&&X0(g,v,X,H,r,null))}function FU(g,v,r,H){switch(bb(v,H),v){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var q=null,A=null,W=null,X=null,h=null,Q=null,u=null;for(o in r){var T=r[o];if(r.hasOwnProperty(o)&&T!=null)switch(o){case"checked":break;case"value":break;case"defaultValue":h=T;default:H.hasOwnProperty(o)||X0(g,v,o,null,H,T)}}for(var B in H){var o=H[B];if(T=r[B],H.hasOwnProperty(B)&&(o!=null||T!=null))switch(B){case"type":A=o;break;case"name":q=o;break;case"checked":Q=o;break;case"defaultChecked":u=o;break;case"value":W=o;break;case"defaultValue":X=o;break;case"children":case"dangerouslySetInnerHTML":if(o!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:o!==T&&X0(g,v,B,o,H,T)}}v=r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null,H=H.type==="checkbox"||H.type==="radio"?H.checked!=null:H.value!=null,v||!H||zh||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),zh=!0),!v||H||$h||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),$h=!0),LA(g,W,X,h,Q,u,A,q);return;case"select":o=W=X=B=null;for(A in r)if(h=r[A],r.hasOwnProperty(A)&&h!=null)switch(A){case"value":break;case"multiple":o=h;default:H.hasOwnProperty(A)||X0(g,v,A,null,H,h)}for(q in H)if(A=H[q],h=r[q],H.hasOwnProperty(q)&&(A!=null||h!=null))switch(q){case"value":B=A;break;case"defaultValue":X=A;break;case"multiple":W=A;default:A!==h&&X0(g,v,q,A,H,h)}H=X,v=W,r=o,B!=null?Z4(g,!!v,B,!1):!!r!==!!v&&(H!=null?Z4(g,!!v,H,!0):Z4(g,!!v,v?[]:"",!1));return;case"textarea":o=B=null;for(X in r)if(q=r[X],r.hasOwnProperty(X)&&q!=null&&!H.hasOwnProperty(X))switch(X){case"value":break;case"children":break;default:X0(g,v,X,null,H,q)}for(W in H)if(q=H[W],A=r[W],H.hasOwnProperty(W)&&(q!=null||A!=null))switch(W){case"value":B=q;break;case"defaultValue":o=q;break;case"children":break;case"dangerouslySetInnerHTML":if(q!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:q!==A&&X0(g,v,W,q,H,A)}Q9(g,B,o);return;case"option":for(var gg in r)if(B=r[gg],r.hasOwnProperty(gg)&&B!=null&&!H.hasOwnProperty(gg))switch(gg){case"selected":g.selected=!1;break;default:X0(g,v,gg,null,H,B)}for(h in H)if(B=H[h],o=r[h],H.hasOwnProperty(h)&&B!==o&&(B!=null||o!=null))switch(h){case"selected":g.selected=B&&typeof B!=="function"&&typeof B!=="symbol";break;default:X0(g,v,h,B,H,o)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var bg in r)B=r[bg],r.hasOwnProperty(bg)&&B!=null&&!H.hasOwnProperty(bg)&&X0(g,v,bg,null,H,B);for(Q in H)if(B=H[Q],o=r[Q],H.hasOwnProperty(Q)&&B!==o&&(B!=null||o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:X0(g,v,Q,B,H,o)}return;default:if(e6(v)){for(var J0 in r)B=r[J0],r.hasOwnProperty(J0)&&B!==void 0&&!H.hasOwnProperty(J0)&&Wb(g,v,J0,void 0,H,B);for(u in H)B=H[u],o=r[u],!H.hasOwnProperty(u)||B===o||B===void 0&&o===void 0||Wb(g,v,u,B,H,o);return}}for(var tg in r)B=r[tg],r.hasOwnProperty(tg)&&B!=null&&!H.hasOwnProperty(tg)&&X0(g,v,tg,null,H,B);for(T in H)B=H[T],o=r[T],!H.hasOwnProperty(T)||B===o||B==null&&o==null||X0(g,v,T,B,H,o)}function FG(g){switch(g){case"class":return"className";case"for":return"htmlFor";default:return g}}function Mb(g){var v={};g=g.style;for(var r=0;r<g.length;r++){var H=g[r];v[H]=g.getPropertyValue(H)}return v}function BG(g,v,r){if(v!=null&&typeof v!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var H,q=H="",A;for(A in v)if(v.hasOwnProperty(A)){var W=v[A];W!=null&&typeof W!=="boolean"&&W!==""&&(A.indexOf("--")===0?(_6(W,A),H+=q+A+":"+(""+W).trim()):typeof W!=="number"||W===0||x7.has(A)?(_6(W,A),H+=q+A.replace(T7,"-$1").toLowerCase().replace(C7,"-ms-")+":"+(""+W).trim()):H+=q+A.replace(T7,"-$1").toLowerCase().replace(C7,"-ms-")+":"+W+"px",q=";")}H=H||null,v=g.getAttribute("style"),v!==H&&(H=lw(H),lw(v)!==H&&(r.style=Mb(g)))}}function Kv(g,v,r,H,q,A){if(q.delete(r),g=g.getAttribute(r),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(b0(H,v),g===""+H)return}r1(v,g,H,A)}function IG(g,v,r,H,q,A){if(q.delete(r),g=g.getAttribute(r),g===null){switch(typeof H){case"function":case"symbol":return}if(!H)return}else switch(typeof H){case"function":case"symbol":break;default:if(H)return}r1(v,g,H,A)}function Xb(g,v,r,H,q,A){if(q.delete(r),g=g.getAttribute(r),g===null)switch(typeof H){case"undefined":case"function":case"symbol":return}else if(H!=null)switch(typeof H){case"function":case"symbol":break;default:if(b0(H,r),g===""+H)return}r1(v,g,H,A)}function NG(g,v,r,H,q,A){if(q.delete(r),g=g.getAttribute(r),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(H))return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(!isNaN(H)&&(b0(H,v),g===""+H))return}r1(v,g,H,A)}function Yb(g,v,r,H,q,A){if(q.delete(r),g=g.getAttribute(r),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(b0(H,v),r=c6(""+H),g===r)return}r1(v,g,H,A)}function ZG(g,v,r,H){for(var q={},A=new Set,W=g.attributes,X=0;X<W.length;X++)switch(W[X].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:A.add(W[X].name)}if(e6(v)){for(var h in r)if(r.hasOwnProperty(h)){var Q=r[h];if(Q!=null){if(y5.hasOwnProperty(h))typeof Q!=="function"&&Rr(h,Q);else if(r.suppressHydrationWarning!==!0)switch(h){case"children":typeof Q!=="string"&&typeof Q!=="number"||r1("children",g.textContent,Q,q);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":W=g.innerHTML,Q=Q?Q.__html:void 0,Q!=null&&(Q=UG(g,Q),r1(h,W,Q,q));continue;case"style":A.delete(h),BG(g,Q,q);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":A.delete(h.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",h);continue;case"className":A.delete("class"),W=b9(g,"class",Q),r1("className",W,Q,q);continue;default:H.context===Hw&&v!=="svg"&&v!=="math"?A.delete(h.toLowerCase()):A.delete(h),W=b9(g,h,Q),r1(h,W,Q,q)}}}}else for(Q in r)if(r.hasOwnProperty(Q)&&(h=r[Q],h!=null)){if(y5.hasOwnProperty(Q))typeof h!=="function"&&Rr(Q,h);else if(r.suppressHydrationWarning!==!0)switch(Q){case"children":typeof h!=="string"&&typeof h!=="number"||r1("children",g.textContent,h,q);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":W=g.innerHTML,h=h?h.__html:void 0,h!=null&&(h=UG(g,h),W!==h&&(q[Q]={__html:W}));continue;case"className":Kv(g,Q,"class",h,A,q);continue;case"tabIndex":Kv(g,Q,"tabindex",h,A,q);continue;case"style":A.delete(Q),BG(g,h,q);continue;case"multiple":A.delete(Q),r1(Q,g.multiple,h,q);continue;case"muted":A.delete(Q),r1(Q,g.muted,h,q);continue;case"autoFocus":A.delete("autofocus"),r1(Q,g.autofocus,h,q);continue;case"data":if(v!=="object"){A.delete(Q),W=g.getAttribute("data"),r1(Q,W,h,q);continue}case"src":case"href":if(!(h!==""||v==="a"&&Q==="href"||v==="object"&&Q==="data")){Q==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Q,Q):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Q,Q);continue}Yb(g,Q,Q,h,A,q);continue;case"action":case"formAction":if(W=g.getAttribute(Q),typeof h==="function"){A.delete(Q.toLowerCase()),Q==="formAction"?(A.delete("name"),A.delete("formenctype"),A.delete("formmethod"),A.delete("formtarget")):(A.delete("enctype"),A.delete("method"),A.delete("target"));continue}else if(W===mF){A.delete(Q.toLowerCase()),r1(Q,"function",h,q);continue}Yb(g,Q,Q.toLowerCase(),h,A,q);continue;case"xlinkHref":Yb(g,Q,"xlink:href",h,A,q);continue;case"contentEditable":Xb(g,Q,"contenteditable",h,A,q);continue;case"spellCheck":Xb(g,Q,"spellcheck",h,A,q);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Xb(g,Q,Q,h,A,q);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":IG(g,Q,Q.toLowerCase(),h,A,q);continue;case"capture":case"download":g:{X=g;var u=W=Q,T=q;if(A.delete(u),X=X.getAttribute(u),X===null)switch(typeof h){case"undefined":case"function":case"symbol":break g;default:if(h===!1)break g}else if(h!=null)switch(typeof h){case"function":case"symbol":break;case"boolean":if(h===!0&&X==="")break g;break;default:if(b0(h,W),X===""+h)break g}r1(W,X,h,T)}continue;case"cols":case"rows":case"size":case"span":g:{if(X=g,u=W=Q,T=q,A.delete(u),X=X.getAttribute(u),X===null)switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":break g;default:if(isNaN(h)||1>h)break g}else if(h!=null)switch(typeof h){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(h)||1>h)&&(b0(h,W),X===""+h))break g}r1(W,X,h,T)}continue;case"rowSpan":NG(g,Q,"rowspan",h,A,q);continue;case"start":NG(g,Q,Q,h,A,q);continue;case"xHeight":Kv(g,Q,"x-height",h,A,q);continue;case"xlinkActuate":Kv(g,Q,"xlink:actuate",h,A,q);continue;case"xlinkArcrole":Kv(g,Q,"xlink:arcrole",h,A,q);continue;case"xlinkRole":Kv(g,Q,"xlink:role",h,A,q);continue;case"xlinkShow":Kv(g,Q,"xlink:show",h,A,q);continue;case"xlinkTitle":Kv(g,Q,"xlink:title",h,A,q);continue;case"xlinkType":Kv(g,Q,"xlink:type",h,A,q);continue;case"xmlBase":Kv(g,Q,"xml:base",h,A,q);continue;case"xmlLang":Kv(g,Q,"xml:lang",h,A,q);continue;case"xmlSpace":Kv(g,Q,"xml:space",h,A,q);continue;case"inert":h!==""||lq[Q]||(lq[Q]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",Q)),IG(g,Q,Q,h,A,q);continue;default:if(!(2<Q.length)||Q[0]!=="o"&&Q[0]!=="O"||Q[1]!=="n"&&Q[1]!=="N"){X=u9(Q),W=!1,H.context===Hw&&v!=="svg"&&v!=="math"?A.delete(X.toLowerCase()):(u=Q.toLowerCase(),u=f2.hasOwnProperty(u)?f2[u]||null:null,u!==null&&u!==Q&&(W=!0,A.delete(u)),A.delete(X));g:if(u=g,T=X,X=h,j6(T))if(u.hasAttribute(T))u=u.getAttribute(T),b0(X,T),X=u===""+X?X:u;else{switch(typeof X){case"function":case"symbol":break g;case"boolean":if(u=T.toLowerCase().slice(0,5),u!=="data-"&&u!=="aria-")break g}X=X===void 0?void 0:null}else X=void 0;W||r1(Q,X,h,q)}}}return 0<A.size&&r.suppressHydrationWarning!==!0&&LU(g,A,q),Object.keys(q).length===0?null:q}function BU(g,v){switch(g.length){case 0:return"";case 1:return g[0];case 2:return g[0]+" "+v+" "+g[1];default:return g.slice(0,-1).join(", ")+", "+v+" "+g[g.length-1]}}function uG(g){switch(g){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IU(){if(typeof performance.getEntriesByType==="function"){for(var g=0,v=0,r=performance.getEntriesByType("resource"),H=0;H<r.length;H++){var q=r[H],A=q.transferSize,W=q.initiatorType,X=q.duration;if(A&&X&&uG(W)){W=0,X=q.responseEnd;for(H+=1;H<r.length;H++){var h=r[H],Q=h.startTime;if(Q>X)break;var{transferSize:u,initiatorType:T}=h;u&&uG(T)&&(h=h.responseEnd,W+=u*(h<X?1:(X-Q)/(h-Q)))}if(--H,v+=8*(A+W)/(q.duration/1000),g++,10<g)break}}if(0<g)return v/g/1e6}return navigator.connection&&(g=navigator.connection.downlink,typeof g==="number")?g:5}function N2(g){return g.nodeType===9?g:g.ownerDocument}function TG(g){switch(g){case d4:return N6;case i2:return xq;default:return Hw}}function CG(g,v){if(g===Hw)switch(v){case"svg":return N6;case"math":return xq;default:return Hw}return g===N6&&v==="foreignObject"?Hw:g}function Gb(g,v){return g==="textarea"||g==="noscript"||typeof v.children==="string"||typeof v.children==="number"||typeof v.children==="bigint"||typeof v.dangerouslySetInnerHTML==="object"&&v.dangerouslySetInnerHTML!==null&&v.dangerouslySetInnerHTML.__html!=null}function NU(){var g=window.event;if(g&&g.type==="popstate"){if(g===pW)return!1;return pW=g,!0}return pW=null,!1}function K8(){var g=window.event;return g&&g!==RH?g.type:null}function $8(){var g=window.event;return g&&g!==RH?g.timeStamp:-1.1}function ZU(g){setTimeout(function(){throw g})}function uU(g,v,r){switch(v){case"button":case"input":case"select":case"textarea":r.autoFocus&&g.focus();break;case"img":r.src?g.src=r.src:r.srcSet&&(g.srcset=r.srcSet)}}function TU(){}function CU(g,v,r,H){FU(g,v,r,H),g[B1]=H}function SG(g){n6(g,"")}function SU(g,v,r){g.nodeValue=r}function lG(g){if(!g.__reactWarnedAboutChildrenConflict){var v=g[B1]||null;if(v!==null){var r=Tg(g);r!==null&&(typeof v.children==="string"||typeof v.children==="number"?(g.__reactWarnedAboutChildrenConflict=!0,Ag(r,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):v.dangerouslySetInnerHTML!=null&&(g.__reactWarnedAboutChildrenConflict=!0,Ag(r,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function ow(g){return g==="head"}function lU(g,v){g.removeChild(v)}function oU(g,v){(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g).removeChild(v)}function oG(g,v){var r=v,H=0;do{var q=r.nextSibling;if(g.removeChild(r),q&&q.nodeType===8)if(r=q.data,r===GH||r===oq){if(H===0){g.removeChild(q),f4(v);return}H--}else if(r===YH||r===H5||r===A4||r===I6||r===q4)H++;else if(r===VF)z8(g.ownerDocument.documentElement);else if(r===_F){r=g.ownerDocument.head,z8(r);for(var A=r.firstChild;A;){var{nextSibling:W,nodeName:X}=A;A[Z8]||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&A.rel.toLowerCase()==="stylesheet"||r.removeChild(A),A=W}}else r===EF&&z8(g.ownerDocument.body);r=q}while(r);f4(v)}function xG(g,v){var r=g;g=0;do{var H=r.nextSibling;if(r.nodeType===1?v?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(v?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),H&&H.nodeType===8)if(r=H.data,r===GH)if(g===0)break;else g--;else r!==YH&&r!==H5&&r!==A4&&r!==I6||g++;r=H}while(r)}function xU(g){xG(g,!0)}function DU(g){g=g.style,typeof g.setProperty==="function"?g.setProperty("display","none","important"):g.display="none"}function mU(g){g.nodeValue=""}function kU(g){xG(g,!1)}function VU(g,v){v=v[yF],v=v!==void 0&&v!==null&&v.hasOwnProperty("display")?v.display:null,g.style.display=v==null||typeof v==="boolean"?"":(""+v).trim()}function EU(g,v){g.nodeValue=v}function Rb(g){var v=g.firstChild;v&&v.nodeType===10&&(v=v.nextSibling);for(;v;){var r=v;switch(v=v.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Rb(r),Hg(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}g.removeChild(r)}}function _U(g,v,r,H){for(;g.nodeType===1;){var q=r;if(g.nodeName.toLowerCase()!==v.toLowerCase()){if(!H&&(g.nodeName!=="INPUT"||g.type!=="hidden"))break}else if(!H)if(v==="input"&&g.type==="hidden"){b0(q.name,"name");var A=q.name==null?null:""+q.name;if(q.type==="hidden"&&g.getAttribute("name")===A)return g}else return g;else if(!g[Z8])switch(v){case"meta":if(!g.hasAttribute("itemprop"))break;return g;case"link":if(A=g.getAttribute("rel"),A==="stylesheet"&&g.hasAttribute("data-precedence"))break;else if(A!==q.rel||g.getAttribute("href")!==(q.href==null||q.href===""?null:q.href)||g.getAttribute("crossorigin")!==(q.crossOrigin==null?null:q.crossOrigin)||g.getAttribute("title")!==(q.title==null?null:q.title))break;return g;case"style":if(g.hasAttribute("data-precedence"))break;return g;case"script":if(A=g.getAttribute("src"),(A!==(q.src==null?null:q.src)||g.getAttribute("type")!==(q.type==null?null:q.type)||g.getAttribute("crossorigin")!==(q.crossOrigin==null?null:q.crossOrigin))&&A&&g.hasAttribute("async")&&!g.hasAttribute("itemprop"))break;return g;default:return g}if(g=rv(g.nextSibling),g===null)break}return null}function yU(g,v,r){if(v==="")return null;for(;g.nodeType!==3;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!r)return null;if(g=rv(g.nextSibling),g===null)return null}return g}function DG(g,v){for(;g.nodeType!==8;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!v)return null;if(g=rv(g.nextSibling),g===null)return null}return g}function hb(g){return g.data===H5||g.data===A4}function Jb(g){return g.data===I6||g.data===H5&&g.ownerDocument.readyState!==Bh}function jU(g,v){var r=g.ownerDocument;if(g.data===A4)g._reactRetry=v;else if(g.data!==H5||r.readyState!==Bh)v();else{var H=function(){v(),r.removeEventListener("DOMContentLoaded",H)};r.addEventListener("DOMContentLoaded",H),g._reactRetry=H}}function rv(g){for(;g!=null;g=g.nextSibling){var v=g.nodeType;if(v===1||v===3)break;if(v===8){if(v=g.data,v===YH||v===I6||v===H5||v===A4||v===q4||v===eW||v===Fh)break;if(v===GH||v===oq)return null}}return g}function mG(g){if(g.nodeType===1){for(var v=g.nodeName.toLowerCase(),r={},H=g.attributes,q=0;q<H.length;q++){var A=H[q];r[FG(A.name)]=A.name.toLowerCase()==="style"?Mb(g):A.value}return{type:v,props:r}}return g.nodeType===8?g.data===q4?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:g.nodeValue}function kG(g,v,r){return r===null||r[kF]!==!0?(g.nodeValue===v?g=null:(v=lw(v),g=lw(g.nodeValue)===v?null:g.nodeValue),g):null}function Qb(g){g=g.nextSibling;for(var v=0;g;){if(g.nodeType===8){var r=g.data;if(r===GH||r===oq){if(v===0)return rv(g.nextSibling);v--}else r!==YH&&r!==I6&&r!==H5&&r!==A4&&r!==q4||v++}g=g.nextSibling}return null}function VG(g){g=g.previousSibling;for(var v=0;g;){if(g.nodeType===8){var r=g.data;if(r===YH||r===I6||r===H5||r===A4||r===q4){if(v===0)return g;v--}else r!==GH&&r!==oq||v++}g=g.previousSibling}return null}function iU(g){f4(g)}function fU(g){f4(g)}function nU(g){f4(g)}function EG(g,v,r,H,q){switch(q&&uA(g,H.ancestorInfo),v=N2(r),g){case"html":if(g=v.documentElement,!g)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"head":if(g=v.head,!g)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"body":if(g=v.body,!g)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return g;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function eU(g,v,r,H){if(!r[kw]&&Tg(r)){var q=r.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",q,q,q)}switch(g){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(q=r.attributes;q.length;)r.removeAttributeNode(q[0]);X1(r,g,v),r[Y1]=H,r[B1]=v}function z8(g){for(var v=g.attributes;v.length;)g.removeAttributeNode(v[0]);Hg(g)}function Z2(g){return typeof g.getRootNode==="function"?g.getRootNode():g.nodeType===9?g:g.ownerDocument}function _G(g,v,r){var H=Z6;if(H&&typeof v==="string"&&v){var q=Qv(v);q='link[rel="'+g+'"][href="'+q+'"]',typeof r==="string"&&(q+='[crossorigin="'+r+'"]'),Ch.has(q)||(Ch.add(q),g={rel:g,crossOrigin:r,href:v},H.querySelector(q)===null&&(v=H.createElement("link"),X1(v,"link",g),zg(v),H.head.appendChild(v)))}}function yG(g,v,r,H){var q=(q=Dw.current)?Z2(q):null;if(!q)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(g){case"meta":case"title":return null;case"style":return typeof r.precedence==="string"&&typeof r.href==="string"?(r=j4(r.href),v=g0(q).hoistableStyles,H=v.get(r),H||(H={type:"style",instance:null,count:0,state:null},v.set(r,H)),H):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href==="string"&&typeof r.precedence==="string"){g=j4(r.href);var A=g0(q).hoistableStyles,W=A.get(g);if(!W&&(q=q.ownerDocument||q,W={type:"stylesheet",instance:null,count:0,state:{loading:b4,preload:null}},A.set(g,W),(A=q.querySelector(U8(g)))&&!A._p&&(W.instance=A,W.state.loading=hH|Tv),!Cv.has(g))){var X={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy};Cv.set(g,X),A||cU(q,g,X,W.state)}if(v&&H===null)throw r=`

  - `+u2(v)+`
  + `+u2(r),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+r);return W}if(v&&H!==null)throw r=`

  - `+u2(v)+`
  + `+u2(r),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+r);return null;case"script":return v=r.async,r=r.src,typeof r==="string"&&v&&typeof v!=="function"&&typeof v!=="symbol"?(r=i4(r),v=g0(q).hoistableScripts,H=v.get(r),H||(H={type:"script",instance:null,count:0,state:null},v.set(r,H)),H):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+g+'". this is a bug in React.')}}function u2(g){var v=0,r="<link";return typeof g.rel==="string"?(v++,r+=' rel="'+g.rel+'"'):Dv.call(g,"rel")&&(v++,r+=' rel="'+(g.rel===null?"null":"invalid type "+typeof g.rel)+'"'),typeof g.href==="string"?(v++,r+=' href="'+g.href+'"'):Dv.call(g,"href")&&(v++,r+=' href="'+(g.href===null?"null":"invalid type "+typeof g.href)+'"'),typeof g.precedence==="string"?(v++,r+=' precedence="'+g.precedence+'"'):Dv.call(g,"precedence")&&(v++,r+=" precedence={"+(g.precedence===null?"null":"invalid type "+typeof g.precedence)+"}"),Object.getOwnPropertyNames(g).length>v&&(r+=" ..."),r+" />"}function j4(g){return'href="'+Qv(g)+'"'}function U8(g){return'link[rel="stylesheet"]['+g+"]"}function jG(g){return yg({},g,{"data-precedence":g.precedence,precedence:null})}function cU(g,v,r,H){g.querySelector('link[rel="preload"][as="style"]['+v+"]")?H.loading=hH:(v=g.createElement("link"),H.preload=v,v.addEventListener("load",function(){return H.loading|=hH}),v.addEventListener("error",function(){return H.loading|=uh}),X1(v,"link",r),zg(v),g.head.appendChild(v))}function i4(g){return'[src="'+Qv(g)+'"]'}function L8(g){return"script[async]"+g}function iG(g,v,r){if(v.count++,v.instance===null)switch(v.type){case"style":var H=g.querySelector('style[data-href~="'+Qv(r.href)+'"]');if(H)return v.instance=H,zg(H),H;var q=yg({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return H=(g.ownerDocument||g).createElement("style"),zg(H),X1(H,"style",q),T2(H,r.precedence,g),v.instance=H;case"stylesheet":q=j4(r.href);var A=g.querySelector(U8(q));if(A)return v.state.loading|=Tv,v.instance=A,zg(A),A;H=jG(r),(q=Cv.get(q))&&Kb(H,q),A=(g.ownerDocument||g).createElement("link"),zg(A);var W=A;return W._p=new Promise(function(X,h){W.onload=X,W.onerror=h}),X1(A,"link",H),v.state.loading|=Tv,T2(A,r.precedence,g),v.instance=A;case"script":if(A=i4(r.src),q=g.querySelector(L8(A)))return v.instance=q,zg(q),q;if(H=r,q=Cv.get(A))H=yg({},r),$b(H,q);return g=g.ownerDocument||g,q=g.createElement("script"),zg(q),X1(q,"link",H),g.head.appendChild(q),v.instance=q;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+v.type+'". this is a bug in React.')}else v.type==="stylesheet"&&(v.state.loading&Tv)===b4&&(H=v.instance,v.state.loading|=Tv,T2(H,r.precedence,g));return v.instance}function T2(g,v,r){for(var H=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),q=H.length?H[H.length-1]:null,A=q,W=0;W<H.length;W++){var X=H[W];if(X.dataset.precedence===v)A=X;else if(A!==q)break}A?A.parentNode.insertBefore(g,A.nextSibling):(v=r.nodeType===9?r.head:r,v.insertBefore(g,v.firstChild))}function Kb(g,v){g.crossOrigin==null&&(g.crossOrigin=v.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=v.referrerPolicy),g.title==null&&(g.title=v.title)}function $b(g,v){g.crossOrigin==null&&(g.crossOrigin=v.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=v.referrerPolicy),g.integrity==null&&(g.integrity=v.integrity)}function fG(g,v,r){if(Dq===null){var H=new Map,q=Dq=new Map;q.set(r,H)}else q=Dq,H=q.get(r),H||(H=new Map,q.set(r,H));if(H.has(g))return H;H.set(g,null),r=r.getElementsByTagName(g);for(q=0;q<r.length;q++){var A=r[q];if(!(A[Z8]||A[Y1]||g==="link"&&A.getAttribute("rel")==="stylesheet")&&A.namespaceURI!==d4){var W=A.getAttribute(v)||"";W=g+W;var X=H.get(W);X?X.push(A):H.set(W,[A])}}return H}function nG(g,v,r){g=g.ownerDocument||g,g.head.insertBefore(r,v==="title"?g.querySelector("head > title"):null)}function tU(g,v,r){var H=!r.ancestorInfo.containerTagInScope;if(r.context===N6||v.itemProp!=null)return!H||v.itemProp==null||g!=="meta"&&g!=="title"&&g!=="style"&&g!=="link"&&g!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",g,g),!1;switch(g){case"meta":case"title":return!0;case"style":if(typeof v.precedence!=="string"||typeof v.href!=="string"||v.href===""){H&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof v.rel!=="string"||typeof v.href!=="string"||v.href===""||v.onLoad||v.onError){if(v.rel==="stylesheet"&&typeof v.precedence==="string"){g=v.href;var{onError:q,disabled:A}=v;r=[],v.onLoad&&r.push("`onLoad`"),q&&r.push("`onError`"),A!=null&&r.push("`disabled`"),q=BU(r,"and"),q+=r.length===1?" prop":" props",A=r.length===1?"an "+q:"the "+q,r.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',g,A,q)}H&&(typeof v.rel!=="string"||typeof v.href!=="string"||v.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(v.onError||v.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(v.rel){case"stylesheet":return g=v.precedence,v=v.disabled,typeof g!=="string"&&H&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof g==="string"&&v==null;default:return!0}case"script":if(g=v.async&&typeof v.async!=="function"&&typeof v.async!=="symbol",!g||v.onLoad||v.onError||!v.src||typeof v.src!=="string"){H&&(g?v.onLoad||v.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":H&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",g)}return!1}function eG(g){return g.type==="stylesheet"&&(g.state.loading&Th)===b4?!1:!0}function pU(g,v,r,H){if(r.type==="stylesheet"&&(typeof H.media!=="string"||matchMedia(H.media).matches!==!1)&&(r.state.loading&Tv)===b4){if(r.instance===null){var q=j4(H.href),A=v.querySelector(U8(q));if(A){v=A._p,v!==null&&typeof v==="object"&&typeof v.then==="function"&&(g.count++,g=C2.bind(g),v.then(g,g)),r.state.loading|=Tv,r.instance=A,zg(A);return}A=v.ownerDocument||v,H=jG(H),(q=Cv.get(q))&&Kb(H,q),A=A.createElement("link"),zg(A);var W=A;W._p=new Promise(function(X,h){W.onload=X,W.onerror=h}),X1(A,"link",H),r.instance=A}g.stylesheets===null&&(g.stylesheets=new Map),g.stylesheets.set(r,v),(v=r.state.preload)&&(r.state.loading&Th)===b4&&(g.count++,r=C2.bind(g),v.addEventListener("load",r),v.addEventListener("error",r))}}function dU(g,v){return g.stylesheets&&g.count===0&&S2(g,g.stylesheets),0<g.count||0<g.imgCount?function(r){var H=setTimeout(function(){if(g.stylesheets&&S2(g,g.stylesheets),g.unsuspend){var A=g.unsuspend;g.unsuspend=null,A()}},fF+v);0<g.imgBytes&&aW===0&&(aW=125*IU()*eF);var q=setTimeout(function(){if(g.waitingForImages=!1,g.count===0&&(g.stylesheets&&S2(g,g.stylesheets),g.unsuspend)){var A=g.unsuspend;g.unsuspend=null,A()}},(g.imgBytes>aW?50:nF)+v);return g.unsuspend=r,function(){g.unsuspend=null,clearTimeout(H),clearTimeout(q)}}:null}function C2(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)S2(this,this.stylesheets);else if(this.unsuspend){var g=this.unsuspend;this.unsuspend=null,g()}}}function S2(g,v){g.stylesheets=null,g.unsuspend!==null&&(g.count++,mq=new Map,v.forEach(aU,g),mq=null,C2.call(g))}function aU(g,v){if(!(v.state.loading&Tv)){var r=mq.get(g);if(r)var H=r.get(sW);else{r=new Map,mq.set(g,r);for(var q=g.querySelectorAll("link[data-precedence],style[data-precedence]"),A=0;A<q.length;A++){var W=q[A];if(W.nodeName==="LINK"||W.getAttribute("media")!=="not all")r.set(W.dataset.precedence,W),H=W}H&&r.set(sW,H)}q=v.instance,W=q.getAttribute("data-precedence"),A=r.get(W)||H,A===H&&r.set(sW,q),r.set(W,q),this.count++,H=C2.bind(this),q.addEventListener("load",H),q.addEventListener("error",H),A?A.parentNode.insertBefore(q,A.nextSibling):(g=g.nodeType===9?g.head:g,g.insertBefore(q,g.firstChild)),v.state.loading|=Tv}}function sU(g,v,r,H,q,A,W,X,h){this.tag=1,this.containerInfo=g,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=P4,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=N4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N4(0),this.hiddenUpdates=N4(null),this.identifierPrefix=H,this.onUncaughtError=q,this.onCaughtError=A,this.onRecoverableError=W,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,g=this.pendingUpdatersLaneMap=[];for(v=0;31>v;v++)g.push(new Set);this._debugRootType=r?"hydrateRoot()":"createRoot()"}function cG(g,v,r,H,q,A,W,X,h,Q,u,T){return g=new sU(g,v,r,W,h,Q,u,T,X),v=QF,A===!0&&(v|=z1|kv),v|=xg,A=L(3,null,null,v),g.current=A,A.stateNode=g,v=cA(),x5(v),g.pooledCache=v,x5(v),A.memoizedState={element:H,isDehydrated:r,cache:v},sA(A),g}function tG(g){if(!g)return yw;return g=yw,g}function zb(g,v,r,H,q,A){if($1&&typeof $1.onScheduleFiberRoot==="function")try{$1.onScheduleFiberRoot(t4,H,r)}catch(W){Kr||(Kr=!0,console.error("React instrumentation encountered an error: %o",W))}q=tG(q),H.context===null?H.context=q:H.pendingContext=q,Qr&&Hv!==null&&!xh&&(xh=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,m(Hv)||"Unknown")),H=Nw(v),H.payload={element:r},A=A===void 0?null:A,A!==null&&(typeof A!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",A),H.callback=A),r=Zw(g,H,v),r!==null&&(wr(v,"root.render()",null),Z0(r,g,v),w8(r,g,v))}function pG(g,v){if(g=g.memoizedState,g!==null&&g.dehydrated!==null){var r=g.retryLane;g.retryLane=r!==0&&r<v?r:v}}function Ub(g,v){pG(g,v),(g=g.alternate)&&pG(g,v)}function dG(g){if(g.tag===13||g.tag===31){var v=K1(g,67108864);v!==null&&Z0(v,g,67108864),Ub(g,67108864)}}function aG(g){if(g.tag===13||g.tag===31){var v=vv(g);v=I5(v);var r=K1(g,v);r!==null&&Z0(r,g,v),Ub(g,v)}}function gL(){return Hv}function vL(g,v,r,H){var q=D.T;D.T=null;var A=H0.p;try{H0.p=Ov,Lb(g,v,r,H)}finally{H0.p=A,D.T=q}}function rL(g,v,r,H){var q=D.T;D.T=null;var A=H0.p;try{H0.p=mv,Lb(g,v,r,H)}finally{H0.p=A,D.T=q}}function Lb(g,v,r,H){if(Vq){var q=Fb(H);if(q===null)Pb(g,v,H,Eq,r),g7(g,H);else if(wL(q,g,v,r,H))H.stopPropagation();else if(g7(g,H),v&4&&-1<tF.indexOf(g)){for(;q!==null;){var A=Tg(q);if(A!==null)switch(A.tag){case 3:if(A=A.stateNode,A.current.memoizedState.isDehydrated){var W=sv(A.pendingLanes);if(W!==0){var X=A;X.pendingLanes|=2;for(X.entangledLanes|=2;W;){var h=1<<31-F1(W);X.entanglements[1]|=h,W&=~h}Gr(A),(ag&(g1|bv))===q1&&(Uq=w1()+bh,J8(0,!1))}}break;case 31:case 13:X=K1(A,2),X!==null&&Z0(X,A,2),E4(),Ub(A,2)}if(A=Fb(H),A===null&&Pb(g,v,H,Eq,r),A===q)break;q=A}q!==null&&H.stopPropagation()}else Pb(g,v,H,null,r)}}function Fb(g){return g=TA(g),Bb(g)}function Bb(g){if(Eq=null,g=Rg(g),g!==null){var v=_(g);if(v===null)g=null;else{var r=v.tag;if(r===13){if(g=Mg(v),g!==null)return g;g=null}else if(r===31){if(g=qg(v),g!==null)return g;g=null}else if(r===3){if(v.stateNode.current.memoizedState.isDehydrated)return v.tag===3?v.stateNode.containerInfo:null;g=null}else v!==g&&(g=null)}}return Eq=g,null}function sG(g){switch(g){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Ov;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return mv;case"message":switch(XL()){case kb:return Ov;case Vb:return mv;case c4:case YL:return zr;case Eb:return y2;default:return zr}default:return zr}}function g7(g,v){switch(g){case"focusin":case"focusout":O5=null;break;case"dragenter":case"dragleave":q5=null;break;case"mouseover":case"mouseout":A5=null;break;case"pointerover":case"pointerout":QH.delete(v.pointerId);break;case"gotpointercapture":case"lostpointercapture":KH.delete(v.pointerId)}}function F8(g,v,r,H,q,A){if(g===null||g.nativeEvent!==A)return g={blockedOn:v,domEventName:r,eventSystemFlags:H,nativeEvent:A,targetContainers:[q]},v!==null&&(v=Tg(v),v!==null&&dG(v)),g;return g.eventSystemFlags|=H,v=g.targetContainers,q!==null&&v.indexOf(q)===-1&&v.push(q),g}function wL(g,v,r,H,q){switch(v){case"focusin":return O5=F8(O5,g,v,r,H,q),!0;case"dragenter":return q5=F8(q5,g,v,r,H,q),!0;case"mouseover":return A5=F8(A5,g,v,r,H,q),!0;case"pointerover":var A=q.pointerId;return QH.set(A,F8(QH.get(A)||null,g,v,r,H,q)),!0;case"gotpointercapture":return A=q.pointerId,KH.set(A,F8(KH.get(A)||null,g,v,r,H,q)),!0}return!1}function v7(g){var v=Rg(g.target);if(v!==null){var r=_(v);if(r!==null){if(v=r.tag,v===13){if(v=Mg(r),v!==null){g.blockedOn=v,n(g.priority,function(){aG(r)});return}}else if(v===31){if(v=qg(r),v!==null){g.blockedOn=v,n(g.priority,function(){aG(r)});return}}else if(v===3&&r.stateNode.current.memoizedState.isDehydrated){g.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}g.blockedOn=null}function l2(g){if(g.blockedOn!==null)return!1;for(var v=g.targetContainers;0<v.length;){var r=Fb(g.nativeEvent);if(r===null){r=g.nativeEvent;var H=new r.constructor(r.type,r),q=H;u8!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),u8=q,r.target.dispatchEvent(H),u8===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),u8=null}else return v=Tg(r),v!==null&&dG(v),g.blockedOn=r,!1;v.shift()}return!0}function r7(g,v,r){l2(g)&&r.delete(v)}function HL(){gM=!1,O5!==null&&l2(O5)&&(O5=null),q5!==null&&l2(q5)&&(q5=null),A5!==null&&l2(A5)&&(A5=null),QH.forEach(r7),KH.forEach(r7)}function o2(g,v){g.blockedOn===v&&(g.blockedOn=null,gM||(gM=!0,v0.unstable_scheduleCallback(v0.unstable_NormalPriority,HL)))}function w7(g){_q!==g&&(_q=g,v0.unstable_scheduleCallback(v0.unstable_NormalPriority,function(){_q===g&&(_q=null);for(var v=0;v<g.length;v+=3){var r=g[v],H=g[v+1],q=g[v+2];if(typeof H!=="function")if(Bb(H||r)===null)continue;else break;var A=Tg(r);A!==null&&(g.splice(v,3),v-=3,r={pending:!0,data:q,method:r.method,action:H},Object.freeze(r),BP(A,r,H,q))}}))}function f4(g){function v(h){return o2(h,g)}O5!==null&&o2(O5,g),q5!==null&&o2(q5,g),A5!==null&&o2(A5,g),QH.forEach(v),KH.forEach(v);for(var r=0;r<P5.length;r++){var H=P5[r];H.blockedOn===g&&(H.blockedOn=null)}for(;0<P5.length&&(r=P5[0],r.blockedOn===null);)v7(r),r.blockedOn===null&&P5.shift();if(r=(g.ownerDocument||g).$$reactFormReplay,r!=null)for(H=0;H<r.length;H+=3){var q=r[H],A=r[H+1],W=q[B1]||null;if(typeof A==="function")W||w7(r);else if(W){var X=null;if(A&&A.hasAttribute("formAction")){if(q=A,W=A[B1]||null)X=W.formAction;else if(Bb(q)!==null)continue}else X=W.action;typeof X==="function"?r[H+1]=X:(r.splice(H,3),H-=3),w7(r)}}}function H7(){function g(A){A.canIntercept&&A.info==="react-transition"&&A.intercept({handler:function(){return new Promise(function(W){return q=W})},focusReset:"manual",scroll:"manual"})}function v(){q!==null&&(q(),q=null),H||setTimeout(r,20)}function r(){if(!H&&!navigation.transition){var A=navigation.currentEntry;A&&A.url!=null&&navigation.navigate(A.url,{state:A.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var H=!1,q=null;return navigation.addEventListener("navigate",g),navigation.addEventListener("navigatesuccess",v),navigation.addEventListener("navigateerror",v),setTimeout(r,100),function(){H=!0,navigation.removeEventListener("navigate",g),navigation.removeEventListener("navigatesuccess",v),navigation.removeEventListener("navigateerror",v),q!==null&&(q(),q=null)}}}function Ib(g){this._internalRoot=g}function x2(g){this._internalRoot=g}function O7(g){g[kw]&&(g._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var yg=Object.assign,OL=Symbol.for("react.element"),hr=Symbol.for("react.transitional.element"),n4=Symbol.for("react.portal"),e4=Symbol.for("react.fragment"),D2=Symbol.for("react.strict_mode"),Nb=Symbol.for("react.profiler"),Zb=Symbol.for("react.consumer"),Jr=Symbol.for("react.context"),B8=Symbol.for("react.forward_ref"),ub=Symbol.for("react.suspense"),Tb=Symbol.for("react.suspense_list"),m2=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),Cb=Symbol.for("react.activity"),qL=Symbol.for("react.memo_cache_sentinel"),q7=Symbol.iterator,AL=Symbol.for("react.client.reference"),a0=Array.isArray,D=u6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H0=wM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,PL=Object.freeze({pending:!1,data:null,method:null,action:null}),Sb=[],lb=[],ir=-1,xw=Bg(null),I8=Bg(null),Dw=Bg(null),k2=Bg(null),N8=0,A7,P7,b7,W7,M7,X7,Y7;S.__reactDisabledLog=!0;var ob,G7,xb=!1,Db=new(typeof WeakMap==="function"?WeakMap:Map),Hv=null,Qr=!1,Dv=Object.prototype.hasOwnProperty,mb=v0.unstable_scheduleCallback,bL=v0.unstable_cancelCallback,WL=v0.unstable_shouldYield,ML=v0.unstable_requestPaint,w1=v0.unstable_now,XL=v0.unstable_getCurrentPriorityLevel,kb=v0.unstable_ImmediatePriority,Vb=v0.unstable_UserBlockingPriority,c4=v0.unstable_NormalPriority,YL=v0.unstable_LowPriority,Eb=v0.unstable_IdlePriority,GL=v0.log,RL=v0.unstable_setDisableYieldValue,t4=null,$1=null,Kr=!1,$r=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",F1=Math.clz32?Math.clz32:IO,hL=Math.log,JL=Math.LN2,V2=256,E2=262144,_2=4194304,Ov=2,mv=8,zr=32,y2=268435456,mw=Math.random().toString(36).slice(2),Y1="__reactFiber$"+mw,B1="__reactProps$"+mw,kw="__reactContainer$"+mw,_b="__reactEvents$"+mw,QL="__reactListeners$"+mw,KL="__reactHandles$"+mw,R7="__reactResources$"+mw,Z8="__reactMarker$"+mw,h7=new Set,y5={},yb={},$L={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},zL=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),J7={},Q7={},UL=/[\n"\\]/g,K7=!1,$7=!1,z7=!1,U7=!1,L7=!1,F7=!1,B7=["value","defaultValue"],I7=!1,N7=/["'&<>\n\t]|^\s|\s$/,LL="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),Z7="applet caption html table td th marquee object template foreignObject desc title".split(" "),FL=Z7.concat(["button"]),BL="dd dt li option optgroup p rp rt".split(" "),u7={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},j2={},jb={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},T7=/([A-Z])/g,C7=/^ms-/,IL=/^(?:webkit|moz|o)[A-Z]/,NL=/^-ms-/,ZL=/-(.)/g,S7=/;\s*$/,p4={},ib={},l7=!1,o7=!1,x7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),i2="http://www.w3.org/1998/Math/MathML",d4="http://www.w3.org/2000/svg",uL=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f2={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},D7={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},a4={},TL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),CL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m7=!1,I1={},k7=/^on./,SL=/^on[^A-Z]/,lL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xL=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,u8=null,s4=null,g6=null,fb=!1,Ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nb=!1;if(Ur)try{var T8={};Object.defineProperty(T8,"passive",{get:function(){nb=!0}}),window.addEventListener("test",T8,T8),window.removeEventListener("test",T8,T8)}catch(g){nb=!1}var Vw=null,eb=null,n2=null,j5={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(g){return g.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},e2=V1(j5),C8=yg({},j5,{view:0,detail:0}),DL=V1(C8),cb,tb,S8,c2=yg({},C8,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:CA,button:0,buttons:0,relatedTarget:function(g){return g.relatedTarget===void 0?g.fromElement===g.srcElement?g.toElement:g.fromElement:g.relatedTarget},movementX:function(g){if("movementX"in g)return g.movementX;return g!==S8&&(S8&&g.type==="mousemove"?(cb=g.screenX-S8.screenX,tb=g.screenY-S8.screenY):tb=cb=0,S8=g),cb},movementY:function(g){return"movementY"in g?g.movementY:tb}}),V7=V1(c2),mL=yg({},c2,{dataTransfer:0}),kL=V1(mL),VL=yg({},C8,{relatedTarget:0}),pb=V1(VL),EL=yg({},j5,{animationName:0,elapsedTime:0,pseudoElement:0}),_L=V1(EL),yL=yg({},j5,{clipboardData:function(g){return"clipboardData"in g?g.clipboardData:window.clipboardData}}),jL=V1(yL),iL=yg({},j5,{data:0}),E7=V1(iL),fL=E7,nL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},tL=yg({},C8,{key:function(g){if(g.key){var v=nL[g.key]||g.key;if(v!=="Unidentified")return v}return g.type==="keypress"?(g=lO(g),g===13?"Enter":String.fromCharCode(g)):g.type==="keydown"||g.type==="keyup"?eL[g.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:CA,charCode:function(g){return g.type==="keypress"?lO(g):0},keyCode:function(g){return g.type==="keydown"||g.type==="keyup"?g.keyCode:0},which:function(g){return g.type==="keypress"?lO(g):g.type==="keydown"||g.type==="keyup"?g.keyCode:0}}),pL=V1(tL),dL=yg({},c2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_7=V1(dL),aL=yg({},C8,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:CA}),sL=V1(aL),gF=yg({},j5,{propertyName:0,elapsedTime:0,pseudoElement:0}),vF=V1(gF),rF=yg({},c2,{deltaX:function(g){return"deltaX"in g?g.deltaX:("wheelDeltaX"in g)?-g.wheelDeltaX:0},deltaY:function(g){return"deltaY"in g?g.deltaY:("wheelDeltaY"in g)?-g.wheelDeltaY:("wheelDelta"in g)?-g.wheelDelta:0},deltaZ:0,deltaMode:0}),wF=V1(rF),HF=yg({},j5,{newState:0,oldState:0}),OF=V1(HF),qF=[9,13,27,32],y7=229,db=Ur&&"CompositionEvent"in window,l8=null;Ur&&"documentMode"in document&&(l8=document.documentMode);var AF=Ur&&"TextEvent"in window&&!l8,j7=Ur&&(!db||l8&&8<l8&&11>=l8),i7=32,f7=String.fromCharCode(i7),n7=!1,v6=!1,PF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},o8=null,x8=null,e7=!1;Ur&&(e7=uz("input")&&(!document.documentMode||9<document.documentMode));var N1=typeof Object.is==="function"?Object.is:xz,bF=Ur&&"documentMode"in document&&11>=document.documentMode,r6=null,ab=null,D8=null,sb=!1,w6={animationend:Z5("Animation","AnimationEnd"),animationiteration:Z5("Animation","AnimationIteration"),animationstart:Z5("Animation","AnimationStart"),transitionrun:Z5("Transition","TransitionRun"),transitionstart:Z5("Transition","TransitionStart"),transitioncancel:Z5("Transition","TransitionCancel"),transitionend:Z5("Transition","TransitionEnd")},gW={},c7={};Ur&&(c7=document.createElement("div").style,("AnimationEvent"in window)||(delete w6.animationend.animation,delete w6.animationiteration.animation,delete w6.animationstart.animation),("TransitionEvent"in window)||delete w6.transitionend.transition);var t7=u5("animationend"),p7=u5("animationiteration"),d7=u5("animationstart"),WF=u5("transitionrun"),MF=u5("transitionstart"),XF=u5("transitioncancel"),a7=u5("transitionend"),s7=new Map,vW="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vW.push("scrollEnd");var gR=0;if(typeof performance==="object"&&typeof performance.now==="function")var YF=performance,vR=function(){return YF.now()};else{var GF=Date;vR=function(){return GF.now()}}var rW=typeof reportError==="function"?reportError:function(g){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g==="object"&&g!==null&&typeof g.message==="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(v))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",g);return}console.error(g)},RF="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",t2=0,wW=1,HW=2,OW=3,p2="– ",d2="+ ",rR="  ",Q0=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",$v="Components ⚛",jg="Scheduler ⚛",ig="Blocking",Ew=!1,fr={color:"primary",properties:null,tooltipText:"",track:$v},_w={start:-0,end:-0,detail:{devtools:fr}},hF=["Changed Props",""],wR="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",JF=["Changed Props",wR],m8=1,nr=2,zv=[],H6=0,qW=0,yw={};Object.freeze(yw);var Uv=null,O6=null,Ig=0,QF=1,xg=2,z1=8,kv=16,KF=32,HR=!1;try{var OR=Object.preventExtensions({})}catch(g){HR=!0}var AW=new WeakMap,q6=[],A6=0,a2=null,k8=0,Lv=[],Fv=0,i5=null,er=1,cr="",G1=null,K0=null,eg=!1,Lr=!1,qv=null,jw=null,Bv=!1,PW=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),bW=Bg(null),WW=Bg(null),qR={},s2=null,P6=null,b6=!1,$F=typeof AbortController<"u"?AbortController:function(){var g=[],v=this.signal={aborted:!1,addEventListener:function(r,H){g.push(H)}};this.abort=function(){v.aborted=!0,g.forEach(function(r){return r()})}},zF=v0.unstable_scheduleCallback,UF=v0.unstable_NormalPriority,i0={$$typeof:Jr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},f0=v0.unstable_now,gq=console.createTask?console.createTask:function(){return null},V8=1,vq=2,H1=-0,iw=-0,tr=-0,pr=null,Z1=-1.1,f5=-0,B0=-0,Ug=-1.1,Fg=-1.1,L0=null,u0=!1,fw=-0,Fr=-1.1,E8=null,nw=0,MW=null,XW=null,n5=-1.1,_8=null,W6=-1.1,rq=-1.1,Br=-0,dr=-1.1,Iv=-1.1,YW=0,y8=null,AR=null,PR=null,ew=-1.1,e5=null,cw=-1.1,wq=-1.1,bR=-0,WR=-0,Hq=0,ar=null,MR=0,j8=-1.1,Oq=!1,qq=!1,i8=null,GW=0,c5=0,M6=null,XR=D.S;D.S=function(g,v){if(Ah=w1(),typeof v==="object"&&v!==null&&typeof v.then==="function"){if(0>dr&&0>Iv){dr=f0();var r=$8(),H=K8();if(r!==cw||H!==e5)cw=-1.1;ew=r,e5=H}yz(g,v)}XR!==null&&XR(g,v)};var t5=Bg(null),Vv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},f8=[],n8=[],e8=[],c8=[],t8=[],p8=[],p5=new Set;Vv.recordUnsafeLifecycleWarnings=function(g,v){p5.has(g.type)||(typeof v.componentWillMount==="function"&&v.componentWillMount.__suppressDeprecationWarning!==!0&&f8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillMount==="function"&&n8.push(g),typeof v.componentWillReceiveProps==="function"&&v.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&e8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillReceiveProps==="function"&&c8.push(g),typeof v.componentWillUpdate==="function"&&v.componentWillUpdate.__suppressDeprecationWarning!==!0&&t8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillUpdate==="function"&&p8.push(g))},Vv.flushPendingUnsafeLifecycleWarnings=function(){var g=new Set;0<f8.length&&(f8.forEach(function(X){g.add(m(X)||"Component"),p5.add(X.type)}),f8=[]);var v=new Set;0<n8.length&&(n8.forEach(function(X){v.add(m(X)||"Component"),p5.add(X.type)}),n8=[]);var r=new Set;0<e8.length&&(e8.forEach(function(X){r.add(m(X)||"Component"),p5.add(X.type)}),e8=[]);var H=new Set;0<c8.length&&(c8.forEach(function(X){H.add(m(X)||"Component"),p5.add(X.type)}),c8=[]);var q=new Set;0<t8.length&&(t8.forEach(function(X){q.add(m(X)||"Component"),p5.add(X.type)}),t8=[]);var A=new Set;if(0<p8.length&&(p8.forEach(function(X){A.add(m(X)||"Component"),p5.add(X.type)}),p8=[]),0<v.size){var W=J(v);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,W)}0<H.size&&(W=J(H),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,W)),0<A.size&&(W=J(A),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,W)),0<g.size&&(W=J(g),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W)),0<r.size&&(W=J(r),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W)),0<q.size&&(W=J(q),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W))};var Aq=new Map,YR=new Set;Vv.recordLegacyContextWarning=function(g,v){var r=null;for(var H=g;H!==null;)H.mode&z1&&(r=H),H=H.return;r===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!YR.has(g.type)&&(H=Aq.get(r),g.type.contextTypes!=null||g.type.childContextTypes!=null||v!==null&&typeof v.getChildContext==="function")&&(H===void 0&&(H=[],Aq.set(r,H)),H.push(g))},Vv.flushLegacyContextWarning=function(){Aq.forEach(function(g){if(g.length!==0){var v=g[0],r=new Set;g.forEach(function(q){r.add(m(q)||"Component"),YR.add(q.type)});var H=J(r);Ag(v,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,H)})}})},Vv.discardPendingWarnings=function(){f8=[],n8=[],e8=[],c8=[],t8=[],p8=[],Aq=new Map};var GR={react_stack_bottom_frame:function(g,v,r){var H=Qr;Qr=!0;try{return g(v,r)}finally{Qr=H}}},RW=GR.react_stack_bottom_frame.bind(GR),RR={react_stack_bottom_frame:function(g){var v=Qr;Qr=!0;try{return g.render()}finally{Qr=v}}},hR=RR.react_stack_bottom_frame.bind(RR),JR={react_stack_bottom_frame:function(g,v){try{v.componentDidMount()}catch(r){w0(g,g.return,r)}}},hW=JR.react_stack_bottom_frame.bind(JR),QR={react_stack_bottom_frame:function(g,v,r,H,q){try{v.componentDidUpdate(r,H,q)}catch(A){w0(g,g.return,A)}}},KR=QR.react_stack_bottom_frame.bind(QR),$R={react_stack_bottom_frame:function(g,v){var r=v.stack;g.componentDidCatch(v.value,{componentStack:r!==null?r:""})}},LF=$R.react_stack_bottom_frame.bind($R),zR={react_stack_bottom_frame:function(g,v,r){try{r.componentWillUnmount()}catch(H){w0(g,v,H)}}},UR=zR.react_stack_bottom_frame.bind(zR),LR={react_stack_bottom_frame:function(g){var v=g.create;return g=g.inst,v=v(),g.destroy=v}},FF=LR.react_stack_bottom_frame.bind(LR),FR={react_stack_bottom_frame:function(g,v,r){try{r()}catch(H){w0(g,v,H)}}},BF=FR.react_stack_bottom_frame.bind(FR),BR={react_stack_bottom_frame:function(g){var v=g._init;return v(g._payload)}},IF=BR.react_stack_bottom_frame.bind(BR),X6=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),JW=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Pq=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),bq={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},d5=null,d8=!1,Y6=null,a8=0,Dg=null,QW,IR=QW=!1,NR={},ZR={},uR={};z=function(g,v,r){if(r!==null&&typeof r==="object"&&r._store&&(!r._store.validated&&r.key==null||r._store.validated===2)){if(typeof r._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");r._store.validated=1;var H=m(g),q=H||"null";if(!NR[q]){NR[q]=!0,r=r._owner,g=g._debugOwner;var A="";g&&typeof g.tag==="number"&&(q=m(g))&&(A=`

Check the render method of \``+q+"`."),A||H&&(A=`

Check the top-level render call using <`+H+">.");var W="";r!=null&&g!==r&&(H=null,typeof r.tag==="number"?H=m(r):typeof r.name==="string"&&(H=r.name),H&&(W=" It was passed a child from "+H+".")),Ag(v,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',A,W)})}}};var a5=zX(!0),TR=zX(!1),CR=0,SR=1,lR=2,KW=3,tw=!1,oR=!1,$W=null,zW=!1,G6=Bg(null),Wq=Bg(0),Av=Bg(null),Nv=null,R6=1,s8=2,k0=Bg(0),Mq=0,Zv=1,u1=2,Pv=4,T1=8,h6,xR=new Set,DR=new Set,UW=new Set,mR=new Set,sr=0,Ng=null,Y0=null,n0=null,Xq=!1,J6=!1,s5=!1,Yq=0,gH=0,gw=null,NF=0,ZF=25,x=null,uv=null,vw=-1,vH=!1,rH={readContext:U0,use:Cw,useCallback:x0,useContext:x0,useEffect:x0,useImperativeHandle:x0,useLayoutEffect:x0,useInsertionEffect:x0,useMemo:x0,useReducer:x0,useRef:x0,useState:x0,useDebugValue:x0,useDeferredValue:x0,useTransition:x0,useSyncExternalStore:x0,useId:x0,useHostTransitionStatus:x0,useFormState:x0,useActionState:x0,useOptimistic:x0,useMemoCache:x0,useCacheRefresh:x0};rH.useEffectEvent=x0;var LW=null,kR=null,FW=null,VR=null,Ir=null,Ev=null,Gq=null;LW={readContext:function(g){return U0(g)},use:Cw,useCallback:function(g,v){return x="useCallback",_g(),l4(v),zP(g,v)},useContext:function(g){return x="useContext",_g(),U0(g)},useEffect:function(g,v){return x="useEffect",_g(),l4(v),A2(g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",_g(),l4(r),$P(g,v,r)},useInsertionEffect:function(g,v){x="useInsertionEffect",_g(),l4(v),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",_g(),l4(v),KP(g,v)},useMemo:function(g,v){x="useMemo",_g(),l4(v);var r=D.H;D.H=Ir;try{return UP(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",_g();var H=D.H;D.H=Ir;try{return WP(g,v,r)}finally{D.H=H}},useRef:function(g){return x="useRef",_g(),JP(g)},useState:function(g){x="useState",_g();var v=D.H;D.H=Ir;try{return GP(g)}finally{D.H=v}},useDebugValue:function(){x="useDebugValue",_g()},useDeferredValue:function(g,v){return x="useDeferredValue",_g(),LP(g,v)},useTransition:function(){return x="useTransition",_g(),IP()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",_g(),XP(g,v,r)},useId:function(){return x="useId",_g(),NP()},useFormState:function(g,v){return x="useFormState",_g(),r2(),x4(g,v)},useActionState:function(g,v){return x="useActionState",_g(),x4(g,v)},useOptimistic:function(g){return x="useOptimistic",_g(),RP(g)},useHostTransitionStatus:k5,useMemoCache:D5,useCacheRefresh:function(){return x="useCacheRefresh",_g(),ZP()},useEffectEvent:function(g){return x="useEffectEvent",_g(),QP(g)}},kR={readContext:function(g){return U0(g)},use:Cw,useCallback:function(g,v){return x="useCallback",f(),zP(g,v)},useContext:function(g){return x="useContext",f(),U0(g)},useEffect:function(g,v){return x="useEffect",f(),A2(g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",f(),$P(g,v,r)},useInsertionEffect:function(g,v){x="useInsertionEffect",f(),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",f(),KP(g,v)},useMemo:function(g,v){x="useMemo",f();var r=D.H;D.H=Ir;try{return UP(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",f();var H=D.H;D.H=Ir;try{return WP(g,v,r)}finally{D.H=H}},useRef:function(g){return x="useRef",f(),JP(g)},useState:function(g){x="useState",f();var v=D.H;D.H=Ir;try{return GP(g)}finally{D.H=v}},useDebugValue:function(){x="useDebugValue",f()},useDeferredValue:function(g,v){return x="useDeferredValue",f(),LP(g,v)},useTransition:function(){return x="useTransition",f(),IP()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",f(),XP(g,v,r)},useId:function(){return x="useId",f(),NP()},useActionState:function(g,v){return x="useActionState",f(),x4(g,v)},useFormState:function(g,v){return x="useFormState",f(),r2(),x4(g,v)},useOptimistic:function(g){return x="useOptimistic",f(),RP(g)},useHostTransitionStatus:k5,useMemoCache:D5,useCacheRefresh:function(){return x="useCacheRefresh",f(),ZP()},useEffectEvent:function(g){return x="useEffectEvent",f(),QP(g)}},FW={readContext:function(g){return U0(g)},use:Cw,useCallback:function(g,v){return x="useCallback",f(),W2(g,v)},useContext:function(g){return x="useContext",f(),U0(g)},useEffect:function(g,v){x="useEffect",f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",f(),b2(g,v,r)},useInsertionEffect:function(g,v){return x="useInsertionEffect",f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",f(),E1(4,Pv,g,v)},useMemo:function(g,v){x="useMemo",f();var r=D.H;D.H=Ev;try{return M2(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",f();var H=D.H;D.H=Ev;try{return o4(g,v,r)}finally{D.H=H}},useRef:function(){return x="useRef",f(),q0().memoizedState},useState:function(){x="useState",f();var g=D.H;D.H=Ev;try{return o4(ov)}finally{D.H=g}},useDebugValue:function(){x="useDebugValue",f()},useDeferredValue:function(g,v){return x="useDeferredValue",f(),jX(g,v)},useTransition:function(){return x="useTransition",f(),tX()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",f(),H2(g,v,r)},useId:function(){return x="useId",f(),q0().memoizedState},useFormState:function(g){return x="useFormState",f(),r2(),O2(g)},useActionState:function(g){return x="useActionState",f(),O2(g)},useOptimistic:function(g,v){return x="useOptimistic",f(),lX(g,v)},useHostTransitionStatus:k5,useMemoCache:D5,useCacheRefresh:function(){return x="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",f(),P2(g)}},VR={readContext:function(g){return U0(g)},use:Cw,useCallback:function(g,v){return x="useCallback",f(),W2(g,v)},useContext:function(g){return x="useContext",f(),U0(g)},useEffect:function(g,v){x="useEffect",f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",f(),b2(g,v,r)},useInsertionEffect:function(g,v){return x="useInsertionEffect",f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",f(),E1(4,Pv,g,v)},useMemo:function(g,v){x="useMemo",f();var r=D.H;D.H=Gq;try{return M2(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",f();var H=D.H;D.H=Gq;try{return A8(g,v,r)}finally{D.H=H}},useRef:function(){return x="useRef",f(),q0().memoizedState},useState:function(){x="useState",f();var g=D.H;D.H=Gq;try{return A8(ov)}finally{D.H=g}},useDebugValue:function(){x="useDebugValue",f()},useDeferredValue:function(g,v){return x="useDeferredValue",f(),iX(g,v)},useTransition:function(){return x="useTransition",f(),pX()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",f(),H2(g,v,r)},useId:function(){return x="useId",f(),q0().memoizedState},useFormState:function(g){return x="useFormState",f(),r2(),q2(g)},useActionState:function(g){return x="useActionState",f(),q2(g)},useOptimistic:function(g,v){return x="useOptimistic",f(),xX(g,v)},useHostTransitionStatus:k5,useMemoCache:D5,useCacheRefresh:function(){return x="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",f(),P2(g)}},Ir={readContext:function(g){return $(),U0(g)},use:function(g){return R(),Cw(g)},useCallback:function(g,v){return x="useCallback",R(),_g(),zP(g,v)},useContext:function(g){return x="useContext",R(),_g(),U0(g)},useEffect:function(g,v){return x="useEffect",R(),_g(),A2(g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",R(),_g(),$P(g,v,r)},useInsertionEffect:function(g,v){x="useInsertionEffect",R(),_g(),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",R(),_g(),KP(g,v)},useMemo:function(g,v){x="useMemo",R(),_g();var r=D.H;D.H=Ir;try{return UP(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",R(),_g();var H=D.H;D.H=Ir;try{return WP(g,v,r)}finally{D.H=H}},useRef:function(g){return x="useRef",R(),_g(),JP(g)},useState:function(g){x="useState",R(),_g();var v=D.H;D.H=Ir;try{return GP(g)}finally{D.H=v}},useDebugValue:function(){x="useDebugValue",R(),_g()},useDeferredValue:function(g,v){return x="useDeferredValue",R(),_g(),LP(g,v)},useTransition:function(){return x="useTransition",R(),_g(),IP()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",R(),_g(),XP(g,v,r)},useId:function(){return x="useId",R(),_g(),NP()},useFormState:function(g,v){return x="useFormState",R(),_g(),x4(g,v)},useActionState:function(g,v){return x="useActionState",R(),_g(),x4(g,v)},useOptimistic:function(g){return x="useOptimistic",R(),_g(),RP(g)},useMemoCache:function(g){return R(),D5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",_g(),ZP()},useEffectEvent:function(g){return x="useEffectEvent",R(),_g(),QP(g)}},Ev={readContext:function(g){return $(),U0(g)},use:function(g){return R(),Cw(g)},useCallback:function(g,v){return x="useCallback",R(),f(),W2(g,v)},useContext:function(g){return x="useContext",R(),f(),U0(g)},useEffect:function(g,v){x="useEffect",R(),f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",R(),f(),b2(g,v,r)},useInsertionEffect:function(g,v){return x="useInsertionEffect",R(),f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",R(),f(),E1(4,Pv,g,v)},useMemo:function(g,v){x="useMemo",R(),f();var r=D.H;D.H=Ev;try{return M2(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",R(),f();var H=D.H;D.H=Ev;try{return o4(g,v,r)}finally{D.H=H}},useRef:function(){return x="useRef",R(),f(),q0().memoizedState},useState:function(){x="useState",R(),f();var g=D.H;D.H=Ev;try{return o4(ov)}finally{D.H=g}},useDebugValue:function(){x="useDebugValue",R(),f()},useDeferredValue:function(g,v){return x="useDeferredValue",R(),f(),jX(g,v)},useTransition:function(){return x="useTransition",R(),f(),tX()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",R(),f(),H2(g,v,r)},useId:function(){return x="useId",R(),f(),q0().memoizedState},useFormState:function(g){return x="useFormState",R(),f(),O2(g)},useActionState:function(g){return x="useActionState",R(),f(),O2(g)},useOptimistic:function(g,v){return x="useOptimistic",R(),f(),lX(g,v)},useMemoCache:function(g){return R(),D5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",R(),f(),P2(g)}},Gq={readContext:function(g){return $(),U0(g)},use:function(g){return R(),Cw(g)},useCallback:function(g,v){return x="useCallback",R(),f(),W2(g,v)},useContext:function(g){return x="useContext",R(),f(),U0(g)},useEffect:function(g,v){x="useEffect",R(),f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,r){return x="useImperativeHandle",R(),f(),b2(g,v,r)},useInsertionEffect:function(g,v){return x="useInsertionEffect",R(),f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return x="useLayoutEffect",R(),f(),E1(4,Pv,g,v)},useMemo:function(g,v){x="useMemo",R(),f();var r=D.H;D.H=Ev;try{return M2(g,v)}finally{D.H=r}},useReducer:function(g,v,r){x="useReducer",R(),f();var H=D.H;D.H=Ev;try{return A8(g,v,r)}finally{D.H=H}},useRef:function(){return x="useRef",R(),f(),q0().memoizedState},useState:function(){x="useState",R(),f();var g=D.H;D.H=Ev;try{return A8(ov)}finally{D.H=g}},useDebugValue:function(){x="useDebugValue",R(),f()},useDeferredValue:function(g,v){return x="useDeferredValue",R(),f(),iX(g,v)},useTransition:function(){return x="useTransition",R(),f(),pX()},useSyncExternalStore:function(g,v,r){return x="useSyncExternalStore",R(),f(),H2(g,v,r)},useId:function(){return x="useId",R(),f(),q0().memoizedState},useFormState:function(g){return x="useFormState",R(),f(),q2(g)},useActionState:function(g){return x="useActionState",R(),f(),q2(g)},useOptimistic:function(g,v){return x="useOptimistic",R(),f(),xX(g,v)},useMemoCache:function(g){return R(),D5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",R(),f(),P2(g)}};var ER={},_R=new Set,yR=new Set,jR=new Set,iR=new Set,fR=new Set,nR=new Set,eR=new Set,cR=new Set,tR=new Set,pR=new Set;Object.freeze(ER);var BW={enqueueSetState:function(g,v,r){g=g._reactInternals;var H=vv(g),q=Nw(H);q.payload=v,r!==void 0&&r!==null&&(TP(r),q.callback=r),v=Zw(g,q,H),v!==null&&(wr(H,"this.setState()",g),Z0(v,g,H),w8(v,g,H))},enqueueReplaceState:function(g,v,r){g=g._reactInternals;var H=vv(g),q=Nw(H);q.tag=SR,q.payload=v,r!==void 0&&r!==null&&(TP(r),q.callback=r),v=Zw(g,q,H),v!==null&&(wr(H,"this.replaceState()",g),Z0(v,g,H),w8(v,g,H))},enqueueForceUpdate:function(g,v){g=g._reactInternals;var r=vv(g),H=Nw(r);H.tag=lR,v!==void 0&&v!==null&&(TP(v),H.callback=v),v=Zw(g,H,r),v!==null&&(wr(r,"this.forceUpdate()",g),Z0(v,g,r),w8(v,g,r))}},Q6=null,IW=null,NW=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),e0=!1,dR={},aR={},sR={},gh={},K6=!1,vh={},Rq={},ZW={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},rh=!1,wh=null;wh=new Set;var rw=!1,c0=!1,uW=!1,Hh=typeof WeakSet==="function"?WeakSet:Set,O1=null,$6=null,z6=null,t0=null,j1=!1,_v=null,s0=!1,wH=8192,uF={getCacheForType:function(g){var v=U0(i0),r=v.data.get(g);return r===void 0&&(r=g(),v.data.set(g,r)),r},cacheSignal:function(){return U0(i0).controller.signal},getOwner:function(){return Hv}};if(typeof Symbol==="function"&&Symbol.for){var HH=Symbol.for;HH("selector.component"),HH("selector.has_pseudo_class"),HH("selector.role"),HH("selector.test_id"),HH("selector.text")}var TF=[],CF=typeof WeakMap==="function"?WeakMap:Map,q1=0,g1=2,bv=4,ww=0,OH=1,g4=2,hq=3,pw=4,Jq=6,Oh=5,ag=q1,G0=null,Eg=null,mg=0,i1=0,Qq=1,v4=2,qH=3,qh=4,TW=5,AH=6,Kq=7,CW=8,r4=9,A0=i1,Wv=null,dw=!1,U6=!1,SW=!1,Nr=0,I0=ww,aw=0,sw=0,lW=0,f1=0,w4=0,PH=null,C1=null,$q=!1,zq=0,Ah=0,Ph=300,Uq=1/0,bh=500,bH=null,D0=null,g5=null,Lq=0,oW=1,xW=2,Wh=3,v5=0,Mh=1,Xh=2,Yh=3,Gh=4,Fq=5,p0=0,r5=null,L6=null,yv=0,DW=0,mW=-0,kW=null,Rh=null,hh=null,jv=Lq,Jh=null,SF=50,WH=0,VW=null,EW=!1,Bq=!1,lF=50,H4=0,MH=null,F6=!1,Iq=null,Qh=!1,Kh=new Set,oF={},Nq=null,B6=null,_W=!1,yW=!1,Zq=!1,jW=!1,w5=0,iW={};(function(){for(var g=0;g<vW.length;g++){var v=vW[g],r=v.toLowerCase();v=v[0].toUpperCase()+v.slice(1),lv(r,"on"+v)}lv(t7,"onAnimationEnd"),lv(p7,"onAnimationIteration"),lv(d7,"onAnimationStart"),lv("dblclick","onDoubleClick"),lv("focusin","onFocus"),lv("focusout","onBlur"),lv(WF,"onTransitionRun"),lv(MF,"onTransitionStart"),lv(XF,"onTransitionCancel"),lv(a7,"onTransitionEnd")})(),c1("onMouseEnter",["mouseout","mouseover"]),c1("onMouseLeave",["mouseout","mouseover"]),c1("onPointerEnter",["pointerout","pointerover"]),c1("onPointerLeave",["pointerout","pointerover"]),Q1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q1("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var XH="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fW=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(XH)),uq="_reactListening"+Math.random().toString(36).slice(2),$h=!1,zh=!1,Tq=!1,Uh=!1,Cq=!1,Sq=!1,Lh=!1,lq={},xF=/\r\n?/g,DF=/\u0000|\uFFFD/g,O4="http://www.w3.org/1999/xlink",nW="http://www.w3.org/XML/1998/namespace",mF="javascript:throw new Error('React form unexpectedly submitted.')",kF="suppressHydrationWarning",q4="&",oq="/&",YH="$",GH="/$",H5="$?",A4="$~",I6="$!",VF="html",EF="body",_F="head",eW="F!",Fh="F",Bh="loading",yF="style",Hw=0,N6=1,xq=2,cW=null,tW=null,Ih={dialog:!0,webview:!0},pW=null,RH=void 0,Nh=typeof setTimeout==="function"?setTimeout:void 0,jF=typeof clearTimeout==="function"?clearTimeout:void 0,P4=-1,Zh=typeof Promise==="function"?Promise:void 0,iF=typeof queueMicrotask==="function"?queueMicrotask:typeof Zh<"u"?function(g){return Zh.resolve(null).then(g).catch(ZU)}:Nh,dW=null,b4=0,hH=1,uh=2,Th=3,Tv=4,Cv=new Map,Ch=new Set,Ow=H0.d;H0.d={f:function(){var g=Ow.f(),v=E4();return g||v},r:function(g){var v=Tg(g);v!==null&&v.tag===5&&v.type==="form"?cX(v):Ow.r(g)},D:function(g){Ow.D(g),_G("dns-prefetch",g,null)},C:function(g,v){Ow.C(g,v),_G("preconnect",g,v)},L:function(g,v,r){Ow.L(g,v,r);var H=Z6;if(H&&g&&v){var q='link[rel="preload"][as="'+Qv(v)+'"]';v==="image"?r&&r.imageSrcSet?(q+='[imagesrcset="'+Qv(r.imageSrcSet)+'"]',typeof r.imageSizes==="string"&&(q+='[imagesizes="'+Qv(r.imageSizes)+'"]')):q+='[href="'+Qv(g)+'"]':q+='[href="'+Qv(g)+'"]';var A=q;switch(v){case"style":A=j4(g);break;case"script":A=i4(g)}Cv.has(A)||(g=yg({rel:"preload",href:v==="image"&&r&&r.imageSrcSet?void 0:g,as:v},r),Cv.set(A,g),H.querySelector(q)!==null||v==="style"&&H.querySelector(U8(A))||v==="script"&&H.querySelector(L8(A))||(v=H.createElement("link"),X1(v,"link",g),zg(v),H.head.appendChild(v)))}},m:function(g,v){Ow.m(g,v);var r=Z6;if(r&&g){var H=v&&typeof v.as==="string"?v.as:"script",q='link[rel="modulepreload"][as="'+Qv(H)+'"][href="'+Qv(g)+'"]',A=q;switch(H){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":A=i4(g)}if(!Cv.has(A)&&(g=yg({rel:"modulepreload",href:g},v),Cv.set(A,g),r.querySelector(q)===null)){switch(H){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(L8(A)))return}H=r.createElement("link"),X1(H,"link",g),zg(H),r.head.appendChild(H)}}},X:function(g,v){Ow.X(g,v);var r=Z6;if(r&&g){var H=g0(r).hoistableScripts,q=i4(g),A=H.get(q);A||(A=r.querySelector(L8(q)),A||(g=yg({src:g,async:!0},v),(v=Cv.get(q))&&$b(g,v),A=r.createElement("script"),zg(A),X1(A,"link",g),r.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},H.set(q,A))}},S:function(g,v,r){Ow.S(g,v,r);var H=Z6;if(H&&g){var q=g0(H).hoistableStyles,A=j4(g);v=v||"default";var W=q.get(A);if(!W){var X={loading:b4,preload:null};if(W=H.querySelector(U8(A)))X.loading=hH|Tv;else{g=yg({rel:"stylesheet",href:g,"data-precedence":v},r),(r=Cv.get(A))&&Kb(g,r);var h=W=H.createElement("link");zg(h),X1(h,"link",g),h._p=new Promise(function(Q,u){h.onload=Q,h.onerror=u}),h.addEventListener("load",function(){X.loading|=hH}),h.addEventListener("error",function(){X.loading|=uh}),X.loading|=Tv,T2(W,v,H)}W={type:"stylesheet",instance:W,count:1,state:X},q.set(A,W)}}},M:function(g,v){Ow.M(g,v);var r=Z6;if(r&&g){var H=g0(r).hoistableScripts,q=i4(g),A=H.get(q);A||(A=r.querySelector(L8(q)),A||(g=yg({src:g,async:!0,type:"module"},v),(v=Cv.get(q))&&$b(g,v),A=r.createElement("script"),zg(A),X1(A,"link",g),r.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},H.set(q,A))}}};var Z6=typeof document>"u"?null:document,Dq=null,fF=60000,nF=800,eF=500,aW=0,sW=null,mq=null,W4=PL,JH={$$typeof:Jr,Provider:null,Consumer:null,_currentValue:W4,_currentValue2:W4,_threadCount:0},Sh="%c%s%c",lh="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",oh="",kq=" ",cF=Function.prototype.bind,xh=!1,Dh=null,mh=null,kh=null,Vh=null,Eh=null,_h=null,yh=null,jh=null,ih=null,fh=null;Dh=function(g,v,r,H){v=w(g,v),v!==null&&(r=O(v.memoizedState,r,0,H),v.memoizedState=r,v.baseState=r,g.memoizedProps=yg({},g.memoizedProps),r=K1(g,2),r!==null&&Z0(r,g,2))},mh=function(g,v,r){v=w(g,v),v!==null&&(r=M(v.memoizedState,r,0),v.memoizedState=r,v.baseState=r,g.memoizedProps=yg({},g.memoizedProps),r=K1(g,2),r!==null&&Z0(r,g,2))},kh=function(g,v,r,H){v=w(g,v),v!==null&&(r=P(v.memoizedState,r,H),v.memoizedState=r,v.baseState=r,g.memoizedProps=yg({},g.memoizedProps),r=K1(g,2),r!==null&&Z0(r,g,2))},Vh=function(g,v,r){g.pendingProps=O(g.memoizedProps,v,0,r),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},Eh=function(g,v){g.pendingProps=M(g.memoizedProps,v,0),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},_h=function(g,v,r){g.pendingProps=P(g.memoizedProps,v,r),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},yh=function(g){var v=K1(g,2);v!==null&&Z0(v,g,2)},jh=function(g){var v=I4(),r=K1(g,v);r!==null&&Z0(r,g,v)},ih=function(g){G=g},fh=function(g){Y=g};var Vq=!0,Eq=null,gM=!1,O5=null,q5=null,A5=null,QH=new Map,KH=new Map,P5=[],tF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),_q=null;if(x2.prototype.render=Ib.prototype.render=function(g){var v=this._internalRoot;if(v===null)throw Error("Cannot update an unmounted root.");var r=arguments;typeof r[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):s(r[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof r[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),r=g;var H=v.current,q=vv(H);zb(H,q,r,v,null,null)},x2.prototype.unmount=Ib.prototype.unmount=function(){var g=arguments;if(typeof g[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),g=this._internalRoot,g!==null){this._internalRoot=null;var v=g.containerInfo;(ag&(g1|bv))!==q1&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),zb(g.current,2,null,g,null,null),E4(),v[kw]=null}},x2.prototype.unstable_scheduleHydration=function(g){if(g){var v=C();g={blockedOn:null,target:g,priority:v};for(var r=0;r<P5.length&&v!==0&&v<P5[r].priority;r++);P5.splice(r,0,g),r===0&&v7(g)}},function(){var g=u6.version;if(g!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(g+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),H0.findDOMNode=function(g){var v=g._reactInternals;if(v===void 0){if(typeof g.render==="function")throw Error("Unable to find node on an unmounted component.");throw g=Object.keys(g).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+g)}return g=a(v),g=g!==null?Pg(g):null,g=g===null?null:g.stateNode,g},!function(){var g={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};return g.overrideHookState=Dh,g.overrideHookStateDeletePath=mh,g.overrideHookStateRenamePath=kh,g.overrideProps=Vh,g.overridePropsDeletePath=Eh,g.overridePropsRenamePath=_h,g.scheduleUpdate=yh,g.scheduleRetry=jh,g.setErrorHandler=ih,g.setSuspenseHandler=fh,g.scheduleRefresh=t,g.scheduleRoot=l,g.setRefreshHandler=j,g.getCurrentFiber=gL,B4(g)}()&&Ur&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var nh=window.location.protocol;/^(https?|file):$/.test(nh)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(nh==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}WB.createRoot=function(g,v){if(!s(g))throw Error("Target container is not a DOM element.");O7(g);var r=!1,H="",q=rY,A=wY,W=HY;return v!==null&&v!==void 0&&(v.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof v==="object"&&v!==null&&v.$$typeof===hr&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),v.unstable_strictMode===!0&&(r=!0),v.identifierPrefix!==void 0&&(H=v.identifierPrefix),v.onUncaughtError!==void 0&&(q=v.onUncaughtError),v.onCaughtError!==void 0&&(A=v.onCaughtError),v.onRecoverableError!==void 0&&(W=v.onRecoverableError)),v=cG(g,1,!1,null,null,r,H,null,q,A,W,H7),g[kw]=v.current,Ab(g),new Ib(v)},WB.hydrateRoot=function(g,v,r){if(!s(g))throw Error("Target container is not a DOM element.");O7(g),v===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var H=!1,q="",A=rY,W=wY,X=HY,h=null;return r!==null&&r!==void 0&&(r.unstable_strictMode===!0&&(H=!0),r.identifierPrefix!==void 0&&(q=r.identifierPrefix),r.onUncaughtError!==void 0&&(A=r.onUncaughtError),r.onCaughtError!==void 0&&(W=r.onCaughtError),r.onRecoverableError!==void 0&&(X=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),v=cG(g,1,!0,v,r!=null?r:null,H,q,h,A,W,X,H7),v.context=tG(null),r=v.current,H=vv(r),H=I5(H),q=Nw(H),q.callback=null,Zw(r,q,H),wr(H,"hydrateRoot()",null),r=H,v.current.lanes=r,$w(v,r),Gr(v),g[kw]=v.current,Ab(g),new x2(v)},WB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var ah=M4((XS,dh)=>{dh.exports=ph()});var sg=M4((KI)=>{var K4=Xg(O0());(function(){function w(S){if(S==null)return null;if(typeof S==="function")return S.$$typeof===m?null:S.displayName||S.name||null;if(typeof S==="string")return S;switch(S){case j:return"Fragment";case _:return"Profiler";case s:return"StrictMode";case a:return"Suspense";case Pg:return"SuspenseList";case wg:return"Activity"}if(typeof S==="object")switch(typeof S.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),S.$$typeof){case t:return"Portal";case qg:return S.displayName||"Context";case Mg:return(S._context.displayName||"Context")+".Consumer";case e:var c=S.render;return S=S.displayName,S||(S=c.displayName||c.name||"",S=S!==""?"ForwardRef("+S+")":"ForwardRef"),S;case rg:return c=S.displayName||null,c!==null?c:w(S.type)||"Memo";case d:c=S._payload,S=S._init;try{return w(S(c))}catch(Gg){}}return null}function O(S){return""+S}function P(S){try{O(S);var c=!1}catch(Lg){c=!0}if(c){c=console;var Gg=c.error,Qg=typeof Symbol==="function"&&Symbol.toStringTag&&S[Symbol.toStringTag]||S.constructor.name||"Object";return Gg.call(c,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Qg),O(S)}}function b(S){if(S===j)return"<>";if(typeof S==="object"&&S!==null&&S.$$typeof===d)return"<...>";try{var c=w(S);return c?"<"+c+">":"<...>"}catch(Gg){return"<...>"}}function M(){var S=Bg.A;return S===null?null:S.getOwner()}function Y(){return Error("react-stack-top-frame")}function G(S){if(Jg.call(S,"key")){var c=Object.getOwnPropertyDescriptor(S,"key").get;if(c&&c.isReactWarning)return!1}return S.key!==void 0}function R(S,c){function Gg(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",c))}Gg.isReactWarning=!0,Object.defineProperty(S,"key",{get:Gg,configurable:!0})}function $(){var S=w(this.type);return p[S]||(p[S]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),S=this.props.ref,S!==void 0?S:null}function U(S,c,Gg,Qg,Lg,ng){var dg=Gg.ref;return S={$$typeof:l,type:S,key:c,props:Gg,_owner:Qg},(dg!==void 0?dg:null)!==null?Object.defineProperty(S,"ref",{enumerable:!1,get:$}):Object.defineProperty(S,"ref",{enumerable:!1,value:null}),S._store={},Object.defineProperty(S._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(S,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(S,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Lg}),Object.defineProperty(S,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ng}),Object.freeze&&(Object.freeze(S.props),Object.freeze(S)),S}function z(S,c,Gg,Qg,Lg,ng){var dg=c.children;if(dg!==void 0)if(Qg)if(Kg(dg)){for(Qg=0;Qg<dg.length;Qg++)J(dg[Qg]);Object.freeze&&Object.freeze(dg)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else J(dg);if(Jg.call(c,"key")){dg=w(S);var o0=Object.keys(c).filter(function(J1){return J1!=="key"});Qg=0<o0.length?"{key: someKey, "+o0.join(": ..., ")+": ...}":"{key: someKey}",Wg[dg+Qg]||(o0=0<o0.length?"{"+o0.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Qg,dg,o0,dg),Wg[dg+Qg]=!0)}if(dg=null,Gg!==void 0&&(P(Gg),dg=""+Gg),G(c)&&(P(c.key),dg=""+c.key),"key"in c){Gg={};for(var j0 in c)j0!=="key"&&(Gg[j0]=c[j0])}else Gg=c;return dg&&R(Gg,typeof S==="function"?S.displayName||S.name||"Unknown":S),U(S,dg,Gg,M(),Lg,ng)}function J(S){L(S)?S._store&&(S._store.validated=1):typeof S==="object"&&S!==null&&S.$$typeof===d&&(S._payload.status==="fulfilled"?L(S._payload.value)&&S._payload.value._store&&(S._payload.value._store.validated=1):S._store&&(S._store.validated=1))}function L(S){return typeof S==="object"&&S!==null&&S.$$typeof===l}var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),Mg=Symbol.for("react.consumer"),qg=Symbol.for("react.context"),e=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),Pg=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),wg=Symbol.for("react.activity"),m=Symbol.for("react.client.reference"),Bg=K4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Jg=Object.prototype.hasOwnProperty,Kg=Array.isArray,Vg=console.createTask?console.createTask:function(){return null};K4={react_stack_bottom_frame:function(S){return S()}};var V,p={},vg=K4.react_stack_bottom_frame.bind(K4,Y)(),i=Vg(b(Y)),Wg={};KI.Fragment=j,KI.jsxDEV=function(S,c,Gg,Qg){var Lg=1e4>Bg.recentlyCreatedOwnerStacks++;return z(S,c,Gg,Qg,Lg?Error("react-stack-top-frame"):vg,Lg?Vg(b(S)):i)}})()});var A9=Xg(O0(),1),P9=Xg(ah(),1);var sh=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var gJ=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var vJ=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var rJ=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var wJ=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var HJ=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var OJ=`/* ── Script modal ───────────────────────────────────────────────────────── */\r
.ls-modal-overlay {\r
  position: fixed;\r
  inset: 0;\r
  background: var(--lumiverse-modal-backdrop, rgba(0, 0, 0, 0.6));\r
  z-index: 9999;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 24px;\r
  backdrop-filter: blur(3px);\r
}\r
.ls-modal-card {\r
  /* --lumiverse-gradient-modal is 98% opaque — correct for a portal modal with no parent backing */\r
  background: var(--lumiverse-gradient-modal, linear-gradient(135deg, rgba(35, 30, 48, 0.98), rgba(20, 17, 28, 0.98)));\r
  border: 1px solid var(--lumiverse-border);\r
  border-radius: calc(var(--lumiverse-radius) + 4px);\r
  width: 100%;\r
  max-width: 1100px;\r
  height: min(90vh, 820px);\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);\r
}\r
.ls-modal-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 12px 16px;\r
  border-bottom: 1px solid var(--lumiverse-border);\r
  flex-shrink: 0;\r
}\r
.ls-modal-title {\r
  flex: 1;\r
  font-weight: 600;\r
  font-size: 14px;\r
  display: flex;\r
  align-items: center;\r
  gap: 7px;\r
}\r
.ls-modal-close {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 28px;\r
  height: 28px;\r
  border-radius: 6px;\r
  border: none;\r
  background: transparent;\r
  color: var(--lumiverse-text-muted);\r
  cursor: pointer;\r
  transition: background 0.1s;\r
}\r
.ls-modal-close:hover { background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text); }\r
.ls-modal-body {\r
  flex: 1;\r
  min-height: 0;\r
  display: flex;\r
}\r
.ls-modal-sidebar {\r
  width: 250px;\r
  flex-shrink: 0;\r
  border-right: 1px solid var(--lumiverse-border);\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
}\r
.ls-modal-main {\r
  flex: 1;\r
  min-width: 0;\r
  min-height: 0;\r
  overflow: hidden;\r
  display: flex;\r
  flex-direction: column;\r
}\r

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
  border-color: var(--lumiverse-accent);
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
  outline: 2px solid var(--lumiverse-accent);
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
`;var qJ=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var AJ=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var PJ=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var bJ=sh+gJ+vJ+rJ+wJ+HJ+OJ+qJ+AJ+PJ;var l0=Xg(O0(),1);var fq=Xg(O0(),1);var jq=(...w)=>w.filter((O,P,b)=>{return Boolean(O)&&O.trim()!==""&&b.indexOf(O)===P}).join(" ").trim();var WJ=(w)=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var MJ=(w)=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(O,P,b)=>b?b.toUpperCase():P.toLowerCase());var HM=(w)=>{let O=MJ(w);return O.charAt(0).toUpperCase()+O.slice(1)};var zH=Xg(O0(),1);var iq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var XJ=(w)=>{for(let O in w)if(O.startsWith("aria-")||O==="role"||O==="title")return!0;return!1};var T6=Xg(O0(),1),zB=T6.createContext({});var YJ=()=>T6.useContext(zB);var GJ=zH.forwardRef(({color:w,size:O,strokeWidth:P,absoluteStrokeWidth:b,className:M="",children:Y,iconNode:G,...R},$)=>{let{size:U=24,strokeWidth:z=2,absoluteStrokeWidth:J=!1,color:L="currentColor",className:l=""}=YJ()??{},t=b??J?Number(P??z)*24/Number(O??U):P??z;return zH.createElement("svg",{ref:$,...iq,width:O??U??iq.width,height:O??U??iq.height,stroke:w??L,strokeWidth:t,className:jq("lucide",l,M),...!Y&&!XJ(R)&&{"aria-hidden":"true"},...R},[...G.map(([j,s])=>zH.createElement(j,s)),...Array.isArray(Y)?Y:[Y]])});var y=(w,O)=>{let P=fq.forwardRef(({className:b,...M},Y)=>fq.createElement(GJ,{ref:Y,iconNode:O,className:jq(`lucide-${WJ(HM(w))}`,`lucide-${w}`,b),...M}));return P.displayName=HM(w),P};var UB=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],b5=y("braces",UB);var LB=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],S1=y("code-xml",LB);var FB=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Zr=y("file-code-corner",FB);var BB=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],W5=y("loader-circle",BB);var IB=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],M5=y("triangle-alert",IB);var NB=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],X5=y("user-round",NB);var ZB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],UH=y("activity",ZB);var uB=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],LH=y("arrow-down-to-line",uB);var TB=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],FH=y("arrow-up-to-line",TB);var CB=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],BH=y("blocks",CB);var SB=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Y4=y("book-marked",SB);var lB=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],IH=y("book-open",lB);var oB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],NH=y("calendar",oB);var xB=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ZH=y("check",xB);var DB=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],l1=y("chevron-down",DB);var mB=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],uH=y("chevron-left",mB);var kB=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Aw=y("chevron-right",kB);var VB=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],iv=y("chevron-up",VB);var EB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],TH=y("clock",EB);var _B=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Pw=y("copy",_B);var yB=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],fv=y("database",yB);var jB=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],G4=y("download",jB);var iB=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],CH=y("eye",iB);var fB=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],R4=y("folder-open",fB);var nB=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],SH=y("hash",nB);var eB=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],lH=y("link-2",eB);var cB=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],oH=y("list",cB);var tB=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],xH=y("lock",tB);var pB=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],C6=y("message-square-plus",pB);var dB=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],DH=y("message-square",dB);var aB=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],mH=y("package",aB);var sB=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],h4=y("pencil",sB);var gI=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],kH=y("play",gI);var vI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],VH=y("plus",vI);var rI=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],EH=y("radio",rI);var wI=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],J4=y("refresh-cw",wI);var HI=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],_H=y("search",HI);var OI=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],S6=y("shield-alert",OI);var qI=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],yH=y("shield",qI);var AI=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],jH=y("syringe",AI);var PI=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ur=y("terminal",PI);var bI=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Q4=y("timer",bI);var WI=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],iH=y("toggle-left",WI);var MI=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],fH=y("toggle-right",MI);var XI=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],n1=y("trash-2",XI);var YI=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],nH=y("type",YI);var GI=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],eH=y("upload",GI);var RI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],l6=y("user-plus",RI);var hI=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],cH=y("wrench",hI);var JI=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],bw=y("zap",JI);var QI=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nv=y("x",QI);var nq={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var $A=Xg(O0(),1);var XO=Xg(O0(),1);var T0=Xg(sg(),1),$I={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},RJ=({script:w,selected:O,dot:P,duration:b,onSelect:M,onEdit:Y,sendToBackend:G})=>{let R=(L)=>{L.stopPropagation(),G({type:"update_script",id:w.id,patch:{enabled:!w.enabled}})},$=(L)=>{L.stopPropagation(),G({type:"duplicate_script",id:w.id})},U=(L)=>{if(L.stopPropagation(),!window.confirm(`Delete "${w.name}"?`))return;G({type:"delete_script",id:w.id})},z=(L)=>{L.stopPropagation(),Y()},J=w.bindings?.length??0;return T0.jsxDEV("div",{className:`ls-item${O?" ls-selected":""}${!w.enabled&&w.type!=="library"?" ls-disabled":""}`,onClick:M,children:[T0.jsxDEV("span",{className:$I[P],title:P},void 0,!1,void 0,this),T0.jsxDEV("div",{className:"ls-item-body",children:[T0.jsxDEV("div",{className:"ls-item-name",title:w.name,children:w.name},void 0,!1,void 0,this),T0.jsxDEV("div",{className:"ls-item-meta",children:[w.type!=="library"&&T0.jsxDEV("span",{children:w.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),b!==void 0&&P!=="running"&&T0.jsxDEV("span",{style:{color:P==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[b,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w.type!=="library"&&J>0&&T0.jsxDEV("div",{className:"ls-item-bindings",children:w.bindings.map((L,l)=>T0.jsxDEV("span",{className:"ls-binding-badge",children:[L.type==="character"?T0.jsxDEV(X5,{size:9},void 0,!1,void 0,this):T0.jsxDEV(DH,{size:9},void 0,!1,void 0,this),T0.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:L.displayName},void 0,!1,void 0,this)]},l,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T0.jsxDEV("div",{className:"ls-item-actions",children:[T0.jsxDEV("button",{className:"ls-icon-btn",onClick:z,title:"Edit script",children:T0.jsxDEV(h4,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),w.type!=="library"&&T0.jsxDEV("button",{className:"ls-icon-btn",onClick:R,title:w.enabled?"Disable":"Enable",children:w.enabled?T0.jsxDEV(fH,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):T0.jsxDEV(iH,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),T0.jsxDEV("button",{className:"ls-icon-btn",onClick:$,title:"Duplicate",children:T0.jsxDEV(Pw,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),T0.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:U,title:"Delete",children:T0.jsxDEV(n1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var C0=Uint8Array,Mv=Uint16Array,RM=Int32Array,cq=new C0([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tq=new C0([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bM=new C0([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zJ=function(w,O){var P=new Mv(31);for(var b=0;b<31;++b)P[b]=O+=1<<w[b-1];var M=new RM(P[30]);for(var b=1;b<30;++b)for(var Y=P[b];Y<P[b+1];++Y)M[Y]=Y-P[b]<<5|b;return{b:P,r:M}},UJ=zJ(cq,2),LJ=UJ.b,WM=UJ.r;LJ[28]=258,WM[258]=28;var FJ=zJ(tq,0),zI=FJ.b,hJ=FJ.r,MM=new Mv(32768);for(pg=0;pg<32768;++pg)Tr=(pg&43690)>>1|(pg&21845)<<1,Tr=(Tr&52428)>>2|(Tr&13107)<<2,Tr=(Tr&61680)>>4|(Tr&3855)<<4,MM[pg]=((Tr&65280)>>8|(Tr&255)<<8)>>1;var Tr,pg,Sr=function(w,O,P){var b=w.length,M=0,Y=new Mv(O);for(;M<b;++M)if(w[M])++Y[w[M]-1];var G=new Mv(O);for(M=1;M<O;++M)G[M]=G[M-1]+Y[M-1]<<1;var R;if(P){R=new Mv(1<<O);var $=15-O;for(M=0;M<b;++M)if(w[M]){var U=M<<4|w[M],z=O-w[M],J=G[w[M]-1]++<<z;for(var L=J|(1<<z)-1;J<=L;++J)R[MM[J]>>$]=U}}else{R=new Mv(b);for(M=0;M<b;++M)if(w[M])R[M]=MM[G[w[M]-1]++]>>15-w[M]}return R},Y5=new C0(288);for(pg=0;pg<144;++pg)Y5[pg]=8;var pg;for(pg=144;pg<256;++pg)Y5[pg]=9;var pg;for(pg=256;pg<280;++pg)Y5[pg]=7;var pg;for(pg=280;pg<288;++pg)Y5[pg]=8;var pg,dH=new C0(32);for(pg=0;pg<32;++pg)dH[pg]=5;var pg,UI=Sr(Y5,9,0),LI=Sr(Y5,9,1),FI=Sr(dH,5,0),BI=Sr(dH,5,1),OM=function(w){var O=w[0];for(var P=1;P<w.length;++P)if(w[P]>O)O=w[P];return O},ev=function(w,O,P){var b=O/8|0;return(w[b]|w[b+1]<<8)>>(O&7)&P},qM=function(w,O){var P=O/8|0;return(w[P]|w[P+1]<<8|w[P+2]<<16)>>(O&7)},hM=function(w){return(w+7)/8|0},aH=function(w,O,P){if(O==null||O<0)O=0;if(P==null||P>w.length)P=w.length;return new C0(w.subarray(O,P))};var II=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],o1=function(w,O,P){var b=Error(O||II[w]);if(b.code=w,Error.captureStackTrace)Error.captureStackTrace(b,o1);if(!P)throw b;return b},NI=function(w,O,P,b){var M=w.length,Y=b?b.length:0;if(!M||O.f&&!O.l)return P||new C0(0);var G=!P,R=G||O.i!=2,$=O.i;if(G)P=new C0(M*3);var U=function(Ag){var Rv=P.length;if(Ag>Rv){var k1=new C0(Math.max(Rv*2,Ag));k1.set(P),P=k1}},z=O.f||0,J=O.p||0,L=O.b||0,l=O.l,t=O.d,j=O.m,s=O.n,_=M*8;do{if(!l){z=ev(w,J,1);var Mg=ev(w,J+1,3);if(J+=3,!Mg){var qg=hM(J)+4,e=w[qg-4]|w[qg-3]<<8,a=qg+e;if(a>M){if($)o1(0);break}if(R)U(L+e);P.set(w.subarray(qg,a),L),O.b=L+=e,O.p=J=a*8,O.f=z;continue}else if(Mg==1)l=LI,t=BI,j=9,s=5;else if(Mg==2){var Pg=ev(w,J,31)+257,rg=ev(w,J+10,15)+4,d=Pg+ev(w,J+5,31)+1;J+=14;var wg=new C0(d),m=new C0(19);for(var Bg=0;Bg<rg;++Bg)m[bM[Bg]]=ev(w,J+Bg*3,7);J+=rg*3;var Jg=OM(m),Kg=(1<<Jg)-1,Vg=Sr(m,Jg,1);for(var Bg=0;Bg<d;){var V=Vg[ev(w,J,Kg)];J+=V&15;var qg=V>>4;if(qg<16)wg[Bg++]=qg;else{var p=0,vg=0;if(qg==16)vg=3+ev(w,J,3),J+=2,p=wg[Bg-1];else if(qg==17)vg=3+ev(w,J,7),J+=3;else if(qg==18)vg=11+ev(w,J,127),J+=7;while(vg--)wg[Bg++]=p}}var i=wg.subarray(0,Pg),Wg=wg.subarray(Pg);j=OM(i),s=OM(Wg),l=Sr(i,j,1),t=Sr(Wg,s,1)}else o1(1);if(J>_){if($)o1(0);break}}if(R)U(L+131072);var S=(1<<j)-1,c=(1<<s)-1,Gg=J;for(;;Gg=J){var p=l[qM(w,J)&S],Qg=p>>4;if(J+=p&15,J>_){if($)o1(0);break}if(!p)o1(2);if(Qg<256)P[L++]=Qg;else if(Qg==256){Gg=J,l=null;break}else{var Lg=Qg-254;if(Qg>264){var Bg=Qg-257,ng=cq[Bg];Lg=ev(w,J,(1<<ng)-1)+LJ[Bg],J+=ng}var dg=t[qM(w,J)&c],o0=dg>>4;if(!dg)o1(3);J+=dg&15;var Wg=zI[o0];if(o0>3){var ng=tq[o0];Wg+=qM(w,J)&(1<<ng)-1,J+=ng}if(J>_){if($)o1(0);break}if(R)U(L+131072);var j0=L+Lg;if(L<Wg){var J1=Y-Wg,or=Math.min(Wg,j0);if(J1+L<0)o1(3);for(;L<or;++L)P[L]=b[J1+L]}for(;L<j0;++L)P[L]=P[L-Wg]}}if(O.l=l,O.p=Gg,O.b=L,O.f=z,l)z=1,O.m=j,O.d=t,O.n=s}while(!z);return L!=P.length&&G?aH(P,0,L):P.subarray(0,L)},Ww=function(w,O,P){P<<=O&7;var b=O/8|0;w[b]|=P,w[b+1]|=P>>8},tH=function(w,O,P){P<<=O&7;var b=O/8|0;w[b]|=P,w[b+1]|=P>>8,w[b+2]|=P>>16},AM=function(w,O){var P=[];for(var b=0;b<w.length;++b)if(w[b])P.push({s:b,f:w[b]});var M=P.length,Y=P.slice();if(!M)return{t:IJ,l:0};if(M==1){var G=new C0(P[0].s+1);return G[P[0].s]=1,{t:G,l:1}}P.sort(function(a,Pg){return a.f-Pg.f}),P.push({s:-1,f:25001});var R=P[0],$=P[1],U=0,z=1,J=2;P[0]={s:-1,f:R.f+$.f,l:R,r:$};while(z!=M-1)R=P[P[U].f<P[J].f?U++:J++],$=P[U!=z&&P[U].f<P[J].f?U++:J++],P[z++]={s:-1,f:R.f+$.f,l:R,r:$};var L=Y[0].s;for(var b=1;b<M;++b)if(Y[b].s>L)L=Y[b].s;var l=new Mv(L+1),t=XM(P[z-1],l,0);if(t>O){var b=0,j=0,s=t-O,_=1<<s;Y.sort(function(Pg,rg){return l[rg.s]-l[Pg.s]||Pg.f-rg.f});for(;b<M;++b){var Mg=Y[b].s;if(l[Mg]>O)j+=_-(1<<t-l[Mg]),l[Mg]=O;else break}j>>=s;while(j>0){var qg=Y[b].s;if(l[qg]<O)j-=1<<O-l[qg]++-1;else++b}for(;b>=0&&j;--b){var e=Y[b].s;if(l[e]==O)--l[e],++j}t=O}return{t:new C0(l),l:t}},XM=function(w,O,P){return w.s==-1?Math.max(XM(w.l,O,P+1),XM(w.r,O,P+1)):O[w.s]=P},JJ=function(w){var O=w.length;while(O&&!w[--O]);var P=new Mv(++O),b=0,M=w[0],Y=1,G=function($){P[b++]=$};for(var R=1;R<=O;++R)if(w[R]==M&&R!=O)++Y;else{if(!M&&Y>2){for(;Y>138;Y-=138)G(32754);if(Y>2)G(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){G(M),--Y;for(;Y>6;Y-=6)G(8304);if(Y>2)G(Y-3<<5|8208),Y=0}while(Y--)G(M);Y=1,M=w[R]}return{c:P.subarray(0,b),n:O}},pH=function(w,O){var P=0;for(var b=0;b<O.length;++b)P+=w[b]*O[b];return P},BJ=function(w,O,P){var b=P.length,M=hM(O+2);w[M]=b&255,w[M+1]=b>>8,w[M+2]=w[M]^255,w[M+3]=w[M+1]^255;for(var Y=0;Y<b;++Y)w[M+Y+4]=P[Y];return(M+4+b)*8},QJ=function(w,O,P,b,M,Y,G,R,$,U,z){Ww(O,z++,P),++M[256];var J=AM(M,15),L=J.t,l=J.l,t=AM(Y,15),j=t.t,s=t.l,_=JJ(L),Mg=_.c,qg=_.n,e=JJ(j),a=e.c,Pg=e.n,rg=new Mv(19);for(var d=0;d<Mg.length;++d)++rg[Mg[d]&31];for(var d=0;d<a.length;++d)++rg[a[d]&31];var wg=AM(rg,7),m=wg.t,Bg=wg.l,Jg=19;for(;Jg>4&&!m[bM[Jg-1]];--Jg);var Kg=U+5<<3,Vg=pH(M,Y5)+pH(Y,dH)+G,V=pH(M,L)+pH(Y,j)+G+14+3*Jg+pH(rg,m)+2*rg[16]+3*rg[17]+7*rg[18];if($>=0&&Kg<=Vg&&Kg<=V)return BJ(O,z,w.subarray($,$+U));var p,vg,i,Wg;if(Ww(O,z,1+(V<Vg)),z+=2,V<Vg){p=Sr(L,l,0),vg=L,i=Sr(j,s,0),Wg=j;var S=Sr(m,Bg,0);Ww(O,z,qg-257),Ww(O,z+5,Pg-1),Ww(O,z+10,Jg-4),z+=14;for(var d=0;d<Jg;++d)Ww(O,z+3*d,m[bM[d]]);z+=3*Jg;var c=[Mg,a];for(var Gg=0;Gg<2;++Gg){var Qg=c[Gg];for(var d=0;d<Qg.length;++d){var Lg=Qg[d]&31;if(Ww(O,z,S[Lg]),z+=m[Lg],Lg>15)Ww(O,z,Qg[d]>>5&127),z+=Qg[d]>>12}}}else p=UI,vg=Y5,i=FI,Wg=dH;for(var d=0;d<R;++d){var ng=b[d];if(ng>255){var Lg=ng>>18&31;if(tH(O,z,p[Lg+257]),z+=vg[Lg+257],Lg>7)Ww(O,z,ng>>23&31),z+=cq[Lg];var dg=ng&31;if(tH(O,z,i[dg]),z+=Wg[dg],dg>3)tH(O,z,ng>>5&8191),z+=tq[dg]}else tH(O,z,p[ng]),z+=vg[ng]}return tH(O,z,p[256]),z+vg[256]},ZI=new RM([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),IJ=new C0(0),uI=function(w,O,P,b,M,Y){var G=Y.z||w.length,R=new C0(b+G+5*(1+Math.ceil(G/7000))+M),$=R.subarray(b,R.length-M),U=Y.l,z=(Y.r||0)&7;if(O){if(z)$[0]=Y.r>>3;var J=ZI[O-1],L=J>>13,l=J&8191,t=(1<<P)-1,j=Y.p||new Mv(32768),s=Y.h||new Mv(t+1),_=Math.ceil(P/3),Mg=2*_,qg=function(hv){return(w[hv]^w[hv+1]<<_^w[hv+2]<<Mg)&t},e=new RM(25000),a=new Mv(288),Pg=new Mv(32),rg=0,d=0,wg=Y.i||0,m=0,Bg=Y.w||0,Jg=0;for(;wg+2<G;++wg){var Kg=qg(wg),Vg=wg&32767,V=s[Kg];if(j[Vg]=V,s[Kg]=Vg,Bg<=wg){var p=G-wg;if((rg>7000||m>24576)&&(p>423||!U)){z=QJ(w,$,0,e,a,Pg,d,m,Jg,wg-Jg,z),m=rg=d=0,Jg=wg;for(var vg=0;vg<286;++vg)a[vg]=0;for(var vg=0;vg<30;++vg)Pg[vg]=0}var i=2,Wg=0,S=l,c=Vg-V&32767;if(p>2&&Kg==qg(wg-c)){var Gg=Math.min(L,p)-1,Qg=Math.min(32767,wg),Lg=Math.min(258,p);while(c<=Qg&&--S&&Vg!=V){if(w[wg+i]==w[wg+i-c]){var ng=0;for(;ng<Lg&&w[wg+ng]==w[wg+ng-c];++ng);if(ng>i){if(i=ng,Wg=c,ng>Gg)break;var dg=Math.min(c,ng-2),o0=0;for(var vg=0;vg<dg;++vg){var j0=wg-c+vg&32767,J1=j[j0],or=j0-J1&32767;if(or>o0)o0=or,V=j0}}}Vg=V,V=j[Vg],c+=Vg-V&32767}}if(Wg){e[m++]=268435456|WM[i]<<18|hJ[Wg];var Ag=WM[i]&31,Rv=hJ[Wg]&31;d+=cq[Ag]+tq[Rv],++a[257+Ag],++Pg[Rv],Bg=wg+i,++rg}else e[m++]=w[wg],++a[w[wg]]}}for(wg=Math.max(wg,Bg);wg<G;++wg)e[m++]=w[wg],++a[w[wg]];if(z=QJ(w,$,U,e,a,Pg,d,m,Jg,wg-Jg,z),!U)Y.r=z&7|$[z/8|0]<<3,z-=7,Y.h=s,Y.p=j,Y.i=wg,Y.w=Bg}else{for(var wg=Y.w||0;wg<G+U;wg+=65535){var k1=wg+65535;if(k1>=G)$[z/8|0]=U,k1=G;z=BJ($,z+1,w.subarray(wg,k1))}Y.i=G}return aH(R,0,b+hM(z)+M)},TI=function(){var w=new Int32Array(256);for(var O=0;O<256;++O){var P=O,b=9;while(--b)P=(P&1&&-306674912)^P>>>1;w[O]=P}return w}(),CI=function(){var w=-1;return{p:function(O){var P=w;for(var b=0;b<O.length;++b)P=TI[P&255^O[b]]^P>>>8;w=P},d:function(){return~w}}};var SI=function(w,O,P,b,M){if(!M){if(M={l:1},O.dictionary){var Y=O.dictionary.subarray(-32768),G=new C0(Y.length+w.length);G.set(Y),G.set(w,Y.length),w=G,M.w=Y.length}}return uI(w,O.level==null?6:O.level,O.mem==null?M.l?Math.ceil(Math.max(8,Math.min(13,Math.log(w.length)))*1.5):20:12+O.mem,P,b,M)},NJ=function(w,O){var P={};for(var b in w)P[b]=w[b];for(var b in O)P[b]=O[b];return P};var Cr=function(w,O){return w[O]|w[O+1]<<8},cv=function(w,O){return(w[O]|w[O+1]<<8|w[O+2]<<16|w[O+3]<<24)>>>0},PM=function(w,O){return cv(w,O)+cv(w,O+4)*4294967296},R1=function(w,O,P){for(;P;++O)w[O]=P,P>>>=8};function lI(w,O){return SI(w,O||{},0,0)}function oI(w,O){return NI(w,{i:2},O&&O.out,O&&O.dictionary)}var ZJ=function(w,O,P,b){for(var M in w){var Y=w[M],G=O+M,R=b;if(Array.isArray(Y))R=NJ(b,Y[1]),Y=Y[0];if(Y instanceof C0)P[G]=[Y,R];else P[G+="/"]=[new C0(0),R],ZJ(Y,G,P,b)}},KJ=typeof TextEncoder<"u"&&new TextEncoder,YM=typeof TextDecoder<"u"&&new TextDecoder,xI=0;try{YM.decode(IJ,{stream:!0}),xI=1}catch(w){}var DI=function(w){for(var O="",P=0;;){var b=w[P++],M=(b>127)+(b>223)+(b>239);if(P+M>w.length)return{s:O,r:aH(w,P-1)};if(!M)O+=String.fromCharCode(b);else if(M==3)b=((b&15)<<18|(w[P++]&63)<<12|(w[P++]&63)<<6|w[P++]&63)-65536,O+=String.fromCharCode(55296|b>>10,56320|b&1023);else if(M&1)O+=String.fromCharCode((b&31)<<6|w[P++]&63);else O+=String.fromCharCode((b&15)<<12|(w[P++]&63)<<6|w[P++]&63)}};function eq(w,O){if(O){var P=new C0(w.length);for(var b=0;b<w.length;++b)P[b]=w.charCodeAt(b);return P}if(KJ)return KJ.encode(w);var M=w.length,Y=new C0(w.length+(w.length>>1)),G=0,R=function(z){Y[G++]=z};for(var b=0;b<M;++b){if(G+5>Y.length){var $=new C0(G+8+(M-b<<1));$.set(Y),Y=$}var U=w.charCodeAt(b);if(U<128||O)R(U);else if(U<2048)R(192|U>>6),R(128|U&63);else if(U>55295&&U<57344)U=65536+(U&1047552)|w.charCodeAt(++b)&1023,R(240|U>>18),R(128|U>>12&63),R(128|U>>6&63),R(128|U&63);else R(224|U>>12),R(128|U>>6&63),R(128|U&63)}return aH(Y,0,G)}function JM(w,O){if(O){var P="";for(var b=0;b<w.length;b+=16384)P+=String.fromCharCode.apply(null,w.subarray(b,b+16384));return P}else if(YM)return YM.decode(w);else{var M=DI(w),Y=M.s,P=M.r;if(P.length)o1(8);return Y}}var mI=function(w,O){return O+30+Cr(w,O+26)+Cr(w,O+28)},kI=function(w,O,P){var b=Cr(w,O+28),M=JM(w.subarray(O+46,O+46+b),!(Cr(w,O+8)&2048)),Y=O+46+b,G=cv(w,O+20),R=P&&G==4294967295?VI(w,Y):[G,cv(w,O+24),cv(w,O+42)],$=R[0],U=R[1],z=R[2];return[Cr(w,O+10),$,U,M,Y+Cr(w,O+30)+Cr(w,O+32),z]},VI=function(w,O){for(;Cr(w,O)!=1;O+=4+Cr(w,O+2));return[PM(w,O+12),PM(w,O+4),PM(w,O+20)]},GM=function(w){var O=0;if(w)for(var P in w){var b=w[P].length;if(b>65535)o1(9);O+=b+4}return O},$J=function(w,O,P,b,M,Y,G,R){var $=b.length,U=P.extra,z=R&&R.length,J=GM(U);if(R1(w,O,G!=null?33639248:67324752),O+=4,G!=null)w[O++]=20,w[O++]=P.os;w[O]=20,O+=2,w[O++]=P.flag<<1|(Y<0&&8),w[O++]=M&&8,w[O++]=P.compression&255,w[O++]=P.compression>>8;var L=new Date(P.mtime==null?Date.now():P.mtime),l=L.getFullYear()-1980;if(l<0||l>119)o1(10);if(R1(w,O,l<<25|L.getMonth()+1<<21|L.getDate()<<16|L.getHours()<<11|L.getMinutes()<<5|L.getSeconds()>>1),O+=4,Y!=-1)R1(w,O,P.crc),R1(w,O+4,Y<0?-Y-2:Y),R1(w,O+8,P.size);if(R1(w,O+12,$),R1(w,O+14,J),O+=16,G!=null)R1(w,O,z),R1(w,O+6,P.attrs),R1(w,O+10,G),O+=14;if(w.set(b,O),O+=$,J)for(var t in U){var j=U[t],s=j.length;R1(w,O,+t),R1(w,O+2,s),w.set(j,O+4),O+=4+s}if(z)w.set(R,O),O+=z;return O},EI=function(w,O,P,b,M){R1(w,O,101010256),R1(w,O+8,P),R1(w,O+10,P),R1(w,O+12,b),R1(w,O+16,M)};function uJ(w,O){if(!O)O={};var P={},b=[];ZJ(w,"",P,O);var M=0,Y=0;for(var G in P){var R=P[G],$=R[0],U=R[1],z=U.level==0?0:8,J=eq(G),L=J.length,l=U.comment,t=l&&eq(l),j=t&&t.length,s=GM(U.extra);if(L>65535)o1(11);var _=z?lI($,U):$,Mg=_.length,qg=CI();qg.p($),b.push(NJ(U,{size:$.length,crc:qg.d(),c:_,f:J,m:t,u:L!=G.length||t&&l.length!=j,o:M,compression:z})),M+=30+L+s+Mg,Y+=76+2*(L+s)+(j||0)+Mg}var e=new C0(Y+22),a=M,Pg=Y-M;for(var rg=0;rg<b.length;++rg){var J=b[rg];$J(e,J.o,J,J.f,J.u,J.c.length);var d=30+J.f.length+GM(J.extra);e.set(J.c,J.o+d),$J(e,M,J,J.f,J.u,J.c.length,J.o,J.m),M+=16+d+(J.m?J.m.length:0)}return EI(e,M,b.length,Pg,a),e}function TJ(w,O){var P={},b=w.length-22;for(;cv(w,b)!=101010256;--b)if(!b||w.length-b>65558)o1(13);var M=Cr(w,b+8);if(!M)return{};var Y=cv(w,b+16),G=Y==4294967295||M==65535;if(G){var R=cv(w,b-12);if(G=cv(w,R)==101075792,G)M=cv(w,R+32),Y=cv(w,R+48)}var $=O&&O.filter;for(var U=0;U<M;++U){var z=kI(w,Y,G),J=z[0],L=z[1],l=z[2],t=z[3],j=z[4],s=z[5],_=mI(w,s);if(Y=j,!$||$({name:t,size:L,originalSize:l,compression:J}))if(!J)P[t]=aH(w,_,_+L);else if(J==8)P[t]=oI(w.subarray(_,_+L),{out:new C0(l)});else o1(14,"unknown compression type "+J)}return P}function QM(w){let O=w.map((b)=>({name:b.name,code:b.code,type:b.type,triggers:b.triggers,bindings:b.bindings,folder:b.folder,metadata:b.metadata})),P={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:O};return uJ({"pack.json":eq(JSON.stringify(P,null,2))})}function CJ(w,O){let P=QM(w),b=new Blob([P.buffer],{type:"application/zip"}),M=URL.createObjectURL(b),Y=document.createElement("a");Y.href=M,Y.download=`${O}.lumiscript.zip`,Y.click(),URL.revokeObjectURL(M)}var Rj0=Object.freeze({status:"aborted"});function E(w,O,P){function b(R,$){if(!R._zod)Object.defineProperty(R,"_zod",{value:{def:$,constr:G,traits:new Set},enumerable:!1});if(R._zod.traits.has(w))return;R._zod.traits.add(w),O(R,$);let U=G.prototype,z=Object.keys(U);for(let J=0;J<z.length;J++){let L=z[J];if(!(L in R))R[L]=U[L].bind(R)}}let M=P?.Parent??Object;class Y extends M{}Object.defineProperty(Y,"name",{value:w});function G(R){var $;let U=P?.Parent?new Y:this;b(U,R),($=U._zod).deferred??($.deferred=[]);for(let z of U._zod.deferred)z();return U}return Object.defineProperty(G,"init",{value:b}),Object.defineProperty(G,Symbol.hasInstance,{value:(R)=>{if(P?.Parent&&R instanceof P.Parent)return!0;return R?._zod?.traits?.has(w)}}),Object.defineProperty(G,"name",{value:w}),G}var hj0=Symbol("zod_brand");class Mw extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class sH extends Error{constructor(w){super(`Encountered unidirectional transform during encode: ${w}`);this.name="ZodEncodeError"}}var pq={};function Xw(w){if(w)Object.assign(pq,w);return pq}var W0={};qB(W0,{unwrapMessage:()=>gO,uint8ArrayToHex:()=>YN,uint8ArrayToBase64url:()=>MN,uint8ArrayToBase64:()=>_J,stringifyPrimitive:()=>DJ,slugify:()=>$M,shallowClone:()=>oJ,safeExtend:()=>HN,required:()=>AN,randomString:()=>dI,propertyKeyTypes:()=>UM,promiseAllObject:()=>pI,primitiveTypes:()=>xJ,prefixIssues:()=>OO,pick:()=>vN,partial:()=>qN,parsedType:()=>PN,optionalKeys:()=>LM,omit:()=>rN,objectClone:()=>eI,numKeys:()=>aI,nullish:()=>wO,normalizeParams:()=>kg,mergeDefs:()=>Yw,merge:()=>ON,jsonStringifyReplacer:()=>x6,joinValues:()=>nI,issue:()=>D6,isPlainObject:()=>$4,isObject:()=>o6,hexToUint8Array:()=>XN,getSizableOrigin:()=>VJ,getParsedType:()=>sI,getLengthableOrigin:()=>qO,getEnumValues:()=>vO,getElementAtPath:()=>tI,floatSafeRemainder:()=>lJ,finalizeIssue:()=>lr,extend:()=>wN,escapeRegex:()=>Gw,esc:()=>dq,defineLazy:()=>P0,createTransparentProxy:()=>gN,cloneDef:()=>cI,clone:()=>tv,cleanRegex:()=>HO,cleanEnum:()=>bN,captureStackTrace:()=>aq,cached:()=>rO,base64urlToUint8Array:()=>WN,base64ToUint8Array:()=>EJ,assignProp:()=>G5,assertNotEqual:()=>yI,assertNever:()=>iI,assertIs:()=>jI,assertEqual:()=>_I,assert:()=>fI,allowsEval:()=>zM,aborted:()=>R5,NUMBER_FORMAT_RANGES:()=>mJ,Class:()=>yJ,BIGINT_FORMAT_RANGES:()=>kJ});function _I(w){return w}function yI(w){return w}function jI(w){}function iI(w){throw Error("Unexpected value in exhaustive check")}function fI(w){}function vO(w){let O=Object.values(w).filter((b)=>typeof b==="number");return Object.entries(w).filter(([b,M])=>O.indexOf(+b)===-1).map(([b,M])=>M)}function nI(w,O="|"){return w.map((P)=>DJ(P)).join(O)}function x6(w,O){if(typeof O==="bigint")return O.toString();return O}function rO(w){return{get value(){{let P=w();return Object.defineProperty(this,"value",{value:P}),P}throw Error("cached value already set")}}}function wO(w){return w===null||w===void 0}function HO(w){let O=w.startsWith("^")?1:0,P=w.endsWith("$")?w.length-1:w.length;return w.slice(O,P)}function lJ(w,O){let P=(w.toString().split(".")[1]||"").length,b=O.toString(),M=(b.split(".")[1]||"").length;if(M===0&&/\d?e-\d?/.test(b)){let $=b.match(/\d?e-(\d?)/);if($?.[1])M=Number.parseInt($[1])}let Y=P>M?P:M,G=Number.parseInt(w.toFixed(Y).replace(".","")),R=Number.parseInt(O.toFixed(Y).replace(".",""));return G%R/10**Y}var SJ=Symbol("evaluating");function P0(w,O,P){let b=void 0;Object.defineProperty(w,O,{get(){if(b===SJ)return;if(b===void 0)b=SJ,b=P();return b},set(M){Object.defineProperty(w,O,{value:M})},configurable:!0})}function eI(w){return Object.create(Object.getPrototypeOf(w),Object.getOwnPropertyDescriptors(w))}function G5(w,O,P){Object.defineProperty(w,O,{value:P,writable:!0,enumerable:!0,configurable:!0})}function Yw(...w){let O={};for(let P of w){let b=Object.getOwnPropertyDescriptors(P);Object.assign(O,b)}return Object.defineProperties({},O)}function cI(w){return Yw(w._zod.def)}function tI(w,O){if(!O)return w;return O.reduce((P,b)=>P?.[b],w)}function pI(w){let O=Object.keys(w),P=O.map((b)=>w[b]);return Promise.all(P).then((b)=>{let M={};for(let Y=0;Y<O.length;Y++)M[O[Y]]=b[Y];return M})}function dI(w=10){let P="";for(let b=0;b<w;b++)P+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return P}function dq(w){return JSON.stringify(w)}function $M(w){return w.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var aq="captureStackTrace"in Error?Error.captureStackTrace:(...w)=>{};function o6(w){return typeof w==="object"&&w!==null&&!Array.isArray(w)}var zM=rO(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(w){return!1}});function $4(w){if(o6(w)===!1)return!1;let O=w.constructor;if(O===void 0)return!0;if(typeof O!=="function")return!0;let P=O.prototype;if(o6(P)===!1)return!1;if(Object.prototype.hasOwnProperty.call(P,"isPrototypeOf")===!1)return!1;return!0}function oJ(w){if($4(w))return{...w};if(Array.isArray(w))return[...w];return w}function aI(w){let O=0;for(let P in w)if(Object.prototype.hasOwnProperty.call(w,P))O++;return O}var sI=(w)=>{let O=typeof w;switch(O){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(w)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(w))return"array";if(w===null)return"null";if(w.then&&typeof w.then==="function"&&w.catch&&typeof w.catch==="function")return"promise";if(typeof Map<"u"&&w instanceof Map)return"map";if(typeof Set<"u"&&w instanceof Set)return"set";if(typeof Date<"u"&&w instanceof Date)return"date";if(typeof File<"u"&&w instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${O}`)}},UM=new Set(["string","number","symbol"]),xJ=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Gw(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tv(w,O,P){let b=new w._zod.constr(O??w._zod.def);if(!O||P?.parent)b._zod.parent=w;return b}function kg(w){let O=w;if(!O)return{};if(typeof O==="string")return{error:()=>O};if(O?.message!==void 0){if(O?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");O.error=O.message}if(delete O.message,typeof O.error==="string")return{...O,error:()=>O.error};return O}function gN(w){let O;return new Proxy({},{get(P,b,M){return O??(O=w()),Reflect.get(O,b,M)},set(P,b,M,Y){return O??(O=w()),Reflect.set(O,b,M,Y)},has(P,b){return O??(O=w()),Reflect.has(O,b)},deleteProperty(P,b){return O??(O=w()),Reflect.deleteProperty(O,b)},ownKeys(P){return O??(O=w()),Reflect.ownKeys(O)},getOwnPropertyDescriptor(P,b){return O??(O=w()),Reflect.getOwnPropertyDescriptor(O,b)},defineProperty(P,b,M){return O??(O=w()),Reflect.defineProperty(O,b,M)}})}function DJ(w){if(typeof w==="bigint")return w.toString()+"n";if(typeof w==="string")return`"${w}"`;return`${w}`}function LM(w){return Object.keys(w).filter((O)=>{return w[O]._zod.optin==="optional"&&w[O]._zod.optout==="optional"})}var mJ={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},kJ={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function vN(w,O){let P=w._zod.def,b=P.checks;if(b&&b.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let Y=Yw(w._zod.def,{get shape(){let G={};for(let R in O){if(!(R in P.shape))throw Error(`Unrecognized key: "${R}"`);if(!O[R])continue;G[R]=P.shape[R]}return G5(this,"shape",G),G},checks:[]});return tv(w,Y)}function rN(w,O){let P=w._zod.def,b=P.checks;if(b&&b.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let Y=Yw(w._zod.def,{get shape(){let G={...w._zod.def.shape};for(let R in O){if(!(R in P.shape))throw Error(`Unrecognized key: "${R}"`);if(!O[R])continue;delete G[R]}return G5(this,"shape",G),G},checks:[]});return tv(w,Y)}function wN(w,O){if(!$4(O))throw Error("Invalid input to extend: expected a plain object");let P=w._zod.def.checks;if(P&&P.length>0){let Y=w._zod.def.shape;for(let G in O)if(Object.getOwnPropertyDescriptor(Y,G)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let M=Yw(w._zod.def,{get shape(){let Y={...w._zod.def.shape,...O};return G5(this,"shape",Y),Y}});return tv(w,M)}function HN(w,O){if(!$4(O))throw Error("Invalid input to safeExtend: expected a plain object");let P=Yw(w._zod.def,{get shape(){let b={...w._zod.def.shape,...O};return G5(this,"shape",b),b}});return tv(w,P)}function ON(w,O){let P=Yw(w._zod.def,{get shape(){let b={...w._zod.def.shape,...O._zod.def.shape};return G5(this,"shape",b),b},get catchall(){return O._zod.def.catchall},checks:[]});return tv(w,P)}function qN(w,O,P){let M=O._zod.def.checks;if(M&&M.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let G=Yw(O._zod.def,{get shape(){let R=O._zod.def.shape,$={...R};if(P)for(let U in P){if(!(U in R))throw Error(`Unrecognized key: "${U}"`);if(!P[U])continue;$[U]=w?new w({type:"optional",innerType:R[U]}):R[U]}else for(let U in R)$[U]=w?new w({type:"optional",innerType:R[U]}):R[U];return G5(this,"shape",$),$},checks:[]});return tv(O,G)}function AN(w,O,P){let b=Yw(O._zod.def,{get shape(){let M=O._zod.def.shape,Y={...M};if(P)for(let G in P){if(!(G in Y))throw Error(`Unrecognized key: "${G}"`);if(!P[G])continue;Y[G]=new w({type:"nonoptional",innerType:M[G]})}else for(let G in M)Y[G]=new w({type:"nonoptional",innerType:M[G]});return G5(this,"shape",Y),Y}});return tv(O,b)}function R5(w,O=0){if(w.aborted===!0)return!0;for(let P=O;P<w.issues.length;P++)if(w.issues[P]?.continue!==!0)return!0;return!1}function OO(w,O){return O.map((P)=>{var b;return(b=P).path??(b.path=[]),P.path.unshift(w),P})}function gO(w){return typeof w==="string"?w:w?.message}function lr(w,O,P){let b={...w,path:w.path??[]};if(!w.message){let M=gO(w.inst?._zod.def?.error?.(w))??gO(O?.error?.(w))??gO(P.customError?.(w))??gO(P.localeError?.(w))??"Invalid input";b.message=M}if(delete b.inst,delete b.continue,!O?.reportInput)delete b.input;return b}function VJ(w){if(w instanceof Set)return"set";if(w instanceof Map)return"map";if(w instanceof File)return"file";return"unknown"}function qO(w){if(Array.isArray(w))return"array";if(typeof w==="string")return"string";return"unknown"}function PN(w){let O=typeof w;switch(O){case"number":return Number.isNaN(w)?"nan":"number";case"object":{if(w===null)return"null";if(Array.isArray(w))return"array";let P=w;if(P&&Object.getPrototypeOf(P)!==Object.prototype&&"constructor"in P&&P.constructor)return P.constructor.name}}return O}function D6(...w){let[O,P,b]=w;if(typeof O==="string")return{message:O,code:"custom",input:P,inst:b};return{...O}}function bN(w){return Object.entries(w).filter(([O,P])=>{return Number.isNaN(Number.parseInt(O,10))}).map((O)=>O[1])}function EJ(w){let O=atob(w),P=new Uint8Array(O.length);for(let b=0;b<O.length;b++)P[b]=O.charCodeAt(b);return P}function _J(w){let O="";for(let P=0;P<w.length;P++)O+=String.fromCharCode(w[P]);return btoa(O)}function WN(w){let O=w.replace(/-/g,"+").replace(/_/g,"/"),P="=".repeat((4-O.length%4)%4);return EJ(O+P)}function MN(w){return _J(w).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function XN(w){let O=w.replace(/^0x/,"");if(O.length%2!==0)throw Error("Invalid hex string length");let P=new Uint8Array(O.length/2);for(let b=0;b<O.length;b+=2)P[b/2]=Number.parseInt(O.slice(b,b+2),16);return P}function YN(w){return Array.from(w).map((O)=>O.toString(16).padStart(2,"0")).join("")}class yJ{constructor(...w){}}var jJ=(w,O)=>{w.name="$ZodError",Object.defineProperty(w,"_zod",{value:w._zod,enumerable:!1}),Object.defineProperty(w,"issues",{value:O,enumerable:!1}),w.message=JSON.stringify(O,x6,2),Object.defineProperty(w,"toString",{value:()=>w.message,enumerable:!1})},sq=E("$ZodError",jJ),FM=E("$ZodError",jJ,{Parent:Error});function iJ(w,O=(P)=>P.message){let P={},b=[];for(let M of w.issues)if(M.path.length>0)P[M.path[0]]=P[M.path[0]]||[],P[M.path[0]].push(O(M));else b.push(O(M));return{formErrors:b,fieldErrors:P}}function fJ(w,O=(P)=>P.message){let P={_errors:[]},b=(M)=>{for(let Y of M.issues)if(Y.code==="invalid_union"&&Y.errors.length)Y.errors.map((G)=>b({issues:G}));else if(Y.code==="invalid_key")b({issues:Y.issues});else if(Y.code==="invalid_element")b({issues:Y.issues});else if(Y.path.length===0)P._errors.push(O(Y));else{let G=P,R=0;while(R<Y.path.length){let $=Y.path[R];if(R!==Y.path.length-1)G[$]=G[$]||{_errors:[]};else G[$]=G[$]||{_errors:[]},G[$]._errors.push(O(Y));G=G[$],R++}}};return b(w),P}var gA=(w)=>(O,P,b,M)=>{let Y=b?Object.assign(b,{async:!1}):{async:!1},G=O._zod.run({value:P,issues:[]},Y);if(G instanceof Promise)throw new Mw;if(G.issues.length){let R=new(M?.Err??w)(G.issues.map(($)=>lr($,Y,Xw())));throw aq(R,M?.callee),R}return G.value};var vA=(w)=>async(O,P,b,M)=>{let Y=b?Object.assign(b,{async:!0}):{async:!0},G=O._zod.run({value:P,issues:[]},Y);if(G instanceof Promise)G=await G;if(G.issues.length){let R=new(M?.Err??w)(G.issues.map(($)=>lr($,Y,Xw())));throw aq(R,M?.callee),R}return G.value};var AO=(w)=>(O,P,b)=>{let M=b?{...b,async:!1}:{async:!1},Y=O._zod.run({value:P,issues:[]},M);if(Y instanceof Promise)throw new Mw;return Y.issues.length?{success:!1,error:new(w??sq)(Y.issues.map((G)=>lr(G,M,Xw())))}:{success:!0,data:Y.value}},nJ=AO(FM),PO=(w)=>async(O,P,b)=>{let M=b?Object.assign(b,{async:!0}):{async:!0},Y=O._zod.run({value:P,issues:[]},M);if(Y instanceof Promise)Y=await Y;return Y.issues.length?{success:!1,error:new w(Y.issues.map((G)=>lr(G,M,Xw())))}:{success:!0,data:Y.value}},eJ=PO(FM),cJ=(w)=>(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return gA(w)(O,P,M)};var tJ=(w)=>(O,P,b)=>{return gA(w)(O,P,b)};var pJ=(w)=>async(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return vA(w)(O,P,M)};var dJ=(w)=>async(O,P,b)=>{return vA(w)(O,P,b)};var aJ=(w)=>(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return AO(w)(O,P,M)};var sJ=(w)=>(O,P,b)=>{return AO(w)(O,P,b)};var gQ=(w)=>async(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return PO(w)(O,P,M)};var vQ=(w)=>async(O,P,b)=>{return PO(w)(O,P,b)};var rQ=/^[cC][^\s-]{8,}$/,wQ=/^[0-9a-z]+$/,HQ=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,OQ=/^[0-9a-vA-V]{20}$/,qQ=/^[A-Za-z0-9]{27}$/,AQ=/^[a-zA-Z0-9_-]{21}$/,PQ=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var bQ=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,BM=(w)=>{if(!w)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${w}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var WQ=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var RN="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function MQ(){return new RegExp(RN,"u")}var XQ=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,YQ=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var GQ=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,RQ=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,hQ=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,IM=/^[A-Za-z0-9_-]*$/;var JQ=/^\+[1-9]\d{6,14}$/,QQ="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",KQ=new RegExp(`^${QQ}$`);function $Q(w){return typeof w.precision==="number"?w.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":w.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${w.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function zQ(w){return new RegExp(`^${$Q(w)}$`)}function UQ(w){let O=$Q({precision:w.precision}),P=["Z"];if(w.local)P.push("");if(w.offset)P.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let b=`${O}(?:${P.join("|")})`;return new RegExp(`^${QQ}T(?:${b})$`)}var LQ=(w)=>{let O=w?`[\\s\\S]{${w?.minimum??0},${w?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${O}$`)};var FQ=/^[^A-Z]*$/,BQ=/^[^a-z]*$/;var Xv=E("$ZodCheck",(w,O)=>{var P;w._zod??(w._zod={}),w._zod.def=O,(P=w._zod).onattach??(P.onattach=[])});var IQ=E("$ZodCheckMaxLength",(w,O)=>{var P;Xv.init(w,O),(P=w._zod.def).when??(P.when=(b)=>{let M=b.value;return!wO(M)&&M.length!==void 0}),w._zod.onattach.push((b)=>{let M=b._zod.bag.maximum??Number.POSITIVE_INFINITY;if(O.maximum<M)b._zod.bag.maximum=O.maximum}),w._zod.check=(b)=>{let M=b.value;if(M.length<=O.maximum)return;let G=qO(M);b.issues.push({origin:G,code:"too_big",maximum:O.maximum,inclusive:!0,input:M,inst:w,continue:!O.abort})}}),NQ=E("$ZodCheckMinLength",(w,O)=>{var P;Xv.init(w,O),(P=w._zod.def).when??(P.when=(b)=>{let M=b.value;return!wO(M)&&M.length!==void 0}),w._zod.onattach.push((b)=>{let M=b._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(O.minimum>M)b._zod.bag.minimum=O.minimum}),w._zod.check=(b)=>{let M=b.value;if(M.length>=O.minimum)return;let G=qO(M);b.issues.push({origin:G,code:"too_small",minimum:O.minimum,inclusive:!0,input:M,inst:w,continue:!O.abort})}}),ZQ=E("$ZodCheckLengthEquals",(w,O)=>{var P;Xv.init(w,O),(P=w._zod.def).when??(P.when=(b)=>{let M=b.value;return!wO(M)&&M.length!==void 0}),w._zod.onattach.push((b)=>{let M=b._zod.bag;M.minimum=O.length,M.maximum=O.length,M.length=O.length}),w._zod.check=(b)=>{let M=b.value,Y=M.length;if(Y===O.length)return;let G=qO(M),R=Y>O.length;b.issues.push({origin:G,...R?{code:"too_big",maximum:O.length}:{code:"too_small",minimum:O.length},inclusive:!0,exact:!0,input:b.value,inst:w,continue:!O.abort})}}),bO=E("$ZodCheckStringFormat",(w,O)=>{var P,b;if(Xv.init(w,O),w._zod.onattach.push((M)=>{let Y=M._zod.bag;if(Y.format=O.format,O.pattern)Y.patterns??(Y.patterns=new Set),Y.patterns.add(O.pattern)}),O.pattern)(P=w._zod).check??(P.check=(M)=>{if(O.pattern.lastIndex=0,O.pattern.test(M.value))return;M.issues.push({origin:"string",code:"invalid_format",format:O.format,input:M.value,...O.pattern?{pattern:O.pattern.toString()}:{},inst:w,continue:!O.abort})});else(b=w._zod).check??(b.check=()=>{})}),uQ=E("$ZodCheckRegex",(w,O)=>{bO.init(w,O),w._zod.check=(P)=>{if(O.pattern.lastIndex=0,O.pattern.test(P.value))return;P.issues.push({origin:"string",code:"invalid_format",format:"regex",input:P.value,pattern:O.pattern.toString(),inst:w,continue:!O.abort})}}),TQ=E("$ZodCheckLowerCase",(w,O)=>{O.pattern??(O.pattern=FQ),bO.init(w,O)}),CQ=E("$ZodCheckUpperCase",(w,O)=>{O.pattern??(O.pattern=BQ),bO.init(w,O)}),SQ=E("$ZodCheckIncludes",(w,O)=>{Xv.init(w,O);let P=Gw(O.includes),b=new RegExp(typeof O.position==="number"?`^.{${O.position}}${P}`:P);O.pattern=b,w._zod.onattach.push((M)=>{let Y=M._zod.bag;Y.patterns??(Y.patterns=new Set),Y.patterns.add(b)}),w._zod.check=(M)=>{if(M.value.includes(O.includes,O.position))return;M.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:O.includes,input:M.value,inst:w,continue:!O.abort})}}),lQ=E("$ZodCheckStartsWith",(w,O)=>{Xv.init(w,O);let P=new RegExp(`^${Gw(O.prefix)}.*`);O.pattern??(O.pattern=P),w._zod.onattach.push((b)=>{let M=b._zod.bag;M.patterns??(M.patterns=new Set),M.patterns.add(P)}),w._zod.check=(b)=>{if(b.value.startsWith(O.prefix))return;b.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:O.prefix,input:b.value,inst:w,continue:!O.abort})}}),oQ=E("$ZodCheckEndsWith",(w,O)=>{Xv.init(w,O);let P=new RegExp(`.*${Gw(O.suffix)}$`);O.pattern??(O.pattern=P),w._zod.onattach.push((b)=>{let M=b._zod.bag;M.patterns??(M.patterns=new Set),M.patterns.add(P)}),w._zod.check=(b)=>{if(b.value.endsWith(O.suffix))return;b.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:O.suffix,input:b.value,inst:w,continue:!O.abort})}});var xQ=E("$ZodCheckOverwrite",(w,O)=>{Xv.init(w,O),w._zod.check=(P)=>{P.value=O.tx(P.value)}});class NM{constructor(w=[]){if(this.content=[],this.indent=0,this)this.args=w}indented(w){this.indent+=1,w(this),this.indent-=1}write(w){if(typeof w==="function"){w(this,{execution:"sync"}),w(this,{execution:"async"});return}let P=w.split(`
`).filter((Y)=>Y),b=Math.min(...P.map((Y)=>Y.length-Y.trimStart().length)),M=P.map((Y)=>Y.slice(b)).map((Y)=>" ".repeat(this.indent*2)+Y);for(let Y of M)this.content.push(Y)}compile(){let w=Function,O=this?.args,b=[...(this?.content??[""]).map((M)=>`  ${M}`)];return new w(...O,b.join(`
`))}}var mQ={major:4,minor:3,patch:6};var E0=E("$ZodType",(w,O)=>{var P;w??(w={}),w._zod.def=O,w._zod.bag=w._zod.bag||{},w._zod.version=mQ;let b=[...w._zod.def.checks??[]];if(w._zod.traits.has("$ZodCheck"))b.unshift(w);for(let M of b)for(let Y of M._zod.onattach)Y(w);if(b.length===0)(P=w._zod).deferred??(P.deferred=[]),w._zod.deferred?.push(()=>{w._zod.run=w._zod.parse});else{let M=(G,R,$)=>{let U=R5(G),z;for(let J of R){if(J._zod.def.when){if(!J._zod.def.when(G))continue}else if(U)continue;let L=G.issues.length,l=J._zod.check(G);if(l instanceof Promise&&$?.async===!1)throw new Mw;if(z||l instanceof Promise)z=(z??Promise.resolve()).then(async()=>{if(await l,G.issues.length===L)return;if(!U)U=R5(G,L)});else{if(G.issues.length===L)continue;if(!U)U=R5(G,L)}}if(z)return z.then(()=>{return G});return G},Y=(G,R,$)=>{if(R5(G))return G.aborted=!0,G;let U=M(R,b,$);if(U instanceof Promise){if($.async===!1)throw new Mw;return U.then((z)=>w._zod.parse(z,$))}return w._zod.parse(U,$)};w._zod.run=(G,R)=>{if(R.skipChecks)return w._zod.parse(G,R);if(R.direction==="backward"){let U=w._zod.parse({value:G.value,issues:[]},{...R,skipChecks:!0});if(U instanceof Promise)return U.then((z)=>{return Y(z,G,R)});return Y(U,G,R)}let $=w._zod.parse(G,R);if($ instanceof Promise){if(R.async===!1)throw new Mw;return $.then((U)=>M(U,b,R))}return M($,b,R)}}P0(w,"~standard",()=>({validate:(M)=>{try{let Y=nJ(w,M);return Y.success?{value:Y.data}:{issues:Y.error?.issues}}catch(Y){return eJ(w,M).then((G)=>G.success?{value:G.data}:{issues:G.error?.issues})}},vendor:"zod",version:1}))}),OA=E("$ZodString",(w,O)=>{E0.init(w,O),w._zod.pattern=[...w?._zod.bag?.patterns??[]].pop()??LQ(w._zod.bag),w._zod.parse=(P,b)=>{if(O.coerce)try{P.value=String(P.value)}catch(M){}if(typeof P.value==="string")return P;return P.issues.push({expected:"string",code:"invalid_type",input:P.value,inst:w}),P}}),F0=E("$ZodStringFormat",(w,O)=>{bO.init(w,O),OA.init(w,O)}),nQ=E("$ZodGUID",(w,O)=>{O.pattern??(O.pattern=bQ),F0.init(w,O)}),eQ=E("$ZodUUID",(w,O)=>{if(O.version){let b={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[O.version];if(b===void 0)throw Error(`Invalid UUID version: "${O.version}"`);O.pattern??(O.pattern=BM(b))}else O.pattern??(O.pattern=BM());F0.init(w,O)}),cQ=E("$ZodEmail",(w,O)=>{O.pattern??(O.pattern=WQ),F0.init(w,O)}),tQ=E("$ZodURL",(w,O)=>{F0.init(w,O),w._zod.check=(P)=>{try{let b=P.value.trim(),M=new URL(b);if(O.hostname){if(O.hostname.lastIndex=0,!O.hostname.test(M.hostname))P.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:O.hostname.source,input:P.value,inst:w,continue:!O.abort})}if(O.protocol){if(O.protocol.lastIndex=0,!O.protocol.test(M.protocol.endsWith(":")?M.protocol.slice(0,-1):M.protocol))P.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:O.protocol.source,input:P.value,inst:w,continue:!O.abort})}if(O.normalize)P.value=M.href;else P.value=b;return}catch(b){P.issues.push({code:"invalid_format",format:"url",input:P.value,inst:w,continue:!O.abort})}}}),pQ=E("$ZodEmoji",(w,O)=>{O.pattern??(O.pattern=MQ()),F0.init(w,O)}),dQ=E("$ZodNanoID",(w,O)=>{O.pattern??(O.pattern=AQ),F0.init(w,O)}),aQ=E("$ZodCUID",(w,O)=>{O.pattern??(O.pattern=rQ),F0.init(w,O)}),sQ=E("$ZodCUID2",(w,O)=>{O.pattern??(O.pattern=wQ),F0.init(w,O)}),g3=E("$ZodULID",(w,O)=>{O.pattern??(O.pattern=HQ),F0.init(w,O)}),v3=E("$ZodXID",(w,O)=>{O.pattern??(O.pattern=OQ),F0.init(w,O)}),r3=E("$ZodKSUID",(w,O)=>{O.pattern??(O.pattern=qQ),F0.init(w,O)}),w3=E("$ZodISODateTime",(w,O)=>{O.pattern??(O.pattern=UQ(O)),F0.init(w,O)}),H3=E("$ZodISODate",(w,O)=>{O.pattern??(O.pattern=KQ),F0.init(w,O)}),O3=E("$ZodISOTime",(w,O)=>{O.pattern??(O.pattern=zQ(O)),F0.init(w,O)}),q3=E("$ZodISODuration",(w,O)=>{O.pattern??(O.pattern=PQ),F0.init(w,O)}),A3=E("$ZodIPv4",(w,O)=>{O.pattern??(O.pattern=XQ),F0.init(w,O),w._zod.bag.format="ipv4"}),P3=E("$ZodIPv6",(w,O)=>{O.pattern??(O.pattern=YQ),F0.init(w,O),w._zod.bag.format="ipv6",w._zod.check=(P)=>{try{new URL(`http://[${P.value}]`)}catch{P.issues.push({code:"invalid_format",format:"ipv6",input:P.value,inst:w,continue:!O.abort})}}});var b3=E("$ZodCIDRv4",(w,O)=>{O.pattern??(O.pattern=GQ),F0.init(w,O)}),W3=E("$ZodCIDRv6",(w,O)=>{O.pattern??(O.pattern=RQ),F0.init(w,O),w._zod.check=(P)=>{let b=P.value.split("/");try{if(b.length!==2)throw Error();let[M,Y]=b;if(!Y)throw Error();let G=Number(Y);if(`${G}`!==Y)throw Error();if(G<0||G>128)throw Error();new URL(`http://[${M}]`)}catch{P.issues.push({code:"invalid_format",format:"cidrv6",input:P.value,inst:w,continue:!O.abort})}}});function M3(w){if(w==="")return!0;if(w.length%4!==0)return!1;try{return atob(w),!0}catch{return!1}}var X3=E("$ZodBase64",(w,O)=>{O.pattern??(O.pattern=hQ),F0.init(w,O),w._zod.bag.contentEncoding="base64",w._zod.check=(P)=>{if(M3(P.value))return;P.issues.push({code:"invalid_format",format:"base64",input:P.value,inst:w,continue:!O.abort})}});function hN(w){if(!IM.test(w))return!1;let O=w.replace(/[-_]/g,(b)=>b==="-"?"+":"/"),P=O.padEnd(Math.ceil(O.length/4)*4,"=");return M3(P)}var Y3=E("$ZodBase64URL",(w,O)=>{O.pattern??(O.pattern=IM),F0.init(w,O),w._zod.bag.contentEncoding="base64url",w._zod.check=(P)=>{if(hN(P.value))return;P.issues.push({code:"invalid_format",format:"base64url",input:P.value,inst:w,continue:!O.abort})}}),G3=E("$ZodE164",(w,O)=>{O.pattern??(O.pattern=JQ),F0.init(w,O)});function JN(w,O=null){try{let P=w.split(".");if(P.length!==3)return!1;let[b]=P;if(!b)return!1;let M=JSON.parse(atob(b));if("typ"in M&&M?.typ!=="JWT")return!1;if(!M.alg)return!1;if(O&&(!("alg"in M)||M.alg!==O))return!1;return!0}catch{return!1}}var R3=E("$ZodJWT",(w,O)=>{F0.init(w,O),w._zod.check=(P)=>{if(JN(P.value,O.alg))return;P.issues.push({code:"invalid_format",format:"jwt",input:P.value,inst:w,continue:!O.abort})}});var h3=E("$ZodUnknown",(w,O)=>{E0.init(w,O),w._zod.parse=(P)=>P}),J3=E("$ZodNever",(w,O)=>{E0.init(w,O),w._zod.parse=(P,b)=>{return P.issues.push({expected:"never",code:"invalid_type",input:P.value,inst:w}),P}});function kQ(w,O,P){if(w.issues.length)O.issues.push(...OO(P,w.issues));O.value[P]=w.value}var Q3=E("$ZodArray",(w,O)=>{E0.init(w,O),w._zod.parse=(P,b)=>{let M=P.value;if(!Array.isArray(M))return P.issues.push({expected:"array",code:"invalid_type",input:M,inst:w}),P;P.value=Array(M.length);let Y=[];for(let G=0;G<M.length;G++){let R=M[G],$=O.element._zod.run({value:R,issues:[]},b);if($ instanceof Promise)Y.push($.then((U)=>kQ(U,P,G)));else kQ($,P,G)}if(Y.length)return Promise.all(Y).then(()=>P);return P}});function HA(w,O,P,b,M){if(w.issues.length){if(M&&!(P in b))return;O.issues.push(...OO(P,w.issues))}if(w.value===void 0){if(P in b)O.value[P]=void 0}else O.value[P]=w.value}function K3(w){let O=Object.keys(w.shape);for(let b of O)if(!w.shape?.[b]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${b}": expected a Zod schema`);let P=LM(w.shape);return{...w,keys:O,keySet:new Set(O),numKeys:O.length,optionalKeys:new Set(P)}}function $3(w,O,P,b,M,Y){let G=[],R=M.keySet,$=M.catchall._zod,U=$.def.type,z=$.optout==="optional";for(let J in O){if(R.has(J))continue;if(U==="never"){G.push(J);continue}let L=$.run({value:O[J],issues:[]},b);if(L instanceof Promise)w.push(L.then((l)=>HA(l,P,J,O,z)));else HA(L,P,J,O,z)}if(G.length)P.issues.push({code:"unrecognized_keys",keys:G,input:O,inst:Y});if(!w.length)return P;return Promise.all(w).then(()=>{return P})}var QN=E("$ZodObject",(w,O)=>{if(E0.init(w,O),!Object.getOwnPropertyDescriptor(O,"shape")?.get){let R=O.shape;Object.defineProperty(O,"shape",{get:()=>{let $={...R};return Object.defineProperty(O,"shape",{value:$}),$}})}let b=rO(()=>K3(O));P0(w._zod,"propValues",()=>{let R=O.shape,$={};for(let U in R){let z=R[U]._zod;if(z.values){$[U]??($[U]=new Set);for(let J of z.values)$[U].add(J)}}return $});let M=o6,Y=O.catchall,G;w._zod.parse=(R,$)=>{G??(G=b.value);let U=R.value;if(!M(U))return R.issues.push({expected:"object",code:"invalid_type",input:U,inst:w}),R;R.value={};let z=[],J=G.shape;for(let L of G.keys){let l=J[L],t=l._zod.optout==="optional",j=l._zod.run({value:U[L],issues:[]},$);if(j instanceof Promise)z.push(j.then((s)=>HA(s,R,L,U,t)));else HA(j,R,L,U,t)}if(!Y)return z.length?Promise.all(z).then(()=>R):R;return $3(z,U,R,$,b.value,w)}}),z3=E("$ZodObjectJIT",(w,O)=>{QN.init(w,O);let P=w._zod.parse,b=rO(()=>K3(O)),M=(L)=>{let l=new NM(["shape","payload","ctx"]),t=b.value,j=(qg)=>{let e=dq(qg);return`shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`};l.write("const input = payload.value;");let s=Object.create(null),_=0;for(let qg of t.keys)s[qg]=`key_${_++}`;l.write("const newResult = {};");for(let qg of t.keys){let e=s[qg],a=dq(qg),rg=L[qg]?._zod?.optout==="optional";if(l.write(`const ${e} = ${j(qg)};`),rg)l.write(`
        if (${e}.issues.length) {
          if (${a} in input) {
            payload.issues = payload.issues.concat(${e}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${a}, ...iss.path] : [${a}]
            })));
          }
        }
        
        if (${e}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${e}.value;
        }
        
      `);else l.write(`
        if (${e}.issues.length) {
          payload.issues = payload.issues.concat(${e}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${a}, ...iss.path] : [${a}]
          })));
        }
        
        if (${e}.value === undefined) {
          if (${a} in input) {
            newResult[${a}] = undefined;
          }
        } else {
          newResult[${a}] = ${e}.value;
        }
        
      `)}l.write("payload.value = newResult;"),l.write("return payload;");let Mg=l.compile();return(qg,e)=>Mg(L,qg,e)},Y,G=o6,R=!pq.jitless,U=R&&zM.value,z=O.catchall,J;w._zod.parse=(L,l)=>{J??(J=b.value);let t=L.value;if(!G(t))return L.issues.push({expected:"object",code:"invalid_type",input:t,inst:w}),L;if(R&&U&&l?.async===!1&&l.jitless!==!0){if(!Y)Y=M(O.shape);if(L=Y(L,l),!z)return L;return $3([],t,L,l,J,w)}return P(L,l)}});function VQ(w,O,P,b){for(let Y of w)if(Y.issues.length===0)return O.value=Y.value,O;let M=w.filter((Y)=>!R5(Y));if(M.length===1)return O.value=M[0].value,M[0];return O.issues.push({code:"invalid_union",input:O.value,inst:P,errors:w.map((Y)=>Y.issues.map((G)=>lr(G,b,Xw())))}),O}var U3=E("$ZodUnion",(w,O)=>{E0.init(w,O),P0(w._zod,"optin",()=>O.options.some((M)=>M._zod.optin==="optional")?"optional":void 0),P0(w._zod,"optout",()=>O.options.some((M)=>M._zod.optout==="optional")?"optional":void 0),P0(w._zod,"values",()=>{if(O.options.every((M)=>M._zod.values))return new Set(O.options.flatMap((M)=>Array.from(M._zod.values)));return}),P0(w._zod,"pattern",()=>{if(O.options.every((M)=>M._zod.pattern)){let M=O.options.map((Y)=>Y._zod.pattern);return new RegExp(`^(${M.map((Y)=>HO(Y.source)).join("|")})$`)}return});let P=O.options.length===1,b=O.options[0]._zod.run;w._zod.parse=(M,Y)=>{if(P)return b(M,Y);let G=!1,R=[];for(let $ of O.options){let U=$._zod.run({value:M.value,issues:[]},Y);if(U instanceof Promise)R.push(U),G=!0;else{if(U.issues.length===0)return U;R.push(U)}}if(!G)return VQ(R,M,w,Y);return Promise.all(R).then(($)=>{return VQ($,M,w,Y)})}});var L3=E("$ZodIntersection",(w,O)=>{E0.init(w,O),w._zod.parse=(P,b)=>{let M=P.value,Y=O.left._zod.run({value:M,issues:[]},b),G=O.right._zod.run({value:M,issues:[]},b);if(Y instanceof Promise||G instanceof Promise)return Promise.all([Y,G]).then(([$,U])=>{return EQ(P,$,U)});return EQ(P,Y,G)}});function ZM(w,O){if(w===O)return{valid:!0,data:w};if(w instanceof Date&&O instanceof Date&&+w===+O)return{valid:!0,data:w};if($4(w)&&$4(O)){let P=Object.keys(O),b=Object.keys(w).filter((Y)=>P.indexOf(Y)!==-1),M={...w,...O};for(let Y of b){let G=ZM(w[Y],O[Y]);if(!G.valid)return{valid:!1,mergeErrorPath:[Y,...G.mergeErrorPath]};M[Y]=G.data}return{valid:!0,data:M}}if(Array.isArray(w)&&Array.isArray(O)){if(w.length!==O.length)return{valid:!1,mergeErrorPath:[]};let P=[];for(let b=0;b<w.length;b++){let M=w[b],Y=O[b],G=ZM(M,Y);if(!G.valid)return{valid:!1,mergeErrorPath:[b,...G.mergeErrorPath]};P.push(G.data)}return{valid:!0,data:P}}return{valid:!1,mergeErrorPath:[]}}function EQ(w,O,P){let b=new Map,M;for(let R of O.issues)if(R.code==="unrecognized_keys"){M??(M=R);for(let $ of R.keys){if(!b.has($))b.set($,{});b.get($).l=!0}}else w.issues.push(R);for(let R of P.issues)if(R.code==="unrecognized_keys")for(let $ of R.keys){if(!b.has($))b.set($,{});b.get($).r=!0}else w.issues.push(R);let Y=[...b].filter(([,R])=>R.l&&R.r).map(([R])=>R);if(Y.length&&M)w.issues.push({...M,keys:Y});if(R5(w))return w;let G=ZM(O.value,P.value);if(!G.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(G.mergeErrorPath)}`);return w.value=G.data,w}var F3=E("$ZodEnum",(w,O)=>{E0.init(w,O);let P=vO(O.entries),b=new Set(P);w._zod.values=b,w._zod.pattern=new RegExp(`^(${P.filter((M)=>UM.has(typeof M)).map((M)=>typeof M==="string"?Gw(M):M.toString()).join("|")})$`),w._zod.parse=(M,Y)=>{let G=M.value;if(b.has(G))return M;return M.issues.push({code:"invalid_value",values:P,input:G,inst:w}),M}}),B3=E("$ZodLiteral",(w,O)=>{if(E0.init(w,O),O.values.length===0)throw Error("Cannot create literal schema with no valid values");let P=new Set(O.values);w._zod.values=P,w._zod.pattern=new RegExp(`^(${O.values.map((b)=>typeof b==="string"?Gw(b):b?Gw(b.toString()):String(b)).join("|")})$`),w._zod.parse=(b,M)=>{let Y=b.value;if(P.has(Y))return b;return b.issues.push({code:"invalid_value",values:O.values,input:Y,inst:w}),b}});var I3=E("$ZodTransform",(w,O)=>{E0.init(w,O),w._zod.parse=(P,b)=>{if(b.direction==="backward")throw new sH(w.constructor.name);let M=O.transform(P.value,P);if(b.async)return(M instanceof Promise?M:Promise.resolve(M)).then((G)=>{return P.value=G,P});if(M instanceof Promise)throw new Mw;return P.value=M,P}});function _Q(w,O){if(w.issues.length&&O===void 0)return{issues:[],value:void 0};return w}var uM=E("$ZodOptional",(w,O)=>{E0.init(w,O),w._zod.optin="optional",w._zod.optout="optional",P0(w._zod,"values",()=>{return O.innerType._zod.values?new Set([...O.innerType._zod.values,void 0]):void 0}),P0(w._zod,"pattern",()=>{let P=O.innerType._zod.pattern;return P?new RegExp(`^(${HO(P.source)})?$`):void 0}),w._zod.parse=(P,b)=>{if(O.innerType._zod.optin==="optional"){let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>_Q(Y,P.value));return _Q(M,P.value)}if(P.value===void 0)return P;return O.innerType._zod.run(P,b)}}),N3=E("$ZodExactOptional",(w,O)=>{uM.init(w,O),P0(w._zod,"values",()=>O.innerType._zod.values),P0(w._zod,"pattern",()=>O.innerType._zod.pattern),w._zod.parse=(P,b)=>{return O.innerType._zod.run(P,b)}}),Z3=E("$ZodNullable",(w,O)=>{E0.init(w,O),P0(w._zod,"optin",()=>O.innerType._zod.optin),P0(w._zod,"optout",()=>O.innerType._zod.optout),P0(w._zod,"pattern",()=>{let P=O.innerType._zod.pattern;return P?new RegExp(`^(${HO(P.source)}|null)$`):void 0}),P0(w._zod,"values",()=>{return O.innerType._zod.values?new Set([...O.innerType._zod.values,null]):void 0}),w._zod.parse=(P,b)=>{if(P.value===null)return P;return O.innerType._zod.run(P,b)}}),u3=E("$ZodDefault",(w,O)=>{E0.init(w,O),w._zod.optin="optional",P0(w._zod,"values",()=>O.innerType._zod.values),w._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);if(P.value===void 0)return P.value=O.defaultValue,P;let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>yQ(Y,O));return yQ(M,O)}});function yQ(w,O){if(w.value===void 0)w.value=O.defaultValue;return w}var T3=E("$ZodPrefault",(w,O)=>{E0.init(w,O),w._zod.optin="optional",P0(w._zod,"values",()=>O.innerType._zod.values),w._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);if(P.value===void 0)P.value=O.defaultValue;return O.innerType._zod.run(P,b)}}),C3=E("$ZodNonOptional",(w,O)=>{E0.init(w,O),P0(w._zod,"values",()=>{let P=O.innerType._zod.values;return P?new Set([...P].filter((b)=>b!==void 0)):void 0}),w._zod.parse=(P,b)=>{let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>jQ(Y,w));return jQ(M,w)}});function jQ(w,O){if(!w.issues.length&&w.value===void 0)w.issues.push({code:"invalid_type",expected:"nonoptional",input:w.value,inst:O});return w}var S3=E("$ZodCatch",(w,O)=>{E0.init(w,O),P0(w._zod,"optin",()=>O.innerType._zod.optin),P0(w._zod,"optout",()=>O.innerType._zod.optout),P0(w._zod,"values",()=>O.innerType._zod.values),w._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>{if(P.value=Y.value,Y.issues.length)P.value=O.catchValue({...P,error:{issues:Y.issues.map((G)=>lr(G,b,Xw()))},input:P.value}),P.issues=[];return P});if(P.value=M.value,M.issues.length)P.value=O.catchValue({...P,error:{issues:M.issues.map((Y)=>lr(Y,b,Xw()))},input:P.value}),P.issues=[];return P}});var l3=E("$ZodPipe",(w,O)=>{E0.init(w,O),P0(w._zod,"values",()=>O.in._zod.values),P0(w._zod,"optin",()=>O.in._zod.optin),P0(w._zod,"optout",()=>O.out._zod.optout),P0(w._zod,"propValues",()=>O.in._zod.propValues),w._zod.parse=(P,b)=>{if(b.direction==="backward"){let Y=O.out._zod.run(P,b);if(Y instanceof Promise)return Y.then((G)=>wA(G,O.in,b));return wA(Y,O.in,b)}let M=O.in._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>wA(Y,O.out,b));return wA(M,O.out,b)}});function wA(w,O,P){if(w.issues.length)return w.aborted=!0,w;return O._zod.run({value:w.value,issues:w.issues},P)}var o3=E("$ZodReadonly",(w,O)=>{E0.init(w,O),P0(w._zod,"propValues",()=>O.innerType._zod.propValues),P0(w._zod,"values",()=>O.innerType._zod.values),P0(w._zod,"optin",()=>O.innerType?._zod?.optin),P0(w._zod,"optout",()=>O.innerType?._zod?.optout),w._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then(iQ);return iQ(M)}});function iQ(w){return w.value=Object.freeze(w.value),w}var x3=E("$ZodCustom",(w,O)=>{Xv.init(w,O),E0.init(w,O),w._zod.parse=(P,b)=>{return P},w._zod.check=(P)=>{let b=P.value,M=O.fn(b);if(M instanceof Promise)return M.then((Y)=>fQ(Y,P,b,w));fQ(M,P,b,w);return}});function fQ(w,O,P,b){if(!w){let M={code:"custom",input:P,inst:b,path:[...b._zod.def.path??[]],continue:!b._zod.def.abort};if(b._zod.def.params)M.params=b._zod.def.params;O.issues.push(D6(M))}}var D3,mj0=Symbol("ZodOutput"),kj0=Symbol("ZodInput");class m3{constructor(){this._map=new WeakMap,this._idmap=new Map}add(w,...O){let P=O[0];if(this._map.set(w,P),P&&typeof P==="object"&&"id"in P)this._idmap.set(P.id,w);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(w){let O=this._map.get(w);if(O&&typeof O==="object"&&"id"in O)this._idmap.delete(O.id);return this._map.delete(w),this}get(w){let O=w._zod.parent;if(O){let P={...this.get(O)??{}};delete P.id;let b={...P,...this._map.get(w)};return Object.keys(b).length?b:void 0}return this._map.get(w)}has(w){return this._map.has(w)}}function KN(){return new m3}(D3=globalThis).__zod_globalRegistry??(D3.__zod_globalRegistry=KN());var z4=globalThis.__zod_globalRegistry;function k3(w,O){return new w({type:"string",...kg(O)})}function V3(w,O){return new w({type:"string",format:"email",check:"string_format",abort:!1,...kg(O)})}function TM(w,O){return new w({type:"string",format:"guid",check:"string_format",abort:!1,...kg(O)})}function E3(w,O){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,...kg(O)})}function _3(w,O){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...kg(O)})}function y3(w,O){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...kg(O)})}function j3(w,O){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...kg(O)})}function i3(w,O){return new w({type:"string",format:"url",check:"string_format",abort:!1,...kg(O)})}function f3(w,O){return new w({type:"string",format:"emoji",check:"string_format",abort:!1,...kg(O)})}function n3(w,O){return new w({type:"string",format:"nanoid",check:"string_format",abort:!1,...kg(O)})}function e3(w,O){return new w({type:"string",format:"cuid",check:"string_format",abort:!1,...kg(O)})}function c3(w,O){return new w({type:"string",format:"cuid2",check:"string_format",abort:!1,...kg(O)})}function t3(w,O){return new w({type:"string",format:"ulid",check:"string_format",abort:!1,...kg(O)})}function p3(w,O){return new w({type:"string",format:"xid",check:"string_format",abort:!1,...kg(O)})}function d3(w,O){return new w({type:"string",format:"ksuid",check:"string_format",abort:!1,...kg(O)})}function a3(w,O){return new w({type:"string",format:"ipv4",check:"string_format",abort:!1,...kg(O)})}function s3(w,O){return new w({type:"string",format:"ipv6",check:"string_format",abort:!1,...kg(O)})}function gK(w,O){return new w({type:"string",format:"cidrv4",check:"string_format",abort:!1,...kg(O)})}function vK(w,O){return new w({type:"string",format:"cidrv6",check:"string_format",abort:!1,...kg(O)})}function rK(w,O){return new w({type:"string",format:"base64",check:"string_format",abort:!1,...kg(O)})}function wK(w,O){return new w({type:"string",format:"base64url",check:"string_format",abort:!1,...kg(O)})}function HK(w,O){return new w({type:"string",format:"e164",check:"string_format",abort:!1,...kg(O)})}function OK(w,O){return new w({type:"string",format:"jwt",check:"string_format",abort:!1,...kg(O)})}function qK(w,O){return new w({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...kg(O)})}function AK(w,O){return new w({type:"string",format:"date",check:"string_format",...kg(O)})}function PK(w,O){return new w({type:"string",format:"time",check:"string_format",precision:null,...kg(O)})}function bK(w,O){return new w({type:"string",format:"duration",check:"string_format",...kg(O)})}function WK(w){return new w({type:"unknown"})}function MK(w,O){return new w({type:"never",...kg(O)})}function qA(w,O){return new IQ({check:"max_length",...kg(O),maximum:w})}function m6(w,O){return new NQ({check:"min_length",...kg(O),minimum:w})}function AA(w,O){return new ZQ({check:"length_equals",...kg(O),length:w})}function CM(w,O){return new uQ({check:"string_format",format:"regex",...kg(O),pattern:w})}function SM(w){return new TQ({check:"string_format",format:"lowercase",...kg(w)})}function lM(w){return new CQ({check:"string_format",format:"uppercase",...kg(w)})}function oM(w,O){return new SQ({check:"string_format",format:"includes",...kg(O),includes:w})}function xM(w,O){return new lQ({check:"string_format",format:"starts_with",...kg(O),prefix:w})}function DM(w,O){return new oQ({check:"string_format",format:"ends_with",...kg(O),suffix:w})}function h5(w){return new xQ({check:"overwrite",tx:w})}function mM(w){return h5((O)=>O.normalize(w))}function kM(){return h5((w)=>w.trim())}function VM(){return h5((w)=>w.toLowerCase())}function EM(){return h5((w)=>w.toUpperCase())}function _M(){return h5((w)=>$M(w))}function XK(w,O,P){return new w({type:"array",element:O,...kg(P)})}function YK(w,O,P){return new w({type:"custom",check:"custom",fn:O,...kg(P)})}function GK(w){let O=$N((P)=>{return P.addIssue=(b)=>{if(typeof b==="string")P.issues.push(D6(b,P.value,O._zod.def));else{let M=b;if(M.fatal)M.continue=!1;M.code??(M.code="custom"),M.input??(M.input=P.value),M.inst??(M.inst=O),M.continue??(M.continue=!O._zod.def.abort),P.issues.push(D6(M))}},w(P.value,P)});return O}function $N(w,O){let P=new Xv({check:"custom",...kg(O)});return P._zod.check=w,P}function yM(w){let O=w?.target??"draft-2020-12";if(O==="draft-4")O="draft-04";if(O==="draft-7")O="draft-07";return{processors:w.processors??{},metadataRegistry:w?.metadata??z4,target:O,unrepresentable:w?.unrepresentable??"throw",override:w?.override??(()=>{}),io:w?.io??"output",counter:0,seen:new Map,cycles:w?.cycles??"ref",reused:w?.reused??"inline",external:w?.external??void 0}}function A1(w,O,P={path:[],schemaPath:[]}){var b;let M=w._zod.def,Y=O.seen.get(w);if(Y){if(Y.count++,P.schemaPath.includes(w))Y.cycle=P.path;return Y.schema}let G={schema:{},count:1,cycle:void 0,path:P.path};O.seen.set(w,G);let R=w._zod.toJSONSchema?.();if(R)G.schema=R;else{let z={...P,schemaPath:[...P.schemaPath,w],path:P.path};if(w._zod.processJSONSchema)w._zod.processJSONSchema(O,G.schema,z);else{let L=G.schema,l=O.processors[M.type];if(!l)throw Error(`[toJSONSchema]: Non-representable type encountered: ${M.type}`);l(w,O,L,z)}let J=w._zod.parent;if(J){if(!G.ref)G.ref=J;A1(J,O,z),O.seen.get(J).isParent=!0}}let $=O.metadataRegistry.get(w);if($)Object.assign(G.schema,$);if(O.io==="input"&&x1(w))delete G.schema.examples,delete G.schema.default;if(O.io==="input"&&G.schema._prefault)(b=G.schema).default??(b.default=G.schema._prefault);return delete G.schema._prefault,O.seen.get(w).schema}function jM(w,O){let P=w.seen.get(O);if(!P)throw Error("Unprocessed schema. This is a bug in Zod.");let b=new Map;for(let G of w.seen.entries()){let R=w.metadataRegistry.get(G[0])?.id;if(R){let $=b.get(R);if($&&$!==G[0])throw Error(`Duplicate schema id "${R}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);b.set(R,G[0])}}let M=(G)=>{let R=w.target==="draft-2020-12"?"$defs":"definitions";if(w.external){let J=w.external.registry.get(G[0])?.id,L=w.external.uri??((t)=>t);if(J)return{ref:L(J)};let l=G[1].defId??G[1].schema.id??`schema${w.counter++}`;return G[1].defId=l,{defId:l,ref:`${L("__shared")}#/${R}/${l}`}}if(G[1]===P)return{ref:"#"};let U=`${"#"}/${R}/`,z=G[1].schema.id??`__schema${w.counter++}`;return{defId:z,ref:U+z}},Y=(G)=>{if(G[1].schema.$ref)return;let R=G[1],{ref:$,defId:U}=M(G);if(R.def={...R.schema},U)R.defId=U;let z=R.schema;for(let J in z)delete z[J];z.$ref=$};if(w.cycles==="throw")for(let G of w.seen.entries()){let R=G[1];if(R.cycle)throw Error(`Cycle detected: #/${R.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let G of w.seen.entries()){let R=G[1];if(O===G[0]){Y(G);continue}if(w.external){let U=w.external.registry.get(G[0])?.id;if(O!==G[0]&&U){Y(G);continue}}if(w.metadataRegistry.get(G[0])?.id){Y(G);continue}if(R.cycle){Y(G);continue}if(R.count>1){if(w.reused==="ref"){Y(G);continue}}}}function iM(w,O){let P=w.seen.get(O);if(!P)throw Error("Unprocessed schema. This is a bug in Zod.");let b=(G)=>{let R=w.seen.get(G);if(R.ref===null)return;let $=R.def??R.schema,U={...$},z=R.ref;if(R.ref=null,z){b(z);let L=w.seen.get(z),l=L.schema;if(l.$ref&&(w.target==="draft-07"||w.target==="draft-04"||w.target==="openapi-3.0"))$.allOf=$.allOf??[],$.allOf.push(l);else Object.assign($,l);if(Object.assign($,U),G._zod.parent===z)for(let j in $){if(j==="$ref"||j==="allOf")continue;if(!(j in U))delete $[j]}if(l.$ref&&L.def)for(let j in $){if(j==="$ref"||j==="allOf")continue;if(j in L.def&&JSON.stringify($[j])===JSON.stringify(L.def[j]))delete $[j]}}let J=G._zod.parent;if(J&&J!==z){b(J);let L=w.seen.get(J);if(L?.schema.$ref){if($.$ref=L.schema.$ref,L.def)for(let l in $){if(l==="$ref"||l==="allOf")continue;if(l in L.def&&JSON.stringify($[l])===JSON.stringify(L.def[l]))delete $[l]}}}w.override({zodSchema:G,jsonSchema:$,path:R.path??[]})};for(let G of[...w.seen.entries()].reverse())b(G[0]);let M={};if(w.target==="draft-2020-12")M.$schema="https://json-schema.org/draft/2020-12/schema";else if(w.target==="draft-07")M.$schema="http://json-schema.org/draft-07/schema#";else if(w.target==="draft-04")M.$schema="http://json-schema.org/draft-04/schema#";else if(w.target==="openapi-3.0");if(w.external?.uri){let G=w.external.registry.get(O)?.id;if(!G)throw Error("Schema is missing an `id` property");M.$id=w.external.uri(G)}Object.assign(M,P.def??P.schema);let Y=w.external?.defs??{};for(let G of w.seen.entries()){let R=G[1];if(R.def&&R.defId)Y[R.defId]=R.def}if(w.external);else if(Object.keys(Y).length>0)if(w.target==="draft-2020-12")M.$defs=Y;else M.definitions=Y;try{let G=JSON.parse(JSON.stringify(M));return Object.defineProperty(G,"~standard",{value:{...O["~standard"],jsonSchema:{input:WO(O,"input",w.processors),output:WO(O,"output",w.processors)}},enumerable:!1,writable:!1}),G}catch(G){throw Error("Error converting schema to JSON.")}}function x1(w,O){let P=O??{seen:new Set};if(P.seen.has(w))return!1;P.seen.add(w);let b=w._zod.def;if(b.type==="transform")return!0;if(b.type==="array")return x1(b.element,P);if(b.type==="set")return x1(b.valueType,P);if(b.type==="lazy")return x1(b.getter(),P);if(b.type==="promise"||b.type==="optional"||b.type==="nonoptional"||b.type==="nullable"||b.type==="readonly"||b.type==="default"||b.type==="prefault")return x1(b.innerType,P);if(b.type==="intersection")return x1(b.left,P)||x1(b.right,P);if(b.type==="record"||b.type==="map")return x1(b.keyType,P)||x1(b.valueType,P);if(b.type==="pipe")return x1(b.in,P)||x1(b.out,P);if(b.type==="object"){for(let M in b.shape)if(x1(b.shape[M],P))return!0;return!1}if(b.type==="union"){for(let M of b.options)if(x1(M,P))return!0;return!1}if(b.type==="tuple"){for(let M of b.items)if(x1(M,P))return!0;if(b.rest&&x1(b.rest,P))return!0;return!1}return!1}var RK=(w,O={})=>(P)=>{let b=yM({...P,processors:O});return A1(w,b),jM(b,w),iM(b,w)},WO=(w,O,P={})=>(b)=>{let{libraryOptions:M,target:Y}=b??{},G=yM({...M??{},target:Y,io:O,processors:P});return A1(w,G),jM(G,w),iM(G,w)};var zN={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},hK=(w,O,P,b)=>{let M=P;M.type="string";let{minimum:Y,maximum:G,format:R,patterns:$,contentEncoding:U}=w._zod.bag;if(typeof Y==="number")M.minLength=Y;if(typeof G==="number")M.maxLength=G;if(R){if(M.format=zN[R]??R,M.format==="")delete M.format;if(R==="time")delete M.format}if(U)M.contentEncoding=U;if($&&$.size>0){let z=[...$];if(z.length===1)M.pattern=z[0].source;else if(z.length>1)M.allOf=[...z.map((J)=>({...O.target==="draft-07"||O.target==="draft-04"||O.target==="openapi-3.0"?{type:"string"}:{},pattern:J.source}))]}};var JK=(w,O,P,b)=>{P.not={}};var QK=(w,O,P,b)=>{};var KK=(w,O,P,b)=>{let M=w._zod.def,Y=vO(M.entries);if(Y.every((G)=>typeof G==="number"))P.type="number";if(Y.every((G)=>typeof G==="string"))P.type="string";P.enum=Y},$K=(w,O,P,b)=>{let M=w._zod.def,Y=[];for(let G of M.values)if(G===void 0){if(O.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof G==="bigint")if(O.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else Y.push(Number(G));else Y.push(G);if(Y.length===0);else if(Y.length===1){let G=Y[0];if(P.type=G===null?"null":typeof G,O.target==="draft-04"||O.target==="openapi-3.0")P.enum=[G];else P.const=G}else{if(Y.every((G)=>typeof G==="number"))P.type="number";if(Y.every((G)=>typeof G==="string"))P.type="string";if(Y.every((G)=>typeof G==="boolean"))P.type="boolean";if(Y.every((G)=>G===null))P.type="null";P.enum=Y}};var zK=(w,O,P,b)=>{if(O.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var UK=(w,O,P,b)=>{if(O.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var LK=(w,O,P,b)=>{let M=P,Y=w._zod.def,{minimum:G,maximum:R}=w._zod.bag;if(typeof G==="number")M.minItems=G;if(typeof R==="number")M.maxItems=R;M.type="array",M.items=A1(Y.element,O,{...b,path:[...b.path,"items"]})},FK=(w,O,P,b)=>{let M=P,Y=w._zod.def;M.type="object",M.properties={};let G=Y.shape;for(let U in G)M.properties[U]=A1(G[U],O,{...b,path:[...b.path,"properties",U]});let R=new Set(Object.keys(G)),$=new Set([...R].filter((U)=>{let z=Y.shape[U]._zod;if(O.io==="input")return z.optin===void 0;else return z.optout===void 0}));if($.size>0)M.required=Array.from($);if(Y.catchall?._zod.def.type==="never")M.additionalProperties=!1;else if(!Y.catchall){if(O.io==="output")M.additionalProperties=!1}else if(Y.catchall)M.additionalProperties=A1(Y.catchall,O,{...b,path:[...b.path,"additionalProperties"]})},BK=(w,O,P,b)=>{let M=w._zod.def,Y=M.inclusive===!1,G=M.options.map((R,$)=>A1(R,O,{...b,path:[...b.path,Y?"oneOf":"anyOf",$]}));if(Y)P.oneOf=G;else P.anyOf=G},IK=(w,O,P,b)=>{let M=w._zod.def,Y=A1(M.left,O,{...b,path:[...b.path,"allOf",0]}),G=A1(M.right,O,{...b,path:[...b.path,"allOf",1]}),R=(U)=>("allOf"in U)&&Object.keys(U).length===1,$=[...R(Y)?Y.allOf:[Y],...R(G)?G.allOf:[G]];P.allOf=$};var NK=(w,O,P,b)=>{let M=w._zod.def,Y=A1(M.innerType,O,b),G=O.seen.get(w);if(O.target==="openapi-3.0")G.ref=M.innerType,P.nullable=!0;else P.anyOf=[Y,{type:"null"}]},ZK=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);Y.ref=M.innerType},uK=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);Y.ref=M.innerType,P.default=JSON.parse(JSON.stringify(M.defaultValue))},TK=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);if(Y.ref=M.innerType,O.io==="input")P._prefault=JSON.parse(JSON.stringify(M.defaultValue))},CK=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);Y.ref=M.innerType;let G;try{G=M.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}P.default=G},SK=(w,O,P,b)=>{let M=w._zod.def,Y=O.io==="input"?M.in._zod.def.type==="transform"?M.out:M.in:M.out;A1(Y,O,b);let G=O.seen.get(w);G.ref=Y},lK=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);Y.ref=M.innerType,P.readOnly=!0};var fM=(w,O,P,b)=>{let M=w._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(w);Y.ref=M.innerType};var lN=E("ZodISODateTime",(w,O)=>{w3.init(w,O),N0.init(w,O)});function oK(w){return qK(lN,w)}var oN=E("ZodISODate",(w,O)=>{H3.init(w,O),N0.init(w,O)});function xK(w){return AK(oN,w)}var xN=E("ZodISOTime",(w,O)=>{O3.init(w,O),N0.init(w,O)});function DK(w){return PK(xN,w)}var DN=E("ZodISODuration",(w,O)=>{q3.init(w,O),N0.init(w,O)});function mK(w){return bK(DN,w)}var kK=(w,O)=>{sq.init(w,O),w.name="ZodError",Object.defineProperties(w,{format:{value:(P)=>fJ(w,P)},flatten:{value:(P)=>iJ(w,P)},addIssue:{value:(P)=>{w.issues.push(P),w.message=JSON.stringify(w.issues,x6,2)}},addIssues:{value:(P)=>{w.issues.push(...P),w.message=JSON.stringify(w.issues,x6,2)}},isEmpty:{get(){return w.issues.length===0}}})},Qi0=E("ZodError",kK),Yv=E("ZodError",kK,{Parent:Error});var VK=gA(Yv),EK=vA(Yv),_K=AO(Yv),yK=PO(Yv),jK=cJ(Yv),iK=tJ(Yv),fK=pJ(Yv),nK=dJ(Yv),eK=aJ(Yv),cK=sJ(Yv),tK=gQ(Yv),pK=vQ(Yv);var d0=E("ZodType",(w,O)=>{return E0.init(w,O),Object.assign(w["~standard"],{jsonSchema:{input:WO(w,"input"),output:WO(w,"output")}}),w.toJSONSchema=RK(w,{}),w.def=O,w.type=O.type,Object.defineProperty(w,"_def",{value:O}),w.check=(...P)=>{return w.clone(W0.mergeDefs(O,{checks:[...O.checks??[],...P.map((b)=>typeof b==="function"?{_zod:{check:b,def:{check:"custom"},onattach:[]}}:b)]}),{parent:!0})},w.with=w.check,w.clone=(P,b)=>tv(w,P,b),w.brand=()=>w,w.register=(P,b)=>{return P.add(w,b),w},w.parse=(P,b)=>VK(w,P,b,{callee:w.parse}),w.safeParse=(P,b)=>_K(w,P,b),w.parseAsync=async(P,b)=>EK(w,P,b,{callee:w.parseAsync}),w.safeParseAsync=async(P,b)=>yK(w,P,b),w.spa=w.safeParseAsync,w.encode=(P,b)=>jK(w,P,b),w.decode=(P,b)=>iK(w,P,b),w.encodeAsync=async(P,b)=>fK(w,P,b),w.decodeAsync=async(P,b)=>nK(w,P,b),w.safeEncode=(P,b)=>eK(w,P,b),w.safeDecode=(P,b)=>cK(w,P,b),w.safeEncodeAsync=async(P,b)=>tK(w,P,b),w.safeDecodeAsync=async(P,b)=>pK(w,P,b),w.refine=(P,b)=>w.check(TZ(P,b)),w.superRefine=(P)=>w.check(CZ(P)),w.overwrite=(P)=>w.check(h5(P)),w.optional=()=>sK(w),w.exactOptional=()=>JZ(w),w.nullable=()=>g$(w),w.nullish=()=>sK(g$(w)),w.nonoptional=(P)=>LZ(w,P),w.array=()=>Rw(w),w.or=(P)=>WZ([w,P]),w.and=(P)=>XZ(w,P),w.transform=(P)=>v$(w,RZ(P)),w.default=(P)=>$Z(w,P),w.prefault=(P)=>UZ(w,P),w.catch=(P)=>BZ(w,P),w.pipe=(P)=>v$(w,P),w.readonly=()=>ZZ(w),w.describe=(P)=>{let b=w.clone();return z4.add(b,{description:P}),b},Object.defineProperty(w,"description",{get(){return z4.get(w)?.description},configurable:!0}),w.meta=(...P)=>{if(P.length===0)return z4.get(w);let b=w.clone();return z4.add(b,P[0]),b},w.isOptional=()=>w.safeParse(void 0).success,w.isNullable=()=>w.safeParse(null).success,w.apply=(P)=>P(w),w}),r$=E("_ZodString",(w,O)=>{OA.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(b,M,Y)=>hK(w,b,M,Y);let P=w._zod.bag;w.format=P.format??null,w.minLength=P.minimum??null,w.maxLength=P.maximum??null,w.regex=(...b)=>w.check(CM(...b)),w.includes=(...b)=>w.check(oM(...b)),w.startsWith=(...b)=>w.check(xM(...b)),w.endsWith=(...b)=>w.check(DM(...b)),w.min=(...b)=>w.check(m6(...b)),w.max=(...b)=>w.check(qA(...b)),w.length=(...b)=>w.check(AA(...b)),w.nonempty=(...b)=>w.check(m6(1,...b)),w.lowercase=(b)=>w.check(SM(b)),w.uppercase=(b)=>w.check(lM(b)),w.trim=()=>w.check(kM()),w.normalize=(...b)=>w.check(mM(...b)),w.toLowerCase=()=>w.check(VM()),w.toUpperCase=()=>w.check(EM()),w.slugify=()=>w.check(_M())}),EN=E("ZodString",(w,O)=>{OA.init(w,O),r$.init(w,O),w.email=(P)=>w.check(V3(_N,P)),w.url=(P)=>w.check(i3(yN,P)),w.jwt=(P)=>w.check(OK(wZ,P)),w.emoji=(P)=>w.check(f3(jN,P)),w.guid=(P)=>w.check(TM(dK,P)),w.uuid=(P)=>w.check(E3(bA,P)),w.uuidv4=(P)=>w.check(_3(bA,P)),w.uuidv6=(P)=>w.check(y3(bA,P)),w.uuidv7=(P)=>w.check(j3(bA,P)),w.nanoid=(P)=>w.check(n3(iN,P)),w.guid=(P)=>w.check(TM(dK,P)),w.cuid=(P)=>w.check(e3(fN,P)),w.cuid2=(P)=>w.check(c3(nN,P)),w.ulid=(P)=>w.check(t3(eN,P)),w.base64=(P)=>w.check(rK(gZ,P)),w.base64url=(P)=>w.check(wK(vZ,P)),w.xid=(P)=>w.check(p3(cN,P)),w.ksuid=(P)=>w.check(d3(tN,P)),w.ipv4=(P)=>w.check(a3(pN,P)),w.ipv6=(P)=>w.check(s3(dN,P)),w.cidrv4=(P)=>w.check(gK(aN,P)),w.cidrv6=(P)=>w.check(vK(sN,P)),w.e164=(P)=>w.check(HK(rZ,P)),w.datetime=(P)=>w.check(oK(P)),w.date=(P)=>w.check(xK(P)),w.time=(P)=>w.check(DK(P)),w.duration=(P)=>w.check(mK(P))});function _0(w){return k3(EN,w)}var N0=E("ZodStringFormat",(w,O)=>{F0.init(w,O),r$.init(w,O)}),_N=E("ZodEmail",(w,O)=>{cQ.init(w,O),N0.init(w,O)});var dK=E("ZodGUID",(w,O)=>{nQ.init(w,O),N0.init(w,O)});var bA=E("ZodUUID",(w,O)=>{eQ.init(w,O),N0.init(w,O)});var yN=E("ZodURL",(w,O)=>{tQ.init(w,O),N0.init(w,O)});var jN=E("ZodEmoji",(w,O)=>{pQ.init(w,O),N0.init(w,O)});var iN=E("ZodNanoID",(w,O)=>{dQ.init(w,O),N0.init(w,O)});var fN=E("ZodCUID",(w,O)=>{aQ.init(w,O),N0.init(w,O)});var nN=E("ZodCUID2",(w,O)=>{sQ.init(w,O),N0.init(w,O)});var eN=E("ZodULID",(w,O)=>{g3.init(w,O),N0.init(w,O)});var cN=E("ZodXID",(w,O)=>{v3.init(w,O),N0.init(w,O)});var tN=E("ZodKSUID",(w,O)=>{r3.init(w,O),N0.init(w,O)});var pN=E("ZodIPv4",(w,O)=>{A3.init(w,O),N0.init(w,O)});var dN=E("ZodIPv6",(w,O)=>{P3.init(w,O),N0.init(w,O)});var aN=E("ZodCIDRv4",(w,O)=>{b3.init(w,O),N0.init(w,O)});var sN=E("ZodCIDRv6",(w,O)=>{W3.init(w,O),N0.init(w,O)});var gZ=E("ZodBase64",(w,O)=>{X3.init(w,O),N0.init(w,O)});var vZ=E("ZodBase64URL",(w,O)=>{Y3.init(w,O),N0.init(w,O)});var rZ=E("ZodE164",(w,O)=>{G3.init(w,O),N0.init(w,O)});var wZ=E("ZodJWT",(w,O)=>{R3.init(w,O),N0.init(w,O)});var HZ=E("ZodUnknown",(w,O)=>{h3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>QK(w,P,b,M)});function aK(){return WK(HZ)}var OZ=E("ZodNever",(w,O)=>{J3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>JK(w,P,b,M)});function qZ(w){return MK(OZ,w)}var AZ=E("ZodArray",(w,O)=>{Q3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>LK(w,P,b,M),w.element=O.element,w.min=(P,b)=>w.check(m6(P,b)),w.nonempty=(P)=>w.check(m6(1,P)),w.max=(P,b)=>w.check(qA(P,b)),w.length=(P,b)=>w.check(AA(P,b)),w.unwrap=()=>w.element});function Rw(w,O){return XK(AZ,w,O)}var PZ=E("ZodObject",(w,O)=>{z3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>FK(w,P,b,M),W0.defineLazy(w,"shape",()=>{return O.shape}),w.keyof=()=>MO(Object.keys(w._zod.def.shape)),w.catchall=(P)=>w.clone({...w._zod.def,catchall:P}),w.passthrough=()=>w.clone({...w._zod.def,catchall:aK()}),w.loose=()=>w.clone({...w._zod.def,catchall:aK()}),w.strict=()=>w.clone({...w._zod.def,catchall:qZ()}),w.strip=()=>w.clone({...w._zod.def,catchall:void 0}),w.extend=(P)=>{return W0.extend(w,P)},w.safeExtend=(P)=>{return W0.safeExtend(w,P)},w.merge=(P)=>W0.merge(w,P),w.pick=(P)=>W0.pick(w,P),w.omit=(P)=>W0.omit(w,P),w.partial=(...P)=>W0.partial(w$,w,P[0]),w.required=(...P)=>W0.required(H$,w,P[0])});function U4(w,O){let P={type:"object",shape:w??{},...W0.normalizeParams(O)};return new PZ(P)}var bZ=E("ZodUnion",(w,O)=>{U3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>BK(w,P,b,M),w.options=O.options});function WZ(w,O){return new bZ({type:"union",options:w,...W0.normalizeParams(O)})}var MZ=E("ZodIntersection",(w,O)=>{L3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>IK(w,P,b,M)});function XZ(w,O){return new MZ({type:"intersection",left:w,right:O})}var nM=E("ZodEnum",(w,O)=>{F3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(b,M,Y)=>KK(w,b,M,Y),w.enum=O.entries,w.options=Object.values(O.entries);let P=new Set(Object.keys(O.entries));w.extract=(b,M)=>{let Y={};for(let G of b)if(P.has(G))Y[G]=O.entries[G];else throw Error(`Key ${G} not found in enum`);return new nM({...O,checks:[],...W0.normalizeParams(M),entries:Y})},w.exclude=(b,M)=>{let Y={...O.entries};for(let G of b)if(P.has(G))delete Y[G];else throw Error(`Key ${G} not found in enum`);return new nM({...O,checks:[],...W0.normalizeParams(M),entries:Y})}});function MO(w,O){let P=Array.isArray(w)?Object.fromEntries(w.map((b)=>[b,b])):w;return new nM({type:"enum",entries:P,...W0.normalizeParams(O)})}var YZ=E("ZodLiteral",(w,O)=>{B3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>$K(w,P,b,M),w.values=new Set(O.values),Object.defineProperty(w,"value",{get(){if(O.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return O.values[0]}})});function eM(w,O){return new YZ({type:"literal",values:Array.isArray(w)?w:[w],...W0.normalizeParams(O)})}var GZ=E("ZodTransform",(w,O)=>{I3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>UK(w,P,b,M),w._zod.parse=(P,b)=>{if(b.direction==="backward")throw new sH(w.constructor.name);P.addIssue=(Y)=>{if(typeof Y==="string")P.issues.push(W0.issue(Y,P.value,O));else{let G=Y;if(G.fatal)G.continue=!1;G.code??(G.code="custom"),G.input??(G.input=P.value),G.inst??(G.inst=w),P.issues.push(W0.issue(G))}};let M=O.transform(P.value,P);if(M instanceof Promise)return M.then((Y)=>{return P.value=Y,P});return P.value=M,P}});function RZ(w){return new GZ({type:"transform",transform:w})}var w$=E("ZodOptional",(w,O)=>{uM.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>fM(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function sK(w){return new w$({type:"optional",innerType:w})}var hZ=E("ZodExactOptional",(w,O)=>{N3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>fM(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function JZ(w){return new hZ({type:"optional",innerType:w})}var QZ=E("ZodNullable",(w,O)=>{Z3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>NK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function g$(w){return new QZ({type:"nullable",innerType:w})}var KZ=E("ZodDefault",(w,O)=>{u3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>uK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType,w.removeDefault=w.unwrap});function $Z(w,O){return new KZ({type:"default",innerType:w,get defaultValue(){return typeof O==="function"?O():W0.shallowClone(O)}})}var zZ=E("ZodPrefault",(w,O)=>{T3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>TK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function UZ(w,O){return new zZ({type:"prefault",innerType:w,get defaultValue(){return typeof O==="function"?O():W0.shallowClone(O)}})}var H$=E("ZodNonOptional",(w,O)=>{C3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>ZK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function LZ(w,O){return new H$({type:"nonoptional",innerType:w,...W0.normalizeParams(O)})}var FZ=E("ZodCatch",(w,O)=>{S3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>CK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType,w.removeCatch=w.unwrap});function BZ(w,O){return new FZ({type:"catch",innerType:w,catchValue:typeof O==="function"?O:()=>O})}var IZ=E("ZodPipe",(w,O)=>{l3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>SK(w,P,b,M),w.in=O.in,w.out=O.out});function v$(w,O){return new IZ({type:"pipe",in:w,out:O})}var NZ=E("ZodReadonly",(w,O)=>{o3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>lK(w,P,b,M),w.unwrap=()=>w._zod.def.innerType});function ZZ(w){return new NZ({type:"readonly",innerType:w})}var uZ=E("ZodCustom",(w,O)=>{x3.init(w,O),d0.init(w,O),w._zod.processJSONSchema=(P,b,M)=>zK(w,P,b,M)});function TZ(w,O={}){return YK(uZ,w,O)}function CZ(w){return GK(w)}var O$=U4({type:MO(["character","chat"]),characterId:_0().optional(),chatId:_0().optional(),displayName:_0().default("")}),q$=U4({description:_0().optional(),author:_0().optional(),version:_0().optional(),tags:Rw(_0()).optional()}),SZ=U4({name:_0().min(1).max(200),code:_0(),type:MO(["trigger","library"]),triggers:Rw(_0()).optional(),bindings:Rw(O$).optional(),folder:_0().optional(),metadata:q$.optional()}),A$=U4({format:eM("lumiscript-pack-v1"),exportedAt:_0(),scripts:Rw(SZ).min(1).max(100)}),lZ=U4({name:_0().min(1).max(200),file:_0().min(1),type:MO(["trigger","library"]),triggers:Rw(_0()).optional(),bindings:Rw(O$).optional(),folder:_0().optional(),metadata:q$.optional()}),_f0=U4({format:eM("lumiscript-manifest-v1"),sourcePack:_0().optional(),sourceFormat:_0().optional(),exportedAt:_0().optional(),convertedAt:_0().optional(),scripts:Rw(lZ).min(1).max(100)});var P$=1048576;async function b$(w){let O=new Uint8Array(await w.arrayBuffer()),P;try{P=TJ(O)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let b=P["pack.json"];if(!b)throw Error("Invalid script pack: missing pack.json");if(b.byteLength>P$)throw Error(`Pack exceeds the ${P$/1024/1024} MB decompressed size limit`);let M=JM(b),Y;try{Y=JSON.parse(M)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return A$.parse(Y).scripts}var r0=Xg(sg(),1);function oZ(w){let P="";for(let b=0;b<w.length;b+=32768)P+=String.fromCharCode(...w.subarray(b,b+32768));return btoa(P)}function xZ(w){let O=new Map;for(let M of w){let Y=M.folder??"";if(!O.has(Y))O.set(Y,[]);O.get(Y).push(M)}let P=new Map;if(O.has(""))P.set("",O.get(""));let b=[...O.keys()].filter((M)=>M!=="").sort();for(let M of b)P.set(M,O.get(M));return P}var WA=({scripts:w,selectedId:O,execInfo:P,onSelect:b,onEdit:M,sendToBackend:Y})=>{let[G,R]=XO.useState("trigger"),[$,U]=XO.useState(new Set),z=XO.useRef(null),J=w.filter((e)=>e.type===G),L=xZ(J),l=L.size>1||L.size===1&&!L.has(""),t=(e)=>{U((a)=>{let Pg=new Set(a);if(Pg.has(e))Pg.delete(e);else Pg.add(e);return Pg})},j=()=>{let e=G==="library"?"Library name:":"Script name:",a=window.prompt(e);if(!a?.trim())return;Y({type:"create_script",name:a.trim(),scriptType:G})},s=(e)=>{if(J.length===0)return;if(e.shiftKey){let Pg=QM(J);Y({type:"save_pack_to_disk",bytesB64:oZ(Pg),scriptType:G});return}let a=window.prompt("Pack name:","my-scripts");if(!a?.trim())return;CJ(J,a.trim())},_=()=>{z.current?.click()},Mg=async(e)=>{let a=e.target.files?.[0];if(!a)return;e.target.value="";try{let Pg=await b$(a),rg=(m)=>m==="library"?"[L]":"[T]",d=Pg.map((m)=>`  ${rg(m.type)} ${m.name}`).join(`
`);if(!window.confirm(`Import ${Pg.length} script${Pg.length>1?"s":""}?

${d}

Imported scripts will be disabled. Review and enable them manually.`))return;Y({type:"import_scripts",entries:Pg})}catch(Pg){window.alert(`Import failed: ${Pg instanceof Error?Pg.message:String(Pg)}`)}},qg=(e)=>{let a=P[e.id];return r0.jsxDEV(RJ,{script:e,selected:e.id===O,dot:a?.dot??"idle",duration:a?.duration,onSelect:()=>b(e.id),onEdit:()=>M(e.id),sendToBackend:Y},e.id,!1,void 0,this)};return r0.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[r0.jsxDEV("div",{className:"ls-list-header",children:[r0.jsxDEV("div",{className:"ls-list-type-tabs",children:[r0.jsxDEV("button",{className:`ls-type-tab${G==="trigger"?" ls-active":""}`,onClick:()=>R("trigger"),title:"Scripts",children:r0.jsxDEV(S1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),r0.jsxDEV("button",{className:`ls-type-tab${G==="library"?" ls-active":""}`,onClick:()=>R("library"),title:"Libraries",children:r0.jsxDEV(Y4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r0.jsxDEV("div",{className:"ls-list-actions",children:[r0.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Import script pack",children:r0.jsxDEV(eH,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),r0.jsxDEV("button",{className:"ls-icon-btn",onClick:s,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:J.length===0,children:r0.jsxDEV(G4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),r0.jsxDEV("button",{className:"ls-icon-btn",onClick:j,title:"New script",children:r0.jsxDEV(VH,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r0.jsxDEV("input",{ref:z,type:"file",accept:".zip",style:{display:"none"},onChange:Mg},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r0.jsxDEV("div",{className:"ls-list-body",children:J.length===0?r0.jsxDEV("div",{className:"ls-list-empty",children:[r0.jsxDEV(Zr,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),r0.jsxDEV("p",{children:["No ",G==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),r0.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):l?[...L.entries()].map(([e,a])=>{let Pg=$.has(e);return e===""?r0.jsxDEV("div",{children:a.map(qg)},"__unfiled",!1,void 0,this):r0.jsxDEV("div",{className:"ls-folder-group",children:[r0.jsxDEV("button",{className:"ls-folder-header",onClick:()=>t(e),children:[Pg?r0.jsxDEV(Aw,{size:11},void 0,!1,void 0,this):r0.jsxDEV(l1,{size:11},void 0,!1,void 0,this),r0.jsxDEV(R4,{size:11},void 0,!1,void 0,this),r0.jsxDEV("span",{className:"ls-folder-name",children:e},void 0,!1,void 0,this),r0.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(rg)=>{rg.stopPropagation();let d=window.prompt("Rename folder:",e);if(d===null||d.trim()===""||d.trim()===e)return;for(let wg of a)Y({type:"update_script",id:wg.id,patch:{folder:d.trim()}})},children:r0.jsxDEV(h4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),r0.jsxDEV("span",{className:"ls-folder-count",children:a.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!Pg&&a.map(qg)]},`folder-${e}`,!0,void 0,this)}):J.map(qg)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var QO=Xg(O0(),1),c$=Xg($H(),1);var h1=Xg(O0(),1);function W$(w,O){(O==null||O>w.length)&&(O=w.length);for(var P=0,b=Array(O);P<O;P++)b[P]=w[P];return b}function DZ(w){if(Array.isArray(w))return w}function mZ(w,O,P){return(O=yZ(O))in w?Object.defineProperty(w,O,{value:P,enumerable:!0,configurable:!0,writable:!0}):w[O]=P,w}function kZ(w,O){var P=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(P!=null){var b,M,Y,G,R=[],$=!0,U=!1;try{if(Y=(P=P.call(w)).next,O===0);else for(;!($=(b=Y.call(P)).done)&&(R.push(b.value),R.length!==O);$=!0);}catch(z){U=!0,M=z}finally{try{if(!$&&P.return!=null&&(G=P.return(),Object(G)!==G))return}finally{if(U)throw M}}return R}}function VZ(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M$(w,O){var P=Object.keys(w);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(w);O&&(b=b.filter(function(M){return Object.getOwnPropertyDescriptor(w,M).enumerable})),P.push.apply(P,b)}return P}function cM(w){for(var O=1;O<arguments.length;O++){var P=arguments[O]!=null?arguments[O]:{};O%2?M$(Object(P),!0).forEach(function(b){mZ(w,b,P[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(P)):M$(Object(P)).forEach(function(b){Object.defineProperty(w,b,Object.getOwnPropertyDescriptor(P,b))})}return w}function X$(w,O){if(w==null)return{};var P,b,M=EZ(w,O);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(w);for(b=0;b<Y.length;b++)P=Y[b],O.indexOf(P)===-1&&{}.propertyIsEnumerable.call(w,P)&&(M[P]=w[P])}return M}function EZ(w,O){if(w==null)return{};var P={};for(var b in w)if({}.hasOwnProperty.call(w,b)){if(O.indexOf(b)!==-1)continue;P[b]=w[b]}return P}function Y$(w,O){return DZ(w)||kZ(w,O)||jZ(w,O)||VZ()}function _Z(w,O){if(typeof w!="object"||!w)return w;var P=w[Symbol.toPrimitive];if(P!==void 0){var b=P.call(w,O);if(typeof b!="object")return b;throw TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(w)}function yZ(w){var O=_Z(w,"string");return typeof O=="symbol"?O:O+""}function jZ(w,O){if(w){if(typeof w=="string")return W$(w,O);var P={}.toString.call(w).slice(8,-1);return P==="Object"&&w.constructor&&(P=w.constructor.name),P==="Map"||P==="Set"?Array.from(w):P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)?W$(w,O):void 0}}function iZ(w,O,P){if(O in w)Object.defineProperty(w,O,{value:P,enumerable:!0,configurable:!0,writable:!0});else w[O]=P;return w}function G$(w,O){var P=Object.keys(w);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(w);if(O)b=b.filter(function(M){return Object.getOwnPropertyDescriptor(w,M).enumerable});P.push.apply(P,b)}return P}function R$(w){for(var O=1;O<arguments.length;O++){var P=arguments[O]!=null?arguments[O]:{};if(O%2)G$(Object(P),!0).forEach(function(b){iZ(w,b,P[b])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(w,Object.getOwnPropertyDescriptors(P));else G$(Object(P)).forEach(function(b){Object.defineProperty(w,b,Object.getOwnPropertyDescriptor(P,b))})}return w}function fZ(){for(var w=arguments.length,O=Array(w),P=0;P<w;P++)O[P]=arguments[P];return function(b){return O.reduceRight(function(M,Y){return Y(M)},b)}}function YO(w){return function O(){var P=this;for(var b=arguments.length,M=Array(b),Y=0;Y<b;Y++)M[Y]=arguments[Y];return M.length>=w.length?w.apply(this,M):function(){for(var G=arguments.length,R=Array(G),$=0;$<G;$++)R[$]=arguments[$];return O.apply(P,[].concat(M,R))}}}function XA(w){return{}.toString.call(w).includes("Object")}function nZ(w){return!Object.keys(w).length}function GO(w){return typeof w==="function"}function eZ(w,O){return Object.prototype.hasOwnProperty.call(w,O)}function cZ(w,O){if(!XA(O))J5("changeType");if(Object.keys(O).some(function(P){return!eZ(w,P)}))J5("changeField");return O}function tZ(w){if(!GO(w))J5("selectorType")}function pZ(w){if(!(GO(w)||XA(w)))J5("handlerType");if(XA(w)&&Object.values(w).some(function(O){return!GO(O)}))J5("handlersType")}function dZ(w){if(!w)J5("initialIsRequired");if(!XA(w))J5("initialType");if(nZ(w))J5("initialContent")}function aZ(w,O){throw Error(w[O]||w.default)}var sZ={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},J5=YO(aZ)(sZ),MA={changes:cZ,selector:tZ,handler:pZ,initial:dZ};function gu(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};MA.initial(w),MA.handler(O);var P={current:w},b=YO(wu)(P,O),M=YO(ru)(P),Y=YO(MA.changes)(w),G=YO(vu)(P);function R(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(z){return z};return MA.selector(U),U(P.current)}function $(U){fZ(b,M,Y,G)(U)}return[R,$]}function vu(w,O){return GO(O)?O(w.current):O}function ru(w,O){return w.current=R$(R$({},w.current),O),O}function wu(w,O,P){return GO(O)?O(w.current):Object.keys(P).forEach(function(b){var M;return(M=O[b])===null||M===void 0?void 0:M.call(O,w.current[b])}),P}var Hu={create:gu},h$=Hu;var J$={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Q$(w){return function O(){var P=this;for(var b=arguments.length,M=Array(b),Y=0;Y<b;Y++)M[Y]=arguments[Y];return M.length>=w.length?w.apply(this,M):function(){for(var G=arguments.length,R=Array(G),$=0;$<G;$++)R[$]=arguments[$];return O.apply(P,[].concat(M,R))}}}function K$(w){return{}.toString.call(w).includes("Object")}function Ou(w){if(!w)$$("configIsRequired");if(!K$(w))$$("configType");if(w.urls)return qu(),{paths:{vs:w.urls.monacoBase}};return w}function qu(){console.warn(z$.deprecation)}function Au(w,O){throw Error(w[O]||w.default)}var z$={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},$$=Q$(Au)(z$),U$={config:Ou};var L$=function(){for(var O=arguments.length,P=Array(O),b=0;b<O;b++)P[b]=arguments[b];return function(M){return P.reduceRight(function(Y,G){return G(Y)},M)}};function tM(w,O){return Object.keys(O).forEach(function(P){if(O[P]instanceof Object){if(w[P])Object.assign(O[P],tM(w[P],O[P]))}}),cM(cM({},w),O)}var Pu={type:"cancelation",msg:"operation is manually canceled"};function YA(w){var O=!1,P=new Promise(function(b,M){w.then(function(Y){return O?M(Pu):b(Y)}),w.catch(M)});return P.cancel=function(){return O=!0},P}var bu=["monaco"],Wu=h$.create({config:J$,isInitialized:!1,resolve:null,reject:null,monaco:null}),F$=Y$(Wu,2),RO=F$[0],GA=F$[1];function Mu(w){var O=U$.config(w),P=O.monaco,b=X$(O,bu);GA(function(M){return{config:tM(M.config,b),monaco:P}})}function Xu(){var w=RO(function(O){var{monaco:P,isInitialized:b,resolve:M}=O;return{monaco:P,isInitialized:b,resolve:M}});if(!w.isInitialized){if(GA({isInitialized:!0}),w.monaco)return w.resolve(w.monaco),YA(pM);if(window.monaco&&window.monaco.editor)return B$(window.monaco),w.resolve(window.monaco),YA(pM);L$(Yu,Ru)(hu)}return YA(pM)}function Yu(w){return document.body.appendChild(w)}function Gu(w){var O=document.createElement("script");return w&&(O.src=w),O}function Ru(w){var O=RO(function(b){var{config:M,reject:Y}=b;return{config:M,reject:Y}}),P=Gu("".concat(O.config.paths.vs,"/loader.js"));return P.onload=function(){return w()},P.onerror=O.reject,P}function hu(){var w=RO(function(P){var{config:b,resolve:M,reject:Y}=P;return{config:b,resolve:M,reject:Y}}),O=window.require;O.config(w.config),O(["vs/editor/editor.main"],function(P){var b=P.m||P;B$(b),w.resolve(b)},function(P){w.reject(P)})}function B$(w){if(!RO().monaco)GA({monaco:w})}function Ju(){return RO(function(w){var O=w.monaco;return O})}var pM=new Promise(function(w,O){return GA({resolve:w,reject:O})}),L4={config:Mu,init:Xu,__getMonacoInstance:Ju};var I$=Xg(O0(),1),P1=Xg(O0(),1);var N$=Xg(O0(),1),hA=Xg(O0(),1),Z$=Xg(O0(),1),T$=Xg(O0(),1),JA=Xg(O0(),1),Su=Xg(O0(),1);var l$=Xg(O0(),1),m0=Xg(O0(),1);var QA=Xg(O0(),1),Qu={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},dM=Qu,Ku={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},$u=Ku;function zu({children:w}){return Z$.default.createElement("div",{style:$u.container},w)}var Uu=zu,Lu=Uu;function Fu({width:w,height:O,isEditorReady:P,loading:b,_ref:M,className:Y,wrapperProps:G}){return hA.default.createElement("section",{style:{...dM.wrapper,width:w,height:O},...G},!P&&hA.default.createElement(Lu,null,b),hA.default.createElement("div",{ref:M,style:{...dM.fullWidth,...!P&&dM.hide},className:Y}))}var Bu=Fu,u$=N$.memo(Bu);function Iu(w){T$.useEffect(w,[])}var C$=Iu;function Nu(w,O,P=!0){let b=JA.useRef(!0);JA.useEffect(b.current||!P?()=>{b.current=!1}:w,O)}var Gv=Nu;function hO(){}function k6(w,O,P,b){return Zu(w,b)||uu(w,O,P,b)}function Zu(w,O){return w.editor.getModel(S$(w,O))}function uu(w,O,P,b){return w.editor.createModel(O,P,b?S$(w,b):void 0)}function S$(w,O){return w.Uri.parse(O)}function Tu({original:w,modified:O,language:P,originalLanguage:b,modifiedLanguage:M,originalModelPath:Y,modifiedModelPath:G,keepCurrentOriginalModel:R=!1,keepCurrentModifiedModel:$=!1,theme:U="light",loading:z="Loading...",options:J={},height:L="100%",width:l="100%",className:t,wrapperProps:j={},beforeMount:s=hO,onMount:_=hO}){let[Mg,qg]=P1.useState(!1),[e,a]=P1.useState(!0),Pg=P1.useRef(null),rg=P1.useRef(null),d=P1.useRef(null),wg=P1.useRef(_),m=P1.useRef(s),Bg=P1.useRef(!1);C$(()=>{let V=L4.init();return V.then((p)=>(rg.current=p)&&a(!1)).catch((p)=>p?.type!=="cancelation"&&console.error("Monaco initialization: error:",p)),()=>Pg.current?Vg():V.cancel()}),Gv(()=>{if(Pg.current&&rg.current){let V=Pg.current.getOriginalEditor(),p=k6(rg.current,w||"",b||P||"text",Y||"");p!==V.getModel()&&V.setModel(p)}},[Y],Mg),Gv(()=>{if(Pg.current&&rg.current){let V=Pg.current.getModifiedEditor(),p=k6(rg.current,O||"",M||P||"text",G||"");p!==V.getModel()&&V.setModel(p)}},[G],Mg),Gv(()=>{let V=Pg.current.getModifiedEditor();V.getOption(rg.current.editor.EditorOption.readOnly)?V.setValue(O||""):O!==V.getValue()&&(V.executeEdits("",[{range:V.getModel().getFullModelRange(),text:O||"",forceMoveMarkers:!0}]),V.pushUndoStop())},[O],Mg),Gv(()=>{Pg.current?.getModel()?.original.setValue(w||"")},[w],Mg),Gv(()=>{let{original:V,modified:p}=Pg.current.getModel();rg.current.editor.setModelLanguage(V,b||P||"text"),rg.current.editor.setModelLanguage(p,M||P||"text")},[P,b,M],Mg),Gv(()=>{rg.current?.editor.setTheme(U)},[U],Mg),Gv(()=>{Pg.current?.updateOptions(J)},[J],Mg);let Jg=P1.useCallback(()=>{if(!rg.current)return;m.current(rg.current);let V=k6(rg.current,w||"",b||P||"text",Y||""),p=k6(rg.current,O||"",M||P||"text",G||"");Pg.current?.setModel({original:V,modified:p})},[P,O,M,w,b,Y,G]),Kg=P1.useCallback(()=>{!Bg.current&&d.current&&(Pg.current=rg.current.editor.createDiffEditor(d.current,{automaticLayout:!0,...J}),Jg(),rg.current?.editor.setTheme(U),qg(!0),Bg.current=!0)},[J,U,Jg]);P1.useEffect(()=>{Mg&&wg.current(Pg.current,rg.current)},[Mg]),P1.useEffect(()=>{!e&&!Mg&&Kg()},[e,Mg,Kg]);function Vg(){let V=Pg.current?.getModel();R||V?.original?.dispose(),$||V?.modified?.dispose(),Pg.current?.dispose()}return P1.default.createElement(u$,{width:l,height:L,isEditorReady:Mg,loading:z,_ref:d,className:t,wrapperProps:j})}var Cu=Tu,Un0=I$.memo(Cu);function lu(w){let O=QA.useRef();return QA.useEffect(()=>{O.current=w},[w]),O.current}var ou=lu,RA=new Map;function xu({defaultValue:w,defaultLanguage:O,defaultPath:P,value:b,language:M,path:Y,theme:G="light",line:R,loading:$="Loading...",options:U={},overrideServices:z={},saveViewState:J=!0,keepCurrentModel:L=!1,width:l="100%",height:t="100%",className:j,wrapperProps:s={},beforeMount:_=hO,onMount:Mg=hO,onChange:qg,onValidate:e=hO}){let[a,Pg]=m0.useState(!1),[rg,d]=m0.useState(!0),wg=m0.useRef(null),m=m0.useRef(null),Bg=m0.useRef(null),Jg=m0.useRef(Mg),Kg=m0.useRef(_),Vg=m0.useRef(),V=m0.useRef(b),p=ou(Y),vg=m0.useRef(!1),i=m0.useRef(!1);C$(()=>{let c=L4.init();return c.then((Gg)=>(wg.current=Gg)&&d(!1)).catch((Gg)=>Gg?.type!=="cancelation"&&console.error("Monaco initialization: error:",Gg)),()=>m.current?S():c.cancel()}),Gv(()=>{let c=k6(wg.current,w||b||"",O||M||"",Y||P||"");c!==m.current?.getModel()&&(J&&RA.set(p,m.current?.saveViewState()),m.current?.setModel(c),J&&m.current?.restoreViewState(RA.get(Y)))},[Y],a),Gv(()=>{m.current?.updateOptions(U)},[U],a),Gv(()=>{!m.current||b===void 0||(m.current.getOption(wg.current.editor.EditorOption.readOnly)?m.current.setValue(b):b!==m.current.getValue()&&(i.current=!0,m.current.executeEdits("",[{range:m.current.getModel().getFullModelRange(),text:b,forceMoveMarkers:!0}]),m.current.pushUndoStop(),i.current=!1))},[b],a),Gv(()=>{let c=m.current?.getModel();c&&M&&wg.current?.editor.setModelLanguage(c,M)},[M],a),Gv(()=>{R!==void 0&&m.current?.revealLine(R)},[R],a),Gv(()=>{wg.current?.editor.setTheme(G)},[G],a);let Wg=m0.useCallback(()=>{if(!(!Bg.current||!wg.current)&&!vg.current){Kg.current(wg.current);let c=Y||P,Gg=k6(wg.current,b||w||"",O||M||"",c||"");m.current=wg.current?.editor.create(Bg.current,{model:Gg,automaticLayout:!0,...U},z),J&&m.current.restoreViewState(RA.get(c)),wg.current.editor.setTheme(G),R!==void 0&&m.current.revealLine(R),Pg(!0),vg.current=!0}},[w,O,P,b,M,Y,U,z,J,G,R]);m0.useEffect(()=>{a&&Jg.current(m.current,wg.current)},[a]),m0.useEffect(()=>{!rg&&!a&&Wg()},[rg,a,Wg]),V.current=b,m0.useEffect(()=>{a&&qg&&(Vg.current?.dispose(),Vg.current=m.current?.onDidChangeModelContent((c)=>{i.current||qg(m.current.getValue(),c)}))},[a,qg]),m0.useEffect(()=>{if(a){let c=wg.current.editor.onDidChangeMarkers((Gg)=>{let Qg=m.current.getModel()?.uri;if(Qg&&Gg.find((Lg)=>Lg.path===Qg.path)){let Lg=wg.current.editor.getModelMarkers({resource:Qg});e?.(Lg)}});return()=>{c?.dispose()}}return()=>{}},[a,e]);function S(){Vg.current?.dispose(),L?J&&RA.set(Y,m.current.saveViewState()):m.current.getModel()?.dispose(),m.current.dispose()}return m0.default.createElement(u$,{width:l,height:t,isEditorReady:a,loading:$,_ref:Bg,className:j,wrapperProps:s})}var Du=xu,mu=l$.memo(Du),o$=mu;var V6=Xg(O0(),1);var b1=Xg(sg(),1),ku={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},x$=({entries:w,isRunning:O,onClear:P})=>{let[b,M]=V6.useState(!1),Y=V6.useRef(null);V6.useEffect(()=>{if(!b&&Y.current)Y.current.scrollTop=Y.current.scrollHeight},[w,b]);let G=()=>{let R=w.filter(($)=>$.type!=="separator").map(($)=>`[${$.timestamp}] ${$.type.toUpperCase()}: ${$.message}`).join(`
`);navigator.clipboard.writeText(R).catch(()=>{})};return b1.jsxDEV("div",{className:`ls-console${b?" ls-collapsed":""}`,children:[b1.jsxDEV("div",{className:"ls-console-header",onClick:()=>M((R)=>!R),children:[b1.jsxDEV(ur,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-console-title",children:["Console",O?" — running…":w.length>0?` (${w.length})`:""]},void 0,!0,void 0,this),b1.jsxDEV("button",{className:"ls-icon-btn",onClick:(R)=>{R.stopPropagation(),G()},title:"Copy output",disabled:w.length===0,children:b1.jsxDEV(Pw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),b1.jsxDEV("button",{className:"ls-icon-btn",onClick:(R)=>{R.stopPropagation(),P()},title:"Clear console",disabled:w.length===0,children:b1.jsxDEV(n1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),b?b1.jsxDEV(l1,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):b1.jsxDEV(iv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&b1.jsxDEV("div",{className:"ls-console-output",ref:Y,children:w.length===0?b1.jsxDEV("div",{className:"ls-console-empty",children:O?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):w.map((R,$)=>R.type==="separator"?b1.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},$,!1,void 0,this):b1.jsxDEV("div",{className:`ls-entry ${ku[R.type]??"ls-log"}`,children:[b1.jsxDEV("span",{className:"ls-entry-time",children:R.timestamp},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-entry-type",children:R.type.toUpperCase()},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-entry-msg",children:R.message},void 0,!1,void 0,this)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var D1=Xg(sg(),1),D$=({bindings:w,activeContext:O,onAdd:P,onRemove:b})=>{let M=()=>{let{characterId:G,characterName:R}=O;if(!G)return;if(w.some(($)=>$.type==="character"&&$.characterId===G))return;P({type:"character",characterId:G,displayName:R??G})},Y=()=>{let{chatId:G,characterName:R}=O;if(!G)return;if(w.some((U)=>U.type==="chat"&&U.chatId===G))return;let $=R?`${R} — ${G.slice(0,8)}`:G.slice(0,8);P({type:"chat",chatId:G,displayName:$})};return D1.jsxDEV("div",{className:"ls-bindings",children:D1.jsxDEV("div",{className:"ls-bindings-row",children:[D1.jsxDEV(lH,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),w.length===0?D1.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):w.map((G,R)=>D1.jsxDEV("span",{className:"ls-binding-chip",children:[G.type==="character"?D1.jsxDEV(l6,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):D1.jsxDEV(C6,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),D1.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:G.displayName},void 0,!1,void 0,this),D1.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>b(R),title:"Remove binding",children:D1.jsxDEV(nv,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},R,!0,void 0,this)),D1.jsxDEV("button",{className:"ls-bindings-add",onClick:M,disabled:!O.characterId,title:O.characterId?"Bind to current character":"Open a chat first",children:[D1.jsxDEV(l6,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),D1.jsxDEV("button",{className:"ls-bindings-add",onClick:Y,disabled:!O.chatId,title:O.chatId?"Bind to current chat":"Open a chat first",children:[D1.jsxDEV(C6,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var m$=Xg(O0(),1);var e1=Xg(sg(),1),k$=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],ln0=k$.flatMap((w)=>w.events.map((O)=>O.name)),V$=({scriptId:w,triggers:O,sendToBackend:P})=>{let[b,M]=m$.useState(!0),Y=new Set(O),G=(R)=>{let $=Y.has(R)?O.filter((U)=>U!==R):[...O,R];P({type:"update_script",id:w,patch:{triggers:$}})};return e1.jsxDEV("div",{className:`ls-triggers${b?" ls-triggers-collapsed":""}`,children:[e1.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>M((R)=>!R),children:[e1.jsxDEV(bw,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),e1.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),Y.size>0&&e1.jsxDEV("span",{className:"ls-triggers-count",children:Y.size},void 0,!1,void 0,this),e1.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:b?e1.jsxDEV(l1,{size:12},void 0,!1,void 0,this):e1.jsxDEV(iv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&e1.jsxDEV("div",{className:"ls-triggers-body",children:k$.map((R)=>e1.jsxDEV("div",{className:"ls-trigger-group",children:[e1.jsxDEV("span",{className:"ls-trigger-group-label",children:R.label},void 0,!1,void 0,this),e1.jsxDEV("div",{className:"ls-trigger-chips",children:R.events.map(($)=>e1.jsxDEV("button",{className:`ls-trigger-chip${Y.has($.name)?" ls-trigger-chip-active":""}`,onClick:()=>G($.name),title:$.description,children:$.name},$.name,!1,void 0,this))},void 0,!1,void 0,this)]},R.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var E$=`
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
   * handle for subsequent setLabel / setEnabled / onClick / destroy calls.
   * Same-id re-registration silently replaces the existing entry — safe to
   * call from recurring event handlers (e.g. SETTINGS_UPDATED).
   * Host limits: 4 per extension, 12 global.
   * @example
   * const action = api.ui.registerInputBarAction({
   *   id: 'summarize', label: 'Summarize chat', iconSvg: '<svg>...</svg>',
   * });
   * action.onClick(() => { ... });
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
  /** Inline SVG string (sanitized). Rendered at 14x14. */
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
`;var i$=Xg(O0(),1);function _$(w){return w.split("`").map((P,b)=>{if(b%2===1)return P;return P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function Vu(w){return w.split("`").map((b,M)=>{if(M%2===1)return b;return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Q5(w,O){let P=`| ${w.join(" | ")} |`,b=`| ${w.map(()=>"---").join(" | ")} |`,M=O.map((Y)=>`| ${Y.map(Vu).join(" | ")} |`);return[P,b,...M].join(`
`)}function Eu(w){return w.optional&&!w.field.endsWith("?")?`${w.field}?`:w.field}function _u(w){if(w==="silent")return"*silent*";if(w==="boolean")return'`"true" / "false"`';return"`string`"}function yu(w){return w.aliases==="—"?"—":`\`${w.aliases}\``}function ju(w){let O=w.perms.length===0&&!w.note?"*none*":w.perms.map((P)=>`\`${P}\``).join(", ");return w.note?`${O}${w.perms.length?" ":""}${w.note}`:O}function iu(){return`## Lumiverse Events

${Q5(["Event","Group","Payload shape"],aM.map((O)=>[`\`${O.name}\``,O.group,`\`${O.payload}\``]))}`}function fu(){return`## Permission Matrix

${sM.map((O)=>{let P=Q5(["Method","Required permissions"],O.rows.map((b)=>[`\`${b.method}\``,ju(b)]));return`### ${O.group}

${P}`}).join(`

`)}`}function nu(){let w=Q5(["Event","Payload fields","Emitted by"],g9.map((P)=>[`\`${P.name}\``,`\`${P.payload}\``,P.emittedBy])),O="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${w}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function eu(){let w=v9.map((P)=>{let b=Q5(["Macro","Aliases","Returns","Description"],P.rows.map((Y)=>[`\`${Y.macro}\``,yu(Y),_u(Y.returns),Y.desc])),M=[`### ${P.label}`];if(P.description)M.push(`*${P.description}*`);return M.push(b),M.join(`

`)}),O='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${w.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function cu(){return`## Key Types

${r9.map((w)=>y$(w)).join(`

`)}`}function y$(w,O="###"){let P=_$(w.name),b=w.note?`*${_$(w.note)}*

`:"",M=Q5(["Field","Type","Description"],w.fields.map((Y)=>[`\`${Eu(Y)}\``,`\`${Y.type}\``,Y.desc]));return`${O} ${P}

${b}${M}`}function tu(){return`## API Functions

${w9.map((O)=>{let P=Q5(["Method","Arguments","Description"],O.rows.map((b)=>[`\`${b.name}\``,b.args,b.desc]));return`### ${O.group}

${P}`}).join(`

`)}`}function pu(){let O=Q5(["Method","Arguments","Description"],H9.map((M)=>[`\`${M.name}\``,M.args,M.desc])),P=Q5(["Method","Arguments","Description"],O9.map((M)=>[`\`${M.name}\``,M.args,M.desc])),b=q9.map((M)=>y$(M,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",O,"","### ls:council-prompt","",P,"","### Built-in types","",b].join(`
`)}function du(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function au(){let O=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,P=[iu(),fu(),nu(),eu(),cu(),tu(),pu(),du()];return`${O}

---

${P.join(`

---

`)}
`}function j$(){let w=au(),P=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,b=new Blob([w],{type:"text/markdown;charset=utf-8"}),M=URL.createObjectURL(b),Y=document.createElement("a");Y.href=M,Y.download=P,Y.click(),URL.revokeObjectURL(M)}var N=Xg(sg(),1),K5=({icon:w,title:O,defaultOpen:P=!1,children:b})=>{let[M,Y]=i$.useState(P);return N.jsxDEV("div",{className:"ls-ref-section",children:[N.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>Y((G)=>!G),children:[N.jsxDEV("span",{className:"ls-ref-section-title",children:[w,O]},void 0,!0,void 0,this),M?N.jsxDEV(l1,{size:12},void 0,!1,void 0,this):N.jsxDEV(Aw,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M&&N.jsxDEV("div",{className:"ls-ref-section-body",children:b},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},z0=({children:w})=>N.jsxDEV("code",{className:"ls-ref-code",children:w},void 0,!1,void 0,this),su=({children:w})=>N.jsxDEV("span",{className:"ls-ref-perm",children:w},void 0,!1,void 0,this),gT=()=>N.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),vT=()=>N.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),JO=({label:w,cols:O})=>N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:O,className:"ls-ref-group-header",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),aM=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],rT=()=>{let w="";return N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:aM.map((O)=>{let P=O.group!==w?O.group:"";return w=O.group,N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:P},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},O.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},sM=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.*",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],wT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:sM.map((w)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(JO,{label:w.group,cols:2},`hdr-${w.group}`,!1,void 0,this),w.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:[O.perms.length===0&&!O.note?N.jsxDEV(gT,{},void 0,!1,void 0,this):null,O.perms.map((P)=>N.jsxDEV(su,{children:P},P,!1,void 0,this)),O.note?N.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:O.perms.length?4:0},children:O.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},O.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),g9=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],HT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:g9.map((w)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v9=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],OT=({type:w})=>{if(w==="silent")return N.jsxDEV(vT,{},void 0,!1,void 0,this);if(w==="boolean")return N.jsxDEV(z0,{children:'"true" / "false"'},void 0,!1,void 0,this);return N.jsxDEV(z0,{children:"string"},void 0,!1,void 0,this)},qT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:v9.map((w)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(JO,{label:w.description?N.jsxDEV(N.Fragment,{children:[w.label," — ",N.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:w.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):w.label,cols:4},`hdr-${w.label}`,!1,void 0,this),w.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:O.aliases==="—"?N.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):N.jsxDEV(z0,{children:O.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:N.jsxDEV(OT,{type:O.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},O.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r9=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:"Passed to api.chat.sendMessage(content, options?).",fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],AT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:r9.map((w)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&N.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.optional&&!O.field.endsWith("?")?`${O.field}?`:O.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${O.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w9=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],PT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:w9.map((w)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(JO,{label:w.group,cols:3},`hdr-${w.group}`,!1,void 0,this),w.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.group}-${O.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H9=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],O9=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],q9=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],bT=()=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",N.jsxDEV(z0,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Two are currently shipped: ",N.jsxDEV(z0,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require ",N.jsxDEV(z0,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free) and ",N.jsxDEV(z0,{children:"ls:council-prompt"},void 0,!1,void 0,this)," (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle)."]},void 0,!0,void 0,this),N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:[N.jsxDEV(JO,{label:"ls:components",cols:3},void 0,!1,void 0,this),H9.map((w)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this)),N.jsxDEV(JO,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),O9.map((w)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:q9.map((w)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&N.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.optional&&!O.field.endsWith("?")?`${O.field}?`:O.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${O.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f$=()=>N.jsxDEV("div",{className:"ls-ref",children:[N.jsxDEV("div",{className:"ls-ref-toolbar",children:N.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>j$(),title:"Download the current reference as a Markdown file",children:[N.jsxDEV(G4,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(bw,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:N.jsxDEV(rT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(xH,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:N.jsxDEV(wT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(EH,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[N.jsxDEV(HT,{},void 0,!1,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",N.jsxDEV(z0,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(SH,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[N.jsxDEV(qT,{},void 0,!1,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",N.jsxDEV(z0,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",N.jsxDEV(z0,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(b5,{size:11},void 0,!1,void 0,this),title:"Key Types",children:N.jsxDEV(AT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(oH,{size:11},void 0,!1,void 0,this),title:"API Functions",children:N.jsxDEV(PT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(BH,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:N.jsxDEV(bT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV(K5,{icon:N.jsxDEV(mH,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[N.jsxDEV("p",{className:"ls-ref-muted",children:[N.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",N.jsxDEV(z0,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",N.jsxDEV(z0,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",N.jsxDEV(z0,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",N.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[N.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",N.jsxDEV(z0,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",N.jsxDEV(z0,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",N.jsxDEV(z0,{children:"enabled: false"},void 0,!1,void 0,this)," and ",N.jsxDEV(z0,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var ug=Xg(sg(),1),n$=!1,e$=({script:w,allScripts:O,activeContext:P,isRunning:b,consoleEntries:M,editorFontSize:Y,autosaveDebounceMs:G,onClearConsole:R,sendToBackend:$})=>{let[U,z]=h1.useState(w.code),[J,L]=h1.useState(!1),[l,t]=h1.useState(!1),[j,s]=h1.useState(w.name),[_,Mg]=h1.useState("code"),[qg,e]=h1.useState(!1),[a,Pg]=h1.useState(!1),rg=h1.useRef(null),d=h1.useRef(null);h1.useEffect(()=>{z(w.code),L(!1),s(w.name),Pg(!1)},[w.id,w.code,w.name]),h1.useEffect(()=>{$({type:"get_active_context"})},[w.id,$]),h1.useEffect(()=>{let i=setInterval(()=>{$({type:"get_active_context"})},2000);return()=>clearInterval(i)},[$]);let wg=h1.useCallback((i)=>{$({type:"update_script",id:w.id,patch:{code:i}}),L(!1)},[w.id,$]),m=(i)=>{if(i===void 0)return;if(z(i),L(i!==w.code),rg.current)clearTimeout(rg.current);rg.current=setTimeout(()=>wg(i),G)},Bg=(i,Wg)=>{if(d.current=i,!n$){n$=!0;let S=Wg.languages.typescript.javascriptDefaults;S.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),S.setCompilerOptions({target:Wg.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),S.addExtraLib(E$,"ts:lumiverse/lumiscript-api.d.ts")}i.addCommand(Wg.KeyMod.CtrlCmd|Wg.KeyCode.KeyS,()=>{if(rg.current)clearTimeout(rg.current);wg(i.getValue())}),i.getModel()?.setEOL(Wg.editor.EndOfLineSequence.LF)},Jg=()=>{if(b)return;if(rg.current)clearTimeout(rg.current),rg.current=null;if(J)wg(d.current?.getValue()??U);$({type:"run_script",id:w.id})},Kg=()=>{let i=j.trim();if(i&&i!==w.name)$({type:"update_script",id:w.id,patch:{name:i}});t(!1)},Vg=(i)=>{let Wg=w.bindings??[];$({type:"update_script",id:w.id,patch:{bindings:[...Wg,i]}})},V=(i)=>{$({type:"update_script",id:w.id,patch:{bindings:(w.bindings??[]).filter((Wg,S)=>S!==i)}})},p=()=>{if(w.allowDangerous)$({type:"update_script",id:w.id,patch:{allowDangerous:!1}});else if(a)Pg(!1),$({type:"update_script",id:w.id,patch:{allowDangerous:!0}});else Pg(!0)},vg=(i)=>new Date(i).toLocaleString();return ug.jsxDEV("div",{className:"ls-editor-root",children:[ug.jsxDEV("div",{className:"ls-editor-topbar",children:[l?ug.jsxDEV("input",{className:"ls-editor-name-input",value:j,autoFocus:!0,onChange:(i)=>s(i.target.value),onBlur:Kg,onKeyDown:(i)=>{if(i.key==="Enter")Kg();if(i.key==="Escape")s(w.name),t(!1)}},void 0,!1,void 0,this):ug.jsxDEV("span",{className:"ls-editor-name",onClick:()=>t(!0),title:"Click to rename",style:{cursor:"text"},children:w.name},void 0,!1,void 0,this),J&&ug.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:`ls-tab-pill${_==="code"?" ls-active":""}`,onClick:()=>Mg("code"),title:"Code editor",children:[ug.jsxDEV(S1,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),ug.jsxDEV("button",{className:`ls-tab-pill${_==="docs"?" ls-active":""}`,onClick:()=>Mg("docs"),title:"API reference",children:[ug.jsxDEV(IH,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),w.type!=="library"&&ug.jsxDEV("button",{className:`ls-btn${b?"":" ls-accent"}`,onClick:Jg,disabled:b,children:[b?ug.jsxDEV(W5,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):ug.jsxDEV(kH,{size:15},void 0,!1,void 0,this),b?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),_==="code"&&ug.jsxDEV("div",{className:"ls-editor-monaco",children:ug.jsxDEV(o$,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:U,onChange:m,onMount:Bg,options:{minimap:{enabled:!1},fontSize:Y,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},w.id,!1,void 0,this)},void 0,!1,void 0,this),_==="docs"&&ug.jsxDEV("div",{className:"ls-editor-docs",children:ug.jsxDEV(f$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),_==="code"&&ug.jsxDEV(x$,{entries:M,isRunning:b,onClear:R},void 0,!1,void 0,this),w.type==="trigger"&&ug.jsxDEV(V$,{scriptId:w.id,triggers:w.triggers??[],sendToBackend:$},void 0,!1,void 0,this),w.type==="trigger"&&ug.jsxDEV(D$,{bindings:w.bindings??[],activeContext:P,onAdd:Vg,onRemove:V},void 0,!1,void 0,this),a&&ug.jsxDEV("div",{className:"ls-danger-confirm",children:[ug.jsxDEV(S6,{size:10},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:p,children:"Enable"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>Pg(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-meta-footer",children:[ug.jsxDEV("span",{className:"ls-meta-item",children:ug.jsxDEV("button",{className:"ls-danger-btn",onClick:p,title:"Toggle dangerous mode",children:[w.allowDangerous?ug.jsxDEV(S6,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):ug.jsxDEV(yH,{size:11},void 0,!1,void 0,this),ug.jsxDEV("span",{className:w.allowDangerous?"ls-dangerous":"",children:w.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[ug.jsxDEV(R4,{size:10},void 0,!1,void 0,this),ug.jsxDEV("select",{className:"ls-folder-select",value:w.folder??"",onChange:(i)=>{let Wg=i.target.value;if(Wg==="__new__"){let S=window.prompt("New folder name:");if(S?.trim())$({type:"update_script",id:w.id,patch:{folder:S.trim()}})}else $({type:"update_script",id:w.id,patch:{folder:Wg}})},children:[ug.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(O.map((i)=>i.folder).filter((i)=>!!i))].sort().map((i)=>ug.jsxDEV("option",{value:i,children:i},i,!1,void 0,this)),ug.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("span",{className:"ls-meta-item",children:[ug.jsxDEV(TH,{size:10},void 0,!1,void 0,this),ug.jsxDEV("span",{children:["Updated ",vg(w.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("span",{className:"ls-meta-item",children:[ug.jsxDEV(NH,{size:10},void 0,!1,void 0,this),ug.jsxDEV("span",{children:["Created ",vg(w.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:w.id,onClick:()=>{navigator.clipboard.writeText(w.id).catch(()=>{}),e(!0),setTimeout(()=>e(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[qg?ug.jsxDEV(ZH,{size:10},void 0,!1,void 0,this):ug.jsxDEV(Pw,{size:10},void 0,!1,void 0,this),ug.jsxDEV("span",{children:["ID ",w.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var U1=Xg(sg(),1),t$=({scripts:w,initialScriptId:O,activeContext:P,execInfo:b,activeRunScriptId:M,isRunning:Y,consoleHistory:G,editorFontSize:R,autosaveDebounceMs:$,onClearConsole:U,onClose:z,sendToBackend:J})=>{let[L,l]=QO.useState(O),t=w.find((qg)=>qg.id===L)??null;QO.useEffect(()=>{l(O)},[O]),QO.useEffect(()=>{let qg=(e)=>{if(e.key==="Escape")z()};return document.addEventListener("keydown",qg),()=>document.removeEventListener("keydown",qg)},[z]);let j=t?G[t.id]??[]:[],s=Y&&t?.id===M;return c$.createPortal(U1.jsxDEV("div",{className:"ls-modal-overlay",onClick:(qg)=>{if(qg.target===qg.currentTarget)z()},children:U1.jsxDEV("div",{className:"ls-modal-card",onClick:(qg)=>qg.stopPropagation(),children:[U1.jsxDEV("div",{className:"ls-modal-header",children:[U1.jsxDEV("span",{className:"ls-modal-title",children:[U1.jsxDEV(ur,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),U1.jsxDEV("button",{className:"ls-modal-close",onClick:z,title:"Close (Esc)",children:U1.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U1.jsxDEV("div",{className:"ls-modal-body",children:[U1.jsxDEV("div",{className:"ls-modal-sidebar",children:U1.jsxDEV(WA,{scripts:w,selectedId:L,execInfo:b,onSelect:l,onEdit:l,sendToBackend:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),U1.jsxDEV("div",{className:"ls-modal-main",children:t?U1.jsxDEV(e$,{script:t,allScripts:w,activeContext:P,isRunning:s,consoleEntries:j,editorFontSize:R,autosaveDebounceMs:$,onClearConsole:()=>{if(t)U(t.id)},sendToBackend:J},void 0,!1,void 0,this):U1.jsxDEV("div",{className:"ls-placeholder",children:[U1.jsxDEV(ur,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),U1.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var KA=Xg(sg(),1),p$=({scripts:w,activeContext:O,execInfo:P,activeRunScriptId:b,isRunning:M,consoleHistory:Y,editorFontSize:G,autosaveDebounceMs:R,onClearConsole:$,onScriptOpened:U,sendToBackend:z})=>{let[J,L]=$A.useState(null);return $A.useEffect(()=>{if(J&&U)U(J)},[J,U]),KA.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[KA.jsxDEV(WA,{scripts:w,selectedId:J,execInfo:P,onSelect:()=>{},onEdit:L,sendToBackend:z},void 0,!1,void 0,this),J!==null&&KA.jsxDEV(t$,{scripts:w,initialScriptId:J,activeContext:O,execInfo:P,activeRunScriptId:b,isRunning:M,consoleHistory:Y,editorFontSize:G,autosaveDebounceMs:R,onClearConsole:$,onClose:()=>L(null),sendToBackend:z},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var d$=Xg(O0(),1);var y0=Xg(sg(),1),WT=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function MT(w){if(w===void 0)return"undefined";if(w===null)return"null";if(typeof w==="string")return w.length>80?w.slice(0,77)+"…":w;try{let O=JSON.stringify(w);return O.length>80?O.slice(0,77)+"…":O}catch{return String(w)}}var a$=({variables:w,sendToBackend:O})=>{let[P,b]=d$.useState(new Set(["local","global","chat","character"])),M=(G)=>{b((R)=>{let $=new Set(R);if($.has(G))$.delete(G);else $.add(G);return $})},Y=w?Object.values(w).reduce((G,R)=>G+Object.keys(R).length,0):0;return y0.jsxDEV("div",{className:"ls-status-section",children:[y0.jsxDEV("div",{className:"ls-inject-header",children:[y0.jsxDEV(fv,{size:10},void 0,!1,void 0,this),"Variables",Y>0&&y0.jsxDEV("span",{className:"ls-inject-count",children:Y},void 0,!1,void 0,this),y0.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>O({type:"get_variables"}),children:y0.jsxDEV(J4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),y0.jsxDEV("div",{className:"ls-status-section-body",children:!w?y0.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):Y===0?y0.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):WT.map(({key:G,label:R,hint:$})=>{let U=w[G],z=Object.keys(U),J=P.has(G);if(z.length===0)return null;return y0.jsxDEV("div",{className:"ls-vars-scope",children:[y0.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>M(G),children:[J?y0.jsxDEV(l1,{size:10},void 0,!1,void 0,this):y0.jsxDEV(iv,{size:10},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-scope-name",children:R},void 0,!1,void 0,this),$&&y0.jsxDEV("span",{className:"ls-vars-scope-hint",children:$},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-scope-count",children:z.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),J&&y0.jsxDEV("div",{className:"ls-vars-scope-body",children:z.sort().map((L)=>y0.jsxDEV("div",{className:"ls-vars-entry",children:[y0.jsxDEV("span",{className:"ls-vars-key",children:L},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-value",title:String(U[L]),children:MT(U[L])},void 0,!1,void 0,this)]},L,!0,void 0,this))},void 0,!1,void 0,this)]},G,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var M0=Xg(sg(),1);function XT(w){if(!Number.isFinite(w)||w<=0)return"0 B";let O=["B","KB","MB","GB"],P=Math.min(O.length-1,Math.floor(Math.log(w)/Math.log(1024))),b=w/Math.pow(1024,P);return`${P===0?b.toFixed(0):b.toFixed(1)} ${O[P]}`}function YT(w){if(!w)return"—";let O=new Date(w).getTime();if(!Number.isFinite(O)||O<=0)return"—";let P=Date.now()-O;if(P<0)return"just now";if(P<60000)return"just now";if(P<3600000)return`${Math.floor(P/60000)}m ago`;if(P<86400000)return`${Math.floor(P/3600000)}h ago`;if(P<2592000000)return`${Math.floor(P/86400000)}d ago`;return new Date(O).toISOString().slice(0,10)}var GT={script:"script",character:"char",chat:"chat"},s$=({collections:w,scripts:O,sendToBackend:P,onInspect:b,onDrop:M})=>{let Y=new Map;for(let $ of O)Y.set($.id,$.name);let G=()=>P({type:"list_collections"}),R=w?.length??0;return M0.jsxDEV("div",{className:"ls-status-section",children:[M0.jsxDEV("div",{className:"ls-inject-header",children:[M0.jsxDEV(fv,{size:10},void 0,!1,void 0,this),"Collections",R>0&&M0.jsxDEV("span",{className:"ls-inject-count",children:R},void 0,!1,void 0,this),M0.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:G,children:M0.jsxDEV(J4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M0.jsxDEV("div",{className:"ls-status-section-body",children:w===null?M0.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):w.length===0?M0.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):M0.jsxDEV("div",{className:"ls-collections-list",children:[M0.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[M0.jsxDEV("span",{children:"Name"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Scope"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Owner"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Size"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Updated"},void 0,!1,void 0,this),M0.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w.map(($)=>{let U=Y.get($.scriptId)??`(${$.scriptId.slice(0,8)}…)`,z=!Y.has($.scriptId),J=z?`scriptId: ${$.scriptId} (not currently loaded)`:`${U} (${$.scriptId})`;return M0.jsxDEV("div",{className:"ls-collections-row",children:[M0.jsxDEV("span",{className:"ls-collections-name",title:$.name,children:$.name},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-scope","data-scope":$.scope,title:$.path,children:GT[$.scope]},void 0,!1,void 0,this),M0.jsxDEV("span",{className:`ls-collections-owner${z?" ls-collections-owner-unknown":""}`,title:J,children:U},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-size",title:`${$.sizeBytes.toLocaleString()} bytes`,children:XT($.sizeBytes)},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-updated",title:$.modifiedAt,children:YT($.modifiedAt)},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-actions",children:[M0.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>b($.path),children:M0.jsxDEV(CH,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),M0.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>M($),children:M0.jsxDEV(n1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},$.path,!0,void 0,this)})]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var pv=Xg(O0(),1),vz=Xg($H(),1);var fg=Xg(sg(),1),KO=50,RT=150,rz=({path:w,records:O,total:P,refreshToken:b,onClose:M,sendToBackend:Y})=>{let[G,R]=pv.useState(""),[$,U]=pv.useState(""),[z,J]=pv.useState(0);pv.useEffect(()=>{let _=setTimeout(()=>U(G),RT);return()=>clearTimeout(_)},[G]),pv.useEffect(()=>{J(0)},[$]),pv.useEffect(()=>{Y({type:"inspect_collection",path:w,textFilter:$||void 0,limit:KO,offset:z*KO})},[w,$,z,b,Y]),pv.useEffect(()=>{let _=(Mg)=>{if(Mg.key==="Escape")M()};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[M]);let L=Math.max(1,Math.ceil(P/KO)),l=P===0?0:z*KO+1,t=Math.min(P,(z+1)*KO),j=pv.useMemo(()=>{let _=w.match(/\/([^/]+)\.json$/);return _?_[1]:w},[w]),s=fg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(_)=>{if(_.target===_.currentTarget)M()},children:fg.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(_)=>_.stopPropagation(),children:[fg.jsxDEV("div",{className:"ls-modal-header",children:[fg.jsxDEV("span",{className:"ls-modal-title",children:[fg.jsxDEV(fv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-title-name",children:j},void 0,!1,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-title-path",title:w,children:w},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("button",{className:"ls-modal-close",onClick:M,title:"Close (Esc)",children:fg.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-toolbar",children:[fg.jsxDEV("div",{className:"ls-inspect-search",children:[fg.jsxDEV(_H,{size:12},void 0,!1,void 0,this),fg.jsxDEV("input",{type:"text",className:"ls-inspect-search-input",placeholder:"Filter records (shallow string match)…",value:G,onChange:(_)=>R(_.target.value),autoFocus:!0},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-pager",children:[fg.jsxDEV("span",{className:"ls-inspect-pager-status",children:P===0?"No matching records":fg.jsxDEV(fg.Fragment,{children:["Showing ",fg.jsxDEV("strong",{children:l},void 0,!1,void 0,this),"–",fg.jsxDEV("strong",{children:t},void 0,!1,void 0,this)," of ",fg.jsxDEV("strong",{children:P},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),fg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>J((_)=>Math.max(0,_-1)),disabled:z===0,title:"Previous page",children:fg.jsxDEV(uH,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),fg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>J((_)=>Math.min(L-1,_+1)),disabled:z>=L-1,title:"Next page",children:fg.jsxDEV(Aw,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-body",children:O===null?fg.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):O.length===0?fg.jsxDEV("div",{className:"ls-inspect-empty",children:P===0&&$?`No records match “${$}”`:P===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):fg.jsxDEV("div",{className:"ls-inspect-records",children:O.map((_)=>fg.jsxDEV("div",{className:"ls-inspect-record",children:[fg.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${_.id}`,children:[fg.jsxDEV("code",{children:[String(_.id).slice(0,12),"…"]},void 0,!0,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",fg.jsxDEV("time",{title:new Date(_.createdAt).toISOString(),children:gz(_.createdAt)},void 0,!1,void 0,this),_.updatedAt!==_.createdAt&&fg.jsxDEV(fg.Fragment,{children:[" · ","updated ",fg.jsxDEV("time",{title:new Date(_.updatedAt).toISOString(),children:gz(_.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("pre",{className:"ls-inspect-record-json",children:hT(_)},void 0,!1,void 0,this)]},_.id,!0,void 0,this))},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return vz.createPortal(s,document.body)};function gz(w){if(!Number.isFinite(w)||w<=0)return"—";let O=Date.now()-w;if(O<60000)return"just now";if(O<3600000)return`${Math.floor(O/60000)}m ago`;if(O<86400000)return`${Math.floor(O/3600000)}h ago`;if(O<2592000000)return`${Math.floor(O/86400000)}d ago`;return new Date(w).toISOString().slice(0,10)}function hT(w){let{id:O,createdAt:P,updatedAt:b,...M}=w;try{return JSON.stringify(M,null,2)}catch{return String(w)}}var $O=Xg(O0(),1),wz=Xg($H(),1);var S0=Xg(sg(),1);function JT(w){if(!Number.isFinite(w)||w<=0)return"0 B";let O=["B","KB","MB","GB"],P=Math.min(O.length-1,Math.floor(Math.log(w)/Math.log(1024))),b=w/Math.pow(1024,P);return`${P===0?b.toFixed(0):b.toFixed(1)} ${O[P]}`}var QT={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"},Hz=({target:w,onConfirm:O,onCancel:P})=>{let b=$O.useRef(null);$O.useEffect(()=>{let Y=(G)=>{if(G.key==="Escape")P()};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[P]),$O.useEffect(()=>{let Y=(G)=>{if(G.key!=="Tab")return;let R=b.current;if(!R)return;let $=Array.from(R.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if($.length===0)return;let U=$[0],z=$[$.length-1],J=document.activeElement,L=J!==null&&R.contains(J);if(G.shiftKey){if(!L||J===U)G.preventDefault(),z.focus()}else if(!L||J===z)G.preventDefault(),U.focus()};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[]);let M=S0.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Y)=>{if(Y.target===Y.currentTarget)P()},children:S0.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:b,onClick:(Y)=>Y.stopPropagation(),children:[S0.jsxDEV("div",{className:"ls-modal-header",children:[S0.jsxDEV("span",{className:"ls-modal-title",children:[S0.jsxDEV(n1,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),S0.jsxDEV("button",{className:"ls-modal-close",onClick:P,title:"Cancel (Esc)",children:S0.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-body",children:[S0.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target",children:[S0.jsxDEV("div",{className:"ls-drop-target-name",children:w.name},void 0,!1,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target-meta",children:[S0.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":w.scope,children:QT[w.scope]},void 0,!1,void 0,this),S0.jsxDEV("span",{className:"ls-drop-target-size",children:JT(w.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target-path",title:w.path,children:w.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-warning",children:[S0.jsxDEV(M5,{size:12},void 0,!1,void 0,this),S0.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-actions",children:[S0.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:P,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),S0.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:O,children:[S0.jsxDEV(n1,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return wz.createPortal(M,document.body)};var hw=Xg(sg(),1),Oz=({variables:w,collections:O,scripts:P,sendToBackend:b,inspectPath:M,inspectRecords:Y,inspectTotal:G,inspectRefreshToken:R,onInspect:$,dropTarget:U,onDrop:z,onDropConfirm:J})=>{return hw.jsxDEV(hw.Fragment,{children:[hw.jsxDEV("div",{className:"ls-storage-list",children:[hw.jsxDEV(a$,{variables:w,sendToBackend:b},void 0,!1,void 0,this),hw.jsxDEV(s$,{collections:O,scripts:P,sendToBackend:b,onInspect:$,onDrop:z},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M!==null&&hw.jsxDEV(rz,{path:M,records:Y,total:G,refreshToken:R,onClose:()=>$(null),sendToBackend:b},void 0,!1,void 0,this),U!==null&&hw.jsxDEV(Hz,{target:U,onConfirm:J,onCancel:()=>z(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Yg=Xg(sg(),1),qz=({onBackendMessage:w,sendToBackend:O})=>{let[P,b]=l0.useState("manage"),[M,Y]=l0.useState([]),[G,R]=l0.useState(nq),[$,U]=l0.useState({characterId:null,characterName:null,chatId:null}),[z,J]=l0.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[L,l]=l0.useState([]),[t,j]=l0.useState([]),[s,_]=l0.useState(null),[Mg,qg]=l0.useState(null),[e,a]=l0.useState(null),[Pg,rg]=l0.useState(null),[d,wg]=l0.useState(0),[m,Bg]=l0.useState(0),[Jg,Kg]=l0.useState(null),[Vg,V]=l0.useState({});l0.useEffect(()=>{let i=w((Wg)=>{let S=Wg;switch(S.type){case"scripts_updated":Y(S.scripts);break;case"script_patched":Y((c)=>c.map((Gg)=>Gg.id===S.script.id?S.script:Gg));break;case"settings_updated":R(S.settings);break;case"active_context":U({characterId:S.characterId,characterName:S.characterName,chatId:S.chatId}),O({type:"get_variables"});break;case"variables_updated":_(S.variables);break;case"collections_list":qg(S.collections);break;case"collection_records":rg((c)=>{return S.records}),wg(S.total);break;case"collections_updated":O({type:"list_collections"}),Bg((c)=>c+1);break;case"injections_updated":l(S.injections);break;case"tools_updated":j(S.tools);break;case"execution_started":{let c={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};J((Gg)=>{let Qg=Gg.consoleHistory[S.scriptId]??[],Lg=Qg.length>0?[...Qg,c]:Qg;return{...Gg,activeScriptId:S.scriptId,runId:S.runId,isRunning:!0,consoleHistory:{...Gg.consoleHistory,[S.scriptId]:Lg},scriptExecInfo:{...Gg.scriptExecInfo,[S.scriptId]:{...Gg.scriptExecInfo[S.scriptId],dot:"running"}}}}),V((Gg)=>({...Gg,[S.scriptId]:(Gg[S.scriptId]??0)+1}));break}case"console_entry":{let c=G.consoleHistoryLimit;J((Gg)=>{let Qg=Gg.consoleHistory[S.scriptId]??[];if(Qg.length>=c)return Gg;let ng=Qg.length===c-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${c} entries. Clear the console to resume capture.]`}:S.entry;return{...Gg,consoleHistory:{...Gg.consoleHistory,[S.scriptId]:[...Qg,ng]}}});break}case"execution_ended":J((c)=>{let Gg=c.consoleHistory[S.scriptId]??[],Qg=c.scriptExecInfo[S.scriptId],Lg=!S.success&&S.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:S.error}]:[],ng=!S.success?!0:Qg?.stickyError??!1,dg=!S.success||ng?"error":"success",o0=S.duration??0,J1=S.success&&o0===0&&(Qg?.duration??0)>0?Qg.duration:S.duration;return{...c,isRunning:!1,consoleHistory:Lg.length?{...c.consoleHistory,[S.scriptId]:[...Gg,...Lg]}:c.consoleHistory,scriptExecInfo:{...c.scriptExecInfo,[S.scriptId]:{dot:dg,duration:J1,error:S.error??Qg?.error,stickyError:ng}}}});break;case"error":console.warn("[LumiScript]",S.message);break}});return O({type:"get_scripts"}),O({type:"get_settings"}),O({type:"get_active_context"}),O({type:"get_injections"}),O({type:"get_tools"}),i},[w,O]),l0.useEffect(()=>{if(P==="storage")O({type:"list_collections"})},[P,O]);let p=l0.useCallback((i)=>{J((Wg)=>({...Wg,consoleHistory:{...Wg.consoleHistory,[i]:[]}}))},[]),vg=l0.useCallback((i)=>{J((Wg)=>{let S=Wg.scriptExecInfo[i];if(!S?.stickyError)return Wg;return{...Wg,scriptExecInfo:{...Wg.scriptExecInfo,[i]:{...S,dot:"idle",stickyError:!1}}}})},[]);return Yg.jsxDEV("div",{className:"ls-panel",children:[Yg.jsxDEV("div",{className:"ls-tabs",children:[Yg.jsxDEV("button",{className:`ls-tab-pill${P==="manage"?" ls-active":""}`,onClick:()=>b("manage"),children:[Yg.jsxDEV(S1,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Yg.jsxDEV("button",{className:`ls-tab-pill${P==="status"?" ls-active":""}`,onClick:()=>b("status"),children:[Yg.jsxDEV(UH,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Yg.jsxDEV("button",{className:`ls-tab-pill${P==="storage"?" ls-active":""}`,onClick:()=>b("storage"),children:[Yg.jsxDEV(fv,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[P==="manage"&&Yg.jsxDEV(p$,{scripts:M,activeContext:$,execInfo:z.scriptExecInfo,activeRunScriptId:z.activeScriptId,isRunning:z.isRunning,consoleHistory:z.consoleHistory,editorFontSize:G.editorFontSize,autosaveDebounceMs:G.autosaveDebounceMs,onClearConsole:p,onScriptOpened:vg,sendToBackend:O},void 0,!1,void 0,this),P==="status"&&Yg.jsxDEV($T,{scripts:M,execInfo:z.scriptExecInfo,invocationCounts:Vg,injections:L,tools:t,sendToBackend:O},void 0,!1,void 0,this),P==="storage"&&Yg.jsxDEV(Oz,{variables:s,collections:Mg,scripts:M,sendToBackend:O,inspectPath:e,inspectRecords:Pg,inspectTotal:d,inspectRefreshToken:m,onInspect:(i)=>{a(i),rg(null),wg(0)},dropTarget:Jg,onDrop:Kg,onDropConfirm:()=>{if(!Jg)return;let i=Jg.path;if(e===i)a(null),rg(null),wg(0);O({type:"drop_collection",path:i}),Kg(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},KT={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},$T=({scripts:w,execInfo:O,invocationCounts:P,injections:b,tools:M,sendToBackend:Y})=>{let G=w.filter((J)=>J.type==="trigger"&&J.enabled),R=Object.fromEntries(w.map((J)=>[J.id,J.name])),[$,U]=l0.useState(new Set),z=(J)=>{U((L)=>{let l=new Set(L);if(l.has(J))l.delete(J);else l.add(J);return l})};return Yg.jsxDEV("div",{className:"ls-status-list",children:[Yg.jsxDEV("div",{className:"ls-status-section",children:[Yg.jsxDEV("div",{className:"ls-inject-header",children:[Yg.jsxDEV(S1,{size:10},void 0,!1,void 0,this),"Scripts",G.length>0&&Yg.jsxDEV("span",{className:"ls-inject-count",children:G.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-status-section-body",children:G.length===0?Yg.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):G.map((J)=>{let L=O[J.id],l=L?.dot??"idle",t={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[l],j=J.triggers??[],s=P[J.id];return Yg.jsxDEV("div",{className:"ls-status-row",children:[Yg.jsxDEV("div",{className:"ls-status-row-main",children:[Yg.jsxDEV("span",{className:t,title:KT[l]},void 0,!1,void 0,this),Yg.jsxDEV("span",{className:"ls-status-name",children:J.name},void 0,!1,void 0,this),Yg.jsxDEV("span",{className:"ls-status-right",children:[s!==void 0&&s>0&&Yg.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${s} time${s!==1?"s":""} this session`,children:["×",s]},void 0,!0,void 0,this),L?.duration!==void 0&&l!=="running"&&Yg.jsxDEV("span",{className:"ls-status-duration",style:{color:l==="error"?"#ef4444":void 0},children:[L.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.length>0?Yg.jsxDEV("div",{className:"ls-status-events",children:j.map((_)=>Yg.jsxDEV("span",{className:"ls-event-badge",children:[Yg.jsxDEV(bw,{size:9},void 0,!1,void 0,this),_]},_,!0,void 0,this))},void 0,!1,void 0,this):Yg.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),l==="error"&&L?.error&&Yg.jsxDEV("div",{className:"ls-status-error-row",children:Yg.jsxDEV("span",{className:"ls-status-error-text",children:L.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-status-section",children:[Yg.jsxDEV("div",{className:"ls-inject-header",children:[Yg.jsxDEV(cH,{size:10},void 0,!1,void 0,this),"Active Tools",M.length>0&&Yg.jsxDEV("span",{className:"ls-inject-count",children:M.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-status-section-body",children:M.length===0?Yg.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):M.map((J)=>Yg.jsxDEV("div",{className:"ls-tool-row",children:[Yg.jsxDEV("div",{className:"ls-tool-name",title:J.description,children:J.name},void 0,!1,void 0,this),Yg.jsxDEV("div",{className:"ls-tool-meta",children:[J.council_eligible&&Yg.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Yg.jsxDEV("span",{className:"ls-inject-script",title:J.scriptId,children:J.scriptName},void 0,!1,void 0,this),Yg.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${J.name}`,title:`Unregister "${J.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>Y({type:"unregister_tool",name:J.name}),children:Yg.jsxDEV(n1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-status-section",children:[Yg.jsxDEV("div",{className:"ls-inject-header",children:[Yg.jsxDEV(jH,{size:10},void 0,!1,void 0,this),"Active Injections",b.length>0&&Yg.jsxDEV("span",{className:"ls-inject-count",children:b.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("div",{className:"ls-status-section-body",children:b.length===0?Yg.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):b.map((J)=>{let L=$.has(J.id);return Yg.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>z(J.id),children:[Yg.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${J.mode}`,title:J.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:J.mode==="intercept"?Yg.jsxDEV(LH,{size:11},void 0,!1,void 0,this):Yg.jsxDEV(FH,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Yg.jsxDEV("div",{className:"ls-inject-body",children:[Yg.jsxDEV("div",{className:"ls-inject-header-row",children:[Yg.jsxDEV("span",{className:"ls-inject-id",title:J.id,children:J.id},void 0,!1,void 0,this),Yg.jsxDEV("div",{className:"ls-inject-meta",children:[Yg.jsxDEV("span",{className:"ls-inject-role",children:J.role},void 0,!1,void 0,this),J.mode==="intercept"&&J.depth>0&&Yg.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${J.depth} message${J.depth!==1?"s":""}`,children:["d:",J.depth]},void 0,!0,void 0,this),J.ephemeral&&Yg.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Yg.jsxDEV(Q4,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Yg.jsxDEV("span",{className:"ls-inject-script",title:J.scriptId,children:R[J.scriptId]??J.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yg.jsxDEV("span",{className:"ls-inject-chevron",children:L?Yg.jsxDEV(iv,{size:10},void 0,!1,void 0,this):Yg.jsxDEV(l1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),L&&Yg.jsxDEV("div",{className:"ls-inject-content",onClick:(l)=>l.stopPropagation(),children:J.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var zO=Xg(O0(),1);var Sg=Xg(sg(),1),Az=({onBackendMessage:w,sendToBackend:O})=>{let[P,b]=zO.useState(nq),[M,Y]=zO.useState([]);zO.useEffect(()=>{let U=w((z)=>{let J=z;if(J.type==="scripts_updated")Y(J.scripts);if(J.type==="settings_updated")b(J.settings)});return O({type:"get_settings"}),O({type:"get_scripts"}),U},[w,O]);let G=M.filter((U)=>U.type==="trigger").length,R=M.filter((U)=>U.type==="library").length,$=(U)=>{O({type:"update_settings",patch:{enabled:U}})};return Sg.jsxDEV("div",{className:"ls-settings",children:[Sg.jsxDEV("div",{className:"ls-settings-header",children:Sg.jsxDEV("span",{className:"ls-settings-title",children:[Sg.jsxDEV(ur,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Sg.jsxDEV("div",{className:"ls-toggle-row",children:[Sg.jsxDEV("label",{className:"ls-toggle",children:[Sg.jsxDEV("input",{type:"checkbox",checked:P.enabled,onChange:(U)=>$(U.target.checked)},void 0,!1,void 0,this),Sg.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-counts",children:[Sg.jsxDEV("div",{className:"ls-count-card",children:[Sg.jsxDEV(S1,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Sg.jsxDEV("div",{className:"ls-count-num",children:G},void 0,!1,void 0,this),Sg.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-count-card",children:[Sg.jsxDEV(Y4,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Sg.jsxDEV("div",{className:"ls-count-num",children:R},void 0,!1,void 0,this),Sg.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-section",children:[Sg.jsxDEV("div",{className:"ls-settings-section-label",children:[Sg.jsxDEV(Q4,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-field",children:[Sg.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Sg.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(P.scriptTimeoutMs/1000),onChange:(U)=>{let z=Math.max(5,Math.min(300,Number(U.target.value)||60));O({type:"update_settings",patch:{scriptTimeoutMs:z*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-field",children:[Sg.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Sg.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:P.consoleHistoryLimit,onChange:(U)=>{let z=Math.max(50,Math.min(2000,Number(U.target.value)||500));O({type:"update_settings",patch:{consoleHistoryLimit:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-section",children:[Sg.jsxDEV("div",{className:"ls-settings-section-label",children:[Sg.jsxDEV(nH,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-field",children:[Sg.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Sg.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:P.editorFontSize,onChange:(U)=>{let z=Math.max(10,Math.min(24,Number(U.target.value)||12));O({type:"update_settings",patch:{editorFontSize:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-field",children:[Sg.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Sg.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:P.autosaveDebounceMs,onChange:(U)=>{let z=Math.max(300,Math.min(5000,Number(U.target.value)||1200));O({type:"update_settings",patch:{autosaveDebounceMs:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-section",children:[Sg.jsxDEV("div",{className:"ls-settings-section-label",children:[Sg.jsxDEV(Zr,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-template-field",children:[Sg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Sg.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:P.defaultTriggerTemplate,onChange:(U)=>O({type:"update_settings",patch:{defaultTriggerTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sg.jsxDEV("div",{className:"ls-settings-template-field",children:[Sg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Sg.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:P.defaultLibraryTemplate,onChange:(U)=>O({type:"update_settings",patch:{defaultLibraryTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function zT(w){let O=w?.type;return typeof O==="string"&&O.startsWith("dom_")}var m1=new Map;function E6(w,O){m1.set(w,O)}function Sv(w){let O=m1.get(w);for(let[P,b]of Jw)if(b.elementId===w){if(O)O.removeEventListener(b.event,b.handler);Jw.delete(P)}m1.delete(w)}var FO=new Map,UO=new Map,F4=new Map,LO=new Map,Jw=new Map;function Pz(w,O){return`${w}:${O}`}function UT(w){let O=w.target,P={type:w.type};if(O){if(O.id)P.targetId=O.id;if("value"in O)P.targetValue=O.value;if("checked"in O)P.targetChecked=O.checked;if(O.dataset&&Object.keys(O.dataset).length>0){let b={};for(let[M,Y]of Object.entries(O.dataset))if(Y!==void 0)b[M]=Y;P.dataset=b}}if(w instanceof MouseEvent)P.clientX=w.clientX,P.clientY=w.clientY;else if(typeof TouchEvent<"u"&&w instanceof TouchEvent){let b=w.touches[0]??w.changedTouches[0];if(b)P.clientX=b.clientX,P.clientY=b.clientY}if(w instanceof CustomEvent&&w.detail!==void 0)try{JSON.stringify(w.detail),P.detail=w.detail}catch{}return P}function LT(w,O){return`@scope ([data-ls-script="${O}"]) {
${w}
}`}function FT(w,O=5000){let P=document.querySelector(w);if(P)return Promise.resolve(P);return new Promise((b,M)=>{let Y=!1,G=new MutationObserver(()=>{let R=document.querySelector(w);if(R&&!Y)Y=!0,G.disconnect(),b(R)});G.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!Y)Y=!0,G.disconnect(),M(Error(`waitForElement: timeout for "${w}"`))},O)})}function bz(w){return w.querySelector('[class*="_bubble_"]')}var dv=new Map,BT=50;function IT(w,O,P){if(dv.size>=BT){let b=dv.keys().next().value;if(b)dv.get(b)?.cancel(),dv.delete(b)}dv.set(w,{scriptId:O,cancel:P})}function NT(w){for(let[O,P]of dv)if(P.scriptId===w)P.cancel(),dv.delete(O)}function Mz(w,O,P){let b=O((M)=>{if(!zT(M))return;let Y=M;switch(Y.type){case"dom_inject":{let{scriptId:G,elementId:R,target:$,html:U,position:z,stableId:J}=Y,L=`<div data-ls-script="${G}" data-ls-el="${R}">${U}</div>`,l=w.dom.inject($,L,z);if(m1.set(R,l),FO.set(R,G),J)UO.set(Pz(G,J),R);break}case"dom_inject_at_message":{let{scriptId:G,elementId:R,messageId:$,html:U,position:z,stableId:J}=Y,L=(_)=>{let Mg=`<div data-ls-script="${G}" data-ls-el="${R}">${U}</div>`,qg=_,e;if(z==="header"){let Pg=_.querySelector('[class*="_header_"]');if(Pg)qg=Pg,e="beforebegin";else e="afterbegin"}else e="beforeend";let a=w.dom.inject(qg,Mg,e);if(m1.set(R,a),FO.set(R,G),J)UO.set(Pz(G,J),R)},l=`[data-message-id="${$}"]`,t=document.querySelector(l);if(t){let _=bz(t);if(_)L(_);break}let j=!1;IT(R,G,()=>{j=!0}),FT(l).then((_)=>{if(dv.delete(R),j)return;let Mg=bz(_);if(Mg)L(Mg)}).catch(()=>{dv.delete(R)});break}case"dom_update":{let G=m1.get(Y.elementId);if(!G)break;let R=G.querySelector(`[data-ls-el="${Y.elementId}"]`)??G;R.innerHTML=Y.html;break}case"dom_remove":{Wz(Y.elementId);break}case"dom_add_style":{let{scriptId:G,styleId:R,css:$}=Y,U=LT($,G),z=w.dom.addStyle(U);F4.set(R,z),LO.set(R,G);break}case"dom_remove_style":{let G=F4.get(Y.styleId);if(G)G(),F4.delete(Y.styleId),LO.delete(Y.styleId);break}case"dom_listen":{let{elementId:G,listenerId:R,event:$,preventDefault:U}=Y,z=m1.get(G);if(!z)break;let J=(L)=>{if(U)L.preventDefault();let l=UT(L);P({type:"dom_event",elementId:G,listenerId:R,event:$,data:l})};z.addEventListener($,J),Jw.set(R,{elementId:G,event:$,handler:J});break}case"dom_unlisten":{let G=Jw.get(Y.listenerId);if(!G)break;let R=m1.get(G.elementId);if(R)R.removeEventListener(G.event,G.handler);Jw.delete(Y.listenerId);break}case"dom_cleanup_script":{let{scriptId:G}=Y;NT(G);for(let[R,$]of FO)if($===G)Wz(R);for(let[R,$]of LO)if($===G){let U=F4.get(R);if(U)U();F4.delete(R),LO.delete(R)}for(let[R]of UO)if(R.startsWith(G+":"))UO.delete(R);break}case"dom_make_draggable":{let{elementId:G,handleSelector:R}=Y,$=m1.get(G);if(!$)break;let U=!1,z=!1;$.addEventListener("pointerdown",(J)=>{if(J.button!==0)return;if(R&&!J.target.closest(R))return;let L=$.firstElementChild?.firstElementChild??$.firstElementChild??$,l=L.getBoundingClientRect();L.style.transform="none",L.style.top=`${l.top}px`,L.style.left=`${l.left}px`,L.style.bottom="auto",L.style.right="auto",U=!0,z=!1;let t=J.clientX-l.left,j=J.clientY-l.top;L.style.cursor="grabbing";let s=(Mg)=>{if(!U)return;z=!0,L.style.top=`${Mg.clientY-j}px`,L.style.left=`${Mg.clientX-t}px`},_=()=>{if(!U)return;U=!1,L.style.cursor="",document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",_),document.removeEventListener("pointercancel",_)};document.addEventListener("pointermove",s),document.addEventListener("pointerup",_),document.addEventListener("pointercancel",_),J.preventDefault()}),$.addEventListener("click",(J)=>{if(z)J.stopImmediatePropagation(),J.preventDefault(),z=!1},!0);break}}});return()=>{b();for(let[,M]of dv)M.cancel();dv.clear();for(let[,M]of Jw){let Y=m1.get(M.elementId);if(Y)Y.removeEventListener(M.event,M.handler)}Jw.clear();for(let[,M]of m1)try{M.remove()}catch{}m1.clear(),FO.clear(),UO.clear();for(let[,M]of F4)try{M()}catch{}F4.clear(),LO.clear()}}function Wz(w){for(let[P,b]of Jw)if(b.elementId===w){let M=m1.get(w);if(M)M.removeEventListener(b.event,b.handler);Jw.delete(P)}let O=m1.get(w);if(O)try{O.remove()}catch{}m1.delete(w),FO.delete(w)}function ZT(w){let O=w?.type;return O==="ls_modal_open"||O==="ls_modal_set_title"||O==="ls_modal_dismiss"}var $5=new Map;function Xz(w,O,P){let b=O((M)=>{if(!ZT(M))return;let Y=M;switch(Y.type){case"ls_modal_open":{let{scriptId:G,modalId:R,rootElementId:$,options:U}=Y;if($5.has(R))break;let z;try{z=w.ui.showModal({title:U.title,width:U.width,maxHeight:U.maxHeight,persistent:U.persistent})}catch(L){console.warn("[LumiScript] ctx.ui.showModal failed:",L),P({type:"ls_modal_dismissed",modalId:R});break}E6($,z.root),z.root.setAttribute("data-ls-script",G),z.root.setAttribute("data-ls-modal",R);let J={modalId:R,rootElementId:$,handle:z,echoed:!1};$5.set(R,J),z.onDismiss(()=>{if(J.echoed)return;J.echoed=!0,Sv($),$5.delete(R),P({type:"ls_modal_dismissed",modalId:R})});break}case"ls_modal_set_title":{let G=$5.get(Y.modalId);if(!G)break;try{G.handle.setTitle(Y.title)}catch{}break}case"ls_modal_dismiss":{let G=$5.get(Y.modalId);if(!G)break;try{G.handle.dismiss()}catch{if(!G.echoed)G.echoed=!0,Sv(G.rootElementId),$5.delete(Y.modalId),P({type:"ls_modal_dismissed",modalId:Y.modalId})}break}}});return()=>{b();for(let M of $5.values()){try{M.handle.dismiss()}catch{}Sv(M.rootElementId)}$5.clear()}}function uT(w){return w?.type==="ls_context_menu_show"}function Yz(w,O,P){let b=O(async(M)=>{if(!uT(M))return;let Y=M,G=null;try{G=(await w.ui.showContextMenu({position:Y.options.position,items:Y.options.items})).selectedKey}catch(R){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",R)}P({type:"ls_context_menu_result",requestId:Y.requestId,selectedKey:G})});return()=>{b()}}function TT(w){let O=w?.type;return O==="ls_input_bar_action_register"||O==="ls_input_bar_action_set_label"||O==="ls_input_bar_action_set_enabled"||O==="ls_input_bar_action_destroy"}var Qw=new Map;function CT(w,O){return`${w}:${O}`}function Gz(w,O,P){let b=O((M)=>{if(!TT(M))return;let Y=M,G=CT(Y.scriptId,Y.actionId);switch(Y.type){case"ls_input_bar_action_register":{let R=Qw.get(G);if(R){try{R.destroy()}catch{}Qw.delete(G)}let $;try{$=w.ui.registerInputBarAction({id:Y.actionId,label:Y.options.label,iconSvg:Y.options.iconSvg,iconUrl:Y.options.iconUrl,enabled:Y.options.enabled})}catch(U){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",U);break}Qw.set(G,$),$.onClick(()=>{P({type:"ls_input_bar_action_click",scriptId:Y.scriptId,actionId:Y.actionId})});break}case"ls_input_bar_action_set_label":{let R=Qw.get(G);if(!R)break;try{R.setLabel(Y.label)}catch{}break}case"ls_input_bar_action_set_enabled":{let R=Qw.get(G);if(!R)break;try{R.setEnabled(Y.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let R=Qw.get(G);if(!R)break;try{R.destroy()}catch{}Qw.delete(G);break}}});return()=>{b();for(let M of Qw.values())try{M.destroy()}catch{}Qw.clear()}}function ST(w){let O=w?.type;return O==="ls_float_widget_create"||O==="ls_float_widget_move"||O==="ls_float_widget_set_visible"||O==="ls_float_widget_destroy"}var Kw=new Map;function Rz(w,O,P){let b=O((M)=>{if(!ST(M))return;let Y=M;switch(Y.type){case"ls_float_widget_create":{let{scriptId:G,widgetId:R,rootElementId:$,options:U}=Y,z=Kw.get(R);if(z){try{z.handle.destroy()}catch{}Sv(z.rootElementId),Kw.delete(R)}let J;try{J=w.ui.createFloatWidget({width:U.width,height:U.height,initialPosition:U.initialPosition,snapToEdge:U.snapToEdge,tooltip:U.tooltip,chromeless:U.chromeless})}catch(L){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",L);break}E6($,J.root),J.root.setAttribute("data-ls-script",G),J.root.setAttribute("data-ls-widget",R),Kw.set(R,{widgetId:R,rootElementId:$,handle:J}),J.onDragEnd((L)=>{P({type:"ls_float_widget_drag_end",widgetId:R,x:L.x,y:L.y})});break}case"ls_float_widget_move":{let G=Kw.get(Y.widgetId);if(!G)break;try{G.handle.moveTo(Y.x,Y.y)}catch{}break}case"ls_float_widget_set_visible":{let G=Kw.get(Y.widgetId);if(!G)break;try{G.handle.setVisible(Y.visible)}catch{}break}case"ls_float_widget_destroy":{let G=Kw.get(Y.widgetId);if(!G)break;try{G.handle.destroy()}catch{}Sv(G.rootElementId),Kw.delete(Y.widgetId);break}}});return()=>{b();for(let M of Kw.values()){try{M.handle.destroy()}catch{}Sv(M.rootElementId)}Kw.clear()}}function lT(w){let O=w?.type;return O==="ls_drawer_tab_register"||O==="ls_drawer_tab_set_title"||O==="ls_drawer_tab_set_short_name"||O==="ls_drawer_tab_set_badge"||O==="ls_drawer_tab_activate"||O==="ls_drawer_tab_destroy"}var av=new Map;function oT(w,O){return`${w}:${O}`}function hz(w,O,P){let b=O((M)=>{if(!lT(M))return;let Y=M,G=oT(Y.scriptId,Y.tabId);switch(Y.type){case"ls_drawer_tab_register":{let R=av.get(G);if(R){try{R.handle.destroy()}catch{}Sv(R.rootElementId),av.delete(G)}let $;try{$=w.ui.registerDrawerTab({id:Y.options.id,title:Y.options.title,shortName:Y.options.shortName,description:Y.options.description,keywords:Y.options.keywords,headerTitle:Y.options.headerTitle,iconSvg:Y.options.iconSvg,iconUrl:Y.options.iconUrl})}catch(U){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",U);break}E6(Y.rootElementId,$.root),$.root.setAttribute("data-ls-script",Y.scriptId),$.root.setAttribute("data-ls-tab",Y.tabId),av.set(G,{scriptId:Y.scriptId,tabId:Y.tabId,rootElementId:Y.rootElementId,handle:$}),$.onActivate(()=>{P({type:"ls_drawer_tab_activated",scriptId:Y.scriptId,tabId:Y.tabId})});break}case"ls_drawer_tab_set_title":{let R=av.get(G);if(!R)break;try{R.handle.setTitle(Y.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let R=av.get(G);if(!R)break;try{R.handle.setShortName(Y.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let R=av.get(G);if(!R)break;try{R.handle.setBadge(Y.badge)}catch{}break}case"ls_drawer_tab_activate":{let R=av.get(G);if(!R)break;try{R.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let R=av.get(G);if(!R)break;try{R.handle.destroy()}catch{}Sv(R.rootElementId),av.delete(G);break}}});return()=>{b();for(let M of av.values()){try{M.handle.destroy()}catch{}Sv(M.rootElementId)}av.clear()}}var BO=Xg(sg(),1);function ee0(w){let O=[],P=w.dom.addStyle(bJ);O.push(P);let b=[],M=w.onBackendMessage((_)=>{for(let Mg of b)Mg(_)});O.push(M);let Y=(_)=>{return b.push(_),()=>{let Mg=b.indexOf(_);if(Mg!==-1)b.splice(Mg,1)}},G=(_)=>{w.sendToBackend(_)},R=Mz(w,Y,G);O.push(R);let $=Xz(w,Y,G);O.push($);let U=Yz(w,Y,G);O.push(U);let z=Gz(w,Y,G);O.push(z);let J=Rz(w,Y,G);O.push(J);let L=hz(w,Y,G);O.push(L),G({type:"frontend_ready"});let l=w.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),t=P9.createRoot(l.root);t.render(BO.jsxDEV(A9.StrictMode,{children:BO.jsxDEV(qz,{onBackendMessage:Y,sendToBackend:G},void 0,!1,void 0,this)},void 0,!1,void 0,this)),O.push(()=>{try{t.unmount()}catch{}try{l.destroy()}catch{}});let j=w.ui.mount("settings_extensions"),s=P9.createRoot(j);return s.render(BO.jsxDEV(A9.StrictMode,{children:BO.jsxDEV(Az,{onBackendMessage:Y,sendToBackend:G},void 0,!1,void 0,this)},void 0,!1,void 0,this)),O.push(()=>s.unmount()),()=>{for(let _ of O)try{_()}catch{}w.dom.cleanup()}}export{ee0 as setup};
