var FJ=Object.create;var{getPrototypeOf:NJ,defineProperty:X6,getOwnPropertyNames:ZJ}=Object;var BJ=Object.prototype.hasOwnProperty;function CJ(g){return this[g]}var SJ,TJ,wr=(g,i,t)=>{var h=g!=null&&typeof g==="object";if(h){var u=i?SJ??=new WeakMap:TJ??=new WeakMap,P=u.get(g);if(P)return P}t=g!=null?FJ(NJ(g)):{};let O=i||!g||!g.__esModule?X6(t,"default",{value:g,enumerable:!0}):t;for(let m of ZJ(g))if(!BJ.call(O,m))X6(O,m,{get:CJ.bind(g,m),enumerable:!0});if(h)u.set(g,O);return O};var zv=(g,i)=>()=>(i||g((i={exports:{}}).exports,i),i.exports);var kJ=(g)=>g;function aJ(g,i){this[g]=kJ.bind(null,i)}var DJ=(g,i)=>{for(var t in i)X6(g,t,{get:i[t],enumerable:!0,configurable:!0,set:aJ.bind(i,t)})};var io=zv((cJ,t5)=>{(function(){function g(M,x){Object.defineProperty(h.prototype,M,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",x[0],x[1])}})}function i(M){if(M===null||typeof M!=="object")return null;return M=te&&M[te]||M["@@iterator"],typeof M==="function"?M:null}function t(M,x){M=(M=M.constructor)&&(M.displayName||M.name)||"ReactClass";var er=M+"."+x;hr[er]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",x,M),hr[er]=!0)}function h(M,x,er){this.props=M,this.context=x,this.refs=eg,this.updater=er||Ve}function u(){}function P(M,x,er){this.props=M,this.context=x,this.refs=eg,this.updater=er||Ve}function O(){}function m(M){return""+M}function R(M){try{m(M);var x=!1}catch(Mr){x=!0}if(x){x=console;var er=x.error,br=typeof Symbol==="function"&&Symbol.toStringTag&&M[Symbol.toStringTag]||M.constructor.name||"Object";return er.call(x,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",br),m(M)}}function X(M){if(M==null)return null;if(typeof M==="function")return M.$$typeof===h0?null:M.displayName||M.name||null;if(typeof M==="string")return M;switch(M){case Xr:return"Fragment";case T:return"Profiler";case c:return"StrictMode";case Yr:return"Suspense";case gr:return"SuspenseList";case Po:return"Activity"}if(typeof M==="object")switch(typeof M.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),M.$$typeof){case Kr:return"Portal";case Hr:return M.displayName||"Context";case tr:return(M._context.displayName||"Context")+".Consumer";case _:var x=M.render;return M=M.displayName,M||(M=x.displayName||x.name||"",M=M!==""?"ForwardRef("+M+")":"ForwardRef"),M;case xr:return x=M.displayName||null,x!==null?x:X(M.type)||"Memo";case yr:x=M._payload,M=M._init;try{return X(M(x))}catch(er){}}return null}function W(M){if(M===Xr)return"<>";if(typeof M==="object"&&M!==null&&M.$$typeof===yr)return"<...>";try{var x=X(M);return x?"<"+x+">":"<...>"}catch(er){return"<...>"}}function q(){var M=Tr.A;return M===null?null:M.getOwner()}function G(){return Error("react-stack-top-frame")}function L(M){if(av.call(M,"key")){var x=Object.getOwnPropertyDescriptor(M,"key").get;if(x&&x.isReactWarning)return!1}return M.key!==void 0}function S(M,x){function er(){V1||(V1=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",x))}er.isReactWarning=!0,Object.defineProperty(M,"key",{get:er,configurable:!0})}function I(){var M=X(this.type);return Zn[M]||(Zn[M]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),M=this.props.ref,M!==void 0?M:null}function k(M,x,er,br,Mr,Zr){var Br=er.ref;return M={$$typeof:nr,type:M,key:x,props:er,_owner:br},(Br!==void 0?Br:null)!==null?Object.defineProperty(M,"ref",{enumerable:!1,get:I}):Object.defineProperty(M,"ref",{enumerable:!1,value:null}),M._store={},Object.defineProperty(M._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(M,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(M,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Mr}),Object.defineProperty(M,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Zr}),Object.freeze&&(Object.freeze(M.props),Object.freeze(M)),M}function j(M,x){return x=k(M.type,x,M.props,M._owner,M._debugStack,M._debugTask),M._store&&(x._store.validated=M._store.validated),x}function Pr(M){lr(M)?M._store&&(M._store.validated=1):typeof M==="object"&&M!==null&&M.$$typeof===yr&&(M._payload.status==="fulfilled"?lr(M._payload.value)&&M._payload.value._store&&(M._payload.value._store.validated=1):M._store&&(M._store.validated=1))}function lr(M){return typeof M==="object"&&M!==null&&M.$$typeof===nr}function f(M){var x={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(er){return x[er]})}function s(M,x){return typeof M==="object"&&M!==null&&M.key!=null?(R(M.key),f(""+M.key)):x.toString(36)}function ir(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status==="string"?M.then(O,O):(M.status="pending",M.then(function(x){M.status==="pending"&&(M.status="fulfilled",M.value=x)},function(x){M.status==="pending"&&(M.status="rejected",M.reason=x)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Z(M,x,er,br,Mr){var Zr=typeof M;if(Zr==="undefined"||Zr==="boolean")M=null;var Br=!1;if(M===null)Br=!0;else switch(Zr){case"bigint":case"string":case"number":Br=!0;break;case"object":switch(M.$$typeof){case nr:case Kr:Br=!0;break;case yr:return Br=M._init,Z(Br(M._payload),x,er,br,Mr)}}if(Br){Br=M,Mr=Mr(Br);var lo=br===""?"."+s(Br,0):br;return Oo(Mr)?(er="",lo!=null&&(er=lo.replace(cv,"$&/")+"/"),Z(Mr,x,er,"",function(Ke){return Ke})):Mr!=null&&(lr(Mr)&&(Mr.key!=null&&(Br&&Br.key===Mr.key||R(Mr.key)),er=j(Mr,er+(Mr.key==null||Br&&Br.key===Mr.key?"":(""+Mr.key).replace(cv,"$&/")+"/")+lo),br!==""&&Br!=null&&lr(Br)&&Br.key==null&&Br._store&&!Br._store.validated&&(er._store.validated=2),Mr=er),x.push(Mr)),1}if(Br=0,lo=br===""?".":br+":",Oo(M))for(var zr=0;zr<M.length;zr++)br=M[zr],Zr=lo+s(br,zr),Br+=Z(br,x,er,Zr,Mr);else if(zr=i(M),typeof zr==="function")for(zr===M.entries&&(Dv||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Dv=!0),M=zr.call(M),zr=0;!(br=M.next()).done;)br=br.value,Zr=lo+s(br,zr++),Br+=Z(br,x,er,Zr,Mr);else if(Zr==="object"){if(typeof M.then==="function")return Z(ir(M),x,er,br,Mr);throw x=String(M),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return Br}function y(M,x,er){if(M==null)return M;var br=[],Mr=0;return Z(M,br,"","",function(Zr){return x.call(er,Zr,Mr++)}),br}function p(M){if(M._status===-1){var x=M._ioInfo;x!=null&&(x.start=x.end=performance.now()),x=M._result;var er=x();if(er.then(function(Mr){if(M._status===0||M._status===-1){M._status=1,M._result=Mr;var Zr=M._ioInfo;Zr!=null&&(Zr.end=performance.now()),er.status===void 0&&(er.status="fulfilled",er.value=Mr)}},function(Mr){if(M._status===0||M._status===-1){M._status=2,M._result=Mr;var Zr=M._ioInfo;Zr!=null&&(Zr.end=performance.now()),er.status===void 0&&(er.status="rejected",er.reason=Mr)}}),x=M._ioInfo,x!=null){x.value=er;var br=er.displayName;typeof br==="string"&&(x.name=br)}M._status===-1&&(M._status=0,M._result=er)}if(M._status===1)return x=M._result,x===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,x),"default"in x||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,x),x.default;throw M._result}function N(){var M=Tr.H;return M===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),M}function Rr(){Tr.asyncTransitions--}function qr(M){if(Cn===null)try{var x=("require"+Math.random()).slice(0,7);Cn=(t5&&t5[x]).call(t5,"timers").setImmediate}catch(er){Cn=function(br){_1===!1&&(_1=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Mr=new MessageChannel;Mr.port1.onmessage=br,Mr.port2.postMessage(void 0)}}return Cn(M)}function Wr(M){return 1<M.length&&typeof AggregateError==="function"?AggregateError(M):M[0]}function Cr(M,x){x!==Sn-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Sn=x}function a(M,x,er){var br=Tr.actQueue;if(br!==null)if(br.length!==0)try{or(br),qr(function(){return a(M,x,er)});return}catch(Mr){Tr.thrownErrors.push(Mr)}else Tr.actQueue=null;0<Tr.thrownErrors.length?(br=Wr(Tr.thrownErrors),Tr.thrownErrors.length=0,er(br)):x(M)}function or(M){if(!kn){kn=!0;var x=0;try{for(;x<M.length;x++){var er=M[x];do{Tr.didUsePromise=!1;var br=er(!1);if(br!==null){if(Tr.didUsePromise){M[x]=er,M.splice(0,x);return}er=br}else break}while(1)}M.length=0}catch(Mr){M.splice(0,x+1),Tr.thrownErrors.push(Mr)}finally{kn=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var nr=Symbol.for("react.transitional.element"),Kr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),tr=Symbol.for("react.consumer"),Hr=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),Yr=Symbol.for("react.suspense"),gr=Symbol.for("react.suspense_list"),xr=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),Po=Symbol.for("react.activity"),te=Symbol.iterator,hr={},Ve={isMounted:function(){return!1},enqueueForceUpdate:function(M){t(M,"forceUpdate")},enqueueReplaceState:function(M){t(M,"replaceState")},enqueueSetState:function(M){t(M,"setState")}},Qe=Object.assign,eg={};Object.freeze(eg),h.prototype.isReactComponent={},h.prototype.setState=function(M,x){if(typeof M!=="object"&&typeof M!=="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,x,"setState")},h.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};var fo={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(xi in fo)fo.hasOwnProperty(xi)&&g(xi,fo[xi]);u.prototype=h.prototype,fo=P.prototype=new u,fo.constructor=P,Qe(fo,h.prototype),fo.isPureReactComponent=!0;var Oo=Array.isArray,h0=Symbol.for("react.client.reference"),Tr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},av=Object.prototype.hasOwnProperty,Wo=console.createTask?console.createTask:function(){return null};fo={react_stack_bottom_frame:function(M){return M()}};var V1,hl,Zn={},Bn=fo.react_stack_bottom_frame.bind(fo,G)(),D5=Wo(W(G)),Dv=!1,cv=/\/+/g,Li=typeof reportError==="function"?reportError:function(M){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M==="object"&&M!==null&&typeof M.message==="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(x))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",M);return}console.error(M)},_1=!1,Cn=null,Sn=0,Tn=!1,kn=!1,b0=typeof queueMicrotask==="function"?function(M){queueMicrotask(function(){return queueMicrotask(M)})}:qr;fo=Object.freeze({__proto__:null,c:function(M){return N().useMemoCache(M)}});var xi={map:y,forEach:function(M,x,er){y(M,function(){x.apply(this,arguments)},er)},count:function(M){var x=0;return y(M,function(){x++}),x},toArray:function(M){return y(M,function(x){return x})||[]},only:function(M){if(!lr(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};cJ.Activity=Po,cJ.Children=xi,cJ.Component=h,cJ.Fragment=Xr,cJ.Profiler=T,cJ.PureComponent=P,cJ.StrictMode=c,cJ.Suspense=Yr,cJ.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tr,cJ.__COMPILER_RUNTIME=fo,cJ.act=function(M){var x=Tr.actQueue,er=Sn;Sn++;var br=Tr.actQueue=x!==null?x:[],Mr=!1;try{var Zr=M()}catch(zr){Tr.thrownErrors.push(zr)}if(0<Tr.thrownErrors.length)throw Cr(x,er),M=Wr(Tr.thrownErrors),Tr.thrownErrors.length=0,M;if(Zr!==null&&typeof Zr==="object"&&typeof Zr.then==="function"){var Br=Zr;return b0(function(){Mr||Tn||(Tn=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(zr,Ke){Mr=!0,Br.then(function(gg){if(Cr(x,er),er===0){try{or(br),qr(function(){return a(gg,zr,Ke)})}catch(u0){Tr.thrownErrors.push(u0)}if(0<Tr.thrownErrors.length){var Ii=Wr(Tr.thrownErrors);Tr.thrownErrors.length=0,Ke(Ii)}}else zr(gg)},function(gg){Cr(x,er),0<Tr.thrownErrors.length?(gg=Wr(Tr.thrownErrors),Tr.thrownErrors.length=0,Ke(gg)):Ke(gg)})}}}var lo=Zr;if(Cr(x,er),er===0&&(or(br),br.length!==0&&b0(function(){Mr||Tn||(Tn=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Tr.actQueue=null),0<Tr.thrownErrors.length)throw M=Wr(Tr.thrownErrors),Tr.thrownErrors.length=0,M;return{then:function(zr,Ke){Mr=!0,er===0?(Tr.actQueue=br,qr(function(){return a(lo,zr,Ke)})):zr(lo)}}},cJ.cache=function(M){return function(){return M.apply(null,arguments)}},cJ.cacheSignal=function(){return null},cJ.captureOwnerStack=function(){var M=Tr.getCurrentStack;return M===null?null:M()},cJ.cloneElement=function(M,x,er){if(M===null||M===void 0)throw Error("The argument must be a React element, but you passed "+M+".");var br=Qe({},M.props),Mr=M.key,Zr=M._owner;if(x!=null){var Br;r:{if(av.call(x,"ref")&&(Br=Object.getOwnPropertyDescriptor(x,"ref").get)&&Br.isReactWarning){Br=!1;break r}Br=x.ref!==void 0}Br&&(Zr=q()),L(x)&&(R(x.key),Mr=""+x.key);for(lo in x)!av.call(x,lo)||lo==="key"||lo==="__self"||lo==="__source"||lo==="ref"&&x.ref===void 0||(br[lo]=x[lo])}var lo=arguments.length-2;if(lo===1)br.children=er;else if(1<lo){Br=Array(lo);for(var zr=0;zr<lo;zr++)Br[zr]=arguments[zr+2];br.children=Br}br=k(M.type,Mr,br,Zr,M._debugStack,M._debugTask);for(Mr=2;Mr<arguments.length;Mr++)Pr(arguments[Mr]);return br},cJ.createContext=function(M){return M={$$typeof:Hr,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:tr,_context:M},M._currentRenderer=null,M._currentRenderer2=null,M},cJ.createElement=function(M,x,er){for(var br=2;br<arguments.length;br++)Pr(arguments[br]);br={};var Mr=null;if(x!=null)for(zr in hl||!("__self"in x)||"key"in x||(hl=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),L(x)&&(R(x.key),Mr=""+x.key),x)av.call(x,zr)&&zr!=="key"&&zr!=="__self"&&zr!=="__source"&&(br[zr]=x[zr]);var Zr=arguments.length-2;if(Zr===1)br.children=er;else if(1<Zr){for(var Br=Array(Zr),lo=0;lo<Zr;lo++)Br[lo]=arguments[lo+2];Object.freeze&&Object.freeze(Br),br.children=Br}if(M&&M.defaultProps)for(zr in Zr=M.defaultProps,Zr)br[zr]===void 0&&(br[zr]=Zr[zr]);Mr&&S(br,typeof M==="function"?M.displayName||M.name||"Unknown":M);var zr=1e4>Tr.recentlyCreatedOwnerStacks++;return k(M,Mr,br,q(),zr?Error("react-stack-top-frame"):Bn,zr?Wo(W(M)):D5)},cJ.createRef=function(){var M={current:null};return Object.seal(M),M},cJ.forwardRef=function(M){M!=null&&M.$$typeof===xr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof M!=="function"?console.error("forwardRef requires a render function but was given %s.",M===null?"null":typeof M):M.length!==0&&M.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",M.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),M!=null&&M.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var x={$$typeof:_,render:M},er;return Object.defineProperty(x,"displayName",{enumerable:!1,configurable:!0,get:function(){return er},set:function(br){er=br,M.name||M.displayName||(Object.defineProperty(M,"name",{value:br}),M.displayName=br)}}),x},cJ.isValidElement=lr,cJ.lazy=function(M){M={_status:-1,_result:M};var x={$$typeof:yr,_payload:M,_init:p},er={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return M._ioInfo=er,x._debugInfo=[{awaited:er}],x},cJ.memo=function(M,x){M==null&&console.error("memo: The first argument must be a component. Instead received: %s",M===null?"null":typeof M),x={$$typeof:xr,type:M,compare:x===void 0?null:x};var er;return Object.defineProperty(x,"displayName",{enumerable:!1,configurable:!0,get:function(){return er},set:function(br){er=br,M.name||M.displayName||(Object.defineProperty(M,"name",{value:br}),M.displayName=br)}}),x},cJ.startTransition=function(M){var x=Tr.T,er={};er._updatedFibers=new Set,Tr.T=er;try{var br=M(),Mr=Tr.S;Mr!==null&&Mr(er,br),typeof br==="object"&&br!==null&&typeof br.then==="function"&&(Tr.asyncTransitions++,br.then(Rr,Rr),br.then(O,Li))}catch(Zr){Li(Zr)}finally{x===null&&er._updatedFibers&&(M=er._updatedFibers.size,er._updatedFibers.clear(),10<M&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),x!==null&&er.types!==null&&(x.types!==null&&x.types!==er.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),x.types=er.types),Tr.T=x}},cJ.unstable_useCacheRefresh=function(){return N().useCacheRefresh()},cJ.use=function(M){return N().use(M)},cJ.useActionState=function(M,x,er){return N().useActionState(M,x,er)},cJ.useCallback=function(M,x){return N().useCallback(M,x)},cJ.useContext=function(M){var x=N();return M.$$typeof===tr&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),x.useContext(M)},cJ.useDebugValue=function(M,x){return N().useDebugValue(M,x)},cJ.useDeferredValue=function(M,x){return N().useDeferredValue(M,x)},cJ.useEffect=function(M,x){return M==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),N().useEffect(M,x)},cJ.useEffectEvent=function(M){return N().useEffectEvent(M)},cJ.useId=function(){return N().useId()},cJ.useImperativeHandle=function(M,x,er){return N().useImperativeHandle(M,x,er)},cJ.useInsertionEffect=function(M,x){return M==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),N().useInsertionEffect(M,x)},cJ.useLayoutEffect=function(M,x){return M==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),N().useLayoutEffect(M,x)},cJ.useMemo=function(M,x){return N().useMemo(M,x)},cJ.useOptimistic=function(M,x){return N().useOptimistic(M,x)},cJ.useReducer=function(M,x,er){return N().useReducer(M,x,er)},cJ.useRef=function(M){return N().useRef(M)},cJ.useState=function(M){return N().useState(M)},cJ.useSyncExternalStore=function(M,x,er){return N().useSyncExternalStore(M,x,er)},cJ.useTransition=function(){return N().useTransition()},cJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var MM=zv((yJ)=>{(function(){function g(){if(f=!1,y){var a=yJ.unstable_now();Rr=a;var or=!0;try{r:{Pr=!1,lr&&(lr=!1,ir(p),p=-1),j=!0;var nr=k;try{o:{P(a);for(I=t(G);I!==null&&!(I.expirationTime>a&&m());){var Kr=I.callback;if(typeof Kr==="function"){I.callback=null,k=I.priorityLevel;var Xr=Kr(I.expirationTime<=a);if(a=yJ.unstable_now(),typeof Xr==="function"){I.callback=Xr,P(a),or=!0;break o}I===t(G)&&h(G),P(a)}else h(G);I=t(G)}if(I!==null)or=!0;else{var c=t(L);c!==null&&R(O,c.startTime-a),or=!1}}break r}finally{I=null,k=nr,j=!1}or=void 0}}finally{or?qr():y=!1}}}function i(a,or){var nr=a.length;a.push(or);r:for(;0<nr;){var Kr=nr-1>>>1,Xr=a[Kr];if(0<u(Xr,or))a[Kr]=or,a[nr]=Xr,nr=Kr;else break r}}function t(a){return a.length===0?null:a[0]}function h(a){if(a.length===0)return null;var or=a[0],nr=a.pop();if(nr!==or){a[0]=nr;r:for(var Kr=0,Xr=a.length,c=Xr>>>1;Kr<c;){var T=2*(Kr+1)-1,tr=a[T],Hr=T+1,_=a[Hr];if(0>u(tr,nr))Hr<Xr&&0>u(_,tr)?(a[Kr]=_,a[Hr]=nr,Kr=Hr):(a[Kr]=tr,a[T]=nr,Kr=T);else if(Hr<Xr&&0>u(_,nr))a[Kr]=_,a[Hr]=nr,Kr=Hr;else break r}}return or}function u(a,or){var nr=a.sortIndex-or.sortIndex;return nr!==0?nr:a.id-or.id}function P(a){for(var or=t(L);or!==null;){if(or.callback===null)h(L);else if(or.startTime<=a)h(L),or.sortIndex=or.expirationTime,i(G,or);else break;or=t(L)}}function O(a){if(lr=!1,P(a),!Pr)if(t(G)!==null)Pr=!0,y||(y=!0,qr());else{var or=t(L);or!==null&&R(O,or.startTime-a)}}function m(){return f?!0:yJ.unstable_now()-Rr<N?!1:!0}function R(a,or){p=s(function(){a(yJ.unstable_now())},or)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),yJ.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var X=performance;yJ.unstable_now=function(){return X.now()}}else{var W=Date,q=W.now();yJ.unstable_now=function(){return W.now()-q}}var G=[],L=[],S=1,I=null,k=3,j=!1,Pr=!1,lr=!1,f=!1,s=typeof setTimeout==="function"?setTimeout:null,ir=typeof clearTimeout==="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null,y=!1,p=-1,N=5,Rr=-1;if(typeof Z==="function")var qr=function(){Z(g)};else if(typeof MessageChannel<"u"){var Wr=new MessageChannel,Cr=Wr.port2;Wr.port1.onmessage=g,qr=function(){Cr.postMessage(null)}}else qr=function(){s(g,0)};yJ.unstable_IdlePriority=5,yJ.unstable_ImmediatePriority=1,yJ.unstable_LowPriority=4,yJ.unstable_NormalPriority=3,yJ.unstable_Profiling=null,yJ.unstable_UserBlockingPriority=2,yJ.unstable_cancelCallback=function(a){a.callback=null},yJ.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<a?Math.floor(1000/a):5},yJ.unstable_getCurrentPriorityLevel=function(){return k},yJ.unstable_next=function(a){switch(k){case 1:case 2:case 3:var or=3;break;default:or=k}var nr=k;k=or;try{return a()}finally{k=nr}},yJ.unstable_requestPaint=function(){f=!0},yJ.unstable_runWithPriority=function(a,or){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var nr=k;k=a;try{return or()}finally{k=nr}},yJ.unstable_scheduleCallback=function(a,or,nr){var Kr=yJ.unstable_now();switch(typeof nr==="object"&&nr!==null?(nr=nr.delay,nr=typeof nr==="number"&&0<nr?Kr+nr:Kr):nr=Kr,a){case 1:var Xr=-1;break;case 2:Xr=250;break;case 5:Xr=1073741823;break;case 4:Xr=1e4;break;default:Xr=5000}return Xr=nr+Xr,a={id:S++,callback:or,priorityLevel:a,startTime:nr,expirationTime:Xr,sortIndex:-1},nr>Kr?(a.sortIndex=nr,i(L,a),t(G)===null&&a===t(L)&&(lr?(ir(p),p=-1):lr=!0,R(O,nr-Kr))):(a.sortIndex=Xr,i(G,a),Pr||j||(Pr=!0,y||(y=!0,qr()))),a},yJ.unstable_shouldYield=m,yJ.unstable_wrapCallback=function(a){var or=k;return function(){var nr=k;k=or;try{return a.apply(this,arguments)}finally{k=nr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var RM=zv((VJ)=>{var Y6=wr(io());(function(){function g(){}function i(W){return""+W}function t(W,q,G){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{i(L);var S=!1}catch(I){S=!0}return S&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&L[Symbol.toStringTag]||L.constructor.name||"Object"),i(L)),{$$typeof:R,key:L==null?null:""+L,children:W,containerInfo:q,implementation:G}}function h(W,q){if(W==="font")return"";if(typeof q==="string")return q==="use-credentials"?q:""}function u(W){return W===null?"`null`":W===void 0?"`undefined`":W===""?"an empty string":'something with type "'+typeof W+'"'}function P(W){return W===null?"`null`":W===void 0?"`undefined`":W===""?"an empty string":typeof W==="string"?JSON.stringify(W):typeof W==="number"?"`"+W+"`":'something with type "'+typeof W+'"'}function O(){var W=X.H;return W===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),W}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var m={d:{f:g,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},R=Symbol.for("react.portal"),X=Y6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),VJ.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,VJ.createPortal=function(W,q){var G=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error("Target container is not a DOM element.");return t(W,q,null,G)},VJ.flushSync=function(W){var q=X.T,G=m.p;try{if(X.T=null,m.p=2,W)return W()}finally{X.T=q,m.p=G,m.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},VJ.preconnect=function(W,q){typeof W==="string"&&W?q!=null&&typeof q!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",P(q)):q!=null&&typeof q.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",u(q.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(W)),typeof W==="string"&&(q?(q=q.crossOrigin,q=typeof q==="string"?q==="use-credentials"?q:"":void 0):q=null,m.d.C(W,q))},VJ.prefetchDNS=function(W){if(typeof W!=="string"||!W)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(W));else if(1<arguments.length){var q=arguments[1];typeof q==="object"&&q.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",P(q))}typeof W==="string"&&m.d.D(W)},VJ.preinit=function(W,q){if(typeof W==="string"&&W?q==null||typeof q!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",P(q)):q.as!=="style"&&q.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',P(q.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",u(W)),typeof W==="string"&&q&&typeof q.as==="string"){var G=q.as,L=h(G,q.crossOrigin),S=typeof q.integrity==="string"?q.integrity:void 0,I=typeof q.fetchPriority==="string"?q.fetchPriority:void 0;G==="style"?m.d.S(W,typeof q.precedence==="string"?q.precedence:void 0,{crossOrigin:L,integrity:S,fetchPriority:I}):G==="script"&&m.d.X(W,{crossOrigin:L,integrity:S,fetchPriority:I,nonce:typeof q.nonce==="string"?q.nonce:void 0})}},VJ.preinitModule=function(W,q){var G="";if(typeof W==="string"&&W||(G+=" The `href` argument encountered was "+u(W)+"."),q!==void 0&&typeof q!=="object"?G+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&q.as!=="script"&&(G+=" The `as` option encountered was "+P(q.as)+"."),G)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",G);else switch(G=q&&typeof q.as==="string"?q.as:"script",G){case"script":break;default:G=P(G),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',G,W)}if(typeof W==="string")if(typeof q==="object"&&q!==null){if(q.as==null||q.as==="script")G=h(q.as,q.crossOrigin),m.d.M(W,{crossOrigin:G,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0})}else q==null&&m.d.M(W)},VJ.preload=function(W,q){var G="";if(typeof W==="string"&&W||(G+=" The `href` argument encountered was "+u(W)+"."),q==null||typeof q!=="object"?G+=" The `options` argument encountered was "+u(q)+".":typeof q.as==="string"&&q.as||(G+=" The `as` option encountered was "+u(q.as)+"."),G&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',G),typeof W==="string"&&typeof q==="object"&&q!==null&&typeof q.as==="string"){G=q.as;var L=h(G,q.crossOrigin);m.d.L(W,G,{crossOrigin:L,integrity:typeof q.integrity==="string"?q.integrity:void 0,nonce:typeof q.nonce==="string"?q.nonce:void 0,type:typeof q.type==="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority==="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy==="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet==="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes==="string"?q.imageSizes:void 0,media:typeof q.media==="string"?q.media:void 0})}},VJ.preloadModule=function(W,q){var G="";typeof W==="string"&&W||(G+=" The `href` argument encountered was "+u(W)+"."),q!==void 0&&typeof q!=="object"?G+=" The `options` argument encountered was "+u(q)+".":q&&("as"in q)&&typeof q.as!=="string"&&(G+=" The `as` option encountered was "+u(q.as)+"."),G&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',G),typeof W==="string"&&(q?(G=h(q.as,q.crossOrigin),m.d.m(W,{as:typeof q.as==="string"&&q.as!=="script"?q.as:void 0,crossOrigin:G,integrity:typeof q.integrity==="string"?q.integrity:void 0})):m.d.m(W))},VJ.requestFormReset=function(W){m.d.r(W)},VJ.unstable_batchedUpdates=function(W,q){return W(q)},VJ.useFormState=function(W,q,G){return O().useFormState(W,q,G)},VJ.useFormStatus=function(){return O().useHostTransitionStatus()},VJ.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var Kv=zv((HI,WM)=>{WM.exports=RM()});var GM=zv((_J)=>{var no=wr(MM()),Vt=wr(io()),J6=wr(Kv());(function(){function g(r,o){for(r=r.memoizedState;r!==null&&0<o;)r=r.next,o--;return r}function i(r,o,e,l){if(e>=o.length)return l;var n=o[e],v=ie(r)?r.slice():fr({},r);return v[n]=i(r[n],o,e+1,l),v}function t(r,o,e){if(o.length!==e.length)console.warn("copyWithRename() expects paths of the same length");else{for(var l=0;l<e.length-1;l++)if(o[l]!==e[l]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return h(r,o,e,0)}}function h(r,o,e,l){var n=o[l],v=ie(r)?r.slice():fr({},r);return l+1===o.length?(v[e[l]]=v[n],ie(v)?v.splice(n,1):delete v[n]):v[n]=h(r[n],o,e,l+1),v}function u(r,o,e){var l=o[e],n=ie(r)?r.slice():fr({},r);if(e+1===o.length)return ie(n)?n.splice(l,1):delete n[l],n;return n[l]=u(r[l],o,e+1),n}function P(){return!1}function O(){return null}function m(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function R(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function X(){}function W(){}function q(r){var o=[];return r.forEach(function(e){o.push(e)}),o.sort().join(", ")}function G(r,o,e,l){return new XG(r,o,e,l)}function L(r,o){r.context===si&&(D2(r.current,2,o,r,null,null),gt())}function S(r,o){if(Ig!==null){var e=o.staleFamilies;o=o.updatedFamilies,B0(),JP(r.current,o,e),gt()}}function I(r){Ig=r}function k(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function j(r){var o=r,e=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(e=o.return),r=o.return;while(r)}return o.tag===3?e:null}function Pr(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function lr(r){if(r.tag===31){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function f(r){if(j(r)!==r)throw Error("Unable to find node on an unmounted component.")}function s(r){var o=r.alternate;if(!o){if(o=j(r),o===null)throw Error("Unable to find node on an unmounted component.");return o!==r?null:r}for(var e=r,l=o;;){var n=e.return;if(n===null)break;var v=n.alternate;if(v===null){if(l=n.return,l!==null){e=l;continue}break}if(n.child===v.child){for(v=n.child;v;){if(v===e)return f(n),r;if(v===l)return f(n),o;v=v.sibling}throw Error("Unable to find node on an unmounted component.")}if(e.return!==l.return)e=n,l=v;else{for(var b=!1,w=n.child;w;){if(w===e){b=!0,e=n,l=v;break}if(w===l){b=!0,l=n,e=v;break}w=w.sibling}if(!b){for(w=v.child;w;){if(w===e){b=!0,e=v,l=n;break}if(w===l){b=!0,l=v,e=n;break}w=w.sibling}if(!b)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(e.alternate!==l)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(e.tag!==3)throw Error("Unable to find node on an unmounted component.");return e.stateNode.current===e?r:o}function ir(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r;for(r=r.child;r!==null;){if(o=ir(r),o!==null)return o;r=r.sibling}return null}function Z(r){if(r===null||typeof r!=="object")return null;return r=xA&&r[xA]||r["@@iterator"],typeof r==="function"?r:null}function y(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===cX?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case bt:return"Fragment";case f2:return"Profiler";case eu:return"StrictMode";case j2:return"Suspense";case d2:return"SuspenseList";case s2:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case ht:return"Portal";case Ql:return r.displayName||"Context";case p2:return(r._context.displayName||"Context")+".Consumer";case _0:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case gu:return o=r.displayName||null,o!==null?o:y(r.type)||"Memo";case wg:o=r._payload,r=r._init;try{return y(r(o))}catch(e){}}return null}function p(r){return typeof r.tag==="number"?N(r):typeof r.name==="string"?r.name:null}function N(r){var o=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(o._context.displayName||"Context")+".Consumer";case 10:return o.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return y(o);case 8:return o===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof o==="function")return o.displayName||o.name||null;if(typeof o==="string")return o;break;case 29:if(o=r._debugInfo,o!=null){for(var e=o.length-1;0<=e;e--)if(typeof o[e].name==="string")return o[e].name}if(r.return!==null)return N(r.return)}return null}function Rr(r){return{current:r}}function qr(r,o){0>gi?console.error("Unexpected pop."):(o!==o4[gi]&&console.error("Unexpected Fiber popped."),r.current=r4[gi],r4[gi]=null,o4[gi]=null,gi--)}function Wr(r,o,e){gi++,r4[gi]=r.current,o4[gi]=e,r.current=o}function Cr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function a(r,o){Wr(_i,o,r),Wr(E0,r,r),Wr(Vi,null,r);var e=o.nodeType;switch(e){case 9:case 11:e=e===9?"#document":"#fragment",o=(o=o.documentElement)?(o=o.namespaceURI)?eA(o):qi:qi;break;default:if(e=o.tagName,o=o.namespaceURI)o=eA(o),o=gA(o,e);else switch(e){case"svg":o=ct;break;case"math":o=o5;break;default:o=qi}}e=e.toLowerCase(),e=p8(null,e),e={context:o,ancestorInfo:e},qr(Vi,r),Wr(Vi,e,r)}function or(r){qr(Vi,r),qr(E0,r),qr(_i,r)}function nr(){return Cr(Vi.current)}function Kr(r){r.memoizedState!==null&&Wr(lu,r,r);var o=Cr(Vi.current),e=r.type,l=gA(o.context,e);e=p8(o.ancestorInfo,e),l={context:l,ancestorInfo:e},o!==l&&(Wr(E0,r,r),Wr(Vi,l,r))}function Xr(r){E0.current===r&&(qr(Vi,r),qr(E0,r)),lu.current===r&&(qr(lu,r),Sh._currentValue=Jv)}function c(){}function T(){if(f0===0){IA=console.log,FA=console.info,NA=console.warn,ZA=console.error,BA=console.group,CA=console.groupCollapsed,SA=console.groupEnd;var r={configurable:!0,enumerable:!0,value:c,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}f0++}function tr(){if(f0--,f0===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:fr({},r,{value:IA}),info:fr({},r,{value:FA}),warn:fr({},r,{value:NA}),error:fr({},r,{value:ZA}),group:fr({},r,{value:BA}),groupCollapsed:fr({},r,{value:CA}),groupEnd:fr({},r,{value:SA})})}0>f0&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Hr(r){var o=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=o,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),o=r.indexOf(`
`),o!==-1&&(r=r.slice(o+1)),o=r.indexOf("react_stack_bottom_frame"),o!==-1&&(o=r.lastIndexOf(`
`,o)),o!==-1)r=r.slice(0,o);else return"";return r}function _(r){if(e4===void 0)try{throw Error()}catch(e){var o=e.stack.trim().match(/\n( *(at )?)/);e4=o&&o[1]||"",TA=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+e4+r+TA}function Yr(r,o){if(!r||g4)return"";var e=l4.get(r);if(e!==void 0)return e;g4=!0,e=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var l=null;l=C.H,C.H=null,T();try{var n={DetermineComponentFrameRoot:function(){try{if(o){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(vr){var F=vr}Reflect.construct(r,[],J)}else{try{J.call()}catch(vr){F=vr}r.call(J.prototype)}}else{try{throw Error()}catch(vr){F=vr}(J=r())&&typeof J.catch==="function"&&J.catch(function(){})}}catch(vr){if(vr&&F&&typeof vr.stack==="string")return[vr.stack,F.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=n.DetermineComponentFrameRoot(),w=b[0],A=b[1];if(w&&A){var H=w.split(`
`),U=A.split(`
`);for(b=v=0;v<H.length&&!H[v].includes("DetermineComponentFrameRoot");)v++;for(;b<U.length&&!U[b].includes("DetermineComponentFrameRoot");)b++;if(v===H.length||b===U.length)for(v=H.length-1,b=U.length-1;1<=v&&0<=b&&H[v]!==U[b];)b--;for(;1<=v&&0<=b;v--,b--)if(H[v]!==U[b]){if(v!==1||b!==1)do if(v--,b--,0>b||H[v]!==U[b]){var $=`
`+H[v].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),typeof r==="function"&&l4.set(r,$),$}while(1<=v&&0<=b);break}}}finally{g4=!1,C.H=l,tr(),Error.prepareStackTrace=e}return H=(H=r?r.displayName||r.name:"")?_(H):"",typeof r==="function"&&l4.set(r,H),H}function gr(r,o){switch(r.tag){case 26:case 27:case 5:return _(r.type);case 16:return _("Lazy");case 13:return r.child!==o&&o!==null?_("Suspense Fallback"):_("Suspense");case 19:return _("SuspenseList");case 0:case 15:return Yr(r.type,!1);case 11:return Yr(r.type.render,!1);case 1:return Yr(r.type,!0);case 31:return _("Activity");default:return""}}function xr(r){try{var o="",e=null;do{o+=gr(r,e);var l=r._debugInfo;if(l)for(var n=l.length-1;0<=n;n--){var v=l[n];if(typeof v.name==="string"){var b=o;r:{var{name:w,env:A,debugLocation:H}=v;if(H!=null){var U=Hr(H),$=U.lastIndexOf(`
`),J=$===-1?U:U.slice($+1);if(J.indexOf(w)!==-1){var F=`
`+J;break r}}F=_(w+(A?" ["+A+"]":""))}o=b+F}}e=r,r=r.return}while(r);return o}catch(vr){return`
Error generating stack: `+vr.message+`
`+vr.stack}}function yr(r){return(r=r?r.displayName||r.name:"")?_(r):""}function Po(){if(Pg===null)return null;var r=Pg._debugOwner;return r!=null?p(r):null}function te(){if(Pg===null)return"";var r=Pg;try{var o="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:o+=_(r.type);break;case 13:o+=_("Suspense");break;case 19:o+=_("SuspenseList");break;case 31:o+=_("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||o!==""||(o+=yr(r.type));break;case 11:r._debugOwner||o!==""||(o+=yr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var e=r;r=e._debugOwner;var l=e._debugStack;if(r&&l){var n=Hr(l);n!==""&&(o+=`
`+n)}}else if(r.debugStack!=null){var v=r.debugStack;(r=r.owner)&&v&&(o+=`
`+Hr(v))}else break;var b=o}catch(w){b=`
Error generating stack: `+w.message+`
`+w.stack}return b}function hr(r,o,e,l,n,v,b){var w=Pg;Ve(r);try{return r!==null&&r._debugTask?r._debugTask.run(o.bind(null,e,l,n,v,b)):o(e,l,n,v,b)}finally{Ve(w)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function Ve(r){C.getCurrentStack=r===null?null:te,Kl=!1,Pg=r}function Qe(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function eg(r){try{return fo(r),!1}catch(o){return!0}}function fo(r){return""+r}function Oo(r,o){if(eg(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",o,Qe(r)),fo(r)}function h0(r,o){if(eg(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",o,Qe(r)),fo(r)}function Tr(r){if(eg(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",Qe(r)),fo(r)}function av(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(o.isDisabled)return!0;if(!o.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{wt=o.inject(r),$e=o}catch(e){console.error("React instrumentation encountered an error: %o.",e)}return o.checkDCE?!0:!1}function Wo(r){if(typeof jX==="function"&&dX(r),$e&&typeof $e.setStrictMode==="function")try{$e.setStrictMode(wt,r)}catch(o){Ul||(Ul=!0,console.error("React instrumentation encountered an error: %o",o))}}function V1(r){return r>>>=0,r===0?32:31-(sX(r)/rY|0)|0}function hl(r){var o=r&42;if(o!==0)return o;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Zn(r,o,e){var l=r.pendingLanes;if(l===0)return 0;var n=0,v=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var w=l&134217727;return w!==0?(l=w&~v,l!==0?n=hl(l):(b&=w,b!==0?n=hl(b):e||(e=w&~r,e!==0&&(n=hl(e))))):(w=l&~v,w!==0?n=hl(w):b!==0?n=hl(b):e||(e=l&~r,e!==0&&(n=hl(e)))),n===0?0:o!==0&&o!==n&&(o&v)===0&&(v=n&-n,e=o&-o,v>=e||v===32&&(e&4194048)!==0)?o:n}function Bn(r,o){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&o)===0}function D5(r,o){switch(r){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Dv(){var r=vu;return vu<<=1,(vu&62914560)===0&&(vu=4194304),r}function cv(r){for(var o=[],e=0;31>e;e++)o.push(r);return o}function Li(r,o){r.pendingLanes|=o,o!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function _1(r,o,e,l,n,v){var b=r.pendingLanes;r.pendingLanes=e,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=e,r.entangledLanes&=e,r.errorRecoveryDisabledLanes&=e,r.shellSuspendCounter=0;var{entanglements:w,expirationTimes:A,hiddenUpdates:H}=r;for(e=b&~e;0<e;){var U=31-Ne(e),$=1<<U;w[U]=0,A[U]=-1;var J=H[U];if(J!==null)for(H[U]=null,U=0;U<J.length;U++){var F=J[U];F!==null&&(F.lane&=-536870913)}e&=~$}l!==0&&Cn(r,l,0),v!==0&&n===0&&r.tag!==0&&(r.suspendedLanes|=v&~(b&~o))}function Cn(r,o,e){r.pendingLanes|=o,r.suspendedLanes&=~o;var l=31-Ne(o);r.entangledLanes|=o,r.entanglements[l]=r.entanglements[l]|1073741824|e&261930}function Sn(r,o){var e=r.entangledLanes|=o;for(r=r.entanglements;e;){var l=31-Ne(e),n=1<<l;n&o|r[l]&o&&(r[l]|=o),e&=~n}}function Tn(r,o){var e=o&-o;return e=(e&42)!==0?1:kn(e),(e&(r.suspendedLanes|o))!==0?0:e}function kn(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function b0(r,o,e){if($l)for(r=r.pendingUpdatersLaneMap;0<e;){var l=31-Ne(e),n=1<<l;r[l].add(o),e&=~n}}function xi(r,o){if($l)for(var{pendingUpdatersLaneMap:e,memoizedUpdaters:l}=r;0<o;){var n=31-Ne(o);r=1<<n,n=e[n],0<n.size&&(n.forEach(function(v){var b=v.alternate;b!==null&&l.has(b)||l.add(v)}),n.clear()),o&=~r}}function M(r){return r&=-r,Og!==0&&Og<r?Eg!==0&&Eg<r?(r&134217727)!==0?Ll:tu:Eg:Og}function x(){var r=ho.p;if(r!==0)return r;return r=window.event,r===void 0?Ll:JA(r.type)}function er(r,o){var e=ho.p;try{return ho.p=r,o()}finally{ho.p=e}}function br(r){delete r[Re],delete r[Ze],delete r[h4],delete r[oY],delete r[eY]}function Mr(r){var o=r[Re];if(o)return o;for(var e=r.parentNode;e;){if(o=e[fi]||e[Re]){if(e=o.alternate,o.child!==null||e!==null&&e.child!==null)for(r=uA(r);r!==null;){if(e=r[Re])return e;r=uA(r)}return o}r=e,e=r.parentNode}return null}function Zr(r){if(r=r[Re]||r[fi]){var o=r.tag;if(o===5||o===6||o===13||o===31||o===26||o===27||o===3)return r}return null}function Br(r){var o=r.tag;if(o===5||o===26||o===27||o===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function lo(r){var o=r[kA];return o||(o=r[kA]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function zr(r){r[p0]=!0}function Ke(r,o){gg(r,o),gg(r+"Capture",o)}function gg(r,o){gv[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),gv[r]=o;var e=r.toLowerCase();b4[e]=r,r==="onDoubleClick"&&(b4.ondblclick=r);for(r=0;r<o.length;r++)aA.add(o[r])}function Ii(r,o){gY[o.type]||o.onChange||o.onInput||o.readOnly||o.disabled||o.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),o.onChange||o.readOnly||o.disabled||o.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function u0(r){if(_g.call(cA,r))return!0;if(_g.call(DA,r))return!1;if(lY.test(r))return cA[r]=!0;return DA[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function N8(r,o,e){if(u0(o)){if(!r.hasAttribute(o)){switch(typeof e){case"symbol":case"object":return e;case"function":return e;case"boolean":if(e===!1)return e}return e===void 0?void 0:null}if(r=r.getAttribute(o),r===""&&e===!0)return!0;return Oo(e,o),r===""+e?e:r}}function E1(r,o,e){if(u0(o))if(e===null)r.removeAttribute(o);else{switch(typeof e){case"undefined":case"function":case"symbol":r.removeAttribute(o);return;case"boolean":var l=o.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){r.removeAttribute(o);return}}Oo(e,o),r.setAttribute(o,""+e)}}function f1(r,o,e){if(e===null)r.removeAttribute(o);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}Oo(e,o),r.setAttribute(o,""+e)}}function El(r,o,e,l){if(l===null)r.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(e);return}Oo(l,e),r.setAttributeNS(o,e,""+l)}}function Kg(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Tr(r),r;default:return""}}function Z8(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function rG(r,o,e){var l=Object.getOwnPropertyDescriptor(r.constructor.prototype,o);if(!r.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get==="function"&&typeof l.set==="function"){var{get:n,set:v}=l;return Object.defineProperty(r,o,{configurable:!0,get:function(){return n.call(this)},set:function(b){Tr(b),e=""+b,v.call(this,b)}}),Object.defineProperty(r,o,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(b){Tr(b),e=""+b},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function c5(r){if(!r._valueTracker){var o=Z8(r)?"checked":"value";r._valueTracker=rG(r,o,""+r[o])}}function B8(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var e=o.getValue(),l="";return r&&(l=Z8(r)?r.checked?"true":"false":r.value),r=l,r!==e?(o.setValue(r),!0):!1}function p1(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(o){return r.body}}function Ug(r){return r.replace(iY,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function C8(r,o){o.checked===void 0||o.defaultChecked===void 0||VA||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Po()||"A component",o.type),VA=!0),o.value===void 0||o.defaultValue===void 0||yA||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Po()||"A component",o.type),yA=!0)}function y5(r,o,e,l,n,v,b,w){if(r.name="",b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"?(Oo(b,"type"),r.type=b):r.removeAttribute("type"),o!=null)if(b==="number"){if(o===0&&r.value===""||r.value!=o)r.value=""+Kg(o)}else r.value!==""+Kg(o)&&(r.value=""+Kg(o));else b!=="submit"&&b!=="reset"||r.removeAttribute("value");o!=null?V5(r,b,Kg(o)):e!=null?V5(r,b,Kg(e)):l!=null&&r.removeAttribute("value"),n==null&&v!=null&&(r.defaultChecked=!!v),n!=null&&(r.checked=n&&typeof n!=="function"&&typeof n!=="symbol"),w!=null&&typeof w!=="function"&&typeof w!=="symbol"&&typeof w!=="boolean"?(Oo(w,"name"),r.name=""+Kg(w)):r.removeAttribute("name")}function S8(r,o,e,l,n,v,b,w){if(v!=null&&typeof v!=="function"&&typeof v!=="symbol"&&typeof v!=="boolean"&&(Oo(v,"type"),r.type=v),o!=null||e!=null){if(!(v!=="submit"&&v!=="reset"||o!==void 0&&o!==null)){c5(r);return}e=e!=null?""+Kg(e):"",o=o!=null?""+Kg(o):e,w||o===r.value||(r.value=o),r.defaultValue=o}l=l!=null?l:n,l=typeof l!=="function"&&typeof l!=="symbol"&&!!l,r.checked=w?r.checked:!!l,r.defaultChecked=!!l,b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&typeof b!=="boolean"&&(Oo(b,"name"),r.name=b),c5(r)}function V5(r,o,e){o==="number"&&p1(r.ownerDocument)===r||r.defaultValue===""+e||(r.defaultValue=""+e)}function T8(r,o){o.value==null&&(typeof o.children==="object"&&o.children!==null?Vt.Children.forEach(o.children,function(e){e==null||typeof e==="string"||typeof e==="number"||typeof e==="bigint"||EA||(EA=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):o.dangerouslySetInnerHTML==null||fA||(fA=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),o.selected==null||_A||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),_A=!0)}function k8(){var r=Po();return r?`

Check the render method of \``+r+"`.":""}function yv(r,o,e,l){if(r=r.options,o){o={};for(var n=0;n<e.length;n++)o["$"+e[n]]=!0;for(e=0;e<r.length;e++)n=o.hasOwnProperty("$"+r[e].value),r[e].selected!==n&&(r[e].selected=n),n&&l&&(r[e].defaultSelected=!0)}else{e=""+Kg(e),o=null;for(n=0;n<r.length;n++){if(r[n].value===e){r[n].selected=!0,l&&(r[n].defaultSelected=!0);return}o!==null||r[n].disabled||(o=r[n])}o!==null&&(o.selected=!0)}}function a8(r,o){for(r=0;r<jA.length;r++){var e=jA[r];if(o[e]!=null){var l=ie(o[e]);o.multiple&&!l?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",e,k8()):!o.multiple&&l&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",e,k8())}}o.value===void 0||o.defaultValue===void 0||pA||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),pA=!0)}function D8(r,o){o.value===void 0||o.defaultValue===void 0||dA||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Po()||"A component"),dA=!0),o.children!=null&&o.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function c8(r,o,e){if(o!=null&&(o=""+Kg(o),o!==r.value&&(r.value=o),e==null)){r.defaultValue!==o&&(r.defaultValue=o);return}r.defaultValue=e!=null?""+Kg(e):""}function y8(r,o,e,l){if(o==null){if(l!=null){if(e!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ie(l)){if(1<l.length)throw Error("<textarea> can only have at most one child.");l=l[0]}e=l}e==null&&(e=""),o=e}e=Kg(o),r.defaultValue=e,l=r.textContent,l===e&&l!==""&&l!==null&&(r.value=l),c5(r)}function V8(r,o){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-o?V8(r.children[0],o):r}function lg(r){return"  "+"  ".repeat(r)}function Vv(r){return"+ "+"  ".repeat(r)}function an(r){return"- "+"  ".repeat(r)}function _8(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function w0(r,o){return sA.test(r)?(r=JSON.stringify(r),r.length>o-2?8>o?'{"..."}':"{"+r.slice(0,o-7)+'..."}':"{"+r+"}"):r.length>o?5>o?'{"..."}':r.slice(0,o-3)+"...":r}function j1(r,o,e){var l=120-2*e;if(o===null)return Vv(e)+w0(r,l)+`
`;if(typeof o==="string"){for(var n=0;n<o.length&&n<r.length&&o.charCodeAt(n)===r.charCodeAt(n);n++);return n>l-8&&10<n&&(r="..."+r.slice(n-8),o="..."+o.slice(n-8)),Vv(e)+w0(r,l)+`
`+an(e)+w0(o,l)+`
`}return lg(e)+w0(r,l)+`
`}function _5(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(o,e){return e})}function P0(r,o){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>o?5>o?'"..."':r.slice(0,o-4)+'..."':r;case"object":if(r===null)return"null";if(ie(r))return"[...]";if(r.$$typeof===zl)return(o=y(r.type))?"<"+o+">":"<...>";var e=_5(r);if(e==="Object"){e="",o-=2;for(var l in r)if(r.hasOwnProperty(l)){var n=JSON.stringify(l);if(n!=='"'+l+'"'&&(l=n),o-=l.length-2,n=P0(r[l],15>o?o:15),o-=n.length,0>o){e+=e===""?"...":", ...";break}e+=(e===""?"":",")+l+":"+n}return"{"+e+"}"}return e;case"function":return(o=r.displayName||r.name)?"function "+o:"function";default:return String(r)}}function _v(r,o){return typeof r!=="string"||sA.test(r)?"{"+P0(r,o-2)+"}":r.length>o-2?5>o?'"..."':'"'+r.slice(0,o-5)+'..."':'"'+r+'"'}function E5(r,o,e){var l=120-e.length-r.length,n=[],v;for(v in o)if(o.hasOwnProperty(v)&&v!=="children"){var b=_v(o[v],120-e.length-v.length-1);l-=v.length+b.length+2,n.push(v+"="+b)}return n.length===0?e+"<"+r+`>
`:0<l?e+"<"+r+" "+n.join(" ")+`>
`:e+"<"+r+`
`+e+"  "+n.join(`
`+e+"  ")+`
`+e+`>
`}function oG(r,o,e){var l="",n=fr({},o),v;for(v in r)if(r.hasOwnProperty(v)){delete n[v];var b=120-2*e-v.length-2,w=P0(r[v],b);o.hasOwnProperty(v)?(b=P0(o[v],b),l+=Vv(e)+v+": "+w+`
`,l+=an(e)+v+": "+b+`
`):l+=Vv(e)+v+": "+w+`
`}for(var A in n)n.hasOwnProperty(A)&&(r=P0(n[A],120-2*e-A.length-2),l+=an(e)+A+": "+r+`
`);return l}function eG(r,o,e,l){var n="",v=new Map;for(H in e)e.hasOwnProperty(H)&&v.set(H.toLowerCase(),H);if(v.size===1&&v.has("children"))n+=E5(r,o,lg(l));else{for(var b in o)if(o.hasOwnProperty(b)&&b!=="children"){var w=120-2*(l+1)-b.length-1,A=v.get(b.toLowerCase());if(A!==void 0){v.delete(b.toLowerCase());var H=o[b];A=e[A];var U=_v(H,w);w=_v(A,w),typeof H==="object"&&H!==null&&typeof A==="object"&&A!==null&&_5(H)==="Object"&&_5(A)==="Object"&&(2<Object.keys(H).length||2<Object.keys(A).length||-1<U.indexOf("...")||-1<w.indexOf("..."))?n+=lg(l+1)+b+`={{
`+oG(H,A,l+2)+lg(l+1)+`}}
`:(n+=Vv(l+1)+b+"="+U+`
`,n+=an(l+1)+b+"="+w+`
`)}else n+=lg(l+1)+b+"="+_v(o[b],w)+`
`}v.forEach(function($){if($!=="children"){var J=120-2*(l+1)-$.length-1;n+=an(l+1)+$+"="+_v(e[$],J)+`
`}}),n=n===""?lg(l)+"<"+r+`>
`:lg(l)+"<"+r+`
`+n+lg(l)+`>
`}if(r=e.children,o=o.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(v="",typeof o==="string"||typeof o==="number"||typeof o==="bigint")v=""+o;n+=j1(v,""+r,l+1)}else if(typeof o==="string"||typeof o==="number"||typeof o==="bigint")n=r==null?n+j1(""+o,null,l+1):n+j1(""+o,void 0,l+1);return n}function E8(r,o){var e=_8(r);if(e===null){e="";for(r=r.child;r;)e+=E8(r,o),r=r.sibling;return e}return lg(o)+"<"+e+`>
`}function f5(r,o){var e=V8(r,o);if(e!==r&&(r.children.length!==1||r.children[0]!==e))return lg(o)+`...
`+f5(e,o+1);e="";var l=r.fiber._debugInfo;if(l)for(var n=0;n<l.length;n++){var v=l[n].name;typeof v==="string"&&(e+=lg(o)+"<"+v+`>
`,o++)}if(l="",n=r.fiber.pendingProps,r.fiber.tag===6)l=j1(n,r.serverProps,o),o++;else if(v=_8(r.fiber),v!==null)if(r.serverProps===void 0){l=o;var b=120-2*l-v.length-2,w="";for(H in n)if(n.hasOwnProperty(H)&&H!=="children"){var A=_v(n[H],15);if(b-=H.length+A.length+2,0>b){w+=" ...";break}w+=" "+H+"="+A}l=lg(l)+"<"+v+w+`>
`,o++}else r.serverProps===null?(l=E5(v,n,Vv(o)),o++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(l=eG(v,n,r.serverProps,o),o++);var H="";n=r.fiber.child;for(v=0;n&&v<r.children.length;)b=r.children[v],b.fiber===n?(H+=f5(b,o),v++):H+=E8(n,o),n=n.sibling;n&&0<r.children.length&&(H+=lg(o)+`...
`),n=r.serverTail,r.serverProps===null&&o--;for(r=0;r<n.length;r++)v=n[r],H=typeof v==="string"?H+(an(o)+w0(v,120-2*o)+`
`):H+E5(v.type,v.props,an(o));return e+l+H}function p5(r){try{return`

`+f5(r,0)}catch(o){return""}}function f8(r,o,e){for(var l=o,n=null,v=0;l;)l===r&&(v=0),n={fiber:l,children:n!==null?[n]:[],serverProps:l===o?e:l===r?null:void 0,serverTail:[],distanceFromLeaf:v},v++,l=l.return;return n!==null?p5(n).replaceAll(/^[+-]/gm,">"):""}function p8(r,o){var e=fr({},r||oq),l={tag:o};if(rq.indexOf(o)!==-1&&(e.aTagInScope=null,e.buttonTagInScope=null,e.nobrTagInScope=null),vY.indexOf(o)!==-1&&(e.pTagInButtonScope=null),nY.indexOf(o)!==-1&&o!=="address"&&o!=="div"&&o!=="p"&&(e.listItemTagAutoclosing=null,e.dlItemTagAutoclosing=null),e.current=l,o==="form"&&(e.formTag=l),o==="a"&&(e.aTagInScope=l),o==="button"&&(e.buttonTagInScope=l),o==="nobr"&&(e.nobrTagInScope=l),o==="p"&&(e.pTagInButtonScope=l),o==="li"&&(e.listItemTagAutoclosing=l),o==="dd"||o==="dt")e.dlItemTagAutoclosing=l;return o==="#document"||o==="html"?e.containerTagInScope=null:e.containerTagInScope||(e.containerTagInScope=l),r!==null||o!=="#document"&&o!=="html"&&o!=="body"?e.implicitRootScope===!0&&(e.implicitRootScope=!1):e.implicitRootScope=!0,e}function j8(r,o,e){switch(o){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(e)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!e)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o!=="h1"&&o!=="h2"&&o!=="h3"&&o!=="h4"&&o!=="h5"&&o!=="h6";case"rp":case"rt":return tY.indexOf(o)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return o==null;case"head":return e||o===null;case"html":return e&&o==="#document"||o===null;case"body":return e&&(o==="#document"||o==="html")||o===null}return!0}function gG(r,o){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return o.pTagInButtonScope;case"form":return o.formTag||o.pTagInButtonScope;case"li":return o.listItemTagAutoclosing;case"dd":case"dt":return o.dlItemTagAutoclosing;case"button":return o.buttonTagInScope;case"a":return o.aTagInScope;case"nobr":return o.nobrTagInScope}return null}function d8(r,o){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===o)return r}r=r.return}return null}function j5(r,o){o=o||oq;var e=o.current;if(o=(e=j8(r,e&&e.tag,o.implicitRootScope)?null:e)?null:gG(r,o),o=e||o,!o)return!0;var l=o.tag;if(o=String(!!e)+"|"+r+"|"+l,hu[o])return!1;hu[o]=!0;var n=(o=Pg)?d8(o.return,l):null,v=o!==null&&n!==null?f8(n,o,null):"",b="<"+r+">";return e?(e="",l==="table"&&r==="tr"&&(e+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,b,l,e,v)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,b,l,v),o&&(r=o.return,n===null||r===null||n===r&&r._debugOwner===o._debugOwner||hr(n,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,l,b)})),!1}function d1(r,o,e){if(e||j8("#text",o,!1))return!0;if(e="#text|"+o,hu[e])return!1;hu[e]=!0;var l=(e=Pg)?d8(e,o):null;return e=e!==null&&l!==null?f8(l,e,e.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,o,e):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,o,e),!1}function O0(r,o){if(o){var e=r.firstChild;if(e&&e===r.lastChild&&e.nodeType===3){e.nodeValue=o;return}}r.textContent=o}function lG(r){return r.replace(uY,function(o,e){return e.toUpperCase()})}function s8(r,o,e){var l=o.indexOf("--")===0;l||(-1<o.indexOf("-")?Pt.hasOwnProperty(o)&&Pt[o]||(Pt[o]=!0,console.error("Unsupported style property %s. Did you mean %s?",o,lG(o.replace(bY,"ms-")))):hY.test(o)?Pt.hasOwnProperty(o)&&Pt[o]||(Pt[o]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",o,o.charAt(0).toUpperCase()+o.slice(1))):!lq.test(e)||w4.hasOwnProperty(e)&&w4[e]||(w4[e]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,o,e.replace(lq,""))),typeof e==="number"&&(isNaN(e)?iq||(iq=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",o)):isFinite(e)||nq||(nq=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",o)))),e==null||typeof e==="boolean"||e===""?l?r.setProperty(o,""):o==="float"?r.cssFloat="":r[o]="":l?r.setProperty(o,e):typeof e!=="number"||e===0||vq.has(o)?o==="float"?r.cssFloat=e:(h0(e,o),r[o]=(""+e).trim()):r[o]=e+"px"}function rP(r,o,e){if(o!=null&&typeof o!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(o&&Object.freeze(o),r=r.style,e!=null){if(o){var l={};if(e){for(var n in e)if(e.hasOwnProperty(n)&&!o.hasOwnProperty(n))for(var v=u4[n]||[n],b=0;b<v.length;b++)l[v[b]]=n}for(var w in o)if(o.hasOwnProperty(w)&&(!e||e[w]!==o[w]))for(n=u4[w]||[w],v=0;v<n.length;v++)l[n[v]]=w;w={};for(var A in o)for(n=u4[A]||[A],v=0;v<n.length;v++)w[n[v]]=A;A={};for(var H in l)if(n=l[H],(v=w[H])&&n!==v&&(b=n+","+v,!A[b])){A[b]=!0,b=console;var U=o[n];b.error.call(b,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",U==null||typeof U==="boolean"||U===""?"Removing":"Updating",n,v)}}for(var $ in e)!e.hasOwnProperty($)||o!=null&&o.hasOwnProperty($)||($.indexOf("--")===0?r.setProperty($,""):$==="float"?r.cssFloat="":r[$]="");for(var J in o)H=o[J],o.hasOwnProperty(J)&&e[J]!==H&&s8(r,J,H)}else for(l in o)o.hasOwnProperty(l)&&s8(r,l,o[l])}function m0(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function oP(r){return wY.get(r)||r}function iG(r,o){if(_g.call(mt,o)&&mt[o])return!0;if(OY.test(o)){if(r="aria-"+o.slice(4).toLowerCase(),r=tq.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",o),mt[o]=!0;if(o!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",o,r),mt[o]=!0}if(PY.test(o)){if(r=o.toLowerCase(),r=tq.hasOwnProperty(r)?r:null,r==null)return mt[o]=!0,!1;o!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",o,r),mt[o]=!0)}return!0}function nG(r,o){var e=[],l;for(l in o)iG(r,l)||e.push(l);o=e.map(function(n){return"`"+n+"`"}).join(", "),e.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r):1<e.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",o,r)}function vG(r,o,e,l){if(_g.call(Be,o)&&Be[o])return!0;var n=o.toLowerCase();if(n==="onfocusin"||n==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Be[o]=!0;if(typeof e==="function"&&(r==="form"&&o==="action"||r==="input"&&o==="formAction"||r==="button"&&o==="formAction"))return!0;if(l!=null){if(r=l.possibleRegistrationNames,l.registrationNameDependencies.hasOwnProperty(o))return!0;if(l=r.hasOwnProperty(n)?r[n]:null,l!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",o,l),Be[o]=!0;if(bq.test(o))return console.error("Unknown event handler property `%s`. It will be ignored.",o),Be[o]=!0}else if(bq.test(o))return mY.test(o)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",o),Be[o]=!0;if(AY.test(o)||qY.test(o))return!0;if(n==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Be[o]=!0;if(n==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Be[o]=!0;if(n==="is"&&e!==null&&e!==void 0&&typeof e!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof e),Be[o]=!0;if(typeof e==="number"&&isNaN(e))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",o),Be[o]=!0;if(uu.hasOwnProperty(n)){if(n=uu[n],n!==o)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",o,n),Be[o]=!0}else if(o!==n)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",o,n),Be[o]=!0;switch(o){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof e){case"boolean":switch(o){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(n=o.toLowerCase().slice(0,5),n==="data-"||n==="aria-")return!0;return e?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',e,o,o,e,o):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',e,o,o,e,o,o,o),Be[o]=!0}case"function":case"symbol":return Be[o]=!0,!1;case"string":if(e==="false"||e==="true"){switch(o){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",e,o,e==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',o,e),Be[o]=!0}}return!0}function tG(r,o,e){var l=[],n;for(n in o)vG(r,n,o[n],e)||l.push(n);o=l.map(function(v){return"`"+v+"`"}).join(", "),l.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r):1<l.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",o,r)}function A0(r){return HY.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function fl(){}function d5(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function eP(r){var o=Zr(r);if(o&&(r=o.stateNode)){var e=r[Ze]||null;r:switch(r=o.stateNode,o.type){case"input":if(y5(r,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),o=e.name,e.type==="radio"&&o!=null){for(e=r;e.parentNode;)e=e.parentNode;Oo(o,"name"),e=e.querySelectorAll('input[name="'+Ug(""+o)+'"][type="radio"]');for(o=0;o<e.length;o++){var l=e[o];if(l!==r&&l.form===r.form){var n=l[Ze]||null;if(!n)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");y5(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(o=0;o<e.length;o++)l=e[o],l.form===r.form&&B8(l)}break r;case"textarea":c8(r,e.value,e.defaultValue);break r;case"select":o=e.value,o!=null&&yv(r,!!e.multiple,o,!1)}}}function gP(r,o,e){if(P4)return r(o,e);P4=!0;try{var l=r(o);return l}finally{if(P4=!1,At!==null||qt!==null){if(gt(),At&&(o=At,r=qt,qt=At=null,eP(o),r))for(o=0;o<r.length;o++)eP(r[o])}}}function q0(r,o){var e=r.stateNode;if(e===null)return null;var l=e[Ze]||null;if(l===null)return null;e=l[o];r:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break r;default:r=!1}if(r)return null;if(e&&typeof e!=="function")throw Error("Expected `"+o+"` listener to be a function, instead got a value of `"+typeof e+"` type.");return e}function lP(){if(wu)return wu;var r,o=m4,e=o.length,l,n="value"in pi?pi.value:pi.textContent,v=n.length;for(r=0;r<e&&o[r]===n[r];r++);var b=e-r;for(l=1;l<=b&&o[e-l]===n[v-l];l++);return wu=n.slice(r,1<l?1-l:void 0)}function s1(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function rb(){return!0}function iP(){return!1}function _e(r){function o(e,l,n,v,b){this._reactName=e,this._targetInst=n,this.type=l,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(e=r[w],this[w]=e?e(v):v[w]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?rb:iP,this.isPropagationStopped=iP,this}return fr(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=rb)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=rb)},persist:function(){},isPersistent:rb}),o}function hG(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=LY[r])?!!o[r]:!1}function s5(){return hG}function nP(r,o){switch(r){case"keyup":return DY.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==Oq;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vP(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function bG(r,o){switch(r){case"compositionend":return vP(o);case"keypress":if(o.which!==Aq)return null;return Hq=!0,qq;case"textInput":return r=o.data,r===qq&&Hq?null:r;default:return null}}function uG(r,o){if(Ht)return r==="compositionend"||!M4&&nP(r,o)?(r=lP(),wu=m4=pi=null,Ht=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return mq&&o.locale!=="ko"?null:o.data;default:return null}}function tP(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!yY[r.type]:o==="textarea"?!0:!1}function wG(r){if(!xl)return!1;r="on"+r;var o=r in document;return o||(o=document.createElement("div"),o.setAttribute(r,"return;"),o=typeof o[r]==="function"),o}function hP(r,o,e,l){At?qt?qt.push(l):qt=[l]:At=l,o=Vb(o,"onChange"),0<o.length&&(e=new Pu("onChange","change",null,e,l),r.push({event:e,listeners:o}))}function PG(r){ym(r,0)}function ob(r){var o=Br(r);if(B8(o))return r}function bP(r,o){if(r==="change")return o}function uP(){eh&&(eh.detachEvent("onpropertychange",wP),gh=eh=null)}function wP(r){if(r.propertyName==="value"&&ob(gh)){var o=[];hP(o,gh,r,d5(r)),gP(PG,o)}}function OG(r,o,e){r==="focusin"?(uP(),eh=o,gh=e,eh.attachEvent("onpropertychange",wP)):r==="focusout"&&uP()}function mG(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ob(gh)}function AG(r,o){if(r==="click")return ob(o)}function qG(r,o){if(r==="input"||r==="change")return ob(o)}function HG(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}function H0(r,o){if(Ce(r,o))return!0;if(typeof r!=="object"||r===null||typeof o!=="object"||o===null)return!1;var e=Object.keys(r),l=Object.keys(o);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var n=e[l];if(!_g.call(o,n)||!Ce(r[n],o[n]))return!1}return!0}function PP(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function OP(r,o){var e=PP(r);r=0;for(var l;e;){if(e.nodeType===3){if(l=r+e.textContent.length,r<=o&&l>=o)return{node:e,offset:o-r};r=l}r:{for(;e;){if(e.nextSibling){e=e.nextSibling;break r}e=e.parentNode}e=void 0}e=PP(e)}}function mP(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?mP(r,o.parentNode):("contains"in r)?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function AP(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var o=p1(r.document);o instanceof r.HTMLIFrameElement;){try{var e=typeof o.contentWindow.location.href==="string"}catch(l){e=!1}if(e)r=o.contentWindow;else break;o=p1(r.document)}return o}function rw(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function qP(r,o,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;W4||Mt==null||Mt!==p1(l)||(l=Mt,("selectionStart"in l)&&rw(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lh&&H0(lh,l)||(lh=l,l=Vb(R4,"onSelect"),0<l.length&&(o=new Pu("onSelect","select",null,o,e),r.push({event:o,listeners:l}),o.target=Mt)))}function Dn(r,o){var e={};return e[r.toLowerCase()]=o.toLowerCase(),e["Webkit"+r]="webkit"+o,e["Moz"+r]="moz"+o,e}function cn(r){if(G4[r])return G4[r];if(!Rt[r])return r;var o=Rt[r],e;for(e in o)if(o.hasOwnProperty(e)&&e in Rq)return G4[r]=o[e];return r}function cg(r,o){Jq.set(r,o),Ke(o,[r])}function MG(r){for(var o=mu,e=0;e<r.length;e++){var l=r[e];if(typeof l==="object"&&l!==null)if(ie(l)&&l.length===2&&typeof l[0]==="string"){if(o!==mu&&o!==Q4)return J4;o=Q4}else return J4;else{if(typeof l==="function"||typeof l==="string"&&50<l.length||o!==mu&&o!==z4)return J4;o=z4}}return o}function ow(r,o,e,l){for(var n in r)_g.call(r,n)&&n[0]!=="_"&&bl(n,r[n],o,e,l)}function bl(r,o,e,l,n){switch(typeof o){case"object":if(o===null){o="null";break}else{if(o.$$typeof===zl){var v=y(o.type)||"…",b=o.key;o=o.props;var w=Object.keys(o),A=w.length;if(b==null&&A===0){o="<"+v+" />";break}if(3>l||A===1&&w[0]==="children"&&b==null){o="<"+v+" … />";break}e.push([n+"  ".repeat(l)+r,"<"+v]),b!==null&&bl("key",b,e,l+1,n),r=!1;for(var H in o)H==="children"?o.children!=null&&(!ie(o.children)||0<o.children.length)&&(r=!0):_g.call(o,H)&&H[0]!=="_"&&bl(H,o[H],e,l+1,n);e.push(["",r?">…</"+v+">":"/>"]);return}if(v=Object.prototype.toString.call(o),v=v.slice(8,v.length-1),v==="Array"){if(H=MG(o),H===z4||H===mu){o=JSON.stringify(o);break}else if(H===Q4){e.push([n+"  ".repeat(l)+r,""]);for(r=0;r<o.length;r++)v=o[r],bl(v[0],v[1],e,l+1,n);return}}if(v==="Promise"){if(o.status==="fulfilled"){if(v=e.length,bl(r,o.value,e,l,n),e.length>v){e=e[v],e[1]="Promise<"+(e[1]||"Object")+">";return}}else if(o.status==="rejected"&&(v=e.length,bl(r,o.reason,e,l,n),e.length>v)){e=e[v],e[1]="Rejected Promise<"+e[1]+">";return}e.push(["  ".repeat(l)+r,"Promise"]);return}v==="Object"&&(H=Object.getPrototypeOf(o))&&typeof H.constructor==="function"&&(v=H.constructor.name),e.push([n+"  ".repeat(l)+r,v==="Object"?3>l?"":"…":v]),3>l&&ow(o,e,l+1,n);return}case"function":o=o.name===""?"() => {}":o.name+"() {}";break;case"string":o=o===dY?"…":JSON.stringify(o);break;case"undefined":o="undefined";break;case"boolean":o=o?"true":"false";break;default:o=String(o)}e.push([n+"  ".repeat(l)+r,o])}function HP(r,o,e,l){var n=!0;for(b in r)b in o||(e.push([Au+"  ".repeat(l)+b,"…"]),n=!1);for(var v in o)if(v in r){var b=r[v],w=o[v];if(b!==w){if(l===0&&v==="children")n="  ".repeat(l)+v,e.push([Au+n,"…"],[qu+n,"…"]);else{if(!(3<=l)){if(typeof b==="object"&&typeof w==="object"&&b!==null&&w!==null&&b.$$typeof===w.$$typeof)if(w.$$typeof===zl){if(b.type===w.type&&b.key===w.key){b=y(w.type)||"…",n="  ".repeat(l)+v,b="<"+b+" … />",e.push([Au+n,b],[qu+n,b]),n=!1;continue}}else{var A=Object.prototype.toString.call(b),H=Object.prototype.toString.call(w);if(A===H&&(H==="[object Object]"||H==="[object Array]")){A=[Kq+"  ".repeat(l)+v,H==="[object Array]"?"Array":""],e.push(A),H=e.length,HP(b,w,e,l+1)?H===e.length&&(A[1]="Referentially unequal but deeply equal objects. Consider memoization."):n=!1;continue}}else if(typeof b==="function"&&typeof w==="function"&&b.name===w.name&&b.length===w.length&&(A=Function.prototype.toString.call(b),H=Function.prototype.toString.call(w),A===H)){b=w.name===""?"() => {}":w.name+"() {}",e.push([Kq+"  ".repeat(l)+v,b+" Referentially unequal function closure. Consider memoization."]);continue}}bl(v,b,e,l,Au),bl(v,w,e,l,qu)}n=!1}}else e.push([qu+"  ".repeat(l)+v,"…"]),n=!1;return n}function ig(r){jr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function ul(r,o,e,l){zo&&(di.start=o,di.end=e,li.color="warning",li.tooltipText=l,li.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,l,di)):performance.measure(l,di))}function eb(r,o,e){ul(r,o,e,"Reconnect")}function gb(r,o,e,l,n){var v=N(r);if(v!==null&&zo){var{alternate:b,actualDuration:w}=r;if(b===null||b.child!==r.child)for(var A=r.child;A!==null;A=A.sibling)w-=A.actualDuration;l=0.5>w?l?"tertiary-light":"primary-light":10>w?l?"tertiary":"primary":100>w?l?"tertiary-dark":"primary-dark":"error";var H=r.memoizedProps;w=r._debugTask,H!==null&&b!==null&&b.memoizedProps!==H?(A=[sY],H=HP(b.memoizedProps,H,A,0),1<A.length&&(H&&!ji&&(b.lanes&n)===0&&100<r.actualDuration?(ji=!0,A[0]=rJ,li.color="warning",li.tooltipText=Uq):(li.color=l,li.tooltipText=v),li.properties=A,di.start=o,di.end=e,w!=null?w.run(performance.measure.bind(performance,"​"+v,di)):performance.measure("​"+v,di))):w!=null?w.run(console.timeStamp.bind(console,v,o,e,Lg,void 0,l)):console.timeStamp(v,o,e,Lg,void 0,l)}}function ew(r,o,e,l){if(zo){var n=N(r);if(n!==null){for(var v=null,b=[],w=0;w<l.length;w++){var A=l[w];v==null&&A.source!==null&&(v=A.source._debugTask),A=A.value,b.push(["Error",typeof A==="object"&&A!==null&&typeof A.message==="string"?String(A.message):String(A)])}r.key!==null&&bl("key",r.key,b,0,""),r.memoizedProps!==null&&ow(r.memoizedProps,b,0,""),v==null&&(v=r._debugTask),r={start:o,end:e,detail:{devtools:{color:"error",track:Lg,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:b}}},v?v.run(performance.measure.bind(performance,"​"+n,r)):performance.measure("​"+n,r)}}}function wl(r,o,e,l,n){if(n!==null){if(zo){var v=N(r);if(v!==null){l=[];for(var b=0;b<n.length;b++){var w=n[b].value;l.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r.key!==null&&bl("key",r.key,l,0,""),r.memoizedProps!==null&&ow(r.memoizedProps,l,0,""),o={start:o,end:e,detail:{devtools:{color:"error",track:Lg,tooltipText:"A lifecycle or effect errored",properties:l}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+v,o)):performance.measure("​"+v,o)}}}else v=N(r),v!==null&&zo&&(n=1>l?"secondary-light":100>l?"secondary":500>l?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,v,o,e,Lg,void 0,n)):console.timeStamp(v,o,e,Lg,void 0,n))}function RG(r,o,e,l){if(zo&&!(o<=r)){var n=(e&738197653)===e?"tertiary-dark":"primary-dark";e=(e&536870912)===e?"Prepared":(e&201326741)===e?"Hydrated":"Render",l?l.run(console.timeStamp.bind(console,e,r,o,jr,pr,n)):console.timeStamp(e,r,o,jr,pr,n)}}function MP(r,o,e,l){!zo||o<=r||(e=(e&738197653)===e?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Prewarm",r,o,jr,pr,e)):console.timeStamp("Prewarm",r,o,jr,pr,e))}function RP(r,o,e,l){!zo||o<=r||(e=(e&738197653)===e?"tertiary-dark":"primary-dark",l?l.run(console.timeStamp.bind(console,"Suspended",r,o,jr,pr,e)):console.timeStamp("Suspended",r,o,jr,pr,e))}function WG(r,o,e,l,n,v){if(zo&&!(o<=r)){e=[];for(var b=0;b<l.length;b++){var w=l[b].value;e.push(["Recoverable Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"primary-dark",track:jr,trackGroup:pr,tooltipText:n?"Hydration Failed":"Recovered after Error",properties:e}}},v?v.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function gw(r,o,e,l){!zo||o<=r||(l?l.run(console.timeStamp.bind(console,"Errored",r,o,jr,pr,"error")):console.timeStamp("Errored",r,o,jr,pr,"error"))}function GG(r,o,e,l){!zo||o<=r||(l?l.run(console.timeStamp.bind(console,e,r,o,jr,pr,"secondary-light")):console.timeStamp(e,r,o,jr,pr,"secondary-light"))}function WP(r,o,e,l,n){if(zo&&!(o<=r)){for(var v=[],b=0;b<e.length;b++){var w=e[b].value;v.push(["Error",typeof w==="object"&&w!==null&&typeof w.message==="string"?String(w.message):String(w)])}r={start:r,end:o,detail:{devtools:{color:"error",track:jr,trackGroup:pr,tooltipText:l?"Remaining Effects Errored":"Commit Errored",properties:v}}},n?n.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function M0(r,o,e){!zo||o<=r||(e?e.run(console.timeStamp.bind(console,"Animating",r,o,jr,pr,"secondary-dark")):console.timeStamp("Animating",r,o,jr,pr,"secondary-dark"))}function lb(){for(var r=Wt,o=K4=Wt=0;o<r;){var e=xg[o];xg[o++]=null;var l=xg[o];xg[o++]=null;var n=xg[o];xg[o++]=null;var v=xg[o];if(xg[o++]=null,l!==null&&n!==null){var b=l.pending;b===null?n.next=n:(n.next=b.next,b.next=n),l.pending=n}v!==0&&GP(e,n,v)}}function ib(r,o,e,l){xg[Wt++]=r,xg[Wt++]=o,xg[Wt++]=e,xg[Wt++]=l,K4|=l,r.lanes|=l,r=r.alternate,r!==null&&(r.lanes|=l)}function lw(r,o,e,l){return ib(r,o,e,l),nb(r)}function Ue(r,o){return ib(r,null,null,o),nb(r)}function GP(r,o,e){r.lanes|=e;var l=r.alternate;l!==null&&(l.lanes|=e);for(var n=!1,v=r.return;v!==null;)v.childLanes|=e,l=v.alternate,l!==null&&(l.childLanes|=e),v.tag===22&&(r=v.stateNode,r===null||r._visibility&ih||(n=!0)),r=v,v=v.return;return r.tag===3?(v=r.stateNode,n&&o!==null&&(n=31-Ne(e),r=v.hiddenUpdates,l=r[n],l===null?r[n]=[o]:l.push(o),o.lane=e|536870912),v):null}function nb(r){if(xh>mJ)throw Mv=xh=0,Ih=v6=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Mv>AJ&&(Mv=0,Ih=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&Cm(r);for(var o=r,e=o.return;e!==null;)o.alternate===null&&(o.flags&4098)!==0&&Cm(r),o=e,e=o.return;return o.tag===3?o.stateNode:null}function yn(r){if(Ig===null)return r;var o=Ig(r);return o===void 0?r:o.current}function iw(r){if(Ig===null)return r;var o=Ig(r);return o===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(o=yn(r.render),r.render!==o)?(o={$$typeof:_0,render:o},r.displayName!==void 0&&(o.displayName=r.displayName),o):r:o.current}function XP(r,o){if(Ig===null)return!1;var e=r.elementType;o=o.type;var l=!1,n=typeof o==="object"&&o!==null?o.$$typeof:null;switch(r.tag){case 1:typeof o==="function"&&(l=!0);break;case 0:typeof o==="function"?l=!0:n===wg&&(l=!0);break;case 11:n===_0?l=!0:n===wg&&(l=!0);break;case 14:case 15:n===gu?l=!0:n===wg&&(l=!0);break;default:return!1}return l&&(r=Ig(e),r!==void 0&&r===Ig(o))?!0:!1}function YP(r){Ig!==null&&typeof WeakSet==="function"&&(Gt===null&&(Gt=new WeakSet),Gt.add(r))}function JP(r,o,e){do{var l=r,n=l.alternate,v=l.child,b=l.sibling,w=l.tag;l=l.type;var A=null;switch(w){case 0:case 15:case 1:A=l;break;case 11:A=l.render}if(Ig===null)throw Error("Expected resolveFamily to be set during hot reload.");var H=!1;if(l=!1,A!==null&&(A=Ig(A),A!==void 0&&(e.has(A)?l=!0:o.has(A)&&(w===1?l=!0:H=!0))),Gt!==null&&(Gt.has(r)||n!==null&&Gt.has(n))&&(l=!0),l&&(r._debugNeedsRemount=!0),l||H)n=Ue(r,2),n!==null&&Bo(n,r,2);if(v===null||l||JP(v,o,e),b===null)break;r=b}while(1)}function XG(r,o,e,l){this.tag=r,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,$q||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function nw(r){return r=r.prototype,!(!r||!r.isReactComponent)}function pl(r,o){var e=r.alternate;switch(e===null?(e=G(r.tag,o,r.key,r.mode),e.elementType=r.elementType,e.type=r.type,e.stateNode=r.stateNode,e._debugOwner=r._debugOwner,e._debugStack=r._debugStack,e._debugTask=r._debugTask,e._debugHookTypes=r._debugHookTypes,e.alternate=r,r.alternate=e):(e.pendingProps=o,e.type=r.type,e.flags=0,e.subtreeFlags=0,e.deletions=null,e.actualDuration=-0,e.actualStartTime=-1.1),e.flags=r.flags&65011712,e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,o=r.dependencies,e.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},e.sibling=r.sibling,e.index=r.index,e.ref=r.ref,e.refCleanup=r.refCleanup,e.selfBaseDuration=r.selfBaseDuration,e.treeBaseDuration=r.treeBaseDuration,e._debugInfo=r._debugInfo,e._debugNeedsRemount=r._debugNeedsRemount,e.tag){case 0:case 15:e.type=yn(r.type);break;case 1:e.type=yn(r.type);break;case 11:e.type=iw(r.type)}return e}function zP(r,o){r.flags&=65011714;var e=r.alternate;return e===null?(r.childLanes=0,r.lanes=o,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.type=e.type,o=e.dependencies,r.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext,_debugThenableState:o._debugThenableState},r.selfBaseDuration=e.selfBaseDuration,r.treeBaseDuration=e.treeBaseDuration),r}function vw(r,o,e,l,n,v){var b=0,w=r;if(typeof r==="function")nw(r)&&(b=1),w=yn(w);else if(typeof r==="string")b=nr(),b=xX(r,e,b)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case s2:return o=G(31,e,o,n),o.elementType=s2,o.lanes=v,o;case bt:return Vn(e.children,n,v,o);case eu:b=8,n|=Le,n|=fg;break;case f2:return r=e,l=n,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),o=G(12,r,o,l|kr),o.elementType=f2,o.lanes=v,o.stateNode={effectDuration:0,passiveEffectDuration:0},o;case j2:return o=G(13,e,o,n),o.elementType=j2,o.lanes=v,o;case d2:return o=G(19,e,o,n),o.elementType=d2,o.lanes=v,o;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Ql:b=10;break r;case p2:b=9;break r;case _0:b=11,w=iw(w);break r;case gu:b=14;break r;case wg:b=16,w=null;break r}if(w="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?e="null":ie(r)?e="array":r!==void 0&&r.$$typeof===zl?(e="<"+(y(r.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):e=typeof r,(b=l?p(l):null)&&(w+=`

Check the render method of \``+b+"`."),b=29,e=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(e+"."+w)),w=null}return o=G(b,e,o,n),o.elementType=r,o.type=w,o.lanes=v,o._debugOwner=l,o}function vb(r,o,e){return o=vw(r.type,r.key,r.props,r._owner,o,e),o._debugOwner=r._owner,o._debugStack=r._debugStack,o._debugTask=r._debugTask,o}function Vn(r,o,e,l){return r=G(7,r,l,o),r.lanes=e,r}function tw(r,o,e){return r=G(6,r,null,o),r.lanes=e,r}function QP(r){var o=G(18,null,null,Lr);return o.stateNode=r,o}function hw(r,o,e){return o=G(4,r.children!==null?r.children:[],r.key,o),o.lanes=e,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function ng(r,o){if(typeof r==="object"&&r!==null){var e=U4.get(r);if(e!==void 0)return e;return o={value:r,source:o,stack:xr(o)},U4.set(r,o),o}return{value:r,source:o,stack:xr(o)}}function jl(r,o){Fi(),Xt[Yt++]=nh,Xt[Yt++]=Hu,Hu=r,nh=o}function KP(r,o,e){Fi(),Fg[Ng++]=ni,Fg[Ng++]=vi,Fg[Ng++]=iv,iv=r;var l=ni;r=vi;var n=32-Ne(l)-1;l&=~(1<<n),e+=1;var v=32-Ne(o)+n;if(30<v){var b=n-n%5;v=(l&(1<<b)-1).toString(32),l>>=b,n-=b,ni=1<<32-Ne(o)+n|e<<n|l,vi=v+r}else ni=1<<v|e<<n|l,vi=r}function bw(r){Fi(),r.return!==null&&(jl(r,1),KP(r,1,0))}function uw(r){for(;r===Hu;)Hu=Xt[--Yt],Xt[Yt]=null,nh=Xt[--Yt],Xt[Yt]=null;for(;r===iv;)iv=Fg[--Ng],Fg[Ng]=null,vi=Fg[--Ng],Fg[Ng]=null,ni=Fg[--Ng],Fg[Ng]=null}function UP(){return Fi(),iv!==null?{id:ni,overflow:vi}:null}function $P(r,o){Fi(),Fg[Ng++]=ni,Fg[Ng++]=vi,Fg[Ng++]=iv,ni=o.id,vi=o.overflow,iv=r}function Fi(){sr||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function _n(r,o){if(r.return===null){if(mg===null)mg={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o};else{if(mg.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");mg.distanceFromLeaf>o&&(mg.distanceFromLeaf=o)}return mg}var e=_n(r.return,o+1).children;if(0<e.length&&e[e.length-1].fiber===r)return e=e[e.length-1],e.distanceFromLeaf>o&&(e.distanceFromLeaf=o),e;return o={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:o},e.push(o),o}function LP(){sr&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function tb(r,o){Il||(r=_n(r,0),r.serverProps=null,o!==null&&(o=hA(o),r.serverTail.push(o)))}function Ni(r){var o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,e="",l=mg;throw l!==null&&(mg=null,e=p5(l)),R0(ng(Error("Hydration failed because the server rendered "+(o?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+e),r)),$4}function xP(r){var{stateNode:o,type:e,memoizedProps:l}=r;switch(o[Re]=r,o[Ze]=l,L2(e,l),e){case"dialog":ro("cancel",o),ro("close",o);break;case"iframe":case"object":case"embed":ro("load",o);break;case"video":case"audio":for(e=0;e<Fh.length;e++)ro(Fh[e],o);break;case"source":ro("error",o);break;case"img":case"image":case"link":ro("error",o),ro("load",o);break;case"details":ro("toggle",o);break;case"input":Ii("input",l),ro("invalid",o),C8(o,l),S8(o,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"option":T8(o,l);break;case"select":Ii("select",l),ro("invalid",o),a8(o,l);break;case"textarea":Ii("textarea",l),ro("invalid",o),D8(o,l),y8(o,l.value,l.defaultValue,l.children)}e=l.children,typeof e!=="string"&&typeof e!=="number"&&typeof e!=="bigint"||o.textContent===""+e||l.suppressHydrationWarning===!0||fm(o.textContent,e)?(l.popover!=null&&(ro("beforetoggle",o),ro("toggle",o)),l.onScroll!=null&&ro("scroll",o),l.onScrollEnd!=null&&ro("scrollend",o),l.onClick!=null&&(o.onclick=fl),o=!0):o=!1,o||Ni(r,!0)}function IP(r){for(We=r.return;We;)switch(We.tag){case 5:case 31:case 13:Zg=!1;return;case 27:case 3:Zg=!0;return;default:We=We.return}}function Ev(r){if(r!==We)return!1;if(!sr)return IP(r),sr=!0,!1;var o=r.tag,e;if(e=o!==3&&o!==27){if(e=o===5)e=r.type,e=!(e!=="form"&&e!=="button")||Z2(r.type,r.memoizedProps);e=!e}if(e&&Qo){for(e=Qo;e;){var l=_n(r,0),n=hA(e);l.serverTail.push(n),e=n.type==="Suspense"?T2(e):ug(e.nextSibling)}Ni(r)}if(IP(r),o===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=T2(r)}else if(o===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Qo=T2(r)}else o===27?(o=Qo,yi(r.type)?(r=M6,M6=null,Qo=r):Qo=o):Qo=We?ug(r.stateNode.nextSibling):null;return!0}function En(){Qo=We=null,Il=sr=!1}function ww(){var r=rn;return r!==null&&(ae===null?ae=r:ae.push.apply(ae,r),rn=null),r}function R0(r){rn===null?rn=[r]:rn.push(r)}function Pw(){var r=mg;if(r!==null){mg=null;for(var o=p5(r);0<r.children.length;)r=r.children[0];hr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",o)})}}function hb(){Jt=Mu=null,zt=!1}function Zi(r,o,e){Wr(L4,o._currentValue,r),o._currentValue=e,Wr(x4,o._currentRenderer,r),o._currentRenderer!==void 0&&o._currentRenderer!==null&&o._currentRenderer!==xq&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),o._currentRenderer=xq}function dl(r,o){r._currentValue=L4.current;var e=x4.current;qr(x4,o),r._currentRenderer=e,qr(L4,o)}function Ow(r,o,e){for(;r!==null;){var l=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),r===e)break;r=r.return}r!==e&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function mw(r,o,e,l){var n=r.child;n!==null&&(n.return=r);for(;n!==null;){var v=n.dependencies;if(v!==null){var b=n.child;v=v.firstContext;r:for(;v!==null;){var w=v;v=n;for(var A=0;A<o.length;A++)if(w.context===o[A]){v.lanes|=e,w=v.alternate,w!==null&&(w.lanes|=e),Ow(v.return,e,r),l||(b=null);break r}v=w.next}}else if(n.tag===18){if(b=n.return,b===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");b.lanes|=e,v=b.alternate,v!==null&&(v.lanes|=e),Ow(b,e,r),b=null}else b=n.child;if(b!==null)b.return=n;else for(b=n;b!==null;){if(b===r){b=null;break}if(n=b.sibling,n!==null){n.return=b.return,b=n;break}b=b.return}n=b}}function fv(r,o,e,l){r=null;for(var n=o,v=!1;n!==null;){if(!v){if((n.flags&524288)!==0)v=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var b=n.alternate;if(b===null)throw Error("Should have a current fiber. This is a bug in React.");if(b=b.memoizedProps,b!==null){var w=n.type;Ce(n.pendingProps.value,b.value)||(r!==null?r.push(w):r=[w])}}else if(n===lu.current){if(b=n.alternate,b===null)throw Error("Should have a current fiber. This is a bug in React.");b.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(r!==null?r.push(Sh):r=[Sh])}n=n.return}r!==null&&mw(o,r,e,l),o.flags|=262144}function bb(r){for(r=r.firstContext;r!==null;){if(!Ce(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function fn(r){Mu=r,Jt=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Lo(r){return zt&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),FP(Mu,r)}function ub(r,o){return Mu===null&&fn(r),FP(r,o)}function FP(r,o){var e=o._currentValue;if(o={context:o,memoizedValue:e,next:null},Jt===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Jt=o,r.dependencies={lanes:0,firstContext:o,_debugThenableState:null},r.flags|=524288}else Jt=Jt.next=o;return e}function Aw(){return{controller:new gJ,data:new Map,refCount:0}}function pn(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function W0(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&lJ(iJ,function(){r.controller.abort()})}function Pl(r,o,e){if((r&127)!==0)0>Fl&&(Fl=jo(),th=Ru(o),I4=o,e!=null&&(F4=N(e)),(go&(ve|Hg))!==Pe&&(Co=!0,gn=vh),r=a0(),o=k0(),r!==Qt||o!==hh?Qt=-1.1:o!==null&&(gn=vh),vv=r,hh=o);else if((r&4194048)!==0&&0>Bg&&(Bg=jo(),bh=Ru(o),Iq=o,e!=null&&(Fq=N(e)),0>bi)){if(r=a0(),o=k0(),r!==nn||o!==tv)nn=-1.1;ln=r,tv=o}}function YG(r){if(0>Fl){Fl=jo(),th=r._debugTask!=null?r._debugTask:null,(go&(ve|Hg))!==Pe&&(gn=vh);var o=a0(),e=k0();o!==Qt||e!==hh?Qt=-1.1:e!==null&&(gn=vh),vv=o,hh=e}if(0>Bg&&(Bg=jo(),bh=r._debugTask!=null?r._debugTask:null,0>bi)){if(r=a0(),o=k0(),r!==nn||o!==tv)nn=-1.1;ln=r,tv=o}}function sl(){var r=nv;return nv=0,r}function wb(r){var o=nv;return nv=r,o}function G0(r){var o=nv;return nv+=r,o}function Pb(){Ur=Qr=-1.1}function vg(){var r=Qr;return Qr=-1.1,r}function tg(r){0<=r&&(Qr=r)}function Ol(){var r=Fo;return Fo=-0,r}function ml(r){0<=r&&(Fo=r)}function Al(){var r=xo;return xo=null,r}function ql(){var r=Co;return Co=!1,r}function qw(r){Se=jo(),0>r.actualStartTime&&(r.actualStartTime=Se)}function Hw(r){if(0<=Se){var o=jo()-Se;r.actualDuration+=o,r.selfBaseDuration=o,Se=-1}}function NP(r){if(0<=Se){var o=jo()-Se;r.actualDuration+=o,Se=-1}}function Hl(){if(0<=Se){var r=jo(),o=r-Se;Se=-1,nv+=o,Fo+=o,Ur=r}}function ZP(r){xo===null&&(xo=[]),xo.push(r),hi===null&&(hi=[]),hi.push(r)}function Ml(){Se=jo(),0>Qr&&(Qr=Se)}function X0(r){for(var o=r.child;o;)r.actualDuration+=o.actualDuration,o=o.sibling}function JG(r,o){if(wh===null){var e=wh=[];Z4=0,hv=Q2(),Kt={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Z4++,o.then(BP,BP),o}function BP(){if(--Z4===0&&(-1<Bg||(bi=-1.1),wh!==null)){Kt!==null&&(Kt.status="fulfilled");var r=wh;wh=null,hv=0,Kt=null;for(var o=0;o<r.length;o++)(0,r[o])()}}function zG(r,o){var e=[],l={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return r.then(function(){l.status="fulfilled",l.value=o;for(var n=0;n<e.length;n++)(0,e[n])(o)},function(n){l.status="rejected",l.reason=n;for(n=0;n<e.length;n++)(0,e[n])(void 0)}),l}function Mw(){var r=bv.current;return r!==null?r:Ro.pooledCache}function Ob(r,o){o===null?Wr(bv,bv.current,r):Wr(bv,o.pool,r)}function CP(){var r=Mw();return r===null?null:{parent:po._currentValue,pool:r}}function SP(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function TP(r){return r=r.status,r==="fulfilled"||r==="rejected"}function kP(r,o,e){C.actQueue!==null&&(C.didUsePromise=!0);var l=r.thenables;if(e=l[e],e===void 0?l.push(o):e!==o&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),o.then(fl,fl),o=e),o._debugInfo===void 0){r=performance.now(),l=o.displayName;var n={name:typeof l==="string"?l:"Promise",start:r,end:r,value:o};o._debugInfo=[{awaited:n}],o.status!=="fulfilled"&&o.status!=="rejected"&&(r=function(){n.end=performance.now()},o.then(r,r))}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,DP(r),r;default:if(typeof o.status==="string")o.then(fl,fl);else{if(r=Ro,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=o,r.status="pending",r.then(function(v){if(o.status==="pending"){var b=o;b.status="fulfilled",b.value=v}},function(v){if(o.status==="pending"){var b=o;b.status="rejected",b.reason=v}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw r=o.reason,DP(r),r}throw wv=o,Mh=!0,Ut}}function Bi(r){try{return hJ(r)}catch(o){if(o!==null&&typeof o==="object"&&typeof o.then==="function")throw wv=o,Mh=!0,Ut;throw o}}function aP(){if(wv===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=wv;return wv=null,Mh=!1,r}function DP(r){if(r===Ut||r===Ku)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function qe(r){var o=ar;return r!=null&&(ar=o===null?r:o.concat(r)),o}function Rw(){var r=ar;if(r!=null){for(var o=r.length-1;0<=o;o--)if(r[o].name!=null){var e=r[o].debugTask;if(e!=null)return e}}return null}function mb(r,o,e){for(var l=Object.keys(r.props),n=0;n<l.length;n++){var v=l[n];if(v!=="children"&&v!=="key"){o===null&&(o=vb(r,e.mode,0),o._debugInfo=ar,o.return=e),hr(o,function(b){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",b)},v);break}}}function Ab(r){var o=Rh;return Rh+=1,$t===null&&($t=SP()),kP($t,r,o)}function Y0(r,o){o=o.props.ref,r.ref=o!==void 0?o:null}function cP(r,o){if(o.$$typeof===aX)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(o),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function qb(r,o){var e=Rw();e!==null?e.run(cP.bind(null,r,o)):cP(r,o)}function yP(r,o){var e=N(r)||"Component";rH[e]||(rH[e]=!0,o=o.displayName||o.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,o,o,o):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,o,o,e,o,e))}function Hb(r,o){var e=Rw();e!==null?e.run(yP.bind(null,r,o)):yP(r,o)}function VP(r,o){var e=N(r)||"Component";oH[e]||(oH[e]=!0,o=String(o),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,o):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,e,o,e))}function Mb(r,o){var e=Rw();e!==null?e.run(VP.bind(null,r,o)):VP(r,o)}function _P(r){function o(Y,z){if(r){var K=Y.deletions;K===null?(Y.deletions=[z],Y.flags|=16):K.push(z)}}function e(Y,z){if(!r)return null;for(;z!==null;)o(Y,z),z=z.sibling;return null}function l(Y){for(var z=new Map;Y!==null;)Y.key!==null?z.set(Y.key,Y):z.set(Y.index,Y),Y=Y.sibling;return z}function n(Y,z){return Y=pl(Y,z),Y.index=0,Y.sibling=null,Y}function v(Y,z,K){if(Y.index=K,!r)return Y.flags|=1048576,z;if(K=Y.alternate,K!==null)return K=K.index,K<z?(Y.flags|=67108866,z):K;return Y.flags|=67108866,z}function b(Y){return r&&Y.alternate===null&&(Y.flags|=67108866),Y}function w(Y,z,K,D){if(z===null||z.tag!==6)return z=tw(K,Y.mode,D),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=ar,z;return z=n(z,K),z.return=Y,z._debugInfo=ar,z}function A(Y,z,K,D){var ur=K.type;if(ur===bt)return z=U(Y,z,K.props.children,D,K.key),mb(K,z,Y),z;if(z!==null&&(z.elementType===ur||XP(z,K)||typeof ur==="object"&&ur!==null&&ur.$$typeof===wg&&Bi(ur)===z.type))return z=n(z,K.props),Y0(z,K),z.return=Y,z._debugOwner=K._owner,z._debugInfo=ar,z;return z=vb(K,Y.mode,D),Y0(z,K),z.return=Y,z._debugInfo=ar,z}function H(Y,z,K,D){if(z===null||z.tag!==4||z.stateNode.containerInfo!==K.containerInfo||z.stateNode.implementation!==K.implementation)return z=hw(K,Y.mode,D),z.return=Y,z._debugInfo=ar,z;return z=n(z,K.children||[]),z.return=Y,z._debugInfo=ar,z}function U(Y,z,K,D,ur){if(z===null||z.tag!==7)return z=Vn(K,Y.mode,D,ur),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=ar,z;return z=n(z,K),z.return=Y,z._debugInfo=ar,z}function $(Y,z,K){if(typeof z==="string"&&z!==""||typeof z==="number"||typeof z==="bigint")return z=tw(""+z,Y.mode,K),z.return=Y,z._debugOwner=Y,z._debugTask=Y._debugTask,z._debugInfo=ar,z;if(typeof z==="object"&&z!==null){switch(z.$$typeof){case zl:return K=vb(z,Y.mode,K),Y0(K,z),K.return=Y,Y=qe(z._debugInfo),K._debugInfo=ar,ar=Y,K;case ht:return z=hw(z,Y.mode,K),z.return=Y,z._debugInfo=ar,z;case wg:var D=qe(z._debugInfo);return z=Bi(z),Y=$(Y,z,K),ar=D,Y}if(ie(z)||Z(z))return K=Vn(z,Y.mode,K,null),K.return=Y,K._debugOwner=Y,K._debugTask=Y._debugTask,Y=qe(z._debugInfo),K._debugInfo=ar,ar=Y,K;if(typeof z.then==="function")return D=qe(z._debugInfo),Y=$(Y,Ab(z),K),ar=D,Y;if(z.$$typeof===Ql)return $(Y,ub(Y,z),K);qb(Y,z)}return typeof z==="function"&&Hb(Y,z),typeof z==="symbol"&&Mb(Y,z),null}function J(Y,z,K,D){var ur=z!==null?z.key:null;if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur!==null?null:w(Y,z,""+K,D);if(typeof K==="object"&&K!==null){switch(K.$$typeof){case zl:return K.key===ur?(ur=qe(K._debugInfo),Y=A(Y,z,K,D),ar=ur,Y):null;case ht:return K.key===ur?H(Y,z,K,D):null;case wg:return ur=qe(K._debugInfo),K=Bi(K),Y=J(Y,z,K,D),ar=ur,Y}if(ie(K)||Z(K)){if(ur!==null)return null;return ur=qe(K._debugInfo),Y=U(Y,z,K,D,null),ar=ur,Y}if(typeof K.then==="function")return ur=qe(K._debugInfo),Y=J(Y,z,Ab(K),D),ar=ur,Y;if(K.$$typeof===Ql)return J(Y,z,ub(Y,K),D);qb(Y,K)}return typeof K==="function"&&Hb(Y,K),typeof K==="symbol"&&Mb(Y,K),null}function F(Y,z,K,D,ur){if(typeof D==="string"&&D!==""||typeof D==="number"||typeof D==="bigint")return Y=Y.get(K)||null,w(z,Y,""+D,ur);if(typeof D==="object"&&D!==null){switch(D.$$typeof){case zl:return K=Y.get(D.key===null?K:D.key)||null,Y=qe(D._debugInfo),z=A(z,K,D,ur),ar=Y,z;case ht:return Y=Y.get(D.key===null?K:D.key)||null,H(z,Y,D,ur);case wg:var Fr=qe(D._debugInfo);return D=Bi(D),z=F(Y,z,K,D,ur),ar=Fr,z}if(ie(D)||Z(D))return K=Y.get(K)||null,Y=qe(D._debugInfo),z=U(z,K,D,ur,null),ar=Y,z;if(typeof D.then==="function")return Fr=qe(D._debugInfo),z=F(Y,z,K,Ab(D),ur),ar=Fr,z;if(D.$$typeof===Ql)return F(Y,z,K,ub(z,D),ur);qb(z,D)}return typeof D==="function"&&Hb(z,D),typeof D==="symbol"&&Mb(z,D),null}function vr(Y,z,K,D){if(typeof K!=="object"||K===null)return D;switch(K.$$typeof){case zl:case ht:W(Y,z,K);var ur=K.key;if(typeof ur!=="string")break;if(D===null){D=new Set,D.add(ur);break}if(!D.has(ur)){D.add(ur);break}hr(z,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",ur)});break;case wg:K=Bi(K),vr(Y,z,K,D)}return D}function Or(Y,z,K,D){for(var ur=null,Fr=null,Jr=null,Gr=z,Sr=z=0,Ko=null;Gr!==null&&Sr<K.length;Sr++){Gr.index>Sr?(Ko=Gr,Gr=null):Ko=Gr.sibling;var yo=J(Y,Gr,K[Sr],D);if(yo===null){Gr===null&&(Gr=Ko);break}ur=vr(Y,yo,K[Sr],ur),r&&Gr&&yo.alternate===null&&o(Y,Gr),z=v(yo,z,Sr),Jr===null?Fr=yo:Jr.sibling=yo,Jr=yo,Gr=Ko}if(Sr===K.length)return e(Y,Gr),sr&&jl(Y,Sr),Fr;if(Gr===null){for(;Sr<K.length;Sr++)Gr=$(Y,K[Sr],D),Gr!==null&&(ur=vr(Y,Gr,K[Sr],ur),z=v(Gr,z,Sr),Jr===null?Fr=Gr:Jr.sibling=Gr,Jr=Gr);return sr&&jl(Y,Sr),Fr}for(Gr=l(Gr);Sr<K.length;Sr++)Ko=F(Gr,Y,Sr,K[Sr],D),Ko!==null&&(ur=vr(Y,Ko,K[Sr],ur),r&&Ko.alternate!==null&&Gr.delete(Ko.key===null?Sr:Ko.key),z=v(Ko,z,Sr),Jr===null?Fr=Ko:Jr.sibling=Ko,Jr=Ko);return r&&Gr.forEach(function(Mi){return o(Y,Mi)}),sr&&jl(Y,Sr),Fr}function Xo(Y,z,K,D){if(K==null)throw Error("An iterable object provided no iterator.");for(var ur=null,Fr=null,Jr=z,Gr=z=0,Sr=null,Ko=null,yo=K.next();Jr!==null&&!yo.done;Gr++,yo=K.next()){Jr.index>Gr?(Sr=Jr,Jr=null):Sr=Jr.sibling;var Mi=J(Y,Jr,yo.value,D);if(Mi===null){Jr===null&&(Jr=Sr);break}Ko=vr(Y,Mi,yo.value,Ko),r&&Jr&&Mi.alternate===null&&o(Y,Jr),z=v(Mi,z,Gr),Fr===null?ur=Mi:Fr.sibling=Mi,Fr=Mi,Jr=Sr}if(yo.done)return e(Y,Jr),sr&&jl(Y,Gr),ur;if(Jr===null){for(;!yo.done;Gr++,yo=K.next())Jr=$(Y,yo.value,D),Jr!==null&&(Ko=vr(Y,Jr,yo.value,Ko),z=v(Jr,z,Gr),Fr===null?ur=Jr:Fr.sibling=Jr,Fr=Jr);return sr&&jl(Y,Gr),ur}for(Jr=l(Jr);!yo.done;Gr++,yo=K.next())Sr=F(Jr,Y,Gr,yo.value,D),Sr!==null&&(Ko=vr(Y,Sr,yo.value,Ko),r&&Sr.alternate!==null&&Jr.delete(Sr.key===null?Gr:Sr.key),z=v(Sr,z,Gr),Fr===null?ur=Sr:Fr.sibling=Sr,Fr=Sr);return r&&Jr.forEach(function(IJ){return o(Y,IJ)}),sr&&jl(Y,Gr),ur}function oo(Y,z,K,D){if(typeof K==="object"&&K!==null&&K.type===bt&&K.key===null&&(mb(K,null,Y),K=K.props.children),typeof K==="object"&&K!==null){switch(K.$$typeof){case zl:var ur=qe(K._debugInfo);r:{for(var Fr=K.key;z!==null;){if(z.key===Fr){if(Fr=K.type,Fr===bt){if(z.tag===7){e(Y,z.sibling),D=n(z,K.props.children),D.return=Y,D._debugOwner=K._owner,D._debugInfo=ar,mb(K,D,Y),Y=D;break r}}else if(z.elementType===Fr||XP(z,K)||typeof Fr==="object"&&Fr!==null&&Fr.$$typeof===wg&&Bi(Fr)===z.type){e(Y,z.sibling),D=n(z,K.props),Y0(D,K),D.return=Y,D._debugOwner=K._owner,D._debugInfo=ar,Y=D;break r}e(Y,z);break}else o(Y,z);z=z.sibling}K.type===bt?(D=Vn(K.props.children,Y.mode,D,K.key),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=ar,mb(K,D,Y),Y=D):(D=vb(K,Y.mode,D),Y0(D,K),D.return=Y,D._debugInfo=ar,Y=D)}return Y=b(Y),ar=ur,Y;case ht:r:{ur=K;for(K=ur.key;z!==null;){if(z.key===K)if(z.tag===4&&z.stateNode.containerInfo===ur.containerInfo&&z.stateNode.implementation===ur.implementation){e(Y,z.sibling),D=n(z,ur.children||[]),D.return=Y,Y=D;break r}else{e(Y,z);break}else o(Y,z);z=z.sibling}D=hw(ur,Y.mode,D),D.return=Y,Y=D}return b(Y);case wg:return ur=qe(K._debugInfo),K=Bi(K),Y=oo(Y,z,K,D),ar=ur,Y}if(ie(K))return ur=qe(K._debugInfo),Y=Or(Y,z,K,D),ar=ur,Y;if(Z(K)){if(ur=qe(K._debugInfo),Fr=Z(K),typeof Fr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var Jr=Fr.call(K);if(Jr===K){if(Y.tag!==0||Object.prototype.toString.call(Y.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(Jr)!=="[object Generator]")dq||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),dq=!0}else K.entries!==Fr||T4||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),T4=!0);return Y=Xo(Y,z,Jr,D),ar=ur,Y}if(typeof K.then==="function")return ur=qe(K._debugInfo),Y=oo(Y,z,Ab(K),D),ar=ur,Y;if(K.$$typeof===Ql)return oo(Y,z,ub(Y,K),D);qb(Y,K)}if(typeof K==="string"&&K!==""||typeof K==="number"||typeof K==="bigint")return ur=""+K,z!==null&&z.tag===6?(e(Y,z.sibling),D=n(z,ur),D.return=Y,Y=D):(e(Y,z),D=tw(ur,Y.mode,D),D.return=Y,D._debugOwner=Y,D._debugTask=Y._debugTask,D._debugInfo=ar,Y=D),b(Y);return typeof K==="function"&&Hb(Y,K),typeof K==="symbol"&&Mb(Y,K),e(Y,z)}return function(Y,z,K,D){var ur=ar;ar=null;try{Rh=0;var Fr=oo(Y,z,K,D);return $t=null,Fr}catch(Ko){if(Ko===Ut||Ko===Ku)throw Ko;var Jr=G(29,Ko,null,Y.mode);Jr.lanes=D,Jr.return=Y;var Gr=Jr._debugInfo=ar;if(Jr._debugOwner=Y._debugOwner,Jr._debugTask=Y._debugTask,Gr!=null){for(var Sr=Gr.length-1;0<=Sr;Sr--)if(typeof Gr[Sr].stack==="string"){Jr._debugOwner=Gr[Sr],Jr._debugTask=Gr[Sr].debugTask;break}}return Jr}finally{ar=ur}}}function EP(r,o){var e=ie(r);return r=!e&&typeof Z(r)==="function",e||r?(e=e?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",e,o,e),!1):!0}function Ww(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gw(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ci(r){return{lane:r,tag:gH,payload:null,callback:null,next:null}}function Si(r,o,e){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,a4===l&&!nH){var n=N(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,n),nH=!0}if((go&ve)!==Pe)return n=l.pending,n===null?o.next=o:(o.next=n.next,n.next=o),l.pending=o,o=nb(r),GP(r,null,e),o;return ib(r,l,o,e),nb(r)}function J0(r,o,e){if(o=o.updateQueue,o!==null&&(o=o.shared,(e&4194048)!==0)){var l=o.lanes;l&=r.pendingLanes,e|=l,o.lanes=e,Sn(r,e)}}function Rb(r,o){var{updateQueue:e,alternate:l}=r;if(l!==null&&(l=l.updateQueue,e===l)){var n=null,v=null;if(e=e.firstBaseUpdate,e!==null){do{var b={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};v===null?n=v=b:v=v.next=b,e=e.next}while(e!==null);v===null?n=v=o:v=v.next=o}else n=v=o;e={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:v,shared:l.shared,callbacks:l.callbacks},r.updateQueue=e;return}r=e.lastBaseUpdate,r===null?e.firstBaseUpdate=o:r.next=o,e.lastBaseUpdate=o}function z0(){if(D4){var r=Kt;if(r!==null)throw r}}function Q0(r,o,e,l){D4=!1;var n=r.updateQueue;vn=!1,a4=n.shared;var{firstBaseUpdate:v,lastBaseUpdate:b}=n,w=n.shared.pending;if(w!==null){n.shared.pending=null;var A=w,H=A.next;A.next=null,b===null?v=H:b.next=H,b=A;var U=r.alternate;U!==null&&(U=U.updateQueue,w=U.lastBaseUpdate,w!==b&&(w===null?U.firstBaseUpdate=H:w.next=H,U.lastBaseUpdate=A))}if(v!==null){var $=n.baseState;b=0,U=H=A=null,w=v;do{var J=w.lane&-536870913,F=J!==w.lane;if(F?(Dr&J)===J:(l&J)===J){J!==0&&J===hv&&(D4=!0),U!==null&&(U=U.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});r:{J=r;var vr=w,Or=o,Xo=e;switch(vr.tag){case lH:if(vr=vr.payload,typeof vr==="function"){zt=!0;var oo=vr.call(Xo,$,Or);if(J.mode&Le){Wo(!0);try{vr.call(Xo,$,Or)}finally{Wo(!1)}}zt=!1,$=oo;break r}$=vr;break r;case k4:J.flags=J.flags&-65537|128;case gH:if(oo=vr.payload,typeof oo==="function"){if(zt=!0,vr=oo.call(Xo,$,Or),J.mode&Le){Wo(!0);try{oo.call(Xo,$,Or)}finally{Wo(!1)}}zt=!1}else vr=oo;if(vr===null||vr===void 0)break r;$=fr({},$,vr);break r;case iH:vn=!0}}J=w.callback,J!==null&&(r.flags|=64,F&&(r.flags|=8192),F=n.callbacks,F===null?n.callbacks=[J]:F.push(J))}else F={lane:J,tag:w.tag,payload:w.payload,callback:w.callback,next:null},U===null?(H=U=F,A=$):U=U.next=F,b|=J;if(w=w.next,w===null)if(w=n.shared.pending,w===null)break;else F=w,w=F.next,F.next=null,n.lastBaseUpdate=F,n.shared.pending=null}while(1);U===null&&(A=$),n.baseState=A,n.firstBaseUpdate=H,n.lastBaseUpdate=U,v===null&&(n.shared.lanes=0),bn|=b,r.lanes=b,r.memoizedState=$}a4=null}function fP(r,o){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(o)}function QG(r,o){var e=r.shared.hiddenCallbacks;if(e!==null)for(r.shared.hiddenCallbacks=null,r=0;r<e.length;r++)fP(e[r],o)}function pP(r,o){var e=r.callbacks;if(e!==null)for(r.callbacks=null,r=0;r<e.length;r++)fP(e[r],o)}function jP(r,o){var e=Bl;Wr($u,e,r),Wr(Lt,o,r),Bl=e|o.baseLanes}function Xw(r){Wr($u,Bl,r),Wr(Lt,Lt.current,r)}function Yw(r){Bl=$u.current,qr(Lt,r),qr($u,r)}function Ti(r){var o=r.alternate;Wr(co,co.current&xt,r),Wr(Ag,r,r),Cg===null&&(o===null||Lt.current!==null?Cg=r:o.memoizedState!==null&&(Cg=r))}function Jw(r){Wr(co,co.current,r),Wr(Ag,r,r),Cg===null&&(Cg=r)}function dP(r){r.tag===22?(Wr(co,co.current,r),Wr(Ag,r,r),Cg===null&&(Cg=r)):ki(r)}function ki(r){Wr(co,co.current,r),Wr(Ag,Ag.current,r)}function hg(r){qr(Ag,r),Cg===r&&(Cg=null),qr(co,r)}function Wb(r){for(var o=r;o!==null;){if(o.tag===13){var e=o.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||C2(e)||S2(e)))return o}else if(o.tag===19&&(o.memoizedProps.revealOrder==="forwards"||o.memoizedProps.revealOrder==="backwards"||o.memoizedProps.revealOrder==="unstable_legacy-backwards"||o.memoizedProps.revealOrder==="together")){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}function Er(){var r=B;Tg===null?Tg=[r]:Tg.push(r)}function rr(){var r=B;if(Tg!==null&&(Oi++,Tg[Oi]!==r)){var o=N(Ir);if(!vH.has(o)&&(vH.add(o),Tg!==null)){for(var e="",l=0;l<=Oi;l++){var n=Tg[l],v=l===Oi?r:n;for(n=l+1+". "+n;30>n.length;)n+=" ";n+=v+`
`,e+=n}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,o,e)}}}function pv(r){r===void 0||r===null||ie(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",B,typeof r)}function Gb(){var r=N(Ir);hH.has(r)||(hH.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function To(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function zw(r,o){if(Xh)return!1;if(o===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",B),!1;r.length!==o.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,B,"["+o.join(", ")+"]","["+r.join(", ")+"]");for(var e=0;e<o.length&&e<r.length;e++)if(!Ce(r[e],o[e]))return!1;return!0}function Qw(r,o,e,l,n,v){if(wi=v,Ir=o,Tg=r!==null?r._debugHookTypes:null,Oi=-1,Xh=r!==null&&r.type!==o.type,Object.prototype.toString.call(e)==="[object AsyncFunction]"||Object.prototype.toString.call(e)==="[object AsyncGeneratorFunction]")v=N(Ir),c4.has(v)||(c4.add(v),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",v===null?"An unknown Component":"<"+v+">"));o.memoizedState=null,o.updateQueue=null,o.lanes=0,C.H=r!==null&&r.memoizedState!==null?V4:Tg!==null?bH:y4,Ov=v=(o.mode&Le)!==Lr;var b=B4(e,l,n);if(Ov=!1,Ft&&(b=Kw(o,e,l,n)),v){Wo(!0);try{b=Kw(o,e,l,n)}finally{Wo(!1)}}return sP(r,o),b}function sP(r,o){o._debugHookTypes=Tg,o.dependencies===null?Pi!==null&&(o.dependencies={lanes:0,firstContext:null,_debugThenableState:Pi}):o.dependencies._debugThenableState=Pi,C.H=Yh;var e=Mo!==null&&Mo.next!==null;if(wi=0,Tg=B=so=Mo=Ir=null,Oi=-1,r!==null&&(r.flags&65011712)!==(o.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),xu=!1,Gh=0,Pi=null,e)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||re||(r=r.dependencies,r!==null&&bb(r)&&(re=!0)),Mh?(Mh=!1,r=!0):r=!1,r&&(o=N(o)||"Unknown",tH.has(o)||c4.has(o)||(tH.add(o),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function Kw(r,o,e,l){Ir=r;var n=0;do{if(Ft&&(Pi=null),Gh=0,Ft=!1,n>=uJ)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(n+=1,Xh=!1,so=Mo=null,r.updateQueue!=null){var v=r.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}Oi=-1,C.H=uH,v=B4(o,e,l)}while(Ft);return v}function KG(){var r=C.H,o=r.useState()[0];return o=typeof o.then==="function"?K0(o):o,r=r.useState()[0],(Mo!==null?Mo.memoizedState:null)!==r&&(Ir.flags|=1024),o}function Uw(){var r=Iu!==0;return Iu=0,r}function $w(r,o,e){o.updateQueue=r.updateQueue,o.flags=(o.mode&fg)!==Lr?o.flags&-402655237:o.flags&-2053,r.lanes&=~e}function Lw(r){if(xu){for(r=r.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xu=!1}wi=0,Tg=so=Mo=Ir=null,Oi=-1,B=null,Ft=!1,Gh=Iu=0,Pi=null}function Fe(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return so===null?Ir.memoizedState=so=r:so=so.next=r,so}function uo(){if(Mo===null){var r=Ir.alternate;r=r!==null?r.memoizedState:null}else r=Mo.next;var o=so===null?Ir.memoizedState:so.next;if(o!==null)so=o,Mo=r;else{if(r===null){if(Ir.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Mo=r,r={memoizedState:Mo.memoizedState,baseState:Mo.baseState,baseQueue:Mo.baseQueue,queue:Mo.queue,next:null},so===null?Ir.memoizedState=so=r:so=so.next=r}return so}function Xb(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function K0(r){var o=Gh;return Gh+=1,Pi===null&&(Pi=SP()),r=kP(Pi,r,o),o=Ir,(so===null?o.memoizedState:so.next)===null&&(o=o.alternate,C.H=o!==null&&o.memoizedState!==null?V4:y4),r}function ai(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return K0(r);if(r.$$typeof===Ql)return Lo(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function jn(r){var o=null,e=Ir.updateQueue;if(e!==null&&(o=e.memoCache),o==null){var l=Ir.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(o={data:l.data.map(function(n){return n.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),e===null&&(e=Xb(),Ir.updateQueue=e),e.memoCache=o,e=o.data[o.index],e===void 0||Xh)for(e=o.data[o.index]=Array(r),l=0;l<r;l++)e[l]=DX;else e.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",e.length,r);return o.index++,e}function yg(r,o){return typeof o==="function"?o(r):o}function xw(r,o,e){var l=Fe();if(e!==void 0){var n=e(o);if(Ov){Wo(!0);try{e(o)}finally{Wo(!1)}}}else n=o;return l.memoizedState=l.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},l.queue=r,r=r.dispatch=IG.bind(null,Ir,r),[l.memoizedState,r]}function jv(r){var o=uo();return Iw(o,Mo,r)}function Iw(r,o,e){var l=r.queue;if(l===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");l.lastRenderedReducer=e;var n=r.baseQueue,v=l.pending;if(v!==null){if(n!==null){var b=n.next;n.next=v.next,v.next=b}o.baseQueue!==n&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),o.baseQueue=n=v,l.pending=null}if(v=r.baseState,n===null)r.memoizedState=v;else{o=n.next;var w=b=null,A=null,H=o,U=!1;do{var $=H.lane&-536870913;if($!==H.lane?(Dr&$)===$:(wi&$)===$){var J=H.revertLane;if(J===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),$===hv&&(U=!0);else if((wi&J)===J){H=H.next,J===hv&&(U=!0);continue}else $={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},A===null?(w=A=$,b=v):A=A.next=$,Ir.lanes|=J,bn|=J;$=H.action,Ov&&e(v,$),v=H.hasEagerState?H.eagerState:e(v,$)}else J={lane:$,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},A===null?(w=A=J,b=v):A=A.next=J,Ir.lanes|=$,bn|=$;H=H.next}while(H!==null&&H!==o);if(A===null?b=v:A.next=w,!Ce(v,r.memoizedState)&&(re=!0,U&&(e=Kt,e!==null)))throw e;r.memoizedState=v,r.baseState=b,r.baseQueue=A,l.lastRenderedState=v}return n===null&&(l.lanes=0),[r.memoizedState,l.dispatch]}function U0(r){var o=uo(),e=o.queue;if(e===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");e.lastRenderedReducer=r;var{dispatch:l,pending:n}=e,v=o.memoizedState;if(n!==null){e.pending=null;var b=n=n.next;do v=r(v,b.action),b=b.next;while(b!==n);Ce(v,o.memoizedState)||(re=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),e.lastRenderedState=v}return[v,l]}function Fw(r,o,e){var l=Ir,n=Fe();if(sr){if(e===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var v=e();It||v===e()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),It=!0)}else{if(v=o(),It||(e=o(),Ce(v,e)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),It=!0)),Ro===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Dr&127)!==0||rO(l,o,v)}return n.memoizedState=v,e={value:v,getSnapshot:o},n.queue=e,Qb(eO.bind(null,l,e,r),[r]),l.flags|=2048,sv(Sg|ke,{destroy:void 0},oO.bind(null,l,e,v,o),null),v}function Yb(r,o,e){var l=Ir,n=uo(),v=sr;if(v){if(e===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");e=e()}else if(e=o(),!It){var b=o();Ce(e,b)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),It=!0)}if(b=!Ce((Mo||n).memoizedState,e))n.memoizedState=e,re=!0;n=n.queue;var w=eO.bind(null,l,n,r);if(Ee(2048,ke,w,[r]),n.getSnapshot!==o||b||so!==null&&so.memoizedState.tag&Sg){if(l.flags|=2048,sv(Sg|ke,{destroy:void 0},oO.bind(null,l,n,e,o),null),Ro===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");v||(wi&127)!==0||rO(l,o,e)}return e}function rO(r,o,e){r.flags|=16384,r={getSnapshot:o,value:e},o=Ir.updateQueue,o===null?(o=Xb(),Ir.updateQueue=o,o.stores=[r]):(e=o.stores,e===null?o.stores=[r]:e.push(r))}function oO(r,o,e,l){o.value=e,o.getSnapshot=l,gO(o)&&lO(r)}function eO(r,o,e){return e(function(){gO(o)&&(Pl(2,"updateSyncExternalStore()",r),lO(r))})}function gO(r){var o=r.getSnapshot;r=r.value;try{var e=o();return!Ce(r,e)}catch(l){return!0}}function lO(r){var o=Ue(r,2);o!==null&&Bo(o,r,2)}function Nw(r){var o=Fe();if(typeof r==="function"){var e=r;if(r=e(),Ov){Wo(!0);try{e()}finally{Wo(!1)}}}return o.memoizedState=o.baseState=r,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:r},o}function Zw(r){r=Nw(r);var o=r.queue,e=XO.bind(null,Ir,o);return o.dispatch=e,[r.memoizedState,e]}function Bw(r){var o=Fe();o.memoizedState=o.baseState=r;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=e,o=jw.bind(null,Ir,!0,e),e.dispatch=o,[r,o]}function iO(r,o){var e=uo();return nO(e,Mo,r,o)}function nO(r,o,e,l){return r.baseState=e,Iw(r,Mo,typeof l==="function"?l:yg)}function vO(r,o){var e=uo();if(Mo!==null)return nO(e,Mo,r,o);return e.baseState=r,[r,e.queue.dispatch]}function UG(r,o,e,l,n){if(Ib(r))throw Error("Cannot update form state while rendering.");if(r=o.action,r!==null){var v={payload:n,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){v.listeners.push(b)}};C.T!==null?e(!0):v.isTransition=!1,l(v),e=o.pending,e===null?(v.next=o.pending=v,tO(o,v)):(v.next=e.next,o.pending=e.next=v)}}function tO(r,o){var{action:e,payload:l}=o,n=r.state;if(o.isTransition){var v=C.T,b={};b._updatedFibers=new Set,C.T=b;try{var w=e(n,l),A=C.S;A!==null&&A(b,w),hO(r,o,w)}catch(H){Cw(r,o,H)}finally{v!==null&&b.types!==null&&(v.types!==null&&v.types!==b.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),v.types=b.types),C.T=v,v===null&&b._updatedFibers&&(r=b._updatedFibers.size,b._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{b=e(n,l),hO(r,o,b)}catch(H){Cw(r,o,H)}}function hO(r,o,e){e!==null&&typeof e==="object"&&typeof e.then==="function"?(C.asyncTransitions++,e.then(xb,xb),e.then(function(l){bO(r,o,l)},function(l){return Cw(r,o,l)}),o.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):bO(r,o,e)}function bO(r,o,e){o.status="fulfilled",o.value=e,uO(o),r.state=e,o=r.pending,o!==null&&(e=o.next,e===o?r.pending=null:(e=e.next,o.next=e,tO(r,e)))}function Cw(r,o,e){var l=r.pending;if(r.pending=null,l!==null){l=l.next;do o.status="rejected",o.reason=e,uO(o),o=o.next;while(o!==l)}r.action=null}function uO(r){r=r.listeners;for(var o=0;o<r.length;o++)(0,r[o])()}function wO(r,o){return o}function dv(r,o){if(sr){var e=Ro.formState;if(e!==null){r:{var l=Ir;if(sr){if(Qo){o:{var n=Qo;for(var v=Zg;n.nodeType!==8;){if(!v){n=null;break o}if(n=ug(n.nextSibling),n===null){n=null;break o}}v=n.data,n=v===m6||v===pH?n:null}if(n){Qo=ug(n.nextSibling),l=n.data===m6;break r}}Ni(l)}l=!1}l&&(o=e[0])}}return e=Fe(),e.memoizedState=e.baseState=o,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wO,lastRenderedState:o},e.queue=l,e=XO.bind(null,Ir,l),l.dispatch=e,l=Nw(!1),v=jw.bind(null,Ir,!1,l.queue),l=Fe(),n={state:o,dispatch:null,action:r,pending:null},l.queue=n,e=UG.bind(null,Ir,n,v,e),n.dispatch=e,l.memoizedState=r,[o,e,!1]}function Jb(r){var o=uo();return PO(o,Mo,r)}function PO(r,o,e){if(o=Iw(r,o,wO)[0],r=jv(yg)[0],typeof o==="object"&&o!==null&&typeof o.then==="function")try{var l=K0(o)}catch(b){if(b===Ut)throw Ku;throw b}else l=o;o=uo();var n=o.queue,v=n.dispatch;return e!==o.memoizedState&&(Ir.flags|=2048,sv(Sg|ke,{destroy:void 0},$G.bind(null,n,e),null)),[l,v,r]}function $G(r,o){r.action=o}function zb(r){var o=uo(),e=Mo;if(e!==null)return PO(o,e,r);uo(),o=o.memoizedState,e=uo();var l=e.queue.dispatch;return e.memoizedState=r,[o,l,!1]}function sv(r,o,e,l){return r={tag:r,create:e,deps:l,inst:o,next:null},o=Ir.updateQueue,o===null&&(o=Xb(),Ir.updateQueue=o),e=o.lastEffect,e===null?o.lastEffect=r.next=r:(l=e.next,e.next=r,r.next=l,o.lastEffect=r),r}function Sw(r){var o=Fe();return r={current:r},o.memoizedState=r}function dn(r,o,e,l){var n=Fe();Ir.flags|=r,n.memoizedState=sv(Sg|o,{destroy:void 0},e,l===void 0?null:l)}function Ee(r,o,e,l){var n=uo();l=l===void 0?null:l;var v=n.memoizedState.inst;Mo!==null&&l!==null&&zw(l,Mo.memoizedState.deps)?n.memoizedState=sv(o,v,e,l):(Ir.flags|=r,n.memoizedState=sv(Sg|o,v,e,l))}function Qb(r,o){(Ir.mode&fg)!==Lr?dn(276826112,ke,r,o):dn(8390656,ke,r,o)}function LG(r){Ir.flags|=4;var o=Ir.updateQueue;if(o===null)o=Xb(),Ir.updateQueue=o,o.events=[r];else{var e=o.events;e===null?o.events=[r]:e.push(r)}}function Tw(r){var o=Fe(),e={impl:r};return o.memoizedState=e,function(){if((go&ve)!==Pe)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return e.impl.apply(void 0,arguments)}}function Kb(r){var o=uo().memoizedState;return LG({ref:o,nextImpl:r}),function(){if((go&ve)!==Pe)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return o.impl.apply(void 0,arguments)}}function kw(r,o){var e=4194308;return(Ir.mode&fg)!==Lr&&(e|=134217728),dn(e,qg,r,o)}function OO(r,o){if(typeof o==="function"){r=r();var e=o(r);return function(){typeof e==="function"?e():o(null)}}if(o!==null&&o!==void 0)return o.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}"),r=r(),o.current=r,function(){o.current=null}}function aw(r,o,e){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),e=e!==null&&e!==void 0?e.concat([r]):null;var l=4194308;(Ir.mode&fg)!==Lr&&(l|=134217728),dn(l,qg,OO.bind(null,o,r),e)}function Ub(r,o,e){typeof o!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",o!==null?typeof o:"null"),e=e!==null&&e!==void 0?e.concat([r]):null,Ee(4,qg,OO.bind(null,o,r),e)}function Dw(r,o){return Fe().memoizedState=[r,o===void 0?null:o],r}function $b(r,o){var e=uo();o=o===void 0?null:o;var l=e.memoizedState;if(o!==null&&zw(o,l[1]))return l[0];return e.memoizedState=[r,o],r}function cw(r,o){var e=Fe();o=o===void 0?null:o;var l=r();if(Ov){Wo(!0);try{r()}finally{Wo(!1)}}return e.memoizedState=[l,o],l}function Lb(r,o){var e=uo();o=o===void 0?null:o;var l=e.memoizedState;if(o!==null&&zw(o,l[1]))return l[0];if(l=r(),Ov){Wo(!0);try{r()}finally{Wo(!1)}}return e.memoizedState=[l,o],l}function yw(r,o){var e=Fe();return Vw(e,r,o)}function mO(r,o){var e=uo();return qO(e,Mo.memoizedState,r,o)}function AO(r,o){var e=uo();return Mo===null?Vw(e,r,o):qO(e,Mo.memoizedState,r,o)}function Vw(r,o,e){if(e===void 0||(wi&1073741824)!==0&&(Dr&261930)===0)return r.memoizedState=o;return r.memoizedState=e,r=Hm(),Ir.lanes|=r,bn|=r,e}function qO(r,o,e,l){if(Ce(e,o))return e;if(Lt.current!==null)return r=Vw(r,e,l),Ce(r,o)||(re=!0),r;if((wi&42)===0||(wi&1073741824)!==0&&(Dr&261930)===0)return re=!0,r.memoizedState=e;return r=Hm(),Ir.lanes|=r,bn|=r,o}function xb(){C.asyncTransitions--}function HO(r,o,e,l,n){var v=ho.p;ho.p=v!==0&&v<Eg?v:Eg;var b=C.T,w={};w._updatedFibers=new Set,C.T=w,jw(r,!1,o,e);try{var A=n(),H=C.S;if(H!==null&&H(w,A),A!==null&&typeof A==="object"&&typeof A.then==="function"){C.asyncTransitions++,A.then(xb,xb);var U=zG(A,l);$0(r,o,U,bg(r))}else $0(r,o,l,bg(r))}catch($){$0(r,o,{then:function(){},status:"rejected",reason:$},bg(r))}finally{ho.p=v,b!==null&&w.types!==null&&(b.types!==null&&b.types!==w.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),b.types=w.types),C.T=b,b===null&&w._updatedFibers&&(r=w._updatedFibers.size,w._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function _w(r,o,e,l){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var n=MO(r).queue;YG(r),HO(r,n,o,Jv,e===null?X:function(){return RO(r),e(l)})}function MO(r){var o=r.memoizedState;if(o!==null)return o;o={memoizedState:Jv,baseState:Jv,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:Jv},next:null};var e={};return o.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:e},next:null},r.memoizedState=o,r=r.alternate,r!==null&&(r.memoizedState=o),o}function RO(r){C.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var o=MO(r);o.next===null&&(o=r.alternate.memoizedState),$0(r,o.next.queue,{},bg(r))}function Ew(){var r=Nw(!1);return r=HO.bind(null,Ir,r.queue,!0,!1),Fe().memoizedState=r,[!1,r]}function WO(){var r=jv(yg)[0],o=uo().memoizedState;return[typeof r==="boolean"?r:K0(r),o]}function GO(){var r=U0(yg)[0],o=uo().memoizedState;return[typeof r==="boolean"?r:K0(r),o]}function sn(){return Lo(Sh)}function fw(){var r=Fe(),o=Ro.identifierPrefix;if(sr){var e=vi,l=ni;e=(l&~(1<<32-Ne(l)-1)).toString(32)+e,o="_"+o+"R_"+e,e=Iu++,0<e&&(o+="H"+e.toString(32)),o+="_"}else e=bJ++,o="_"+o+"r_"+e.toString(32)+"_";return r.memoizedState=o}function pw(){return Fe().memoizedState=xG.bind(null,Ir)}function xG(r,o){for(var e=r.return;e!==null;){switch(e.tag){case 24:case 3:var l=bg(e),n=Ci(l),v=Si(e,n,l);v!==null&&(Pl(l,"refresh()",r),Bo(v,e,l),J0(v,e,l)),r=Aw(),o!==null&&o!==void 0&&v!==null&&console.error("The seed argument is not enabled outside experimental channels."),n.payload={cache:r};return}e=e.return}}function IG(r,o,e){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=bg(r);var n={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};Ib(r)?YO(o,n):(n=lw(r,o,n,l),n!==null&&(Pl(l,"dispatch()",r),Bo(n,r,l),JO(n,o,l)))}function XO(r,o,e){var l=arguments;typeof l[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),l=bg(r),$0(r,o,e,l)&&Pl(l,"setState()",r)}function $0(r,o,e,l){var n={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ib(r))YO(o,n);else{var v=r.alternate;if(r.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null)){var b=C.H;C.H=jg;try{var w=o.lastRenderedState,A=v(w,e);if(n.hasEagerState=!0,n.eagerState=A,Ce(A,w))return ib(r,o,n,0),Ro===null&&lb(),!1}catch(H){}finally{C.H=b}}if(e=lw(r,o,n,l),e!==null)return Bo(e,r,l),JO(e,o,l),!0}return!1}function jw(r,o,e,l){if(C.T===null&&hv===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),l={lane:2,revertLane:Q2(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ib(r)){if(o)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else o=lw(r,e,l,2),o!==null&&(Pl(2,"setOptimistic()",r),Bo(o,r,2))}function Ib(r){var o=r.alternate;return r===Ir||o!==null&&o===Ir}function YO(r,o){Ft=xu=!0;var e=r.pending;e===null?o.next=o:(o.next=e.next,e.next=o),r.pending=o}function JO(r,o,e){if((e&4194048)!==0){var l=o.lanes;l&=r.pendingLanes,e|=l,o.lanes=e,Sn(r,e)}}function dw(r){if(r!==null&&typeof r!=="function"){var o=String(r);GH.has(o)||(GH.add(o),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function sw(r,o,e,l){var n=r.memoizedState,v=e(l,n);if(r.mode&Le){Wo(!0);try{v=e(l,n)}finally{Wo(!1)}}v===void 0&&(o=y(o)||"Component",HH.has(o)||(HH.add(o),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",o))),n=v===null||v===void 0?n:fr({},n,v),r.memoizedState=n,r.lanes===0&&(r.updateQueue.baseState=n)}function zO(r,o,e,l,n,v,b){var w=r.stateNode;if(typeof w.shouldComponentUpdate==="function"){if(e=w.shouldComponentUpdate(l,v,b),r.mode&Le){Wo(!0);try{e=w.shouldComponentUpdate(l,v,b)}finally{Wo(!1)}}return e===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",y(o)||"Component"),e}return o.prototype&&o.prototype.isPureReactComponent?!H0(e,l)||!H0(n,v):!0}function QO(r,o,e,l){var n=o.state;typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps(e,l),typeof o.UNSAFE_componentWillReceiveProps==="function"&&o.UNSAFE_componentWillReceiveProps(e,l),o.state!==n&&(r=N(r)||"Component",PH.has(r)||(PH.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),_4.enqueueReplaceState(o,o.state,null))}function rv(r,o){var e=o;if("ref"in o){e={};for(var l in o)l!=="ref"&&(e[l]=o[l])}if(r=r.defaultProps){e===o&&(e=fr({},e));for(var n in r)e[n]===void 0&&(e[n]=r[n])}return e}function KO(r){Y4(r),console.warn(`%s

%s
`,Nt?"An error occurred in the <"+Nt+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function UO(r){var o=Nt?"The above error occurred in the <"+Nt+"> component.":"The above error occurred in one of your React components.",e="React will try to recreate this component tree from scratch using the error boundary you provided, "+((E4||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var l=r.environmentName;r=[`%o

%s

%s
`,r,o,e].slice(0),typeof r[0]==="string"?r.splice(0,1,lM+" "+r[0],iM,l5+l+l5,nM):r.splice(0,0,lM,iM,l5+l+l5,nM),r.unshift(console),l=LJ.apply(console.error,r),l()}else console.error(`%o

%s

%s
`,r,o,e)}function $O(r){Y4(r)}function Fb(r,o){try{Nt=o.source?N(o.source):null,E4=null;var e=o.value;if(C.actQueue!==null)C.thrownErrors.push(e);else{var l=r.onUncaughtError;l(e,{componentStack:o.stack})}}catch(n){setTimeout(function(){throw n})}}function LO(r,o,e){try{Nt=e.source?N(e.source):null,E4=N(o);var l=r.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function r2(r,o,e){return e=Ci(e),e.tag=k4,e.payload={element:null},e.callback=function(){hr(o.source,Fb,r,o)},e}function o2(r){return r=Ci(r),r.tag=k4,r}function e2(r,o,e,l){var n=e.type.getDerivedStateFromError;if(typeof n==="function"){var v=l.value;r.payload=function(){return n(v)},r.callback=function(){YP(e),hr(l.source,LO,o,e,l)}}var b=e.stateNode;b!==null&&typeof b.componentDidCatch==="function"&&(r.callback=function(){YP(e),hr(l.source,LO,o,e,l),typeof n!=="function"&&(wn===null?wn=new Set([this]):wn.add(this)),nJ(this,l),typeof n==="function"||(e.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",N(e)||"Unknown")})}function FG(r,o,e,l,n){if(e.flags|=32768,$l&&C0(r,n),l!==null&&typeof l==="object"&&typeof l.then==="function"){if(o=e.alternate,o!==null&&fv(o,e,n,!0),sr&&(Il=!0),e=Ag.current,e!==null){switch(e.tag){case 31:case 13:return Cg===null?Db():e.alternate===null&&No===Ai&&(No=Zu),e.flags&=-257,e.flags|=65536,e.lanes=n,l===Uu?e.flags|=16384:(o=e.updateQueue,o===null?e.updateQueue=new Set([l]):o.add(l),X2(r,l,n)),!1;case 22:return e.flags|=65536,l===Uu?e.flags|=16384:(o=e.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=o):(e=o.retryQueue,e===null?o.retryQueue=new Set([l]):e.add(l)),X2(r,l,n)),!1}throw Error("Unexpected Suspense handler tag ("+e.tag+"). This is a bug in React.")}return X2(r,l,n),Db(),!1}if(sr)return Il=!0,o=Ag.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=n,l!==$4&&R0(ng(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:l}),e))):(l!==$4&&R0(ng(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:l}),e)),r=r.current.alternate,r.flags|=65536,n&=-n,r.lanes|=n,l=ng(l,e),n=r2(r.stateNode,l,n),Rb(r,n),No!==tn&&(No=mv)),!1;var v=ng(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:l}),e);if($h===null?$h=[v]:$h.push(v),No!==tn&&(No=mv),o===null)return!0;l=ng(l,e),e=o;do{switch(e.tag){case 3:return e.flags|=65536,r=n&-n,e.lanes|=r,r=r2(e.stateNode,l,r),Rb(e,r),!1;case 1:if(o=e.type,v=e.stateNode,(e.flags&128)===0&&(typeof o.getDerivedStateFromError==="function"||v!==null&&typeof v.componentDidCatch==="function"&&(wn===null||!wn.has(v))))return e.flags|=65536,n&=-n,e.lanes|=n,n=o2(n),e2(n,r,e,l),Rb(e,n),!1}e=e.return}while(e!==null);return!1}function He(r,o,e,l){o.child=r===null?eH(o,null,e,l):Pv(o,r.child,e,l)}function xO(r,o,e,l,n){e=e.render;var v=o.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;if(fn(o),l=Qw(r,o,e,b,v,n),w=Uw(),r!==null&&!re)return $w(r,o,n),ri(r,o,n);return sr&&w&&bw(o),o.flags|=1,He(r,o,l,n),o.child}function IO(r,o,e,l,n){if(r===null){var v=e.type;if(typeof v==="function"&&!nw(v)&&v.defaultProps===void 0&&e.compare===null)return e=yn(v),o.tag=15,o.type=e,l2(o,v),FO(r,o,e,l,n);return r=vw(e.type,null,l,o,o.mode,n),r.ref=o.ref,r.return=o,o.child=r}if(v=r.child,!b2(r,n)){var b=v.memoizedProps;if(e=e.compare,e=e!==null?e:H0,e(b,l)&&r.ref===o.ref)return ri(r,o,n)}return o.flags|=1,r=pl(v,l),r.ref=o.ref,r.return=o,o.child=r}function FO(r,o,e,l,n){if(r!==null){var v=r.memoizedProps;if(H0(v,l)&&r.ref===o.ref&&o.type===r.type)if(re=!1,o.pendingProps=l=v,b2(r,n))(r.flags&131072)!==0&&(re=!0);else return o.lanes=r.lanes,ri(r,o,n)}return g2(r,o,e,l,n)}function NO(r,o,e,l){var n=l.children,v=r!==null?r.memoizedState:null;if(r===null&&o.stateNode===null&&(o.stateNode={_visibility:ih,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((o.flags&128)!==0){if(v=v!==null?v.baseLanes|e:e,r!==null){l=o.child=r.child;for(n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~v}else l=0,o.child=null;return ZO(r,o,v,e,l)}if((e&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ob(o,v!==null?v.cachePool:null),v!==null?jP(o,v):Xw(o),dP(o);else return l=o.lanes=536870912,ZO(r,o,v!==null?v.baseLanes|e:e,e,l)}else v!==null?(Ob(o,v.cachePool),jP(o,v),ki(o),o.memoizedState=null):(r!==null&&Ob(o,null),Xw(o),ki(o));return He(r,o,n,e),o.child}function L0(r,o){return r!==null&&r.tag===22||o.stateNode!==null||(o.stateNode={_visibility:ih,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.sibling}function ZO(r,o,e,l,n){var v=Mw();return v=v===null?null:{parent:po._currentValue,pool:v},o.memoizedState={baseLanes:e,cachePool:v},r!==null&&Ob(o,null),Xw(o),dP(o),r!==null&&fv(r,o,l,!0),o.childLanes=n,null}function Nb(r,o){var e=o.hidden;return e!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,e===!0?"hidden":e===!1?"hidden={false}":"hidden={...}",e?'mode="hidden"':'mode="visible"'),o=Bb({mode:o.mode,children:o.children},r.mode),o.ref=r.ref,r.child=o,o.return=r,o}function BO(r,o,e){return Pv(o,r.child,null,e),r=Nb(o,o.pendingProps),r.flags|=2,hg(o),o.memoizedState=null,r}function NG(r,o,e){var l=o.pendingProps,n=(o.flags&128)!==0;if(o.flags&=-129,r===null){if(sr){if(l.mode==="hidden")return r=Nb(o,l),o.lanes=536870912,L0(null,r);if(Jw(o),(r=Qo)?(e=tA(r,Zg),e=e!==null&&e.data===Wv?e:null,e!==null&&(l={dehydrated:e,treeContext:UP(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=QP(e),l.return=o,o.child=l,We=o,Qo=null)):e=null,e===null)throw tb(o,r),Ni(o);return o.lanes=536870912,null}return Nb(o,l)}var v=r.memoizedState;if(v!==null){var b=v.dehydrated;if(Jw(o),n)if(o.flags&256)o.flags&=-257,o=BO(r,o,e);else if(o.memoizedState!==null)o.child=r.child,o.flags|=128,o=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(LP(),(e&536870912)!==0&&ab(o),re||fv(r,o,e,!1),n=(e&r.childLanes)!==0,re||n){if(l=Ro,l!==null&&(b=Tn(l,e),b!==0&&b!==v.retryLane))throw v.retryLane=b,Ue(r,b),Bo(l,r,b),f4;Db(),o=BO(r,o,e)}else r=v.treeContext,Qo=ug(b.nextSibling),We=o,sr=!0,rn=null,Il=!1,mg=null,Zg=!1,r!==null&&$P(o,r),o=Nb(o,l),o.flags|=4096;return o}return v=r.child,l={mode:l.mode,children:l.children},(e&536870912)!==0&&(e&r.lanes)!==0&&ab(o),r=pl(v,l),r.ref=o.ref,o.child=r,r.return=o,r}function Zb(r,o){var e=o.ref;if(e===null)r!==null&&r.ref!==null&&(o.flags|=4194816);else{if(typeof e!=="function"&&typeof e!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==e)o.flags|=4194816}}function g2(r,o,e,l,n){if(e.prototype&&typeof e.prototype.render==="function"){var v=y(e)||"Unknown";XH[v]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",v,v),XH[v]=!0)}if(o.mode&Le&&pg.recordLegacyContextWarning(o,null),r===null&&(l2(o,o.type),e.contextTypes&&(v=y(e)||"Unknown",JH[v]||(JH[v]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",v)))),fn(o),e=Qw(r,o,e,l,void 0,n),l=Uw(),r!==null&&!re)return $w(r,o,n),ri(r,o,n);return sr&&l&&bw(o),o.flags|=1,He(r,o,e,n),o.child}function CO(r,o,e,l,n,v){if(fn(o),Oi=-1,Xh=r!==null&&r.type!==o.type,o.updateQueue=null,e=Kw(o,l,e,n),sP(r,o),l=Uw(),r!==null&&!re)return $w(r,o,v),ri(r,o,v);return sr&&l&&bw(o),o.flags|=1,He(r,o,e,v),o.child}function SO(r,o,e,l,n){switch(O(o)){case!1:var v=o.stateNode,b=new o.type(o.memoizedProps,v.context).state;v.updater.enqueueSetState(v,b,null);break;case!0:o.flags|=128,o.flags|=65536,v=Error("Simulated error coming from DevTools");var w=n&-n;if(o.lanes|=w,b=Ro,b===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");w=o2(w),e2(w,b,o,ng(v,o)),Rb(o,w)}if(fn(o),o.stateNode===null){if(b=si,v=e.contextType,"contextType"in e&&v!==null&&(v===void 0||v.$$typeof!==Ql)&&!WH.has(e)&&(WH.add(e),w=v===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof v!=="object"?" However, it is set to a "+typeof v+".":v.$$typeof===p2?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(v).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",y(e)||"Component",w)),typeof v==="object"&&v!==null&&(b=Lo(v)),v=new e(l,b),o.mode&Le){Wo(!0);try{v=new e(l,b)}finally{Wo(!1)}}if(b=o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=_4,o.stateNode=v,v._reactInternals=o,v._reactInternalInstance=wH,typeof e.getDerivedStateFromProps==="function"&&b===null&&(b=y(e)||"Component",OH.has(b)||(OH.add(b),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",b,v.state===null?"null":"undefined",b))),typeof e.getDerivedStateFromProps==="function"||typeof v.getSnapshotBeforeUpdate==="function"){var A=w=b=null;if(typeof v.componentWillMount==="function"&&v.componentWillMount.__suppressDeprecationWarning!==!0?b="componentWillMount":typeof v.UNSAFE_componentWillMount==="function"&&(b="UNSAFE_componentWillMount"),typeof v.componentWillReceiveProps==="function"&&v.componentWillReceiveProps.__suppressDeprecationWarning!==!0?w="componentWillReceiveProps":typeof v.UNSAFE_componentWillReceiveProps==="function"&&(w="UNSAFE_componentWillReceiveProps"),typeof v.componentWillUpdate==="function"&&v.componentWillUpdate.__suppressDeprecationWarning!==!0?A="componentWillUpdate":typeof v.UNSAFE_componentWillUpdate==="function"&&(A="UNSAFE_componentWillUpdate"),b!==null||w!==null||A!==null){v=y(e)||"Component";var H=typeof e.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";AH.has(v)||(AH.add(v),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,v,H,b!==null?`
  `+b:"",w!==null?`
  `+w:"",A!==null?`
  `+A:""))}}v=o.stateNode,b=y(e)||"Component",v.render||(e.prototype&&typeof e.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",b):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",b)),!v.getInitialState||v.getInitialState.isReactClassApproved||v.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",b),v.getDefaultProps&&!v.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",b),v.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",b),e.childContextTypes&&!RH.has(e)&&(RH.add(e),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",b)),e.contextTypes&&!MH.has(e)&&(MH.add(e),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",b)),typeof v.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",b),e.prototype&&e.prototype.isPureReactComponent&&typeof v.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",y(e)||"A pure component"),typeof v.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",b),typeof v.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",b),typeof v.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",b),typeof v.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",b),w=v.props!==l,v.props!==void 0&&w&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",b),v.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",b,b),typeof v.getSnapshotBeforeUpdate!=="function"||typeof v.componentDidUpdate==="function"||mH.has(e)||(mH.add(e),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",y(e))),typeof v.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof v.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",b),typeof e.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",b),(w=v.state)&&(typeof w!=="object"||ie(w))&&console.error("%s.state: must be set to an object or null",b),typeof v.getChildContext==="function"&&typeof e.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",b),v=o.stateNode,v.props=l,v.state=o.memoizedState,v.refs={},Ww(o),b=e.contextType,v.context=typeof b==="object"&&b!==null?Lo(b):si,v.state===l&&(b=y(e)||"Component",qH.has(b)||(qH.add(b),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",b))),o.mode&Le&&pg.recordLegacyContextWarning(o,v),pg.recordUnsafeLifecycleWarnings(o,v),v.state=o.memoizedState,b=e.getDerivedStateFromProps,typeof b==="function"&&(sw(o,e,b,l),v.state=o.memoizedState),typeof e.getDerivedStateFromProps==="function"||typeof v.getSnapshotBeforeUpdate==="function"||typeof v.UNSAFE_componentWillMount!=="function"&&typeof v.componentWillMount!=="function"||(b=v.state,typeof v.componentWillMount==="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount==="function"&&v.UNSAFE_componentWillMount(),b!==v.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",N(o)||"Component"),_4.enqueueReplaceState(v,v.state,null)),Q0(o,l,v,n),z0(),v.state=o.memoizedState),typeof v.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&fg)!==Lr&&(o.flags|=134217728),v=!0}else if(r===null){v=o.stateNode;var U=o.memoizedProps;w=rv(e,U),v.props=w;var $=v.context;A=e.contextType,b=si,typeof A==="object"&&A!==null&&(b=Lo(A)),H=e.getDerivedStateFromProps,A=typeof H==="function"||typeof v.getSnapshotBeforeUpdate==="function",U=o.pendingProps!==U,A||typeof v.UNSAFE_componentWillReceiveProps!=="function"&&typeof v.componentWillReceiveProps!=="function"||(U||$!==b)&&QO(o,v,l,b),vn=!1;var J=o.memoizedState;v.state=J,Q0(o,l,v,n),z0(),$=o.memoizedState,U||J!==$||vn?(typeof H==="function"&&(sw(o,e,H,l),$=o.memoizedState),(w=vn||zO(o,e,w,l,J,$,b))?(A||typeof v.UNSAFE_componentWillMount!=="function"&&typeof v.componentWillMount!=="function"||(typeof v.componentWillMount==="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount==="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&fg)!==Lr&&(o.flags|=134217728)):(typeof v.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&fg)!==Lr&&(o.flags|=134217728),o.memoizedProps=l,o.memoizedState=$),v.props=l,v.state=$,v.context=b,v=w):(typeof v.componentDidMount==="function"&&(o.flags|=4194308),(o.mode&fg)!==Lr&&(o.flags|=134217728),v=!1)}else{v=o.stateNode,Gw(r,o),b=o.memoizedProps,A=rv(e,b),v.props=A,H=o.pendingProps,J=v.context,$=e.contextType,w=si,typeof $==="object"&&$!==null&&(w=Lo($)),U=e.getDerivedStateFromProps,($=typeof U==="function"||typeof v.getSnapshotBeforeUpdate==="function")||typeof v.UNSAFE_componentWillReceiveProps!=="function"&&typeof v.componentWillReceiveProps!=="function"||(b!==H||J!==w)&&QO(o,v,l,w),vn=!1,J=o.memoizedState,v.state=J,Q0(o,l,v,n),z0();var F=o.memoizedState;b!==H||J!==F||vn||r!==null&&r.dependencies!==null&&bb(r.dependencies)?(typeof U==="function"&&(sw(o,e,U,l),F=o.memoizedState),(A=vn||zO(o,e,A,l,J,F,w)||r!==null&&r.dependencies!==null&&bb(r.dependencies))?($||typeof v.UNSAFE_componentWillUpdate!=="function"&&typeof v.componentWillUpdate!=="function"||(typeof v.componentWillUpdate==="function"&&v.componentWillUpdate(l,F,w),typeof v.UNSAFE_componentWillUpdate==="function"&&v.UNSAFE_componentWillUpdate(l,F,w)),typeof v.componentDidUpdate==="function"&&(o.flags|=4),typeof v.getSnapshotBeforeUpdate==="function"&&(o.flags|=1024)):(typeof v.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof v.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=F),v.props=l,v.state=F,v.context=w,v=A):(typeof v.componentDidUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=4),typeof v.getSnapshotBeforeUpdate!=="function"||b===r.memoizedProps&&J===r.memoizedState||(o.flags|=1024),v=!1)}if(w=v,Zb(r,o),b=(o.flags&128)!==0,w||b){if(w=o.stateNode,Ve(o),b&&typeof e.getDerivedStateFromError!=="function")e=null,Se=-1;else if(e=aq(w),o.mode&Le){Wo(!0);try{aq(w)}finally{Wo(!1)}}o.flags|=1,r!==null&&b?(o.child=Pv(o,r.child,null,n),o.child=Pv(o,null,e,n)):He(r,o,e,n),o.memoizedState=w.state,r=o.child}else r=ri(r,o,n);return n=o.stateNode,v&&n.props!==l&&(Zt||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",N(o)||"a component"),Zt=!0),r}function TO(r,o,e,l){return En(),o.flags|=256,He(r,o,e,l),o.child}function l2(r,o){o&&o.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,o.displayName||o.name||"Component"),typeof o.getDerivedStateFromProps==="function"&&(r=y(o)||"Unknown",zH[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),zH[r]=!0)),typeof o.contextType==="object"&&o.contextType!==null&&(o=y(o)||"Unknown",YH[o]||(console.error("%s: Function components do not support contextType.",o),YH[o]=!0))}function i2(r){return{baseLanes:r,cachePool:CP()}}function n2(r,o,e){return r=r!==null?r.childLanes&~e:0,o&&(r|=se),r}function kO(r,o,e){var l,n=o.pendingProps;P(o)&&(o.flags|=128);var v=!1,b=(o.flags&128)!==0;if((l=b)||(l=r!==null&&r.memoizedState===null?!1:(co.current&Wh)!==0),l&&(v=!0,o.flags&=-129),l=(o.flags&32)!==0,o.flags&=-33,r===null){if(sr){if(v?Ti(o):ki(o),(r=Qo)?(e=tA(r,Zg),e=e!==null&&e.data!==Wv?e:null,e!==null&&(l={dehydrated:e,treeContext:UP(),retryLane:536870912,hydrationErrors:null},o.memoizedState=l,l=QP(e),l.return=o,o.child=l,We=o,Qo=null)):e=null,e===null)throw tb(o,r),Ni(o);return S2(e)?o.lanes=32:o.lanes=536870912,null}var w=n.children;if(n=n.fallback,v){ki(o);var A=o.mode;return w=Bb({mode:"hidden",children:w},A),n=Vn(n,A,e,null),w.return=o,n.return=o,w.sibling=n,o.child=w,n=o.child,n.memoizedState=i2(e),n.childLanes=n2(r,l,e),o.memoizedState=p4,L0(null,n)}return Ti(o),v2(o,w)}var H=r.memoizedState;if(H!==null){var U=H.dehydrated;if(U!==null){if(b)o.flags&256?(Ti(o),o.flags&=-257,o=t2(r,o,e)):o.memoizedState!==null?(ki(o),o.child=r.child,o.flags|=128,o=null):(ki(o),w=n.fallback,A=o.mode,n=Bb({mode:"visible",children:n.children},A),w=Vn(w,A,e,null),w.flags|=2,n.return=o,w.return=o,n.sibling=w,o.child=n,Pv(o,r.child,null,e),n=o.child,n.memoizedState=i2(e),n.childLanes=n2(r,l,e),o.memoizedState=p4,o=L0(null,n));else if(Ti(o),LP(),(e&536870912)!==0&&ab(o),S2(U)){if(l=U.nextSibling&&U.nextSibling.dataset,l){w=l.dgst;var $=l.msg;A=l.stck;var J=l.cstck}v=$,l=w,n=A,U=J,w=v,A=U,w=w?Error(w):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),w.stack=n||"",w.digest=l,l=A===void 0?null:A,n={value:w,source:null,stack:l},typeof l==="string"&&U4.set(w,n),R0(n),o=t2(r,o,e)}else if(re||fv(r,o,e,!1),l=(e&r.childLanes)!==0,re||l){if(l=Ro,l!==null&&(n=Tn(l,e),n!==0&&n!==H.retryLane))throw H.retryLane=n,Ue(r,n),Bo(l,r,n),f4;C2(U)||Db(),o=t2(r,o,e)}else C2(U)?(o.flags|=192,o.child=r.child,o=null):(r=H.treeContext,Qo=ug(U.nextSibling),We=o,sr=!0,rn=null,Il=!1,mg=null,Zg=!1,r!==null&&$P(o,r),o=v2(o,n.children),o.flags|=4096);return o}}if(v)return ki(o),w=n.fallback,A=o.mode,J=r.child,U=J.sibling,n=pl(J,{mode:"hidden",children:n.children}),n.subtreeFlags=J.subtreeFlags&65011712,U!==null?w=pl(U,w):(w=Vn(w,A,e,null),w.flags|=2),w.return=o,n.return=o,n.sibling=w,o.child=n,L0(null,n),n=o.child,w=r.child.memoizedState,w===null?w=i2(e):(A=w.cachePool,A!==null?(J=po._currentValue,A=A.parent!==J?{parent:J,pool:J}:A):A=CP(),w={baseLanes:w.baseLanes|e,cachePool:A}),n.memoizedState=w,n.childLanes=n2(r,l,e),o.memoizedState=p4,L0(r.child,n);return H!==null&&(e&62914560)===e&&(e&r.lanes)!==0&&ab(o),Ti(o),e=r.child,r=e.sibling,e=pl(e,{mode:"visible",children:n.children}),e.return=o,e.sibling=null,r!==null&&(l=o.deletions,l===null?(o.deletions=[r],o.flags|=16):l.push(r)),o.child=e,o.memoizedState=null,e}function v2(r,o){return o=Bb({mode:"visible",children:o},r.mode),o.return=r,r.child=o}function Bb(r,o){return r=G(22,r,null,o),r.lanes=0,r}function t2(r,o,e){return Pv(o,r.child,null,e),r=v2(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function aO(r,o,e){r.lanes|=o;var l=r.alternate;l!==null&&(l.lanes|=o),Ow(r.return,o,e)}function h2(r,o,e,l,n,v){var b=r.memoizedState;b===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:n,treeForkCount:v}:(b.isBackwards=o,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=e,b.tailMode=n,b.treeForkCount=v)}function DO(r,o,e){var l=o.pendingProps,n=l.revealOrder,v=l.tail,b=l.children,w=co.current;if((l=(w&Wh)!==0)?(w=w&xt|Wh,o.flags|=128):w&=xt,Wr(co,w,o),w=n==null?"null":n,n!=="forwards"&&n!=="unstable_legacy-backwards"&&n!=="together"&&n!=="independent"&&!QH[w])if(QH[w]=!0,n==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(n==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof n==="string")switch(n.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',n,n.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',n,n.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',n)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',n);if(w=v==null?"null":v,!Nu[w])if(v==null){if(n==="forwards"||n==="backwards"||n==="unstable_legacy-backwards")Nu[w]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else v!=="visible"&&v!=="collapsed"&&v!=="hidden"?(Nu[w]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',v)):n!=="forwards"&&n!=="backwards"&&n!=="unstable_legacy-backwards"&&(Nu[w]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',v));r:if((n==="forwards"||n==="backwards"||n==="unstable_legacy-backwards")&&b!==void 0&&b!==null&&b!==!1)if(ie(b)){for(w=0;w<b.length;w++)if(!EP(b[w],w))break r}else if(w=Z(b),typeof w==="function"){if(w=w.call(b))for(var A=w.next(),H=0;!A.done;A=w.next()){if(!EP(A.value,H))break r;H++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',n);if(He(r,o,b,e),sr?(Fi(),b=nh):b=0,!l&&r!==null&&(r.flags&128)!==0)r:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&aO(r,e,o);else if(r.tag===19)aO(r,e,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break r;for(;r.sibling===null;){if(r.return===null||r.return===o)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(n){case"forwards":e=o.child;for(n=null;e!==null;)r=e.alternate,r!==null&&Wb(r)===null&&(n=e),e=e.sibling;e=n,e===null?(n=o.child,o.child=null):(n=e.sibling,e.sibling=null),h2(o,!1,n,e,v,b);break;case"backwards":case"unstable_legacy-backwards":e=null,n=o.child;for(o.child=null;n!==null;){if(r=n.alternate,r!==null&&Wb(r)===null){o.child=n;break}r=n.sibling,n.sibling=e,e=n,n=r}h2(o,!0,e,null,v,b);break;case"together":h2(o,!1,null,null,void 0,b);break;default:o.memoizedState=null}return o.child}function ri(r,o,e){if(r!==null&&(o.dependencies=r.dependencies),Se=-1,bn|=o.lanes,(e&o.childLanes)===0)if(r!==null){if(fv(r,o,e,!1),(e&o.childLanes)===0)return null}else return null;if(r!==null&&o.child!==r.child)throw Error("Resuming work not yet implemented.");if(o.child!==null){r=o.child,e=pl(r,r.pendingProps),o.child=e;for(e.return=o;r.sibling!==null;)r=r.sibling,e=e.sibling=pl(r,r.pendingProps),e.return=o;e.sibling=null}return o.child}function b2(r,o){if((r.lanes&o)!==0)return!0;return r=r.dependencies,r!==null&&bb(r)?!0:!1}function ZG(r,o,e){switch(o.tag){case 3:a(o,o.stateNode.containerInfo),Zi(o,po,r.memoizedState.cache),En();break;case 27:case 5:Kr(o);break;case 4:a(o,o.stateNode.containerInfo);break;case 10:Zi(o,o.type,o.memoizedProps.value);break;case 12:(e&o.childLanes)!==0&&(o.flags|=4),o.flags|=2048;var l=o.stateNode;l.effectDuration=-0,l.passiveEffectDuration=-0;break;case 31:if(o.memoizedState!==null)return o.flags|=128,Jw(o),null;break;case 13:if(l=o.memoizedState,l!==null){if(l.dehydrated!==null)return Ti(o),o.flags|=128,null;if((e&o.child.childLanes)!==0)return kO(r,o,e);return Ti(o),r=ri(r,o,e),r!==null?r.sibling:null}Ti(o);break;case 19:var n=(r.flags&128)!==0;if(l=(e&o.childLanes)!==0,l||(fv(r,o,e,!1),l=(e&o.childLanes)!==0),n){if(l)return DO(r,o,e);o.flags|=128}if(n=o.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Wr(co,co.current,o),l)break;else return null;case 22:return o.lanes=0,NO(r,o,e,o.pendingProps);case 24:Zi(o,po,r.memoizedState.cache)}return ri(r,o,e)}function u2(r,o,e){if(o._debugNeedsRemount&&r!==null){e=vw(o.type,o.key,o.pendingProps,o._debugOwner||null,o.mode,o.lanes),e._debugStack=o._debugStack,e._debugTask=o._debugTask;var l=o.return;if(l===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,o.alternate=null,e.index=o.index,e.sibling=o.sibling,e.return=o.return,e.ref=o.ref,e._debugInfo=o._debugInfo,o===l.child)l.child=e;else{var n=l.child;if(n===null)throw Error("Expected parent to have a child.");for(;n.sibling!==o;)if(n=n.sibling,n===null)throw Error("Expected to find the previous sibling.");n.sibling=e}return o=l.deletions,o===null?(l.deletions=[r],l.flags|=16):o.push(r),e.flags|=2,e}if(r!==null)if(r.memoizedProps!==o.pendingProps||o.type!==r.type)re=!0;else{if(!b2(r,e)&&(o.flags&128)===0)return re=!1,ZG(r,o,e);re=(r.flags&131072)!==0?!0:!1}else{if(re=!1,l=sr)Fi(),l=(o.flags&1048576)!==0;l&&(l=o.index,Fi(),KP(o,nh,l))}switch(o.lanes=0,o.tag){case 16:r:if(l=o.pendingProps,r=Bi(o.elementType),o.type=r,typeof r==="function")nw(r)?(l=rv(r,l),o.tag=1,o.type=r=yn(r),o=SO(null,o,r,l,e)):(o.tag=0,l2(o,r),o.type=r=yn(r),o=g2(null,o,r,l,e));else{if(r!==void 0&&r!==null){if(n=r.$$typeof,n===_0){o.tag=11,o.type=r=iw(r),o=xO(null,o,r,l,e);break r}else if(n===gu){o.tag=14,o=IO(null,o,r,l,e);break r}}throw o="",r!==null&&typeof r==="object"&&r.$$typeof===wg&&(o=" Did you wrap a component in React.lazy() more than once?"),e=y(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+e+". Lazy element type must resolve to a class or function."+o)}return o;case 0:return g2(r,o,o.type,o.pendingProps,e);case 1:return l=o.type,n=rv(l,o.pendingProps),SO(r,o,l,n,e);case 3:r:{if(a(o,o.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");l=o.pendingProps;var v=o.memoizedState;n=v.element,Gw(r,o),Q0(o,l,null,e);var b=o.memoizedState;if(l=b.cache,Zi(o,po,l),l!==v.cache&&mw(o,[po],e,!0),z0(),l=b.element,v.isDehydrated)if(v={element:l,isDehydrated:!1,cache:b.cache},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){o=TO(r,o,l,e);break r}else if(l!==n){n=ng(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),o),R0(n),o=TO(r,o,l,e);break r}else{switch(r=o.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Qo=ug(r.firstChild),We=o,sr=!0,rn=null,Il=!1,mg=null,Zg=!0,e=eH(o,null,l,e);for(o.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(En(),l===n){o=ri(r,o,e);break r}He(r,o,l,e)}o=o.child}return o;case 26:return Zb(r,o),r===null?(e=OA(o.type,null,o.pendingProps,null))?o.memoizedState=e:sr||(e=o.type,r=o.pendingProps,l=Cr(_i.current),l=_b(l).createElement(e),l[Re]=o,l[Ze]=r,Me(l,e,r),zr(l),o.stateNode=l):o.memoizedState=OA(o.type,r.memoizedProps,o.pendingProps,r.memoizedState),null;case 27:return Kr(o),r===null&&sr&&(l=Cr(_i.current),n=nr(),l=o.stateNode=wA(o.type,o.pendingProps,l,n,!1),Il||(n=rA(l,o.type,o.pendingProps,n),n!==null&&(_n(o,0).serverProps=n)),We=o,Zg=!0,n=Qo,yi(o.type)?(M6=n,Qo=ug(l.firstChild)):Qo=n),He(r,o,o.pendingProps.children,e),Zb(r,o),r===null&&(o.flags|=4194304),o.child;case 5:return r===null&&sr&&(v=nr(),l=j5(o.type,v.ancestorInfo),n=Qo,(b=!n)||(b=YX(n,o.type,o.pendingProps,Zg),b!==null?(o.stateNode=b,Il||(v=rA(b,o.type,o.pendingProps,v),v!==null&&(_n(o,0).serverProps=v)),We=o,Qo=ug(b.firstChild),Zg=!1,v=!0):v=!1,b=!v),b&&(l&&tb(o,n),Ni(o))),Kr(o),n=o.type,v=o.pendingProps,b=r!==null?r.memoizedProps:null,l=v.children,Z2(n,v)?l=null:b!==null&&Z2(n,b)&&(o.flags|=32),o.memoizedState!==null&&(n=Qw(r,o,KG,null,null,e),Sh._currentValue=n),Zb(r,o),He(r,o,l,e),o.child;case 6:return r===null&&sr&&(e=o.pendingProps,r=nr(),l=r.ancestorInfo.current,e=l!=null?d1(e,l.tag,r.ancestorInfo.implicitRootScope):!0,r=Qo,(l=!r)||(l=JX(r,o.pendingProps,Zg),l!==null?(o.stateNode=l,We=o,Qo=null,l=!0):l=!1,l=!l),l&&(e&&tb(o,r),Ni(o))),null;case 13:return kO(r,o,e);case 4:return a(o,o.stateNode.containerInfo),l=o.pendingProps,r===null?o.child=Pv(o,null,l,e):He(r,o,l,e),o.child;case 11:return xO(r,o,o.type,o.pendingProps,e);case 7:return He(r,o,o.pendingProps,e),o.child;case 8:return He(r,o,o.pendingProps.children,e),o.child;case 12:return o.flags|=4,o.flags|=2048,l=o.stateNode,l.effectDuration=-0,l.passiveEffectDuration=-0,He(r,o,o.pendingProps.children,e),o.child;case 10:return l=o.type,n=o.pendingProps,v=n.value,"value"in n||KH||(KH=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),Zi(o,l,v),He(r,o,n.children,e),o.child;case 9:return n=o.type._context,l=o.pendingProps.children,typeof l!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),fn(o),n=Lo(n),l=B4(l,n,void 0),o.flags|=1,He(r,o,l,e),o.child;case 14:return IO(r,o,o.type,o.pendingProps,e);case 15:return FO(r,o,o.type,o.pendingProps,e);case 19:return DO(r,o,e);case 31:return NG(r,o,e);case 22:return NO(r,o,e,o.pendingProps);case 24:return fn(o),l=Lo(po),r===null?(n=Mw(),n===null&&(n=Ro,v=Aw(),n.pooledCache=v,pn(v),v!==null&&(n.pooledCacheLanes|=e),n=v),o.memoizedState={parent:l,cache:n},Ww(o),Zi(o,po,n)):((r.lanes&e)!==0&&(Gw(r,o),Q0(o,null,null,e),z0()),n=r.memoizedState,v=o.memoizedState,n.parent!==l?(n={parent:l,cache:l},o.memoizedState=n,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=n),Zi(o,po,l)):(l=v.cache,Zi(o,po,l),l!==n.cache&&mw(o,[po],e,!0))),He(r,o,o.pendingProps.children,e),o.child;case 29:throw o.pendingProps}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function oi(r){r.flags|=4}function w2(r,o,e,l,n){if(o=(r.mode&eJ)!==Lr)o=!1;if(o){if(r.flags|=16777216,(n&335544128)===n)if(r.stateNode.complete)r.flags|=8192;else if(Gm())r.flags|=8192;else throw wv=Uu,S4}else r.flags&=-16777217}function cO(r,o){if(o.type!=="stylesheet"||(o.state.loading&kg)!==Yv)r.flags&=-16777217;else if(r.flags|=16777216,!MA(o))if(Gm())r.flags|=8192;else throw wv=Uu,S4}function Cb(r,o){o!==null&&(r.flags|=4),r.flags&16384&&(o=r.tag!==22?Dv():536870912,r.lanes|=o,Hv|=o)}function x0(r,o){if(!sr)switch(r.tailMode){case"hidden":o=r.tail;for(var e=null;o!==null;)o.alternate!==null&&(e=o),o=o.sibling;e===null?r.tail=null:e.sibling=null;break;case"collapsed":e=r.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function Go(r){var o=r.alternate!==null&&r.alternate.child===r.child,e=0,l=0;if(o)if((r.mode&kr)!==Lr){for(var{selfBaseDuration:n,child:v}=r;v!==null;)e|=v.lanes|v.childLanes,l|=v.subtreeFlags&65011712,l|=v.flags&65011712,n+=v.treeBaseDuration,v=v.sibling;r.treeBaseDuration=n}else for(n=r.child;n!==null;)e|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=r,n=n.sibling;else if((r.mode&kr)!==Lr){n=r.actualDuration,v=r.selfBaseDuration;for(var b=r.child;b!==null;)e|=b.lanes|b.childLanes,l|=b.subtreeFlags,l|=b.flags,n+=b.actualDuration,v+=b.treeBaseDuration,b=b.sibling;r.actualDuration=n,r.treeBaseDuration=v}else for(n=r.child;n!==null;)e|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=r,n=n.sibling;return r.subtreeFlags|=l,r.childLanes=e,o}function BG(r,o,e){var l=o.pendingProps;switch(uw(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Go(o),null;case 1:return Go(o),null;case 3:if(e=o.stateNode,l=null,r!==null&&(l=r.memoizedState.cache),o.memoizedState.cache!==l&&(o.flags|=2048),dl(po,o),or(o),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),r===null||r.child===null)Ev(o)?(Pw(),oi(o)):r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ww());return Go(o),null;case 26:var{type:n,memoizedState:v}=o;return r===null?(oi(o),v!==null?(Go(o),cO(o,v)):(Go(o),w2(o,n,null,l,e))):v?v!==r.memoizedState?(oi(o),Go(o),cO(o,v)):(Go(o),o.flags&=-16777217):(r=r.memoizedProps,r!==l&&oi(o),Go(o),w2(o,n,r,l,e)),null;case 27:if(Xr(o),e=Cr(_i.current),n=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&oi(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Go(o),null}r=nr(),Ev(o)?xP(o,r):(r=wA(n,l,e,r,!0),o.stateNode=r,oi(o))}return Go(o),null;case 5:if(Xr(o),n=o.type,r!==null&&o.stateNode!=null)r.memoizedProps!==l&&oi(o);else{if(!l){if(o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return Go(o),null}var b=nr();if(Ev(o))xP(o,b);else{switch(v=Cr(_i.current),j5(n,b.ancestorInfo),b=b.context,v=_b(v),b){case ct:v=v.createElementNS(Ot,n);break;case o5:v=v.createElementNS(bu,n);break;default:switch(n){case"svg":v=v.createElementNS(Ot,n);break;case"math":v=v.createElementNS(bu,n);break;case"script":v=v.createElement("div"),v.innerHTML="<script></script>",v=v.removeChild(v.firstChild);break;case"select":v=typeof l.is==="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?v.multiple=!0:l.size&&(v.size=l.size);break;default:v=typeof l.is==="string"?v.createElement(n,{is:l.is}):v.createElement(n),n.indexOf("-")===-1&&(n!==n.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",n),Object.prototype.toString.call(v)!=="[object HTMLUnknownElement]"||_g.call(dH,n)||(dH[n]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",n)))}}v[Re]=o,v[Ze]=l;r:for(b=o.child;b!==null;){if(b.tag===5||b.tag===6)v.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===o)break r;for(;b.sibling===null;){if(b.return===null||b.return===o)break r;b=b.return}b.sibling.return=b.return,b=b.sibling}o.stateNode=v;r:switch(Me(v,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break r;case"img":l=!0;break r;default:l=!1}l&&oi(o)}}return Go(o),w2(o,o.type,r===null?null:r.memoizedProps,o.pendingProps,e),null;case 6:if(r&&o.stateNode!=null)r.memoizedProps!==l&&oi(o);else{if(typeof l!=="string"&&o.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=Cr(_i.current),e=nr(),Ev(o)){if(r=o.stateNode,e=o.memoizedProps,n=!Il,l=null,v=We,v!==null)switch(v.tag){case 3:n&&(n=bA(r,e,l),n!==null&&(_n(o,0).serverProps=n));break;case 27:case 5:l=v.memoizedProps,n&&(n=bA(r,e,l),n!==null&&(_n(o,0).serverProps=n))}r[Re]=o,r=r.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||fm(r.nodeValue,e)?!0:!1,r||Ni(o,!0)}else n=e.ancestorInfo.current,n!=null&&d1(l,n.tag,e.ancestorInfo.implicitRootScope),r=_b(r).createTextNode(l),r[Re]=o,o.stateNode=r}return Go(o),null;case 31:if(e=o.memoizedState,r===null||r.memoizedState!==null){if(l=Ev(o),e!==null){if(r===null){if(!l)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=o.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[Re]=o,Go(o),(o.mode&kr)!==Lr&&e!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration))}else Pw(),En(),(o.flags&128)===0&&(e=o.memoizedState=null),o.flags|=4,Go(o),(o.mode&kr)!==Lr&&e!==null&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration));r=!1}else e=ww(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=e),r=!0;if(!r){if(o.flags&256)return hg(o),o;return hg(o),null}if((o.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return Go(o),null;case 13:if(l=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(n=l,v=Ev(o),n!==null&&n.dehydrated!==null){if(r===null){if(!v)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");v[Re]=o,Go(o),(o.mode&kr)!==Lr&&n!==null&&(n=o.child,n!==null&&(o.treeBaseDuration-=n.treeBaseDuration))}else Pw(),En(),(o.flags&128)===0&&(n=o.memoizedState=null),o.flags|=4,Go(o),(o.mode&kr)!==Lr&&n!==null&&(n=o.child,n!==null&&(o.treeBaseDuration-=n.treeBaseDuration));n=!1}else n=ww(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=n),n=!0;if(!n){if(o.flags&256)return hg(o),o;return hg(o),null}}if(hg(o),(o.flags&128)!==0)return o.lanes=e,(o.mode&kr)!==Lr&&X0(o),o;return e=l!==null,r=r!==null&&r.memoizedState!==null,e&&(l=o.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),v=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(v=l.memoizedState.cachePool.pool),v!==n&&(l.flags|=2048)),e!==r&&e&&(o.child.flags|=8192),Cb(o,o.updateQueue),Go(o),(o.mode&kr)!==Lr&&e&&(r=o.child,r!==null&&(o.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return or(o),r===null&&U2(o.stateNode.containerInfo),Go(o),null;case 10:return dl(o.type,o),Go(o),null;case 19:if(qr(co,o),l=o.memoizedState,l===null)return Go(o),null;if(n=(o.flags&128)!==0,v=l.rendering,v===null)if(n)x0(l,!1);else{if(No!==Ai||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(v=Wb(r),v!==null){o.flags|=128,x0(l,!1),r=v.updateQueue,o.updateQueue=r,Cb(o,r),o.subtreeFlags=0,r=e;for(e=o.child;e!==null;)zP(e,r),e=e.sibling;return Wr(co,co.current&xt|Wh,o),sr&&jl(o,l.treeForkCount),o.child}r=r.sibling}l.tail!==null&&be()>au&&(o.flags|=128,n=!0,x0(l,!1),o.lanes=4194304)}else{if(!n)if(r=Wb(v),r!==null){if(o.flags|=128,n=!0,r=r.updateQueue,o.updateQueue=r,Cb(o,r),x0(l,!0),l.tail===null&&l.tailMode==="hidden"&&!v.alternate&&!sr)return Go(o),null}else 2*be()-l.renderingStartTime>au&&e!==536870912&&(o.flags|=128,n=!0,x0(l,!1),o.lanes=4194304);l.isBackwards?(v.sibling=o.child,o.child=v):(r=l.last,r!==null?r.sibling=v:o.child=v,l.last=v)}if(l.tail!==null)return r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=be(),r.sibling=null,e=co.current,e=n?e&xt|Wh:e&xt,Wr(co,e,o),sr&&jl(o,l.treeForkCount),r;return Go(o),null;case 22:case 23:return hg(o),Yw(o),l=o.memoizedState!==null,r!==null?r.memoizedState!==null!==l&&(o.flags|=8192):l&&(o.flags|=8192),l?(e&536870912)!==0&&(o.flags&128)===0&&(Go(o),o.subtreeFlags&6&&(o.flags|=8192)):Go(o),e=o.updateQueue,e!==null&&Cb(o,e.retryQueue),e=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==e&&(o.flags|=2048),r!==null&&qr(bv,o),null;case 24:return e=null,r!==null&&(e=r.memoizedState.cache),o.memoizedState.cache!==e&&(o.flags|=2048),dl(po,o),Go(o),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+o.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function CG(r,o){switch(uw(o),o.tag){case 1:return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Lr&&X0(o),o):null;case 3:return dl(po,o),or(o),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 26:case 27:case 5:return Xr(o),null;case 31:if(o.memoizedState!==null){if(hg(o),o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");En()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Lr&&X0(o),o):null;case 13:if(hg(o),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");En()}return r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Lr&&X0(o),o):null;case 19:return qr(co,o),null;case 4:return or(o),null;case 10:return dl(o.type,o),null;case 22:case 23:return hg(o),Yw(o),r!==null&&qr(bv,o),r=o.flags,r&65536?(o.flags=r&-65537|128,(o.mode&kr)!==Lr&&X0(o),o):null;case 24:return dl(po,o),null;case 25:return null;default:return null}}function yO(r,o){switch(uw(o),o.tag){case 3:dl(po,o),or(o);break;case 26:case 27:case 5:Xr(o);break;case 4:or(o);break;case 31:o.memoizedState!==null&&hg(o);break;case 13:hg(o);break;case 19:qr(co,o);break;case 10:dl(o.type,o);break;case 22:case 23:hg(o),Yw(o),r!==null&&qr(bv,o);break;case 24:dl(po,o)}}function Rl(r){return(r.mode&kr)!==Lr}function VO(r,o){Rl(r)?(Ml(),I0(o,r),Hl()):I0(o,r)}function P2(r,o,e){Rl(r)?(Ml(),rt(e,r,o),Hl()):rt(e,r,o)}function I0(r,o){try{var e=o.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var n=l.next;e=n;do{if((e.tag&r)===r&&(l=void 0,(r&Te)!==Lu&&(kt=!0),l=hr(o,vJ,e),(r&Te)!==Lu&&(kt=!1),l!==void 0&&typeof l!=="function")){var v=void 0;v=(e.tag&qg)!==0?"useLayoutEffect":(e.tag&Te)!==0?"useInsertionEffect":"useEffect";var b=void 0;b=l===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof l.then==="function"?`

It looks like you wrote `+v+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+v+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+l,hr(o,function(w,A){console.error("%s must not return anything besides a function, which is used for clean-up.%s",w,A)},v,b)}e=e.next}while(e!==n)}}catch(w){to(o,o.return,w)}}function rt(r,o,e){try{var l=o.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var v=n.next;l=v;do{if((l.tag&r)===r){var b=l.inst,w=b.destroy;w!==void 0&&(b.destroy=void 0,(r&Te)!==Lu&&(kt=!0),n=o,hr(n,tJ,n,e,w),(r&Te)!==Lu&&(kt=!1))}l=l.next}while(l!==v)}}catch(A){to(o,o.return,A)}}function _O(r,o){Rl(r)?(Ml(),I0(o,r),Hl()):I0(o,r)}function O2(r,o,e){Rl(r)?(Ml(),rt(e,r,o),Hl()):rt(e,r,o)}function EO(r){var o=r.updateQueue;if(o!==null){var e=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Zt||(e.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",N(r)||"instance"),e.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",N(r)||"instance"));try{hr(r,pP,o,e)}catch(l){to(r,r.return,l)}}}function SG(r,o,e){return r.getSnapshotBeforeUpdate(o,e)}function TG(r,o){var{memoizedProps:e,memoizedState:l}=o;o=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Zt||(o.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",N(r)||"instance"),o.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",N(r)||"instance"));try{var n=rv(r.type,e),v=hr(r,SG,o,n,l);e=UH,v!==void 0||e.has(r.type)||(e.add(r.type),hr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",N(r))})),o.__reactInternalSnapshotBeforeUpdate=v}catch(b){to(r,r.return,b)}}function fO(r,o,e){e.props=rv(r.type,r.memoizedProps),e.state=r.memoizedState,Rl(r)?(Ml(),hr(r,Eq,r,o,e),Hl()):hr(r,Eq,r,o,e)}function kG(r){var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var e=r.stateNode;break;case 30:e=r.stateNode;break;default:e=r.stateNode}if(typeof o==="function")if(Rl(r))try{Ml(),r.refCleanup=o(e)}finally{Hl()}else r.refCleanup=o(e);else typeof o==="string"?console.error("String refs are no longer supported."):o.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",N(r)),o.current=e}}function F0(r,o){try{hr(r,kG,r)}catch(e){to(r,o,e)}}function Wl(r,o){var{ref:e,refCleanup:l}=r;if(e!==null)if(typeof l==="function")try{if(Rl(r))try{Ml(),hr(r,l)}finally{Hl(r)}else hr(r,l)}catch(n){to(r,o,n)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof e==="function")try{if(Rl(r))try{Ml(),hr(r,e,null)}finally{Hl(r)}else hr(r,e,null)}catch(n){to(r,o,n)}else e.current=null}function pO(r,o,e,l){var n=r.memoizedProps,v=n.id,b=n.onCommit;n=n.onRender,o=o===null?"mount":"update",Ju&&(o="nested-update"),typeof n==="function"&&n(v,o,r.actualDuration,r.treeBaseDuration,r.actualStartTime,e),typeof b==="function"&&b(v,o,l,e)}function aG(r,o,e,l){var n=r.memoizedProps;r=n.id,n=n.onPostCommit,o=o===null?"mount":"update",Ju&&(o="nested-update"),typeof n==="function"&&n(r,o,l,e)}function jO(r){var{type:o,memoizedProps:e,stateNode:l}=r;try{hr(r,wX,l,o,e,r)}catch(n){to(r,r.return,n)}}function m2(r,o,e){try{hr(r,OX,r.stateNode,r.type,e,o,r)}catch(l){to(r,r.return,l)}}function dO(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&yi(r.type)||r.tag===4}function A2(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||dO(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&yi(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function q2(r,o,e){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?(iA(e),(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(r,o)):(iA(e),o=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.appendChild(r),e=e._reactRootContainer,e!==null&&e!==void 0||o.onclick!==null||(o.onclick=fl));else if(l!==4&&(l===27&&yi(r.type)&&(e=r.stateNode,o=null),r=r.child,r!==null))for(q2(r,o,e),r=r.sibling;r!==null;)q2(r,o,e),r=r.sibling}function Sb(r,o,e){var l=r.tag;if(l===5||l===6)r=r.stateNode,o?e.insertBefore(r,o):e.appendChild(r);else if(l!==4&&(l===27&&yi(r.type)&&(e=r.stateNode),r=r.child,r!==null))for(Sb(r,o,e),r=r.sibling;r!==null;)Sb(r,o,e),r=r.sibling}function DG(r){for(var o,e=r.return;e!==null;){if(dO(e)){o=e;break}e=e.return}if(o==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(o.tag){case 27:o=o.stateNode,e=A2(r),Sb(r,e,o);break;case 5:e=o.stateNode,o.flags&32&&(lA(e),o.flags&=-33),o=A2(r),Sb(r,o,e);break;case 3:case 4:o=o.stateNode.containerInfo,e=A2(r),q2(r,e,o);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function sO(r){var{stateNode:o,memoizedProps:e}=r;try{hr(r,$X,r.type,e,o,r)}catch(l){to(r,r.return,l)}}function rm(r,o){return o.tag===31?(o=o.memoizedState,r.memoizedState!==null&&o===null):o.tag===13?(r=r.memoizedState,o=o.memoizedState,r!==null&&r.dehydrated!==null&&(o===null||o.dehydrated===null)):o.tag===3?r.memoizedState.isDehydrated&&(o.flags&256)===0:!1}function cG(r,o){if(r=r.containerInfo,A6=i5,r=AP(r),rw(r)){if("selectionStart"in r)var e={start:r.selectionStart,end:r.selectionEnd};else r:{e=(e=r.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var{anchorOffset:n,focusNode:v}=l;l=l.focusOffset;try{e.nodeType,v.nodeType}catch(vr){e=null;break r}var b=0,w=-1,A=-1,H=0,U=0,$=r,J=null;o:for(;;){for(var F;;){if($!==e||n!==0&&$.nodeType!==3||(w=b+n),$!==v||l!==0&&$.nodeType!==3||(A=b+l),$.nodeType===3&&(b+=$.nodeValue.length),(F=$.firstChild)===null)break;J=$,$=F}for(;;){if($===r)break o;if(J===e&&++H===n&&(w=b),J===v&&++U===l&&(A=b),(F=$.nextSibling)!==null)break;$=J,J=$.parentNode}$=F}e=w===-1||A===-1?null:{start:w,end:A}}else e=null}e=e||{start:0,end:0}}else e=null;q6={focusedElem:r,selectionRange:e},i5=!1;for(we=o;we!==null;)if(o=we,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,we=r;else for(;we!==null;){switch(r=o=we,e=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(e=0;e<r.length;e++)n=r[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:(n&1024)!==0&&e!==null&&TG(r,e);break;case 3:if((n&1024)!==0){if(r=r.stateNode.containerInfo,e=r.nodeType,e===9)B2(r);else if(e===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":B2(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=o.sibling,r!==null){r.return=o.return,we=r;break}we=o.return}}function om(r,o,e){var l=vg(),n=Ol(),v=Al(),b=ql(),w=e.flags;switch(e.tag){case 0:case 11:case 15:Gl(r,e),w&4&&VO(e,qg|Sg);break;case 1:if(Gl(r,e),w&4)if(r=e.stateNode,o===null)e.type.defaultProps||"ref"in e.memoizedProps||Zt||(r.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",N(e)||"instance"),r.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",N(e)||"instance")),Rl(e)?(Ml(),hr(e,C4,e,r),Hl()):hr(e,C4,e,r);else{var A=rv(e.type,o.memoizedProps);o=o.memoizedState,e.type.defaultProps||"ref"in e.memoizedProps||Zt||(r.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",N(e)||"instance"),r.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",N(e)||"instance")),Rl(e)?(Ml(),hr(e,yq,e,r,A,o,r.__reactInternalSnapshotBeforeUpdate),Hl()):hr(e,yq,e,r,A,o,r.__reactInternalSnapshotBeforeUpdate)}w&64&&EO(e),w&512&&F0(e,e.return);break;case 3:if(o=sl(),Gl(r,e),w&64&&(w=e.updateQueue,w!==null)){if(A=null,e.child!==null)switch(e.child.tag){case 27:case 5:A=e.child.stateNode;break;case 1:A=e.child.stateNode}try{hr(e,pP,w,A)}catch(U){to(e,e.return,U)}}r.effectDuration+=wb(o);break;case 27:o===null&&w&4&&sO(e);case 26:case 5:if(Gl(r,e),o===null){if(w&4)jO(e);else if(w&64){r=e.type,o=e.memoizedProps,A=e.stateNode;try{hr(e,PX,A,r,o,e)}catch(U){to(e,e.return,U)}}}w&512&&F0(e,e.return);break;case 12:if(w&4){w=sl(),Gl(r,e),r=e.stateNode,r.effectDuration+=G0(w);try{hr(e,pO,e,o,on,r.effectDuration)}catch(U){to(e,e.return,U)}}else Gl(r,e);break;case 31:Gl(r,e),w&4&&lm(r,e);break;case 13:Gl(r,e),w&4&&im(r,e),w&64&&(r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(w=sG.bind(null,e),zX(r,w))));break;case 22:if(w=e.memoizedState!==null||mi,!w){o=o!==null&&o.memoizedState!==null||oe,A=mi;var H=oe;mi=w,(oe=o)&&!H?(Xl(r,e,(e.subtreeFlags&8772)!==0),(e.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&eb(e,Qr,Ur)):Gl(r,e),mi=A,oe=H}break;case 30:break;default:Gl(r,e)}(e.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&((Co||0.05<Fo)&&wl(e,Qr,Ur,Fo,xo),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&0.05<Ur-Qr&&(rm(e.return.alternate,e.return)||ul(e,Qr,Ur,"Mount"))),tg(l),ml(n),xo=v,Co=b}function em(r){var o=r.alternate;o!==null&&(r.alternate=null,em(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&br(o)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ei(r,o,e){for(e=e.child;e!==null;)gm(r,o,e),e=e.sibling}function gm(r,o,e){if($e&&typeof $e.onCommitFiberUnmount==="function")try{$e.onCommitFiberUnmount(wt,e)}catch(H){Ul||(Ul=!0,console.error("React instrumentation encountered an error: %o",H))}var l=vg(),n=Ol(),v=Al(),b=ql();switch(e.tag){case 26:oe||Wl(e,o),ei(r,o,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(r=e.stateNode,r.parentNode.removeChild(r));break;case 27:oe||Wl(e,o);var w=ee,A=je;yi(e.type)&&(ee=e.stateNode,je=!1),ei(r,o,e),hr(e,D0,e.stateNode),ee=w,je=A;break;case 5:oe||Wl(e,o);case 6:if(w=ee,A=je,ee=null,ei(r,o,e),ee=w,je=A,ee!==null)if(je)try{hr(e,qX,ee,e.stateNode)}catch(H){to(e,o,H)}else try{hr(e,AX,ee,e.stateNode)}catch(H){to(e,o,H)}break;case 18:ee!==null&&(je?(r=ee,nA(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,e.stateNode),tt(r)):nA(ee,e.stateNode));break;case 4:w=ee,A=je,ee=e.stateNode.containerInfo,je=!0,ei(r,o,e),ee=w,je=A;break;case 0:case 11:case 14:case 15:rt(Te,e,o),oe||P2(e,o,qg),ei(r,o,e);break;case 1:oe||(Wl(e,o),w=e.stateNode,typeof w.componentWillUnmount==="function"&&fO(e,o,w)),ei(r,o,e);break;case 21:ei(r,o,e);break;case 22:oe=(w=oe)||e.memoizedState!==null,ei(r,o,e),oe=w;break;default:ei(r,o,e)}(e.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(e,Qr,Ur,Fo,xo),tg(l),ml(n),xo=v,Co=b}function lm(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{hr(o,KX,r)}catch(e){to(o,o.return,e)}}}function im(r,o){if(o.memoizedState===null&&(r=o.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{hr(o,UX,r)}catch(e){to(o,o.return,e)}}function yG(r){switch(r.tag){case 31:case 13:case 19:var o=r.stateNode;return o===null&&(o=r.stateNode=new $H),o;case 22:return r=r.stateNode,o=r._retryCache,o===null&&(o=r._retryCache=new $H),o;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Tb(r,o){var e=yG(r);o.forEach(function(l){if(!e.has(l)){if(e.add(l),$l)if(Bt!==null&&Ct!==null)C0(Ct,Bt);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var n=rX.bind(null,r,l);l.then(n,n)}})}function fe(r,o){var e=o.deletions;if(e!==null)for(var l=0;l<e.length;l++){var n=r,v=o,b=e[l],w=vg(),A=v;r:for(;A!==null;){switch(A.tag){case 27:if(yi(A.type)){ee=A.stateNode,je=!1;break r}break;case 5:ee=A.stateNode,je=!1;break r;case 3:case 4:ee=A.stateNode.containerInfo,je=!0;break r}A=A.return}if(ee===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");gm(n,v,b),ee=null,je=!1,(b.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&ul(b,Qr,Ur,"Unmount"),tg(w),n=b,v=n.alternate,v!==null&&(v.return=null),n.return=null}if(o.subtreeFlags&13886)for(o=o.child;o!==null;)nm(o,r),o=o.sibling}function nm(r,o){var e=vg(),l=Ol(),n=Al(),v=ql(),b=r.alternate,w=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:fe(o,r),pe(r),w&4&&(rt(Te|Sg,r,r.return),I0(Te|Sg,r),P2(r,r.return,qg|Sg));break;case 1:if(fe(o,r),pe(r),w&512&&(oe||b===null||Wl(b,b.return)),w&64&&mi&&(w=r.updateQueue,w!==null&&(b=w.callbacks,b!==null))){var A=w.shared.hiddenCallbacks;w.shared.hiddenCallbacks=A===null?b:A.concat(b)}break;case 26:if(A=dg,fe(o,r),pe(r),w&512&&(oe||b===null||Wl(b,b.return)),w&4){var H=b!==null?b.memoizedState:null;if(w=r.memoizedState,b===null)if(w===null)if(r.stateNode===null){r:{w=r.type,b=r.memoizedProps,A=A.ownerDocument||A;o:switch(w){case"title":if(H=A.getElementsByTagName("title")[0],!H||H[p0]||H[Re]||H.namespaceURI===Ot||H.hasAttribute("itemprop"))H=A.createElement(w),A.head.insertBefore(H,A.querySelector("head > title"));Me(H,w,b),H[Re]=r,zr(H),w=H;break r;case"link":var U=qA("link","href",A).get(w+(b.href||""));if(U){for(var $=0;$<U.length;$++)if(H=U[$],H.getAttribute("href")===(b.href==null||b.href===""?null:b.href)&&H.getAttribute("rel")===(b.rel==null?null:b.rel)&&H.getAttribute("title")===(b.title==null?null:b.title)&&H.getAttribute("crossorigin")===(b.crossOrigin==null?null:b.crossOrigin)){U.splice($,1);break o}}H=A.createElement(w),Me(H,w,b),A.head.appendChild(H);break;case"meta":if(U=qA("meta","content",A).get(w+(b.content||""))){for($=0;$<U.length;$++)if(H=U[$],Oo(b.content,"content"),H.getAttribute("content")===(b.content==null?null:""+b.content)&&H.getAttribute("name")===(b.name==null?null:b.name)&&H.getAttribute("property")===(b.property==null?null:b.property)&&H.getAttribute("http-equiv")===(b.httpEquiv==null?null:b.httpEquiv)&&H.getAttribute("charset")===(b.charSet==null?null:b.charSet)){U.splice($,1);break o}}H=A.createElement(w),Me(H,w,b),A.head.appendChild(H);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+w+'". This is a bug in React.')}H[Re]=r,zr(H),w=H}r.stateNode=w}else HA(A,r.type,r.stateNode);else r.stateNode=AA(A,w,r.memoizedProps);else H!==w?(H===null?b.stateNode!==null&&(b=b.stateNode,b.parentNode.removeChild(b)):H.count--,w===null?HA(A,r.type,r.stateNode):AA(A,w,r.memoizedProps)):w===null&&r.stateNode!==null&&m2(r,r.memoizedProps,b.memoizedProps)}break;case 27:fe(o,r),pe(r),w&512&&(oe||b===null||Wl(b,b.return)),b!==null&&w&4&&m2(r,r.memoizedProps,b.memoizedProps);break;case 5:if(fe(o,r),pe(r),w&512&&(oe||b===null||Wl(b,b.return)),r.flags&32){A=r.stateNode;try{hr(r,lA,A)}catch(Or){to(r,r.return,Or)}}w&4&&r.stateNode!=null&&(A=r.memoizedProps,m2(r,A,b!==null?b.memoizedProps:A)),w&1024&&(j4=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(fe(o,r),pe(r),w&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");w=r.memoizedProps,b=b!==null?b.memoizedProps:w,A=r.stateNode;try{hr(r,mX,A,b,w)}catch(Or){to(r,r.return,Or)}}break;case 3:if(A=sl(),e5=null,H=dg,dg=Eb(o.containerInfo),fe(o,r),dg=H,pe(r),w&4&&b!==null&&b.memoizedState.isDehydrated)try{hr(r,QX,o.containerInfo)}catch(Or){to(r,r.return,Or)}j4&&(j4=!1,vm(r)),o.effectDuration+=wb(A);break;case 4:w=dg,dg=Eb(r.stateNode.containerInfo),fe(o,r),pe(r),dg=w;break;case 12:w=sl(),fe(o,r),pe(r),r.stateNode.effectDuration+=G0(w);break;case 31:fe(o,r),pe(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Tb(r,w)));break;case 13:fe(o,r),pe(r),r.child.flags&8192&&r.memoizedState!==null!==(b!==null&&b.memoizedState!==null)&&(ku=be()),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Tb(r,w)));break;case 22:A=r.memoizedState!==null;var J=b!==null&&b.memoizedState!==null,F=mi,vr=oe;if(mi=F||A,oe=vr||J,fe(o,r),oe=vr,mi=F,J&&!A&&!F&&!vr&&(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&eb(r,Qr,Ur),pe(r),w&8192)r:for(o=r.stateNode,o._visibility=A?o._visibility&~ih:o._visibility|ih,!A||b===null||J||mi||oe||(ov(r),(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&ul(r,Qr,Ur,"Disconnect")),b=null,o=r;;){if(o.tag===5||o.tag===26){if(b===null){J=b=o;try{H=J.stateNode,A?hr(J,MX,H):hr(J,GX,J.stateNode,J.memoizedProps)}catch(Or){to(J,J.return,Or)}}}else if(o.tag===6){if(b===null){J=o;try{U=J.stateNode,A?hr(J,RX,U):hr(J,XX,U,J.memoizedProps)}catch(Or){to(J,J.return,Or)}}}else if(o.tag===18){if(b===null){J=o;try{$=J.stateNode,A?hr(J,HX,$):hr(J,WX,J.stateNode)}catch(Or){to(J,J.return,Or)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===r)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break r;for(;o.sibling===null;){if(o.return===null||o.return===r)break r;b===o&&(b=null),o=o.return}b===o&&(b=null),o.sibling.return=o.return,o=o.sibling}w&4&&(w=r.updateQueue,w!==null&&(b=w.retryQueue,b!==null&&(w.retryQueue=null,Tb(r,b))));break;case 19:fe(o,r),pe(r),w&4&&(w=r.updateQueue,w!==null&&(r.updateQueue=null,Tb(r,w)));break;case 30:break;case 21:break;default:fe(o,r),pe(r)}(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&((Co||0.05<Fo)&&wl(r,Qr,Ur,Fo,xo),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Ur-Qr&&(rm(r.return.alternate,r.return)||ul(r,Qr,Ur,"Mount"))),tg(e),ml(l),xo=n,Co=v}function pe(r){var o=r.flags;if(o&2){try{hr(r,DG,r)}catch(e){to(r,r.return,e)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function vm(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var o=r;vm(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),r=r.sibling}}function Gl(r,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)om(r,o.alternate,o),o=o.sibling}function tm(r){var o=vg(),e=Ol(),l=Al(),n=ql();switch(r.tag){case 0:case 11:case 14:case 15:P2(r,r.return,qg),ov(r);break;case 1:Wl(r,r.return);var v=r.stateNode;typeof v.componentWillUnmount==="function"&&fO(r,r.return,v),ov(r);break;case 27:hr(r,D0,r.stateNode);case 26:case 5:Wl(r,r.return),ov(r);break;case 22:r.memoizedState===null&&ov(r);break;case 30:ov(r);break;default:ov(r)}(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(r,Qr,Ur,Fo,xo),tg(o),ml(e),xo=l,Co=n}function ov(r){for(r=r.child;r!==null;)tm(r),r=r.sibling}function hm(r,o,e,l){var n=vg(),v=Ol(),b=Al(),w=ql(),A=e.flags;switch(e.tag){case 0:case 11:case 15:Xl(r,e,l),VO(e,qg);break;case 1:if(Xl(r,e,l),o=e.stateNode,typeof o.componentDidMount==="function"&&hr(e,C4,e,o),o=e.updateQueue,o!==null){r=e.stateNode;try{hr(e,QG,o,r)}catch(H){to(e,e.return,H)}}l&&A&64&&EO(e),F0(e,e.return);break;case 27:sO(e);case 26:case 5:Xl(r,e,l),l&&o===null&&A&4&&jO(e),F0(e,e.return);break;case 12:if(l&&A&4){A=sl(),Xl(r,e,l),l=e.stateNode,l.effectDuration+=G0(A);try{hr(e,pO,e,o,on,l.effectDuration)}catch(H){to(e,e.return,H)}}else Xl(r,e,l);break;case 31:Xl(r,e,l),l&&A&4&&lm(r,e);break;case 13:Xl(r,e,l),l&&A&4&&im(r,e);break;case 22:e.memoizedState===null&&Xl(r,e,l),F0(e,e.return);break;case 30:break;default:Xl(r,e,l)}(e.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(e,Qr,Ur,Fo,xo),tg(n),ml(v),xo=b,Co=w}function Xl(r,o,e){e=e&&(o.subtreeFlags&8772)!==0;for(o=o.child;o!==null;)hm(r,o.alternate,o,e),o=o.sibling}function H2(r,o){var e=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),r=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==e&&(r!=null&&pn(r),e!=null&&W0(e))}function M2(r,o){r=null,o.alternate!==null&&(r=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==r&&(pn(o),r!=null&&W0(r))}function Vg(r,o,e,l,n){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(o=o.child;o!==null;){var v=o.sibling;bm(r,o,e,l,v!==null?v.actualStartTime:n),o=v}}function bm(r,o,e,l,n){var v=vg(),b=Ol(),w=Al(),A=ql(),H=ji,U=o.flags;switch(o.tag){case 0:case 11:case 15:(o.mode&kr)!==Lr&&0<o.actualStartTime&&(o.flags&1)!==0&&gb(o,o.actualStartTime,n,ne,e),Vg(r,o,e,l,n),U&2048&&_O(o,ke|Sg);break;case 1:(o.mode&kr)!==Lr&&0<o.actualStartTime&&((o.flags&128)!==0?ew(o,o.actualStartTime,n,[]):(o.flags&1)!==0&&gb(o,o.actualStartTime,n,ne,e)),Vg(r,o,e,l,n);break;case 3:var $=sl(),J=ne;ne=o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)===0,Vg(r,o,e,l,n),ne=J,U&2048&&(e=null,o.alternate!==null&&(e=o.alternate.memoizedState.cache),l=o.memoizedState.cache,l!==e&&(pn(l),e!=null&&W0(e))),r.passiveEffectDuration+=wb($);break;case 12:if(U&2048){U=sl(),Vg(r,o,e,l,n),r=o.stateNode,r.passiveEffectDuration+=G0(U);try{hr(o,aG,o,o.alternate,on,r.passiveEffectDuration)}catch(F){to(o,o.return,F)}}else Vg(r,o,e,l,n);break;case 31:U=ne,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$!==null&&J===null?(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(ne=!1,$=$.hydrationErrors,$!==null&&ew(o,o.actualStartTime,n,$)):ne=!0):ne=!1,Vg(r,o,e,l,n),ne=U;break;case 13:U=ne,$=o.alternate!==null?o.alternate.memoizedState:null,J=o.memoizedState,$===null||$.dehydrated===null||J!==null&&J.dehydrated!==null?ne=!1:(J=o.deletions,J!==null&&0<J.length&&J[0].tag===18?(ne=!1,$=$.hydrationErrors,$!==null&&ew(o,o.actualStartTime,n,$)):ne=!0),Vg(r,o,e,l,n),ne=U;break;case 23:break;case 22:J=o.stateNode,$=o.alternate,o.memoizedState!==null?J._visibility&ii?Vg(r,o,e,l,n):N0(r,o,e,l,n):J._visibility&ii?Vg(r,o,e,l,n):(J._visibility|=ii,ot(r,o,e,l,(o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child),n),(o.mode&kr)===Lr||ne||(r=o.actualStartTime,0<=r&&0.05<n-r&&eb(o,r,n),0<=Qr&&0<=Ur&&0.05<Ur-Qr&&eb(o,Qr,Ur))),U&2048&&H2($,o);break;case 24:Vg(r,o,e,l,n),U&2048&&M2(o.alternate,o);break;default:Vg(r,o,e,l,n)}if((o.mode&kr)!==Lr){if(r=!ne&&o.alternate===null&&o.return!==null&&o.return.alternate!==null)e=o.actualStartTime,0<=e&&0.05<n-e&&ul(o,e,n,"Mount");0<=Qr&&0<=Ur&&((Co||0.05<Fo)&&wl(o,Qr,Ur,Fo,xo),r&&0.05<Ur-Qr&&ul(o,Qr,Ur,"Mount"))}tg(v),ml(b),xo=w,Co=A,ji=H}function ot(r,o,e,l,n,v){n=n&&((o.subtreeFlags&10256)!==0||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child));for(o=o.child;o!==null;){var b=o.sibling;um(r,o,e,l,n,b!==null?b.actualStartTime:v),o=b}}function um(r,o,e,l,n,v){var b=vg(),w=Ol(),A=Al(),H=ql(),U=ji;n&&(o.mode&kr)!==Lr&&0<o.actualStartTime&&(o.flags&1)!==0&&gb(o,o.actualStartTime,v,ne,e);var $=o.flags;switch(o.tag){case 0:case 11:case 15:ot(r,o,e,l,n,v),_O(o,ke);break;case 23:break;case 22:var J=o.stateNode;o.memoizedState!==null?J._visibility&ii?ot(r,o,e,l,n,v):N0(r,o,e,l,v):(J._visibility|=ii,ot(r,o,e,l,n,v)),n&&$&2048&&H2(o.alternate,o);break;case 24:ot(r,o,e,l,n,v),n&&$&2048&&M2(o.alternate,o);break;default:ot(r,o,e,l,n,v)}(o.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(o,Qr,Ur,Fo,xo),tg(b),ml(w),xo=A,Co=H,ji=U}function N0(r,o,e,l,n){if(o.subtreeFlags&10256||o.actualDuration!==0&&(o.alternate===null||o.alternate.child!==o.child))for(var v=o.child;v!==null;){o=v.sibling;var b=r,w=e,A=l,H=o!==null?o.actualStartTime:n,U=ji;(v.mode&kr)!==Lr&&0<v.actualStartTime&&(v.flags&1)!==0&&gb(v,v.actualStartTime,H,ne,w);var $=v.flags;switch(v.tag){case 22:N0(b,v,w,A,H),$&2048&&H2(v.alternate,v);break;case 24:N0(b,v,w,A,H),$&2048&&M2(v.alternate,v);break;default:N0(b,v,w,A,H)}ji=U,v=o}}function et(r,o,e){if(r.subtreeFlags&Jh)for(r=r.child;r!==null;)wm(r,o,e),r=r.sibling}function wm(r,o,e){switch(r.tag){case 26:et(r,o,e),r.flags&Jh&&r.memoizedState!==null&&IX(e,dg,r.memoizedState,r.memoizedProps);break;case 5:et(r,o,e);break;case 3:case 4:var l=dg;dg=Eb(r.stateNode.containerInfo),et(r,o,e),dg=l;break;case 22:r.memoizedState===null&&(l=r.alternate,l!==null&&l.memoizedState!==null?(l=Jh,Jh=16777216,et(r,o,e),Jh=l):et(r,o,e));break;default:et(r,o,e)}}function Pm(r){var o=r.alternate;if(o!==null&&(r=o.child,r!==null)){o.child=null;do o=r.sibling,r.sibling=null,r=o;while(r!==null)}}function Z0(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var e=0;e<o.length;e++){var l=o[e],n=vg();we=l,Am(l,r),(l.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&ul(l,Qr,Ur,"Unmount"),tg(n)}Pm(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Om(r),r=r.sibling}function Om(r){var o=vg(),e=Ol(),l=Al(),n=ql();switch(r.tag){case 0:case 11:case 15:Z0(r),r.flags&2048&&O2(r,r.return,ke|Sg);break;case 3:var v=sl();Z0(r),r.stateNode.passiveEffectDuration+=wb(v);break;case 12:v=sl(),Z0(r),r.stateNode.passiveEffectDuration+=G0(v);break;case 22:v=r.stateNode,r.memoizedState!==null&&v._visibility&ii&&(r.return===null||r.return.tag!==13)?(v._visibility&=~ii,kb(r),(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&ul(r,Qr,Ur,"Disconnect")):Z0(r);break;default:Z0(r)}(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(r,Qr,Ur,Fo,xo),tg(o),ml(e),Co=n,xo=l}function kb(r){var o=r.deletions;if((r.flags&16)!==0){if(o!==null)for(var e=0;e<o.length;e++){var l=o[e],n=vg();we=l,Am(l,r),(l.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&0.05<Ur-Qr&&ul(l,Qr,Ur,"Unmount"),tg(n)}Pm(r)}for(r=r.child;r!==null;)mm(r),r=r.sibling}function mm(r){var o=vg(),e=Ol(),l=Al(),n=ql();switch(r.tag){case 0:case 11:case 15:O2(r,r.return,ke),kb(r);break;case 22:var v=r.stateNode;v._visibility&ii&&(v._visibility&=~ii,kb(r));break;default:kb(r)}(r.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(r,Qr,Ur,Fo,xo),tg(o),ml(e),Co=n,xo=l}function Am(r,o){for(;we!==null;){var e=we,l=e,n=o,v=vg(),b=Ol(),w=Al(),A=ql();switch(l.tag){case 0:case 11:case 15:O2(l,n,ke);break;case 23:case 22:l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool,n!=null&&pn(n));break;case 24:W0(l.memoizedState.cache)}if((l.mode&kr)!==Lr&&0<=Qr&&0<=Ur&&(Co||0.05<Fo)&&wl(l,Qr,Ur,Fo,xo),tg(v),ml(b),Co=A,xo=w,l=e.child,l!==null)l.return=e,we=l;else r:for(e=r;we!==null;){if(l=we,v=l.sibling,b=l.return,em(l),l===e){we=null;break r}if(v!==null){v.return=b,we=v;break r}we=b}}}function VG(){PJ.forEach(function(r){return r()})}function qm(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||C.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function bg(r){if((go&ve)!==Pe&&Dr!==0)return Dr&-Dr;var o=C.T;return o!==null?(o._updatedFibers||(o._updatedFibers=new Set),o._updatedFibers.add(r),Q2()):x()}function Hm(){if(se===0)if((Dr&536870912)===0||sr){var r=nu;nu<<=1,(nu&3932160)===0&&(nu=262144),se=r}else se=536870912;return r=Ag.current,r!==null&&(r.flags|=32),se}function Bo(r,o,e){if(kt&&console.error("useInsertionEffect must not schedule updates."),t6&&(yu=!0),r===Ro&&(wo===Av||wo===qv)||r.cancelPendingCommit!==null)lt(r,0),Di(r,Dr,se,!1);if(Li(r,e),(go&ve)!==Pe&&r===Ro){if(Kl)switch(o.tag){case 0:case 11:case 15:r=Vr&&N(Vr)||"Unknown",yH.has(r)||(yH.add(r),o=N(o)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",o,r,r));break;case 1:cH||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),cH=!0)}}else $l&&b0(r,o,e),eX(o),r===Ro&&((go&ve)===Pe&&(un|=e),No===tn&&Di(r,Dr,se,!1)),Yl(r)}function Mm(r,o,e){if((go&(ve|Hg))!==Pe)throw Error("Should not already be working.");if(Dr!==0&&Vr!==null){var l=Vr,n=be();switch(Bq){case Kh:case Av:var v=uh;zo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Suspended",v,n,Lg,void 0,"primary-light")):console.timeStamp("Suspended",v,n,Lg,void 0,"primary-light"));break;case qv:v=uh,zo&&((l=l._debugTask)?l.run(console.timeStamp.bind(console,"Action",v,n,Lg,void 0,"primary-light")):console.timeStamp("Action",v,n,Lg,void 0,"primary-light"));break;default:zo&&(l=n-uh,3>l||console.timeStamp("Blocked",uh,n,Lg,void 0,5>l?"primary-light":10>l?"primary":100>l?"primary-dark":"error"))}}v=(e=!e&&(o&127)===0&&(o&r.expiredLanes)===0||Bn(r,o))?EG(r,o):W2(r,o,!0);var b=e;do{if(v===Ai){St&&!e&&Di(r,o,0,!1),o=wo,uh=jo(),Bq=o;break}else{if(l=be(),n=r.current.alternate,b&&!_G(n)){ig(o),n=ue,v=l,!zo||v<=n||(ko?ko.run(console.timeStamp.bind(console,"Teared Render",n,v,jr,pr,"error")):console.timeStamp("Teared Render",n,v,jr,pr,"error")),ev(o,l),v=W2(r,o,!1),b=!1;continue}if(v===mv){if(b=o,r.errorRecoveryDisabledLanes&b)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){ig(o),gw(ue,l,o,ko),ev(o,l),o=w;r:{l=r,v=b,b=$h;var A=l.current.memoizedState.isDehydrated;if(A&&(lt(l,w).flags|=256),w=W2(l,w,!1),w!==mv){if(r6&&!A){l.errorRecoveryDisabledLanes|=v,un|=v,v=tn;break r}l=ae,ae=b,l!==null&&(ae===null?ae=l:ae.push.apply(ae,l))}v=w}if(b=!1,v!==mv)continue;else l=be()}}if(v===Qh){ig(o),gw(ue,l,o,ko),ev(o,l),lt(r,0),Di(r,o,0,!0);break}r:{switch(e=r,v){case Ai:case Qh:throw Error("Root did not complete. This is a bug in React.");case tn:if((o&4194048)!==o)break;case Bu:ig(o),MP(ue,l,o,ko),ev(o,l),n=o,(n&127)!==0?Gu=l:(n&4194048)!==0&&(Xu=l),Di(e,o,se,!hn);break r;case mv:ae=null;break;case Zu:case LH:break;default:throw Error("Unknown root exit status.")}if(C.actQueue!==null)G2(e,n,o,ae,Lh,Tu,se,un,Hv,v,null,null,ue,l);else{if((o&62914560)===o&&(b=ku+FH-be(),10<b)){if(Di(e,o,se,!hn),Zn(e,0,!0)!==0)break r;sg=o,e.timeoutHandle=sH(Rm.bind(null,e,n,ae,Lh,Tu,o,se,un,Hv,hn,v,"Throttled",ue,l),b);break r}Rm(e,n,ae,Lh,Tu,o,se,un,Hv,hn,v,null,ue,l)}}}break}while(1);Yl(r)}function Rm(r,o,e,l,n,v,b,w,A,H,U,$,J,F){r.timeoutHandle=Xv;var vr=o.subtreeFlags,Or=null;if(vr&8192||(vr&16785408)===16785408){if(Or={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fl},wm(o,v,Or),vr=(v&62914560)===v?ku-be():(v&4194048)===v?IH-be():0,vr=FX(Or,vr),vr!==null){sg=v,r.cancelPendingCommit=vr(G2.bind(null,r,o,v,e,l,n,b,w,A,U,Or,Or.waitingForViewTransition?"Waiting for the previous Animation":0<Or.count?0<Or.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Or.imgCount===1?"Suspended on an Image":0<Or.imgCount?"Suspended on Images":null,J,F)),Di(r,v,b,!H);return}}G2(r,o,v,e,l,n,b,w,A,U,Or,$,J,F)}function _G(r){for(var o=r;;){var e=o.tag;if((e===0||e===11||e===15)&&o.flags&16384&&(e=o.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var n=e[l],v=n.getSnapshot;n=n.value;try{if(!Ce(v(),n))return!1}catch(b){return!1}}if(e=o.child,o.subtreeFlags&16384&&e!==null)e.return=o,o=e;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Di(r,o,e,l){o&=~o6,o&=~un,r.suspendedLanes|=o,r.pingedLanes&=~o,l&&(r.warmLanes|=o),l=r.expirationTimes;for(var n=o;0<n;){var v=31-Ne(n),b=1<<v;l[v]=-1,n&=~b}e!==0&&Cn(r,e,o)}function gt(){return(go&(ve|Hg))===Pe?(S0(0,!1),!1):!0}function R2(){if(Vr!==null){if(wo===de)var r=Vr.return;else r=Vr,hb(),Lw(r),$t=null,Rh=0,r=Vr;for(;r!==null;)yO(r.alternate,r),r=r.return;Vr=null}}function ev(r,o){(r&127)!==0&&(en=o),(r&4194048)!==0&&(Nl=o),(r&62914560)!==0&&(Nq=o),(r&2080374784)!==0&&(Zq=o)}function lt(r,o){zo&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",pr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",pr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",pr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",pr,"primary-light"));var e=ue;if(ue=jo(),Dr!==0&&0<e){if(ig(Dr),No===Zu||No===tn)MP(e,ue,o,ko);else{var l=ue,n=ko;if(zo&&!(l<=e)){var v=(o&738197653)===o?"tertiary-dark":"primary-dark",b=(o&536870912)===o?"Prewarm":(o&201326741)===o?"Interrupted Hydration":"Interrupted Render";n?n.run(console.timeStamp.bind(console,b,e,l,jr,pr,v)):console.timeStamp(b,e,l,jr,pr,v)}}ev(Dr,ue)}if(e=ko,ko=null,(o&127)!==0){ko=th,n=0<=Fl&&Fl<en?en:Fl,l=0<=vv&&vv<en?en:vv,v=0<=l?l:0<=n?n:ue,0<=Gu?(ig(2),RP(Gu,v,o,e)):(Yu&127)!==0&&(ig(2),M0(en,v,ui)),e=n;var w=l,A=hh,H=0<Qt,U=gn===vh,$=gn===Wu;if(n=ue,l=th,v=I4,b=F4,zo){if(jr="Blocking",0<e?e>n&&(e=n):e=n,0<w?w>e&&(w=e):w=e,A!==null&&e>w){var J=H?"secondary-light":"warning";l?l.run(console.timeStamp.bind(console,H?"Consecutive":"Event: "+A,w,e,jr,pr,J)):console.timeStamp(H?"Consecutive":"Event: "+A,w,e,jr,pr,J)}n>e&&(w=U?"error":(o&738197653)===o?"tertiary-light":"primary-light",U=$?"Promise Resolved":U?"Cascading Update":5<n-e?"Update Blocked":"Update",$=[],b!=null&&$.push(["Component name",b]),v!=null&&$.push(["Method name",v]),e={start:e,end:n,detail:{devtools:{properties:$,track:jr,trackGroup:pr,color:w}}},l?l.run(performance.measure.bind(performance,U,e)):performance.measure(U,e))}Fl=-1.1,gn=0,F4=I4=null,Gu=-1.1,Qt=vv,vv=-1.1,en=jo()}if((o&4194048)!==0&&(ko=bh,n=0<=bi&&bi<Nl?Nl:bi,e=0<=Bg&&Bg<Nl?Nl:Bg,l=0<=ln&&ln<Nl?Nl:ln,v=0<=l?l:0<=e?e:ue,0<=Xu?(ig(256),RP(Xu,v,o,ko)):(Yu&4194048)!==0&&(ig(256),M0(Nl,v,ui)),$=l,w=tv,A=0<nn,H=N4===Wu,v=ue,l=bh,b=Iq,U=Fq,zo&&(jr="Transition",0<e?e>v&&(e=v):e=v,0<n?n>e&&(n=e):n=e,0<$?$>n&&($=n):$=n,n>$&&w!==null&&(J=A?"secondary-light":"warning",l?l.run(console.timeStamp.bind(console,A?"Consecutive":"Event: "+w,$,n,jr,pr,J)):console.timeStamp(A?"Consecutive":"Event: "+w,$,n,jr,pr,J)),e>n&&(l?l.run(console.timeStamp.bind(console,"Action",n,e,jr,pr,"primary-dark")):console.timeStamp("Action",n,e,jr,pr,"primary-dark")),v>e&&(n=H?"Promise Resolved":5<v-e?"Update Blocked":"Update",$=[],U!=null&&$.push(["Component name",U]),b!=null&&$.push(["Method name",b]),e={start:e,end:v,detail:{devtools:{properties:$,track:jr,trackGroup:pr,color:"primary-light"}}},l?l.run(performance.measure.bind(performance,n,e)):performance.measure(n,e))),Bg=bi=-1.1,N4=0,Xu=-1.1,nn=ln,ln=-1.1,Nl=jo()),(o&62914560)!==0&&(Yu&62914560)!==0&&(ig(4194304),M0(Nq,ue,ui)),(o&2080374784)!==0&&(Yu&2080374784)!==0&&(ig(268435456),M0(Zq,ue,ui)),e=r.timeoutHandle,e!==Xv&&(r.timeoutHandle=Xv,zJ(e)),e=r.cancelPendingCommit,e!==null&&(r.cancelPendingCommit=null,e()),sg=0,R2(),Ro=r,Vr=e=pl(r.current,null),Dr=o,wo=de,Mg=null,hn=!1,St=Bn(r,o),r6=!1,No=Ai,Hv=se=o6=un=bn=0,ae=$h=null,Tu=!1,(o&8)!==0&&(o|=o&32),l=r.entangledLanes,l!==0)for(r=r.entanglements,l&=o;0<l;)n=31-Ne(l),v=1<<n,o|=r[n],l&=~v;return Bl=o,lb(),r=Qq(),1000<r-zq&&(C.recentlyCreatedOwnerStacks=0,zq=r),pg.discardPendingWarnings(),e}function Wm(r,o){Ir=null,C.H=Yh,C.getCurrentStack=null,Kl=!1,Pg=null,o===Ut||o===Ku?(o=aP(),wo=Kh):o===S4?(o=aP(),wo=xH):wo=o===f4?s4:o!==null&&typeof o==="object"&&typeof o.then==="function"?Uh:Cu,Mg=o;var e=Vr;e===null?(No=Qh,Fb(r,ng(o,r.current))):e.mode&kr&&Hw(e)}function Gm(){var r=Ag.current;return r===null?!0:(Dr&4194048)===Dr?Cg===null?!0:!1:(Dr&62914560)===Dr||(Dr&536870912)!==0?r===Cg:!1}function Xm(){var r=C.H;return C.H=Yh,r===null?Yh:r}function Ym(){var r=C.A;return C.A=wJ,r}function ab(r){ko===null&&(ko=r._debugTask==null?null:r._debugTask)}function Db(){No=tn,hn||(Dr&4194048)!==Dr&&Ag.current!==null||(St=!0),(bn&134217727)===0&&(un&134217727)===0||Ro===null||Di(Ro,Dr,se,!1)}function W2(r,o,e){var l=go;go|=ve;var n=Xm(),v=Ym();if(Ro!==r||Dr!==o){if($l){var b=r.memoizedUpdaters;0<b.size&&(C0(r,Dr),b.clear()),xi(r,o)}Lh=null,lt(r,o)}o=!1,b=No;r:do try{if(wo!==de&&Vr!==null){var w=Vr,A=Mg;switch(wo){case s4:R2(),b=Bu;break r;case Kh:case Av:case qv:case Uh:Ag.current===null&&(o=!0);var H=wo;if(wo=de,Mg=null,it(r,w,A,H),e&&St){b=Ai;break r}break;default:H=wo,wo=de,Mg=null,it(r,w,A,H)}}Jm(),b=No;break}catch(U){Wm(r,U)}while(1);return o&&r.shellSuspendCounter++,hb(),go=l,C.H=n,C.A=v,Vr===null&&(Ro=null,Dr=0,lb()),b}function Jm(){for(;Vr!==null;)zm(Vr)}function EG(r,o){var e=go;go|=ve;var l=Xm(),n=Ym();if(Ro!==r||Dr!==o){if($l){var v=r.memoizedUpdaters;0<v.size&&(C0(r,Dr),v.clear()),xi(r,o)}Lh=null,au=be()+NH,lt(r,o)}else St=Bn(r,o);r:do try{if(wo!==de&&Vr!==null)o:switch(o=Vr,v=Mg,wo){case Cu:wo=de,Mg=null,it(r,o,v,Cu);break;case Av:case qv:if(TP(v)){wo=de,Mg=null,Qm(o);break}o=function(){wo!==Av&&wo!==qv||Ro!==r||(wo=Su),Yl(r)},v.then(o,o);break r;case Kh:wo=Su;break r;case xH:wo=d4;break r;case Su:TP(v)?(wo=de,Mg=null,Qm(o)):(wo=de,Mg=null,it(r,o,v,Su));break;case d4:var b=null;switch(Vr.tag){case 26:b=Vr.memoizedState;case 5:case 27:var w=Vr;if(b?MA(b):w.stateNode.complete){wo=de,Mg=null;var A=w.sibling;if(A!==null)Vr=A;else{var H=w.return;H!==null?(Vr=H,cb(H)):Vr=null}break o}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}wo=de,Mg=null,it(r,o,v,d4);break;case Uh:wo=de,Mg=null,it(r,o,v,Uh);break;case s4:R2(),No=Bu;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}C.actQueue!==null?Jm():fG();break}catch(U){Wm(r,U)}while(1);if(hb(),C.H=l,C.A=n,go=e,Vr!==null)return Ai;return Ro=null,Dr=0,lb(),No}function fG(){for(;Vr!==null&&!_X();)zm(Vr)}function zm(r){var o=r.alternate;(r.mode&kr)!==Lr?(qw(r),o=hr(r,u2,o,r,Bl),Hw(r)):o=hr(r,u2,o,r,Bl),r.memoizedProps=r.pendingProps,o===null?cb(r):Vr=o}function Qm(r){var o=hr(r,pG,r);r.memoizedProps=r.pendingProps,o===null?cb(r):Vr=o}function pG(r){var o=r.alternate,e=(r.mode&kr)!==Lr;switch(e&&qw(r),r.tag){case 15:case 0:o=CO(o,r,r.pendingProps,r.type,void 0,Dr);break;case 11:o=CO(o,r,r.pendingProps,r.type.render,r.ref,Dr);break;case 5:Lw(r);default:yO(o,r),r=Vr=zP(r,Bl),o=u2(o,r,Bl)}return e&&Hw(r),o}function it(r,o,e,l){hb(),Lw(o),$t=null,Rh=0;var n=o.return;try{if(FG(r,n,o,e,Dr)){No=Qh,Fb(r,ng(e,r.current)),Vr=null;return}}catch(v){if(n!==null)throw Vr=n,v;No=Qh,Fb(r,ng(e,r.current)),Vr=null;return}if(o.flags&32768){if(sr||l===Cu)r=!0;else if(St||(Dr&536870912)!==0)r=!1;else if(hn=r=!0,l===Av||l===qv||l===Kh||l===Uh)l=Ag.current,l!==null&&l.tag===13&&(l.flags|=16384);Km(o,r)}else cb(o)}function cb(r){var o=r;do{if((o.flags&32768)!==0){Km(o,hn);return}var e=o.alternate;if(r=o.return,qw(o),e=hr(o,BG,e,o,Bl),(o.mode&kr)!==Lr&&NP(o),e!==null){Vr=e;return}if(o=o.sibling,o!==null){Vr=o;return}Vr=o=r}while(o!==null);No===Ai&&(No=LH)}function Km(r,o){do{var e=CG(r.alternate,r);if(e!==null){e.flags&=32767,Vr=e;return}if((r.mode&kr)!==Lr){NP(r),e=r.actualDuration;for(var l=r.child;l!==null;)e+=l.actualDuration,l=l.sibling;r.actualDuration=e}if(e=r.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!o&&(r=r.sibling,r!==null)){Vr=r;return}Vr=r=e}while(r!==null);No=Bu,Vr=null}function G2(r,o,e,l,n,v,b,w,A,H,U,$,J,F){r.cancelPendingCommit=null;do B0();while(ge!==Pn);if(pg.flushLegacyContextWarning(),pg.flushPendingUnsafeLifecycleWarnings(),(go&(ve|Hg))!==Pe)throw Error("Should not already be working.");if(ig(e),H===mv?gw(J,F,e,ko):l!==null?WG(J,F,e,l,o!==null&&o.alternate!==null&&o.alternate.memoizedState.isDehydrated&&(o.flags&256)!==0,ko):RG(J,F,e,ko),o!==null){if(e===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),o===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(v=o.lanes|o.childLanes,v|=K4,_1(r,e,v,b,w,A),r===Ro&&(Vr=Ro=null,Dr=0),Tt=o,On=r,sg=e,l6=v,n6=n,kH=l,i6=F,aH=$,rl=Du,DH=null,o.actualDuration!==0||(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,oX(ut,function(){return Bh=window.event,rl===Du&&(rl=g6),Im(),null})):(r.callbackNode=null,r.callbackPriority=0),hi=null,on=jo(),$!==null&&GG(F,on,$,ko),l=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,n=ho.p,ho.p=Og,b=go,go|=Hg;try{cG(r,o,e)}finally{go=b,ho.p=n,C.T=l}}ge=BH,Um(),$m(),Lm()}}function Um(){if(ge===BH){ge=Pn;var r=On,o=Tt,e=sg,l=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var n=ho.p;ho.p=Og;var v=go;go|=Hg;try{Bt=e,Ct=r,Pb(),nm(o,r),Ct=Bt=null,e=q6;var b=AP(r.containerInfo),w=e.focusedElem,A=e.selectionRange;if(b!==w&&w&&w.ownerDocument&&mP(w.ownerDocument.documentElement,w)){if(A!==null&&rw(w)){var{start:H,end:U}=A;if(U===void 0&&(U=H),"selectionStart"in w)w.selectionStart=H,w.selectionEnd=Math.min(U,w.value.length);else{var $=w.ownerDocument||document,J=$&&$.defaultView||window;if(J.getSelection){var F=J.getSelection(),vr=w.textContent.length,Or=Math.min(A.start,vr),Xo=A.end===void 0?Or:Math.min(A.end,vr);!F.extend&&Or>Xo&&(b=Xo,Xo=Or,Or=b);var oo=OP(w,Or),Y=OP(w,Xo);if(oo&&Y&&(F.rangeCount!==1||F.anchorNode!==oo.node||F.anchorOffset!==oo.offset||F.focusNode!==Y.node||F.focusOffset!==Y.offset)){var z=$.createRange();z.setStart(oo.node,oo.offset),F.removeAllRanges(),Or>Xo?(F.addRange(z),F.extend(Y.node,Y.offset)):(z.setEnd(Y.node,Y.offset),F.addRange(z))}}}}$=[];for(F=w;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});typeof w.focus==="function"&&w.focus();for(w=0;w<$.length;w++){var K=$[w];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}i5=!!A6,q6=A6=null}finally{go=v,ho.p=n,C.T=l}}r.current=o,ge=CH}}function $m(){if(ge===CH){ge=Pn;var r=DH;if(r!==null){on=jo();var o=ti,e=on;!zo||e<=o||(ui?ui.run(console.timeStamp.bind(console,r,o,e,jr,pr,"secondary-light")):console.timeStamp(r,o,e,jr,pr,"secondary-light"))}r=On,o=Tt,e=sg;var l=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var n=ho.p;ho.p=Og;var v=go;go|=Hg;try{Bt=e,Ct=r,Pb(),om(r,o.alternate,o),Ct=Bt=null}finally{go=v,ho.p=n,C.T=l}}r=i6,o=aH,ti=jo(),r=o===null?r:on,o=ti,e=rl===e6,l=ko,hi!==null?WP(r,o,hi,!1,l):!zo||o<=r||(l?l.run(console.timeStamp.bind(console,e?"Commit Interrupted View Transition":"Commit",r,o,jr,pr,e?"error":"secondary-dark")):console.timeStamp(e?"Commit Interrupted View Transition":"Commit",r,o,jr,pr,e?"error":"secondary-dark")),ge=SH}}function Lm(){if(ge===TH||ge===SH){if(ge===TH){var r=ti;ti=jo();var o=ti,e=rl===e6;!zo||o<=r||(ui?ui.run(console.timeStamp.bind(console,e?"Interrupted View Transition":"Starting Animation",r,o,jr,pr,e?"error":"secondary-light")):console.timeStamp(e?"Interrupted View Transition":"Starting Animation",r,o,jr,pr,e?" error":"secondary-light")),rl!==e6&&(rl=ZH)}ge=Pn,EX(),r=On;var l=Tt;o=sg,e=kH;var n=l.actualDuration!==0||(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0;n?ge=cu:(ge=Pn,Tt=On=null,xm(r,r.pendingLanes),Mv=0,Ih=null);var v=r.pendingLanes;if(v===0&&(wn=null),n||Bm(r),v=M(o),l=l.stateNode,$e&&typeof $e.onCommitFiberRoot==="function")try{var b=(l.current.flags&128)===128;switch(v){case Og:var w=n4;break;case Eg:w=v4;break;case Ll:w=ut;break;case tu:w=t4;break;default:w=ut}$e.onCommitFiberRoot(wt,l,w,b)}catch($){Ul||(Ul=!0,console.error("React instrumentation encountered an error: %o",$))}if($l&&r.memoizedUpdaters.clear(),VG(),e!==null){b=C.T,w=ho.p,ho.p=Og,C.T=null;try{var A=r.onRecoverableError;for(l=0;l<e.length;l++){var H=e[l],U=jG(H.stack);hr(H.source,A,H.value,U)}}finally{C.T=b,ho.p=w}}(sg&3)!==0&&B0(),Yl(r),v=r.pendingLanes,(o&261930)!==0&&(v&42)!==0?(zu=!0,r===v6?xh++:(xh=0,v6=r)):xh=0,n||ev(o,ti),S0(0,!1)}}function jG(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function xm(r,o){(r.pooledCacheLanes&=o)===0&&(o=r.pooledCache,o!=null&&(r.pooledCache=null,W0(o)))}function B0(){return Um(),$m(),Lm(),Im()}function Im(){if(ge!==cu)return!1;var r=On,o=l6;l6=0;var e=M(sg),l=Ll===0||Ll>e?Ll:e;e=C.T;var n=ho.p;try{ho.p=l,C.T=null;var v=n6;n6=null,l=On;var b=sg;if(ge=Pn,Tt=On=null,sg=0,(go&(ve|Hg))!==Pe)throw Error("Cannot flush passive effects while already rendering.");ig(b),t6=!0,yu=!1;var w=0;if(hi=null,w=be(),rl===ZH)M0(ti,w,ui);else{var A=ti,H=w,U=rl===g6;!zo||H<=A||(ko?ko.run(console.timeStamp.bind(console,U?"Waiting for Paint":"Waiting",A,H,jr,pr,"secondary-light")):console.timeStamp(U?"Waiting for Paint":"Waiting",A,H,jr,pr,"secondary-light"))}A=go,go|=Hg;var $=l.current;Pb(),Om($);var J=l.current;$=i6,Pb(),bm(l,J,b,v,$),Bm(l),go=A;var F=be();if(J=w,$=ko,hi!==null?WP(J,F,hi,!0,$):!zo||F<=J||($?$.run(console.timeStamp.bind(console,"Remaining Effects",J,F,jr,pr,"secondary-dark")):console.timeStamp("Remaining Effects",J,F,jr,pr,"secondary-dark")),ev(b,F),S0(0,!1),yu?l===Ih?Mv++:(Mv=0,Ih=l):Mv=0,yu=t6=!1,$e&&typeof $e.onPostCommitFiberRoot==="function")try{$e.onPostCommitFiberRoot(wt,l)}catch(Or){Ul||(Ul=!0,console.error("React instrumentation encountered an error: %o",Or))}var vr=l.current.stateNode;return vr.effectDuration=0,vr.passiveEffectDuration=0,!0}finally{ho.p=n,C.T=e,xm(r,o)}}function Fm(r,o,e){o=ng(e,o),ZP(o),o=r2(r.stateNode,o,2),r=Si(r,o,2),r!==null&&(Li(r,2),Yl(r))}function to(r,o,e){if(kt=!1,r.tag===3)Fm(r,r,e);else{for(;o!==null;){if(o.tag===3){Fm(o,r,e);return}if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError==="function"||typeof l.componentDidCatch==="function"&&(wn===null||!wn.has(l))){r=ng(e,r),ZP(r),e=o2(2),l=Si(o,e,2),l!==null&&(e2(e,l,o,r),Li(l,2),Yl(l));return}}o=o.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,e)}}function X2(r,o,e){var l=r.pingCache;if(l===null){l=r.pingCache=new OJ;var n=new Set;l.set(o,n)}else n=l.get(o),n===void 0&&(n=new Set,l.set(o,n));n.has(e)||(r6=!0,n.add(e),l=dG.bind(null,r,o,e),$l&&C0(r,e),o.then(l,l))}function dG(r,o,e){var l=r.pingCache;l!==null&&l.delete(o),r.pingedLanes|=r.suspendedLanes&e,r.warmLanes&=~e,(e&127)!==0?0>Fl&&(en=Fl=jo(),th=Ru("Promise Resolved"),gn=Wu):(e&4194048)!==0&&0>Bg&&(Nl=Bg=jo(),bh=Ru("Promise Resolved"),N4=Wu),qm()&&C.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Ro===r&&(Dr&e)===e&&(No===tn||No===Zu&&(Dr&62914560)===Dr&&be()-ku<FH?(go&ve)===Pe&&lt(r,0):o6|=e,Hv===Dr&&(Hv=0)),Yl(r)}function Nm(r,o){o===0&&(o=Dv()),r=Ue(r,o),r!==null&&(Li(r,o),Yl(r))}function sG(r){var o=r.memoizedState,e=0;o!==null&&(e=o.retryLane),Nm(r,e)}function rX(r,o){var e=0;switch(r.tag){case 31:case 13:var{stateNode:l,memoizedState:n}=r;n!==null&&(e=n.retryLane);break;case 19:l=r.stateNode;break;case 22:l=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}l!==null&&l.delete(o),Nm(r,e)}function Y2(r,o,e){if((o.subtreeFlags&67117056)!==0)for(o=o.child;o!==null;){var l=r,n=o,v=n.type===eu;v=e||v,n.tag!==22?n.flags&67108864?v&&hr(n,Zm,l,n):Y2(l,n,v):n.memoizedState===null&&(v&&n.flags&8192?hr(n,Zm,l,n):n.subtreeFlags&67108864&&hr(n,Y2,l,n,v)),o=o.sibling}}function Zm(r,o){Wo(!0);try{tm(o),mm(o),hm(r,o.alternate,o,!1),um(r,o,0,null,!1,0)}finally{Wo(!1)}}function Bm(r){var o=!0;r.current.mode&(Le|fg)||(o=!1),Y2(r,r.current,o)}function Cm(r){if((go&ve)===Pe){var o=r.tag;if(o===3||o===1||o===0||o===11||o===14||o===15){if(o=N(r)||"ReactComponent",Vu!==null){if(Vu.has(o))return;Vu.add(o)}else Vu=new Set([o]);hr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function C0(r,o){$l&&r.memoizedUpdaters.forEach(function(e){b0(r,e,o)})}function oX(r,o){var e=C.actQueue;return e!==null?(e.push(o),qJ):i4(r,o)}function eX(r){qm()&&C.actQueue===null&&hr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,N(r))})}function Yl(r){r!==at&&r.next===null&&(at===null?_u=at=r:at=at.next=r),Eu=!0,C.actQueue!==null?b6||(b6=!0,am()):h6||(h6=!0,am())}function S0(r,o){if(!u6&&Eu){u6=!0;do{var e=!1;for(var l=_u;l!==null;){if(!o)if(r!==0){var n=l.pendingLanes;if(n===0)var v=0;else{var{suspendedLanes:b,pingedLanes:w}=l;v=(1<<31-Ne(42|r)+1)-1,v&=n&~(b&~w),v=v&201326741?v&201326741|1:v?v|2:0}v!==0&&(e=!0,km(l,v))}else v=Dr,v=Zn(l,l===Ro?v:0,l.cancelPendingCommit!==null||l.timeoutHandle!==Xv),(v&3)===0||Bn(l,v)||(e=!0,km(l,v));l=l.next}}while(e);u6=!1}}function gX(){Bh=window.event,J2()}function J2(){Eu=b6=h6=!1;var r=0;mn!==0&&bX()&&(r=mn);for(var o=be(),e=null,l=_u;l!==null;){var n=l.next,v=Sm(l,o);if(v===0)l.next=null,e===null?_u=n:e.next=n,n===null&&(at=e);else if(e=l,r!==0||(v&3)!==0)Eu=!0;l=n}ge!==Pn&&ge!==cu||S0(r,!1),mn!==0&&(mn=0)}function Sm(r,o){for(var{suspendedLanes:e,pingedLanes:l,expirationTimes:n}=r,v=r.pendingLanes&-62914561;0<v;){var b=31-Ne(v),w=1<<b,A=n[b];if(A===-1){if((w&e)===0||(w&l)!==0)n[b]=D5(w,o)}else A<=o&&(r.expiredLanes|=w);v&=~w}if(o=Ro,e=Dr,e=Zn(r,r===o?e:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Xv),l=r.callbackNode,e===0||r===o&&(wo===Av||wo===qv)||r.cancelPendingCommit!==null)return l!==null&&z2(l),r.callbackNode=null,r.callbackPriority=0;if((e&3)===0||Bn(r,e)){if(o=e&-e,o!==r.callbackPriority||C.actQueue!==null&&l!==w6)z2(l);else return o;switch(M(e)){case Og:case Eg:e=v4;break;case Ll:e=ut;break;case tu:e=t4;break;default:e=ut}return l=Tm.bind(null,r),C.actQueue!==null?(C.actQueue.push(l),e=w6):e=i4(e,l),r.callbackPriority=o,r.callbackNode=e,o}return l!==null&&z2(l),r.callbackPriority=2,r.callbackNode=null,2}function Tm(r,o){if(zu=Ju=!1,Bh=window.event,ge!==Pn&&ge!==cu)return r.callbackNode=null,r.callbackPriority=0,null;var e=r.callbackNode;if(rl===Du&&(rl=g6),B0()&&r.callbackNode!==e)return null;var l=Dr;if(l=Zn(r,r===Ro?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Xv),l===0)return null;return Mm(r,l,o),Sm(r,be()),r.callbackNode!=null&&r.callbackNode===e?Tm.bind(null,r):null}function km(r,o){if(B0())return null;Ju=zu,zu=!1,Mm(r,o,!0)}function z2(r){r!==w6&&r!==null&&VX(r)}function am(){C.actQueue!==null&&C.actQueue.push(function(){return J2(),null}),QJ(function(){(go&(ve|Hg))!==Pe?i4(n4,gX):J2()})}function Q2(){if(mn===0){var r=hv;r===0&&(r=iu,iu<<=1,(iu&261888)===0&&(iu=256)),mn=r}return mn}function Dm(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return Oo(r,"action"),A0(""+r)}function cm(r,o){var e=o.ownerDocument.createElement("input");return e.name=o.name,e.value=o.value,r.id&&e.setAttribute("form",r.id),o.parentNode.insertBefore(e,o),r=new FormData(r),e.parentNode.removeChild(e),r}function lX(r,o,e,l,n){if(o==="submit"&&e&&e.stateNode===n){var v=Dm((n[Ze]||null).action),b=l.submitter;b&&(o=(o=b[Ze]||null)?Dm(o.formAction):b.getAttribute("formAction"),o!==null&&(v=o,b=null));var w=new Pu("action","action",null,l,n);r.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(mn!==0){var A=b?cm(n,b):new FormData(n),H={pending:!0,data:A,method:n.method,action:v};Object.freeze(H),_w(e,H,null,A)}}else typeof v==="function"&&(w.preventDefault(),A=b?cm(n,b):new FormData(n),H={pending:!0,data:A,method:n.method,action:v},Object.freeze(H),_w(e,H,v,A))},currentTarget:n}]})}}function yb(r,o,e){r.currentTarget=e;try{o(r)}catch(l){Y4(l)}r.currentTarget=null}function ym(r,o){o=(o&4)!==0;for(var e=0;e<r.length;e++){var l=r[e];r:{var n=void 0,v=l.event;if(l=l.listeners,o)for(var b=l.length-1;0<=b;b--){var w=l[b],A=w.instance,H=w.currentTarget;if(w=w.listener,A!==n&&v.isPropagationStopped())break r;A!==null?hr(A,yb,v,w,H):yb(v,w,H),n=A}else for(b=0;b<l.length;b++){if(w=l[b],A=w.instance,H=w.currentTarget,w=w.listener,A!==n&&v.isPropagationStopped())break r;A!==null?hr(A,yb,v,w,H):yb(v,w,H),n=A}}}}function ro(r,o){P6.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var e=o[h4];e===void 0&&(e=o[h4]=new Set);var l=r+"__bubble";e.has(l)||(Vm(o,r,2,!1),e.add(l))}function K2(r,o,e){P6.has(r)&&!o&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var l=0;o&&(l|=4),Vm(e,r,l,o)}function U2(r){if(!r[fu]){r[fu]=!0,aA.forEach(function(e){e!=="selectionchange"&&(P6.has(e)||K2(e,!1,r),K2(e,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[fu]||(o[fu]=!0,K2("selectionchange",!1,o))}}function Vm(r,o,e,l){switch(JA(o)){case Og:var n=CX;break;case Eg:n=SX;break;default:n=y2}e=n.bind(null,o,e,r),n=void 0,!O4||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(n=!0),l?n!==void 0?r.addEventListener(o,e,{capture:!0,passive:n}):r.addEventListener(o,e,!0):n!==void 0?r.addEventListener(o,e,{passive:n}):r.addEventListener(o,e,!1)}function $2(r,o,e,l,n){var v=l;if((o&1)===0&&(o&2)===0&&l!==null)r:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===n)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===n)return;b=b.return}for(;w!==null;){if(b=Mr(w),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){l=v=b;continue r}w=w.parentNode}}l=l.return}gP(function(){var H=v,U=d5(e),$=[];r:{var J=Jq.get(r);if(J!==void 0){var F=Pu,vr=r;switch(r){case"keypress":if(s1(e)===0)break r;case"keydown":case"keyup":F=IY;break;case"focusin":vr="focus",F=H4;break;case"focusout":vr="blur",F=H4;break;case"beforeblur":case"afterblur":F=H4;break;case"click":if(e.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=uq;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=WY;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=ZY;break;case Wq:case Gq:case Xq:F=YY;break;case Yq:F=CY;break;case"scroll":case"scrollend":F=MY;break;case"wheel":F=TY;break;case"copy":case"cut":case"paste":F=zY;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Pq;break;case"toggle":case"beforetoggle":F=aY}var Or=(o&4)!==0,Xo=!Or&&(r==="scroll"||r==="scrollend"),oo=Or?J!==null?J+"Capture":null:J;Or=[];for(var Y=H,z;Y!==null;){var K=Y;if(z=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||z===null||oo===null||(K=q0(Y,oo),K!=null&&Or.push(T0(Y,K,z))),Xo)break;Y=Y.return}0<Or.length&&(J=new F(J,vr,null,e,U),$.push({event:J,listeners:Or}))}}if((o&7)===0){r:{if(J=r==="mouseover"||r==="pointerover",F=r==="mouseout"||r==="pointerout",J&&e!==j0&&(vr=e.relatedTarget||e.fromElement)&&(Mr(vr)||vr[fi]))break r;if(F||J){if(J=U.window===U?U:(J=U.ownerDocument)?J.defaultView||J.parentWindow:window,F){if(vr=e.relatedTarget||e.toElement,F=H,vr=vr?Mr(vr):null,vr!==null&&(Xo=j(vr),Or=vr.tag,vr!==Xo||Or!==5&&Or!==27&&Or!==6))vr=null}else F=null,vr=H;if(F!==vr){if(Or=uq,K="onMouseLeave",oo="onMouseEnter",Y="mouse",r==="pointerout"||r==="pointerover")Or=Pq,K="onPointerLeave",oo="onPointerEnter",Y="pointer";if(Xo=F==null?J:Br(F),z=vr==null?J:Br(vr),J=new Or(K,Y+"leave",F,e,U),J.target=Xo,J.relatedTarget=z,K=null,Mr(U)===H&&(Or=new Or(oo,Y+"enter",vr,e,U),Or.target=z,Or.relatedTarget=Xo,K=Or),Xo=K,F&&vr)o:{Or=iX,oo=F,Y=vr,z=0;for(K=oo;K;K=Or(K))z++;K=0;for(var D=Y;D;D=Or(D))K++;for(;0<z-K;)oo=Or(oo),z--;for(;0<K-z;)Y=Or(Y),K--;for(;z--;){if(oo===Y||Y!==null&&oo===Y.alternate){Or=oo;break o}oo=Or(oo),Y=Or(Y)}Or=null}else Or=null;F!==null&&_m($,J,F,Or,!1),vr!==null&&Xo!==null&&_m($,Xo,vr,Or,!0)}}}r:{if(J=H?Br(H):window,F=J.nodeName&&J.nodeName.toLowerCase(),F==="select"||F==="input"&&J.type==="file")var ur=bP;else if(tP(J))if(Mq)ur=qG;else{ur=mG;var Fr=OG}else F=J.nodeName,!F||F.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?H&&m0(H.elementType)&&(ur=bP):ur=AG;if(ur&&(ur=ur(r,H))){hP($,ur,e,U);break r}Fr&&Fr(r,J,H),r==="focusout"&&H&&J.type==="number"&&H.memoizedProps.value!=null&&V5(J,"number",J.value)}switch(Fr=H?Br(H):window,r){case"focusin":if(tP(Fr)||Fr.contentEditable==="true")Mt=Fr,R4=H,lh=null;break;case"focusout":lh=R4=Mt=null;break;case"mousedown":W4=!0;break;case"contextmenu":case"mouseup":case"dragend":W4=!1,qP($,e,U);break;case"selectionchange":if(VY)break;case"keydown":case"keyup":qP($,e,U)}var Jr;if(M4)r:{switch(r){case"compositionstart":var Gr="onCompositionStart";break r;case"compositionend":Gr="onCompositionEnd";break r;case"compositionupdate":Gr="onCompositionUpdate";break r}Gr=void 0}else Ht?nP(r,e)&&(Gr="onCompositionEnd"):r==="keydown"&&e.keyCode===Oq&&(Gr="onCompositionStart");if(Gr&&(mq&&e.locale!=="ko"&&(Ht||Gr!=="onCompositionStart"?Gr==="onCompositionEnd"&&Ht&&(Jr=lP()):(pi=U,m4=("value"in pi)?pi.value:pi.textContent,Ht=!0)),Fr=Vb(H,Gr),0<Fr.length&&(Gr=new wq(Gr,r,null,e,U),$.push({event:Gr,listeners:Fr}),Jr?Gr.data=Jr:(Jr=vP(e),Jr!==null&&(Gr.data=Jr)))),Jr=cY?bG(r,e):uG(r,e))Gr=Vb(H,"onBeforeInput"),0<Gr.length&&(Fr=new KY("onBeforeInput","beforeinput",null,e,U),$.push({event:Fr,listeners:Gr}),Fr.data=Jr);lX($,r,H,e,U)}ym($,o)})}function T0(r,o,e){return{instance:r,listener:o,currentTarget:e}}function Vb(r,o){for(var e=o+"Capture",l=[];r!==null;){var n=r,v=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||v===null||(n=q0(r,e),n!=null&&l.unshift(T0(r,n,v)),n=q0(r,o),n!=null&&l.push(T0(r,n,v))),r.tag===3)return l;r=r.return}return[]}function iX(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function _m(r,o,e,l,n){for(var v=o._reactName,b=[];e!==null&&e!==l;){var w=e,A=w.alternate,H=w.stateNode;if(w=w.tag,A!==null&&A===l)break;w!==5&&w!==26&&w!==27||H===null||(A=H,n?(H=q0(e,v),H!=null&&b.unshift(T0(e,H,A))):n||(H=q0(e,v),H!=null&&b.push(T0(e,H,A)))),e=e.return}b.length!==0&&r.push({event:o,listeners:b})}function L2(r,o){nG(r,o),r!=="input"&&r!=="textarea"&&r!=="select"||o==null||o.value!==null||hq||(hq=!0,r==="select"&&o.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var e={registrationNameDependencies:gv,possibleRegistrationNames:b4};m0(r)||typeof o.is==="string"||tG(r,o,e),o.contentEditable&&!o.suppressContentEditableWarning&&o.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function he(r,o,e,l){o!==e&&(e=ci(e),ci(o)!==e&&(l[r]=o))}function nX(r,o,e){o.forEach(function(l){e[pm(l)]=l==="style"?I2(r):r.getAttribute(l)})}function Jl(r,o){o===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof o)}function Em(r,o){return r=r.namespaceURI===bu||r.namespaceURI===Ot?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=o,r.innerHTML}function ci(r){return eg(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",Qe(r)),fo(r)),(typeof r==="string"?r:""+r).replace(HJ,`
`).replace(MJ,"")}function fm(r,o){return o=ci(o),ci(r)===o?!0:!1}function Ho(r,o,e,l,n,v){switch(e){case"children":if(typeof l==="string")d1(l,o,!1),o==="body"||o==="textarea"&&l===""||O0(r,l);else if(typeof l==="number"||typeof l==="bigint")d1(""+l,o,!1),o!=="body"&&O0(r,""+l);break;case"className":f1(r,"class",l);break;case"tabIndex":f1(r,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":f1(r,e,l);break;case"style":rP(r,l,v);break;case"data":if(o!=="object"){f1(r,"data",l);break}case"src":case"href":if(l===""&&(o!=="a"||e!=="href")){e==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',e,e):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',e,e),r.removeAttribute(e);break}if(l==null||typeof l==="function"||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(e);break}Oo(l,e),l=A0(""+l),r.setAttribute(e,l);break;case"action":case"formAction":if(l!=null&&(o==="form"?e==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof l==="function"&&(n.encType==null&&n.method==null||du||(du=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),n.target==null||ju||(ju=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):o==="input"||o==="button"?e==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):o!=="input"||n.type==="submit"||n.type==="image"||pu?o!=="button"||n.type==null||n.type==="submit"||pu?typeof l==="function"&&(n.name==null||EH||(EH=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),n.formEncType==null&&n.formMethod==null||du||(du=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),n.formTarget==null||ju||(ju=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(pu=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(pu=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):e==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof l==="function"){r.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v==="function"&&(e==="formAction"?(o!=="input"&&Ho(r,o,"name",n.name,n,null),Ho(r,o,"formEncType",n.formEncType,n,null),Ho(r,o,"formMethod",n.formMethod,n,null),Ho(r,o,"formTarget",n.formTarget,n,null)):(Ho(r,o,"encType",n.encType,n,null),Ho(r,o,"method",n.method,n,null),Ho(r,o,"target",n.target,n,null)));if(l==null||typeof l==="symbol"||typeof l==="boolean"){r.removeAttribute(e);break}Oo(l,e),l=A0(""+l),r.setAttribute(e,l);break;case"onClick":l!=null&&(typeof l!=="function"&&Jl(e,l),r.onclick=fl);break;case"onScroll":l!=null&&(typeof l!=="function"&&Jl(e,l),ro("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Jl(e,l),ro("scrollend",r));break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(e=l.__html,e!=null){if(n.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=e}}break;case"multiple":r.multiple=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"muted":r.muted=l&&typeof l!=="function"&&typeof l!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l==="function"||typeof l==="boolean"||typeof l==="symbol"){r.removeAttribute("xlink:href");break}Oo(l,e),e=A0(""+l),r.setAttributeNS(Rv,"xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Oo(l,e),r.setAttribute(e,""+l)):r.removeAttribute(e);break;case"inert":l!==""||su[e]||(su[e]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",e));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!=="function"&&typeof l!=="symbol"?r.setAttribute(e,""):r.removeAttribute(e);break;case"capture":case"download":l===!0?r.setAttribute(e,""):l!==!1&&l!=null&&typeof l!=="function"&&typeof l!=="symbol"?(Oo(l,e),r.setAttribute(e,l)):r.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!=="function"&&typeof l!=="symbol"&&!isNaN(l)&&1<=l?(Oo(l,e),r.setAttribute(e,l)):r.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l==="function"||typeof l==="symbol"||isNaN(l)?r.removeAttribute(e):(Oo(l,e),r.setAttribute(e,l));break;case"popover":ro("beforetoggle",r),ro("toggle",r),E1(r,"popover",l);break;case"xlinkActuate":El(r,Rv,"xlink:actuate",l);break;case"xlinkArcrole":El(r,Rv,"xlink:arcrole",l);break;case"xlinkRole":El(r,Rv,"xlink:role",l);break;case"xlinkShow":El(r,Rv,"xlink:show",l);break;case"xlinkTitle":El(r,Rv,"xlink:title",l);break;case"xlinkType":El(r,Rv,"xlink:type",l);break;case"xmlBase":El(r,O6,"xml:base",l);break;case"xmlLang":El(r,O6,"xml:lang",l);break;case"xmlSpace":El(r,O6,"xml:space",l);break;case"is":v!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),E1(r,"is",l);break;case"innerText":case"textContent":break;case"popoverTarget":fH||l==null||typeof l!=="object"||(fH=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",l));default:!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N"?(e=oP(e),E1(r,e,l)):gv.hasOwnProperty(e)&&l!=null&&typeof l!=="function"&&Jl(e,l)}}function x2(r,o,e,l,n,v){switch(e){case"style":rP(r,l,v);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!=="object"||!("__html"in l))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(e=l.__html,e!=null){if(n.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=e}}break;case"children":typeof l==="string"?O0(r,l):(typeof l==="number"||typeof l==="bigint")&&O0(r,""+l);break;case"onScroll":l!=null&&(typeof l!=="function"&&Jl(e,l),ro("scroll",r));break;case"onScrollEnd":l!=null&&(typeof l!=="function"&&Jl(e,l),ro("scrollend",r));break;case"onClick":l!=null&&(typeof l!=="function"&&Jl(e,l),r.onclick=fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(gv.hasOwnProperty(e))l!=null&&typeof l!=="function"&&Jl(e,l);else r:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),o=e.slice(2,n?e.length-7:void 0),v=r[Ze]||null,v=v!=null?v[e]:null,typeof v==="function"&&r.removeEventListener(o,v,n),typeof l==="function")){typeof v!=="function"&&v!==null&&(e in r?r[e]=null:r.hasAttribute(e)&&r.removeAttribute(e)),r.addEventListener(o,l,n);break r}e in r?r[e]=l:l===!0?r.setAttribute(e,""):E1(r,e,l)}}}function Me(r,o,e){switch(L2(o,e),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ro("error",r),ro("load",r);var l=!1,n=!1,v;for(v in e)if(e.hasOwnProperty(v)){var b=e[v];if(b!=null)switch(v){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ho(r,o,v,b,e,null)}}n&&Ho(r,o,"srcSet",e.srcSet,e,null),l&&Ho(r,o,"src",e.src,e,null);return;case"input":Ii("input",e),ro("invalid",r);var w=v=b=n=null,A=null,H=null;for(l in e)if(e.hasOwnProperty(l)){var U=e[l];if(U!=null)switch(l){case"name":n=U;break;case"type":b=U;break;case"checked":A=U;break;case"defaultChecked":H=U;break;case"value":v=U;break;case"defaultValue":w=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ho(r,o,l,U,e,null)}}C8(r,e),S8(r,v,w,A,H,b,n,!1);return;case"select":Ii("select",e),ro("invalid",r),l=b=v=null;for(n in e)if(e.hasOwnProperty(n)&&(w=e[n],w!=null))switch(n){case"value":v=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:Ho(r,o,n,w,e,null)}a8(r,e),o=v,e=b,r.multiple=!!l,o!=null?yv(r,!!l,o,!1):e!=null&&yv(r,!!l,e,!0);return;case"textarea":Ii("textarea",e),ro("invalid",r),v=n=l=null;for(b in e)if(e.hasOwnProperty(b)&&(w=e[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":n=w;break;case"children":v=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ho(r,o,b,w,e,null)}D8(r,e),y8(r,l,n,v);return;case"option":T8(r,e);for(A in e)if(e.hasOwnProperty(A)&&(l=e[A],l!=null))switch(A){case"selected":r.selected=l&&typeof l!=="function"&&typeof l!=="symbol";break;default:Ho(r,o,A,l,e,null)}return;case"dialog":ro("beforetoggle",r),ro("toggle",r),ro("cancel",r),ro("close",r);break;case"iframe":case"object":ro("load",r);break;case"video":case"audio":for(l=0;l<Fh.length;l++)ro(Fh[l],r);break;case"image":ro("error",r),ro("load",r);break;case"details":ro("toggle",r);break;case"embed":case"source":case"link":ro("error",r),ro("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in e)if(e.hasOwnProperty(H)&&(l=e[H],l!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ho(r,o,H,l,e,null)}return;default:if(m0(o)){for(U in e)e.hasOwnProperty(U)&&(l=e[U],l!==void 0&&x2(r,o,U,l,e,void 0));return}}for(w in e)e.hasOwnProperty(w)&&(l=e[w],l!=null&&Ho(r,o,w,l,e,null))}function vX(r,o,e,l){switch(L2(o,l),o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,v=null,b=null,w=null,A=null,H=null,U=null;for(F in e){var $=e[F];if(e.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":A=$;default:l.hasOwnProperty(F)||Ho(r,o,F,null,l,$)}}for(var J in l){var F=l[J];if($=e[J],l.hasOwnProperty(J)&&(F!=null||$!=null))switch(J){case"type":v=F;break;case"name":n=F;break;case"checked":H=F;break;case"defaultChecked":U=F;break;case"value":b=F;break;case"defaultValue":w=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:F!==$&&Ho(r,o,J,F,l,$)}}o=e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null,l=l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null,o||!l||_H||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),_H=!0),!o||l||VH||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),VH=!0),y5(r,b,w,A,H,U,v,n);return;case"select":F=b=w=J=null;for(v in e)if(A=e[v],e.hasOwnProperty(v)&&A!=null)switch(v){case"value":break;case"multiple":F=A;default:l.hasOwnProperty(v)||Ho(r,o,v,null,l,A)}for(n in l)if(v=l[n],A=e[n],l.hasOwnProperty(n)&&(v!=null||A!=null))switch(n){case"value":J=v;break;case"defaultValue":w=v;break;case"multiple":b=v;default:v!==A&&Ho(r,o,n,v,l,A)}l=w,o=b,e=F,J!=null?yv(r,!!o,J,!1):!!e!==!!o&&(l!=null?yv(r,!!o,l,!0):yv(r,!!o,o?[]:"",!1));return;case"textarea":F=J=null;for(w in e)if(n=e[w],e.hasOwnProperty(w)&&n!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ho(r,o,w,null,l,n)}for(b in l)if(n=l[b],v=e[b],l.hasOwnProperty(b)&&(n!=null||v!=null))switch(b){case"value":J=n;break;case"defaultValue":F=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:n!==v&&Ho(r,o,b,n,l,v)}c8(r,J,F);return;case"option":for(var vr in e)if(J=e[vr],e.hasOwnProperty(vr)&&J!=null&&!l.hasOwnProperty(vr))switch(vr){case"selected":r.selected=!1;break;default:Ho(r,o,vr,null,l,J)}for(A in l)if(J=l[A],F=e[A],l.hasOwnProperty(A)&&J!==F&&(J!=null||F!=null))switch(A){case"selected":r.selected=J&&typeof J!=="function"&&typeof J!=="symbol";break;default:Ho(r,o,A,J,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Or in e)J=e[Or],e.hasOwnProperty(Or)&&J!=null&&!l.hasOwnProperty(Or)&&Ho(r,o,Or,null,l,J);for(H in l)if(J=l[H],F=e[H],l.hasOwnProperty(H)&&J!==F&&(J!=null||F!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(o+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ho(r,o,H,J,l,F)}return;default:if(m0(o)){for(var Xo in e)J=e[Xo],e.hasOwnProperty(Xo)&&J!==void 0&&!l.hasOwnProperty(Xo)&&x2(r,o,Xo,void 0,l,J);for(U in l)J=l[U],F=e[U],!l.hasOwnProperty(U)||J===F||J===void 0&&F===void 0||x2(r,o,U,J,l,F);return}}for(var oo in e)J=e[oo],e.hasOwnProperty(oo)&&J!=null&&!l.hasOwnProperty(oo)&&Ho(r,o,oo,null,l,J);for($ in l)J=l[$],F=e[$],!l.hasOwnProperty($)||J===F||J==null&&F==null||Ho(r,o,$,J,l,F)}function pm(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function I2(r){var o={};r=r.style;for(var e=0;e<r.length;e++){var l=r[e];o[l]=r.getPropertyValue(l)}return o}function jm(r,o,e){if(o!=null&&typeof o!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var l,n=l="",v;for(v in o)if(o.hasOwnProperty(v)){var b=o[v];b!=null&&typeof b!=="boolean"&&b!==""&&(v.indexOf("--")===0?(h0(b,v),l+=n+v+":"+(""+b).trim()):typeof b!=="number"||b===0||vq.has(v)?(h0(b,v),l+=n+v.replace(eq,"-$1").toLowerCase().replace(gq,"-ms-")+":"+(""+b).trim()):l+=n+v.replace(eq,"-$1").toLowerCase().replace(gq,"-ms-")+":"+b+"px",n=";")}l=l||null,o=r.getAttribute("style"),o!==l&&(l=ci(l),ci(o)!==l&&(e.style=I2(r)))}}function $g(r,o,e,l,n,v){if(n.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Oo(l,o),r===""+l)return}he(o,r,l,v)}function dm(r,o,e,l,n,v){if(n.delete(e),r=r.getAttribute(e),r===null){switch(typeof l){case"function":case"symbol":return}if(!l)return}else switch(typeof l){case"function":case"symbol":break;default:if(l)return}he(o,r,l,v)}function F2(r,o,e,l,n,v){if(n.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":return}else if(l!=null)switch(typeof l){case"function":case"symbol":break;default:if(Oo(l,e),r===""+l)return}he(o,r,l,v)}function sm(r,o,e,l,n,v){if(n.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(l))return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(!isNaN(l)&&(Oo(l,o),r===""+l))return}he(o,r,l,v)}function N2(r,o,e,l,n,v){if(n.delete(e),r=r.getAttribute(e),r===null)switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":return}else if(l!=null)switch(typeof l){case"function":case"symbol":case"boolean":break;default:if(Oo(l,o),e=A0(""+l),r===e)return}he(o,r,l,v)}function rA(r,o,e,l){for(var n={},v=new Set,b=r.attributes,w=0;w<b.length;w++)switch(b[w].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:v.add(b[w].name)}if(m0(o)){for(var A in e)if(e.hasOwnProperty(A)){var H=e[A];if(H!=null){if(gv.hasOwnProperty(A))typeof H!=="function"&&Jl(A,H);else if(e.suppressHydrationWarning!==!0)switch(A){case"children":typeof H!=="string"&&typeof H!=="number"||he("children",r.textContent,H,n);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,H=H?H.__html:void 0,H!=null&&(H=Em(r,H),he(A,b,H,n));continue;case"style":v.delete(A),jm(r,H,n);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":v.delete(A.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",A);continue;case"className":v.delete("class"),b=N8(r,"class",H),he("className",b,H,n);continue;default:l.context===qi&&o!=="svg"&&o!=="math"?v.delete(A.toLowerCase()):v.delete(A),b=N8(r,A,H),he(A,b,H,n)}}}}else for(H in e)if(e.hasOwnProperty(H)&&(A=e[H],A!=null)){if(gv.hasOwnProperty(H))typeof A!=="function"&&Jl(H,A);else if(e.suppressHydrationWarning!==!0)switch(H){case"children":typeof A!=="string"&&typeof A!=="number"||he("children",r.textContent,A,n);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":b=r.innerHTML,A=A?A.__html:void 0,A!=null&&(A=Em(r,A),b!==A&&(n[H]={__html:b}));continue;case"className":$g(r,H,"class",A,v,n);continue;case"tabIndex":$g(r,H,"tabindex",A,v,n);continue;case"style":v.delete(H),jm(r,A,n);continue;case"multiple":v.delete(H),he(H,r.multiple,A,n);continue;case"muted":v.delete(H),he(H,r.muted,A,n);continue;case"autoFocus":v.delete("autofocus"),he(H,r.autofocus,A,n);continue;case"data":if(o!=="object"){v.delete(H),b=r.getAttribute("data"),he(H,b,A,n);continue}case"src":case"href":if(!(A!==""||o==="a"&&H==="href"||o==="object"&&H==="data")){H==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',H,H):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',H,H);continue}N2(r,H,H,A,v,n);continue;case"action":case"formAction":if(b=r.getAttribute(H),typeof A==="function"){v.delete(H.toLowerCase()),H==="formAction"?(v.delete("name"),v.delete("formenctype"),v.delete("formmethod"),v.delete("formtarget")):(v.delete("enctype"),v.delete("method"),v.delete("target"));continue}else if(b===RJ){v.delete(H.toLowerCase()),he(H,"function",A,n);continue}N2(r,H,H.toLowerCase(),A,v,n);continue;case"xlinkHref":N2(r,H,"xlink:href",A,v,n);continue;case"contentEditable":F2(r,H,"contenteditable",A,v,n);continue;case"spellCheck":F2(r,H,"spellcheck",A,v,n);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":F2(r,H,H,A,v,n);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":dm(r,H,H.toLowerCase(),A,v,n);continue;case"capture":case"download":r:{w=r;var U=b=H,$=n;if(v.delete(U),w=w.getAttribute(U),w===null)switch(typeof A){case"undefined":case"function":case"symbol":break r;default:if(A===!1)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":break;case"boolean":if(A===!0&&w==="")break r;break;default:if(Oo(A,b),w===""+A)break r}he(b,w,A,$)}continue;case"cols":case"rows":case"size":case"span":r:{if(w=r,U=b=H,$=n,v.delete(U),w=w.getAttribute(U),w===null)switch(typeof A){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(A)||1>A)break r}else if(A!=null)switch(typeof A){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(A)||1>A)&&(Oo(A,b),w===""+A))break r}he(b,w,A,$)}continue;case"rowSpan":sm(r,H,"rowspan",A,v,n);continue;case"start":sm(r,H,H,A,v,n);continue;case"xHeight":$g(r,H,"x-height",A,v,n);continue;case"xlinkActuate":$g(r,H,"xlink:actuate",A,v,n);continue;case"xlinkArcrole":$g(r,H,"xlink:arcrole",A,v,n);continue;case"xlinkRole":$g(r,H,"xlink:role",A,v,n);continue;case"xlinkShow":$g(r,H,"xlink:show",A,v,n);continue;case"xlinkTitle":$g(r,H,"xlink:title",A,v,n);continue;case"xlinkType":$g(r,H,"xlink:type",A,v,n);continue;case"xmlBase":$g(r,H,"xml:base",A,v,n);continue;case"xmlLang":$g(r,H,"xml:lang",A,v,n);continue;case"xmlSpace":$g(r,H,"xml:space",A,v,n);continue;case"inert":A!==""||su[H]||(su[H]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",H)),dm(r,H,H,A,v,n);continue;default:if(!(2<H.length)||H[0]!=="o"&&H[0]!=="O"||H[1]!=="n"&&H[1]!=="N"){w=oP(H),b=!1,l.context===qi&&o!=="svg"&&o!=="math"?v.delete(w.toLowerCase()):(U=H.toLowerCase(),U=uu.hasOwnProperty(U)?uu[U]||null:null,U!==null&&U!==H&&(b=!0,v.delete(U)),v.delete(w));r:if(U=r,$=w,w=A,u0($))if(U.hasAttribute($))U=U.getAttribute($),Oo(w,$),w=U===""+w?w:U;else{switch(typeof w){case"function":case"symbol":break r;case"boolean":if(U=$.toLowerCase().slice(0,5),U!=="data-"&&U!=="aria-")break r}w=w===void 0?void 0:null}else w=void 0;b||he(H,w,A,n)}}}return 0<v.size&&e.suppressHydrationWarning!==!0&&nX(r,v,n),Object.keys(n).length===0?null:n}function tX(r,o){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+o+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+o+" "+r[r.length-1]}}function oA(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hX(){if(typeof performance.getEntriesByType==="function"){for(var r=0,o=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var n=e[l],v=n.transferSize,b=n.initiatorType,w=n.duration;if(v&&w&&oA(b)){b=0,w=n.responseEnd;for(l+=1;l<e.length;l++){var A=e[l],H=A.startTime;if(H>w)break;var{transferSize:U,initiatorType:$}=A;U&&oA($)&&(A=A.responseEnd,b+=U*(A<w?1:(w-H)/(A-H)))}if(--l,o+=8*(v+b)/(n.duration/1000),r++,10<r)break}}if(0<r)return o/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function _b(r){return r.nodeType===9?r:r.ownerDocument}function eA(r){switch(r){case Ot:return ct;case bu:return o5;default:return qi}}function gA(r,o){if(r===qi)switch(o){case"svg":return ct;case"math":return o5;default:return qi}return r===ct&&o==="foreignObject"?qi:r}function Z2(r,o){return r==="textarea"||r==="noscript"||typeof o.children==="string"||typeof o.children==="number"||typeof o.children==="bigint"||typeof o.dangerouslySetInnerHTML==="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}function bX(){var r=window.event;if(r&&r.type==="popstate"){if(r===H6)return!1;return H6=r,!0}return H6=null,!1}function k0(){var r=window.event;return r&&r!==Bh?r.type:null}function a0(){var r=window.event;return r&&r!==Bh?r.timeStamp:-1.1}function uX(r){setTimeout(function(){throw r})}function wX(r,o,e){switch(o){case"button":case"input":case"select":case"textarea":e.autoFocus&&r.focus();break;case"img":e.src?r.src=e.src:e.srcSet&&(r.srcset=e.srcSet)}}function PX(){}function OX(r,o,e,l){vX(r,o,e,l),r[Ze]=l}function lA(r){O0(r,"")}function mX(r,o,e){r.nodeValue=e}function iA(r){if(!r.__reactWarnedAboutChildrenConflict){var o=r[Ze]||null;if(o!==null){var e=Zr(r);e!==null&&(typeof o.children==="string"||typeof o.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,hr(e,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):o.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,hr(e,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function yi(r){return r==="head"}function AX(r,o){r.removeChild(o)}function qX(r,o){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(o)}function nA(r,o){var e=o,l=0;do{var n=e.nextSibling;if(r.removeChild(e),n&&n.nodeType===8)if(e=n.data,e===Zh||e===r5){if(l===0){r.removeChild(n),tt(o);return}l--}else if(e===Nh||e===An||e===Gv||e===Dt||e===Wv)l++;else if(e===GJ)D0(r.ownerDocument.documentElement);else if(e===YJ){e=r.ownerDocument.head,D0(e);for(var v=e.firstChild;v;){var{nextSibling:b,nodeName:w}=v;v[p0]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||e.removeChild(v),v=b}}else e===XJ&&D0(r.ownerDocument.body);e=n}while(e);tt(o)}function vA(r,o){var e=r;r=0;do{var l=e.nextSibling;if(e.nodeType===1?o?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(o?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e===Zh)if(r===0)break;else r--;else e!==Nh&&e!==An&&e!==Gv&&e!==Dt||r++;e=l}while(e)}function HX(r){vA(r,!0)}function MX(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function RX(r){r.nodeValue=""}function WX(r){vA(r,!1)}function GX(r,o){o=o[JJ],o=o!==void 0&&o!==null&&o.hasOwnProperty("display")?o.display:null,r.style.display=o==null||typeof o==="boolean"?"":(""+o).trim()}function XX(r,o){r.nodeValue=o}function B2(r){var o=r.firstChild;o&&o.nodeType===10&&(o=o.nextSibling);for(;o;){var e=o;switch(o=o.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":B2(e),br(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}r.removeChild(e)}}function YX(r,o,e,l){for(;r.nodeType===1;){var n=e;if(r.nodeName.toLowerCase()!==o.toLowerCase()){if(!l&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!l)if(o==="input"&&r.type==="hidden"){Oo(n.name,"name");var v=n.name==null?null:""+n.name;if(n.type==="hidden"&&r.getAttribute("name")===v)return r}else return r;else if(!r[p0])switch(o){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(v=r.getAttribute("rel"),v==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(v!==n.rel||r.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||r.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||r.getAttribute("title")!==(n.title==null?null:n.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(v=r.getAttribute("src"),(v!==(n.src==null?null:n.src)||r.getAttribute("type")!==(n.type==null?null:n.type)||r.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&v&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=ug(r.nextSibling),r===null)break}return null}function JX(r,o,e){if(o==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!e)return null;if(r=ug(r.nextSibling),r===null)return null}return r}function tA(r,o){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o)return null;if(r=ug(r.nextSibling),r===null)return null}return r}function C2(r){return r.data===An||r.data===Gv}function S2(r){return r.data===Dt||r.data===An&&r.ownerDocument.readyState!==jH}function zX(r,o){var e=r.ownerDocument;if(r.data===Gv)r._reactRetry=o;else if(r.data!==An||e.readyState!==jH)o();else{var l=function(){o(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),r._reactRetry=l}}function ug(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o===Nh||o===Dt||o===An||o===Gv||o===Wv||o===m6||o===pH)break;if(o===Zh||o===r5)return null}}return r}function hA(r){if(r.nodeType===1){for(var o=r.nodeName.toLowerCase(),e={},l=r.attributes,n=0;n<l.length;n++){var v=l[n];e[pm(v.name)]=v.name.toLowerCase()==="style"?I2(r):v.value}return{type:o,props:e}}return r.nodeType===8?r.data===Wv?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function bA(r,o,e){return e===null||e[WJ]!==!0?(r.nodeValue===o?r=null:(o=ci(o),r=ci(r.nodeValue)===o?null:r.nodeValue),r):null}function T2(r){r=r.nextSibling;for(var o=0;r;){if(r.nodeType===8){var e=r.data;if(e===Zh||e===r5){if(o===0)return ug(r.nextSibling);o--}else e!==Nh&&e!==Dt&&e!==An&&e!==Gv&&e!==Wv||o++}r=r.nextSibling}return null}function uA(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var e=r.data;if(e===Nh||e===Dt||e===An||e===Gv||e===Wv){if(o===0)return r;o--}else e!==Zh&&e!==r5||o++}r=r.previousSibling}return null}function QX(r){tt(r)}function KX(r){tt(r)}function UX(r){tt(r)}function wA(r,o,e,l,n){switch(n&&j5(r,l.ancestorInfo),o=_b(e),r){case"html":if(r=o.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=o.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=o.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function $X(r,o,e,l){if(!e[fi]&&Zr(e)){var n=e.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",n,n,n)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Me(e,r,o),e[Re]=l,e[Ze]=o}function D0(r){for(var o=r.attributes;o.length;)r.removeAttributeNode(o[0]);br(r)}function Eb(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function PA(r,o,e){var l=yt;if(l&&typeof o==="string"&&o){var n=Ug(o);n='link[rel="'+r+'"][href="'+n+'"]',typeof e==="string"&&(n+='[crossorigin="'+e+'"]'),gM.has(n)||(gM.add(n),r={rel:r,crossOrigin:e,href:o},l.querySelector(n)===null&&(o=l.createElement("link"),Me(o,"link",r),zr(o),l.head.appendChild(o)))}}function OA(r,o,e,l){var n=(n=_i.current)?Eb(n):null;if(!n)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof e.precedence==="string"&&typeof e.href==="string"?(e=nt(e.href),o=lo(n).hoistableStyles,l=o.get(e),l||(l={type:"style",instance:null,count:0,state:null},o.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href==="string"&&typeof e.precedence==="string"){r=nt(e.href);var v=lo(n).hoistableStyles,b=v.get(r);if(!b&&(n=n.ownerDocument||n,b={type:"stylesheet",instance:null,count:0,state:{loading:Yv,preload:null}},v.set(r,b),(v=n.querySelector(c0(r)))&&!v._p&&(b.instance=v,b.state.loading=Ch|kg),!ag.has(r))){var w={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy};ag.set(r,w),v||LX(n,r,w,b.state)}if(o&&l===null)throw e=`

  - `+fb(o)+`
  + `+fb(e),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+e);return b}if(o&&l!==null)throw e=`

  - `+fb(o)+`
  + `+fb(e),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+e);return null;case"script":return o=e.async,e=e.src,typeof e==="string"&&o&&typeof o!=="function"&&typeof o!=="symbol"?(e=vt(e),o=lo(n).hoistableScripts,l=o.get(e),l||(l={type:"script",instance:null,count:0,state:null},o.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function fb(r){var o=0,e="<link";return typeof r.rel==="string"?(o++,e+=' rel="'+r.rel+'"'):_g.call(r,"rel")&&(o++,e+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(o++,e+=' href="'+r.href+'"'):_g.call(r,"href")&&(o++,e+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(o++,e+=' precedence="'+r.precedence+'"'):_g.call(r,"precedence")&&(o++,e+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>o&&(e+=" ..."),e+" />"}function nt(r){return'href="'+Ug(r)+'"'}function c0(r){return'link[rel="stylesheet"]['+r+"]"}function mA(r){return fr({},r,{"data-precedence":r.precedence,precedence:null})}function LX(r,o,e,l){r.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=Ch:(o=r.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=Ch}),o.addEventListener("error",function(){return l.loading|=oM}),Me(o,"link",e),zr(o),r.head.appendChild(o))}function vt(r){return'[src="'+Ug(r)+'"]'}function y0(r){return"script[async]"+r}function AA(r,o,e){if(o.count++,o.instance===null)switch(o.type){case"style":var l=r.querySelector('style[data-href~="'+Ug(e.href)+'"]');if(l)return o.instance=l,zr(l),l;var n=fr({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(r.ownerDocument||r).createElement("style"),zr(l),Me(l,"style",n),pb(l,e.precedence,r),o.instance=l;case"stylesheet":n=nt(e.href);var v=r.querySelector(c0(n));if(v)return o.state.loading|=kg,o.instance=v,zr(v),v;l=mA(e),(n=ag.get(n))&&k2(l,n),v=(r.ownerDocument||r).createElement("link"),zr(v);var b=v;return b._p=new Promise(function(w,A){b.onload=w,b.onerror=A}),Me(v,"link",l),o.state.loading|=kg,pb(v,e.precedence,r),o.instance=v;case"script":if(v=vt(e.src),n=r.querySelector(y0(v)))return o.instance=n,zr(n),n;if(l=e,n=ag.get(v))l=fr({},e),a2(l,n);return r=r.ownerDocument||r,n=r.createElement("script"),zr(n),Me(n,"link",l),r.head.appendChild(n),o.instance=n;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+o.type+'". this is a bug in React.')}else o.type==="stylesheet"&&(o.state.loading&kg)===Yv&&(l=o.instance,o.state.loading|=kg,pb(l,e.precedence,r));return o.instance}function pb(r,o,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,v=n,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===o)v=w;else if(v!==n)break}v?v.parentNode.insertBefore(r,v.nextSibling):(o=e.nodeType===9?e.head:e,o.insertBefore(r,o.firstChild))}function k2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.title==null&&(r.title=o.title)}function a2(r,o){r.crossOrigin==null&&(r.crossOrigin=o.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=o.referrerPolicy),r.integrity==null&&(r.integrity=o.integrity)}function qA(r,o,e){if(e5===null){var l=new Map,n=e5=new Map;n.set(e,l)}else n=e5,l=n.get(e),l||(l=new Map,n.set(e,l));if(l.has(r))return l;l.set(r,null),e=e.getElementsByTagName(r);for(n=0;n<e.length;n++){var v=e[n];if(!(v[p0]||v[Re]||r==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!==Ot){var b=v.getAttribute(o)||"";b=r+b;var w=l.get(b);w?w.push(v):l.set(b,[v])}}return l}function HA(r,o,e){r=r.ownerDocument||r,r.head.insertBefore(e,o==="title"?r.querySelector("head > title"):null)}function xX(r,o,e){var l=!e.ancestorInfo.containerTagInScope;if(e.context===ct||o.itemProp!=null)return!l||o.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof o.precedence!=="string"||typeof o.href!=="string"||o.href===""){l&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""||o.onLoad||o.onError){if(o.rel==="stylesheet"&&typeof o.precedence==="string"){r=o.href;var{onError:n,disabled:v}=o;e=[],o.onLoad&&e.push("`onLoad`"),n&&e.push("`onError`"),v!=null&&e.push("`disabled`"),n=tX(e,"and"),n+=e.length===1?" prop":" props",v=e.length===1?"an "+n:"the "+n,e.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,v,n)}l&&(typeof o.rel!=="string"||typeof o.href!=="string"||o.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(o.onError||o.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(o.rel){case"stylesheet":return r=o.precedence,o=o.disabled,typeof r!=="string"&&l&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&o==null;default:return!0}case"script":if(r=o.async&&typeof o.async!=="function"&&typeof o.async!=="symbol",!r||o.onLoad||o.onError||!o.src||typeof o.src!=="string"){l&&(r?o.onLoad||o.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":l&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function MA(r){return r.type==="stylesheet"&&(r.state.loading&eM)===Yv?!1:!0}function IX(r,o,e,l){if(e.type==="stylesheet"&&(typeof l.media!=="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&kg)===Yv){if(e.instance===null){var n=nt(l.href),v=o.querySelector(c0(n));if(v){o=v._p,o!==null&&typeof o==="object"&&typeof o.then==="function"&&(r.count++,r=jb.bind(r),o.then(r,r)),e.state.loading|=kg,e.instance=v,zr(v);return}v=o.ownerDocument||o,l=mA(l),(n=ag.get(n))&&k2(l,n),v=v.createElement("link"),zr(v);var b=v;b._p=new Promise(function(w,A){b.onload=w,b.onerror=A}),Me(v,"link",l),e.instance=v}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,o),(o=e.state.preload)&&(e.state.loading&eM)===Yv&&(r.count++,e=jb.bind(r),o.addEventListener("load",e),o.addEventListener("error",e))}}function FX(r,o){return r.stylesheets&&r.count===0&&db(r,r.stylesheets),0<r.count||0<r.imgCount?function(e){var l=setTimeout(function(){if(r.stylesheets&&db(r,r.stylesheets),r.unsuspend){var v=r.unsuspend;r.unsuspend=null,v()}},KJ+o);0<r.imgBytes&&R6===0&&(R6=125*hX()*$J);var n=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&db(r,r.stylesheets),r.unsuspend)){var v=r.unsuspend;r.unsuspend=null,v()}},(r.imgBytes>R6?50:UJ)+o);return r.unsuspend=e,function(){r.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function jb(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)db(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function db(r,o){r.stylesheets=null,r.unsuspend!==null&&(r.count++,g5=new Map,o.forEach(NX,r),g5=null,jb.call(r))}function NX(r,o){if(!(o.state.loading&kg)){var e=g5.get(r);if(e)var l=e.get(W6);else{e=new Map,g5.set(r,e);for(var n=r.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<n.length;v++){var b=n[v];if(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")e.set(b.dataset.precedence,b),l=b}l&&e.set(W6,l)}n=o.instance,b=n.getAttribute("data-precedence"),v=e.get(b)||l,v===l&&e.set(W6,n),e.set(b,n),this.count++,l=jb.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),v?v.parentNode.insertBefore(n,v.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(n,r.firstChild)),o.state.loading|=kg}}function ZX(r,o,e,l,n,v,b,w,A){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Xv,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cv(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cv(0),this.hiddenUpdates=cv(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=v,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(o=0;31>o;o++)r.push(new Set);this._debugRootType=e?"hydrateRoot()":"createRoot()"}function RA(r,o,e,l,n,v,b,w,A,H,U,$){return r=new ZX(r,o,e,b,A,H,U,$,w),o=oJ,v===!0&&(o|=Le|fg),o|=kr,v=G(3,null,null,o),r.current=v,v.stateNode=r,o=Aw(),pn(o),r.pooledCache=o,pn(o),v.memoizedState={element:l,isDehydrated:e,cache:o},Ww(v),r}function WA(r){if(!r)return si;return r=si,r}function D2(r,o,e,l,n,v){if($e&&typeof $e.onScheduleFiberRoot==="function")try{$e.onScheduleFiberRoot(wt,l,e)}catch(b){Ul||(Ul=!0,console.error("React instrumentation encountered an error: %o",b))}n=WA(n),l.context===null?l.context=n:l.pendingContext=n,Kl&&Pg!==null&&!vM&&(vM=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,N(Pg)||"Unknown")),l=Ci(o),l.payload={element:e},v=v===void 0?null:v,v!==null&&(typeof v!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",v),l.callback=v),e=Si(r,l,o),e!==null&&(Pl(o,"root.render()",null),Bo(e,r,o),J0(e,r,o))}function GA(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var e=r.retryLane;r.retryLane=e!==0&&e<o?e:o}}function c2(r,o){GA(r,o),(r=r.alternate)&&GA(r,o)}function XA(r){if(r.tag===13||r.tag===31){var o=Ue(r,67108864);o!==null&&Bo(o,r,67108864),c2(r,67108864)}}function YA(r){if(r.tag===13||r.tag===31){var o=bg(r);o=kn(o);var e=Ue(r,o);e!==null&&Bo(e,r,o),c2(r,o)}}function BX(){return Pg}function CX(r,o,e,l){var n=C.T;C.T=null;var v=ho.p;try{ho.p=Og,y2(r,o,e,l)}finally{ho.p=v,C.T=n}}function SX(r,o,e,l){var n=C.T;C.T=null;var v=ho.p;try{ho.p=Eg,y2(r,o,e,l)}finally{ho.p=v,C.T=n}}function y2(r,o,e,l){if(i5){var n=V2(l);if(n===null)$2(r,o,l,n5,e),zA(r,l);else if(TX(n,r,o,e,l))l.stopPropagation();else if(zA(r,l),o&4&&-1<xJ.indexOf(r)){for(;n!==null;){var v=Zr(n);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var b=hl(v.pendingLanes);if(b!==0){var w=v;w.pendingLanes|=2;for(w.entangledLanes|=2;b;){var A=1<<31-Ne(b);w.entanglements[1]|=A,b&=~A}Yl(v),(go&(ve|Hg))===Pe&&(au=be()+NH,S0(0,!1))}}break;case 31:case 13:w=Ue(v,2),w!==null&&Bo(w,v,2),gt(),c2(v,2)}if(v=V2(l),v===null&&$2(r,o,l,n5,e),v===n)break;n=v}n!==null&&l.stopPropagation()}else $2(r,o,l,null,e)}}function V2(r){return r=d5(r),_2(r)}function _2(r){if(n5=null,r=Mr(r),r!==null){var o=j(r);if(o===null)r=null;else{var e=o.tag;if(e===13){if(r=Pr(o),r!==null)return r;r=null}else if(e===31){if(r=lr(o),r!==null)return r;r=null}else if(e===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null)}}return n5=r,null}function JA(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Og;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Eg;case"message":switch(fX()){case n4:return Og;case v4:return Eg;case ut:case pX:return Ll;case t4:return tu;default:return Ll}default:return Ll}}function zA(r,o){switch(r){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Th.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":kh.delete(o.pointerId)}}function V0(r,o,e,l,n,v){if(r===null||r.nativeEvent!==v)return r={blockedOn:o,domEventName:e,eventSystemFlags:l,nativeEvent:v,targetContainers:[n]},o!==null&&(o=Zr(o),o!==null&&XA(o)),r;return r.eventSystemFlags|=l,o=r.targetContainers,n!==null&&o.indexOf(n)===-1&&o.push(n),r}function TX(r,o,e,l,n){switch(o){case"focusin":return qn=V0(qn,r,o,e,l,n),!0;case"dragenter":return Hn=V0(Hn,r,o,e,l,n),!0;case"mouseover":return Mn=V0(Mn,r,o,e,l,n),!0;case"pointerover":var v=n.pointerId;return Th.set(v,V0(Th.get(v)||null,r,o,e,l,n)),!0;case"gotpointercapture":return v=n.pointerId,kh.set(v,V0(kh.get(v)||null,r,o,e,l,n)),!0}return!1}function QA(r){var o=Mr(r.target);if(o!==null){var e=j(o);if(e!==null){if(o=e.tag,o===13){if(o=Pr(e),o!==null){r.blockedOn=o,er(r.priority,function(){YA(e)});return}}else if(o===31){if(o=lr(e),o!==null){r.blockedOn=o,er(r.priority,function(){YA(e)});return}}else if(o===3&&e.stateNode.current.memoizedState.isDehydrated){r.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}r.blockedOn=null}function sb(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var e=V2(r.nativeEvent);if(e===null){e=r.nativeEvent;var l=new e.constructor(e.type,e),n=l;j0!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),j0=n,e.target.dispatchEvent(l),j0===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),j0=null}else return o=Zr(e),o!==null&&XA(o),r.blockedOn=e,!1;o.shift()}return!0}function KA(r,o,e){sb(r)&&e.delete(o)}function kX(){G6=!1,qn!==null&&sb(qn)&&(qn=null),Hn!==null&&sb(Hn)&&(Hn=null),Mn!==null&&sb(Mn)&&(Mn=null),Th.forEach(KA),kh.forEach(KA)}function ru(r,o){r.blockedOn===o&&(r.blockedOn=null,G6||(G6=!0,no.unstable_scheduleCallback(no.unstable_NormalPriority,kX)))}function UA(r){v5!==r&&(v5=r,no.unstable_scheduleCallback(no.unstable_NormalPriority,function(){v5===r&&(v5=null);for(var o=0;o<r.length;o+=3){var e=r[o],l=r[o+1],n=r[o+2];if(typeof l!=="function")if(_2(l||e)===null)continue;else break;var v=Zr(e);v!==null&&(r.splice(o,3),o-=3,e={pending:!0,data:n,method:e.method,action:l},Object.freeze(e),_w(v,e,l,n))}}))}function tt(r){function o(A){return ru(A,r)}qn!==null&&ru(qn,r),Hn!==null&&ru(Hn,r),Mn!==null&&ru(Mn,r),Th.forEach(o),kh.forEach(o);for(var e=0;e<Rn.length;e++){var l=Rn[e];l.blockedOn===r&&(l.blockedOn=null)}for(;0<Rn.length&&(e=Rn[0],e.blockedOn===null);)QA(e),e.blockedOn===null&&Rn.shift();if(e=(r.ownerDocument||r).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var n=e[l],v=e[l+1],b=n[Ze]||null;if(typeof v==="function")b||UA(e);else if(b){var w=null;if(v&&v.hasAttribute("formAction")){if(n=v,b=v[Ze]||null)w=b.formAction;else if(_2(n)!==null)continue}else w=b.action;typeof w==="function"?e[l+1]=w:(e.splice(l,3),l-=3),UA(e)}}}function $A(){function r(v){v.canIntercept&&v.info==="react-transition"&&v.intercept({handler:function(){return new Promise(function(b){return n=b})},focusReset:"manual",scroll:"manual"})}function o(){n!==null&&(n(),n=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var v=navigation.currentEntry;v&&v.url!=null&&navigation.navigate(v.url,{state:v.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var l=!1,n=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",o),navigation.addEventListener("navigateerror",o),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",o),navigation.removeEventListener("navigateerror",o),n!==null&&(n(),n=null)}}}function E2(r){this._internalRoot=r}function ou(r){this._internalRoot=r}function LA(r){r[fi]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var fr=Object.assign,aX=Symbol.for("react.element"),zl=Symbol.for("react.transitional.element"),ht=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),f2=Symbol.for("react.profiler"),p2=Symbol.for("react.consumer"),Ql=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),j2=Symbol.for("react.suspense"),d2=Symbol.for("react.suspense_list"),gu=Symbol.for("react.memo"),wg=Symbol.for("react.lazy"),s2=Symbol.for("react.activity"),DX=Symbol.for("react.memo_cache_sentinel"),xA=Symbol.iterator,cX=Symbol.for("react.client.reference"),ie=Array.isArray,C=Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ho=J6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yX=Object.freeze({pending:!1,data:null,method:null,action:null}),r4=[],o4=[],gi=-1,Vi=Rr(null),E0=Rr(null),_i=Rr(null),lu=Rr(null),f0=0,IA,FA,NA,ZA,BA,CA,SA;c.__reactDisabledLog=!0;var e4,TA,g4=!1,l4=new(typeof WeakMap==="function"?WeakMap:Map),Pg=null,Kl=!1,_g=Object.prototype.hasOwnProperty,i4=no.unstable_scheduleCallback,VX=no.unstable_cancelCallback,_X=no.unstable_shouldYield,EX=no.unstable_requestPaint,be=no.unstable_now,fX=no.unstable_getCurrentPriorityLevel,n4=no.unstable_ImmediatePriority,v4=no.unstable_UserBlockingPriority,ut=no.unstable_NormalPriority,pX=no.unstable_LowPriority,t4=no.unstable_IdlePriority,jX=no.log,dX=no.unstable_setDisableYieldValue,wt=null,$e=null,Ul=!1,$l=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",Ne=Math.clz32?Math.clz32:V1,sX=Math.log,rY=Math.LN2,iu=256,nu=262144,vu=4194304,Og=2,Eg=8,Ll=32,tu=268435456,Ei=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ei,Ze="__reactProps$"+Ei,fi="__reactContainer$"+Ei,h4="__reactEvents$"+Ei,oY="__reactListeners$"+Ei,eY="__reactHandles$"+Ei,kA="__reactResources$"+Ei,p0="__reactMarker$"+Ei,aA=new Set,gv={},b4={},gY={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},lY=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),DA={},cA={},iY=/[\n"\\]/g,yA=!1,VA=!1,_A=!1,EA=!1,fA=!1,pA=!1,jA=["value","defaultValue"],dA=!1,sA=/["'&<>\n\t]|^\s|\s$/,nY="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),rq="applet caption html table td th marquee object template foreignObject desc title".split(" "),vY=rq.concat(["button"]),tY="dd dt li option optgroup p rp rt".split(" "),oq={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},hu={},u4={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},eq=/([A-Z])/g,gq=/^ms-/,hY=/^(?:webkit|moz|o)[A-Z]/,bY=/^-ms-/,uY=/-(.)/g,lq=/;\s*$/,Pt={},w4={},iq=!1,nq=!1,vq=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),bu="http://www.w3.org/1998/Math/MathML",Ot="http://www.w3.org/2000/svg",wY=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uu={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},tq={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},mt={},PY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),OY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hq=!1,Be={},bq=/^on./,mY=/^on[^A-Z]/,AY=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qY=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),HY=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,j0=null,At=null,qt=null,P4=!1,xl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O4=!1;if(xl)try{var d0={};Object.defineProperty(d0,"passive",{get:function(){O4=!0}}),window.addEventListener("test",d0,d0),window.removeEventListener("test",d0,d0)}catch(r){O4=!1}var pi=null,m4=null,wu=null,lv={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=_e(lv),s0=fr({},lv,{view:0,detail:0}),MY=_e(s0),A4,q4,rh,Ou=fr({},s0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:s5,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==rh&&(rh&&r.type==="mousemove"?(A4=r.screenX-rh.screenX,q4=r.screenY-rh.screenY):q4=A4=0,rh=r),A4},movementY:function(r){return"movementY"in r?r.movementY:q4}}),uq=_e(Ou),RY=fr({},Ou,{dataTransfer:0}),WY=_e(RY),GY=fr({},s0,{relatedTarget:0}),H4=_e(GY),XY=fr({},lv,{animationName:0,elapsedTime:0,pseudoElement:0}),YY=_e(XY),JY=fr({},lv,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),zY=_e(JY),QY=fr({},lv,{data:0}),wq=_e(QY),KY=wq,UY={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$Y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LY={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},xY=fr({},s0,{key:function(r){if(r.key){var o=UY[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=s1(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$Y[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:s5,charCode:function(r){return r.type==="keypress"?s1(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?s1(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),IY=_e(xY),FY=fr({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pq=_e(FY),NY=fr({},s0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:s5}),ZY=_e(NY),BY=fr({},lv,{propertyName:0,elapsedTime:0,pseudoElement:0}),CY=_e(BY),SY=fr({},Ou,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),TY=_e(SY),kY=fr({},lv,{newState:0,oldState:0}),aY=_e(kY),DY=[9,13,27,32],Oq=229,M4=xl&&"CompositionEvent"in window,oh=null;xl&&"documentMode"in document&&(oh=document.documentMode);var cY=xl&&"TextEvent"in window&&!oh,mq=xl&&(!M4||oh&&8<oh&&11>=oh),Aq=32,qq=String.fromCharCode(Aq),Hq=!1,Ht=!1,yY={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},eh=null,gh=null,Mq=!1;xl&&(Mq=wG("input")&&(!document.documentMode||9<document.documentMode));var Ce=typeof Object.is==="function"?Object.is:HG,VY=xl&&"documentMode"in document&&11>=document.documentMode,Mt=null,R4=null,lh=null,W4=!1,Rt={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},G4={},Rq={};xl&&(Rq=document.createElement("div").style,("AnimationEvent"in window)||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),("TransitionEvent"in window)||delete Rt.transitionend.transition);var Wq=cn("animationend"),Gq=cn("animationiteration"),Xq=cn("animationstart"),_Y=cn("transitionrun"),EY=cn("transitionstart"),fY=cn("transitioncancel"),Yq=cn("transitionend"),Jq=new Map,X4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");X4.push("scrollEnd");var zq=0;if(typeof performance==="object"&&typeof performance.now==="function")var pY=performance,Qq=function(){return pY.now()};else{var jY=Date;Qq=function(){return jY.now()}}var Y4=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(o))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},dY="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",mu=0,J4=1,z4=2,Q4=3,Au="– ",qu="+ ",Kq="  ",zo=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",Lg="Components ⚛",pr="Scheduler ⚛",jr="Blocking",ji=!1,li={color:"primary",properties:null,tooltipText:"",track:Lg},di={start:-0,end:-0,detail:{devtools:li}},sY=["Changed Props",""],Uq="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",rJ=["Changed Props",Uq],ih=1,ii=2,xg=[],Wt=0,K4=0,si={};Object.freeze(si);var Ig=null,Gt=null,Lr=0,oJ=1,kr=2,Le=8,fg=16,eJ=32,$q=!1;try{var Lq=Object.preventExtensions({})}catch(r){$q=!0}var U4=new WeakMap,Xt=[],Yt=0,Hu=null,nh=0,Fg=[],Ng=0,iv=null,ni=1,vi="",We=null,Qo=null,sr=!1,Il=!1,mg=null,rn=null,Zg=!1,$4=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),L4=Rr(null),x4=Rr(null),xq={},Mu=null,Jt=null,zt=!1,gJ=typeof AbortController<"u"?AbortController:function(){var r=[],o=this.signal={aborted:!1,addEventListener:function(e,l){r.push(l)}};this.abort=function(){o.aborted=!0,r.forEach(function(e){return e()})}},lJ=no.unstable_scheduleCallback,iJ=no.unstable_NormalPriority,po={$$typeof:Ql,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},jo=no.unstable_now,Ru=console.createTask?console.createTask:function(){return null},vh=1,Wu=2,ue=-0,on=-0,ti=-0,hi=null,Se=-1.1,nv=-0,Fo=-0,Qr=-1.1,Ur=-1.1,xo=null,Co=!1,en=-0,Fl=-1.1,th=null,gn=0,I4=null,F4=null,vv=-1.1,hh=null,Qt=-1.1,Gu=-1.1,Nl=-0,bi=-1.1,Bg=-1.1,N4=0,bh=null,Iq=null,Fq=null,ln=-1.1,tv=null,nn=-1.1,Xu=-1.1,Nq=-0,Zq=-0,Yu=0,ui=null,Bq=0,uh=-1.1,Ju=!1,zu=!1,wh=null,Z4=0,hv=0,Kt=null,Cq=C.S;C.S=function(r,o){if(IH=be(),typeof o==="object"&&o!==null&&typeof o.then==="function"){if(0>bi&&0>Bg){bi=jo();var e=a0(),l=k0();if(e!==nn||l!==tv)nn=-1.1;ln=e,tv=l}JG(r,o)}Cq!==null&&Cq(r,o)};var bv=Rr(null),pg={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},Ph=[],Oh=[],mh=[],Ah=[],qh=[],Hh=[],uv=new Set;pg.recordUnsafeLifecycleWarnings=function(r,o){uv.has(r.type)||(typeof o.componentWillMount==="function"&&o.componentWillMount.__suppressDeprecationWarning!==!0&&Ph.push(r),r.mode&Le&&typeof o.UNSAFE_componentWillMount==="function"&&Oh.push(r),typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&mh.push(r),r.mode&Le&&typeof o.UNSAFE_componentWillReceiveProps==="function"&&Ah.push(r),typeof o.componentWillUpdate==="function"&&o.componentWillUpdate.__suppressDeprecationWarning!==!0&&qh.push(r),r.mode&Le&&typeof o.UNSAFE_componentWillUpdate==="function"&&Hh.push(r))},pg.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<Ph.length&&(Ph.forEach(function(w){r.add(N(w)||"Component"),uv.add(w.type)}),Ph=[]);var o=new Set;0<Oh.length&&(Oh.forEach(function(w){o.add(N(w)||"Component"),uv.add(w.type)}),Oh=[]);var e=new Set;0<mh.length&&(mh.forEach(function(w){e.add(N(w)||"Component"),uv.add(w.type)}),mh=[]);var l=new Set;0<Ah.length&&(Ah.forEach(function(w){l.add(N(w)||"Component"),uv.add(w.type)}),Ah=[]);var n=new Set;0<qh.length&&(qh.forEach(function(w){n.add(N(w)||"Component"),uv.add(w.type)}),qh=[]);var v=new Set;if(0<Hh.length&&(Hh.forEach(function(w){v.add(N(w)||"Component"),uv.add(w.type)}),Hh=[]),0<o.size){var b=q(o);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,b)}0<l.size&&(b=q(l),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,b)),0<v.size&&(b=q(v),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,b)),0<r.size&&(b=q(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<e.size&&(b=q(e),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b)),0<n.size&&(b=q(n),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,b))};var Qu=new Map,Sq=new Set;pg.recordLegacyContextWarning=function(r,o){var e=null;for(var l=r;l!==null;)l.mode&Le&&(e=l),l=l.return;e===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!Sq.has(r.type)&&(l=Qu.get(e),r.type.contextTypes!=null||r.type.childContextTypes!=null||o!==null&&typeof o.getChildContext==="function")&&(l===void 0&&(l=[],Qu.set(e,l)),l.push(r))},pg.flushLegacyContextWarning=function(){Qu.forEach(function(r){if(r.length!==0){var o=r[0],e=new Set;r.forEach(function(n){e.add(N(n)||"Component"),Sq.add(n.type)});var l=q(e);hr(o,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,l)})}})},pg.discardPendingWarnings=function(){Ph=[],Oh=[],mh=[],Ah=[],qh=[],Hh=[],Qu=new Map};var Tq={react_stack_bottom_frame:function(r,o,e){var l=Kl;Kl=!0;try{return r(o,e)}finally{Kl=l}}},B4=Tq.react_stack_bottom_frame.bind(Tq),kq={react_stack_bottom_frame:function(r){var o=Kl;Kl=!0;try{return r.render()}finally{Kl=o}}},aq=kq.react_stack_bottom_frame.bind(kq),Dq={react_stack_bottom_frame:function(r,o){try{o.componentDidMount()}catch(e){to(r,r.return,e)}}},C4=Dq.react_stack_bottom_frame.bind(Dq),cq={react_stack_bottom_frame:function(r,o,e,l,n){try{o.componentDidUpdate(e,l,n)}catch(v){to(r,r.return,v)}}},yq=cq.react_stack_bottom_frame.bind(cq),Vq={react_stack_bottom_frame:function(r,o){var e=o.stack;r.componentDidCatch(o.value,{componentStack:e!==null?e:""})}},nJ=Vq.react_stack_bottom_frame.bind(Vq),_q={react_stack_bottom_frame:function(r,o,e){try{e.componentWillUnmount()}catch(l){to(r,o,l)}}},Eq=_q.react_stack_bottom_frame.bind(_q),fq={react_stack_bottom_frame:function(r){var o=r.create;return r=r.inst,o=o(),r.destroy=o}},vJ=fq.react_stack_bottom_frame.bind(fq),pq={react_stack_bottom_frame:function(r,o,e){try{e()}catch(l){to(r,o,l)}}},tJ=pq.react_stack_bottom_frame.bind(pq),jq={react_stack_bottom_frame:function(r){var o=r._init;return o(r._payload)}},hJ=jq.react_stack_bottom_frame.bind(jq),Ut=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),S4=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Ku=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Uu={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},wv=null,Mh=!1,$t=null,Rh=0,ar=null,T4,dq=T4=!1,sq={},rH={},oH={};W=function(r,o,e){if(e!==null&&typeof e==="object"&&e._store&&(!e._store.validated&&e.key==null||e._store.validated===2)){if(typeof e._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=1;var l=N(r),n=l||"null";if(!sq[n]){sq[n]=!0,e=e._owner,r=r._debugOwner;var v="";r&&typeof r.tag==="number"&&(n=N(r))&&(v=`

Check the render method of \``+n+"`."),v||l&&(v=`

Check the top-level render call using <`+l+">.");var b="";e!=null&&r!==e&&(l=null,typeof e.tag==="number"?l=N(e):typeof e.name==="string"&&(l=e.name),l&&(b=" It was passed a child from "+l+".")),hr(o,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',v,b)})}}};var Pv=_P(!0),eH=_P(!1),gH=0,lH=1,iH=2,k4=3,vn=!1,nH=!1,a4=null,D4=!1,Lt=Rr(null),$u=Rr(0),Ag=Rr(null),Cg=null,xt=1,Wh=2,co=Rr(0),Lu=0,Sg=1,Te=2,qg=4,ke=8,It,vH=new Set,tH=new Set,c4=new Set,hH=new Set,wi=0,Ir=null,Mo=null,so=null,xu=!1,Ft=!1,Ov=!1,Iu=0,Gh=0,Pi=null,bJ=0,uJ=25,B=null,Tg=null,Oi=-1,Xh=!1,Yh={readContext:Lo,use:ai,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To};Yh.useEffectEvent=To;var y4=null,bH=null,V4=null,uH=null,Zl=null,jg=null,Fu=null;y4={readContext:function(r){return Lo(r)},use:ai,useCallback:function(r,o){return B="useCallback",Er(),pv(o),Dw(r,o)},useContext:function(r){return B="useContext",Er(),Lo(r)},useEffect:function(r,o){return B="useEffect",Er(),pv(o),Qb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",Er(),pv(e),aw(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",Er(),pv(o),dn(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",Er(),pv(o),kw(r,o)},useMemo:function(r,o){B="useMemo",Er(),pv(o);var e=C.H;C.H=Zl;try{return cw(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",Er();var l=C.H;C.H=Zl;try{return xw(r,o,e)}finally{C.H=l}},useRef:function(r){return B="useRef",Er(),Sw(r)},useState:function(r){B="useState",Er();var o=C.H;C.H=Zl;try{return Zw(r)}finally{C.H=o}},useDebugValue:function(){B="useDebugValue",Er()},useDeferredValue:function(r,o){return B="useDeferredValue",Er(),yw(r,o)},useTransition:function(){return B="useTransition",Er(),Ew()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",Er(),Fw(r,o,e)},useId:function(){return B="useId",Er(),fw()},useFormState:function(r,o){return B="useFormState",Er(),Gb(),dv(r,o)},useActionState:function(r,o){return B="useActionState",Er(),dv(r,o)},useOptimistic:function(r){return B="useOptimistic",Er(),Bw(r)},useHostTransitionStatus:sn,useMemoCache:jn,useCacheRefresh:function(){return B="useCacheRefresh",Er(),pw()},useEffectEvent:function(r){return B="useEffectEvent",Er(),Tw(r)}},bH={readContext:function(r){return Lo(r)},use:ai,useCallback:function(r,o){return B="useCallback",rr(),Dw(r,o)},useContext:function(r){return B="useContext",rr(),Lo(r)},useEffect:function(r,o){return B="useEffect",rr(),Qb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",rr(),aw(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",rr(),dn(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",rr(),kw(r,o)},useMemo:function(r,o){B="useMemo",rr();var e=C.H;C.H=Zl;try{return cw(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",rr();var l=C.H;C.H=Zl;try{return xw(r,o,e)}finally{C.H=l}},useRef:function(r){return B="useRef",rr(),Sw(r)},useState:function(r){B="useState",rr();var o=C.H;C.H=Zl;try{return Zw(r)}finally{C.H=o}},useDebugValue:function(){B="useDebugValue",rr()},useDeferredValue:function(r,o){return B="useDeferredValue",rr(),yw(r,o)},useTransition:function(){return B="useTransition",rr(),Ew()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",rr(),Fw(r,o,e)},useId:function(){return B="useId",rr(),fw()},useActionState:function(r,o){return B="useActionState",rr(),dv(r,o)},useFormState:function(r,o){return B="useFormState",rr(),Gb(),dv(r,o)},useOptimistic:function(r){return B="useOptimistic",rr(),Bw(r)},useHostTransitionStatus:sn,useMemoCache:jn,useCacheRefresh:function(){return B="useCacheRefresh",rr(),pw()},useEffectEvent:function(r){return B="useEffectEvent",rr(),Tw(r)}},V4={readContext:function(r){return Lo(r)},use:ai,useCallback:function(r,o){return B="useCallback",rr(),$b(r,o)},useContext:function(r){return B="useContext",rr(),Lo(r)},useEffect:function(r,o){B="useEffect",rr(),Ee(2048,ke,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",rr(),Ub(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",rr(),Ee(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",rr(),Ee(4,qg,r,o)},useMemo:function(r,o){B="useMemo",rr();var e=C.H;C.H=jg;try{return Lb(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",rr();var l=C.H;C.H=jg;try{return jv(r,o,e)}finally{C.H=l}},useRef:function(){return B="useRef",rr(),uo().memoizedState},useState:function(){B="useState",rr();var r=C.H;C.H=jg;try{return jv(yg)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",rr()},useDeferredValue:function(r,o){return B="useDeferredValue",rr(),mO(r,o)},useTransition:function(){return B="useTransition",rr(),WO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",rr(),Yb(r,o,e)},useId:function(){return B="useId",rr(),uo().memoizedState},useFormState:function(r){return B="useFormState",rr(),Gb(),Jb(r)},useActionState:function(r){return B="useActionState",rr(),Jb(r)},useOptimistic:function(r,o){return B="useOptimistic",rr(),iO(r,o)},useHostTransitionStatus:sn,useMemoCache:jn,useCacheRefresh:function(){return B="useCacheRefresh",rr(),uo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",rr(),Kb(r)}},uH={readContext:function(r){return Lo(r)},use:ai,useCallback:function(r,o){return B="useCallback",rr(),$b(r,o)},useContext:function(r){return B="useContext",rr(),Lo(r)},useEffect:function(r,o){B="useEffect",rr(),Ee(2048,ke,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",rr(),Ub(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",rr(),Ee(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",rr(),Ee(4,qg,r,o)},useMemo:function(r,o){B="useMemo",rr();var e=C.H;C.H=Fu;try{return Lb(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",rr();var l=C.H;C.H=Fu;try{return U0(r,o,e)}finally{C.H=l}},useRef:function(){return B="useRef",rr(),uo().memoizedState},useState:function(){B="useState",rr();var r=C.H;C.H=Fu;try{return U0(yg)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",rr()},useDeferredValue:function(r,o){return B="useDeferredValue",rr(),AO(r,o)},useTransition:function(){return B="useTransition",rr(),GO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",rr(),Yb(r,o,e)},useId:function(){return B="useId",rr(),uo().memoizedState},useFormState:function(r){return B="useFormState",rr(),Gb(),zb(r)},useActionState:function(r){return B="useActionState",rr(),zb(r)},useOptimistic:function(r,o){return B="useOptimistic",rr(),vO(r,o)},useHostTransitionStatus:sn,useMemoCache:jn,useCacheRefresh:function(){return B="useCacheRefresh",rr(),uo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",rr(),Kb(r)}},Zl={readContext:function(r){return R(),Lo(r)},use:function(r){return m(),ai(r)},useCallback:function(r,o){return B="useCallback",m(),Er(),Dw(r,o)},useContext:function(r){return B="useContext",m(),Er(),Lo(r)},useEffect:function(r,o){return B="useEffect",m(),Er(),Qb(r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",m(),Er(),aw(r,o,e)},useInsertionEffect:function(r,o){B="useInsertionEffect",m(),Er(),dn(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",m(),Er(),kw(r,o)},useMemo:function(r,o){B="useMemo",m(),Er();var e=C.H;C.H=Zl;try{return cw(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",m(),Er();var l=C.H;C.H=Zl;try{return xw(r,o,e)}finally{C.H=l}},useRef:function(r){return B="useRef",m(),Er(),Sw(r)},useState:function(r){B="useState",m(),Er();var o=C.H;C.H=Zl;try{return Zw(r)}finally{C.H=o}},useDebugValue:function(){B="useDebugValue",m(),Er()},useDeferredValue:function(r,o){return B="useDeferredValue",m(),Er(),yw(r,o)},useTransition:function(){return B="useTransition",m(),Er(),Ew()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",m(),Er(),Fw(r,o,e)},useId:function(){return B="useId",m(),Er(),fw()},useFormState:function(r,o){return B="useFormState",m(),Er(),dv(r,o)},useActionState:function(r,o){return B="useActionState",m(),Er(),dv(r,o)},useOptimistic:function(r){return B="useOptimistic",m(),Er(),Bw(r)},useMemoCache:function(r){return m(),jn(r)},useHostTransitionStatus:sn,useCacheRefresh:function(){return B="useCacheRefresh",Er(),pw()},useEffectEvent:function(r){return B="useEffectEvent",m(),Er(),Tw(r)}},jg={readContext:function(r){return R(),Lo(r)},use:function(r){return m(),ai(r)},useCallback:function(r,o){return B="useCallback",m(),rr(),$b(r,o)},useContext:function(r){return B="useContext",m(),rr(),Lo(r)},useEffect:function(r,o){B="useEffect",m(),rr(),Ee(2048,ke,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",m(),rr(),Ub(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",m(),rr(),Ee(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",m(),rr(),Ee(4,qg,r,o)},useMemo:function(r,o){B="useMemo",m(),rr();var e=C.H;C.H=jg;try{return Lb(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",m(),rr();var l=C.H;C.H=jg;try{return jv(r,o,e)}finally{C.H=l}},useRef:function(){return B="useRef",m(),rr(),uo().memoizedState},useState:function(){B="useState",m(),rr();var r=C.H;C.H=jg;try{return jv(yg)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",m(),rr()},useDeferredValue:function(r,o){return B="useDeferredValue",m(),rr(),mO(r,o)},useTransition:function(){return B="useTransition",m(),rr(),WO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",m(),rr(),Yb(r,o,e)},useId:function(){return B="useId",m(),rr(),uo().memoizedState},useFormState:function(r){return B="useFormState",m(),rr(),Jb(r)},useActionState:function(r){return B="useActionState",m(),rr(),Jb(r)},useOptimistic:function(r,o){return B="useOptimistic",m(),rr(),iO(r,o)},useMemoCache:function(r){return m(),jn(r)},useHostTransitionStatus:sn,useCacheRefresh:function(){return B="useCacheRefresh",rr(),uo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",m(),rr(),Kb(r)}},Fu={readContext:function(r){return R(),Lo(r)},use:function(r){return m(),ai(r)},useCallback:function(r,o){return B="useCallback",m(),rr(),$b(r,o)},useContext:function(r){return B="useContext",m(),rr(),Lo(r)},useEffect:function(r,o){B="useEffect",m(),rr(),Ee(2048,ke,r,o)},useImperativeHandle:function(r,o,e){return B="useImperativeHandle",m(),rr(),Ub(r,o,e)},useInsertionEffect:function(r,o){return B="useInsertionEffect",m(),rr(),Ee(4,Te,r,o)},useLayoutEffect:function(r,o){return B="useLayoutEffect",m(),rr(),Ee(4,qg,r,o)},useMemo:function(r,o){B="useMemo",m(),rr();var e=C.H;C.H=jg;try{return Lb(r,o)}finally{C.H=e}},useReducer:function(r,o,e){B="useReducer",m(),rr();var l=C.H;C.H=jg;try{return U0(r,o,e)}finally{C.H=l}},useRef:function(){return B="useRef",m(),rr(),uo().memoizedState},useState:function(){B="useState",m(),rr();var r=C.H;C.H=jg;try{return U0(yg)}finally{C.H=r}},useDebugValue:function(){B="useDebugValue",m(),rr()},useDeferredValue:function(r,o){return B="useDeferredValue",m(),rr(),AO(r,o)},useTransition:function(){return B="useTransition",m(),rr(),GO()},useSyncExternalStore:function(r,o,e){return B="useSyncExternalStore",m(),rr(),Yb(r,o,e)},useId:function(){return B="useId",m(),rr(),uo().memoizedState},useFormState:function(r){return B="useFormState",m(),rr(),zb(r)},useActionState:function(r){return B="useActionState",m(),rr(),zb(r)},useOptimistic:function(r,o){return B="useOptimistic",m(),rr(),vO(r,o)},useMemoCache:function(r){return m(),jn(r)},useHostTransitionStatus:sn,useCacheRefresh:function(){return B="useCacheRefresh",rr(),uo().memoizedState},useEffectEvent:function(r){return B="useEffectEvent",m(),rr(),Kb(r)}};var wH={},PH=new Set,OH=new Set,mH=new Set,AH=new Set,qH=new Set,HH=new Set,MH=new Set,RH=new Set,WH=new Set,GH=new Set;Object.freeze(wH);var _4={enqueueSetState:function(r,o,e){r=r._reactInternals;var l=bg(r),n=Ci(l);n.payload=o,e!==void 0&&e!==null&&(dw(e),n.callback=e),o=Si(r,n,l),o!==null&&(Pl(l,"this.setState()",r),Bo(o,r,l),J0(o,r,l))},enqueueReplaceState:function(r,o,e){r=r._reactInternals;var l=bg(r),n=Ci(l);n.tag=lH,n.payload=o,e!==void 0&&e!==null&&(dw(e),n.callback=e),o=Si(r,n,l),o!==null&&(Pl(l,"this.replaceState()",r),Bo(o,r,l),J0(o,r,l))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var e=bg(r),l=Ci(e);l.tag=iH,o!==void 0&&o!==null&&(dw(o),l.callback=o),o=Si(r,l,e),o!==null&&(Pl(e,"this.forceUpdate()",r),Bo(o,r,e),J0(o,r,e))}},Nt=null,E4=null,f4=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),re=!1,XH={},YH={},JH={},zH={},Zt=!1,QH={},Nu={},p4={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},KH=!1,UH=null;UH=new Set;var mi=!1,oe=!1,j4=!1,$H=typeof WeakSet==="function"?WeakSet:Set,we=null,Bt=null,Ct=null,ee=null,je=!1,dg=null,ne=!1,Jh=8192,wJ={getCacheForType:function(r){var o=Lo(po),e=o.data.get(r);return e===void 0&&(e=r(),o.data.set(r,e)),e},cacheSignal:function(){return Lo(po).controller.signal},getOwner:function(){return Pg}};if(typeof Symbol==="function"&&Symbol.for){var zh=Symbol.for;zh("selector.component"),zh("selector.has_pseudo_class"),zh("selector.role"),zh("selector.test_id"),zh("selector.text")}var PJ=[],OJ=typeof WeakMap==="function"?WeakMap:Map,Pe=0,ve=2,Hg=4,Ai=0,Qh=1,mv=2,Zu=3,tn=4,Bu=6,LH=5,go=Pe,Ro=null,Vr=null,Dr=0,de=0,Cu=1,Av=2,Kh=3,xH=4,d4=5,Uh=6,Su=7,s4=8,qv=9,wo=de,Mg=null,hn=!1,St=!1,r6=!1,Bl=0,No=Ai,bn=0,un=0,o6=0,se=0,Hv=0,$h=null,ae=null,Tu=!1,ku=0,IH=0,FH=300,au=1/0,NH=500,Lh=null,ko=null,wn=null,Du=0,e6=1,g6=2,ZH=3,Pn=0,BH=1,CH=2,SH=3,TH=4,cu=5,ge=0,On=null,Tt=null,sg=0,l6=0,i6=-0,n6=null,kH=null,aH=null,rl=Du,DH=null,mJ=50,xh=0,v6=null,t6=!1,yu=!1,AJ=50,Mv=0,Ih=null,kt=!1,Vu=null,cH=!1,yH=new Set,qJ={},_u=null,at=null,h6=!1,b6=!1,Eu=!1,u6=!1,mn=0,w6={};(function(){for(var r=0;r<X4.length;r++){var o=X4[r],e=o.toLowerCase();o=o[0].toUpperCase()+o.slice(1),cg(e,"on"+o)}cg(Wq,"onAnimationEnd"),cg(Gq,"onAnimationIteration"),cg(Xq,"onAnimationStart"),cg("dblclick","onDoubleClick"),cg("focusin","onFocus"),cg("focusout","onBlur"),cg(_Y,"onTransitionRun"),cg(EY,"onTransitionStart"),cg(fY,"onTransitionCancel"),cg(Yq,"onTransitionEnd")})(),gg("onMouseEnter",["mouseout","mouseover"]),gg("onMouseLeave",["mouseout","mouseover"]),gg("onPointerEnter",["pointerout","pointerover"]),gg("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fh="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fh)),fu="_reactListening"+Math.random().toString(36).slice(2),VH=!1,_H=!1,pu=!1,EH=!1,ju=!1,du=!1,fH=!1,su={},HJ=/\r\n?/g,MJ=/\u0000|\uFFFD/g,Rv="http://www.w3.org/1999/xlink",O6="http://www.w3.org/XML/1998/namespace",RJ="javascript:throw new Error('React form unexpectedly submitted.')",WJ="suppressHydrationWarning",Wv="&",r5="/&",Nh="$",Zh="/$",An="$?",Gv="$~",Dt="$!",GJ="html",XJ="body",YJ="head",m6="F!",pH="F",jH="loading",JJ="style",qi=0,ct=1,o5=2,A6=null,q6=null,dH={dialog:!0,webview:!0},H6=null,Bh=void 0,sH=typeof setTimeout==="function"?setTimeout:void 0,zJ=typeof clearTimeout==="function"?clearTimeout:void 0,Xv=-1,rM=typeof Promise==="function"?Promise:void 0,QJ=typeof queueMicrotask==="function"?queueMicrotask:typeof rM<"u"?function(r){return rM.resolve(null).then(r).catch(uX)}:sH,M6=null,Yv=0,Ch=1,oM=2,eM=3,kg=4,ag=new Map,gM=new Set,Hi=ho.d;ho.d={f:function(){var r=Hi.f(),o=gt();return r||o},r:function(r){var o=Zr(r);o!==null&&o.tag===5&&o.type==="form"?RO(o):Hi.r(r)},D:function(r){Hi.D(r),PA("dns-prefetch",r,null)},C:function(r,o){Hi.C(r,o),PA("preconnect",r,o)},L:function(r,o,e){Hi.L(r,o,e);var l=yt;if(l&&r&&o){var n='link[rel="preload"][as="'+Ug(o)+'"]';o==="image"?e&&e.imageSrcSet?(n+='[imagesrcset="'+Ug(e.imageSrcSet)+'"]',typeof e.imageSizes==="string"&&(n+='[imagesizes="'+Ug(e.imageSizes)+'"]')):n+='[href="'+Ug(r)+'"]':n+='[href="'+Ug(r)+'"]';var v=n;switch(o){case"style":v=nt(r);break;case"script":v=vt(r)}ag.has(v)||(r=fr({rel:"preload",href:o==="image"&&e&&e.imageSrcSet?void 0:r,as:o},e),ag.set(v,r),l.querySelector(n)!==null||o==="style"&&l.querySelector(c0(v))||o==="script"&&l.querySelector(y0(v))||(o=l.createElement("link"),Me(o,"link",r),zr(o),l.head.appendChild(o)))}},m:function(r,o){Hi.m(r,o);var e=yt;if(e&&r){var l=o&&typeof o.as==="string"?o.as:"script",n='link[rel="modulepreload"][as="'+Ug(l)+'"][href="'+Ug(r)+'"]',v=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=vt(r)}if(!ag.has(v)&&(r=fr({rel:"modulepreload",href:r},o),ag.set(v,r),e.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(y0(v)))return}l=e.createElement("link"),Me(l,"link",r),zr(l),e.head.appendChild(l)}}},X:function(r,o){Hi.X(r,o);var e=yt;if(e&&r){var l=lo(e).hoistableScripts,n=vt(r),v=l.get(n);v||(v=e.querySelector(y0(n)),v||(r=fr({src:r,async:!0},o),(o=ag.get(n))&&a2(r,o),v=e.createElement("script"),zr(v),Me(v,"link",r),e.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},l.set(n,v))}},S:function(r,o,e){Hi.S(r,o,e);var l=yt;if(l&&r){var n=lo(l).hoistableStyles,v=nt(r);o=o||"default";var b=n.get(v);if(!b){var w={loading:Yv,preload:null};if(b=l.querySelector(c0(v)))w.loading=Ch|kg;else{r=fr({rel:"stylesheet",href:r,"data-precedence":o},e),(e=ag.get(v))&&k2(r,e);var A=b=l.createElement("link");zr(A),Me(A,"link",r),A._p=new Promise(function(H,U){A.onload=H,A.onerror=U}),A.addEventListener("load",function(){w.loading|=Ch}),A.addEventListener("error",function(){w.loading|=oM}),w.loading|=kg,pb(b,o,l)}b={type:"stylesheet",instance:b,count:1,state:w},n.set(v,b)}}},M:function(r,o){Hi.M(r,o);var e=yt;if(e&&r){var l=lo(e).hoistableScripts,n=vt(r),v=l.get(n);v||(v=e.querySelector(y0(n)),v||(r=fr({src:r,async:!0,type:"module"},o),(o=ag.get(n))&&a2(r,o),v=e.createElement("script"),zr(v),Me(v,"link",r),e.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},l.set(n,v))}}};var yt=typeof document>"u"?null:document,e5=null,KJ=60000,UJ=800,$J=500,R6=0,W6=null,g5=null,Jv=yX,Sh={$$typeof:Ql,Provider:null,Consumer:null,_currentValue:Jv,_currentValue2:Jv,_threadCount:0},lM="%c%s%c",iM="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",nM="",l5=" ",LJ=Function.prototype.bind,vM=!1,tM=null,hM=null,bM=null,uM=null,wM=null,PM=null,OM=null,mM=null,AM=null,qM=null;tM=function(r,o,e,l){o=g(r,o),o!==null&&(e=i(o.memoizedState,e,0,l),o.memoizedState=e,o.baseState=e,r.memoizedProps=fr({},r.memoizedProps),e=Ue(r,2),e!==null&&Bo(e,r,2))},hM=function(r,o,e){o=g(r,o),o!==null&&(e=u(o.memoizedState,e,0),o.memoizedState=e,o.baseState=e,r.memoizedProps=fr({},r.memoizedProps),e=Ue(r,2),e!==null&&Bo(e,r,2))},bM=function(r,o,e,l){o=g(r,o),o!==null&&(e=t(o.memoizedState,e,l),o.memoizedState=e,o.baseState=e,r.memoizedProps=fr({},r.memoizedProps),e=Ue(r,2),e!==null&&Bo(e,r,2))},uM=function(r,o,e){r.pendingProps=i(r.memoizedProps,o,0,e),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Ue(r,2),o!==null&&Bo(o,r,2)},wM=function(r,o){r.pendingProps=u(r.memoizedProps,o,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Ue(r,2),o!==null&&Bo(o,r,2)},PM=function(r,o,e){r.pendingProps=t(r.memoizedProps,o,e),r.alternate&&(r.alternate.pendingProps=r.pendingProps),o=Ue(r,2),o!==null&&Bo(o,r,2)},OM=function(r){var o=Ue(r,2);o!==null&&Bo(o,r,2)},mM=function(r){var o=Dv(),e=Ue(r,o);e!==null&&Bo(e,r,o)},AM=function(r){O=r},qM=function(r){P=r};var i5=!0,n5=null,G6=!1,qn=null,Hn=null,Mn=null,Th=new Map,kh=new Map,Rn=[],xJ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),v5=null;if(ou.prototype.render=E2.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error("Cannot update an unmounted root.");var e=arguments;typeof e[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):k(e[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof e[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),e=r;var l=o.current,n=bg(l);D2(l,n,e,o,null,null)},ou.prototype.unmount=E2.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var o=r.containerInfo;(go&(ve|Hg))!==Pe&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),D2(r.current,2,null,r,null,null),gt(),o[fi]=null}},ou.prototype.unstable_scheduleHydration=function(r){if(r){var o=x();r={blockedOn:null,target:r,priority:o};for(var e=0;e<Rn.length&&o!==0&&o<Rn[e].priority;e++);Rn.splice(e,0,r),e===0&&QA(r)}},function(){var r=Vt.version;if(r!=="19.2.6")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.6
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),ho.findDOMNode=function(r){var o=r._reactInternals;if(o===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=s(o),r=r!==null?ir(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.6"};return r.overrideHookState=tM,r.overrideHookStateDeletePath=hM,r.overrideHookStateRenamePath=bM,r.overrideProps=uM,r.overridePropsDeletePath=wM,r.overridePropsRenamePath=PM,r.scheduleUpdate=OM,r.scheduleRetry=mM,r.setErrorHandler=AM,r.setSuspenseHandler=qM,r.scheduleRefresh=S,r.scheduleRoot=L,r.setRefreshHandler=I,r.getCurrentFiber=BX,av(r)}()&&xl&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var HM=window.location.protocol;/^(https?|file):$/.test(HM)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(HM==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}_J.createRoot=function(r,o){if(!k(r))throw Error("Target container is not a DOM element.");LA(r);var e=!1,l="",n=KO,v=UO,b=$O;return o!==null&&o!==void 0&&(o.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof o==="object"&&o!==null&&o.$$typeof===zl&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),o.unstable_strictMode===!0&&(e=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(n=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),o=RA(r,1,!1,null,null,e,l,null,n,v,b,$A),r[fi]=o.current,U2(r),new E2(o)},_J.hydrateRoot=function(r,o,e){if(!k(r))throw Error("Target container is not a DOM element.");LA(r),o===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var l=!1,n="",v=KO,b=UO,w=$O,A=null;return e!==null&&e!==void 0&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(v=e.onUncaughtError),e.onCaughtError!==void 0&&(b=e.onCaughtError),e.onRecoverableError!==void 0&&(w=e.onRecoverableError),e.formState!==void 0&&(A=e.formState)),o=RA(r,1,!0,o,e!=null?e:null,l,n,A,v,b,w,$A),o.context=WA(null),e=o.current,l=bg(e),l=kn(l),n=Ci(l),n.callback=null,Si(e,n,l),Pl(l,"hydrateRoot()",null),e=l,o.current.lanes=e,Li(o,e),Yl(o),r[fi]=o.current,U2(r),new ou(o)},_J.version="19.2.6",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var YM=zv((zI,XM)=>{XM.exports=GM()});var dr=zv((uQ)=>{var Nv=wr(io());(function(){function g(c){if(c==null)return null;if(typeof c==="function")return c.$$typeof===N?null:c.displayName||c.name||null;if(typeof c==="string")return c;switch(c){case I:return"Fragment";case j:return"Profiler";case k:return"StrictMode";case s:return"Suspense";case ir:return"SuspenseList";case p:return"Activity"}if(typeof c==="object")switch(typeof c.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),c.$$typeof){case S:return"Portal";case lr:return c.displayName||"Context";case Pr:return(c._context.displayName||"Context")+".Consumer";case f:var T=c.render;return c=c.displayName,c||(c=T.displayName||T.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case Z:return T=c.displayName||null,T!==null?T:g(c.type)||"Memo";case y:T=c._payload,c=c._init;try{return g(c(T))}catch(tr){}}return null}function i(c){return""+c}function t(c){try{i(c);var T=!1}catch(_){T=!0}if(T){T=console;var tr=T.error,Hr=typeof Symbol==="function"&&Symbol.toStringTag&&c[Symbol.toStringTag]||c.constructor.name||"Object";return tr.call(T,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Hr),i(c)}}function h(c){if(c===I)return"<>";if(typeof c==="object"&&c!==null&&c.$$typeof===y)return"<...>";try{var T=g(c);return T?"<"+T+">":"<...>"}catch(tr){return"<...>"}}function u(){var c=Rr.A;return c===null?null:c.getOwner()}function P(){return Error("react-stack-top-frame")}function O(c){if(qr.call(c,"key")){var T=Object.getOwnPropertyDescriptor(c,"key").get;if(T&&T.isReactWarning)return!1}return c.key!==void 0}function m(c,T){function tr(){a||(a=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",T))}tr.isReactWarning=!0,Object.defineProperty(c,"key",{get:tr,configurable:!0})}function R(){var c=g(this.type);return or[c]||(or[c]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),c=this.props.ref,c!==void 0?c:null}function X(c,T,tr,Hr,_,Yr){var gr=tr.ref;return c={$$typeof:L,type:c,key:T,props:tr,_owner:Hr},(gr!==void 0?gr:null)!==null?Object.defineProperty(c,"ref",{enumerable:!1,get:R}):Object.defineProperty(c,"ref",{enumerable:!1,value:null}),c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(c,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(c,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:_}),Object.defineProperty(c,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Yr}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}function W(c,T,tr,Hr,_,Yr){var gr=T.children;if(gr!==void 0)if(Hr)if(Wr(gr)){for(Hr=0;Hr<gr.length;Hr++)q(gr[Hr]);Object.freeze&&Object.freeze(gr)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else q(gr);if(qr.call(T,"key")){gr=g(c);var xr=Object.keys(T).filter(function(Po){return Po!=="key"});Hr=0<xr.length?"{key: someKey, "+xr.join(": ..., ")+": ...}":"{key: someKey}",Xr[gr+Hr]||(xr=0<xr.length?"{"+xr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Hr,gr,xr,gr),Xr[gr+Hr]=!0)}if(gr=null,tr!==void 0&&(t(tr),gr=""+tr),O(T)&&(t(T.key),gr=""+T.key),"key"in T){tr={};for(var yr in T)yr!=="key"&&(tr[yr]=T[yr])}else tr=T;return gr&&m(tr,typeof c==="function"?c.displayName||c.name||"Unknown":c),X(c,gr,tr,u(),_,Yr)}function q(c){G(c)?c._store&&(c._store.validated=1):typeof c==="object"&&c!==null&&c.$$typeof===y&&(c._payload.status==="fulfilled"?G(c._payload.value)&&c._payload.value._store&&(c._payload.value._store.validated=1):c._store&&(c._store.validated=1))}function G(c){return typeof c==="object"&&c!==null&&c.$$typeof===L}var L=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),lr=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),ir=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),N=Symbol.for("react.client.reference"),Rr=Nv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qr=Object.prototype.hasOwnProperty,Wr=Array.isArray,Cr=console.createTask?console.createTask:function(){return null};Nv={react_stack_bottom_frame:function(c){return c()}};var a,or={},nr=Nv.react_stack_bottom_frame.bind(Nv,P)(),Kr=Cr(h(P)),Xr={};uQ.Fragment=I,uQ.jsxDEV=function(c,T,tr,Hr){var _=1e4>Rr.recentlyCreatedOwnerStacks++;return W(c,T,tr,Hr,_?Error("react-stack-top-frame"):nr,_?Cr(h(c)):Kr)}})()});var I8=wr(io(),1),F8=wr(YM(),1);var JM=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var zM=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var QM=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
.ls-editor-monaco { flex: 1; min-height: 0; position: relative; }\r
.ls-editor-docs   { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }\r
\r
/* v0.27.5 — Monaco init-failure overlay. Renders inside .ls-editor-monaco\r
   (which now has position:relative as its anchor) over the editor canvas\r
   when the init-success probe detects mount timeout or non-responsiveness.\r
   Hard-coded rgba on the backdrop so the overlay reads correctly even if\r
   the host theme tokens haven't fully resolved (same defensive pattern as\r
   the portal-modal CSS-token gotcha for accent fallbacks elsewhere). */\r
.ls-editor-failed-overlay {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 10;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: stretch;\r
  justify-content: center;\r
  padding: 24px 32px;\r
  background: rgba(10, 10, 14, 0.92);\r
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));\r
  font-size: 12px;\r
  line-height: 1.5;\r
  overflow: auto;\r
}\r
.ls-editor-failed-title {\r
  margin: 0 0 8px;\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.95));\r
}\r
.ls-editor-failed-desc {\r
  margin: 0 0 12px;\r
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.7));\r
}\r
.ls-editor-failed-steps-label {\r
  margin: 0 0 4px;\r
  font-weight: 600;\r
}\r
.ls-editor-failed-steps {\r
  margin: 0 0 16px;\r
  padding-left: 20px;\r
}\r
.ls-editor-failed-steps li { margin-bottom: 6px; }\r
.ls-editor-failed-steps code {\r
  background: rgba(255, 255, 255, 0.08);\r
  border-radius: 3px;\r
  padding: 1px 5px;\r
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;\r
  font-size: 11px;\r
}\r
.ls-editor-failed-dismiss {\r
  align-self: flex-start;\r
  padding: 6px 14px;\r
  font-size: 12px;\r
  border: 1px solid var(--lumiverse-border, rgba(255, 255, 255, 0.12));\r
  border-radius: var(--lumiverse-radius, 6px);\r
  background: var(--lumiverse-accent, rgb(147, 112, 219));\r
  color: var(--lumiverse-accent-fg, #ffffff);\r
  cursor: pointer;\r
  transition: filter var(--lumiverse-transition-fast, 120ms);\r
}\r
.ls-editor-failed-dismiss:hover {\r
  filter: brightness(1.1);\r
}\r
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
`;var KM=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var UM=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var $M=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var LM=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var xM=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var IM=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var FM=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var NM=`/* ============================================================================
 * LumiScript Diagnostics Modal (v0.28.0+)
 * ============================================================================
 * Portal-rendered modal (mounted at document.body) — so the host theme's
 * --lumiverse-* tokens do NOT cascade in. ALL token references include
 * hard-coded rgb()/hex fallbacks per the portal-modal CSS-token gotcha
 * documented in saved memory. Canonical purple is rgb(147, 112, 219).
 *
 * Mirrors the visual structure of Lumiverse's MemoryCortexDiagnosticsModal
 * (matching backdrop, modal shell, header, body, section spacing) so the
 * diagnostic affordance feels native to the host.
 */

/* ── Backdrop + modal shell ────────────────────────────────────────────── */

.ls-diag-backdrop {
  position: fixed;
  inset: 0;
  /* z-index 10010 places this above Lumiverse's standard modal layer
     (10002 — used by SettingsModal, ConfirmationModal, etc.) but below
     the context-menu layer (11000). Matches Lumiverse's own
     ExpandedTextEditor z-index, which is the canonical "secondary modal
     opened from inside another modal" pattern (same use case as ours:
     the diagnostics modal is triggered from inside Lumiverse's settings
     modal via LumiScript's SettingsPanel). */
  z-index: 10010;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  /* Click on the backdrop dismisses; modal stops propagation via onClick check in JSX. */
}

.ls-diag-modal {
  width: 100%;
  max-width: 980px;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  background: var(--lumiverse-bg-elevated, rgb(10, 10, 10));
  border: 1px solid var(--lumiverse-border, hsla(255, 100%, 56%, 0.12));
  border-radius: var(--lumiverse-radius, 8px);
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
  overflow: hidden;
}

/* ── Header ────────────────────────────────────────────────────────────── */

.ls-diag-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px 14px;
  border-bottom: 1px solid var(--lumiverse-border-light, rgba(128, 128, 128, 0.12));
}

.ls-diag-title-wrap {
  min-width: 0;
}

.ls-diag-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--lumiverse-accent, rgb(147, 112, 219));
  margin-bottom: 4px;
}

.ls-diag-title {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
}

.ls-diag-subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.65));
  max-width: 640px;
  line-height: 1.45;
}

.ls-diag-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* Header buttons share a base style with the rest of the panel. */
.ls-diag-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid var(--lumiverse-border, hsla(255, 100%, 56%, 0.12));
  border-radius: var(--lumiverse-radius-sm, 6px);
  background: var(--lumiverse-bg-hover, rgb(15, 15, 15));
  color: inherit;
  cursor: pointer;
  transition: background 120ms;
}
.ls-diag-action-btn:hover:not(:disabled) {
  background: var(--lumiverse-fill-medium, rgba(0, 0, 0, 0.25));
}
.ls-diag-action-btn:disabled {
  opacity: 0.55;
  cursor: default;
}
.ls-diag-action-btn-done {
  background: rgba(74, 222, 128, 0.18);
  color: rgb(74, 222, 128);
  border-color: rgba(74, 222, 128, 0.35);
}
.ls-diag-action-btn-error {
  background: rgba(239, 68, 68, 0.18);
  color: rgb(239, 68, 68);
  border-color: rgba(239, 68, 68, 0.35);
}

.ls-diag-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: var(--lumiverse-radius-sm, 6px);
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.65));
  cursor: pointer;
}
.ls-diag-close:hover {
  background: var(--lumiverse-fill-medium, rgba(0, 0, 0, 0.25));
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
}

/* ── Summary chip (header) ─────────────────────────────────────────────── */

.ls-diag-summary-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--lumiverse-fill-medium, rgba(0, 0, 0, 0.25));
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.9));
}
.ls-diag-summary-chip > span {
  display: inline-block;
}
.ls-diag-summary-chip > span + span {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: 8px;
}

/* ── Body ──────────────────────────────────────────────────────────────── */

.ls-diag-body {
  flex: 1;
  overflow: auto;
  padding: 16px 22px 22px;
}

.ls-diag-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 32px 0;
  justify-content: center;
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.65));
  font-size: 12px;
}

.ls-diag-section {
  margin-bottom: 22px;
}
.ls-diag-section:last-child {
  margin-bottom: 0;
}

.ls-diag-section-title {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.92));
  padding-bottom: 4px;
  border-bottom: 1px solid var(--lumiverse-border-light, rgba(128, 128, 128, 0.12));
}

.ls-diag-checks {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ls-diag-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 10px;
  background: var(--lumiverse-bg-040, hsla(255, 30%, 12%, 0.4));
  border-radius: var(--lumiverse-radius-xs, 4px);
}

.ls-diag-check-body {
  flex: 1;
  min-width: 0;
}

.ls-diag-check-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--lumiverse-text, rgba(255, 255, 255, 0.92));
  margin-bottom: 2px;
}

.ls-diag-check-message {
  font-size: 11.5px;
  color: var(--lumiverse-text-muted, rgba(255, 255, 255, 0.7));
  line-height: 1.4;
  word-break: break-word;
}

/* ── Status badges + tone colours ──────────────────────────────────────── */

.ls-diag-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 1px;
}

.ls-diag-tone-pass {
  background: rgba(74, 222, 128, 0.18);
  color: rgb(74, 222, 128);
}
.ls-diag-tone-warn {
  background: rgba(250, 204, 21, 0.18);
  color: rgb(250, 204, 21);
}
.ls-diag-tone-fail {
  background: rgba(239, 68, 68, 0.18);
  color: rgb(239, 68, 68);
}
.ls-diag-tone-info {
  background: rgba(96, 165, 250, 0.16);
  color: rgb(96, 165, 250);
}

/* When a summary chip carries a tone, tint its background too — but
   only subtly; the per-check badges carry the main colour signal. */
.ls-diag-summary-chip.ls-diag-tone-fail {
  background: rgba(239, 68, 68, 0.15);
}
.ls-diag-summary-chip.ls-diag-tone-warn {
  background: rgba(250, 204, 21, 0.15);
}
.ls-diag-summary-chip.ls-diag-tone-pass {
  background: rgba(74, 222, 128, 0.15);
}

/* ── Refresh-button spin animation ─────────────────────────────────────── */

@keyframes ls-diag-spin-kf {
  to { transform: rotate(360deg); }
}
.ls-diag-spin {
  animation: ls-diag-spin-kf 1s linear infinite;
}
`;var ZM=JM+zM+QM+KM+UM+$M+LM+xM+IM+FM+NM;var Jo=wr(io(),1);var u5=wr(io(),1);var h5=(...g)=>g.filter((i,t,h)=>{return Boolean(i)&&i.trim()!==""&&h.indexOf(i)===t}).join(" ").trim();var BM=(g)=>g.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var CM=(g)=>g.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,t,h)=>h?h.toUpperCase():t.toLowerCase());var z6=(g)=>{let i=CM(g);return i.charAt(0).toUpperCase()+i.slice(1)};var ah=wr(io(),1);var b5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var SM=(g)=>{for(let i in g)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};var _t=wr(io(),1),iz=_t.createContext({});var TM=()=>_t.useContext(iz);var kM=ah.forwardRef(({color:g,size:i,strokeWidth:t,absoluteStrokeWidth:h,className:u="",children:P,iconNode:O,...m},R)=>{let{size:X=24,strokeWidth:W=2,absoluteStrokeWidth:q=!1,color:G="currentColor",className:L=""}=TM()??{},S=h??q?Number(t??W)*24/Number(i??X):t??W;return ah.createElement("svg",{ref:R,...b5,width:i??X??b5.width,height:i??X??b5.height,stroke:g??G,strokeWidth:S,className:h5("lucide",L,u),...!P&&!SM(m)&&{"aria-hidden":"true"},...m},[...O.map(([I,k])=>ah.createElement(I,k)),...Array.isArray(P)?P:[P]])});var V=(g,i)=>{let t=u5.forwardRef(({className:h,...u},P)=>u5.createElement(kM,{ref:P,iconNode:i,className:h5(`lucide-${BM(z6(g))}`,`lucide-${g}`,h),...u}));return t.displayName=z6(g),t};var nz=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Cl=V("braces",nz);var vz=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Wn=V("chart-column",vz);var tz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gn=V("circle-check",tz);var hz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Xn=V("circle-x",hz);var bz=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ge=V("code-xml",bz);var uz=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Sl=V("file-code-corner",uz);var wz=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Yn=V("layers",wz);var Pz=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Tl=V("loader-circle",Pz);var Oz=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rg=V("triangle-alert",Oz);var mz=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Jn=V("user-round",mz);var Az=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],kl=V("activity",Az);var qz=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],Dh=V("arrow-down-to-line",qz);var Hz=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],ch=V("arrow-up-to-line",Hz);var Mz=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],yh=V("blocks",Mz);var Rz=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Uv=V("book-marked",Rz);var Wz=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Vh=V("book-open",Wz);var Gz=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],_h=V("calendar",Gz);var Xz=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$v=V("check",Xz);var Yz=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Xe=V("chevron-down",Yz);var Jz=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Eh=V("chevron-left",Jz);var zz=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ri=V("chevron-right",zz);var Qz=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rg=V("chevron-up",Qz);var Kz=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],fh=V("chevrons-up-down",Kz);var Uz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ph=V("clock",Uz);var $z=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Wg=V("copy",$z);var Lz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ol=V("database",Lz);var xz=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Lv=V("download",xz);var Iz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jh=V("eye",Iz);var Fz=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],xv=V("folder-open",Fz);var Nz=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],dh=V("hash",Nz);var Zz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],sh=V("info",Zz);var Bz=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],r1=V("link-2",Bz);var Cz=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],o1=V("list-ordered",Cz);var Sz=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],e1=V("list",Sz);var Tz=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],g1=V("lock",Tz);var kz=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],Et=V("message-square-plus",kz);var az=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],l1=V("message-square",az);var Dz=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],i1=V("package",Dz);var cz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],el=V("pencil",cz);var yz=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Iv=V("play",yz);var Vz=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],n1=V("plus",Vz);var _z=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],v1=V("radio",_z);var Ez=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Gg=V("refresh-cw",Ez);var fz=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],t1=V("save",fz);var pz=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zn=V("search",pz);var jz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ft=V("shield-alert",jz);var dz=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],h1=V("shield",dz);var sz=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],b1=V("syringe",sz);var rQ=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],al=V("terminal",rQ);var oQ=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],u1=V("toggle-left",oQ);var eQ=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],w1=V("toggle-right",eQ);var gQ=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Fv=V("timer",gQ);var lQ=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xe=V("trash-2",lQ);var iQ=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],P1=V("type",iQ);var nQ=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],O1=V("upload",nQ);var vQ=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],pt=V("user-plus",vQ);var tQ=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],m1=V("wrench",tQ);var hQ=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ye=V("x",hQ);var bQ=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Wi=V("zap",bQ);var w5={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var T5=wr(io(),1);var I1=wr(io(),1);var Uo=wr(dr(),1),wQ={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},aM=({script:g,selected:i,dot:t,duration:h,onSelect:u,onEdit:P,sendToBackend:O})=>{let m=(S)=>{S.stopPropagation(),O({type:"update_script",id:g.id,patch:{enabled:!g.enabled}})},R=(S)=>{S.stopPropagation(),O({type:"duplicate_script",id:g.id})},X=(S)=>{if(S.stopPropagation(),!window.confirm(`Delete "${g.name}"?`))return;O({type:"delete_script",id:g.id})},W=(S)=>{S.stopPropagation(),P()},q=t==="running",G=(S)=>{if(S.stopPropagation(),q||!g.enabled)return;O({type:"run_script",id:g.id})},L=g.bindings?.length??0;return Uo.jsxDEV("div",{className:`ls-item${i?" ls-selected":""}${!g.enabled&&g.type!=="library"?" ls-disabled":""}`,onClick:u,children:[Uo.jsxDEV("span",{className:wQ[t],title:t},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-body",children:[Uo.jsxDEV("div",{className:"ls-item-name",title:g.name,children:g.name},void 0,!1,void 0,this),Uo.jsxDEV("div",{className:"ls-item-meta",children:[g.type!=="library"&&Uo.jsxDEV("span",{children:g.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),h!==void 0&&t!=="running"&&Uo.jsxDEV("span",{style:{color:t==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[h,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.type!=="library"&&L>0&&Uo.jsxDEV("div",{className:"ls-item-bindings",children:g.bindings.map((S,I)=>Uo.jsxDEV("span",{className:"ls-binding-badge",children:[S.type==="character"?Uo.jsxDEV(Jn,{size:9},void 0,!1,void 0,this):Uo.jsxDEV(l1,{size:9},void 0,!1,void 0,this),Uo.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.displayName},void 0,!1,void 0,this)]},I,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Uo.jsxDEV("div",{className:"ls-item-actions",children:[Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:W,title:"Edit script",children:Uo.jsxDEV(el,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:G,disabled:!g.enabled||q,title:!g.enabled?"Enable to run":q?"Running…":"Run script",children:q?Uo.jsxDEV(Tl,{size:13,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):Uo.jsxDEV(Iv,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),g.type!=="library"&&Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:m,title:g.enabled?"Disable":"Enable",children:g.enabled?Uo.jsxDEV(w1,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):Uo.jsxDEV(u1,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn",onClick:R,title:"Duplicate",children:Uo.jsxDEV(Wg,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),Uo.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:X,title:"Delete",children:Uo.jsxDEV(xe,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var So=Uint8Array,Xg=Uint16Array,B6=Int32Array,O5=new So([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),m5=new So([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),L6=new So([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),EM=function(g,i){var t=new Xg(31);for(var h=0;h<31;++h)t[h]=i+=1<<g[h-1];var u=new B6(t[30]);for(var h=1;h<30;++h)for(var P=t[h];P<t[h+1];++P)u[P]=P-t[h]<<5|h;return{b:t,r:u}},fM=EM(O5,2),pM=fM.b,x6=fM.r;pM[28]=258,x6[258]=28;var jM=EM(m5,0),PQ=jM.b,DM=jM.r,I6=new Xg(32768);for(eo=0;eo<32768;++eo)Dl=(eo&43690)>>1|(eo&21845)<<1,Dl=(Dl&52428)>>2|(Dl&13107)<<2,Dl=(Dl&61680)>>4|(Dl&3855)<<4,I6[eo]=((Dl&65280)>>8|(Dl&255)<<8)>>1;var Dl,eo,yl=function(g,i,t){var h=g.length,u=0,P=new Xg(i);for(;u<h;++u)if(g[u])++P[g[u]-1];var O=new Xg(i);for(u=1;u<i;++u)O[u]=O[u-1]+P[u-1]<<1;var m;if(t){m=new Xg(1<<i);var R=15-i;for(u=0;u<h;++u)if(g[u]){var X=u<<4|g[u],W=i-g[u],q=O[g[u]-1]++<<W;for(var G=q|(1<<W)-1;q<=G;++q)m[I6[q]>>R]=X}}else{m=new Xg(h);for(u=0;u<h;++u)if(g[u])m[u]=I6[O[g[u]-1]++]>>15-g[u]}return m},Qn=new So(288);for(eo=0;eo<144;++eo)Qn[eo]=8;var eo;for(eo=144;eo<256;++eo)Qn[eo]=9;var eo;for(eo=256;eo<280;++eo)Qn[eo]=7;var eo;for(eo=280;eo<288;++eo)Qn[eo]=8;var eo,H1=new So(32);for(eo=0;eo<32;++eo)H1[eo]=5;var eo,OQ=yl(Qn,9,0),mQ=yl(Qn,9,1),AQ=yl(H1,5,0),qQ=yl(H1,5,1),Q6=function(g){var i=g[0];for(var t=1;t<g.length;++t)if(g[t]>i)i=g[t];return i},gl=function(g,i,t){var h=i/8|0;return(g[h]|g[h+1]<<8)>>(i&7)&t},K6=function(g,i){var t=i/8|0;return(g[t]|g[t+1]<<8|g[t+2]<<16)>>(i&7)},C6=function(g){return(g+7)/8|0},M1=function(g,i,t){if(i==null||i<0)i=0;if(t==null||t>g.length)t=g.length;return new So(g.subarray(i,t))};var HQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],De=function(g,i,t){var h=Error(i||HQ[g]);if(h.code=g,Error.captureStackTrace)Error.captureStackTrace(h,De);if(!t)throw h;return h},MQ=function(g,i,t,h){var u=g.length,P=h?h.length:0;if(!u||i.f&&!i.l)return t||new So(0);var O=!t,m=O||i.i!=2,R=i.i;if(O)t=new So(u*3);var X=function(hr){var Ve=t.length;if(hr>Ve){var Qe=new So(Math.max(Ve*2,hr));Qe.set(t),t=Qe}},W=i.f||0,q=i.p||0,G=i.b||0,L=i.l,S=i.d,I=i.m,k=i.n,j=u*8;do{if(!L){W=gl(g,q,1);var Pr=gl(g,q+1,3);if(q+=3,!Pr){var lr=C6(q)+4,f=g[lr-4]|g[lr-3]<<8,s=lr+f;if(s>u){if(R)De(0);break}if(m)X(G+f);t.set(g.subarray(lr,s),G),i.b=G+=f,i.p=q=s*8,i.f=W;continue}else if(Pr==1)L=mQ,S=qQ,I=9,k=5;else if(Pr==2){var ir=gl(g,q,31)+257,Z=gl(g,q+10,15)+4,y=ir+gl(g,q+5,31)+1;q+=14;var p=new So(y),N=new So(19);for(var Rr=0;Rr<Z;++Rr)N[L6[Rr]]=gl(g,q+Rr*3,7);q+=Z*3;var qr=Q6(N),Wr=(1<<qr)-1,Cr=yl(N,qr,1);for(var Rr=0;Rr<y;){var a=Cr[gl(g,q,Wr)];q+=a&15;var lr=a>>4;if(lr<16)p[Rr++]=lr;else{var or=0,nr=0;if(lr==16)nr=3+gl(g,q,3),q+=2,or=p[Rr-1];else if(lr==17)nr=3+gl(g,q,7),q+=3;else if(lr==18)nr=11+gl(g,q,127),q+=7;while(nr--)p[Rr++]=or}}var Kr=p.subarray(0,ir),Xr=p.subarray(ir);I=Q6(Kr),k=Q6(Xr),L=yl(Kr,I,1),S=yl(Xr,k,1)}else De(1);if(q>j){if(R)De(0);break}}if(m)X(G+131072);var c=(1<<I)-1,T=(1<<k)-1,tr=q;for(;;tr=q){var or=L[K6(g,q)&c],Hr=or>>4;if(q+=or&15,q>j){if(R)De(0);break}if(!or)De(2);if(Hr<256)t[G++]=Hr;else if(Hr==256){tr=q,L=null;break}else{var _=Hr-254;if(Hr>264){var Rr=Hr-257,Yr=O5[Rr];_=gl(g,q,(1<<Yr)-1)+pM[Rr],q+=Yr}var gr=S[K6(g,q)&T],xr=gr>>4;if(!gr)De(3);q+=gr&15;var Xr=PQ[xr];if(xr>3){var Yr=m5[xr];Xr+=K6(g,q)&(1<<Yr)-1,q+=Yr}if(q>j){if(R)De(0);break}if(m)X(G+131072);var yr=G+_;if(G<Xr){var Po=P-Xr,te=Math.min(Xr,yr);if(Po+G<0)De(3);for(;G<te;++G)t[G]=h[Po+G]}for(;G<yr;++G)t[G]=t[G-Xr]}}if(i.l=L,i.p=tr,i.b=G,i.f=W,L)W=1,i.m=I,i.d=S,i.n=k}while(!W);return G!=t.length&&O?M1(t,0,G):t.subarray(0,G)},Gi=function(g,i,t){t<<=i&7;var h=i/8|0;g[h]|=t,g[h+1]|=t>>8},A1=function(g,i,t){t<<=i&7;var h=i/8|0;g[h]|=t,g[h+1]|=t>>8,g[h+2]|=t>>16},U6=function(g,i){var t=[];for(var h=0;h<g.length;++h)if(g[h])t.push({s:h,f:g[h]});var u=t.length,P=t.slice();if(!u)return{t:sM,l:0};if(u==1){var O=new So(t[0].s+1);return O[t[0].s]=1,{t:O,l:1}}t.sort(function(s,ir){return s.f-ir.f}),t.push({s:-1,f:25001});var m=t[0],R=t[1],X=0,W=1,q=2;t[0]={s:-1,f:m.f+R.f,l:m,r:R};while(W!=u-1)m=t[t[X].f<t[q].f?X++:q++],R=t[X!=W&&t[X].f<t[q].f?X++:q++],t[W++]={s:-1,f:m.f+R.f,l:m,r:R};var G=P[0].s;for(var h=1;h<u;++h)if(P[h].s>G)G=P[h].s;var L=new Xg(G+1),S=F6(t[W-1],L,0);if(S>i){var h=0,I=0,k=S-i,j=1<<k;P.sort(function(ir,Z){return L[Z.s]-L[ir.s]||ir.f-Z.f});for(;h<u;++h){var Pr=P[h].s;if(L[Pr]>i)I+=j-(1<<S-L[Pr]),L[Pr]=i;else break}I>>=k;while(I>0){var lr=P[h].s;if(L[lr]<i)I-=1<<i-L[lr]++-1;else++h}for(;h>=0&&I;--h){var f=P[h].s;if(L[f]==i)--L[f],++I}S=i}return{t:new So(L),l:S}},F6=function(g,i,t){return g.s==-1?Math.max(F6(g.l,i,t+1),F6(g.r,i,t+1)):i[g.s]=t},cM=function(g){var i=g.length;while(i&&!g[--i]);var t=new Xg(++i),h=0,u=g[0],P=1,O=function(R){t[h++]=R};for(var m=1;m<=i;++m)if(g[m]==u&&m!=i)++P;else{if(!u&&P>2){for(;P>138;P-=138)O(32754);if(P>2)O(P>10?P-11<<5|28690:P-3<<5|12305),P=0}else if(P>3){O(u),--P;for(;P>6;P-=6)O(8304);if(P>2)O(P-3<<5|8208),P=0}while(P--)O(u);P=1,u=g[m]}return{c:t.subarray(0,h),n:i}},q1=function(g,i){var t=0;for(var h=0;h<i.length;++h)t+=g[h]*i[h];return t},dM=function(g,i,t){var h=t.length,u=C6(i+2);g[u]=h&255,g[u+1]=h>>8,g[u+2]=g[u]^255,g[u+3]=g[u+1]^255;for(var P=0;P<h;++P)g[u+P+4]=t[P];return(u+4+h)*8},yM=function(g,i,t,h,u,P,O,m,R,X,W){Gi(i,W++,t),++u[256];var q=U6(u,15),G=q.t,L=q.l,S=U6(P,15),I=S.t,k=S.l,j=cM(G),Pr=j.c,lr=j.n,f=cM(I),s=f.c,ir=f.n,Z=new Xg(19);for(var y=0;y<Pr.length;++y)++Z[Pr[y]&31];for(var y=0;y<s.length;++y)++Z[s[y]&31];var p=U6(Z,7),N=p.t,Rr=p.l,qr=19;for(;qr>4&&!N[L6[qr-1]];--qr);var Wr=X+5<<3,Cr=q1(u,Qn)+q1(P,H1)+O,a=q1(u,G)+q1(P,I)+O+14+3*qr+q1(Z,N)+2*Z[16]+3*Z[17]+7*Z[18];if(R>=0&&Wr<=Cr&&Wr<=a)return dM(i,W,g.subarray(R,R+X));var or,nr,Kr,Xr;if(Gi(i,W,1+(a<Cr)),W+=2,a<Cr){or=yl(G,L,0),nr=G,Kr=yl(I,k,0),Xr=I;var c=yl(N,Rr,0);Gi(i,W,lr-257),Gi(i,W+5,ir-1),Gi(i,W+10,qr-4),W+=14;for(var y=0;y<qr;++y)Gi(i,W+3*y,N[L6[y]]);W+=3*qr;var T=[Pr,s];for(var tr=0;tr<2;++tr){var Hr=T[tr];for(var y=0;y<Hr.length;++y){var _=Hr[y]&31;if(Gi(i,W,c[_]),W+=N[_],_>15)Gi(i,W,Hr[y]>>5&127),W+=Hr[y]>>12}}}else or=OQ,nr=Qn,Kr=AQ,Xr=H1;for(var y=0;y<m;++y){var Yr=h[y];if(Yr>255){var _=Yr>>18&31;if(A1(i,W,or[_+257]),W+=nr[_+257],_>7)Gi(i,W,Yr>>23&31),W+=O5[_];var gr=Yr&31;if(A1(i,W,Kr[gr]),W+=Xr[gr],gr>3)A1(i,W,Yr>>5&8191),W+=m5[gr]}else A1(i,W,or[Yr]),W+=nr[Yr]}return A1(i,W,or[256]),W+nr[256]},RQ=new B6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),sM=new So(0),WQ=function(g,i,t,h,u,P){var O=P.z||g.length,m=new So(h+O+5*(1+Math.ceil(O/7000))+u),R=m.subarray(h,m.length-u),X=P.l,W=(P.r||0)&7;if(i){if(W)R[0]=P.r>>3;var q=RQ[i-1],G=q>>13,L=q&8191,S=(1<<t)-1,I=P.p||new Xg(32768),k=P.h||new Xg(S+1),j=Math.ceil(t/3),Pr=2*j,lr=function(eg){return(g[eg]^g[eg+1]<<j^g[eg+2]<<Pr)&S},f=new B6(25000),s=new Xg(288),ir=new Xg(32),Z=0,y=0,p=P.i||0,N=0,Rr=P.w||0,qr=0;for(;p+2<O;++p){var Wr=lr(p),Cr=p&32767,a=k[Wr];if(I[Cr]=a,k[Wr]=Cr,Rr<=p){var or=O-p;if((Z>7000||N>24576)&&(or>423||!X)){W=yM(g,R,0,f,s,ir,y,N,qr,p-qr,W),N=Z=y=0,qr=p;for(var nr=0;nr<286;++nr)s[nr]=0;for(var nr=0;nr<30;++nr)ir[nr]=0}var Kr=2,Xr=0,c=L,T=Cr-a&32767;if(or>2&&Wr==lr(p-T)){var tr=Math.min(G,or)-1,Hr=Math.min(32767,p),_=Math.min(258,or);while(T<=Hr&&--c&&Cr!=a){if(g[p+Kr]==g[p+Kr-T]){var Yr=0;for(;Yr<_&&g[p+Yr]==g[p+Yr-T];++Yr);if(Yr>Kr){if(Kr=Yr,Xr=T,Yr>tr)break;var gr=Math.min(T,Yr-2),xr=0;for(var nr=0;nr<gr;++nr){var yr=p-T+nr&32767,Po=I[yr],te=yr-Po&32767;if(te>xr)xr=te,a=yr}}}Cr=a,a=I[Cr],T+=Cr-a&32767}}if(Xr){f[N++]=268435456|x6[Kr]<<18|DM[Xr];var hr=x6[Kr]&31,Ve=DM[Xr]&31;y+=O5[hr]+m5[Ve],++s[257+hr],++ir[Ve],Rr=p+Kr,++Z}else f[N++]=g[p],++s[g[p]]}}for(p=Math.max(p,Rr);p<O;++p)f[N++]=g[p],++s[g[p]];if(W=yM(g,R,X,f,s,ir,y,N,qr,p-qr,W),!X)P.r=W&7|R[W/8|0]<<3,W-=7,P.h=k,P.p=I,P.i=p,P.w=Rr}else{for(var p=P.w||0;p<O+X;p+=65535){var Qe=p+65535;if(Qe>=O)R[W/8|0]=X,Qe=O;W=dM(R,W+1,g.subarray(p,Qe))}P.i=O}return M1(m,0,h+C6(W)+u)},GQ=function(){var g=new Int32Array(256);for(var i=0;i<256;++i){var t=i,h=9;while(--h)t=(t&1&&-306674912)^t>>>1;g[i]=t}return g}(),XQ=function(){var g=-1;return{p:function(i){var t=g;for(var h=0;h<i.length;++h)t=GQ[t&255^i[h]]^t>>>8;g=t},d:function(){return~g}}};var YQ=function(g,i,t,h,u){if(!u){if(u={l:1},i.dictionary){var P=i.dictionary.subarray(-32768),O=new So(P.length+g.length);O.set(P),O.set(g,P.length),g=O,u.w=P.length}}return WQ(g,i.level==null?6:i.level,i.mem==null?u.l?Math.ceil(Math.max(8,Math.min(13,Math.log(g.length)))*1.5):20:12+i.mem,t,h,u)},r9=function(g,i){var t={};for(var h in g)t[h]=g[h];for(var h in i)t[h]=i[h];return t};var cl=function(g,i){return g[i]|g[i+1]<<8},ll=function(g,i){return(g[i]|g[i+1]<<8|g[i+2]<<16|g[i+3]<<24)>>>0},$6=function(g,i){return ll(g,i)+ll(g,i+4)*4294967296},Je=function(g,i,t){for(;t;++i)g[i]=t,t>>>=8};function JQ(g,i){return YQ(g,i||{},0,0)}function zQ(g,i){return MQ(g,{i:2},i&&i.out,i&&i.dictionary)}var o9=function(g,i,t,h){for(var u in g){var P=g[u],O=i+u,m=h;if(Array.isArray(P))m=r9(h,P[1]),P=P[0];if(P instanceof So)t[O]=[P,m];else t[O+="/"]=[new So(0),m],o9(P,O,t,h)}},VM=typeof TextEncoder<"u"&&new TextEncoder,N6=typeof TextDecoder<"u"&&new TextDecoder,QQ=0;try{N6.decode(sM,{stream:!0}),QQ=1}catch(g){}var KQ=function(g){for(var i="",t=0;;){var h=g[t++],u=(h>127)+(h>223)+(h>239);if(t+u>g.length)return{s:i,r:M1(g,t-1)};if(!u)i+=String.fromCharCode(h);else if(u==3)h=((h&15)<<18|(g[t++]&63)<<12|(g[t++]&63)<<6|g[t++]&63)-65536,i+=String.fromCharCode(55296|h>>10,56320|h&1023);else if(u&1)i+=String.fromCharCode((h&31)<<6|g[t++]&63);else i+=String.fromCharCode((h&15)<<12|(g[t++]&63)<<6|g[t++]&63)}};function P5(g,i){if(i){var t=new So(g.length);for(var h=0;h<g.length;++h)t[h]=g.charCodeAt(h);return t}if(VM)return VM.encode(g);var u=g.length,P=new So(g.length+(g.length>>1)),O=0,m=function(W){P[O++]=W};for(var h=0;h<u;++h){if(O+5>P.length){var R=new So(O+8+(u-h<<1));R.set(P),P=R}var X=g.charCodeAt(h);if(X<128||i)m(X);else if(X<2048)m(192|X>>6),m(128|X&63);else if(X>55295&&X<57344)X=65536+(X&1047552)|g.charCodeAt(++h)&1023,m(240|X>>18),m(128|X>>12&63),m(128|X>>6&63),m(128|X&63);else m(224|X>>12),m(128|X>>6&63),m(128|X&63)}return M1(P,0,O)}function S6(g,i){if(i){var t="";for(var h=0;h<g.length;h+=16384)t+=String.fromCharCode.apply(null,g.subarray(h,h+16384));return t}else if(N6)return N6.decode(g);else{var u=KQ(g),P=u.s,t=u.r;if(t.length)De(8);return P}}var UQ=function(g,i){return i+30+cl(g,i+26)+cl(g,i+28)},$Q=function(g,i,t){var h=cl(g,i+28),u=S6(g.subarray(i+46,i+46+h),!(cl(g,i+8)&2048)),P=i+46+h,O=ll(g,i+20),m=t&&O==4294967295?LQ(g,P):[O,ll(g,i+24),ll(g,i+42)],R=m[0],X=m[1],W=m[2];return[cl(g,i+10),R,X,u,P+cl(g,i+30)+cl(g,i+32),W]},LQ=function(g,i){for(;cl(g,i)!=1;i+=4+cl(g,i+2));return[$6(g,i+12),$6(g,i+4),$6(g,i+20)]},Z6=function(g){var i=0;if(g)for(var t in g){var h=g[t].length;if(h>65535)De(9);i+=h+4}return i},_M=function(g,i,t,h,u,P,O,m){var R=h.length,X=t.extra,W=m&&m.length,q=Z6(X);if(Je(g,i,O!=null?33639248:67324752),i+=4,O!=null)g[i++]=20,g[i++]=t.os;g[i]=20,i+=2,g[i++]=t.flag<<1|(P<0&&8),g[i++]=u&&8,g[i++]=t.compression&255,g[i++]=t.compression>>8;var G=new Date(t.mtime==null?Date.now():t.mtime),L=G.getFullYear()-1980;if(L<0||L>119)De(10);if(Je(g,i,L<<25|G.getMonth()+1<<21|G.getDate()<<16|G.getHours()<<11|G.getMinutes()<<5|G.getSeconds()>>1),i+=4,P!=-1)Je(g,i,t.crc),Je(g,i+4,P<0?-P-2:P),Je(g,i+8,t.size);if(Je(g,i+12,R),Je(g,i+14,q),i+=16,O!=null)Je(g,i,W),Je(g,i+6,t.attrs),Je(g,i+10,O),i+=14;if(g.set(h,i),i+=R,q)for(var S in X){var I=X[S],k=I.length;Je(g,i,+S),Je(g,i+2,k),g.set(I,i+4),i+=4+k}if(W)g.set(m,i),i+=W;return i},xQ=function(g,i,t,h,u){Je(g,i,101010256),Je(g,i+8,t),Je(g,i+10,t),Je(g,i+12,h),Je(g,i+16,u)};function e9(g,i){if(!i)i={};var t={},h=[];o9(g,"",t,i);var u=0,P=0;for(var O in t){var m=t[O],R=m[0],X=m[1],W=X.level==0?0:8,q=P5(O),G=q.length,L=X.comment,S=L&&P5(L),I=S&&S.length,k=Z6(X.extra);if(G>65535)De(11);var j=W?JQ(R,X):R,Pr=j.length,lr=XQ();lr.p(R),h.push(r9(X,{size:R.length,crc:lr.d(),c:j,f:q,m:S,u:G!=O.length||S&&L.length!=I,o:u,compression:W})),u+=30+G+k+Pr,P+=76+2*(G+k)+(I||0)+Pr}var f=new So(P+22),s=u,ir=P-u;for(var Z=0;Z<h.length;++Z){var q=h[Z];_M(f,q.o,q,q.f,q.u,q.c.length);var y=30+q.f.length+Z6(q.extra);f.set(q.c,q.o+y),_M(f,u,q,q.f,q.u,q.c.length,q.o,q.m),u+=16+y+(q.m?q.m.length:0)}return xQ(f,u,h.length,ir,s),f}function g9(g,i){var t={},h=g.length-22;for(;ll(g,h)!=101010256;--h)if(!h||g.length-h>65558)De(13);var u=cl(g,h+8);if(!u)return{};var P=ll(g,h+16),O=P==4294967295||u==65535;if(O){var m=ll(g,h-12);if(O=ll(g,m)==101075792,O)u=ll(g,m+32),P=ll(g,m+48)}var R=i&&i.filter;for(var X=0;X<u;++X){var W=$Q(g,P,O),q=W[0],G=W[1],L=W[2],S=W[3],I=W[4],k=W[5],j=UQ(g,k);if(P=I,!R||R({name:S,size:G,originalSize:L,compression:q}))if(!q)t[S]=M1(g,j,j+G);else if(q==8)t[S]=zQ(g.subarray(j,j+G),{out:new So(L)});else De(14,"unknown compression type "+q)}return t}function T6(g){let i=g.map((h)=>({name:h.name,code:h.code,type:h.type,triggers:h.triggers,bindings:h.bindings,folder:h.folder,metadata:h.metadata})),t={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:i};return e9({"pack.json":P5(JSON.stringify(t,null,2))})}function l9(g,i){let t=T6(g),h=new Blob([t.buffer],{type:"application/zip"}),u=URL.createObjectURL(h),P=document.createElement("a");P.href=u,P.download=`${i}.lumiscript.zip`,P.click(),URL.revokeObjectURL(u)}var i9;function E(g,i,t){function h(m,R){if(!m._zod)Object.defineProperty(m,"_zod",{value:{def:R,constr:O,traits:new Set},enumerable:!1});if(m._zod.traits.has(g))return;m._zod.traits.add(g),i(m,R);let X=O.prototype,W=Object.keys(X);for(let q=0;q<W.length;q++){let G=W[q];if(!(G in m))m[G]=X[G].bind(m)}}let u=t?.Parent??Object;class P extends u{}Object.defineProperty(P,"name",{value:g});function O(m){var R;let X=t?.Parent?new P:this;h(X,m),(R=X._zod).deferred??(R.deferred=[]);for(let W of X._zod.deferred)W();return X}return Object.defineProperty(O,"init",{value:h}),Object.defineProperty(O,Symbol.hasInstance,{value:(m)=>{if(t?.Parent&&m instanceof t.Parent)return!0;return m?._zod?.traits?.has(g)}}),Object.defineProperty(O,"name",{value:g}),O}var aco=Symbol("zod_brand");class Xi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class R1 extends Error{constructor(g){super(`Encountered unidirectional transform during encode: ${g}`);this.name="ZodEncodeError"}}(i9=globalThis).__zod_globalConfig??(i9.__zod_globalConfig={});var jt=globalThis.__zod_globalConfig;function Yi(g){if(g)Object.assign(jt,g);return jt}var Ao={};DJ(Ao,{unwrapMessage:()=>W1,uint8ArrayToHex:()=>iK,uint8ArrayToBase64url:()=>gK,uint8ArrayToBase64:()=>m9,stringifyPrimitive:()=>b9,slugify:()=>a6,shallowClone:()=>t9,safeExtend:()=>pQ,required:()=>sQ,randomString:()=>DQ,propertyKeyTypes:()=>c6,promiseAllObject:()=>aQ,primitiveTypes:()=>h9,prefixIssues:()=>z1,pick:()=>_Q,partial:()=>dQ,parsedType:()=>rK,optionalKeys:()=>y6,omit:()=>EQ,objectClone:()=>SQ,numKeys:()=>cQ,nullish:()=>Y1,normalizeParams:()=>cr,mergeDefs:()=>Ji,merge:()=>jQ,jsonStringifyReplacer:()=>st,joinValues:()=>CQ,issue:()=>r0,isPlainObject:()=>Zv,isObject:()=>dt,hexToUint8Array:()=>lK,getSizableOrigin:()=>P9,getParsedType:()=>yQ,getLengthableOrigin:()=>Q1,getEnumValues:()=>G1,getElementAtPath:()=>kQ,floatSafeRemainder:()=>v9,finalizeIssue:()=>Vl,extend:()=>fQ,explicitlyAborted:()=>V6,escapeRegex:()=>zi,esc:()=>A5,defineLazy:()=>mo,createTransparentProxy:()=>VQ,cloneDef:()=>TQ,clone:()=>il,cleanRegex:()=>J1,cleanEnum:()=>oK,captureStackTrace:()=>q5,cached:()=>X1,base64urlToUint8Array:()=>eK,base64ToUint8Array:()=>O9,assignProp:()=>Kn,assertNotEqual:()=>FQ,assertNever:()=>ZQ,assertIs:()=>NQ,assertEqual:()=>IQ,assert:()=>BQ,allowsEval:()=>D6,aborted:()=>Un,NUMBER_FORMAT_RANGES:()=>u9,Class:()=>A9,BIGINT_FORMAT_RANGES:()=>w9});function IQ(g){return g}function FQ(g){return g}function NQ(g){}function ZQ(g){throw Error("Unexpected value in exhaustive check")}function BQ(g){}function G1(g){let i=Object.values(g).filter((h)=>typeof h==="number");return Object.entries(g).filter(([h,u])=>i.indexOf(+h)===-1).map(([h,u])=>u)}function CQ(g,i="|"){return g.map((t)=>b9(t)).join(i)}function st(g,i){if(typeof i==="bigint")return i.toString();return i}function X1(g){return{get value(){{let t=g();return Object.defineProperty(this,"value",{value:t}),t}throw Error("cached value already set")}}}function Y1(g){return g===null||g===void 0}function J1(g){let i=g.startsWith("^")?1:0,t=g.endsWith("$")?g.length-1:g.length;return g.slice(i,t)}function v9(g,i){let t=g/i,h=Math.round(t),u=Number.EPSILON*Math.max(Math.abs(t),1);if(Math.abs(t-h)<u)return 0;return t-h}var n9=Symbol("evaluating");function mo(g,i,t){let h=void 0;Object.defineProperty(g,i,{get(){if(h===n9)return;if(h===void 0)h=n9,h=t();return h},set(u){Object.defineProperty(g,i,{value:u})},configurable:!0})}function SQ(g){return Object.create(Object.getPrototypeOf(g),Object.getOwnPropertyDescriptors(g))}function Kn(g,i,t){Object.defineProperty(g,i,{value:t,writable:!0,enumerable:!0,configurable:!0})}function Ji(...g){let i={};for(let t of g){let h=Object.getOwnPropertyDescriptors(t);Object.assign(i,h)}return Object.defineProperties({},i)}function TQ(g){return Ji(g._zod.def)}function kQ(g,i){if(!i)return g;return i.reduce((t,h)=>t?.[h],g)}function aQ(g){let i=Object.keys(g),t=i.map((h)=>g[h]);return Promise.all(t).then((h)=>{let u={};for(let P=0;P<i.length;P++)u[i[P]]=h[P];return u})}function DQ(g=10){let t="";for(let h=0;h<g;h++)t+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return t}function A5(g){return JSON.stringify(g)}function a6(g){return g.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var q5="captureStackTrace"in Error?Error.captureStackTrace:(...g)=>{};function dt(g){return typeof g==="object"&&g!==null&&!Array.isArray(g)}var D6=X1(()=>{if(jt.jitless)return!1;if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(g){return!1}});function Zv(g){if(dt(g)===!1)return!1;let i=g.constructor;if(i===void 0)return!0;if(typeof i!=="function")return!0;let t=i.prototype;if(dt(t)===!1)return!1;if(Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)return!1;return!0}function t9(g){if(Zv(g))return{...g};if(Array.isArray(g))return[...g];if(g instanceof Map)return new Map(g);if(g instanceof Set)return new Set(g);return g}function cQ(g){let i=0;for(let t in g)if(Object.prototype.hasOwnProperty.call(g,t))i++;return i}var yQ=(g)=>{let i=typeof g;switch(i){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(g)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(g))return"array";if(g===null)return"null";if(g.then&&typeof g.then==="function"&&g.catch&&typeof g.catch==="function")return"promise";if(typeof Map<"u"&&g instanceof Map)return"map";if(typeof Set<"u"&&g instanceof Set)return"set";if(typeof Date<"u"&&g instanceof Date)return"date";if(typeof File<"u"&&g instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${i}`)}},c6=new Set(["string","number","symbol"]),h9=new Set(["string","number","bigint","boolean","symbol","undefined"]);function zi(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function il(g,i,t){let h=new g._zod.constr(i??g._zod.def);if(!i||t?.parent)h._zod.parent=g;return h}function cr(g){let i=g;if(!i)return{};if(typeof i==="string")return{error:()=>i};if(i?.message!==void 0){if(i?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");i.error=i.message}if(delete i.message,typeof i.error==="string")return{...i,error:()=>i.error};return i}function VQ(g){let i;return new Proxy({},{get(t,h,u){return i??(i=g()),Reflect.get(i,h,u)},set(t,h,u,P){return i??(i=g()),Reflect.set(i,h,u,P)},has(t,h){return i??(i=g()),Reflect.has(i,h)},deleteProperty(t,h){return i??(i=g()),Reflect.deleteProperty(i,h)},ownKeys(t){return i??(i=g()),Reflect.ownKeys(i)},getOwnPropertyDescriptor(t,h){return i??(i=g()),Reflect.getOwnPropertyDescriptor(i,h)},defineProperty(t,h,u){return i??(i=g()),Reflect.defineProperty(i,h,u)}})}function b9(g){if(typeof g==="bigint")return g.toString()+"n";if(typeof g==="string")return`"${g}"`;return`${g}`}function y6(g){return Object.keys(g).filter((i)=>{return g[i]._zod.optin==="optional"&&g[i]._zod.optout==="optional"})}var u9={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},w9={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function _Q(g,i){let t=g._zod.def,h=t.checks;if(h&&h.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let P=Ji(g._zod.def,{get shape(){let O={};for(let m in i){if(!(m in t.shape))throw Error(`Unrecognized key: "${m}"`);if(!i[m])continue;O[m]=t.shape[m]}return Kn(this,"shape",O),O},checks:[]});return il(g,P)}function EQ(g,i){let t=g._zod.def,h=t.checks;if(h&&h.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let P=Ji(g._zod.def,{get shape(){let O={...g._zod.def.shape};for(let m in i){if(!(m in t.shape))throw Error(`Unrecognized key: "${m}"`);if(!i[m])continue;delete O[m]}return Kn(this,"shape",O),O},checks:[]});return il(g,P)}function fQ(g,i){if(!Zv(i))throw Error("Invalid input to extend: expected a plain object");let t=g._zod.def.checks;if(t&&t.length>0){let P=g._zod.def.shape;for(let O in i)if(Object.getOwnPropertyDescriptor(P,O)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let u=Ji(g._zod.def,{get shape(){let P={...g._zod.def.shape,...i};return Kn(this,"shape",P),P}});return il(g,u)}function pQ(g,i){if(!Zv(i))throw Error("Invalid input to safeExtend: expected a plain object");let t=Ji(g._zod.def,{get shape(){let h={...g._zod.def.shape,...i};return Kn(this,"shape",h),h}});return il(g,t)}function jQ(g,i){if(g._zod.def.checks?.length)throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");let t=Ji(g._zod.def,{get shape(){let h={...g._zod.def.shape,...i._zod.def.shape};return Kn(this,"shape",h),h},get catchall(){return i._zod.def.catchall},checks:i._zod.def.checks??[]});return il(g,t)}function dQ(g,i,t){let u=i._zod.def.checks;if(u&&u.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let O=Ji(i._zod.def,{get shape(){let m=i._zod.def.shape,R={...m};if(t)for(let X in t){if(!(X in m))throw Error(`Unrecognized key: "${X}"`);if(!t[X])continue;R[X]=g?new g({type:"optional",innerType:m[X]}):m[X]}else for(let X in m)R[X]=g?new g({type:"optional",innerType:m[X]}):m[X];return Kn(this,"shape",R),R},checks:[]});return il(i,O)}function sQ(g,i,t){let h=Ji(i._zod.def,{get shape(){let u=i._zod.def.shape,P={...u};if(t)for(let O in t){if(!(O in P))throw Error(`Unrecognized key: "${O}"`);if(!t[O])continue;P[O]=new g({type:"nonoptional",innerType:u[O]})}else for(let O in u)P[O]=new g({type:"nonoptional",innerType:u[O]});return Kn(this,"shape",P),P}});return il(i,h)}function Un(g,i=0){if(g.aborted===!0)return!0;for(let t=i;t<g.issues.length;t++)if(g.issues[t]?.continue!==!0)return!0;return!1}function V6(g,i=0){if(g.aborted===!0)return!0;for(let t=i;t<g.issues.length;t++)if(g.issues[t]?.continue===!1)return!0;return!1}function z1(g,i){return i.map((t)=>{var h;return(h=t).path??(h.path=[]),t.path.unshift(g),t})}function W1(g){return typeof g==="string"?g:g?.message}function Vl(g,i,t){let h=g.message?g.message:W1(g.inst?._zod.def?.error?.(g))??W1(i?.error?.(g))??W1(t.customError?.(g))??W1(t.localeError?.(g))??"Invalid input",{inst:u,continue:P,input:O,...m}=g;if(m.path??(m.path=[]),m.message=h,i?.reportInput)m.input=O;return m}function P9(g){if(g instanceof Set)return"set";if(g instanceof Map)return"map";if(g instanceof File)return"file";return"unknown"}function Q1(g){if(Array.isArray(g))return"array";if(typeof g==="string")return"string";return"unknown"}function rK(g){let i=typeof g;switch(i){case"number":return Number.isNaN(g)?"nan":"number";case"object":{if(g===null)return"null";if(Array.isArray(g))return"array";let t=g;if(t&&Object.getPrototypeOf(t)!==Object.prototype&&"constructor"in t&&t.constructor)return t.constructor.name}}return i}function r0(...g){let[i,t,h]=g;if(typeof i==="string")return{message:i,code:"custom",input:t,inst:h};return{...i}}function oK(g){return Object.entries(g).filter(([i,t])=>{return Number.isNaN(Number.parseInt(i,10))}).map((i)=>i[1])}function O9(g){let i=atob(g),t=new Uint8Array(i.length);for(let h=0;h<i.length;h++)t[h]=i.charCodeAt(h);return t}function m9(g){let i="";for(let t=0;t<g.length;t++)i+=String.fromCharCode(g[t]);return btoa(i)}function eK(g){let i=g.replace(/-/g,"+").replace(/_/g,"/"),t="=".repeat((4-i.length%4)%4);return O9(i+t)}function gK(g){return m9(g).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function lK(g){let i=g.replace(/^0x/,"");if(i.length%2!==0)throw Error("Invalid hex string length");let t=new Uint8Array(i.length/2);for(let h=0;h<i.length;h+=2)t[h/2]=Number.parseInt(i.slice(h,h+2),16);return t}function iK(g){return Array.from(g).map((i)=>i.toString(16).padStart(2,"0")).join("")}class A9{constructor(...g){}}var q9=(g,i)=>{g.name="$ZodError",Object.defineProperty(g,"_zod",{value:g._zod,enumerable:!1}),Object.defineProperty(g,"issues",{value:i,enumerable:!1}),g.message=JSON.stringify(i,st,2),Object.defineProperty(g,"toString",{value:()=>g.message,enumerable:!1})},H5=E("$ZodError",q9),_6=E("$ZodError",q9,{Parent:Error});function H9(g,i=(t)=>t.message){let t={},h=[];for(let u of g.issues)if(u.path.length>0)t[u.path[0]]=t[u.path[0]]||[],t[u.path[0]].push(i(u));else h.push(i(u));return{formErrors:h,fieldErrors:t}}function M9(g,i=(t)=>t.message){let t={_errors:[]},h=(u,P=[])=>{for(let O of u.issues)if(O.code==="invalid_union"&&O.errors.length)O.errors.map((m)=>h({issues:m},[...P,...O.path]));else if(O.code==="invalid_key")h({issues:O.issues},[...P,...O.path]);else if(O.code==="invalid_element")h({issues:O.issues},[...P,...O.path]);else{let m=[...P,...O.path];if(m.length===0)t._errors.push(i(O));else{let R=t,X=0;while(X<m.length){let W=m[X];if(X!==m.length-1)R[W]=R[W]||{_errors:[]};else R[W]=R[W]||{_errors:[]},R[W]._errors.push(i(O));R=R[W],X++}}}};return h(g),t}var M5=(g)=>(i,t,h,u)=>{let P=h?{...h,async:!1}:{async:!1},O=i._zod.run({value:t,issues:[]},P);if(O instanceof Promise)throw new Xi;if(O.issues.length){let m=new(u?.Err??g)(O.issues.map((R)=>Vl(R,P,Yi())));throw q5(m,u?.callee),m}return O.value};var R5=(g)=>async(i,t,h,u)=>{let P=h?{...h,async:!0}:{async:!0},O=i._zod.run({value:t,issues:[]},P);if(O instanceof Promise)O=await O;if(O.issues.length){let m=new(u?.Err??g)(O.issues.map((R)=>Vl(R,P,Yi())));throw q5(m,u?.callee),m}return O.value};var K1=(g)=>(i,t,h)=>{let u=h?{...h,async:!1}:{async:!1},P=i._zod.run({value:t,issues:[]},u);if(P instanceof Promise)throw new Xi;return P.issues.length?{success:!1,error:new(g??H5)(P.issues.map((O)=>Vl(O,u,Yi())))}:{success:!0,data:P.value}},R9=K1(_6),U1=(g)=>async(i,t,h)=>{let u=h?{...h,async:!0}:{async:!0},P=i._zod.run({value:t,issues:[]},u);if(P instanceof Promise)P=await P;return P.issues.length?{success:!1,error:new g(P.issues.map((O)=>Vl(O,u,Yi())))}:{success:!0,data:P.value}},W9=U1(_6),G9=(g)=>(i,t,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return M5(g)(i,t,u)};var X9=(g)=>(i,t,h)=>{return M5(g)(i,t,h)};var Y9=(g)=>async(i,t,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return R5(g)(i,t,u)};var J9=(g)=>async(i,t,h)=>{return R5(g)(i,t,h)};var z9=(g)=>(i,t,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return K1(g)(i,t,u)};var Q9=(g)=>(i,t,h)=>{return K1(g)(i,t,h)};var K9=(g)=>async(i,t,h)=>{let u=h?{...h,direction:"backward"}:{direction:"backward"};return U1(g)(i,t,u)};var U9=(g)=>async(i,t,h)=>{return U1(g)(i,t,h)};var $9=/^[cC][0-9a-z]{6,}$/,L9=/^[0-9a-z]+$/,x9=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,I9=/^[0-9a-vA-V]{20}$/,F9=/^[A-Za-z0-9]{27}$/,N9=/^[a-zA-Z0-9_-]{21}$/,Z9=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var B9=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,E6=(g)=>{if(!g)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${g}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var C9=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var vK="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function S9(){return new RegExp(vK,"u")}var T9=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,k9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var a9=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,D9=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,c9=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,f6=/^[A-Za-z0-9_-]*$/;var y9=/^https?$/,V9=/^\+[1-9]\d{6,14}$/,_9="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",E9=new RegExp(`^${_9}$`);function f9(g){return typeof g.precision==="number"?g.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":g.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${g.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function p9(g){return new RegExp(`^${f9(g)}$`)}function j9(g){let i=f9({precision:g.precision}),t=["Z"];if(g.local)t.push("");if(g.offset)t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let h=`${i}(?:${t.join("|")})`;return new RegExp(`^${_9}T(?:${h})$`)}var d9=(g)=>{let i=g?`[\\s\\S]{${g?.minimum??0},${g?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${i}$`)};var s9=/^[^A-Z]*$/,rR=/^[^a-z]*$/;var Yg=E("$ZodCheck",(g,i)=>{var t;g._zod??(g._zod={}),g._zod.def=i,(t=g._zod).onattach??(t.onattach=[])});var oR=E("$ZodCheckMaxLength",(g,i)=>{var t;Yg.init(g,i),(t=g._zod.def).when??(t.when=(h)=>{let u=h.value;return!Y1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag.maximum??Number.POSITIVE_INFINITY;if(i.maximum<u)h._zod.bag.maximum=i.maximum}),g._zod.check=(h)=>{let u=h.value;if(u.length<=i.maximum)return;let O=Q1(u);h.issues.push({origin:O,code:"too_big",maximum:i.maximum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),eR=E("$ZodCheckMinLength",(g,i)=>{var t;Yg.init(g,i),(t=g._zod.def).when??(t.when=(h)=>{let u=h.value;return!Y1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(i.minimum>u)h._zod.bag.minimum=i.minimum}),g._zod.check=(h)=>{let u=h.value;if(u.length>=i.minimum)return;let O=Q1(u);h.issues.push({origin:O,code:"too_small",minimum:i.minimum,inclusive:!0,input:u,inst:g,continue:!i.abort})}}),gR=E("$ZodCheckLengthEquals",(g,i)=>{var t;Yg.init(g,i),(t=g._zod.def).when??(t.when=(h)=>{let u=h.value;return!Y1(u)&&u.length!==void 0}),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.minimum=i.length,u.maximum=i.length,u.length=i.length}),g._zod.check=(h)=>{let u=h.value,P=u.length;if(P===i.length)return;let O=Q1(u),m=P>i.length;h.issues.push({origin:O,...m?{code:"too_big",maximum:i.length}:{code:"too_small",minimum:i.length},inclusive:!0,exact:!0,input:h.value,inst:g,continue:!i.abort})}}),$1=E("$ZodCheckStringFormat",(g,i)=>{var t,h;if(Yg.init(g,i),g._zod.onattach.push((u)=>{let P=u._zod.bag;if(P.format=i.format,i.pattern)P.patterns??(P.patterns=new Set),P.patterns.add(i.pattern)}),i.pattern)(t=g._zod).check??(t.check=(u)=>{if(i.pattern.lastIndex=0,i.pattern.test(u.value))return;u.issues.push({origin:"string",code:"invalid_format",format:i.format,input:u.value,...i.pattern?{pattern:i.pattern.toString()}:{},inst:g,continue:!i.abort})});else(h=g._zod).check??(h.check=()=>{})}),lR=E("$ZodCheckRegex",(g,i)=>{$1.init(g,i),g._zod.check=(t)=>{if(i.pattern.lastIndex=0,i.pattern.test(t.value))return;t.issues.push({origin:"string",code:"invalid_format",format:"regex",input:t.value,pattern:i.pattern.toString(),inst:g,continue:!i.abort})}}),iR=E("$ZodCheckLowerCase",(g,i)=>{i.pattern??(i.pattern=s9),$1.init(g,i)}),nR=E("$ZodCheckUpperCase",(g,i)=>{i.pattern??(i.pattern=rR),$1.init(g,i)}),vR=E("$ZodCheckIncludes",(g,i)=>{Yg.init(g,i);let t=zi(i.includes),h=new RegExp(typeof i.position==="number"?`^.{${i.position}}${t}`:t);i.pattern=h,g._zod.onattach.push((u)=>{let P=u._zod.bag;P.patterns??(P.patterns=new Set),P.patterns.add(h)}),g._zod.check=(u)=>{if(u.value.includes(i.includes,i.position))return;u.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:i.includes,input:u.value,inst:g,continue:!i.abort})}}),tR=E("$ZodCheckStartsWith",(g,i)=>{Yg.init(g,i);let t=new RegExp(`^${zi(i.prefix)}.*`);i.pattern??(i.pattern=t),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(t)}),g._zod.check=(h)=>{if(h.value.startsWith(i.prefix))return;h.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:i.prefix,input:h.value,inst:g,continue:!i.abort})}}),hR=E("$ZodCheckEndsWith",(g,i)=>{Yg.init(g,i);let t=new RegExp(`.*${zi(i.suffix)}$`);i.pattern??(i.pattern=t),g._zod.onattach.push((h)=>{let u=h._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(t)}),g._zod.check=(h)=>{if(h.value.endsWith(i.suffix))return;h.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:i.suffix,input:h.value,inst:g,continue:!i.abort})}});var bR=E("$ZodCheckOverwrite",(g,i)=>{Yg.init(g,i),g._zod.check=(t)=>{t.value=i.tx(t.value)}});class p6{constructor(g=[]){if(this.content=[],this.indent=0,this)this.args=g}indented(g){this.indent+=1,g(this),this.indent-=1}write(g){if(typeof g==="function"){g(this,{execution:"sync"}),g(this,{execution:"async"});return}let t=g.split(`
`).filter((P)=>P),h=Math.min(...t.map((P)=>P.length-P.trimStart().length)),u=t.map((P)=>P.slice(h)).map((P)=>" ".repeat(this.indent*2)+P);for(let P of u)this.content.push(P)}compile(){let g=Function,i=this?.args,h=[...(this?.content??[""]).map((u)=>`  ${u}`)];return new g(...i,h.join(`
`))}}var wR={major:4,minor:4,patch:3};var Vo=E("$ZodType",(g,i)=>{var t;g??(g={}),g._zod.def=i,g._zod.bag=g._zod.bag||{},g._zod.version=wR;let h=[...g._zod.def.checks??[]];if(g._zod.traits.has("$ZodCheck"))h.unshift(g);for(let u of h)for(let P of u._zod.onattach)P(g);if(h.length===0)(t=g._zod).deferred??(t.deferred=[]),g._zod.deferred?.push(()=>{g._zod.run=g._zod.parse});else{let u=(O,m,R)=>{let X=Un(O),W;for(let q of m){if(q._zod.def.when){if(V6(O))continue;if(!q._zod.def.when(O))continue}else if(X)continue;let G=O.issues.length,L=q._zod.check(O);if(L instanceof Promise&&R?.async===!1)throw new Xi;if(W||L instanceof Promise)W=(W??Promise.resolve()).then(async()=>{if(await L,O.issues.length===G)return;if(!X)X=Un(O,G)});else{if(O.issues.length===G)continue;if(!X)X=Un(O,G)}}if(W)return W.then(()=>{return O});return O},P=(O,m,R)=>{if(Un(O))return O.aborted=!0,O;let X=u(m,h,R);if(X instanceof Promise){if(R.async===!1)throw new Xi;return X.then((W)=>g._zod.parse(W,R))}return g._zod.parse(X,R)};g._zod.run=(O,m)=>{if(m.skipChecks)return g._zod.parse(O,m);if(m.direction==="backward"){let X=g._zod.parse({value:O.value,issues:[]},{...m,skipChecks:!0});if(X instanceof Promise)return X.then((W)=>{return P(W,O,m)});return P(X,O,m)}let R=g._zod.parse(O,m);if(R instanceof Promise){if(m.async===!1)throw new Xi;return R.then((X)=>u(X,h,m))}return u(R,h,m)}}mo(g,"~standard",()=>({validate:(u)=>{try{let P=R9(g,u);return P.success?{value:P.data}:{issues:P.error?.issues}}catch(P){return W9(g,u).then((O)=>O.success?{value:O.data}:{issues:O.error?.issues})}},vendor:"zod",version:1}))}),Y5=E("$ZodString",(g,i)=>{Vo.init(g,i),g._zod.pattern=[...g?._zod.bag?.patterns??[]].pop()??d9(g._zod.bag),g._zod.parse=(t,h)=>{if(i.coerce)try{t.value=String(t.value)}catch(u){}if(typeof t.value==="string")return t;return t.issues.push({expected:"string",code:"invalid_type",input:t.value,inst:g}),t}}),Io=E("$ZodStringFormat",(g,i)=>{$1.init(g,i),Y5.init(g,i)}),WR=E("$ZodGUID",(g,i)=>{i.pattern??(i.pattern=B9),Io.init(g,i)}),GR=E("$ZodUUID",(g,i)=>{if(i.version){let h={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[i.version];if(h===void 0)throw Error(`Invalid UUID version: "${i.version}"`);i.pattern??(i.pattern=E6(h))}else i.pattern??(i.pattern=E6());Io.init(g,i)}),XR=E("$ZodEmail",(g,i)=>{i.pattern??(i.pattern=C9),Io.init(g,i)}),YR=E("$ZodURL",(g,i)=>{Io.init(g,i),g._zod.check=(t)=>{try{let h=t.value.trim();if(!i.normalize&&i.protocol?.source===y9.source){if(!/^https?:\/\//i.test(h)){t.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:t.value,inst:g,continue:!i.abort});return}}let u=new URL(h);if(i.hostname){if(i.hostname.lastIndex=0,!i.hostname.test(u.hostname))t.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:i.hostname.source,input:t.value,inst:g,continue:!i.abort})}if(i.protocol){if(i.protocol.lastIndex=0,!i.protocol.test(u.protocol.endsWith(":")?u.protocol.slice(0,-1):u.protocol))t.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:i.protocol.source,input:t.value,inst:g,continue:!i.abort})}if(i.normalize)t.value=u.href;else t.value=h;return}catch(h){t.issues.push({code:"invalid_format",format:"url",input:t.value,inst:g,continue:!i.abort})}}}),JR=E("$ZodEmoji",(g,i)=>{i.pattern??(i.pattern=S9()),Io.init(g,i)}),zR=E("$ZodNanoID",(g,i)=>{i.pattern??(i.pattern=N9),Io.init(g,i)}),QR=E("$ZodCUID",(g,i)=>{i.pattern??(i.pattern=$9),Io.init(g,i)}),KR=E("$ZodCUID2",(g,i)=>{i.pattern??(i.pattern=L9),Io.init(g,i)}),UR=E("$ZodULID",(g,i)=>{i.pattern??(i.pattern=x9),Io.init(g,i)}),$R=E("$ZodXID",(g,i)=>{i.pattern??(i.pattern=I9),Io.init(g,i)}),LR=E("$ZodKSUID",(g,i)=>{i.pattern??(i.pattern=F9),Io.init(g,i)}),xR=E("$ZodISODateTime",(g,i)=>{i.pattern??(i.pattern=j9(i)),Io.init(g,i)}),IR=E("$ZodISODate",(g,i)=>{i.pattern??(i.pattern=E9),Io.init(g,i)}),FR=E("$ZodISOTime",(g,i)=>{i.pattern??(i.pattern=p9(i)),Io.init(g,i)}),NR=E("$ZodISODuration",(g,i)=>{i.pattern??(i.pattern=Z9),Io.init(g,i)}),ZR=E("$ZodIPv4",(g,i)=>{i.pattern??(i.pattern=T9),Io.init(g,i),g._zod.bag.format="ipv4"}),BR=E("$ZodIPv6",(g,i)=>{i.pattern??(i.pattern=k9),Io.init(g,i),g._zod.bag.format="ipv6",g._zod.check=(t)=>{try{new URL(`http://[${t.value}]`)}catch{t.issues.push({code:"invalid_format",format:"ipv6",input:t.value,inst:g,continue:!i.abort})}}});var CR=E("$ZodCIDRv4",(g,i)=>{i.pattern??(i.pattern=a9),Io.init(g,i)}),SR=E("$ZodCIDRv6",(g,i)=>{i.pattern??(i.pattern=D9),Io.init(g,i),g._zod.check=(t)=>{let h=t.value.split("/");try{if(h.length!==2)throw Error();let[u,P]=h;if(!P)throw Error();let O=Number(P);if(`${O}`!==P)throw Error();if(O<0||O>128)throw Error();new URL(`http://[${u}]`)}catch{t.issues.push({code:"invalid_format",format:"cidrv6",input:t.value,inst:g,continue:!i.abort})}}});function TR(g){if(g==="")return!0;if(/\s/.test(g))return!1;if(g.length%4!==0)return!1;try{return atob(g),!0}catch{return!1}}var kR=E("$ZodBase64",(g,i)=>{i.pattern??(i.pattern=c9),Io.init(g,i),g._zod.bag.contentEncoding="base64",g._zod.check=(t)=>{if(TR(t.value))return;t.issues.push({code:"invalid_format",format:"base64",input:t.value,inst:g,continue:!i.abort})}});function tK(g){if(!f6.test(g))return!1;let i=g.replace(/[-_]/g,(h)=>h==="-"?"+":"/"),t=i.padEnd(Math.ceil(i.length/4)*4,"=");return TR(t)}var aR=E("$ZodBase64URL",(g,i)=>{i.pattern??(i.pattern=f6),Io.init(g,i),g._zod.bag.contentEncoding="base64url",g._zod.check=(t)=>{if(tK(t.value))return;t.issues.push({code:"invalid_format",format:"base64url",input:t.value,inst:g,continue:!i.abort})}}),DR=E("$ZodE164",(g,i)=>{i.pattern??(i.pattern=V9),Io.init(g,i)});function hK(g,i=null){try{let t=g.split(".");if(t.length!==3)return!1;let[h]=t;if(!h)return!1;let u=JSON.parse(atob(h));if("typ"in u&&u?.typ!=="JWT")return!1;if(!u.alg)return!1;if(i&&(!("alg"in u)||u.alg!==i))return!1;return!0}catch{return!1}}var cR=E("$ZodJWT",(g,i)=>{Io.init(g,i),g._zod.check=(t)=>{if(hK(t.value,i.alg))return;t.issues.push({code:"invalid_format",format:"jwt",input:t.value,inst:g,continue:!i.abort})}});var yR=E("$ZodUnknown",(g,i)=>{Vo.init(g,i),g._zod.parse=(t)=>t}),VR=E("$ZodNever",(g,i)=>{Vo.init(g,i),g._zod.parse=(t,h)=>{return t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:g}),t}});function PR(g,i,t){if(g.issues.length)i.issues.push(...z1(t,g.issues));i.value[t]=g.value}var _R=E("$ZodArray",(g,i)=>{Vo.init(g,i),g._zod.parse=(t,h)=>{let u=t.value;if(!Array.isArray(u))return t.issues.push({expected:"array",code:"invalid_type",input:u,inst:g}),t;t.value=Array(u.length);let P=[];for(let O=0;O<u.length;O++){let m=u[O],R=i.element._zod.run({value:m,issues:[]},h);if(R instanceof Promise)P.push(R.then((X)=>PR(X,t,O)));else PR(R,t,O)}if(P.length)return Promise.all(P).then(()=>t);return t}});function X5(g,i,t,h,u,P){let O=t in h;if(g.issues.length){if(u&&P&&!O)return;i.issues.push(...z1(t,g.issues))}if(!O&&!u){if(!g.issues.length)i.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[t]});return}if(g.value===void 0){if(O)i.value[t]=void 0}else i.value[t]=g.value}function ER(g){let i=Object.keys(g.shape);for(let h of i)if(!g.shape?.[h]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${h}": expected a Zod schema`);let t=y6(g.shape);return{...g,keys:i,keySet:new Set(i),numKeys:i.length,optionalKeys:new Set(t)}}function fR(g,i,t,h,u,P){let O=[],m=u.keySet,R=u.catchall._zod,X=R.def.type,W=R.optin==="optional",q=R.optout==="optional";for(let G in i){if(G==="__proto__")continue;if(m.has(G))continue;if(X==="never"){O.push(G);continue}let L=R.run({value:i[G],issues:[]},h);if(L instanceof Promise)g.push(L.then((S)=>X5(S,t,G,i,W,q)));else X5(L,t,G,i,W,q)}if(O.length)t.issues.push({code:"unrecognized_keys",keys:O,input:i,inst:P});if(!g.length)return t;return Promise.all(g).then(()=>{return t})}var bK=E("$ZodObject",(g,i)=>{if(Vo.init(g,i),!Object.getOwnPropertyDescriptor(i,"shape")?.get){let m=i.shape;Object.defineProperty(i,"shape",{get:()=>{let R={...m};return Object.defineProperty(i,"shape",{value:R}),R}})}let h=X1(()=>ER(i));mo(g._zod,"propValues",()=>{let m=i.shape,R={};for(let X in m){let W=m[X]._zod;if(W.values){R[X]??(R[X]=new Set);for(let q of W.values)R[X].add(q)}}return R});let u=dt,P=i.catchall,O;g._zod.parse=(m,R)=>{O??(O=h.value);let X=m.value;if(!u(X))return m.issues.push({expected:"object",code:"invalid_type",input:X,inst:g}),m;m.value={};let W=[],q=O.shape;for(let G of O.keys){let L=q[G],S=L._zod.optin==="optional",I=L._zod.optout==="optional",k=L._zod.run({value:X[G],issues:[]},R);if(k instanceof Promise)W.push(k.then((j)=>X5(j,m,G,X,S,I)));else X5(k,m,G,X,S,I)}if(!P)return W.length?Promise.all(W).then(()=>m):m;return fR(W,X,m,R,h.value,g)}}),pR=E("$ZodObjectJIT",(g,i)=>{bK.init(g,i);let t=g._zod.parse,h=X1(()=>ER(i)),u=(G)=>{let L=new p6(["shape","payload","ctx"]),S=h.value,I=(lr)=>{let f=A5(lr);return`shape[${f}]._zod.run({ value: input[${f}], issues: [] }, ctx)`};L.write("const input = payload.value;");let k=Object.create(null),j=0;for(let lr of S.keys)k[lr]=`key_${j++}`;L.write("const newResult = {};");for(let lr of S.keys){let f=k[lr],s=A5(lr),ir=G[lr],Z=ir?._zod?.optin==="optional",y=ir?._zod?.optout==="optional";if(L.write(`const ${f} = ${I(lr)};`),Z&&y)L.write(`
        if (${f}.issues.length) {
          if (${s} in input) {
            payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s}, ...iss.path] : [${s}]
            })));
          }
        }
        
        if (${f}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${f}.value;
        }
        
      `);else if(!Z)L.write(`
        const ${f}_present = ${s} in input;
        if (${f}.issues.length) {
          payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        if (!${f}_present && !${f}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${s}]
          });
        }

        if (${f}_present) {
          if (${f}.value === undefined) {
            newResult[${s}] = undefined;
          } else {
            newResult[${s}] = ${f}.value;
          }
        }

      `);else L.write(`
        if (${f}.issues.length) {
          payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s}, ...iss.path] : [${s}]
          })));
        }
        
        if (${f}.value === undefined) {
          if (${s} in input) {
            newResult[${s}] = undefined;
          }
        } else {
          newResult[${s}] = ${f}.value;
        }
        
      `)}L.write("payload.value = newResult;"),L.write("return payload;");let Pr=L.compile();return(lr,f)=>Pr(G,lr,f)},P,O=dt,m=!jt.jitless,X=m&&D6.value,W=i.catchall,q;g._zod.parse=(G,L)=>{q??(q=h.value);let S=G.value;if(!O(S))return G.issues.push({expected:"object",code:"invalid_type",input:S,inst:g}),G;if(m&&X&&L?.async===!1&&L.jitless!==!0){if(!P)P=u(i.shape);if(G=P(G,L),!W)return G;return fR([],S,G,L,q,g)}return t(G,L)}});function OR(g,i,t,h){for(let P of g)if(P.issues.length===0)return i.value=P.value,i;let u=g.filter((P)=>!Un(P));if(u.length===1)return i.value=u[0].value,u[0];return i.issues.push({code:"invalid_union",input:i.value,inst:t,errors:g.map((P)=>P.issues.map((O)=>Vl(O,h,Yi())))}),i}var jR=E("$ZodUnion",(g,i)=>{Vo.init(g,i),mo(g._zod,"optin",()=>i.options.some((h)=>h._zod.optin==="optional")?"optional":void 0),mo(g._zod,"optout",()=>i.options.some((h)=>h._zod.optout==="optional")?"optional":void 0),mo(g._zod,"values",()=>{if(i.options.every((h)=>h._zod.values))return new Set(i.options.flatMap((h)=>Array.from(h._zod.values)));return}),mo(g._zod,"pattern",()=>{if(i.options.every((h)=>h._zod.pattern)){let h=i.options.map((u)=>u._zod.pattern);return new RegExp(`^(${h.map((u)=>J1(u.source)).join("|")})$`)}return});let t=i.options.length===1?i.options[0]._zod.run:null;g._zod.parse=(h,u)=>{if(t)return t(h,u);let P=!1,O=[];for(let m of i.options){let R=m._zod.run({value:h.value,issues:[]},u);if(R instanceof Promise)O.push(R),P=!0;else{if(R.issues.length===0)return R;O.push(R)}}if(!P)return OR(O,h,g,u);return Promise.all(O).then((m)=>{return OR(m,h,g,u)})}});var dR=E("$ZodIntersection",(g,i)=>{Vo.init(g,i),g._zod.parse=(t,h)=>{let u=t.value,P=i.left._zod.run({value:u,issues:[]},h),O=i.right._zod.run({value:u,issues:[]},h);if(P instanceof Promise||O instanceof Promise)return Promise.all([P,O]).then(([R,X])=>{return mR(t,R,X)});return mR(t,P,O)}});function j6(g,i){if(g===i)return{valid:!0,data:g};if(g instanceof Date&&i instanceof Date&&+g===+i)return{valid:!0,data:g};if(Zv(g)&&Zv(i)){let t=Object.keys(i),h=Object.keys(g).filter((P)=>t.indexOf(P)!==-1),u={...g,...i};for(let P of h){let O=j6(g[P],i[P]);if(!O.valid)return{valid:!1,mergeErrorPath:[P,...O.mergeErrorPath]};u[P]=O.data}return{valid:!0,data:u}}if(Array.isArray(g)&&Array.isArray(i)){if(g.length!==i.length)return{valid:!1,mergeErrorPath:[]};let t=[];for(let h=0;h<g.length;h++){let u=g[h],P=i[h],O=j6(u,P);if(!O.valid)return{valid:!1,mergeErrorPath:[h,...O.mergeErrorPath]};t.push(O.data)}return{valid:!0,data:t}}return{valid:!1,mergeErrorPath:[]}}function mR(g,i,t){let h=new Map,u;for(let m of i.issues)if(m.code==="unrecognized_keys"){u??(u=m);for(let R of m.keys){if(!h.has(R))h.set(R,{});h.get(R).l=!0}}else g.issues.push(m);for(let m of t.issues)if(m.code==="unrecognized_keys")for(let R of m.keys){if(!h.has(R))h.set(R,{});h.get(R).r=!0}else g.issues.push(m);let P=[...h].filter(([,m])=>m.l&&m.r).map(([m])=>m);if(P.length&&u)g.issues.push({...u,keys:P});if(Un(g))return g;let O=j6(i.value,t.value);if(!O.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(O.mergeErrorPath)}`);return g.value=O.data,g}var sR=E("$ZodEnum",(g,i)=>{Vo.init(g,i);let t=G1(i.entries),h=new Set(t);g._zod.values=h,g._zod.pattern=new RegExp(`^(${t.filter((u)=>c6.has(typeof u)).map((u)=>typeof u==="string"?zi(u):u.toString()).join("|")})$`),g._zod.parse=(u,P)=>{let O=u.value;if(h.has(O))return u;return u.issues.push({code:"invalid_value",values:t,input:O,inst:g}),u}}),rW=E("$ZodLiteral",(g,i)=>{if(Vo.init(g,i),i.values.length===0)throw Error("Cannot create literal schema with no valid values");let t=new Set(i.values);g._zod.values=t,g._zod.pattern=new RegExp(`^(${i.values.map((h)=>typeof h==="string"?zi(h):h?zi(h.toString()):String(h)).join("|")})$`),g._zod.parse=(h,u)=>{let P=h.value;if(t.has(P))return h;return h.issues.push({code:"invalid_value",values:i.values,input:P,inst:g}),h}});var oW=E("$ZodTransform",(g,i)=>{Vo.init(g,i),g._zod.optin="optional",g._zod.parse=(t,h)=>{if(h.direction==="backward")throw new R1(g.constructor.name);let u=i.transform(t.value,t);if(h.async)return(u instanceof Promise?u:Promise.resolve(u)).then((O)=>{return t.value=O,t.fallback=!0,t});if(u instanceof Promise)throw new Xi;return t.value=u,t.fallback=!0,t}});function AR(g,i){if(i===void 0&&(g.issues.length||g.fallback))return{issues:[],value:void 0};return g}var d6=E("$ZodOptional",(g,i)=>{Vo.init(g,i),g._zod.optin="optional",g._zod.optout="optional",mo(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,void 0]):void 0}),mo(g._zod,"pattern",()=>{let t=i.innerType._zod.pattern;return t?new RegExp(`^(${J1(t.source)})?$`):void 0}),g._zod.parse=(t,h)=>{if(i.innerType._zod.optin==="optional"){let u=t.value,P=i.innerType._zod.run(t,h);if(P instanceof Promise)return P.then((O)=>AR(O,u));return AR(P,u)}if(t.value===void 0)return t;return i.innerType._zod.run(t,h)}}),eW=E("$ZodExactOptional",(g,i)=>{d6.init(g,i),mo(g._zod,"values",()=>i.innerType._zod.values),mo(g._zod,"pattern",()=>i.innerType._zod.pattern),g._zod.parse=(t,h)=>{return i.innerType._zod.run(t,h)}}),gW=E("$ZodNullable",(g,i)=>{Vo.init(g,i),mo(g._zod,"optin",()=>i.innerType._zod.optin),mo(g._zod,"optout",()=>i.innerType._zod.optout),mo(g._zod,"pattern",()=>{let t=i.innerType._zod.pattern;return t?new RegExp(`^(${J1(t.source)}|null)$`):void 0}),mo(g._zod,"values",()=>{return i.innerType._zod.values?new Set([...i.innerType._zod.values,null]):void 0}),g._zod.parse=(t,h)=>{if(t.value===null)return t;return i.innerType._zod.run(t,h)}}),lW=E("$ZodDefault",(g,i)=>{Vo.init(g,i),g._zod.optin="optional",mo(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(t,h)=>{if(h.direction==="backward")return i.innerType._zod.run(t,h);if(t.value===void 0)return t.value=i.defaultValue,t;let u=i.innerType._zod.run(t,h);if(u instanceof Promise)return u.then((P)=>qR(P,i));return qR(u,i)}});function qR(g,i){if(g.value===void 0)g.value=i.defaultValue;return g}var iW=E("$ZodPrefault",(g,i)=>{Vo.init(g,i),g._zod.optin="optional",mo(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(t,h)=>{if(h.direction==="backward")return i.innerType._zod.run(t,h);if(t.value===void 0)t.value=i.defaultValue;return i.innerType._zod.run(t,h)}}),nW=E("$ZodNonOptional",(g,i)=>{Vo.init(g,i),mo(g._zod,"values",()=>{let t=i.innerType._zod.values;return t?new Set([...t].filter((h)=>h!==void 0)):void 0}),g._zod.parse=(t,h)=>{let u=i.innerType._zod.run(t,h);if(u instanceof Promise)return u.then((P)=>HR(P,g));return HR(u,g)}});function HR(g,i){if(!g.issues.length&&g.value===void 0)g.issues.push({code:"invalid_type",expected:"nonoptional",input:g.value,inst:i});return g}var vW=E("$ZodCatch",(g,i)=>{Vo.init(g,i),g._zod.optin="optional",mo(g._zod,"optout",()=>i.innerType._zod.optout),mo(g._zod,"values",()=>i.innerType._zod.values),g._zod.parse=(t,h)=>{if(h.direction==="backward")return i.innerType._zod.run(t,h);let u=i.innerType._zod.run(t,h);if(u instanceof Promise)return u.then((P)=>{if(t.value=P.value,P.issues.length)t.value=i.catchValue({...t,error:{issues:P.issues.map((O)=>Vl(O,h,Yi()))},input:t.value}),t.issues=[],t.fallback=!0;return t});if(t.value=u.value,u.issues.length)t.value=i.catchValue({...t,error:{issues:u.issues.map((P)=>Vl(P,h,Yi()))},input:t.value}),t.issues=[],t.fallback=!0;return t}});var tW=E("$ZodPipe",(g,i)=>{Vo.init(g,i),mo(g._zod,"values",()=>i.in._zod.values),mo(g._zod,"optin",()=>i.in._zod.optin),mo(g._zod,"optout",()=>i.out._zod.optout),mo(g._zod,"propValues",()=>i.in._zod.propValues),g._zod.parse=(t,h)=>{if(h.direction==="backward"){let P=i.out._zod.run(t,h);if(P instanceof Promise)return P.then((O)=>G5(O,i.in,h));return G5(P,i.in,h)}let u=i.in._zod.run(t,h);if(u instanceof Promise)return u.then((P)=>G5(P,i.out,h));return G5(u,i.out,h)}});function G5(g,i,t){if(g.issues.length)return g.aborted=!0,g;return i._zod.run({value:g.value,issues:g.issues,fallback:g.fallback},t)}var hW=E("$ZodReadonly",(g,i)=>{Vo.init(g,i),mo(g._zod,"propValues",()=>i.innerType._zod.propValues),mo(g._zod,"values",()=>i.innerType._zod.values),mo(g._zod,"optin",()=>i.innerType?._zod?.optin),mo(g._zod,"optout",()=>i.innerType?._zod?.optout),g._zod.parse=(t,h)=>{if(h.direction==="backward")return i.innerType._zod.run(t,h);let u=i.innerType._zod.run(t,h);if(u instanceof Promise)return u.then(MR);return MR(u)}});function MR(g){return g.value=Object.freeze(g.value),g}var bW=E("$ZodCustom",(g,i)=>{Yg.init(g,i),Vo.init(g,i),g._zod.parse=(t,h)=>{return t},g._zod.check=(t)=>{let h=t.value,u=i.fn(h);if(u instanceof Promise)return u.then((P)=>RR(P,t,h,g));RR(u,t,h,g);return}});function RR(g,i,t,h){if(!g){let u={code:"custom",input:t,inst:h,path:[...h._zod.def.path??[]],continue:!h._zod.def.abort};if(h._zod.def.params)u.params=h._zod.def.params;i.issues.push(r0(u))}}var uW,byo=Symbol("ZodOutput"),uyo=Symbol("ZodInput");class wW{constructor(){this._map=new WeakMap,this._idmap=new Map}add(g,...i){let t=i[0];if(this._map.set(g,t),t&&typeof t==="object"&&"id"in t)this._idmap.set(t.id,g);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(g){let i=this._map.get(g);if(i&&typeof i==="object"&&"id"in i)this._idmap.delete(i.id);return this._map.delete(g),this}get(g){let i=g._zod.parent;if(i){let t={...this.get(i)??{}};delete t.id;let h={...t,...this._map.get(g)};return Object.keys(h).length?h:void 0}return this._map.get(g)}has(g){return this._map.has(g)}}function uK(){return new wW}(uW=globalThis).__zod_globalRegistry??(uW.__zod_globalRegistry=uK());var Bv=globalThis.__zod_globalRegistry;function PW(g,i){return new g({type:"string",...cr(i)})}function OW(g,i){return new g({type:"string",format:"email",check:"string_format",abort:!1,...cr(i)})}function s6(g,i){return new g({type:"string",format:"guid",check:"string_format",abort:!1,...cr(i)})}function mW(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,...cr(i)})}function AW(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...cr(i)})}function qW(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...cr(i)})}function HW(g,i){return new g({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...cr(i)})}function MW(g,i){return new g({type:"string",format:"url",check:"string_format",abort:!1,...cr(i)})}function RW(g,i){return new g({type:"string",format:"emoji",check:"string_format",abort:!1,...cr(i)})}function WW(g,i){return new g({type:"string",format:"nanoid",check:"string_format",abort:!1,...cr(i)})}function GW(g,i){return new g({type:"string",format:"cuid",check:"string_format",abort:!1,...cr(i)})}function XW(g,i){return new g({type:"string",format:"cuid2",check:"string_format",abort:!1,...cr(i)})}function YW(g,i){return new g({type:"string",format:"ulid",check:"string_format",abort:!1,...cr(i)})}function JW(g,i){return new g({type:"string",format:"xid",check:"string_format",abort:!1,...cr(i)})}function zW(g,i){return new g({type:"string",format:"ksuid",check:"string_format",abort:!1,...cr(i)})}function QW(g,i){return new g({type:"string",format:"ipv4",check:"string_format",abort:!1,...cr(i)})}function KW(g,i){return new g({type:"string",format:"ipv6",check:"string_format",abort:!1,...cr(i)})}function UW(g,i){return new g({type:"string",format:"cidrv4",check:"string_format",abort:!1,...cr(i)})}function $W(g,i){return new g({type:"string",format:"cidrv6",check:"string_format",abort:!1,...cr(i)})}function LW(g,i){return new g({type:"string",format:"base64",check:"string_format",abort:!1,...cr(i)})}function xW(g,i){return new g({type:"string",format:"base64url",check:"string_format",abort:!1,...cr(i)})}function IW(g,i){return new g({type:"string",format:"e164",check:"string_format",abort:!1,...cr(i)})}function FW(g,i){return new g({type:"string",format:"jwt",check:"string_format",abort:!1,...cr(i)})}function NW(g,i){return new g({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...cr(i)})}function ZW(g,i){return new g({type:"string",format:"date",check:"string_format",...cr(i)})}function BW(g,i){return new g({type:"string",format:"time",check:"string_format",precision:null,...cr(i)})}function CW(g,i){return new g({type:"string",format:"duration",check:"string_format",...cr(i)})}function SW(g){return new g({type:"unknown"})}function TW(g,i){return new g({type:"never",...cr(i)})}function J5(g,i){return new oR({check:"max_length",...cr(i),maximum:g})}function o0(g,i){return new eR({check:"min_length",...cr(i),minimum:g})}function z5(g,i){return new gR({check:"length_equals",...cr(i),length:g})}function r8(g,i){return new lR({check:"string_format",format:"regex",...cr(i),pattern:g})}function o8(g){return new iR({check:"string_format",format:"lowercase",...cr(g)})}function e8(g){return new nR({check:"string_format",format:"uppercase",...cr(g)})}function g8(g,i){return new vR({check:"string_format",format:"includes",...cr(i),includes:g})}function l8(g,i){return new tR({check:"string_format",format:"starts_with",...cr(i),prefix:g})}function i8(g,i){return new hR({check:"string_format",format:"ends_with",...cr(i),suffix:g})}function $n(g){return new bR({check:"overwrite",tx:g})}function n8(g){return $n((i)=>i.normalize(g))}function v8(){return $n((g)=>g.trim())}function t8(){return $n((g)=>g.toLowerCase())}function h8(){return $n((g)=>g.toUpperCase())}function b8(){return $n((g)=>a6(g))}function kW(g,i,t){return new g({type:"array",element:i,...cr(t)})}function aW(g,i,t){return new g({type:"custom",check:"custom",fn:i,...cr(t)})}function DW(g,i){let t=wK((h)=>{return h.addIssue=(u)=>{if(typeof u==="string")h.issues.push(r0(u,h.value,t._zod.def));else{let P=u;if(P.fatal)P.continue=!1;P.code??(P.code="custom"),P.input??(P.input=h.value),P.inst??(P.inst=t),P.continue??(P.continue=!t._zod.def.abort),h.issues.push(r0(P))}},g(h.value,h)},i);return t}function wK(g,i){let t=new Yg({check:"custom",...cr(i)});return t._zod.check=g,t}function u8(g){let i=g?.target??"draft-2020-12";if(i==="draft-4")i="draft-04";if(i==="draft-7")i="draft-07";return{processors:g.processors??{},metadataRegistry:g?.metadata??Bv,target:i,unrepresentable:g?.unrepresentable??"throw",override:g?.override??(()=>{}),io:g?.io??"output",counter:0,seen:new Map,cycles:g?.cycles??"ref",reused:g?.reused??"inline",external:g?.external??void 0}}function Oe(g,i,t={path:[],schemaPath:[]}){var h;let u=g._zod.def,P=i.seen.get(g);if(P){if(P.count++,t.schemaPath.includes(g))P.cycle=t.path;return P.schema}let O={schema:{},count:1,cycle:void 0,path:t.path};i.seen.set(g,O);let m=g._zod.toJSONSchema?.();if(m)O.schema=m;else{let W={...t,schemaPath:[...t.schemaPath,g],path:t.path};if(g._zod.processJSONSchema)g._zod.processJSONSchema(i,O.schema,W);else{let G=O.schema,L=i.processors[u.type];if(!L)throw Error(`[toJSONSchema]: Non-representable type encountered: ${u.type}`);L(g,i,G,W)}let q=g._zod.parent;if(q){if(!O.ref)O.ref=q;Oe(q,i,W),i.seen.get(q).isParent=!0}}let R=i.metadataRegistry.get(g);if(R)Object.assign(O.schema,R);if(i.io==="input"&&ce(g))delete O.schema.examples,delete O.schema.default;if(i.io==="input"&&"_prefault"in O.schema)(h=O.schema).default??(h.default=O.schema._prefault);return delete O.schema._prefault,i.seen.get(g).schema}function w8(g,i){let t=g.seen.get(i);if(!t)throw Error("Unprocessed schema. This is a bug in Zod.");let h=new Map;for(let O of g.seen.entries()){let m=g.metadataRegistry.get(O[0])?.id;if(m){let R=h.get(m);if(R&&R!==O[0])throw Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);h.set(m,O[0])}}let u=(O)=>{let m=g.target==="draft-2020-12"?"$defs":"definitions";if(g.external){let q=g.external.registry.get(O[0])?.id,G=g.external.uri??((S)=>S);if(q)return{ref:G(q)};let L=O[1].defId??O[1].schema.id??`schema${g.counter++}`;return O[1].defId=L,{defId:L,ref:`${G("__shared")}#/${m}/${L}`}}if(O[1]===t)return{ref:"#"};let X=`${"#"}/${m}/`,W=O[1].schema.id??`__schema${g.counter++}`;return{defId:W,ref:X+W}},P=(O)=>{if(O[1].schema.$ref)return;let m=O[1],{ref:R,defId:X}=u(O);if(m.def={...m.schema},X)m.defId=X;let W=m.schema;for(let q in W)delete W[q];W.$ref=R};if(g.cycles==="throw")for(let O of g.seen.entries()){let m=O[1];if(m.cycle)throw Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let O of g.seen.entries()){let m=O[1];if(i===O[0]){P(O);continue}if(g.external){let X=g.external.registry.get(O[0])?.id;if(i!==O[0]&&X){P(O);continue}}if(g.metadataRegistry.get(O[0])?.id){P(O);continue}if(m.cycle){P(O);continue}if(m.count>1){if(g.reused==="ref"){P(O);continue}}}}function P8(g,i){let t=g.seen.get(i);if(!t)throw Error("Unprocessed schema. This is a bug in Zod.");let h=(m)=>{let R=g.seen.get(m);if(R.ref===null)return;let X=R.def??R.schema,W={...X},q=R.ref;if(R.ref=null,q){h(q);let L=g.seen.get(q),S=L.schema;if(S.$ref&&(g.target==="draft-07"||g.target==="draft-04"||g.target==="openapi-3.0"))X.allOf=X.allOf??[],X.allOf.push(S);else Object.assign(X,S);if(Object.assign(X,W),m._zod.parent===q)for(let k in X){if(k==="$ref"||k==="allOf")continue;if(!(k in W))delete X[k]}if(S.$ref&&L.def)for(let k in X){if(k==="$ref"||k==="allOf")continue;if(k in L.def&&JSON.stringify(X[k])===JSON.stringify(L.def[k]))delete X[k]}}let G=m._zod.parent;if(G&&G!==q){h(G);let L=g.seen.get(G);if(L?.schema.$ref){if(X.$ref=L.schema.$ref,L.def)for(let S in X){if(S==="$ref"||S==="allOf")continue;if(S in L.def&&JSON.stringify(X[S])===JSON.stringify(L.def[S]))delete X[S]}}}g.override({zodSchema:m,jsonSchema:X,path:R.path??[]})};for(let m of[...g.seen.entries()].reverse())h(m[0]);let u={};if(g.target==="draft-2020-12")u.$schema="https://json-schema.org/draft/2020-12/schema";else if(g.target==="draft-07")u.$schema="http://json-schema.org/draft-07/schema#";else if(g.target==="draft-04")u.$schema="http://json-schema.org/draft-04/schema#";else if(g.target==="openapi-3.0");if(g.external?.uri){let m=g.external.registry.get(i)?.id;if(!m)throw Error("Schema is missing an `id` property");u.$id=g.external.uri(m)}Object.assign(u,t.def??t.schema);let P=g.metadataRegistry.get(i)?.id;if(P!==void 0&&u.id===P)delete u.id;let O=g.external?.defs??{};for(let m of g.seen.entries()){let R=m[1];if(R.def&&R.defId){if(R.def.id===R.defId)delete R.def.id;O[R.defId]=R.def}}if(g.external);else if(Object.keys(O).length>0)if(g.target==="draft-2020-12")u.$defs=O;else u.definitions=O;try{let m=JSON.parse(JSON.stringify(u));return Object.defineProperty(m,"~standard",{value:{...i["~standard"],jsonSchema:{input:L1(i,"input",g.processors),output:L1(i,"output",g.processors)}},enumerable:!1,writable:!1}),m}catch(m){throw Error("Error converting schema to JSON.")}}function ce(g,i){let t=i??{seen:new Set};if(t.seen.has(g))return!1;t.seen.add(g);let h=g._zod.def;if(h.type==="transform")return!0;if(h.type==="array")return ce(h.element,t);if(h.type==="set")return ce(h.valueType,t);if(h.type==="lazy")return ce(h.getter(),t);if(h.type==="promise"||h.type==="optional"||h.type==="nonoptional"||h.type==="nullable"||h.type==="readonly"||h.type==="default"||h.type==="prefault")return ce(h.innerType,t);if(h.type==="intersection")return ce(h.left,t)||ce(h.right,t);if(h.type==="record"||h.type==="map")return ce(h.keyType,t)||ce(h.valueType,t);if(h.type==="pipe"){if(g._zod.traits.has("$ZodCodec"))return!0;return ce(h.in,t)||ce(h.out,t)}if(h.type==="object"){for(let u in h.shape)if(ce(h.shape[u],t))return!0;return!1}if(h.type==="union"){for(let u of h.options)if(ce(u,t))return!0;return!1}if(h.type==="tuple"){for(let u of h.items)if(ce(u,t))return!0;if(h.rest&&ce(h.rest,t))return!0;return!1}return!1}var cW=(g,i={})=>(t)=>{let h=u8({...t,processors:i});return Oe(g,h),w8(h,g),P8(h,g)},L1=(g,i,t={})=>(h)=>{let{libraryOptions:u,target:P}=h??{},O=u8({...u??{},target:P,io:i,processors:t});return Oe(g,O),w8(O,g),P8(O,g)};var PK={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},yW=(g,i,t,h)=>{let u=t;u.type="string";let{minimum:P,maximum:O,format:m,patterns:R,contentEncoding:X}=g._zod.bag;if(typeof P==="number")u.minLength=P;if(typeof O==="number")u.maxLength=O;if(m){if(u.format=PK[m]??m,u.format==="")delete u.format;if(m==="time")delete u.format}if(X)u.contentEncoding=X;if(R&&R.size>0){let W=[...R];if(W.length===1)u.pattern=W[0].source;else if(W.length>1)u.allOf=[...W.map((q)=>({...i.target==="draft-07"||i.target==="draft-04"||i.target==="openapi-3.0"?{type:"string"}:{},pattern:q.source}))]}};var VW=(g,i,t,h)=>{t.not={}};var _W=(g,i,t,h)=>{};var EW=(g,i,t,h)=>{let u=g._zod.def,P=G1(u.entries);if(P.every((O)=>typeof O==="number"))t.type="number";if(P.every((O)=>typeof O==="string"))t.type="string";t.enum=P},fW=(g,i,t,h)=>{let u=g._zod.def,P=[];for(let O of u.values)if(O===void 0){if(i.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof O==="bigint")if(i.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else P.push(Number(O));else P.push(O);if(P.length===0);else if(P.length===1){let O=P[0];if(t.type=O===null?"null":typeof O,i.target==="draft-04"||i.target==="openapi-3.0")t.enum=[O];else t.const=O}else{if(P.every((O)=>typeof O==="number"))t.type="number";if(P.every((O)=>typeof O==="string"))t.type="string";if(P.every((O)=>typeof O==="boolean"))t.type="boolean";if(P.every((O)=>O===null))t.type="null";t.enum=P}};var pW=(g,i,t,h)=>{if(i.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var jW=(g,i,t,h)=>{if(i.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var dW=(g,i,t,h)=>{let u=t,P=g._zod.def,{minimum:O,maximum:m}=g._zod.bag;if(typeof O==="number")u.minItems=O;if(typeof m==="number")u.maxItems=m;u.type="array",u.items=Oe(P.element,i,{...h,path:[...h.path,"items"]})},sW=(g,i,t,h)=>{let u=t,P=g._zod.def;u.type="object",u.properties={};let O=P.shape;for(let X in O)u.properties[X]=Oe(O[X],i,{...h,path:[...h.path,"properties",X]});let m=new Set(Object.keys(O)),R=new Set([...m].filter((X)=>{let W=P.shape[X]._zod;if(i.io==="input")return W.optin===void 0;else return W.optout===void 0}));if(R.size>0)u.required=Array.from(R);if(P.catchall?._zod.def.type==="never")u.additionalProperties=!1;else if(!P.catchall){if(i.io==="output")u.additionalProperties=!1}else if(P.catchall)u.additionalProperties=Oe(P.catchall,i,{...h,path:[...h.path,"additionalProperties"]})},r7=(g,i,t,h)=>{let u=g._zod.def,P=u.inclusive===!1,O=u.options.map((m,R)=>Oe(m,i,{...h,path:[...h.path,P?"oneOf":"anyOf",R]}));if(P)t.oneOf=O;else t.anyOf=O},o7=(g,i,t,h)=>{let u=g._zod.def,P=Oe(u.left,i,{...h,path:[...h.path,"allOf",0]}),O=Oe(u.right,i,{...h,path:[...h.path,"allOf",1]}),m=(X)=>("allOf"in X)&&Object.keys(X).length===1,R=[...m(P)?P.allOf:[P],...m(O)?O.allOf:[O]];t.allOf=R};var e7=(g,i,t,h)=>{let u=g._zod.def,P=Oe(u.innerType,i,h),O=i.seen.get(g);if(i.target==="openapi-3.0")O.ref=u.innerType,t.nullable=!0;else t.anyOf=[P,{type:"null"}]},g7=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType},l7=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType,t.default=JSON.parse(JSON.stringify(u.defaultValue))},i7=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);if(P.ref=u.innerType,i.io==="input")t._prefault=JSON.parse(JSON.stringify(u.defaultValue))},n7=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType;let O;try{O=u.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}t.default=O},v7=(g,i,t,h)=>{let u=g._zod.def,P=u.in._zod.traits.has("$ZodTransform"),O=i.io==="input"?P?u.out:u.in:u.out;Oe(O,i,h);let m=i.seen.get(g);m.ref=O},t7=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType,t.readOnly=!0};var O8=(g,i,t,h)=>{let u=g._zod.def;Oe(u.innerType,i,h);let P=i.seen.get(g);P.ref=u.innerType};var JK=E("ZodISODateTime",(g,i)=>{xR.init(g,i),Zo.init(g,i)});function h7(g){return NW(JK,g)}var zK=E("ZodISODate",(g,i)=>{IR.init(g,i),Zo.init(g,i)});function b7(g){return ZW(zK,g)}var QK=E("ZodISOTime",(g,i)=>{FR.init(g,i),Zo.init(g,i)});function u7(g){return BW(QK,g)}var KK=E("ZodISODuration",(g,i)=>{NR.init(g,i),Zo.init(g,i)});function w7(g){return CW(KK,g)}var LK=(g,i)=>{H5.init(g,i),g.name="ZodError",Object.defineProperties(g,{format:{value:(t)=>M9(g,t)},flatten:{value:(t)=>H9(g,t)},addIssue:{value:(t)=>{g.issues.push(t),g.message=JSON.stringify(g.issues,st,2)}},addIssues:{value:(t)=>{g.issues.push(...t),g.message=JSON.stringify(g.issues,st,2)}},isEmpty:{get(){return g.issues.length===0}}})};var Jg=E("ZodError",LK,{Parent:Error});var P7=M5(Jg),O7=R5(Jg),m7=K1(Jg),A7=U1(Jg),q7=G9(Jg),H7=X9(Jg),M7=Y9(Jg),R7=J9(Jg),W7=z9(Jg),G7=Q9(Jg),X7=K9(Jg),Y7=U9(Jg);var J7=new WeakMap;function U5(g,i,t){let h=Object.getPrototypeOf(g),u=J7.get(h);if(!u)u=new Set,J7.set(h,u);if(u.has(i))return;u.add(i);for(let P in t){let O=t[P];Object.defineProperty(h,P,{configurable:!0,enumerable:!1,get(){let m=O.bind(this);return Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:m}),m},set(m){Object.defineProperty(this,P,{configurable:!0,writable:!0,enumerable:!0,value:m})}})}}var le=E("ZodType",(g,i)=>{return Vo.init(g,i),Object.assign(g["~standard"],{jsonSchema:{input:L1(g,"input"),output:L1(g,"output")}}),g.toJSONSchema=cW(g,{}),g.def=i,g.type=i.type,Object.defineProperty(g,"_def",{value:i}),g.parse=(t,h)=>P7(g,t,h,{callee:g.parse}),g.safeParse=(t,h)=>m7(g,t,h),g.parseAsync=async(t,h)=>O7(g,t,h,{callee:g.parseAsync}),g.safeParseAsync=async(t,h)=>A7(g,t,h),g.spa=g.safeParseAsync,g.encode=(t,h)=>q7(g,t,h),g.decode=(t,h)=>H7(g,t,h),g.encodeAsync=async(t,h)=>M7(g,t,h),g.decodeAsync=async(t,h)=>R7(g,t,h),g.safeEncode=(t,h)=>W7(g,t,h),g.safeDecode=(t,h)=>G7(g,t,h),g.safeEncodeAsync=async(t,h)=>X7(g,t,h),g.safeDecodeAsync=async(t,h)=>Y7(g,t,h),U5(g,"ZodType",{check(...t){let h=this.def;return this.clone(Ao.mergeDefs(h,{checks:[...h.checks??[],...t.map((u)=>typeof u==="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,h){return il(this,t,h)},brand(){return this},register(t,h){return t.add(this,h),this},refine(t,h){return this.check(XU(t,h))},superRefine(t,h){return this.check(YU(t,h))},overwrite(t){return this.check($n(t))},optional(){return K7(this)},exactOptional(){return bU(this)},nullable(){return U7(this)},nullish(){return K7(U7(this))},nonoptional(t){return AU(this,t)},array(){return Qi(this)},or(t){return gU([this,t])},and(t){return iU(this,t)},transform(t){return $7(this,tU(t))},default(t){return PU(this,t)},prefault(t){return mU(this,t)},catch(t){return HU(this,t)},pipe(t){return $7(this,t)},readonly(){return WU(this)},describe(t){let h=this.clone();return Bv.add(h,{description:t}),h},meta(...t){if(t.length===0)return Bv.get(this);let h=this.clone();return Bv.add(h,t[0]),h},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t){return t(this)}}),Object.defineProperty(g,"description",{get(){return Bv.get(g)?.description},configurable:!0}),g}),L7=E("_ZodString",(g,i)=>{Y5.init(g,i),le.init(g,i),g._zod.processJSONSchema=(h,u,P)=>yW(g,h,u,P);let t=g._zod.bag;g.format=t.format??null,g.minLength=t.minimum??null,g.maxLength=t.maximum??null,U5(g,"_ZodString",{regex(...h){return this.check(r8(...h))},includes(...h){return this.check(g8(...h))},startsWith(...h){return this.check(l8(...h))},endsWith(...h){return this.check(i8(...h))},min(...h){return this.check(o0(...h))},max(...h){return this.check(J5(...h))},length(...h){return this.check(z5(...h))},nonempty(...h){return this.check(o0(1,...h))},lowercase(h){return this.check(o8(h))},uppercase(h){return this.check(e8(h))},trim(){return this.check(v8())},normalize(...h){return this.check(n8(...h))},toLowerCase(){return this.check(t8())},toUpperCase(){return this.check(h8())},slugify(){return this.check(b8())}})}),IK=E("ZodString",(g,i)=>{Y5.init(g,i),L7.init(g,i),g.email=(t)=>g.check(OW(FK,t)),g.url=(t)=>g.check(MW(NK,t)),g.jwt=(t)=>g.check(FW(pK,t)),g.emoji=(t)=>g.check(RW(ZK,t)),g.guid=(t)=>g.check(s6(z7,t)),g.uuid=(t)=>g.check(mW(K5,t)),g.uuidv4=(t)=>g.check(AW(K5,t)),g.uuidv6=(t)=>g.check(qW(K5,t)),g.uuidv7=(t)=>g.check(HW(K5,t)),g.nanoid=(t)=>g.check(WW(BK,t)),g.guid=(t)=>g.check(s6(z7,t)),g.cuid=(t)=>g.check(GW(CK,t)),g.cuid2=(t)=>g.check(XW(SK,t)),g.ulid=(t)=>g.check(YW(TK,t)),g.base64=(t)=>g.check(LW(_K,t)),g.base64url=(t)=>g.check(xW(EK,t)),g.xid=(t)=>g.check(JW(kK,t)),g.ksuid=(t)=>g.check(zW(aK,t)),g.ipv4=(t)=>g.check(QW(DK,t)),g.ipv6=(t)=>g.check(KW(cK,t)),g.cidrv4=(t)=>g.check(UW(yK,t)),g.cidrv6=(t)=>g.check($W(VK,t)),g.e164=(t)=>g.check(IW(fK,t)),g.datetime=(t)=>g.check(h7(t)),g.date=(t)=>g.check(b7(t)),g.time=(t)=>g.check(u7(t)),g.duration=(t)=>g.check(w7(t))});function _o(g){return PW(IK,g)}var Zo=E("ZodStringFormat",(g,i)=>{Io.init(g,i),L7.init(g,i)}),FK=E("ZodEmail",(g,i)=>{XR.init(g,i),Zo.init(g,i)});var z7=E("ZodGUID",(g,i)=>{WR.init(g,i),Zo.init(g,i)});var K5=E("ZodUUID",(g,i)=>{GR.init(g,i),Zo.init(g,i)});var NK=E("ZodURL",(g,i)=>{YR.init(g,i),Zo.init(g,i)});var ZK=E("ZodEmoji",(g,i)=>{JR.init(g,i),Zo.init(g,i)});var BK=E("ZodNanoID",(g,i)=>{zR.init(g,i),Zo.init(g,i)});var CK=E("ZodCUID",(g,i)=>{QR.init(g,i),Zo.init(g,i)});var SK=E("ZodCUID2",(g,i)=>{KR.init(g,i),Zo.init(g,i)});var TK=E("ZodULID",(g,i)=>{UR.init(g,i),Zo.init(g,i)});var kK=E("ZodXID",(g,i)=>{$R.init(g,i),Zo.init(g,i)});var aK=E("ZodKSUID",(g,i)=>{LR.init(g,i),Zo.init(g,i)});var DK=E("ZodIPv4",(g,i)=>{ZR.init(g,i),Zo.init(g,i)});var cK=E("ZodIPv6",(g,i)=>{BR.init(g,i),Zo.init(g,i)});var yK=E("ZodCIDRv4",(g,i)=>{CR.init(g,i),Zo.init(g,i)});var VK=E("ZodCIDRv6",(g,i)=>{SR.init(g,i),Zo.init(g,i)});var _K=E("ZodBase64",(g,i)=>{kR.init(g,i),Zo.init(g,i)});var EK=E("ZodBase64URL",(g,i)=>{aR.init(g,i),Zo.init(g,i)});var fK=E("ZodE164",(g,i)=>{DR.init(g,i),Zo.init(g,i)});var pK=E("ZodJWT",(g,i)=>{cR.init(g,i),Zo.init(g,i)});var jK=E("ZodUnknown",(g,i)=>{yR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>_W(g,t,h,u)});function Q7(){return SW(jK)}var dK=E("ZodNever",(g,i)=>{VR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>VW(g,t,h,u)});function sK(g){return TW(dK,g)}var rU=E("ZodArray",(g,i)=>{_R.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>dW(g,t,h,u),g.element=i.element,U5(g,"ZodArray",{min(t,h){return this.check(o0(t,h))},nonempty(t){return this.check(o0(1,t))},max(t,h){return this.check(J5(t,h))},length(t,h){return this.check(z5(t,h))},unwrap(){return this.element}})});function Qi(g,i){return kW(rU,g,i)}var oU=E("ZodObject",(g,i)=>{pR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>sW(g,t,h,u),Ao.defineLazy(g,"shape",()=>{return i.shape}),U5(g,"ZodObject",{keyof(){return x1(Object.keys(this._zod.def.shape))},catchall(t){return this.clone({...this._zod.def,catchall:t})},passthrough(){return this.clone({...this._zod.def,catchall:Q7()})},loose(){return this.clone({...this._zod.def,catchall:Q7()})},strict(){return this.clone({...this._zod.def,catchall:sK()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(t){return Ao.extend(this,t)},safeExtend(t){return Ao.safeExtend(this,t)},merge(t){return Ao.merge(this,t)},pick(t){return Ao.pick(this,t)},omit(t){return Ao.omit(this,t)},partial(...t){return Ao.partial(x7,this,t[0])},required(...t){return Ao.required(I7,this,t[0])}})});function Cv(g,i){let t={type:"object",shape:g??{},...Ao.normalizeParams(i)};return new oU(t)}var eU=E("ZodUnion",(g,i)=>{jR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>r7(g,t,h,u),g.options=i.options});function gU(g,i){return new eU({type:"union",options:g,...Ao.normalizeParams(i)})}var lU=E("ZodIntersection",(g,i)=>{dR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>o7(g,t,h,u)});function iU(g,i){return new lU({type:"intersection",left:g,right:i})}var m8=E("ZodEnum",(g,i)=>{sR.init(g,i),le.init(g,i),g._zod.processJSONSchema=(h,u,P)=>EW(g,h,u,P),g.enum=i.entries,g.options=Object.values(i.entries);let t=new Set(Object.keys(i.entries));g.extract=(h,u)=>{let P={};for(let O of h)if(t.has(O))P[O]=i.entries[O];else throw Error(`Key ${O} not found in enum`);return new m8({...i,checks:[],...Ao.normalizeParams(u),entries:P})},g.exclude=(h,u)=>{let P={...i.entries};for(let O of h)if(t.has(O))delete P[O];else throw Error(`Key ${O} not found in enum`);return new m8({...i,checks:[],...Ao.normalizeParams(u),entries:P})}});function x1(g,i){let t=Array.isArray(g)?Object.fromEntries(g.map((h)=>[h,h])):g;return new m8({type:"enum",entries:t,...Ao.normalizeParams(i)})}var nU=E("ZodLiteral",(g,i)=>{rW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>fW(g,t,h,u),g.values=new Set(i.values),Object.defineProperty(g,"value",{get(){if(i.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return i.values[0]}})});function A8(g,i){return new nU({type:"literal",values:Array.isArray(g)?g:[g],...Ao.normalizeParams(i)})}var vU=E("ZodTransform",(g,i)=>{oW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>jW(g,t,h,u),g._zod.parse=(t,h)=>{if(h.direction==="backward")throw new R1(g.constructor.name);t.addIssue=(P)=>{if(typeof P==="string")t.issues.push(Ao.issue(P,t.value,i));else{let O=P;if(O.fatal)O.continue=!1;O.code??(O.code="custom"),O.input??(O.input=t.value),O.inst??(O.inst=g),t.issues.push(Ao.issue(O))}};let u=i.transform(t.value,t);if(u instanceof Promise)return u.then((P)=>{return t.value=P,t.fallback=!0,t});return t.value=u,t.fallback=!0,t}});function tU(g){return new vU({type:"transform",transform:g})}var x7=E("ZodOptional",(g,i)=>{d6.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>O8(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function K7(g){return new x7({type:"optional",innerType:g})}var hU=E("ZodExactOptional",(g,i)=>{eW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>O8(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function bU(g){return new hU({type:"optional",innerType:g})}var uU=E("ZodNullable",(g,i)=>{gW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>e7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function U7(g){return new uU({type:"nullable",innerType:g})}var wU=E("ZodDefault",(g,i)=>{lW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>l7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType,g.removeDefault=g.unwrap});function PU(g,i){return new wU({type:"default",innerType:g,get defaultValue(){return typeof i==="function"?i():Ao.shallowClone(i)}})}var OU=E("ZodPrefault",(g,i)=>{iW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>i7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function mU(g,i){return new OU({type:"prefault",innerType:g,get defaultValue(){return typeof i==="function"?i():Ao.shallowClone(i)}})}var I7=E("ZodNonOptional",(g,i)=>{nW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>g7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function AU(g,i){return new I7({type:"nonoptional",innerType:g,...Ao.normalizeParams(i)})}var qU=E("ZodCatch",(g,i)=>{vW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>n7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType,g.removeCatch=g.unwrap});function HU(g,i){return new qU({type:"catch",innerType:g,catchValue:typeof i==="function"?i:()=>i})}var MU=E("ZodPipe",(g,i)=>{tW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>v7(g,t,h,u),g.in=i.in,g.out=i.out});function $7(g,i){return new MU({type:"pipe",in:g,out:i})}var RU=E("ZodReadonly",(g,i)=>{hW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>t7(g,t,h,u),g.unwrap=()=>g._zod.def.innerType});function WU(g){return new RU({type:"readonly",innerType:g})}var GU=E("ZodCustom",(g,i)=>{bW.init(g,i),le.init(g,i),g._zod.processJSONSchema=(t,h,u)=>pW(g,t,h,u)});function XU(g,i={}){return aW(GU,g,i)}function YU(g,i){return DW(g,i)}var F7=Cv({type:x1(["character","chat"]),characterId:_o().optional(),chatId:_o().optional(),displayName:_o().default("")}),N7=Cv({description:_o().optional(),author:_o().optional(),version:_o().optional(),tags:Qi(_o()).optional()}),JU=Cv({name:_o().min(1).max(200),code:_o(),type:x1(["trigger","library"]),triggers:Qi(_o()).optional(),bindings:Qi(F7).optional(),folder:_o().optional(),metadata:N7.optional()}),Z7=Cv({format:A8("lumiscript-pack-v1"),exportedAt:_o(),scripts:Qi(JU).min(1).max(100)}),zU=Cv({name:_o().min(1).max(200),file:_o().min(1),type:x1(["trigger","library"]),triggers:Qi(_o()).optional(),bindings:Qi(F7).optional(),folder:_o().optional(),metadata:N7.optional()}),O_o=Cv({format:A8("lumiscript-manifest-v1"),sourcePack:_o().optional(),sourceFormat:_o().optional(),exportedAt:_o().optional(),convertedAt:_o().optional(),scripts:Qi(zU).min(1).max(100)});var B7=1048576;async function C7(g){let i=new Uint8Array(await g.arrayBuffer()),t;try{t=g9(i)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let h=t["pack.json"];if(!h)throw Error("Invalid script pack: missing pack.json");if(h.byteLength>B7)throw Error(`Pack exceeds the ${B7/1024/1024} MB decompressed size limit`);let u=S6(h),P;try{P=JSON.parse(u)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return Z7.parse(P).scripts}var vo=wr(dr(),1);function QU(g){let t="";for(let h=0;h<g.length;h+=32768)t+=String.fromCharCode(...g.subarray(h,h+32768));return btoa(t)}function KU(g){let i=new Map;for(let u of g){let P=u.folder??"";if(!i.has(P))i.set(P,[]);i.get(P).push(u)}let t=new Map;if(i.has(""))t.set("",i.get(""));let h=[...i.keys()].filter((u)=>u!=="").sort();for(let u of h)t.set(u,i.get(u));return t}var $5=({scripts:g,selectedId:i,execInfo:t,onSelect:h,onEdit:u,sendToBackend:P})=>{let[O,m]=I1.useState("trigger"),[R,X]=I1.useState(new Set),W=I1.useRef(null),q=g.filter((f)=>f.type===O),G=KU(q),L=G.size>1||G.size===1&&!G.has(""),S=(f)=>{X((s)=>{let ir=new Set(s);if(ir.has(f))ir.delete(f);else ir.add(f);return ir})},I=()=>{let f=O==="library"?"Library name:":"Script name:",s=window.prompt(f);if(!s?.trim())return;P({type:"create_script",name:s.trim(),scriptType:O})},k=(f)=>{if(q.length===0)return;if(f.shiftKey){let ir=T6(q);P({type:"save_pack_to_disk",bytesB64:QU(ir),scriptType:O});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;l9(q,s.trim())},j=()=>{W.current?.click()},Pr=async(f)=>{let s=f.target.files?.[0];if(!s)return;f.target.value="";try{let ir=await C7(s),Z=(N)=>N==="library"?"[L]":"[T]",y=ir.map((N)=>`  ${Z(N.type)} ${N.name}`).join(`
`);if(!window.confirm(`Import ${ir.length} script${ir.length>1?"s":""}?

${y}

Imported scripts will be disabled. Review and enable them manually.`))return;P({type:"import_scripts",entries:ir})}catch(ir){window.alert(`Import failed: ${ir instanceof Error?ir.message:String(ir)}`)}},lr=(f)=>{let s=t[f.id];return vo.jsxDEV(aM,{script:f,selected:f.id===i,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>h(f.id),onEdit:()=>u(f.id),sendToBackend:P},f.id,!1,void 0,this)};return vo.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[vo.jsxDEV("div",{className:"ls-list-header",children:[vo.jsxDEV("div",{className:"ls-list-type-tabs",children:[vo.jsxDEV("button",{className:`ls-type-tab${O==="trigger"?" ls-active":""}`,onClick:()=>m("trigger"),title:"Scripts",children:vo.jsxDEV(Ge,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:`ls-type-tab${O==="library"?" ls-active":""}`,onClick:()=>m("library"),title:"Libraries",children:vo.jsxDEV(Uv,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("div",{className:"ls-list-actions",children:[vo.jsxDEV("button",{className:"ls-icon-btn",onClick:j,title:"Import script pack",children:vo.jsxDEV(O1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:"ls-icon-btn",onClick:k,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:q.length===0,children:vo.jsxDEV(Lv,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("button",{className:"ls-icon-btn",onClick:I,title:"New script",children:vo.jsxDEV(n1,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("input",{ref:W,type:"file",accept:".zip",style:{display:"none"},onChange:Pr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),vo.jsxDEV("div",{className:"ls-list-body",children:q.length===0?vo.jsxDEV("div",{className:"ls-list-empty",children:[vo.jsxDEV(Sl,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),vo.jsxDEV("p",{children:["No ",O==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),vo.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):L?[...G.entries()].map(([f,s])=>{let ir=R.has(f);return f===""?vo.jsxDEV("div",{children:s.map(lr)},"__unfiled",!1,void 0,this):vo.jsxDEV("div",{className:"ls-folder-group",children:[vo.jsxDEV("button",{className:"ls-folder-header",onClick:()=>S(f),children:[ir?vo.jsxDEV(Ri,{size:11},void 0,!1,void 0,this):vo.jsxDEV(Xe,{size:11},void 0,!1,void 0,this),vo.jsxDEV(xv,{size:11},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-name",children:f},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(Z)=>{Z.stopPropagation();let y=window.prompt("Rename folder:",f);if(y===null||y.trim()===""||y.trim()===f)return;for(let p of s)P({type:"update_script",id:p.id,patch:{folder:y.trim()}})},children:vo.jsxDEV(el,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),vo.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!ir&&s.map(lr)]},`folder-${f}`,!0,void 0,this)}):q.map(lr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var C1=wr(io(),1),X3=wr(Kv(),1);var $o=wr(io(),1);function S7(g,i){(i==null||i>g.length)&&(i=g.length);for(var t=0,h=Array(i);t<i;t++)h[t]=g[t];return h}function UU(g){if(Array.isArray(g))return g}function $U(g,i,t){return(i=NU(i))in g?Object.defineProperty(g,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):g[i]=t,g}function LU(g,i){var t=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(t!=null){var h,u,P,O,m=[],R=!0,X=!1;try{if(P=(t=t.call(g)).next,i===0);else for(;!(R=(h=P.call(t)).done)&&(m.push(h.value),m.length!==i);R=!0);}catch(W){X=!0,u=W}finally{try{if(!R&&t.return!=null&&(O=t.return(),Object(O)!==O))return}finally{if(X)throw u}}return m}}function xU(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T7(g,i){var t=Object.keys(g);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(g);i&&(h=h.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable})),t.push.apply(t,h)}return t}function q8(g){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};i%2?T7(Object(t),!0).forEach(function(h){$U(g,h,t[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(t)):T7(Object(t)).forEach(function(h){Object.defineProperty(g,h,Object.getOwnPropertyDescriptor(t,h))})}return g}function k7(g,i){if(g==null)return{};var t,h,u=IU(g,i);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(g);for(h=0;h<P.length;h++)t=P[h],i.indexOf(t)===-1&&{}.propertyIsEnumerable.call(g,t)&&(u[t]=g[t])}return u}function IU(g,i){if(g==null)return{};var t={};for(var h in g)if({}.hasOwnProperty.call(g,h)){if(i.indexOf(h)!==-1)continue;t[h]=g[h]}return t}function a7(g,i){return UU(g)||LU(g,i)||ZU(g,i)||xU()}function FU(g,i){if(typeof g!="object"||!g)return g;var t=g[Symbol.toPrimitive];if(t!==void 0){var h=t.call(g,i);if(typeof h!="object")return h;throw TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(g)}function NU(g){var i=FU(g,"string");return typeof i=="symbol"?i:i+""}function ZU(g,i){if(g){if(typeof g=="string")return S7(g,i);var t={}.toString.call(g).slice(8,-1);return t==="Object"&&g.constructor&&(t=g.constructor.name),t==="Map"||t==="Set"?Array.from(g):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S7(g,i):void 0}}function BU(g,i,t){if(i in g)Object.defineProperty(g,i,{value:t,enumerable:!0,configurable:!0,writable:!0});else g[i]=t;return g}function D7(g,i){var t=Object.keys(g);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(g);if(i)h=h.filter(function(u){return Object.getOwnPropertyDescriptor(g,u).enumerable});t.push.apply(t,h)}return t}function c7(g){for(var i=1;i<arguments.length;i++){var t=arguments[i]!=null?arguments[i]:{};if(i%2)D7(Object(t),!0).forEach(function(h){BU(g,h,t[h])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(g,Object.getOwnPropertyDescriptors(t));else D7(Object(t)).forEach(function(h){Object.defineProperty(g,h,Object.getOwnPropertyDescriptor(t,h))})}return g}function CU(){for(var g=arguments.length,i=Array(g),t=0;t<g;t++)i[t]=arguments[t];return function(h){return i.reduceRight(function(u,P){return P(u)},h)}}function F1(g){return function i(){var t=this;for(var h=arguments.length,u=Array(h),P=0;P<h;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,m=Array(O),R=0;R<O;R++)m[R]=arguments[R];return i.apply(t,[].concat(u,m))}}}function x5(g){return{}.toString.call(g).includes("Object")}function SU(g){return!Object.keys(g).length}function N1(g){return typeof g==="function"}function TU(g,i){return Object.prototype.hasOwnProperty.call(g,i)}function kU(g,i){if(!x5(i))Ln("changeType");if(Object.keys(i).some(function(t){return!TU(g,t)}))Ln("changeField");return i}function aU(g){if(!N1(g))Ln("selectorType")}function DU(g){if(!(N1(g)||x5(g)))Ln("handlerType");if(x5(g)&&Object.values(g).some(function(i){return!N1(i)}))Ln("handlersType")}function cU(g){if(!g)Ln("initialIsRequired");if(!x5(g))Ln("initialType");if(SU(g))Ln("initialContent")}function yU(g,i){throw Error(g[i]||g.default)}var VU={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ln=F1(yU)(VU),L5={changes:kU,selector:aU,handler:DU,initial:cU};function _U(g){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};L5.initial(g),L5.handler(i);var t={current:g},h=F1(pU)(t,i),u=F1(fU)(t),P=F1(L5.changes)(g),O=F1(EU)(t);function m(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(W){return W};return L5.selector(X),X(t.current)}function R(X){CU(h,u,P,O)(X)}return[m,R]}function EU(g,i){return N1(i)?i(g.current):i}function fU(g,i){return g.current=c7(c7({},g.current),i),i}function pU(g,i,t){return N1(i)?i(g.current):Object.keys(t).forEach(function(h){var u;return(u=i[h])===null||u===void 0?void 0:u.call(i,g.current[h])}),t}var jU={create:_U},y7=jU;var V7={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function _7(g){return function i(){var t=this;for(var h=arguments.length,u=Array(h),P=0;P<h;P++)u[P]=arguments[P];return u.length>=g.length?g.apply(this,u):function(){for(var O=arguments.length,m=Array(O),R=0;R<O;R++)m[R]=arguments[R];return i.apply(t,[].concat(u,m))}}}function E7(g){return{}.toString.call(g).includes("Object")}function dU(g){if(!g)f7("configIsRequired");if(!E7(g))f7("configType");if(g.urls)return sU(),{paths:{vs:g.urls.monacoBase}};return g}function sU(){console.warn(p7.deprecation)}function r$(g,i){throw Error(g[i]||g.default)}var p7={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},f7=_7(r$)(p7),j7={config:dU};var d7=function(){for(var i=arguments.length,t=Array(i),h=0;h<i;h++)t[h]=arguments[h];return function(u){return t.reduceRight(function(P,O){return O(P)},u)}};function H8(g,i){return Object.keys(i).forEach(function(t){if(i[t]instanceof Object){if(g[t])Object.assign(i[t],H8(g[t],i[t]))}}),q8(q8({},g),i)}var o$={type:"cancelation",msg:"operation is manually canceled"};function I5(g){var i=!1,t=new Promise(function(h,u){g.then(function(P){return i?u(o$):h(P)}),g.catch(u)});return t.cancel=function(){return i=!0},t}var e$=["monaco"],g$=y7.create({config:V7,isInitialized:!1,resolve:null,reject:null,monaco:null}),s7=a7(g$,2),Z1=s7[0],F5=s7[1];function l$(g){var i=j7.config(g),t=i.monaco,h=k7(i,e$);F5(function(u){return{config:H8(u.config,h),monaco:t}})}function i$(){var g=Z1(function(i){var{monaco:t,isInitialized:h,resolve:u}=i;return{monaco:t,isInitialized:h,resolve:u}});if(!g.isInitialized){if(F5({isInitialized:!0}),g.monaco)return g.resolve(g.monaco),I5(M8);if(window.monaco&&window.monaco.editor)return r3(window.monaco),g.resolve(window.monaco),I5(M8);d7(n$,t$)(h$)}return I5(M8)}function n$(g){return document.body.appendChild(g)}function v$(g){var i=document.createElement("script");return g&&(i.src=g),i}function t$(g){var i=Z1(function(h){var{config:u,reject:P}=h;return{config:u,reject:P}}),t=v$("".concat(i.config.paths.vs,"/loader.js"));return t.onload=function(){return g()},t.onerror=i.reject,t}function h$(){var g=Z1(function(t){var{config:h,resolve:u,reject:P}=t;return{config:h,resolve:u,reject:P}}),i=window.require;i.config(g.config),i(["vs/editor/editor.main"],function(t){var h=t.m||t;r3(h),g.resolve(h)},function(t){g.reject(t)})}function r3(g){if(!Z1().monaco)F5({monaco:g})}function b$(){return Z1(function(g){var i=g.monaco;return i})}var M8=new Promise(function(g,i){return F5({resolve:g,reject:i})}),Sv={config:l$,init:i$,__getMonacoInstance:b$};var o3=wr(io(),1),me=wr(io(),1);var e3=wr(io(),1),Z5=wr(io(),1),g3=wr(io(),1),i3=wr(io(),1),B5=wr(io(),1),J$=wr(io(),1);var t3=wr(io(),1),ao=wr(io(),1);var C5=wr(io(),1),u$={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},R8=u$,w$={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},P$=w$;function O$({children:g}){return g3.default.createElement("div",{style:P$.container},g)}var m$=O$,A$=m$;function q$({width:g,height:i,isEditorReady:t,loading:h,_ref:u,className:P,wrapperProps:O}){return Z5.default.createElement("section",{style:{...R8.wrapper,width:g,height:i},...O},!t&&Z5.default.createElement(A$,null,h),Z5.default.createElement("div",{ref:u,style:{...R8.fullWidth,...!t&&R8.hide},className:P}))}var H$=q$,l3=e3.memo(H$);function M$(g){i3.useEffect(g,[])}var n3=M$;function R$(g,i,t=!0){let h=B5.useRef(!0);B5.useEffect(h.current||!t?()=>{h.current=!1}:g,i)}var zg=R$;function B1(){}function e0(g,i,t,h){return W$(g,h)||G$(g,i,t,h)}function W$(g,i){return g.editor.getModel(v3(g,i))}function G$(g,i,t,h){return g.editor.createModel(i,t,h?v3(g,h):void 0)}function v3(g,i){return g.Uri.parse(i)}function X$({original:g,modified:i,language:t,originalLanguage:h,modifiedLanguage:u,originalModelPath:P,modifiedModelPath:O,keepCurrentOriginalModel:m=!1,keepCurrentModifiedModel:R=!1,theme:X="light",loading:W="Loading...",options:q={},height:G="100%",width:L="100%",className:S,wrapperProps:I={},beforeMount:k=B1,onMount:j=B1}){let[Pr,lr]=me.useState(!1),[f,s]=me.useState(!0),ir=me.useRef(null),Z=me.useRef(null),y=me.useRef(null),p=me.useRef(j),N=me.useRef(k),Rr=me.useRef(!1);n3(()=>{let a=Sv.init();return a.then((or)=>(Z.current=or)&&s(!1)).catch((or)=>or?.type!=="cancelation"&&console.error("Monaco initialization: error:",or)),()=>ir.current?Cr():a.cancel()}),zg(()=>{if(ir.current&&Z.current){let a=ir.current.getOriginalEditor(),or=e0(Z.current,g||"",h||t||"text",P||"");or!==a.getModel()&&a.setModel(or)}},[P],Pr),zg(()=>{if(ir.current&&Z.current){let a=ir.current.getModifiedEditor(),or=e0(Z.current,i||"",u||t||"text",O||"");or!==a.getModel()&&a.setModel(or)}},[O],Pr),zg(()=>{let a=ir.current.getModifiedEditor();a.getOption(Z.current.editor.EditorOption.readOnly)?a.setValue(i||""):i!==a.getValue()&&(a.executeEdits("",[{range:a.getModel().getFullModelRange(),text:i||"",forceMoveMarkers:!0}]),a.pushUndoStop())},[i],Pr),zg(()=>{ir.current?.getModel()?.original.setValue(g||"")},[g],Pr),zg(()=>{let{original:a,modified:or}=ir.current.getModel();Z.current.editor.setModelLanguage(a,h||t||"text"),Z.current.editor.setModelLanguage(or,u||t||"text")},[t,h,u],Pr),zg(()=>{Z.current?.editor.setTheme(X)},[X],Pr),zg(()=>{ir.current?.updateOptions(q)},[q],Pr);let qr=me.useCallback(()=>{if(!Z.current)return;N.current(Z.current);let a=e0(Z.current,g||"",h||t||"text",P||""),or=e0(Z.current,i||"",u||t||"text",O||"");ir.current?.setModel({original:a,modified:or})},[t,i,u,g,h,P,O]),Wr=me.useCallback(()=>{!Rr.current&&y.current&&(ir.current=Z.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...q}),qr(),Z.current?.editor.setTheme(X),lr(!0),Rr.current=!0)},[q,X,qr]);me.useEffect(()=>{Pr&&p.current(ir.current,Z.current)},[Pr]),me.useEffect(()=>{!f&&!Pr&&Wr()},[f,Pr,Wr]);function Cr(){let a=ir.current?.getModel();m||a?.original?.dispose(),R||a?.modified?.dispose(),ir.current?.dispose()}return me.default.createElement(l3,{width:L,height:G,isEditorReady:Pr,loading:W,_ref:y,className:S,wrapperProps:I})}var Y$=X$,f_o=o3.memo(Y$);function z$(g){let i=C5.useRef();return C5.useEffect(()=>{i.current=g},[g]),i.current}var Q$=z$,N5=new Map;function K$({defaultValue:g,defaultLanguage:i,defaultPath:t,value:h,language:u,path:P,theme:O="light",line:m,loading:R="Loading...",options:X={},overrideServices:W={},saveViewState:q=!0,keepCurrentModel:G=!1,width:L="100%",height:S="100%",className:I,wrapperProps:k={},beforeMount:j=B1,onMount:Pr=B1,onChange:lr,onValidate:f=B1}){let[s,ir]=ao.useState(!1),[Z,y]=ao.useState(!0),p=ao.useRef(null),N=ao.useRef(null),Rr=ao.useRef(null),qr=ao.useRef(Pr),Wr=ao.useRef(j),Cr=ao.useRef(),a=ao.useRef(h),or=Q$(P),nr=ao.useRef(!1),Kr=ao.useRef(!1);n3(()=>{let T=Sv.init();return T.then((tr)=>(p.current=tr)&&y(!1)).catch((tr)=>tr?.type!=="cancelation"&&console.error("Monaco initialization: error:",tr)),()=>N.current?c():T.cancel()}),zg(()=>{let T=e0(p.current,g||h||"",i||u||"",P||t||"");T!==N.current?.getModel()&&(q&&N5.set(or,N.current?.saveViewState()),N.current?.setModel(T),q&&N.current?.restoreViewState(N5.get(P)))},[P],s),zg(()=>{N.current?.updateOptions(X)},[X],s),zg(()=>{!N.current||h===void 0||(N.current.getOption(p.current.editor.EditorOption.readOnly)?N.current.setValue(h):h!==N.current.getValue()&&(Kr.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:h,forceMoveMarkers:!0}]),N.current.pushUndoStop(),Kr.current=!1))},[h],s),zg(()=>{let T=N.current?.getModel();T&&u&&p.current?.editor.setModelLanguage(T,u)},[u],s),zg(()=>{m!==void 0&&N.current?.revealLine(m)},[m],s),zg(()=>{p.current?.editor.setTheme(O)},[O],s);let Xr=ao.useCallback(()=>{if(!(!Rr.current||!p.current)&&!nr.current){Wr.current(p.current);let T=P||t,tr=e0(p.current,h||g||"",i||u||"",T||"");N.current=p.current?.editor.create(Rr.current,{model:tr,automaticLayout:!0,...X},W),q&&N.current.restoreViewState(N5.get(T)),p.current.editor.setTheme(O),m!==void 0&&N.current.revealLine(m),ir(!0),nr.current=!0}},[g,i,t,h,u,P,X,W,q,O,m]);ao.useEffect(()=>{s&&qr.current(N.current,p.current)},[s]),ao.useEffect(()=>{!Z&&!s&&Xr()},[Z,s,Xr]),a.current=h,ao.useEffect(()=>{s&&lr&&(Cr.current?.dispose(),Cr.current=N.current?.onDidChangeModelContent((T)=>{Kr.current||lr(N.current.getValue(),T)}))},[s,lr]),ao.useEffect(()=>{if(s){let T=p.current.editor.onDidChangeMarkers((tr)=>{let Hr=N.current.getModel()?.uri;if(Hr&&tr.find((_)=>_.path===Hr.path)){let _=p.current.editor.getModelMarkers({resource:Hr});f?.(_)}});return()=>{T?.dispose()}}return()=>{}},[s,f]);function c(){Cr.current?.dispose(),G?q&&N5.set(P,N.current.saveViewState()):N.current.getModel()?.dispose(),N.current.dispose()}return ao.default.createElement(l3,{width:L,height:S,isEditorReady:s,loading:R,_ref:Rr,className:I,wrapperProps:k})}var U$=K$,$$=t3.memo(U$),h3=$$;var g0=wr(io(),1);var Ae=wr(dr(),1),L$={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},b3=({entries:g,isRunning:i,onClear:t})=>{let[h,u]=g0.useState(!1),P=g0.useRef(null);g0.useEffect(()=>{if(!h&&P.current)P.current.scrollTop=P.current.scrollHeight},[g,h]);let O=()=>{let m=g.filter((R)=>R.type!=="separator").map((R)=>`[${R.timestamp}] ${R.type.toUpperCase()}: ${R.message}`).join(`
`);navigator.clipboard.writeText(m).catch(()=>{})};return Ae.jsxDEV("div",{className:`ls-console${h?" ls-collapsed":""}`,children:[Ae.jsxDEV("div",{className:"ls-console-header",onClick:()=>u((m)=>!m),children:[Ae.jsxDEV(al,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),Ae.jsxDEV("span",{className:"ls-console-title",children:["Console",i?" — running…":g.length>0?` (${g.length})`:""]},void 0,!0,void 0,this),Ae.jsxDEV("button",{className:"ls-icon-btn",onClick:(m)=>{m.stopPropagation(),O()},title:"Copy output",disabled:g.length===0,children:Ae.jsxDEV(Wg,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ae.jsxDEV("button",{className:"ls-icon-btn",onClick:(m)=>{m.stopPropagation(),t()},title:"Clear console",disabled:g.length===0,children:Ae.jsxDEV(xe,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),h?Ae.jsxDEV(Xe,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):Ae.jsxDEV(Rg,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h&&Ae.jsxDEV("div",{className:"ls-console-output",ref:P,children:g.length===0?Ae.jsxDEV("div",{className:"ls-console-empty",children:i?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):g.map((m,R)=>m.type==="separator"?Ae.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},R,!1,void 0,this):Ae.jsxDEV("div",{className:`ls-entry ${L$[m.type]??"ls-log"}`,children:[Ae.jsxDEV("span",{className:"ls-entry-time",children:m.timestamp},void 0,!1,void 0,this),Ae.jsxDEV("span",{className:"ls-entry-type",children:m.type.toUpperCase()},void 0,!1,void 0,this),Ae.jsxDEV("span",{className:"ls-entry-msg",children:m.message},void 0,!1,void 0,this)]},R,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var ye=wr(dr(),1),u3=({bindings:g,activeContext:i,onAdd:t,onRemove:h})=>{let u=()=>{let{characterId:O,characterName:m}=i;if(!O)return;if(g.some((R)=>R.type==="character"&&R.characterId===O))return;t({type:"character",characterId:O,displayName:m??O})},P=()=>{let{chatId:O,characterName:m}=i;if(!O)return;if(g.some((X)=>X.type==="chat"&&X.chatId===O))return;let R=m?`${m} — ${O.slice(0,8)}`:O.slice(0,8);t({type:"chat",chatId:O,displayName:R})};return ye.jsxDEV("div",{className:"ls-bindings",children:ye.jsxDEV("div",{className:"ls-bindings-row",children:[ye.jsxDEV(r1,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),g.length===0?ye.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):g.map((O,m)=>ye.jsxDEV("span",{className:"ls-binding-chip",children:[O.type==="character"?ye.jsxDEV(pt,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):ye.jsxDEV(Et,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),ye.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:O.displayName},void 0,!1,void 0,this),ye.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>h(m),title:"Remove binding",children:ye.jsxDEV(Ye,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},m,!0,void 0,this)),ye.jsxDEV("button",{className:"ls-bindings-add",onClick:u,disabled:!i.characterId,title:i.characterId?"Bind to current character":"Open a chat first",children:[ye.jsxDEV(pt,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),ye.jsxDEV("button",{className:"ls-bindings-add",onClick:P,disabled:!i.chatId,title:i.chatId?"Bind to current chat":"Open a chat first",children:[ye.jsxDEV(Et,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var w3=wr(io(),1);var og=wr(dr(),1),P3=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close."},{name:"CHAT_SWITCHED",description:"The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:"A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)"},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"},{name:"REGEX_SCRIPT_CHANGED",description:"A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+."},{name:"REGEX_SCRIPT_DELETED",description:"A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+."}]}],nEo=P3.flatMap((g)=>g.events.map((i)=>i.name)),O3=({scriptId:g,triggers:i,sendToBackend:t})=>{let[h,u]=w3.useState(!0),P=new Set(i),O=(m)=>{let R=P.has(m)?i.filter((X)=>X!==m):[...i,m];t({type:"update_script",id:g,patch:{triggers:R}})};return og.jsxDEV("div",{className:`ls-triggers${h?" ls-triggers-collapsed":""}`,children:[og.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>u((m)=>!m),children:[og.jsxDEV(Wi,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),og.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),P.size>0&&og.jsxDEV("span",{className:"ls-triggers-count",children:P.size},void 0,!1,void 0,this),og.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:h?og.jsxDEV(Xe,{size:12},void 0,!1,void 0,this):og.jsxDEV(Rg,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!h&&og.jsxDEV("div",{className:"ls-triggers-body",children:P3.map((m)=>og.jsxDEV("div",{className:"ls-trigger-group",children:[og.jsxDEV("span",{className:"ls-trigger-group-label",children:m.label},void 0,!1,void 0,this),og.jsxDEV("div",{className:"ls-trigger-chips",children:m.events.map((R)=>og.jsxDEV("button",{className:`ls-trigger-chip${P.has(R.name)?" ls-trigger-chip-active":""}`,onClick:()=>O(R.name),title:R.description,children:R.name},R.name,!1,void 0,this))},void 0,!1,void 0,this)]},m.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var m3=`
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
  /**
   * When true, asks the host to trigger a normal LLM continuation after
   * the message is appended. Fires the full chat-orchestration pipeline
   * (preset + persona + world info + regex + character card + streaming).
   * Requires Lumiverse host >= 0.9.x with triggerGeneration support;
   * silently ignored on older hosts.
   */
  triggerGeneration?: boolean;
  /**
   * Per-call overrides for the triggered generation. Only consulted when
   * triggerGeneration: true. Each field is optional; omitted fields fall
   * through to the active chat's resolved defaults.
   */
  generation?: ChatGenerationOptions;
}

/** Per-call generation overrides for sendMessage with triggerGeneration. */
interface ChatGenerationOptions {
  /** Override the connection profile. Falls back to user's default. */
  connectionId?: string;
  /** Override the persona. Falls back to active persona setting. */
  personaId?: string;
  /** Per-addon enable map for the chosen persona. */
  personaAddonStates?: Record<string, boolean>;
  /** Override the preset. Falls back to activeLoomPresetId / connection preset. */
  presetId?: string;
  /** Force the supplied presetId over connection-attached one. Impersonation-only; no-op for triggerGeneration. */
  forcePresetId?: boolean;
  /** Per-call parameter overrides (temperature, max_tokens, etc.) layered on the preset. */
  parameters?: Record<string, unknown>;
  /** For group chats: which character should respond. Falls back to chat character. */
  targetCharacterId?: string;
  /** Retain council-tool results from the previous generation rather than re-running. */
  retainCouncil?: boolean;
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

    /**
     * Attach an event-delegated listener at a known root, matching descendant
     * elements by CSS selector. Lets scripts react to user interactions with
     * DOM that the script itself didn't inject — most commonly, interactive
     * elements (buttons, inputs, selects, textareas) emitted by the LLM
     * into \`.mes_text\` content.
     *
     * Single host-side capture listener per (root, event) tuple; selector
     * matching happens frontend-side via \`event.target.closest(selector)\`.
     * IPC fires only when a selector matches.
     *
     * Default scope (\`options.root: 'chat'\`) restricts matching to chat
     * content; wider scope (\`options.root: 'document'\`) matches anywhere
     * in the page. Both gate on \`app_manipulation\` — same permission
     * as inject / injectAtMessage / addStyle.
     *
     * @param selector CSS selector matched against \`event.target.closest()\`
     * @param event    Event name ('click', 'change', 'input', 'keydown', ...)
     * @param handler  Called with serialized DOMDelegatedEventData on match
     * @param options  Scope, message scoping, prevention flags
     * @returns        Unsubscribe function
     */
    delegate(
      selector: string,
      event:    string,
      handler:  (data: DOMDelegatedEventData) => void | Promise<void>,
      options?: DOMDelegateOptions,
    ): () => void;

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
  /** Viewport X coordinate. Populated for MouseEvent / PointerEvent / TouchEvent (first touch). */
  clientX?: number;
  /** Viewport Y coordinate. Same event families as clientX. */
  clientY?: number;
  /** KeyboardEvent.key — value of the key pressed ('Enter', 'a', 'Shift', 'ArrowUp'). KeyboardEvents only. */
  key?: string;
  /** KeyboardEvent.code — physical key, layout-independent ('Enter', 'KeyA', 'ShiftLeft'). KeyboardEvents only. */
  code?: string;
}

/** Options for api.ui.dom.delegate(selector, event, handler, options?). */
interface DOMDelegateOptions {
  /**
   * Where to attach the actual host-side capture listener. Default: 'chat'.
   * - 'chat': restricts matching to the chat content container.
   * - 'document': matches anywhere in the page (including Lumiverse's
   *   own UI surfaces). Both gate on \`app_manipulation\`.
   */
  root?: 'chat' | 'document';
  /** Narrow matching to the .mes_text content of one specific message. */
  messageId?: string;
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
  /** Call event.stopPropagation() after dispatching. Default: false. */
  stopPropagation?: boolean;
}

/** Options for DOMHandle.on(event, handler, options?). */
interface DOMListenOptions {
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
}

/**
 * Predicate-based preventDefault — fires only when event data matches
 * specific filters. Use when you want browser defaults suppressed on a
 * specific key / button / modifier combo while letting others through.
 *
 * All filters are AND'd. Empty {} is "always match" (equivalent to true).
 *
 * Examples:
 *   { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } }  // plain Enter only
 *   { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } }  // Ctrl+S
 *   { onButtons: [2] }                                            // right-click only
 *
 * Available since LumiScript v0.27.5.
 */
interface ConditionalPreventDefault {
  /** KeyboardEvent.key value(s) — OR-matched. Non-keyboard events skipped when set. */
  onKeys?: string[];
  /** KeyboardEvent.code value(s) — layout-independent. Non-keyboard events skipped when set. */
  onCodes?: string[];
  /** MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. */
  onButtons?: number[];
  /** Modifier constraint. ALL require must be held; NONE of exclude may be. */
  whenModifiers?: {
    require?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
    exclude?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
  };
}

/**
 * Event data delivered to handlers registered via api.ui.dom.delegate().
 * Extends DOMEventData with a serialized snapshot of the element actually
 * matched by the selector — which may be an ancestor of event.target.
 */
interface DOMDelegatedEventData extends DOMEventData {
  matched: {
    tagName:        string;
    id?:            string;
    classList:      string[];
    dataset:        Record<string, string>;
    attributes:     Record<string, string>;
    textContent:    string;
    value?:         string;
    checked?:       boolean;
    selectedIndex?: number;
    selectedText?:  string;
    /** Trimmed text of the first associated <label>. Input / textarea / select only. */
    label?:         string;
  };
  modifiers: {
    ctrl:    boolean;
    shift:   boolean;
    alt:     boolean;
    meta:    boolean;
    button?: number;
  };
  /**
   * Populated when the matched element is inside an assistant or user
   * message. swipeId is the active swipe at dispatch time, resolved
   * backend-side via the host's chat history. Falls through with 0 if
   * the chat closed before dispatch or the message left the history.
   */
  message?: {
    id:      string;
    role:    'user' | 'assistant';
    swipeId: number;
  };
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
  on(event: string, handler: (data: DOMEventData) => void, options?: DOMListenOptions): () => void;
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
`;var M3=wr(io(),1);function A3(g){return g.split("`").map((t,h)=>{if(h%2===1)return t;return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function x$(g){return g.split("`").map((h,u)=>{if(u%2===1)return h;return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function xn(g,i){let t=`| ${g.join(" | ")} |`,h=`| ${g.map(()=>"---").join(" | ")} |`,u=i.map((P)=>`| ${P.map(x$).join(" | ")} |`);return[t,h,...u].join(`
`)}function I$(g){return g.optional&&!g.field.endsWith("?")?`${g.field}?`:g.field}function F$(g){if(g==="silent")return"*silent*";if(g==="boolean")return'`"true" / "false"`';return"`string`"}function N$(g){return g.aliases==="—"?"—":`\`${g.aliases}\``}function Z$(g){let i=g.perms.length===0&&!g.note?"*none*":g.perms.map((t)=>`\`${t}\``).join(", ");return g.note?`${i}${g.perms.length?" ":""}${g.note}`:i}function B$(){return`## Lumiverse Events

${xn(["Event","Group","Payload shape"],W8.map((i)=>[`\`${i.name}\``,i.group,`\`${i.payload}\``]))}`}function C$(){return`## Permission Matrix

${G8.map((i)=>{let t=xn(["Method","Required permissions"],i.rows.map((h)=>[`\`${h.method}\``,Z$(h)]));return`### ${i.group}

${t}`}).join(`

`)}`}function S$(){let g=xn(["Event","Payload fields","Emitted by"],X8.map((t)=>[`\`${t.name}\``,`\`${t.payload}\``,t.emittedBy])),i="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${g}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function T$(){let g=Y8.map((t)=>{let h=xn(["Macro","Aliases","Returns","Description"],t.rows.map((P)=>[`\`${P.macro}\``,N$(P),F$(P.returns),P.desc])),u=[`### ${t.label}`];if(t.description)u.push(`*${t.description}*`);return u.push(h),u.join(`

`)}),i='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${g.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function k$(){return`## Key Types

${J8.map((g)=>q3(g)).join(`

`)}`}function q3(g,i="###"){let t=A3(g.name),h=g.note?`*${A3(g.note)}*

`:"",u=xn(["Field","Type","Description"],g.fields.map((P)=>[`\`${I$(P)}\``,`\`${P.type}\``,P.desc]));return`${i} ${t}

${h}${u}`}function a$(){return`## API Functions

${z8.map((i)=>{let t=xn(["Method","Arguments","Description"],i.rows.map((h)=>[`\`${h.name}\``,h.args,h.desc]));return`### ${i.group}

${t}`}).join(`

`)}`}function D$(){let i=xn(["Method","Arguments","Description"],Q8.map((u)=>[`\`${u.name}\``,u.args,u.desc])),t=xn(["Method","Arguments","Description"],K8.map((u)=>[`\`${u.name}\``,u.args,u.desc])),h=U8.map((u)=>q3(u,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",i,"","### ls:council-prompt","",t,"","### Built-in types","",h].join(`
`)}function c$(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function y$(){let i=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,t=[B$(),C$(),S$(),T$(),k$(),a$(),D$(),c$()];return`${i}

---

${t.join(`

---

`)}
`}function H3(){let g=y$(),t=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,h=new Blob([g],{type:"text/markdown;charset=utf-8"}),u=URL.createObjectURL(h),P=document.createElement("a");P.href=u,P.download=t,P.click(),URL.revokeObjectURL(u)}var Q=wr(dr(),1),In=({icon:g,title:i,defaultOpen:t=!1,children:h})=>{let[u,P]=M3.useState(t);return Q.jsxDEV("div",{className:"ls-ref-section",children:[Q.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>P((O)=>!O),children:[Q.jsxDEV("span",{className:"ls-ref-section-title",children:[g,i]},void 0,!0,void 0,this),u?Q.jsxDEV(Xe,{size:12},void 0,!1,void 0,this):Q.jsxDEV(Ri,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u&&Q.jsxDEV("div",{className:"ls-ref-section-body",children:h},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},qo=({children:g})=>Q.jsxDEV("code",{className:"ls-ref-code",children:g},void 0,!1,void 0,this),V$=({children:g})=>Q.jsxDEV("span",{className:"ls-ref-perm",children:g},void 0,!1,void 0,this),_$=()=>Q.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),E$=()=>Q.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),l0=({label:g,cols:i})=>Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:i,className:"ls-ref-group-header",children:g},void 0,!1,void 0,this)},void 0,!1,void 0,this),W8=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHAT_SWITCHED",payload:"{ chatId: string | null }  // null on return-to-home"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Settings",name:"REGEX_SCRIPT_CHANGED",payload:"{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission"},{group:"Settings",name:"REGEX_SCRIPT_DELETED",payload:"{ id }  // v0.27.0+ — requires regex_scripts permission"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],f$=()=>{let g="";return Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:W8.map((i)=>{let t=i.group!==g?i.group:"";return g=i.group,Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:t},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},G8=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]},{method:"api.chat.registerContentProcessor",perms:["chat_mutation"]},{method:"api.chat.listContentProcessors",perms:[]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.* (CRUD + getCapturedActive)",perms:["world_books"]},{method:"api.worldInfo.registerInterceptor / listInterceptors",perms:["generation"]},{method:"api.personas.*",perms:["personas"]},{method:"api.regexScripts.*",perms:["regex_scripts"]},{method:"api.council.*",perms:[],note:"free tier, read-only"}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.register / updateValue / unregister / list",perms:[]},{method:"api.macros.registerInterceptor",perms:["macro_interceptor"]},{method:"api.macros.listInterceptors",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],p$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:G8.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(l0,{label:g.group,cols:2},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:[i.perms.length===0&&!i.note?Q.jsxDEV(_$,{},void 0,!1,void 0,this):null,i.perms.map((t)=>Q.jsxDEV(V$,{children:t},t,!1,void 0,this)),i.note?Q.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:i.perms.length?4:0},children:i.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},i.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X8=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],j$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:X8.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Y8=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],d$=({type:g})=>{if(g==="silent")return Q.jsxDEV(E$,{},void 0,!1,void 0,this);if(g==="boolean")return Q.jsxDEV(qo,{children:'"true" / "false"'},void 0,!1,void 0,this);return Q.jsxDEV(qo,{children:"string"},void 0,!1,void 0,this)},s$=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:Y8.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(l0,{label:g.description?Q.jsxDEV(Q.Fragment,{children:[g.label," — ",Q.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:g.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):g.label,cols:4},`hdr-${g.label}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:i.aliases==="—"?Q.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):Q.jsxDEV(qo,{children:i.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:Q.jsxDEV(d$,{type:i.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},i.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),J8=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:`Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.`,fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."},{field:"triggerGeneration?",type:"boolean",optional:!0,desc:"When true, the host triggers a normal LLM continuation after the message is appended (full preset / persona / world info / regex / character card / streaming pipeline — same as the user pressing Enter on an empty input bar). Use for click-to-respond UIs where the script wants the LLM to immediately reply to its appended message. Requires Lumiverse host >= 0.9.x with triggerGeneration support (lumiverse-spindle-types >= 0.4.66); silently ignored on older hosts. v0.27.4+."},{field:"generation?",type:"ChatGenerationOptions",optional:!0,desc:"Per-call overrides for the triggered generation (connection / persona / preset / parameters / target character / council retention). Only consulted when triggerGeneration is true; silently ignored otherwise. Each field is optional and falls through to the active chat's defaults when omitted. v0.27.4+."}]},{name:"ChatGenerationOptions",note:"Per-call generation overrides for api.chat.sendMessage(content, { triggerGeneration: true, generation: ... }). Mirrors the host's ChatAppendGenerationOptionsDTO 1:1 in camelCase. Each field is optional; omitted fields fall through to the active chat's resolved defaults (same as a manual UI generation). Use this when a tool script needs to deviate from the user's normal chat configuration for a single triggered generation. v0.27.4+.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Override which connection profile to use. Falls back to the user's default connection."},{field:"personaId?",type:"string",optional:!0,desc:"Override which persona to use. Falls back to the user's active persona setting."},{field:"personaAddonStates?",type:"Record<string, boolean>",optional:!0,desc:"Per-addon enable/disable map for the chosen persona. Keys are addon ids; values are booleans. Omitted addons inherit chat-level state."},{field:"presetId?",type:"string",optional:!0,desc:"Override which preset to use. Falls back to the active preset setting (activeLoomPresetId), then to the connection's attached preset."},{field:"forcePresetId?",type:"boolean",optional:!0,desc:`When true, forces the supplied presetId over a connection-bound preset. Currently only consulted by the host's impersonation oneliner pipeline; triggerGeneration runs as generation_type "normal" where this field is a silent no-op. Exposed for fidelity with the host DTO.`},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Per-call parameter overrides (temperature, max_tokens, top_p, etc.) layered on the resolved preset's parameters. Provider-specific keys accepted; forwarded verbatim."},{field:"targetCharacterId?",type:"string",optional:!0,desc:"For group chats only: which character should respond. Falls back to the chat's character_id."},{field:"retainCouncil?",type:"boolean",optional:!0,desc:"When true, retains council-tool results from the previous generation rather than re-running them. Useful for cheap regenerate-style flows where the council context hasn't changed. Default false."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"MessageContentProcessorOptions",note:"Passed to api.chat.registerContentProcessor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first within the LumiScript multiplexer pass. Default 100."},{field:"origin?",type:"MessageContentProcessorOrigin | MessageContentProcessorOrigin[]",optional:!0,desc:"Restrict to specific origins. Default: all four. Pre-filtered before invocation."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MessageContentProcessorCtx",note:"Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"messageId?",type:"string",optional:!0,desc:"Undefined for 'create' origins (the row doesn't exist yet)."},{field:"content",type:"string",optional:!1,desc:"Current content (already transformed by any earlier processors in the chain)."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins."},{field:"origin",type:"'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'",optional:!1,desc:"Which path triggered this invocation. 'create' includes auto-greetings. 'render' (host ≥0.9.7) fires on per-message display rendering — non-persisting, fires often, returned extra ignored."},{field:"swipeIndex?",type:"number",optional:!0,desc:"Set for 'swipe_update' only — zero-based index of the swipe being rewritten."},{field:"userId",type:"string",optional:!1,desc:"Owning user id for the write."}]},{name:"MessageContentProcessorResult",note:"Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint."},{field:"extra?",type:"Record<string, unknown>",optional:!0,desc:"Delta keys to shallow-merge. Ignored on swipe origins and 'render'."}]},{name:"MacroInterceptorOptions",note:"Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100."},{field:"phase?",type:"MacroInterceptorPhase | MacroInterceptorPhase[]",optional:!0,desc:"Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'."},{field:"matchTemplate?",type:"string | string[] | RegExp",optional:!0,desc:"Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout. Default 2000. The host's outer 10-second budget is shared across all LumiScript handlers."}]},{name:"MacroInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.",fields:[{field:"template",type:"string",optional:!1,desc:"Current raw template (post earlier-handler transforms)."},{field:"env",type:"MacroInterceptorEnv",optional:!1,desc:"Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead."},{field:"commit",type:"boolean",optional:!1,desc:"Whether the host is in commit mode for this evaluation."},{field:"phase",type:"'prompt' | 'display' | 'response' | 'other'",optional:!1,desc:"Which call site triggered this evaluation."},{field:"sourceHint?",type:"string",optional:!0,desc:"Optional source hint when the host can attribute the eval (preset block name, etc.)."},{field:"userId?",type:"string",optional:!0,desc:"User ID that initiated the macro resolution (when available)."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMDelegateOptions",note:"Options for api.ui.dom.delegate(selector, event, handler, options?). v0.27.1+.",fields:[{field:"root?",type:"'chat' | 'document'",optional:!0,desc:"Where to attach the actual host-side capture listener. 'chat' (default): restricts matching to chat content; matches descendants of [data-message-id]. 'document': matches anywhere in the page (including Lumiverse's own UI surfaces). Both gate on app_manipulation."},{field:"messageId?",type:"string",optional:!0,desc:'Limit matching to a specific message id. Has no effect when root is "document".'},{field:"preventDefault?",type:"boolean | ConditionalPreventDefault",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() before dispatching on every selector match. v0.27.5+: can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations (e.g. plain Enter on textarea while letting Shift+Enter through). Default: false."},{field:"stopPropagation?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.stopPropagation() after dispatching, preventing host-side and other delegation listeners from also reacting. Default: false."}]},{name:"DOMDelegatedEventData",note:"Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context. v0.27.1+.",fields:[{field:"matched",type:"{ tagName, classList, dataset, attributes, textContent, id?, value?, checked?, selectedIndex?, selectedText?, label? }",optional:!1,desc:'Snapshot of the element matched by event.target.closest(selector). May be an ancestor of the literal event.target. Form-input fields (value/checked/selectedIndex/selectedText/label) populated only for matching element types. label is the trimmed text of the first associated <label> (input / textarea / select only — explicit "for=" or implicit wrapping).'},{field:"modifiers",type:"{ ctrl, shift, alt, meta, button? }",optional:!1,desc:"Modifier-key state at event time. button is populated for click events (0=left, 1=middle, 2=right)."},{field:"message?",type:"{ id, role, swipeId }",optional:!0,desc:`Populated when the matched element is inside an assistant or user message. role: 'user' for [data-part="user"], 'assistant' otherwise. swipeId is the active swipe at dispatch time, resolved backend-side via the host's chat history. Falls through with 0 if the chat closed between event fire and dispatch or the message left the history.`},{field:"(plus DOMEventData fields)",type:"see DOMEventData",optional:!1,desc:"Inherits type, targetId, targetValue, targetChecked, dataset, detail, clientX, clientY from DOMEventData (see above)."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."},{field:"key?",type:"string",optional:!0,desc:"KeyboardEvent.key — the value of the key pressed, modifier-aware ('Enter', 'Escape', 'a', 'A', 'ArrowUp', 'Shift'). Populated only for keydown / keyup / keypress events. Use this to distinguish e.g. Enter-to-submit on a text input."},{field:"code?",type:"string",optional:!0,desc:"KeyboardEvent.code — physical key on the keyboard, layout-independent ('Enter', 'KeyA' regardless of shift, 'ArrowUp', 'ShiftLeft'). Populated only for keydown / keyup / keypress events. Use this for physical-position bindings (e.g. WASD)."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean | ConditionalPreventDefault",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. v0.27.5+: can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations. Default: false."}]},{name:"ConditionalPreventDefault",note:"Predicate-based preventDefault rule for DOMDelegateOptions / DOMListenOptions (v0.27.5+). Fires event.preventDefault() only when the event matches all provided filters (AND semantics). Each filter is optional; empty {} = always match (equivalent to `preventDefault: true`). Filters are evaluated synchronously frontend-side at fire time. Common shapes: { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } } (plain Enter, not Shift+Enter); { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } } (Ctrl+S override); { onButtons: [2] } (right-click only).",fields:[{field:"onKeys?",type:"string[]",optional:!0,desc:"KeyboardEvent.key value(s) — OR-matched within the array. Non-keyboard events skipped (preventDefault does NOT fire) when this is set."},{field:"onCodes?",type:"string[]",optional:!0,desc:"KeyboardEvent.code value(s) — physical key, layout-independent. Same keyboard-only semantics as onKeys. Use for physical-position bindings (e.g. WASD)."},{field:"onButtons?",type:"number[]",optional:!0,desc:"MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. Non-mouse events skipped when set."},{field:"whenModifiers?",type:"{ require?, exclude? }",optional:!0,desc:"Modifier-key constraint. ALL of require must be held; NONE of exclude may be held. Values: shift / ctrl / alt / meta. Applies to KeyboardEvent and MouseEvent."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.'},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."},{field:"extensions?",type:"Record<string, unknown>",optional:!0,desc:"Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"WorldInfoInterceptorEntry",note:"Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"comment",type:"string",optional:!1,desc:"Author-facing comment / label for the entry."},{field:"disabled",type:"boolean",optional:!1,desc:"Stored disabled flag (or accumulated disable from earlier handlers in the chain)."},{field:"constant",type:"boolean",optional:!1,desc:"Always-active flag."},{field:"extensions",type:"Record<string, unknown>",optional:!1,desc:"Per-extension namespace metadata stored on the entry."},{field:"key",type:"readonly string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"readonly string[]",optional:!1,desc:"Secondary trigger keywords."},{field:"position",type:"number",optional:!1,desc:"Injection position."},{field:"depth",type:"number",optional:!1,desc:"Injection depth."},{field:"priority",type:"number",optional:!1,desc:"Activation priority."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100)."},{field:"useProbability",type:"boolean",optional:!1,desc:"Whether probability gating applies."},{field:"content",type:"string",optional:!1,desc:"Entry text content (reflects mutations from earlier handlers in the chain)."}]},{name:"WorldInfoInterceptorMessage",note:"One chat message exposed to a registerInterceptor handler.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message role."},{field:"content",type:"string",optional:!1,desc:"Message content."}]},{name:"WorldInfoInterceptorCtx",note:"Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",fields:[{field:"chatId",type:"string",optional:!1,desc:"Active chat id."},{field:"characterId",type:"string",optional:!1,desc:"Active character id."},{field:"userId?",type:"string",optional:!0,desc:"Owning user id. Pass to operator-scoped Spindle calls."},{field:"entries",type:"readonly WorldInfoInterceptorEntry[]",optional:!1,desc:"Candidate entries with prior handlers' mutations applied."},{field:"messages",type:"readonly WorldInfoInterceptorMessage[]",optional:!1,desc:"Chat-history snapshot."},{field:"chatTurn",type:"number",optional:!1,desc:"Turn number for this chat."},{field:"chatMetadata",type:"Record<string, unknown>",optional:!1,desc:"Chat-level metadata snapshot. Read-only."}]},{name:"WorldInfoInterceptorResult",note:"Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.",fields:[{field:"disabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-disable. Wins against any later enabled / forced vote."},{field:"enabled?",type:"readonly string[]",optional:!0,desc:"Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled."},{field:"forced?",type:"readonly string[]",optional:!0,desc:"Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced."},{field:"mutated?",type:"readonly { id: string; content: string }[]",optional:!0,desc:"Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id."}]},{name:"WorldInfoInterceptorOptions",note:"Passed to api.worldInfo.registerInterceptor(handler, options?).",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted."},{field:"priority?",type:"number",optional:!0,desc:"Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers' decisions applied to the entry list."},{field:"timeoutMs?",type:"number",optional:!0,desc:"Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call."}]},{name:"RegisteredWorldInfoInterceptorInfo",note:"Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.",fields:[{field:"scriptId",type:"string",optional:!1,desc:"Owning script id."},{field:"scriptName",type:"string",optional:!1,desc:"Owning script display name."},{field:"id",type:"string",optional:!1,desc:"Resolved entry id (auto-generated or user-provided)."},{field:"priority",type:"number",optional:!1,desc:"Effective priority value."},{field:"timeoutMs",type:"number",optional:!1,desc:"Effective per-invocation timeout (ms)."}]},{name:"RegexScriptInfo",note:"Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique row id."},{field:"name",type:"string",optional:!1,desc:"Display name shown in the regex panel."},{field:"scriptId",type:"string",optional:!1,desc:"Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern compiled with the JavaScript regex engine."},{field:"replaceString",type:"string",optional:!1,desc:"Replacement template. Supports $1 / $& / $<name> capture references."},{field:"flags",type:"string",optional:!1,desc:'Any subset of "gimsu".'},{field:"placement",type:"RegexPlacement[]",optional:!1,desc:"Which message roles the rule applies to."},{field:"scope",type:"RegexScope",optional:!1,desc:"Scope tier: 'global' | 'character' | 'chat'."},{field:"scopeId",type:"string | null",optional:!1,desc:"Required when scope is non-global; null otherwise."},{field:"target",type:"RegexTarget",optional:!1,desc:"When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)."},{field:"minDepth",type:"number | null",optional:!1,desc:"Lower bound on chat-history depth (0 = latest), or null for unbounded."},{field:"maxDepth",type:"number | null",optional:!1,desc:"Upper bound on chat-history depth, or null for unbounded."},{field:"trimStrings",type:"string[]",optional:!1,desc:"Additional substrings stripped from output after the regex pass."},{field:"runOnEdit",type:"boolean",optional:!1,desc:"Re-run the rule when a message is edited."},{field:"substituteMacros",type:"RegexMacroMode",optional:!1,desc:"How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'."},{field:"disabled",type:"boolean",optional:!1,desc:"When true, the rule is registered but not active."},{field:"sortOrder",type:"number",optional:!1,desc:"Lower values run earlier within the same scope tier."},{field:"description",type:"string",optional:!1,desc:"Free-form note."},{field:"folder",type:"string",optional:!1,desc:"Folder label shown in the regex panel."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata namespaced to the creating extension."},{field:"createdAt",type:"number",optional:!1,desc:"Unix epoch seconds."},{field:"updatedAt",type:"number",optional:!1,desc:"Unix epoch seconds."}]},{name:"RegexScriptListOptions",note:"Filter options for api.regexScripts.list().",fields:[{field:"scope?",type:"'global' | 'character' | 'chat'",optional:!0,desc:"Filter to a single scope. Omit to include all scopes."},{field:"scopeId?",type:"string",optional:!0,desc:"Required when scope is 'character' or 'chat'. Ignored otherwise."},{field:"target?",type:"'prompt' | 'response' | 'display'",optional:!0,desc:"Filter by execution target."},{field:"limit?",type:"number",optional:!0,desc:"Page size. Default 50, max 200."},{field:"offset?",type:"number",optional:!0,desc:"Pagination offset."}]},{name:"RegexScriptActiveOptions",note:"Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.",fields:[{field:"target",type:"'prompt' | 'response' | 'display'",optional:!1,desc:"Required. The execution target to resolve for."},{field:"characterId?",type:"string",optional:!0,desc:"Include character-scoped rules attached to this character."},{field:"chatId?",type:"string",optional:!0,desc:"Include chat-scoped rules attached to this chat."}]},{name:"RegexScriptCreateInput",note:"Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.",fields:[{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"findRegex",type:"string",optional:!1,desc:"Pattern (JavaScript regex)."},{field:"replaceString?",type:"string",optional:!0,desc:"Replacement template. Default empty string."},{field:"flags?",type:"string",optional:!0,desc:'Any subset of "gimsu". Default "gi".'},{field:"placement?",type:"RegexPlacement[]",optional:!0,desc:'Default ["ai_output"].'},{field:"scope?",type:"RegexScope",optional:!0,desc:"Default 'global'."},{field:"scopeId?",type:"string | null",optional:!0,desc:"Required when scope is non-global."},{field:"target?",type:"RegexTarget",optional:!0,desc:"Default 'response'."},{field:"minDepth?",type:"number | null",optional:!0,desc:"Lower depth bound."},{field:"maxDepth?",type:"number | null",optional:!0,desc:"Upper depth bound."},{field:"trimStrings?",type:"string[]",optional:!0,desc:"Additional substrings stripped from output."},{field:"runOnEdit?",type:"boolean",optional:!0,desc:"Re-run on edit."},{field:"substituteMacros?",type:"RegexMacroMode",optional:!0,desc:"How CBS / {{...}} macros inside the rule resolve. Default 'none'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Create as disabled."},{field:"sortOrder?",type:"number",optional:!0,desc:"Default 0."},{field:"description?",type:"string",optional:!0,desc:"Free-form note."},{field:"folder?",type:"string",optional:!0,desc:"Folder label."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."},{field:"scriptId?",type:"string",optional:!0,desc:"Stable identifier. Normalized to lowercase + underscores by the host."}]},{name:"RegexScriptUpdateInput",note:"Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.",fields:[{field:"(all RegexScriptCreateInput fields, all optional)",type:"—",optional:!0,desc:"Only the fields you provide are updated; omitted fields are left unchanged."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"CouncilSettings",note:"Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",fields:[{field:"councilMode",type:"boolean",optional:!1,desc:"Whether Council mode is currently enabled for this user."},{field:"members",type:"CouncilMember[]",optional:!1,desc:"Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]."},{field:"toolsSettings",type:"CouncilToolsSettings",optional:!1,desc:"Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)."}]},{name:"CouncilMember",note:"A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Council member id (settings row id)."},{field:"packId",type:"string",optional:!1,desc:"Pack id that contains the source Lumia item."},{field:"packName",type:"string",optional:!1,desc:"Pack name (display label)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"itemName",type:"string",optional:!1,desc:"Source Lumia item display name."},{field:"tools",type:"string[]",optional:!1,desc:"Tool names this member is assigned (empty array if no tools)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description (e.g. "Plot Enforcer").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates each generation."}]},{name:"CouncilMemberContext",note:"Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id."},{field:"packName",type:"string",optional:!1,desc:"Pack name."},{field:"name",type:"string",optional:!1,desc:"Display name (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:"Freeform role description."},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) per generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar (e.g. /api/v1/images/{id}), or null."},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical / identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the typed surface in spindle-types 0.4.40 — type-vs-doc inconsistency tracked.)"}]},{name:"CouncilToolsSettings",note:"Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.",fields:[{field:"mode",type:"'sidecar' | 'inline'",optional:!1,desc:"'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM."},{field:"timeoutMs",type:"number",optional:!1,desc:"Timeout per tool call in ms."},{field:"sidecarContextWindow",type:"number",optional:!1,desc:"Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')."},{field:"includeUserPersona",type:"boolean",optional:!1,desc:"Whether to include the user persona in tool context."},{field:"includeCharacterInfo",type:"boolean",optional:!1,desc:"Whether to include the active character info in tool context."},{field:"includeWorldInfo",type:"boolean",optional:!1,desc:"Whether to include activated world info in tool context."},{field:"allowUserControl",type:"boolean",optional:!1,desc:"Whether the user can trigger individual tools on demand."},{field:"maxWordsPerTool",type:"number",optional:!1,desc:"Word limit per tool response (0 = unlimited)."},{field:"retainResultsForRegens?",type:"boolean",optional:!0,desc:"When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations."},{field:"enabled?",type:"boolean",optional:!0,desc:"@deprecated — kept for backwards compatibility with saved settings."}]},{name:"LumiaItem",note:"Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique Lumia item id."},{field:"packId",type:"string",optional:!1,desc:"Pack id this item belongs to."},{field:"name",type:"string",optional:!1,desc:"Display name."},{field:"avatarUrl",type:"string | null",optional:!1,desc:"Relative URL to the avatar image, or null when no avatar is set."},{field:"authorName",type:"string",optional:!1,desc:"Display name of the pack author."},{field:"definition",type:"string",optional:!1,desc:"Physical / identity description (free-form text)."},{field:"personality",type:"string",optional:!1,desc:"Personality description (free-form text)."},{field:"behavior",type:"string",optional:!1,desc:"Behavioural patterns (free-form text)."},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)"},{field:"version",type:"string",optional:!1,desc:'Pack-author-supplied version string (e.g. "1.0.0").'},{field:"sortOrder",type:"number",optional:!1,desc:"Sort index within the pack (lower renders first)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix seconds)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix seconds)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],rL=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:J8.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&Q.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),z8=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."},{name:"registerContentProcessor",args:"handler, options?",desc:"Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation."},{name:"listContentProcessors",args:"—",desc:"List all currently registered message content processors across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"delegate",args:"selector, event, handler, options?",desc:`Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn't inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. v0.27.1+. Requires app_manipulation.`},{name:"cleanup",args:"—",desc:"Remove all DOM injections, styles, and delegations created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+."},{name:"listInterceptors",args:"—",desc:"Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.regexScripts",rows:[{name:"list",args:"options?",desc:"List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }."},{name:"get",args:"scriptId",desc:"Get a single regex script by id. Returns null if not found."},{name:"findByName",args:"name, scope?",desc:"Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case."},{name:"getActive",args:"options",desc:"Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId."},{name:"create",args:"input",desc:"Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)."},{name:"update",args:"scriptId, input",desc:"Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found."},{name:"delete",args:"scriptId",desc:"Delete a regex script. Returns true if the row was deleted."}]},{group:"api.council",rows:[{name:"getSettings",args:"—",desc:"Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required."},{name:"getMembers",args:"—",desc:"Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle."},{name:"getAvailableLumiaItems",args:"—",desc:"Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."},{name:"registerInterceptor",args:"handler, options?",desc:"Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission."},{name:"listInterceptors",args:"—",desc:"List all currently registered macro interceptors across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],oL=()=>Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:z8.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV(l0,{label:g.group,cols:3},`hdr-${g.group}`,!1,void 0,this),g.rows.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.group}-${i.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Q8=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],K8=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],eL=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],U8=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],gL=()=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",Q.jsxDEV(qo,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",Q.jsxDEV(qo,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",Q.jsxDEV(qo,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",Q.jsxDEV(qo,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",Q.jsxDEV(qo,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",Q.jsxDEV(qo,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),Q.jsxDEV("table",{className:"ls-ref-table",children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:[Q.jsxDEV(l0,{label:"ls:components",cols:3},void 0,!1,void 0,this),Q8.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),Q.jsxDEV(l0,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),K8.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this)),Q.jsxDEV(l0,{label:"ls:icons",cols:3},void 0,!1,void 0,this),eL.map((g)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:g.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:g.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},g.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[Q.jsxDEV("thead",{children:Q.jsxDEV("tr",{children:[Q.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),Q.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("tbody",{children:U8.map((g)=>Q.jsxDEV(Q.Fragment,{children:[Q.jsxDEV("tr",{children:Q.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[g.name,g.note&&Q.jsxDEV("div",{className:"ls-ref-type-note",children:g.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${g.name}`,!1,void 0,this),g.fields.map((i)=>Q.jsxDEV("tr",{children:[Q.jsxDEV("td",{children:Q.jsxDEV(qo,{children:i.optional&&!i.field.endsWith("?")?`${i.field}?`:i.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV("td",{children:Q.jsxDEV("span",{className:"ls-ref-muted",children:i.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${g.name}-${i.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),R3=()=>Q.jsxDEV("div",{className:"ls-ref",children:[Q.jsxDEV("div",{className:"ls-ref-toolbar",children:Q.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>H3(),title:"Download the current reference as a Markdown file",children:[Q.jsxDEV(Lv,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(Wi,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:Q.jsxDEV(f$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(g1,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:Q.jsxDEV(p$,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(v1,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[Q.jsxDEV(j$,{},void 0,!1,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",Q.jsxDEV(qo,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(dh,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[Q.jsxDEV(s$,{},void 0,!1,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",Q.jsxDEV(qo,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",Q.jsxDEV(qo,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(Cl,{size:11},void 0,!1,void 0,this),title:"Key Types",children:Q.jsxDEV(rL,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(e1,{size:11},void 0,!1,void 0,this),title:"API Functions",children:Q.jsxDEV(oL,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(yh,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:Q.jsxDEV(gL,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),Q.jsxDEV(In,{icon:Q.jsxDEV(i1,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[Q.jsxDEV("p",{className:"ls-ref-muted",children:[Q.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",Q.jsxDEV(qo,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",Q.jsxDEV(qo,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",Q.jsxDEV(qo,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",Q.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),Q.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[Q.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",Q.jsxDEV(qo,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",Q.jsxDEV(qo,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",Q.jsxDEV(qo,{children:"enabled: false"},void 0,!1,void 0,this)," and ",Q.jsxDEV(qo,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var mr=wr(dr(),1),W3=!1,G3=({script:g,allScripts:i,activeContext:t,isRunning:h,consoleEntries:u,editorFontSize:P,autosaveDebounceMs:O,onClearConsole:m,sendToBackend:R})=>{let[X,W]=$o.useState(g.code),[q,G]=$o.useState(!1),[L,S]=$o.useState(!1),[I,k]=$o.useState(g.name),[j,Pr]=$o.useState("code"),[lr,f]=$o.useState(!1),[s,ir]=$o.useState(!1),[Z,y]=$o.useState("pending"),p=$o.useRef(null),N=$o.useRef(null),Rr=$o.useRef(null),qr=$o.useRef(null),Wr=$o.useRef(g.id),Cr=$o.useRef(R);$o.useEffect(()=>{Wr.current=g.id},[g.id]),$o.useEffect(()=>{Cr.current=R},[R]),$o.useEffect(()=>{W(g.code),G(!1),k(g.name),ir(!1),y("pending")},[g.id,g.code,g.name]),$o.useEffect(()=>{if(j!=="code")return;if(Z!=="pending")return;return p.current=setTimeout(()=>{y((_)=>_==="pending"?"mount-timeout":_)},15000),()=>{if(p.current)clearTimeout(p.current),p.current=null}},[j,Z]),$o.useEffect(()=>{return()=>{if(N.current)clearTimeout(N.current),N.current=null;let _=qr.current;if(_!==null){console.log(`[LumiScript] ScriptEditor unmount: flushing pending save (script=${Wr.current}, len=${_.length})`);try{Cr.current({type:"update_script",id:Wr.current,patch:{code:_}})}catch(Yr){console.error("[LumiScript] ScriptEditor unmount-flush failed:",Yr)}qr.current=null}}},[]),$o.useEffect(()=>{R({type:"get_active_context"})},[g.id,R]),$o.useEffect(()=>{let _=setInterval(()=>{R({type:"get_active_context"})},2000);return()=>clearInterval(_)},[R]);let a=$o.useCallback((_)=>{console.log(`[LumiScript] saveCode: script=${g.id}, len=${_.length}, head="${_.slice(0,40).replace(/\n/g,"\\n")}"`),R({type:"update_script",id:g.id,patch:{code:_}}),qr.current=null,G(!1)},[g.id,R]),or=(_)=>{if(_===void 0)return;if(W(_),G(_!==g.code),qr.current=_,N.current)clearTimeout(N.current);N.current=setTimeout(()=>a(_),O)},nr=(_,Yr)=>{if(Rr.current=_,p.current)clearTimeout(p.current),p.current=null;if(y("ok"),!W3){W3=!0;let xr=Yr.languages.typescript.javascriptDefaults;xr.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),xr.setCompilerOptions({target:Yr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),xr.addExtraLib(m3,"ts:lumiverse/lumiscript-api.d.ts")}_.addCommand(Yr.KeyMod.CtrlCmd|Yr.KeyCode.KeyS,()=>{if(N.current)clearTimeout(N.current);a(_.getValue())}),_.getModel()?.setEOL(Yr.editor.EndOfLineSequence.LF);let gr=_.getDomNode();if(gr){let xr=()=>{let yr=!1,Po=_.onDidFocusEditorWidget(()=>{yr=!0});setTimeout(()=>{if(Po.dispose(),!yr)y((te)=>te==="ok"?"unresponsive":te)},1000)};gr.addEventListener("mousedown",xr,{once:!0,capture:!0})}},Kr=()=>{if(h)return;if(N.current)clearTimeout(N.current),N.current=null;if(q)a(Rr.current?.getValue()??X);R({type:"run_script",id:g.id})},Xr=()=>{let _=I.trim();if(_&&_!==g.name)R({type:"update_script",id:g.id,patch:{name:_}});S(!1)},c=(_)=>{let Yr=g.bindings??[];R({type:"update_script",id:g.id,patch:{bindings:[...Yr,_]}})},T=(_)=>{R({type:"update_script",id:g.id,patch:{bindings:(g.bindings??[]).filter((Yr,gr)=>gr!==_)}})},tr=()=>{if(g.allowDangerous)R({type:"update_script",id:g.id,patch:{allowDangerous:!1}});else if(s)ir(!1),R({type:"update_script",id:g.id,patch:{allowDangerous:!0}});else ir(!0)},Hr=(_)=>new Date(_).toLocaleString();return mr.jsxDEV("div",{className:"ls-editor-root",children:[mr.jsxDEV("div",{className:"ls-editor-topbar",children:[L?mr.jsxDEV("input",{className:"ls-editor-name-input",value:I,autoFocus:!0,onChange:(_)=>k(_.target.value),onBlur:Xr,onKeyDown:(_)=>{if(_.key==="Enter")Xr();if(_.key==="Escape")k(g.name),S(!1)}},void 0,!1,void 0,this):mr.jsxDEV("span",{className:"ls-editor-name",onClick:()=>S(!0),title:"Click to rename",style:{cursor:"text"},children:g.name},void 0,!1,void 0,this),q&&mr.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),mr.jsxDEV("button",{className:`ls-tab-pill${j==="code"?" ls-active":""}`,onClick:()=>Pr("code"),title:"Code editor",children:[mr.jsxDEV(Ge,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),mr.jsxDEV("button",{className:`ls-tab-pill${j==="docs"?" ls-active":""}`,onClick:()=>Pr("docs"),title:"API reference",children:[mr.jsxDEV(Vh,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),g.type!=="library"&&mr.jsxDEV("button",{className:`ls-btn${h?"":" ls-accent"}`,onClick:Kr,disabled:h,children:[h?mr.jsxDEV(Tl,{size:15,style:{animation:"ls-spin 1s linear infinite"}},void 0,!1,void 0,this):mr.jsxDEV(Iv,{size:15},void 0,!1,void 0,this),h?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j==="code"&&mr.jsxDEV("div",{className:"ls-editor-monaco",children:[mr.jsxDEV(h3,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:X,onChange:or,onMount:nr,options:{minimap:{enabled:!1},fontSize:P,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},g.id,!1,void 0,this),(Z==="mount-timeout"||Z==="unresponsive")&&mr.jsxDEV("div",{className:"ls-editor-failed-overlay",children:[mr.jsxDEV("h3",{className:"ls-editor-failed-title",children:Z==="mount-timeout"?"The script editor failed to load.":"The editor isn't accepting input."},void 0,!1,void 0,this),mr.jsxDEV("p",{className:"ls-editor-failed-desc",children:Z==="mount-timeout"?"Monaco did not finish initialising within 15 seconds. This usually means the Monaco CDN is blocked (corporate firewall, browser extension, restrictive network), or the browser environment is preventing the bundle from running.":"You clicked into the editor but it did not receive focus within 1 second. This usually means a browser-specific Monaco init failure — most commonly seen on Firefox with corrupted Windows font cache or aggressive security software."},void 0,!1,void 0,this),mr.jsxDEV("p",{className:"ls-editor-failed-steps-label",children:"Try these steps:"},void 0,!1,void 0,this),mr.jsxDEV("ul",{className:"ls-editor-failed-steps",children:[mr.jsxDEV("li",{children:"Reload the page (Ctrl+R / Cmd+R)."},void 0,!1,void 0,this),mr.jsxDEV("li",{children:"Try a different browser — Chrome and Edge are generally most reliable."},void 0,!1,void 0,this),Z==="unresponsive"&&mr.jsxDEV(mr.Fragment,{children:[mr.jsxDEV("li",{children:["On Firefox + Windows: clear the Windows Font Cache. Open ",mr.jsxDEV("code",{children:"services.msc"},void 0,!1,void 0,this),", stop ",mr.jsxDEV("em",{children:"Windows Font Cache Service"},void 0,!1,void 0,this),", delete ",mr.jsxDEV("code",{children:"C:\\Windows\\System32\\FNTCACHE.DAT"},void 0,!1,void 0,this),", start the service again, then reload the page."]},void 0,!0,void 0,this),mr.jsxDEV("li",{children:["Try a fresh Firefox profile via ",mr.jsxDEV("code",{children:"about:profiles"},void 0,!1,void 0,this)," to rule out profile-level configuration interference."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Z==="mount-timeout"&&mr.jsxDEV("li",{children:["Open the browser console and look for network errors or CSP violations against ",mr.jsxDEV("code",{children:"cdn.jsdelivr.net"},void 0,!1,void 0,this),"."]},void 0,!0,void 0,this),mr.jsxDEV("li",{children:["Open ",mr.jsxDEV("strong",{children:"LumiScript Settings → Support → View Diagnostics"},void 0,!1,void 0,this)," for a runtime state snapshot — there's a ",mr.jsxDEV("strong",{children:"Copy Report"},void 0,!1,void 0,this)," button that produces a Markdown dump you can paste into Discord support reports."]},void 0,!0,void 0,this),mr.jsxDEV("li",{children:"If none of the above resolves it, please report on Discord with browser + OS details and any console output."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("button",{className:"ls-editor-failed-dismiss",onClick:()=>y("ok"),children:"Dismiss"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),j==="docs"&&mr.jsxDEV("div",{className:"ls-editor-docs",children:mr.jsxDEV(R3,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),j==="code"&&mr.jsxDEV(b3,{entries:u,isRunning:h,onClear:m},void 0,!1,void 0,this),g.type==="trigger"&&mr.jsxDEV(O3,{scriptId:g.id,triggers:g.triggers??[],sendToBackend:R},void 0,!1,void 0,this),g.type==="trigger"&&mr.jsxDEV(u3,{bindings:g.bindings??[],activeContext:t,onAdd:c,onRemove:T},void 0,!1,void 0,this),s&&mr.jsxDEV("div",{className:"ls-danger-confirm",children:[mr.jsxDEV(ft,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),mr.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:tr,children:"Enable"},void 0,!1,void 0,this),mr.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>ir(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("div",{className:"ls-meta-footer",children:[mr.jsxDEV("span",{className:"ls-meta-item",children:mr.jsxDEV("button",{className:"ls-danger-btn",onClick:tr,title:"Toggle dangerous mode",children:[g.allowDangerous?mr.jsxDEV(ft,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):mr.jsxDEV(h1,{size:11},void 0,!1,void 0,this),mr.jsxDEV("span",{className:g.allowDangerous?"ls-dangerous":"",children:g.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[mr.jsxDEV(xv,{size:10},void 0,!1,void 0,this),mr.jsxDEV("select",{className:"ls-folder-select",value:g.folder??"",onChange:(_)=>{let Yr=_.target.value;if(Yr==="__new__"){let gr=window.prompt("New folder name:");if(gr?.trim())R({type:"update_script",id:g.id,patch:{folder:gr.trim()}})}else R({type:"update_script",id:g.id,patch:{folder:Yr}})},children:[mr.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(i.map((_)=>_.folder).filter((_)=>!!_))].sort().map((_)=>mr.jsxDEV("option",{value:_,children:_},_,!1,void 0,this)),mr.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item",children:[mr.jsxDEV(ph,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["Updated ",Hr(g.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item",children:[mr.jsxDEV(_h,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["Created ",Hr(g.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),mr.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:g.id,onClick:()=>{navigator.clipboard.writeText(g.id).catch(()=>{}),f(!0),setTimeout(()=>f(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[lr?mr.jsxDEV($v,{size:10},void 0,!1,void 0,this):mr.jsxDEV(Wg,{size:10},void 0,!1,void 0,this),mr.jsxDEV("span",{children:["ID ",g.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Ie=wr(dr(),1),Y3=({scripts:g,initialScriptId:i,activeContext:t,execInfo:h,activeRunScriptId:u,isRunning:P,consoleHistory:O,editorFontSize:m,autosaveDebounceMs:R,onClearConsole:X,onClose:W,sendToBackend:q})=>{let[G,L]=C1.useState(i),S=g.find((lr)=>lr.id===G)??null;C1.useEffect(()=>{L(i)},[i]),C1.useEffect(()=>{let lr=(f)=>{if(f.key==="Escape")W()};return document.addEventListener("keydown",lr),()=>document.removeEventListener("keydown",lr)},[W]);let I=S?O[S.id]??[]:[],k=P&&S?.id===u;return X3.createPortal(Ie.jsxDEV("div",{className:"ls-modal-overlay",onClick:(lr)=>{if(lr.target===lr.currentTarget)W()},children:Ie.jsxDEV("div",{className:"ls-modal-card",onClick:(lr)=>lr.stopPropagation(),children:[Ie.jsxDEV("div",{className:"ls-modal-header",children:[Ie.jsxDEV("span",{className:"ls-modal-title",children:[Ie.jsxDEV(al,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),Ie.jsxDEV("button",{className:"ls-modal-close",onClick:W,title:"Close (Esc)",children:Ie.jsxDEV(Ye,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ie.jsxDEV("div",{className:"ls-modal-body",children:[Ie.jsxDEV("div",{className:"ls-modal-sidebar",children:Ie.jsxDEV($5,{scripts:g,selectedId:G,execInfo:h,onSelect:L,onEdit:L,sendToBackend:q},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ie.jsxDEV("div",{className:"ls-modal-main",children:S?Ie.jsxDEV(G3,{script:S,allScripts:g,activeContext:t,isRunning:k,consoleEntries:I,editorFontSize:m,autosaveDebounceMs:R,onClearConsole:()=>{if(S)X(S.id)},sendToBackend:q},void 0,!1,void 0,this):Ie.jsxDEV("div",{className:"ls-placeholder",children:[Ie.jsxDEV(al,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),Ie.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var S5=wr(dr(),1),J3=({scripts:g,activeContext:i,execInfo:t,activeRunScriptId:h,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:m,onClearConsole:R,onScriptOpened:X,sendToBackend:W})=>{let[q,G]=T5.useState(null);return T5.useEffect(()=>{if(q&&X)X(q)},[q,X]),S5.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[S5.jsxDEV($5,{scripts:g,selectedId:q,execInfo:t,onSelect:()=>{},onEdit:G,sendToBackend:W},void 0,!1,void 0,this),q!==null&&S5.jsxDEV(Y3,{scripts:g,initialScriptId:q,activeContext:i,execInfo:t,activeRunScriptId:h,isRunning:u,consoleHistory:P,editorFontSize:O,autosaveDebounceMs:m,onClearConsole:R,onClose:()=>G(null),sendToBackend:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var z3=wr(io(),1);var Eo=wr(dr(),1),lL=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function iL(g){if(g===void 0)return"undefined";if(g===null)return"null";if(typeof g==="string")return g.length>80?g.slice(0,77)+"…":g;try{let i=JSON.stringify(g);return i.length>80?i.slice(0,77)+"…":i}catch{return String(g)}}var Q3=({variables:g,sendToBackend:i})=>{let[t,h]=z3.useState(new Set(["local","global","chat","character"])),u=(O)=>{h((m)=>{let R=new Set(m);if(R.has(O))R.delete(O);else R.add(O);return R})},P=g?Object.values(g).reduce((O,m)=>O+Object.keys(m).length,0):0;return Eo.jsxDEV("div",{className:"ls-status-section",children:[Eo.jsxDEV("div",{className:"ls-inject-header",children:[Eo.jsxDEV(ol,{size:10},void 0,!1,void 0,this),"Variables",P>0&&Eo.jsxDEV("span",{className:"ls-inject-count",children:P},void 0,!1,void 0,this),Eo.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>i({type:"get_variables"}),children:Eo.jsxDEV(Gg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Eo.jsxDEV("div",{className:"ls-status-section-body",children:!g?Eo.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):P===0?Eo.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):lL.map(({key:O,label:m,hint:R})=>{let X=g[O],W=Object.keys(X),q=t.has(O);if(W.length===0)return null;return Eo.jsxDEV("div",{className:"ls-vars-scope",children:[Eo.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>u(O),children:[q?Eo.jsxDEV(Xe,{size:10},void 0,!1,void 0,this):Eo.jsxDEV(Rg,{size:10},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-scope-name",children:m},void 0,!1,void 0,this),R&&Eo.jsxDEV("span",{className:"ls-vars-scope-hint",children:R},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-scope-count",children:W.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),q&&Eo.jsxDEV("div",{className:"ls-vars-scope-body",children:W.sort().map((G)=>Eo.jsxDEV("div",{className:"ls-vars-entry",children:[Eo.jsxDEV("span",{className:"ls-vars-key",children:G},void 0,!1,void 0,this),Eo.jsxDEV("span",{className:"ls-vars-value",title:String(X[G]),children:iL(X[G])},void 0,!1,void 0,this)]},G,!0,void 0,this))},void 0,!1,void 0,this)]},O,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Fn=wr(io(),1);function k5(g){if(!Number.isFinite(g)||g<=0)return"0 B";let i=["B","KB","MB","GB"],t=Math.min(i.length-1,Math.floor(Math.log(g)/Math.log(1024))),h=g/Math.pow(1024,t);return`${t===0?h.toFixed(0):h.toFixed(1)} ${i[t]}`}function S1(g){let i;if(typeof g==="number")i=g;else{if(!g)return"—";i=new Date(g).getTime()}if(!Number.isFinite(i)||i<=0)return"—";let t=Date.now()-i;if(t<60000)return"just now";if(t<3600000)return`${Math.floor(t/60000)}m ago`;if(t<86400000)return`${Math.floor(t/3600000)}h ago`;if(t<2592000000)return`${Math.floor(t/86400000)}d ago`;return new Date(i).toISOString().slice(0,10)}var $8={script:"script",character:"char",chat:"chat"},K3={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function a5(g){return g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(t,h,u,P,O,m,R)=>{if(h)return`<span class="ls-json-key">${h}</span>${u}`;if(P)return`<span class="ls-json-string">${P}</span>`;if(O)return`<span class="ls-json-bool">${O}</span>`;if(m)return`<span class="ls-json-null">${m}</span>`;if(R)return`<span class="ls-json-number">${R}</span>`;return t})}async function L8(g){try{return await navigator.clipboard.writeText(g),!0}catch{return!1}}var Nr=wr(dr(),1),i0=["script","character","chat"],nL=10485760,vL=41943040,tL=52428800;function hL(g){if(g>=vL)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(g>=nL)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function bL(g){if(g.scope==="character"){if(g.characterName)return`character: ${g.characterName} (${g.characterId})
${g.path}`;if(g.characterId)return`character: ${g.characterId} (not currently loaded)
${g.path}`}if(g.scope==="chat"){if(g.chatName)return`chat: ${g.chatName} (${g.chatId})
${g.path}`;if(g.chatId)return`chat: ${g.chatId} (not currently loaded)
${g.path}`}return g.path}function uL(g,i,t,h){switch(t){case"name":return g.name.localeCompare(i.name,void 0,{sensitivity:"base"});case"scope":return g.scope.localeCompare(i.scope);case"owner":{let u=h.get(g.scriptId)??g.scriptId,P=h.get(i.scriptId)??i.scriptId;return u.localeCompare(P,void 0,{sensitivity:"base"})}case"size":return g.sizeBytes-i.sizeBytes;case"updated":return new Date(g.modifiedAt).getTime()-new Date(i.modifiedAt).getTime()}}var U3=({collections:g,scripts:i,sendToBackend:t,onInspect:h,onDrop:u})=>{let[P,O]=Fn.useState(""),[m,R]=Fn.useState(()=>new Set(i0)),[X,W]=Fn.useState(null),[q,G]=Fn.useState("asc"),L=Fn.useMemo(()=>{let Z=new Map;for(let y of i)Z.set(y.id,y.name);return Z},[i]),S=Fn.useMemo(()=>{if(!g)return null;let Z=g;if(m.size<i0.length)Z=Z.filter((p)=>m.has(p.scope));let y=P.trim().toLowerCase();if(y)Z=Z.filter((p)=>p.name.toLowerCase().includes(y));if(X){let p=q==="asc"?1:-1;Z=Z.slice().sort((N,Rr)=>uL(N,Rr,X,L)*p)}return Z},[g,m,P,X,q,L]),I=()=>t({type:"list_collections"}),k=(Z)=>{R((y)=>{let p=new Set(y);if(p.has(Z))p.delete(Z);else p.add(Z);if(p.size===0)return new Set(i0);return p})},j=(Z)=>{if(X!==Z){W(Z),G("asc");return}if(q==="asc"){G("desc");return}W(null)},Pr=()=>{O(""),R(new Set(i0))},lr=g?.length??0,f=S?.length??0,s=P.trim().length>0||m.size<i0.length,ir=(Z)=>{if(X!==Z)return Nr.jsxDEV(fh,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return q==="asc"?Nr.jsxDEV(Rg,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):Nr.jsxDEV(Xe,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return Nr.jsxDEV("div",{className:"ls-status-section",children:[Nr.jsxDEV("div",{className:"ls-inject-header",children:[Nr.jsxDEV(ol,{size:10},void 0,!1,void 0,this),"Collections",lr>0&&Nr.jsxDEV("span",{className:"ls-inject-count",children:lr},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:I,children:Nr.jsxDEV(Gg,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-status-section-body",children:g===null?Nr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):g.length===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):Nr.jsxDEV(Nr.Fragment,{children:[Nr.jsxDEV("div",{className:"ls-collections-filter",children:[Nr.jsxDEV("div",{className:"ls-collections-filter-search",children:[Nr.jsxDEV(zn,{size:10},void 0,!1,void 0,this),Nr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:P,onChange:(Z)=>O(Z.target.value)},void 0,!1,void 0,this),P&&Nr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>O(""),children:Nr.jsxDEV(Ye,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Nr.jsxDEV("div",{className:"ls-collections-filter-chips",children:i0.map((Z)=>{let y=m.has(Z);return Nr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":Z,"aria-pressed":y,title:y?`Hide ${Z}-scoped`:`Show ${Z}-scoped`,onClick:()=>k(Z),children:$8[Z]},Z,!1,void 0,this)})},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-filter-count",children:s?`${f}/${lr}`:lr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f===0?Nr.jsxDEV("div",{className:"ls-section-empty",children:[Nr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),Nr.jsxDEV("button",{onClick:Pr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):Nr.jsxDEV("div",{className:"ls-collections-list",children:[Nr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>j("name"),title:"Sort by name",children:["Name ",ir("name")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>j("scope"),title:"Sort by scope",children:["Scope ",ir("scope")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>j("owner"),title:"Sort by owner",children:["Owner ",ir("owner")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>j("size"),title:"Sort by size",children:["Size ",ir("size")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>j("updated"),title:"Sort by last updated",children:["Updated ",ir("updated")]},void 0,!0,void 0,this),Nr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),S.map((Z)=>{let y=L.get(Z.scriptId)??`(${Z.scriptId.slice(0,8)}…)`,p=!L.has(Z.scriptId),N=p?`scriptId: ${Z.scriptId} (not currently loaded)`:`${y} (${Z.scriptId})`;return Nr.jsxDEV("div",{className:"ls-collections-row",children:[Nr.jsxDEV("span",{className:"ls-collections-name",title:Z.name,children:Z.name},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-scope","data-scope":Z.scope,title:bL(Z),children:$8[Z.scope]},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:`ls-collections-owner${p?" ls-collections-owner-unknown":""}`,title:N,children:y},void 0,!1,void 0,this),(()=>{let Rr=hL(Z.sizeBytes),qr=(Z.sizeBytes/tL*100).toFixed(Z.sizeBytes<1048576?2:1),Wr=`${Z.sizeBytes.toLocaleString()} bytes (${qr}% of 50 MB cap)`;return Nr.jsxDEV("span",{className:"ls-collections-size","data-budget":Rr.tier,title:Wr,style:Rr.tier==="normal"?void 0:{color:Rr.color,fontWeight:600},children:k5(Z.sizeBytes)},void 0,!1,void 0,this)})(),Nr.jsxDEV("span",{className:"ls-collections-updated",title:Z.modifiedAt,children:S1(Z.modifiedAt)},void 0,!1,void 0,this),Nr.jsxDEV("span",{className:"ls-collections-actions",children:[Nr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>h(Z.path),children:Nr.jsxDEV(jh,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),Nr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>u(Z),children:Nr.jsxDEV(xe,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},Z.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Do=wr(io(),1),x3=wr(Kv(),1);var nl=wr(io(),1),$3=wr(Kv(),1);var Yo=wr(dr(),1);function wL(g){let{id:i,createdAt:t,updatedAt:h,...u}=g;try{return JSON.stringify(u,null,2)}catch{return"{}"}}var L3=({path:g,record:i,onClose:t,sendToBackend:h})=>{let[u,P]=nl.useState(()=>wL(i)),[O,m]=nl.useState(null),R=nl.useRef(null),X=nl.useRef(null),W=nl.useRef(null);nl.useEffect(()=>{let I=(k)=>{if(k.key==="Escape")t()};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[t]),nl.useEffect(()=>{let I=(k)=>{if(k.key!=="Tab")return;let j=R.current;if(!j)return;let Pr=Array.from(j.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Pr.length===0)return;let lr=Pr[0],f=Pr[Pr.length-1],s=document.activeElement,ir=s!==null&&j.contains(s);if(k.shiftKey){if(!ir||s===lr)k.preventDefault(),f.focus()}else if(!ir||s===f)k.preventDefault(),lr.focus()};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[]),nl.useEffect(()=>{let I=setTimeout(()=>X.current?.focus(),0);return()=>clearTimeout(I)},[]);let q=()=>{let I;try{I=JSON.parse(u)}catch(k){let j=k instanceof Error?k.message:String(k);m(`JSON parse error: ${j}`);return}if(I===null||typeof I!=="object"||Array.isArray(I)){m("Record must be a JSON object — not an array, null, or primitive.");return}m(null),h({type:"update_record",path:g,recordId:String(i.id),patch:I}),t()},G=(I)=>{if((I.metaKey||I.ctrlKey)&&I.key==="Enter")I.preventDefault(),q()},L=String(i.id),S=Yo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(I)=>{if(I.target===I.currentTarget)t()},children:Yo.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:R,onClick:(I)=>I.stopPropagation(),children:[Yo.jsxDEV("div",{className:"ls-modal-header",children:[Yo.jsxDEV("span",{className:"ls-modal-title",children:[Yo.jsxDEV(el,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Yo.jsxDEV("button",{className:"ls-modal-close",onClick:t,title:"Cancel (Esc)",children:Yo.jsxDEV(Ye,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yo.jsxDEV("div",{className:"ls-edit-body",children:[Yo.jsxDEV("div",{className:"ls-edit-meta",children:[Yo.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Yo.jsxDEV("code",{className:"ls-edit-meta-value",title:L,children:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yo.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Yo.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Yo.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Yo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Yo.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Yo.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Yo.jsxDEV("pre",{ref:W,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:a5(u)+`
`}},void 0,!1,void 0,this),Yo.jsxDEV("textarea",{ref:X,className:"ls-edit-textarea",value:u,onChange:(I)=>{if(P(I.target.value),O)m(null)},onKeyDown:G,onScroll:(I)=>{let k=W.current;if(!k)return;k.scrollTop=I.currentTarget.scrollTop,k.scrollLeft=I.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),O&&Yo.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Yo.jsxDEV(rg,{size:12},void 0,!1,void 0,this),Yo.jsxDEV("span",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Yo.jsxDEV("div",{className:"ls-drop-actions",children:[Yo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:t,children:"Cancel"},void 0,!1,void 0,this),Yo.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:q,title:"Save (Ctrl/Cmd+Enter)",children:[Yo.jsxDEV(t1,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return $3.createPortal(S,document.body)};var d=wr(dr(),1),Tv=50,PL=150,OL=1200,mL=4000,I3=({path:g,summary:i,records:t,total:h,error:u,stats:P,refreshToken:O,onClose:m,sendToBackend:R})=>{let[X,W]=Do.useState(""),[q,G]=Do.useState(""),[L,S]=Do.useState(0),[I,k]=Do.useState("shallow"),[j,Pr]=Do.useState(0),[lr,f]=Do.useState(()=>new Set),[s,ir]=Do.useState(null),[Z,y]=Do.useState(null),[p,N]=Do.useState("records");Do.useEffect(()=>{let T=setTimeout(()=>G(X),PL);return()=>clearTimeout(T)},[X]),Do.useEffect(()=>{S(0)},[q,I]),Do.useEffect(()=>{let T=q.trim();if(I==="jsonquery")R({type:"inspect_collection",path:g,jsonqueryFilter:T||void 0,limit:Tv,offset:L*Tv});else R({type:"inspect_collection",path:g,textFilter:T||void 0,deepFilter:I==="deep"||void 0,limit:Tv,offset:L*Tv})},[g,q,I,L,O,j,R]),Do.useEffect(()=>{let T=(tr)=>{if(tr.key==="Escape")m()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[m]);let Rr=Math.max(1,Math.ceil(h/Tv)),qr=h===0?0:L*Tv+1,Wr=Math.min(h,(L+1)*Tv),Cr=Do.useMemo(()=>{let T=g.match(/\/([^/]+)\.json$/);return T?T[1]:g},[g]),a=Do.useMemo(()=>{if(!i)return null;if(i.scope==="character"&&i.characterName)return`character: ${i.characterName}`;if(i.scope==="chat"&&i.chatName)return`chat: ${i.chatName}`;return null},[i]),or=(T)=>{f((tr)=>{let Hr=new Set(tr);return Hr.add(T),Hr}),setTimeout(()=>{f((tr)=>{if(!tr.has(T))return tr;let Hr=new Set(tr);return Hr.delete(T),Hr})},OL)},nr=async(T)=>{if(await L8(String(T.id)))or(`${T.id}:id`)},Kr=async(T)=>{if(await L8(JSON.stringify(T,null,2)))or(`${T.id}:json`)};Do.useEffect(()=>{if(Z===null)return;let T=setTimeout(()=>y(null),mL);return()=>clearTimeout(T)},[Z]);let Xr=(T)=>{let tr=String(T.id);if(Z===tr)R({type:"delete_record",path:g,recordId:tr}),y(null);else y(tr)};Do.useEffect(()=>{y(null),ir(null)},[L,q,I,g]),Do.useEffect(()=>{N("records")},[g]),Do.useEffect(()=>{if(p!=="stats")return;R({type:"analyze_collection",path:g})},[p,g,O,j,R]);let c=d.jsxDEV("div",{className:"ls-modal-overlay",onClick:(T)=>{if(T.target===T.currentTarget)m()},children:d.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(T)=>T.stopPropagation(),children:[d.jsxDEV("div",{className:"ls-modal-header",children:[d.jsxDEV("span",{className:"ls-modal-title",children:[d.jsxDEV(ol,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),d.jsxDEV("span",{className:"ls-inspect-title-name",children:Cr},void 0,!1,void 0,this),a&&d.jsxDEV("span",{className:"ls-inspect-title-path",title:g,style:{color:"var(--lumiverse-accent)"},children:a},void 0,!1,void 0,this),d.jsxDEV("span",{className:"ls-inspect-title-path",title:g,children:g},void 0,!1,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("button",{className:"ls-modal-close",onClick:()=>Pr((T)=>T+1),title:"Refresh records",style:{marginRight:4},children:d.jsxDEV(Gg,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),d.jsxDEV("button",{className:"ls-modal-close",onClick:m,title:"Close (Esc)",children:d.jsxDEV(Ye,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[d.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":p==="records",onClick:()=>N("records"),children:[d.jsxDEV(o1,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),d.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":p==="stats",onClick:()=>N("stats"),children:[d.jsxDEV(Wn,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),p==="records"&&d.jsxDEV(d.Fragment,{children:[d.jsxDEV("div",{className:"ls-inspect-toolbar",children:[d.jsxDEV("div",{className:"ls-inspect-search",children:[d.jsxDEV(zn,{size:12},void 0,!1,void 0,this),d.jsxDEV("input",{type:I==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:I==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":I==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:X,onChange:(T)=>W(T.target.value),autoFocus:!0,spellCheck:I!=="jsonquery",autoCorrect:I==="jsonquery"?"off":"on",autoCapitalize:I==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),d.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[d.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":I==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>k("shallow"),children:d.jsxDEV(zn,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),d.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":I==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>k("deep"),children:d.jsxDEV(Yn,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),d.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":I==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>k("jsonquery"),children:d.jsxDEV(Ge,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-pager",children:[d.jsxDEV("span",{className:"ls-inspect-pager-status",children:h===0?"No matching records":d.jsxDEV(d.Fragment,{children:["Showing ",d.jsxDEV("strong",{children:qr},void 0,!1,void 0,this),"–",d.jsxDEV("strong",{children:Wr},void 0,!1,void 0,this)," of ",d.jsxDEV("strong",{children:h},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),d.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((T)=>Math.max(0,T-1)),disabled:L===0,title:"Previous page",children:d.jsxDEV(Eh,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),d.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>S((T)=>Math.min(Rr-1,T+1)),disabled:L>=Rr-1,title:"Next page",children:d.jsxDEV(Ri,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),u&&d.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[d.jsxDEV(rg,{size:12},void 0,!1,void 0,this),d.jsxDEV("span",{children:u},void 0,!1,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-body",children:t===null?d.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):t.length===0?d.jsxDEV("div",{className:"ls-inspect-empty",children:h===0&&q?d.jsxDEV(d.Fragment,{children:[d.jsxDEV("div",{children:["No records match “",q,"”"]},void 0,!0,void 0,this),d.jsxDEV("button",{onClick:()=>W(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):h===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):d.jsxDEV("div",{className:"ls-inspect-records",children:t.map((T)=>{let tr=String(T.id),Hr=lr.has(`${T.id}:id`),_=lr.has(`${T.id}:json`);return d.jsxDEV("div",{className:"ls-inspect-record",children:[d.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${tr}`,children:[d.jsxDEV("code",{children:[tr.slice(0,12),"…"]},void 0,!0,void 0,this),d.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",d.jsxDEV("time",{title:new Date(T.createdAt).toISOString(),children:S1(T.createdAt)},void 0,!1,void 0,this),T.updatedAt!==T.createdAt&&d.jsxDEV(d.Fragment,{children:[" · ","updated ",d.jsxDEV("time",{title:new Date(T.updatedAt).toISOString(),children:S1(T.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),d.jsxDEV("button",{className:"ls-inspect-record-action",title:Hr?"Copied!":"Copy ID",onClick:()=>nr(T),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Hr?"var(--lumiverse-accent)":"inherit",opacity:Hr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[d.jsxDEV(Wg,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),d.jsxDEV("button",{className:"ls-inspect-record-action",title:_?"Copied!":"Copy full JSON",onClick:()=>Kr(T),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:_?"var(--lumiverse-accent)":"inherit",opacity:_?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[d.jsxDEV(Cl,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),d.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>ir(T),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[d.jsxDEV(el,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),d.jsxDEV("button",{className:"ls-inspect-record-action"+(Z===tr?" ls-inspect-record-action-confirm":""),title:Z===tr?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Xr(T),style:{background:Z===tr?"rgba(246, 130, 130, 0.18)":"transparent",border:Z===tr?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:Z===tr?"3px 6px":4,marginLeft:2,cursor:"pointer",color:Z===tr?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:Z===tr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:Z===tr?600:400,borderRadius:3},children:[d.jsxDEV(xe,{size:11},void 0,!1,void 0,this),Z===tr?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:a5(AL(T))}},void 0,!1,void 0,this)]},tr,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p==="stats"&&d.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:P===null?d.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):P.fields.length===0?d.jsxDEV("div",{className:"ls-inspect-empty",children:P.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):d.jsxDEV(ML,{stats:P},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return d.jsxDEV(d.Fragment,{children:[x3.createPortal(c,document.body),s&&d.jsxDEV(L3,{path:g,record:s,onClose:()=>ir(null),sendToBackend:R},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function AL(g){let{id:i,createdAt:t,updatedAt:h,...u}=g;try{return JSON.stringify(u,null,2)}catch{return String(g)}}var qL={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function HL(g){if(typeof g==="string")return`"${g.length>32?g.slice(0,30)+"…":g}"`;if(g===null)return"null";return String(g)}function x8(g){if(!Number.isFinite(g))return"—";return Number.isInteger(g)?String(g):g.toFixed(2)}var ML=({stats:g})=>{return d.jsxDEV("div",{className:"ls-inspect-stats",children:[d.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",d.jsxDEV("strong",{children:g.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",g.totalRecords===1?"record":"records"," ·"," ",d.jsxDEV("strong",{children:g.fields.length},void 0,!1,void 0,this)," ",g.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-stats-grid",children:g.fields.map((i)=>d.jsxDEV(RL,{field:i,totalRecords:g.totalRecords},i.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},RL=({field:g,totalRecords:i})=>{let t=i===0?0:Math.round(g.presence/i*100),h=Object.entries(g.types);return h.sort((u,P)=>P[1]-u[1]),d.jsxDEV("div",{className:"ls-inspect-stats-card",children:[d.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[d.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:g.name,children:g.name},void 0,!1,void 0,this),d.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${g.presence} of ${i} records`,children:[t,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:h.map(([u,P])=>d.jsxDEV("span",{className:qL[u],children:[u," · ",P]},u,!0,void 0,this))},void 0,!1,void 0,this),g.numericRange&&d.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[d.jsxDEV("span",{children:["min ",d.jsxDEV("strong",{children:x8(g.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),d.jsxDEV("span",{children:["max ",d.jsxDEV("strong",{children:x8(g.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),d.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),d.jsxDEV("span",{children:["mean ",d.jsxDEV("strong",{children:x8(g.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),g.topValues.length>0&&d.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[d.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",g.topValues.length," of ",g.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),d.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:g.topValues.map((u,P)=>d.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(u.value),children:[d.jsxDEV("code",{children:HL(u.value)},void 0,!1,void 0,this),d.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",u.count]},void 0,!0,void 0,this)]},P,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var T1=wr(io(),1),F3=wr(Kv(),1);var bo=wr(dr(),1);function WL(g){if(g.scope==="character"&&g.characterName&&g.characterId)return{label:"Character",name:g.characterName,id:g.characterId};if(g.scope==="chat"&&g.chatName&&g.chatId)return{label:"Chat",name:g.chatName,id:g.chatId};return null}var N3=({target:g,recordCount:i,onConfirm:t,onCancel:h})=>{let u=T1.useRef(null);T1.useEffect(()=>{let O=(m)=>{if(m.key==="Escape")h()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[h]),T1.useEffect(()=>{let O=(m)=>{if(m.key!=="Tab")return;let R=u.current;if(!R)return;let X=Array.from(R.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(X.length===0)return;let W=X[0],q=X[X.length-1],G=document.activeElement,L=G!==null&&R.contains(G);if(m.shiftKey){if(!L||G===W)m.preventDefault(),q.focus()}else if(!L||G===q)m.preventDefault(),W.focus()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[]);let P=bo.jsxDEV("div",{className:"ls-modal-overlay",onClick:(O)=>{if(O.target===O.currentTarget)h()},children:bo.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:u,onClick:(O)=>O.stopPropagation(),children:[bo.jsxDEV("div",{className:"ls-modal-header",children:[bo.jsxDEV("span",{className:"ls-modal-title",children:[bo.jsxDEV(xe,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),bo.jsxDEV("button",{className:"ls-modal-close",onClick:h,title:"Cancel (Esc)",children:bo.jsxDEV(Ye,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bo.jsxDEV("div",{className:"ls-drop-body",children:[bo.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),bo.jsxDEV("div",{className:"ls-drop-target",children:[bo.jsxDEV("div",{className:"ls-drop-target-name",children:g.name},void 0,!1,void 0,this),bo.jsxDEV("div",{className:"ls-drop-target-meta",children:[bo.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":g.scope,children:K3[g.scope]},void 0,!1,void 0,this),bo.jsxDEV("span",{className:"ls-drop-target-size",children:k5(g.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let O=WL(g);if(!O)return null;return bo.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${O.label.toLowerCase()}Id: ${O.id}`,children:[O.label,": ",bo.jsxDEV("strong",{children:O.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),bo.jsxDEV("div",{className:"ls-drop-target-path",title:g.path,children:g.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),i===null?bo.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):i>=0?bo.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:i===0?"Collection is currently empty.":bo.jsxDEV(bo.Fragment,{children:["Will delete ",bo.jsxDEV("strong",{children:i.toLocaleString()},void 0,!1,void 0,this)," ",i===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,bo.jsxDEV("div",{className:"ls-drop-warning",children:[bo.jsxDEV(rg,{size:12},void 0,!1,void 0,this),bo.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),bo.jsxDEV("div",{className:"ls-drop-actions",children:[bo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:h,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),bo.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:t,children:[bo.jsxDEV(xe,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return F3.createPortal(P,document.body)};var Ki=wr(dr(),1),Z3=({variables:g,collections:i,scripts:t,sendToBackend:h,inspectPath:u,inspectRecords:P,inspectTotal:O,inspectError:m,inspectStats:R,inspectRefreshToken:X,onInspect:W,dropTarget:q,dropTargetCount:G,onDrop:L,onDropConfirm:S})=>{return Ki.jsxDEV(Ki.Fragment,{children:[Ki.jsxDEV("div",{className:"ls-storage-list",children:[Ki.jsxDEV(Q3,{variables:g,sendToBackend:h},void 0,!1,void 0,this),Ki.jsxDEV(U3,{collections:i,scripts:t,sendToBackend:h,onInspect:W,onDrop:L},void 0,!1,void 0,this)]},void 0,!0,void 0,this),u!==null&&Ki.jsxDEV(I3,{path:u,summary:i?.find((I)=>I.path===u),records:P,total:O,error:m,stats:R,refreshToken:X,onClose:()=>W(null),sendToBackend:h},void 0,!1,void 0,this),q!==null&&Ki.jsxDEV(N3,{target:q,recordCount:G,onConfirm:S,onCancel:()=>L(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Ar=wr(dr(),1),B3=({onBackendMessage:g,sendToBackend:i})=>{let[t,h]=Jo.useState("manage"),[u,P]=Jo.useState([]),[O,m]=Jo.useState(w5),[R,X]=Jo.useState({characterId:null,characterName:null,chatId:null}),[W,q]=Jo.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[G,L]=Jo.useState([]),[S,I]=Jo.useState([]),[k,j]=Jo.useState(null),[Pr,lr]=Jo.useState(null),[f,s]=Jo.useState(null),[ir,Z]=Jo.useState(null),[y,p]=Jo.useState(0),[N,Rr]=Jo.useState(null),[qr,Wr]=Jo.useState(0),[Cr,a]=Jo.useState(null),[or,nr]=Jo.useState(null),[Kr,Xr]=Jo.useState(null),[c,T]=Jo.useState({});Jo.useEffect(()=>{let _=g((Yr)=>{let gr=Yr;switch(gr.type){case"scripts_updated":console.log(`[LumiScript] scripts_updated: ${gr.scripts.length} script(s)`),P(gr.scripts);break;case"script_patched":{console.log(`[LumiScript] script_patched: id=${gr.script.id}, codeLen=${gr.script.code?.length??-1}`),P((xr)=>xr.map((yr)=>yr.id===gr.script.id?gr.script:yr));break}case"settings_updated":m(gr.settings);break;case"active_context":X({characterId:gr.characterId,characterName:gr.characterName,chatId:gr.chatId}),i({type:"get_variables"});break;case"variables_updated":j(gr.variables);break;case"collections_list":lr(gr.collections);break;case"collection_records":Z((xr)=>{return gr.records}),p(gr.total),Rr(gr.error??null);break;case"collection_stats":a((xr)=>{return gr.stats});break;case"collection_count":Xr((xr)=>{return gr.count});break;case"collections_updated":i({type:"list_collections"}),Wr((xr)=>xr+1);break;case"injections_updated":L(gr.injections);break;case"tools_updated":I(gr.tools);break;case"execution_started":{let xr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};q((yr)=>{let Po=yr.consoleHistory[gr.scriptId]??[],te=Po.length>0?[...Po,xr]:Po;return{...yr,activeScriptId:gr.scriptId,runId:gr.runId,isRunning:!0,consoleHistory:{...yr.consoleHistory,[gr.scriptId]:te},scriptExecInfo:{...yr.scriptExecInfo,[gr.scriptId]:{...yr.scriptExecInfo[gr.scriptId],dot:"running"}}}}),T((yr)=>({...yr,[gr.scriptId]:(yr[gr.scriptId]??0)+1}));break}case"console_entry":{let xr=O.consoleHistoryLimit;q((yr)=>{let Po=yr.consoleHistory[gr.scriptId]??[];if(Po.length>=xr)return yr;let hr=Po.length===xr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${xr} entries. Clear the console to resume capture.]`}:gr.entry;return{...yr,consoleHistory:{...yr.consoleHistory,[gr.scriptId]:[...Po,hr]}}});break}case"execution_ended":q((xr)=>{let yr=xr.consoleHistory[gr.scriptId]??[],Po=xr.scriptExecInfo[gr.scriptId],te=!gr.success&&gr.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:gr.error}]:[],hr=!gr.success?!0:Po?.stickyError??!1,Ve=!gr.success||hr?"error":"success",Qe=gr.duration??0,fo=gr.success&&Qe===0&&(Po?.duration??0)>0?Po.duration:gr.duration;return{...xr,isRunning:!1,consoleHistory:te.length?{...xr.consoleHistory,[gr.scriptId]:[...yr,...te]}:xr.consoleHistory,scriptExecInfo:{...xr.scriptExecInfo,[gr.scriptId]:{dot:Ve,duration:fo,error:gr.error??Po?.error,stickyError:hr}}}});break;case"error":console.warn("[LumiScript]",gr.message);break}});return i({type:"get_scripts"}),i({type:"get_settings"}),i({type:"get_active_context"}),i({type:"get_injections"}),i({type:"get_tools"}),_},[g,i]),Jo.useEffect(()=>{if(t==="storage")i({type:"list_collections"})},[t,i]),Jo.useEffect(()=>{if(Xr(null),or)i({type:"count_collection",path:or.path})},[or,i]);let tr=Jo.useCallback((_)=>{q((Yr)=>({...Yr,consoleHistory:{...Yr.consoleHistory,[_]:[]}}))},[]),Hr=Jo.useCallback((_)=>{q((Yr)=>{let gr=Yr.scriptExecInfo[_];if(!gr?.stickyError)return Yr;return{...Yr,scriptExecInfo:{...Yr.scriptExecInfo,[_]:{...gr,dot:"idle",stickyError:!1}}}})},[]);return Ar.jsxDEV("div",{className:"ls-panel",children:[Ar.jsxDEV("div",{className:"ls-tabs",children:[Ar.jsxDEV("button",{className:`ls-tab-pill${t==="manage"?" ls-active":""}`,onClick:()=>h("manage"),children:[Ar.jsxDEV(Ge,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${t==="status"?" ls-active":""}`,onClick:()=>h("status"),children:[Ar.jsxDEV(kl,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Ar.jsxDEV("button",{className:`ls-tab-pill${t==="storage"?" ls-active":""}`,onClick:()=>h("storage"),children:[Ar.jsxDEV(ol,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[t==="manage"&&Ar.jsxDEV(J3,{scripts:u,activeContext:R,execInfo:W.scriptExecInfo,activeRunScriptId:W.activeScriptId,isRunning:W.isRunning,consoleHistory:W.consoleHistory,editorFontSize:O.editorFontSize,autosaveDebounceMs:O.autosaveDebounceMs,onClearConsole:tr,onScriptOpened:Hr,sendToBackend:i},void 0,!1,void 0,this),t==="status"&&Ar.jsxDEV(XL,{scripts:u,execInfo:W.scriptExecInfo,invocationCounts:c,injections:G,tools:S,sendToBackend:i},void 0,!1,void 0,this),t==="storage"&&Ar.jsxDEV(Z3,{variables:k,collections:Pr,scripts:u,sendToBackend:i,inspectPath:f,inspectRecords:ir,inspectTotal:y,inspectError:N,inspectStats:Cr,inspectRefreshToken:qr,onInspect:(_)=>{s(_),Z(null),p(0),a(null)},dropTarget:or,dropTargetCount:Kr,onDrop:nr,onDropConfirm:()=>{if(!or)return;let _=or.path;if(f===_)s(null),Z(null),p(0),a(null);i({type:"drop_collection",path:_}),nr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},GL={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},XL=({scripts:g,execInfo:i,invocationCounts:t,injections:h,tools:u,sendToBackend:P})=>{let O=g.filter((q)=>q.type==="trigger"&&q.enabled),m=Object.fromEntries(g.map((q)=>[q.id,q.name])),[R,X]=Jo.useState(new Set),W=(q)=>{X((G)=>{let L=new Set(G);if(L.has(q))L.delete(q);else L.add(q);return L})};return Ar.jsxDEV("div",{className:"ls-status-list",children:[Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(Ge,{size:10},void 0,!1,void 0,this),"Scripts",O.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):O.map((q)=>{let G=i[q.id],L=G?.dot??"idle",S={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[L],I=q.triggers??[],k=t[q.id];return Ar.jsxDEV("div",{className:"ls-status-row",children:[Ar.jsxDEV("div",{className:"ls-status-row-main",children:[Ar.jsxDEV("span",{className:S,title:GL[L]},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-name",children:q.name},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-status-right",children:[k!==void 0&&k>0&&Ar.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${k} time${k!==1?"s":""} this session`,children:["×",k]},void 0,!0,void 0,this),G?.duration!==void 0&&L!=="running"&&Ar.jsxDEV("span",{className:"ls-status-duration",style:{color:L==="error"?"#ef4444":void 0},children:[G.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),I.length>0?Ar.jsxDEV("div",{className:"ls-status-events",children:I.map((j)=>Ar.jsxDEV("span",{className:"ls-event-badge",children:[Ar.jsxDEV(Wi,{size:9},void 0,!1,void 0,this),j]},j,!0,void 0,this))},void 0,!1,void 0,this):Ar.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),L==="error"&&G?.error&&Ar.jsxDEV("div",{className:"ls-status-error-row",children:Ar.jsxDEV("span",{className:"ls-status-error-text",children:G.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(m1,{size:10},void 0,!1,void 0,this),"Active Tools",u.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:u.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:u.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):u.map((q)=>Ar.jsxDEV("div",{className:"ls-tool-row",children:[Ar.jsxDEV("div",{className:"ls-tool-name",title:q.description,children:q.name},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-tool-meta",children:[q.council_eligible&&Ar.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:q.scriptName},void 0,!1,void 0,this),Ar.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${q.name}`,title:`Unregister "${q.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>P({type:"unregister_tool",name:q.name}),children:Ar.jsxDEV(xe,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section",children:[Ar.jsxDEV("div",{className:"ls-inject-header",children:[Ar.jsxDEV(b1,{size:10},void 0,!1,void 0,this),"Active Injections",h.length>0&&Ar.jsxDEV("span",{className:"ls-inject-count",children:h.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("div",{className:"ls-status-section-body",children:h.length===0?Ar.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):h.map((q)=>{let G=R.has(q.id);return Ar.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>W(q.id),children:[Ar.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${q.mode}`,title:q.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:q.mode==="intercept"?Ar.jsxDEV(Dh,{size:11},void 0,!1,void 0,this):Ar.jsxDEV(ch,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-body",children:[Ar.jsxDEV("div",{className:"ls-inject-header-row",children:[Ar.jsxDEV("span",{className:"ls-inject-id",title:q.id,children:q.id},void 0,!1,void 0,this),Ar.jsxDEV("div",{className:"ls-inject-meta",children:[Ar.jsxDEV("span",{className:"ls-inject-role",children:q.role},void 0,!1,void 0,this),q.mode==="intercept"&&q.depth>0&&Ar.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${q.depth} message${q.depth!==1?"s":""}`,children:["d:",q.depth]},void 0,!0,void 0,this),q.ephemeral&&Ar.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Ar.jsxDEV(Fv,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-script",title:q.scriptId,children:m[q.scriptId]??q.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ar.jsxDEV("span",{className:"ls-inject-chevron",children:G?Ar.jsxDEV(Rg,{size:10},void 0,!1,void 0,this):Ar.jsxDEV(Xe,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G&&Ar.jsxDEV("div",{className:"ls-inject-content",onClick:(L)=>L.stopPropagation(),children:q.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},q.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var n0=wr(io(),1);var Qg=wr(io(),1),T3=wr(Kv(),1);async function C3(){let g=[];if("fonts"in document){let u=document.fonts.status;g.push({label:"Document fonts state",status:u==="loaded"?"pass":"warn",message:u==="loaded"?`Loaded (${document.fonts.size} font face(s) registered)`:"Still loading after page mount — possible font subsystem hang",details:{status:u,size:document.fonts.size}})}else g.push({label:"Document fonts state",status:"info",message:"document.fonts API unavailable (very old browser)"});let[i,t,h]=await Promise.all(["fonts"in document?YL():Promise.resolve(null),JL(),zL()]);if(i)g.push(i);return g.push(t),g.push(h),{id:"editor",name:"Editor / Monaco",checks:g}}async function YL(){let g=performance.now(),i=await Promise.race([document.fonts.ready.then(()=>"resolved").catch((t)=>t),new Promise((t)=>setTimeout(()=>t("timeout"),2000))]);if(i==="resolved")return{label:"document.fonts.ready",status:"pass",message:`Resolved in ${Math.round(performance.now()-g)}ms`};if(i==="timeout")return{label:"document.fonts.ready",status:"fail",message:`Did not resolve within ${"2000"}ms — font subsystem may be hung (Firefox + Windows: try clearing the Windows font cache)`};return{label:"document.fonts.ready",status:"fail",message:`Rejected: ${i instanceof Error?i.message:String(i)}`}}function JL(){return new Promise((g)=>{let i=null,t=null,h=!1,u=(O)=>{if(h)return;if(h=!0,i)try{i.terminate()}catch{}if(t)try{URL.revokeObjectURL(t)}catch{}g(O)},P=setTimeout(()=>{u({label:"Blob-URL worker support",status:"warn",message:"Worker created but didn't dispatch within 1000ms"})},1000);try{let O=new Blob(['self.postMessage("ok");'],{type:"application/javascript"});t=URL.createObjectURL(O),i=new Worker(t),i.onmessage=()=>{clearTimeout(P),u({label:"Blob-URL worker support",status:"pass",message:"Worker created and dispatched a message"})},i.onerror=(m)=>{clearTimeout(P),u({label:"Blob-URL worker support",status:"fail",message:`Worker errored: ${m.message??"<unknown>"} (likely a CSP worker-src violation)`})}}catch(O){clearTimeout(P),u({label:"Blob-URL worker support",status:"fail",message:`new Worker() threw: ${O instanceof Error?O.message:String(O)} — likely a CSP worker-src violation`})}})}async function zL(){let g=performance.now(),i=new AbortController,t=setTimeout(()=>i.abort(),5000);try{let h=await fetch("https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/package.json",{method:"HEAD",signal:i.signal});if(clearTimeout(t),h.ok)return{label:"Monaco CDN reachability",status:"pass",message:`HTTP ${h.status} in ${Math.round(performance.now()-g)}ms`};return{label:"Monaco CDN reachability",status:"fail",message:`HTTP ${h.status} ${h.statusText}`}}catch(h){if(clearTimeout(t),h instanceof Error&&h.name==="AbortError")return{label:"Monaco CDN reachability",status:"fail",message:`Timed out after ${"5000"}ms — CDN unreachable or blocked (corporate proxy / firewall?)`};return{label:"Monaco CDN reachability",status:"fail",message:`Fetch failed: ${h instanceof Error?h.message:String(h)}`}}}var QL={pass:"Pass",warn:"Warn",fail:"Fail",info:"Info"};function S3(g){let i=[];i.push("# LumiScript Diagnostics"),i.push(`Generated: ${new Date(g.generatedAt).toLocaleString()}`),i.push(`Overall: ${KL(g)}`),i.push(""),i.push("## Summary"),i.push(`- Failures: ${g.summary.failures}`),i.push(`- Warnings: ${g.summary.warnings}`),i.push(`- Passes: ${g.summary.passes}`),i.push(`- Info: ${g.summary.info}`),i.push("");for(let t of g.sections){i.push(`## ${t.name}`);for(let h of t.checks)i.push(`- [${QL[h.status]}] ${h.label}: ${h.message}`);i.push("")}return i.join(`
`).trimEnd()+`
`}function KL(g){if(g.summary.failures>0)return"Needs attention (failures present)";if(g.summary.warnings>0)return"Needs attention (warnings present)";return"Healthy"}var _r=wr(dr(),1),k3=({onClose:g,onBackendMessage:i,sendToBackend:t})=>{let[h,u]=Qg.useState(null),[P,O]=Qg.useState(!0),[m,R]=Qg.useState(null),[X,W]=Qg.useState("idle");Qg.useEffect(()=>{let I=i((k)=>{let j=k;if(j.type==="diagnostics_report")u(j.report),O(!1),R(null),C3().then(R).catch(()=>{})});return t({type:"request_diagnostics"}),I},[i,t]),Qg.useEffect(()=>{let I=(k)=>{if(k.key==="Escape")g()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[g]);let q=Qg.useCallback(()=>{O(!0),R(null),t({type:"request_diagnostics"})},[t]),G=Qg.useMemo(()=>{if(!h)return null;if(!m)return h;let I=[...h.sections,m],k=0,j=0,Pr=0,lr=0;for(let f of I)for(let s of f.checks)switch(s.status){case"fail":k++;break;case"warn":j++;break;case"pass":Pr++;break;case"info":lr++;break}return{generatedAt:h.generatedAt,summary:{failures:k,warnings:j,passes:Pr,info:lr},sections:I}},[h,m]),L=Qg.useCallback(async()=>{if(!G)return;try{await navigator.clipboard.writeText(S3(G)),W("copied")}catch{W("error")}window.setTimeout(()=>W("idle"),2000)},[G]),S=!G?"info":G.summary.failures>0?"fail":G.summary.warnings>0?"warn":"pass";return T3.createPortal(_r.jsxDEV("div",{className:"ls-diag-backdrop",onClick:(I)=>{if(I.target===I.currentTarget)g()},children:_r.jsxDEV("div",{className:"ls-diag-modal",role:"dialog","aria-modal":"true",children:[_r.jsxDEV("div",{className:"ls-diag-header",children:[_r.jsxDEV("div",{className:"ls-diag-title-wrap",children:[_r.jsxDEV("div",{className:"ls-diag-eyebrow",children:[_r.jsxDEV(kl,{size:11},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this),_r.jsxDEV("h2",{className:"ls-diag-title",children:"Diagnostics"},void 0,!1,void 0,this),_r.jsxDEV("p",{className:"ls-diag-subtitle",children:"Snapshot of LumiScript's runtime state — version, granted permissions, script-runner subprocess health, active context, registrations, storage, editor."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),_r.jsxDEV("div",{className:"ls-diag-header-actions",children:[_r.jsxDEV(UL,{report:G,tone:S},void 0,!1,void 0,this),_r.jsxDEV("button",{type:"button",className:"ls-diag-action-btn",onClick:q,disabled:P,title:"Re-run all checks",children:[_r.jsxDEV(Gg,{size:13,className:P?"ls-diag-spin":void 0},void 0,!1,void 0,this),"Refresh"]},void 0,!0,void 0,this),_r.jsxDEV("button",{type:"button",className:`ls-diag-action-btn${X==="copied"?" ls-diag-action-btn-done":""}${X==="error"?" ls-diag-action-btn-error":""}`,onClick:L,disabled:!G,title:"Copy as Markdown for Discord support reports",children:[X==="copied"?_r.jsxDEV($v,{size:13},void 0,!1,void 0,this):_r.jsxDEV(Wg,{size:13},void 0,!1,void 0,this),X==="copied"?"Copied":X==="error"?"Copy failed":"Copy Report"]},void 0,!0,void 0,this),_r.jsxDEV("button",{type:"button",className:"ls-diag-close",onClick:g,title:"Close (Esc)",children:_r.jsxDEV(Ye,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),_r.jsxDEV("div",{className:"ls-diag-body",children:[P&&!G&&_r.jsxDEV("div",{className:"ls-diag-loading",children:[_r.jsxDEV(Gg,{size:18,className:"ls-diag-spin"},void 0,!1,void 0,this),_r.jsxDEV("span",{children:"Collecting diagnostic snapshot…"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),G&&G.sections.map((I)=>_r.jsxDEV("section",{className:"ls-diag-section",children:[_r.jsxDEV("h3",{className:"ls-diag-section-title",children:I.name},void 0,!1,void 0,this),_r.jsxDEV("div",{className:"ls-diag-checks",children:I.checks.map((k,j)=>_r.jsxDEV($L,{check:k},`${I.id}-${j}`,!1,void 0,this))},void 0,!1,void 0,this)]},I.id,!0,void 0,this)),h&&!m&&_r.jsxDEV("div",{className:"ls-diag-loading",children:[_r.jsxDEV(Gg,{size:14,className:"ls-diag-spin"},void 0,!1,void 0,this),_r.jsxDEV("span",{children:"Running frontend probes…"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)},UL=({report:g,tone:i})=>{if(!g)return null;let{failures:t,warnings:h,passes:u,info:P}=g.summary;return _r.jsxDEV("span",{className:`ls-diag-summary-chip ls-diag-tone-${i}`,children:[t>0&&_r.jsxDEV("span",{children:[t," fail"]},void 0,!0,void 0,this),h>0&&_r.jsxDEV("span",{children:[h," warn"]},void 0,!0,void 0,this),_r.jsxDEV("span",{children:[u," pass"]},void 0,!0,void 0,this),_r.jsxDEV("span",{children:[P," info"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},$L=({check:g})=>_r.jsxDEV("div",{className:"ls-diag-check",children:[_r.jsxDEV(LL,{status:g.status},void 0,!1,void 0,this),_r.jsxDEV("div",{className:"ls-diag-check-body",children:[_r.jsxDEV("div",{className:"ls-diag-check-label",children:g.label},void 0,!1,void 0,this),_r.jsxDEV("div",{className:"ls-diag-check-message",children:g.message},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),LL=({status:g})=>{let i=g==="pass"?Gn:g==="warn"?rg:g==="fail"?Xn:sh,t=g==="pass"?"Pass":g==="warn"?"Warn":g==="fail"?"Fail":"Info";return _r.jsxDEV("span",{className:`ls-diag-badge ls-diag-tone-${g}`,title:t,children:_r.jsxDEV(i,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)};var $r=wr(dr(),1),a3=({onBackendMessage:g,sendToBackend:i})=>{let[t,h]=n0.useState(w5),[u,P]=n0.useState([]),[O,m]=n0.useState(!1);n0.useEffect(()=>{let q=g((G)=>{let L=G;if(L.type==="scripts_updated")P(L.scripts);if(L.type==="settings_updated")h(L.settings)});return i({type:"get_settings"}),i({type:"get_scripts"}),q},[g,i]);let R=u.filter((q)=>q.type==="trigger").length,X=u.filter((q)=>q.type==="library").length,W=(q)=>{i({type:"update_settings",patch:{enabled:q}})};return $r.jsxDEV("div",{className:"ls-settings",children:[$r.jsxDEV("div",{className:"ls-settings-header",children:$r.jsxDEV("span",{className:"ls-settings-title",children:[$r.jsxDEV(al,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),$r.jsxDEV("div",{className:"ls-toggle-row",children:[$r.jsxDEV("label",{className:"ls-toggle",children:[$r.jsxDEV("input",{type:"checkbox",checked:t.enabled,onChange:(q)=>W(q.target.checked)},void 0,!1,void 0,this),$r.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-counts",children:[$r.jsxDEV("div",{className:"ls-count-card",children:[$r.jsxDEV(Ge,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),$r.jsxDEV("div",{className:"ls-count-num",children:R},void 0,!1,void 0,this),$r.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-count-card",children:[$r.jsxDEV(Uv,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),$r.jsxDEV("div",{className:"ls-count-num",children:X},void 0,!1,void 0,this),$r.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-section",children:[$r.jsxDEV("div",{className:"ls-settings-section-label",children:[$r.jsxDEV(Fv,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-field",children:[$r.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),$r.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(t.scriptTimeoutMs/1000),onChange:(q)=>{let G=Math.max(5,Math.min(300,Number(q.target.value)||60));i({type:"update_settings",patch:{scriptTimeoutMs:G*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-field",children:[$r.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),$r.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:t.consoleHistoryLimit,onChange:(q)=>{let G=Math.max(50,Math.min(2000,Number(q.target.value)||500));i({type:"update_settings",patch:{consoleHistoryLimit:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-section",children:[$r.jsxDEV("div",{className:"ls-settings-section-label",children:[$r.jsxDEV(P1,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-field",children:[$r.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),$r.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:t.editorFontSize,onChange:(q)=>{let G=Math.max(10,Math.min(24,Number(q.target.value)||12));i({type:"update_settings",patch:{editorFontSize:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-field",children:[$r.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),$r.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:t.autosaveDebounceMs,onChange:(q)=>{let G=Math.max(300,Math.min(5000,Number(q.target.value)||1200));i({type:"update_settings",patch:{autosaveDebounceMs:G}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-section",children:[$r.jsxDEV("div",{className:"ls-settings-section-label",children:[$r.jsxDEV(Sl,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-template-field",children:[$r.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),$r.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:t.defaultTriggerTemplate,onChange:(q)=>i({type:"update_settings",patch:{defaultTriggerTemplate:q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-template-field",children:[$r.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),$r.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:t.defaultLibraryTemplate,onChange:(q)=>i({type:"update_settings",patch:{defaultLibraryTemplate:q.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),$r.jsxDEV("div",{className:"ls-settings-section",children:[$r.jsxDEV("div",{className:"ls-settings-section-label",children:[$r.jsxDEV(kl,{size:11},void 0,!1,void 0,this),"Support"]},void 0,!0,void 0,this),$r.jsxDEV("button",{type:"button",className:"ls-btn",onClick:()=>m(!0),title:"Open the diagnostics modal — runtime state snapshot + copy-as-markdown for Discord support reports",children:[$r.jsxDEV(kl,{size:11,style:{marginRight:4}},void 0,!1,void 0,this),"View Diagnostics"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),O&&$r.jsxDEV(k3,{onClose:()=>m(!1),onBackendMessage:g,sendToBackend:i},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function xL(g){let i=g?.type;return typeof i==="string"&&i.startsWith("dom_")}var ze=new Map;function t0(g,i){ze.set(g,i)}function Dg(g){let i=ze.get(g);for(let[t,h]of Ui)if(h.elementId===g){if(i)i.removeEventListener(h.event,h.handler);Ui.delete(t)}ze.delete(g)}var D1=new Map,k1=new Map,kv=new Map,a1=new Map,Ui=new Map,c1=new Map,v0=new Map;function y3(g,i){return`${g}::${i}`}function D3(g,i){return`${g}:${i}`}function V3(g){let i=g.target,t={type:g.type};if(i){if(i.id)t.targetId=i.id;if("value"in i)t.targetValue=i.value;if("checked"in i)t.targetChecked=i.checked;if(i.dataset&&Object.keys(i.dataset).length>0){let h={};for(let[u,P]of Object.entries(i.dataset))if(P!==void 0)h[u]=P;t.dataset=h}}if(g instanceof MouseEvent)t.clientX=g.clientX,t.clientY=g.clientY;else if(typeof TouchEvent<"u"&&g instanceof TouchEvent){let h=g.touches[0]??g.changedTouches[0];if(h)t.clientX=h.clientX,t.clientY=h.clientY}if(g instanceof CustomEvent&&g.detail!==void 0)try{JSON.stringify(g.detail),t.detail=g.detail}catch{}if(g instanceof KeyboardEvent)t.key=g.key,t.code=g.code;return t}function IL(g,i){let t=V3(g),h={};for(let[G,L]of Object.entries(i.dataset))if(L!==void 0)h[G]=L;let u={};for(let G of Array.from(i.attributes)){if(G.name.startsWith("on"))continue;if(G.name.startsWith("data-"))continue;u[G.name]=G.value}let P={tagName:i.tagName,classList:Array.from(i.classList),dataset:h,attributes:u,textContent:(i.textContent??"").trim()};if(i.id)P.id=i.id;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){if(P.value=i.value,i instanceof HTMLInputElement&&(i.type==="checkbox"||i.type==="radio"))P.checked=i.checked}else if(i instanceof HTMLSelectElement)P.value=i.value,P.selectedIndex=i.selectedIndex,P.selectedText=i.options[i.selectedIndex]?.text;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement){let L=i.labels?.[0]?.textContent?.trim();if(L)P.label=L}let O=g,m=g,R={ctrl:g instanceof MouseEvent||g instanceof KeyboardEvent?O.ctrlKey||m.ctrlKey:!1,shift:g instanceof MouseEvent||g instanceof KeyboardEvent?O.shiftKey||m.shiftKey:!1,alt:g instanceof MouseEvent||g instanceof KeyboardEvent?O.altKey||m.altKey:!1,meta:g instanceof MouseEvent||g instanceof KeyboardEvent?O.metaKey||m.metaKey:!1};if(g instanceof MouseEvent)R.button=g.button;let X,W=i.closest("[data-message-id]");if(W){let G=W.getAttribute("data-message-id")??"";if(G){let I=((W.querySelector("[data-part]")??W).getAttribute?.("data-part")??"character")==="user"?"user":"assistant";X={id:G,role:I,swipeId:0}}}let q={...t,matched:P,modifiers:R};if(X)q.message=X;return q}function _3(g,i){if(g===void 0||g===!1)return!1;if(g===!0)return!0;let t=i,h=i;if(g.onKeys!==void 0){if(t.key===void 0||!g.onKeys.includes(t.key))return!1}if(g.onCodes!==void 0){if(t.code===void 0||!g.onCodes.includes(t.code))return!1}if(g.onButtons!==void 0){if(h.button===void 0||!g.onButtons.includes(h.button))return!1}if(g.whenModifiers!==void 0){let u={ctrl:t.ctrlKey??!1,shift:t.shiftKey??!1,alt:t.altKey??!1,meta:t.metaKey??!1},{require:P,exclude:O}=g.whenModifiers;if(P){for(let m of P)if(!u[m])return!1}if(O){for(let m of O)if(u[m])return!1}}return!0}function FL(g,i,t){let h=y3(g,i),u=v0.get(h);if(u){u.count++;return}let P=(O)=>{let m=O.target;if(!m)return;for(let R of c1.values()){if(R.root!==g||R.event!==i)continue;if(g==="chat"){let q=m.closest("[data-message-id]");if(!q)continue;if(R.messageId&&q.getAttribute("data-message-id")!==R.messageId)continue}let X=m.closest(R.selector);if(!X)continue;if(_3(R.preventDefault,O))O.preventDefault();if(R.stopPropagation)O.stopPropagation();let W=IL(O,X);t({type:"dom_delegate_event",delegationId:R.delegationId,data:W})}};document.body.addEventListener(i,P,!0),v0.set(h,{handler:P,count:1})}function NL(g,i){let t=y3(g,i),h=v0.get(t);if(!h)return;if(h.count--,h.count>0)return;document.body.removeEventListener(i,h.handler,!0),v0.delete(t)}function ZL(g,i){return`@scope ([data-ls-script="${i}"]) {
${g}
}`}function BL(g,i=5000){let t=document.querySelector(g);if(t)return Promise.resolve(t);return new Promise((h,u)=>{let P=!1,O=new MutationObserver(()=>{let m=document.querySelector(g);if(m&&!P)P=!0,O.disconnect(),h(m)});O.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!P)P=!0,O.disconnect(),u(Error(`waitForElement: timeout for "${g}"`))},i)})}function CL(g){return g.querySelector('[class*="_bubble_"]')}var vl=new Map,SL=50;function TL(g,i,t){if(vl.size>=SL){let h=vl.keys().next().value;if(h)vl.get(h)?.cancel(),vl.delete(h)}vl.set(g,{scriptId:i,cancel:t})}function kL(g){for(let[i,t]of vl)if(t.scriptId===g)t.cancel(),vl.delete(i)}function E3(g,i,t){let h=i((u)=>{if(!xL(u))return;let P=u;switch(P.type){case"dom_inject":{let{scriptId:O,elementId:m,target:R,html:X,position:W,stableId:q,parentElementId:G}=P;if(ze.has(m)){console.warn(`[LumiScript] dom_inject: elementId "${m}" already in elementMap — skipping duplicate insert`);break}let L=`<div data-ls-script="${O}" data-ls-el="${m}">${X}</div>`,S=null;if(G){let I=ze.get(G);if(!I){console.warn(`[LumiScript] dom_inject: parentElementId "${G}" not in elementMap — drop`);break}let k=I.querySelector(R);if(!k){console.warn(`[LumiScript] dom_inject: selector "${R}" not found within parent "${G}" — drop`);break}let j=document.createElement("div");j.setAttribute("data-spindle-ext",""),j.innerHTML=L,k.insertAdjacentElement(W,j),S=j}else S=g.dom.inject(R,L,W);if(S){if(ze.set(m,S),D1.set(m,O),q)k1.set(D3(O,q),m)}break}case"dom_inject_at_message":{let{scriptId:O,elementId:m,messageId:R,html:X,position:W,stableId:q}=P,G=(j)=>{let Pr=j.querySelector("[data-part]"),lr=Pr?.getAttribute("data-part")??"character",f=Pr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",s=W==="header"?` data-ls-tint="${lr}"`:"",ir=` data-ls-mode="${f}"`,Z=`<div data-ls-script="${O}" data-ls-el="${m}"${s}${ir}>${X}</div>`,y,p;if(W==="header")y=j,p="afterbegin";else if(W==="footer"&&f==="minimal")y=j,p="beforeend";else y=CL(j)??j,p="beforeend";let N=g.dom.inject(y,Z,p);if(ze.set(m,N),D1.set(m,O),q)k1.set(D3(O,q),m)},L=`[data-message-id="${R}"]`,S=document.querySelector(L);if(S){G(S);break}let I=!1;TL(m,O,()=>{I=!0}),BL(L).then((j)=>{if(vl.delete(m),I)return;G(j)}).catch(()=>{vl.delete(m)});break}case"dom_update":{let O=ze.get(P.elementId);if(!O)break;let m=O.querySelector(`[data-ls-el="${P.elementId}"]`)??O;m.innerHTML=P.html;break}case"dom_remove":{c3(P.elementId);break}case"dom_add_style":{let{scriptId:O,styleId:m,css:R}=P,X=ZL(R,O),W=g.dom.addStyle(X);kv.set(m,W),a1.set(m,O);break}case"dom_remove_style":{let O=kv.get(P.styleId);if(O)O(),kv.delete(P.styleId),a1.delete(P.styleId);break}case"dom_listen":{let{elementId:O,listenerId:m,event:R,preventDefault:X}=P,W=ze.get(O);if(!W)break;let q=(G)=>{if(_3(X,G))G.preventDefault();let L=V3(G);t({type:"dom_event",elementId:O,listenerId:m,event:R,data:L})};W.addEventListener(R,q),Ui.set(m,{elementId:O,event:R,handler:q});break}case"dom_unlisten":{let O=Ui.get(P.listenerId);if(!O)break;let m=ze.get(O.elementId);if(m)m.removeEventListener(O.event,O.handler);Ui.delete(P.listenerId);break}case"dom_delegate_register":{let{delegationId:O,scriptId:m,selector:R,event:X,root:W,messageId:q,preventDefault:G,stopPropagation:L}=P;c1.set(O,{delegationId:O,scriptId:m,selector:R,event:X,root:W,messageId:q,preventDefault:G,stopPropagation:L}),FL(W,X,t);break}case"dom_delegate_unregister":{let{delegationId:O,event:m}=P,R=c1.get(O);if(!R)break;c1.delete(O),NL(R.root,m);break}case"dom_cleanup_script":{let{scriptId:O}=P;kL(O);for(let[m,R]of D1)if(R===O)c3(m);for(let[m,R]of a1)if(R===O){let X=kv.get(m);if(X)X();kv.delete(m),a1.delete(m)}for(let[m]of k1)if(m.startsWith(O+":"))k1.delete(m);break}case"dom_make_draggable":{let{elementId:O,handleSelector:m}=P,R=ze.get(O);if(!R)break;let X=!1,W=!1;R.addEventListener("pointerdown",(q)=>{if(q.button!==0)return;if(m&&!q.target.closest(m))return;let G=R.firstElementChild?.firstElementChild??R.firstElementChild??R,L=G.getBoundingClientRect();G.style.transform="none",G.style.top=`${L.top}px`,G.style.left=`${L.left}px`,G.style.bottom="auto",G.style.right="auto",X=!0,W=!1;let S=q.clientX-L.left,I=q.clientY-L.top;G.style.cursor="grabbing";let k=(Pr)=>{if(!X)return;W=!0,G.style.top=`${Pr.clientY-I}px`,G.style.left=`${Pr.clientX-S}px`},j=()=>{if(!X)return;X=!1,G.style.cursor="",document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",j),document.removeEventListener("pointercancel",j)};document.addEventListener("pointermove",k),document.addEventListener("pointerup",j),document.addEventListener("pointercancel",j),q.preventDefault()}),R.addEventListener("click",(q)=>{if(W)q.stopImmediatePropagation(),q.preventDefault(),W=!1},!0);break}}});return()=>{h();for(let[,u]of vl)u.cancel();vl.clear();for(let[,u]of Ui){let P=ze.get(u.elementId);if(P)P.removeEventListener(u.event,u.handler)}Ui.clear();for(let[u,P]of v0){let O=u.split("::")[1]??"";if(O)document.body.removeEventListener(O,P.handler,!0)}v0.clear(),c1.clear();for(let[,u]of ze)try{u.remove()}catch{}ze.clear(),D1.clear(),k1.clear();for(let[,u]of kv)try{u()}catch{}kv.clear(),a1.clear()}}function c3(g){for(let[t,h]of Ui)if(h.elementId===g){let u=ze.get(g);if(u)u.removeEventListener(h.event,h.handler);Ui.delete(t)}let i=ze.get(g);if(i)try{i.remove()}catch{}ze.delete(g),D1.delete(g)}function aL(g){let i=g?.type;return i==="ls_modal_open"||i==="ls_modal_set_title"||i==="ls_modal_dismiss"}var Nn=new Map;function f3(g,i,t){let h=i((u)=>{if(!aL(u))return;let P=u;switch(P.type){case"ls_modal_open":{let{scriptId:O,modalId:m,rootElementId:R,options:X}=P;if(Nn.has(m))break;let W;try{W=g.ui.showModal({title:X.title,width:X.width,maxHeight:X.maxHeight,persistent:X.persistent})}catch(G){console.warn("[LumiScript] ctx.ui.showModal failed:",G),t({type:"ls_modal_dismissed",modalId:m});break}t0(R,W.root),W.root.setAttribute("data-ls-script",O),W.root.setAttribute("data-ls-modal",m);let q={modalId:m,rootElementId:R,handle:W,echoed:!1};Nn.set(m,q),W.onDismiss(()=>{if(q.echoed)return;q.echoed=!0,Dg(R),Nn.delete(m),t({type:"ls_modal_dismissed",modalId:m})}),t({type:"ls_modal_opened",modalId:m});break}case"ls_modal_set_title":{let O=Nn.get(P.modalId);if(!O)break;try{O.handle.setTitle(P.title)}catch{}break}case"ls_modal_dismiss":{let O=Nn.get(P.modalId);if(!O)break;try{O.handle.dismiss()}catch{if(!O.echoed)O.echoed=!0,Dg(O.rootElementId),Nn.delete(P.modalId),t({type:"ls_modal_dismissed",modalId:P.modalId})}break}}});return()=>{h();for(let u of Nn.values()){try{u.handle.dismiss()}catch{}Dg(u.rootElementId)}Nn.clear()}}function DL(g){return g?.type==="ls_context_menu_show"}function p3(g,i,t){let h=i(async(u)=>{if(!DL(u))return;let P=u,O=null;try{O=(await g.ui.showContextMenu({position:P.options.position,items:P.options.items})).selectedKey}catch(m){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",m)}t({type:"ls_context_menu_result",requestId:P.requestId,selectedKey:O})});return()=>{h()}}function cL(g){let i=g?.type;return i==="ls_input_bar_action_register"||i==="ls_input_bar_action_set_label"||i==="ls_input_bar_action_set_subtitle"||i==="ls_input_bar_action_set_enabled"||i==="ls_input_bar_action_destroy"}var _l=new Map;function yL(g,i){return`${g}:${i}`}function j3(g,i,t){let h=i((u)=>{if(!cL(u))return;let P=u,O=yL(P.scriptId,P.actionId);switch(P.type){case"ls_input_bar_action_register":{let m=_l.get(O);if(m){try{m.destroy()}catch{}_l.delete(O)}let R;try{R=g.ui.registerInputBarAction({id:P.actionId,label:P.options.label,subtitle:P.options.subtitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl,enabled:P.options.enabled})}catch(X){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",X);break}_l.set(O,R),R.onClick(()=>{t({type:"ls_input_bar_action_click",scriptId:P.scriptId,actionId:P.actionId})}),t({type:"ls_input_bar_action_registered",scriptId:P.scriptId,actionId:P.actionId});break}case"ls_input_bar_action_set_label":{let m=_l.get(O);if(!m)break;try{m.setLabel(P.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let m=_l.get(O);if(!m)break;if(typeof m.setSubtitle!=="function")break;try{m.setSubtitle(P.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let m=_l.get(O);if(!m)break;try{m.setEnabled(P.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let m=_l.get(O);if(!m)break;try{m.destroy()}catch{}_l.delete(O);break}}});return()=>{h();for(let u of _l.values())try{u.destroy()}catch{}_l.clear()}}function VL(g){let i=g?.type;return i==="ls_float_widget_create"||i==="ls_float_widget_move"||i==="ls_float_widget_set_visible"||i==="ls_float_widget_destroy"}var $i=new Map;function d3(g,i,t){let h=i((u)=>{if(!VL(u))return;let P=u;switch(P.type){case"ls_float_widget_create":{let{scriptId:O,widgetId:m,rootElementId:R,options:X}=P,W=$i.get(m);if(W){try{W.handle.destroy()}catch{}Dg(W.rootElementId),$i.delete(m)}let q;try{q=g.ui.createFloatWidget({width:X.width,height:X.height,initialPosition:X.initialPosition,snapToEdge:X.snapToEdge,tooltip:X.tooltip,chromeless:X.chromeless})}catch(G){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",G);break}t0(R,q.root),q.root.setAttribute("data-ls-script",O),q.root.setAttribute("data-ls-widget",m),$i.set(m,{widgetId:m,rootElementId:R,handle:q}),q.onDragEnd((G)=>{t({type:"ls_float_widget_drag_end",widgetId:m,x:G.x,y:G.y})}),t({type:"ls_float_widget_created",widgetId:m});break}case"ls_float_widget_move":{let O=$i.get(P.widgetId);if(!O)break;try{O.handle.moveTo(P.x,P.y)}catch{}break}case"ls_float_widget_set_visible":{let O=$i.get(P.widgetId);if(!O)break;try{O.handle.setVisible(P.visible)}catch{}break}case"ls_float_widget_destroy":{let O=$i.get(P.widgetId);if(!O)break;try{O.handle.destroy()}catch{}Dg(O.rootElementId),$i.delete(P.widgetId);break}}});return()=>{h();for(let u of $i.values()){try{u.handle.destroy()}catch{}Dg(u.rootElementId)}$i.clear()}}function _L(g){let i=g?.type;return i==="ls_drawer_tab_register"||i==="ls_drawer_tab_set_title"||i==="ls_drawer_tab_set_short_name"||i==="ls_drawer_tab_set_badge"||i==="ls_drawer_tab_activate"||i==="ls_drawer_tab_destroy"}var tl=new Map;function EL(g,i){return`${g}:${i}`}function s3(g,i,t){let h=i((u)=>{if(!_L(u))return;let P=u,O=EL(P.scriptId,P.tabId);switch(P.type){case"ls_drawer_tab_register":{let m=tl.get(O);if(m){try{m.handle.destroy()}catch{}Dg(m.rootElementId),tl.delete(O)}let R;try{R=g.ui.registerDrawerTab({id:P.options.id,title:P.options.title,shortName:P.options.shortName,description:P.options.description,keywords:P.options.keywords,headerTitle:P.options.headerTitle,iconSvg:P.options.iconSvg,iconUrl:P.options.iconUrl})}catch(X){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",X);break}t0(P.rootElementId,R.root),R.root.setAttribute("data-ls-script",P.scriptId),R.root.setAttribute("data-ls-tab",P.tabId),tl.set(O,{scriptId:P.scriptId,tabId:P.tabId,rootElementId:P.rootElementId,handle:R}),R.onActivate(()=>{t({type:"ls_drawer_tab_activated",scriptId:P.scriptId,tabId:P.tabId})}),t({type:"ls_drawer_tab_registered",scriptId:P.scriptId,tabId:P.tabId});break}case"ls_drawer_tab_set_title":{let m=tl.get(O);if(!m)break;try{m.handle.setTitle(P.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let m=tl.get(O);if(!m)break;try{m.handle.setShortName(P.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let m=tl.get(O);if(!m)break;try{m.handle.setBadge(P.badge)}catch{}break}case"ls_drawer_tab_activate":{let m=tl.get(O);if(!m)break;try{m.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let m=tl.get(O);if(!m)break;try{m.handle.destroy()}catch{}Dg(m.rootElementId),tl.delete(O);break}}});return()=>{h();for(let u of tl.values()){try{u.handle.destroy()}catch{}Dg(u.rootElementId)}tl.clear()}}var y1=wr(dr(),1);function Nfo(g){let i=[],t=g.dom.addStyle(ZM);i.push(t);let h=[],u=g.onBackendMessage((j)=>{for(let Pr of h)Pr(j)});i.push(u);let P=(j)=>{return h.push(j),()=>{let Pr=h.indexOf(j);if(Pr!==-1)h.splice(Pr,1)}},O=(j)=>{g.sendToBackend(j)},m=E3(g,P,O);i.push(m);let R=f3(g,P,O);i.push(R);let X=p3(g,P,O);i.push(X);let W=j3(g,P,O);i.push(W);let q=d3(g,P,O);i.push(q);let G=s3(g,P,O);i.push(G),O({type:"frontend_ready"});let L=g.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),S=F8.createRoot(L.root);S.render(y1.jsxDEV(I8.StrictMode,{children:y1.jsxDEV(B3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>{try{S.unmount()}catch{}try{L.destroy()}catch{}});let I=g.ui.mount("settings_extensions"),k=F8.createRoot(I);return k.render(y1.jsxDEV(I8.StrictMode,{children:y1.jsxDEV(a3,{onBackendMessage:P,sendToBackend:O},void 0,!1,void 0,this)},void 0,!1,void 0,this)),i.push(()=>k.unmount()),()=>{for(let j of i)try{j()}catch{}g.dom.cleanup()}}export{Nfo as setup};
