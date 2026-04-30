var RK=Object.create;var{getPrototypeOf:GK,defineProperty:AH,getOwnPropertyNames:XK}=Object;var YK=Object.prototype.hasOwnProperty;function JK(v){return this[v]}var QK,zK,Or=(v,h,e)=>{var u=v!=null&&typeof v==="object";if(u){var H=h?QK??=new WeakMap:zK??=new WeakMap,O=H.get(v);if(O)return O}e=v!=null?RK(GK(v)):{};let q=h||!v||!v.__esModule?AH(e,"default",{value:v,enumerable:!0}):e;for(let A of XK(v))if(!YK.call(q,A))AH(q,A,{get:JK.bind(v,A),enumerable:!0});if(u)H.set(v,q);return q};var Xh=(v,h)=>()=>(h||v((h={exports:{}}).exports,h),h.exports);var KK=(v)=>v;function $K(v,h){this[v]=KK.bind(null,h)}var UK=(v,h)=>{for(var e in h)AH(v,e,{get:h[e],enumerable:!0,configurable:!0,set:$K.bind(h,e)})};var hg=Xh((LK,r4)=>{(function(){function v(G,N){Object.defineProperty(u.prototype,G,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",N[0],N[1])}})}function h(G){if(G===null||typeof G!=="object")return null;return G=Fo&&G[Fo]||G["@@iterator"],typeof G==="function"?G:null}function e(G,N){G=(G=G.constructor)&&(G.displayName||G.name)||"ReactClass";var gr=G+"."+N;er[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",N,G),er[gr]=!0)}function u(G,N,gr){this.props=G,this.context=N,this.refs=rv,this.updater=gr||_o}function H(){}function O(G,N,gr){this.props=G,this.context=N,this.refs=rv,this.updater=gr||_o}function q(){}function A(G){return""+G}function X(G){try{A(G);var N=!1}catch(Gr){N=!0}if(N){N=console;var gr=N.error,ur=typeof Symbol==="function"&&Symbol.toStringTag&&G[Symbol.toStringTag]||G.constructor.name||"Object";return gr.call(N,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",ur),A(G)}}function J(G){if(G==null)return null;if(typeof G==="function")return G.$$typeof===s5?null:G.displayName||G.name||null;if(typeof G==="string")return G;switch(G){case Mr:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case Cr:return"Suspense";case wr:return"SuspenseList";case Gg:return"Activity"}if(typeof G==="object")switch(typeof G.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),G.$$typeof){case or:return"Portal";case Qr:return G.displayName||"Context";case Hr:return(G._context.displayName||"Context")+".Consumer";case Rr:var N=G.render;return G=G.displayName,G||(G=N.displayName||N.name||"",G=G!==""?"ForwardRef("+G+")":"ForwardRef"),G;case tr:return N=G.displayName||null,N!==null?N:J(G.type)||"Memo";case ar:N=G._payload,G=G._init;try{return J(G(N))}catch(gr){}}return null}function Y(G){if(G===Mr)return"<>";if(typeof G==="object"&&G!==null&&G.$$typeof===ar)return"<...>";try{var N=J(G);return N?"<"+N+">":"<...>"}catch(gr){return"<...>"}}function W(){var G=Sr.A;return G===null?null:G.getOwner()}function Q(){return Error("react-stack-top-frame")}function I(G){if(Bh.call(G,"key")){var N=Object.getOwnPropertyDescriptor(G,"key").get;if(N&&N.isReactWarning)return!1}return G.key!==void 0}function _(G,N){function gr(){t2||(t2=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",N))}gr.isReactWarning=!0,Object.defineProperty(G,"key",{get:gr,configurable:!0})}function t(){var G=J(this.type);return Fl[G]||(Fl[G]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),G=this.props.ref,G!==void 0?G:null}function V(G,N,gr,ur,Gr,Br){var mr=gr.ref;return G={$$typeof:hr,type:G,key:N,props:gr,_owner:ur},(mr!==void 0?mr:null)!==null?Object.defineProperty(G,"ref",{enumerable:!1,get:t}):Object.defineProperty(G,"ref",{enumerable:!1,value:null}),G._store={},Object.defineProperty(G._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(G,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(G,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Gr}),Object.defineProperty(G,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Br}),Object.freeze&&(Object.freeze(G.props),Object.freeze(G)),G}function rr(G,N){return N=V(G.type,N,G.props,G._owner,G._debugStack,G._debugTask),G._store&&(N._store.validated=G._store.validated),N}function Pr(G){lr(G)?G._store&&(G._store.validated=1):typeof G==="object"&&G!==null&&G.$$typeof===ar&&(G._payload.status==="fulfilled"?lr(G._payload.value)&&G._payload.value._store&&(G._payload.value._store.validated=1):G._store&&(G._store.validated=1))}function lr(G){return typeof G==="object"&&G!==null&&G.$$typeof===hr}function j(G){var N={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(gr){return N[gr]})}function p(G,N){return typeof G==="object"&&G!==null&&G.key!=null?(X(G.key),j(""+G.key)):N.toString(36)}function vr(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status==="string"?G.then(q,q):(G.status="pending",G.then(function(N){G.status==="pending"&&(G.status="fulfilled",G.value=N)},function(N){G.status==="pending"&&(G.status="rejected",G.reason=N)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function m(G,N,gr,ur,Gr){var Br=typeof G;if(Br==="undefined"||Br==="boolean")G=null;var mr=!1;if(G===null)mr=!0;else switch(Br){case"bigint":case"string":case"number":mr=!0;break;case"object":switch(G.$$typeof){case hr:case or:mr=!0;break;case ar:return mr=G._init,m(mr(G._payload),N,gr,ur,Gr)}}if(mr){mr=G,Gr=Gr(mr);var vg=ur===""?"."+p(mr,0):ur;return Og(Gr)?(gr="",vg!=null&&(gr=vg.replace(Zh,"$&/")+"/"),m(Gr,N,gr,"",function(zo){return zo})):Gr!=null&&(lr(Gr)&&(Gr.key!=null&&(mr&&mr.key===Gr.key||X(Gr.key)),gr=rr(Gr,gr+(Gr.key==null||mr&&mr.key===Gr.key?"":(""+Gr.key).replace(Zh,"$&/")+"/")+vg),ur!==""&&mr!=null&&lr(mr)&&mr.key==null&&mr._store&&!mr._store.validated&&(gr._store.validated=2),Gr=gr),N.push(Gr)),1}if(mr=0,vg=ur===""?".":ur+":",Og(G))for(var Kr=0;Kr<G.length;Kr++)ur=G[Kr],Br=vg+p(ur,Kr),mr+=m(ur,N,gr,Br,Gr);else if(Kr=h(G),typeof Kr==="function")for(Kr===G.entries&&(mh||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),mh=!0),G=Kr.call(G),Kr=0;!(ur=G.next()).done;)ur=ur.value,Br=vg+p(ur,Kr++),mr+=m(ur,N,gr,Br,Gr);else if(Br==="object"){if(typeof G.then==="function")return m(vr(G),N,gr,ur,Gr);throw N=String(G),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return mr}function E(G,N,gr){if(G==null)return G;var ur=[],Gr=0;return m(G,ur,"","",function(Br){return N.call(gr,Br,Gr++)}),ur}function f(G){if(G._status===-1){var N=G._ioInfo;N!=null&&(N.start=N.end=performance.now()),N=G._result;var gr=N();if(gr.then(function(Gr){if(G._status===0||G._status===-1){G._status=1,G._result=Gr;var Br=G._ioInfo;Br!=null&&(Br.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Gr)}},function(Gr){if(G._status===0||G._status===-1){G._status=2,G._result=Gr;var Br=G._ioInfo;Br!=null&&(Br.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Gr)}}),N=G._ioInfo,N!=null){N.value=gr;var ur=gr.displayName;typeof ur==="string"&&(N.name=ur)}G._status===-1&&(G._status=0,G._result=gr)}if(G._status===1)return N=G._result,N===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,N),"default"in N||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,N),N.default;throw G._result}function C(){var G=Sr.H;return G===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),G}function Yr(){Sr.asyncTransitions--}function Wr(G){if(Nl===null)try{var N=("require"+Math.random()).slice(0,7);Nl=(r4&&r4[N]).call(r4,"timers").setImmediate}catch(gr){Nl=function(ur){T2===!1&&(T2=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Gr=new MessageChannel;Gr.port1.onmessage=ur,Gr.port2.postMessage(void 0)}}return Nl(G)}function Jr(G){return 1<G.length&&typeof AggregateError==="function"?AggregateError(G):G[0]}function xr(G,N){N!==Bl-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Bl=N}function k(G,N,gr){var ur=Sr.actQueue;if(ur!==null)if(ur.length!==0)try{s(ur),Wr(function(){return k(G,N,gr)});return}catch(Gr){Sr.thrownErrors.push(Gr)}else Sr.actQueue=null;0<Sr.thrownErrors.length?(ur=Jr(Sr.thrownErrors),Sr.thrownErrors.length=0,gr(ur)):N(G)}function s(G){if(!Zl){Zl=!0;var N=0;try{for(;N<G.length;N++){var gr=G[N];do{Sr.didUsePromise=!1;var ur=gr(!1);if(ur!==null){if(Sr.didUsePromise){G[N]=gr,G.splice(0,N);return}gr=ur}else break}while(1)}G.length=0}catch(Gr){G.splice(0,N+1),Sr.thrownErrors.push(Gr)}finally{Zl=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var hr=Symbol.for("react.transitional.element"),or=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),Hr=Symbol.for("react.consumer"),Qr=Symbol.for("react.context"),Rr=Symbol.for("react.forward_ref"),Cr=Symbol.for("react.suspense"),wr=Symbol.for("react.suspense_list"),tr=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Gg=Symbol.for("react.activity"),Fo=Symbol.iterator,er={},_o={isMounted:function(){return!1},enqueueForceUpdate:function(G){e(G,"forceUpdate")},enqueueReplaceState:function(G){e(G,"replaceState")},enqueueSetState:function(G){e(G,"setState")}},Qo=Object.assign,rv={};Object.freeze(rv),u.prototype.isReactComponent={},u.prototype.setState=function(G,N){if(typeof G!=="object"&&typeof G!=="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,N,"setState")},u.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};var cg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(L1 in cg)cg.hasOwnProperty(L1)&&v(L1,cg[L1]);H.prototype=u.prototype,cg=O.prototype=new H,cg.constructor=O,Qo(cg,u.prototype),cg.isPureReactComponent=!0;var Og=Array.isArray,s5=Symbol.for("react.client.reference"),Sr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Bh=Object.prototype.hasOwnProperty,Xg=console.createTask?console.createTask:function(){return null};cg={react_stack_bottom_frame:function(G){return G()}};var t2,b0,Fl={},Il=cg.react_stack_bottom_frame.bind(cg,Q)(),Z4=Xg(Y(Q)),mh=!1,Zh=/\/+/g,U1=typeof reportError==="function"?reportError:function(G){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(N))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",G);return}console.error(G)},T2=!1,Nl=null,Bl=0,ml=!1,Zl=!1,rb=typeof queueMicrotask==="function"?function(G){queueMicrotask(function(){return queueMicrotask(G)})}:Wr;cg=Object.freeze({__proto__:null,c:function(G){return C().useMemoCache(G)}});var L1={map:E,forEach:function(G,N,gr){E(G,function(){N.apply(this,arguments)},gr)},count:function(G){var N=0;return E(G,function(){N++}),N},toArray:function(G){return E(G,function(N){return N})||[]},only:function(G){if(!lr(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};LK.Activity=Gg,LK.Children=L1,LK.Component=u,LK.Fragment=Mr,LK.Profiler=S,LK.PureComponent=O,LK.StrictMode=T,LK.Suspense=Cr,LK.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Sr,LK.__COMPILER_RUNTIME=cg,LK.act=function(G){var N=Sr.actQueue,gr=Bl;Bl++;var ur=Sr.actQueue=N!==null?N:[],Gr=!1;try{var Br=G()}catch(Kr){Sr.thrownErrors.push(Kr)}if(0<Sr.thrownErrors.length)throw xr(N,gr),G=Jr(Sr.thrownErrors),Sr.thrownErrors.length=0,G;if(Br!==null&&typeof Br==="object"&&typeof Br.then==="function"){var mr=Br;return rb(function(){Gr||ml||(ml=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Kr,zo){Gr=!0,mr.then(function(gv){if(xr(N,gr),gr===0){try{s(ur),Wr(function(){return k(gv,Kr,zo)})}catch(gb){Sr.thrownErrors.push(gb)}if(0<Sr.thrownErrors.length){var n1=Jr(Sr.thrownErrors);Sr.thrownErrors.length=0,zo(n1)}}else Kr(gv)},function(gv){xr(N,gr),0<Sr.thrownErrors.length?(gv=Jr(Sr.thrownErrors),Sr.thrownErrors.length=0,zo(gv)):zo(gv)})}}}var vg=Br;if(xr(N,gr),gr===0&&(s(ur),ur.length!==0&&rb(function(){Gr||ml||(ml=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Sr.actQueue=null),0<Sr.thrownErrors.length)throw G=Jr(Sr.thrownErrors),Sr.thrownErrors.length=0,G;return{then:function(Kr,zo){Gr=!0,gr===0?(Sr.actQueue=ur,Wr(function(){return k(vg,Kr,zo)})):Kr(vg)}}},LK.cache=function(G){return function(){return G.apply(null,arguments)}},LK.cacheSignal=function(){return null},LK.captureOwnerStack=function(){var G=Sr.getCurrentStack;return G===null?null:G()},LK.cloneElement=function(G,N,gr){if(G===null||G===void 0)throw Error("The argument must be a React element, but you passed "+G+".");var ur=Qo({},G.props),Gr=G.key,Br=G._owner;if(N!=null){var mr;r:{if(Bh.call(N,"ref")&&(mr=Object.getOwnPropertyDescriptor(N,"ref").get)&&mr.isReactWarning){mr=!1;break r}mr=N.ref!==void 0}mr&&(Br=W()),I(N)&&(X(N.key),Gr=""+N.key);for(vg in N)!Bh.call(N,vg)||vg==="key"||vg==="__self"||vg==="__source"||vg==="ref"&&N.ref===void 0||(ur[vg]=N[vg])}var vg=arguments.length-2;if(vg===1)ur.children=gr;else if(1<vg){mr=Array(vg);for(var Kr=0;Kr<vg;Kr++)mr[Kr]=arguments[Kr+2];ur.children=mr}ur=V(G.type,Gr,ur,Br,G._debugStack,G._debugTask);for(Gr=2;Gr<arguments.length;Gr++)Pr(arguments[Gr]);return ur},LK.createContext=function(G){return G={$$typeof:Qr,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:Hr,_context:G},G._currentRenderer=null,G._currentRenderer2=null,G},LK.createElement=function(G,N,gr){for(var ur=2;ur<arguments.length;ur++)Pr(arguments[ur]);ur={};var Gr=null;if(N!=null)for(Kr in b0||!("__self"in N)||"key"in N||(b0=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),I(N)&&(X(N.key),Gr=""+N.key),N)Bh.call(N,Kr)&&Kr!=="key"&&Kr!=="__self"&&Kr!=="__source"&&(ur[Kr]=N[Kr]);var Br=arguments.length-2;if(Br===1)ur.children=gr;else if(1<Br){for(var mr=Array(Br),vg=0;vg<Br;vg++)mr[vg]=arguments[vg+2];Object.freeze&&Object.freeze(mr),ur.children=mr}if(G&&G.defaultProps)for(Kr in Br=G.defaultProps,Br)ur[Kr]===void 0&&(ur[Kr]=Br[Kr]);Gr&&_(ur,typeof G==="function"?G.displayName||G.name||"Unknown":G);var Kr=1e4>Sr.recentlyCreatedOwnerStacks++;return V(G,Gr,ur,W(),Kr?Error("react-stack-top-frame"):Il,Kr?Xg(Y(G)):Z4)},LK.createRef=function(){var G={current:null};return Object.seal(G),G},LK.forwardRef=function(G){G!=null&&G.$$typeof===tr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof G!=="function"?console.error("forwardRef requires a render function but was given %s.",G===null?"null":typeof G):G.length!==0&&G.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",G.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),G!=null&&G.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var N={$$typeof:Rr,render:G},gr;return Object.defineProperty(N,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,G.name||G.displayName||(Object.defineProperty(G,"name",{value:ur}),G.displayName=ur)}}),N},LK.isValidElement=lr,LK.lazy=function(G){G={_status:-1,_result:G};var N={$$typeof:ar,_payload:G,_init:f},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return G._ioInfo=gr,N._debugInfo=[{awaited:gr}],N},LK.memo=function(G,N){G==null&&console.error("memo: The first argument must be a component. Instead received: %s",G===null?"null":typeof G),N={$$typeof:tr,type:G,compare:N===void 0?null:N};var gr;return Object.defineProperty(N,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(ur){gr=ur,G.name||G.displayName||(Object.defineProperty(G,"name",{value:ur}),G.displayName=ur)}}),N},LK.startTransition=function(G){var N=Sr.T,gr={};gr._updatedFibers=new Set,Sr.T=gr;try{var ur=G(),Gr=Sr.S;Gr!==null&&Gr(gr,ur),typeof ur==="object"&&ur!==null&&typeof ur.then==="function"&&(Sr.asyncTransitions++,ur.then(Yr,Yr),ur.then(q,U1))}catch(Br){U1(Br)}finally{N===null&&gr._updatedFibers&&(G=gr._updatedFibers.size,gr._updatedFibers.clear(),10<G&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),N!==null&&gr.types!==null&&(N.types!==null&&N.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),N.types=gr.types),Sr.T=N}},LK.unstable_useCacheRefresh=function(){return C().useCacheRefresh()},LK.use=function(G){return C().use(G)},LK.useActionState=function(G,N,gr){return C().useActionState(G,N,gr)},LK.useCallback=function(G,N){return C().useCallback(G,N)},LK.useContext=function(G){var N=C();return G.$$typeof===Hr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),N.useContext(G)},LK.useDebugValue=function(G,N){return C().useDebugValue(G,N)},LK.useDeferredValue=function(G,N){return C().useDeferredValue(G,N)},LK.useEffect=function(G,N){return G==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useEffect(G,N)},LK.useEffectEvent=function(G){return C().useEffectEvent(G)},LK.useId=function(){return C().useId()},LK.useImperativeHandle=function(G,N,gr){return C().useImperativeHandle(G,N,gr)},LK.useInsertionEffect=function(G,N){return G==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useInsertionEffect(G,N)},LK.useLayoutEffect=function(G,N){return G==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),C().useLayoutEffect(G,N)},LK.useMemo=function(G,N){return C().useMemo(G,N)},LK.useOptimistic=function(G,N){return C().useOptimistic(G,N)},LK.useReducer=function(G,N,gr){return C().useReducer(G,N,gr)},LK.useRef=function(G){return C().useRef(G)},LK.useState=function(G){return C().useState(G)},LK.useSyncExternalStore=function(G,N,gr){return C().useSyncExternalStore(G,N,gr)},LK.useTransition=function(){return C().useTransition()},LK.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var H7=Xh((nK)=>{(function(){function v(){if(j=!1,E){var k=nK.unstable_now();Yr=k;var s=!0;try{r:{Pr=!1,lr&&(lr=!1,vr(f),f=-1),rr=!0;var hr=V;try{g:{O(k);for(t=e(Q);t!==null&&!(t.expirationTime>k&&A());){var or=t.callback;if(typeof or==="function"){t.callback=null,V=t.priorityLevel;var Mr=or(t.expirationTime<=k);if(k=nK.unstable_now(),typeof Mr==="function"){t.callback=Mr,O(k),s=!0;break g}t===e(Q)&&u(Q),O(k)}else u(Q);t=e(Q)}if(t!==null)s=!0;else{var T=e(I);T!==null&&X(q,T.startTime-k),s=!1}}break r}finally{t=null,V=hr,rr=!1}s=void 0}}finally{s?Wr():E=!1}}}function h(k,s){var hr=k.length;k.push(s);r:for(;0<hr;){var or=hr-1>>>1,Mr=k[or];if(0<H(Mr,s))k[or]=s,k[hr]=Mr,hr=or;else break r}}function e(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var s=k[0],hr=k.pop();if(hr!==s){k[0]=hr;r:for(var or=0,Mr=k.length,T=Mr>>>1;or<T;){var S=2*(or+1)-1,Hr=k[S],Qr=S+1,Rr=k[Qr];if(0>H(Hr,hr))Qr<Mr&&0>H(Rr,Hr)?(k[or]=Rr,k[Qr]=hr,or=Qr):(k[or]=Hr,k[S]=hr,or=S);else if(Qr<Mr&&0>H(Rr,hr))k[or]=Rr,k[Qr]=hr,or=Qr;else break r}}return s}function H(k,s){var hr=k.sortIndex-s.sortIndex;return hr!==0?hr:k.id-s.id}function O(k){for(var s=e(I);s!==null;){if(s.callback===null)u(I);else if(s.startTime<=k)u(I),s.sortIndex=s.expirationTime,h(Q,s);else break;s=e(I)}}function q(k){if(lr=!1,O(k),!Pr)if(e(Q)!==null)Pr=!0,E||(E=!0,Wr());else{var s=e(I);s!==null&&X(q,s.startTime-k)}}function A(){return j?!0:nK.unstable_now()-Yr<C?!1:!0}function X(k,s){f=p(function(){k(nK.unstable_now())},s)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),nK.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var J=performance;nK.unstable_now=function(){return J.now()}}else{var Y=Date,W=Y.now();nK.unstable_now=function(){return Y.now()-W}}var Q=[],I=[],_=1,t=null,V=3,rr=!1,Pr=!1,lr=!1,j=!1,p=typeof setTimeout==="function"?setTimeout:null,vr=typeof clearTimeout==="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null,E=!1,f=-1,C=5,Yr=-1;if(typeof m==="function")var Wr=function(){m(v)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,xr=Jr.port2;Jr.port1.onmessage=v,Wr=function(){xr.postMessage(null)}}else Wr=function(){p(v,0)};nK.unstable_IdlePriority=5,nK.unstable_ImmediatePriority=1,nK.unstable_LowPriority=4,nK.unstable_NormalPriority=3,nK.unstable_Profiling=null,nK.unstable_UserBlockingPriority=2,nK.unstable_cancelCallback=function(k){k.callback=null},nK.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1000/k):5},nK.unstable_getCurrentPriorityLevel=function(){return V},nK.unstable_next=function(k){switch(V){case 1:case 2:case 3:var s=3;break;default:s=V}var hr=V;V=s;try{return k()}finally{V=hr}},nK.unstable_requestPaint=function(){j=!0},nK.unstable_runWithPriority=function(k,s){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var hr=V;V=k;try{return s()}finally{V=hr}},nK.unstable_scheduleCallback=function(k,s,hr){var or=nK.unstable_now();switch(typeof hr==="object"&&hr!==null?(hr=hr.delay,hr=typeof hr==="number"&&0<hr?or+hr:or):hr=or,k){case 1:var Mr=-1;break;case 2:Mr=250;break;case 5:Mr=1073741823;break;case 4:Mr=1e4;break;default:Mr=5000}return Mr=hr+Mr,k={id:_++,callback:s,priorityLevel:k,startTime:hr,expirationTime:Mr,sortIndex:-1},hr>or?(k.sortIndex=hr,h(I,k),e(Q)===null&&k===e(I)&&(lr?(vr(f),f=-1):lr=!0,X(q,hr-or))):(k.sortIndex=Mr,h(Q,k),Pr||rr||(Pr=!0,E||(E=!0,Wr()))),k},nK.unstable_shouldYield=A,nK.unstable_wrapCallback=function(k){var s=V;return function(){var hr=V;V=s;try{return k.apply(this,arguments)}finally{V=hr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var P7=Xh((FK)=>{var MH=Or(hg());(function(){function v(){}function h(Y){return""+Y}function e(Y,W,Q){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{h(I);var _=!1}catch(t){_=!0}return _&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&I[Symbol.toStringTag]||I.constructor.name||"Object"),h(I)),{$$typeof:X,key:I==null?null:""+I,children:Y,containerInfo:W,implementation:Q}}function u(Y,W){if(Y==="font")return"";if(typeof W==="string")return W==="use-credentials"?W:""}function H(Y){return Y===null?"`null`":Y===void 0?"`undefined`":Y===""?"an empty string":'something with type "'+typeof Y+'"'}function O(Y){return Y===null?"`null`":Y===void 0?"`undefined`":Y===""?"an empty string":typeof Y==="string"?JSON.stringify(Y):typeof Y==="number"?"`"+Y+"`":'something with type "'+typeof Y+'"'}function q(){var Y=J.H;return Y===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),Y}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var A={d:{f:v,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},X=Symbol.for("react.portal"),J=MH.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),FK.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,FK.createPortal=function(Y,W){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!W||W.nodeType!==1&&W.nodeType!==9&&W.nodeType!==11)throw Error("Target container is not a DOM element.");return e(Y,W,null,Q)},FK.flushSync=function(Y){var W=J.T,Q=A.p;try{if(J.T=null,A.p=2,Y)return Y()}finally{J.T=W,A.p=Q,A.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},FK.preconnect=function(Y,W){typeof Y==="string"&&Y?W!=null&&typeof W!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",O(W)):W!=null&&typeof W.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",H(W.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(Y)),typeof Y==="string"&&(W?(W=W.crossOrigin,W=typeof W==="string"?W==="use-credentials"?W:"":void 0):W=null,A.d.C(Y,W))},FK.prefetchDNS=function(Y){if(typeof Y!=="string"||!Y)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(Y));else if(1<arguments.length){var W=arguments[1];typeof W==="object"&&W.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",O(W)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",O(W))}typeof Y==="string"&&A.d.D(Y)},FK.preinit=function(Y,W){if(typeof Y==="string"&&Y?W==null||typeof W!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",O(W)):W.as!=="style"&&W.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',O(W.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",H(Y)),typeof Y==="string"&&W&&typeof W.as==="string"){var Q=W.as,I=u(Q,W.crossOrigin),_=typeof W.integrity==="string"?W.integrity:void 0,t=typeof W.fetchPriority==="string"?W.fetchPriority:void 0;Q==="style"?A.d.S(Y,typeof W.precedence==="string"?W.precedence:void 0,{crossOrigin:I,integrity:_,fetchPriority:t}):Q==="script"&&A.d.X(Y,{crossOrigin:I,integrity:_,fetchPriority:t,nonce:typeof W.nonce==="string"?W.nonce:void 0})}},FK.preinitModule=function(Y,W){var Q="";if(typeof Y==="string"&&Y||(Q+=" The `href` argument encountered was "+H(Y)+"."),W!==void 0&&typeof W!=="object"?Q+=" The `options` argument encountered was "+H(W)+".":W&&("as"in W)&&W.as!=="script"&&(Q+=" The `as` option encountered was "+O(W.as)+"."),Q)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",Q);else switch(Q=W&&typeof W.as==="string"?W.as:"script",Q){case"script":break;default:Q=O(Q),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',Q,Y)}if(typeof Y==="string")if(typeof W==="object"&&W!==null){if(W.as==null||W.as==="script")Q=u(W.as,W.crossOrigin),A.d.M(Y,{crossOrigin:Q,integrity:typeof W.integrity==="string"?W.integrity:void 0,nonce:typeof W.nonce==="string"?W.nonce:void 0})}else W==null&&A.d.M(Y)},FK.preload=function(Y,W){var Q="";if(typeof Y==="string"&&Y||(Q+=" The `href` argument encountered was "+H(Y)+"."),W==null||typeof W!=="object"?Q+=" The `options` argument encountered was "+H(W)+".":typeof W.as==="string"&&W.as||(Q+=" The `as` option encountered was "+H(W.as)+"."),Q&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',Q),typeof Y==="string"&&typeof W==="object"&&W!==null&&typeof W.as==="string"){Q=W.as;var I=u(Q,W.crossOrigin);A.d.L(Y,Q,{crossOrigin:I,integrity:typeof W.integrity==="string"?W.integrity:void 0,nonce:typeof W.nonce==="string"?W.nonce:void 0,type:typeof W.type==="string"?W.type:void 0,fetchPriority:typeof W.fetchPriority==="string"?W.fetchPriority:void 0,referrerPolicy:typeof W.referrerPolicy==="string"?W.referrerPolicy:void 0,imageSrcSet:typeof W.imageSrcSet==="string"?W.imageSrcSet:void 0,imageSizes:typeof W.imageSizes==="string"?W.imageSizes:void 0,media:typeof W.media==="string"?W.media:void 0})}},FK.preloadModule=function(Y,W){var Q="";typeof Y==="string"&&Y||(Q+=" The `href` argument encountered was "+H(Y)+"."),W!==void 0&&typeof W!=="object"?Q+=" The `options` argument encountered was "+H(W)+".":W&&("as"in W)&&typeof W.as!=="string"&&(Q+=" The `as` option encountered was "+H(W.as)+"."),Q&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',Q),typeof Y==="string"&&(W?(Q=u(W.as,W.crossOrigin),A.d.m(Y,{as:typeof W.as==="string"&&W.as!=="script"?W.as:void 0,crossOrigin:Q,integrity:typeof W.integrity==="string"?W.integrity:void 0})):A.d.m(Y))},FK.requestFormReset=function(Y){A.d.r(Y)},FK.unstable_batchedUpdates=function(Y,W){return Y(W)},FK.useFormState=function(Y,W,Q){return q().useFormState(Y,W,Q)},FK.useFormStatus=function(){return q().useHostTransitionStatus()},FK.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var C5=Xh((VN,O7)=>{O7.exports=P7()});var q7=Xh((IK)=>{var lg=Or(H7()),t5=Or(hg()),WH=Or(C5());(function(){function v(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function h(r,g,o,l){if(o>=g.length)return l;var b=g[o],w=oo(r)?r.slice():cr({},r);return w[b]=h(r[b],g,o+1,l),w}function e(r,g,o){if(g.length!==o.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<o.length-1;l++)if(g[l]!==o[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return u(r,g,o,0)}}function u(r,g,o,l){var b=g[l],w=oo(r)?r.slice():cr({},r);return l+1===g.length?(w[o[l]]=w[b],oo(w)?w.splice(b,1):delete w[b]):w[b]=u(r[b],g,o,l+1),w}function H(r,g,o){var l=g[o],b=oo(r)?r.slice():cr({},r);if(o+1===g.length)return oo(b)?b.splice(l,1):delete b[l],b;return b[l]=H(r[l],g,o+1),b}function O(){return!1}function q(){return null}function A(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function X(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function J(){}function Y(){}function W(r){var g=[];return r.forEach(function(o){g.push(o)}),g.sort().join(", ")}function Q(r,g,o,l){return new wJ(r,g,o,l)}function I(r,g){r.context===f1&&(Z8(r.current,2,g,r,null,null),jh())}function _(r,g){if(Lv!==null){var o=g.staleFamilies;g=g.updatedFamilies,Ub(),WO(r.current,g,o),jh()}}function t(r){Lv=r}function V(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,o=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(o=g.return),r=g.return;while(r)}return g.tag===3?o:null}function Pr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function lr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function j(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function p(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var o=r,l=g;;){var b=o.return;if(b===null)break;var w=b.alternate;if(w===null){if(l=b.return,l!==null){o=l;continue}break}if(b.child===w.child){for(w=b.child;w;){if(w===o)return j(b),r;if(w===l)return j(b),g;w=w.sibling}throw Error("Unable to find node on an unmounted component.")}if(o.return!==l.return)o=b,l=w;else{for(var i=!1,P=b.child;P;){if(P===o){i=!0,o=b,l=w;break}if(P===l){i=!0,l=b,o=w;break}P=P.sibling}if(!i){for(P=w.child;P;){if(P===o){i=!0,o=w,l=b;break}if(P===l){i=!0,l=w,o=b;break}P=P.sibling}if(!i)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(o.tag!==3)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?r:g}function vr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=vr(r),g!==null)return g;r=r.sibling}return null}function m(r){if(r===null||typeof r!=="object")return null;return r=zM&&r[zM]||r["@@iterator"],typeof r==="function"?r:null}function E(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===LQ?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case g5:return"Fragment";case k8:return"Profiler";case je:return"StrictMode";case V8:return"Suspense";case _8:return"SuspenseList";case E8:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case r5:return"Portal";case z0:return r.displayName||"Context";case D8:return(r._context.displayName||"Context")+".Consumer";case Cb:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case fe:return g=r.displayName||null,g!==null?g:E(r.type)||"Memo";case iv:g=r._payload,r=r._init;try{return E(r(g))}catch(o){}}return null}function f(r){return typeof r.tag==="number"?C(r):typeof r.name==="string"?r.name:null}function C(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return E(g);case 8:return g===je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var o=g.length-1;0<=o;o--)if(typeof g[o].name==="string")return g[o].name}if(r.return!==null)return C(r.return)}return null}function Yr(r){return{current:r}}function Wr(r,g){0>d0?console.error("Unexpected pop."):(g!==c8[d0]&&console.error("Unexpected Fiber popped."),r.current=y8[d0],y8[d0]=null,c8[d0]=null,d0--)}function Jr(r,g,o){d0++,y8[d0]=r.current,c8[d0]=o,r.current=g}function xr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function k(r,g){Jr(V1,g,r),Jr(tb,r,r),Jr(D1,null,r);var o=g.nodeType;switch(o){case 9:case 11:o=o===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?jA(g):P1:P1;break;default:if(o=g.tagName,g=g.namespaceURI)g=jA(g),g=fA(g,o);else switch(o){case"svg":g=Z5;break;case"math":g=cu;break;default:g=P1}}o=o.toLowerCase(),o=DP(null,o),o={context:g,ancestorInfo:o},Wr(D1,r),Jr(D1,o,r)}function s(r){Wr(D1,r),Wr(tb,r),Wr(V1,r)}function hr(){return xr(D1.current)}function or(r){r.memoizedState!==null&&Jr(ae,r,r);var g=xr(D1.current),o=r.type,l=fA(g.context,o);o=DP(g.ancestorInfo,o),l={context:l,ancestorInfo:o},g!==l&&(Jr(tb,r,r),Jr(D1,l,r))}function Mr(r){tb.current===r&&(Wr(D1,r),Wr(tb,r)),ae.current===r&&(Wr(ae,r),nw._currentValue=Gh)}function T(){}function S(){if(Tb===0){KM=console.log,$M=console.info,UM=console.warn,LM=console.error,nM=console.group,FM=console.groupCollapsed,IM=console.groupEnd;var r={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Tb++}function Hr(){if(Tb--,Tb===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:cr({},r,{value:KM}),info:cr({},r,{value:$M}),warn:cr({},r,{value:UM}),error:cr({},r,{value:LM}),group:cr({},r,{value:nM}),groupCollapsed:cr({},r,{value:FM}),groupEnd:cr({},r,{value:IM})})}0>Tb&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Qr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Rr(r){if(j8===void 0)try{throw Error()}catch(o){var g=o.stack.trim().match(/\n( *(at )?)/);j8=g&&g[1]||"",NM=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+j8+r+NM}function Cr(r,g){if(!r||f8)return"";var o=a8.get(r);if(o!==void 0)return o;f8=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=x.H,x.H=null,S();try{var b={DetermineComponentFrameRoot:function(){try{if(g){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(br){var B=br}Reflect.construct(r,[],K)}else{try{K.call()}catch(br){B=br}r.call(K.prototype)}}else{try{throw Error()}catch(br){B=br}(K=r())&&typeof K.catch==="function"&&K.catch(function(){})}}catch(br){if(br&&B&&typeof br.stack==="string")return[br.stack,B.stack]}return[null,null]}};b.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var w=Object.getOwnPropertyDescriptor(b.DetermineComponentFrameRoot,"name");w&&w.configurable&&Object.defineProperty(b.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=b.DetermineComponentFrameRoot(),P=i[0],M=i[1];if(P&&M){var R=P.split(`
`),n=M.split(`
`);for(i=w=0;w<R.length&&!R[w].includes("DetermineComponentFrameRoot");)w++;for(;i<n.length&&!n[i].includes("DetermineComponentFrameRoot");)i++;if(w===R.length||i===n.length)for(w=R.length-1,i=n.length-1;1<=w&&0<=i&&R[w]!==n[i];)i--;for(;1<=w&&0<=i;w--,i--)if(R[w]!==n[i]){if(w!==1||i!==1)do if(w--,i--,0>i||R[w]!==n[i]){var F=`
`+R[w].replace(" at new "," at ");return r.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",r.displayName)),typeof r==="function"&&a8.set(r,F),F}while(1<=w&&0<=i);break}}}finally{f8=!1,x.H=l,Hr(),Error.prepareStackTrace=o}return R=(R=r?r.displayName||r.name:"")?Rr(R):"",typeof r==="function"&&a8.set(r,R),R}function wr(r,g){switch(r.tag){case 26:case 27:case 5:return Rr(r.type);case 16:return Rr("Lazy");case 13:return r.child!==g&&g!==null?Rr("Suspense Fallback"):Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 15:return Cr(r.type,!1);case 11:return Cr(r.type.render,!1);case 1:return Cr(r.type,!0);case 31:return Rr("Activity");default:return""}}function tr(r){try{var g="",o=null;do{g+=wr(r,o);var l=r._debugInfo;if(l)for(var b=l.length-1;0<=b;b--){var w=l[b];if(typeof w.name==="string"){var i=g;r:{var{name:P,env:M,debugLocation:R}=w;if(R!=null){var n=Qr(R),F=n.lastIndexOf(`
`),K=F===-1?n:n.slice(F+1);if(K.indexOf(P)!==-1){var B=`
`+K;break r}}B=Rr(P+(M?" ["+M+"]":""))}g=i+B}}o=r,r=r.return}while(r);return g}catch(br){return`
Error generating stack: `+br.message+`
`+br.stack}}function ar(r){return(r=r?r.displayName||r.name:"")?Rr(r):""}function Gg(){if(Hv===null)return null;var r=Hv._debugOwner;return r!=null?f(r):null}function Fo(){if(Hv===null)return"";var r=Hv;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Rr(r.type);break;case 13:g+=Rr("Suspense");break;case 19:g+=Rr("SuspenseList");break;case 31:g+=Rr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=ar(r.type));break;case 11:r._debugOwner||g!==""||(g+=ar(r.type.render))}for(;r;)if(typeof r.tag==="number"){var o=r;r=o._debugOwner;var l=o._debugStack;if(r&&l){var b=Qr(l);b!==""&&(g+=`
`+b)}}else if(r.debugStack!=null){var w=r.debugStack;(r=r.owner)&&w&&(g+=`
`+Qr(w))}else break;var i=g}catch(P){i=`
Error generating stack: `+P.message+`
`+P.stack}return i}function er(r,g,o,l,b,w,i){var P=Hv;_o(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,o,l,b,w,i)):g(o,l,b,w,i)}finally{_o(P)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function _o(r){x.getCurrentStack=r===null?null:Fo,K0=!1,Hv=r}function Qo(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function rv(r){try{return cg(r),!1}catch(g){return!0}}function cg(r){return""+r}function Og(r,g){if(rv(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,Qo(r)),cg(r)}function s5(r,g){if(rv(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,Qo(r)),cg(r)}function Sr(r){if(rv(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Qo(r)),cg(r)}function Bh(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{v5=g.inject(r),$o=g}catch(o){console.error("React instrumentation encountered an error: %o.",o)}return g.checkDCE?!0:!1}function Xg(r){if(typeof ZQ==="function"&&xQ(r),$o&&typeof $o.setStrictMode==="function")try{$o.setStrictMode(v5,r)}catch(g){$0||($0=!0,console.error("React instrumentation encountered an error: %o",g))}}function t2(r){return r>>>=0,r===0?32:31-(CQ(r)/tQ|0)|0}function b0(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Fl(r,g,o){var l=r.pendingLanes;if(l===0)return 0;var b=0,w=r.suspendedLanes,i=r.pingedLanes;r=r.warmLanes;var P=l&134217727;return P!==0?(l=P&~w,l!==0?b=b0(l):(i&=P,i!==0?b=b0(i):o||(o=P&~r,o!==0&&(b=b0(o))))):(P=l&~w,P!==0?b=b0(P):i!==0?b=b0(i):o||(o=l&~r,o!==0&&(b=b0(o)))),b===0?0:g!==0&&g!==b&&(g&w)===0&&(w=b&-b,o=g&-g,w>=o||w===32&&(o&4194048)!==0)?g:b}function Il(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function Z4(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function mh(){var r=se;return se<<=1,(se&62914560)===0&&(se=4194304),r}function Zh(r){for(var g=[],o=0;31>o;o++)g.push(r);return g}function U1(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function T2(r,g,o,l,b,w){var i=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var{entanglements:P,expirationTimes:M,hiddenUpdates:R}=r;for(o=i&~o;0<o;){var n=31-No(o),F=1<<n;P[n]=0,M[n]=-1;var K=R[n];if(K!==null)for(R[n]=null,n=0;n<K.length;n++){var B=K[n];B!==null&&(B.lane&=-536870913)}o&=~F}l!==0&&Nl(r,l,0),w!==0&&b===0&&r.tag!==0&&(r.suspendedLanes|=w&~(i&~g))}function Nl(r,g,o){r.pendingLanes|=g,r.suspendedLanes&=~g;var l=31-No(g);r.entangledLanes|=g,r.entanglements[l]=r.entanglements[l]|1073741824|o&261930}function Bl(r,g){var o=r.entangledLanes|=g;for(r=r.entanglements;o;){var l=31-No(o),b=1<<l;b&g|r[l]&g&&(r[l]|=g),o&=~b}}function ml(r,g){var o=g&-g;return o=(o&42)!==0?1:Zl(o),(o&(r.suspendedLanes|g))!==0?0:o}function Zl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function rb(r,g,o){if(U0)for(r=r.pendingUpdatersLaneMap;0<o;){var l=31-No(o),b=1<<l;r[l].add(g),o&=~b}}function L1(r,g){if(U0)for(var{pendingUpdatersLaneMap:o,memoizedUpdaters:l}=r;0<g;){var b=31-No(g);r=1<<b,b=o[b],0<b.size&&(b.forEach(function(w){var i=w.alternate;i!==null&&l.has(i)||l.add(w)}),b.clear()),g&=~r}}function G(r){return r&=-r,Pv!==0&&Pv<r?_v!==0&&_v<r?(r&134217727)!==0?L0:ru:_v:Pv}function N(){var r=eg.p;if(r!==0)return r;return r=window.event,r===void 0?L0:WM(r.type)}function gr(r,g){var o=eg.p;try{return eg.p=r,g()}finally{eg.p=o}}function ur(r){delete r[Mo],delete r[Bo],delete r[gi],delete r[TQ],delete r[SQ]}function Gr(r){var g=r[Mo];if(g)return g;for(var o=r.parentNode;o;){if(g=o[E1]||o[Mo]){if(o=g.alternate,g.child!==null||o!==null&&o.child!==null)for(r=vM(r);r!==null;){if(o=r[Mo])return o;r=vM(r)}return g}r=o,o=r.parentNode}return null}function Br(r){if(r=r[Mo]||r[E1]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function mr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function vg(r){var g=r[BM];return g||(g=r[BM]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Kr(r){r[Sb]=!0}function zo(r,g){gv(r,g),gv(r+"Capture",g)}function gv(r,g){pl[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),pl[r]=g;var o=r.toLowerCase();oi[o]=r,r==="onDoubleClick"&&(oi.ondblclick=r);for(r=0;r<g.length;r++)mM.add(g[r])}function n1(r,g){kQ[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function gb(r){if(Vv.call(xM,r))return!0;if(Vv.call(ZM,r))return!1;if(DQ.test(r))return xM[r]=!0;return ZM[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function UP(r,g,o){if(gb(g)){if(!r.hasAttribute(g)){switch(typeof o){case"symbol":case"object":return o;case"function":return o;case"boolean":if(o===!1)return o}return o===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&o===!0)return!0;return Og(o,g),r===""+o?o:r}}function S2(r,g,o){if(gb(g))if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var l=g.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(g);return}}Og(o,g),r.setAttribute(g,""+o)}}function k2(r,g,o){if(o===null)r.removeAttribute(g);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}Og(o,g),r.setAttribute(g,""+o)}}function V0(r,g,o,l){if(l===null)r.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Og(l,o),r.setAttributeNS(g,o,""+l)}}function Qv(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Sr(r),r;default:return""}}function LP(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function tY(r,g,o){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:b,set:w}=l;return Object.defineProperty(r,g,{configurable:!0,get:function(){return b.call(this)},set:function(i){Sr(i),o=""+i,w.call(this,i)}}),Object.defineProperty(r,g,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(i){Sr(i),o=""+i},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function x4(r){if(!r._valueTracker){var g=LP(r)?"checked":"value";r._valueTracker=tY(r,g,""+r[g])}}function nP(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var o=g.getValue(),l="";return r&&(l=LP(r)?r.checked?"true":"false":r.value),r=l,r!==o?(g.setValue(r),!0):!1}function D2(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function zv(r){return r.replace(VQ,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function FP(r,g){g.checked===void 0||g.defaultChecked===void 0||tM||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Gg()||"A component",g.type),tM=!0),g.value===void 0||g.defaultValue===void 0||CM||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Gg()||"A component",g.type),CM=!0)}function C4(r,g,o,l,b,w,i,P){if(r.name="",i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"?(Og(i,"type"),r.type=i):r.removeAttribute("type"),g!=null)if(i==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+Qv(g)}else r.value!==""+Qv(g)&&(r.value=""+Qv(g));else i!=="submit"&&i!=="reset"||r.removeAttribute("value");g!=null?t4(r,i,Qv(g)):o!=null?t4(r,i,Qv(o)):l!=null&&r.removeAttribute("value"),b==null&&w!=null&&(r.defaultChecked=!!w),b!=null&&(r.checked=b&&typeof b!=="function"&&typeof b!=="symbol"),P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(Og(P,"name"),r.name=""+Qv(P)):r.removeAttribute("name")}function IP(r,g,o,l,b,w,i,P){if(w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"&&(Og(w,"type"),r.type=w),g!=null||o!=null){if(!(w!=="submit"&&w!=="reset"||g!==void 0&&g!==null)){x4(r);return}o=o!=null?""+Qv(o):"",g=g!=null?""+Qv(g):o,P||g===r.value||(r.value=g),r.defaultValue=g}l=l!=null?l:b,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=P?r.checked:!!l,r.defaultChecked=!!l,i!=null&&typeof i!=="function"&&typeof i!=="symbol"&&typeof i!=="boolean"&&(Og(i,"name"),r.name=i),x4(r)}function t4(r,g,o){g==="number"&&D2(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function NP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?t5.Children.forEach(g.children,function(o){o==null||typeof o==="string"||typeof o==="number"||typeof o==="bigint"||SM||(SM=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||kM||(kM=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||TM||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),TM=!0)}function BP(){var r=Gg();return r?`

Check the render method of \``+r+"`.":""}function xh(r,g,o,l){if(r=r.options,g){g={};for(var b=0;b<o.length;b++)g["$"+o[b]]=!0;for(o=0;o<r.length;o++)b=g.hasOwnProperty("$"+r[o].value),r[o].selected!==b&&(r[o].selected=b),b&&l&&(r[o].defaultSelected=!0)}else{o=""+Qv(o),g=null;for(b=0;b<r.length;b++){if(r[b].value===o){r[b].selected=!0,l&&(r[b].defaultSelected=!0);return}g!==null||r[b].disabled||(g=r[b])}g!==null&&(g.selected=!0)}}function mP(r,g){for(r=0;r<VM.length;r++){var o=VM[r];if(g[o]!=null){var l=oo(g[o]);g.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",o,BP()):!g.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",o,BP())}}g.value===void 0||g.defaultValue===void 0||DM||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),DM=!0)}function ZP(r,g){g.value===void 0||g.defaultValue===void 0||_M||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Gg()||"A component"),_M=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function xP(r,g,o){if(g!=null&&(g=""+Qv(g),g!==r.value&&(r.value=g),o==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=o!=null?""+Qv(o):""}function CP(r,g,o,l){if(g==null){if(l!=null){if(o!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(oo(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}o=l}o==null&&(o=""),g=o}o=Qv(g),r.defaultValue=o,l=r.textContent,l===o&&l!==""&&l!==null&&(r.value=l),x4(r)}function tP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?tP(r.children[0],g):r}function ov(r){return"  "+"  ".repeat(r)}function Ch(r){return"+ "+"  ".repeat(r)}function xl(r){return"- "+"  ".repeat(r)}function TP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function ob(r,g){return EM.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function V2(r,g,o){var l=120-2*o;if(g===null)return Ch(o)+ob(r,l)+`
`;if(typeof g==="string"){for(var b=0;b<g.length&&b<r.length&&g.charCodeAt(b)===r.charCodeAt(b);b++);return b>l-8&&10<b&&(r="..."+r.slice(b-8),g="..."+g.slice(b-8)),Ch(o)+ob(r,l)+`
`+xl(o)+ob(g,l)+`
`}return ov(o)+ob(r,l)+`
`}function T4(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,o){return o})}function vb(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(oo(r))return"[...]";if(r.$$typeof===Q0)return(g=E(r.type))?"<"+g+">":"<...>";var o=T4(r);if(o==="Object"){o="",g-=2;for(var l in r)if(r.hasOwnProperty(l)){var b=JSON.stringify(l);if(b!=='"'+l+'"'&&(l=b),g-=l.length-2,b=vb(r[l],15>g?g:15),g-=b.length,0>g){o+=o===""?"...":", ...";break}o+=(o===""?"":",")+l+":"+b}return"{"+o+"}"}return o;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function th(r,g){return typeof r!=="string"||EM.test(r)?"{"+vb(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function S4(r,g,o){var l=120-o.length-r.length,b=[],w;for(w in g)if(g.hasOwnProperty(w)&&w!=="children"){var i=th(g[w],120-o.length-w.length-1);l-=w.length+i.length+2,b.push(w+"="+i)}return b.length===0?o+"<"+r+`>
`:0<l?o+"<"+r+" "+b.join(" ")+`>
`:o+"<"+r+`
`+o+"  "+b.join(`
`+o+"  ")+`
`+o+`>
`}function TY(r,g,o){var l="",b=cr({},g),w;for(w in r)if(r.hasOwnProperty(w)){delete b[w];var i=120-2*o-w.length-2,P=vb(r[w],i);g.hasOwnProperty(w)?(i=vb(g[w],i),l+=Ch(o)+w+": "+P+`
`,l+=xl(o)+w+": "+i+`
`):l+=Ch(o)+w+": "+P+`
`}for(var M in b)b.hasOwnProperty(M)&&(r=vb(b[M],120-2*o-M.length-2),l+=xl(o)+M+": "+r+`
`);return l}function SY(r,g,o,l){var b="",w=new Map;for(R in o)o.hasOwnProperty(R)&&w.set(R.toLowerCase(),R);if(w.size===1&&w.has("children"))b+=S4(r,g,ov(l));else{for(var i in g)if(g.hasOwnProperty(i)&&i!=="children"){var P=120-2*(l+1)-i.length-1,M=w.get(i.toLowerCase());if(M!==void 0){w.delete(i.toLowerCase());var R=g[i];M=o[M];var n=th(R,P);P=th(M,P),typeof R==="object"&&R!==null&&typeof M==="object"&&M!==null&&T4(R)==="Object"&&T4(M)==="Object"&&(2<Object.keys(R).length||2<Object.keys(M).length||-1<n.indexOf("...")||-1<P.indexOf("..."))?b+=ov(l+1)+i+`={{
`+TY(R,M,l+2)+ov(l+1)+`}}
`:(b+=Ch(l+1)+i+"="+n+`
`,b+=xl(l+1)+i+"="+P+`
`)}else b+=ov(l+1)+i+"="+th(g[i],P)+`
`}w.forEach(function(F){if(F!=="children"){var K=120-2*(l+1)-F.length-1;b+=xl(l+1)+F+"="+th(o[F],K)+`
`}}),b=b===""?ov(l)+"<"+r+`>
`:ov(l)+"<"+r+`
`+b+ov(l)+`>
`}if(r=o.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(w="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")w=""+g;b+=V2(w,""+r,l+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")b=r==null?b+V2(""+g,null,l+1):b+V2(""+g,void 0,l+1);return b}function SP(r,g){var o=TP(r);if(o===null){o="";for(r=r.child;r;)o+=SP(r,g),r=r.sibling;return o}return ov(g)+"<"+o+`>
`}function k4(r,g){var o=tP(r,g);if(o!==r&&(r.children.length!==1||r.children[0]!==o))return ov(g)+`...
`+k4(o,g+1);o="";var l=r.fiber._debugInfo;if(l)for(var b=0;b<l.length;b++){var w=l[b].name;typeof w==="string"&&(o+=ov(g)+"<"+w+`>
`,g++)}if(l="",b=r.fiber.pendingProps,r.fiber.tag===6)l=V2(b,r.serverProps,g),g++;else if(w=TP(r.fiber),w!==null)if(r.serverProps===void 0){l=g;var i=120-2*l-w.length-2,P="";for(R in b)if(b.hasOwnProperty(R)&&R!=="children"){var M=th(b[R],15);if(i-=R.length+M.length+2,0>i){P+=" ...";break}P+=" "+R+"="+M}l=ov(l)+"<"+w+P+`>
`,g++}else r.serverProps===null?(l=S4(w,b,Ch(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=SY(w,b,r.serverProps,g),g++);var R="";b=r.fiber.child;for(w=0;b&&w<r.children.length;)i=r.children[w],i.fiber===b?(R+=k4(i,g),w++):R+=SP(b,g),b=b.sibling;b&&0<r.children.length&&(R+=ov(g)+`...
`),b=r.serverTail,r.serverProps===null&&g--;for(r=0;r<b.length;r++)w=b[r],R=typeof w==="string"?R+(xl(g)+ob(w,120-2*g)+`
`):R+S4(w.type,w.props,xl(g));return o+l+R}function D4(r){try{return`

`+k4(r,0)}catch(g){return""}}function kP(r,g,o){for(var l=g,b=null,w=0;l;)l===r&&(w=0),b={fiber:l,children:b!==null?[b]:[],serverProps:l===g?o:l===r?null:void 0,serverTail:[],distanceFromLeaf:w},w++,l=l.return;return b!==null?D4(b).replaceAll(/^[+-]/gm,">"):""}function DP(r,g){var o=cr({},r||cM),l={tag:g};if(yM.indexOf(g)!==-1&&(o.aTagInScope=null,o.buttonTagInScope=null,o.nobrTagInScope=null),EQ.indexOf(g)!==-1&&(o.pTagInButtonScope=null),_Q.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(o.listItemTagAutoclosing=null,o.dlItemTagAutoclosing=null),o.current=l,g==="form"&&(o.formTag=l),g==="a"&&(o.aTagInScope=l),g==="button"&&(o.buttonTagInScope=l),g==="nobr"&&(o.nobrTagInScope=l),g==="p"&&(o.pTagInButtonScope=l),g==="li"&&(o.listItemTagAutoclosing=l),g==="dd"||g==="dt")o.dlItemTagAutoclosing=l;return g==="#document"||g==="html"?o.containerTagInScope=null:o.containerTagInScope||(o.containerTagInScope=l),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?o.implicitRootScope===!0&&(o.implicitRootScope=!1):o.implicitRootScope=!0,o}function VP(r,g,o){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(o)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!o)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return yQ.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return o||g===null;case"html":return o&&g==="#document"||g===null;case"body":return o&&(g==="#document"||g==="html")||g===null}return!0}function kY(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function _P(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function V4(r,g){g=g||cM;var o=g.current;if(g=(o=VP(r,o&&o.tag,g.implicitRootScope)?null:o)?null:kY(r,g),g=o||g,!g)return!0;var l=g.tag;if(g=String(!!o)+"|"+r+"|"+l,gu[g])return!1;gu[g]=!0;var b=(g=Hv)?_P(g.return,l):null,w=g!==null&&b!==null?kP(b,g,null):"",i="<"+r+">";return o?(o="",l==="table"&&r==="tr"&&(o+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,i,l,o,w)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,i,l,w),g&&(r=g.return,b===null||r===null||b===r&&r._debugOwner===g._debugOwner||er(b,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,i)})),!1}function _2(r,g,o){if(o||VP("#text",g,!1))return!0;if(o="#text|"+g,gu[o])return!1;gu[o]=!0;var l=(o=Hv)?_P(o,g):null;return o=o!==null&&l!==null?kP(l,o,o.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,o):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,o),!1}function lb(r,g){if(g){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=g;return}}r.textContent=g}function DY(r){return r.replace(fQ,function(g,o){return o.toUpperCase()})}function EP(r,g,o){var l=g.indexOf("--")===0;l||(-1<g.indexOf("-")?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,DY(g.replace(jQ,"ms-")))):cQ.test(g)?l5.hasOwnProperty(g)&&l5[g]||(l5[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!aM.test(o)||li.hasOwnProperty(o)&&li[o]||(li[o]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,o.replace(aM,""))),typeof o==="number"&&(isNaN(o)?pM||(pM=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(o)||dM||(dM=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),o==null||typeof o==="boolean"||o===""?l?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":l?r.setProperty(g,o):typeof o!=="number"||o===0||sM.has(g)?g==="float"?r.cssFloat=o:(s5(o,g),r[g]=(""+o).trim()):r[g]=o+"px"}function yP(r,g,o){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,o!=null){if(g){var l={};if(o){for(var b in o)if(o.hasOwnProperty(b)&&!g.hasOwnProperty(b))for(var w=vi[b]||[b],i=0;i<w.length;i++)l[w[i]]=b}for(var P in g)if(g.hasOwnProperty(P)&&(!o||o[P]!==g[P]))for(b=vi[P]||[P],w=0;w<b.length;w++)l[b[w]]=P;P={};for(var M in g)for(b=vi[M]||[M],w=0;w<b.length;w++)P[b[w]]=M;M={};for(var R in l)if(b=l[R],(w=P[R])&&b!==w&&(i=b+","+w,!M[i])){M[i]=!0,i=console;var n=g[b];i.error.call(i,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",n==null||typeof n==="boolean"||n===""?"Removing":"Updating",b,w)}}for(var F in o)!o.hasOwnProperty(F)||g!=null&&g.hasOwnProperty(F)||(F.indexOf("--")===0?r.setProperty(F,""):F==="float"?r.cssFloat="":r[F]="");for(var K in g)R=g[K],g.hasOwnProperty(K)&&o[K]!==R&&EP(r,K,R)}else for(l in g)g.hasOwnProperty(l)&&EP(r,l,g[l])}function hb(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function cP(r){return aQ.get(r)||r}function VY(r,g){if(Vv.call(b5,g)&&b5[g])return!0;if(dQ.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=rW.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),b5[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),b5[g]=!0}if(pQ.test(g)){if(r=g.toLowerCase(),r=rW.hasOwnProperty(r)?r:null,r==null)return b5[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),b5[g]=!0)}return!0}function _Y(r,g){var o=[],l;for(l in g)VY(r,l)||o.push(l);g=o.map(function(b){return"`"+b+"`"}).join(", "),o.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<o.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function EY(r,g,o,l){if(Vv.call(mo,g)&&mo[g])return!0;var b=g.toLowerCase();if(b==="onfocusin"||b==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),mo[g]=!0;if(typeof o==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(g))return!0;if(l=r.hasOwnProperty(b)?r[b]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,l),mo[g]=!0;if(oW.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),mo[g]=!0}else if(oW.test(g))return sQ.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),mo[g]=!0;if(rz.test(g)||gz.test(g))return!0;if(b==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),mo[g]=!0;if(b==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),mo[g]=!0;if(b==="is"&&o!==null&&o!==void 0&&typeof o!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof o),mo[g]=!0;if(typeof o==="number"&&isNaN(o))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),mo[g]=!0;if(vu.hasOwnProperty(b)){if(b=vu[b],b!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,b),mo[g]=!0}else if(g!==b)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,b),mo[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof o){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(b=g.toLowerCase().slice(0,5),b==="data-"||b==="aria-")return!0;return o?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',o,g,g,o,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',o,g,g,o,g,g,g),mo[g]=!0}case"function":case"symbol":return mo[g]=!0,!1;case"string":if(o==="false"||o==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",o,g,o==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,o),mo[g]=!0}}return!0}function yY(r,g,o){var l=[],b;for(b in g)EY(r,b,g[b],o)||l.push(b);g=l.map(function(w){return"`"+w+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function bb(r){return oz.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function _0(){}function _4(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function jP(r){var g=Br(r);if(g&&(r=g.stateNode)){var o=r[Bo]||null;r:switch(r=g.stateNode,g.type){case"input":if(C4(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),g=o.name,o.type==="radio"&&g!=null){for(o=r;o.parentNode;)o=o.parentNode;Og(g,"name"),o=o.querySelectorAll('input[name="'+zv(""+g)+'"][type="radio"]');for(g=0;g<o.length;g++){var l=o[g];if(l!==r&&l.form===r.form){var b=l[Bo]||null;if(!b)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");C4(l,b.value,b.defaultValue,b.defaultValue,b.checked,b.defaultChecked,b.type,b.name)}}for(g=0;g<o.length;g++)l=o[g],l.form===r.form&&nP(l)}break r;case"textarea":xP(r,o.value,o.defaultValue);break r;case"select":g=o.value,g!=null&&xh(r,!!o.multiple,g,!1)}}}function fP(r,g,o){if(hi)return r(g,o);hi=!0;try{var l=r(g);return l}finally{if(hi=!1,w5!==null||e5!==null){if(jh(),w5&&(g=w5,r=e5,e5=w5=null,jP(g),r))for(g=0;g<r.length;g++)jP(r[g])}}}function wb(r,g){var o=r.stateNode;if(o===null)return null;var l=o[Bo]||null;if(l===null)return null;o=l[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(o&&typeof o!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}function aP(){if(lu)return lu;var r,g=wi,o=g.length,l,b="value"in y1?y1.value:y1.textContent,w=b.length;for(r=0;r<o&&g[r]===b[r];r++);var i=o-r;for(l=1;l<=i&&g[o-l]===b[w-l];l++);return lu=b.slice(r,1<l?1-l:void 0)}function E2(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function y2(){return!0}function pP(){return!1}function Eo(r){function g(o,l,b,w,i){this._reactName=o,this._targetInst=b,this.type=l,this.nativeEvent=w,this.target=i,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(o=r[P],this[P]=o?o(w):w[P]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?y2:pP,this.isPropagationStopped=pP,this}return cr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!=="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=y2)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!=="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=y2)},persist:function(){},isPersistent:y2}),g}function cY(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=Az[r])?!!g[r]:!1}function E4(){return cY}function dP(r,g){switch(r){case"keyup":return Uz.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==bW;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sP(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function jY(r,g){switch(r){case"compositionend":return sP(g);case"keypress":if(g.which!==eW)return null;return iW=!0,uW;case"textInput":return r=g.data,r===uW&&iW?null:r;default:return null}}function fY(r,g){if(u5)return r==="compositionend"||!Hi&&dP(r,g)?(r=aP(),lu=wi=y1=null,u5=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return wW&&g.locale!=="ko"?null:g.data;default:return null}}function rO(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!nz[r.type]:g==="textarea"?!0:!1}function aY(r){if(!n0)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function gO(r,g,o,l){w5?e5?e5.push(l):e5=[l]:w5=l,g=te(g,"onChange"),0<g.length&&(o=new hu("onChange","change",null,o,l),r.push({event:o,listeners:g}))}function pY(r){CA(r,0)}function c2(r){var g=mr(r);if(nP(g))return r}function oO(r,g){if(r==="change")return g}function vO(){yb&&(yb.detachEvent("onpropertychange",lO),cb=yb=null)}function lO(r){if(r.propertyName==="value"&&c2(cb)){var g=[];gO(g,cb,r,_4(r)),fP(pY,g)}}function dY(r,g,o){r==="focusin"?(vO(),yb=g,cb=o,yb.attachEvent("onpropertychange",lO)):r==="focusout"&&vO()}function sY(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return c2(cb)}function rJ(r,g){if(r==="click")return c2(g)}function gJ(r,g){if(r==="input"||r==="change")return c2(g)}function oJ(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function eb(r,g){if(Zo(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var o=Object.keys(r),l=Object.keys(g);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var b=o[l];if(!Vv.call(g,b)||!Zo(r[b],g[b]))return!1}return!0}function hO(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function bO(r,g){var o=hO(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=g&&l>=g)return{node:o,offset:g-r};r=l}r:{for(;o;){if(o.nextSibling){o=o.nextSibling;break r}o=o.parentNode}o=void 0}o=hO(o)}}function wO(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?wO(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function eO(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=D2(r.document);g instanceof r.HTMLIFrameElement;){try{var o=typeof g.contentWindow.location.href==="string"}catch(l){o=!1}if(o)r=g.contentWindow;else break;g=D2(r.document)}return g}function y4(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function uO(r,g,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Oi||i5==null||i5!==D2(l)||(l=i5,("selectionStart"in l)&&y4(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jb&&eb(jb,l)||(jb=l,l=te(Pi,"onSelect"),0<l.length&&(g=new hu("onSelect","select",null,g,o),r.push({event:g,listeners:l}),g.target=i5)))}function Cl(r,g){var o={};return o[r.toLowerCase()]=g.toLowerCase(),o["Webkit"+r]="webkit"+g,o["Moz"+r]="moz"+g,o}function tl(r){if(qi[r])return qi[r];if(!H5[r])return r;var g=H5[r],o;for(o in g)if(g.hasOwnProperty(o)&&o in PW)return qi[r]=g[o];return r}function Sv(r,g){WW.set(r,g),zo(g,[r])}function vJ(r){for(var g=wu,o=0;o<r.length;o++){var l=r[o];if(typeof l==="object"&&l!==null)if(oo(l)&&l.length===2&&typeof l[0]==="string"){if(g!==wu&&g!==Gi)return Wi;g=Gi}else return Wi;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||g!==wu&&g!==Ri)return Wi;g=Ri}}return g}function c4(r,g,o,l){for(var b in r)Vv.call(r,b)&&b[0]!=="_"&&w0(b,r[b],g,o,l)}function w0(r,g,o,l,b){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Q0){var w=E(g.type)||"…",i=g.key;g=g.props;var P=Object.keys(g),M=P.length;if(i==null&&M===0){g="<"+w+" />";break}if(3>l||M===1&&P[0]==="children"&&i==null){g="<"+w+" … />";break}o.push([b+"  ".repeat(l)+r,"<"+w]),i!==null&&w0("key",i,o,l+1,b),r=!1;for(var R in g)R==="children"?g.children!=null&&(!oo(g.children)||0<g.children.length)&&(r=!0):Vv.call(g,R)&&R[0]!=="_"&&w0(R,g[R],o,l+1,b);o.push(["",r?">…</"+w+">":"/>"]);return}if(w=Object.prototype.toString.call(g),w=w.slice(8,w.length-1),w==="Array"){if(R=vJ(g),R===Ri||R===wu){g=JSON.stringify(g);break}else if(R===Gi){o.push([b+"  ".repeat(l)+r,""]);for(r=0;r<g.length;r++)w=g[r],w0(w[0],w[1],o,l+1,b);return}}if(w==="Promise"){if(g.status==="fulfilled"){if(w=o.length,w0(r,g.value,o,l,b),o.length>w){o=o[w],o[1]="Promise<"+(o[1]||"Object")+">";return}}else if(g.status==="rejected"&&(w=o.length,w0(r,g.reason,o,l,b),o.length>w)){o=o[w],o[1]="Rejected Promise<"+o[1]+">";return}o.push(["  ".repeat(l)+r,"Promise"]);return}w==="Object"&&(R=Object.getPrototypeOf(g))&&typeof R.constructor==="function"&&(w=R.constructor.name),o.push([b+"  ".repeat(l)+r,w==="Object"?3>l?"":"…":w]),3>l&&c4(g,o,l+1,b);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===xz?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}o.push([b+"  ".repeat(l)+r,g])}function iO(r,g,o,l){var b=!0;for(i in r)i in g||(o.push([eu+"  ".repeat(l)+i,"…"]),b=!1);for(var w in g)if(w in r){var i=r[w],P=g[w];if(i!==P){if(l===0&&w==="children")b="  ".repeat(l)+w,o.push([eu+b,"…"],[uu+b,"…"]);else{if(!(3<=l)){if(typeof i==="object"&&typeof P==="object"&&i!==null&&P!==null&&i.$$typeof===P.$$typeof)if(P.$$typeof===Q0){if(i.type===P.type&&i.key===P.key){i=E(P.type)||"…",b="  ".repeat(l)+w,i="<"+i+" … />",o.push([eu+b,i],[uu+b,i]),b=!1;continue}}else{var M=Object.prototype.toString.call(i),R=Object.prototype.toString.call(P);if(M===R&&(R==="[object Object]"||R==="[object Array]")){M=[XW+"  ".repeat(l)+w,R==="[object Array]"?"Array":""],o.push(M),R=o.length,iO(i,P,o,l+1)?R===o.length&&(M[1]="Referentially unequal but deeply equal objects. Consider memoization."):b=!1;continue}}else if(typeof i==="function"&&typeof P==="function"&&i.name===P.name&&i.length===P.length&&(M=Function.prototype.toString.call(i),R=Function.prototype.toString.call(P),M===R)){i=P.name===""?"() => {}":P.name+"() {}",o.push([XW+"  ".repeat(l)+w,i+" Referentially unequal function closure. Consider memoization."]);continue}}w0(w,i,o,l,eu),w0(w,P,o,l,uu)}b=!1}}else o.push([uu+"  ".repeat(l)+w,"…"]),b=!1;return b}function vv(r){fr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function e0(r,g,o,l){Kg&&(j1.start=g,j1.end=o,s0.color="warning",s0.tooltipText=l,s0.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,j1)):performance.measure(l,j1))}function j2(r,g,o){e0(r,g,o,"Reconnect")}function f2(r,g,o,l,b){var w=C(r);if(w!==null&&Kg){var{alternate:i,actualDuration:P}=r;if(i===null||i.child!==r.child)for(var M=r.child;M!==null;M=M.sibling)P-=M.actualDuration;l=0.5>P?l?"tertiary-light":"primary-light":10>P?l?"tertiary":"primary":100>P?l?"tertiary-dark":"primary-dark":"error";var R=r.memoizedProps;P=r._debugTask,R!==null&&i!==null&&i.memoizedProps!==R?(M=[Cz],R=iO(i.memoizedProps,R,M,0),1<M.length&&(R&&!c1&&(i.lanes&b)===0&&100<r.actualDuration?(c1=!0,M[0]=tz,s0.color="warning",s0.tooltipText=YW):(s0.color=l,s0.tooltipText=w),s0.properties=M,j1.start=g,j1.end=o,P!=null?P.run(performance.measure.bind(performance,"​"+w,j1)):performance.measure("​"+w,j1))):P!=null?P.run(console.timeStamp.bind(console,w,g,o,$v,void 0,l)):console.timeStamp(w,g,o,$v,void 0,l)}}function j4(r,g,o,l){if(Kg){var b=C(r);if(b!==null){for(var w=null,i=[],P=0;P<l.length;P++){var M=l[P];w==null&&M.source!==null&&(w=M.source._debugTask),M=M.value,i.push(["Error",typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M)])}r.key!==null&&w0("key",r.key,i,0,""),r.memoizedProps!==null&&c4(r.memoizedProps,i,0,""),w==null&&(w=r._debugTask),r={start:g,end:o,detail:{devtools:{color:"error",track:$v,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:i}}},w?w.run(performance.measure.bind(performance,"​"+b,r)):performance.measure("​"+b,r)}}}function u0(r,g,o,l,b){if(b!==null){if(Kg){var w=C(r);if(w!==null){l=[];for(var i=0;i<b.length;i++){var P=b[i].value;l.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r.key!==null&&w0("key",r.key,l,0,""),r.memoizedProps!==null&&c4(r.memoizedProps,l,0,""),g={start:g,end:o,detail:{devtools:{color:"error",track:$v,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+w,g)):performance.measure("​"+w,g)}}}else w=C(r),w!==null&&Kg&&(b=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,w,g,o,$v,void 0,b)):console.timeStamp(w,g,o,$v,void 0,b))}function lJ(r,g,o,l){if(Kg&&!(g<=r)){var b=(o&738197653)===o?"tertiary-dark":"primary-dark";o=(o&536870912)===o?"Prepared":(o&201326741)===o?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,b)):console.timeStamp(o,r,g,fr,jr,b)}}function HO(r,g,o,l){!Kg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,g,fr,jr,o)):console.timeStamp("Prewarm",r,g,fr,jr,o))}function PO(r,g,o,l){!Kg||g<=r||(o=(o&738197653)===o?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,g,fr,jr,o)):console.timeStamp("Suspended",r,g,fr,jr,o))}function hJ(r,g,o,l,b,w){if(Kg&&!(g<=r)){o=[];for(var i=0;i<l.length;i++){var P=l[i].value;o.push(["Recoverable Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:fr,trackGroup:jr,tooltipText:b?"Hydration Failed":"Recovered after Error",properties:o}}},w?w.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function f4(r,g,o,l){!Kg||g<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,g,fr,jr,"error")):console.timeStamp("Errored",r,g,fr,jr,"error"))}function bJ(r,g,o,l){!Kg||g<=r||(l?l.run(console.timeStamp.bind(console,o,r,g,fr,jr,"secondary-light")):console.timeStamp(o,r,g,fr,jr,"secondary-light"))}function OO(r,g,o,l,b){if(Kg&&!(g<=r)){for(var w=[],i=0;i<o.length;i++){var P=o[i].value;w.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"error",track:fr,trackGroup:jr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:w}}},b?b.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function ub(r,g,o){!Kg||g<=r||(o?o.run(console.timeStamp.bind(console,"Animating",r,g,fr,jr,"secondary-dark")):console.timeStamp("Animating",r,g,fr,jr,"secondary-dark"))}function a2(){for(var r=P5,g=Xi=P5=0;g<r;){var o=Uv[g];Uv[g++]=null;var l=Uv[g];Uv[g++]=null;var b=Uv[g];Uv[g++]=null;var w=Uv[g];if(Uv[g++]=null,l!==null&&b!==null){var i=l.pending;i===null?b.next=b:(b.next=i.next,i.next=b),l.pending=b}w!==0&&qO(o,b,w)}}function p2(r,g,o,l){Uv[P5++]=r,Uv[P5++]=g,Uv[P5++]=o,Uv[P5++]=l,Xi|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function a4(r,g,o,l){return p2(r,g,o,l),d2(r)}function Ko(r,g){return p2(r,null,null,g),d2(r)}function qO(r,g,o){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o);for(var b=!1,w=r.return;w!==null;)w.childLanes|=o,l=w.alternate,l!==null&&(l.childLanes|=o),w.tag===22&&(r=w.stateNode,r===null||r._visibility&fb||(b=!0)),r=w,w=w.return;return r.tag===3?(w=r.stateNode,b&&g!==null&&(b=31-No(o),r=w.hiddenUpdates,l=r[b],l===null?r[b]=[g]:l.push(g),g.lane=o|536870912),w):null}function d2(r){if(Jw>sz)throw Oh=Jw=0,Qw=si=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Oh>rK&&(Oh=0,Qw=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&FA(r);for(var g=r,o=g.return;o!==null;)g.alternate===null&&(g.flags&4098)!==0&&FA(r),g=o,o=g.return;return g.tag===3?g.stateNode:null}function Tl(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r:g.current}function p4(r){if(Lv===null)return r;var g=Lv(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=Tl(r.render),r.render!==g)?(g={$$typeof:Cb,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function AO(r,g){if(Lv===null)return!1;var o=r.elementType;g=g.type;var l=!1,b=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(l=!0);break;case 0:typeof g==="function"?l=!0:b===iv&&(l=!0);break;case 11:b===Cb?l=!0:b===iv&&(l=!0);break;case 14:case 15:b===fe?l=!0:b===iv&&(l=!0);break;default:return!1}return l&&(r=Lv(o),r!==void 0&&r===Lv(g))?!0:!1}function MO(r){Lv!==null&&typeof WeakSet==="function"&&(O5===null&&(O5=new WeakSet),O5.add(r))}function WO(r,g,o){do{var l=r,b=l.alternate,w=l.child,i=l.sibling,P=l.tag;l=l.type;var M=null;switch(P){case 0:case 15:case 1:M=l;break;case 11:M=l.render}if(Lv===null)throw Error("Expected resolveFamily to be set during hot reload.");var R=!1;if(l=!1,M!==null&&(M=Lv(M),M!==void 0&&(o.has(M)?l=!0:g.has(M)&&(P===1?l=!0:R=!0))),O5!==null&&(O5.has(r)||b!==null&&O5.has(b))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||R)b=Ko(r,2),b!==null&&mg(b,r,2);if(w===null||l||WO(w,g,o),i===null)break;r=i}while(1)}function wJ(r,g,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,JW||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function d4(r){return r=r.prototype,!(!r||!r.isReactComponent)}function E0(r,g){var o=r.alternate;switch(o===null?(o=Q(r.tag,g,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o._debugOwner=r._debugOwner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o._debugHookTypes=r._debugHookTypes,o.alternate=r,r.alternate=o):(o.pendingProps=g,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null,o.actualDuration=-0,o.actualStartTime=-1.1),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,g=r.dependencies,o.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o.selfBaseDuration=r.selfBaseDuration,o.treeBaseDuration=r.treeBaseDuration,o._debugInfo=r._debugInfo,o._debugNeedsRemount=r._debugNeedsRemount,o.tag){case 0:case 15:o.type=Tl(r.type);break;case 1:o.type=Tl(r.type);break;case 11:o.type=p4(r.type)}return o}function RO(r,g){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,g=o.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=o.selfBaseDuration,r.treeBaseDuration=o.treeBaseDuration),r}function s4(r,g,o,l,b,w){var i=0,P=r;if(typeof r==="function")d4(r)&&(i=1),P=Tl(P);else if(typeof r==="string")i=hr(),i=MQ(r,o,i)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case E8:return g=Q(31,o,g,b),g.elementType=E8,g.lanes=w,g;case g5:return Sl(o.children,b,w,g);case je:i=8,b|=Uo,b|=Ev;break;case k8:return r=o,l=b,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=Q(12,r,g,l|kr),g.elementType=k8,g.lanes=w,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case V8:return g=Q(13,o,g,b),g.elementType=V8,g.lanes=w,g;case _8:return g=Q(19,o,g,b),g.elementType=_8,g.lanes=w,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case z0:i=10;break r;case D8:i=9;break r;case Cb:i=11,P=p4(P);break r;case fe:i=14;break r;case iv:i=16,P=null;break r}if(P="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)P+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?o="null":oo(r)?o="array":r!==void 0&&r.$$typeof===Q0?(o="<"+(E(r.type)||"Unknown")+" />",P=" Did you accidentally export a JSX literal instead of a component?"):o=typeof r,(i=l?f(l):null)&&(P+=`

Check the render method of \``+i+"`."),i=29,o=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(o+"."+P)),P=null}return g=Q(i,o,g,b),g.elementType=r,g.type=P,g.lanes=w,g._debugOwner=l,g}function s2(r,g,o){return g=s4(r.type,r.key,r.props,r._owner,g,o),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function Sl(r,g,o,l){return r=Q(7,r,l,g),r.lanes=o,r}function r6(r,g,o){return r=Q(6,r,null,g),r.lanes=o,r}function GO(r){var g=Q(18,null,null,Lr);return g.stateNode=r,g}function g6(r,g,o){return g=Q(4,r.children!==null?r.children:[],r.key,g),g.lanes=o,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function lv(r,g){if(typeof r==="object"&&r!==null){var o=Yi.get(r);if(o!==void 0)return o;return g={value:r,source:g,stack:tr(g)},Yi.set(r,g),g}return{value:r,source:g,stack:tr(g)}}function y0(r,g){F1(),q5[A5++]=ab,q5[A5++]=iu,iu=r,ab=g}function XO(r,g,o){F1(),nv[Fv++]=g1,nv[Fv++]=o1,nv[Fv++]=sl,sl=r;var l=g1;r=o1;var b=32-No(l)-1;l&=~(1<<b),o+=1;var w=32-No(g)+b;if(30<w){var i=b-b%5;w=(l&(1<<i)-1).toString(32),l>>=i,b-=i,g1=1<<32-No(g)+b|o<<b|l,o1=w+r}else g1=1<<w|o<<b|l,o1=r}function o6(r){F1(),r.return!==null&&(y0(r,1),XO(r,1,0))}function v6(r){for(;r===iu;)iu=q5[--A5],q5[A5]=null,ab=q5[--A5],q5[A5]=null;for(;r===sl;)sl=nv[--Fv],nv[Fv]=null,o1=nv[--Fv],nv[Fv]=null,g1=nv[--Fv],nv[Fv]=null}function YO(){return F1(),sl!==null?{id:g1,overflow:o1}:null}function JO(r,g){F1(),nv[Fv++]=g1,nv[Fv++]=o1,nv[Fv++]=sl,g1=g.id,o1=g.overflow,sl=r}function F1(){pr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function kl(r,g){if(r.return===null){if(Ov===null)Ov={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(Ov.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");Ov.distanceFromLeaf>g&&(Ov.distanceFromLeaf=g)}return Ov}var o=kl(r.return,g+1).children;if(0<o.length&&o[o.length-1].fiber===r)return o=o[o.length-1],o.distanceFromLeaf>g&&(o.distanceFromLeaf=g),o;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},o.push(g),g}function QO(){pr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function re(r,g){F0||(r=kl(r,0),r.serverProps=null,g!==null&&(g=gM(g),r.serverTail.push(g)))}function I1(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,o="",l=Ov;throw l!==null&&(Ov=null,o=D4(l)),ib(lv(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+o),r)),Ji}function zO(r){var{stateNode:g,type:o,memoizedProps:l}=r;switch(g[Mo]=r,g[Bo]=l,Q8(o,l),o){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(o=0;o<zw.length;o++)dr(zw[o],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":n1("input",l),dr("invalid",g),FP(g,l),IP(g,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":NP(g,l);break;case"select":n1("select",l),dr("invalid",g),mP(g,l);break;case"textarea":n1("textarea",l),dr("invalid",g),ZP(g,l),CP(g,l.value,l.defaultValue,l.children)}o=l.children,typeof o!=="string"&&typeof o!=="number"&&typeof o!=="bigint"||g.textContent===""+o||l.suppressHydrationWarning===!0||kA(g.textContent,o)?(l.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),l.onScroll!=null&&dr("scroll",g),l.onScrollEnd!=null&&dr("scrollend",g),l.onClick!=null&&(g.onclick=_0),g=!0):g=!1,g||I1(r,!0)}function KO(r){for(Wo=r.return;Wo;)switch(Wo.tag){case 5:case 31:case 13:Iv=!1;return;case 27:case 3:Iv=!0;return;default:Wo=Wo.return}}function Th(r){if(r!==Wo)return!1;if(!pr)return KO(r),pr=!0,!1;var g=r.tag,o;if(o=g!==3&&g!==27){if(o=g===5)o=r.type,o=!(o!=="form"&&o!=="button")||L8(r.type,r.memoizedProps);o=!o}if(o&&$g){for(o=$g;o;){var l=kl(r,0),b=gM(o);l.serverTail.push(b),o=b.type==="Suspense"?N8(o):uv(o.nextSibling)}I1(r)}if(KO(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");$g=N8(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");$g=N8(r)}else g===27?(g=$g,k1(r.type)?(r=HH,HH=null,$g=r):$g=g):$g=Wo?uv(r.stateNode.nextSibling):null;return!0}function Dl(){$g=Wo=null,F0=pr=!1}function l6(){var r=a1;return r!==null&&(To===null?To=r:To.push.apply(To,r),a1=null),r}function ib(r){a1===null?a1=[r]:a1.push(r)}function h6(){var r=Ov;if(r!==null){Ov=null;for(var g=D4(r);0<r.children.length;)r=r.children[0];er(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function ge(){M5=Hu=null,W5=!1}function N1(r,g,o){Jr(Qi,g._currentValue,r),g._currentValue=o,Jr(zi,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==zW&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=zW}function c0(r,g){r._currentValue=Qi.current;var o=zi.current;Wr(zi,g),r._currentRenderer=o,Wr(Qi,g)}function b6(r,g,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,l!==null&&(l.childLanes|=g)):l!==null&&(l.childLanes&g)!==g&&(l.childLanes|=g),r===o)break;r=r.return}r!==o&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function w6(r,g,o,l){var b=r.child;b!==null&&(b.return=r);for(;b!==null;){var w=b.dependencies;if(w!==null){var i=b.child;w=w.firstContext;r:for(;w!==null;){var P=w;w=b;for(var M=0;M<g.length;M++)if(P.context===g[M]){w.lanes|=o,P=w.alternate,P!==null&&(P.lanes|=o),b6(w.return,o,r),l||(i=null);break r}w=P.next}}else if(b.tag===18){if(i=b.return,i===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");i.lanes|=o,w=i.alternate,w!==null&&(w.lanes|=o),b6(i,o,r),i=null}else i=b.child;if(i!==null)i.return=b;else for(i=b;i!==null;){if(i===r){i=null;break}if(b=i.sibling,b!==null){b.return=i.return,i=b;break}i=i.return}b=i}}function Sh(r,g,o,l){r=null;for(var b=g,w=!1;b!==null;){if(!w){if((b.flags&524288)!==0)w=!0;else if((b.flags&262144)!==0)break}if(b.tag===10){var i=b.alternate;if(i===null)throw Error("Should have a current fiber. This is a bug in React.");if(i=i.memoizedProps,i!==null){var P=b.type;Zo(b.pendingProps.value,i.value)||(r!==null?r.push(P):r=[P])}}else if(b===ae.current){if(i=b.alternate,i===null)throw Error("Should have a current fiber. This is a bug in React.");i.memoizedState.memoizedState!==b.memoizedState.memoizedState&&(r!==null?r.push(nw):r=[nw])}b=b.return}r!==null&&w6(g,r,o,l),g.flags|=262144}function oe(r){for(r=r.firstContext;r!==null;){if(!Zo(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Vl(r){Hu=r,M5=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Lg(r){return W5&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),$O(Hu,r)}function ve(r,g){return Hu===null&&Vl(r),$O(r,g)}function $O(r,g){var o=g._currentValue;if(g={context:g,memoizedValue:o,next:null},M5===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");M5=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else M5=M5.next=g;return o}function e6(){return{controller:new kz,data:new Map,refCount:0}}function _l(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function Hb(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&Dz(Vz,function(){r.controller.abort()})}function i0(r,g,o){if((r&127)!==0)0>I0&&(I0=fg(),db=Pu(g),Ki=g,o!=null&&($i=C(o)),(og&(lo|Mv))!==uo&&(Zg=!0,s1=pb),r=Nb(),g=Ib(),r!==R5||g!==sb?R5=-1.1:g!==null&&(s1=pb),gh=r,sb=g);else if((r&4194048)!==0&&0>Nv&&(Nv=fg(),rw=Pu(g),KW=g,o!=null&&($W=C(o)),0>h1)){if(r=Nb(),g=Ib(),r!==gl||g!==oh)gl=-1.1;rl=r,oh=g}}function eJ(r){if(0>I0){I0=fg(),db=r._debugTask!=null?r._debugTask:null,(og&(lo|Mv))!==uo&&(s1=pb);var g=Nb(),o=Ib();g!==R5||o!==sb?R5=-1.1:o!==null&&(s1=pb),gh=g,sb=o}if(0>Nv&&(Nv=fg(),rw=r._debugTask!=null?r._debugTask:null,0>h1)){if(r=Nb(),g=Ib(),r!==gl||g!==oh)gl=-1.1;rl=r,oh=g}}function j0(){var r=rh;return rh=0,r}function le(r){var g=rh;return rh=r,g}function Pb(r){var g=rh;return rh+=r,g}function he(){Ur=$r=-1.1}function hv(){var r=$r;return $r=-1.1,r}function bv(r){0<=r&&($r=r)}function H0(){var r=Ig;return Ig=-0,r}function P0(r){0<=r&&(Ig=r)}function O0(){var r=ng;return ng=null,r}function q0(){var r=Zg;return Zg=!1,r}function u6(r){xo=fg(),0>r.actualStartTime&&(r.actualStartTime=xo)}function i6(r){if(0<=xo){var g=fg()-xo;r.actualDuration+=g,r.selfBaseDuration=g,xo=-1}}function UO(r){if(0<=xo){var g=fg()-xo;r.actualDuration+=g,xo=-1}}function A0(){if(0<=xo){var r=fg(),g=r-xo;xo=-1,rh+=g,Ig+=g,Ur=r}}function LO(r){ng===null&&(ng=[]),ng.push(r),l1===null&&(l1=[]),l1.push(r)}function M0(){xo=fg(),0>$r&&($r=xo)}function Ob(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function uJ(r,g){if(ow===null){var o=ow=[];Li=0,vh=G8(),G5={status:"pending",value:void 0,then:function(l){o.push(l)}}}return Li++,g.then(nO,nO),g}function nO(){if(--Li===0&&(-1<Nv||(h1=-1.1),ow!==null)){G5!==null&&(G5.status="fulfilled");var r=ow;ow=null,vh=0,G5=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function iJ(r,g){var o=[],l={status:"pending",value:null,reason:null,then:function(b){o.push(b)}};return r.then(function(){l.status="fulfilled",l.value=g;for(var b=0;b<o.length;b++)(0,o[b])(g)},function(b){l.status="rejected",l.reason=b;for(b=0;b<o.length;b++)(0,o[b])(void 0)}),l}function H6(){var r=lh.current;return r!==null?r:Rg.pooledCache}function be(r,g){g===null?Jr(lh,lh.current,r):Jr(lh,g.pool,r)}function FO(){var r=H6();return r===null?null:{parent:jg._currentValue,pool:r}}function IO(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function NO(r){return r=r.status,r==="fulfilled"||r==="rejected"}function BO(r,g,o){x.actQueue!==null&&(x.didUsePromise=!0);var l=r.thenables;if(o=l[o],o===void 0?l.push(g):o!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(_0,_0),g=o),g._debugInfo===void 0){r=performance.now(),l=g.displayName;var b={name:typeof l==="string"?l:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:b}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){b.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZO(r),r;default:if(typeof g.status==="string")g.then(_0,_0);else{if(r=Rg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(w){if(g.status==="pending"){var i=g;i.status="fulfilled",i.value=w}},function(w){if(g.status==="pending"){var i=g;i.status="rejected",i.reason=w}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,ZO(r),r}throw bh=g,uw=!0,X5}}function B1(r){try{return cz(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw bh=g,uw=!0,X5;throw g}}function mO(){if(bh===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=bh;return bh=null,uw=!1,r}function ZO(r){if(r===X5||r===Xu)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Oo(r){var g=Dr;return r!=null&&(Dr=g===null?r:g.concat(r)),g}function P6(){var r=Dr;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var o=r[g].debugTask;if(o!=null)return o}}return null}function we(r,g,o){for(var l=Object.keys(r.props),b=0;b<l.length;b++){var w=l[b];if(w!=="children"&&w!=="key"){g===null&&(g=s2(r,o.mode,0),g._debugInfo=Dr,g.return=o),er(g,function(i){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i)},w);break}}}function ee(r){var g=iw;return iw+=1,Y5===null&&(Y5=IO()),BO(Y5,r,g)}function qb(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function xO(r,g){if(g.$$typeof===$Q)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function ue(r,g){var o=P6();o!==null?o.run(xO.bind(null,r,g)):xO(r,g)}function CO(r,g){var o=C(r)||"Component";yW[o]||(yW[o]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,o,g,o))}function ie(r,g){var o=P6();o!==null?o.run(CO.bind(null,r,g)):CO(r,g)}function tO(r,g){var o=C(r)||"Component";cW[o]||(cW[o]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,o,g,o))}function He(r,g){var o=P6();o!==null?o.run(tO.bind(null,r,g)):tO(r,g)}function TO(r){function g(z,$){if(r){var L=z.deletions;L===null?(z.deletions=[$],z.flags|=16):L.push($)}}function o(z,$){if(!r)return null;for(;$!==null;)g(z,$),$=$.sibling;return null}function l(z){for(var $=new Map;z!==null;)z.key!==null?$.set(z.key,z):$.set(z.index,z),z=z.sibling;return $}function b(z,$){return z=E0(z,$),z.index=0,z.sibling=null,z}function w(z,$,L){if(z.index=L,!r)return z.flags|=1048576,$;if(L=z.alternate,L!==null)return L=L.index,L<$?(z.flags|=67108866,$):L;return z.flags|=67108866,$}function i(z){return r&&z.alternate===null&&(z.flags|=67108866),z}function P(z,$,L,D){if($===null||$.tag!==6)return $=r6(L,z.mode,D),$.return=z,$._debugOwner=z,$._debugTask=z._debugTask,$._debugInfo=Dr,$;return $=b($,L),$.return=z,$._debugInfo=Dr,$}function M(z,$,L,D){var ir=L.type;if(ir===g5)return $=n(z,$,L.props.children,D,L.key),we(L,$,z),$;if($!==null&&($.elementType===ir||AO($,L)||typeof ir==="object"&&ir!==null&&ir.$$typeof===iv&&B1(ir)===$.type))return $=b($,L.props),qb($,L),$.return=z,$._debugOwner=L._owner,$._debugInfo=Dr,$;return $=s2(L,z.mode,D),qb($,L),$.return=z,$._debugInfo=Dr,$}function R(z,$,L,D){if($===null||$.tag!==4||$.stateNode.containerInfo!==L.containerInfo||$.stateNode.implementation!==L.implementation)return $=g6(L,z.mode,D),$.return=z,$._debugInfo=Dr,$;return $=b($,L.children||[]),$.return=z,$._debugInfo=Dr,$}function n(z,$,L,D,ir){if($===null||$.tag!==7)return $=Sl(L,z.mode,D,ir),$.return=z,$._debugOwner=z,$._debugTask=z._debugTask,$._debugInfo=Dr,$;return $=b($,L),$.return=z,$._debugInfo=Dr,$}function F(z,$,L){if(typeof $==="string"&&$!==""||typeof $==="number"||typeof $==="bigint")return $=r6(""+$,z.mode,L),$.return=z,$._debugOwner=z,$._debugTask=z._debugTask,$._debugInfo=Dr,$;if(typeof $==="object"&&$!==null){switch($.$$typeof){case Q0:return L=s2($,z.mode,L),qb(L,$),L.return=z,z=Oo($._debugInfo),L._debugInfo=Dr,Dr=z,L;case r5:return $=g6($,z.mode,L),$.return=z,$._debugInfo=Dr,$;case iv:var D=Oo($._debugInfo);return $=B1($),z=F(z,$,L),Dr=D,z}if(oo($)||m($))return L=Sl($,z.mode,L,null),L.return=z,L._debugOwner=z,L._debugTask=z._debugTask,z=Oo($._debugInfo),L._debugInfo=Dr,Dr=z,L;if(typeof $.then==="function")return D=Oo($._debugInfo),z=F(z,ee($),L),Dr=D,z;if($.$$typeof===z0)return F(z,ve(z,$),L);ue(z,$)}return typeof $==="function"&&ie(z,$),typeof $==="symbol"&&He(z,$),null}function K(z,$,L,D){var ir=$!==null?$.key:null;if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return ir!==null?null:P(z,$,""+L,D);if(typeof L==="object"&&L!==null){switch(L.$$typeof){case Q0:return L.key===ir?(ir=Oo(L._debugInfo),z=M(z,$,L,D),Dr=ir,z):null;case r5:return L.key===ir?R(z,$,L,D):null;case iv:return ir=Oo(L._debugInfo),L=B1(L),z=K(z,$,L,D),Dr=ir,z}if(oo(L)||m(L)){if(ir!==null)return null;return ir=Oo(L._debugInfo),z=n(z,$,L,D,null),Dr=ir,z}if(typeof L.then==="function")return ir=Oo(L._debugInfo),z=K(z,$,ee(L),D),Dr=ir,z;if(L.$$typeof===z0)return K(z,$,ve(z,L),D);ue(z,L)}return typeof L==="function"&&ie(z,L),typeof L==="symbol"&&He(z,L),null}function B(z,$,L,D,ir){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return z=z.get(L)||null,P($,z,""+D,ir);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case Q0:return L=z.get(D.key===null?L:D.key)||null,z=Oo(D._debugInfo),$=M($,L,D,ir),Dr=z,$;case r5:return z=z.get(D.key===null?L:D.key)||null,R($,z,D,ir);case iv:var Fr=Oo(D._debugInfo);return D=B1(D),$=B(z,$,L,D,ir),Dr=Fr,$}if(oo(D)||m(D))return L=z.get(L)||null,z=Oo(D._debugInfo),$=n($,L,D,ir,null),Dr=z,$;if(typeof D.then==="function")return Fr=Oo(D._debugInfo),$=B(z,$,L,ee(D),ir),Dr=Fr,$;if(D.$$typeof===z0)return B(z,$,L,ve($,D),ir);ue($,D)}return typeof D==="function"&&ie($,D),typeof D==="symbol"&&He($,D),null}function br(z,$,L,D){if(typeof L!=="object"||L===null)return D;switch(L.$$typeof){case Q0:case r5:Y(z,$,L);var ir=L.key;if(typeof ir!=="string")break;if(D===null){D=new Set,D.add(ir);break}if(!D.has(ir)){D.add(ir);break}er($,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ir)});break;case iv:L=B1(L),br(z,$,L,D)}return D}function qr(z,$,L,D){for(var ir=null,Fr=null,zr=null,Xr=$,Tr=$=0,Ug=null;Xr!==null&&Tr<L.length;Tr++){Xr.index>Tr?(Ug=Xr,Xr=null):Ug=Xr.sibling;var Vg=K(z,Xr,L[Tr],D);if(Vg===null){Xr===null&&(Xr=Ug);break}ir=br(z,Vg,L[Tr],ir),r&&Xr&&Vg.alternate===null&&g(z,Xr),$=w(Vg,$,Tr),zr===null?Fr=Vg:zr.sibling=Vg,zr=Vg,Xr=Ug}if(Tr===L.length)return o(z,Xr),pr&&y0(z,Tr),Fr;if(Xr===null){for(;Tr<L.length;Tr++)Xr=F(z,L[Tr],D),Xr!==null&&(ir=br(z,Xr,L[Tr],ir),$=w(Xr,$,Tr),zr===null?Fr=Xr:zr.sibling=Xr,zr=Xr);return pr&&y0(z,Tr),Fr}for(Xr=l(Xr);Tr<L.length;Tr++)Ug=B(Xr,z,Tr,L[Tr],D),Ug!==null&&(ir=br(z,Ug,L[Tr],ir),r&&Ug.alternate!==null&&Xr.delete(Ug.key===null?Tr:Ug.key),$=w(Ug,$,Tr),zr===null?Fr=Ug:zr.sibling=Ug,zr=Ug);return r&&Xr.forEach(function(q1){return g(z,q1)}),pr&&y0(z,Tr),Fr}function Jg(z,$,L,D){if(L==null)throw Error("An iterable object provided no iterator.");for(var ir=null,Fr=null,zr=$,Xr=$=0,Tr=null,Ug=null,Vg=L.next();zr!==null&&!Vg.done;Xr++,Vg=L.next()){zr.index>Xr?(Tr=zr,zr=null):Tr=zr.sibling;var q1=K(z,zr,Vg.value,D);if(q1===null){zr===null&&(zr=Tr);break}Ug=br(z,q1,Vg.value,Ug),r&&zr&&q1.alternate===null&&g(z,zr),$=w(q1,$,Xr),Fr===null?ir=q1:Fr.sibling=q1,Fr=q1,zr=Tr}if(Vg.done)return o(z,zr),pr&&y0(z,Xr),ir;if(zr===null){for(;!Vg.done;Xr++,Vg=L.next())zr=F(z,Vg.value,D),zr!==null&&(Ug=br(z,zr,Vg.value,Ug),$=w(zr,$,Xr),Fr===null?ir=zr:Fr.sibling=zr,Fr=zr);return pr&&y0(z,Xr),ir}for(zr=l(zr);!Vg.done;Xr++,Vg=L.next())Tr=B(zr,z,Xr,Vg.value,D),Tr!==null&&(Ug=br(z,Tr,Vg.value,Ug),r&&Tr.alternate!==null&&zr.delete(Tr.key===null?Xr:Tr.key),$=w(Tr,$,Xr),Fr===null?ir=Tr:Fr.sibling=Tr,Fr=Tr);return r&&zr.forEach(function(WK){return g(z,WK)}),pr&&y0(z,Xr),ir}function sr(z,$,L,D){if(typeof L==="object"&&L!==null&&L.type===g5&&L.key===null&&(we(L,null,z),L=L.props.children),typeof L==="object"&&L!==null){switch(L.$$typeof){case Q0:var ir=Oo(L._debugInfo);r:{for(var Fr=L.key;$!==null;){if($.key===Fr){if(Fr=L.type,Fr===g5){if($.tag===7){o(z,$.sibling),D=b($,L.props.children),D.return=z,D._debugOwner=L._owner,D._debugInfo=Dr,we(L,D,z),z=D;break r}}else if($.elementType===Fr||AO($,L)||typeof Fr==="object"&&Fr!==null&&Fr.$$typeof===iv&&B1(Fr)===$.type){o(z,$.sibling),D=b($,L.props),qb(D,L),D.return=z,D._debugOwner=L._owner,D._debugInfo=Dr,z=D;break r}o(z,$);break}else g(z,$);$=$.sibling}L.type===g5?(D=Sl(L.props.children,z.mode,D,L.key),D.return=z,D._debugOwner=z,D._debugTask=z._debugTask,D._debugInfo=Dr,we(L,D,z),z=D):(D=s2(L,z.mode,D),qb(D,L),D.return=z,D._debugInfo=Dr,z=D)}return z=i(z),Dr=ir,z;case r5:r:{ir=L;for(L=ir.key;$!==null;){if($.key===L)if($.tag===4&&$.stateNode.containerInfo===ir.containerInfo&&$.stateNode.implementation===ir.implementation){o(z,$.sibling),D=b($,ir.children||[]),D.return=z,z=D;break r}else{o(z,$);break}else g(z,$);$=$.sibling}D=g6(ir,z.mode,D),D.return=z,z=D}return i(z);case iv:return ir=Oo(L._debugInfo),L=B1(L),z=sr(z,$,L,D),Dr=ir,z}if(oo(L))return ir=Oo(L._debugInfo),z=qr(z,$,L,D),Dr=ir,z;if(m(L)){if(ir=Oo(L._debugInfo),Fr=m(L),typeof Fr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var zr=Fr.call(L);if(zr===L){if(z.tag!==0||Object.prototype.toString.call(z.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(zr)!=="[object Generator]")_W||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),_W=!0}else L.entries!==Fr||Ni||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ni=!0);return z=Jg(z,$,zr,D),Dr=ir,z}if(typeof L.then==="function")return ir=Oo(L._debugInfo),z=sr(z,$,ee(L),D),Dr=ir,z;if(L.$$typeof===z0)return sr(z,$,ve(z,L),D);ue(z,L)}if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return ir=""+L,$!==null&&$.tag===6?(o(z,$.sibling),D=b($,ir),D.return=z,z=D):(o(z,$),D=r6(ir,z.mode,D),D.return=z,D._debugOwner=z,D._debugTask=z._debugTask,D._debugInfo=Dr,z=D),i(z);return typeof L==="function"&&ie(z,L),typeof L==="symbol"&&He(z,L),o(z,$)}return function(z,$,L,D){var ir=Dr;Dr=null;try{iw=0;var Fr=sr(z,$,L,D);return Y5=null,Fr}catch(Ug){if(Ug===X5||Ug===Xu)throw Ug;var zr=Q(29,Ug,null,z.mode);zr.lanes=D,zr.return=z;var Xr=zr._debugInfo=Dr;if(zr._debugOwner=z._debugOwner,zr._debugTask=z._debugTask,Xr!=null){for(var Tr=Xr.length-1;0<=Tr;Tr--)if(typeof Xr[Tr].stack==="string"){zr._debugOwner=Xr[Tr],zr._debugTask=Xr[Tr].debugTask;break}}return zr}finally{Dr=ir}}}function SO(r,g){var o=oo(r);return r=!o&&typeof m(r)==="function",o||r?(o=o?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,g,o),!1):!0}function O6(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function q6(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function m1(r){return{lane:r,tag:fW,payload:null,callback:null,next:null}}function Z1(r,g,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,mi===l&&!dW){var b=C(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,b),dW=!0}if((og&lo)!==uo)return b=l.pending,b===null?g.next=g:(g.next=b.next,b.next=g),l.pending=g,g=d2(r),qO(r,null,o),g;return p2(r,l,g,o),d2(r)}function Ab(r,g,o){if(g=g.updateQueue,g!==null&&(g=g.shared,(o&4194048)!==0)){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,Bl(r,o)}}function Pe(r,g){var{updateQueue:o,alternate:l}=r;if(l!==null&&(l=l.updateQueue,o===l)){var b=null,w=null;if(o=o.firstBaseUpdate,o!==null){do{var i={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};w===null?b=w=i:w=w.next=i,o=o.next}while(o!==null);w===null?b=w=g:w=w.next=g}else b=w=g;o={baseState:l.baseState,firstBaseUpdate:b,lastBaseUpdate:w,shared:l.shared,callbacks:l.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=g:r.next=g,o.lastBaseUpdate=g}function Mb(){if(Zi){var r=G5;if(r!==null)throw r}}function Wb(r,g,o,l){Zi=!1;var b=r.updateQueue;ol=!1,mi=b.shared;var{firstBaseUpdate:w,lastBaseUpdate:i}=b,P=b.shared.pending;if(P!==null){b.shared.pending=null;var M=P,R=M.next;M.next=null,i===null?w=R:i.next=R,i=M;var n=r.alternate;n!==null&&(n=n.updateQueue,P=n.lastBaseUpdate,P!==i&&(P===null?n.firstBaseUpdate=R:P.next=R,n.lastBaseUpdate=M))}if(w!==null){var F=b.baseState;i=0,n=R=M=null,P=w;do{var K=P.lane&-536870913,B=K!==P.lane;if(B?(Vr&K)===K:(l&K)===K){K!==0&&K===vh&&(Zi=!0),n!==null&&(n=n.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});r:{K=r;var br=P,qr=g,Jg=o;switch(br.tag){case aW:if(br=br.payload,typeof br==="function"){W5=!0;var sr=br.call(Jg,F,qr);if(K.mode&Uo){Xg(!0);try{br.call(Jg,F,qr)}finally{Xg(!1)}}W5=!1,F=sr;break r}F=br;break r;case Bi:K.flags=K.flags&-65537|128;case fW:if(sr=br.payload,typeof sr==="function"){if(W5=!0,br=sr.call(Jg,F,qr),K.mode&Uo){Xg(!0);try{sr.call(Jg,F,qr)}finally{Xg(!1)}}W5=!1}else br=sr;if(br===null||br===void 0)break r;F=cr({},F,br);break r;case pW:ol=!0}}K=P.callback,K!==null&&(r.flags|=64,B&&(r.flags|=8192),B=b.callbacks,B===null?b.callbacks=[K]:B.push(K))}else B={lane:K,tag:P.tag,payload:P.payload,callback:P.callback,next:null},n===null?(R=n=B,M=F):n=n.next=B,i|=K;if(P=P.next,P===null)if(P=b.shared.pending,P===null)break;else B=P,P=B.next,B.next=null,b.lastBaseUpdate=B,b.shared.pending=null}while(1);n===null&&(M=F),b.baseState=M,b.firstBaseUpdate=R,b.lastBaseUpdate=n,w===null&&(b.shared.lanes=0),hl|=i,r.lanes=i,r.memoizedState=F}mi=null}function kO(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function HJ(r,g){var o=r.shared.hiddenCallbacks;if(o!==null)for(r.shared.hiddenCallbacks=null,r=0;r<o.length;r++)kO(o[r],g)}function DO(r,g){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)kO(o[r],g)}function VO(r,g){var o=m0;Jr(Ju,o,r),Jr(J5,g,r),m0=o|g.baseLanes}function A6(r){Jr(Ju,m0,r),Jr(J5,J5.current,r)}function M6(r){m0=Ju.current,Wr(J5,r),Wr(Ju,r)}function x1(r){var g=r.alternate;Jr(Dg,Dg.current&Q5,r),Jr(qv,r,r),Bv===null&&(g===null||J5.current!==null?Bv=r:g.memoizedState!==null&&(Bv=r))}function W6(r){Jr(Dg,Dg.current,r),Jr(qv,r,r),Bv===null&&(Bv=r)}function _O(r){r.tag===22?(Jr(Dg,Dg.current,r),Jr(qv,r,r),Bv===null&&(Bv=r)):C1(r)}function C1(r){Jr(Dg,Dg.current,r),Jr(qv,qv.current,r)}function wv(r){Wr(qv,r),Bv===r&&(Bv=null),Wr(Dg,r)}function Oe(r){for(var g=r;g!==null;){if(g.tag===13){var o=g.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||F8(o)||I8(o)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function yr(){var r=Z;Zv===null?Zv=[r]:Zv.push(r)}function d(){var r=Z;if(Zv!==null&&(u1++,Zv[u1]!==r)){var g=C(nr);if(!sW.has(g)&&(sW.add(g),Zv!==null)){for(var o="",l=0;l<=u1;l++){var b=Zv[l],w=l===u1?r:b;for(b=l+1+". "+b;30>b.length;)b+=" ";b+=w+`
`,o+=b}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,o)}}}function kh(r){r===void 0||r===null||oo(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Z,typeof r)}function qe(){var r=C(nr);g9.has(r)||(g9.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function tg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function R6(r,g){if(Ow)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Z),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,Z,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var o=0;o<g.length&&o<r.length;o++)if(!Zo(r[o],g[o]))return!1;return!0}function G6(r,g,o,l,b,w){if(w1=w,nr=g,Zv=r!==null?r._debugHookTypes:null,u1=-1,Ow=r!==null&&r.type!==g.type,Object.prototype.toString.call(o)==="[object AsyncFunction]"||Object.prototype.toString.call(o)==="[object AsyncGeneratorFunction]")w=C(nr),xi.has(w)||(xi.add(w),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",w===null?"An unknown Component":"<"+w+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,x.H=r!==null&&r.memoizedState!==null?ti:Zv!==null?o9:Ci,eh=w=(g.mode&Uo)!==Lr;var i=ni(o,l,b);if(eh=!1,K5&&(i=X6(g,o,l,b)),w){Xg(!0);try{i=X6(g,o,l,b)}finally{Xg(!1)}}return EO(r,g),i}function EO(r,g){g._debugHookTypes=Zv,g.dependencies===null?e1!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:e1}):g.dependencies._debugThenableState=e1,x.H=qw;var o=Wg!==null&&Wg.next!==null;if(w1=0,Zv=Z=ag=Wg=nr=null,u1=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),zu=!1,Pw=0,e1=null,o)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||pg||(r=r.dependencies,r!==null&&oe(r)&&(pg=!0)),uw?(uw=!1,r=!0):r=!1,r&&(g=C(g)||"Unknown",r9.has(g)||xi.has(g)||(r9.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function X6(r,g,o,l){nr=r;var b=0;do{if(K5&&(e1=null),Pw=0,K5=!1,b>=fz)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(b+=1,Ow=!1,ag=Wg=null,r.updateQueue!=null){var w=r.updateQueue;w.lastEffect=null,w.events=null,w.stores=null,w.memoCache!=null&&(w.memoCache.index=0)}u1=-1,x.H=v9,w=ni(g,o,l)}while(K5);return w}function PJ(){var r=x.H,g=r.useState()[0];return g=typeof g.then==="function"?Rb(g):g,r=r.useState()[0],(Wg!==null?Wg.memoizedState:null)!==r&&(nr.flags|=1024),g}function Y6(){var r=Ku!==0;return Ku=0,r}function J6(r,g,o){g.updateQueue=r.updateQueue,g.flags=(g.mode&Ev)!==Lr?g.flags&-402655237:g.flags&-2053,r.lanes&=~o}function Q6(r){if(zu){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}zu=!1}w1=0,Zv=ag=Wg=nr=null,u1=-1,Z=null,K5=!1,Pw=Ku=0,e1=null}function Io(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ag===null?nr.memoizedState=ag=r:ag=ag.next=r,ag}function ig(){if(Wg===null){var r=nr.alternate;r=r!==null?r.memoizedState:null}else r=Wg.next;var g=ag===null?nr.memoizedState:ag.next;if(g!==null)ag=g,Wg=r;else{if(r===null){if(nr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Wg=r,r={memoizedState:Wg.memoizedState,baseState:Wg.baseState,baseQueue:Wg.baseQueue,queue:Wg.queue,next:null},ag===null?nr.memoizedState=ag=r:ag=ag.next=r}return ag}function Ae(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rb(r){var g=Pw;return Pw+=1,e1===null&&(e1=IO()),r=BO(e1,r,g),g=nr,(ag===null?g.memoizedState:ag.next)===null&&(g=g.alternate,x.H=g!==null&&g.memoizedState!==null?ti:Ci),r}function t1(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return Rb(r);if(r.$$typeof===z0)return Lg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function El(r){var g=null,o=nr.updateQueue;if(o!==null&&(g=o.memoCache),g==null){var l=nr.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(g={data:l.data.map(function(b){return b.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),o===null&&(o=Ae(),nr.updateQueue=o),o.memoCache=g,o=g.data[g.index],o===void 0||Ow)for(o=g.data[g.index]=Array(r),l=0;l<r;l++)o[l]=UQ;else o.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",o.length,r);return g.index++,o}function kv(r,g){return typeof g==="function"?g(r):g}function z6(r,g,o){var l=Io();if(o!==void 0){var b=o(g);if(eh){Xg(!0);try{o(g)}finally{Xg(!1)}}}else b=g;return l.memoizedState=l.baseState=b,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:b},l.queue=r,r=r.dispatch=WJ.bind(null,nr,r),[l.memoizedState,r]}function Dh(r){var g=ig();return K6(g,Wg,r)}function K6(r,g,o){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=o;var b=r.baseQueue,w=l.pending;if(w!==null){if(b!==null){var i=b.next;b.next=w.next,w.next=i}g.baseQueue!==b&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=b=w,l.pending=null}if(w=r.baseState,b===null)r.memoizedState=w;else{g=b.next;var P=i=null,M=null,R=g,n=!1;do{var F=R.lane&-536870913;if(F!==R.lane?(Vr&F)===F:(w1&F)===F){var K=R.revertLane;if(K===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),F===vh&&(n=!0);else if((w1&K)===K){R=R.next,K===vh&&(n=!0);continue}else F={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},M===null?(P=M=F,i=w):M=M.next=F,nr.lanes|=K,hl|=K;F=R.action,eh&&o(w,F),w=R.hasEagerState?R.eagerState:o(w,F)}else K={lane:F,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},M===null?(P=M=K,i=w):M=M.next=K,nr.lanes|=F,hl|=F;R=R.next}while(R!==null&&R!==g);if(M===null?i=w:M.next=P,!Zo(w,r.memoizedState)&&(pg=!0,n&&(o=G5,o!==null)))throw o;r.memoizedState=w,r.baseState=i,r.baseQueue=M,l.lastRenderedState=w}return b===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function Gb(r){var g=ig(),o=g.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=r;var{dispatch:l,pending:b}=o,w=g.memoizedState;if(b!==null){o.pending=null;var i=b=b.next;do w=r(w,i.action),i=i.next;while(i!==b);Zo(w,g.memoizedState)||(pg=!0),g.memoizedState=w,g.baseQueue===null&&(g.baseState=w),o.lastRenderedState=w}return[w,l]}function $6(r,g,o){var l=nr,b=Io();if(pr){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var w=o();z5||w===o()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),z5=!0)}else{if(w=g(),z5||(o=g(),Zo(w,o)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),z5=!0)),Rg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Vr&127)!==0||yO(l,g,w)}return b.memoizedState=w,o={value:w,getSnapshot:g},b.queue=o,Ge(jO.bind(null,l,o,r),[r]),l.flags|=2048,_h(mv|to,{destroy:void 0},cO.bind(null,l,o,w,g),null),w}function Me(r,g,o){var l=nr,b=ig(),w=pr;if(w){if(o===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");o=o()}else if(o=g(),!z5){var i=g();Zo(o,i)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),z5=!0)}if(i=!Zo((Wg||b).memoizedState,o))b.memoizedState=o,pg=!0;b=b.queue;var P=jO.bind(null,l,b,r);if(yo(2048,to,P,[r]),b.getSnapshot!==g||i||ag!==null&&ag.memoizedState.tag&mv){if(l.flags|=2048,_h(mv|to,{destroy:void 0},cO.bind(null,l,b,o,g),null),Rg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w||(w1&127)!==0||yO(l,g,o)}return o}function yO(r,g,o){r.flags|=16384,r={getSnapshot:g,value:o},g=nr.updateQueue,g===null?(g=Ae(),nr.updateQueue=g,g.stores=[r]):(o=g.stores,o===null?g.stores=[r]:o.push(r))}function cO(r,g,o,l){g.value=o,g.getSnapshot=l,fO(g)&&aO(r)}function jO(r,g,o){return o(function(){fO(g)&&(i0(2,"updateSyncExternalStore()",r),aO(r))})}function fO(r){var g=r.getSnapshot;r=r.value;try{var o=g();return!Zo(r,o)}catch(l){return!0}}function aO(r){var g=Ko(r,2);g!==null&&mg(g,r,2)}function U6(r){var g=Io();if(typeof r==="function"){var o=r;if(r=o(),eh){Xg(!0);try{o()}finally{Xg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:r},g}function L6(r){r=U6(r);var g=r.queue,o=Aq.bind(null,nr,g);return g.dispatch=o,[r.memoizedState,o]}function n6(r){var g=Io();g.memoizedState=g.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=o,g=V6.bind(null,nr,!0,o),o.dispatch=g,[r,g]}function pO(r,g){var o=ig();return dO(o,Wg,r,g)}function dO(r,g,o,l){return r.baseState=o,K6(r,Wg,typeof l==="function"?l:kv)}function sO(r,g){var o=ig();if(Wg!==null)return dO(o,Wg,r,g);return o.baseState=r,[r,o.queue.dispatch]}function OJ(r,g,o,l,b){if(Ke(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var w={payload:b,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){w.listeners.push(i)}};x.T!==null?o(!0):w.isTransition=!1,l(w),o=g.pending,o===null?(w.next=g.pending=w,rq(g,w)):(w.next=o.next,g.pending=o.next=w)}}function rq(r,g){var{action:o,payload:l}=g,b=r.state;if(g.isTransition){var w=x.T,i={};i._updatedFibers=new Set,x.T=i;try{var P=o(b,l),M=x.S;M!==null&&M(i,P),gq(r,g,P)}catch(R){F6(r,g,R)}finally{w!==null&&i.types!==null&&(w.types!==null&&w.types!==i.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),w.types=i.types),x.T=w,w===null&&i._updatedFibers&&(r=i._updatedFibers.size,i._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{i=o(b,l),gq(r,g,i)}catch(R){F6(r,g,R)}}function gq(r,g,o){o!==null&&typeof o==="object"&&typeof o.then==="function"?(x.asyncTransitions++,o.then(ze,ze),o.then(function(l){oq(r,g,l)},function(l){return F6(r,g,l)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):oq(r,g,o)}function oq(r,g,o){g.status="fulfilled",g.value=o,vq(g),r.state=o,g=r.pending,g!==null&&(o=g.next,o===g?r.pending=null:(o=o.next,g.next=o,rq(r,o)))}function F6(r,g,o){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do g.status="rejected",g.reason=o,vq(g),g=g.next;while(g!==l)}r.action=null}function vq(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function lq(r,g){return g}function Vh(r,g){if(pr){var o=Rg.formState;if(o!==null){r:{var l=nr;if(pr){if($g){g:{var b=$g;for(var w=Iv;b.nodeType!==8;){if(!w){b=null;break g}if(b=uv(b.nextSibling),b===null){b=null;break g}}w=b.data,b=w===wH||w===D9?b:null}if(b){$g=uv(b.nextSibling),l=b.data===wH;break r}}I1(l)}l=!1}l&&(g=o[0])}}return o=Io(),o.memoizedState=o.baseState=g,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lq,lastRenderedState:g},o.queue=l,o=Aq.bind(null,nr,l),l.dispatch=o,l=U6(!1),w=V6.bind(null,nr,!1,l.queue),l=Io(),b={state:g,dispatch:null,action:r,pending:null},l.queue=b,o=OJ.bind(null,nr,b,w,o),b.dispatch=o,l.memoizedState=r,[g,o,!1]}function We(r){var g=ig();return hq(g,Wg,r)}function hq(r,g,o){if(g=K6(r,g,lq)[0],r=Dh(kv)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var l=Rb(g)}catch(i){if(i===X5)throw Xu;throw i}else l=g;g=ig();var b=g.queue,w=b.dispatch;return o!==g.memoizedState&&(nr.flags|=2048,_h(mv|to,{destroy:void 0},qJ.bind(null,b,o),null)),[l,w,r]}function qJ(r,g){r.action=g}function Re(r){var g=ig(),o=Wg;if(o!==null)return hq(g,o,r);ig(),g=g.memoizedState,o=ig();var l=o.queue.dispatch;return o.memoizedState=r,[g,l,!1]}function _h(r,g,o,l){return r={tag:r,create:o,deps:l,inst:g,next:null},g=nr.updateQueue,g===null&&(g=Ae(),nr.updateQueue=g),o=g.lastEffect,o===null?g.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,g.lastEffect=r),r}function I6(r){var g=Io();return r={current:r},g.memoizedState=r}function yl(r,g,o,l){var b=Io();nr.flags|=r,b.memoizedState=_h(mv|g,{destroy:void 0},o,l===void 0?null:l)}function yo(r,g,o,l){var b=ig();l=l===void 0?null:l;var w=b.memoizedState.inst;Wg!==null&&l!==null&&R6(l,Wg.memoizedState.deps)?b.memoizedState=_h(g,w,o,l):(nr.flags|=r,b.memoizedState=_h(mv|g,w,o,l))}function Ge(r,g){(nr.mode&Ev)!==Lr?yl(276826112,to,r,g):yl(8390656,to,r,g)}function AJ(r){nr.flags|=4;var g=nr.updateQueue;if(g===null)g=Ae(),nr.updateQueue=g,g.events=[r];else{var o=g.events;o===null?g.events=[r]:o.push(r)}}function N6(r){var g=Io(),o={impl:r};return g.memoizedState=o,function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function Xe(r){var g=ig().memoizedState;return AJ({ref:g,nextImpl:r}),function(){if((og&lo)!==uo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function B6(r,g){var o=4194308;return(nr.mode&Ev)!==Lr&&(o|=134217728),yl(o,Av,r,g)}function bq(r,g){if(typeof g==="function"){r=r();var o=g(r);return function(){typeof o==="function"?o():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function m6(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null;var l=4194308;(nr.mode&Ev)!==Lr&&(l|=134217728),yl(l,Av,bq.bind(null,g,r),o)}function Ye(r,g,o){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),o=o!==null&&o!==void 0?o.concat([r]):null,yo(4,Av,bq.bind(null,g,r),o)}function Z6(r,g){return Io().memoizedState=[r,g===void 0?null:g],r}function Je(r,g){var o=ig();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R6(g,l[1]))return l[0];return o.memoizedState=[r,g],r}function x6(r,g){var o=Io();g=g===void 0?null:g;var l=r();if(eh){Xg(!0);try{r()}finally{Xg(!1)}}return o.memoizedState=[l,g],l}function Qe(r,g){var o=ig();g=g===void 0?null:g;var l=o.memoizedState;if(g!==null&&R6(g,l[1]))return l[0];if(l=r(),eh){Xg(!0);try{r()}finally{Xg(!1)}}return o.memoizedState=[l,g],l}function C6(r,g){var o=Io();return t6(o,r,g)}function wq(r,g){var o=ig();return uq(o,Wg.memoizedState,r,g)}function eq(r,g){var o=ig();return Wg===null?t6(o,r,g):uq(o,Wg.memoizedState,r,g)}function t6(r,g,o){if(o===void 0||(w1&1073741824)!==0&&(Vr&261930)===0)return r.memoizedState=g;return r.memoizedState=o,r=iA(),nr.lanes|=r,hl|=r,o}function uq(r,g,o,l){if(Zo(o,g))return o;if(J5.current!==null)return r=t6(r,o,l),Zo(r,g)||(pg=!0),r;if((w1&42)===0||(w1&1073741824)!==0&&(Vr&261930)===0)return pg=!0,r.memoizedState=o;return r=iA(),nr.lanes|=r,hl|=r,g}function ze(){x.asyncTransitions--}function iq(r,g,o,l,b){var w=eg.p;eg.p=w!==0&&w<_v?w:_v;var i=x.T,P={};P._updatedFibers=new Set,x.T=P,V6(r,!1,g,o);try{var M=b(),R=x.S;if(R!==null&&R(P,M),M!==null&&typeof M==="object"&&typeof M.then==="function"){x.asyncTransitions++,M.then(ze,ze);var n=iJ(M,l);Xb(r,g,n,ev(r))}else Xb(r,g,l,ev(r))}catch(F){Xb(r,g,{then:function(){},status:"rejected",reason:F},ev(r))}finally{eg.p=w,i!==null&&P.types!==null&&(i.types!==null&&i.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),i.types=P.types),x.T=i,i===null&&P._updatedFibers&&(r=P._updatedFibers.size,P._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function T6(r,g,o,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var b=Hq(r).queue;eJ(r),iq(r,b,g,Gh,o===null?J:function(){return Pq(r),o(l)})}function Hq(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Gh,baseState:Gh,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:Gh},next:null};var o={};return g.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:o},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function Pq(r){x.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=Hq(r);g.next===null&&(g=r.alternate.memoizedState),Xb(r,g.next.queue,{},ev(r))}function S6(){var r=U6(!1);return r=iq.bind(null,nr,r.queue,!0,!1),Io().memoizedState=r,[!1,r]}function Oq(){var r=Dh(kv)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Rb(r),g]}function qq(){var r=Gb(kv)[0],g=ig().memoizedState;return[typeof r==="boolean"?r:Rb(r),g]}function cl(){return Lg(nw)}function k6(){var r=Io(),g=Rg.identifierPrefix;if(pr){var o=o1,l=g1;o=(l&~(1<<32-No(l)-1)).toString(32)+o,g="_"+g+"R_"+o,o=Ku++,0<o&&(g+="H"+o.toString(32)),g+="_"}else o=jz++,g="_"+g+"r_"+o.toString(32)+"_";return r.memoizedState=g}function D6(){return Io().memoizedState=MJ.bind(null,nr)}function MJ(r,g){for(var o=r.return;o!==null;){switch(o.tag){case 24:case 3:var l=ev(o),b=m1(l),w=Z1(o,b,l);w!==null&&(i0(l,"refresh()",r),mg(w,o,l),Ab(w,o,l)),r=e6(),g!==null&&g!==void 0&&w!==null&&console.error("The seed argument is not enabled outside experimental channels."),b.payload={cache:r};return}o=o.return}}function WJ(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ev(r);var b={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};Ke(r)?Mq(g,b):(b=a4(r,g,b,l),b!==null&&(i0(l,"dispatch()",r),mg(b,r,l),Wq(b,g,l)))}function Aq(r,g,o){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=ev(r),Xb(r,g,o,l)&&i0(l,"setState()",r)}function Xb(r,g,o,l){var b={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ke(r))Mq(g,b);else{var w=r.alternate;if(r.lanes===0&&(w===null||w.lanes===0)&&(w=g.lastRenderedReducer,w!==null)){var i=x.H;x.H=cv;try{var P=g.lastRenderedState,M=w(P,o);if(b.hasEagerState=!0,b.eagerState=M,Zo(M,P))return p2(r,g,b,0),Rg===null&&a2(),!1}catch(R){}finally{x.H=i}}if(o=a4(r,g,b,l),o!==null)return mg(o,r,l),Wq(o,g,l),!0}return!1}function V6(r,g,o,l){if(x.T===null&&vh===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:G8(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ke(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=a4(r,o,l,2),g!==null&&(i0(2,"setOptimistic()",r),mg(g,r,2))}function Ke(r){var g=r.alternate;return r===nr||g!==null&&g===nr}function Mq(r,g){K5=zu=!0;var o=r.pending;o===null?g.next=g:(g.next=o.next,o.next=g),r.pending=g}function Wq(r,g,o){if((o&4194048)!==0){var l=g.lanes;l&=r.pendingLanes,o|=l,g.lanes=o,Bl(r,o)}}function _6(r){if(r!==null&&typeof r!=="function"){var g=String(r);q9.has(g)||(q9.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function E6(r,g,o,l){var b=r.memoizedState,w=o(l,b);if(r.mode&Uo){Xg(!0);try{w=o(l,b)}finally{Xg(!1)}}w===void 0&&(g=E(g)||"Component",i9.has(g)||(i9.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),b=w===null||w===void 0?b:cr({},b,w),r.memoizedState=b,r.lanes===0&&(r.updateQueue.baseState=b)}function Rq(r,g,o,l,b,w,i){var P=r.stateNode;if(typeof P.shouldComponentUpdate==="function"){if(o=P.shouldComponentUpdate(l,w,i),r.mode&Uo){Xg(!0);try{o=P.shouldComponentUpdate(l,w,i)}finally{Xg(!1)}}return o===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",E(g)||"Component"),o}return g.prototype&&g.prototype.isPureReactComponent?!eb(o,l)||!eb(b,w):!0}function Gq(r,g,o,l){var b=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(o,l),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(o,l),g.state!==b&&(r=C(r)||"Component",h9.has(r)||(h9.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),Ti.enqueueReplaceState(g,g.state,null))}function jl(r,g){var o=g;if("ref"in g){o={};for(var l in g)l!=="ref"&&(o[l]=g[l])}if(r=r.defaultProps){o===g&&(o=cr({},o));for(var b in r)o[b]===void 0&&(o[b]=r[b])}return o}function Xq(r){Mi(r),console.warn(`%s

%s
`,$5?"An error occurred in the <"+$5+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function Yq(r){var g=$5?"The above error occurred in the <"+$5+"> component.":"The above error occurred in one of your React components.",o="React will try to recreate this component tree from scratch using the error boundary you provided, "+((Si||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,g,o].slice(0),typeof r[0]==="string"?r.splice(0,1,a9+" "+r[0],p9,au+l+au,d9):r.splice(0,0,a9,p9,au+l+au,d9),r.unshift(console),l=AK.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,g,o)}function Jq(r){Mi(r)}function $e(r,g){try{$5=g.source?C(g.source):null,Si=null;var o=g.value;if(x.actQueue!==null)x.thrownErrors.push(o);else{var l=r.onUncaughtError;l(o,{componentStack:g.stack})}}catch(b){setTimeout(function(){throw b})}}function Qq(r,g,o){try{$5=o.source?C(o.source):null,Si=C(g);var l=r.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(b){setTimeout(function(){throw b})}}function y6(r,g,o){return o=m1(o),o.tag=Bi,o.payload={element:null},o.callback=function(){er(g.source,$e,r,g)},o}function c6(r){return r=m1(r),r.tag=Bi,r}function j6(r,g,o,l){var b=o.type.getDerivedStateFromError;if(typeof b==="function"){var w=l.value;r.payload=function(){return b(w)},r.callback=function(){MO(o),er(l.source,Qq,g,o,l)}}var i=o.stateNode;i!==null&&typeof i.componentDidCatch==="function"&&(r.callback=function(){MO(o),er(l.source,Qq,g,o,l),typeof b!=="function"&&(wl===null?wl=new Set([this]):wl.add(this)),_z(this,l),typeof b==="function"||(o.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",C(o)||"Unknown")})}function RJ(r,g,o,l,b){if(o.flags|=32768,U0&&Lb(r,b),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(g=o.alternate,g!==null&&Sh(g,o,b,!0),pr&&(F0=!0),o=qv.current,o!==null){switch(o.tag){case 31:case 13:return Bv===null?Ze():o.alternate===null&&Ng===H1&&(Ng=Lu),o.flags&=-257,o.flags|=65536,o.lanes=b,l===Yu?o.flags|=16384:(g=o.updateQueue,g===null?o.updateQueue=new Set([l]):g.add(l),A8(r,l,b)),!1;case 22:return o.flags|=65536,l===Yu?o.flags|=16384:(g=o.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=g):(o=g.retryQueue,o===null?g.retryQueue=new Set([l]):o.add(l)),A8(r,l,b)),!1}throw Error("Unexpected Suspense handler tag ("+o.tag+"). This is a bug in React.")}return A8(r,l,b),Ze(),!1}if(pr)return F0=!0,g=qv.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=b,l!==Ji&&ib(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),o))):(l!==Ji&&ib(lv(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),o)),r=r.current.alternate,r.flags|=65536,b&=-b,r.lanes|=b,l=lv(l,o),b=y6(r.stateNode,l,b),Pe(r,b),Ng!==vl&&(Ng=uh)),!1;var w=lv(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),o);if(Xw===null?Xw=[w]:Xw.push(w),Ng!==vl&&(Ng=uh),g===null)return!0;l=lv(l,o),o=g;do{switch(o.tag){case 3:return o.flags|=65536,r=b&-b,o.lanes|=r,r=y6(o.stateNode,l,r),Pe(o,r),!1;case 1:if(g=o.type,w=o.stateNode,(o.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||w!==null&&typeof w.componentDidCatch==="function"&&(wl===null||!wl.has(w))))return o.flags|=65536,b&=-b,o.lanes|=b,b=c6(b),j6(b,r,o,l),Pe(o,b),!1}o=o.return}while(o!==null);return!1}function qo(r,g,o,l){g.child=r===null?jW(g,null,o,l):wh(g,r.child,o,l)}function zq(r,g,o,l,b){o=o.render;var w=g.ref;if("ref"in l){var i={};for(var P in l)P!=="ref"&&(i[P]=l[P])}else i=l;if(Vl(g),l=G6(r,g,o,i,w,b),P=Y6(),r!==null&&!pg)return J6(r,g,b),f0(r,g,b);return pr&&P&&o6(g),g.flags|=1,qo(r,g,l,b),g.child}function Kq(r,g,o,l,b){if(r===null){var w=o.type;if(typeof w==="function"&&!d4(w)&&w.defaultProps===void 0&&o.compare===null)return o=Tl(w),g.tag=15,g.type=o,a6(g,w),$q(r,g,o,l,b);return r=s4(o.type,null,l,g,g.mode,b),r.ref=g.ref,r.return=g,g.child=r}if(w=r.child,!o8(r,b)){var i=w.memoizedProps;if(o=o.compare,o=o!==null?o:eb,o(i,l)&&r.ref===g.ref)return f0(r,g,b)}return g.flags|=1,r=E0(w,l),r.ref=g.ref,r.return=g,g.child=r}function $q(r,g,o,l,b){if(r!==null){var w=r.memoizedProps;if(eb(w,l)&&r.ref===g.ref&&g.type===r.type)if(pg=!1,g.pendingProps=l=w,o8(r,b))(r.flags&131072)!==0&&(pg=!0);else return g.lanes=r.lanes,f0(r,g,b)}return f6(r,g,o,l,b)}function Uq(r,g,o,l){var b=l.children,w=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((g.flags&128)!==0){if(w=w!==null?w.baseLanes|o:o,r!==null){l=g.child=r.child;for(b=0;l!==null;)b=b|l.lanes|l.childLanes,l=l.sibling;l=b&~w}else l=0,g.child=null;return Lq(r,g,w,o,l)}if((o&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&be(g,w!==null?w.cachePool:null),w!==null?VO(g,w):A6(g),_O(g);else return l=g.lanes=536870912,Lq(r,g,w!==null?w.baseLanes|o:o,o,l)}else w!==null?(be(g,w.cachePool),VO(g,w),C1(g),g.memoizedState=null):(r!==null&&be(g,null),A6(g),C1(g));return qo(r,g,b,o),g.child}function Yb(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:fb,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function Lq(r,g,o,l,b){var w=H6();return w=w===null?null:{parent:jg._currentValue,pool:w},g.memoizedState={baseLanes:o,cachePool:w},r!==null&&be(g,null),A6(g),_O(g),r!==null&&Sh(r,g,l,!0),g.childLanes=b,null}function Ue(r,g){var o=g.hidden;return o!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,o===!0?"hidden":o===!1?"hidden={false}":"hidden={...}",o?'mode="hidden"':'mode="visible"'),g=ne({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function nq(r,g,o){return wh(g,r.child,null,o),r=Ue(g,g.pendingProps),r.flags|=2,wv(g),g.memoizedState=null,r}function GJ(r,g,o){var l=g.pendingProps,b=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(pr){if(l.mode==="hidden")return r=Ue(g,l),g.lanes=536870912,Yb(null,r);if(W6(g),(r=$g)?(o=rM(r,Iv),o=o!==null&&o.data===Ah?o:null,o!==null&&(l={dehydrated:o,treeContext:YO(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GO(o),l.return=g,g.child=l,Wo=g,$g=null)):o=null,o===null)throw re(g,r),I1(g);return g.lanes=536870912,null}return Ue(g,l)}var w=r.memoizedState;if(w!==null){var i=w.dehydrated;if(W6(g),b)if(g.flags&256)g.flags&=-257,g=nq(r,g,o);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(QO(),(o&536870912)!==0&&me(g),pg||Sh(r,g,o,!1),b=(o&r.childLanes)!==0,pg||b){if(l=Rg,l!==null&&(i=ml(l,o),i!==0&&i!==w.retryLane))throw w.retryLane=i,Ko(r,i),mg(l,r,i),ki;Ze(),g=nq(r,g,o)}else r=w.treeContext,$g=uv(i.nextSibling),Wo=g,pr=!0,a1=null,F0=!1,Ov=null,Iv=!1,r!==null&&JO(g,r),g=Ue(g,l),g.flags|=4096;return g}return w=r.child,l={mode:l.mode,children:l.children},(o&536870912)!==0&&(o&r.lanes)!==0&&me(g),r=E0(w,l),r.ref=g.ref,g.child=r,r.return=g,r}function Le(r,g){var o=g.ref;if(o===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof o!=="function"&&typeof o!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==o)g.flags|=4194816}}function f6(r,g,o,l,b){if(o.prototype&&typeof o.prototype.render==="function"){var w=E(o)||"Unknown";A9[w]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",w,w),A9[w]=!0)}if(g.mode&Uo&&yv.recordLegacyContextWarning(g,null),r===null&&(a6(g,g.type),o.contextTypes&&(w=E(o)||"Unknown",W9[w]||(W9[w]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",w)))),Vl(g),o=G6(r,g,o,l,void 0,b),l=Y6(),r!==null&&!pg)return J6(r,g,b),f0(r,g,b);return pr&&l&&o6(g),g.flags|=1,qo(r,g,o,b),g.child}function Fq(r,g,o,l,b,w){if(Vl(g),u1=-1,Ow=r!==null&&r.type!==g.type,g.updateQueue=null,o=X6(g,l,o,b),EO(r,g),l=Y6(),r!==null&&!pg)return J6(r,g,w),f0(r,g,w);return pr&&l&&o6(g),g.flags|=1,qo(r,g,o,w),g.child}function Iq(r,g,o,l,b){switch(q(g)){case!1:var w=g.stateNode,i=new g.type(g.memoizedProps,w.context).state;w.updater.enqueueSetState(w,i,null);break;case!0:g.flags|=128,g.flags|=65536,w=Error("Simulated error coming from DevTools");var P=b&-b;if(g.lanes|=P,i=Rg,i===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");P=c6(P),j6(P,i,g,lv(w,g)),Pe(g,P)}if(Vl(g),g.stateNode===null){if(i=f1,w=o.contextType,"contextType"in o&&w!==null&&(w===void 0||w.$$typeof!==z0)&&!O9.has(o)&&(O9.add(o),P=w===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof w!=="object"?" However, it is set to a "+typeof w+".":w.$$typeof===D8?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(w).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",E(o)||"Component",P)),typeof w==="object"&&w!==null&&(i=Lg(w)),w=new o(l,i),g.mode&Uo){Xg(!0);try{w=new o(l,i)}finally{Xg(!1)}}if(i=g.memoizedState=w.state!==null&&w.state!==void 0?w.state:null,w.updater=Ti,g.stateNode=w,w._reactInternals=g,w._reactInternalInstance=l9,typeof o.getDerivedStateFromProps==="function"&&i===null&&(i=E(o)||"Component",b9.has(i)||(b9.add(i),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",i,w.state===null?"null":"undefined",i))),typeof o.getDerivedStateFromProps==="function"||typeof w.getSnapshotBeforeUpdate==="function"){var M=P=i=null;if(typeof w.componentWillMount==="function"&&w.componentWillMount.__suppressDeprecationWarning!==!0?i="componentWillMount":typeof w.UNSAFE_componentWillMount==="function"&&(i="UNSAFE_componentWillMount"),typeof w.componentWillReceiveProps==="function"&&w.componentWillReceiveProps.__suppressDeprecationWarning!==!0?P="componentWillReceiveProps":typeof w.UNSAFE_componentWillReceiveProps==="function"&&(P="UNSAFE_componentWillReceiveProps"),typeof w.componentWillUpdate==="function"&&w.componentWillUpdate.__suppressDeprecationWarning!==!0?M="componentWillUpdate":typeof w.UNSAFE_componentWillUpdate==="function"&&(M="UNSAFE_componentWillUpdate"),i!==null||P!==null||M!==null){w=E(o)||"Component";var R=typeof o.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";e9.has(w)||(e9.add(w),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,w,R,i!==null?`
  `+i:"",P!==null?`
  `+P:"",M!==null?`
  `+M:""))}}w=g.stateNode,i=E(o)||"Component",w.render||(o.prototype&&typeof o.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",i):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",i)),!w.getInitialState||w.getInitialState.isReactClassApproved||w.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",i),w.getDefaultProps&&!w.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",i),w.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",i),o.childContextTypes&&!P9.has(o)&&(P9.add(o),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",i)),o.contextTypes&&!H9.has(o)&&(H9.add(o),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",i)),typeof w.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",i),o.prototype&&o.prototype.isPureReactComponent&&typeof w.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",E(o)||"A pure component"),typeof w.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",i),typeof w.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",i),typeof w.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",i),typeof w.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",i),P=w.props!==l,w.props!==void 0&&P&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",i),w.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",i,i),typeof w.getSnapshotBeforeUpdate!=="function"||typeof w.componentDidUpdate==="function"||w9.has(o)||(w9.add(o),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",E(o))),typeof w.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof w.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",i),typeof o.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",i),(P=w.state)&&(typeof P!=="object"||oo(P))&&console.error("%s.state: must be set to an object or null",i),typeof w.getChildContext==="function"&&typeof o.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",i),w=g.stateNode,w.props=l,w.state=g.memoizedState,w.refs={},O6(g),i=o.contextType,w.context=typeof i==="object"&&i!==null?Lg(i):f1,w.state===l&&(i=E(o)||"Component",u9.has(i)||(u9.add(i),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",i))),g.mode&Uo&&yv.recordLegacyContextWarning(g,w),yv.recordUnsafeLifecycleWarnings(g,w),w.state=g.memoizedState,i=o.getDerivedStateFromProps,typeof i==="function"&&(E6(g,o,i,l),w.state=g.memoizedState),typeof o.getDerivedStateFromProps==="function"||typeof w.getSnapshotBeforeUpdate==="function"||typeof w.UNSAFE_componentWillMount!=="function"&&typeof w.componentWillMount!=="function"||(i=w.state,typeof w.componentWillMount==="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount==="function"&&w.UNSAFE_componentWillMount(),i!==w.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",C(g)||"Component"),Ti.enqueueReplaceState(w,w.state,null)),Wb(g,l,w,b),Mb(),w.state=g.memoizedState),typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),w=!0}else if(r===null){w=g.stateNode;var n=g.memoizedProps;P=jl(o,n),w.props=P;var F=w.context;M=o.contextType,i=f1,typeof M==="object"&&M!==null&&(i=Lg(M)),R=o.getDerivedStateFromProps,M=typeof R==="function"||typeof w.getSnapshotBeforeUpdate==="function",n=g.pendingProps!==n,M||typeof w.UNSAFE_componentWillReceiveProps!=="function"&&typeof w.componentWillReceiveProps!=="function"||(n||F!==i)&&Gq(g,w,l,i),ol=!1;var K=g.memoizedState;w.state=K,Wb(g,l,w,b),Mb(),F=g.memoizedState,n||K!==F||ol?(typeof R==="function"&&(E6(g,o,R,l),F=g.memoizedState),(P=ol||Rq(g,o,P,l,K,F,i))?(M||typeof w.UNSAFE_componentWillMount!=="function"&&typeof w.componentWillMount!=="function"||(typeof w.componentWillMount==="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount==="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728)):(typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),g.memoizedProps=l,g.memoizedState=F),w.props=l,w.state=F,w.context=i,w=P):(typeof w.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&Ev)!==Lr&&(g.flags|=134217728),w=!1)}else{w=g.stateNode,q6(r,g),i=g.memoizedProps,M=jl(o,i),w.props=M,R=g.pendingProps,K=w.context,F=o.contextType,P=f1,typeof F==="object"&&F!==null&&(P=Lg(F)),n=o.getDerivedStateFromProps,(F=typeof n==="function"||typeof w.getSnapshotBeforeUpdate==="function")||typeof w.UNSAFE_componentWillReceiveProps!=="function"&&typeof w.componentWillReceiveProps!=="function"||(i!==R||K!==P)&&Gq(g,w,l,P),ol=!1,K=g.memoizedState,w.state=K,Wb(g,l,w,b),Mb();var B=g.memoizedState;i!==R||K!==B||ol||r!==null&&r.dependencies!==null&&oe(r.dependencies)?(typeof n==="function"&&(E6(g,o,n,l),B=g.memoizedState),(M=ol||Rq(g,o,M,l,K,B,P)||r!==null&&r.dependencies!==null&&oe(r.dependencies))?(F||typeof w.UNSAFE_componentWillUpdate!=="function"&&typeof w.componentWillUpdate!=="function"||(typeof w.componentWillUpdate==="function"&&w.componentWillUpdate(l,B,P),typeof w.UNSAFE_componentWillUpdate==="function"&&w.UNSAFE_componentWillUpdate(l,B,P)),typeof w.componentDidUpdate==="function"&&(g.flags|=4),typeof w.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof w.componentDidUpdate!=="function"||i===r.memoizedProps&&K===r.memoizedState||(g.flags|=4),typeof w.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&K===r.memoizedState||(g.flags|=1024),g.memoizedProps=l,g.memoizedState=B),w.props=l,w.state=B,w.context=P,w=M):(typeof w.componentDidUpdate!=="function"||i===r.memoizedProps&&K===r.memoizedState||(g.flags|=4),typeof w.getSnapshotBeforeUpdate!=="function"||i===r.memoizedProps&&K===r.memoizedState||(g.flags|=1024),w=!1)}if(P=w,Le(r,g),i=(g.flags&128)!==0,P||i){if(P=g.stateNode,_o(g),i&&typeof o.getDerivedStateFromError!=="function")o=null,xo=-1;else if(o=mW(P),g.mode&Uo){Xg(!0);try{mW(P)}finally{Xg(!1)}}g.flags|=1,r!==null&&i?(g.child=wh(g,r.child,null,b),g.child=wh(g,null,o,b)):qo(r,g,o,b),g.memoizedState=P.state,r=g.child}else r=f0(r,g,b);return b=g.stateNode,w&&b.props!==l&&(U5||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",C(g)||"a component"),U5=!0),r}function Nq(r,g,o,l){return Dl(),g.flags|=256,qo(r,g,o,l),g.child}function a6(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=E(g)||"Unknown",R9[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),R9[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=E(g)||"Unknown",M9[g]||(console.error("%s: Function components do not support contextType.",g),M9[g]=!0))}function p6(r){return{baseLanes:r,cachePool:FO()}}function d6(r,g,o){return r=r!==null?r.childLanes&~o:0,g&&(r|=po),r}function Bq(r,g,o){var l,b=g.pendingProps;O(g)&&(g.flags|=128);var w=!1,i=(g.flags&128)!==0;if((l=i)||(l=r!==null&&r.memoizedState===null?!1:(Dg.current&Hw)!==0),l&&(w=!0,g.flags&=-129),l=(g.flags&32)!==0,g.flags&=-33,r===null){if(pr){if(w?x1(g):C1(g),(r=$g)?(o=rM(r,Iv),o=o!==null&&o.data!==Ah?o:null,o!==null&&(l={dehydrated:o,treeContext:YO(),retryLane:536870912,hydrationErrors:null},g.memoizedState=l,l=GO(o),l.return=g,g.child=l,Wo=g,$g=null)):o=null,o===null)throw re(g,r),I1(g);return I8(o)?g.lanes=32:g.lanes=536870912,null}var P=b.children;if(b=b.fallback,w){C1(g);var M=g.mode;return P=ne({mode:"hidden",children:P},M),b=Sl(b,M,o,null),P.return=g,b.return=g,P.sibling=b,g.child=P,b=g.child,b.memoizedState=p6(o),b.childLanes=d6(r,l,o),g.memoizedState=Di,Yb(null,b)}return x1(g),s6(g,P)}var R=r.memoizedState;if(R!==null){var n=R.dehydrated;if(n!==null){if(i)g.flags&256?(x1(g),g.flags&=-257,g=r8(r,g,o)):g.memoizedState!==null?(C1(g),g.child=r.child,g.flags|=128,g=null):(C1(g),P=b.fallback,M=g.mode,b=ne({mode:"visible",children:b.children},M),P=Sl(P,M,o,null),P.flags|=2,b.return=g,P.return=g,b.sibling=P,g.child=b,wh(g,r.child,null,o),b=g.child,b.memoizedState=p6(o),b.childLanes=d6(r,l,o),g.memoizedState=Di,g=Yb(null,b));else if(x1(g),QO(),(o&536870912)!==0&&me(g),I8(n)){if(l=n.nextSibling&&n.nextSibling.dataset,l){P=l.dgst;var F=l.msg;M=l.stck;var K=l.cstck}w=F,l=P,b=M,n=K,P=w,M=n,P=P?Error(P):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),P.stack=b||"",P.digest=l,l=M===void 0?null:M,b={value:P,source:null,stack:l},typeof l==="string"&&Yi.set(P,b),ib(b),g=r8(r,g,o)}else if(pg||Sh(r,g,o,!1),l=(o&r.childLanes)!==0,pg||l){if(l=Rg,l!==null&&(b=ml(l,o),b!==0&&b!==R.retryLane))throw R.retryLane=b,Ko(r,b),mg(l,r,b),ki;F8(n)||Ze(),g=r8(r,g,o)}else F8(n)?(g.flags|=192,g.child=r.child,g=null):(r=R.treeContext,$g=uv(n.nextSibling),Wo=g,pr=!0,a1=null,F0=!1,Ov=null,Iv=!1,r!==null&&JO(g,r),g=s6(g,b.children),g.flags|=4096);return g}}if(w)return C1(g),P=b.fallback,M=g.mode,K=r.child,n=K.sibling,b=E0(K,{mode:"hidden",children:b.children}),b.subtreeFlags=K.subtreeFlags&65011712,n!==null?P=E0(n,P):(P=Sl(P,M,o,null),P.flags|=2),P.return=g,b.return=g,b.sibling=P,g.child=b,Yb(null,b),b=g.child,P=r.child.memoizedState,P===null?P=p6(o):(M=P.cachePool,M!==null?(K=jg._currentValue,M=M.parent!==K?{parent:K,pool:K}:M):M=FO(),P={baseLanes:P.baseLanes|o,cachePool:M}),b.memoizedState=P,b.childLanes=d6(r,l,o),g.memoizedState=Di,Yb(r.child,b);return R!==null&&(o&62914560)===o&&(o&r.lanes)!==0&&me(g),x1(g),o=r.child,r=o.sibling,o=E0(o,{mode:"visible",children:b.children}),o.return=g,o.sibling=null,r!==null&&(l=g.deletions,l===null?(g.deletions=[r],g.flags|=16):l.push(r)),g.child=o,g.memoizedState=null,o}function s6(r,g){return g=ne({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function ne(r,g){return r=Q(22,r,null,g),r.lanes=0,r}function r8(r,g,o){return wh(g,r.child,null,o),r=s6(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function mq(r,g,o){r.lanes|=g;var l=r.alternate;l!==null&&(l.lanes|=g),b6(r.return,g,o)}function g8(r,g,o,l,b,w){var i=r.memoizedState;i===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:b,treeForkCount:w}:(i.isBackwards=g,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=o,i.tailMode=b,i.treeForkCount=w)}function Zq(r,g,o){var l=g.pendingProps,b=l.revealOrder,w=l.tail,i=l.children,P=Dg.current;if((l=(P&Hw)!==0)?(P=P&Q5|Hw,g.flags|=128):P&=Q5,Jr(Dg,P,g),P=b==null?"null":b,b!=="forwards"&&b!=="unstable_legacy-backwards"&&b!=="together"&&b!=="independent"&&!G9[P])if(G9[P]=!0,b==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(b==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof b==="string")switch(b.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',b,b.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',b,b.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',b)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',b);if(P=w==null?"null":w,!Uu[P])if(w==null){if(b==="forwards"||b==="backwards"||b==="unstable_legacy-backwards")Uu[P]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else w!=="visible"&&w!=="collapsed"&&w!=="hidden"?(Uu[P]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',w)):b!=="forwards"&&b!=="backwards"&&b!=="unstable_legacy-backwards"&&(Uu[P]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',w));r:if((b==="forwards"||b==="backwards"||b==="unstable_legacy-backwards")&&i!==void 0&&i!==null&&i!==!1)if(oo(i)){for(P=0;P<i.length;P++)if(!SO(i[P],P))break r}else if(P=m(i),typeof P==="function"){if(P=P.call(i))for(var M=P.next(),R=0;!M.done;M=P.next()){if(!SO(M.value,R))break r;R++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',b);if(qo(r,g,i,o),pr?(F1(),i=ab):i=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&mq(r,o,g);else if(r.tag===19)mq(r,o,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(b){case"forwards":o=g.child;for(b=null;o!==null;)r=o.alternate,r!==null&&Oe(r)===null&&(b=o),o=o.sibling;o=b,o===null?(b=g.child,g.child=null):(b=o.sibling,o.sibling=null),g8(g,!1,b,o,w,i);break;case"backwards":case"unstable_legacy-backwards":o=null,b=g.child;for(g.child=null;b!==null;){if(r=b.alternate,r!==null&&Oe(r)===null){g.child=b;break}r=b.sibling,b.sibling=o,o=b,b=r}g8(g,!0,o,null,w,i);break;case"together":g8(g,!1,null,null,void 0,i);break;default:g.memoizedState=null}return g.child}function f0(r,g,o){if(r!==null&&(g.dependencies=r.dependencies),xo=-1,hl|=g.lanes,(o&g.childLanes)===0)if(r!==null){if(Sh(r,g,o,!1),(o&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,o=E0(r,r.pendingProps),g.child=o;for(o.return=g;r.sibling!==null;)r=r.sibling,o=o.sibling=E0(r,r.pendingProps),o.return=g;o.sibling=null}return g.child}function o8(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&oe(r)?!0:!1}function XJ(r,g,o){switch(g.tag){case 3:k(g,g.stateNode.containerInfo),N1(g,jg,r.memoizedState.cache),Dl();break;case 27:case 5:or(g);break;case 4:k(g,g.stateNode.containerInfo);break;case 10:N1(g,g.type,g.memoizedProps.value);break;case 12:(o&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var l=g.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,W6(g),null;break;case 13:if(l=g.memoizedState,l!==null){if(l.dehydrated!==null)return x1(g),g.flags|=128,null;if((o&g.child.childLanes)!==0)return Bq(r,g,o);return x1(g),r=f0(r,g,o),r!==null?r.sibling:null}x1(g);break;case 19:var b=(r.flags&128)!==0;if(l=(o&g.childLanes)!==0,l||(Sh(r,g,o,!1),l=(o&g.childLanes)!==0),b){if(l)return Zq(r,g,o);g.flags|=128}if(b=g.memoizedState,b!==null&&(b.rendering=null,b.tail=null,b.lastEffect=null),Jr(Dg,Dg.current,g),l)break;else return null;case 22:return g.lanes=0,Uq(r,g,o,g.pendingProps);case 24:N1(g,jg,r.memoizedState.cache)}return f0(r,g,o)}function v8(r,g,o){if(g._debugNeedsRemount&&r!==null){o=s4(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),o._debugStack=g._debugStack,o._debugTask=g._debugTask;var l=g.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,o.index=g.index,o.sibling=g.sibling,o.return=g.return,o.ref=g.ref,o._debugInfo=g._debugInfo,g===l.child)l.child=o;else{var b=l.child;if(b===null)throw Error("Expected parent to have a child.");for(;b.sibling!==g;)if(b=b.sibling,b===null)throw Error("Expected to find the previous sibling.");b.sibling=o}return g=l.deletions,g===null?(l.deletions=[r],l.flags|=16):g.push(r),o.flags|=2,o}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)pg=!0;else{if(!o8(r,o)&&(g.flags&128)===0)return pg=!1,XJ(r,g,o);pg=(r.flags&131072)!==0?!0:!1}else{if(pg=!1,l=pr)F1(),l=(g.flags&1048576)!==0;l&&(l=g.index,F1(),XO(g,ab,l))}switch(g.lanes=0,g.tag){case 16:r:if(l=g.pendingProps,r=B1(g.elementType),g.type=r,typeof r==="function")d4(r)?(l=jl(r,l),g.tag=1,g.type=r=Tl(r),g=Iq(null,g,r,l,o)):(g.tag=0,a6(g,r),g.type=r=Tl(r),g=f6(null,g,r,l,o));else{if(r!==void 0&&r!==null){if(b=r.$$typeof,b===Cb){g.tag=11,g.type=r=p4(r),g=zq(null,g,r,l,o);break r}else if(b===fe){g.tag=14,g=Kq(null,g,r,l,o);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===iv&&(g=" Did you wrap a component in React.lazy() more than once?"),o=E(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+o+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return f6(r,g,g.type,g.pendingProps,o);case 1:return l=g.type,b=jl(l,g.pendingProps),Iq(r,g,l,b,o);case 3:r:{if(k(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=g.pendingProps;var w=g.memoizedState;b=w.element,q6(r,g),Wb(g,l,null,o);var i=g.memoizedState;if(l=i.cache,N1(g,jg,l),l!==w.cache&&w6(g,[jg],o,!0),Mb(),l=i.element,w.isDehydrated)if(w={element:l,isDehydrated:!1,cache:i.cache},g.updateQueue.baseState=w,g.memoizedState=w,g.flags&256){g=Nq(r,g,l,o);break r}else if(l!==b){b=lv(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),ib(b),g=Nq(r,g,l,o);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}$g=uv(r.firstChild),Wo=g,pr=!0,a1=null,F0=!1,Ov=null,Iv=!0,o=jW(g,null,l,o);for(g.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Dl(),l===b){g=f0(r,g,o);break r}qo(r,g,l,o)}g=g.child}return g;case 26:return Le(r,g),r===null?(o=bM(g.type,null,g.pendingProps,null))?g.memoizedState=o:pr||(o=g.type,r=g.pendingProps,l=xr(V1.current),l=Te(l).createElement(o),l[Mo]=g,l[Bo]=r,Ao(l,o,r),Kr(l),g.stateNode=l):g.memoizedState=bM(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return or(g),r===null&&pr&&(l=xr(V1.current),b=hr(),l=g.stateNode=lM(g.type,g.pendingProps,l,b,!1),F0||(b=yA(l,g.type,g.pendingProps,b),b!==null&&(kl(g,0).serverProps=b)),Wo=g,Iv=!0,b=$g,k1(g.type)?(HH=b,$g=uv(l.firstChild)):$g=b),qo(r,g,g.pendingProps.children,o),Le(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&pr&&(w=hr(),l=V4(g.type,w.ancestorInfo),b=$g,(i=!b)||(i=eQ(b,g.type,g.pendingProps,Iv),i!==null?(g.stateNode=i,F0||(w=yA(i,g.type,g.pendingProps,w),w!==null&&(kl(g,0).serverProps=w)),Wo=g,$g=uv(i.firstChild),Iv=!1,w=!0):w=!1,i=!w),i&&(l&&re(g,b),I1(g))),or(g),b=g.type,w=g.pendingProps,i=r!==null?r.memoizedProps:null,l=w.children,L8(b,w)?l=null:i!==null&&L8(b,i)&&(g.flags|=32),g.memoizedState!==null&&(b=G6(r,g,PJ,null,null,o),nw._currentValue=b),Le(r,g),qo(r,g,l,o),g.child;case 6:return r===null&&pr&&(o=g.pendingProps,r=hr(),l=r.ancestorInfo.current,o=l!=null?_2(o,l.tag,r.ancestorInfo.implicitRootScope):!0,r=$g,(l=!r)||(l=uQ(r,g.pendingProps,Iv),l!==null?(g.stateNode=l,Wo=g,$g=null,l=!0):l=!1,l=!l),l&&(o&&re(g,r),I1(g))),null;case 13:return Bq(r,g,o);case 4:return k(g,g.stateNode.containerInfo),l=g.pendingProps,r===null?g.child=wh(g,null,l,o):qo(r,g,l,o),g.child;case 11:return zq(r,g,g.type,g.pendingProps,o);case 7:return qo(r,g,g.pendingProps,o),g.child;case 8:return qo(r,g,g.pendingProps.children,o),g.child;case 12:return g.flags|=4,g.flags|=2048,l=g.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,qo(r,g,g.pendingProps.children,o),g.child;case 10:return l=g.type,b=g.pendingProps,w=b.value,"value"in b||X9||(X9=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),N1(g,l,w),qo(r,g,b.children,o),g.child;case 9:return b=g.type._context,l=g.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Vl(g),b=Lg(b),l=ni(l,b,void 0),g.flags|=1,qo(r,g,l,o),g.child;case 14:return Kq(r,g,g.type,g.pendingProps,o);case 15:return $q(r,g,g.type,g.pendingProps,o);case 19:return Zq(r,g,o);case 31:return GJ(r,g,o);case 22:return Uq(r,g,o,g.pendingProps);case 24:return Vl(g),l=Lg(jg),r===null?(b=H6(),b===null&&(b=Rg,w=e6(),b.pooledCache=w,_l(w),w!==null&&(b.pooledCacheLanes|=o),b=w),g.memoizedState={parent:l,cache:b},O6(g),N1(g,jg,b)):((r.lanes&o)!==0&&(q6(r,g),Wb(g,null,null,o),Mb()),b=r.memoizedState,w=g.memoizedState,b.parent!==l?(b={parent:l,cache:l},g.memoizedState=b,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=b),N1(g,jg,l)):(l=w.cache,N1(g,jg,l),l!==b.cache&&w6(g,[jg],o,!0))),qo(r,g,g.pendingProps.children,o),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function a0(r){r.flags|=4}function l8(r,g,o,l,b){if(g=(r.mode&Sz)!==Lr)g=!1;if(g){if(r.flags|=16777216,(b&335544128)===b)if(r.stateNode.complete)r.flags|=8192;else if(qA())r.flags|=8192;else throw bh=Yu,Ii}else r.flags&=-16777217}function xq(r,g){if(g.type!=="stylesheet"||(g.state.loading&xv)!==Rh)r.flags&=-16777217;else if(r.flags|=16777216,!HM(g))if(qA())r.flags|=8192;else throw bh=Yu,Ii}function Fe(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?mh():536870912,r.lanes|=g,Ph|=g)}function Jb(r,g){if(!pr)switch(r.tailMode){case"hidden":g=r.tail;for(var o=null;g!==null;)g.alternate!==null&&(o=g),g=g.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function Yg(r){var g=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(g)if((r.mode&kr)!==Lr){for(var{selfBaseDuration:b,child:w}=r;w!==null;)o|=w.lanes|w.childLanes,l|=w.subtreeFlags&65011712,l|=w.flags&65011712,b+=w.treeBaseDuration,w=w.sibling;r.treeBaseDuration=b}else for(b=r.child;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags&65011712,l|=b.flags&65011712,b.return=r,b=b.sibling;else if((r.mode&kr)!==Lr){b=r.actualDuration,w=r.selfBaseDuration;for(var i=r.child;i!==null;)o|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,b+=i.actualDuration,w+=i.treeBaseDuration,i=i.sibling;r.actualDuration=b,r.treeBaseDuration=w}else for(b=r.child;b!==null;)o|=b.lanes|b.childLanes,l|=b.subtreeFlags,l|=b.flags,b.return=r,b=b.sibling;return r.subtreeFlags|=l,r.childLanes=o,g}function YJ(r,g,o){var l=g.pendingProps;switch(v6(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yg(g),null;case 1:return Yg(g),null;case 3:if(o=g.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),g.memoizedState.cache!==l&&(g.flags|=2048),c0(jg,g),s(g),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),r===null||r.child===null)Th(g)?(h6(),a0(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,l6());return Yg(g),null;case 26:var{type:b,memoizedState:w}=g;return r===null?(a0(g),w!==null?(Yg(g),xq(g,w)):(Yg(g),l8(g,b,null,l,o))):w?w!==r.memoizedState?(a0(g),Yg(g),xq(g,w)):(Yg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==l&&a0(g),Yg(g),l8(g,b,r,l,o)),null;case 27:if(Mr(g),o=xr(V1.current),b=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Yg(g),null}r=hr(),Th(g)?zO(g,r):(r=lM(b,l,o,r,!0),g.stateNode=r,a0(g))}return Yg(g),null;case 5:if(Mr(g),b=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(!l){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Yg(g),null}var i=hr();if(Th(g))zO(g,i);else{switch(w=xr(V1.current),V4(b,i.ancestorInfo),i=i.context,w=Te(w),i){case Z5:w=w.createElementNS(h5,b);break;case cu:w=w.createElementNS(ou,b);break;default:switch(b){case"svg":w=w.createElementNS(h5,b);break;case"math":w=w.createElementNS(ou,b);break;case"script":w=w.createElement("div"),w.innerHTML="<script></script>",w=w.removeChild(w.firstChild);break;case"select":w=typeof l.is==="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?w.multiple=!0:l.size&&(w.size=l.size);break;default:w=typeof l.is==="string"?w.createElement(b,{is:l.is}):w.createElement(b),b.indexOf("-")===-1&&(b!==b.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",b),Object.prototype.toString.call(w)!=="[object HTMLUnknownElement]"||Vv.call(_9,b)||(_9[b]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",b)))}}w[Mo]=g,w[Bo]=l;r:for(i=g.child;i!==null;){if(i.tag===5||i.tag===6)w.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===g)break r;for(;i.sibling===null;){if(i.return===null||i.return===g)break r;i=i.return}i.sibling.return=i.return,i=i.sibling}g.stateNode=w;r:switch(Ao(w,b,l),b){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&a0(g)}}return Yg(g),l8(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,o),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==l&&a0(g);else{if(typeof l!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=xr(V1.current),o=hr(),Th(g)){if(r=g.stateNode,o=g.memoizedProps,b=!F0,l=null,w=Wo,w!==null)switch(w.tag){case 3:b&&(b=oM(r,o,l),b!==null&&(kl(g,0).serverProps=b));break;case 27:case 5:l=w.memoizedProps,b&&(b=oM(r,o,l),b!==null&&(kl(g,0).serverProps=b))}r[Mo]=g,r=r.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||kA(r.nodeValue,o)?!0:!1,r||I1(g,!0)}else b=o.ancestorInfo.current,b!=null&&_2(l,b.tag,o.ancestorInfo.implicitRootScope),r=Te(r).createTextNode(l),r[Mo]=g,g.stateNode=r}return Yg(g),null;case 31:if(o=g.memoizedState,r===null||r.memoizedState!==null){if(l=Th(g),o!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Mo]=g,Yg(g),(g.mode&kr)!==Lr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else h6(),Dl(),(g.flags&128)===0&&(o=g.memoizedState=null),g.flags|=4,Yg(g),(g.mode&kr)!==Lr&&o!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else o=l6(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=o),r=!0;if(!r){if(g.flags&256)return wv(g),g;return wv(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Yg(g),null;case 13:if(l=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(b=l,w=Th(g),b!==null&&b.dehydrated!==null){if(r===null){if(!w)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(w=g.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");w[Mo]=g,Yg(g),(g.mode&kr)!==Lr&&b!==null&&(b=g.child,b!==null&&(g.treeBaseDuration-=b.treeBaseDuration))}else h6(),Dl(),(g.flags&128)===0&&(b=g.memoizedState=null),g.flags|=4,Yg(g),(g.mode&kr)!==Lr&&b!==null&&(b=g.child,b!==null&&(g.treeBaseDuration-=b.treeBaseDuration));b=!1}else b=l6(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=b),b=!0;if(!b){if(g.flags&256)return wv(g),g;return wv(g),null}}if(wv(g),(g.flags&128)!==0)return g.lanes=o,(g.mode&kr)!==Lr&&Ob(g),g;return o=l!==null,r=r!==null&&r.memoizedState!==null,o&&(l=g.child,b=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(b=l.alternate.memoizedState.cachePool.pool),w=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(w=l.memoizedState.cachePool.pool),w!==b&&(l.flags|=2048)),o!==r&&o&&(g.child.flags|=8192),Fe(g,g.updateQueue),Yg(g),(g.mode&kr)!==Lr&&o&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return s(g),r===null&&Y8(g.stateNode.containerInfo),Yg(g),null;case 10:return c0(g.type,g),Yg(g),null;case 19:if(Wr(Dg,g),l=g.memoizedState,l===null)return Yg(g),null;if(b=(g.flags&128)!==0,w=l.rendering,w===null)if(b)Jb(l,!1);else{if(Ng!==H1||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(w=Oe(r),w!==null){g.flags|=128,Jb(l,!1),r=w.updateQueue,g.updateQueue=r,Fe(g,r),g.subtreeFlags=0,r=o;for(o=g.child;o!==null;)RO(o,r),o=o.sibling;return Jr(Dg,Dg.current&Q5|Hw,g),pr&&y0(g,l.treeForkCount),g.child}r=r.sibling}l.tail!==null&&bo()>mu&&(g.flags|=128,b=!0,Jb(l,!1),g.lanes=4194304)}else{if(!b)if(r=Oe(w),r!==null){if(g.flags|=128,b=!0,r=r.updateQueue,g.updateQueue=r,Fe(g,r),Jb(l,!0),l.tail===null&&l.tailMode==="hidden"&&!w.alternate&&!pr)return Yg(g),null}else 2*bo()-l.renderingStartTime>mu&&o!==536870912&&(g.flags|=128,b=!0,Jb(l,!1),g.lanes=4194304);l.isBackwards?(w.sibling=g.child,g.child=w):(r=l.last,r!==null?r.sibling=w:g.child=w,l.last=w)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=bo(),r.sibling=null,o=Dg.current,o=b?o&Q5|Hw:o&Q5,Jr(Dg,o,g),pr&&y0(g,l.treeForkCount),r;return Yg(g),null;case 22:case 23:return wv(g),M6(g),l=g.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(g.flags|=8192):l&&(g.flags|=8192),l?(o&536870912)!==0&&(g.flags&128)===0&&(Yg(g),g.subtreeFlags&6&&(g.flags|=8192)):Yg(g),o=g.updateQueue,o!==null&&Fe(g,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),l=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(l=g.memoizedState.cachePool.pool),l!==o&&(g.flags|=2048),r!==null&&Wr(lh,g),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),g.memoizedState.cache!==o&&(g.flags|=2048),c0(jg,g),Yg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function JJ(r,g){switch(v6(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Ob(g),g):null;case 3:return c0(jg,g),s(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Mr(g),null;case 31:if(g.memoizedState!==null){if(wv(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Dl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Ob(g),g):null;case 13:if(wv(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");Dl()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Ob(g),g):null;case 19:return Wr(Dg,g),null;case 4:return s(g),null;case 10:return c0(g.type,g),null;case 22:case 23:return wv(g),M6(g),r!==null&&Wr(lh,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&kr)!==Lr&&Ob(g),g):null;case 24:return c0(jg,g),null;case 25:return null;default:return null}}function Cq(r,g){switch(v6(g),g.tag){case 3:c0(jg,g),s(g);break;case 26:case 27:case 5:Mr(g);break;case 4:s(g);break;case 31:g.memoizedState!==null&&wv(g);break;case 13:wv(g);break;case 19:Wr(Dg,g);break;case 10:c0(g.type,g);break;case 22:case 23:wv(g),M6(g),r!==null&&Wr(lh,g);break;case 24:c0(jg,g)}}function W0(r){return(r.mode&kr)!==Lr}function tq(r,g){W0(r)?(M0(),Qb(g,r),A0()):Qb(g,r)}function h8(r,g,o){W0(r)?(M0(),Eh(o,r,g),A0()):Eh(o,r,g)}function Qb(r,g){try{var o=g.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var b=l.next;o=b;do{if((o.tag&r)===r&&(l=void 0,(r&Co)!==Qu&&(N5=!0),l=er(g,Ez,o),(r&Co)!==Qu&&(N5=!1),l!==void 0&&typeof l!=="function")){var w=void 0;w=(o.tag&Av)!==0?"useLayoutEffect":(o.tag&Co)!==0?"useInsertionEffect":"useEffect";var i=void 0;i=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+w+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+w+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,er(g,function(P,M){console.error("%s must not return anything besides a function, which is used for clean-up.%s",P,M)},w,i)}o=o.next}while(o!==b)}}catch(P){wg(g,g.return,P)}}function Eh(r,g,o){try{var l=g.updateQueue,b=l!==null?l.lastEffect:null;if(b!==null){var w=b.next;l=w;do{if((l.tag&r)===r){var i=l.inst,P=i.destroy;P!==void 0&&(i.destroy=void 0,(r&Co)!==Qu&&(N5=!0),b=g,er(b,yz,b,o,P),(r&Co)!==Qu&&(N5=!1))}l=l.next}while(l!==w)}}catch(M){wg(g,g.return,M)}}function Tq(r,g){W0(r)?(M0(),Qb(g,r),A0()):Qb(g,r)}function b8(r,g,o){W0(r)?(M0(),Eh(o,r,g),A0()):Eh(o,r,g)}function Sq(r){var g=r.updateQueue;if(g!==null){var o=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||U5||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{er(r,DO,g,o)}catch(l){wg(r,r.return,l)}}}function QJ(r,g,o){return r.getSnapshotBeforeUpdate(g,o)}function zJ(r,g){var{memoizedProps:o,memoizedState:l}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||U5||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(r)||"instance"));try{var b=jl(r.type,o),w=er(r,QJ,g,b,l);o=Y9,w!==void 0||o.has(r.type)||(o.add(r.type),er(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",C(r))})),g.__reactInternalSnapshotBeforeUpdate=w}catch(i){wg(r,r.return,i)}}function kq(r,g,o){o.props=jl(r.type,r.memoizedProps),o.state=r.memoizedState,W0(r)?(M0(),er(r,SW,r,g,o),A0()):er(r,SW,r,g,o)}function KJ(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var o=r.stateNode;break;case 30:o=r.stateNode;break;default:o=r.stateNode}if(typeof g==="function")if(W0(r))try{M0(),r.refCleanup=g(o)}finally{A0()}else r.refCleanup=g(o);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",C(r)),g.current=o}}function zb(r,g){try{er(r,KJ,r)}catch(o){wg(r,g,o)}}function R0(r,g){var{ref:o,refCleanup:l}=r;if(o!==null)if(typeof l==="function")try{if(W0(r))try{M0(),er(r,l)}finally{A0(r)}else er(r,l)}catch(b){wg(r,g,b)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o==="function")try{if(W0(r))try{M0(),er(r,o,null)}finally{A0(r)}else er(r,o,null)}catch(b){wg(r,g,b)}else o.current=null}function Dq(r,g,o,l){var b=r.memoizedProps,w=b.id,i=b.onCommit;b=b.onRender,g=g===null?"mount":"update",Wu&&(g="nested-update"),typeof b==="function"&&b(w,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,o),typeof i==="function"&&i(w,g,l,o)}function $J(r,g,o,l){var b=r.memoizedProps;r=b.id,b=b.onPostCommit,g=g===null?"mount":"update",Wu&&(g="nested-update"),typeof b==="function"&&b(r,g,l,o)}function Vq(r){var{type:g,memoizedProps:o,stateNode:l}=r;try{er(r,aJ,l,g,o,r)}catch(b){wg(r,r.return,b)}}function w8(r,g,o){try{er(r,dJ,r.stateNode,r.type,o,g,r)}catch(l){wg(r,r.return,l)}}function _q(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&k1(r.type)||r.tag===4}function e8(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||_q(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&k1(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function u8(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?(pA(o),(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,g)):(pA(o),g=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,g.appendChild(r),o=o._reactRootContainer,o!==null&&o!==void 0||g.onclick!==null||(g.onclick=_0));else if(l!==4&&(l===27&&k1(r.type)&&(o=r.stateNode,g=null),r=r.child,r!==null))for(u8(r,g,o),r=r.sibling;r!==null;)u8(r,g,o),r=r.sibling}function Ie(r,g,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,g?o.insertBefore(r,g):o.appendChild(r);else if(l!==4&&(l===27&&k1(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Ie(r,g,o),r=r.sibling;r!==null;)Ie(r,g,o),r=r.sibling}function UJ(r){for(var g,o=r.return;o!==null;){if(_q(o)){g=o;break}o=o.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,o=e8(r),Ie(r,o,g);break;case 5:o=g.stateNode,g.flags&32&&(aA(o),g.flags&=-33),g=e8(r),Ie(r,g,o);break;case 3:case 4:g=g.stateNode.containerInfo,o=e8(r),u8(r,o,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Eq(r){var{stateNode:g,memoizedProps:o}=r;try{er(r,qQ,r.type,o,g,r)}catch(l){wg(r,r.return,l)}}function yq(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function LJ(r,g){if(r=r.containerInfo,eH=pu,r=eO(r),y4(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else r:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var{anchorOffset:b,focusNode:w}=l;l=l.focusOffset;try{o.nodeType,w.nodeType}catch(br){o=null;break r}var i=0,P=-1,M=-1,R=0,n=0,F=r,K=null;g:for(;;){for(var B;;){if(F!==o||b!==0&&F.nodeType!==3||(P=i+b),F!==w||l!==0&&F.nodeType!==3||(M=i+l),F.nodeType===3&&(i+=F.nodeValue.length),(B=F.firstChild)===null)break;K=F,F=B}for(;;){if(F===r)break g;if(K===o&&++R===b&&(P=i),K===w&&++n===l&&(M=i),(B=F.nextSibling)!==null)break;F=K,K=F.parentNode}F=B}o=P===-1||M===-1?null:{start:P,end:M}}else o=null}o=o||{start:0,end:0}}else o=null;uH={focusedElem:r,selectionRange:o},pu=!1;for(eo=g;eo!==null;)if(g=eo,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,eo=r;else for(;eo!==null;){switch(r=g=eo,o=r.alternate,b=r.flags,r.tag){case 0:if((b&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(o=0;o<r.length;o++)b=r[o],b.ref.impl=b.nextImpl;break;case 11:case 15:break;case 1:(b&1024)!==0&&o!==null&&zJ(r,o);break;case 3:if((b&1024)!==0){if(r=r.stateNode.containerInfo,o=r.nodeType,o===9)n8(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":n8(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((b&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,eo=r;break}eo=g.return}}function cq(r,g,o){var l=hv(),b=H0(),w=O0(),i=q0(),P=o.flags;switch(o.tag){case 0:case 11:case 15:G0(r,o),P&4&&tq(o,Av|mv);break;case 1:if(G0(r,o),P&4)if(r=o.stateNode,g===null)o.type.defaultProps||"ref"in o.memoizedProps||U5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(o)||"instance")),W0(o)?(M0(),er(o,Fi,o,r),A0()):er(o,Fi,o,r);else{var M=jl(o.type,g.memoizedProps);g=g.memoizedState,o.type.defaultProps||"ref"in o.memoizedProps||U5||(r.props!==o.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",C(o)||"instance"),r.state!==o.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",C(o)||"instance")),W0(o)?(M0(),er(o,CW,o,r,M,g,r.__reactInternalSnapshotBeforeUpdate),A0()):er(o,CW,o,r,M,g,r.__reactInternalSnapshotBeforeUpdate)}P&64&&Sq(o),P&512&&zb(o,o.return);break;case 3:if(g=j0(),G0(r,o),P&64&&(P=o.updateQueue,P!==null)){if(M=null,o.child!==null)switch(o.child.tag){case 27:case 5:M=o.child.stateNode;break;case 1:M=o.child.stateNode}try{er(o,DO,P,M)}catch(n){wg(o,o.return,n)}}r.effectDuration+=le(g);break;case 27:g===null&&P&4&&Eq(o);case 26:case 5:if(G0(r,o),g===null){if(P&4)Vq(o);else if(P&64){r=o.type,g=o.memoizedProps,M=o.stateNode;try{er(o,pJ,M,r,g,o)}catch(n){wg(o,o.return,n)}}}P&512&&zb(o,o.return);break;case 12:if(P&4){P=j0(),G0(r,o),r=o.stateNode,r.effectDuration+=Pb(P);try{er(o,Dq,o,g,p1,r.effectDuration)}catch(n){wg(o,o.return,n)}}else G0(r,o);break;case 31:G0(r,o),P&4&&aq(r,o);break;case 13:G0(r,o),P&4&&pq(r,o),P&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(P=CJ.bind(null,o),iQ(r,P))));break;case 22:if(P=o.memoizedState!==null||i1,!P){g=g!==null&&g.memoizedState!==null||dg,M=i1;var R=dg;i1=P,(dg=g)&&!R?(X0(r,o,(o.subtreeFlags&8772)!==0),(o.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&j2(o,$r,Ur)):G0(r,o),i1=M,dg=R}break;case 30:break;default:G0(r,o)}(o.mode&kr)!==Lr&&0<=$r&&0<=Ur&&((Zg||0.05<Ig)&&u0(o,$r,Ur,Ig,ng),o.alternate===null&&o.return!==null&&o.return.alternate!==null&&0.05<Ur-$r&&(yq(o.return.alternate,o.return)||e0(o,$r,Ur,"Mount"))),bv(l),P0(b),ng=w,Zg=i}function jq(r){var g=r.alternate;g!==null&&(r.alternate=null,jq(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&ur(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function p0(r,g,o){for(o=o.child;o!==null;)fq(r,g,o),o=o.sibling}function fq(r,g,o){if($o&&typeof $o.onCommitFiberUnmount==="function")try{$o.onCommitFiberUnmount(v5,o)}catch(R){$0||($0=!0,console.error("React instrumentation encountered an error: %o",R))}var l=hv(),b=H0(),w=O0(),i=q0();switch(o.tag){case 26:dg||R0(o,g),p0(r,g,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(r=o.stateNode,r.parentNode.removeChild(r));break;case 27:dg||R0(o,g);var P=sg,M=fo;k1(o.type)&&(sg=o.stateNode,fo=!1),p0(r,g,o),er(o,Bb,o.stateNode),sg=P,fo=M;break;case 5:dg||R0(o,g);case 6:if(P=sg,M=fo,sg=null,p0(r,g,o),sg=P,fo=M,sg!==null)if(fo)try{er(o,gQ,sg,o.stateNode)}catch(R){wg(o,g,R)}else try{er(o,rQ,sg,o.stateNode)}catch(R){wg(o,g,R)}break;case 18:sg!==null&&(fo?(r=sg,dA(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),sh(r)):dA(sg,o.stateNode));break;case 4:P=sg,M=fo,sg=o.stateNode.containerInfo,fo=!0,p0(r,g,o),sg=P,fo=M;break;case 0:case 11:case 14:case 15:Eh(Co,o,g),dg||h8(o,g,Av),p0(r,g,o);break;case 1:dg||(R0(o,g),P=o.stateNode,typeof P.componentWillUnmount==="function"&&kq(o,g,P)),p0(r,g,o);break;case 21:p0(r,g,o);break;case 22:dg=(P=dg)||o.memoizedState!==null,p0(r,g,o),dg=P;break;default:p0(r,g,o)}(o.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(o,$r,Ur,Ig,ng),bv(l),P0(b),ng=w,Zg=i}function aq(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{er(g,PQ,r)}catch(o){wg(g,g.return,o)}}}function pq(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{er(g,OQ,r)}catch(o){wg(g,g.return,o)}}function nJ(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new J9),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new J9),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Ne(r,g){var o=nJ(r);g.forEach(function(l){if(!o.has(l)){if(o.add(l),U0)if(L5!==null&&n5!==null)Lb(n5,L5);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var b=tJ.bind(null,r,l);l.then(b,b)}})}function co(r,g){var o=g.deletions;if(o!==null)for(var l=0;l<o.length;l++){var b=r,w=g,i=o[l],P=hv(),M=w;r:for(;M!==null;){switch(M.tag){case 27:if(k1(M.type)){sg=M.stateNode,fo=!1;break r}break;case 5:sg=M.stateNode,fo=!1;break r;case 3:case 4:sg=M.stateNode.containerInfo,fo=!0;break r}M=M.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");fq(b,w,i),sg=null,fo=!1,(i.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&e0(i,$r,Ur,"Unmount"),bv(P),b=i,w=b.alternate,w!==null&&(w.return=null),b.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)dq(g,r),g=g.sibling}function dq(r,g){var o=hv(),l=H0(),b=O0(),w=q0(),i=r.alternate,P=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:co(g,r),jo(r),P&4&&(Eh(Co|mv,r,r.return),Qb(Co|mv,r),h8(r,r.return,Av|mv));break;case 1:if(co(g,r),jo(r),P&512&&(dg||i===null||R0(i,i.return)),P&64&&i1&&(P=r.updateQueue,P!==null&&(i=P.callbacks,i!==null))){var M=P.shared.hiddenCallbacks;P.shared.hiddenCallbacks=M===null?i:M.concat(i)}break;case 26:if(M=jv,co(g,r),jo(r),P&512&&(dg||i===null||R0(i,i.return)),P&4){var R=i!==null?i.memoizedState:null;if(P=r.memoizedState,i===null)if(P===null)if(r.stateNode===null){r:{P=r.type,i=r.memoizedProps,M=M.ownerDocument||M;g:switch(P){case"title":if(R=M.getElementsByTagName("title")[0],!R||R[Sb]||R[Mo]||R.namespaceURI===h5||R.hasAttribute("itemprop"))R=M.createElement(P),M.head.insertBefore(R,M.querySelector("head > title"));Ao(R,P,i),R[Mo]=r,Kr(R),P=R;break r;case"link":var n=uM("link","href",M).get(P+(i.href||""));if(n){for(var F=0;F<n.length;F++)if(R=n[F],R.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&R.getAttribute("rel")===(i.rel==null?null:i.rel)&&R.getAttribute("title")===(i.title==null?null:i.title)&&R.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){n.splice(F,1);break g}}R=M.createElement(P),Ao(R,P,i),M.head.appendChild(R);break;case"meta":if(n=uM("meta","content",M).get(P+(i.content||""))){for(F=0;F<n.length;F++)if(R=n[F],Og(i.content,"content"),R.getAttribute("content")===(i.content==null?null:""+i.content)&&R.getAttribute("name")===(i.name==null?null:i.name)&&R.getAttribute("property")===(i.property==null?null:i.property)&&R.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&R.getAttribute("charset")===(i.charSet==null?null:i.charSet)){n.splice(F,1);break g}}R=M.createElement(P),Ao(R,P,i),M.head.appendChild(R);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+P+'". This is a bug in React.')}R[Mo]=r,Kr(R),P=R}r.stateNode=P}else iM(M,r.type,r.stateNode);else r.stateNode=eM(M,P,r.memoizedProps);else R!==P?(R===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):R.count--,P===null?iM(M,r.type,r.stateNode):eM(M,P,r.memoizedProps)):P===null&&r.stateNode!==null&&w8(r,r.memoizedProps,i.memoizedProps)}break;case 27:co(g,r),jo(r),P&512&&(dg||i===null||R0(i,i.return)),i!==null&&P&4&&w8(r,r.memoizedProps,i.memoizedProps);break;case 5:if(co(g,r),jo(r),P&512&&(dg||i===null||R0(i,i.return)),r.flags&32){M=r.stateNode;try{er(r,aA,M)}catch(qr){wg(r,r.return,qr)}}P&4&&r.stateNode!=null&&(M=r.memoizedProps,w8(r,M,i!==null?i.memoizedProps:M)),P&1024&&(Vi=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(co(g,r),jo(r),P&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");P=r.memoizedProps,i=i!==null?i.memoizedProps:P,M=r.stateNode;try{er(r,sJ,M,i,P)}catch(qr){wg(r,r.return,qr)}}break;case 3:if(M=j0(),ju=null,R=jv,jv=Se(g.containerInfo),co(g,r),jv=R,jo(r),P&4&&i!==null&&i.memoizedState.isDehydrated)try{er(r,HQ,g.containerInfo)}catch(qr){wg(r,r.return,qr)}Vi&&(Vi=!1,sq(r)),g.effectDuration+=le(M);break;case 4:P=jv,jv=Se(r.stateNode.containerInfo),co(g,r),jo(r),jv=P;break;case 12:P=j0(),co(g,r),jo(r),r.stateNode.effectDuration+=Pb(P);break;case 31:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Ne(r,P)));break;case 13:co(g,r),jo(r),r.child.flags&8192&&r.memoizedState!==null!==(i!==null&&i.memoizedState!==null)&&(Bu=bo()),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Ne(r,P)));break;case 22:M=r.memoizedState!==null;var K=i!==null&&i.memoizedState!==null,B=i1,br=dg;if(i1=B||M,dg=br||K,co(g,r),dg=br,i1=B,K&&!M&&!B&&!br&&(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&j2(r,$r,Ur),jo(r),P&8192)r:for(g=r.stateNode,g._visibility=M?g._visibility&~fb:g._visibility|fb,!M||i===null||K||i1||dg||(fl(r),(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&e0(r,$r,Ur,"Disconnect")),i=null,g=r;;){if(g.tag===5||g.tag===26){if(i===null){K=i=g;try{R=K.stateNode,M?er(K,vQ,R):er(K,bQ,K.stateNode,K.memoizedProps)}catch(qr){wg(K,K.return,qr)}}}else if(g.tag===6){if(i===null){K=g;try{n=K.stateNode,M?er(K,lQ,n):er(K,wQ,n,K.memoizedProps)}catch(qr){wg(K,K.return,qr)}}}else if(g.tag===18){if(i===null){K=g;try{F=K.stateNode,M?er(K,oQ,F):er(K,hQ,K.stateNode)}catch(qr){wg(K,K.return,qr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;i===g&&(i=null),g=g.return}i===g&&(i=null),g.sibling.return=g.return,g=g.sibling}P&4&&(P=r.updateQueue,P!==null&&(i=P.retryQueue,i!==null&&(P.retryQueue=null,Ne(r,i))));break;case 19:co(g,r),jo(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Ne(r,P)));break;case 30:break;case 21:break;default:co(g,r),jo(r)}(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&((Zg||0.05<Ig)&&u0(r,$r,Ur,Ig,ng),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Ur-$r&&(yq(r.return.alternate,r.return)||e0(r,$r,Ur,"Mount"))),bv(o),P0(l),ng=b,Zg=w}function jo(r){var g=r.flags;if(g&2){try{er(r,UJ,r)}catch(o){wg(r,r.return,o)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function sq(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;sq(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function G0(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)cq(r,g.alternate,g),g=g.sibling}function rA(r){var g=hv(),o=H0(),l=O0(),b=q0();switch(r.tag){case 0:case 11:case 14:case 15:h8(r,r.return,Av),fl(r);break;case 1:R0(r,r.return);var w=r.stateNode;typeof w.componentWillUnmount==="function"&&kq(r,r.return,w),fl(r);break;case 27:er(r,Bb,r.stateNode);case 26:case 5:R0(r,r.return),fl(r);break;case 22:r.memoizedState===null&&fl(r);break;case 30:fl(r);break;default:fl(r)}(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(r,$r,Ur,Ig,ng),bv(g),P0(o),ng=l,Zg=b}function fl(r){for(r=r.child;r!==null;)rA(r),r=r.sibling}function gA(r,g,o,l){var b=hv(),w=H0(),i=O0(),P=q0(),M=o.flags;switch(o.tag){case 0:case 11:case 15:X0(r,o,l),tq(o,Av);break;case 1:if(X0(r,o,l),g=o.stateNode,typeof g.componentDidMount==="function"&&er(o,Fi,o,g),g=o.updateQueue,g!==null){r=o.stateNode;try{er(o,HJ,g,r)}catch(R){wg(o,o.return,R)}}l&&M&64&&Sq(o),zb(o,o.return);break;case 27:Eq(o);case 26:case 5:X0(r,o,l),l&&g===null&&M&4&&Vq(o),zb(o,o.return);break;case 12:if(l&&M&4){M=j0(),X0(r,o,l),l=o.stateNode,l.effectDuration+=Pb(M);try{er(o,Dq,o,g,p1,l.effectDuration)}catch(R){wg(o,o.return,R)}}else X0(r,o,l);break;case 31:X0(r,o,l),l&&M&4&&aq(r,o);break;case 13:X0(r,o,l),l&&M&4&&pq(r,o);break;case 22:o.memoizedState===null&&X0(r,o,l),zb(o,o.return);break;case 30:break;default:X0(r,o,l)}(o.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(o,$r,Ur,Ig,ng),bv(b),P0(w),ng=i,Zg=P}function X0(r,g,o){o=o&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)gA(r,g.alternate,g,o),g=g.sibling}function i8(r,g){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==o&&(r!=null&&_l(r),o!=null&&Hb(o))}function H8(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(_l(g),r!=null&&Hb(r))}function Dv(r,g,o,l,b){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var w=g.sibling;oA(r,g,o,l,w!==null?w.actualStartTime:b),g=w}}function oA(r,g,o,l,b){var w=hv(),i=H0(),P=O0(),M=q0(),R=c1,n=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&kr)!==Lr&&0<g.actualStartTime&&(g.flags&1)!==0&&f2(g,g.actualStartTime,b,vo,o),Dv(r,g,o,l,b),n&2048&&Tq(g,to|mv);break;case 1:(g.mode&kr)!==Lr&&0<g.actualStartTime&&((g.flags&128)!==0?j4(g,g.actualStartTime,b,[]):(g.flags&1)!==0&&f2(g,g.actualStartTime,b,vo,o)),Dv(r,g,o,l,b);break;case 3:var F=j0(),K=vo;vo=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,Dv(r,g,o,l,b),vo=K,n&2048&&(o=null,g.alternate!==null&&(o=g.alternate.memoizedState.cache),l=g.memoizedState.cache,l!==o&&(_l(l),o!=null&&Hb(o))),r.passiveEffectDuration+=le(F);break;case 12:if(n&2048){n=j0(),Dv(r,g,o,l,b),r=g.stateNode,r.passiveEffectDuration+=Pb(n);try{er(g,$J,g,g.alternate,p1,r.passiveEffectDuration)}catch(B){wg(g,g.return,B)}}else Dv(r,g,o,l,b);break;case 31:n=vo,F=g.alternate!==null?g.alternate.memoizedState:null,K=g.memoizedState,F!==null&&K===null?(K=g.deletions,K!==null&&0<K.length&&K[0].tag===18?(vo=!1,F=F.hydrationErrors,F!==null&&j4(g,g.actualStartTime,b,F)):vo=!0):vo=!1,Dv(r,g,o,l,b),vo=n;break;case 13:n=vo,F=g.alternate!==null?g.alternate.memoizedState:null,K=g.memoizedState,F===null||F.dehydrated===null||K!==null&&K.dehydrated!==null?vo=!1:(K=g.deletions,K!==null&&0<K.length&&K[0].tag===18?(vo=!1,F=F.hydrationErrors,F!==null&&j4(g,g.actualStartTime,b,F)):vo=!0),Dv(r,g,o,l,b),vo=n;break;case 23:break;case 22:K=g.stateNode,F=g.alternate,g.memoizedState!==null?K._visibility&r1?Dv(r,g,o,l,b):Kb(r,g,o,l,b):K._visibility&r1?Dv(r,g,o,l,b):(K._visibility|=r1,yh(r,g,o,l,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),b),(g.mode&kr)===Lr||vo||(r=g.actualStartTime,0<=r&&0.05<b-r&&j2(g,r,b),0<=$r&&0<=Ur&&0.05<Ur-$r&&j2(g,$r,Ur))),n&2048&&i8(F,g);break;case 24:Dv(r,g,o,l,b),n&2048&&H8(g.alternate,g);break;default:Dv(r,g,o,l,b)}if((g.mode&kr)!==Lr){if(r=!vo&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)o=g.actualStartTime,0<=o&&0.05<b-o&&e0(g,o,b,"Mount");0<=$r&&0<=Ur&&((Zg||0.05<Ig)&&u0(g,$r,Ur,Ig,ng),r&&0.05<Ur-$r&&e0(g,$r,Ur,"Mount"))}bv(w),P0(i),ng=P,Zg=M,c1=R}function yh(r,g,o,l,b,w){b=b&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var i=g.sibling;vA(r,g,o,l,b,i!==null?i.actualStartTime:w),g=i}}function vA(r,g,o,l,b,w){var i=hv(),P=H0(),M=O0(),R=q0(),n=c1;b&&(g.mode&kr)!==Lr&&0<g.actualStartTime&&(g.flags&1)!==0&&f2(g,g.actualStartTime,w,vo,o);var F=g.flags;switch(g.tag){case 0:case 11:case 15:yh(r,g,o,l,b,w),Tq(g,to);break;case 23:break;case 22:var K=g.stateNode;g.memoizedState!==null?K._visibility&r1?yh(r,g,o,l,b,w):Kb(r,g,o,l,w):(K._visibility|=r1,yh(r,g,o,l,b,w)),b&&F&2048&&i8(g.alternate,g);break;case 24:yh(r,g,o,l,b,w),b&&F&2048&&H8(g.alternate,g);break;default:yh(r,g,o,l,b,w)}(g.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(g,$r,Ur,Ig,ng),bv(i),P0(P),ng=M,Zg=R,c1=n}function Kb(r,g,o,l,b){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var w=g.child;w!==null;){g=w.sibling;var i=r,P=o,M=l,R=g!==null?g.actualStartTime:b,n=c1;(w.mode&kr)!==Lr&&0<w.actualStartTime&&(w.flags&1)!==0&&f2(w,w.actualStartTime,R,vo,P);var F=w.flags;switch(w.tag){case 22:Kb(i,w,P,M,R),F&2048&&i8(w.alternate,w);break;case 24:Kb(i,w,P,M,R),F&2048&&H8(w.alternate,w);break;default:Kb(i,w,P,M,R)}c1=n,w=g}}function ch(r,g,o){if(r.subtreeFlags&Aw)for(r=r.child;r!==null;)lA(r,g,o),r=r.sibling}function lA(r,g,o){switch(r.tag){case 26:ch(r,g,o),r.flags&Aw&&r.memoizedState!==null&&WQ(o,jv,r.memoizedState,r.memoizedProps);break;case 5:ch(r,g,o);break;case 3:case 4:var l=jv;jv=Se(r.stateNode.containerInfo),ch(r,g,o),jv=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Aw,Aw=16777216,ch(r,g,o),Aw=l):ch(r,g,o));break;default:ch(r,g,o)}}function hA(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function $b(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],b=hv();eo=l,eA(l,r),(l.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&e0(l,$r,Ur,"Unmount"),bv(b)}hA(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bA(r),r=r.sibling}function bA(r){var g=hv(),o=H0(),l=O0(),b=q0();switch(r.tag){case 0:case 11:case 15:$b(r),r.flags&2048&&b8(r,r.return,to|mv);break;case 3:var w=j0();$b(r),r.stateNode.passiveEffectDuration+=le(w);break;case 12:w=j0(),$b(r),r.stateNode.passiveEffectDuration+=Pb(w);break;case 22:w=r.stateNode,r.memoizedState!==null&&w._visibility&r1&&(r.return===null||r.return.tag!==13)?(w._visibility&=~r1,Be(r),(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&e0(r,$r,Ur,"Disconnect")):$b(r);break;default:$b(r)}(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(r,$r,Ur,Ig,ng),bv(g),P0(o),Zg=b,ng=l}function Be(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var o=0;o<g.length;o++){var l=g[o],b=hv();eo=l,eA(l,r),(l.mode&kr)!==Lr&&0<=$r&&0<=Ur&&0.05<Ur-$r&&e0(l,$r,Ur,"Unmount"),bv(b)}hA(r)}for(r=r.child;r!==null;)wA(r),r=r.sibling}function wA(r){var g=hv(),o=H0(),l=O0(),b=q0();switch(r.tag){case 0:case 11:case 15:b8(r,r.return,to),Be(r);break;case 22:var w=r.stateNode;w._visibility&r1&&(w._visibility&=~r1,Be(r));break;default:Be(r)}(r.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(r,$r,Ur,Ig,ng),bv(g),P0(o),Zg=b,ng=l}function eA(r,g){for(;eo!==null;){var o=eo,l=o,b=g,w=hv(),i=H0(),P=O0(),M=q0();switch(l.tag){case 0:case 11:case 15:b8(l,b,to);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(b=l.memoizedState.cachePool.pool,b!=null&&_l(b));break;case 24:Hb(l.memoizedState.cache)}if((l.mode&kr)!==Lr&&0<=$r&&0<=Ur&&(Zg||0.05<Ig)&&u0(l,$r,Ur,Ig,ng),bv(w),P0(i),Zg=M,ng=P,l=o.child,l!==null)l.return=o,eo=l;else r:for(o=r;eo!==null;){if(l=eo,w=l.sibling,i=l.return,jq(l),l===o){eo=null;break r}if(w!==null){w.return=i,eo=w;break r}eo=i}}}function FJ(){pz.forEach(function(r){return r()})}function uA(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||x.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function ev(r){if((og&lo)!==uo&&Vr!==0)return Vr&-Vr;var g=x.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),G8()):N()}function iA(){if(po===0)if((Vr&536870912)===0||pr){var r=de;de<<=1,(de&3932160)===0&&(de=262144),po=r}else po=536870912;return r=qv.current,r!==null&&(r.flags|=32),po}function mg(r,g,o){if(N5&&console.error("useInsertionEffect must not schedule updates."),rH&&(Cu=!0),r===Rg&&(Hg===ih||Hg===Hh)||r.cancelPendingCommit!==null)fh(r,0),T1(r,Vr,po,!1);if(U1(r,o),(og&lo)!==uo&&r===Rg){if(K0)switch(g.tag){case 0:case 11:case 15:r=Er&&C(Er)||"Unknown",C9.has(r)||(C9.add(r),g=C(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:x9||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),x9=!0)}}else U0&&rb(r,g,o),SJ(g),r===Rg&&((og&lo)===uo&&(bl|=o),Ng===vl&&T1(r,Vr,po,!1)),Y0(r)}function HA(r,g,o){if((og&(lo|Mv))!==uo)throw Error("Should not already be working.");if(Vr!==0&&Er!==null){var l=Er,b=bo();switch(nW){case Rw:case ih:var w=gw;Kg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",w,b,$v,void 0,"primary-light")):console.timeStamp("Suspended",w,b,$v,void 0,"primary-light"));break;case Hh:w=gw,Kg&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",w,b,$v,void 0,"primary-light")):console.timeStamp("Action",w,b,$v,void 0,"primary-light"));break;default:Kg&&(l=b-gw,3>l||console.timeStamp("Blocked",gw,b,$v,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}w=(o=!o&&(g&127)===0&&(g&r.expiredLanes)===0||Il(r,g))?NJ(r,g):O8(r,g,!0);var i=o;do{if(w===H1){F5&&!o&&T1(r,g,0,!1),g=Hg,gw=fg(),nW=g;break}else{if(l=bo(),b=r.current.alternate,i&&!IJ(b)){vv(g),b=wo,w=l,!Kg||w<=b||(Tg?Tg.run(console.timeStamp.bind(console,"Teared Render",b,w,fr,jr,"error")):console.timeStamp("Teared Render",b,w,fr,jr,"error")),al(g,l),w=O8(r,g,!1),i=!1;continue}if(w===uh){if(i=g,r.errorRecoveryDisabledLanes&i)var P=0;else P=r.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){vv(g),f4(wo,l,g,Tg),al(g,l),g=P;r:{l=r,w=i,i=Xw;var M=l.current.memoizedState.isDehydrated;if(M&&(fh(l,P).flags|=256),P=O8(l,P,!1),P!==uh){if(yi&&!M){l.errorRecoveryDisabledLanes|=w,bl|=w,w=vl;break r}l=To,To=i,l!==null&&(To===null?To=l:To.push.apply(To,l))}w=P}if(i=!1,w!==uh)continue;else l=bo()}}if(w===Ww){vv(g),f4(wo,l,g,Tg),al(g,l),fh(r,0),T1(r,g,0,!0);break}r:{switch(o=r,w){case H1:case Ww:throw Error("Root did not complete. This is a bug in React.");case vl:if((g&4194048)!==g)break;case nu:vv(g),HO(wo,l,g,Tg),al(g,l),b=g,(b&127)!==0?qu=l:(b&4194048)!==0&&(Au=l),T1(o,g,po,!ll);break r;case uh:To=null;break;case Lu:case Q9:break;default:throw Error("Unknown root exit status.")}if(x.actQueue!==null)q8(o,b,g,To,Yw,Nu,po,bl,Ph,w,null,null,wo,l);else{if((g&62914560)===g&&(i=Bu+$9-bo(),10<i)){if(T1(o,g,po,!ll),Fl(o,0,!0)!==0)break r;fv=g,o.timeoutHandle=E9(PA.bind(null,o,b,To,Yw,Nu,g,po,bl,Ph,ll,w,"Throttled",wo,l),i);break r}PA(o,b,To,Yw,Nu,g,po,bl,Ph,ll,w,null,wo,l)}}}break}while(1);Y0(r)}function PA(r,g,o,l,b,w,i,P,M,R,n,F,K,B){r.timeoutHandle=Wh;var br=g.subtreeFlags,qr=null;if(br&8192||(br&16785408)===16785408){if(qr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_0},lA(g,w,qr),br=(w&62914560)===w?Bu-bo():(w&4194048)===w?K9-bo():0,br=RQ(qr,br),br!==null){fv=w,r.cancelPendingCommit=br(q8.bind(null,r,g,w,o,l,b,i,P,M,n,qr,qr.waitingForViewTransition?"Waiting for the previous Animation":0<qr.count?0<qr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":qr.imgCount===1?"Suspended on an Image":0<qr.imgCount?"Suspended on Images":null,K,B)),T1(r,w,i,!R);return}}q8(r,g,w,o,l,b,i,P,M,n,qr,F,K,B)}function IJ(r){for(var g=r;;){var o=g.tag;if((o===0||o===11||o===15)&&g.flags&16384&&(o=g.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var b=o[l],w=b.getSnapshot;b=b.value;try{if(!Zo(w(),b))return!1}catch(i){return!1}}if(o=g.child,g.subtreeFlags&16384&&o!==null)o.return=g,g=o;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function T1(r,g,o,l){g&=~ci,g&=~bl,r.suspendedLanes|=g,r.pingedLanes&=~g,l&&(r.warmLanes|=g),l=r.expirationTimes;for(var b=g;0<b;){var w=31-No(b),i=1<<w;l[w]=-1,b&=~i}o!==0&&Nl(r,o,g)}function jh(){return(og&(lo|Mv))===uo?(nb(0,!1),!1):!0}function P8(){if(Er!==null){if(Hg===ao)var r=Er.return;else r=Er,ge(),Q6(r),Y5=null,iw=0,r=Er;for(;r!==null;)Cq(r.alternate,r),r=r.return;Er=null}}function al(r,g){(r&127)!==0&&(d1=g),(r&4194048)!==0&&(N0=g),(r&62914560)!==0&&(UW=g),(r&2080374784)!==0&&(LW=g)}function fh(r,g){Kg&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",jr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",jr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",jr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",jr,"primary-light"));var o=wo;if(wo=fg(),Vr!==0&&0<o){if(vv(Vr),Ng===Lu||Ng===vl)HO(o,wo,g,Tg);else{var l=wo,b=Tg;if(Kg&&!(l<=o)){var w=(g&738197653)===g?"tertiary-dark":"primary-dark",i=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";b?b.run(console.timeStamp.bind(console,i,o,l,fr,jr,w)):console.timeStamp(i,o,l,fr,jr,w)}}al(Vr,wo)}if(o=Tg,Tg=null,(g&127)!==0){Tg=db,b=0<=I0&&I0<d1?d1:I0,l=0<=gh&&gh<d1?d1:gh,w=0<=l?l:0<=b?b:wo,0<=qu?(vv(2),PO(qu,w,g,o)):(Mu&127)!==0&&(vv(2),ub(d1,w,b1)),o=b;var P=l,M=sb,R=0<R5,n=s1===pb,F=s1===Ou;if(b=wo,l=db,w=Ki,i=$i,Kg){if(fr="Blocking",0<o?o>b&&(o=b):o=b,0<P?P>o&&(P=o):P=o,M!==null&&o>P){var K=R?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,R?"Consecutive":"Event: "+M,P,o,fr,jr,K)):console.timeStamp(R?"Consecutive":"Event: "+M,P,o,fr,jr,K)}b>o&&(P=n?"error":(g&738197653)===g?"tertiary-light":"primary-light",n=F?"Promise Resolved":n?"Cascading Update":5<b-o?"Update Blocked":"Update",F=[],i!=null&&F.push(["Component name",i]),w!=null&&F.push(["Method name",w]),o={start:o,end:b,detail:{devtools:{properties:F,track:fr,trackGroup:jr,color:P}}},l?l.run(performance.measure.bind(performance,n,o)):performance.measure(n,o))}I0=-1.1,s1=0,$i=Ki=null,qu=-1.1,R5=gh,gh=-1.1,d1=fg()}if((g&4194048)!==0&&(Tg=rw,b=0<=h1&&h1<N0?N0:h1,o=0<=Nv&&Nv<N0?N0:Nv,l=0<=rl&&rl<N0?N0:rl,w=0<=l?l:0<=o?o:wo,0<=Au?(vv(256),PO(Au,w,g,Tg)):(Mu&4194048)!==0&&(vv(256),ub(N0,w,b1)),F=l,P=oh,M=0<gl,R=Ui===Ou,w=wo,l=rw,i=KW,n=$W,Kg&&(fr="Transition",0<o?o>w&&(o=w):o=w,0<b?b>o&&(b=o):b=o,0<F?F>b&&(F=b):F=b,b>F&&P!==null&&(K=M?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,M?"Consecutive":"Event: "+P,F,b,fr,jr,K)):console.timeStamp(M?"Consecutive":"Event: "+P,F,b,fr,jr,K)),o>b&&(l?l.run(console.timeStamp.bind(console,"Action",b,o,fr,jr,"primary-dark")):console.timeStamp("Action",b,o,fr,jr,"primary-dark")),w>o&&(b=R?"Promise Resolved":5<w-o?"Update Blocked":"Update",F=[],n!=null&&F.push(["Component name",n]),i!=null&&F.push(["Method name",i]),o={start:o,end:w,detail:{devtools:{properties:F,track:fr,trackGroup:jr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,b,o)):performance.measure(b,o))),Nv=h1=-1.1,Ui=0,Au=-1.1,gl=rl,rl=-1.1,N0=fg()),(g&62914560)!==0&&(Mu&62914560)!==0&&(vv(4194304),ub(UW,wo,b1)),(g&2080374784)!==0&&(Mu&2080374784)!==0&&(vv(268435456),ub(LW,wo,b1)),o=r.timeoutHandle,o!==Wh&&(r.timeoutHandle=Wh,iK(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fv=0,P8(),Rg=r,Er=o=E0(r.current,null),Vr=g,Hg=ao,Wv=null,ll=!1,F5=Il(r,g),yi=!1,Ng=H1,Ph=po=ci=bl=hl=0,To=Xw=null,Nu=!1,(g&8)!==0&&(g|=g&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=g;0<l;)b=31-No(l),w=1<<b,g|=r[b],l&=~w;return m0=g,a2(),r=GW(),1000<r-RW&&(x.recentlyCreatedOwnerStacks=0,RW=r),yv.discardPendingWarnings(),o}function OA(r,g){nr=null,x.H=qw,x.getCurrentStack=null,K0=!1,Hv=null,g===X5||g===Xu?(g=mO(),Hg=Rw):g===Ii?(g=mO(),Hg=z9):Hg=g===ki?Ei:g!==null&&typeof g==="object"&&typeof g.then==="function"?Gw:Fu,Wv=g;var o=Er;o===null?(Ng=Ww,$e(r,lv(g,r.current))):o.mode&kr&&i6(o)}function qA(){var r=qv.current;return r===null?!0:(Vr&4194048)===Vr?Bv===null?!0:!1:(Vr&62914560)===Vr||(Vr&536870912)!==0?r===Bv:!1}function AA(){var r=x.H;return x.H=qw,r===null?qw:r}function MA(){var r=x.A;return x.A=az,r}function me(r){Tg===null&&(Tg=r._debugTask==null?null:r._debugTask)}function Ze(){Ng=vl,ll||(Vr&4194048)!==Vr&&qv.current!==null||(F5=!0),(hl&134217727)===0&&(bl&134217727)===0||Rg===null||T1(Rg,Vr,po,!1)}function O8(r,g,o){var l=og;og|=lo;var b=AA(),w=MA();if(Rg!==r||Vr!==g){if(U0){var i=r.memoizedUpdaters;0<i.size&&(Lb(r,Vr),i.clear()),L1(r,g)}Yw=null,fh(r,g)}g=!1,i=Ng;r:do try{if(Hg!==ao&&Er!==null){var P=Er,M=Wv;switch(Hg){case Ei:P8(),i=nu;break r;case Rw:case ih:case Hh:case Gw:qv.current===null&&(g=!0);var R=Hg;if(Hg=ao,Wv=null,ah(r,P,M,R),o&&F5){i=H1;break r}break;default:R=Hg,Hg=ao,Wv=null,ah(r,P,M,R)}}WA(),i=Ng;break}catch(n){OA(r,n)}while(1);return g&&r.shellSuspendCounter++,ge(),og=l,x.H=b,x.A=w,Er===null&&(Rg=null,Vr=0,a2()),i}function WA(){for(;Er!==null;)RA(Er)}function NJ(r,g){var o=og;og|=lo;var l=AA(),b=MA();if(Rg!==r||Vr!==g){if(U0){var w=r.memoizedUpdaters;0<w.size&&(Lb(r,Vr),w.clear()),L1(r,g)}Yw=null,mu=bo()+U9,fh(r,g)}else F5=Il(r,g);r:do try{if(Hg!==ao&&Er!==null)g:switch(g=Er,w=Wv,Hg){case Fu:Hg=ao,Wv=null,ah(r,g,w,Fu);break;case ih:case Hh:if(NO(w)){Hg=ao,Wv=null,GA(g);break}g=function(){Hg!==ih&&Hg!==Hh||Rg!==r||(Hg=Iu),Y0(r)},w.then(g,g);break r;case Rw:Hg=Iu;break r;case z9:Hg=_i;break r;case Iu:NO(w)?(Hg=ao,Wv=null,GA(g)):(Hg=ao,Wv=null,ah(r,g,w,Iu));break;case _i:var i=null;switch(Er.tag){case 26:i=Er.memoizedState;case 5:case 27:var P=Er;if(i?HM(i):P.stateNode.complete){Hg=ao,Wv=null;var M=P.sibling;if(M!==null)Er=M;else{var R=P.return;R!==null?(Er=R,xe(R)):Er=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}Hg=ao,Wv=null,ah(r,g,w,_i);break;case Gw:Hg=ao,Wv=null,ah(r,g,w,Gw);break;case Ei:P8(),Ng=nu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}x.actQueue!==null?WA():BJ();break}catch(n){OA(r,n)}while(1);if(ge(),x.H=l,x.A=b,og=o,Er!==null)return H1;return Rg=null,Vr=0,a2(),Ng}function BJ(){for(;Er!==null&&!IQ();)RA(Er)}function RA(r){var g=r.alternate;(r.mode&kr)!==Lr?(u6(r),g=er(r,v8,g,r,m0),i6(r)):g=er(r,v8,g,r,m0),r.memoizedProps=r.pendingProps,g===null?xe(r):Er=g}function GA(r){var g=er(r,mJ,r);r.memoizedProps=r.pendingProps,g===null?xe(r):Er=g}function mJ(r){var g=r.alternate,o=(r.mode&kr)!==Lr;switch(o&&u6(r),r.tag){case 15:case 0:g=Fq(g,r,r.pendingProps,r.type,void 0,Vr);break;case 11:g=Fq(g,r,r.pendingProps,r.type.render,r.ref,Vr);break;case 5:Q6(r);default:Cq(g,r),r=Er=RO(r,m0),g=v8(g,r,m0)}return o&&i6(r),g}function ah(r,g,o,l){ge(),Q6(g),Y5=null,iw=0;var b=g.return;try{if(RJ(r,b,g,o,Vr)){Ng=Ww,$e(r,lv(o,r.current)),Er=null;return}}catch(w){if(b!==null)throw Er=b,w;Ng=Ww,$e(r,lv(o,r.current)),Er=null;return}if(g.flags&32768){if(pr||l===Fu)r=!0;else if(F5||(Vr&536870912)!==0)r=!1;else if(ll=r=!0,l===ih||l===Hh||l===Rw||l===Gw)l=qv.current,l!==null&&l.tag===13&&(l.flags|=16384);XA(g,r)}else xe(g)}function xe(r){var g=r;do{if((g.flags&32768)!==0){XA(g,ll);return}var o=g.alternate;if(r=g.return,u6(g),o=er(g,YJ,o,g,m0),(g.mode&kr)!==Lr&&UO(g),o!==null){Er=o;return}if(g=g.sibling,g!==null){Er=g;return}Er=g=r}while(g!==null);Ng===H1&&(Ng=Q9)}function XA(r,g){do{var o=JJ(r.alternate,r);if(o!==null){o.flags&=32767,Er=o;return}if((r.mode&kr)!==Lr){UO(r),o=r.actualDuration;for(var l=r.child;l!==null;)o+=l.actualDuration,l=l.sibling;r.actualDuration=o}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!g&&(r=r.sibling,r!==null)){Er=r;return}Er=r=o}while(r!==null);Ng=nu,Er=null}function q8(r,g,o,l,b,w,i,P,M,R,n,F,K,B){r.cancelPendingCommit=null;do Ub();while(ro!==el);if(yv.flushLegacyContextWarning(),yv.flushPendingUnsafeLifecycleWarnings(),(og&(lo|Mv))!==uo)throw Error("Should not already be working.");if(vv(o),R===uh?f4(K,B,o,Tg):l!==null?hJ(K,B,o,l,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,Tg):lJ(K,B,o,Tg),g!==null){if(o===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(w=g.lanes|g.childLanes,w|=Xi,T2(r,o,w,i,P,M),r===Rg&&(Er=Rg=null,Vr=0),I5=g,ul=r,fv=o,ai=w,di=b,B9=l,pi=B,m9=F,av=Zu,Z9=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,TJ(o5,function(){return Uw=window.event,av===Zu&&(av=fi),KA(),null})):(r.callbackNode=null,r.callbackPriority=0),l1=null,p1=fg(),F!==null&&bJ(B,p1,F,Tg),l=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,b=eg.p,eg.p=Pv,i=og,og|=Mv;try{LJ(r,g,o)}finally{og=i,eg.p=b,x.T=l}}ro=n9,YA(),JA(),QA()}}function YA(){if(ro===n9){ro=el;var r=ul,g=I5,o=fv,l=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var b=eg.p;eg.p=Pv;var w=og;og|=Mv;try{L5=o,n5=r,he(),dq(g,r),n5=L5=null,o=uH;var i=eO(r.containerInfo),P=o.focusedElem,M=o.selectionRange;if(i!==P&&P&&P.ownerDocument&&wO(P.ownerDocument.documentElement,P)){if(M!==null&&y4(P)){var{start:R,end:n}=M;if(n===void 0&&(n=R),"selectionStart"in P)P.selectionStart=R,P.selectionEnd=Math.min(n,P.value.length);else{var F=P.ownerDocument||document,K=F&&F.defaultView||window;if(K.getSelection){var B=K.getSelection(),br=P.textContent.length,qr=Math.min(M.start,br),Jg=M.end===void 0?qr:Math.min(M.end,br);!B.extend&&qr>Jg&&(i=Jg,Jg=qr,qr=i);var sr=bO(P,qr),z=bO(P,Jg);if(sr&&z&&(B.rangeCount!==1||B.anchorNode!==sr.node||B.anchorOffset!==sr.offset||B.focusNode!==z.node||B.focusOffset!==z.offset)){var $=F.createRange();$.setStart(sr.node,sr.offset),B.removeAllRanges(),qr>Jg?(B.addRange($),B.extend(z.node,z.offset)):($.setEnd(z.node,z.offset),B.addRange($))}}}}F=[];for(B=P;B=B.parentNode;)B.nodeType===1&&F.push({element:B,left:B.scrollLeft,top:B.scrollTop});typeof P.focus==="function"&&P.focus();for(P=0;P<F.length;P++){var L=F[P];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}pu=!!eH,uH=eH=null}finally{og=w,eg.p=b,x.T=l}}r.current=g,ro=F9}}function JA(){if(ro===F9){ro=el;var r=Z9;if(r!==null){p1=fg();var g=v1,o=p1;!Kg||o<=g||(b1?b1.run(console.timeStamp.bind(console,r,g,o,fr,jr,"secondary-light")):console.timeStamp(r,g,o,fr,jr,"secondary-light"))}r=ul,g=I5,o=fv;var l=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var b=eg.p;eg.p=Pv;var w=og;og|=Mv;try{L5=o,n5=r,he(),cq(r,g.alternate,g),n5=L5=null}finally{og=w,eg.p=b,x.T=l}}r=pi,g=m9,v1=fg(),r=g===null?r:p1,g=v1,o=av===ji,l=Tg,l1!==null?OO(r,g,l1,!1,l):!Kg||g<=r||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",r,g,fr,jr,o?"error":"secondary-dark")),ro=I9}}function QA(){if(ro===N9||ro===I9){if(ro===N9){var r=v1;v1=fg();var g=v1,o=av===ji;!Kg||g<=r||(b1?b1.run(console.timeStamp.bind(console,o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?"error":"secondary-light")):console.timeStamp(o?"Interrupted View Transition":"Starting Animation",r,g,fr,jr,o?" error":"secondary-light")),av!==ji&&(av=L9)}ro=el,NQ(),r=ul;var l=I5;g=fv,o=B9;var b=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;b?ro=xu:(ro=el,I5=ul=null,zA(r,r.pendingLanes),Oh=0,Qw=null);var w=r.pendingLanes;if(w===0&&(wl=null),b||nA(r),w=G(g),l=l.stateNode,$o&&typeof $o.onCommitFiberRoot==="function")try{var i=(l.current.flags&128)===128;switch(w){case Pv:var P=d8;break;case _v:P=s8;break;case L0:P=o5;break;case ru:P=ri;break;default:P=o5}$o.onCommitFiberRoot(v5,l,P,i)}catch(F){$0||($0=!0,console.error("React instrumentation encountered an error: %o",F))}if(U0&&r.memoizedUpdaters.clear(),FJ(),o!==null){i=x.T,P=eg.p,eg.p=Pv,x.T=null;try{var M=r.onRecoverableError;for(l=0;l<o.length;l++){var R=o[l],n=ZJ(R.stack);er(R.source,M,R.value,n)}}finally{x.T=i,eg.p=P}}(fv&3)!==0&&Ub(),Y0(r),w=r.pendingLanes,(g&261930)!==0&&(w&42)!==0?(Ru=!0,r===si?Jw++:(Jw=0,si=r)):Jw=0,b||al(g,v1),nb(0,!1)}}function ZJ(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function zA(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,Hb(g)))}function Ub(){return YA(),JA(),QA(),KA()}function KA(){if(ro!==xu)return!1;var r=ul,g=ai;ai=0;var o=G(fv),l=L0===0||L0>o?L0:o;o=x.T;var b=eg.p;try{eg.p=l,x.T=null;var w=di;di=null,l=ul;var i=fv;if(ro=el,I5=ul=null,fv=0,(og&(lo|Mv))!==uo)throw Error("Cannot flush passive effects while already rendering.");vv(i),rH=!0,Cu=!1;var P=0;if(l1=null,P=bo(),av===L9)ub(v1,P,b1);else{var M=v1,R=P,n=av===fi;!Kg||R<=M||(Tg?Tg.run(console.timeStamp.bind(console,n?"Waiting for Paint":"Waiting",M,R,fr,jr,"secondary-light")):console.timeStamp(n?"Waiting for Paint":"Waiting",M,R,fr,jr,"secondary-light"))}M=og,og|=Mv;var F=l.current;he(),bA(F);var K=l.current;F=pi,he(),oA(l,K,i,w,F),nA(l),og=M;var B=bo();if(K=P,F=Tg,l1!==null?OO(K,B,l1,!0,F):!Kg||B<=K||(F?F.run(console.timeStamp.bind(console,"Remaining Effects",K,B,fr,jr,"secondary-dark")):console.timeStamp("Remaining Effects",K,B,fr,jr,"secondary-dark")),al(i,B),nb(0,!1),Cu?l===Qw?Oh++:(Oh=0,Qw=l):Oh=0,Cu=rH=!1,$o&&typeof $o.onPostCommitFiberRoot==="function")try{$o.onPostCommitFiberRoot(v5,l)}catch(qr){$0||($0=!0,console.error("React instrumentation encountered an error: %o",qr))}var br=l.current.stateNode;return br.effectDuration=0,br.passiveEffectDuration=0,!0}finally{eg.p=b,x.T=o,zA(r,g)}}function $A(r,g,o){g=lv(o,g),LO(g),g=y6(r.stateNode,g,2),r=Z1(r,g,2),r!==null&&(U1(r,2),Y0(r))}function wg(r,g,o){if(N5=!1,r.tag===3)$A(r,r,o);else{for(;g!==null;){if(g.tag===3){$A(g,r,o);return}if(g.tag===1){var l=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(wl===null||!wl.has(l))){r=lv(o,r),LO(r),o=c6(2),l=Z1(g,o,2),l!==null&&(j6(o,l,g,r),U1(l,2),Y0(l));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,o)}}function A8(r,g,o){var l=r.pingCache;if(l===null){l=r.pingCache=new dz;var b=new Set;l.set(g,b)}else b=l.get(g),b===void 0&&(b=new Set,l.set(g,b));b.has(o)||(yi=!0,b.add(o),l=xJ.bind(null,r,g,o),U0&&Lb(r,o),g.then(l,l))}function xJ(r,g,o){var l=r.pingCache;l!==null&&l.delete(g),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,(o&127)!==0?0>I0&&(d1=I0=fg(),db=Pu("Promise Resolved"),s1=Ou):(o&4194048)!==0&&0>Nv&&(N0=Nv=fg(),rw=Pu("Promise Resolved"),Ui=Ou),uA()&&x.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Rg===r&&(Vr&o)===o&&(Ng===vl||Ng===Lu&&(Vr&62914560)===Vr&&bo()-Bu<$9?(og&lo)===uo&&fh(r,0):ci|=o,Ph===Vr&&(Ph=0)),Y0(r)}function UA(r,g){g===0&&(g=mh()),r=Ko(r,g),r!==null&&(U1(r,g),Y0(r))}function CJ(r){var g=r.memoizedState,o=0;g!==null&&(o=g.retryLane),UA(r,o)}function tJ(r,g){var o=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:b}=r;b!==null&&(o=b.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(g),UA(r,o)}function M8(r,g,o){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var l=r,b=g,w=b.type===je;w=o||w,b.tag!==22?b.flags&67108864?w&&er(b,LA,l,b):M8(l,b,w):b.memoizedState===null&&(w&&b.flags&8192?er(b,LA,l,b):b.subtreeFlags&67108864&&er(b,M8,l,b,w)),g=g.sibling}}function LA(r,g){Xg(!0);try{rA(g),wA(g),gA(r,g.alternate,g,!1),vA(r,g,0,null,!1,0)}finally{Xg(!1)}}function nA(r){var g=!0;r.current.mode&(Uo|Ev)||(g=!1),M8(r,r.current,g)}function FA(r){if((og&lo)===uo){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=C(r)||"ReactComponent",tu!==null){if(tu.has(g))return;tu.add(g)}else tu=new Set([g]);er(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function Lb(r,g){U0&&r.memoizedUpdaters.forEach(function(o){rb(r,o,g)})}function TJ(r,g){var o=x.actQueue;return o!==null?(o.push(g),gK):p8(r,g)}function SJ(r){uA()&&x.actQueue===null&&er(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,C(r))})}function Y0(r){r!==B5&&r.next===null&&(B5===null?Tu=B5=r:B5=B5.next=r),Su=!0,x.actQueue!==null?oH||(oH=!0,mA()):gH||(gH=!0,mA())}function nb(r,g){if(!vH&&Su){vH=!0;do{var o=!1;for(var l=Tu;l!==null;){if(!g)if(r!==0){var b=l.pendingLanes;if(b===0)var w=0;else{var{suspendedLanes:i,pingedLanes:P}=l;w=(1<<31-No(42|r)+1)-1,w&=b&~(i&~P),w=w&201326741?w&201326741|1:w?w|2:0}w!==0&&(o=!0,BA(l,w))}else w=Vr,w=Fl(l,l===Rg?w:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Wh),(w&3)===0||Il(l,w)||(o=!0,BA(l,w));l=l.next}}while(o);vH=!1}}function kJ(){Uw=window.event,W8()}function W8(){Su=oH=gH=!1;var r=0;il!==0&&jJ()&&(r=il);for(var g=bo(),o=null,l=Tu;l!==null;){var b=l.next,w=IA(l,g);if(w===0)l.next=null,o===null?Tu=b:o.next=b,b===null&&(B5=o);else if(o=l,r!==0||(w&3)!==0)Su=!0;l=b}ro!==el&&ro!==xu||nb(r,!1),il!==0&&(il=0)}function IA(r,g){for(var{suspendedLanes:o,pingedLanes:l,expirationTimes:b}=r,w=r.pendingLanes&-62914561;0<w;){var i=31-No(w),P=1<<i,M=b[i];if(M===-1){if((P&o)===0||(P&l)!==0)b[i]=Z4(P,g)}else M<=g&&(r.expiredLanes|=P);w&=~P}if(g=Rg,o=Vr,o=Fl(r,r===g?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Wh),l=r.callbackNode,o===0||r===g&&(Hg===ih||Hg===Hh)||r.cancelPendingCommit!==null)return l!==null&&R8(l),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Il(r,o)){if(g=o&-o,g!==r.callbackPriority||x.actQueue!==null&&l!==lH)R8(l);else return g;switch(G(o)){case Pv:case _v:o=s8;break;case L0:o=o5;break;case ru:o=ri;break;default:o=o5}return l=NA.bind(null,r),x.actQueue!==null?(x.actQueue.push(l),o=lH):o=p8(o,l),r.callbackPriority=g,r.callbackNode=o,g}return l!==null&&R8(l),r.callbackPriority=2,r.callbackNode=null,2}function NA(r,g){if(Ru=Wu=!1,Uw=window.event,ro!==el&&ro!==xu)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(av===Zu&&(av=fi),Ub()&&r.callbackNode!==o)return null;var l=Vr;if(l=Fl(r,r===Rg?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Wh),l===0)return null;return HA(r,l,g),IA(r,bo()),r.callbackNode!=null&&r.callbackNode===o?NA.bind(null,r):null}function BA(r,g){if(Ub())return null;Wu=Ru,Ru=!1,HA(r,g,!0)}function R8(r){r!==lH&&r!==null&&FQ(r)}function mA(){x.actQueue!==null&&x.actQueue.push(function(){return W8(),null}),HK(function(){(og&(lo|Mv))!==uo?p8(d8,kJ):W8()})}function G8(){if(il===0){var r=vh;r===0&&(r=pe,pe<<=1,(pe&261888)===0&&(pe=256)),il=r}return il}function ZA(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Og(r,"action"),bb(""+r)}function xA(r,g){var o=g.ownerDocument.createElement("input");return o.name=g.name,o.value=g.value,r.id&&o.setAttribute("form",r.id),g.parentNode.insertBefore(o,g),r=new FormData(r),o.parentNode.removeChild(o),r}function DJ(r,g,o,l,b){if(g==="submit"&&o&&o.stateNode===b){var w=ZA((b[Bo]||null).action),i=l.submitter;i&&(g=(g=i[Bo]||null)?ZA(g.formAction):i.getAttribute("formAction"),g!==null&&(w=g,i=null));var P=new hu("action","action",null,l,b);r.push({event:P,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(il!==0){var M=i?xA(b,i):new FormData(b),R={pending:!0,data:M,method:b.method,action:w};Object.freeze(R),T6(o,R,null,M)}}else typeof w==="function"&&(P.preventDefault(),M=i?xA(b,i):new FormData(b),R={pending:!0,data:M,method:b.method,action:w},Object.freeze(R),T6(o,R,w,M))},currentTarget:b}]})}}function Ce(r,g,o){r.currentTarget=o;try{g(r)}catch(l){Mi(l)}r.currentTarget=null}function CA(r,g){g=(g&4)!==0;for(var o=0;o<r.length;o++){var l=r[o];r:{var b=void 0,w=l.event;if(l=l.listeners,g)for(var i=l.length-1;0<=i;i--){var P=l[i],M=P.instance,R=P.currentTarget;if(P=P.listener,M!==b&&w.isPropagationStopped())break r;M!==null?er(M,Ce,w,P,R):Ce(w,P,R),b=M}else for(i=0;i<l.length;i++){if(P=l[i],M=P.instance,R=P.currentTarget,P=P.listener,M!==b&&w.isPropagationStopped())break r;M!==null?er(M,Ce,w,P,R):Ce(w,P,R),b=M}}}}function dr(r,g){hH.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var o=g[gi];o===void 0&&(o=g[gi]=new Set);var l=r+"__bubble";o.has(l)||(tA(g,r,2,!1),o.add(l))}function X8(r,g,o){hH.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;g&&(l|=4),tA(o,r,l,g)}function Y8(r){if(!r[ku]){r[ku]=!0,mM.forEach(function(o){o!=="selectionchange"&&(hH.has(o)||X8(o,!1,r),X8(o,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[ku]||(g[ku]=!0,X8("selectionchange",!1,g))}}function tA(r,g,o,l){switch(WM(g)){case Pv:var b=JQ;break;case _v:b=QQ;break;default:b=C8}o=b.bind(null,g,o,r),b=void 0,!bi||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(b=!0),l?b!==void 0?r.addEventListener(g,o,{capture:!0,passive:b}):r.addEventListener(g,o,!0):b!==void 0?r.addEventListener(g,o,{passive:b}):r.addEventListener(g,o,!1)}function J8(r,g,o,l,b){var w=l;if((g&1)===0&&(g&2)===0&&l!==null)r:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var P=l.stateNode.containerInfo;if(P===b)break;if(i===4)for(i=l.return;i!==null;){var M=i.tag;if((M===3||M===4)&&i.stateNode.containerInfo===b)return;i=i.return}for(;P!==null;){if(i=Gr(P),i===null)return;if(M=i.tag,M===5||M===6||M===26||M===27){l=w=i;continue r}P=P.parentNode}}l=l.return}fP(function(){var R=w,n=_4(o),F=[];r:{var K=WW.get(r);if(K!==void 0){var B=hu,br=r;switch(r){case"keypress":if(E2(o)===0)break r;case"keydown":case"keyup":B=Wz;break;case"focusin":br="focus",B=ii;break;case"focusout":br="blur",B=ii;break;case"beforeblur":case"afterblur":B=ii;break;case"click":if(o.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=vW;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=hz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Xz;break;case OW:case qW:case AW:B=ez;break;case MW:B=Jz;break;case"scroll":case"scrollend":B=vz;break;case"wheel":B=zz;break;case"copy":case"cut":case"paste":B=iz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=hW;break;case"toggle":case"beforetoggle":B=$z}var qr=(g&4)!==0,Jg=!qr&&(r==="scroll"||r==="scrollend"),sr=qr?K!==null?K+"Capture":null:K;qr=[];for(var z=R,$;z!==null;){var L=z;if($=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||$===null||sr===null||(L=wb(z,sr),L!=null&&qr.push(Fb(z,L,$))),Jg)break;z=z.return}0<qr.length&&(K=new B(K,br,null,o,n),F.push({event:K,listeners:qr}))}}if((g&7)===0){r:{if(K=r==="mouseover"||r==="pointerover",B=r==="mouseout"||r==="pointerout",K&&o!==kb&&(br=o.relatedTarget||o.fromElement)&&(Gr(br)||br[E1]))break r;if(B||K){if(K=n.window===n?n:(K=n.ownerDocument)?K.defaultView||K.parentWindow:window,B){if(br=o.relatedTarget||o.toElement,B=R,br=br?Gr(br):null,br!==null&&(Jg=rr(br),qr=br.tag,br!==Jg||qr!==5&&qr!==27&&qr!==6))br=null}else B=null,br=R;if(B!==br){if(qr=vW,L="onMouseLeave",sr="onMouseEnter",z="mouse",r==="pointerout"||r==="pointerover")qr=hW,L="onPointerLeave",sr="onPointerEnter",z="pointer";if(Jg=B==null?K:mr(B),$=br==null?K:mr(br),K=new qr(L,z+"leave",B,o,n),K.target=Jg,K.relatedTarget=$,L=null,Gr(n)===R&&(qr=new qr(sr,z+"enter",br,o,n),qr.target=$,qr.relatedTarget=Jg,L=qr),Jg=L,B&&br)g:{qr=VJ,sr=B,z=br,$=0;for(L=sr;L;L=qr(L))$++;L=0;for(var D=z;D;D=qr(D))L++;for(;0<$-L;)sr=qr(sr),$--;for(;0<L-$;)z=qr(z),L--;for(;$--;){if(sr===z||z!==null&&sr===z.alternate){qr=sr;break g}sr=qr(sr),z=qr(z)}qr=null}else qr=null;B!==null&&TA(F,K,B,qr,!1),br!==null&&Jg!==null&&TA(F,Jg,br,qr,!0)}}}r:{if(K=R?mr(R):window,B=K.nodeName&&K.nodeName.toLowerCase(),B==="select"||B==="input"&&K.type==="file")var ir=oO;else if(rO(K))if(HW)ir=gJ;else{ir=sY;var Fr=dY}else B=K.nodeName,!B||B.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?R&&hb(R.elementType)&&(ir=oO):ir=rJ;if(ir&&(ir=ir(r,R))){gO(F,ir,o,n);break r}Fr&&Fr(r,K,R),r==="focusout"&&R&&K.type==="number"&&R.memoizedProps.value!=null&&t4(K,"number",K.value)}switch(Fr=R?mr(R):window,r){case"focusin":if(rO(Fr)||Fr.contentEditable==="true")i5=Fr,Pi=R,jb=null;break;case"focusout":jb=Pi=i5=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,uO(F,o,n);break;case"selectionchange":if(Fz)break;case"keydown":case"keyup":uO(F,o,n)}var zr;if(Hi)r:{switch(r){case"compositionstart":var Xr="onCompositionStart";break r;case"compositionend":Xr="onCompositionEnd";break r;case"compositionupdate":Xr="onCompositionUpdate";break r}Xr=void 0}else u5?dP(r,o)&&(Xr="onCompositionEnd"):r==="keydown"&&o.keyCode===bW&&(Xr="onCompositionStart");if(Xr&&(wW&&o.locale!=="ko"&&(u5||Xr!=="onCompositionStart"?Xr==="onCompositionEnd"&&u5&&(zr=aP()):(y1=n,wi=("value"in y1)?y1.value:y1.textContent,u5=!0)),Fr=te(R,Xr),0<Fr.length&&(Xr=new lW(Xr,r,null,o,n),F.push({event:Xr,listeners:Fr}),zr?Xr.data=zr:(zr=sP(o),zr!==null&&(Xr.data=zr)))),zr=Lz?jY(r,o):fY(r,o))Xr=te(R,"onBeforeInput"),0<Xr.length&&(Fr=new Pz("onBeforeInput","beforeinput",null,o,n),F.push({event:Fr,listeners:Xr}),Fr.data=zr);DJ(F,r,R,o,n)}CA(F,g)})}function Fb(r,g,o){return{instance:r,listener:g,currentTarget:o}}function te(r,g){for(var o=g+"Capture",l=[];r!==null;){var b=r,w=b.stateNode;if(b=b.tag,b!==5&&b!==26&&b!==27||w===null||(b=wb(r,o),b!=null&&l.unshift(Fb(r,b,w)),b=wb(r,g),b!=null&&l.push(Fb(r,b,w))),r.tag===3)return l;r=r.return}return[]}function VJ(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function TA(r,g,o,l,b){for(var w=g._reactName,i=[];o!==null&&o!==l;){var P=o,M=P.alternate,R=P.stateNode;if(P=P.tag,M!==null&&M===l)break;P!==5&&P!==26&&P!==27||R===null||(M=R,b?(R=wb(o,w),R!=null&&i.unshift(Fb(o,R,M))):b||(R=wb(o,w),R!=null&&i.push(Fb(o,R,M)))),o=o.return}i.length!==0&&r.push({event:g,listeners:i})}function Q8(r,g){_Y(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||gW||(gW=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var o={registrationNameDependencies:pl,possibleRegistrationNames:oi};hb(r)||typeof g.is==="string"||yY(r,g,o),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function ho(r,g,o,l){g!==o&&(o=S1(o),S1(g)!==o&&(l[r]=g))}function _J(r,g,o){g.forEach(function(l){o[DA(l)]=l==="style"?K8(r):r.getAttribute(l)})}function J0(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function SA(r,g){return r=r.namespaceURI===ou||r.namespaceURI===h5?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function S1(r){return rv(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Qo(r)),cg(r)),(typeof r==="string"?r:""+r).replace(oK,`
`).replace(vK,"")}function kA(r,g){return g=S1(g),S1(r)===g?!0:!1}function Mg(r,g,o,l,b,w){switch(o){case"children":if(typeof l==="string")_2(l,g,!1),g==="body"||g==="textarea"&&l===""||lb(r,l);else if(typeof l==="number"||typeof l==="bigint")_2(""+l,g,!1),g!=="body"&&lb(r,""+l);break;case"className":k2(r,"class",l);break;case"tabIndex":k2(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":k2(r,o,l);break;case"style":yP(r,l,w);break;case"data":if(g!=="object"){k2(r,"data",l);break}case"src":case"href":if(l===""&&(g!=="a"||o!=="href")){o==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',o,o),r.removeAttribute(o);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Og(l,o),l=bb(""+l),r.setAttribute(o,l);break;case"action":case"formAction":if(l!=null&&(g==="form"?o==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(b.encType==null&&b.method==null||_u||(_u=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),b.target==null||Vu||(Vu=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?o==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||b.type==="submit"||b.type==="image"||Du?g!=="button"||b.type==null||b.type==="submit"||Du?typeof l==="function"&&(b.name==null||S9||(S9=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),b.formEncType==null&&b.formMethod==null||_u||(_u=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),b.formTarget==null||Vu||(Vu=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(Du=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(Du=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):o==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof w==="function"&&(o==="formAction"?(g!=="input"&&Mg(r,g,"name",b.name,b,null),Mg(r,g,"formEncType",b.formEncType,b,null),Mg(r,g,"formMethod",b.formMethod,b,null),Mg(r,g,"formTarget",b.formTarget,b,null)):(Mg(r,g,"encType",b.encType,b,null),Mg(r,g,"method",b.method,b,null),Mg(r,g,"target",b.target,b,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(o);break}Og(l,o),l=bb(""+l),r.setAttribute(o,l);break;case"onClick":l!=null&&(typeof l!=="function"&&J0(o,l),r.onclick=_0);break;case"onScroll":l!=null&&(typeof l!=="function"&&J0(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&J0(o,l),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(b.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Og(l,o),o=bb(""+l),r.setAttributeNS(qh,"xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Og(l,o),r.setAttribute(o,""+l)):r.removeAttribute(o);break;case"inert":l!==""||Eu[o]||(Eu[o]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",o));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":l===!0?r.setAttribute(o,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Og(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Og(l,o),r.setAttribute(o,l)):r.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(o):(Og(l,o),r.setAttribute(o,l));break;case"popover":dr("beforetoggle",r),dr("toggle",r),S2(r,"popover",l);break;case"xlinkActuate":V0(r,qh,"xlink:actuate",l);break;case"xlinkArcrole":V0(r,qh,"xlink:arcrole",l);break;case"xlinkRole":V0(r,qh,"xlink:role",l);break;case"xlinkShow":V0(r,qh,"xlink:show",l);break;case"xlinkTitle":V0(r,qh,"xlink:title",l);break;case"xlinkType":V0(r,qh,"xlink:type",l);break;case"xmlBase":V0(r,bH,"xml:base",l);break;case"xmlLang":V0(r,bH,"xml:lang",l);break;case"xmlSpace":V0(r,bH,"xml:space",l);break;case"is":w!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),S2(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":k9||l==null||typeof l!=="object"||(k9=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N"?(o=cP(o),S2(r,o,l)):pl.hasOwnProperty(o)&&l!=null&&typeof l!=="function"&&J0(o,l)}}function z8(r,g,o,l,b,w){switch(o){case"style":yP(r,l,w);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(o=l.__html,o!=null){if(b.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=o}}break;case"children":typeof l==="string"?lb(r,l):(typeof l==="number"||typeof l==="bigint")&&lb(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&J0(o,l),dr("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&J0(o,l),dr("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&J0(o,l),r.onclick=_0);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(pl.hasOwnProperty(o))l!=null&&typeof l!=="function"&&J0(o,l);else r:{if(o[0]==="o"&&o[1]==="n"&&(b=o.endsWith("Capture"),g=o.slice(2,b?o.length-7:void 0),w=r[Bo]||null,w=w!=null?w[o]:null,typeof w==="function"&&r.removeEventListener(g,w,b),typeof l==="function")){typeof w!=="function"&&w!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(g,l,b);break r}o in r?r[o]=l:l===!0?r.setAttribute(o,""):S2(r,o,l)}}}function Ao(r,g,o){switch(Q8(g,o),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var l=!1,b=!1,w;for(w in o)if(o.hasOwnProperty(w)){var i=o[w];if(i!=null)switch(w){case"src":l=!0;break;case"srcSet":b=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Mg(r,g,w,i,o,null)}}b&&Mg(r,g,"srcSet",o.srcSet,o,null),l&&Mg(r,g,"src",o.src,o,null);return;case"input":n1("input",o),dr("invalid",r);var P=w=i=b=null,M=null,R=null;for(l in o)if(o.hasOwnProperty(l)){var n=o[l];if(n!=null)switch(l){case"name":b=n;break;case"type":i=n;break;case"checked":M=n;break;case"defaultChecked":R=n;break;case"value":w=n;break;case"defaultValue":P=n;break;case"children":case"dangerouslySetInnerHTML":if(n!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Mg(r,g,l,n,o,null)}}FP(r,o),IP(r,w,P,M,R,i,b,!1);return;case"select":n1("select",o),dr("invalid",r),l=i=w=null;for(b in o)if(o.hasOwnProperty(b)&&(P=o[b],P!=null))switch(b){case"value":w=P;break;case"defaultValue":i=P;break;case"multiple":l=P;default:Mg(r,g,b,P,o,null)}mP(r,o),g=w,o=i,r.multiple=!!l,g!=null?xh(r,!!l,g,!1):o!=null&&xh(r,!!l,o,!0);return;case"textarea":n1("textarea",o),dr("invalid",r),w=b=l=null;for(i in o)if(o.hasOwnProperty(i)&&(P=o[i],P!=null))switch(i){case"value":l=P;break;case"defaultValue":b=P;break;case"children":w=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Mg(r,g,i,P,o,null)}ZP(r,o),CP(r,l,b,w);return;case"option":NP(r,o);for(M in o)if(o.hasOwnProperty(M)&&(l=o[M],l!=null))switch(M){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Mg(r,g,M,l,o,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(l=0;l<zw.length;l++)dr(zw[l],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in o)if(o.hasOwnProperty(R)&&(l=o[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Mg(r,g,R,l,o,null)}return;default:if(hb(g)){for(n in o)o.hasOwnProperty(n)&&(l=o[n],l!==void 0&&z8(r,g,n,l,o,void 0));return}}for(P in o)o.hasOwnProperty(P)&&(l=o[P],l!=null&&Mg(r,g,P,l,o,null))}function EJ(r,g,o,l){switch(Q8(g,l),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var b=null,w=null,i=null,P=null,M=null,R=null,n=null;for(B in o){var F=o[B];if(o.hasOwnProperty(B)&&F!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":M=F;default:l.hasOwnProperty(B)||Mg(r,g,B,null,l,F)}}for(var K in l){var B=l[K];if(F=o[K],l.hasOwnProperty(K)&&(B!=null||F!=null))switch(K){case"type":w=B;break;case"name":b=B;break;case"checked":R=B;break;case"defaultChecked":n=B;break;case"value":i=B;break;case"defaultValue":P=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:B!==F&&Mg(r,g,K,B,l,F)}}g=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,g||!l||T9||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),T9=!0),!g||l||t9||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),t9=!0),C4(r,i,P,M,R,n,w,b);return;case"select":B=i=P=K=null;for(w in o)if(M=o[w],o.hasOwnProperty(w)&&M!=null)switch(w){case"value":break;case"multiple":B=M;default:l.hasOwnProperty(w)||Mg(r,g,w,null,l,M)}for(b in l)if(w=l[b],M=o[b],l.hasOwnProperty(b)&&(w!=null||M!=null))switch(b){case"value":K=w;break;case"defaultValue":P=w;break;case"multiple":i=w;default:w!==M&&Mg(r,g,b,w,l,M)}l=P,g=i,o=B,K!=null?xh(r,!!g,K,!1):!!o!==!!g&&(l!=null?xh(r,!!g,l,!0):xh(r,!!g,g?[]:"",!1));return;case"textarea":B=K=null;for(P in o)if(b=o[P],o.hasOwnProperty(P)&&b!=null&&!l.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:Mg(r,g,P,null,l,b)}for(i in l)if(b=l[i],w=o[i],l.hasOwnProperty(i)&&(b!=null||w!=null))switch(i){case"value":K=b;break;case"defaultValue":B=b;break;case"children":break;case"dangerouslySetInnerHTML":if(b!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:b!==w&&Mg(r,g,i,b,l,w)}xP(r,K,B);return;case"option":for(var br in o)if(K=o[br],o.hasOwnProperty(br)&&K!=null&&!l.hasOwnProperty(br))switch(br){case"selected":r.selected=!1;break;default:Mg(r,g,br,null,l,K)}for(M in l)if(K=l[M],B=o[M],l.hasOwnProperty(M)&&K!==B&&(K!=null||B!=null))switch(M){case"selected":r.selected=K&&typeof K!=="function"&&typeof K!=="symbol";break;default:Mg(r,g,M,K,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qr in o)K=o[qr],o.hasOwnProperty(qr)&&K!=null&&!l.hasOwnProperty(qr)&&Mg(r,g,qr,null,l,K);for(R in l)if(K=l[R],B=o[R],l.hasOwnProperty(R)&&K!==B&&(K!=null||B!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Mg(r,g,R,K,l,B)}return;default:if(hb(g)){for(var Jg in o)K=o[Jg],o.hasOwnProperty(Jg)&&K!==void 0&&!l.hasOwnProperty(Jg)&&z8(r,g,Jg,void 0,l,K);for(n in l)K=l[n],B=o[n],!l.hasOwnProperty(n)||K===B||K===void 0&&B===void 0||z8(r,g,n,K,l,B);return}}for(var sr in o)K=o[sr],o.hasOwnProperty(sr)&&K!=null&&!l.hasOwnProperty(sr)&&Mg(r,g,sr,null,l,K);for(F in l)K=l[F],B=o[F],!l.hasOwnProperty(F)||K===B||K==null&&B==null||Mg(r,g,F,K,l,B)}function DA(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function K8(r){var g={};r=r.style;for(var o=0;o<r.length;o++){var l=r[o];g[l]=r.getPropertyValue(l)}return g}function VA(r,g,o){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,b=l="",w;for(w in g)if(g.hasOwnProperty(w)){var i=g[w];i!=null&&typeof i!=="boolean"&&i!==""&&(w.indexOf("--")===0?(s5(i,w),l+=b+w+":"+(""+i).trim()):typeof i!=="number"||i===0||sM.has(w)?(s5(i,w),l+=b+w.replace(jM,"-$1").toLowerCase().replace(fM,"-ms-")+":"+(""+i).trim()):l+=b+w.replace(jM,"-$1").toLowerCase().replace(fM,"-ms-")+":"+i+"px",b=";")}l=l||null,g=r.getAttribute("style"),g!==l&&(l=S1(l),S1(g)!==l&&(o.style=K8(r)))}}function Kv(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Og(l,g),r===""+l)return}ho(g,r,l,w)}function _A(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}ho(g,r,l,w)}function $8(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Og(l,o),r===""+l)return}ho(g,r,l,w)}function EA(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Og(l,g),r===""+l))return}ho(g,r,l,w)}function U8(r,g,o,l,b,w){if(b.delete(o),r=r.getAttribute(o),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Og(l,g),o=bb(""+l),r===o)return}ho(g,r,l,w)}function yA(r,g,o,l){for(var b={},w=new Set,i=r.attributes,P=0;P<i.length;P++)switch(i[P].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:w.add(i[P].name)}if(hb(g)){for(var M in o)if(o.hasOwnProperty(M)){var R=o[M];if(R!=null){if(pl.hasOwnProperty(M))typeof R!=="function"&&J0(M,R);else if(o.suppressHydrationWarning!==!0)switch(M){case"children":typeof R!=="string"&&typeof R!=="number"||ho("children",r.textContent,R,b);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,R=R?R.__html:void 0,R!=null&&(R=SA(r,R),ho(M,i,R,b));continue;case"style":w.delete(M),VA(r,R,b);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":w.delete(M.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",M);continue;case"className":w.delete("class"),i=UP(r,"class",R),ho("className",i,R,b);continue;default:l.context===P1&&g!=="svg"&&g!=="math"?w.delete(M.toLowerCase()):w.delete(M),i=UP(r,M,R),ho(M,i,R,b)}}}}else for(R in o)if(o.hasOwnProperty(R)&&(M=o[R],M!=null)){if(pl.hasOwnProperty(R))typeof M!=="function"&&J0(R,M);else if(o.suppressHydrationWarning!==!0)switch(R){case"children":typeof M!=="string"&&typeof M!=="number"||ho("children",r.textContent,M,b);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":i=r.innerHTML,M=M?M.__html:void 0,M!=null&&(M=SA(r,M),i!==M&&(b[R]={__html:i}));continue;case"className":Kv(r,R,"class",M,w,b);continue;case"tabIndex":Kv(r,R,"tabindex",M,w,b);continue;case"style":w.delete(R),VA(r,M,b);continue;case"multiple":w.delete(R),ho(R,r.multiple,M,b);continue;case"muted":w.delete(R),ho(R,r.muted,M,b);continue;case"autoFocus":w.delete("autofocus"),ho(R,r.autofocus,M,b);continue;case"data":if(g!=="object"){w.delete(R),i=r.getAttribute("data"),ho(R,i,M,b);continue}case"src":case"href":if(!(M!==""||g==="a"&&R==="href"||g==="object"&&R==="data")){R==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',R,R);continue}U8(r,R,R,M,w,b);continue;case"action":case"formAction":if(i=r.getAttribute(R),typeof M==="function"){w.delete(R.toLowerCase()),R==="formAction"?(w.delete("name"),w.delete("formenctype"),w.delete("formmethod"),w.delete("formtarget")):(w.delete("enctype"),w.delete("method"),w.delete("target"));continue}else if(i===lK){w.delete(R.toLowerCase()),ho(R,"function",M,b);continue}U8(r,R,R.toLowerCase(),M,w,b);continue;case"xlinkHref":U8(r,R,"xlink:href",M,w,b);continue;case"contentEditable":$8(r,R,"contenteditable",M,w,b);continue;case"spellCheck":$8(r,R,"spellcheck",M,w,b);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":$8(r,R,R,M,w,b);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":_A(r,R,R.toLowerCase(),M,w,b);continue;case"capture":case"download":r:{P=r;var n=i=R,F=b;if(w.delete(n),P=P.getAttribute(n),P===null)switch(typeof M){case"undefined":case"function":case"symbol":break r;default:if(M===!1)break r}else if(M!=null)switch(typeof M){case"function":case"symbol":break;case"boolean":if(M===!0&&P==="")break r;break;default:if(Og(M,i),P===""+M)break r}ho(i,P,M,F)}continue;case"cols":case"rows":case"size":case"span":r:{if(P=r,n=i=R,F=b,w.delete(n),P=P.getAttribute(n),P===null)switch(typeof M){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(M)||1>M)break r}else if(M!=null)switch(typeof M){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(M)||1>M)&&(Og(M,i),P===""+M))break r}ho(i,P,M,F)}continue;case"rowSpan":EA(r,R,"rowspan",M,w,b);continue;case"start":EA(r,R,R,M,w,b);continue;case"xHeight":Kv(r,R,"x-height",M,w,b);continue;case"xlinkActuate":Kv(r,R,"xlink:actuate",M,w,b);continue;case"xlinkArcrole":Kv(r,R,"xlink:arcrole",M,w,b);continue;case"xlinkRole":Kv(r,R,"xlink:role",M,w,b);continue;case"xlinkShow":Kv(r,R,"xlink:show",M,w,b);continue;case"xlinkTitle":Kv(r,R,"xlink:title",M,w,b);continue;case"xlinkType":Kv(r,R,"xlink:type",M,w,b);continue;case"xmlBase":Kv(r,R,"xml:base",M,w,b);continue;case"xmlLang":Kv(r,R,"xml:lang",M,w,b);continue;case"xmlSpace":Kv(r,R,"xml:space",M,w,b);continue;case"inert":M!==""||Eu[R]||(Eu[R]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",R)),_A(r,R,R,M,w,b);continue;default:if(!(2<R.length)||R[0]!=="o"&&R[0]!=="O"||R[1]!=="n"&&R[1]!=="N"){P=cP(R),i=!1,l.context===P1&&g!=="svg"&&g!=="math"?w.delete(P.toLowerCase()):(n=R.toLowerCase(),n=vu.hasOwnProperty(n)?vu[n]||null:null,n!==null&&n!==R&&(i=!0,w.delete(n)),w.delete(P));r:if(n=r,F=P,P=M,gb(F))if(n.hasAttribute(F))n=n.getAttribute(F),Og(P,F),P=n===""+P?P:n;else{switch(typeof P){case"function":case"symbol":break r;case"boolean":if(n=F.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-")break r}P=P===void 0?void 0:null}else P=void 0;i||ho(R,P,M,b)}}}return 0<w.size&&o.suppressHydrationWarning!==!0&&_J(r,w,b),Object.keys(b).length===0?null:b}function yJ(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function cA(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cJ(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var b=o[l],w=b.transferSize,i=b.initiatorType,P=b.duration;if(w&&P&&cA(i)){i=0,P=b.responseEnd;for(l+=1;l<o.length;l++){var M=o[l],R=M.startTime;if(R>P)break;var{transferSize:n,initiatorType:F}=M;n&&cA(F)&&(M=M.responseEnd,i+=n*(M<P?1:(P-R)/(M-R)))}if(--l,g+=8*(w+i)/(b.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function Te(r){return r.nodeType===9?r:r.ownerDocument}function jA(r){switch(r){case h5:return Z5;case ou:return cu;default:return P1}}function fA(r,g){if(r===P1)switch(g){case"svg":return Z5;case"math":return cu;default:return P1}return r===Z5&&g==="foreignObject"?P1:r}function L8(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function jJ(){var r=window.event;if(r&&r.type==="popstate"){if(r===iH)return!1;return iH=r,!0}return iH=null,!1}function Ib(){var r=window.event;return r&&r!==Uw?r.type:null}function Nb(){var r=window.event;return r&&r!==Uw?r.timeStamp:-1.1}function fJ(r){setTimeout(function(){throw r})}function aJ(r,g,o){switch(g){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src?r.src=o.src:o.srcSet&&(r.srcset=o.srcSet)}}function pJ(){}function dJ(r,g,o,l){EJ(r,g,o,l),r[Bo]=l}function aA(r){lb(r,"")}function sJ(r,g,o){r.nodeValue=o}function pA(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[Bo]||null;if(g!==null){var o=Br(r);o!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,er(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,er(o,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function k1(r){return r==="head"}function rQ(r,g){r.removeChild(g)}function gQ(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function dA(r,g){var o=g,l=0;do{var b=o.nextSibling;if(r.removeChild(o),b&&b.nodeType===8)if(o=b.data,o===$w||o===yu){if(l===0){r.removeChild(b),sh(g);return}l--}else if(o===Kw||o===Hl||o===Mh||o===m5||o===Ah)l++;else if(o===bK)Bb(r.ownerDocument.documentElement);else if(o===eK){o=r.ownerDocument.head,Bb(o);for(var w=o.firstChild;w;){var{nextSibling:i,nodeName:P}=w;w[Sb]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=i}}else o===wK&&Bb(r.ownerDocument.body);o=b}while(o);sh(g)}function sA(r,g){var o=r;r=0;do{var l=o.nextSibling;if(o.nodeType===1?g?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(g?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o===$w)if(r===0)break;else r--;else o!==Kw&&o!==Hl&&o!==Mh&&o!==m5||r++;o=l}while(o)}function oQ(r){sA(r,!0)}function vQ(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function lQ(r){r.nodeValue=""}function hQ(r){sA(r,!1)}function bQ(r,g){g=g[uK],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function wQ(r,g){r.nodeValue=g}function n8(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var o=g;switch(g=g.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":n8(o),ur(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function eQ(r,g,o,l){for(;r.nodeType===1;){var b=o;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(g==="input"&&r.type==="hidden"){Og(b.name,"name");var w=b.name==null?null:""+b.name;if(b.type==="hidden"&&r.getAttribute("name")===w)return r}else return r;else if(!r[Sb])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(w=r.getAttribute("rel"),w==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(w!==b.rel||r.getAttribute("href")!==(b.href==null||b.href===""?null:b.href)||r.getAttribute("crossorigin")!==(b.crossOrigin==null?null:b.crossOrigin)||r.getAttribute("title")!==(b.title==null?null:b.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(w=r.getAttribute("src"),(w!==(b.src==null?null:b.src)||r.getAttribute("type")!==(b.type==null?null:b.type)||r.getAttribute("crossorigin")!==(b.crossOrigin==null?null:b.crossOrigin))&&w&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=uv(r.nextSibling),r===null)break}return null}function uQ(r,g,o){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function rM(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=uv(r.nextSibling),r===null)return null}return r}function F8(r){return r.data===Hl||r.data===Mh}function I8(r){return r.data===m5||r.data===Hl&&r.ownerDocument.readyState!==V9}function iQ(r,g){var o=r.ownerDocument;if(r.data===Mh)r._reactRetry=g;else if(r.data!==Hl||o.readyState!==V9)g();else{var l=function(){g(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function uv(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Kw||g===m5||g===Hl||g===Mh||g===Ah||g===wH||g===D9)break;if(g===$w||g===yu)return null}}return r}function gM(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),o={},l=r.attributes,b=0;b<l.length;b++){var w=l[b];o[DA(w.name)]=w.name.toLowerCase()==="style"?K8(r):w.value}return{type:g,props:o}}return r.nodeType===8?r.data===Ah?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function oM(r,g,o){return o===null||o[hK]!==!0?(r.nodeValue===g?r=null:(g=S1(g),r=S1(r.nodeValue)===g?null:r.nodeValue),r):null}function N8(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===$w||o===yu){if(g===0)return uv(r.nextSibling);g--}else o!==Kw&&o!==m5&&o!==Hl&&o!==Mh&&o!==Ah||g++}r=r.nextSibling}return null}function vM(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var o=r.data;if(o===Kw||o===m5||o===Hl||o===Mh||o===Ah){if(g===0)return r;g--}else o!==$w&&o!==yu||g++}r=r.previousSibling}return null}function HQ(r){sh(r)}function PQ(r){sh(r)}function OQ(r){sh(r)}function lM(r,g,o,l,b){switch(b&&V4(r,l.ancestorInfo),g=Te(o),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function qQ(r,g,o,l){if(!o[E1]&&Br(o)){var b=o.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",b,b,b)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(b=o.attributes;b.length;)o.removeAttributeNode(b[0]);Ao(o,r,g),o[Mo]=l,o[Bo]=g}function Bb(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);ur(r)}function Se(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function hM(r,g,o){var l=x5;if(l&&typeof g==="string"&&g){var b=zv(g);b='link[rel="'+r+'"][href="'+b+'"]',typeof o==="string"&&(b+='[crossorigin="'+o+'"]'),f9.has(b)||(f9.add(b),r={rel:r,crossOrigin:o,href:g},l.querySelector(b)===null&&(g=l.createElement("link"),Ao(g,"link",r),Kr(g),l.head.appendChild(g)))}}function bM(r,g,o,l){var b=(b=V1.current)?Se(b):null;if(!b)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence==="string"&&typeof o.href==="string"?(o=ph(o.href),g=vg(b).hoistableStyles,l=g.get(o),l||(l={type:"style",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href==="string"&&typeof o.precedence==="string"){r=ph(o.href);var w=vg(b).hoistableStyles,i=w.get(r);if(!i&&(b=b.ownerDocument||b,i={type:"stylesheet",instance:null,count:0,state:{loading:Rh,preload:null}},w.set(r,i),(w=b.querySelector(mb(r)))&&!w._p&&(i.instance=w,i.state.loading=Lw|xv),!Cv.has(r))){var P={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy};Cv.set(r,P),w||AQ(b,r,P,i.state)}if(g&&l===null)throw o=`

  - `+ke(g)+`
  + `+ke(o),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return i}if(g&&l!==null)throw o=`

  - `+ke(g)+`
  + `+ke(o),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+o);return null;case"script":return g=o.async,o=o.src,typeof o==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(o=dh(o),g=vg(b).hoistableScripts,l=g.get(o),l||(l={type:"script",instance:null,count:0,state:null},g.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function ke(r){var g=0,o="<link";return typeof r.rel==="string"?(g++,o+=' rel="'+r.rel+'"'):Vv.call(r,"rel")&&(g++,o+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,o+=' href="'+r.href+'"'):Vv.call(r,"href")&&(g++,o+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,o+=' precedence="'+r.precedence+'"'):Vv.call(r,"precedence")&&(g++,o+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(o+=" ..."),o+" />"}function ph(r){return'href="'+zv(r)+'"'}function mb(r){return'link[rel="stylesheet"]['+r+"]"}function wM(r){return cr({},r,{"data-precedence":r.precedence,precedence:null})}function AQ(r,g,o,l){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?l.loading=Lw:(g=r.createElement("link"),l.preload=g,g.addEventListener("load",function(){return l.loading|=Lw}),g.addEventListener("error",function(){return l.loading|=c9}),Ao(g,"link",o),Kr(g),r.head.appendChild(g))}function dh(r){return'[src="'+zv(r)+'"]'}function Zb(r){return"script[async]"+r}function eM(r,g,o){if(g.count++,g.instance===null)switch(g.type){case"style":var l=r.querySelector('style[data-href~="'+zv(o.href)+'"]');if(l)return g.instance=l,Kr(l),l;var b=cr({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),Kr(l),Ao(l,"style",b),De(l,o.precedence,r),g.instance=l;case"stylesheet":b=ph(o.href);var w=r.querySelector(mb(b));if(w)return g.state.loading|=xv,g.instance=w,Kr(w),w;l=wM(o),(b=Cv.get(b))&&B8(l,b),w=(r.ownerDocument||r).createElement("link"),Kr(w);var i=w;return i._p=new Promise(function(P,M){i.onload=P,i.onerror=M}),Ao(w,"link",l),g.state.loading|=xv,De(w,o.precedence,r),g.instance=w;case"script":if(w=dh(o.src),b=r.querySelector(Zb(w)))return g.instance=b,Kr(b),b;if(l=o,b=Cv.get(w))l=cr({},o),m8(l,b);return r=r.ownerDocument||r,b=r.createElement("script"),Kr(b),Ao(b,"link",l),r.head.appendChild(b),g.instance=b;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&xv)===Rh&&(l=g.instance,g.state.loading|=xv,De(l,o.precedence,r));return g.instance}function De(r,g,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),b=l.length?l[l.length-1]:null,w=b,i=0;i<l.length;i++){var P=l[i];if(P.dataset.precedence===g)w=P;else if(w!==b)break}w?w.parentNode.insertBefore(r,w.nextSibling):(g=o.nodeType===9?o.head:o,g.insertBefore(r,g.firstChild))}function B8(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function m8(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function uM(r,g,o){if(ju===null){var l=new Map,b=ju=new Map;b.set(o,l)}else b=ju,l=b.get(o),l||(l=new Map,b.set(o,l));if(l.has(r))return l;l.set(r,null),o=o.getElementsByTagName(r);for(b=0;b<o.length;b++){var w=o[b];if(!(w[Sb]||w[Mo]||r==="link"&&w.getAttribute("rel")==="stylesheet")&&w.namespaceURI!==h5){var i=w.getAttribute(g)||"";i=r+i;var P=l.get(i);P?P.push(w):l.set(i,[w])}}return l}function iM(r,g,o){r=r.ownerDocument||r,r.head.insertBefore(o,g==="title"?r.querySelector("head > title"):null)}function MQ(r,g,o){var l=!o.ancestorInfo.containerTagInScope;if(o.context===Z5||g.itemProp!=null)return!l||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:b,disabled:w}=g;o=[],g.onLoad&&o.push("`onLoad`"),b&&o.push("`onError`"),w!=null&&o.push("`disabled`"),b=yJ(o,"and"),b+=o.length===1?" prop":" props",w=o.length===1?"an "+b:"the "+b,o.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,w,b)}l&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){l&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function HM(r){return r.type==="stylesheet"&&(r.state.loading&j9)===Rh?!1:!0}function WQ(r,g,o,l){if(o.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&xv)===Rh){if(o.instance===null){var b=ph(l.href),w=g.querySelector(mb(b));if(w){g=w._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=Ve.bind(r),g.then(r,r)),o.state.loading|=xv,o.instance=w,Kr(w);return}w=g.ownerDocument||g,l=wM(l),(b=Cv.get(b))&&B8(l,b),w=w.createElement("link"),Kr(w);var i=w;i._p=new Promise(function(P,M){i.onload=P,i.onerror=M}),Ao(w,"link",l),o.instance=w}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(o,g),(g=o.state.preload)&&(o.state.loading&j9)===Rh&&(r.count++,o=Ve.bind(r),g.addEventListener("load",o),g.addEventListener("error",o))}}function RQ(r,g){return r.stylesheets&&r.count===0&&_e(r,r.stylesheets),0<r.count||0<r.imgCount?function(o){var l=setTimeout(function(){if(r.stylesheets&&_e(r,r.stylesheets),r.unsuspend){var w=r.unsuspend;r.unsuspend=null,w()}},PK+g);0<r.imgBytes&&PH===0&&(PH=125*cJ()*qK);var b=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&_e(r,r.stylesheets),r.unsuspend)){var w=r.unsuspend;r.unsuspend=null,w()}},(r.imgBytes>PH?50:OK)+g);return r.unsuspend=o,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(b)}}:null}function Ve(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_e(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function _e(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,fu=new Map,g.forEach(GQ,r),fu=null,Ve.call(r))}function GQ(r,g){if(!(g.state.loading&xv)){var o=fu.get(r);if(o)var l=o.get(OH);else{o=new Map,fu.set(r,o);for(var b=r.querySelectorAll("link[data-precedence],style[data-precedence]"),w=0;w<b.length;w++){var i=b[w];if(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")o.set(i.dataset.precedence,i),l=i}l&&o.set(OH,l)}b=g.instance,i=b.getAttribute("data-precedence"),w=o.get(i)||l,w===l&&o.set(OH,b),o.set(i,b),this.count++,l=Ve.bind(this),b.addEventListener("load",l),b.addEventListener("error",l),w?w.parentNode.insertBefore(b,w.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(b,r.firstChild)),g.state.loading|=xv}}function XQ(r,g,o,l,b,w,i,P,M){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Wh,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zh(0),this.hiddenUpdates=Zh(null),this.identifierPrefix=l,this.onUncaughtError=b,this.onCaughtError=w,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=o?"hydrateRoot()":"createRoot()"}function PM(r,g,o,l,b,w,i,P,M,R,n,F){return r=new XQ(r,g,o,i,M,R,n,F,P),g=Tz,w===!0&&(g|=Uo|Ev),g|=kr,w=Q(3,null,null,g),r.current=w,w.stateNode=r,g=e6(),_l(g),r.pooledCache=g,_l(g),w.memoizedState={element:l,isDehydrated:o,cache:g},O6(w),r}function OM(r){if(!r)return f1;return r=f1,r}function Z8(r,g,o,l,b,w){if($o&&typeof $o.onScheduleFiberRoot==="function")try{$o.onScheduleFiberRoot(v5,l,o)}catch(i){$0||($0=!0,console.error("React instrumentation encountered an error: %o",i))}b=OM(b),l.context===null?l.context=b:l.pendingContext=b,K0&&Hv!==null&&!s9&&(s9=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,C(Hv)||"Unknown")),l=m1(g),l.payload={element:o},w=w===void 0?null:w,w!==null&&(typeof w!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",w),l.callback=w),o=Z1(r,l,g),o!==null&&(i0(g,"root.render()",null),mg(o,r,g),Ab(o,r,g))}function qM(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<g?o:g}}function x8(r,g){qM(r,g),(r=r.alternate)&&qM(r,g)}function AM(r){if(r.tag===13||r.tag===31){var g=Ko(r,67108864);g!==null&&mg(g,r,67108864),x8(r,67108864)}}function MM(r){if(r.tag===13||r.tag===31){var g=ev(r);g=Zl(g);var o=Ko(r,g);o!==null&&mg(o,r,g),x8(r,g)}}function YQ(){return Hv}function JQ(r,g,o,l){var b=x.T;x.T=null;var w=eg.p;try{eg.p=Pv,C8(r,g,o,l)}finally{eg.p=w,x.T=b}}function QQ(r,g,o,l){var b=x.T;x.T=null;var w=eg.p;try{eg.p=_v,C8(r,g,o,l)}finally{eg.p=w,x.T=b}}function C8(r,g,o,l){if(pu){var b=t8(l);if(b===null)J8(r,g,l,du,o),RM(r,l);else if(zQ(b,r,g,o,l))l.stopPropagation();else if(RM(r,l),g&4&&-1<MK.indexOf(r)){for(;b!==null;){var w=Br(b);if(w!==null)switch(w.tag){case 3:if(w=w.stateNode,w.current.memoizedState.isDehydrated){var i=b0(w.pendingLanes);if(i!==0){var P=w;P.pendingLanes|=2;for(P.entangledLanes|=2;i;){var M=1<<31-No(i);P.entanglements[1]|=M,i&=~M}Y0(w),(og&(lo|Mv))===uo&&(mu=bo()+U9,nb(0,!1))}}break;case 31:case 13:P=Ko(w,2),P!==null&&mg(P,w,2),jh(),x8(w,2)}if(w=t8(l),w===null&&J8(r,g,l,du,o),w===b)break;b=w}b!==null&&l.stopPropagation()}else J8(r,g,l,null,o)}}function t8(r){return r=_4(r),T8(r)}function T8(r){if(du=null,r=Gr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var o=g.tag;if(o===13){if(r=Pr(g),r!==null)return r;r=null}else if(o===31){if(r=lr(g),r!==null)return r;r=null}else if(o===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return du=r,null}function WM(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Pv;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return _v;case"message":switch(BQ()){case d8:return Pv;case s8:return _v;case o5:case mQ:return L0;case ri:return ru;default:return L0}default:return L0}}function RM(r,g){switch(r){case"focusin":case"focusout":Pl=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":ql=null;break;case"pointerover":case"pointerout":Fw.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Iw.delete(g.pointerId)}}function xb(r,g,o,l,b,w){if(r===null||r.nativeEvent!==w)return r={blockedOn:g,domEventName:o,eventSystemFlags:l,nativeEvent:w,targetContainers:[b]},g!==null&&(g=Br(g),g!==null&&AM(g)),r;return r.eventSystemFlags|=l,g=r.targetContainers,b!==null&&g.indexOf(b)===-1&&g.push(b),r}function zQ(r,g,o,l,b){switch(g){case"focusin":return Pl=xb(Pl,r,g,o,l,b),!0;case"dragenter":return Ol=xb(Ol,r,g,o,l,b),!0;case"mouseover":return ql=xb(ql,r,g,o,l,b),!0;case"pointerover":var w=b.pointerId;return Fw.set(w,xb(Fw.get(w)||null,r,g,o,l,b)),!0;case"gotpointercapture":return w=b.pointerId,Iw.set(w,xb(Iw.get(w)||null,r,g,o,l,b)),!0}return!1}function GM(r){var g=Gr(r.target);if(g!==null){var o=rr(g);if(o!==null){if(g=o.tag,g===13){if(g=Pr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MM(o)});return}}else if(g===31){if(g=lr(o),g!==null){r.blockedOn=g,gr(r.priority,function(){MM(o)});return}}else if(g===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ee(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var o=t8(r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o),b=l;kb!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),kb=b,o.target.dispatchEvent(l),kb===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),kb=null}else return g=Br(o),g!==null&&AM(g),r.blockedOn=o,!1;g.shift()}return!0}function XM(r,g,o){Ee(r)&&o.delete(g)}function KQ(){qH=!1,Pl!==null&&Ee(Pl)&&(Pl=null),Ol!==null&&Ee(Ol)&&(Ol=null),ql!==null&&Ee(ql)&&(ql=null),Fw.forEach(XM),Iw.forEach(XM)}function ye(r,g){r.blockedOn===g&&(r.blockedOn=null,qH||(qH=!0,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,KQ)))}function YM(r){su!==r&&(su=r,lg.unstable_scheduleCallback(lg.unstable_NormalPriority,function(){su===r&&(su=null);for(var g=0;g<r.length;g+=3){var o=r[g],l=r[g+1],b=r[g+2];if(typeof l!=="function")if(T8(l||o)===null)continue;else break;var w=Br(o);w!==null&&(r.splice(g,3),g-=3,o={pending:!0,data:b,method:o.method,action:l},Object.freeze(o),T6(w,o,l,b))}}))}function sh(r){function g(M){return ye(M,r)}Pl!==null&&ye(Pl,r),Ol!==null&&ye(Ol,r),ql!==null&&ye(ql,r),Fw.forEach(g),Iw.forEach(g);for(var o=0;o<Al.length;o++){var l=Al[o];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Al.length&&(o=Al[0],o.blockedOn===null);)GM(o),o.blockedOn===null&&Al.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var b=o[l],w=o[l+1],i=b[Bo]||null;if(typeof w==="function")i||YM(o);else if(i){var P=null;if(w&&w.hasAttribute("formAction")){if(b=w,i=w[Bo]||null)P=i.formAction;else if(T8(b)!==null)continue}else P=i.action;typeof P==="function"?o[l+1]=P:(o.splice(l,3),l-=3),YM(o)}}}function JM(){function r(w){w.canIntercept&&w.info==="react-transition"&&w.intercept({handler:function(){return new Promise(function(i){return b=i})},focusReset:"manual",scroll:"manual"})}function g(){b!==null&&(b(),b=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var w=navigation.currentEntry;w&&w.url!=null&&navigation.navigate(w.url,{state:w.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,b=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),b!==null&&(b(),b=null)}}}function S8(r){this._internalRoot=r}function ce(r){this._internalRoot=r}function QM(r){r[E1]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var cr=Object.assign,$Q=Symbol.for("react.element"),Q0=Symbol.for("react.transitional.element"),r5=Symbol.for("react.portal"),g5=Symbol.for("react.fragment"),je=Symbol.for("react.strict_mode"),k8=Symbol.for("react.profiler"),D8=Symbol.for("react.consumer"),z0=Symbol.for("react.context"),Cb=Symbol.for("react.forward_ref"),V8=Symbol.for("react.suspense"),_8=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),iv=Symbol.for("react.lazy"),E8=Symbol.for("react.activity"),UQ=Symbol.for("react.memo_cache_sentinel"),zM=Symbol.iterator,LQ=Symbol.for("react.client.reference"),oo=Array.isArray,x=t5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,eg=WH.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nQ=Object.freeze({pending:!1,data:null,method:null,action:null}),y8=[],c8=[],d0=-1,D1=Yr(null),tb=Yr(null),V1=Yr(null),ae=Yr(null),Tb=0,KM,$M,UM,LM,nM,FM,IM;T.__reactDisabledLog=!0;var j8,NM,f8=!1,a8=new(typeof WeakMap==="function"?WeakMap:Map),Hv=null,K0=!1,Vv=Object.prototype.hasOwnProperty,p8=lg.unstable_scheduleCallback,FQ=lg.unstable_cancelCallback,IQ=lg.unstable_shouldYield,NQ=lg.unstable_requestPaint,bo=lg.unstable_now,BQ=lg.unstable_getCurrentPriorityLevel,d8=lg.unstable_ImmediatePriority,s8=lg.unstable_UserBlockingPriority,o5=lg.unstable_NormalPriority,mQ=lg.unstable_LowPriority,ri=lg.unstable_IdlePriority,ZQ=lg.log,xQ=lg.unstable_setDisableYieldValue,v5=null,$o=null,$0=!1,U0=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",No=Math.clz32?Math.clz32:t2,CQ=Math.log,tQ=Math.LN2,pe=256,de=262144,se=4194304,Pv=2,_v=8,L0=32,ru=268435456,_1=Math.random().toString(36).slice(2),Mo="__reactFiber$"+_1,Bo="__reactProps$"+_1,E1="__reactContainer$"+_1,gi="__reactEvents$"+_1,TQ="__reactListeners$"+_1,SQ="__reactHandles$"+_1,BM="__reactResources$"+_1,Sb="__reactMarker$"+_1,mM=new Set,pl={},oi={},kQ={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},DQ=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ZM={},xM={},VQ=/[\n"\\]/g,CM=!1,tM=!1,TM=!1,SM=!1,kM=!1,DM=!1,VM=["value","defaultValue"],_M=!1,EM=/["'&<>\n\t]|^\s|\s$/,_Q="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),yM="applet caption html table td th marquee object template foreignObject desc title".split(" "),EQ=yM.concat(["button"]),yQ="dd dt li option optgroup p rp rt".split(" "),cM={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},gu={},vi={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},jM=/([A-Z])/g,fM=/^ms-/,cQ=/^(?:webkit|moz|o)[A-Z]/,jQ=/^-ms-/,fQ=/-(.)/g,aM=/;\s*$/,l5={},li={},pM=!1,dM=!1,sM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),ou="http://www.w3.org/1998/Math/MathML",h5="http://www.w3.org/2000/svg",aQ=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},rW={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},b5={},pQ=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dQ=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gW=!1,mo={},oW=/^on./,sQ=/^on[^A-Z]/,rz=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gz=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oz=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,kb=null,w5=null,e5=null,hi=!1,n0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=!1;if(n0)try{var Db={};Object.defineProperty(Db,"passive",{get:function(){bi=!0}}),window.addEventListener("test",Db,Db),window.removeEventListener("test",Db,Db)}catch(r){bi=!1}var y1=null,wi=null,lu=null,dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Eo(dl),Vb=cr({},dl,{view:0,detail:0}),vz=Eo(Vb),ei,ui,_b,bu=cr({},Vb,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:E4,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==_b&&(_b&&r.type==="mousemove"?(ei=r.screenX-_b.screenX,ui=r.screenY-_b.screenY):ui=ei=0,_b=r),ei},movementY:function(r){return"movementY"in r?r.movementY:ui}}),vW=Eo(bu),lz=cr({},bu,{dataTransfer:0}),hz=Eo(lz),bz=cr({},Vb,{relatedTarget:0}),ii=Eo(bz),wz=cr({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),ez=Eo(wz),uz=cr({},dl,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),iz=Eo(uz),Hz=cr({},dl,{data:0}),lW=Eo(Hz),Pz=lW,Oz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Az={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Mz=cr({},Vb,{key:function(r){if(r.key){var g=Oz[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=E2(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qz[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:E4,charCode:function(r){return r.type==="keypress"?E2(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?E2(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Wz=Eo(Mz),Rz=cr({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hW=Eo(Rz),Gz=cr({},Vb,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:E4}),Xz=Eo(Gz),Yz=cr({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jz=Eo(Yz),Qz=cr({},bu,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),zz=Eo(Qz),Kz=cr({},dl,{newState:0,oldState:0}),$z=Eo(Kz),Uz=[9,13,27,32],bW=229,Hi=n0&&"CompositionEvent"in window,Eb=null;n0&&"documentMode"in document&&(Eb=document.documentMode);var Lz=n0&&"TextEvent"in window&&!Eb,wW=n0&&(!Hi||Eb&&8<Eb&&11>=Eb),eW=32,uW=String.fromCharCode(eW),iW=!1,u5=!1,nz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},yb=null,cb=null,HW=!1;n0&&(HW=aY("input")&&(!document.documentMode||9<document.documentMode));var Zo=typeof Object.is==="function"?Object.is:oJ,Fz=n0&&"documentMode"in document&&11>=document.documentMode,i5=null,Pi=null,jb=null,Oi=!1,H5={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionrun:Cl("Transition","TransitionRun"),transitionstart:Cl("Transition","TransitionStart"),transitioncancel:Cl("Transition","TransitionCancel"),transitionend:Cl("Transition","TransitionEnd")},qi={},PW={};n0&&(PW=document.createElement("div").style,("AnimationEvent"in window)||(delete H5.animationend.animation,delete H5.animationiteration.animation,delete H5.animationstart.animation),("TransitionEvent"in window)||delete H5.transitionend.transition);var OW=tl("animationend"),qW=tl("animationiteration"),AW=tl("animationstart"),Iz=tl("transitionrun"),Nz=tl("transitionstart"),Bz=tl("transitioncancel"),MW=tl("transitionend"),WW=new Map,Ai="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ai.push("scrollEnd");var RW=0;if(typeof performance==="object"&&typeof performance.now==="function")var mz=performance,GW=function(){return mz.now()};else{var Zz=Date;GW=function(){return Zz.now()}}var Mi=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},xz="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",wu=0,Wi=1,Ri=2,Gi=3,eu="– ",uu="+ ",XW="  ",Kg=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",$v="Components ⚛",jr="Scheduler ⚛",fr="Blocking",c1=!1,s0={color:"primary",properties:null,tooltipText:"",track:$v},j1={start:-0,end:-0,detail:{devtools:s0}},Cz=["Changed Props",""],YW="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",tz=["Changed Props",YW],fb=1,r1=2,Uv=[],P5=0,Xi=0,f1={};Object.freeze(f1);var Lv=null,O5=null,Lr=0,Tz=1,kr=2,Uo=8,Ev=16,Sz=32,JW=!1;try{var QW=Object.preventExtensions({})}catch(r){JW=!0}var Yi=new WeakMap,q5=[],A5=0,iu=null,ab=0,nv=[],Fv=0,sl=null,g1=1,o1="",Wo=null,$g=null,pr=!1,F0=!1,Ov=null,a1=null,Iv=!1,Ji=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Qi=Yr(null),zi=Yr(null),zW={},Hu=null,M5=null,W5=!1,kz=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(o,l){r.push(l)}};this.abort=function(){g.aborted=!0,r.forEach(function(o){return o()})}},Dz=lg.unstable_scheduleCallback,Vz=lg.unstable_NormalPriority,jg={$$typeof:z0,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},fg=lg.unstable_now,Pu=console.createTask?console.createTask:function(){return null},pb=1,Ou=2,wo=-0,p1=-0,v1=-0,l1=null,xo=-1.1,rh=-0,Ig=-0,$r=-1.1,Ur=-1.1,ng=null,Zg=!1,d1=-0,I0=-1.1,db=null,s1=0,Ki=null,$i=null,gh=-1.1,sb=null,R5=-1.1,qu=-1.1,N0=-0,h1=-1.1,Nv=-1.1,Ui=0,rw=null,KW=null,$W=null,rl=-1.1,oh=null,gl=-1.1,Au=-1.1,UW=-0,LW=-0,Mu=0,b1=null,nW=0,gw=-1.1,Wu=!1,Ru=!1,ow=null,Li=0,vh=0,G5=null,FW=x.S;x.S=function(r,g){if(K9=bo(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>h1&&0>Nv){h1=fg();var o=Nb(),l=Ib();if(o!==gl||l!==oh)gl=-1.1;rl=o,oh=l}uJ(r,g)}FW!==null&&FW(r,g)};var lh=Yr(null),yv={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},vw=[],lw=[],hw=[],bw=[],ww=[],ew=[],hh=new Set;yv.recordUnsafeLifecycleWarnings=function(r,g){hh.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&vw.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillMount==="function"&&lw.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&hw.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&bw.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&ww.push(r),r.mode&Uo&&typeof g.UNSAFE_componentWillUpdate==="function"&&ew.push(r))},yv.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<vw.length&&(vw.forEach(function(P){r.add(C(P)||"Component"),hh.add(P.type)}),vw=[]);var g=new Set;0<lw.length&&(lw.forEach(function(P){g.add(C(P)||"Component"),hh.add(P.type)}),lw=[]);var o=new Set;0<hw.length&&(hw.forEach(function(P){o.add(C(P)||"Component"),hh.add(P.type)}),hw=[]);var l=new Set;0<bw.length&&(bw.forEach(function(P){l.add(C(P)||"Component"),hh.add(P.type)}),bw=[]);var b=new Set;0<ww.length&&(ww.forEach(function(P){b.add(C(P)||"Component"),hh.add(P.type)}),ww=[]);var w=new Set;if(0<ew.length&&(ew.forEach(function(P){w.add(C(P)||"Component"),hh.add(P.type)}),ew=[]),0<g.size){var i=W(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,i)}0<l.size&&(i=W(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,i)),0<w.size&&(i=W(w),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,i)),0<r.size&&(i=W(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<o.size&&(i=W(o),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i)),0<b.size&&(i=W(b),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,i))};var Gu=new Map,IW=new Set;yv.recordLegacyContextWarning=function(r,g){var o=null;for(var l=r;l!==null;)l.mode&Uo&&(o=l),l=l.return;o===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!IW.has(r.type)&&(l=Gu.get(o),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(l===void 0&&(l=[],Gu.set(o,l)),l.push(r))},yv.flushLegacyContextWarning=function(){Gu.forEach(function(r){if(r.length!==0){var g=r[0],o=new Set;r.forEach(function(b){o.add(C(b)||"Component"),IW.add(b.type)});var l=W(o);er(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},yv.discardPendingWarnings=function(){vw=[],lw=[],hw=[],bw=[],ww=[],ew=[],Gu=new Map};var NW={react_stack_bottom_frame:function(r,g,o){var l=K0;K0=!0;try{return r(g,o)}finally{K0=l}}},ni=NW.react_stack_bottom_frame.bind(NW),BW={react_stack_bottom_frame:function(r){var g=K0;K0=!0;try{return r.render()}finally{K0=g}}},mW=BW.react_stack_bottom_frame.bind(BW),ZW={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(o){wg(r,r.return,o)}}},Fi=ZW.react_stack_bottom_frame.bind(ZW),xW={react_stack_bottom_frame:function(r,g,o,l,b){try{g.componentDidUpdate(o,l,b)}catch(w){wg(r,r.return,w)}}},CW=xW.react_stack_bottom_frame.bind(xW),tW={react_stack_bottom_frame:function(r,g){var o=g.stack;r.componentDidCatch(g.value,{componentStack:o!==null?o:""})}},_z=tW.react_stack_bottom_frame.bind(tW),TW={react_stack_bottom_frame:function(r,g,o){try{o.componentWillUnmount()}catch(l){wg(r,g,l)}}},SW=TW.react_stack_bottom_frame.bind(TW),kW={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},Ez=kW.react_stack_bottom_frame.bind(kW),DW={react_stack_bottom_frame:function(r,g,o){try{o()}catch(l){wg(r,g,l)}}},yz=DW.react_stack_bottom_frame.bind(DW),VW={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},cz=VW.react_stack_bottom_frame.bind(VW),X5=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Ii=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Xu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Yu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},bh=null,uw=!1,Y5=null,iw=0,Dr=null,Ni,_W=Ni=!1,EW={},yW={},cW={};Y=function(r,g,o){if(o!==null&&typeof o==="object"&&o._store&&(!o._store.validated&&o.key==null||o._store.validated===2)){if(typeof o._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");o._store.validated=1;var l=C(r),b=l||"null";if(!EW[b]){EW[b]=!0,o=o._owner,r=r._debugOwner;var w="";r&&typeof r.tag==="number"&&(b=C(r))&&(w=`

Check the render method of \``+b+"`."),w||l&&(w=`

Check the top-level render call using <`+l+">.");var i="";o!=null&&r!==o&&(l=null,typeof o.tag==="number"?l=C(o):typeof o.name==="string"&&(l=o.name),l&&(i=" It was passed a child from "+l+".")),er(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',w,i)})}}};var wh=TO(!0),jW=TO(!1),fW=0,aW=1,pW=2,Bi=3,ol=!1,dW=!1,mi=null,Zi=!1,J5=Yr(null),Ju=Yr(0),qv=Yr(null),Bv=null,Q5=1,Hw=2,Dg=Yr(0),Qu=0,mv=1,Co=2,Av=4,to=8,z5,sW=new Set,r9=new Set,xi=new Set,g9=new Set,w1=0,nr=null,Wg=null,ag=null,zu=!1,K5=!1,eh=!1,Ku=0,Pw=0,e1=null,jz=0,fz=25,Z=null,Zv=null,u1=-1,Ow=!1,qw={readContext:Lg,use:t1,useCallback:tg,useContext:tg,useEffect:tg,useImperativeHandle:tg,useLayoutEffect:tg,useInsertionEffect:tg,useMemo:tg,useReducer:tg,useRef:tg,useState:tg,useDebugValue:tg,useDeferredValue:tg,useTransition:tg,useSyncExternalStore:tg,useId:tg,useHostTransitionStatus:tg,useFormState:tg,useActionState:tg,useOptimistic:tg,useMemoCache:tg,useCacheRefresh:tg};qw.useEffectEvent=tg;var Ci=null,o9=null,ti=null,v9=null,B0=null,cv=null,$u=null;Ci={readContext:function(r){return Lg(r)},use:t1,useCallback:function(r,g){return Z="useCallback",yr(),kh(g),Z6(r,g)},useContext:function(r){return Z="useContext",yr(),Lg(r)},useEffect:function(r,g){return Z="useEffect",yr(),kh(g),Ge(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",yr(),kh(o),m6(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",yr(),kh(g),yl(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",yr(),kh(g),B6(r,g)},useMemo:function(r,g){Z="useMemo",yr(),kh(g);var o=x.H;x.H=B0;try{return x6(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",yr();var l=x.H;x.H=B0;try{return z6(r,g,o)}finally{x.H=l}},useRef:function(r){return Z="useRef",yr(),I6(r)},useState:function(r){Z="useState",yr();var g=x.H;x.H=B0;try{return L6(r)}finally{x.H=g}},useDebugValue:function(){Z="useDebugValue",yr()},useDeferredValue:function(r,g){return Z="useDeferredValue",yr(),C6(r,g)},useTransition:function(){return Z="useTransition",yr(),S6()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",yr(),$6(r,g,o)},useId:function(){return Z="useId",yr(),k6()},useFormState:function(r,g){return Z="useFormState",yr(),qe(),Vh(r,g)},useActionState:function(r,g){return Z="useActionState",yr(),Vh(r,g)},useOptimistic:function(r){return Z="useOptimistic",yr(),n6(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return Z="useCacheRefresh",yr(),D6()},useEffectEvent:function(r){return Z="useEffectEvent",yr(),N6(r)}},o9={readContext:function(r){return Lg(r)},use:t1,useCallback:function(r,g){return Z="useCallback",d(),Z6(r,g)},useContext:function(r){return Z="useContext",d(),Lg(r)},useEffect:function(r,g){return Z="useEffect",d(),Ge(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),m6(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",d(),yl(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),B6(r,g)},useMemo:function(r,g){Z="useMemo",d();var o=x.H;x.H=B0;try{return x6(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var l=x.H;x.H=B0;try{return z6(r,g,o)}finally{x.H=l}},useRef:function(r){return Z="useRef",d(),I6(r)},useState:function(r){Z="useState",d();var g=x.H;x.H=B0;try{return L6(r)}finally{x.H=g}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),C6(r,g)},useTransition:function(){return Z="useTransition",d(),S6()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),$6(r,g,o)},useId:function(){return Z="useId",d(),k6()},useActionState:function(r,g){return Z="useActionState",d(),Vh(r,g)},useFormState:function(r,g){return Z="useFormState",d(),qe(),Vh(r,g)},useOptimistic:function(r){return Z="useOptimistic",d(),n6(r)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return Z="useCacheRefresh",d(),D6()},useEffectEvent:function(r){return Z="useEffectEvent",d(),N6(r)}},ti={readContext:function(r){return Lg(r)},use:t1,useCallback:function(r,g){return Z="useCallback",d(),Je(r,g)},useContext:function(r){return Z="useContext",d(),Lg(r)},useEffect:function(r,g){Z="useEffect",d(),yo(2048,to,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Ye(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),yo(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),yo(4,Av,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=x.H;x.H=cv;try{return Qe(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var l=x.H;x.H=cv;try{return Dh(r,g,o)}finally{x.H=l}},useRef:function(){return Z="useRef",d(),ig().memoizedState},useState:function(){Z="useState",d();var r=x.H;x.H=cv;try{return Dh(kv)}finally{x.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),wq(r,g)},useTransition:function(){return Z="useTransition",d(),Oq()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),Me(r,g,o)},useId:function(){return Z="useId",d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",d(),qe(),We(r)},useActionState:function(r){return Z="useActionState",d(),We(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),pO(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Xe(r)}},v9={readContext:function(r){return Lg(r)},use:t1,useCallback:function(r,g){return Z="useCallback",d(),Je(r,g)},useContext:function(r){return Z="useContext",d(),Lg(r)},useEffect:function(r,g){Z="useEffect",d(),yo(2048,to,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",d(),Ye(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",d(),yo(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",d(),yo(4,Av,r,g)},useMemo:function(r,g){Z="useMemo",d();var o=x.H;x.H=$u;try{return Qe(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",d();var l=x.H;x.H=$u;try{return Gb(r,g,o)}finally{x.H=l}},useRef:function(){return Z="useRef",d(),ig().memoizedState},useState:function(){Z="useState",d();var r=x.H;x.H=$u;try{return Gb(kv)}finally{x.H=r}},useDebugValue:function(){Z="useDebugValue",d()},useDeferredValue:function(r,g){return Z="useDeferredValue",d(),eq(r,g)},useTransition:function(){return Z="useTransition",d(),qq()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",d(),Me(r,g,o)},useId:function(){return Z="useId",d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",d(),qe(),Re(r)},useActionState:function(r){return Z="useActionState",d(),Re(r)},useOptimistic:function(r,g){return Z="useOptimistic",d(),sO(r,g)},useHostTransitionStatus:cl,useMemoCache:El,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",d(),Xe(r)}},B0={readContext:function(r){return X(),Lg(r)},use:function(r){return A(),t1(r)},useCallback:function(r,g){return Z="useCallback",A(),yr(),Z6(r,g)},useContext:function(r){return Z="useContext",A(),yr(),Lg(r)},useEffect:function(r,g){return Z="useEffect",A(),yr(),Ge(r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",A(),yr(),m6(r,g,o)},useInsertionEffect:function(r,g){Z="useInsertionEffect",A(),yr(),yl(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",A(),yr(),B6(r,g)},useMemo:function(r,g){Z="useMemo",A(),yr();var o=x.H;x.H=B0;try{return x6(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",A(),yr();var l=x.H;x.H=B0;try{return z6(r,g,o)}finally{x.H=l}},useRef:function(r){return Z="useRef",A(),yr(),I6(r)},useState:function(r){Z="useState",A(),yr();var g=x.H;x.H=B0;try{return L6(r)}finally{x.H=g}},useDebugValue:function(){Z="useDebugValue",A(),yr()},useDeferredValue:function(r,g){return Z="useDeferredValue",A(),yr(),C6(r,g)},useTransition:function(){return Z="useTransition",A(),yr(),S6()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",A(),yr(),$6(r,g,o)},useId:function(){return Z="useId",A(),yr(),k6()},useFormState:function(r,g){return Z="useFormState",A(),yr(),Vh(r,g)},useActionState:function(r,g){return Z="useActionState",A(),yr(),Vh(r,g)},useOptimistic:function(r){return Z="useOptimistic",A(),yr(),n6(r)},useMemoCache:function(r){return A(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return Z="useCacheRefresh",yr(),D6()},useEffectEvent:function(r){return Z="useEffectEvent",A(),yr(),N6(r)}},cv={readContext:function(r){return X(),Lg(r)},use:function(r){return A(),t1(r)},useCallback:function(r,g){return Z="useCallback",A(),d(),Je(r,g)},useContext:function(r){return Z="useContext",A(),d(),Lg(r)},useEffect:function(r,g){Z="useEffect",A(),d(),yo(2048,to,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",A(),d(),Ye(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",A(),d(),yo(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",A(),d(),yo(4,Av,r,g)},useMemo:function(r,g){Z="useMemo",A(),d();var o=x.H;x.H=cv;try{return Qe(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",A(),d();var l=x.H;x.H=cv;try{return Dh(r,g,o)}finally{x.H=l}},useRef:function(){return Z="useRef",A(),d(),ig().memoizedState},useState:function(){Z="useState",A(),d();var r=x.H;x.H=cv;try{return Dh(kv)}finally{x.H=r}},useDebugValue:function(){Z="useDebugValue",A(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",A(),d(),wq(r,g)},useTransition:function(){return Z="useTransition",A(),d(),Oq()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",A(),d(),Me(r,g,o)},useId:function(){return Z="useId",A(),d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",A(),d(),We(r)},useActionState:function(r){return Z="useActionState",A(),d(),We(r)},useOptimistic:function(r,g){return Z="useOptimistic",A(),d(),pO(r,g)},useMemoCache:function(r){return A(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",A(),d(),Xe(r)}},$u={readContext:function(r){return X(),Lg(r)},use:function(r){return A(),t1(r)},useCallback:function(r,g){return Z="useCallback",A(),d(),Je(r,g)},useContext:function(r){return Z="useContext",A(),d(),Lg(r)},useEffect:function(r,g){Z="useEffect",A(),d(),yo(2048,to,r,g)},useImperativeHandle:function(r,g,o){return Z="useImperativeHandle",A(),d(),Ye(r,g,o)},useInsertionEffect:function(r,g){return Z="useInsertionEffect",A(),d(),yo(4,Co,r,g)},useLayoutEffect:function(r,g){return Z="useLayoutEffect",A(),d(),yo(4,Av,r,g)},useMemo:function(r,g){Z="useMemo",A(),d();var o=x.H;x.H=cv;try{return Qe(r,g)}finally{x.H=o}},useReducer:function(r,g,o){Z="useReducer",A(),d();var l=x.H;x.H=cv;try{return Gb(r,g,o)}finally{x.H=l}},useRef:function(){return Z="useRef",A(),d(),ig().memoizedState},useState:function(){Z="useState",A(),d();var r=x.H;x.H=cv;try{return Gb(kv)}finally{x.H=r}},useDebugValue:function(){Z="useDebugValue",A(),d()},useDeferredValue:function(r,g){return Z="useDeferredValue",A(),d(),eq(r,g)},useTransition:function(){return Z="useTransition",A(),d(),qq()},useSyncExternalStore:function(r,g,o){return Z="useSyncExternalStore",A(),d(),Me(r,g,o)},useId:function(){return Z="useId",A(),d(),ig().memoizedState},useFormState:function(r){return Z="useFormState",A(),d(),Re(r)},useActionState:function(r){return Z="useActionState",A(),d(),Re(r)},useOptimistic:function(r,g){return Z="useOptimistic",A(),d(),sO(r,g)},useMemoCache:function(r){return A(),El(r)},useHostTransitionStatus:cl,useCacheRefresh:function(){return Z="useCacheRefresh",d(),ig().memoizedState},useEffectEvent:function(r){return Z="useEffectEvent",A(),d(),Xe(r)}};var l9={},h9=new Set,b9=new Set,w9=new Set,e9=new Set,u9=new Set,i9=new Set,H9=new Set,P9=new Set,O9=new Set,q9=new Set;Object.freeze(l9);var Ti={enqueueSetState:function(r,g,o){r=r._reactInternals;var l=ev(r),b=m1(l);b.payload=g,o!==void 0&&o!==null&&(_6(o),b.callback=o),g=Z1(r,b,l),g!==null&&(i0(l,"this.setState()",r),mg(g,r,l),Ab(g,r,l))},enqueueReplaceState:function(r,g,o){r=r._reactInternals;var l=ev(r),b=m1(l);b.tag=aW,b.payload=g,o!==void 0&&o!==null&&(_6(o),b.callback=o),g=Z1(r,b,l),g!==null&&(i0(l,"this.replaceState()",r),mg(g,r,l),Ab(g,r,l))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var o=ev(r),l=m1(o);l.tag=pW,g!==void 0&&g!==null&&(_6(g),l.callback=g),g=Z1(r,l,o),g!==null&&(i0(o,"this.forceUpdate()",r),mg(g,r,o),Ab(g,r,o))}},$5=null,Si=null,ki=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),pg=!1,A9={},M9={},W9={},R9={},U5=!1,G9={},Uu={},Di={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},X9=!1,Y9=null;Y9=new Set;var i1=!1,dg=!1,Vi=!1,J9=typeof WeakSet==="function"?WeakSet:Set,eo=null,L5=null,n5=null,sg=null,fo=!1,jv=null,vo=!1,Aw=8192,az={getCacheForType:function(r){var g=Lg(jg),o=g.data.get(r);return o===void 0&&(o=r(),g.data.set(r,o)),o},cacheSignal:function(){return Lg(jg).controller.signal},getOwner:function(){return Hv}};if(typeof Symbol==="function"&&Symbol.for){var Mw=Symbol.for;Mw("selector.component"),Mw("selector.has_pseudo_class"),Mw("selector.role"),Mw("selector.test_id"),Mw("selector.text")}var pz=[],dz=typeof WeakMap==="function"?WeakMap:Map,uo=0,lo=2,Mv=4,H1=0,Ww=1,uh=2,Lu=3,vl=4,nu=6,Q9=5,og=uo,Rg=null,Er=null,Vr=0,ao=0,Fu=1,ih=2,Rw=3,z9=4,_i=5,Gw=6,Iu=7,Ei=8,Hh=9,Hg=ao,Wv=null,ll=!1,F5=!1,yi=!1,m0=0,Ng=H1,hl=0,bl=0,ci=0,po=0,Ph=0,Xw=null,To=null,Nu=!1,Bu=0,K9=0,$9=300,mu=1/0,U9=500,Yw=null,Tg=null,wl=null,Zu=0,ji=1,fi=2,L9=3,el=0,n9=1,F9=2,I9=3,N9=4,xu=5,ro=0,ul=null,I5=null,fv=0,ai=0,pi=-0,di=null,B9=null,m9=null,av=Zu,Z9=null,sz=50,Jw=0,si=null,rH=!1,Cu=!1,rK=50,Oh=0,Qw=null,N5=!1,tu=null,x9=!1,C9=new Set,gK={},Tu=null,B5=null,gH=!1,oH=!1,Su=!1,vH=!1,il=0,lH={};(function(){for(var r=0;r<Ai.length;r++){var g=Ai[r],o=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),Sv(o,"on"+g)}Sv(OW,"onAnimationEnd"),Sv(qW,"onAnimationIteration"),Sv(AW,"onAnimationStart"),Sv("dblclick","onDoubleClick"),Sv("focusin","onFocus"),Sv("focusout","onBlur"),Sv(Iz,"onTransitionRun"),Sv(Nz,"onTransitionStart"),Sv(Bz,"onTransitionCancel"),Sv(MW,"onTransitionEnd")})(),gv("onMouseEnter",["mouseout","mouseover"]),gv("onMouseLeave",["mouseout","mouseover"]),gv("onPointerEnter",["pointerout","pointerover"]),gv("onPointerLeave",["pointerout","pointerover"]),zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zo("onBeforeInput",["compositionend","keypress","textInput","paste"]),zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zw="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hH=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zw)),ku="_reactListening"+Math.random().toString(36).slice(2),t9=!1,T9=!1,Du=!1,S9=!1,Vu=!1,_u=!1,k9=!1,Eu={},oK=/\r\n?/g,vK=/\u0000|\uFFFD/g,qh="http://www.w3.org/1999/xlink",bH="http://www.w3.org/XML/1998/namespace",lK="javascript:throw new Error('React form unexpectedly submitted.')",hK="suppressHydrationWarning",Ah="&",yu="/&",Kw="$",$w="/$",Hl="$?",Mh="$~",m5="$!",bK="html",wK="body",eK="head",wH="F!",D9="F",V9="loading",uK="style",P1=0,Z5=1,cu=2,eH=null,uH=null,_9={dialog:!0,webview:!0},iH=null,Uw=void 0,E9=typeof setTimeout==="function"?setTimeout:void 0,iK=typeof clearTimeout==="function"?clearTimeout:void 0,Wh=-1,y9=typeof Promise==="function"?Promise:void 0,HK=typeof queueMicrotask==="function"?queueMicrotask:typeof y9<"u"?function(r){return y9.resolve(null).then(r).catch(fJ)}:E9,HH=null,Rh=0,Lw=1,c9=2,j9=3,xv=4,Cv=new Map,f9=new Set,O1=eg.d;eg.d={f:function(){var r=O1.f(),g=jh();return r||g},r:function(r){var g=Br(r);g!==null&&g.tag===5&&g.type==="form"?Pq(g):O1.r(r)},D:function(r){O1.D(r),hM("dns-prefetch",r,null)},C:function(r,g){O1.C(r,g),hM("preconnect",r,g)},L:function(r,g,o){O1.L(r,g,o);var l=x5;if(l&&r&&g){var b='link[rel="preload"][as="'+zv(g)+'"]';g==="image"?o&&o.imageSrcSet?(b+='[imagesrcset="'+zv(o.imageSrcSet)+'"]',typeof o.imageSizes==="string"&&(b+='[imagesizes="'+zv(o.imageSizes)+'"]')):b+='[href="'+zv(r)+'"]':b+='[href="'+zv(r)+'"]';var w=b;switch(g){case"style":w=ph(r);break;case"script":w=dh(r)}Cv.has(w)||(r=cr({rel:"preload",href:g==="image"&&o&&o.imageSrcSet?void 0:r,as:g},o),Cv.set(w,r),l.querySelector(b)!==null||g==="style"&&l.querySelector(mb(w))||g==="script"&&l.querySelector(Zb(w))||(g=l.createElement("link"),Ao(g,"link",r),Kr(g),l.head.appendChild(g)))}},m:function(r,g){O1.m(r,g);var o=x5;if(o&&r){var l=g&&typeof g.as==="string"?g.as:"script",b='link[rel="modulepreload"][as="'+zv(l)+'"][href="'+zv(r)+'"]',w=b;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":w=dh(r)}if(!Cv.has(w)&&(r=cr({rel:"modulepreload",href:r},g),Cv.set(w,r),o.querySelector(b)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Zb(w)))return}l=o.createElement("link"),Ao(l,"link",r),Kr(l),o.head.appendChild(l)}}},X:function(r,g){O1.X(r,g);var o=x5;if(o&&r){var l=vg(o).hoistableScripts,b=dh(r),w=l.get(b);w||(w=o.querySelector(Zb(b)),w||(r=cr({src:r,async:!0},g),(g=Cv.get(b))&&m8(r,g),w=o.createElement("script"),Kr(w),Ao(w,"link",r),o.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},l.set(b,w))}},S:function(r,g,o){O1.S(r,g,o);var l=x5;if(l&&r){var b=vg(l).hoistableStyles,w=ph(r);g=g||"default";var i=b.get(w);if(!i){var P={loading:Rh,preload:null};if(i=l.querySelector(mb(w)))P.loading=Lw|xv;else{r=cr({rel:"stylesheet",href:r,"data-precedence":g},o),(o=Cv.get(w))&&B8(r,o);var M=i=l.createElement("link");Kr(M),Ao(M,"link",r),M._p=new Promise(function(R,n){M.onload=R,M.onerror=n}),M.addEventListener("load",function(){P.loading|=Lw}),M.addEventListener("error",function(){P.loading|=c9}),P.loading|=xv,De(i,g,l)}i={type:"stylesheet",instance:i,count:1,state:P},b.set(w,i)}}},M:function(r,g){O1.M(r,g);var o=x5;if(o&&r){var l=vg(o).hoistableScripts,b=dh(r),w=l.get(b);w||(w=o.querySelector(Zb(b)),w||(r=cr({src:r,async:!0,type:"module"},g),(g=Cv.get(b))&&m8(r,g),w=o.createElement("script"),Kr(w),Ao(w,"link",r),o.head.appendChild(w)),w={type:"script",instance:w,count:1,state:null},l.set(b,w))}}};var x5=typeof document>"u"?null:document,ju=null,PK=60000,OK=800,qK=500,PH=0,OH=null,fu=null,Gh=nQ,nw={$$typeof:z0,Provider:null,Consumer:null,_currentValue:Gh,_currentValue2:Gh,_threadCount:0},a9="%c%s%c",p9="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",d9="",au=" ",AK=Function.prototype.bind,s9=!1,r7=null,g7=null,o7=null,v7=null,l7=null,h7=null,b7=null,w7=null,e7=null,u7=null;r7=function(r,g,o,l){g=v(r,g),g!==null&&(o=h(g.memoizedState,o,0,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Ko(r,2),o!==null&&mg(o,r,2))},g7=function(r,g,o){g=v(r,g),g!==null&&(o=H(g.memoizedState,o,0),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Ko(r,2),o!==null&&mg(o,r,2))},o7=function(r,g,o,l){g=v(r,g),g!==null&&(o=e(g.memoizedState,o,l),g.memoizedState=o,g.baseState=o,r.memoizedProps=cr({},r.memoizedProps),o=Ko(r,2),o!==null&&mg(o,r,2))},v7=function(r,g,o){r.pendingProps=h(r.memoizedProps,g,0,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Ko(r,2),g!==null&&mg(g,r,2)},l7=function(r,g){r.pendingProps=H(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Ko(r,2),g!==null&&mg(g,r,2)},h7=function(r,g,o){r.pendingProps=e(r.memoizedProps,g,o),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=Ko(r,2),g!==null&&mg(g,r,2)},b7=function(r){var g=Ko(r,2);g!==null&&mg(g,r,2)},w7=function(r){var g=mh(),o=Ko(r,g);o!==null&&mg(o,r,g)},e7=function(r){q=r},u7=function(r){O=r};var pu=!0,du=null,qH=!1,Pl=null,Ol=null,ql=null,Fw=new Map,Iw=new Map,Al=[],MK="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),su=null;if(ce.prototype.render=S8.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var o=arguments;typeof o[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):V(o[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof o[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),o=r;var l=g.current,b=ev(l);Z8(l,b,o,g,null,null)},ce.prototype.unmount=S8.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(og&(lo|Mv))!==uo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Z8(r.current,2,null,r,null,null),jh(),g[E1]=null}},ce.prototype.unstable_scheduleHydration=function(r){if(r){var g=N();r={blockedOn:null,target:r,priority:g};for(var o=0;o<Al.length&&g!==0&&g<Al[o].priority;o++);Al.splice(o,0,r),o===0&&GM(r)}},function(){var r=t5.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),eg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=p(g),r=r!==null?vr(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.5"};return r.overrideHookState=r7,r.overrideHookStateDeletePath=g7,r.overrideHookStateRenamePath=o7,r.overrideProps=v7,r.overridePropsDeletePath=l7,r.overridePropsRenamePath=h7,r.scheduleUpdate=b7,r.scheduleRetry=w7,r.setErrorHandler=e7,r.setSuspenseHandler=u7,r.scheduleRefresh=_,r.scheduleRoot=I,r.setRefreshHandler=t,r.getCurrentFiber=YQ,Bh(r)}()&&n0&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var i7=window.location.protocol;/^(https?|file):$/.test(i7)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(i7==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}IK.createRoot=function(r,g){if(!V(r))throw Error("Target container is not a DOM element.");QM(r);var o=!1,l="",b=Xq,w=Yq,i=Jq;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Q0&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(o=!0),g.identifierPrefix!==void 0&&(l=g.identifierPrefix),g.onUncaughtError!==void 0&&(b=g.onUncaughtError),g.onCaughtError!==void 0&&(w=g.onCaughtError),g.onRecoverableError!==void 0&&(i=g.onRecoverableError)),g=PM(r,1,!1,null,null,o,l,null,b,w,i,JM),r[E1]=g.current,Y8(r),new S8(g)},IK.hydrateRoot=function(r,g,o){if(!V(r))throw Error("Target container is not a DOM element.");QM(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,b="",w=Xq,i=Yq,P=Jq,M=null;return o!==null&&o!==void 0&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(b=o.identifierPrefix),o.onUncaughtError!==void 0&&(w=o.onUncaughtError),o.onCaughtError!==void 0&&(i=o.onCaughtError),o.onRecoverableError!==void 0&&(P=o.onRecoverableError),o.formState!==void 0&&(M=o.formState)),g=PM(r,1,!0,g,o!=null?o:null,l,b,M,w,i,P,JM),g.context=OM(null),o=g.current,l=ev(o),l=Zl(l),b=m1(l),b.callback=null,Z1(o,b,l),i0(l,"hydrateRoot()",null),o=l,g.current.lanes=o,U1(g,o),Y0(g),r[E1]=g.current,Y8(r),new ce(g)},IK.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var M7=Xh((pN,A7)=>{A7.exports=q7()});var rg=Xh((E$)=>{var $h=Or(hg());(function(){function v(T){if(T==null)return null;if(typeof T==="function")return T.$$typeof===C?null:T.displayName||T.name||null;if(typeof T==="string")return T;switch(T){case t:return"Fragment";case rr:return"Profiler";case V:return"StrictMode";case p:return"Suspense";case vr:return"SuspenseList";case f:return"Activity"}if(typeof T==="object")switch(typeof T.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),T.$$typeof){case _:return"Portal";case lr:return T.displayName||"Context";case Pr:return(T._context.displayName||"Context")+".Consumer";case j:var S=T.render;return T=T.displayName,T||(T=S.displayName||S.name||"",T=T!==""?"ForwardRef("+T+")":"ForwardRef"),T;case m:return S=T.displayName||null,S!==null?S:v(T.type)||"Memo";case E:S=T._payload,T=T._init;try{return v(T(S))}catch(Hr){}}return null}function h(T){return""+T}function e(T){try{h(T);var S=!1}catch(Rr){S=!0}if(S){S=console;var Hr=S.error,Qr=typeof Symbol==="function"&&Symbol.toStringTag&&T[Symbol.toStringTag]||T.constructor.name||"Object";return Hr.call(S,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Qr),h(T)}}function u(T){if(T===t)return"<>";if(typeof T==="object"&&T!==null&&T.$$typeof===E)return"<...>";try{var S=v(T);return S?"<"+S+">":"<...>"}catch(Hr){return"<...>"}}function H(){var T=Yr.A;return T===null?null:T.getOwner()}function O(){return Error("react-stack-top-frame")}function q(T){if(Wr.call(T,"key")){var S=Object.getOwnPropertyDescriptor(T,"key").get;if(S&&S.isReactWarning)return!1}return T.key!==void 0}function A(T,S){function Hr(){k||(k=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",S))}Hr.isReactWarning=!0,Object.defineProperty(T,"key",{get:Hr,configurable:!0})}function X(){var T=v(this.type);return s[T]||(s[T]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),T=this.props.ref,T!==void 0?T:null}function J(T,S,Hr,Qr,Rr,Cr){var wr=Hr.ref;return T={$$typeof:I,type:T,key:S,props:Hr,_owner:Qr},(wr!==void 0?wr:null)!==null?Object.defineProperty(T,"ref",{enumerable:!1,get:X}):Object.defineProperty(T,"ref",{enumerable:!1,value:null}),T._store={},Object.defineProperty(T._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(T,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(T,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Rr}),Object.defineProperty(T,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Cr}),Object.freeze&&(Object.freeze(T.props),Object.freeze(T)),T}function Y(T,S,Hr,Qr,Rr,Cr){var wr=S.children;if(wr!==void 0)if(Qr)if(Jr(wr)){for(Qr=0;Qr<wr.length;Qr++)W(wr[Qr]);Object.freeze&&Object.freeze(wr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else W(wr);if(Wr.call(S,"key")){wr=v(T);var tr=Object.keys(S).filter(function(Gg){return Gg!=="key"});Qr=0<tr.length?"{key: someKey, "+tr.join(": ..., ")+": ...}":"{key: someKey}",Mr[wr+Qr]||(tr=0<tr.length?"{"+tr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Qr,wr,tr,wr),Mr[wr+Qr]=!0)}if(wr=null,Hr!==void 0&&(e(Hr),wr=""+Hr),q(S)&&(e(S.key),wr=""+S.key),"key"in S){Hr={};for(var ar in S)ar!=="key"&&(Hr[ar]=S[ar])}else Hr=S;return wr&&A(Hr,typeof T==="function"?T.displayName||T.name||"Unknown":T),J(T,wr,Hr,H(),Rr,Cr)}function W(T){Q(T)?T._store&&(T._store.validated=1):typeof T==="object"&&T!==null&&T.$$typeof===E&&(T._payload.status==="fulfilled"?Q(T._payload.value)&&T._payload.value._store&&(T._payload.value._store.validated=1):T._store&&(T._store.validated=1))}function Q(T){return typeof T==="object"&&T!==null&&T.$$typeof===I}var I=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),vr=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),f=Symbol.for("react.activity"),C=Symbol.for("react.client.reference"),Yr=$h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wr=Object.prototype.hasOwnProperty,Jr=Array.isArray,xr=console.createTask?console.createTask:function(){return null};$h={react_stack_bottom_frame:function(T){return T()}};var k,s={},hr=$h.react_stack_bottom_frame.bind($h,O)(),or=xr(u(O)),Mr={};E$.Fragment=t,E$.jsxDEV=function(T,S,Hr,Qr){var Rr=1e4>Yr.recentlyCreatedOwnerStacks++;return Y(T,S,Hr,Qr,Rr?Error("react-stack-top-frame"):hr,Rr?xr(u(T)):or)}})()});var KP=Or(hg(),1),$P=Or(M7(),1);var W7=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var R7=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var G7=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var X7=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var Y7=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var J7=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var Q7=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var z7=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var K7=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var $7=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var U7=W7+R7+G7+X7+Y7+J7+Q7+z7+K7+$7;var zg=Or(hg(),1);var v4=Or(hg(),1);var g4=(...v)=>v.filter((h,e,u)=>{return Boolean(h)&&h.trim()!==""&&u.indexOf(h)===e}).join(" ").trim();var L7=(v)=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var n7=(v)=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,e,u)=>u?u.toUpperCase():e.toLowerCase());var RH=(v)=>{let h=n7(v);return h.charAt(0).toUpperCase()+h.slice(1)};var Nw=Or(hg(),1);var o4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var F7=(v)=>{for(let h in v)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};var T5=Or(hg(),1),DK=T5.createContext({});var I7=()=>T5.useContext(DK);var N7=Nw.forwardRef(({color:v,size:h,strokeWidth:e,absoluteStrokeWidth:u,className:H="",children:O,iconNode:q,...A},X)=>{let{size:J=24,strokeWidth:Y=2,absoluteStrokeWidth:W=!1,color:Q="currentColor",className:I=""}=I7()??{},_=u??W?Number(e??Y)*24/Number(h??J):e??Y;return Nw.createElement("svg",{ref:X,...o4,width:h??J??o4.width,height:h??J??o4.height,stroke:v??Q,strokeWidth:_,className:g4("lucide",I,H),...!O&&!F7(A)&&{"aria-hidden":"true"},...A},[...q.map(([t,V])=>Nw.createElement(t,V)),...Array.isArray(O)?O:[O]])});var c=(v,h)=>{let e=v4.forwardRef(({className:u,...H},O)=>v4.createElement(N7,{ref:O,iconNode:h,className:g4(`lucide-${L7(RH(v))}`,`lucide-${v}`,u),...H}));return e.displayName=RH(v),e};var VK=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Z0=c("braces",VK);var _K=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ml=c("chart-column",_K);var EK=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ro=c("code-xml",EK);var yK=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],x0=c("file-code-corner",yK);var cK=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Wl=c("layers",cK);var jK=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Rl=c("loader-circle",jK);var fK=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tv=c("triangle-alert",fK);var aK=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Gl=c("user-round",aK);var pK=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Bw=c("activity",pK);var dK=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],mw=c("arrow-down-to-line",dK);var sK=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Zw=c("arrow-up-to-line",sK);var r$=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],xw=c("blocks",r$);var g$=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Jh=c("book-marked",g$);var o$=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Cw=c("book-open",o$);var v$=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],tw=c("calendar",v$);var l$=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Tw=c("check",l$);var h$=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Go=c("chevron-down",h$);var b$=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sw=c("chevron-left",b$);var w$=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],A1=c("chevron-right",w$);var e$=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rv=c("chevron-up",e$);var u$=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],kw=c("chevrons-up-down",u$);var i$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Dw=c("clock",i$);var H$=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],pv=c("copy",H$);var P$=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],dv=c("database",P$);var O$=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Qh=c("download",O$);var q$=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vw=c("eye",q$);var A$=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],zh=c("folder-open",A$);var M$=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],_w=c("hash",M$);var W$=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Ew=c("link-2",W$);var R$=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],yw=c("list-ordered",R$);var G$=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],cw=c("list",G$);var X$=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jw=c("lock",X$);var Y$=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],S5=c("message-square-plus",Y$);var J$=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],fw=c("message-square",J$);var Q$=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],aw=c("package",Q$);var z$=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sv=c("pencil",z$);var K$=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],pw=c("play",K$);var $$=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dw=c("plus",$$);var U$=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sw=c("radio",U$);var L$=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],M1=c("refresh-cw",L$);var n$=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],r2=c("save",n$);var F$=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Xl=c("search",F$);var I$=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],k5=c("shield-alert",I$);var N$=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],g2=c("shield",N$);var B$=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],o2=c("syringe",B$);var m$=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],C0=c("terminal",m$);var Z$=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v2=c("toggle-left",Z$);var x$=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],l2=c("toggle-right",x$);var C$=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Kh=c("timer",C$);var t$=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Lo=c("trash-2",t$);var T$=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],h2=c("type",T$);var S$=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],b2=c("upload",S$);var k$=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],D5=c("user-plus",k$);var D$=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],w2=c("wrench",D$);var V$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],So=c("x",V$);var _$=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],W1=c("zap",_$);var l4={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var N4=Or(hg(),1);var K2=Or(hg(),1);var xg=Or(rg(),1),y$={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},B7=({script:v,selected:h,dot:e,duration:u,onSelect:H,onEdit:O,sendToBackend:q})=>{let A=(Q)=>{Q.stopPropagation(),q({type:"update_script",id:v.id,patch:{enabled:!v.enabled}})},X=(Q)=>{Q.stopPropagation(),q({type:"duplicate_script",id:v.id})},J=(Q)=>{if(Q.stopPropagation(),!window.confirm(`Delete "${v.name}"?`))return;q({type:"delete_script",id:v.id})},Y=(Q)=>{Q.stopPropagation(),O()},W=v.bindings?.length??0;return xg.jsxDEV("div",{className:`ls-item${h?" ls-selected":""}${!v.enabled&&v.type!=="library"?" ls-disabled":""}`,onClick:H,children:[xg.jsxDEV("span",{className:y$[e],title:e},void 0,!1,void 0,this),xg.jsxDEV("div",{className:"ls-item-body",children:[xg.jsxDEV("div",{className:"ls-item-name",title:v.name,children:v.name},void 0,!1,void 0,this),xg.jsxDEV("div",{className:"ls-item-meta",children:[v.type!=="library"&&xg.jsxDEV("span",{children:v.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),u!==void 0&&e!=="running"&&xg.jsxDEV("span",{style:{color:e==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[u,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.type!=="library"&&W>0&&xg.jsxDEV("div",{className:"ls-item-bindings",children:v.bindings.map((Q,I)=>xg.jsxDEV("span",{className:"ls-binding-badge",children:[Q.type==="character"?xg.jsxDEV(Gl,{size:9},void 0,!1,void 0,this):xg.jsxDEV(fw,{size:9},void 0,!1,void 0,this),xg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Q.displayName},void 0,!1,void 0,this)]},I,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xg.jsxDEV("div",{className:"ls-item-actions",children:[xg.jsxDEV("button",{className:"ls-icon-btn",onClick:Y,title:"Edit script",children:xg.jsxDEV(sv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),v.type!=="library"&&xg.jsxDEV("button",{className:"ls-icon-btn",onClick:A,title:v.enabled?"Disable":"Enable",children:v.enabled?xg.jsxDEV(l2,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):xg.jsxDEV(v2,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),xg.jsxDEV("button",{className:"ls-icon-btn",onClick:X,title:"Duplicate",children:xg.jsxDEV(pv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),xg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:J,title:"Delete",children:xg.jsxDEV(Lo,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Cg=Uint8Array,Gv=Uint16Array,nH=Int32Array,b4=new Cg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),w4=new Cg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),QH=new Cg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),T7=function(v,h){var e=new Gv(31);for(var u=0;u<31;++u)e[u]=h+=1<<v[u-1];var H=new nH(e[30]);for(var u=1;u<30;++u)for(var O=e[u];O<e[u+1];++O)H[O]=O-e[u]<<5|u;return{b:e,r:H}},S7=T7(b4,2),k7=S7.b,zH=S7.r;k7[28]=258,zH[258]=28;var D7=T7(w4,0),c$=D7.b,m7=D7.r,KH=new Gv(32768);for(gg=0;gg<32768;++gg)t0=(gg&43690)>>1|(gg&21845)<<1,t0=(t0&52428)>>2|(t0&13107)<<2,t0=(t0&61680)>>4|(t0&3855)<<4,KH[gg]=((t0&65280)>>8|(t0&255)<<8)>>1;var t0,gg,S0=function(v,h,e){var u=v.length,H=0,O=new Gv(h);for(;H<u;++H)if(v[H])++O[v[H]-1];var q=new Gv(h);for(H=1;H<h;++H)q[H]=q[H-1]+O[H-1]<<1;var A;if(e){A=new Gv(1<<h);var X=15-h;for(H=0;H<u;++H)if(v[H]){var J=H<<4|v[H],Y=h-v[H],W=q[v[H]-1]++<<Y;for(var Q=W|(1<<Y)-1;W<=Q;++W)A[KH[W]>>X]=J}}else{A=new Gv(u);for(H=0;H<u;++H)if(v[H])A[H]=KH[q[v[H]-1]++]>>15-v[H]}return A},Yl=new Cg(288);for(gg=0;gg<144;++gg)Yl[gg]=8;var gg;for(gg=144;gg<256;++gg)Yl[gg]=9;var gg;for(gg=256;gg<280;++gg)Yl[gg]=7;var gg;for(gg=280;gg<288;++gg)Yl[gg]=8;var gg,i2=new Cg(32);for(gg=0;gg<32;++gg)i2[gg]=5;var gg,j$=S0(Yl,9,0),f$=S0(Yl,9,1),a$=S0(i2,5,0),p$=S0(i2,5,1),GH=function(v){var h=v[0];for(var e=1;e<v.length;++e)if(v[e]>h)h=v[e];return h},r0=function(v,h,e){var u=h/8|0;return(v[u]|v[u+1]<<8)>>(h&7)&e},XH=function(v,h){var e=h/8|0;return(v[e]|v[e+1]<<8|v[e+2]<<16)>>(h&7)},FH=function(v){return(v+7)/8|0},H2=function(v,h,e){if(h==null||h<0)h=0;if(e==null||e>v.length)e=v.length;return new Cg(v.subarray(h,e))};var d$=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ko=function(v,h,e){var u=Error(h||d$[v]);if(u.code=v,Error.captureStackTrace)Error.captureStackTrace(u,ko);if(!e)throw u;return u},s$=function(v,h,e,u){var H=v.length,O=u?u.length:0;if(!H||h.f&&!h.l)return e||new Cg(0);var q=!e,A=q||h.i!=2,X=h.i;if(q)e=new Cg(H*3);var J=function(er){var _o=e.length;if(er>_o){var Qo=new Cg(Math.max(_o*2,er));Qo.set(e),e=Qo}},Y=h.f||0,W=h.p||0,Q=h.b||0,I=h.l,_=h.d,t=h.m,V=h.n,rr=H*8;do{if(!I){Y=r0(v,W,1);var Pr=r0(v,W+1,3);if(W+=3,!Pr){var lr=FH(W)+4,j=v[lr-4]|v[lr-3]<<8,p=lr+j;if(p>H){if(X)ko(0);break}if(A)J(Q+j);e.set(v.subarray(lr,p),Q),h.b=Q+=j,h.p=W=p*8,h.f=Y;continue}else if(Pr==1)I=f$,_=p$,t=9,V=5;else if(Pr==2){var vr=r0(v,W,31)+257,m=r0(v,W+10,15)+4,E=vr+r0(v,W+5,31)+1;W+=14;var f=new Cg(E),C=new Cg(19);for(var Yr=0;Yr<m;++Yr)C[QH[Yr]]=r0(v,W+Yr*3,7);W+=m*3;var Wr=GH(C),Jr=(1<<Wr)-1,xr=S0(C,Wr,1);for(var Yr=0;Yr<E;){var k=xr[r0(v,W,Jr)];W+=k&15;var lr=k>>4;if(lr<16)f[Yr++]=lr;else{var s=0,hr=0;if(lr==16)hr=3+r0(v,W,3),W+=2,s=f[Yr-1];else if(lr==17)hr=3+r0(v,W,7),W+=3;else if(lr==18)hr=11+r0(v,W,127),W+=7;while(hr--)f[Yr++]=s}}var or=f.subarray(0,vr),Mr=f.subarray(vr);t=GH(or),V=GH(Mr),I=S0(or,t,1),_=S0(Mr,V,1)}else ko(1);if(W>rr){if(X)ko(0);break}}if(A)J(Q+131072);var T=(1<<t)-1,S=(1<<V)-1,Hr=W;for(;;Hr=W){var s=I[XH(v,W)&T],Qr=s>>4;if(W+=s&15,W>rr){if(X)ko(0);break}if(!s)ko(2);if(Qr<256)e[Q++]=Qr;else if(Qr==256){Hr=W,I=null;break}else{var Rr=Qr-254;if(Qr>264){var Yr=Qr-257,Cr=b4[Yr];Rr=r0(v,W,(1<<Cr)-1)+k7[Yr],W+=Cr}var wr=_[XH(v,W)&S],tr=wr>>4;if(!wr)ko(3);W+=wr&15;var Mr=c$[tr];if(tr>3){var Cr=w4[tr];Mr+=XH(v,W)&(1<<Cr)-1,W+=Cr}if(W>rr){if(X)ko(0);break}if(A)J(Q+131072);var ar=Q+Rr;if(Q<Mr){var Gg=O-Mr,Fo=Math.min(Mr,ar);if(Gg+Q<0)ko(3);for(;Q<Fo;++Q)e[Q]=u[Gg+Q]}for(;Q<ar;++Q)e[Q]=e[Q-Mr]}}if(h.l=I,h.p=Hr,h.b=Q,h.f=Y,I)Y=1,h.m=t,h.d=_,h.n=V}while(!Y);return Q!=e.length&&q?H2(e,0,Q):e.subarray(0,Q)},R1=function(v,h,e){e<<=h&7;var u=h/8|0;v[u]|=e,v[u+1]|=e>>8},e2=function(v,h,e){e<<=h&7;var u=h/8|0;v[u]|=e,v[u+1]|=e>>8,v[u+2]|=e>>16},YH=function(v,h){var e=[];for(var u=0;u<v.length;++u)if(v[u])e.push({s:u,f:v[u]});var H=e.length,O=e.slice();if(!H)return{t:_7,l:0};if(H==1){var q=new Cg(e[0].s+1);return q[e[0].s]=1,{t:q,l:1}}e.sort(function(p,vr){return p.f-vr.f}),e.push({s:-1,f:25001});var A=e[0],X=e[1],J=0,Y=1,W=2;e[0]={s:-1,f:A.f+X.f,l:A,r:X};while(Y!=H-1)A=e[e[J].f<e[W].f?J++:W++],X=e[J!=Y&&e[J].f<e[W].f?J++:W++],e[Y++]={s:-1,f:A.f+X.f,l:A,r:X};var Q=O[0].s;for(var u=1;u<H;++u)if(O[u].s>Q)Q=O[u].s;var I=new Gv(Q+1),_=$H(e[Y-1],I,0);if(_>h){var u=0,t=0,V=_-h,rr=1<<V;O.sort(function(vr,m){return I[m.s]-I[vr.s]||vr.f-m.f});for(;u<H;++u){var Pr=O[u].s;if(I[Pr]>h)t+=rr-(1<<_-I[Pr]),I[Pr]=h;else break}t>>=V;while(t>0){var lr=O[u].s;if(I[lr]<h)t-=1<<h-I[lr]++-1;else++u}for(;u>=0&&t;--u){var j=O[u].s;if(I[j]==h)--I[j],++t}_=h}return{t:new Cg(I),l:_}},$H=function(v,h,e){return v.s==-1?Math.max($H(v.l,h,e+1),$H(v.r,h,e+1)):h[v.s]=e},Z7=function(v){var h=v.length;while(h&&!v[--h]);var e=new Gv(++h),u=0,H=v[0],O=1,q=function(X){e[u++]=X};for(var A=1;A<=h;++A)if(v[A]==H&&A!=h)++O;else{if(!H&&O>2){for(;O>138;O-=138)q(32754);if(O>2)q(O>10?O-11<<5|28690:O-3<<5|12305),O=0}else if(O>3){q(H),--O;for(;O>6;O-=6)q(8304);if(O>2)q(O-3<<5|8208),O=0}while(O--)q(H);O=1,H=v[A]}return{c:e.subarray(0,u),n:h}},u2=function(v,h){var e=0;for(var u=0;u<h.length;++u)e+=v[u]*h[u];return e},V7=function(v,h,e){var u=e.length,H=FH(h+2);v[H]=u&255,v[H+1]=u>>8,v[H+2]=v[H]^255,v[H+3]=v[H+1]^255;for(var O=0;O<u;++O)v[H+O+4]=e[O];return(H+4+u)*8},x7=function(v,h,e,u,H,O,q,A,X,J,Y){R1(h,Y++,e),++H[256];var W=YH(H,15),Q=W.t,I=W.l,_=YH(O,15),t=_.t,V=_.l,rr=Z7(Q),Pr=rr.c,lr=rr.n,j=Z7(t),p=j.c,vr=j.n,m=new Gv(19);for(var E=0;E<Pr.length;++E)++m[Pr[E]&31];for(var E=0;E<p.length;++E)++m[p[E]&31];var f=YH(m,7),C=f.t,Yr=f.l,Wr=19;for(;Wr>4&&!C[QH[Wr-1]];--Wr);var Jr=J+5<<3,xr=u2(H,Yl)+u2(O,i2)+q,k=u2(H,Q)+u2(O,t)+q+14+3*Wr+u2(m,C)+2*m[16]+3*m[17]+7*m[18];if(X>=0&&Jr<=xr&&Jr<=k)return V7(h,Y,v.subarray(X,X+J));var s,hr,or,Mr;if(R1(h,Y,1+(k<xr)),Y+=2,k<xr){s=S0(Q,I,0),hr=Q,or=S0(t,V,0),Mr=t;var T=S0(C,Yr,0);R1(h,Y,lr-257),R1(h,Y+5,vr-1),R1(h,Y+10,Wr-4),Y+=14;for(var E=0;E<Wr;++E)R1(h,Y+3*E,C[QH[E]]);Y+=3*Wr;var S=[Pr,p];for(var Hr=0;Hr<2;++Hr){var Qr=S[Hr];for(var E=0;E<Qr.length;++E){var Rr=Qr[E]&31;if(R1(h,Y,T[Rr]),Y+=C[Rr],Rr>15)R1(h,Y,Qr[E]>>5&127),Y+=Qr[E]>>12}}}else s=j$,hr=Yl,or=a$,Mr=i2;for(var E=0;E<A;++E){var Cr=u[E];if(Cr>255){var Rr=Cr>>18&31;if(e2(h,Y,s[Rr+257]),Y+=hr[Rr+257],Rr>7)R1(h,Y,Cr>>23&31),Y+=b4[Rr];var wr=Cr&31;if(e2(h,Y,or[wr]),Y+=Mr[wr],wr>3)e2(h,Y,Cr>>5&8191),Y+=w4[wr]}else e2(h,Y,s[Cr]),Y+=hr[Cr]}return e2(h,Y,s[256]),Y+hr[256]},rU=new nH([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),_7=new Cg(0),gU=function(v,h,e,u,H,O){var q=O.z||v.length,A=new Cg(u+q+5*(1+Math.ceil(q/7000))+H),X=A.subarray(u,A.length-H),J=O.l,Y=(O.r||0)&7;if(h){if(Y)X[0]=O.r>>3;var W=rU[h-1],Q=W>>13,I=W&8191,_=(1<<e)-1,t=O.p||new Gv(32768),V=O.h||new Gv(_+1),rr=Math.ceil(e/3),Pr=2*rr,lr=function(rv){return(v[rv]^v[rv+1]<<rr^v[rv+2]<<Pr)&_},j=new nH(25000),p=new Gv(288),vr=new Gv(32),m=0,E=0,f=O.i||0,C=0,Yr=O.w||0,Wr=0;for(;f+2<q;++f){var Jr=lr(f),xr=f&32767,k=V[Jr];if(t[xr]=k,V[Jr]=xr,Yr<=f){var s=q-f;if((m>7000||C>24576)&&(s>423||!J)){Y=x7(v,X,0,j,p,vr,E,C,Wr,f-Wr,Y),C=m=E=0,Wr=f;for(var hr=0;hr<286;++hr)p[hr]=0;for(var hr=0;hr<30;++hr)vr[hr]=0}var or=2,Mr=0,T=I,S=xr-k&32767;if(s>2&&Jr==lr(f-S)){var Hr=Math.min(Q,s)-1,Qr=Math.min(32767,f),Rr=Math.min(258,s);while(S<=Qr&&--T&&xr!=k){if(v[f+or]==v[f+or-S]){var Cr=0;for(;Cr<Rr&&v[f+Cr]==v[f+Cr-S];++Cr);if(Cr>or){if(or=Cr,Mr=S,Cr>Hr)break;var wr=Math.min(S,Cr-2),tr=0;for(var hr=0;hr<wr;++hr){var ar=f-S+hr&32767,Gg=t[ar],Fo=ar-Gg&32767;if(Fo>tr)tr=Fo,k=ar}}}xr=k,k=t[xr],S+=xr-k&32767}}if(Mr){j[C++]=268435456|zH[or]<<18|m7[Mr];var er=zH[or]&31,_o=m7[Mr]&31;E+=b4[er]+w4[_o],++p[257+er],++vr[_o],Yr=f+or,++m}else j[C++]=v[f],++p[v[f]]}}for(f=Math.max(f,Yr);f<q;++f)j[C++]=v[f],++p[v[f]];if(Y=x7(v,X,J,j,p,vr,E,C,Wr,f-Wr,Y),!J)O.r=Y&7|X[Y/8|0]<<3,Y-=7,O.h=V,O.p=t,O.i=f,O.w=Yr}else{for(var f=O.w||0;f<q+J;f+=65535){var Qo=f+65535;if(Qo>=q)X[Y/8|0]=J,Qo=q;Y=V7(X,Y+1,v.subarray(f,Qo))}O.i=q}return H2(A,0,u+FH(Y)+H)},oU=function(){var v=new Int32Array(256);for(var h=0;h<256;++h){var e=h,u=9;while(--u)e=(e&1&&-306674912)^e>>>1;v[h]=e}return v}(),vU=function(){var v=-1;return{p:function(h){var e=v;for(var u=0;u<h.length;++u)e=oU[e&255^h[u]]^e>>>8;v=e},d:function(){return~v}}};var lU=function(v,h,e,u,H){if(!H){if(H={l:1},h.dictionary){var O=h.dictionary.subarray(-32768),q=new Cg(O.length+v.length);q.set(O),q.set(v,O.length),v=q,H.w=O.length}}return gU(v,h.level==null?6:h.level,h.mem==null?H.l?Math.ceil(Math.max(8,Math.min(13,Math.log(v.length)))*1.5):20:12+h.mem,e,u,H)},E7=function(v,h){var e={};for(var u in v)e[u]=v[u];for(var u in h)e[u]=h[u];return e};var T0=function(v,h){return v[h]|v[h+1]<<8},g0=function(v,h){return(v[h]|v[h+1]<<8|v[h+2]<<16|v[h+3]<<24)>>>0},JH=function(v,h){return g0(v,h)+g0(v,h+4)*4294967296},Xo=function(v,h,e){for(;e;++h)v[h]=e,e>>>=8};function hU(v,h){return lU(v,h||{},0,0)}function bU(v,h){return s$(v,{i:2},h&&h.out,h&&h.dictionary)}var y7=function(v,h,e,u){for(var H in v){var O=v[H],q=h+H,A=u;if(Array.isArray(O))A=E7(u,O[1]),O=O[0];if(O instanceof Cg)e[q]=[O,A];else e[q+="/"]=[new Cg(0),A],y7(O,q,e,u)}},C7=typeof TextEncoder<"u"&&new TextEncoder,UH=typeof TextDecoder<"u"&&new TextDecoder,wU=0;try{UH.decode(_7,{stream:!0}),wU=1}catch(v){}var eU=function(v){for(var h="",e=0;;){var u=v[e++],H=(u>127)+(u>223)+(u>239);if(e+H>v.length)return{s:h,r:H2(v,e-1)};if(!H)h+=String.fromCharCode(u);else if(H==3)u=((u&15)<<18|(v[e++]&63)<<12|(v[e++]&63)<<6|v[e++]&63)-65536,h+=String.fromCharCode(55296|u>>10,56320|u&1023);else if(H&1)h+=String.fromCharCode((u&31)<<6|v[e++]&63);else h+=String.fromCharCode((u&15)<<12|(v[e++]&63)<<6|v[e++]&63)}};function h4(v,h){if(h){var e=new Cg(v.length);for(var u=0;u<v.length;++u)e[u]=v.charCodeAt(u);return e}if(C7)return C7.encode(v);var H=v.length,O=new Cg(v.length+(v.length>>1)),q=0,A=function(Y){O[q++]=Y};for(var u=0;u<H;++u){if(q+5>O.length){var X=new Cg(q+8+(H-u<<1));X.set(O),O=X}var J=v.charCodeAt(u);if(J<128||h)A(J);else if(J<2048)A(192|J>>6),A(128|J&63);else if(J>55295&&J<57344)J=65536+(J&1047552)|v.charCodeAt(++u)&1023,A(240|J>>18),A(128|J>>12&63),A(128|J>>6&63),A(128|J&63);else A(224|J>>12),A(128|J>>6&63),A(128|J&63)}return H2(O,0,q)}function IH(v,h){if(h){var e="";for(var u=0;u<v.length;u+=16384)e+=String.fromCharCode.apply(null,v.subarray(u,u+16384));return e}else if(UH)return UH.decode(v);else{var H=eU(v),O=H.s,e=H.r;if(e.length)ko(8);return O}}var uU=function(v,h){return h+30+T0(v,h+26)+T0(v,h+28)},iU=function(v,h,e){var u=T0(v,h+28),H=IH(v.subarray(h+46,h+46+u),!(T0(v,h+8)&2048)),O=h+46+u,q=g0(v,h+20),A=e&&q==4294967295?HU(v,O):[q,g0(v,h+24),g0(v,h+42)],X=A[0],J=A[1],Y=A[2];return[T0(v,h+10),X,J,H,O+T0(v,h+30)+T0(v,h+32),Y]},HU=function(v,h){for(;T0(v,h)!=1;h+=4+T0(v,h+2));return[JH(v,h+12),JH(v,h+4),JH(v,h+20)]},LH=function(v){var h=0;if(v)for(var e in v){var u=v[e].length;if(u>65535)ko(9);h+=u+4}return h},t7=function(v,h,e,u,H,O,q,A){var X=u.length,J=e.extra,Y=A&&A.length,W=LH(J);if(Xo(v,h,q!=null?33639248:67324752),h+=4,q!=null)v[h++]=20,v[h++]=e.os;v[h]=20,h+=2,v[h++]=e.flag<<1|(O<0&&8),v[h++]=H&&8,v[h++]=e.compression&255,v[h++]=e.compression>>8;var Q=new Date(e.mtime==null?Date.now():e.mtime),I=Q.getFullYear()-1980;if(I<0||I>119)ko(10);if(Xo(v,h,I<<25|Q.getMonth()+1<<21|Q.getDate()<<16|Q.getHours()<<11|Q.getMinutes()<<5|Q.getSeconds()>>1),h+=4,O!=-1)Xo(v,h,e.crc),Xo(v,h+4,O<0?-O-2:O),Xo(v,h+8,e.size);if(Xo(v,h+12,X),Xo(v,h+14,W),h+=16,q!=null)Xo(v,h,Y),Xo(v,h+6,e.attrs),Xo(v,h+10,q),h+=14;if(v.set(u,h),h+=X,W)for(var _ in J){var t=J[_],V=t.length;Xo(v,h,+_),Xo(v,h+2,V),v.set(t,h+4),h+=4+V}if(Y)v.set(A,h),h+=Y;return h},PU=function(v,h,e,u,H){Xo(v,h,101010256),Xo(v,h+8,e),Xo(v,h+10,e),Xo(v,h+12,u),Xo(v,h+16,H)};function c7(v,h){if(!h)h={};var e={},u=[];y7(v,"",e,h);var H=0,O=0;for(var q in e){var A=e[q],X=A[0],J=A[1],Y=J.level==0?0:8,W=h4(q),Q=W.length,I=J.comment,_=I&&h4(I),t=_&&_.length,V=LH(J.extra);if(Q>65535)ko(11);var rr=Y?hU(X,J):X,Pr=rr.length,lr=vU();lr.p(X),u.push(E7(J,{size:X.length,crc:lr.d(),c:rr,f:W,m:_,u:Q!=q.length||_&&I.length!=t,o:H,compression:Y})),H+=30+Q+V+Pr,O+=76+2*(Q+V)+(t||0)+Pr}var j=new Cg(O+22),p=H,vr=O-H;for(var m=0;m<u.length;++m){var W=u[m];t7(j,W.o,W,W.f,W.u,W.c.length);var E=30+W.f.length+LH(W.extra);j.set(W.c,W.o+E),t7(j,H,W,W.f,W.u,W.c.length,W.o,W.m),H+=16+E+(W.m?W.m.length:0)}return PU(j,H,u.length,vr,p),j}function j7(v,h){var e={},u=v.length-22;for(;g0(v,u)!=101010256;--u)if(!u||v.length-u>65558)ko(13);var H=T0(v,u+8);if(!H)return{};var O=g0(v,u+16),q=O==4294967295||H==65535;if(q){var A=g0(v,u-12);if(q=g0(v,A)==101075792,q)H=g0(v,A+32),O=g0(v,A+48)}var X=h&&h.filter;for(var J=0;J<H;++J){var Y=iU(v,O,q),W=Y[0],Q=Y[1],I=Y[2],_=Y[3],t=Y[4],V=Y[5],rr=uU(v,V);if(O=t,!X||X({name:_,size:Q,originalSize:I,compression:W}))if(!W)e[_]=H2(v,rr,rr+Q);else if(W==8)e[_]=bU(v.subarray(rr,rr+Q),{out:new Cg(I)});else ko(14,"unknown compression type "+W)}return e}function NH(v){let h=v.map((u)=>({name:u.name,code:u.code,type:u.type,triggers:u.triggers,bindings:u.bindings,folder:u.folder,metadata:u.metadata})),e={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:h};return c7({"pack.json":h4(JSON.stringify(e,null,2))})}function f7(v,h){let e=NH(v),u=new Blob([e.buffer],{type:"application/zip"}),H=URL.createObjectURL(u),O=document.createElement("a");O.href=H,O.download=`${h}.lumiscript.zip`,O.click(),URL.revokeObjectURL(H)}var a7;function y(v,h,e){function u(A,X){if(!A._zod)Object.defineProperty(A,"_zod",{value:{def:X,constr:q,traits:new Set},enumerable:!1});if(A._zod.traits.has(v))return;A._zod.traits.add(v),h(A,X);let J=q.prototype,Y=Object.keys(J);for(let W=0;W<Y.length;W++){let Q=Y[W];if(!(Q in A))A[Q]=J[Q].bind(A)}}let H=e?.Parent??Object;class O extends H{}Object.defineProperty(O,"name",{value:v});function q(A){var X;let J=e?.Parent?new O:this;u(J,A),(X=J._zod).deferred??(X.deferred=[]);for(let Y of J._zod.deferred)Y();return J}return Object.defineProperty(q,"init",{value:u}),Object.defineProperty(q,Symbol.hasInstance,{value:(A)=>{if(e?.Parent&&A instanceof e.Parent)return!0;return A?._zod?.traits?.has(v)}}),Object.defineProperty(q,"name",{value:v}),q}var X_g=Symbol("zod_brand");class G1 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class P2 extends Error{constructor(v){super(`Encountered unidirectional transform during encode: ${v}`);this.name="ZodEncodeError"}}(a7=globalThis).__zod_globalConfig??(a7.__zod_globalConfig={});var V5=globalThis.__zod_globalConfig;function X1(v){if(v)Object.assign(V5,v);return V5}var qg={};UK(qg,{unwrapMessage:()=>O2,uint8ArrayToHex:()=>TU,uint8ArrayToBase64url:()=>CU,uint8ArrayToBase64:()=>b3,stringifyPrimitive:()=>g3,slugify:()=>mH,shallowClone:()=>s7,safeExtend:()=>FU,required:()=>BU,randomString:()=>QU,propertyKeyTypes:()=>xH,promiseAllObject:()=>JU,primitiveTypes:()=>r3,prefixIssues:()=>R2,pick:()=>UU,partial:()=>NU,parsedType:()=>mU,optionalKeys:()=>CH,omit:()=>LU,objectClone:()=>GU,numKeys:()=>zU,nullish:()=>M2,normalizeParams:()=>_r,mergeDefs:()=>Y1,merge:()=>IU,jsonStringifyReplacer:()=>E5,joinValues:()=>RU,issue:()=>y5,isPlainObject:()=>Uh,isObject:()=>_5,hexToUint8Array:()=>tU,getSizableOrigin:()=>l3,getParsedType:()=>KU,getLengthableOrigin:()=>G2,getEnumValues:()=>q2,getElementAtPath:()=>YU,floatSafeRemainder:()=>d7,finalizeIssue:()=>k0,extend:()=>nU,explicitlyAborted:()=>tH,escapeRegex:()=>J1,esc:()=>e4,defineLazy:()=>Pg,createTransparentProxy:()=>$U,cloneDef:()=>XU,clone:()=>o0,cleanRegex:()=>W2,cleanEnum:()=>ZU,captureStackTrace:()=>u4,cached:()=>A2,base64urlToUint8Array:()=>xU,base64ToUint8Array:()=>h3,assignProp:()=>Jl,assertNotEqual:()=>qU,assertNever:()=>MU,assertIs:()=>AU,assertEqual:()=>OU,assert:()=>WU,allowsEval:()=>ZH,aborted:()=>Ql,NUMBER_FORMAT_RANGES:()=>o3,Class:()=>w3,BIGINT_FORMAT_RANGES:()=>v3});function OU(v){return v}function qU(v){return v}function AU(v){}function MU(v){throw Error("Unexpected value in exhaustive check")}function WU(v){}function q2(v){let h=Object.values(v).filter((u)=>typeof u==="number");return Object.entries(v).filter(([u,H])=>h.indexOf(+u)===-1).map(([u,H])=>H)}function RU(v,h="|"){return v.map((e)=>g3(e)).join(h)}function E5(v,h){if(typeof h==="bigint")return h.toString();return h}function A2(v){return{get value(){{let e=v();return Object.defineProperty(this,"value",{value:e}),e}throw Error("cached value already set")}}}function M2(v){return v===null||v===void 0}function W2(v){let h=v.startsWith("^")?1:0,e=v.endsWith("$")?v.length-1:v.length;return v.slice(h,e)}function d7(v,h){let e=v/h,u=Math.round(e),H=Number.EPSILON*Math.max(Math.abs(e),1);if(Math.abs(e-u)<H)return 0;return e-u}var p7=Symbol("evaluating");function Pg(v,h,e){let u=void 0;Object.defineProperty(v,h,{get(){if(u===p7)return;if(u===void 0)u=p7,u=e();return u},set(H){Object.defineProperty(v,h,{value:H})},configurable:!0})}function GU(v){return Object.create(Object.getPrototypeOf(v),Object.getOwnPropertyDescriptors(v))}function Jl(v,h,e){Object.defineProperty(v,h,{value:e,writable:!0,enumerable:!0,configurable:!0})}function Y1(...v){let h={};for(let e of v){let u=Object.getOwnPropertyDescriptors(e);Object.assign(h,u)}return Object.defineProperties({},h)}function XU(v){return Y1(v._zod.def)}function YU(v,h){if(!h)return v;return h.reduce((e,u)=>e?.[u],v)}function JU(v){let h=Object.keys(v),e=h.map((u)=>v[u]);return Promise.all(e).then((u)=>{let H={};for(let O=0;O<h.length;O++)H[h[O]]=u[O];return H})}function QU(v=10){let e="";for(let u=0;u<v;u++)e+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return e}function e4(v){return JSON.stringify(v)}function mH(v){return v.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var u4="captureStackTrace"in Error?Error.captureStackTrace:(...v)=>{};function _5(v){return typeof v==="object"&&v!==null&&!Array.isArray(v)}var ZH=A2(()=>{if(V5.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(v){return!1}});function Uh(v){if(_5(v)===!1)return!1;let h=v.constructor;if(h===void 0)return!0;if(typeof h!=="function")return!0;let e=h.prototype;if(_5(e)===!1)return!1;if(Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)return!1;return!0}function s7(v){if(Uh(v))return{...v};if(Array.isArray(v))return[...v];if(v instanceof Map)return new Map(v);if(v instanceof Set)return new Set(v);return v}function zU(v){let h=0;for(let e in v)if(Object.prototype.hasOwnProperty.call(v,e))h++;return h}var KU=(v)=>{let h=typeof v;switch(h){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(v)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(v))return"array";if(v===null)return"null";if(v.then&&typeof v.then==="function"&&v.catch&&typeof v.catch==="function")return"promise";if(typeof Map<"u"&&v instanceof Map)return"map";if(typeof Set<"u"&&v instanceof Set)return"set";if(typeof Date<"u"&&v instanceof Date)return"date";if(typeof File<"u"&&v instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${h}`)}},xH=new Set(["string","number","symbol"]),r3=new Set(["string","number","bigint","boolean","symbol","undefined"]);function J1(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function o0(v,h,e){let u=new v._zod.constr(h??v._zod.def);if(!h||e?.parent)u._zod.parent=v;return u}function _r(v){let h=v;if(!h)return{};if(typeof h==="string")return{error:()=>h};if(h?.message!==void 0){if(h?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");h.error=h.message}if(delete h.message,typeof h.error==="string")return{...h,error:()=>h.error};return h}function $U(v){let h;return new Proxy({},{get(e,u,H){return h??(h=v()),Reflect.get(h,u,H)},set(e,u,H,O){return h??(h=v()),Reflect.set(h,u,H,O)},has(e,u){return h??(h=v()),Reflect.has(h,u)},deleteProperty(e,u){return h??(h=v()),Reflect.deleteProperty(h,u)},ownKeys(e){return h??(h=v()),Reflect.ownKeys(h)},getOwnPropertyDescriptor(e,u){return h??(h=v()),Reflect.getOwnPropertyDescriptor(h,u)},defineProperty(e,u,H){return h??(h=v()),Reflect.defineProperty(h,u,H)}})}function g3(v){if(typeof v==="bigint")return v.toString()+"n";if(typeof v==="string")return`"${v}"`;return`${v}`}function CH(v){return Object.keys(v).filter((h)=>{return v[h]._zod.optin==="optional"&&v[h]._zod.optout==="optional"})}var o3={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},v3={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function UU(v,h){let e=v._zod.def,u=e.checks;if(u&&u.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let O=Y1(v._zod.def,{get shape(){let q={};for(let A in h){if(!(A in e.shape))throw Error(`Unrecognized key: "${A}"`);if(!h[A])continue;q[A]=e.shape[A]}return Jl(this,"shape",q),q},checks:[]});return o0(v,O)}function LU(v,h){let e=v._zod.def,u=e.checks;if(u&&u.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let O=Y1(v._zod.def,{get shape(){let q={...v._zod.def.shape};for(let A in h){if(!(A in e.shape))throw Error(`Unrecognized key: "${A}"`);if(!h[A])continue;delete q[A]}return Jl(this,"shape",q),q},checks:[]});return o0(v,O)}function nU(v,h){if(!Uh(h))throw Error("Invalid input to extend: expected a plain object");let e=v._zod.def.checks;if(e&&e.length>0){let O=v._zod.def.shape;for(let q in h)if(Object.getOwnPropertyDescriptor(O,q)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let H=Y1(v._zod.def,{get shape(){let O={...v._zod.def.shape,...h};return Jl(this,"shape",O),O}});return o0(v,H)}function FU(v,h){if(!Uh(h))throw Error("Invalid input to safeExtend: expected a plain object");let e=Y1(v._zod.def,{get shape(){let u={...v._zod.def.shape,...h};return Jl(this,"shape",u),u}});return o0(v,e)}function IU(v,h){if(v._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let e=Y1(v._zod.def,{get shape(){let u={...v._zod.def.shape,...h._zod.def.shape};return Jl(this,"shape",u),u},get catchall(){return h._zod.def.catchall},checks:h._zod.def.checks??[]});return o0(v,e)}function NU(v,h,e){let H=h._zod.def.checks;if(H&&H.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let q=Y1(h._zod.def,{get shape(){let A=h._zod.def.shape,X={...A};if(e)for(let J in e){if(!(J in A))throw Error(`Unrecognized key: "${J}"`);if(!e[J])continue;X[J]=v?new v({type:"optional",innerType:A[J]}):A[J]}else for(let J in A)X[J]=v?new v({type:"optional",innerType:A[J]}):A[J];return Jl(this,"shape",X),X},checks:[]});return o0(h,q)}function BU(v,h,e){let u=Y1(h._zod.def,{get shape(){let H=h._zod.def.shape,O={...H};if(e)for(let q in e){if(!(q in O))throw Error(`Unrecognized key: "${q}"`);if(!e[q])continue;O[q]=new v({type:"nonoptional",innerType:H[q]})}else for(let q in H)O[q]=new v({type:"nonoptional",innerType:H[q]});return Jl(this,"shape",O),O}});return o0(h,u)}function Ql(v,h=0){if(v.aborted===!0)return!0;for(let e=h;e<v.issues.length;e++)if(v.issues[e]?.continue!==!0)return!0;return!1}function tH(v,h=0){if(v.aborted===!0)return!0;for(let e=h;e<v.issues.length;e++)if(v.issues[e]?.continue===!1)return!0;return!1}function R2(v,h){return h.map((e)=>{var u;return(u=e).path??(u.path=[]),e.path.unshift(v),e})}function O2(v){return typeof v==="string"?v:v?.message}function k0(v,h,e){let u=v.message?v.message:O2(v.inst?._zod.def?.error?.(v))??O2(h?.error?.(v))??O2(e.customError?.(v))??O2(e.localeError?.(v))??"Invalid input",{inst:H,continue:O,input:q,...A}=v;if(A.path??(A.path=[]),A.message=u,h?.reportInput)A.input=q;return A}function l3(v){if(v instanceof Set)return"set";if(v instanceof Map)return"map";if(v instanceof File)return"file";return"unknown"}function G2(v){if(Array.isArray(v))return"array";if(typeof v==="string")return"string";return"unknown"}function mU(v){let h=typeof v;switch(h){case"number":return Number.isNaN(v)?"nan":"number";case"object":{if(v===null)return"null";if(Array.isArray(v))return"array";let e=v;if(e&&Object.getPrototypeOf(e)!==Object.prototype&&"constructor"in e&&e.constructor)return e.constructor.name}}return h}function y5(...v){let[h,e,u]=v;if(typeof h==="string")return{message:h,code:"custom",input:e,inst:u};return{...h}}function ZU(v){return Object.entries(v).filter(([h,e])=>{return Number.isNaN(Number.parseInt(h,10))}).map((h)=>h[1])}function h3(v){let h=atob(v),e=new Uint8Array(h.length);for(let u=0;u<h.length;u++)e[u]=h.charCodeAt(u);return e}function b3(v){let h="";for(let e=0;e<v.length;e++)h+=String.fromCharCode(v[e]);return btoa(h)}function xU(v){let h=v.replace(/-/g,"+").replace(/_/g,"/"),e="=".repeat((4-h.length%4)%4);return h3(h+e)}function CU(v){return b3(v).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function tU(v){let h=v.replace(/^0x/,"");if(h.length%2!==0)throw Error("Invalid hex string length");let e=new Uint8Array(h.length/2);for(let u=0;u<h.length;u+=2)e[u/2]=Number.parseInt(h.slice(u,u+2),16);return e}function TU(v){return Array.from(v).map((h)=>h.toString(16).padStart(2,"0")).join("")}class w3{constructor(...v){}}var e3=(v,h)=>{v.name="$ZodError",Object.defineProperty(v,"_zod",{value:v._zod,enumerable:!1}),Object.defineProperty(v,"issues",{value:h,enumerable:!1}),v.message=JSON.stringify(h,E5,2),Object.defineProperty(v,"toString",{value:()=>v.message,enumerable:!1})},i4=y("$ZodError",e3),TH=y("$ZodError",e3,{Parent:Error});function u3(v,h=(e)=>e.message){let e={},u=[];for(let H of v.issues)if(H.path.length>0)e[H.path[0]]=e[H.path[0]]||[],e[H.path[0]].push(h(H));else u.push(h(H));return{formErrors:u,fieldErrors:e}}function i3(v,h=(e)=>e.message){let e={_errors:[]},u=(H,O=[])=>{for(let q of H.issues)if(q.code==="invalid_union"&&q.errors.length)q.errors.map((A)=>u({issues:A},[...O,...q.path]));else if(q.code==="invalid_key")u({issues:q.issues},[...O,...q.path]);else if(q.code==="invalid_element")u({issues:q.issues},[...O,...q.path]);else{let A=[...O,...q.path];if(A.length===0)e._errors.push(h(q));else{let X=e,J=0;while(J<A.length){let Y=A[J];if(J!==A.length-1)X[Y]=X[Y]||{_errors:[]};else X[Y]=X[Y]||{_errors:[]},X[Y]._errors.push(h(q));X=X[Y],J++}}}};return u(v),e}var H4=(v)=>(h,e,u,H)=>{let O=u?{...u,async:!1}:{async:!1},q=h._zod.run({value:e,issues:[]},O);if(q instanceof Promise)throw new G1;if(q.issues.length){let A=new(H?.Err??v)(q.issues.map((X)=>k0(X,O,X1())));throw u4(A,H?.callee),A}return q.value};var P4=(v)=>async(h,e,u,H)=>{let O=u?{...u,async:!0}:{async:!0},q=h._zod.run({value:e,issues:[]},O);if(q instanceof Promise)q=await q;if(q.issues.length){let A=new(H?.Err??v)(q.issues.map((X)=>k0(X,O,X1())));throw u4(A,H?.callee),A}return q.value};var X2=(v)=>(h,e,u)=>{let H=u?{...u,async:!1}:{async:!1},O=h._zod.run({value:e,issues:[]},H);if(O instanceof Promise)throw new G1;return O.issues.length?{success:!1,error:new(v??i4)(O.issues.map((q)=>k0(q,H,X1())))}:{success:!0,data:O.value}},H3=X2(TH),Y2=(v)=>async(h,e,u)=>{let H=u?{...u,async:!0}:{async:!0},O=h._zod.run({value:e,issues:[]},H);if(O instanceof Promise)O=await O;return O.issues.length?{success:!1,error:new v(O.issues.map((q)=>k0(q,H,X1())))}:{success:!0,data:O.value}},P3=Y2(TH),O3=(v)=>(h,e,u)=>{let H=u?{...u,direction:"backward"}:{direction:"backward"};return H4(v)(h,e,H)};var q3=(v)=>(h,e,u)=>{return H4(v)(h,e,u)};var A3=(v)=>async(h,e,u)=>{let H=u?{...u,direction:"backward"}:{direction:"backward"};return P4(v)(h,e,H)};var M3=(v)=>async(h,e,u)=>{return P4(v)(h,e,u)};var W3=(v)=>(h,e,u)=>{let H=u?{...u,direction:"backward"}:{direction:"backward"};return X2(v)(h,e,H)};var R3=(v)=>(h,e,u)=>{return X2(v)(h,e,u)};var G3=(v)=>async(h,e,u)=>{let H=u?{...u,direction:"backward"}:{direction:"backward"};return Y2(v)(h,e,H)};var X3=(v)=>async(h,e,u)=>{return Y2(v)(h,e,u)};var Y3=/^[cC][0-9a-z]{6,}$/,J3=/^[0-9a-z]+$/,Q3=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,z3=/^[0-9a-vA-V]{20}$/,K3=/^[A-Za-z0-9]{27}$/,$3=/^[a-zA-Z0-9_-]{21}$/,U3=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var L3=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,SH=(v)=>{if(!v)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${v}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var n3=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var kU="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function F3(){return new RegExp(kU,"u")}var I3=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,N3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var B3=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,m3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Z3=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,kH=/^[A-Za-z0-9_-]*$/;var x3=/^https?$/,C3=/^\+[1-9]\d{6,14}$/,t3="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",T3=new RegExp(`^${t3}$`);function S3(v){return typeof v.precision==="number"?v.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":v.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${v.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function k3(v){return new RegExp(`^${S3(v)}$`)}function D3(v){let h=S3({precision:v.precision}),e=["Z"];if(v.local)e.push("");if(v.offset)e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let u=`${h}(?:${e.join("|")})`;return new RegExp(`^${t3}T(?:${u})$`)}var V3=(v)=>{let h=v?`[\\s\\S]{${v?.minimum??0},${v?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${h}$`)};var _3=/^[^A-Z]*$/,E3=/^[^a-z]*$/;var Xv=y("$ZodCheck",(v,h)=>{var e;v._zod??(v._zod={}),v._zod.def=h,(e=v._zod).onattach??(e.onattach=[])});var y3=y("$ZodCheckMaxLength",(v,h)=>{var e;Xv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!M2(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag.maximum??Number.POSITIVE_INFINITY;if(h.maximum<H)u._zod.bag.maximum=h.maximum}),v._zod.check=(u)=>{let H=u.value;if(H.length<=h.maximum)return;let q=G2(H);u.issues.push({origin:q,code:"too_big",maximum:h.maximum,inclusive:!0,input:H,inst:v,continue:!h.abort})}}),c3=y("$ZodCheckMinLength",(v,h)=>{var e;Xv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!M2(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(h.minimum>H)u._zod.bag.minimum=h.minimum}),v._zod.check=(u)=>{let H=u.value;if(H.length>=h.minimum)return;let q=G2(H);u.issues.push({origin:q,code:"too_small",minimum:h.minimum,inclusive:!0,input:H,inst:v,continue:!h.abort})}}),j3=y("$ZodCheckLengthEquals",(v,h)=>{var e;Xv.init(v,h),(e=v._zod.def).when??(e.when=(u)=>{let H=u.value;return!M2(H)&&H.length!==void 0}),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.minimum=h.length,H.maximum=h.length,H.length=h.length}),v._zod.check=(u)=>{let H=u.value,O=H.length;if(O===h.length)return;let q=G2(H),A=O>h.length;u.issues.push({origin:q,...A?{code:"too_big",maximum:h.length}:{code:"too_small",minimum:h.length},inclusive:!0,exact:!0,input:u.value,inst:v,continue:!h.abort})}}),J2=y("$ZodCheckStringFormat",(v,h)=>{var e,u;if(Xv.init(v,h),v._zod.onattach.push((H)=>{let O=H._zod.bag;if(O.format=h.format,h.pattern)O.patterns??(O.patterns=new Set),O.patterns.add(h.pattern)}),h.pattern)(e=v._zod).check??(e.check=(H)=>{if(h.pattern.lastIndex=0,h.pattern.test(H.value))return;H.issues.push({origin:"string",code:"invalid_format",format:h.format,input:H.value,...h.pattern?{pattern:h.pattern.toString()}:{},inst:v,continue:!h.abort})});else(u=v._zod).check??(u.check=()=>{})}),f3=y("$ZodCheckRegex",(v,h)=>{J2.init(v,h),v._zod.check=(e)=>{if(h.pattern.lastIndex=0,h.pattern.test(e.value))return;e.issues.push({origin:"string",code:"invalid_format",format:"regex",input:e.value,pattern:h.pattern.toString(),inst:v,continue:!h.abort})}}),a3=y("$ZodCheckLowerCase",(v,h)=>{h.pattern??(h.pattern=_3),J2.init(v,h)}),p3=y("$ZodCheckUpperCase",(v,h)=>{h.pattern??(h.pattern=E3),J2.init(v,h)}),d3=y("$ZodCheckIncludes",(v,h)=>{Xv.init(v,h);let e=J1(h.includes),u=new RegExp(typeof h.position==="number"?`^.{${h.position}}${e}`:e);h.pattern=u,v._zod.onattach.push((H)=>{let O=H._zod.bag;O.patterns??(O.patterns=new Set),O.patterns.add(u)}),v._zod.check=(H)=>{if(H.value.includes(h.includes,h.position))return;H.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:h.includes,input:H.value,inst:v,continue:!h.abort})}}),s3=y("$ZodCheckStartsWith",(v,h)=>{Xv.init(v,h);let e=new RegExp(`^${J1(h.prefix)}.*`);h.pattern??(h.pattern=e),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(e)}),v._zod.check=(u)=>{if(u.value.startsWith(h.prefix))return;u.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:h.prefix,input:u.value,inst:v,continue:!h.abort})}}),rR=y("$ZodCheckEndsWith",(v,h)=>{Xv.init(v,h);let e=new RegExp(`.*${J1(h.suffix)}$`);h.pattern??(h.pattern=e),v._zod.onattach.push((u)=>{let H=u._zod.bag;H.patterns??(H.patterns=new Set),H.patterns.add(e)}),v._zod.check=(u)=>{if(u.value.endsWith(h.suffix))return;u.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:h.suffix,input:u.value,inst:v,continue:!h.abort})}});var gR=y("$ZodCheckOverwrite",(v,h)=>{Xv.init(v,h),v._zod.check=(e)=>{e.value=h.tx(e.value)}});class DH{constructor(v=[]){if(this.content=[],this.indent=0,this)this.args=v}indented(v){this.indent+=1,v(this),this.indent-=1}write(v){if(typeof v==="function"){v(this,{execution:"sync"}),v(this,{execution:"async"});return}let e=v.split(`
`).filter((O)=>O),u=Math.min(...e.map((O)=>O.length-O.trimStart().length)),H=e.map((O)=>O.slice(u)).map((O)=>" ".repeat(this.indent*2)+O);for(let O of H)this.content.push(O)}compile(){let v=Function,h=this?.args,u=[...(this?.content??[""]).map((H)=>`  ${H}`)];return new v(...h,u.join(`
`))}}var vR={major:4,minor:4,patch:1};var _g=y("$ZodType",(v,h)=>{var e;v??(v={}),v._zod.def=h,v._zod.bag=v._zod.bag||{},v._zod.version=vR;let u=[...v._zod.def.checks??[]];if(v._zod.traits.has("$ZodCheck"))u.unshift(v);for(let H of u)for(let O of H._zod.onattach)O(v);if(u.length===0)(e=v._zod).deferred??(e.deferred=[]),v._zod.deferred?.push(()=>{v._zod.run=v._zod.parse});else{let H=(q,A,X)=>{let J=Ql(q),Y;for(let W of A){if(W._zod.def.when){if(tH(q))continue;if(!W._zod.def.when(q))continue}else if(J)continue;let Q=q.issues.length,I=W._zod.check(q);if(I instanceof Promise&&X?.async===!1)throw new G1;if(Y||I instanceof Promise)Y=(Y??Promise.resolve()).then(async()=>{if(await I,q.issues.length===Q)return;if(!J)J=Ql(q,Q)});else{if(q.issues.length===Q)continue;if(!J)J=Ql(q,Q)}}if(Y)return Y.then(()=>{return q});return q},O=(q,A,X)=>{if(Ql(q))return q.aborted=!0,q;let J=H(A,u,X);if(J instanceof Promise){if(X.async===!1)throw new G1;return J.then((Y)=>v._zod.parse(Y,X))}return v._zod.parse(J,X)};v._zod.run=(q,A)=>{if(A.skipChecks)return v._zod.parse(q,A);if(A.direction==="backward"){let J=v._zod.parse({value:q.value,issues:[]},{...A,skipChecks:!0});if(J instanceof Promise)return J.then((Y)=>{return O(Y,q,A)});return O(J,q,A)}let X=v._zod.parse(q,A);if(X instanceof Promise){if(A.async===!1)throw new G1;return X.then((J)=>H(J,u,A))}return H(X,u,A)}}Pg(v,"~standard",()=>({validate:(H)=>{try{let O=H3(v,H);return O.success?{value:O.data}:{issues:O.error?.issues}}catch(O){return P3(v,H).then((q)=>q.success?{value:q.data}:{issues:q.error?.issues})}},vendor:"zod",version:1}))}),M4=y("$ZodString",(v,h)=>{_g.init(v,h),v._zod.pattern=[...v?._zod.bag?.patterns??[]].pop()??V3(v._zod.bag),v._zod.parse=(e,u)=>{if(h.coerce)try{e.value=String(e.value)}catch(H){}if(typeof e.value==="string")return e;return e.issues.push({expected:"string",code:"invalid_type",input:e.value,inst:v}),e}}),Fg=y("$ZodStringFormat",(v,h)=>{J2.init(v,h),M4.init(v,h)}),PR=y("$ZodGUID",(v,h)=>{h.pattern??(h.pattern=L3),Fg.init(v,h)}),OR=y("$ZodUUID",(v,h)=>{if(h.version){let u={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[h.version];if(u===void 0)throw Error(`Invalid UUID version: "${h.version}"`);h.pattern??(h.pattern=SH(u))}else h.pattern??(h.pattern=SH());Fg.init(v,h)}),qR=y("$ZodEmail",(v,h)=>{h.pattern??(h.pattern=n3),Fg.init(v,h)}),AR=y("$ZodURL",(v,h)=>{Fg.init(v,h),v._zod.check=(e)=>{try{let u=e.value.trim();if(!h.normalize&&h.protocol?.source===x3.source){if(!/^https?:\/\//i.test(u)){e.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:e.value,inst:v,continue:!h.abort});return}}let H=new URL(u);if(h.hostname){if(h.hostname.lastIndex=0,!h.hostname.test(H.hostname))e.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:h.hostname.source,input:e.value,inst:v,continue:!h.abort})}if(h.protocol){if(h.protocol.lastIndex=0,!h.protocol.test(H.protocol.endsWith(":")?H.protocol.slice(0,-1):H.protocol))e.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:h.protocol.source,input:e.value,inst:v,continue:!h.abort})}if(h.normalize)e.value=H.href;else e.value=u;return}catch(u){e.issues.push({code:"invalid_format",format:"url",input:e.value,inst:v,continue:!h.abort})}}}),MR=y("$ZodEmoji",(v,h)=>{h.pattern??(h.pattern=F3()),Fg.init(v,h)}),WR=y("$ZodNanoID",(v,h)=>{h.pattern??(h.pattern=$3),Fg.init(v,h)}),RR=y("$ZodCUID",(v,h)=>{h.pattern??(h.pattern=Y3),Fg.init(v,h)}),GR=y("$ZodCUID2",(v,h)=>{h.pattern??(h.pattern=J3),Fg.init(v,h)}),XR=y("$ZodULID",(v,h)=>{h.pattern??(h.pattern=Q3),Fg.init(v,h)}),YR=y("$ZodXID",(v,h)=>{h.pattern??(h.pattern=z3),Fg.init(v,h)}),JR=y("$ZodKSUID",(v,h)=>{h.pattern??(h.pattern=K3),Fg.init(v,h)}),QR=y("$ZodISODateTime",(v,h)=>{h.pattern??(h.pattern=D3(h)),Fg.init(v,h)}),zR=y("$ZodISODate",(v,h)=>{h.pattern??(h.pattern=T3),Fg.init(v,h)}),KR=y("$ZodISOTime",(v,h)=>{h.pattern??(h.pattern=k3(h)),Fg.init(v,h)}),$R=y("$ZodISODuration",(v,h)=>{h.pattern??(h.pattern=U3),Fg.init(v,h)}),UR=y("$ZodIPv4",(v,h)=>{h.pattern??(h.pattern=I3),Fg.init(v,h),v._zod.bag.format="ipv4"}),LR=y("$ZodIPv6",(v,h)=>{h.pattern??(h.pattern=N3),Fg.init(v,h),v._zod.bag.format="ipv6",v._zod.check=(e)=>{try{new URL(`http://[${e.value}]`)}catch{e.issues.push({code:"invalid_format",format:"ipv6",input:e.value,inst:v,continue:!h.abort})}}});var nR=y("$ZodCIDRv4",(v,h)=>{h.pattern??(h.pattern=B3),Fg.init(v,h)}),FR=y("$ZodCIDRv6",(v,h)=>{h.pattern??(h.pattern=m3),Fg.init(v,h),v._zod.check=(e)=>{let u=e.value.split("/");try{if(u.length!==2)throw Error();let[H,O]=u;if(!O)throw Error();let q=Number(O);if(`${q}`!==O)throw Error();if(q<0||q>128)throw Error();new URL(`http://[${H}]`)}catch{e.issues.push({code:"invalid_format",format:"cidrv6",input:e.value,inst:v,continue:!h.abort})}}});function IR(v){if(v==="")return!0;if(/\s/.test(v))return!1;if(v.length%4!==0)return!1;try{return atob(v),!0}catch{return!1}}var NR=y("$ZodBase64",(v,h)=>{h.pattern??(h.pattern=Z3),Fg.init(v,h),v._zod.bag.contentEncoding="base64",v._zod.check=(e)=>{if(IR(e.value))return;e.issues.push({code:"invalid_format",format:"base64",input:e.value,inst:v,continue:!h.abort})}});function DU(v){if(!kH.test(v))return!1;let h=v.replace(/[-_]/g,(u)=>u==="-"?"+":"/"),e=h.padEnd(Math.ceil(h.length/4)*4,"=");return IR(e)}var BR=y("$ZodBase64URL",(v,h)=>{h.pattern??(h.pattern=kH),Fg.init(v,h),v._zod.bag.contentEncoding="base64url",v._zod.check=(e)=>{if(DU(e.value))return;e.issues.push({code:"invalid_format",format:"base64url",input:e.value,inst:v,continue:!h.abort})}}),mR=y("$ZodE164",(v,h)=>{h.pattern??(h.pattern=C3),Fg.init(v,h)});function VU(v,h=null){try{let e=v.split(".");if(e.length!==3)return!1;let[u]=e;if(!u)return!1;let H=JSON.parse(atob(u));if("typ"in H&&H?.typ!=="JWT")return!1;if(!H.alg)return!1;if(h&&(!("alg"in H)||H.alg!==h))return!1;return!0}catch{return!1}}var ZR=y("$ZodJWT",(v,h)=>{Fg.init(v,h),v._zod.check=(e)=>{if(VU(e.value,h.alg))return;e.issues.push({code:"invalid_format",format:"jwt",input:e.value,inst:v,continue:!h.abort})}});var xR=y("$ZodUnknown",(v,h)=>{_g.init(v,h),v._zod.parse=(e)=>e}),CR=y("$ZodNever",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{return e.issues.push({expected:"never",code:"invalid_type",input:e.value,inst:v}),e}});function lR(v,h,e){if(v.issues.length)h.issues.push(...R2(e,v.issues));h.value[e]=v.value}var tR=y("$ZodArray",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{let H=e.value;if(!Array.isArray(H))return e.issues.push({expected:"array",code:"invalid_type",input:H,inst:v}),e;e.value=Array(H.length);let O=[];for(let q=0;q<H.length;q++){let A=H[q],X=h.element._zod.run({value:A,issues:[]},u);if(X instanceof Promise)O.push(X.then((J)=>lR(J,e,q)));else lR(X,e,q)}if(O.length)return Promise.all(O).then(()=>e);return e}});function A4(v,h,e,u,H,O){let q=e in u;if(v.issues.length){if(H&&O&&!q)return;h.issues.push(...R2(e,v.issues))}if(!q&&!H){if(!v.issues.length)h.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[e]});return}if(v.value===void 0){if(q)h.value[e]=void 0}else h.value[e]=v.value}function TR(v){let h=Object.keys(v.shape);for(let u of h)if(!v.shape?.[u]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${u}": expected a Zod schema`);let e=CH(v.shape);return{...v,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(e)}}function SR(v,h,e,u,H,O){let q=[],A=H.keySet,X=H.catchall._zod,J=X.def.type,Y=X.optin==="optional",W=X.optout==="optional";for(let Q in h){if(Q==="__proto__")continue;if(A.has(Q))continue;if(J==="never"){q.push(Q);continue}let I=X.run({value:h[Q],issues:[]},u);if(I instanceof Promise)v.push(I.then((_)=>A4(_,e,Q,h,Y,W)));else A4(I,e,Q,h,Y,W)}if(q.length)e.issues.push({code:"unrecognized_keys",keys:q,input:h,inst:O});if(!v.length)return e;return Promise.all(v).then(()=>{return e})}var _U=y("$ZodObject",(v,h)=>{if(_g.init(v,h),!Object.getOwnPropertyDescriptor(h,"shape")?.get){let A=h.shape;Object.defineProperty(h,"shape",{get:()=>{let X={...A};return Object.defineProperty(h,"shape",{value:X}),X}})}let u=A2(()=>TR(h));Pg(v._zod,"propValues",()=>{let A=h.shape,X={};for(let J in A){let Y=A[J]._zod;if(Y.values){X[J]??(X[J]=new Set);for(let W of Y.values)X[J].add(W)}}return X});let H=_5,O=h.catchall,q;v._zod.parse=(A,X)=>{q??(q=u.value);let J=A.value;if(!H(J))return A.issues.push({expected:"object",code:"invalid_type",input:J,inst:v}),A;A.value={};let Y=[],W=q.shape;for(let Q of q.keys){let I=W[Q],_=I._zod.optin==="optional",t=I._zod.optout==="optional",V=I._zod.run({value:J[Q],issues:[]},X);if(V instanceof Promise)Y.push(V.then((rr)=>A4(rr,A,Q,J,_,t)));else A4(V,A,Q,J,_,t)}if(!O)return Y.length?Promise.all(Y).then(()=>A):A;return SR(Y,J,A,X,u.value,v)}}),kR=y("$ZodObjectJIT",(v,h)=>{_U.init(v,h);let e=v._zod.parse,u=A2(()=>TR(h)),H=(Q)=>{let I=new DH(["shape","payload","ctx"]),_=u.value,t=(lr)=>{let j=e4(lr);return`shape[${j}]._zod.run({ value: input[${j}], issues: [] }, ctx)`};I.write("const input = payload.value;");let V=Object.create(null),rr=0;for(let lr of _.keys)V[lr]=`key_${rr++}`;I.write("const newResult = {};");for(let lr of _.keys){let j=V[lr],p=e4(lr),vr=Q[lr],m=vr?._zod?.optin==="optional",E=vr?._zod?.optout==="optional";if(I.write(`const ${j} = ${t(lr)};`),m&&E)I.write(`
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
        
      `);else if(!m)I.write(`
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

      `);else I.write(`
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
        
      `)}I.write("payload.value = newResult;"),I.write("return payload;");let Pr=I.compile();return(lr,j)=>Pr(Q,lr,j)},O,q=_5,A=!V5.jitless,J=A&&ZH.value,Y=h.catchall,W;v._zod.parse=(Q,I)=>{W??(W=u.value);let _=Q.value;if(!q(_))return Q.issues.push({expected:"object",code:"invalid_type",input:_,inst:v}),Q;if(A&&J&&I?.async===!1&&I.jitless!==!0){if(!O)O=H(h.shape);if(Q=O(Q,I),!Y)return Q;return SR([],_,Q,I,W,v)}return e(Q,I)}});function hR(v,h,e,u){for(let O of v)if(O.issues.length===0)return h.value=O.value,h;let H=v.filter((O)=>!Ql(O));if(H.length===1)return h.value=H[0].value,H[0];return h.issues.push({code:"invalid_union",input:h.value,inst:e,errors:v.map((O)=>O.issues.map((q)=>k0(q,u,X1())))}),h}var DR=y("$ZodUnion",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.options.some((u)=>u._zod.optin==="optional")?"optional":void 0),Pg(v._zod,"optout",()=>h.options.some((u)=>u._zod.optout==="optional")?"optional":void 0),Pg(v._zod,"values",()=>{if(h.options.every((u)=>u._zod.values))return new Set(h.options.flatMap((u)=>Array.from(u._zod.values)));return}),Pg(v._zod,"pattern",()=>{if(h.options.every((u)=>u._zod.pattern)){let u=h.options.map((H)=>H._zod.pattern);return new RegExp(`^(${u.map((H)=>W2(H.source)).join("|")})$`)}return});let e=h.options.length===1?h.options[0]._zod.run:null;v._zod.parse=(u,H)=>{if(e)return e(u,H);let O=!1,q=[];for(let A of h.options){let X=A._zod.run({value:u.value,issues:[]},H);if(X instanceof Promise)q.push(X),O=!0;else{if(X.issues.length===0)return X;q.push(X)}}if(!O)return hR(q,u,v,H);return Promise.all(q).then((A)=>{return hR(A,u,v,H)})}});var VR=y("$ZodIntersection",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{let H=e.value,O=h.left._zod.run({value:H,issues:[]},u),q=h.right._zod.run({value:H,issues:[]},u);if(O instanceof Promise||q instanceof Promise)return Promise.all([O,q]).then(([X,J])=>{return bR(e,X,J)});return bR(e,O,q)}});function VH(v,h){if(v===h)return{valid:!0,data:v};if(v instanceof Date&&h instanceof Date&&+v===+h)return{valid:!0,data:v};if(Uh(v)&&Uh(h)){let e=Object.keys(h),u=Object.keys(v).filter((O)=>e.indexOf(O)!==-1),H={...v,...h};for(let O of u){let q=VH(v[O],h[O]);if(!q.valid)return{valid:!1,mergeErrorPath:[O,...q.mergeErrorPath]};H[O]=q.data}return{valid:!0,data:H}}if(Array.isArray(v)&&Array.isArray(h)){if(v.length!==h.length)return{valid:!1,mergeErrorPath:[]};let e=[];for(let u=0;u<v.length;u++){let H=v[u],O=h[u],q=VH(H,O);if(!q.valid)return{valid:!1,mergeErrorPath:[u,...q.mergeErrorPath]};e.push(q.data)}return{valid:!0,data:e}}return{valid:!1,mergeErrorPath:[]}}function bR(v,h,e){let u=new Map,H;for(let A of h.issues)if(A.code==="unrecognized_keys"){H??(H=A);for(let X of A.keys){if(!u.has(X))u.set(X,{});u.get(X).l=!0}}else v.issues.push(A);for(let A of e.issues)if(A.code==="unrecognized_keys")for(let X of A.keys){if(!u.has(X))u.set(X,{});u.get(X).r=!0}else v.issues.push(A);let O=[...u].filter(([,A])=>A.l&&A.r).map(([A])=>A);if(O.length&&H)v.issues.push({...H,keys:O});if(Ql(v))return v;let q=VH(h.value,e.value);if(!q.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(q.mergeErrorPath)}`);return v.value=q.data,v}var _R=y("$ZodEnum",(v,h)=>{_g.init(v,h);let e=q2(h.entries),u=new Set(e);v._zod.values=u,v._zod.pattern=new RegExp(`^(${e.filter((H)=>xH.has(typeof H)).map((H)=>typeof H==="string"?J1(H):H.toString()).join("|")})$`),v._zod.parse=(H,O)=>{let q=H.value;if(u.has(q))return H;return H.issues.push({code:"invalid_value",values:e,input:q,inst:v}),H}}),ER=y("$ZodLiteral",(v,h)=>{if(_g.init(v,h),h.values.length===0)throw Error("Cannot create literal schema with no valid values");let e=new Set(h.values);v._zod.values=e,v._zod.pattern=new RegExp(`^(${h.values.map((u)=>typeof u==="string"?J1(u):u?J1(u.toString()):String(u)).join("|")})$`),v._zod.parse=(u,H)=>{let O=u.value;if(e.has(O))return u;return u.issues.push({code:"invalid_value",values:h.values,input:O,inst:v}),u}});var yR=y("$ZodTransform",(v,h)=>{_g.init(v,h),v._zod.parse=(e,u)=>{if(u.direction==="backward")throw new P2(v.constructor.name);let H=h.transform(e.value,e);if(u.async)return(H instanceof Promise?H:Promise.resolve(H)).then((q)=>{return e.value=q,e});if(H instanceof Promise)throw new G1;return e.value=H,e}});function wR(v,h){if(v.issues.length&&h===void 0)return{issues:[],value:void 0};return v}var _H=y("$ZodOptional",(v,h)=>{_g.init(v,h),v._zod.optin="optional",v._zod.optout="optional",Pg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,void 0]):void 0}),Pg(v._zod,"pattern",()=>{let e=h.innerType._zod.pattern;return e?new RegExp(`^(${W2(e.source)})?$`):void 0}),v._zod.parse=(e,u)=>{if(h.innerType._zod.optin==="optional"){let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((O)=>wR(O,e.value));return wR(H,e.value)}if(e.value===void 0)return e;return h.innerType._zod.run(e,u)}}),cR=y("$ZodExactOptional",(v,h)=>{_H.init(v,h),Pg(v._zod,"values",()=>h.innerType._zod.values),Pg(v._zod,"pattern",()=>h.innerType._zod.pattern),v._zod.parse=(e,u)=>{return h.innerType._zod.run(e,u)}}),jR=y("$ZodNullable",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.innerType._zod.optin),Pg(v._zod,"optout",()=>h.innerType._zod.optout),Pg(v._zod,"pattern",()=>{let e=h.innerType._zod.pattern;return e?new RegExp(`^(${W2(e.source)}|null)$`):void 0}),Pg(v._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,null]):void 0}),v._zod.parse=(e,u)=>{if(e.value===null)return e;return h.innerType._zod.run(e,u)}}),fR=y("$ZodDefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);if(e.value===void 0)return e.value=h.defaultValue,e;let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((O)=>eR(O,h));return eR(H,h)}});function eR(v,h){if(v.value===void 0)v.value=h.defaultValue;return v}var aR=y("$ZodPrefault",(v,h)=>{_g.init(v,h),v._zod.optin="optional",Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);if(e.value===void 0)e.value=h.defaultValue;return h.innerType._zod.run(e,u)}}),pR=y("$ZodNonOptional",(v,h)=>{_g.init(v,h),Pg(v._zod,"values",()=>{let e=h.innerType._zod.values;return e?new Set([...e].filter((u)=>u!==void 0)):void 0}),v._zod.parse=(e,u)=>{let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((O)=>uR(O,v));return uR(H,v)}});function uR(v,h){if(!v.issues.length&&v.value===void 0)v.issues.push({code:"invalid_type",expected:"nonoptional",input:v.value,inst:h});return v}var dR=y("$ZodCatch",(v,h)=>{_g.init(v,h),Pg(v._zod,"optin",()=>h.innerType._zod.optin),Pg(v._zod,"optout",()=>h.innerType._zod.optout),Pg(v._zod,"values",()=>h.innerType._zod.values),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then((O)=>{if(e.value=O.value,O.issues.length)e.value=h.catchValue({...e,error:{issues:O.issues.map((q)=>k0(q,u,X1()))},input:e.value}),e.issues=[];return e});if(e.value=H.value,H.issues.length)e.value=h.catchValue({...e,error:{issues:H.issues.map((O)=>k0(O,u,X1()))},input:e.value}),e.issues=[];return e}});var sR=y("$ZodPipe",(v,h)=>{_g.init(v,h),Pg(v._zod,"values",()=>h.in._zod.values),Pg(v._zod,"optin",()=>h.in._zod.optin),Pg(v._zod,"optout",()=>h.out._zod.optout),Pg(v._zod,"propValues",()=>h.in._zod.propValues),v._zod.parse=(e,u)=>{if(u.direction==="backward"){let O=h.out._zod.run(e,u);if(O instanceof Promise)return O.then((q)=>q4(q,h.in,u));return q4(O,h.in,u)}let H=h.in._zod.run(e,u);if(H instanceof Promise)return H.then((O)=>q4(O,h.out,u));return q4(H,h.out,u)}});function q4(v,h,e){if(v.issues.length)return v.aborted=!0,v;return h._zod.run({value:v.value,issues:v.issues},e)}var rG=y("$ZodReadonly",(v,h)=>{_g.init(v,h),Pg(v._zod,"propValues",()=>h.innerType._zod.propValues),Pg(v._zod,"values",()=>h.innerType._zod.values),Pg(v._zod,"optin",()=>h.innerType?._zod?.optin),Pg(v._zod,"optout",()=>h.innerType?._zod?.optout),v._zod.parse=(e,u)=>{if(u.direction==="backward")return h.innerType._zod.run(e,u);let H=h.innerType._zod.run(e,u);if(H instanceof Promise)return H.then(iR);return iR(H)}});function iR(v){return v.value=Object.freeze(v.value),v}var gG=y("$ZodCustom",(v,h)=>{Xv.init(v,h),_g.init(v,h),v._zod.parse=(e,u)=>{return e},v._zod.check=(e)=>{let u=e.value,H=h.fn(u);if(H instanceof Promise)return H.then((O)=>HR(O,e,u,v));HR(H,e,u,v);return}});function HR(v,h,e,u){if(!v){let H={code:"custom",input:e,inst:u,path:[...u._zod.def.path??[]],continue:!u._zod.def.abort};if(u._zod.def.params)H.params=u._zod.def.params;h.issues.push(y5(H))}}var oG,D_g=Symbol("ZodOutput"),V_g=Symbol("ZodInput");class vG{constructor(){this._map=new WeakMap,this._idmap=new Map}add(v,...h){let e=h[0];if(this._map.set(v,e),e&&typeof e==="object"&&"id"in e)this._idmap.set(e.id,v);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(v){let h=this._map.get(v);if(h&&typeof h==="object"&&"id"in h)this._idmap.delete(h.id);return this._map.delete(v),this}get(v){let h=v._zod.parent;if(h){let e={...this.get(h)??{}};delete e.id;let u={...e,...this._map.get(v)};return Object.keys(u).length?u:void 0}return this._map.get(v)}has(v){return this._map.has(v)}}function EU(){return new vG}(oG=globalThis).__zod_globalRegistry??(oG.__zod_globalRegistry=EU());var Lh=globalThis.__zod_globalRegistry;function lG(v,h){return new v({type:"string",..._r(h)})}function hG(v,h){return new v({type:"string",format:"email",check:"string_format",abort:!1,..._r(h)})}function EH(v,h){return new v({type:"string",format:"guid",check:"string_format",abort:!1,..._r(h)})}function bG(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,..._r(h)})}function wG(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",..._r(h)})}function eG(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",..._r(h)})}function uG(v,h){return new v({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",..._r(h)})}function iG(v,h){return new v({type:"string",format:"url",check:"string_format",abort:!1,..._r(h)})}function HG(v,h){return new v({type:"string",format:"emoji",check:"string_format",abort:!1,..._r(h)})}function PG(v,h){return new v({type:"string",format:"nanoid",check:"string_format",abort:!1,..._r(h)})}function OG(v,h){return new v({type:"string",format:"cuid",check:"string_format",abort:!1,..._r(h)})}function qG(v,h){return new v({type:"string",format:"cuid2",check:"string_format",abort:!1,..._r(h)})}function AG(v,h){return new v({type:"string",format:"ulid",check:"string_format",abort:!1,..._r(h)})}function MG(v,h){return new v({type:"string",format:"xid",check:"string_format",abort:!1,..._r(h)})}function WG(v,h){return new v({type:"string",format:"ksuid",check:"string_format",abort:!1,..._r(h)})}function RG(v,h){return new v({type:"string",format:"ipv4",check:"string_format",abort:!1,..._r(h)})}function GG(v,h){return new v({type:"string",format:"ipv6",check:"string_format",abort:!1,..._r(h)})}function XG(v,h){return new v({type:"string",format:"cidrv4",check:"string_format",abort:!1,..._r(h)})}function YG(v,h){return new v({type:"string",format:"cidrv6",check:"string_format",abort:!1,..._r(h)})}function JG(v,h){return new v({type:"string",format:"base64",check:"string_format",abort:!1,..._r(h)})}function QG(v,h){return new v({type:"string",format:"base64url",check:"string_format",abort:!1,..._r(h)})}function zG(v,h){return new v({type:"string",format:"e164",check:"string_format",abort:!1,..._r(h)})}function KG(v,h){return new v({type:"string",format:"jwt",check:"string_format",abort:!1,..._r(h)})}function $G(v,h){return new v({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,..._r(h)})}function UG(v,h){return new v({type:"string",format:"date",check:"string_format",..._r(h)})}function LG(v,h){return new v({type:"string",format:"time",check:"string_format",precision:null,..._r(h)})}function nG(v,h){return new v({type:"string",format:"duration",check:"string_format",..._r(h)})}function FG(v){return new v({type:"unknown"})}function IG(v,h){return new v({type:"never",..._r(h)})}function W4(v,h){return new y3({check:"max_length",..._r(h),maximum:v})}function c5(v,h){return new c3({check:"min_length",..._r(h),minimum:v})}function R4(v,h){return new j3({check:"length_equals",..._r(h),length:v})}function yH(v,h){return new f3({check:"string_format",format:"regex",..._r(h),pattern:v})}function cH(v){return new a3({check:"string_format",format:"lowercase",..._r(v)})}function jH(v){return new p3({check:"string_format",format:"uppercase",..._r(v)})}function fH(v,h){return new d3({check:"string_format",format:"includes",..._r(h),includes:v})}function aH(v,h){return new s3({check:"string_format",format:"starts_with",..._r(h),prefix:v})}function pH(v,h){return new rR({check:"string_format",format:"ends_with",..._r(h),suffix:v})}function zl(v){return new gR({check:"overwrite",tx:v})}function dH(v){return zl((h)=>h.normalize(v))}function sH(){return zl((v)=>v.trim())}function rP(){return zl((v)=>v.toLowerCase())}function gP(){return zl((v)=>v.toUpperCase())}function oP(){return zl((v)=>mH(v))}function NG(v,h,e){return new v({type:"array",element:h,..._r(e)})}function BG(v,h,e){return new v({type:"custom",check:"custom",fn:h,..._r(e)})}function mG(v,h){let e=yU((u)=>{return u.addIssue=(H)=>{if(typeof H==="string")u.issues.push(y5(H,u.value,e._zod.def));else{let O=H;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=u.value),O.inst??(O.inst=e),O.continue??(O.continue=!e._zod.def.abort),u.issues.push(y5(O))}},v(u.value,u)},h);return e}function yU(v,h){let e=new Xv({check:"custom",..._r(h)});return e._zod.check=v,e}function vP(v){let h=v?.target??"draft-2020-12";if(h==="draft-4")h="draft-04";if(h==="draft-7")h="draft-07";return{processors:v.processors??{},metadataRegistry:v?.metadata??Lh,target:h,unrepresentable:v?.unrepresentable??"throw",override:v?.override??(()=>{}),io:v?.io??"output",counter:0,seen:new Map,cycles:v?.cycles??"ref",reused:v?.reused??"inline",external:v?.external??void 0}}function io(v,h,e={path:[],schemaPath:[]}){var u;let H=v._zod.def,O=h.seen.get(v);if(O){if(O.count++,e.schemaPath.includes(v))O.cycle=e.path;return O.schema}let q={schema:{},count:1,cycle:void 0,path:e.path};h.seen.set(v,q);let A=v._zod.toJSONSchema?.();if(A)q.schema=A;else{let Y={...e,schemaPath:[...e.schemaPath,v],path:e.path};if(v._zod.processJSONSchema)v._zod.processJSONSchema(h,q.schema,Y);else{let Q=q.schema,I=h.processors[H.type];if(!I)throw Error(`[toJSONSchema]: Non-representable type encountered: ${H.type}`);I(v,h,Q,Y)}let W=v._zod.parent;if(W){if(!q.ref)q.ref=W;io(W,h,Y),h.seen.get(W).isParent=!0}}let X=h.metadataRegistry.get(v);if(X)Object.assign(q.schema,X);if(h.io==="input"&&Do(v))delete q.schema.examples,delete q.schema.default;if(h.io==="input"&&"_prefault"in q.schema)(u=q.schema).default??(u.default=q.schema._prefault);return delete q.schema._prefault,h.seen.get(v).schema}function lP(v,h){let e=v.seen.get(h);if(!e)throw Error("Unprocessed schema. This is a bug in Zod.");let u=new Map;for(let q of v.seen.entries()){let A=v.metadataRegistry.get(q[0])?.id;if(A){let X=u.get(A);if(X&&X!==q[0])throw Error(`Duplicate schema id "${A}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);u.set(A,q[0])}}let H=(q)=>{let A=v.target==="draft-2020-12"?"$defs":"definitions";if(v.external){let W=v.external.registry.get(q[0])?.id,Q=v.external.uri??((_)=>_);if(W)return{ref:Q(W)};let I=q[1].defId??q[1].schema.id??`schema${v.counter++}`;return q[1].defId=I,{defId:I,ref:`${Q("__shared")}#/${A}/${I}`}}if(q[1]===e)return{ref:"#"};let J=`${"#"}/${A}/`,Y=q[1].schema.id??`__schema${v.counter++}`;return{defId:Y,ref:J+Y}},O=(q)=>{if(q[1].schema.$ref)return;let A=q[1],{ref:X,defId:J}=H(q);if(A.def={...A.schema},J)A.defId=J;let Y=A.schema;for(let W in Y)delete Y[W];Y.$ref=X};if(v.cycles==="throw")for(let q of v.seen.entries()){let A=q[1];if(A.cycle)throw Error(`Cycle detected: #/${A.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let q of v.seen.entries()){let A=q[1];if(h===q[0]){O(q);continue}if(v.external){let J=v.external.registry.get(q[0])?.id;if(h!==q[0]&&J){O(q);continue}}if(v.metadataRegistry.get(q[0])?.id){O(q);continue}if(A.cycle){O(q);continue}if(A.count>1){if(v.reused==="ref"){O(q);continue}}}}function hP(v,h){let e=v.seen.get(h);if(!e)throw Error("Unprocessed schema. This is a bug in Zod.");let u=(A)=>{let X=v.seen.get(A);if(X.ref===null)return;let J=X.def??X.schema,Y={...J},W=X.ref;if(X.ref=null,W){u(W);let I=v.seen.get(W),_=I.schema;if(_.$ref&&(v.target==="draft-07"||v.target==="draft-04"||v.target==="openapi-3.0"))J.allOf=J.allOf??[],J.allOf.push(_);else Object.assign(J,_);if(Object.assign(J,Y),A._zod.parent===W)for(let V in J){if(V==="$ref"||V==="allOf")continue;if(!(V in Y))delete J[V]}if(_.$ref&&I.def)for(let V in J){if(V==="$ref"||V==="allOf")continue;if(V in I.def&&JSON.stringify(J[V])===JSON.stringify(I.def[V]))delete J[V]}}let Q=A._zod.parent;if(Q&&Q!==W){u(Q);let I=v.seen.get(Q);if(I?.schema.$ref){if(J.$ref=I.schema.$ref,I.def)for(let _ in J){if(_==="$ref"||_==="allOf")continue;if(_ in I.def&&JSON.stringify(J[_])===JSON.stringify(I.def[_]))delete J[_]}}}v.override({zodSchema:A,jsonSchema:J,path:X.path??[]})};for(let A of[...v.seen.entries()].reverse())u(A[0]);let H={};if(v.target==="draft-2020-12")H.$schema="https://json-schema.org/draft/2020-12/schema";else if(v.target==="draft-07")H.$schema="http://json-schema.org/draft-07/schema#";else if(v.target==="draft-04")H.$schema="http://json-schema.org/draft-04/schema#";else if(v.target==="openapi-3.0");if(v.external?.uri){let A=v.external.registry.get(h)?.id;if(!A)throw Error("Schema is missing an `id` property");H.$id=v.external.uri(A)}Object.assign(H,e.def??e.schema);let O=v.metadataRegistry.get(h)?.id;if(O!==void 0&&H.id===O)delete H.id;let q=v.external?.defs??{};for(let A of v.seen.entries()){let X=A[1];if(X.def&&X.defId){if(X.def.id===X.defId)delete X.def.id;q[X.defId]=X.def}}if(v.external);else if(Object.keys(q).length>0)if(v.target==="draft-2020-12")H.$defs=q;else H.definitions=q;try{let A=JSON.parse(JSON.stringify(H));return Object.defineProperty(A,"~standard",{value:{...h["~standard"],jsonSchema:{input:Q2(h,"input",v.processors),output:Q2(h,"output",v.processors)}},enumerable:!1,writable:!1}),A}catch(A){throw Error("Error converting schema to JSON.")}}function Do(v,h){let e=h??{seen:new Set};if(e.seen.has(v))return!1;e.seen.add(v);let u=v._zod.def;if(u.type==="transform")return!0;if(u.type==="array")return Do(u.element,e);if(u.type==="set")return Do(u.valueType,e);if(u.type==="lazy")return Do(u.getter(),e);if(u.type==="promise"||u.type==="optional"||u.type==="nonoptional"||u.type==="nullable"||u.type==="readonly"||u.type==="default"||u.type==="prefault")return Do(u.innerType,e);if(u.type==="intersection")return Do(u.left,e)||Do(u.right,e);if(u.type==="record"||u.type==="map")return Do(u.keyType,e)||Do(u.valueType,e);if(u.type==="pipe")return Do(u.in,e)||Do(u.out,e);if(u.type==="object"){for(let H in u.shape)if(Do(u.shape[H],e))return!0;return!1}if(u.type==="union"){for(let H of u.options)if(Do(H,e))return!0;return!1}if(u.type==="tuple"){for(let H of u.items)if(Do(H,e))return!0;if(u.rest&&Do(u.rest,e))return!0;return!1}return!1}var ZG=(v,h={})=>(e)=>{let u=vP({...e,processors:h});return io(v,u),lP(u,v),hP(u,v)},Q2=(v,h,e={})=>(u)=>{let{libraryOptions:H,target:O}=u??{},q=vP({...H??{},target:O,io:h,processors:e});return io(v,q),lP(q,v),hP(q,v)};var cU={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},xG=(v,h,e,u)=>{let H=e;H.type="string";let{minimum:O,maximum:q,format:A,patterns:X,contentEncoding:J}=v._zod.bag;if(typeof O==="number")H.minLength=O;if(typeof q==="number")H.maxLength=q;if(A){if(H.format=cU[A]??A,H.format==="")delete H.format;if(A==="time")delete H.format}if(J)H.contentEncoding=J;if(X&&X.size>0){let Y=[...X];if(Y.length===1)H.pattern=Y[0].source;else if(Y.length>1)H.allOf=[...Y.map((W)=>({...h.target==="draft-07"||h.target==="draft-04"||h.target==="openapi-3.0"?{type:"string"}:{},pattern:W.source}))]}};var CG=(v,h,e,u)=>{e.not={}};var tG=(v,h,e,u)=>{};var TG=(v,h,e,u)=>{let H=v._zod.def,O=q2(H.entries);if(O.every((q)=>typeof q==="number"))e.type="number";if(O.every((q)=>typeof q==="string"))e.type="string";e.enum=O},SG=(v,h,e,u)=>{let H=v._zod.def,O=[];for(let q of H.values)if(q===void 0){if(h.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof q==="bigint")if(h.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else O.push(Number(q));else O.push(q);if(O.length===0);else if(O.length===1){let q=O[0];if(e.type=q===null?"null":typeof q,h.target==="draft-04"||h.target==="openapi-3.0")e.enum=[q];else e.const=q}else{if(O.every((q)=>typeof q==="number"))e.type="number";if(O.every((q)=>typeof q==="string"))e.type="string";if(O.every((q)=>typeof q==="boolean"))e.type="boolean";if(O.every((q)=>q===null))e.type="null";e.enum=O}};var kG=(v,h,e,u)=>{if(h.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var DG=(v,h,e,u)=>{if(h.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var VG=(v,h,e,u)=>{let H=e,O=v._zod.def,{minimum:q,maximum:A}=v._zod.bag;if(typeof q==="number")H.minItems=q;if(typeof A==="number")H.maxItems=A;H.type="array",H.items=io(O.element,h,{...u,path:[...u.path,"items"]})},_G=(v,h,e,u)=>{let H=e,O=v._zod.def;H.type="object",H.properties={};let q=O.shape;for(let J in q)H.properties[J]=io(q[J],h,{...u,path:[...u.path,"properties",J]});let A=new Set(Object.keys(q)),X=new Set([...A].filter((J)=>{let Y=O.shape[J]._zod;if(h.io==="input")return Y.optin===void 0;else return Y.optout===void 0}));if(X.size>0)H.required=Array.from(X);if(O.catchall?._zod.def.type==="never")H.additionalProperties=!1;else if(!O.catchall){if(h.io==="output")H.additionalProperties=!1}else if(O.catchall)H.additionalProperties=io(O.catchall,h,{...u,path:[...u.path,"additionalProperties"]})},EG=(v,h,e,u)=>{let H=v._zod.def,O=H.inclusive===!1,q=H.options.map((A,X)=>io(A,h,{...u,path:[...u.path,O?"oneOf":"anyOf",X]}));if(O)e.oneOf=q;else e.anyOf=q},yG=(v,h,e,u)=>{let H=v._zod.def,O=io(H.left,h,{...u,path:[...u.path,"allOf",0]}),q=io(H.right,h,{...u,path:[...u.path,"allOf",1]}),A=(J)=>("allOf"in J)&&Object.keys(J).length===1,X=[...A(O)?O.allOf:[O],...A(q)?q.allOf:[q]];e.allOf=X};var cG=(v,h,e,u)=>{let H=v._zod.def,O=io(H.innerType,h,u),q=h.seen.get(v);if(h.target==="openapi-3.0")q.ref=H.innerType,e.nullable=!0;else e.anyOf=[O,{type:"null"}]},jG=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);O.ref=H.innerType},fG=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);O.ref=H.innerType,e.default=JSON.parse(JSON.stringify(H.defaultValue))},aG=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);if(O.ref=H.innerType,h.io==="input")e._prefault=JSON.parse(JSON.stringify(H.defaultValue))},pG=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);O.ref=H.innerType;let q;try{q=H.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}e.default=q},dG=(v,h,e,u)=>{let H=v._zod.def,O=h.io==="input"?H.in._zod.def.type==="transform"?H.out:H.in:H.out;io(O,h,u);let q=h.seen.get(v);q.ref=O},sG=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);O.ref=H.innerType,e.readOnly=!0};var bP=(v,h,e,u)=>{let H=v._zod.def;io(H.innerType,h,u);let O=h.seen.get(v);O.ref=H.innerType};var hL=y("ZodISODateTime",(v,h)=>{QR.init(v,h),Bg.init(v,h)});function rX(v){return $G(hL,v)}var bL=y("ZodISODate",(v,h)=>{zR.init(v,h),Bg.init(v,h)});function gX(v){return UG(bL,v)}var wL=y("ZodISOTime",(v,h)=>{KR.init(v,h),Bg.init(v,h)});function oX(v){return LG(wL,v)}var eL=y("ZodISODuration",(v,h)=>{$R.init(v,h),Bg.init(v,h)});function vX(v){return nG(eL,v)}var HL=(v,h)=>{i4.init(v,h),v.name="ZodError",Object.defineProperties(v,{format:{value:(e)=>i3(v,e)},flatten:{value:(e)=>u3(v,e)},addIssue:{value:(e)=>{v.issues.push(e),v.message=JSON.stringify(v.issues,E5,2)}},addIssues:{value:(e)=>{v.issues.push(...e),v.message=JSON.stringify(v.issues,E5,2)}},isEmpty:{get(){return v.issues.length===0}}})};var Yv=y("ZodError",HL,{Parent:Error});var lX=H4(Yv),hX=P4(Yv),bX=X2(Yv),wX=Y2(Yv),eX=O3(Yv),uX=q3(Yv),iX=A3(Yv),HX=M3(Yv),PX=W3(Yv),OX=R3(Yv),qX=G3(Yv),AX=X3(Yv);var MX=new WeakMap;function Y4(v,h,e){let u=Object.getPrototypeOf(v),H=MX.get(u);if(!H)H=new Set,MX.set(u,H);if(H.has(h))return;H.add(h);for(let O in e){let q=e[O];Object.defineProperty(u,O,{configurable:!0,enumerable:!1,get(){let A=q.bind(this);return Object.defineProperty(this,O,{configurable:!0,writable:!0,enumerable:!0,value:A}),A},set(A){Object.defineProperty(this,O,{configurable:!0,writable:!0,enumerable:!0,value:A})}})}}var go=y("ZodType",(v,h)=>{return _g.init(v,h),Object.assign(v["~standard"],{jsonSchema:{input:Q2(v,"input"),output:Q2(v,"output")}}),v.toJSONSchema=ZG(v,{}),v.def=h,v.type=h.type,Object.defineProperty(v,"_def",{value:h}),v.parse=(e,u)=>lX(v,e,u,{callee:v.parse}),v.safeParse=(e,u)=>bX(v,e,u),v.parseAsync=async(e,u)=>hX(v,e,u,{callee:v.parseAsync}),v.safeParseAsync=async(e,u)=>wX(v,e,u),v.spa=v.safeParseAsync,v.encode=(e,u)=>eX(v,e,u),v.decode=(e,u)=>uX(v,e,u),v.encodeAsync=async(e,u)=>iX(v,e,u),v.decodeAsync=async(e,u)=>HX(v,e,u),v.safeEncode=(e,u)=>PX(v,e,u),v.safeDecode=(e,u)=>OX(v,e,u),v.safeEncodeAsync=async(e,u)=>qX(v,e,u),v.safeDecodeAsync=async(e,u)=>AX(v,e,u),Y4(v,"ZodType",{check(...e){let u=this.def;return this.clone(qg.mergeDefs(u,{checks:[...u.checks??[],...e.map((H)=>typeof H==="function"?{_zod:{check:H,def:{check:"custom"},onattach:[]}}:H)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,u){return o0(this,e,u)},brand(){return this},register(e,u){return e.add(this,u),this},refine(e,u){return this.check(vn(e,u))},superRefine(e,u){return this.check(ln(e,u))},overwrite(e){return this.check(zl(e))},optional(){return GX(this)},exactOptional(){return _L(this)},nullable(){return XX(this)},nullish(){return GX(XX(this))},nonoptional(e){return aL(this,e)},array(){return Q1(this)},or(e){return CL([this,e])},and(e){return TL(this,e)},transform(e){return YX(this,DL(e))},default(e){return cL(this,e)},prefault(e){return fL(this,e)},catch(e){return dL(this,e)},pipe(e){return YX(this,e)},readonly(){return gn(this)},describe(e){let u=this.clone();return Lh.add(u,{description:e}),u},meta(...e){if(e.length===0)return Lh.get(this);let u=this.clone();return Lh.add(u,e[0]),u},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(v,"description",{get(){return Lh.get(v)?.description},configurable:!0}),v}),JX=y("_ZodString",(v,h)=>{M4.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,H,O)=>xG(v,u,H,O);let e=v._zod.bag;v.format=e.format??null,v.minLength=e.minimum??null,v.maxLength=e.maximum??null,Y4(v,"_ZodString",{regex(...u){return this.check(yH(...u))},includes(...u){return this.check(fH(...u))},startsWith(...u){return this.check(aH(...u))},endsWith(...u){return this.check(pH(...u))},min(...u){return this.check(c5(...u))},max(...u){return this.check(W4(...u))},length(...u){return this.check(R4(...u))},nonempty(...u){return this.check(c5(1,...u))},lowercase(u){return this.check(cH(u))},uppercase(u){return this.check(jH(u))},trim(){return this.check(sH())},normalize(...u){return this.check(dH(...u))},toLowerCase(){return this.check(rP())},toUpperCase(){return this.check(gP())},slugify(){return this.check(oP())}})}),OL=y("ZodString",(v,h)=>{M4.init(v,h),JX.init(v,h),v.email=(e)=>v.check(hG(qL,e)),v.url=(e)=>v.check(iG(AL,e)),v.jwt=(e)=>v.check(KG(FL,e)),v.emoji=(e)=>v.check(HG(ML,e)),v.guid=(e)=>v.check(EH(WX,e)),v.uuid=(e)=>v.check(bG(X4,e)),v.uuidv4=(e)=>v.check(wG(X4,e)),v.uuidv6=(e)=>v.check(eG(X4,e)),v.uuidv7=(e)=>v.check(uG(X4,e)),v.nanoid=(e)=>v.check(PG(WL,e)),v.guid=(e)=>v.check(EH(WX,e)),v.cuid=(e)=>v.check(OG(RL,e)),v.cuid2=(e)=>v.check(qG(GL,e)),v.ulid=(e)=>v.check(AG(XL,e)),v.base64=(e)=>v.check(JG(UL,e)),v.base64url=(e)=>v.check(QG(LL,e)),v.xid=(e)=>v.check(MG(YL,e)),v.ksuid=(e)=>v.check(WG(JL,e)),v.ipv4=(e)=>v.check(RG(QL,e)),v.ipv6=(e)=>v.check(GG(zL,e)),v.cidrv4=(e)=>v.check(XG(KL,e)),v.cidrv6=(e)=>v.check(YG($L,e)),v.e164=(e)=>v.check(zG(nL,e)),v.datetime=(e)=>v.check(rX(e)),v.date=(e)=>v.check(gX(e)),v.time=(e)=>v.check(oX(e)),v.duration=(e)=>v.check(vX(e))});function Eg(v){return lG(OL,v)}var Bg=y("ZodStringFormat",(v,h)=>{Fg.init(v,h),JX.init(v,h)}),qL=y("ZodEmail",(v,h)=>{qR.init(v,h),Bg.init(v,h)});var WX=y("ZodGUID",(v,h)=>{PR.init(v,h),Bg.init(v,h)});var X4=y("ZodUUID",(v,h)=>{OR.init(v,h),Bg.init(v,h)});var AL=y("ZodURL",(v,h)=>{AR.init(v,h),Bg.init(v,h)});var ML=y("ZodEmoji",(v,h)=>{MR.init(v,h),Bg.init(v,h)});var WL=y("ZodNanoID",(v,h)=>{WR.init(v,h),Bg.init(v,h)});var RL=y("ZodCUID",(v,h)=>{RR.init(v,h),Bg.init(v,h)});var GL=y("ZodCUID2",(v,h)=>{GR.init(v,h),Bg.init(v,h)});var XL=y("ZodULID",(v,h)=>{XR.init(v,h),Bg.init(v,h)});var YL=y("ZodXID",(v,h)=>{YR.init(v,h),Bg.init(v,h)});var JL=y("ZodKSUID",(v,h)=>{JR.init(v,h),Bg.init(v,h)});var QL=y("ZodIPv4",(v,h)=>{UR.init(v,h),Bg.init(v,h)});var zL=y("ZodIPv6",(v,h)=>{LR.init(v,h),Bg.init(v,h)});var KL=y("ZodCIDRv4",(v,h)=>{nR.init(v,h),Bg.init(v,h)});var $L=y("ZodCIDRv6",(v,h)=>{FR.init(v,h),Bg.init(v,h)});var UL=y("ZodBase64",(v,h)=>{NR.init(v,h),Bg.init(v,h)});var LL=y("ZodBase64URL",(v,h)=>{BR.init(v,h),Bg.init(v,h)});var nL=y("ZodE164",(v,h)=>{mR.init(v,h),Bg.init(v,h)});var FL=y("ZodJWT",(v,h)=>{ZR.init(v,h),Bg.init(v,h)});var IL=y("ZodUnknown",(v,h)=>{xR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>tG(v,e,u,H)});function RX(){return FG(IL)}var NL=y("ZodNever",(v,h)=>{CR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>CG(v,e,u,H)});function BL(v){return IG(NL,v)}var mL=y("ZodArray",(v,h)=>{tR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>VG(v,e,u,H),v.element=h.element,Y4(v,"ZodArray",{min(e,u){return this.check(c5(e,u))},nonempty(e){return this.check(c5(1,e))},max(e,u){return this.check(W4(e,u))},length(e,u){return this.check(R4(e,u))},unwrap(){return this.element}})});function Q1(v,h){return NG(mL,v,h)}var ZL=y("ZodObject",(v,h)=>{kR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>_G(v,e,u,H),qg.defineLazy(v,"shape",()=>{return h.shape}),Y4(v,"ZodObject",{keyof(){return z2(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:RX()})},loose(){return this.clone({...this._zod.def,catchall:RX()})},strict(){return this.clone({...this._zod.def,catchall:BL()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return qg.extend(this,e)},safeExtend(e){return qg.safeExtend(this,e)},merge(e){return qg.merge(this,e)},pick(e){return qg.pick(this,e)},omit(e){return qg.omit(this,e)},partial(...e){return qg.partial(QX,this,e[0])},required(...e){return qg.required(zX,this,e[0])}})});function nh(v,h){let e={type:"object",shape:v??{},...qg.normalizeParams(h)};return new ZL(e)}var xL=y("ZodUnion",(v,h)=>{DR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>EG(v,e,u,H),v.options=h.options});function CL(v,h){return new xL({type:"union",options:v,...qg.normalizeParams(h)})}var tL=y("ZodIntersection",(v,h)=>{VR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>yG(v,e,u,H)});function TL(v,h){return new tL({type:"intersection",left:v,right:h})}var wP=y("ZodEnum",(v,h)=>{_R.init(v,h),go.init(v,h),v._zod.processJSONSchema=(u,H,O)=>TG(v,u,H,O),v.enum=h.entries,v.options=Object.values(h.entries);let e=new Set(Object.keys(h.entries));v.extract=(u,H)=>{let O={};for(let q of u)if(e.has(q))O[q]=h.entries[q];else throw Error(`Key ${q} not found in enum`);return new wP({...h,checks:[],...qg.normalizeParams(H),entries:O})},v.exclude=(u,H)=>{let O={...h.entries};for(let q of u)if(e.has(q))delete O[q];else throw Error(`Key ${q} not found in enum`);return new wP({...h,checks:[],...qg.normalizeParams(H),entries:O})}});function z2(v,h){let e=Array.isArray(v)?Object.fromEntries(v.map((u)=>[u,u])):v;return new wP({type:"enum",entries:e,...qg.normalizeParams(h)})}var SL=y("ZodLiteral",(v,h)=>{ER.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>SG(v,e,u,H),v.values=new Set(h.values),Object.defineProperty(v,"value",{get(){if(h.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return h.values[0]}})});function eP(v,h){return new SL({type:"literal",values:Array.isArray(v)?v:[v],...qg.normalizeParams(h)})}var kL=y("ZodTransform",(v,h)=>{yR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>DG(v,e,u,H),v._zod.parse=(e,u)=>{if(u.direction==="backward")throw new P2(v.constructor.name);e.addIssue=(O)=>{if(typeof O==="string")e.issues.push(qg.issue(O,e.value,h));else{let q=O;if(q.fatal)q.continue=!1;q.code??(q.code="custom"),q.input??(q.input=e.value),q.inst??(q.inst=v),e.issues.push(qg.issue(q))}};let H=h.transform(e.value,e);if(H instanceof Promise)return H.then((O)=>{return e.value=O,e});return e.value=H,e}});function DL(v){return new kL({type:"transform",transform:v})}var QX=y("ZodOptional",(v,h)=>{_H.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>bP(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function GX(v){return new QX({type:"optional",innerType:v})}var VL=y("ZodExactOptional",(v,h)=>{cR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>bP(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function _L(v){return new VL({type:"optional",innerType:v})}var EL=y("ZodNullable",(v,h)=>{jR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>cG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function XX(v){return new EL({type:"nullable",innerType:v})}var yL=y("ZodDefault",(v,h)=>{fR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>fG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType,v.removeDefault=v.unwrap});function cL(v,h){return new yL({type:"default",innerType:v,get defaultValue(){return typeof h==="function"?h():qg.shallowClone(h)}})}var jL=y("ZodPrefault",(v,h)=>{aR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>aG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function fL(v,h){return new jL({type:"prefault",innerType:v,get defaultValue(){return typeof h==="function"?h():qg.shallowClone(h)}})}var zX=y("ZodNonOptional",(v,h)=>{pR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>jG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function aL(v,h){return new zX({type:"nonoptional",innerType:v,...qg.normalizeParams(h)})}var pL=y("ZodCatch",(v,h)=>{dR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>pG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType,v.removeCatch=v.unwrap});function dL(v,h){return new pL({type:"catch",innerType:v,catchValue:typeof h==="function"?h:()=>h})}var sL=y("ZodPipe",(v,h)=>{sR.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>dG(v,e,u,H),v.in=h.in,v.out=h.out});function YX(v,h){return new sL({type:"pipe",in:v,out:h})}var rn=y("ZodReadonly",(v,h)=>{rG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>sG(v,e,u,H),v.unwrap=()=>v._zod.def.innerType});function gn(v){return new rn({type:"readonly",innerType:v})}var on=y("ZodCustom",(v,h)=>{gG.init(v,h),go.init(v,h),v._zod.processJSONSchema=(e,u,H)=>kG(v,e,u,H)});function vn(v,h={}){return BG(on,v,h)}function ln(v,h){return mG(v,h)}var KX=nh({type:z2(["character","chat"]),characterId:Eg().optional(),chatId:Eg().optional(),displayName:Eg().default("")}),$X=nh({description:Eg().optional(),author:Eg().optional(),version:Eg().optional(),tags:Q1(Eg()).optional()}),hn=nh({name:Eg().min(1).max(200),code:Eg(),type:z2(["trigger","library"]),triggers:Q1(Eg()).optional(),bindings:Q1(KX).optional(),folder:Eg().optional(),metadata:$X.optional()}),UX=nh({format:eP("lumiscript-pack-v1"),exportedAt:Eg(),scripts:Q1(hn).min(1).max(100)}),bn=nh({name:Eg().min(1).max(200),file:Eg().min(1),type:z2(["trigger","library"]),triggers:Q1(Eg()).optional(),bindings:Q1(KX).optional(),folder:Eg().optional(),metadata:$X.optional()}),Eyg=nh({format:eP("lumiscript-manifest-v1"),sourcePack:Eg().optional(),sourceFormat:Eg().optional(),exportedAt:Eg().optional(),convertedAt:Eg().optional(),scripts:Q1(bn).min(1).max(100)});var LX=1048576;async function nX(v){let h=new Uint8Array(await v.arrayBuffer()),e;try{e=j7(h)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let u=e["pack.json"];if(!u)throw Error("Invalid script pack: missing pack.json");if(u.byteLength>LX)throw Error(`Pack exceeds the ${LX/1024/1024} MB decompressed size limit`);let H=IH(u),O;try{O=JSON.parse(H)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return UX.parse(O).scripts}var bg=Or(rg(),1);function wn(v){let e="";for(let u=0;u<v.length;u+=32768)e+=String.fromCharCode(...v.subarray(u,u+32768));return btoa(e)}function en(v){let h=new Map;for(let H of v){let O=H.folder??"";if(!h.has(O))h.set(O,[]);h.get(O).push(H)}let e=new Map;if(h.has(""))e.set("",h.get(""));let u=[...h.keys()].filter((H)=>H!=="").sort();for(let H of u)e.set(H,h.get(H));return e}var J4=({scripts:v,selectedId:h,execInfo:e,onSelect:u,onEdit:H,sendToBackend:O})=>{let[q,A]=K2.useState("trigger"),[X,J]=K2.useState(new Set),Y=K2.useRef(null),W=v.filter((j)=>j.type===q),Q=en(W),I=Q.size>1||Q.size===1&&!Q.has(""),_=(j)=>{J((p)=>{let vr=new Set(p);if(vr.has(j))vr.delete(j);else vr.add(j);return vr})},t=()=>{let j=q==="library"?"Library name:":"Script name:",p=window.prompt(j);if(!p?.trim())return;O({type:"create_script",name:p.trim(),scriptType:q})},V=(j)=>{if(W.length===0)return;if(j.shiftKey){let vr=NH(W);O({type:"save_pack_to_disk",bytesB64:wn(vr),scriptType:q});return}let p=window.prompt("Pack name:","my-scripts");if(!p?.trim())return;f7(W,p.trim())},rr=()=>{Y.current?.click()},Pr=async(j)=>{let p=j.target.files?.[0];if(!p)return;j.target.value="";try{let vr=await nX(p),m=(C)=>C==="library"?"[L]":"[T]",E=vr.map((C)=>`  ${m(C.type)} ${C.name}`).join(`
`);if(!window.confirm(`Import ${vr.length} script${vr.length>1?"s":""}?

${E}

Imported scripts will be disabled. Review and enable them manually.`))return;O({type:"import_scripts",entries:vr})}catch(vr){window.alert(`Import failed: ${vr instanceof Error?vr.message:String(vr)}`)}},lr=(j)=>{let p=e[j.id];return bg.jsxDEV(B7,{script:j,selected:j.id===h,dot:p?.dot??"idle",duration:p?.duration,onSelect:()=>u(j.id),onEdit:()=>H(j.id),sendToBackend:O},j.id,!1,void 0,this)};return bg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[bg.jsxDEV("div",{className:"ls-list-header",children:[bg.jsxDEV("div",{className:"ls-list-type-tabs",children:[bg.jsxDEV("button",{className:`ls-type-tab${q==="trigger"?" ls-active":""}`,onClick:()=>A("trigger"),title:"Scripts",children:bg.jsxDEV(Ro,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:`ls-type-tab${q==="library"?" ls-active":""}`,onClick:()=>A("library"),title:"Libraries",children:bg.jsxDEV(Jh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("div",{className:"ls-list-actions",children:[bg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:bg.jsxDEV(b2,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:"ls-icon-btn",onClick:V,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:W.length===0,children:bg.jsxDEV(Qh,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("button",{className:"ls-icon-btn",onClick:t,title:"New script",children:bg.jsxDEV(dw,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("input",{ref:Y,type:"file",accept:".zip",style:{display:"none"},onChange:Pr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bg.jsxDEV("div",{className:"ls-list-body",children:W.length===0?bg.jsxDEV("div",{className:"ls-list-empty",children:[bg.jsxDEV(x0,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),bg.jsxDEV("p",{children:["No ",q==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),bg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):I?[...Q.entries()].map(([j,p])=>{let vr=X.has(j);return j===""?bg.jsxDEV("div",{children:p.map(lr)},"__unfiled",!1,void 0,this):bg.jsxDEV("div",{className:"ls-folder-group",children:[bg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>_(j),children:[vr?bg.jsxDEV(A1,{size:11},void 0,!1,void 0,this):bg.jsxDEV(Go,{size:11},void 0,!1,void 0,this),bg.jsxDEV(zh,{size:11},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-name",children:j},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(m)=>{m.stopPropagation();let E=window.prompt("Rename folder:",j);if(E===null||E.trim()===""||E.trim()===j)return;for(let f of p)O({type:"update_script",id:f.id,patch:{folder:E.trim()}})},children:bg.jsxDEV(sv,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),bg.jsxDEV("span",{className:"ls-folder-count",children:p.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!vr&&p.map(lr)]},`folder-${j}`,!0,void 0,this)}):W.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var F2=Or(hg(),1),qY=Or(C5(),1);var Yo=Or(hg(),1);function FX(v,h){(h==null||h>v.length)&&(h=v.length);for(var e=0,u=Array(h);e<h;e++)u[e]=v[e];return u}function un(v){if(Array.isArray(v))return v}function Hn(v,h,e){return(h=Mn(h))in v?Object.defineProperty(v,h,{value:e,enumerable:!0,configurable:!0,writable:!0}):v[h]=e,v}function Pn(v,h){var e=v==null?null:typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"];if(e!=null){var u,H,O,q,A=[],X=!0,J=!1;try{if(O=(e=e.call(v)).next,h===0);else for(;!(X=(u=O.call(e)).done)&&(A.push(u.value),A.length!==h);X=!0);}catch(Y){J=!0,H=Y}finally{try{if(!X&&e.return!=null&&(q=e.return(),Object(q)!==q))return}finally{if(J)throw H}}return A}}function On(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IX(v,h){var e=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);h&&(u=u.filter(function(H){return Object.getOwnPropertyDescriptor(v,H).enumerable})),e.push.apply(e,u)}return e}function uP(v){for(var h=1;h<arguments.length;h++){var e=arguments[h]!=null?arguments[h]:{};h%2?IX(Object(e),!0).forEach(function(u){Hn(v,u,e[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(e)):IX(Object(e)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(e,u))})}return v}function NX(v,h){if(v==null)return{};var e,u,H=qn(v,h);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(v);for(u=0;u<O.length;u++)e=O[u],h.indexOf(e)===-1&&{}.propertyIsEnumerable.call(v,e)&&(H[e]=v[e])}return H}function qn(v,h){if(v==null)return{};var e={};for(var u in v)if({}.hasOwnProperty.call(v,u)){if(h.indexOf(u)!==-1)continue;e[u]=v[u]}return e}function BX(v,h){return un(v)||Pn(v,h)||Wn(v,h)||On()}function An(v,h){if(typeof v!="object"||!v)return v;var e=v[Symbol.toPrimitive];if(e!==void 0){var u=e.call(v,h);if(typeof u!="object")return u;throw TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(v)}function Mn(v){var h=An(v,"string");return typeof h=="symbol"?h:h+""}function Wn(v,h){if(v){if(typeof v=="string")return FX(v,h);var e={}.toString.call(v).slice(8,-1);return e==="Object"&&v.constructor&&(e=v.constructor.name),e==="Map"||e==="Set"?Array.from(v):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?FX(v,h):void 0}}function Rn(v,h,e){if(h in v)Object.defineProperty(v,h,{value:e,enumerable:!0,configurable:!0,writable:!0});else v[h]=e;return v}function mX(v,h){var e=Object.keys(v);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(v);if(h)u=u.filter(function(H){return Object.getOwnPropertyDescriptor(v,H).enumerable});e.push.apply(e,u)}return e}function ZX(v){for(var h=1;h<arguments.length;h++){var e=arguments[h]!=null?arguments[h]:{};if(h%2)mX(Object(e),!0).forEach(function(u){Rn(v,u,e[u])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(v,Object.getOwnPropertyDescriptors(e));else mX(Object(e)).forEach(function(u){Object.defineProperty(v,u,Object.getOwnPropertyDescriptor(e,u))})}return v}function Gn(){for(var v=arguments.length,h=Array(v),e=0;e<v;e++)h[e]=arguments[e];return function(u){return h.reduceRight(function(H,O){return O(H)},u)}}function $2(v){return function h(){var e=this;for(var u=arguments.length,H=Array(u),O=0;O<u;O++)H[O]=arguments[O];return H.length>=v.length?v.apply(this,H):function(){for(var q=arguments.length,A=Array(q),X=0;X<q;X++)A[X]=arguments[X];return h.apply(e,[].concat(H,A))}}}function z4(v){return{}.toString.call(v).includes("Object")}function Xn(v){return!Object.keys(v).length}function U2(v){return typeof v==="function"}function Yn(v,h){return Object.prototype.hasOwnProperty.call(v,h)}function Jn(v,h){if(!z4(h))Kl("changeType");if(Object.keys(h).some(function(e){return!Yn(v,e)}))Kl("changeField");return h}function Qn(v){if(!U2(v))Kl("selectorType")}function zn(v){if(!(U2(v)||z4(v)))Kl("handlerType");if(z4(v)&&Object.values(v).some(function(h){return!U2(h)}))Kl("handlersType")}function Kn(v){if(!v)Kl("initialIsRequired");if(!z4(v))Kl("initialType");if(Xn(v))Kl("initialContent")}function $n(v,h){throw Error(v[h]||v.default)}var Un={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Kl=$2($n)(Un),Q4={changes:Jn,selector:Qn,handler:zn,initial:Kn};function Ln(v){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Q4.initial(v),Q4.handler(h);var e={current:v},u=$2(In)(e,h),H=$2(Fn)(e),O=$2(Q4.changes)(v),q=$2(nn)(e);function A(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(Y){return Y};return Q4.selector(J),J(e.current)}function X(J){Gn(u,H,O,q)(J)}return[A,X]}function nn(v,h){return U2(h)?h(v.current):h}function Fn(v,h){return v.current=ZX(ZX({},v.current),h),h}function In(v,h,e){return U2(h)?h(v.current):Object.keys(e).forEach(function(u){var H;return(H=h[u])===null||H===void 0?void 0:H.call(h,v.current[u])}),e}var Nn={create:Ln},xX=Nn;var CX={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function tX(v){return function h(){var e=this;for(var u=arguments.length,H=Array(u),O=0;O<u;O++)H[O]=arguments[O];return H.length>=v.length?v.apply(this,H):function(){for(var q=arguments.length,A=Array(q),X=0;X<q;X++)A[X]=arguments[X];return h.apply(e,[].concat(H,A))}}}function TX(v){return{}.toString.call(v).includes("Object")}function Bn(v){if(!v)SX("configIsRequired");if(!TX(v))SX("configType");if(v.urls)return mn(),{paths:{vs:v.urls.monacoBase}};return v}function mn(){console.warn(kX.deprecation)}function Zn(v,h){throw Error(v[h]||v.default)}var kX={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},SX=tX(Zn)(kX),DX={config:Bn};var VX=function(){for(var h=arguments.length,e=Array(h),u=0;u<h;u++)e[u]=arguments[u];return function(H){return e.reduceRight(function(O,q){return q(O)},H)}};function iP(v,h){return Object.keys(h).forEach(function(e){if(h[e]instanceof Object){if(v[e])Object.assign(h[e],iP(v[e],h[e]))}}),uP(uP({},v),h)}var xn={type:"cancelation",msg:"operation is manually canceled"};function K4(v){var h=!1,e=new Promise(function(u,H){v.then(function(O){return h?H(xn):u(O)}),v.catch(H)});return e.cancel=function(){return h=!0},e}var Cn=["monaco"],tn=xX.create({config:CX,isInitialized:!1,resolve:null,reject:null,monaco:null}),_X=BX(tn,2),L2=_X[0],$4=_X[1];function Tn(v){var h=DX.config(v),e=h.monaco,u=NX(h,Cn);$4(function(H){return{config:iP(H.config,u),monaco:e}})}function Sn(){var v=L2(function(h){var{monaco:e,isInitialized:u,resolve:H}=h;return{monaco:e,isInitialized:u,resolve:H}});if(!v.isInitialized){if($4({isInitialized:!0}),v.monaco)return v.resolve(v.monaco),K4(HP);if(window.monaco&&window.monaco.editor)return EX(window.monaco),v.resolve(window.monaco),K4(HP);VX(kn,Vn)(_n)}return K4(HP)}function kn(v){return document.body.appendChild(v)}function Dn(v){var h=document.createElement("script");return v&&(h.src=v),h}function Vn(v){var h=L2(function(u){var{config:H,reject:O}=u;return{config:H,reject:O}}),e=Dn("".concat(h.config.paths.vs,"/loader.js"));return e.onload=function(){return v()},e.onerror=h.reject,e}function _n(){var v=L2(function(e){var{config:u,resolve:H,reject:O}=e;return{config:u,resolve:H,reject:O}}),h=window.require;h.config(v.config),h(["vs/editor/editor.main"],function(e){var u=e.m||e;EX(u),v.resolve(u)},function(e){v.reject(e)})}function EX(v){if(!L2().monaco)$4({monaco:v})}function En(){return L2(function(v){var h=v.monaco;return h})}var HP=new Promise(function(v,h){return $4({resolve:v,reject:h})}),Fh={config:Tn,init:Sn,__getMonacoInstance:En};var yX=Or(hg(),1),Ho=Or(hg(),1);var cX=Or(hg(),1),L4=Or(hg(),1),jX=Or(hg(),1),aX=Or(hg(),1),n4=Or(hg(),1),bF=Or(hg(),1);var sX=Or(hg(),1),Sg=Or(hg(),1);var F4=Or(hg(),1),yn={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},PP=yn,cn={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},jn=cn;function fn({children:v}){return jX.default.createElement("div",{style:jn.container},v)}var an=fn,pn=an;function dn({width:v,height:h,isEditorReady:e,loading:u,_ref:H,className:O,wrapperProps:q}){return L4.default.createElement("section",{style:{...PP.wrapper,width:v,height:h},...q},!e&&L4.default.createElement(pn,null,u),L4.default.createElement("div",{ref:H,style:{...PP.fullWidth,...!e&&PP.hide},className:O}))}var sn=dn,fX=cX.memo(sn);function rF(v){aX.useEffect(v,[])}var pX=rF;function gF(v,h,e=!0){let u=n4.useRef(!0);n4.useEffect(u.current||!e?()=>{u.current=!1}:v,h)}var Jv=gF;function n2(){}function j5(v,h,e,u){return oF(v,u)||vF(v,h,e,u)}function oF(v,h){return v.editor.getModel(dX(v,h))}function vF(v,h,e,u){return v.editor.createModel(h,e,u?dX(v,u):void 0)}function dX(v,h){return v.Uri.parse(h)}function lF({original:v,modified:h,language:e,originalLanguage:u,modifiedLanguage:H,originalModelPath:O,modifiedModelPath:q,keepCurrentOriginalModel:A=!1,keepCurrentModifiedModel:X=!1,theme:J="light",loading:Y="Loading...",options:W={},height:Q="100%",width:I="100%",className:_,wrapperProps:t={},beforeMount:V=n2,onMount:rr=n2}){let[Pr,lr]=Ho.useState(!1),[j,p]=Ho.useState(!0),vr=Ho.useRef(null),m=Ho.useRef(null),E=Ho.useRef(null),f=Ho.useRef(rr),C=Ho.useRef(V),Yr=Ho.useRef(!1);pX(()=>{let k=Fh.init();return k.then((s)=>(m.current=s)&&p(!1)).catch((s)=>s?.type!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>vr.current?xr():k.cancel()}),Jv(()=>{if(vr.current&&m.current){let k=vr.current.getOriginalEditor(),s=j5(m.current,v||"",u||e||"text",O||"");s!==k.getModel()&&k.setModel(s)}},[O],Pr),Jv(()=>{if(vr.current&&m.current){let k=vr.current.getModifiedEditor(),s=j5(m.current,h||"",H||e||"text",q||"");s!==k.getModel()&&k.setModel(s)}},[q],Pr),Jv(()=>{let k=vr.current.getModifiedEditor();k.getOption(m.current.editor.EditorOption.readOnly)?k.setValue(h||""):h!==k.getValue()&&(k.executeEdits("",[{range:k.getModel().getFullModelRange(),text:h||"",forceMoveMarkers:!0}]),k.pushUndoStop())},[h],Pr),Jv(()=>{vr.current?.getModel()?.original.setValue(v||"")},[v],Pr),Jv(()=>{let{original:k,modified:s}=vr.current.getModel();m.current.editor.setModelLanguage(k,u||e||"text"),m.current.editor.setModelLanguage(s,H||e||"text")},[e,u,H],Pr),Jv(()=>{m.current?.editor.setTheme(J)},[J],Pr),Jv(()=>{vr.current?.updateOptions(W)},[W],Pr);let Wr=Ho.useCallback(()=>{if(!m.current)return;C.current(m.current);let k=j5(m.current,v||"",u||e||"text",O||""),s=j5(m.current,h||"",H||e||"text",q||"");vr.current?.setModel({original:k,modified:s})},[e,h,H,v,u,O,q]),Jr=Ho.useCallback(()=>{!Yr.current&&E.current&&(vr.current=m.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...W}),Wr(),m.current?.editor.setTheme(J),lr(!0),Yr.current=!0)},[W,J,Wr]);Ho.useEffect(()=>{Pr&&f.current(vr.current,m.current)},[Pr]),Ho.useEffect(()=>{!j&&!Pr&&Jr()},[j,Pr,Jr]);function xr(){let k=vr.current?.getModel();A||k?.original?.dispose(),X||k?.modified?.dispose(),vr.current?.dispose()}return Ho.default.createElement(fX,{width:I,height:Q,isEditorReady:Pr,loading:Y,_ref:E,className:_,wrapperProps:t})}var hF=lF,$cg=yX.memo(hF);function wF(v){let h=F4.useRef();return F4.useEffect(()=>{h.current=v},[v]),h.current}var eF=wF,U4=new Map;function uF({defaultValue:v,defaultLanguage:h,defaultPath:e,value:u,language:H,path:O,theme:q="light",line:A,loading:X="Loading...",options:J={},overrideServices:Y={},saveViewState:W=!0,keepCurrentModel:Q=!1,width:I="100%",height:_="100%",className:t,wrapperProps:V={},beforeMount:rr=n2,onMount:Pr=n2,onChange:lr,onValidate:j=n2}){let[p,vr]=Sg.useState(!1),[m,E]=Sg.useState(!0),f=Sg.useRef(null),C=Sg.useRef(null),Yr=Sg.useRef(null),Wr=Sg.useRef(Pr),Jr=Sg.useRef(rr),xr=Sg.useRef(),k=Sg.useRef(u),s=eF(O),hr=Sg.useRef(!1),or=Sg.useRef(!1);pX(()=>{let S=Fh.init();return S.then((Hr)=>(f.current=Hr)&&E(!1)).catch((Hr)=>Hr?.type!=="cancelation"&&console.error("Monaco initialization: error:",Hr)),()=>C.current?T():S.cancel()}),Jv(()=>{let S=j5(f.current,v||u||"",h||H||"",O||e||"");S!==C.current?.getModel()&&(W&&U4.set(s,C.current?.saveViewState()),C.current?.setModel(S),W&&C.current?.restoreViewState(U4.get(O)))},[O],p),Jv(()=>{C.current?.updateOptions(J)},[J],p),Jv(()=>{!C.current||u===void 0||(C.current.getOption(f.current.editor.EditorOption.readOnly)?C.current.setValue(u):u!==C.current.getValue()&&(or.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:u,forceMoveMarkers:!0}]),C.current.pushUndoStop(),or.current=!1))},[u],p),Jv(()=>{let S=C.current?.getModel();S&&H&&f.current?.editor.setModelLanguage(S,H)},[H],p),Jv(()=>{A!==void 0&&C.current?.revealLine(A)},[A],p),Jv(()=>{f.current?.editor.setTheme(q)},[q],p);let Mr=Sg.useCallback(()=>{if(!(!Yr.current||!f.current)&&!hr.current){Jr.current(f.current);let S=O||e,Hr=j5(f.current,u||v||"",h||H||"",S||"");C.current=f.current?.editor.create(Yr.current,{model:Hr,automaticLayout:!0,...J},Y),W&&C.current.restoreViewState(U4.get(S)),f.current.editor.setTheme(q),A!==void 0&&C.current.revealLine(A),vr(!0),hr.current=!0}},[v,h,e,u,H,O,J,Y,W,q,A]);Sg.useEffect(()=>{p&&Wr.current(C.current,f.current)},[p]),Sg.useEffect(()=>{!m&&!p&&Mr()},[m,p,Mr]),k.current=u,Sg.useEffect(()=>{p&&lr&&(xr.current?.dispose(),xr.current=C.current?.onDidChangeModelContent((S)=>{or.current||lr(C.current.getValue(),S)}))},[p,lr]),Sg.useEffect(()=>{if(p){let S=f.current.editor.onDidChangeMarkers((Hr)=>{let Qr=C.current.getModel()?.uri;if(Qr&&Hr.find((Rr)=>Rr.path===Qr.path)){let Rr=f.current.editor.getModelMarkers({resource:Qr});j?.(Rr)}});return()=>{S?.dispose()}}return()=>{}},[p,j]);function T(){xr.current?.dispose(),Q?W&&U4.set(O,C.current.saveViewState()):C.current.getModel()?.dispose(),C.current.dispose()}return Sg.default.createElement(fX,{width:I,height:_,isEditorReady:p,loading:X,_ref:Yr,className:t,wrapperProps:V})}var iF=uF,HF=sX.memo(iF),rY=HF;var f5=Or(hg(),1);var Po=Or(rg(),1),PF={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},gY=({entries:v,isRunning:h,onClear:e})=>{let[u,H]=f5.useState(!1),O=f5.useRef(null);f5.useEffect(()=>{if(!u&&O.current)O.current.scrollTop=O.current.scrollHeight},[v,u]);let q=()=>{let A=v.filter((X)=>X.type!=="separator").map((X)=>`[${X.timestamp}] ${X.type.toUpperCase()}: ${X.message}`).join(`
`);navigator.clipboard.writeText(A).catch(()=>{})};return Po.jsxDEV("div",{className:`ls-console${u?" ls-collapsed":""}`,children:[Po.jsxDEV("div",{className:"ls-console-header",onClick:()=>H((A)=>!A),children:[Po.jsxDEV(C0,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-console-title",children:["Console",h?" — running…":v.length>0?` (${v.length})`:""]},void 0,!0,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),q()},title:"Copy output",disabled:v.length===0,children:Po.jsxDEV(pv,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Po.jsxDEV("button",{className:"ls-icon-btn",onClick:(A)=>{A.stopPropagation(),e()},title:"Clear console",disabled:v.length===0,children:Po.jsxDEV(Lo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),u?Po.jsxDEV(Go,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Po.jsxDEV(Rv,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&Po.jsxDEV("div",{className:"ls-console-output",ref:O,children:v.length===0?Po.jsxDEV("div",{className:"ls-console-empty",children:h?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):v.map((A,X)=>A.type==="separator"?Po.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},X,!1,void 0,this):Po.jsxDEV("div",{className:`ls-entry ${PF[A.type]??"ls-log"}`,children:[Po.jsxDEV("span",{className:"ls-entry-time",children:A.timestamp},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-type",children:A.type.toUpperCase()},void 0,!1,void 0,this),Po.jsxDEV("span",{className:"ls-entry-msg",children:A.message},void 0,!1,void 0,this)]},X,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Vo=Or(rg(),1),oY=({bindings:v,activeContext:h,onAdd:e,onRemove:u})=>{let H=()=>{let{characterId:q,characterName:A}=h;if(!q)return;if(v.some((X)=>X.type==="character"&&X.characterId===q))return;e({type:"character",characterId:q,displayName:A??q})},O=()=>{let{chatId:q,characterName:A}=h;if(!q)return;if(v.some((J)=>J.type==="chat"&&J.chatId===q))return;let X=A?`${A} — ${q.slice(0,8)}`:q.slice(0,8);e({type:"chat",chatId:q,displayName:X})};return Vo.jsxDEV("div",{className:"ls-bindings",children:Vo.jsxDEV("div",{className:"ls-bindings-row",children:[Vo.jsxDEV(Ew,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),v.length===0?Vo.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):v.map((q,A)=>Vo.jsxDEV("span",{className:"ls-binding-chip",children:[q.type==="character"?Vo.jsxDEV(D5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Vo.jsxDEV(S5,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),Vo.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:q.displayName},void 0,!1,void 0,this),Vo.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>u(A),title:"Remove binding",children:Vo.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},A,!0,void 0,this)),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:H,disabled:!h.characterId,title:h.characterId?"Bind to current character":"Open a chat first",children:[Vo.jsxDEV(D5,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),Vo.jsxDEV("button",{className:"ls-bindings-add",onClick:O,disabled:!h.chatId,title:h.chatId?"Bind to current chat":"Open a chat first",children:[Vo.jsxDEV(S5,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var vY=Or(hg(),1);var so=Or(rg(),1),lY=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Ccg=lY.flatMap((v)=>v.events.map((h)=>h.name)),hY=({scriptId:v,triggers:h,sendToBackend:e})=>{let[u,H]=vY.useState(!0),O=new Set(h),q=(A)=>{let X=O.has(A)?h.filter((J)=>J!==A):[...h,A];e({type:"update_script",id:v,patch:{triggers:X}})};return so.jsxDEV("div",{className:`ls-triggers${u?" ls-triggers-collapsed":""}`,children:[so.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>H((A)=>!A),children:[so.jsxDEV(W1,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),so.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),O.size>0&&so.jsxDEV("span",{className:"ls-triggers-count",children:O.size},void 0,!1,void 0,this),so.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:u?so.jsxDEV(Go,{size:12},void 0,!1,void 0,this):so.jsxDEV(Rv,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!u&&so.jsxDEV("div",{className:"ls-triggers-body",children:lY.map((A)=>so.jsxDEV("div",{className:"ls-trigger-group",children:[so.jsxDEV("span",{className:"ls-trigger-group-label",children:A.label},void 0,!1,void 0,this),so.jsxDEV("div",{className:"ls-trigger-chips",children:A.events.map((X)=>so.jsxDEV("button",{className:`ls-trigger-chip${O.has(X.name)?" ls-trigger-chip-active":""}`,onClick:()=>q(X.name),title:X.description,children:X.name},X.name,!1,void 0,this))},void 0,!1,void 0,this)]},A.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var bY=`
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
`;var iY=Or(hg(),1);function wY(v){return v.split("`").map((e,u)=>{if(u%2===1)return e;return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function OF(v){return v.split("`").map((u,H)=>{if(H%2===1)return u;return u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function $l(v,h){let e=`| ${v.join(" | ")} |`,u=`| ${v.map(()=>"---").join(" | ")} |`,H=h.map((O)=>`| ${O.map(OF).join(" | ")} |`);return[e,u,...H].join(`
`)}function qF(v){return v.optional&&!v.field.endsWith("?")?`${v.field}?`:v.field}function AF(v){if(v==="silent")return"*silent*";if(v==="boolean")return'`"true" / "false"`';return"`string`"}function MF(v){return v.aliases==="—"?"—":`\`${v.aliases}\``}function WF(v){let h=v.perms.length===0&&!v.note?"*none*":v.perms.map((e)=>`\`${e}\``).join(", ");return v.note?`${h}${v.perms.length?" ":""}${v.note}`:h}function RF(){return`## Lumiverse Events

${$l(["Event","Group","Payload shape"],OP.map((h)=>[`\`${h.name}\``,h.group,`\`${h.payload}\``]))}`}function GF(){return`## Permission Matrix

${qP.map((h)=>{let e=$l(["Method","Required permissions"],h.rows.map((u)=>[`\`${u.method}\``,WF(u)]));return`### ${h.group}

${e}`}).join(`

`)}`}function XF(){let v=$l(["Event","Payload fields","Emitted by"],AP.map((e)=>[`\`${e.name}\``,`\`${e.payload}\``,e.emittedBy])),h="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${v}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function YF(){let v=MP.map((e)=>{let u=$l(["Macro","Aliases","Returns","Description"],e.rows.map((O)=>[`\`${O.macro}\``,MF(O),AF(O.returns),O.desc])),H=[`### ${e.label}`];if(e.description)H.push(`*${e.description}*`);return H.push(u),H.join(`

`)}),h='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${v.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function JF(){return`## Key Types

${WP.map((v)=>eY(v)).join(`

`)}`}function eY(v,h="###"){let e=wY(v.name),u=v.note?`*${wY(v.note)}*

`:"",H=$l(["Field","Type","Description"],v.fields.map((O)=>[`\`${qF(O)}\``,`\`${O.type}\``,O.desc]));return`${h} ${e}

${u}${H}`}function QF(){return`## API Functions

${RP.map((h)=>{let e=$l(["Method","Arguments","Description"],h.rows.map((u)=>[`\`${u.name}\``,u.args,u.desc]));return`### ${h.group}

${e}`}).join(`

`)}`}function zF(){let h=$l(["Method","Arguments","Description"],GP.map((H)=>[`\`${H.name}\``,H.args,H.desc])),e=$l(["Method","Arguments","Description"],XP.map((H)=>[`\`${H.name}\``,H.args,H.desc])),u=YP.map((H)=>eY(H,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",h,"","### ls:council-prompt","",e,"","### Built-in types","",u].join(`
`)}function KF(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function $F(){let h=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,e=[RF(),GF(),XF(),YF(),JF(),QF(),zF(),KF()];return`${h}

---

${e.join(`

---

`)}
`}function uY(){let v=$F(),e=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,u=new Blob([v],{type:"text/markdown;charset=utf-8"}),H=URL.createObjectURL(u),O=document.createElement("a");O.href=H,O.download=e,O.click(),URL.revokeObjectURL(H)}var U=Or(rg(),1),Ul=({icon:v,title:h,defaultOpen:e=!1,children:u})=>{let[H,O]=iY.useState(e);return U.jsxDEV("div",{className:"ls-ref-section",children:[U.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>O((q)=>!q),children:[U.jsxDEV("span",{className:"ls-ref-section-title",children:[v,h]},void 0,!0,void 0,this),H?U.jsxDEV(Go,{size:12},void 0,!1,void 0,this):U.jsxDEV(A1,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H&&U.jsxDEV("div",{className:"ls-ref-section-body",children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Ag=({children:v})=>U.jsxDEV("code",{className:"ls-ref-code",children:v},void 0,!1,void 0,this),UF=({children:v})=>U.jsxDEV("span",{className:"ls-ref-perm",children:v},void 0,!1,void 0,this),LF=()=>U.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),nF=()=>U.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),a5=({label:v,cols:h})=>U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:h,className:"ls-ref-group-header",children:v},void 0,!1,void 0,this)},void 0,!1,void 0,this),OP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],FF=()=>{let v="";return U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:OP.map((h)=>{let e=h.group!==v?h.group:"";return v=h.group,U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:e},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],IF=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:qP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(a5,{label:v.group,cols:2},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:[h.perms.length===0&&!h.note?U.jsxDEV(LF,{},void 0,!1,void 0,this):null,h.perms.map((e)=>U.jsxDEV(UF,{children:e},e,!1,void 0,this)),h.note?U.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:h.perms.length?4:0},children:h.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},h.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),AP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],NF=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:AP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],BF=({type:v})=>{if(v==="silent")return U.jsxDEV(nF,{},void 0,!1,void 0,this);if(v==="boolean")return U.jsxDEV(Ag,{children:'"true" / "false"'},void 0,!1,void 0,this);return U.jsxDEV(Ag,{children:"string"},void 0,!1,void 0,this)},mF=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:MP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(a5,{label:v.description?U.jsxDEV(U.Fragment,{children:[v.label," — ",U.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:v.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):v.label,cols:4},`hdr-${v.label}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:h.aliases==="—"?U.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):U.jsxDEV(Ag,{children:h.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:U.jsxDEV(BF,{type:h.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update'",optional:!1,desc:"Which write path triggered this invocation. 'create' includes auto-greetings."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],ZF=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:WP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&U.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),RP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],xF=()=>U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:RP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV(a5,{label:v.group,cols:3},`hdr-${v.group}`,!1,void 0,this),v.rows.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.group}-${h.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],XP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],CF=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],YP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],tF=()=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",U.jsxDEV(Ag,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",U.jsxDEV(Ag,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",U.jsxDEV(Ag,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",U.jsxDEV(Ag,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",U.jsxDEV(Ag,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",U.jsxDEV(Ag,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),U.jsxDEV("table",{className:"ls-ref-table",children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:[U.jsxDEV(a5,{label:"ls:components",cols:3},void 0,!1,void 0,this),GP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),U.jsxDEV(a5,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),XP.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this)),U.jsxDEV(a5,{label:"ls:icons",cols:3},void 0,!1,void 0,this),CF.map((v)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:v.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:v.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},v.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[U.jsxDEV("thead",{children:U.jsxDEV("tr",{children:[U.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),U.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("tbody",{children:YP.map((v)=>U.jsxDEV(U.Fragment,{children:[U.jsxDEV("tr",{children:U.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[v.name,v.note&&U.jsxDEV("div",{className:"ls-ref-type-note",children:v.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${v.name}`,!1,void 0,this),v.fields.map((h)=>U.jsxDEV("tr",{children:[U.jsxDEV("td",{children:U.jsxDEV(Ag,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV("td",{children:U.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${v.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),HY=()=>U.jsxDEV("div",{className:"ls-ref",children:[U.jsxDEV("div",{className:"ls-ref-toolbar",children:U.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>uY(),title:"Download the current reference as a Markdown file",children:[U.jsxDEV(Qh,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(W1,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:U.jsxDEV(FF,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(jw,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:U.jsxDEV(IF,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(sw,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[U.jsxDEV(NF,{},void 0,!1,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",U.jsxDEV(Ag,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(_w,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[U.jsxDEV(mF,{},void 0,!1,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",U.jsxDEV(Ag,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",U.jsxDEV(Ag,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(Z0,{size:11},void 0,!1,void 0,this),title:"Key Types",children:U.jsxDEV(ZF,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(cw,{size:11},void 0,!1,void 0,this),title:"API Functions",children:U.jsxDEV(xF,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(xw,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:U.jsxDEV(tF,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),U.jsxDEV(Ul,{icon:U.jsxDEV(aw,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[U.jsxDEV("p",{className:"ls-ref-muted",children:[U.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",U.jsxDEV(Ag,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",U.jsxDEV(Ag,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",U.jsxDEV(Ag,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",U.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),U.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[U.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",U.jsxDEV(Ag,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",U.jsxDEV(Ag,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",U.jsxDEV(Ag,{children:"enabled: false"},void 0,!1,void 0,this)," and ",U.jsxDEV(Ag,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Ir=Or(rg(),1),PY=!1,OY=({script:v,allScripts:h,activeContext:e,isRunning:u,consoleEntries:H,editorFontSize:O,autosaveDebounceMs:q,onClearConsole:A,sendToBackend:X})=>{let[J,Y]=Yo.useState(v.code),[W,Q]=Yo.useState(!1),[I,_]=Yo.useState(!1),[t,V]=Yo.useState(v.name),[rr,Pr]=Yo.useState("code"),[lr,j]=Yo.useState(!1),[p,vr]=Yo.useState(!1),m=Yo.useRef(null),E=Yo.useRef(null);Yo.useEffect(()=>{Y(v.code),Q(!1),V(v.name),vr(!1)},[v.id,v.code,v.name]),Yo.useEffect(()=>{X({type:"get_active_context"})},[v.id,X]),Yo.useEffect(()=>{let or=setInterval(()=>{X({type:"get_active_context"})},2000);return()=>clearInterval(or)},[X]);let f=Yo.useCallback((or)=>{X({type:"update_script",id:v.id,patch:{code:or}}),Q(!1)},[v.id,X]),C=(or)=>{if(or===void 0)return;if(Y(or),Q(or!==v.code),m.current)clearTimeout(m.current);m.current=setTimeout(()=>f(or),q)},Yr=(or,Mr)=>{if(E.current=or,!PY){PY=!0;let T=Mr.languages.typescript.javascriptDefaults;T.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),T.setCompilerOptions({target:Mr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),T.addExtraLib(bY,"ts:lumiverse/lumiscript-api.d.ts")}or.addCommand(Mr.KeyMod.CtrlCmd|Mr.KeyCode.KeyS,()=>{if(m.current)clearTimeout(m.current);f(or.getValue())}),or.getModel()?.setEOL(Mr.editor.EndOfLineSequence.LF)},Wr=()=>{if(u)return;if(m.current)clearTimeout(m.current),m.current=null;if(W)f(E.current?.getValue()??J);X({type:"run_script",id:v.id})},Jr=()=>{let or=t.trim();if(or&&or!==v.name)X({type:"update_script",id:v.id,patch:{name:or}});_(!1)},xr=(or)=>{let Mr=v.bindings??[];X({type:"update_script",id:v.id,patch:{bindings:[...Mr,or]}})},k=(or)=>{X({type:"update_script",id:v.id,patch:{bindings:(v.bindings??[]).filter((Mr,T)=>T!==or)}})},s=()=>{if(v.allowDangerous)X({type:"update_script",id:v.id,patch:{allowDangerous:!1}});else if(p)vr(!1),X({type:"update_script",id:v.id,patch:{allowDangerous:!0}});else vr(!0)},hr=(or)=>new Date(or).toLocaleString();return Ir.jsxDEV("div",{className:"ls-editor-root",children:[Ir.jsxDEV("div",{className:"ls-editor-topbar",children:[I?Ir.jsxDEV("input",{className:"ls-editor-name-input",value:t,autoFocus:!0,onChange:(or)=>V(or.target.value),onBlur:Jr,onKeyDown:(or)=>{if(or.key==="Enter")Jr();if(or.key==="Escape")V(v.name),_(!1)}},void 0,!1,void 0,this):Ir.jsxDEV("span",{className:"ls-editor-name",onClick:()=>_(!0),title:"Click to rename",style:{cursor:"text"},children:v.name},void 0,!1,void 0,this),W&&Ir.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>Pr("code"),title:"Code editor",children:[Ir.jsxDEV(Ro,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>Pr("docs"),title:"API reference",children:[Ir.jsxDEV(Cw,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),v.type!=="library"&&Ir.jsxDEV("button",{className:`ls-btn${u?"":" ls-accent"}`,onClick:Wr,disabled:u,children:[u?Ir.jsxDEV(Rl,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Ir.jsxDEV(pw,{size:15},void 0,!1,void 0,this),u?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Ir.jsxDEV("div",{className:"ls-editor-monaco",children:Ir.jsxDEV(rY,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:J,onChange:C,onMount:Yr,options:{minimap:{enabled:!1},fontSize:O,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},v.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Ir.jsxDEV("div",{className:"ls-editor-docs",children:Ir.jsxDEV(HY,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Ir.jsxDEV(gY,{entries:H,isRunning:u,onClear:A},void 0,!1,void 0,this),v.type==="trigger"&&Ir.jsxDEV(hY,{scriptId:v.id,triggers:v.triggers??[],sendToBackend:X},void 0,!1,void 0,this),v.type==="trigger"&&Ir.jsxDEV(oY,{bindings:v.bindings??[],activeContext:e,onAdd:xr,onRemove:k},void 0,!1,void 0,this),p&&Ir.jsxDEV("div",{className:"ls-danger-confirm",children:[Ir.jsxDEV(k5,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:s,children:"Enable"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>vr(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-meta-footer",children:[Ir.jsxDEV("span",{className:"ls-meta-item",children:Ir.jsxDEV("button",{className:"ls-danger-btn",onClick:s,title:"Toggle dangerous mode",children:[v.allowDangerous?Ir.jsxDEV(k5,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Ir.jsxDEV(g2,{size:11},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:v.allowDangerous?"ls-dangerous":"",children:v.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Ir.jsxDEV(zh,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("select",{className:"ls-folder-select",value:v.folder??"",onChange:(or)=>{let Mr=or.target.value;if(Mr==="__new__"){let T=window.prompt("New folder name:");if(T?.trim())X({type:"update_script",id:v.id,patch:{folder:T.trim()}})}else X({type:"update_script",id:v.id,patch:{folder:Mr}})},children:[Ir.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(h.map((or)=>or.folder).filter((or)=>!!or))].sort().map((or)=>Ir.jsxDEV("option",{value:or,children:or},or,!1,void 0,this)),Ir.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(Dw,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Updated ",hr(v.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(tw,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Created ",hr(v.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:v.id,onClick:()=>{navigator.clipboard.writeText(v.id).catch(()=>{}),j(!0),setTimeout(()=>j(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?Ir.jsxDEV(Tw,{size:10},void 0,!1,void 0,this):Ir.jsxDEV(pv,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["ID ",v.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var no=Or(rg(),1),AY=({scripts:v,initialScriptId:h,activeContext:e,execInfo:u,activeRunScriptId:H,isRunning:O,consoleHistory:q,editorFontSize:A,autosaveDebounceMs:X,onClearConsole:J,onClose:Y,sendToBackend:W})=>{let[Q,I]=F2.useState(h),_=v.find((lr)=>lr.id===Q)??null;F2.useEffect(()=>{I(h)},[h]),F2.useEffect(()=>{let lr=(j)=>{if(j.key==="Escape")Y()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[Y]);let t=_?q[_.id]??[]:[],V=O&&_?.id===H;return qY.createPortal(no.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)Y()},children:no.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[no.jsxDEV("div",{className:"ls-modal-header",children:[no.jsxDEV("span",{className:"ls-modal-title",children:[no.jsxDEV(C0,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),no.jsxDEV("button",{className:"ls-modal-close",onClick:Y,title:"Close (Esc)",children:no.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),no.jsxDEV("div",{className:"ls-modal-body",children:[no.jsxDEV("div",{className:"ls-modal-sidebar",children:no.jsxDEV(J4,{scripts:v,selectedId:Q,execInfo:u,onSelect:I,onEdit:I,sendToBackend:W},void 0,!1,void 0,this)},void 0,!1,void 0,this),no.jsxDEV("div",{className:"ls-modal-main",children:_?no.jsxDEV(OY,{script:_,allScripts:v,activeContext:e,isRunning:V,consoleEntries:t,editorFontSize:A,autosaveDebounceMs:X,onClearConsole:()=>{if(_)J(_.id)},sendToBackend:W},void 0,!1,void 0,this):no.jsxDEV("div",{className:"ls-placeholder",children:[no.jsxDEV(C0,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),no.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var I4=Or(rg(),1),MY=({scripts:v,activeContext:h,execInfo:e,activeRunScriptId:u,isRunning:H,consoleHistory:O,editorFontSize:q,autosaveDebounceMs:A,onClearConsole:X,onScriptOpened:J,sendToBackend:Y})=>{let[W,Q]=N4.useState(null);return N4.useEffect(()=>{if(W&&J)J(W)},[W,J]),I4.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[I4.jsxDEV(J4,{scripts:v,selectedId:W,execInfo:e,onSelect:()=>{},onEdit:Q,sendToBackend:Y},void 0,!1,void 0,this),W!==null&&I4.jsxDEV(AY,{scripts:v,initialScriptId:W,activeContext:h,execInfo:e,activeRunScriptId:u,isRunning:H,consoleHistory:O,editorFontSize:q,autosaveDebounceMs:A,onClearConsole:X,onClose:()=>Q(null),sendToBackend:Y},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var WY=Or(hg(),1);var yg=Or(rg(),1),TF=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function SF(v){if(v===void 0)return"undefined";if(v===null)return"null";if(typeof v==="string")return v.length>80?v.slice(0,77)+"…":v;try{let h=JSON.stringify(v);return h.length>80?h.slice(0,77)+"…":h}catch{return String(v)}}var RY=({variables:v,sendToBackend:h})=>{let[e,u]=WY.useState(new Set(["local","global","chat","character"])),H=(q)=>{u((A)=>{let X=new Set(A);if(X.has(q))X.delete(q);else X.add(q);return X})},O=v?Object.values(v).reduce((q,A)=>q+Object.keys(A).length,0):0;return yg.jsxDEV("div",{className:"ls-status-section",children:[yg.jsxDEV("div",{className:"ls-inject-header",children:[yg.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Variables",O>0&&yg.jsxDEV("span",{className:"ls-inject-count",children:O},void 0,!1,void 0,this),yg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>h({type:"get_variables"}),children:yg.jsxDEV(M1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),yg.jsxDEV("div",{className:"ls-status-section-body",children:!v?yg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):O===0?yg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):TF.map(({key:q,label:A,hint:X})=>{let J=v[q],Y=Object.keys(J),W=e.has(q);if(Y.length===0)return null;return yg.jsxDEV("div",{className:"ls-vars-scope",children:[yg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>H(q),children:[W?yg.jsxDEV(Go,{size:10},void 0,!1,void 0,this):yg.jsxDEV(Rv,{size:10},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-name",children:A},void 0,!1,void 0,this),X&&yg.jsxDEV("span",{className:"ls-vars-scope-hint",children:X},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-scope-count",children:Y.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),W&&yg.jsxDEV("div",{className:"ls-vars-scope-body",children:Y.sort().map((Q)=>yg.jsxDEV("div",{className:"ls-vars-entry",children:[yg.jsxDEV("span",{className:"ls-vars-key",children:Q},void 0,!1,void 0,this),yg.jsxDEV("span",{className:"ls-vars-value",title:String(J[Q]),children:SF(J[Q])},void 0,!1,void 0,this)]},Q,!0,void 0,this))},void 0,!1,void 0,this)]},q,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ll=Or(hg(),1);function B4(v){if(!Number.isFinite(v)||v<=0)return"0 B";let h=["B","KB","MB","GB"],e=Math.min(h.length-1,Math.floor(Math.log(v)/Math.log(1024))),u=v/Math.pow(1024,e);return`${e===0?u.toFixed(0):u.toFixed(1)} ${h[e]}`}function I2(v){let h;if(typeof v==="number")h=v;else{if(!v)return"—";h=new Date(v).getTime()}if(!Number.isFinite(h)||h<=0)return"—";let e=Date.now()-h;if(e<60000)return"just now";if(e<3600000)return`${Math.floor(e/60000)}m ago`;if(e<86400000)return`${Math.floor(e/3600000)}h ago`;if(e<2592000000)return`${Math.floor(e/86400000)}d ago`;return new Date(h).toISOString().slice(0,10)}var JP={script:"script",character:"char",chat:"chat"},GY={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function m4(v){return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(e,u,H,O,q,A,X)=>{if(u)return`<span class="ls-json-key">${u}</span>${H}`;if(O)return`<span class="ls-json-string">${O}</span>`;if(q)return`<span class="ls-json-bool">${q}</span>`;if(A)return`<span class="ls-json-null">${A}</span>`;if(X)return`<span class="ls-json-number">${X}</span>`;return e})}async function QP(v){try{return await navigator.clipboard.writeText(v),!0}catch{return!1}}var Nr=Or(rg(),1),p5=["script","character","chat"],kF=10485760,DF=41943040,VF=52428800;function _F(v){if(v>=DF)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(v>=kF)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function EF(v){if(v.scope==="character"){if(v.characterName)return`character: ${v.characterName} (${v.characterId})
${v.path}`;if(v.characterId)return`character: ${v.characterId} (not currently loaded)
${v.path}`}if(v.scope==="chat"){if(v.chatName)return`chat: ${v.chatName} (${v.chatId})
${v.path}`;if(v.chatId)return`chat: ${v.chatId} (not currently loaded)
${v.path}`}return v.path}function yF(v,h,e,u){switch(e){case"name":return v.name.localeCompare(h.name,void 0,{sensitivity:"base"});case"scope":return v.scope.localeCompare(h.scope);case"owner":{let H=u.get(v.scriptId)??v.scriptId,O=u.get(h.scriptId)??h.scriptId;return H.localeCompare(O,void 0,{sensitivity:"base"})}case"size":return v.sizeBytes-h.sizeBytes;case"updated":return new Date(v.modifiedAt).getTime()-new Date(h.modifiedAt).getTime()}}var XY=({collections:v,scripts:h,sendToBackend:e,onInspect:u,onDrop:H})=>{let[O,q]=Ll.useState(""),[A,X]=Ll.useState(()=>new Set(p5)),[J,Y]=Ll.useState(null),[W,Q]=Ll.useState("asc"),I=Ll.useMemo(()=>{let m=new Map;for(let E of h)m.set(E.id,E.name);return m},[h]),_=Ll.useMemo(()=>{if(!v)return null;let m=v;if(A.size<p5.length)m=m.filter((f)=>A.has(f.scope));let E=O.trim().toLowerCase();if(E)m=m.filter((f)=>f.name.toLowerCase().includes(E));if(J){let f=W==="asc"?1:-1;m=m.slice().sort((C,Yr)=>yF(C,Yr,J,I)*f)}return m},[v,A,O,J,W,I]),t=()=>e({type:"list_collections"}),V=(m)=>{X((E)=>{let f=new Set(E);if(f.has(m))f.delete(m);else f.add(m);if(f.size===0)return new Set(p5);return f})},rr=(m)=>{if(J!==m){Y(m),Q("asc");return}if(W==="asc"){Q("desc");return}Y(null)},Pr=()=>{q(""),X(new Set(p5))},lr=v?.length??0,j=_?.length??0,p=O.trim().length>0||A.size<p5.length,vr=(m)=>{if(J!==m)return Nr.jsxDEV(kw,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return W==="asc"?Nr.jsxDEV(Rv,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Nr.jsxDEV(Go,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Nr.jsxDEV("div",{className:"ls-status-section",children:[Nr.jsxDEV("div",{className:"ls-inject-header",children:[Nr.jsxDEV(dv,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Nr.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:t,children:Nr.jsxDEV(M1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-status-section-body",children:v===null?Nr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):v.length===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Nr.jsxDEV(Nr.Fragment,{children:[Nr.jsxDEV("div",{className:"ls-collections-filter",children:[Nr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Nr.jsxDEV(Xl,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:O,onChange:(m)=>q(m.target.value)},void 0,!1,void 0,this),O&&Nr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>q(""),children:Nr.jsxDEV(So,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-collections-filter-chips",children:p5.map((m)=>{let E=A.has(m);return Nr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":m,"aria-pressed":E,title:E?`Hide ${m}-scoped`:`Show ${m}-scoped`,onClick:()=>V(m),children:JP[m]},m,!1,void 0,this)})},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-filter-count",children:p?`${j}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),j===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:[Nr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Nr.jsxDEV("button",{onClick:Pr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Nr.jsxDEV("div",{className:"ls-collections-list",children:[Nr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",vr("name")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",vr("scope")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",vr("owner")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",vr("size")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",vr("updated")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),_.map((m)=>{let E=I.get(m.scriptId)??`(${m.scriptId.slice(0,8)}…)`,f=!I.has(m.scriptId),C=f?`scriptId: ${m.scriptId} (not currently loaded)`:`${E} (${m.scriptId})`;return Nr.jsxDEV("div",{className:"ls-collections-row",children:[Nr.jsxDEV("span",{className:"ls-collections-name",title:m.name,children:m.name},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-scope","data-scope":m.scope,title:EF(m),children:JP[m.scope]},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:`ls-collections-owner${f?" ls-collections-owner-unknown":""}`,title:C,children:E},void 0,!1,void 0,this),(()=>{let Yr=_F(m.sizeBytes),Wr=(m.sizeBytes/VF*100).toFixed(m.sizeBytes<1048576?2:1),Jr=`${m.sizeBytes.toLocaleString()} bytes (${Wr}% of 50 MB cap)`;return Nr.jsxDEV("span",{className:"ls-collections-size","data-budget":Yr.tier,title:Jr,style:Yr.tier==="normal"?void 0:{color:Yr.color,fontWeight:600},children:B4(m.sizeBytes)},void 0,!1,void 0,this)})(),Nr.jsxDEV("span",{className:"ls-collections-updated",title:m.modifiedAt,children:I2(m.modifiedAt)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-actions",children:[Nr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>u(m.path),children:Nr.jsxDEV(Vw,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>H(m),children:Nr.jsxDEV(Lo,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},m.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var kg=Or(hg(),1),QY=Or(C5(),1);var v0=Or(hg(),1),YY=Or(C5(),1);var Qg=Or(rg(),1);function cF(v){let{id:h,createdAt:e,updatedAt:u,...H}=v;try{return JSON.stringify(H,null,2)}catch{return"{}"}}var JY=({path:v,record:h,onClose:e,sendToBackend:u})=>{let[H,O]=v0.useState(()=>cF(h)),[q,A]=v0.useState(null),X=v0.useRef(null),J=v0.useRef(null),Y=v0.useRef(null);v0.useEffect(()=>{let t=(V)=>{if(V.key==="Escape")e()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[e]),v0.useEffect(()=>{let t=(V)=>{if(V.key!=="Tab")return;let rr=X.current;if(!rr)return;let Pr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Pr.length===0)return;let lr=Pr[0],j=Pr[Pr.length-1],p=document.activeElement,vr=p!==null&&rr.contains(p);if(V.shiftKey){if(!vr||p===lr)V.preventDefault(),j.focus()}else if(!vr||p===j)V.preventDefault(),lr.focus()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[]),v0.useEffect(()=>{let t=setTimeout(()=>J.current?.focus(),0);return()=>clearTimeout(t)},[]);let W=()=>{let t;try{t=JSON.parse(H)}catch(V){let rr=V instanceof Error?V.message:String(V);A(`JSON parse error: ${rr}`);return}if(t===null||typeof t!=="object"||Array.isArray(t)){A("Record must be a JSON object — not an array, null, or primitive.");return}A(null),u({type:"update_record",path:v,recordId:String(h.id),patch:t}),e()},Q=(t)=>{if((t.metaKey||t.ctrlKey)&&t.key==="Enter")t.preventDefault(),W()},I=String(h.id),_=Qg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(t)=>{if(t.target===t.currentTarget)e()},children:Qg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:X,onClick:(t)=>t.stopPropagation(),children:[Qg.jsxDEV("div",{className:"ls-modal-header",children:[Qg.jsxDEV("span",{className:"ls-modal-title",children:[Qg.jsxDEV(sv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Qg.jsxDEV("button",{className:"ls-modal-close",onClick:e,title:"Cancel (Esc)",children:Qg.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Qg.jsxDEV("div",{className:"ls-edit-body",children:[Qg.jsxDEV("div",{className:"ls-edit-meta",children:[Qg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Qg.jsxDEV("code",{className:"ls-edit-meta-value",title:I,children:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Qg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Qg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Qg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Qg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Qg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Qg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Qg.jsxDEV("pre",{ref:Y,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:m4(H)+`
`}},void 0,!1,void 0,this),Qg.jsxDEV("textarea",{ref:J,className:"ls-edit-textarea",value:H,onChange:(t)=>{if(O(t.target.value),q)A(null)},onKeyDown:Q,onScroll:(t)=>{let V=Y.current;if(!V)return;V.scrollTop=t.currentTarget.scrollTop,V.scrollLeft=t.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q&&Qg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Qg.jsxDEV(tv,{size:12},void 0,!1,void 0,this),Qg.jsxDEV("span",{children:q},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Qg.jsxDEV("div",{className:"ls-drop-actions",children:[Qg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:e,children:"Cancel"},void 0,!1,void 0,this),Qg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:W,title:"Save (Ctrl/Cmd+Enter)",children:[Qg.jsxDEV(r2,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return YY.createPortal(_,document.body)};var a=Or(rg(),1),Ih=50,jF=150,fF=1200,aF=4000,zY=({path:v,summary:h,records:e,total:u,error:H,stats:O,refreshToken:q,onClose:A,sendToBackend:X})=>{let[J,Y]=kg.useState(""),[W,Q]=kg.useState(""),[I,_]=kg.useState(0),[t,V]=kg.useState("shallow"),[rr,Pr]=kg.useState(0),[lr,j]=kg.useState(()=>new Set),[p,vr]=kg.useState(null),[m,E]=kg.useState(null),[f,C]=kg.useState("records");kg.useEffect(()=>{let S=setTimeout(()=>Q(J),jF);return()=>clearTimeout(S)},[J]),kg.useEffect(()=>{_(0)},[W,t]),kg.useEffect(()=>{let S=W.trim();if(t==="jsonquery")X({type:"inspect_collection",path:v,jsonqueryFilter:S||void 0,limit:Ih,offset:I*Ih});else X({type:"inspect_collection",path:v,textFilter:S||void 0,deepFilter:t==="deep"||void 0,limit:Ih,offset:I*Ih})},[v,W,t,I,q,rr,X]),kg.useEffect(()=>{let S=(Hr)=>{if(Hr.key==="Escape")A()};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[A]);let Yr=Math.max(1,Math.ceil(u/Ih)),Wr=u===0?0:I*Ih+1,Jr=Math.min(u,(I+1)*Ih),xr=kg.useMemo(()=>{let S=v.match(/\/([^/]+)\.json$/);return S?S[1]:v},[v]),k=kg.useMemo(()=>{if(!h)return null;if(h.scope==="character"&&h.characterName)return`character: ${h.characterName}`;if(h.scope==="chat"&&h.chatName)return`chat: ${h.chatName}`;return null},[h]),s=(S)=>{j((Hr)=>{let Qr=new Set(Hr);return Qr.add(S),Qr}),setTimeout(()=>{j((Hr)=>{if(!Hr.has(S))return Hr;let Qr=new Set(Hr);return Qr.delete(S),Qr})},fF)},hr=async(S)=>{if(await QP(String(S.id)))s(`${S.id}:id`)},or=async(S)=>{if(await QP(JSON.stringify(S,null,2)))s(`${S.id}:json`)};kg.useEffect(()=>{if(m===null)return;let S=setTimeout(()=>E(null),aF);return()=>clearTimeout(S)},[m]);let Mr=(S)=>{let Hr=String(S.id);if(m===Hr)X({type:"delete_record",path:v,recordId:Hr}),E(null);else E(Hr)};kg.useEffect(()=>{E(null),vr(null)},[I,W,t,v]),kg.useEffect(()=>{C("records")},[v]),kg.useEffect(()=>{if(f!=="stats")return;X({type:"analyze_collection",path:v})},[f,v,q,rr,X]);let T=a.jsxDEV("div",{className:"ls-modal-overlay",onClick:(S)=>{if(S.target===S.currentTarget)A()},children:a.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(S)=>S.stopPropagation(),children:[a.jsxDEV("div",{className:"ls-modal-header",children:[a.jsxDEV("span",{className:"ls-modal-title",children:[a.jsxDEV(dv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-title-name",children:xr},void 0,!1,void 0,this),k&&a.jsxDEV("span",{className:"ls-inspect-title-path",title:v,style:{color:"var(--lumiverse-accent)"},children:k},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-title-path",title:v,children:v},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-modal-close",onClick:()=>Pr((S)=>S+1),title:"Refresh records",style:{marginRight:4},children:a.jsxDEV(M1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-modal-close",onClick:A,title:"Close (Esc)",children:a.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[a.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="records",onClick:()=>C("records"),children:[a.jsxDEV(yw,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),a.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":f==="stats",onClick:()=>C("stats"),children:[a.jsxDEV(Ml,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),f==="records"&&a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{className:"ls-inspect-toolbar",children:[a.jsxDEV("div",{className:"ls-inspect-search",children:[a.jsxDEV(Xl,{size:12},void 0,!1,void 0,this),a.jsxDEV("input",{type:t==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:t==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":t==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:J,onChange:(S)=>Y(S.target.value),autoFocus:!0,spellCheck:t!=="jsonquery",autoCorrect:t==="jsonquery"?"off":"on",autoCapitalize:t==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),a.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":t==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>V("shallow"),children:a.jsxDEV(Xl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":t==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>V("deep"),children:a.jsxDEV(Wl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":t==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>V("jsonquery"),children:a.jsxDEV(Ro,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-pager",children:[a.jsxDEV("span",{className:"ls-inspect-pager-status",children:u===0?"No matching records":a.jsxDEV(a.Fragment,{children:["Showing ",a.jsxDEV("strong",{children:Wr},void 0,!1,void 0,this),"–",a.jsxDEV("strong",{children:Jr},void 0,!1,void 0,this)," of ",a.jsxDEV("strong",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>_((S)=>Math.max(0,S-1)),disabled:I===0,title:"Previous page",children:a.jsxDEV(Sw,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>_((S)=>Math.min(Yr-1,S+1)),disabled:I>=Yr-1,title:"Next page",children:a.jsxDEV(A1,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),H&&a.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[a.jsxDEV(tv,{size:12},void 0,!1,void 0,this),a.jsxDEV("span",{children:H},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-body",children:e===null?a.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):e.length===0?a.jsxDEV("div",{className:"ls-inspect-empty",children:u===0&&W?a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{children:["No records match “",W,"”"]},void 0,!0,void 0,this),a.jsxDEV("button",{onClick:()=>Y(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):u===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):a.jsxDEV("div",{className:"ls-inspect-records",children:e.map((S)=>{let Hr=String(S.id),Qr=lr.has(`${S.id}:id`),Rr=lr.has(`${S.id}:json`);return a.jsxDEV("div",{className:"ls-inspect-record",children:[a.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${Hr}`,children:[a.jsxDEV("code",{children:[Hr.slice(0,12),"…"]},void 0,!0,void 0,this),a.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",a.jsxDEV("time",{title:new Date(S.createdAt).toISOString(),children:I2(S.createdAt)},void 0,!1,void 0,this),S.updatedAt!==S.createdAt&&a.jsxDEV(a.Fragment,{children:[" · ","updated ",a.jsxDEV("time",{title:new Date(S.updatedAt).toISOString(),children:I2(S.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:Qr?"Copied!":"Copy ID",onClick:()=>hr(S),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Qr?"var(--lumiverse-accent)":"inherit",opacity:Qr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(pv,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:Rr?"Copied!":"Copy full JSON",onClick:()=>or(S),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Rr?"var(--lumiverse-accent)":"inherit",opacity:Rr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(Z0,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>vr(S),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[a.jsxDEV(sv,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),a.jsxDEV("button",{className:"ls-inspect-record-action"+(m===Hr?" ls-inspect-record-action-confirm":""),title:m===Hr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Mr(S),style:{background:m===Hr?"rgba(246, 130, 130, 0.18)":"transparent",border:m===Hr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:m===Hr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:m===Hr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:m===Hr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:m===Hr?600:400,borderRadius:3},children:[a.jsxDEV(Lo,{size:11},void 0,!1,void 0,this),m===Hr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:m4(pF(S))}},void 0,!1,void 0,this)]},Hr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f==="stats"&&a.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:O===null?a.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):O.fields.length===0?a.jsxDEV("div",{className:"ls-inspect-empty",children:O.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):a.jsxDEV(rI,{stats:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return a.jsxDEV(a.Fragment,{children:[QY.createPortal(T,document.body),p&&a.jsxDEV(JY,{path:v,record:p,onClose:()=>vr(null),sendToBackend:X},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function pF(v){let{id:h,createdAt:e,updatedAt:u,...H}=v;try{return JSON.stringify(H,null,2)}catch{return String(v)}}var dF={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function sF(v){if(typeof v==="string")return`"${v.length>32?v.slice(0,30)+"…":v}"`;if(v===null)return"null";return String(v)}function zP(v){if(!Number.isFinite(v))return"—";return Number.isInteger(v)?String(v):v.toFixed(2)}var rI=({stats:v})=>{return a.jsxDEV("div",{className:"ls-inspect-stats",children:[a.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",a.jsxDEV("strong",{children:v.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",v.totalRecords===1?"record":"records"," ·"," ",a.jsxDEV("strong",{children:v.fields.length},void 0,!1,void 0,this)," ",v.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-grid",children:v.fields.map((h)=>a.jsxDEV(gI,{field:h,totalRecords:v.totalRecords},h.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},gI=({field:v,totalRecords:h})=>{let e=h===0?0:Math.round(v.presence/h*100),u=Object.entries(v.types);return u.sort((H,O)=>O[1]-H[1]),a.jsxDEV("div",{className:"ls-inspect-stats-card",children:[a.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[a.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:v.name,children:v.name},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${v.presence} of ${h} records`,children:[e,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:u.map(([H,O])=>a.jsxDEV("span",{className:dF[H],children:[H," · ",O]},H,!0,void 0,this))},void 0,!1,void 0,this),v.numericRange&&a.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[a.jsxDEV("span",{children:["min ",a.jsxDEV("strong",{children:zP(v.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),a.jsxDEV("span",{children:["max ",a.jsxDEV("strong",{children:zP(v.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),a.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),a.jsxDEV("span",{children:["mean ",a.jsxDEV("strong",{children:zP(v.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),v.topValues.length>0&&a.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[a.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",v.topValues.length," of ",v.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),a.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:v.topValues.map((H,O)=>a.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(H.value),children:[a.jsxDEV("code",{children:sF(H.value)},void 0,!1,void 0,this),a.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",H.count]},void 0,!0,void 0,this)]},O,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var N2=Or(hg(),1),KY=Or(C5(),1);var ug=Or(rg(),1);function oI(v){if(v.scope==="character"&&v.characterName&&v.characterId)return{label:"Character",name:v.characterName,id:v.characterId};if(v.scope==="chat"&&v.chatName&&v.chatId)return{label:"Chat",name:v.chatName,id:v.chatId};return null}var $Y=({target:v,recordCount:h,onConfirm:e,onCancel:u})=>{let H=N2.useRef(null);N2.useEffect(()=>{let q=(A)=>{if(A.key==="Escape")u()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[u]),N2.useEffect(()=>{let q=(A)=>{if(A.key!=="Tab")return;let X=H.current;if(!X)return;let J=Array.from(X.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(J.length===0)return;let Y=J[0],W=J[J.length-1],Q=document.activeElement,I=Q!==null&&X.contains(Q);if(A.shiftKey){if(!I||Q===Y)A.preventDefault(),W.focus()}else if(!I||Q===W)A.preventDefault(),Y.focus()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[]);let O=ug.jsxDEV("div",{className:"ls-modal-overlay",onClick:(q)=>{if(q.target===q.currentTarget)u()},children:ug.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:H,onClick:(q)=>q.stopPropagation(),children:[ug.jsxDEV("div",{className:"ls-modal-header",children:[ug.jsxDEV("span",{className:"ls-modal-title",children:[ug.jsxDEV(Lo,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),ug.jsxDEV("button",{className:"ls-modal-close",onClick:u,title:"Cancel (Esc)",children:ug.jsxDEV(So,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-body",children:[ug.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target",children:[ug.jsxDEV("div",{className:"ls-drop-target-name",children:v.name},void 0,!1,void 0,this),ug.jsxDEV("div",{className:"ls-drop-target-meta",children:[ug.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":v.scope,children:GY[v.scope]},void 0,!1,void 0,this),ug.jsxDEV("span",{className:"ls-drop-target-size",children:B4(v.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let q=oI(v);if(!q)return null;return ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${q.label.toLowerCase()}Id: ${q.id}`,children:[q.label,": ",ug.jsxDEV("strong",{children:q.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),ug.jsxDEV("div",{className:"ls-drop-target-path",title:v.path,children:v.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h===null?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):h>=0?ug.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:h===0?"Collection is currently empty.":ug.jsxDEV(ug.Fragment,{children:["Will delete ",ug.jsxDEV("strong",{children:h.toLocaleString()},void 0,!1,void 0,this)," ",h===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,ug.jsxDEV("div",{className:"ls-drop-warning",children:[ug.jsxDEV(tv,{size:12},void 0,!1,void 0,this),ug.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),ug.jsxDEV("div",{className:"ls-drop-actions",children:[ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:u,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),ug.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:e,children:[ug.jsxDEV(Lo,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return KY.createPortal(O,document.body)};var z1=Or(rg(),1),UY=({variables:v,collections:h,scripts:e,sendToBackend:u,inspectPath:H,inspectRecords:O,inspectTotal:q,inspectError:A,inspectStats:X,inspectRefreshToken:J,onInspect:Y,dropTarget:W,dropTargetCount:Q,onDrop:I,onDropConfirm:_})=>{return z1.jsxDEV(z1.Fragment,{children:[z1.jsxDEV("div",{className:"ls-storage-list",children:[z1.jsxDEV(RY,{variables:v,sendToBackend:u},void 0,!1,void 0,this),z1.jsxDEV(XY,{collections:h,scripts:e,sendToBackend:u,onInspect:Y,onDrop:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),H!==null&&z1.jsxDEV(zY,{path:H,summary:h?.find((t)=>t.path===H),records:O,total:q,error:A,stats:X,refreshToken:J,onClose:()=>Y(null),sendToBackend:u},void 0,!1,void 0,this),W!==null&&z1.jsxDEV($Y,{target:W,recordCount:Q,onConfirm:_,onCancel:()=>I(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ar=Or(rg(),1),LY=({onBackendMessage:v,sendToBackend:h})=>{let[e,u]=zg.useState("manage"),[H,O]=zg.useState([]),[q,A]=zg.useState(l4),[X,J]=zg.useState({characterId:null,characterName:null,chatId:null}),[Y,W]=zg.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[Q,I]=zg.useState([]),[_,t]=zg.useState([]),[V,rr]=zg.useState(null),[Pr,lr]=zg.useState(null),[j,p]=zg.useState(null),[vr,m]=zg.useState(null),[E,f]=zg.useState(0),[C,Yr]=zg.useState(null),[Wr,Jr]=zg.useState(0),[xr,k]=zg.useState(null),[s,hr]=zg.useState(null),[or,Mr]=zg.useState(null),[T,S]=zg.useState({});zg.useEffect(()=>{let Rr=v((Cr)=>{let wr=Cr;switch(wr.type){case"scripts_updated":O(wr.scripts);break;case"script_patched":O((tr)=>tr.map((ar)=>ar.id===wr.script.id?wr.script:ar));break;case"settings_updated":A(wr.settings);break;case"active_context":J({characterId:wr.characterId,characterName:wr.characterName,chatId:wr.chatId}),h({type:"get_variables"});break;case"variables_updated":rr(wr.variables);break;case"collections_list":lr(wr.collections);break;case"collection_records":m((tr)=>{return wr.records}),f(wr.total),Yr(wr.error??null);break;case"collection_stats":k((tr)=>{return wr.stats});break;case"collection_count":Mr((tr)=>{return wr.count});break;case"collections_updated":h({type:"list_collections"}),Jr((tr)=>tr+1);break;case"injections_updated":I(wr.injections);break;case"tools_updated":t(wr.tools);break;case"execution_started":{let tr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};W((ar)=>{let Gg=ar.consoleHistory[wr.scriptId]??[],Fo=Gg.length>0?[...Gg,tr]:Gg;return{...ar,activeScriptId:wr.scriptId,runId:wr.runId,isRunning:!0,consoleHistory:{...ar.consoleHistory,[wr.scriptId]:Fo},scriptExecInfo:{...ar.scriptExecInfo,[wr.scriptId]:{...ar.scriptExecInfo[wr.scriptId],dot:"running"}}}}),S((ar)=>({...ar,[wr.scriptId]:(ar[wr.scriptId]??0)+1}));break}case"console_entry":{let tr=q.consoleHistoryLimit;W((ar)=>{let Gg=ar.consoleHistory[wr.scriptId]??[];if(Gg.length>=tr)return ar;let er=Gg.length===tr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${tr} entries. Clear the console to resume capture.]`}:wr.entry;return{...ar,consoleHistory:{...ar.consoleHistory,[wr.scriptId]:[...Gg,er]}}});break}case"execution_ended":W((tr)=>{let ar=tr.consoleHistory[wr.scriptId]??[],Gg=tr.scriptExecInfo[wr.scriptId],Fo=!wr.success&&wr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:wr.error}]:[],er=!wr.success?!0:Gg?.stickyError??!1,_o=!wr.success||er?"error":"success",Qo=wr.duration??0,cg=wr.success&&Qo===0&&(Gg?.duration??0)>0?Gg.duration:wr.duration;return{...tr,isRunning:!1,consoleHistory:Fo.length?{...tr.consoleHistory,[wr.scriptId]:[...ar,...Fo]}:tr.consoleHistory,scriptExecInfo:{...tr.scriptExecInfo,[wr.scriptId]:{dot:_o,duration:cg,error:wr.error??Gg?.error,stickyError:er}}}});break;case"error":console.warn("[LumiScript]",wr.message);break}});return h({type:"get_scripts"}),h({type:"get_settings"}),h({type:"get_active_context"}),h({type:"get_injections"}),h({type:"get_tools"}),Rr},[v,h]),zg.useEffect(()=>{if(e==="storage")h({type:"list_collections"})},[e,h]),zg.useEffect(()=>{if(Mr(null),s)h({type:"count_collection",path:s.path})},[s,h]);let Hr=zg.useCallback((Rr)=>{W((Cr)=>({...Cr,consoleHistory:{...Cr.consoleHistory,[Rr]:[]}}))},[]),Qr=zg.useCallback((Rr)=>{W((Cr)=>{let wr=Cr.scriptExecInfo[Rr];if(!wr?.stickyError)return Cr;return{...Cr,scriptExecInfo:{...Cr.scriptExecInfo,[Rr]:{...wr,dot:"idle",stickyError:!1}}}})},[]);return Ar.jsxDEV("div",{className:"ls-panel",children:[Ar.jsxDEV("div",{className:"ls-tabs",children:[Ar.jsxDEV("button",{className:`ls-tab-pill${e==="manage"?" ls-active":""}`,onClick:()=>u("manage"),children:[Ar.jsxDEV(Ro,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${e==="status"?" ls-active":""}`,onClick:()=>u("status"),children:[Ar.jsxDEV(Bw,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${e==="storage"?" ls-active":""}`,onClick:()=>u("storage"),children:[Ar.jsxDEV(dv,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[e==="manage"&&Ar.jsxDEV(MY,{scripts:H,activeContext:X,execInfo:Y.scriptExecInfo,activeRunScriptId:Y.activeScriptId,isRunning:Y.isRunning,consoleHistory:Y.consoleHistory,editorFontSize:q.editorFontSize,autosaveDebounceMs:q.autosaveDebounceMs,onClearConsole:Hr,onScriptOpened:Qr,sendToBackend:h},void 0,!1,void 0,this),e==="status"&&Ar.jsxDEV(lI,{scripts:H,execInfo:Y.scriptExecInfo,invocationCounts:T,injections:Q,tools:_,sendToBackend:h},void 0,!1,void 0,this),e==="storage"&&Ar.jsxDEV(UY,{variables:V,collections:Pr,scripts:H,sendToBackend:h,inspectPath:j,inspectRecords:vr,inspectTotal:E,inspectError:C,inspectStats:xr,inspectRefreshToken:Wr,onInspect:(Rr)=>{p(Rr),m(null),f(0),k(null)},dropTarget:s,dropTargetCount:or,onDrop:hr,onDropConfirm:()=>{if(!s)return;let Rr=s.path;if(j===Rr)p(null),m(null),f(0),k(null);h({type:"drop_collection",path:Rr}),hr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},vI={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},lI=({scripts:v,execInfo:h,invocationCounts:e,injections:u,tools:H,sendToBackend:O})=>{let q=v.filter((W)=>W.type==="trigger"&&W.enabled),A=Object.fromEntries(v.map((W)=>[W.id,W.name])),[X,J]=zg.useState(new Set),Y=(W)=>{J((Q)=>{let I=new Set(Q);if(I.has(W))I.delete(W);else I.add(W);return I})};return Ar.jsxDEV("div",{className:"ls-status-list",children:[Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(Ro,{size:10},void 0,!1,void 0,this),"Scripts",q.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:q.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:q.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):q.map((W)=>{let Q=h[W.id],I=Q?.dot??"idle",_={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[I],t=W.triggers??[],V=e[W.id];return Ar.jsxDEV("div",{className:"ls-status-row",children:[Ar.jsxDEV("div",{className:"ls-status-row-main",children:[Ar.jsxDEV("span",{className:_,title:vI[I]},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-name",children:W.name},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-right",children:[V!==void 0&&V>0&&Ar.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${V} time${V!==1?"s":""} this session`,children:["×",V]},void 0,!0,void 0,this),Q?.duration!==void 0&&I!=="running"&&Ar.jsxDEV("span",{className:"ls-status-duration",style:{color:I==="error"?"#ef4444":void 0},children:[Q.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),t.length>0?Ar.jsxDEV("div",{className:"ls-status-events",children:t.map((rr)=>Ar.jsxDEV("span",{className:"ls-event-badge",children:[Ar.jsxDEV(W1,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Ar.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),I==="error"&&Q?.error&&Ar.jsxDEV("div",{className:"ls-status-error-row",children:Ar.jsxDEV("span",{className:"ls-status-error-text",children:Q.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},W.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(w2,{size:10},void 0,!1,void 0,this),"Active Tools",H.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:H.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:H.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):H.map((W)=>Ar.jsxDEV("div",{className:"ls-tool-row",children:[Ar.jsxDEV("div",{className:"ls-tool-name",title:W.description,children:W.name},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-tool-meta",children:[W.council_eligible&&Ar.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:W.scriptId,children:W.scriptName},void 0,!1,void 0,this),Ar.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${W.name}`,title:`Unregister "${W.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>O({type:"unregister_tool",name:W.name}),children:Ar.jsxDEV(Lo,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},W.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(o2,{size:10},void 0,!1,void 0,this),"Active Injections",u.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):u.map((W)=>{let Q=X.has(W.id);return Ar.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>Y(W.id),children:[Ar.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${W.mode}`,title:W.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:W.mode==="intercept"?Ar.jsxDEV(mw,{size:11},void 0,!1,void 0,this):Ar.jsxDEV(Zw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-body",children:[Ar.jsxDEV("div",{className:"ls-inject-header-row",children:[Ar.jsxDEV("span",{className:"ls-inject-id",title:W.id,children:W.id},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-meta",children:[Ar.jsxDEV("span",{className:"ls-inject-role",children:W.role},void 0,!1,void 0,this),W.mode==="intercept"&&W.depth>0&&Ar.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${W.depth} message${W.depth!==1?"s":""}`,children:["d:",W.depth]},void 0,!0,void 0,this),W.ephemeral&&Ar.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Ar.jsxDEV(Kh,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:W.scriptId,children:A[W.scriptId]??W.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-chevron",children:Q?Ar.jsxDEV(Rv,{size:10},void 0,!1,void 0,this):Ar.jsxDEV(Go,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q&&Ar.jsxDEV("div",{className:"ls-inject-content",onClick:(I)=>I.stopPropagation(),children:W.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},W.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var B2=Or(hg(),1);var Zr=Or(rg(),1),nY=({onBackendMessage:v,sendToBackend:h})=>{let[e,u]=B2.useState(l4),[H,O]=B2.useState([]);B2.useEffect(()=>{let J=v((Y)=>{let W=Y;if(W.type==="scripts_updated")O(W.scripts);if(W.type==="settings_updated")u(W.settings)});return h({type:"get_settings"}),h({type:"get_scripts"}),J},[v,h]);let q=H.filter((J)=>J.type==="trigger").length,A=H.filter((J)=>J.type==="library").length,X=(J)=>{h({type:"update_settings",patch:{enabled:J}})};return Zr.jsxDEV("div",{className:"ls-settings",children:[Zr.jsxDEV("div",{className:"ls-settings-header",children:Zr.jsxDEV("span",{className:"ls-settings-title",children:[Zr.jsxDEV(C0,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-toggle-row",children:[Zr.jsxDEV("label",{className:"ls-toggle",children:[Zr.jsxDEV("input",{type:"checkbox",checked:e.enabled,onChange:(J)=>X(J.target.checked)},void 0,!1,void 0,this),Zr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-counts",children:[Zr.jsxDEV("div",{className:"ls-count-card",children:[Zr.jsxDEV(Ro,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-count-num",children:q},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-count-card",children:[Zr.jsxDEV(Jh,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-count-num",children:A},void 0,!1,void 0,this),Zr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-section",children:[Zr.jsxDEV("div",{className:"ls-settings-section-label",children:[Zr.jsxDEV(Kh,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-field",children:[Zr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(e.scriptTimeoutMs/1000),onChange:(J)=>{let Y=Math.max(5,Math.min(300,Number(J.target.value)||60));h({type:"update_settings",patch:{scriptTimeoutMs:Y*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-field",children:[Zr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:e.consoleHistoryLimit,onChange:(J)=>{let Y=Math.max(50,Math.min(2000,Number(J.target.value)||500));h({type:"update_settings",patch:{consoleHistoryLimit:Y}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-section",children:[Zr.jsxDEV("div",{className:"ls-settings-section-label",children:[Zr.jsxDEV(h2,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-field",children:[Zr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:e.editorFontSize,onChange:(J)=>{let Y=Math.max(10,Math.min(24,Number(J.target.value)||12));h({type:"update_settings",patch:{editorFontSize:Y}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-field",children:[Zr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Zr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:e.autosaveDebounceMs,onChange:(J)=>{let Y=Math.max(300,Math.min(5000,Number(J.target.value)||1200));h({type:"update_settings",patch:{autosaveDebounceMs:Y}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-section",children:[Zr.jsxDEV("div",{className:"ls-settings-section-label",children:[Zr.jsxDEV(x0,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-template-field",children:[Zr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Zr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:e.defaultTriggerTemplate,onChange:(J)=>h({type:"update_settings",patch:{defaultTriggerTemplate:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Zr.jsxDEV("div",{className:"ls-settings-template-field",children:[Zr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Zr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:e.defaultLibraryTemplate,onChange:(J)=>h({type:"update_settings",patch:{defaultLibraryTemplate:J.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function hI(v){let h=v?.type;return typeof h==="string"&&h.startsWith("dom_")}var Jo=new Map;function d5(v,h){Jo.set(v,h)}function Tv(v){let h=Jo.get(v);for(let[e,u]of K1)if(u.elementId===v){if(h)h.removeEventListener(u.event,u.handler);K1.delete(e)}Jo.delete(v)}var x2=new Map,m2=new Map,Nh=new Map,Z2=new Map,K1=new Map;function FY(v,h){return`${v}:${h}`}function bI(v){let h=v.target,e={type:v.type};if(h){if(h.id)e.targetId=h.id;if("value"in h)e.targetValue=h.value;if("checked"in h)e.targetChecked=h.checked;if(h.dataset&&Object.keys(h.dataset).length>0){let u={};for(let[H,O]of Object.entries(h.dataset))if(O!==void 0)u[H]=O;e.dataset=u}}if(v instanceof MouseEvent)e.clientX=v.clientX,e.clientY=v.clientY;else if(typeof TouchEvent<"u"&&v instanceof TouchEvent){let u=v.touches[0]??v.changedTouches[0];if(u)e.clientX=u.clientX,e.clientY=u.clientY}if(v instanceof CustomEvent&&v.detail!==void 0)try{JSON.stringify(v.detail),e.detail=v.detail}catch{}return e}function wI(v,h){return`@scope ([data-ls-script="${h}"]) {
${v}
}`}function eI(v,h=5000){let e=document.querySelector(v);if(e)return Promise.resolve(e);return new Promise((u,H)=>{let O=!1,q=new MutationObserver(()=>{let A=document.querySelector(v);if(A&&!O)O=!0,q.disconnect(),u(A)});q.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!O)O=!0,q.disconnect(),H(Error(`waitForElement: timeout for "${v}"`))},h)})}function uI(v){return v.querySelector('[class*="_bubble_"]')}var l0=new Map,iI=50;function HI(v,h,e){if(l0.size>=iI){let u=l0.keys().next().value;if(u)l0.get(u)?.cancel(),l0.delete(u)}l0.set(v,{scriptId:h,cancel:e})}function PI(v){for(let[h,e]of l0)if(e.scriptId===v)e.cancel(),l0.delete(h)}function NY(v,h,e){let u=h((H)=>{if(!hI(H))return;let O=H;switch(O.type){case"dom_inject":{let{scriptId:q,elementId:A,target:X,html:J,position:Y,stableId:W,parentElementId:Q}=O;if(Jo.has(A)){console.warn(`[LumiScript] dom_inject: elementId "${A}" already in elementMap — skipping duplicate insert`);break}let I=`<div data-ls-script="${q}" data-ls-el="${A}">${J}</div>`,_=null;if(Q){let t=Jo.get(Q);if(!t){console.warn(`[LumiScript] dom_inject: parentElementId "${Q}" not in elementMap — drop`);break}let V=t.querySelector(X);if(!V){console.warn(`[LumiScript] dom_inject: selector "${X}" not found within parent "${Q}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=I,V.insertAdjacentElement(Y,rr),_=rr}else _=v.dom.inject(X,I,Y);if(_){if(Jo.set(A,_),x2.set(A,q),W)m2.set(FY(q,W),A)}break}case"dom_inject_at_message":{let{scriptId:q,elementId:A,messageId:X,html:J,position:Y,stableId:W}=O,Q=(rr)=>{let Pr=rr.querySelector("[data-part]"),lr=Pr?.getAttribute("data-part")??"character",j=Pr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",p=Y==="header"?` data-ls-tint="${lr}"`:"",vr=` data-ls-mode="${j}"`,m=`<div data-ls-script="${q}" data-ls-el="${A}"${p}${vr}>${J}</div>`,E,f;if(Y==="header")E=rr,f="afterbegin";else if(Y==="footer"&&j==="minimal")E=rr,f="beforeend";else E=uI(rr)??rr,f="beforeend";let C=v.dom.inject(E,m,f);if(Jo.set(A,C),x2.set(A,q),W)m2.set(FY(q,W),A)},I=`[data-message-id="${X}"]`,_=document.querySelector(I);if(_){Q(_);break}let t=!1;HI(A,q,()=>{t=!0}),eI(I).then((rr)=>{if(l0.delete(A),t)return;Q(rr)}).catch(()=>{l0.delete(A)});break}case"dom_update":{let q=Jo.get(O.elementId);if(!q)break;let A=q.querySelector(`[data-ls-el="${O.elementId}"]`)??q;A.innerHTML=O.html;break}case"dom_remove":{IY(O.elementId);break}case"dom_add_style":{let{scriptId:q,styleId:A,css:X}=O,J=wI(X,q),Y=v.dom.addStyle(J);Nh.set(A,Y),Z2.set(A,q);break}case"dom_remove_style":{let q=Nh.get(O.styleId);if(q)q(),Nh.delete(O.styleId),Z2.delete(O.styleId);break}case"dom_listen":{let{elementId:q,listenerId:A,event:X,preventDefault:J}=O,Y=Jo.get(q);if(!Y)break;let W=(Q)=>{if(J)Q.preventDefault();let I=bI(Q);e({type:"dom_event",elementId:q,listenerId:A,event:X,data:I})};Y.addEventListener(X,W),K1.set(A,{elementId:q,event:X,handler:W});break}case"dom_unlisten":{let q=K1.get(O.listenerId);if(!q)break;let A=Jo.get(q.elementId);if(A)A.removeEventListener(q.event,q.handler);K1.delete(O.listenerId);break}case"dom_cleanup_script":{let{scriptId:q}=O;PI(q);for(let[A,X]of x2)if(X===q)IY(A);for(let[A,X]of Z2)if(X===q){let J=Nh.get(A);if(J)J();Nh.delete(A),Z2.delete(A)}for(let[A]of m2)if(A.startsWith(q+":"))m2.delete(A);break}case"dom_make_draggable":{let{elementId:q,handleSelector:A}=O,X=Jo.get(q);if(!X)break;let J=!1,Y=!1;X.addEventListener("pointerdown",(W)=>{if(W.button!==0)return;if(A&&!W.target.closest(A))return;let Q=X.firstElementChild?.firstElementChild??X.firstElementChild??X,I=Q.getBoundingClientRect();Q.style.transform="none",Q.style.top=`${I.top}px`,Q.style.left=`${I.left}px`,Q.style.bottom="auto",Q.style.right="auto",J=!0,Y=!1;let _=W.clientX-I.left,t=W.clientY-I.top;Q.style.cursor="grabbing";let V=(Pr)=>{if(!J)return;Y=!0,Q.style.top=`${Pr.clientY-t}px`,Q.style.left=`${Pr.clientX-_}px`},rr=()=>{if(!J)return;J=!1,Q.style.cursor="",document.removeEventListener("pointermove",V),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",V),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),W.preventDefault()}),X.addEventListener("click",(W)=>{if(Y)W.stopImmediatePropagation(),W.preventDefault(),Y=!1},!0);break}}});return()=>{u();for(let[,H]of l0)H.cancel();l0.clear();for(let[,H]of K1){let O=Jo.get(H.elementId);if(O)O.removeEventListener(H.event,H.handler)}K1.clear();for(let[,H]of Jo)try{H.remove()}catch{}Jo.clear(),x2.clear(),m2.clear();for(let[,H]of Nh)try{H()}catch{}Nh.clear(),Z2.clear()}}function IY(v){for(let[e,u]of K1)if(u.elementId===v){let H=Jo.get(v);if(H)H.removeEventListener(u.event,u.handler);K1.delete(e)}let h=Jo.get(v);if(h)try{h.remove()}catch{}Jo.delete(v),x2.delete(v)}function OI(v){let h=v?.type;return h==="ls_modal_open"||h==="ls_modal_set_title"||h==="ls_modal_dismiss"}var nl=new Map;function BY(v,h,e){let u=h((H)=>{if(!OI(H))return;let O=H;switch(O.type){case"ls_modal_open":{let{scriptId:q,modalId:A,rootElementId:X,options:J}=O;if(nl.has(A))break;let Y;try{Y=v.ui.showModal({title:J.title,width:J.width,maxHeight:J.maxHeight,persistent:J.persistent})}catch(Q){console.warn("[LumiScript] ctx.ui.showModal failed:",Q),e({type:"ls_modal_dismissed",modalId:A});break}d5(X,Y.root),Y.root.setAttribute("data-ls-script",q),Y.root.setAttribute("data-ls-modal",A);let W={modalId:A,rootElementId:X,handle:Y,echoed:!1};nl.set(A,W),Y.onDismiss(()=>{if(W.echoed)return;W.echoed=!0,Tv(X),nl.delete(A),e({type:"ls_modal_dismissed",modalId:A})}),e({type:"ls_modal_opened",modalId:A});break}case"ls_modal_set_title":{let q=nl.get(O.modalId);if(!q)break;try{q.handle.setTitle(O.title)}catch{}break}case"ls_modal_dismiss":{let q=nl.get(O.modalId);if(!q)break;try{q.handle.dismiss()}catch{if(!q.echoed)q.echoed=!0,Tv(q.rootElementId),nl.delete(O.modalId),e({type:"ls_modal_dismissed",modalId:O.modalId})}break}}});return()=>{u();for(let H of nl.values()){try{H.handle.dismiss()}catch{}Tv(H.rootElementId)}nl.clear()}}function qI(v){return v?.type==="ls_context_menu_show"}function mY(v,h,e){let u=h(async(H)=>{if(!qI(H))return;let O=H,q=null;try{q=(await v.ui.showContextMenu({position:O.options.position,items:O.options.items})).selectedKey}catch(A){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",A)}e({type:"ls_context_menu_result",requestId:O.requestId,selectedKey:q})});return()=>{u()}}function AI(v){let h=v?.type;return h==="ls_input_bar_action_register"||h==="ls_input_bar_action_set_label"||h==="ls_input_bar_action_set_subtitle"||h==="ls_input_bar_action_set_enabled"||h==="ls_input_bar_action_destroy"}var D0=new Map;function MI(v,h){return`${v}:${h}`}function ZY(v,h,e){let u=h((H)=>{if(!AI(H))return;let O=H,q=MI(O.scriptId,O.actionId);switch(O.type){case"ls_input_bar_action_register":{let A=D0.get(q);if(A){try{A.destroy()}catch{}D0.delete(q)}let X;try{X=v.ui.registerInputBarAction({id:O.actionId,label:O.options.label,subtitle:O.options.subtitle,iconSvg:O.options.iconSvg,iconUrl:O.options.iconUrl,enabled:O.options.enabled})}catch(J){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",J);break}D0.set(q,X),X.onClick(()=>{e({type:"ls_input_bar_action_click",scriptId:O.scriptId,actionId:O.actionId})}),e({type:"ls_input_bar_action_registered",scriptId:O.scriptId,actionId:O.actionId});break}case"ls_input_bar_action_set_label":{let A=D0.get(q);if(!A)break;try{A.setLabel(O.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let A=D0.get(q);if(!A)break;if(typeof A.setSubtitle!=="function")break;try{A.setSubtitle(O.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let A=D0.get(q);if(!A)break;try{A.setEnabled(O.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let A=D0.get(q);if(!A)break;try{A.destroy()}catch{}D0.delete(q);break}}});return()=>{u();for(let H of D0.values())try{H.destroy()}catch{}D0.clear()}}function WI(v){let h=v?.type;return h==="ls_float_widget_create"||h==="ls_float_widget_move"||h==="ls_float_widget_set_visible"||h==="ls_float_widget_destroy"}var $1=new Map;function xY(v,h,e){let u=h((H)=>{if(!WI(H))return;let O=H;switch(O.type){case"ls_float_widget_create":{let{scriptId:q,widgetId:A,rootElementId:X,options:J}=O,Y=$1.get(A);if(Y){try{Y.handle.destroy()}catch{}Tv(Y.rootElementId),$1.delete(A)}let W;try{W=v.ui.createFloatWidget({width:J.width,height:J.height,initialPosition:J.initialPosition,snapToEdge:J.snapToEdge,tooltip:J.tooltip,chromeless:J.chromeless})}catch(Q){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",Q);break}d5(X,W.root),W.root.setAttribute("data-ls-script",q),W.root.setAttribute("data-ls-widget",A),$1.set(A,{widgetId:A,rootElementId:X,handle:W}),W.onDragEnd((Q)=>{e({type:"ls_float_widget_drag_end",widgetId:A,x:Q.x,y:Q.y})}),e({type:"ls_float_widget_created",widgetId:A});break}case"ls_float_widget_move":{let q=$1.get(O.widgetId);if(!q)break;try{q.handle.moveTo(O.x,O.y)}catch{}break}case"ls_float_widget_set_visible":{let q=$1.get(O.widgetId);if(!q)break;try{q.handle.setVisible(O.visible)}catch{}break}case"ls_float_widget_destroy":{let q=$1.get(O.widgetId);if(!q)break;try{q.handle.destroy()}catch{}Tv(q.rootElementId),$1.delete(O.widgetId);break}}});return()=>{u();for(let H of $1.values()){try{H.handle.destroy()}catch{}Tv(H.rootElementId)}$1.clear()}}function RI(v){let h=v?.type;return h==="ls_drawer_tab_register"||h==="ls_drawer_tab_set_title"||h==="ls_drawer_tab_set_short_name"||h==="ls_drawer_tab_set_badge"||h==="ls_drawer_tab_activate"||h==="ls_drawer_tab_destroy"}var h0=new Map;function GI(v,h){return`${v}:${h}`}function CY(v,h,e){let u=h((H)=>{if(!RI(H))return;let O=H,q=GI(O.scriptId,O.tabId);switch(O.type){case"ls_drawer_tab_register":{let A=h0.get(q);if(A){try{A.handle.destroy()}catch{}Tv(A.rootElementId),h0.delete(q)}let X;try{X=v.ui.registerDrawerTab({id:O.options.id,title:O.options.title,shortName:O.options.shortName,description:O.options.description,keywords:O.options.keywords,headerTitle:O.options.headerTitle,iconSvg:O.options.iconSvg,iconUrl:O.options.iconUrl})}catch(J){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",J);break}d5(O.rootElementId,X.root),X.root.setAttribute("data-ls-script",O.scriptId),X.root.setAttribute("data-ls-tab",O.tabId),h0.set(q,{scriptId:O.scriptId,tabId:O.tabId,rootElementId:O.rootElementId,handle:X}),X.onActivate(()=>{e({type:"ls_drawer_tab_activated",scriptId:O.scriptId,tabId:O.tabId})}),e({type:"ls_drawer_tab_registered",scriptId:O.scriptId,tabId:O.tabId});break}case"ls_drawer_tab_set_title":{let A=h0.get(q);if(!A)break;try{A.handle.setTitle(O.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let A=h0.get(q);if(!A)break;try{A.handle.setShortName(O.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let A=h0.get(q);if(!A)break;try{A.handle.setBadge(O.badge)}catch{}break}case"ls_drawer_tab_activate":{let A=h0.get(q);if(!A)break;try{A.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let A=h0.get(q);if(!A)break;try{A.handle.destroy()}catch{}Tv(A.rootElementId),h0.delete(q);break}}});return()=>{u();for(let H of h0.values()){try{H.handle.destroy()}catch{}Tv(H.rootElementId)}h0.clear()}}var C2=Or(rg(),1);function hfg(v){let h=[],e=v.dom.addStyle(U7);h.push(e);let u=[],H=v.onBackendMessage((rr)=>{for(let Pr of u)Pr(rr)});h.push(H);let O=(rr)=>{return u.push(rr),()=>{let Pr=u.indexOf(rr);if(Pr!==-1)u.splice(Pr,1)}},q=(rr)=>{v.sendToBackend(rr)},A=NY(v,O,q);h.push(A);let X=BY(v,O,q);h.push(X);let J=mY(v,O,q);h.push(J);let Y=ZY(v,O,q);h.push(Y);let W=xY(v,O,q);h.push(W);let Q=CY(v,O,q);h.push(Q),q({type:"frontend_ready"});let I=v.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),_=$P.createRoot(I.root);_.render(C2.jsxDEV(KP.StrictMode,{children:C2.jsxDEV(LY,{onBackendMessage:O,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>{try{_.unmount()}catch{}try{I.destroy()}catch{}});let t=v.ui.mount("settings_extensions"),V=$P.createRoot(t);return V.render(C2.jsxDEV(KP.StrictMode,{children:C2.jsxDEV(nY,{onBackendMessage:O,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>V.unmount()),()=>{for(let rr of h)try{rr()}catch{}v.dom.cleanup()}}export{hfg as setup};
