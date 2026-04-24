var du=Object.create;var{getPrototypeOf:au,defineProperty:rW,getOwnPropertyNames:su}=Object;var gF=Object.prototype.hasOwnProperty;function rF(w){return this[w]}var vF,wF,Mg=(w,H,A)=>{var q=w!=null&&typeof w==="object";if(q){var W=H?vF??=new WeakMap:wF??=new WeakMap,G=W.get(w);if(G)return G}A=w!=null?du(au(w)):{};let R=H||!w||!w.__esModule?rW(A,"default",{value:w,enumerable:!0}):A;for(let X of su(w))if(!gF.call(R,X))rW(R,X,{get:rF.bind(w,X),enumerable:!0});if(q)W.set(w,R);return R};var W4=(w,H)=>()=>(H||w((H={exports:{}}).exports,H),H.exports);var hF=(w)=>w;function HF(w,H){this[w]=hF.bind(null,H)}var OF=(w,H)=>{for(var A in H)rW(w,A,{get:H[A],enumerable:!0,configurable:!0,set:HF.bind(H,A)})};var Hr=W4((bF,y2)=>{(function(){function w(K,l){Object.defineProperty(q.prototype,K,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",l[0],l[1])}})}function H(K){if(K===null||typeof K!=="object")return null;return K=S1&&K[S1]||K["@@iterator"],typeof K==="function"?K:null}function A(K,l){K=(K=K.constructor)&&(K.displayName||K.name)||"ReactClass";var f=K+"."+l;bg[f]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",l,K),bg[f]=!0)}function q(K,l,f){this.props=K,this.context=l,this.refs=Yv,this.updater=f||Xv}function W(){}function G(K,l,f){this.props=K,this.context=l,this.refs=Yv,this.updater=f||Xv}function R(){}function X(K){return""+K}function z(K){try{X(K);var l=!1}catch(Xg){l=!0}if(l){l=console;var f=l.error,hg=typeof Symbol==="function"&&Symbol.toStringTag&&K[Symbol.toStringTag]||K.constructor.name||"Object";return f.call(l,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",hg),X(K)}}function U(K){if(K==null)return null;if(typeof K==="function")return K.$$typeof===yh?null:K.displayName||K.name||null;if(typeof K==="string")return K;switch(K){case Pg:return"Fragment";case t:return"Profiler";case T:return"StrictMode";case ng:return"Suspense";case dg:return"SuspenseList";case Q0:return"Activity"}if(typeof K==="object")switch(typeof K.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),K.$$typeof){case i:return"Portal";case Qg:return K.displayName||"Context";case Rg:return(K._context.displayName||"Context")+".Consumer";case Lg:var l=K.render;return K=K.displayName,K||(K=l.displayName||l.name||"",K=K!==""?"ForwardRef("+K+")":"ForwardRef"),K;case Sr:return l=K.displayName||null,l!==null?l:U(K.type)||"Memo";case jr:l=K._payload,K=K._init;try{return U(K(l))}catch(f){}}return null}function $(K){if(K===Pg)return"<>";if(typeof K==="object"&&K!==null&&K.$$typeof===jr)return"<...>";try{var l=U(K);return l?"<"+l+">":"<...>"}catch(f){return"<...>"}}function J(){var K=Sg.A;return K===null?null:K.getOwner()}function L(){return Error("react-stack-top-frame")}function C(K){if(F4.call(K,"key")){var l=Object.getOwnPropertyDescriptor(K,"key").get;if(l&&l.isReactWarning)return!1}return K.key!==void 0}function n(K,l){function f(){BH||(BH=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",l))}f.isReactWarning=!0,Object.defineProperty(K,"key",{get:f,configurable:!0})}function y(){var K=U(this.type);return $5[K]||($5[K]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),K=this.props.ref,K!==void 0?K:null}function a(K,l,f,hg,Xg,Zg){var lg=f.ref;return K={$$typeof:rg,type:K,key:l,props:f,_owner:hg},(lg!==void 0?lg:null)!==null?Object.defineProperty(K,"ref",{enumerable:!1,get:y}):Object.defineProperty(K,"ref",{enumerable:!1,value:null}),K._store={},Object.defineProperty(K._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(K,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(K,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Xg}),Object.defineProperty(K,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Zg}),Object.freeze&&(Object.freeze(K.props),Object.freeze(K)),K}function _(K,l){return l=a(K.type,l,K.props,K._owner,K._debugStack,K._debugTask),K._store&&(l._store.validated=K._store.validated),l}function Wg(K){Og(K)?K._store&&(K._store.validated=1):typeof K==="object"&&K!==null&&K.$$typeof===jr&&(K._payload.status==="fulfilled"?Og(K._payload.value)&&K._payload.value._store&&(K._payload.value._store.validated=1):K._store&&(K._store.validated=1))}function Og(K){return typeof K==="object"&&K!==null&&K.$$typeof===rg}function c(K){var l={"=":"=0",":":"=2"};return"$"+K.replace(/[=:]/g,function(f){return l[f]})}function s(K,l){return typeof K==="object"&&K!==null&&K.key!=null?(z(K.key),c(""+K.key)):l.toString(36)}function Ag(K){switch(K.status){case"fulfilled":return K.value;case"rejected":throw K.reason;default:switch(typeof K.status==="string"?K.then(R,R):(K.status="pending",K.then(function(l){K.status==="pending"&&(K.status="fulfilled",K.value=l)},function(l){K.status==="pending"&&(K.status="rejected",K.reason=l)})),K.status){case"fulfilled":return K.value;case"rejected":throw K.reason}}throw K}function vg(K,l,f,hg,Xg){var Zg=typeof K;if(Zg==="undefined"||Zg==="boolean")K=null;var lg=!1;if(K===null)lg=!0;else switch(Zg){case"bigint":case"string":case"number":lg=!0;break;case"object":switch(K.$$typeof){case rg:case i:lg=!0;break;case jr:return lg=K._init,vg(lg(K._payload),l,f,hg,Xg)}}if(lg){lg=K,Xg=Xg(lg);var gr=hg===""?"."+s(lg,0):hg;return qr(Xg)?(f="",gr!=null&&(f=gr.replace(o4,"$&/")+"/"),vg(Xg,l,f,"",function(K0){return K0})):Xg!=null&&(Og(Xg)&&(Xg.key!=null&&(lg&&lg.key===Xg.key||z(Xg.key)),f=_(Xg,f+(Xg.key==null||lg&&lg.key===Xg.key?"":(""+Xg.key).replace(o4,"$&/")+"/")+gr),hg!==""&&lg!=null&&Og(lg)&&lg.key==null&&lg._store&&!lg._store.validated&&(f._store.validated=2),Xg=f),l.push(Xg)),1}if(lg=0,gr=hg===""?".":hg+":",qr(K))for(var $g=0;$g<K.length;$g++)hg=K[$g],Zg=gr+s(hg,$g),lg+=vg(hg,l,f,Zg,Xg);else if($g=H(K),typeof $g==="function")for($g===K.entries&&(B4||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),B4=!0),K=$g.call(K),$g=0;!(hg=K.next()).done;)hg=hg.value,Zg=gr+s(hg,$g++),lg+=vg(hg,l,f,Zg,Xg);else if(Zg==="object"){if(typeof K.then==="function")return vg(Ag(K),l,f,hg,Xg);throw l=String(K),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(K).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.")}return lg}function d(K,l,f){if(K==null)return K;var hg=[],Xg=0;return vg(K,hg,"","",function(Zg){return l.call(f,Zg,Xg++)}),hg}function wg(K){if(K._status===-1){var l=K._ioInfo;l!=null&&(l.start=l.end=performance.now()),l=K._result;var f=l();if(f.then(function(Xg){if(K._status===0||K._status===-1){K._status=1,K._result=Xg;var Zg=K._ioInfo;Zg!=null&&(Zg.end=performance.now()),f.status===void 0&&(f.status="fulfilled",f.value=Xg)}},function(Xg){if(K._status===0||K._status===-1){K._status=2,K._result=Xg;var Zg=K._ioInfo;Zg!=null&&(Zg.end=performance.now()),f.status===void 0&&(f.status="rejected",f.reason=Xg)}}),l=K._ioInfo,l!=null){l.value=f;var hg=f.displayName;typeof hg==="string"&&(l.name=hg)}K._status===-1&&(K._status=0,K._result=f)}if(K._status===1)return l=K._result,l===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,l),"default"in l||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,l),l.default;throw K._result}function D(){var K=Sg.H;return K===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),K}function Fg(){Sg.asyncTransitions--}function Jg(K){if(L5===null)try{var l=("require"+Math.random()).slice(0,7);L5=(y2&&y2[l]).call(y2,"timers").setImmediate}catch(f){L5=function(hg){oH===!1&&(oH=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Xg=new MessageChannel;Xg.port1.onmessage=hg,Xg.port2.postMessage(void 0)}}return L5(K)}function Kg(K){return 1<K.length&&typeof AggregateError==="function"?AggregateError(K):K[0]}function Vg(K,l){l!==u5-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),u5=l}function V(K,l,f){var hg=Sg.actQueue;if(hg!==null)if(hg.length!==0)try{p(hg),Jg(function(){return V(K,l,f)});return}catch(Xg){Sg.thrownErrors.push(Xg)}else Sg.actQueue=null;0<Sg.thrownErrors.length?(hg=Kg(Sg.thrownErrors),Sg.thrownErrors.length=0,f(hg)):l(K)}function p(K){if(!B5){B5=!0;var l=0;try{for(;l<K.length;l++){var f=K[l];do{Sg.didUsePromise=!1;var hg=f(!1);if(hg!==null){if(Sg.didUsePromise){K[l]=f,K.splice(0,l);return}f=hg}else break}while(1)}K.length=0}catch(Xg){K.splice(0,l+1),Sg.thrownErrors.push(Xg)}finally{B5=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var rg=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),Pg=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),Rg=Symbol.for("react.consumer"),Qg=Symbol.for("react.context"),Lg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),dg=Symbol.for("react.suspense_list"),Sr=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Q0=Symbol.for("react.activity"),S1=Symbol.iterator,bg={},Xv={isMounted:function(){return!1},enqueueForceUpdate:function(K){A(K,"forceUpdate")},enqueueReplaceState:function(K){A(K,"replaceState")},enqueueSetState:function(K){A(K,"setState")}},k0=Object.assign,Yv={};Object.freeze(Yv),q.prototype.isReactComponent={},q.prototype.setState=function(K,l){if(typeof K!=="object"&&typeof K!=="function"&&K!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,K,l,"setState")},q.prototype.forceUpdate=function(K){this.updater.enqueueForceUpdate(this,K,"forceUpdate")};var r0={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for($w in r0)r0.hasOwnProperty($w)&&w($w,r0[$w]);W.prototype=q.prototype,r0=G.prototype=new W,r0.constructor=G,k0(r0,q.prototype),r0.isPureReactComponent=!0;var qr=Array.isArray,yh=Symbol.for("react.client.reference"),Sg={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},F4=Object.prototype.hasOwnProperty,Yr=console.createTask?console.createTask:function(){return null};r0={react_stack_bottom_frame:function(K){return K()}};var BH,sv,$5={},U5=r0.react_stack_bottom_frame.bind(r0,L)(),$b=Yr($(L)),B4=!1,o4=/\/+/g,zw=typeof reportError==="function"?reportError:function(K){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof K==="object"&&K!==null&&typeof K.message==="string"?String(K.message):String(K),error:K});if(!window.dispatchEvent(l))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",K);return}console.error(K)},oH=!1,L5=null,u5=0,F5=!1,B5=!1,jh=typeof queueMicrotask==="function"?function(K){queueMicrotask(function(){return queueMicrotask(K)})}:Jg;r0=Object.freeze({__proto__:null,c:function(K){return D().useMemoCache(K)}});var $w={map:d,forEach:function(K,l,f){d(K,function(){l.apply(this,arguments)},f)},count:function(K){var l=0;return d(K,function(){l++}),l},toArray:function(K){return d(K,function(l){return l})||[]},only:function(K){if(!Og(K))throw Error("React.Children.only expected to receive a single React element child.");return K}};bF.Activity=Q0,bF.Children=$w,bF.Component=q,bF.Fragment=Pg,bF.Profiler=t,bF.PureComponent=G,bF.StrictMode=T,bF.Suspense=ng,bF.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sg,bF.__COMPILER_RUNTIME=r0,bF.act=function(K){var l=Sg.actQueue,f=u5;u5++;var hg=Sg.actQueue=l!==null?l:[],Xg=!1;try{var Zg=K()}catch($g){Sg.thrownErrors.push($g)}if(0<Sg.thrownErrors.length)throw Vg(l,f),K=Kg(Sg.thrownErrors),Sg.thrownErrors.length=0,K;if(Zg!==null&&typeof Zg==="object"&&typeof Zg.then==="function"){var lg=Zg;return jh(function(){Xg||F5||(F5=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function($g,K0){Xg=!0,lg.then(function(c0){if(Vg(l,f),f===0){try{p(hg),Jg(function(){return V(c0,$g,K0)})}catch(ih){Sg.thrownErrors.push(ih)}if(0<Sg.thrownErrors.length){var Uw=Kg(Sg.thrownErrors);Sg.thrownErrors.length=0,K0(Uw)}}else $g(c0)},function(c0){Vg(l,f),0<Sg.thrownErrors.length?(c0=Kg(Sg.thrownErrors),Sg.thrownErrors.length=0,K0(c0)):K0(c0)})}}}var gr=Zg;if(Vg(l,f),f===0&&(p(hg),hg.length!==0&&jh(function(){Xg||F5||(F5=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sg.actQueue=null),0<Sg.thrownErrors.length)throw K=Kg(Sg.thrownErrors),Sg.thrownErrors.length=0,K;return{then:function($g,K0){Xg=!0,f===0?(Sg.actQueue=hg,Jg(function(){return V(gr,$g,K0)})):$g(gr)}}},bF.cache=function(K){return function(){return K.apply(null,arguments)}},bF.cacheSignal=function(){return null},bF.captureOwnerStack=function(){var K=Sg.getCurrentStack;return K===null?null:K()},bF.cloneElement=function(K,l,f){if(K===null||K===void 0)throw Error("The argument must be a React element, but you passed "+K+".");var hg=k0({},K.props),Xg=K.key,Zg=K._owner;if(l!=null){var lg;g:{if(F4.call(l,"ref")&&(lg=Object.getOwnPropertyDescriptor(l,"ref").get)&&lg.isReactWarning){lg=!1;break g}lg=l.ref!==void 0}lg&&(Zg=J()),C(l)&&(z(l.key),Xg=""+l.key);for(gr in l)!F4.call(l,gr)||gr==="key"||gr==="__self"||gr==="__source"||gr==="ref"&&l.ref===void 0||(hg[gr]=l[gr])}var gr=arguments.length-2;if(gr===1)hg.children=f;else if(1<gr){lg=Array(gr);for(var $g=0;$g<gr;$g++)lg[$g]=arguments[$g+2];hg.children=lg}hg=a(K.type,Xg,hg,Zg,K._debugStack,K._debugTask);for(Xg=2;Xg<arguments.length;Xg++)Wg(arguments[Xg]);return hg},bF.createContext=function(K){return K={$$typeof:Qg,_currentValue:K,_currentValue2:K,_threadCount:0,Provider:null,Consumer:null},K.Provider=K,K.Consumer={$$typeof:Rg,_context:K},K._currentRenderer=null,K._currentRenderer2=null,K},bF.createElement=function(K,l,f){for(var hg=2;hg<arguments.length;hg++)Wg(arguments[hg]);hg={};var Xg=null;if(l!=null)for($g in sv||!("__self"in l)||"key"in l||(sv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),C(l)&&(z(l.key),Xg=""+l.key),l)F4.call(l,$g)&&$g!=="key"&&$g!=="__self"&&$g!=="__source"&&(hg[$g]=l[$g]);var Zg=arguments.length-2;if(Zg===1)hg.children=f;else if(1<Zg){for(var lg=Array(Zg),gr=0;gr<Zg;gr++)lg[gr]=arguments[gr+2];Object.freeze&&Object.freeze(lg),hg.children=lg}if(K&&K.defaultProps)for($g in Zg=K.defaultProps,Zg)hg[$g]===void 0&&(hg[$g]=Zg[$g]);Xg&&n(hg,typeof K==="function"?K.displayName||K.name||"Unknown":K);var $g=1e4>Sg.recentlyCreatedOwnerStacks++;return a(K,Xg,hg,J(),$g?Error("react-stack-top-frame"):U5,$g?Yr($(K)):$b)},bF.createRef=function(){var K={current:null};return Object.seal(K),K},bF.forwardRef=function(K){K!=null&&K.$$typeof===Sr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof K!=="function"?console.error("forwardRef requires a render function but was given %s.",K===null?"null":typeof K):K.length!==0&&K.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",K.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),K!=null&&K.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var l={$$typeof:Lg,render:K},f;return Object.defineProperty(l,"displayName",{enumerable:!1,configurable:!0,get:function(){return f},set:function(hg){f=hg,K.name||K.displayName||(Object.defineProperty(K,"name",{value:hg}),K.displayName=hg)}}),l},bF.isValidElement=Og,bF.lazy=function(K){K={_status:-1,_result:K};var l={$$typeof:jr,_payload:K,_init:wg},f={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return K._ioInfo=f,l._debugInfo=[{awaited:f}],l},bF.memo=function(K,l){K==null&&console.error("memo: The first argument must be a component. Instead received: %s",K===null?"null":typeof K),l={$$typeof:Sr,type:K,compare:l===void 0?null:l};var f;return Object.defineProperty(l,"displayName",{enumerable:!1,configurable:!0,get:function(){return f},set:function(hg){f=hg,K.name||K.displayName||(Object.defineProperty(K,"name",{value:hg}),K.displayName=hg)}}),l},bF.startTransition=function(K){var l=Sg.T,f={};f._updatedFibers=new Set,Sg.T=f;try{var hg=K(),Xg=Sg.S;Xg!==null&&Xg(f,hg),typeof hg==="object"&&hg!==null&&typeof hg.then==="function"&&(Sg.asyncTransitions++,hg.then(Fg,Fg),hg.then(R,zw))}catch(Zg){zw(Zg)}finally{l===null&&f._updatedFibers&&(K=f._updatedFibers.size,f._updatedFibers.clear(),10<K&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),l!==null&&f.types!==null&&(l.types!==null&&l.types!==f.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),l.types=f.types),Sg.T=l}},bF.unstable_useCacheRefresh=function(){return D().useCacheRefresh()},bF.use=function(K){return D().use(K)},bF.useActionState=function(K,l,f){return D().useActionState(K,l,f)},bF.useCallback=function(K,l){return D().useCallback(K,l)},bF.useContext=function(K){var l=D();return K.$$typeof===Rg&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),l.useContext(K)},bF.useDebugValue=function(K,l){return D().useDebugValue(K,l)},bF.useDeferredValue=function(K,l){return D().useDeferredValue(K,l)},bF.useEffect=function(K,l){return K==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useEffect(K,l)},bF.useEffectEvent=function(K){return D().useEffectEvent(K)},bF.useId=function(){return D().useId()},bF.useImperativeHandle=function(K,l,f){return D().useImperativeHandle(K,l,f)},bF.useInsertionEffect=function(K,l){return K==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useInsertionEffect(K,l)},bF.useLayoutEffect=function(K,l){return K==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useLayoutEffect(K,l)},bF.useMemo=function(K,l){return D().useMemo(K,l)},bF.useOptimistic=function(K,l){return D().useOptimistic(K,l)},bF.useReducer=function(K,l,f){return D().useReducer(K,l,f)},bF.useRef=function(K){return D().useRef(K)},bF.useState=function(K){return D().useState(K)},bF.useSyncExternalStore=function(K,l,f){return D().useSyncExternalStore(K,l,f)},bF.useTransition=function(){return D().useTransition()},bF.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var f7=W4((AF)=>{(function(){function w(){if(c=!1,d){var V=AF.unstable_now();Fg=V;var p=!0;try{g:{Wg=!1,Og&&(Og=!1,Ag(wg),wg=-1),_=!0;var rg=a;try{r:{G(V);for(y=A(L);y!==null&&!(y.expirationTime>V&&X());){var i=y.callback;if(typeof i==="function"){y.callback=null,a=y.priorityLevel;var Pg=i(y.expirationTime<=V);if(V=AF.unstable_now(),typeof Pg==="function"){y.callback=Pg,G(V),p=!0;break r}y===A(L)&&q(L),G(V)}else q(L);y=A(L)}if(y!==null)p=!0;else{var T=A(C);T!==null&&z(R,T.startTime-V),p=!1}}break g}finally{y=null,a=rg,_=!1}p=void 0}}finally{p?Jg():d=!1}}}function H(V,p){var rg=V.length;V.push(p);g:for(;0<rg;){var i=rg-1>>>1,Pg=V[i];if(0<W(Pg,p))V[i]=p,V[rg]=Pg,rg=i;else break g}}function A(V){return V.length===0?null:V[0]}function q(V){if(V.length===0)return null;var p=V[0],rg=V.pop();if(rg!==p){V[0]=rg;g:for(var i=0,Pg=V.length,T=Pg>>>1;i<T;){var t=2*(i+1)-1,Rg=V[t],Qg=t+1,Lg=V[Qg];if(0>W(Rg,rg))Qg<Pg&&0>W(Lg,Rg)?(V[i]=Lg,V[Qg]=rg,i=Qg):(V[i]=Rg,V[t]=rg,i=t);else if(Qg<Pg&&0>W(Lg,rg))V[i]=Lg,V[Qg]=rg,i=Qg;else break g}}return p}function W(V,p){var rg=V.sortIndex-p.sortIndex;return rg!==0?rg:V.id-p.id}function G(V){for(var p=A(C);p!==null;){if(p.callback===null)q(C);else if(p.startTime<=V)q(C),p.sortIndex=p.expirationTime,H(L,p);else break;p=A(C)}}function R(V){if(Og=!1,G(V),!Wg)if(A(L)!==null)Wg=!0,d||(d=!0,Jg());else{var p=A(C);p!==null&&z(R,p.startTime-V)}}function X(){return c?!0:AF.unstable_now()-Fg<D?!1:!0}function z(V,p){wg=s(function(){V(AF.unstable_now())},p)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),AF.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var U=performance;AF.unstable_now=function(){return U.now()}}else{var $=Date,J=$.now();AF.unstable_now=function(){return $.now()-J}}var L=[],C=[],n=1,y=null,a=3,_=!1,Wg=!1,Og=!1,c=!1,s=typeof setTimeout==="function"?setTimeout:null,Ag=typeof clearTimeout==="function"?clearTimeout:null,vg=typeof setImmediate<"u"?setImmediate:null,d=!1,wg=-1,D=5,Fg=-1;if(typeof vg==="function")var Jg=function(){vg(w)};else if(typeof MessageChannel<"u"){var Kg=new MessageChannel,Vg=Kg.port2;Kg.port1.onmessage=w,Jg=function(){Vg.postMessage(null)}}else Jg=function(){s(w,0)};AF.unstable_IdlePriority=5,AF.unstable_ImmediatePriority=1,AF.unstable_LowPriority=4,AF.unstable_NormalPriority=3,AF.unstable_Profiling=null,AF.unstable_UserBlockingPriority=2,AF.unstable_cancelCallback=function(V){V.callback=null},AF.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<V?Math.floor(1000/V):5},AF.unstable_getCurrentPriorityLevel=function(){return a},AF.unstable_next=function(V){switch(a){case 1:case 2:case 3:var p=3;break;default:p=a}var rg=a;a=p;try{return V()}finally{a=rg}},AF.unstable_requestPaint=function(){c=!0},AF.unstable_runWithPriority=function(V,p){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var rg=a;a=V;try{return p()}finally{a=rg}},AF.unstable_scheduleCallback=function(V,p,rg){var i=AF.unstable_now();switch(typeof rg==="object"&&rg!==null?(rg=rg.delay,rg=typeof rg==="number"&&0<rg?i+rg:i):rg=i,V){case 1:var Pg=-1;break;case 2:Pg=250;break;case 5:Pg=1073741823;break;case 4:Pg=1e4;break;default:Pg=5000}return Pg=rg+Pg,V={id:n++,callback:p,priorityLevel:V,startTime:rg,expirationTime:Pg,sortIndex:-1},rg>i?(V.sortIndex=rg,H(C,V),A(L)===null&&V===A(C)&&(Og?(Ag(wg),wg=-1):Og=!0,z(R,rg-i))):(V.sortIndex=Pg,H(L,V),Wg||_||(Wg=!0,d||(d=!0,Jg()))),V},AF.unstable_shouldYield=X,AF.unstable_wrapCallback=function(V){var p=a;return function(){var rg=a;a=p;try{return V.apply(this,arguments)}finally{a=rg}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var c7=W4((qF)=>{var vW=Mg(Hr());(function(){function w(){}function H($){return""+$}function A($,J,L){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{H(C);var n=!1}catch(y){n=!0}return n&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&C[Symbol.toStringTag]||C.constructor.name||"Object"),H(C)),{$$typeof:z,key:C==null?null:""+C,children:$,containerInfo:J,implementation:L}}function q($,J){if($==="font")return"";if(typeof J==="string")return J==="use-credentials"?J:""}function W($){return $===null?"`null`":$===void 0?"`undefined`":$===""?"an empty string":'something with type "'+typeof $+'"'}function G($){return $===null?"`null`":$===void 0?"`undefined`":$===""?"an empty string":typeof $==="string"?JSON.stringify($):typeof $==="number"?"`"+$+"`":'something with type "'+typeof $+'"'}function R(){var $=U.H;return $===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),$}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var X={d:{f:w,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},z=Symbol.for("react.portal"),U=vW.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),qF.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,qF.createPortal=function($,J){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!J||J.nodeType!==1&&J.nodeType!==9&&J.nodeType!==11)throw Error("Target container is not a DOM element.");return A($,J,null,L)},qF.flushSync=function($){var J=U.T,L=X.p;try{if(U.T=null,X.p=2,$)return $()}finally{U.T=J,X.p=L,X.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},qF.preconnect=function($,J){typeof $==="string"&&$?J!=null&&typeof J!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",G(J)):J!=null&&typeof J.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",W(J.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",W($)),typeof $==="string"&&(J?(J=J.crossOrigin,J=typeof J==="string"?J==="use-credentials"?J:"":void 0):J=null,X.d.C($,J))},qF.prefetchDNS=function($){if(typeof $!=="string"||!$)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",W($));else if(1<arguments.length){var J=arguments[1];typeof J==="object"&&J.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",G(J)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",G(J))}typeof $==="string"&&X.d.D($)},qF.preinit=function($,J){if(typeof $==="string"&&$?J==null||typeof J!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",G(J)):J.as!=="style"&&J.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',G(J.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",W($)),typeof $==="string"&&J&&typeof J.as==="string"){var L=J.as,C=q(L,J.crossOrigin),n=typeof J.integrity==="string"?J.integrity:void 0,y=typeof J.fetchPriority==="string"?J.fetchPriority:void 0;L==="style"?X.d.S($,typeof J.precedence==="string"?J.precedence:void 0,{crossOrigin:C,integrity:n,fetchPriority:y}):L==="script"&&X.d.X($,{crossOrigin:C,integrity:n,fetchPriority:y,nonce:typeof J.nonce==="string"?J.nonce:void 0})}},qF.preinitModule=function($,J){var L="";if(typeof $==="string"&&$||(L+=" The `href` argument encountered was "+W($)+"."),J!==void 0&&typeof J!=="object"?L+=" The `options` argument encountered was "+W(J)+".":J&&("as"in J)&&J.as!=="script"&&(L+=" The `as` option encountered was "+G(J.as)+"."),L)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",L);else switch(L=J&&typeof J.as==="string"?J.as:"script",L){case"script":break;default:L=G(L),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',L,$)}if(typeof $==="string")if(typeof J==="object"&&J!==null){if(J.as==null||J.as==="script")L=q(J.as,J.crossOrigin),X.d.M($,{crossOrigin:L,integrity:typeof J.integrity==="string"?J.integrity:void 0,nonce:typeof J.nonce==="string"?J.nonce:void 0})}else J==null&&X.d.M($)},qF.preload=function($,J){var L="";if(typeof $==="string"&&$||(L+=" The `href` argument encountered was "+W($)+"."),J==null||typeof J!=="object"?L+=" The `options` argument encountered was "+W(J)+".":typeof J.as==="string"&&J.as||(L+=" The `as` option encountered was "+W(J.as)+"."),L&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',L),typeof $==="string"&&typeof J==="object"&&J!==null&&typeof J.as==="string"){L=J.as;var C=q(L,J.crossOrigin);X.d.L($,L,{crossOrigin:C,integrity:typeof J.integrity==="string"?J.integrity:void 0,nonce:typeof J.nonce==="string"?J.nonce:void 0,type:typeof J.type==="string"?J.type:void 0,fetchPriority:typeof J.fetchPriority==="string"?J.fetchPriority:void 0,referrerPolicy:typeof J.referrerPolicy==="string"?J.referrerPolicy:void 0,imageSrcSet:typeof J.imageSrcSet==="string"?J.imageSrcSet:void 0,imageSizes:typeof J.imageSizes==="string"?J.imageSizes:void 0,media:typeof J.media==="string"?J.media:void 0})}},qF.preloadModule=function($,J){var L="";typeof $==="string"&&$||(L+=" The `href` argument encountered was "+W($)+"."),J!==void 0&&typeof J!=="object"?L+=" The `options` argument encountered was "+W(J)+".":J&&("as"in J)&&typeof J.as!=="string"&&(L+=" The `as` option encountered was "+W(J.as)+"."),L&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',L),typeof $==="string"&&(J?(L=q(J.as,J.crossOrigin),X.d.m($,{as:typeof J.as==="string"&&J.as!=="script"?J.as:void 0,crossOrigin:L,integrity:typeof J.integrity==="string"?J.integrity:void 0})):X.d.m($))},qF.requestFormReset=function($){X.d.r($)},qF.unstable_batchedUpdates=function($,J){return $(J)},qF.useFormState=function($,J,L){return R().useFormState($,J,L)},qF.useFormStatus=function(){return R().useHostTransitionStatus()},qF.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var $8=W4((OT,t7)=>{t7.exports=c7()});var p7=W4((PF)=>{var rr=Mg(f7()),Nh=Mg(Hr()),wW=Mg($8());(function(){function w(g,r){for(g=g.memoizedState;g!==null&&0<r;)g=g.next,r--;return g}function H(g,r,v,h){if(v>=r.length)return h;var O=r[v],b=ar(g)?g.slice():yg({},g);return b[O]=H(g[O],r,v+1,h),b}function A(g,r,v){if(r.length!==v.length)console.warn("copyWithRename() expects paths of the same length");else{for(var h=0;h<v.length-1;h++)if(r[h]!==v[h]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return q(g,r,v,0)}}function q(g,r,v,h){var O=r[h],b=ar(g)?g.slice():yg({},g);return h+1===r.length?(b[v[h]]=b[O],ar(b)?b.splice(O,1):delete b[O]):b[O]=q(g[O],r,v,h+1),b}function W(g,r,v){var h=r[v],O=ar(g)?g.slice():yg({},g);if(v+1===r.length)return ar(O)?O.splice(h,1):delete O[h],O;return O[h]=W(g[h],r,v+1),O}function G(){return!1}function R(){return null}function X(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function z(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function U(){}function $(){}function J(g){var r=[];return g.forEach(function(v){r.push(v)}),r.sort().join(", ")}function L(g,r,v,h){return new E$(g,r,v,h)}function C(g,r){g.context===yw&&($q(g.current,2,r,g,null,null),E4())}function n(g,r){if(Uv!==null){var v=r.staleFamilies;r=r.updatedFamilies,Y6(),sM(g.current,r,v),E4()}}function y(g){Uv=g}function a(g){return!(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)}function _(g){var r=g,v=g;if(g.alternate)for(;r.return;)r=r.return;else{g=r;do r=g,(r.flags&4098)!==0&&(v=r.return),g=r.return;while(g)}return r.tag===3?v:null}function Wg(g){if(g.tag===13){var r=g.memoizedState;if(r===null&&(g=g.alternate,g!==null&&(r=g.memoizedState)),r!==null)return r.dehydrated}return null}function Og(g){if(g.tag===31){var r=g.memoizedState;if(r===null&&(g=g.alternate,g!==null&&(r=g.memoizedState)),r!==null)return r.dehydrated}return null}function c(g){if(_(g)!==g)throw Error("Unable to find node on an unmounted component.")}function s(g){var r=g.alternate;if(!r){if(r=_(g),r===null)throw Error("Unable to find node on an unmounted component.");return r!==g?null:g}for(var v=g,h=r;;){var O=v.return;if(O===null)break;var b=O.alternate;if(b===null){if(h=O.return,h!==null){v=h;continue}break}if(O.child===b.child){for(b=O.child;b;){if(b===v)return c(O),g;if(b===h)return c(O),r;b=b.sibling}throw Error("Unable to find node on an unmounted component.")}if(v.return!==h.return)v=O,h=b;else{for(var P=!1,M=O.child;M;){if(M===v){P=!0,v=O,h=b;break}if(M===h){P=!0,h=O,v=b;break}M=M.sibling}if(!P){for(M=b.child;M;){if(M===v){P=!0,v=b,h=O;break}if(M===h){P=!0,h=b,v=O;break}M=M.sibling}if(!P)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(v.alternate!==h)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(v.tag!==3)throw Error("Unable to find node on an unmounted component.");return v.stateNode.current===v?g:r}function Ag(g){var r=g.tag;if(r===5||r===26||r===27||r===6)return g;for(g=g.child;g!==null;){if(r=Ag(g),r!==null)return r;g=g.sibling}return null}function vg(g){if(g===null||typeof g!=="object")return null;return g=OX&&g[OX]||g["@@iterator"],typeof g==="function"?g:null}function d(g){if(g==null)return null;if(typeof g==="function")return g.$$typeof===bL?null:g.displayName||g.name||null;if(typeof g==="string")return g;switch(g){case f4:return"Fragment";case oq:return"Profiler";case mO:return"StrictMode";case Nq:return"Suspense";case Zq:return"SuspenseList";case lq:return"Activity"}if(typeof g==="object")switch(typeof g.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),g.$$typeof){case n4:return"Portal";case J1:return g.displayName||"Context";case Iq:return(g._context.displayName||"Context")+".Consumer";case B6:var r=g.render;return g=g.displayName,g||(g=r.displayName||r.name||"",g=g!==""?"ForwardRef("+g+")":"ForwardRef"),g;case DO:return r=g.displayName||null,r!==null?r:d(g.type)||"Memo";case wv:r=g._payload,g=g._init;try{return d(g(r))}catch(v){}}return null}function wg(g){return typeof g.tag==="number"?D(g):typeof g.name==="string"?g.name:null}function D(g){var r=g.type;switch(g.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(r._context.displayName||"Context")+".Consumer";case 10:return r.displayName||"Context";case 18:return"DehydratedFragment";case 11:return g=r.render,g=g.displayName||g.name||"",r.displayName||(g!==""?"ForwardRef("+g+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return d(r);case 8:return r===mO?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof r==="function")return r.displayName||r.name||null;if(typeof r==="string")return r;break;case 29:if(r=g._debugInfo,r!=null){for(var v=r.length-1;0<=v;v--)if(typeof r[v].name==="string")return r[v].name}if(g.return!==null)return D(g.return)}return null}function Fg(g){return{current:g}}function Jg(g,r){0>i1?console.error("Unexpected pop."):(r!==Cq[i1]&&console.error("Unexpected Fiber popped."),g.current=Tq[i1],Tq[i1]=null,Cq[i1]=null,i1--)}function Kg(g,r,v){i1++,Tq[i1]=g.current,Cq[i1]=v,g.current=r}function Vg(g){return g===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),g}function V(g,r){Kg(mw,r,g),Kg(o6,g,g),Kg(xw,null,g);var v=r.nodeType;switch(v){case 9:case 11:v=v===9?"#document":"#fragment",r=(r=r.documentElement)?(r=r.namespaceURI)?ZR(r):hw:hw;break;default:if(v=r.tagName,r=r.namespaceURI)r=ZR(r),r=lR(r,v);else switch(v){case"svg":r=oh;break;case"math":r=x2;break;default:r=hw}}v=v.toLowerCase(),v=uM(null,v),v={context:r,ancestorInfo:v},Jg(xw,g),Kg(xw,v,g)}function p(g){Jg(xw,g),Jg(o6,g),Jg(mw,g)}function rg(){return Vg(xw.current)}function i(g){g.memoizedState!==null&&Kg(kO,g,g);var r=Vg(xw.current),v=g.type,h=lR(r.context,v);v=uM(r.ancestorInfo,v),h={context:h,ancestorInfo:v},r!==h&&(Kg(o6,g,g),Kg(xw,h,g))}function Pg(g){o6.current===g&&(Jg(xw,g),Jg(o6,g)),kO.current===g&&(Jg(kO,g),Q8._currentValue=P4)}function T(){}function t(){if(I6===0){bX=console.log,AX=console.info,qX=console.warn,PX=console.error,WX=console.group,MX=console.groupCollapsed,GX=console.groupEnd;var g={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:g,log:g,warn:g,error:g,group:g,groupCollapsed:g,groupEnd:g})}I6++}function Rg(){if(I6--,I6===0){var g={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:yg({},g,{value:bX}),info:yg({},g,{value:AX}),warn:yg({},g,{value:qX}),error:yg({},g,{value:PX}),group:yg({},g,{value:WX}),groupCollapsed:yg({},g,{value:MX}),groupEnd:yg({},g,{value:GX})})}0>I6&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Qg(g){var r=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,g=g.stack,Error.prepareStackTrace=r,g.startsWith(`Error: react-stack-top-frame
`)&&(g=g.slice(29)),r=g.indexOf(`
`),r!==-1&&(g=g.slice(r+1)),r=g.indexOf("react_stack_bottom_frame"),r!==-1&&(r=g.lastIndexOf(`
`,r)),r!==-1)g=g.slice(0,r);else return"";return g}function Lg(g){if(Sq===void 0)try{throw Error()}catch(v){var r=v.stack.trim().match(/\n( *(at )?)/);Sq=r&&r[1]||"",RX=-1<v.stack.indexOf(`
    at`)?" (<anonymous>)":-1<v.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sq+g+RX}function ng(g,r){if(!g||xq)return"";var v=mq.get(g);if(v!==void 0)return v;xq=!0,v=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var h=null;h=m.H,m.H=null,t();try{var O={DetermineComponentFrameRoot:function(){try{if(r){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(gg){var S=gg}Reflect.construct(g,[],F)}else{try{F.call()}catch(gg){S=gg}g.call(F.prototype)}}else{try{throw Error()}catch(gg){S=gg}(F=g())&&typeof F.catch==="function"&&F.catch(function(){})}}catch(gg){if(gg&&S&&typeof gg.stack==="string")return[gg.stack,S.stack]}return[null,null]}};O.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(O.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(O.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var P=O.DetermineComponentFrameRoot(),M=P[0],Y=P[1];if(M&&Y){var Q=M.split(`
`),N=Y.split(`
`);for(P=b=0;b<Q.length&&!Q[b].includes("DetermineComponentFrameRoot");)b++;for(;P<N.length&&!N[P].includes("DetermineComponentFrameRoot");)P++;if(b===Q.length||P===N.length)for(b=Q.length-1,P=N.length-1;1<=b&&0<=P&&Q[b]!==N[P];)P--;for(;1<=b&&0<=P;b--,P--)if(Q[b]!==N[P]){if(b!==1||P!==1)do if(b--,P--,0>P||Q[b]!==N[P]){var Z=`
`+Q[b].replace(" at new "," at ");return g.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",g.displayName)),typeof g==="function"&&mq.set(g,Z),Z}while(1<=b&&0<=P);break}}}finally{xq=!1,m.H=h,Rg(),Error.prepareStackTrace=v}return Q=(Q=g?g.displayName||g.name:"")?Lg(Q):"",typeof g==="function"&&mq.set(g,Q),Q}function dg(g,r){switch(g.tag){case 26:case 27:case 5:return Lg(g.type);case 16:return Lg("Lazy");case 13:return g.child!==r&&r!==null?Lg("Suspense Fallback"):Lg("Suspense");case 19:return Lg("SuspenseList");case 0:case 15:return ng(g.type,!1);case 11:return ng(g.type.render,!1);case 1:return ng(g.type,!0);case 31:return Lg("Activity");default:return""}}function Sr(g){try{var r="",v=null;do{r+=dg(g,v);var h=g._debugInfo;if(h)for(var O=h.length-1;0<=O;O--){var b=h[O];if(typeof b.name==="string"){var P=r;g:{var{name:M,env:Y,debugLocation:Q}=b;if(Q!=null){var N=Qg(Q),Z=N.lastIndexOf(`
`),F=Z===-1?N:N.slice(Z+1);if(F.indexOf(M)!==-1){var S=`
`+F;break g}}S=Lg(M+(Y?" ["+Y+"]":""))}r=P+S}}v=g,g=g.return}while(g);return r}catch(gg){return`
Error generating stack: `+gg.message+`
`+gg.stack}}function jr(g){return(g=g?g.displayName||g.name:"")?Lg(g):""}function Q0(){if(hv===null)return null;var g=hv._debugOwner;return g!=null?wg(g):null}function S1(){if(hv===null)return"";var g=hv;try{var r="";switch(g.tag===6&&(g=g.return),g.tag){case 26:case 27:case 5:r+=Lg(g.type);break;case 13:r+=Lg("Suspense");break;case 19:r+=Lg("SuspenseList");break;case 31:r+=Lg("Activity");break;case 30:case 0:case 15:case 1:g._debugOwner||r!==""||(r+=jr(g.type));break;case 11:g._debugOwner||r!==""||(r+=jr(g.type.render))}for(;g;)if(typeof g.tag==="number"){var v=g;g=v._debugOwner;var h=v._debugStack;if(g&&h){var O=Qg(h);O!==""&&(r+=`
`+O)}}else if(g.debugStack!=null){var b=g.debugStack;(g=g.owner)&&b&&(r+=`
`+Qg(b))}else break;var P=r}catch(M){P=`
Error generating stack: `+M.message+`
`+M.stack}return P}function bg(g,r,v,h,O,b,P){var M=hv;Xv(g);try{return g!==null&&g._debugTask?g._debugTask.run(r.bind(null,v,h,O,b,P)):r(v,h,O,b,P)}finally{Xv(M)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function Xv(g){m.getCurrentStack=g===null?null:S1,Q1=!1,hv=g}function k0(g){return typeof Symbol==="function"&&Symbol.toStringTag&&g[Symbol.toStringTag]||g.constructor.name||"Object"}function Yv(g){try{return r0(g),!1}catch(r){return!0}}function r0(g){return""+g}function qr(g,r){if(Yv(g))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",r,k0(g)),r0(g)}function yh(g,r){if(Yv(g))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",r,k0(g)),r0(g)}function Sg(g){if(Yv(g))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",k0(g)),r0(g)}function F4(g){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(r.isDisabled)return!0;if(!r.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{t4=r.inject(g),$0=r}catch(v){console.error("React instrumentation encountered an error: %o.",v)}return r.checkDCE?!0:!1}function Yr(g){if(typeof RL==="function"&&XL(g),$0&&typeof $0.setStrictMode==="function")try{$0.setStrictMode(t4,g)}catch(r){K1||(K1=!0,console.error("React instrumentation encountered an error: %o",r))}}function BH(g){return g>>>=0,g===0?32:31-(YL(g)/JL|0)|0}function sv(g){var r=g&42;if(r!==0)return r;switch(g&-g){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return g&261888;case 262144:case 524288:case 1048576:case 2097152:return g&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return g&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),g}}function $5(g,r,v){var h=g.pendingLanes;if(h===0)return 0;var O=0,b=g.suspendedLanes,P=g.pingedLanes;g=g.warmLanes;var M=h&134217727;return M!==0?(h=M&~b,h!==0?O=sv(h):(P&=M,P!==0?O=sv(P):v||(v=M&~g,v!==0&&(O=sv(v))))):(M=h&~b,M!==0?O=sv(M):P!==0?O=sv(P):v||(v=h&~g,v!==0&&(O=sv(v)))),O===0?0:r!==0&&r!==O&&(r&b)===0&&(b=O&-O,v=r&-r,b>=v||b===32&&(v&4194048)!==0)?r:O}function U5(g,r){return(g.pendingLanes&~(g.suspendedLanes&~g.pingedLanes)&r)===0}function $b(g,r){switch(g){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function B4(){var g=_O;return _O<<=1,(_O&62914560)===0&&(_O=4194304),g}function o4(g){for(var r=[],v=0;31>v;v++)r.push(g);return r}function zw(g,r){g.pendingLanes|=r,r!==268435456&&(g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0)}function oH(g,r,v,h,O,b){var P=g.pendingLanes;g.pendingLanes=v,g.suspendedLanes=0,g.pingedLanes=0,g.warmLanes=0,g.expiredLanes&=v,g.entangledLanes&=v,g.errorRecoveryDisabledLanes&=v,g.shellSuspendCounter=0;var{entanglements:M,expirationTimes:Y,hiddenUpdates:Q}=g;for(v=P&~v;0<v;){var N=31-F0(v),Z=1<<N;M[N]=0,Y[N]=-1;var F=Q[N];if(F!==null)for(Q[N]=null,N=0;N<F.length;N++){var S=F[N];S!==null&&(S.lane&=-536870913)}v&=~Z}h!==0&&L5(g,h,0),b!==0&&O===0&&g.tag!==0&&(g.suspendedLanes|=b&~(P&~r))}function L5(g,r,v){g.pendingLanes|=r,g.suspendedLanes&=~r;var h=31-F0(r);g.entangledLanes|=r,g.entanglements[h]=g.entanglements[h]|1073741824|v&261930}function u5(g,r){var v=g.entangledLanes|=r;for(g=g.entanglements;v;){var h=31-F0(v),O=1<<h;O&r|g[h]&r&&(g[h]|=r),v&=~O}}function F5(g,r){var v=r&-r;return v=(v&42)!==0?1:B5(v),(v&(g.suspendedLanes|r))!==0?0:v}function B5(g){switch(g){case 2:g=1;break;case 8:g=4;break;case 32:g=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:g=128;break;case 268435456:g=134217728;break;default:g=0}return g}function jh(g,r,v){if(z1)for(g=g.pendingUpdatersLaneMap;0<v;){var h=31-F0(v),O=1<<h;g[h].add(r),v&=~O}}function $w(g,r){if(z1)for(var{pendingUpdatersLaneMap:v,memoizedUpdaters:h}=g;0<r;){var O=31-F0(r);g=1<<O,O=v[O],0<O.size&&(O.forEach(function(b){var P=b.alternate;P!==null&&h.has(P)||h.add(b)}),O.clear()),r&=~g}}function K(g){return g&=-g,Hv!==0&&Hv<g?Dv!==0&&Dv<g?(g&134217727)!==0?$1:yO:Dv:Hv}function l(){var g=hr.p;if(g!==0)return g;return g=window.event,g===void 0?$1:sR(g.type)}function f(g,r){var v=hr.p;try{return hr.p=g,r()}finally{hr.p=v}}function hg(g){delete g[G0],delete g[B0],delete g[_q],delete g[QL],delete g[KL]}function Xg(g){var r=g[G0];if(r)return r;for(var v=g.parentNode;v;){if(r=v[kw]||v[G0]){if(v=r.alternate,r.child!==null||v!==null&&v.child!==null)for(g=VR(g);g!==null;){if(v=g[G0])return v;g=VR(g)}return r}g=v,v=g.parentNode}return null}function Zg(g){if(g=g[G0]||g[kw]){var r=g.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return g}return null}function lg(g){var r=g.tag;if(r===5||r===26||r===27||r===6)return g.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function gr(g){var r=g[XX];return r||(r=g[XX]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function $g(g){g[N6]=!0}function K0(g,r){c0(g,r),c0(g+"Capture",r)}function c0(g,r){y5[g]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",g),y5[g]=r;var v=g.toLowerCase();yq[v]=g,g==="onDoubleClick"&&(yq.ondblclick=g);for(g=0;g<r.length;g++)YX.add(r[g])}function Uw(g,r){zL[r.type]||r.onChange||r.onInput||r.readOnly||r.disabled||r.value==null||(g==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),r.onChange||r.readOnly||r.disabled||r.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function ih(g){if(mv.call(QX,g))return!0;if(mv.call(JX,g))return!1;if($L.test(g))return QX[g]=!0;return JX[g]=!0,console.error("Invalid attribute name: `%s`",g),!1}function qM(g,r,v){if(ih(r)){if(!g.hasAttribute(r)){switch(typeof v){case"symbol":case"object":return v;case"function":return v;case"boolean":if(v===!1)return v}return v===void 0?void 0:null}if(g=g.getAttribute(r),g===""&&v===!0)return!0;return qr(v,r),g===""+v?v:g}}function IH(g,r,v){if(ih(r))if(v===null)g.removeAttribute(r);else{switch(typeof v){case"undefined":case"function":case"symbol":g.removeAttribute(r);return;case"boolean":var h=r.toLowerCase().slice(0,5);if(h!=="data-"&&h!=="aria-"){g.removeAttribute(r);return}}qr(v,r),g.setAttribute(r,""+v)}}function NH(g,r,v){if(v===null)g.removeAttribute(r);else{switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(r);return}qr(v,r),g.setAttribute(r,""+v)}}function x1(g,r,v,h){if(h===null)g.removeAttribute(v);else{switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":g.removeAttribute(v);return}qr(h,v),g.setAttributeNS(r,v,""+h)}}function Jv(g){switch(typeof g){case"bigint":case"boolean":case"number":case"string":case"undefined":return g;case"object":return Sg(g),g;default:return""}}function PM(g){var r=g.type;return(g=g.nodeName)&&g.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function J$(g,r,v){var h=Object.getOwnPropertyDescriptor(g.constructor.prototype,r);if(!g.hasOwnProperty(r)&&typeof h<"u"&&typeof h.get==="function"&&typeof h.set==="function"){var{get:O,set:b}=h;return Object.defineProperty(g,r,{configurable:!0,get:function(){return O.call(this)},set:function(P){Sg(P),v=""+P,b.call(this,P)}}),Object.defineProperty(g,r,{enumerable:h.enumerable}),{getValue:function(){return v},setValue:function(P){Sg(P),v=""+P},stopTracking:function(){g._valueTracker=null,delete g[r]}}}}function Ub(g){if(!g._valueTracker){var r=PM(g)?"checked":"value";g._valueTracker=J$(g,r,""+g[r])}}function WM(g){if(!g)return!1;var r=g._valueTracker;if(!r)return!0;var v=r.getValue(),h="";return g&&(h=PM(g)?g.checked?"true":"false":g.value),g=h,g!==v?(r.setValue(g),!0):!1}function ZH(g){if(g=g||(typeof document<"u"?document:void 0),typeof g>"u")return null;try{return g.activeElement||g.body}catch(r){return g.body}}function Qv(g){return g.replace(UL,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function MM(g,r){r.checked===void 0||r.defaultChecked===void 0||zX||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Q0()||"A component",r.type),zX=!0),r.value===void 0||r.defaultValue===void 0||KX||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Q0()||"A component",r.type),KX=!0)}function Lb(g,r,v,h,O,b,P,M){if(g.name="",P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(qr(P,"type"),g.type=P):g.removeAttribute("type"),r!=null)if(P==="number"){if(r===0&&g.value===""||g.value!=r)g.value=""+Jv(r)}else g.value!==""+Jv(r)&&(g.value=""+Jv(r));else P!=="submit"&&P!=="reset"||g.removeAttribute("value");r!=null?ub(g,P,Jv(r)):v!=null?ub(g,P,Jv(v)):h!=null&&g.removeAttribute("value"),O==null&&b!=null&&(g.defaultChecked=!!b),O!=null&&(g.checked=O&&typeof O!=="function"&&typeof O!=="symbol"),M!=null&&typeof M!=="function"&&typeof M!=="symbol"&&typeof M!=="boolean"?(qr(M,"name"),g.name=""+Jv(M)):g.removeAttribute("name")}function GM(g,r,v,h,O,b,P,M){if(b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(qr(b,"type"),g.type=b),r!=null||v!=null){if(!(b!=="submit"&&b!=="reset"||r!==void 0&&r!==null)){Ub(g);return}v=v!=null?""+Jv(v):"",r=r!=null?""+Jv(r):v,M||r===g.value||(g.value=r),g.defaultValue=r}h=h!=null?h:O,h=typeof h!=="function"&&typeof h!=="symbol"&&!!h,g.checked=M?g.checked:!!h,g.defaultChecked=!!h,P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"&&(qr(P,"name"),g.name=P),Ub(g)}function ub(g,r,v){r==="number"&&ZH(g.ownerDocument)===g||g.defaultValue===""+v||(g.defaultValue=""+v)}function RM(g,r){r.value==null&&(typeof r.children==="object"&&r.children!==null?Nh.Children.forEach(r.children,function(v){v==null||typeof v==="string"||typeof v==="number"||typeof v==="bigint"||UX||(UX=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):r.dangerouslySetInnerHTML==null||LX||(LX=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),r.selected==null||$X||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),$X=!0)}function XM(){var g=Q0();return g?`

Check the render method of \``+g+"`.":""}function I4(g,r,v,h){if(g=g.options,r){r={};for(var O=0;O<v.length;O++)r["$"+v[O]]=!0;for(v=0;v<g.length;v++)O=r.hasOwnProperty("$"+g[v].value),g[v].selected!==O&&(g[v].selected=O),O&&h&&(g[v].defaultSelected=!0)}else{v=""+Jv(v),r=null;for(O=0;O<g.length;O++){if(g[O].value===v){g[O].selected=!0,h&&(g[O].defaultSelected=!0);return}r!==null||g[O].disabled||(r=g[O])}r!==null&&(r.selected=!0)}}function YM(g,r){for(g=0;g<FX.length;g++){var v=FX[g];if(r[v]!=null){var h=ar(r[v]);r.multiple&&!h?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",v,XM()):!r.multiple&&h&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",v,XM())}}r.value===void 0||r.defaultValue===void 0||uX||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),uX=!0)}function JM(g,r){r.value===void 0||r.defaultValue===void 0||BX||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Q0()||"A component"),BX=!0),r.children!=null&&r.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function QM(g,r,v){if(r!=null&&(r=""+Jv(r),r!==g.value&&(g.value=r),v==null)){g.defaultValue!==r&&(g.defaultValue=r);return}g.defaultValue=v!=null?""+Jv(v):""}function KM(g,r,v,h){if(r==null){if(h!=null){if(v!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ar(h)){if(1<h.length)throw Error("<textarea> can only have at most one child.");h=h[0]}v=h}v==null&&(v=""),r=v}v=Jv(r),g.defaultValue=v,h=g.textContent,h===v&&h!==""&&h!==null&&(g.value=h),Ub(g)}function zM(g,r){return g.serverProps===void 0&&g.serverTail.length===0&&g.children.length===1&&3<g.distanceFromLeaf&&g.distanceFromLeaf>15-r?zM(g.children[0],r):g}function t0(g){return"  "+"  ".repeat(g)}function N4(g){return"+ "+"  ".repeat(g)}function o5(g){return"- "+"  ".repeat(g)}function $M(g){switch(g.tag){case 26:case 27:case 5:return g.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return g=g.type,g.displayName||g.name||null;case 11:return g=g.type.render,g.displayName||g.name||null;case 1:return g=g.type,g.displayName||g.name||null;default:return null}}function eh(g,r){return oX.test(g)?(g=JSON.stringify(g),g.length>r-2?8>r?'{"..."}':"{"+g.slice(0,r-7)+'..."}':"{"+g+"}"):g.length>r?5>r?'{"..."}':g.slice(0,r-3)+"...":g}function lH(g,r,v){var h=120-2*v;if(r===null)return N4(v)+eh(g,h)+`
`;if(typeof r==="string"){for(var O=0;O<r.length&&O<g.length&&r.charCodeAt(O)===g.charCodeAt(O);O++);return O>h-8&&10<O&&(g="..."+g.slice(O-8),r="..."+r.slice(O-8)),N4(v)+eh(g,h)+`
`+o5(v)+eh(r,h)+`
`}return t0(v)+eh(g,h)+`
`}function Fb(g){return Object.prototype.toString.call(g).replace(/^\[object (.*)\]$/,function(r,v){return v})}function nh(g,r){switch(typeof g){case"string":return g=JSON.stringify(g),g.length>r?5>r?'"..."':g.slice(0,r-4)+'..."':g;case"object":if(g===null)return"null";if(ar(g))return"[...]";if(g.$$typeof===Y1)return(r=d(g.type))?"<"+r+">":"<...>";var v=Fb(g);if(v==="Object"){v="",r-=2;for(var h in g)if(g.hasOwnProperty(h)){var O=JSON.stringify(h);if(O!=='"'+h+'"'&&(h=O),r-=h.length-2,O=nh(g[h],15>r?r:15),r-=O.length,0>r){v+=v===""?"...":", ...";break}v+=(v===""?"":",")+h+":"+O}return"{"+v+"}"}return v;case"function":return(r=g.displayName||g.name)?"function "+r:"function";default:return String(g)}}function Z4(g,r){return typeof g!=="string"||oX.test(g)?"{"+nh(g,r-2)+"}":g.length>r-2?5>r?'"..."':'"'+g.slice(0,r-5)+'..."':'"'+g+'"'}function Bb(g,r,v){var h=120-v.length-g.length,O=[],b;for(b in r)if(r.hasOwnProperty(b)&&b!=="children"){var P=Z4(r[b],120-v.length-b.length-1);h-=b.length+P.length+2,O.push(b+"="+P)}return O.length===0?v+"<"+g+`>
`:0<h?v+"<"+g+" "+O.join(" ")+`>
`:v+"<"+g+`
`+v+"  "+O.join(`
`+v+"  ")+`
`+v+`>
`}function Q$(g,r,v){var h="",O=yg({},r),b;for(b in g)if(g.hasOwnProperty(b)){delete O[b];var P=120-2*v-b.length-2,M=nh(g[b],P);r.hasOwnProperty(b)?(P=nh(r[b],P),h+=N4(v)+b+": "+M+`
`,h+=o5(v)+b+": "+P+`
`):h+=N4(v)+b+": "+M+`
`}for(var Y in O)O.hasOwnProperty(Y)&&(g=nh(O[Y],120-2*v-Y.length-2),h+=o5(v)+Y+": "+g+`
`);return h}function K$(g,r,v,h){var O="",b=new Map;for(Q in v)v.hasOwnProperty(Q)&&b.set(Q.toLowerCase(),Q);if(b.size===1&&b.has("children"))O+=Bb(g,r,t0(h));else{for(var P in r)if(r.hasOwnProperty(P)&&P!=="children"){var M=120-2*(h+1)-P.length-1,Y=b.get(P.toLowerCase());if(Y!==void 0){b.delete(P.toLowerCase());var Q=r[P];Y=v[Y];var N=Z4(Q,M);M=Z4(Y,M),typeof Q==="object"&&Q!==null&&typeof Y==="object"&&Y!==null&&Fb(Q)==="Object"&&Fb(Y)==="Object"&&(2<Object.keys(Q).length||2<Object.keys(Y).length||-1<N.indexOf("...")||-1<M.indexOf("..."))?O+=t0(h+1)+P+`={{
`+Q$(Q,Y,h+2)+t0(h+1)+`}}
`:(O+=N4(h+1)+P+"="+N+`
`,O+=o5(h+1)+P+"="+M+`
`)}else O+=t0(h+1)+P+"="+Z4(r[P],M)+`
`}b.forEach(function(Z){if(Z!=="children"){var F=120-2*(h+1)-Z.length-1;O+=o5(h+1)+Z+"="+Z4(v[Z],F)+`
`}}),O=O===""?t0(h)+"<"+g+`>
`:t0(h)+"<"+g+`
`+O+t0(h)+`>
`}if(g=v.children,r=r.children,typeof g==="string"||typeof g==="number"||typeof g==="bigint"){if(b="",typeof r==="string"||typeof r==="number"||typeof r==="bigint")b=""+r;O+=lH(b,""+g,h+1)}else if(typeof r==="string"||typeof r==="number"||typeof r==="bigint")O=g==null?O+lH(""+r,null,h+1):O+lH(""+r,void 0,h+1);return O}function UM(g,r){var v=$M(g);if(v===null){v="";for(g=g.child;g;)v+=UM(g,r),g=g.sibling;return v}return t0(r)+"<"+v+`>
`}function ob(g,r){var v=zM(g,r);if(v!==g&&(g.children.length!==1||g.children[0]!==v))return t0(r)+`...
`+ob(v,r+1);v="";var h=g.fiber._debugInfo;if(h)for(var O=0;O<h.length;O++){var b=h[O].name;typeof b==="string"&&(v+=t0(r)+"<"+b+`>
`,r++)}if(h="",O=g.fiber.pendingProps,g.fiber.tag===6)h=lH(O,g.serverProps,r),r++;else if(b=$M(g.fiber),b!==null)if(g.serverProps===void 0){h=r;var P=120-2*h-b.length-2,M="";for(Q in O)if(O.hasOwnProperty(Q)&&Q!=="children"){var Y=Z4(O[Q],15);if(P-=Q.length+Y.length+2,0>P){M+=" ...";break}M+=" "+Q+"="+Y}h=t0(h)+"<"+b+M+`>
`,r++}else g.serverProps===null?(h=Bb(b,O,N4(r)),r++):typeof g.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(h=K$(b,O,g.serverProps,r),r++);var Q="";O=g.fiber.child;for(b=0;O&&b<g.children.length;)P=g.children[b],P.fiber===O?(Q+=ob(P,r),b++):Q+=UM(O,r),O=O.sibling;O&&0<g.children.length&&(Q+=t0(r)+`...
`),O=g.serverTail,g.serverProps===null&&r--;for(g=0;g<O.length;g++)b=O[g],Q=typeof b==="string"?Q+(o5(r)+eh(b,120-2*r)+`
`):Q+Bb(b.type,b.props,o5(r));return v+h+Q}function Ib(g){try{return`

`+ob(g,0)}catch(r){return""}}function LM(g,r,v){for(var h=r,O=null,b=0;h;)h===g&&(b=0),O={fiber:h,children:O!==null?[O]:[],serverProps:h===r?v:h===g?null:void 0,serverTail:[],distanceFromLeaf:b},b++,h=h.return;return O!==null?Ib(O).replaceAll(/^[+-]/gm,">"):""}function uM(g,r){var v=yg({},g||NX),h={tag:r};if(IX.indexOf(r)!==-1&&(v.aTagInScope=null,v.buttonTagInScope=null,v.nobrTagInScope=null),uL.indexOf(r)!==-1&&(v.pTagInButtonScope=null),LL.indexOf(r)!==-1&&r!=="address"&&r!=="div"&&r!=="p"&&(v.listItemTagAutoclosing=null,v.dlItemTagAutoclosing=null),v.current=h,r==="form"&&(v.formTag=h),r==="a"&&(v.aTagInScope=h),r==="button"&&(v.buttonTagInScope=h),r==="nobr"&&(v.nobrTagInScope=h),r==="p"&&(v.pTagInButtonScope=h),r==="li"&&(v.listItemTagAutoclosing=h),r==="dd"||r==="dt")v.dlItemTagAutoclosing=h;return r==="#document"||r==="html"?v.containerTagInScope=null:v.containerTagInScope||(v.containerTagInScope=h),g!==null||r!=="#document"&&r!=="html"&&r!=="body"?v.implicitRootScope===!0&&(v.implicitRootScope=!1):v.implicitRootScope=!0,v}function FM(g,r,v){switch(r){case"select":return g==="hr"||g==="option"||g==="optgroup"||g==="script"||g==="template"||g==="#text";case"optgroup":return g==="option"||g==="#text";case"option":return g==="#text";case"tr":return g==="th"||g==="td"||g==="style"||g==="script"||g==="template";case"tbody":case"thead":case"tfoot":return g==="tr"||g==="style"||g==="script"||g==="template";case"colgroup":return g==="col"||g==="template";case"table":return g==="caption"||g==="colgroup"||g==="tbody"||g==="tfoot"||g==="thead"||g==="style"||g==="script"||g==="template";case"head":return g==="base"||g==="basefont"||g==="bgsound"||g==="link"||g==="meta"||g==="title"||g==="noscript"||g==="noframes"||g==="style"||g==="script"||g==="template";case"html":if(v)break;return g==="head"||g==="body"||g==="frameset";case"frameset":return g==="frame";case"#document":if(!v)return g==="html"}switch(g){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return r!=="h1"&&r!=="h2"&&r!=="h3"&&r!=="h4"&&r!=="h5"&&r!=="h6";case"rp":case"rt":return FL.indexOf(r)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return r==null;case"head":return v||r===null;case"html":return v&&r==="#document"||r===null;case"body":return v&&(r==="#document"||r==="html")||r===null}return!0}function z$(g,r){switch(g){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return r.pTagInButtonScope;case"form":return r.formTag||r.pTagInButtonScope;case"li":return r.listItemTagAutoclosing;case"dd":case"dt":return r.dlItemTagAutoclosing;case"button":return r.buttonTagInScope;case"a":return r.aTagInScope;case"nobr":return r.nobrTagInScope}return null}function BM(g,r){for(;g;){switch(g.tag){case 5:case 26:case 27:if(g.type===r)return g}g=g.return}return null}function Nb(g,r){r=r||NX;var v=r.current;if(r=(v=FM(g,v&&v.tag,r.implicitRootScope)?null:v)?null:z$(g,r),r=v||r,!r)return!0;var h=r.tag;if(r=String(!!v)+"|"+g+"|"+h,jO[r])return!1;jO[r]=!0;var O=(r=hv)?BM(r.return,h):null,b=r!==null&&O!==null?LM(O,r,null):"",P="<"+g+">";return v?(v="",h==="table"&&g==="tr"&&(v+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,P,h,v,b)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,P,h,b),r&&(g=r.return,O===null||g===null||O===g&&g._debugOwner===r._debugOwner||bg(O,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,h,P)})),!1}function TH(g,r,v){if(v||FM("#text",r,!1))return!0;if(v="#text|"+r,jO[v])return!1;jO[v]=!0;var h=(v=hv)?BM(v,r):null;return v=v!==null&&h!==null?LM(h,v,v.tag!==6?{children:null}:null):"",/\S/.test(g)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,r,v):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,r,v),!1}function fh(g,r){if(r){var v=g.firstChild;if(v&&v===g.lastChild&&v.nodeType===3){v.nodeValue=r;return}}g.textContent=r}function $$(g){return g.replace(IL,function(r,v){return v.toUpperCase()})}function oM(g,r,v){var h=r.indexOf("--")===0;h||(-1<r.indexOf("-")?p4.hasOwnProperty(r)&&p4[r]||(p4[r]=!0,console.error("Unsupported style property %s. Did you mean %s?",r,$$(r.replace(oL,"ms-")))):BL.test(r)?p4.hasOwnProperty(r)&&p4[r]||(p4[r]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",r,r.charAt(0).toUpperCase()+r.slice(1))):!TX.test(v)||iq.hasOwnProperty(v)&&iq[v]||(iq[v]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,r,v.replace(TX,""))),typeof v==="number"&&(isNaN(v)?CX||(CX=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",r)):isFinite(v)||SX||(SX=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",r)))),v==null||typeof v==="boolean"||v===""?h?g.setProperty(r,""):r==="float"?g.cssFloat="":g[r]="":h?g.setProperty(r,v):typeof v!=="number"||v===0||xX.has(r)?r==="float"?g.cssFloat=v:(yh(v,r),g[r]=(""+v).trim()):g[r]=v+"px"}function IM(g,r,v){if(r!=null&&typeof r!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(r&&Object.freeze(r),g=g.style,v!=null){if(r){var h={};if(v){for(var O in v)if(v.hasOwnProperty(O)&&!r.hasOwnProperty(O))for(var b=jq[O]||[O],P=0;P<b.length;P++)h[b[P]]=O}for(var M in r)if(r.hasOwnProperty(M)&&(!v||v[M]!==r[M]))for(O=jq[M]||[M],b=0;b<O.length;b++)h[O[b]]=M;M={};for(var Y in r)for(O=jq[Y]||[Y],b=0;b<O.length;b++)M[O[b]]=Y;Y={};for(var Q in h)if(O=h[Q],(b=M[Q])&&O!==b&&(P=O+","+b,!Y[P])){Y[P]=!0,P=console;var N=r[O];P.error.call(P,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",N==null||typeof N==="boolean"||N===""?"Removing":"Updating",O,b)}}for(var Z in v)!v.hasOwnProperty(Z)||r!=null&&r.hasOwnProperty(Z)||(Z.indexOf("--")===0?g.setProperty(Z,""):Z==="float"?g.cssFloat="":g[Z]="");for(var F in r)Q=r[F],r.hasOwnProperty(F)&&v[F]!==Q&&oM(g,F,Q)}else for(h in r)r.hasOwnProperty(h)&&oM(g,h,r[h])}function ch(g){if(g.indexOf("-")===-1)return!1;switch(g){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function NM(g){return NL.get(g)||g}function U$(g,r){if(mv.call(a4,r)&&a4[r])return!0;if(lL.test(r)){if(g="aria-"+r.slice(4).toLowerCase(),g=mX.hasOwnProperty(g)?g:null,g==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",r),a4[r]=!0;if(r!==g)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",r,g),a4[r]=!0}if(ZL.test(r)){if(g=r.toLowerCase(),g=mX.hasOwnProperty(g)?g:null,g==null)return a4[r]=!0,!1;r!==g&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",r,g),a4[r]=!0)}return!0}function L$(g,r){var v=[],h;for(h in r)U$(g,h)||v.push(h);r=v.map(function(O){return"`"+O+"`"}).join(", "),v.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",r,g):1<v.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",r,g)}function u$(g,r,v,h){if(mv.call(o0,r)&&o0[r])return!0;var O=r.toLowerCase();if(O==="onfocusin"||O==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),o0[r]=!0;if(typeof v==="function"&&(g==="form"&&r==="action"||g==="input"&&r==="formAction"||g==="button"&&r==="formAction"))return!0;if(h!=null){if(g=h.possibleRegistrationNames,h.registrationNameDependencies.hasOwnProperty(r))return!0;if(h=g.hasOwnProperty(O)?g[O]:null,h!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",r,h),o0[r]=!0;if(kX.test(r))return console.error("Unknown event handler property `%s`. It will be ignored.",r),o0[r]=!0}else if(kX.test(r))return TL.test(r)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",r),o0[r]=!0;if(CL.test(r)||SL.test(r))return!0;if(O==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),o0[r]=!0;if(O==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),o0[r]=!0;if(O==="is"&&v!==null&&v!==void 0&&typeof v!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof v),o0[r]=!0;if(typeof v==="number"&&isNaN(v))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",r),o0[r]=!0;if(eO.hasOwnProperty(O)){if(O=eO[O],O!==r)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",r,O),o0[r]=!0}else if(r!==O)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",r,O),o0[r]=!0;switch(r){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof v){case"boolean":switch(r){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(O=r.toLowerCase().slice(0,5),O==="data-"||O==="aria-")return!0;return v?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',v,r,r,v,r):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',v,r,r,v,r,r,r),o0[r]=!0}case"function":case"symbol":return o0[r]=!0,!1;case"string":if(v==="false"||v==="true"){switch(r){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",v,r,v==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',r,v),o0[r]=!0}}return!0}function F$(g,r,v){var h=[],O;for(O in r)u$(g,O,r[O],v)||h.push(O);r=h.map(function(b){return"`"+b+"`"}).join(", "),h.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",r,g):1<h.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",r,g)}function th(g){return xL.test(""+g)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":g}function m1(){}function Zb(g){return g=g.target||g.srcElement||window,g.correspondingUseElement&&(g=g.correspondingUseElement),g.nodeType===3?g.parentNode:g}function ZM(g){var r=Zg(g);if(r&&(g=r.stateNode)){var v=g[B0]||null;g:switch(g=r.stateNode,r.type){case"input":if(Lb(g,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name),r=v.name,v.type==="radio"&&r!=null){for(v=g;v.parentNode;)v=v.parentNode;qr(r,"name"),v=v.querySelectorAll('input[name="'+Qv(""+r)+'"][type="radio"]');for(r=0;r<v.length;r++){var h=v[r];if(h!==g&&h.form===g.form){var O=h[B0]||null;if(!O)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Lb(h,O.value,O.defaultValue,O.defaultValue,O.checked,O.defaultChecked,O.type,O.name)}}for(r=0;r<v.length;r++)h=v[r],h.form===g.form&&WM(h)}break g;case"textarea":QM(g,v.value,v.defaultValue);break g;case"select":r=v.value,r!=null&&I4(g,!!v.multiple,r,!1)}}}function lM(g,r,v){if(eq)return g(r,v);eq=!0;try{var h=g(r);return h}finally{if(eq=!1,s4!==null||gh!==null){if(E4(),s4&&(r=s4,g=gh,gh=s4=null,ZM(r),g))for(r=0;r<g.length;r++)ZM(g[r])}}}function ph(g,r){var v=g.stateNode;if(v===null)return null;var h=v[B0]||null;if(h===null)return null;v=h[r];g:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(g=g.type,h=!(g==="button"||g==="input"||g==="select"||g==="textarea")),g=!h;break g;default:g=!1}if(g)return null;if(v&&typeof v!=="function")throw Error("Expected `"+r+"` listener to be a function, instead got a value of `"+typeof v+"` type.");return v}function TM(){if(nO)return nO;var g,r=fq,v=r.length,h,O="value"in Vw?Vw.value:Vw.textContent,b=O.length;for(g=0;g<v&&r[g]===O[g];g++);var P=v-g;for(h=1;h<=P&&r[v-h]===O[b-h];h++);return nO=O.slice(g,1<h?1-h:void 0)}function CH(g){var r=g.keyCode;return"charCode"in g?(g=g.charCode,g===0&&r===13&&(g=13)):g=r,g===10&&(g=13),32<=g||g===13?g:0}function SH(){return!0}function CM(){return!1}function V0(g){function r(v,h,O,b,P){this._reactName=v,this._targetInst=O,this.type=h,this.nativeEvent=b,this.target=P,this.currentTarget=null;for(var M in g)g.hasOwnProperty(M)&&(v=g[M],this[M]=v?v(b):b[M]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?SH:CM,this.isPropagationStopped=CM,this}return yg(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var v=this.nativeEvent;v&&(v.preventDefault?v.preventDefault():typeof v.returnValue!=="unknown"&&(v.returnValue=!1),this.isDefaultPrevented=SH)},stopPropagation:function(){var v=this.nativeEvent;v&&(v.stopPropagation?v.stopPropagation():typeof v.cancelBubble!=="unknown"&&(v.cancelBubble=!0),this.isPropagationStopped=SH)},persist:function(){},isPersistent:SH}),r}function B$(g){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(g):(g=cL[g])?!!r[g]:!1}function lb(){return B$}function SM(g,r){switch(g){case"keyup":return Ou.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==yX;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xM(g){return g=g.detail,typeof g==="object"&&"data"in g?g.data:null}function o$(g,r){switch(g){case"compositionend":return xM(r);case"keypress":if(r.which!==iX)return null;return nX=!0,eX;case"textInput":return g=r.data,g===eX&&nX?null:g;default:return null}}function I$(g,r){if(rh)return g==="compositionend"||!dq&&SM(g,r)?(g=TM(),nO=fq=Vw=null,rh=!1,g):null;switch(g){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jX&&r.locale!=="ko"?null:r.data;default:return null}}function mM(g){var r=g&&g.nodeName&&g.nodeName.toLowerCase();return r==="input"?!!Au[g.type]:r==="textarea"?!0:!1}function N$(g){if(!U1)return!1;g="on"+g;var r=g in document;return r||(r=document.createElement("div"),r.setAttribute(g,"return;"),r=typeof r[g]==="function"),r}function DM(g,r,v,h){s4?gh?gh.push(h):gh=[h]:s4=h,r=BO(r,"onChange"),0<r.length&&(v=new fO("onChange","change",null,v,h),g.push({event:v,listeners:r}))}function Z$(g){KR(g,0)}function xH(g){var r=lg(g);if(WM(r))return g}function kM(g,r){if(g==="change")return r}function VM(){x6&&(x6.detachEvent("onpropertychange",EM),m6=x6=null)}function EM(g){if(g.propertyName==="value"&&xH(m6)){var r=[];DM(r,m6,g,Zb(g)),lM(Z$,r)}}function l$(g,r,v){g==="focusin"?(VM(),x6=r,m6=v,x6.attachEvent("onpropertychange",EM)):g==="focusout"&&VM()}function T$(g){if(g==="selectionchange"||g==="keyup"||g==="keydown")return xH(m6)}function C$(g,r){if(g==="click")return xH(r)}function S$(g,r){if(g==="input"||g==="change")return xH(r)}function x$(g,r){return g===r&&(g!==0||1/g===1/r)||g!==g&&r!==r}function dh(g,r){if(I0(g,r))return!0;if(typeof g!=="object"||g===null||typeof r!=="object"||r===null)return!1;var v=Object.keys(g),h=Object.keys(r);if(v.length!==h.length)return!1;for(h=0;h<v.length;h++){var O=v[h];if(!mv.call(r,O)||!I0(g[O],r[O]))return!1}return!0}function _M(g){for(;g&&g.firstChild;)g=g.firstChild;return g}function yM(g,r){var v=_M(g);g=0;for(var h;v;){if(v.nodeType===3){if(h=g+v.textContent.length,g<=r&&h>=r)return{node:v,offset:r-g};g=h}g:{for(;v;){if(v.nextSibling){v=v.nextSibling;break g}v=v.parentNode}v=void 0}v=_M(v)}}function jM(g,r){return g&&r?g===r?!0:g&&g.nodeType===3?!1:r&&r.nodeType===3?jM(g,r.parentNode):("contains"in g)?g.contains(r):g.compareDocumentPosition?!!(g.compareDocumentPosition(r)&16):!1:!1}function iM(g){g=g!=null&&g.ownerDocument!=null&&g.ownerDocument.defaultView!=null?g.ownerDocument.defaultView:window;for(var r=ZH(g.document);r instanceof g.HTMLIFrameElement;){try{var v=typeof r.contentWindow.location.href==="string"}catch(h){v=!1}if(v)g=r.contentWindow;else break;r=ZH(g.document)}return r}function Tb(g){var r=g&&g.nodeName&&g.nodeName.toLowerCase();return r&&(r==="input"&&(g.type==="text"||g.type==="search"||g.type==="tel"||g.type==="url"||g.type==="password")||r==="textarea"||g.contentEditable==="true")}function eM(g,r,v){var h=v.window===v?v.document:v.nodeType===9?v:v.ownerDocument;sq||vh==null||vh!==ZH(h)||(h=vh,("selectionStart"in h)&&Tb(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),D6&&dh(D6,h)||(D6=h,h=BO(aq,"onSelect"),0<h.length&&(r=new fO("onSelect","select",null,r,v),g.push({event:r,listeners:h}),r.target=vh)))}function I5(g,r){var v={};return v[g.toLowerCase()]=r.toLowerCase(),v["Webkit"+g]="webkit"+r,v["Moz"+g]="moz"+r,v}function N5(g){if(gP[g])return gP[g];if(!wh[g])return g;var r=wh[g],v;for(v in r)if(r.hasOwnProperty(v)&&v in cX)return gP[g]=r[v];return g}function Cv(g,r){sX.set(g,r),K0(r,[g])}function m$(g){for(var r=tO,v=0;v<g.length;v++){var h=g[v];if(typeof h==="object"&&h!==null)if(ar(h)&&h.length===2&&typeof h[0]==="string"){if(r!==tO&&r!==HP)return wP;r=HP}else return wP;else{if(typeof h==="function"||typeof h==="string"&&50<h.length||r!==tO&&r!==hP)return wP;r=hP}}return r}function Cb(g,r,v,h){for(var O in g)mv.call(g,O)&&O[0]!=="_"&&g1(O,g[O],r,v,h)}function g1(g,r,v,h,O){switch(typeof r){case"object":if(r===null){r="null";break}else{if(r.$$typeof===Y1){var b=d(r.type)||"…",P=r.key;r=r.props;var M=Object.keys(r),Y=M.length;if(P==null&&Y===0){r="<"+b+" />";break}if(3>h||Y===1&&M[0]==="children"&&P==null){r="<"+b+" … />";break}v.push([O+"  ".repeat(h)+g,"<"+b]),P!==null&&g1("key",P,v,h+1,O),g=!1;for(var Q in r)Q==="children"?r.children!=null&&(!ar(r.children)||0<r.children.length)&&(g=!0):mv.call(r,Q)&&Q[0]!=="_"&&g1(Q,r[Q],v,h+1,O);v.push(["",g?">…</"+b+">":"/>"]);return}if(b=Object.prototype.toString.call(r),b=b.slice(8,b.length-1),b==="Array"){if(Q=m$(r),Q===hP||Q===tO){r=JSON.stringify(r);break}else if(Q===HP){v.push([O+"  ".repeat(h)+g,""]);for(g=0;g<r.length;g++)b=r[g],g1(b[0],b[1],v,h+1,O);return}}if(b==="Promise"){if(r.status==="fulfilled"){if(b=v.length,g1(g,r.value,v,h,O),v.length>b){v=v[b],v[1]="Promise<"+(v[1]||"Object")+">";return}}else if(r.status==="rejected"&&(b=v.length,g1(g,r.reason,v,h,O),v.length>b)){v=v[b],v[1]="Rejected Promise<"+v[1]+">";return}v.push(["  ".repeat(h)+g,"Promise"]);return}b==="Object"&&(Q=Object.getPrototypeOf(r))&&typeof Q.constructor==="function"&&(b=Q.constructor.name),v.push([O+"  ".repeat(h)+g,b==="Object"?3>h?"":"…":b]),3>h&&Cb(r,v,h+1,O);return}case"function":r=r.name===""?"() => {}":r.name+"() {}";break;case"string":r=r===Xu?"…":JSON.stringify(r);break;case"undefined":r="undefined";break;case"boolean":r=r?"true":"false";break;default:r=String(r)}v.push([O+"  ".repeat(h)+g,r])}function nM(g,r,v,h){var O=!0;for(P in g)P in r||(v.push([pO+"  ".repeat(h)+P,"…"]),O=!1);for(var b in r)if(b in g){var P=g[b],M=r[b];if(P!==M){if(h===0&&b==="children")O="  ".repeat(h)+b,v.push([pO+O,"…"],[dO+O,"…"]);else{if(!(3<=h)){if(typeof P==="object"&&typeof M==="object"&&P!==null&&M!==null&&P.$$typeof===M.$$typeof)if(M.$$typeof===Y1){if(P.type===M.type&&P.key===M.key){P=d(M.type)||"…",O="  ".repeat(h)+b,P="<"+P+" … />",v.push([pO+O,P],[dO+O,P]),O=!1;continue}}else{var Y=Object.prototype.toString.call(P),Q=Object.prototype.toString.call(M);if(Y===Q&&(Q==="[object Object]"||Q==="[object Array]")){Y=[vY+"  ".repeat(h)+b,Q==="[object Array]"?"Array":""],v.push(Y),Q=v.length,nM(P,M,v,h+1)?Q===v.length&&(Y[1]="Referentially unequal but deeply equal objects. Consider memoization."):O=!1;continue}}else if(typeof P==="function"&&typeof M==="function"&&P.name===M.name&&P.length===M.length&&(Y=Function.prototype.toString.call(P),Q=Function.prototype.toString.call(M),Y===Q)){P=M.name===""?"() => {}":M.name+"() {}",v.push([vY+"  ".repeat(h)+b,P+" Referentially unequal function closure. Consider memoization."]);continue}}g1(b,P,v,h,pO),g1(b,M,v,h,dO)}O=!1}}else v.push([dO+"  ".repeat(h)+b,"…"]),O=!1;return O}function p0(g){ig=g&63?"Blocking":g&64?"Gesture":g&4194176?"Transition":g&62914560?"Suspense":g&2080374784?"Idle":"Other"}function r1(g,r,v,h){Kr&&(_w.start=r,_w.end=v,e1.color="warning",e1.tooltipText=h,e1.properties=null,(g=g._debugTask)?g.run(performance.measure.bind(performance,h,_w)):performance.measure(h,_w))}function mH(g,r,v){r1(g,r,v,"Reconnect")}function DH(g,r,v,h,O){var b=D(g);if(b!==null&&Kr){var{alternate:P,actualDuration:M}=g;if(P===null||P.child!==g.child)for(var Y=g.child;Y!==null;Y=Y.sibling)M-=Y.actualDuration;h=0.5>M?h?"tertiary-light":"primary-light":10>M?h?"tertiary":"primary":100>M?h?"tertiary-dark":"primary-dark":"error";var Q=g.memoizedProps;M=g._debugTask,Q!==null&&P!==null&&P.memoizedProps!==Q?(Y=[Yu],Q=nM(P.memoizedProps,Q,Y,0),1<Y.length&&(Q&&!Ew&&(P.lanes&O)===0&&100<g.actualDuration?(Ew=!0,Y[0]=Ju,e1.color="warning",e1.tooltipText=wY):(e1.color=h,e1.tooltipText=b),e1.properties=Y,_w.start=r,_w.end=v,M!=null?M.run(performance.measure.bind(performance,"​"+b,_w)):performance.measure("​"+b,_w))):M!=null?M.run(console.timeStamp.bind(console,b,r,v,zv,void 0,h)):console.timeStamp(b,r,v,zv,void 0,h)}}function Sb(g,r,v,h){if(Kr){var O=D(g);if(O!==null){for(var b=null,P=[],M=0;M<h.length;M++){var Y=h[M];b==null&&Y.source!==null&&(b=Y.source._debugTask),Y=Y.value,P.push(["Error",typeof Y==="object"&&Y!==null&&typeof Y.message==="string"?String(Y.message):String(Y)])}g.key!==null&&g1("key",g.key,P,0,""),g.memoizedProps!==null&&Cb(g.memoizedProps,P,0,""),b==null&&(b=g._debugTask),g={start:r,end:v,detail:{devtools:{color:"error",track:zv,tooltipText:g.tag===13?"Hydration failed":"Error boundary caught an error",properties:P}}},b?b.run(performance.measure.bind(performance,"​"+O,g)):performance.measure("​"+O,g)}}}function v1(g,r,v,h,O){if(O!==null){if(Kr){var b=D(g);if(b!==null){h=[];for(var P=0;P<O.length;P++){var M=O[P].value;h.push(["Error",typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M)])}g.key!==null&&g1("key",g.key,h,0,""),g.memoizedProps!==null&&Cb(g.memoizedProps,h,0,""),r={start:r,end:v,detail:{devtools:{color:"error",track:zv,tooltipText:"A lifecycle or effect errored",properties:h}}},(g=g._debugTask)?g.run(performance.measure.bind(performance,"​"+b,r)):performance.measure("​"+b,r)}}}else b=D(g),b!==null&&Kr&&(O=1>h?"secondary-light":100>h?"secondary":500>h?"secondary-dark":"error",(g=g._debugTask)?g.run(console.timeStamp.bind(console,b,r,v,zv,void 0,O)):console.timeStamp(b,r,v,zv,void 0,O))}function D$(g,r,v,h){if(Kr&&!(r<=g)){var O=(v&738197653)===v?"tertiary-dark":"primary-dark";v=(v&536870912)===v?"Prepared":(v&201326741)===v?"Hydrated":"Render",h?h.run(console.timeStamp.bind(console,v,g,r,ig,jg,O)):console.timeStamp(v,g,r,ig,jg,O)}}function fM(g,r,v,h){!Kr||r<=g||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",h?h.run(console.timeStamp.bind(console,"Prewarm",g,r,ig,jg,v)):console.timeStamp("Prewarm",g,r,ig,jg,v))}function cM(g,r,v,h){!Kr||r<=g||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",h?h.run(console.timeStamp.bind(console,"Suspended",g,r,ig,jg,v)):console.timeStamp("Suspended",g,r,ig,jg,v))}function k$(g,r,v,h,O,b){if(Kr&&!(r<=g)){v=[];for(var P=0;P<h.length;P++){var M=h[P].value;v.push(["Recoverable Error",typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M)])}g={start:g,end:r,detail:{devtools:{color:"primary-dark",track:ig,trackGroup:jg,tooltipText:O?"Hydration Failed":"Recovered after Error",properties:v}}},b?b.run(performance.measure.bind(performance,"Recovered",g)):performance.measure("Recovered",g)}}function xb(g,r,v,h){!Kr||r<=g||(h?h.run(console.timeStamp.bind(console,"Errored",g,r,ig,jg,"error")):console.timeStamp("Errored",g,r,ig,jg,"error"))}function V$(g,r,v,h){!Kr||r<=g||(h?h.run(console.timeStamp.bind(console,v,g,r,ig,jg,"secondary-light")):console.timeStamp(v,g,r,ig,jg,"secondary-light"))}function tM(g,r,v,h,O){if(Kr&&!(r<=g)){for(var b=[],P=0;P<v.length;P++){var M=v[P].value;b.push(["Error",typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M)])}g={start:g,end:r,detail:{devtools:{color:"error",track:ig,trackGroup:jg,tooltipText:h?"Remaining Effects Errored":"Commit Errored",properties:b}}},O?O.run(performance.measure.bind(performance,"Errored",g)):performance.measure("Errored",g)}}function ah(g,r,v){!Kr||r<=g||(v?v.run(console.timeStamp.bind(console,"Animating",g,r,ig,jg,"secondary-dark")):console.timeStamp("Animating",g,r,ig,jg,"secondary-dark"))}function kH(){for(var g=hh,r=OP=hh=0;r<g;){var v=$v[r];$v[r++]=null;var h=$v[r];$v[r++]=null;var O=$v[r];$v[r++]=null;var b=$v[r];if($v[r++]=null,h!==null&&O!==null){var P=h.pending;P===null?O.next=O:(O.next=P.next,P.next=O),h.pending=O}b!==0&&pM(v,O,b)}}function VH(g,r,v,h){$v[hh++]=g,$v[hh++]=r,$v[hh++]=v,$v[hh++]=h,OP|=h,g.lanes|=h,g=g.alternate,g!==null&&(g.lanes|=h)}function mb(g,r,v,h){return VH(g,r,v,h),EH(g)}function z0(g,r){return VH(g,null,null,r),EH(g)}function pM(g,r,v){g.lanes|=v;var h=g.alternate;h!==null&&(h.lanes|=v);for(var O=!1,b=g.return;b!==null;)b.childLanes|=v,h=b.alternate,h!==null&&(h.childLanes|=v),b.tag===22&&(g=b.stateNode,g===null||g._visibility&k6||(O=!0)),g=b,b=b.return;return g.tag===3?(b=g.stateNode,O&&r!==null&&(O=31-F0(v),g=b.hiddenUpdates,h=g[O],h===null?g[O]=[r]:h.push(r),r.lane=v|536870912),b):null}function EH(g){if(W8>Tu)throw h4=W8=0,M8=VP=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");h4>Cu&&(h4=0,M8=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),g.alternate===null&&(g.flags&4098)!==0&&MR(g);for(var r=g,v=r.return;v!==null;)r.alternate===null&&(r.flags&4098)!==0&&MR(g),r=v,v=r.return;return r.tag===3?r.stateNode:null}function Z5(g){if(Uv===null)return g;var r=Uv(g);return r===void 0?g:r.current}function Db(g){if(Uv===null)return g;var r=Uv(g);return r===void 0?g!==null&&g!==void 0&&typeof g.render==="function"&&(r=Z5(g.render),g.render!==r)?(r={$$typeof:B6,render:r},g.displayName!==void 0&&(r.displayName=g.displayName),r):g:r.current}function dM(g,r){if(Uv===null)return!1;var v=g.elementType;r=r.type;var h=!1,O=typeof r==="object"&&r!==null?r.$$typeof:null;switch(g.tag){case 1:typeof r==="function"&&(h=!0);break;case 0:typeof r==="function"?h=!0:O===wv&&(h=!0);break;case 11:O===B6?h=!0:O===wv&&(h=!0);break;case 14:case 15:O===DO?h=!0:O===wv&&(h=!0);break;default:return!1}return h&&(g=Uv(v),g!==void 0&&g===Uv(r))?!0:!1}function aM(g){Uv!==null&&typeof WeakSet==="function"&&(Hh===null&&(Hh=new WeakSet),Hh.add(g))}function sM(g,r,v){do{var h=g,O=h.alternate,b=h.child,P=h.sibling,M=h.tag;h=h.type;var Y=null;switch(M){case 0:case 15:case 1:Y=h;break;case 11:Y=h.render}if(Uv===null)throw Error("Expected resolveFamily to be set during hot reload.");var Q=!1;if(h=!1,Y!==null&&(Y=Uv(Y),Y!==void 0&&(v.has(Y)?h=!0:r.has(Y)&&(M===1?h=!0:Q=!0))),Hh!==null&&(Hh.has(g)||O!==null&&Hh.has(O))&&(h=!0),h&&(g._debugNeedsRemount=!0),h||Q)O=z0(g,2),O!==null&&Ir(O,g,2);if(b===null||h||sM(b,r,v),P===null)break;g=P}while(1)}function E$(g,r,v,h){this.tag=g,this.key=v,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,hY||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function kb(g){return g=g.prototype,!(!g||!g.isReactComponent)}function D1(g,r){var v=g.alternate;switch(v===null?(v=L(g.tag,r,g.key,g.mode),v.elementType=g.elementType,v.type=g.type,v.stateNode=g.stateNode,v._debugOwner=g._debugOwner,v._debugStack=g._debugStack,v._debugTask=g._debugTask,v._debugHookTypes=g._debugHookTypes,v.alternate=g,g.alternate=v):(v.pendingProps=r,v.type=g.type,v.flags=0,v.subtreeFlags=0,v.deletions=null,v.actualDuration=-0,v.actualStartTime=-1.1),v.flags=g.flags&65011712,v.childLanes=g.childLanes,v.lanes=g.lanes,v.child=g.child,v.memoizedProps=g.memoizedProps,v.memoizedState=g.memoizedState,v.updateQueue=g.updateQueue,r=g.dependencies,v.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext,_debugThenableState:r._debugThenableState},v.sibling=g.sibling,v.index=g.index,v.ref=g.ref,v.refCleanup=g.refCleanup,v.selfBaseDuration=g.selfBaseDuration,v.treeBaseDuration=g.treeBaseDuration,v._debugInfo=g._debugInfo,v._debugNeedsRemount=g._debugNeedsRemount,v.tag){case 0:case 15:v.type=Z5(g.type);break;case 1:v.type=Z5(g.type);break;case 11:v.type=Db(g.type)}return v}function g9(g,r){g.flags&=65011714;var v=g.alternate;return v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null,g.selfBaseDuration=0,g.treeBaseDuration=0):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext,_debugThenableState:r._debugThenableState},g.selfBaseDuration=v.selfBaseDuration,g.treeBaseDuration=v.treeBaseDuration),g}function Vb(g,r,v,h,O,b){var P=0,M=g;if(typeof g==="function")kb(g)&&(P=1),M=Z5(M);else if(typeof g==="string")P=rg(),P=tU(g,v,P)?26:g==="html"||g==="head"||g==="body"?27:5;else g:switch(g){case lq:return r=L(31,v,r,O),r.elementType=lq,r.lanes=b,r;case f4:return l5(v.children,O,b,r);case mO:P=8,O|=U0,O|=kv;break;case oq:return g=v,h=O,typeof g.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof g.id),r=L(12,g,r,h|xg),r.elementType=oq,r.lanes=b,r.stateNode={effectDuration:0,passiveEffectDuration:0},r;case Nq:return r=L(13,v,r,O),r.elementType=Nq,r.lanes=b,r;case Zq:return r=L(19,v,r,O),r.elementType=Zq,r.lanes=b,r;default:if(typeof g==="object"&&g!==null)switch(g.$$typeof){case J1:P=10;break g;case Iq:P=9;break g;case B6:P=11,M=Db(M);break g;case DO:P=14;break g;case wv:P=16,M=null;break g}if(M="",g===void 0||typeof g==="object"&&g!==null&&Object.keys(g).length===0)M+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";g===null?v="null":ar(g)?v="array":g!==void 0&&g.$$typeof===Y1?(v="<"+(d(g.type)||"Unknown")+" />",M=" Did you accidentally export a JSX literal instead of a component?"):v=typeof g,(P=h?wg(h):null)&&(M+=`

Check the render method of \``+P+"`."),P=29,v=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(v+"."+M)),M=null}return r=L(P,v,r,O),r.elementType=g,r.type=M,r.lanes=b,r._debugOwner=h,r}function _H(g,r,v){return r=Vb(g.type,g.key,g.props,g._owner,r,v),r._debugOwner=g._owner,r._debugStack=g._debugStack,r._debugTask=g._debugTask,r}function l5(g,r,v,h){return g=L(7,g,h,r),g.lanes=v,g}function Eb(g,r,v){return g=L(6,g,null,r),g.lanes=v,g}function r9(g){var r=L(18,null,null,Bg);return r.stateNode=g,r}function _b(g,r,v){return r=L(4,g.children!==null?g.children:[],g.key,r),r.lanes=v,r.stateNode={containerInfo:g.containerInfo,pendingChildren:null,implementation:g.implementation},r}function d0(g,r){if(typeof g==="object"&&g!==null){var v=bP.get(g);if(v!==void 0)return v;return r={value:g,source:r,stack:Sr(r)},bP.set(g,r),r}return{value:g,source:r,stack:Sr(r)}}function k1(g,r){Lw(),Oh[bh++]=V6,Oh[bh++]=aO,aO=g,V6=r}function v9(g,r,v){Lw(),Lv[uv++]=f1,Lv[uv++]=c1,Lv[uv++]=i5,i5=g;var h=f1;g=c1;var O=32-F0(h)-1;h&=~(1<<O),v+=1;var b=32-F0(r)+O;if(30<b){var P=O-O%5;b=(h&(1<<P)-1).toString(32),h>>=P,O-=P,f1=1<<32-F0(r)+O|v<<O|h,c1=b+g}else f1=1<<b|v<<O|h,c1=g}function yb(g){Lw(),g.return!==null&&(k1(g,1),v9(g,1,0))}function jb(g){for(;g===aO;)aO=Oh[--bh],Oh[bh]=null,V6=Oh[--bh],Oh[bh]=null;for(;g===i5;)i5=Lv[--uv],Lv[uv]=null,c1=Lv[--uv],Lv[uv]=null,f1=Lv[--uv],Lv[uv]=null}function w9(){return Lw(),i5!==null?{id:f1,overflow:c1}:null}function h9(g,r){Lw(),Lv[uv++]=f1,Lv[uv++]=c1,Lv[uv++]=i5,f1=r.id,c1=r.overflow,i5=g}function Lw(){fg||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function T5(g,r){if(g.return===null){if(Ov===null)Ov={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:r};else{if(Ov.fiber!==g)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Ov.distanceFromLeaf>r&&(Ov.distanceFromLeaf=r)}return Ov}var v=T5(g.return,r+1).children;if(0<v.length&&v[v.length-1].fiber===g)return v=v[v.length-1],v.distanceFromLeaf>r&&(v.distanceFromLeaf=r),v;return r={fiber:g,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:r},v.push(r),r}function H9(){fg&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function yH(g,r){L1||(g=T5(g,0),g.serverProps=null,r!==null&&(r=DR(r),g.serverTail.push(r)))}function uw(g){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,v="",h=Ov;throw h!==null&&(Ov=null,v=Ib(h)),sh(d0(Error("Hydration failed because the server rendered "+(r?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+v),g)),AP}function O9(g){var{stateNode:r,type:v,memoizedProps:h}=g;switch(r[G0]=g,r[B0]=h,qq(v,h),v){case"dialog":cg("cancel",r),cg("close",r);break;case"iframe":case"object":case"embed":cg("load",r);break;case"video":case"audio":for(v=0;v<G8.length;v++)cg(G8[v],r);break;case"source":cg("error",r);break;case"img":case"image":case"link":cg("error",r),cg("load",r);break;case"details":cg("toggle",r);break;case"input":Uw("input",h),cg("invalid",r),MM(r,h),GM(r,h.value,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name,!0);break;case"option":RM(r,h);break;case"select":Uw("select",h),cg("invalid",r),YM(r,h);break;case"textarea":Uw("textarea",h),cg("invalid",r),JM(r,h),KM(r,h.value,h.defaultValue,h.children)}v=h.children,typeof v!=="string"&&typeof v!=="number"&&typeof v!=="bigint"||r.textContent===""+v||h.suppressHydrationWarning===!0||LR(r.textContent,v)?(h.popover!=null&&(cg("beforetoggle",r),cg("toggle",r)),h.onScroll!=null&&cg("scroll",r),h.onScrollEnd!=null&&cg("scrollend",r),h.onClick!=null&&(r.onclick=m1),r=!0):r=!1,r||uw(g,!0)}function b9(g){for(R0=g.return;R0;)switch(R0.tag){case 5:case 31:case 13:Fv=!1;return;case 27:case 3:Fv=!0;return;default:R0=R0.return}}function l4(g){if(g!==R0)return!1;if(!fg)return b9(g),fg=!0,!1;var r=g.tag,v;if(v=r!==3&&r!==27){if(v=r===5)v=g.type,v=!(v!=="form"&&v!=="button")||Rq(g.type,g.memoizedProps);v=!v}if(v&&zr){for(v=zr;v;){var h=T5(g,0),O=DR(v);h.serverTail.push(O),v=O.type==="Suspense"?Qq(v):vv(v.nextSibling)}uw(g)}if(b9(g),r===13){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zr=Qq(g)}else if(r===31){if(g=g.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");zr=Qq(g)}else r===27?(r=zr,Sw(g.type)?(g=dP,dP=null,zr=g):zr=r):zr=R0?vv(g.stateNode.nextSibling):null;return!0}function C5(){zr=R0=null,L1=fg=!1}function ib(){var g=jw;return g!==null&&(T0===null?T0=g:T0.push.apply(T0,g),jw=null),g}function sh(g){jw===null?jw=[g]:jw.push(g)}function eb(){var g=Ov;if(g!==null){Ov=null;for(var r=Ib(g);0<g.children.length;)g=g.children[0];bg(g.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",r)})}}function jH(){Ah=sO=null,qh=!1}function Fw(g,r,v){Kg(qP,r._currentValue,g),r._currentValue=v,Kg(PP,r._currentRenderer,g),r._currentRenderer!==void 0&&r._currentRenderer!==null&&r._currentRenderer!==OY&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),r._currentRenderer=OY}function V1(g,r){g._currentValue=qP.current;var v=PP.current;Jg(PP,r),g._currentRenderer=v,Jg(qP,r)}function nb(g,r,v){for(;g!==null;){var h=g.alternate;if((g.childLanes&r)!==r?(g.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),g===v)break;g=g.return}g!==v&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function fb(g,r,v,h){var O=g.child;O!==null&&(O.return=g);for(;O!==null;){var b=O.dependencies;if(b!==null){var P=O.child;b=b.firstContext;g:for(;b!==null;){var M=b;b=O;for(var Y=0;Y<r.length;Y++)if(M.context===r[Y]){b.lanes|=v,M=b.alternate,M!==null&&(M.lanes|=v),nb(b.return,v,g),h||(P=null);break g}b=M.next}}else if(O.tag===18){if(P=O.return,P===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");P.lanes|=v,b=P.alternate,b!==null&&(b.lanes|=v),nb(P,v,g),P=null}else P=O.child;if(P!==null)P.return=O;else for(P=O;P!==null;){if(P===g){P=null;break}if(O=P.sibling,O!==null){O.return=P.return,P=O;break}P=P.return}O=P}}function T4(g,r,v,h){g=null;for(var O=r,b=!1;O!==null;){if(!b){if((O.flags&524288)!==0)b=!0;else if((O.flags&262144)!==0)break}if(O.tag===10){var P=O.alternate;if(P===null)throw Error("Should have a current fiber. This is a bug in React.");if(P=P.memoizedProps,P!==null){var M=O.type;I0(O.pendingProps.value,P.value)||(g!==null?g.push(M):g=[M])}}else if(O===kO.current){if(P=O.alternate,P===null)throw Error("Should have a current fiber. This is a bug in React.");P.memoizedState.memoizedState!==O.memoizedState.memoizedState&&(g!==null?g.push(Q8):g=[Q8])}O=O.return}g!==null&&fb(r,g,v,h),r.flags|=262144}function iH(g){for(g=g.firstContext;g!==null;){if(!I0(g.context._currentValue,g.memoizedValue))return!0;g=g.next}return!1}function S5(g){sO=g,Ah=null,g=g.dependencies,g!==null&&(g.firstContext=null)}function Ur(g){return qh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),A9(sO,g)}function eH(g,r){return sO===null&&S5(g),A9(g,r)}function A9(g,r){var v=r._currentValue;if(r={context:r,memoizedValue:v,next:null},Ah===null){if(g===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Ah=r,g.dependencies={lanes:0,firstContext:r,_debugThenableState:null},g.flags|=524288}else Ah=Ah.next=r;return v}function cb(){return{controller:new zu,data:new Map,refCount:0}}function x5(g){g.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),g.refCount++}function g6(g){g.refCount--,0>g.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),g.refCount===0&&$u(Uu,function(){g.controller.abort()})}function w1(g,r,v){if((g&127)!==0)0>u1&&(u1=er(),_6=g2(r),WP=r,v!=null&&(MP=D(v)),(ag&(g0|qv))!==O0&&(Nr=!0,nw=E6),g=$6(),r=z6(),g!==Ph||r!==y6?Ph=-1.1:r!==null&&(nw=E6),n5=g,y6=r);else if((g&4194048)!==0&&0>Bv&&(Bv=er(),j6=g2(r),bY=r,v!=null&&(AY=D(v)),0>d1)){if(g=$6(),r=z6(),g!==cw||r!==f5)cw=-1.1;fw=g,f5=r}}function _$(g){if(0>u1){u1=er(),_6=g._debugTask!=null?g._debugTask:null,(ag&(g0|qv))!==O0&&(nw=E6);var r=$6(),v=z6();r!==Ph||v!==y6?Ph=-1.1:v!==null&&(nw=E6),n5=r,y6=v}if(0>Bv&&(Bv=er(),j6=g._debugTask!=null?g._debugTask:null,0>d1)){if(g=$6(),r=z6(),g!==cw||r!==f5)cw=-1.1;fw=g,f5=r}}function E1(){var g=e5;return e5=0,g}function nH(g){var r=e5;return e5=g,r}function r6(g){var r=e5;return e5+=g,r}function fH(){ug=Ug=-1.1}function a0(){var g=Ug;return Ug=-1.1,g}function s0(g){0<=g&&(Ug=g)}function h1(){var g=Fr;return Fr=-0,g}function H1(g){0<=g&&(Fr=g)}function O1(){var g=Lr;return Lr=null,g}function b1(){var g=Nr;return Nr=!1,g}function tb(g){N0=er(),0>g.actualStartTime&&(g.actualStartTime=N0)}function pb(g){if(0<=N0){var r=er()-N0;g.actualDuration+=r,g.selfBaseDuration=r,N0=-1}}function q9(g){if(0<=N0){var r=er()-N0;g.actualDuration+=r,N0=-1}}function A1(){if(0<=N0){var g=er(),r=g-N0;N0=-1,e5+=r,Fr+=r,ug=g}}function P9(g){Lr===null&&(Lr=[]),Lr.push(g),p1===null&&(p1=[]),p1.push(g)}function q1(){N0=er(),0>Ug&&(Ug=N0)}function v6(g){for(var r=g.child;r;)g.actualDuration+=r.actualDuration,r=r.sibling}function y$(g,r){if(e6===null){var v=e6=[];RP=0,c5=Hq(),Wh={status:"pending",value:void 0,then:function(h){v.push(h)}}}return RP++,r.then(W9,W9),r}function W9(){if(--RP===0&&(-1<Bv||(d1=-1.1),e6!==null)){Wh!==null&&(Wh.status="fulfilled");var g=e6;e6=null,c5=0,Wh=null;for(var r=0;r<g.length;r++)(0,g[r])()}}function j$(g,r){var v=[],h={status:"pending",value:null,reason:null,then:function(O){v.push(O)}};return g.then(function(){h.status="fulfilled",h.value=r;for(var O=0;O<v.length;O++)(0,v[O])(r)},function(O){h.status="rejected",h.reason=O;for(O=0;O<v.length;O++)(0,v[O])(void 0)}),h}function db(){var g=t5.current;return g!==null?g:Xr.pooledCache}function cH(g,r){r===null?Kg(t5,t5.current,g):Kg(t5,r.pool,g)}function M9(){var g=db();return g===null?null:{parent:ir._currentValue,pool:g}}function G9(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function R9(g){return g=g.status,g==="fulfilled"||g==="rejected"}function X9(g,r,v){m.actQueue!==null&&(m.didUsePromise=!0);var h=g.thenables;if(v=h[v],v===void 0?h.push(r):v!==r&&(g.didWarnAboutUncachedPromise||(g.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),r.then(m1,m1),r=v),r._debugInfo===void 0){g=performance.now(),h=r.displayName;var O={name:typeof h==="string"?h:"Promise",start:g,end:g,value:r};r._debugInfo=[{awaited:O}],r.status!=="fulfilled"&&r.status!=="rejected"&&(g=function(){O.end=performance.now()},r.then(g,g))}switch(r.status){case"fulfilled":return r.value;case"rejected":throw g=r.reason,J9(g),g;default:if(typeof r.status==="string")r.then(m1,m1);else{if(g=Xr,g!==null&&100<g.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");g=r,g.status="pending",g.then(function(b){if(r.status==="pending"){var P=r;P.status="fulfilled",P.value=b}},function(b){if(r.status==="pending"){var P=r;P.status="rejected",P.reason=b}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw g=r.reason,J9(g),g}throw d5=r,a6=!0,Mh}}function Bw(g){try{return Bu(g)}catch(r){if(r!==null&&typeof r==="object"&&typeof r.then==="function")throw d5=r,a6=!0,Mh;throw r}}function Y9(){if(d5===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var g=d5;return d5=null,a6=!1,g}function J9(g){if(g===Mh||g===A2)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function P0(g){var r=mg;return g!=null&&(mg=r===null?g:r.concat(g)),r}function ab(){var g=mg;if(g!=null){for(var r=g.length-1;0<=r;r--)if(g[r].name!=null){var v=g[r].debugTask;if(v!=null)return v}}return null}function tH(g,r,v){for(var h=Object.keys(g.props),O=0;O<h.length;O++){var b=h[O];if(b!=="children"&&b!=="key"){r===null&&(r=_H(g,v.mode,0),r._debugInfo=mg,r.return=v),bg(r,function(P){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",P)},b);break}}}function pH(g){var r=s6;return s6+=1,Gh===null&&(Gh=G9()),X9(Gh,g,r)}function w6(g,r){r=r.props.ref,g.ref=r!==void 0?r:null}function Q9(g,r){if(r.$$typeof===HL)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw g=Object.prototype.toString.call(r),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}function dH(g,r){var v=ab();v!==null?v.run(Q9.bind(null,g,r)):Q9(g,r)}function K9(g,r){var v=D(g)||"Component";IY[v]||(IY[v]=!0,r=r.displayName||r.name||"Component",g.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,r,r,r):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,r,r,v,r,v))}function aH(g,r){var v=ab();v!==null?v.run(K9.bind(null,g,r)):K9(g,r)}function z9(g,r){var v=D(g)||"Component";NY[v]||(NY[v]=!0,r=String(r),g.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,r):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,v,r,v))}function sH(g,r){var v=ab();v!==null?v.run(z9.bind(null,g,r)):z9(g,r)}function $9(g){function r(u,B){if(g){var I=u.deletions;I===null?(u.deletions=[B],u.flags|=16):I.push(B)}}function v(u,B){if(!g)return null;for(;B!==null;)r(u,B),B=B.sibling;return null}function h(u){for(var B=new Map;u!==null;)u.key!==null?B.set(u.key,u):B.set(u.index,u),u=u.sibling;return B}function O(u,B){return u=D1(u,B),u.index=0,u.sibling=null,u}function b(u,B,I){if(u.index=I,!g)return u.flags|=1048576,B;if(I=u.alternate,I!==null)return I=I.index,I<B?(u.flags|=67108866,B):I;return u.flags|=67108866,B}function P(u){return g&&u.alternate===null&&(u.flags|=67108866),u}function M(u,B,I,k){if(B===null||B.tag!==6)return B=Eb(I,u.mode,k),B.return=u,B._debugOwner=u,B._debugTask=u._debugTask,B._debugInfo=mg,B;return B=O(B,I),B.return=u,B._debugInfo=mg,B}function Y(u,B,I,k){var Hg=I.type;if(Hg===f4)return B=N(u,B,I.props.children,k,I.key),tH(I,B,u),B;if(B!==null&&(B.elementType===Hg||dM(B,I)||typeof Hg==="object"&&Hg!==null&&Hg.$$typeof===wv&&Bw(Hg)===B.type))return B=O(B,I.props),w6(B,I),B.return=u,B._debugOwner=I._owner,B._debugInfo=mg,B;return B=_H(I,u.mode,k),w6(B,I),B.return=u,B._debugInfo=mg,B}function Q(u,B,I,k){if(B===null||B.tag!==4||B.stateNode.containerInfo!==I.containerInfo||B.stateNode.implementation!==I.implementation)return B=_b(I,u.mode,k),B.return=u,B._debugInfo=mg,B;return B=O(B,I.children||[]),B.return=u,B._debugInfo=mg,B}function N(u,B,I,k,Hg){if(B===null||B.tag!==7)return B=l5(I,u.mode,k,Hg),B.return=u,B._debugOwner=u,B._debugTask=u._debugTask,B._debugInfo=mg,B;return B=O(B,I),B.return=u,B._debugInfo=mg,B}function Z(u,B,I){if(typeof B==="string"&&B!==""||typeof B==="number"||typeof B==="bigint")return B=Eb(""+B,u.mode,I),B.return=u,B._debugOwner=u,B._debugTask=u._debugTask,B._debugInfo=mg,B;if(typeof B==="object"&&B!==null){switch(B.$$typeof){case Y1:return I=_H(B,u.mode,I),w6(I,B),I.return=u,u=P0(B._debugInfo),I._debugInfo=mg,mg=u,I;case n4:return B=_b(B,u.mode,I),B.return=u,B._debugInfo=mg,B;case wv:var k=P0(B._debugInfo);return B=Bw(B),u=Z(u,B,I),mg=k,u}if(ar(B)||vg(B))return I=l5(B,u.mode,I,null),I.return=u,I._debugOwner=u,I._debugTask=u._debugTask,u=P0(B._debugInfo),I._debugInfo=mg,mg=u,I;if(typeof B.then==="function")return k=P0(B._debugInfo),u=Z(u,pH(B),I),mg=k,u;if(B.$$typeof===J1)return Z(u,eH(u,B),I);dH(u,B)}return typeof B==="function"&&aH(u,B),typeof B==="symbol"&&sH(u,B),null}function F(u,B,I,k){var Hg=B!==null?B.key:null;if(typeof I==="string"&&I!==""||typeof I==="number"||typeof I==="bigint")return Hg!==null?null:M(u,B,""+I,k);if(typeof I==="object"&&I!==null){switch(I.$$typeof){case Y1:return I.key===Hg?(Hg=P0(I._debugInfo),u=Y(u,B,I,k),mg=Hg,u):null;case n4:return I.key===Hg?Q(u,B,I,k):null;case wv:return Hg=P0(I._debugInfo),I=Bw(I),u=F(u,B,I,k),mg=Hg,u}if(ar(I)||vg(I)){if(Hg!==null)return null;return Hg=P0(I._debugInfo),u=N(u,B,I,k,null),mg=Hg,u}if(typeof I.then==="function")return Hg=P0(I._debugInfo),u=F(u,B,pH(I),k),mg=Hg,u;if(I.$$typeof===J1)return F(u,B,eH(u,I),k);dH(u,I)}return typeof I==="function"&&aH(u,I),typeof I==="symbol"&&sH(u,I),null}function S(u,B,I,k,Hg){if(typeof k==="string"&&k!==""||typeof k==="number"||typeof k==="bigint")return u=u.get(I)||null,M(B,u,""+k,Hg);if(typeof k==="object"&&k!==null){switch(k.$$typeof){case Y1:return I=u.get(k.key===null?I:k.key)||null,u=P0(k._debugInfo),B=Y(B,I,k,Hg),mg=u,B;case n4:return u=u.get(k.key===null?I:k.key)||null,Q(B,u,k,Hg);case wv:var Ig=P0(k._debugInfo);return k=Bw(k),B=S(u,B,I,k,Hg),mg=Ig,B}if(ar(k)||vg(k))return I=u.get(I)||null,u=P0(k._debugInfo),B=N(B,I,k,Hg,null),mg=u,B;if(typeof k.then==="function")return Ig=P0(k._debugInfo),B=S(u,B,I,pH(k),Hg),mg=Ig,B;if(k.$$typeof===J1)return S(u,B,I,eH(B,k),Hg);dH(B,k)}return typeof k==="function"&&aH(B,k),typeof k==="symbol"&&sH(B,k),null}function gg(u,B,I,k){if(typeof I!=="object"||I===null)return k;switch(I.$$typeof){case Y1:case n4:$(u,B,I);var Hg=I.key;if(typeof Hg!=="string")break;if(k===null){k=new Set,k.add(Hg);break}if(!k.has(Hg)){k.add(Hg);break}bg(B,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",Hg)});break;case wv:I=Bw(I),gg(u,B,I,k)}return k}function qg(u,B,I,k){for(var Hg=null,Ig=null,zg=null,Yg=B,Cg=B=0,$r=null;Yg!==null&&Cg<I.length;Cg++){Yg.index>Cg?($r=Yg,Yg=null):$r=Yg.sibling;var Vr=F(u,Yg,I[Cg],k);if(Vr===null){Yg===null&&(Yg=$r);break}Hg=gg(u,Vr,I[Cg],Hg),g&&Yg&&Vr.alternate===null&&r(u,Yg),B=b(Vr,B,Cg),zg===null?Ig=Vr:zg.sibling=Vr,zg=Vr,Yg=$r}if(Cg===I.length)return v(u,Yg),fg&&k1(u,Cg),Ig;if(Yg===null){for(;Cg<I.length;Cg++)Yg=Z(u,I[Cg],k),Yg!==null&&(Hg=gg(u,Yg,I[Cg],Hg),B=b(Yg,B,Cg),zg===null?Ig=Yg:zg.sibling=Yg,zg=Yg);return fg&&k1(u,Cg),Ig}for(Yg=h(Yg);Cg<I.length;Cg++)$r=S(Yg,u,Cg,I[Cg],k),$r!==null&&(Hg=gg(u,$r,I[Cg],Hg),g&&$r.alternate!==null&&Yg.delete($r.key===null?Cg:$r.key),B=b($r,B,Cg),zg===null?Ig=$r:zg.sibling=$r,zg=$r);return g&&Yg.forEach(function(Ow){return r(u,Ow)}),fg&&k1(u,Cg),Ig}function Qr(u,B,I,k){if(I==null)throw Error("An iterable object provided no iterator.");for(var Hg=null,Ig=null,zg=B,Yg=B=0,Cg=null,$r=null,Vr=I.next();zg!==null&&!Vr.done;Yg++,Vr=I.next()){zg.index>Yg?(Cg=zg,zg=null):Cg=zg.sibling;var Ow=F(u,zg,Vr.value,k);if(Ow===null){zg===null&&(zg=Cg);break}$r=gg(u,Ow,Vr.value,$r),g&&zg&&Ow.alternate===null&&r(u,zg),B=b(Ow,B,Yg),Ig===null?Hg=Ow:Ig.sibling=Ow,Ig=Ow,zg=Cg}if(Vr.done)return v(u,zg),fg&&k1(u,Yg),Hg;if(zg===null){for(;!Vr.done;Yg++,Vr=I.next())zg=Z(u,Vr.value,k),zg!==null&&($r=gg(u,zg,Vr.value,$r),B=b(zg,B,Yg),Ig===null?Hg=zg:Ig.sibling=zg,Ig=zg);return fg&&k1(u,Yg),Hg}for(zg=h(zg);!Vr.done;Yg++,Vr=I.next())Cg=S(zg,u,Yg,Vr.value,k),Cg!==null&&($r=gg(u,Cg,Vr.value,$r),g&&Cg.alternate!==null&&zg.delete(Cg.key===null?Yg:Cg.key),B=b(Cg,B,Yg),Ig===null?Hg=Cg:Ig.sibling=Cg,Ig=Cg);return g&&zg.forEach(function(pu){return r(u,pu)}),fg&&k1(u,Yg),Hg}function tg(u,B,I,k){if(typeof I==="object"&&I!==null&&I.type===f4&&I.key===null&&(tH(I,null,u),I=I.props.children),typeof I==="object"&&I!==null){switch(I.$$typeof){case Y1:var Hg=P0(I._debugInfo);g:{for(var Ig=I.key;B!==null;){if(B.key===Ig){if(Ig=I.type,Ig===f4){if(B.tag===7){v(u,B.sibling),k=O(B,I.props.children),k.return=u,k._debugOwner=I._owner,k._debugInfo=mg,tH(I,k,u),u=k;break g}}else if(B.elementType===Ig||dM(B,I)||typeof Ig==="object"&&Ig!==null&&Ig.$$typeof===wv&&Bw(Ig)===B.type){v(u,B.sibling),k=O(B,I.props),w6(k,I),k.return=u,k._debugOwner=I._owner,k._debugInfo=mg,u=k;break g}v(u,B);break}else r(u,B);B=B.sibling}I.type===f4?(k=l5(I.props.children,u.mode,k,I.key),k.return=u,k._debugOwner=u,k._debugTask=u._debugTask,k._debugInfo=mg,tH(I,k,u),u=k):(k=_H(I,u.mode,k),w6(k,I),k.return=u,k._debugInfo=mg,u=k)}return u=P(u),mg=Hg,u;case n4:g:{Hg=I;for(I=Hg.key;B!==null;){if(B.key===I)if(B.tag===4&&B.stateNode.containerInfo===Hg.containerInfo&&B.stateNode.implementation===Hg.implementation){v(u,B.sibling),k=O(B,Hg.children||[]),k.return=u,u=k;break g}else{v(u,B);break}else r(u,B);B=B.sibling}k=_b(Hg,u.mode,k),k.return=u,u=k}return P(u);case wv:return Hg=P0(I._debugInfo),I=Bw(I),u=tg(u,B,I,k),mg=Hg,u}if(ar(I))return Hg=P0(I._debugInfo),u=qg(u,B,I,k),mg=Hg,u;if(vg(I)){if(Hg=P0(I._debugInfo),Ig=vg(I),typeof Ig!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var zg=Ig.call(I);if(zg===I){if(u.tag!==0||Object.prototype.toString.call(u.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(zg)!=="[object Generator]")BY||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),BY=!0}else I.entries!==Ig||QP||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),QP=!0);return u=Qr(u,B,zg,k),mg=Hg,u}if(typeof I.then==="function")return Hg=P0(I._debugInfo),u=tg(u,B,pH(I),k),mg=Hg,u;if(I.$$typeof===J1)return tg(u,B,eH(u,I),k);dH(u,I)}if(typeof I==="string"&&I!==""||typeof I==="number"||typeof I==="bigint")return Hg=""+I,B!==null&&B.tag===6?(v(u,B.sibling),k=O(B,Hg),k.return=u,u=k):(v(u,B),k=Eb(Hg,u.mode,k),k.return=u,k._debugOwner=u,k._debugTask=u._debugTask,k._debugInfo=mg,u=k),P(u);return typeof I==="function"&&aH(u,I),typeof I==="symbol"&&sH(u,I),v(u,B)}return function(u,B,I,k){var Hg=mg;mg=null;try{s6=0;var Ig=tg(u,B,I,k);return Gh=null,Ig}catch($r){if($r===Mh||$r===A2)throw $r;var zg=L(29,$r,null,u.mode);zg.lanes=k,zg.return=u;var Yg=zg._debugInfo=mg;if(zg._debugOwner=u._debugOwner,zg._debugTask=u._debugTask,Yg!=null){for(var Cg=Yg.length-1;0<=Cg;Cg--)if(typeof Yg[Cg].stack==="string"){zg._debugOwner=Yg[Cg],zg._debugTask=Yg[Cg].debugTask;break}}return zg}finally{mg=Hg}}}function U9(g,r){var v=ar(g);return g=!v&&typeof vg(g)==="function",v||g?(v=v?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",v,r,v),!1):!0}function sb(g){g.updateQueue={baseState:g.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gA(g,r){g=g.updateQueue,r.updateQueue===g&&(r.updateQueue={baseState:g.baseState,firstBaseUpdate:g.firstBaseUpdate,lastBaseUpdate:g.lastBaseUpdate,shared:g.shared,callbacks:null})}function ow(g){return{lane:g,tag:lY,payload:null,callback:null,next:null}}function Iw(g,r,v){var h=g.updateQueue;if(h===null)return null;if(h=h.shared,zP===h&&!SY){var O=D(g);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,O),SY=!0}if((ag&g0)!==O0)return O=h.pending,O===null?r.next=r:(r.next=O.next,O.next=r),h.pending=r,r=EH(g),pM(g,null,v),r;return VH(g,h,r,v),EH(g)}function h6(g,r,v){if(r=r.updateQueue,r!==null&&(r=r.shared,(v&4194048)!==0)){var h=r.lanes;h&=g.pendingLanes,v|=h,r.lanes=v,u5(g,v)}}function gO(g,r){var{updateQueue:v,alternate:h}=g;if(h!==null&&(h=h.updateQueue,v===h)){var O=null,b=null;if(v=v.firstBaseUpdate,v!==null){do{var P={lane:v.lane,tag:v.tag,payload:v.payload,callback:null,next:null};b===null?O=b=P:b=b.next=P,v=v.next}while(v!==null);b===null?O=b=r:b=b.next=r}else O=b=r;v={baseState:h.baseState,firstBaseUpdate:O,lastBaseUpdate:b,shared:h.shared,callbacks:h.callbacks},g.updateQueue=v;return}g=v.lastBaseUpdate,g===null?v.firstBaseUpdate=r:g.next=r,v.lastBaseUpdate=r}function H6(){if($P){var g=Wh;if(g!==null)throw g}}function O6(g,r,v,h){$P=!1;var O=g.updateQueue;tw=!1,zP=O.shared;var{firstBaseUpdate:b,lastBaseUpdate:P}=O,M=O.shared.pending;if(M!==null){O.shared.pending=null;var Y=M,Q=Y.next;Y.next=null,P===null?b=Q:P.next=Q,P=Y;var N=g.alternate;N!==null&&(N=N.updateQueue,M=N.lastBaseUpdate,M!==P&&(M===null?N.firstBaseUpdate=Q:M.next=Q,N.lastBaseUpdate=Y))}if(b!==null){var Z=O.baseState;P=0,N=Q=Y=null,M=b;do{var F=M.lane&-536870913,S=F!==M.lane;if(S?(Dg&F)===F:(h&F)===F){F!==0&&F===c5&&($P=!0),N!==null&&(N=N.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});g:{F=g;var gg=M,qg=r,Qr=v;switch(gg.tag){case TY:if(gg=gg.payload,typeof gg==="function"){qh=!0;var tg=gg.call(Qr,Z,qg);if(F.mode&U0){Yr(!0);try{gg.call(Qr,Z,qg)}finally{Yr(!1)}}qh=!1,Z=tg;break g}Z=gg;break g;case KP:F.flags=F.flags&-65537|128;case lY:if(tg=gg.payload,typeof tg==="function"){if(qh=!0,gg=tg.call(Qr,Z,qg),F.mode&U0){Yr(!0);try{tg.call(Qr,Z,qg)}finally{Yr(!1)}}qh=!1}else gg=tg;if(gg===null||gg===void 0)break g;Z=yg({},Z,gg);break g;case CY:tw=!0}}F=M.callback,F!==null&&(g.flags|=64,S&&(g.flags|=8192),S=O.callbacks,S===null?O.callbacks=[F]:S.push(F))}else S={lane:F,tag:M.tag,payload:M.payload,callback:M.callback,next:null},N===null?(Q=N=S,Y=Z):N=N.next=S,P|=F;if(M=M.next,M===null)if(M=O.shared.pending,M===null)break;else S=M,M=S.next,S.next=null,O.lastBaseUpdate=S,O.shared.pending=null}while(1);N===null&&(Y=Z),O.baseState=Y,O.firstBaseUpdate=Q,O.lastBaseUpdate=N,b===null&&(O.shared.lanes=0),aw|=P,g.lanes=P,g.memoizedState=Z}zP=null}function L9(g,r){if(typeof g!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+g);g.call(r)}function i$(g,r){var v=g.shared.hiddenCallbacks;if(v!==null)for(g.shared.hiddenCallbacks=null,g=0;g<v.length;g++)L9(v[g],r)}function u9(g,r){var v=g.callbacks;if(v!==null)for(g.callbacks=null,g=0;g<v.length;g++)L9(v[g],r)}function F9(g,r){var v=o1;Kg(P2,v,g),Kg(Rh,r,g),o1=v|r.baseLanes}function rA(g){Kg(P2,o1,g),Kg(Rh,Rh.current,g)}function vA(g){o1=P2.current,Jg(Rh,g),Jg(P2,g)}function Nw(g){var r=g.alternate;Kg(kr,kr.current&Xh,g),Kg(bv,g,g),ov===null&&(r===null||Rh.current!==null?ov=g:r.memoizedState!==null&&(ov=g))}function wA(g){Kg(kr,kr.current,g),Kg(bv,g,g),ov===null&&(ov=g)}function B9(g){g.tag===22?(Kg(kr,kr.current,g),Kg(bv,g,g),ov===null&&(ov=g)):Zw(g)}function Zw(g){Kg(kr,kr.current,g),Kg(bv,bv.current,g)}function gv(g){Jg(bv,g),ov===g&&(ov=null),Jg(kr,g)}function rO(g){for(var r=g;r!==null;){if(r.tag===13){var v=r.memoizedState;if(v!==null&&(v=v.dehydrated,v===null||Yq(v)||Jq(v)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break;for(;r.sibling===null;){if(r.return===null||r.return===g)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function _g(){var g=x;Nv===null?Nv=[g]:Nv.push(g)}function e(){var g=x;if(Nv!==null&&(rw++,Nv[rw]!==g)){var r=D(og);if(!xY.has(r)&&(xY.add(r),Nv!==null)){for(var v="",h=0;h<=rw;h++){var O=Nv[h],b=h===rw?g:O;for(O=h+1+". "+O;30>O.length;)O+=" ";O+=b+`
`,v+=O}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,r,v)}}}function C4(g){g===void 0||g===null||ar(g)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",x,typeof g)}function vO(){var g=D(og);DY.has(g)||(DY.add(g),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",g))}function xr(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function hA(g,r){if(v8)return!1;if(r===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",x),!1;g.length!==r.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,x,"["+r.join(", ")+"]","["+g.join(", ")+"]");for(var v=0;v<r.length&&v<g.length;v++)if(!I0(g[v],r[v]))return!1;return!0}function HA(g,r,v,h,O,b){if(s1=b,og=r,Nv=g!==null?g._debugHookTypes:null,rw=-1,v8=g!==null&&g.type!==r.type,Object.prototype.toString.call(v)==="[object AsyncFunction]"||Object.prototype.toString.call(v)==="[object AsyncGeneratorFunction]")b=D(og),UP.has(b)||(UP.add(b),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",b===null?"An unknown Component":"<"+b+">"));r.memoizedState=null,r.updateQueue=null,r.lanes=0,m.H=g!==null&&g.memoizedState!==null?uP:Nv!==null?kY:LP,s5=b=(r.mode&U0)!==Bg;var P=XP(v,h,O);if(s5=!1,Jh&&(P=OA(r,v,h,O)),b){Yr(!0);try{P=OA(r,v,h,O)}finally{Yr(!1)}}return o9(g,r),P}function o9(g,r){r._debugHookTypes=Nv,r.dependencies===null?gw!==null&&(r.dependencies={lanes:0,firstContext:null,_debugThenableState:gw}):r.dependencies._debugThenableState=gw,m.H=w8;var v=Rr!==null&&Rr.next!==null;if(s1=0,Nv=x=nr=Rr=og=null,rw=-1,g!==null&&(g.flags&65011712)!==(r.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),M2=!1,r8=0,gw=null,v)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");g===null||fr||(g=g.dependencies,g!==null&&iH(g)&&(fr=!0)),a6?(a6=!1,g=!0):g=!1,g&&(r=D(r)||"Unknown",mY.has(r)||UP.has(r)||(mY.add(r),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function OA(g,r,v,h){og=g;var O=0;do{if(Jh&&(gw=null),r8=0,Jh=!1,O>=Iu)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(O+=1,v8=!1,nr=Rr=null,g.updateQueue!=null){var b=g.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}rw=-1,m.H=VY,b=XP(r,v,h)}while(Jh);return b}function e$(){var g=m.H,r=g.useState()[0];return r=typeof r.then==="function"?b6(r):r,g=g.useState()[0],(Rr!==null?Rr.memoizedState:null)!==g&&(og.flags|=1024),r}function bA(){var g=G2!==0;return G2=0,g}function AA(g,r,v){r.updateQueue=g.updateQueue,r.flags=(r.mode&kv)!==Bg?r.flags&-402655237:r.flags&-2053,g.lanes&=~v}function qA(g){if(M2){for(g=g.memoizedState;g!==null;){var r=g.queue;r!==null&&(r.pending=null),g=g.next}M2=!1}s1=0,Nv=nr=Rr=og=null,rw=-1,x=null,Jh=!1,r8=G2=0,gw=null}function u0(){var g={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nr===null?og.memoizedState=nr=g:nr=nr.next=g,nr}function Or(){if(Rr===null){var g=og.alternate;g=g!==null?g.memoizedState:null}else g=Rr.next;var r=nr===null?og.memoizedState:nr.next;if(r!==null)nr=r,Rr=g;else{if(g===null){if(og.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Rr=g,g={memoizedState:Rr.memoizedState,baseState:Rr.baseState,baseQueue:Rr.baseQueue,queue:Rr.queue,next:null},nr===null?og.memoizedState=nr=g:nr=nr.next=g}return nr}function wO(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function b6(g){var r=r8;return r8+=1,gw===null&&(gw=G9()),g=X9(gw,g,r),r=og,(nr===null?r.memoizedState:nr.next)===null&&(r=r.alternate,m.H=r!==null&&r.memoizedState!==null?uP:LP),g}function lw(g){if(g!==null&&typeof g==="object"){if(typeof g.then==="function")return b6(g);if(g.$$typeof===J1)return Ur(g)}throw Error("An unsupported type was passed to use(): "+String(g))}function m5(g){var r=null,v=og.updateQueue;if(v!==null&&(r=v.memoCache),r==null){var h=og.alternate;h!==null&&(h=h.updateQueue,h!==null&&(h=h.memoCache,h!=null&&(r={data:h.data.map(function(O){return O.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),v===null&&(v=wO(),og.updateQueue=v),v.memoCache=r,v=r.data[r.index],v===void 0||v8)for(v=r.data[r.index]=Array(g),h=0;h<g;h++)v[h]=OL;else v.length!==g&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",v.length,g);return r.index++,v}function Sv(g,r){return typeof r==="function"?r(g):r}function PA(g,r,v){var h=u0();if(v!==void 0){var O=v(r);if(s5){Yr(!0);try{v(r)}finally{Yr(!1)}}}else O=r;return h.memoizedState=h.baseState=O,g={pending:null,lanes:0,dispatch:null,lastRenderedReducer:g,lastRenderedState:O},h.queue=g,g=g.dispatch=p$.bind(null,og,g),[h.memoizedState,g]}function S4(g){var r=Or();return WA(r,Rr,g)}function WA(g,r,v){var h=g.queue;if(h===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");h.lastRenderedReducer=v;var O=g.baseQueue,b=h.pending;if(b!==null){if(O!==null){var P=O.next;O.next=b.next,b.next=P}r.baseQueue!==O&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),r.baseQueue=O=b,h.pending=null}if(b=g.baseState,O===null)g.memoizedState=b;else{r=O.next;var M=P=null,Y=null,Q=r,N=!1;do{var Z=Q.lane&-536870913;if(Z!==Q.lane?(Dg&Z)===Z:(s1&Z)===Z){var F=Q.revertLane;if(F===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Z===c5&&(N=!0);else if((s1&F)===F){Q=Q.next,F===c5&&(N=!0);continue}else Z={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},Y===null?(M=Y=Z,P=b):Y=Y.next=Z,og.lanes|=F,aw|=F;Z=Q.action,s5&&v(b,Z),b=Q.hasEagerState?Q.eagerState:v(b,Z)}else F={lane:Z,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},Y===null?(M=Y=F,P=b):Y=Y.next=F,og.lanes|=Z,aw|=Z;Q=Q.next}while(Q!==null&&Q!==r);if(Y===null?P=b:Y.next=M,!I0(b,g.memoizedState)&&(fr=!0,N&&(v=Wh,v!==null)))throw v;g.memoizedState=b,g.baseState=P,g.baseQueue=Y,h.lastRenderedState=b}return O===null&&(h.lanes=0),[g.memoizedState,h.dispatch]}function A6(g){var r=Or(),v=r.queue;if(v===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");v.lastRenderedReducer=g;var{dispatch:h,pending:O}=v,b=r.memoizedState;if(O!==null){v.pending=null;var P=O=O.next;do b=g(b,P.action),P=P.next;while(P!==O);I0(b,r.memoizedState)||(fr=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),v.lastRenderedState=b}return[b,h]}function MA(g,r,v){var h=og,O=u0();if(fg){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var b=v();Yh||b===v()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Yh=!0)}else{if(b=r(),Yh||(v=r(),I0(b,v)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Yh=!0)),Xr===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Dg&127)!==0||I9(h,r,b)}return O.memoizedState=b,v={value:b,getSnapshot:r},O.queue=v,bO(Z9.bind(null,h,v,g),[g]),h.flags|=2048,m4(Iv|l0,{destroy:void 0},N9.bind(null,h,v,b,r),null),b}function hO(g,r,v){var h=og,O=Or(),b=fg;if(b){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");v=v()}else if(v=r(),!Yh){var P=r();I0(v,P)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Yh=!0)}if(P=!I0((Rr||O).memoizedState,v))O.memoizedState=v,fr=!0;O=O.queue;var M=Z9.bind(null,h,O,g);if(E0(2048,l0,M,[g]),O.getSnapshot!==r||P||nr!==null&&nr.memoizedState.tag&Iv){if(h.flags|=2048,m4(Iv|l0,{destroy:void 0},N9.bind(null,h,O,v,r),null),Xr===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");b||(s1&127)!==0||I9(h,r,v)}return v}function I9(g,r,v){g.flags|=16384,g={getSnapshot:r,value:v},r=og.updateQueue,r===null?(r=wO(),og.updateQueue=r,r.stores=[g]):(v=r.stores,v===null?r.stores=[g]:v.push(g))}function N9(g,r,v,h){r.value=v,r.getSnapshot=h,l9(r)&&T9(g)}function Z9(g,r,v){return v(function(){l9(r)&&(w1(2,"updateSyncExternalStore()",g),T9(g))})}function l9(g){var r=g.getSnapshot;g=g.value;try{var v=r();return!I0(g,v)}catch(h){return!0}}function T9(g){var r=z0(g,2);r!==null&&Ir(r,g,2)}function GA(g){var r=u0();if(typeof g==="function"){var v=g;if(g=v(),s5){Yr(!0);try{v()}finally{Yr(!1)}}}return r.memoizedState=r.baseState=g,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sv,lastRenderedState:g},r}function RA(g){g=GA(g);var r=g.queue,v=d9.bind(null,og,r);return r.dispatch=v,[g.memoizedState,v]}function XA(g){var r=u0();r.memoizedState=r.baseState=g;var v={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=v,r=NA.bind(null,og,!0,v),v.dispatch=r,[g,r]}function C9(g,r){var v=Or();return S9(v,Rr,g,r)}function S9(g,r,v,h){return g.baseState=v,WA(g,Rr,typeof h==="function"?h:Sv)}function x9(g,r){var v=Or();if(Rr!==null)return S9(v,Rr,g,r);return v.baseState=g,[g,v.queue.dispatch]}function n$(g,r,v,h,O){if(GO(g))throw Error("Cannot update form state while rendering.");if(g=r.action,g!==null){var b={payload:O,action:g,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(P){b.listeners.push(P)}};m.T!==null?v(!0):b.isTransition=!1,h(b),v=r.pending,v===null?(b.next=r.pending=b,m9(r,b)):(b.next=v.next,r.pending=v.next=b)}}function m9(g,r){var{action:v,payload:h}=r,O=g.state;if(r.isTransition){var b=m.T,P={};P._updatedFibers=new Set,m.T=P;try{var M=v(O,h),Y=m.S;Y!==null&&Y(P,M),D9(g,r,M)}catch(Q){YA(g,r,Q)}finally{b!==null&&P.types!==null&&(b.types!==null&&b.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=P.types),m.T=b,b===null&&P._updatedFibers&&(g=P._updatedFibers.size,P._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{P=v(O,h),D9(g,r,P)}catch(Q){YA(g,r,Q)}}function D9(g,r,v){v!==null&&typeof v==="object"&&typeof v.then==="function"?(m.asyncTransitions++,v.then(MO,MO),v.then(function(h){k9(g,r,h)},function(h){return YA(g,r,h)}),r.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):k9(g,r,v)}function k9(g,r,v){r.status="fulfilled",r.value=v,V9(r),g.state=v,r=g.pending,r!==null&&(v=r.next,v===r?g.pending=null:(v=v.next,r.next=v,m9(g,v)))}function YA(g,r,v){var h=g.pending;if(g.pending=null,h!==null){h=h.next;do r.status="rejected",r.reason=v,V9(r),r=r.next;while(r!==h)}g.action=null}function V9(g){g=g.listeners;for(var r=0;r<g.length;r++)(0,g[r])()}function E9(g,r){return r}function x4(g,r){if(fg){var v=Xr.formState;if(v!==null){g:{var h=og;if(fg){if(zr){r:{var O=zr;for(var b=Fv;O.nodeType!==8;){if(!b){O=null;break r}if(O=vv(O.nextSibling),O===null){O=null;break r}}b=O.data,O=b===fP||b===u7?O:null}if(O){zr=vv(O.nextSibling),h=O.data===fP;break g}}uw(h)}h=!1}h&&(r=v[0])}}return v=u0(),v.memoizedState=v.baseState=r,h={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E9,lastRenderedState:r},v.queue=h,v=d9.bind(null,og,h),h.dispatch=v,h=GA(!1),b=NA.bind(null,og,!1,h.queue),h=u0(),O={state:r,dispatch:null,action:g,pending:null},h.queue=O,v=n$.bind(null,og,O,b,v),O.dispatch=v,h.memoizedState=g,[r,v,!1]}function HO(g){var r=Or();return _9(r,Rr,g)}function _9(g,r,v){if(r=WA(g,r,E9)[0],g=S4(Sv)[0],typeof r==="object"&&r!==null&&typeof r.then==="function")try{var h=b6(r)}catch(P){if(P===Mh)throw A2;throw P}else h=r;r=Or();var O=r.queue,b=O.dispatch;return v!==r.memoizedState&&(og.flags|=2048,m4(Iv|l0,{destroy:void 0},f$.bind(null,O,v),null)),[h,b,g]}function f$(g,r){g.action=r}function OO(g){var r=Or(),v=Rr;if(v!==null)return _9(r,v,g);Or(),r=r.memoizedState,v=Or();var h=v.queue.dispatch;return v.memoizedState=g,[r,h,!1]}function m4(g,r,v,h){return g={tag:g,create:v,deps:h,inst:r,next:null},r=og.updateQueue,r===null&&(r=wO(),og.updateQueue=r),v=r.lastEffect,v===null?r.lastEffect=g.next=g:(h=v.next,v.next=g,g.next=h,r.lastEffect=g),g}function JA(g){var r=u0();return g={current:g},r.memoizedState=g}function D5(g,r,v,h){var O=u0();og.flags|=g,O.memoizedState=m4(Iv|r,{destroy:void 0},v,h===void 0?null:h)}function E0(g,r,v,h){var O=Or();h=h===void 0?null:h;var b=O.memoizedState.inst;Rr!==null&&h!==null&&hA(h,Rr.memoizedState.deps)?O.memoizedState=m4(r,b,v,h):(og.flags|=g,O.memoizedState=m4(Iv|r,b,v,h))}function bO(g,r){(og.mode&kv)!==Bg?D5(276826112,l0,g,r):D5(8390656,l0,g,r)}function c$(g){og.flags|=4;var r=og.updateQueue;if(r===null)r=wO(),og.updateQueue=r,r.events=[g];else{var v=r.events;v===null?r.events=[g]:v.push(g)}}function QA(g){var r=u0(),v={impl:g};return r.memoizedState=v,function(){if((ag&g0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return v.impl.apply(void 0,arguments)}}function AO(g){var r=Or().memoizedState;return c$({ref:r,nextImpl:g}),function(){if((ag&g0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return r.impl.apply(void 0,arguments)}}function KA(g,r){var v=4194308;return(og.mode&kv)!==Bg&&(v|=134217728),D5(v,Av,g,r)}function y9(g,r){if(typeof r==="function"){g=g();var v=r(g);return function(){typeof v==="function"?v():r(null)}}if(r!==null&&r!==void 0)return r.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(r).join(", ")+"}"),g=g(),r.current=g,function(){r.current=null}}function zA(g,r,v){typeof r!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",r!==null?typeof r:"null"),v=v!==null&&v!==void 0?v.concat([g]):null;var h=4194308;(og.mode&kv)!==Bg&&(h|=134217728),D5(h,Av,y9.bind(null,r,g),v)}function qO(g,r,v){typeof r!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",r!==null?typeof r:"null"),v=v!==null&&v!==void 0?v.concat([g]):null,E0(4,Av,y9.bind(null,r,g),v)}function $A(g,r){return u0().memoizedState=[g,r===void 0?null:r],g}function PO(g,r){var v=Or();r=r===void 0?null:r;var h=v.memoizedState;if(r!==null&&hA(r,h[1]))return h[0];return v.memoizedState=[g,r],g}function UA(g,r){var v=u0();r=r===void 0?null:r;var h=g();if(s5){Yr(!0);try{g()}finally{Yr(!1)}}return v.memoizedState=[h,r],h}function WO(g,r){var v=Or();r=r===void 0?null:r;var h=v.memoizedState;if(r!==null&&hA(r,h[1]))return h[0];if(h=g(),s5){Yr(!0);try{g()}finally{Yr(!1)}}return v.memoizedState=[h,r],h}function LA(g,r){var v=u0();return uA(v,g,r)}function j9(g,r){var v=Or();return e9(v,Rr.memoizedState,g,r)}function i9(g,r){var v=Or();return Rr===null?uA(v,g,r):e9(v,Rr.memoizedState,g,r)}function uA(g,r,v){if(v===void 0||(s1&1073741824)!==0&&(Dg&261930)===0)return g.memoizedState=r;return g.memoizedState=v,g=nG(),og.lanes|=g,aw|=g,v}function e9(g,r,v,h){if(I0(v,r))return v;if(Rh.current!==null)return g=uA(g,v,h),I0(g,r)||(fr=!0),g;if((s1&42)===0||(s1&1073741824)!==0&&(Dg&261930)===0)return fr=!0,g.memoizedState=v;return g=nG(),og.lanes|=g,aw|=g,r}function MO(){m.asyncTransitions--}function n9(g,r,v,h,O){var b=hr.p;hr.p=b!==0&&b<Dv?b:Dv;var P=m.T,M={};M._updatedFibers=new Set,m.T=M,NA(g,!1,r,v);try{var Y=O(),Q=m.S;if(Q!==null&&Q(M,Y),Y!==null&&typeof Y==="object"&&typeof Y.then==="function"){m.asyncTransitions++,Y.then(MO,MO);var N=j$(Y,h);q6(g,r,N,rv(g))}else q6(g,r,h,rv(g))}catch(Z){q6(g,r,{then:function(){},status:"rejected",reason:Z},rv(g))}finally{hr.p=b,P!==null&&M.types!==null&&(P.types!==null&&P.types!==M.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),P.types=M.types),m.T=P,P===null&&M._updatedFibers&&(g=M._updatedFibers.size,M._updatedFibers.clear(),10<g&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function FA(g,r,v,h){if(g.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var O=f9(g).queue;_$(g),n9(g,O,r,P4,v===null?U:function(){return c9(g),v(h)})}function f9(g){var r=g.memoizedState;if(r!==null)return r;r={memoizedState:P4,baseState:P4,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sv,lastRenderedState:P4},next:null};var v={};return r.next={memoizedState:v,baseState:v,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sv,lastRenderedState:v},next:null},g.memoizedState=r,g=g.alternate,g!==null&&(g.memoizedState=r),r}function c9(g){m.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var r=f9(g);r.next===null&&(r=g.alternate.memoizedState),q6(g,r.next.queue,{},rv(g))}function BA(){var g=GA(!1);return g=n9.bind(null,og,g.queue,!0,!1),u0().memoizedState=g,[!1,g]}function t9(){var g=S4(Sv)[0],r=Or().memoizedState;return[typeof g==="boolean"?g:b6(g),r]}function p9(){var g=A6(Sv)[0],r=Or().memoizedState;return[typeof g==="boolean"?g:b6(g),r]}function k5(){return Ur(Q8)}function oA(){var g=u0(),r=Xr.identifierPrefix;if(fg){var v=c1,h=f1;v=(h&~(1<<32-F0(h)-1)).toString(32)+v,r="_"+r+"R_"+v,v=G2++,0<v&&(r+="H"+v.toString(32)),r+="_"}else v=ou++,r="_"+r+"r_"+v.toString(32)+"_";return g.memoizedState=r}function IA(){return u0().memoizedState=t$.bind(null,og)}function t$(g,r){for(var v=g.return;v!==null;){switch(v.tag){case 24:case 3:var h=rv(v),O=ow(h),b=Iw(v,O,h);b!==null&&(w1(h,"refresh()",g),Ir(b,v,h),h6(b,v,h)),g=cb(),r!==null&&r!==void 0&&b!==null&&console.error("The seed argument is not enabled outside experimental channels."),O.payload={cache:g};return}v=v.return}}function p$(g,r,v){var h=arguments;typeof h[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),h=rv(g);var O={lane:h,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};GO(g)?a9(r,O):(O=mb(g,r,O,h),O!==null&&(w1(h,"dispatch()",g),Ir(O,g,h),s9(O,r,h)))}function d9(g,r,v){var h=arguments;typeof h[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),h=rv(g),q6(g,r,v,h)&&w1(h,"setState()",g)}function q6(g,r,v,h){var O={lane:h,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};if(GO(g))a9(r,O);else{var b=g.alternate;if(g.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null)){var P=m.H;m.H=Ev;try{var M=r.lastRenderedState,Y=b(M,v);if(O.hasEagerState=!0,O.eagerState=Y,I0(Y,M))return VH(g,r,O,0),Xr===null&&kH(),!1}catch(Q){}finally{m.H=P}}if(v=mb(g,r,O,h),v!==null)return Ir(v,g,h),s9(v,r,h),!0}return!1}function NA(g,r,v,h){if(m.T===null&&c5===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),h={lane:2,revertLane:Hq(),gesture:null,action:h,hasEagerState:!1,eagerState:null,next:null},GO(g)){if(r)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else r=mb(g,v,h,2),r!==null&&(w1(2,"setOptimistic()",g),Ir(r,g,2))}function GO(g){var r=g.alternate;return g===og||r!==null&&r===og}function a9(g,r){Jh=M2=!0;var v=g.pending;v===null?r.next=r:(r.next=v.next,v.next=r),g.pending=r}function s9(g,r,v){if((v&4194048)!==0){var h=r.lanes;h&=g.pendingLanes,v|=h,r.lanes=v,u5(g,v)}}function ZA(g){if(g!==null&&typeof g!=="function"){var r=String(g);pY.has(r)||(pY.add(r),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",g))}}function lA(g,r,v,h){var O=g.memoizedState,b=v(h,O);if(g.mode&U0){Yr(!0);try{b=v(h,O)}finally{Yr(!1)}}b===void 0&&(r=d(r)||"Component",nY.has(r)||(nY.add(r),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",r))),O=b===null||b===void 0?O:yg({},O,b),g.memoizedState=O,g.lanes===0&&(g.updateQueue.baseState=O)}function gG(g,r,v,h,O,b,P){var M=g.stateNode;if(typeof M.shouldComponentUpdate==="function"){if(v=M.shouldComponentUpdate(h,b,P),g.mode&U0){Yr(!0);try{v=M.shouldComponentUpdate(h,b,P)}finally{Yr(!1)}}return v===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",d(r)||"Component"),v}return r.prototype&&r.prototype.isPureReactComponent?!dh(v,h)||!dh(O,b):!0}function rG(g,r,v,h){var O=r.state;typeof r.componentWillReceiveProps==="function"&&r.componentWillReceiveProps(v,h),typeof r.UNSAFE_componentWillReceiveProps==="function"&&r.UNSAFE_componentWillReceiveProps(v,h),r.state!==O&&(g=D(g)||"Component",_Y.has(g)||(_Y.add(g),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",g)),FP.enqueueReplaceState(r,r.state,null))}function V5(g,r){var v=r;if("ref"in r){v={};for(var h in r)h!=="ref"&&(v[h]=r[h])}if(g=g.defaultProps){v===r&&(v=yg({},v));for(var O in g)v[O]===void 0&&(v[O]=g[O])}return v}function vG(g){vP(g),console.warn(`%s

%s
`,Qh?"An error occurred in the <"+Qh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function wG(g){var r=Qh?"The above error occurred in the <"+Qh+"> component.":"The above error occurred in one of your React components.",v="React will try to recreate this component tree from scratch using the error boundary you provided, "+((BP||"Anonymous")+".");if(typeof g==="object"&&g!==null&&typeof g.environmentName==="string"){var h=g.environmentName;g=[`%o

%s

%s
`,g,r,v].slice(0),typeof g[0]==="string"?g.splice(0,1,T7+" "+g[0],C7,k2+h+k2,S7):g.splice(0,0,T7,C7,k2+h+k2,S7),g.unshift(console),h=cu.apply(console.error,g),h()}else console.error(`%o

%s

%s
`,g,r,v)}function hG(g){vP(g)}function RO(g,r){try{Qh=r.source?D(r.source):null,BP=null;var v=r.value;if(m.actQueue!==null)m.thrownErrors.push(v);else{var h=g.onUncaughtError;h(v,{componentStack:r.stack})}}catch(O){setTimeout(function(){throw O})}}function HG(g,r,v){try{Qh=v.source?D(v.source):null,BP=D(r);var h=g.onCaughtError;h(v.value,{componentStack:v.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(O){setTimeout(function(){throw O})}}function TA(g,r,v){return v=ow(v),v.tag=KP,v.payload={element:null},v.callback=function(){bg(r.source,RO,g,r)},v}function CA(g){return g=ow(g),g.tag=KP,g}function SA(g,r,v,h){var O=v.type.getDerivedStateFromError;if(typeof O==="function"){var b=h.value;g.payload=function(){return O(b)},g.callback=function(){aM(v),bg(h.source,HG,r,v,h)}}var P=v.stateNode;P!==null&&typeof P.componentDidCatch==="function"&&(g.callback=function(){aM(v),bg(h.source,HG,r,v,h),typeof O!=="function"&&(g5===null?g5=new Set([this]):g5.add(this)),Lu(this,h),typeof O==="function"||(v.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",D(v)||"Unknown")})}function d$(g,r,v,h,O){if(v.flags|=32768,z1&&J6(g,O),h!==null&&typeof h==="object"&&typeof h.then==="function"){if(r=v.alternate,r!==null&&T4(r,v,O,!0),fg&&(L1=!0),v=bv.current,v!==null){switch(v.tag){case 31:case 13:return ov===null?LO():v.alternate===null&&Br===ww&&(Br=Y2),v.flags&=-257,v.flags|=65536,v.lanes=O,h===q2?v.flags|=16384:(r=v.updateQueue,r===null?v.updateQueue=new Set([h]):r.add(h),rq(g,h,O)),!1;case 22:return v.flags|=65536,h===q2?v.flags|=16384:(r=v.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([h])},v.updateQueue=r):(v=r.retryQueue,v===null?r.retryQueue=new Set([h]):v.add(h)),rq(g,h,O)),!1}throw Error("Unexpected Suspense handler tag ("+v.tag+"). This is a bug in React.")}return rq(g,h,O),LO(),!1}if(fg)return L1=!0,r=bv.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=O,h!==AP&&sh(d0(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:h}),v))):(h!==AP&&sh(d0(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:h}),v)),g=g.current.alternate,g.flags|=65536,O&=-O,g.lanes|=O,h=d0(h,v),O=TA(g.stateNode,h,O),gO(g,O),Br!==pw&&(Br=g4)),!1;var b=d0(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:h}),v);if(q8===null?q8=[b]:q8.push(b),Br!==pw&&(Br=g4),r===null)return!0;h=d0(h,v),v=r;do{switch(v.tag){case 3:return v.flags|=65536,g=O&-O,v.lanes|=g,g=TA(v.stateNode,h,g),gO(v,g),!1;case 1:if(r=v.type,b=v.stateNode,(v.flags&128)===0&&(typeof r.getDerivedStateFromError==="function"||b!==null&&typeof b.componentDidCatch==="function"&&(g5===null||!g5.has(b))))return v.flags|=65536,O&=-O,v.lanes|=O,O=CA(O),SA(O,g,v,h),gO(v,O),!1}v=v.return}while(v!==null);return!1}function W0(g,r,v,h){r.child=g===null?ZY(r,null,v,h):a5(r,g.child,v,h)}function OG(g,r,v,h,O){v=v.render;var b=r.ref;if("ref"in h){var P={};for(var M in h)M!=="ref"&&(P[M]=h[M])}else P=h;if(S5(r),h=HA(g,r,v,P,b,O),M=bA(),g!==null&&!fr)return AA(g,r,O),_1(g,r,O);return fg&&M&&yb(r),r.flags|=1,W0(g,r,h,O),r.child}function bG(g,r,v,h,O){if(g===null){var b=v.type;if(typeof b==="function"&&!kb(b)&&b.defaultProps===void 0&&v.compare===null)return v=Z5(b),r.tag=15,r.type=v,mA(r,b),AG(g,r,v,h,O);return g=Vb(v.type,null,h,r,r.mode,O),g.ref=r.ref,g.return=r,r.child=g}if(b=g.child,!yA(g,O)){var P=b.memoizedProps;if(v=v.compare,v=v!==null?v:dh,v(P,h)&&g.ref===r.ref)return _1(g,r,O)}return r.flags|=1,g=D1(b,h),g.ref=r.ref,g.return=r,r.child=g}function AG(g,r,v,h,O){if(g!==null){var b=g.memoizedProps;if(dh(b,h)&&g.ref===r.ref&&r.type===g.type)if(fr=!1,r.pendingProps=h=b,yA(g,O))(g.flags&131072)!==0&&(fr=!0);else return r.lanes=g.lanes,_1(g,r,O)}return xA(g,r,v,h,O)}function qG(g,r,v,h){var O=h.children,b=g!==null?g.memoizedState:null;if(g===null&&r.stateNode===null&&(r.stateNode={_visibility:k6,_pendingMarkers:null,_retryCache:null,_transitions:null}),h.mode==="hidden"){if((r.flags&128)!==0){if(b=b!==null?b.baseLanes|v:v,g!==null){h=r.child=g.child;for(O=0;h!==null;)O=O|h.lanes|h.childLanes,h=h.sibling;h=O&~b}else h=0,r.child=null;return PG(g,r,b,v,h)}if((v&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},g!==null&&cH(r,b!==null?b.cachePool:null),b!==null?F9(r,b):rA(r),B9(r);else return h=r.lanes=536870912,PG(g,r,b!==null?b.baseLanes|v:v,v,h)}else b!==null?(cH(r,b.cachePool),F9(r,b),Zw(r),r.memoizedState=null):(g!==null&&cH(r,null),rA(r),Zw(r));return W0(g,r,O,v),r.child}function P6(g,r){return g!==null&&g.tag===22||r.stateNode!==null||(r.stateNode={_visibility:k6,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function PG(g,r,v,h,O){var b=db();return b=b===null?null:{parent:ir._currentValue,pool:b},r.memoizedState={baseLanes:v,cachePool:b},g!==null&&cH(r,null),rA(r),B9(r),g!==null&&T4(g,r,h,!0),r.childLanes=O,null}function XO(g,r){var v=r.hidden;return v!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,v===!0?"hidden":v===!1?"hidden={false}":"hidden={...}",v?'mode="hidden"':'mode="visible"'),r=JO({mode:r.mode,children:r.children},g.mode),r.ref=g.ref,g.child=r,r.return=g,r}function WG(g,r,v){return a5(r,g.child,null,v),g=XO(r,r.pendingProps),g.flags|=2,gv(r),r.memoizedState=null,g}function a$(g,r,v){var h=r.pendingProps,O=(r.flags&128)!==0;if(r.flags&=-129,g===null){if(fg){if(h.mode==="hidden")return g=XO(r,h),r.lanes=536870912,P6(null,g);if(wA(r),(g=zr)?(v=mR(g,Fv),v=v!==null&&v.data===O4?v:null,v!==null&&(h={dehydrated:v,treeContext:w9(),retryLane:536870912,hydrationErrors:null},r.memoizedState=h,h=r9(v),h.return=r,r.child=h,R0=r,zr=null)):v=null,v===null)throw yH(r,g),uw(r);return r.lanes=536870912,null}return XO(r,h)}var b=g.memoizedState;if(b!==null){var P=b.dehydrated;if(wA(r),O)if(r.flags&256)r.flags&=-257,r=WG(g,r,v);else if(r.memoizedState!==null)r.child=g.child,r.flags|=128,r=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(H9(),(v&536870912)!==0&&UO(r),fr||T4(g,r,v,!1),O=(v&g.childLanes)!==0,fr||O){if(h=Xr,h!==null&&(P=F5(h,v),P!==0&&P!==b.retryLane))throw b.retryLane=P,z0(g,P),Ir(h,g,P),oP;LO(),r=WG(g,r,v)}else g=b.treeContext,zr=vv(P.nextSibling),R0=r,fg=!0,jw=null,L1=!1,Ov=null,Fv=!1,g!==null&&h9(r,g),r=XO(r,h),r.flags|=4096;return r}return b=g.child,h={mode:h.mode,children:h.children},(v&536870912)!==0&&(v&g.lanes)!==0&&UO(r),g=D1(b,h),g.ref=r.ref,r.child=g,g.return=r,g}function YO(g,r){var v=r.ref;if(v===null)g!==null&&g.ref!==null&&(r.flags|=4194816);else{if(typeof v!=="function"&&typeof v!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(g===null||g.ref!==v)r.flags|=4194816}}function xA(g,r,v,h,O){if(v.prototype&&typeof v.prototype.render==="function"){var b=d(v)||"Unknown";dY[b]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",b,b),dY[b]=!0)}if(r.mode&U0&&Vv.recordLegacyContextWarning(r,null),g===null&&(mA(r,r.type),v.contextTypes&&(b=d(v)||"Unknown",sY[b]||(sY[b]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",b)))),S5(r),v=HA(g,r,v,h,void 0,O),h=bA(),g!==null&&!fr)return AA(g,r,O),_1(g,r,O);return fg&&h&&yb(r),r.flags|=1,W0(g,r,v,O),r.child}function MG(g,r,v,h,O,b){if(S5(r),rw=-1,v8=g!==null&&g.type!==r.type,r.updateQueue=null,v=OA(r,h,v,O),o9(g,r),h=bA(),g!==null&&!fr)return AA(g,r,b),_1(g,r,b);return fg&&h&&yb(r),r.flags|=1,W0(g,r,v,b),r.child}function GG(g,r,v,h,O){switch(R(r)){case!1:var b=r.stateNode,P=new r.type(r.memoizedProps,b.context).state;b.updater.enqueueSetState(b,P,null);break;case!0:r.flags|=128,r.flags|=65536,b=Error("Simulated error coming from DevTools");var M=O&-O;if(r.lanes|=M,P=Xr,P===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");M=CA(M),SA(M,P,r,d0(b,r)),gO(r,M)}if(S5(r),r.stateNode===null){if(P=yw,b=v.contextType,"contextType"in v&&b!==null&&(b===void 0||b.$$typeof!==J1)&&!tY.has(v)&&(tY.add(v),M=b===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof b!=="object"?" However, it is set to a "+typeof b+".":b.$$typeof===Iq?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(b).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",d(v)||"Component",M)),typeof b==="object"&&b!==null&&(P=Ur(b)),b=new v(h,P),r.mode&U0){Yr(!0);try{b=new v(h,P)}finally{Yr(!1)}}if(P=r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=FP,r.stateNode=b,b._reactInternals=r,b._reactInternalInstance=EY,typeof v.getDerivedStateFromProps==="function"&&P===null&&(P=d(v)||"Component",yY.has(P)||(yY.add(P),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",P,b.state===null?"null":"undefined",P))),typeof v.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"){var Y=M=P=null;if(typeof b.componentWillMount==="function"&&b.componentWillMount.__suppressDeprecationWarning!==!0?P="componentWillMount":typeof b.UNSAFE_componentWillMount==="function"&&(P="UNSAFE_componentWillMount"),typeof b.componentWillReceiveProps==="function"&&b.componentWillReceiveProps.__suppressDeprecationWarning!==!0?M="componentWillReceiveProps":typeof b.UNSAFE_componentWillReceiveProps==="function"&&(M="UNSAFE_componentWillReceiveProps"),typeof b.componentWillUpdate==="function"&&b.componentWillUpdate.__suppressDeprecationWarning!==!0?Y="componentWillUpdate":typeof b.UNSAFE_componentWillUpdate==="function"&&(Y="UNSAFE_componentWillUpdate"),P!==null||M!==null||Y!==null){b=d(v)||"Component";var Q=typeof v.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";iY.has(b)||(iY.add(b),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,b,Q,P!==null?`
  `+P:"",M!==null?`
  `+M:"",Y!==null?`
  `+Y:""))}}b=r.stateNode,P=d(v)||"Component",b.render||(v.prototype&&typeof v.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",P):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",P)),!b.getInitialState||b.getInitialState.isReactClassApproved||b.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",P),b.getDefaultProps&&!b.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",P),b.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",P),v.childContextTypes&&!cY.has(v)&&(cY.add(v),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",P)),v.contextTypes&&!fY.has(v)&&(fY.add(v),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",P)),typeof b.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",P),v.prototype&&v.prototype.isPureReactComponent&&typeof b.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",d(v)||"A pure component"),typeof b.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",P),typeof b.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",P),typeof b.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",P),typeof b.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",P),M=b.props!==h,b.props!==void 0&&M&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",P),b.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",P,P),typeof b.getSnapshotBeforeUpdate!=="function"||typeof b.componentDidUpdate==="function"||jY.has(v)||(jY.add(v),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",d(v))),typeof b.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",P),typeof b.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",P),typeof v.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",P),(M=b.state)&&(typeof M!=="object"||ar(M))&&console.error("%s.state: must be set to an object or null",P),typeof b.getChildContext==="function"&&typeof v.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",P),b=r.stateNode,b.props=h,b.state=r.memoizedState,b.refs={},sb(r),P=v.contextType,b.context=typeof P==="object"&&P!==null?Ur(P):yw,b.state===h&&(P=d(v)||"Component",eY.has(P)||(eY.add(P),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",P))),r.mode&U0&&Vv.recordLegacyContextWarning(r,b),Vv.recordUnsafeLifecycleWarnings(r,b),b.state=r.memoizedState,P=v.getDerivedStateFromProps,typeof P==="function"&&(lA(r,v,P,h),b.state=r.memoizedState),typeof v.getDerivedStateFromProps==="function"||typeof b.getSnapshotBeforeUpdate==="function"||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(P=b.state,typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount(),P!==b.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",D(r)||"Component"),FP.enqueueReplaceState(b,b.state,null)),O6(r,h,b,O),H6(),b.state=r.memoizedState),typeof b.componentDidMount==="function"&&(r.flags|=4194308),(r.mode&kv)!==Bg&&(r.flags|=134217728),b=!0}else if(g===null){b=r.stateNode;var N=r.memoizedProps;M=V5(v,N),b.props=M;var Z=b.context;Y=v.contextType,P=yw,typeof Y==="object"&&Y!==null&&(P=Ur(Y)),Q=v.getDerivedStateFromProps,Y=typeof Q==="function"||typeof b.getSnapshotBeforeUpdate==="function",N=r.pendingProps!==N,Y||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(N||Z!==P)&&rG(r,b,h,P),tw=!1;var F=r.memoizedState;b.state=F,O6(r,h,b,O),H6(),Z=r.memoizedState,N||F!==Z||tw?(typeof Q==="function"&&(lA(r,v,Q,h),Z=r.memoizedState),(M=tw||gG(r,v,M,h,F,Z,P))?(Y||typeof b.UNSAFE_componentWillMount!=="function"&&typeof b.componentWillMount!=="function"||(typeof b.componentWillMount==="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount==="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount==="function"&&(r.flags|=4194308),(r.mode&kv)!==Bg&&(r.flags|=134217728)):(typeof b.componentDidMount==="function"&&(r.flags|=4194308),(r.mode&kv)!==Bg&&(r.flags|=134217728),r.memoizedProps=h,r.memoizedState=Z),b.props=h,b.state=Z,b.context=P,b=M):(typeof b.componentDidMount==="function"&&(r.flags|=4194308),(r.mode&kv)!==Bg&&(r.flags|=134217728),b=!1)}else{b=r.stateNode,gA(g,r),P=r.memoizedProps,Y=V5(v,P),b.props=Y,Q=r.pendingProps,F=b.context,Z=v.contextType,M=yw,typeof Z==="object"&&Z!==null&&(M=Ur(Z)),N=v.getDerivedStateFromProps,(Z=typeof N==="function"||typeof b.getSnapshotBeforeUpdate==="function")||typeof b.UNSAFE_componentWillReceiveProps!=="function"&&typeof b.componentWillReceiveProps!=="function"||(P!==Q||F!==M)&&rG(r,b,h,M),tw=!1,F=r.memoizedState,b.state=F,O6(r,h,b,O),H6();var S=r.memoizedState;P!==Q||F!==S||tw||g!==null&&g.dependencies!==null&&iH(g.dependencies)?(typeof N==="function"&&(lA(r,v,N,h),S=r.memoizedState),(Y=tw||gG(r,v,Y,h,F,S,M)||g!==null&&g.dependencies!==null&&iH(g.dependencies))?(Z||typeof b.UNSAFE_componentWillUpdate!=="function"&&typeof b.componentWillUpdate!=="function"||(typeof b.componentWillUpdate==="function"&&b.componentWillUpdate(h,S,M),typeof b.UNSAFE_componentWillUpdate==="function"&&b.UNSAFE_componentWillUpdate(h,S,M)),typeof b.componentDidUpdate==="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate==="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!=="function"||P===g.memoizedProps&&F===g.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||P===g.memoizedProps&&F===g.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=S),b.props=h,b.state=S,b.context=M,b=Y):(typeof b.componentDidUpdate!=="function"||P===g.memoizedProps&&F===g.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!=="function"||P===g.memoizedProps&&F===g.memoizedState||(r.flags|=1024),b=!1)}if(M=b,YO(g,r),P=(r.flags&128)!==0,M||P){if(M=r.stateNode,Xv(r),P&&typeof v.getDerivedStateFromError!=="function")v=null,N0=-1;else if(v=YY(M),r.mode&U0){Yr(!0);try{YY(M)}finally{Yr(!1)}}r.flags|=1,g!==null&&P?(r.child=a5(r,g.child,null,O),r.child=a5(r,null,v,O)):W0(g,r,v,O),r.memoizedState=M.state,g=r.child}else g=_1(g,r,O);return O=r.stateNode,b&&O.props!==h&&(Kh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",D(r)||"a component"),Kh=!0),g}function RG(g,r,v,h){return C5(),r.flags|=256,W0(g,r,v,h),r.child}function mA(g,r){r&&r.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,r.displayName||r.name||"Component"),typeof r.getDerivedStateFromProps==="function"&&(g=d(r)||"Unknown",g7[g]||(console.error("%s: Function components do not support getDerivedStateFromProps.",g),g7[g]=!0)),typeof r.contextType==="object"&&r.contextType!==null&&(r=d(r)||"Unknown",aY[r]||(console.error("%s: Function components do not support contextType.",r),aY[r]=!0))}function DA(g){return{baseLanes:g,cachePool:M9()}}function kA(g,r,v){return g=g!==null?g.childLanes&~v:0,r&&(g|=e0),g}function XG(g,r,v){var h,O=r.pendingProps;G(r)&&(r.flags|=128);var b=!1,P=(r.flags&128)!==0;if((h=P)||(h=g!==null&&g.memoizedState===null?!1:(kr.current&g8)!==0),h&&(b=!0,r.flags&=-129),h=(r.flags&32)!==0,r.flags&=-33,g===null){if(fg){if(b?Nw(r):Zw(r),(g=zr)?(v=mR(g,Fv),v=v!==null&&v.data!==O4?v:null,v!==null&&(h={dehydrated:v,treeContext:w9(),retryLane:536870912,hydrationErrors:null},r.memoizedState=h,h=r9(v),h.return=r,r.child=h,R0=r,zr=null)):v=null,v===null)throw yH(r,g),uw(r);return Jq(v)?r.lanes=32:r.lanes=536870912,null}var M=O.children;if(O=O.fallback,b){Zw(r);var Y=r.mode;return M=JO({mode:"hidden",children:M},Y),O=l5(O,Y,v,null),M.return=r,O.return=r,M.sibling=O,r.child=M,O=r.child,O.memoizedState=DA(v),O.childLanes=kA(g,h,v),r.memoizedState=IP,P6(null,O)}return Nw(r),VA(r,M)}var Q=g.memoizedState;if(Q!==null){var N=Q.dehydrated;if(N!==null){if(P)r.flags&256?(Nw(r),r.flags&=-257,r=EA(g,r,v)):r.memoizedState!==null?(Zw(r),r.child=g.child,r.flags|=128,r=null):(Zw(r),M=O.fallback,Y=r.mode,O=JO({mode:"visible",children:O.children},Y),M=l5(M,Y,v,null),M.flags|=2,O.return=r,M.return=r,O.sibling=M,r.child=O,a5(r,g.child,null,v),O=r.child,O.memoizedState=DA(v),O.childLanes=kA(g,h,v),r.memoizedState=IP,r=P6(null,O));else if(Nw(r),H9(),(v&536870912)!==0&&UO(r),Jq(N)){if(h=N.nextSibling&&N.nextSibling.dataset,h){M=h.dgst;var Z=h.msg;Y=h.stck;var F=h.cstck}b=Z,h=M,O=Y,N=F,M=b,Y=N,M=M?Error(M):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),M.stack=O||"",M.digest=h,h=Y===void 0?null:Y,O={value:M,source:null,stack:h},typeof h==="string"&&bP.set(M,O),sh(O),r=EA(g,r,v)}else if(fr||T4(g,r,v,!1),h=(v&g.childLanes)!==0,fr||h){if(h=Xr,h!==null&&(O=F5(h,v),O!==0&&O!==Q.retryLane))throw Q.retryLane=O,z0(g,O),Ir(h,g,O),oP;Yq(N)||LO(),r=EA(g,r,v)}else Yq(N)?(r.flags|=192,r.child=g.child,r=null):(g=Q.treeContext,zr=vv(N.nextSibling),R0=r,fg=!0,jw=null,L1=!1,Ov=null,Fv=!1,g!==null&&h9(r,g),r=VA(r,O.children),r.flags|=4096);return r}}if(b)return Zw(r),M=O.fallback,Y=r.mode,F=g.child,N=F.sibling,O=D1(F,{mode:"hidden",children:O.children}),O.subtreeFlags=F.subtreeFlags&65011712,N!==null?M=D1(N,M):(M=l5(M,Y,v,null),M.flags|=2),M.return=r,O.return=r,O.sibling=M,r.child=O,P6(null,O),O=r.child,M=g.child.memoizedState,M===null?M=DA(v):(Y=M.cachePool,Y!==null?(F=ir._currentValue,Y=Y.parent!==F?{parent:F,pool:F}:Y):Y=M9(),M={baseLanes:M.baseLanes|v,cachePool:Y}),O.memoizedState=M,O.childLanes=kA(g,h,v),r.memoizedState=IP,P6(g.child,O);return Q!==null&&(v&62914560)===v&&(v&g.lanes)!==0&&UO(r),Nw(r),v=g.child,g=v.sibling,v=D1(v,{mode:"visible",children:O.children}),v.return=r,v.sibling=null,g!==null&&(h=r.deletions,h===null?(r.deletions=[g],r.flags|=16):h.push(g)),r.child=v,r.memoizedState=null,v}function VA(g,r){return r=JO({mode:"visible",children:r},g.mode),r.return=g,g.child=r}function JO(g,r){return g=L(22,g,null,r),g.lanes=0,g}function EA(g,r,v){return a5(r,g.child,null,v),g=VA(r,r.pendingProps.children),g.flags|=2,r.memoizedState=null,g}function YG(g,r,v){g.lanes|=r;var h=g.alternate;h!==null&&(h.lanes|=r),nb(g.return,r,v)}function _A(g,r,v,h,O,b){var P=g.memoizedState;P===null?g.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:v,tailMode:O,treeForkCount:b}:(P.isBackwards=r,P.rendering=null,P.renderingStartTime=0,P.last=h,P.tail=v,P.tailMode=O,P.treeForkCount=b)}function JG(g,r,v){var h=r.pendingProps,O=h.revealOrder,b=h.tail,P=h.children,M=kr.current;if((h=(M&g8)!==0)?(M=M&Xh|g8,r.flags|=128):M&=Xh,Kg(kr,M,r),M=O==null?"null":O,O!=="forwards"&&O!=="unstable_legacy-backwards"&&O!=="together"&&O!=="independent"&&!r7[M])if(r7[M]=!0,O==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(O==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof O==="string")switch(O.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',O,O.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',O,O.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',O)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',O);if(M=b==null?"null":b,!X2[M])if(b==null){if(O==="forwards"||O==="backwards"||O==="unstable_legacy-backwards")X2[M]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else b!=="visible"&&b!=="collapsed"&&b!=="hidden"?(X2[M]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',b)):O!=="forwards"&&O!=="backwards"&&O!=="unstable_legacy-backwards"&&(X2[M]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',b));g:if((O==="forwards"||O==="backwards"||O==="unstable_legacy-backwards")&&P!==void 0&&P!==null&&P!==!1)if(ar(P)){for(M=0;M<P.length;M++)if(!U9(P[M],M))break g}else if(M=vg(P),typeof M==="function"){if(M=M.call(P))for(var Y=M.next(),Q=0;!Y.done;Y=M.next()){if(!U9(Y.value,Q))break g;Q++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',O);if(W0(g,r,P,v),fg?(Lw(),P=V6):P=0,!h&&g!==null&&(g.flags&128)!==0)g:for(g=r.child;g!==null;){if(g.tag===13)g.memoizedState!==null&&YG(g,v,r);else if(g.tag===19)YG(g,v,r);else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break g;for(;g.sibling===null;){if(g.return===null||g.return===r)break g;g=g.return}g.sibling.return=g.return,g=g.sibling}switch(O){case"forwards":v=r.child;for(O=null;v!==null;)g=v.alternate,g!==null&&rO(g)===null&&(O=v),v=v.sibling;v=O,v===null?(O=r.child,r.child=null):(O=v.sibling,v.sibling=null),_A(r,!1,O,v,b,P);break;case"backwards":case"unstable_legacy-backwards":v=null,O=r.child;for(r.child=null;O!==null;){if(g=O.alternate,g!==null&&rO(g)===null){r.child=O;break}g=O.sibling,O.sibling=v,v=O,O=g}_A(r,!0,v,null,b,P);break;case"together":_A(r,!1,null,null,void 0,P);break;default:r.memoizedState=null}return r.child}function _1(g,r,v){if(g!==null&&(r.dependencies=g.dependencies),N0=-1,aw|=r.lanes,(v&r.childLanes)===0)if(g!==null){if(T4(g,r,v,!1),(v&r.childLanes)===0)return null}else return null;if(g!==null&&r.child!==g.child)throw Error("Resuming work not yet implemented.");if(r.child!==null){g=r.child,v=D1(g,g.pendingProps),r.child=v;for(v.return=r;g.sibling!==null;)g=g.sibling,v=v.sibling=D1(g,g.pendingProps),v.return=r;v.sibling=null}return r.child}function yA(g,r){if((g.lanes&r)!==0)return!0;return g=g.dependencies,g!==null&&iH(g)?!0:!1}function s$(g,r,v){switch(r.tag){case 3:V(r,r.stateNode.containerInfo),Fw(r,ir,g.memoizedState.cache),C5();break;case 27:case 5:i(r);break;case 4:V(r,r.stateNode.containerInfo);break;case 10:Fw(r,r.type,r.memoizedProps.value);break;case 12:(v&r.childLanes)!==0&&(r.flags|=4),r.flags|=2048;var h=r.stateNode;h.effectDuration=-0,h.passiveEffectDuration=-0;break;case 31:if(r.memoizedState!==null)return r.flags|=128,wA(r),null;break;case 13:if(h=r.memoizedState,h!==null){if(h.dehydrated!==null)return Nw(r),r.flags|=128,null;if((v&r.child.childLanes)!==0)return XG(g,r,v);return Nw(r),g=_1(g,r,v),g!==null?g.sibling:null}Nw(r);break;case 19:var O=(g.flags&128)!==0;if(h=(v&r.childLanes)!==0,h||(T4(g,r,v,!1),h=(v&r.childLanes)!==0),O){if(h)return JG(g,r,v);r.flags|=128}if(O=r.memoizedState,O!==null&&(O.rendering=null,O.tail=null,O.lastEffect=null),Kg(kr,kr.current,r),h)break;else return null;case 22:return r.lanes=0,qG(g,r,v,r.pendingProps);case 24:Fw(r,ir,g.memoizedState.cache)}return _1(g,r,v)}function jA(g,r,v){if(r._debugNeedsRemount&&g!==null){v=Vb(r.type,r.key,r.pendingProps,r._debugOwner||null,r.mode,r.lanes),v._debugStack=r._debugStack,v._debugTask=r._debugTask;var h=r.return;if(h===null)throw Error("Cannot swap the root fiber.");if(g.alternate=null,r.alternate=null,v.index=r.index,v.sibling=r.sibling,v.return=r.return,v.ref=r.ref,v._debugInfo=r._debugInfo,r===h.child)h.child=v;else{var O=h.child;if(O===null)throw Error("Expected parent to have a child.");for(;O.sibling!==r;)if(O=O.sibling,O===null)throw Error("Expected to find the previous sibling.");O.sibling=v}return r=h.deletions,r===null?(h.deletions=[g],h.flags|=16):r.push(g),v.flags|=2,v}if(g!==null)if(g.memoizedProps!==r.pendingProps||r.type!==g.type)fr=!0;else{if(!yA(g,v)&&(r.flags&128)===0)return fr=!1,s$(g,r,v);fr=(g.flags&131072)!==0?!0:!1}else{if(fr=!1,h=fg)Lw(),h=(r.flags&1048576)!==0;h&&(h=r.index,Lw(),v9(r,V6,h))}switch(r.lanes=0,r.tag){case 16:g:if(h=r.pendingProps,g=Bw(r.elementType),r.type=g,typeof g==="function")kb(g)?(h=V5(g,h),r.tag=1,r.type=g=Z5(g),r=GG(null,r,g,h,v)):(r.tag=0,mA(r,g),r.type=g=Z5(g),r=xA(null,r,g,h,v));else{if(g!==void 0&&g!==null){if(O=g.$$typeof,O===B6){r.tag=11,r.type=g=Db(g),r=OG(null,r,g,h,v);break g}else if(O===DO){r.tag=14,r=bG(null,r,g,h,v);break g}}throw r="",g!==null&&typeof g==="object"&&g.$$typeof===wv&&(r=" Did you wrap a component in React.lazy() more than once?"),v=d(g)||g,Error("Element type is invalid. Received a promise that resolves to: "+v+". Lazy element type must resolve to a class or function."+r)}return r;case 0:return xA(g,r,r.type,r.pendingProps,v);case 1:return h=r.type,O=V5(h,r.pendingProps),GG(g,r,h,O,v);case 3:g:{if(V(r,r.stateNode.containerInfo),g===null)throw Error("Should have a current fiber. This is a bug in React.");h=r.pendingProps;var b=r.memoizedState;O=b.element,gA(g,r),O6(r,h,null,v);var P=r.memoizedState;if(h=P.cache,Fw(r,ir,h),h!==b.cache&&fb(r,[ir],v,!0),H6(),h=P.element,b.isDehydrated)if(b={element:h,isDehydrated:!1,cache:P.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=RG(g,r,h,v);break g}else if(h!==O){O=d0(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),r),sh(O),r=RG(g,r,h,v);break g}else{switch(g=r.stateNode.containerInfo,g.nodeType){case 9:g=g.body;break;default:g=g.nodeName==="HTML"?g.ownerDocument.body:g}zr=vv(g.firstChild),R0=r,fg=!0,jw=null,L1=!1,Ov=null,Fv=!0,v=ZY(r,null,h,v);for(r.child=v;v;)v.flags=v.flags&-3|4096,v=v.sibling}else{if(C5(),h===O){r=_1(g,r,v);break g}W0(g,r,h,v)}r=r.child}return r;case 26:return YO(g,r),g===null?(v=yR(r.type,null,r.pendingProps,null))?r.memoizedState=v:fg||(v=r.type,g=r.pendingProps,h=Vg(mw.current),h=oO(h).createElement(v),h[G0]=r,h[B0]=g,M0(h,v,g),$g(h),r.stateNode=h):r.memoizedState=yR(r.type,g.memoizedProps,r.pendingProps,g.memoizedState),null;case 27:return i(r),g===null&&fg&&(h=Vg(mw.current),O=rg(),h=r.stateNode=ER(r.type,r.pendingProps,h,O,!1),L1||(O=IR(h,r.type,r.pendingProps,O),O!==null&&(T5(r,0).serverProps=O)),R0=r,Fv=!0,O=zr,Sw(r.type)?(dP=O,zr=vv(h.firstChild)):zr=O),W0(g,r,r.pendingProps.children,v),YO(g,r),g===null&&(r.flags|=4194304),r.child;case 5:return g===null&&fg&&(b=rg(),h=Nb(r.type,b.ancestorInfo),O=zr,(P=!O)||(P=_U(O,r.type,r.pendingProps,Fv),P!==null?(r.stateNode=P,L1||(b=IR(P,r.type,r.pendingProps,b),b!==null&&(T5(r,0).serverProps=b)),R0=r,zr=vv(P.firstChild),Fv=!1,b=!0):b=!1,P=!b),P&&(h&&yH(r,O),uw(r))),i(r),O=r.type,b=r.pendingProps,P=g!==null?g.memoizedProps:null,h=b.children,Rq(O,b)?h=null:P!==null&&Rq(O,P)&&(r.flags|=32),r.memoizedState!==null&&(O=HA(g,r,e$,null,null,v),Q8._currentValue=O),YO(g,r),W0(g,r,h,v),r.child;case 6:return g===null&&fg&&(v=r.pendingProps,g=rg(),h=g.ancestorInfo.current,v=h!=null?TH(v,h.tag,g.ancestorInfo.implicitRootScope):!0,g=zr,(h=!g)||(h=yU(g,r.pendingProps,Fv),h!==null?(r.stateNode=h,R0=r,zr=null,h=!0):h=!1,h=!h),h&&(v&&yH(r,g),uw(r))),null;case 13:return XG(g,r,v);case 4:return V(r,r.stateNode.containerInfo),h=r.pendingProps,g===null?r.child=a5(r,null,h,v):W0(g,r,h,v),r.child;case 11:return OG(g,r,r.type,r.pendingProps,v);case 7:return W0(g,r,r.pendingProps,v),r.child;case 8:return W0(g,r,r.pendingProps.children,v),r.child;case 12:return r.flags|=4,r.flags|=2048,h=r.stateNode,h.effectDuration=-0,h.passiveEffectDuration=-0,W0(g,r,r.pendingProps.children,v),r.child;case 10:return h=r.type,O=r.pendingProps,b=O.value,"value"in O||v7||(v7=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Fw(r,h,b),W0(g,r,O.children,v),r.child;case 9:return O=r.type._context,h=r.pendingProps.children,typeof h!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),S5(r),O=Ur(O),h=XP(h,O,void 0),r.flags|=1,W0(g,r,h,v),r.child;case 14:return bG(g,r,r.type,r.pendingProps,v);case 15:return AG(g,r,r.type,r.pendingProps,v);case 19:return JG(g,r,v);case 31:return a$(g,r,v);case 22:return qG(g,r,v,r.pendingProps);case 24:return S5(r),h=Ur(ir),g===null?(O=db(),O===null&&(O=Xr,b=cb(),O.pooledCache=b,x5(b),b!==null&&(O.pooledCacheLanes|=v),O=b),r.memoizedState={parent:h,cache:O},sb(r),Fw(r,ir,O)):((g.lanes&v)!==0&&(gA(g,r),O6(r,null,null,v),H6()),O=g.memoizedState,b=r.memoizedState,O.parent!==h?(O={parent:h,cache:h},r.memoizedState=O,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=O),Fw(r,ir,h)):(h=b.cache,Fw(r,ir,h),h!==O.cache&&fb(r,[ir],v,!0))),W0(g,r,r.pendingProps.children,v),r.child;case 29:throw r.pendingProps}throw Error("Unknown unit of work tag ("+r.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function y1(g){g.flags|=4}function iA(g,r,v,h,O){if(r=(g.mode&Ku)!==Bg)r=!1;if(r){if(g.flags|=16777216,(O&335544128)===O)if(g.stateNode.complete)g.flags|=8192;else if(pG())g.flags|=8192;else throw d5=q2,JP}else g.flags&=-16777217}function QG(g,r){if(r.type!=="stylesheet"||(r.state.loading&Zv)!==q4)g.flags&=-16777217;else if(g.flags|=16777216,!fR(r))if(pG())g.flags|=8192;else throw d5=q2,JP}function QO(g,r){r!==null&&(g.flags|=4),g.flags&16384&&(r=g.tag!==22?B4():536870912,g.lanes|=r,w4|=r)}function W6(g,r){if(!fg)switch(g.tailMode){case"hidden":r=g.tail;for(var v=null;r!==null;)r.alternate!==null&&(v=r),r=r.sibling;v===null?g.tail=null:v.sibling=null;break;case"collapsed":v=g.tail;for(var h=null;v!==null;)v.alternate!==null&&(h=v),v=v.sibling;h===null?r||g.tail===null?g.tail=null:g.tail.sibling=null:h.sibling=null}}function Jr(g){var r=g.alternate!==null&&g.alternate.child===g.child,v=0,h=0;if(r)if((g.mode&xg)!==Bg){for(var{selfBaseDuration:O,child:b}=g;b!==null;)v|=b.lanes|b.childLanes,h|=b.subtreeFlags&65011712,h|=b.flags&65011712,O+=b.treeBaseDuration,b=b.sibling;g.treeBaseDuration=O}else for(O=g.child;O!==null;)v|=O.lanes|O.childLanes,h|=O.subtreeFlags&65011712,h|=O.flags&65011712,O.return=g,O=O.sibling;else if((g.mode&xg)!==Bg){O=g.actualDuration,b=g.selfBaseDuration;for(var P=g.child;P!==null;)v|=P.lanes|P.childLanes,h|=P.subtreeFlags,h|=P.flags,O+=P.actualDuration,b+=P.treeBaseDuration,P=P.sibling;g.actualDuration=O,g.treeBaseDuration=b}else for(O=g.child;O!==null;)v|=O.lanes|O.childLanes,h|=O.subtreeFlags,h|=O.flags,O.return=g,O=O.sibling;return g.subtreeFlags|=h,g.childLanes=v,r}function gU(g,r,v){var h=r.pendingProps;switch(jb(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jr(r),null;case 1:return Jr(r),null;case 3:if(v=r.stateNode,h=null,g!==null&&(h=g.memoizedState.cache),r.memoizedState.cache!==h&&(r.flags|=2048),V1(ir,r),p(r),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),g===null||g.child===null)l4(r)?(eb(),y1(r)):g===null||g.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ib());return Jr(r),null;case 26:var{type:O,memoizedState:b}=r;return g===null?(y1(r),b!==null?(Jr(r),QG(r,b)):(Jr(r),iA(r,O,null,h,v))):b?b!==g.memoizedState?(y1(r),Jr(r),QG(r,b)):(Jr(r),r.flags&=-16777217):(g=g.memoizedProps,g!==h&&y1(r),Jr(r),iA(r,O,g,h,v)),null;case 27:if(Pg(r),v=Vg(mw.current),O=r.type,g!==null&&r.stateNode!=null)g.memoizedProps!==h&&y1(r);else{if(!h){if(r.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jr(r),null}g=rg(),l4(r)?O9(r,g):(g=ER(O,h,v,g,!0),r.stateNode=g,y1(r))}return Jr(r),null;case 5:if(Pg(r),O=r.type,g!==null&&r.stateNode!=null)g.memoizedProps!==h&&y1(r);else{if(!h){if(r.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Jr(r),null}var P=rg();if(l4(r))O9(r,P);else{switch(b=Vg(mw.current),Nb(O,P.ancestorInfo),P=P.context,b=oO(b),P){case oh:b=b.createElementNS(d4,O);break;case x2:b=b.createElementNS(iO,O);break;default:switch(O){case"svg":b=b.createElementNS(d4,O);break;case"math":b=b.createElementNS(iO,O);break;case"script":b=b.createElement("div"),b.innerHTML="<script></script>",b=b.removeChild(b.firstChild);break;case"select":b=typeof h.is==="string"?b.createElement("select",{is:h.is}):b.createElement("select"),h.multiple?b.multiple=!0:h.size&&(b.size=h.size);break;default:b=typeof h.is==="string"?b.createElement(O,{is:h.is}):b.createElement(O),O.indexOf("-")===-1&&(O!==O.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",O),Object.prototype.toString.call(b)!=="[object HTMLUnknownElement]"||mv.call(B7,O)||(B7[O]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",O)))}}b[G0]=r,b[B0]=h;g:for(P=r.child;P!==null;){if(P.tag===5||P.tag===6)b.appendChild(P.stateNode);else if(P.tag!==4&&P.tag!==27&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===r)break g;for(;P.sibling===null;){if(P.return===null||P.return===r)break g;P=P.return}P.sibling.return=P.return,P=P.sibling}r.stateNode=b;g:switch(M0(b,O,h),O){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break g;case"img":h=!0;break g;default:h=!1}h&&y1(r)}}return Jr(r),iA(r,r.type,g===null?null:g.memoizedProps,r.pendingProps,v),null;case 6:if(g&&r.stateNode!=null)g.memoizedProps!==h&&y1(r);else{if(typeof h!=="string"&&r.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(g=Vg(mw.current),v=rg(),l4(r)){if(g=r.stateNode,v=r.memoizedProps,O=!L1,h=null,b=R0,b!==null)switch(b.tag){case 3:O&&(O=kR(g,v,h),O!==null&&(T5(r,0).serverProps=O));break;case 27:case 5:h=b.memoizedProps,O&&(O=kR(g,v,h),O!==null&&(T5(r,0).serverProps=O))}g[G0]=r,g=g.nodeValue===v||h!==null&&h.suppressHydrationWarning===!0||LR(g.nodeValue,v)?!0:!1,g||uw(r,!0)}else O=v.ancestorInfo.current,O!=null&&TH(h,O.tag,v.ancestorInfo.implicitRootScope),g=oO(g).createTextNode(h),g[G0]=r,r.stateNode=g}return Jr(r),null;case 31:if(v=r.memoizedState,g===null||g.memoizedState!==null){if(h=l4(r),v!==null){if(g===null){if(!h)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");g[G0]=r,Jr(r),(r.mode&xg)!==Bg&&v!==null&&(g=r.child,g!==null&&(r.treeBaseDuration-=g.treeBaseDuration))}else eb(),C5(),(r.flags&128)===0&&(v=r.memoizedState=null),r.flags|=4,Jr(r),(r.mode&xg)!==Bg&&v!==null&&(g=r.child,g!==null&&(r.treeBaseDuration-=g.treeBaseDuration));g=!1}else v=ib(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=v),g=!0;if(!g){if(r.flags&256)return gv(r),r;return gv(r),null}if((r.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Jr(r),null;case 13:if(h=r.memoizedState,g===null||g.memoizedState!==null&&g.memoizedState.dehydrated!==null){if(O=h,b=l4(r),O!==null&&O.dehydrated!==null){if(g===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(b=r.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");b[G0]=r,Jr(r),(r.mode&xg)!==Bg&&O!==null&&(O=r.child,O!==null&&(r.treeBaseDuration-=O.treeBaseDuration))}else eb(),C5(),(r.flags&128)===0&&(O=r.memoizedState=null),r.flags|=4,Jr(r),(r.mode&xg)!==Bg&&O!==null&&(O=r.child,O!==null&&(r.treeBaseDuration-=O.treeBaseDuration));O=!1}else O=ib(),g!==null&&g.memoizedState!==null&&(g.memoizedState.hydrationErrors=O),O=!0;if(!O){if(r.flags&256)return gv(r),r;return gv(r),null}}if(gv(r),(r.flags&128)!==0)return r.lanes=v,(r.mode&xg)!==Bg&&v6(r),r;return v=h!==null,g=g!==null&&g.memoizedState!==null,v&&(h=r.child,O=null,h.alternate!==null&&h.alternate.memoizedState!==null&&h.alternate.memoizedState.cachePool!==null&&(O=h.alternate.memoizedState.cachePool.pool),b=null,h.memoizedState!==null&&h.memoizedState.cachePool!==null&&(b=h.memoizedState.cachePool.pool),b!==O&&(h.flags|=2048)),v!==g&&v&&(r.child.flags|=8192),QO(r,r.updateQueue),Jr(r),(r.mode&xg)!==Bg&&v&&(g=r.child,g!==null&&(r.treeBaseDuration-=g.treeBaseDuration)),null;case 4:return p(r),g===null&&bq(r.stateNode.containerInfo),Jr(r),null;case 10:return V1(r.type,r),Jr(r),null;case 19:if(Jg(kr,r),h=r.memoizedState,h===null)return Jr(r),null;if(O=(r.flags&128)!==0,b=h.rendering,b===null)if(O)W6(h,!1);else{if(Br!==ww||g!==null&&(g.flags&128)!==0)for(g=r.child;g!==null;){if(b=rO(g),b!==null){r.flags|=128,W6(h,!1),g=b.updateQueue,r.updateQueue=g,QO(r,g),r.subtreeFlags=0,g=v;for(v=r.child;v!==null;)g9(v,g),v=v.sibling;return Kg(kr,kr.current&Xh|g8,r),fg&&k1(r,h.treeForkCount),r.child}g=g.sibling}h.tail!==null&&w0()>U2&&(r.flags|=128,O=!0,W6(h,!1),r.lanes=4194304)}else{if(!O)if(g=rO(b),g!==null){if(r.flags|=128,O=!0,g=g.updateQueue,r.updateQueue=g,QO(r,g),W6(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!fg)return Jr(r),null}else 2*w0()-h.renderingStartTime>U2&&v!==536870912&&(r.flags|=128,O=!0,W6(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(g=h.last,g!==null?g.sibling=b:r.child=b,h.last=b)}if(h.tail!==null)return g=h.tail,h.rendering=g,h.tail=g.sibling,h.renderingStartTime=w0(),g.sibling=null,v=kr.current,v=O?v&Xh|g8:v&Xh,Kg(kr,v,r),fg&&k1(r,h.treeForkCount),g;return Jr(r),null;case 22:case 23:return gv(r),vA(r),h=r.memoizedState!==null,g!==null?g.memoizedState!==null!==h&&(r.flags|=8192):h&&(r.flags|=8192),h?(v&536870912)!==0&&(r.flags&128)===0&&(Jr(r),r.subtreeFlags&6&&(r.flags|=8192)):Jr(r),v=r.updateQueue,v!==null&&QO(r,v.retryQueue),v=null,g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(v=g.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==v&&(r.flags|=2048),g!==null&&Jg(t5,r),null;case 24:return v=null,g!==null&&(v=g.memoizedState.cache),r.memoizedState.cache!==v&&(r.flags|=2048),V1(ir,r),Jr(r),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+r.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function rU(g,r){switch(jb(r),r.tag){case 1:return g=r.flags,g&65536?(r.flags=g&-65537|128,(r.mode&xg)!==Bg&&v6(r),r):null;case 3:return V1(ir,r),p(r),g=r.flags,(g&65536)!==0&&(g&128)===0?(r.flags=g&-65537|128,r):null;case 26:case 27:case 5:return Pg(r),null;case 31:if(r.memoizedState!==null){if(gv(r),r.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");C5()}return g=r.flags,g&65536?(r.flags=g&-65537|128,(r.mode&xg)!==Bg&&v6(r),r):null;case 13:if(gv(r),g=r.memoizedState,g!==null&&g.dehydrated!==null){if(r.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");C5()}return g=r.flags,g&65536?(r.flags=g&-65537|128,(r.mode&xg)!==Bg&&v6(r),r):null;case 19:return Jg(kr,r),null;case 4:return p(r),null;case 10:return V1(r.type,r),null;case 22:case 23:return gv(r),vA(r),g!==null&&Jg(t5,r),g=r.flags,g&65536?(r.flags=g&-65537|128,(r.mode&xg)!==Bg&&v6(r),r):null;case 24:return V1(ir,r),null;case 25:return null;default:return null}}function KG(g,r){switch(jb(r),r.tag){case 3:V1(ir,r),p(r);break;case 26:case 27:case 5:Pg(r);break;case 4:p(r);break;case 31:r.memoizedState!==null&&gv(r);break;case 13:gv(r);break;case 19:Jg(kr,r);break;case 10:V1(r.type,r);break;case 22:case 23:gv(r),vA(r),g!==null&&Jg(t5,r);break;case 24:V1(ir,r)}}function P1(g){return(g.mode&xg)!==Bg}function zG(g,r){P1(g)?(q1(),M6(r,g),A1()):M6(r,g)}function eA(g,r,v){P1(g)?(q1(),D4(v,g,r),A1()):D4(v,g,r)}function M6(g,r){try{var v=r.updateQueue,h=v!==null?v.lastEffect:null;if(h!==null){var O=h.next;v=O;do{if((v.tag&g)===g&&(h=void 0,(g&Z0)!==W2&&(uh=!0),h=bg(r,uu,v),(g&Z0)!==W2&&(uh=!1),h!==void 0&&typeof h!=="function")){var b=void 0;b=(v.tag&Av)!==0?"useLayoutEffect":(v.tag&Z0)!==0?"useInsertionEffect":"useEffect";var P=void 0;P=h===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof h.then==="function"?`

It looks like you wrote `+b+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+b+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+h,bg(r,function(M,Y){console.error("%s must not return anything besides a function, which is used for clean-up.%s",M,Y)},b,P)}v=v.next}while(v!==O)}}catch(M){wr(r,r.return,M)}}function D4(g,r,v){try{var h=r.updateQueue,O=h!==null?h.lastEffect:null;if(O!==null){var b=O.next;h=b;do{if((h.tag&g)===g){var P=h.inst,M=P.destroy;M!==void 0&&(P.destroy=void 0,(g&Z0)!==W2&&(uh=!0),O=r,bg(O,Fu,O,v,M),(g&Z0)!==W2&&(uh=!1))}h=h.next}while(h!==b)}}catch(Y){wr(r,r.return,Y)}}function $G(g,r){P1(g)?(q1(),M6(r,g),A1()):M6(r,g)}function nA(g,r,v){P1(g)?(q1(),D4(v,g,r),A1()):D4(v,g,r)}function UG(g){var r=g.updateQueue;if(r!==null){var v=g.stateNode;g.type.defaultProps||"ref"in g.memoizedProps||Kh||(v.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(g)||"instance"),v.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(g)||"instance"));try{bg(g,u9,r,v)}catch(h){wr(g,g.return,h)}}}function vU(g,r,v){return g.getSnapshotBeforeUpdate(r,v)}function wU(g,r){var{memoizedProps:v,memoizedState:h}=r;r=g.stateNode,g.type.defaultProps||"ref"in g.memoizedProps||Kh||(r.props!==g.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(g)||"instance"),r.state!==g.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(g)||"instance"));try{var O=V5(g.type,v),b=bg(g,vU,r,O,h);v=w7,b!==void 0||v.has(g.type)||(v.add(g.type),bg(g,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",D(g))})),r.__reactInternalSnapshotBeforeUpdate=b}catch(P){wr(g,g.return,P)}}function LG(g,r,v){v.props=V5(g.type,g.memoizedProps),v.state=g.memoizedState,P1(g)?(q1(),bg(g,UY,g,r,v),A1()):bg(g,UY,g,r,v)}function hU(g){var r=g.ref;if(r!==null){switch(g.tag){case 26:case 27:case 5:var v=g.stateNode;break;case 30:v=g.stateNode;break;default:v=g.stateNode}if(typeof r==="function")if(P1(g))try{q1(),g.refCleanup=r(v)}finally{A1()}else g.refCleanup=r(v);else typeof r==="string"?console.error("String refs are no longer supported."):r.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",D(g)),r.current=v}}function G6(g,r){try{bg(g,hU,g)}catch(v){wr(g,r,v)}}function W1(g,r){var{ref:v,refCleanup:h}=g;if(v!==null)if(typeof h==="function")try{if(P1(g))try{q1(),bg(g,h)}finally{A1(g)}else bg(g,h)}catch(O){wr(g,r,O)}finally{g.refCleanup=null,g=g.alternate,g!=null&&(g.refCleanup=null)}else if(typeof v==="function")try{if(P1(g))try{q1(),bg(g,v,null)}finally{A1(g)}else bg(g,v,null)}catch(O){wr(g,r,O)}else v.current=null}function uG(g,r,v,h){var O=g.memoizedProps,b=O.id,P=O.onCommit;O=O.onRender,r=r===null?"mount":"update",H2&&(r="nested-update"),typeof O==="function"&&O(b,r,g.actualDuration,g.treeBaseDuration,g.actualStartTime,v),typeof P==="function"&&P(b,r,h,v)}function HU(g,r,v,h){var O=g.memoizedProps;g=O.id,O=O.onPostCommit,r=r===null?"mount":"update",H2&&(r="nested-update"),typeof O==="function"&&O(g,r,h,v)}function FG(g){var{type:r,memoizedProps:v,stateNode:h}=g;try{bg(g,NU,h,r,v,g)}catch(O){wr(g,g.return,O)}}function fA(g,r,v){try{bg(g,lU,g.stateNode,g.type,v,r,g)}catch(h){wr(g,g.return,h)}}function BG(g){return g.tag===5||g.tag===3||g.tag===26||g.tag===27&&Sw(g.type)||g.tag===4}function cA(g){g:for(;;){for(;g.sibling===null;){if(g.return===null||BG(g.return))return null;g=g.return}g.sibling.return=g.return;for(g=g.sibling;g.tag!==5&&g.tag!==6&&g.tag!==18;){if(g.tag===27&&Sw(g.type))continue g;if(g.flags&2)continue g;if(g.child===null||g.tag===4)continue g;else g.child.return=g,g=g.child}if(!(g.flags&2))return g.stateNode}}function tA(g,r,v){var h=g.tag;if(h===5||h===6)g=g.stateNode,r?(CR(v),(v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v).insertBefore(g,r)):(CR(v),r=v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v,r.appendChild(g),v=v._reactRootContainer,v!==null&&v!==void 0||r.onclick!==null||(r.onclick=m1));else if(h!==4&&(h===27&&Sw(g.type)&&(v=g.stateNode,r=null),g=g.child,g!==null))for(tA(g,r,v),g=g.sibling;g!==null;)tA(g,r,v),g=g.sibling}function KO(g,r,v){var h=g.tag;if(h===5||h===6)g=g.stateNode,r?v.insertBefore(g,r):v.appendChild(g);else if(h!==4&&(h===27&&Sw(g.type)&&(v=g.stateNode),g=g.child,g!==null))for(KO(g,r,v),g=g.sibling;g!==null;)KO(g,r,v),g=g.sibling}function OU(g){for(var r,v=g.return;v!==null;){if(BG(v)){r=v;break}v=v.return}if(r==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(r.tag){case 27:r=r.stateNode,v=cA(g),KO(g,v,r);break;case 5:v=r.stateNode,r.flags&32&&(TR(v),r.flags&=-33),r=cA(g),KO(g,r,v);break;case 3:case 4:r=r.stateNode.containerInfo,v=cA(g),tA(g,v,r);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function oG(g){var{stateNode:r,memoizedProps:v}=g;try{bg(g,fU,g.type,v,r,g)}catch(h){wr(g,g.return,h)}}function IG(g,r){return r.tag===31?(r=r.memoizedState,g.memoizedState!==null&&r===null):r.tag===13?(g=g.memoizedState,r=r.memoizedState,g!==null&&g.dehydrated!==null&&(r===null||r.dehydrated===null)):r.tag===3?g.memoizedState.isDehydrated&&(r.flags&256)===0:!1}function bU(g,r){if(g=g.containerInfo,cP=V2,g=iM(g),Tb(g)){if("selectionStart"in g)var v={start:g.selectionStart,end:g.selectionEnd};else g:{v=(v=g.ownerDocument)&&v.defaultView||window;var h=v.getSelection&&v.getSelection();if(h&&h.rangeCount!==0){v=h.anchorNode;var{anchorOffset:O,focusNode:b}=h;h=h.focusOffset;try{v.nodeType,b.nodeType}catch(gg){v=null;break g}var P=0,M=-1,Y=-1,Q=0,N=0,Z=g,F=null;r:for(;;){for(var S;;){if(Z!==v||O!==0&&Z.nodeType!==3||(M=P+O),Z!==b||h!==0&&Z.nodeType!==3||(Y=P+h),Z.nodeType===3&&(P+=Z.nodeValue.length),(S=Z.firstChild)===null)break;F=Z,Z=S}for(;;){if(Z===g)break r;if(F===v&&++Q===O&&(M=P),F===b&&++N===h&&(Y=P),(S=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=S}v=M===-1||Y===-1?null:{start:M,end:Y}}else v=null}v=v||{start:0,end:0}}else v=null;tP={focusedElem:g,selectionRange:v},V2=!1;for(H0=r;H0!==null;)if(r=H0,g=r.child,(r.subtreeFlags&1028)!==0&&g!==null)g.return=r,H0=g;else for(;H0!==null;){switch(g=r=H0,v=g.alternate,O=g.flags,g.tag){case 0:if((O&4)!==0&&(g=g.updateQueue,g=g!==null?g.events:null,g!==null))for(v=0;v<g.length;v++)O=g[v],O.ref.impl=O.nextImpl;break;case 11:case 15:break;case 1:(O&1024)!==0&&v!==null&&wU(g,v);break;case 3:if((O&1024)!==0){if(g=g.stateNode.containerInfo,v=g.nodeType,v===9)Xq(g);else if(v===1)switch(g.nodeName){case"HEAD":case"HTML":case"BODY":Xq(g);break;default:g.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((O&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(g=r.sibling,g!==null){g.return=r.return,H0=g;break}H0=r.return}}function NG(g,r,v){var h=a0(),O=h1(),b=O1(),P=b1(),M=v.flags;switch(v.tag){case 0:case 11:case 15:M1(g,v),M&4&&zG(v,Av|Iv);break;case 1:if(M1(g,v),M&4)if(g=v.stateNode,r===null)v.type.defaultProps||"ref"in v.memoizedProps||Kh||(g.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(v)||"instance"),g.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(v)||"instance")),P1(v)?(q1(),bg(v,YP,v,g),A1()):bg(v,YP,v,g);else{var Y=V5(v.type,r.memoizedProps);r=r.memoizedState,v.type.defaultProps||"ref"in v.memoizedProps||Kh||(g.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(v)||"instance"),g.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(v)||"instance")),P1(v)?(q1(),bg(v,KY,v,g,Y,r,g.__reactInternalSnapshotBeforeUpdate),A1()):bg(v,KY,v,g,Y,r,g.__reactInternalSnapshotBeforeUpdate)}M&64&&UG(v),M&512&&G6(v,v.return);break;case 3:if(r=E1(),M1(g,v),M&64&&(M=v.updateQueue,M!==null)){if(Y=null,v.child!==null)switch(v.child.tag){case 27:case 5:Y=v.child.stateNode;break;case 1:Y=v.child.stateNode}try{bg(v,u9,M,Y)}catch(N){wr(v,v.return,N)}}g.effectDuration+=nH(r);break;case 27:r===null&&M&4&&oG(v);case 26:case 5:if(M1(g,v),r===null){if(M&4)FG(v);else if(M&64){g=v.type,r=v.memoizedProps,Y=v.stateNode;try{bg(v,ZU,Y,g,r,v)}catch(N){wr(v,v.return,N)}}}M&512&&G6(v,v.return);break;case 12:if(M&4){M=E1(),M1(g,v),g=v.stateNode,g.effectDuration+=r6(M);try{bg(v,uG,v,r,iw,g.effectDuration)}catch(N){wr(v,v.return,N)}}else M1(g,v);break;case 31:M1(g,v),M&4&&TG(g,v);break;case 13:M1(g,v),M&4&&CG(g,v),M&64&&(g=v.memoizedState,g!==null&&(g=g.dehydrated,g!==null&&(M=YU.bind(null,v),jU(g,M))));break;case 22:if(M=v.memoizedState!==null||vw,!M){r=r!==null&&r.memoizedState!==null||cr,Y=vw;var Q=cr;vw=M,(cr=r)&&!Q?(G1(g,v,(v.subtreeFlags&8772)!==0),(v.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&mH(v,Ug,ug)):M1(g,v),vw=Y,cr=Q}break;case 30:break;default:M1(g,v)}(v.mode&xg)!==Bg&&0<=Ug&&0<=ug&&((Nr||0.05<Fr)&&v1(v,Ug,ug,Fr,Lr),v.alternate===null&&v.return!==null&&v.return.alternate!==null&&0.05<ug-Ug&&(IG(v.return.alternate,v.return)||r1(v,Ug,ug,"Mount"))),s0(h),H1(O),Lr=b,Nr=P}function ZG(g){var r=g.alternate;r!==null&&(g.alternate=null,ZG(r)),g.child=null,g.deletions=null,g.sibling=null,g.tag===5&&(r=g.stateNode,r!==null&&hg(r)),g.stateNode=null,g._debugOwner=null,g.return=null,g.dependencies=null,g.memoizedProps=null,g.memoizedState=null,g.pendingProps=null,g.stateNode=null,g.updateQueue=null}function j1(g,r,v){for(v=v.child;v!==null;)lG(g,r,v),v=v.sibling}function lG(g,r,v){if($0&&typeof $0.onCommitFiberUnmount==="function")try{$0.onCommitFiberUnmount(t4,v)}catch(Q){K1||(K1=!0,console.error("React instrumentation encountered an error: %o",Q))}var h=a0(),O=h1(),b=O1(),P=b1();switch(v.tag){case 26:cr||W1(v,r),j1(g,r,v),v.memoizedState?v.memoizedState.count--:v.stateNode&&(g=v.stateNode,g.parentNode.removeChild(g));break;case 27:cr||W1(v,r);var M=tr,Y=j0;Sw(v.type)&&(tr=v.stateNode,j0=!1),j1(g,r,v),bg(v,U6,v.stateNode),tr=M,j0=Y;break;case 5:cr||W1(v,r);case 6:if(M=tr,Y=j0,tr=null,j1(g,r,v),tr=M,j0=Y,tr!==null)if(j0)try{bg(v,SU,tr,v.stateNode)}catch(Q){wr(v,r,Q)}else try{bg(v,CU,tr,v.stateNode)}catch(Q){wr(v,r,Q)}break;case 18:tr!==null&&(j0?(g=tr,SR(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g,v.stateNode),e4(g)):SR(tr,v.stateNode));break;case 4:M=tr,Y=j0,tr=v.stateNode.containerInfo,j0=!0,j1(g,r,v),tr=M,j0=Y;break;case 0:case 11:case 14:case 15:D4(Z0,v,r),cr||eA(v,r,Av),j1(g,r,v);break;case 1:cr||(W1(v,r),M=v.stateNode,typeof M.componentWillUnmount==="function"&&LG(v,r,M)),j1(g,r,v);break;case 21:j1(g,r,v);break;case 22:cr=(M=cr)||v.memoizedState!==null,j1(g,r,v),cr=M;break;default:j1(g,r,v)}(v.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(v,Ug,ug,Fr,Lr),s0(h),H1(O),Lr=b,Nr=P}function TG(g,r){if(r.memoizedState===null&&(g=r.alternate,g!==null&&(g=g.memoizedState,g!==null))){g=g.dehydrated;try{bg(r,eU,g)}catch(v){wr(r,r.return,v)}}}function CG(g,r){if(r.memoizedState===null&&(g=r.alternate,g!==null&&(g=g.memoizedState,g!==null&&(g=g.dehydrated,g!==null))))try{bg(r,nU,g)}catch(v){wr(r,r.return,v)}}function AU(g){switch(g.tag){case 31:case 13:case 19:var r=g.stateNode;return r===null&&(r=g.stateNode=new h7),r;case 22:return g=g.stateNode,r=g._retryCache,r===null&&(r=g._retryCache=new h7),r;default:throw Error("Unexpected Suspense handler tag ("+g.tag+"). This is a bug in React.")}}function zO(g,r){var v=AU(g);r.forEach(function(h){if(!v.has(h)){if(v.add(h),z1)if(zh!==null&&$h!==null)J6($h,zh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var O=JU.bind(null,g,h);h.then(O,O)}})}function _0(g,r){var v=r.deletions;if(v!==null)for(var h=0;h<v.length;h++){var O=g,b=r,P=v[h],M=a0(),Y=b;g:for(;Y!==null;){switch(Y.tag){case 27:if(Sw(Y.type)){tr=Y.stateNode,j0=!1;break g}break;case 5:tr=Y.stateNode,j0=!1;break g;case 3:case 4:tr=Y.stateNode.containerInfo,j0=!0;break g}Y=Y.return}if(tr===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");lG(O,b,P),tr=null,j0=!1,(P.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&r1(P,Ug,ug,"Unmount"),s0(M),O=P,b=O.alternate,b!==null&&(b.return=null),O.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)SG(r,g),r=r.sibling}function SG(g,r){var v=a0(),h=h1(),O=O1(),b=b1(),P=g.alternate,M=g.flags;switch(g.tag){case 0:case 11:case 14:case 15:_0(r,g),y0(g),M&4&&(D4(Z0|Iv,g,g.return),M6(Z0|Iv,g),eA(g,g.return,Av|Iv));break;case 1:if(_0(r,g),y0(g),M&512&&(cr||P===null||W1(P,P.return)),M&64&&vw&&(M=g.updateQueue,M!==null&&(P=M.callbacks,P!==null))){var Y=M.shared.hiddenCallbacks;M.shared.hiddenCallbacks=Y===null?P:Y.concat(P)}break;case 26:if(Y=_v,_0(r,g),y0(g),M&512&&(cr||P===null||W1(P,P.return)),M&4){var Q=P!==null?P.memoizedState:null;if(M=g.memoizedState,P===null)if(M===null)if(g.stateNode===null){g:{M=g.type,P=g.memoizedProps,Y=Y.ownerDocument||Y;r:switch(M){case"title":if(Q=Y.getElementsByTagName("title")[0],!Q||Q[N6]||Q[G0]||Q.namespaceURI===d4||Q.hasAttribute("itemprop"))Q=Y.createElement(M),Y.head.insertBefore(Q,Y.querySelector("head > title"));M0(Q,M,P),Q[G0]=g,$g(Q),M=Q;break g;case"link":var N=eR("link","href",Y).get(M+(P.href||""));if(N){for(var Z=0;Z<N.length;Z++)if(Q=N[Z],Q.getAttribute("href")===(P.href==null||P.href===""?null:P.href)&&Q.getAttribute("rel")===(P.rel==null?null:P.rel)&&Q.getAttribute("title")===(P.title==null?null:P.title)&&Q.getAttribute("crossorigin")===(P.crossOrigin==null?null:P.crossOrigin)){N.splice(Z,1);break r}}Q=Y.createElement(M),M0(Q,M,P),Y.head.appendChild(Q);break;case"meta":if(N=eR("meta","content",Y).get(M+(P.content||""))){for(Z=0;Z<N.length;Z++)if(Q=N[Z],qr(P.content,"content"),Q.getAttribute("content")===(P.content==null?null:""+P.content)&&Q.getAttribute("name")===(P.name==null?null:P.name)&&Q.getAttribute("property")===(P.property==null?null:P.property)&&Q.getAttribute("http-equiv")===(P.httpEquiv==null?null:P.httpEquiv)&&Q.getAttribute("charset")===(P.charSet==null?null:P.charSet)){N.splice(Z,1);break r}}Q=Y.createElement(M),M0(Q,M,P),Y.head.appendChild(Q);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+M+'". This is a bug in React.')}Q[G0]=g,$g(Q),M=Q}g.stateNode=M}else nR(Y,g.type,g.stateNode);else g.stateNode=iR(Y,M,g.memoizedProps);else Q!==M?(Q===null?P.stateNode!==null&&(P=P.stateNode,P.parentNode.removeChild(P)):Q.count--,M===null?nR(Y,g.type,g.stateNode):iR(Y,M,g.memoizedProps)):M===null&&g.stateNode!==null&&fA(g,g.memoizedProps,P.memoizedProps)}break;case 27:_0(r,g),y0(g),M&512&&(cr||P===null||W1(P,P.return)),P!==null&&M&4&&fA(g,g.memoizedProps,P.memoizedProps);break;case 5:if(_0(r,g),y0(g),M&512&&(cr||P===null||W1(P,P.return)),g.flags&32){Y=g.stateNode;try{bg(g,TR,Y)}catch(qg){wr(g,g.return,qg)}}M&4&&g.stateNode!=null&&(Y=g.memoizedProps,fA(g,Y,P!==null?P.memoizedProps:Y)),M&1024&&(NP=!0,g.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(_0(r,g),y0(g),M&4){if(g.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");M=g.memoizedProps,P=P!==null?P.memoizedProps:M,Y=g.stateNode;try{bg(g,TU,Y,P,M)}catch(qg){wr(g,g.return,qg)}}break;case 3:if(Y=E1(),m2=null,Q=_v,_v=IO(r.containerInfo),_0(r,g),_v=Q,y0(g),M&4&&P!==null&&P.memoizedState.isDehydrated)try{bg(g,iU,r.containerInfo)}catch(qg){wr(g,g.return,qg)}NP&&(NP=!1,xG(g)),r.effectDuration+=nH(Y);break;case 4:M=_v,_v=IO(g.stateNode.containerInfo),_0(r,g),y0(g),_v=M;break;case 12:M=E1(),_0(r,g),y0(g),g.stateNode.effectDuration+=r6(M);break;case 31:_0(r,g),y0(g),M&4&&(M=g.updateQueue,M!==null&&(g.updateQueue=null,zO(g,M)));break;case 13:_0(r,g),y0(g),g.child.flags&8192&&g.memoizedState!==null!==(P!==null&&P.memoizedState!==null)&&($2=w0()),M&4&&(M=g.updateQueue,M!==null&&(g.updateQueue=null,zO(g,M)));break;case 22:Y=g.memoizedState!==null;var F=P!==null&&P.memoizedState!==null,S=vw,gg=cr;if(vw=S||Y,cr=gg||F,_0(r,g),cr=gg,vw=S,F&&!Y&&!S&&!gg&&(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&mH(g,Ug,ug),y0(g),M&8192)g:for(r=g.stateNode,r._visibility=Y?r._visibility&~k6:r._visibility|k6,!Y||P===null||F||vw||cr||(E5(g),(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&r1(g,Ug,ug,"Disconnect")),P=null,r=g;;){if(r.tag===5||r.tag===26){if(P===null){F=P=r;try{Q=F.stateNode,Y?bg(F,mU,Q):bg(F,VU,F.stateNode,F.memoizedProps)}catch(qg){wr(F,F.return,qg)}}}else if(r.tag===6){if(P===null){F=r;try{N=F.stateNode,Y?bg(F,DU,N):bg(F,EU,N,F.memoizedProps)}catch(qg){wr(F,F.return,qg)}}}else if(r.tag===18){if(P===null){F=r;try{Z=F.stateNode,Y?bg(F,xU,Z):bg(F,kU,F.stateNode)}catch(qg){wr(F,F.return,qg)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===g)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break g;for(;r.sibling===null;){if(r.return===null||r.return===g)break g;P===r&&(P=null),r=r.return}P===r&&(P=null),r.sibling.return=r.return,r=r.sibling}M&4&&(M=g.updateQueue,M!==null&&(P=M.retryQueue,P!==null&&(M.retryQueue=null,zO(g,P))));break;case 19:_0(r,g),y0(g),M&4&&(M=g.updateQueue,M!==null&&(g.updateQueue=null,zO(g,M)));break;case 30:break;case 21:break;default:_0(r,g),y0(g)}(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&((Nr||0.05<Fr)&&v1(g,Ug,ug,Fr,Lr),g.alternate===null&&g.return!==null&&g.return.alternate!==null&&0.05<ug-Ug&&(IG(g.return.alternate,g.return)||r1(g,Ug,ug,"Mount"))),s0(v),H1(h),Lr=O,Nr=b}function y0(g){var r=g.flags;if(r&2){try{bg(g,OU,g)}catch(v){wr(g,g.return,v)}g.flags&=-3}r&4096&&(g.flags&=-4097)}function xG(g){if(g.subtreeFlags&1024)for(g=g.child;g!==null;){var r=g;xG(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),g=g.sibling}}function M1(g,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)NG(g,r.alternate,r),r=r.sibling}function mG(g){var r=a0(),v=h1(),h=O1(),O=b1();switch(g.tag){case 0:case 11:case 14:case 15:eA(g,g.return,Av),E5(g);break;case 1:W1(g,g.return);var b=g.stateNode;typeof b.componentWillUnmount==="function"&&LG(g,g.return,b),E5(g);break;case 27:bg(g,U6,g.stateNode);case 26:case 5:W1(g,g.return),E5(g);break;case 22:g.memoizedState===null&&E5(g);break;case 30:E5(g);break;default:E5(g)}(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(g,Ug,ug,Fr,Lr),s0(r),H1(v),Lr=h,Nr=O}function E5(g){for(g=g.child;g!==null;)mG(g),g=g.sibling}function DG(g,r,v,h){var O=a0(),b=h1(),P=O1(),M=b1(),Y=v.flags;switch(v.tag){case 0:case 11:case 15:G1(g,v,h),zG(v,Av);break;case 1:if(G1(g,v,h),r=v.stateNode,typeof r.componentDidMount==="function"&&bg(v,YP,v,r),r=v.updateQueue,r!==null){g=v.stateNode;try{bg(v,i$,r,g)}catch(Q){wr(v,v.return,Q)}}h&&Y&64&&UG(v),G6(v,v.return);break;case 27:oG(v);case 26:case 5:G1(g,v,h),h&&r===null&&Y&4&&FG(v),G6(v,v.return);break;case 12:if(h&&Y&4){Y=E1(),G1(g,v,h),h=v.stateNode,h.effectDuration+=r6(Y);try{bg(v,uG,v,r,iw,h.effectDuration)}catch(Q){wr(v,v.return,Q)}}else G1(g,v,h);break;case 31:G1(g,v,h),h&&Y&4&&TG(g,v);break;case 13:G1(g,v,h),h&&Y&4&&CG(g,v);break;case 22:v.memoizedState===null&&G1(g,v,h),G6(v,v.return);break;case 30:break;default:G1(g,v,h)}(v.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(v,Ug,ug,Fr,Lr),s0(O),H1(b),Lr=P,Nr=M}function G1(g,r,v){v=v&&(r.subtreeFlags&8772)!==0;for(r=r.child;r!==null;)DG(g,r.alternate,r,v),r=r.sibling}function pA(g,r){var v=null;g!==null&&g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(v=g.memoizedState.cachePool.pool),g=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(g=r.memoizedState.cachePool.pool),g!==v&&(g!=null&&x5(g),v!=null&&g6(v))}function dA(g,r){g=null,r.alternate!==null&&(g=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==g&&(x5(r),g!=null&&g6(g))}function xv(g,r,v,h,O){if(r.subtreeFlags&10256||r.actualDuration!==0&&(r.alternate===null||r.alternate.child!==r.child))for(r=r.child;r!==null;){var b=r.sibling;kG(g,r,v,h,b!==null?b.actualStartTime:O),r=b}}function kG(g,r,v,h,O){var b=a0(),P=h1(),M=O1(),Y=b1(),Q=Ew,N=r.flags;switch(r.tag){case 0:case 11:case 15:(r.mode&xg)!==Bg&&0<r.actualStartTime&&(r.flags&1)!==0&&DH(r,r.actualStartTime,O,sr,v),xv(g,r,v,h,O),N&2048&&$G(r,l0|Iv);break;case 1:(r.mode&xg)!==Bg&&0<r.actualStartTime&&((r.flags&128)!==0?Sb(r,r.actualStartTime,O,[]):(r.flags&1)!==0&&DH(r,r.actualStartTime,O,sr,v)),xv(g,r,v,h,O);break;case 3:var Z=E1(),F=sr;sr=r.alternate!==null&&r.alternate.memoizedState.isDehydrated&&(r.flags&256)===0,xv(g,r,v,h,O),sr=F,N&2048&&(v=null,r.alternate!==null&&(v=r.alternate.memoizedState.cache),h=r.memoizedState.cache,h!==v&&(x5(h),v!=null&&g6(v))),g.passiveEffectDuration+=nH(Z);break;case 12:if(N&2048){N=E1(),xv(g,r,v,h,O),g=r.stateNode,g.passiveEffectDuration+=r6(N);try{bg(r,HU,r,r.alternate,iw,g.passiveEffectDuration)}catch(S){wr(r,r.return,S)}}else xv(g,r,v,h,O);break;case 31:N=sr,Z=r.alternate!==null?r.alternate.memoizedState:null,F=r.memoizedState,Z!==null&&F===null?(F=r.deletions,F!==null&&0<F.length&&F[0].tag===18?(sr=!1,Z=Z.hydrationErrors,Z!==null&&Sb(r,r.actualStartTime,O,Z)):sr=!0):sr=!1,xv(g,r,v,h,O),sr=N;break;case 13:N=sr,Z=r.alternate!==null?r.alternate.memoizedState:null,F=r.memoizedState,Z===null||Z.dehydrated===null||F!==null&&F.dehydrated!==null?sr=!1:(F=r.deletions,F!==null&&0<F.length&&F[0].tag===18?(sr=!1,Z=Z.hydrationErrors,Z!==null&&Sb(r,r.actualStartTime,O,Z)):sr=!0),xv(g,r,v,h,O),sr=N;break;case 23:break;case 22:F=r.stateNode,Z=r.alternate,r.memoizedState!==null?F._visibility&n1?xv(g,r,v,h,O):R6(g,r,v,h,O):F._visibility&n1?xv(g,r,v,h,O):(F._visibility|=n1,k4(g,r,v,h,(r.subtreeFlags&10256)!==0||r.actualDuration!==0&&(r.alternate===null||r.alternate.child!==r.child),O),(r.mode&xg)===Bg||sr||(g=r.actualStartTime,0<=g&&0.05<O-g&&mH(r,g,O),0<=Ug&&0<=ug&&0.05<ug-Ug&&mH(r,Ug,ug))),N&2048&&pA(Z,r);break;case 24:xv(g,r,v,h,O),N&2048&&dA(r.alternate,r);break;default:xv(g,r,v,h,O)}if((r.mode&xg)!==Bg){if(g=!sr&&r.alternate===null&&r.return!==null&&r.return.alternate!==null)v=r.actualStartTime,0<=v&&0.05<O-v&&r1(r,v,O,"Mount");0<=Ug&&0<=ug&&((Nr||0.05<Fr)&&v1(r,Ug,ug,Fr,Lr),g&&0.05<ug-Ug&&r1(r,Ug,ug,"Mount"))}s0(b),H1(P),Lr=M,Nr=Y,Ew=Q}function k4(g,r,v,h,O,b){O=O&&((r.subtreeFlags&10256)!==0||r.actualDuration!==0&&(r.alternate===null||r.alternate.child!==r.child));for(r=r.child;r!==null;){var P=r.sibling;VG(g,r,v,h,O,P!==null?P.actualStartTime:b),r=P}}function VG(g,r,v,h,O,b){var P=a0(),M=h1(),Y=O1(),Q=b1(),N=Ew;O&&(r.mode&xg)!==Bg&&0<r.actualStartTime&&(r.flags&1)!==0&&DH(r,r.actualStartTime,b,sr,v);var Z=r.flags;switch(r.tag){case 0:case 11:case 15:k4(g,r,v,h,O,b),$G(r,l0);break;case 23:break;case 22:var F=r.stateNode;r.memoizedState!==null?F._visibility&n1?k4(g,r,v,h,O,b):R6(g,r,v,h,b):(F._visibility|=n1,k4(g,r,v,h,O,b)),O&&Z&2048&&pA(r.alternate,r);break;case 24:k4(g,r,v,h,O,b),O&&Z&2048&&dA(r.alternate,r);break;default:k4(g,r,v,h,O,b)}(r.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(r,Ug,ug,Fr,Lr),s0(P),H1(M),Lr=Y,Nr=Q,Ew=N}function R6(g,r,v,h,O){if(r.subtreeFlags&10256||r.actualDuration!==0&&(r.alternate===null||r.alternate.child!==r.child))for(var b=r.child;b!==null;){r=b.sibling;var P=g,M=v,Y=h,Q=r!==null?r.actualStartTime:O,N=Ew;(b.mode&xg)!==Bg&&0<b.actualStartTime&&(b.flags&1)!==0&&DH(b,b.actualStartTime,Q,sr,M);var Z=b.flags;switch(b.tag){case 22:R6(P,b,M,Y,Q),Z&2048&&pA(b.alternate,b);break;case 24:R6(P,b,M,Y,Q),Z&2048&&dA(b.alternate,b);break;default:R6(P,b,M,Y,Q)}Ew=N,b=r}}function V4(g,r,v){if(g.subtreeFlags&h8)for(g=g.child;g!==null;)EG(g,r,v),g=g.sibling}function EG(g,r,v){switch(g.tag){case 26:V4(g,r,v),g.flags&h8&&g.memoizedState!==null&&pU(v,_v,g.memoizedState,g.memoizedProps);break;case 5:V4(g,r,v);break;case 3:case 4:var h=_v;_v=IO(g.stateNode.containerInfo),V4(g,r,v),_v=h;break;case 22:g.memoizedState===null&&(h=g.alternate,h!==null&&h.memoizedState!==null?(h=h8,h8=16777216,V4(g,r,v),h8=h):V4(g,r,v));break;default:V4(g,r,v)}}function _G(g){var r=g.alternate;if(r!==null&&(g=r.child,g!==null)){r.child=null;do r=g.sibling,g.sibling=null,g=r;while(g!==null)}}function X6(g){var r=g.deletions;if((g.flags&16)!==0){if(r!==null)for(var v=0;v<r.length;v++){var h=r[v],O=a0();H0=h,iG(h,g),(h.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&r1(h,Ug,ug,"Unmount"),s0(O)}_G(g)}if(g.subtreeFlags&10256)for(g=g.child;g!==null;)yG(g),g=g.sibling}function yG(g){var r=a0(),v=h1(),h=O1(),O=b1();switch(g.tag){case 0:case 11:case 15:X6(g),g.flags&2048&&nA(g,g.return,l0|Iv);break;case 3:var b=E1();X6(g),g.stateNode.passiveEffectDuration+=nH(b);break;case 12:b=E1(),X6(g),g.stateNode.passiveEffectDuration+=r6(b);break;case 22:b=g.stateNode,g.memoizedState!==null&&b._visibility&n1&&(g.return===null||g.return.tag!==13)?(b._visibility&=~n1,$O(g),(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&r1(g,Ug,ug,"Disconnect")):X6(g);break;default:X6(g)}(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(g,Ug,ug,Fr,Lr),s0(r),H1(v),Nr=O,Lr=h}function $O(g){var r=g.deletions;if((g.flags&16)!==0){if(r!==null)for(var v=0;v<r.length;v++){var h=r[v],O=a0();H0=h,iG(h,g),(h.mode&xg)!==Bg&&0<=Ug&&0<=ug&&0.05<ug-Ug&&r1(h,Ug,ug,"Unmount"),s0(O)}_G(g)}for(g=g.child;g!==null;)jG(g),g=g.sibling}function jG(g){var r=a0(),v=h1(),h=O1(),O=b1();switch(g.tag){case 0:case 11:case 15:nA(g,g.return,l0),$O(g);break;case 22:var b=g.stateNode;b._visibility&n1&&(b._visibility&=~n1,$O(g));break;default:$O(g)}(g.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(g,Ug,ug,Fr,Lr),s0(r),H1(v),Nr=O,Lr=h}function iG(g,r){for(;H0!==null;){var v=H0,h=v,O=r,b=a0(),P=h1(),M=O1(),Y=b1();switch(h.tag){case 0:case 11:case 15:nA(h,O,l0);break;case 23:case 22:h.memoizedState!==null&&h.memoizedState.cachePool!==null&&(O=h.memoizedState.cachePool.pool,O!=null&&x5(O));break;case 24:g6(h.memoizedState.cache)}if((h.mode&xg)!==Bg&&0<=Ug&&0<=ug&&(Nr||0.05<Fr)&&v1(h,Ug,ug,Fr,Lr),s0(b),H1(P),Nr=Y,Lr=M,h=v.child,h!==null)h.return=v,H0=h;else g:for(v=g;H0!==null;){if(h=H0,b=h.sibling,P=h.return,ZG(h),h===v){H0=null;break g}if(b!==null){b.return=P,H0=b;break g}H0=P}}}function qU(){Zu.forEach(function(g){return g()})}function eG(){var g=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return g||m.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),g}function rv(g){if((ag&g0)!==O0&&Dg!==0)return Dg&-Dg;var r=m.T;return r!==null?(r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(g),Hq()):l()}function nG(){if(e0===0)if((Dg&536870912)===0||fg){var g=EO;EO<<=1,(EO&3932160)===0&&(EO=262144),e0=g}else e0=536870912;return g=bv.current,g!==null&&(g.flags|=32),e0}function Ir(g,r,v){if(uh&&console.error("useInsertionEffect must not schedule updates."),EP&&(F2=!0),g===Xr&&(br===r4||br===v4)||g.cancelPendingCommit!==null)_4(g,0),Tw(g,Dg,e0,!1);if(zw(g,v),(ag&g0)!==O0&&g===Xr){if(Q1)switch(r.tag){case 0:case 11:case 15:g=Eg&&D(Eg)||"Unknown",K7.has(g)||(K7.add(g),r=D(r)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",r,g,g));break;case 1:Q7||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Q7=!0)}}else z1&&jh(g,r,v),KU(r),g===Xr&&((ag&g0)===O0&&(sw|=v),Br===pw&&Tw(g,Dg,e0,!1)),R1(g)}function fG(g,r,v){if((ag&(g0|qv))!==O0)throw Error("Should not already be working.");if(Dg!==0&&Eg!==null){var h=Eg,O=w0();switch(WY){case b8:case r4:var b=i6;Kr&&((h=h._debugTask)?h.run(console.timeStamp.bind(console,"Suspended",b,O,zv,void 0,"primary-light")):console.timeStamp("Suspended",b,O,zv,void 0,"primary-light"));break;case v4:b=i6,Kr&&((h=h._debugTask)?h.run(console.timeStamp.bind(console,"Action",b,O,zv,void 0,"primary-light")):console.timeStamp("Action",b,O,zv,void 0,"primary-light"));break;default:Kr&&(h=O-i6,3>h||console.timeStamp("Blocked",i6,O,zv,void 0,5>h?"primary-light":10>h?"primary":100>h?"primary-dark":"error"))}}b=(v=!v&&(r&127)===0&&(r&g.expiredLanes)===0||U5(g,r))?WU(g,r):sA(g,r,!0);var P=v;do{if(b===ww){Uh&&!v&&Tw(g,r,0,!1),r=br,i6=er(),WY=r;break}else{if(h=w0(),O=g.current.alternate,P&&!PU(O)){p0(r),O=h0,b=h,!Kr||b<=O||(mr?mr.run(console.timeStamp.bind(console,"Teared Render",O,b,ig,jg,"error")):console.timeStamp("Teared Render",O,b,ig,jg,"error")),_5(r,h),b=sA(g,r,!1),P=!1;continue}if(b===g4){if(P=r,g.errorRecoveryDisabledLanes&P)var M=0;else M=g.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){p0(r),xb(h0,h,r,mr),_5(r,h),r=M;g:{h=g,b=P,P=q8;var Y=h.current.memoizedState.isDehydrated;if(Y&&(_4(h,M).flags|=256),M=sA(h,M,!1),M!==g4){if(TP&&!Y){h.errorRecoveryDisabledLanes|=b,sw|=b,b=pw;break g}h=T0,T0=P,h!==null&&(T0===null?T0=h:T0.push.apply(T0,h))}b=M}if(P=!1,b!==g4)continue;else h=w0()}}if(b===O8){p0(r),xb(h0,h,r,mr),_5(r,h),_4(g,0),Tw(g,r,0,!0);break}g:{switch(v=g,b){case ww:case O8:throw Error("Root did not complete. This is a bug in React.");case pw:if((r&4194048)!==r)break;case J2:p0(r),fM(h0,h,r,mr),_5(r,h),O=r,(O&127)!==0?v2=h:(O&4194048)!==0&&(w2=h),Tw(v,r,e0,!dw);break g;case g4:T0=null;break;case Y2:case H7:break;default:throw Error("Unknown root exit status.")}if(m.actQueue!==null)gq(v,O,r,T0,P8,z2,e0,sw,w4,b,null,null,h0,h);else{if((r&62914560)===r&&(P=$2+A7-w0(),10<P)){if(Tw(v,r,e0,!dw),$5(v,0,!0)!==0)break g;yv=r,v.timeoutHandle=o7(cG.bind(null,v,O,T0,P8,z2,r,e0,sw,w4,dw,b,"Throttled",h0,h),P);break g}cG(v,O,T0,P8,z2,r,e0,sw,w4,dw,b,null,h0,h)}}}break}while(1);R1(g)}function cG(g,r,v,h,O,b,P,M,Y,Q,N,Z,F,S){g.timeoutHandle=A4;var gg=r.subtreeFlags,qg=null;if(gg&8192||(gg&16785408)===16785408){if(qg={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:m1},EG(r,b,qg),gg=(b&62914560)===b?$2-w0():(b&4194048)===b?b7-w0():0,gg=dU(qg,gg),gg!==null){yv=b,g.cancelPendingCommit=gg(gq.bind(null,g,r,b,v,h,O,P,M,Y,N,qg,qg.waitingForViewTransition?"Waiting for the previous Animation":0<qg.count?0<qg.imgCount?"Suspended on CSS and Images":"Suspended on CSS":qg.imgCount===1?"Suspended on an Image":0<qg.imgCount?"Suspended on Images":null,F,S)),Tw(g,b,P,!Q);return}}gq(g,r,b,v,h,O,P,M,Y,N,qg,Z,F,S)}function PU(g){for(var r=g;;){var v=r.tag;if((v===0||v===11||v===15)&&r.flags&16384&&(v=r.updateQueue,v!==null&&(v=v.stores,v!==null)))for(var h=0;h<v.length;h++){var O=v[h],b=O.getSnapshot;O=O.value;try{if(!I0(b(),O))return!1}catch(P){return!1}}if(v=r.child,r.subtreeFlags&16384&&v!==null)v.return=r,r=v;else{if(r===g)break;for(;r.sibling===null;){if(r.return===null||r.return===g)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tw(g,r,v,h){r&=~CP,r&=~sw,g.suspendedLanes|=r,g.pingedLanes&=~r,h&&(g.warmLanes|=r),h=g.expirationTimes;for(var O=r;0<O;){var b=31-F0(O),P=1<<b;h[b]=-1,O&=~P}v!==0&&L5(g,v,r)}function E4(){return(ag&(g0|qv))===O0?(Q6(0,!1),!1):!0}function aA(){if(Eg!==null){if(br===i0)var g=Eg.return;else g=Eg,jH(),qA(g),Gh=null,s6=0,g=Eg;for(;g!==null;)KG(g.alternate,g),g=g.return;Eg=null}}function _5(g,r){(g&127)!==0&&(ew=r),(g&4194048)!==0&&(F1=r),(g&62914560)!==0&&(qY=r),(g&2080374784)!==0&&(PY=r)}function _4(g,r){Kr&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jg,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jg,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jg,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jg,"primary-light"));var v=h0;if(h0=er(),Dg!==0&&0<v){if(p0(Dg),Br===Y2||Br===pw)fM(v,h0,r,mr);else{var h=h0,O=mr;if(Kr&&!(h<=v)){var b=(r&738197653)===r?"tertiary-dark":"primary-dark",P=(r&536870912)===r?"Prewarm":(r&201326741)===r?"Interrupted Hydration":"Interrupted Render";O?O.run(console.timeStamp.bind(console,P,v,h,ig,jg,b)):console.timeStamp(P,v,h,ig,jg,b)}}_5(Dg,h0)}if(v=mr,mr=null,(r&127)!==0){mr=_6,O=0<=u1&&u1<ew?ew:u1,h=0<=n5&&n5<ew?ew:n5,b=0<=h?h:0<=O?O:h0,0<=v2?(p0(2),cM(v2,b,r,v)):(h2&127)!==0&&(p0(2),ah(ew,b,a1)),v=O;var M=h,Y=y6,Q=0<Ph,N=nw===E6,Z=nw===r2;if(O=h0,h=_6,b=WP,P=MP,Kr){if(ig="Blocking",0<v?v>O&&(v=O):v=O,0<M?M>v&&(M=v):M=v,Y!==null&&v>M){var F=Q?"secondary-light":"warning";h?h.run(console.timeStamp.bind(console,Q?"Consecutive":"Event: "+Y,M,v,ig,jg,F)):console.timeStamp(Q?"Consecutive":"Event: "+Y,M,v,ig,jg,F)}O>v&&(M=N?"error":(r&738197653)===r?"tertiary-light":"primary-light",N=Z?"Promise Resolved":N?"Cascading Update":5<O-v?"Update Blocked":"Update",Z=[],P!=null&&Z.push(["Component name",P]),b!=null&&Z.push(["Method name",b]),v={start:v,end:O,detail:{devtools:{properties:Z,track:ig,trackGroup:jg,color:M}}},h?h.run(performance.measure.bind(performance,N,v)):performance.measure(N,v))}u1=-1.1,nw=0,MP=WP=null,v2=-1.1,Ph=n5,n5=-1.1,ew=er()}if((r&4194048)!==0&&(mr=j6,O=0<=d1&&d1<F1?F1:d1,v=0<=Bv&&Bv<F1?F1:Bv,h=0<=fw&&fw<F1?F1:fw,b=0<=h?h:0<=v?v:h0,0<=w2?(p0(256),cM(w2,b,r,mr)):(h2&4194048)!==0&&(p0(256),ah(F1,b,a1)),Z=h,M=f5,Y=0<cw,Q=GP===r2,b=h0,h=j6,P=bY,N=AY,Kr&&(ig="Transition",0<v?v>b&&(v=b):v=b,0<O?O>v&&(O=v):O=v,0<Z?Z>O&&(Z=O):Z=O,O>Z&&M!==null&&(F=Y?"secondary-light":"warning",h?h.run(console.timeStamp.bind(console,Y?"Consecutive":"Event: "+M,Z,O,ig,jg,F)):console.timeStamp(Y?"Consecutive":"Event: "+M,Z,O,ig,jg,F)),v>O&&(h?h.run(console.timeStamp.bind(console,"Action",O,v,ig,jg,"primary-dark")):console.timeStamp("Action",O,v,ig,jg,"primary-dark")),b>v&&(O=Q?"Promise Resolved":5<b-v?"Update Blocked":"Update",Z=[],N!=null&&Z.push(["Component name",N]),P!=null&&Z.push(["Method name",P]),v={start:v,end:b,detail:{devtools:{properties:Z,track:ig,trackGroup:jg,color:"primary-light"}}},h?h.run(performance.measure.bind(performance,O,v)):performance.measure(O,v))),Bv=d1=-1.1,GP=0,w2=-1.1,cw=fw,fw=-1.1,F1=er()),(r&62914560)!==0&&(h2&62914560)!==0&&(p0(4194304),ah(qY,h0,a1)),(r&2080374784)!==0&&(h2&2080374784)!==0&&(p0(268435456),ah(PY,h0,a1)),v=g.timeoutHandle,v!==A4&&(g.timeoutHandle=A4,ju(v)),v=g.cancelPendingCommit,v!==null&&(g.cancelPendingCommit=null,v()),yv=0,aA(),Xr=g,Eg=v=D1(g.current,null),Dg=r,br=i0,Pv=null,dw=!1,Uh=U5(g,r),TP=!1,Br=ww,w4=e0=CP=sw=aw=0,T0=q8=null,z2=!1,(r&8)!==0&&(r|=r&32),h=g.entangledLanes,h!==0)for(g=g.entanglements,h&=r;0<h;)O=31-F0(h),b=1<<O,r|=g[O],h&=~b;return o1=r,kH(),g=rY(),1000<g-gY&&(m.recentlyCreatedOwnerStacks=0,gY=g),Vv.discardPendingWarnings(),v}function tG(g,r){og=null,m.H=w8,m.getCurrentStack=null,Q1=!1,hv=null,r===Mh||r===A2?(r=Y9(),br=b8):r===JP?(r=Y9(),br=O7):br=r===oP?lP:r!==null&&typeof r==="object"&&typeof r.then==="function"?A8:Q2,Pv=r;var v=Eg;v===null?(Br=O8,RO(g,d0(r,g.current))):v.mode&xg&&pb(v)}function pG(){var g=bv.current;return g===null?!0:(Dg&4194048)===Dg?ov===null?!0:!1:(Dg&62914560)===Dg||(Dg&536870912)!==0?g===ov:!1}function dG(){var g=m.H;return m.H=w8,g===null?w8:g}function aG(){var g=m.A;return m.A=Nu,g}function UO(g){mr===null&&(mr=g._debugTask==null?null:g._debugTask)}function LO(){Br=pw,dw||(Dg&4194048)!==Dg&&bv.current!==null||(Uh=!0),(aw&134217727)===0&&(sw&134217727)===0||Xr===null||Tw(Xr,Dg,e0,!1)}function sA(g,r,v){var h=ag;ag|=g0;var O=dG(),b=aG();if(Xr!==g||Dg!==r){if(z1){var P=g.memoizedUpdaters;0<P.size&&(J6(g,Dg),P.clear()),$w(g,r)}P8=null,_4(g,r)}r=!1,P=Br;g:do try{if(br!==i0&&Eg!==null){var M=Eg,Y=Pv;switch(br){case lP:aA(),P=J2;break g;case b8:case r4:case v4:case A8:bv.current===null&&(r=!0);var Q=br;if(br=i0,Pv=null,y4(g,M,Y,Q),v&&Uh){P=ww;break g}break;default:Q=br,br=i0,Pv=null,y4(g,M,Y,Q)}}sG(),P=Br;break}catch(N){tG(g,N)}while(1);return r&&g.shellSuspendCounter++,jH(),ag=h,m.H=O,m.A=b,Eg===null&&(Xr=null,Dg=0,kH()),P}function sG(){for(;Eg!==null;)gR(Eg)}function WU(g,r){var v=ag;ag|=g0;var h=dG(),O=aG();if(Xr!==g||Dg!==r){if(z1){var b=g.memoizedUpdaters;0<b.size&&(J6(g,Dg),b.clear()),$w(g,r)}P8=null,U2=w0()+q7,_4(g,r)}else Uh=U5(g,r);g:do try{if(br!==i0&&Eg!==null)r:switch(r=Eg,b=Pv,br){case Q2:br=i0,Pv=null,y4(g,r,b,Q2);break;case r4:case v4:if(R9(b)){br=i0,Pv=null,rR(r);break}r=function(){br!==r4&&br!==v4||Xr!==g||(br=K2),R1(g)},b.then(r,r);break g;case b8:br=K2;break g;case O7:br=ZP;break g;case K2:R9(b)?(br=i0,Pv=null,rR(r)):(br=i0,Pv=null,y4(g,r,b,K2));break;case ZP:var P=null;switch(Eg.tag){case 26:P=Eg.memoizedState;case 5:case 27:var M=Eg;if(P?fR(P):M.stateNode.complete){br=i0,Pv=null;var Y=M.sibling;if(Y!==null)Eg=Y;else{var Q=M.return;Q!==null?(Eg=Q,uO(Q)):Eg=null}break r}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}br=i0,Pv=null,y4(g,r,b,ZP);break;case A8:br=i0,Pv=null,y4(g,r,b,A8);break;case lP:aA(),Br=J2;break g;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}m.actQueue!==null?sG():MU();break}catch(N){tG(g,N)}while(1);if(jH(),m.H=h,m.A=O,ag=v,Eg!==null)return ww;return Xr=null,Dg=0,kH(),Br}function MU(){for(;Eg!==null&&!PL();)gR(Eg)}function gR(g){var r=g.alternate;(g.mode&xg)!==Bg?(tb(g),r=bg(g,jA,r,g,o1),pb(g)):r=bg(g,jA,r,g,o1),g.memoizedProps=g.pendingProps,r===null?uO(g):Eg=r}function rR(g){var r=bg(g,GU,g);g.memoizedProps=g.pendingProps,r===null?uO(g):Eg=r}function GU(g){var r=g.alternate,v=(g.mode&xg)!==Bg;switch(v&&tb(g),g.tag){case 15:case 0:r=MG(r,g,g.pendingProps,g.type,void 0,Dg);break;case 11:r=MG(r,g,g.pendingProps,g.type.render,g.ref,Dg);break;case 5:qA(g);default:KG(r,g),g=Eg=g9(g,o1),r=jA(r,g,o1)}return v&&pb(g),r}function y4(g,r,v,h){jH(),qA(r),Gh=null,s6=0;var O=r.return;try{if(d$(g,O,r,v,Dg)){Br=O8,RO(g,d0(v,g.current)),Eg=null;return}}catch(b){if(O!==null)throw Eg=O,b;Br=O8,RO(g,d0(v,g.current)),Eg=null;return}if(r.flags&32768){if(fg||h===Q2)g=!0;else if(Uh||(Dg&536870912)!==0)g=!1;else if(dw=g=!0,h===r4||h===v4||h===b8||h===A8)h=bv.current,h!==null&&h.tag===13&&(h.flags|=16384);vR(r,g)}else uO(r)}function uO(g){var r=g;do{if((r.flags&32768)!==0){vR(r,dw);return}var v=r.alternate;if(g=r.return,tb(r),v=bg(r,gU,v,r,o1),(r.mode&xg)!==Bg&&q9(r),v!==null){Eg=v;return}if(r=r.sibling,r!==null){Eg=r;return}Eg=r=g}while(r!==null);Br===ww&&(Br=H7)}function vR(g,r){do{var v=rU(g.alternate,g);if(v!==null){v.flags&=32767,Eg=v;return}if((g.mode&xg)!==Bg){q9(g),v=g.actualDuration;for(var h=g.child;h!==null;)v+=h.actualDuration,h=h.sibling;g.actualDuration=v}if(v=g.return,v!==null&&(v.flags|=32768,v.subtreeFlags=0,v.deletions=null),!r&&(g=g.sibling,g!==null)){Eg=g;return}Eg=g=v}while(g!==null);Br=J2,Eg=null}function gq(g,r,v,h,O,b,P,M,Y,Q,N,Z,F,S){g.cancelPendingCommit=null;do Y6();while(pr!==r5);if(Vv.flushLegacyContextWarning(),Vv.flushPendingUnsafeLifecycleWarnings(),(ag&(g0|qv))!==O0)throw Error("Should not already be working.");if(p0(v),Q===g4?xb(F,S,v,mr):h!==null?k$(F,S,v,h,r!==null&&r.alternate!==null&&r.alternate.memoizedState.isDehydrated&&(r.flags&256)!==0,mr):D$(F,S,v,mr),r!==null){if(v===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),r===g.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(b=r.lanes|r.childLanes,b|=OP,oH(g,v,b,P,M,Y),g===Xr&&(Eg=Xr=null,Dg=0),Lh=r,v5=g,yv=v,mP=b,kP=O,X7=h,DP=S,Y7=Z,jv=L2,J7=null,r.actualDuration!==0||(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(g.callbackNode=null,g.callbackPriority=0,QU(c4,function(){return Y8=window.event,jv===L2&&(jv=xP),bR(),null})):(g.callbackNode=null,g.callbackPriority=0),p1=null,iw=er(),Z!==null&&V$(S,iw,Z,mr),h=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||h){h=m.T,m.T=null,O=hr.p,hr.p=Hv,P=ag,ag|=qv;try{bU(g,r,v)}finally{ag=P,hr.p=O,m.T=h}}pr=W7,wR(),hR(),HR()}}function wR(){if(pr===W7){pr=r5;var g=v5,r=Lh,v=yv,h=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||h){h=m.T,m.T=null;var O=hr.p;hr.p=Hv;var b=ag;ag|=qv;try{zh=v,$h=g,fH(),SG(r,g),$h=zh=null,v=tP;var P=iM(g.containerInfo),M=v.focusedElem,Y=v.selectionRange;if(P!==M&&M&&M.ownerDocument&&jM(M.ownerDocument.documentElement,M)){if(Y!==null&&Tb(M)){var{start:Q,end:N}=Y;if(N===void 0&&(N=Q),"selectionStart"in M)M.selectionStart=Q,M.selectionEnd=Math.min(N,M.value.length);else{var Z=M.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var S=F.getSelection(),gg=M.textContent.length,qg=Math.min(Y.start,gg),Qr=Y.end===void 0?qg:Math.min(Y.end,gg);!S.extend&&qg>Qr&&(P=Qr,Qr=qg,qg=P);var tg=yM(M,qg),u=yM(M,Qr);if(tg&&u&&(S.rangeCount!==1||S.anchorNode!==tg.node||S.anchorOffset!==tg.offset||S.focusNode!==u.node||S.focusOffset!==u.offset)){var B=Z.createRange();B.setStart(tg.node,tg.offset),S.removeAllRanges(),qg>Qr?(S.addRange(B),S.extend(u.node,u.offset)):(B.setEnd(u.node,u.offset),S.addRange(B))}}}}Z=[];for(S=M;S=S.parentNode;)S.nodeType===1&&Z.push({element:S,left:S.scrollLeft,top:S.scrollTop});typeof M.focus==="function"&&M.focus();for(M=0;M<Z.length;M++){var I=Z[M];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}V2=!!cP,tP=cP=null}finally{ag=b,hr.p=O,m.T=h}}g.current=r,pr=M7}}function hR(){if(pr===M7){pr=r5;var g=J7;if(g!==null){iw=er();var r=t1,v=iw;!Kr||v<=r||(a1?a1.run(console.timeStamp.bind(console,g,r,v,ig,jg,"secondary-light")):console.timeStamp(g,r,v,ig,jg,"secondary-light"))}g=v5,r=Lh,v=yv;var h=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||h){h=m.T,m.T=null;var O=hr.p;hr.p=Hv;var b=ag;ag|=qv;try{zh=v,$h=g,fH(),NG(g,r.alternate,r),$h=zh=null}finally{ag=b,hr.p=O,m.T=h}}g=DP,r=Y7,t1=er(),g=r===null?g:iw,r=t1,v=jv===SP,h=mr,p1!==null?tM(g,r,p1,!1,h):!Kr||r<=g||(h?h.run(console.timeStamp.bind(console,v?"Commit Interrupted View Transition":"Commit",g,r,ig,jg,v?"error":"secondary-dark")):console.timeStamp(v?"Commit Interrupted View Transition":"Commit",g,r,ig,jg,v?"error":"secondary-dark")),pr=G7}}function HR(){if(pr===R7||pr===G7){if(pr===R7){var g=t1;t1=er();var r=t1,v=jv===SP;!Kr||r<=g||(a1?a1.run(console.timeStamp.bind(console,v?"Interrupted View Transition":"Starting Animation",g,r,ig,jg,v?"error":"secondary-light")):console.timeStamp(v?"Interrupted View Transition":"Starting Animation",g,r,ig,jg,v?" error":"secondary-light")),jv!==SP&&(jv=P7)}pr=r5,WL(),g=v5;var h=Lh;r=yv,v=X7;var O=h.actualDuration!==0||(h.subtreeFlags&10256)!==0||(h.flags&10256)!==0;O?pr=u2:(pr=r5,Lh=v5=null,OR(g,g.pendingLanes),h4=0,M8=null);var b=g.pendingLanes;if(b===0&&(g5=null),O||WR(g),b=K(r),h=h.stateNode,$0&&typeof $0.onCommitFiberRoot==="function")try{var P=(h.current.flags&128)===128;switch(b){case Hv:var M=kq;break;case Dv:M=Vq;break;case $1:M=c4;break;case yO:M=Eq;break;default:M=c4}$0.onCommitFiberRoot(t4,h,M,P)}catch(Z){K1||(K1=!0,console.error("React instrumentation encountered an error: %o",Z))}if(z1&&g.memoizedUpdaters.clear(),qU(),v!==null){P=m.T,M=hr.p,hr.p=Hv,m.T=null;try{var Y=g.onRecoverableError;for(h=0;h<v.length;h++){var Q=v[h],N=RU(Q.stack);bg(Q.source,Y,Q.value,N)}}finally{m.T=P,hr.p=M}}(yv&3)!==0&&Y6(),R1(g),b=g.pendingLanes,(r&261930)!==0&&(b&42)!==0?(O2=!0,g===VP?W8++:(W8=0,VP=g)):W8=0,O||_5(r,t1),Q6(0,!1)}}function RU(g){return g={componentStack:g},Object.defineProperty(g,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),g}function OR(g,r){(g.pooledCacheLanes&=r)===0&&(r=g.pooledCache,r!=null&&(g.pooledCache=null,g6(r)))}function Y6(){return wR(),hR(),HR(),bR()}function bR(){if(pr!==u2)return!1;var g=v5,r=mP;mP=0;var v=K(yv),h=$1===0||$1>v?$1:v;v=m.T;var O=hr.p;try{hr.p=h,m.T=null;var b=kP;kP=null,h=v5;var P=yv;if(pr=r5,Lh=v5=null,yv=0,(ag&(g0|qv))!==O0)throw Error("Cannot flush passive effects while already rendering.");p0(P),EP=!0,F2=!1;var M=0;if(p1=null,M=w0(),jv===P7)ah(t1,M,a1);else{var Y=t1,Q=M,N=jv===xP;!Kr||Q<=Y||(mr?mr.run(console.timeStamp.bind(console,N?"Waiting for Paint":"Waiting",Y,Q,ig,jg,"secondary-light")):console.timeStamp(N?"Waiting for Paint":"Waiting",Y,Q,ig,jg,"secondary-light"))}Y=ag,ag|=qv;var Z=h.current;fH(),yG(Z);var F=h.current;Z=DP,fH(),kG(h,F,P,b,Z),WR(h),ag=Y;var S=w0();if(F=M,Z=mr,p1!==null?tM(F,S,p1,!0,Z):!Kr||S<=F||(Z?Z.run(console.timeStamp.bind(console,"Remaining Effects",F,S,ig,jg,"secondary-dark")):console.timeStamp("Remaining Effects",F,S,ig,jg,"secondary-dark")),_5(P,S),Q6(0,!1),F2?h===M8?h4++:(h4=0,M8=h):h4=0,F2=EP=!1,$0&&typeof $0.onPostCommitFiberRoot==="function")try{$0.onPostCommitFiberRoot(t4,h)}catch(qg){K1||(K1=!0,console.error("React instrumentation encountered an error: %o",qg))}var gg=h.current.stateNode;return gg.effectDuration=0,gg.passiveEffectDuration=0,!0}finally{hr.p=O,m.T=v,OR(g,r)}}function AR(g,r,v){r=d0(v,r),P9(r),r=TA(g.stateNode,r,2),g=Iw(g,r,2),g!==null&&(zw(g,2),R1(g))}function wr(g,r,v){if(uh=!1,g.tag===3)AR(g,g,v);else{for(;r!==null;){if(r.tag===3){AR(r,g,v);return}if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError==="function"||typeof h.componentDidCatch==="function"&&(g5===null||!g5.has(h))){g=d0(v,g),P9(g),v=CA(2),h=Iw(r,v,2),h!==null&&(SA(v,h,r,g),zw(h,2),R1(h));return}}r=r.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,v)}}function rq(g,r,v){var h=g.pingCache;if(h===null){h=g.pingCache=new lu;var O=new Set;h.set(r,O)}else O=h.get(r),O===void 0&&(O=new Set,h.set(r,O));O.has(v)||(TP=!0,O.add(v),h=XU.bind(null,g,r,v),z1&&J6(g,v),r.then(h,h))}function XU(g,r,v){var h=g.pingCache;h!==null&&h.delete(r),g.pingedLanes|=g.suspendedLanes&v,g.warmLanes&=~v,(v&127)!==0?0>u1&&(ew=u1=er(),_6=g2("Promise Resolved"),nw=r2):(v&4194048)!==0&&0>Bv&&(F1=Bv=er(),j6=g2("Promise Resolved"),GP=r2),eG()&&m.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Xr===g&&(Dg&v)===v&&(Br===pw||Br===Y2&&(Dg&62914560)===Dg&&w0()-$2<A7?(ag&g0)===O0&&_4(g,0):CP|=v,w4===Dg&&(w4=0)),R1(g)}function qR(g,r){r===0&&(r=B4()),g=z0(g,r),g!==null&&(zw(g,r),R1(g))}function YU(g){var r=g.memoizedState,v=0;r!==null&&(v=r.retryLane),qR(g,v)}function JU(g,r){var v=0;switch(g.tag){case 31:case 13:var{stateNode:h,memoizedState:O}=g;O!==null&&(v=O.retryLane);break;case 19:h=g.stateNode;break;case 22:h=g.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}h!==null&&h.delete(r),qR(g,v)}function vq(g,r,v){if((r.subtreeFlags&67117056)!==0)for(r=r.child;r!==null;){var h=g,O=r,b=O.type===mO;b=v||b,O.tag!==22?O.flags&67108864?b&&bg(O,PR,h,O):vq(h,O,b):O.memoizedState===null&&(b&&O.flags&8192?bg(O,PR,h,O):O.subtreeFlags&67108864&&bg(O,vq,h,O,b)),r=r.sibling}}function PR(g,r){Yr(!0);try{mG(r),jG(r),DG(g,r.alternate,r,!1),VG(g,r,0,null,!1,0)}finally{Yr(!1)}}function WR(g){var r=!0;g.current.mode&(U0|kv)||(r=!1),vq(g,g.current,r)}function MR(g){if((ag&g0)===O0){var r=g.tag;if(r===3||r===1||r===0||r===11||r===14||r===15){if(r=D(g)||"ReactComponent",B2!==null){if(B2.has(r))return;B2.add(r)}else B2=new Set([r]);bg(g,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function J6(g,r){z1&&g.memoizedUpdaters.forEach(function(v){jh(g,v,r)})}function QU(g,r){var v=m.actQueue;return v!==null?(v.push(r),Su):Dq(g,r)}function KU(g){eG()&&m.actQueue===null&&bg(g,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,D(g))})}function R1(g){g!==Fh&&g.next===null&&(Fh===null?o2=Fh=g:Fh=Fh.next=g),I2=!0,m.actQueue!==null?yP||(yP=!0,YR()):_P||(_P=!0,YR())}function Q6(g,r){if(!jP&&I2){jP=!0;do{var v=!1;for(var h=o2;h!==null;){if(!r)if(g!==0){var O=h.pendingLanes;if(O===0)var b=0;else{var{suspendedLanes:P,pingedLanes:M}=h;b=(1<<31-F0(42|g)+1)-1,b&=O&~(P&~M),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(v=!0,XR(h,b))}else b=Dg,b=$5(h,h===Xr?b:0,h.cancelPendingCommit!==null||h.timeoutHandle!==A4),(b&3)===0||U5(h,b)||(v=!0,XR(h,b));h=h.next}}while(v);jP=!1}}function zU(){Y8=window.event,wq()}function wq(){I2=yP=_P=!1;var g=0;w5!==0&&oU()&&(g=w5);for(var r=w0(),v=null,h=o2;h!==null;){var O=h.next,b=GR(h,r);if(b===0)h.next=null,v===null?o2=O:v.next=O,O===null&&(Fh=v);else if(v=h,g!==0||(b&3)!==0)I2=!0;h=O}pr!==r5&&pr!==u2||Q6(g,!1),w5!==0&&(w5=0)}function GR(g,r){for(var{suspendedLanes:v,pingedLanes:h,expirationTimes:O}=g,b=g.pendingLanes&-62914561;0<b;){var P=31-F0(b),M=1<<P,Y=O[P];if(Y===-1){if((M&v)===0||(M&h)!==0)O[P]=$b(M,r)}else Y<=r&&(g.expiredLanes|=M);b&=~M}if(r=Xr,v=Dg,v=$5(g,g===r?v:0,g.cancelPendingCommit!==null||g.timeoutHandle!==A4),h=g.callbackNode,v===0||g===r&&(br===r4||br===v4)||g.cancelPendingCommit!==null)return h!==null&&hq(h),g.callbackNode=null,g.callbackPriority=0;if((v&3)===0||U5(g,v)){if(r=v&-v,r!==g.callbackPriority||m.actQueue!==null&&h!==iP)hq(h);else return r;switch(K(v)){case Hv:case Dv:v=Vq;break;case $1:v=c4;break;case yO:v=Eq;break;default:v=c4}return h=RR.bind(null,g),m.actQueue!==null?(m.actQueue.push(h),v=iP):v=Dq(v,h),g.callbackPriority=r,g.callbackNode=v,r}return h!==null&&hq(h),g.callbackPriority=2,g.callbackNode=null,2}function RR(g,r){if(O2=H2=!1,Y8=window.event,pr!==r5&&pr!==u2)return g.callbackNode=null,g.callbackPriority=0,null;var v=g.callbackNode;if(jv===L2&&(jv=xP),Y6()&&g.callbackNode!==v)return null;var h=Dg;if(h=$5(g,g===Xr?h:0,g.cancelPendingCommit!==null||g.timeoutHandle!==A4),h===0)return null;return fG(g,h,r),GR(g,w0()),g.callbackNode!=null&&g.callbackNode===v?RR.bind(null,g):null}function XR(g,r){if(Y6())return null;H2=O2,O2=!1,fG(g,r,!0)}function hq(g){g!==iP&&g!==null&&qL(g)}function YR(){m.actQueue!==null&&m.actQueue.push(function(){return wq(),null}),iu(function(){(ag&(g0|qv))!==O0?Dq(kq,zU):wq()})}function Hq(){if(w5===0){var g=c5;g===0&&(g=VO,VO<<=1,(VO&261888)===0&&(VO=256)),w5=g}return w5}function JR(g){if(g==null||typeof g==="symbol"||typeof g==="boolean")return null;if(typeof g==="function")return g;return qr(g,"action"),th(""+g)}function QR(g,r){var v=r.ownerDocument.createElement("input");return v.name=r.name,v.value=r.value,g.id&&v.setAttribute("form",g.id),r.parentNode.insertBefore(v,r),g=new FormData(g),v.parentNode.removeChild(v),g}function $U(g,r,v,h,O){if(r==="submit"&&v&&v.stateNode===O){var b=JR((O[B0]||null).action),P=h.submitter;P&&(r=(r=P[B0]||null)?JR(r.formAction):P.getAttribute("formAction"),r!==null&&(b=r,P=null));var M=new fO("action","action",null,h,O);g.push({event:M,listeners:[{instance:null,listener:function(){if(h.defaultPrevented){if(w5!==0){var Y=P?QR(O,P):new FormData(O),Q={pending:!0,data:Y,method:O.method,action:b};Object.freeze(Q),FA(v,Q,null,Y)}}else typeof b==="function"&&(M.preventDefault(),Y=P?QR(O,P):new FormData(O),Q={pending:!0,data:Y,method:O.method,action:b},Object.freeze(Q),FA(v,Q,b,Y))},currentTarget:O}]})}}function FO(g,r,v){g.currentTarget=v;try{r(g)}catch(h){vP(h)}g.currentTarget=null}function KR(g,r){r=(r&4)!==0;for(var v=0;v<g.length;v++){var h=g[v];g:{var O=void 0,b=h.event;if(h=h.listeners,r)for(var P=h.length-1;0<=P;P--){var M=h[P],Y=M.instance,Q=M.currentTarget;if(M=M.listener,Y!==O&&b.isPropagationStopped())break g;Y!==null?bg(Y,FO,b,M,Q):FO(b,M,Q),O=Y}else for(P=0;P<h.length;P++){if(M=h[P],Y=M.instance,Q=M.currentTarget,M=M.listener,Y!==O&&b.isPropagationStopped())break g;Y!==null?bg(Y,FO,b,M,Q):FO(b,M,Q),O=Y}}}}function cg(g,r){eP.has(g)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',g);var v=r[_q];v===void 0&&(v=r[_q]=new Set);var h=g+"__bubble";v.has(h)||(zR(r,g,2,!1),v.add(h))}function Oq(g,r,v){eP.has(g)&&!r&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',g);var h=0;r&&(h|=4),zR(v,g,h,r)}function bq(g){if(!g[N2]){g[N2]=!0,YX.forEach(function(v){v!=="selectionchange"&&(eP.has(v)||Oq(v,!1,g),Oq(v,!0,g))});var r=g.nodeType===9?g:g.ownerDocument;r===null||r[N2]||(r[N2]=!0,Oq("selectionchange",!1,r))}}function zR(g,r,v,h){switch(sR(r)){case Hv:var O=rL;break;case Dv:O=vL;break;default:O=Lq}v=O.bind(null,r,v,g),O=void 0,!nq||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(O=!0),h?O!==void 0?g.addEventListener(r,v,{capture:!0,passive:O}):g.addEventListener(r,v,!0):O!==void 0?g.addEventListener(r,v,{passive:O}):g.addEventListener(r,v,!1)}function Aq(g,r,v,h,O){var b=h;if((r&1)===0&&(r&2)===0&&h!==null)g:for(;;){if(h===null)return;var P=h.tag;if(P===3||P===4){var M=h.stateNode.containerInfo;if(M===O)break;if(P===4)for(P=h.return;P!==null;){var Y=P.tag;if((Y===3||Y===4)&&P.stateNode.containerInfo===O)return;P=P.return}for(;M!==null;){if(P=Xg(M),P===null)return;if(Y=P.tag,Y===5||Y===6||Y===26||Y===27){h=b=P;continue g}M=M.parentNode}}h=h.return}lM(function(){var Q=b,N=Zb(v),Z=[];g:{var F=sX.get(g);if(F!==void 0){var S=fO,gg=g;switch(g){case"keypress":if(CH(v)===0)break g;case"keydown":case"keyup":S=pL;break;case"focusin":gg="focus",S=pq;break;case"focusout":gg="blur",S=pq;break;case"beforeblur":case"afterblur":S=pq;break;case"click":if(v.button===2)break g;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=VX;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=kL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=sL;break;case tX:case pX:case dX:S=_L;break;case aX:S=ru;break;case"scroll":case"scrollend":S=mL;break;case"wheel":S=wu;break;case"copy":case"cut":case"paste":S=jL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=_X;break;case"toggle":case"beforetoggle":S=Hu}var qg=(r&4)!==0,Qr=!qg&&(g==="scroll"||g==="scrollend"),tg=qg?F!==null?F+"Capture":null:F;qg=[];for(var u=Q,B;u!==null;){var I=u;if(B=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||B===null||tg===null||(I=ph(u,tg),I!=null&&qg.push(K6(u,I,B))),Qr)break;u=u.return}0<qg.length&&(F=new S(F,gg,null,v,N),Z.push({event:F,listeners:qg}))}}if((r&7)===0){g:{if(F=g==="mouseover"||g==="pointerover",S=g==="mouseout"||g==="pointerout",F&&v!==Z6&&(gg=v.relatedTarget||v.fromElement)&&(Xg(gg)||gg[kw]))break g;if(S||F){if(F=N.window===N?N:(F=N.ownerDocument)?F.defaultView||F.parentWindow:window,S){if(gg=v.relatedTarget||v.toElement,S=Q,gg=gg?Xg(gg):null,gg!==null&&(Qr=_(gg),qg=gg.tag,gg!==Qr||qg!==5&&qg!==27&&qg!==6))gg=null}else S=null,gg=Q;if(S!==gg){if(qg=VX,I="onMouseLeave",tg="onMouseEnter",u="mouse",g==="pointerout"||g==="pointerover")qg=_X,I="onPointerLeave",tg="onPointerEnter",u="pointer";if(Qr=S==null?F:lg(S),B=gg==null?F:lg(gg),F=new qg(I,u+"leave",S,v,N),F.target=Qr,F.relatedTarget=B,I=null,Xg(N)===Q&&(qg=new qg(tg,u+"enter",gg,v,N),qg.target=B,qg.relatedTarget=Qr,I=qg),Qr=I,S&&gg)r:{qg=UU,tg=S,u=gg,B=0;for(I=tg;I;I=qg(I))B++;I=0;for(var k=u;k;k=qg(k))I++;for(;0<B-I;)tg=qg(tg),B--;for(;0<I-B;)u=qg(u),I--;for(;B--;){if(tg===u||u!==null&&tg===u.alternate){qg=tg;break r}tg=qg(tg),u=qg(u)}qg=null}else qg=null;S!==null&&$R(Z,F,S,qg,!1),gg!==null&&Qr!==null&&$R(Z,Qr,gg,qg,!0)}}}g:{if(F=Q?lg(Q):window,S=F.nodeName&&F.nodeName.toLowerCase(),S==="select"||S==="input"&&F.type==="file")var Hg=kM;else if(mM(F))if(fX)Hg=S$;else{Hg=T$;var Ig=l$}else S=F.nodeName,!S||S.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?Q&&ch(Q.elementType)&&(Hg=kM):Hg=C$;if(Hg&&(Hg=Hg(g,Q))){DM(Z,Hg,v,N);break g}Ig&&Ig(g,F,Q),g==="focusout"&&Q&&F.type==="number"&&Q.memoizedProps.value!=null&&ub(F,"number",F.value)}switch(Ig=Q?lg(Q):window,g){case"focusin":if(mM(Ig)||Ig.contentEditable==="true")vh=Ig,aq=Q,D6=null;break;case"focusout":D6=aq=vh=null;break;case"mousedown":sq=!0;break;case"contextmenu":case"mouseup":case"dragend":sq=!1,eM(Z,v,N);break;case"selectionchange":if(qu)break;case"keydown":case"keyup":eM(Z,v,N)}var zg;if(dq)g:{switch(g){case"compositionstart":var Yg="onCompositionStart";break g;case"compositionend":Yg="onCompositionEnd";break g;case"compositionupdate":Yg="onCompositionUpdate";break g}Yg=void 0}else rh?SM(g,v)&&(Yg="onCompositionEnd"):g==="keydown"&&v.keyCode===yX&&(Yg="onCompositionStart");if(Yg&&(jX&&v.locale!=="ko"&&(rh||Yg!=="onCompositionStart"?Yg==="onCompositionEnd"&&rh&&(zg=TM()):(Vw=N,fq=("value"in Vw)?Vw.value:Vw.textContent,rh=!0)),Ig=BO(Q,Yg),0<Ig.length&&(Yg=new EX(Yg,g,null,v,N),Z.push({event:Yg,listeners:Ig}),zg?Yg.data=zg:(zg=xM(v),zg!==null&&(Yg.data=zg)))),zg=bu?o$(g,v):I$(g,v))Yg=BO(Q,"onBeforeInput"),0<Yg.length&&(Ig=new eL("onBeforeInput","beforeinput",null,v,N),Z.push({event:Ig,listeners:Yg}),Ig.data=zg);$U(Z,g,Q,v,N)}KR(Z,r)})}function K6(g,r,v){return{instance:g,listener:r,currentTarget:v}}function BO(g,r){for(var v=r+"Capture",h=[];g!==null;){var O=g,b=O.stateNode;if(O=O.tag,O!==5&&O!==26&&O!==27||b===null||(O=ph(g,v),O!=null&&h.unshift(K6(g,O,b)),O=ph(g,r),O!=null&&h.push(K6(g,O,b))),g.tag===3)return h;g=g.return}return[]}function UU(g){if(g===null)return null;do g=g.return;while(g&&g.tag!==5&&g.tag!==27);return g?g:null}function $R(g,r,v,h,O){for(var b=r._reactName,P=[];v!==null&&v!==h;){var M=v,Y=M.alternate,Q=M.stateNode;if(M=M.tag,Y!==null&&Y===h)break;M!==5&&M!==26&&M!==27||Q===null||(Y=Q,O?(Q=ph(v,b),Q!=null&&P.unshift(K6(v,Q,Y))):O||(Q=ph(v,b),Q!=null&&P.push(K6(v,Q,Y)))),v=v.return}P.length!==0&&g.push({event:r,listeners:P})}function qq(g,r){L$(g,r),g!=="input"&&g!=="textarea"&&g!=="select"||r==null||r.value!==null||DX||(DX=!0,g==="select"&&r.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",g):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",g));var v={registrationNameDependencies:y5,possibleRegistrationNames:yq};ch(g)||typeof r.is==="string"||F$(g,r,v),r.contentEditable&&!r.suppressContentEditableWarning&&r.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function v0(g,r,v,h){r!==v&&(v=Cw(v),Cw(r)!==v&&(h[g]=r))}function LU(g,r,v){r.forEach(function(h){v[uR(h)]=h==="style"?Wq(g):g.getAttribute(h)})}function X1(g,r){r===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",g,g,g):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",g,typeof r)}function UR(g,r){return g=g.namespaceURI===iO||g.namespaceURI===d4?g.ownerDocument.createElementNS(g.namespaceURI,g.tagName):g.ownerDocument.createElement(g.tagName),g.innerHTML=r,g.innerHTML}function Cw(g){return Yv(g)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",k0(g)),r0(g)),(typeof g==="string"?g:""+g).replace(xu,`
`).replace(mu,"")}function LR(g,r){return r=Cw(r),Cw(g)===r?!0:!1}function Gr(g,r,v,h,O,b){switch(v){case"children":if(typeof h==="string")TH(h,r,!1),r==="body"||r==="textarea"&&h===""||fh(g,h);else if(typeof h==="number"||typeof h==="bigint")TH(""+h,r,!1),r!=="body"&&fh(g,""+h);break;case"className":NH(g,"class",h);break;case"tabIndex":NH(g,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":NH(g,v,h);break;case"style":IM(g,h,b);break;case"data":if(r!=="object"){NH(g,"data",h);break}case"src":case"href":if(h===""&&(r!=="a"||v!=="href")){v==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v),g.removeAttribute(v);break}if(h==null||typeof h==="function"||typeof h==="symbol"||typeof h==="boolean"){g.removeAttribute(v);break}qr(h,v),h=th(""+h),g.setAttribute(v,h);break;case"action":case"formAction":if(h!=null&&(r==="form"?v==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof h==="function"&&(O.encType==null&&O.method==null||T2||(T2=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),O.target==null||l2||(l2=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):r==="input"||r==="button"?v==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):r!=="input"||O.type==="submit"||O.type==="image"||Z2?r!=="button"||O.type==null||O.type==="submit"||Z2?typeof h==="function"&&(O.name==null||U7||(U7=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),O.formEncType==null&&O.formMethod==null||T2||(T2=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),O.formTarget==null||l2||(l2=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Z2=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Z2=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):v==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof h==="function"){g.setAttribute(v,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b==="function"&&(v==="formAction"?(r!=="input"&&Gr(g,r,"name",O.name,O,null),Gr(g,r,"formEncType",O.formEncType,O,null),Gr(g,r,"formMethod",O.formMethod,O,null),Gr(g,r,"formTarget",O.formTarget,O,null)):(Gr(g,r,"encType",O.encType,O,null),Gr(g,r,"method",O.method,O,null),Gr(g,r,"target",O.target,O,null)));if(h==null||typeof h==="symbol"||typeof h==="boolean"){g.removeAttribute(v);break}qr(h,v),h=th(""+h),g.setAttribute(v,h);break;case"onClick":h!=null&&(typeof h!=="function"&&X1(v,h),g.onclick=m1);break;case"onScroll":h!=null&&(typeof h!=="function"&&X1(v,h),cg("scroll",g));break;case"onScrollEnd":h!=null&&(typeof h!=="function"&&X1(v,h),cg("scrollend",g));break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!=="object"||!("__html"in h))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=h.__html,v!=null){if(O.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=v}}break;case"multiple":g.multiple=h&&typeof h!=="function"&&typeof h!=="symbol";break;case"muted":g.muted=h&&typeof h!=="function"&&typeof h!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(h==null||typeof h==="function"||typeof h==="boolean"||typeof h==="symbol"){g.removeAttribute("xlink:href");break}qr(h,v),v=th(""+h),g.setAttributeNS(H4,"xlink:href",v);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":h!=null&&typeof h!=="function"&&typeof h!=="symbol"?(qr(h,v),g.setAttribute(v,""+h)):g.removeAttribute(v);break;case"inert":h!==""||C2[v]||(C2[v]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",v));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!=="function"&&typeof h!=="symbol"?g.setAttribute(v,""):g.removeAttribute(v);break;case"capture":case"download":h===!0?g.setAttribute(v,""):h!==!1&&h!=null&&typeof h!=="function"&&typeof h!=="symbol"?(qr(h,v),g.setAttribute(v,h)):g.removeAttribute(v);break;case"cols":case"rows":case"size":case"span":h!=null&&typeof h!=="function"&&typeof h!=="symbol"&&!isNaN(h)&&1<=h?(qr(h,v),g.setAttribute(v,h)):g.removeAttribute(v);break;case"rowSpan":case"start":h==null||typeof h==="function"||typeof h==="symbol"||isNaN(h)?g.removeAttribute(v):(qr(h,v),g.setAttribute(v,h));break;case"popover":cg("beforetoggle",g),cg("toggle",g),IH(g,"popover",h);break;case"xlinkActuate":x1(g,H4,"xlink:actuate",h);break;case"xlinkArcrole":x1(g,H4,"xlink:arcrole",h);break;case"xlinkRole":x1(g,H4,"xlink:role",h);break;case"xlinkShow":x1(g,H4,"xlink:show",h);break;case"xlinkTitle":x1(g,H4,"xlink:title",h);break;case"xlinkType":x1(g,H4,"xlink:type",h);break;case"xmlBase":x1(g,nP,"xml:base",h);break;case"xmlLang":x1(g,nP,"xml:lang",h);break;case"xmlSpace":x1(g,nP,"xml:space",h);break;case"is":b!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),IH(g,"is",h);break;case"innerText":case"textContent":break;case"popoverTarget":L7||h==null||typeof h!=="object"||(L7=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",h));default:!(2<v.length)||v[0]!=="o"&&v[0]!=="O"||v[1]!=="n"&&v[1]!=="N"?(v=NM(v),IH(g,v,h)):y5.hasOwnProperty(v)&&h!=null&&typeof h!=="function"&&X1(v,h)}}function Pq(g,r,v,h,O,b){switch(v){case"style":IM(g,h,b);break;case"dangerouslySetInnerHTML":if(h!=null){if(typeof h!=="object"||!("__html"in h))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=h.__html,v!=null){if(O.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");g.innerHTML=v}}break;case"children":typeof h==="string"?fh(g,h):(typeof h==="number"||typeof h==="bigint")&&fh(g,""+h);break;case"onScroll":h!=null&&(typeof h!=="function"&&X1(v,h),cg("scroll",g));break;case"onScrollEnd":h!=null&&(typeof h!=="function"&&X1(v,h),cg("scrollend",g));break;case"onClick":h!=null&&(typeof h!=="function"&&X1(v,h),g.onclick=m1);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(y5.hasOwnProperty(v))h!=null&&typeof h!=="function"&&X1(v,h);else g:{if(v[0]==="o"&&v[1]==="n"&&(O=v.endsWith("Capture"),r=v.slice(2,O?v.length-7:void 0),b=g[B0]||null,b=b!=null?b[v]:null,typeof b==="function"&&g.removeEventListener(r,b,O),typeof h==="function")){typeof b!=="function"&&b!==null&&(v in g?g[v]=null:g.hasAttribute(v)&&g.removeAttribute(v)),g.addEventListener(r,h,O);break g}v in g?g[v]=h:h===!0?g.setAttribute(v,""):IH(g,v,h)}}}function M0(g,r,v){switch(qq(r,v),r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cg("error",g),cg("load",g);var h=!1,O=!1,b;for(b in v)if(v.hasOwnProperty(b)){var P=v[b];if(P!=null)switch(b){case"src":h=!0;break;case"srcSet":O=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Gr(g,r,b,P,v,null)}}O&&Gr(g,r,"srcSet",v.srcSet,v,null),h&&Gr(g,r,"src",v.src,v,null);return;case"input":Uw("input",v),cg("invalid",g);var M=b=P=O=null,Y=null,Q=null;for(h in v)if(v.hasOwnProperty(h)){var N=v[h];if(N!=null)switch(h){case"name":O=N;break;case"type":P=N;break;case"checked":Y=N;break;case"defaultChecked":Q=N;break;case"value":b=N;break;case"defaultValue":M=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Gr(g,r,h,N,v,null)}}MM(g,v),GM(g,b,M,Y,Q,P,O,!1);return;case"select":Uw("select",v),cg("invalid",g),h=P=b=null;for(O in v)if(v.hasOwnProperty(O)&&(M=v[O],M!=null))switch(O){case"value":b=M;break;case"defaultValue":P=M;break;case"multiple":h=M;default:Gr(g,r,O,M,v,null)}YM(g,v),r=b,v=P,g.multiple=!!h,r!=null?I4(g,!!h,r,!1):v!=null&&I4(g,!!h,v,!0);return;case"textarea":Uw("textarea",v),cg("invalid",g),b=O=h=null;for(P in v)if(v.hasOwnProperty(P)&&(M=v[P],M!=null))switch(P){case"value":h=M;break;case"defaultValue":O=M;break;case"children":b=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Gr(g,r,P,M,v,null)}JM(g,v),KM(g,h,O,b);return;case"option":RM(g,v);for(Y in v)if(v.hasOwnProperty(Y)&&(h=v[Y],h!=null))switch(Y){case"selected":g.selected=h&&typeof h!=="function"&&typeof h!=="symbol";break;default:Gr(g,r,Y,h,v,null)}return;case"dialog":cg("beforetoggle",g),cg("toggle",g),cg("cancel",g),cg("close",g);break;case"iframe":case"object":cg("load",g);break;case"video":case"audio":for(h=0;h<G8.length;h++)cg(G8[h],g);break;case"image":cg("error",g),cg("load",g);break;case"details":cg("toggle",g);break;case"embed":case"source":case"link":cg("error",g),cg("load",g);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in v)if(v.hasOwnProperty(Q)&&(h=v[Q],h!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Gr(g,r,Q,h,v,null)}return;default:if(ch(r)){for(N in v)v.hasOwnProperty(N)&&(h=v[N],h!==void 0&&Pq(g,r,N,h,v,void 0));return}}for(M in v)v.hasOwnProperty(M)&&(h=v[M],h!=null&&Gr(g,r,M,h,v,null))}function uU(g,r,v,h){switch(qq(r,h),r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var O=null,b=null,P=null,M=null,Y=null,Q=null,N=null;for(S in v){var Z=v[S];if(v.hasOwnProperty(S)&&Z!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":Y=Z;default:h.hasOwnProperty(S)||Gr(g,r,S,null,h,Z)}}for(var F in h){var S=h[F];if(Z=v[F],h.hasOwnProperty(F)&&(S!=null||Z!=null))switch(F){case"type":b=S;break;case"name":O=S;break;case"checked":Q=S;break;case"defaultChecked":N=S;break;case"value":P=S;break;case"defaultValue":M=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(r+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:S!==Z&&Gr(g,r,F,S,h,Z)}}r=v.type==="checkbox"||v.type==="radio"?v.checked!=null:v.value!=null,h=h.type==="checkbox"||h.type==="radio"?h.checked!=null:h.value!=null,r||!h||$7||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),$7=!0),!r||h||z7||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),z7=!0),Lb(g,P,M,Y,Q,N,b,O);return;case"select":S=P=M=F=null;for(b in v)if(Y=v[b],v.hasOwnProperty(b)&&Y!=null)switch(b){case"value":break;case"multiple":S=Y;default:h.hasOwnProperty(b)||Gr(g,r,b,null,h,Y)}for(O in h)if(b=h[O],Y=v[O],h.hasOwnProperty(O)&&(b!=null||Y!=null))switch(O){case"value":F=b;break;case"defaultValue":M=b;break;case"multiple":P=b;default:b!==Y&&Gr(g,r,O,b,h,Y)}h=M,r=P,v=S,F!=null?I4(g,!!r,F,!1):!!v!==!!r&&(h!=null?I4(g,!!r,h,!0):I4(g,!!r,r?[]:"",!1));return;case"textarea":S=F=null;for(M in v)if(O=v[M],v.hasOwnProperty(M)&&O!=null&&!h.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:Gr(g,r,M,null,h,O)}for(P in h)if(O=h[P],b=v[P],h.hasOwnProperty(P)&&(O!=null||b!=null))switch(P){case"value":F=O;break;case"defaultValue":S=O;break;case"children":break;case"dangerouslySetInnerHTML":if(O!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:O!==b&&Gr(g,r,P,O,h,b)}QM(g,F,S);return;case"option":for(var gg in v)if(F=v[gg],v.hasOwnProperty(gg)&&F!=null&&!h.hasOwnProperty(gg))switch(gg){case"selected":g.selected=!1;break;default:Gr(g,r,gg,null,h,F)}for(Y in h)if(F=h[Y],S=v[Y],h.hasOwnProperty(Y)&&F!==S&&(F!=null||S!=null))switch(Y){case"selected":g.selected=F&&typeof F!=="function"&&typeof F!=="symbol";break;default:Gr(g,r,Y,F,h,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qg in v)F=v[qg],v.hasOwnProperty(qg)&&F!=null&&!h.hasOwnProperty(qg)&&Gr(g,r,qg,null,h,F);for(Q in h)if(F=h[Q],S=v[Q],h.hasOwnProperty(Q)&&F!==S&&(F!=null||S!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Gr(g,r,Q,F,h,S)}return;default:if(ch(r)){for(var Qr in v)F=v[Qr],v.hasOwnProperty(Qr)&&F!==void 0&&!h.hasOwnProperty(Qr)&&Pq(g,r,Qr,void 0,h,F);for(N in h)F=h[N],S=v[N],!h.hasOwnProperty(N)||F===S||F===void 0&&S===void 0||Pq(g,r,N,F,h,S);return}}for(var tg in v)F=v[tg],v.hasOwnProperty(tg)&&F!=null&&!h.hasOwnProperty(tg)&&Gr(g,r,tg,null,h,F);for(Z in h)F=h[Z],S=v[Z],!h.hasOwnProperty(Z)||F===S||F==null&&S==null||Gr(g,r,Z,F,h,S)}function uR(g){switch(g){case"class":return"className";case"for":return"htmlFor";default:return g}}function Wq(g){var r={};g=g.style;for(var v=0;v<g.length;v++){var h=g[v];r[h]=g.getPropertyValue(h)}return r}function FR(g,r,v){if(r!=null&&typeof r!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var h,O=h="",b;for(b in r)if(r.hasOwnProperty(b)){var P=r[b];P!=null&&typeof P!=="boolean"&&P!==""&&(b.indexOf("--")===0?(yh(P,b),h+=O+b+":"+(""+P).trim()):typeof P!=="number"||P===0||xX.has(b)?(yh(P,b),h+=O+b.replace(ZX,"-$1").toLowerCase().replace(lX,"-ms-")+":"+(""+P).trim()):h+=O+b.replace(ZX,"-$1").toLowerCase().replace(lX,"-ms-")+":"+P+"px",O=";")}h=h||null,r=g.getAttribute("style"),r!==h&&(h=Cw(h),Cw(r)!==h&&(v.style=Wq(g)))}}function Kv(g,r,v,h,O,b){if(O.delete(v),g=g.getAttribute(v),g===null)switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":return}else if(h!=null)switch(typeof h){case"function":case"symbol":case"boolean":break;default:if(qr(h,r),g===""+h)return}v0(r,g,h,b)}function BR(g,r,v,h,O,b){if(O.delete(v),g=g.getAttribute(v),g===null){switch(typeof h){case"function":case"symbol":return}if(!h)return}else switch(typeof h){case"function":case"symbol":break;default:if(h)return}v0(r,g,h,b)}function Mq(g,r,v,h,O,b){if(O.delete(v),g=g.getAttribute(v),g===null)switch(typeof h){case"undefined":case"function":case"symbol":return}else if(h!=null)switch(typeof h){case"function":case"symbol":break;default:if(qr(h,v),g===""+h)return}v0(r,g,h,b)}function oR(g,r,v,h,O,b){if(O.delete(v),g=g.getAttribute(v),g===null)switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(h))return}else if(h!=null)switch(typeof h){case"function":case"symbol":case"boolean":break;default:if(!isNaN(h)&&(qr(h,r),g===""+h))return}v0(r,g,h,b)}function Gq(g,r,v,h,O,b){if(O.delete(v),g=g.getAttribute(v),g===null)switch(typeof h){case"undefined":case"function":case"symbol":case"boolean":return}else if(h!=null)switch(typeof h){case"function":case"symbol":case"boolean":break;default:if(qr(h,r),v=th(""+h),g===v)return}v0(r,g,h,b)}function IR(g,r,v,h){for(var O={},b=new Set,P=g.attributes,M=0;M<P.length;M++)switch(P[M].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:b.add(P[M].name)}if(ch(r)){for(var Y in v)if(v.hasOwnProperty(Y)){var Q=v[Y];if(Q!=null){if(y5.hasOwnProperty(Y))typeof Q!=="function"&&X1(Y,Q);else if(v.suppressHydrationWarning!==!0)switch(Y){case"children":typeof Q!=="string"&&typeof Q!=="number"||v0("children",g.textContent,Q,O);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":P=g.innerHTML,Q=Q?Q.__html:void 0,Q!=null&&(Q=UR(g,Q),v0(Y,P,Q,O));continue;case"style":b.delete(Y),FR(g,Q,O);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":b.delete(Y.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",Y);continue;case"className":b.delete("class"),P=qM(g,"class",Q),v0("className",P,Q,O);continue;default:h.context===hw&&r!=="svg"&&r!=="math"?b.delete(Y.toLowerCase()):b.delete(Y),P=qM(g,Y,Q),v0(Y,P,Q,O)}}}}else for(Q in v)if(v.hasOwnProperty(Q)&&(Y=v[Q],Y!=null)){if(y5.hasOwnProperty(Q))typeof Y!=="function"&&X1(Q,Y);else if(v.suppressHydrationWarning!==!0)switch(Q){case"children":typeof Y!=="string"&&typeof Y!=="number"||v0("children",g.textContent,Y,O);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":P=g.innerHTML,Y=Y?Y.__html:void 0,Y!=null&&(Y=UR(g,Y),P!==Y&&(O[Q]={__html:P}));continue;case"className":Kv(g,Q,"class",Y,b,O);continue;case"tabIndex":Kv(g,Q,"tabindex",Y,b,O);continue;case"style":b.delete(Q),FR(g,Y,O);continue;case"multiple":b.delete(Q),v0(Q,g.multiple,Y,O);continue;case"muted":b.delete(Q),v0(Q,g.muted,Y,O);continue;case"autoFocus":b.delete("autofocus"),v0(Q,g.autofocus,Y,O);continue;case"data":if(r!=="object"){b.delete(Q),P=g.getAttribute("data"),v0(Q,P,Y,O);continue}case"src":case"href":if(!(Y!==""||r==="a"&&Q==="href"||r==="object"&&Q==="data")){Q==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Q,Q):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Q,Q);continue}Gq(g,Q,Q,Y,b,O);continue;case"action":case"formAction":if(P=g.getAttribute(Q),typeof Y==="function"){b.delete(Q.toLowerCase()),Q==="formAction"?(b.delete("name"),b.delete("formenctype"),b.delete("formmethod"),b.delete("formtarget")):(b.delete("enctype"),b.delete("method"),b.delete("target"));continue}else if(P===Du){b.delete(Q.toLowerCase()),v0(Q,"function",Y,O);continue}Gq(g,Q,Q.toLowerCase(),Y,b,O);continue;case"xlinkHref":Gq(g,Q,"xlink:href",Y,b,O);continue;case"contentEditable":Mq(g,Q,"contenteditable",Y,b,O);continue;case"spellCheck":Mq(g,Q,"spellcheck",Y,b,O);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":Mq(g,Q,Q,Y,b,O);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":BR(g,Q,Q.toLowerCase(),Y,b,O);continue;case"capture":case"download":g:{M=g;var N=P=Q,Z=O;if(b.delete(N),M=M.getAttribute(N),M===null)switch(typeof Y){case"undefined":case"function":case"symbol":break g;default:if(Y===!1)break g}else if(Y!=null)switch(typeof Y){case"function":case"symbol":break;case"boolean":if(Y===!0&&M==="")break g;break;default:if(qr(Y,P),M===""+Y)break g}v0(P,M,Y,Z)}continue;case"cols":case"rows":case"size":case"span":g:{if(M=g,N=P=Q,Z=O,b.delete(N),M=M.getAttribute(N),M===null)switch(typeof Y){case"undefined":case"function":case"symbol":case"boolean":break g;default:if(isNaN(Y)||1>Y)break g}else if(Y!=null)switch(typeof Y){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(Y)||1>Y)&&(qr(Y,P),M===""+Y))break g}v0(P,M,Y,Z)}continue;case"rowSpan":oR(g,Q,"rowspan",Y,b,O);continue;case"start":oR(g,Q,Q,Y,b,O);continue;case"xHeight":Kv(g,Q,"x-height",Y,b,O);continue;case"xlinkActuate":Kv(g,Q,"xlink:actuate",Y,b,O);continue;case"xlinkArcrole":Kv(g,Q,"xlink:arcrole",Y,b,O);continue;case"xlinkRole":Kv(g,Q,"xlink:role",Y,b,O);continue;case"xlinkShow":Kv(g,Q,"xlink:show",Y,b,O);continue;case"xlinkTitle":Kv(g,Q,"xlink:title",Y,b,O);continue;case"xlinkType":Kv(g,Q,"xlink:type",Y,b,O);continue;case"xmlBase":Kv(g,Q,"xml:base",Y,b,O);continue;case"xmlLang":Kv(g,Q,"xml:lang",Y,b,O);continue;case"xmlSpace":Kv(g,Q,"xml:space",Y,b,O);continue;case"inert":Y!==""||C2[Q]||(C2[Q]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",Q)),BR(g,Q,Q,Y,b,O);continue;default:if(!(2<Q.length)||Q[0]!=="o"&&Q[0]!=="O"||Q[1]!=="n"&&Q[1]!=="N"){M=NM(Q),P=!1,h.context===hw&&r!=="svg"&&r!=="math"?b.delete(M.toLowerCase()):(N=Q.toLowerCase(),N=eO.hasOwnProperty(N)?eO[N]||null:null,N!==null&&N!==Q&&(P=!0,b.delete(N)),b.delete(M));g:if(N=g,Z=M,M=Y,ih(Z))if(N.hasAttribute(Z))N=N.getAttribute(Z),qr(M,Z),M=N===""+M?M:N;else{switch(typeof M){case"function":case"symbol":break g;case"boolean":if(N=Z.toLowerCase().slice(0,5),N!=="data-"&&N!=="aria-")break g}M=M===void 0?void 0:null}else M=void 0;P||v0(Q,M,Y,O)}}}return 0<b.size&&v.suppressHydrationWarning!==!0&&LU(g,b,O),Object.keys(O).length===0?null:O}function FU(g,r){switch(g.length){case 0:return"";case 1:return g[0];case 2:return g[0]+" "+r+" "+g[1];default:return g.slice(0,-1).join(", ")+", "+r+" "+g[g.length-1]}}function NR(g){switch(g){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BU(){if(typeof performance.getEntriesByType==="function"){for(var g=0,r=0,v=performance.getEntriesByType("resource"),h=0;h<v.length;h++){var O=v[h],b=O.transferSize,P=O.initiatorType,M=O.duration;if(b&&M&&NR(P)){P=0,M=O.responseEnd;for(h+=1;h<v.length;h++){var Y=v[h],Q=Y.startTime;if(Q>M)break;var{transferSize:N,initiatorType:Z}=Y;N&&NR(Z)&&(Y=Y.responseEnd,P+=N*(Y<M?1:(M-Q)/(Y-Q)))}if(--h,r+=8*(b+P)/(O.duration/1000),g++,10<g)break}}if(0<g)return r/g/1e6}return navigator.connection&&(g=navigator.connection.downlink,typeof g==="number")?g:5}function oO(g){return g.nodeType===9?g:g.ownerDocument}function ZR(g){switch(g){case d4:return oh;case iO:return x2;default:return hw}}function lR(g,r){if(g===hw)switch(r){case"svg":return oh;case"math":return x2;default:return hw}return g===oh&&r==="foreignObject"?hw:g}function Rq(g,r){return g==="textarea"||g==="noscript"||typeof r.children==="string"||typeof r.children==="number"||typeof r.children==="bigint"||typeof r.dangerouslySetInnerHTML==="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}function oU(){var g=window.event;if(g&&g.type==="popstate"){if(g===pP)return!1;return pP=g,!0}return pP=null,!1}function z6(){var g=window.event;return g&&g!==Y8?g.type:null}function $6(){var g=window.event;return g&&g!==Y8?g.timeStamp:-1.1}function IU(g){setTimeout(function(){throw g})}function NU(g,r,v){switch(r){case"button":case"input":case"select":case"textarea":v.autoFocus&&g.focus();break;case"img":v.src?g.src=v.src:v.srcSet&&(g.srcset=v.srcSet)}}function ZU(){}function lU(g,r,v,h){uU(g,r,v,h),g[B0]=h}function TR(g){fh(g,"")}function TU(g,r,v){g.nodeValue=v}function CR(g){if(!g.__reactWarnedAboutChildrenConflict){var r=g[B0]||null;if(r!==null){var v=Zg(g);v!==null&&(typeof r.children==="string"||typeof r.children==="number"?(g.__reactWarnedAboutChildrenConflict=!0,bg(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):r.dangerouslySetInnerHTML!=null&&(g.__reactWarnedAboutChildrenConflict=!0,bg(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Sw(g){return g==="head"}function CU(g,r){g.removeChild(r)}function SU(g,r){(g.nodeType===9?g.body:g.nodeName==="HTML"?g.ownerDocument.body:g).removeChild(r)}function SR(g,r){var v=r,h=0;do{var O=v.nextSibling;if(g.removeChild(v),O&&O.nodeType===8)if(v=O.data,v===X8||v===S2){if(h===0){g.removeChild(O),e4(r);return}h--}else if(v===R8||v===h5||v===b4||v===Bh||v===O4)h++;else if(v===Vu)U6(g.ownerDocument.documentElement);else if(v===_u){v=g.ownerDocument.head,U6(v);for(var b=v.firstChild;b;){var{nextSibling:P,nodeName:M}=b;b[N6]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&b.rel.toLowerCase()==="stylesheet"||v.removeChild(b),b=P}}else v===Eu&&U6(g.ownerDocument.body);v=O}while(v);e4(r)}function xR(g,r){var v=g;g=0;do{var h=v.nextSibling;if(v.nodeType===1?r?(v._stashedDisplay=v.style.display,v.style.display="none"):(v.style.display=v._stashedDisplay||"",v.getAttribute("style")===""&&v.removeAttribute("style")):v.nodeType===3&&(r?(v._stashedText=v.nodeValue,v.nodeValue=""):v.nodeValue=v._stashedText||""),h&&h.nodeType===8)if(v=h.data,v===X8)if(g===0)break;else g--;else v!==R8&&v!==h5&&v!==b4&&v!==Bh||g++;v=h}while(v)}function xU(g){xR(g,!0)}function mU(g){g=g.style,typeof g.setProperty==="function"?g.setProperty("display","none","important"):g.display="none"}function DU(g){g.nodeValue=""}function kU(g){xR(g,!1)}function VU(g,r){r=r[yu],r=r!==void 0&&r!==null&&r.hasOwnProperty("display")?r.display:null,g.style.display=r==null||typeof r==="boolean"?"":(""+r).trim()}function EU(g,r){g.nodeValue=r}function Xq(g){var r=g.firstChild;r&&r.nodeType===10&&(r=r.nextSibling);for(;r;){var v=r;switch(r=r.nextSibling,v.nodeName){case"HTML":case"HEAD":case"BODY":Xq(v),hg(v);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(v.rel.toLowerCase()==="stylesheet")continue}g.removeChild(v)}}function _U(g,r,v,h){for(;g.nodeType===1;){var O=v;if(g.nodeName.toLowerCase()!==r.toLowerCase()){if(!h&&(g.nodeName!=="INPUT"||g.type!=="hidden"))break}else if(!h)if(r==="input"&&g.type==="hidden"){qr(O.name,"name");var b=O.name==null?null:""+O.name;if(O.type==="hidden"&&g.getAttribute("name")===b)return g}else return g;else if(!g[N6])switch(r){case"meta":if(!g.hasAttribute("itemprop"))break;return g;case"link":if(b=g.getAttribute("rel"),b==="stylesheet"&&g.hasAttribute("data-precedence"))break;else if(b!==O.rel||g.getAttribute("href")!==(O.href==null||O.href===""?null:O.href)||g.getAttribute("crossorigin")!==(O.crossOrigin==null?null:O.crossOrigin)||g.getAttribute("title")!==(O.title==null?null:O.title))break;return g;case"style":if(g.hasAttribute("data-precedence"))break;return g;case"script":if(b=g.getAttribute("src"),(b!==(O.src==null?null:O.src)||g.getAttribute("type")!==(O.type==null?null:O.type)||g.getAttribute("crossorigin")!==(O.crossOrigin==null?null:O.crossOrigin))&&b&&g.hasAttribute("async")&&!g.hasAttribute("itemprop"))break;return g;default:return g}if(g=vv(g.nextSibling),g===null)break}return null}function yU(g,r,v){if(r==="")return null;for(;g.nodeType!==3;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!v)return null;if(g=vv(g.nextSibling),g===null)return null}return g}function mR(g,r){for(;g.nodeType!==8;){if((g.nodeType!==1||g.nodeName!=="INPUT"||g.type!=="hidden")&&!r)return null;if(g=vv(g.nextSibling),g===null)return null}return g}function Yq(g){return g.data===h5||g.data===b4}function Jq(g){return g.data===Bh||g.data===h5&&g.ownerDocument.readyState!==F7}function jU(g,r){var v=g.ownerDocument;if(g.data===b4)g._reactRetry=r;else if(g.data!==h5||v.readyState!==F7)r();else{var h=function(){r(),v.removeEventListener("DOMContentLoaded",h)};v.addEventListener("DOMContentLoaded",h),g._reactRetry=h}}function vv(g){for(;g!=null;g=g.nextSibling){var r=g.nodeType;if(r===1||r===3)break;if(r===8){if(r=g.data,r===R8||r===Bh||r===h5||r===b4||r===O4||r===fP||r===u7)break;if(r===X8||r===S2)return null}}return g}function DR(g){if(g.nodeType===1){for(var r=g.nodeName.toLowerCase(),v={},h=g.attributes,O=0;O<h.length;O++){var b=h[O];v[uR(b.name)]=b.name.toLowerCase()==="style"?Wq(g):b.value}return{type:r,props:v}}return g.nodeType===8?g.data===O4?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:g.nodeValue}function kR(g,r,v){return v===null||v[ku]!==!0?(g.nodeValue===r?g=null:(r=Cw(r),g=Cw(g.nodeValue)===r?null:g.nodeValue),g):null}function Qq(g){g=g.nextSibling;for(var r=0;g;){if(g.nodeType===8){var v=g.data;if(v===X8||v===S2){if(r===0)return vv(g.nextSibling);r--}else v!==R8&&v!==Bh&&v!==h5&&v!==b4&&v!==O4||r++}g=g.nextSibling}return null}function VR(g){g=g.previousSibling;for(var r=0;g;){if(g.nodeType===8){var v=g.data;if(v===R8||v===Bh||v===h5||v===b4||v===O4){if(r===0)return g;r--}else v!==X8&&v!==S2||r++}g=g.previousSibling}return null}function iU(g){e4(g)}function eU(g){e4(g)}function nU(g){e4(g)}function ER(g,r,v,h,O){switch(O&&Nb(g,h.ancestorInfo),r=oO(v),g){case"html":if(g=r.documentElement,!g)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"head":if(g=r.head,!g)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return g;case"body":if(g=r.body,!g)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return g;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function fU(g,r,v,h){if(!v[kw]&&Zg(v)){var O=v.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",O,O,O)}switch(g){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(O=v.attributes;O.length;)v.removeAttributeNode(O[0]);M0(v,g,r),v[G0]=h,v[B0]=r}function U6(g){for(var r=g.attributes;r.length;)g.removeAttributeNode(r[0]);hg(g)}function IO(g){return typeof g.getRootNode==="function"?g.getRootNode():g.nodeType===9?g:g.ownerDocument}function _R(g,r,v){var h=Ih;if(h&&typeof r==="string"&&r){var O=Qv(r);O='link[rel="'+g+'"][href="'+O+'"]',typeof v==="string"&&(O+='[crossorigin="'+v+'"]'),l7.has(O)||(l7.add(O),g={rel:g,crossOrigin:v,href:r},h.querySelector(O)===null&&(r=h.createElement("link"),M0(r,"link",g),$g(r),h.head.appendChild(r)))}}function yR(g,r,v,h){var O=(O=mw.current)?IO(O):null;if(!O)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(g){case"meta":case"title":return null;case"style":return typeof v.precedence==="string"&&typeof v.href==="string"?(v=j4(v.href),r=gr(O).hoistableStyles,h=r.get(v),h||(h={type:"style",instance:null,count:0,state:null},r.set(v,h)),h):{type:"void",instance:null,count:0,state:null};case"link":if(v.rel==="stylesheet"&&typeof v.href==="string"&&typeof v.precedence==="string"){g=j4(v.href);var b=gr(O).hoistableStyles,P=b.get(g);if(!P&&(O=O.ownerDocument||O,P={type:"stylesheet",instance:null,count:0,state:{loading:q4,preload:null}},b.set(g,P),(b=O.querySelector(L6(g)))&&!b._p&&(P.instance=b,P.state.loading=J8|Zv),!lv.has(g))){var M={rel:"preload",as:"style",href:v.href,crossOrigin:v.crossOrigin,integrity:v.integrity,media:v.media,hrefLang:v.hrefLang,referrerPolicy:v.referrerPolicy};lv.set(g,M),b||cU(O,g,M,P.state)}if(r&&h===null)throw v=`

  - `+NO(r)+`
  + `+NO(v),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return P}if(r&&h!==null)throw v=`

  - `+NO(r)+`
  + `+NO(v),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return null;case"script":return r=v.async,v=v.src,typeof v==="string"&&r&&typeof r!=="function"&&typeof r!=="symbol"?(v=i4(v),r=gr(O).hoistableScripts,h=r.get(v),h||(h={type:"script",instance:null,count:0,state:null},r.set(v,h)),h):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+g+'". this is a bug in React.')}}function NO(g){var r=0,v="<link";return typeof g.rel==="string"?(r++,v+=' rel="'+g.rel+'"'):mv.call(g,"rel")&&(r++,v+=' rel="'+(g.rel===null?"null":"invalid type "+typeof g.rel)+'"'),typeof g.href==="string"?(r++,v+=' href="'+g.href+'"'):mv.call(g,"href")&&(r++,v+=' href="'+(g.href===null?"null":"invalid type "+typeof g.href)+'"'),typeof g.precedence==="string"?(r++,v+=' precedence="'+g.precedence+'"'):mv.call(g,"precedence")&&(r++,v+=" precedence={"+(g.precedence===null?"null":"invalid type "+typeof g.precedence)+"}"),Object.getOwnPropertyNames(g).length>r&&(v+=" ..."),v+" />"}function j4(g){return'href="'+Qv(g)+'"'}function L6(g){return'link[rel="stylesheet"]['+g+"]"}function jR(g){return yg({},g,{"data-precedence":g.precedence,precedence:null})}function cU(g,r,v,h){g.querySelector('link[rel="preload"][as="style"]['+r+"]")?h.loading=J8:(r=g.createElement("link"),h.preload=r,r.addEventListener("load",function(){return h.loading|=J8}),r.addEventListener("error",function(){return h.loading|=N7}),M0(r,"link",v),$g(r),g.head.appendChild(r))}function i4(g){return'[src="'+Qv(g)+'"]'}function u6(g){return"script[async]"+g}function iR(g,r,v){if(r.count++,r.instance===null)switch(r.type){case"style":var h=g.querySelector('style[data-href~="'+Qv(v.href)+'"]');if(h)return r.instance=h,$g(h),h;var O=yg({},v,{"data-href":v.href,"data-precedence":v.precedence,href:null,precedence:null});return h=(g.ownerDocument||g).createElement("style"),$g(h),M0(h,"style",O),ZO(h,v.precedence,g),r.instance=h;case"stylesheet":O=j4(v.href);var b=g.querySelector(L6(O));if(b)return r.state.loading|=Zv,r.instance=b,$g(b),b;h=jR(v),(O=lv.get(O))&&Kq(h,O),b=(g.ownerDocument||g).createElement("link"),$g(b);var P=b;return P._p=new Promise(function(M,Y){P.onload=M,P.onerror=Y}),M0(b,"link",h),r.state.loading|=Zv,ZO(b,v.precedence,g),r.instance=b;case"script":if(b=i4(v.src),O=g.querySelector(u6(b)))return r.instance=O,$g(O),O;if(h=v,O=lv.get(b))h=yg({},v),zq(h,O);return g=g.ownerDocument||g,O=g.createElement("script"),$g(O),M0(O,"link",h),g.head.appendChild(O),r.instance=O;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+r.type+'". this is a bug in React.')}else r.type==="stylesheet"&&(r.state.loading&Zv)===q4&&(h=r.instance,r.state.loading|=Zv,ZO(h,v.precedence,g));return r.instance}function ZO(g,r,v){for(var h=v.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),O=h.length?h[h.length-1]:null,b=O,P=0;P<h.length;P++){var M=h[P];if(M.dataset.precedence===r)b=M;else if(b!==O)break}b?b.parentNode.insertBefore(g,b.nextSibling):(r=v.nodeType===9?v.head:v,r.insertBefore(g,r.firstChild))}function Kq(g,r){g.crossOrigin==null&&(g.crossOrigin=r.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=r.referrerPolicy),g.title==null&&(g.title=r.title)}function zq(g,r){g.crossOrigin==null&&(g.crossOrigin=r.crossOrigin),g.referrerPolicy==null&&(g.referrerPolicy=r.referrerPolicy),g.integrity==null&&(g.integrity=r.integrity)}function eR(g,r,v){if(m2===null){var h=new Map,O=m2=new Map;O.set(v,h)}else O=m2,h=O.get(v),h||(h=new Map,O.set(v,h));if(h.has(g))return h;h.set(g,null),v=v.getElementsByTagName(g);for(O=0;O<v.length;O++){var b=v[O];if(!(b[N6]||b[G0]||g==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!==d4){var P=b.getAttribute(r)||"";P=g+P;var M=h.get(P);M?M.push(b):h.set(P,[b])}}return h}function nR(g,r,v){g=g.ownerDocument||g,g.head.insertBefore(v,r==="title"?g.querySelector("head > title"):null)}function tU(g,r,v){var h=!v.ancestorInfo.containerTagInScope;if(v.context===oh||r.itemProp!=null)return!h||r.itemProp==null||g!=="meta"&&g!=="title"&&g!=="style"&&g!=="link"&&g!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",g,g),!1;switch(g){case"meta":case"title":return!0;case"style":if(typeof r.precedence!=="string"||typeof r.href!=="string"||r.href===""){h&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof r.rel!=="string"||typeof r.href!=="string"||r.href===""||r.onLoad||r.onError){if(r.rel==="stylesheet"&&typeof r.precedence==="string"){g=r.href;var{onError:O,disabled:b}=r;v=[],r.onLoad&&v.push("`onLoad`"),O&&v.push("`onError`"),b!=null&&v.push("`disabled`"),O=FU(v,"and"),O+=v.length===1?" prop":" props",b=v.length===1?"an "+O:"the "+O,v.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',g,b,O)}h&&(typeof r.rel!=="string"||typeof r.href!=="string"||r.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(r.onError||r.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(r.rel){case"stylesheet":return g=r.precedence,r=r.disabled,typeof g!=="string"&&h&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof g==="string"&&r==null;default:return!0}case"script":if(g=r.async&&typeof r.async!=="function"&&typeof r.async!=="symbol",!g||r.onLoad||r.onError||!r.src||typeof r.src!=="string"){h&&(g?r.onLoad||r.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":h&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",g)}return!1}function fR(g){return g.type==="stylesheet"&&(g.state.loading&Z7)===q4?!1:!0}function pU(g,r,v,h){if(v.type==="stylesheet"&&(typeof h.media!=="string"||matchMedia(h.media).matches!==!1)&&(v.state.loading&Zv)===q4){if(v.instance===null){var O=j4(h.href),b=r.querySelector(L6(O));if(b){r=b._p,r!==null&&typeof r==="object"&&typeof r.then==="function"&&(g.count++,g=lO.bind(g),r.then(g,g)),v.state.loading|=Zv,v.instance=b,$g(b);return}b=r.ownerDocument||r,h=jR(h),(O=lv.get(O))&&Kq(h,O),b=b.createElement("link"),$g(b);var P=b;P._p=new Promise(function(M,Y){P.onload=M,P.onerror=Y}),M0(b,"link",h),v.instance=b}g.stylesheets===null&&(g.stylesheets=new Map),g.stylesheets.set(v,r),(r=v.state.preload)&&(v.state.loading&Z7)===q4&&(g.count++,v=lO.bind(g),r.addEventListener("load",v),r.addEventListener("error",v))}}function dU(g,r){return g.stylesheets&&g.count===0&&TO(g,g.stylesheets),0<g.count||0<g.imgCount?function(v){var h=setTimeout(function(){if(g.stylesheets&&TO(g,g.stylesheets),g.unsuspend){var b=g.unsuspend;g.unsuspend=null,b()}},eu+r);0<g.imgBytes&&aP===0&&(aP=125*BU()*fu);var O=setTimeout(function(){if(g.waitingForImages=!1,g.count===0&&(g.stylesheets&&TO(g,g.stylesheets),g.unsuspend)){var b=g.unsuspend;g.unsuspend=null,b()}},(g.imgBytes>aP?50:nu)+r);return g.unsuspend=v,function(){g.unsuspend=null,clearTimeout(h),clearTimeout(O)}}:null}function lO(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)TO(this,this.stylesheets);else if(this.unsuspend){var g=this.unsuspend;this.unsuspend=null,g()}}}function TO(g,r){g.stylesheets=null,g.unsuspend!==null&&(g.count++,D2=new Map,r.forEach(aU,g),D2=null,lO.call(g))}function aU(g,r){if(!(r.state.loading&Zv)){var v=D2.get(g);if(v)var h=v.get(sP);else{v=new Map,D2.set(g,v);for(var O=g.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<O.length;b++){var P=O[b];if(P.nodeName==="LINK"||P.getAttribute("media")!=="not all")v.set(P.dataset.precedence,P),h=P}h&&v.set(sP,h)}O=r.instance,P=O.getAttribute("data-precedence"),b=v.get(P)||h,b===h&&v.set(sP,O),v.set(P,O),this.count++,h=lO.bind(this),O.addEventListener("load",h),O.addEventListener("error",h),b?b.parentNode.insertBefore(O,b.nextSibling):(g=g.nodeType===9?g.head:g,g.insertBefore(O,g.firstChild)),r.state.loading|=Zv}}function sU(g,r,v,h,O,b,P,M,Y){this.tag=1,this.containerInfo=g,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=A4,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=o4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=o4(0),this.hiddenUpdates=o4(null),this.identifierPrefix=h,this.onUncaughtError=O,this.onCaughtError=b,this.onRecoverableError=P,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,g=this.pendingUpdatersLaneMap=[];for(r=0;31>r;r++)g.push(new Set);this._debugRootType=v?"hydrateRoot()":"createRoot()"}function cR(g,r,v,h,O,b,P,M,Y,Q,N,Z){return g=new sU(g,r,v,P,Y,Q,N,Z,M),r=Qu,b===!0&&(r|=U0|kv),r|=xg,b=L(3,null,null,r),g.current=b,b.stateNode=g,r=cb(),x5(r),g.pooledCache=r,x5(r),b.memoizedState={element:h,isDehydrated:v,cache:r},sb(b),g}function tR(g){if(!g)return yw;return g=yw,g}function $q(g,r,v,h,O,b){if($0&&typeof $0.onScheduleFiberRoot==="function")try{$0.onScheduleFiberRoot(t4,h,v)}catch(P){K1||(K1=!0,console.error("React instrumentation encountered an error: %o",P))}O=tR(O),h.context===null?h.context=O:h.pendingContext=O,Q1&&hv!==null&&!x7&&(x7=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,D(hv)||"Unknown")),h=ow(r),h.payload={element:v},b=b===void 0?null:b,b!==null&&(typeof b!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",b),h.callback=b),v=Iw(g,h,r),v!==null&&(w1(r,"root.render()",null),Ir(v,g,r),h6(v,g,r))}function pR(g,r){if(g=g.memoizedState,g!==null&&g.dehydrated!==null){var v=g.retryLane;g.retryLane=v!==0&&v<r?v:r}}function Uq(g,r){pR(g,r),(g=g.alternate)&&pR(g,r)}function dR(g){if(g.tag===13||g.tag===31){var r=z0(g,67108864);r!==null&&Ir(r,g,67108864),Uq(g,67108864)}}function aR(g){if(g.tag===13||g.tag===31){var r=rv(g);r=B5(r);var v=z0(g,r);v!==null&&Ir(v,g,r),Uq(g,r)}}function gL(){return hv}function rL(g,r,v,h){var O=m.T;m.T=null;var b=hr.p;try{hr.p=Hv,Lq(g,r,v,h)}finally{hr.p=b,m.T=O}}function vL(g,r,v,h){var O=m.T;m.T=null;var b=hr.p;try{hr.p=Dv,Lq(g,r,v,h)}finally{hr.p=b,m.T=O}}function Lq(g,r,v,h){if(V2){var O=uq(h);if(O===null)Aq(g,r,h,E2,v),gX(g,h);else if(wL(O,g,r,v,h))h.stopPropagation();else if(gX(g,h),r&4&&-1<tu.indexOf(g)){for(;O!==null;){var b=Zg(O);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var P=sv(b.pendingLanes);if(P!==0){var M=b;M.pendingLanes|=2;for(M.entangledLanes|=2;P;){var Y=1<<31-F0(P);M.entanglements[1]|=Y,P&=~Y}R1(b),(ag&(g0|qv))===O0&&(U2=w0()+q7,Q6(0,!1))}}break;case 31:case 13:M=z0(b,2),M!==null&&Ir(M,b,2),E4(),Uq(b,2)}if(b=uq(h),b===null&&Aq(g,r,h,E2,v),b===O)break;O=b}O!==null&&h.stopPropagation()}else Aq(g,r,h,null,v)}}function uq(g){return g=Zb(g),Fq(g)}function Fq(g){if(E2=null,g=Xg(g),g!==null){var r=_(g);if(r===null)g=null;else{var v=r.tag;if(v===13){if(g=Wg(r),g!==null)return g;g=null}else if(v===31){if(g=Og(r),g!==null)return g;g=null}else if(v===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;g=null}else r!==g&&(g=null)}}return E2=g,null}function sR(g){switch(g){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Hv;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Dv;case"message":switch(ML()){case kq:return Hv;case Vq:return Dv;case c4:case GL:return $1;case Eq:return yO;default:return $1}default:return $1}}function gX(g,r){switch(g){case"focusin":case"focusout":H5=null;break;case"dragenter":case"dragleave":O5=null;break;case"mouseover":case"mouseout":b5=null;break;case"pointerover":case"pointerout":K8.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":z8.delete(r.pointerId)}}function F6(g,r,v,h,O,b){if(g===null||g.nativeEvent!==b)return g={blockedOn:r,domEventName:v,eventSystemFlags:h,nativeEvent:b,targetContainers:[O]},r!==null&&(r=Zg(r),r!==null&&dR(r)),g;return g.eventSystemFlags|=h,r=g.targetContainers,O!==null&&r.indexOf(O)===-1&&r.push(O),g}function wL(g,r,v,h,O){switch(r){case"focusin":return H5=F6(H5,g,r,v,h,O),!0;case"dragenter":return O5=F6(O5,g,r,v,h,O),!0;case"mouseover":return b5=F6(b5,g,r,v,h,O),!0;case"pointerover":var b=O.pointerId;return K8.set(b,F6(K8.get(b)||null,g,r,v,h,O)),!0;case"gotpointercapture":return b=O.pointerId,z8.set(b,F6(z8.get(b)||null,g,r,v,h,O)),!0}return!1}function rX(g){var r=Xg(g.target);if(r!==null){var v=_(r);if(v!==null){if(r=v.tag,r===13){if(r=Wg(v),r!==null){g.blockedOn=r,f(g.priority,function(){aR(v)});return}}else if(r===31){if(r=Og(v),r!==null){g.blockedOn=r,f(g.priority,function(){aR(v)});return}}else if(r===3&&v.stateNode.current.memoizedState.isDehydrated){g.blockedOn=v.tag===3?v.stateNode.containerInfo:null;return}}}g.blockedOn=null}function CO(g){if(g.blockedOn!==null)return!1;for(var r=g.targetContainers;0<r.length;){var v=uq(g.nativeEvent);if(v===null){v=g.nativeEvent;var h=new v.constructor(v.type,v),O=h;Z6!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Z6=O,v.target.dispatchEvent(h),Z6===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Z6=null}else return r=Zg(v),r!==null&&dR(r),g.blockedOn=v,!1;r.shift()}return!0}function vX(g,r,v){CO(g)&&v.delete(r)}function hL(){gW=!1,H5!==null&&CO(H5)&&(H5=null),O5!==null&&CO(O5)&&(O5=null),b5!==null&&CO(b5)&&(b5=null),K8.forEach(vX),z8.forEach(vX)}function SO(g,r){g.blockedOn===r&&(g.blockedOn=null,gW||(gW=!0,rr.unstable_scheduleCallback(rr.unstable_NormalPriority,hL)))}function wX(g){_2!==g&&(_2=g,rr.unstable_scheduleCallback(rr.unstable_NormalPriority,function(){_2===g&&(_2=null);for(var r=0;r<g.length;r+=3){var v=g[r],h=g[r+1],O=g[r+2];if(typeof h!=="function")if(Fq(h||v)===null)continue;else break;var b=Zg(v);b!==null&&(g.splice(r,3),r-=3,v={pending:!0,data:O,method:v.method,action:h},Object.freeze(v),FA(b,v,h,O))}}))}function e4(g){function r(Y){return SO(Y,g)}H5!==null&&SO(H5,g),O5!==null&&SO(O5,g),b5!==null&&SO(b5,g),K8.forEach(r),z8.forEach(r);for(var v=0;v<A5.length;v++){var h=A5[v];h.blockedOn===g&&(h.blockedOn=null)}for(;0<A5.length&&(v=A5[0],v.blockedOn===null);)rX(v),v.blockedOn===null&&A5.shift();if(v=(g.ownerDocument||g).$$reactFormReplay,v!=null)for(h=0;h<v.length;h+=3){var O=v[h],b=v[h+1],P=O[B0]||null;if(typeof b==="function")P||wX(v);else if(P){var M=null;if(b&&b.hasAttribute("formAction")){if(O=b,P=b[B0]||null)M=P.formAction;else if(Fq(O)!==null)continue}else M=P.action;typeof M==="function"?v[h+1]=M:(v.splice(h,3),h-=3),wX(v)}}}function hX(){function g(b){b.canIntercept&&b.info==="react-transition"&&b.intercept({handler:function(){return new Promise(function(P){return O=P})},focusReset:"manual",scroll:"manual"})}function r(){O!==null&&(O(),O=null),h||setTimeout(v,20)}function v(){if(!h&&!navigation.transition){var b=navigation.currentEntry;b&&b.url!=null&&navigation.navigate(b.url,{state:b.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var h=!1,O=null;return navigation.addEventListener("navigate",g),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(v,100),function(){h=!0,navigation.removeEventListener("navigate",g),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),O!==null&&(O(),O=null)}}}function Bq(g){this._internalRoot=g}function xO(g){this._internalRoot=g}function HX(g){g[kw]&&(g._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var yg=Object.assign,HL=Symbol.for("react.element"),Y1=Symbol.for("react.transitional.element"),n4=Symbol.for("react.portal"),f4=Symbol.for("react.fragment"),mO=Symbol.for("react.strict_mode"),oq=Symbol.for("react.profiler"),Iq=Symbol.for("react.consumer"),J1=Symbol.for("react.context"),B6=Symbol.for("react.forward_ref"),Nq=Symbol.for("react.suspense"),Zq=Symbol.for("react.suspense_list"),DO=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),lq=Symbol.for("react.activity"),OL=Symbol.for("react.memo_cache_sentinel"),OX=Symbol.iterator,bL=Symbol.for("react.client.reference"),ar=Array.isArray,m=Nh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hr=wW.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,AL=Object.freeze({pending:!1,data:null,method:null,action:null}),Tq=[],Cq=[],i1=-1,xw=Fg(null),o6=Fg(null),mw=Fg(null),kO=Fg(null),I6=0,bX,AX,qX,PX,WX,MX,GX;T.__reactDisabledLog=!0;var Sq,RX,xq=!1,mq=new(typeof WeakMap==="function"?WeakMap:Map),hv=null,Q1=!1,mv=Object.prototype.hasOwnProperty,Dq=rr.unstable_scheduleCallback,qL=rr.unstable_cancelCallback,PL=rr.unstable_shouldYield,WL=rr.unstable_requestPaint,w0=rr.unstable_now,ML=rr.unstable_getCurrentPriorityLevel,kq=rr.unstable_ImmediatePriority,Vq=rr.unstable_UserBlockingPriority,c4=rr.unstable_NormalPriority,GL=rr.unstable_LowPriority,Eq=rr.unstable_IdlePriority,RL=rr.log,XL=rr.unstable_setDisableYieldValue,t4=null,$0=null,K1=!1,z1=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",F0=Math.clz32?Math.clz32:BH,YL=Math.log,JL=Math.LN2,VO=256,EO=262144,_O=4194304,Hv=2,Dv=8,$1=32,yO=268435456,Dw=Math.random().toString(36).slice(2),G0="__reactFiber$"+Dw,B0="__reactProps$"+Dw,kw="__reactContainer$"+Dw,_q="__reactEvents$"+Dw,QL="__reactListeners$"+Dw,KL="__reactHandles$"+Dw,XX="__reactResources$"+Dw,N6="__reactMarker$"+Dw,YX=new Set,y5={},yq={},zL={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},$L=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),JX={},QX={},UL=/[\n"\\]/g,KX=!1,zX=!1,$X=!1,UX=!1,LX=!1,uX=!1,FX=["value","defaultValue"],BX=!1,oX=/["'&<>\n\t]|^\s|\s$/,LL="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),IX="applet caption html table td th marquee object template foreignObject desc title".split(" "),uL=IX.concat(["button"]),FL="dd dt li option optgroup p rp rt".split(" "),NX={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},jO={},jq={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},ZX=/([A-Z])/g,lX=/^ms-/,BL=/^(?:webkit|moz|o)[A-Z]/,oL=/^-ms-/,IL=/-(.)/g,TX=/;\s*$/,p4={},iq={},CX=!1,SX=!1,xX=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),iO="http://www.w3.org/1998/Math/MathML",d4="http://www.w3.org/2000/svg",NL=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eO={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},mX={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},a4={},ZL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),DX=!1,o0={},kX=/^on./,TL=/^on[^A-Z]/,CL=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),SL=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xL=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Z6=null,s4=null,gh=null,eq=!1,U1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nq=!1;if(U1)try{var l6={};Object.defineProperty(l6,"passive",{get:function(){nq=!0}}),window.addEventListener("test",l6,l6),window.removeEventListener("test",l6,l6)}catch(g){nq=!1}var Vw=null,fq=null,nO=null,j5={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(g){return g.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fO=V0(j5),T6=yg({},j5,{view:0,detail:0}),mL=V0(T6),cq,tq,C6,cO=yg({},T6,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lb,button:0,buttons:0,relatedTarget:function(g){return g.relatedTarget===void 0?g.fromElement===g.srcElement?g.toElement:g.fromElement:g.relatedTarget},movementX:function(g){if("movementX"in g)return g.movementX;return g!==C6&&(C6&&g.type==="mousemove"?(cq=g.screenX-C6.screenX,tq=g.screenY-C6.screenY):tq=cq=0,C6=g),cq},movementY:function(g){return"movementY"in g?g.movementY:tq}}),VX=V0(cO),DL=yg({},cO,{dataTransfer:0}),kL=V0(DL),VL=yg({},T6,{relatedTarget:0}),pq=V0(VL),EL=yg({},j5,{animationName:0,elapsedTime:0,pseudoElement:0}),_L=V0(EL),yL=yg({},j5,{clipboardData:function(g){return"clipboardData"in g?g.clipboardData:window.clipboardData}}),jL=V0(yL),iL=yg({},j5,{data:0}),EX=V0(iL),eL=EX,nL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},tL=yg({},T6,{key:function(g){if(g.key){var r=nL[g.key]||g.key;if(r!=="Unidentified")return r}return g.type==="keypress"?(g=CH(g),g===13?"Enter":String.fromCharCode(g)):g.type==="keydown"||g.type==="keyup"?fL[g.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lb,charCode:function(g){return g.type==="keypress"?CH(g):0},keyCode:function(g){return g.type==="keydown"||g.type==="keyup"?g.keyCode:0},which:function(g){return g.type==="keypress"?CH(g):g.type==="keydown"||g.type==="keyup"?g.keyCode:0}}),pL=V0(tL),dL=yg({},cO,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_X=V0(dL),aL=yg({},T6,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lb}),sL=V0(aL),gu=yg({},j5,{propertyName:0,elapsedTime:0,pseudoElement:0}),ru=V0(gu),vu=yg({},cO,{deltaX:function(g){return"deltaX"in g?g.deltaX:("wheelDeltaX"in g)?-g.wheelDeltaX:0},deltaY:function(g){return"deltaY"in g?g.deltaY:("wheelDeltaY"in g)?-g.wheelDeltaY:("wheelDelta"in g)?-g.wheelDelta:0},deltaZ:0,deltaMode:0}),wu=V0(vu),hu=yg({},j5,{newState:0,oldState:0}),Hu=V0(hu),Ou=[9,13,27,32],yX=229,dq=U1&&"CompositionEvent"in window,S6=null;U1&&"documentMode"in document&&(S6=document.documentMode);var bu=U1&&"TextEvent"in window&&!S6,jX=U1&&(!dq||S6&&8<S6&&11>=S6),iX=32,eX=String.fromCharCode(iX),nX=!1,rh=!1,Au={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},x6=null,m6=null,fX=!1;U1&&(fX=N$("input")&&(!document.documentMode||9<document.documentMode));var I0=typeof Object.is==="function"?Object.is:x$,qu=U1&&"documentMode"in document&&11>=document.documentMode,vh=null,aq=null,D6=null,sq=!1,wh={animationend:I5("Animation","AnimationEnd"),animationiteration:I5("Animation","AnimationIteration"),animationstart:I5("Animation","AnimationStart"),transitionrun:I5("Transition","TransitionRun"),transitionstart:I5("Transition","TransitionStart"),transitioncancel:I5("Transition","TransitionCancel"),transitionend:I5("Transition","TransitionEnd")},gP={},cX={};U1&&(cX=document.createElement("div").style,("AnimationEvent"in window)||(delete wh.animationend.animation,delete wh.animationiteration.animation,delete wh.animationstart.animation),("TransitionEvent"in window)||delete wh.transitionend.transition);var tX=N5("animationend"),pX=N5("animationiteration"),dX=N5("animationstart"),Pu=N5("transitionrun"),Wu=N5("transitionstart"),Mu=N5("transitioncancel"),aX=N5("transitionend"),sX=new Map,rP="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rP.push("scrollEnd");var gY=0;if(typeof performance==="object"&&typeof performance.now==="function")var Gu=performance,rY=function(){return Gu.now()};else{var Ru=Date;rY=function(){return Ru.now()}}var vP=typeof reportError==="function"?reportError:function(g){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g==="object"&&g!==null&&typeof g.message==="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(r))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",g);return}console.error(g)},Xu="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",tO=0,wP=1,hP=2,HP=3,pO="– ",dO="+ ",vY="  ",Kr=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",zv="Components ⚛",jg="Scheduler ⚛",ig="Blocking",Ew=!1,e1={color:"primary",properties:null,tooltipText:"",track:zv},_w={start:-0,end:-0,detail:{devtools:e1}},Yu=["Changed Props",""],wY="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",Ju=["Changed Props",wY],k6=1,n1=2,$v=[],hh=0,OP=0,yw={};Object.freeze(yw);var Uv=null,Hh=null,Bg=0,Qu=1,xg=2,U0=8,kv=16,Ku=32,hY=!1;try{var HY=Object.preventExtensions({})}catch(g){hY=!0}var bP=new WeakMap,Oh=[],bh=0,aO=null,V6=0,Lv=[],uv=0,i5=null,f1=1,c1="",R0=null,zr=null,fg=!1,L1=!1,Ov=null,jw=null,Fv=!1,AP=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),qP=Fg(null),PP=Fg(null),OY={},sO=null,Ah=null,qh=!1,zu=typeof AbortController<"u"?AbortController:function(){var g=[],r=this.signal={aborted:!1,addEventListener:function(v,h){g.push(h)}};this.abort=function(){r.aborted=!0,g.forEach(function(v){return v()})}},$u=rr.unstable_scheduleCallback,Uu=rr.unstable_NormalPriority,ir={$$typeof:J1,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},er=rr.unstable_now,g2=console.createTask?console.createTask:function(){return null},E6=1,r2=2,h0=-0,iw=-0,t1=-0,p1=null,N0=-1.1,e5=-0,Fr=-0,Ug=-1.1,ug=-1.1,Lr=null,Nr=!1,ew=-0,u1=-1.1,_6=null,nw=0,WP=null,MP=null,n5=-1.1,y6=null,Ph=-1.1,v2=-1.1,F1=-0,d1=-1.1,Bv=-1.1,GP=0,j6=null,bY=null,AY=null,fw=-1.1,f5=null,cw=-1.1,w2=-1.1,qY=-0,PY=-0,h2=0,a1=null,WY=0,i6=-1.1,H2=!1,O2=!1,e6=null,RP=0,c5=0,Wh=null,MY=m.S;m.S=function(g,r){if(b7=w0(),typeof r==="object"&&r!==null&&typeof r.then==="function"){if(0>d1&&0>Bv){d1=er();var v=$6(),h=z6();if(v!==cw||h!==f5)cw=-1.1;fw=v,f5=h}y$(g,r)}MY!==null&&MY(g,r)};var t5=Fg(null),Vv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},n6=[],f6=[],c6=[],t6=[],p6=[],d6=[],p5=new Set;Vv.recordUnsafeLifecycleWarnings=function(g,r){p5.has(g.type)||(typeof r.componentWillMount==="function"&&r.componentWillMount.__suppressDeprecationWarning!==!0&&n6.push(g),g.mode&U0&&typeof r.UNSAFE_componentWillMount==="function"&&f6.push(g),typeof r.componentWillReceiveProps==="function"&&r.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&c6.push(g),g.mode&U0&&typeof r.UNSAFE_componentWillReceiveProps==="function"&&t6.push(g),typeof r.componentWillUpdate==="function"&&r.componentWillUpdate.__suppressDeprecationWarning!==!0&&p6.push(g),g.mode&U0&&typeof r.UNSAFE_componentWillUpdate==="function"&&d6.push(g))},Vv.flushPendingUnsafeLifecycleWarnings=function(){var g=new Set;0<n6.length&&(n6.forEach(function(M){g.add(D(M)||"Component"),p5.add(M.type)}),n6=[]);var r=new Set;0<f6.length&&(f6.forEach(function(M){r.add(D(M)||"Component"),p5.add(M.type)}),f6=[]);var v=new Set;0<c6.length&&(c6.forEach(function(M){v.add(D(M)||"Component"),p5.add(M.type)}),c6=[]);var h=new Set;0<t6.length&&(t6.forEach(function(M){h.add(D(M)||"Component"),p5.add(M.type)}),t6=[]);var O=new Set;0<p6.length&&(p6.forEach(function(M){O.add(D(M)||"Component"),p5.add(M.type)}),p6=[]);var b=new Set;if(0<d6.length&&(d6.forEach(function(M){b.add(D(M)||"Component"),p5.add(M.type)}),d6=[]),0<r.size){var P=J(r);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,P)}0<h.size&&(P=J(h),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,P)),0<b.size&&(P=J(b),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,P)),0<g.size&&(P=J(g),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,P)),0<v.size&&(P=J(v),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,P)),0<O.size&&(P=J(O),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,P))};var b2=new Map,GY=new Set;Vv.recordLegacyContextWarning=function(g,r){var v=null;for(var h=g;h!==null;)h.mode&U0&&(v=h),h=h.return;v===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!GY.has(g.type)&&(h=b2.get(v),g.type.contextTypes!=null||g.type.childContextTypes!=null||r!==null&&typeof r.getChildContext==="function")&&(h===void 0&&(h=[],b2.set(v,h)),h.push(g))},Vv.flushLegacyContextWarning=function(){b2.forEach(function(g){if(g.length!==0){var r=g[0],v=new Set;g.forEach(function(O){v.add(D(O)||"Component"),GY.add(O.type)});var h=J(v);bg(r,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,h)})}})},Vv.discardPendingWarnings=function(){n6=[],f6=[],c6=[],t6=[],p6=[],d6=[],b2=new Map};var RY={react_stack_bottom_frame:function(g,r,v){var h=Q1;Q1=!0;try{return g(r,v)}finally{Q1=h}}},XP=RY.react_stack_bottom_frame.bind(RY),XY={react_stack_bottom_frame:function(g){var r=Q1;Q1=!0;try{return g.render()}finally{Q1=r}}},YY=XY.react_stack_bottom_frame.bind(XY),JY={react_stack_bottom_frame:function(g,r){try{r.componentDidMount()}catch(v){wr(g,g.return,v)}}},YP=JY.react_stack_bottom_frame.bind(JY),QY={react_stack_bottom_frame:function(g,r,v,h,O){try{r.componentDidUpdate(v,h,O)}catch(b){wr(g,g.return,b)}}},KY=QY.react_stack_bottom_frame.bind(QY),zY={react_stack_bottom_frame:function(g,r){var v=r.stack;g.componentDidCatch(r.value,{componentStack:v!==null?v:""})}},Lu=zY.react_stack_bottom_frame.bind(zY),$Y={react_stack_bottom_frame:function(g,r,v){try{v.componentWillUnmount()}catch(h){wr(g,r,h)}}},UY=$Y.react_stack_bottom_frame.bind($Y),LY={react_stack_bottom_frame:function(g){var r=g.create;return g=g.inst,r=r(),g.destroy=r}},uu=LY.react_stack_bottom_frame.bind(LY),uY={react_stack_bottom_frame:function(g,r,v){try{v()}catch(h){wr(g,r,h)}}},Fu=uY.react_stack_bottom_frame.bind(uY),FY={react_stack_bottom_frame:function(g){var r=g._init;return r(g._payload)}},Bu=FY.react_stack_bottom_frame.bind(FY),Mh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),JP=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),A2=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),q2={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},d5=null,a6=!1,Gh=null,s6=0,mg=null,QP,BY=QP=!1,oY={},IY={},NY={};$=function(g,r,v){if(v!==null&&typeof v==="object"&&v._store&&(!v._store.validated&&v.key==null||v._store.validated===2)){if(typeof v._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");v._store.validated=1;var h=D(g),O=h||"null";if(!oY[O]){oY[O]=!0,v=v._owner,g=g._debugOwner;var b="";g&&typeof g.tag==="number"&&(O=D(g))&&(b=`

Check the render method of \``+O+"`."),b||h&&(b=`

Check the top-level render call using <`+h+">.");var P="";v!=null&&g!==v&&(h=null,typeof v.tag==="number"?h=D(v):typeof v.name==="string"&&(h=v.name),h&&(P=" It was passed a child from "+h+".")),bg(r,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,P)})}}};var a5=$9(!0),ZY=$9(!1),lY=0,TY=1,CY=2,KP=3,tw=!1,SY=!1,zP=null,$P=!1,Rh=Fg(null),P2=Fg(0),bv=Fg(null),ov=null,Xh=1,g8=2,kr=Fg(0),W2=0,Iv=1,Z0=2,Av=4,l0=8,Yh,xY=new Set,mY=new Set,UP=new Set,DY=new Set,s1=0,og=null,Rr=null,nr=null,M2=!1,Jh=!1,s5=!1,G2=0,r8=0,gw=null,ou=0,Iu=25,x=null,Nv=null,rw=-1,v8=!1,w8={readContext:Ur,use:lw,useCallback:xr,useContext:xr,useEffect:xr,useImperativeHandle:xr,useLayoutEffect:xr,useInsertionEffect:xr,useMemo:xr,useReducer:xr,useRef:xr,useState:xr,useDebugValue:xr,useDeferredValue:xr,useTransition:xr,useSyncExternalStore:xr,useId:xr,useHostTransitionStatus:xr,useFormState:xr,useActionState:xr,useOptimistic:xr,useMemoCache:xr,useCacheRefresh:xr};w8.useEffectEvent=xr;var LP=null,kY=null,uP=null,VY=null,B1=null,Ev=null,R2=null;LP={readContext:function(g){return Ur(g)},use:lw,useCallback:function(g,r){return x="useCallback",_g(),C4(r),$A(g,r)},useContext:function(g){return x="useContext",_g(),Ur(g)},useEffect:function(g,r){return x="useEffect",_g(),C4(r),bO(g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",_g(),C4(v),zA(g,r,v)},useInsertionEffect:function(g,r){x="useInsertionEffect",_g(),C4(r),D5(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",_g(),C4(r),KA(g,r)},useMemo:function(g,r){x="useMemo",_g(),C4(r);var v=m.H;m.H=B1;try{return UA(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",_g();var h=m.H;m.H=B1;try{return PA(g,r,v)}finally{m.H=h}},useRef:function(g){return x="useRef",_g(),JA(g)},useState:function(g){x="useState",_g();var r=m.H;m.H=B1;try{return RA(g)}finally{m.H=r}},useDebugValue:function(){x="useDebugValue",_g()},useDeferredValue:function(g,r){return x="useDeferredValue",_g(),LA(g,r)},useTransition:function(){return x="useTransition",_g(),BA()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",_g(),MA(g,r,v)},useId:function(){return x="useId",_g(),oA()},useFormState:function(g,r){return x="useFormState",_g(),vO(),x4(g,r)},useActionState:function(g,r){return x="useActionState",_g(),x4(g,r)},useOptimistic:function(g){return x="useOptimistic",_g(),XA(g)},useHostTransitionStatus:k5,useMemoCache:m5,useCacheRefresh:function(){return x="useCacheRefresh",_g(),IA()},useEffectEvent:function(g){return x="useEffectEvent",_g(),QA(g)}},kY={readContext:function(g){return Ur(g)},use:lw,useCallback:function(g,r){return x="useCallback",e(),$A(g,r)},useContext:function(g){return x="useContext",e(),Ur(g)},useEffect:function(g,r){return x="useEffect",e(),bO(g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",e(),zA(g,r,v)},useInsertionEffect:function(g,r){x="useInsertionEffect",e(),D5(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",e(),KA(g,r)},useMemo:function(g,r){x="useMemo",e();var v=m.H;m.H=B1;try{return UA(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",e();var h=m.H;m.H=B1;try{return PA(g,r,v)}finally{m.H=h}},useRef:function(g){return x="useRef",e(),JA(g)},useState:function(g){x="useState",e();var r=m.H;m.H=B1;try{return RA(g)}finally{m.H=r}},useDebugValue:function(){x="useDebugValue",e()},useDeferredValue:function(g,r){return x="useDeferredValue",e(),LA(g,r)},useTransition:function(){return x="useTransition",e(),BA()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",e(),MA(g,r,v)},useId:function(){return x="useId",e(),oA()},useActionState:function(g,r){return x="useActionState",e(),x4(g,r)},useFormState:function(g,r){return x="useFormState",e(),vO(),x4(g,r)},useOptimistic:function(g){return x="useOptimistic",e(),XA(g)},useHostTransitionStatus:k5,useMemoCache:m5,useCacheRefresh:function(){return x="useCacheRefresh",e(),IA()},useEffectEvent:function(g){return x="useEffectEvent",e(),QA(g)}},uP={readContext:function(g){return Ur(g)},use:lw,useCallback:function(g,r){return x="useCallback",e(),PO(g,r)},useContext:function(g){return x="useContext",e(),Ur(g)},useEffect:function(g,r){x="useEffect",e(),E0(2048,l0,g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",e(),qO(g,r,v)},useInsertionEffect:function(g,r){return x="useInsertionEffect",e(),E0(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",e(),E0(4,Av,g,r)},useMemo:function(g,r){x="useMemo",e();var v=m.H;m.H=Ev;try{return WO(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",e();var h=m.H;m.H=Ev;try{return S4(g,r,v)}finally{m.H=h}},useRef:function(){return x="useRef",e(),Or().memoizedState},useState:function(){x="useState",e();var g=m.H;m.H=Ev;try{return S4(Sv)}finally{m.H=g}},useDebugValue:function(){x="useDebugValue",e()},useDeferredValue:function(g,r){return x="useDeferredValue",e(),j9(g,r)},useTransition:function(){return x="useTransition",e(),t9()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",e(),hO(g,r,v)},useId:function(){return x="useId",e(),Or().memoizedState},useFormState:function(g){return x="useFormState",e(),vO(),HO(g)},useActionState:function(g){return x="useActionState",e(),HO(g)},useOptimistic:function(g,r){return x="useOptimistic",e(),C9(g,r)},useHostTransitionStatus:k5,useMemoCache:m5,useCacheRefresh:function(){return x="useCacheRefresh",e(),Or().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",e(),AO(g)}},VY={readContext:function(g){return Ur(g)},use:lw,useCallback:function(g,r){return x="useCallback",e(),PO(g,r)},useContext:function(g){return x="useContext",e(),Ur(g)},useEffect:function(g,r){x="useEffect",e(),E0(2048,l0,g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",e(),qO(g,r,v)},useInsertionEffect:function(g,r){return x="useInsertionEffect",e(),E0(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",e(),E0(4,Av,g,r)},useMemo:function(g,r){x="useMemo",e();var v=m.H;m.H=R2;try{return WO(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",e();var h=m.H;m.H=R2;try{return A6(g,r,v)}finally{m.H=h}},useRef:function(){return x="useRef",e(),Or().memoizedState},useState:function(){x="useState",e();var g=m.H;m.H=R2;try{return A6(Sv)}finally{m.H=g}},useDebugValue:function(){x="useDebugValue",e()},useDeferredValue:function(g,r){return x="useDeferredValue",e(),i9(g,r)},useTransition:function(){return x="useTransition",e(),p9()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",e(),hO(g,r,v)},useId:function(){return x="useId",e(),Or().memoizedState},useFormState:function(g){return x="useFormState",e(),vO(),OO(g)},useActionState:function(g){return x="useActionState",e(),OO(g)},useOptimistic:function(g,r){return x="useOptimistic",e(),x9(g,r)},useHostTransitionStatus:k5,useMemoCache:m5,useCacheRefresh:function(){return x="useCacheRefresh",e(),Or().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",e(),AO(g)}},B1={readContext:function(g){return z(),Ur(g)},use:function(g){return X(),lw(g)},useCallback:function(g,r){return x="useCallback",X(),_g(),$A(g,r)},useContext:function(g){return x="useContext",X(),_g(),Ur(g)},useEffect:function(g,r){return x="useEffect",X(),_g(),bO(g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",X(),_g(),zA(g,r,v)},useInsertionEffect:function(g,r){x="useInsertionEffect",X(),_g(),D5(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",X(),_g(),KA(g,r)},useMemo:function(g,r){x="useMemo",X(),_g();var v=m.H;m.H=B1;try{return UA(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",X(),_g();var h=m.H;m.H=B1;try{return PA(g,r,v)}finally{m.H=h}},useRef:function(g){return x="useRef",X(),_g(),JA(g)},useState:function(g){x="useState",X(),_g();var r=m.H;m.H=B1;try{return RA(g)}finally{m.H=r}},useDebugValue:function(){x="useDebugValue",X(),_g()},useDeferredValue:function(g,r){return x="useDeferredValue",X(),_g(),LA(g,r)},useTransition:function(){return x="useTransition",X(),_g(),BA()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",X(),_g(),MA(g,r,v)},useId:function(){return x="useId",X(),_g(),oA()},useFormState:function(g,r){return x="useFormState",X(),_g(),x4(g,r)},useActionState:function(g,r){return x="useActionState",X(),_g(),x4(g,r)},useOptimistic:function(g){return x="useOptimistic",X(),_g(),XA(g)},useMemoCache:function(g){return X(),m5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",_g(),IA()},useEffectEvent:function(g){return x="useEffectEvent",X(),_g(),QA(g)}},Ev={readContext:function(g){return z(),Ur(g)},use:function(g){return X(),lw(g)},useCallback:function(g,r){return x="useCallback",X(),e(),PO(g,r)},useContext:function(g){return x="useContext",X(),e(),Ur(g)},useEffect:function(g,r){x="useEffect",X(),e(),E0(2048,l0,g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",X(),e(),qO(g,r,v)},useInsertionEffect:function(g,r){return x="useInsertionEffect",X(),e(),E0(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",X(),e(),E0(4,Av,g,r)},useMemo:function(g,r){x="useMemo",X(),e();var v=m.H;m.H=Ev;try{return WO(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",X(),e();var h=m.H;m.H=Ev;try{return S4(g,r,v)}finally{m.H=h}},useRef:function(){return x="useRef",X(),e(),Or().memoizedState},useState:function(){x="useState",X(),e();var g=m.H;m.H=Ev;try{return S4(Sv)}finally{m.H=g}},useDebugValue:function(){x="useDebugValue",X(),e()},useDeferredValue:function(g,r){return x="useDeferredValue",X(),e(),j9(g,r)},useTransition:function(){return x="useTransition",X(),e(),t9()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",X(),e(),hO(g,r,v)},useId:function(){return x="useId",X(),e(),Or().memoizedState},useFormState:function(g){return x="useFormState",X(),e(),HO(g)},useActionState:function(g){return x="useActionState",X(),e(),HO(g)},useOptimistic:function(g,r){return x="useOptimistic",X(),e(),C9(g,r)},useMemoCache:function(g){return X(),m5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",e(),Or().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",X(),e(),AO(g)}},R2={readContext:function(g){return z(),Ur(g)},use:function(g){return X(),lw(g)},useCallback:function(g,r){return x="useCallback",X(),e(),PO(g,r)},useContext:function(g){return x="useContext",X(),e(),Ur(g)},useEffect:function(g,r){x="useEffect",X(),e(),E0(2048,l0,g,r)},useImperativeHandle:function(g,r,v){return x="useImperativeHandle",X(),e(),qO(g,r,v)},useInsertionEffect:function(g,r){return x="useInsertionEffect",X(),e(),E0(4,Z0,g,r)},useLayoutEffect:function(g,r){return x="useLayoutEffect",X(),e(),E0(4,Av,g,r)},useMemo:function(g,r){x="useMemo",X(),e();var v=m.H;m.H=Ev;try{return WO(g,r)}finally{m.H=v}},useReducer:function(g,r,v){x="useReducer",X(),e();var h=m.H;m.H=Ev;try{return A6(g,r,v)}finally{m.H=h}},useRef:function(){return x="useRef",X(),e(),Or().memoizedState},useState:function(){x="useState",X(),e();var g=m.H;m.H=Ev;try{return A6(Sv)}finally{m.H=g}},useDebugValue:function(){x="useDebugValue",X(),e()},useDeferredValue:function(g,r){return x="useDeferredValue",X(),e(),i9(g,r)},useTransition:function(){return x="useTransition",X(),e(),p9()},useSyncExternalStore:function(g,r,v){return x="useSyncExternalStore",X(),e(),hO(g,r,v)},useId:function(){return x="useId",X(),e(),Or().memoizedState},useFormState:function(g){return x="useFormState",X(),e(),OO(g)},useActionState:function(g){return x="useActionState",X(),e(),OO(g)},useOptimistic:function(g,r){return x="useOptimistic",X(),e(),x9(g,r)},useMemoCache:function(g){return X(),m5(g)},useHostTransitionStatus:k5,useCacheRefresh:function(){return x="useCacheRefresh",e(),Or().memoizedState},useEffectEvent:function(g){return x="useEffectEvent",X(),e(),AO(g)}};var EY={},_Y=new Set,yY=new Set,jY=new Set,iY=new Set,eY=new Set,nY=new Set,fY=new Set,cY=new Set,tY=new Set,pY=new Set;Object.freeze(EY);var FP={enqueueSetState:function(g,r,v){g=g._reactInternals;var h=rv(g),O=ow(h);O.payload=r,v!==void 0&&v!==null&&(ZA(v),O.callback=v),r=Iw(g,O,h),r!==null&&(w1(h,"this.setState()",g),Ir(r,g,h),h6(r,g,h))},enqueueReplaceState:function(g,r,v){g=g._reactInternals;var h=rv(g),O=ow(h);O.tag=TY,O.payload=r,v!==void 0&&v!==null&&(ZA(v),O.callback=v),r=Iw(g,O,h),r!==null&&(w1(h,"this.replaceState()",g),Ir(r,g,h),h6(r,g,h))},enqueueForceUpdate:function(g,r){g=g._reactInternals;var v=rv(g),h=ow(v);h.tag=CY,r!==void 0&&r!==null&&(ZA(r),h.callback=r),r=Iw(g,h,v),r!==null&&(w1(v,"this.forceUpdate()",g),Ir(r,g,v),h6(r,g,v))}},Qh=null,BP=null,oP=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),fr=!1,dY={},aY={},sY={},g7={},Kh=!1,r7={},X2={},IP={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},v7=!1,w7=null;w7=new Set;var vw=!1,cr=!1,NP=!1,h7=typeof WeakSet==="function"?WeakSet:Set,H0=null,zh=null,$h=null,tr=null,j0=!1,_v=null,sr=!1,h8=8192,Nu={getCacheForType:function(g){var r=Ur(ir),v=r.data.get(g);return v===void 0&&(v=g(),r.data.set(g,v)),v},cacheSignal:function(){return Ur(ir).controller.signal},getOwner:function(){return hv}};if(typeof Symbol==="function"&&Symbol.for){var H8=Symbol.for;H8("selector.component"),H8("selector.has_pseudo_class"),H8("selector.role"),H8("selector.test_id"),H8("selector.text")}var Zu=[],lu=typeof WeakMap==="function"?WeakMap:Map,O0=0,g0=2,qv=4,ww=0,O8=1,g4=2,Y2=3,pw=4,J2=6,H7=5,ag=O0,Xr=null,Eg=null,Dg=0,i0=0,Q2=1,r4=2,b8=3,O7=4,ZP=5,A8=6,K2=7,lP=8,v4=9,br=i0,Pv=null,dw=!1,Uh=!1,TP=!1,o1=0,Br=ww,aw=0,sw=0,CP=0,e0=0,w4=0,q8=null,T0=null,z2=!1,$2=0,b7=0,A7=300,U2=1/0,q7=500,P8=null,mr=null,g5=null,L2=0,SP=1,xP=2,P7=3,r5=0,W7=1,M7=2,G7=3,R7=4,u2=5,pr=0,v5=null,Lh=null,yv=0,mP=0,DP=-0,kP=null,X7=null,Y7=null,jv=L2,J7=null,Tu=50,W8=0,VP=null,EP=!1,F2=!1,Cu=50,h4=0,M8=null,uh=!1,B2=null,Q7=!1,K7=new Set,Su={},o2=null,Fh=null,_P=!1,yP=!1,I2=!1,jP=!1,w5=0,iP={};(function(){for(var g=0;g<rP.length;g++){var r=rP[g],v=r.toLowerCase();r=r[0].toUpperCase()+r.slice(1),Cv(v,"on"+r)}Cv(tX,"onAnimationEnd"),Cv(pX,"onAnimationIteration"),Cv(dX,"onAnimationStart"),Cv("dblclick","onDoubleClick"),Cv("focusin","onFocus"),Cv("focusout","onBlur"),Cv(Pu,"onTransitionRun"),Cv(Wu,"onTransitionStart"),Cv(Mu,"onTransitionCancel"),Cv(aX,"onTransitionEnd")})(),c0("onMouseEnter",["mouseout","mouseover"]),c0("onMouseLeave",["mouseout","mouseover"]),c0("onPointerEnter",["pointerout","pointerover"]),c0("onPointerLeave",["pointerout","pointerover"]),K0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K0("onBeforeInput",["compositionend","keypress","textInput","paste"]),K0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var G8="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(G8)),N2="_reactListening"+Math.random().toString(36).slice(2),z7=!1,$7=!1,Z2=!1,U7=!1,l2=!1,T2=!1,L7=!1,C2={},xu=/\r\n?/g,mu=/\u0000|\uFFFD/g,H4="http://www.w3.org/1999/xlink",nP="http://www.w3.org/XML/1998/namespace",Du="javascript:throw new Error('React form unexpectedly submitted.')",ku="suppressHydrationWarning",O4="&",S2="/&",R8="$",X8="/$",h5="$?",b4="$~",Bh="$!",Vu="html",Eu="body",_u="head",fP="F!",u7="F",F7="loading",yu="style",hw=0,oh=1,x2=2,cP=null,tP=null,B7={dialog:!0,webview:!0},pP=null,Y8=void 0,o7=typeof setTimeout==="function"?setTimeout:void 0,ju=typeof clearTimeout==="function"?clearTimeout:void 0,A4=-1,I7=typeof Promise==="function"?Promise:void 0,iu=typeof queueMicrotask==="function"?queueMicrotask:typeof I7<"u"?function(g){return I7.resolve(null).then(g).catch(IU)}:o7,dP=null,q4=0,J8=1,N7=2,Z7=3,Zv=4,lv=new Map,l7=new Set,Hw=hr.d;hr.d={f:function(){var g=Hw.f(),r=E4();return g||r},r:function(g){var r=Zg(g);r!==null&&r.tag===5&&r.type==="form"?c9(r):Hw.r(g)},D:function(g){Hw.D(g),_R("dns-prefetch",g,null)},C:function(g,r){Hw.C(g,r),_R("preconnect",g,r)},L:function(g,r,v){Hw.L(g,r,v);var h=Ih;if(h&&g&&r){var O='link[rel="preload"][as="'+Qv(r)+'"]';r==="image"?v&&v.imageSrcSet?(O+='[imagesrcset="'+Qv(v.imageSrcSet)+'"]',typeof v.imageSizes==="string"&&(O+='[imagesizes="'+Qv(v.imageSizes)+'"]')):O+='[href="'+Qv(g)+'"]':O+='[href="'+Qv(g)+'"]';var b=O;switch(r){case"style":b=j4(g);break;case"script":b=i4(g)}lv.has(b)||(g=yg({rel:"preload",href:r==="image"&&v&&v.imageSrcSet?void 0:g,as:r},v),lv.set(b,g),h.querySelector(O)!==null||r==="style"&&h.querySelector(L6(b))||r==="script"&&h.querySelector(u6(b))||(r=h.createElement("link"),M0(r,"link",g),$g(r),h.head.appendChild(r)))}},m:function(g,r){Hw.m(g,r);var v=Ih;if(v&&g){var h=r&&typeof r.as==="string"?r.as:"script",O='link[rel="modulepreload"][as="'+Qv(h)+'"][href="'+Qv(g)+'"]',b=O;switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=i4(g)}if(!lv.has(b)&&(g=yg({rel:"modulepreload",href:g},r),lv.set(b,g),v.querySelector(O)===null)){switch(h){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(v.querySelector(u6(b)))return}h=v.createElement("link"),M0(h,"link",g),$g(h),v.head.appendChild(h)}}},X:function(g,r){Hw.X(g,r);var v=Ih;if(v&&g){var h=gr(v).hoistableScripts,O=i4(g),b=h.get(O);b||(b=v.querySelector(u6(O)),b||(g=yg({src:g,async:!0},r),(r=lv.get(O))&&zq(g,r),b=v.createElement("script"),$g(b),M0(b,"link",g),v.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(O,b))}},S:function(g,r,v){Hw.S(g,r,v);var h=Ih;if(h&&g){var O=gr(h).hoistableStyles,b=j4(g);r=r||"default";var P=O.get(b);if(!P){var M={loading:q4,preload:null};if(P=h.querySelector(L6(b)))M.loading=J8|Zv;else{g=yg({rel:"stylesheet",href:g,"data-precedence":r},v),(v=lv.get(b))&&Kq(g,v);var Y=P=h.createElement("link");$g(Y),M0(Y,"link",g),Y._p=new Promise(function(Q,N){Y.onload=Q,Y.onerror=N}),Y.addEventListener("load",function(){M.loading|=J8}),Y.addEventListener("error",function(){M.loading|=N7}),M.loading|=Zv,ZO(P,r,h)}P={type:"stylesheet",instance:P,count:1,state:M},O.set(b,P)}}},M:function(g,r){Hw.M(g,r);var v=Ih;if(v&&g){var h=gr(v).hoistableScripts,O=i4(g),b=h.get(O);b||(b=v.querySelector(u6(O)),b||(g=yg({src:g,async:!0,type:"module"},r),(r=lv.get(O))&&zq(g,r),b=v.createElement("script"),$g(b),M0(b,"link",g),v.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},h.set(O,b))}}};var Ih=typeof document>"u"?null:document,m2=null,eu=60000,nu=800,fu=500,aP=0,sP=null,D2=null,P4=AL,Q8={$$typeof:J1,Provider:null,Consumer:null,_currentValue:P4,_currentValue2:P4,_threadCount:0},T7="%c%s%c",C7="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",S7="",k2=" ",cu=Function.prototype.bind,x7=!1,m7=null,D7=null,k7=null,V7=null,E7=null,_7=null,y7=null,j7=null,i7=null,e7=null;m7=function(g,r,v,h){r=w(g,r),r!==null&&(v=H(r.memoizedState,v,0,h),r.memoizedState=v,r.baseState=v,g.memoizedProps=yg({},g.memoizedProps),v=z0(g,2),v!==null&&Ir(v,g,2))},D7=function(g,r,v){r=w(g,r),r!==null&&(v=W(r.memoizedState,v,0),r.memoizedState=v,r.baseState=v,g.memoizedProps=yg({},g.memoizedProps),v=z0(g,2),v!==null&&Ir(v,g,2))},k7=function(g,r,v,h){r=w(g,r),r!==null&&(v=A(r.memoizedState,v,h),r.memoizedState=v,r.baseState=v,g.memoizedProps=yg({},g.memoizedProps),v=z0(g,2),v!==null&&Ir(v,g,2))},V7=function(g,r,v){g.pendingProps=H(g.memoizedProps,r,0,v),g.alternate&&(g.alternate.pendingProps=g.pendingProps),r=z0(g,2),r!==null&&Ir(r,g,2)},E7=function(g,r){g.pendingProps=W(g.memoizedProps,r,0),g.alternate&&(g.alternate.pendingProps=g.pendingProps),r=z0(g,2),r!==null&&Ir(r,g,2)},_7=function(g,r,v){g.pendingProps=A(g.memoizedProps,r,v),g.alternate&&(g.alternate.pendingProps=g.pendingProps),r=z0(g,2),r!==null&&Ir(r,g,2)},y7=function(g){var r=z0(g,2);r!==null&&Ir(r,g,2)},j7=function(g){var r=B4(),v=z0(g,r);v!==null&&Ir(v,g,r)},i7=function(g){R=g},e7=function(g){G=g};var V2=!0,E2=null,gW=!1,H5=null,O5=null,b5=null,K8=new Map,z8=new Map,A5=[],tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),_2=null;if(xO.prototype.render=Bq.prototype.render=function(g){var r=this._internalRoot;if(r===null)throw Error("Cannot update an unmounted root.");var v=arguments;typeof v[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):a(v[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof v[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),v=g;var h=r.current,O=rv(h);$q(h,O,v,r,null,null)},xO.prototype.unmount=Bq.prototype.unmount=function(){var g=arguments;if(typeof g[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),g=this._internalRoot,g!==null){this._internalRoot=null;var r=g.containerInfo;(ag&(g0|qv))!==O0&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),$q(g.current,2,null,g,null,null),E4(),r[kw]=null}},xO.prototype.unstable_scheduleHydration=function(g){if(g){var r=l();g={blockedOn:null,target:g,priority:r};for(var v=0;v<A5.length&&r!==0&&r<A5[v].priority;v++);A5.splice(v,0,g),v===0&&rX(g)}},function(){var g=Nh.version;if(g!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(g+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),hr.findDOMNode=function(g){var r=g._reactInternals;if(r===void 0){if(typeof g.render==="function")throw Error("Unable to find node on an unmounted component.");throw g=Object.keys(g).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+g)}return g=s(r),g=g!==null?Ag(g):null,g=g===null?null:g.stateNode,g},!function(){var g={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.5"};return g.overrideHookState=m7,g.overrideHookStateDeletePath=D7,g.overrideHookStateRenamePath=k7,g.overrideProps=V7,g.overridePropsDeletePath=E7,g.overridePropsRenamePath=_7,g.scheduleUpdate=y7,g.scheduleRetry=j7,g.setErrorHandler=i7,g.setSuspenseHandler=e7,g.scheduleRefresh=n,g.scheduleRoot=C,g.setRefreshHandler=y,g.getCurrentFiber=gL,F4(g)}()&&U1&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var n7=window.location.protocol;/^(https?|file):$/.test(n7)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(n7==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}PF.createRoot=function(g,r){if(!a(g))throw Error("Target container is not a DOM element.");HX(g);var v=!1,h="",O=vG,b=wG,P=hG;return r!==null&&r!==void 0&&(r.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof r==="object"&&r!==null&&r.$$typeof===Y1&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),r.unstable_strictMode===!0&&(v=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(O=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(P=r.onRecoverableError)),r=cR(g,1,!1,null,null,v,h,null,O,b,P,hX),g[kw]=r.current,bq(g),new Bq(r)},PF.hydrateRoot=function(g,r,v){if(!a(g))throw Error("Target container is not a DOM element.");HX(g),r===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var h=!1,O="",b=vG,P=wG,M=hG,Y=null;return v!==null&&v!==void 0&&(v.unstable_strictMode===!0&&(h=!0),v.identifierPrefix!==void 0&&(O=v.identifierPrefix),v.onUncaughtError!==void 0&&(b=v.onUncaughtError),v.onCaughtError!==void 0&&(P=v.onCaughtError),v.onRecoverableError!==void 0&&(M=v.onRecoverableError),v.formState!==void 0&&(Y=v.formState)),r=cR(g,1,!0,r,v!=null?v:null,h,O,Y,b,P,M,hX),r.context=tR(null),v=r.current,h=rv(v),h=B5(h),O=ow(h),O.callback=null,Iw(v,O,h),w1(h,"hydrateRoot()",null),v=h,r.current.lanes=v,zw(r,v),R1(r),g[kw]=r.current,bq(g),new xO(r)},PF.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var a7=W4((RT,d7)=>{d7.exports=p7()});var sg=W4((KB)=>{var K4=Mg(Hr());(function(){function w(T){if(T==null)return null;if(typeof T==="function")return T.$$typeof===D?null:T.displayName||T.name||null;if(typeof T==="string")return T;switch(T){case y:return"Fragment";case _:return"Profiler";case a:return"StrictMode";case s:return"Suspense";case Ag:return"SuspenseList";case wg:return"Activity"}if(typeof T==="object")switch(typeof T.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),T.$$typeof){case n:return"Portal";case Og:return T.displayName||"Context";case Wg:return(T._context.displayName||"Context")+".Consumer";case c:var t=T.render;return T=T.displayName,T||(T=t.displayName||t.name||"",T=T!==""?"ForwardRef("+T+")":"ForwardRef"),T;case vg:return t=T.displayName||null,t!==null?t:w(T.type)||"Memo";case d:t=T._payload,T=T._init;try{return w(T(t))}catch(Rg){}}return null}function H(T){return""+T}function A(T){try{H(T);var t=!1}catch(Lg){t=!0}if(t){t=console;var Rg=t.error,Qg=typeof Symbol==="function"&&Symbol.toStringTag&&T[Symbol.toStringTag]||T.constructor.name||"Object";return Rg.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Qg),H(T)}}function q(T){if(T===y)return"<>";if(typeof T==="object"&&T!==null&&T.$$typeof===d)return"<...>";try{var t=w(T);return t?"<"+t+">":"<...>"}catch(Rg){return"<...>"}}function W(){var T=Fg.A;return T===null?null:T.getOwner()}function G(){return Error("react-stack-top-frame")}function R(T){if(Jg.call(T,"key")){var t=Object.getOwnPropertyDescriptor(T,"key").get;if(t&&t.isReactWarning)return!1}return T.key!==void 0}function X(T,t){function Rg(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}Rg.isReactWarning=!0,Object.defineProperty(T,"key",{get:Rg,configurable:!0})}function z(){var T=w(this.type);return p[T]||(p[T]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),T=this.props.ref,T!==void 0?T:null}function U(T,t,Rg,Qg,Lg,ng){var dg=Rg.ref;return T={$$typeof:C,type:T,key:t,props:Rg,_owner:Qg},(dg!==void 0?dg:null)!==null?Object.defineProperty(T,"ref",{enumerable:!1,get:z}):Object.defineProperty(T,"ref",{enumerable:!1,value:null}),T._store={},Object.defineProperty(T._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(T,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(T,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Lg}),Object.defineProperty(T,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ng}),Object.freeze&&(Object.freeze(T.props),Object.freeze(T)),T}function $(T,t,Rg,Qg,Lg,ng){var dg=t.children;if(dg!==void 0)if(Qg)if(Kg(dg)){for(Qg=0;Qg<dg.length;Qg++)J(dg[Qg]);Object.freeze&&Object.freeze(dg)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else J(dg);if(Jg.call(t,"key")){dg=w(T);var Sr=Object.keys(t).filter(function(Q0){return Q0!=="key"});Qg=0<Sr.length?"{key: someKey, "+Sr.join(": ..., ")+": ...}":"{key: someKey}",Pg[dg+Qg]||(Sr=0<Sr.length?"{"+Sr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Qg,dg,Sr,dg),Pg[dg+Qg]=!0)}if(dg=null,Rg!==void 0&&(A(Rg),dg=""+Rg),R(t)&&(A(t.key),dg=""+t.key),"key"in t){Rg={};for(var jr in t)jr!=="key"&&(Rg[jr]=t[jr])}else Rg=t;return dg&&X(Rg,typeof T==="function"?T.displayName||T.name||"Unknown":T),U(T,dg,Rg,W(),Lg,ng)}function J(T){L(T)?T._store&&(T._store.validated=1):typeof T==="object"&&T!==null&&T.$$typeof===d&&(T._payload.status==="fulfilled"?L(T._payload.value)&&T._payload.value._store&&(T._payload.value._store.validated=1):T._store&&(T._store.validated=1))}function L(T){return typeof T==="object"&&T!==null&&T.$$typeof===C}var C=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),Wg=Symbol.for("react.consumer"),Og=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),Ag=Symbol.for("react.suspense_list"),vg=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),wg=Symbol.for("react.activity"),D=Symbol.for("react.client.reference"),Fg=K4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Jg=Object.prototype.hasOwnProperty,Kg=Array.isArray,Vg=console.createTask?console.createTask:function(){return null};K4={react_stack_bottom_frame:function(T){return T()}};var V,p={},rg=K4.react_stack_bottom_frame.bind(K4,G)(),i=Vg(q(G)),Pg={};KB.Fragment=y,KB.jsxDEV=function(T,t,Rg,Qg){var Lg=1e4>Fg.recentlyCreatedOwnerStacks++;return $(T,t,Rg,Qg,Lg?Error("react-stack-top-frame"):rg,Lg?Vg(q(T)):i)}})()});var bM=Mg(Hr(),1),AM=Mg(a7(),1);var s7=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var rJ=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var vJ=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var hJ=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var HJ=`/* ── Script modal ───────────────────────────────────────────────────────── */\r
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
`;var OJ=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var bJ=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var AJ=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var qJ=s7+gJ+rJ+vJ+wJ+hJ+HJ+OJ+bJ+AJ;var Cr=Mg(Hr(),1);var e2=Mg(Hr(),1);var j2=(...w)=>w.filter((H,A,q)=>{return Boolean(H)&&H.trim()!==""&&q.indexOf(H)===A}).join(" ").trim();var PJ=(w)=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var WJ=(w)=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(H,A,q)=>q?q.toUpperCase():A.toLowerCase());var hW=(w)=>{let H=WJ(w);return H.charAt(0).toUpperCase()+H.slice(1)};var U8=Mg(Hr(),1);var i2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var MJ=(w)=>{for(let H in w)if(H.startsWith("aria-")||H==="role"||H==="title")return!0;return!1};var Zh=Mg(Hr(),1),$F=Zh.createContext({});var GJ=()=>Zh.useContext($F);var RJ=U8.forwardRef(({color:w,size:H,strokeWidth:A,absoluteStrokeWidth:q,className:W="",children:G,iconNode:R,...X},z)=>{let{size:U=24,strokeWidth:$=2,absoluteStrokeWidth:J=!1,color:L="currentColor",className:C=""}=GJ()??{},n=q??J?Number(A??$)*24/Number(H??U):A??$;return U8.createElement("svg",{ref:z,...i2,width:H??U??i2.width,height:H??U??i2.height,stroke:w??L,strokeWidth:n,className:j2("lucide",C,W),...!G&&!MJ(X)&&{"aria-hidden":"true"},...X},[...R.map(([y,a])=>U8.createElement(y,a)),...Array.isArray(G)?G:[G]])});var j=(w,H)=>{let A=e2.forwardRef(({className:q,...W},G)=>e2.createElement(RJ,{ref:G,iconNode:H,className:j2(`lucide-${PJ(hW(w))}`,`lucide-${w}`,q),...W}));return A.displayName=hW(w),A};var UF=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],q5=j("braces",UF);var LF=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],C0=j("code-xml",LF);var uF=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],I1=j("file-code-corner",uF);var FF=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],P5=j("loader-circle",FF);var BF=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],W5=j("triangle-alert",BF);var oF=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],M5=j("user-round",oF);var IF=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],L8=j("activity",IF);var NF=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],u8=j("arrow-down-to-line",NF);var ZF=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],F8=j("arrow-up-to-line",ZF);var lF=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],B8=j("blocks",lF);var TF=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],G4=j("book-marked",TF);var CF=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],o8=j("book-open",CF);var SF=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],I8=j("calendar",SF);var xF=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],N8=j("check",xF);var mF=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],S0=j("chevron-down",mF);var DF=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Z8=j("chevron-left",DF);var kF=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bw=j("chevron-right",kF);var VF=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],iv=j("chevron-up",VF);var EF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],l8=j("clock",EF);var _F=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Aw=j("copy",_F);var yF=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ev=j("database",yF);var jF=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],R4=j("download",jF);var iF=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],T8=j("eye",iF);var eF=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],X4=j("folder-open",eF);var nF=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],C8=j("hash",nF);var fF=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],S8=j("link-2",fF);var cF=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],x8=j("list",cF);var tF=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],m8=j("lock",tF);var pF=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],lh=j("message-square-plus",pF);var dF=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],D8=j("message-square",dF);var aF=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],k8=j("package",aF);var sF=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Y4=j("pencil",sF);var gB=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],V8=j("play",gB);var rB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],E8=j("plus",rB);var vB=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],_8=j("radio",vB);var wB=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],J4=j("refresh-cw",wB);var hB=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],y8=j("search",hB);var HB=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Th=j("shield-alert",HB);var OB=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],j8=j("shield",OB);var bB=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],i8=j("syringe",bB);var AB=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],N1=j("terminal",AB);var qB=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Q4=j("timer",qB);var PB=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],e8=j("toggle-left",PB);var WB=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],n8=j("toggle-right",WB);var MB=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],n0=j("trash-2",MB);var GB=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],f8=j("type",GB);var RB=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],c8=j("upload",RB);var XB=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Ch=j("user-plus",XB);var YB=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],t8=j("wrench",YB);var JB=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qw=j("zap",JB);var QB=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nv=j("x",QB);var n2={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var zb=Mg(Hr(),1);var GH=Mg(Hr(),1);var Zr=Mg(sg(),1),zB={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},XJ=({script:w,selected:H,dot:A,duration:q,onSelect:W,onEdit:G,sendToBackend:R})=>{let X=(L)=>{L.stopPropagation(),R({type:"update_script",id:w.id,patch:{enabled:!w.enabled}})},z=(L)=>{L.stopPropagation(),R({type:"duplicate_script",id:w.id})},U=(L)=>{if(L.stopPropagation(),!window.confirm(`Delete "${w.name}"?`))return;R({type:"delete_script",id:w.id})},$=(L)=>{L.stopPropagation(),G()},J=w.bindings?.length??0;return Zr.jsxDEV("div",{className:`ls-item${H?" ls-selected":""}${!w.enabled&&w.type!=="library"?" ls-disabled":""}`,onClick:W,children:[Zr.jsxDEV("span",{className:zB[A],title:A},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-item-body",children:[Zr.jsxDEV("div",{className:"ls-item-name",title:w.name,children:w.name},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-item-meta",children:[w.type!=="library"&&Zr.jsxDEV("span",{children:w.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),q!==void 0&&A!=="running"&&Zr.jsxDEV("span",{style:{color:A==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[q,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w.type!=="library"&&J>0&&Zr.jsxDEV("div",{className:"ls-item-bindings",children:w.bindings.map((L,C)=>Zr.jsxDEV("span",{className:"ls-binding-badge",children:[L.type==="character"?Zr.jsxDEV(M5,{size:9},void 0,!1,void 0,this):Zr.jsxDEV(D8,{size:9},void 0,!1,void 0,this),Zr.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:L.displayName},void 0,!1,void 0,this)]},C,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-item-actions",children:[Zr.jsxDEV("button",{className:"ls-icon-btn",onClick:$,title:"Edit script",children:Zr.jsxDEV(Y4,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),w.type!=="library"&&Zr.jsxDEV("button",{className:"ls-icon-btn",onClick:X,title:w.enabled?"Disable":"Enable",children:w.enabled?Zr.jsxDEV(n8,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Zr.jsxDEV(e8,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-icon-btn",onClick:z,title:"Duplicate",children:Zr.jsxDEV(Aw,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Zr.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:U,title:"Delete",children:Zr.jsxDEV(n0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var lr=Uint8Array,Wv=Uint16Array,XW=Int32Array,c2=new lr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),t2=new lr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qW=new lr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$J=function(w,H){var A=new Wv(31);for(var q=0;q<31;++q)A[q]=H+=1<<w[q-1];var W=new XW(A[30]);for(var q=1;q<30;++q)for(var G=A[q];G<A[q+1];++G)W[G]=G-A[q]<<5|q;return{b:A,r:W}},UJ=$J(c2,2),LJ=UJ.b,PW=UJ.r;LJ[28]=258,PW[258]=28;var uJ=$J(t2,0),$B=uJ.b,YJ=uJ.r,WW=new Wv(32768);for(pg=0;pg<32768;++pg)Z1=(pg&43690)>>1|(pg&21845)<<1,Z1=(Z1&52428)>>2|(Z1&13107)<<2,Z1=(Z1&61680)>>4|(Z1&3855)<<4,WW[pg]=((Z1&65280)>>8|(Z1&255)<<8)>>1;var Z1,pg,T1=function(w,H,A){var q=w.length,W=0,G=new Wv(H);for(;W<q;++W)if(w[W])++G[w[W]-1];var R=new Wv(H);for(W=1;W<H;++W)R[W]=R[W-1]+G[W-1]<<1;var X;if(A){X=new Wv(1<<H);var z=15-H;for(W=0;W<q;++W)if(w[W]){var U=W<<4|w[W],$=H-w[W],J=R[w[W]-1]++<<$;for(var L=J|(1<<$)-1;J<=L;++J)X[WW[J]>>z]=U}}else{X=new Wv(q);for(W=0;W<q;++W)if(w[W])X[W]=WW[R[w[W]-1]++]>>15-w[W]}return X},G5=new lr(288);for(pg=0;pg<144;++pg)G5[pg]=8;var pg;for(pg=144;pg<256;++pg)G5[pg]=9;var pg;for(pg=256;pg<280;++pg)G5[pg]=7;var pg;for(pg=280;pg<288;++pg)G5[pg]=8;var pg,a8=new lr(32);for(pg=0;pg<32;++pg)a8[pg]=5;var pg,UB=T1(G5,9,0),LB=T1(G5,9,1),uB=T1(a8,5,0),FB=T1(a8,5,1),HW=function(w){var H=w[0];for(var A=1;A<w.length;++A)if(w[A]>H)H=w[A];return H},fv=function(w,H,A){var q=H/8|0;return(w[q]|w[q+1]<<8)>>(H&7)&A},OW=function(w,H){var A=H/8|0;return(w[A]|w[A+1]<<8|w[A+2]<<16)>>(H&7)},YW=function(w){return(w+7)/8|0},s8=function(w,H,A){if(H==null||H<0)H=0;if(A==null||A>w.length)A=w.length;return new lr(w.subarray(H,A))};var BB=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],x0=function(w,H,A){var q=Error(H||BB[w]);if(q.code=w,Error.captureStackTrace)Error.captureStackTrace(q,x0);if(!A)throw q;return q},oB=function(w,H,A,q){var W=w.length,G=q?q.length:0;if(!W||H.f&&!H.l)return A||new lr(0);var R=!A,X=R||H.i!=2,z=H.i;if(R)A=new lr(W*3);var U=function(bg){var Xv=A.length;if(bg>Xv){var k0=new lr(Math.max(Xv*2,bg));k0.set(A),A=k0}},$=H.f||0,J=H.p||0,L=H.b||0,C=H.l,n=H.d,y=H.m,a=H.n,_=W*8;do{if(!C){$=fv(w,J,1);var Wg=fv(w,J+1,3);if(J+=3,!Wg){var Og=YW(J)+4,c=w[Og-4]|w[Og-3]<<8,s=Og+c;if(s>W){if(z)x0(0);break}if(X)U(L+c);A.set(w.subarray(Og,s),L),H.b=L+=c,H.p=J=s*8,H.f=$;continue}else if(Wg==1)C=LB,n=FB,y=9,a=5;else if(Wg==2){var Ag=fv(w,J,31)+257,vg=fv(w,J+10,15)+4,d=Ag+fv(w,J+5,31)+1;J+=14;var wg=new lr(d),D=new lr(19);for(var Fg=0;Fg<vg;++Fg)D[qW[Fg]]=fv(w,J+Fg*3,7);J+=vg*3;var Jg=HW(D),Kg=(1<<Jg)-1,Vg=T1(D,Jg,1);for(var Fg=0;Fg<d;){var V=Vg[fv(w,J,Kg)];J+=V&15;var Og=V>>4;if(Og<16)wg[Fg++]=Og;else{var p=0,rg=0;if(Og==16)rg=3+fv(w,J,3),J+=2,p=wg[Fg-1];else if(Og==17)rg=3+fv(w,J,7),J+=3;else if(Og==18)rg=11+fv(w,J,127),J+=7;while(rg--)wg[Fg++]=p}}var i=wg.subarray(0,Ag),Pg=wg.subarray(Ag);y=HW(i),a=HW(Pg),C=T1(i,y,1),n=T1(Pg,a,1)}else x0(1);if(J>_){if(z)x0(0);break}}if(X)U(L+131072);var T=(1<<y)-1,t=(1<<a)-1,Rg=J;for(;;Rg=J){var p=C[OW(w,J)&T],Qg=p>>4;if(J+=p&15,J>_){if(z)x0(0);break}if(!p)x0(2);if(Qg<256)A[L++]=Qg;else if(Qg==256){Rg=J,C=null;break}else{var Lg=Qg-254;if(Qg>264){var Fg=Qg-257,ng=c2[Fg];Lg=fv(w,J,(1<<ng)-1)+LJ[Fg],J+=ng}var dg=n[OW(w,J)&t],Sr=dg>>4;if(!dg)x0(3);J+=dg&15;var Pg=$B[Sr];if(Sr>3){var ng=t2[Sr];Pg+=OW(w,J)&(1<<ng)-1,J+=ng}if(J>_){if(z)x0(0);break}if(X)U(L+131072);var jr=L+Lg;if(L<Pg){var Q0=G-Pg,S1=Math.min(Pg,jr);if(Q0+L<0)x0(3);for(;L<S1;++L)A[L]=q[Q0+L]}for(;L<jr;++L)A[L]=A[L-Pg]}}if(H.l=C,H.p=Rg,H.b=L,H.f=$,C)$=1,H.m=y,H.d=n,H.n=a}while(!$);return L!=A.length&&R?s8(A,0,L):A.subarray(0,L)},Pw=function(w,H,A){A<<=H&7;var q=H/8|0;w[q]|=A,w[q+1]|=A>>8},p8=function(w,H,A){A<<=H&7;var q=H/8|0;w[q]|=A,w[q+1]|=A>>8,w[q+2]|=A>>16},bW=function(w,H){var A=[];for(var q=0;q<w.length;++q)if(w[q])A.push({s:q,f:w[q]});var W=A.length,G=A.slice();if(!W)return{t:BJ,l:0};if(W==1){var R=new lr(A[0].s+1);return R[A[0].s]=1,{t:R,l:1}}A.sort(function(s,Ag){return s.f-Ag.f}),A.push({s:-1,f:25001});var X=A[0],z=A[1],U=0,$=1,J=2;A[0]={s:-1,f:X.f+z.f,l:X,r:z};while($!=W-1)X=A[A[U].f<A[J].f?U++:J++],z=A[U!=$&&A[U].f<A[J].f?U++:J++],A[$++]={s:-1,f:X.f+z.f,l:X,r:z};var L=G[0].s;for(var q=1;q<W;++q)if(G[q].s>L)L=G[q].s;var C=new Wv(L+1),n=MW(A[$-1],C,0);if(n>H){var q=0,y=0,a=n-H,_=1<<a;G.sort(function(Ag,vg){return C[vg.s]-C[Ag.s]||Ag.f-vg.f});for(;q<W;++q){var Wg=G[q].s;if(C[Wg]>H)y+=_-(1<<n-C[Wg]),C[Wg]=H;else break}y>>=a;while(y>0){var Og=G[q].s;if(C[Og]<H)y-=1<<H-C[Og]++-1;else++q}for(;q>=0&&y;--q){var c=G[q].s;if(C[c]==H)--C[c],++y}n=H}return{t:new lr(C),l:n}},MW=function(w,H,A){return w.s==-1?Math.max(MW(w.l,H,A+1),MW(w.r,H,A+1)):H[w.s]=A},JJ=function(w){var H=w.length;while(H&&!w[--H]);var A=new Wv(++H),q=0,W=w[0],G=1,R=function(z){A[q++]=z};for(var X=1;X<=H;++X)if(w[X]==W&&X!=H)++G;else{if(!W&&G>2){for(;G>138;G-=138)R(32754);if(G>2)R(G>10?G-11<<5|28690:G-3<<5|12305),G=0}else if(G>3){R(W),--G;for(;G>6;G-=6)R(8304);if(G>2)R(G-3<<5|8208),G=0}while(G--)R(W);G=1,W=w[X]}return{c:A.subarray(0,q),n:H}},d8=function(w,H){var A=0;for(var q=0;q<H.length;++q)A+=w[q]*H[q];return A},FJ=function(w,H,A){var q=A.length,W=YW(H+2);w[W]=q&255,w[W+1]=q>>8,w[W+2]=w[W]^255,w[W+3]=w[W+1]^255;for(var G=0;G<q;++G)w[W+G+4]=A[G];return(W+4+q)*8},QJ=function(w,H,A,q,W,G,R,X,z,U,$){Pw(H,$++,A),++W[256];var J=bW(W,15),L=J.t,C=J.l,n=bW(G,15),y=n.t,a=n.l,_=JJ(L),Wg=_.c,Og=_.n,c=JJ(y),s=c.c,Ag=c.n,vg=new Wv(19);for(var d=0;d<Wg.length;++d)++vg[Wg[d]&31];for(var d=0;d<s.length;++d)++vg[s[d]&31];var wg=bW(vg,7),D=wg.t,Fg=wg.l,Jg=19;for(;Jg>4&&!D[qW[Jg-1]];--Jg);var Kg=U+5<<3,Vg=d8(W,G5)+d8(G,a8)+R,V=d8(W,L)+d8(G,y)+R+14+3*Jg+d8(vg,D)+2*vg[16]+3*vg[17]+7*vg[18];if(z>=0&&Kg<=Vg&&Kg<=V)return FJ(H,$,w.subarray(z,z+U));var p,rg,i,Pg;if(Pw(H,$,1+(V<Vg)),$+=2,V<Vg){p=T1(L,C,0),rg=L,i=T1(y,a,0),Pg=y;var T=T1(D,Fg,0);Pw(H,$,Og-257),Pw(H,$+5,Ag-1),Pw(H,$+10,Jg-4),$+=14;for(var d=0;d<Jg;++d)Pw(H,$+3*d,D[qW[d]]);$+=3*Jg;var t=[Wg,s];for(var Rg=0;Rg<2;++Rg){var Qg=t[Rg];for(var d=0;d<Qg.length;++d){var Lg=Qg[d]&31;if(Pw(H,$,T[Lg]),$+=D[Lg],Lg>15)Pw(H,$,Qg[d]>>5&127),$+=Qg[d]>>12}}}else p=UB,rg=G5,i=uB,Pg=a8;for(var d=0;d<X;++d){var ng=q[d];if(ng>255){var Lg=ng>>18&31;if(p8(H,$,p[Lg+257]),$+=rg[Lg+257],Lg>7)Pw(H,$,ng>>23&31),$+=c2[Lg];var dg=ng&31;if(p8(H,$,i[dg]),$+=Pg[dg],dg>3)p8(H,$,ng>>5&8191),$+=t2[dg]}else p8(H,$,p[ng]),$+=rg[ng]}return p8(H,$,p[256]),$+rg[256]},IB=new XW([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),BJ=new lr(0),NB=function(w,H,A,q,W,G){var R=G.z||w.length,X=new lr(q+R+5*(1+Math.ceil(R/7000))+W),z=X.subarray(q,X.length-W),U=G.l,$=(G.r||0)&7;if(H){if($)z[0]=G.r>>3;var J=IB[H-1],L=J>>13,C=J&8191,n=(1<<A)-1,y=G.p||new Wv(32768),a=G.h||new Wv(n+1),_=Math.ceil(A/3),Wg=2*_,Og=function(Yv){return(w[Yv]^w[Yv+1]<<_^w[Yv+2]<<Wg)&n},c=new XW(25000),s=new Wv(288),Ag=new Wv(32),vg=0,d=0,wg=G.i||0,D=0,Fg=G.w||0,Jg=0;for(;wg+2<R;++wg){var Kg=Og(wg),Vg=wg&32767,V=a[Kg];if(y[Vg]=V,a[Kg]=Vg,Fg<=wg){var p=R-wg;if((vg>7000||D>24576)&&(p>423||!U)){$=QJ(w,z,0,c,s,Ag,d,D,Jg,wg-Jg,$),D=vg=d=0,Jg=wg;for(var rg=0;rg<286;++rg)s[rg]=0;for(var rg=0;rg<30;++rg)Ag[rg]=0}var i=2,Pg=0,T=C,t=Vg-V&32767;if(p>2&&Kg==Og(wg-t)){var Rg=Math.min(L,p)-1,Qg=Math.min(32767,wg),Lg=Math.min(258,p);while(t<=Qg&&--T&&Vg!=V){if(w[wg+i]==w[wg+i-t]){var ng=0;for(;ng<Lg&&w[wg+ng]==w[wg+ng-t];++ng);if(ng>i){if(i=ng,Pg=t,ng>Rg)break;var dg=Math.min(t,ng-2),Sr=0;for(var rg=0;rg<dg;++rg){var jr=wg-t+rg&32767,Q0=y[jr],S1=jr-Q0&32767;if(S1>Sr)Sr=S1,V=jr}}}Vg=V,V=y[Vg],t+=Vg-V&32767}}if(Pg){c[D++]=268435456|PW[i]<<18|YJ[Pg];var bg=PW[i]&31,Xv=YJ[Pg]&31;d+=c2[bg]+t2[Xv],++s[257+bg],++Ag[Xv],Fg=wg+i,++vg}else c[D++]=w[wg],++s[w[wg]]}}for(wg=Math.max(wg,Fg);wg<R;++wg)c[D++]=w[wg],++s[w[wg]];if($=QJ(w,z,U,c,s,Ag,d,D,Jg,wg-Jg,$),!U)G.r=$&7|z[$/8|0]<<3,$-=7,G.h=a,G.p=y,G.i=wg,G.w=Fg}else{for(var wg=G.w||0;wg<R+U;wg+=65535){var k0=wg+65535;if(k0>=R)z[$/8|0]=U,k0=R;$=FJ(z,$+1,w.subarray(wg,k0))}G.i=R}return s8(X,0,q+YW($)+W)},ZB=function(){var w=new Int32Array(256);for(var H=0;H<256;++H){var A=H,q=9;while(--q)A=(A&1&&-306674912)^A>>>1;w[H]=A}return w}(),lB=function(){var w=-1;return{p:function(H){var A=w;for(var q=0;q<H.length;++q)A=ZB[A&255^H[q]]^A>>>8;w=A},d:function(){return~w}}};var TB=function(w,H,A,q,W){if(!W){if(W={l:1},H.dictionary){var G=H.dictionary.subarray(-32768),R=new lr(G.length+w.length);R.set(G),R.set(w,G.length),w=R,W.w=G.length}}return NB(w,H.level==null?6:H.level,H.mem==null?W.l?Math.ceil(Math.max(8,Math.min(13,Math.log(w.length)))*1.5):20:12+H.mem,A,q,W)},oJ=function(w,H){var A={};for(var q in w)A[q]=w[q];for(var q in H)A[q]=H[q];return A};var l1=function(w,H){return w[H]|w[H+1]<<8},cv=function(w,H){return(w[H]|w[H+1]<<8|w[H+2]<<16|w[H+3]<<24)>>>0},AW=function(w,H){return cv(w,H)+cv(w,H+4)*4294967296},X0=function(w,H,A){for(;A;++H)w[H]=A,A>>>=8};function CB(w,H){return TB(w,H||{},0,0)}function SB(w,H){return oB(w,{i:2},H&&H.out,H&&H.dictionary)}var IJ=function(w,H,A,q){for(var W in w){var G=w[W],R=H+W,X=q;if(Array.isArray(G))X=oJ(q,G[1]),G=G[0];if(G instanceof lr)A[R]=[G,X];else A[R+="/"]=[new lr(0),X],IJ(G,R,A,q)}},KJ=typeof TextEncoder<"u"&&new TextEncoder,GW=typeof TextDecoder<"u"&&new TextDecoder,xB=0;try{GW.decode(BJ,{stream:!0}),xB=1}catch(w){}var mB=function(w){for(var H="",A=0;;){var q=w[A++],W=(q>127)+(q>223)+(q>239);if(A+W>w.length)return{s:H,r:s8(w,A-1)};if(!W)H+=String.fromCharCode(q);else if(W==3)q=((q&15)<<18|(w[A++]&63)<<12|(w[A++]&63)<<6|w[A++]&63)-65536,H+=String.fromCharCode(55296|q>>10,56320|q&1023);else if(W&1)H+=String.fromCharCode((q&31)<<6|w[A++]&63);else H+=String.fromCharCode((q&15)<<12|(w[A++]&63)<<6|w[A++]&63)}};function f2(w,H){if(H){var A=new lr(w.length);for(var q=0;q<w.length;++q)A[q]=w.charCodeAt(q);return A}if(KJ)return KJ.encode(w);var W=w.length,G=new lr(w.length+(w.length>>1)),R=0,X=function($){G[R++]=$};for(var q=0;q<W;++q){if(R+5>G.length){var z=new lr(R+8+(W-q<<1));z.set(G),G=z}var U=w.charCodeAt(q);if(U<128||H)X(U);else if(U<2048)X(192|U>>6),X(128|U&63);else if(U>55295&&U<57344)U=65536+(U&1047552)|w.charCodeAt(++q)&1023,X(240|U>>18),X(128|U>>12&63),X(128|U>>6&63),X(128|U&63);else X(224|U>>12),X(128|U>>6&63),X(128|U&63)}return s8(G,0,R)}function JW(w,H){if(H){var A="";for(var q=0;q<w.length;q+=16384)A+=String.fromCharCode.apply(null,w.subarray(q,q+16384));return A}else if(GW)return GW.decode(w);else{var W=mB(w),G=W.s,A=W.r;if(A.length)x0(8);return G}}var DB=function(w,H){return H+30+l1(w,H+26)+l1(w,H+28)},kB=function(w,H,A){var q=l1(w,H+28),W=JW(w.subarray(H+46,H+46+q),!(l1(w,H+8)&2048)),G=H+46+q,R=cv(w,H+20),X=A&&R==4294967295?VB(w,G):[R,cv(w,H+24),cv(w,H+42)],z=X[0],U=X[1],$=X[2];return[l1(w,H+10),z,U,W,G+l1(w,H+30)+l1(w,H+32),$]},VB=function(w,H){for(;l1(w,H)!=1;H+=4+l1(w,H+2));return[AW(w,H+12),AW(w,H+4),AW(w,H+20)]},RW=function(w){var H=0;if(w)for(var A in w){var q=w[A].length;if(q>65535)x0(9);H+=q+4}return H},zJ=function(w,H,A,q,W,G,R,X){var z=q.length,U=A.extra,$=X&&X.length,J=RW(U);if(X0(w,H,R!=null?33639248:67324752),H+=4,R!=null)w[H++]=20,w[H++]=A.os;w[H]=20,H+=2,w[H++]=A.flag<<1|(G<0&&8),w[H++]=W&&8,w[H++]=A.compression&255,w[H++]=A.compression>>8;var L=new Date(A.mtime==null?Date.now():A.mtime),C=L.getFullYear()-1980;if(C<0||C>119)x0(10);if(X0(w,H,C<<25|L.getMonth()+1<<21|L.getDate()<<16|L.getHours()<<11|L.getMinutes()<<5|L.getSeconds()>>1),H+=4,G!=-1)X0(w,H,A.crc),X0(w,H+4,G<0?-G-2:G),X0(w,H+8,A.size);if(X0(w,H+12,z),X0(w,H+14,J),H+=16,R!=null)X0(w,H,$),X0(w,H+6,A.attrs),X0(w,H+10,R),H+=14;if(w.set(q,H),H+=z,J)for(var n in U){var y=U[n],a=y.length;X0(w,H,+n),X0(w,H+2,a),w.set(y,H+4),H+=4+a}if($)w.set(X,H),H+=$;return H},EB=function(w,H,A,q,W){X0(w,H,101010256),X0(w,H+8,A),X0(w,H+10,A),X0(w,H+12,q),X0(w,H+16,W)};function NJ(w,H){if(!H)H={};var A={},q=[];IJ(w,"",A,H);var W=0,G=0;for(var R in A){var X=A[R],z=X[0],U=X[1],$=U.level==0?0:8,J=f2(R),L=J.length,C=U.comment,n=C&&f2(C),y=n&&n.length,a=RW(U.extra);if(L>65535)x0(11);var _=$?CB(z,U):z,Wg=_.length,Og=lB();Og.p(z),q.push(oJ(U,{size:z.length,crc:Og.d(),c:_,f:J,m:n,u:L!=R.length||n&&C.length!=y,o:W,compression:$})),W+=30+L+a+Wg,G+=76+2*(L+a)+(y||0)+Wg}var c=new lr(G+22),s=W,Ag=G-W;for(var vg=0;vg<q.length;++vg){var J=q[vg];zJ(c,J.o,J,J.f,J.u,J.c.length);var d=30+J.f.length+RW(J.extra);c.set(J.c,J.o+d),zJ(c,W,J,J.f,J.u,J.c.length,J.o,J.m),W+=16+d+(J.m?J.m.length:0)}return EB(c,W,q.length,Ag,s),c}function ZJ(w,H){var A={},q=w.length-22;for(;cv(w,q)!=101010256;--q)if(!q||w.length-q>65558)x0(13);var W=l1(w,q+8);if(!W)return{};var G=cv(w,q+16),R=G==4294967295||W==65535;if(R){var X=cv(w,q-12);if(R=cv(w,X)==101075792,R)W=cv(w,X+32),G=cv(w,X+48)}var z=H&&H.filter;for(var U=0;U<W;++U){var $=kB(w,G,R),J=$[0],L=$[1],C=$[2],n=$[3],y=$[4],a=$[5],_=DB(w,a);if(G=y,!z||z({name:n,size:L,originalSize:C,compression:J}))if(!J)A[n]=s8(w,_,_+L);else if(J==8)A[n]=SB(w.subarray(_,_+L),{out:new lr(C)});else x0(14,"unknown compression type "+J)}return A}function QW(w){let H=w.map((q)=>({name:q.name,code:q.code,type:q.type,triggers:q.triggers,bindings:q.bindings,folder:q.folder,metadata:q.metadata})),A={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:H};return NJ({"pack.json":f2(JSON.stringify(A,null,2))})}function lJ(w,H){let A=QW(w),q=new Blob([A.buffer],{type:"application/zip"}),W=URL.createObjectURL(q),G=document.createElement("a");G.href=W,G.download=`${H}.lumiscript.zip`,G.click(),URL.revokeObjectURL(W)}var Jjr=Object.freeze({status:"aborted"});function E(w,H,A){function q(X,z){if(!X._zod)Object.defineProperty(X,"_zod",{value:{def:z,constr:R,traits:new Set},enumerable:!1});if(X._zod.traits.has(w))return;X._zod.traits.add(w),H(X,z);let U=R.prototype,$=Object.keys(U);for(let J=0;J<$.length;J++){let L=$[J];if(!(L in X))X[L]=U[L].bind(X)}}let W=A?.Parent??Object;class G extends W{}Object.defineProperty(G,"name",{value:w});function R(X){var z;let U=A?.Parent?new G:this;q(U,X),(z=U._zod).deferred??(z.deferred=[]);for(let $ of U._zod.deferred)$();return U}return Object.defineProperty(R,"init",{value:q}),Object.defineProperty(R,Symbol.hasInstance,{value:(X)=>{if(A?.Parent&&X instanceof A.Parent)return!0;return X?._zod?.traits?.has(w)}}),Object.defineProperty(R,"name",{value:w}),R}var Qjr=Symbol("zod_brand");class Ww extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class gH extends Error{constructor(w){super(`Encountered unidirectional transform during encode: ${w}`);this.name="ZodEncodeError"}}var p2={};function Mw(w){if(w)Object.assign(p2,w);return p2}var Pr={};OF(Pr,{unwrapMessage:()=>rH,uint8ArrayToHex:()=>Go,uint8ArrayToBase64url:()=>Wo,uint8ArrayToBase64:()=>_J,stringifyPrimitive:()=>mJ,slugify:()=>zW,shallowClone:()=>SJ,safeExtend:()=>ho,required:()=>bo,randomString:()=>dB,propertyKeyTypes:()=>UW,promiseAllObject:()=>pB,primitiveTypes:()=>xJ,prefixIssues:()=>OH,pick:()=>ro,partial:()=>Oo,parsedType:()=>Ao,optionalKeys:()=>LW,omit:()=>vo,objectClone:()=>fB,numKeys:()=>aB,nullish:()=>hH,normalizeParams:()=>kg,mergeDefs:()=>Gw,merge:()=>Ho,jsonStringifyReplacer:()=>xh,joinValues:()=>nB,issue:()=>mh,isPlainObject:()=>z4,isObject:()=>Sh,hexToUint8Array:()=>Mo,getSizableOrigin:()=>VJ,getParsedType:()=>sB,getLengthableOrigin:()=>bH,getEnumValues:()=>vH,getElementAtPath:()=>tB,floatSafeRemainder:()=>CJ,finalizeIssue:()=>C1,extend:()=>wo,escapeRegex:()=>Rw,esc:()=>d2,defineLazy:()=>Ar,createTransparentProxy:()=>go,cloneDef:()=>cB,clone:()=>tv,cleanRegex:()=>HH,cleanEnum:()=>qo,captureStackTrace:()=>a2,cached:()=>wH,base64urlToUint8Array:()=>Po,base64ToUint8Array:()=>EJ,assignProp:()=>R5,assertNotEqual:()=>yB,assertNever:()=>iB,assertIs:()=>jB,assertEqual:()=>_B,assert:()=>eB,allowsEval:()=>$W,aborted:()=>X5,NUMBER_FORMAT_RANGES:()=>DJ,Class:()=>yJ,BIGINT_FORMAT_RANGES:()=>kJ});function _B(w){return w}function yB(w){return w}function jB(w){}function iB(w){throw Error("Unexpected value in exhaustive check")}function eB(w){}function vH(w){let H=Object.values(w).filter((q)=>typeof q==="number");return Object.entries(w).filter(([q,W])=>H.indexOf(+q)===-1).map(([q,W])=>W)}function nB(w,H="|"){return w.map((A)=>mJ(A)).join(H)}function xh(w,H){if(typeof H==="bigint")return H.toString();return H}function wH(w){return{get value(){{let A=w();return Object.defineProperty(this,"value",{value:A}),A}throw Error("cached value already set")}}}function hH(w){return w===null||w===void 0}function HH(w){let H=w.startsWith("^")?1:0,A=w.endsWith("$")?w.length-1:w.length;return w.slice(H,A)}function CJ(w,H){let A=(w.toString().split(".")[1]||"").length,q=H.toString(),W=(q.split(".")[1]||"").length;if(W===0&&/\d?e-\d?/.test(q)){let z=q.match(/\d?e-(\d?)/);if(z?.[1])W=Number.parseInt(z[1])}let G=A>W?A:W,R=Number.parseInt(w.toFixed(G).replace(".","")),X=Number.parseInt(H.toFixed(G).replace(".",""));return R%X/10**G}var TJ=Symbol("evaluating");function Ar(w,H,A){let q=void 0;Object.defineProperty(w,H,{get(){if(q===TJ)return;if(q===void 0)q=TJ,q=A();return q},set(W){Object.defineProperty(w,H,{value:W})},configurable:!0})}function fB(w){return Object.create(Object.getPrototypeOf(w),Object.getOwnPropertyDescriptors(w))}function R5(w,H,A){Object.defineProperty(w,H,{value:A,writable:!0,enumerable:!0,configurable:!0})}function Gw(...w){let H={};for(let A of w){let q=Object.getOwnPropertyDescriptors(A);Object.assign(H,q)}return Object.defineProperties({},H)}function cB(w){return Gw(w._zod.def)}function tB(w,H){if(!H)return w;return H.reduce((A,q)=>A?.[q],w)}function pB(w){let H=Object.keys(w),A=H.map((q)=>w[q]);return Promise.all(A).then((q)=>{let W={};for(let G=0;G<H.length;G++)W[H[G]]=q[G];return W})}function dB(w=10){let A="";for(let q=0;q<w;q++)A+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return A}function d2(w){return JSON.stringify(w)}function zW(w){return w.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var a2="captureStackTrace"in Error?Error.captureStackTrace:(...w)=>{};function Sh(w){return typeof w==="object"&&w!==null&&!Array.isArray(w)}var $W=wH(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(w){return!1}});function z4(w){if(Sh(w)===!1)return!1;let H=w.constructor;if(H===void 0)return!0;if(typeof H!=="function")return!0;let A=H.prototype;if(Sh(A)===!1)return!1;if(Object.prototype.hasOwnProperty.call(A,"isPrototypeOf")===!1)return!1;return!0}function SJ(w){if(z4(w))return{...w};if(Array.isArray(w))return[...w];return w}function aB(w){let H=0;for(let A in w)if(Object.prototype.hasOwnProperty.call(w,A))H++;return H}var sB=(w)=>{let H=typeof w;switch(H){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(w)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(w))return"array";if(w===null)return"null";if(w.then&&typeof w.then==="function"&&w.catch&&typeof w.catch==="function")return"promise";if(typeof Map<"u"&&w instanceof Map)return"map";if(typeof Set<"u"&&w instanceof Set)return"set";if(typeof Date<"u"&&w instanceof Date)return"date";if(typeof File<"u"&&w instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${H}`)}},UW=new Set(["string","number","symbol"]),xJ=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Rw(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tv(w,H,A){let q=new w._zod.constr(H??w._zod.def);if(!H||A?.parent)q._zod.parent=w;return q}function kg(w){let H=w;if(!H)return{};if(typeof H==="string")return{error:()=>H};if(H?.message!==void 0){if(H?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");H.error=H.message}if(delete H.message,typeof H.error==="string")return{...H,error:()=>H.error};return H}function go(w){let H;return new Proxy({},{get(A,q,W){return H??(H=w()),Reflect.get(H,q,W)},set(A,q,W,G){return H??(H=w()),Reflect.set(H,q,W,G)},has(A,q){return H??(H=w()),Reflect.has(H,q)},deleteProperty(A,q){return H??(H=w()),Reflect.deleteProperty(H,q)},ownKeys(A){return H??(H=w()),Reflect.ownKeys(H)},getOwnPropertyDescriptor(A,q){return H??(H=w()),Reflect.getOwnPropertyDescriptor(H,q)},defineProperty(A,q,W){return H??(H=w()),Reflect.defineProperty(H,q,W)}})}function mJ(w){if(typeof w==="bigint")return w.toString()+"n";if(typeof w==="string")return`"${w}"`;return`${w}`}function LW(w){return Object.keys(w).filter((H)=>{return w[H]._zod.optin==="optional"&&w[H]._zod.optout==="optional"})}var DJ={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},kJ={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function ro(w,H){let A=w._zod.def,q=A.checks;if(q&&q.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let G=Gw(w._zod.def,{get shape(){let R={};for(let X in H){if(!(X in A.shape))throw Error(`Unrecognized key: "${X}"`);if(!H[X])continue;R[X]=A.shape[X]}return R5(this,"shape",R),R},checks:[]});return tv(w,G)}function vo(w,H){let A=w._zod.def,q=A.checks;if(q&&q.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let G=Gw(w._zod.def,{get shape(){let R={...w._zod.def.shape};for(let X in H){if(!(X in A.shape))throw Error(`Unrecognized key: "${X}"`);if(!H[X])continue;delete R[X]}return R5(this,"shape",R),R},checks:[]});return tv(w,G)}function wo(w,H){if(!z4(H))throw Error("Invalid input to extend: expected a plain object");let A=w._zod.def.checks;if(A&&A.length>0){let G=w._zod.def.shape;for(let R in H)if(Object.getOwnPropertyDescriptor(G,R)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let W=Gw(w._zod.def,{get shape(){let G={...w._zod.def.shape,...H};return R5(this,"shape",G),G}});return tv(w,W)}function ho(w,H){if(!z4(H))throw Error("Invalid input to safeExtend: expected a plain object");let A=Gw(w._zod.def,{get shape(){let q={...w._zod.def.shape,...H};return R5(this,"shape",q),q}});return tv(w,A)}function Ho(w,H){let A=Gw(w._zod.def,{get shape(){let q={...w._zod.def.shape,...H._zod.def.shape};return R5(this,"shape",q),q},get catchall(){return H._zod.def.catchall},checks:[]});return tv(w,A)}function Oo(w,H,A){let W=H._zod.def.checks;if(W&&W.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let R=Gw(H._zod.def,{get shape(){let X=H._zod.def.shape,z={...X};if(A)for(let U in A){if(!(U in X))throw Error(`Unrecognized key: "${U}"`);if(!A[U])continue;z[U]=w?new w({type:"optional",innerType:X[U]}):X[U]}else for(let U in X)z[U]=w?new w({type:"optional",innerType:X[U]}):X[U];return R5(this,"shape",z),z},checks:[]});return tv(H,R)}function bo(w,H,A){let q=Gw(H._zod.def,{get shape(){let W=H._zod.def.shape,G={...W};if(A)for(let R in A){if(!(R in G))throw Error(`Unrecognized key: "${R}"`);if(!A[R])continue;G[R]=new w({type:"nonoptional",innerType:W[R]})}else for(let R in W)G[R]=new w({type:"nonoptional",innerType:W[R]});return R5(this,"shape",G),G}});return tv(H,q)}function X5(w,H=0){if(w.aborted===!0)return!0;for(let A=H;A<w.issues.length;A++)if(w.issues[A]?.continue!==!0)return!0;return!1}function OH(w,H){return H.map((A)=>{var q;return(q=A).path??(q.path=[]),A.path.unshift(w),A})}function rH(w){return typeof w==="string"?w:w?.message}function C1(w,H,A){let q={...w,path:w.path??[]};if(!w.message){let W=rH(w.inst?._zod.def?.error?.(w))??rH(H?.error?.(w))??rH(A.customError?.(w))??rH(A.localeError?.(w))??"Invalid input";q.message=W}if(delete q.inst,delete q.continue,!H?.reportInput)delete q.input;return q}function VJ(w){if(w instanceof Set)return"set";if(w instanceof Map)return"map";if(w instanceof File)return"file";return"unknown"}function bH(w){if(Array.isArray(w))return"array";if(typeof w==="string")return"string";return"unknown"}function Ao(w){let H=typeof w;switch(H){case"number":return Number.isNaN(w)?"nan":"number";case"object":{if(w===null)return"null";if(Array.isArray(w))return"array";let A=w;if(A&&Object.getPrototypeOf(A)!==Object.prototype&&"constructor"in A&&A.constructor)return A.constructor.name}}return H}function mh(...w){let[H,A,q]=w;if(typeof H==="string")return{message:H,code:"custom",input:A,inst:q};return{...H}}function qo(w){return Object.entries(w).filter(([H,A])=>{return Number.isNaN(Number.parseInt(H,10))}).map((H)=>H[1])}function EJ(w){let H=atob(w),A=new Uint8Array(H.length);for(let q=0;q<H.length;q++)A[q]=H.charCodeAt(q);return A}function _J(w){let H="";for(let A=0;A<w.length;A++)H+=String.fromCharCode(w[A]);return btoa(H)}function Po(w){let H=w.replace(/-/g,"+").replace(/_/g,"/"),A="=".repeat((4-H.length%4)%4);return EJ(H+A)}function Wo(w){return _J(w).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Mo(w){let H=w.replace(/^0x/,"");if(H.length%2!==0)throw Error("Invalid hex string length");let A=new Uint8Array(H.length/2);for(let q=0;q<H.length;q+=2)A[q/2]=Number.parseInt(H.slice(q,q+2),16);return A}function Go(w){return Array.from(w).map((H)=>H.toString(16).padStart(2,"0")).join("")}class yJ{constructor(...w){}}var jJ=(w,H)=>{w.name="$ZodError",Object.defineProperty(w,"_zod",{value:w._zod,enumerable:!1}),Object.defineProperty(w,"issues",{value:H,enumerable:!1}),w.message=JSON.stringify(H,xh,2),Object.defineProperty(w,"toString",{value:()=>w.message,enumerable:!1})},s2=E("$ZodError",jJ),uW=E("$ZodError",jJ,{Parent:Error});function iJ(w,H=(A)=>A.message){let A={},q=[];for(let W of w.issues)if(W.path.length>0)A[W.path[0]]=A[W.path[0]]||[],A[W.path[0]].push(H(W));else q.push(H(W));return{formErrors:q,fieldErrors:A}}function eJ(w,H=(A)=>A.message){let A={_errors:[]},q=(W)=>{for(let G of W.issues)if(G.code==="invalid_union"&&G.errors.length)G.errors.map((R)=>q({issues:R}));else if(G.code==="invalid_key")q({issues:G.issues});else if(G.code==="invalid_element")q({issues:G.issues});else if(G.path.length===0)A._errors.push(H(G));else{let R=A,X=0;while(X<G.path.length){let z=G.path[X];if(X!==G.path.length-1)R[z]=R[z]||{_errors:[]};else R[z]=R[z]||{_errors:[]},R[z]._errors.push(H(G));R=R[z],X++}}};return q(w),A}var gb=(w)=>(H,A,q,W)=>{let G=q?Object.assign(q,{async:!1}):{async:!1},R=H._zod.run({value:A,issues:[]},G);if(R instanceof Promise)throw new Ww;if(R.issues.length){let X=new(W?.Err??w)(R.issues.map((z)=>C1(z,G,Mw())));throw a2(X,W?.callee),X}return R.value};var rb=(w)=>async(H,A,q,W)=>{let G=q?Object.assign(q,{async:!0}):{async:!0},R=H._zod.run({value:A,issues:[]},G);if(R instanceof Promise)R=await R;if(R.issues.length){let X=new(W?.Err??w)(R.issues.map((z)=>C1(z,G,Mw())));throw a2(X,W?.callee),X}return R.value};var AH=(w)=>(H,A,q)=>{let W=q?{...q,async:!1}:{async:!1},G=H._zod.run({value:A,issues:[]},W);if(G instanceof Promise)throw new Ww;return G.issues.length?{success:!1,error:new(w??s2)(G.issues.map((R)=>C1(R,W,Mw())))}:{success:!0,data:G.value}},nJ=AH(uW),qH=(w)=>async(H,A,q)=>{let W=q?Object.assign(q,{async:!0}):{async:!0},G=H._zod.run({value:A,issues:[]},W);if(G instanceof Promise)G=await G;return G.issues.length?{success:!1,error:new w(G.issues.map((R)=>C1(R,W,Mw())))}:{success:!0,data:G.value}},fJ=qH(uW),cJ=(w)=>(H,A,q)=>{let W=q?Object.assign(q,{direction:"backward"}):{direction:"backward"};return gb(w)(H,A,W)};var tJ=(w)=>(H,A,q)=>{return gb(w)(H,A,q)};var pJ=(w)=>async(H,A,q)=>{let W=q?Object.assign(q,{direction:"backward"}):{direction:"backward"};return rb(w)(H,A,W)};var dJ=(w)=>async(H,A,q)=>{return rb(w)(H,A,q)};var aJ=(w)=>(H,A,q)=>{let W=q?Object.assign(q,{direction:"backward"}):{direction:"backward"};return AH(w)(H,A,W)};var sJ=(w)=>(H,A,q)=>{return AH(w)(H,A,q)};var gQ=(w)=>async(H,A,q)=>{let W=q?Object.assign(q,{direction:"backward"}):{direction:"backward"};return qH(w)(H,A,W)};var rQ=(w)=>async(H,A,q)=>{return qH(w)(H,A,q)};var vQ=/^[cC][^\s-]{8,}$/,wQ=/^[0-9a-z]+$/,hQ=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,HQ=/^[0-9a-vA-V]{20}$/,OQ=/^[A-Za-z0-9]{27}$/,bQ=/^[a-zA-Z0-9_-]{21}$/,AQ=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var qQ=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,FW=(w)=>{if(!w)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${w}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var PQ=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var Xo="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function WQ(){return new RegExp(Xo,"u")}var MQ=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,GQ=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var RQ=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,XQ=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,YQ=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,BW=/^[A-Za-z0-9_-]*$/;var JQ=/^\+[1-9]\d{6,14}$/,QQ="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",KQ=new RegExp(`^${QQ}$`);function zQ(w){return typeof w.precision==="number"?w.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":w.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${w.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function $Q(w){return new RegExp(`^${zQ(w)}$`)}function UQ(w){let H=zQ({precision:w.precision}),A=["Z"];if(w.local)A.push("");if(w.offset)A.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let q=`${H}(?:${A.join("|")})`;return new RegExp(`^${QQ}T(?:${q})$`)}var LQ=(w)=>{let H=w?`[\\s\\S]{${w?.minimum??0},${w?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${H}$`)};var uQ=/^[^A-Z]*$/,FQ=/^[^a-z]*$/;var Mv=E("$ZodCheck",(w,H)=>{var A;w._zod??(w._zod={}),w._zod.def=H,(A=w._zod).onattach??(A.onattach=[])});var BQ=E("$ZodCheckMaxLength",(w,H)=>{var A;Mv.init(w,H),(A=w._zod.def).when??(A.when=(q)=>{let W=q.value;return!hH(W)&&W.length!==void 0}),w._zod.onattach.push((q)=>{let W=q._zod.bag.maximum??Number.POSITIVE_INFINITY;if(H.maximum<W)q._zod.bag.maximum=H.maximum}),w._zod.check=(q)=>{let W=q.value;if(W.length<=H.maximum)return;let R=bH(W);q.issues.push({origin:R,code:"too_big",maximum:H.maximum,inclusive:!0,input:W,inst:w,continue:!H.abort})}}),oQ=E("$ZodCheckMinLength",(w,H)=>{var A;Mv.init(w,H),(A=w._zod.def).when??(A.when=(q)=>{let W=q.value;return!hH(W)&&W.length!==void 0}),w._zod.onattach.push((q)=>{let W=q._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(H.minimum>W)q._zod.bag.minimum=H.minimum}),w._zod.check=(q)=>{let W=q.value;if(W.length>=H.minimum)return;let R=bH(W);q.issues.push({origin:R,code:"too_small",minimum:H.minimum,inclusive:!0,input:W,inst:w,continue:!H.abort})}}),IQ=E("$ZodCheckLengthEquals",(w,H)=>{var A;Mv.init(w,H),(A=w._zod.def).when??(A.when=(q)=>{let W=q.value;return!hH(W)&&W.length!==void 0}),w._zod.onattach.push((q)=>{let W=q._zod.bag;W.minimum=H.length,W.maximum=H.length,W.length=H.length}),w._zod.check=(q)=>{let W=q.value,G=W.length;if(G===H.length)return;let R=bH(W),X=G>H.length;q.issues.push({origin:R,...X?{code:"too_big",maximum:H.length}:{code:"too_small",minimum:H.length},inclusive:!0,exact:!0,input:q.value,inst:w,continue:!H.abort})}}),PH=E("$ZodCheckStringFormat",(w,H)=>{var A,q;if(Mv.init(w,H),w._zod.onattach.push((W)=>{let G=W._zod.bag;if(G.format=H.format,H.pattern)G.patterns??(G.patterns=new Set),G.patterns.add(H.pattern)}),H.pattern)(A=w._zod).check??(A.check=(W)=>{if(H.pattern.lastIndex=0,H.pattern.test(W.value))return;W.issues.push({origin:"string",code:"invalid_format",format:H.format,input:W.value,...H.pattern?{pattern:H.pattern.toString()}:{},inst:w,continue:!H.abort})});else(q=w._zod).check??(q.check=()=>{})}),NQ=E("$ZodCheckRegex",(w,H)=>{PH.init(w,H),w._zod.check=(A)=>{if(H.pattern.lastIndex=0,H.pattern.test(A.value))return;A.issues.push({origin:"string",code:"invalid_format",format:"regex",input:A.value,pattern:H.pattern.toString(),inst:w,continue:!H.abort})}}),ZQ=E("$ZodCheckLowerCase",(w,H)=>{H.pattern??(H.pattern=uQ),PH.init(w,H)}),lQ=E("$ZodCheckUpperCase",(w,H)=>{H.pattern??(H.pattern=FQ),PH.init(w,H)}),TQ=E("$ZodCheckIncludes",(w,H)=>{Mv.init(w,H);let A=Rw(H.includes),q=new RegExp(typeof H.position==="number"?`^.{${H.position}}${A}`:A);H.pattern=q,w._zod.onattach.push((W)=>{let G=W._zod.bag;G.patterns??(G.patterns=new Set),G.patterns.add(q)}),w._zod.check=(W)=>{if(W.value.includes(H.includes,H.position))return;W.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:H.includes,input:W.value,inst:w,continue:!H.abort})}}),CQ=E("$ZodCheckStartsWith",(w,H)=>{Mv.init(w,H);let A=new RegExp(`^${Rw(H.prefix)}.*`);H.pattern??(H.pattern=A),w._zod.onattach.push((q)=>{let W=q._zod.bag;W.patterns??(W.patterns=new Set),W.patterns.add(A)}),w._zod.check=(q)=>{if(q.value.startsWith(H.prefix))return;q.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:H.prefix,input:q.value,inst:w,continue:!H.abort})}}),SQ=E("$ZodCheckEndsWith",(w,H)=>{Mv.init(w,H);let A=new RegExp(`.*${Rw(H.suffix)}$`);H.pattern??(H.pattern=A),w._zod.onattach.push((q)=>{let W=q._zod.bag;W.patterns??(W.patterns=new Set),W.patterns.add(A)}),w._zod.check=(q)=>{if(q.value.endsWith(H.suffix))return;q.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:H.suffix,input:q.value,inst:w,continue:!H.abort})}});var xQ=E("$ZodCheckOverwrite",(w,H)=>{Mv.init(w,H),w._zod.check=(A)=>{A.value=H.tx(A.value)}});class oW{constructor(w=[]){if(this.content=[],this.indent=0,this)this.args=w}indented(w){this.indent+=1,w(this),this.indent-=1}write(w){if(typeof w==="function"){w(this,{execution:"sync"}),w(this,{execution:"async"});return}let A=w.split(`
`).filter((G)=>G),q=Math.min(...A.map((G)=>G.length-G.trimStart().length)),W=A.map((G)=>G.slice(q)).map((G)=>" ".repeat(this.indent*2)+G);for(let G of W)this.content.push(G)}compile(){let w=Function,H=this?.args,q=[...(this?.content??[""]).map((W)=>`  ${W}`)];return new w(...H,q.join(`
`))}}var DQ={major:4,minor:3,patch:6};var Er=E("$ZodType",(w,H)=>{var A;w??(w={}),w._zod.def=H,w._zod.bag=w._zod.bag||{},w._zod.version=DQ;let q=[...w._zod.def.checks??[]];if(w._zod.traits.has("$ZodCheck"))q.unshift(w);for(let W of q)for(let G of W._zod.onattach)G(w);if(q.length===0)(A=w._zod).deferred??(A.deferred=[]),w._zod.deferred?.push(()=>{w._zod.run=w._zod.parse});else{let W=(R,X,z)=>{let U=X5(R),$;for(let J of X){if(J._zod.def.when){if(!J._zod.def.when(R))continue}else if(U)continue;let L=R.issues.length,C=J._zod.check(R);if(C instanceof Promise&&z?.async===!1)throw new Ww;if($||C instanceof Promise)$=($??Promise.resolve()).then(async()=>{if(await C,R.issues.length===L)return;if(!U)U=X5(R,L)});else{if(R.issues.length===L)continue;if(!U)U=X5(R,L)}}if($)return $.then(()=>{return R});return R},G=(R,X,z)=>{if(X5(R))return R.aborted=!0,R;let U=W(X,q,z);if(U instanceof Promise){if(z.async===!1)throw new Ww;return U.then(($)=>w._zod.parse($,z))}return w._zod.parse(U,z)};w._zod.run=(R,X)=>{if(X.skipChecks)return w._zod.parse(R,X);if(X.direction==="backward"){let U=w._zod.parse({value:R.value,issues:[]},{...X,skipChecks:!0});if(U instanceof Promise)return U.then(($)=>{return G($,R,X)});return G(U,R,X)}let z=w._zod.parse(R,X);if(z instanceof Promise){if(X.async===!1)throw new Ww;return z.then((U)=>W(U,q,X))}return W(z,q,X)}}Ar(w,"~standard",()=>({validate:(W)=>{try{let G=nJ(w,W);return G.success?{value:G.data}:{issues:G.error?.issues}}catch(G){return fJ(w,W).then((R)=>R.success?{value:R.data}:{issues:R.error?.issues})}},vendor:"zod",version:1}))}),Hb=E("$ZodString",(w,H)=>{Er.init(w,H),w._zod.pattern=[...w?._zod.bag?.patterns??[]].pop()??LQ(w._zod.bag),w._zod.parse=(A,q)=>{if(H.coerce)try{A.value=String(A.value)}catch(W){}if(typeof A.value==="string")return A;return A.issues.push({expected:"string",code:"invalid_type",input:A.value,inst:w}),A}}),ur=E("$ZodStringFormat",(w,H)=>{PH.init(w,H),Hb.init(w,H)}),nQ=E("$ZodGUID",(w,H)=>{H.pattern??(H.pattern=qQ),ur.init(w,H)}),fQ=E("$ZodUUID",(w,H)=>{if(H.version){let q={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[H.version];if(q===void 0)throw Error(`Invalid UUID version: "${H.version}"`);H.pattern??(H.pattern=FW(q))}else H.pattern??(H.pattern=FW());ur.init(w,H)}),cQ=E("$ZodEmail",(w,H)=>{H.pattern??(H.pattern=PQ),ur.init(w,H)}),tQ=E("$ZodURL",(w,H)=>{ur.init(w,H),w._zod.check=(A)=>{try{let q=A.value.trim(),W=new URL(q);if(H.hostname){if(H.hostname.lastIndex=0,!H.hostname.test(W.hostname))A.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:H.hostname.source,input:A.value,inst:w,continue:!H.abort})}if(H.protocol){if(H.protocol.lastIndex=0,!H.protocol.test(W.protocol.endsWith(":")?W.protocol.slice(0,-1):W.protocol))A.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:H.protocol.source,input:A.value,inst:w,continue:!H.abort})}if(H.normalize)A.value=W.href;else A.value=q;return}catch(q){A.issues.push({code:"invalid_format",format:"url",input:A.value,inst:w,continue:!H.abort})}}}),pQ=E("$ZodEmoji",(w,H)=>{H.pattern??(H.pattern=WQ()),ur.init(w,H)}),dQ=E("$ZodNanoID",(w,H)=>{H.pattern??(H.pattern=bQ),ur.init(w,H)}),aQ=E("$ZodCUID",(w,H)=>{H.pattern??(H.pattern=vQ),ur.init(w,H)}),sQ=E("$ZodCUID2",(w,H)=>{H.pattern??(H.pattern=wQ),ur.init(w,H)}),g3=E("$ZodULID",(w,H)=>{H.pattern??(H.pattern=hQ),ur.init(w,H)}),r3=E("$ZodXID",(w,H)=>{H.pattern??(H.pattern=HQ),ur.init(w,H)}),v3=E("$ZodKSUID",(w,H)=>{H.pattern??(H.pattern=OQ),ur.init(w,H)}),w3=E("$ZodISODateTime",(w,H)=>{H.pattern??(H.pattern=UQ(H)),ur.init(w,H)}),h3=E("$ZodISODate",(w,H)=>{H.pattern??(H.pattern=KQ),ur.init(w,H)}),H3=E("$ZodISOTime",(w,H)=>{H.pattern??(H.pattern=$Q(H)),ur.init(w,H)}),O3=E("$ZodISODuration",(w,H)=>{H.pattern??(H.pattern=AQ),ur.init(w,H)}),b3=E("$ZodIPv4",(w,H)=>{H.pattern??(H.pattern=MQ),ur.init(w,H),w._zod.bag.format="ipv4"}),A3=E("$ZodIPv6",(w,H)=>{H.pattern??(H.pattern=GQ),ur.init(w,H),w._zod.bag.format="ipv6",w._zod.check=(A)=>{try{new URL(`http://[${A.value}]`)}catch{A.issues.push({code:"invalid_format",format:"ipv6",input:A.value,inst:w,continue:!H.abort})}}});var q3=E("$ZodCIDRv4",(w,H)=>{H.pattern??(H.pattern=RQ),ur.init(w,H)}),P3=E("$ZodCIDRv6",(w,H)=>{H.pattern??(H.pattern=XQ),ur.init(w,H),w._zod.check=(A)=>{let q=A.value.split("/");try{if(q.length!==2)throw Error();let[W,G]=q;if(!G)throw Error();let R=Number(G);if(`${R}`!==G)throw Error();if(R<0||R>128)throw Error();new URL(`http://[${W}]`)}catch{A.issues.push({code:"invalid_format",format:"cidrv6",input:A.value,inst:w,continue:!H.abort})}}});function W3(w){if(w==="")return!0;if(w.length%4!==0)return!1;try{return atob(w),!0}catch{return!1}}var M3=E("$ZodBase64",(w,H)=>{H.pattern??(H.pattern=YQ),ur.init(w,H),w._zod.bag.contentEncoding="base64",w._zod.check=(A)=>{if(W3(A.value))return;A.issues.push({code:"invalid_format",format:"base64",input:A.value,inst:w,continue:!H.abort})}});function Yo(w){if(!BW.test(w))return!1;let H=w.replace(/[-_]/g,(q)=>q==="-"?"+":"/"),A=H.padEnd(Math.ceil(H.length/4)*4,"=");return W3(A)}var G3=E("$ZodBase64URL",(w,H)=>{H.pattern??(H.pattern=BW),ur.init(w,H),w._zod.bag.contentEncoding="base64url",w._zod.check=(A)=>{if(Yo(A.value))return;A.issues.push({code:"invalid_format",format:"base64url",input:A.value,inst:w,continue:!H.abort})}}),R3=E("$ZodE164",(w,H)=>{H.pattern??(H.pattern=JQ),ur.init(w,H)});function Jo(w,H=null){try{let A=w.split(".");if(A.length!==3)return!1;let[q]=A;if(!q)return!1;let W=JSON.parse(atob(q));if("typ"in W&&W?.typ!=="JWT")return!1;if(!W.alg)return!1;if(H&&(!("alg"in W)||W.alg!==H))return!1;return!0}catch{return!1}}var X3=E("$ZodJWT",(w,H)=>{ur.init(w,H),w._zod.check=(A)=>{if(Jo(A.value,H.alg))return;A.issues.push({code:"invalid_format",format:"jwt",input:A.value,inst:w,continue:!H.abort})}});var Y3=E("$ZodUnknown",(w,H)=>{Er.init(w,H),w._zod.parse=(A)=>A}),J3=E("$ZodNever",(w,H)=>{Er.init(w,H),w._zod.parse=(A,q)=>{return A.issues.push({expected:"never",code:"invalid_type",input:A.value,inst:w}),A}});function kQ(w,H,A){if(w.issues.length)H.issues.push(...OH(A,w.issues));H.value[A]=w.value}var Q3=E("$ZodArray",(w,H)=>{Er.init(w,H),w._zod.parse=(A,q)=>{let W=A.value;if(!Array.isArray(W))return A.issues.push({expected:"array",code:"invalid_type",input:W,inst:w}),A;A.value=Array(W.length);let G=[];for(let R=0;R<W.length;R++){let X=W[R],z=H.element._zod.run({value:X,issues:[]},q);if(z instanceof Promise)G.push(z.then((U)=>kQ(U,A,R)));else kQ(z,A,R)}if(G.length)return Promise.all(G).then(()=>A);return A}});function hb(w,H,A,q,W){if(w.issues.length){if(W&&!(A in q))return;H.issues.push(...OH(A,w.issues))}if(w.value===void 0){if(A in q)H.value[A]=void 0}else H.value[A]=w.value}function K3(w){let H=Object.keys(w.shape);for(let q of H)if(!w.shape?.[q]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${q}": expected a Zod schema`);let A=LW(w.shape);return{...w,keys:H,keySet:new Set(H),numKeys:H.length,optionalKeys:new Set(A)}}function z3(w,H,A,q,W,G){let R=[],X=W.keySet,z=W.catchall._zod,U=z.def.type,$=z.optout==="optional";for(let J in H){if(X.has(J))continue;if(U==="never"){R.push(J);continue}let L=z.run({value:H[J],issues:[]},q);if(L instanceof Promise)w.push(L.then((C)=>hb(C,A,J,H,$)));else hb(L,A,J,H,$)}if(R.length)A.issues.push({code:"unrecognized_keys",keys:R,input:H,inst:G});if(!w.length)return A;return Promise.all(w).then(()=>{return A})}var Qo=E("$ZodObject",(w,H)=>{if(Er.init(w,H),!Object.getOwnPropertyDescriptor(H,"shape")?.get){let X=H.shape;Object.defineProperty(H,"shape",{get:()=>{let z={...X};return Object.defineProperty(H,"shape",{value:z}),z}})}let q=wH(()=>K3(H));Ar(w._zod,"propValues",()=>{let X=H.shape,z={};for(let U in X){let $=X[U]._zod;if($.values){z[U]??(z[U]=new Set);for(let J of $.values)z[U].add(J)}}return z});let W=Sh,G=H.catchall,R;w._zod.parse=(X,z)=>{R??(R=q.value);let U=X.value;if(!W(U))return X.issues.push({expected:"object",code:"invalid_type",input:U,inst:w}),X;X.value={};let $=[],J=R.shape;for(let L of R.keys){let C=J[L],n=C._zod.optout==="optional",y=C._zod.run({value:U[L],issues:[]},z);if(y instanceof Promise)$.push(y.then((a)=>hb(a,X,L,U,n)));else hb(y,X,L,U,n)}if(!G)return $.length?Promise.all($).then(()=>X):X;return z3($,U,X,z,q.value,w)}}),$3=E("$ZodObjectJIT",(w,H)=>{Qo.init(w,H);let A=w._zod.parse,q=wH(()=>K3(H)),W=(L)=>{let C=new oW(["shape","payload","ctx"]),n=q.value,y=(Og)=>{let c=d2(Og);return`shape[${c}]._zod.run({ value: input[${c}], issues: [] }, ctx)`};C.write("const input = payload.value;");let a=Object.create(null),_=0;for(let Og of n.keys)a[Og]=`key_${_++}`;C.write("const newResult = {};");for(let Og of n.keys){let c=a[Og],s=d2(Og),vg=L[Og]?._zod?.optout==="optional";if(C.write(`const ${c} = ${y(Og)};`),vg)C.write(`
        if (${c}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${c}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${c}.value;
        }
        
      `);else C.write(`
        if (${c}.issues.length) {
          payload.issues = payload.issues.concat(${c}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${c}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${c}.value;
        }
        
      `)}C.write("payload.value = newResult;"),C.write("return payload;");let Wg=C.compile();return(Og,c)=>Wg(L,Og,c)},G,R=Sh,X=!p2.jitless,U=X&&$W.value,$=H.catchall,J;w._zod.parse=(L,C)=>{J??(J=q.value);let n=L.value;if(!R(n))return L.issues.push({expected:"object",code:"invalid_type",input:n,inst:w}),L;if(X&&U&&C?.async===!1&&C.jitless!==!0){if(!G)G=W(H.shape);if(L=G(L,C),!$)return L;return z3([],n,L,C,J,w)}return A(L,C)}});function VQ(w,H,A,q){for(let G of w)if(G.issues.length===0)return H.value=G.value,H;let W=w.filter((G)=>!X5(G));if(W.length===1)return H.value=W[0].value,W[0];return H.issues.push({code:"invalid_union",input:H.value,inst:A,errors:w.map((G)=>G.issues.map((R)=>C1(R,q,Mw())))}),H}var U3=E("$ZodUnion",(w,H)=>{Er.init(w,H),Ar(w._zod,"optin",()=>H.options.some((W)=>W._zod.optin==="optional")?"optional":void 0),Ar(w._zod,"optout",()=>H.options.some((W)=>W._zod.optout==="optional")?"optional":void 0),Ar(w._zod,"values",()=>{if(H.options.every((W)=>W._zod.values))return new Set(H.options.flatMap((W)=>Array.from(W._zod.values)));return}),Ar(w._zod,"pattern",()=>{if(H.options.every((W)=>W._zod.pattern)){let W=H.options.map((G)=>G._zod.pattern);return new RegExp(`^(${W.map((G)=>HH(G.source)).join("|")})$`)}return});let A=H.options.length===1,q=H.options[0]._zod.run;w._zod.parse=(W,G)=>{if(A)return q(W,G);let R=!1,X=[];for(let z of H.options){let U=z._zod.run({value:W.value,issues:[]},G);if(U instanceof Promise)X.push(U),R=!0;else{if(U.issues.length===0)return U;X.push(U)}}if(!R)return VQ(X,W,w,G);return Promise.all(X).then((z)=>{return VQ(z,W,w,G)})}});var L3=E("$ZodIntersection",(w,H)=>{Er.init(w,H),w._zod.parse=(A,q)=>{let W=A.value,G=H.left._zod.run({value:W,issues:[]},q),R=H.right._zod.run({value:W,issues:[]},q);if(G instanceof Promise||R instanceof Promise)return Promise.all([G,R]).then(([z,U])=>{return EQ(A,z,U)});return EQ(A,G,R)}});function IW(w,H){if(w===H)return{valid:!0,data:w};if(w instanceof Date&&H instanceof Date&&+w===+H)return{valid:!0,data:w};if(z4(w)&&z4(H)){let A=Object.keys(H),q=Object.keys(w).filter((G)=>A.indexOf(G)!==-1),W={...w,...H};for(let G of q){let R=IW(w[G],H[G]);if(!R.valid)return{valid:!1,mergeErrorPath:[G,...R.mergeErrorPath]};W[G]=R.data}return{valid:!0,data:W}}if(Array.isArray(w)&&Array.isArray(H)){if(w.length!==H.length)return{valid:!1,mergeErrorPath:[]};let A=[];for(let q=0;q<w.length;q++){let W=w[q],G=H[q],R=IW(W,G);if(!R.valid)return{valid:!1,mergeErrorPath:[q,...R.mergeErrorPath]};A.push(R.data)}return{valid:!0,data:A}}return{valid:!1,mergeErrorPath:[]}}function EQ(w,H,A){let q=new Map,W;for(let X of H.issues)if(X.code==="unrecognized_keys"){W??(W=X);for(let z of X.keys){if(!q.has(z))q.set(z,{});q.get(z).l=!0}}else w.issues.push(X);for(let X of A.issues)if(X.code==="unrecognized_keys")for(let z of X.keys){if(!q.has(z))q.set(z,{});q.get(z).r=!0}else w.issues.push(X);let G=[...q].filter(([,X])=>X.l&&X.r).map(([X])=>X);if(G.length&&W)w.issues.push({...W,keys:G});if(X5(w))return w;let R=IW(H.value,A.value);if(!R.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(R.mergeErrorPath)}`);return w.value=R.data,w}var u3=E("$ZodEnum",(w,H)=>{Er.init(w,H);let A=vH(H.entries),q=new Set(A);w._zod.values=q,w._zod.pattern=new RegExp(`^(${A.filter((W)=>UW.has(typeof W)).map((W)=>typeof W==="string"?Rw(W):W.toString()).join("|")})$`),w._zod.parse=(W,G)=>{let R=W.value;if(q.has(R))return W;return W.issues.push({code:"invalid_value",values:A,input:R,inst:w}),W}}),F3=E("$ZodLiteral",(w,H)=>{if(Er.init(w,H),H.values.length===0)throw Error("Cannot create literal schema with no valid values");let A=new Set(H.values);w._zod.values=A,w._zod.pattern=new RegExp(`^(${H.values.map((q)=>typeof q==="string"?Rw(q):q?Rw(q.toString()):String(q)).join("|")})$`),w._zod.parse=(q,W)=>{let G=q.value;if(A.has(G))return q;return q.issues.push({code:"invalid_value",values:H.values,input:G,inst:w}),q}});var B3=E("$ZodTransform",(w,H)=>{Er.init(w,H),w._zod.parse=(A,q)=>{if(q.direction==="backward")throw new gH(w.constructor.name);let W=H.transform(A.value,A);if(q.async)return(W instanceof Promise?W:Promise.resolve(W)).then((R)=>{return A.value=R,A});if(W instanceof Promise)throw new Ww;return A.value=W,A}});function _Q(w,H){if(w.issues.length&&H===void 0)return{issues:[],value:void 0};return w}var NW=E("$ZodOptional",(w,H)=>{Er.init(w,H),w._zod.optin="optional",w._zod.optout="optional",Ar(w._zod,"values",()=>{return H.innerType._zod.values?new Set([...H.innerType._zod.values,void 0]):void 0}),Ar(w._zod,"pattern",()=>{let A=H.innerType._zod.pattern;return A?new RegExp(`^(${HH(A.source)})?$`):void 0}),w._zod.parse=(A,q)=>{if(H.innerType._zod.optin==="optional"){let W=H.innerType._zod.run(A,q);if(W instanceof Promise)return W.then((G)=>_Q(G,A.value));return _Q(W,A.value)}if(A.value===void 0)return A;return H.innerType._zod.run(A,q)}}),o3=E("$ZodExactOptional",(w,H)=>{NW.init(w,H),Ar(w._zod,"values",()=>H.innerType._zod.values),Ar(w._zod,"pattern",()=>H.innerType._zod.pattern),w._zod.parse=(A,q)=>{return H.innerType._zod.run(A,q)}}),I3=E("$ZodNullable",(w,H)=>{Er.init(w,H),Ar(w._zod,"optin",()=>H.innerType._zod.optin),Ar(w._zod,"optout",()=>H.innerType._zod.optout),Ar(w._zod,"pattern",()=>{let A=H.innerType._zod.pattern;return A?new RegExp(`^(${HH(A.source)}|null)$`):void 0}),Ar(w._zod,"values",()=>{return H.innerType._zod.values?new Set([...H.innerType._zod.values,null]):void 0}),w._zod.parse=(A,q)=>{if(A.value===null)return A;return H.innerType._zod.run(A,q)}}),N3=E("$ZodDefault",(w,H)=>{Er.init(w,H),w._zod.optin="optional",Ar(w._zod,"values",()=>H.innerType._zod.values),w._zod.parse=(A,q)=>{if(q.direction==="backward")return H.innerType._zod.run(A,q);if(A.value===void 0)return A.value=H.defaultValue,A;let W=H.innerType._zod.run(A,q);if(W instanceof Promise)return W.then((G)=>yQ(G,H));return yQ(W,H)}});function yQ(w,H){if(w.value===void 0)w.value=H.defaultValue;return w}var Z3=E("$ZodPrefault",(w,H)=>{Er.init(w,H),w._zod.optin="optional",Ar(w._zod,"values",()=>H.innerType._zod.values),w._zod.parse=(A,q)=>{if(q.direction==="backward")return H.innerType._zod.run(A,q);if(A.value===void 0)A.value=H.defaultValue;return H.innerType._zod.run(A,q)}}),l3=E("$ZodNonOptional",(w,H)=>{Er.init(w,H),Ar(w._zod,"values",()=>{let A=H.innerType._zod.values;return A?new Set([...A].filter((q)=>q!==void 0)):void 0}),w._zod.parse=(A,q)=>{let W=H.innerType._zod.run(A,q);if(W instanceof Promise)return W.then((G)=>jQ(G,w));return jQ(W,w)}});function jQ(w,H){if(!w.issues.length&&w.value===void 0)w.issues.push({code:"invalid_type",expected:"nonoptional",input:w.value,inst:H});return w}var T3=E("$ZodCatch",(w,H)=>{Er.init(w,H),Ar(w._zod,"optin",()=>H.innerType._zod.optin),Ar(w._zod,"optout",()=>H.innerType._zod.optout),Ar(w._zod,"values",()=>H.innerType._zod.values),w._zod.parse=(A,q)=>{if(q.direction==="backward")return H.innerType._zod.run(A,q);let W=H.innerType._zod.run(A,q);if(W instanceof Promise)return W.then((G)=>{if(A.value=G.value,G.issues.length)A.value=H.catchValue({...A,error:{issues:G.issues.map((R)=>C1(R,q,Mw()))},input:A.value}),A.issues=[];return A});if(A.value=W.value,W.issues.length)A.value=H.catchValue({...A,error:{issues:W.issues.map((G)=>C1(G,q,Mw()))},input:A.value}),A.issues=[];return A}});var C3=E("$ZodPipe",(w,H)=>{Er.init(w,H),Ar(w._zod,"values",()=>H.in._zod.values),Ar(w._zod,"optin",()=>H.in._zod.optin),Ar(w._zod,"optout",()=>H.out._zod.optout),Ar(w._zod,"propValues",()=>H.in._zod.propValues),w._zod.parse=(A,q)=>{if(q.direction==="backward"){let G=H.out._zod.run(A,q);if(G instanceof Promise)return G.then((R)=>wb(R,H.in,q));return wb(G,H.in,q)}let W=H.in._zod.run(A,q);if(W instanceof Promise)return W.then((G)=>wb(G,H.out,q));return wb(W,H.out,q)}});function wb(w,H,A){if(w.issues.length)return w.aborted=!0,w;return H._zod.run({value:w.value,issues:w.issues},A)}var S3=E("$ZodReadonly",(w,H)=>{Er.init(w,H),Ar(w._zod,"propValues",()=>H.innerType._zod.propValues),Ar(w._zod,"values",()=>H.innerType._zod.values),Ar(w._zod,"optin",()=>H.innerType?._zod?.optin),Ar(w._zod,"optout",()=>H.innerType?._zod?.optout),w._zod.parse=(A,q)=>{if(q.direction==="backward")return H.innerType._zod.run(A,q);let W=H.innerType._zod.run(A,q);if(W instanceof Promise)return W.then(iQ);return iQ(W)}});function iQ(w){return w.value=Object.freeze(w.value),w}var x3=E("$ZodCustom",(w,H)=>{Mv.init(w,H),Er.init(w,H),w._zod.parse=(A,q)=>{return A},w._zod.check=(A)=>{let q=A.value,W=H.fn(q);if(W instanceof Promise)return W.then((G)=>eQ(G,A,q,w));eQ(W,A,q,w);return}});function eQ(w,H,A,q){if(!w){let W={code:"custom",input:A,inst:q,path:[...q._zod.def.path??[]],continue:!q._zod.def.abort};if(q._zod.def.params)W.params=q._zod.def.params;H.issues.push(mh(W))}}var m3,Vjr=Symbol("ZodOutput"),Ejr=Symbol("ZodInput");class D3{constructor(){this._map=new WeakMap,this._idmap=new Map}add(w,...H){let A=H[0];if(this._map.set(w,A),A&&typeof A==="object"&&"id"in A)this._idmap.set(A.id,w);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(w){let H=this._map.get(w);if(H&&typeof H==="object"&&"id"in H)this._idmap.delete(H.id);return this._map.delete(w),this}get(w){let H=w._zod.parent;if(H){let A={...this.get(H)??{}};delete A.id;let q={...A,...this._map.get(w)};return Object.keys(q).length?q:void 0}return this._map.get(w)}has(w){return this._map.has(w)}}function Ko(){return new D3}(m3=globalThis).__zod_globalRegistry??(m3.__zod_globalRegistry=Ko());var $4=globalThis.__zod_globalRegistry;function k3(w,H){return new w({type:"string",...kg(H)})}function V3(w,H){return new w({type:"string",format:"email",check:"string_format",abort:!1,...kg(H)})}function ZW(w,H){return new w({type:"string",format:"guid",check:"string_format",abort:!1,...kg(H)})}function E3(w,H){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,...kg(H)})}function _3(w,H){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...kg(H)})}function y3(w,H){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...kg(H)})}function j3(w,H){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...kg(H)})}function i3(w,H){return new w({type:"string",format:"url",check:"string_format",abort:!1,...kg(H)})}function e3(w,H){return new w({type:"string",format:"emoji",check:"string_format",abort:!1,...kg(H)})}function n3(w,H){return new w({type:"string",format:"nanoid",check:"string_format",abort:!1,...kg(H)})}function f3(w,H){return new w({type:"string",format:"cuid",check:"string_format",abort:!1,...kg(H)})}function c3(w,H){return new w({type:"string",format:"cuid2",check:"string_format",abort:!1,...kg(H)})}function t3(w,H){return new w({type:"string",format:"ulid",check:"string_format",abort:!1,...kg(H)})}function p3(w,H){return new w({type:"string",format:"xid",check:"string_format",abort:!1,...kg(H)})}function d3(w,H){return new w({type:"string",format:"ksuid",check:"string_format",abort:!1,...kg(H)})}function a3(w,H){return new w({type:"string",format:"ipv4",check:"string_format",abort:!1,...kg(H)})}function s3(w,H){return new w({type:"string",format:"ipv6",check:"string_format",abort:!1,...kg(H)})}function gK(w,H){return new w({type:"string",format:"cidrv4",check:"string_format",abort:!1,...kg(H)})}function rK(w,H){return new w({type:"string",format:"cidrv6",check:"string_format",abort:!1,...kg(H)})}function vK(w,H){return new w({type:"string",format:"base64",check:"string_format",abort:!1,...kg(H)})}function wK(w,H){return new w({type:"string",format:"base64url",check:"string_format",abort:!1,...kg(H)})}function hK(w,H){return new w({type:"string",format:"e164",check:"string_format",abort:!1,...kg(H)})}function HK(w,H){return new w({type:"string",format:"jwt",check:"string_format",abort:!1,...kg(H)})}function OK(w,H){return new w({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...kg(H)})}function bK(w,H){return new w({type:"string",format:"date",check:"string_format",...kg(H)})}function AK(w,H){return new w({type:"string",format:"time",check:"string_format",precision:null,...kg(H)})}function qK(w,H){return new w({type:"string",format:"duration",check:"string_format",...kg(H)})}function PK(w){return new w({type:"unknown"})}function WK(w,H){return new w({type:"never",...kg(H)})}function Ob(w,H){return new BQ({check:"max_length",...kg(H),maximum:w})}function Dh(w,H){return new oQ({check:"min_length",...kg(H),minimum:w})}function bb(w,H){return new IQ({check:"length_equals",...kg(H),length:w})}function lW(w,H){return new NQ({check:"string_format",format:"regex",...kg(H),pattern:w})}function TW(w){return new ZQ({check:"string_format",format:"lowercase",...kg(w)})}function CW(w){return new lQ({check:"string_format",format:"uppercase",...kg(w)})}function SW(w,H){return new TQ({check:"string_format",format:"includes",...kg(H),includes:w})}function xW(w,H){return new CQ({check:"string_format",format:"starts_with",...kg(H),prefix:w})}function mW(w,H){return new SQ({check:"string_format",format:"ends_with",...kg(H),suffix:w})}function Y5(w){return new xQ({check:"overwrite",tx:w})}function DW(w){return Y5((H)=>H.normalize(w))}function kW(){return Y5((w)=>w.trim())}function VW(){return Y5((w)=>w.toLowerCase())}function EW(){return Y5((w)=>w.toUpperCase())}function _W(){return Y5((w)=>zW(w))}function MK(w,H,A){return new w({type:"array",element:H,...kg(A)})}function GK(w,H,A){return new w({type:"custom",check:"custom",fn:H,...kg(A)})}function RK(w){let H=zo((A)=>{return A.addIssue=(q)=>{if(typeof q==="string")A.issues.push(mh(q,A.value,H._zod.def));else{let W=q;if(W.fatal)W.continue=!1;W.code??(W.code="custom"),W.input??(W.input=A.value),W.inst??(W.inst=H),W.continue??(W.continue=!H._zod.def.abort),A.issues.push(mh(W))}},w(A.value,A)});return H}function zo(w,H){let A=new Mv({check:"custom",...kg(H)});return A._zod.check=w,A}function yW(w){let H=w?.target??"draft-2020-12";if(H==="draft-4")H="draft-04";if(H==="draft-7")H="draft-07";return{processors:w.processors??{},metadataRegistry:w?.metadata??$4,target:H,unrepresentable:w?.unrepresentable??"throw",override:w?.override??(()=>{}),io:w?.io??"output",counter:0,seen:new Map,cycles:w?.cycles??"ref",reused:w?.reused??"inline",external:w?.external??void 0}}function b0(w,H,A={path:[],schemaPath:[]}){var q;let W=w._zod.def,G=H.seen.get(w);if(G){if(G.count++,A.schemaPath.includes(w))G.cycle=A.path;return G.schema}let R={schema:{},count:1,cycle:void 0,path:A.path};H.seen.set(w,R);let X=w._zod.toJSONSchema?.();if(X)R.schema=X;else{let $={...A,schemaPath:[...A.schemaPath,w],path:A.path};if(w._zod.processJSONSchema)w._zod.processJSONSchema(H,R.schema,$);else{let L=R.schema,C=H.processors[W.type];if(!C)throw Error(`[toJSONSchema]: Non-representable type encountered: ${W.type}`);C(w,H,L,$)}let J=w._zod.parent;if(J){if(!R.ref)R.ref=J;b0(J,H,$),H.seen.get(J).isParent=!0}}let z=H.metadataRegistry.get(w);if(z)Object.assign(R.schema,z);if(H.io==="input"&&m0(w))delete R.schema.examples,delete R.schema.default;if(H.io==="input"&&R.schema._prefault)(q=R.schema).default??(q.default=R.schema._prefault);return delete R.schema._prefault,H.seen.get(w).schema}function jW(w,H){let A=w.seen.get(H);if(!A)throw Error("Unprocessed schema. This is a bug in Zod.");let q=new Map;for(let R of w.seen.entries()){let X=w.metadataRegistry.get(R[0])?.id;if(X){let z=q.get(X);if(z&&z!==R[0])throw Error(`Duplicate schema id "${X}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);q.set(X,R[0])}}let W=(R)=>{let X=w.target==="draft-2020-12"?"$defs":"definitions";if(w.external){let J=w.external.registry.get(R[0])?.id,L=w.external.uri??((n)=>n);if(J)return{ref:L(J)};let C=R[1].defId??R[1].schema.id??`schema${w.counter++}`;return R[1].defId=C,{defId:C,ref:`${L("__shared")}#/${X}/${C}`}}if(R[1]===A)return{ref:"#"};let U=`${"#"}/${X}/`,$=R[1].schema.id??`__schema${w.counter++}`;return{defId:$,ref:U+$}},G=(R)=>{if(R[1].schema.$ref)return;let X=R[1],{ref:z,defId:U}=W(R);if(X.def={...X.schema},U)X.defId=U;let $=X.schema;for(let J in $)delete $[J];$.$ref=z};if(w.cycles==="throw")for(let R of w.seen.entries()){let X=R[1];if(X.cycle)throw Error(`Cycle detected: #/${X.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let R of w.seen.entries()){let X=R[1];if(H===R[0]){G(R);continue}if(w.external){let U=w.external.registry.get(R[0])?.id;if(H!==R[0]&&U){G(R);continue}}if(w.metadataRegistry.get(R[0])?.id){G(R);continue}if(X.cycle){G(R);continue}if(X.count>1){if(w.reused==="ref"){G(R);continue}}}}function iW(w,H){let A=w.seen.get(H);if(!A)throw Error("Unprocessed schema. This is a bug in Zod.");let q=(R)=>{let X=w.seen.get(R);if(X.ref===null)return;let z=X.def??X.schema,U={...z},$=X.ref;if(X.ref=null,$){q($);let L=w.seen.get($),C=L.schema;if(C.$ref&&(w.target==="draft-07"||w.target==="draft-04"||w.target==="openapi-3.0"))z.allOf=z.allOf??[],z.allOf.push(C);else Object.assign(z,C);if(Object.assign(z,U),R._zod.parent===$)for(let y in z){if(y==="$ref"||y==="allOf")continue;if(!(y in U))delete z[y]}if(C.$ref&&L.def)for(let y in z){if(y==="$ref"||y==="allOf")continue;if(y in L.def&&JSON.stringify(z[y])===JSON.stringify(L.def[y]))delete z[y]}}let J=R._zod.parent;if(J&&J!==$){q(J);let L=w.seen.get(J);if(L?.schema.$ref){if(z.$ref=L.schema.$ref,L.def)for(let C in z){if(C==="$ref"||C==="allOf")continue;if(C in L.def&&JSON.stringify(z[C])===JSON.stringify(L.def[C]))delete z[C]}}}w.override({zodSchema:R,jsonSchema:z,path:X.path??[]})};for(let R of[...w.seen.entries()].reverse())q(R[0]);let W={};if(w.target==="draft-2020-12")W.$schema="https://json-schema.org/draft/2020-12/schema";else if(w.target==="draft-07")W.$schema="http://json-schema.org/draft-07/schema#";else if(w.target==="draft-04")W.$schema="http://json-schema.org/draft-04/schema#";else if(w.target==="openapi-3.0");if(w.external?.uri){let R=w.external.registry.get(H)?.id;if(!R)throw Error("Schema is missing an `id` property");W.$id=w.external.uri(R)}Object.assign(W,A.def??A.schema);let G=w.external?.defs??{};for(let R of w.seen.entries()){let X=R[1];if(X.def&&X.defId)G[X.defId]=X.def}if(w.external);else if(Object.keys(G).length>0)if(w.target==="draft-2020-12")W.$defs=G;else W.definitions=G;try{let R=JSON.parse(JSON.stringify(W));return Object.defineProperty(R,"~standard",{value:{...H["~standard"],jsonSchema:{input:WH(H,"input",w.processors),output:WH(H,"output",w.processors)}},enumerable:!1,writable:!1}),R}catch(R){throw Error("Error converting schema to JSON.")}}function m0(w,H){let A=H??{seen:new Set};if(A.seen.has(w))return!1;A.seen.add(w);let q=w._zod.def;if(q.type==="transform")return!0;if(q.type==="array")return m0(q.element,A);if(q.type==="set")return m0(q.valueType,A);if(q.type==="lazy")return m0(q.getter(),A);if(q.type==="promise"||q.type==="optional"||q.type==="nonoptional"||q.type==="nullable"||q.type==="readonly"||q.type==="default"||q.type==="prefault")return m0(q.innerType,A);if(q.type==="intersection")return m0(q.left,A)||m0(q.right,A);if(q.type==="record"||q.type==="map")return m0(q.keyType,A)||m0(q.valueType,A);if(q.type==="pipe")return m0(q.in,A)||m0(q.out,A);if(q.type==="object"){for(let W in q.shape)if(m0(q.shape[W],A))return!0;return!1}if(q.type==="union"){for(let W of q.options)if(m0(W,A))return!0;return!1}if(q.type==="tuple"){for(let W of q.items)if(m0(W,A))return!0;if(q.rest&&m0(q.rest,A))return!0;return!1}return!1}var XK=(w,H={})=>(A)=>{let q=yW({...A,processors:H});return b0(w,q),jW(q,w),iW(q,w)},WH=(w,H,A={})=>(q)=>{let{libraryOptions:W,target:G}=q??{},R=yW({...W??{},target:G,io:H,processors:A});return b0(w,R),jW(R,w),iW(R,w)};var $o={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},YK=(w,H,A,q)=>{let W=A;W.type="string";let{minimum:G,maximum:R,format:X,patterns:z,contentEncoding:U}=w._zod.bag;if(typeof G==="number")W.minLength=G;if(typeof R==="number")W.maxLength=R;if(X){if(W.format=$o[X]??X,W.format==="")delete W.format;if(X==="time")delete W.format}if(U)W.contentEncoding=U;if(z&&z.size>0){let $=[...z];if($.length===1)W.pattern=$[0].source;else if($.length>1)W.allOf=[...$.map((J)=>({...H.target==="draft-07"||H.target==="draft-04"||H.target==="openapi-3.0"?{type:"string"}:{},pattern:J.source}))]}};var JK=(w,H,A,q)=>{A.not={}};var QK=(w,H,A,q)=>{};var KK=(w,H,A,q)=>{let W=w._zod.def,G=vH(W.entries);if(G.every((R)=>typeof R==="number"))A.type="number";if(G.every((R)=>typeof R==="string"))A.type="string";A.enum=G},zK=(w,H,A,q)=>{let W=w._zod.def,G=[];for(let R of W.values)if(R===void 0){if(H.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof R==="bigint")if(H.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else G.push(Number(R));else G.push(R);if(G.length===0);else if(G.length===1){let R=G[0];if(A.type=R===null?"null":typeof R,H.target==="draft-04"||H.target==="openapi-3.0")A.enum=[R];else A.const=R}else{if(G.every((R)=>typeof R==="number"))A.type="number";if(G.every((R)=>typeof R==="string"))A.type="string";if(G.every((R)=>typeof R==="boolean"))A.type="boolean";if(G.every((R)=>R===null))A.type="null";A.enum=G}};var $K=(w,H,A,q)=>{if(H.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var UK=(w,H,A,q)=>{if(H.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var LK=(w,H,A,q)=>{let W=A,G=w._zod.def,{minimum:R,maximum:X}=w._zod.bag;if(typeof R==="number")W.minItems=R;if(typeof X==="number")W.maxItems=X;W.type="array",W.items=b0(G.element,H,{...q,path:[...q.path,"items"]})},uK=(w,H,A,q)=>{let W=A,G=w._zod.def;W.type="object",W.properties={};let R=G.shape;for(let U in R)W.properties[U]=b0(R[U],H,{...q,path:[...q.path,"properties",U]});let X=new Set(Object.keys(R)),z=new Set([...X].filter((U)=>{let $=G.shape[U]._zod;if(H.io==="input")return $.optin===void 0;else return $.optout===void 0}));if(z.size>0)W.required=Array.from(z);if(G.catchall?._zod.def.type==="never")W.additionalProperties=!1;else if(!G.catchall){if(H.io==="output")W.additionalProperties=!1}else if(G.catchall)W.additionalProperties=b0(G.catchall,H,{...q,path:[...q.path,"additionalProperties"]})},FK=(w,H,A,q)=>{let W=w._zod.def,G=W.inclusive===!1,R=W.options.map((X,z)=>b0(X,H,{...q,path:[...q.path,G?"oneOf":"anyOf",z]}));if(G)A.oneOf=R;else A.anyOf=R},BK=(w,H,A,q)=>{let W=w._zod.def,G=b0(W.left,H,{...q,path:[...q.path,"allOf",0]}),R=b0(W.right,H,{...q,path:[...q.path,"allOf",1]}),X=(U)=>("allOf"in U)&&Object.keys(U).length===1,z=[...X(G)?G.allOf:[G],...X(R)?R.allOf:[R]];A.allOf=z};var oK=(w,H,A,q)=>{let W=w._zod.def,G=b0(W.innerType,H,q),R=H.seen.get(w);if(H.target==="openapi-3.0")R.ref=W.innerType,A.nullable=!0;else A.anyOf=[G,{type:"null"}]},IK=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);G.ref=W.innerType},NK=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);G.ref=W.innerType,A.default=JSON.parse(JSON.stringify(W.defaultValue))},ZK=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);if(G.ref=W.innerType,H.io==="input")A._prefault=JSON.parse(JSON.stringify(W.defaultValue))},lK=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);G.ref=W.innerType;let R;try{R=W.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}A.default=R},TK=(w,H,A,q)=>{let W=w._zod.def,G=H.io==="input"?W.in._zod.def.type==="transform"?W.out:W.in:W.out;b0(G,H,q);let R=H.seen.get(w);R.ref=G},CK=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);G.ref=W.innerType,A.readOnly=!0};var eW=(w,H,A,q)=>{let W=w._zod.def;b0(W.innerType,H,q);let G=H.seen.get(w);G.ref=W.innerType};var Co=E("ZodISODateTime",(w,H)=>{w3.init(w,H),or.init(w,H)});function SK(w){return OK(Co,w)}var So=E("ZodISODate",(w,H)=>{h3.init(w,H),or.init(w,H)});function xK(w){return bK(So,w)}var xo=E("ZodISOTime",(w,H)=>{H3.init(w,H),or.init(w,H)});function mK(w){return AK(xo,w)}var mo=E("ZodISODuration",(w,H)=>{O3.init(w,H),or.init(w,H)});function DK(w){return qK(mo,w)}var kK=(w,H)=>{s2.init(w,H),w.name="ZodError",Object.defineProperties(w,{format:{value:(A)=>eJ(w,A)},flatten:{value:(A)=>iJ(w,A)},addIssue:{value:(A)=>{w.issues.push(A),w.message=JSON.stringify(w.issues,xh,2)}},addIssues:{value:(A)=>{w.issues.push(...A),w.message=JSON.stringify(w.issues,xh,2)}},isEmpty:{get(){return w.issues.length===0}}})},zir=E("ZodError",kK),Gv=E("ZodError",kK,{Parent:Error});var VK=gb(Gv),EK=rb(Gv),_K=AH(Gv),yK=qH(Gv),jK=cJ(Gv),iK=tJ(Gv),eK=pJ(Gv),nK=dJ(Gv),fK=aJ(Gv),cK=sJ(Gv),tK=gQ(Gv),pK=rQ(Gv);var dr=E("ZodType",(w,H)=>{return Er.init(w,H),Object.assign(w["~standard"],{jsonSchema:{input:WH(w,"input"),output:WH(w,"output")}}),w.toJSONSchema=XK(w,{}),w.def=H,w.type=H.type,Object.defineProperty(w,"_def",{value:H}),w.check=(...A)=>{return w.clone(Pr.mergeDefs(H,{checks:[...H.checks??[],...A.map((q)=>typeof q==="function"?{_zod:{check:q,def:{check:"custom"},onattach:[]}}:q)]}),{parent:!0})},w.with=w.check,w.clone=(A,q)=>tv(w,A,q),w.brand=()=>w,w.register=(A,q)=>{return A.add(w,q),w},w.parse=(A,q)=>VK(w,A,q,{callee:w.parse}),w.safeParse=(A,q)=>_K(w,A,q),w.parseAsync=async(A,q)=>EK(w,A,q,{callee:w.parseAsync}),w.safeParseAsync=async(A,q)=>yK(w,A,q),w.spa=w.safeParseAsync,w.encode=(A,q)=>jK(w,A,q),w.decode=(A,q)=>iK(w,A,q),w.encodeAsync=async(A,q)=>eK(w,A,q),w.decodeAsync=async(A,q)=>nK(w,A,q),w.safeEncode=(A,q)=>fK(w,A,q),w.safeDecode=(A,q)=>cK(w,A,q),w.safeEncodeAsync=async(A,q)=>tK(w,A,q),w.safeDecodeAsync=async(A,q)=>pK(w,A,q),w.refine=(A,q)=>w.check(lI(A,q)),w.superRefine=(A)=>w.check(TI(A)),w.overwrite=(A)=>w.check(Y5(A)),w.optional=()=>sK(w),w.exactOptional=()=>QI(w),w.nullable=()=>gz(w),w.nullish=()=>sK(gz(w)),w.nonoptional=(A)=>uI(w,A),w.array=()=>Xw(w),w.or=(A)=>WI([w,A]),w.and=(A)=>GI(w,A),w.transform=(A)=>rz(w,YI(A)),w.default=(A)=>$I(w,A),w.prefault=(A)=>LI(w,A),w.catch=(A)=>BI(w,A),w.pipe=(A)=>rz(w,A),w.readonly=()=>NI(w),w.describe=(A)=>{let q=w.clone();return $4.add(q,{description:A}),q},Object.defineProperty(w,"description",{get(){return $4.get(w)?.description},configurable:!0}),w.meta=(...A)=>{if(A.length===0)return $4.get(w);let q=w.clone();return $4.add(q,A[0]),q},w.isOptional=()=>w.safeParse(void 0).success,w.isNullable=()=>w.safeParse(null).success,w.apply=(A)=>A(w),w}),vz=E("_ZodString",(w,H)=>{Hb.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(q,W,G)=>YK(w,q,W,G);let A=w._zod.bag;w.format=A.format??null,w.minLength=A.minimum??null,w.maxLength=A.maximum??null,w.regex=(...q)=>w.check(lW(...q)),w.includes=(...q)=>w.check(SW(...q)),w.startsWith=(...q)=>w.check(xW(...q)),w.endsWith=(...q)=>w.check(mW(...q)),w.min=(...q)=>w.check(Dh(...q)),w.max=(...q)=>w.check(Ob(...q)),w.length=(...q)=>w.check(bb(...q)),w.nonempty=(...q)=>w.check(Dh(1,...q)),w.lowercase=(q)=>w.check(TW(q)),w.uppercase=(q)=>w.check(CW(q)),w.trim=()=>w.check(kW()),w.normalize=(...q)=>w.check(DW(...q)),w.toLowerCase=()=>w.check(VW()),w.toUpperCase=()=>w.check(EW()),w.slugify=()=>w.check(_W())}),Eo=E("ZodString",(w,H)=>{Hb.init(w,H),vz.init(w,H),w.email=(A)=>w.check(V3(_o,A)),w.url=(A)=>w.check(i3(yo,A)),w.jwt=(A)=>w.check(HK(hI,A)),w.emoji=(A)=>w.check(e3(jo,A)),w.guid=(A)=>w.check(ZW(dK,A)),w.uuid=(A)=>w.check(E3(qb,A)),w.uuidv4=(A)=>w.check(_3(qb,A)),w.uuidv6=(A)=>w.check(y3(qb,A)),w.uuidv7=(A)=>w.check(j3(qb,A)),w.nanoid=(A)=>w.check(n3(io,A)),w.guid=(A)=>w.check(ZW(dK,A)),w.cuid=(A)=>w.check(f3(eo,A)),w.cuid2=(A)=>w.check(c3(no,A)),w.ulid=(A)=>w.check(t3(fo,A)),w.base64=(A)=>w.check(vK(rI,A)),w.base64url=(A)=>w.check(wK(vI,A)),w.xid=(A)=>w.check(p3(co,A)),w.ksuid=(A)=>w.check(d3(to,A)),w.ipv4=(A)=>w.check(a3(po,A)),w.ipv6=(A)=>w.check(s3(ao,A)),w.cidrv4=(A)=>w.check(gK(so,A)),w.cidrv6=(A)=>w.check(rK(gI,A)),w.e164=(A)=>w.check(hK(wI,A)),w.datetime=(A)=>w.check(SK(A)),w.date=(A)=>w.check(xK(A)),w.time=(A)=>w.check(mK(A)),w.duration=(A)=>w.check(DK(A))});function _r(w){return k3(Eo,w)}var or=E("ZodStringFormat",(w,H)=>{ur.init(w,H),vz.init(w,H)}),_o=E("ZodEmail",(w,H)=>{cQ.init(w,H),or.init(w,H)});var dK=E("ZodGUID",(w,H)=>{nQ.init(w,H),or.init(w,H)});var qb=E("ZodUUID",(w,H)=>{fQ.init(w,H),or.init(w,H)});var yo=E("ZodURL",(w,H)=>{tQ.init(w,H),or.init(w,H)});var jo=E("ZodEmoji",(w,H)=>{pQ.init(w,H),or.init(w,H)});var io=E("ZodNanoID",(w,H)=>{dQ.init(w,H),or.init(w,H)});var eo=E("ZodCUID",(w,H)=>{aQ.init(w,H),or.init(w,H)});var no=E("ZodCUID2",(w,H)=>{sQ.init(w,H),or.init(w,H)});var fo=E("ZodULID",(w,H)=>{g3.init(w,H),or.init(w,H)});var co=E("ZodXID",(w,H)=>{r3.init(w,H),or.init(w,H)});var to=E("ZodKSUID",(w,H)=>{v3.init(w,H),or.init(w,H)});var po=E("ZodIPv4",(w,H)=>{b3.init(w,H),or.init(w,H)});var ao=E("ZodIPv6",(w,H)=>{A3.init(w,H),or.init(w,H)});var so=E("ZodCIDRv4",(w,H)=>{q3.init(w,H),or.init(w,H)});var gI=E("ZodCIDRv6",(w,H)=>{P3.init(w,H),or.init(w,H)});var rI=E("ZodBase64",(w,H)=>{M3.init(w,H),or.init(w,H)});var vI=E("ZodBase64URL",(w,H)=>{G3.init(w,H),or.init(w,H)});var wI=E("ZodE164",(w,H)=>{R3.init(w,H),or.init(w,H)});var hI=E("ZodJWT",(w,H)=>{X3.init(w,H),or.init(w,H)});var HI=E("ZodUnknown",(w,H)=>{Y3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>QK(w,A,q,W)});function aK(){return PK(HI)}var OI=E("ZodNever",(w,H)=>{J3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>JK(w,A,q,W)});function bI(w){return WK(OI,w)}var AI=E("ZodArray",(w,H)=>{Q3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>LK(w,A,q,W),w.element=H.element,w.min=(A,q)=>w.check(Dh(A,q)),w.nonempty=(A)=>w.check(Dh(1,A)),w.max=(A,q)=>w.check(Ob(A,q)),w.length=(A,q)=>w.check(bb(A,q)),w.unwrap=()=>w.element});function Xw(w,H){return MK(AI,w,H)}var qI=E("ZodObject",(w,H)=>{$3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>uK(w,A,q,W),Pr.defineLazy(w,"shape",()=>{return H.shape}),w.keyof=()=>MH(Object.keys(w._zod.def.shape)),w.catchall=(A)=>w.clone({...w._zod.def,catchall:A}),w.passthrough=()=>w.clone({...w._zod.def,catchall:aK()}),w.loose=()=>w.clone({...w._zod.def,catchall:aK()}),w.strict=()=>w.clone({...w._zod.def,catchall:bI()}),w.strip=()=>w.clone({...w._zod.def,catchall:void 0}),w.extend=(A)=>{return Pr.extend(w,A)},w.safeExtend=(A)=>{return Pr.safeExtend(w,A)},w.merge=(A)=>Pr.merge(w,A),w.pick=(A)=>Pr.pick(w,A),w.omit=(A)=>Pr.omit(w,A),w.partial=(...A)=>Pr.partial(wz,w,A[0]),w.required=(...A)=>Pr.required(hz,w,A[0])});function U4(w,H){let A={type:"object",shape:w??{},...Pr.normalizeParams(H)};return new qI(A)}var PI=E("ZodUnion",(w,H)=>{U3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>FK(w,A,q,W),w.options=H.options});function WI(w,H){return new PI({type:"union",options:w,...Pr.normalizeParams(H)})}var MI=E("ZodIntersection",(w,H)=>{L3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>BK(w,A,q,W)});function GI(w,H){return new MI({type:"intersection",left:w,right:H})}var nW=E("ZodEnum",(w,H)=>{u3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(q,W,G)=>KK(w,q,W,G),w.enum=H.entries,w.options=Object.values(H.entries);let A=new Set(Object.keys(H.entries));w.extract=(q,W)=>{let G={};for(let R of q)if(A.has(R))G[R]=H.entries[R];else throw Error(`Key ${R} not found in enum`);return new nW({...H,checks:[],...Pr.normalizeParams(W),entries:G})},w.exclude=(q,W)=>{let G={...H.entries};for(let R of q)if(A.has(R))delete G[R];else throw Error(`Key ${R} not found in enum`);return new nW({...H,checks:[],...Pr.normalizeParams(W),entries:G})}});function MH(w,H){let A=Array.isArray(w)?Object.fromEntries(w.map((q)=>[q,q])):w;return new nW({type:"enum",entries:A,...Pr.normalizeParams(H)})}var RI=E("ZodLiteral",(w,H)=>{F3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>zK(w,A,q,W),w.values=new Set(H.values),Object.defineProperty(w,"value",{get(){if(H.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return H.values[0]}})});function fW(w,H){return new RI({type:"literal",values:Array.isArray(w)?w:[w],...Pr.normalizeParams(H)})}var XI=E("ZodTransform",(w,H)=>{B3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>UK(w,A,q,W),w._zod.parse=(A,q)=>{if(q.direction==="backward")throw new gH(w.constructor.name);A.addIssue=(G)=>{if(typeof G==="string")A.issues.push(Pr.issue(G,A.value,H));else{let R=G;if(R.fatal)R.continue=!1;R.code??(R.code="custom"),R.input??(R.input=A.value),R.inst??(R.inst=w),A.issues.push(Pr.issue(R))}};let W=H.transform(A.value,A);if(W instanceof Promise)return W.then((G)=>{return A.value=G,A});return A.value=W,A}});function YI(w){return new XI({type:"transform",transform:w})}var wz=E("ZodOptional",(w,H)=>{NW.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>eW(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function sK(w){return new wz({type:"optional",innerType:w})}var JI=E("ZodExactOptional",(w,H)=>{o3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>eW(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function QI(w){return new JI({type:"optional",innerType:w})}var KI=E("ZodNullable",(w,H)=>{I3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>oK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function gz(w){return new KI({type:"nullable",innerType:w})}var zI=E("ZodDefault",(w,H)=>{N3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>NK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType,w.removeDefault=w.unwrap});function $I(w,H){return new zI({type:"default",innerType:w,get defaultValue(){return typeof H==="function"?H():Pr.shallowClone(H)}})}var UI=E("ZodPrefault",(w,H)=>{Z3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>ZK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function LI(w,H){return new UI({type:"prefault",innerType:w,get defaultValue(){return typeof H==="function"?H():Pr.shallowClone(H)}})}var hz=E("ZodNonOptional",(w,H)=>{l3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>IK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function uI(w,H){return new hz({type:"nonoptional",innerType:w,...Pr.normalizeParams(H)})}var FI=E("ZodCatch",(w,H)=>{T3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>lK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType,w.removeCatch=w.unwrap});function BI(w,H){return new FI({type:"catch",innerType:w,catchValue:typeof H==="function"?H:()=>H})}var oI=E("ZodPipe",(w,H)=>{C3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>TK(w,A,q,W),w.in=H.in,w.out=H.out});function rz(w,H){return new oI({type:"pipe",in:w,out:H})}var II=E("ZodReadonly",(w,H)=>{S3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>CK(w,A,q,W),w.unwrap=()=>w._zod.def.innerType});function NI(w){return new II({type:"readonly",innerType:w})}var ZI=E("ZodCustom",(w,H)=>{x3.init(w,H),dr.init(w,H),w._zod.processJSONSchema=(A,q,W)=>$K(w,A,q,W)});function lI(w,H={}){return GK(ZI,w,H)}function TI(w){return RK(w)}var Hz=U4({type:MH(["character","chat"]),characterId:_r().optional(),chatId:_r().optional(),displayName:_r().default("")}),Oz=U4({description:_r().optional(),author:_r().optional(),version:_r().optional(),tags:Xw(_r()).optional()}),CI=U4({name:_r().min(1).max(200),code:_r(),type:MH(["trigger","library"]),triggers:Xw(_r()).optional(),bindings:Xw(Hz).optional(),folder:_r().optional(),metadata:Oz.optional()}),bz=U4({format:fW("lumiscript-pack-v1"),exportedAt:_r(),scripts:Xw(CI).min(1).max(100)}),SI=U4({name:_r().min(1).max(200),file:_r().min(1),type:MH(["trigger","library"]),triggers:Xw(_r()).optional(),bindings:Xw(Hz).optional(),folder:_r().optional(),metadata:Oz.optional()}),jer=U4({format:fW("lumiscript-manifest-v1"),sourcePack:_r().optional(),sourceFormat:_r().optional(),exportedAt:_r().optional(),convertedAt:_r().optional(),scripts:Xw(SI).min(1).max(100)});var Az=1048576;async function qz(w){let H=new Uint8Array(await w.arrayBuffer()),A;try{A=ZJ(H)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let q=A["pack.json"];if(!q)throw Error("Invalid script pack: missing pack.json");if(q.byteLength>Az)throw Error(`Pack exceeds the ${Az/1024/1024} MB decompressed size limit`);let W=JW(q),G;try{G=JSON.parse(W)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return bz.parse(G).scripts}var vr=Mg(sg(),1);function xI(w){let A="";for(let q=0;q<w.length;q+=32768)A+=String.fromCharCode(...w.subarray(q,q+32768));return btoa(A)}function mI(w){let H=new Map;for(let W of w){let G=W.folder??"";if(!H.has(G))H.set(G,[]);H.get(G).push(W)}let A=new Map;if(H.has(""))A.set("",H.get(""));let q=[...H.keys()].filter((W)=>W!=="").sort();for(let W of q)A.set(W,H.get(W));return A}var Pb=({scripts:w,selectedId:H,execInfo:A,onSelect:q,onEdit:W,sendToBackend:G})=>{let[R,X]=GH.useState("trigger"),[z,U]=GH.useState(new Set),$=GH.useRef(null),J=w.filter((c)=>c.type===R),L=mI(J),C=L.size>1||L.size===1&&!L.has(""),n=(c)=>{U((s)=>{let Ag=new Set(s);if(Ag.has(c))Ag.delete(c);else Ag.add(c);return Ag})},y=()=>{let c=R==="library"?"Library name:":"Script name:",s=window.prompt(c);if(!s?.trim())return;G({type:"create_script",name:s.trim(),scriptType:R})},a=(c)=>{if(J.length===0)return;if(c.shiftKey){let Ag=QW(J);G({type:"save_pack_to_disk",bytesB64:xI(Ag),scriptType:R});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;lJ(J,s.trim())},_=()=>{$.current?.click()},Wg=async(c)=>{let s=c.target.files?.[0];if(!s)return;c.target.value="";try{let Ag=await qz(s),vg=(D)=>D==="library"?"[L]":"[T]",d=Ag.map((D)=>`  ${vg(D.type)} ${D.name}`).join(`
`);if(!window.confirm(`Import ${Ag.length} script${Ag.length>1?"s":""}?

${d}

Imported scripts will be disabled. Review and enable them manually.`))return;G({type:"import_scripts",entries:Ag})}catch(Ag){window.alert(`Import failed: ${Ag instanceof Error?Ag.message:String(Ag)}`)}},Og=(c)=>{let s=A[c.id];return vr.jsxDEV(XJ,{script:c,selected:c.id===H,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>q(c.id),onEdit:()=>W(c.id),sendToBackend:G},c.id,!1,void 0,this)};return vr.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[vr.jsxDEV("div",{className:"ls-list-header",children:[vr.jsxDEV("div",{className:"ls-list-type-tabs",children:[vr.jsxDEV("button",{className:`ls-type-tab${R==="trigger"?" ls-active":""}`,onClick:()=>X("trigger"),title:"Scripts",children:vr.jsxDEV(C0,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vr.jsxDEV("button",{className:`ls-type-tab${R==="library"?" ls-active":""}`,onClick:()=>X("library"),title:"Libraries",children:vr.jsxDEV(G4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vr.jsxDEV("div",{className:"ls-list-actions",children:[vr.jsxDEV("button",{className:"ls-icon-btn",onClick:_,title:"Import script pack",children:vr.jsxDEV(c8,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vr.jsxDEV("button",{className:"ls-icon-btn",onClick:a,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:J.length===0,children:vr.jsxDEV(R4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vr.jsxDEV("button",{className:"ls-icon-btn",onClick:y,title:"New script",children:vr.jsxDEV(E8,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vr.jsxDEV("input",{ref:$,type:"file",accept:".zip",style:{display:"none"},onChange:Wg},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vr.jsxDEV("div",{className:"ls-list-body",children:J.length===0?vr.jsxDEV("div",{className:"ls-list-empty",children:[vr.jsxDEV(I1,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),vr.jsxDEV("p",{children:["No ",R==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),vr.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):C?[...L.entries()].map(([c,s])=>{let Ag=z.has(c);return c===""?vr.jsxDEV("div",{children:s.map(Og)},"__unfiled",!1,void 0,this):vr.jsxDEV("div",{className:"ls-folder-group",children:[vr.jsxDEV("button",{className:"ls-folder-header",onClick:()=>n(c),children:[Ag?vr.jsxDEV(bw,{size:11},void 0,!1,void 0,this):vr.jsxDEV(S0,{size:11},void 0,!1,void 0,this),vr.jsxDEV(X4,{size:11},void 0,!1,void 0,this),vr.jsxDEV("span",{className:"ls-folder-name",children:c},void 0,!1,void 0,this),vr.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(vg)=>{vg.stopPropagation();let d=window.prompt("Rename folder:",c);if(d===null||d.trim()===""||d.trim()===c)return;for(let wg of s)G({type:"update_script",id:wg.id,patch:{folder:d.trim()}})},children:vr.jsxDEV(Y4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),vr.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!Ag&&s.map(Og)]},`folder-${c}`,!0,void 0,this)}):J.map(Og)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var QH=Mg(Hr(),1),cz=Mg($8(),1);var Y0=Mg(Hr(),1);function Pz(w,H){(H==null||H>w.length)&&(H=w.length);for(var A=0,q=Array(H);A<H;A++)q[A]=w[A];return q}function DI(w){if(Array.isArray(w))return w}function kI(w,H,A){return(H=jI(H))in w?Object.defineProperty(w,H,{value:A,enumerable:!0,configurable:!0,writable:!0}):w[H]=A,w}function VI(w,H){var A=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(A!=null){var q,W,G,R,X=[],z=!0,U=!1;try{if(G=(A=A.call(w)).next,H===0);else for(;!(z=(q=G.call(A)).done)&&(X.push(q.value),X.length!==H);z=!0);}catch($){U=!0,W=$}finally{try{if(!z&&A.return!=null&&(R=A.return(),Object(R)!==R))return}finally{if(U)throw W}}return X}}function EI(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wz(w,H){var A=Object.keys(w);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(w);H&&(q=q.filter(function(W){return Object.getOwnPropertyDescriptor(w,W).enumerable})),A.push.apply(A,q)}return A}function cW(w){for(var H=1;H<arguments.length;H++){var A=arguments[H]!=null?arguments[H]:{};H%2?Wz(Object(A),!0).forEach(function(q){kI(w,q,A[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(A)):Wz(Object(A)).forEach(function(q){Object.defineProperty(w,q,Object.getOwnPropertyDescriptor(A,q))})}return w}function Mz(w,H){if(w==null)return{};var A,q,W=_I(w,H);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(w);for(q=0;q<G.length;q++)A=G[q],H.indexOf(A)===-1&&{}.propertyIsEnumerable.call(w,A)&&(W[A]=w[A])}return W}function _I(w,H){if(w==null)return{};var A={};for(var q in w)if({}.hasOwnProperty.call(w,q)){if(H.indexOf(q)!==-1)continue;A[q]=w[q]}return A}function Gz(w,H){return DI(w)||VI(w,H)||iI(w,H)||EI()}function yI(w,H){if(typeof w!="object"||!w)return w;var A=w[Symbol.toPrimitive];if(A!==void 0){var q=A.call(w,H);if(typeof q!="object")return q;throw TypeError("@@toPrimitive must return a primitive value.")}return(H==="string"?String:Number)(w)}function jI(w){var H=yI(w,"string");return typeof H=="symbol"?H:H+""}function iI(w,H){if(w){if(typeof w=="string")return Pz(w,H);var A={}.toString.call(w).slice(8,-1);return A==="Object"&&w.constructor&&(A=w.constructor.name),A==="Map"||A==="Set"?Array.from(w):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?Pz(w,H):void 0}}function eI(w,H,A){if(H in w)Object.defineProperty(w,H,{value:A,enumerable:!0,configurable:!0,writable:!0});else w[H]=A;return w}function Rz(w,H){var A=Object.keys(w);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(w);if(H)q=q.filter(function(W){return Object.getOwnPropertyDescriptor(w,W).enumerable});A.push.apply(A,q)}return A}function Xz(w){for(var H=1;H<arguments.length;H++){var A=arguments[H]!=null?arguments[H]:{};if(H%2)Rz(Object(A),!0).forEach(function(q){eI(w,q,A[q])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(w,Object.getOwnPropertyDescriptors(A));else Rz(Object(A)).forEach(function(q){Object.defineProperty(w,q,Object.getOwnPropertyDescriptor(A,q))})}return w}function nI(){for(var w=arguments.length,H=Array(w),A=0;A<w;A++)H[A]=arguments[A];return function(q){return H.reduceRight(function(W,G){return G(W)},q)}}function RH(w){return function H(){var A=this;for(var q=arguments.length,W=Array(q),G=0;G<q;G++)W[G]=arguments[G];return W.length>=w.length?w.apply(this,W):function(){for(var R=arguments.length,X=Array(R),z=0;z<R;z++)X[z]=arguments[z];return H.apply(A,[].concat(W,X))}}}function Mb(w){return{}.toString.call(w).includes("Object")}function fI(w){return!Object.keys(w).length}function XH(w){return typeof w==="function"}function cI(w,H){return Object.prototype.hasOwnProperty.call(w,H)}function tI(w,H){if(!Mb(H))J5("changeType");if(Object.keys(H).some(function(A){return!cI(w,A)}))J5("changeField");return H}function pI(w){if(!XH(w))J5("selectorType")}function dI(w){if(!(XH(w)||Mb(w)))J5("handlerType");if(Mb(w)&&Object.values(w).some(function(H){return!XH(H)}))J5("handlersType")}function aI(w){if(!w)J5("initialIsRequired");if(!Mb(w))J5("initialType");if(fI(w))J5("initialContent")}function sI(w,H){throw Error(w[H]||w.default)}var gN={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},J5=RH(sI)(gN),Wb={changes:tI,selector:pI,handler:dI,initial:aI};function rN(w){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Wb.initial(w),Wb.handler(H);var A={current:w},q=RH(hN)(A,H),W=RH(wN)(A),G=RH(Wb.changes)(w),R=RH(vN)(A);function X(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function($){return $};return Wb.selector(U),U(A.current)}function z(U){nI(q,W,G,R)(U)}return[X,z]}function vN(w,H){return XH(H)?H(w.current):H}function wN(w,H){return w.current=Xz(Xz({},w.current),H),H}function hN(w,H,A){return XH(H)?H(w.current):Object.keys(A).forEach(function(q){var W;return(W=H[q])===null||W===void 0?void 0:W.call(H,w.current[q])}),A}var HN={create:rN},Yz=HN;var Jz={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Qz(w){return function H(){var A=this;for(var q=arguments.length,W=Array(q),G=0;G<q;G++)W[G]=arguments[G];return W.length>=w.length?w.apply(this,W):function(){for(var R=arguments.length,X=Array(R),z=0;z<R;z++)X[z]=arguments[z];return H.apply(A,[].concat(W,X))}}}function Kz(w){return{}.toString.call(w).includes("Object")}function ON(w){if(!w)zz("configIsRequired");if(!Kz(w))zz("configType");if(w.urls)return bN(),{paths:{vs:w.urls.monacoBase}};return w}function bN(){console.warn($z.deprecation)}function AN(w,H){throw Error(w[H]||w.default)}var $z={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},zz=Qz(AN)($z),Uz={config:ON};var Lz=function(){for(var H=arguments.length,A=Array(H),q=0;q<H;q++)A[q]=arguments[q];return function(W){return A.reduceRight(function(G,R){return R(G)},W)}};function tW(w,H){return Object.keys(H).forEach(function(A){if(H[A]instanceof Object){if(w[A])Object.assign(H[A],tW(w[A],H[A]))}}),cW(cW({},w),H)}var qN={type:"cancelation",msg:"operation is manually canceled"};function Gb(w){var H=!1,A=new Promise(function(q,W){w.then(function(G){return H?W(qN):q(G)}),w.catch(W)});return A.cancel=function(){return H=!0},A}var PN=["monaco"],WN=Yz.create({config:Jz,isInitialized:!1,resolve:null,reject:null,monaco:null}),uz=Gz(WN,2),YH=uz[0],Rb=uz[1];function MN(w){var H=Uz.config(w),A=H.monaco,q=Mz(H,PN);Rb(function(W){return{config:tW(W.config,q),monaco:A}})}function GN(){var w=YH(function(H){var{monaco:A,isInitialized:q,resolve:W}=H;return{monaco:A,isInitialized:q,resolve:W}});if(!w.isInitialized){if(Rb({isInitialized:!0}),w.monaco)return w.resolve(w.monaco),Gb(pW);if(window.monaco&&window.monaco.editor)return Fz(window.monaco),w.resolve(window.monaco),Gb(pW);Lz(RN,YN)(JN)}return Gb(pW)}function RN(w){return document.body.appendChild(w)}function XN(w){var H=document.createElement("script");return w&&(H.src=w),H}function YN(w){var H=YH(function(q){var{config:W,reject:G}=q;return{config:W,reject:G}}),A=XN("".concat(H.config.paths.vs,"/loader.js"));return A.onload=function(){return w()},A.onerror=H.reject,A}function JN(){var w=YH(function(A){var{config:q,resolve:W,reject:G}=A;return{config:q,resolve:W,reject:G}}),H=window.require;H.config(w.config),H(["vs/editor/editor.main"],function(A){var q=A.m||A;Fz(q),w.resolve(q)},function(A){w.reject(A)})}function Fz(w){if(!YH().monaco)Rb({monaco:w})}function QN(){return YH(function(w){var H=w.monaco;return H})}var pW=new Promise(function(w,H){return Rb({resolve:w,reject:H})}),L4={config:MN,init:GN,__getMonacoInstance:QN};var Bz=Mg(Hr(),1),A0=Mg(Hr(),1);var oz=Mg(Hr(),1),Yb=Mg(Hr(),1),Iz=Mg(Hr(),1),Zz=Mg(Hr(),1),Jb=Mg(Hr(),1),CN=Mg(Hr(),1);var Cz=Mg(Hr(),1),Dr=Mg(Hr(),1);var Qb=Mg(Hr(),1),KN={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},dW=KN,zN={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},$N=zN;function UN({children:w}){return Iz.default.createElement("div",{style:$N.container},w)}var LN=UN,uN=LN;function FN({width:w,height:H,isEditorReady:A,loading:q,_ref:W,className:G,wrapperProps:R}){return Yb.default.createElement("section",{style:{...dW.wrapper,width:w,height:H},...R},!A&&Yb.default.createElement(uN,null,q),Yb.default.createElement("div",{ref:W,style:{...dW.fullWidth,...!A&&dW.hide},className:G}))}var BN=FN,Nz=oz.memo(BN);function oN(w){Zz.useEffect(w,[])}var lz=oN;function IN(w,H,A=!0){let q=Jb.useRef(!0);Jb.useEffect(q.current||!A?()=>{q.current=!1}:w,H)}var Rv=IN;function JH(){}function kh(w,H,A,q){return NN(w,q)||ZN(w,H,A,q)}function NN(w,H){return w.editor.getModel(Tz(w,H))}function ZN(w,H,A,q){return w.editor.createModel(H,A,q?Tz(w,q):void 0)}function Tz(w,H){return w.Uri.parse(H)}function lN({original:w,modified:H,language:A,originalLanguage:q,modifiedLanguage:W,originalModelPath:G,modifiedModelPath:R,keepCurrentOriginalModel:X=!1,keepCurrentModifiedModel:z=!1,theme:U="light",loading:$="Loading...",options:J={},height:L="100%",width:C="100%",className:n,wrapperProps:y={},beforeMount:a=JH,onMount:_=JH}){let[Wg,Og]=A0.useState(!1),[c,s]=A0.useState(!0),Ag=A0.useRef(null),vg=A0.useRef(null),d=A0.useRef(null),wg=A0.useRef(_),D=A0.useRef(a),Fg=A0.useRef(!1);lz(()=>{let V=L4.init();return V.then((p)=>(vg.current=p)&&s(!1)).catch((p)=>p?.type!=="cancelation"&&console.error("Monaco initialization: error:",p)),()=>Ag.current?Vg():V.cancel()}),Rv(()=>{if(Ag.current&&vg.current){let V=Ag.current.getOriginalEditor(),p=kh(vg.current,w||"",q||A||"text",G||"");p!==V.getModel()&&V.setModel(p)}},[G],Wg),Rv(()=>{if(Ag.current&&vg.current){let V=Ag.current.getModifiedEditor(),p=kh(vg.current,H||"",W||A||"text",R||"");p!==V.getModel()&&V.setModel(p)}},[R],Wg),Rv(()=>{let V=Ag.current.getModifiedEditor();V.getOption(vg.current.editor.EditorOption.readOnly)?V.setValue(H||""):H!==V.getValue()&&(V.executeEdits("",[{range:V.getModel().getFullModelRange(),text:H||"",forceMoveMarkers:!0}]),V.pushUndoStop())},[H],Wg),Rv(()=>{Ag.current?.getModel()?.original.setValue(w||"")},[w],Wg),Rv(()=>{let{original:V,modified:p}=Ag.current.getModel();vg.current.editor.setModelLanguage(V,q||A||"text"),vg.current.editor.setModelLanguage(p,W||A||"text")},[A,q,W],Wg),Rv(()=>{vg.current?.editor.setTheme(U)},[U],Wg),Rv(()=>{Ag.current?.updateOptions(J)},[J],Wg);let Jg=A0.useCallback(()=>{if(!vg.current)return;D.current(vg.current);let V=kh(vg.current,w||"",q||A||"text",G||""),p=kh(vg.current,H||"",W||A||"text",R||"");Ag.current?.setModel({original:V,modified:p})},[A,H,W,w,q,G,R]),Kg=A0.useCallback(()=>{!Fg.current&&d.current&&(Ag.current=vg.current.editor.createDiffEditor(d.current,{automaticLayout:!0,...J}),Jg(),vg.current?.editor.setTheme(U),Og(!0),Fg.current=!0)},[J,U,Jg]);A0.useEffect(()=>{Wg&&wg.current(Ag.current,vg.current)},[Wg]),A0.useEffect(()=>{!c&&!Wg&&Kg()},[c,Wg,Kg]);function Vg(){let V=Ag.current?.getModel();X||V?.original?.dispose(),z||V?.modified?.dispose(),Ag.current?.dispose()}return A0.default.createElement(Nz,{width:C,height:L,isEditorReady:Wg,loading:$,_ref:d,className:n,wrapperProps:y})}var TN=lN,unr=Bz.memo(TN);function SN(w){let H=Qb.useRef();return Qb.useEffect(()=>{H.current=w},[w]),H.current}var xN=SN,Xb=new Map;function mN({defaultValue:w,defaultLanguage:H,defaultPath:A,value:q,language:W,path:G,theme:R="light",line:X,loading:z="Loading...",options:U={},overrideServices:$={},saveViewState:J=!0,keepCurrentModel:L=!1,width:C="100%",height:n="100%",className:y,wrapperProps:a={},beforeMount:_=JH,onMount:Wg=JH,onChange:Og,onValidate:c=JH}){let[s,Ag]=Dr.useState(!1),[vg,d]=Dr.useState(!0),wg=Dr.useRef(null),D=Dr.useRef(null),Fg=Dr.useRef(null),Jg=Dr.useRef(Wg),Kg=Dr.useRef(_),Vg=Dr.useRef(),V=Dr.useRef(q),p=xN(G),rg=Dr.useRef(!1),i=Dr.useRef(!1);lz(()=>{let t=L4.init();return t.then((Rg)=>(wg.current=Rg)&&d(!1)).catch((Rg)=>Rg?.type!=="cancelation"&&console.error("Monaco initialization: error:",Rg)),()=>D.current?T():t.cancel()}),Rv(()=>{let t=kh(wg.current,w||q||"",H||W||"",G||A||"");t!==D.current?.getModel()&&(J&&Xb.set(p,D.current?.saveViewState()),D.current?.setModel(t),J&&D.current?.restoreViewState(Xb.get(G)))},[G],s),Rv(()=>{D.current?.updateOptions(U)},[U],s),Rv(()=>{!D.current||q===void 0||(D.current.getOption(wg.current.editor.EditorOption.readOnly)?D.current.setValue(q):q!==D.current.getValue()&&(i.current=!0,D.current.executeEdits("",[{range:D.current.getModel().getFullModelRange(),text:q,forceMoveMarkers:!0}]),D.current.pushUndoStop(),i.current=!1))},[q],s),Rv(()=>{let t=D.current?.getModel();t&&W&&wg.current?.editor.setModelLanguage(t,W)},[W],s),Rv(()=>{X!==void 0&&D.current?.revealLine(X)},[X],s),Rv(()=>{wg.current?.editor.setTheme(R)},[R],s);let Pg=Dr.useCallback(()=>{if(!(!Fg.current||!wg.current)&&!rg.current){Kg.current(wg.current);let t=G||A,Rg=kh(wg.current,q||w||"",H||W||"",t||"");D.current=wg.current?.editor.create(Fg.current,{model:Rg,automaticLayout:!0,...U},$),J&&D.current.restoreViewState(Xb.get(t)),wg.current.editor.setTheme(R),X!==void 0&&D.current.revealLine(X),Ag(!0),rg.current=!0}},[w,H,A,q,W,G,U,$,J,R,X]);Dr.useEffect(()=>{s&&Jg.current(D.current,wg.current)},[s]),Dr.useEffect(()=>{!vg&&!s&&Pg()},[vg,s,Pg]),V.current=q,Dr.useEffect(()=>{s&&Og&&(Vg.current?.dispose(),Vg.current=D.current?.onDidChangeModelContent((t)=>{i.current||Og(D.current.getValue(),t)}))},[s,Og]),Dr.useEffect(()=>{if(s){let t=wg.current.editor.onDidChangeMarkers((Rg)=>{let Qg=D.current.getModel()?.uri;if(Qg&&Rg.find((Lg)=>Lg.path===Qg.path)){let Lg=wg.current.editor.getModelMarkers({resource:Qg});c?.(Lg)}});return()=>{t?.dispose()}}return()=>{}},[s,c]);function T(){Vg.current?.dispose(),L?J&&Xb.set(G,D.current.saveViewState()):D.current.getModel()?.dispose(),D.current.dispose()}return Dr.default.createElement(Nz,{width:C,height:n,isEditorReady:s,loading:z,_ref:Fg,className:y,wrapperProps:a})}var DN=mN,kN=Cz.memo(DN),Sz=kN;var Vh=Mg(Hr(),1);var q0=Mg(sg(),1),VN={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},xz=({entries:w,isRunning:H,onClear:A})=>{let[q,W]=Vh.useState(!1),G=Vh.useRef(null);Vh.useEffect(()=>{if(!q&&G.current)G.current.scrollTop=G.current.scrollHeight},[w,q]);let R=()=>{let X=w.filter((z)=>z.type!=="separator").map((z)=>`[${z.timestamp}] ${z.type.toUpperCase()}: ${z.message}`).join(`
`);navigator.clipboard.writeText(X).catch(()=>{})};return q0.jsxDEV("div",{className:`ls-console${q?" ls-collapsed":""}`,children:[q0.jsxDEV("div",{className:"ls-console-header",onClick:()=>W((X)=>!X),children:[q0.jsxDEV(N1,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-console-title",children:["Console",H?" — running…":w.length>0?` (${w.length})`:""]},void 0,!0,void 0,this),q0.jsxDEV("button",{className:"ls-icon-btn",onClick:(X)=>{X.stopPropagation(),R()},title:"Copy output",disabled:w.length===0,children:q0.jsxDEV(Aw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),q0.jsxDEV("button",{className:"ls-icon-btn",onClick:(X)=>{X.stopPropagation(),A()},title:"Clear console",disabled:w.length===0,children:q0.jsxDEV(n0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),q?q0.jsxDEV(S0,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):q0.jsxDEV(iv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!q&&q0.jsxDEV("div",{className:"ls-console-output",ref:G,children:w.length===0?q0.jsxDEV("div",{className:"ls-console-empty",children:H?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):w.map((X,z)=>X.type==="separator"?q0.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},z,!1,void 0,this):q0.jsxDEV("div",{className:`ls-entry ${VN[X.type]??"ls-log"}`,children:[q0.jsxDEV("span",{className:"ls-entry-time",children:X.timestamp},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-entry-type",children:X.type.toUpperCase()},void 0,!1,void 0,this),q0.jsxDEV("span",{className:"ls-entry-msg",children:X.message},void 0,!1,void 0,this)]},z,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var D0=Mg(sg(),1),mz=({bindings:w,activeContext:H,onAdd:A,onRemove:q})=>{let W=()=>{let{characterId:R,characterName:X}=H;if(!R)return;if(w.some((z)=>z.type==="character"&&z.characterId===R))return;A({type:"character",characterId:R,displayName:X??R})},G=()=>{let{chatId:R,characterName:X}=H;if(!R)return;if(w.some((U)=>U.type==="chat"&&U.chatId===R))return;let z=X?`${X} — ${R.slice(0,8)}`:R.slice(0,8);A({type:"chat",chatId:R,displayName:z})};return D0.jsxDEV("div",{className:"ls-bindings",children:D0.jsxDEV("div",{className:"ls-bindings-row",children:[D0.jsxDEV(S8,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),w.length===0?D0.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):w.map((R,X)=>D0.jsxDEV("span",{className:"ls-binding-chip",children:[R.type==="character"?D0.jsxDEV(Ch,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):D0.jsxDEV(lh,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),D0.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:R.displayName},void 0,!1,void 0,this),D0.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>q(X),title:"Remove binding",children:D0.jsxDEV(nv,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},X,!0,void 0,this)),D0.jsxDEV("button",{className:"ls-bindings-add",onClick:W,disabled:!H.characterId,title:H.characterId?"Bind to current character":"Open a chat first",children:[D0.jsxDEV(Ch,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),D0.jsxDEV("button",{className:"ls-bindings-add",onClick:G,disabled:!H.chatId,title:H.chatId?"Bind to current chat":"Open a chat first",children:[D0.jsxDEV(lh,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var Dz=Mg(Hr(),1);var f0=Mg(sg(),1),kz=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],xnr=kz.flatMap((w)=>w.events.map((H)=>H.name)),Vz=({scriptId:w,triggers:H,sendToBackend:A})=>{let[q,W]=Dz.useState(!0),G=new Set(H),R=(X)=>{let z=G.has(X)?H.filter((U)=>U!==X):[...H,X];A({type:"update_script",id:w,patch:{triggers:z}})};return f0.jsxDEV("div",{className:`ls-triggers${q?" ls-triggers-collapsed":""}`,children:[f0.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>W((X)=>!X),children:[f0.jsxDEV(qw,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),f0.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),G.size>0&&f0.jsxDEV("span",{className:"ls-triggers-count",children:G.size},void 0,!1,void 0,this),f0.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:q?f0.jsxDEV(S0,{size:12},void 0,!1,void 0,this):f0.jsxDEV(iv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!q&&f0.jsxDEV("div",{className:"ls-triggers-body",children:kz.map((X)=>f0.jsxDEV("div",{className:"ls-trigger-group",children:[f0.jsxDEV("span",{className:"ls-trigger-group-label",children:X.label},void 0,!1,void 0,this),f0.jsxDEV("div",{className:"ls-trigger-chips",children:X.events.map((z)=>f0.jsxDEV("button",{className:`ls-trigger-chip${G.has(z.name)?" ls-trigger-chip-active":""}`,onClick:()=>R(z.name),title:z.description,children:z.name},z.name,!1,void 0,this))},void 0,!1,void 0,this)]},X.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ez=`
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
`;var iz=Mg(Hr(),1);function _z(w){return w.split("`").map((A,q)=>{if(q%2===1)return A;return A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function EN(w){return w.split("`").map((q,W)=>{if(W%2===1)return q;return q.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Q5(w,H){let A=`| ${w.join(" | ")} |`,q=`| ${w.map(()=>"---").join(" | ")} |`,W=H.map((G)=>`| ${G.map(EN).join(" | ")} |`);return[A,q,...W].join(`
`)}function _N(w){return w.optional&&!w.field.endsWith("?")?`${w.field}?`:w.field}function yN(w){if(w==="silent")return"*silent*";if(w==="boolean")return'`"true" / "false"`';return"`string`"}function jN(w){return w.aliases==="—"?"—":`\`${w.aliases}\``}function iN(w){let H=w.perms.length===0&&!w.note?"*none*":w.perms.map((A)=>`\`${A}\``).join(", ");return w.note?`${H}${w.perms.length?" ":""}${w.note}`:H}function eN(){return`## Lumiverse Events

${Q5(["Event","Group","Payload shape"],aW.map((H)=>[`\`${H.name}\``,H.group,`\`${H.payload}\``]))}`}function nN(){return`## Permission Matrix

${sW.map((H)=>{let A=Q5(["Method","Required permissions"],H.rows.map((q)=>[`\`${q.method}\``,iN(q)]));return`### ${H.group}

${A}`}).join(`

`)}`}function fN(){let w=Q5(["Event","Payload fields","Emitted by"],gM.map((A)=>[`\`${A.name}\``,`\`${A.payload}\``,A.emittedBy])),H="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${w}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function cN(){let w=rM.map((A)=>{let q=Q5(["Macro","Aliases","Returns","Description"],A.rows.map((G)=>[`\`${G.macro}\``,jN(G),yN(G.returns),G.desc])),W=[`### ${A.label}`];if(A.description)W.push(`*${A.description}*`);return W.push(q),W.join(`

`)}),H='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${w.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function tN(){return`## Key Types

${vM.map((w)=>yz(w)).join(`

`)}`}function yz(w,H="###"){let A=_z(w.name),q=w.note?`*${_z(w.note)}*

`:"",W=Q5(["Field","Type","Description"],w.fields.map((G)=>[`\`${_N(G)}\``,`\`${G.type}\``,G.desc]));return`${H} ${A}

${q}${W}`}function pN(){return`## API Functions

${wM.map((H)=>{let A=Q5(["Method","Arguments","Description"],H.rows.map((q)=>[`\`${q.name}\``,q.args,q.desc]));return`### ${H.group}

${A}`}).join(`

`)}`}function dN(){let H=Q5(["Method","Arguments","Description"],hM.map((W)=>[`\`${W.name}\``,W.args,W.desc])),A=Q5(["Method","Arguments","Description"],HM.map((W)=>[`\`${W.name}\``,W.args,W.desc])),q=OM.map((W)=>yz(W,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",H,"","### ls:council-prompt","",A,"","### Built-in types","",q].join(`
`)}function aN(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function sN(){let H=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,A=[eN(),nN(),fN(),cN(),tN(),pN(),dN(),aN()];return`${H}

---

${A.join(`

---

`)}
`}function jz(){let w=sN(),A=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,q=new Blob([w],{type:"text/markdown;charset=utf-8"}),W=URL.createObjectURL(q),G=document.createElement("a");G.href=W,G.download=A,G.click(),URL.revokeObjectURL(W)}var o=Mg(sg(),1),K5=({icon:w,title:H,defaultOpen:A=!1,children:q})=>{let[W,G]=iz.useState(A);return o.jsxDEV("div",{className:"ls-ref-section",children:[o.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>G((R)=>!R),children:[o.jsxDEV("span",{className:"ls-ref-section-title",children:[w,H]},void 0,!0,void 0,this),W?o.jsxDEV(S0,{size:12},void 0,!1,void 0,this):o.jsxDEV(bw,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),W&&o.jsxDEV("div",{className:"ls-ref-section-body",children:q},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Wr=({children:w})=>o.jsxDEV("code",{className:"ls-ref-code",children:w},void 0,!1,void 0,this),gZ=({children:w})=>o.jsxDEV("span",{className:"ls-ref-perm",children:w},void 0,!1,void 0,this),rZ=()=>o.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),vZ=()=>o.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),Eh=({label:w,cols:H})=>o.jsxDEV("tr",{children:o.jsxDEV("td",{colSpan:H,className:"ls-ref-group-header",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),aW=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],wZ=()=>{let w="";return o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:aW.map((H)=>{let A=H.group!==w?H.group:"";return w=H.group,o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:A},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},sW=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.*",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],hZ=()=>o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:sW.map((w)=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV(Eh,{label:w.group,cols:2},`hdr-${w.group}`,!1,void 0,this),w.rows.map((H)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:[H.perms.length===0&&!H.note?o.jsxDEV(rZ,{},void 0,!1,void 0,this):null,H.perms.map((A)=>o.jsxDEV(gZ,{children:A},A,!1,void 0,this)),H.note?o.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:H.perms.length?4:0},children:H.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},H.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),gM=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],HZ=()=>o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:gM.map((w)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),rM=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],OZ=({type:w})=>{if(w==="silent")return o.jsxDEV(vZ,{},void 0,!1,void 0,this);if(w==="boolean")return o.jsxDEV(Wr,{children:'"true" / "false"'},void 0,!1,void 0,this);return o.jsxDEV(Wr,{children:"string"},void 0,!1,void 0,this)},bZ=()=>o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:rM.map((w)=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV(Eh,{label:w.description?o.jsxDEV(o.Fragment,{children:[w.label," — ",o.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:w.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):w.label,cols:4},`hdr-${w.label}`,!1,void 0,this),w.rows.map((H)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:H.aliases==="—"?o.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):o.jsxDEV(Wr,{children:H.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:o.jsxDEV(OZ,{type:H.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},H.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vM=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:"Passed to api.chat.sendMessage(content, options?).",fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],AZ=()=>o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:vM.map((w)=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV("tr",{children:o.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&o.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((H)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.optional&&!H.field.endsWith("?")?`${H.field}?`:H.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${H.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),wM=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],qZ=()=>o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:wM.map((w)=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV(Eh,{label:w.group,cols:3},`hdr-${w.group}`,!1,void 0,this),w.rows.map((H)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.group}-${H.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),hM=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],HM=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],PZ=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],OM=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],WZ=()=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",o.jsxDEV(Wr,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",o.jsxDEV(Wr,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",o.jsxDEV(Wr,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",o.jsxDEV(Wr,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",o.jsxDEV(Wr,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",o.jsxDEV(Wr,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),o.jsxDEV("table",{className:"ls-ref-table",children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:[o.jsxDEV(Eh,{label:"ls:components",cols:3},void 0,!1,void 0,this),hM.map((w)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this)),o.jsxDEV(Eh,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),HM.map((w)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this)),o.jsxDEV(Eh,{label:"ls:icons",cols:3},void 0,!1,void 0,this),PZ.map((w)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),o.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[o.jsxDEV("thead",{children:o.jsxDEV("tr",{children:[o.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),o.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("tbody",{children:OM.map((w)=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV("tr",{children:o.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&o.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((H)=>o.jsxDEV("tr",{children:[o.jsxDEV("td",{children:o.jsxDEV(Wr,{children:H.optional&&!H.field.endsWith("?")?`${H.field}?`:H.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV("td",{children:o.jsxDEV("span",{className:"ls-ref-muted",children:H.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${H.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),ez=()=>o.jsxDEV("div",{className:"ls-ref",children:[o.jsxDEV("div",{className:"ls-ref-toolbar",children:o.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>jz(),title:"Download the current reference as a Markdown file",children:[o.jsxDEV(R4,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(qw,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:o.jsxDEV(wZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(m8,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:o.jsxDEV(hZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(_8,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[o.jsxDEV(HZ,{},void 0,!1,void 0,this),o.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",o.jsxDEV(Wr,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(C8,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[o.jsxDEV(bZ,{},void 0,!1,void 0,this),o.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",o.jsxDEV(Wr,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",o.jsxDEV(Wr,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(q5,{size:11},void 0,!1,void 0,this),title:"Key Types",children:o.jsxDEV(AZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(x8,{size:11},void 0,!1,void 0,this),title:"API Functions",children:o.jsxDEV(qZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(B8,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:o.jsxDEV(WZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),o.jsxDEV(K5,{icon:o.jsxDEV(k8,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[o.jsxDEV("p",{className:"ls-ref-muted",children:[o.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",o.jsxDEV(Wr,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",o.jsxDEV(Wr,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",o.jsxDEV(Wr,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",o.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),o.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[o.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",o.jsxDEV(Wr,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",o.jsxDEV(Wr,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",o.jsxDEV(Wr,{children:"enabled: false"},void 0,!1,void 0,this)," and ",o.jsxDEV(Wr,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Ng=Mg(sg(),1),nz=!1,fz=({script:w,allScripts:H,activeContext:A,isRunning:q,consoleEntries:W,editorFontSize:G,autosaveDebounceMs:R,onClearConsole:X,sendToBackend:z})=>{let[U,$]=Y0.useState(w.code),[J,L]=Y0.useState(!1),[C,n]=Y0.useState(!1),[y,a]=Y0.useState(w.name),[_,Wg]=Y0.useState("code"),[Og,c]=Y0.useState(!1),[s,Ag]=Y0.useState(!1),vg=Y0.useRef(null),d=Y0.useRef(null);Y0.useEffect(()=>{$(w.code),L(!1),a(w.name),Ag(!1)},[w.id,w.code,w.name]),Y0.useEffect(()=>{z({type:"get_active_context"})},[w.id,z]),Y0.useEffect(()=>{let i=setInterval(()=>{z({type:"get_active_context"})},2000);return()=>clearInterval(i)},[z]);let wg=Y0.useCallback((i)=>{z({type:"update_script",id:w.id,patch:{code:i}}),L(!1)},[w.id,z]),D=(i)=>{if(i===void 0)return;if($(i),L(i!==w.code),vg.current)clearTimeout(vg.current);vg.current=setTimeout(()=>wg(i),R)},Fg=(i,Pg)=>{if(d.current=i,!nz){nz=!0;let T=Pg.languages.typescript.javascriptDefaults;T.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),T.setCompilerOptions({target:Pg.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),T.addExtraLib(Ez,"ts:lumiverse/lumiscript-api.d.ts")}i.addCommand(Pg.KeyMod.CtrlCmd|Pg.KeyCode.KeyS,()=>{if(vg.current)clearTimeout(vg.current);wg(i.getValue())}),i.getModel()?.setEOL(Pg.editor.EndOfLineSequence.LF)},Jg=()=>{if(q)return;if(vg.current)clearTimeout(vg.current),vg.current=null;if(J)wg(d.current?.getValue()??U);z({type:"run_script",id:w.id})},Kg=()=>{let i=y.trim();if(i&&i!==w.name)z({type:"update_script",id:w.id,patch:{name:i}});n(!1)},Vg=(i)=>{let Pg=w.bindings??[];z({type:"update_script",id:w.id,patch:{bindings:[...Pg,i]}})},V=(i)=>{z({type:"update_script",id:w.id,patch:{bindings:(w.bindings??[]).filter((Pg,T)=>T!==i)}})},p=()=>{if(w.allowDangerous)z({type:"update_script",id:w.id,patch:{allowDangerous:!1}});else if(s)Ag(!1),z({type:"update_script",id:w.id,patch:{allowDangerous:!0}});else Ag(!0)},rg=(i)=>new Date(i).toLocaleString();return Ng.jsxDEV("div",{className:"ls-editor-root",children:[Ng.jsxDEV("div",{className:"ls-editor-topbar",children:[C?Ng.jsxDEV("input",{className:"ls-editor-name-input",value:y,autoFocus:!0,onChange:(i)=>a(i.target.value),onBlur:Kg,onKeyDown:(i)=>{if(i.key==="Enter")Kg();if(i.key==="Escape")a(w.name),n(!1)}},void 0,!1,void 0,this):Ng.jsxDEV("span",{className:"ls-editor-name",onClick:()=>n(!0),title:"Click to rename",style:{cursor:"text"},children:w.name},void 0,!1,void 0,this),J&&Ng.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Ng.jsxDEV("button",{className:`ls-tab-pill${_==="code"?" ls-active":""}`,onClick:()=>Wg("code"),title:"Code editor",children:[Ng.jsxDEV(C0,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Ng.jsxDEV("button",{className:`ls-tab-pill${_==="docs"?" ls-active":""}`,onClick:()=>Wg("docs"),title:"API reference",children:[Ng.jsxDEV(o8,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),w.type!=="library"&&Ng.jsxDEV("button",{className:`ls-btn${q?"":" ls-accent"}`,onClick:Jg,disabled:q,children:[q?Ng.jsxDEV(P5,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Ng.jsxDEV(V8,{size:15},void 0,!1,void 0,this),q?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),_==="code"&&Ng.jsxDEV("div",{className:"ls-editor-monaco",children:Ng.jsxDEV(Sz,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:U,onChange:D,onMount:Fg,options:{minimap:{enabled:!1},fontSize:G,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},w.id,!1,void 0,this)},void 0,!1,void 0,this),_==="docs"&&Ng.jsxDEV("div",{className:"ls-editor-docs",children:Ng.jsxDEV(ez,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),_==="code"&&Ng.jsxDEV(xz,{entries:W,isRunning:q,onClear:X},void 0,!1,void 0,this),w.type==="trigger"&&Ng.jsxDEV(Vz,{scriptId:w.id,triggers:w.triggers??[],sendToBackend:z},void 0,!1,void 0,this),w.type==="trigger"&&Ng.jsxDEV(mz,{bindings:w.bindings??[],activeContext:A,onAdd:Vg,onRemove:V},void 0,!1,void 0,this),s&&Ng.jsxDEV("div",{className:"ls-danger-confirm",children:[Ng.jsxDEV(Th,{size:10},void 0,!1,void 0,this),Ng.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Ng.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:p,children:"Enable"},void 0,!1,void 0,this),Ng.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>Ag(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ng.jsxDEV("div",{className:"ls-meta-footer",children:[Ng.jsxDEV("span",{className:"ls-meta-item",children:Ng.jsxDEV("button",{className:"ls-danger-btn",onClick:p,title:"Toggle dangerous mode",children:[w.allowDangerous?Ng.jsxDEV(Th,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Ng.jsxDEV(j8,{size:11},void 0,!1,void 0,this),Ng.jsxDEV("span",{className:w.allowDangerous?"ls-dangerous":"",children:w.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Ng.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Ng.jsxDEV(X4,{size:10},void 0,!1,void 0,this),Ng.jsxDEV("select",{className:"ls-folder-select",value:w.folder??"",onChange:(i)=>{let Pg=i.target.value;if(Pg==="__new__"){let T=window.prompt("New folder name:");if(T?.trim())z({type:"update_script",id:w.id,patch:{folder:T.trim()}})}else z({type:"update_script",id:w.id,patch:{folder:Pg}})},children:[Ng.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(H.map((i)=>i.folder).filter((i)=>!!i))].sort().map((i)=>Ng.jsxDEV("option",{value:i,children:i},i,!1,void 0,this)),Ng.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ng.jsxDEV("span",{className:"ls-meta-item",children:[Ng.jsxDEV(l8,{size:10},void 0,!1,void 0,this),Ng.jsxDEV("span",{children:["Updated ",rg(w.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ng.jsxDEV("span",{className:"ls-meta-item",children:[Ng.jsxDEV(I8,{size:10},void 0,!1,void 0,this),Ng.jsxDEV("span",{children:["Created ",rg(w.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ng.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:w.id,onClick:()=>{navigator.clipboard.writeText(w.id).catch(()=>{}),c(!0),setTimeout(()=>c(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[Og?Ng.jsxDEV(N8,{size:10},void 0,!1,void 0,this):Ng.jsxDEV(Aw,{size:10},void 0,!1,void 0,this),Ng.jsxDEV("span",{children:["ID ",w.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var L0=Mg(sg(),1),tz=({scripts:w,initialScriptId:H,activeContext:A,execInfo:q,activeRunScriptId:W,isRunning:G,consoleHistory:R,editorFontSize:X,autosaveDebounceMs:z,onClearConsole:U,onClose:$,sendToBackend:J})=>{let[L,C]=QH.useState(H),n=w.find((Og)=>Og.id===L)??null;QH.useEffect(()=>{C(H)},[H]),QH.useEffect(()=>{let Og=(c)=>{if(c.key==="Escape")$()};return document.addEventListener("keydown",Og),()=>document.removeEventListener("keydown",Og)},[$]);let y=n?R[n.id]??[]:[],a=G&&n?.id===W;return cz.createPortal(L0.jsxDEV("div",{className:"ls-modal-overlay",onClick:(Og)=>{if(Og.target===Og.currentTarget)$()},children:L0.jsxDEV("div",{className:"ls-modal-card",onClick:(Og)=>Og.stopPropagation(),children:[L0.jsxDEV("div",{className:"ls-modal-header",children:[L0.jsxDEV("span",{className:"ls-modal-title",children:[L0.jsxDEV(N1,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),L0.jsxDEV("button",{className:"ls-modal-close",onClick:$,title:"Close (Esc)",children:L0.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),L0.jsxDEV("div",{className:"ls-modal-body",children:[L0.jsxDEV("div",{className:"ls-modal-sidebar",children:L0.jsxDEV(Pb,{scripts:w,selectedId:L,execInfo:q,onSelect:C,onEdit:C,sendToBackend:J},void 0,!1,void 0,this)},void 0,!1,void 0,this),L0.jsxDEV("div",{className:"ls-modal-main",children:n?L0.jsxDEV(fz,{script:n,allScripts:w,activeContext:A,isRunning:a,consoleEntries:y,editorFontSize:X,autosaveDebounceMs:z,onClearConsole:()=>{if(n)U(n.id)},sendToBackend:J},void 0,!1,void 0,this):L0.jsxDEV("div",{className:"ls-placeholder",children:[L0.jsxDEV(N1,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),L0.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var Kb=Mg(sg(),1),pz=({scripts:w,activeContext:H,execInfo:A,activeRunScriptId:q,isRunning:W,consoleHistory:G,editorFontSize:R,autosaveDebounceMs:X,onClearConsole:z,onScriptOpened:U,sendToBackend:$})=>{let[J,L]=zb.useState(null);return zb.useEffect(()=>{if(J&&U)U(J)},[J,U]),Kb.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[Kb.jsxDEV(Pb,{scripts:w,selectedId:J,execInfo:A,onSelect:()=>{},onEdit:L,sendToBackend:$},void 0,!1,void 0,this),J!==null&&Kb.jsxDEV(tz,{scripts:w,initialScriptId:J,activeContext:H,execInfo:A,activeRunScriptId:q,isRunning:W,consoleHistory:G,editorFontSize:R,autosaveDebounceMs:X,onClearConsole:z,onClose:()=>L(null),sendToBackend:$},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var dz=Mg(Hr(),1);var yr=Mg(sg(),1),MZ=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function GZ(w){if(w===void 0)return"undefined";if(w===null)return"null";if(typeof w==="string")return w.length>80?w.slice(0,77)+"…":w;try{let H=JSON.stringify(w);return H.length>80?H.slice(0,77)+"…":H}catch{return String(w)}}var az=({variables:w,sendToBackend:H})=>{let[A,q]=dz.useState(new Set(["local","global","chat","character"])),W=(R)=>{q((X)=>{let z=new Set(X);if(z.has(R))z.delete(R);else z.add(R);return z})},G=w?Object.values(w).reduce((R,X)=>R+Object.keys(X).length,0):0;return yr.jsxDEV("div",{className:"ls-status-section",children:[yr.jsxDEV("div",{className:"ls-inject-header",children:[yr.jsxDEV(ev,{size:10},void 0,!1,void 0,this),"Variables",G>0&&yr.jsxDEV("span",{className:"ls-inject-count",children:G},void 0,!1,void 0,this),yr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>H({type:"get_variables"}),children:yr.jsxDEV(J4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yr.jsxDEV("div",{className:"ls-status-section-body",children:!w?yr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):G===0?yr.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):MZ.map(({key:R,label:X,hint:z})=>{let U=w[R],$=Object.keys(U),J=A.has(R);if($.length===0)return null;return yr.jsxDEV("div",{className:"ls-vars-scope",children:[yr.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>W(R),children:[J?yr.jsxDEV(S0,{size:10},void 0,!1,void 0,this):yr.jsxDEV(iv,{size:10},void 0,!1,void 0,this),yr.jsxDEV("span",{className:"ls-vars-scope-name",children:X},void 0,!1,void 0,this),z&&yr.jsxDEV("span",{className:"ls-vars-scope-hint",children:z},void 0,!1,void 0,this),yr.jsxDEV("span",{className:"ls-vars-scope-count",children:$.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),J&&yr.jsxDEV("div",{className:"ls-vars-scope-body",children:$.sort().map((L)=>yr.jsxDEV("div",{className:"ls-vars-entry",children:[yr.jsxDEV("span",{className:"ls-vars-key",children:L},void 0,!1,void 0,this),yr.jsxDEV("span",{className:"ls-vars-value",title:String(U[L]),children:GZ(U[L])},void 0,!1,void 0,this)]},L,!0,void 0,this))},void 0,!1,void 0,this)]},R,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Mr=Mg(sg(),1);function RZ(w){if(!Number.isFinite(w)||w<=0)return"0 B";let H=["B","KB","MB","GB"],A=Math.min(H.length-1,Math.floor(Math.log(w)/Math.log(1024))),q=w/Math.pow(1024,A);return`${A===0?q.toFixed(0):q.toFixed(1)} ${H[A]}`}function XZ(w){if(!w)return"—";let H=new Date(w).getTime();if(!Number.isFinite(H)||H<=0)return"—";let A=Date.now()-H;if(A<0)return"just now";if(A<60000)return"just now";if(A<3600000)return`${Math.floor(A/60000)}m ago`;if(A<86400000)return`${Math.floor(A/3600000)}h ago`;if(A<2592000000)return`${Math.floor(A/86400000)}d ago`;return new Date(H).toISOString().slice(0,10)}var YZ={script:"script",character:"char",chat:"chat"},sz=({collections:w,scripts:H,sendToBackend:A,onInspect:q,onDrop:W})=>{let G=new Map;for(let z of H)G.set(z.id,z.name);let R=()=>A({type:"list_collections"}),X=w?.length??0;return Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(ev,{size:10},void 0,!1,void 0,this),"Collections",X>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:X},void 0,!1,void 0,this),Mr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:R,children:Mr.jsxDEV(J4,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:w===null?Mr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):w.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Mr.jsxDEV("div",{className:"ls-collections-list",children:[Mr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Mr.jsxDEV("span",{children:"Name"},void 0,!1,void 0,this),Mr.jsxDEV("span",{children:"Scope"},void 0,!1,void 0,this),Mr.jsxDEV("span",{children:"Owner"},void 0,!1,void 0,this),Mr.jsxDEV("span",{children:"Size"},void 0,!1,void 0,this),Mr.jsxDEV("span",{children:"Updated"},void 0,!1,void 0,this),Mr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),w.map((z)=>{let U=G.get(z.scriptId)??`(${z.scriptId.slice(0,8)}…)`,$=!G.has(z.scriptId),J=$?`scriptId: ${z.scriptId} (not currently loaded)`:`${U} (${z.scriptId})`;return Mr.jsxDEV("div",{className:"ls-collections-row",children:[Mr.jsxDEV("span",{className:"ls-collections-name",title:z.name,children:z.name},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-collections-scope","data-scope":z.scope,title:z.path,children:YZ[z.scope]},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:`ls-collections-owner${$?" ls-collections-owner-unknown":""}`,title:J,children:U},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-collections-size",title:`${z.sizeBytes.toLocaleString()} bytes`,children:RZ(z.sizeBytes)},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-collections-updated",title:z.modifiedAt,children:XZ(z.modifiedAt)},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-collections-actions",children:[Mr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>q(z.path),children:Mr.jsxDEV(T8,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Mr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>W(z),children:Mr.jsxDEV(n0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},z.path,!0,void 0,this)})]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var pv=Mg(Hr(),1),r$=Mg($8(),1);var eg=Mg(sg(),1),KH=50,JZ=150,v$=({path:w,records:H,total:A,refreshToken:q,onClose:W,sendToBackend:G})=>{let[R,X]=pv.useState(""),[z,U]=pv.useState(""),[$,J]=pv.useState(0);pv.useEffect(()=>{let _=setTimeout(()=>U(R),JZ);return()=>clearTimeout(_)},[R]),pv.useEffect(()=>{J(0)},[z]),pv.useEffect(()=>{G({type:"inspect_collection",path:w,textFilter:z||void 0,limit:KH,offset:$*KH})},[w,z,$,q,G]),pv.useEffect(()=>{let _=(Wg)=>{if(Wg.key==="Escape")W()};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[W]);let L=Math.max(1,Math.ceil(A/KH)),C=A===0?0:$*KH+1,n=Math.min(A,($+1)*KH),y=pv.useMemo(()=>{let _=w.match(/\/([^/]+)\.json$/);return _?_[1]:w},[w]),a=eg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(_)=>{if(_.target===_.currentTarget)W()},children:eg.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(_)=>_.stopPropagation(),children:[eg.jsxDEV("div",{className:"ls-modal-header",children:[eg.jsxDEV("span",{className:"ls-modal-title",children:[eg.jsxDEV(ev,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),eg.jsxDEV("span",{className:"ls-inspect-title-name",children:y},void 0,!1,void 0,this),eg.jsxDEV("span",{className:"ls-inspect-title-path",title:w,children:w},void 0,!1,void 0,this)]},void 0,!0,void 0,this),eg.jsxDEV("button",{className:"ls-modal-close",onClick:W,title:"Close (Esc)",children:eg.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),eg.jsxDEV("div",{className:"ls-inspect-toolbar",children:[eg.jsxDEV("div",{className:"ls-inspect-search",children:[eg.jsxDEV(y8,{size:12},void 0,!1,void 0,this),eg.jsxDEV("input",{type:"text",className:"ls-inspect-search-input",placeholder:"Filter records (shallow string match)…",value:R,onChange:(_)=>X(_.target.value),autoFocus:!0},void 0,!1,void 0,this)]},void 0,!0,void 0,this),eg.jsxDEV("div",{className:"ls-inspect-pager",children:[eg.jsxDEV("span",{className:"ls-inspect-pager-status",children:A===0?"No matching records":eg.jsxDEV(eg.Fragment,{children:["Showing ",eg.jsxDEV("strong",{children:C},void 0,!1,void 0,this),"–",eg.jsxDEV("strong",{children:n},void 0,!1,void 0,this)," of ",eg.jsxDEV("strong",{children:A},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),eg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>J((_)=>Math.max(0,_-1)),disabled:$===0,title:"Previous page",children:eg.jsxDEV(Z8,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),eg.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>J((_)=>Math.min(L-1,_+1)),disabled:$>=L-1,title:"Next page",children:eg.jsxDEV(bw,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),eg.jsxDEV("div",{className:"ls-inspect-body",children:H===null?eg.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):H.length===0?eg.jsxDEV("div",{className:"ls-inspect-empty",children:A===0&&z?`No records match “${z}”`:A===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):eg.jsxDEV("div",{className:"ls-inspect-records",children:H.map((_)=>eg.jsxDEV("div",{className:"ls-inspect-record",children:[eg.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${_.id}`,children:[eg.jsxDEV("code",{children:[String(_.id).slice(0,12),"…"]},void 0,!0,void 0,this),eg.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",eg.jsxDEV("time",{title:new Date(_.createdAt).toISOString(),children:g$(_.createdAt)},void 0,!1,void 0,this),_.updatedAt!==_.createdAt&&eg.jsxDEV(eg.Fragment,{children:[" · ","updated ",eg.jsxDEV("time",{title:new Date(_.updatedAt).toISOString(),children:g$(_.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),eg.jsxDEV("pre",{className:"ls-inspect-record-json",children:QZ(_)},void 0,!1,void 0,this)]},_.id,!0,void 0,this))},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return r$.createPortal(a,document.body)};function g$(w){if(!Number.isFinite(w)||w<=0)return"—";let H=Date.now()-w;if(H<60000)return"just now";if(H<3600000)return`${Math.floor(H/60000)}m ago`;if(H<86400000)return`${Math.floor(H/3600000)}h ago`;if(H<2592000000)return`${Math.floor(H/86400000)}d ago`;return new Date(w).toISOString().slice(0,10)}function QZ(w){let{id:H,createdAt:A,updatedAt:q,...W}=w;try{return JSON.stringify(W,null,2)}catch{return String(w)}}var zH=Mg(Hr(),1),w$=Mg($8(),1);var Tr=Mg(sg(),1);function KZ(w){if(!Number.isFinite(w)||w<=0)return"0 B";let H=["B","KB","MB","GB"],A=Math.min(H.length-1,Math.floor(Math.log(w)/Math.log(1024))),q=w/Math.pow(1024,A);return`${A===0?q.toFixed(0):q.toFixed(1)} ${H[A]}`}var zZ={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"},h$=({target:w,onConfirm:H,onCancel:A})=>{let q=zH.useRef(null);zH.useEffect(()=>{let G=(R)=>{if(R.key==="Escape")A()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[A]),zH.useEffect(()=>{let G=(R)=>{if(R.key!=="Tab")return;let X=q.current;if(!X)return;let z=Array.from(X.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(z.length===0)return;let U=z[0],$=z[z.length-1],J=document.activeElement,L=J!==null&&X.contains(J);if(R.shiftKey){if(!L||J===U)R.preventDefault(),$.focus()}else if(!L||J===$)R.preventDefault(),U.focus()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[]);let W=Tr.jsxDEV("div",{className:"ls-modal-overlay",onClick:(G)=>{if(G.target===G.currentTarget)A()},children:Tr.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:q,onClick:(G)=>G.stopPropagation(),children:[Tr.jsxDEV("div",{className:"ls-modal-header",children:[Tr.jsxDEV("span",{className:"ls-modal-title",children:[Tr.jsxDEV(n0,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),Tr.jsxDEV("button",{className:"ls-modal-close",onClick:A,title:"Cancel (Esc)",children:Tr.jsxDEV(nv,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-body",children:[Tr.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-target",children:[Tr.jsxDEV("div",{className:"ls-drop-target-name",children:w.name},void 0,!1,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-target-meta",children:[Tr.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":w.scope,children:zZ[w.scope]},void 0,!1,void 0,this),Tr.jsxDEV("span",{className:"ls-drop-target-size",children:KZ(w.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-target-path",title:w.path,children:w.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-warning",children:[Tr.jsxDEV(W5,{size:12},void 0,!1,void 0,this),Tr.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tr.jsxDEV("div",{className:"ls-drop-actions",children:[Tr.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:A,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),Tr.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:H,children:[Tr.jsxDEV(n0,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return w$.createPortal(W,document.body)};var Yw=Mg(sg(),1),H$=({variables:w,collections:H,scripts:A,sendToBackend:q,inspectPath:W,inspectRecords:G,inspectTotal:R,inspectRefreshToken:X,onInspect:z,dropTarget:U,onDrop:$,onDropConfirm:J})=>{return Yw.jsxDEV(Yw.Fragment,{children:[Yw.jsxDEV("div",{className:"ls-storage-list",children:[Yw.jsxDEV(az,{variables:w,sendToBackend:q},void 0,!1,void 0,this),Yw.jsxDEV(sz,{collections:H,scripts:A,sendToBackend:q,onInspect:z,onDrop:$},void 0,!1,void 0,this)]},void 0,!0,void 0,this),W!==null&&Yw.jsxDEV(v$,{path:W,records:G,total:R,refreshToken:X,onClose:()=>z(null),sendToBackend:q},void 0,!1,void 0,this),U!==null&&Yw.jsxDEV(h$,{target:U,onConfirm:J,onCancel:()=>$(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Gg=Mg(sg(),1),O$=({onBackendMessage:w,sendToBackend:H})=>{let[A,q]=Cr.useState("manage"),[W,G]=Cr.useState([]),[R,X]=Cr.useState(n2),[z,U]=Cr.useState({characterId:null,characterName:null,chatId:null}),[$,J]=Cr.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[L,C]=Cr.useState([]),[n,y]=Cr.useState([]),[a,_]=Cr.useState(null),[Wg,Og]=Cr.useState(null),[c,s]=Cr.useState(null),[Ag,vg]=Cr.useState(null),[d,wg]=Cr.useState(0),[D,Fg]=Cr.useState(0),[Jg,Kg]=Cr.useState(null),[Vg,V]=Cr.useState({});Cr.useEffect(()=>{let i=w((Pg)=>{let T=Pg;switch(T.type){case"scripts_updated":G(T.scripts);break;case"script_patched":G((t)=>t.map((Rg)=>Rg.id===T.script.id?T.script:Rg));break;case"settings_updated":X(T.settings);break;case"active_context":U({characterId:T.characterId,characterName:T.characterName,chatId:T.chatId}),H({type:"get_variables"});break;case"variables_updated":_(T.variables);break;case"collections_list":Og(T.collections);break;case"collection_records":vg((t)=>{return T.records}),wg(T.total);break;case"collections_updated":H({type:"list_collections"}),Fg((t)=>t+1);break;case"injections_updated":C(T.injections);break;case"tools_updated":y(T.tools);break;case"execution_started":{let t={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};J((Rg)=>{let Qg=Rg.consoleHistory[T.scriptId]??[],Lg=Qg.length>0?[...Qg,t]:Qg;return{...Rg,activeScriptId:T.scriptId,runId:T.runId,isRunning:!0,consoleHistory:{...Rg.consoleHistory,[T.scriptId]:Lg},scriptExecInfo:{...Rg.scriptExecInfo,[T.scriptId]:{...Rg.scriptExecInfo[T.scriptId],dot:"running"}}}}),V((Rg)=>({...Rg,[T.scriptId]:(Rg[T.scriptId]??0)+1}));break}case"console_entry":{let t=R.consoleHistoryLimit;J((Rg)=>{let Qg=Rg.consoleHistory[T.scriptId]??[];if(Qg.length>=t)return Rg;let ng=Qg.length===t-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${t} entries. Clear the console to resume capture.]`}:T.entry;return{...Rg,consoleHistory:{...Rg.consoleHistory,[T.scriptId]:[...Qg,ng]}}});break}case"execution_ended":J((t)=>{let Rg=t.consoleHistory[T.scriptId]??[],Qg=t.scriptExecInfo[T.scriptId],Lg=!T.success&&T.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:T.error}]:[],ng=!T.success?!0:Qg?.stickyError??!1,dg=!T.success||ng?"error":"success",Sr=T.duration??0,Q0=T.success&&Sr===0&&(Qg?.duration??0)>0?Qg.duration:T.duration;return{...t,isRunning:!1,consoleHistory:Lg.length?{...t.consoleHistory,[T.scriptId]:[...Rg,...Lg]}:t.consoleHistory,scriptExecInfo:{...t.scriptExecInfo,[T.scriptId]:{dot:dg,duration:Q0,error:T.error??Qg?.error,stickyError:ng}}}});break;case"error":console.warn("[LumiScript]",T.message);break}});return H({type:"get_scripts"}),H({type:"get_settings"}),H({type:"get_active_context"}),H({type:"get_injections"}),H({type:"get_tools"}),i},[w,H]),Cr.useEffect(()=>{if(A==="storage")H({type:"list_collections"})},[A,H]);let p=Cr.useCallback((i)=>{J((Pg)=>({...Pg,consoleHistory:{...Pg.consoleHistory,[i]:[]}}))},[]),rg=Cr.useCallback((i)=>{J((Pg)=>{let T=Pg.scriptExecInfo[i];if(!T?.stickyError)return Pg;return{...Pg,scriptExecInfo:{...Pg.scriptExecInfo,[i]:{...T,dot:"idle",stickyError:!1}}}})},[]);return Gg.jsxDEV("div",{className:"ls-panel",children:[Gg.jsxDEV("div",{className:"ls-tabs",children:[Gg.jsxDEV("button",{className:`ls-tab-pill${A==="manage"?" ls-active":""}`,onClick:()=>q("manage"),children:[Gg.jsxDEV(C0,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Gg.jsxDEV("button",{className:`ls-tab-pill${A==="status"?" ls-active":""}`,onClick:()=>q("status"),children:[Gg.jsxDEV(L8,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Gg.jsxDEV("button",{className:`ls-tab-pill${A==="storage"?" ls-active":""}`,onClick:()=>q("storage"),children:[Gg.jsxDEV(ev,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[A==="manage"&&Gg.jsxDEV(pz,{scripts:W,activeContext:z,execInfo:$.scriptExecInfo,activeRunScriptId:$.activeScriptId,isRunning:$.isRunning,consoleHistory:$.consoleHistory,editorFontSize:R.editorFontSize,autosaveDebounceMs:R.autosaveDebounceMs,onClearConsole:p,onScriptOpened:rg,sendToBackend:H},void 0,!1,void 0,this),A==="status"&&Gg.jsxDEV(UZ,{scripts:W,execInfo:$.scriptExecInfo,invocationCounts:Vg,injections:L,tools:n,sendToBackend:H},void 0,!1,void 0,this),A==="storage"&&Gg.jsxDEV(H$,{variables:a,collections:Wg,scripts:W,sendToBackend:H,inspectPath:c,inspectRecords:Ag,inspectTotal:d,inspectRefreshToken:D,onInspect:(i)=>{s(i),vg(null),wg(0)},dropTarget:Jg,onDrop:Kg,onDropConfirm:()=>{if(!Jg)return;let i=Jg.path;if(c===i)s(null),vg(null),wg(0);H({type:"drop_collection",path:i}),Kg(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},$Z={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},UZ=({scripts:w,execInfo:H,invocationCounts:A,injections:q,tools:W,sendToBackend:G})=>{let R=w.filter((J)=>J.type==="trigger"&&J.enabled),X=Object.fromEntries(w.map((J)=>[J.id,J.name])),[z,U]=Cr.useState(new Set),$=(J)=>{U((L)=>{let C=new Set(L);if(C.has(J))C.delete(J);else C.add(J);return C})};return Gg.jsxDEV("div",{className:"ls-status-list",children:[Gg.jsxDEV("div",{className:"ls-status-section",children:[Gg.jsxDEV("div",{className:"ls-inject-header",children:[Gg.jsxDEV(C0,{size:10},void 0,!1,void 0,this),"Scripts",R.length>0&&Gg.jsxDEV("span",{className:"ls-inject-count",children:R.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{className:"ls-status-section-body",children:R.length===0?Gg.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):R.map((J)=>{let L=H[J.id],C=L?.dot??"idle",n={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[C],y=J.triggers??[],a=A[J.id];return Gg.jsxDEV("div",{className:"ls-status-row",children:[Gg.jsxDEV("div",{className:"ls-status-row-main",children:[Gg.jsxDEV("span",{className:n,title:$Z[C]},void 0,!1,void 0,this),Gg.jsxDEV("span",{className:"ls-status-name",children:J.name},void 0,!1,void 0,this),Gg.jsxDEV("span",{className:"ls-status-right",children:[a!==void 0&&a>0&&Gg.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${a} time${a!==1?"s":""} this session`,children:["×",a]},void 0,!0,void 0,this),L?.duration!==void 0&&C!=="running"&&Gg.jsxDEV("span",{className:"ls-status-duration",style:{color:C==="error"?"#ef4444":void 0},children:[L.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),y.length>0?Gg.jsxDEV("div",{className:"ls-status-events",children:y.map((_)=>Gg.jsxDEV("span",{className:"ls-event-badge",children:[Gg.jsxDEV(qw,{size:9},void 0,!1,void 0,this),_]},_,!0,void 0,this))},void 0,!1,void 0,this):Gg.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),C==="error"&&L?.error&&Gg.jsxDEV("div",{className:"ls-status-error-row",children:Gg.jsxDEV("span",{className:"ls-status-error-text",children:L.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},J.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{className:"ls-status-section",children:[Gg.jsxDEV("div",{className:"ls-inject-header",children:[Gg.jsxDEV(t8,{size:10},void 0,!1,void 0,this),"Active Tools",W.length>0&&Gg.jsxDEV("span",{className:"ls-inject-count",children:W.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{className:"ls-status-section-body",children:W.length===0?Gg.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):W.map((J)=>Gg.jsxDEV("div",{className:"ls-tool-row",children:[Gg.jsxDEV("div",{className:"ls-tool-name",title:J.description,children:J.name},void 0,!1,void 0,this),Gg.jsxDEV("div",{className:"ls-tool-meta",children:[J.council_eligible&&Gg.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Gg.jsxDEV("span",{className:"ls-inject-script",title:J.scriptId,children:J.scriptName},void 0,!1,void 0,this),Gg.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${J.name}`,title:`Unregister "${J.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>G({type:"unregister_tool",name:J.name}),children:Gg.jsxDEV(n0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{className:"ls-status-section",children:[Gg.jsxDEV("div",{className:"ls-inject-header",children:[Gg.jsxDEV(i8,{size:10},void 0,!1,void 0,this),"Active Injections",q.length>0&&Gg.jsxDEV("span",{className:"ls-inject-count",children:q.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("div",{className:"ls-status-section-body",children:q.length===0?Gg.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):q.map((J)=>{let L=z.has(J.id);return Gg.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>$(J.id),children:[Gg.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${J.mode}`,title:J.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:J.mode==="intercept"?Gg.jsxDEV(u8,{size:11},void 0,!1,void 0,this):Gg.jsxDEV(F8,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Gg.jsxDEV("div",{className:"ls-inject-body",children:[Gg.jsxDEV("div",{className:"ls-inject-header-row",children:[Gg.jsxDEV("span",{className:"ls-inject-id",title:J.id,children:J.id},void 0,!1,void 0,this),Gg.jsxDEV("div",{className:"ls-inject-meta",children:[Gg.jsxDEV("span",{className:"ls-inject-role",children:J.role},void 0,!1,void 0,this),J.mode==="intercept"&&J.depth>0&&Gg.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${J.depth} message${J.depth!==1?"s":""}`,children:["d:",J.depth]},void 0,!0,void 0,this),J.ephemeral&&Gg.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Gg.jsxDEV(Q4,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Gg.jsxDEV("span",{className:"ls-inject-script",title:J.scriptId,children:X[J.scriptId]??J.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Gg.jsxDEV("span",{className:"ls-inject-chevron",children:L?Gg.jsxDEV(iv,{size:10},void 0,!1,void 0,this):Gg.jsxDEV(S0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),L&&Gg.jsxDEV("div",{className:"ls-inject-content",onClick:(C)=>C.stopPropagation(),children:J.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},J.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var $H=Mg(Hr(),1);var Tg=Mg(sg(),1),b$=({onBackendMessage:w,sendToBackend:H})=>{let[A,q]=$H.useState(n2),[W,G]=$H.useState([]);$H.useEffect(()=>{let U=w(($)=>{let J=$;if(J.type==="scripts_updated")G(J.scripts);if(J.type==="settings_updated")q(J.settings)});return H({type:"get_settings"}),H({type:"get_scripts"}),U},[w,H]);let R=W.filter((U)=>U.type==="trigger").length,X=W.filter((U)=>U.type==="library").length,z=(U)=>{H({type:"update_settings",patch:{enabled:U}})};return Tg.jsxDEV("div",{className:"ls-settings",children:[Tg.jsxDEV("div",{className:"ls-settings-header",children:Tg.jsxDEV("span",{className:"ls-settings-title",children:[Tg.jsxDEV(N1,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Tg.jsxDEV("div",{className:"ls-toggle-row",children:[Tg.jsxDEV("label",{className:"ls-toggle",children:[Tg.jsxDEV("input",{type:"checkbox",checked:A.enabled,onChange:(U)=>z(U.target.checked)},void 0,!1,void 0,this),Tg.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-counts",children:[Tg.jsxDEV("div",{className:"ls-count-card",children:[Tg.jsxDEV(C0,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Tg.jsxDEV("div",{className:"ls-count-num",children:R},void 0,!1,void 0,this),Tg.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-count-card",children:[Tg.jsxDEV(G4,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Tg.jsxDEV("div",{className:"ls-count-num",children:X},void 0,!1,void 0,this),Tg.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-section",children:[Tg.jsxDEV("div",{className:"ls-settings-section-label",children:[Tg.jsxDEV(Q4,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-field",children:[Tg.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Tg.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(A.scriptTimeoutMs/1000),onChange:(U)=>{let $=Math.max(5,Math.min(300,Number(U.target.value)||60));H({type:"update_settings",patch:{scriptTimeoutMs:$*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-field",children:[Tg.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Tg.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:A.consoleHistoryLimit,onChange:(U)=>{let $=Math.max(50,Math.min(2000,Number(U.target.value)||500));H({type:"update_settings",patch:{consoleHistoryLimit:$}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-section",children:[Tg.jsxDEV("div",{className:"ls-settings-section-label",children:[Tg.jsxDEV(f8,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-field",children:[Tg.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Tg.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:A.editorFontSize,onChange:(U)=>{let $=Math.max(10,Math.min(24,Number(U.target.value)||12));H({type:"update_settings",patch:{editorFontSize:$}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-field",children:[Tg.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Tg.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:A.autosaveDebounceMs,onChange:(U)=>{let $=Math.max(300,Math.min(5000,Number(U.target.value)||1200));H({type:"update_settings",patch:{autosaveDebounceMs:$}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-section",children:[Tg.jsxDEV("div",{className:"ls-settings-section-label",children:[Tg.jsxDEV(I1,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-template-field",children:[Tg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Tg.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:A.defaultTriggerTemplate,onChange:(U)=>H({type:"update_settings",patch:{defaultTriggerTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Tg.jsxDEV("div",{className:"ls-settings-template-field",children:[Tg.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Tg.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:A.defaultLibraryTemplate,onChange:(U)=>H({type:"update_settings",patch:{defaultLibraryTemplate:U.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function LZ(w){let H=w?.type;return typeof H==="string"&&H.startsWith("dom_")}var J0=new Map;function _h(w,H){J0.set(w,H)}function Tv(w){let H=J0.get(w);for(let[A,q]of Jw)if(q.elementId===w){if(H)H.removeEventListener(q.event,q.handler);Jw.delete(A)}J0.delete(w)}var uH=new Map,UH=new Map,u4=new Map,LH=new Map,Jw=new Map;function A$(w,H){return`${w}:${H}`}function uZ(w){let H=w.target,A={type:w.type};if(H){if(H.id)A.targetId=H.id;if("value"in H)A.targetValue=H.value;if("checked"in H)A.targetChecked=H.checked;if(H.dataset&&Object.keys(H.dataset).length>0){let q={};for(let[W,G]of Object.entries(H.dataset))if(G!==void 0)q[W]=G;A.dataset=q}}if(w instanceof MouseEvent)A.clientX=w.clientX,A.clientY=w.clientY;else if(typeof TouchEvent<"u"&&w instanceof TouchEvent){let q=w.touches[0]??w.changedTouches[0];if(q)A.clientX=q.clientX,A.clientY=q.clientY}if(w instanceof CustomEvent&&w.detail!==void 0)try{JSON.stringify(w.detail),A.detail=w.detail}catch{}return A}function FZ(w,H){return`@scope ([data-ls-script="${H}"]) {
${w}
}`}function BZ(w,H=5000){let A=document.querySelector(w);if(A)return Promise.resolve(A);return new Promise((q,W)=>{let G=!1,R=new MutationObserver(()=>{let X=document.querySelector(w);if(X&&!G)G=!0,R.disconnect(),q(X)});R.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!G)G=!0,R.disconnect(),W(Error(`waitForElement: timeout for "${w}"`))},H)})}function q$(w){return w.querySelector('[class*="_bubble_"]')}var dv=new Map,oZ=50;function IZ(w,H,A){if(dv.size>=oZ){let q=dv.keys().next().value;if(q)dv.get(q)?.cancel(),dv.delete(q)}dv.set(w,{scriptId:H,cancel:A})}function NZ(w){for(let[H,A]of dv)if(A.scriptId===w)A.cancel(),dv.delete(H)}function W$(w,H,A){let q=H((W)=>{if(!LZ(W))return;let G=W;switch(G.type){case"dom_inject":{let{scriptId:R,elementId:X,target:z,html:U,position:$,stableId:J,parentElementId:L}=G;if(J0.has(X)){console.warn(`[LumiScript] dom_inject: elementId "${X}" already in elementMap — skipping duplicate insert`);break}let C=`<div data-ls-script="${R}" data-ls-el="${X}">${U}</div>`,n=null;if(L){let y=J0.get(L);if(!y){console.warn(`[LumiScript] dom_inject: parentElementId "${L}" not in elementMap — drop`);break}let a=y.querySelector(z);if(!a){console.warn(`[LumiScript] dom_inject: selector "${z}" not found within parent "${L}" — drop`);break}let _=document.createElement("div");_.setAttribute("data-spindle-ext",""),_.innerHTML=C,a.insertAdjacentElement($,_),n=_}else n=w.dom.inject(z,C,$);if(n){if(J0.set(X,n),uH.set(X,R),J)UH.set(A$(R,J),X)}break}case"dom_inject_at_message":{let{scriptId:R,elementId:X,messageId:z,html:U,position:$,stableId:J}=G,L=(_)=>{let Wg=`<div data-ls-script="${R}" data-ls-el="${X}">${U}</div>`,Og=_,c;if($==="header"){let Ag=_.querySelector('[class*="_header_"]');if(Ag)Og=Ag,c="beforebegin";else c="afterbegin"}else c="beforeend";let s=w.dom.inject(Og,Wg,c);if(J0.set(X,s),uH.set(X,R),J)UH.set(A$(R,J),X)},C=`[data-message-id="${z}"]`,n=document.querySelector(C);if(n){let _=q$(n);if(_)L(_);break}let y=!1;IZ(X,R,()=>{y=!0}),BZ(C).then((_)=>{if(dv.delete(X),y)return;let Wg=q$(_);if(Wg)L(Wg)}).catch(()=>{dv.delete(X)});break}case"dom_update":{let R=J0.get(G.elementId);if(!R)break;let X=R.querySelector(`[data-ls-el="${G.elementId}"]`)??R;X.innerHTML=G.html;break}case"dom_remove":{P$(G.elementId);break}case"dom_add_style":{let{scriptId:R,styleId:X,css:z}=G,U=FZ(z,R),$=w.dom.addStyle(U);u4.set(X,$),LH.set(X,R);break}case"dom_remove_style":{let R=u4.get(G.styleId);if(R)R(),u4.delete(G.styleId),LH.delete(G.styleId);break}case"dom_listen":{let{elementId:R,listenerId:X,event:z,preventDefault:U}=G,$=J0.get(R);if(!$)break;let J=(L)=>{if(U)L.preventDefault();let C=uZ(L);A({type:"dom_event",elementId:R,listenerId:X,event:z,data:C})};$.addEventListener(z,J),Jw.set(X,{elementId:R,event:z,handler:J});break}case"dom_unlisten":{let R=Jw.get(G.listenerId);if(!R)break;let X=J0.get(R.elementId);if(X)X.removeEventListener(R.event,R.handler);Jw.delete(G.listenerId);break}case"dom_cleanup_script":{let{scriptId:R}=G;NZ(R);for(let[X,z]of uH)if(z===R)P$(X);for(let[X,z]of LH)if(z===R){let U=u4.get(X);if(U)U();u4.delete(X),LH.delete(X)}for(let[X]of UH)if(X.startsWith(R+":"))UH.delete(X);break}case"dom_make_draggable":{let{elementId:R,handleSelector:X}=G,z=J0.get(R);if(!z)break;let U=!1,$=!1;z.addEventListener("pointerdown",(J)=>{if(J.button!==0)return;if(X&&!J.target.closest(X))return;let L=z.firstElementChild?.firstElementChild??z.firstElementChild??z,C=L.getBoundingClientRect();L.style.transform="none",L.style.top=`${C.top}px`,L.style.left=`${C.left}px`,L.style.bottom="auto",L.style.right="auto",U=!0,$=!1;let n=J.clientX-C.left,y=J.clientY-C.top;L.style.cursor="grabbing";let a=(Wg)=>{if(!U)return;$=!0,L.style.top=`${Wg.clientY-y}px`,L.style.left=`${Wg.clientX-n}px`},_=()=>{if(!U)return;U=!1,L.style.cursor="",document.removeEventListener("pointermove",a),document.removeEventListener("pointerup",_),document.removeEventListener("pointercancel",_)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",_),document.addEventListener("pointercancel",_),J.preventDefault()}),z.addEventListener("click",(J)=>{if($)J.stopImmediatePropagation(),J.preventDefault(),$=!1},!0);break}}});return()=>{q();for(let[,W]of dv)W.cancel();dv.clear();for(let[,W]of Jw){let G=J0.get(W.elementId);if(G)G.removeEventListener(W.event,W.handler)}Jw.clear();for(let[,W]of J0)try{W.remove()}catch{}J0.clear(),uH.clear(),UH.clear();for(let[,W]of u4)try{W()}catch{}u4.clear(),LH.clear()}}function P$(w){for(let[A,q]of Jw)if(q.elementId===w){let W=J0.get(w);if(W)W.removeEventListener(q.event,q.handler);Jw.delete(A)}let H=J0.get(w);if(H)try{H.remove()}catch{}J0.delete(w),uH.delete(w)}function ZZ(w){let H=w?.type;return H==="ls_modal_open"||H==="ls_modal_set_title"||H==="ls_modal_dismiss"}var z5=new Map;function M$(w,H,A){let q=H((W)=>{if(!ZZ(W))return;let G=W;switch(G.type){case"ls_modal_open":{let{scriptId:R,modalId:X,rootElementId:z,options:U}=G;if(z5.has(X))break;let $;try{$=w.ui.showModal({title:U.title,width:U.width,maxHeight:U.maxHeight,persistent:U.persistent})}catch(L){console.warn("[LumiScript] ctx.ui.showModal failed:",L),A({type:"ls_modal_dismissed",modalId:X});break}_h(z,$.root),$.root.setAttribute("data-ls-script",R),$.root.setAttribute("data-ls-modal",X);let J={modalId:X,rootElementId:z,handle:$,echoed:!1};z5.set(X,J),$.onDismiss(()=>{if(J.echoed)return;J.echoed=!0,Tv(z),z5.delete(X),A({type:"ls_modal_dismissed",modalId:X})});break}case"ls_modal_set_title":{let R=z5.get(G.modalId);if(!R)break;try{R.handle.setTitle(G.title)}catch{}break}case"ls_modal_dismiss":{let R=z5.get(G.modalId);if(!R)break;try{R.handle.dismiss()}catch{if(!R.echoed)R.echoed=!0,Tv(R.rootElementId),z5.delete(G.modalId),A({type:"ls_modal_dismissed",modalId:G.modalId})}break}}});return()=>{q();for(let W of z5.values()){try{W.handle.dismiss()}catch{}Tv(W.rootElementId)}z5.clear()}}function lZ(w){return w?.type==="ls_context_menu_show"}function G$(w,H,A){let q=H(async(W)=>{if(!lZ(W))return;let G=W,R=null;try{R=(await w.ui.showContextMenu({position:G.options.position,items:G.options.items})).selectedKey}catch(X){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",X)}A({type:"ls_context_menu_result",requestId:G.requestId,selectedKey:R})});return()=>{q()}}function TZ(w){let H=w?.type;return H==="ls_input_bar_action_register"||H==="ls_input_bar_action_set_label"||H==="ls_input_bar_action_set_enabled"||H==="ls_input_bar_action_destroy"}var Qw=new Map;function CZ(w,H){return`${w}:${H}`}function R$(w,H,A){let q=H((W)=>{if(!TZ(W))return;let G=W,R=CZ(G.scriptId,G.actionId);switch(G.type){case"ls_input_bar_action_register":{let X=Qw.get(R);if(X){try{X.destroy()}catch{}Qw.delete(R)}let z;try{z=w.ui.registerInputBarAction({id:G.actionId,label:G.options.label,iconSvg:G.options.iconSvg,iconUrl:G.options.iconUrl,enabled:G.options.enabled})}catch(U){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",U);break}Qw.set(R,z),z.onClick(()=>{A({type:"ls_input_bar_action_click",scriptId:G.scriptId,actionId:G.actionId})});break}case"ls_input_bar_action_set_label":{let X=Qw.get(R);if(!X)break;try{X.setLabel(G.label)}catch{}break}case"ls_input_bar_action_set_enabled":{let X=Qw.get(R);if(!X)break;try{X.setEnabled(G.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let X=Qw.get(R);if(!X)break;try{X.destroy()}catch{}Qw.delete(R);break}}});return()=>{q();for(let W of Qw.values())try{W.destroy()}catch{}Qw.clear()}}function SZ(w){let H=w?.type;return H==="ls_float_widget_create"||H==="ls_float_widget_move"||H==="ls_float_widget_set_visible"||H==="ls_float_widget_destroy"}var Kw=new Map;function X$(w,H,A){let q=H((W)=>{if(!SZ(W))return;let G=W;switch(G.type){case"ls_float_widget_create":{let{scriptId:R,widgetId:X,rootElementId:z,options:U}=G,$=Kw.get(X);if($){try{$.handle.destroy()}catch{}Tv($.rootElementId),Kw.delete(X)}let J;try{J=w.ui.createFloatWidget({width:U.width,height:U.height,initialPosition:U.initialPosition,snapToEdge:U.snapToEdge,tooltip:U.tooltip,chromeless:U.chromeless})}catch(L){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",L);break}_h(z,J.root),J.root.setAttribute("data-ls-script",R),J.root.setAttribute("data-ls-widget",X),Kw.set(X,{widgetId:X,rootElementId:z,handle:J}),J.onDragEnd((L)=>{A({type:"ls_float_widget_drag_end",widgetId:X,x:L.x,y:L.y})});break}case"ls_float_widget_move":{let R=Kw.get(G.widgetId);if(!R)break;try{R.handle.moveTo(G.x,G.y)}catch{}break}case"ls_float_widget_set_visible":{let R=Kw.get(G.widgetId);if(!R)break;try{R.handle.setVisible(G.visible)}catch{}break}case"ls_float_widget_destroy":{let R=Kw.get(G.widgetId);if(!R)break;try{R.handle.destroy()}catch{}Tv(R.rootElementId),Kw.delete(G.widgetId);break}}});return()=>{q();for(let W of Kw.values()){try{W.handle.destroy()}catch{}Tv(W.rootElementId)}Kw.clear()}}function xZ(w){let H=w?.type;return H==="ls_drawer_tab_register"||H==="ls_drawer_tab_set_title"||H==="ls_drawer_tab_set_short_name"||H==="ls_drawer_tab_set_badge"||H==="ls_drawer_tab_activate"||H==="ls_drawer_tab_destroy"}var av=new Map;function mZ(w,H){return`${w}:${H}`}function Y$(w,H,A){let q=H((W)=>{if(!xZ(W))return;let G=W,R=mZ(G.scriptId,G.tabId);switch(G.type){case"ls_drawer_tab_register":{let X=av.get(R);if(X){try{X.handle.destroy()}catch{}Tv(X.rootElementId),av.delete(R)}let z;try{z=w.ui.registerDrawerTab({id:G.options.id,title:G.options.title,shortName:G.options.shortName,description:G.options.description,keywords:G.options.keywords,headerTitle:G.options.headerTitle,iconSvg:G.options.iconSvg,iconUrl:G.options.iconUrl})}catch(U){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",U);break}_h(G.rootElementId,z.root),z.root.setAttribute("data-ls-script",G.scriptId),z.root.setAttribute("data-ls-tab",G.tabId),av.set(R,{scriptId:G.scriptId,tabId:G.tabId,rootElementId:G.rootElementId,handle:z}),z.onActivate(()=>{A({type:"ls_drawer_tab_activated",scriptId:G.scriptId,tabId:G.tabId})});break}case"ls_drawer_tab_set_title":{let X=av.get(R);if(!X)break;try{X.handle.setTitle(G.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let X=av.get(R);if(!X)break;try{X.handle.setShortName(G.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let X=av.get(R);if(!X)break;try{X.handle.setBadge(G.badge)}catch{}break}case"ls_drawer_tab_activate":{let X=av.get(R);if(!X)break;try{X.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let X=av.get(R);if(!X)break;try{X.handle.destroy()}catch{}Tv(X.rootElementId),av.delete(R);break}}});return()=>{q();for(let W of av.values()){try{W.handle.destroy()}catch{}Tv(W.rootElementId)}av.clear()}}var FH=Mg(sg(),1);function tfr(w){let H=[],A=w.dom.addStyle(qJ);H.push(A);let q=[],W=w.onBackendMessage((_)=>{for(let Wg of q)Wg(_)});H.push(W);let G=(_)=>{return q.push(_),()=>{let Wg=q.indexOf(_);if(Wg!==-1)q.splice(Wg,1)}},R=(_)=>{w.sendToBackend(_)},X=W$(w,G,R);H.push(X);let z=M$(w,G,R);H.push(z);let U=G$(w,G,R);H.push(U);let $=R$(w,G,R);H.push($);let J=X$(w,G,R);H.push(J);let L=Y$(w,G,R);H.push(L),R({type:"frontend_ready"});let C=w.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),n=AM.createRoot(C.root);n.render(FH.jsxDEV(bM.StrictMode,{children:FH.jsxDEV(O$,{onBackendMessage:G,sendToBackend:R},void 0,!1,void 0,this)},void 0,!1,void 0,this)),H.push(()=>{try{n.unmount()}catch{}try{C.destroy()}catch{}});let y=w.ui.mount("settings_extensions"),a=AM.createRoot(y);return a.render(FH.jsxDEV(bM.StrictMode,{children:FH.jsxDEV(b$,{onBackendMessage:G,sendToBackend:R},void 0,!1,void 0,this)},void 0,!1,void 0,this)),H.push(()=>a.unmount()),()=>{for(let _ of H)try{_()}catch{}w.dom.cleanup()}}export{tfr as setup};
