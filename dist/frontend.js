var aF=Object.create;var{getPrototypeOf:sF,defineProperty:wM,getOwnPropertyNames:gB}=Object;var vB=Object.prototype.hasOwnProperty;function wB(r){return this[r]}var rB,HB,Mg=(r,O,P)=>{var b=r!=null&&typeof r==="object";if(b){var M=O?rB??=new WeakMap:HB??=new WeakMap,Y=M.get(r);if(Y)return Y}P=r!=null?aF(sF(r)):{};let G=O||!r||!r.__esModule?wM(P,"default",{value:r,enumerable:!0}):P;for(let h of gB(r))if(!vB.call(G,h))wM(G,h,{get:wB.bind(r,h),enumerable:!0});if(b)M.set(r,G);return G};var X4=(r,O)=>()=>(O||r((O={exports:{}}).exports,O),O.exports);var OB=(r)=>r;function qB(r,O){this[r]=OB.bind(null,O)}var AB=(r,O)=>{for(var P in O)wM(r,P,{get:O[P],enumerable:!0,configurable:!0,set:qB.bind(O,P)})};var O0=X4((PB,jq)=>{(function(){function r(K,C){Object.defineProperty(b.prototype,K,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",C[0],C[1])}})}function O(K){if(K===null||typeof K!=="object")return null;return K=xw&&K[xw]||K["@@iterator"],typeof K==="function"?K:null}function P(K,C){K=(K=K.constructor)&&(K.displayName||K.name)||"ReactClass";var c=K+"."+C;Pg[c]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",C,K),Pg[c]=!0)}function b(K,C,c){this.props=K,this.context=C,this.refs=Jv,this.updater=c||hv}function M(){}function Y(K,C,c){this.props=K,this.context=C,this.refs=Jv,this.updater=c||hv}function G(){}function h(K){return""+K}function $(K){try{h(K);var C=!1}catch(hg){C=!0}if(C){C=console;var c=C.error,Og=typeof Symbol==="function"&&Symbol.toStringTag&&K[Symbol.toStringTag]||K.constructor.name||"Object";return c.call(C,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Og),h(K)}}function U(K){if(K==null)return null;if(typeof K==="function")return K.$$typeof===y6?null:K.displayName||K.name||null;if(typeof K==="string")return K;switch(K){case Wg:return"Fragment";case p:return"Profiler";case S:return"StrictMode";case ng:return"Suspense";case dg:return"SuspenseList";case Q1:return"Activity"}if(typeof K==="object")switch(typeof K.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),K.$$typeof){case i:return"Portal";case Rg:return K.displayName||"Context";case Yg:return(K._context.displayName||"Context")+".Consumer";case Fg:var C=K.render;return K=K.displayName,K||(K=C.displayName||C.name||"",K=K!==""?"ForwardRef("+K+")":"ForwardRef"),K;case x0:return C=K.displayName||null,C!==null?C:U(K.type)||"Memo";case j0:C=K._payload,K=K._init;try{return U(K(C))}catch(c){}}return null}function z(K){if(K===Wg)return"<>";if(typeof K==="object"&&K!==null&&K.$$typeof===j0)return"<...>";try{var C=U(K);return C?"<"+C+">":"<...>"}catch(c){return"<...>"}}function Q(){var K=xg.A;return K===null?null:K.getOwner()}function L(){return Error("react-stack-top-frame")}function l(K){if(I4.call(K,"key")){var C=Object.getOwnPropertyDescriptor(K,"key").get;if(C&&C.isReactWarning)return!1}return K.key!==void 0}function e(K,C){function c(){NO||(NO=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",C))}c.isReactWarning=!0,Object.defineProperty(K,"key",{get:c,configurable:!0})}function j(){var K=U(this.type);return U5[K]||(U5[K]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),K=this.props.ref,K!==void 0?K:null}function s(K,C,c,Og,hg,Cg){var Sg=c.ref;return K={$$typeof:vg,type:K,key:C,props:c,_owner:Og},(Sg!==void 0?Sg:null)!==null?Object.defineProperty(K,"ref",{enumerable:!1,get:j}):Object.defineProperty(K,"ref",{enumerable:!1,value:null}),K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(K,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(K,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:hg}),Object.defineProperty(K,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Cg}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K}function n(K,C){return C=s(K.type,C,K.props,K._owner,K._debugStack,K._debugTask),K._store&&(C._store.validated=K._store.validated),C}function Gg(K){wg(K)?K._store&&(K._store.validated=1):typeof K==="object"&&K!==null&&K.$$typeof===j0&&(K._payload.status==="fulfilled"?wg(K._payload.value)&&K._payload.value._store&&(K._payload.value._store.validated=1):K._store&&(K._store.validated=1))}function wg(K){return typeof K==="object"&&K!==null&&K.$$typeof===vg}function _(K){var C={"=":"=0",":":"=2"};return"$"+K.replace(/[=:]/g,function(c){return C[c]})}function t(K,C){return typeof K==="object"&&K!==null&&K.key!=null?($(K.key),_(""+K.key)):C.toString(36)}function Ag(K){switch(K.status){case"fulfilled":return K.value;case"rejected":throw K.reason;default:switch(typeof K.status==="string"?K.then(G,G):(K.status="pending",K.then(function(C){K.status==="pending"&&(K.status="fulfilled",K.value=C)},function(C){K.status==="pending"&&(K.status="rejected",K.reason=C)})),K.status){case"fulfilled":return K.value;case"rejected":throw K.reason}}throw K}function rg(K,C,c,Og,hg){var Cg=typeof K;if(Cg==="undefined"||Cg==="boolean")K=null;var Sg=!1;if(K===null)Sg=!0;else switch(Cg){case"bigint":case"string":case"number":Sg=!0;break;case"object":switch(K.$$typeof){case vg:case i:Sg=!0;break;case j0:return Sg=K._init,rg(Sg(K._payload),C,c,Og,hg)}}if(Sg){Sg=K,hg=hg(Sg);var g0=Og===""?"."+t(Sg,0):Og;return b0(hg)?(c="",g0!=null&&(c=g0.replace(Z4,"$&/")+"/"),rg(hg,C,c,"",function(R1){return R1})):hg!=null&&(wg(hg)&&(hg.key!=null&&(Sg&&Sg.key===hg.key||$(hg.key)),c=n(hg,c+(hg.key==null||Sg&&Sg.key===hg.key?"":(""+hg.key).replace(Z4,"$&/")+"/")+g0),Og!==""&&Sg!=null&&wg(Sg)&&Sg.key==null&&Sg._store&&!Sg._store.validated&&(c._store.validated=2),hg=c),C.push(hg)),1}if(Sg=0,g0=Og===""?".":Og+":",b0(K))for(var zg=0;zg<K.length;zg++)Og=K[zg],Cg=g0+t(Og,zg),Sg+=rg(Og,C,c,Cg,hg);else if(zg=O(K),typeof zg==="function")for(zg===K.entries&&(N4||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),N4=!0),K=zg.call(K),zg=0;!(Og=K.next()).done;)Og=Og.value,Cg=g0+t(Og,zg++),Sg+=rg(Og,C,c,Cg,hg);else if(Cg==="object"){if(typeof K.then==="function")return rg(Ag(K),C,c,Og,hg);throw C=String(K),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(K).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Sg}function a(K,C,c){if(K==null)return K;var Og=[],hg=0;return rg(K,Og,"","",function(Cg){return C.call(c,Cg,hg++)}),Og}function Hg(K){if(K._status===-1){var C=K._ioInfo;C!=null&&(C.start=C.end=performance.now()),C=K._result;var c=C();if(c.then(function(hg){if(K._status===0||K._status===-1){K._status=1,K._result=hg;var Cg=K._ioInfo;Cg!=null&&(Cg.end=performance.now()),c.status===void 0&&(c.status="fulfilled",c.value=hg)}},function(hg){if(K._status===0||K._status===-1){K._status=2,K._result=hg;var Cg=K._ioInfo;Cg!=null&&(Cg.end=performance.now()),c.status===void 0&&(c.status="rejected",c.reason=hg)}}),C=K._ioInfo,C!=null){C.value=c;var Og=c.displayName;typeof Og==="string"&&(C.name=Og)}K._status===-1&&(K._status=0,K._result=c)}if(K._status===1)return C=K._result,C===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,C),"default"in C||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,C),C.default;throw K._result}function k(){var K=xg.H;return K===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),K}function Ig(){xg.asyncTransitions--}function Qg(K){if(F5===null)try{var C=("require"+Math.random()).slice(0,7);F5=(jq&&jq[C]).call(jq,"timers").setImmediate}catch(c){F5=function(Og){ZO===!1&&(ZO=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var hg=new MessageChannel;hg.port1.onmessage=Og,hg.port2.postMessage(void 0)}}return F5(K)}function Kg(K){return 1<K.length&&typeof AggregateError==="function"?AggregateError(K):K[0]}function Vg(K,C){C!==B5-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),B5=C}function V(K,C,c){var Og=xg.actQueue;if(Og!==null)if(Og.length!==0)try{d(Og),Qg(function(){return V(K,C,c)});return}catch(hg){xg.thrownErrors.push(hg)}else xg.actQueue=null;0<xg.thrownErrors.length?(Og=Kg(xg.thrownErrors),xg.thrownErrors.length=0,c(Og)):C(K)}function d(K){if(!N5){N5=!0;var C=0;try{for(;C<K.length;C++){var c=K[C];do{xg.didUsePromise=!1;var Og=c(!1);if(Og!==null){if(xg.didUsePromise){K[C]=c,K.splice(0,C);return}c=Og}else break}while(1)}K.length=0}catch(hg){K.splice(0,C+1),xg.thrownErrors.push(hg)}finally{N5=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var vg=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),Wg=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),Yg=Symbol.for("react.consumer"),Rg=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),dg=Symbol.for("react.suspense_list"),x0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),Q1=Symbol.for("react.activity"),xw=Symbol.iterator,Pg={},hv={isMounted:function(){return!1},enqueueForceUpdate:function(K){P(K,"forceUpdate")},enqueueReplaceState:function(K){P(K,"replaceState")},enqueueSetState:function(K){P(K,"setState")}},m1=Object.assign,Jv={};Object.freeze(Jv),b.prototype.isReactComponent={},b.prototype.setState=function(K,C){if(typeof K!=="object"&&typeof K!=="function"&&K!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,K,C,"setState")},b.prototype.forceUpdate=function(K){this.updater.enqueueForceUpdate(this,K,"forceUpdate")};var v1={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(zr in v1)v1.hasOwnProperty(zr)&&r(zr,v1[zr]);M.prototype=b.prototype,v1=Y.prototype=new M,v1.constructor=Y,m1(v1,b.prototype),v1.isPureReactComponent=!0;var b0=Array.isArray,y6=Symbol.for("react.client.reference"),xg={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},I4=Object.prototype.hasOwnProperty,h0=console.createTask?console.createTask:function(){return null};v1={react_stack_bottom_frame:function(K){return K()}};var NO,sv,U5={},L5=v1.react_stack_bottom_frame.bind(v1,L)(),UA=h0(z(L)),N4=!1,Z4=/\/+/g,$r=typeof reportError==="function"?reportError:function(K){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof K==="object"&&K!==null&&typeof K.message==="string"?String(K.message):String(K),error:K});if(!window.dispatchEvent(C))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",K);return}console.error(K)},ZO=!1,F5=null,B5=0,I5=!1,N5=!1,j6=typeof queueMicrotask==="function"?function(K){queueMicrotask(function(){return queueMicrotask(K)})}:Qg;v1=Object.freeze({__proto__:null,c:function(K){return k().useMemoCache(K)}});var zr={map:a,forEach:function(K,C,c){a(K,function(){C.apply(this,arguments)},c)},count:function(K){var C=0;return a(K,function(){C++}),C},toArray:function(K){return a(K,function(C){return C})||[]},only:function(K){if(!wg(K))throw Error("React.Children.only expected to receive a single React element child.");return K}};PB.Activity=Q1,PB.Children=zr,PB.Component=b,PB.Fragment=Wg,PB.Profiler=p,PB.PureComponent=Y,PB.StrictMode=S,PB.Suspense=ng,PB.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xg,PB.__COMPILER_RUNTIME=v1,PB.act=function(K){var C=xg.actQueue,c=B5;B5++;var Og=xg.actQueue=C!==null?C:[],hg=!1;try{var Cg=K()}catch(zg){xg.thrownErrors.push(zg)}if(0<xg.thrownErrors.length)throw Vg(C,c),K=Kg(xg.thrownErrors),xg.thrownErrors.length=0,K;if(Cg!==null&&typeof Cg==="object"&&typeof Cg.then==="function"){var Sg=Cg;return j6(function(){hg||I5||(I5=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(zg,R1){hg=!0,Sg.then(function(c1){if(Vg(C,c),c===0){try{d(Og),Qg(function(){return V(c1,zg,R1)})}catch(i6){xg.thrownErrors.push(i6)}if(0<xg.thrownErrors.length){var Ur=Kg(xg.thrownErrors);xg.thrownErrors.length=0,R1(Ur)}}else zg(c1)},function(c1){Vg(C,c),0<xg.thrownErrors.length?(c1=Kg(xg.thrownErrors),xg.thrownErrors.length=0,R1(c1)):R1(c1)})}}}var g0=Cg;if(Vg(C,c),c===0&&(d(Og),Og.length!==0&&j6(function(){hg||I5||(I5=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),xg.actQueue=null),0<xg.thrownErrors.length)throw K=Kg(xg.thrownErrors),xg.thrownErrors.length=0,K;return{then:function(zg,R1){hg=!0,c===0?(xg.actQueue=Og,Qg(function(){return V(g0,zg,R1)})):zg(g0)}}},PB.cache=function(K){return function(){return K.apply(null,arguments)}},PB.cacheSignal=function(){return null},PB.captureOwnerStack=function(){var K=xg.getCurrentStack;return K===null?null:K()},PB.cloneElement=function(K,C,c){if(K===null||K===void 0)throw Error("The argument must be a React element, but you passed "+K+".");var Og=m1({},K.props),hg=K.key,Cg=K._owner;if(C!=null){var Sg;g:{if(I4.call(C,"ref")&&(Sg=Object.getOwnPropertyDescriptor(C,"ref").get)&&Sg.isReactWarning){Sg=!1;break g}Sg=C.ref!==void 0}Sg&&(Cg=Q()),l(C)&&($(C.key),hg=""+C.key);for(g0 in C)!I4.call(C,g0)||g0==="key"||g0==="__self"||g0==="__source"||g0==="ref"&&C.ref===void 0||(Og[g0]=C[g0])}var g0=arguments.length-2;if(g0===1)Og.children=c;else if(1<g0){Sg=Array(g0);for(var zg=0;zg<g0;zg++)Sg[zg]=arguments[zg+2];Og.children=Sg}Og=s(K.type,hg,Og,Cg,K._debugStack,K._debugTask);for(hg=2;hg<arguments.length;hg++)Gg(arguments[hg]);return Og},PB.createContext=function(K){return K={$$typeof:Rg,_currentValue:K,_currentValue2:K,_threadCount:0,Provider:null,Consumer:null},K.Provider=K,K.Consumer={$$typeof:Yg,_context:K},K._currentRenderer=null,K._currentRenderer2=null,K},PB.createElement=function(K,C,c){for(var Og=2;Og<arguments.length;Og++)Gg(arguments[Og]);Og={};var hg=null;if(C!=null)for(zg in sv||!("__self"in C)||"key"in C||(sv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),l(C)&&($(C.key),hg=""+C.key),C)I4.call(C,zg)&&zg!=="key"&&zg!=="__self"&&zg!=="__source"&&(Og[zg]=C[zg]);var Cg=arguments.length-2;if(Cg===1)Og.children=c;else if(1<Cg){for(var Sg=Array(Cg),g0=0;g0<Cg;g0++)Sg[g0]=arguments[g0+2];Object.freeze&&Object.freeze(Sg),Og.children=Sg}if(K&&K.defaultProps)for(zg in Cg=K.defaultProps,Cg)Og[zg]===void 0&&(Og[zg]=Cg[zg]);hg&&e(Og,typeof K==="function"?K.displayName||K.name||"Unknown":K);var zg=1e4>xg.recentlyCreatedOwnerStacks++;return s(K,hg,Og,Q(),zg?Error("react-stack-top-frame"):L5,zg?h0(z(K)):UA)},PB.createRef=function(){var K={current:null};return Object.seal(K),K},PB.forwardRef=function(K){K!=null&&K.$$typeof===x0?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof K!=="function"?console.error("forwardRef requires a render function but was given %s.",K===null?"null":typeof K):K.length!==0&&K.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",K.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),K!=null&&K.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var C={$$typeof:Fg,render:K},c;return Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return c},set:function(Og){c=Og,K.name||K.displayName||(Object.defineProperty(K,"name",{value:Og}),K.displayName=Og)}}),C},PB.isValidElement=wg,PB.lazy=function(K){K={_status:-1,_result:K};var C={$$typeof:j0,_payload:K,_init:Hg},c={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return K._ioInfo=c,C._debugInfo=[{awaited:c}],C},PB.memo=function(K,C){K==null&&console.error("memo: The first argument must be a component. Instead received: %s",K===null?"null":typeof K),C={$$typeof:x0,type:K,compare:C===void 0?null:C};var c;return Object.defineProperty(C,"displayName",{enumerable:!1,configurable:!0,get:function(){return c},set:function(Og){c=Og,K.name||K.displayName||(Object.defineProperty(K,"name",{value:Og}),K.displayName=Og)}}),C},PB.startTransition=function(K){var C=xg.T,c={};c._updatedFibers=new Set,xg.T=c;try{var Og=K(),hg=xg.S;hg!==null&&hg(c,Og),typeof Og==="object"&&Og!==null&&typeof Og.then==="function"&&(xg.asyncTransitions++,Og.then(Ig,Ig),Og.then(G,$r))}catch(Cg){$r(Cg)}finally{C===null&&c._updatedFibers&&(K=c._updatedFibers.size,c._updatedFibers.clear(),10<K&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),C!==null&&c.types!==null&&(C.types!==null&&C.types!==c.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),C.types=c.types),xg.T=C}},PB.unstable_useCacheRefresh=function(){return k().useCacheRefresh()},PB.use=function(K){return k().use(K)},PB.useActionState=function(K,C,c){return k().useActionState(K,C,c)},PB.useCallback=function(K,C){return k().useCallback(K,C)},PB.useContext=function(K){var C=k();return K.$$typeof===Yg&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),C.useContext(K)},PB.useDebugValue=function(K,C){return k().useDebugValue(K,C)},PB.useDeferredValue=function(K,C){return k().useDeferredValue(K,C)},PB.useEffect=function(K,C){return K==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useEffect(K,C)},PB.useEffectEvent=function(K){return k().useEffectEvent(K)},PB.useId=function(){return k().useId()},PB.useImperativeHandle=function(K,C,c){return k().useImperativeHandle(K,C,c)},PB.useInsertionEffect=function(K,C){return K==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useInsertionEffect(K,C)},PB.useLayoutEffect=function(K,C){return K==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),k().useLayoutEffect(K,C)},PB.useMemo=function(K,C){return k().useMemo(K,C)},PB.useOptimistic=function(K,C){return k().useOptimistic(K,C)},PB.useReducer=function(K,C,c){return k().useReducer(K,C,c)},PB.useRef=function(K){return k().useRef(K)},PB.useState=function(K){return k().useState(K)},PB.useSyncExternalStore=function(K,C,c){return k().useSyncExternalStore(K,C,c)},PB.useTransition=function(){return k().useTransition()},PB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var cJ=X4((bB)=>{(function(){function r(){if(_=!1,a){var V=bB.unstable_now();Ig=V;var d=!0;try{g:{Gg=!1,wg&&(wg=!1,Ag(Hg),Hg=-1),n=!0;var vg=s;try{v:{Y(V);for(j=P(L);j!==null&&!(j.expirationTime>V&&h());){var i=j.callback;if(typeof i==="function"){j.callback=null,s=j.priorityLevel;var Wg=i(j.expirationTime<=V);if(V=bB.unstable_now(),typeof Wg==="function"){j.callback=Wg,Y(V),d=!0;break v}j===P(L)&&b(L),Y(V)}else b(L);j=P(L)}if(j!==null)d=!0;else{var S=P(l);S!==null&&$(G,S.startTime-V),d=!1}}break g}finally{j=null,s=vg,n=!1}d=void 0}}finally{d?Qg():a=!1}}}function O(V,d){var vg=V.length;V.push(d);g:for(;0<vg;){var i=vg-1>>>1,Wg=V[i];if(0<M(Wg,d))V[i]=d,V[vg]=Wg,vg=i;else break g}}function P(V){return V.length===0?null:V[0]}function b(V){if(V.length===0)return null;var d=V[0],vg=V.pop();if(vg!==d){V[0]=vg;g:for(var i=0,Wg=V.length,S=Wg>>>1;i<S;){var p=2*(i+1)-1,Yg=V[p],Rg=p+1,Fg=V[Rg];if(0>M(Yg,vg))Rg<Wg&&0>M(Fg,Yg)?(V[i]=Fg,V[Rg]=vg,i=Rg):(V[i]=Yg,V[p]=vg,i=p);else if(Rg<Wg&&0>M(Fg,vg))V[i]=Fg,V[Rg]=vg,i=Rg;else break g}}return d}function M(V,d){var vg=V.sortIndex-d.sortIndex;return vg!==0?vg:V.id-d.id}function Y(V){for(var d=P(l);d!==null;){if(d.callback===null)b(l);else if(d.startTime<=V)b(l),d.sortIndex=d.expirationTime,O(L,d);else break;d=P(l)}}function G(V){if(wg=!1,Y(V),!Gg)if(P(L)!==null)Gg=!0,a||(a=!0,Qg());else{var d=P(l);d!==null&&$(G,d.startTime-V)}}function h(){return _?!0:bB.unstable_now()-Ig<k?!1:!0}function $(V,d){Hg=t(function(){V(bB.unstable_now())},d)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),bB.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var U=performance;bB.unstable_now=function(){return U.now()}}else{var z=Date,Q=z.now();bB.unstable_now=function(){return z.now()-Q}}var L=[],l=[],e=1,j=null,s=3,n=!1,Gg=!1,wg=!1,_=!1,t=typeof setTimeout==="function"?setTimeout:null,Ag=typeof clearTimeout==="function"?clearTimeout:null,rg=typeof setImmediate<"u"?setImmediate:null,a=!1,Hg=-1,k=5,Ig=-1;if(typeof rg==="function")var Qg=function(){rg(r)};else if(typeof MessageChannel<"u"){var Kg=new MessageChannel,Vg=Kg.port2;Kg.port1.onmessage=r,Qg=function(){Vg.postMessage(null)}}else Qg=function(){t(r,0)};bB.unstable_IdlePriority=5,bB.unstable_ImmediatePriority=1,bB.unstable_LowPriority=4,bB.unstable_NormalPriority=3,bB.unstable_Profiling=null,bB.unstable_UserBlockingPriority=2,bB.unstable_cancelCallback=function(V){V.callback=null},bB.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<V?Math.floor(1000/V):5},bB.unstable_getCurrentPriorityLevel=function(){return s},bB.unstable_next=function(V){switch(s){case 1:case 2:case 3:var d=3;break;default:d=s}var vg=s;s=d;try{return V()}finally{s=vg}},bB.unstable_requestPaint=function(){_=!0},bB.unstable_runWithPriority=function(V,d){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var vg=s;s=V;try{return d()}finally{s=vg}},bB.unstable_scheduleCallback=function(V,d,vg){var i=bB.unstable_now();switch(typeof vg==="object"&&vg!==null?(vg=vg.delay,vg=typeof vg==="number"&&0<vg?i+vg:i):vg=i,V){case 1:var Wg=-1;break;case 2:Wg=250;break;case 5:Wg=1073741823;break;case 4:Wg=1e4;break;default:Wg=5000}return Wg=vg+Wg,V={id:e++,callback:d,priorityLevel:V,startTime:vg,expirationTime:Wg,sortIndex:-1},vg>i?(V.sortIndex=vg,O(l,V),P(L)===null&&V===P(l)&&(wg?(Ag(Hg),Hg=-1):wg=!0,$(G,vg-i))):(V.sortIndex=Wg,O(L,V),Gg||n||(Gg=!0,a||(a=!0,Qg()))),V},bB.unstable_shouldYield=h,bB.unstable_wrapCallback=function(V){var d=s;return function(){var vg=s;s=d;try{return V.apply(this,arguments)}finally{s=vg}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var tJ=X4((WB)=>{var rM=Mg(O0());(function(){function r(){}function O(z){return""+z}function P(z,Q,L){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{O(l);var e=!1}catch(j){e=!0}return e&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&l[Symbol.toStringTag]||l.constructor.name||"Object"),O(l)),{$$typeof:$,key:l==null?null:""+l,children:z,containerInfo:Q,implementation:L}}function b(z,Q){if(z==="font")return"";if(typeof Q==="string")return Q==="use-credentials"?Q:""}function M(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":'something with type "'+typeof z+'"'}function Y(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":typeof z==="string"?JSON.stringify(z):typeof z==="number"?"`"+z+"`":'something with type "'+typeof z+'"'}function G(){var z=U.H;return z===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),z}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var h={d:{f:r,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},$=Symbol.for("react.portal"),U=rM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),WB.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,WB.createPortal=function(z,Q){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Q||Q.nodeType!==1&&Q.nodeType!==9&&Q.nodeType!==11)throw Error("Target container is not a DOM element.");return P(z,Q,null,L)},WB.flushSync=function(z){var Q=U.T,L=h.p;try{if(U.T=null,h.p=2,z)return z()}finally{U.T=Q,h.p=L,h.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},WB.preconnect=function(z,Q){typeof z==="string"&&z?Q!=null&&typeof Q!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",Y(Q)):Q!=null&&typeof Q.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",M(Q.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z)),typeof z==="string"&&(Q?(Q=Q.crossOrigin,Q=typeof Q==="string"?Q==="use-credentials"?Q:"":void 0):Q=null,h.d.C(z,Q))},WB.prefetchDNS=function(z){if(typeof z!=="string"||!z)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z));else if(1<arguments.length){var Q=arguments[1];typeof Q==="object"&&Q.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",Y(Q)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",Y(Q))}typeof z==="string"&&h.d.D(z)},WB.preinit=function(z,Q){if(typeof z==="string"&&z?Q==null||typeof Q!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",Y(Q)):Q.as!=="style"&&Q.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',Y(Q.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",M(z)),typeof z==="string"&&Q&&typeof Q.as==="string"){var L=Q.as,l=b(L,Q.crossOrigin),e=typeof Q.integrity==="string"?Q.integrity:void 0,j=typeof Q.fetchPriority==="string"?Q.fetchPriority:void 0;L==="style"?h.d.S(z,typeof Q.precedence==="string"?Q.precedence:void 0,{crossOrigin:l,integrity:e,fetchPriority:j}):L==="script"&&h.d.X(z,{crossOrigin:l,integrity:e,fetchPriority:j,nonce:typeof Q.nonce==="string"?Q.nonce:void 0})}},WB.preinitModule=function(z,Q){var L="";if(typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),Q!==void 0&&typeof Q!=="object"?L+=" The `options` argument encountered was "+M(Q)+".":Q&&("as"in Q)&&Q.as!=="script"&&(L+=" The `as` option encountered was "+Y(Q.as)+"."),L)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",L);else switch(L=Q&&typeof Q.as==="string"?Q.as:"script",L){case"script":break;default:L=Y(L),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',L,z)}if(typeof z==="string")if(typeof Q==="object"&&Q!==null){if(Q.as==null||Q.as==="script")L=b(Q.as,Q.crossOrigin),h.d.M(z,{crossOrigin:L,integrity:typeof Q.integrity==="string"?Q.integrity:void 0,nonce:typeof Q.nonce==="string"?Q.nonce:void 0})}else Q==null&&h.d.M(z)},WB.preload=function(z,Q){var L="";if(typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),Q==null||typeof Q!=="object"?L+=" The `options` argument encountered was "+M(Q)+".":typeof Q.as==="string"&&Q.as||(L+=" The `as` option encountered was "+M(Q.as)+"."),L&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',L),typeof z==="string"&&typeof Q==="object"&&Q!==null&&typeof Q.as==="string"){L=Q.as;var l=b(L,Q.crossOrigin);h.d.L(z,L,{crossOrigin:l,integrity:typeof Q.integrity==="string"?Q.integrity:void 0,nonce:typeof Q.nonce==="string"?Q.nonce:void 0,type:typeof Q.type==="string"?Q.type:void 0,fetchPriority:typeof Q.fetchPriority==="string"?Q.fetchPriority:void 0,referrerPolicy:typeof Q.referrerPolicy==="string"?Q.referrerPolicy:void 0,imageSrcSet:typeof Q.imageSrcSet==="string"?Q.imageSrcSet:void 0,imageSizes:typeof Q.imageSizes==="string"?Q.imageSizes:void 0,media:typeof Q.media==="string"?Q.media:void 0})}},WB.preloadModule=function(z,Q){var L="";typeof z==="string"&&z||(L+=" The `href` argument encountered was "+M(z)+"."),Q!==void 0&&typeof Q!=="object"?L+=" The `options` argument encountered was "+M(Q)+".":Q&&("as"in Q)&&typeof Q.as!=="string"&&(L+=" The `as` option encountered was "+M(Q.as)+"."),L&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',L),typeof z==="string"&&(Q?(L=b(Q.as,Q.crossOrigin),h.d.m(z,{as:typeof Q.as==="string"&&Q.as!=="script"?Q.as:void 0,crossOrigin:L,integrity:typeof Q.integrity==="string"?Q.integrity:void 0})):h.d.m(z))},WB.requestFormReset=function(z){h.d.r(z)},WB.unstable_batchedUpdates=function(z,Q){return z(Q)},WB.useFormState=function(z,Q,L){return G().useFormState(z,Q,L)},WB.useFormStatus=function(){return G().useHostTransitionStatus()},WB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var zH=X4((qS,pJ)=>{pJ.exports=tJ()});var dJ=X4((MB)=>{var v0=Mg(cJ()),T6=Mg(O0()),HM=Mg(zH());(function(){function r(g,v){for(g=g.memoizedState;g!==null&&0<v;)g=g.next,v--;return g}function O(g,v,w,H){if(w>=v.length)return H;var q=v[w],A=a0(g)?g.slice():yg({},g);return A[q]=O(g[q],v,w+1,H),A}function P(g,v,w){if(v.length!==w.length)console.warn("copyWithRename() expects paths of the same length");else{for(var H=0;H<w.length-1;H++)if(v[H]!==w[H]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return b(g,v,w,0)}}function b(g,v,w,H){var q=v[H],A=a0(g)?g.slice():yg({},g);return H+1===v.length?(A[w[H]]=A[q],a0(A)?A.splice(q,1):delete A[q]):A[q]=b(g[q],v,w,H+1),A}function M(g,v,w){var H=v[w],q=a0(g)?g.slice():yg({},g);if(w+1===v.length)return a0(q)?q.splice(H,1):delete q[H],q;return q[H]=M(g[H],v,w+1),q}function Y(){return!1}function G(){return null}function h(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function $(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function U(){}function z(){}function Q(g){var v=[];return g.forEach(function(w){v.push(w)}),v.sort().join(", ")}function L(g,v,w,H){return new _z(g,v,w,H)}function l(g,v){g.context===yr&&(Ub(g.current,2,v,g,null,null),_4())}function e(g,v){if(Uv!==null){var w=v.staleFamilies;v=v.updatedFamilies,J8(),gX(g.current,v,w),_4()}}function j(g){Uv=g}function s(g){return!(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)}function n(g){var v=g,w=g;if(g.alternate)for(;v.return;)v=v.return;else{g=v;do v=g,(v.flags&4098)!==0&&(w=v.return),g=v.return;while(g)}return v.tag===3?w:null}function Gg(g){if(g.tag===13){var v=g.memoizedState;if(v===null&&(g=g.alternate,g!==null&&(v=g.memoizedState)),v!==null)return v.dehydrated}return null}function wg(g){if(g.tag===31){var v=g.memoizedState;if(v===null&&(g=g.alternate,g!==null&&(v=g.memoizedState)),v!==null)return v.dehydrated}return null}function _(g){if(n(g)!==g)throw Error("Unable to find node on an unmounted component.")}function t(g){var v=g.alternate;if(!v){if(v=n(g),v===null)throw Error("Unable to find node on an unmounted component.");return v!==g?null:g}for(var w=g,H=v;;){var q=w.return;if(q===null)break;var A=q.alternate;if(A===null){if(H=q.return,H!==null){w=H;continue}break}if(q.child===A.child){for(A=q.child;A;){if(A===w)return _(q),g;if(A===H)return _(q),v;A=A.sibling}throw Error("Unable to find node on an unmounted component.")}if(w.return!==H.return)w=q,H=A;else{for(var W=!1,X=q.child;X;){if(X===w){W=!0,w=q,H=A;break}if(X===H){W=!0,H=q,w=A;break}X=X.sibling}if(!W){for(X=A.child;X;){if(X===w){W=!0,w=A,H=q;break}if(X===H){W=!0,H=A,w=q;break}X=X.sibling}if(!W)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(w.alternate!==H)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(w.tag!==3)throw Error("Unable to find node on an unmounted component.");return w.stateNode.current===w?g:v}function Ag(g){var v=g.tag;if(v===5||v===26||v===27||v===6)return g;for(g=g.child;g!==null;){if(v=Ag(g),v!==null)return v;g=g.sibling}return null}function rg(g){if(g===null||typeof g!=="object")return null;return g=A7&&g[A7]||g["@@iterator"],typeof g==="function"?g:null}function a(g){if(g==null)return null;if(typeof g==="function")return g.$$typeof===PL?null:g.displayName||g.name||null;if(typeof g==="string")return g;switch(g){case c4:return"Fragment";case Zb:return"Profiler";case k2:return"StrictMode";case Tb:return"Suspense";case Cb:return"SuspenseList";case Sb:return"Activity"}if(typeof g==="object")switch(typeof g.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),g.$$typeof){case e4:return"Portal";case Qw:return g.displayName||"Context";case ub:return(g._context.displayName||"Context")+".Consumer";case I8:var v=g.render;return g=g.displayName,g||(g=v.displayName||v.name||"",g=g!==""?"ForwardRef("+g+")":"ForwardRef"),g;case m2:return v=g.displayName||null,v!==null?v:a(g.type)||"Memo";case rv:v=g._payload,g=g._init;try{return a(g(v))}catch(w){}}return null}function Hg(g){return typeof g.tag==="number"?k(g):typeof g.name==="string"?g.name:null}function k(g){var v=g.type;switch(g.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(v._context.displayName||"Context")+".Consumer";case 10:return v.displayName||"Context";case 18:return"DehydratedFragment";case 11:return g=v.render,g=g.displayName||g.name||"",v.displayName||(g!==""?"ForwardRef("+g+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return v;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return a(v);case 8:return v===k2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof v==="function")return v.displayName||v.name||null;if(typeof v==="string")return v;break;case 29:if(v=g._debugInfo,v!=null){for(var w=v.length-1;0<=w;w--)if(typeof v[w].name==="string")return v[w].name}if(g.return!==null)return k(g.return)}return null}function Ig(g){return{current:g}}function Qg(g,v){0>iw?console.error("Unexpected pop."):(v!==xb[iw]&&console.error("Unexpected Fiber popped."),g.current=lb[iw],lb[iw]=null,xb[iw]=null,iw--)}function Kg(g,v,w){iw++,lb[iw]=g.current,xb[iw]=w,g.current=v}function Vg(g){return g===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),g}function V(g,v){Kg(Dr,v,g),Kg(N8,g,g),Kg(or,null,g);var w=v.nodeType;switch(w){case 9:case 11:w=w===9?"#document":"#fragment",v=(v=v.documentElement)?(v=v.namespaceURI)?CG(v):Hr:Hr;break;default:if(w=v.tagName,v=v.namespaceURI)v=CG(v),v=SG(v,w);else switch(w){case"svg":v=Z6;break;case"math":v=Dq;break;default:v=Hr}}w=w.toLowerCase(),w=B9(null,w),w={context:v,ancestorInfo:w},Qg(or,g),Kg(or,w,g)}function d(g){Qg(or,g),Qg(N8,g),Qg(Dr,g)}function vg(){return Vg(or.current)}function i(g){g.memoizedState!==null&&Kg(V2,g,g);var v=Vg(or.current),w=g.type,H=SG(v.context,w);w=B9(v.ancestorInfo,w),H={context:H,ancestorInfo:w},v!==H&&(Kg(N8,g,g),Kg(or,H,g))}function Wg(g){N8.current===g&&(Qg(or,g),Qg(N8,g)),V2.current===g&&(Qg(V2,g),RH._currentValue=M4)}function S(){}function p(){if(Z8===0){P7=console.log,b7=console.info,W7=console.warn,M7=console.error,X7=console.group,Y7=console.groupCollapsed,G7=console.groupEnd;var g={configurable:!0,enumerable:!0,value:S,writable:!0};Object.defineProperties(console,{info:g,log:g,warn:g,error:g,group:g,groupCollapsed:g,groupEnd:g})}Z8++}function Yg(){if(Z8--,Z8===0){var g={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:yg({},g,{value:P7}),info:yg({},g,{value:b7}),warn:yg({},g,{value:W7}),error:yg({},g,{value:M7}),group:yg({},g,{value:X7}),groupCollapsed:yg({},g,{value:Y7}),groupEnd:yg({},g,{value:G7})})}0>Z8&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Rg(g){var v=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,g=g.stack,Error.prepareStackTrace=v,g.startsWith(`Error: react-stack-top-frame
`)&&(g=g.slice(29)),v=g.indexOf(`
`),v!==-1&&(g=g.slice(v+1)),v=g.indexOf("react_stack_bottom_frame"),v!==-1&&(v=g.lastIndexOf(`
`,v)),v!==-1)g=g.slice(0,v);else return"";return g}function Fg(g){if(ob===void 0)try{throw Error()}catch(w){var v=w.stack.trim().match(/\n( *(at )?)/);ob=v&&v[1]||"",h7=-1<w.stack.indexOf(`
    at`)?" (<anonymous>)":-1<w.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ob+g+h7}function ng(g,v){if(!g||Db)return"";var w=kb.get(g);if(w!==void 0)return w;Db=!0,w=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var H=null;H=D.H,D.H=null,p();try{var q={DetermineComponentFrameRoot:function(){try{if(v){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(gg){var x=gg}Reflect.construct(g,[],B)}else{try{B.call()}catch(gg){x=gg}g.call(B.prototype)}}else{try{throw Error()}catch(gg){x=gg}(B=g())&&typeof B.catch==="function"&&B.catch(function(){})}}catch(gg){if(gg&&x&&typeof gg.stack==="string")return[gg.stack,x.stack]}return[null,null]}};q.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var A=Object.getOwnPropertyDescriptor(q.DetermineComponentFrameRoot,"name");A&&A.configurable&&Object.defineProperty(q.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var W=q.DetermineComponentFrameRoot(),X=W[0],J=W[1];if(X&&J){var R=X.split(`
`),u=J.split(`
`);for(W=A=0;A<R.length&&!R[A].includes("DetermineComponentFrameRoot");)A++;for(;W<u.length&&!u[W].includes("DetermineComponentFrameRoot");)W++;if(A===R.length||W===u.length)for(A=R.length-1,W=u.length-1;1<=A&&0<=W&&R[A]!==u[W];)W--;for(;1<=A&&0<=W;A--,W--)if(R[A]!==u[W]){if(A!==1||W!==1)do if(A--,W--,0>W||R[A]!==u[W]){var T=`
`+R[A].replace(" at new "," at ");return g.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",g.displayName)),typeof g==="function"&&kb.set(g,T),T}while(1<=A&&0<=W);break}}}finally{Db=!1,D.H=H,Yg(),Error.prepareStackTrace=w}return R=(R=g?g.displayName||g.name:"")?Fg(R):"",typeof g==="function"&&kb.set(g,R),R}function dg(g,v){switch(g.tag){case 26:case 27:case 5:return Fg(g.type);case 16:return Fg("Lazy");case 13:return g.child!==v&&v!==null?Fg("Suspense Fallback"):Fg("Suspense");case 19:return Fg("SuspenseList");case 0:case 15:return ng(g.type,!1);case 11:return ng(g.type.render,!1);case 1:return ng(g.type,!0);case 31:return Fg("Activity");default:return""}}function x0(g){try{var v="",w=null;do{v+=dg(g,w);var H=g._debugInfo;if(H)for(var q=H.length-1;0<=q;q--){var A=H[q];if(typeof A.name==="string"){var W=v;g:{var{name:X,env:J,debugLocation:R}=A;if(R!=null){var u=Rg(R),T=u.lastIndexOf(`
`),B=T===-1?u:u.slice(T+1);if(B.indexOf(X)!==-1){var x=`
`+B;break g}}x=Fg(X+(J?" ["+J+"]":""))}v=W+x}}w=g,g=g.return}while(g);return v}catch(gg){return`
Error generating stack: `+gg.message+`
`+gg.stack}}function j0(g){return(g=g?g.displayName||g.name:"")?Fg(g):""}function Q1(){if(Hv===null)return null;var g=Hv._debugOwner;return g!=null?Hg(g):null}function xw(){if(Hv===null)return"";var g=Hv;try{var v="";switch(g.tag===6&&(g=g.return),g.tag){case 26:case 27:case 5:v+=Fg(g.type);break;case 13:v+=Fg("Suspense");break;case 19:v+=Fg("SuspenseList");break;case 31:v+=Fg("Activity");break;case 30:case 0:case 15:case 1:g._debugOwner||v!==""||(v+=j0(g.type));break;case 11:g._debugOwner||v!==""||(v+=j0(g.type.render))}for(;g;)if(typeof g.tag==="number"){var w=g;g=w._debugOwner;var H=w._debugStack;if(g&&H){var q=Rg(H);q!==""&&(v+=`
`+q)}}else if(g.debugStack!=null){var A=g.debugStack;(g=g.owner)&&A&&(v+=`
`+Rg(A))}else break;var W=v}catch(X){W=`
Error generating stack: `+X.message+`
`+X.stack}return W}function Pg(g,v,w,H,q,A,W){var X=Hv;hv(g);try{return g!==null&&g._debugTask?g._debugTask.run(v.bind(null,w,H,q,A,W)):v(w,H,q,A,W)}finally{hv(X)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function hv(g){D.getCurrentStack=g===null?null:xw,Rw=!1,Hv=g}function m1(g){return typeof Symbol==="function"&&Symbol.toStringTag&&g[Symbol.toStringTag]||g.constructor.name||"Object"}function Jv(g){try{return v1(g),!1}catch(v){return!0}}function v1(g){return""+g}function b0(g,v){if(Jv(g))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",v,m1(g)),v1(g)}function y6(g,v){if(Jv(g))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",v,m1(g)),v1(g)}function xg(g){if(Jv(g))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",m1(g)),v1(g)}function I4(g){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var v=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(v.isDisabled)return!0;if(!v.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{p4=v.inject(g),$1=v}catch(w){console.error("React instrumentation encountered an error: %o.",w)}return v.checkDCE?!0:!1}function h0(g){if(typeof hL==="function"&&JL(g),$1&&typeof $1.setStrictMode==="function")try{$1.setStrictMode(p4,g)}catch(v){Kw||(Kw=!0,console.error("React instrumentation encountered an error: %o",v))}}function NO(g){return g>>>=0,g===0?32:31-(QL(g)/RL|0)|0}function sv(g){var v=g&42;if(v!==0)return v;switch(g&-g){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return g&261888;case 262144:case 524288:case 1048576:case 2097152:return g&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return g&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),g}}function U5(g,v,w){var H=g.pendingLanes;if(H===0)return 0;var q=0,A=g.suspendedLanes,W=g.pingedLanes;g=g.warmLanes;var X=H&134217727;return X!==0?(H=X&~A,H!==0?q=sv(H):(W&=X,W!==0?q=sv(W):w||(w=X&~g,w!==0&&(q=sv(w))))):(X=H&~A,X!==0?q=sv(X):W!==0?q=sv(W):w||(w=H&~g,w!==0&&(q=sv(w)))),q===0?0:v!==0&&v!==q&&(v&A)===0&&(A=q&-q,w=v&-v,A>=w||A===32&&(w&4194048)!==0)?v:q}function L5(g,v){return(g.pendingLanes&~(g.suspendedLanes&~g.pingedLanes)&v)===0}function UA(g,v){switch(g){case 1:case 2:case 4:case 8:case 64:return v+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return v+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function N4(){var g=y2;return y2<<=1,(y2&62914560)===0&&(y2=4194304),g}function Z4(g){for(var v=[],w=0;31>w;w++)v.push(g);return v}function $r(g,v){g.pendingLanes|=v,v!==268435456&&(g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0)}function ZO(g,v,w,H,q,A){var W=g.pendingLanes;g.pendingLanes=w,g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0,g.expiredLanes&=w,g.entangledLanes&=w,g.errorRecoveryDisabledLanes&=w,g.shellSuspendCounter=0;var{entanglements:X,expirationTimes:J,hiddenUpdates:R}=g;for(w=W&~w;0<w;){var u=31-F1(w),T=1<<u;X[u]=0,J[u]=-1;var B=R[u];if(B!==null)for(R[u]=null,u=0;u<B.length;u++){var x=B[u];x!==null&&(x.lane&=-536870913)}w&=~T}H!==0&&F5(g,H,0),A!==0&&q===0&&g.tag!==0&&(g.suspendedLanes|=A&~(W&~v))}function F5(g,v,w){g.pendingLanes|=v,g.suspendedLanes&=~v;var H=31-F1(v);g.entangledLanes|=v,g.entanglements[H]=g.entanglements[H]|1073741824|w&261930}function B5(g,v){var w=g.entangledLanes|=v;for(g=g.entanglements;w;){var H=31-F1(w),q=1<<H;q&v|g[H]&v&&(g[H]|=v),w&=~q}}function I5(g,v){var w=v&-v;return w=(w&42)!==0?1:N5(w),(w&(g.suspendedLanes|v))!==0?0:w}function N5(g){switch(g){case 2:g=1;break;case 8:g=4;break;case 32:g=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:g=128;break;case 268435456:g=134217728;break;default:g=0}return g}function j6(g,v,w){if($w)for(g=g.pendingUpdatersLaneMap;0<w;){var H=31-F1(w),q=1<<H;g[H].add(v),w&=~q}}function zr(g,v){if($w)for(var{pendingUpdatersLaneMap:w,memoizedUpdaters:H}=g;0<v;){var q=31-F1(v);g=1<<q,q=w[q],0<q.size&&(q.forEach(function(A){var W=A.alternate;W!==null&&H.has(W)||H.add(A)}),q.clear()),v&=~g}}function K(g){return g&=-g,Ov!==0&&Ov<g?kv!==0&&kv<g?(g&134217727)!==0?zw:j2:kv:Ov}function C(){var g=H0.p;if(g!==0)return g;return g=window.event,g===void 0?zw:g7(g.type)}function c(g,v){var w=H0.p;try{return H0.p=g,v()}finally{H0.p=w}}function Og(g){delete g[Y1],delete g[B1],delete g[yb],delete g[KL],delete g[$L]}function hg(g){var v=g[Y1];if(v)return v;for(var w=g.parentNode;w;){if(v=w[mr]||w[Y1]){if(w=v.alternate,v.child!==null||w!==null&&w.child!==null)for(g=EG(g);g!==null;){if(w=g[Y1])return w;g=EG(g)}return v}g=w,w=g.parentNode}return null}function Cg(g){if(g=g[Y1]||g[mr]){var v=g.tag;if(v===5||v===6||v===13||v===31||v===26||v===27||v===3)return g}return null}function Sg(g){var v=g.tag;if(v===5||v===26||v===27||v===6)return g.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function g0(g){var v=g[J7];return v||(v=g[J7]={hoistableStyles:new Map,hoistableScripts:new Map}),v}function zg(g){g[u8]=!0}function R1(g,v){c1(g,v),c1(g+"Capture",v)}function c1(g,v){j5[g]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",g),j5[g]=v;var w=g.toLowerCase();jb[w]=g,g==="onDoubleClick"&&(jb.ondblclick=g);for(g=0;g<v.length;g++)Q7.add(v[g])}function Ur(g,v){zL[v.type]||v.onChange||v.onInput||v.readOnly||v.disabled||v.value==null||(g==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),v.onChange||v.readOnly||v.disabled||v.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function i6(g){if(Dv.call(K7,g))return!0;if(Dv.call(R7,g))return!1;if(UL.test(g))return K7[g]=!0;return R7[g]=!0,console.error("Invalid attribute name: `%s`",g),!1}function W9(g,v,w){if(i6(v)){if(!g.hasAttribute(v)){switch(typeof w){case"symbol":case"object":return w;case"function":return w;case"boolean":if(w===!1)return w}return w===void 0?void 0:null}if(g=g.getAttribute(v),g===""&&w===!0)return!0;return b0(w,v),g===""+w?w:g}}function uO(g,v,w){if(i6(v))if(w===null)g.removeAttribute(v);else{switch(typeof w){case"undefined":case"function":case"symbol":g.removeAttribute(v);return;case"boolean":var H=v.toLowerCase().slice(0,5);if(H!=="data-"&&H!=="aria-"){g.removeAttribute(v);return}}b0(w,v),g.setAttribute(v,""+w)}}function TO(g,v,w){if(w===null)g.removeAttribute(v);else{switch(typeof w){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(v);return}b0(w,v),g.setAttribute(v,""+w)}}function ow(g,v,w,H){if(H===null)g.removeAttribute(w);else{switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(w);return}b0(H,w),g.setAttributeNS(v,w,""+H)}}function Qv(g){switch(typeof g){case"bigint":case"boolean":case"number":case"string":case"undefined":return g;case"object":return xg(g),g;default:return""}}function M9(g){var v=g.type;return(g=g.nodeName)&&g.toLowerCase()==="input"&&(v==="checkbox"||v==="radio")}function Rz(g,v,w){var H=Object.getOwnPropertyDescriptor(g.constructor.prototype,v);if(!g.hasOwnProperty(v)&&typeof H<"u"&&typeof H.get==="function"&&typeof H.set==="function"){var{get:q,set:A}=H;return Object.defineProperty(g,v,{configurable:!0,get:function(){return q.call(this)},set:function(W){xg(W),w=""+W,A.call(this,W)}}),Object.defineProperty(g,v,{enumerable:H.enumerable}),{getValue:function(){return w},setValue:function(W){xg(W),w=""+W},stopTracking:function(){g._valueTracker=null,delete g[v]}}}}function LA(g){if(!g._valueTracker){var v=M9(g)?"checked":"value";g._valueTracker=Rz(g,v,""+g[v])}}function X9(g){if(!g)return!1;var v=g._valueTracker;if(!v)return!0;var w=v.getValue(),H="";return g&&(H=M9(g)?g.checked?"true":"false":g.value),g=H,g!==w?(v.setValue(g),!0):!1}function CO(g){if(g=g||(typeof document<"u"?document:void 0),typeof g>"u")return null;try{return g.activeElement||g.body}catch(v){return g.body}}function Rv(g){return g.replace(LL,function(v){return"\\"+v.charCodeAt(0).toString(16)+" "})}function Y9(g,v){v.checked===void 0||v.defaultChecked===void 0||z7||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Q1()||"A component",v.type),z7=!0),v.value===void 0||v.defaultValue===void 0||$7||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Q1()||"A component",v.type),$7=!0)}function FA(g,v,w,H,q,A,W,X){if(g.name="",W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"?(b0(W,"type"),g.type=W):g.removeAttribute("type"),v!=null)if(W==="number"){if(v===0&&g.value===""||g.value!=v)g.value=""+Qv(v)}else g.value!==""+Qv(v)&&(g.value=""+Qv(v));else W!=="submit"&&W!=="reset"||g.removeAttribute("value");v!=null?BA(g,W,Qv(v)):w!=null?BA(g,W,Qv(w)):H!=null&&g.removeAttribute("value"),q==null&&A!=null&&(g.defaultChecked=!!A),q!=null&&(g.checked=q&&typeof q!=="function"&&typeof q!=="symbol"),X!=null&&typeof X!=="function"&&typeof X!=="symbol"&&typeof X!=="boolean"?(b0(X,"name"),g.name=""+Qv(X)):g.removeAttribute("name")}function G9(g,v,w,H,q,A,W,X){if(A!=null&&typeof A!=="function"&&typeof A!=="symbol"&&typeof A!=="boolean"&&(b0(A,"type"),g.type=A),v!=null||w!=null){if(!(A!=="submit"&&A!=="reset"||v!==void 0&&v!==null)){LA(g);return}w=w!=null?""+Qv(w):"",v=v!=null?""+Qv(v):w,X||v===g.value||(g.value=v),g.defaultValue=v}H=H!=null?H:q,H=typeof H!=="function"&&typeof H!=="symbol"&&!!H,g.checked=X?g.checked:!!H,g.defaultChecked=!!H,W!=null&&typeof W!=="function"&&typeof W!=="symbol"&&typeof W!=="boolean"&&(b0(W,"name"),g.name=W),LA(g)}function BA(g,v,w){v==="number"&&CO(g.ownerDocument)===g||g.defaultValue===""+w||(g.defaultValue=""+w)}function h9(g,v){v.value==null&&(typeof v.children==="object"&&v.children!==null?T6.Children.forEach(v.children,function(w){w==null||typeof w==="string"||typeof w==="number"||typeof w==="bigint"||L7||(L7=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):v.dangerouslySetInnerHTML==null||F7||(F7=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),v.selected==null||U7||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),U7=!0)}function J9(){var g=Q1();return g?`

Check the render method of \``+g+"`.":""}function u4(g,v,w,H){if(g=g.options,v){v={};for(var q=0;q<w.length;q++)v["$"+w[q]]=!0;for(w=0;w<g.length;w++)q=v.hasOwnProperty("$"+g[w].value),g[w].selected!==q&&(g[w].selected=q),q&&H&&(g[w].defaultSelected=!0)}else{w=""+Qv(w),v=null;for(q=0;q<g.length;q++){if(g[q].value===w){g[q].selected=!0,H&&(g[q].defaultSelected=!0);return}v!==null||g[q].disabled||(v=g[q])}v!==null&&(v.selected=!0)}}function Q9(g,v){for(g=0;g<I7.length;g++){var w=I7[g];if(v[w]!=null){var H=a0(v[w]);v.multiple&&!H?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",w,J9()):!v.multiple&&H&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",w,J9())}}v.value===void 0||v.defaultValue===void 0||B7||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),B7=!0)}function R9(g,v){v.value===void 0||v.defaultValue===void 0||N7||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Q1()||"A component"),N7=!0),v.children!=null&&v.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function K9(g,v,w){if(v!=null&&(v=""+Qv(v),v!==g.value&&(g.value=v),w==null)){g.defaultValue!==v&&(g.defaultValue=v);return}g.defaultValue=w!=null?""+Qv(w):""}function $9(g,v,w,H){if(v==null){if(H!=null){if(w!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(a0(H)){if(1<H.length)throw Error("<textarea> can only have at most one child.");H=H[0]}w=H}w==null&&(w=""),v=w}w=Qv(v),g.defaultValue=w,H=g.textContent,H===w&&H!==""&&H!==null&&(g.value=H),LA(g)}function z9(g,v){return g.serverProps===void 0&&g.serverTail.length===0&&g.children.length===1&&3<g.distanceFromLeaf&&g.distanceFromLeaf>15-v?z9(g.children[0],v):g}function t1(g){return"  "+"  ".repeat(g)}function T4(g){return"+ "+"  ".repeat(g)}function Z5(g){return"- "+"  ".repeat(g)}function U9(g){switch(g.tag){case 26:case 27:case 5:return g.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return g=g.type,g.displayName||g.name||null;case 11:return g=g.type.render,g.displayName||g.name||null;case 1:return g=g.type,g.displayName||g.name||null;default:return null}}function f6(g,v){return Z7.test(g)?(g=JSON.stringify(g),g.length>v-2?8>v?'{"..."}':"{"+g.slice(0,v-7)+'..."}':"{"+g+"}"):g.length>v?5>v?'{"..."}':g.slice(0,v-3)+"...":g}function SO(g,v,w){var H=120-2*w;if(v===null)return T4(w)+f6(g,H)+`
`;if(typeof v==="string"){for(var q=0;q<v.length&&q<g.length&&v.charCodeAt(q)===g.charCodeAt(q);q++);return q>H-8&&10<q&&(g="..."+g.slice(q-8),v="..."+v.slice(q-8)),T4(w)+f6(g,H)+`
`+Z5(w)+f6(v,H)+`
`}return t1(w)+f6(g,H)+`
`}function IA(g){return Object.prototype.toString.call(g).replace(/^\[object (.*)\]$/,function(v,w){return w})}function n6(g,v){switch(typeof g){case"string":return g=JSON.stringify(g),g.length>v?5>v?'"..."':g.slice(0,v-4)+'..."':g;case"object":if(g===null)return"null";if(a0(g))return"[...]";if(g.$$typeof===Jw)return(v=a(g.type))?"<"+v+">":"<...>";var w=IA(g);if(w==="Object"){w="",v-=2;for(var H in g)if(g.hasOwnProperty(H)){var q=JSON.stringify(H);if(q!=='"'+H+'"'&&(H=q),v-=H.length-2,q=n6(g[H],15>v?v:15),v-=q.length,0>v){w+=w===""?"...":", ...";break}w+=(w===""?"":",")+H+":"+q}return"{"+w+"}"}return w;case"function":return(v=g.displayName||g.name)?"function "+v:"function";default:return String(g)}}function C4(g,v){return typeof g!=="string"||Z7.test(g)?"{"+n6(g,v-2)+"}":g.length>v-2?5>v?'"..."':'"'+g.slice(0,v-5)+'..."':'"'+g+'"'}function NA(g,v,w){var H=120-w.length-g.length,q=[],A;for(A in v)if(v.hasOwnProperty(A)&&A!=="children"){var W=C4(v[A],120-w.length-A.length-1);H-=A.length+W.length+2,q.push(A+"="+W)}return q.length===0?w+"<"+g+`>
`:0<H?w+"<"+g+" "+q.join(" ")+`>
`:w+"<"+g+`
`+w+"  "+q.join(`
`+w+"  ")+`
`+w+`>
`}function Kz(g,v,w){var H="",q=yg({},v),A;for(A in g)if(g.hasOwnProperty(A)){delete q[A];var W=120-2*w-A.length-2,X=n6(g[A],W);v.hasOwnProperty(A)?(W=n6(v[A],W),H+=T4(w)+A+": "+X+`
`,H+=Z5(w)+A+": "+W+`
`):H+=T4(w)+A+": "+X+`
`}for(var J in q)q.hasOwnProperty(J)&&(g=n6(q[J],120-2*w-J.length-2),H+=Z5(w)+J+": "+g+`
`);return H}function $z(g,v,w,H){var q="",A=new Map;for(R in w)w.hasOwnProperty(R)&&A.set(R.toLowerCase(),R);if(A.size===1&&A.has("children"))q+=NA(g,v,t1(H));else{for(var W in v)if(v.hasOwnProperty(W)&&W!=="children"){var X=120-2*(H+1)-W.length-1,J=A.get(W.toLowerCase());if(J!==void 0){A.delete(W.toLowerCase());var R=v[W];J=w[J];var u=C4(R,X);X=C4(J,X),typeof R==="object"&&R!==null&&typeof J==="object"&&J!==null&&IA(R)==="Object"&&IA(J)==="Object"&&(2<Object.keys(R).length||2<Object.keys(J).length||-1<u.indexOf("...")||-1<X.indexOf("..."))?q+=t1(H+1)+W+`={{
`+Kz(R,J,H+2)+t1(H+1)+`}}
`:(q+=T4(H+1)+W+"="+u+`
`,q+=Z5(H+1)+W+"="+X+`
`)}else q+=t1(H+1)+W+"="+C4(v[W],X)+`
`}A.forEach(function(T){if(T!=="children"){var B=120-2*(H+1)-T.length-1;q+=Z5(H+1)+T+"="+C4(w[T],B)+`
`}}),q=q===""?t1(H)+"<"+g+`>
`:t1(H)+"<"+g+`
`+q+t1(H)+`>
`}if(g=w.children,v=v.children,typeof g==="string"||typeof g==="number"||typeof g==="bigint"){if(A="",typeof v==="string"||typeof v==="number"||typeof v==="bigint")A=""+v;q+=SO(A,""+g,H+1)}else if(typeof v==="string"||typeof v==="number"||typeof v==="bigint")q=g==null?q+SO(""+v,null,H+1):q+SO(""+v,void 0,H+1);return q}function L9(g,v){var w=U9(g);if(w===null){w="";for(g=g.child;g;)w+=L9(g,v),g=g.sibling;return w}return t1(v)+"<"+w+`>
`}function ZA(g,v){var w=z9(g,v);if(w!==g&&(g.children.length!==1||g.children[0]!==w))return t1(v)+`...
`+ZA(w,v+1);w="";var H=g.fiber._debugInfo;if(H)for(var q=0;q<H.length;q++){var A=H[q].name;typeof A==="string"&&(w+=t1(v)+"<"+A+`>
`,v++)}if(H="",q=g.fiber.pendingProps,g.fiber.tag===6)H=SO(q,g.serverProps,v),v++;else if(A=U9(g.fiber),A!==null)if(g.serverProps===void 0){H=v;var W=120-2*H-A.length-2,X="";for(R in q)if(q.hasOwnProperty(R)&&R!=="children"){var J=C4(q[R],15);if(W-=R.length+J.length+2,0>W){X+=" ...";break}X+=" "+R+"="+J}H=t1(H)+"<"+A+X+`>
`,v++}else g.serverProps===null?(H=NA(A,q,T4(v)),v++):typeof g.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(H=$z(A,q,g.serverProps,v),v++);var R="";q=g.fiber.child;for(A=0;q&&A<g.children.length;)W=g.children[A],W.fiber===q?(R+=ZA(W,v),A++):R+=L9(q,v),q=q.sibling;q&&0<g.children.length&&(R+=t1(v)+`...
`),q=g.serverTail,g.serverProps===null&&v--;for(g=0;g<q.length;g++)A=q[g],R=typeof A==="string"?R+(Z5(v)+f6(A,120-2*v)+`
`):R+NA(A.type,A.props,Z5(v));return w+H+R}function uA(g){try{return`

`+ZA(g,0)}catch(v){return""}}function F9(g,v,w){for(var H=v,q=null,A=0;H;)H===g&&(A=0),q={fiber:H,children:q!==null?[q]:[],serverProps:H===v?w:H===g?null:void 0,serverTail:[],distanceFromLeaf:A},A++,H=H.return;return q!==null?uA(q).replaceAll(/^[+-]/gm,">"):""}function B9(g,v){var w=yg({},g||T7),H={tag:v};if(u7.indexOf(v)!==-1&&(w.aTagInScope=null,w.buttonTagInScope=null,w.nobrTagInScope=null),BL.indexOf(v)!==-1&&(w.pTagInButtonScope=null),FL.indexOf(v)!==-1&&v!=="address"&&v!=="div"&&v!=="p"&&(w.listItemTagAutoclosing=null,w.dlItemTagAutoclosing=null),w.current=H,v==="form"&&(w.formTag=H),v==="a"&&(w.aTagInScope=H),v==="button"&&(w.buttonTagInScope=H),v==="nobr"&&(w.nobrTagInScope=H),v==="p"&&(w.pTagInButtonScope=H),v==="li"&&(w.listItemTagAutoclosing=H),v==="dd"||v==="dt")w.dlItemTagAutoclosing=H;return v==="#document"||v==="html"?w.containerTagInScope=null:w.containerTagInScope||(w.containerTagInScope=H),g!==null||v!=="#document"&&v!=="html"&&v!=="body"?w.implicitRootScope===!0&&(w.implicitRootScope=!1):w.implicitRootScope=!0,w}function I9(g,v,w){switch(v){case"select":return g==="hr"||g==="option"||g==="optgroup"||g==="script"||g==="template"||g==="#text";case"optgroup":return g==="option"||g==="#text";case"option":return g==="#text";case"tr":return g==="th"||g==="td"||g==="style"||g==="script"||g==="template";case"tbody":case"thead":case"tfoot":return g==="tr"||g==="style"||g==="script"||g==="template";case"colgroup":return g==="col"||g==="template";case"table":return g==="caption"||g==="colgroup"||g==="tbody"||g==="tfoot"||g==="thead"||g==="style"||g==="script"||g==="template";case"head":return g==="base"||g==="basefont"||g==="bgsound"||g==="link"||g==="meta"||g==="title"||g==="noscript"||g==="noframes"||g==="style"||g==="script"||g==="template";case"html":if(w)break;return g==="head"||g==="body"||g==="frameset";case"frameset":return g==="frame";case"#document":if(!w)return g==="html"}switch(g){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return v!=="h1"&&v!=="h2"&&v!=="h3"&&v!=="h4"&&v!=="h5"&&v!=="h6";case"rp":case"rt":return IL.indexOf(v)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return v==null;case"head":return w||v===null;case"html":return w&&v==="#document"||v===null;case"body":return w&&(v==="#document"||v==="html")||v===null}return!0}function zz(g,v){switch(g){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return v.pTagInButtonScope;case"form":return v.formTag||v.pTagInButtonScope;case"li":return v.listItemTagAutoclosing;case"dd":case"dt":return v.dlItemTagAutoclosing;case"button":return v.buttonTagInScope;case"a":return v.aTagInScope;case"nobr":return v.nobrTagInScope}return null}function N9(g,v){for(;g;){switch(g.tag){case 5:case 26:case 27:if(g.type===v)return g}g=g.return}return null}function TA(g,v){v=v||T7;var w=v.current;if(v=(w=I9(g,w&&w.tag,v.implicitRootScope)?null:w)?null:zz(g,v),v=w||v,!v)return!0;var H=v.tag;if(v=String(!!w)+"|"+g+"|"+H,i2[v])return!1;i2[v]=!0;var q=(v=Hv)?N9(v.return,H):null,A=v!==null&&q!==null?F9(q,v,null):"",W="<"+g+">";return w?(w="",H==="table"&&g==="tr"&&(w+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,W,H,w,A)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,W,H,A),v&&(g=v.return,q===null||g===null||q===g&&g._debugOwner===v._debugOwner||Pg(q,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,H,W)})),!1}function lO(g,v,w){if(w||I9("#text",v,!1))return!0;if(w="#text|"+v,i2[w])return!1;i2[w]=!0;var H=(w=Hv)?N9(w,v):null;return w=w!==null&&H!==null?F9(H,w,w.tag!==6?{children:null}:null):"",/\S/.test(g)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,v,w):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,v,w),!1}function e6(g,v){if(v){var w=g.firstChild;if(w&&w===g.lastChild&&w.nodeType===3){w.nodeValue=v;return}}g.textContent=v}function Uz(g){return g.replace(uL,function(v,w){return w.toUpperCase()})}function Z9(g,v,w){var H=v.indexOf("--")===0;H||(-1<v.indexOf("-")?d4.hasOwnProperty(v)&&d4[v]||(d4[v]=!0,console.error("Unsupported style property %s. Did you mean %s?",v,Uz(v.replace(ZL,"ms-")))):NL.test(v)?d4.hasOwnProperty(v)&&d4[v]||(d4[v]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",v,v.charAt(0).toUpperCase()+v.slice(1))):!l7.test(w)||fb.hasOwnProperty(w)&&fb[w]||(fb[w]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,v,w.replace(l7,""))),typeof w==="number"&&(isNaN(w)?x7||(x7=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",v)):isFinite(w)||o7||(o7=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",v)))),w==null||typeof w==="boolean"||w===""?H?g.setProperty(v,""):v==="float"?g.cssFloat="":g[v]="":H?g.setProperty(v,w):typeof w!=="number"||w===0||D7.has(v)?v==="float"?g.cssFloat=w:(y6(w,v),g[v]=(""+w).trim()):g[v]=w+"px"}function u9(g,v,w){if(v!=null&&typeof v!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(v&&Object.freeze(v),g=g.style,w!=null){if(v){var H={};if(w){for(var q in w)if(w.hasOwnProperty(q)&&!v.hasOwnProperty(q))for(var A=ib[q]||[q],W=0;W<A.length;W++)H[A[W]]=q}for(var X in v)if(v.hasOwnProperty(X)&&(!w||w[X]!==v[X]))for(q=ib[X]||[X],A=0;A<q.length;A++)H[q[A]]=X;X={};for(var J in v)for(q=ib[J]||[J],A=0;A<q.length;A++)X[q[A]]=J;J={};for(var R in H)if(q=H[R],(A=X[R])&&q!==A&&(W=q+","+A,!J[W])){J[W]=!0,W=console;var u=v[q];W.error.call(W,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",u==null||typeof u==="boolean"||u===""?"Removing":"Updating",q,A)}}for(var T in w)!w.hasOwnProperty(T)||v!=null&&v.hasOwnProperty(T)||(T.indexOf("--")===0?g.setProperty(T,""):T==="float"?g.cssFloat="":g[T]="");for(var B in v)R=v[B],v.hasOwnProperty(B)&&w[B]!==R&&Z9(g,B,R)}else for(H in v)v.hasOwnProperty(H)&&Z9(g,H,v[H])}function c6(g){if(g.indexOf("-")===-1)return!1;switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function T9(g){return TL.get(g)||g}function Lz(g,v){if(Dv.call(s4,v)&&s4[v])return!0;if(SL.test(v)){if(g="aria-"+v.slice(4).toLowerCase(),g=k7.hasOwnProperty(g)?g:null,g==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",v),s4[v]=!0;if(v!==g)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",v,g),s4[v]=!0}if(CL.test(v)){if(g=v.toLowerCase(),g=k7.hasOwnProperty(g)?g:null,g==null)return s4[v]=!0,!1;v!==g&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",v,g),s4[v]=!0)}return!0}function Fz(g,v){var w=[],H;for(H in v)Lz(g,H)||w.push(H);v=w.map(function(q){return"`"+q+"`"}).join(", "),w.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",v,g):1<w.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",v,g)}function Bz(g,v,w,H){if(Dv.call(I1,v)&&I1[v])return!0;var q=v.toLowerCase();if(q==="onfocusin"||q==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),I1[v]=!0;if(typeof w==="function"&&(g==="form"&&v==="action"||g==="input"&&v==="formAction"||g==="button"&&v==="formAction"))return!0;if(H!=null){if(g=H.possibleRegistrationNames,H.registrationNameDependencies.hasOwnProperty(v))return!0;if(H=g.hasOwnProperty(q)?g[q]:null,H!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",v,H),I1[v]=!0;if(V7.test(v))return console.error("Unknown event handler property `%s`. It will be ignored.",v),I1[v]=!0}else if(V7.test(v))return lL.test(v)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",v),I1[v]=!0;if(xL.test(v)||oL.test(v))return!0;if(q==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),I1[v]=!0;if(q==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),I1[v]=!0;if(q==="is"&&w!==null&&w!==void 0&&typeof w!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof w),I1[v]=!0;if(typeof w==="number"&&isNaN(w))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",v),I1[v]=!0;if(n2.hasOwnProperty(q)){if(q=n2[q],q!==v)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",v,q),I1[v]=!0}else if(v!==q)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",v,q),I1[v]=!0;switch(v){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof w){case"boolean":switch(v){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(q=v.toLowerCase().slice(0,5),q==="data-"||q==="aria-")return!0;return w?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',w,v,v,w,v):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',w,v,v,w,v,v,v),I1[v]=!0}case"function":case"symbol":return I1[v]=!0,!1;case"string":if(w==="false"||w==="true"){switch(v){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",w,v,w==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',v,w),I1[v]=!0}}return!0}function Iz(g,v,w){var H=[],q;for(q in v)Bz(g,q,v[q],w)||H.push(q);v=H.map(function(A){return"`"+A+"`"}).join(", "),H.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",v,g):1<H.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",v,g)}function t6(g){return DL.test(""+g)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":g}function Dw(){}function CA(g){return g=g.target||g.srcElement||window,g.correspondingUseElement&&(g=g.correspondingUseElement),g.nodeType===3?g.parentNode:g}function C9(g){var v=Cg(g);if(v&&(g=v.stateNode)){var w=g[B1]||null;g:switch(g=v.stateNode,v.type){case"input":if(FA(g,w.value,w.defaultValue,w.defaultValue,w.checked,w.defaultChecked,w.type,w.name),v=w.name,w.type==="radio"&&v!=null){for(w=g;w.parentNode;)w=w.parentNode;b0(v,"name"),w=w.querySelectorAll('input[name="'+Rv(""+v)+'"][type="radio"]');for(v=0;v<w.length;v++){var H=w[v];if(H!==g&&H.form===g.form){var q=H[B1]||null;if(!q)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");FA(H,q.value,q.defaultValue,q.defaultValue,q.checked,q.defaultChecked,q.type,q.name)}}for(v=0;v<w.length;v++)H=w[v],H.form===g.form&&X9(H)}break g;case"textarea":K9(g,w.value,w.defaultValue);break g;case"select":v=w.value,v!=null&&u4(g,!!w.multiple,v,!1)}}}function S9(g,v,w){if(nb)return g(v,w);nb=!0;try{var H=g(v);return H}finally{if(nb=!1,g6!==null||v6!==null){if(_4(),g6&&(v=g6,g=v6,v6=g6=null,C9(v),g))for(v=0;v<g.length;v++)C9(g[v])}}}function p6(g,v){var w=g.stateNode;if(w===null)return null;var H=w[B1]||null;if(H===null)return null;w=H[v];g:switch(v){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(H=!H.disabled)||(g=g.type,H=!(g==="button"||g==="input"||g==="select"||g==="textarea")),g=!H;break g;default:g=!1}if(g)return null;if(w&&typeof w!=="function")throw Error("Expected `"+v+"` listener to be a function, instead got a value of `"+typeof w+"` type.");return w}function l9(){if(e2)return e2;var g,v=cb,w=v.length,H,q="value"in Vr?Vr.value:Vr.textContent,A=q.length;for(g=0;g<w&&v[g]===q[g];g++);var W=w-g;for(H=1;H<=W&&v[w-H]===q[A-H];H++);return e2=q.slice(g,1<H?1-H:void 0)}function xO(g){var v=g.keyCode;return"charCode"in g?(g=g.charCode,g===0&&v===13&&(g=13)):g=v,g===10&&(g=13),32<=g||g===13?g:0}function oO(){return!0}function x9(){return!1}function V1(g){function v(w,H,q,A,W){this._reactName=w,this._targetInst=q,this.type=H,this.nativeEvent=A,this.target=W,this.currentTarget=null;for(var X in g)g.hasOwnProperty(X)&&(w=g[X],this[X]=w?w(A):A[X]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?oO:x9,this.isPropagationStopped=x9,this}return yg(v.prototype,{preventDefault:function(){this.defaultPrevented=!0;var w=this.nativeEvent;w&&(w.preventDefault?w.preventDefault():typeof w.returnValue!=="unknown"&&(w.returnValue=!1),this.isDefaultPrevented=oO)},stopPropagation:function(){var w=this.nativeEvent;w&&(w.stopPropagation?w.stopPropagation():typeof w.cancelBubble!=="unknown"&&(w.cancelBubble=!0),this.isPropagationStopped=oO)},persist:function(){},isPersistent:oO}),v}function Nz(g){var v=this.nativeEvent;return v.getModifierState?v.getModifierState(g):(g=tL[g])?!!v[g]:!1}function SA(){return Nz}function o9(g,v){switch(g){case"keyup":return AF.indexOf(v.keyCode)!==-1;case"keydown":return v.keyCode!==j7;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D9(g){return g=g.detail,typeof g==="object"&&"data"in g?g.data:null}function Zz(g,v){switch(g){case"compositionend":return D9(v);case"keypress":if(v.which!==f7)return null;return e7=!0,n7;case"textInput":return g=v.data,g===n7&&e7?null:g;default:return null}}function uz(g,v){if(w6)return g==="compositionend"||!ab&&o9(g,v)?(g=l9(),e2=cb=Vr=null,w6=!1,g):null;switch(g){case"paste":return null;case"keypress":if(!(v.ctrlKey||v.altKey||v.metaKey)||v.ctrlKey&&v.altKey){if(v.char&&1<v.char.length)return v.char;if(v.which)return String.fromCharCode(v.which)}return null;case"compositionend":return i7&&v.locale!=="ko"?null:v.data;default:return null}}function k9(g){var v=g&&g.nodeName&&g.nodeName.toLowerCase();return v==="input"?!!bF[g.type]:v==="textarea"?!0:!1}function Tz(g){if(!Uw)return!1;g="on"+g;var v=g in document;return v||(v=document.createElement("div"),v.setAttribute(g,"return;"),v=typeof v[g]==="function"),v}function m9(g,v,w,H){g6?v6?v6.push(H):v6=[H]:g6=H,v=N2(v,"onChange"),0<v.length&&(w=new c2("onChange","change",null,w,H),g.push({event:w,listeners:v}))}function Cz(g){$G(g,0)}function DO(g){var v=Sg(g);if(X9(v))return g}function V9(g,v){if(g==="change")return v}function E9(){o8&&(o8.detachEvent("onpropertychange",_9),D8=o8=null)}function _9(g){if(g.propertyName==="value"&&DO(D8)){var v=[];m9(v,D8,g,CA(g)),S9(Cz,v)}}function Sz(g,v,w){g==="focusin"?(E9(),o8=v,D8=w,o8.attachEvent("onpropertychange",_9)):g==="focusout"&&E9()}function lz(g){if(g==="selectionchange"||g==="keyup"||g==="keydown")return DO(D8)}function xz(g,v){if(g==="click")return DO(v)}function oz(g,v){if(g==="input"||g==="change")return DO(v)}function Dz(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}function d6(g,v){if(N1(g,v))return!0;if(typeof g!=="object"||g===null||typeof v!=="object"||v===null)return!1;var w=Object.keys(g),H=Object.keys(v);if(w.length!==H.length)return!1;for(H=0;H<w.length;H++){var q=w[H];if(!Dv.call(v,q)||!N1(g[q],v[q]))return!1}return!0}function y9(g){for(;g&&g.firstChild;)g=g.firstChild;return g}function j9(g,v){var w=y9(g);g=0;for(var H;w;){if(w.nodeType===3){if(H=g+w.textContent.length,g<=v&&H>=v)return{node:w,offset:v-g};g=H}g:{for(;w;){if(w.nextSibling){w=w.nextSibling;break g}w=w.parentNode}w=void 0}w=y9(w)}}function i9(g,v){return g&&v?g===v?!0:g&&g.nodeType===3?!1:v&&v.nodeType===3?i9(g,v.parentNode):("contains"in g)?g.contains(v):g.compareDocumentPosition?!!(g.compareDocumentPosition(v)&16):!1:!1}function f9(g){g=g!=null&&g.ownerDocument!=null&&g.ownerDocument.defaultView!=null?g.ownerDocument.defaultView:window;for(var v=CO(g.document);v instanceof g.HTMLIFrameElement;){try{var w=typeof v.contentWindow.location.href==="string"}catch(H){w=!1}if(w)g=v.contentWindow;else break;v=CO(g.document)}return v}function lA(g){var v=g&&g.nodeName&&g.nodeName.toLowerCase();return v&&(v==="input"&&(g.type==="text"||g.type==="search"||g.type==="tel"||g.type==="url"||g.type==="password")||v==="textarea"||g.contentEditable==="true")}function n9(g,v,w){var H=w.window===w?w.document:w.nodeType===9?w:w.ownerDocument;gW||r6==null||r6!==CO(H)||(H=r6,("selectionStart"in H)&&lA(H)?H={start:H.selectionStart,end:H.selectionEnd}:(H=(H.ownerDocument&&H.ownerDocument.defaultView||window).getSelection(),H={anchorNode:H.anchorNode,anchorOffset:H.anchorOffset,focusNode:H.focusNode,focusOffset:H.focusOffset}),k8&&d6(k8,H)||(k8=H,H=N2(sb,"onSelect"),0<H.length&&(v=new c2("onSelect","select",null,v,w),g.push({event:v,listeners:H}),v.target=r6)))}function u5(g,v){var w={};return w[g.toLowerCase()]=v.toLowerCase(),w["Webkit"+g]="webkit"+v,w["Moz"+g]="moz"+v,w}function T5(g){if(vW[g])return vW[g];if(!H6[g])return g;var v=H6[g],w;for(w in v)if(v.hasOwnProperty(w)&&w in t7)return vW[g]=v[w];return g}function lv(g,v){gh.set(g,v),R1(v,[g])}function kz(g){for(var v=p2,w=0;w<g.length;w++){var H=g[w];if(typeof H==="object"&&H!==null)if(a0(H)&&H.length===2&&typeof H[0]==="string"){if(v!==p2&&v!==qW)return HW;v=qW}else return HW;else{if(typeof H==="function"||typeof H==="string"&&50<H.length||v!==p2&&v!==OW)return HW;v=OW}}return v}function xA(g,v,w,H){for(var q in g)Dv.call(g,q)&&q[0]!=="_"&&gw(q,g[q],v,w,H)}function gw(g,v,w,H,q){switch(typeof v){case"object":if(v===null){v="null";break}else{if(v.$$typeof===Jw){var A=a(v.type)||"…",W=v.key;v=v.props;var X=Object.keys(v),J=X.length;if(W==null&&J===0){v="<"+A+" />";break}if(3>H||J===1&&X[0]==="children"&&W==null){v="<"+A+" … />";break}w.push([q+"  ".repeat(H)+g,"<"+A]),W!==null&&gw("key",W,w,H+1,q),g=!1;for(var R in v)R==="children"?v.children!=null&&(!a0(v.children)||0<v.children.length)&&(g=!0):Dv.call(v,R)&&R[0]!=="_"&&gw(R,v[R],w,H+1,q);w.push(["",g?">…</"+A+">":"/>"]);return}if(A=Object.prototype.toString.call(v),A=A.slice(8,A.length-1),A==="Array"){if(R=kz(v),R===OW||R===p2){v=JSON.stringify(v);break}else if(R===qW){w.push([q+"  ".repeat(H)+g,""]);for(g=0;g<v.length;g++)A=v[g],gw(A[0],A[1],w,H+1,q);return}}if(A==="Promise"){if(v.status==="fulfilled"){if(A=w.length,gw(g,v.value,w,H,q),w.length>A){w=w[A],w[1]="Promise<"+(w[1]||"Object")+">";return}}else if(v.status==="rejected"&&(A=w.length,gw(g,v.reason,w,H,q),w.length>A)){w=w[A],w[1]="Rejected Promise<"+w[1]+">";return}w.push(["  ".repeat(H)+g,"Promise"]);return}A==="Object"&&(R=Object.getPrototypeOf(v))&&typeof R.constructor==="function"&&(A=R.constructor.name),w.push([q+"  ".repeat(H)+g,A==="Object"?3>H?"":"…":A]),3>H&&xA(v,w,H+1,q);return}case"function":v=v.name===""?"() => {}":v.name+"() {}";break;case"string":v=v===JF?"…":JSON.stringify(v);break;case"undefined":v="undefined";break;case"boolean":v=v?"true":"false";break;default:v=String(v)}w.push([q+"  ".repeat(H)+g,v])}function e9(g,v,w,H){var q=!0;for(W in g)W in v||(w.push([d2+"  ".repeat(H)+W,"…"]),q=!1);for(var A in v)if(A in g){var W=g[A],X=v[A];if(W!==X){if(H===0&&A==="children")q="  ".repeat(H)+A,w.push([d2+q,"…"],[a2+q,"…"]);else{if(!(3<=H)){if(typeof W==="object"&&typeof X==="object"&&W!==null&&X!==null&&W.$$typeof===X.$$typeof)if(X.$$typeof===Jw){if(W.type===X.type&&W.key===X.key){W=a(X.type)||"…",q="  ".repeat(H)+A,W="<"+W+" … />",w.push([d2+q,W],[a2+q,W]),q=!1;continue}}else{var J=Object.prototype.toString.call(W),R=Object.prototype.toString.call(X);if(J===R&&(R==="[object Object]"||R==="[object Array]")){J=[rh+"  ".repeat(H)+A,R==="[object Array]"?"Array":""],w.push(J),R=w.length,e9(W,X,w,H+1)?R===w.length&&(J[1]="Referentially unequal but deeply equal objects. Consider memoization."):q=!1;continue}}else if(typeof W==="function"&&typeof X==="function"&&W.name===X.name&&W.length===X.length&&(J=Function.prototype.toString.call(W),R=Function.prototype.toString.call(X),J===R)){W=X.name===""?"() => {}":X.name+"() {}",w.push([rh+"  ".repeat(H)+A,W+" Referentially unequal function closure. Consider memoization."]);continue}}gw(A,W,w,H,d2),gw(A,X,w,H,a2)}q=!1}}else w.push([a2+"  ".repeat(H)+A,"…"]),q=!1;return q}function p1(g){ig=g&63?"Blocking":g&64?"Gesture":g&4194176?"Transition":g&62914560?"Suspense":g&2080374784?"Idle":"Other"}function vw(g,v,w,H){R0&&(_r.start=v,_r.end=w,fw.color="warning",fw.tooltipText=H,fw.properties=null,(g=g._debugTask)?g.run(performance.measure.bind(performance,H,_r)):performance.measure(H,_r))}function kO(g,v,w){vw(g,v,w,"Reconnect")}function mO(g,v,w,H,q){var A=k(g);if(A!==null&&R0){var{alternate:W,actualDuration:X}=g;if(W===null||W.child!==g.child)for(var J=g.child;J!==null;J=J.sibling)X-=J.actualDuration;H=0.5>X?H?"tertiary-light":"primary-light":10>X?H?"tertiary":"primary":100>X?H?"tertiary-dark":"primary-dark":"error";var R=g.memoizedProps;X=g._debugTask,R!==null&&W!==null&&W.memoizedProps!==R?(J=[QF],R=e9(W.memoizedProps,R,J,0),1<J.length&&(R&&!Er&&(W.lanes&q)===0&&100<g.actualDuration?(Er=!0,J[0]=RF,fw.color="warning",fw.tooltipText=Hh):(fw.color=H,fw.tooltipText=A),fw.properties=J,_r.start=v,_r.end=w,X!=null?X.run(performance.measure.bind(performance,"​"+A,_r)):performance.measure("​"+A,_r))):X!=null?X.run(console.timeStamp.bind(console,A,v,w,$v,void 0,H)):console.timeStamp(A,v,w,$v,void 0,H)}}function oA(g,v,w,H){if(R0){var q=k(g);if(q!==null){for(var A=null,W=[],X=0;X<H.length;X++){var J=H[X];A==null&&J.source!==null&&(A=J.source._debugTask),J=J.value,W.push(["Error",typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J)])}g.key!==null&&gw("key",g.key,W,0,""),g.memoizedProps!==null&&xA(g.memoizedProps,W,0,""),A==null&&(A=g._debugTask),g={start:v,end:w,detail:{devtools:{color:"error",track:$v,tooltipText:g.tag===13?"Hydration failed":"Error boundary caught an error",properties:W}}},A?A.run(performance.measure.bind(performance,"​"+q,g)):performance.measure("​"+q,g)}}}function ww(g,v,w,H,q){if(q!==null){if(R0){var A=k(g);if(A!==null){H=[];for(var W=0;W<q.length;W++){var X=q[W].value;H.push(["Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g.key!==null&&gw("key",g.key,H,0,""),g.memoizedProps!==null&&xA(g.memoizedProps,H,0,""),v={start:v,end:w,detail:{devtools:{color:"error",track:$v,tooltipText:"A lifecycle or effect errored",properties:H}}},(g=g._debugTask)?g.run(performance.measure.bind(performance,"​"+A,v)):performance.measure("​"+A,v)}}}else A=k(g),A!==null&&R0&&(q=1>H?"secondary-light":100>H?"secondary":500>H?"secondary-dark":"error",(g=g._debugTask)?g.run(console.timeStamp.bind(console,A,v,w,$v,void 0,q)):console.timeStamp(A,v,w,$v,void 0,q))}function mz(g,v,w,H){if(R0&&!(v<=g)){var q=(w&738197653)===w?"tertiary-dark":"primary-dark";w=(w&536870912)===w?"Prepared":(w&201326741)===w?"Hydrated":"Render",H?H.run(console.timeStamp.bind(console,w,g,v,ig,jg,q)):console.timeStamp(w,g,v,ig,jg,q)}}function c9(g,v,w,H){!R0||v<=g||(w=(w&738197653)===w?"tertiary-dark":"primary-dark",H?H.run(console.timeStamp.bind(console,"Prewarm",g,v,ig,jg,w)):console.timeStamp("Prewarm",g,v,ig,jg,w))}function t9(g,v,w,H){!R0||v<=g||(w=(w&738197653)===w?"tertiary-dark":"primary-dark",H?H.run(console.timeStamp.bind(console,"Suspended",g,v,ig,jg,w)):console.timeStamp("Suspended",g,v,ig,jg,w))}function Vz(g,v,w,H,q,A){if(R0&&!(v<=g)){w=[];for(var W=0;W<H.length;W++){var X=H[W].value;w.push(["Recoverable Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g={start:g,end:v,detail:{devtools:{color:"primary-dark",track:ig,trackGroup:jg,tooltipText:q?"Hydration Failed":"Recovered after Error",properties:w}}},A?A.run(performance.measure.bind(performance,"Recovered",g)):performance.measure("Recovered",g)}}function DA(g,v,w,H){!R0||v<=g||(H?H.run(console.timeStamp.bind(console,"Errored",g,v,ig,jg,"error")):console.timeStamp("Errored",g,v,ig,jg,"error"))}function Ez(g,v,w,H){!R0||v<=g||(H?H.run(console.timeStamp.bind(console,w,g,v,ig,jg,"secondary-light")):console.timeStamp(w,g,v,ig,jg,"secondary-light"))}function p9(g,v,w,H,q){if(R0&&!(v<=g)){for(var A=[],W=0;W<w.length;W++){var X=w[W].value;A.push(["Error",typeof X==="object"&&X!==null&&typeof X.message==="string"?String(X.message):String(X)])}g={start:g,end:v,detail:{devtools:{color:"error",track:ig,trackGroup:jg,tooltipText:H?"Remaining Effects Errored":"Commit Errored",properties:A}}},q?q.run(performance.measure.bind(performance,"Errored",g)):performance.measure("Errored",g)}}function a6(g,v,w){!R0||v<=g||(w?w.run(console.timeStamp.bind(console,"Animating",g,v,ig,jg,"secondary-dark")):console.timeStamp("Animating",g,v,ig,jg,"secondary-dark"))}function VO(){for(var g=O6,v=AW=O6=0;v<g;){var w=zv[v];zv[v++]=null;var H=zv[v];zv[v++]=null;var q=zv[v];zv[v++]=null;var A=zv[v];if(zv[v++]=null,H!==null&&q!==null){var W=H.pending;W===null?q.next=q:(q.next=W.next,W.next=q),H.pending=q}A!==0&&d9(w,q,A)}}function EO(g,v,w,H){zv[O6++]=g,zv[O6++]=v,zv[O6++]=w,zv[O6++]=H,AW|=H,g.lanes|=H,g=g.alternate,g!==null&&(g.lanes|=H)}function kA(g,v,w,H){return EO(g,v,w,H),_O(g)}function K1(g,v){return EO(g,null,null,v),_O(g)}function d9(g,v,w){g.lanes|=w;var H=g.alternate;H!==null&&(H.lanes|=w);for(var q=!1,A=g.return;A!==null;)A.childLanes|=w,H=A.alternate,H!==null&&(H.childLanes|=w),A.tag===22&&(g=A.stateNode,g===null||g._visibility&m8||(q=!0)),g=A,A=A.return;return g.tag===3?(A=g.stateNode,q&&v!==null&&(q=31-F1(w),g=A.hiddenUpdates,H=g[q],H===null?g[q]=[v]:H.push(v),v.lane=w|536870912),A):null}function _O(g){if(MH>lF)throw O4=MH=0,XH=EW=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");O4>xF&&(O4=0,XH=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),g.alternate===null&&(g.flags&4098)!==0&&YG(g);for(var v=g,w=v.return;w!==null;)v.alternate===null&&(v.flags&4098)!==0&&YG(g),v=w,w=v.return;return v.tag===3?v.stateNode:null}function C5(g){if(Uv===null)return g;var v=Uv(g);return v===void 0?g:v.current}function mA(g){if(Uv===null)return g;var v=Uv(g);return v===void 0?g!==null&&g!==void 0&&typeof g.render==="function"&&(v=C5(g.render),g.render!==v)?(v={$$typeof:I8,render:v},g.displayName!==void 0&&(v.displayName=g.displayName),v):g:v.current}function a9(g,v){if(Uv===null)return!1;var w=g.elementType;v=v.type;var H=!1,q=typeof v==="object"&&v!==null?v.$$typeof:null;switch(g.tag){case 1:typeof v==="function"&&(H=!0);break;case 0:typeof v==="function"?H=!0:q===rv&&(H=!0);break;case 11:q===I8?H=!0:q===rv&&(H=!0);break;case 14:case 15:q===m2?H=!0:q===rv&&(H=!0);break;default:return!1}return H&&(g=Uv(w),g!==void 0&&g===Uv(v))?!0:!1}function s9(g){Uv!==null&&typeof WeakSet==="function"&&(q6===null&&(q6=new WeakSet),q6.add(g))}function gX(g,v,w){do{var H=g,q=H.alternate,A=H.child,W=H.sibling,X=H.tag;H=H.type;var J=null;switch(X){case 0:case 15:case 1:J=H;break;case 11:J=H.render}if(Uv===null)throw Error("Expected resolveFamily to be set during hot reload.");var R=!1;if(H=!1,J!==null&&(J=Uv(J),J!==void 0&&(w.has(J)?H=!0:v.has(J)&&(X===1?H=!0:R=!0))),q6!==null&&(q6.has(g)||q!==null&&q6.has(q))&&(H=!0),H&&(g._debugNeedsRemount=!0),H||R)q=K1(g,2),q!==null&&Z0(q,g,2);if(A===null||H||gX(A,v,w),W===null)break;g=W}while(1)}function _z(g,v,w,H){this.tag=g,this.key=w,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=v,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=H,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Oh||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function VA(g){return g=g.prototype,!(!g||!g.isReactComponent)}function kw(g,v){var w=g.alternate;switch(w===null?(w=L(g.tag,v,g.key,g.mode),w.elementType=g.elementType,w.type=g.type,w.stateNode=g.stateNode,w._debugOwner=g._debugOwner,w._debugStack=g._debugStack,w._debugTask=g._debugTask,w._debugHookTypes=g._debugHookTypes,w.alternate=g,g.alternate=w):(w.pendingProps=v,w.type=g.type,w.flags=0,w.subtreeFlags=0,w.deletions=null,w.actualDuration=-0,w.actualStartTime=-1.1),w.flags=g.flags&65011712,w.childLanes=g.childLanes,w.lanes=g.lanes,w.child=g.child,w.memoizedProps=g.memoizedProps,w.memoizedState=g.memoizedState,w.updateQueue=g.updateQueue,v=g.dependencies,w.dependencies=v===null?null:{lanes:v.lanes,firstContext:v.firstContext,_debugThenableState:v._debugThenableState},w.sibling=g.sibling,w.index=g.index,w.ref=g.ref,w.refCleanup=g.refCleanup,w.selfBaseDuration=g.selfBaseDuration,w.treeBaseDuration=g.treeBaseDuration,w._debugInfo=g._debugInfo,w._debugNeedsRemount=g._debugNeedsRemount,w.tag){case 0:case 15:w.type=C5(g.type);break;case 1:w.type=C5(g.type);break;case 11:w.type=mA(g.type)}return w}function vX(g,v){g.flags&=65011714;var w=g.alternate;return w===null?(g.childLanes=0,g.lanes=v,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null,g.selfBaseDuration=0,g.treeBaseDuration=0):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,v=w.dependencies,g.dependencies=v===null?null:{lanes:v.lanes,firstContext:v.firstContext,_debugThenableState:v._debugThenableState},g.selfBaseDuration=w.selfBaseDuration,g.treeBaseDuration=w.treeBaseDuration),g}function EA(g,v,w,H,q,A){var W=0,X=g;if(typeof g==="function")VA(g)&&(W=1),X=C5(X);else if(typeof g==="string")W=vg(),W=pU(g,w,W)?26:g==="html"||g==="head"||g==="body"?27:5;else g:switch(g){case Sb:return v=L(31,w,v,q),v.elementType=Sb,v.lanes=A,v;case c4:return S5(w.children,q,A,v);case k2:W=8,q|=z1,q|=mv;break;case Zb:return g=w,H=q,typeof g.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof g.id),v=L(12,g,v,H|og),v.elementType=Zb,v.lanes=A,v.stateNode={effectDuration:0,passiveEffectDuration:0},v;case Tb:return v=L(13,w,v,q),v.elementType=Tb,v.lanes=A,v;case Cb:return v=L(19,w,v,q),v.elementType=Cb,v.lanes=A,v;default:if(typeof g==="object"&&g!==null)switch(g.$$typeof){case Qw:W=10;break g;case ub:W=9;break g;case I8:W=11,X=mA(X);break g;case m2:W=14;break g;case rv:W=16,X=null;break g}if(X="",g===void 0||typeof g==="object"&&g!==null&&Object.keys(g).length===0)X+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";g===null?w="null":a0(g)?w="array":g!==void 0&&g.$$typeof===Jw?(w="<"+(a(g.type)||"Unknown")+" />",X=" Did you accidentally export a JSX literal instead of a component?"):w=typeof g,(W=H?Hg(H):null)&&(X+=`

Check the render method of \``+W+"`."),W=29,w=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(w+"."+X)),X=null}return v=L(W,w,v,q),v.elementType=g,v.type=X,v.lanes=A,v._debugOwner=H,v}function yO(g,v,w){return v=EA(g.type,g.key,g.props,g._owner,v,w),v._debugOwner=g._owner,v._debugStack=g._debugStack,v._debugTask=g._debugTask,v}function S5(g,v,w,H){return g=L(7,g,H,v),g.lanes=w,g}function _A(g,v,w){return g=L(6,g,null,v),g.lanes=w,g}function wX(g){var v=L(18,null,null,Ng);return v.stateNode=g,v}function yA(g,v,w){return v=L(4,g.children!==null?g.children:[],g.key,v),v.lanes=w,v.stateNode={containerInfo:g.containerInfo,pendingChildren:null,implementation:g.implementation},v}function d1(g,v){if(typeof g==="object"&&g!==null){var w=PW.get(g);if(w!==void 0)return w;return v={value:g,source:v,stack:x0(v)},PW.set(g,v),v}return{value:g,source:v,stack:x0(v)}}function mw(g,v){Lr(),A6[P6++]=V8,A6[P6++]=s2,s2=g,V8=v}function rX(g,v,w){Lr(),Lv[Fv++]=ew,Lv[Fv++]=cw,Lv[Fv++]=f5,f5=g;var H=ew;g=cw;var q=32-F1(H)-1;H&=~(1<<q),w+=1;var A=32-F1(v)+q;if(30<A){var W=q-q%5;A=(H&(1<<W)-1).toString(32),H>>=W,q-=W,ew=1<<32-F1(v)+q|w<<q|H,cw=A+g}else ew=1<<A|w<<q|H,cw=g}function jA(g){Lr(),g.return!==null&&(mw(g,1),rX(g,1,0))}function iA(g){for(;g===s2;)s2=A6[--P6],A6[P6]=null,V8=A6[--P6],A6[P6]=null;for(;g===f5;)f5=Lv[--Fv],Lv[Fv]=null,cw=Lv[--Fv],Lv[Fv]=null,ew=Lv[--Fv],Lv[Fv]=null}function HX(){return Lr(),f5!==null?{id:ew,overflow:cw}:null}function OX(g,v){Lr(),Lv[Fv++]=ew,Lv[Fv++]=cw,Lv[Fv++]=f5,ew=v.id,cw=v.overflow,f5=g}function Lr(){eg||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function l5(g,v){if(g.return===null){if(qv===null)qv={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:v};else{if(qv.fiber!==g)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");qv.distanceFromLeaf>v&&(qv.distanceFromLeaf=v)}return qv}var w=l5(g.return,v+1).children;if(0<w.length&&w[w.length-1].fiber===g)return w=w[w.length-1],w.distanceFromLeaf>v&&(w.distanceFromLeaf=v),w;return v={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:v},w.push(v),v}function qX(){eg&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function jO(g,v){Lw||(g=l5(g,0),g.serverProps=null,v!==null&&(v=mG(v),g.serverTail.push(v)))}function Fr(g){var v=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,w="",H=qv;throw H!==null&&(qv=null,w=uA(H)),s6(d1(Error("Hydration failed because the server rendered "+(v?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+w),g)),bW}function AX(g){var{stateNode:v,type:w,memoizedProps:H}=g;switch(v[Y1]=g,v[B1]=H,Wb(w,H),w){case"dialog":cg("cancel",v),cg("close",v);break;case"iframe":case"object":case"embed":cg("load",v);break;case"video":case"audio":for(w=0;w<YH.length;w++)cg(YH[w],v);break;case"source":cg("error",v);break;case"img":case"image":case"link":cg("error",v),cg("load",v);break;case"details":cg("toggle",v);break;case"input":Ur("input",H),cg("invalid",v),Y9(v,H),G9(v,H.value,H.defaultValue,H.checked,H.defaultChecked,H.type,H.name,!0);break;case"option":h9(v,H);break;case"select":Ur("select",H),cg("invalid",v),Q9(v,H);break;case"textarea":Ur("textarea",H),cg("invalid",v),R9(v,H),$9(v,H.value,H.defaultValue,H.children)}w=H.children,typeof w!=="string"&&typeof w!=="number"&&typeof w!=="bigint"||v.textContent===""+w||H.suppressHydrationWarning===!0||FG(v.textContent,w)?(H.popover!=null&&(cg("beforetoggle",v),cg("toggle",v)),H.onScroll!=null&&cg("scroll",v),H.onScrollEnd!=null&&cg("scrollend",v),H.onClick!=null&&(v.onclick=Dw),v=!0):v=!1,v||Fr(g,!0)}function PX(g){for(G1=g.return;G1;)switch(G1.tag){case 5:case 31:case 13:Bv=!1;return;case 27:case 3:Bv=!0;return;default:G1=G1.return}}function S4(g){if(g!==G1)return!1;if(!eg)return PX(g),eg=!0,!1;var v=g.tag,w;if(w=v!==3&&v!==27){if(w=v===5)w=g.type,w=!(w!=="form"&&w!=="button")||hb(g.type,g.memoizedProps);w=!w}if(w&&K0){for(w=K0;w;){var H=l5(g,0),q=mG(w);H.serverTail.push(q),w=q.type==="Suspense"?Kb(w):wv(w.nextSibling)}Fr(g)}if(PX(g),v===13){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");K0=Kb(g)}else if(v===31){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");K0=Kb(g)}else v===27?(v=K0,xr(g.type)?(g=aW,aW=null,K0=g):K0=v):K0=G1?wv(g.stateNode.nextSibling):null;return!0}function x5(){K0=G1=null,Lw=eg=!1}function fA(){var g=jr;return g!==null&&(C1===null?C1=g:C1.push.apply(C1,g),jr=null),g}function s6(g){jr===null?jr=[g]:jr.push(g)}function nA(){var g=qv;if(g!==null){qv=null;for(var v=uA(g);0<g.children.length;)g=g.children[0];Pg(g.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",v)})}}function iO(){b6=gq=null,W6=!1}function Br(g,v,w){Kg(WW,v._currentValue,g),v._currentValue=w,Kg(MW,v._currentRenderer,g),v._currentRenderer!==void 0&&v._currentRenderer!==null&&v._currentRenderer!==Ah&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),v._currentRenderer=Ah}function Vw(g,v){g._currentValue=WW.current;var w=MW.current;Qg(MW,v),g._currentRenderer=w,Qg(WW,v)}function eA(g,v,w){for(;g!==null;){var H=g.alternate;if((g.childLanes&v)!==v?(g.childLanes|=v,H!==null&&(H.childLanes|=v)):H!==null&&(H.childLanes&v)!==v&&(H.childLanes|=v),g===w)break;g=g.return}g!==w&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function cA(g,v,w,H){var q=g.child;q!==null&&(q.return=g);for(;q!==null;){var A=q.dependencies;if(A!==null){var W=q.child;A=A.firstContext;g:for(;A!==null;){var X=A;A=q;for(var J=0;J<v.length;J++)if(X.context===v[J]){A.lanes|=w,X=A.alternate,X!==null&&(X.lanes|=w),eA(A.return,w,g),H||(W=null);break g}A=X.next}}else if(q.tag===18){if(W=q.return,W===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");W.lanes|=w,A=W.alternate,A!==null&&(A.lanes|=w),eA(W,w,g),W=null}else W=q.child;if(W!==null)W.return=q;else for(W=q;W!==null;){if(W===g){W=null;break}if(q=W.sibling,q!==null){q.return=W.return,W=q;break}W=W.return}q=W}}function l4(g,v,w,H){g=null;for(var q=v,A=!1;q!==null;){if(!A){if((q.flags&524288)!==0)A=!0;else if((q.flags&262144)!==0)break}if(q.tag===10){var W=q.alternate;if(W===null)throw Error("Should have a current fiber. This is a bug in React.");if(W=W.memoizedProps,W!==null){var X=q.type;N1(q.pendingProps.value,W.value)||(g!==null?g.push(X):g=[X])}}else if(q===V2.current){if(W=q.alternate,W===null)throw Error("Should have a current fiber. This is a bug in React.");W.memoizedState.memoizedState!==q.memoizedState.memoizedState&&(g!==null?g.push(RH):g=[RH])}q=q.return}g!==null&&cA(v,g,w,H),v.flags|=262144}function fO(g){for(g=g.firstContext;g!==null;){if(!N1(g.context._currentValue,g.memoizedValue))return!0;g=g.next}return!1}function o5(g){gq=g,b6=null,g=g.dependencies,g!==null&&(g.firstContext=null)}function U0(g){return W6&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),bX(gq,g)}function nO(g,v){return gq===null&&o5(g),bX(g,v)}function bX(g,v){var w=v._currentValue;if(v={context:v,memoizedValue:w,next:null},b6===null){if(g===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");b6=v,g.dependencies={lanes:0,firstContext:v,_debugThenableState:null},g.flags|=524288}else b6=b6.next=v;return w}function tA(){return{controller:new zF,data:new Map,refCount:0}}function D5(g){g.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),g.refCount++}function g8(g){g.refCount--,0>g.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),g.refCount===0&&UF(LF,function(){g.controller.abort()})}function rw(g,v,w){if((g&127)!==0)0>Fw&&(Fw=f0(),_8=vq(v),XW=v,w!=null&&(YW=k(w)),(ag&(g1|bv))!==q1&&(u0=!0,nr=E8),g=z8(),v=$8(),g!==M6||v!==y8?M6=-1.1:v!==null&&(nr=E8),e5=g,y8=v);else if((g&4194048)!==0&&0>Iv&&(Iv=f0(),j8=vq(v),Ph=v,w!=null&&(bh=k(w)),0>dw)){if(g=z8(),v=$8(),g!==cr||v!==c5)cr=-1.1;er=g,c5=v}}function yz(g){if(0>Fw){Fw=f0(),_8=g._debugTask!=null?g._debugTask:null,(ag&(g1|bv))!==q1&&(nr=E8);var v=z8(),w=$8();v!==M6||w!==y8?M6=-1.1:w!==null&&(nr=E8),e5=v,y8=w}if(0>Iv&&(Iv=f0(),j8=g._debugTask!=null?g._debugTask:null,0>dw)){if(g=z8(),v=$8(),g!==cr||v!==c5)cr=-1.1;er=g,c5=v}}function Ew(){var g=n5;return n5=0,g}function eO(g){var v=n5;return n5=g,v}function v8(g){var v=n5;return n5+=g,v}function cO(){Bg=Ug=-1.1}function a1(){var g=Ug;return Ug=-1.1,g}function s1(g){0<=g&&(Ug=g)}function Hw(){var g=B0;return B0=-0,g}function Ow(g){0<=g&&(B0=g)}function qw(){var g=L0;return L0=null,g}function Aw(){var g=u0;return u0=!1,g}function pA(g){Z1=f0(),0>g.actualStartTime&&(g.actualStartTime=Z1)}function dA(g){if(0<=Z1){var v=f0()-Z1;g.actualDuration+=v,g.selfBaseDuration=v,Z1=-1}}function WX(g){if(0<=Z1){var v=f0()-Z1;g.actualDuration+=v,Z1=-1}}function Pw(){if(0<=Z1){var g=f0(),v=g-Z1;Z1=-1,n5+=v,B0+=v,Bg=g}}function MX(g){L0===null&&(L0=[]),L0.push(g),pw===null&&(pw=[]),pw.push(g)}function bw(){Z1=f0(),0>Ug&&(Ug=Z1)}function w8(g){for(var v=g.child;v;)g.actualDuration+=v.actualDuration,v=v.sibling}function jz(g,v){if(f8===null){var w=f8=[];hW=0,t5=qb(),X6={status:"pending",value:void 0,then:function(H){w.push(H)}}}return hW++,v.then(XX,XX),v}function XX(){if(--hW===0&&(-1<Iv||(dw=-1.1),f8!==null)){X6!==null&&(X6.status="fulfilled");var g=f8;f8=null,t5=0,X6=null;for(var v=0;v<g.length;v++)(0,g[v])()}}function iz(g,v){var w=[],H={status:"pending",value:null,reason:null,then:function(q){w.push(q)}};return g.then(function(){H.status="fulfilled",H.value=v;for(var q=0;q<w.length;q++)(0,w[q])(v)},function(q){H.status="rejected",H.reason=q;for(q=0;q<w.length;q++)(0,w[q])(void 0)}),H}function aA(){var g=p5.current;return g!==null?g:G0.pooledCache}function tO(g,v){v===null?Kg(p5,p5.current,g):Kg(p5,v.pool,g)}function YX(){var g=aA();return g===null?null:{parent:i0._currentValue,pool:g}}function GX(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function hX(g){return g=g.status,g==="fulfilled"||g==="rejected"}function JX(g,v,w){D.actQueue!==null&&(D.didUsePromise=!0);var H=g.thenables;if(w=H[w],w===void 0?H.push(v):w!==v&&(g.didWarnAboutUncachedPromise||(g.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),v.then(Dw,Dw),v=w),v._debugInfo===void 0){g=performance.now(),H=v.displayName;var q={name:typeof H==="string"?H:"Promise",start:g,end:g,value:v};v._debugInfo=[{awaited:q}],v.status!=="fulfilled"&&v.status!=="rejected"&&(g=function(){q.end=performance.now()},v.then(g,g))}switch(v.status){case"fulfilled":return v.value;case"rejected":throw g=v.reason,RX(g),g;default:if(typeof v.status==="string")v.then(Dw,Dw);else{if(g=G0,g!==null&&100<g.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");g=v,g.status="pending",g.then(function(A){if(v.status==="pending"){var W=v;W.status="fulfilled",W.value=A}},function(A){if(v.status==="pending"){var W=v;W.status="rejected",W.reason=A}})}switch(v.status){case"fulfilled":return v.value;case"rejected":throw g=v.reason,RX(g),g}throw a5=v,a8=!0,Y6}}function Ir(g){try{return NF(g)}catch(v){if(v!==null&&typeof v==="object"&&typeof v.then==="function")throw a5=v,a8=!0,Y6;throw v}}function QX(){if(a5===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var g=a5;return a5=null,a8=!1,g}function RX(g){if(g===Y6||g===bq)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function W1(g){var v=Dg;return g!=null&&(Dg=v===null?g:v.concat(g)),v}function sA(){var g=Dg;if(g!=null){for(var v=g.length-1;0<=v;v--)if(g[v].name!=null){var w=g[v].debugTask;if(w!=null)return w}}return null}function pO(g,v,w){for(var H=Object.keys(g.props),q=0;q<H.length;q++){var A=H[q];if(A!=="children"&&A!=="key"){v===null&&(v=yO(g,w.mode,0),v._debugInfo=Dg,v.return=w),Pg(v,function(W){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",W)},A);break}}}function dO(g){var v=s8;return s8+=1,G6===null&&(G6=GX()),JX(G6,g,v)}function r8(g,v){v=v.props.ref,g.ref=v!==void 0?v:null}function KX(g,v){if(v.$$typeof===qL)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw g=Object.prototype.toString.call(v),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}function aO(g,v){var w=sA();w!==null?w.run(KX.bind(null,g,v)):KX(g,v)}function $X(g,v){var w=k(g)||"Component";uh[w]||(uh[w]=!0,v=v.displayName||v.name||"Component",g.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,v,v,v):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,v,v,w,v,w))}function sO(g,v){var w=sA();w!==null?w.run($X.bind(null,g,v)):$X(g,v)}function zX(g,v){var w=k(g)||"Component";Th[w]||(Th[w]=!0,v=String(v),g.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,v):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,w,v,w))}function g2(g,v){var w=sA();w!==null?w.run(zX.bind(null,g,v)):zX(g,v)}function UX(g){function v(F,I){if(g){var Z=F.deletions;Z===null?(F.deletions=[I],F.flags|=16):Z.push(I)}}function w(F,I){if(!g)return null;for(;I!==null;)v(F,I),I=I.sibling;return null}function H(F){for(var I=new Map;F!==null;)F.key!==null?I.set(F.key,F):I.set(F.index,F),F=F.sibling;return I}function q(F,I){return F=kw(F,I),F.index=0,F.sibling=null,F}function A(F,I,Z){if(F.index=Z,!g)return F.flags|=1048576,I;if(Z=F.alternate,Z!==null)return Z=Z.index,Z<I?(F.flags|=67108866,I):Z;return F.flags|=67108866,I}function W(F){return g&&F.alternate===null&&(F.flags|=67108866),F}function X(F,I,Z,m){if(I===null||I.tag!==6)return I=_A(Z,F.mode,m),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;return I=q(I,Z),I.return=F,I._debugInfo=Dg,I}function J(F,I,Z,m){var qg=Z.type;if(qg===c4)return I=u(F,I,Z.props.children,m,Z.key),pO(Z,I,F),I;if(I!==null&&(I.elementType===qg||a9(I,Z)||typeof qg==="object"&&qg!==null&&qg.$$typeof===rv&&Ir(qg)===I.type))return I=q(I,Z.props),r8(I,Z),I.return=F,I._debugOwner=Z._owner,I._debugInfo=Dg,I;return I=yO(Z,F.mode,m),r8(I,Z),I.return=F,I._debugInfo=Dg,I}function R(F,I,Z,m){if(I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation)return I=yA(Z,F.mode,m),I.return=F,I._debugInfo=Dg,I;return I=q(I,Z.children||[]),I.return=F,I._debugInfo=Dg,I}function u(F,I,Z,m,qg){if(I===null||I.tag!==7)return I=S5(Z,F.mode,m,qg),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;return I=q(I,Z),I.return=F,I._debugInfo=Dg,I}function T(F,I,Z){if(typeof I==="string"&&I!==""||typeof I==="number"||typeof I==="bigint")return I=_A(""+I,F.mode,Z),I.return=F,I._debugOwner=F,I._debugTask=F._debugTask,I._debugInfo=Dg,I;if(typeof I==="object"&&I!==null){switch(I.$$typeof){case Jw:return Z=yO(I,F.mode,Z),r8(Z,I),Z.return=F,F=W1(I._debugInfo),Z._debugInfo=Dg,Dg=F,Z;case e4:return I=yA(I,F.mode,Z),I.return=F,I._debugInfo=Dg,I;case rv:var m=W1(I._debugInfo);return I=Ir(I),F=T(F,I,Z),Dg=m,F}if(a0(I)||rg(I))return Z=S5(I,F.mode,Z,null),Z.return=F,Z._debugOwner=F,Z._debugTask=F._debugTask,F=W1(I._debugInfo),Z._debugInfo=Dg,Dg=F,Z;if(typeof I.then==="function")return m=W1(I._debugInfo),F=T(F,dO(I),Z),Dg=m,F;if(I.$$typeof===Qw)return T(F,nO(F,I),Z);aO(F,I)}return typeof I==="function"&&sO(F,I),typeof I==="symbol"&&g2(F,I),null}function B(F,I,Z,m){var qg=I!==null?I.key:null;if(typeof Z==="string"&&Z!==""||typeof Z==="number"||typeof Z==="bigint")return qg!==null?null:X(F,I,""+Z,m);if(typeof Z==="object"&&Z!==null){switch(Z.$$typeof){case Jw:return Z.key===qg?(qg=W1(Z._debugInfo),F=J(F,I,Z,m),Dg=qg,F):null;case e4:return Z.key===qg?R(F,I,Z,m):null;case rv:return qg=W1(Z._debugInfo),Z=Ir(Z),F=B(F,I,Z,m),Dg=qg,F}if(a0(Z)||rg(Z)){if(qg!==null)return null;return qg=W1(Z._debugInfo),F=u(F,I,Z,m,null),Dg=qg,F}if(typeof Z.then==="function")return qg=W1(Z._debugInfo),F=B(F,I,dO(Z),m),Dg=qg,F;if(Z.$$typeof===Qw)return B(F,I,nO(F,Z),m);aO(F,Z)}return typeof Z==="function"&&sO(F,Z),typeof Z==="symbol"&&g2(F,Z),null}function x(F,I,Z,m,qg){if(typeof m==="string"&&m!==""||typeof m==="number"||typeof m==="bigint")return F=F.get(Z)||null,X(I,F,""+m,qg);if(typeof m==="object"&&m!==null){switch(m.$$typeof){case Jw:return Z=F.get(m.key===null?Z:m.key)||null,F=W1(m._debugInfo),I=J(I,Z,m,qg),Dg=F,I;case e4:return F=F.get(m.key===null?Z:m.key)||null,R(I,F,m,qg);case rv:var ug=W1(m._debugInfo);return m=Ir(m),I=x(F,I,Z,m,qg),Dg=ug,I}if(a0(m)||rg(m))return Z=F.get(Z)||null,F=W1(m._debugInfo),I=u(I,Z,m,qg,null),Dg=F,I;if(typeof m.then==="function")return ug=W1(m._debugInfo),I=x(F,I,Z,dO(m),qg),Dg=ug,I;if(m.$$typeof===Qw)return x(F,I,Z,nO(I,m),qg);aO(I,m)}return typeof m==="function"&&sO(I,m),typeof m==="symbol"&&g2(I,m),null}function gg(F,I,Z,m){if(typeof Z!=="object"||Z===null)return m;switch(Z.$$typeof){case Jw:case e4:z(F,I,Z);var qg=Z.key;if(typeof qg!=="string")break;if(m===null){m=new Set,m.add(qg);break}if(!m.has(qg)){m.add(qg);break}Pg(I,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",qg)});break;case rv:Z=Ir(Z),gg(F,I,Z,m)}return m}function bg(F,I,Z,m){for(var qg=null,ug=null,$g=null,Jg=I,lg=I=0,$0=null;Jg!==null&&lg<Z.length;lg++){Jg.index>lg?($0=Jg,Jg=null):$0=Jg.sibling;var V0=B(F,Jg,Z[lg],m);if(V0===null){Jg===null&&(Jg=$0);break}qg=gg(F,V0,Z[lg],qg),g&&Jg&&V0.alternate===null&&v(F,Jg),I=A(V0,I,lg),$g===null?ug=V0:$g.sibling=V0,$g=V0,Jg=$0}if(lg===Z.length)return w(F,Jg),eg&&mw(F,lg),ug;if(Jg===null){for(;lg<Z.length;lg++)Jg=T(F,Z[lg],m),Jg!==null&&(qg=gg(F,Jg,Z[lg],qg),I=A(Jg,I,lg),$g===null?ug=Jg:$g.sibling=Jg,$g=Jg);return eg&&mw(F,lg),ug}for(Jg=H(Jg);lg<Z.length;lg++)$0=x(Jg,F,lg,Z[lg],m),$0!==null&&(qg=gg(F,$0,Z[lg],qg),g&&$0.alternate!==null&&Jg.delete($0.key===null?lg:$0.key),I=A($0,I,lg),$g===null?ug=$0:$g.sibling=$0,$g=$0);return g&&Jg.forEach(function(qr){return v(F,qr)}),eg&&mw(F,lg),ug}function Q0(F,I,Z,m){if(Z==null)throw Error("An iterable object provided no iterator.");for(var qg=null,ug=null,$g=I,Jg=I=0,lg=null,$0=null,V0=Z.next();$g!==null&&!V0.done;Jg++,V0=Z.next()){$g.index>Jg?(lg=$g,$g=null):lg=$g.sibling;var qr=B(F,$g,V0.value,m);if(qr===null){$g===null&&($g=lg);break}$0=gg(F,qr,V0.value,$0),g&&$g&&qr.alternate===null&&v(F,$g),I=A(qr,I,Jg),ug===null?qg=qr:ug.sibling=qr,ug=qr,$g=lg}if(V0.done)return w(F,$g),eg&&mw(F,Jg),qg;if($g===null){for(;!V0.done;Jg++,V0=Z.next())$g=T(F,V0.value,m),$g!==null&&($0=gg(F,$g,V0.value,$0),I=A($g,I,Jg),ug===null?qg=$g:ug.sibling=$g,ug=$g);return eg&&mw(F,Jg),qg}for($g=H($g);!V0.done;Jg++,V0=Z.next())lg=x($g,F,Jg,V0.value,m),lg!==null&&($0=gg(F,lg,V0.value,$0),g&&lg.alternate!==null&&$g.delete(lg.key===null?Jg:lg.key),I=A(lg,I,Jg),ug===null?qg=lg:ug.sibling=lg,ug=lg);return g&&$g.forEach(function(dF){return v(F,dF)}),eg&&mw(F,Jg),qg}function tg(F,I,Z,m){if(typeof Z==="object"&&Z!==null&&Z.type===c4&&Z.key===null&&(pO(Z,null,F),Z=Z.props.children),typeof Z==="object"&&Z!==null){switch(Z.$$typeof){case Jw:var qg=W1(Z._debugInfo);g:{for(var ug=Z.key;I!==null;){if(I.key===ug){if(ug=Z.type,ug===c4){if(I.tag===7){w(F,I.sibling),m=q(I,Z.props.children),m.return=F,m._debugOwner=Z._owner,m._debugInfo=Dg,pO(Z,m,F),F=m;break g}}else if(I.elementType===ug||a9(I,Z)||typeof ug==="object"&&ug!==null&&ug.$$typeof===rv&&Ir(ug)===I.type){w(F,I.sibling),m=q(I,Z.props),r8(m,Z),m.return=F,m._debugOwner=Z._owner,m._debugInfo=Dg,F=m;break g}w(F,I);break}else v(F,I);I=I.sibling}Z.type===c4?(m=S5(Z.props.children,F.mode,m,Z.key),m.return=F,m._debugOwner=F,m._debugTask=F._debugTask,m._debugInfo=Dg,pO(Z,m,F),F=m):(m=yO(Z,F.mode,m),r8(m,Z),m.return=F,m._debugInfo=Dg,F=m)}return F=W(F),Dg=qg,F;case e4:g:{qg=Z;for(Z=qg.key;I!==null;){if(I.key===Z)if(I.tag===4&&I.stateNode.containerInfo===qg.containerInfo&&I.stateNode.implementation===qg.implementation){w(F,I.sibling),m=q(I,qg.children||[]),m.return=F,F=m;break g}else{w(F,I);break}else v(F,I);I=I.sibling}m=yA(qg,F.mode,m),m.return=F,F=m}return W(F);case rv:return qg=W1(Z._debugInfo),Z=Ir(Z),F=tg(F,I,Z,m),Dg=qg,F}if(a0(Z))return qg=W1(Z._debugInfo),F=bg(F,I,Z,m),Dg=qg,F;if(rg(Z)){if(qg=W1(Z._debugInfo),ug=rg(Z),typeof ug!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var $g=ug.call(Z);if($g===Z){if(F.tag!==0||Object.prototype.toString.call(F.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call($g)!=="[object Generator]")Nh||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),Nh=!0}else Z.entries!==ug||KW||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),KW=!0);return F=Q0(F,I,$g,m),Dg=qg,F}if(typeof Z.then==="function")return qg=W1(Z._debugInfo),F=tg(F,I,dO(Z),m),Dg=qg,F;if(Z.$$typeof===Qw)return tg(F,I,nO(F,Z),m);aO(F,Z)}if(typeof Z==="string"&&Z!==""||typeof Z==="number"||typeof Z==="bigint")return qg=""+Z,I!==null&&I.tag===6?(w(F,I.sibling),m=q(I,qg),m.return=F,F=m):(w(F,I),m=_A(qg,F.mode,m),m.return=F,m._debugOwner=F,m._debugTask=F._debugTask,m._debugInfo=Dg,F=m),W(F);return typeof Z==="function"&&sO(F,Z),typeof Z==="symbol"&&g2(F,Z),w(F,I)}return function(F,I,Z,m){var qg=Dg;Dg=null;try{s8=0;var ug=tg(F,I,Z,m);return G6=null,ug}catch($0){if($0===Y6||$0===bq)throw $0;var $g=L(29,$0,null,F.mode);$g.lanes=m,$g.return=F;var Jg=$g._debugInfo=Dg;if($g._debugOwner=F._debugOwner,$g._debugTask=F._debugTask,Jg!=null){for(var lg=Jg.length-1;0<=lg;lg--)if(typeof Jg[lg].stack==="string"){$g._debugOwner=Jg[lg],$g._debugTask=Jg[lg].debugTask;break}}return $g}finally{Dg=qg}}}function LX(g,v){var w=a0(g);return g=!w&&typeof rg(g)==="function",w||g?(w=w?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",w,v,w),!1):!0}function gP(g){g.updateQueue={baseState:g.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vP(g,v){g=g.updateQueue,v.updateQueue===g&&(v.updateQueue={baseState:g.baseState,firstBaseUpdate:g.firstBaseUpdate,lastBaseUpdate:g.lastBaseUpdate,shared:g.shared,callbacks:null})}function Nr(g){return{lane:g,tag:Sh,payload:null,callback:null,next:null}}function Zr(g,v,w){var H=g.updateQueue;if(H===null)return null;if(H=H.shared,zW===H&&!oh){var q=k(g);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,q),oh=!0}if((ag&g1)!==q1)return q=H.pending,q===null?v.next=v:(v.next=q.next,q.next=v),H.pending=v,v=_O(g),d9(g,null,w),v;return EO(g,H,v,w),_O(g)}function H8(g,v,w){if(v=v.updateQueue,v!==null&&(v=v.shared,(w&4194048)!==0)){var H=v.lanes;H&=g.pendingLanes,w|=H,v.lanes=w,B5(g,w)}}function v2(g,v){var{updateQueue:w,alternate:H}=g;if(H!==null&&(H=H.updateQueue,w===H)){var q=null,A=null;if(w=w.firstBaseUpdate,w!==null){do{var W={lane:w.lane,tag:w.tag,payload:w.payload,callback:null,next:null};A===null?q=A=W:A=A.next=W,w=w.next}while(w!==null);A===null?q=A=v:A=A.next=v}else q=A=v;w={baseState:H.baseState,firstBaseUpdate:q,lastBaseUpdate:A,shared:H.shared,callbacks:H.callbacks},g.updateQueue=w;return}g=w.lastBaseUpdate,g===null?w.firstBaseUpdate=v:g.next=v,w.lastBaseUpdate=v}function O8(){if(UW){var g=X6;if(g!==null)throw g}}function q8(g,v,w,H){UW=!1;var q=g.updateQueue;tr=!1,zW=q.shared;var{firstBaseUpdate:A,lastBaseUpdate:W}=q,X=q.shared.pending;if(X!==null){q.shared.pending=null;var J=X,R=J.next;J.next=null,W===null?A=R:W.next=R,W=J;var u=g.alternate;u!==null&&(u=u.updateQueue,X=u.lastBaseUpdate,X!==W&&(X===null?u.firstBaseUpdate=R:X.next=R,u.lastBaseUpdate=J))}if(A!==null){var T=q.baseState;W=0,u=R=J=null,X=A;do{var B=X.lane&-536870913,x=B!==X.lane;if(x?(kg&B)===B:(H&B)===B){B!==0&&B===t5&&(UW=!0),u!==null&&(u=u.next={lane:0,tag:X.tag,payload:X.payload,callback:null,next:null});g:{B=g;var gg=X,bg=v,Q0=w;switch(gg.tag){case lh:if(gg=gg.payload,typeof gg==="function"){W6=!0;var tg=gg.call(Q0,T,bg);if(B.mode&z1){h0(!0);try{gg.call(Q0,T,bg)}finally{h0(!1)}}W6=!1,T=tg;break g}T=gg;break g;case $W:B.flags=B.flags&-65537|128;case Sh:if(tg=gg.payload,typeof tg==="function"){if(W6=!0,gg=tg.call(Q0,T,bg),B.mode&z1){h0(!0);try{tg.call(Q0,T,bg)}finally{h0(!1)}}W6=!1}else gg=tg;if(gg===null||gg===void 0)break g;T=yg({},T,gg);break g;case xh:tr=!0}}B=X.callback,B!==null&&(g.flags|=64,x&&(g.flags|=8192),x=q.callbacks,x===null?q.callbacks=[B]:x.push(B))}else x={lane:B,tag:X.tag,payload:X.payload,callback:X.callback,next:null},u===null?(R=u=x,J=T):u=u.next=x,W|=B;if(X=X.next,X===null)if(X=q.shared.pending,X===null)break;else x=X,X=x.next,x.next=null,q.lastBaseUpdate=x,q.shared.pending=null}while(1);u===null&&(J=T),q.baseState=J,q.firstBaseUpdate=R,q.lastBaseUpdate=u,A===null&&(q.shared.lanes=0),ar|=W,g.lanes=W,g.memoizedState=T}zW=null}function FX(g,v){if(typeof g!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+g);g.call(v)}function fz(g,v){var w=g.shared.hiddenCallbacks;if(w!==null)for(g.shared.hiddenCallbacks=null,g=0;g<w.length;g++)FX(w[g],v)}function BX(g,v){var w=g.callbacks;if(w!==null)for(g.callbacks=null,g=0;g<w.length;g++)FX(w[g],v)}function IX(g,v){var w=Nw;Kg(Mq,w,g),Kg(h6,v,g),Nw=w|v.baseLanes}function wP(g){Kg(Mq,Nw,g),Kg(h6,h6.current,g)}function rP(g){Nw=Mq.current,Qg(h6,g),Qg(Mq,g)}function ur(g){var v=g.alternate;Kg(m0,m0.current&J6,g),Kg(Av,g,g),Nv===null&&(v===null||h6.current!==null?Nv=g:v.memoizedState!==null&&(Nv=g))}function HP(g){Kg(m0,m0.current,g),Kg(Av,g,g),Nv===null&&(Nv=g)}function NX(g){g.tag===22?(Kg(m0,m0.current,g),Kg(Av,g,g),Nv===null&&(Nv=g)):Tr(g)}function Tr(g){Kg(m0,m0.current,g),Kg(Av,Av.current,g)}function gv(g){Qg(Av,g),Nv===g&&(Nv=null),Qg(m0,g)}function w2(g){for(var v=g;v!==null;){if(v.tag===13){var w=v.memoizedState;if(w!==null&&(w=w.dehydrated,w===null||Qb(w)||Rb(w)))return v}else if(v.tag===19&&(v.memoizedProps.revealOrder==="forwards"||v.memoizedProps.revealOrder==="backwards"||v.memoizedProps.revealOrder==="unstable_legacy-backwards"||v.memoizedProps.revealOrder==="together")){if((v.flags&128)!==0)return v}else if(v.child!==null){v.child.return=v,v=v.child;continue}if(v===g)break;for(;v.sibling===null;){if(v.return===null||v.return===g)return null;v=v.return}v.sibling.return=v.return,v=v.sibling}return null}function _g(){var g=o;uv===null?uv=[g]:uv.push(g)}function f(){var g=o;if(uv!==null&&(vr++,uv[vr]!==g)){var v=k(Zg);if(!Dh.has(v)&&(Dh.add(v),uv!==null)){for(var w="",H=0;H<=vr;H++){var q=uv[H],A=H===vr?g:q;for(q=H+1+". "+q;30>q.length;)q+=" ";q+=A+`
`,w+=q}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,v,w)}}}function x4(g){g===void 0||g===null||a0(g)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",o,typeof g)}function r2(){var g=k(Zg);mh.has(g)||(mh.add(g),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",g))}function o0(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function OP(g,v){if(wH)return!1;if(v===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",o),!1;g.length!==v.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,o,"["+v.join(", ")+"]","["+g.join(", ")+"]");for(var w=0;w<v.length&&w<g.length;w++)if(!N1(g[w],v[w]))return!1;return!0}function qP(g,v,w,H,q,A){if(sw=A,Zg=v,uv=g!==null?g._debugHookTypes:null,vr=-1,wH=g!==null&&g.type!==v.type,Object.prototype.toString.call(w)==="[object AsyncFunction]"||Object.prototype.toString.call(w)==="[object AsyncGeneratorFunction]")A=k(Zg),LW.has(A)||(LW.add(A),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",A===null?"An unknown Component":"<"+A+">"));v.memoizedState=null,v.updateQueue=null,v.lanes=0,D.H=g!==null&&g.memoizedState!==null?BW:uv!==null?Vh:FW,g4=A=(v.mode&z1)!==Ng;var W=JW(w,H,q);if(g4=!1,R6&&(W=AP(v,w,H,q)),A){h0(!0);try{W=AP(v,w,H,q)}finally{h0(!1)}}return ZX(g,v),W}function ZX(g,v){v._debugHookTypes=uv,v.dependencies===null?gr!==null&&(v.dependencies={lanes:0,firstContext:null,_debugThenableState:gr}):v.dependencies._debugThenableState=gr,D.H=rH;var w=Y0!==null&&Y0.next!==null;if(sw=0,uv=o=n0=Y0=Zg=null,vr=-1,g!==null&&(g.flags&65011712)!==(v.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Yq=!1,vH=0,gr=null,w)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");g===null||e0||(g=g.dependencies,g!==null&&fO(g)&&(e0=!0)),a8?(a8=!1,g=!0):g=!1,g&&(v=k(v)||"Unknown",kh.has(v)||LW.has(v)||(kh.add(v),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function AP(g,v,w,H){Zg=g;var q=0;do{if(R6&&(gr=null),vH=0,R6=!1,q>=uF)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(q+=1,wH=!1,n0=Y0=null,g.updateQueue!=null){var A=g.updateQueue;A.lastEffect=null,A.events=null,A.stores=null,A.memoCache!=null&&(A.memoCache.index=0)}vr=-1,D.H=Eh,A=JW(v,w,H)}while(R6);return A}function nz(){var g=D.H,v=g.useState()[0];return v=typeof v.then==="function"?A8(v):v,g=g.useState()[0],(Y0!==null?Y0.memoizedState:null)!==g&&(Zg.flags|=1024),v}function PP(){var g=Gq!==0;return Gq=0,g}function bP(g,v,w){v.updateQueue=g.updateQueue,v.flags=(v.mode&mv)!==Ng?v.flags&-402655237:v.flags&-2053,g.lanes&=~w}function WP(g){if(Yq){for(g=g.memoizedState;g!==null;){var v=g.queue;v!==null&&(v.pending=null),g=g.next}Yq=!1}sw=0,uv=n0=Y0=Zg=null,vr=-1,o=null,R6=!1,vH=Gq=0,gr=null}function L1(){var g={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return n0===null?Zg.memoizedState=n0=g:n0=n0.next=g,n0}function q0(){if(Y0===null){var g=Zg.alternate;g=g!==null?g.memoizedState:null}else g=Y0.next;var v=n0===null?Zg.memoizedState:n0.next;if(v!==null)n0=v,Y0=g;else{if(g===null){if(Zg.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Y0=g,g={memoizedState:Y0.memoizedState,baseState:Y0.baseState,baseQueue:Y0.baseQueue,queue:Y0.queue,next:null},n0===null?Zg.memoizedState=n0=g:n0=n0.next=g}return n0}function H2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function A8(g){var v=vH;return vH+=1,gr===null&&(gr=GX()),g=JX(gr,g,v),v=Zg,(n0===null?v.memoizedState:n0.next)===null&&(v=v.alternate,D.H=v!==null&&v.memoizedState!==null?BW:FW),g}function Cr(g){if(g!==null&&typeof g==="object"){if(typeof g.then==="function")return A8(g);if(g.$$typeof===Qw)return U0(g)}throw Error("An unsupported type was passed to use(): "+String(g))}function k5(g){var v=null,w=Zg.updateQueue;if(w!==null&&(v=w.memoCache),v==null){var H=Zg.alternate;H!==null&&(H=H.updateQueue,H!==null&&(H=H.memoCache,H!=null&&(v={data:H.data.map(function(q){return q.slice()}),index:0})))}if(v==null&&(v={data:[],index:0}),w===null&&(w=H2(),Zg.updateQueue=w),w.memoCache=v,w=v.data[v.index],w===void 0||wH)for(w=v.data[v.index]=Array(g),H=0;H<g;H++)w[H]=AL;else w.length!==g&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",w.length,g);return v.index++,w}function xv(g,v){return typeof v==="function"?v(g):v}function MP(g,v,w){var H=L1();if(w!==void 0){var q=w(v);if(g4){h0(!0);try{w(v)}finally{h0(!1)}}}else q=v;return H.memoizedState=H.baseState=q,g={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g,lastRenderedState:q},H.queue=g,g=g.dispatch=dz.bind(null,Zg,g),[H.memoizedState,g]}function o4(g){var v=q0();return XP(v,Y0,g)}function XP(g,v,w){var H=g.queue;if(H===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");H.lastRenderedReducer=w;var q=g.baseQueue,A=H.pending;if(A!==null){if(q!==null){var W=q.next;q.next=A.next,A.next=W}v.baseQueue!==q&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),v.baseQueue=q=A,H.pending=null}if(A=g.baseState,q===null)g.memoizedState=A;else{v=q.next;var X=W=null,J=null,R=v,u=!1;do{var T=R.lane&-536870913;if(T!==R.lane?(kg&T)===T:(sw&T)===T){var B=R.revertLane;if(B===0)J!==null&&(J=J.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),T===t5&&(u=!0);else if((sw&B)===B){R=R.next,B===t5&&(u=!0);continue}else T={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},J===null?(X=J=T,W=A):J=J.next=T,Zg.lanes|=B,ar|=B;T=R.action,g4&&w(A,T),A=R.hasEagerState?R.eagerState:w(A,T)}else B={lane:T,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},J===null?(X=J=B,W=A):J=J.next=B,Zg.lanes|=T,ar|=T;R=R.next}while(R!==null&&R!==v);if(J===null?W=A:J.next=X,!N1(A,g.memoizedState)&&(e0=!0,u&&(w=X6,w!==null)))throw w;g.memoizedState=A,g.baseState=W,g.baseQueue=J,H.lastRenderedState=A}return q===null&&(H.lanes=0),[g.memoizedState,H.dispatch]}function P8(g){var v=q0(),w=v.queue;if(w===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");w.lastRenderedReducer=g;var{dispatch:H,pending:q}=w,A=v.memoizedState;if(q!==null){w.pending=null;var W=q=q.next;do A=g(A,W.action),W=W.next;while(W!==q);N1(A,v.memoizedState)||(e0=!0),v.memoizedState=A,v.baseQueue===null&&(v.baseState=A),w.lastRenderedState=A}return[A,H]}function YP(g,v,w){var H=Zg,q=L1();if(eg){if(w===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var A=w();Q6||A===w()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Q6=!0)}else{if(A=v(),Q6||(w=v(),N1(A,w)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Q6=!0)),G0===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(kg&127)!==0||uX(H,v,A)}return q.memoizedState=A,w={value:A,getSnapshot:v},q.queue=w,P2(CX.bind(null,H,w,g),[g]),H.flags|=2048,k4(Zv|T1,{destroy:void 0},TX.bind(null,H,w,A,v),null),A}function O2(g,v,w){var H=Zg,q=q0(),A=eg;if(A){if(w===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");w=w()}else if(w=v(),!Q6){var W=v();N1(w,W)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Q6=!0)}if(W=!N1((Y0||q).memoizedState,w))q.memoizedState=w,e0=!0;q=q.queue;var X=CX.bind(null,H,q,g);if(E1(2048,T1,X,[g]),q.getSnapshot!==v||W||n0!==null&&n0.memoizedState.tag&Zv){if(H.flags|=2048,k4(Zv|T1,{destroy:void 0},TX.bind(null,H,q,w,v),null),G0===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");A||(sw&127)!==0||uX(H,v,w)}return w}function uX(g,v,w){g.flags|=16384,g={getSnapshot:v,value:w},v=Zg.updateQueue,v===null?(v=H2(),Zg.updateQueue=v,v.stores=[g]):(w=v.stores,w===null?v.stores=[g]:w.push(g))}function TX(g,v,w,H){v.value=w,v.getSnapshot=H,SX(v)&&lX(g)}function CX(g,v,w){return w(function(){SX(v)&&(rw(2,"updateSyncExternalStore()",g),lX(g))})}function SX(g){var v=g.getSnapshot;g=g.value;try{var w=v();return!N1(g,w)}catch(H){return!0}}function lX(g){var v=K1(g,2);v!==null&&Z0(v,g,2)}function GP(g){var v=L1();if(typeof g==="function"){var w=g;if(g=w(),g4){h0(!0);try{w()}finally{h0(!1)}}}return v.memoizedState=v.baseState=g,v.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:g},v}function hP(g){g=GP(g);var v=g.queue,w=aX.bind(null,Zg,v);return v.dispatch=w,[g.memoizedState,w]}function JP(g){var v=L1();v.memoizedState=v.baseState=g;var w={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return v.queue=w,v=TP.bind(null,Zg,!0,w),w.dispatch=v,[g,v]}function xX(g,v){var w=q0();return oX(w,Y0,g,v)}function oX(g,v,w,H){return g.baseState=w,XP(g,Y0,typeof H==="function"?H:xv)}function DX(g,v){var w=q0();if(Y0!==null)return oX(w,Y0,g,v);return w.baseState=g,[g,w.queue.dispatch]}function ez(g,v,w,H,q){if(G2(g))throw Error("Cannot update form state while rendering.");if(g=v.action,g!==null){var A={payload:q,action:g,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(W){A.listeners.push(W)}};D.T!==null?w(!0):A.isTransition=!1,H(A),w=v.pending,w===null?(A.next=v.pending=A,kX(v,A)):(A.next=w.next,v.pending=w.next=A)}}function kX(g,v){var{action:w,payload:H}=v,q=g.state;if(v.isTransition){var A=D.T,W={};W._updatedFibers=new Set,D.T=W;try{var X=w(q,H),J=D.S;J!==null&&J(W,X),mX(g,v,X)}catch(R){QP(g,v,R)}finally{A!==null&&W.types!==null&&(A.types!==null&&A.types!==W.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),A.types=W.types),D.T=A,A===null&&W._updatedFibers&&(g=W._updatedFibers.size,W._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{W=w(q,H),mX(g,v,W)}catch(R){QP(g,v,R)}}function mX(g,v,w){w!==null&&typeof w==="object"&&typeof w.then==="function"?(D.asyncTransitions++,w.then(Y2,Y2),w.then(function(H){VX(g,v,H)},function(H){return QP(g,v,H)}),v.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):VX(g,v,w)}function VX(g,v,w){v.status="fulfilled",v.value=w,EX(v),g.state=w,v=g.pending,v!==null&&(w=v.next,w===v?g.pending=null:(w=w.next,v.next=w,kX(g,w)))}function QP(g,v,w){var H=g.pending;if(g.pending=null,H!==null){H=H.next;do v.status="rejected",v.reason=w,EX(v),v=v.next;while(v!==H)}g.action=null}function EX(g){g=g.listeners;for(var v=0;v<g.length;v++)(0,g[v])()}function _X(g,v){return v}function D4(g,v){if(eg){var w=G0.formState;if(w!==null){g:{var H=Zg;if(eg){if(K0){v:{var q=K0;for(var A=Bv;q.nodeType!==8;){if(!A){q=null;break v}if(q=wv(q.nextSibling),q===null){q=null;break v}}A=q.data,q=A===cW||A===BJ?q:null}if(q){K0=wv(q.nextSibling),H=q.data===cW;break g}}Fr(H)}H=!1}H&&(v=w[0])}}return w=L1(),w.memoizedState=w.baseState=v,H={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_X,lastRenderedState:v},w.queue=H,w=aX.bind(null,Zg,H),H.dispatch=w,H=GP(!1),A=TP.bind(null,Zg,!1,H.queue),H=L1(),q={state:v,dispatch:null,action:g,pending:null},H.queue=q,w=ez.bind(null,Zg,q,A,w),q.dispatch=w,H.memoizedState=g,[v,w,!1]}function q2(g){var v=q0();return yX(v,Y0,g)}function yX(g,v,w){if(v=XP(g,v,_X)[0],g=o4(xv)[0],typeof v==="object"&&v!==null&&typeof v.then==="function")try{var H=A8(v)}catch(W){if(W===Y6)throw bq;throw W}else H=v;v=q0();var q=v.queue,A=q.dispatch;return w!==v.memoizedState&&(Zg.flags|=2048,k4(Zv|T1,{destroy:void 0},cz.bind(null,q,w),null)),[H,A,g]}function cz(g,v){g.action=v}function A2(g){var v=q0(),w=Y0;if(w!==null)return yX(v,w,g);q0(),v=v.memoizedState,w=q0();var H=w.queue.dispatch;return w.memoizedState=g,[v,H,!1]}function k4(g,v,w,H){return g={tag:g,create:w,deps:H,inst:v,next:null},v=Zg.updateQueue,v===null&&(v=H2(),Zg.updateQueue=v),w=v.lastEffect,w===null?v.lastEffect=g.next=g:(H=w.next,w.next=g,g.next=H,v.lastEffect=g),g}function RP(g){var v=L1();return g={current:g},v.memoizedState=g}function m5(g,v,w,H){var q=L1();Zg.flags|=g,q.memoizedState=k4(Zv|v,{destroy:void 0},w,H===void 0?null:H)}function E1(g,v,w,H){var q=q0();H=H===void 0?null:H;var A=q.memoizedState.inst;Y0!==null&&H!==null&&OP(H,Y0.memoizedState.deps)?q.memoizedState=k4(v,A,w,H):(Zg.flags|=g,q.memoizedState=k4(Zv|v,A,w,H))}function P2(g,v){(Zg.mode&mv)!==Ng?m5(276826112,T1,g,v):m5(8390656,T1,g,v)}function tz(g){Zg.flags|=4;var v=Zg.updateQueue;if(v===null)v=H2(),Zg.updateQueue=v,v.events=[g];else{var w=v.events;w===null?v.events=[g]:w.push(g)}}function KP(g){var v=L1(),w={impl:g};return v.memoizedState=w,function(){if((ag&g1)!==q1)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return w.impl.apply(void 0,arguments)}}function b2(g){var v=q0().memoizedState;return tz({ref:v,nextImpl:g}),function(){if((ag&g1)!==q1)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return v.impl.apply(void 0,arguments)}}function $P(g,v){var w=4194308;return(Zg.mode&mv)!==Ng&&(w|=134217728),m5(w,Pv,g,v)}function jX(g,v){if(typeof v==="function"){g=g();var w=v(g);return function(){typeof w==="function"?w():v(null)}}if(v!==null&&v!==void 0)return v.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(v).join(", ")+"}"),g=g(),v.current=g,function(){v.current=null}}function zP(g,v,w){typeof v!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",v!==null?typeof v:"null"),w=w!==null&&w!==void 0?w.concat([g]):null;var H=4194308;(Zg.mode&mv)!==Ng&&(H|=134217728),m5(H,Pv,jX.bind(null,v,g),w)}function W2(g,v,w){typeof v!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",v!==null?typeof v:"null"),w=w!==null&&w!==void 0?w.concat([g]):null,E1(4,Pv,jX.bind(null,v,g),w)}function UP(g,v){return L1().memoizedState=[g,v===void 0?null:v],g}function M2(g,v){var w=q0();v=v===void 0?null:v;var H=w.memoizedState;if(v!==null&&OP(v,H[1]))return H[0];return w.memoizedState=[g,v],g}function LP(g,v){var w=L1();v=v===void 0?null:v;var H=g();if(g4){h0(!0);try{g()}finally{h0(!1)}}return w.memoizedState=[H,v],H}function X2(g,v){var w=q0();v=v===void 0?null:v;var H=w.memoizedState;if(v!==null&&OP(v,H[1]))return H[0];if(H=g(),g4){h0(!0);try{g()}finally{h0(!1)}}return w.memoizedState=[H,v],H}function FP(g,v){var w=L1();return BP(w,g,v)}function iX(g,v){var w=q0();return nX(w,Y0.memoizedState,g,v)}function fX(g,v){var w=q0();return Y0===null?BP(w,g,v):nX(w,Y0.memoizedState,g,v)}function BP(g,v,w){if(w===void 0||(sw&1073741824)!==0&&(kg&261930)===0)return g.memoizedState=v;return g.memoizedState=w,g=eY(),Zg.lanes|=g,ar|=g,w}function nX(g,v,w,H){if(N1(w,v))return w;if(h6.current!==null)return g=BP(g,w,H),N1(g,v)||(e0=!0),g;if((sw&42)===0||(sw&1073741824)!==0&&(kg&261930)===0)return e0=!0,g.memoizedState=w;return g=eY(),Zg.lanes|=g,ar|=g,v}function Y2(){D.asyncTransitions--}function eX(g,v,w,H,q){var A=H0.p;H0.p=A!==0&&A<kv?A:kv;var W=D.T,X={};X._updatedFibers=new Set,D.T=X,TP(g,!1,v,w);try{var J=q(),R=D.S;if(R!==null&&R(X,J),J!==null&&typeof J==="object"&&typeof J.then==="function"){D.asyncTransitions++,J.then(Y2,Y2);var u=iz(J,H);b8(g,v,u,vv(g))}else b8(g,v,H,vv(g))}catch(T){b8(g,v,{then:function(){},status:"rejected",reason:T},vv(g))}finally{H0.p=A,W!==null&&X.types!==null&&(W.types!==null&&W.types!==X.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),W.types=X.types),D.T=W,W===null&&X._updatedFibers&&(g=X._updatedFibers.size,X._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function IP(g,v,w,H){if(g.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var q=cX(g).queue;yz(g),eX(g,q,v,M4,w===null?U:function(){return tX(g),w(H)})}function cX(g){var v=g.memoizedState;if(v!==null)return v;v={memoizedState:M4,baseState:M4,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:M4},next:null};var w={};return v.next={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:w},next:null},g.memoizedState=v,g=g.alternate,g!==null&&(g.memoizedState=v),v}function tX(g){D.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var v=cX(g);v.next===null&&(v=g.alternate.memoizedState),b8(g,v.next.queue,{},vv(g))}function NP(){var g=GP(!1);return g=eX.bind(null,Zg,g.queue,!0,!1),L1().memoizedState=g,[!1,g]}function pX(){var g=o4(xv)[0],v=q0().memoizedState;return[typeof g==="boolean"?g:A8(g),v]}function dX(){var g=P8(xv)[0],v=q0().memoizedState;return[typeof g==="boolean"?g:A8(g),v]}function V5(){return U0(RH)}function ZP(){var g=L1(),v=G0.identifierPrefix;if(eg){var w=cw,H=ew;w=(H&~(1<<32-F1(H)-1)).toString(32)+w,v="_"+v+"R_"+w,w=Gq++,0<w&&(v+="H"+w.toString(32)),v+="_"}else w=ZF++,v="_"+v+"r_"+w.toString(32)+"_";return g.memoizedState=v}function uP(){return L1().memoizedState=pz.bind(null,Zg)}function pz(g,v){for(var w=g.return;w!==null;){switch(w.tag){case 24:case 3:var H=vv(w),q=Nr(H),A=Zr(w,q,H);A!==null&&(rw(H,"refresh()",g),Z0(A,w,H),H8(A,w,H)),g=tA(),v!==null&&v!==void 0&&A!==null&&console.error("The seed argument is not enabled outside experimental channels."),q.payload={cache:g};return}w=w.return}}function dz(g,v,w){var H=arguments;typeof H[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),H=vv(g);var q={lane:H,revertLane:0,gesture:null,action:w,hasEagerState:!1,eagerState:null,next:null};G2(g)?sX(v,q):(q=kA(g,v,q,H),q!==null&&(rw(H,"dispatch()",g),Z0(q,g,H),gY(q,v,H)))}function aX(g,v,w){var H=arguments;typeof H[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),H=vv(g),b8(g,v,w,H)&&rw(H,"setState()",g)}function b8(g,v,w,H){var q={lane:H,revertLane:0,gesture:null,action:w,hasEagerState:!1,eagerState:null,next:null};if(G2(g))sX(v,q);else{var A=g.alternate;if(g.lanes===0&&(A===null||A.lanes===0)&&(A=v.lastRenderedReducer,A!==null)){var W=D.H;D.H=Ev;try{var X=v.lastRenderedState,J=A(X,w);if(q.hasEagerState=!0,q.eagerState=J,N1(J,X))return EO(g,v,q,0),G0===null&&VO(),!1}catch(R){}finally{D.H=W}}if(w=kA(g,v,q,H),w!==null)return Z0(w,g,H),gY(w,v,H),!0}return!1}function TP(g,v,w,H){if(D.T===null&&t5===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),H={lane:2,revertLane:qb(),gesture:null,action:H,hasEagerState:!1,eagerState:null,next:null},G2(g)){if(v)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else v=kA(g,w,H,2),v!==null&&(rw(2,"setOptimistic()",g),Z0(v,g,2))}function G2(g){var v=g.alternate;return g===Zg||v!==null&&v===Zg}function sX(g,v){R6=Yq=!0;var w=g.pending;w===null?v.next=v:(v.next=w.next,w.next=v),g.pending=v}function gY(g,v,w){if((w&4194048)!==0){var H=v.lanes;H&=g.pendingLanes,w|=H,v.lanes=w,B5(g,w)}}function CP(g){if(g!==null&&typeof g!=="function"){var v=String(g);dh.has(v)||(dh.add(v),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",g))}}function SP(g,v,w,H){var q=g.memoizedState,A=w(H,q);if(g.mode&z1){h0(!0);try{A=w(H,q)}finally{h0(!1)}}A===void 0&&(v=a(v)||"Component",eh.has(v)||(eh.add(v),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",v))),q=A===null||A===void 0?q:yg({},q,A),g.memoizedState=q,g.lanes===0&&(g.updateQueue.baseState=q)}function vY(g,v,w,H,q,A,W){var X=g.stateNode;if(typeof X.shouldComponentUpdate==="function"){if(w=X.shouldComponentUpdate(H,A,W),g.mode&z1){h0(!0);try{w=X.shouldComponentUpdate(H,A,W)}finally{h0(!1)}}return w===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",a(v)||"Component"),w}return v.prototype&&v.prototype.isPureReactComponent?!d6(w,H)||!d6(q,A):!0}function wY(g,v,w,H){var q=v.state;typeof v.componentWillReceiveProps==="function"&&v.componentWillReceiveProps(w,H),typeof v.UNSAFE_componentWillReceiveProps==="function"&&v.UNSAFE_componentWillReceiveProps(w,H),v.state!==q&&(g=k(g)||"Component",yh.has(g)||(yh.add(g),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",g)),IW.enqueueReplaceState(v,v.state,null))}function E5(g,v){var w=v;if("ref"in v){w={};for(var H in v)H!=="ref"&&(w[H]=v[H])}if(g=g.defaultProps){w===v&&(w=yg({},w));for(var q in g)w[q]===void 0&&(w[q]=g[q])}return w}function rY(g){rW(g),console.warn(`%s

%s
`,K6?"An error occurred in the <"+K6+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function HY(g){var v=K6?"The above error occurred in the <"+K6+"> component.":"The above error occurred in one of your React components.",w="React will try to recreate this component tree from scratch using the error boundary you provided, "+((NW||"Anonymous")+".");if(typeof g==="object"&&g!==null&&typeof g.environmentName==="string"){var H=g.environmentName;g=[`%o

%s

%s
`,g,v,w].slice(0),typeof g[0]==="string"?g.splice(0,1,lJ+" "+g[0],xJ,Vq+H+Vq,oJ):g.splice(0,0,lJ,xJ,Vq+H+Vq,oJ),g.unshift(console),H=tF.apply(console.error,g),H()}else console.error(`%o

%s

%s
`,g,v,w)}function OY(g){rW(g)}function h2(g,v){try{K6=v.source?k(v.source):null,NW=null;var w=v.value;if(D.actQueue!==null)D.thrownErrors.push(w);else{var H=g.onUncaughtError;H(w,{componentStack:v.stack})}}catch(q){setTimeout(function(){throw q})}}function qY(g,v,w){try{K6=w.source?k(w.source):null,NW=k(v);var H=g.onCaughtError;H(w.value,{componentStack:w.stack,errorBoundary:v.tag===1?v.stateNode:null})}catch(q){setTimeout(function(){throw q})}}function lP(g,v,w){return w=Nr(w),w.tag=$W,w.payload={element:null},w.callback=function(){Pg(v.source,h2,g,v)},w}function xP(g){return g=Nr(g),g.tag=$W,g}function oP(g,v,w,H){var q=w.type.getDerivedStateFromError;if(typeof q==="function"){var A=H.value;g.payload=function(){return q(A)},g.callback=function(){s9(w),Pg(H.source,qY,v,w,H)}}var W=w.stateNode;W!==null&&typeof W.componentDidCatch==="function"&&(g.callback=function(){s9(w),Pg(H.source,qY,v,w,H),typeof q!=="function"&&(g5===null?g5=new Set([this]):g5.add(this)),FF(this,H),typeof q==="function"||(w.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",k(w)||"Unknown")})}function az(g,v,w,H,q){if(w.flags|=32768,$w&&Q8(g,q),H!==null&&typeof H==="object"&&typeof H.then==="function"){if(v=w.alternate,v!==null&&l4(v,w,q,!0),eg&&(Lw=!0),w=Av.current,w!==null){switch(w.tag){case 31:case 13:return Nv===null?F2():w.alternate===null&&I0===rr&&(I0=Qq),w.flags&=-257,w.flags|=65536,w.lanes=q,H===Wq?w.flags|=16384:(v=w.updateQueue,v===null?w.updateQueue=new Set([H]):v.add(H),wb(g,H,q)),!1;case 22:return w.flags|=65536,H===Wq?w.flags|=16384:(v=w.updateQueue,v===null?(v={transitions:null,markerInstances:null,retryQueue:new Set([H])},w.updateQueue=v):(w=v.retryQueue,w===null?v.retryQueue=new Set([H]):w.add(H)),wb(g,H,q)),!1}throw Error("Unexpected Suspense handler tag ("+w.tag+"). This is a bug in React.")}return wb(g,H,q),F2(),!1}if(eg)return Lw=!0,v=Av.current,v!==null?((v.flags&65536)===0&&(v.flags|=256),v.flags|=65536,v.lanes=q,H!==bW&&s6(d1(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:H}),w))):(H!==bW&&s6(d1(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:H}),w)),g=g.current.alternate,g.flags|=65536,q&=-q,g.lanes|=q,H=d1(H,w),q=lP(g.stateNode,H,q),v2(g,q),I0!==pr&&(I0=v4)),!1;var A=d1(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:H}),w);if(bH===null?bH=[A]:bH.push(A),I0!==pr&&(I0=v4),v===null)return!0;H=d1(H,w),w=v;do{switch(w.tag){case 3:return w.flags|=65536,g=q&-q,w.lanes|=g,g=lP(w.stateNode,H,g),v2(w,g),!1;case 1:if(v=w.type,A=w.stateNode,(w.flags&128)===0&&(typeof v.getDerivedStateFromError==="function"||A!==null&&typeof A.componentDidCatch==="function"&&(g5===null||!g5.has(A))))return w.flags|=65536,q&=-q,w.lanes|=q,q=xP(q),oP(q,g,w,H),v2(w,q),!1}w=w.return}while(w!==null);return!1}function M1(g,v,w,H){v.child=g===null?Ch(v,null,w,H):s5(v,g.child,w,H)}function AY(g,v,w,H,q){w=w.render;var A=v.ref;if("ref"in H){var W={};for(var X in H)X!=="ref"&&(W[X]=H[X])}else W=H;if(o5(v),H=qP(g,v,w,W,A,q),X=PP(),g!==null&&!e0)return bP(g,v,q),_w(g,v,q);return eg&&X&&jA(v),v.flags|=1,M1(g,v,H,q),v.child}function PY(g,v,w,H,q){if(g===null){var A=w.type;if(typeof A==="function"&&!VA(A)&&A.defaultProps===void 0&&w.compare===null)return w=C5(A),v.tag=15,v.type=w,kP(v,A),bY(g,v,w,H,q);return g=EA(w.type,null,H,v,v.mode,q),g.ref=v.ref,g.return=v,v.child=g}if(A=g.child,!jP(g,q)){var W=A.memoizedProps;if(w=w.compare,w=w!==null?w:d6,w(W,H)&&g.ref===v.ref)return _w(g,v,q)}return v.flags|=1,g=kw(A,H),g.ref=v.ref,g.return=v,v.child=g}function bY(g,v,w,H,q){if(g!==null){var A=g.memoizedProps;if(d6(A,H)&&g.ref===v.ref&&v.type===g.type)if(e0=!1,v.pendingProps=H=A,jP(g,q))(g.flags&131072)!==0&&(e0=!0);else return v.lanes=g.lanes,_w(g,v,q)}return DP(g,v,w,H,q)}function WY(g,v,w,H){var q=H.children,A=g!==null?g.memoizedState:null;if(g===null&&v.stateNode===null&&(v.stateNode={_visibility:m8,_pendingMarkers:null,_retryCache:null,_transitions:null}),H.mode==="hidden"){if((v.flags&128)!==0){if(A=A!==null?A.baseLanes|w:w,g!==null){H=v.child=g.child;for(q=0;H!==null;)q=q|H.lanes|H.childLanes,H=H.sibling;H=q&~A}else H=0,v.child=null;return MY(g,v,A,w,H)}if((w&536870912)!==0)v.memoizedState={baseLanes:0,cachePool:null},g!==null&&tO(v,A!==null?A.cachePool:null),A!==null?IX(v,A):wP(v),NX(v);else return H=v.lanes=536870912,MY(g,v,A!==null?A.baseLanes|w:w,w,H)}else A!==null?(tO(v,A.cachePool),IX(v,A),Tr(v),v.memoizedState=null):(g!==null&&tO(v,null),wP(v),Tr(v));return M1(g,v,q,w),v.child}function W8(g,v){return g!==null&&g.tag===22||v.stateNode!==null||(v.stateNode={_visibility:m8,_pendingMarkers:null,_retryCache:null,_transitions:null}),v.sibling}function MY(g,v,w,H,q){var A=aA();return A=A===null?null:{parent:i0._currentValue,pool:A},v.memoizedState={baseLanes:w,cachePool:A},g!==null&&tO(v,null),wP(v),NX(v),g!==null&&l4(g,v,H,!0),v.childLanes=q,null}function J2(g,v){var w=v.hidden;return w!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,w===!0?"hidden":w===!1?"hidden={false}":"hidden={...}",w?'mode="hidden"':'mode="visible"'),v=R2({mode:v.mode,children:v.children},g.mode),v.ref=g.ref,g.child=v,v.return=g,v}function XY(g,v,w){return s5(v,g.child,null,w),g=J2(v,v.pendingProps),g.flags|=2,gv(v),v.memoizedState=null,g}function sz(g,v,w){var H=v.pendingProps,q=(v.flags&128)!==0;if(v.flags&=-129,g===null){if(eg){if(H.mode==="hidden")return g=J2(v,H),v.lanes=536870912,W8(null,g);if(HP(v),(g=K0)?(w=kG(g,Bv),w=w!==null&&w.data===A4?w:null,w!==null&&(H={dehydrated:w,treeContext:HX(),retryLane:536870912,hydrationErrors:null},v.memoizedState=H,H=wX(w),H.return=v,v.child=H,G1=v,K0=null)):w=null,w===null)throw jO(v,g),Fr(v);return v.lanes=536870912,null}return J2(v,H)}var A=g.memoizedState;if(A!==null){var W=A.dehydrated;if(HP(v),q)if(v.flags&256)v.flags&=-257,v=XY(g,v,w);else if(v.memoizedState!==null)v.child=g.child,v.flags|=128,v=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(qX(),(w&536870912)!==0&&L2(v),e0||l4(g,v,w,!1),q=(w&g.childLanes)!==0,e0||q){if(H=G0,H!==null&&(W=I5(H,w),W!==0&&W!==A.retryLane))throw A.retryLane=W,K1(g,W),Z0(H,g,W),ZW;F2(),v=XY(g,v,w)}else g=A.treeContext,K0=wv(W.nextSibling),G1=v,eg=!0,jr=null,Lw=!1,qv=null,Bv=!1,g!==null&&OX(v,g),v=J2(v,H),v.flags|=4096;return v}return A=g.child,H={mode:H.mode,children:H.children},(w&536870912)!==0&&(w&g.lanes)!==0&&L2(v),g=kw(A,H),g.ref=v.ref,v.child=g,g.return=v,g}function Q2(g,v){var w=v.ref;if(w===null)g!==null&&g.ref!==null&&(v.flags|=4194816);else{if(typeof w!=="function"&&typeof w!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(g===null||g.ref!==w)v.flags|=4194816}}function DP(g,v,w,H,q){if(w.prototype&&typeof w.prototype.render==="function"){var A=a(w)||"Unknown";ah[A]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",A,A),ah[A]=!0)}if(v.mode&z1&&Vv.recordLegacyContextWarning(v,null),g===null&&(kP(v,v.type),w.contextTypes&&(A=a(w)||"Unknown",gJ[A]||(gJ[A]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",A)))),o5(v),w=qP(g,v,w,H,void 0,q),H=PP(),g!==null&&!e0)return bP(g,v,q),_w(g,v,q);return eg&&H&&jA(v),v.flags|=1,M1(g,v,w,q),v.child}function YY(g,v,w,H,q,A){if(o5(v),vr=-1,wH=g!==null&&g.type!==v.type,v.updateQueue=null,w=AP(v,H,w,q),ZX(g,v),H=PP(),g!==null&&!e0)return bP(g,v,A),_w(g,v,A);return eg&&H&&jA(v),v.flags|=1,M1(g,v,w,A),v.child}function GY(g,v,w,H,q){switch(G(v)){case!1:var A=v.stateNode,W=new v.type(v.memoizedProps,A.context).state;A.updater.enqueueSetState(A,W,null);break;case!0:v.flags|=128,v.flags|=65536,A=Error("Simulated error coming from DevTools");var X=q&-q;if(v.lanes|=X,W=G0,W===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");X=xP(X),oP(X,W,v,d1(A,v)),v2(v,X)}if(o5(v),v.stateNode===null){if(W=yr,A=w.contextType,"contextType"in w&&A!==null&&(A===void 0||A.$$typeof!==Qw)&&!ph.has(w)&&(ph.add(w),X=A===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof A!=="object"?" However, it is set to a "+typeof A+".":A.$$typeof===ub?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(A).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",a(w)||"Component",X)),typeof A==="object"&&A!==null&&(W=U0(A)),A=new w(H,W),v.mode&z1){h0(!0);try{A=new w(H,W)}finally{h0(!1)}}if(W=v.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=IW,v.stateNode=A,A._reactInternals=v,A._reactInternalInstance=_h,typeof w.getDerivedStateFromProps==="function"&&W===null&&(W=a(w)||"Component",jh.has(W)||(jh.add(W),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",W,A.state===null?"null":"undefined",W))),typeof w.getDerivedStateFromProps==="function"||typeof A.getSnapshotBeforeUpdate==="function"){var J=X=W=null;if(typeof A.componentWillMount==="function"&&A.componentWillMount.__suppressDeprecationWarning!==!0?W="componentWillMount":typeof A.UNSAFE_componentWillMount==="function"&&(W="UNSAFE_componentWillMount"),typeof A.componentWillReceiveProps==="function"&&A.componentWillReceiveProps.__suppressDeprecationWarning!==!0?X="componentWillReceiveProps":typeof A.UNSAFE_componentWillReceiveProps==="function"&&(X="UNSAFE_componentWillReceiveProps"),typeof A.componentWillUpdate==="function"&&A.componentWillUpdate.__suppressDeprecationWarning!==!0?J="componentWillUpdate":typeof A.UNSAFE_componentWillUpdate==="function"&&(J="UNSAFE_componentWillUpdate"),W!==null||X!==null||J!==null){A=a(w)||"Component";var R=typeof w.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";fh.has(A)||(fh.add(A),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,A,R,W!==null?`
  `+W:"",X!==null?`
  `+X:"",J!==null?`
  `+J:""))}}A=v.stateNode,W=a(w)||"Component",A.render||(w.prototype&&typeof w.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",W):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",W)),!A.getInitialState||A.getInitialState.isReactClassApproved||A.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",W),A.getDefaultProps&&!A.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",W),A.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",W),w.childContextTypes&&!th.has(w)&&(th.add(w),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",W)),w.contextTypes&&!ch.has(w)&&(ch.add(w),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",W)),typeof A.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",W),w.prototype&&w.prototype.isPureReactComponent&&typeof A.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",a(w)||"A pure component"),typeof A.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",W),typeof A.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",W),typeof A.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",W),typeof A.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",W),X=A.props!==H,A.props!==void 0&&X&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",W),A.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",W,W),typeof A.getSnapshotBeforeUpdate!=="function"||typeof A.componentDidUpdate==="function"||ih.has(w)||(ih.add(w),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",a(w))),typeof A.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",W),typeof A.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",W),typeof w.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",W),(X=A.state)&&(typeof X!=="object"||a0(X))&&console.error("%s.state: must be set to an object or null",W),typeof A.getChildContext==="function"&&typeof w.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",W),A=v.stateNode,A.props=H,A.state=v.memoizedState,A.refs={},gP(v),W=w.contextType,A.context=typeof W==="object"&&W!==null?U0(W):yr,A.state===H&&(W=a(w)||"Component",nh.has(W)||(nh.add(W),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",W))),v.mode&z1&&Vv.recordLegacyContextWarning(v,A),Vv.recordUnsafeLifecycleWarnings(v,A),A.state=v.memoizedState,W=w.getDerivedStateFromProps,typeof W==="function"&&(SP(v,w,W,H),A.state=v.memoizedState),typeof w.getDerivedStateFromProps==="function"||typeof A.getSnapshotBeforeUpdate==="function"||typeof A.UNSAFE_componentWillMount!=="function"&&typeof A.componentWillMount!=="function"||(W=A.state,typeof A.componentWillMount==="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount==="function"&&A.UNSAFE_componentWillMount(),W!==A.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",k(v)||"Component"),IW.enqueueReplaceState(A,A.state,null)),q8(v,H,A,q),O8(),A.state=v.memoizedState),typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&mv)!==Ng&&(v.flags|=134217728),A=!0}else if(g===null){A=v.stateNode;var u=v.memoizedProps;X=E5(w,u),A.props=X;var T=A.context;J=w.contextType,W=yr,typeof J==="object"&&J!==null&&(W=U0(J)),R=w.getDerivedStateFromProps,J=typeof R==="function"||typeof A.getSnapshotBeforeUpdate==="function",u=v.pendingProps!==u,J||typeof A.UNSAFE_componentWillReceiveProps!=="function"&&typeof A.componentWillReceiveProps!=="function"||(u||T!==W)&&wY(v,A,H,W),tr=!1;var B=v.memoizedState;A.state=B,q8(v,H,A,q),O8(),T=v.memoizedState,u||B!==T||tr?(typeof R==="function"&&(SP(v,w,R,H),T=v.memoizedState),(X=tr||vY(v,w,X,H,B,T,W))?(J||typeof A.UNSAFE_componentWillMount!=="function"&&typeof A.componentWillMount!=="function"||(typeof A.componentWillMount==="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount==="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&mv)!==Ng&&(v.flags|=134217728)):(typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&mv)!==Ng&&(v.flags|=134217728),v.memoizedProps=H,v.memoizedState=T),A.props=H,A.state=T,A.context=W,A=X):(typeof A.componentDidMount==="function"&&(v.flags|=4194308),(v.mode&mv)!==Ng&&(v.flags|=134217728),A=!1)}else{A=v.stateNode,vP(g,v),W=v.memoizedProps,J=E5(w,W),A.props=J,R=v.pendingProps,B=A.context,T=w.contextType,X=yr,typeof T==="object"&&T!==null&&(X=U0(T)),u=w.getDerivedStateFromProps,(T=typeof u==="function"||typeof A.getSnapshotBeforeUpdate==="function")||typeof A.UNSAFE_componentWillReceiveProps!=="function"&&typeof A.componentWillReceiveProps!=="function"||(W!==R||B!==X)&&wY(v,A,H,X),tr=!1,B=v.memoizedState,A.state=B,q8(v,H,A,q),O8();var x=v.memoizedState;W!==R||B!==x||tr||g!==null&&g.dependencies!==null&&fO(g.dependencies)?(typeof u==="function"&&(SP(v,w,u,H),x=v.memoizedState),(J=tr||vY(v,w,J,H,B,x,X)||g!==null&&g.dependencies!==null&&fO(g.dependencies))?(T||typeof A.UNSAFE_componentWillUpdate!=="function"&&typeof A.componentWillUpdate!=="function"||(typeof A.componentWillUpdate==="function"&&A.componentWillUpdate(H,x,X),typeof A.UNSAFE_componentWillUpdate==="function"&&A.UNSAFE_componentWillUpdate(H,x,X)),typeof A.componentDidUpdate==="function"&&(v.flags|=4),typeof A.getSnapshotBeforeUpdate==="function"&&(v.flags|=1024)):(typeof A.componentDidUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=4),typeof A.getSnapshotBeforeUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=1024),v.memoizedProps=H,v.memoizedState=x),A.props=H,A.state=x,A.context=X,A=J):(typeof A.componentDidUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=4),typeof A.getSnapshotBeforeUpdate!=="function"||W===g.memoizedProps&&B===g.memoizedState||(v.flags|=1024),A=!1)}if(X=A,Q2(g,v),W=(v.flags&128)!==0,X||W){if(X=v.stateNode,hv(v),W&&typeof w.getDerivedStateFromError!=="function")w=null,Z1=-1;else if(w=Qh(X),v.mode&z1){h0(!0);try{Qh(X)}finally{h0(!1)}}v.flags|=1,g!==null&&W?(v.child=s5(v,g.child,null,q),v.child=s5(v,null,w,q)):M1(g,v,w,q),v.memoizedState=X.state,g=v.child}else g=_w(g,v,q);return q=v.stateNode,A&&q.props!==H&&($6||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",k(v)||"a component"),$6=!0),g}function hY(g,v,w,H){return x5(),v.flags|=256,M1(g,v,w,H),v.child}function kP(g,v){v&&v.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,v.displayName||v.name||"Component"),typeof v.getDerivedStateFromProps==="function"&&(g=a(v)||"Unknown",vJ[g]||(console.error("%s: Function components do not support getDerivedStateFromProps.",g),vJ[g]=!0)),typeof v.contextType==="object"&&v.contextType!==null&&(v=a(v)||"Unknown",sh[v]||(console.error("%s: Function components do not support contextType.",v),sh[v]=!0))}function mP(g){return{baseLanes:g,cachePool:YX()}}function VP(g,v,w){return g=g!==null?g.childLanes&~w:0,v&&(g|=f1),g}function JY(g,v,w){var H,q=v.pendingProps;Y(v)&&(v.flags|=128);var A=!1,W=(v.flags&128)!==0;if((H=W)||(H=g!==null&&g.memoizedState===null?!1:(m0.current&gH)!==0),H&&(A=!0,v.flags&=-129),H=(v.flags&32)!==0,v.flags&=-33,g===null){if(eg){if(A?ur(v):Tr(v),(g=K0)?(w=kG(g,Bv),w=w!==null&&w.data!==A4?w:null,w!==null&&(H={dehydrated:w,treeContext:HX(),retryLane:536870912,hydrationErrors:null},v.memoizedState=H,H=wX(w),H.return=v,v.child=H,G1=v,K0=null)):w=null,w===null)throw jO(v,g),Fr(v);return Rb(w)?v.lanes=32:v.lanes=536870912,null}var X=q.children;if(q=q.fallback,A){Tr(v);var J=v.mode;return X=R2({mode:"hidden",children:X},J),q=S5(q,J,w,null),X.return=v,q.return=v,X.sibling=q,v.child=X,q=v.child,q.memoizedState=mP(w),q.childLanes=VP(g,H,w),v.memoizedState=uW,W8(null,q)}return ur(v),EP(v,X)}var R=g.memoizedState;if(R!==null){var u=R.dehydrated;if(u!==null){if(W)v.flags&256?(ur(v),v.flags&=-257,v=_P(g,v,w)):v.memoizedState!==null?(Tr(v),v.child=g.child,v.flags|=128,v=null):(Tr(v),X=q.fallback,J=v.mode,q=R2({mode:"visible",children:q.children},J),X=S5(X,J,w,null),X.flags|=2,q.return=v,X.return=v,q.sibling=X,v.child=q,s5(v,g.child,null,w),q=v.child,q.memoizedState=mP(w),q.childLanes=VP(g,H,w),v.memoizedState=uW,v=W8(null,q));else if(ur(v),qX(),(w&536870912)!==0&&L2(v),Rb(u)){if(H=u.nextSibling&&u.nextSibling.dataset,H){X=H.dgst;var T=H.msg;J=H.stck;var B=H.cstck}A=T,H=X,q=J,u=B,X=A,J=u,X=X?Error(X):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),X.stack=q||"",X.digest=H,H=J===void 0?null:J,q={value:X,source:null,stack:H},typeof H==="string"&&PW.set(X,q),s6(q),v=_P(g,v,w)}else if(e0||l4(g,v,w,!1),H=(w&g.childLanes)!==0,e0||H){if(H=G0,H!==null&&(q=I5(H,w),q!==0&&q!==R.retryLane))throw R.retryLane=q,K1(g,q),Z0(H,g,q),ZW;Qb(u)||F2(),v=_P(g,v,w)}else Qb(u)?(v.flags|=192,v.child=g.child,v=null):(g=R.treeContext,K0=wv(u.nextSibling),G1=v,eg=!0,jr=null,Lw=!1,qv=null,Bv=!1,g!==null&&OX(v,g),v=EP(v,q.children),v.flags|=4096);return v}}if(A)return Tr(v),X=q.fallback,J=v.mode,B=g.child,u=B.sibling,q=kw(B,{mode:"hidden",children:q.children}),q.subtreeFlags=B.subtreeFlags&65011712,u!==null?X=kw(u,X):(X=S5(X,J,w,null),X.flags|=2),X.return=v,q.return=v,q.sibling=X,v.child=q,W8(null,q),q=v.child,X=g.child.memoizedState,X===null?X=mP(w):(J=X.cachePool,J!==null?(B=i0._currentValue,J=J.parent!==B?{parent:B,pool:B}:J):J=YX(),X={baseLanes:X.baseLanes|w,cachePool:J}),q.memoizedState=X,q.childLanes=VP(g,H,w),v.memoizedState=uW,W8(g.child,q);return R!==null&&(w&62914560)===w&&(w&g.lanes)!==0&&L2(v),ur(v),w=g.child,g=w.sibling,w=kw(w,{mode:"visible",children:q.children}),w.return=v,w.sibling=null,g!==null&&(H=v.deletions,H===null?(v.deletions=[g],v.flags|=16):H.push(g)),v.child=w,v.memoizedState=null,w}function EP(g,v){return v=R2({mode:"visible",children:v},g.mode),v.return=g,g.child=v}function R2(g,v){return g=L(22,g,null,v),g.lanes=0,g}function _P(g,v,w){return s5(v,g.child,null,w),g=EP(v,v.pendingProps.children),g.flags|=2,v.memoizedState=null,g}function QY(g,v,w){g.lanes|=v;var H=g.alternate;H!==null&&(H.lanes|=v),eA(g.return,v,w)}function yP(g,v,w,H,q,A){var W=g.memoizedState;W===null?g.memoizedState={isBackwards:v,rendering:null,renderingStartTime:0,last:H,tail:w,tailMode:q,treeForkCount:A}:(W.isBackwards=v,W.rendering=null,W.renderingStartTime=0,W.last=H,W.tail=w,W.tailMode=q,W.treeForkCount=A)}function RY(g,v,w){var H=v.pendingProps,q=H.revealOrder,A=H.tail,W=H.children,X=m0.current;if((H=(X&gH)!==0)?(X=X&J6|gH,v.flags|=128):X&=J6,Kg(m0,X,v),X=q==null?"null":q,q!=="forwards"&&q!=="unstable_legacy-backwards"&&q!=="together"&&q!=="independent"&&!wJ[X])if(wJ[X]=!0,q==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(q==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof q==="string")switch(q.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',q,q.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',q,q.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',q)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',q);if(X=A==null?"null":A,!Jq[X])if(A==null){if(q==="forwards"||q==="backwards"||q==="unstable_legacy-backwards")Jq[X]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else A!=="visible"&&A!=="collapsed"&&A!=="hidden"?(Jq[X]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',A)):q!=="forwards"&&q!=="backwards"&&q!=="unstable_legacy-backwards"&&(Jq[X]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',A));g:if((q==="forwards"||q==="backwards"||q==="unstable_legacy-backwards")&&W!==void 0&&W!==null&&W!==!1)if(a0(W)){for(X=0;X<W.length;X++)if(!LX(W[X],X))break g}else if(X=rg(W),typeof X==="function"){if(X=X.call(W))for(var J=X.next(),R=0;!J.done;J=X.next()){if(!LX(J.value,R))break g;R++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',q);if(M1(g,v,W,w),eg?(Lr(),W=V8):W=0,!H&&g!==null&&(g.flags&128)!==0)g:for(g=v.child;g!==null;){if(g.tag===13)g.memoizedState!==null&&QY(g,w,v);else if(g.tag===19)QY(g,w,v);else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===v)break g;for(;g.sibling===null;){if(g.return===null||g.return===v)break g;g=g.return}g.sibling.return=g.return,g=g.sibling}switch(q){case"forwards":w=v.child;for(q=null;w!==null;)g=w.alternate,g!==null&&w2(g)===null&&(q=w),w=w.sibling;w=q,w===null?(q=v.child,v.child=null):(q=w.sibling,w.sibling=null),yP(v,!1,q,w,A,W);break;case"backwards":case"unstable_legacy-backwards":w=null,q=v.child;for(v.child=null;q!==null;){if(g=q.alternate,g!==null&&w2(g)===null){v.child=q;break}g=q.sibling,q.sibling=w,w=q,q=g}yP(v,!0,w,null,A,W);break;case"together":yP(v,!1,null,null,void 0,W);break;default:v.memoizedState=null}return v.child}function _w(g,v,w){if(g!==null&&(v.dependencies=g.dependencies),Z1=-1,ar|=v.lanes,(w&v.childLanes)===0)if(g!==null){if(l4(g,v,w,!1),(w&v.childLanes)===0)return null}else return null;if(g!==null&&v.child!==g.child)throw Error("Resuming work not yet implemented.");if(v.child!==null){g=v.child,w=kw(g,g.pendingProps),v.child=w;for(w.return=v;g.sibling!==null;)g=g.sibling,w=w.sibling=kw(g,g.pendingProps),w.return=v;w.sibling=null}return v.child}function jP(g,v){if((g.lanes&v)!==0)return!0;return g=g.dependencies,g!==null&&fO(g)?!0:!1}function gU(g,v,w){switch(v.tag){case 3:V(v,v.stateNode.containerInfo),Br(v,i0,g.memoizedState.cache),x5();break;case 27:case 5:i(v);break;case 4:V(v,v.stateNode.containerInfo);break;case 10:Br(v,v.type,v.memoizedProps.value);break;case 12:(w&v.childLanes)!==0&&(v.flags|=4),v.flags|=2048;var H=v.stateNode;H.effectDuration=-0,H.passiveEffectDuration=-0;break;case 31:if(v.memoizedState!==null)return v.flags|=128,HP(v),null;break;case 13:if(H=v.memoizedState,H!==null){if(H.dehydrated!==null)return ur(v),v.flags|=128,null;if((w&v.child.childLanes)!==0)return JY(g,v,w);return ur(v),g=_w(g,v,w),g!==null?g.sibling:null}ur(v);break;case 19:var q=(g.flags&128)!==0;if(H=(w&v.childLanes)!==0,H||(l4(g,v,w,!1),H=(w&v.childLanes)!==0),q){if(H)return RY(g,v,w);v.flags|=128}if(q=v.memoizedState,q!==null&&(q.rendering=null,q.tail=null,q.lastEffect=null),Kg(m0,m0.current,v),H)break;else return null;case 22:return v.lanes=0,WY(g,v,w,v.pendingProps);case 24:Br(v,i0,g.memoizedState.cache)}return _w(g,v,w)}function iP(g,v,w){if(v._debugNeedsRemount&&g!==null){w=EA(v.type,v.key,v.pendingProps,v._debugOwner||null,v.mode,v.lanes),w._debugStack=v._debugStack,w._debugTask=v._debugTask;var H=v.return;if(H===null)throw Error("Cannot swap the root fiber.");if(g.alternate=null,v.alternate=null,w.index=v.index,w.sibling=v.sibling,w.return=v.return,w.ref=v.ref,w._debugInfo=v._debugInfo,v===H.child)H.child=w;else{var q=H.child;if(q===null)throw Error("Expected parent to have a child.");for(;q.sibling!==v;)if(q=q.sibling,q===null)throw Error("Expected to find the previous sibling.");q.sibling=w}return v=H.deletions,v===null?(H.deletions=[g],H.flags|=16):v.push(g),w.flags|=2,w}if(g!==null)if(g.memoizedProps!==v.pendingProps||v.type!==g.type)e0=!0;else{if(!jP(g,w)&&(v.flags&128)===0)return e0=!1,gU(g,v,w);e0=(g.flags&131072)!==0?!0:!1}else{if(e0=!1,H=eg)Lr(),H=(v.flags&1048576)!==0;H&&(H=v.index,Lr(),rX(v,V8,H))}switch(v.lanes=0,v.tag){case 16:g:if(H=v.pendingProps,g=Ir(v.elementType),v.type=g,typeof g==="function")VA(g)?(H=E5(g,H),v.tag=1,v.type=g=C5(g),v=GY(null,v,g,H,w)):(v.tag=0,kP(v,g),v.type=g=C5(g),v=DP(null,v,g,H,w));else{if(g!==void 0&&g!==null){if(q=g.$$typeof,q===I8){v.tag=11,v.type=g=mA(g),v=AY(null,v,g,H,w);break g}else if(q===m2){v.tag=14,v=PY(null,v,g,H,w);break g}}throw v="",g!==null&&typeof g==="object"&&g.$$typeof===rv&&(v=" Did you wrap a component in React.lazy() more than once?"),w=a(g)||g,Error("Element type is invalid. Received a promise that resolves to: "+w+". Lazy element type must resolve to a class or function."+v)}return v;case 0:return DP(g,v,v.type,v.pendingProps,w);case 1:return H=v.type,q=E5(H,v.pendingProps),GY(g,v,H,q,w);case 3:g:{if(V(v,v.stateNode.containerInfo),g===null)throw Error("Should have a current fiber. This is a bug in React.");H=v.pendingProps;var A=v.memoizedState;q=A.element,vP(g,v),q8(v,H,null,w);var W=v.memoizedState;if(H=W.cache,Br(v,i0,H),H!==A.cache&&cA(v,[i0],w,!0),O8(),H=W.element,A.isDehydrated)if(A={element:H,isDehydrated:!1,cache:W.cache},v.updateQueue.baseState=A,v.memoizedState=A,v.flags&256){v=hY(g,v,H,w);break g}else if(H!==q){q=d1(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),v),s6(q),v=hY(g,v,H,w);break g}else{switch(g=v.stateNode.containerInfo,g.nodeType){case 9:g=g.body;break;default:g=g.nodeName==="HTML"?g.ownerDocument.body:g}K0=wv(g.firstChild),G1=v,eg=!0,jr=null,Lw=!1,qv=null,Bv=!0,w=Ch(v,null,H,w);for(v.child=w;w;)w.flags=w.flags&-3|4096,w=w.sibling}else{if(x5(),H===q){v=_w(g,v,w);break g}M1(g,v,H,w)}v=v.child}return v;case 26:return Q2(g,v),g===null?(w=jG(v.type,null,v.pendingProps,null))?v.memoizedState=w:eg||(w=v.type,g=v.pendingProps,H=Vg(Dr.current),H=Z2(H).createElement(w),H[Y1]=v,H[B1]=g,X1(H,w,g),zg(H),v.stateNode=H):v.memoizedState=jG(v.type,g.memoizedProps,v.pendingProps,g.memoizedState),null;case 27:return i(v),g===null&&eg&&(H=Vg(Dr.current),q=vg(),H=v.stateNode=_G(v.type,v.pendingProps,H,q,!1),Lw||(q=uG(H,v.type,v.pendingProps,q),q!==null&&(l5(v,0).serverProps=q)),G1=v,Bv=!0,q=K0,xr(v.type)?(aW=q,K0=wv(H.firstChild)):K0=q),M1(g,v,v.pendingProps.children,w),Q2(g,v),g===null&&(v.flags|=4194304),v.child;case 5:return g===null&&eg&&(A=vg(),H=TA(v.type,A.ancestorInfo),q=K0,(W=!q)||(W=yU(q,v.type,v.pendingProps,Bv),W!==null?(v.stateNode=W,Lw||(A=uG(W,v.type,v.pendingProps,A),A!==null&&(l5(v,0).serverProps=A)),G1=v,K0=wv(W.firstChild),Bv=!1,A=!0):A=!1,W=!A),W&&(H&&jO(v,q),Fr(v))),i(v),q=v.type,A=v.pendingProps,W=g!==null?g.memoizedProps:null,H=A.children,hb(q,A)?H=null:W!==null&&hb(q,W)&&(v.flags|=32),v.memoizedState!==null&&(q=qP(g,v,nz,null,null,w),RH._currentValue=q),Q2(g,v),M1(g,v,H,w),v.child;case 6:return g===null&&eg&&(w=v.pendingProps,g=vg(),H=g.ancestorInfo.current,w=H!=null?lO(w,H.tag,g.ancestorInfo.implicitRootScope):!0,g=K0,(H=!g)||(H=jU(g,v.pendingProps,Bv),H!==null?(v.stateNode=H,G1=v,K0=null,H=!0):H=!1,H=!H),H&&(w&&jO(v,g),Fr(v))),null;case 13:return JY(g,v,w);case 4:return V(v,v.stateNode.containerInfo),H=v.pendingProps,g===null?v.child=s5(v,null,H,w):M1(g,v,H,w),v.child;case 11:return AY(g,v,v.type,v.pendingProps,w);case 7:return M1(g,v,v.pendingProps,w),v.child;case 8:return M1(g,v,v.pendingProps.children,w),v.child;case 12:return v.flags|=4,v.flags|=2048,H=v.stateNode,H.effectDuration=-0,H.passiveEffectDuration=-0,M1(g,v,v.pendingProps.children,w),v.child;case 10:return H=v.type,q=v.pendingProps,A=q.value,"value"in q||rJ||(rJ=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Br(v,H,A),M1(g,v,q.children,w),v.child;case 9:return q=v.type._context,H=v.pendingProps.children,typeof H!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),o5(v),q=U0(q),H=JW(H,q,void 0),v.flags|=1,M1(g,v,H,w),v.child;case 14:return PY(g,v,v.type,v.pendingProps,w);case 15:return bY(g,v,v.type,v.pendingProps,w);case 19:return RY(g,v,w);case 31:return sz(g,v,w);case 22:return WY(g,v,w,v.pendingProps);case 24:return o5(v),H=U0(i0),g===null?(q=aA(),q===null&&(q=G0,A=tA(),q.pooledCache=A,D5(A),A!==null&&(q.pooledCacheLanes|=w),q=A),v.memoizedState={parent:H,cache:q},gP(v),Br(v,i0,q)):((g.lanes&w)!==0&&(vP(g,v),q8(v,null,null,w),O8()),q=g.memoizedState,A=v.memoizedState,q.parent!==H?(q={parent:H,cache:H},v.memoizedState=q,v.lanes===0&&(v.memoizedState=v.updateQueue.baseState=q),Br(v,i0,H)):(H=A.cache,Br(v,i0,H),H!==q.cache&&cA(v,[i0],w,!0))),M1(g,v,v.pendingProps.children,w),v.child;case 29:throw v.pendingProps}throw Error("Unknown unit of work tag ("+v.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function yw(g){g.flags|=4}function fP(g,v,w,H,q){if(v=(g.mode&$F)!==Ng)v=!1;if(v){if(g.flags|=16777216,(q&335544128)===q)if(g.stateNode.complete)g.flags|=8192;else if(dY())g.flags|=8192;else throw a5=Wq,RW}else g.flags&=-16777217}function KY(g,v){if(v.type!=="stylesheet"||(v.state.loading&Tv)!==W4)g.flags&=-16777217;else if(g.flags|=16777216,!cG(v))if(dY())g.flags|=8192;else throw a5=Wq,RW}function K2(g,v){v!==null&&(g.flags|=4),g.flags&16384&&(v=g.tag!==22?N4():536870912,g.lanes|=v,H4|=v)}function M8(g,v){if(!eg)switch(g.tailMode){case"hidden":v=g.tail;for(var w=null;v!==null;)v.alternate!==null&&(w=v),v=v.sibling;w===null?g.tail=null:w.sibling=null;break;case"collapsed":w=g.tail;for(var H=null;w!==null;)w.alternate!==null&&(H=w),w=w.sibling;H===null?v||g.tail===null?g.tail=null:g.tail.sibling=null:H.sibling=null}}function J0(g){var v=g.alternate!==null&&g.alternate.child===g.child,w=0,H=0;if(v)if((g.mode&og)!==Ng){for(var{selfBaseDuration:q,child:A}=g;A!==null;)w|=A.lanes|A.childLanes,H|=A.subtreeFlags&65011712,H|=A.flags&65011712,q+=A.treeBaseDuration,A=A.sibling;g.treeBaseDuration=q}else for(q=g.child;q!==null;)w|=q.lanes|q.childLanes,H|=q.subtreeFlags&65011712,H|=q.flags&65011712,q.return=g,q=q.sibling;else if((g.mode&og)!==Ng){q=g.actualDuration,A=g.selfBaseDuration;for(var W=g.child;W!==null;)w|=W.lanes|W.childLanes,H|=W.subtreeFlags,H|=W.flags,q+=W.actualDuration,A+=W.treeBaseDuration,W=W.sibling;g.actualDuration=q,g.treeBaseDuration=A}else for(q=g.child;q!==null;)w|=q.lanes|q.childLanes,H|=q.subtreeFlags,H|=q.flags,q.return=g,q=q.sibling;return g.subtreeFlags|=H,g.childLanes=w,v}function vU(g,v,w){var H=v.pendingProps;switch(iA(v),v.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return J0(v),null;case 1:return J0(v),null;case 3:if(w=v.stateNode,H=null,g!==null&&(H=g.memoizedState.cache),v.memoizedState.cache!==H&&(v.flags|=2048),Vw(i0,v),d(v),w.pendingContext&&(w.context=w.pendingContext,w.pendingContext=null),g===null||g.child===null)S4(v)?(nA(),yw(v)):g===null||g.memoizedState.isDehydrated&&(v.flags&256)===0||(v.flags|=1024,fA());return J0(v),null;case 26:var{type:q,memoizedState:A}=v;return g===null?(yw(v),A!==null?(J0(v),KY(v,A)):(J0(v),fP(v,q,null,H,w))):A?A!==g.memoizedState?(yw(v),J0(v),KY(v,A)):(J0(v),v.flags&=-16777217):(g=g.memoizedProps,g!==H&&yw(v),J0(v),fP(v,q,g,H,w)),null;case 27:if(Wg(v),w=Vg(Dr.current),q=v.type,g!==null&&v.stateNode!=null)g.memoizedProps!==H&&yw(v);else{if(!H){if(v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return J0(v),null}g=vg(),S4(v)?AX(v,g):(g=_G(q,H,w,g,!0),v.stateNode=g,yw(v))}return J0(v),null;case 5:if(Wg(v),q=v.type,g!==null&&v.stateNode!=null)g.memoizedProps!==H&&yw(v);else{if(!H){if(v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return J0(v),null}var W=vg();if(S4(v))AX(v,W);else{switch(A=Vg(Dr.current),TA(q,W.ancestorInfo),W=W.context,A=Z2(A),W){case Z6:A=A.createElementNS(a4,q);break;case Dq:A=A.createElementNS(f2,q);break;default:switch(q){case"svg":A=A.createElementNS(a4,q);break;case"math":A=A.createElementNS(f2,q);break;case"script":A=A.createElement("div"),A.innerHTML="<script></script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof H.is==="string"?A.createElement("select",{is:H.is}):A.createElement("select"),H.multiple?A.multiple=!0:H.size&&(A.size=H.size);break;default:A=typeof H.is==="string"?A.createElement(q,{is:H.is}):A.createElement(q),q.indexOf("-")===-1&&(q!==q.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",q),Object.prototype.toString.call(A)!=="[object HTMLUnknownElement]"||Dv.call(NJ,q)||(NJ[q]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",q)))}}A[Y1]=v,A[B1]=H;g:for(W=v.child;W!==null;){if(W.tag===5||W.tag===6)A.appendChild(W.stateNode);else if(W.tag!==4&&W.tag!==27&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===v)break g;for(;W.sibling===null;){if(W.return===null||W.return===v)break g;W=W.return}W.sibling.return=W.return,W=W.sibling}v.stateNode=A;g:switch(X1(A,q,H),q){case"button":case"input":case"select":case"textarea":H=!!H.autoFocus;break g;case"img":H=!0;break g;default:H=!1}H&&yw(v)}}return J0(v),fP(v,v.type,g===null?null:g.memoizedProps,v.pendingProps,w),null;case 6:if(g&&v.stateNode!=null)g.memoizedProps!==H&&yw(v);else{if(typeof H!=="string"&&v.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(g=Vg(Dr.current),w=vg(),S4(v)){if(g=v.stateNode,w=v.memoizedProps,q=!Lw,H=null,A=G1,A!==null)switch(A.tag){case 3:q&&(q=VG(g,w,H),q!==null&&(l5(v,0).serverProps=q));break;case 27:case 5:H=A.memoizedProps,q&&(q=VG(g,w,H),q!==null&&(l5(v,0).serverProps=q))}g[Y1]=v,g=g.nodeValue===w||H!==null&&H.suppressHydrationWarning===!0||FG(g.nodeValue,w)?!0:!1,g||Fr(v,!0)}else q=w.ancestorInfo.current,q!=null&&lO(H,q.tag,w.ancestorInfo.implicitRootScope),g=Z2(g).createTextNode(H),g[Y1]=v,v.stateNode=g}return J0(v),null;case 31:if(w=v.memoizedState,g===null||g.memoizedState!==null){if(H=S4(v),w!==null){if(g===null){if(!H)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(g=v.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");g[Y1]=v,J0(v),(v.mode&og)!==Ng&&w!==null&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration))}else nA(),x5(),(v.flags&128)===0&&(w=v.memoizedState=null),v.flags|=4,J0(v),(v.mode&og)!==Ng&&w!==null&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration));g=!1}else w=fA(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=w),g=!0;if(!g){if(v.flags&256)return gv(v),v;return gv(v),null}if((v.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return J0(v),null;case 13:if(H=v.memoizedState,g===null||g.memoizedState!==null&&g.memoizedState.dehydrated!==null){if(q=H,A=S4(v),q!==null&&q.dehydrated!==null){if(g===null){if(!A)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(A=v.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");A[Y1]=v,J0(v),(v.mode&og)!==Ng&&q!==null&&(q=v.child,q!==null&&(v.treeBaseDuration-=q.treeBaseDuration))}else nA(),x5(),(v.flags&128)===0&&(q=v.memoizedState=null),v.flags|=4,J0(v),(v.mode&og)!==Ng&&q!==null&&(q=v.child,q!==null&&(v.treeBaseDuration-=q.treeBaseDuration));q=!1}else q=fA(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=q),q=!0;if(!q){if(v.flags&256)return gv(v),v;return gv(v),null}}if(gv(v),(v.flags&128)!==0)return v.lanes=w,(v.mode&og)!==Ng&&w8(v),v;return w=H!==null,g=g!==null&&g.memoizedState!==null,w&&(H=v.child,q=null,H.alternate!==null&&H.alternate.memoizedState!==null&&H.alternate.memoizedState.cachePool!==null&&(q=H.alternate.memoizedState.cachePool.pool),A=null,H.memoizedState!==null&&H.memoizedState.cachePool!==null&&(A=H.memoizedState.cachePool.pool),A!==q&&(H.flags|=2048)),w!==g&&w&&(v.child.flags|=8192),K2(v,v.updateQueue),J0(v),(v.mode&og)!==Ng&&w&&(g=v.child,g!==null&&(v.treeBaseDuration-=g.treeBaseDuration)),null;case 4:return d(v),g===null&&Pb(v.stateNode.containerInfo),J0(v),null;case 10:return Vw(v.type,v),J0(v),null;case 19:if(Qg(m0,v),H=v.memoizedState,H===null)return J0(v),null;if(q=(v.flags&128)!==0,A=H.rendering,A===null)if(q)M8(H,!1);else{if(I0!==rr||g!==null&&(g.flags&128)!==0)for(g=v.child;g!==null;){if(A=w2(g),A!==null){v.flags|=128,M8(H,!1),g=A.updateQueue,v.updateQueue=g,K2(v,g),v.subtreeFlags=0,g=w;for(w=v.child;w!==null;)vX(w,g),w=w.sibling;return Kg(m0,m0.current&J6|gH,v),eg&&mw(v,H.treeForkCount),v.child}g=g.sibling}H.tail!==null&&r1()>Lq&&(v.flags|=128,q=!0,M8(H,!1),v.lanes=4194304)}else{if(!q)if(g=w2(A),g!==null){if(v.flags|=128,q=!0,g=g.updateQueue,v.updateQueue=g,K2(v,g),M8(H,!0),H.tail===null&&H.tailMode==="hidden"&&!A.alternate&&!eg)return J0(v),null}else 2*r1()-H.renderingStartTime>Lq&&w!==536870912&&(v.flags|=128,q=!0,M8(H,!1),v.lanes=4194304);H.isBackwards?(A.sibling=v.child,v.child=A):(g=H.last,g!==null?g.sibling=A:v.child=A,H.last=A)}if(H.tail!==null)return g=H.tail,H.rendering=g,H.tail=g.sibling,H.renderingStartTime=r1(),g.sibling=null,w=m0.current,w=q?w&J6|gH:w&J6,Kg(m0,w,v),eg&&mw(v,H.treeForkCount),g;return J0(v),null;case 22:case 23:return gv(v),rP(v),H=v.memoizedState!==null,g!==null?g.memoizedState!==null!==H&&(v.flags|=8192):H&&(v.flags|=8192),H?(w&536870912)!==0&&(v.flags&128)===0&&(J0(v),v.subtreeFlags&6&&(v.flags|=8192)):J0(v),w=v.updateQueue,w!==null&&K2(v,w.retryQueue),w=null,g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(w=g.memoizedState.cachePool.pool),H=null,v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(H=v.memoizedState.cachePool.pool),H!==w&&(v.flags|=2048),g!==null&&Qg(p5,v),null;case 24:return w=null,g!==null&&(w=g.memoizedState.cache),v.memoizedState.cache!==w&&(v.flags|=2048),Vw(i0,v),J0(v),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+v.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function wU(g,v){switch(iA(v),v.tag){case 1:return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&og)!==Ng&&w8(v),v):null;case 3:return Vw(i0,v),d(v),g=v.flags,(g&65536)!==0&&(g&128)===0?(v.flags=g&-65537|128,v):null;case 26:case 27:case 5:return Wg(v),null;case 31:if(v.memoizedState!==null){if(gv(v),v.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");x5()}return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&og)!==Ng&&w8(v),v):null;case 13:if(gv(v),g=v.memoizedState,g!==null&&g.dehydrated!==null){if(v.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");x5()}return g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&og)!==Ng&&w8(v),v):null;case 19:return Qg(m0,v),null;case 4:return d(v),null;case 10:return Vw(v.type,v),null;case 22:case 23:return gv(v),rP(v),g!==null&&Qg(p5,v),g=v.flags,g&65536?(v.flags=g&-65537|128,(v.mode&og)!==Ng&&w8(v),v):null;case 24:return Vw(i0,v),null;case 25:return null;default:return null}}function $Y(g,v){switch(iA(v),v.tag){case 3:Vw(i0,v),d(v);break;case 26:case 27:case 5:Wg(v);break;case 4:d(v);break;case 31:v.memoizedState!==null&&gv(v);break;case 13:gv(v);break;case 19:Qg(m0,v);break;case 10:Vw(v.type,v);break;case 22:case 23:gv(v),rP(v),g!==null&&Qg(p5,v);break;case 24:Vw(i0,v)}}function Ww(g){return(g.mode&og)!==Ng}function zY(g,v){Ww(g)?(bw(),X8(v,g),Pw()):X8(v,g)}function nP(g,v,w){Ww(g)?(bw(),m4(w,g,v),Pw()):m4(w,g,v)}function X8(g,v){try{var w=v.updateQueue,H=w!==null?w.lastEffect:null;if(H!==null){var q=H.next;w=q;do{if((w.tag&g)===g&&(H=void 0,(g&u1)!==Xq&&(B6=!0),H=Pg(v,BF,w),(g&u1)!==Xq&&(B6=!1),H!==void 0&&typeof H!=="function")){var A=void 0;A=(w.tag&Pv)!==0?"useLayoutEffect":(w.tag&u1)!==0?"useInsertionEffect":"useEffect";var W=void 0;W=H===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof H.then==="function"?`

It looks like you wrote `+A+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+A+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+H,Pg(v,function(X,J){console.error("%s must not return anything besides a function, which is used for clean-up.%s",X,J)},A,W)}w=w.next}while(w!==q)}}catch(X){r0(v,v.return,X)}}function m4(g,v,w){try{var H=v.updateQueue,q=H!==null?H.lastEffect:null;if(q!==null){var A=q.next;H=A;do{if((H.tag&g)===g){var W=H.inst,X=W.destroy;X!==void 0&&(W.destroy=void 0,(g&u1)!==Xq&&(B6=!0),q=v,Pg(q,IF,q,w,X),(g&u1)!==Xq&&(B6=!1))}H=H.next}while(H!==A)}}catch(J){r0(v,v.return,J)}}function UY(g,v){Ww(g)?(bw(),X8(v,g),Pw()):X8(v,g)}function eP(g,v,w){Ww(g)?(bw(),m4(w,g,v),Pw()):m4(w,g,v)}function LY(g){var v=g.updateQueue;if(v!==null){var w=g.stateNode;g.type.defaultProps||"ref"in g.memoizedProps||$6||(w.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",k(g)||"instance"),w.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",k(g)||"instance"));try{Pg(g,BX,v,w)}catch(H){r0(g,g.return,H)}}}function rU(g,v,w){return g.getSnapshotBeforeUpdate(v,w)}function HU(g,v){var{memoizedProps:w,memoizedState:H}=v;v=g.stateNode,g.type.defaultProps||"ref"in g.memoizedProps||$6||(v.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",k(g)||"instance"),v.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",k(g)||"instance"));try{var q=E5(g.type,w),A=Pg(g,rU,v,q,H);w=HJ,A!==void 0||w.has(g.type)||(w.add(g.type),Pg(g,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",k(g))})),v.__reactInternalSnapshotBeforeUpdate=A}catch(W){r0(g,g.return,W)}}function FY(g,v,w){w.props=E5(g.type,g.memoizedProps),w.state=g.memoizedState,Ww(g)?(bw(),Pg(g,Lh,g,v,w),Pw()):Pg(g,Lh,g,v,w)}function OU(g){var v=g.ref;if(v!==null){switch(g.tag){case 26:case 27:case 5:var w=g.stateNode;break;case 30:w=g.stateNode;break;default:w=g.stateNode}if(typeof v==="function")if(Ww(g))try{bw(),g.refCleanup=v(w)}finally{Pw()}else g.refCleanup=v(w);else typeof v==="string"?console.error("String refs are no longer supported."):v.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",k(g)),v.current=w}}function Y8(g,v){try{Pg(g,OU,g)}catch(w){r0(g,v,w)}}function Mw(g,v){var{ref:w,refCleanup:H}=g;if(w!==null)if(typeof H==="function")try{if(Ww(g))try{bw(),Pg(g,H)}finally{Pw(g)}else Pg(g,H)}catch(q){r0(g,v,q)}finally{g.refCleanup=null,g=g.alternate,g!=null&&(g.refCleanup=null)}else if(typeof w==="function")try{if(Ww(g))try{bw(),Pg(g,w,null)}finally{Pw(g)}else Pg(g,w,null)}catch(q){r0(g,v,q)}else w.current=null}function BY(g,v,w,H){var q=g.memoizedProps,A=q.id,W=q.onCommit;q=q.onRender,v=v===null?"mount":"update",qq&&(v="nested-update"),typeof q==="function"&&q(A,v,g.actualDuration,g.treeBaseDuration,g.actualStartTime,w),typeof W==="function"&&W(A,v,H,w)}function qU(g,v,w,H){var q=g.memoizedProps;g=q.id,q=q.onPostCommit,v=v===null?"mount":"update",qq&&(v="nested-update"),typeof q==="function"&&q(g,v,H,w)}function IY(g){var{type:v,memoizedProps:w,stateNode:H}=g;try{Pg(g,TU,H,v,w,g)}catch(q){r0(g,g.return,q)}}function cP(g,v,w){try{Pg(g,SU,g.stateNode,g.type,w,v,g)}catch(H){r0(g,g.return,H)}}function NY(g){return g.tag===5||g.tag===3||g.tag===26||g.tag===27&&xr(g.type)||g.tag===4}function tP(g){g:for(;;){for(;g.sibling===null;){if(g.return===null||NY(g.return))return null;g=g.return}g.sibling.return=g.return;for(g=g.sibling;g.tag!==5&&g.tag!==6&&g.tag!==18;){if(g.tag===27&&xr(g.type))continue g;if(g.flags&2)continue g;if(g.child===null||g.tag===4)continue g;else g.child.return=g,g=g.child}if(!(g.flags&2))return g.stateNode}}function pP(g,v,w){var H=g.tag;if(H===5||H===6)g=g.stateNode,v?(xG(w),(w.nodeType===9?w.body:w.nodeName==="HTML"?w.ownerDocument.body:w).insertBefore(g,v)):(xG(w),v=w.nodeType===9?w.body:w.nodeName==="HTML"?w.ownerDocument.body:w,v.appendChild(g),w=w._reactRootContainer,w!==null&&w!==void 0||v.onclick!==null||(v.onclick=Dw));else if(H!==4&&(H===27&&xr(g.type)&&(w=g.stateNode,v=null),g=g.child,g!==null))for(pP(g,v,w),g=g.sibling;g!==null;)pP(g,v,w),g=g.sibling}function $2(g,v,w){var H=g.tag;if(H===5||H===6)g=g.stateNode,v?w.insertBefore(g,v):w.appendChild(g);else if(H!==4&&(H===27&&xr(g.type)&&(w=g.stateNode),g=g.child,g!==null))for($2(g,v,w),g=g.sibling;g!==null;)$2(g,v,w),g=g.sibling}function AU(g){for(var v,w=g.return;w!==null;){if(NY(w)){v=w;break}w=w.return}if(v==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(v.tag){case 27:v=v.stateNode,w=tP(g),$2(g,w,v);break;case 5:w=v.stateNode,v.flags&32&&(lG(w),v.flags&=-33),v=tP(g),$2(g,v,w);break;case 3:case 4:v=v.stateNode.containerInfo,w=tP(g),pP(g,w,v);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function ZY(g){var{stateNode:v,memoizedProps:w}=g;try{Pg(g,cU,g.type,w,v,g)}catch(H){r0(g,g.return,H)}}function uY(g,v){return v.tag===31?(v=v.memoizedState,g.memoizedState!==null&&v===null):v.tag===13?(g=g.memoizedState,v=v.memoizedState,g!==null&&g.dehydrated!==null&&(v===null||v.dehydrated===null)):v.tag===3?g.memoizedState.isDehydrated&&(v.flags&256)===0:!1}function PU(g,v){if(g=g.containerInfo,tW=Eq,g=f9(g),lA(g)){if("selectionStart"in g)var w={start:g.selectionStart,end:g.selectionEnd};else g:{w=(w=g.ownerDocument)&&w.defaultView||window;var H=w.getSelection&&w.getSelection();if(H&&H.rangeCount!==0){w=H.anchorNode;var{anchorOffset:q,focusNode:A}=H;H=H.focusOffset;try{w.nodeType,A.nodeType}catch(gg){w=null;break g}var W=0,X=-1,J=-1,R=0,u=0,T=g,B=null;v:for(;;){for(var x;;){if(T!==w||q!==0&&T.nodeType!==3||(X=W+q),T!==A||H!==0&&T.nodeType!==3||(J=W+H),T.nodeType===3&&(W+=T.nodeValue.length),(x=T.firstChild)===null)break;B=T,T=x}for(;;){if(T===g)break v;if(B===w&&++R===q&&(X=W),B===A&&++u===H&&(J=W),(x=T.nextSibling)!==null)break;T=B,B=T.parentNode}T=x}w=X===-1||J===-1?null:{start:X,end:J}}else w=null}w=w||{start:0,end:0}}else w=null;pW={focusedElem:g,selectionRange:w},Eq=!1;for(O1=v;O1!==null;)if(v=O1,g=v.child,(v.subtreeFlags&1028)!==0&&g!==null)g.return=v,O1=g;else for(;O1!==null;){switch(g=v=O1,w=g.alternate,q=g.flags,g.tag){case 0:if((q&4)!==0&&(g=g.updateQueue,g=g!==null?g.events:null,g!==null))for(w=0;w<g.length;w++)q=g[w],q.ref.impl=q.nextImpl;break;case 11:case 15:break;case 1:(q&1024)!==0&&w!==null&&HU(g,w);break;case 3:if((q&1024)!==0){if(g=g.stateNode.containerInfo,w=g.nodeType,w===9)Jb(g);else if(w===1)switch(g.nodeName){case"HEAD":case"HTML":case"BODY":Jb(g);break;default:g.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((q&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(g=v.sibling,g!==null){g.return=v.return,O1=g;break}O1=v.return}}function TY(g,v,w){var H=a1(),q=Hw(),A=qw(),W=Aw(),X=w.flags;switch(w.tag){case 0:case 11:case 15:Xw(g,w),X&4&&zY(w,Pv|Zv);break;case 1:if(Xw(g,w),X&4)if(g=w.stateNode,v===null)w.type.defaultProps||"ref"in w.memoizedProps||$6||(g.props!==w.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",k(w)||"instance"),g.state!==w.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",k(w)||"instance")),Ww(w)?(bw(),Pg(w,QW,w,g),Pw()):Pg(w,QW,w,g);else{var J=E5(w.type,v.memoizedProps);v=v.memoizedState,w.type.defaultProps||"ref"in w.memoizedProps||$6||(g.props!==w.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",k(w)||"instance"),g.state!==w.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",k(w)||"instance")),Ww(w)?(bw(),Pg(w,$h,w,g,J,v,g.__reactInternalSnapshotBeforeUpdate),Pw()):Pg(w,$h,w,g,J,v,g.__reactInternalSnapshotBeforeUpdate)}X&64&&LY(w),X&512&&Y8(w,w.return);break;case 3:if(v=Ew(),Xw(g,w),X&64&&(X=w.updateQueue,X!==null)){if(J=null,w.child!==null)switch(w.child.tag){case 27:case 5:J=w.child.stateNode;break;case 1:J=w.child.stateNode}try{Pg(w,BX,X,J)}catch(u){r0(w,w.return,u)}}g.effectDuration+=eO(v);break;case 27:v===null&&X&4&&ZY(w);case 26:case 5:if(Xw(g,w),v===null){if(X&4)IY(w);else if(X&64){g=w.type,v=w.memoizedProps,J=w.stateNode;try{Pg(w,CU,J,g,v,w)}catch(u){r0(w,w.return,u)}}}X&512&&Y8(w,w.return);break;case 12:if(X&4){X=Ew(),Xw(g,w),g=w.stateNode,g.effectDuration+=v8(X);try{Pg(w,BY,w,v,ir,g.effectDuration)}catch(u){r0(w,w.return,u)}}else Xw(g,w);break;case 31:Xw(g,w),X&4&&lY(g,w);break;case 13:Xw(g,w),X&4&&xY(g,w),X&64&&(g=w.memoizedState,g!==null&&(g=g.dehydrated,g!==null&&(X=QU.bind(null,w),iU(g,X))));break;case 22:if(X=w.memoizedState!==null||wr,!X){v=v!==null&&v.memoizedState!==null||c0,J=wr;var R=c0;wr=X,(c0=v)&&!R?(Yw(g,w,(w.subtreeFlags&8772)!==0),(w.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&kO(w,Ug,Bg)):Xw(g,w),wr=J,c0=R}break;case 30:break;default:Xw(g,w)}(w.mode&og)!==Ng&&0<=Ug&&0<=Bg&&((u0||0.05<B0)&&ww(w,Ug,Bg,B0,L0),w.alternate===null&&w.return!==null&&w.return.alternate!==null&&0.05<Bg-Ug&&(uY(w.return.alternate,w.return)||vw(w,Ug,Bg,"Mount"))),s1(H),Ow(q),L0=A,u0=W}function CY(g){var v=g.alternate;v!==null&&(g.alternate=null,CY(v)),g.child=null,g.deletions=null,g.sibling=null,g.tag===5&&(v=g.stateNode,v!==null&&Og(v)),g.stateNode=null,g._debugOwner=null,g.return=null,g.dependencies=null,g.memoizedProps=null,g.memoizedState=null,g.pendingProps=null,g.stateNode=null,g.updateQueue=null}function jw(g,v,w){for(w=w.child;w!==null;)SY(g,v,w),w=w.sibling}function SY(g,v,w){if($1&&typeof $1.onCommitFiberUnmount==="function")try{$1.onCommitFiberUnmount(p4,w)}catch(R){Kw||(Kw=!0,console.error("React instrumentation encountered an error: %o",R))}var H=a1(),q=Hw(),A=qw(),W=Aw();switch(w.tag){case 26:c0||Mw(w,v),jw(g,v,w),w.memoizedState?w.memoizedState.count--:w.stateNode&&(g=w.stateNode,g.parentNode.removeChild(g));break;case 27:c0||Mw(w,v);var X=t0,J=j1;xr(w.type)&&(t0=w.stateNode,j1=!1),jw(g,v,w),Pg(w,U8,w.stateNode),t0=X,j1=J;break;case 5:c0||Mw(w,v);case 6:if(X=t0,J=j1,t0=null,jw(g,v,w),t0=X,j1=J,t0!==null)if(j1)try{Pg(w,oU,t0,w.stateNode)}catch(R){r0(w,v,R)}else try{Pg(w,xU,t0,w.stateNode)}catch(R){r0(w,v,R)}break;case 18:t0!==null&&(j1?(g=t0,oG(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g,w.stateNode),n4(g)):oG(t0,w.stateNode));break;case 4:X=t0,J=j1,t0=w.stateNode.containerInfo,j1=!0,jw(g,v,w),t0=X,j1=J;break;case 0:case 11:case 14:case 15:m4(u1,w,v),c0||nP(w,v,Pv),jw(g,v,w);break;case 1:c0||(Mw(w,v),X=w.stateNode,typeof X.componentWillUnmount==="function"&&FY(w,v,X)),jw(g,v,w);break;case 21:jw(g,v,w);break;case 22:c0=(X=c0)||w.memoizedState!==null,jw(g,v,w),c0=X;break;default:jw(g,v,w)}(w.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(w,Ug,Bg,B0,L0),s1(H),Ow(q),L0=A,u0=W}function lY(g,v){if(v.memoizedState===null&&(g=v.alternate,g!==null&&(g=g.memoizedState,g!==null))){g=g.dehydrated;try{Pg(v,nU,g)}catch(w){r0(v,v.return,w)}}}function xY(g,v){if(v.memoizedState===null&&(g=v.alternate,g!==null&&(g=g.memoizedState,g!==null&&(g=g.dehydrated,g!==null))))try{Pg(v,eU,g)}catch(w){r0(v,v.return,w)}}function bU(g){switch(g.tag){case 31:case 13:case 19:var v=g.stateNode;return v===null&&(v=g.stateNode=new OJ),v;case 22:return g=g.stateNode,v=g._retryCache,v===null&&(v=g._retryCache=new OJ),v;default:throw Error("Unexpected Suspense handler tag ("+g.tag+"). This is a bug in React.")}}function z2(g,v){var w=bU(g);v.forEach(function(H){if(!w.has(H)){if(w.add(H),$w)if(z6!==null&&U6!==null)Q8(U6,z6);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var q=RU.bind(null,g,H);H.then(q,q)}})}function _1(g,v){var w=v.deletions;if(w!==null)for(var H=0;H<w.length;H++){var q=g,A=v,W=w[H],X=a1(),J=A;g:for(;J!==null;){switch(J.tag){case 27:if(xr(J.type)){t0=J.stateNode,j1=!1;break g}break;case 5:t0=J.stateNode,j1=!1;break g;case 3:case 4:t0=J.stateNode.containerInfo,j1=!0;break g}J=J.return}if(t0===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");SY(q,A,W),t0=null,j1=!1,(W.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&vw(W,Ug,Bg,"Unmount"),s1(X),q=W,A=q.alternate,A!==null&&(A.return=null),q.return=null}if(v.subtreeFlags&13886)for(v=v.child;v!==null;)oY(v,g),v=v.sibling}function oY(g,v){var w=a1(),H=Hw(),q=qw(),A=Aw(),W=g.alternate,X=g.flags;switch(g.tag){case 0:case 11:case 14:case 15:_1(v,g),y1(g),X&4&&(m4(u1|Zv,g,g.return),X8(u1|Zv,g),nP(g,g.return,Pv|Zv));break;case 1:if(_1(v,g),y1(g),X&512&&(c0||W===null||Mw(W,W.return)),X&64&&wr&&(X=g.updateQueue,X!==null&&(W=X.callbacks,W!==null))){var J=X.shared.hiddenCallbacks;X.shared.hiddenCallbacks=J===null?W:J.concat(W)}break;case 26:if(J=_v,_1(v,g),y1(g),X&512&&(c0||W===null||Mw(W,W.return)),X&4){var R=W!==null?W.memoizedState:null;if(X=g.memoizedState,W===null)if(X===null)if(g.stateNode===null){g:{X=g.type,W=g.memoizedProps,J=J.ownerDocument||J;v:switch(X){case"title":if(R=J.getElementsByTagName("title")[0],!R||R[u8]||R[Y1]||R.namespaceURI===a4||R.hasAttribute("itemprop"))R=J.createElement(X),J.head.insertBefore(R,J.querySelector("head > title"));X1(R,X,W),R[Y1]=g,zg(R),X=R;break g;case"link":var u=nG("link","href",J).get(X+(W.href||""));if(u){for(var T=0;T<u.length;T++)if(R=u[T],R.getAttribute("href")===(W.href==null||W.href===""?null:W.href)&&R.getAttribute("rel")===(W.rel==null?null:W.rel)&&R.getAttribute("title")===(W.title==null?null:W.title)&&R.getAttribute("crossorigin")===(W.crossOrigin==null?null:W.crossOrigin)){u.splice(T,1);break v}}R=J.createElement(X),X1(R,X,W),J.head.appendChild(R);break;case"meta":if(u=nG("meta","content",J).get(X+(W.content||""))){for(T=0;T<u.length;T++)if(R=u[T],b0(W.content,"content"),R.getAttribute("content")===(W.content==null?null:""+W.content)&&R.getAttribute("name")===(W.name==null?null:W.name)&&R.getAttribute("property")===(W.property==null?null:W.property)&&R.getAttribute("http-equiv")===(W.httpEquiv==null?null:W.httpEquiv)&&R.getAttribute("charset")===(W.charSet==null?null:W.charSet)){u.splice(T,1);break v}}R=J.createElement(X),X1(R,X,W),J.head.appendChild(R);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+X+'". This is a bug in React.')}R[Y1]=g,zg(R),X=R}g.stateNode=X}else eG(J,g.type,g.stateNode);else g.stateNode=fG(J,X,g.memoizedProps);else R!==X?(R===null?W.stateNode!==null&&(W=W.stateNode,W.parentNode.removeChild(W)):R.count--,X===null?eG(J,g.type,g.stateNode):fG(J,X,g.memoizedProps)):X===null&&g.stateNode!==null&&cP(g,g.memoizedProps,W.memoizedProps)}break;case 27:_1(v,g),y1(g),X&512&&(c0||W===null||Mw(W,W.return)),W!==null&&X&4&&cP(g,g.memoizedProps,W.memoizedProps);break;case 5:if(_1(v,g),y1(g),X&512&&(c0||W===null||Mw(W,W.return)),g.flags&32){J=g.stateNode;try{Pg(g,lG,J)}catch(bg){r0(g,g.return,bg)}}X&4&&g.stateNode!=null&&(J=g.memoizedProps,cP(g,J,W!==null?W.memoizedProps:J)),X&1024&&(TW=!0,g.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(_1(v,g),y1(g),X&4){if(g.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");X=g.memoizedProps,W=W!==null?W.memoizedProps:X,J=g.stateNode;try{Pg(g,lU,J,W,X)}catch(bg){r0(g,g.return,bg)}}break;case 3:if(J=Ew(),kq=null,R=_v,_v=u2(v.containerInfo),_1(v,g),_v=R,y1(g),X&4&&W!==null&&W.memoizedState.isDehydrated)try{Pg(g,fU,v.containerInfo)}catch(bg){r0(g,g.return,bg)}TW&&(TW=!1,DY(g)),v.effectDuration+=eO(J);break;case 4:X=_v,_v=u2(g.stateNode.containerInfo),_1(v,g),y1(g),_v=X;break;case 12:X=Ew(),_1(v,g),y1(g),g.stateNode.effectDuration+=v8(X);break;case 31:_1(v,g),y1(g),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,z2(g,X)));break;case 13:_1(v,g),y1(g),g.child.flags&8192&&g.memoizedState!==null!==(W!==null&&W.memoizedState!==null)&&(Uq=r1()),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,z2(g,X)));break;case 22:J=g.memoizedState!==null;var B=W!==null&&W.memoizedState!==null,x=wr,gg=c0;if(wr=x||J,c0=gg||B,_1(v,g),c0=gg,wr=x,B&&!J&&!x&&!gg&&(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&kO(g,Ug,Bg),y1(g),X&8192)g:for(v=g.stateNode,v._visibility=J?v._visibility&~m8:v._visibility|m8,!J||W===null||B||wr||c0||(_5(g),(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&vw(g,Ug,Bg,"Disconnect")),W=null,v=g;;){if(v.tag===5||v.tag===26){if(W===null){B=W=v;try{R=B.stateNode,J?Pg(B,kU,R):Pg(B,EU,B.stateNode,B.memoizedProps)}catch(bg){r0(B,B.return,bg)}}}else if(v.tag===6){if(W===null){B=v;try{u=B.stateNode,J?Pg(B,mU,u):Pg(B,_U,u,B.memoizedProps)}catch(bg){r0(B,B.return,bg)}}}else if(v.tag===18){if(W===null){B=v;try{T=B.stateNode,J?Pg(B,DU,T):Pg(B,VU,B.stateNode)}catch(bg){r0(B,B.return,bg)}}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===g)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===g)break g;for(;v.sibling===null;){if(v.return===null||v.return===g)break g;W===v&&(W=null),v=v.return}W===v&&(W=null),v.sibling.return=v.return,v=v.sibling}X&4&&(X=g.updateQueue,X!==null&&(W=X.retryQueue,W!==null&&(X.retryQueue=null,z2(g,W))));break;case 19:_1(v,g),y1(g),X&4&&(X=g.updateQueue,X!==null&&(g.updateQueue=null,z2(g,X)));break;case 30:break;case 21:break;default:_1(v,g),y1(g)}(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&((u0||0.05<B0)&&ww(g,Ug,Bg,B0,L0),g.alternate===null&&g.return!==null&&g.return.alternate!==null&&0.05<Bg-Ug&&(uY(g.return.alternate,g.return)||vw(g,Ug,Bg,"Mount"))),s1(w),Ow(H),L0=q,u0=A}function y1(g){var v=g.flags;if(v&2){try{Pg(g,AU,g)}catch(w){r0(g,g.return,w)}g.flags&=-3}v&4096&&(g.flags&=-4097)}function DY(g){if(g.subtreeFlags&1024)for(g=g.child;g!==null;){var v=g;DY(v),v.tag===5&&v.flags&1024&&v.stateNode.reset(),g=g.sibling}}function Xw(g,v){if(v.subtreeFlags&8772)for(v=v.child;v!==null;)TY(g,v.alternate,v),v=v.sibling}function kY(g){var v=a1(),w=Hw(),H=qw(),q=Aw();switch(g.tag){case 0:case 11:case 14:case 15:nP(g,g.return,Pv),_5(g);break;case 1:Mw(g,g.return);var A=g.stateNode;typeof A.componentWillUnmount==="function"&&FY(g,g.return,A),_5(g);break;case 27:Pg(g,U8,g.stateNode);case 26:case 5:Mw(g,g.return),_5(g);break;case 22:g.memoizedState===null&&_5(g);break;case 30:_5(g);break;default:_5(g)}(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(g,Ug,Bg,B0,L0),s1(v),Ow(w),L0=H,u0=q}function _5(g){for(g=g.child;g!==null;)kY(g),g=g.sibling}function mY(g,v,w,H){var q=a1(),A=Hw(),W=qw(),X=Aw(),J=w.flags;switch(w.tag){case 0:case 11:case 15:Yw(g,w,H),zY(w,Pv);break;case 1:if(Yw(g,w,H),v=w.stateNode,typeof v.componentDidMount==="function"&&Pg(w,QW,w,v),v=w.updateQueue,v!==null){g=w.stateNode;try{Pg(w,fz,v,g)}catch(R){r0(w,w.return,R)}}H&&J&64&&LY(w),Y8(w,w.return);break;case 27:ZY(w);case 26:case 5:Yw(g,w,H),H&&v===null&&J&4&&IY(w),Y8(w,w.return);break;case 12:if(H&&J&4){J=Ew(),Yw(g,w,H),H=w.stateNode,H.effectDuration+=v8(J);try{Pg(w,BY,w,v,ir,H.effectDuration)}catch(R){r0(w,w.return,R)}}else Yw(g,w,H);break;case 31:Yw(g,w,H),H&&J&4&&lY(g,w);break;case 13:Yw(g,w,H),H&&J&4&&xY(g,w);break;case 22:w.memoizedState===null&&Yw(g,w,H),Y8(w,w.return);break;case 30:break;default:Yw(g,w,H)}(w.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(w,Ug,Bg,B0,L0),s1(q),Ow(A),L0=W,u0=X}function Yw(g,v,w){w=w&&(v.subtreeFlags&8772)!==0;for(v=v.child;v!==null;)mY(g,v.alternate,v,w),v=v.sibling}function dP(g,v){var w=null;g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(w=g.memoizedState.cachePool.pool),g=null,v.memoizedState!==null&&v.memoizedState.cachePool!==null&&(g=v.memoizedState.cachePool.pool),g!==w&&(g!=null&&D5(g),w!=null&&g8(w))}function aP(g,v){g=null,v.alternate!==null&&(g=v.alternate.memoizedState.cache),v=v.memoizedState.cache,v!==g&&(D5(v),g!=null&&g8(g))}function ov(g,v,w,H,q){if(v.subtreeFlags&10256||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child))for(v=v.child;v!==null;){var A=v.sibling;VY(g,v,w,H,A!==null?A.actualStartTime:q),v=A}}function VY(g,v,w,H,q){var A=a1(),W=Hw(),X=qw(),J=Aw(),R=Er,u=v.flags;switch(v.tag){case 0:case 11:case 15:(v.mode&og)!==Ng&&0<v.actualStartTime&&(v.flags&1)!==0&&mO(v,v.actualStartTime,q,s0,w),ov(g,v,w,H,q),u&2048&&UY(v,T1|Zv);break;case 1:(v.mode&og)!==Ng&&0<v.actualStartTime&&((v.flags&128)!==0?oA(v,v.actualStartTime,q,[]):(v.flags&1)!==0&&mO(v,v.actualStartTime,q,s0,w)),ov(g,v,w,H,q);break;case 3:var T=Ew(),B=s0;s0=v.alternate!==null&&v.alternate.memoizedState.isDehydrated&&(v.flags&256)===0,ov(g,v,w,H,q),s0=B,u&2048&&(w=null,v.alternate!==null&&(w=v.alternate.memoizedState.cache),H=v.memoizedState.cache,H!==w&&(D5(H),w!=null&&g8(w))),g.passiveEffectDuration+=eO(T);break;case 12:if(u&2048){u=Ew(),ov(g,v,w,H,q),g=v.stateNode,g.passiveEffectDuration+=v8(u);try{Pg(v,qU,v,v.alternate,ir,g.passiveEffectDuration)}catch(x){r0(v,v.return,x)}}else ov(g,v,w,H,q);break;case 31:u=s0,T=v.alternate!==null?v.alternate.memoizedState:null,B=v.memoizedState,T!==null&&B===null?(B=v.deletions,B!==null&&0<B.length&&B[0].tag===18?(s0=!1,T=T.hydrationErrors,T!==null&&oA(v,v.actualStartTime,q,T)):s0=!0):s0=!1,ov(g,v,w,H,q),s0=u;break;case 13:u=s0,T=v.alternate!==null?v.alternate.memoizedState:null,B=v.memoizedState,T===null||T.dehydrated===null||B!==null&&B.dehydrated!==null?s0=!1:(B=v.deletions,B!==null&&0<B.length&&B[0].tag===18?(s0=!1,T=T.hydrationErrors,T!==null&&oA(v,v.actualStartTime,q,T)):s0=!0),ov(g,v,w,H,q),s0=u;break;case 23:break;case 22:B=v.stateNode,T=v.alternate,v.memoizedState!==null?B._visibility&nw?ov(g,v,w,H,q):G8(g,v,w,H,q):B._visibility&nw?ov(g,v,w,H,q):(B._visibility|=nw,V4(g,v,w,H,(v.subtreeFlags&10256)!==0||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child),q),(v.mode&og)===Ng||s0||(g=v.actualStartTime,0<=g&&0.05<q-g&&kO(v,g,q),0<=Ug&&0<=Bg&&0.05<Bg-Ug&&kO(v,Ug,Bg))),u&2048&&dP(T,v);break;case 24:ov(g,v,w,H,q),u&2048&&aP(v.alternate,v);break;default:ov(g,v,w,H,q)}if((v.mode&og)!==Ng){if(g=!s0&&v.alternate===null&&v.return!==null&&v.return.alternate!==null)w=v.actualStartTime,0<=w&&0.05<q-w&&vw(v,w,q,"Mount");0<=Ug&&0<=Bg&&((u0||0.05<B0)&&ww(v,Ug,Bg,B0,L0),g&&0.05<Bg-Ug&&vw(v,Ug,Bg,"Mount"))}s1(A),Ow(W),L0=X,u0=J,Er=R}function V4(g,v,w,H,q,A){q=q&&((v.subtreeFlags&10256)!==0||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child));for(v=v.child;v!==null;){var W=v.sibling;EY(g,v,w,H,q,W!==null?W.actualStartTime:A),v=W}}function EY(g,v,w,H,q,A){var W=a1(),X=Hw(),J=qw(),R=Aw(),u=Er;q&&(v.mode&og)!==Ng&&0<v.actualStartTime&&(v.flags&1)!==0&&mO(v,v.actualStartTime,A,s0,w);var T=v.flags;switch(v.tag){case 0:case 11:case 15:V4(g,v,w,H,q,A),UY(v,T1);break;case 23:break;case 22:var B=v.stateNode;v.memoizedState!==null?B._visibility&nw?V4(g,v,w,H,q,A):G8(g,v,w,H,A):(B._visibility|=nw,V4(g,v,w,H,q,A)),q&&T&2048&&dP(v.alternate,v);break;case 24:V4(g,v,w,H,q,A),q&&T&2048&&aP(v.alternate,v);break;default:V4(g,v,w,H,q,A)}(v.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(v,Ug,Bg,B0,L0),s1(W),Ow(X),L0=J,u0=R,Er=u}function G8(g,v,w,H,q){if(v.subtreeFlags&10256||v.actualDuration!==0&&(v.alternate===null||v.alternate.child!==v.child))for(var A=v.child;A!==null;){v=A.sibling;var W=g,X=w,J=H,R=v!==null?v.actualStartTime:q,u=Er;(A.mode&og)!==Ng&&0<A.actualStartTime&&(A.flags&1)!==0&&mO(A,A.actualStartTime,R,s0,X);var T=A.flags;switch(A.tag){case 22:G8(W,A,X,J,R),T&2048&&dP(A.alternate,A);break;case 24:G8(W,A,X,J,R),T&2048&&aP(A.alternate,A);break;default:G8(W,A,X,J,R)}Er=u,A=v}}function E4(g,v,w){if(g.subtreeFlags&HH)for(g=g.child;g!==null;)_Y(g,v,w),g=g.sibling}function _Y(g,v,w){switch(g.tag){case 26:E4(g,v,w),g.flags&HH&&g.memoizedState!==null&&dU(w,_v,g.memoizedState,g.memoizedProps);break;case 5:E4(g,v,w);break;case 3:case 4:var H=_v;_v=u2(g.stateNode.containerInfo),E4(g,v,w),_v=H;break;case 22:g.memoizedState===null&&(H=g.alternate,H!==null&&H.memoizedState!==null?(H=HH,HH=16777216,E4(g,v,w),HH=H):E4(g,v,w));break;default:E4(g,v,w)}}function yY(g){var v=g.alternate;if(v!==null&&(g=v.child,g!==null)){v.child=null;do v=g.sibling,g.sibling=null,g=v;while(g!==null)}}function h8(g){var v=g.deletions;if((g.flags&16)!==0){if(v!==null)for(var w=0;w<v.length;w++){var H=v[w],q=a1();O1=H,fY(H,g),(H.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&vw(H,Ug,Bg,"Unmount"),s1(q)}yY(g)}if(g.subtreeFlags&10256)for(g=g.child;g!==null;)jY(g),g=g.sibling}function jY(g){var v=a1(),w=Hw(),H=qw(),q=Aw();switch(g.tag){case 0:case 11:case 15:h8(g),g.flags&2048&&eP(g,g.return,T1|Zv);break;case 3:var A=Ew();h8(g),g.stateNode.passiveEffectDuration+=eO(A);break;case 12:A=Ew(),h8(g),g.stateNode.passiveEffectDuration+=v8(A);break;case 22:A=g.stateNode,g.memoizedState!==null&&A._visibility&nw&&(g.return===null||g.return.tag!==13)?(A._visibility&=~nw,U2(g),(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&vw(g,Ug,Bg,"Disconnect")):h8(g);break;default:h8(g)}(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(g,Ug,Bg,B0,L0),s1(v),Ow(w),u0=q,L0=H}function U2(g){var v=g.deletions;if((g.flags&16)!==0){if(v!==null)for(var w=0;w<v.length;w++){var H=v[w],q=a1();O1=H,fY(H,g),(H.mode&og)!==Ng&&0<=Ug&&0<=Bg&&0.05<Bg-Ug&&vw(H,Ug,Bg,"Unmount"),s1(q)}yY(g)}for(g=g.child;g!==null;)iY(g),g=g.sibling}function iY(g){var v=a1(),w=Hw(),H=qw(),q=Aw();switch(g.tag){case 0:case 11:case 15:eP(g,g.return,T1),U2(g);break;case 22:var A=g.stateNode;A._visibility&nw&&(A._visibility&=~nw,U2(g));break;default:U2(g)}(g.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(g,Ug,Bg,B0,L0),s1(v),Ow(w),u0=q,L0=H}function fY(g,v){for(;O1!==null;){var w=O1,H=w,q=v,A=a1(),W=Hw(),X=qw(),J=Aw();switch(H.tag){case 0:case 11:case 15:eP(H,q,T1);break;case 23:case 22:H.memoizedState!==null&&H.memoizedState.cachePool!==null&&(q=H.memoizedState.cachePool.pool,q!=null&&D5(q));break;case 24:g8(H.memoizedState.cache)}if((H.mode&og)!==Ng&&0<=Ug&&0<=Bg&&(u0||0.05<B0)&&ww(H,Ug,Bg,B0,L0),s1(A),Ow(W),u0=J,L0=X,H=w.child,H!==null)H.return=w,O1=H;else g:for(w=g;O1!==null;){if(H=O1,A=H.sibling,W=H.return,CY(H),H===w){O1=null;break g}if(A!==null){A.return=W,O1=A;break g}O1=W}}}function WU(){CF.forEach(function(g){return g()})}function nY(){var g=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return g||D.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),g}function vv(g){if((ag&g1)!==q1&&kg!==0)return kg&-kg;var v=D.T;return v!==null?(v._updatedFibers||(v._updatedFibers=new Set),v._updatedFibers.add(g),qb()):C()}function eY(){if(f1===0)if((kg&536870912)===0||eg){var g=_2;_2<<=1,(_2&3932160)===0&&(_2=262144),f1=g}else f1=536870912;return g=Av.current,g!==null&&(g.flags|=32),f1}function Z0(g,v,w){if(B6&&console.error("useInsertionEffect must not schedule updates."),_W&&(Iq=!0),g===G0&&(A0===w4||A0===r4)||g.cancelPendingCommit!==null)y4(g,0),Sr(g,kg,f1,!1);if($r(g,w),(ag&g1)!==q1&&g===G0){if(Rw)switch(v.tag){case 0:case 11:case 15:g=Eg&&k(Eg)||"Unknown",$J.has(g)||($J.add(g),v=k(v)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",v,g,g));break;case 1:KJ||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),KJ=!0)}}else $w&&j6(g,v,w),$U(v),g===G0&&((ag&g1)===q1&&(sr|=w),I0===pr&&Sr(g,kg,f1,!1)),Gw(g)}function cY(g,v,w){if((ag&(g1|bv))!==q1)throw Error("Should not already be working.");if(kg!==0&&Eg!==null){var H=Eg,q=r1();switch(Xh){case AH:case w4:var A=i8;R0&&((H=H._debugTask)?H.run(console.timeStamp.bind(console,"Suspended",A,q,$v,void 0,"primary-light")):console.timeStamp("Suspended",A,q,$v,void 0,"primary-light"));break;case r4:A=i8,R0&&((H=H._debugTask)?H.run(console.timeStamp.bind(console,"Action",A,q,$v,void 0,"primary-light")):console.timeStamp("Action",A,q,$v,void 0,"primary-light"));break;default:R0&&(H=q-i8,3>H||console.timeStamp("Blocked",i8,q,$v,void 0,5>H?"primary-light":10>H?"primary":100>H?"primary-dark":"error"))}}A=(w=!w&&(v&127)===0&&(v&g.expiredLanes)===0||L5(g,v))?XU(g,v):gb(g,v,!0);var W=w;do{if(A===rr){L6&&!w&&Sr(g,v,0,!1),v=A0,i8=f0(),Xh=v;break}else{if(H=r1(),q=g.current.alternate,W&&!MU(q)){p1(v),q=H1,A=H,!R0||A<=q||(D0?D0.run(console.timeStamp.bind(console,"Teared Render",q,A,ig,jg,"error")):console.timeStamp("Teared Render",q,A,ig,jg,"error")),y5(v,H),A=gb(g,v,!1),W=!1;continue}if(A===v4){if(W=v,g.errorRecoveryDisabledLanes&W)var X=0;else X=g.pendingLanes&-536870913,X=X!==0?X:X&536870912?536870912:0;if(X!==0){p1(v),DA(H1,H,v,D0),y5(v,H),v=X;g:{H=g,A=W,W=bH;var J=H.current.memoizedState.isDehydrated;if(J&&(y4(H,X).flags|=256),X=gb(H,X,!1),X!==v4){if(lW&&!J){H.errorRecoveryDisabledLanes|=A,sr|=A,A=pr;break g}H=C1,C1=W,H!==null&&(C1===null?C1=H:C1.push.apply(C1,H))}A=X}if(W=!1,A!==v4)continue;else H=r1()}}if(A===qH){p1(v),DA(H1,H,v,D0),y5(v,H),y4(g,0),Sr(g,v,0,!0);break}g:{switch(w=g,A){case rr:case qH:throw Error("Root did not complete. This is a bug in React.");case pr:if((v&4194048)!==v)break;case Rq:p1(v),c9(H1,H,v,D0),y5(v,H),q=v,(q&127)!==0?rq=H:(q&4194048)!==0&&(Hq=H),Sr(w,v,f1,!dr);break g;case v4:C1=null;break;case Qq:case qJ:break;default:throw Error("Unknown root exit status.")}if(D.actQueue!==null)vb(w,q,v,C1,WH,zq,f1,sr,H4,A,null,null,H1,H);else{if((v&62914560)===v&&(W=Uq+bJ-r1(),10<W)){if(Sr(w,v,f1,!dr),U5(w,0,!0)!==0)break g;yv=v,w.timeoutHandle=ZJ(tY.bind(null,w,q,C1,WH,zq,v,f1,sr,H4,dr,A,"Throttled",H1,H),W);break g}tY(w,q,C1,WH,zq,v,f1,sr,H4,dr,A,null,H1,H)}}}break}while(1);Gw(g)}function tY(g,v,w,H,q,A,W,X,J,R,u,T,B,x){g.timeoutHandle=b4;var gg=v.subtreeFlags,bg=null;if(gg&8192||(gg&16785408)===16785408){if(bg={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dw},_Y(v,A,bg),gg=(A&62914560)===A?Uq-r1():(A&4194048)===A?PJ-r1():0,gg=aU(bg,gg),gg!==null){yv=A,g.cancelPendingCommit=gg(vb.bind(null,g,v,A,w,H,q,W,X,J,u,bg,bg.waitingForViewTransition?"Waiting for the previous Animation":0<bg.count?0<bg.imgCount?"Suspended on CSS and Images":"Suspended on CSS":bg.imgCount===1?"Suspended on an Image":0<bg.imgCount?"Suspended on Images":null,B,x)),Sr(g,A,W,!R);return}}vb(g,v,A,w,H,q,W,X,J,u,bg,T,B,x)}function MU(g){for(var v=g;;){var w=v.tag;if((w===0||w===11||w===15)&&v.flags&16384&&(w=v.updateQueue,w!==null&&(w=w.stores,w!==null)))for(var H=0;H<w.length;H++){var q=w[H],A=q.getSnapshot;q=q.value;try{if(!N1(A(),q))return!1}catch(W){return!1}}if(w=v.child,v.subtreeFlags&16384&&w!==null)w.return=v,v=w;else{if(v===g)break;for(;v.sibling===null;){if(v.return===null||v.return===g)return!0;v=v.return}v.sibling.return=v.return,v=v.sibling}}return!0}function Sr(g,v,w,H){v&=~xW,v&=~sr,g.suspendedLanes|=v,g.pingedLanes&=~v,H&&(g.warmLanes|=v),H=g.expirationTimes;for(var q=v;0<q;){var A=31-F1(q),W=1<<A;H[A]=-1,q&=~W}w!==0&&F5(g,w,v)}function _4(){return(ag&(g1|bv))===q1?(R8(0,!1),!1):!0}function sP(){if(Eg!==null){if(A0===i1)var g=Eg.return;else g=Eg,iO(),WP(g),G6=null,s8=0,g=Eg;for(;g!==null;)$Y(g.alternate,g),g=g.return;Eg=null}}function y5(g,v){(g&127)!==0&&(fr=v),(g&4194048)!==0&&(Bw=v),(g&62914560)!==0&&(Wh=v),(g&2080374784)!==0&&(Mh=v)}function y4(g,v){R0&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jg,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jg,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jg,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jg,"primary-light"));var w=H1;if(H1=f0(),kg!==0&&0<w){if(p1(kg),I0===Qq||I0===pr)c9(w,H1,v,D0);else{var H=H1,q=D0;if(R0&&!(H<=w)){var A=(v&738197653)===v?"tertiary-dark":"primary-dark",W=(v&536870912)===v?"Prewarm":(v&201326741)===v?"Interrupted Hydration":"Interrupted Render";q?q.run(console.timeStamp.bind(console,W,w,H,ig,jg,A)):console.timeStamp(W,w,H,ig,jg,A)}}y5(kg,H1)}if(w=D0,D0=null,(v&127)!==0){D0=_8,q=0<=Fw&&Fw<fr?fr:Fw,H=0<=e5&&e5<fr?fr:e5,A=0<=H?H:0<=q?q:H1,0<=rq?(p1(2),t9(rq,A,v,w)):(Oq&127)!==0&&(p1(2),a6(fr,A,aw)),w=q;var X=H,J=y8,R=0<M6,u=nr===E8,T=nr===wq;if(q=H1,H=_8,A=XW,W=YW,R0){if(ig="Blocking",0<w?w>q&&(w=q):w=q,0<X?X>w&&(X=w):X=w,J!==null&&w>X){var B=R?"secondary-light":"warning";H?H.run(console.timeStamp.bind(console,R?"Consecutive":"Event: "+J,X,w,ig,jg,B)):console.timeStamp(R?"Consecutive":"Event: "+J,X,w,ig,jg,B)}q>w&&(X=u?"error":(v&738197653)===v?"tertiary-light":"primary-light",u=T?"Promise Resolved":u?"Cascading Update":5<q-w?"Update Blocked":"Update",T=[],W!=null&&T.push(["Component name",W]),A!=null&&T.push(["Method name",A]),w={start:w,end:q,detail:{devtools:{properties:T,track:ig,trackGroup:jg,color:X}}},H?H.run(performance.measure.bind(performance,u,w)):performance.measure(u,w))}Fw=-1.1,nr=0,YW=XW=null,rq=-1.1,M6=e5,e5=-1.1,fr=f0()}if((v&4194048)!==0&&(D0=j8,q=0<=dw&&dw<Bw?Bw:dw,w=0<=Iv&&Iv<Bw?Bw:Iv,H=0<=er&&er<Bw?Bw:er,A=0<=H?H:0<=w?w:H1,0<=Hq?(p1(256),t9(Hq,A,v,D0)):(Oq&4194048)!==0&&(p1(256),a6(Bw,A,aw)),T=H,X=c5,J=0<cr,R=GW===wq,A=H1,H=j8,W=Ph,u=bh,R0&&(ig="Transition",0<w?w>A&&(w=A):w=A,0<q?q>w&&(q=w):q=w,0<T?T>q&&(T=q):T=q,q>T&&X!==null&&(B=J?"secondary-light":"warning",H?H.run(console.timeStamp.bind(console,J?"Consecutive":"Event: "+X,T,q,ig,jg,B)):console.timeStamp(J?"Consecutive":"Event: "+X,T,q,ig,jg,B)),w>q&&(H?H.run(console.timeStamp.bind(console,"Action",q,w,ig,jg,"primary-dark")):console.timeStamp("Action",q,w,ig,jg,"primary-dark")),A>w&&(q=R?"Promise Resolved":5<A-w?"Update Blocked":"Update",T=[],u!=null&&T.push(["Component name",u]),W!=null&&T.push(["Method name",W]),w={start:w,end:A,detail:{devtools:{properties:T,track:ig,trackGroup:jg,color:"primary-light"}}},H?H.run(performance.measure.bind(performance,q,w)):performance.measure(q,w))),Iv=dw=-1.1,GW=0,Hq=-1.1,cr=er,er=-1.1,Bw=f0()),(v&62914560)!==0&&(Oq&62914560)!==0&&(p1(4194304),a6(Wh,H1,aw)),(v&2080374784)!==0&&(Oq&2080374784)!==0&&(p1(268435456),a6(Mh,H1,aw)),w=g.timeoutHandle,w!==b4&&(g.timeoutHandle=b4,iF(w)),w=g.cancelPendingCommit,w!==null&&(g.cancelPendingCommit=null,w()),yv=0,sP(),G0=g,Eg=w=kw(g.current,null),kg=v,A0=i1,Wv=null,dr=!1,L6=L5(g,v),lW=!1,I0=rr,H4=f1=xW=sr=ar=0,C1=bH=null,zq=!1,(v&8)!==0&&(v|=v&32),H=g.entangledLanes,H!==0)for(g=g.entanglements,H&=v;0<H;)q=31-F1(H),A=1<<q,v|=g[q],H&=~A;return Nw=v,VO(),g=wh(),1000<g-vh&&(D.recentlyCreatedOwnerStacks=0,vh=g),Vv.discardPendingWarnings(),w}function pY(g,v){Zg=null,D.H=rH,D.getCurrentStack=null,Rw=!1,Hv=null,v===Y6||v===bq?(v=QX(),A0=AH):v===RW?(v=QX(),A0=AJ):A0=v===ZW?SW:v!==null&&typeof v==="object"&&typeof v.then==="function"?PH:Kq,Wv=v;var w=Eg;w===null?(I0=qH,h2(g,d1(v,g.current))):w.mode&og&&dA(w)}function dY(){var g=Av.current;return g===null?!0:(kg&4194048)===kg?Nv===null?!0:!1:(kg&62914560)===kg||(kg&536870912)!==0?g===Nv:!1}function aY(){var g=D.H;return D.H=rH,g===null?rH:g}function sY(){var g=D.A;return D.A=TF,g}function L2(g){D0===null&&(D0=g._debugTask==null?null:g._debugTask)}function F2(){I0=pr,dr||(kg&4194048)!==kg&&Av.current!==null||(L6=!0),(ar&134217727)===0&&(sr&134217727)===0||G0===null||Sr(G0,kg,f1,!1)}function gb(g,v,w){var H=ag;ag|=g1;var q=aY(),A=sY();if(G0!==g||kg!==v){if($w){var W=g.memoizedUpdaters;0<W.size&&(Q8(g,kg),W.clear()),zr(g,v)}WH=null,y4(g,v)}v=!1,W=I0;g:do try{if(A0!==i1&&Eg!==null){var X=Eg,J=Wv;switch(A0){case SW:sP(),W=Rq;break g;case AH:case w4:case r4:case PH:Av.current===null&&(v=!0);var R=A0;if(A0=i1,Wv=null,j4(g,X,J,R),w&&L6){W=rr;break g}break;default:R=A0,A0=i1,Wv=null,j4(g,X,J,R)}}gG(),W=I0;break}catch(u){pY(g,u)}while(1);return v&&g.shellSuspendCounter++,iO(),ag=H,D.H=q,D.A=A,Eg===null&&(G0=null,kg=0,VO()),W}function gG(){for(;Eg!==null;)vG(Eg)}function XU(g,v){var w=ag;ag|=g1;var H=aY(),q=sY();if(G0!==g||kg!==v){if($w){var A=g.memoizedUpdaters;0<A.size&&(Q8(g,kg),A.clear()),zr(g,v)}WH=null,Lq=r1()+WJ,y4(g,v)}else L6=L5(g,v);g:do try{if(A0!==i1&&Eg!==null)v:switch(v=Eg,A=Wv,A0){case Kq:A0=i1,Wv=null,j4(g,v,A,Kq);break;case w4:case r4:if(hX(A)){A0=i1,Wv=null,wG(v);break}v=function(){A0!==w4&&A0!==r4||G0!==g||(A0=$q),Gw(g)},A.then(v,v);break g;case AH:A0=$q;break g;case AJ:A0=CW;break g;case $q:hX(A)?(A0=i1,Wv=null,wG(v)):(A0=i1,Wv=null,j4(g,v,A,$q));break;case CW:var W=null;switch(Eg.tag){case 26:W=Eg.memoizedState;case 5:case 27:var X=Eg;if(W?cG(W):X.stateNode.complete){A0=i1,Wv=null;var J=X.sibling;if(J!==null)Eg=J;else{var R=X.return;R!==null?(Eg=R,B2(R)):Eg=null}break v}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}A0=i1,Wv=null,j4(g,v,A,CW);break;case PH:A0=i1,Wv=null,j4(g,v,A,PH);break;case SW:sP(),I0=Rq;break g;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}D.actQueue!==null?gG():YU();break}catch(u){pY(g,u)}while(1);if(iO(),D.H=H,D.A=q,ag=w,Eg!==null)return rr;return G0=null,kg=0,VO(),I0}function YU(){for(;Eg!==null&&!ML();)vG(Eg)}function vG(g){var v=g.alternate;(g.mode&og)!==Ng?(pA(g),v=Pg(g,iP,v,g,Nw),dA(g)):v=Pg(g,iP,v,g,Nw),g.memoizedProps=g.pendingProps,v===null?B2(g):Eg=v}function wG(g){var v=Pg(g,GU,g);g.memoizedProps=g.pendingProps,v===null?B2(g):Eg=v}function GU(g){var v=g.alternate,w=(g.mode&og)!==Ng;switch(w&&pA(g),g.tag){case 15:case 0:v=YY(v,g,g.pendingProps,g.type,void 0,kg);break;case 11:v=YY(v,g,g.pendingProps,g.type.render,g.ref,kg);break;case 5:WP(g);default:$Y(v,g),g=Eg=vX(g,Nw),v=iP(v,g,Nw)}return w&&dA(g),v}function j4(g,v,w,H){iO(),WP(v),G6=null,s8=0;var q=v.return;try{if(az(g,q,v,w,kg)){I0=qH,h2(g,d1(w,g.current)),Eg=null;return}}catch(A){if(q!==null)throw Eg=q,A;I0=qH,h2(g,d1(w,g.current)),Eg=null;return}if(v.flags&32768){if(eg||H===Kq)g=!0;else if(L6||(kg&536870912)!==0)g=!1;else if(dr=g=!0,H===w4||H===r4||H===AH||H===PH)H=Av.current,H!==null&&H.tag===13&&(H.flags|=16384);rG(v,g)}else B2(v)}function B2(g){var v=g;do{if((v.flags&32768)!==0){rG(v,dr);return}var w=v.alternate;if(g=v.return,pA(v),w=Pg(v,vU,w,v,Nw),(v.mode&og)!==Ng&&WX(v),w!==null){Eg=w;return}if(v=v.sibling,v!==null){Eg=v;return}Eg=v=g}while(v!==null);I0===rr&&(I0=qJ)}function rG(g,v){do{var w=wU(g.alternate,g);if(w!==null){w.flags&=32767,Eg=w;return}if((g.mode&og)!==Ng){WX(g),w=g.actualDuration;for(var H=g.child;H!==null;)w+=H.actualDuration,H=H.sibling;g.actualDuration=w}if(w=g.return,w!==null&&(w.flags|=32768,w.subtreeFlags=0,w.deletions=null),!v&&(g=g.sibling,g!==null)){Eg=g;return}Eg=g=w}while(g!==null);I0=Rq,Eg=null}function vb(g,v,w,H,q,A,W,X,J,R,u,T,B,x){g.cancelPendingCommit=null;do J8();while(p0!==v5);if(Vv.flushLegacyContextWarning(),Vv.flushPendingUnsafeLifecycleWarnings(),(ag&(g1|bv))!==q1)throw Error("Should not already be working.");if(p1(w),R===v4?DA(B,x,w,D0):H!==null?Vz(B,x,w,H,v!==null&&v.alternate!==null&&v.alternate.memoizedState.isDehydrated&&(v.flags&256)!==0,D0):mz(B,x,w,D0),v!==null){if(w===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),v===g.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(A=v.lanes|v.childLanes,A|=AW,ZO(g,w,A,W,X,J),g===G0&&(Eg=G0=null,kg=0),F6=v,w5=g,yv=w,kW=A,VW=q,JJ=H,mW=x,QJ=T,jv=Fq,RJ=null,v.actualDuration!==0||(v.subtreeFlags&10256)!==0||(v.flags&10256)!==0?(g.callbackNode=null,g.callbackPriority=0,KU(t4,function(){return JH=window.event,jv===Fq&&(jv=DW),PG(),null})):(g.callbackNode=null,g.callbackPriority=0),pw=null,ir=f0(),T!==null&&Ez(x,ir,T,D0),H=(v.flags&13878)!==0,(v.subtreeFlags&13878)!==0||H){H=D.T,D.T=null,q=H0.p,H0.p=Ov,W=ag,ag|=bv;try{PU(g,v,w)}finally{ag=W,H0.p=q,D.T=H}}p0=XJ,HG(),OG(),qG()}}function HG(){if(p0===XJ){p0=v5;var g=w5,v=F6,w=yv,H=(v.flags&13878)!==0;if((v.subtreeFlags&13878)!==0||H){H=D.T,D.T=null;var q=H0.p;H0.p=Ov;var A=ag;ag|=bv;try{z6=w,U6=g,cO(),oY(v,g),U6=z6=null,w=pW;var W=f9(g.containerInfo),X=w.focusedElem,J=w.selectionRange;if(W!==X&&X&&X.ownerDocument&&i9(X.ownerDocument.documentElement,X)){if(J!==null&&lA(X)){var{start:R,end:u}=J;if(u===void 0&&(u=R),"selectionStart"in X)X.selectionStart=R,X.selectionEnd=Math.min(u,X.value.length);else{var T=X.ownerDocument||document,B=T&&T.defaultView||window;if(B.getSelection){var x=B.getSelection(),gg=X.textContent.length,bg=Math.min(J.start,gg),Q0=J.end===void 0?bg:Math.min(J.end,gg);!x.extend&&bg>Q0&&(W=Q0,Q0=bg,bg=W);var tg=j9(X,bg),F=j9(X,Q0);if(tg&&F&&(x.rangeCount!==1||x.anchorNode!==tg.node||x.anchorOffset!==tg.offset||x.focusNode!==F.node||x.focusOffset!==F.offset)){var I=T.createRange();I.setStart(tg.node,tg.offset),x.removeAllRanges(),bg>Q0?(x.addRange(I),x.extend(F.node,F.offset)):(I.setEnd(F.node,F.offset),x.addRange(I))}}}}T=[];for(x=X;x=x.parentNode;)x.nodeType===1&&T.push({element:x,left:x.scrollLeft,top:x.scrollTop});typeof X.focus==="function"&&X.focus();for(X=0;X<T.length;X++){var Z=T[X];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Eq=!!tW,pW=tW=null}finally{ag=A,H0.p=q,D.T=H}}g.current=v,p0=YJ}}function OG(){if(p0===YJ){p0=v5;var g=RJ;if(g!==null){ir=f0();var v=tw,w=ir;!R0||w<=v||(aw?aw.run(console.timeStamp.bind(console,g,v,w,ig,jg,"secondary-light")):console.timeStamp(g,v,w,ig,jg,"secondary-light"))}g=w5,v=F6,w=yv;var H=(v.flags&8772)!==0;if((v.subtreeFlags&8772)!==0||H){H=D.T,D.T=null;var q=H0.p;H0.p=Ov;var A=ag;ag|=bv;try{z6=w,U6=g,cO(),TY(g,v.alternate,v),U6=z6=null}finally{ag=A,H0.p=q,D.T=H}}g=mW,v=QJ,tw=f0(),g=v===null?g:ir,v=tw,w=jv===oW,H=D0,pw!==null?p9(g,v,pw,!1,H):!R0||v<=g||(H?H.run(console.timeStamp.bind(console,w?"Commit Interrupted View Transition":"Commit",g,v,ig,jg,w?"error":"secondary-dark")):console.timeStamp(w?"Commit Interrupted View Transition":"Commit",g,v,ig,jg,w?"error":"secondary-dark")),p0=GJ}}function qG(){if(p0===hJ||p0===GJ){if(p0===hJ){var g=tw;tw=f0();var v=tw,w=jv===oW;!R0||v<=g||(aw?aw.run(console.timeStamp.bind(console,w?"Interrupted View Transition":"Starting Animation",g,v,ig,jg,w?"error":"secondary-light")):console.timeStamp(w?"Interrupted View Transition":"Starting Animation",g,v,ig,jg,w?" error":"secondary-light")),jv!==oW&&(jv=MJ)}p0=v5,XL(),g=w5;var H=F6;v=yv,w=JJ;var q=H.actualDuration!==0||(H.subtreeFlags&10256)!==0||(H.flags&10256)!==0;q?p0=Bq:(p0=v5,F6=w5=null,AG(g,g.pendingLanes),O4=0,XH=null);var A=g.pendingLanes;if(A===0&&(g5=null),q||XG(g),A=K(v),H=H.stateNode,$1&&typeof $1.onCommitFiberRoot==="function")try{var W=(H.current.flags&128)===128;switch(A){case Ov:var X=Vb;break;case kv:X=Eb;break;case zw:X=t4;break;case j2:X=_b;break;default:X=t4}$1.onCommitFiberRoot(p4,H,X,W)}catch(T){Kw||(Kw=!0,console.error("React instrumentation encountered an error: %o",T))}if($w&&g.memoizedUpdaters.clear(),WU(),w!==null){W=D.T,X=H0.p,H0.p=Ov,D.T=null;try{var J=g.onRecoverableError;for(H=0;H<w.length;H++){var R=w[H],u=hU(R.stack);Pg(R.source,J,R.value,u)}}finally{D.T=W,H0.p=X}}(yv&3)!==0&&J8(),Gw(g),A=g.pendingLanes,(v&261930)!==0&&(A&42)!==0?(Aq=!0,g===EW?MH++:(MH=0,EW=g)):MH=0,q||y5(v,tw),R8(0,!1)}}function hU(g){return g={componentStack:g},Object.defineProperty(g,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),g}function AG(g,v){(g.pooledCacheLanes&=v)===0&&(v=g.pooledCache,v!=null&&(g.pooledCache=null,g8(v)))}function J8(){return HG(),OG(),qG(),PG()}function PG(){if(p0!==Bq)return!1;var g=w5,v=kW;kW=0;var w=K(yv),H=zw===0||zw>w?zw:w;w=D.T;var q=H0.p;try{H0.p=H,D.T=null;var A=VW;VW=null,H=w5;var W=yv;if(p0=v5,F6=w5=null,yv=0,(ag&(g1|bv))!==q1)throw Error("Cannot flush passive effects while already rendering.");p1(W),_W=!0,Iq=!1;var X=0;if(pw=null,X=r1(),jv===MJ)a6(tw,X,aw);else{var J=tw,R=X,u=jv===DW;!R0||R<=J||(D0?D0.run(console.timeStamp.bind(console,u?"Waiting for Paint":"Waiting",J,R,ig,jg,"secondary-light")):console.timeStamp(u?"Waiting for Paint":"Waiting",J,R,ig,jg,"secondary-light"))}J=ag,ag|=bv;var T=H.current;cO(),jY(T);var B=H.current;T=mW,cO(),VY(H,B,W,A,T),XG(H),ag=J;var x=r1();if(B=X,T=D0,pw!==null?p9(B,x,pw,!0,T):!R0||x<=B||(T?T.run(console.timeStamp.bind(console,"Remaining Effects",B,x,ig,jg,"secondary-dark")):console.timeStamp("Remaining Effects",B,x,ig,jg,"secondary-dark")),y5(W,x),R8(0,!1),Iq?H===XH?O4++:(O4=0,XH=H):O4=0,Iq=_W=!1,$1&&typeof $1.onPostCommitFiberRoot==="function")try{$1.onPostCommitFiberRoot(p4,H)}catch(bg){Kw||(Kw=!0,console.error("React instrumentation encountered an error: %o",bg))}var gg=H.current.stateNode;return gg.effectDuration=0,gg.passiveEffectDuration=0,!0}finally{H0.p=q,D.T=w,AG(g,v)}}function bG(g,v,w){v=d1(w,v),MX(v),v=lP(g.stateNode,v,2),g=Zr(g,v,2),g!==null&&($r(g,2),Gw(g))}function r0(g,v,w){if(B6=!1,g.tag===3)bG(g,g,w);else{for(;v!==null;){if(v.tag===3){bG(v,g,w);return}if(v.tag===1){var H=v.stateNode;if(typeof v.type.getDerivedStateFromError==="function"||typeof H.componentDidCatch==="function"&&(g5===null||!g5.has(H))){g=d1(w,g),MX(g),w=xP(2),H=Zr(v,w,2),H!==null&&(oP(w,H,v,g),$r(H,2),Gw(H));return}}v=v.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,w)}}function wb(g,v,w){var H=g.pingCache;if(H===null){H=g.pingCache=new SF;var q=new Set;H.set(v,q)}else q=H.get(v),q===void 0&&(q=new Set,H.set(v,q));q.has(w)||(lW=!0,q.add(w),H=JU.bind(null,g,v,w),$w&&Q8(g,w),v.then(H,H))}function JU(g,v,w){var H=g.pingCache;H!==null&&H.delete(v),g.pingedLanes|=g.suspendedLanes&w,g.warmLanes&=~w,(w&127)!==0?0>Fw&&(fr=Fw=f0(),_8=vq("Promise Resolved"),nr=wq):(w&4194048)!==0&&0>Iv&&(Bw=Iv=f0(),j8=vq("Promise Resolved"),GW=wq),nY()&&D.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),G0===g&&(kg&w)===w&&(I0===pr||I0===Qq&&(kg&62914560)===kg&&r1()-Uq<bJ?(ag&g1)===q1&&y4(g,0):xW|=w,H4===kg&&(H4=0)),Gw(g)}function WG(g,v){v===0&&(v=N4()),g=K1(g,v),g!==null&&($r(g,v),Gw(g))}function QU(g){var v=g.memoizedState,w=0;v!==null&&(w=v.retryLane),WG(g,w)}function RU(g,v){var w=0;switch(g.tag){case 31:case 13:var{stateNode:H,memoizedState:q}=g;q!==null&&(w=q.retryLane);break;case 19:H=g.stateNode;break;case 22:H=g.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}H!==null&&H.delete(v),WG(g,w)}function rb(g,v,w){if((v.subtreeFlags&67117056)!==0)for(v=v.child;v!==null;){var H=g,q=v,A=q.type===k2;A=w||A,q.tag!==22?q.flags&67108864?A&&Pg(q,MG,H,q):rb(H,q,A):q.memoizedState===null&&(A&&q.flags&8192?Pg(q,MG,H,q):q.subtreeFlags&67108864&&Pg(q,rb,H,q,A)),v=v.sibling}}function MG(g,v){h0(!0);try{kY(v),iY(v),mY(g,v.alternate,v,!1),EY(g,v,0,null,!1,0)}finally{h0(!1)}}function XG(g){var v=!0;g.current.mode&(z1|mv)||(v=!1),rb(g,g.current,v)}function YG(g){if((ag&g1)===q1){var v=g.tag;if(v===3||v===1||v===0||v===11||v===14||v===15){if(v=k(g)||"ReactComponent",Nq!==null){if(Nq.has(v))return;Nq.add(v)}else Nq=new Set([v]);Pg(g,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Q8(g,v){$w&&g.memoizedUpdaters.forEach(function(w){j6(g,w,v)})}function KU(g,v){var w=D.actQueue;return w!==null?(w.push(v),oF):mb(g,v)}function $U(g){nY()&&D.actQueue===null&&Pg(g,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,k(g))})}function Gw(g){g!==I6&&g.next===null&&(I6===null?Zq=I6=g:I6=I6.next=g),uq=!0,D.actQueue!==null?jW||(jW=!0,QG()):yW||(yW=!0,QG())}function R8(g,v){if(!iW&&uq){iW=!0;do{var w=!1;for(var H=Zq;H!==null;){if(!v)if(g!==0){var q=H.pendingLanes;if(q===0)var A=0;else{var{suspendedLanes:W,pingedLanes:X}=H;A=(1<<31-F1(42|g)+1)-1,A&=q&~(W&~X),A=A&201326741?A&201326741|1:A?A|2:0}A!==0&&(w=!0,JG(H,A))}else A=kg,A=U5(H,H===G0?A:0,H.cancelPendingCommit!==null||H.timeoutHandle!==b4),(A&3)===0||L5(H,A)||(w=!0,JG(H,A));H=H.next}}while(w);iW=!1}}function zU(){JH=window.event,Hb()}function Hb(){uq=jW=yW=!1;var g=0;r5!==0&&ZU()&&(g=r5);for(var v=r1(),w=null,H=Zq;H!==null;){var q=H.next,A=GG(H,v);if(A===0)H.next=null,w===null?Zq=q:w.next=q,q===null&&(I6=w);else if(w=H,g!==0||(A&3)!==0)uq=!0;H=q}p0!==v5&&p0!==Bq||R8(g,!1),r5!==0&&(r5=0)}function GG(g,v){for(var{suspendedLanes:w,pingedLanes:H,expirationTimes:q}=g,A=g.pendingLanes&-62914561;0<A;){var W=31-F1(A),X=1<<W,J=q[W];if(J===-1){if((X&w)===0||(X&H)!==0)q[W]=UA(X,v)}else J<=v&&(g.expiredLanes|=X);A&=~X}if(v=G0,w=kg,w=U5(g,g===v?w:0,g.cancelPendingCommit!==null||g.timeoutHandle!==b4),H=g.callbackNode,w===0||g===v&&(A0===w4||A0===r4)||g.cancelPendingCommit!==null)return H!==null&&Ob(H),g.callbackNode=null,g.callbackPriority=0;if((w&3)===0||L5(g,w)){if(v=w&-w,v!==g.callbackPriority||D.actQueue!==null&&H!==fW)Ob(H);else return v;switch(K(w)){case Ov:case kv:w=Eb;break;case zw:w=t4;break;case j2:w=_b;break;default:w=t4}return H=hG.bind(null,g),D.actQueue!==null?(D.actQueue.push(H),w=fW):w=mb(w,H),g.callbackPriority=v,g.callbackNode=w,v}return H!==null&&Ob(H),g.callbackPriority=2,g.callbackNode=null,2}function hG(g,v){if(Aq=qq=!1,JH=window.event,p0!==v5&&p0!==Bq)return g.callbackNode=null,g.callbackPriority=0,null;var w=g.callbackNode;if(jv===Fq&&(jv=DW),J8()&&g.callbackNode!==w)return null;var H=kg;if(H=U5(g,g===G0?H:0,g.cancelPendingCommit!==null||g.timeoutHandle!==b4),H===0)return null;return cY(g,H,v),GG(g,r1()),g.callbackNode!=null&&g.callbackNode===w?hG.bind(null,g):null}function JG(g,v){if(J8())return null;qq=Aq,Aq=!1,cY(g,v,!0)}function Ob(g){g!==fW&&g!==null&&WL(g)}function QG(){D.actQueue!==null&&D.actQueue.push(function(){return Hb(),null}),fF(function(){(ag&(g1|bv))!==q1?mb(Vb,zU):Hb()})}function qb(){if(r5===0){var g=t5;g===0&&(g=E2,E2<<=1,(E2&261888)===0&&(E2=256)),r5=g}return r5}function RG(g){if(g==null||typeof g==="symbol"||typeof g==="boolean")return null;if(typeof g==="function")return g;return b0(g,"action"),t6(""+g)}function KG(g,v){var w=v.ownerDocument.createElement("input");return w.name=v.name,w.value=v.value,g.id&&w.setAttribute("form",g.id),v.parentNode.insertBefore(w,v),g=new FormData(g),w.parentNode.removeChild(w),g}function UU(g,v,w,H,q){if(v==="submit"&&w&&w.stateNode===q){var A=RG((q[B1]||null).action),W=H.submitter;W&&(v=(v=W[B1]||null)?RG(v.formAction):W.getAttribute("formAction"),v!==null&&(A=v,W=null));var X=new c2("action","action",null,H,q);g.push({event:X,listeners:[{instance:null,listener:function(){if(H.defaultPrevented){if(r5!==0){var J=W?KG(q,W):new FormData(q),R={pending:!0,data:J,method:q.method,action:A};Object.freeze(R),IP(w,R,null,J)}}else typeof A==="function"&&(X.preventDefault(),J=W?KG(q,W):new FormData(q),R={pending:!0,data:J,method:q.method,action:A},Object.freeze(R),IP(w,R,A,J))},currentTarget:q}]})}}function I2(g,v,w){g.currentTarget=w;try{v(g)}catch(H){rW(H)}g.currentTarget=null}function $G(g,v){v=(v&4)!==0;for(var w=0;w<g.length;w++){var H=g[w];g:{var q=void 0,A=H.event;if(H=H.listeners,v)for(var W=H.length-1;0<=W;W--){var X=H[W],J=X.instance,R=X.currentTarget;if(X=X.listener,J!==q&&A.isPropagationStopped())break g;J!==null?Pg(J,I2,A,X,R):I2(A,X,R),q=J}else for(W=0;W<H.length;W++){if(X=H[W],J=X.instance,R=X.currentTarget,X=X.listener,J!==q&&A.isPropagationStopped())break g;J!==null?Pg(J,I2,A,X,R):I2(A,X,R),q=J}}}}function cg(g,v){nW.has(g)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',g);var w=v[yb];w===void 0&&(w=v[yb]=new Set);var H=g+"__bubble";w.has(H)||(zG(v,g,2,!1),w.add(H))}function Ab(g,v,w){nW.has(g)&&!v&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',g);var H=0;v&&(H|=4),zG(w,g,H,v)}function Pb(g){if(!g[Tq]){g[Tq]=!0,Q7.forEach(function(w){w!=="selectionchange"&&(nW.has(w)||Ab(w,!1,g),Ab(w,!0,g))});var v=g.nodeType===9?g:g.ownerDocument;v===null||v[Tq]||(v[Tq]=!0,Ab("selectionchange",!1,v))}}function zG(g,v,w,H){switch(g7(v)){case Ov:var q=wL;break;case kv:q=rL;break;default:q=Fb}w=q.bind(null,v,w,g),q=void 0,!eb||v!=="touchstart"&&v!=="touchmove"&&v!=="wheel"||(q=!0),H?q!==void 0?g.addEventListener(v,w,{capture:!0,passive:q}):g.addEventListener(v,w,!0):q!==void 0?g.addEventListener(v,w,{passive:q}):g.addEventListener(v,w,!1)}function bb(g,v,w,H,q){var A=H;if((v&1)===0&&(v&2)===0&&H!==null)g:for(;;){if(H===null)return;var W=H.tag;if(W===3||W===4){var X=H.stateNode.containerInfo;if(X===q)break;if(W===4)for(W=H.return;W!==null;){var J=W.tag;if((J===3||J===4)&&W.stateNode.containerInfo===q)return;W=W.return}for(;X!==null;){if(W=hg(X),W===null)return;if(J=W.tag,J===5||J===6||J===26||J===27){H=A=W;continue g}X=X.parentNode}}H=H.return}S9(function(){var R=A,u=CA(w),T=[];g:{var B=gh.get(g);if(B!==void 0){var x=c2,gg=g;switch(g){case"keypress":if(xO(w)===0)break g;case"keydown":case"keyup":x=dL;break;case"focusin":gg="focus",x=db;break;case"focusout":gg="blur",x=db;break;case"beforeblur":case"afterblur":x=db;break;case"click":if(w.button===2)break g;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=E7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=VL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gF;break;case p7:case d7:case a7:x=yL;break;case s7:x=wF;break;case"scroll":case"scrollend":x=kL;break;case"wheel":x=HF;break;case"copy":case"cut":case"paste":x=iL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=y7;break;case"toggle":case"beforetoggle":x=qF}var bg=(v&4)!==0,Q0=!bg&&(g==="scroll"||g==="scrollend"),tg=bg?B!==null?B+"Capture":null:B;bg=[];for(var F=R,I;F!==null;){var Z=F;if(I=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||I===null||tg===null||(Z=p6(F,tg),Z!=null&&bg.push(K8(F,Z,I))),Q0)break;F=F.return}0<bg.length&&(B=new x(B,gg,null,w,u),T.push({event:B,listeners:bg}))}}if((v&7)===0){g:{if(B=g==="mouseover"||g==="pointerover",x=g==="mouseout"||g==="pointerout",B&&w!==T8&&(gg=w.relatedTarget||w.fromElement)&&(hg(gg)||gg[mr]))break g;if(x||B){if(B=u.window===u?u:(B=u.ownerDocument)?B.defaultView||B.parentWindow:window,x){if(gg=w.relatedTarget||w.toElement,x=R,gg=gg?hg(gg):null,gg!==null&&(Q0=n(gg),bg=gg.tag,gg!==Q0||bg!==5&&bg!==27&&bg!==6))gg=null}else x=null,gg=R;if(x!==gg){if(bg=E7,Z="onMouseLeave",tg="onMouseEnter",F="mouse",g==="pointerout"||g==="pointerover")bg=y7,Z="onPointerLeave",tg="onPointerEnter",F="pointer";if(Q0=x==null?B:Sg(x),I=gg==null?B:Sg(gg),B=new bg(Z,F+"leave",x,w,u),B.target=Q0,B.relatedTarget=I,Z=null,hg(u)===R&&(bg=new bg(tg,F+"enter",gg,w,u),bg.target=I,bg.relatedTarget=Q0,Z=bg),Q0=Z,x&&gg)v:{bg=LU,tg=x,F=gg,I=0;for(Z=tg;Z;Z=bg(Z))I++;Z=0;for(var m=F;m;m=bg(m))Z++;for(;0<I-Z;)tg=bg(tg),I--;for(;0<Z-I;)F=bg(F),Z--;for(;I--;){if(tg===F||F!==null&&tg===F.alternate){bg=tg;break v}tg=bg(tg),F=bg(F)}bg=null}else bg=null;x!==null&&UG(T,B,x,bg,!1),gg!==null&&Q0!==null&&UG(T,Q0,gg,bg,!0)}}}g:{if(B=R?Sg(R):window,x=B.nodeName&&B.nodeName.toLowerCase(),x==="select"||x==="input"&&B.type==="file")var qg=V9;else if(k9(B))if(c7)qg=oz;else{qg=lz;var ug=Sz}else x=B.nodeName,!x||x.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?R&&c6(R.elementType)&&(qg=V9):qg=xz;if(qg&&(qg=qg(g,R))){m9(T,qg,w,u);break g}ug&&ug(g,B,R),g==="focusout"&&R&&B.type==="number"&&R.memoizedProps.value!=null&&BA(B,"number",B.value)}switch(ug=R?Sg(R):window,g){case"focusin":if(k9(ug)||ug.contentEditable==="true")r6=ug,sb=R,k8=null;break;case"focusout":k8=sb=r6=null;break;case"mousedown":gW=!0;break;case"contextmenu":case"mouseup":case"dragend":gW=!1,n9(T,w,u);break;case"selectionchange":if(WF)break;case"keydown":case"keyup":n9(T,w,u)}var $g;if(ab)g:{switch(g){case"compositionstart":var Jg="onCompositionStart";break g;case"compositionend":Jg="onCompositionEnd";break g;case"compositionupdate":Jg="onCompositionUpdate";break g}Jg=void 0}else w6?o9(g,w)&&(Jg="onCompositionEnd"):g==="keydown"&&w.keyCode===j7&&(Jg="onCompositionStart");if(Jg&&(i7&&w.locale!=="ko"&&(w6||Jg!=="onCompositionStart"?Jg==="onCompositionEnd"&&w6&&($g=l9()):(Vr=u,cb=("value"in Vr)?Vr.value:Vr.textContent,w6=!0)),ug=N2(R,Jg),0<ug.length&&(Jg=new _7(Jg,g,null,w,u),T.push({event:Jg,listeners:ug}),$g?Jg.data=$g:($g=D9(w),$g!==null&&(Jg.data=$g)))),$g=PF?Zz(g,w):uz(g,w))Jg=N2(R,"onBeforeInput"),0<Jg.length&&(ug=new nL("onBeforeInput","beforeinput",null,w,u),T.push({event:ug,listeners:Jg}),ug.data=$g);UU(T,g,R,w,u)}$G(T,v)})}function K8(g,v,w){return{instance:g,listener:v,currentTarget:w}}function N2(g,v){for(var w=v+"Capture",H=[];g!==null;){var q=g,A=q.stateNode;if(q=q.tag,q!==5&&q!==26&&q!==27||A===null||(q=p6(g,w),q!=null&&H.unshift(K8(g,q,A)),q=p6(g,v),q!=null&&H.push(K8(g,q,A))),g.tag===3)return H;g=g.return}return[]}function LU(g){if(g===null)return null;do g=g.return;while(g&&g.tag!==5&&g.tag!==27);return g?g:null}function UG(g,v,w,H,q){for(var A=v._reactName,W=[];w!==null&&w!==H;){var X=w,J=X.alternate,R=X.stateNode;if(X=X.tag,J!==null&&J===H)break;X!==5&&X!==26&&X!==27||R===null||(J=R,q?(R=p6(w,A),R!=null&&W.unshift(K8(w,R,J))):q||(R=p6(w,A),R!=null&&W.push(K8(w,R,J)))),w=w.return}W.length!==0&&g.push({event:v,listeners:W})}function Wb(g,v){Fz(g,v),g!=="input"&&g!=="textarea"&&g!=="select"||v==null||v.value!==null||m7||(m7=!0,g==="select"&&v.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",g):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",g));var w={registrationNameDependencies:j5,possibleRegistrationNames:jb};c6(g)||typeof v.is==="string"||Iz(g,v,w),v.contentEditable&&!v.suppressContentEditableWarning&&v.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function w1(g,v,w,H){v!==w&&(w=lr(w),lr(v)!==w&&(H[g]=v))}function FU(g,v,w){v.forEach(function(H){w[BG(H)]=H==="style"?Xb(g):g.getAttribute(H)})}function hw(g,v){v===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",g,g,g):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",g,typeof v)}function LG(g,v){return g=g.namespaceURI===f2||g.namespaceURI===a4?g.ownerDocument.createElementNS(g.namespaceURI,g.tagName):g.ownerDocument.createElement(g.tagName),g.innerHTML=v,g.innerHTML}function lr(g){return Jv(g)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",m1(g)),v1(g)),(typeof g==="string"?g:""+g).replace(DF,`
`).replace(kF,"")}function FG(g,v){return v=lr(v),lr(g)===v?!0:!1}function X0(g,v,w,H,q,A){switch(w){case"children":if(typeof H==="string")lO(H,v,!1),v==="body"||v==="textarea"&&H===""||e6(g,H);else if(typeof H==="number"||typeof H==="bigint")lO(""+H,v,!1),v!=="body"&&e6(g,""+H);break;case"className":TO(g,"class",H);break;case"tabIndex":TO(g,"tabindex",H);break;case"dir":case"role":case"viewBox":case"width":case"height":TO(g,w,H);break;case"style":u9(g,H,A);break;case"data":if(v!=="object"){TO(g,"data",H);break}case"src":case"href":if(H===""&&(v!=="a"||w!=="href")){w==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',w,w):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',w,w),g.removeAttribute(w);break}if(H==null||typeof H==="function"||typeof H==="symbol"||typeof H==="boolean"){g.removeAttribute(w);break}b0(H,w),H=t6(""+H),g.setAttribute(w,H);break;case"action":case"formAction":if(H!=null&&(v==="form"?w==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof H==="function"&&(q.encType==null&&q.method==null||lq||(lq=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),q.target==null||Sq||(Sq=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):v==="input"||v==="button"?w==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):v!=="input"||q.type==="submit"||q.type==="image"||Cq?v!=="button"||q.type==null||q.type==="submit"||Cq?typeof H==="function"&&(q.name==null||LJ||(LJ=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),q.formEncType==null&&q.formMethod==null||lq||(lq=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),q.formTarget==null||Sq||(Sq=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Cq=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Cq=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):w==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof H==="function"){g.setAttribute(w,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof A==="function"&&(w==="formAction"?(v!=="input"&&X0(g,v,"name",q.name,q,null),X0(g,v,"formEncType",q.formEncType,q,null),X0(g,v,"formMethod",q.formMethod,q,null),X0(g,v,"formTarget",q.formTarget,q,null)):(X0(g,v,"encType",q.encType,q,null),X0(g,v,"method",q.method,q,null),X0(g,v,"target",q.target,q,null)));if(H==null||typeof H==="symbol"||typeof H==="boolean"){g.removeAttribute(w);break}b0(H,w),H=t6(""+H),g.setAttribute(w,H);break;case"onClick":H!=null&&(typeof H!=="function"&&hw(w,H),g.onclick=Dw);break;case"onScroll":H!=null&&(typeof H!=="function"&&hw(w,H),cg("scroll",g));break;case"onScrollEnd":H!=null&&(typeof H!=="function"&&hw(w,H),cg("scrollend",g));break;case"dangerouslySetInnerHTML":if(H!=null){if(typeof H!=="object"||!("__html"in H))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(w=H.__html,w!=null){if(q.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=w}}break;case"multiple":g.multiple=H&&typeof H!=="function"&&typeof H!=="symbol";break;case"muted":g.muted=H&&typeof H!=="function"&&typeof H!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(H==null||typeof H==="function"||typeof H==="boolean"||typeof H==="symbol"){g.removeAttribute("xlink:href");break}b0(H,w),w=t6(""+H),g.setAttributeNS(q4,"xlink:href",w);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":H!=null&&typeof H!=="function"&&typeof H!=="symbol"?(b0(H,w),g.setAttribute(w,""+H)):g.removeAttribute(w);break;case"inert":H!==""||xq[w]||(xq[w]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",w));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":H&&typeof H!=="function"&&typeof H!=="symbol"?g.setAttribute(w,""):g.removeAttribute(w);break;case"capture":case"download":H===!0?g.setAttribute(w,""):H!==!1&&H!=null&&typeof H!=="function"&&typeof H!=="symbol"?(b0(H,w),g.setAttribute(w,H)):g.removeAttribute(w);break;case"cols":case"rows":case"size":case"span":H!=null&&typeof H!=="function"&&typeof H!=="symbol"&&!isNaN(H)&&1<=H?(b0(H,w),g.setAttribute(w,H)):g.removeAttribute(w);break;case"rowSpan":case"start":H==null||typeof H==="function"||typeof H==="symbol"||isNaN(H)?g.removeAttribute(w):(b0(H,w),g.setAttribute(w,H));break;case"popover":cg("beforetoggle",g),cg("toggle",g),uO(g,"popover",H);break;case"xlinkActuate":ow(g,q4,"xlink:actuate",H);break;case"xlinkArcrole":ow(g,q4,"xlink:arcrole",H);break;case"xlinkRole":ow(g,q4,"xlink:role",H);break;case"xlinkShow":ow(g,q4,"xlink:show",H);break;case"xlinkTitle":ow(g,q4,"xlink:title",H);break;case"xlinkType":ow(g,q4,"xlink:type",H);break;case"xmlBase":ow(g,eW,"xml:base",H);break;case"xmlLang":ow(g,eW,"xml:lang",H);break;case"xmlSpace":ow(g,eW,"xml:space",H);break;case"is":A!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),uO(g,"is",H);break;case"innerText":case"textContent":break;case"popoverTarget":FJ||H==null||typeof H!=="object"||(FJ=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",H));default:!(2<w.length)||w[0]!=="o"&&w[0]!=="O"||w[1]!=="n"&&w[1]!=="N"?(w=T9(w),uO(g,w,H)):j5.hasOwnProperty(w)&&H!=null&&typeof H!=="function"&&hw(w,H)}}function Mb(g,v,w,H,q,A){switch(w){case"style":u9(g,H,A);break;case"dangerouslySetInnerHTML":if(H!=null){if(typeof H!=="object"||!("__html"in H))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(w=H.__html,w!=null){if(q.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=w}}break;case"children":typeof H==="string"?e6(g,H):(typeof H==="number"||typeof H==="bigint")&&e6(g,""+H);break;case"onScroll":H!=null&&(typeof H!=="function"&&hw(w,H),cg("scroll",g));break;case"onScrollEnd":H!=null&&(typeof H!=="function"&&hw(w,H),cg("scrollend",g));break;case"onClick":H!=null&&(typeof H!=="function"&&hw(w,H),g.onclick=Dw);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(j5.hasOwnProperty(w))H!=null&&typeof H!=="function"&&hw(w,H);else g:{if(w[0]==="o"&&w[1]==="n"&&(q=w.endsWith("Capture"),v=w.slice(2,q?w.length-7:void 0),A=g[B1]||null,A=A!=null?A[w]:null,typeof A==="function"&&g.removeEventListener(v,A,q),typeof H==="function")){typeof A!=="function"&&A!==null&&(w in g?g[w]=null:g.hasAttribute(w)&&g.removeAttribute(w)),g.addEventListener(v,H,q);break g}w in g?g[w]=H:H===!0?g.setAttribute(w,""):uO(g,w,H)}}}function X1(g,v,w){switch(Wb(v,w),v){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cg("error",g),cg("load",g);var H=!1,q=!1,A;for(A in w)if(w.hasOwnProperty(A)){var W=w[A];if(W!=null)switch(A){case"src":H=!0;break;case"srcSet":q=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:X0(g,v,A,W,w,null)}}q&&X0(g,v,"srcSet",w.srcSet,w,null),H&&X0(g,v,"src",w.src,w,null);return;case"input":Ur("input",w),cg("invalid",g);var X=A=W=q=null,J=null,R=null;for(H in w)if(w.hasOwnProperty(H)){var u=w[H];if(u!=null)switch(H){case"name":q=u;break;case"type":W=u;break;case"checked":J=u;break;case"defaultChecked":R=u;break;case"value":A=u;break;case"defaultValue":X=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:X0(g,v,H,u,w,null)}}Y9(g,w),G9(g,A,X,J,R,W,q,!1);return;case"select":Ur("select",w),cg("invalid",g),H=W=A=null;for(q in w)if(w.hasOwnProperty(q)&&(X=w[q],X!=null))switch(q){case"value":A=X;break;case"defaultValue":W=X;break;case"multiple":H=X;default:X0(g,v,q,X,w,null)}Q9(g,w),v=A,w=W,g.multiple=!!H,v!=null?u4(g,!!H,v,!1):w!=null&&u4(g,!!H,w,!0);return;case"textarea":Ur("textarea",w),cg("invalid",g),A=q=H=null;for(W in w)if(w.hasOwnProperty(W)&&(X=w[W],X!=null))switch(W){case"value":H=X;break;case"defaultValue":q=X;break;case"children":A=X;break;case"dangerouslySetInnerHTML":if(X!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:X0(g,v,W,X,w,null)}R9(g,w),$9(g,H,q,A);return;case"option":h9(g,w);for(J in w)if(w.hasOwnProperty(J)&&(H=w[J],H!=null))switch(J){case"selected":g.selected=H&&typeof H!=="function"&&typeof H!=="symbol";break;default:X0(g,v,J,H,w,null)}return;case"dialog":cg("beforetoggle",g),cg("toggle",g),cg("cancel",g),cg("close",g);break;case"iframe":case"object":cg("load",g);break;case"video":case"audio":for(H=0;H<YH.length;H++)cg(YH[H],g);break;case"image":cg("error",g),cg("load",g);break;case"details":cg("toggle",g);break;case"embed":case"source":case"link":cg("error",g),cg("load",g);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in w)if(w.hasOwnProperty(R)&&(H=w[R],H!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:X0(g,v,R,H,w,null)}return;default:if(c6(v)){for(u in w)w.hasOwnProperty(u)&&(H=w[u],H!==void 0&&Mb(g,v,u,H,w,void 0));return}}for(X in w)w.hasOwnProperty(X)&&(H=w[X],H!=null&&X0(g,v,X,H,w,null))}function BU(g,v,w,H){switch(Wb(v,H),v){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var q=null,A=null,W=null,X=null,J=null,R=null,u=null;for(x in w){var T=w[x];if(w.hasOwnProperty(x)&&T!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":J=T;default:H.hasOwnProperty(x)||X0(g,v,x,null,H,T)}}for(var B in H){var x=H[B];if(T=w[B],H.hasOwnProperty(B)&&(x!=null||T!=null))switch(B){case"type":A=x;break;case"name":q=x;break;case"checked":R=x;break;case"defaultChecked":u=x;break;case"value":W=x;break;case"defaultValue":X=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:x!==T&&X0(g,v,B,x,H,T)}}v=w.type==="checkbox"||w.type==="radio"?w.checked!=null:w.value!=null,H=H.type==="checkbox"||H.type==="radio"?H.checked!=null:H.value!=null,v||!H||UJ||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),UJ=!0),!v||H||zJ||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),zJ=!0),FA(g,W,X,J,R,u,A,q);return;case"select":x=W=X=B=null;for(A in w)if(J=w[A],w.hasOwnProperty(A)&&J!=null)switch(A){case"value":break;case"multiple":x=J;default:H.hasOwnProperty(A)||X0(g,v,A,null,H,J)}for(q in H)if(A=H[q],J=w[q],H.hasOwnProperty(q)&&(A!=null||J!=null))switch(q){case"value":B=A;break;case"defaultValue":X=A;break;case"multiple":W=A;default:A!==J&&X0(g,v,q,A,H,J)}H=X,v=W,w=x,B!=null?u4(g,!!v,B,!1):!!w!==!!v&&(H!=null?u4(g,!!v,H,!0):u4(g,!!v,v?[]:"",!1));return;case"textarea":x=B=null;for(X in w)if(q=w[X],w.hasOwnProperty(X)&&q!=null&&!H.hasOwnProperty(X))switch(X){case"value":break;case"children":break;default:X0(g,v,X,null,H,q)}for(W in H)if(q=H[W],A=w[W],H.hasOwnProperty(W)&&(q!=null||A!=null))switch(W){case"value":B=q;break;case"defaultValue":x=q;break;case"children":break;case"dangerouslySetInnerHTML":if(q!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:q!==A&&X0(g,v,W,q,H,A)}K9(g,B,x);return;case"option":for(var gg in w)if(B=w[gg],w.hasOwnProperty(gg)&&B!=null&&!H.hasOwnProperty(gg))switch(gg){case"selected":g.selected=!1;break;default:X0(g,v,gg,null,H,B)}for(J in H)if(B=H[J],x=w[J],H.hasOwnProperty(J)&&B!==x&&(B!=null||x!=null))switch(J){case"selected":g.selected=B&&typeof B!=="function"&&typeof B!=="symbol";break;default:X0(g,v,J,B,H,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var bg in w)B=w[bg],w.hasOwnProperty(bg)&&B!=null&&!H.hasOwnProperty(bg)&&X0(g,v,bg,null,H,B);for(R in H)if(B=H[R],x=w[R],H.hasOwnProperty(R)&&B!==x&&(B!=null||x!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(v+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:X0(g,v,R,B,H,x)}return;default:if(c6(v)){for(var Q0 in w)B=w[Q0],w.hasOwnProperty(Q0)&&B!==void 0&&!H.hasOwnProperty(Q0)&&Mb(g,v,Q0,void 0,H,B);for(u in H)B=H[u],x=w[u],!H.hasOwnProperty(u)||B===x||B===void 0&&x===void 0||Mb(g,v,u,B,H,x);return}}for(var tg in w)B=w[tg],w.hasOwnProperty(tg)&&B!=null&&!H.hasOwnProperty(tg)&&X0(g,v,tg,null,H,B);for(T in H)B=H[T],x=w[T],!H.hasOwnProperty(T)||B===x||B==null&&x==null||X0(g,v,T,B,H,x)}function BG(g){switch(g){case"class":return"className";case"for":return"htmlFor";default:return g}}function Xb(g){var v={};g=g.style;for(var w=0;w<g.length;w++){var H=g[w];v[H]=g.getPropertyValue(H)}return v}function IG(g,v,w){if(v!=null&&typeof v!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var H,q=H="",A;for(A in v)if(v.hasOwnProperty(A)){var W=v[A];W!=null&&typeof W!=="boolean"&&W!==""&&(A.indexOf("--")===0?(y6(W,A),H+=q+A+":"+(""+W).trim()):typeof W!=="number"||W===0||D7.has(A)?(y6(W,A),H+=q+A.replace(C7,"-$1").toLowerCase().replace(S7,"-ms-")+":"+(""+W).trim()):H+=q+A.replace(C7,"-$1").toLowerCase().replace(S7,"-ms-")+":"+W+"px",q=";")}H=H||null,v=g.getAttribute("style"),v!==H&&(H=lr(H),lr(v)!==H&&(w.style=Xb(g)))}}function Kv(g,v,w,H,q,A){if(q.delete(w),g=g.getAttribute(w),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(b0(H,v),g===""+H)return}w1(v,g,H,A)}function NG(g,v,w,H,q,A){if(q.delete(w),g=g.getAttribute(w),g===null){switch(typeof H){case"function":case"symbol":return}if(!H)return}else switch(typeof H){case"function":case"symbol":break;default:if(H)return}w1(v,g,H,A)}function Yb(g,v,w,H,q,A){if(q.delete(w),g=g.getAttribute(w),g===null)switch(typeof H){case"undefined":case"function":case"symbol":return}else if(H!=null)switch(typeof H){case"function":case"symbol":break;default:if(b0(H,w),g===""+H)return}w1(v,g,H,A)}function ZG(g,v,w,H,q,A){if(q.delete(w),g=g.getAttribute(w),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(H))return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(!isNaN(H)&&(b0(H,v),g===""+H))return}w1(v,g,H,A)}function Gb(g,v,w,H,q,A){if(q.delete(w),g=g.getAttribute(w),g===null)switch(typeof H){case"undefined":case"function":case"symbol":case"boolean":return}else if(H!=null)switch(typeof H){case"function":case"symbol":case"boolean":break;default:if(b0(H,v),w=t6(""+H),g===w)return}w1(v,g,H,A)}function uG(g,v,w,H){for(var q={},A=new Set,W=g.attributes,X=0;X<W.length;X++)switch(W[X].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:A.add(W[X].name)}if(c6(v)){for(var J in w)if(w.hasOwnProperty(J)){var R=w[J];if(R!=null){if(j5.hasOwnProperty(J))typeof R!=="function"&&hw(J,R);else if(w.suppressHydrationWarning!==!0)switch(J){case"children":typeof R!=="string"&&typeof R!=="number"||w1("children",g.textContent,R,q);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":W=g.innerHTML,R=R?R.__html:void 0,R!=null&&(R=LG(g,R),w1(J,W,R,q));continue;case"style":A.delete(J),IG(g,R,q);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":A.delete(J.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",J);continue;case"className":A.delete("class"),W=W9(g,"class",R),w1("className",W,R,q);continue;default:H.context===Hr&&v!=="svg"&&v!=="math"?A.delete(J.toLowerCase()):A.delete(J),W=W9(g,J,R),w1(J,W,R,q)}}}}else for(R in w)if(w.hasOwnProperty(R)&&(J=w[R],J!=null)){if(j5.hasOwnProperty(R))typeof J!=="function"&&hw(R,J);else if(w.suppressHydrationWarning!==!0)switch(R){case"children":typeof J!=="string"&&typeof J!=="number"||w1("children",g.textContent,J,q);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":W=g.innerHTML,J=J?J.__html:void 0,J!=null&&(J=LG(g,J),W!==J&&(q[R]={__html:W}));continue;case"className":Kv(g,R,"class",J,A,q);continue;case"tabIndex":Kv(g,R,"tabindex",J,A,q);continue;case"style":A.delete(R),IG(g,J,q);continue;case"multiple":A.delete(R),w1(R,g.multiple,J,q);continue;case"muted":A.delete(R),w1(R,g.muted,J,q);continue;case"autoFocus":A.delete("autofocus"),w1(R,g.autofocus,J,q);continue;case"data":if(v!=="object"){A.delete(R),W=g.getAttribute("data"),w1(R,W,J,q);continue}case"src":case"href":if(!(J!==""||v==="a"&&R==="href"||v==="object"&&R==="data")){R==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R);continue}Gb(g,R,R,J,A,q);continue;case"action":case"formAction":if(W=g.getAttribute(R),typeof J==="function"){A.delete(R.toLowerCase()),R==="formAction"?(A.delete("name"),A.delete("formenctype"),A.delete("formmethod"),A.delete("formtarget")):(A.delete("enctype"),A.delete("method"),A.delete("target"));continue}else if(W===mF){A.delete(R.toLowerCase()),w1(R,"function",J,q);continue}Gb(g,R,R.toLowerCase(),J,A,q);continue;case"xlinkHref":Gb(g,R,"xlink:href",J,A,q);continue;case"contentEditable":Yb(g,R,"contenteditable",J,A,q);continue;case"spellCheck":Yb(g,R,"spellcheck",J,A,q);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Yb(g,R,R,J,A,q);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":NG(g,R,R.toLowerCase(),J,A,q);continue;case"capture":case"download":g:{X=g;var u=W=R,T=q;if(A.delete(u),X=X.getAttribute(u),X===null)switch(typeof J){case"undefined":case"function":case"symbol":break g;default:if(J===!1)break g}else if(J!=null)switch(typeof J){case"function":case"symbol":break;case"boolean":if(J===!0&&X==="")break g;break;default:if(b0(J,W),X===""+J)break g}w1(W,X,J,T)}continue;case"cols":case"rows":case"size":case"span":g:{if(X=g,u=W=R,T=q,A.delete(u),X=X.getAttribute(u),X===null)switch(typeof J){case"undefined":case"function":case"symbol":case"boolean":break g;default:if(isNaN(J)||1>J)break g}else if(J!=null)switch(typeof J){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(J)||1>J)&&(b0(J,W),X===""+J))break g}w1(W,X,J,T)}continue;case"rowSpan":ZG(g,R,"rowspan",J,A,q);continue;case"start":ZG(g,R,R,J,A,q);continue;case"xHeight":Kv(g,R,"x-height",J,A,q);continue;case"xlinkActuate":Kv(g,R,"xlink:actuate",J,A,q);continue;case"xlinkArcrole":Kv(g,R,"xlink:arcrole",J,A,q);continue;case"xlinkRole":Kv(g,R,"xlink:role",J,A,q);continue;case"xlinkShow":Kv(g,R,"xlink:show",J,A,q);continue;case"xlinkTitle":Kv(g,R,"xlink:title",J,A,q);continue;case"xlinkType":Kv(g,R,"xlink:type",J,A,q);continue;case"xmlBase":Kv(g,R,"xml:base",J,A,q);continue;case"xmlLang":Kv(g,R,"xml:lang",J,A,q);continue;case"xmlSpace":Kv(g,R,"xml:space",J,A,q);continue;case"inert":J!==""||xq[R]||(xq[R]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",R)),NG(g,R,R,J,A,q);continue;default:if(!(2<R.length)||R[0]!=="o"&&R[0]!=="O"||R[1]!=="n"&&R[1]!=="N"){X=T9(R),W=!1,H.context===Hr&&v!=="svg"&&v!=="math"?A.delete(X.toLowerCase()):(u=R.toLowerCase(),u=n2.hasOwnProperty(u)?n2[u]||null:null,u!==null&&u!==R&&(W=!0,A.delete(u)),A.delete(X));g:if(u=g,T=X,X=J,i6(T))if(u.hasAttribute(T))u=u.getAttribute(T),b0(X,T),X=u===""+X?X:u;else{switch(typeof X){case"function":case"symbol":break g;case"boolean":if(u=T.toLowerCase().slice(0,5),u!=="data-"&&u!=="aria-")break g}X=X===void 0?void 0:null}else X=void 0;W||w1(R,X,J,q)}}}return 0<A.size&&w.suppressHydrationWarning!==!0&&FU(g,A,q),Object.keys(q).length===0?null:q}function IU(g,v){switch(g.length){case 0:return"";case 1:return g[0];case 2:return g[0]+" "+v+" "+g[1];default:return g.slice(0,-1).join(", ")+", "+v+" "+g[g.length-1]}}function TG(g){switch(g){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NU(){if(typeof performance.getEntriesByType==="function"){for(var g=0,v=0,w=performance.getEntriesByType("resource"),H=0;H<w.length;H++){var q=w[H],A=q.transferSize,W=q.initiatorType,X=q.duration;if(A&&X&&TG(W)){W=0,X=q.responseEnd;for(H+=1;H<w.length;H++){var J=w[H],R=J.startTime;if(R>X)break;var{transferSize:u,initiatorType:T}=J;u&&TG(T)&&(J=J.responseEnd,W+=u*(J<X?1:(X-R)/(J-R)))}if(--H,v+=8*(A+W)/(q.duration/1000),g++,10<g)break}}if(0<g)return v/g/1e6}return navigator.connection&&(g=navigator.connection.downlink,typeof g==="number")?g:5}function Z2(g){return g.nodeType===9?g:g.ownerDocument}function CG(g){switch(g){case a4:return Z6;case f2:return Dq;default:return Hr}}function SG(g,v){if(g===Hr)switch(v){case"svg":return Z6;case"math":return Dq;default:return Hr}return g===Z6&&v==="foreignObject"?Hr:g}function hb(g,v){return g==="textarea"||g==="noscript"||typeof v.children==="string"||typeof v.children==="number"||typeof v.children==="bigint"||typeof v.dangerouslySetInnerHTML==="object"&&v.dangerouslySetInnerHTML!==null&&v.dangerouslySetInnerHTML.__html!=null}function ZU(){var g=window.event;if(g&&g.type==="popstate"){if(g===dW)return!1;return dW=g,!0}return dW=null,!1}function $8(){var g=window.event;return g&&g!==JH?g.type:null}function z8(){var g=window.event;return g&&g!==JH?g.timeStamp:-1.1}function uU(g){setTimeout(function(){throw g})}function TU(g,v,w){switch(v){case"button":case"input":case"select":case"textarea":w.autoFocus&&g.focus();break;case"img":w.src?g.src=w.src:w.srcSet&&(g.srcset=w.srcSet)}}function CU(){}function SU(g,v,w,H){BU(g,v,w,H),g[B1]=H}function lG(g){e6(g,"")}function lU(g,v,w){g.nodeValue=w}function xG(g){if(!g.__reactWarnedAboutChildrenConflict){var v=g[B1]||null;if(v!==null){var w=Cg(g);w!==null&&(typeof v.children==="string"||typeof v.children==="number"?(g.__reactWarnedAboutChildrenConflict=!0,Pg(w,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):v.dangerouslySetInnerHTML!=null&&(g.__reactWarnedAboutChildrenConflict=!0,Pg(w,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function xr(g){return g==="head"}function xU(g,v){g.removeChild(v)}function oU(g,v){(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g).removeChild(v)}function oG(g,v){var w=v,H=0;do{var q=w.nextSibling;if(g.removeChild(w),q&&q.nodeType===8)if(w=q.data,w===hH||w===oq){if(H===0){g.removeChild(q),n4(v);return}H--}else if(w===GH||w===H5||w===P4||w===N6||w===A4)H++;else if(w===EF)U8(g.ownerDocument.documentElement);else if(w===yF){w=g.ownerDocument.head,U8(w);for(var A=w.firstChild;A;){var{nextSibling:W,nodeName:X}=A;A[u8]||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&A.rel.toLowerCase()==="stylesheet"||w.removeChild(A),A=W}}else w===_F&&U8(g.ownerDocument.body);w=q}while(w);n4(v)}function DG(g,v){var w=g;g=0;do{var H=w.nextSibling;if(w.nodeType===1?v?(w._stashedDisplay=w.style.display,w.style.display="none"):(w.style.display=w._stashedDisplay||"",w.getAttribute("style")===""&&w.removeAttribute("style")):w.nodeType===3&&(v?(w._stashedText=w.nodeValue,w.nodeValue=""):w.nodeValue=w._stashedText||""),H&&H.nodeType===8)if(w=H.data,w===hH)if(g===0)break;else g--;else w!==GH&&w!==H5&&w!==P4&&w!==N6||g++;w=H}while(w)}function DU(g){DG(g,!0)}function kU(g){g=g.style,typeof g.setProperty==="function"?g.setProperty("display","none","important"):g.display="none"}function mU(g){g.nodeValue=""}function VU(g){DG(g,!1)}function EU(g,v){v=v[jF],v=v!==void 0&&v!==null&&v.hasOwnProperty("display")?v.display:null,g.style.display=v==null||typeof v==="boolean"?"":(""+v).trim()}function _U(g,v){g.nodeValue=v}function Jb(g){var v=g.firstChild;v&&v.nodeType===10&&(v=v.nextSibling);for(;v;){var w=v;switch(v=v.nextSibling,w.nodeName){case"HTML":case"HEAD":case"BODY":Jb(w),Og(w);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(w.rel.toLowerCase()==="stylesheet")continue}g.removeChild(w)}}function yU(g,v,w,H){for(;g.nodeType===1;){var q=w;if(g.nodeName.toLowerCase()!==v.toLowerCase()){if(!H&&(g.nodeName!=="INPUT"||g.type!=="hidden"))break}else if(!H)if(v==="input"&&g.type==="hidden"){b0(q.name,"name");var A=q.name==null?null:""+q.name;if(q.type==="hidden"&&g.getAttribute("name")===A)return g}else return g;else if(!g[u8])switch(v){case"meta":if(!g.hasAttribute("itemprop"))break;return g;case"link":if(A=g.getAttribute("rel"),A==="stylesheet"&&g.hasAttribute("data-precedence"))break;else if(A!==q.rel||g.getAttribute("href")!==(q.href==null||q.href===""?null:q.href)||g.getAttribute("crossorigin")!==(q.crossOrigin==null?null:q.crossOrigin)||g.getAttribute("title")!==(q.title==null?null:q.title))break;return g;case"style":if(g.hasAttribute("data-precedence"))break;return g;case"script":if(A=g.getAttribute("src"),(A!==(q.src==null?null:q.src)||g.getAttribute("type")!==(q.type==null?null:q.type)||g.getAttribute("crossorigin")!==(q.crossOrigin==null?null:q.crossOrigin))&&A&&g.hasAttribute("async")&&!g.hasAttribute("itemprop"))break;return g;default:return g}if(g=wv(g.nextSibling),g===null)break}return null}function jU(g,v,w){if(v==="")return null;for(;g.nodeType!==3;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!w)return null;if(g=wv(g.nextSibling),g===null)return null}return g}function kG(g,v){for(;g.nodeType!==8;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!v)return null;if(g=wv(g.nextSibling),g===null)return null}return g}function Qb(g){return g.data===H5||g.data===P4}function Rb(g){return g.data===N6||g.data===H5&&g.ownerDocument.readyState!==IJ}function iU(g,v){var w=g.ownerDocument;if(g.data===P4)g._reactRetry=v;else if(g.data!==H5||w.readyState!==IJ)v();else{var H=function(){v(),w.removeEventListener("DOMContentLoaded",H)};w.addEventListener("DOMContentLoaded",H),g._reactRetry=H}}function wv(g){for(;g!=null;g=g.nextSibling){var v=g.nodeType;if(v===1||v===3)break;if(v===8){if(v=g.data,v===GH||v===N6||v===H5||v===P4||v===A4||v===cW||v===BJ)break;if(v===hH||v===oq)return null}}return g}function mG(g){if(g.nodeType===1){for(var v=g.nodeName.toLowerCase(),w={},H=g.attributes,q=0;q<H.length;q++){var A=H[q];w[BG(A.name)]=A.name.toLowerCase()==="style"?Xb(g):A.value}return{type:v,props:w}}return g.nodeType===8?g.data===A4?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:g.nodeValue}function VG(g,v,w){return w===null||w[VF]!==!0?(g.nodeValue===v?g=null:(v=lr(v),g=lr(g.nodeValue)===v?null:g.nodeValue),g):null}function Kb(g){g=g.nextSibling;for(var v=0;g;){if(g.nodeType===8){var w=g.data;if(w===hH||w===oq){if(v===0)return wv(g.nextSibling);v--}else w!==GH&&w!==N6&&w!==H5&&w!==P4&&w!==A4||v++}g=g.nextSibling}return null}function EG(g){g=g.previousSibling;for(var v=0;g;){if(g.nodeType===8){var w=g.data;if(w===GH||w===N6||w===H5||w===P4||w===A4){if(v===0)return g;v--}else w!==hH&&w!==oq||v++}g=g.previousSibling}return null}function fU(g){n4(g)}function nU(g){n4(g)}function eU(g){n4(g)}function _G(g,v,w,H,q){switch(q&&TA(g,H.ancestorInfo),v=Z2(w),g){case"html":if(g=v.documentElement,!g)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"head":if(g=v.head,!g)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"body":if(g=v.body,!g)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return g;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function cU(g,v,w,H){if(!w[mr]&&Cg(w)){var q=w.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",q,q,q)}switch(g){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(q=w.attributes;q.length;)w.removeAttributeNode(q[0]);X1(w,g,v),w[Y1]=H,w[B1]=v}function U8(g){for(var v=g.attributes;v.length;)g.removeAttributeNode(v[0]);Og(g)}function u2(g){return typeof g.getRootNode==="function"?g.getRootNode():g.nodeType===9?g:g.ownerDocument}function yG(g,v,w){var H=u6;if(H&&typeof v==="string"&&v){var q=Rv(v);q='link[rel="'+g+'"][href="'+q+'"]',typeof w==="string"&&(q+='[crossorigin="'+w+'"]'),SJ.has(q)||(SJ.add(q),g={rel:g,crossOrigin:w,href:v},H.querySelector(q)===null&&(v=H.createElement("link"),X1(v,"link",g),zg(v),H.head.appendChild(v)))}}function jG(g,v,w,H){var q=(q=Dr.current)?u2(q):null;if(!q)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(g){case"meta":case"title":return null;case"style":return typeof w.precedence==="string"&&typeof w.href==="string"?(w=i4(w.href),v=g0(q).hoistableStyles,H=v.get(w),H||(H={type:"style",instance:null,count:0,state:null},v.set(w,H)),H):{type:"void",instance:null,count:0,state:null};case"link":if(w.rel==="stylesheet"&&typeof w.href==="string"&&typeof w.precedence==="string"){g=i4(w.href);var A=g0(q).hoistableStyles,W=A.get(g);if(!W&&(q=q.ownerDocument||q,W={type:"stylesheet",instance:null,count:0,state:{loading:W4,preload:null}},A.set(g,W),(A=q.querySelector(L8(g)))&&!A._p&&(W.instance=A,W.state.loading=QH|Tv),!Cv.has(g))){var X={rel:"preload",as:"style",href:w.href,crossOrigin:w.crossOrigin,integrity:w.integrity,media:w.media,hrefLang:w.hrefLang,referrerPolicy:w.referrerPolicy};Cv.set(g,X),A||tU(q,g,X,W.state)}if(v&&H===null)throw w=`

  - `+T2(v)+`
  + `+T2(w),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+w);return W}if(v&&H!==null)throw w=`

  - `+T2(v)+`
  + `+T2(w),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+w);return null;case"script":return v=w.async,w=w.src,typeof w==="string"&&v&&typeof v!=="function"&&typeof v!=="symbol"?(w=f4(w),v=g0(q).hoistableScripts,H=v.get(w),H||(H={type:"script",instance:null,count:0,state:null},v.set(w,H)),H):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+g+'". this is a bug in React.')}}function T2(g){var v=0,w="<link";return typeof g.rel==="string"?(v++,w+=' rel="'+g.rel+'"'):Dv.call(g,"rel")&&(v++,w+=' rel="'+(g.rel===null?"null":"invalid type "+typeof g.rel)+'"'),typeof g.href==="string"?(v++,w+=' href="'+g.href+'"'):Dv.call(g,"href")&&(v++,w+=' href="'+(g.href===null?"null":"invalid type "+typeof g.href)+'"'),typeof g.precedence==="string"?(v++,w+=' precedence="'+g.precedence+'"'):Dv.call(g,"precedence")&&(v++,w+=" precedence={"+(g.precedence===null?"null":"invalid type "+typeof g.precedence)+"}"),Object.getOwnPropertyNames(g).length>v&&(w+=" ..."),w+" />"}function i4(g){return'href="'+Rv(g)+'"'}function L8(g){return'link[rel="stylesheet"]['+g+"]"}function iG(g){return yg({},g,{"data-precedence":g.precedence,precedence:null})}function tU(g,v,w,H){g.querySelector('link[rel="preload"][as="style"]['+v+"]")?H.loading=QH:(v=g.createElement("link"),H.preload=v,v.addEventListener("load",function(){return H.loading|=QH}),v.addEventListener("error",function(){return H.loading|=TJ}),X1(v,"link",w),zg(v),g.head.appendChild(v))}function f4(g){return'[src="'+Rv(g)+'"]'}function F8(g){return"script[async]"+g}function fG(g,v,w){if(v.count++,v.instance===null)switch(v.type){case"style":var H=g.querySelector('style[data-href~="'+Rv(w.href)+'"]');if(H)return v.instance=H,zg(H),H;var q=yg({},w,{"data-href":w.href,"data-precedence":w.precedence,href:null,precedence:null});return H=(g.ownerDocument||g).createElement("style"),zg(H),X1(H,"style",q),C2(H,w.precedence,g),v.instance=H;case"stylesheet":q=i4(w.href);var A=g.querySelector(L8(q));if(A)return v.state.loading|=Tv,v.instance=A,zg(A),A;H=iG(w),(q=Cv.get(q))&&$b(H,q),A=(g.ownerDocument||g).createElement("link"),zg(A);var W=A;return W._p=new Promise(function(X,J){W.onload=X,W.onerror=J}),X1(A,"link",H),v.state.loading|=Tv,C2(A,w.precedence,g),v.instance=A;case"script":if(A=f4(w.src),q=g.querySelector(F8(A)))return v.instance=q,zg(q),q;if(H=w,q=Cv.get(A))H=yg({},w),zb(H,q);return g=g.ownerDocument||g,q=g.createElement("script"),zg(q),X1(q,"link",H),g.head.appendChild(q),v.instance=q;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+v.type+'". this is a bug in React.')}else v.type==="stylesheet"&&(v.state.loading&Tv)===W4&&(H=v.instance,v.state.loading|=Tv,C2(H,w.precedence,g));return v.instance}function C2(g,v,w){for(var H=w.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),q=H.length?H[H.length-1]:null,A=q,W=0;W<H.length;W++){var X=H[W];if(X.dataset.precedence===v)A=X;else if(A!==q)break}A?A.parentNode.insertBefore(g,A.nextSibling):(v=w.nodeType===9?w.head:w,v.insertBefore(g,v.firstChild))}function $b(g,v){g.crossOrigin==null&&(g.crossOrigin=v.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=v.referrerPolicy),g.title==null&&(g.title=v.title)}function zb(g,v){g.crossOrigin==null&&(g.crossOrigin=v.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=v.referrerPolicy),g.integrity==null&&(g.integrity=v.integrity)}function nG(g,v,w){if(kq===null){var H=new Map,q=kq=new Map;q.set(w,H)}else q=kq,H=q.get(w),H||(H=new Map,q.set(w,H));if(H.has(g))return H;H.set(g,null),w=w.getElementsByTagName(g);for(q=0;q<w.length;q++){var A=w[q];if(!(A[u8]||A[Y1]||g==="link"&&A.getAttribute("rel")==="stylesheet")&&A.namespaceURI!==a4){var W=A.getAttribute(v)||"";W=g+W;var X=H.get(W);X?X.push(A):H.set(W,[A])}}return H}function eG(g,v,w){g=g.ownerDocument||g,g.head.insertBefore(w,v==="title"?g.querySelector("head > title"):null)}function pU(g,v,w){var H=!w.ancestorInfo.containerTagInScope;if(w.context===Z6||v.itemProp!=null)return!H||v.itemProp==null||g!=="meta"&&g!=="title"&&g!=="style"&&g!=="link"&&g!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",g,g),!1;switch(g){case"meta":case"title":return!0;case"style":if(typeof v.precedence!=="string"||typeof v.href!=="string"||v.href===""){H&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof v.rel!=="string"||typeof v.href!=="string"||v.href===""||v.onLoad||v.onError){if(v.rel==="stylesheet"&&typeof v.precedence==="string"){g=v.href;var{onError:q,disabled:A}=v;w=[],v.onLoad&&w.push("`onLoad`"),q&&w.push("`onError`"),A!=null&&w.push("`disabled`"),q=IU(w,"and"),q+=w.length===1?" prop":" props",A=w.length===1?"an "+q:"the "+q,w.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',g,A,q)}H&&(typeof v.rel!=="string"||typeof v.href!=="string"||v.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(v.onError||v.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(v.rel){case"stylesheet":return g=v.precedence,v=v.disabled,typeof g!=="string"&&H&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof g==="string"&&v==null;default:return!0}case"script":if(g=v.async&&typeof v.async!=="function"&&typeof v.async!=="symbol",!g||v.onLoad||v.onError||!v.src||typeof v.src!=="string"){H&&(g?v.onLoad||v.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":H&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",g)}return!1}function cG(g){return g.type==="stylesheet"&&(g.state.loading&CJ)===W4?!1:!0}function dU(g,v,w,H){if(w.type==="stylesheet"&&(typeof H.media!=="string"||matchMedia(H.media).matches!==!1)&&(w.state.loading&Tv)===W4){if(w.instance===null){var q=i4(H.href),A=v.querySelector(L8(q));if(A){v=A._p,v!==null&&typeof v==="object"&&typeof v.then==="function"&&(g.count++,g=S2.bind(g),v.then(g,g)),w.state.loading|=Tv,w.instance=A,zg(A);return}A=v.ownerDocument||v,H=iG(H),(q=Cv.get(q))&&$b(H,q),A=A.createElement("link"),zg(A);var W=A;W._p=new Promise(function(X,J){W.onload=X,W.onerror=J}),X1(A,"link",H),w.instance=A}g.stylesheets===null&&(g.stylesheets=new Map),g.stylesheets.set(w,v),(v=w.state.preload)&&(w.state.loading&CJ)===W4&&(g.count++,w=S2.bind(g),v.addEventListener("load",w),v.addEventListener("error",w))}}function aU(g,v){return g.stylesheets&&g.count===0&&l2(g,g.stylesheets),0<g.count||0<g.imgCount?function(w){var H=setTimeout(function(){if(g.stylesheets&&l2(g,g.stylesheets),g.unsuspend){var A=g.unsuspend;g.unsuspend=null,A()}},nF+v);0<g.imgBytes&&sW===0&&(sW=125*NU()*cF);var q=setTimeout(function(){if(g.waitingForImages=!1,g.count===0&&(g.stylesheets&&l2(g,g.stylesheets),g.unsuspend)){var A=g.unsuspend;g.unsuspend=null,A()}},(g.imgBytes>sW?50:eF)+v);return g.unsuspend=w,function(){g.unsuspend=null,clearTimeout(H),clearTimeout(q)}}:null}function S2(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)l2(this,this.stylesheets);else if(this.unsuspend){var g=this.unsuspend;this.unsuspend=null,g()}}}function l2(g,v){g.stylesheets=null,g.unsuspend!==null&&(g.count++,mq=new Map,v.forEach(sU,g),mq=null,S2.call(g))}function sU(g,v){if(!(v.state.loading&Tv)){var w=mq.get(g);if(w)var H=w.get(gM);else{w=new Map,mq.set(g,w);for(var q=g.querySelectorAll("link[data-precedence],style[data-precedence]"),A=0;A<q.length;A++){var W=q[A];if(W.nodeName==="LINK"||W.getAttribute("media")!=="not all")w.set(W.dataset.precedence,W),H=W}H&&w.set(gM,H)}q=v.instance,W=q.getAttribute("data-precedence"),A=w.get(W)||H,A===H&&w.set(gM,q),w.set(W,q),this.count++,H=S2.bind(this),q.addEventListener("load",H),q.addEventListener("error",H),A?A.parentNode.insertBefore(q,A.nextSibling):(g=g.nodeType===9?g.head:g,g.insertBefore(q,g.firstChild)),v.state.loading|=Tv}}function gL(g,v,w,H,q,A,W,X,J){this.tag=1,this.containerInfo=g,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=b4,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Z4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Z4(0),this.hiddenUpdates=Z4(null),this.identifierPrefix=H,this.onUncaughtError=q,this.onCaughtError=A,this.onRecoverableError=W,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=J,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,g=this.pendingUpdatersLaneMap=[];for(v=0;31>v;v++)g.push(new Set);this._debugRootType=w?"hydrateRoot()":"createRoot()"}function tG(g,v,w,H,q,A,W,X,J,R,u,T){return g=new gL(g,v,w,W,J,R,u,T,X),v=KF,A===!0&&(v|=z1|mv),v|=og,A=L(3,null,null,v),g.current=A,A.stateNode=g,v=tA(),D5(v),g.pooledCache=v,D5(v),A.memoizedState={element:H,isDehydrated:w,cache:v},gP(A),g}function pG(g){if(!g)return yr;return g=yr,g}function Ub(g,v,w,H,q,A){if($1&&typeof $1.onScheduleFiberRoot==="function")try{$1.onScheduleFiberRoot(p4,H,w)}catch(W){Kw||(Kw=!0,console.error("React instrumentation encountered an error: %o",W))}q=pG(q),H.context===null?H.context=q:H.pendingContext=q,Rw&&Hv!==null&&!DJ&&(DJ=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,k(Hv)||"Unknown")),H=Nr(v),H.payload={element:w},A=A===void 0?null:A,A!==null&&(typeof A!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",A),H.callback=A),w=Zr(g,H,v),w!==null&&(rw(v,"root.render()",null),Z0(w,g,v),H8(w,g,v))}function dG(g,v){if(g=g.memoizedState,g!==null&&g.dehydrated!==null){var w=g.retryLane;g.retryLane=w!==0&&w<v?w:v}}function Lb(g,v){dG(g,v),(g=g.alternate)&&dG(g,v)}function aG(g){if(g.tag===13||g.tag===31){var v=K1(g,67108864);v!==null&&Z0(v,g,67108864),Lb(g,67108864)}}function sG(g){if(g.tag===13||g.tag===31){var v=vv(g);v=N5(v);var w=K1(g,v);w!==null&&Z0(w,g,v),Lb(g,v)}}function vL(){return Hv}function wL(g,v,w,H){var q=D.T;D.T=null;var A=H0.p;try{H0.p=Ov,Fb(g,v,w,H)}finally{H0.p=A,D.T=q}}function rL(g,v,w,H){var q=D.T;D.T=null;var A=H0.p;try{H0.p=kv,Fb(g,v,w,H)}finally{H0.p=A,D.T=q}}function Fb(g,v,w,H){if(Eq){var q=Bb(H);if(q===null)bb(g,v,H,_q,w),v7(g,H);else if(HL(q,g,v,w,H))H.stopPropagation();else if(v7(g,H),v&4&&-1<pF.indexOf(g)){for(;q!==null;){var A=Cg(q);if(A!==null)switch(A.tag){case 3:if(A=A.stateNode,A.current.memoizedState.isDehydrated){var W=sv(A.pendingLanes);if(W!==0){var X=A;X.pendingLanes|=2;for(X.entangledLanes|=2;W;){var J=1<<31-F1(W);X.entanglements[1]|=J,W&=~J}Gw(A),(ag&(g1|bv))===q1&&(Lq=r1()+WJ,R8(0,!1))}}break;case 31:case 13:X=K1(A,2),X!==null&&Z0(X,A,2),_4(),Lb(A,2)}if(A=Bb(H),A===null&&bb(g,v,H,_q,w),A===q)break;q=A}q!==null&&H.stopPropagation()}else bb(g,v,H,null,w)}}function Bb(g){return g=CA(g),Ib(g)}function Ib(g){if(_q=null,g=hg(g),g!==null){var v=n(g);if(v===null)g=null;else{var w=v.tag;if(w===13){if(g=Gg(v),g!==null)return g;g=null}else if(w===31){if(g=wg(v),g!==null)return g;g=null}else if(w===3){if(v.stateNode.current.memoizedState.isDehydrated)return v.tag===3?v.stateNode.containerInfo:null;g=null}else v!==g&&(g=null)}}return _q=g,null}function g7(g){switch(g){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Ov;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return kv;case"message":switch(YL()){case Vb:return Ov;case Eb:return kv;case t4:case GL:return zw;case _b:return j2;default:return zw}default:return zw}}function v7(g,v){switch(g){case"focusin":case"focusout":O5=null;break;case"dragenter":case"dragleave":q5=null;break;case"mouseover":case"mouseout":A5=null;break;case"pointerover":case"pointerout":KH.delete(v.pointerId);break;case"gotpointercapture":case"lostpointercapture":$H.delete(v.pointerId)}}function B8(g,v,w,H,q,A){if(g===null||g.nativeEvent!==A)return g={blockedOn:v,domEventName:w,eventSystemFlags:H,nativeEvent:A,targetContainers:[q]},v!==null&&(v=Cg(v),v!==null&&aG(v)),g;return g.eventSystemFlags|=H,v=g.targetContainers,q!==null&&v.indexOf(q)===-1&&v.push(q),g}function HL(g,v,w,H,q){switch(v){case"focusin":return O5=B8(O5,g,v,w,H,q),!0;case"dragenter":return q5=B8(q5,g,v,w,H,q),!0;case"mouseover":return A5=B8(A5,g,v,w,H,q),!0;case"pointerover":var A=q.pointerId;return KH.set(A,B8(KH.get(A)||null,g,v,w,H,q)),!0;case"gotpointercapture":return A=q.pointerId,$H.set(A,B8($H.get(A)||null,g,v,w,H,q)),!0}return!1}function w7(g){var v=hg(g.target);if(v!==null){var w=n(v);if(w!==null){if(v=w.tag,v===13){if(v=Gg(w),v!==null){g.blockedOn=v,c(g.priority,function(){sG(w)});return}}else if(v===31){if(v=wg(w),v!==null){g.blockedOn=v,c(g.priority,function(){sG(w)});return}}else if(v===3&&w.stateNode.current.memoizedState.isDehydrated){g.blockedOn=w.tag===3?w.stateNode.containerInfo:null;return}}}g.blockedOn=null}function x2(g){if(g.blockedOn!==null)return!1;for(var v=g.targetContainers;0<v.length;){var w=Bb(g.nativeEvent);if(w===null){w=g.nativeEvent;var H=new w.constructor(w.type,w),q=H;T8!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),T8=q,w.target.dispatchEvent(H),T8===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),T8=null}else return v=Cg(w),v!==null&&aG(v),g.blockedOn=w,!1;v.shift()}return!0}function r7(g,v,w){x2(g)&&w.delete(v)}function OL(){vM=!1,O5!==null&&x2(O5)&&(O5=null),q5!==null&&x2(q5)&&(q5=null),A5!==null&&x2(A5)&&(A5=null),KH.forEach(r7),$H.forEach(r7)}function o2(g,v){g.blockedOn===v&&(g.blockedOn=null,vM||(vM=!0,v0.unstable_scheduleCallback(v0.unstable_NormalPriority,OL)))}function H7(g){yq!==g&&(yq=g,v0.unstable_scheduleCallback(v0.unstable_NormalPriority,function(){yq===g&&(yq=null);for(var v=0;v<g.length;v+=3){var w=g[v],H=g[v+1],q=g[v+2];if(typeof H!=="function")if(Ib(H||w)===null)continue;else break;var A=Cg(w);A!==null&&(g.splice(v,3),v-=3,w={pending:!0,data:q,method:w.method,action:H},Object.freeze(w),IP(A,w,H,q))}}))}function n4(g){function v(J){return o2(J,g)}O5!==null&&o2(O5,g),q5!==null&&o2(q5,g),A5!==null&&o2(A5,g),KH.forEach(v),$H.forEach(v);for(var w=0;w<P5.length;w++){var H=P5[w];H.blockedOn===g&&(H.blockedOn=null)}for(;0<P5.length&&(w=P5[0],w.blockedOn===null);)w7(w),w.blockedOn===null&&P5.shift();if(w=(g.ownerDocument||g).$$reactFormReplay,w!=null)for(H=0;H<w.length;H+=3){var q=w[H],A=w[H+1],W=q[B1]||null;if(typeof A==="function")W||H7(w);else if(W){var X=null;if(A&&A.hasAttribute("formAction")){if(q=A,W=A[B1]||null)X=W.formAction;else if(Ib(q)!==null)continue}else X=W.action;typeof X==="function"?w[H+1]=X:(w.splice(H,3),H-=3),H7(w)}}}function O7(){function g(A){A.canIntercept&&A.info==="react-transition"&&A.intercept({handler:function(){return new Promise(function(W){return q=W})},focusReset:"manual",scroll:"manual"})}function v(){q!==null&&(q(),q=null),H||setTimeout(w,20)}function w(){if(!H&&!navigation.transition){var A=navigation.currentEntry;A&&A.url!=null&&navigation.navigate(A.url,{state:A.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var H=!1,q=null;return navigation.addEventListener("navigate",g),navigation.addEventListener("navigatesuccess",v),navigation.addEventListener("navigateerror",v),setTimeout(w,100),function(){H=!0,navigation.removeEventListener("navigate",g),navigation.removeEventListener("navigatesuccess",v),navigation.removeEventListener("navigateerror",v),q!==null&&(q(),q=null)}}}function Nb(g){this._internalRoot=g}function D2(g){this._internalRoot=g}function q7(g){g[mr]&&(g._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var yg=Object.assign,qL=Symbol.for("react.element"),Jw=Symbol.for("react.transitional.element"),e4=Symbol.for("react.portal"),c4=Symbol.for("react.fragment"),k2=Symbol.for("react.strict_mode"),Zb=Symbol.for("react.profiler"),ub=Symbol.for("react.consumer"),Qw=Symbol.for("react.context"),I8=Symbol.for("react.forward_ref"),Tb=Symbol.for("react.suspense"),Cb=Symbol.for("react.suspense_list"),m2=Symbol.for("react.memo"),rv=Symbol.for("react.lazy"),Sb=Symbol.for("react.activity"),AL=Symbol.for("react.memo_cache_sentinel"),A7=Symbol.iterator,PL=Symbol.for("react.client.reference"),a0=Array.isArray,D=T6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H0=HM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bL=Object.freeze({pending:!1,data:null,method:null,action:null}),lb=[],xb=[],iw=-1,or=Ig(null),N8=Ig(null),Dr=Ig(null),V2=Ig(null),Z8=0,P7,b7,W7,M7,X7,Y7,G7;S.__reactDisabledLog=!0;var ob,h7,Db=!1,kb=new(typeof WeakMap==="function"?WeakMap:Map),Hv=null,Rw=!1,Dv=Object.prototype.hasOwnProperty,mb=v0.unstable_scheduleCallback,WL=v0.unstable_cancelCallback,ML=v0.unstable_shouldYield,XL=v0.unstable_requestPaint,r1=v0.unstable_now,YL=v0.unstable_getCurrentPriorityLevel,Vb=v0.unstable_ImmediatePriority,Eb=v0.unstable_UserBlockingPriority,t4=v0.unstable_NormalPriority,GL=v0.unstable_LowPriority,_b=v0.unstable_IdlePriority,hL=v0.log,JL=v0.unstable_setDisableYieldValue,p4=null,$1=null,Kw=!1,$w=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",F1=Math.clz32?Math.clz32:NO,QL=Math.log,RL=Math.LN2,E2=256,_2=262144,y2=4194304,Ov=2,kv=8,zw=32,j2=268435456,kr=Math.random().toString(36).slice(2),Y1="__reactFiber$"+kr,B1="__reactProps$"+kr,mr="__reactContainer$"+kr,yb="__reactEvents$"+kr,KL="__reactListeners$"+kr,$L="__reactHandles$"+kr,J7="__reactResources$"+kr,u8="__reactMarker$"+kr,Q7=new Set,j5={},jb={},zL={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},UL=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),R7={},K7={},LL=/[\n"\\]/g,$7=!1,z7=!1,U7=!1,L7=!1,F7=!1,B7=!1,I7=["value","defaultValue"],N7=!1,Z7=/["'&<>\n\t]|^\s|\s$/,FL="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),u7="applet caption html table td th marquee object template foreignObject desc title".split(" "),BL=u7.concat(["button"]),IL="dd dt li option optgroup p rp rt".split(" "),T7={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},i2={},ib={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},C7=/([A-Z])/g,S7=/^ms-/,NL=/^(?:webkit|moz|o)[A-Z]/,ZL=/^-ms-/,uL=/-(.)/g,l7=/;\s*$/,d4={},fb={},x7=!1,o7=!1,D7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),f2="http://www.w3.org/1998/Math/MathML",a4="http://www.w3.org/2000/svg",TL=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n2={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},k7={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},s4={},CL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),SL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m7=!1,I1={},V7=/^on./,lL=/^on[^A-Z]/,xL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),DL=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,T8=null,g6=null,v6=null,nb=!1,Uw=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eb=!1;if(Uw)try{var C8={};Object.defineProperty(C8,"passive",{get:function(){eb=!0}}),window.addEventListener("test",C8,C8),window.removeEventListener("test",C8,C8)}catch(g){eb=!1}var Vr=null,cb=null,e2=null,i5={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(g){return g.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},c2=V1(i5),S8=yg({},i5,{view:0,detail:0}),kL=V1(S8),tb,pb,l8,t2=yg({},S8,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:SA,button:0,buttons:0,relatedTarget:function(g){return g.relatedTarget===void 0?g.fromElement===g.srcElement?g.toElement:g.fromElement:g.relatedTarget},movementX:function(g){if("movementX"in g)return g.movementX;return g!==l8&&(l8&&g.type==="mousemove"?(tb=g.screenX-l8.screenX,pb=g.screenY-l8.screenY):pb=tb=0,l8=g),tb},movementY:function(g){return"movementY"in g?g.movementY:pb}}),E7=V1(t2),mL=yg({},t2,{dataTransfer:0}),VL=V1(mL),EL=yg({},S8,{relatedTarget:0}),db=V1(EL),_L=yg({},i5,{animationName:0,elapsedTime:0,pseudoElement:0}),yL=V1(_L),jL=yg({},i5,{clipboardData:function(g){return"clipboardData"in g?g.clipboardData:window.clipboardData}}),iL=V1(jL),fL=yg({},i5,{data:0}),_7=V1(fL),nL=_7,eL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},pL=yg({},S8,{key:function(g){if(g.key){var v=eL[g.key]||g.key;if(v!=="Unidentified")return v}return g.type==="keypress"?(g=xO(g),g===13?"Enter":String.fromCharCode(g)):g.type==="keydown"||g.type==="keyup"?cL[g.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:SA,charCode:function(g){return g.type==="keypress"?xO(g):0},keyCode:function(g){return g.type==="keydown"||g.type==="keyup"?g.keyCode:0},which:function(g){return g.type==="keypress"?xO(g):g.type==="keydown"||g.type==="keyup"?g.keyCode:0}}),dL=V1(pL),aL=yg({},t2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y7=V1(aL),sL=yg({},S8,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:SA}),gF=V1(sL),vF=yg({},i5,{propertyName:0,elapsedTime:0,pseudoElement:0}),wF=V1(vF),rF=yg({},t2,{deltaX:function(g){return"deltaX"in g?g.deltaX:("wheelDeltaX"in g)?-g.wheelDeltaX:0},deltaY:function(g){return"deltaY"in g?g.deltaY:("wheelDeltaY"in g)?-g.wheelDeltaY:("wheelDelta"in g)?-g.wheelDelta:0},deltaZ:0,deltaMode:0}),HF=V1(rF),OF=yg({},i5,{newState:0,oldState:0}),qF=V1(OF),AF=[9,13,27,32],j7=229,ab=Uw&&"CompositionEvent"in window,x8=null;Uw&&"documentMode"in document&&(x8=document.documentMode);var PF=Uw&&"TextEvent"in window&&!x8,i7=Uw&&(!ab||x8&&8<x8&&11>=x8),f7=32,n7=String.fromCharCode(f7),e7=!1,w6=!1,bF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},o8=null,D8=null,c7=!1;Uw&&(c7=Tz("input")&&(!document.documentMode||9<document.documentMode));var N1=typeof Object.is==="function"?Object.is:Dz,WF=Uw&&"documentMode"in document&&11>=document.documentMode,r6=null,sb=null,k8=null,gW=!1,H6={animationend:u5("Animation","AnimationEnd"),animationiteration:u5("Animation","AnimationIteration"),animationstart:u5("Animation","AnimationStart"),transitionrun:u5("Transition","TransitionRun"),transitionstart:u5("Transition","TransitionStart"),transitioncancel:u5("Transition","TransitionCancel"),transitionend:u5("Transition","TransitionEnd")},vW={},t7={};Uw&&(t7=document.createElement("div").style,("AnimationEvent"in window)||(delete H6.animationend.animation,delete H6.animationiteration.animation,delete H6.animationstart.animation),("TransitionEvent"in window)||delete H6.transitionend.transition);var p7=T5("animationend"),d7=T5("animationiteration"),a7=T5("animationstart"),MF=T5("transitionrun"),XF=T5("transitionstart"),YF=T5("transitioncancel"),s7=T5("transitionend"),gh=new Map,wW="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wW.push("scrollEnd");var vh=0;if(typeof performance==="object"&&typeof performance.now==="function")var GF=performance,wh=function(){return GF.now()};else{var hF=Date;wh=function(){return hF.now()}}var rW=typeof reportError==="function"?reportError:function(g){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g==="object"&&g!==null&&typeof g.message==="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(v))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",g);return}console.error(g)},JF="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",p2=0,HW=1,OW=2,qW=3,d2="– ",a2="+ ",rh="  ",R0=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",$v="Components ⚛",jg="Scheduler ⚛",ig="Blocking",Er=!1,fw={color:"primary",properties:null,tooltipText:"",track:$v},_r={start:-0,end:-0,detail:{devtools:fw}},QF=["Changed Props",""],Hh="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",RF=["Changed Props",Hh],m8=1,nw=2,zv=[],O6=0,AW=0,yr={};Object.freeze(yr);var Uv=null,q6=null,Ng=0,KF=1,og=2,z1=8,mv=16,$F=32,Oh=!1;try{var qh=Object.preventExtensions({})}catch(g){Oh=!0}var PW=new WeakMap,A6=[],P6=0,s2=null,V8=0,Lv=[],Fv=0,f5=null,ew=1,cw="",G1=null,K0=null,eg=!1,Lw=!1,qv=null,jr=null,Bv=!1,bW=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),WW=Ig(null),MW=Ig(null),Ah={},gq=null,b6=null,W6=!1,zF=typeof AbortController<"u"?AbortController:function(){var g=[],v=this.signal={aborted:!1,addEventListener:function(w,H){g.push(H)}};this.abort=function(){v.aborted=!0,g.forEach(function(w){return w()})}},UF=v0.unstable_scheduleCallback,LF=v0.unstable_NormalPriority,i0={$$typeof:Qw,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},f0=v0.unstable_now,vq=console.createTask?console.createTask:function(){return null},E8=1,wq=2,H1=-0,ir=-0,tw=-0,pw=null,Z1=-1.1,n5=-0,B0=-0,Ug=-1.1,Bg=-1.1,L0=null,u0=!1,fr=-0,Fw=-1.1,_8=null,nr=0,XW=null,YW=null,e5=-1.1,y8=null,M6=-1.1,rq=-1.1,Bw=-0,dw=-1.1,Iv=-1.1,GW=0,j8=null,Ph=null,bh=null,er=-1.1,c5=null,cr=-1.1,Hq=-1.1,Wh=-0,Mh=-0,Oq=0,aw=null,Xh=0,i8=-1.1,qq=!1,Aq=!1,f8=null,hW=0,t5=0,X6=null,Yh=D.S;D.S=function(g,v){if(PJ=r1(),typeof v==="object"&&v!==null&&typeof v.then==="function"){if(0>dw&&0>Iv){dw=f0();var w=z8(),H=$8();if(w!==cr||H!==c5)cr=-1.1;er=w,c5=H}jz(g,v)}Yh!==null&&Yh(g,v)};var p5=Ig(null),Vv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},n8=[],e8=[],c8=[],t8=[],p8=[],d8=[],d5=new Set;Vv.recordUnsafeLifecycleWarnings=function(g,v){d5.has(g.type)||(typeof v.componentWillMount==="function"&&v.componentWillMount.__suppressDeprecationWarning!==!0&&n8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillMount==="function"&&e8.push(g),typeof v.componentWillReceiveProps==="function"&&v.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&c8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillReceiveProps==="function"&&t8.push(g),typeof v.componentWillUpdate==="function"&&v.componentWillUpdate.__suppressDeprecationWarning!==!0&&p8.push(g),g.mode&z1&&typeof v.UNSAFE_componentWillUpdate==="function"&&d8.push(g))},Vv.flushPendingUnsafeLifecycleWarnings=function(){var g=new Set;0<n8.length&&(n8.forEach(function(X){g.add(k(X)||"Component"),d5.add(X.type)}),n8=[]);var v=new Set;0<e8.length&&(e8.forEach(function(X){v.add(k(X)||"Component"),d5.add(X.type)}),e8=[]);var w=new Set;0<c8.length&&(c8.forEach(function(X){w.add(k(X)||"Component"),d5.add(X.type)}),c8=[]);var H=new Set;0<t8.length&&(t8.forEach(function(X){H.add(k(X)||"Component"),d5.add(X.type)}),t8=[]);var q=new Set;0<p8.length&&(p8.forEach(function(X){q.add(k(X)||"Component"),d5.add(X.type)}),p8=[]);var A=new Set;if(0<d8.length&&(d8.forEach(function(X){A.add(k(X)||"Component"),d5.add(X.type)}),d8=[]),0<v.size){var W=Q(v);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,W)}0<H.size&&(W=Q(H),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,W)),0<A.size&&(W=Q(A),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,W)),0<g.size&&(W=Q(g),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W)),0<w.size&&(W=Q(w),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W)),0<q.size&&(W=Q(q),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,W))};var Pq=new Map,Gh=new Set;Vv.recordLegacyContextWarning=function(g,v){var w=null;for(var H=g;H!==null;)H.mode&z1&&(w=H),H=H.return;w===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!Gh.has(g.type)&&(H=Pq.get(w),g.type.contextTypes!=null||g.type.childContextTypes!=null||v!==null&&typeof v.getChildContext==="function")&&(H===void 0&&(H=[],Pq.set(w,H)),H.push(g))},Vv.flushLegacyContextWarning=function(){Pq.forEach(function(g){if(g.length!==0){var v=g[0],w=new Set;g.forEach(function(q){w.add(k(q)||"Component"),Gh.add(q.type)});var H=Q(w);Pg(v,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,H)})}})},Vv.discardPendingWarnings=function(){n8=[],e8=[],c8=[],t8=[],p8=[],d8=[],Pq=new Map};var hh={react_stack_bottom_frame:function(g,v,w){var H=Rw;Rw=!0;try{return g(v,w)}finally{Rw=H}}},JW=hh.react_stack_bottom_frame.bind(hh),Jh={react_stack_bottom_frame:function(g){var v=Rw;Rw=!0;try{return g.render()}finally{Rw=v}}},Qh=Jh.react_stack_bottom_frame.bind(Jh),Rh={react_stack_bottom_frame:function(g,v){try{v.componentDidMount()}catch(w){r0(g,g.return,w)}}},QW=Rh.react_stack_bottom_frame.bind(Rh),Kh={react_stack_bottom_frame:function(g,v,w,H,q){try{v.componentDidUpdate(w,H,q)}catch(A){r0(g,g.return,A)}}},$h=Kh.react_stack_bottom_frame.bind(Kh),zh={react_stack_bottom_frame:function(g,v){var w=v.stack;g.componentDidCatch(v.value,{componentStack:w!==null?w:""})}},FF=zh.react_stack_bottom_frame.bind(zh),Uh={react_stack_bottom_frame:function(g,v,w){try{w.componentWillUnmount()}catch(H){r0(g,v,H)}}},Lh=Uh.react_stack_bottom_frame.bind(Uh),Fh={react_stack_bottom_frame:function(g){var v=g.create;return g=g.inst,v=v(),g.destroy=v}},BF=Fh.react_stack_bottom_frame.bind(Fh),Bh={react_stack_bottom_frame:function(g,v,w){try{w()}catch(H){r0(g,v,H)}}},IF=Bh.react_stack_bottom_frame.bind(Bh),Ih={react_stack_bottom_frame:function(g){var v=g._init;return v(g._payload)}},NF=Ih.react_stack_bottom_frame.bind(Ih),Y6=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),RW=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),bq=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Wq={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},a5=null,a8=!1,G6=null,s8=0,Dg=null,KW,Nh=KW=!1,Zh={},uh={},Th={};z=function(g,v,w){if(w!==null&&typeof w==="object"&&w._store&&(!w._store.validated&&w.key==null||w._store.validated===2)){if(typeof w._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");w._store.validated=1;var H=k(g),q=H||"null";if(!Zh[q]){Zh[q]=!0,w=w._owner,g=g._debugOwner;var A="";g&&typeof g.tag==="number"&&(q=k(g))&&(A=`

Check the render method of \``+q+"`."),A||H&&(A=`

Check the top-level render call using <`+H+">.");var W="";w!=null&&g!==w&&(H=null,typeof w.tag==="number"?H=k(w):typeof w.name==="string"&&(H=w.name),H&&(W=" It was passed a child from "+H+".")),Pg(v,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',A,W)})}}};var s5=UX(!0),Ch=UX(!1),Sh=0,lh=1,xh=2,$W=3,tr=!1,oh=!1,zW=null,UW=!1,h6=Ig(null),Mq=Ig(0),Av=Ig(null),Nv=null,J6=1,gH=2,m0=Ig(0),Xq=0,Zv=1,u1=2,Pv=4,T1=8,Q6,Dh=new Set,kh=new Set,LW=new Set,mh=new Set,sw=0,Zg=null,Y0=null,n0=null,Yq=!1,R6=!1,g4=!1,Gq=0,vH=0,gr=null,ZF=0,uF=25,o=null,uv=null,vr=-1,wH=!1,rH={readContext:U0,use:Cr,useCallback:o0,useContext:o0,useEffect:o0,useImperativeHandle:o0,useLayoutEffect:o0,useInsertionEffect:o0,useMemo:o0,useReducer:o0,useRef:o0,useState:o0,useDebugValue:o0,useDeferredValue:o0,useTransition:o0,useSyncExternalStore:o0,useId:o0,useHostTransitionStatus:o0,useFormState:o0,useActionState:o0,useOptimistic:o0,useMemoCache:o0,useCacheRefresh:o0};rH.useEffectEvent=o0;var FW=null,Vh=null,BW=null,Eh=null,Iw=null,Ev=null,hq=null;FW={readContext:function(g){return U0(g)},use:Cr,useCallback:function(g,v){return o="useCallback",_g(),x4(v),UP(g,v)},useContext:function(g){return o="useContext",_g(),U0(g)},useEffect:function(g,v){return o="useEffect",_g(),x4(v),P2(g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",_g(),x4(w),zP(g,v,w)},useInsertionEffect:function(g,v){o="useInsertionEffect",_g(),x4(v),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",_g(),x4(v),$P(g,v)},useMemo:function(g,v){o="useMemo",_g(),x4(v);var w=D.H;D.H=Iw;try{return LP(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",_g();var H=D.H;D.H=Iw;try{return MP(g,v,w)}finally{D.H=H}},useRef:function(g){return o="useRef",_g(),RP(g)},useState:function(g){o="useState",_g();var v=D.H;D.H=Iw;try{return hP(g)}finally{D.H=v}},useDebugValue:function(){o="useDebugValue",_g()},useDeferredValue:function(g,v){return o="useDeferredValue",_g(),FP(g,v)},useTransition:function(){return o="useTransition",_g(),NP()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",_g(),YP(g,v,w)},useId:function(){return o="useId",_g(),ZP()},useFormState:function(g,v){return o="useFormState",_g(),r2(),D4(g,v)},useActionState:function(g,v){return o="useActionState",_g(),D4(g,v)},useOptimistic:function(g){return o="useOptimistic",_g(),JP(g)},useHostTransitionStatus:V5,useMemoCache:k5,useCacheRefresh:function(){return o="useCacheRefresh",_g(),uP()},useEffectEvent:function(g){return o="useEffectEvent",_g(),KP(g)}},Vh={readContext:function(g){return U0(g)},use:Cr,useCallback:function(g,v){return o="useCallback",f(),UP(g,v)},useContext:function(g){return o="useContext",f(),U0(g)},useEffect:function(g,v){return o="useEffect",f(),P2(g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",f(),zP(g,v,w)},useInsertionEffect:function(g,v){o="useInsertionEffect",f(),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",f(),$P(g,v)},useMemo:function(g,v){o="useMemo",f();var w=D.H;D.H=Iw;try{return LP(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",f();var H=D.H;D.H=Iw;try{return MP(g,v,w)}finally{D.H=H}},useRef:function(g){return o="useRef",f(),RP(g)},useState:function(g){o="useState",f();var v=D.H;D.H=Iw;try{return hP(g)}finally{D.H=v}},useDebugValue:function(){o="useDebugValue",f()},useDeferredValue:function(g,v){return o="useDeferredValue",f(),FP(g,v)},useTransition:function(){return o="useTransition",f(),NP()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",f(),YP(g,v,w)},useId:function(){return o="useId",f(),ZP()},useActionState:function(g,v){return o="useActionState",f(),D4(g,v)},useFormState:function(g,v){return o="useFormState",f(),r2(),D4(g,v)},useOptimistic:function(g){return o="useOptimistic",f(),JP(g)},useHostTransitionStatus:V5,useMemoCache:k5,useCacheRefresh:function(){return o="useCacheRefresh",f(),uP()},useEffectEvent:function(g){return o="useEffectEvent",f(),KP(g)}},BW={readContext:function(g){return U0(g)},use:Cr,useCallback:function(g,v){return o="useCallback",f(),M2(g,v)},useContext:function(g){return o="useContext",f(),U0(g)},useEffect:function(g,v){o="useEffect",f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",f(),W2(g,v,w)},useInsertionEffect:function(g,v){return o="useInsertionEffect",f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",f(),E1(4,Pv,g,v)},useMemo:function(g,v){o="useMemo",f();var w=D.H;D.H=Ev;try{return X2(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",f();var H=D.H;D.H=Ev;try{return o4(g,v,w)}finally{D.H=H}},useRef:function(){return o="useRef",f(),q0().memoizedState},useState:function(){o="useState",f();var g=D.H;D.H=Ev;try{return o4(xv)}finally{D.H=g}},useDebugValue:function(){o="useDebugValue",f()},useDeferredValue:function(g,v){return o="useDeferredValue",f(),iX(g,v)},useTransition:function(){return o="useTransition",f(),pX()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",f(),O2(g,v,w)},useId:function(){return o="useId",f(),q0().memoizedState},useFormState:function(g){return o="useFormState",f(),r2(),q2(g)},useActionState:function(g){return o="useActionState",f(),q2(g)},useOptimistic:function(g,v){return o="useOptimistic",f(),xX(g,v)},useHostTransitionStatus:V5,useMemoCache:k5,useCacheRefresh:function(){return o="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return o="useEffectEvent",f(),b2(g)}},Eh={readContext:function(g){return U0(g)},use:Cr,useCallback:function(g,v){return o="useCallback",f(),M2(g,v)},useContext:function(g){return o="useContext",f(),U0(g)},useEffect:function(g,v){o="useEffect",f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",f(),W2(g,v,w)},useInsertionEffect:function(g,v){return o="useInsertionEffect",f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",f(),E1(4,Pv,g,v)},useMemo:function(g,v){o="useMemo",f();var w=D.H;D.H=hq;try{return X2(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",f();var H=D.H;D.H=hq;try{return P8(g,v,w)}finally{D.H=H}},useRef:function(){return o="useRef",f(),q0().memoizedState},useState:function(){o="useState",f();var g=D.H;D.H=hq;try{return P8(xv)}finally{D.H=g}},useDebugValue:function(){o="useDebugValue",f()},useDeferredValue:function(g,v){return o="useDeferredValue",f(),fX(g,v)},useTransition:function(){return o="useTransition",f(),dX()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",f(),O2(g,v,w)},useId:function(){return o="useId",f(),q0().memoizedState},useFormState:function(g){return o="useFormState",f(),r2(),A2(g)},useActionState:function(g){return o="useActionState",f(),A2(g)},useOptimistic:function(g,v){return o="useOptimistic",f(),DX(g,v)},useHostTransitionStatus:V5,useMemoCache:k5,useCacheRefresh:function(){return o="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return o="useEffectEvent",f(),b2(g)}},Iw={readContext:function(g){return $(),U0(g)},use:function(g){return h(),Cr(g)},useCallback:function(g,v){return o="useCallback",h(),_g(),UP(g,v)},useContext:function(g){return o="useContext",h(),_g(),U0(g)},useEffect:function(g,v){return o="useEffect",h(),_g(),P2(g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",h(),_g(),zP(g,v,w)},useInsertionEffect:function(g,v){o="useInsertionEffect",h(),_g(),m5(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",h(),_g(),$P(g,v)},useMemo:function(g,v){o="useMemo",h(),_g();var w=D.H;D.H=Iw;try{return LP(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",h(),_g();var H=D.H;D.H=Iw;try{return MP(g,v,w)}finally{D.H=H}},useRef:function(g){return o="useRef",h(),_g(),RP(g)},useState:function(g){o="useState",h(),_g();var v=D.H;D.H=Iw;try{return hP(g)}finally{D.H=v}},useDebugValue:function(){o="useDebugValue",h(),_g()},useDeferredValue:function(g,v){return o="useDeferredValue",h(),_g(),FP(g,v)},useTransition:function(){return o="useTransition",h(),_g(),NP()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",h(),_g(),YP(g,v,w)},useId:function(){return o="useId",h(),_g(),ZP()},useFormState:function(g,v){return o="useFormState",h(),_g(),D4(g,v)},useActionState:function(g,v){return o="useActionState",h(),_g(),D4(g,v)},useOptimistic:function(g){return o="useOptimistic",h(),_g(),JP(g)},useMemoCache:function(g){return h(),k5(g)},useHostTransitionStatus:V5,useCacheRefresh:function(){return o="useCacheRefresh",_g(),uP()},useEffectEvent:function(g){return o="useEffectEvent",h(),_g(),KP(g)}},Ev={readContext:function(g){return $(),U0(g)},use:function(g){return h(),Cr(g)},useCallback:function(g,v){return o="useCallback",h(),f(),M2(g,v)},useContext:function(g){return o="useContext",h(),f(),U0(g)},useEffect:function(g,v){o="useEffect",h(),f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",h(),f(),W2(g,v,w)},useInsertionEffect:function(g,v){return o="useInsertionEffect",h(),f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",h(),f(),E1(4,Pv,g,v)},useMemo:function(g,v){o="useMemo",h(),f();var w=D.H;D.H=Ev;try{return X2(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",h(),f();var H=D.H;D.H=Ev;try{return o4(g,v,w)}finally{D.H=H}},useRef:function(){return o="useRef",h(),f(),q0().memoizedState},useState:function(){o="useState",h(),f();var g=D.H;D.H=Ev;try{return o4(xv)}finally{D.H=g}},useDebugValue:function(){o="useDebugValue",h(),f()},useDeferredValue:function(g,v){return o="useDeferredValue",h(),f(),iX(g,v)},useTransition:function(){return o="useTransition",h(),f(),pX()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",h(),f(),O2(g,v,w)},useId:function(){return o="useId",h(),f(),q0().memoizedState},useFormState:function(g){return o="useFormState",h(),f(),q2(g)},useActionState:function(g){return o="useActionState",h(),f(),q2(g)},useOptimistic:function(g,v){return o="useOptimistic",h(),f(),xX(g,v)},useMemoCache:function(g){return h(),k5(g)},useHostTransitionStatus:V5,useCacheRefresh:function(){return o="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return o="useEffectEvent",h(),f(),b2(g)}},hq={readContext:function(g){return $(),U0(g)},use:function(g){return h(),Cr(g)},useCallback:function(g,v){return o="useCallback",h(),f(),M2(g,v)},useContext:function(g){return o="useContext",h(),f(),U0(g)},useEffect:function(g,v){o="useEffect",h(),f(),E1(2048,T1,g,v)},useImperativeHandle:function(g,v,w){return o="useImperativeHandle",h(),f(),W2(g,v,w)},useInsertionEffect:function(g,v){return o="useInsertionEffect",h(),f(),E1(4,u1,g,v)},useLayoutEffect:function(g,v){return o="useLayoutEffect",h(),f(),E1(4,Pv,g,v)},useMemo:function(g,v){o="useMemo",h(),f();var w=D.H;D.H=Ev;try{return X2(g,v)}finally{D.H=w}},useReducer:function(g,v,w){o="useReducer",h(),f();var H=D.H;D.H=Ev;try{return P8(g,v,w)}finally{D.H=H}},useRef:function(){return o="useRef",h(),f(),q0().memoizedState},useState:function(){o="useState",h(),f();var g=D.H;D.H=Ev;try{return P8(xv)}finally{D.H=g}},useDebugValue:function(){o="useDebugValue",h(),f()},useDeferredValue:function(g,v){return o="useDeferredValue",h(),f(),fX(g,v)},useTransition:function(){return o="useTransition",h(),f(),dX()},useSyncExternalStore:function(g,v,w){return o="useSyncExternalStore",h(),f(),O2(g,v,w)},useId:function(){return o="useId",h(),f(),q0().memoizedState},useFormState:function(g){return o="useFormState",h(),f(),A2(g)},useActionState:function(g){return o="useActionState",h(),f(),A2(g)},useOptimistic:function(g,v){return o="useOptimistic",h(),f(),DX(g,v)},useMemoCache:function(g){return h(),k5(g)},useHostTransitionStatus:V5,useCacheRefresh:function(){return o="useCacheRefresh",f(),q0().memoizedState},useEffectEvent:function(g){return o="useEffectEvent",h(),f(),b2(g)}};var _h={},yh=new Set,jh=new Set,ih=new Set,fh=new Set,nh=new Set,eh=new Set,ch=new Set,th=new Set,ph=new Set,dh=new Set;Object.freeze(_h);var IW={enqueueSetState:function(g,v,w){g=g._reactInternals;var H=vv(g),q=Nr(H);q.payload=v,w!==void 0&&w!==null&&(CP(w),q.callback=w),v=Zr(g,q,H),v!==null&&(rw(H,"this.setState()",g),Z0(v,g,H),H8(v,g,H))},enqueueReplaceState:function(g,v,w){g=g._reactInternals;var H=vv(g),q=Nr(H);q.tag=lh,q.payload=v,w!==void 0&&w!==null&&(CP(w),q.callback=w),v=Zr(g,q,H),v!==null&&(rw(H,"this.replaceState()",g),Z0(v,g,H),H8(v,g,H))},enqueueForceUpdate:function(g,v){g=g._reactInternals;var w=vv(g),H=Nr(w);H.tag=xh,v!==void 0&&v!==null&&(CP(v),H.callback=v),v=Zr(g,H,w),v!==null&&(rw(w,"this.forceUpdate()",g),Z0(v,g,w),H8(v,g,w))}},K6=null,NW=null,ZW=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),e0=!1,ah={},sh={},gJ={},vJ={},$6=!1,wJ={},Jq={},uW={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},rJ=!1,HJ=null;HJ=new Set;var wr=!1,c0=!1,TW=!1,OJ=typeof WeakSet==="function"?WeakSet:Set,O1=null,z6=null,U6=null,t0=null,j1=!1,_v=null,s0=!1,HH=8192,TF={getCacheForType:function(g){var v=U0(i0),w=v.data.get(g);return w===void 0&&(w=g(),v.data.set(g,w)),w},cacheSignal:function(){return U0(i0).controller.signal},getOwner:function(){return Hv}};if(typeof Symbol==="function"&&Symbol.for){var OH=Symbol.for;OH("selector.component"),OH("selector.has_pseudo_class"),OH("selector.role"),OH("selector.test_id"),OH("selector.text")}var CF=[],SF=typeof WeakMap==="function"?WeakMap:Map,q1=0,g1=2,bv=4,rr=0,qH=1,v4=2,Qq=3,pr=4,Rq=6,qJ=5,ag=q1,G0=null,Eg=null,kg=0,i1=0,Kq=1,w4=2,AH=3,AJ=4,CW=5,PH=6,$q=7,SW=8,r4=9,A0=i1,Wv=null,dr=!1,L6=!1,lW=!1,Nw=0,I0=rr,ar=0,sr=0,xW=0,f1=0,H4=0,bH=null,C1=null,zq=!1,Uq=0,PJ=0,bJ=300,Lq=1/0,WJ=500,WH=null,D0=null,g5=null,Fq=0,oW=1,DW=2,MJ=3,v5=0,XJ=1,YJ=2,GJ=3,hJ=4,Bq=5,p0=0,w5=null,F6=null,yv=0,kW=0,mW=-0,VW=null,JJ=null,QJ=null,jv=Fq,RJ=null,lF=50,MH=0,EW=null,_W=!1,Iq=!1,xF=50,O4=0,XH=null,B6=!1,Nq=null,KJ=!1,$J=new Set,oF={},Zq=null,I6=null,yW=!1,jW=!1,uq=!1,iW=!1,r5=0,fW={};(function(){for(var g=0;g<wW.length;g++){var v=wW[g],w=v.toLowerCase();v=v[0].toUpperCase()+v.slice(1),lv(w,"on"+v)}lv(p7,"onAnimationEnd"),lv(d7,"onAnimationIteration"),lv(a7,"onAnimationStart"),lv("dblclick","onDoubleClick"),lv("focusin","onFocus"),lv("focusout","onBlur"),lv(MF,"onTransitionRun"),lv(XF,"onTransitionStart"),lv(YF,"onTransitionCancel"),lv(s7,"onTransitionEnd")})(),c1("onMouseEnter",["mouseout","mouseover"]),c1("onMouseLeave",["mouseout","mouseover"]),c1("onPointerEnter",["pointerout","pointerover"]),c1("onPointerLeave",["pointerout","pointerover"]),R1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R1("onBeforeInput",["compositionend","keypress","textInput","paste"]),R1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var YH="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nW=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(YH)),Tq="_reactListening"+Math.random().toString(36).slice(2),zJ=!1,UJ=!1,Cq=!1,LJ=!1,Sq=!1,lq=!1,FJ=!1,xq={},DF=/\r\n?/g,kF=/\u0000|\uFFFD/g,q4="http://www.w3.org/1999/xlink",eW="http://www.w3.org/XML/1998/namespace",mF="javascript:throw new Error('React form unexpectedly submitted.')",VF="suppressHydrationWarning",A4="&",oq="/&",GH="$",hH="/$",H5="$?",P4="$~",N6="$!",EF="html",_F="body",yF="head",cW="F!",BJ="F",IJ="loading",jF="style",Hr=0,Z6=1,Dq=2,tW=null,pW=null,NJ={dialog:!0,webview:!0},dW=null,JH=void 0,ZJ=typeof setTimeout==="function"?setTimeout:void 0,iF=typeof clearTimeout==="function"?clearTimeout:void 0,b4=-1,uJ=typeof Promise==="function"?Promise:void 0,fF=typeof queueMicrotask==="function"?queueMicrotask:typeof uJ<"u"?function(g){return uJ.resolve(null).then(g).catch(uU)}:ZJ,aW=null,W4=0,QH=1,TJ=2,CJ=3,Tv=4,Cv=new Map,SJ=new Set,Or=H0.d;H0.d={f:function(){var g=Or.f(),v=_4();return g||v},r:function(g){var v=Cg(g);v!==null&&v.tag===5&&v.type==="form"?tX(v):Or.r(g)},D:function(g){Or.D(g),yG("dns-prefetch",g,null)},C:function(g,v){Or.C(g,v),yG("preconnect",g,v)},L:function(g,v,w){Or.L(g,v,w);var H=u6;if(H&&g&&v){var q='link[rel="preload"][as="'+Rv(v)+'"]';v==="image"?w&&w.imageSrcSet?(q+='[imagesrcset="'+Rv(w.imageSrcSet)+'"]',typeof w.imageSizes==="string"&&(q+='[imagesizes="'+Rv(w.imageSizes)+'"]')):q+='[href="'+Rv(g)+'"]':q+='[href="'+Rv(g)+'"]';var A=q;switch(v){case"style":A=i4(g);break;case"script":A=f4(g)}Cv.has(A)||(g=yg({rel:"preload",href:v==="image"&&w&&w.imageSrcSet?void 0:g,as:v},w),Cv.set(A,g),H.querySelector(q)!==null||v==="style"&&H.querySelector(L8(A))||v==="script"&&H.querySelector(F8(A))||(v=H.createElement("link"),X1(v,"link",g),zg(v),H.head.appendChild(v)))}},m:function(g,v){Or.m(g,v);var w=u6;if(w&&g){var H=v&&typeof v.as==="string"?v.as:"script",q='link[rel="modulepreload"][as="'+Rv(H)+'"][href="'+Rv(g)+'"]',A=q;switch(H){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":A=f4(g)}if(!Cv.has(A)&&(g=yg({rel:"modulepreload",href:g},v),Cv.set(A,g),w.querySelector(q)===null)){switch(H){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(w.querySelector(F8(A)))return}H=w.createElement("link"),X1(H,"link",g),zg(H),w.head.appendChild(H)}}},X:function(g,v){Or.X(g,v);var w=u6;if(w&&g){var H=g0(w).hoistableScripts,q=f4(g),A=H.get(q);A||(A=w.querySelector(F8(q)),A||(g=yg({src:g,async:!0},v),(v=Cv.get(q))&&zb(g,v),A=w.createElement("script"),zg(A),X1(A,"link",g),w.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},H.set(q,A))}},S:function(g,v,w){Or.S(g,v,w);var H=u6;if(H&&g){var q=g0(H).hoistableStyles,A=i4(g);v=v||"default";var W=q.get(A);if(!W){var X={loading:W4,preload:null};if(W=H.querySelector(L8(A)))X.loading=QH|Tv;else{g=yg({rel:"stylesheet",href:g,"data-precedence":v},w),(w=Cv.get(A))&&$b(g,w);var J=W=H.createElement("link");zg(J),X1(J,"link",g),J._p=new Promise(function(R,u){J.onload=R,J.onerror=u}),J.addEventListener("load",function(){X.loading|=QH}),J.addEventListener("error",function(){X.loading|=TJ}),X.loading|=Tv,C2(W,v,H)}W={type:"stylesheet",instance:W,count:1,state:X},q.set(A,W)}}},M:function(g,v){Or.M(g,v);var w=u6;if(w&&g){var H=g0(w).hoistableScripts,q=f4(g),A=H.get(q);A||(A=w.querySelector(F8(q)),A||(g=yg({src:g,async:!0,type:"module"},v),(v=Cv.get(q))&&zb(g,v),A=w.createElement("script"),zg(A),X1(A,"link",g),w.head.appendChild(A)),A={type:"script",instance:A,count:1,state:null},H.set(q,A))}}};var u6=typeof document>"u"?null:document,kq=null,nF=60000,eF=800,cF=500,sW=0,gM=null,mq=null,M4=bL,RH={$$typeof:Qw,Provider:null,Consumer:null,_currentValue:M4,_currentValue2:M4,_threadCount:0},lJ="%c%s%c",xJ="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",oJ="",Vq=" ",tF=Function.prototype.bind,DJ=!1,kJ=null,mJ=null,VJ=null,EJ=null,_J=null,yJ=null,jJ=null,iJ=null,fJ=null,nJ=null;kJ=function(g,v,w,H){v=r(g,v),v!==null&&(w=O(v.memoizedState,w,0,H),v.memoizedState=w,v.baseState=w,g.memoizedProps=yg({},g.memoizedProps),w=K1(g,2),w!==null&&Z0(w,g,2))},mJ=function(g,v,w){v=r(g,v),v!==null&&(w=M(v.memoizedState,w,0),v.memoizedState=w,v.baseState=w,g.memoizedProps=yg({},g.memoizedProps),w=K1(g,2),w!==null&&Z0(w,g,2))},VJ=function(g,v,w,H){v=r(g,v),v!==null&&(w=P(v.memoizedState,w,H),v.memoizedState=w,v.baseState=w,g.memoizedProps=yg({},g.memoizedProps),w=K1(g,2),w!==null&&Z0(w,g,2))},EJ=function(g,v,w){g.pendingProps=O(g.memoizedProps,v,0,w),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},_J=function(g,v){g.pendingProps=M(g.memoizedProps,v,0),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},yJ=function(g,v,w){g.pendingProps=P(g.memoizedProps,v,w),g.alternate&&(g.alternate.pendingProps=g.pendingProps),v=K1(g,2),v!==null&&Z0(v,g,2)},jJ=function(g){var v=K1(g,2);v!==null&&Z0(v,g,2)},iJ=function(g){var v=N4(),w=K1(g,v);w!==null&&Z0(w,g,v)},fJ=function(g){G=g},nJ=function(g){Y=g};var Eq=!0,_q=null,vM=!1,O5=null,q5=null,A5=null,KH=new Map,$H=new Map,P5=[],pF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),yq=null;if(D2.prototype.render=Nb.prototype.render=function(g){var v=this._internalRoot;if(v===null)throw Error("Cannot update an unmounted root.");var w=arguments;typeof w[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):s(w[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof w[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),w=g;var H=v.current,q=vv(H);Ub(H,q,w,v,null,null)},D2.prototype.unmount=Nb.prototype.unmount=function(){var g=arguments;if(typeof g[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),g=this._internalRoot,g!==null){this._internalRoot=null;var v=g.containerInfo;(ag&(g1|bv))!==q1&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Ub(g.current,2,null,g,null,null),_4(),v[mr]=null}},D2.prototype.unstable_scheduleHydration=function(g){if(g){var v=C();g={blockedOn:null,target:g,priority:v};for(var w=0;w<P5.length&&v!==0&&v<P5[w].priority;w++);P5.splice(w,0,g),w===0&&w7(g)}},function(){var g=T6.version;if(g!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(g+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),H0.findDOMNode=function(g){var v=g._reactInternals;if(v===void 0){if(typeof g.render==="function")throw Error("Unable to find node on an unmounted component.");throw g=Object.keys(g).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+g)}return g=t(v),g=g!==null?Ag(g):null,g=g===null?null:g.stateNode,g},!function(){var g={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.5"};return g.overrideHookState=kJ,g.overrideHookStateDeletePath=mJ,g.overrideHookStateRenamePath=VJ,g.overrideProps=EJ,g.overridePropsDeletePath=_J,g.overridePropsRenamePath=yJ,g.scheduleUpdate=jJ,g.scheduleRetry=iJ,g.setErrorHandler=fJ,g.setSuspenseHandler=nJ,g.scheduleRefresh=e,g.scheduleRoot=l,g.setRefreshHandler=j,g.getCurrentFiber=vL,I4(g)}()&&Uw&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var eJ=window.location.protocol;/^(https?|file):$/.test(eJ)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(eJ==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}MB.createRoot=function(g,v){if(!s(g))throw Error("Target container is not a DOM element.");q7(g);var w=!1,H="",q=rY,A=HY,W=OY;return v!==null&&v!==void 0&&(v.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof v==="object"&&v!==null&&v.$$typeof===Jw&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),v.unstable_strictMode===!0&&(w=!0),v.identifierPrefix!==void 0&&(H=v.identifierPrefix),v.onUncaughtError!==void 0&&(q=v.onUncaughtError),v.onCaughtError!==void 0&&(A=v.onCaughtError),v.onRecoverableError!==void 0&&(W=v.onRecoverableError)),v=tG(g,1,!1,null,null,w,H,null,q,A,W,O7),g[mr]=v.current,Pb(g),new Nb(v)},MB.hydrateRoot=function(g,v,w){if(!s(g))throw Error("Target container is not a DOM element.");q7(g),v===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var H=!1,q="",A=rY,W=HY,X=OY,J=null;return w!==null&&w!==void 0&&(w.unstable_strictMode===!0&&(H=!0),w.identifierPrefix!==void 0&&(q=w.identifierPrefix),w.onUncaughtError!==void 0&&(A=w.onUncaughtError),w.onCaughtError!==void 0&&(W=w.onCaughtError),w.onRecoverableError!==void 0&&(X=w.onRecoverableError),w.formState!==void 0&&(J=w.formState)),v=tG(g,1,!0,v,w!=null?w:null,H,q,J,A,W,X,O7),v.context=pG(null),w=v.current,H=vv(w),H=N5(H),q=Nr(H),q.callback=null,Zr(w,q,H),rw(H,"hydrateRoot()",null),w=H,v.current.lanes=w,$r(v,w),Gw(v),g[mr]=v.current,Pb(g),new D2(v)},MB.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var sJ=X4((GS,aJ)=>{aJ.exports=dJ()});var sg=X4((zI)=>{var $4=Mg(O0());(function(){function r(S){if(S==null)return null;if(typeof S==="function")return S.$$typeof===k?null:S.displayName||S.name||null;if(typeof S==="string")return S;switch(S){case j:return"Fragment";case n:return"Profiler";case s:return"StrictMode";case t:return"Suspense";case Ag:return"SuspenseList";case Hg:return"Activity"}if(typeof S==="object")switch(typeof S.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),S.$$typeof){case e:return"Portal";case wg:return S.displayName||"Context";case Gg:return(S._context.displayName||"Context")+".Consumer";case _:var p=S.render;return S=S.displayName,S||(S=p.displayName||p.name||"",S=S!==""?"ForwardRef("+S+")":"ForwardRef"),S;case rg:return p=S.displayName||null,p!==null?p:r(S.type)||"Memo";case a:p=S._payload,S=S._init;try{return r(S(p))}catch(Yg){}}return null}function O(S){return""+S}function P(S){try{O(S);var p=!1}catch(Fg){p=!0}if(p){p=console;var Yg=p.error,Rg=typeof Symbol==="function"&&Symbol.toStringTag&&S[Symbol.toStringTag]||S.constructor.name||"Object";return Yg.call(p,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Rg),O(S)}}function b(S){if(S===j)return"<>";if(typeof S==="object"&&S!==null&&S.$$typeof===a)return"<...>";try{var p=r(S);return p?"<"+p+">":"<...>"}catch(Yg){return"<...>"}}function M(){var S=Ig.A;return S===null?null:S.getOwner()}function Y(){return Error("react-stack-top-frame")}function G(S){if(Qg.call(S,"key")){var p=Object.getOwnPropertyDescriptor(S,"key").get;if(p&&p.isReactWarning)return!1}return S.key!==void 0}function h(S,p){function Yg(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",p))}Yg.isReactWarning=!0,Object.defineProperty(S,"key",{get:Yg,configurable:!0})}function $(){var S=r(this.type);return d[S]||(d[S]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),S=this.props.ref,S!==void 0?S:null}function U(S,p,Yg,Rg,Fg,ng){var dg=Yg.ref;return S={$$typeof:l,type:S,key:p,props:Yg,_owner:Rg},(dg!==void 0?dg:null)!==null?Object.defineProperty(S,"ref",{enumerable:!1,get:$}):Object.defineProperty(S,"ref",{enumerable:!1,value:null}),S._store={},Object.defineProperty(S._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(S,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(S,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Fg}),Object.defineProperty(S,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ng}),Object.freeze&&(Object.freeze(S.props),Object.freeze(S)),S}function z(S,p,Yg,Rg,Fg,ng){var dg=p.children;if(dg!==void 0)if(Rg)if(Kg(dg)){for(Rg=0;Rg<dg.length;Rg++)Q(dg[Rg]);Object.freeze&&Object.freeze(dg)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Q(dg);if(Qg.call(p,"key")){dg=r(S);var x0=Object.keys(p).filter(function(Q1){return Q1!=="key"});Rg=0<x0.length?"{key: someKey, "+x0.join(": ..., ")+": ...}":"{key: someKey}",Wg[dg+Rg]||(x0=0<x0.length?"{"+x0.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Rg,dg,x0,dg),Wg[dg+Rg]=!0)}if(dg=null,Yg!==void 0&&(P(Yg),dg=""+Yg),G(p)&&(P(p.key),dg=""+p.key),"key"in p){Yg={};for(var j0 in p)j0!=="key"&&(Yg[j0]=p[j0])}else Yg=p;return dg&&h(Yg,typeof S==="function"?S.displayName||S.name||"Unknown":S),U(S,dg,Yg,M(),Fg,ng)}function Q(S){L(S)?S._store&&(S._store.validated=1):typeof S==="object"&&S!==null&&S.$$typeof===a&&(S._payload.status==="fulfilled"?L(S._payload.value)&&S._payload.value._store&&(S._payload.value._store.validated=1):S._store&&(S._store.validated=1))}function L(S){return typeof S==="object"&&S!==null&&S.$$typeof===l}var l=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),Gg=Symbol.for("react.consumer"),wg=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),t=Symbol.for("react.suspense"),Ag=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),a=Symbol.for("react.lazy"),Hg=Symbol.for("react.activity"),k=Symbol.for("react.client.reference"),Ig=$4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qg=Object.prototype.hasOwnProperty,Kg=Array.isArray,Vg=console.createTask?console.createTask:function(){return null};$4={react_stack_bottom_frame:function(S){return S()}};var V,d={},vg=$4.react_stack_bottom_frame.bind($4,Y)(),i=Vg(b(Y)),Wg={};zI.Fragment=j,zI.jsxDEV=function(S,p,Yg,Rg){var Fg=1e4>Ig.recentlyCreatedOwnerStacks++;return z(S,p,Yg,Rg,Fg?Error("react-stack-top-frame"):vg,Fg?Vg(b(S)):i)}})()});var P9=Mg(O0(),1),b9=Mg(sJ(),1);var gQ=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var vQ=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var wQ=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var rQ=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var HQ=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var OQ=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var qQ=`/* ── Script modal ───────────────────────────────────────────────────────── */\r
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
`;var AQ=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var PQ=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var bQ=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var WQ=gQ+vQ+wQ+rQ+HQ+OQ+qQ+AQ+PQ+bQ;var l0=Mg(O0(),1);var nq=Mg(O0(),1);var iq=(...r)=>r.filter((O,P,b)=>{return Boolean(O)&&O.trim()!==""&&b.indexOf(O)===P}).join(" ").trim();var MQ=(r)=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var XQ=(r)=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(O,P,b)=>b?b.toUpperCase():P.toLowerCase());var OM=(r)=>{let O=XQ(r);return O.charAt(0).toUpperCase()+O.slice(1)};var UH=Mg(O0(),1);var fq={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var YQ=(r)=>{for(let O in r)if(O.startsWith("aria-")||O==="role"||O==="title")return!0;return!1};var C6=Mg(O0(),1),UB=C6.createContext({});var GQ=()=>C6.useContext(UB);var hQ=UH.forwardRef(({color:r,size:O,strokeWidth:P,absoluteStrokeWidth:b,className:M="",children:Y,iconNode:G,...h},$)=>{let{size:U=24,strokeWidth:z=2,absoluteStrokeWidth:Q=!1,color:L="currentColor",className:l=""}=GQ()??{},e=b??Q?Number(P??z)*24/Number(O??U):P??z;return UH.createElement("svg",{ref:$,...fq,width:O??U??fq.width,height:O??U??fq.height,stroke:r??L,strokeWidth:e,className:iq("lucide",l,M),...!Y&&!YQ(h)&&{"aria-hidden":"true"},...h},[...G.map(([j,s])=>UH.createElement(j,s)),...Array.isArray(Y)?Y:[Y]])});var y=(r,O)=>{let P=nq.forwardRef(({className:b,...M},Y)=>nq.createElement(hQ,{ref:Y,iconNode:O,className:iq(`lucide-${MQ(OM(r))}`,`lucide-${r}`,b),...M}));return P.displayName=OM(r),P};var LB=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],b5=y("braces",LB);var FB=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],S1=y("code-xml",FB);var BB=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Zw=y("file-code-corner",BB);var IB=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],W5=y("loader-circle",IB);var NB=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],M5=y("panel-left",NB);var ZB=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],X5=y("triangle-alert",ZB);var uB=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Y5=y("user-round",uB);var TB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],LH=y("activity",TB);var CB=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],FH=y("arrow-down-to-line",CB);var SB=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],BH=y("arrow-up-to-line",SB);var lB=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],IH=y("blocks",lB);var xB=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],G4=y("book-marked",xB);var oB=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],NH=y("book-open",oB);var DB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ZH=y("calendar",DB);var kB=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],uH=y("check",kB);var mB=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],l1=y("chevron-down",mB);var VB=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],TH=y("chevron-left",VB);var EB=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ar=y("chevron-right",EB);var _B=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],iv=y("chevron-up",_B);var yB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],CH=y("clock",yB);var jB=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Pr=y("copy",jB);var iB=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],fv=y("database",iB);var fB=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],h4=y("download",fB);var nB=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],SH=y("eye",nB);var eB=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],J4=y("folder-open",eB);var cB=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],lH=y("hash",cB);var tB=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],xH=y("link-2",tB);var pB=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],oH=y("list",pB);var dB=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],DH=y("lock",dB);var aB=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],S6=y("message-square-plus",aB);var sB=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],kH=y("message-square",sB);var gI=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],mH=y("package",gI);var vI=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Q4=y("pencil",vI);var wI=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],VH=y("play",wI);var rI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],EH=y("plus",rI);var HI=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],_H=y("radio",HI);var OI=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],R4=y("refresh-cw",OI);var qI=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],yH=y("search",qI);var AI=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],l6=y("shield-alert",AI);var PI=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jH=y("shield",PI);var bI=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],iH=y("syringe",bI);var WI=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],uw=y("terminal",WI);var MI=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],K4=y("timer",MI);var XI=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],fH=y("toggle-left",XI);var YI=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],nH=y("toggle-right",YI);var GI=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],n1=y("trash-2",GI);var hI=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],eH=y("type",hI);var JI=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],cH=y("upload",JI);var QI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],x6=y("user-plus",QI);var RI=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],tH=y("wrench",RI);var KI=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],br=y("zap",KI);var $I=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nv=y("x",$I);var eq={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`,dockPanelEdge:"right"};var zA=Mg(O0(),1);var YO=Mg(O0(),1);var T0=Mg(sg(),1),UI={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},JQ=({script:r,selected:O,dot:P,duration:b,onSelect:M,onEdit:Y,sendToBackend:G})=>{let h=(L)=>{L.stopPropagation(),G({type:"update_script",id:r.id,patch:{enabled:!r.enabled}})},$=(L)=>{L.stopPropagation(),G({type:"duplicate_script",id:r.id})},U=(L)=>{if(L.stopPropagation(),!window.confirm(`Delete "${r.name}"?`))return;G({type:"delete_script",id:r.id})},z=(L)=>{L.stopPropagation(),Y()},Q=r.bindings?.length??0;return T0.jsxDEV("div",{className:`ls-item${O?" ls-selected":""}${!r.enabled&&r.type!=="library"?" ls-disabled":""}`,onClick:M,children:[T0.jsxDEV("span",{className:UI[P],title:P},void 0,!1,void 0,this),T0.jsxDEV("div",{className:"ls-item-body",children:[T0.jsxDEV("div",{className:"ls-item-name",title:r.name,children:r.name},void 0,!1,void 0,this),T0.jsxDEV("div",{className:"ls-item-meta",children:[r.type!=="library"&&T0.jsxDEV("span",{children:r.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),b!==void 0&&P!=="running"&&T0.jsxDEV("span",{style:{color:P==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[b,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),r.type!=="library"&&Q>0&&T0.jsxDEV("div",{className:"ls-item-bindings",children:r.bindings.map((L,l)=>T0.jsxDEV("span",{className:"ls-binding-badge",children:[L.type==="character"?T0.jsxDEV(Y5,{size:9},void 0,!1,void 0,this):T0.jsxDEV(kH,{size:9},void 0,!1,void 0,this),T0.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:L.displayName},void 0,!1,void 0,this)]},l,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),T0.jsxDEV("div",{className:"ls-item-actions",children:[T0.jsxDEV("button",{className:"ls-icon-btn",onClick:z,title:"Edit script",children:T0.jsxDEV(Q4,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),r.type!=="library"&&T0.jsxDEV("button",{className:"ls-icon-btn",onClick:h,title:r.enabled?"Disable":"Enable",children:r.enabled?T0.jsxDEV(nH,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):T0.jsxDEV(fH,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),T0.jsxDEV("button",{className:"ls-icon-btn",onClick:$,title:"Duplicate",children:T0.jsxDEV(Pr,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),T0.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:U,title:"Delete",children:T0.jsxDEV(n1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var C0=Uint8Array,Mv=Uint16Array,JM=Int32Array,tq=new C0([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pq=new C0([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),WM=new C0([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),UQ=function(r,O){var P=new Mv(31);for(var b=0;b<31;++b)P[b]=O+=1<<r[b-1];var M=new JM(P[30]);for(var b=1;b<30;++b)for(var Y=P[b];Y<P[b+1];++Y)M[Y]=Y-P[b]<<5|b;return{b:P,r:M}},LQ=UQ(tq,2),FQ=LQ.b,MM=LQ.r;FQ[28]=258,MM[258]=28;var BQ=UQ(pq,0),LI=BQ.b,QQ=BQ.r,XM=new Mv(32768);for(pg=0;pg<32768;++pg)Tw=(pg&43690)>>1|(pg&21845)<<1,Tw=(Tw&52428)>>2|(Tw&13107)<<2,Tw=(Tw&61680)>>4|(Tw&3855)<<4,XM[pg]=((Tw&65280)>>8|(Tw&255)<<8)>>1;var Tw,pg,Sw=function(r,O,P){var b=r.length,M=0,Y=new Mv(O);for(;M<b;++M)if(r[M])++Y[r[M]-1];var G=new Mv(O);for(M=1;M<O;++M)G[M]=G[M-1]+Y[M-1]<<1;var h;if(P){h=new Mv(1<<O);var $=15-O;for(M=0;M<b;++M)if(r[M]){var U=M<<4|r[M],z=O-r[M],Q=G[r[M]-1]++<<z;for(var L=Q|(1<<z)-1;Q<=L;++Q)h[XM[Q]>>$]=U}}else{h=new Mv(b);for(M=0;M<b;++M)if(r[M])h[M]=XM[G[r[M]-1]++]>>15-r[M]}return h},G5=new C0(288);for(pg=0;pg<144;++pg)G5[pg]=8;var pg;for(pg=144;pg<256;++pg)G5[pg]=9;var pg;for(pg=256;pg<280;++pg)G5[pg]=7;var pg;for(pg=280;pg<288;++pg)G5[pg]=8;var pg,aH=new C0(32);for(pg=0;pg<32;++pg)aH[pg]=5;var pg,FI=Sw(G5,9,0),BI=Sw(G5,9,1),II=Sw(aH,5,0),NI=Sw(aH,5,1),qM=function(r){var O=r[0];for(var P=1;P<r.length;++P)if(r[P]>O)O=r[P];return O},ev=function(r,O,P){var b=O/8|0;return(r[b]|r[b+1]<<8)>>(O&7)&P},AM=function(r,O){var P=O/8|0;return(r[P]|r[P+1]<<8|r[P+2]<<16)>>(O&7)},QM=function(r){return(r+7)/8|0},sH=function(r,O,P){if(O==null||O<0)O=0;if(P==null||P>r.length)P=r.length;return new C0(r.subarray(O,P))};var ZI=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x1=function(r,O,P){var b=Error(O||ZI[r]);if(b.code=r,Error.captureStackTrace)Error.captureStackTrace(b,x1);if(!P)throw b;return b},uI=function(r,O,P,b){var M=r.length,Y=b?b.length:0;if(!M||O.f&&!O.l)return P||new C0(0);var G=!P,h=G||O.i!=2,$=O.i;if(G)P=new C0(M*3);var U=function(Pg){var hv=P.length;if(Pg>hv){var m1=new C0(Math.max(hv*2,Pg));m1.set(P),P=m1}},z=O.f||0,Q=O.p||0,L=O.b||0,l=O.l,e=O.d,j=O.m,s=O.n,n=M*8;do{if(!l){z=ev(r,Q,1);var Gg=ev(r,Q+1,3);if(Q+=3,!Gg){var wg=QM(Q)+4,_=r[wg-4]|r[wg-3]<<8,t=wg+_;if(t>M){if($)x1(0);break}if(h)U(L+_);P.set(r.subarray(wg,t),L),O.b=L+=_,O.p=Q=t*8,O.f=z;continue}else if(Gg==1)l=BI,e=NI,j=9,s=5;else if(Gg==2){var Ag=ev(r,Q,31)+257,rg=ev(r,Q+10,15)+4,a=Ag+ev(r,Q+5,31)+1;Q+=14;var Hg=new C0(a),k=new C0(19);for(var Ig=0;Ig<rg;++Ig)k[WM[Ig]]=ev(r,Q+Ig*3,7);Q+=rg*3;var Qg=qM(k),Kg=(1<<Qg)-1,Vg=Sw(k,Qg,1);for(var Ig=0;Ig<a;){var V=Vg[ev(r,Q,Kg)];Q+=V&15;var wg=V>>4;if(wg<16)Hg[Ig++]=wg;else{var d=0,vg=0;if(wg==16)vg=3+ev(r,Q,3),Q+=2,d=Hg[Ig-1];else if(wg==17)vg=3+ev(r,Q,7),Q+=3;else if(wg==18)vg=11+ev(r,Q,127),Q+=7;while(vg--)Hg[Ig++]=d}}var i=Hg.subarray(0,Ag),Wg=Hg.subarray(Ag);j=qM(i),s=qM(Wg),l=Sw(i,j,1),e=Sw(Wg,s,1)}else x1(1);if(Q>n){if($)x1(0);break}}if(h)U(L+131072);var S=(1<<j)-1,p=(1<<s)-1,Yg=Q;for(;;Yg=Q){var d=l[AM(r,Q)&S],Rg=d>>4;if(Q+=d&15,Q>n){if($)x1(0);break}if(!d)x1(2);if(Rg<256)P[L++]=Rg;else if(Rg==256){Yg=Q,l=null;break}else{var Fg=Rg-254;if(Rg>264){var Ig=Rg-257,ng=tq[Ig];Fg=ev(r,Q,(1<<ng)-1)+FQ[Ig],Q+=ng}var dg=e[AM(r,Q)&p],x0=dg>>4;if(!dg)x1(3);Q+=dg&15;var Wg=LI[x0];if(x0>3){var ng=pq[x0];Wg+=AM(r,Q)&(1<<ng)-1,Q+=ng}if(Q>n){if($)x1(0);break}if(h)U(L+131072);var j0=L+Fg;if(L<Wg){var Q1=Y-Wg,xw=Math.min(Wg,j0);if(Q1+L<0)x1(3);for(;L<xw;++L)P[L]=b[Q1+L]}for(;L<j0;++L)P[L]=P[L-Wg]}}if(O.l=l,O.p=Yg,O.b=L,O.f=z,l)z=1,O.m=j,O.d=e,O.n=s}while(!z);return L!=P.length&&G?sH(P,0,L):P.subarray(0,L)},Wr=function(r,O,P){P<<=O&7;var b=O/8|0;r[b]|=P,r[b+1]|=P>>8},pH=function(r,O,P){P<<=O&7;var b=O/8|0;r[b]|=P,r[b+1]|=P>>8,r[b+2]|=P>>16},PM=function(r,O){var P=[];for(var b=0;b<r.length;++b)if(r[b])P.push({s:b,f:r[b]});var M=P.length,Y=P.slice();if(!M)return{t:NQ,l:0};if(M==1){var G=new C0(P[0].s+1);return G[P[0].s]=1,{t:G,l:1}}P.sort(function(t,Ag){return t.f-Ag.f}),P.push({s:-1,f:25001});var h=P[0],$=P[1],U=0,z=1,Q=2;P[0]={s:-1,f:h.f+$.f,l:h,r:$};while(z!=M-1)h=P[P[U].f<P[Q].f?U++:Q++],$=P[U!=z&&P[U].f<P[Q].f?U++:Q++],P[z++]={s:-1,f:h.f+$.f,l:h,r:$};var L=Y[0].s;for(var b=1;b<M;++b)if(Y[b].s>L)L=Y[b].s;var l=new Mv(L+1),e=YM(P[z-1],l,0);if(e>O){var b=0,j=0,s=e-O,n=1<<s;Y.sort(function(Ag,rg){return l[rg.s]-l[Ag.s]||Ag.f-rg.f});for(;b<M;++b){var Gg=Y[b].s;if(l[Gg]>O)j+=n-(1<<e-l[Gg]),l[Gg]=O;else break}j>>=s;while(j>0){var wg=Y[b].s;if(l[wg]<O)j-=1<<O-l[wg]++-1;else++b}for(;b>=0&&j;--b){var _=Y[b].s;if(l[_]==O)--l[_],++j}e=O}return{t:new C0(l),l:e}},YM=function(r,O,P){return r.s==-1?Math.max(YM(r.l,O,P+1),YM(r.r,O,P+1)):O[r.s]=P},RQ=function(r){var O=r.length;while(O&&!r[--O]);var P=new Mv(++O),b=0,M=r[0],Y=1,G=function($){P[b++]=$};for(var h=1;h<=O;++h)if(r[h]==M&&h!=O)++Y;else{if(!M&&Y>2){for(;Y>138;Y-=138)G(32754);if(Y>2)G(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){G(M),--Y;for(;Y>6;Y-=6)G(8304);if(Y>2)G(Y-3<<5|8208),Y=0}while(Y--)G(M);Y=1,M=r[h]}return{c:P.subarray(0,b),n:O}},dH=function(r,O){var P=0;for(var b=0;b<O.length;++b)P+=r[b]*O[b];return P},IQ=function(r,O,P){var b=P.length,M=QM(O+2);r[M]=b&255,r[M+1]=b>>8,r[M+2]=r[M]^255,r[M+3]=r[M+1]^255;for(var Y=0;Y<b;++Y)r[M+Y+4]=P[Y];return(M+4+b)*8},KQ=function(r,O,P,b,M,Y,G,h,$,U,z){Wr(O,z++,P),++M[256];var Q=PM(M,15),L=Q.t,l=Q.l,e=PM(Y,15),j=e.t,s=e.l,n=RQ(L),Gg=n.c,wg=n.n,_=RQ(j),t=_.c,Ag=_.n,rg=new Mv(19);for(var a=0;a<Gg.length;++a)++rg[Gg[a]&31];for(var a=0;a<t.length;++a)++rg[t[a]&31];var Hg=PM(rg,7),k=Hg.t,Ig=Hg.l,Qg=19;for(;Qg>4&&!k[WM[Qg-1]];--Qg);var Kg=U+5<<3,Vg=dH(M,G5)+dH(Y,aH)+G,V=dH(M,L)+dH(Y,j)+G+14+3*Qg+dH(rg,k)+2*rg[16]+3*rg[17]+7*rg[18];if($>=0&&Kg<=Vg&&Kg<=V)return IQ(O,z,r.subarray($,$+U));var d,vg,i,Wg;if(Wr(O,z,1+(V<Vg)),z+=2,V<Vg){d=Sw(L,l,0),vg=L,i=Sw(j,s,0),Wg=j;var S=Sw(k,Ig,0);Wr(O,z,wg-257),Wr(O,z+5,Ag-1),Wr(O,z+10,Qg-4),z+=14;for(var a=0;a<Qg;++a)Wr(O,z+3*a,k[WM[a]]);z+=3*Qg;var p=[Gg,t];for(var Yg=0;Yg<2;++Yg){var Rg=p[Yg];for(var a=0;a<Rg.length;++a){var Fg=Rg[a]&31;if(Wr(O,z,S[Fg]),z+=k[Fg],Fg>15)Wr(O,z,Rg[a]>>5&127),z+=Rg[a]>>12}}}else d=FI,vg=G5,i=II,Wg=aH;for(var a=0;a<h;++a){var ng=b[a];if(ng>255){var Fg=ng>>18&31;if(pH(O,z,d[Fg+257]),z+=vg[Fg+257],Fg>7)Wr(O,z,ng>>23&31),z+=tq[Fg];var dg=ng&31;if(pH(O,z,i[dg]),z+=Wg[dg],dg>3)pH(O,z,ng>>5&8191),z+=pq[dg]}else pH(O,z,d[ng]),z+=vg[ng]}return pH(O,z,d[256]),z+vg[256]},TI=new JM([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),NQ=new C0(0),CI=function(r,O,P,b,M,Y){var G=Y.z||r.length,h=new C0(b+G+5*(1+Math.ceil(G/7000))+M),$=h.subarray(b,h.length-M),U=Y.l,z=(Y.r||0)&7;if(O){if(z)$[0]=Y.r>>3;var Q=TI[O-1],L=Q>>13,l=Q&8191,e=(1<<P)-1,j=Y.p||new Mv(32768),s=Y.h||new Mv(e+1),n=Math.ceil(P/3),Gg=2*n,wg=function(Jv){return(r[Jv]^r[Jv+1]<<n^r[Jv+2]<<Gg)&e},_=new JM(25000),t=new Mv(288),Ag=new Mv(32),rg=0,a=0,Hg=Y.i||0,k=0,Ig=Y.w||0,Qg=0;for(;Hg+2<G;++Hg){var Kg=wg(Hg),Vg=Hg&32767,V=s[Kg];if(j[Vg]=V,s[Kg]=Vg,Ig<=Hg){var d=G-Hg;if((rg>7000||k>24576)&&(d>423||!U)){z=KQ(r,$,0,_,t,Ag,a,k,Qg,Hg-Qg,z),k=rg=a=0,Qg=Hg;for(var vg=0;vg<286;++vg)t[vg]=0;for(var vg=0;vg<30;++vg)Ag[vg]=0}var i=2,Wg=0,S=l,p=Vg-V&32767;if(d>2&&Kg==wg(Hg-p)){var Yg=Math.min(L,d)-1,Rg=Math.min(32767,Hg),Fg=Math.min(258,d);while(p<=Rg&&--S&&Vg!=V){if(r[Hg+i]==r[Hg+i-p]){var ng=0;for(;ng<Fg&&r[Hg+ng]==r[Hg+ng-p];++ng);if(ng>i){if(i=ng,Wg=p,ng>Yg)break;var dg=Math.min(p,ng-2),x0=0;for(var vg=0;vg<dg;++vg){var j0=Hg-p+vg&32767,Q1=j[j0],xw=j0-Q1&32767;if(xw>x0)x0=xw,V=j0}}}Vg=V,V=j[Vg],p+=Vg-V&32767}}if(Wg){_[k++]=268435456|MM[i]<<18|QQ[Wg];var Pg=MM[i]&31,hv=QQ[Wg]&31;a+=tq[Pg]+pq[hv],++t[257+Pg],++Ag[hv],Ig=Hg+i,++rg}else _[k++]=r[Hg],++t[r[Hg]]}}for(Hg=Math.max(Hg,Ig);Hg<G;++Hg)_[k++]=r[Hg],++t[r[Hg]];if(z=KQ(r,$,U,_,t,Ag,a,k,Qg,Hg-Qg,z),!U)Y.r=z&7|$[z/8|0]<<3,z-=7,Y.h=s,Y.p=j,Y.i=Hg,Y.w=Ig}else{for(var Hg=Y.w||0;Hg<G+U;Hg+=65535){var m1=Hg+65535;if(m1>=G)$[z/8|0]=U,m1=G;z=IQ($,z+1,r.subarray(Hg,m1))}Y.i=G}return sH(h,0,b+QM(z)+M)},SI=function(){var r=new Int32Array(256);for(var O=0;O<256;++O){var P=O,b=9;while(--b)P=(P&1&&-306674912)^P>>>1;r[O]=P}return r}(),lI=function(){var r=-1;return{p:function(O){var P=r;for(var b=0;b<O.length;++b)P=SI[P&255^O[b]]^P>>>8;r=P},d:function(){return~r}}};var xI=function(r,O,P,b,M){if(!M){if(M={l:1},O.dictionary){var Y=O.dictionary.subarray(-32768),G=new C0(Y.length+r.length);G.set(Y),G.set(r,Y.length),r=G,M.w=Y.length}}return CI(r,O.level==null?6:O.level,O.mem==null?M.l?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):20:12+O.mem,P,b,M)},ZQ=function(r,O){var P={};for(var b in r)P[b]=r[b];for(var b in O)P[b]=O[b];return P};var Cw=function(r,O){return r[O]|r[O+1]<<8},cv=function(r,O){return(r[O]|r[O+1]<<8|r[O+2]<<16|r[O+3]<<24)>>>0},bM=function(r,O){return cv(r,O)+cv(r,O+4)*4294967296},h1=function(r,O,P){for(;P;++O)r[O]=P,P>>>=8};function oI(r,O){return xI(r,O||{},0,0)}function DI(r,O){return uI(r,{i:2},O&&O.out,O&&O.dictionary)}var uQ=function(r,O,P,b){for(var M in r){var Y=r[M],G=O+M,h=b;if(Array.isArray(Y))h=ZQ(b,Y[1]),Y=Y[0];if(Y instanceof C0)P[G]=[Y,h];else P[G+="/"]=[new C0(0),h],uQ(Y,G,P,b)}},$Q=typeof TextEncoder<"u"&&new TextEncoder,GM=typeof TextDecoder<"u"&&new TextDecoder,kI=0;try{GM.decode(NQ,{stream:!0}),kI=1}catch(r){}var mI=function(r){for(var O="",P=0;;){var b=r[P++],M=(b>127)+(b>223)+(b>239);if(P+M>r.length)return{s:O,r:sH(r,P-1)};if(!M)O+=String.fromCharCode(b);else if(M==3)b=((b&15)<<18|(r[P++]&63)<<12|(r[P++]&63)<<6|r[P++]&63)-65536,O+=String.fromCharCode(55296|b>>10,56320|b&1023);else if(M&1)O+=String.fromCharCode((b&31)<<6|r[P++]&63);else O+=String.fromCharCode((b&15)<<12|(r[P++]&63)<<6|r[P++]&63)}};function cq(r,O){if(O){var P=new C0(r.length);for(var b=0;b<r.length;++b)P[b]=r.charCodeAt(b);return P}if($Q)return $Q.encode(r);var M=r.length,Y=new C0(r.length+(r.length>>1)),G=0,h=function(z){Y[G++]=z};for(var b=0;b<M;++b){if(G+5>Y.length){var $=new C0(G+8+(M-b<<1));$.set(Y),Y=$}var U=r.charCodeAt(b);if(U<128||O)h(U);else if(U<2048)h(192|U>>6),h(128|U&63);else if(U>55295&&U<57344)U=65536+(U&1047552)|r.charCodeAt(++b)&1023,h(240|U>>18),h(128|U>>12&63),h(128|U>>6&63),h(128|U&63);else h(224|U>>12),h(128|U>>6&63),h(128|U&63)}return sH(Y,0,G)}function RM(r,O){if(O){var P="";for(var b=0;b<r.length;b+=16384)P+=String.fromCharCode.apply(null,r.subarray(b,b+16384));return P}else if(GM)return GM.decode(r);else{var M=mI(r),Y=M.s,P=M.r;if(P.length)x1(8);return Y}}var VI=function(r,O){return O+30+Cw(r,O+26)+Cw(r,O+28)},EI=function(r,O,P){var b=Cw(r,O+28),M=RM(r.subarray(O+46,O+46+b),!(Cw(r,O+8)&2048)),Y=O+46+b,G=cv(r,O+20),h=P&&G==4294967295?_I(r,Y):[G,cv(r,O+24),cv(r,O+42)],$=h[0],U=h[1],z=h[2];return[Cw(r,O+10),$,U,M,Y+Cw(r,O+30)+Cw(r,O+32),z]},_I=function(r,O){for(;Cw(r,O)!=1;O+=4+Cw(r,O+2));return[bM(r,O+12),bM(r,O+4),bM(r,O+20)]},hM=function(r){var O=0;if(r)for(var P in r){var b=r[P].length;if(b>65535)x1(9);O+=b+4}return O},zQ=function(r,O,P,b,M,Y,G,h){var $=b.length,U=P.extra,z=h&&h.length,Q=hM(U);if(h1(r,O,G!=null?33639248:67324752),O+=4,G!=null)r[O++]=20,r[O++]=P.os;r[O]=20,O+=2,r[O++]=P.flag<<1|(Y<0&&8),r[O++]=M&&8,r[O++]=P.compression&255,r[O++]=P.compression>>8;var L=new Date(P.mtime==null?Date.now():P.mtime),l=L.getFullYear()-1980;if(l<0||l>119)x1(10);if(h1(r,O,l<<25|L.getMonth()+1<<21|L.getDate()<<16|L.getHours()<<11|L.getMinutes()<<5|L.getSeconds()>>1),O+=4,Y!=-1)h1(r,O,P.crc),h1(r,O+4,Y<0?-Y-2:Y),h1(r,O+8,P.size);if(h1(r,O+12,$),h1(r,O+14,Q),O+=16,G!=null)h1(r,O,z),h1(r,O+6,P.attrs),h1(r,O+10,G),O+=14;if(r.set(b,O),O+=$,Q)for(var e in U){var j=U[e],s=j.length;h1(r,O,+e),h1(r,O+2,s),r.set(j,O+4),O+=4+s}if(z)r.set(h,O),O+=z;return O},yI=function(r,O,P,b,M){h1(r,O,101010256),h1(r,O+8,P),h1(r,O+10,P),h1(r,O+12,b),h1(r,O+16,M)};function TQ(r,O){if(!O)O={};var P={},b=[];uQ(r,"",P,O);var M=0,Y=0;for(var G in P){var h=P[G],$=h[0],U=h[1],z=U.level==0?0:8,Q=cq(G),L=Q.length,l=U.comment,e=l&&cq(l),j=e&&e.length,s=hM(U.extra);if(L>65535)x1(11);var n=z?oI($,U):$,Gg=n.length,wg=lI();wg.p($),b.push(ZQ(U,{size:$.length,crc:wg.d(),c:n,f:Q,m:e,u:L!=G.length||e&&l.length!=j,o:M,compression:z})),M+=30+L+s+Gg,Y+=76+2*(L+s)+(j||0)+Gg}var _=new C0(Y+22),t=M,Ag=Y-M;for(var rg=0;rg<b.length;++rg){var Q=b[rg];zQ(_,Q.o,Q,Q.f,Q.u,Q.c.length);var a=30+Q.f.length+hM(Q.extra);_.set(Q.c,Q.o+a),zQ(_,M,Q,Q.f,Q.u,Q.c.length,Q.o,Q.m),M+=16+a+(Q.m?Q.m.length:0)}return yI(_,M,b.length,Ag,t),_}function CQ(r,O){var P={},b=r.length-22;for(;cv(r,b)!=101010256;--b)if(!b||r.length-b>65558)x1(13);var M=Cw(r,b+8);if(!M)return{};var Y=cv(r,b+16),G=Y==4294967295||M==65535;if(G){var h=cv(r,b-12);if(G=cv(r,h)==101075792,G)M=cv(r,h+32),Y=cv(r,h+48)}var $=O&&O.filter;for(var U=0;U<M;++U){var z=EI(r,Y,G),Q=z[0],L=z[1],l=z[2],e=z[3],j=z[4],s=z[5],n=VI(r,s);if(Y=j,!$||$({name:e,size:L,originalSize:l,compression:Q}))if(!Q)P[e]=sH(r,n,n+L);else if(Q==8)P[e]=DI(r.subarray(n,n+L),{out:new C0(l)});else x1(14,"unknown compression type "+Q)}return P}function KM(r){let O=r.map((b)=>({name:b.name,code:b.code,type:b.type,triggers:b.triggers,bindings:b.bindings,folder:b.folder,metadata:b.metadata})),P={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:O};return TQ({"pack.json":cq(JSON.stringify(P,null,2))})}function SQ(r,O){let P=KM(r),b=new Blob([P.buffer],{type:"application/zip"}),M=URL.createObjectURL(b),Y=document.createElement("a");Y.href=M,Y.download=`${O}.lumiscript.zip`,Y.click(),URL.revokeObjectURL(M)}var Yj0=Object.freeze({status:"aborted"});function E(r,O,P){function b(h,$){if(!h._zod)Object.defineProperty(h,"_zod",{value:{def:$,constr:G,traits:new Set},enumerable:!1});if(h._zod.traits.has(r))return;h._zod.traits.add(r),O(h,$);let U=G.prototype,z=Object.keys(U);for(let Q=0;Q<z.length;Q++){let L=z[Q];if(!(L in h))h[L]=U[L].bind(h)}}let M=P?.Parent??Object;class Y extends M{}Object.defineProperty(Y,"name",{value:r});function G(h){var $;let U=P?.Parent?new Y:this;b(U,h),($=U._zod).deferred??($.deferred=[]);for(let z of U._zod.deferred)z();return U}return Object.defineProperty(G,"init",{value:b}),Object.defineProperty(G,Symbol.hasInstance,{value:(h)=>{if(P?.Parent&&h instanceof P.Parent)return!0;return h?._zod?.traits?.has(r)}}),Object.defineProperty(G,"name",{value:r}),G}var Gj0=Symbol("zod_brand");class Mr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class gO extends Error{constructor(r){super(`Encountered unidirectional transform during encode: ${r}`);this.name="ZodEncodeError"}}var dq={};function Xr(r){if(r)Object.assign(dq,r);return dq}var W0={};AB(W0,{unwrapMessage:()=>vO,uint8ArrayToHex:()=>hN,uint8ArrayToBase64url:()=>YN,uint8ArrayToBase64:()=>yQ,stringifyPrimitive:()=>kQ,slugify:()=>zM,shallowClone:()=>oQ,safeExtend:()=>qN,required:()=>bN,randomString:()=>sI,propertyKeyTypes:()=>LM,promiseAllObject:()=>aI,primitiveTypes:()=>DQ,prefixIssues:()=>qO,pick:()=>rN,partial:()=>PN,parsedType:()=>WN,optionalKeys:()=>FM,omit:()=>HN,objectClone:()=>tI,numKeys:()=>gN,nullish:()=>HO,normalizeParams:()=>mg,mergeDefs:()=>Yr,merge:()=>AN,jsonStringifyReplacer:()=>D6,joinValues:()=>cI,issue:()=>k6,isPlainObject:()=>z4,isObject:()=>o6,hexToUint8Array:()=>GN,getSizableOrigin:()=>EQ,getParsedType:()=>vN,getLengthableOrigin:()=>AO,getEnumValues:()=>wO,getElementAtPath:()=>dI,floatSafeRemainder:()=>xQ,finalizeIssue:()=>lw,extend:()=>ON,escapeRegex:()=>Gr,esc:()=>aq,defineLazy:()=>P0,createTransparentProxy:()=>wN,cloneDef:()=>pI,clone:()=>tv,cleanRegex:()=>OO,cleanEnum:()=>MN,captureStackTrace:()=>sq,cached:()=>rO,base64urlToUint8Array:()=>XN,base64ToUint8Array:()=>_Q,assignProp:()=>h5,assertNotEqual:()=>iI,assertNever:()=>nI,assertIs:()=>fI,assertEqual:()=>jI,assert:()=>eI,allowsEval:()=>UM,aborted:()=>J5,NUMBER_FORMAT_RANGES:()=>mQ,Class:()=>jQ,BIGINT_FORMAT_RANGES:()=>VQ});function jI(r){return r}function iI(r){return r}function fI(r){}function nI(r){throw Error("Unexpected value in exhaustive check")}function eI(r){}function wO(r){let O=Object.values(r).filter((b)=>typeof b==="number");return Object.entries(r).filter(([b,M])=>O.indexOf(+b)===-1).map(([b,M])=>M)}function cI(r,O="|"){return r.map((P)=>kQ(P)).join(O)}function D6(r,O){if(typeof O==="bigint")return O.toString();return O}function rO(r){return{get value(){{let P=r();return Object.defineProperty(this,"value",{value:P}),P}throw Error("cached value already set")}}}function HO(r){return r===null||r===void 0}function OO(r){let O=r.startsWith("^")?1:0,P=r.endsWith("$")?r.length-1:r.length;return r.slice(O,P)}function xQ(r,O){let P=(r.toString().split(".")[1]||"").length,b=O.toString(),M=(b.split(".")[1]||"").length;if(M===0&&/\d?e-\d?/.test(b)){let $=b.match(/\d?e-(\d?)/);if($?.[1])M=Number.parseInt($[1])}let Y=P>M?P:M,G=Number.parseInt(r.toFixed(Y).replace(".","")),h=Number.parseInt(O.toFixed(Y).replace(".",""));return G%h/10**Y}var lQ=Symbol("evaluating");function P0(r,O,P){let b=void 0;Object.defineProperty(r,O,{get(){if(b===lQ)return;if(b===void 0)b=lQ,b=P();return b},set(M){Object.defineProperty(r,O,{value:M})},configurable:!0})}function tI(r){return Object.create(Object.getPrototypeOf(r),Object.getOwnPropertyDescriptors(r))}function h5(r,O,P){Object.defineProperty(r,O,{value:P,writable:!0,enumerable:!0,configurable:!0})}function Yr(...r){let O={};for(let P of r){let b=Object.getOwnPropertyDescriptors(P);Object.assign(O,b)}return Object.defineProperties({},O)}function pI(r){return Yr(r._zod.def)}function dI(r,O){if(!O)return r;return O.reduce((P,b)=>P?.[b],r)}function aI(r){let O=Object.keys(r),P=O.map((b)=>r[b]);return Promise.all(P).then((b)=>{let M={};for(let Y=0;Y<O.length;Y++)M[O[Y]]=b[Y];return M})}function sI(r=10){let P="";for(let b=0;b<r;b++)P+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return P}function aq(r){return JSON.stringify(r)}function zM(r){return r.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var sq="captureStackTrace"in Error?Error.captureStackTrace:(...r)=>{};function o6(r){return typeof r==="object"&&r!==null&&!Array.isArray(r)}var UM=rO(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(r){return!1}});function z4(r){if(o6(r)===!1)return!1;let O=r.constructor;if(O===void 0)return!0;if(typeof O!=="function")return!0;let P=O.prototype;if(o6(P)===!1)return!1;if(Object.prototype.hasOwnProperty.call(P,"isPrototypeOf")===!1)return!1;return!0}function oQ(r){if(z4(r))return{...r};if(Array.isArray(r))return[...r];return r}function gN(r){let O=0;for(let P in r)if(Object.prototype.hasOwnProperty.call(r,P))O++;return O}var vN=(r)=>{let O=typeof r;switch(O){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(r)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(r))return"array";if(r===null)return"null";if(r.then&&typeof r.then==="function"&&r.catch&&typeof r.catch==="function")return"promise";if(typeof Map<"u"&&r instanceof Map)return"map";if(typeof Set<"u"&&r instanceof Set)return"set";if(typeof Date<"u"&&r instanceof Date)return"date";if(typeof File<"u"&&r instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${O}`)}},LM=new Set(["string","number","symbol"]),DQ=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Gr(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tv(r,O,P){let b=new r._zod.constr(O??r._zod.def);if(!O||P?.parent)b._zod.parent=r;return b}function mg(r){let O=r;if(!O)return{};if(typeof O==="string")return{error:()=>O};if(O?.message!==void 0){if(O?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");O.error=O.message}if(delete O.message,typeof O.error==="string")return{...O,error:()=>O.error};return O}function wN(r){let O;return new Proxy({},{get(P,b,M){return O??(O=r()),Reflect.get(O,b,M)},set(P,b,M,Y){return O??(O=r()),Reflect.set(O,b,M,Y)},has(P,b){return O??(O=r()),Reflect.has(O,b)},deleteProperty(P,b){return O??(O=r()),Reflect.deleteProperty(O,b)},ownKeys(P){return O??(O=r()),Reflect.ownKeys(O)},getOwnPropertyDescriptor(P,b){return O??(O=r()),Reflect.getOwnPropertyDescriptor(O,b)},defineProperty(P,b,M){return O??(O=r()),Reflect.defineProperty(O,b,M)}})}function kQ(r){if(typeof r==="bigint")return r.toString()+"n";if(typeof r==="string")return`"${r}"`;return`${r}`}function FM(r){return Object.keys(r).filter((O)=>{return r[O]._zod.optin==="optional"&&r[O]._zod.optout==="optional"})}var mQ={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},VQ={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function rN(r,O){let P=r._zod.def,b=P.checks;if(b&&b.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let Y=Yr(r._zod.def,{get shape(){let G={};for(let h in O){if(!(h in P.shape))throw Error(`Unrecognized key: "${h}"`);if(!O[h])continue;G[h]=P.shape[h]}return h5(this,"shape",G),G},checks:[]});return tv(r,Y)}function HN(r,O){let P=r._zod.def,b=P.checks;if(b&&b.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let Y=Yr(r._zod.def,{get shape(){let G={...r._zod.def.shape};for(let h in O){if(!(h in P.shape))throw Error(`Unrecognized key: "${h}"`);if(!O[h])continue;delete G[h]}return h5(this,"shape",G),G},checks:[]});return tv(r,Y)}function ON(r,O){if(!z4(O))throw Error("Invalid input to extend: expected a plain object");let P=r._zod.def.checks;if(P&&P.length>0){let Y=r._zod.def.shape;for(let G in O)if(Object.getOwnPropertyDescriptor(Y,G)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let M=Yr(r._zod.def,{get shape(){let Y={...r._zod.def.shape,...O};return h5(this,"shape",Y),Y}});return tv(r,M)}function qN(r,O){if(!z4(O))throw Error("Invalid input to safeExtend: expected a plain object");let P=Yr(r._zod.def,{get shape(){let b={...r._zod.def.shape,...O};return h5(this,"shape",b),b}});return tv(r,P)}function AN(r,O){let P=Yr(r._zod.def,{get shape(){let b={...r._zod.def.shape,...O._zod.def.shape};return h5(this,"shape",b),b},get catchall(){return O._zod.def.catchall},checks:[]});return tv(r,P)}function PN(r,O,P){let M=O._zod.def.checks;if(M&&M.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let G=Yr(O._zod.def,{get shape(){let h=O._zod.def.shape,$={...h};if(P)for(let U in P){if(!(U in h))throw Error(`Unrecognized key: "${U}"`);if(!P[U])continue;$[U]=r?new r({type:"optional",innerType:h[U]}):h[U]}else for(let U in h)$[U]=r?new r({type:"optional",innerType:h[U]}):h[U];return h5(this,"shape",$),$},checks:[]});return tv(O,G)}function bN(r,O,P){let b=Yr(O._zod.def,{get shape(){let M=O._zod.def.shape,Y={...M};if(P)for(let G in P){if(!(G in Y))throw Error(`Unrecognized key: "${G}"`);if(!P[G])continue;Y[G]=new r({type:"nonoptional",innerType:M[G]})}else for(let G in M)Y[G]=new r({type:"nonoptional",innerType:M[G]});return h5(this,"shape",Y),Y}});return tv(O,b)}function J5(r,O=0){if(r.aborted===!0)return!0;for(let P=O;P<r.issues.length;P++)if(r.issues[P]?.continue!==!0)return!0;return!1}function qO(r,O){return O.map((P)=>{var b;return(b=P).path??(b.path=[]),P.path.unshift(r),P})}function vO(r){return typeof r==="string"?r:r?.message}function lw(r,O,P){let b={...r,path:r.path??[]};if(!r.message){let M=vO(r.inst?._zod.def?.error?.(r))??vO(O?.error?.(r))??vO(P.customError?.(r))??vO(P.localeError?.(r))??"Invalid input";b.message=M}if(delete b.inst,delete b.continue,!O?.reportInput)delete b.input;return b}function EQ(r){if(r instanceof Set)return"set";if(r instanceof Map)return"map";if(r instanceof File)return"file";return"unknown"}function AO(r){if(Array.isArray(r))return"array";if(typeof r==="string")return"string";return"unknown"}function WN(r){let O=typeof r;switch(O){case"number":return Number.isNaN(r)?"nan":"number";case"object":{if(r===null)return"null";if(Array.isArray(r))return"array";let P=r;if(P&&Object.getPrototypeOf(P)!==Object.prototype&&"constructor"in P&&P.constructor)return P.constructor.name}}return O}function k6(...r){let[O,P,b]=r;if(typeof O==="string")return{message:O,code:"custom",input:P,inst:b};return{...O}}function MN(r){return Object.entries(r).filter(([O,P])=>{return Number.isNaN(Number.parseInt(O,10))}).map((O)=>O[1])}function _Q(r){let O=atob(r),P=new Uint8Array(O.length);for(let b=0;b<O.length;b++)P[b]=O.charCodeAt(b);return P}function yQ(r){let O="";for(let P=0;P<r.length;P++)O+=String.fromCharCode(r[P]);return btoa(O)}function XN(r){let O=r.replace(/-/g,"+").replace(/_/g,"/"),P="=".repeat((4-O.length%4)%4);return _Q(O+P)}function YN(r){return yQ(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function GN(r){let O=r.replace(/^0x/,"");if(O.length%2!==0)throw Error("Invalid hex string length");let P=new Uint8Array(O.length/2);for(let b=0;b<O.length;b+=2)P[b/2]=Number.parseInt(O.slice(b,b+2),16);return P}function hN(r){return Array.from(r).map((O)=>O.toString(16).padStart(2,"0")).join("")}class jQ{constructor(...r){}}var iQ=(r,O)=>{r.name="$ZodError",Object.defineProperty(r,"_zod",{value:r._zod,enumerable:!1}),Object.defineProperty(r,"issues",{value:O,enumerable:!1}),r.message=JSON.stringify(O,D6,2),Object.defineProperty(r,"toString",{value:()=>r.message,enumerable:!1})},gA=E("$ZodError",iQ),BM=E("$ZodError",iQ,{Parent:Error});function fQ(r,O=(P)=>P.message){let P={},b=[];for(let M of r.issues)if(M.path.length>0)P[M.path[0]]=P[M.path[0]]||[],P[M.path[0]].push(O(M));else b.push(O(M));return{formErrors:b,fieldErrors:P}}function nQ(r,O=(P)=>P.message){let P={_errors:[]},b=(M)=>{for(let Y of M.issues)if(Y.code==="invalid_union"&&Y.errors.length)Y.errors.map((G)=>b({issues:G}));else if(Y.code==="invalid_key")b({issues:Y.issues});else if(Y.code==="invalid_element")b({issues:Y.issues});else if(Y.path.length===0)P._errors.push(O(Y));else{let G=P,h=0;while(h<Y.path.length){let $=Y.path[h];if(h!==Y.path.length-1)G[$]=G[$]||{_errors:[]};else G[$]=G[$]||{_errors:[]},G[$]._errors.push(O(Y));G=G[$],h++}}};return b(r),P}var vA=(r)=>(O,P,b,M)=>{let Y=b?Object.assign(b,{async:!1}):{async:!1},G=O._zod.run({value:P,issues:[]},Y);if(G instanceof Promise)throw new Mr;if(G.issues.length){let h=new(M?.Err??r)(G.issues.map(($)=>lw($,Y,Xr())));throw sq(h,M?.callee),h}return G.value};var wA=(r)=>async(O,P,b,M)=>{let Y=b?Object.assign(b,{async:!0}):{async:!0},G=O._zod.run({value:P,issues:[]},Y);if(G instanceof Promise)G=await G;if(G.issues.length){let h=new(M?.Err??r)(G.issues.map(($)=>lw($,Y,Xr())));throw sq(h,M?.callee),h}return G.value};var PO=(r)=>(O,P,b)=>{let M=b?{...b,async:!1}:{async:!1},Y=O._zod.run({value:P,issues:[]},M);if(Y instanceof Promise)throw new Mr;return Y.issues.length?{success:!1,error:new(r??gA)(Y.issues.map((G)=>lw(G,M,Xr())))}:{success:!0,data:Y.value}},eQ=PO(BM),bO=(r)=>async(O,P,b)=>{let M=b?Object.assign(b,{async:!0}):{async:!0},Y=O._zod.run({value:P,issues:[]},M);if(Y instanceof Promise)Y=await Y;return Y.issues.length?{success:!1,error:new r(Y.issues.map((G)=>lw(G,M,Xr())))}:{success:!0,data:Y.value}},cQ=bO(BM),tQ=(r)=>(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return vA(r)(O,P,M)};var pQ=(r)=>(O,P,b)=>{return vA(r)(O,P,b)};var dQ=(r)=>async(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return wA(r)(O,P,M)};var aQ=(r)=>async(O,P,b)=>{return wA(r)(O,P,b)};var sQ=(r)=>(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return PO(r)(O,P,M)};var gR=(r)=>(O,P,b)=>{return PO(r)(O,P,b)};var vR=(r)=>async(O,P,b)=>{let M=b?Object.assign(b,{direction:"backward"}):{direction:"backward"};return bO(r)(O,P,M)};var wR=(r)=>async(O,P,b)=>{return bO(r)(O,P,b)};var rR=/^[cC][^\s-]{8,}$/,HR=/^[0-9a-z]+$/,OR=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,qR=/^[0-9a-vA-V]{20}$/,AR=/^[A-Za-z0-9]{27}$/,PR=/^[a-zA-Z0-9_-]{21}$/,bR=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var WR=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,IM=(r)=>{if(!r)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${r}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var MR=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var QN="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function XR(){return new RegExp(QN,"u")}var YR=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,GR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var hR=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,JR=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,QR=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,NM=/^[A-Za-z0-9_-]*$/;var RR=/^\+[1-9]\d{6,14}$/,KR="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",$R=new RegExp(`^${KR}$`);function zR(r){return typeof r.precision==="number"?r.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":r.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${r.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function UR(r){return new RegExp(`^${zR(r)}$`)}function LR(r){let O=zR({precision:r.precision}),P=["Z"];if(r.local)P.push("");if(r.offset)P.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let b=`${O}(?:${P.join("|")})`;return new RegExp(`^${KR}T(?:${b})$`)}var FR=(r)=>{let O=r?`[\\s\\S]{${r?.minimum??0},${r?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${O}$`)};var BR=/^[^A-Z]*$/,IR=/^[^a-z]*$/;var Xv=E("$ZodCheck",(r,O)=>{var P;r._zod??(r._zod={}),r._zod.def=O,(P=r._zod).onattach??(P.onattach=[])});var NR=E("$ZodCheckMaxLength",(r,O)=>{var P;Xv.init(r,O),(P=r._zod.def).when??(P.when=(b)=>{let M=b.value;return!HO(M)&&M.length!==void 0}),r._zod.onattach.push((b)=>{let M=b._zod.bag.maximum??Number.POSITIVE_INFINITY;if(O.maximum<M)b._zod.bag.maximum=O.maximum}),r._zod.check=(b)=>{let M=b.value;if(M.length<=O.maximum)return;let G=AO(M);b.issues.push({origin:G,code:"too_big",maximum:O.maximum,inclusive:!0,input:M,inst:r,continue:!O.abort})}}),ZR=E("$ZodCheckMinLength",(r,O)=>{var P;Xv.init(r,O),(P=r._zod.def).when??(P.when=(b)=>{let M=b.value;return!HO(M)&&M.length!==void 0}),r._zod.onattach.push((b)=>{let M=b._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(O.minimum>M)b._zod.bag.minimum=O.minimum}),r._zod.check=(b)=>{let M=b.value;if(M.length>=O.minimum)return;let G=AO(M);b.issues.push({origin:G,code:"too_small",minimum:O.minimum,inclusive:!0,input:M,inst:r,continue:!O.abort})}}),uR=E("$ZodCheckLengthEquals",(r,O)=>{var P;Xv.init(r,O),(P=r._zod.def).when??(P.when=(b)=>{let M=b.value;return!HO(M)&&M.length!==void 0}),r._zod.onattach.push((b)=>{let M=b._zod.bag;M.minimum=O.length,M.maximum=O.length,M.length=O.length}),r._zod.check=(b)=>{let M=b.value,Y=M.length;if(Y===O.length)return;let G=AO(M),h=Y>O.length;b.issues.push({origin:G,...h?{code:"too_big",maximum:O.length}:{code:"too_small",minimum:O.length},inclusive:!0,exact:!0,input:b.value,inst:r,continue:!O.abort})}}),WO=E("$ZodCheckStringFormat",(r,O)=>{var P,b;if(Xv.init(r,O),r._zod.onattach.push((M)=>{let Y=M._zod.bag;if(Y.format=O.format,O.pattern)Y.patterns??(Y.patterns=new Set),Y.patterns.add(O.pattern)}),O.pattern)(P=r._zod).check??(P.check=(M)=>{if(O.pattern.lastIndex=0,O.pattern.test(M.value))return;M.issues.push({origin:"string",code:"invalid_format",format:O.format,input:M.value,...O.pattern?{pattern:O.pattern.toString()}:{},inst:r,continue:!O.abort})});else(b=r._zod).check??(b.check=()=>{})}),TR=E("$ZodCheckRegex",(r,O)=>{WO.init(r,O),r._zod.check=(P)=>{if(O.pattern.lastIndex=0,O.pattern.test(P.value))return;P.issues.push({origin:"string",code:"invalid_format",format:"regex",input:P.value,pattern:O.pattern.toString(),inst:r,continue:!O.abort})}}),CR=E("$ZodCheckLowerCase",(r,O)=>{O.pattern??(O.pattern=BR),WO.init(r,O)}),SR=E("$ZodCheckUpperCase",(r,O)=>{O.pattern??(O.pattern=IR),WO.init(r,O)}),lR=E("$ZodCheckIncludes",(r,O)=>{Xv.init(r,O);let P=Gr(O.includes),b=new RegExp(typeof O.position==="number"?`^.{${O.position}}${P}`:P);O.pattern=b,r._zod.onattach.push((M)=>{let Y=M._zod.bag;Y.patterns??(Y.patterns=new Set),Y.patterns.add(b)}),r._zod.check=(M)=>{if(M.value.includes(O.includes,O.position))return;M.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:O.includes,input:M.value,inst:r,continue:!O.abort})}}),xR=E("$ZodCheckStartsWith",(r,O)=>{Xv.init(r,O);let P=new RegExp(`^${Gr(O.prefix)}.*`);O.pattern??(O.pattern=P),r._zod.onattach.push((b)=>{let M=b._zod.bag;M.patterns??(M.patterns=new Set),M.patterns.add(P)}),r._zod.check=(b)=>{if(b.value.startsWith(O.prefix))return;b.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:O.prefix,input:b.value,inst:r,continue:!O.abort})}}),oR=E("$ZodCheckEndsWith",(r,O)=>{Xv.init(r,O);let P=new RegExp(`.*${Gr(O.suffix)}$`);O.pattern??(O.pattern=P),r._zod.onattach.push((b)=>{let M=b._zod.bag;M.patterns??(M.patterns=new Set),M.patterns.add(P)}),r._zod.check=(b)=>{if(b.value.endsWith(O.suffix))return;b.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:O.suffix,input:b.value,inst:r,continue:!O.abort})}});var DR=E("$ZodCheckOverwrite",(r,O)=>{Xv.init(r,O),r._zod.check=(P)=>{P.value=O.tx(P.value)}});class ZM{constructor(r=[]){if(this.content=[],this.indent=0,this)this.args=r}indented(r){this.indent+=1,r(this),this.indent-=1}write(r){if(typeof r==="function"){r(this,{execution:"sync"}),r(this,{execution:"async"});return}let P=r.split(`
`).filter((Y)=>Y),b=Math.min(...P.map((Y)=>Y.length-Y.trimStart().length)),M=P.map((Y)=>Y.slice(b)).map((Y)=>" ".repeat(this.indent*2)+Y);for(let Y of M)this.content.push(Y)}compile(){let r=Function,O=this?.args,b=[...(this?.content??[""]).map((M)=>`  ${M}`)];return new r(...O,b.join(`
`))}}var mR={major:4,minor:3,patch:6};var E0=E("$ZodType",(r,O)=>{var P;r??(r={}),r._zod.def=O,r._zod.bag=r._zod.bag||{},r._zod.version=mR;let b=[...r._zod.def.checks??[]];if(r._zod.traits.has("$ZodCheck"))b.unshift(r);for(let M of b)for(let Y of M._zod.onattach)Y(r);if(b.length===0)(P=r._zod).deferred??(P.deferred=[]),r._zod.deferred?.push(()=>{r._zod.run=r._zod.parse});else{let M=(G,h,$)=>{let U=J5(G),z;for(let Q of h){if(Q._zod.def.when){if(!Q._zod.def.when(G))continue}else if(U)continue;let L=G.issues.length,l=Q._zod.check(G);if(l instanceof Promise&&$?.async===!1)throw new Mr;if(z||l instanceof Promise)z=(z??Promise.resolve()).then(async()=>{if(await l,G.issues.length===L)return;if(!U)U=J5(G,L)});else{if(G.issues.length===L)continue;if(!U)U=J5(G,L)}}if(z)return z.then(()=>{return G});return G},Y=(G,h,$)=>{if(J5(G))return G.aborted=!0,G;let U=M(h,b,$);if(U instanceof Promise){if($.async===!1)throw new Mr;return U.then((z)=>r._zod.parse(z,$))}return r._zod.parse(U,$)};r._zod.run=(G,h)=>{if(h.skipChecks)return r._zod.parse(G,h);if(h.direction==="backward"){let U=r._zod.parse({value:G.value,issues:[]},{...h,skipChecks:!0});if(U instanceof Promise)return U.then((z)=>{return Y(z,G,h)});return Y(U,G,h)}let $=r._zod.parse(G,h);if($ instanceof Promise){if(h.async===!1)throw new Mr;return $.then((U)=>M(U,b,h))}return M($,b,h)}}P0(r,"~standard",()=>({validate:(M)=>{try{let Y=eQ(r,M);return Y.success?{value:Y.data}:{issues:Y.error?.issues}}catch(Y){return cQ(r,M).then((G)=>G.success?{value:G.data}:{issues:G.error?.issues})}},vendor:"zod",version:1}))}),qA=E("$ZodString",(r,O)=>{E0.init(r,O),r._zod.pattern=[...r?._zod.bag?.patterns??[]].pop()??FR(r._zod.bag),r._zod.parse=(P,b)=>{if(O.coerce)try{P.value=String(P.value)}catch(M){}if(typeof P.value==="string")return P;return P.issues.push({expected:"string",code:"invalid_type",input:P.value,inst:r}),P}}),F0=E("$ZodStringFormat",(r,O)=>{WO.init(r,O),qA.init(r,O)}),eR=E("$ZodGUID",(r,O)=>{O.pattern??(O.pattern=WR),F0.init(r,O)}),cR=E("$ZodUUID",(r,O)=>{if(O.version){let b={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[O.version];if(b===void 0)throw Error(`Invalid UUID version: "${O.version}"`);O.pattern??(O.pattern=IM(b))}else O.pattern??(O.pattern=IM());F0.init(r,O)}),tR=E("$ZodEmail",(r,O)=>{O.pattern??(O.pattern=MR),F0.init(r,O)}),pR=E("$ZodURL",(r,O)=>{F0.init(r,O),r._zod.check=(P)=>{try{let b=P.value.trim(),M=new URL(b);if(O.hostname){if(O.hostname.lastIndex=0,!O.hostname.test(M.hostname))P.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:O.hostname.source,input:P.value,inst:r,continue:!O.abort})}if(O.protocol){if(O.protocol.lastIndex=0,!O.protocol.test(M.protocol.endsWith(":")?M.protocol.slice(0,-1):M.protocol))P.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:O.protocol.source,input:P.value,inst:r,continue:!O.abort})}if(O.normalize)P.value=M.href;else P.value=b;return}catch(b){P.issues.push({code:"invalid_format",format:"url",input:P.value,inst:r,continue:!O.abort})}}}),dR=E("$ZodEmoji",(r,O)=>{O.pattern??(O.pattern=XR()),F0.init(r,O)}),aR=E("$ZodNanoID",(r,O)=>{O.pattern??(O.pattern=PR),F0.init(r,O)}),sR=E("$ZodCUID",(r,O)=>{O.pattern??(O.pattern=rR),F0.init(r,O)}),g3=E("$ZodCUID2",(r,O)=>{O.pattern??(O.pattern=HR),F0.init(r,O)}),v3=E("$ZodULID",(r,O)=>{O.pattern??(O.pattern=OR),F0.init(r,O)}),w3=E("$ZodXID",(r,O)=>{O.pattern??(O.pattern=qR),F0.init(r,O)}),r3=E("$ZodKSUID",(r,O)=>{O.pattern??(O.pattern=AR),F0.init(r,O)}),H3=E("$ZodISODateTime",(r,O)=>{O.pattern??(O.pattern=LR(O)),F0.init(r,O)}),O3=E("$ZodISODate",(r,O)=>{O.pattern??(O.pattern=$R),F0.init(r,O)}),q3=E("$ZodISOTime",(r,O)=>{O.pattern??(O.pattern=UR(O)),F0.init(r,O)}),A3=E("$ZodISODuration",(r,O)=>{O.pattern??(O.pattern=bR),F0.init(r,O)}),P3=E("$ZodIPv4",(r,O)=>{O.pattern??(O.pattern=YR),F0.init(r,O),r._zod.bag.format="ipv4"}),b3=E("$ZodIPv6",(r,O)=>{O.pattern??(O.pattern=GR),F0.init(r,O),r._zod.bag.format="ipv6",r._zod.check=(P)=>{try{new URL(`http://[${P.value}]`)}catch{P.issues.push({code:"invalid_format",format:"ipv6",input:P.value,inst:r,continue:!O.abort})}}});var W3=E("$ZodCIDRv4",(r,O)=>{O.pattern??(O.pattern=hR),F0.init(r,O)}),M3=E("$ZodCIDRv6",(r,O)=>{O.pattern??(O.pattern=JR),F0.init(r,O),r._zod.check=(P)=>{let b=P.value.split("/");try{if(b.length!==2)throw Error();let[M,Y]=b;if(!Y)throw Error();let G=Number(Y);if(`${G}`!==Y)throw Error();if(G<0||G>128)throw Error();new URL(`http://[${M}]`)}catch{P.issues.push({code:"invalid_format",format:"cidrv6",input:P.value,inst:r,continue:!O.abort})}}});function X3(r){if(r==="")return!0;if(r.length%4!==0)return!1;try{return atob(r),!0}catch{return!1}}var Y3=E("$ZodBase64",(r,O)=>{O.pattern??(O.pattern=QR),F0.init(r,O),r._zod.bag.contentEncoding="base64",r._zod.check=(P)=>{if(X3(P.value))return;P.issues.push({code:"invalid_format",format:"base64",input:P.value,inst:r,continue:!O.abort})}});function RN(r){if(!NM.test(r))return!1;let O=r.replace(/[-_]/g,(b)=>b==="-"?"+":"/"),P=O.padEnd(Math.ceil(O.length/4)*4,"=");return X3(P)}var G3=E("$ZodBase64URL",(r,O)=>{O.pattern??(O.pattern=NM),F0.init(r,O),r._zod.bag.contentEncoding="base64url",r._zod.check=(P)=>{if(RN(P.value))return;P.issues.push({code:"invalid_format",format:"base64url",input:P.value,inst:r,continue:!O.abort})}}),h3=E("$ZodE164",(r,O)=>{O.pattern??(O.pattern=RR),F0.init(r,O)});function KN(r,O=null){try{let P=r.split(".");if(P.length!==3)return!1;let[b]=P;if(!b)return!1;let M=JSON.parse(atob(b));if("typ"in M&&M?.typ!=="JWT")return!1;if(!M.alg)return!1;if(O&&(!("alg"in M)||M.alg!==O))return!1;return!0}catch{return!1}}var J3=E("$ZodJWT",(r,O)=>{F0.init(r,O),r._zod.check=(P)=>{if(KN(P.value,O.alg))return;P.issues.push({code:"invalid_format",format:"jwt",input:P.value,inst:r,continue:!O.abort})}});var Q3=E("$ZodUnknown",(r,O)=>{E0.init(r,O),r._zod.parse=(P)=>P}),R3=E("$ZodNever",(r,O)=>{E0.init(r,O),r._zod.parse=(P,b)=>{return P.issues.push({expected:"never",code:"invalid_type",input:P.value,inst:r}),P}});function VR(r,O,P){if(r.issues.length)O.issues.push(...qO(P,r.issues));O.value[P]=r.value}var K3=E("$ZodArray",(r,O)=>{E0.init(r,O),r._zod.parse=(P,b)=>{let M=P.value;if(!Array.isArray(M))return P.issues.push({expected:"array",code:"invalid_type",input:M,inst:r}),P;P.value=Array(M.length);let Y=[];for(let G=0;G<M.length;G++){let h=M[G],$=O.element._zod.run({value:h,issues:[]},b);if($ instanceof Promise)Y.push($.then((U)=>VR(U,P,G)));else VR($,P,G)}if(Y.length)return Promise.all(Y).then(()=>P);return P}});function OA(r,O,P,b,M){if(r.issues.length){if(M&&!(P in b))return;O.issues.push(...qO(P,r.issues))}if(r.value===void 0){if(P in b)O.value[P]=void 0}else O.value[P]=r.value}function $3(r){let O=Object.keys(r.shape);for(let b of O)if(!r.shape?.[b]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${b}": expected a Zod schema`);let P=FM(r.shape);return{...r,keys:O,keySet:new Set(O),numKeys:O.length,optionalKeys:new Set(P)}}function z3(r,O,P,b,M,Y){let G=[],h=M.keySet,$=M.catchall._zod,U=$.def.type,z=$.optout==="optional";for(let Q in O){if(h.has(Q))continue;if(U==="never"){G.push(Q);continue}let L=$.run({value:O[Q],issues:[]},b);if(L instanceof Promise)r.push(L.then((l)=>OA(l,P,Q,O,z)));else OA(L,P,Q,O,z)}if(G.length)P.issues.push({code:"unrecognized_keys",keys:G,input:O,inst:Y});if(!r.length)return P;return Promise.all(r).then(()=>{return P})}var $N=E("$ZodObject",(r,O)=>{if(E0.init(r,O),!Object.getOwnPropertyDescriptor(O,"shape")?.get){let h=O.shape;Object.defineProperty(O,"shape",{get:()=>{let $={...h};return Object.defineProperty(O,"shape",{value:$}),$}})}let b=rO(()=>$3(O));P0(r._zod,"propValues",()=>{let h=O.shape,$={};for(let U in h){let z=h[U]._zod;if(z.values){$[U]??($[U]=new Set);for(let Q of z.values)$[U].add(Q)}}return $});let M=o6,Y=O.catchall,G;r._zod.parse=(h,$)=>{G??(G=b.value);let U=h.value;if(!M(U))return h.issues.push({expected:"object",code:"invalid_type",input:U,inst:r}),h;h.value={};let z=[],Q=G.shape;for(let L of G.keys){let l=Q[L],e=l._zod.optout==="optional",j=l._zod.run({value:U[L],issues:[]},$);if(j instanceof Promise)z.push(j.then((s)=>OA(s,h,L,U,e)));else OA(j,h,L,U,e)}if(!Y)return z.length?Promise.all(z).then(()=>h):h;return z3(z,U,h,$,b.value,r)}}),U3=E("$ZodObjectJIT",(r,O)=>{$N.init(r,O);let P=r._zod.parse,b=rO(()=>$3(O)),M=(L)=>{let l=new ZM(["shape","payload","ctx"]),e=b.value,j=(wg)=>{let _=aq(wg);return`shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`};l.write("const input = payload.value;");let s=Object.create(null),n=0;for(let wg of e.keys)s[wg]=`key_${n++}`;l.write("const newResult = {};");for(let wg of e.keys){let _=s[wg],t=aq(wg),rg=L[wg]?._zod?.optout==="optional";if(l.write(`const ${_} = ${j(wg)};`),rg)l.write(`
        if (${_}.issues.length) {
          if (${t} in input) {
            payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${t}, ...iss.path] : [${t}]
            })));
          }
        }
        
        if (${_}.value === undefined) {
          if (${t} in input) {
            newResult[${t}] = undefined;
          }
        } else {
          newResult[${t}] = ${_}.value;
        }
        
      `);else l.write(`
        if (${_}.issues.length) {
          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${t}, ...iss.path] : [${t}]
          })));
        }
        
        if (${_}.value === undefined) {
          if (${t} in input) {
            newResult[${t}] = undefined;
          }
        } else {
          newResult[${t}] = ${_}.value;
        }
        
      `)}l.write("payload.value = newResult;"),l.write("return payload;");let Gg=l.compile();return(wg,_)=>Gg(L,wg,_)},Y,G=o6,h=!dq.jitless,U=h&&UM.value,z=O.catchall,Q;r._zod.parse=(L,l)=>{Q??(Q=b.value);let e=L.value;if(!G(e))return L.issues.push({expected:"object",code:"invalid_type",input:e,inst:r}),L;if(h&&U&&l?.async===!1&&l.jitless!==!0){if(!Y)Y=M(O.shape);if(L=Y(L,l),!z)return L;return z3([],e,L,l,Q,r)}return P(L,l)}});function ER(r,O,P,b){for(let Y of r)if(Y.issues.length===0)return O.value=Y.value,O;let M=r.filter((Y)=>!J5(Y));if(M.length===1)return O.value=M[0].value,M[0];return O.issues.push({code:"invalid_union",input:O.value,inst:P,errors:r.map((Y)=>Y.issues.map((G)=>lw(G,b,Xr())))}),O}var L3=E("$ZodUnion",(r,O)=>{E0.init(r,O),P0(r._zod,"optin",()=>O.options.some((M)=>M._zod.optin==="optional")?"optional":void 0),P0(r._zod,"optout",()=>O.options.some((M)=>M._zod.optout==="optional")?"optional":void 0),P0(r._zod,"values",()=>{if(O.options.every((M)=>M._zod.values))return new Set(O.options.flatMap((M)=>Array.from(M._zod.values)));return}),P0(r._zod,"pattern",()=>{if(O.options.every((M)=>M._zod.pattern)){let M=O.options.map((Y)=>Y._zod.pattern);return new RegExp(`^(${M.map((Y)=>OO(Y.source)).join("|")})$`)}return});let P=O.options.length===1,b=O.options[0]._zod.run;r._zod.parse=(M,Y)=>{if(P)return b(M,Y);let G=!1,h=[];for(let $ of O.options){let U=$._zod.run({value:M.value,issues:[]},Y);if(U instanceof Promise)h.push(U),G=!0;else{if(U.issues.length===0)return U;h.push(U)}}if(!G)return ER(h,M,r,Y);return Promise.all(h).then(($)=>{return ER($,M,r,Y)})}});var F3=E("$ZodIntersection",(r,O)=>{E0.init(r,O),r._zod.parse=(P,b)=>{let M=P.value,Y=O.left._zod.run({value:M,issues:[]},b),G=O.right._zod.run({value:M,issues:[]},b);if(Y instanceof Promise||G instanceof Promise)return Promise.all([Y,G]).then(([$,U])=>{return _R(P,$,U)});return _R(P,Y,G)}});function uM(r,O){if(r===O)return{valid:!0,data:r};if(r instanceof Date&&O instanceof Date&&+r===+O)return{valid:!0,data:r};if(z4(r)&&z4(O)){let P=Object.keys(O),b=Object.keys(r).filter((Y)=>P.indexOf(Y)!==-1),M={...r,...O};for(let Y of b){let G=uM(r[Y],O[Y]);if(!G.valid)return{valid:!1,mergeErrorPath:[Y,...G.mergeErrorPath]};M[Y]=G.data}return{valid:!0,data:M}}if(Array.isArray(r)&&Array.isArray(O)){if(r.length!==O.length)return{valid:!1,mergeErrorPath:[]};let P=[];for(let b=0;b<r.length;b++){let M=r[b],Y=O[b],G=uM(M,Y);if(!G.valid)return{valid:!1,mergeErrorPath:[b,...G.mergeErrorPath]};P.push(G.data)}return{valid:!0,data:P}}return{valid:!1,mergeErrorPath:[]}}function _R(r,O,P){let b=new Map,M;for(let h of O.issues)if(h.code==="unrecognized_keys"){M??(M=h);for(let $ of h.keys){if(!b.has($))b.set($,{});b.get($).l=!0}}else r.issues.push(h);for(let h of P.issues)if(h.code==="unrecognized_keys")for(let $ of h.keys){if(!b.has($))b.set($,{});b.get($).r=!0}else r.issues.push(h);let Y=[...b].filter(([,h])=>h.l&&h.r).map(([h])=>h);if(Y.length&&M)r.issues.push({...M,keys:Y});if(J5(r))return r;let G=uM(O.value,P.value);if(!G.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(G.mergeErrorPath)}`);return r.value=G.data,r}var B3=E("$ZodEnum",(r,O)=>{E0.init(r,O);let P=wO(O.entries),b=new Set(P);r._zod.values=b,r._zod.pattern=new RegExp(`^(${P.filter((M)=>LM.has(typeof M)).map((M)=>typeof M==="string"?Gr(M):M.toString()).join("|")})$`),r._zod.parse=(M,Y)=>{let G=M.value;if(b.has(G))return M;return M.issues.push({code:"invalid_value",values:P,input:G,inst:r}),M}}),I3=E("$ZodLiteral",(r,O)=>{if(E0.init(r,O),O.values.length===0)throw Error("Cannot create literal schema with no valid values");let P=new Set(O.values);r._zod.values=P,r._zod.pattern=new RegExp(`^(${O.values.map((b)=>typeof b==="string"?Gr(b):b?Gr(b.toString()):String(b)).join("|")})$`),r._zod.parse=(b,M)=>{let Y=b.value;if(P.has(Y))return b;return b.issues.push({code:"invalid_value",values:O.values,input:Y,inst:r}),b}});var N3=E("$ZodTransform",(r,O)=>{E0.init(r,O),r._zod.parse=(P,b)=>{if(b.direction==="backward")throw new gO(r.constructor.name);let M=O.transform(P.value,P);if(b.async)return(M instanceof Promise?M:Promise.resolve(M)).then((G)=>{return P.value=G,P});if(M instanceof Promise)throw new Mr;return P.value=M,P}});function yR(r,O){if(r.issues.length&&O===void 0)return{issues:[],value:void 0};return r}var TM=E("$ZodOptional",(r,O)=>{E0.init(r,O),r._zod.optin="optional",r._zod.optout="optional",P0(r._zod,"values",()=>{return O.innerType._zod.values?new Set([...O.innerType._zod.values,void 0]):void 0}),P0(r._zod,"pattern",()=>{let P=O.innerType._zod.pattern;return P?new RegExp(`^(${OO(P.source)})?$`):void 0}),r._zod.parse=(P,b)=>{if(O.innerType._zod.optin==="optional"){let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>yR(Y,P.value));return yR(M,P.value)}if(P.value===void 0)return P;return O.innerType._zod.run(P,b)}}),Z3=E("$ZodExactOptional",(r,O)=>{TM.init(r,O),P0(r._zod,"values",()=>O.innerType._zod.values),P0(r._zod,"pattern",()=>O.innerType._zod.pattern),r._zod.parse=(P,b)=>{return O.innerType._zod.run(P,b)}}),u3=E("$ZodNullable",(r,O)=>{E0.init(r,O),P0(r._zod,"optin",()=>O.innerType._zod.optin),P0(r._zod,"optout",()=>O.innerType._zod.optout),P0(r._zod,"pattern",()=>{let P=O.innerType._zod.pattern;return P?new RegExp(`^(${OO(P.source)}|null)$`):void 0}),P0(r._zod,"values",()=>{return O.innerType._zod.values?new Set([...O.innerType._zod.values,null]):void 0}),r._zod.parse=(P,b)=>{if(P.value===null)return P;return O.innerType._zod.run(P,b)}}),T3=E("$ZodDefault",(r,O)=>{E0.init(r,O),r._zod.optin="optional",P0(r._zod,"values",()=>O.innerType._zod.values),r._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);if(P.value===void 0)return P.value=O.defaultValue,P;let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>jR(Y,O));return jR(M,O)}});function jR(r,O){if(r.value===void 0)r.value=O.defaultValue;return r}var C3=E("$ZodPrefault",(r,O)=>{E0.init(r,O),r._zod.optin="optional",P0(r._zod,"values",()=>O.innerType._zod.values),r._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);if(P.value===void 0)P.value=O.defaultValue;return O.innerType._zod.run(P,b)}}),S3=E("$ZodNonOptional",(r,O)=>{E0.init(r,O),P0(r._zod,"values",()=>{let P=O.innerType._zod.values;return P?new Set([...P].filter((b)=>b!==void 0)):void 0}),r._zod.parse=(P,b)=>{let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>iR(Y,r));return iR(M,r)}});function iR(r,O){if(!r.issues.length&&r.value===void 0)r.issues.push({code:"invalid_type",expected:"nonoptional",input:r.value,inst:O});return r}var l3=E("$ZodCatch",(r,O)=>{E0.init(r,O),P0(r._zod,"optin",()=>O.innerType._zod.optin),P0(r._zod,"optout",()=>O.innerType._zod.optout),P0(r._zod,"values",()=>O.innerType._zod.values),r._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>{if(P.value=Y.value,Y.issues.length)P.value=O.catchValue({...P,error:{issues:Y.issues.map((G)=>lw(G,b,Xr()))},input:P.value}),P.issues=[];return P});if(P.value=M.value,M.issues.length)P.value=O.catchValue({...P,error:{issues:M.issues.map((Y)=>lw(Y,b,Xr()))},input:P.value}),P.issues=[];return P}});var x3=E("$ZodPipe",(r,O)=>{E0.init(r,O),P0(r._zod,"values",()=>O.in._zod.values),P0(r._zod,"optin",()=>O.in._zod.optin),P0(r._zod,"optout",()=>O.out._zod.optout),P0(r._zod,"propValues",()=>O.in._zod.propValues),r._zod.parse=(P,b)=>{if(b.direction==="backward"){let Y=O.out._zod.run(P,b);if(Y instanceof Promise)return Y.then((G)=>HA(G,O.in,b));return HA(Y,O.in,b)}let M=O.in._zod.run(P,b);if(M instanceof Promise)return M.then((Y)=>HA(Y,O.out,b));return HA(M,O.out,b)}});function HA(r,O,P){if(r.issues.length)return r.aborted=!0,r;return O._zod.run({value:r.value,issues:r.issues},P)}var o3=E("$ZodReadonly",(r,O)=>{E0.init(r,O),P0(r._zod,"propValues",()=>O.innerType._zod.propValues),P0(r._zod,"values",()=>O.innerType._zod.values),P0(r._zod,"optin",()=>O.innerType?._zod?.optin),P0(r._zod,"optout",()=>O.innerType?._zod?.optout),r._zod.parse=(P,b)=>{if(b.direction==="backward")return O.innerType._zod.run(P,b);let M=O.innerType._zod.run(P,b);if(M instanceof Promise)return M.then(fR);return fR(M)}});function fR(r){return r.value=Object.freeze(r.value),r}var D3=E("$ZodCustom",(r,O)=>{Xv.init(r,O),E0.init(r,O),r._zod.parse=(P,b)=>{return P},r._zod.check=(P)=>{let b=P.value,M=O.fn(b);if(M instanceof Promise)return M.then((Y)=>nR(Y,P,b,r));nR(M,P,b,r);return}});function nR(r,O,P,b){if(!r){let M={code:"custom",input:P,inst:b,path:[...b._zod.def.path??[]],continue:!b._zod.def.abort};if(b._zod.def.params)M.params=b._zod.def.params;O.issues.push(k6(M))}}var k3,oj0=Symbol("ZodOutput"),Dj0=Symbol("ZodInput");class m3{constructor(){this._map=new WeakMap,this._idmap=new Map}add(r,...O){let P=O[0];if(this._map.set(r,P),P&&typeof P==="object"&&"id"in P)this._idmap.set(P.id,r);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(r){let O=this._map.get(r);if(O&&typeof O==="object"&&"id"in O)this._idmap.delete(O.id);return this._map.delete(r),this}get(r){let O=r._zod.parent;if(O){let P={...this.get(O)??{}};delete P.id;let b={...P,...this._map.get(r)};return Object.keys(b).length?b:void 0}return this._map.get(r)}has(r){return this._map.has(r)}}function zN(){return new m3}(k3=globalThis).__zod_globalRegistry??(k3.__zod_globalRegistry=zN());var U4=globalThis.__zod_globalRegistry;function V3(r,O){return new r({type:"string",...mg(O)})}function E3(r,O){return new r({type:"string",format:"email",check:"string_format",abort:!1,...mg(O)})}function CM(r,O){return new r({type:"string",format:"guid",check:"string_format",abort:!1,...mg(O)})}function _3(r,O){return new r({type:"string",format:"uuid",check:"string_format",abort:!1,...mg(O)})}function y3(r,O){return new r({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...mg(O)})}function j3(r,O){return new r({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...mg(O)})}function i3(r,O){return new r({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...mg(O)})}function f3(r,O){return new r({type:"string",format:"url",check:"string_format",abort:!1,...mg(O)})}function n3(r,O){return new r({type:"string",format:"emoji",check:"string_format",abort:!1,...mg(O)})}function e3(r,O){return new r({type:"string",format:"nanoid",check:"string_format",abort:!1,...mg(O)})}function c3(r,O){return new r({type:"string",format:"cuid",check:"string_format",abort:!1,...mg(O)})}function t3(r,O){return new r({type:"string",format:"cuid2",check:"string_format",abort:!1,...mg(O)})}function p3(r,O){return new r({type:"string",format:"ulid",check:"string_format",abort:!1,...mg(O)})}function d3(r,O){return new r({type:"string",format:"xid",check:"string_format",abort:!1,...mg(O)})}function a3(r,O){return new r({type:"string",format:"ksuid",check:"string_format",abort:!1,...mg(O)})}function s3(r,O){return new r({type:"string",format:"ipv4",check:"string_format",abort:!1,...mg(O)})}function gK(r,O){return new r({type:"string",format:"ipv6",check:"string_format",abort:!1,...mg(O)})}function vK(r,O){return new r({type:"string",format:"cidrv4",check:"string_format",abort:!1,...mg(O)})}function wK(r,O){return new r({type:"string",format:"cidrv6",check:"string_format",abort:!1,...mg(O)})}function rK(r,O){return new r({type:"string",format:"base64",check:"string_format",abort:!1,...mg(O)})}function HK(r,O){return new r({type:"string",format:"base64url",check:"string_format",abort:!1,...mg(O)})}function OK(r,O){return new r({type:"string",format:"e164",check:"string_format",abort:!1,...mg(O)})}function qK(r,O){return new r({type:"string",format:"jwt",check:"string_format",abort:!1,...mg(O)})}function AK(r,O){return new r({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...mg(O)})}function PK(r,O){return new r({type:"string",format:"date",check:"string_format",...mg(O)})}function bK(r,O){return new r({type:"string",format:"time",check:"string_format",precision:null,...mg(O)})}function WK(r,O){return new r({type:"string",format:"duration",check:"string_format",...mg(O)})}function MK(r){return new r({type:"unknown"})}function XK(r,O){return new r({type:"never",...mg(O)})}function AA(r,O){return new NR({check:"max_length",...mg(O),maximum:r})}function m6(r,O){return new ZR({check:"min_length",...mg(O),minimum:r})}function PA(r,O){return new uR({check:"length_equals",...mg(O),length:r})}function SM(r,O){return new TR({check:"string_format",format:"regex",...mg(O),pattern:r})}function lM(r){return new CR({check:"string_format",format:"lowercase",...mg(r)})}function xM(r){return new SR({check:"string_format",format:"uppercase",...mg(r)})}function oM(r,O){return new lR({check:"string_format",format:"includes",...mg(O),includes:r})}function DM(r,O){return new xR({check:"string_format",format:"starts_with",...mg(O),prefix:r})}function kM(r,O){return new oR({check:"string_format",format:"ends_with",...mg(O),suffix:r})}function Q5(r){return new DR({check:"overwrite",tx:r})}function mM(r){return Q5((O)=>O.normalize(r))}function VM(){return Q5((r)=>r.trim())}function EM(){return Q5((r)=>r.toLowerCase())}function _M(){return Q5((r)=>r.toUpperCase())}function yM(){return Q5((r)=>zM(r))}function YK(r,O,P){return new r({type:"array",element:O,...mg(P)})}function GK(r,O,P){return new r({type:"custom",check:"custom",fn:O,...mg(P)})}function hK(r){let O=UN((P)=>{return P.addIssue=(b)=>{if(typeof b==="string")P.issues.push(k6(b,P.value,O._zod.def));else{let M=b;if(M.fatal)M.continue=!1;M.code??(M.code="custom"),M.input??(M.input=P.value),M.inst??(M.inst=O),M.continue??(M.continue=!O._zod.def.abort),P.issues.push(k6(M))}},r(P.value,P)});return O}function UN(r,O){let P=new Xv({check:"custom",...mg(O)});return P._zod.check=r,P}function jM(r){let O=r?.target??"draft-2020-12";if(O==="draft-4")O="draft-04";if(O==="draft-7")O="draft-07";return{processors:r.processors??{},metadataRegistry:r?.metadata??U4,target:O,unrepresentable:r?.unrepresentable??"throw",override:r?.override??(()=>{}),io:r?.io??"output",counter:0,seen:new Map,cycles:r?.cycles??"ref",reused:r?.reused??"inline",external:r?.external??void 0}}function A1(r,O,P={path:[],schemaPath:[]}){var b;let M=r._zod.def,Y=O.seen.get(r);if(Y){if(Y.count++,P.schemaPath.includes(r))Y.cycle=P.path;return Y.schema}let G={schema:{},count:1,cycle:void 0,path:P.path};O.seen.set(r,G);let h=r._zod.toJSONSchema?.();if(h)G.schema=h;else{let z={...P,schemaPath:[...P.schemaPath,r],path:P.path};if(r._zod.processJSONSchema)r._zod.processJSONSchema(O,G.schema,z);else{let L=G.schema,l=O.processors[M.type];if(!l)throw Error(`[toJSONSchema]: Non-representable type encountered: ${M.type}`);l(r,O,L,z)}let Q=r._zod.parent;if(Q){if(!G.ref)G.ref=Q;A1(Q,O,z),O.seen.get(Q).isParent=!0}}let $=O.metadataRegistry.get(r);if($)Object.assign(G.schema,$);if(O.io==="input"&&o1(r))delete G.schema.examples,delete G.schema.default;if(O.io==="input"&&G.schema._prefault)(b=G.schema).default??(b.default=G.schema._prefault);return delete G.schema._prefault,O.seen.get(r).schema}function iM(r,O){let P=r.seen.get(O);if(!P)throw Error("Unprocessed schema. This is a bug in Zod.");let b=new Map;for(let G of r.seen.entries()){let h=r.metadataRegistry.get(G[0])?.id;if(h){let $=b.get(h);if($&&$!==G[0])throw Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);b.set(h,G[0])}}let M=(G)=>{let h=r.target==="draft-2020-12"?"$defs":"definitions";if(r.external){let Q=r.external.registry.get(G[0])?.id,L=r.external.uri??((e)=>e);if(Q)return{ref:L(Q)};let l=G[1].defId??G[1].schema.id??`schema${r.counter++}`;return G[1].defId=l,{defId:l,ref:`${L("__shared")}#/${h}/${l}`}}if(G[1]===P)return{ref:"#"};let U=`${"#"}/${h}/`,z=G[1].schema.id??`__schema${r.counter++}`;return{defId:z,ref:U+z}},Y=(G)=>{if(G[1].schema.$ref)return;let h=G[1],{ref:$,defId:U}=M(G);if(h.def={...h.schema},U)h.defId=U;let z=h.schema;for(let Q in z)delete z[Q];z.$ref=$};if(r.cycles==="throw")for(let G of r.seen.entries()){let h=G[1];if(h.cycle)throw Error(`Cycle detected: #/${h.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let G of r.seen.entries()){let h=G[1];if(O===G[0]){Y(G);continue}if(r.external){let U=r.external.registry.get(G[0])?.id;if(O!==G[0]&&U){Y(G);continue}}if(r.metadataRegistry.get(G[0])?.id){Y(G);continue}if(h.cycle){Y(G);continue}if(h.count>1){if(r.reused==="ref"){Y(G);continue}}}}function fM(r,O){let P=r.seen.get(O);if(!P)throw Error("Unprocessed schema. This is a bug in Zod.");let b=(G)=>{let h=r.seen.get(G);if(h.ref===null)return;let $=h.def??h.schema,U={...$},z=h.ref;if(h.ref=null,z){b(z);let L=r.seen.get(z),l=L.schema;if(l.$ref&&(r.target==="draft-07"||r.target==="draft-04"||r.target==="openapi-3.0"))$.allOf=$.allOf??[],$.allOf.push(l);else Object.assign($,l);if(Object.assign($,U),G._zod.parent===z)for(let j in $){if(j==="$ref"||j==="allOf")continue;if(!(j in U))delete $[j]}if(l.$ref&&L.def)for(let j in $){if(j==="$ref"||j==="allOf")continue;if(j in L.def&&JSON.stringify($[j])===JSON.stringify(L.def[j]))delete $[j]}}let Q=G._zod.parent;if(Q&&Q!==z){b(Q);let L=r.seen.get(Q);if(L?.schema.$ref){if($.$ref=L.schema.$ref,L.def)for(let l in $){if(l==="$ref"||l==="allOf")continue;if(l in L.def&&JSON.stringify($[l])===JSON.stringify(L.def[l]))delete $[l]}}}r.override({zodSchema:G,jsonSchema:$,path:h.path??[]})};for(let G of[...r.seen.entries()].reverse())b(G[0]);let M={};if(r.target==="draft-2020-12")M.$schema="https://json-schema.org/draft/2020-12/schema";else if(r.target==="draft-07")M.$schema="http://json-schema.org/draft-07/schema#";else if(r.target==="draft-04")M.$schema="http://json-schema.org/draft-04/schema#";else if(r.target==="openapi-3.0");if(r.external?.uri){let G=r.external.registry.get(O)?.id;if(!G)throw Error("Schema is missing an `id` property");M.$id=r.external.uri(G)}Object.assign(M,P.def??P.schema);let Y=r.external?.defs??{};for(let G of r.seen.entries()){let h=G[1];if(h.def&&h.defId)Y[h.defId]=h.def}if(r.external);else if(Object.keys(Y).length>0)if(r.target==="draft-2020-12")M.$defs=Y;else M.definitions=Y;try{let G=JSON.parse(JSON.stringify(M));return Object.defineProperty(G,"~standard",{value:{...O["~standard"],jsonSchema:{input:MO(O,"input",r.processors),output:MO(O,"output",r.processors)}},enumerable:!1,writable:!1}),G}catch(G){throw Error("Error converting schema to JSON.")}}function o1(r,O){let P=O??{seen:new Set};if(P.seen.has(r))return!1;P.seen.add(r);let b=r._zod.def;if(b.type==="transform")return!0;if(b.type==="array")return o1(b.element,P);if(b.type==="set")return o1(b.valueType,P);if(b.type==="lazy")return o1(b.getter(),P);if(b.type==="promise"||b.type==="optional"||b.type==="nonoptional"||b.type==="nullable"||b.type==="readonly"||b.type==="default"||b.type==="prefault")return o1(b.innerType,P);if(b.type==="intersection")return o1(b.left,P)||o1(b.right,P);if(b.type==="record"||b.type==="map")return o1(b.keyType,P)||o1(b.valueType,P);if(b.type==="pipe")return o1(b.in,P)||o1(b.out,P);if(b.type==="object"){for(let M in b.shape)if(o1(b.shape[M],P))return!0;return!1}if(b.type==="union"){for(let M of b.options)if(o1(M,P))return!0;return!1}if(b.type==="tuple"){for(let M of b.items)if(o1(M,P))return!0;if(b.rest&&o1(b.rest,P))return!0;return!1}return!1}var JK=(r,O={})=>(P)=>{let b=jM({...P,processors:O});return A1(r,b),iM(b,r),fM(b,r)},MO=(r,O,P={})=>(b)=>{let{libraryOptions:M,target:Y}=b??{},G=jM({...M??{},target:Y,io:O,processors:P});return A1(r,G),iM(G,r),fM(G,r)};var LN={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},QK=(r,O,P,b)=>{let M=P;M.type="string";let{minimum:Y,maximum:G,format:h,patterns:$,contentEncoding:U}=r._zod.bag;if(typeof Y==="number")M.minLength=Y;if(typeof G==="number")M.maxLength=G;if(h){if(M.format=LN[h]??h,M.format==="")delete M.format;if(h==="time")delete M.format}if(U)M.contentEncoding=U;if($&&$.size>0){let z=[...$];if(z.length===1)M.pattern=z[0].source;else if(z.length>1)M.allOf=[...z.map((Q)=>({...O.target==="draft-07"||O.target==="draft-04"||O.target==="openapi-3.0"?{type:"string"}:{},pattern:Q.source}))]}};var RK=(r,O,P,b)=>{P.not={}};var KK=(r,O,P,b)=>{};var $K=(r,O,P,b)=>{let M=r._zod.def,Y=wO(M.entries);if(Y.every((G)=>typeof G==="number"))P.type="number";if(Y.every((G)=>typeof G==="string"))P.type="string";P.enum=Y},zK=(r,O,P,b)=>{let M=r._zod.def,Y=[];for(let G of M.values)if(G===void 0){if(O.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof G==="bigint")if(O.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else Y.push(Number(G));else Y.push(G);if(Y.length===0);else if(Y.length===1){let G=Y[0];if(P.type=G===null?"null":typeof G,O.target==="draft-04"||O.target==="openapi-3.0")P.enum=[G];else P.const=G}else{if(Y.every((G)=>typeof G==="number"))P.type="number";if(Y.every((G)=>typeof G==="string"))P.type="string";if(Y.every((G)=>typeof G==="boolean"))P.type="boolean";if(Y.every((G)=>G===null))P.type="null";P.enum=Y}};var UK=(r,O,P,b)=>{if(O.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var LK=(r,O,P,b)=>{if(O.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var FK=(r,O,P,b)=>{let M=P,Y=r._zod.def,{minimum:G,maximum:h}=r._zod.bag;if(typeof G==="number")M.minItems=G;if(typeof h==="number")M.maxItems=h;M.type="array",M.items=A1(Y.element,O,{...b,path:[...b.path,"items"]})},BK=(r,O,P,b)=>{let M=P,Y=r._zod.def;M.type="object",M.properties={};let G=Y.shape;for(let U in G)M.properties[U]=A1(G[U],O,{...b,path:[...b.path,"properties",U]});let h=new Set(Object.keys(G)),$=new Set([...h].filter((U)=>{let z=Y.shape[U]._zod;if(O.io==="input")return z.optin===void 0;else return z.optout===void 0}));if($.size>0)M.required=Array.from($);if(Y.catchall?._zod.def.type==="never")M.additionalProperties=!1;else if(!Y.catchall){if(O.io==="output")M.additionalProperties=!1}else if(Y.catchall)M.additionalProperties=A1(Y.catchall,O,{...b,path:[...b.path,"additionalProperties"]})},IK=(r,O,P,b)=>{let M=r._zod.def,Y=M.inclusive===!1,G=M.options.map((h,$)=>A1(h,O,{...b,path:[...b.path,Y?"oneOf":"anyOf",$]}));if(Y)P.oneOf=G;else P.anyOf=G},NK=(r,O,P,b)=>{let M=r._zod.def,Y=A1(M.left,O,{...b,path:[...b.path,"allOf",0]}),G=A1(M.right,O,{...b,path:[...b.path,"allOf",1]}),h=(U)=>("allOf"in U)&&Object.keys(U).length===1,$=[...h(Y)?Y.allOf:[Y],...h(G)?G.allOf:[G]];P.allOf=$};var ZK=(r,O,P,b)=>{let M=r._zod.def,Y=A1(M.innerType,O,b),G=O.seen.get(r);if(O.target==="openapi-3.0")G.ref=M.innerType,P.nullable=!0;else P.anyOf=[Y,{type:"null"}]},uK=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);Y.ref=M.innerType},TK=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);Y.ref=M.innerType,P.default=JSON.parse(JSON.stringify(M.defaultValue))},CK=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);if(Y.ref=M.innerType,O.io==="input")P._prefault=JSON.parse(JSON.stringify(M.defaultValue))},SK=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);Y.ref=M.innerType;let G;try{G=M.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}P.default=G},lK=(r,O,P,b)=>{let M=r._zod.def,Y=O.io==="input"?M.in._zod.def.type==="transform"?M.out:M.in:M.out;A1(Y,O,b);let G=O.seen.get(r);G.ref=Y},xK=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);Y.ref=M.innerType,P.readOnly=!0};var nM=(r,O,P,b)=>{let M=r._zod.def;A1(M.innerType,O,b);let Y=O.seen.get(r);Y.ref=M.innerType};var oN=E("ZodISODateTime",(r,O)=>{H3.init(r,O),N0.init(r,O)});function oK(r){return AK(oN,r)}var DN=E("ZodISODate",(r,O)=>{O3.init(r,O),N0.init(r,O)});function DK(r){return PK(DN,r)}var kN=E("ZodISOTime",(r,O)=>{q3.init(r,O),N0.init(r,O)});function kK(r){return bK(kN,r)}var mN=E("ZodISODuration",(r,O)=>{A3.init(r,O),N0.init(r,O)});function mK(r){return WK(mN,r)}var VK=(r,O)=>{gA.init(r,O),r.name="ZodError",Object.defineProperties(r,{format:{value:(P)=>nQ(r,P)},flatten:{value:(P)=>fQ(r,P)},addIssue:{value:(P)=>{r.issues.push(P),r.message=JSON.stringify(r.issues,D6,2)}},addIssues:{value:(P)=>{r.issues.push(...P),r.message=JSON.stringify(r.issues,D6,2)}},isEmpty:{get(){return r.issues.length===0}}})},Ji0=E("ZodError",VK),Yv=E("ZodError",VK,{Parent:Error});var EK=vA(Yv),_K=wA(Yv),yK=PO(Yv),jK=bO(Yv),iK=tQ(Yv),fK=pQ(Yv),nK=dQ(Yv),eK=aQ(Yv),cK=sQ(Yv),tK=gR(Yv),pK=vR(Yv),dK=wR(Yv);var d0=E("ZodType",(r,O)=>{return E0.init(r,O),Object.assign(r["~standard"],{jsonSchema:{input:MO(r,"input"),output:MO(r,"output")}}),r.toJSONSchema=JK(r,{}),r.def=O,r.type=O.type,Object.defineProperty(r,"_def",{value:O}),r.check=(...P)=>{return r.clone(W0.mergeDefs(O,{checks:[...O.checks??[],...P.map((b)=>typeof b==="function"?{_zod:{check:b,def:{check:"custom"},onattach:[]}}:b)]}),{parent:!0})},r.with=r.check,r.clone=(P,b)=>tv(r,P,b),r.brand=()=>r,r.register=(P,b)=>{return P.add(r,b),r},r.parse=(P,b)=>EK(r,P,b,{callee:r.parse}),r.safeParse=(P,b)=>yK(r,P,b),r.parseAsync=async(P,b)=>_K(r,P,b,{callee:r.parseAsync}),r.safeParseAsync=async(P,b)=>jK(r,P,b),r.spa=r.safeParseAsync,r.encode=(P,b)=>iK(r,P,b),r.decode=(P,b)=>fK(r,P,b),r.encodeAsync=async(P,b)=>nK(r,P,b),r.decodeAsync=async(P,b)=>eK(r,P,b),r.safeEncode=(P,b)=>cK(r,P,b),r.safeDecode=(P,b)=>tK(r,P,b),r.safeEncodeAsync=async(P,b)=>pK(r,P,b),r.safeDecodeAsync=async(P,b)=>dK(r,P,b),r.refine=(P,b)=>r.check(SZ(P,b)),r.superRefine=(P)=>r.check(lZ(P)),r.overwrite=(P)=>r.check(Q5(P)),r.optional=()=>g$(r),r.exactOptional=()=>KZ(r),r.nullable=()=>v$(r),r.nullish=()=>g$(v$(r)),r.nonoptional=(P)=>BZ(r,P),r.array=()=>hr(r),r.or=(P)=>XZ([r,P]),r.and=(P)=>GZ(r,P),r.transform=(P)=>w$(r,QZ(P)),r.default=(P)=>UZ(r,P),r.prefault=(P)=>FZ(r,P),r.catch=(P)=>NZ(r,P),r.pipe=(P)=>w$(r,P),r.readonly=()=>TZ(r),r.describe=(P)=>{let b=r.clone();return U4.add(b,{description:P}),b},Object.defineProperty(r,"description",{get(){return U4.get(r)?.description},configurable:!0}),r.meta=(...P)=>{if(P.length===0)return U4.get(r);let b=r.clone();return U4.add(b,P[0]),b},r.isOptional=()=>r.safeParse(void 0).success,r.isNullable=()=>r.safeParse(null).success,r.apply=(P)=>P(r),r}),r$=E("_ZodString",(r,O)=>{qA.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(b,M,Y)=>QK(r,b,M,Y);let P=r._zod.bag;r.format=P.format??null,r.minLength=P.minimum??null,r.maxLength=P.maximum??null,r.regex=(...b)=>r.check(SM(...b)),r.includes=(...b)=>r.check(oM(...b)),r.startsWith=(...b)=>r.check(DM(...b)),r.endsWith=(...b)=>r.check(kM(...b)),r.min=(...b)=>r.check(m6(...b)),r.max=(...b)=>r.check(AA(...b)),r.length=(...b)=>r.check(PA(...b)),r.nonempty=(...b)=>r.check(m6(1,...b)),r.lowercase=(b)=>r.check(lM(b)),r.uppercase=(b)=>r.check(xM(b)),r.trim=()=>r.check(VM()),r.normalize=(...b)=>r.check(mM(...b)),r.toLowerCase=()=>r.check(EM()),r.toUpperCase=()=>r.check(_M()),r.slugify=()=>r.check(yM())}),yN=E("ZodString",(r,O)=>{qA.init(r,O),r$.init(r,O),r.email=(P)=>r.check(E3(jN,P)),r.url=(P)=>r.check(f3(iN,P)),r.jwt=(P)=>r.check(qK(OZ,P)),r.emoji=(P)=>r.check(n3(fN,P)),r.guid=(P)=>r.check(CM(aK,P)),r.uuid=(P)=>r.check(_3(WA,P)),r.uuidv4=(P)=>r.check(y3(WA,P)),r.uuidv6=(P)=>r.check(j3(WA,P)),r.uuidv7=(P)=>r.check(i3(WA,P)),r.nanoid=(P)=>r.check(e3(nN,P)),r.guid=(P)=>r.check(CM(aK,P)),r.cuid=(P)=>r.check(c3(eN,P)),r.cuid2=(P)=>r.check(t3(cN,P)),r.ulid=(P)=>r.check(p3(tN,P)),r.base64=(P)=>r.check(rK(wZ,P)),r.base64url=(P)=>r.check(HK(rZ,P)),r.xid=(P)=>r.check(d3(pN,P)),r.ksuid=(P)=>r.check(a3(dN,P)),r.ipv4=(P)=>r.check(s3(aN,P)),r.ipv6=(P)=>r.check(gK(sN,P)),r.cidrv4=(P)=>r.check(vK(gZ,P)),r.cidrv6=(P)=>r.check(wK(vZ,P)),r.e164=(P)=>r.check(OK(HZ,P)),r.datetime=(P)=>r.check(oK(P)),r.date=(P)=>r.check(DK(P)),r.time=(P)=>r.check(kK(P)),r.duration=(P)=>r.check(mK(P))});function _0(r){return V3(yN,r)}var N0=E("ZodStringFormat",(r,O)=>{F0.init(r,O),r$.init(r,O)}),jN=E("ZodEmail",(r,O)=>{tR.init(r,O),N0.init(r,O)});var aK=E("ZodGUID",(r,O)=>{eR.init(r,O),N0.init(r,O)});var WA=E("ZodUUID",(r,O)=>{cR.init(r,O),N0.init(r,O)});var iN=E("ZodURL",(r,O)=>{pR.init(r,O),N0.init(r,O)});var fN=E("ZodEmoji",(r,O)=>{dR.init(r,O),N0.init(r,O)});var nN=E("ZodNanoID",(r,O)=>{aR.init(r,O),N0.init(r,O)});var eN=E("ZodCUID",(r,O)=>{sR.init(r,O),N0.init(r,O)});var cN=E("ZodCUID2",(r,O)=>{g3.init(r,O),N0.init(r,O)});var tN=E("ZodULID",(r,O)=>{v3.init(r,O),N0.init(r,O)});var pN=E("ZodXID",(r,O)=>{w3.init(r,O),N0.init(r,O)});var dN=E("ZodKSUID",(r,O)=>{r3.init(r,O),N0.init(r,O)});var aN=E("ZodIPv4",(r,O)=>{P3.init(r,O),N0.init(r,O)});var sN=E("ZodIPv6",(r,O)=>{b3.init(r,O),N0.init(r,O)});var gZ=E("ZodCIDRv4",(r,O)=>{W3.init(r,O),N0.init(r,O)});var vZ=E("ZodCIDRv6",(r,O)=>{M3.init(r,O),N0.init(r,O)});var wZ=E("ZodBase64",(r,O)=>{Y3.init(r,O),N0.init(r,O)});var rZ=E("ZodBase64URL",(r,O)=>{G3.init(r,O),N0.init(r,O)});var HZ=E("ZodE164",(r,O)=>{h3.init(r,O),N0.init(r,O)});var OZ=E("ZodJWT",(r,O)=>{J3.init(r,O),N0.init(r,O)});var qZ=E("ZodUnknown",(r,O)=>{Q3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>KK(r,P,b,M)});function sK(){return MK(qZ)}var AZ=E("ZodNever",(r,O)=>{R3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>RK(r,P,b,M)});function PZ(r){return XK(AZ,r)}var bZ=E("ZodArray",(r,O)=>{K3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>FK(r,P,b,M),r.element=O.element,r.min=(P,b)=>r.check(m6(P,b)),r.nonempty=(P)=>r.check(m6(1,P)),r.max=(P,b)=>r.check(AA(P,b)),r.length=(P,b)=>r.check(PA(P,b)),r.unwrap=()=>r.element});function hr(r,O){return YK(bZ,r,O)}var WZ=E("ZodObject",(r,O)=>{U3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>BK(r,P,b,M),W0.defineLazy(r,"shape",()=>{return O.shape}),r.keyof=()=>XO(Object.keys(r._zod.def.shape)),r.catchall=(P)=>r.clone({...r._zod.def,catchall:P}),r.passthrough=()=>r.clone({...r._zod.def,catchall:sK()}),r.loose=()=>r.clone({...r._zod.def,catchall:sK()}),r.strict=()=>r.clone({...r._zod.def,catchall:PZ()}),r.strip=()=>r.clone({...r._zod.def,catchall:void 0}),r.extend=(P)=>{return W0.extend(r,P)},r.safeExtend=(P)=>{return W0.safeExtend(r,P)},r.merge=(P)=>W0.merge(r,P),r.pick=(P)=>W0.pick(r,P),r.omit=(P)=>W0.omit(r,P),r.partial=(...P)=>W0.partial(H$,r,P[0]),r.required=(...P)=>W0.required(O$,r,P[0])});function L4(r,O){let P={type:"object",shape:r??{},...W0.normalizeParams(O)};return new WZ(P)}var MZ=E("ZodUnion",(r,O)=>{L3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>IK(r,P,b,M),r.options=O.options});function XZ(r,O){return new MZ({type:"union",options:r,...W0.normalizeParams(O)})}var YZ=E("ZodIntersection",(r,O)=>{F3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>NK(r,P,b,M)});function GZ(r,O){return new YZ({type:"intersection",left:r,right:O})}var eM=E("ZodEnum",(r,O)=>{B3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(b,M,Y)=>$K(r,b,M,Y),r.enum=O.entries,r.options=Object.values(O.entries);let P=new Set(Object.keys(O.entries));r.extract=(b,M)=>{let Y={};for(let G of b)if(P.has(G))Y[G]=O.entries[G];else throw Error(`Key ${G} not found in enum`);return new eM({...O,checks:[],...W0.normalizeParams(M),entries:Y})},r.exclude=(b,M)=>{let Y={...O.entries};for(let G of b)if(P.has(G))delete Y[G];else throw Error(`Key ${G} not found in enum`);return new eM({...O,checks:[],...W0.normalizeParams(M),entries:Y})}});function XO(r,O){let P=Array.isArray(r)?Object.fromEntries(r.map((b)=>[b,b])):r;return new eM({type:"enum",entries:P,...W0.normalizeParams(O)})}var hZ=E("ZodLiteral",(r,O)=>{I3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>zK(r,P,b,M),r.values=new Set(O.values),Object.defineProperty(r,"value",{get(){if(O.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return O.values[0]}})});function cM(r,O){return new hZ({type:"literal",values:Array.isArray(r)?r:[r],...W0.normalizeParams(O)})}var JZ=E("ZodTransform",(r,O)=>{N3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>LK(r,P,b,M),r._zod.parse=(P,b)=>{if(b.direction==="backward")throw new gO(r.constructor.name);P.addIssue=(Y)=>{if(typeof Y==="string")P.issues.push(W0.issue(Y,P.value,O));else{let G=Y;if(G.fatal)G.continue=!1;G.code??(G.code="custom"),G.input??(G.input=P.value),G.inst??(G.inst=r),P.issues.push(W0.issue(G))}};let M=O.transform(P.value,P);if(M instanceof Promise)return M.then((Y)=>{return P.value=Y,P});return P.value=M,P}});function QZ(r){return new JZ({type:"transform",transform:r})}var H$=E("ZodOptional",(r,O)=>{TM.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>nM(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function g$(r){return new H$({type:"optional",innerType:r})}var RZ=E("ZodExactOptional",(r,O)=>{Z3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>nM(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function KZ(r){return new RZ({type:"optional",innerType:r})}var $Z=E("ZodNullable",(r,O)=>{u3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>ZK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function v$(r){return new $Z({type:"nullable",innerType:r})}var zZ=E("ZodDefault",(r,O)=>{T3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>TK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType,r.removeDefault=r.unwrap});function UZ(r,O){return new zZ({type:"default",innerType:r,get defaultValue(){return typeof O==="function"?O():W0.shallowClone(O)}})}var LZ=E("ZodPrefault",(r,O)=>{C3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>CK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function FZ(r,O){return new LZ({type:"prefault",innerType:r,get defaultValue(){return typeof O==="function"?O():W0.shallowClone(O)}})}var O$=E("ZodNonOptional",(r,O)=>{S3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>uK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function BZ(r,O){return new O$({type:"nonoptional",innerType:r,...W0.normalizeParams(O)})}var IZ=E("ZodCatch",(r,O)=>{l3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>SK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType,r.removeCatch=r.unwrap});function NZ(r,O){return new IZ({type:"catch",innerType:r,catchValue:typeof O==="function"?O:()=>O})}var ZZ=E("ZodPipe",(r,O)=>{x3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>lK(r,P,b,M),r.in=O.in,r.out=O.out});function w$(r,O){return new ZZ({type:"pipe",in:r,out:O})}var uZ=E("ZodReadonly",(r,O)=>{o3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>xK(r,P,b,M),r.unwrap=()=>r._zod.def.innerType});function TZ(r){return new uZ({type:"readonly",innerType:r})}var CZ=E("ZodCustom",(r,O)=>{D3.init(r,O),d0.init(r,O),r._zod.processJSONSchema=(P,b,M)=>UK(r,P,b,M)});function SZ(r,O={}){return GK(CZ,r,O)}function lZ(r){return hK(r)}var q$=L4({type:XO(["character","chat"]),characterId:_0().optional(),chatId:_0().optional(),displayName:_0().default("")}),A$=L4({description:_0().optional(),author:_0().optional(),version:_0().optional(),tags:hr(_0()).optional()}),xZ=L4({name:_0().min(1).max(200),code:_0(),type:XO(["trigger","library"]),triggers:hr(_0()).optional(),bindings:hr(q$).optional(),folder:_0().optional(),metadata:A$.optional()}),P$=L4({format:cM("lumiscript-pack-v1"),exportedAt:_0(),scripts:hr(xZ).min(1).max(100)}),oZ=L4({name:_0().min(1).max(200),file:_0().min(1),type:XO(["trigger","library"]),triggers:hr(_0()).optional(),bindings:hr(q$).optional(),folder:_0().optional(),metadata:A$.optional()}),Vf0=L4({format:cM("lumiscript-manifest-v1"),sourcePack:_0().optional(),sourceFormat:_0().optional(),exportedAt:_0().optional(),convertedAt:_0().optional(),scripts:hr(oZ).min(1).max(100)});var b$=1048576;async function W$(r){let O=new Uint8Array(await r.arrayBuffer()),P;try{P=CQ(O)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let b=P["pack.json"];if(!b)throw Error("Invalid script pack: missing pack.json");if(b.byteLength>b$)throw Error(`Pack exceeds the ${b$/1024/1024} MB decompressed size limit`);let M=RM(b),Y;try{Y=JSON.parse(M)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return P$.parse(Y).scripts}var w0=Mg(sg(),1);function DZ(r){let P="";for(let b=0;b<r.length;b+=32768)P+=String.fromCharCode(...r.subarray(b,b+32768));return btoa(P)}function kZ(r){let O=new Map;for(let M of r){let Y=M.folder??"";if(!O.has(Y))O.set(Y,[]);O.get(Y).push(M)}let P=new Map;if(O.has(""))P.set("",O.get(""));let b=[...O.keys()].filter((M)=>M!=="").sort();for(let M of b)P.set(M,O.get(M));return P}var MA=({scripts:r,selectedId:O,execInfo:P,onSelect:b,onEdit:M,sendToBackend:Y})=>{let[G,h]=YO.useState("trigger"),[$,U]=YO.useState(new Set),z=YO.useRef(null),Q=r.filter((_)=>_.type===G),L=kZ(Q),l=L.size>1||L.size===1&&!L.has(""),e=(_)=>{U((t)=>{let Ag=new Set(t);if(Ag.has(_))Ag.delete(_);else Ag.add(_);return Ag})},j=()=>{let _=G==="library"?"Library name:":"Script name:",t=window.prompt(_);if(!t?.trim())return;Y({type:"create_script",name:t.trim(),scriptType:G})},s=(_)=>{if(Q.length===0)return;if(_.shiftKey){let Ag=KM(Q);Y({type:"save_pack_to_disk",bytesB64:DZ(Ag),scriptType:G});return}let t=window.prompt("Pack name:","my-scripts");if(!t?.trim())return;SQ(Q,t.trim())},n=()=>{z.current?.click()},Gg=async(_)=>{let t=_.target.files?.[0];if(!t)return;_.target.value="";try{let Ag=await W$(t),rg=(k)=>k==="library"?"[L]":"[T]",a=Ag.map((k)=>`  ${rg(k.type)} ${k.name}`).join(`
`);if(!window.confirm(`Import ${Ag.length} script${Ag.length>1?"s":""}?

${a}

Imported scripts will be disabled. Review and enable them manually.`))return;Y({type:"import_scripts",entries:Ag})}catch(Ag){window.alert(`Import failed: ${Ag instanceof Error?Ag.message:String(Ag)}`)}},wg=(_)=>{let t=P[_.id];return w0.jsxDEV(JQ,{script:_,selected:_.id===O,dot:t?.dot??"idle",duration:t?.duration,onSelect:()=>b(_.id),onEdit:()=>M(_.id),sendToBackend:Y},_.id,!1,void 0,this)};return w0.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[w0.jsxDEV("div",{className:"ls-list-header",children:[w0.jsxDEV("div",{className:"ls-list-type-tabs",children:[w0.jsxDEV("button",{className:`ls-type-tab${G==="trigger"?" ls-active":""}`,onClick:()=>h("trigger"),title:"Scripts",children:w0.jsxDEV(S1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),w0.jsxDEV("button",{className:`ls-type-tab${G==="library"?" ls-active":""}`,onClick:()=>h("library"),title:"Libraries",children:w0.jsxDEV(G4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w0.jsxDEV("div",{className:"ls-list-actions",children:[w0.jsxDEV("button",{className:"ls-icon-btn",onClick:n,title:"Import script pack",children:w0.jsxDEV(cH,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),w0.jsxDEV("button",{className:"ls-icon-btn",onClick:s,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:Q.length===0,children:w0.jsxDEV(h4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),w0.jsxDEV("button",{className:"ls-icon-btn",onClick:j,title:"New script",children:w0.jsxDEV(EH,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w0.jsxDEV("input",{ref:z,type:"file",accept:".zip",style:{display:"none"},onChange:Gg},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w0.jsxDEV("div",{className:"ls-list-body",children:Q.length===0?w0.jsxDEV("div",{className:"ls-list-empty",children:[w0.jsxDEV(Zw,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),w0.jsxDEV("p",{children:["No ",G==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),w0.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):l?[...L.entries()].map(([_,t])=>{let Ag=$.has(_);return _===""?w0.jsxDEV("div",{children:t.map(wg)},"__unfiled",!1,void 0,this):w0.jsxDEV("div",{className:"ls-folder-group",children:[w0.jsxDEV("button",{className:"ls-folder-header",onClick:()=>e(_),children:[Ag?w0.jsxDEV(Ar,{size:11},void 0,!1,void 0,this):w0.jsxDEV(l1,{size:11},void 0,!1,void 0,this),w0.jsxDEV(J4,{size:11},void 0,!1,void 0,this),w0.jsxDEV("span",{className:"ls-folder-name",children:_},void 0,!1,void 0,this),w0.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(rg)=>{rg.stopPropagation();let a=window.prompt("Rename folder:",_);if(a===null||a.trim()===""||a.trim()===_)return;for(let Hg of t)Y({type:"update_script",id:Hg.id,patch:{folder:a.trim()}})},children:w0.jsxDEV(Q4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),w0.jsxDEV("span",{className:"ls-folder-count",children:t.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!Ag&&t.map(wg)]},`folder-${_}`,!0,void 0,this)}):Q.map(wg)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var KO=Mg(O0(),1),t$=Mg(zH(),1);var J1=Mg(O0(),1);function M$(r,O){(O==null||O>r.length)&&(O=r.length);for(var P=0,b=Array(O);P<O;P++)b[P]=r[P];return b}function mZ(r){if(Array.isArray(r))return r}function VZ(r,O,P){return(O=iZ(O))in r?Object.defineProperty(r,O,{value:P,enumerable:!0,configurable:!0,writable:!0}):r[O]=P,r}function EZ(r,O){var P=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(P!=null){var b,M,Y,G,h=[],$=!0,U=!1;try{if(Y=(P=P.call(r)).next,O===0);else for(;!($=(b=Y.call(P)).done)&&(h.push(b.value),h.length!==O);$=!0);}catch(z){U=!0,M=z}finally{try{if(!$&&P.return!=null&&(G=P.return(),Object(G)!==G))return}finally{if(U)throw M}}return h}}function _Z(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X$(r,O){var P=Object.keys(r);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);O&&(b=b.filter(function(M){return Object.getOwnPropertyDescriptor(r,M).enumerable})),P.push.apply(P,b)}return P}function tM(r){for(var O=1;O<arguments.length;O++){var P=arguments[O]!=null?arguments[O]:{};O%2?X$(Object(P),!0).forEach(function(b){VZ(r,b,P[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(P)):X$(Object(P)).forEach(function(b){Object.defineProperty(r,b,Object.getOwnPropertyDescriptor(P,b))})}return r}function Y$(r,O){if(r==null)return{};var P,b,M=yZ(r,O);if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(r);for(b=0;b<Y.length;b++)P=Y[b],O.indexOf(P)===-1&&{}.propertyIsEnumerable.call(r,P)&&(M[P]=r[P])}return M}function yZ(r,O){if(r==null)return{};var P={};for(var b in r)if({}.hasOwnProperty.call(r,b)){if(O.indexOf(b)!==-1)continue;P[b]=r[b]}return P}function G$(r,O){return mZ(r)||EZ(r,O)||fZ(r,O)||_Z()}function jZ(r,O){if(typeof r!="object"||!r)return r;var P=r[Symbol.toPrimitive];if(P!==void 0){var b=P.call(r,O);if(typeof b!="object")return b;throw TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(r)}function iZ(r){var O=jZ(r,"string");return typeof O=="symbol"?O:O+""}function fZ(r,O){if(r){if(typeof r=="string")return M$(r,O);var P={}.toString.call(r).slice(8,-1);return P==="Object"&&r.constructor&&(P=r.constructor.name),P==="Map"||P==="Set"?Array.from(r):P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)?M$(r,O):void 0}}function nZ(r,O,P){if(O in r)Object.defineProperty(r,O,{value:P,enumerable:!0,configurable:!0,writable:!0});else r[O]=P;return r}function h$(r,O){var P=Object.keys(r);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);if(O)b=b.filter(function(M){return Object.getOwnPropertyDescriptor(r,M).enumerable});P.push.apply(P,b)}return P}function J$(r){for(var O=1;O<arguments.length;O++){var P=arguments[O]!=null?arguments[O]:{};if(O%2)h$(Object(P),!0).forEach(function(b){nZ(r,b,P[b])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(r,Object.getOwnPropertyDescriptors(P));else h$(Object(P)).forEach(function(b){Object.defineProperty(r,b,Object.getOwnPropertyDescriptor(P,b))})}return r}function eZ(){for(var r=arguments.length,O=Array(r),P=0;P<r;P++)O[P]=arguments[P];return function(b){return O.reduceRight(function(M,Y){return Y(M)},b)}}function GO(r){return function O(){var P=this;for(var b=arguments.length,M=Array(b),Y=0;Y<b;Y++)M[Y]=arguments[Y];return M.length>=r.length?r.apply(this,M):function(){for(var G=arguments.length,h=Array(G),$=0;$<G;$++)h[$]=arguments[$];return O.apply(P,[].concat(M,h))}}}function YA(r){return{}.toString.call(r).includes("Object")}function cZ(r){return!Object.keys(r).length}function hO(r){return typeof r==="function"}function tZ(r,O){return Object.prototype.hasOwnProperty.call(r,O)}function pZ(r,O){if(!YA(O))R5("changeType");if(Object.keys(O).some(function(P){return!tZ(r,P)}))R5("changeField");return O}function dZ(r){if(!hO(r))R5("selectorType")}function aZ(r){if(!(hO(r)||YA(r)))R5("handlerType");if(YA(r)&&Object.values(r).some(function(O){return!hO(O)}))R5("handlersType")}function sZ(r){if(!r)R5("initialIsRequired");if(!YA(r))R5("initialType");if(cZ(r))R5("initialContent")}function gu(r,O){throw Error(r[O]||r.default)}var vu={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},R5=GO(gu)(vu),XA={changes:pZ,selector:dZ,handler:aZ,initial:sZ};function wu(r){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};XA.initial(r),XA.handler(O);var P={current:r},b=GO(Ou)(P,O),M=GO(Hu)(P),Y=GO(XA.changes)(r),G=GO(ru)(P);function h(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(z){return z};return XA.selector(U),U(P.current)}function $(U){eZ(b,M,Y,G)(U)}return[h,$]}function ru(r,O){return hO(O)?O(r.current):O}function Hu(r,O){return r.current=J$(J$({},r.current),O),O}function Ou(r,O,P){return hO(O)?O(r.current):Object.keys(P).forEach(function(b){var M;return(M=O[b])===null||M===void 0?void 0:M.call(O,r.current[b])}),P}var qu={create:wu},Q$=qu;var R$={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function K$(r){return function O(){var P=this;for(var b=arguments.length,M=Array(b),Y=0;Y<b;Y++)M[Y]=arguments[Y];return M.length>=r.length?r.apply(this,M):function(){for(var G=arguments.length,h=Array(G),$=0;$<G;$++)h[$]=arguments[$];return O.apply(P,[].concat(M,h))}}}function $$(r){return{}.toString.call(r).includes("Object")}function Au(r){if(!r)z$("configIsRequired");if(!$$(r))z$("configType");if(r.urls)return Pu(),{paths:{vs:r.urls.monacoBase}};return r}function Pu(){console.warn(U$.deprecation)}function bu(r,O){throw Error(r[O]||r.default)}var U$={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},z$=K$(bu)(U$),L$={config:Au};var F$=function(){for(var O=arguments.length,P=Array(O),b=0;b<O;b++)P[b]=arguments[b];return function(M){return P.reduceRight(function(Y,G){return G(Y)},M)}};function pM(r,O){return Object.keys(O).forEach(function(P){if(O[P]instanceof Object){if(r[P])Object.assign(O[P],pM(r[P],O[P]))}}),tM(tM({},r),O)}var Wu={type:"cancelation",msg:"operation is manually canceled"};function GA(r){var O=!1,P=new Promise(function(b,M){r.then(function(Y){return O?M(Wu):b(Y)}),r.catch(M)});return P.cancel=function(){return O=!0},P}var Mu=["monaco"],Xu=Q$.create({config:R$,isInitialized:!1,resolve:null,reject:null,monaco:null}),B$=G$(Xu,2),JO=B$[0],hA=B$[1];function Yu(r){var O=L$.config(r),P=O.monaco,b=Y$(O,Mu);hA(function(M){return{config:pM(M.config,b),monaco:P}})}function Gu(){var r=JO(function(O){var{monaco:P,isInitialized:b,resolve:M}=O;return{monaco:P,isInitialized:b,resolve:M}});if(!r.isInitialized){if(hA({isInitialized:!0}),r.monaco)return r.resolve(r.monaco),GA(dM);if(window.monaco&&window.monaco.editor)return I$(window.monaco),r.resolve(window.monaco),GA(dM);F$(hu,Qu)(Ru)}return GA(dM)}function hu(r){return document.body.appendChild(r)}function Ju(r){var O=document.createElement("script");return r&&(O.src=r),O}function Qu(r){var O=JO(function(b){var{config:M,reject:Y}=b;return{config:M,reject:Y}}),P=Ju("".concat(O.config.paths.vs,"/loader.js"));return P.onload=function(){return r()},P.onerror=O.reject,P}function Ru(){var r=JO(function(P){var{config:b,resolve:M,reject:Y}=P;return{config:b,resolve:M,reject:Y}}),O=window.require;O.config(r.config),O(["vs/editor/editor.main"],function(P){var b=P.m||P;I$(b),r.resolve(b)},function(P){r.reject(P)})}function I$(r){if(!JO().monaco)hA({monaco:r})}function Ku(){return JO(function(r){var O=r.monaco;return O})}var dM=new Promise(function(r,O){return hA({resolve:r,reject:O})}),F4={config:Yu,init:Gu,__getMonacoInstance:Ku};var N$=Mg(O0(),1),P1=Mg(O0(),1);var Z$=Mg(O0(),1),QA=Mg(O0(),1),u$=Mg(O0(),1),C$=Mg(O0(),1),RA=Mg(O0(),1),xu=Mg(O0(),1);var x$=Mg(O0(),1),k0=Mg(O0(),1);var KA=Mg(O0(),1),$u={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},aM=$u,zu={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Uu=zu;function Lu({children:r}){return u$.default.createElement("div",{style:Uu.container},r)}var Fu=Lu,Bu=Fu;function Iu({width:r,height:O,isEditorReady:P,loading:b,_ref:M,className:Y,wrapperProps:G}){return QA.default.createElement("section",{style:{...aM.wrapper,width:r,height:O},...G},!P&&QA.default.createElement(Bu,null,b),QA.default.createElement("div",{ref:M,style:{...aM.fullWidth,...!P&&aM.hide},className:Y}))}var Nu=Iu,T$=Z$.memo(Nu);function Zu(r){C$.useEffect(r,[])}var S$=Zu;function uu(r,O,P=!0){let b=RA.useRef(!0);RA.useEffect(b.current||!P?()=>{b.current=!1}:r,O)}var Gv=uu;function QO(){}function V6(r,O,P,b){return Tu(r,b)||Cu(r,O,P,b)}function Tu(r,O){return r.editor.getModel(l$(r,O))}function Cu(r,O,P,b){return r.editor.createModel(O,P,b?l$(r,b):void 0)}function l$(r,O){return r.Uri.parse(O)}function Su({original:r,modified:O,language:P,originalLanguage:b,modifiedLanguage:M,originalModelPath:Y,modifiedModelPath:G,keepCurrentOriginalModel:h=!1,keepCurrentModifiedModel:$=!1,theme:U="light",loading:z="Loading...",options:Q={},height:L="100%",width:l="100%",className:e,wrapperProps:j={},beforeMount:s=QO,onMount:n=QO}){let[Gg,wg]=P1.useState(!1),[_,t]=P1.useState(!0),Ag=P1.useRef(null),rg=P1.useRef(null),a=P1.useRef(null),Hg=P1.useRef(n),k=P1.useRef(s),Ig=P1.useRef(!1);S$(()=>{let V=F4.init();return V.then((d)=>(rg.current=d)&&t(!1)).catch((d)=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>Ag.current?Vg():V.cancel()}),Gv(()=>{if(Ag.current&&rg.current){let V=Ag.current.getOriginalEditor(),d=V6(rg.current,r||"",b||P||"text",Y||"");d!==V.getModel()&&V.setModel(d)}},[Y],Gg),Gv(()=>{if(Ag.current&&rg.current){let V=Ag.current.getModifiedEditor(),d=V6(rg.current,O||"",M||P||"text",G||"");d!==V.getModel()&&V.setModel(d)}},[G],Gg),Gv(()=>{let V=Ag.current.getModifiedEditor();V.getOption(rg.current.editor.EditorOption.readOnly)?V.setValue(O||""):O!==V.getValue()&&(V.executeEdits("",[{range:V.getModel().getFullModelRange(),text:O||"",forceMoveMarkers:!0}]),V.pushUndoStop())},[O],Gg),Gv(()=>{Ag.current?.getModel()?.original.setValue(r||"")},[r],Gg),Gv(()=>{let{original:V,modified:d}=Ag.current.getModel();rg.current.editor.setModelLanguage(V,b||P||"text"),rg.current.editor.setModelLanguage(d,M||P||"text")},[P,b,M],Gg),Gv(()=>{rg.current?.editor.setTheme(U)},[U],Gg),Gv(()=>{Ag.current?.updateOptions(Q)},[Q],Gg);let Qg=P1.useCallback(()=>{if(!rg.current)return;k.current(rg.current);let V=V6(rg.current,r||"",b||P||"text",Y||""),d=V6(rg.current,O||"",M||P||"text",G||"");Ag.current?.setModel({original:V,modified:d})},[P,O,M,r,b,Y,G]),Kg=P1.useCallback(()=>{!Ig.current&&a.current&&(Ag.current=rg.current.editor.createDiffEditor(a.current,{automaticLayout:!0,...Q}),Qg(),rg.current?.editor.setTheme(U),wg(!0),Ig.current=!0)},[Q,U,Qg]);P1.useEffect(()=>{Gg&&Hg.current(Ag.current,rg.current)},[Gg]),P1.useEffect(()=>{!_&&!Gg&&Kg()},[_,Gg,Kg]);function Vg(){let V=Ag.current?.getModel();h||V?.original?.dispose(),$||V?.modified?.dispose(),Ag.current?.dispose()}return P1.default.createElement(T$,{width:l,height:L,isEditorReady:Gg,loading:z,_ref:a,className:e,wrapperProps:j})}var lu=Su,$n0=N$.memo(lu);function ou(r){let O=KA.useRef();return KA.useEffect(()=>{O.current=r},[r]),O.current}var Du=ou,JA=new Map;function ku({defaultValue:r,defaultLanguage:O,defaultPath:P,value:b,language:M,path:Y,theme:G="light",line:h,loading:$="Loading...",options:U={},overrideServices:z={},saveViewState:Q=!0,keepCurrentModel:L=!1,width:l="100%",height:e="100%",className:j,wrapperProps:s={},beforeMount:n=QO,onMount:Gg=QO,onChange:wg,onValidate:_=QO}){let[t,Ag]=k0.useState(!1),[rg,a]=k0.useState(!0),Hg=k0.useRef(null),k=k0.useRef(null),Ig=k0.useRef(null),Qg=k0.useRef(Gg),Kg=k0.useRef(n),Vg=k0.useRef(),V=k0.useRef(b),d=Du(Y),vg=k0.useRef(!1),i=k0.useRef(!1);S$(()=>{let p=F4.init();return p.then((Yg)=>(Hg.current=Yg)&&a(!1)).catch((Yg)=>Yg?.type!=="cancelation"&&console.error("Monaco initialization: error:",Yg)),()=>k.current?S():p.cancel()}),Gv(()=>{let p=V6(Hg.current,r||b||"",O||M||"",Y||P||"");p!==k.current?.getModel()&&(Q&&JA.set(d,k.current?.saveViewState()),k.current?.setModel(p),Q&&k.current?.restoreViewState(JA.get(Y)))},[Y],t),Gv(()=>{k.current?.updateOptions(U)},[U],t),Gv(()=>{!k.current||b===void 0||(k.current.getOption(Hg.current.editor.EditorOption.readOnly)?k.current.setValue(b):b!==k.current.getValue()&&(i.current=!0,k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:b,forceMoveMarkers:!0}]),k.current.pushUndoStop(),i.current=!1))},[b],t),Gv(()=>{let p=k.current?.getModel();p&&M&&Hg.current?.editor.setModelLanguage(p,M)},[M],t),Gv(()=>{h!==void 0&&k.current?.revealLine(h)},[h],t),Gv(()=>{Hg.current?.editor.setTheme(G)},[G],t);let Wg=k0.useCallback(()=>{if(!(!Ig.current||!Hg.current)&&!vg.current){Kg.current(Hg.current);let p=Y||P,Yg=V6(Hg.current,b||r||"",O||M||"",p||"");k.current=Hg.current?.editor.create(Ig.current,{model:Yg,automaticLayout:!0,...U},z),Q&&k.current.restoreViewState(JA.get(p)),Hg.current.editor.setTheme(G),h!==void 0&&k.current.revealLine(h),Ag(!0),vg.current=!0}},[r,O,P,b,M,Y,U,z,Q,G,h]);k0.useEffect(()=>{t&&Qg.current(k.current,Hg.current)},[t]),k0.useEffect(()=>{!rg&&!t&&Wg()},[rg,t,Wg]),V.current=b,k0.useEffect(()=>{t&&wg&&(Vg.current?.dispose(),Vg.current=k.current?.onDidChangeModelContent((p)=>{i.current||wg(k.current.getValue(),p)}))},[t,wg]),k0.useEffect(()=>{if(t){let p=Hg.current.editor.onDidChangeMarkers((Yg)=>{let Rg=k.current.getModel()?.uri;if(Rg&&Yg.find((Fg)=>Fg.path===Rg.path)){let Fg=Hg.current.editor.getModelMarkers({resource:Rg});_?.(Fg)}});return()=>{p?.dispose()}}return()=>{}},[t,_]);function S(){Vg.current?.dispose(),L?Q&&JA.set(Y,k.current.saveViewState()):k.current.getModel()?.dispose(),k.current.dispose()}return k0.default.createElement(T$,{width:l,height:e,isEditorReady:t,loading:$,_ref:Ig,className:j,wrapperProps:s})}var mu=ku,Vu=x$.memo(mu),o$=Vu;var E6=Mg(O0(),1);var b1=Mg(sg(),1),Eu={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},D$=({entries:r,isRunning:O,onClear:P})=>{let[b,M]=E6.useState(!1),Y=E6.useRef(null);E6.useEffect(()=>{if(!b&&Y.current)Y.current.scrollTop=Y.current.scrollHeight},[r,b]);let G=()=>{let h=r.filter(($)=>$.type!=="separator").map(($)=>`[${$.timestamp}] ${$.type.toUpperCase()}: ${$.message}`).join(`
`);navigator.clipboard.writeText(h).catch(()=>{})};return b1.jsxDEV("div",{className:`ls-console${b?" ls-collapsed":""}`,children:[b1.jsxDEV("div",{className:"ls-console-header",onClick:()=>M((h)=>!h),children:[b1.jsxDEV(uw,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-console-title",children:["Console",O?" — running…":r.length>0?` (${r.length})`:""]},void 0,!0,void 0,this),b1.jsxDEV("button",{className:"ls-icon-btn",onClick:(h)=>{h.stopPropagation(),G()},title:"Copy output",disabled:r.length===0,children:b1.jsxDEV(Pr,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),b1.jsxDEV("button",{className:"ls-icon-btn",onClick:(h)=>{h.stopPropagation(),P()},title:"Clear console",disabled:r.length===0,children:b1.jsxDEV(n1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),b?b1.jsxDEV(l1,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):b1.jsxDEV(iv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&b1.jsxDEV("div",{className:"ls-console-output",ref:Y,children:r.length===0?b1.jsxDEV("div",{className:"ls-console-empty",children:O?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):r.map((h,$)=>h.type==="separator"?b1.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},$,!1,void 0,this):b1.jsxDEV("div",{className:`ls-entry ${Eu[h.type]??"ls-log"}`,children:[b1.jsxDEV("span",{className:"ls-entry-time",children:h.timestamp},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-entry-type",children:h.type.toUpperCase()},void 0,!1,void 0,this),b1.jsxDEV("span",{className:"ls-entry-msg",children:h.message},void 0,!1,void 0,this)]},$,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var D1=Mg(sg(),1),k$=({bindings:r,activeContext:O,onAdd:P,onRemove:b})=>{let M=()=>{let{characterId:G,characterName:h}=O;if(!G)return;if(r.some(($)=>$.type==="character"&&$.characterId===G))return;P({type:"character",characterId:G,displayName:h??G})},Y=()=>{let{chatId:G,characterName:h}=O;if(!G)return;if(r.some((U)=>U.type==="chat"&&U.chatId===G))return;let $=h?`${h} — ${G.slice(0,8)}`:G.slice(0,8);P({type:"chat",chatId:G,displayName:$})};return D1.jsxDEV("div",{className:"ls-bindings",children:D1.jsxDEV("div",{className:"ls-bindings-row",children:[D1.jsxDEV(xH,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),r.length===0?D1.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):r.map((G,h)=>D1.jsxDEV("span",{className:"ls-binding-chip",children:[G.type==="character"?D1.jsxDEV(x6,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):D1.jsxDEV(S6,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),D1.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:G.displayName},void 0,!1,void 0,this),D1.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>b(h),title:"Remove binding",children:D1.jsxDEV(nv,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h,!0,void 0,this)),D1.jsxDEV("button",{className:"ls-bindings-add",onClick:M,disabled:!O.characterId,title:O.characterId?"Bind to current character":"Open a chat first",children:[D1.jsxDEV(x6,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),D1.jsxDEV("button",{className:"ls-bindings-add",onClick:Y,disabled:!O.chatId,title:O.chatId?"Bind to current chat":"Open a chat first",children:[D1.jsxDEV(S6,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var m$=Mg(O0(),1);var e1=Mg(sg(),1),V$=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Cn0=V$.flatMap((r)=>r.events.map((O)=>O.name)),E$=({scriptId:r,triggers:O,sendToBackend:P})=>{let[b,M]=m$.useState(!0),Y=new Set(O),G=(h)=>{let $=Y.has(h)?O.filter((U)=>U!==h):[...O,h];P({type:"update_script",id:r,patch:{triggers:$}})};return e1.jsxDEV("div",{className:`ls-triggers${b?" ls-triggers-collapsed":""}`,children:[e1.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>M((h)=>!h),children:[e1.jsxDEV(br,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),e1.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),Y.size>0&&e1.jsxDEV("span",{className:"ls-triggers-count",children:Y.size},void 0,!1,void 0,this),e1.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:b?e1.jsxDEV(l1,{size:12},void 0,!1,void 0,this):e1.jsxDEV(iv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!b&&e1.jsxDEV("div",{className:"ls-triggers-body",children:V$.map((h)=>e1.jsxDEV("div",{className:"ls-trigger-group",children:[e1.jsxDEV("span",{className:"ls-trigger-group-label",children:h.label},void 0,!1,void 0,this),e1.jsxDEV("div",{className:"ls-trigger-chips",children:h.events.map(($)=>e1.jsxDEV("button",{className:`ls-trigger-chip${Y.has($.name)?" ls-trigger-chip-active":""}`,onClick:()=>G($.name),title:$.description,children:$.name},$.name,!1,void 0,this))},void 0,!1,void 0,this)]},h.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var _$=`
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
`;var f$=Mg(O0(),1);function y$(r){return r.split("`").map((P,b)=>{if(b%2===1)return P;return P.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function _u(r){return r.split("`").map((b,M)=>{if(M%2===1)return b;return b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function K5(r,O){let P=`| ${r.join(" | ")} |`,b=`| ${r.map(()=>"---").join(" | ")} |`,M=O.map((Y)=>`| ${Y.map(_u).join(" | ")} |`);return[P,b,...M].join(`
`)}function yu(r){return r.optional&&!r.field.endsWith("?")?`${r.field}?`:r.field}function ju(r){if(r==="silent")return"*silent*";if(r==="boolean")return'`"true" / "false"`';return"`string`"}function iu(r){return r.aliases==="—"?"—":`\`${r.aliases}\``}function fu(r){let O=r.perms.length===0&&!r.note?"*none*":r.perms.map((P)=>`\`${P}\``).join(", ");return r.note?`${O}${r.perms.length?" ":""}${r.note}`:O}function nu(){return`## Lumiverse Events

${K5(["Event","Group","Payload shape"],sM.map((O)=>[`\`${O.name}\``,O.group,`\`${O.payload}\``]))}`}function eu(){return`## Permission Matrix

${g9.map((O)=>{let P=K5(["Method","Required permissions"],O.rows.map((b)=>[`\`${b.method}\``,fu(b)]));return`### ${O.group}

${P}`}).join(`

`)}`}function cu(){let r=K5(["Event","Payload fields","Emitted by"],v9.map((P)=>[`\`${P.name}\``,`\`${P.payload}\``,P.emittedBy])),O="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${r}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function tu(){let r=w9.map((P)=>{let b=K5(["Macro","Aliases","Returns","Description"],P.rows.map((Y)=>[`\`${Y.macro}\``,iu(Y),ju(Y.returns),Y.desc])),M=[`### ${P.label}`];if(P.description)M.push(`*${P.description}*`);return M.push(b),M.join(`

`)}),O='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${r.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function pu(){return`## Key Types

${r9.map((r)=>j$(r)).join(`

`)}`}function j$(r,O="###"){let P=y$(r.name),b=r.note?`*${y$(r.note)}*

`:"",M=K5(["Field","Type","Description"],r.fields.map((Y)=>[`\`${yu(Y)}\``,`\`${Y.type}\``,Y.desc]));return`${O} ${P}

${b}${M}`}function du(){return`## API Functions

${H9.map((O)=>{let P=K5(["Method","Arguments","Description"],O.rows.map((b)=>[`\`${b.name}\``,b.args,b.desc]));return`### ${O.group}

${P}`}).join(`

`)}`}function au(){let O=K5(["Method","Arguments","Description"],O9.map((M)=>[`\`${M.name}\``,M.args,M.desc])),P=K5(["Method","Arguments","Description"],q9.map((M)=>[`\`${M.name}\``,M.args,M.desc])),b=A9.map((M)=>j$(M,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",O,"","### ls:council-prompt","",P,"","### Built-in types","",b].join(`
`)}function su(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function gT(){let O=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,P=[nu(),eu(),cu(),tu(),pu(),du(),au(),su()];return`${O}

---

${P.join(`

---

`)}
`}function i$(){let r=gT(),P=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,b=new Blob([r],{type:"text/markdown;charset=utf-8"}),M=URL.createObjectURL(b),Y=document.createElement("a");Y.href=M,Y.download=P,Y.click(),URL.revokeObjectURL(M)}var N=Mg(sg(),1),$5=({icon:r,title:O,defaultOpen:P=!1,children:b})=>{let[M,Y]=f$.useState(P);return N.jsxDEV("div",{className:"ls-ref-section",children:[N.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>Y((G)=>!G),children:[N.jsxDEV("span",{className:"ls-ref-section-title",children:[r,O]},void 0,!0,void 0,this),M?N.jsxDEV(l1,{size:12},void 0,!1,void 0,this):N.jsxDEV(Ar,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M&&N.jsxDEV("div",{className:"ls-ref-section-body",children:b},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},z0=({children:r})=>N.jsxDEV("code",{className:"ls-ref-code",children:r},void 0,!1,void 0,this),vT=({children:r})=>N.jsxDEV("span",{className:"ls-ref-perm",children:r},void 0,!1,void 0,this),wT=()=>N.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),rT=()=>N.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),RO=({label:r,cols:O})=>N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:O,className:"ls-ref-group-header",children:r},void 0,!1,void 0,this)},void 0,!1,void 0,this),sM=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],HT=()=>{let r="";return N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:sM.map((O)=>{let P=O.group!==r?O.group:"";return r=O.group,N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:P},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},O.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},g9=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.*",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],OT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:g9.map((r)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(RO,{label:r.group,cols:2},`hdr-${r.group}`,!1,void 0,this),r.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:[O.perms.length===0&&!O.note?N.jsxDEV(wT,{},void 0,!1,void 0,this):null,O.perms.map((P)=>N.jsxDEV(vT,{children:P},P,!1,void 0,this)),O.note?N.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:O.perms.length?4:0},children:O.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},O.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),v9=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],qT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:v9.map((r)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:r.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},r.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w9=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],AT=({type:r})=>{if(r==="silent")return N.jsxDEV(rT,{},void 0,!1,void 0,this);if(r==="boolean")return N.jsxDEV(z0,{children:'"true" / "false"'},void 0,!1,void 0,this);return N.jsxDEV(z0,{children:"string"},void 0,!1,void 0,this)},PT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:w9.map((r)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(RO,{label:r.description?N.jsxDEV(N.Fragment,{children:[r.label," — ",N.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:r.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):r.label,cols:4},`hdr-${r.label}`,!1,void 0,this),r.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:O.aliases==="—"?N.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):N.jsxDEV(z0,{children:O.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:N.jsxDEV(AT,{type:O.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},O.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r9=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:"Passed to api.chat.sendMessage(content, options?).",fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],bT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:r9.map((r)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[r.name,r.note&&N.jsxDEV("div",{className:"ls-ref-type-note",children:r.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${r.name}`,!1,void 0,this),r.fields.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.optional&&!O.field.endsWith("?")?`${O.field}?`:O.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${r.name}-${O.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H9=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],WT=()=>N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:H9.map((r)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV(RO,{label:r.group,cols:3},`hdr-${r.group}`,!1,void 0,this),r.rows.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${r.group}-${O.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O9=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],q9=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],A9=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],MT=()=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",N.jsxDEV(z0,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Two are currently shipped: ",N.jsxDEV(z0,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require ",N.jsxDEV(z0,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free) and ",N.jsxDEV(z0,{children:"ls:council-prompt"},void 0,!1,void 0,this)," (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle)."]},void 0,!0,void 0,this),N.jsxDEV("table",{className:"ls-ref-table",children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:[N.jsxDEV(RO,{label:"ls:components",cols:3},void 0,!1,void 0,this),O9.map((r)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:r.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},r.name,!0,void 0,this)),N.jsxDEV(RO,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),q9.map((r)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:r.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:r.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},r.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[N.jsxDEV("thead",{children:N.jsxDEV("tr",{children:[N.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),N.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("tbody",{children:A9.map((r)=>N.jsxDEV(N.Fragment,{children:[N.jsxDEV("tr",{children:N.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[r.name,r.note&&N.jsxDEV("div",{className:"ls-ref-type-note",children:r.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${r.name}`,!1,void 0,this),r.fields.map((O)=>N.jsxDEV("tr",{children:[N.jsxDEV("td",{children:N.jsxDEV(z0,{children:O.optional&&!O.field.endsWith("?")?`${O.field}?`:O.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV("td",{children:N.jsxDEV("span",{className:"ls-ref-muted",children:O.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${r.name}-${O.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n$=()=>N.jsxDEV("div",{className:"ls-ref",children:[N.jsxDEV("div",{className:"ls-ref-toolbar",children:N.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>i$(),title:"Download the current reference as a Markdown file",children:[N.jsxDEV(h4,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(br,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:N.jsxDEV(HT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(DH,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:N.jsxDEV(OT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(_H,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[N.jsxDEV(qT,{},void 0,!1,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",N.jsxDEV(z0,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(lH,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[N.jsxDEV(PT,{},void 0,!1,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",N.jsxDEV(z0,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",N.jsxDEV(z0,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(b5,{size:11},void 0,!1,void 0,this),title:"Key Types",children:N.jsxDEV(bT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(oH,{size:11},void 0,!1,void 0,this),title:"API Functions",children:N.jsxDEV(WT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(IH,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:N.jsxDEV(MT,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),N.jsxDEV($5,{icon:N.jsxDEV(mH,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[N.jsxDEV("p",{className:"ls-ref-muted",children:[N.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",N.jsxDEV(z0,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",N.jsxDEV(z0,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",N.jsxDEV(z0,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",N.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),N.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[N.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",N.jsxDEV(z0,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",N.jsxDEV(z0,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",N.jsxDEV(z0,{children:"enabled: false"},void 0,!1,void 0,this)," and ",N.jsxDEV(z0,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Tg=Mg(sg(),1),e$=!1,c$=({script:r,allScripts:O,activeContext:P,isRunning:b,consoleEntries:M,editorFontSize:Y,autosaveDebounceMs:G,onClearConsole:h,sendToBackend:$})=>{let[U,z]=J1.useState(r.code),[Q,L]=J1.useState(!1),[l,e]=J1.useState(!1),[j,s]=J1.useState(r.name),[n,Gg]=J1.useState("code"),[wg,_]=J1.useState(!1),[t,Ag]=J1.useState(!1),rg=J1.useRef(null),a=J1.useRef(null);J1.useEffect(()=>{z(r.code),L(!1),s(r.name),Ag(!1)},[r.id,r.code,r.name]),J1.useEffect(()=>{$({type:"get_active_context"})},[r.id,$]),J1.useEffect(()=>{let i=setInterval(()=>{$({type:"get_active_context"})},2000);return()=>clearInterval(i)},[$]);let Hg=J1.useCallback((i)=>{$({type:"update_script",id:r.id,patch:{code:i}}),L(!1)},[r.id,$]),k=(i)=>{if(i===void 0)return;if(z(i),L(i!==r.code),rg.current)clearTimeout(rg.current);rg.current=setTimeout(()=>Hg(i),G)},Ig=(i,Wg)=>{if(a.current=i,!e$){e$=!0;let S=Wg.languages.typescript.javascriptDefaults;S.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),S.setCompilerOptions({target:Wg.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),S.addExtraLib(_$,"ts:lumiverse/lumiscript-api.d.ts")}i.addCommand(Wg.KeyMod.CtrlCmd|Wg.KeyCode.KeyS,()=>{if(rg.current)clearTimeout(rg.current);Hg(i.getValue())}),i.getModel()?.setEOL(Wg.editor.EndOfLineSequence.LF)},Qg=()=>{if(b)return;if(rg.current)clearTimeout(rg.current),rg.current=null;if(Q)Hg(a.current?.getValue()??U);$({type:"run_script",id:r.id})},Kg=()=>{let i=j.trim();if(i&&i!==r.name)$({type:"update_script",id:r.id,patch:{name:i}});e(!1)},Vg=(i)=>{let Wg=r.bindings??[];$({type:"update_script",id:r.id,patch:{bindings:[...Wg,i]}})},V=(i)=>{$({type:"update_script",id:r.id,patch:{bindings:(r.bindings??[]).filter((Wg,S)=>S!==i)}})},d=()=>{if(r.allowDangerous)$({type:"update_script",id:r.id,patch:{allowDangerous:!1}});else if(t)Ag(!1),$({type:"update_script",id:r.id,patch:{allowDangerous:!0}});else Ag(!0)},vg=(i)=>new Date(i).toLocaleString();return Tg.jsxDEV("div",{className:"ls-editor-root",children:[Tg.jsxDEV("div",{className:"ls-editor-topbar",children:[l?Tg.jsxDEV("input",{className:"ls-editor-name-input",value:j,autoFocus:!0,onChange:(i)=>s(i.target.value),onBlur:Kg,onKeyDown:(i)=>{if(i.key==="Enter")Kg();if(i.key==="Escape")s(r.name),e(!1)}},void 0,!1,void 0,this):Tg.jsxDEV("span",{className:"ls-editor-name",onClick:()=>e(!0),title:"Click to rename",style:{cursor:"text"},children:r.name},void 0,!1,void 0,this),Q&&Tg.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Tg.jsxDEV("button",{className:`ls-tab-pill${n==="code"?" ls-active":""}`,onClick:()=>Gg("code"),title:"Code editor",children:[Tg.jsxDEV(S1,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Tg.jsxDEV("button",{className:`ls-tab-pill${n==="docs"?" ls-active":""}`,onClick:()=>Gg("docs"),title:"API reference",children:[Tg.jsxDEV(NH,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),r.type!=="library"&&Tg.jsxDEV("button",{className:`ls-btn${b?"":" ls-accent"}`,onClick:Qg,disabled:b,children:[b?Tg.jsxDEV(W5,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Tg.jsxDEV(VH,{size:15},void 0,!1,void 0,this),b?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n==="code"&&Tg.jsxDEV("div",{className:"ls-editor-monaco",children:Tg.jsxDEV(o$,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:U,onChange:k,onMount:Ig,options:{minimap:{enabled:!1},fontSize:Y,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},r.id,!1,void 0,this)},void 0,!1,void 0,this),n==="docs"&&Tg.jsxDEV("div",{className:"ls-editor-docs",children:Tg.jsxDEV(n$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),n==="code"&&Tg.jsxDEV(D$,{entries:M,isRunning:b,onClear:h},void 0,!1,void 0,this),r.type==="trigger"&&Tg.jsxDEV(E$,{scriptId:r.id,triggers:r.triggers??[],sendToBackend:$},void 0,!1,void 0,this),r.type==="trigger"&&Tg.jsxDEV(k$,{bindings:r.bindings??[],activeContext:P,onAdd:Vg,onRemove:V},void 0,!1,void 0,this),t&&Tg.jsxDEV("div",{className:"ls-danger-confirm",children:[Tg.jsxDEV(l6,{size:10},void 0,!1,void 0,this),Tg.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Tg.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:d,children:"Enable"},void 0,!1,void 0,this),Tg.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>Ag(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-meta-footer",children:[Tg.jsxDEV("span",{className:"ls-meta-item",children:Tg.jsxDEV("button",{className:"ls-danger-btn",onClick:d,title:"Toggle dangerous mode",children:[r.allowDangerous?Tg.jsxDEV(l6,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Tg.jsxDEV(jH,{size:11},void 0,!1,void 0,this),Tg.jsxDEV("span",{className:r.allowDangerous?"ls-dangerous":"",children:r.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Tg.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Tg.jsxDEV(J4,{size:10},void 0,!1,void 0,this),Tg.jsxDEV("select",{className:"ls-folder-select",value:r.folder??"",onChange:(i)=>{let Wg=i.target.value;if(Wg==="__new__"){let S=window.prompt("New folder name:");if(S?.trim())$({type:"update_script",id:r.id,patch:{folder:S.trim()}})}else $({type:"update_script",id:r.id,patch:{folder:Wg}})},children:[Tg.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(O.map((i)=>i.folder).filter((i)=>!!i))].sort().map((i)=>Tg.jsxDEV("option",{value:i,children:i},i,!1,void 0,this)),Tg.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("span",{className:"ls-meta-item",children:[Tg.jsxDEV(CH,{size:10},void 0,!1,void 0,this),Tg.jsxDEV("span",{children:["Updated ",vg(r.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("span",{className:"ls-meta-item",children:[Tg.jsxDEV(ZH,{size:10},void 0,!1,void 0,this),Tg.jsxDEV("span",{children:["Created ",vg(r.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:r.id,onClick:()=>{navigator.clipboard.writeText(r.id).catch(()=>{}),_(!0),setTimeout(()=>_(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[wg?Tg.jsxDEV(uH,{size:10},void 0,!1,void 0,this):Tg.jsxDEV(Pr,{size:10},void 0,!1,void 0,this),Tg.jsxDEV("span",{children:["ID ",r.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var U1=Mg(sg(),1),p$=({scripts:r,initialScriptId:O,activeContext:P,execInfo:b,activeRunScriptId:M,isRunning:Y,consoleHistory:G,editorFontSize:h,autosaveDebounceMs:$,onClearConsole:U,onClose:z,sendToBackend:Q})=>{let[L,l]=KO.useState(O),e=r.find((wg)=>wg.id===L)??null;KO.useEffect(()=>{l(O)},[O]),KO.useEffect(()=>{let wg=(_)=>{if(_.key==="Escape")z()};return document.addEventListener("keydown",wg),()=>document.removeEventListener("keydown",wg)},[z]);let j=e?G[e.id]??[]:[],s=Y&&e?.id===M;return t$.createPortal(U1.jsxDEV("div",{className:"ls-modal-overlay",onClick:(wg)=>{if(wg.target===wg.currentTarget)z()},children:U1.jsxDEV("div",{className:"ls-modal-card",onClick:(wg)=>wg.stopPropagation(),children:[U1.jsxDEV("div",{className:"ls-modal-header",children:[U1.jsxDEV("span",{className:"ls-modal-title",children:[U1.jsxDEV(uw,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),U1.jsxDEV("button",{className:"ls-modal-close",onClick:z,title:"Close (Esc)",children:U1.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),U1.jsxDEV("div",{className:"ls-modal-body",children:[U1.jsxDEV("div",{className:"ls-modal-sidebar",children:U1.jsxDEV(MA,{scripts:r,selectedId:L,execInfo:b,onSelect:l,onEdit:l,sendToBackend:Q},void 0,!1,void 0,this)},void 0,!1,void 0,this),U1.jsxDEV("div",{className:"ls-modal-main",children:e?U1.jsxDEV(c$,{script:e,allScripts:r,activeContext:P,isRunning:s,consoleEntries:j,editorFontSize:h,autosaveDebounceMs:$,onClearConsole:()=>{if(e)U(e.id)},sendToBackend:Q},void 0,!1,void 0,this):U1.jsxDEV("div",{className:"ls-placeholder",children:[U1.jsxDEV(uw,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),U1.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var $A=Mg(sg(),1),d$=({scripts:r,activeContext:O,execInfo:P,activeRunScriptId:b,isRunning:M,consoleHistory:Y,editorFontSize:G,autosaveDebounceMs:h,onClearConsole:$,onScriptOpened:U,sendToBackend:z})=>{let[Q,L]=zA.useState(null);return zA.useEffect(()=>{if(Q&&U)U(Q)},[Q,U]),$A.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[$A.jsxDEV(MA,{scripts:r,selectedId:Q,execInfo:P,onSelect:()=>{},onEdit:L,sendToBackend:z},void 0,!1,void 0,this),Q!==null&&$A.jsxDEV(p$,{scripts:r,initialScriptId:Q,activeContext:O,execInfo:P,activeRunScriptId:b,isRunning:M,consoleHistory:Y,editorFontSize:G,autosaveDebounceMs:h,onClearConsole:$,onClose:()=>L(null),sendToBackend:z},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var a$=Mg(O0(),1);var y0=Mg(sg(),1),XT=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function YT(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r==="string")return r.length>80?r.slice(0,77)+"…":r;try{let O=JSON.stringify(r);return O.length>80?O.slice(0,77)+"…":O}catch{return String(r)}}var s$=({variables:r,sendToBackend:O})=>{let[P,b]=a$.useState(new Set(["local","global","chat","character"])),M=(G)=>{b((h)=>{let $=new Set(h);if($.has(G))$.delete(G);else $.add(G);return $})},Y=r?Object.values(r).reduce((G,h)=>G+Object.keys(h).length,0):0;return y0.jsxDEV("div",{className:"ls-status-section",children:[y0.jsxDEV("div",{className:"ls-inject-header",children:[y0.jsxDEV(fv,{size:10},void 0,!1,void 0,this),"Variables",Y>0&&y0.jsxDEV("span",{className:"ls-inject-count",children:Y},void 0,!1,void 0,this),y0.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>O({type:"get_variables"}),children:y0.jsxDEV(R4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),y0.jsxDEV("div",{className:"ls-status-section-body",children:!r?y0.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):Y===0?y0.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):XT.map(({key:G,label:h,hint:$})=>{let U=r[G],z=Object.keys(U),Q=P.has(G);if(z.length===0)return null;return y0.jsxDEV("div",{className:"ls-vars-scope",children:[y0.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>M(G),children:[Q?y0.jsxDEV(l1,{size:10},void 0,!1,void 0,this):y0.jsxDEV(iv,{size:10},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-scope-name",children:h},void 0,!1,void 0,this),$&&y0.jsxDEV("span",{className:"ls-vars-scope-hint",children:$},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-scope-count",children:z.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q&&y0.jsxDEV("div",{className:"ls-vars-scope-body",children:z.sort().map((L)=>y0.jsxDEV("div",{className:"ls-vars-entry",children:[y0.jsxDEV("span",{className:"ls-vars-key",children:L},void 0,!1,void 0,this),y0.jsxDEV("span",{className:"ls-vars-value",title:String(U[L]),children:YT(U[L])},void 0,!1,void 0,this)]},L,!0,void 0,this))},void 0,!1,void 0,this)]},G,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var M0=Mg(sg(),1);function GT(r){if(!Number.isFinite(r)||r<=0)return"0 B";let O=["B","KB","MB","GB"],P=Math.min(O.length-1,Math.floor(Math.log(r)/Math.log(1024))),b=r/Math.pow(1024,P);return`${P===0?b.toFixed(0):b.toFixed(1)} ${O[P]}`}function hT(r){if(!r)return"—";let O=new Date(r).getTime();if(!Number.isFinite(O)||O<=0)return"—";let P=Date.now()-O;if(P<0)return"just now";if(P<60000)return"just now";if(P<3600000)return`${Math.floor(P/60000)}m ago`;if(P<86400000)return`${Math.floor(P/3600000)}h ago`;if(P<2592000000)return`${Math.floor(P/86400000)}d ago`;return new Date(O).toISOString().slice(0,10)}var JT={script:"script",character:"char",chat:"chat"},gz=({collections:r,scripts:O,sendToBackend:P,onInspect:b,onDrop:M})=>{let Y=new Map;for(let $ of O)Y.set($.id,$.name);let G=()=>P({type:"list_collections"}),h=r?.length??0;return M0.jsxDEV("div",{className:"ls-status-section",children:[M0.jsxDEV("div",{className:"ls-inject-header",children:[M0.jsxDEV(fv,{size:10},void 0,!1,void 0,this),"Collections",h>0&&M0.jsxDEV("span",{className:"ls-inject-count",children:h},void 0,!1,void 0,this),M0.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:G,children:M0.jsxDEV(R4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M0.jsxDEV("div",{className:"ls-status-section-body",children:r===null?M0.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):r.length===0?M0.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):M0.jsxDEV("div",{className:"ls-collections-list",children:[M0.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[M0.jsxDEV("span",{children:"Name"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Scope"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Owner"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Size"},void 0,!1,void 0,this),M0.jsxDEV("span",{children:"Updated"},void 0,!1,void 0,this),M0.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),r.map(($)=>{let U=Y.get($.scriptId)??`(${$.scriptId.slice(0,8)}…)`,z=!Y.has($.scriptId),Q=z?`scriptId: ${$.scriptId} (not currently loaded)`:`${U} (${$.scriptId})`;return M0.jsxDEV("div",{className:"ls-collections-row",children:[M0.jsxDEV("span",{className:"ls-collections-name",title:$.name,children:$.name},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-scope","data-scope":$.scope,title:$.path,children:JT[$.scope]},void 0,!1,void 0,this),M0.jsxDEV("span",{className:`ls-collections-owner${z?" ls-collections-owner-unknown":""}`,title:Q,children:U},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-size",title:`${$.sizeBytes.toLocaleString()} bytes`,children:GT($.sizeBytes)},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-updated",title:$.modifiedAt,children:hT($.modifiedAt)},void 0,!1,void 0,this),M0.jsxDEV("span",{className:"ls-collections-actions",children:[M0.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>b($.path),children:M0.jsxDEV(SH,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),M0.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>M($),children:M0.jsxDEV(n1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},$.path,!0,void 0,this)})]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var pv=Mg(O0(),1),wz=Mg(zH(),1);var fg=Mg(sg(),1),$O=50,QT=150,rz=({path:r,records:O,total:P,refreshToken:b,onClose:M,sendToBackend:Y})=>{let[G,h]=pv.useState(""),[$,U]=pv.useState(""),[z,Q]=pv.useState(0);pv.useEffect(()=>{let n=setTimeout(()=>U(G),QT);return()=>clearTimeout(n)},[G]),pv.useEffect(()=>{Q(0)},[$]),pv.useEffect(()=>{Y({type:"inspect_collection",path:r,textFilter:$||void 0,limit:$O,offset:z*$O})},[r,$,z,b,Y]),pv.useEffect(()=>{let n=(Gg)=>{if(Gg.key==="Escape")M()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[M]);let L=Math.max(1,Math.ceil(P/$O)),l=P===0?0:z*$O+1,e=Math.min(P,(z+1)*$O),j=pv.useMemo(()=>{let n=r.match(/\/([^/]+)\.json$/);return n?n[1]:r},[r]),s=fg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(n)=>{if(n.target===n.currentTarget)M()},children:fg.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(n)=>n.stopPropagation(),children:[fg.jsxDEV("div",{className:"ls-modal-header",children:[fg.jsxDEV("span",{className:"ls-modal-title",children:[fg.jsxDEV(fv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-title-name",children:j},void 0,!1,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-title-path",title:r,children:r},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("button",{className:"ls-modal-close",onClick:M,title:"Close (Esc)",children:fg.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-toolbar",children:[fg.jsxDEV("div",{className:"ls-inspect-search",children:[fg.jsxDEV(yH,{size:12},void 0,!1,void 0,this),fg.jsxDEV("input",{type:"text",className:"ls-inspect-search-input",placeholder:"Filter records (shallow string match)…",value:G,onChange:(n)=>h(n.target.value),autoFocus:!0},void 0,!1,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-pager",children:[fg.jsxDEV("span",{className:"ls-inspect-pager-status",children:P===0?"No matching records":fg.jsxDEV(fg.Fragment,{children:["Showing ",fg.jsxDEV("strong",{children:l},void 0,!1,void 0,this),"–",fg.jsxDEV("strong",{children:e},void 0,!1,void 0,this)," of ",fg.jsxDEV("strong",{children:P},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),fg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>Q((n)=>Math.max(0,n-1)),disabled:z===0,title:"Previous page",children:fg.jsxDEV(TH,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),fg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>Q((n)=>Math.min(L-1,n+1)),disabled:z>=L-1,title:"Next page",children:fg.jsxDEV(Ar,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("div",{className:"ls-inspect-body",children:O===null?fg.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):O.length===0?fg.jsxDEV("div",{className:"ls-inspect-empty",children:P===0&&$?`No records match “${$}”`:P===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):fg.jsxDEV("div",{className:"ls-inspect-records",children:O.map((n)=>fg.jsxDEV("div",{className:"ls-inspect-record",children:[fg.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${n.id}`,children:[fg.jsxDEV("code",{children:[String(n.id).slice(0,12),"…"]},void 0,!0,void 0,this),fg.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",fg.jsxDEV("time",{title:new Date(n.createdAt).toISOString(),children:vz(n.createdAt)},void 0,!1,void 0,this),n.updatedAt!==n.createdAt&&fg.jsxDEV(fg.Fragment,{children:[" · ","updated ",fg.jsxDEV("time",{title:new Date(n.updatedAt).toISOString(),children:vz(n.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),fg.jsxDEV("pre",{className:"ls-inspect-record-json",children:RT(n)},void 0,!1,void 0,this)]},n.id,!0,void 0,this))},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return wz.createPortal(s,document.body)};function vz(r){if(!Number.isFinite(r)||r<=0)return"—";let O=Date.now()-r;if(O<60000)return"just now";if(O<3600000)return`${Math.floor(O/60000)}m ago`;if(O<86400000)return`${Math.floor(O/3600000)}h ago`;if(O<2592000000)return`${Math.floor(O/86400000)}d ago`;return new Date(r).toISOString().slice(0,10)}function RT(r){let{id:O,createdAt:P,updatedAt:b,...M}=r;try{return JSON.stringify(M,null,2)}catch{return String(r)}}var zO=Mg(O0(),1),Hz=Mg(zH(),1);var S0=Mg(sg(),1);function KT(r){if(!Number.isFinite(r)||r<=0)return"0 B";let O=["B","KB","MB","GB"],P=Math.min(O.length-1,Math.floor(Math.log(r)/Math.log(1024))),b=r/Math.pow(1024,P);return`${P===0?b.toFixed(0):b.toFixed(1)} ${O[P]}`}var $T={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"},Oz=({target:r,onConfirm:O,onCancel:P})=>{let b=zO.useRef(null);zO.useEffect(()=>{let Y=(G)=>{if(G.key==="Escape")P()};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[P]),zO.useEffect(()=>{let Y=(G)=>{if(G.key!=="Tab")return;let h=b.current;if(!h)return;let $=Array.from(h.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if($.length===0)return;let U=$[0],z=$[$.length-1],Q=document.activeElement,L=Q!==null&&h.contains(Q);if(G.shiftKey){if(!L||Q===U)G.preventDefault(),z.focus()}else if(!L||Q===z)G.preventDefault(),U.focus()};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[]);let M=S0.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Y)=>{if(Y.target===Y.currentTarget)P()},children:S0.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:b,onClick:(Y)=>Y.stopPropagation(),children:[S0.jsxDEV("div",{className:"ls-modal-header",children:[S0.jsxDEV("span",{className:"ls-modal-title",children:[S0.jsxDEV(n1,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),S0.jsxDEV("button",{className:"ls-modal-close",onClick:P,title:"Cancel (Esc)",children:S0.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-body",children:[S0.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target",children:[S0.jsxDEV("div",{className:"ls-drop-target-name",children:r.name},void 0,!1,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target-meta",children:[S0.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":r.scope,children:$T[r.scope]},void 0,!1,void 0,this),S0.jsxDEV("span",{className:"ls-drop-target-size",children:KT(r.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-target-path",title:r.path,children:r.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-warning",children:[S0.jsxDEV(X5,{size:12},void 0,!1,void 0,this),S0.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S0.jsxDEV("div",{className:"ls-drop-actions",children:[S0.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:P,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),S0.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:O,children:[S0.jsxDEV(n1,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Hz.createPortal(M,document.body)};var Jr=Mg(sg(),1),qz=({variables:r,collections:O,scripts:P,sendToBackend:b,inspectPath:M,inspectRecords:Y,inspectTotal:G,inspectRefreshToken:h,onInspect:$,dropTarget:U,onDrop:z,onDropConfirm:Q})=>{return Jr.jsxDEV(Jr.Fragment,{children:[Jr.jsxDEV("div",{className:"ls-storage-list",children:[Jr.jsxDEV(s$,{variables:r,sendToBackend:b},void 0,!1,void 0,this),Jr.jsxDEV(gz,{collections:O,scripts:P,sendToBackend:b,onInspect:$,onDrop:z},void 0,!1,void 0,this)]},void 0,!0,void 0,this),M!==null&&Jr.jsxDEV(rz,{path:M,records:Y,total:G,refreshToken:h,onClose:()=>$(null),sendToBackend:b},void 0,!1,void 0,this),U!==null&&Jr.jsxDEV(Oz,{target:U,onConfirm:Q,onCancel:()=>z(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Xg=Mg(sg(),1),Az=({onBackendMessage:r,sendToBackend:O})=>{let[P,b]=l0.useState("manage"),[M,Y]=l0.useState([]),[G,h]=l0.useState(eq),[$,U]=l0.useState({characterId:null,characterName:null,chatId:null}),[z,Q]=l0.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[L,l]=l0.useState([]),[e,j]=l0.useState([]),[s,n]=l0.useState(null),[Gg,wg]=l0.useState(null),[_,t]=l0.useState(null),[Ag,rg]=l0.useState(null),[a,Hg]=l0.useState(0),[k,Ig]=l0.useState(0),[Qg,Kg]=l0.useState(null),[Vg,V]=l0.useState({});l0.useEffect(()=>{let i=r((Wg)=>{let S=Wg;switch(S.type){case"scripts_updated":Y(S.scripts);break;case"script_patched":Y((p)=>p.map((Yg)=>Yg.id===S.script.id?S.script:Yg));break;case"settings_updated":h(S.settings);break;case"active_context":U({characterId:S.characterId,characterName:S.characterName,chatId:S.chatId}),O({type:"get_variables"});break;case"variables_updated":n(S.variables);break;case"collections_list":wg(S.collections);break;case"collection_records":rg((p)=>{return S.records}),Hg(S.total);break;case"collections_updated":O({type:"list_collections"}),Ig((p)=>p+1);break;case"injections_updated":l(S.injections);break;case"tools_updated":j(S.tools);break;case"execution_started":{let p={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};Q((Yg)=>{let Rg=Yg.consoleHistory[S.scriptId]??[],Fg=Rg.length>0?[...Rg,p]:Rg;return{...Yg,activeScriptId:S.scriptId,runId:S.runId,isRunning:!0,consoleHistory:{...Yg.consoleHistory,[S.scriptId]:Fg},scriptExecInfo:{...Yg.scriptExecInfo,[S.scriptId]:{...Yg.scriptExecInfo[S.scriptId],dot:"running"}}}}),V((Yg)=>({...Yg,[S.scriptId]:(Yg[S.scriptId]??0)+1}));break}case"console_entry":{let p=G.consoleHistoryLimit;Q((Yg)=>{let Rg=Yg.consoleHistory[S.scriptId]??[];if(Rg.length>=p)return Yg;let ng=Rg.length===p-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${p} entries. Clear the console to resume capture.]`}:S.entry;return{...Yg,consoleHistory:{...Yg.consoleHistory,[S.scriptId]:[...Rg,ng]}}});break}case"execution_ended":Q((p)=>{let Yg=p.consoleHistory[S.scriptId]??[],Rg=p.scriptExecInfo[S.scriptId],Fg=!S.success&&S.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:S.error}]:[],ng=!S.success?!0:Rg?.stickyError??!1,dg=!S.success||ng?"error":"success",x0=S.duration??0,Q1=S.success&&x0===0&&(Rg?.duration??0)>0?Rg.duration:S.duration;return{...p,isRunning:!1,consoleHistory:Fg.length?{...p.consoleHistory,[S.scriptId]:[...Yg,...Fg]}:p.consoleHistory,scriptExecInfo:{...p.scriptExecInfo,[S.scriptId]:{dot:dg,duration:Q1,error:S.error??Rg?.error,stickyError:ng}}}});break;case"error":console.warn("[LumiScript]",S.message);break}});return O({type:"get_scripts"}),O({type:"get_settings"}),O({type:"get_active_context"}),O({type:"get_injections"}),O({type:"get_tools"}),i},[r,O]),l0.useEffect(()=>{if(P==="storage")O({type:"list_collections"})},[P,O]);let d=l0.useCallback((i)=>{Q((Wg)=>({...Wg,consoleHistory:{...Wg.consoleHistory,[i]:[]}}))},[]),vg=l0.useCallback((i)=>{Q((Wg)=>{let S=Wg.scriptExecInfo[i];if(!S?.stickyError)return Wg;return{...Wg,scriptExecInfo:{...Wg.scriptExecInfo,[i]:{...S,dot:"idle",stickyError:!1}}}})},[]);return Xg.jsxDEV("div",{className:"ls-panel",children:[Xg.jsxDEV("div",{className:"ls-tabs",children:[Xg.jsxDEV("button",{className:`ls-tab-pill${P==="manage"?" ls-active":""}`,onClick:()=>b("manage"),children:[Xg.jsxDEV(S1,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Xg.jsxDEV("button",{className:`ls-tab-pill${P==="status"?" ls-active":""}`,onClick:()=>b("status"),children:[Xg.jsxDEV(LH,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Xg.jsxDEV("button",{className:`ls-tab-pill${P==="storage"?" ls-active":""}`,onClick:()=>b("storage"),children:[Xg.jsxDEV(fv,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[P==="manage"&&Xg.jsxDEV(d$,{scripts:M,activeContext:$,execInfo:z.scriptExecInfo,activeRunScriptId:z.activeScriptId,isRunning:z.isRunning,consoleHistory:z.consoleHistory,editorFontSize:G.editorFontSize,autosaveDebounceMs:G.autosaveDebounceMs,onClearConsole:d,onScriptOpened:vg,sendToBackend:O},void 0,!1,void 0,this),P==="status"&&Xg.jsxDEV(UT,{scripts:M,execInfo:z.scriptExecInfo,invocationCounts:Vg,injections:L,tools:e,sendToBackend:O},void 0,!1,void 0,this),P==="storage"&&Xg.jsxDEV(qz,{variables:s,collections:Gg,scripts:M,sendToBackend:O,inspectPath:_,inspectRecords:Ag,inspectTotal:a,inspectRefreshToken:k,onInspect:(i)=>{t(i),rg(null),Hg(0)},dropTarget:Qg,onDrop:Kg,onDropConfirm:()=>{if(!Qg)return;let i=Qg.path;if(_===i)t(null),rg(null),Hg(0);O({type:"drop_collection",path:i}),Kg(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},zT={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},UT=({scripts:r,execInfo:O,invocationCounts:P,injections:b,tools:M,sendToBackend:Y})=>{let G=r.filter((Q)=>Q.type==="trigger"&&Q.enabled),h=Object.fromEntries(r.map((Q)=>[Q.id,Q.name])),[$,U]=l0.useState(new Set),z=(Q)=>{U((L)=>{let l=new Set(L);if(l.has(Q))l.delete(Q);else l.add(Q);return l})};return Xg.jsxDEV("div",{className:"ls-status-list",children:[Xg.jsxDEV("div",{className:"ls-status-section",children:[Xg.jsxDEV("div",{className:"ls-inject-header",children:[Xg.jsxDEV(S1,{size:10},void 0,!1,void 0,this),"Scripts",G.length>0&&Xg.jsxDEV("span",{className:"ls-inject-count",children:G.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-status-section-body",children:G.length===0?Xg.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):G.map((Q)=>{let L=O[Q.id],l=L?.dot??"idle",e={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[l],j=Q.triggers??[],s=P[Q.id];return Xg.jsxDEV("div",{className:"ls-status-row",children:[Xg.jsxDEV("div",{className:"ls-status-row-main",children:[Xg.jsxDEV("span",{className:e,title:zT[l]},void 0,!1,void 0,this),Xg.jsxDEV("span",{className:"ls-status-name",children:Q.name},void 0,!1,void 0,this),Xg.jsxDEV("span",{className:"ls-status-right",children:[s!==void 0&&s>0&&Xg.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${s} time${s!==1?"s":""} this session`,children:["×",s]},void 0,!0,void 0,this),L?.duration!==void 0&&l!=="running"&&Xg.jsxDEV("span",{className:"ls-status-duration",style:{color:l==="error"?"#ef4444":void 0},children:[L.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j.length>0?Xg.jsxDEV("div",{className:"ls-status-events",children:j.map((n)=>Xg.jsxDEV("span",{className:"ls-event-badge",children:[Xg.jsxDEV(br,{size:9},void 0,!1,void 0,this),n]},n,!0,void 0,this))},void 0,!1,void 0,this):Xg.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),l==="error"&&L?.error&&Xg.jsxDEV("div",{className:"ls-status-error-row",children:Xg.jsxDEV("span",{className:"ls-status-error-text",children:L.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},Q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-status-section",children:[Xg.jsxDEV("div",{className:"ls-inject-header",children:[Xg.jsxDEV(tH,{size:10},void 0,!1,void 0,this),"Active Tools",M.length>0&&Xg.jsxDEV("span",{className:"ls-inject-count",children:M.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-status-section-body",children:M.length===0?Xg.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):M.map((Q)=>Xg.jsxDEV("div",{className:"ls-tool-row",children:[Xg.jsxDEV("div",{className:"ls-tool-name",title:Q.description,children:Q.name},void 0,!1,void 0,this),Xg.jsxDEV("div",{className:"ls-tool-meta",children:[Q.council_eligible&&Xg.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Xg.jsxDEV("span",{className:"ls-inject-script",title:Q.scriptId,children:Q.scriptName},void 0,!1,void 0,this),Xg.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${Q.name}`,title:`Unregister "${Q.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>Y({type:"unregister_tool",name:Q.name}),children:Xg.jsxDEV(n1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Q.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-status-section",children:[Xg.jsxDEV("div",{className:"ls-inject-header",children:[Xg.jsxDEV(iH,{size:10},void 0,!1,void 0,this),"Active Injections",b.length>0&&Xg.jsxDEV("span",{className:"ls-inject-count",children:b.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("div",{className:"ls-status-section-body",children:b.length===0?Xg.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):b.map((Q)=>{let L=$.has(Q.id);return Xg.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>z(Q.id),children:[Xg.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${Q.mode}`,title:Q.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:Q.mode==="intercept"?Xg.jsxDEV(FH,{size:11},void 0,!1,void 0,this):Xg.jsxDEV(BH,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Xg.jsxDEV("div",{className:"ls-inject-body",children:[Xg.jsxDEV("div",{className:"ls-inject-header-row",children:[Xg.jsxDEV("span",{className:"ls-inject-id",title:Q.id,children:Q.id},void 0,!1,void 0,this),Xg.jsxDEV("div",{className:"ls-inject-meta",children:[Xg.jsxDEV("span",{className:"ls-inject-role",children:Q.role},void 0,!1,void 0,this),Q.mode==="intercept"&&Q.depth>0&&Xg.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${Q.depth} message${Q.depth!==1?"s":""}`,children:["d:",Q.depth]},void 0,!0,void 0,this),Q.ephemeral&&Xg.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Xg.jsxDEV(K4,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Xg.jsxDEV("span",{className:"ls-inject-script",title:Q.scriptId,children:h[Q.scriptId]??Q.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Xg.jsxDEV("span",{className:"ls-inject-chevron",children:L?Xg.jsxDEV(iv,{size:10},void 0,!1,void 0,this):Xg.jsxDEV(l1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),L&&Xg.jsxDEV("div",{className:"ls-inject-content",onClick:(l)=>l.stopPropagation(),children:Q.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var UO=Mg(O0(),1);var Lg=Mg(sg(),1),Pz=({onBackendMessage:r,sendToBackend:O})=>{let[P,b]=UO.useState(eq),[M,Y]=UO.useState([]);UO.useEffect(()=>{let U=r((z)=>{let Q=z;if(Q.type==="scripts_updated")Y(Q.scripts);if(Q.type==="settings_updated")b(Q.settings)});return O({type:"get_settings"}),O({type:"get_scripts"}),U},[r,O]);let G=M.filter((U)=>U.type==="trigger").length,h=M.filter((U)=>U.type==="library").length,$=(U)=>{O({type:"update_settings",patch:{enabled:U}})};return Lg.jsxDEV("div",{className:"ls-settings",children:[Lg.jsxDEV("div",{className:"ls-settings-header",children:Lg.jsxDEV("span",{className:"ls-settings-title",children:[Lg.jsxDEV(uw,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Lg.jsxDEV("div",{className:"ls-toggle-row",children:[Lg.jsxDEV("label",{className:"ls-toggle",children:[Lg.jsxDEV("input",{type:"checkbox",checked:P.enabled,onChange:(U)=>$(U.target.checked)},void 0,!1,void 0,this),Lg.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-counts",children:[Lg.jsxDEV("div",{className:"ls-count-card",children:[Lg.jsxDEV(S1,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Lg.jsxDEV("div",{className:"ls-count-num",children:G},void 0,!1,void 0,this),Lg.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-count-card",children:[Lg.jsxDEV(G4,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Lg.jsxDEV("div",{className:"ls-count-num",children:h},void 0,!1,void 0,this),Lg.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-section",children:[Lg.jsxDEV("div",{className:"ls-settings-section-label",children:[Lg.jsxDEV(K4,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-field",children:[Lg.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Lg.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(P.scriptTimeoutMs/1000),onChange:(U)=>{let z=Math.max(5,Math.min(300,Number(U.target.value)||60));O({type:"update_settings",patch:{scriptTimeoutMs:z*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-field",children:[Lg.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Lg.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:P.consoleHistoryLimit,onChange:(U)=>{let z=Math.max(50,Math.min(2000,Number(U.target.value)||500));O({type:"update_settings",patch:{consoleHistoryLimit:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-section",children:[Lg.jsxDEV("div",{className:"ls-settings-section-label",children:[Lg.jsxDEV(eH,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-field",children:[Lg.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Lg.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:P.editorFontSize,onChange:(U)=>{let z=Math.max(10,Math.min(24,Number(U.target.value)||12));O({type:"update_settings",patch:{editorFontSize:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-field",children:[Lg.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Lg.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:P.autosaveDebounceMs,onChange:(U)=>{let z=Math.max(300,Math.min(5000,Number(U.target.value)||1200));O({type:"update_settings",patch:{autosaveDebounceMs:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-section",children:[Lg.jsxDEV("div",{className:"ls-settings-section-label",children:[Lg.jsxDEV(M5,{size:11},void 0,!1,void 0,this),"Panel Position"]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-field",children:[Lg.jsxDEV("label",{className:"ls-settings-field-label",title:"Which screen edge the LumiScript dock panel attaches to. Applies live — the panel will be re-created on the selected edge.",children:"Sidebar edge"},void 0,!1,void 0,this),Lg.jsxDEV("select",{className:"ls-number-input",value:P.dockPanelEdge,onChange:(U)=>{let z=U.target.value==="left"?"left":"right";O({type:"update_settings",patch:{dockPanelEdge:z}})},children:[Lg.jsxDEV("option",{value:"right",children:"Right"},void 0,!1,void 0,this),Lg.jsxDEV("option",{value:"left",children:"Left"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-section",children:[Lg.jsxDEV("div",{className:"ls-settings-section-label",children:[Lg.jsxDEV(Zw,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-template-field",children:[Lg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Lg.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:P.defaultTriggerTemplate,onChange:(U)=>O({type:"update_settings",patch:{defaultTriggerTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Lg.jsxDEV("div",{className:"ls-settings-template-field",children:[Lg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Lg.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:P.defaultLibraryTemplate,onChange:(U)=>O({type:"update_settings",patch:{defaultLibraryTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function LT(r){let O=r?.type;return typeof O==="string"&&O.startsWith("dom_")}var k1=new Map;function _6(r,O){k1.set(r,O)}function Sv(r){let O=k1.get(r);for(let[P,b]of Qr)if(b.elementId===r){if(O)O.removeEventListener(b.event,b.handler);Qr.delete(P)}k1.delete(r)}var BO=new Map,LO=new Map,B4=new Map,FO=new Map,Qr=new Map;function bz(r,O){return`${r}:${O}`}function FT(r){let O=r.target,P={type:r.type};if(O){if(O.id)P.targetId=O.id;if("value"in O)P.targetValue=O.value;if("checked"in O)P.targetChecked=O.checked;if(O.dataset&&Object.keys(O.dataset).length>0){let b={};for(let[M,Y]of Object.entries(O.dataset))if(Y!==void 0)b[M]=Y;P.dataset=b}}if(r instanceof MouseEvent)P.clientX=r.clientX,P.clientY=r.clientY;else if(typeof TouchEvent<"u"&&r instanceof TouchEvent){let b=r.touches[0]??r.changedTouches[0];if(b)P.clientX=b.clientX,P.clientY=b.clientY}if(r instanceof CustomEvent&&r.detail!==void 0)try{JSON.stringify(r.detail),P.detail=r.detail}catch{}return P}function BT(r,O){return`@scope ([data-ls-script="${O}"]) {
${r}
}`}function IT(r,O=5000){let P=document.querySelector(r);if(P)return Promise.resolve(P);return new Promise((b,M)=>{let Y=!1,G=new MutationObserver(()=>{let h=document.querySelector(r);if(h&&!Y)Y=!0,G.disconnect(),b(h)});G.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!Y)Y=!0,G.disconnect(),M(Error(`waitForElement: timeout for "${r}"`))},O)})}function Wz(r){return r.querySelector('[class*="_bubble_"]')}var dv=new Map,NT=50;function ZT(r,O,P){if(dv.size>=NT){let b=dv.keys().next().value;if(b)dv.get(b)?.cancel(),dv.delete(b)}dv.set(r,{scriptId:O,cancel:P})}function uT(r){for(let[O,P]of dv)if(P.scriptId===r)P.cancel(),dv.delete(O)}function Xz(r,O,P){let b=O((M)=>{if(!LT(M))return;let Y=M;switch(Y.type){case"dom_inject":{let{scriptId:G,elementId:h,target:$,html:U,position:z,stableId:Q}=Y,L=`<div data-ls-script="${G}" data-ls-el="${h}">${U}</div>`,l=r.dom.inject($,L,z);if(k1.set(h,l),BO.set(h,G),Q)LO.set(bz(G,Q),h);break}case"dom_inject_at_message":{let{scriptId:G,elementId:h,messageId:$,html:U,position:z,stableId:Q}=Y,L=(n)=>{let Gg=`<div data-ls-script="${G}" data-ls-el="${h}">${U}</div>`,wg=n,_;if(z==="header"){let Ag=n.querySelector('[class*="_header_"]');if(Ag)wg=Ag,_="beforebegin";else _="afterbegin"}else _="beforeend";let t=r.dom.inject(wg,Gg,_);if(k1.set(h,t),BO.set(h,G),Q)LO.set(bz(G,Q),h)},l=`[data-message-id="${$}"]`,e=document.querySelector(l);if(e){let n=Wz(e);if(n)L(n);break}let j=!1;ZT(h,G,()=>{j=!0}),IT(l).then((n)=>{if(dv.delete(h),j)return;let Gg=Wz(n);if(Gg)L(Gg)}).catch(()=>{dv.delete(h)});break}case"dom_update":{let G=k1.get(Y.elementId);if(!G)break;let h=G.querySelector(`[data-ls-el="${Y.elementId}"]`)??G;h.innerHTML=Y.html;break}case"dom_remove":{Mz(Y.elementId);break}case"dom_add_style":{let{scriptId:G,styleId:h,css:$}=Y,U=BT($,G),z=r.dom.addStyle(U);B4.set(h,z),FO.set(h,G);break}case"dom_remove_style":{let G=B4.get(Y.styleId);if(G)G(),B4.delete(Y.styleId),FO.delete(Y.styleId);break}case"dom_listen":{let{elementId:G,listenerId:h,event:$,preventDefault:U}=Y,z=k1.get(G);if(!z)break;let Q=(L)=>{if(U)L.preventDefault();let l=FT(L);P({type:"dom_event",elementId:G,listenerId:h,event:$,data:l})};z.addEventListener($,Q),Qr.set(h,{elementId:G,event:$,handler:Q});break}case"dom_unlisten":{let G=Qr.get(Y.listenerId);if(!G)break;let h=k1.get(G.elementId);if(h)h.removeEventListener(G.event,G.handler);Qr.delete(Y.listenerId);break}case"dom_cleanup_script":{let{scriptId:G}=Y;uT(G);for(let[h,$]of BO)if($===G)Mz(h);for(let[h,$]of FO)if($===G){let U=B4.get(h);if(U)U();B4.delete(h),FO.delete(h)}for(let[h]of LO)if(h.startsWith(G+":"))LO.delete(h);break}case"dom_make_draggable":{let{elementId:G,handleSelector:h}=Y,$=k1.get(G);if(!$)break;let U=!1,z=!1;$.addEventListener("pointerdown",(Q)=>{if(Q.button!==0)return;if(h&&!Q.target.closest(h))return;let L=$.firstElementChild?.firstElementChild??$.firstElementChild??$,l=L.getBoundingClientRect();L.style.transform="none",L.style.top=`${l.top}px`,L.style.left=`${l.left}px`,L.style.bottom="auto",L.style.right="auto",U=!0,z=!1;let e=Q.clientX-l.left,j=Q.clientY-l.top;L.style.cursor="grabbing";let s=(Gg)=>{if(!U)return;z=!0,L.style.top=`${Gg.clientY-j}px`,L.style.left=`${Gg.clientX-e}px`},n=()=>{if(!U)return;U=!1,L.style.cursor="",document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",n),document.removeEventListener("pointercancel",n)};document.addEventListener("pointermove",s),document.addEventListener("pointerup",n),document.addEventListener("pointercancel",n),Q.preventDefault()}),$.addEventListener("click",(Q)=>{if(z)Q.stopImmediatePropagation(),Q.preventDefault(),z=!1},!0);break}}});return()=>{b();for(let[,M]of dv)M.cancel();dv.clear();for(let[,M]of Qr){let Y=k1.get(M.elementId);if(Y)Y.removeEventListener(M.event,M.handler)}Qr.clear();for(let[,M]of k1)try{M.remove()}catch{}k1.clear(),BO.clear(),LO.clear();for(let[,M]of B4)try{M()}catch{}B4.clear(),FO.clear()}}function Mz(r){for(let[P,b]of Qr)if(b.elementId===r){let M=k1.get(r);if(M)M.removeEventListener(b.event,b.handler);Qr.delete(P)}let O=k1.get(r);if(O)try{O.remove()}catch{}k1.delete(r),BO.delete(r)}function TT(r){let O=r?.type;return O==="ls_modal_open"||O==="ls_modal_set_title"||O==="ls_modal_dismiss"}var z5=new Map;function Yz(r,O,P){let b=O((M)=>{if(!TT(M))return;let Y=M;switch(Y.type){case"ls_modal_open":{let{scriptId:G,modalId:h,rootElementId:$,options:U}=Y;if(z5.has(h))break;let z;try{z=r.ui.showModal({title:U.title,width:U.width,maxHeight:U.maxHeight,persistent:U.persistent})}catch(L){console.warn("[LumiScript] ctx.ui.showModal failed:",L),P({type:"ls_modal_dismissed",modalId:h});break}_6($,z.root),z.root.setAttribute("data-ls-script",G),z.root.setAttribute("data-ls-modal",h);let Q={modalId:h,rootElementId:$,handle:z,echoed:!1};z5.set(h,Q),z.onDismiss(()=>{if(Q.echoed)return;Q.echoed=!0,Sv($),z5.delete(h),P({type:"ls_modal_dismissed",modalId:h})});break}case"ls_modal_set_title":{let G=z5.get(Y.modalId);if(!G)break;try{G.handle.setTitle(Y.title)}catch{}break}case"ls_modal_dismiss":{let G=z5.get(Y.modalId);if(!G)break;try{G.handle.dismiss()}catch{if(!G.echoed)G.echoed=!0,Sv(G.rootElementId),z5.delete(Y.modalId),P({type:"ls_modal_dismissed",modalId:Y.modalId})}break}}});return()=>{b();for(let M of z5.values()){try{M.handle.dismiss()}catch{}Sv(M.rootElementId)}z5.clear()}}function CT(r){return r?.type==="ls_context_menu_show"}function Gz(r,O,P){let b=O(async(M)=>{if(!CT(M))return;let Y=M,G=null;try{G=(await r.ui.showContextMenu({position:Y.options.position,items:Y.options.items})).selectedKey}catch(h){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",h)}P({type:"ls_context_menu_result",requestId:Y.requestId,selectedKey:G})});return()=>{b()}}function ST(r){let O=r?.type;return O==="ls_input_bar_action_register"||O==="ls_input_bar_action_set_label"||O==="ls_input_bar_action_set_enabled"||O==="ls_input_bar_action_destroy"}var Rr=new Map;function lT(r,O){return`${r}:${O}`}function hz(r,O,P){let b=O((M)=>{if(!ST(M))return;let Y=M,G=lT(Y.scriptId,Y.actionId);switch(Y.type){case"ls_input_bar_action_register":{let h=Rr.get(G);if(h){try{h.destroy()}catch{}Rr.delete(G)}let $;try{$=r.ui.registerInputBarAction({id:Y.actionId,label:Y.options.label,iconSvg:Y.options.iconSvg,iconUrl:Y.options.iconUrl,enabled:Y.options.enabled})}catch(U){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",U);break}Rr.set(G,$),$.onClick(()=>{P({type:"ls_input_bar_action_click",scriptId:Y.scriptId,actionId:Y.actionId})});break}case"ls_input_bar_action_set_label":{let h=Rr.get(G);if(!h)break;try{h.setLabel(Y.label)}catch{}break}case"ls_input_bar_action_set_enabled":{let h=Rr.get(G);if(!h)break;try{h.setEnabled(Y.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let h=Rr.get(G);if(!h)break;try{h.destroy()}catch{}Rr.delete(G);break}}});return()=>{b();for(let M of Rr.values())try{M.destroy()}catch{}Rr.clear()}}function xT(r){let O=r?.type;return O==="ls_float_widget_create"||O==="ls_float_widget_move"||O==="ls_float_widget_set_visible"||O==="ls_float_widget_destroy"}var Kr=new Map;function Jz(r,O,P){let b=O((M)=>{if(!xT(M))return;let Y=M;switch(Y.type){case"ls_float_widget_create":{let{scriptId:G,widgetId:h,rootElementId:$,options:U}=Y,z=Kr.get(h);if(z){try{z.handle.destroy()}catch{}Sv(z.rootElementId),Kr.delete(h)}let Q;try{Q=r.ui.createFloatWidget({width:U.width,height:U.height,initialPosition:U.initialPosition,snapToEdge:U.snapToEdge,tooltip:U.tooltip,chromeless:U.chromeless})}catch(L){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",L);break}_6($,Q.root),Q.root.setAttribute("data-ls-script",G),Q.root.setAttribute("data-ls-widget",h),Kr.set(h,{widgetId:h,rootElementId:$,handle:Q}),Q.onDragEnd((L)=>{P({type:"ls_float_widget_drag_end",widgetId:h,x:L.x,y:L.y})});break}case"ls_float_widget_move":{let G=Kr.get(Y.widgetId);if(!G)break;try{G.handle.moveTo(Y.x,Y.y)}catch{}break}case"ls_float_widget_set_visible":{let G=Kr.get(Y.widgetId);if(!G)break;try{G.handle.setVisible(Y.visible)}catch{}break}case"ls_float_widget_destroy":{let G=Kr.get(Y.widgetId);if(!G)break;try{G.handle.destroy()}catch{}Sv(G.rootElementId),Kr.delete(Y.widgetId);break}}});return()=>{b();for(let M of Kr.values()){try{M.handle.destroy()}catch{}Sv(M.rootElementId)}Kr.clear()}}function oT(r){let O=r?.type;return O==="ls_drawer_tab_register"||O==="ls_drawer_tab_set_title"||O==="ls_drawer_tab_set_short_name"||O==="ls_drawer_tab_set_badge"||O==="ls_drawer_tab_activate"||O==="ls_drawer_tab_destroy"}var av=new Map;function DT(r,O){return`${r}:${O}`}function Qz(r,O,P){let b=O((M)=>{if(!oT(M))return;let Y=M,G=DT(Y.scriptId,Y.tabId);switch(Y.type){case"ls_drawer_tab_register":{let h=av.get(G);if(h){try{h.handle.destroy()}catch{}Sv(h.rootElementId),av.delete(G)}let $;try{$=r.ui.registerDrawerTab({id:Y.options.id,title:Y.options.title,shortName:Y.options.shortName,description:Y.options.description,keywords:Y.options.keywords,headerTitle:Y.options.headerTitle,iconSvg:Y.options.iconSvg,iconUrl:Y.options.iconUrl})}catch(U){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",U);break}_6(Y.rootElementId,$.root),$.root.setAttribute("data-ls-script",Y.scriptId),$.root.setAttribute("data-ls-tab",Y.tabId),av.set(G,{scriptId:Y.scriptId,tabId:Y.tabId,rootElementId:Y.rootElementId,handle:$}),$.onActivate(()=>{P({type:"ls_drawer_tab_activated",scriptId:Y.scriptId,tabId:Y.tabId})});break}case"ls_drawer_tab_set_title":{let h=av.get(G);if(!h)break;try{h.handle.setTitle(Y.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let h=av.get(G);if(!h)break;try{h.handle.setShortName(Y.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let h=av.get(G);if(!h)break;try{h.handle.setBadge(Y.badge)}catch{}break}case"ls_drawer_tab_activate":{let h=av.get(G);if(!h)break;try{h.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let h=av.get(G);if(!h)break;try{h.handle.destroy()}catch{}Sv(h.rootElementId),av.delete(G);break}}});return()=>{b();for(let M of av.values()){try{M.handle.destroy()}catch{}Sv(M.rootElementId)}av.clear()}}var IO=Mg(sg(),1);function fe0(r){let O=[],P=r.dom.addStyle(WQ);O.push(P);let b=[],M=r.onBackendMessage((_)=>{for(let t of b)t(_)});O.push(M);let Y=(_)=>{return b.push(_),()=>{let t=b.indexOf(_);if(t!==-1)b.splice(t,1)}},G=(_)=>{r.sendToBackend(_)},h=Xz(r,Y,G);O.push(h);let $=Yz(r,Y,G);O.push($);let U=Gz(r,Y,G);O.push(U);let z=hz(r,Y,G);O.push(z);let Q=Jz(r,Y,G);O.push(Q);let L=Qz(r,Y,G);O.push(L);let l=null,e=null,j="right";function s(_){if(e){try{e.unmount()}catch{}e=null}if(l){try{l.destroy()}catch{}l=null}l=r.ui.requestDockPanel({edge:_,title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),e=b9.createRoot(l.root),e.render(IO.jsxDEV(P9.StrictMode,{children:IO.jsxDEV(Az,{onBackendMessage:Y,sendToBackend:G},void 0,!1,void 0,this)},void 0,!1,void 0,this)),j=_}s("right"),O.push(()=>{if(e)try{e.unmount()}catch{}if(l)try{l.destroy()}catch{}});let n=Y((_)=>{let t=_;if(t.type!=="settings_updated")return;let Ag=t.settings.dockPanelEdge==="left"?"left":"right";if(Ag!==j)s(Ag)});O.push(n);let Gg=r.ui.mount("settings_extensions"),wg=b9.createRoot(Gg);return wg.render(IO.jsxDEV(P9.StrictMode,{children:IO.jsxDEV(Pz,{onBackendMessage:Y,sendToBackend:G},void 0,!1,void 0,this)},void 0,!1,void 0,this)),O.push(()=>wg.unmount()),()=>{for(let _ of O)try{_()}catch{}r.dom.cleanup()}}export{fe0 as setup};
