var WU=Object.create;var{getPrototypeOf:MU,defineProperty:WA,getOwnPropertyNames:GU}=Object;var XU=Object.prototype.hasOwnProperty;function YU(w){return this[w]}var JU,QU,ur=(w,h,H)=>{var O=w!=null&&typeof w==="object";if(O){var A=h?JU??=new WeakMap:QU??=new WeakMap,u=A.get(w);if(u)return u}H=w!=null?WU(MU(w)):{};let W=h||!w||!w.__esModule?WA(H,"default",{value:w,enumerable:!0}):H;for(let M of GU(w))if(!XU.call(W,M))WA(W,M,{get:YU.bind(w,M),enumerable:!0});if(O)A.set(w,W);return W};var Jb=(w,h)=>()=>(h||w((h={exports:{}}).exports,h),h.exports);var zU=(w)=>w;function RU(w,h){this[w]=zU.bind(null,h)}var KU=(w,h)=>{for(var H in h)WA(w,H,{get:h[H],enumerable:!0,configurable:!0,set:RU.bind(h,H)})};var hg=Jb(($U,s6)=>{(function(){function w(J,x){Object.defineProperty(O.prototype,J,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",x[0],x[1])}})}function h(J){if(J===null||typeof J!=="object")return null;return J=Z0&&J[Z0]||J["@@iterator"],typeof J==="function"?J:null}function H(J,x){J=(J=J.constructor)&&(J.displayName||J.name)||"ReactClass";var gr=J+"."+x;Hr[gr]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",x,J),Hr[gr]=!0)}function O(J,x,gr){this.props=J,this.context=x,this.refs=s0,this.updater=gr||y0}function A(){}function u(J,x,gr){this.props=J,this.context=x,this.refs=s0,this.updater=gr||y0}function W(){}function M(J){return""+J}function Q(J){try{M(J);var x=!1}catch(Jr){x=!0}if(x){x=console;var gr=x.error,Or=typeof Symbol==="function"&&Symbol.toStringTag&&J[Symbol.toStringTag]||J.constructor.name||"Object";return gr.call(x,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Or),M(J)}}function R(J){if(J==null)return null;if(typeof J==="function")return J.$$typeof===ah?null:J.displayName||J.name||null;if(typeof J==="string")return J;switch(J){case Gr:return"Fragment";case V:return"Profiler";case i:return"StrictMode";case kr:return"Suspense";case or:return"SuspenseList";case Jg:return"Activity"}if(typeof J==="object")switch(typeof J.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),J.$$typeof){case vr:return"Portal";case Kr:return J.displayName||"Context";case Ar:return(J._context.displayName||"Context")+".Consumer";case Yr:var x=J.render;return J=J.displayName,J||(J=x.displayName||x.name||"",J=J!==""?"ForwardRef("+J+")":"ForwardRef"),J;case Dr:return x=J.displayName||null,x!==null?x:R(J.type)||"Memo";case pr:x=J._payload,J=J._init;try{return R(J(x))}catch(gr){}}return null}function z(J){if(J===Gr)return"<>";if(typeof J==="object"&&J!==null&&J.$$typeof===pr)return"<...>";try{var x=R(J);return x?"<"+x+">":"<...>"}catch(gr){return"<...>"}}function X(){var J=Vr.A;return J===null?null:J.getOwner()}function K(){return Error("react-stack-top-frame")}function I(J){if(xb.call(J,"key")){var x=Object.getOwnPropertyDescriptor(J,"key").get;if(x&&x.isReactWarning)return!1}return J.key!==void 0}function f(J,x){function gr(){m4||(m4=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",x))}gr.isReactWarning=!0,Object.defineProperty(J,"key",{get:gr,configurable:!0})}function C(){var J=R(this.type);return Nw[J]||(Nw[J]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),J=this.props.ref,J!==void 0?J:null}function j(J,x,gr,Or,Jr,Tr){var Cr=gr.ref;return J={$$typeof:hr,type:J,key:x,props:gr,_owner:Or},(Cr!==void 0?Cr:null)!==null?Object.defineProperty(J,"ref",{enumerable:!1,get:C}):Object.defineProperty(J,"ref",{enumerable:!1,value:null}),J._store={},Object.defineProperty(J._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(J,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(J,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Jr}),Object.defineProperty(J,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Tr}),Object.freeze&&(Object.freeze(J.props),Object.freeze(J)),J}function rr(J,x){return x=j(J.type,x,J.props,J._owner,J._debugStack,J._debugTask),J._store&&(x._store.validated=J._store.validated),x}function Pr(J){wr(J)?J._store&&(J._store.validated=1):typeof J==="object"&&J!==null&&J.$$typeof===pr&&(J._payload.status==="fulfilled"?wr(J._payload.value)&&J._payload.value._store&&(J._payload.value._store.validated=1):J._store&&(J._store.validated=1))}function wr(J){return typeof J==="object"&&J!==null&&J.$$typeof===hr}function p(J){var x={"=":"=0",":":"=2"};return"$"+J.replace(/[=:]/g,function(gr){return x[gr]})}function s(J,x){return typeof J==="object"&&J!==null&&J.key!=null?(Q(J.key),p(""+J.key)):x.toString(36)}function br(J){switch(J.status){case"fulfilled":return J.value;case"rejected":throw J.reason;default:switch(typeof J.status==="string"?J.then(W,W):(J.status="pending",J.then(function(x){J.status==="pending"&&(J.status="fulfilled",J.value=x)},function(x){J.status==="pending"&&(J.status="rejected",J.reason=x)})),J.status){case"fulfilled":return J.value;case"rejected":throw J.reason}}throw J}function m(J,x,gr,Or,Jr){var Tr=typeof J;if(Tr==="undefined"||Tr==="boolean")J=null;var Cr=!1;if(J===null)Cr=!0;else switch(Tr){case"bigint":case"string":case"number":Cr=!0;break;case"object":switch(J.$$typeof){case hr:case vr:Cr=!0;break;case pr:return Cr=J._init,m(Cr(J._payload),x,gr,Or,Jr)}}if(Cr){Cr=J,Jr=Jr(Cr);var wg=Or===""?"."+s(Cr,0):Or;return ug(Jr)?(gr="",wg!=null&&(gr=wg.replace(Cb,"$&/")+"/"),m(Jr,x,gr,"",function($0){return $0})):Jr!=null&&(wr(Jr)&&(Jr.key!=null&&(Cr&&Cr.key===Jr.key||Q(Jr.key)),gr=rr(Jr,gr+(Jr.key==null||Cr&&Cr.key===Jr.key?"":(""+Jr.key).replace(Cb,"$&/")+"/")+wg),Or!==""&&Cr!=null&&wr(Cr)&&Cr.key==null&&Cr._store&&!Cr._store.validated&&(gr._store.validated=2),Jr=gr),x.push(Jr)),1}if(Cr=0,wg=Or===""?".":Or+":",ug(J))for(var Ur=0;Ur<J.length;Ur++)Or=J[Ur],Tr=wg+s(Or,Ur),Cr+=m(Or,x,gr,Tr,Jr);else if(Ur=h(J),typeof Ur==="function")for(Ur===J.entries&&(Tb||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Tb=!0),J=Ur.call(J),Ur=0;!(Or=J.next()).done;)Or=Or.value,Tr=wg+s(Or,Ur++),Cr+=m(Or,x,gr,Tr,Jr);else if(Tr==="object"){if(typeof J.then==="function")return m(br(J),x,gr,Or,Jr);throw x=String(J),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(J).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return Cr}function E(J,x,gr){if(J==null)return J;var Or=[],Jr=0;return m(J,Or,"","",function(Tr){return x.call(gr,Tr,Jr++)}),Or}function t(J){if(J._status===-1){var x=J._ioInfo;x!=null&&(x.start=x.end=performance.now()),x=J._result;var gr=x();if(gr.then(function(Jr){if(J._status===0||J._status===-1){J._status=1,J._result=Jr;var Tr=J._ioInfo;Tr!=null&&(Tr.end=performance.now()),gr.status===void 0&&(gr.status="fulfilled",gr.value=Jr)}},function(Jr){if(J._status===0||J._status===-1){J._status=2,J._result=Jr;var Tr=J._ioInfo;Tr!=null&&(Tr.end=performance.now()),gr.status===void 0&&(gr.status="rejected",gr.reason=Jr)}}),x=J._ioInfo,x!=null){x.value=gr;var Or=gr.displayName;typeof Or==="string"&&(x.name=Or)}J._status===-1&&(J._status=0,J._result=gr)}if(J._status===1)return x=J._result,x===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,x),"default"in x||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,x),x.default;throw J._result}function D(){var J=Vr.H;return J===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),J}function zr(){Vr.asyncTransitions--}function Xr(J){if(Iw===null)try{var x=("require"+Math.random()).slice(0,7);Iw=(s6&&s6[x]).call(s6,"timers").setImmediate}catch(gr){Iw=function(Or){k4===!1&&(k4=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Jr=new MessageChannel;Jr.port1.onmessage=Or,Jr.port2.postMessage(void 0)}}return Iw(J)}function Rr(J){return 1<J.length&&typeof AggregateError==="function"?AggregateError(J):J[0]}function mr(J,x){x!==xw-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),xw=x}function _(J,x,gr){var Or=Vr.actQueue;if(Or!==null)if(Or.length!==0)try{d(Or),Xr(function(){return _(J,x,gr)});return}catch(Jr){Vr.thrownErrors.push(Jr)}else Vr.actQueue=null;0<Vr.thrownErrors.length?(Or=Rr(Vr.thrownErrors),Vr.thrownErrors.length=0,gr(Or)):x(J)}function d(J){if(!Cw){Cw=!0;var x=0;try{for(;x<J.length;x++){var gr=J[x];do{Vr.didUsePromise=!1;var Or=gr(!1);if(Or!==null){if(Vr.didUsePromise){J[x]=gr,J.splice(0,x);return}gr=Or}else break}while(1)}J.length=0}catch(Jr){J.splice(0,x+1),Vr.thrownErrors.push(Jr)}finally{Cw=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var hr=Symbol.for("react.transitional.element"),vr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Ar=Symbol.for("react.consumer"),Kr=Symbol.for("react.context"),Yr=Symbol.for("react.forward_ref"),kr=Symbol.for("react.suspense"),or=Symbol.for("react.suspense_list"),Dr=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Jg=Symbol.for("react.activity"),Z0=Symbol.iterator,Hr={},y0={isMounted:function(){return!1},enqueueForceUpdate:function(J){H(J,"forceUpdate")},enqueueReplaceState:function(J){H(J,"replaceState")},enqueueSetState:function(J){H(J,"setState")}},K0=Object.assign,s0={};Object.freeze(s0),O.prototype.isReactComponent={},O.prototype.setState=function(J,x){if(typeof J!=="object"&&typeof J!=="function"&&J!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,J,x,"setState")},O.prototype.forceUpdate=function(J){this.updater.enqueueForceUpdate(this,J,"forceUpdate")};var tg={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(F5 in tg)tg.hasOwnProperty(F5)&&w(F5,tg[F5]);A.prototype=O.prototype,tg=u.prototype=new A,tg.constructor=u,K0(tg,O.prototype),tg.isPureReactComponent=!0;var ug=Array.isArray,ah=Symbol.for("react.client.reference"),Vr={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},xb=Object.prototype.hasOwnProperty,Qg=console.createTask?console.createTask:function(){return null};tg={react_stack_bottom_frame:function(J){return J()}};var m4,hv,Nw={},Zw=tg.react_stack_bottom_frame.bind(tg,K)(),C8=Qg(z(K)),Tb=!1,Cb=/\/+/g,L5=typeof reportError==="function"?reportError:function(J){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof J==="object"&&J!==null&&typeof J.message==="string"?String(J.message):String(J),error:J});if(!window.dispatchEvent(x))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",J);return}console.error(J)},k4=!1,Iw=null,xw=0,Tw=!1,Cw=!1,dh=typeof queueMicrotask==="function"?function(J){queueMicrotask(function(){return queueMicrotask(J)})}:Xr;tg=Object.freeze({__proto__:null,c:function(J){return D().useMemoCache(J)}});var F5={map:E,forEach:function(J,x,gr){E(J,function(){x.apply(this,arguments)},gr)},count:function(J){var x=0;return E(J,function(){x++}),x},toArray:function(J){return E(J,function(x){return x})||[]},only:function(J){if(!wr(J))throw Error("React.Children.only expected to receive a single React element child.");return J}};$U.Activity=Jg,$U.Children=F5,$U.Component=O,$U.Fragment=Gr,$U.Profiler=V,$U.PureComponent=u,$U.StrictMode=i,$U.Suspense=kr,$U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vr,$U.__COMPILER_RUNTIME=tg,$U.act=function(J){var x=Vr.actQueue,gr=xw;xw++;var Or=Vr.actQueue=x!==null?x:[],Jr=!1;try{var Tr=J()}catch(Ur){Vr.thrownErrors.push(Ur)}if(0<Vr.thrownErrors.length)throw mr(x,gr),J=Rr(Vr.thrownErrors),Vr.thrownErrors.length=0,J;if(Tr!==null&&typeof Tr==="object"&&typeof Tr.then==="function"){var Cr=Tr;return dh(function(){Jr||Tw||(Tw=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Ur,$0){Jr=!0,Cr.then(function(r1){if(mr(x,gr),gr===0){try{d(Or),Xr(function(){return _(r1,Ur,$0)})}catch(sh){Vr.thrownErrors.push(sh)}if(0<Vr.thrownErrors.length){var B5=Rr(Vr.thrownErrors);Vr.thrownErrors.length=0,$0(B5)}}else Ur(r1)},function(r1){mr(x,gr),0<Vr.thrownErrors.length?(r1=Rr(Vr.thrownErrors),Vr.thrownErrors.length=0,$0(r1)):$0(r1)})}}}var wg=Tr;if(mr(x,gr),gr===0&&(d(Or),Or.length!==0&&dh(function(){Jr||Tw||(Tw=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Vr.actQueue=null),0<Vr.thrownErrors.length)throw J=Rr(Vr.thrownErrors),Vr.thrownErrors.length=0,J;return{then:function(Ur,$0){Jr=!0,gr===0?(Vr.actQueue=Or,Xr(function(){return _(wg,Ur,$0)})):Ur(wg)}}},$U.cache=function(J){return function(){return J.apply(null,arguments)}},$U.cacheSignal=function(){return null},$U.captureOwnerStack=function(){var J=Vr.getCurrentStack;return J===null?null:J()},$U.cloneElement=function(J,x,gr){if(J===null||J===void 0)throw Error("The argument must be a React element, but you passed "+J+".");var Or=K0({},J.props),Jr=J.key,Tr=J._owner;if(x!=null){var Cr;r:{if(xb.call(x,"ref")&&(Cr=Object.getOwnPropertyDescriptor(x,"ref").get)&&Cr.isReactWarning){Cr=!1;break r}Cr=x.ref!==void 0}Cr&&(Tr=X()),I(x)&&(Q(x.key),Jr=""+x.key);for(wg in x)!xb.call(x,wg)||wg==="key"||wg==="__self"||wg==="__source"||wg==="ref"&&x.ref===void 0||(Or[wg]=x[wg])}var wg=arguments.length-2;if(wg===1)Or.children=gr;else if(1<wg){Cr=Array(wg);for(var Ur=0;Ur<wg;Ur++)Cr[Ur]=arguments[Ur+2];Or.children=Cr}Or=j(J.type,Jr,Or,Tr,J._debugStack,J._debugTask);for(Jr=2;Jr<arguments.length;Jr++)Pr(arguments[Jr]);return Or},$U.createContext=function(J){return J={$$typeof:Kr,_currentValue:J,_currentValue2:J,_threadCount:0,Provider:null,Consumer:null},J.Provider=J,J.Consumer={$$typeof:Ar,_context:J},J._currentRenderer=null,J._currentRenderer2=null,J},$U.createElement=function(J,x,gr){for(var Or=2;Or<arguments.length;Or++)Pr(arguments[Or]);Or={};var Jr=null;if(x!=null)for(Ur in hv||!("__self"in x)||"key"in x||(hv=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),I(x)&&(Q(x.key),Jr=""+x.key),x)xb.call(x,Ur)&&Ur!=="key"&&Ur!=="__self"&&Ur!=="__source"&&(Or[Ur]=x[Ur]);var Tr=arguments.length-2;if(Tr===1)Or.children=gr;else if(1<Tr){for(var Cr=Array(Tr),wg=0;wg<Tr;wg++)Cr[wg]=arguments[wg+2];Object.freeze&&Object.freeze(Cr),Or.children=Cr}if(J&&J.defaultProps)for(Ur in Tr=J.defaultProps,Tr)Or[Ur]===void 0&&(Or[Ur]=Tr[Ur]);Jr&&f(Or,typeof J==="function"?J.displayName||J.name||"Unknown":J);var Ur=1e4>Vr.recentlyCreatedOwnerStacks++;return j(J,Jr,Or,X(),Ur?Error("react-stack-top-frame"):Zw,Ur?Qg(z(J)):C8)},$U.createRef=function(){var J={current:null};return Object.seal(J),J},$U.forwardRef=function(J){J!=null&&J.$$typeof===Dr?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof J!=="function"?console.error("forwardRef requires a render function but was given %s.",J===null?"null":typeof J):J.length!==0&&J.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",J.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),J!=null&&J.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var x={$$typeof:Yr,render:J},gr;return Object.defineProperty(x,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,J.name||J.displayName||(Object.defineProperty(J,"name",{value:Or}),J.displayName=Or)}}),x},$U.isValidElement=wr,$U.lazy=function(J){J={_status:-1,_result:J};var x={$$typeof:pr,_payload:J,_init:t},gr={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return J._ioInfo=gr,x._debugInfo=[{awaited:gr}],x},$U.memo=function(J,x){J==null&&console.error("memo: The first argument must be a component. Instead received: %s",J===null?"null":typeof J),x={$$typeof:Dr,type:J,compare:x===void 0?null:x};var gr;return Object.defineProperty(x,"displayName",{enumerable:!1,configurable:!0,get:function(){return gr},set:function(Or){gr=Or,J.name||J.displayName||(Object.defineProperty(J,"name",{value:Or}),J.displayName=Or)}}),x},$U.startTransition=function(J){var x=Vr.T,gr={};gr._updatedFibers=new Set,Vr.T=gr;try{var Or=J(),Jr=Vr.S;Jr!==null&&Jr(gr,Or),typeof Or==="object"&&Or!==null&&typeof Or.then==="function"&&(Vr.asyncTransitions++,Or.then(zr,zr),Or.then(W,L5))}catch(Tr){L5(Tr)}finally{x===null&&gr._updatedFibers&&(J=gr._updatedFibers.size,gr._updatedFibers.clear(),10<J&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),x!==null&&gr.types!==null&&(x.types!==null&&x.types!==gr.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),x.types=gr.types),Vr.T=x}},$U.unstable_useCacheRefresh=function(){return D().useCacheRefresh()},$U.use=function(J){return D().use(J)},$U.useActionState=function(J,x,gr){return D().useActionState(J,x,gr)},$U.useCallback=function(J,x){return D().useCallback(J,x)},$U.useContext=function(J){var x=D();return J.$$typeof===Ar&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),x.useContext(J)},$U.useDebugValue=function(J,x){return D().useDebugValue(J,x)},$U.useDeferredValue=function(J,x){return D().useDeferredValue(J,x)},$U.useEffect=function(J,x){return J==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useEffect(J,x)},$U.useEffectEvent=function(J){return D().useEffectEvent(J)},$U.useId=function(){return D().useId()},$U.useImperativeHandle=function(J,x,gr){return D().useImperativeHandle(J,x,gr)},$U.useInsertionEffect=function(J,x){return J==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useInsertionEffect(J,x)},$U.useLayoutEffect=function(J,x){return J==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),D().useLayoutEffect(J,x)},$U.useMemo=function(J,x){return D().useMemo(J,x)},$U.useOptimistic=function(J,x){return D().useOptimistic(J,x)},$U.useReducer=function(J,x,gr){return D().useReducer(J,x,gr)},$U.useRef=function(J){return D().useRef(J)},$U.useState=function(J){return D().useState(J)},$U.useSyncExternalStore=function(J,x,gr){return D().useSyncExternalStore(J,x,gr)},$U.useTransition=function(){return D().useTransition()},$U.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var OG=Jb((UU)=>{(function(){function w(){if(p=!1,E){var _=UU.unstable_now();zr=_;var d=!0;try{r:{Pr=!1,wr&&(wr=!1,br(t),t=-1),rr=!0;var hr=j;try{g:{u(_);for(C=H(K);C!==null&&!(C.expirationTime>_&&M());){var vr=C.callback;if(typeof vr==="function"){C.callback=null,j=C.priorityLevel;var Gr=vr(C.expirationTime<=_);if(_=UU.unstable_now(),typeof Gr==="function"){C.callback=Gr,u(_),d=!0;break g}C===H(K)&&O(K),u(_)}else O(K);C=H(K)}if(C!==null)d=!0;else{var i=H(I);i!==null&&Q(W,i.startTime-_),d=!1}}break r}finally{C=null,j=hr,rr=!1}d=void 0}}finally{d?Xr():E=!1}}}function h(_,d){var hr=_.length;_.push(d);r:for(;0<hr;){var vr=hr-1>>>1,Gr=_[vr];if(0<A(Gr,d))_[vr]=d,_[hr]=Gr,hr=vr;else break r}}function H(_){return _.length===0?null:_[0]}function O(_){if(_.length===0)return null;var d=_[0],hr=_.pop();if(hr!==d){_[0]=hr;r:for(var vr=0,Gr=_.length,i=Gr>>>1;vr<i;){var V=2*(vr+1)-1,Ar=_[V],Kr=V+1,Yr=_[Kr];if(0>A(Ar,hr))Kr<Gr&&0>A(Yr,Ar)?(_[vr]=Yr,_[Kr]=hr,vr=Kr):(_[vr]=Ar,_[V]=hr,vr=V);else if(Kr<Gr&&0>A(Yr,hr))_[vr]=Yr,_[Kr]=hr,vr=Kr;else break r}}return d}function A(_,d){var hr=_.sortIndex-d.sortIndex;return hr!==0?hr:_.id-d.id}function u(_){for(var d=H(I);d!==null;){if(d.callback===null)O(I);else if(d.startTime<=_)O(I),d.sortIndex=d.expirationTime,h(K,d);else break;d=H(I)}}function W(_){if(wr=!1,u(_),!Pr)if(H(K)!==null)Pr=!0,E||(E=!0,Xr());else{var d=H(I);d!==null&&Q(W,d.startTime-_)}}function M(){return p?!0:UU.unstable_now()-zr<D?!1:!0}function Q(_,d){t=s(function(){_(UU.unstable_now())},d)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),UU.unstable_now=void 0,typeof performance==="object"&&typeof performance.now==="function"){var R=performance;UU.unstable_now=function(){return R.now()}}else{var z=Date,X=z.now();UU.unstable_now=function(){return z.now()-X}}var K=[],I=[],f=1,C=null,j=3,rr=!1,Pr=!1,wr=!1,p=!1,s=typeof setTimeout==="function"?setTimeout:null,br=typeof clearTimeout==="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null,E=!1,t=-1,D=5,zr=-1;if(typeof m==="function")var Xr=function(){m(w)};else if(typeof MessageChannel<"u"){var Rr=new MessageChannel,mr=Rr.port2;Rr.port1.onmessage=w,Xr=function(){mr.postMessage(null)}}else Xr=function(){s(w,0)};UU.unstable_IdlePriority=5,UU.unstable_ImmediatePriority=1,UU.unstable_LowPriority=4,UU.unstable_NormalPriority=3,UU.unstable_Profiling=null,UU.unstable_UserBlockingPriority=2,UU.unstable_cancelCallback=function(_){_.callback=null},UU.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1000/_):5},UU.unstable_getCurrentPriorityLevel=function(){return j},UU.unstable_next=function(_){switch(j){case 1:case 2:case 3:var d=3;break;default:d=j}var hr=j;j=d;try{return _()}finally{j=hr}},UU.unstable_requestPaint=function(){p=!0},UU.unstable_runWithPriority=function(_,d){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var hr=j;j=_;try{return d()}finally{j=hr}},UU.unstable_scheduleCallback=function(_,d,hr){var vr=UU.unstable_now();switch(typeof hr==="object"&&hr!==null?(hr=hr.delay,hr=typeof hr==="number"&&0<hr?vr+hr:vr):hr=vr,_){case 1:var Gr=-1;break;case 2:Gr=250;break;case 5:Gr=1073741823;break;case 4:Gr=1e4;break;default:Gr=5000}return Gr=hr+Gr,_={id:f++,callback:d,priorityLevel:_,startTime:hr,expirationTime:Gr,sortIndex:-1},hr>vr?(_.sortIndex=hr,h(I,_),H(K)===null&&_===H(I)&&(wr?(br(t),t=-1):wr=!0,Q(W,hr-vr))):(_.sortIndex=Gr,h(K,_),Pr||rr||(Pr=!0,E||(E=!0,Xr()))),_},UU.unstable_shouldYield=M,UU.unstable_wrapCallback=function(_){var d=j;return function(){var hr=j;j=d;try{return _.apply(this,arguments)}finally{j=hr}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var qG=Jb((LU)=>{var MA=ur(hg());(function(){function w(){}function h(z){return""+z}function H(z,X,K){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;try{h(I);var f=!1}catch(C){f=!0}return f&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol==="function"&&Symbol.toStringTag&&I[Symbol.toStringTag]||I.constructor.name||"Object"),h(I)),{$$typeof:Q,key:I==null?null:""+I,children:z,containerInfo:X,implementation:K}}function O(z,X){if(z==="font")return"";if(typeof X==="string")return X==="use-credentials"?X:""}function A(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":'something with type "'+typeof z+'"'}function u(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":typeof z==="string"?JSON.stringify(z):typeof z==="number"?"`"+z+"`":'something with type "'+typeof z+'"'}function W(){var z=R.H;return z===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),z}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var M={d:{f:w,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},Q=Symbol.for("react.portal"),R=MA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),LU.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,LU.createPortal=function(z,X){var K=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!X||X.nodeType!==1&&X.nodeType!==9&&X.nodeType!==11)throw Error("Target container is not a DOM element.");return H(z,X,null,K)},LU.flushSync=function(z){var X=R.T,K=M.p;try{if(R.T=null,M.p=2,z)return z()}finally{R.T=X,M.p=K,M.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},LU.preconnect=function(z,X){typeof z==="string"&&z?X!=null&&typeof X!=="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",u(X)):X!=null&&typeof X.crossOrigin!=="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",A(X.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",A(z)),typeof z==="string"&&(X?(X=X.crossOrigin,X=typeof X==="string"?X==="use-credentials"?X:"":void 0):X=null,M.d.C(z,X))},LU.prefetchDNS=function(z){if(typeof z!=="string"||!z)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",A(z));else if(1<arguments.length){var X=arguments[1];typeof X==="object"&&X.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",u(X)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",u(X))}typeof z==="string"&&M.d.D(z)},LU.preinit=function(z,X){if(typeof z==="string"&&z?X==null||typeof X!=="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",u(X)):X.as!=="style"&&X.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',u(X.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",A(z)),typeof z==="string"&&X&&typeof X.as==="string"){var K=X.as,I=O(K,X.crossOrigin),f=typeof X.integrity==="string"?X.integrity:void 0,C=typeof X.fetchPriority==="string"?X.fetchPriority:void 0;K==="style"?M.d.S(z,typeof X.precedence==="string"?X.precedence:void 0,{crossOrigin:I,integrity:f,fetchPriority:C}):K==="script"&&M.d.X(z,{crossOrigin:I,integrity:f,fetchPriority:C,nonce:typeof X.nonce==="string"?X.nonce:void 0})}},LU.preinitModule=function(z,X){var K="";if(typeof z==="string"&&z||(K+=" The `href` argument encountered was "+A(z)+"."),X!==void 0&&typeof X!=="object"?K+=" The `options` argument encountered was "+A(X)+".":X&&("as"in X)&&X.as!=="script"&&(K+=" The `as` option encountered was "+u(X.as)+"."),K)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",K);else switch(K=X&&typeof X.as==="string"?X.as:"script",K){case"script":break;default:K=u(K),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',K,z)}if(typeof z==="string")if(typeof X==="object"&&X!==null){if(X.as==null||X.as==="script")K=O(X.as,X.crossOrigin),M.d.M(z,{crossOrigin:K,integrity:typeof X.integrity==="string"?X.integrity:void 0,nonce:typeof X.nonce==="string"?X.nonce:void 0})}else X==null&&M.d.M(z)},LU.preload=function(z,X){var K="";if(typeof z==="string"&&z||(K+=" The `href` argument encountered was "+A(z)+"."),X==null||typeof X!=="object"?K+=" The `options` argument encountered was "+A(X)+".":typeof X.as==="string"&&X.as||(K+=" The `as` option encountered was "+A(X.as)+"."),K&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',K),typeof z==="string"&&typeof X==="object"&&X!==null&&typeof X.as==="string"){K=X.as;var I=O(K,X.crossOrigin);M.d.L(z,K,{crossOrigin:I,integrity:typeof X.integrity==="string"?X.integrity:void 0,nonce:typeof X.nonce==="string"?X.nonce:void 0,type:typeof X.type==="string"?X.type:void 0,fetchPriority:typeof X.fetchPriority==="string"?X.fetchPriority:void 0,referrerPolicy:typeof X.referrerPolicy==="string"?X.referrerPolicy:void 0,imageSrcSet:typeof X.imageSrcSet==="string"?X.imageSrcSet:void 0,imageSizes:typeof X.imageSizes==="string"?X.imageSizes:void 0,media:typeof X.media==="string"?X.media:void 0})}},LU.preloadModule=function(z,X){var K="";typeof z==="string"&&z||(K+=" The `href` argument encountered was "+A(z)+"."),X!==void 0&&typeof X!=="object"?K+=" The `options` argument encountered was "+A(X)+".":X&&("as"in X)&&typeof X.as!=="string"&&(K+=" The `as` option encountered was "+A(X.as)+"."),K&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',K),typeof z==="string"&&(X?(K=O(X.as,X.crossOrigin),M.d.m(z,{as:typeof X.as==="string"&&X.as!=="script"?X.as:void 0,crossOrigin:K,integrity:typeof X.integrity==="string"?X.integrity:void 0})):M.d.m(z))},LU.requestFormReset=function(z){M.d.r(z)},LU.unstable_batchedUpdates=function(z,X){return z(X)},LU.useFormState=function(z,X,K){return W().useFormState(z,X,K)},LU.useFormStatus=function(){return W().useHostTransitionStatus()},LU.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var mh=Jb((kx,AG)=>{AG.exports=qG()});var PG=Jb((FU)=>{var bg=ur(OG()),kh=ur(hg()),GA=ur(mh());(function(){function w(r,g){for(r=r.memoizedState;r!==null&&0<g;)r=r.next,g--;return r}function h(r,g,v,b){if(v>=g.length)return b;var l=g[v],o=v0(r)?r.slice():tr({},r);return o[l]=h(r[l],g,v+1,b),o}function H(r,g,v){if(g.length!==v.length)console.warn("copyWithRename() expects paths of the same length");else{for(var b=0;b<v.length-1;b++)if(g[b]!==v[b]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return O(r,g,v,0)}}function O(r,g,v,b){var l=g[b],o=v0(r)?r.slice():tr({},r);return b+1===g.length?(o[v[b]]=o[l],v0(o)?o.splice(l,1):delete o[l]):o[l]=O(r[l],g,v,b+1),o}function A(r,g,v){var b=g[v],l=v0(r)?r.slice():tr({},r);if(v+1===g.length)return v0(l)?l.splice(b,1):delete l[b],l;return l[b]=A(r[b],g,v+1),l}function u(){return!1}function W(){return null}function M(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function Q(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function R(){}function z(){}function X(r){var g=[];return r.forEach(function(v){g.push(v)}),g.sort().join(", ")}function K(r,g,v,b){return new wR(r,g,v,b)}function I(r,g){r.context===f5&&(CO(r.current,2,g,r,null,null),tb())}function f(r,g){if(F1!==null){var v=g.staleFamilies;g=g.updatedFamilies,U2(),M9(r.current,g,v),tb()}}function C(r){F1=r}function j(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function rr(r){var g=r,v=r;if(r.alternate)for(;g.return;)g=g.return;else{r=g;do g=r,(g.flags&4098)!==0&&(v=g.return),r=g.return;while(r)}return g.tag===3?v:null}function Pr(r){if(r.tag===13){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function wr(r){if(r.tag===31){var g=r.memoizedState;if(g===null&&(r=r.alternate,r!==null&&(g=r.memoizedState)),g!==null)return g.dehydrated}return null}function p(r){if(rr(r)!==r)throw Error("Unable to find node on an unmounted component.")}function s(r){var g=r.alternate;if(!g){if(g=rr(r),g===null)throw Error("Unable to find node on an unmounted component.");return g!==r?null:r}for(var v=r,b=g;;){var l=v.return;if(l===null)break;var o=l.alternate;if(o===null){if(b=l.return,b!==null){v=b;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===v)return p(l),r;if(o===b)return p(l),g;o=o.sibling}throw Error("Unable to find node on an unmounted component.")}if(v.return!==b.return)v=l,b=o;else{for(var q=!1,P=l.child;P;){if(P===v){q=!0,v=l,b=o;break}if(P===b){q=!0,b=l,v=o;break}P=P.sibling}if(!q){for(P=o.child;P;){if(P===v){q=!0,v=o,b=l;break}if(P===b){q=!0,b=o,v=l;break}P=P.sibling}if(!q)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(v.alternate!==b)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(v.tag!==3)throw Error("Unable to find node on an unmounted component.");return v.stateNode.current===v?r:g}function br(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r;for(r=r.child;r!==null;){if(g=br(r),g!==null)return g;r=r.sibling}return null}function m(r){if(r===null||typeof r!=="object")return null;return r=R7&&r[R7]||r["@@iterator"],typeof r==="function"?r:null}function E(r){if(r==null)return null;if(typeof r==="function")return r.$$typeof===$K?null:r.displayName||r.name||null;if(typeof r==="string")return r;switch(r){case rh:return"Fragment";case VO:return"Profiler";case jo:return"StrictMode";case eO:return"Suspense";case EO:return"SuspenseList";case yO:return"Activity"}if(typeof r==="object")switch(typeof r.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case sb:return"Portal";case Kv:return r.displayName||"Context";case _O:return(r._context.displayName||"Context")+".Consumer";case S2:var g=r.render;return r=r.displayName,r||(r=g.displayName||g.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case to:return g=r.displayName||null,g!==null?g:E(r.type)||"Memo";case O1:g=r._payload,r=r._init;try{return E(r(g))}catch(v){}}return null}function t(r){return typeof r.tag==="number"?D(r):typeof r.name==="string"?r.name:null}function D(r){var g=r.type;switch(r.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(g._context.displayName||"Context")+".Consumer";case 10:return g.displayName||"Context";case 18:return"DehydratedFragment";case 11:return r=g.render,r=r.displayName||r.name||"",g.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return g;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return E(g);case 8:return g===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 14:case 15:if(typeof g==="function")return g.displayName||g.name||null;if(typeof g==="string")return g;break;case 29:if(g=r._debugInfo,g!=null){for(var v=g.length-1;0<=v;v--)if(typeof g[v].name==="string")return g[v].name}if(r.return!==null)return D(r.return)}return null}function zr(r){return{current:r}}function Xr(r,g){0>av?console.error("Unexpected pop."):(g!==jO[av]&&console.error("Unexpected Fiber popped."),r.current=nO[av],nO[av]=null,jO[av]=null,av--)}function Rr(r,g,v){av++,nO[av]=r.current,jO[av]=v,r.current=g}function mr(r){return r===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),r}function _(r,g){Rr(e5,g,r),Rr(m2,r,r),Rr(_5,null,r);var v=g.nodeType;switch(v){case 9:case 11:v=v===9?"#document":"#fragment",g=(g=g.documentElement)?(g=g.namespaceURI)?jW(g):A5:A5;break;default:if(v=g.tagName,g=g.namespaceURI)g=jW(g),g=tW(g,v);else switch(v){case"svg":g=Ch;break;case"math":g=j6;break;default:g=A5}}v=v.toLowerCase(),v=VP(null,v),v={context:g,ancestorInfo:v},Xr(_5,r),Rr(_5,v,r)}function d(r){Xr(_5,r),Xr(m2,r),Xr(e5,r)}function hr(){return mr(_5.current)}function vr(r){r.memoizedState!==null&&Rr(fo,r,r);var g=mr(_5.current),v=r.type,b=tW(g.context,v);v=VP(g.ancestorInfo,v),b={context:b,ancestorInfo:v},g!==b&&(Rr(m2,r,r),Rr(_5,b,r))}function Gr(r){m2.current===r&&(Xr(_5,r),Xr(m2,r)),fo.current===r&&(Xr(fo,r),Fl._currentValue=Yb)}function i(){}function V(){if(k2===0){K7=console.log,$7=console.info,U7=console.warn,L7=console.error,F7=console.group,B7=console.groupCollapsed,N7=console.groupEnd;var r={configurable:!0,enumerable:!0,value:i,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}k2++}function Ar(){if(k2--,k2===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:tr({},r,{value:K7}),info:tr({},r,{value:$7}),warn:tr({},r,{value:U7}),error:tr({},r,{value:L7}),group:tr({},r,{value:F7}),groupCollapsed:tr({},r,{value:B7}),groupEnd:tr({},r,{value:N7})})}0>k2&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Kr(r){var g=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,r=r.stack,Error.prepareStackTrace=g,r.startsWith(`Error: react-stack-top-frame
`)&&(r=r.slice(29)),g=r.indexOf(`
`),g!==-1&&(r=r.slice(g+1)),g=r.indexOf("react_stack_bottom_frame"),g!==-1&&(g=r.lastIndexOf(`
`,g)),g!==-1)r=r.slice(0,g);else return"";return r}function Yr(r){if(tO===void 0)try{throw Error()}catch(v){var g=v.stack.trim().match(/\n( *(at )?)/);tO=g&&g[1]||"",Z7=-1<v.stack.indexOf(`
    at`)?" (<anonymous>)":-1<v.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tO+r+Z7}function kr(r,g){if(!r||fO)return"";var v=cO.get(r);if(v!==void 0)return v;fO=!0,v=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var b=null;b=k.H,k.H=null,V();try{var l={DetermineComponentFrameRoot:function(){try{if(g){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(lr){var T=lr}Reflect.construct(r,[],U)}else{try{U.call()}catch(lr){T=lr}r.call(U.prototype)}}else{try{throw Error()}catch(lr){T=lr}(U=r())&&typeof U.catch==="function"&&U.catch(function(){})}}catch(lr){if(lr&&T&&typeof lr.stack==="string")return[lr.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var q=l.DetermineComponentFrameRoot(),P=q[0],G=q[1];if(P&&G){var Y=P.split(`
`),N=G.split(`
`);for(q=o=0;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;for(;q<N.length&&!N[q].includes("DetermineComponentFrameRoot");)q++;if(o===Y.length||q===N.length)for(o=Y.length-1,q=N.length-1;1<=o&&0<=q&&Y[o]!==N[q];)q--;for(;1<=o&&0<=q;o--,q--)if(Y[o]!==N[q]){if(o!==1||q!==1)do if(o--,q--,0>q||Y[o]!==N[q]){var Z=`
`+Y[o].replace(" at new "," at ");return r.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",r.displayName)),typeof r==="function"&&cO.set(r,Z),Z}while(1<=o&&0<=q);break}}}finally{fO=!1,k.H=b,Ar(),Error.prepareStackTrace=v}return Y=(Y=r?r.displayName||r.name:"")?Yr(Y):"",typeof r==="function"&&cO.set(r,Y),Y}function or(r,g){switch(r.tag){case 26:case 27:case 5:return Yr(r.type);case 16:return Yr("Lazy");case 13:return r.child!==g&&g!==null?Yr("Suspense Fallback"):Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return kr(r.type,!1);case 11:return kr(r.type.render,!1);case 1:return kr(r.type,!0);case 31:return Yr("Activity");default:return""}}function Dr(r){try{var g="",v=null;do{g+=or(r,v);var b=r._debugInfo;if(b)for(var l=b.length-1;0<=l;l--){var o=b[l];if(typeof o.name==="string"){var q=g;r:{var{name:P,env:G,debugLocation:Y}=o;if(Y!=null){var N=Kr(Y),Z=N.lastIndexOf(`
`),U=Z===-1?N:N.slice(Z+1);if(U.indexOf(P)!==-1){var T=`
`+U;break r}}T=Yr(P+(G?" ["+G+"]":""))}g=q+T}}v=r,r=r.return}while(r);return g}catch(lr){return`
Error generating stack: `+lr.message+`
`+lr.stack}}function pr(r){return(r=r?r.displayName||r.name:"")?Yr(r):""}function Jg(){if(q1===null)return null;var r=q1._debugOwner;return r!=null?t(r):null}function Z0(){if(q1===null)return"";var r=q1;try{var g="";switch(r.tag===6&&(r=r.return),r.tag){case 26:case 27:case 5:g+=Yr(r.type);break;case 13:g+=Yr("Suspense");break;case 19:g+=Yr("SuspenseList");break;case 31:g+=Yr("Activity");break;case 30:case 0:case 15:case 1:r._debugOwner||g!==""||(g+=pr(r.type));break;case 11:r._debugOwner||g!==""||(g+=pr(r.type.render))}for(;r;)if(typeof r.tag==="number"){var v=r;r=v._debugOwner;var b=v._debugStack;if(r&&b){var l=Kr(b);l!==""&&(g+=`
`+l)}}else if(r.debugStack!=null){var o=r.debugStack;(r=r.owner)&&o&&(g+=`
`+Kr(o))}else break;var q=g}catch(P){q=`
Error generating stack: `+P.message+`
`+P.stack}return q}function Hr(r,g,v,b,l,o,q){var P=q1;y0(r);try{return r!==null&&r._debugTask?r._debugTask.run(g.bind(null,v,b,l,o,q)):g(v,b,l,o,q)}finally{y0(P)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function y0(r){k.getCurrentStack=r===null?null:Z0,$v=!1,q1=r}function K0(r){return typeof Symbol==="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object"}function s0(r){try{return tg(r),!1}catch(g){return!0}}function tg(r){return""+r}function ug(r,g){if(s0(r))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",g,K0(r)),tg(r)}function ah(r,g){if(s0(r))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",g,K0(r)),tg(r)}function Vr(r){if(s0(r))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",K0(r)),tg(r)}function xb(r){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var g=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(g.isDisabled)return!0;if(!g.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{vh=g.inject(r),L0=g}catch(v){console.error("React instrumentation encountered an error: %o.",v)}return g.checkDCE?!0:!1}function Qg(r){if(typeof IK==="function"&&xK(r),L0&&typeof L0.setStrictMode==="function")try{L0.setStrictMode(vh,r)}catch(g){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",g))}}function m4(r){return r>>>=0,r===0?32:31-(TK(r)/CK|0)|0}function hv(r){var g=r&42;if(g!==0)return g;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return r&261888;case 262144:case 524288:case 1048576:case 2097152:return r&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),r}}function Nw(r,g,v){var b=r.pendingLanes;if(b===0)return 0;var l=0,o=r.suspendedLanes,q=r.pingedLanes;r=r.warmLanes;var P=b&134217727;return P!==0?(b=P&~o,b!==0?l=hv(b):(q&=P,q!==0?l=hv(q):v||(v=P&~r,v!==0&&(l=hv(v))))):(P=b&~o,P!==0?l=hv(P):q!==0?l=hv(q):v||(v=b&~r,v!==0&&(l=hv(v)))),l===0?0:g!==0&&g!==l&&(g&o)===0&&(o=l&-l,v=g&-g,o>=v||o===32&&(v&4194048)!==0)?g:l}function Zw(r,g){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&g)===0}function C8(r,g){switch(r){case 1:case 2:case 4:case 8:case 64:return g+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return g+5000;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function Tb(){var r=ao;return ao<<=1,(ao&62914560)===0&&(ao=4194304),r}function Cb(r){for(var g=[],v=0;31>v;v++)g.push(r);return g}function L5(r,g){r.pendingLanes|=g,g!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function k4(r,g,v,b,l,o){var q=r.pendingLanes;r.pendingLanes=v,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=v,r.entangledLanes&=v,r.errorRecoveryDisabledLanes&=v,r.shellSuspendCounter=0;var{entanglements:P,expirationTimes:G,hiddenUpdates:Y}=r;for(v=q&~v;0<v;){var N=31-x0(v),Z=1<<N;P[N]=0,G[N]=-1;var U=Y[N];if(U!==null)for(Y[N]=null,N=0;N<U.length;N++){var T=U[N];T!==null&&(T.lane&=-536870913)}v&=~Z}b!==0&&Iw(r,b,0),o!==0&&l===0&&r.tag!==0&&(r.suspendedLanes|=o&~(q&~g))}function Iw(r,g,v){r.pendingLanes|=g,r.suspendedLanes&=~g;var b=31-x0(g);r.entangledLanes|=g,r.entanglements[b]=r.entanglements[b]|1073741824|v&261930}function xw(r,g){var v=r.entangledLanes|=g;for(r=r.entanglements;v;){var b=31-x0(v),l=1<<b;l&g|r[b]&g&&(r[b]|=g),v&=~l}}function Tw(r,g){var v=g&-g;return v=(v&42)!==0?1:Cw(v),(v&(r.suspendedLanes|g))!==0?0:v}function Cw(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function dh(r,g,v){if(Lv)for(r=r.pendingUpdatersLaneMap;0<v;){var b=31-x0(v),l=1<<b;r[b].add(g),v&=~l}}function F5(r,g){if(Lv)for(var{pendingUpdatersLaneMap:v,memoizedUpdaters:b}=r;0<g;){var l=31-x0(g);r=1<<l,l=v[l],0<l.size&&(l.forEach(function(o){var q=o.alternate;q!==null&&b.has(q)||b.add(o)}),l.clear()),g&=~r}}function J(r){return r&=-r,A1!==0&&A1<r?E1!==0&&E1<r?(r&134217727)!==0?Fv:so:E1:A1}function x(){var r=Hg.p;if(r!==0)return r;return r=window.event,r===void 0?Fv:M7(r.type)}function gr(r,g){var v=Hg.p;try{return Hg.p=r,g()}finally{Hg.p=v}}function Or(r){delete r[G0],delete r[T0],delete r[rq],delete r[SK],delete r[mK]}function Jr(r){var g=r[G0];if(g)return g;for(var v=r.parentNode;v;){if(g=v[y5]||v[G0]){if(v=g.alternate,g.child!==null||v!==null&&v.child!==null)for(r=g7(r);r!==null;){if(v=r[G0])return v;r=g7(r)}return g}r=v,v=r.parentNode}return null}function Tr(r){if(r=r[G0]||r[y5]){var g=r.tag;if(g===5||g===6||g===13||g===31||g===26||g===27||g===3)return r}return null}function Cr(r){var g=r.tag;if(g===5||g===26||g===27||g===6)return r.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function wg(r){var g=r[I7];return g||(g=r[I7]={hoistableStyles:new Map,hoistableScripts:new Map}),g}function Ur(r){r[D2]=!0}function $0(r,g){r1(r,g),r1(r+"Capture",g)}function r1(r,g){pw[r]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",r),pw[r]=g;var v=r.toLowerCase();gq[v]=r,r==="onDoubleClick"&&(gq.ondblclick=r);for(r=0;r<g.length;r++)x7.add(g[r])}function B5(r,g){kK[g.type]||g.onChange||g.onInput||g.readOnly||g.disabled||g.value==null||(r==="select"?console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."):console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")),g.onChange||g.readOnly||g.disabled||g.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function sh(r){if(e1.call(C7,r))return!0;if(e1.call(T7,r))return!1;if(DK.test(r))return C7[r]=!0;return T7[r]=!0,console.error("Invalid attribute name: `%s`",r),!1}function UP(r,g,v){if(sh(g)){if(!r.hasAttribute(g)){switch(typeof v){case"symbol":case"object":return v;case"function":return v;case"boolean":if(v===!1)return v}return v===void 0?void 0:null}if(r=r.getAttribute(g),r===""&&v===!0)return!0;return ug(v,g),r===""+v?v:r}}function D4(r,g,v){if(sh(g))if(v===null)r.removeAttribute(g);else{switch(typeof v){case"undefined":case"function":case"symbol":r.removeAttribute(g);return;case"boolean":var b=g.toLowerCase().slice(0,5);if(b!=="data-"&&b!=="aria-"){r.removeAttribute(g);return}}ug(v,g),r.setAttribute(g,""+v)}}function i4(r,g,v){if(v===null)r.removeAttribute(g);else{switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(g);return}ug(v,g),r.setAttribute(g,""+v)}}function ev(r,g,v,b){if(b===null)r.removeAttribute(v);else{switch(typeof b){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(v);return}ug(b,v),r.setAttributeNS(g,v,""+b)}}function R1(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return Vr(r),r;default:return""}}function LP(r){var g=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(g==="checkbox"||g==="radio")}function Cz(r,g,v){var b=Object.getOwnPropertyDescriptor(r.constructor.prototype,g);if(!r.hasOwnProperty(g)&&typeof b<"u"&&typeof b.get==="function"&&typeof b.set==="function"){var{get:l,set:o}=b;return Object.defineProperty(r,g,{configurable:!0,get:function(){return l.call(this)},set:function(q){Vr(q),v=""+q,o.call(this,q)}}),Object.defineProperty(r,g,{enumerable:b.enumerable}),{getValue:function(){return v},setValue:function(q){Vr(q),v=""+q},stopTracking:function(){r._valueTracker=null,delete r[g]}}}}function S8(r){if(!r._valueTracker){var g=LP(r)?"checked":"value";r._valueTracker=Cz(r,g,""+r[g])}}function FP(r){if(!r)return!1;var g=r._valueTracker;if(!g)return!0;var v=g.getValue(),b="";return r&&(b=LP(r)?r.checked?"true":"false":r.value),r=b,r!==v?(g.setValue(r),!0):!1}function V4(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch(g){return r.body}}function K1(r){return r.replace(iK,function(g){return"\\"+g.charCodeAt(0).toString(16)+" "})}function BP(r,g){g.checked===void 0||g.defaultChecked===void 0||m7||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Jg()||"A component",g.type),m7=!0),g.value===void 0||g.defaultValue===void 0||S7||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",Jg()||"A component",g.type),S7=!0)}function m8(r,g,v,b,l,o,q,P){if(r.name="",q!=null&&typeof q!=="function"&&typeof q!=="symbol"&&typeof q!=="boolean"?(ug(q,"type"),r.type=q):r.removeAttribute("type"),g!=null)if(q==="number"){if(g===0&&r.value===""||r.value!=g)r.value=""+R1(g)}else r.value!==""+R1(g)&&(r.value=""+R1(g));else q!=="submit"&&q!=="reset"||r.removeAttribute("value");g!=null?k8(r,q,R1(g)):v!=null?k8(r,q,R1(v)):b!=null&&r.removeAttribute("value"),l==null&&o!=null&&(r.defaultChecked=!!o),l!=null&&(r.checked=l&&typeof l!=="function"&&typeof l!=="symbol"),P!=null&&typeof P!=="function"&&typeof P!=="symbol"&&typeof P!=="boolean"?(ug(P,"name"),r.name=""+R1(P)):r.removeAttribute("name")}function NP(r,g,v,b,l,o,q,P){if(o!=null&&typeof o!=="function"&&typeof o!=="symbol"&&typeof o!=="boolean"&&(ug(o,"type"),r.type=o),g!=null||v!=null){if(!(o!=="submit"&&o!=="reset"||g!==void 0&&g!==null)){S8(r);return}v=v!=null?""+R1(v):"",g=g!=null?""+R1(g):v,P||g===r.value||(r.value=g),r.defaultValue=g}b=b!=null?b:l,b=typeof b!=="function"&&typeof b!=="symbol"&&!!b,r.checked=P?r.checked:!!b,r.defaultChecked=!!b,q!=null&&typeof q!=="function"&&typeof q!=="symbol"&&typeof q!=="boolean"&&(ug(q,"name"),r.name=q),S8(r)}function k8(r,g,v){g==="number"&&V4(r.ownerDocument)===r||r.defaultValue===""+v||(r.defaultValue=""+v)}function ZP(r,g){g.value==null&&(typeof g.children==="object"&&g.children!==null?kh.Children.forEach(g.children,function(v){v==null||typeof v==="string"||typeof v==="number"||typeof v==="bigint"||D7||(D7=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):g.dangerouslySetInnerHTML==null||i7||(i7=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),g.selected==null||k7||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),k7=!0)}function IP(){var r=Jg();return r?`

Check the render method of \``+r+"`.":""}function Sb(r,g,v,b){if(r=r.options,g){g={};for(var l=0;l<v.length;l++)g["$"+v[l]]=!0;for(v=0;v<r.length;v++)l=g.hasOwnProperty("$"+r[v].value),r[v].selected!==l&&(r[v].selected=l),l&&b&&(r[v].defaultSelected=!0)}else{v=""+R1(v),g=null;for(l=0;l<r.length;l++){if(r[l].value===v){r[l].selected=!0,b&&(r[l].defaultSelected=!0);return}g!==null||r[l].disabled||(g=r[l])}g!==null&&(g.selected=!0)}}function xP(r,g){for(r=0;r<_7.length;r++){var v=_7[r];if(g[v]!=null){var b=v0(g[v]);g.multiple&&!b?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",v,IP()):!g.multiple&&b&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",v,IP())}}g.value===void 0||g.defaultValue===void 0||V7||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),V7=!0)}function TP(r,g){g.value===void 0||g.defaultValue===void 0||e7||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",Jg()||"A component"),e7=!0),g.children!=null&&g.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function CP(r,g,v){if(g!=null&&(g=""+R1(g),g!==r.value&&(r.value=g),v==null)){r.defaultValue!==g&&(r.defaultValue=g);return}r.defaultValue=v!=null?""+R1(v):""}function SP(r,g,v,b){if(g==null){if(b!=null){if(v!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(v0(b)){if(1<b.length)throw Error("<textarea> can only have at most one child.");b=b[0]}v=b}v==null&&(v=""),g=v}v=R1(g),r.defaultValue=v,b=r.textContent,b===v&&b!==""&&b!==null&&(r.value=b),S8(r)}function mP(r,g){return r.serverProps===void 0&&r.serverTail.length===0&&r.children.length===1&&3<r.distanceFromLeaf&&r.distanceFromLeaf>15-g?mP(r.children[0],g):r}function g1(r){return"  "+"  ".repeat(r)}function mb(r){return"+ "+"  ".repeat(r)}function Sw(r){return"- "+"  ".repeat(r)}function kP(r){switch(r.tag){case 26:case 27:case 5:return r.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return r=r.type,r.displayName||r.name||null;case 11:return r=r.type.render,r.displayName||r.name||null;case 1:return r=r.type,r.displayName||r.name||null;default:return null}}function r2(r,g){return E7.test(r)?(r=JSON.stringify(r),r.length>g-2?8>g?'{"..."}':"{"+r.slice(0,g-7)+'..."}':"{"+r+"}"):r.length>g?5>g?'{"..."}':r.slice(0,g-3)+"...":r}function _4(r,g,v){var b=120-2*v;if(g===null)return mb(v)+r2(r,b)+`
`;if(typeof g==="string"){for(var l=0;l<g.length&&l<r.length&&g.charCodeAt(l)===r.charCodeAt(l);l++);return l>b-8&&10<l&&(r="..."+r.slice(l-8),g="..."+g.slice(l-8)),mb(v)+r2(r,b)+`
`+Sw(v)+r2(g,b)+`
`}return g1(v)+r2(r,b)+`
`}function D8(r){return Object.prototype.toString.call(r).replace(/^\[object (.*)\]$/,function(g,v){return v})}function g2(r,g){switch(typeof r){case"string":return r=JSON.stringify(r),r.length>g?5>g?'"..."':r.slice(0,g-4)+'..."':r;case"object":if(r===null)return"null";if(v0(r))return"[...]";if(r.$$typeof===Rv)return(g=E(r.type))?"<"+g+">":"<...>";var v=D8(r);if(v==="Object"){v="",g-=2;for(var b in r)if(r.hasOwnProperty(b)){var l=JSON.stringify(b);if(l!=='"'+b+'"'&&(b=l),g-=b.length-2,l=g2(r[b],15>g?g:15),g-=l.length,0>g){v+=v===""?"...":", ...";break}v+=(v===""?"":",")+b+":"+l}return"{"+v+"}"}return v;case"function":return(g=r.displayName||r.name)?"function "+g:"function";default:return String(r)}}function kb(r,g){return typeof r!=="string"||E7.test(r)?"{"+g2(r,g-2)+"}":r.length>g-2?5>g?'"..."':'"'+r.slice(0,g-5)+'..."':'"'+r+'"'}function i8(r,g,v){var b=120-v.length-r.length,l=[],o;for(o in g)if(g.hasOwnProperty(o)&&o!=="children"){var q=kb(g[o],120-v.length-o.length-1);b-=o.length+q.length+2,l.push(o+"="+q)}return l.length===0?v+"<"+r+`>
`:0<b?v+"<"+r+" "+l.join(" ")+`>
`:v+"<"+r+`
`+v+"  "+l.join(`
`+v+"  ")+`
`+v+`>
`}function Sz(r,g,v){var b="",l=tr({},g),o;for(o in r)if(r.hasOwnProperty(o)){delete l[o];var q=120-2*v-o.length-2,P=g2(r[o],q);g.hasOwnProperty(o)?(q=g2(g[o],q),b+=mb(v)+o+": "+P+`
`,b+=Sw(v)+o+": "+q+`
`):b+=mb(v)+o+": "+P+`
`}for(var G in l)l.hasOwnProperty(G)&&(r=g2(l[G],120-2*v-G.length-2),b+=Sw(v)+G+": "+r+`
`);return b}function mz(r,g,v,b){var l="",o=new Map;for(Y in v)v.hasOwnProperty(Y)&&o.set(Y.toLowerCase(),Y);if(o.size===1&&o.has("children"))l+=i8(r,g,g1(b));else{for(var q in g)if(g.hasOwnProperty(q)&&q!=="children"){var P=120-2*(b+1)-q.length-1,G=o.get(q.toLowerCase());if(G!==void 0){o.delete(q.toLowerCase());var Y=g[q];G=v[G];var N=kb(Y,P);P=kb(G,P),typeof Y==="object"&&Y!==null&&typeof G==="object"&&G!==null&&D8(Y)==="Object"&&D8(G)==="Object"&&(2<Object.keys(Y).length||2<Object.keys(G).length||-1<N.indexOf("...")||-1<P.indexOf("..."))?l+=g1(b+1)+q+`={{
`+Sz(Y,G,b+2)+g1(b+1)+`}}
`:(l+=mb(b+1)+q+"="+N+`
`,l+=Sw(b+1)+q+"="+P+`
`)}else l+=g1(b+1)+q+"="+kb(g[q],P)+`
`}o.forEach(function(Z){if(Z!=="children"){var U=120-2*(b+1)-Z.length-1;l+=Sw(b+1)+Z+"="+kb(v[Z],U)+`
`}}),l=l===""?g1(b)+"<"+r+`>
`:g1(b)+"<"+r+`
`+l+g1(b)+`>
`}if(r=v.children,g=g.children,typeof r==="string"||typeof r==="number"||typeof r==="bigint"){if(o="",typeof g==="string"||typeof g==="number"||typeof g==="bigint")o=""+g;l+=_4(o,""+r,b+1)}else if(typeof g==="string"||typeof g==="number"||typeof g==="bigint")l=r==null?l+_4(""+g,null,b+1):l+_4(""+g,void 0,b+1);return l}function DP(r,g){var v=kP(r);if(v===null){v="";for(r=r.child;r;)v+=DP(r,g),r=r.sibling;return v}return g1(g)+"<"+v+`>
`}function V8(r,g){var v=mP(r,g);if(v!==r&&(r.children.length!==1||r.children[0]!==v))return g1(g)+`...
`+V8(v,g+1);v="";var b=r.fiber._debugInfo;if(b)for(var l=0;l<b.length;l++){var o=b[l].name;typeof o==="string"&&(v+=g1(g)+"<"+o+`>
`,g++)}if(b="",l=r.fiber.pendingProps,r.fiber.tag===6)b=_4(l,r.serverProps,g),g++;else if(o=kP(r.fiber),o!==null)if(r.serverProps===void 0){b=g;var q=120-2*b-o.length-2,P="";for(Y in l)if(l.hasOwnProperty(Y)&&Y!=="children"){var G=kb(l[Y],15);if(q-=Y.length+G.length+2,0>q){P+=" ...";break}P+=" "+Y+"="+G}b=g1(b)+"<"+o+P+`>
`,g++}else r.serverProps===null?(b=i8(o,l,mb(g)),g++):typeof r.serverProps==="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(b=mz(o,l,r.serverProps,g),g++);var Y="";l=r.fiber.child;for(o=0;l&&o<r.children.length;)q=r.children[o],q.fiber===l?(Y+=V8(q,g),o++):Y+=DP(l,g),l=l.sibling;l&&0<r.children.length&&(Y+=g1(g)+`...
`),l=r.serverTail,r.serverProps===null&&g--;for(r=0;r<l.length;r++)o=l[r],Y=typeof o==="string"?Y+(Sw(g)+r2(o,120-2*g)+`
`):Y+i8(o.type,o.props,Sw(g));return v+b+Y}function _8(r){try{return`

`+V8(r,0)}catch(g){return""}}function iP(r,g,v){for(var b=g,l=null,o=0;b;)b===r&&(o=0),l={fiber:b,children:l!==null?[l]:[],serverProps:b===g?v:b===r?null:void 0,serverTail:[],distanceFromLeaf:o},o++,b=b.return;return l!==null?_8(l).replaceAll(/^[+-]/gm,">"):""}function VP(r,g){var v=tr({},r||n7),b={tag:g};if(y7.indexOf(g)!==-1&&(v.aTagInScope=null,v.buttonTagInScope=null,v.nobrTagInScope=null),_K.indexOf(g)!==-1&&(v.pTagInButtonScope=null),VK.indexOf(g)!==-1&&g!=="address"&&g!=="div"&&g!=="p"&&(v.listItemTagAutoclosing=null,v.dlItemTagAutoclosing=null),v.current=b,g==="form"&&(v.formTag=b),g==="a"&&(v.aTagInScope=b),g==="button"&&(v.buttonTagInScope=b),g==="nobr"&&(v.nobrTagInScope=b),g==="p"&&(v.pTagInButtonScope=b),g==="li"&&(v.listItemTagAutoclosing=b),g==="dd"||g==="dt")v.dlItemTagAutoclosing=b;return g==="#document"||g==="html"?v.containerTagInScope=null:v.containerTagInScope||(v.containerTagInScope=b),r!==null||g!=="#document"&&g!=="html"&&g!=="body"?v.implicitRootScope===!0&&(v.implicitRootScope=!1):v.implicitRootScope=!0,v}function _P(r,g,v){switch(g){case"select":return r==="hr"||r==="option"||r==="optgroup"||r==="script"||r==="template"||r==="#text";case"optgroup":return r==="option"||r==="#text";case"option":return r==="#text";case"tr":return r==="th"||r==="td"||r==="style"||r==="script"||r==="template";case"tbody":case"thead":case"tfoot":return r==="tr"||r==="style"||r==="script"||r==="template";case"colgroup":return r==="col"||r==="template";case"table":return r==="caption"||r==="colgroup"||r==="tbody"||r==="tfoot"||r==="thead"||r==="style"||r==="script"||r==="template";case"head":return r==="base"||r==="basefont"||r==="bgsound"||r==="link"||r==="meta"||r==="title"||r==="noscript"||r==="noframes"||r==="style"||r==="script"||r==="template";case"html":if(v)break;return r==="head"||r==="body"||r==="frameset";case"frameset":return r==="frame";case"#document":if(!v)return r==="html"}switch(r){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g!=="h1"&&g!=="h2"&&g!=="h3"&&g!=="h4"&&g!=="h5"&&g!=="h6";case"rp":case"rt":return eK.indexOf(g)===-1;case"caption":case"col":case"colgroup":case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return g==null;case"head":return v||g===null;case"html":return v&&g==="#document"||g===null;case"body":return v&&(g==="#document"||g==="html")||g===null}return!0}function kz(r,g){switch(r){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return g.pTagInButtonScope;case"form":return g.formTag||g.pTagInButtonScope;case"li":return g.listItemTagAutoclosing;case"dd":case"dt":return g.dlItemTagAutoclosing;case"button":return g.buttonTagInScope;case"a":return g.aTagInScope;case"nobr":return g.nobrTagInScope}return null}function eP(r,g){for(;r;){switch(r.tag){case 5:case 26:case 27:if(r.type===g)return r}r=r.return}return null}function e8(r,g){g=g||n7;var v=g.current;if(g=(v=_P(r,v&&v.tag,g.implicitRootScope)?null:v)?null:kz(r,g),g=v||g,!g)return!0;var b=g.tag;if(g=String(!!v)+"|"+r+"|"+b,r6[g])return!1;r6[g]=!0;var l=(g=q1)?eP(g.return,b):null,o=g!==null&&l!==null?iP(l,g,null):"",q="<"+r+">";return v?(v="",b==="table"&&r==="tr"&&(v+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,q,b,v,o)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,q,b,o),g&&(r=g.return,l===null||r===null||l===r&&r._debugOwner===g._debugOwner||Hr(l,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,b,q)})),!1}function e4(r,g,v){if(v||_P("#text",g,!1))return!0;if(v="#text|"+g,r6[v])return!1;r6[v]=!0;var b=(v=q1)?eP(v,g):null;return v=v!==null&&b!==null?iP(b,v,v.tag!==6?{children:null}:null):"",/\S/.test(r)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,g,v):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,g,v),!1}function v2(r,g){if(g){var v=r.firstChild;if(v&&v===r.lastChild&&v.nodeType===3){v.nodeValue=g;return}}r.textContent=g}function Dz(r){return r.replace(nK,function(g,v){return v.toUpperCase()})}function EP(r,g,v){var b=g.indexOf("--")===0;b||(-1<g.indexOf("-")?wh.hasOwnProperty(g)&&wh[g]||(wh[g]=!0,console.error("Unsupported style property %s. Did you mean %s?",g,Dz(g.replace(yK,"ms-")))):EK.test(g)?wh.hasOwnProperty(g)&&wh[g]||(wh[g]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",g,g.charAt(0).toUpperCase()+g.slice(1))):!f7.test(v)||wq.hasOwnProperty(v)&&wq[v]||(wq[v]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,g,v.replace(f7,""))),typeof v==="number"&&(isNaN(v)?c7||(c7=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",g)):isFinite(v)||p7||(p7=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",g)))),v==null||typeof v==="boolean"||v===""?b?r.setProperty(g,""):g==="float"?r.cssFloat="":r[g]="":b?r.setProperty(g,v):typeof v!=="number"||v===0||a7.has(g)?g==="float"?r.cssFloat=v:(ah(v,g),r[g]=(""+v).trim()):r[g]=v+"px"}function yP(r,g,v){if(g!=null&&typeof g!=="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(g&&Object.freeze(g),r=r.style,v!=null){if(g){var b={};if(v){for(var l in v)if(v.hasOwnProperty(l)&&!g.hasOwnProperty(l))for(var o=vq[l]||[l],q=0;q<o.length;q++)b[o[q]]=l}for(var P in g)if(g.hasOwnProperty(P)&&(!v||v[P]!==g[P]))for(l=vq[P]||[P],o=0;o<l.length;o++)b[l[o]]=P;P={};for(var G in g)for(l=vq[G]||[G],o=0;o<l.length;o++)P[l[o]]=G;G={};for(var Y in b)if(l=b[Y],(o=P[Y])&&l!==o&&(q=l+","+o,!G[q])){G[q]=!0,q=console;var N=g[l];q.error.call(q,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",N==null||typeof N==="boolean"||N===""?"Removing":"Updating",l,o)}}for(var Z in v)!v.hasOwnProperty(Z)||g!=null&&g.hasOwnProperty(Z)||(Z.indexOf("--")===0?r.setProperty(Z,""):Z==="float"?r.cssFloat="":r[Z]="");for(var U in g)Y=g[U],g.hasOwnProperty(U)&&v[U]!==Y&&EP(r,U,Y)}else for(b in g)g.hasOwnProperty(b)&&EP(r,b,g[b])}function w2(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function nP(r){return jK.get(r)||r}function iz(r,g){if(e1.call(hh,g)&&hh[g])return!0;if(fK.test(g)){if(r="aria-"+g.slice(4).toLowerCase(),r=d7.hasOwnProperty(r)?r:null,r==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",g),hh[g]=!0;if(g!==r)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",g,r),hh[g]=!0}if(tK.test(g)){if(r=g.toLowerCase(),r=d7.hasOwnProperty(r)?r:null,r==null)return hh[g]=!0,!1;g!==r&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",g,r),hh[g]=!0)}return!0}function Vz(r,g){var v=[],b;for(b in g)iz(r,b)||v.push(b);g=v.map(function(l){return"`"+l+"`"}).join(", "),v.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r):1<v.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",g,r)}function _z(r,g,v,b){if(e1.call(C0,g)&&C0[g])return!0;var l=g.toLowerCase();if(l==="onfocusin"||l==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),C0[g]=!0;if(typeof v==="function"&&(r==="form"&&g==="action"||r==="input"&&g==="formAction"||r==="button"&&g==="formAction"))return!0;if(b!=null){if(r=b.possibleRegistrationNames,b.registrationNameDependencies.hasOwnProperty(g))return!0;if(b=r.hasOwnProperty(l)?r[l]:null,b!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",g,b),C0[g]=!0;if(r3.test(g))return console.error("Unknown event handler property `%s`. It will be ignored.",g),C0[g]=!0}else if(r3.test(g))return cK.test(g)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",g),C0[g]=!0;if(pK.test(g)||aK.test(g))return!0;if(l==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),C0[g]=!0;if(l==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),C0[g]=!0;if(l==="is"&&v!==null&&v!==void 0&&typeof v!=="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof v),C0[g]=!0;if(typeof v==="number"&&isNaN(v))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",g),C0[g]=!0;if(v6.hasOwnProperty(l)){if(l=v6[l],l!==g)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",g,l),C0[g]=!0}else if(g!==l)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",g,l),C0[g]=!0;switch(g){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof v){case"boolean":switch(g){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:if(l=g.toLowerCase().slice(0,5),l==="data-"||l==="aria-")return!0;return v?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',v,g,g,v,g):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',v,g,g,v,g,g,g),C0[g]=!0}case"function":case"symbol":return C0[g]=!0,!1;case"string":if(v==="false"||v==="true"){switch(g){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",v,g,v==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',g,v),C0[g]=!0}}return!0}function ez(r,g,v){var b=[],l;for(l in g)_z(r,l,g[l],v)||b.push(l);g=b.map(function(o){return"`"+o+"`"}).join(", "),b.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r):1<b.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",g,r)}function b2(r){return dK.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}function Ev(){}function E8(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}function jP(r){var g=Tr(r);if(g&&(r=g.stateNode)){var v=r[T0]||null;r:switch(r=g.stateNode,g.type){case"input":if(m8(r,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name),g=v.name,v.type==="radio"&&g!=null){for(v=r;v.parentNode;)v=v.parentNode;ug(g,"name"),v=v.querySelectorAll('input[name="'+K1(""+g)+'"][type="radio"]');for(g=0;g<v.length;g++){var b=v[g];if(b!==r&&b.form===r.form){var l=b[T0]||null;if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");m8(b,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(g=0;g<v.length;g++)b=v[g],b.form===r.form&&FP(b)}break r;case"textarea":CP(r,v.value,v.defaultValue);break r;case"select":g=v.value,g!=null&&Sb(r,!!v.multiple,g,!1)}}}function tP(r,g,v){if(bq)return r(g,v);bq=!0;try{var b=r(g);return b}finally{if(bq=!1,lh!==null||oh!==null){if(tb(),lh&&(g=lh,r=oh,oh=lh=null,jP(g),r))for(g=0;g<r.length;g++)jP(r[g])}}}function h2(r,g){var v=r.stateNode;if(v===null)return null;var b=v[T0]||null;if(b===null)return null;v=b[g];r:switch(g){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(b=!b.disabled)||(r=r.type,b=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!b;break r;default:r=!1}if(r)return null;if(v&&typeof v!=="function")throw Error("Expected `"+g+"` listener to be a function, instead got a value of `"+typeof v+"` type.");return v}function fP(){if(w6)return w6;var r,g=lq,v=g.length,b,l="value"in n5?n5.value:n5.textContent,o=l.length;for(r=0;r<v&&g[r]===l[r];r++);var q=v-r;for(b=1;b<=q&&g[v-b]===l[o-b];b++);return w6=l.slice(r,1<b?1-b:void 0)}function E4(r){var g=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&g===13&&(r=13)):r=g,r===10&&(r=13),32<=r||r===13?r:0}function y4(){return!0}function cP(){return!1}function n0(r){function g(v,b,l,o,q){this._reactName=v,this._targetInst=l,this.type=b,this.nativeEvent=o,this.target=q,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(v=r[P],this[P]=v?v(o):o[P]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?y4:cP,this.isPropagationStopped=cP,this}return tr(g.prototype,{preventDefault:function(){this.defaultPrevented=!0;var v=this.nativeEvent;v&&(v.preventDefault?v.preventDefault():typeof v.returnValue!=="unknown"&&(v.returnValue=!1),this.isDefaultPrevented=y4)},stopPropagation:function(){var v=this.nativeEvent;v&&(v.stopPropagation?v.stopPropagation():typeof v.cancelBubble!=="unknown"&&(v.cancelBubble=!0),this.isPropagationStopped=y4)},persist:function(){},isPersistent:y4}),g}function Ez(r){var g=this.nativeEvent;return g.getModifierState?g.getModifierState(r):(r=A$[r])?!!g[r]:!1}function y8(){return Ez}function pP(r,g){switch(r){case"keyup":return K$.indexOf(g.keyCode)!==-1;case"keydown":return g.keyCode!==b3;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aP(r){return r=r.detail,typeof r==="object"&&"data"in r?r.data:null}function yz(r,g){switch(r){case"compositionend":return aP(g);case"keypress":if(g.which!==l3)return null;return H3=!0,o3;case"textInput":return r=g.data,r===o3&&H3?null:r;default:return null}}function nz(r,g){if(Hh)return r==="compositionend"||!qq&&pP(r,g)?(r=fP(),w6=lq=n5=null,Hh=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(g.ctrlKey||g.altKey||g.metaKey)||g.ctrlKey&&g.altKey){if(g.char&&1<g.char.length)return g.char;if(g.which)return String.fromCharCode(g.which)}return null;case"compositionend":return h3&&g.locale!=="ko"?null:g.data;default:return null}}function dP(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g==="input"?!!U$[r.type]:g==="textarea"?!0:!1}function jz(r){if(!Bv)return!1;r="on"+r;var g=r in document;return g||(g=document.createElement("div"),g.setAttribute(r,"return;"),g=typeof g[r]==="function"),g}function sP(r,g,v,b){lh?oh?oh.push(b):oh=[b]:lh=b,g=mo(g,"onChange"),0<g.length&&(v=new b6("onChange","change",null,v,b),r.push({event:v,listeners:g}))}function tz(r){SW(r,0)}function n4(r){var g=Cr(r);if(FP(g))return r}function r9(r,g){if(r==="change")return g}function g9(){y2&&(y2.detachEvent("onpropertychange",v9),n2=y2=null)}function v9(r){if(r.propertyName==="value"&&n4(n2)){var g=[];sP(g,n2,r,E8(r)),tP(tz,g)}}function fz(r,g,v){r==="focusin"?(g9(),y2=g,n2=v,y2.attachEvent("onpropertychange",v9)):r==="focusout"&&g9()}function cz(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return n4(n2)}function pz(r,g){if(r==="click")return n4(g)}function az(r,g){if(r==="input"||r==="change")return n4(g)}function dz(r,g){return r===g&&(r!==0||1/r===1/g)||r!==r&&g!==g}function l2(r,g){if(S0(r,g))return!0;if(typeof r!=="object"||r===null||typeof g!=="object"||g===null)return!1;var v=Object.keys(r),b=Object.keys(g);if(v.length!==b.length)return!1;for(b=0;b<v.length;b++){var l=v[b];if(!e1.call(g,l)||!S0(r[l],g[l]))return!1}return!0}function w9(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function b9(r,g){var v=w9(r);r=0;for(var b;v;){if(v.nodeType===3){if(b=r+v.textContent.length,r<=g&&b>=g)return{node:v,offset:g-r};r=b}r:{for(;v;){if(v.nextSibling){v=v.nextSibling;break r}v=v.parentNode}v=void 0}v=w9(v)}}function h9(r,g){return r&&g?r===g?!0:r&&r.nodeType===3?!1:g&&g.nodeType===3?h9(r,g.parentNode):("contains"in r)?r.contains(g):r.compareDocumentPosition?!!(r.compareDocumentPosition(g)&16):!1:!1}function l9(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var g=V4(r.document);g instanceof r.HTMLIFrameElement;){try{var v=typeof g.contentWindow.location.href==="string"}catch(b){v=!1}if(v)r=g.contentWindow;else break;g=V4(r.document)}return g}function n8(r){var g=r&&r.nodeName&&r.nodeName.toLowerCase();return g&&(g==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||g==="textarea"||r.contentEditable==="true")}function o9(r,g,v){var b=v.window===v?v.document:v.nodeType===9?v:v.ownerDocument;Pq||Oh==null||Oh!==V4(b)||(b=Oh,("selectionStart"in b)&&n8(b)?b={start:b.selectionStart,end:b.selectionEnd}:(b=(b.ownerDocument&&b.ownerDocument.defaultView||window).getSelection(),b={anchorNode:b.anchorNode,anchorOffset:b.anchorOffset,focusNode:b.focusNode,focusOffset:b.focusOffset}),j2&&l2(j2,b)||(j2=b,b=mo(Aq,"onSelect"),0<b.length&&(g=new b6("onSelect","select",null,g,v),r.push({event:g,listeners:b}),g.target=Oh)))}function mw(r,g){var v={};return v[r.toLowerCase()]=g.toLowerCase(),v["Webkit"+r]="webkit"+g,v["Moz"+r]="moz"+g,v}function kw(r){if(uq[r])return uq[r];if(!qh[r])return r;var g=qh[r],v;for(v in g)if(g.hasOwnProperty(v)&&v in q3)return uq[r]=g[v];return r}function i1(r,g){M3.set(r,g),$0(g,[r])}function sz(r){for(var g=l6,v=0;v<r.length;v++){var b=r[v];if(typeof b==="object"&&b!==null)if(v0(b)&&b.length===2&&typeof b[0]==="string"){if(g!==l6&&g!==Yq)return Gq;g=Yq}else return Gq;else{if(typeof b==="function"||typeof b==="string"&&50<b.length||g!==l6&&g!==Xq)return Gq;g=Xq}}return g}function j8(r,g,v,b){for(var l in r)e1.call(r,l)&&l[0]!=="_"&&lv(l,r[l],g,v,b)}function lv(r,g,v,b,l){switch(typeof g){case"object":if(g===null){g="null";break}else{if(g.$$typeof===Rv){var o=E(g.type)||"…",q=g.key;g=g.props;var P=Object.keys(g),G=P.length;if(q==null&&G===0){g="<"+o+" />";break}if(3>b||G===1&&P[0]==="children"&&q==null){g="<"+o+" … />";break}v.push([l+"  ".repeat(b)+r,"<"+o]),q!==null&&lv("key",q,v,b+1,l),r=!1;for(var Y in g)Y==="children"?g.children!=null&&(!v0(g.children)||0<g.children.length)&&(r=!0):e1.call(g,Y)&&Y[0]!=="_"&&lv(Y,g[Y],v,b+1,l);v.push(["",r?">…</"+o+">":"/>"]);return}if(o=Object.prototype.toString.call(g),o=o.slice(8,o.length-1),o==="Array"){if(Y=sz(g),Y===Xq||Y===l6){g=JSON.stringify(g);break}else if(Y===Yq){v.push([l+"  ".repeat(b)+r,""]);for(r=0;r<g.length;r++)o=g[r],lv(o[0],o[1],v,b+1,l);return}}if(o==="Promise"){if(g.status==="fulfilled"){if(o=v.length,lv(r,g.value,v,b,l),v.length>o){v=v[o],v[1]="Promise<"+(v[1]||"Object")+">";return}}else if(g.status==="rejected"&&(o=v.length,lv(r,g.reason,v,b,l),v.length>o)){v=v[o],v[1]="Rejected Promise<"+v[1]+">";return}v.push(["  ".repeat(b)+r,"Promise"]);return}o==="Object"&&(Y=Object.getPrototypeOf(g))&&typeof Y.constructor==="function"&&(o=Y.constructor.name),v.push([l+"  ".repeat(b)+r,o==="Object"?3>b?"":"…":o]),3>b&&j8(g,v,b+1,l);return}case"function":g=g.name===""?"() => {}":g.name+"() {}";break;case"string":g=g===x$?"…":JSON.stringify(g);break;case"undefined":g="undefined";break;case"boolean":g=g?"true":"false";break;default:g=String(g)}v.push([l+"  ".repeat(b)+r,g])}function H9(r,g,v,b){var l=!0;for(q in r)q in g||(v.push([o6+"  ".repeat(b)+q,"…"]),l=!1);for(var o in g)if(o in r){var q=r[o],P=g[o];if(q!==P){if(b===0&&o==="children")l="  ".repeat(b)+o,v.push([o6+l,"…"],[H6+l,"…"]);else{if(!(3<=b)){if(typeof q==="object"&&typeof P==="object"&&q!==null&&P!==null&&q.$$typeof===P.$$typeof)if(P.$$typeof===Rv){if(q.type===P.type&&q.key===P.key){q=E(P.type)||"…",l="  ".repeat(b)+o,q="<"+q+" … />",v.push([o6+l,q],[H6+l,q]),l=!1;continue}}else{var G=Object.prototype.toString.call(q),Y=Object.prototype.toString.call(P);if(G===Y&&(Y==="[object Object]"||Y==="[object Array]")){G=[Y3+"  ".repeat(b)+o,Y==="[object Array]"?"Array":""],v.push(G),Y=v.length,H9(q,P,v,b+1)?Y===v.length&&(G[1]="Referentially unequal but deeply equal objects. Consider memoization."):l=!1;continue}}else if(typeof q==="function"&&typeof P==="function"&&q.name===P.name&&q.length===P.length&&(G=Function.prototype.toString.call(q),Y=Function.prototype.toString.call(P),G===Y)){q=P.name===""?"() => {}":P.name+"() {}",v.push([Y3+"  ".repeat(b)+o,q+" Referentially unequal function closure. Consider memoization."]);continue}}lv(o,q,v,b,o6),lv(o,P,v,b,H6)}l=!1}}else v.push([H6+"  ".repeat(b)+o,"…"]),l=!1;return l}function v1(r){cr=r&63?"Blocking":r&64?"Gesture":r&4194176?"Transition":r&62914560?"Suspense":r&2080374784?"Idle":"Other"}function ov(r,g,v,b){Ug&&(t5.start=g,t5.end=v,dv.color="warning",dv.tooltipText=b,dv.properties=null,(r=r._debugTask)?r.run(performance.measure.bind(performance,b,t5)):performance.measure(b,t5))}function j4(r,g,v){ov(r,g,v,"Reconnect")}function t4(r,g,v,b,l){var o=D(r);if(o!==null&&Ug){var{alternate:q,actualDuration:P}=r;if(q===null||q.child!==r.child)for(var G=r.child;G!==null;G=G.sibling)P-=G.actualDuration;b=0.5>P?b?"tertiary-light":"primary-light":10>P?b?"tertiary":"primary":100>P?b?"tertiary-dark":"primary-dark":"error";var Y=r.memoizedProps;P=r._debugTask,Y!==null&&q!==null&&q.memoizedProps!==Y?(G=[T$],Y=H9(q.memoizedProps,Y,G,0),1<G.length&&(Y&&!j5&&(q.lanes&l)===0&&100<r.actualDuration?(j5=!0,G[0]=C$,dv.color="warning",dv.tooltipText=J3):(dv.color=b,dv.tooltipText=o),dv.properties=G,t5.start=g,t5.end=v,P!=null?P.run(performance.measure.bind(performance,"​"+o,t5)):performance.measure("​"+o,t5))):P!=null?P.run(console.timeStamp.bind(console,o,g,v,U1,void 0,b)):console.timeStamp(o,g,v,U1,void 0,b)}}function t8(r,g,v,b){if(Ug){var l=D(r);if(l!==null){for(var o=null,q=[],P=0;P<b.length;P++){var G=b[P];o==null&&G.source!==null&&(o=G.source._debugTask),G=G.value,q.push(["Error",typeof G==="object"&&G!==null&&typeof G.message==="string"?String(G.message):String(G)])}r.key!==null&&lv("key",r.key,q,0,""),r.memoizedProps!==null&&j8(r.memoizedProps,q,0,""),o==null&&(o=r._debugTask),r={start:g,end:v,detail:{devtools:{color:"error",track:U1,tooltipText:r.tag===13?"Hydration failed":"Error boundary caught an error",properties:q}}},o?o.run(performance.measure.bind(performance,"​"+l,r)):performance.measure("​"+l,r)}}}function Hv(r,g,v,b,l){if(l!==null){if(Ug){var o=D(r);if(o!==null){b=[];for(var q=0;q<l.length;q++){var P=l[q].value;b.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r.key!==null&&lv("key",r.key,b,0,""),r.memoizedProps!==null&&j8(r.memoizedProps,b,0,""),g={start:g,end:v,detail:{devtools:{color:"error",track:U1,tooltipText:"A lifecycle or effect errored",properties:b}}},(r=r._debugTask)?r.run(performance.measure.bind(performance,"​"+o,g)):performance.measure("​"+o,g)}}}else o=D(r),o!==null&&Ug&&(l=1>b?"secondary-light":100>b?"secondary":500>b?"secondary-dark":"error",(r=r._debugTask)?r.run(console.timeStamp.bind(console,o,g,v,U1,void 0,l)):console.timeStamp(o,g,v,U1,void 0,l))}function rR(r,g,v,b){if(Ug&&!(g<=r)){var l=(v&738197653)===v?"tertiary-dark":"primary-dark";v=(v&536870912)===v?"Prepared":(v&201326741)===v?"Hydrated":"Render",b?b.run(console.timeStamp.bind(console,v,r,g,cr,fr,l)):console.timeStamp(v,r,g,cr,fr,l)}}function O9(r,g,v,b){!Ug||g<=r||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",b?b.run(console.timeStamp.bind(console,"Prewarm",r,g,cr,fr,v)):console.timeStamp("Prewarm",r,g,cr,fr,v))}function q9(r,g,v,b){!Ug||g<=r||(v=(v&738197653)===v?"tertiary-dark":"primary-dark",b?b.run(console.timeStamp.bind(console,"Suspended",r,g,cr,fr,v)):console.timeStamp("Suspended",r,g,cr,fr,v))}function gR(r,g,v,b,l,o){if(Ug&&!(g<=r)){v=[];for(var q=0;q<b.length;q++){var P=b[q].value;v.push(["Recoverable Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"primary-dark",track:cr,trackGroup:fr,tooltipText:l?"Hydration Failed":"Recovered after Error",properties:v}}},o?o.run(performance.measure.bind(performance,"Recovered",r)):performance.measure("Recovered",r)}}function f8(r,g,v,b){!Ug||g<=r||(b?b.run(console.timeStamp.bind(console,"Errored",r,g,cr,fr,"error")):console.timeStamp("Errored",r,g,cr,fr,"error"))}function vR(r,g,v,b){!Ug||g<=r||(b?b.run(console.timeStamp.bind(console,v,r,g,cr,fr,"secondary-light")):console.timeStamp(v,r,g,cr,fr,"secondary-light"))}function A9(r,g,v,b,l){if(Ug&&!(g<=r)){for(var o=[],q=0;q<v.length;q++){var P=v[q].value;o.push(["Error",typeof P==="object"&&P!==null&&typeof P.message==="string"?String(P.message):String(P)])}r={start:r,end:g,detail:{devtools:{color:"error",track:cr,trackGroup:fr,tooltipText:b?"Remaining Effects Errored":"Commit Errored",properties:o}}},l?l.run(performance.measure.bind(performance,"Errored",r)):performance.measure("Errored",r)}}function o2(r,g,v){!Ug||g<=r||(v?v.run(console.timeStamp.bind(console,"Animating",r,g,cr,fr,"secondary-dark")):console.timeStamp("Animating",r,g,cr,fr,"secondary-dark"))}function f4(){for(var r=Ah,g=Jq=Ah=0;g<r;){var v=L1[g];L1[g++]=null;var b=L1[g];L1[g++]=null;var l=L1[g];L1[g++]=null;var o=L1[g];if(L1[g++]=null,b!==null&&l!==null){var q=b.pending;q===null?l.next=l:(l.next=q.next,q.next=l),b.pending=l}o!==0&&P9(v,l,o)}}function c4(r,g,v,b){L1[Ah++]=r,L1[Ah++]=g,L1[Ah++]=v,L1[Ah++]=b,Jq|=b,r.lanes|=b,r=r.alternate,r!==null&&(r.lanes|=b)}function c8(r,g,v,b){return c4(r,g,v,b),p4(r)}function U0(r,g){return c4(r,null,null,g),p4(r)}function P9(r,g,v){r.lanes|=v;var b=r.alternate;b!==null&&(b.lanes|=v);for(var l=!1,o=r.return;o!==null;)o.childLanes|=v,b=o.alternate,b!==null&&(b.childLanes|=v),o.tag===22&&(r=o.stateNode,r===null||r._visibility&t2||(l=!0)),r=o,o=o.return;return r.tag===3?(o=r.stateNode,l&&g!==null&&(l=31-x0(v),r=o.hiddenUpdates,b=r[l],b===null?r[l]=[g]:b.push(g),g.lane=v|536870912),o):null}function p4(r){if(Ql>c$)throw Pb=Ql=0,zl=dq=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Pb>p$&&(Pb=0,zl=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),r.alternate===null&&(r.flags&4098)!==0&&BW(r);for(var g=r,v=g.return;v!==null;)g.alternate===null&&(g.flags&4098)!==0&&BW(r),g=v,v=g.return;return g.tag===3?g.stateNode:null}function Dw(r){if(F1===null)return r;var g=F1(r);return g===void 0?r:g.current}function p8(r){if(F1===null)return r;var g=F1(r);return g===void 0?r!==null&&r!==void 0&&typeof r.render==="function"&&(g=Dw(r.render),r.render!==g)?(g={$$typeof:S2,render:g},r.displayName!==void 0&&(g.displayName=r.displayName),g):r:g.current}function u9(r,g){if(F1===null)return!1;var v=r.elementType;g=g.type;var b=!1,l=typeof g==="object"&&g!==null?g.$$typeof:null;switch(r.tag){case 1:typeof g==="function"&&(b=!0);break;case 0:typeof g==="function"?b=!0:l===O1&&(b=!0);break;case 11:l===S2?b=!0:l===O1&&(b=!0);break;case 14:case 15:l===to?b=!0:l===O1&&(b=!0);break;default:return!1}return b&&(r=F1(v),r!==void 0&&r===F1(g))?!0:!1}function W9(r){F1!==null&&typeof WeakSet==="function"&&(Ph===null&&(Ph=new WeakSet),Ph.add(r))}function M9(r,g,v){do{var b=r,l=b.alternate,o=b.child,q=b.sibling,P=b.tag;b=b.type;var G=null;switch(P){case 0:case 15:case 1:G=b;break;case 11:G=b.render}if(F1===null)throw Error("Expected resolveFamily to be set during hot reload.");var Y=!1;if(b=!1,G!==null&&(G=F1(G),G!==void 0&&(v.has(G)?b=!0:g.has(G)&&(P===1?b=!0:Y=!0))),Ph!==null&&(Ph.has(r)||l!==null&&Ph.has(l))&&(b=!0),b&&(r._debugNeedsRemount=!0),b||Y)l=U0(r,2),l!==null&&Cg(l,r,2);if(o===null||b||M9(o,g,v),q===null)break;r=q}while(1)}function wR(r,g,v,b){this.tag=r,this.key=v,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=g,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=b,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Q3||typeof Object.preventExtensions!=="function"||Object.preventExtensions(this)}function a8(r){return r=r.prototype,!(!r||!r.isReactComponent)}function yv(r,g){var v=r.alternate;switch(v===null?(v=K(r.tag,g,r.key,r.mode),v.elementType=r.elementType,v.type=r.type,v.stateNode=r.stateNode,v._debugOwner=r._debugOwner,v._debugStack=r._debugStack,v._debugTask=r._debugTask,v._debugHookTypes=r._debugHookTypes,v.alternate=r,r.alternate=v):(v.pendingProps=g,v.type=r.type,v.flags=0,v.subtreeFlags=0,v.deletions=null,v.actualDuration=-0,v.actualStartTime=-1.1),v.flags=r.flags&65011712,v.childLanes=r.childLanes,v.lanes=r.lanes,v.child=r.child,v.memoizedProps=r.memoizedProps,v.memoizedState=r.memoizedState,v.updateQueue=r.updateQueue,g=r.dependencies,v.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},v.sibling=r.sibling,v.index=r.index,v.ref=r.ref,v.refCleanup=r.refCleanup,v.selfBaseDuration=r.selfBaseDuration,v.treeBaseDuration=r.treeBaseDuration,v._debugInfo=r._debugInfo,v._debugNeedsRemount=r._debugNeedsRemount,v.tag){case 0:case 15:v.type=Dw(r.type);break;case 1:v.type=Dw(r.type);break;case 11:v.type=p8(r.type)}return v}function G9(r,g){r.flags&=65011714;var v=r.alternate;return v===null?(r.childLanes=0,r.lanes=g,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null,r.selfBaseDuration=0,r.treeBaseDuration=0):(r.childLanes=v.childLanes,r.lanes=v.lanes,r.child=v.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=v.memoizedProps,r.memoizedState=v.memoizedState,r.updateQueue=v.updateQueue,r.type=v.type,g=v.dependencies,r.dependencies=g===null?null:{lanes:g.lanes,firstContext:g.firstContext,_debugThenableState:g._debugThenableState},r.selfBaseDuration=v.selfBaseDuration,r.treeBaseDuration=v.treeBaseDuration),r}function d8(r,g,v,b,l,o){var q=0,P=r;if(typeof r==="function")a8(r)&&(q=1),P=Dw(P);else if(typeof r==="string")q=hr(),q=PK(r,v,q)?26:r==="html"||r==="head"||r==="body"?27:5;else r:switch(r){case yO:return g=K(31,v,g,l),g.elementType=yO,g.lanes=o,g;case rh:return iw(v.children,l,o,g);case jo:q=8,l|=F0,l|=y1;break;case VO:return r=v,b=l,typeof r.id!=="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof r.id),g=K(12,r,g,b|_r),g.elementType=VO,g.lanes=o,g.stateNode={effectDuration:0,passiveEffectDuration:0},g;case eO:return g=K(13,v,g,l),g.elementType=eO,g.lanes=o,g;case EO:return g=K(19,v,g,l),g.elementType=EO,g.lanes=o,g;default:if(typeof r==="object"&&r!==null)switch(r.$$typeof){case Kv:q=10;break r;case _O:q=9;break r;case S2:q=11,P=p8(P);break r;case to:q=14;break r;case O1:q=16,P=null;break r}if(P="",r===void 0||typeof r==="object"&&r!==null&&Object.keys(r).length===0)P+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";r===null?v="null":v0(r)?v="array":r!==void 0&&r.$$typeof===Rv?(v="<"+(E(r.type)||"Unknown")+" />",P=" Did you accidentally export a JSX literal instead of a component?"):v=typeof r,(q=b?t(b):null)&&(P+=`

Check the render method of \``+q+"`."),q=29,v=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(v+"."+P)),P=null}return g=K(q,v,g,l),g.elementType=r,g.type=P,g.lanes=o,g._debugOwner=b,g}function a4(r,g,v){return g=d8(r.type,r.key,r.props,r._owner,g,v),g._debugOwner=r._owner,g._debugStack=r._debugStack,g._debugTask=r._debugTask,g}function iw(r,g,v,b){return r=K(7,r,b,g),r.lanes=v,r}function s8(r,g,v){return r=K(6,r,null,g),r.lanes=v,r}function X9(r){var g=K(18,null,null,Br);return g.stateNode=r,g}function rH(r,g,v){return g=K(4,r.children!==null?r.children:[],r.key,g),g.lanes=v,g.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},g}function w1(r,g){if(typeof r==="object"&&r!==null){var v=Qq.get(r);if(v!==void 0)return v;return g={value:r,source:g,stack:Dr(g)},Qq.set(r,g),g}return{value:r,source:g,stack:Dr(g)}}function nv(r,g){N5(),uh[Wh++]=f2,uh[Wh++]=O6,O6=r,f2=g}function Y9(r,g,v){N5(),B1[N1++]=r5,B1[N1++]=g5,B1[N1++]=dw,dw=r;var b=r5;r=g5;var l=32-x0(b)-1;b&=~(1<<l),v+=1;var o=32-x0(g)+l;if(30<o){var q=l-l%5;o=(b&(1<<q)-1).toString(32),b>>=q,l-=q,r5=1<<32-x0(g)+l|v<<l|b,g5=o+r}else r5=1<<o|v<<l|b,g5=r}function gH(r){N5(),r.return!==null&&(nv(r,1),Y9(r,1,0))}function vH(r){for(;r===O6;)O6=uh[--Wh],uh[Wh]=null,f2=uh[--Wh],uh[Wh]=null;for(;r===dw;)dw=B1[--N1],B1[N1]=null,g5=B1[--N1],B1[N1]=null,r5=B1[--N1],B1[N1]=null}function J9(){return N5(),dw!==null?{id:r5,overflow:g5}:null}function Q9(r,g){N5(),B1[N1++]=r5,B1[N1++]=g5,B1[N1++]=dw,r5=g.id,g5=g.overflow,dw=r}function N5(){ar||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Vw(r,g){if(r.return===null){if(P1===null)P1={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g};else{if(P1.fiber!==r)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");P1.distanceFromLeaf>g&&(P1.distanceFromLeaf=g)}return P1}var v=Vw(r.return,g+1).children;if(0<v.length&&v[v.length-1].fiber===r)return v=v[v.length-1],v.distanceFromLeaf>g&&(v.distanceFromLeaf=g),v;return g={fiber:r,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:g},v.push(g),g}function z9(){ar&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function d4(r,g){Nv||(r=Vw(r,0),r.serverProps=null,g!==null&&(g=sW(g),r.serverTail.push(g)))}function Z5(r){var g=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,v="",b=P1;throw b!==null&&(P1=null,v=_8(b)),H2(w1(Error("Hydration failed because the server rendered "+(g?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+v),r)),zq}function R9(r){var{stateNode:g,type:v,memoizedProps:b}=r;switch(g[G0]=r,g[T0]=b,RO(v,b),v){case"dialog":dr("cancel",g),dr("close",g);break;case"iframe":case"object":case"embed":dr("load",g);break;case"video":case"audio":for(v=0;v<Rl.length;v++)dr(Rl[v],g);break;case"source":dr("error",g);break;case"img":case"image":case"link":dr("error",g),dr("load",g);break;case"details":dr("toggle",g);break;case"input":B5("input",b),dr("invalid",g),BP(g,b),NP(g,b.value,b.defaultValue,b.checked,b.defaultChecked,b.type,b.name,!0);break;case"option":ZP(g,b);break;case"select":B5("select",b),dr("invalid",g),xP(g,b);break;case"textarea":B5("textarea",b),dr("invalid",g),TP(g,b),SP(g,b.value,b.defaultValue,b.children)}v=b.children,typeof v!=="string"&&typeof v!=="number"&&typeof v!=="bigint"||g.textContent===""+v||b.suppressHydrationWarning===!0||iW(g.textContent,v)?(b.popover!=null&&(dr("beforetoggle",g),dr("toggle",g)),b.onScroll!=null&&dr("scroll",g),b.onScrollEnd!=null&&dr("scrollend",g),b.onClick!=null&&(g.onclick=Ev),g=!0):g=!1,g||Z5(r,!0)}function K9(r){for(X0=r.return;X0;)switch(X0.tag){case 5:case 31:case 13:Z1=!1;return;case 27:case 3:Z1=!0;return;default:X0=X0.return}}function Db(r){if(r!==X0)return!1;if(!ar)return K9(r),ar=!0,!1;var g=r.tag,v;if(v=g!==3&&g!==27){if(v=g===5)v=r.type,v=!(v!=="form"&&v!=="button")||FO(r.type,r.memoizedProps);v=!v}if(v&&Lg){for(v=Lg;v;){var b=Vw(r,0),l=sW(v);b.serverTail.push(l),v=l.type==="Suspense"?IO(v):H1(v.nextSibling)}Z5(r)}if(K9(r),g===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Lg=IO(r)}else if(g===31){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Lg=IO(r)}else g===27?(g=Lg,V5(r.type)?(r=qA,qA=null,Lg=r):Lg=g):Lg=X0?H1(r.stateNode.nextSibling):null;return!0}function _w(){Lg=X0=null,Nv=ar=!1}function wH(){var r=c5;return r!==null&&(i0===null?i0=r:i0.push.apply(i0,r),c5=null),r}function H2(r){c5===null?c5=[r]:c5.push(r)}function bH(){var r=P1;if(r!==null){P1=null;for(var g=_8(r);0<r.children.length;)r=r.children[0];Hr(r.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",g)})}}function s4(){Mh=q6=null,Gh=!1}function I5(r,g,v){Rr(Rq,g._currentValue,r),g._currentValue=v,Rr(Kq,g._currentRenderer,r),g._currentRenderer!==void 0&&g._currentRenderer!==null&&g._currentRenderer!==R3&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),g._currentRenderer=R3}function jv(r,g){r._currentValue=Rq.current;var v=Kq.current;Xr(Kq,g),r._currentRenderer=v,Xr(Rq,g)}function hH(r,g,v){for(;r!==null;){var b=r.alternate;if((r.childLanes&g)!==g?(r.childLanes|=g,b!==null&&(b.childLanes|=g)):b!==null&&(b.childLanes&g)!==g&&(b.childLanes|=g),r===v)break;r=r.return}r!==v&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function lH(r,g,v,b){var l=r.child;l!==null&&(l.return=r);for(;l!==null;){var o=l.dependencies;if(o!==null){var q=l.child;o=o.firstContext;r:for(;o!==null;){var P=o;o=l;for(var G=0;G<g.length;G++)if(P.context===g[G]){o.lanes|=v,P=o.alternate,P!==null&&(P.lanes|=v),hH(o.return,v,r),b||(q=null);break r}o=P.next}}else if(l.tag===18){if(q=l.return,q===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");q.lanes|=v,o=q.alternate,o!==null&&(o.lanes|=v),hH(q,v,r),q=null}else q=l.child;if(q!==null)q.return=l;else for(q=l;q!==null;){if(q===r){q=null;break}if(l=q.sibling,l!==null){l.return=q.return,q=l;break}q=q.return}l=q}}function ib(r,g,v,b){r=null;for(var l=g,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var q=l.alternate;if(q===null)throw Error("Should have a current fiber. This is a bug in React.");if(q=q.memoizedProps,q!==null){var P=l.type;S0(l.pendingProps.value,q.value)||(r!==null?r.push(P):r=[P])}}else if(l===fo.current){if(q=l.alternate,q===null)throw Error("Should have a current fiber. This is a bug in React.");q.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(r!==null?r.push(Fl):r=[Fl])}l=l.return}r!==null&&lH(g,r,v,b),g.flags|=262144}function ro(r){for(r=r.firstContext;r!==null;){if(!S0(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function ew(r){q6=r,Mh=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Bg(r){return Gh&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),$9(q6,r)}function go(r,g){return q6===null&&ew(r),$9(r,g)}function $9(r,g){var v=g._currentValue;if(g={context:g,memoizedValue:v,next:null},Mh===null){if(r===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Mh=g,r.dependencies={lanes:0,firstContext:g,_debugThenableState:null},r.flags|=524288}else Mh=Mh.next=g;return v}function oH(){return{controller:new k$,data:new Map,refCount:0}}function Ew(r){r.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),r.refCount++}function O2(r){r.refCount--,0>r.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),r.refCount===0&&D$(i$,function(){r.controller.abort()})}function Ov(r,g,v){if((r&127)!==0)0>Zv&&(Zv=cg(),p2=A6(g),$q=g,v!=null&&(Uq=D(v)),(vg&(b0|M1))!==O0&&(Sg=!0,d5=c2),r=Z2(),g=N2(),r!==Xh||g!==a2?Xh=-1.1:g!==null&&(d5=c2),rb=r,a2=g);else if((r&4194048)!==0&&0>I1&&(I1=cg(),d2=A6(g),K3=g,v!=null&&($3=D(v)),0>b5)){if(r=Z2(),g=N2(),r!==rw||g!==gb)rw=-1.1;s5=r,gb=g}}function bR(r){if(0>Zv){Zv=cg(),p2=r._debugTask!=null?r._debugTask:null,(vg&(b0|M1))!==O0&&(d5=c2);var g=Z2(),v=N2();g!==Xh||v!==a2?Xh=-1.1:v!==null&&(d5=c2),rb=g,a2=v}if(0>I1&&(I1=cg(),d2=r._debugTask!=null?r._debugTask:null,0>b5)){if(r=Z2(),g=N2(),r!==rw||g!==gb)rw=-1.1;s5=r,gb=g}}function tv(){var r=sw;return sw=0,r}function vo(r){var g=sw;return sw=r,g}function q2(r){var g=sw;return sw+=r,g}function wo(){Fr=Lr=-1.1}function b1(){var r=Lr;return Lr=-1.1,r}function h1(r){0<=r&&(Lr=r)}function qv(){var r=Ig;return Ig=-0,r}function Av(r){0<=r&&(Ig=r)}function Pv(){var r=Ng;return Ng=null,r}function uv(){var r=Sg;return Sg=!1,r}function HH(r){m0=cg(),0>r.actualStartTime&&(r.actualStartTime=m0)}function OH(r){if(0<=m0){var g=cg()-m0;r.actualDuration+=g,r.selfBaseDuration=g,m0=-1}}function U9(r){if(0<=m0){var g=cg()-m0;r.actualDuration+=g,m0=-1}}function Wv(){if(0<=m0){var r=cg(),g=r-m0;m0=-1,sw+=g,Ig+=g,Fr=r}}function L9(r){Ng===null&&(Ng=[]),Ng.push(r),w5===null&&(w5=[]),w5.push(r)}function Mv(){m0=cg(),0>Lr&&(Lr=m0)}function A2(r){for(var g=r.child;g;)r.actualDuration+=g.actualDuration,g=g.sibling}function hR(r,g){if(rl===null){var v=rl=[];Fq=0,vb=YO(),Yh={status:"pending",value:void 0,then:function(b){v.push(b)}}}return Fq++,g.then(F9,F9),g}function F9(){if(--Fq===0&&(-1<I1||(b5=-1.1),rl!==null)){Yh!==null&&(Yh.status="fulfilled");var r=rl;rl=null,vb=0,Yh=null;for(var g=0;g<r.length;g++)(0,r[g])()}}function lR(r,g){var v=[],b={status:"pending",value:null,reason:null,then:function(l){v.push(l)}};return r.then(function(){b.status="fulfilled",b.value=g;for(var l=0;l<v.length;l++)(0,v[l])(g)},function(l){b.status="rejected",b.reason=l;for(l=0;l<v.length;l++)(0,v[l])(void 0)}),b}function qH(){var r=wb.current;return r!==null?r:Yg.pooledCache}function bo(r,g){g===null?Rr(wb,wb.current,r):Rr(wb,g.pool,r)}function B9(){var r=qH();return r===null?null:{parent:fg._currentValue,pool:r}}function N9(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function Z9(r){return r=r.status,r==="fulfilled"||r==="rejected"}function I9(r,g,v){k.actQueue!==null&&(k.didUsePromise=!0);var b=r.thenables;if(v=b[v],v===void 0?b.push(g):v!==g&&(r.didWarnAboutUncachedPromise||(r.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),g.then(Ev,Ev),g=v),g._debugInfo===void 0){r=performance.now(),b=g.displayName;var l={name:typeof b==="string"?b:"Promise",start:r,end:r,value:g};g._debugInfo=[{awaited:l}],g.status!=="fulfilled"&&g.status!=="rejected"&&(r=function(){l.end=performance.now()},g.then(r,r))}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,T9(r),r;default:if(typeof g.status==="string")g.then(Ev,Ev);else{if(r=Yg,r!==null&&100<r.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");r=g,r.status="pending",r.then(function(o){if(g.status==="pending"){var q=g;q.status="fulfilled",q.value=o}},function(o){if(g.status==="pending"){var q=g;q.status="rejected",q.reason=o}})}switch(g.status){case"fulfilled":return g.value;case"rejected":throw r=g.reason,T9(r),r}throw hb=g,ol=!0,Jh}}function x5(r){try{return E$(r)}catch(g){if(g!==null&&typeof g==="object"&&typeof g.then==="function")throw hb=g,ol=!0,Jh;throw g}}function x9(){if(hb===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var r=hb;return hb=null,ol=!1,r}function T9(r){if(r===Jh||r===J6)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function u0(r){var g=er;return r!=null&&(er=g===null?r:g.concat(r)),g}function AH(){var r=er;if(r!=null){for(var g=r.length-1;0<=g;g--)if(r[g].name!=null){var v=r[g].debugTask;if(v!=null)return v}}return null}function ho(r,g,v){for(var b=Object.keys(r.props),l=0;l<b.length;l++){var o=b[l];if(o!=="children"&&o!=="key"){g===null&&(g=a4(r,v.mode,0),g._debugInfo=er,g.return=v),Hr(g,function(q){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q)},o);break}}}function lo(r){var g=Hl;return Hl+=1,Qh===null&&(Qh=N9()),I9(Qh,r,g)}function P2(r,g){g=g.props.ref,r.ref=g!==void 0?g:null}function C9(r,g){if(g.$$typeof===RK)throw Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`);throw r=Object.prototype.toString.call(g),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}function oo(r,g){var v=AH();v!==null?v.run(C9.bind(null,r,g)):C9(r,g)}function S9(r,g){var v=D(r)||"Component";y3[v]||(y3[v]=!0,g=g.displayName||g.name||"Component",r.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,g,g,g):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,g,g,v,g,v))}function Ho(r,g){var v=AH();v!==null?v.run(S9.bind(null,r,g)):S9(r,g)}function m9(r,g){var v=D(r)||"Component";n3[v]||(n3[v]=!0,g=String(g),r.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,g):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,v,g,v))}function Oo(r,g){var v=AH();v!==null?v.run(m9.bind(null,r,g)):m9(r,g)}function k9(r){function g($,L){if(r){var B=$.deletions;B===null?($.deletions=[L],$.flags|=16):B.push(L)}}function v($,L){if(!r)return null;for(;L!==null;)g($,L),L=L.sibling;return null}function b($){for(var L=new Map;$!==null;)$.key!==null?L.set($.key,$):L.set($.index,$),$=$.sibling;return L}function l($,L){return $=yv($,L),$.index=0,$.sibling=null,$}function o($,L,B){if($.index=B,!r)return $.flags|=1048576,L;if(B=$.alternate,B!==null)return B=B.index,B<L?($.flags|=67108866,L):B;return $.flags|=67108866,L}function q($){return r&&$.alternate===null&&($.flags|=67108866),$}function P($,L,B,e){if(L===null||L.tag!==6)return L=s8(B,$.mode,e),L.return=$,L._debugOwner=$,L._debugTask=$._debugTask,L._debugInfo=er,L;return L=l(L,B),L.return=$,L._debugInfo=er,L}function G($,L,B,e){var qr=B.type;if(qr===rh)return L=N($,L,B.props.children,e,B.key),ho(B,L,$),L;if(L!==null&&(L.elementType===qr||u9(L,B)||typeof qr==="object"&&qr!==null&&qr.$$typeof===O1&&x5(qr)===L.type))return L=l(L,B.props),P2(L,B),L.return=$,L._debugOwner=B._owner,L._debugInfo=er,L;return L=a4(B,$.mode,e),P2(L,B),L.return=$,L._debugInfo=er,L}function Y($,L,B,e){if(L===null||L.tag!==4||L.stateNode.containerInfo!==B.containerInfo||L.stateNode.implementation!==B.implementation)return L=rH(B,$.mode,e),L.return=$,L._debugInfo=er,L;return L=l(L,B.children||[]),L.return=$,L._debugInfo=er,L}function N($,L,B,e,qr){if(L===null||L.tag!==7)return L=iw(B,$.mode,e,qr),L.return=$,L._debugOwner=$,L._debugTask=$._debugTask,L._debugInfo=er,L;return L=l(L,B),L.return=$,L._debugInfo=er,L}function Z($,L,B){if(typeof L==="string"&&L!==""||typeof L==="number"||typeof L==="bigint")return L=s8(""+L,$.mode,B),L.return=$,L._debugOwner=$,L._debugTask=$._debugTask,L._debugInfo=er,L;if(typeof L==="object"&&L!==null){switch(L.$$typeof){case Rv:return B=a4(L,$.mode,B),P2(B,L),B.return=$,$=u0(L._debugInfo),B._debugInfo=er,er=$,B;case sb:return L=rH(L,$.mode,B),L.return=$,L._debugInfo=er,L;case O1:var e=u0(L._debugInfo);return L=x5(L),$=Z($,L,B),er=e,$}if(v0(L)||m(L))return B=iw(L,$.mode,B,null),B.return=$,B._debugOwner=$,B._debugTask=$._debugTask,$=u0(L._debugInfo),B._debugInfo=er,er=$,B;if(typeof L.then==="function")return e=u0(L._debugInfo),$=Z($,lo(L),B),er=e,$;if(L.$$typeof===Kv)return Z($,go($,L),B);oo($,L)}return typeof L==="function"&&Ho($,L),typeof L==="symbol"&&Oo($,L),null}function U($,L,B,e){var qr=L!==null?L.key:null;if(typeof B==="string"&&B!==""||typeof B==="number"||typeof B==="bigint")return qr!==null?null:P($,L,""+B,e);if(typeof B==="object"&&B!==null){switch(B.$$typeof){case Rv:return B.key===qr?(qr=u0(B._debugInfo),$=G($,L,B,e),er=qr,$):null;case sb:return B.key===qr?Y($,L,B,e):null;case O1:return qr=u0(B._debugInfo),B=x5(B),$=U($,L,B,e),er=qr,$}if(v0(B)||m(B)){if(qr!==null)return null;return qr=u0(B._debugInfo),$=N($,L,B,e,null),er=qr,$}if(typeof B.then==="function")return qr=u0(B._debugInfo),$=U($,L,lo(B),e),er=qr,$;if(B.$$typeof===Kv)return U($,L,go($,B),e);oo($,B)}return typeof B==="function"&&Ho($,B),typeof B==="symbol"&&Oo($,B),null}function T($,L,B,e,qr){if(typeof e==="string"&&e!==""||typeof e==="number"||typeof e==="bigint")return $=$.get(B)||null,P(L,$,""+e,qr);if(typeof e==="object"&&e!==null){switch(e.$$typeof){case Rv:return B=$.get(e.key===null?B:e.key)||null,$=u0(e._debugInfo),L=G(L,B,e,qr),er=$,L;case sb:return $=$.get(e.key===null?B:e.key)||null,Y(L,$,e,qr);case O1:var Zr=u0(e._debugInfo);return e=x5(e),L=T($,L,B,e,qr),er=Zr,L}if(v0(e)||m(e))return B=$.get(B)||null,$=u0(e._debugInfo),L=N(L,B,e,qr,null),er=$,L;if(typeof e.then==="function")return Zr=u0(e._debugInfo),L=T($,L,B,lo(e),qr),er=Zr,L;if(e.$$typeof===Kv)return T($,L,B,go(L,e),qr);oo(L,e)}return typeof e==="function"&&Ho(L,e),typeof e==="symbol"&&Oo(L,e),null}function lr($,L,B,e){if(typeof B!=="object"||B===null)return e;switch(B.$$typeof){case Rv:case sb:z($,L,B);var qr=B.key;if(typeof qr!=="string")break;if(e===null){e=new Set,e.add(qr);break}if(!e.has(qr)){e.add(qr);break}Hr(L,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",qr)});break;case O1:B=x5(B),lr($,L,B,e)}return e}function Wr($,L,B,e){for(var qr=null,Zr=null,$r=null,Qr=L,ir=L=0,Fg=null;Qr!==null&&ir<B.length;ir++){Qr.index>ir?(Fg=Qr,Qr=null):Fg=Qr.sibling;var Eg=U($,Qr,B[ir],e);if(Eg===null){Qr===null&&(Qr=Fg);break}qr=lr($,Eg,B[ir],qr),r&&Qr&&Eg.alternate===null&&g($,Qr),L=o(Eg,L,ir),$r===null?Zr=Eg:$r.sibling=Eg,$r=Eg,Qr=Fg}if(ir===B.length)return v($,Qr),ar&&nv($,ir),Zr;if(Qr===null){for(;ir<B.length;ir++)Qr=Z($,B[ir],e),Qr!==null&&(qr=lr($,Qr,B[ir],qr),L=o(Qr,L,ir),$r===null?Zr=Qr:$r.sibling=Qr,$r=Qr);return ar&&nv($,ir),Zr}for(Qr=b(Qr);ir<B.length;ir++)Fg=T(Qr,$,ir,B[ir],e),Fg!==null&&(qr=lr($,Fg,B[ir],qr),r&&Fg.alternate!==null&&Qr.delete(Fg.key===null?ir:Fg.key),L=o(Fg,L,ir),$r===null?Zr=Fg:$r.sibling=Fg,$r=Fg);return r&&Qr.forEach(function(u5){return g($,u5)}),ar&&nv($,ir),Zr}function Rg($,L,B,e){if(B==null)throw Error("An iterable object provided no iterator.");for(var qr=null,Zr=null,$r=L,Qr=L=0,ir=null,Fg=null,Eg=B.next();$r!==null&&!Eg.done;Qr++,Eg=B.next()){$r.index>Qr?(ir=$r,$r=null):ir=$r.sibling;var u5=U($,$r,Eg.value,e);if(u5===null){$r===null&&($r=ir);break}Fg=lr($,u5,Eg.value,Fg),r&&$r&&u5.alternate===null&&g($,$r),L=o(u5,L,Qr),Zr===null?qr=u5:Zr.sibling=u5,Zr=u5,$r=ir}if(Eg.done)return v($,$r),ar&&nv($,Qr),qr;if($r===null){for(;!Eg.done;Qr++,Eg=B.next())$r=Z($,Eg.value,e),$r!==null&&(Fg=lr($,$r,Eg.value,Fg),L=o($r,L,Qr),Zr===null?qr=$r:Zr.sibling=$r,Zr=$r);return ar&&nv($,Qr),qr}for($r=b($r);!Eg.done;Qr++,Eg=B.next())ir=T($r,$,Qr,Eg.value,e),ir!==null&&(Fg=lr($,ir,Eg.value,Fg),r&&ir.alternate!==null&&$r.delete(ir.key===null?Qr:ir.key),L=o(ir,L,Qr),Zr===null?qr=ir:Zr.sibling=ir,Zr=ir);return r&&$r.forEach(function(uU){return g($,uU)}),ar&&nv($,Qr),qr}function sr($,L,B,e){if(typeof B==="object"&&B!==null&&B.type===rh&&B.key===null&&(ho(B,null,$),B=B.props.children),typeof B==="object"&&B!==null){switch(B.$$typeof){case Rv:var qr=u0(B._debugInfo);r:{for(var Zr=B.key;L!==null;){if(L.key===Zr){if(Zr=B.type,Zr===rh){if(L.tag===7){v($,L.sibling),e=l(L,B.props.children),e.return=$,e._debugOwner=B._owner,e._debugInfo=er,ho(B,e,$),$=e;break r}}else if(L.elementType===Zr||u9(L,B)||typeof Zr==="object"&&Zr!==null&&Zr.$$typeof===O1&&x5(Zr)===L.type){v($,L.sibling),e=l(L,B.props),P2(e,B),e.return=$,e._debugOwner=B._owner,e._debugInfo=er,$=e;break r}v($,L);break}else g($,L);L=L.sibling}B.type===rh?(e=iw(B.props.children,$.mode,e,B.key),e.return=$,e._debugOwner=$,e._debugTask=$._debugTask,e._debugInfo=er,ho(B,e,$),$=e):(e=a4(B,$.mode,e),P2(e,B),e.return=$,e._debugInfo=er,$=e)}return $=q($),er=qr,$;case sb:r:{qr=B;for(B=qr.key;L!==null;){if(L.key===B)if(L.tag===4&&L.stateNode.containerInfo===qr.containerInfo&&L.stateNode.implementation===qr.implementation){v($,L.sibling),e=l(L,qr.children||[]),e.return=$,$=e;break r}else{v($,L);break}else g($,L);L=L.sibling}e=rH(qr,$.mode,e),e.return=$,$=e}return q($);case O1:return qr=u0(B._debugInfo),B=x5(B),$=sr($,L,B,e),er=qr,$}if(v0(B))return qr=u0(B._debugInfo),$=Wr($,L,B,e),er=qr,$;if(m(B)){if(qr=u0(B._debugInfo),Zr=m(B),typeof Zr!=="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");var $r=Zr.call(B);if($r===B){if($.tag!==0||Object.prototype.toString.call($.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call($r)!=="[object Generator]")e3||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),e3=!0}else B.entries!==Zr||Iq||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Iq=!0);return $=Rg($,L,$r,e),er=qr,$}if(typeof B.then==="function")return qr=u0(B._debugInfo),$=sr($,L,lo(B),e),er=qr,$;if(B.$$typeof===Kv)return sr($,L,go($,B),e);oo($,B)}if(typeof B==="string"&&B!==""||typeof B==="number"||typeof B==="bigint")return qr=""+B,L!==null&&L.tag===6?(v($,L.sibling),e=l(L,qr),e.return=$,$=e):(v($,L),e=s8(qr,$.mode,e),e.return=$,e._debugOwner=$,e._debugTask=$._debugTask,e._debugInfo=er,$=e),q($);return typeof B==="function"&&Ho($,B),typeof B==="symbol"&&Oo($,B),v($,L)}return function($,L,B,e){var qr=er;er=null;try{Hl=0;var Zr=sr($,L,B,e);return Qh=null,Zr}catch(Fg){if(Fg===Jh||Fg===J6)throw Fg;var $r=K(29,Fg,null,$.mode);$r.lanes=e,$r.return=$;var Qr=$r._debugInfo=er;if($r._debugOwner=$._debugOwner,$r._debugTask=$._debugTask,Qr!=null){for(var ir=Qr.length-1;0<=ir;ir--)if(typeof Qr[ir].stack==="string"){$r._debugOwner=Qr[ir],$r._debugTask=Qr[ir].debugTask;break}}return $r}finally{er=qr}}}function D9(r,g){var v=v0(r);return r=!v&&typeof m(r)==="function",v||r?(v=v?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",v,g,v),!1):!0}function PH(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uH(r,g){r=r.updateQueue,g.updateQueue===r&&(g.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function T5(r){return{lane:r,tag:t3,payload:null,callback:null,next:null}}function C5(r,g,v){var b=r.updateQueue;if(b===null)return null;if(b=b.shared,Tq===b&&!p3){var l=D(r);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,l),p3=!0}if((vg&b0)!==O0)return l=b.pending,l===null?g.next=g:(g.next=l.next,l.next=g),b.pending=g,g=p4(r),P9(r,null,v),g;return c4(r,b,g,v),p4(r)}function u2(r,g,v){if(g=g.updateQueue,g!==null&&(g=g.shared,(v&4194048)!==0)){var b=g.lanes;b&=r.pendingLanes,v|=b,g.lanes=v,xw(r,v)}}function qo(r,g){var{updateQueue:v,alternate:b}=r;if(b!==null&&(b=b.updateQueue,v===b)){var l=null,o=null;if(v=v.firstBaseUpdate,v!==null){do{var q={lane:v.lane,tag:v.tag,payload:v.payload,callback:null,next:null};o===null?l=o=q:o=o.next=q,v=v.next}while(v!==null);o===null?l=o=g:o=o.next=g}else l=o=g;v={baseState:b.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:b.shared,callbacks:b.callbacks},r.updateQueue=v;return}r=v.lastBaseUpdate,r===null?v.firstBaseUpdate=g:r.next=g,v.lastBaseUpdate=g}function W2(){if(Cq){var r=Yh;if(r!==null)throw r}}function M2(r,g,v,b){Cq=!1;var l=r.updateQueue;gw=!1,Tq=l.shared;var{firstBaseUpdate:o,lastBaseUpdate:q}=l,P=l.shared.pending;if(P!==null){l.shared.pending=null;var G=P,Y=G.next;G.next=null,q===null?o=Y:q.next=Y,q=G;var N=r.alternate;N!==null&&(N=N.updateQueue,P=N.lastBaseUpdate,P!==q&&(P===null?N.firstBaseUpdate=Y:P.next=Y,N.lastBaseUpdate=G))}if(o!==null){var Z=l.baseState;q=0,N=Y=G=null,P=o;do{var U=P.lane&-536870913,T=U!==P.lane;if(T?(Er&U)===U:(b&U)===U){U!==0&&U===vb&&(Cq=!0),N!==null&&(N=N.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});r:{U=r;var lr=P,Wr=g,Rg=v;switch(lr.tag){case f3:if(lr=lr.payload,typeof lr==="function"){Gh=!0;var sr=lr.call(Rg,Z,Wr);if(U.mode&F0){Qg(!0);try{lr.call(Rg,Z,Wr)}finally{Qg(!1)}}Gh=!1,Z=sr;break r}Z=lr;break r;case xq:U.flags=U.flags&-65537|128;case t3:if(sr=lr.payload,typeof sr==="function"){if(Gh=!0,lr=sr.call(Rg,Z,Wr),U.mode&F0){Qg(!0);try{sr.call(Rg,Z,Wr)}finally{Qg(!1)}}Gh=!1}else lr=sr;if(lr===null||lr===void 0)break r;Z=tr({},Z,lr);break r;case c3:gw=!0}}U=P.callback,U!==null&&(r.flags|=64,T&&(r.flags|=8192),T=l.callbacks,T===null?l.callbacks=[U]:T.push(U))}else T={lane:U,tag:P.tag,payload:P.payload,callback:P.callback,next:null},N===null?(Y=N=T,G=Z):N=N.next=T,q|=U;if(P=P.next,P===null)if(P=l.shared.pending,P===null)break;else T=P,P=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}while(1);N===null&&(G=Z),l.baseState=G,l.firstBaseUpdate=Y,l.lastBaseUpdate=N,o===null&&(l.shared.lanes=0),bw|=q,r.lanes=q,r.memoizedState=Z}Tq=null}function i9(r,g){if(typeof r!=="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+r);r.call(g)}function oR(r,g){var v=r.shared.hiddenCallbacks;if(v!==null)for(r.shared.hiddenCallbacks=null,r=0;r<v.length;r++)i9(v[r],g)}function V9(r,g){var v=r.callbacks;if(v!==null)for(r.callbacks=null,r=0;r<v.length;r++)i9(v[r],g)}function _9(r,g){var v=Tv;Rr(z6,v,r),Rr(zh,g,r),Tv=v|g.baseLanes}function WH(r){Rr(z6,Tv,r),Rr(zh,zh.current,r)}function MH(r){Tv=z6.current,Xr(zh,r),Xr(z6,r)}function S5(r){var g=r.alternate;Rr(eg,eg.current&Rh,r),Rr(u1,r,r),x1===null&&(g===null||zh.current!==null?x1=r:g.memoizedState!==null&&(x1=r))}function GH(r){Rr(eg,eg.current,r),Rr(u1,r,r),x1===null&&(x1=r)}function e9(r){r.tag===22?(Rr(eg,eg.current,r),Rr(u1,r,r),x1===null&&(x1=r)):m5(r)}function m5(r){Rr(eg,eg.current,r),Rr(u1,u1.current,r)}function l1(r){Xr(u1,r),x1===r&&(x1=null),Xr(eg,r)}function Ao(r){for(var g=r;g!==null;){if(g.tag===13){var v=g.memoizedState;if(v!==null&&(v=v.dehydrated,v===null||NO(v)||ZO(v)))return g}else if(g.tag===19&&(g.memoizedProps.revealOrder==="forwards"||g.memoizedProps.revealOrder==="backwards"||g.memoizedProps.revealOrder==="unstable_legacy-backwards"||g.memoizedProps.revealOrder==="together")){if((g.flags&128)!==0)return g}else if(g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return null;g=g.return}g.sibling.return=g.return,g=g.sibling}return null}function jr(){var r=S;C1===null?C1=[r]:C1.push(r)}function a(){var r=S;if(C1!==null&&(H5++,C1[H5]!==r)){var g=D(Nr);if(!a3.has(g)&&(a3.add(g),C1!==null)){for(var v="",b=0;b<=H5;b++){var l=C1[b],o=b===H5?r:l;for(l=b+1+". "+l;30>l.length;)l+=" ";l+=o+`
`,v+=l}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,g,v)}}}function Vb(r){r===void 0||r===null||v0(r)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",S,typeof r)}function Po(){var r=D(Nr);s3.has(r)||(s3.add(r),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",r))}function Dg(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function XH(r,g){if(Al)return!1;if(g===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",S),!1;r.length!==g.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,S,"["+g.join(", ")+"]","["+r.join(", ")+"]");for(var v=0;v<g.length&&v<r.length;v++)if(!S0(r[v],g[v]))return!1;return!0}function YH(r,g,v,b,l,o){if(l5=o,Nr=g,C1=r!==null?r._debugHookTypes:null,H5=-1,Al=r!==null&&r.type!==g.type,Object.prototype.toString.call(v)==="[object AsyncFunction]"||Object.prototype.toString.call(v)==="[object AsyncGeneratorFunction]")o=D(Nr),Sq.has(o)||(Sq.add(o),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",o===null?"An unknown Component":"<"+o+">"));g.memoizedState=null,g.updateQueue=null,g.lanes=0,k.H=r!==null&&r.memoizedState!==null?kq:C1!==null?rM:mq,ob=o=(g.mode&F0)!==Br;var q=Bq(v,b,l);if(ob=!1,$h&&(q=JH(g,v,b,l)),o){Qg(!0);try{q=JH(g,v,b,l)}finally{Qg(!1)}}return E9(r,g),q}function E9(r,g){g._debugHookTypes=C1,g.dependencies===null?o5!==null&&(g.dependencies={lanes:0,firstContext:null,_debugThenableState:o5}):g.dependencies._debugThenableState=o5,k.H=Pl;var v=Xg!==null&&Xg.next!==null;if(l5=0,C1=S=pg=Xg=Nr=null,H5=-1,r!==null&&(r.flags&65011712)!==(g.flags&65011712)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),K6=!1,ql=0,o5=null,v)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");r===null||ag||(r=r.dependencies,r!==null&&ro(r)&&(ag=!0)),ol?(ol=!1,r=!0):r=!1,r&&(g=D(g)||"Unknown",d3.has(g)||Sq.has(g)||(d3.add(g),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function JH(r,g,v,b){Nr=r;var l=0;do{if($h&&(o5=null),ql=0,$h=!1,l>=n$)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(l+=1,Al=!1,pg=Xg=null,r.updateQueue!=null){var o=r.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H5=-1,k.H=gM,o=Bq(g,v,b)}while($h);return o}function HR(){var r=k.H,g=r.useState()[0];return g=typeof g.then==="function"?G2(g):g,r=r.useState()[0],(Xg!==null?Xg.memoizedState:null)!==r&&(Nr.flags|=1024),g}function QH(){var r=$6!==0;return $6=0,r}function zH(r,g,v){g.updateQueue=r.updateQueue,g.flags=(g.mode&y1)!==Br?g.flags&-402655237:g.flags&-2053,r.lanes&=~v}function RH(r){if(K6){for(r=r.memoizedState;r!==null;){var g=r.queue;g!==null&&(g.pending=null),r=r.next}K6=!1}l5=0,C1=pg=Xg=Nr=null,H5=-1,S=null,$h=!1,ql=$6=0,o5=null}function I0(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pg===null?Nr.memoizedState=pg=r:pg=pg.next=r,pg}function qg(){if(Xg===null){var r=Nr.alternate;r=r!==null?r.memoizedState:null}else r=Xg.next;var g=pg===null?Nr.memoizedState:pg.next;if(g!==null)pg=g,Xg=r;else{if(r===null){if(Nr.alternate===null)throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");throw Error("Rendered more hooks than during the previous render.")}Xg=r,r={memoizedState:Xg.memoizedState,baseState:Xg.baseState,baseQueue:Xg.baseQueue,queue:Xg.queue,next:null},pg===null?Nr.memoizedState=pg=r:pg=pg.next=r}return pg}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function G2(r){var g=ql;return ql+=1,o5===null&&(o5=N9()),r=I9(o5,r,g),g=Nr,(pg===null?g.memoizedState:pg.next)===null&&(g=g.alternate,k.H=g!==null&&g.memoizedState!==null?kq:mq),r}function k5(r){if(r!==null&&typeof r==="object"){if(typeof r.then==="function")return G2(r);if(r.$$typeof===Kv)return Bg(r)}throw Error("An unsupported type was passed to use(): "+String(r))}function yw(r){var g=null,v=Nr.updateQueue;if(v!==null&&(g=v.memoCache),g==null){var b=Nr.alternate;b!==null&&(b=b.updateQueue,b!==null&&(b=b.memoCache,b!=null&&(g={data:b.data.map(function(l){return l.slice()}),index:0})))}if(g==null&&(g={data:[],index:0}),v===null&&(v=uo(),Nr.updateQueue=v),v.memoCache=g,v=g.data[g.index],v===void 0||Al)for(v=g.data[g.index]=Array(r),b=0;b<r;b++)v[b]=KK;else v.length!==r&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",v.length,r);return g.index++,v}function V1(r,g){return typeof g==="function"?g(r):g}function KH(r,g,v){var b=I0();if(v!==void 0){var l=v(g);if(ob){Qg(!0);try{v(g)}finally{Qg(!1)}}}else l=g;return b.memoizedState=b.baseState=l,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:l},b.queue=r,r=r.dispatch=uR.bind(null,Nr,r),[b.memoizedState,r]}function _b(r){var g=qg();return $H(g,Xg,r)}function $H(r,g,v){var b=r.queue;if(b===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");b.lastRenderedReducer=v;var l=r.baseQueue,o=b.pending;if(o!==null){if(l!==null){var q=l.next;l.next=o.next,o.next=q}g.baseQueue!==l&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),g.baseQueue=l=o,b.pending=null}if(o=r.baseState,l===null)r.memoizedState=o;else{g=l.next;var P=q=null,G=null,Y=g,N=!1;do{var Z=Y.lane&-536870913;if(Z!==Y.lane?(Er&Z)===Z:(l5&Z)===Z){var U=Y.revertLane;if(U===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),Z===vb&&(N=!0);else if((l5&U)===U){Y=Y.next,U===vb&&(N=!0);continue}else Z={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},G===null?(P=G=Z,q=o):G=G.next=Z,Nr.lanes|=U,bw|=U;Z=Y.action,ob&&v(o,Z),o=Y.hasEagerState?Y.eagerState:v(o,Z)}else U={lane:Z,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},G===null?(P=G=U,q=o):G=G.next=U,Nr.lanes|=Z,bw|=Z;Y=Y.next}while(Y!==null&&Y!==g);if(G===null?q=o:G.next=P,!S0(o,r.memoizedState)&&(ag=!0,N&&(v=Yh,v!==null)))throw v;r.memoizedState=o,r.baseState=q,r.baseQueue=G,b.lastRenderedState=o}return l===null&&(b.lanes=0),[r.memoizedState,b.dispatch]}function X2(r){var g=qg(),v=g.queue;if(v===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");v.lastRenderedReducer=r;var{dispatch:b,pending:l}=v,o=g.memoizedState;if(l!==null){v.pending=null;var q=l=l.next;do o=r(o,q.action),q=q.next;while(q!==l);S0(o,g.memoizedState)||(ag=!0),g.memoizedState=o,g.baseQueue===null&&(g.baseState=o),v.lastRenderedState=o}return[o,b]}function UH(r,g,v){var b=Nr,l=I0();if(ar){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var o=v();Kh||o===v()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Kh=!0)}else{if(o=g(),Kh||(v=g(),S0(o,v)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Kh=!0)),Yg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Er&127)!==0||y9(b,g,o)}return l.memoizedState=o,v={value:o,getSnapshot:g},l.queue=v,Xo(j9.bind(null,b,v,r),[r]),b.flags|=2048,Eb(T1|D0,{destroy:void 0},n9.bind(null,b,v,o,g),null),o}function Wo(r,g,v){var b=Nr,l=qg(),o=ar;if(o){if(v===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");v=v()}else if(v=g(),!Kh){var q=g();S0(v,q)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Kh=!0)}if(q=!S0((Xg||l).memoizedState,v))l.memoizedState=v,ag=!0;l=l.queue;var P=j9.bind(null,b,l,r);if(j0(2048,D0,P,[r]),l.getSnapshot!==g||q||pg!==null&&pg.memoizedState.tag&T1){if(b.flags|=2048,Eb(T1|D0,{destroy:void 0},n9.bind(null,b,l,v,g),null),Yg===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");o||(l5&127)!==0||y9(b,g,v)}return v}function y9(r,g,v){r.flags|=16384,r={getSnapshot:g,value:v},g=Nr.updateQueue,g===null?(g=uo(),Nr.updateQueue=g,g.stores=[r]):(v=g.stores,v===null?g.stores=[r]:v.push(r))}function n9(r,g,v,b){g.value=v,g.getSnapshot=b,t9(g)&&f9(r)}function j9(r,g,v){return v(function(){t9(g)&&(Ov(2,"updateSyncExternalStore()",r),f9(r))})}function t9(r){var g=r.getSnapshot;r=r.value;try{var v=g();return!S0(r,v)}catch(b){return!0}}function f9(r){var g=U0(r,2);g!==null&&Cg(g,r,2)}function LH(r){var g=I0();if(typeof r==="function"){var v=r;if(r=v(),ob){Qg(!0);try{v()}finally{Qg(!1)}}}return g.memoizedState=g.baseState=r,g.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V1,lastRenderedState:r},g}function FH(r){r=LH(r);var g=r.queue,v=uu.bind(null,Nr,g);return g.dispatch=v,[r.memoizedState,v]}function BH(r){var g=I0();g.memoizedState=g.baseState=r;var v={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return g.queue=v,g=eH.bind(null,Nr,!0,v),v.dispatch=g,[r,g]}function c9(r,g){var v=qg();return p9(v,Xg,r,g)}function p9(r,g,v,b){return r.baseState=v,$H(r,Xg,typeof b==="function"?b:V1)}function a9(r,g){var v=qg();if(Xg!==null)return p9(v,Xg,r,g);return v.baseState=r,[r,v.queue.dispatch]}function OR(r,g,v,b,l){if(Ko(r))throw Error("Cannot update form state while rendering.");if(r=g.action,r!==null){var o={payload:l,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(q){o.listeners.push(q)}};k.T!==null?v(!0):o.isTransition=!1,b(o),v=g.pending,v===null?(o.next=g.pending=o,d9(g,o)):(o.next=v.next,g.pending=v.next=o)}}function d9(r,g){var{action:v,payload:b}=g,l=r.state;if(g.isTransition){var o=k.T,q={};q._updatedFibers=new Set,k.T=q;try{var P=v(l,b),G=k.S;G!==null&&G(q,P),s9(r,g,P)}catch(Y){NH(r,g,Y)}finally{o!==null&&q.types!==null&&(o.types!==null&&o.types!==q.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),o.types=q.types),k.T=o,o===null&&q._updatedFibers&&(r=q._updatedFibers.size,q._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{q=v(l,b),s9(r,g,q)}catch(Y){NH(r,g,Y)}}function s9(r,g,v){v!==null&&typeof v==="object"&&typeof v.then==="function"?(k.asyncTransitions++,v.then(Ro,Ro),v.then(function(b){ru(r,g,b)},function(b){return NH(r,g,b)}),g.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):ru(r,g,v)}function ru(r,g,v){g.status="fulfilled",g.value=v,gu(g),r.state=v,g=r.pending,g!==null&&(v=g.next,v===g?r.pending=null:(v=v.next,g.next=v,d9(r,v)))}function NH(r,g,v){var b=r.pending;if(r.pending=null,b!==null){b=b.next;do g.status="rejected",g.reason=v,gu(g),g=g.next;while(g!==b)}r.action=null}function gu(r){r=r.listeners;for(var g=0;g<r.length;g++)(0,r[g])()}function vu(r,g){return g}function eb(r,g){if(ar){var v=Yg.formState;if(v!==null){r:{var b=Nr;if(ar){if(Lg){g:{var l=Lg;for(var o=Z1;l.nodeType!==8;){if(!o){l=null;break g}if(l=H1(l.nextSibling),l===null){l=null;break g}}o=l.data,l=o===lA||o===VM?l:null}if(l){Lg=H1(l.nextSibling),b=l.data===lA;break r}}Z5(b)}b=!1}b&&(g=v[0])}}return v=I0(),v.memoizedState=v.baseState=g,b={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vu,lastRenderedState:g},v.queue=b,v=uu.bind(null,Nr,b),b.dispatch=v,b=LH(!1),o=eH.bind(null,Nr,!1,b.queue),b=I0(),l={state:g,dispatch:null,action:r,pending:null},b.queue=l,v=OR.bind(null,Nr,l,o,v),l.dispatch=v,b.memoizedState=r,[g,v,!1]}function Mo(r){var g=qg();return wu(g,Xg,r)}function wu(r,g,v){if(g=$H(r,g,vu)[0],r=_b(V1)[0],typeof g==="object"&&g!==null&&typeof g.then==="function")try{var b=G2(g)}catch(q){if(q===Jh)throw J6;throw q}else b=g;g=qg();var l=g.queue,o=l.dispatch;return v!==g.memoizedState&&(Nr.flags|=2048,Eb(T1|D0,{destroy:void 0},qR.bind(null,l,v),null)),[b,o,r]}function qR(r,g){r.action=g}function Go(r){var g=qg(),v=Xg;if(v!==null)return wu(g,v,r);qg(),g=g.memoizedState,v=qg();var b=v.queue.dispatch;return v.memoizedState=r,[g,b,!1]}function Eb(r,g,v,b){return r={tag:r,create:v,deps:b,inst:g,next:null},g=Nr.updateQueue,g===null&&(g=uo(),Nr.updateQueue=g),v=g.lastEffect,v===null?g.lastEffect=r.next=r:(b=v.next,v.next=r,r.next=b,g.lastEffect=r),r}function ZH(r){var g=I0();return r={current:r},g.memoizedState=r}function nw(r,g,v,b){var l=I0();Nr.flags|=r,l.memoizedState=Eb(T1|g,{destroy:void 0},v,b===void 0?null:b)}function j0(r,g,v,b){var l=qg();b=b===void 0?null:b;var o=l.memoizedState.inst;Xg!==null&&b!==null&&XH(b,Xg.memoizedState.deps)?l.memoizedState=Eb(g,o,v,b):(Nr.flags|=r,l.memoizedState=Eb(T1|g,o,v,b))}function Xo(r,g){(Nr.mode&y1)!==Br?nw(276826112,D0,r,g):nw(8390656,D0,r,g)}function AR(r){Nr.flags|=4;var g=Nr.updateQueue;if(g===null)g=uo(),Nr.updateQueue=g,g.events=[r];else{var v=g.events;v===null?g.events=[r]:v.push(r)}}function IH(r){var g=I0(),v={impl:r};return g.memoizedState=v,function(){if((vg&b0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return v.impl.apply(void 0,arguments)}}function Yo(r){var g=qg().memoizedState;return AR({ref:g,nextImpl:r}),function(){if((vg&b0)!==O0)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return g.impl.apply(void 0,arguments)}}function xH(r,g){var v=4194308;return(Nr.mode&y1)!==Br&&(v|=134217728),nw(v,W1,r,g)}function bu(r,g){if(typeof g==="function"){r=r();var v=g(r);return function(){typeof v==="function"?v():g(null)}}if(g!==null&&g!==void 0)return g.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(g).join(", ")+"}"),r=r(),g.current=r,function(){g.current=null}}function TH(r,g,v){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),v=v!==null&&v!==void 0?v.concat([r]):null;var b=4194308;(Nr.mode&y1)!==Br&&(b|=134217728),nw(b,W1,bu.bind(null,g,r),v)}function Jo(r,g,v){typeof g!=="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",g!==null?typeof g:"null"),v=v!==null&&v!==void 0?v.concat([r]):null,j0(4,W1,bu.bind(null,g,r),v)}function CH(r,g){return I0().memoizedState=[r,g===void 0?null:g],r}function Qo(r,g){var v=qg();g=g===void 0?null:g;var b=v.memoizedState;if(g!==null&&XH(g,b[1]))return b[0];return v.memoizedState=[r,g],r}function SH(r,g){var v=I0();g=g===void 0?null:g;var b=r();if(ob){Qg(!0);try{r()}finally{Qg(!1)}}return v.memoizedState=[b,g],b}function zo(r,g){var v=qg();g=g===void 0?null:g;var b=v.memoizedState;if(g!==null&&XH(g,b[1]))return b[0];if(b=r(),ob){Qg(!0);try{r()}finally{Qg(!1)}}return v.memoizedState=[b,g],b}function mH(r,g){var v=I0();return kH(v,r,g)}function hu(r,g){var v=qg();return ou(v,Xg.memoizedState,r,g)}function lu(r,g){var v=qg();return Xg===null?kH(v,r,g):ou(v,Xg.memoizedState,r,g)}function kH(r,g,v){if(v===void 0||(l5&1073741824)!==0&&(Er&261930)===0)return r.memoizedState=g;return r.memoizedState=v,r=HW(),Nr.lanes|=r,bw|=r,v}function ou(r,g,v,b){if(S0(v,g))return v;if(zh.current!==null)return r=kH(r,v,b),S0(r,g)||(ag=!0),r;if((l5&42)===0||(l5&1073741824)!==0&&(Er&261930)===0)return ag=!0,r.memoizedState=v;return r=HW(),Nr.lanes|=r,bw|=r,g}function Ro(){k.asyncTransitions--}function Hu(r,g,v,b,l){var o=Hg.p;Hg.p=o!==0&&o<E1?o:E1;var q=k.T,P={};P._updatedFibers=new Set,k.T=P,eH(r,!1,g,v);try{var G=l(),Y=k.S;if(Y!==null&&Y(P,G),G!==null&&typeof G==="object"&&typeof G.then==="function"){k.asyncTransitions++,G.then(Ro,Ro);var N=lR(G,b);Y2(r,g,N,o1(r))}else Y2(r,g,b,o1(r))}catch(Z){Y2(r,g,{then:function(){},status:"rejected",reason:Z},o1(r))}finally{Hg.p=o,q!==null&&P.types!==null&&(q.types!==null&&q.types!==P.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),q.types=P.types),k.T=q,q===null&&P._updatedFibers&&(r=P._updatedFibers.size,P._updatedFibers.clear(),10<r&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function DH(r,g,v,b){if(r.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var l=Ou(r).queue;bR(r),Hu(r,l,g,Yb,v===null?R:function(){return qu(r),v(b)})}function Ou(r){var g=r.memoizedState;if(g!==null)return g;g={memoizedState:Yb,baseState:Yb,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:V1,lastRenderedState:Yb},next:null};var v={};return g.next={memoizedState:v,baseState:v,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:V1,lastRenderedState:v},next:null},r.memoizedState=g,r=r.alternate,r!==null&&(r.memoizedState=g),g}function qu(r){k.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var g=Ou(r);g.next===null&&(g=r.alternate.memoizedState),Y2(r,g.next.queue,{},o1(r))}function iH(){var r=LH(!1);return r=Hu.bind(null,Nr,r.queue,!0,!1),I0().memoizedState=r,[!1,r]}function Au(){var r=_b(V1)[0],g=qg().memoizedState;return[typeof r==="boolean"?r:G2(r),g]}function Pu(){var r=X2(V1)[0],g=qg().memoizedState;return[typeof r==="boolean"?r:G2(r),g]}function jw(){return Bg(Fl)}function VH(){var r=I0(),g=Yg.identifierPrefix;if(ar){var v=g5,b=r5;v=(b&~(1<<32-x0(b)-1)).toString(32)+v,g="_"+g+"R_"+v,v=$6++,0<v&&(g+="H"+v.toString(32)),g+="_"}else v=y$++,g="_"+g+"r_"+v.toString(32)+"_";return r.memoizedState=g}function _H(){return I0().memoizedState=PR.bind(null,Nr)}function PR(r,g){for(var v=r.return;v!==null;){switch(v.tag){case 24:case 3:var b=o1(v),l=T5(b),o=C5(v,l,b);o!==null&&(Ov(b,"refresh()",r),Cg(o,v,b),u2(o,v,b)),r=oH(),g!==null&&g!==void 0&&o!==null&&console.error("The seed argument is not enabled outside experimental channels."),l.payload={cache:r};return}v=v.return}}function uR(r,g,v){var b=arguments;typeof b[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),b=o1(r);var l={lane:b,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};Ko(r)?Wu(g,l):(l=c8(r,g,l,b),l!==null&&(Ov(b,"dispatch()",r),Cg(l,r,b),Mu(l,g,b)))}function uu(r,g,v){var b=arguments;typeof b[3]==="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),b=o1(r),Y2(r,g,v,b)&&Ov(b,"setState()",r)}function Y2(r,g,v,b){var l={lane:b,revertLane:0,gesture:null,action:v,hasEagerState:!1,eagerState:null,next:null};if(Ko(r))Wu(g,l);else{var o=r.alternate;if(r.lanes===0&&(o===null||o.lanes===0)&&(o=g.lastRenderedReducer,o!==null)){var q=k.H;k.H=j1;try{var P=g.lastRenderedState,G=o(P,v);if(l.hasEagerState=!0,l.eagerState=G,S0(G,P))return c4(r,g,l,0),Yg===null&&f4(),!1}catch(Y){}finally{k.H=q}}if(v=c8(r,g,l,b),v!==null)return Cg(v,r,b),Mu(v,g,b),!0}return!1}function eH(r,g,v,b){if(k.T===null&&vb===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),b={lane:2,revertLane:YO(),gesture:null,action:b,hasEagerState:!1,eagerState:null,next:null},Ko(r)){if(g)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else g=c8(r,v,b,2),g!==null&&(Ov(2,"setOptimistic()",r),Cg(g,r,2))}function Ko(r){var g=r.alternate;return r===Nr||g!==null&&g===Nr}function Wu(r,g){$h=K6=!0;var v=r.pending;v===null?g.next=g:(g.next=v.next,v.next=g),r.pending=g}function Mu(r,g,v){if((v&4194048)!==0){var b=g.lanes;b&=r.pendingLanes,v|=b,g.lanes=v,xw(r,v)}}function EH(r){if(r!==null&&typeof r!=="function"){var g=String(r);PM.has(g)||(PM.add(g),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",r))}}function yH(r,g,v,b){var l=r.memoizedState,o=v(b,l);if(r.mode&F0){Qg(!0);try{o=v(b,l)}finally{Qg(!1)}}o===void 0&&(g=E(g)||"Component",HM.has(g)||(HM.add(g),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",g))),l=o===null||o===void 0?l:tr({},l,o),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}function Gu(r,g,v,b,l,o,q){var P=r.stateNode;if(typeof P.shouldComponentUpdate==="function"){if(v=P.shouldComponentUpdate(b,o,q),r.mode&F0){Qg(!0);try{v=P.shouldComponentUpdate(b,o,q)}finally{Qg(!1)}}return v===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",E(g)||"Component"),v}return g.prototype&&g.prototype.isPureReactComponent?!l2(v,b)||!l2(l,o):!0}function Xu(r,g,v,b){var l=g.state;typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps(v,b),typeof g.UNSAFE_componentWillReceiveProps==="function"&&g.UNSAFE_componentWillReceiveProps(v,b),g.state!==l&&(r=D(r)||"Component",wM.has(r)||(wM.add(r),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",r)),Dq.enqueueReplaceState(g,g.state,null))}function tw(r,g){var v=g;if("ref"in g){v={};for(var b in g)b!=="ref"&&(v[b]=g[b])}if(r=r.defaultProps){v===g&&(v=tr({},v));for(var l in r)v[l]===void 0&&(v[l]=r[l])}return v}function Yu(r){Mq(r),console.warn(`%s

%s
`,Uh?"An error occurred in the <"+Uh+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function Ju(r){var g=Uh?"The above error occurred in the <"+Uh+"> component.":"The above error occurred in one of your React components.",v="React will try to recreate this component tree from scratch using the error boundary you provided, "+((iq||"Anonymous")+".");if(typeof r==="object"&&r!==null&&typeof r.environmentName==="string"){var b=r.environmentName;r=[`%o

%s

%s
`,r,g,v].slice(0),typeof r[0]==="string"?r.splice(0,1,fM+" "+r[0],cM,c6+b+c6,pM):r.splice(0,0,fM,cM,c6+b+c6,pM),r.unshift(console),b=AU.apply(console.error,r),b()}else console.error(`%o

%s

%s
`,r,g,v)}function Qu(r){Mq(r)}function $o(r,g){try{Uh=g.source?D(g.source):null,iq=null;var v=g.value;if(k.actQueue!==null)k.thrownErrors.push(v);else{var b=r.onUncaughtError;b(v,{componentStack:g.stack})}}catch(l){setTimeout(function(){throw l})}}function zu(r,g,v){try{Uh=v.source?D(v.source):null,iq=D(g);var b=r.onCaughtError;b(v.value,{componentStack:v.stack,errorBoundary:g.tag===1?g.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function nH(r,g,v){return v=T5(v),v.tag=xq,v.payload={element:null},v.callback=function(){Hr(g.source,$o,r,g)},v}function jH(r){return r=T5(r),r.tag=xq,r}function tH(r,g,v,b){var l=v.type.getDerivedStateFromError;if(typeof l==="function"){var o=b.value;r.payload=function(){return l(o)},r.callback=function(){W9(v),Hr(b.source,zu,g,v,b)}}var q=v.stateNode;q!==null&&typeof q.componentDidCatch==="function"&&(r.callback=function(){W9(v),Hr(b.source,zu,g,v,b),typeof l!=="function"&&(lw===null?lw=new Set([this]):lw.add(this)),V$(this,b),typeof l==="function"||(v.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",D(v)||"Unknown")})}function WR(r,g,v,b,l){if(v.flags|=32768,Lv&&L2(r,l),b!==null&&typeof b==="object"&&typeof b.then==="function"){if(g=v.alternate,g!==null&&ib(g,v,l,!0),ar&&(Nv=!0),v=u1.current,v!==null){switch(v.tag){case 31:case 13:return x1===null?To():v.alternate===null&&xg===q5&&(xg=F6),v.flags&=-257,v.flags|=65536,v.lanes=l,b===Q6?v.flags|=16384:(g=v.updateQueue,g===null?v.updateQueue=new Set([b]):g.add(b),WO(r,b,l)),!1;case 22:return v.flags|=65536,b===Q6?v.flags|=16384:(g=v.updateQueue,g===null?(g={transitions:null,markerInstances:null,retryQueue:new Set([b])},v.updateQueue=g):(v=g.retryQueue,v===null?g.retryQueue=new Set([b]):v.add(b)),WO(r,b,l)),!1}throw Error("Unexpected Suspense handler tag ("+v.tag+"). This is a bug in React.")}return WO(r,b,l),To(),!1}if(ar)return Nv=!0,g=u1.current,g!==null?((g.flags&65536)===0&&(g.flags|=256),g.flags|=65536,g.lanes=l,b!==zq&&H2(w1(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:b}),v))):(b!==zq&&H2(w1(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:b}),v)),r=r.current.alternate,r.flags|=65536,l&=-l,r.lanes|=l,b=w1(b,v),l=nH(r.stateNode,b,l),qo(r,l),xg!==vw&&(xg=Hb)),!1;var o=w1(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:b}),v);if(Yl===null?Yl=[o]:Yl.push(o),xg!==vw&&(xg=Hb),g===null)return!0;b=w1(b,v),v=g;do{switch(v.tag){case 3:return v.flags|=65536,r=l&-l,v.lanes|=r,r=nH(v.stateNode,b,r),qo(v,r),!1;case 1:if(g=v.type,o=v.stateNode,(v.flags&128)===0&&(typeof g.getDerivedStateFromError==="function"||o!==null&&typeof o.componentDidCatch==="function"&&(lw===null||!lw.has(o))))return v.flags|=65536,l&=-l,v.lanes|=l,l=jH(l),tH(l,r,v,b),qo(v,l),!1}v=v.return}while(v!==null);return!1}function W0(r,g,v,b){g.child=r===null?j3(g,null,v,b):lb(g,r.child,v,b)}function Ru(r,g,v,b,l){v=v.render;var o=g.ref;if("ref"in b){var q={};for(var P in b)P!=="ref"&&(q[P]=b[P])}else q=b;if(ew(g),b=YH(r,g,v,q,o,l),P=QH(),r!==null&&!ag)return zH(r,g,l),fv(r,g,l);return ar&&P&&gH(g),g.flags|=1,W0(r,g,b,l),g.child}function Ku(r,g,v,b,l){if(r===null){var o=v.type;if(typeof o==="function"&&!a8(o)&&o.defaultProps===void 0&&v.compare===null)return v=Dw(o),g.tag=15,g.type=v,cH(g,o),$u(r,g,v,b,l);return r=d8(v.type,null,b,g,g.mode,l),r.ref=g.ref,r.return=g,g.child=r}if(o=r.child,!gO(r,l)){var q=o.memoizedProps;if(v=v.compare,v=v!==null?v:l2,v(q,b)&&r.ref===g.ref)return fv(r,g,l)}return g.flags|=1,r=yv(o,b),r.ref=g.ref,r.return=g,g.child=r}function $u(r,g,v,b,l){if(r!==null){var o=r.memoizedProps;if(l2(o,b)&&r.ref===g.ref&&g.type===r.type)if(ag=!1,g.pendingProps=b=o,gO(r,l))(r.flags&131072)!==0&&(ag=!0);else return g.lanes=r.lanes,fv(r,g,l)}return fH(r,g,v,b,l)}function Uu(r,g,v,b){var l=b.children,o=r!==null?r.memoizedState:null;if(r===null&&g.stateNode===null&&(g.stateNode={_visibility:t2,_pendingMarkers:null,_retryCache:null,_transitions:null}),b.mode==="hidden"){if((g.flags&128)!==0){if(o=o!==null?o.baseLanes|v:v,r!==null){b=g.child=r.child;for(l=0;b!==null;)l=l|b.lanes|b.childLanes,b=b.sibling;b=l&~o}else b=0,g.child=null;return Lu(r,g,o,v,b)}if((v&536870912)!==0)g.memoizedState={baseLanes:0,cachePool:null},r!==null&&bo(g,o!==null?o.cachePool:null),o!==null?_9(g,o):WH(g),e9(g);else return b=g.lanes=536870912,Lu(r,g,o!==null?o.baseLanes|v:v,v,b)}else o!==null?(bo(g,o.cachePool),_9(g,o),m5(g),g.memoizedState=null):(r!==null&&bo(g,null),WH(g),m5(g));return W0(r,g,l,v),g.child}function J2(r,g){return r!==null&&r.tag===22||g.stateNode!==null||(g.stateNode={_visibility:t2,_pendingMarkers:null,_retryCache:null,_transitions:null}),g.sibling}function Lu(r,g,v,b,l){var o=qH();return o=o===null?null:{parent:fg._currentValue,pool:o},g.memoizedState={baseLanes:v,cachePool:o},r!==null&&bo(g,null),WH(g),e9(g),r!==null&&ib(r,g,b,!0),g.childLanes=l,null}function Uo(r,g){var v=g.hidden;return v!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,v===!0?"hidden":v===!1?"hidden={false}":"hidden={...}",v?'mode="hidden"':'mode="visible"'),g=Fo({mode:g.mode,children:g.children},r.mode),g.ref=r.ref,r.child=g,g.return=r,g}function Fu(r,g,v){return lb(g,r.child,null,v),r=Uo(g,g.pendingProps),r.flags|=2,l1(g),g.memoizedState=null,r}function MR(r,g,v){var b=g.pendingProps,l=(g.flags&128)!==0;if(g.flags&=-129,r===null){if(ar){if(b.mode==="hidden")return r=Uo(g,b),g.lanes=536870912,J2(null,r);if(GH(g),(r=Lg)?(v=dW(r,Z1),v=v!==null&&v.data===Wb?v:null,v!==null&&(b={dehydrated:v,treeContext:J9(),retryLane:536870912,hydrationErrors:null},g.memoizedState=b,b=X9(v),b.return=g,g.child=b,X0=g,Lg=null)):v=null,v===null)throw d4(g,r),Z5(g);return g.lanes=536870912,null}return Uo(g,b)}var o=r.memoizedState;if(o!==null){var q=o.dehydrated;if(GH(g),l)if(g.flags&256)g.flags&=-257,g=Fu(r,g,v);else if(g.memoizedState!==null)g.child=r.child,g.flags|=128,g=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if(z9(),(v&536870912)!==0&&xo(g),ag||ib(r,g,v,!1),l=(v&r.childLanes)!==0,ag||l){if(b=Yg,b!==null&&(q=Tw(b,v),q!==0&&q!==o.retryLane))throw o.retryLane=q,U0(r,q),Cg(b,r,q),Vq;To(),g=Fu(r,g,v)}else r=o.treeContext,Lg=H1(q.nextSibling),X0=g,ar=!0,c5=null,Nv=!1,P1=null,Z1=!1,r!==null&&Q9(g,r),g=Uo(g,b),g.flags|=4096;return g}return o=r.child,b={mode:b.mode,children:b.children},(v&536870912)!==0&&(v&r.lanes)!==0&&xo(g),r=yv(o,b),r.ref=g.ref,g.child=r,r.return=g,r}function Lo(r,g){var v=g.ref;if(v===null)r!==null&&r.ref!==null&&(g.flags|=4194816);else{if(typeof v!=="function"&&typeof v!=="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");if(r===null||r.ref!==v)g.flags|=4194816}}function fH(r,g,v,b,l){if(v.prototype&&typeof v.prototype.render==="function"){var o=E(v)||"Unknown";uM[o]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",o,o),uM[o]=!0)}if(g.mode&F0&&n1.recordLegacyContextWarning(g,null),r===null&&(cH(g,g.type),v.contextTypes&&(o=E(v)||"Unknown",MM[o]||(MM[o]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",o)))),ew(g),v=YH(r,g,v,b,void 0,l),b=QH(),r!==null&&!ag)return zH(r,g,l),fv(r,g,l);return ar&&b&&gH(g),g.flags|=1,W0(r,g,v,l),g.child}function Bu(r,g,v,b,l,o){if(ew(g),H5=-1,Al=r!==null&&r.type!==g.type,g.updateQueue=null,v=JH(g,b,v,l),E9(r,g),b=QH(),r!==null&&!ag)return zH(r,g,o),fv(r,g,o);return ar&&b&&gH(g),g.flags|=1,W0(r,g,v,o),g.child}function Nu(r,g,v,b,l){switch(W(g)){case!1:var o=g.stateNode,q=new g.type(g.memoizedProps,o.context).state;o.updater.enqueueSetState(o,q,null);break;case!0:g.flags|=128,g.flags|=65536,o=Error("Simulated error coming from DevTools");var P=l&-l;if(g.lanes|=P,q=Yg,q===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");P=jH(P),tH(P,q,g,w1(o,g)),qo(g,P)}if(ew(g),g.stateNode===null){if(q=f5,o=v.contextType,"contextType"in v&&o!==null&&(o===void 0||o.$$typeof!==Kv)&&!AM.has(v)&&(AM.add(v),P=o===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof o!=="object"?" However, it is set to a "+typeof o+".":o.$$typeof===_O?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(o).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",E(v)||"Component",P)),typeof o==="object"&&o!==null&&(q=Bg(o)),o=new v(b,q),g.mode&F0){Qg(!0);try{o=new v(b,q)}finally{Qg(!1)}}if(q=g.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Dq,g.stateNode=o,o._reactInternals=g,o._reactInternalInstance=vM,typeof v.getDerivedStateFromProps==="function"&&q===null&&(q=E(v)||"Component",bM.has(q)||(bM.add(q),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",q,o.state===null?"null":"undefined",q))),typeof v.getDerivedStateFromProps==="function"||typeof o.getSnapshotBeforeUpdate==="function"){var G=P=q=null;if(typeof o.componentWillMount==="function"&&o.componentWillMount.__suppressDeprecationWarning!==!0?q="componentWillMount":typeof o.UNSAFE_componentWillMount==="function"&&(q="UNSAFE_componentWillMount"),typeof o.componentWillReceiveProps==="function"&&o.componentWillReceiveProps.__suppressDeprecationWarning!==!0?P="componentWillReceiveProps":typeof o.UNSAFE_componentWillReceiveProps==="function"&&(P="UNSAFE_componentWillReceiveProps"),typeof o.componentWillUpdate==="function"&&o.componentWillUpdate.__suppressDeprecationWarning!==!0?G="componentWillUpdate":typeof o.UNSAFE_componentWillUpdate==="function"&&(G="UNSAFE_componentWillUpdate"),q!==null||P!==null||G!==null){o=E(v)||"Component";var Y=typeof v.getDerivedStateFromProps==="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";lM.has(o)||(lM.add(o),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,o,Y,q!==null?`
  `+q:"",P!==null?`
  `+P:"",G!==null?`
  `+G:""))}}o=g.stateNode,q=E(v)||"Component",o.render||(v.prototype&&typeof v.prototype.render==="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",q):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",q)),!o.getInitialState||o.getInitialState.isReactClassApproved||o.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",q),o.getDefaultProps&&!o.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",q),o.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",q),v.childContextTypes&&!qM.has(v)&&(qM.add(v),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",q)),v.contextTypes&&!OM.has(v)&&(OM.add(v),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",q)),typeof o.componentShouldUpdate==="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",q),v.prototype&&v.prototype.isPureReactComponent&&typeof o.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",E(v)||"A pure component"),typeof o.componentDidUnmount==="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",q),typeof o.componentDidReceiveProps==="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",q),typeof o.componentWillRecieveProps==="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",q),typeof o.UNSAFE_componentWillRecieveProps==="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",q),P=o.props!==b,o.props!==void 0&&P&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",q),o.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",q,q),typeof o.getSnapshotBeforeUpdate!=="function"||typeof o.componentDidUpdate==="function"||hM.has(v)||(hM.add(v),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",E(v))),typeof o.getDerivedStateFromProps==="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",q),typeof o.getDerivedStateFromError==="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",q),typeof v.getSnapshotBeforeUpdate==="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",q),(P=o.state)&&(typeof P!=="object"||v0(P))&&console.error("%s.state: must be set to an object or null",q),typeof o.getChildContext==="function"&&typeof v.childContextTypes!=="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",q),o=g.stateNode,o.props=b,o.state=g.memoizedState,o.refs={},PH(g),q=v.contextType,o.context=typeof q==="object"&&q!==null?Bg(q):f5,o.state===b&&(q=E(v)||"Component",oM.has(q)||(oM.add(q),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",q))),g.mode&F0&&n1.recordLegacyContextWarning(g,o),n1.recordUnsafeLifecycleWarnings(g,o),o.state=g.memoizedState,q=v.getDerivedStateFromProps,typeof q==="function"&&(yH(g,v,q,b),o.state=g.memoizedState),typeof v.getDerivedStateFromProps==="function"||typeof o.getSnapshotBeforeUpdate==="function"||typeof o.UNSAFE_componentWillMount!=="function"&&typeof o.componentWillMount!=="function"||(q=o.state,typeof o.componentWillMount==="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==="function"&&o.UNSAFE_componentWillMount(),q!==o.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",D(g)||"Component"),Dq.enqueueReplaceState(o,o.state,null)),M2(g,b,o,l),W2(),o.state=g.memoizedState),typeof o.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&y1)!==Br&&(g.flags|=134217728),o=!0}else if(r===null){o=g.stateNode;var N=g.memoizedProps;P=tw(v,N),o.props=P;var Z=o.context;G=v.contextType,q=f5,typeof G==="object"&&G!==null&&(q=Bg(G)),Y=v.getDerivedStateFromProps,G=typeof Y==="function"||typeof o.getSnapshotBeforeUpdate==="function",N=g.pendingProps!==N,G||typeof o.UNSAFE_componentWillReceiveProps!=="function"&&typeof o.componentWillReceiveProps!=="function"||(N||Z!==q)&&Xu(g,o,b,q),gw=!1;var U=g.memoizedState;o.state=U,M2(g,b,o,l),W2(),Z=g.memoizedState,N||U!==Z||gw?(typeof Y==="function"&&(yH(g,v,Y,b),Z=g.memoizedState),(P=gw||Gu(g,v,P,b,U,Z,q))?(G||typeof o.UNSAFE_componentWillMount!=="function"&&typeof o.componentWillMount!=="function"||(typeof o.componentWillMount==="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&y1)!==Br&&(g.flags|=134217728)):(typeof o.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&y1)!==Br&&(g.flags|=134217728),g.memoizedProps=b,g.memoizedState=Z),o.props=b,o.state=Z,o.context=q,o=P):(typeof o.componentDidMount==="function"&&(g.flags|=4194308),(g.mode&y1)!==Br&&(g.flags|=134217728),o=!1)}else{o=g.stateNode,uH(r,g),q=g.memoizedProps,G=tw(v,q),o.props=G,Y=g.pendingProps,U=o.context,Z=v.contextType,P=f5,typeof Z==="object"&&Z!==null&&(P=Bg(Z)),N=v.getDerivedStateFromProps,(Z=typeof N==="function"||typeof o.getSnapshotBeforeUpdate==="function")||typeof o.UNSAFE_componentWillReceiveProps!=="function"&&typeof o.componentWillReceiveProps!=="function"||(q!==Y||U!==P)&&Xu(g,o,b,P),gw=!1,U=g.memoizedState,o.state=U,M2(g,b,o,l),W2();var T=g.memoizedState;q!==Y||U!==T||gw||r!==null&&r.dependencies!==null&&ro(r.dependencies)?(typeof N==="function"&&(yH(g,v,N,b),T=g.memoizedState),(G=gw||Gu(g,v,G,b,U,T,P)||r!==null&&r.dependencies!==null&&ro(r.dependencies))?(Z||typeof o.UNSAFE_componentWillUpdate!=="function"&&typeof o.componentWillUpdate!=="function"||(typeof o.componentWillUpdate==="function"&&o.componentWillUpdate(b,T,P),typeof o.UNSAFE_componentWillUpdate==="function"&&o.UNSAFE_componentWillUpdate(b,T,P)),typeof o.componentDidUpdate==="function"&&(g.flags|=4),typeof o.getSnapshotBeforeUpdate==="function"&&(g.flags|=1024)):(typeof o.componentDidUpdate!=="function"||q===r.memoizedProps&&U===r.memoizedState||(g.flags|=4),typeof o.getSnapshotBeforeUpdate!=="function"||q===r.memoizedProps&&U===r.memoizedState||(g.flags|=1024),g.memoizedProps=b,g.memoizedState=T),o.props=b,o.state=T,o.context=P,o=G):(typeof o.componentDidUpdate!=="function"||q===r.memoizedProps&&U===r.memoizedState||(g.flags|=4),typeof o.getSnapshotBeforeUpdate!=="function"||q===r.memoizedProps&&U===r.memoizedState||(g.flags|=1024),o=!1)}if(P=o,Lo(r,g),q=(g.flags&128)!==0,P||q){if(P=g.stateNode,y0(g),q&&typeof v.getDerivedStateFromError!=="function")v=null,m0=-1;else if(v=x3(P),g.mode&F0){Qg(!0);try{x3(P)}finally{Qg(!1)}}g.flags|=1,r!==null&&q?(g.child=lb(g,r.child,null,l),g.child=lb(g,null,v,l)):W0(r,g,v,l),g.memoizedState=P.state,r=g.child}else r=fv(r,g,l);return l=g.stateNode,o&&l.props!==b&&(Lh||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",D(g)||"a component"),Lh=!0),r}function Zu(r,g,v,b){return _w(),g.flags|=256,W0(r,g,v,b),g.child}function cH(r,g){g&&g.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,g.displayName||g.name||"Component"),typeof g.getDerivedStateFromProps==="function"&&(r=E(g)||"Unknown",GM[r]||(console.error("%s: Function components do not support getDerivedStateFromProps.",r),GM[r]=!0)),typeof g.contextType==="object"&&g.contextType!==null&&(g=E(g)||"Unknown",WM[g]||(console.error("%s: Function components do not support contextType.",g),WM[g]=!0))}function pH(r){return{baseLanes:r,cachePool:B9()}}function aH(r,g,v){return r=r!==null?r.childLanes&~v:0,g&&(r|=a0),r}function Iu(r,g,v){var b,l=g.pendingProps;u(g)&&(g.flags|=128);var o=!1,q=(g.flags&128)!==0;if((b=q)||(b=r!==null&&r.memoizedState===null?!1:(eg.current&Ol)!==0),b&&(o=!0,g.flags&=-129),b=(g.flags&32)!==0,g.flags&=-33,r===null){if(ar){if(o?S5(g):m5(g),(r=Lg)?(v=dW(r,Z1),v=v!==null&&v.data!==Wb?v:null,v!==null&&(b={dehydrated:v,treeContext:J9(),retryLane:536870912,hydrationErrors:null},g.memoizedState=b,b=X9(v),b.return=g,g.child=b,X0=g,Lg=null)):v=null,v===null)throw d4(g,r),Z5(g);return ZO(v)?g.lanes=32:g.lanes=536870912,null}var P=l.children;if(l=l.fallback,o){m5(g);var G=g.mode;return P=Fo({mode:"hidden",children:P},G),l=iw(l,G,v,null),P.return=g,l.return=g,P.sibling=l,g.child=P,l=g.child,l.memoizedState=pH(v),l.childLanes=aH(r,b,v),g.memoizedState=_q,J2(null,l)}return S5(g),dH(g,P)}var Y=r.memoizedState;if(Y!==null){var N=Y.dehydrated;if(N!==null){if(q)g.flags&256?(S5(g),g.flags&=-257,g=sH(r,g,v)):g.memoizedState!==null?(m5(g),g.child=r.child,g.flags|=128,g=null):(m5(g),P=l.fallback,G=g.mode,l=Fo({mode:"visible",children:l.children},G),P=iw(P,G,v,null),P.flags|=2,l.return=g,P.return=g,l.sibling=P,g.child=l,lb(g,r.child,null,v),l=g.child,l.memoizedState=pH(v),l.childLanes=aH(r,b,v),g.memoizedState=_q,g=J2(null,l));else if(S5(g),z9(),(v&536870912)!==0&&xo(g),ZO(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b){P=b.dgst;var Z=b.msg;G=b.stck;var U=b.cstck}o=Z,b=P,l=G,N=U,P=o,G=N,P=P?Error(P):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),P.stack=l||"",P.digest=b,b=G===void 0?null:G,l={value:P,source:null,stack:b},typeof b==="string"&&Qq.set(P,l),H2(l),g=sH(r,g,v)}else if(ag||ib(r,g,v,!1),b=(v&r.childLanes)!==0,ag||b){if(b=Yg,b!==null&&(l=Tw(b,v),l!==0&&l!==Y.retryLane))throw Y.retryLane=l,U0(r,l),Cg(b,r,l),Vq;NO(N)||To(),g=sH(r,g,v)}else NO(N)?(g.flags|=192,g.child=r.child,g=null):(r=Y.treeContext,Lg=H1(N.nextSibling),X0=g,ar=!0,c5=null,Nv=!1,P1=null,Z1=!1,r!==null&&Q9(g,r),g=dH(g,l.children),g.flags|=4096);return g}}if(o)return m5(g),P=l.fallback,G=g.mode,U=r.child,N=U.sibling,l=yv(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&65011712,N!==null?P=yv(N,P):(P=iw(P,G,v,null),P.flags|=2),P.return=g,l.return=g,l.sibling=P,g.child=l,J2(null,l),l=g.child,P=r.child.memoizedState,P===null?P=pH(v):(G=P.cachePool,G!==null?(U=fg._currentValue,G=G.parent!==U?{parent:U,pool:U}:G):G=B9(),P={baseLanes:P.baseLanes|v,cachePool:G}),l.memoizedState=P,l.childLanes=aH(r,b,v),g.memoizedState=_q,J2(r.child,l);return Y!==null&&(v&62914560)===v&&(v&r.lanes)!==0&&xo(g),S5(g),v=r.child,r=v.sibling,v=yv(v,{mode:"visible",children:l.children}),v.return=g,v.sibling=null,r!==null&&(b=g.deletions,b===null?(g.deletions=[r],g.flags|=16):b.push(r)),g.child=v,g.memoizedState=null,v}function dH(r,g){return g=Fo({mode:"visible",children:g},r.mode),g.return=r,r.child=g}function Fo(r,g){return r=K(22,r,null,g),r.lanes=0,r}function sH(r,g,v){return lb(g,r.child,null,v),r=dH(g,g.pendingProps.children),r.flags|=2,g.memoizedState=null,r}function xu(r,g,v){r.lanes|=g;var b=r.alternate;b!==null&&(b.lanes|=g),hH(r.return,g,v)}function rO(r,g,v,b,l,o){var q=r.memoizedState;q===null?r.memoizedState={isBackwards:g,rendering:null,renderingStartTime:0,last:b,tail:v,tailMode:l,treeForkCount:o}:(q.isBackwards=g,q.rendering=null,q.renderingStartTime=0,q.last=b,q.tail=v,q.tailMode=l,q.treeForkCount=o)}function Tu(r,g,v){var b=g.pendingProps,l=b.revealOrder,o=b.tail,q=b.children,P=eg.current;if((b=(P&Ol)!==0)?(P=P&Rh|Ol,g.flags|=128):P&=Rh,Rr(eg,P,g),P=l==null?"null":l,l!=="forwards"&&l!=="unstable_legacy-backwards"&&l!=="together"&&l!=="independent"&&!XM[P])if(XM[P]=!0,l==null)console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');else if(l==="backwards")console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');else if(typeof l==="string")switch(l.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',l,l.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',l,l.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l);if(P=o==null?"null":o,!L6[P])if(o==null){if(l==="forwards"||l==="backwards"||l==="unstable_legacy-backwards")L6[P]=!0,console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')}else o!=="visible"&&o!=="collapsed"&&o!=="hidden"?(L6[P]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',o)):l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&(L6[P]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',o));r:if((l==="forwards"||l==="backwards"||l==="unstable_legacy-backwards")&&q!==void 0&&q!==null&&q!==!1)if(v0(q)){for(P=0;P<q.length;P++)if(!D9(q[P],P))break r}else if(P=m(q),typeof P==="function"){if(P=P.call(q))for(var G=P.next(),Y=0;!G.done;G=P.next()){if(!D9(G.value,Y))break r;Y++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',l);if(W0(r,g,q,v),ar?(N5(),q=f2):q=0,!b&&r!==null&&(r.flags&128)!==0)r:for(r=g.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&xu(r,v,g);else if(r.tag===19)xu(r,v,g);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===g)break r;for(;r.sibling===null;){if(r.return===null||r.return===g)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}switch(l){case"forwards":v=g.child;for(l=null;v!==null;)r=v.alternate,r!==null&&Ao(r)===null&&(l=v),v=v.sibling;v=l,v===null?(l=g.child,g.child=null):(l=v.sibling,v.sibling=null),rO(g,!1,l,v,o,q);break;case"backwards":case"unstable_legacy-backwards":v=null,l=g.child;for(g.child=null;l!==null;){if(r=l.alternate,r!==null&&Ao(r)===null){g.child=l;break}r=l.sibling,l.sibling=v,v=l,l=r}rO(g,!0,v,null,o,q);break;case"together":rO(g,!1,null,null,void 0,q);break;default:g.memoizedState=null}return g.child}function fv(r,g,v){if(r!==null&&(g.dependencies=r.dependencies),m0=-1,bw|=g.lanes,(v&g.childLanes)===0)if(r!==null){if(ib(r,g,v,!1),(v&g.childLanes)===0)return null}else return null;if(r!==null&&g.child!==r.child)throw Error("Resuming work not yet implemented.");if(g.child!==null){r=g.child,v=yv(r,r.pendingProps),g.child=v;for(v.return=g;r.sibling!==null;)r=r.sibling,v=v.sibling=yv(r,r.pendingProps),v.return=g;v.sibling=null}return g.child}function gO(r,g){if((r.lanes&g)!==0)return!0;return r=r.dependencies,r!==null&&ro(r)?!0:!1}function GR(r,g,v){switch(g.tag){case 3:_(g,g.stateNode.containerInfo),I5(g,fg,r.memoizedState.cache),_w();break;case 27:case 5:vr(g);break;case 4:_(g,g.stateNode.containerInfo);break;case 10:I5(g,g.type,g.memoizedProps.value);break;case 12:(v&g.childLanes)!==0&&(g.flags|=4),g.flags|=2048;var b=g.stateNode;b.effectDuration=-0,b.passiveEffectDuration=-0;break;case 31:if(g.memoizedState!==null)return g.flags|=128,GH(g),null;break;case 13:if(b=g.memoizedState,b!==null){if(b.dehydrated!==null)return S5(g),g.flags|=128,null;if((v&g.child.childLanes)!==0)return Iu(r,g,v);return S5(g),r=fv(r,g,v),r!==null?r.sibling:null}S5(g);break;case 19:var l=(r.flags&128)!==0;if(b=(v&g.childLanes)!==0,b||(ib(r,g,v,!1),b=(v&g.childLanes)!==0),l){if(b)return Tu(r,g,v);g.flags|=128}if(l=g.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Rr(eg,eg.current,g),b)break;else return null;case 22:return g.lanes=0,Uu(r,g,v,g.pendingProps);case 24:I5(g,fg,r.memoizedState.cache)}return fv(r,g,v)}function vO(r,g,v){if(g._debugNeedsRemount&&r!==null){v=d8(g.type,g.key,g.pendingProps,g._debugOwner||null,g.mode,g.lanes),v._debugStack=g._debugStack,v._debugTask=g._debugTask;var b=g.return;if(b===null)throw Error("Cannot swap the root fiber.");if(r.alternate=null,g.alternate=null,v.index=g.index,v.sibling=g.sibling,v.return=g.return,v.ref=g.ref,v._debugInfo=g._debugInfo,g===b.child)b.child=v;else{var l=b.child;if(l===null)throw Error("Expected parent to have a child.");for(;l.sibling!==g;)if(l=l.sibling,l===null)throw Error("Expected to find the previous sibling.");l.sibling=v}return g=b.deletions,g===null?(b.deletions=[r],b.flags|=16):g.push(r),v.flags|=2,v}if(r!==null)if(r.memoizedProps!==g.pendingProps||g.type!==r.type)ag=!0;else{if(!gO(r,v)&&(g.flags&128)===0)return ag=!1,GR(r,g,v);ag=(r.flags&131072)!==0?!0:!1}else{if(ag=!1,b=ar)N5(),b=(g.flags&1048576)!==0;b&&(b=g.index,N5(),Y9(g,f2,b))}switch(g.lanes=0,g.tag){case 16:r:if(b=g.pendingProps,r=x5(g.elementType),g.type=r,typeof r==="function")a8(r)?(b=tw(r,b),g.tag=1,g.type=r=Dw(r),g=Nu(null,g,r,b,v)):(g.tag=0,cH(g,r),g.type=r=Dw(r),g=fH(null,g,r,b,v));else{if(r!==void 0&&r!==null){if(l=r.$$typeof,l===S2){g.tag=11,g.type=r=p8(r),g=Ru(null,g,r,b,v);break r}else if(l===to){g.tag=14,g=Ku(null,g,r,b,v);break r}}throw g="",r!==null&&typeof r==="object"&&r.$$typeof===O1&&(g=" Did you wrap a component in React.lazy() more than once?"),v=E(r)||r,Error("Element type is invalid. Received a promise that resolves to: "+v+". Lazy element type must resolve to a class or function."+g)}return g;case 0:return fH(r,g,g.type,g.pendingProps,v);case 1:return b=g.type,l=tw(b,g.pendingProps),Nu(r,g,b,l,v);case 3:r:{if(_(g,g.stateNode.containerInfo),r===null)throw Error("Should have a current fiber. This is a bug in React.");b=g.pendingProps;var o=g.memoizedState;l=o.element,uH(r,g),M2(g,b,null,v);var q=g.memoizedState;if(b=q.cache,I5(g,fg,b),b!==o.cache&&lH(g,[fg],v,!0),W2(),b=q.element,o.isDehydrated)if(o={element:b,isDehydrated:!1,cache:q.cache},g.updateQueue.baseState=o,g.memoizedState=o,g.flags&256){g=Zu(r,g,b,v);break r}else if(b!==l){l=w1(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),g),H2(l),g=Zu(r,g,b,v);break r}else{switch(r=g.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}Lg=H1(r.firstChild),X0=g,ar=!0,c5=null,Nv=!1,P1=null,Z1=!0,v=j3(g,null,b,v);for(g.child=v;v;)v.flags=v.flags&-3|4096,v=v.sibling}else{if(_w(),b===l){g=fv(r,g,v);break r}W0(r,g,b,v)}g=g.child}return g;case 26:return Lo(r,g),r===null?(v=b7(g.type,null,g.pendingProps,null))?g.memoizedState=v:ar||(v=g.type,r=g.pendingProps,b=mr(e5.current),b=ko(b).createElement(v),b[G0]=g,b[T0]=r,M0(b,v,r),Ur(b),g.stateNode=b):g.memoizedState=b7(g.type,r.memoizedProps,g.pendingProps,r.memoizedState),null;case 27:return vr(g),r===null&&ar&&(b=mr(e5.current),l=hr(),b=g.stateNode=v7(g.type,g.pendingProps,b,l,!1),Nv||(l=yW(b,g.type,g.pendingProps,l),l!==null&&(Vw(g,0).serverProps=l)),X0=g,Z1=!0,l=Lg,V5(g.type)?(qA=l,Lg=H1(b.firstChild)):Lg=l),W0(r,g,g.pendingProps.children,v),Lo(r,g),r===null&&(g.flags|=4194304),g.child;case 5:return r===null&&ar&&(o=hr(),b=e8(g.type,o.ancestorInfo),l=Lg,(q=!l)||(q=bK(l,g.type,g.pendingProps,Z1),q!==null?(g.stateNode=q,Nv||(o=yW(q,g.type,g.pendingProps,o),o!==null&&(Vw(g,0).serverProps=o)),X0=g,Lg=H1(q.firstChild),Z1=!1,o=!0):o=!1,q=!o),q&&(b&&d4(g,l),Z5(g))),vr(g),l=g.type,o=g.pendingProps,q=r!==null?r.memoizedProps:null,b=o.children,FO(l,o)?b=null:q!==null&&FO(l,q)&&(g.flags|=32),g.memoizedState!==null&&(l=YH(r,g,HR,null,null,v),Fl._currentValue=l),Lo(r,g),W0(r,g,b,v),g.child;case 6:return r===null&&ar&&(v=g.pendingProps,r=hr(),b=r.ancestorInfo.current,v=b!=null?e4(v,b.tag,r.ancestorInfo.implicitRootScope):!0,r=Lg,(b=!r)||(b=hK(r,g.pendingProps,Z1),b!==null?(g.stateNode=b,X0=g,Lg=null,b=!0):b=!1,b=!b),b&&(v&&d4(g,r),Z5(g))),null;case 13:return Iu(r,g,v);case 4:return _(g,g.stateNode.containerInfo),b=g.pendingProps,r===null?g.child=lb(g,null,b,v):W0(r,g,b,v),g.child;case 11:return Ru(r,g,g.type,g.pendingProps,v);case 7:return W0(r,g,g.pendingProps,v),g.child;case 8:return W0(r,g,g.pendingProps.children,v),g.child;case 12:return g.flags|=4,g.flags|=2048,b=g.stateNode,b.effectDuration=-0,b.passiveEffectDuration=-0,W0(r,g,g.pendingProps.children,v),g.child;case 10:return b=g.type,l=g.pendingProps,o=l.value,"value"in l||YM||(YM=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),I5(g,b,o),W0(r,g,l.children,v),g.child;case 9:return l=g.type._context,b=g.pendingProps.children,typeof b!=="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),ew(g),l=Bg(l),b=Bq(b,l,void 0),g.flags|=1,W0(r,g,b,v),g.child;case 14:return Ku(r,g,g.type,g.pendingProps,v);case 15:return $u(r,g,g.type,g.pendingProps,v);case 19:return Tu(r,g,v);case 31:return MR(r,g,v);case 22:return Uu(r,g,v,g.pendingProps);case 24:return ew(g),b=Bg(fg),r===null?(l=qH(),l===null&&(l=Yg,o=oH(),l.pooledCache=o,Ew(o),o!==null&&(l.pooledCacheLanes|=v),l=o),g.memoizedState={parent:b,cache:l},PH(g),I5(g,fg,l)):((r.lanes&v)!==0&&(uH(r,g),M2(g,null,null,v),W2()),l=r.memoizedState,o=g.memoizedState,l.parent!==b?(l={parent:b,cache:b},g.memoizedState=l,g.lanes===0&&(g.memoizedState=g.updateQueue.baseState=l),I5(g,fg,b)):(b=o.cache,I5(g,fg,b),b!==l.cache&&lH(g,[fg],v,!0))),W0(r,g,g.pendingProps.children,v),g.child;case 29:throw g.pendingProps}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function cv(r){r.flags|=4}function wO(r,g,v,b,l){if(g=(r.mode&m$)!==Br)g=!1;if(g){if(r.flags|=16777216,(l&335544128)===l)if(r.stateNode.complete)r.flags|=8192;else if(PW())r.flags|=8192;else throw hb=Q6,Zq}else r.flags&=-16777217}function Cu(r,g){if(g.type!=="stylesheet"||(g.state.loading&S1)!==Xb)r.flags&=-16777217;else if(r.flags|=16777216,!O7(g))if(PW())r.flags|=8192;else throw hb=Q6,Zq}function Bo(r,g){g!==null&&(r.flags|=4),r.flags&16384&&(g=r.tag!==22?Tb():536870912,r.lanes|=g,Ab|=g)}function Q2(r,g){if(!ar)switch(r.tailMode){case"hidden":g=r.tail;for(var v=null;g!==null;)g.alternate!==null&&(v=g),g=g.sibling;v===null?r.tail=null:v.sibling=null;break;case"collapsed":v=r.tail;for(var b=null;v!==null;)v.alternate!==null&&(b=v),v=v.sibling;b===null?g||r.tail===null?r.tail=null:r.tail.sibling=null:b.sibling=null}}function zg(r){var g=r.alternate!==null&&r.alternate.child===r.child,v=0,b=0;if(g)if((r.mode&_r)!==Br){for(var{selfBaseDuration:l,child:o}=r;o!==null;)v|=o.lanes|o.childLanes,b|=o.subtreeFlags&65011712,b|=o.flags&65011712,l+=o.treeBaseDuration,o=o.sibling;r.treeBaseDuration=l}else for(l=r.child;l!==null;)v|=l.lanes|l.childLanes,b|=l.subtreeFlags&65011712,b|=l.flags&65011712,l.return=r,l=l.sibling;else if((r.mode&_r)!==Br){l=r.actualDuration,o=r.selfBaseDuration;for(var q=r.child;q!==null;)v|=q.lanes|q.childLanes,b|=q.subtreeFlags,b|=q.flags,l+=q.actualDuration,o+=q.treeBaseDuration,q=q.sibling;r.actualDuration=l,r.treeBaseDuration=o}else for(l=r.child;l!==null;)v|=l.lanes|l.childLanes,b|=l.subtreeFlags,b|=l.flags,l.return=r,l=l.sibling;return r.subtreeFlags|=b,r.childLanes=v,g}function XR(r,g,v){var b=g.pendingProps;switch(vH(g),g.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zg(g),null;case 1:return zg(g),null;case 3:if(v=g.stateNode,b=null,r!==null&&(b=r.memoizedState.cache),g.memoizedState.cache!==b&&(g.flags|=2048),jv(fg,g),d(g),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),r===null||r.child===null)Db(g)?(bH(),cv(g)):r===null||r.memoizedState.isDehydrated&&(g.flags&256)===0||(g.flags|=1024,wH());return zg(g),null;case 26:var{type:l,memoizedState:o}=g;return r===null?(cv(g),o!==null?(zg(g),Cu(g,o)):(zg(g),wO(g,l,null,b,v))):o?o!==r.memoizedState?(cv(g),zg(g),Cu(g,o)):(zg(g),g.flags&=-16777217):(r=r.memoizedProps,r!==b&&cv(g),zg(g),wO(g,l,r,b,v)),null;case 27:if(Gr(g),v=mr(e5.current),l=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==b&&cv(g);else{if(!b){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return zg(g),null}r=hr(),Db(g)?R9(g,r):(r=v7(l,b,v,r,!0),g.stateNode=r,cv(g))}return zg(g),null;case 5:if(Gr(g),l=g.type,r!==null&&g.stateNode!=null)r.memoizedProps!==b&&cv(g);else{if(!b){if(g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return zg(g),null}var q=hr();if(Db(g))R9(g,q);else{switch(o=mr(e5.current),e8(l,q.ancestorInfo),q=q.context,o=ko(o),q){case Ch:o=o.createElementNS(bh,l);break;case j6:o=o.createElementNS(g6,l);break;default:switch(l){case"svg":o=o.createElementNS(bh,l);break;case"math":o=o.createElementNS(g6,l);break;case"script":o=o.createElement("div"),o.innerHTML="<script></script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof b.is==="string"?o.createElement("select",{is:b.is}):o.createElement("select"),b.multiple?o.multiple=!0:b.size&&(o.size=b.size);break;default:o=typeof b.is==="string"?o.createElement(l,{is:b.is}):o.createElement(l),l.indexOf("-")===-1&&(l!==l.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",l),Object.prototype.toString.call(o)!=="[object HTMLUnknownElement]"||e1.call(eM,l)||(eM[l]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",l)))}}o[G0]=g,o[T0]=b;r:for(q=g.child;q!==null;){if(q.tag===5||q.tag===6)o.appendChild(q.stateNode);else if(q.tag!==4&&q.tag!==27&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===g)break r;for(;q.sibling===null;){if(q.return===null||q.return===g)break r;q=q.return}q.sibling.return=q.return,q=q.sibling}g.stateNode=o;r:switch(M0(o,l,b),l){case"button":case"input":case"select":case"textarea":b=!!b.autoFocus;break r;case"img":b=!0;break r;default:b=!1}b&&cv(g)}}return zg(g),wO(g,g.type,r===null?null:r.memoizedProps,g.pendingProps,v),null;case 6:if(r&&g.stateNode!=null)r.memoizedProps!==b&&cv(g);else{if(typeof b!=="string"&&g.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(r=mr(e5.current),v=hr(),Db(g)){if(r=g.stateNode,v=g.memoizedProps,l=!Nv,b=null,o=X0,o!==null)switch(o.tag){case 3:l&&(l=r7(r,v,b),l!==null&&(Vw(g,0).serverProps=l));break;case 27:case 5:b=o.memoizedProps,l&&(l=r7(r,v,b),l!==null&&(Vw(g,0).serverProps=l))}r[G0]=g,r=r.nodeValue===v||b!==null&&b.suppressHydrationWarning===!0||iW(r.nodeValue,v)?!0:!1,r||Z5(g,!0)}else l=v.ancestorInfo.current,l!=null&&e4(b,l.tag,v.ancestorInfo.implicitRootScope),r=ko(r).createTextNode(b),r[G0]=g,g.stateNode=r}return zg(g),null;case 31:if(v=g.memoizedState,r===null||r.memoizedState!==null){if(b=Db(g),v!==null){if(r===null){if(!b)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(r=g.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");r[G0]=g,zg(g),(g.mode&_r)!==Br&&v!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration))}else bH(),_w(),(g.flags&128)===0&&(v=g.memoizedState=null),g.flags|=4,zg(g),(g.mode&_r)!==Br&&v!==null&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration));r=!1}else v=wH(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=v),r=!0;if(!r){if(g.flags&256)return l1(g),g;return l1(g),null}if((g.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return zg(g),null;case 13:if(b=g.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(l=b,o=Db(g),l!==null&&l.dehydrated!==null){if(r===null){if(!o)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(o=g.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");o[G0]=g,zg(g),(g.mode&_r)!==Br&&l!==null&&(l=g.child,l!==null&&(g.treeBaseDuration-=l.treeBaseDuration))}else bH(),_w(),(g.flags&128)===0&&(l=g.memoizedState=null),g.flags|=4,zg(g),(g.mode&_r)!==Br&&l!==null&&(l=g.child,l!==null&&(g.treeBaseDuration-=l.treeBaseDuration));l=!1}else l=wH(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=l),l=!0;if(!l){if(g.flags&256)return l1(g),g;return l1(g),null}}if(l1(g),(g.flags&128)!==0)return g.lanes=v,(g.mode&_r)!==Br&&A2(g),g;return v=b!==null,r=r!==null&&r.memoizedState!==null,v&&(b=g.child,l=null,b.alternate!==null&&b.alternate.memoizedState!==null&&b.alternate.memoizedState.cachePool!==null&&(l=b.alternate.memoizedState.cachePool.pool),o=null,b.memoizedState!==null&&b.memoizedState.cachePool!==null&&(o=b.memoizedState.cachePool.pool),o!==l&&(b.flags|=2048)),v!==r&&v&&(g.child.flags|=8192),Bo(g,g.updateQueue),zg(g),(g.mode&_r)!==Br&&v&&(r=g.child,r!==null&&(g.treeBaseDuration-=r.treeBaseDuration)),null;case 4:return d(g),r===null&&QO(g.stateNode.containerInfo),zg(g),null;case 10:return jv(g.type,g),zg(g),null;case 19:if(Xr(eg,g),b=g.memoizedState,b===null)return zg(g),null;if(l=(g.flags&128)!==0,o=b.rendering,o===null)if(l)Q2(b,!1);else{if(xg!==q5||r!==null&&(r.flags&128)!==0)for(r=g.child;r!==null;){if(o=Ao(r),o!==null){g.flags|=128,Q2(b,!1),r=o.updateQueue,g.updateQueue=r,Bo(g,r),g.subtreeFlags=0,r=v;for(v=g.child;v!==null;)G9(v,r),v=v.sibling;return Rr(eg,eg.current&Rh|Ol,g),ar&&nv(g,b.treeForkCount),g.child}r=r.sibling}b.tail!==null&&l0()>T6&&(g.flags|=128,l=!0,Q2(b,!1),g.lanes=4194304)}else{if(!l)if(r=Ao(o),r!==null){if(g.flags|=128,l=!0,r=r.updateQueue,g.updateQueue=r,Bo(g,r),Q2(b,!0),b.tail===null&&b.tailMode==="hidden"&&!o.alternate&&!ar)return zg(g),null}else 2*l0()-b.renderingStartTime>T6&&v!==536870912&&(g.flags|=128,l=!0,Q2(b,!1),g.lanes=4194304);b.isBackwards?(o.sibling=g.child,g.child=o):(r=b.last,r!==null?r.sibling=o:g.child=o,b.last=o)}if(b.tail!==null)return r=b.tail,b.rendering=r,b.tail=r.sibling,b.renderingStartTime=l0(),r.sibling=null,v=eg.current,v=l?v&Rh|Ol:v&Rh,Rr(eg,v,g),ar&&nv(g,b.treeForkCount),r;return zg(g),null;case 22:case 23:return l1(g),MH(g),b=g.memoizedState!==null,r!==null?r.memoizedState!==null!==b&&(g.flags|=8192):b&&(g.flags|=8192),b?(v&536870912)!==0&&(g.flags&128)===0&&(zg(g),g.subtreeFlags&6&&(g.flags|=8192)):zg(g),v=g.updateQueue,v!==null&&Bo(g,v.retryQueue),v=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(v=r.memoizedState.cachePool.pool),b=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(b=g.memoizedState.cachePool.pool),b!==v&&(g.flags|=2048),r!==null&&Xr(wb,g),null;case 24:return v=null,r!==null&&(v=r.memoizedState.cache),g.memoizedState.cache!==v&&(g.flags|=2048),jv(fg,g),zg(g),null;case 25:return null;case 30:return null}throw Error("Unknown unit of work tag ("+g.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function YR(r,g){switch(vH(g),g.tag){case 1:return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&_r)!==Br&&A2(g),g):null;case 3:return jv(fg,g),d(g),r=g.flags,(r&65536)!==0&&(r&128)===0?(g.flags=r&-65537|128,g):null;case 26:case 27:case 5:return Gr(g),null;case 31:if(g.memoizedState!==null){if(l1(g),g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");_w()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&_r)!==Br&&A2(g),g):null;case 13:if(l1(g),r=g.memoizedState,r!==null&&r.dehydrated!==null){if(g.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");_w()}return r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&_r)!==Br&&A2(g),g):null;case 19:return Xr(eg,g),null;case 4:return d(g),null;case 10:return jv(g.type,g),null;case 22:case 23:return l1(g),MH(g),r!==null&&Xr(wb,g),r=g.flags,r&65536?(g.flags=r&-65537|128,(g.mode&_r)!==Br&&A2(g),g):null;case 24:return jv(fg,g),null;case 25:return null;default:return null}}function Su(r,g){switch(vH(g),g.tag){case 3:jv(fg,g),d(g);break;case 26:case 27:case 5:Gr(g);break;case 4:d(g);break;case 31:g.memoizedState!==null&&l1(g);break;case 13:l1(g);break;case 19:Xr(eg,g);break;case 10:jv(g.type,g);break;case 22:case 23:l1(g),MH(g),r!==null&&Xr(wb,g);break;case 24:jv(fg,g)}}function Gv(r){return(r.mode&_r)!==Br}function mu(r,g){Gv(r)?(Mv(),z2(g,r),Wv()):z2(g,r)}function bO(r,g,v){Gv(r)?(Mv(),yb(v,r,g),Wv()):yb(v,r,g)}function z2(r,g){try{var v=g.updateQueue,b=v!==null?v.lastEffect:null;if(b!==null){var l=b.next;v=l;do{if((v.tag&r)===r&&(b=void 0,(r&k0)!==R6&&(Ih=!0),b=Hr(g,_$,v),(r&k0)!==R6&&(Ih=!1),b!==void 0&&typeof b!=="function")){var o=void 0;o=(v.tag&W1)!==0?"useLayoutEffect":(v.tag&k0)!==0?"useInsertionEffect":"useEffect";var q=void 0;q=b===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof b.then==="function"?`

It looks like you wrote `+o+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+o+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+b,Hr(g,function(P,G){console.error("%s must not return anything besides a function, which is used for clean-up.%s",P,G)},o,q)}v=v.next}while(v!==l)}}catch(P){og(g,g.return,P)}}function yb(r,g,v){try{var b=g.updateQueue,l=b!==null?b.lastEffect:null;if(l!==null){var o=l.next;b=o;do{if((b.tag&r)===r){var q=b.inst,P=q.destroy;P!==void 0&&(q.destroy=void 0,(r&k0)!==R6&&(Ih=!0),l=g,Hr(l,e$,l,v,P),(r&k0)!==R6&&(Ih=!1))}b=b.next}while(b!==o)}}catch(G){og(g,g.return,G)}}function ku(r,g){Gv(r)?(Mv(),z2(g,r),Wv()):z2(g,r)}function hO(r,g,v){Gv(r)?(Mv(),yb(v,r,g),Wv()):yb(v,r,g)}function Du(r){var g=r.updateQueue;if(g!==null){var v=r.stateNode;r.type.defaultProps||"ref"in r.memoizedProps||Lh||(v.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(r)||"instance"),v.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(r)||"instance"));try{Hr(r,V9,g,v)}catch(b){og(r,r.return,b)}}}function JR(r,g,v){return r.getSnapshotBeforeUpdate(g,v)}function QR(r,g){var{memoizedProps:v,memoizedState:b}=g;g=r.stateNode,r.type.defaultProps||"ref"in r.memoizedProps||Lh||(g.props!==r.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(r)||"instance"),g.state!==r.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(r)||"instance"));try{var l=tw(r.type,v),o=Hr(r,JR,g,l,b);v=JM,o!==void 0||v.has(r.type)||(v.add(r.type),Hr(r,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",D(r))})),g.__reactInternalSnapshotBeforeUpdate=o}catch(q){og(r,r.return,q)}}function iu(r,g,v){v.props=tw(r.type,r.memoizedProps),v.state=r.memoizedState,Gv(r)?(Mv(),Hr(r,D3,r,g,v),Wv()):Hr(r,D3,r,g,v)}function zR(r){var g=r.ref;if(g!==null){switch(r.tag){case 26:case 27:case 5:var v=r.stateNode;break;case 30:v=r.stateNode;break;default:v=r.stateNode}if(typeof g==="function")if(Gv(r))try{Mv(),r.refCleanup=g(v)}finally{Wv()}else r.refCleanup=g(v);else typeof g==="string"?console.error("String refs are no longer supported."):g.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",D(r)),g.current=v}}function R2(r,g){try{Hr(r,zR,r)}catch(v){og(r,g,v)}}function Xv(r,g){var{ref:v,refCleanup:b}=r;if(v!==null)if(typeof b==="function")try{if(Gv(r))try{Mv(),Hr(r,b)}finally{Wv(r)}else Hr(r,b)}catch(l){og(r,g,l)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof v==="function")try{if(Gv(r))try{Mv(),Hr(r,v,null)}finally{Wv(r)}else Hr(r,v,null)}catch(l){og(r,g,l)}else v.current=null}function Vu(r,g,v,b){var l=r.memoizedProps,o=l.id,q=l.onCommit;l=l.onRender,g=g===null?"mount":"update",G6&&(g="nested-update"),typeof l==="function"&&l(o,g,r.actualDuration,r.treeBaseDuration,r.actualStartTime,v),typeof q==="function"&&q(o,g,b,v)}function RR(r,g,v,b){var l=r.memoizedProps;r=l.id,l=l.onPostCommit,g=g===null?"mount":"update",G6&&(g="nested-update"),typeof l==="function"&&l(r,g,b,v)}function _u(r){var{type:g,memoizedProps:v,stateNode:b}=r;try{Hr(r,jR,b,g,v,r)}catch(l){og(r,r.return,l)}}function lO(r,g,v){try{Hr(r,fR,r.stateNode,r.type,v,g,r)}catch(b){og(r,r.return,b)}}function eu(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&V5(r.type)||r.tag===4}function oO(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||eu(r.return))return null;r=r.return}r.sibling.return=r.return;for(r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&V5(r.type))continue r;if(r.flags&2)continue r;if(r.child===null||r.tag===4)continue r;else r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function HO(r,g,v){var b=r.tag;if(b===5||b===6)r=r.stateNode,g?(cW(v),(v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v).insertBefore(r,g)):(cW(v),g=v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v,g.appendChild(r),v=v._reactRootContainer,v!==null&&v!==void 0||g.onclick!==null||(g.onclick=Ev));else if(b!==4&&(b===27&&V5(r.type)&&(v=r.stateNode,g=null),r=r.child,r!==null))for(HO(r,g,v),r=r.sibling;r!==null;)HO(r,g,v),r=r.sibling}function No(r,g,v){var b=r.tag;if(b===5||b===6)r=r.stateNode,g?v.insertBefore(r,g):v.appendChild(r);else if(b!==4&&(b===27&&V5(r.type)&&(v=r.stateNode),r=r.child,r!==null))for(No(r,g,v),r=r.sibling;r!==null;)No(r,g,v),r=r.sibling}function KR(r){for(var g,v=r.return;v!==null;){if(eu(v)){g=v;break}v=v.return}if(g==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(g.tag){case 27:g=g.stateNode,v=oO(r),No(r,v,g);break;case 5:v=g.stateNode,g.flags&32&&(fW(v),g.flags&=-33),g=oO(r),No(r,g,v);break;case 3:case 4:g=g.stateNode.containerInfo,v=oO(r),HO(r,v,g);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Eu(r){var{stateNode:g,memoizedProps:v}=r;try{Hr(r,qK,r.type,v,g,r)}catch(b){og(r,r.return,b)}}function yu(r,g){return g.tag===31?(g=g.memoizedState,r.memoizedState!==null&&g===null):g.tag===13?(r=r.memoizedState,g=g.memoizedState,r!==null&&r.dehydrated!==null&&(g===null||g.dehydrated===null)):g.tag===3?r.memoizedState.isDehydrated&&(g.flags&256)===0:!1}function $R(r,g){if(r=r.containerInfo,oA=p6,r=l9(r),n8(r)){if("selectionStart"in r)var v={start:r.selectionStart,end:r.selectionEnd};else r:{v=(v=r.ownerDocument)&&v.defaultView||window;var b=v.getSelection&&v.getSelection();if(b&&b.rangeCount!==0){v=b.anchorNode;var{anchorOffset:l,focusNode:o}=b;b=b.focusOffset;try{v.nodeType,o.nodeType}catch(lr){v=null;break r}var q=0,P=-1,G=-1,Y=0,N=0,Z=r,U=null;g:for(;;){for(var T;;){if(Z!==v||l!==0&&Z.nodeType!==3||(P=q+l),Z!==o||b!==0&&Z.nodeType!==3||(G=q+b),Z.nodeType===3&&(q+=Z.nodeValue.length),(T=Z.firstChild)===null)break;U=Z,Z=T}for(;;){if(Z===r)break g;if(U===v&&++Y===l&&(P=q),U===o&&++N===b&&(G=q),(T=Z.nextSibling)!==null)break;Z=U,U=Z.parentNode}Z=T}v=P===-1||G===-1?null:{start:P,end:G}}else v=null}v=v||{start:0,end:0}}else v=null;HA={focusedElem:r,selectionRange:v},p6=!1;for(H0=g;H0!==null;)if(g=H0,r=g.child,(g.subtreeFlags&1028)!==0&&r!==null)r.return=g,H0=r;else for(;H0!==null;){switch(r=g=H0,v=r.alternate,l=r.flags,r.tag){case 0:if((l&4)!==0&&(r=r.updateQueue,r=r!==null?r.events:null,r!==null))for(v=0;v<r.length;v++)l=r[v],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:(l&1024)!==0&&v!==null&&QR(r,v);break;case 3:if((l&1024)!==0){if(r=r.stateNode.containerInfo,v=r.nodeType,v===9)BO(r);else if(v===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":BO(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(r=g.sibling,r!==null){r.return=g.return,H0=r;break}H0=g.return}}function nu(r,g,v){var b=b1(),l=qv(),o=Pv(),q=uv(),P=v.flags;switch(v.tag){case 0:case 11:case 15:Yv(r,v),P&4&&mu(v,W1|T1);break;case 1:if(Yv(r,v),P&4)if(r=v.stateNode,g===null)v.type.defaultProps||"ref"in v.memoizedProps||Lh||(r.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(v)||"instance"),r.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(v)||"instance")),Gv(v)?(Mv(),Hr(v,Nq,v,r),Wv()):Hr(v,Nq,v,r);else{var G=tw(v.type,g.memoizedProps);g=g.memoizedState,v.type.defaultProps||"ref"in v.memoizedProps||Lh||(r.props!==v.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",D(v)||"instance"),r.state!==v.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",D(v)||"instance")),Gv(v)?(Mv(),Hr(v,S3,v,r,G,g,r.__reactInternalSnapshotBeforeUpdate),Wv()):Hr(v,S3,v,r,G,g,r.__reactInternalSnapshotBeforeUpdate)}P&64&&Du(v),P&512&&R2(v,v.return);break;case 3:if(g=tv(),Yv(r,v),P&64&&(P=v.updateQueue,P!==null)){if(G=null,v.child!==null)switch(v.child.tag){case 27:case 5:G=v.child.stateNode;break;case 1:G=v.child.stateNode}try{Hr(v,V9,P,G)}catch(N){og(v,v.return,N)}}r.effectDuration+=vo(g);break;case 27:g===null&&P&4&&Eu(v);case 26:case 5:if(Yv(r,v),g===null){if(P&4)_u(v);else if(P&64){r=v.type,g=v.memoizedProps,G=v.stateNode;try{Hr(v,tR,G,r,g,v)}catch(N){og(v,v.return,N)}}}P&512&&R2(v,v.return);break;case 12:if(P&4){P=tv(),Yv(r,v),r=v.stateNode,r.effectDuration+=q2(P);try{Hr(v,Vu,v,g,p5,r.effectDuration)}catch(N){og(v,v.return,N)}}else Yv(r,v);break;case 31:Yv(r,v),P&4&&fu(r,v);break;case 13:Yv(r,v),P&4&&cu(r,v),P&64&&(r=v.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(P=TR.bind(null,v),lK(r,P))));break;case 22:if(P=v.memoizedState!==null||O5,!P){g=g!==null&&g.memoizedState!==null||dg,G=O5;var Y=dg;O5=P,(dg=g)&&!Y?(Jv(r,v,(v.subtreeFlags&8772)!==0),(v.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&j4(v,Lr,Fr)):Yv(r,v),O5=G,dg=Y}break;case 30:break;default:Yv(r,v)}(v.mode&_r)!==Br&&0<=Lr&&0<=Fr&&((Sg||0.05<Ig)&&Hv(v,Lr,Fr,Ig,Ng),v.alternate===null&&v.return!==null&&v.return.alternate!==null&&0.05<Fr-Lr&&(yu(v.return.alternate,v.return)||ov(v,Lr,Fr,"Mount"))),h1(b),Av(l),Ng=o,Sg=q}function ju(r){var g=r.alternate;g!==null&&(r.alternate=null,ju(g)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(g=r.stateNode,g!==null&&Or(g)),r.stateNode=null,r._debugOwner=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function pv(r,g,v){for(v=v.child;v!==null;)tu(r,g,v),v=v.sibling}function tu(r,g,v){if(L0&&typeof L0.onCommitFiberUnmount==="function")try{L0.onCommitFiberUnmount(vh,v)}catch(Y){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",Y))}var b=b1(),l=qv(),o=Pv(),q=uv();switch(v.tag){case 26:dg||Xv(v,g),pv(r,g,v),v.memoizedState?v.memoizedState.count--:v.stateNode&&(r=v.stateNode,r.parentNode.removeChild(r));break;case 27:dg||Xv(v,g);var P=sg,G=c0;V5(v.type)&&(sg=v.stateNode,c0=!1),pv(r,g,v),Hr(v,I2,v.stateNode),sg=P,c0=G;break;case 5:dg||Xv(v,g);case 6:if(P=sg,G=c0,sg=null,pv(r,g,v),sg=P,c0=G,sg!==null)if(c0)try{Hr(v,aR,sg,v.stateNode)}catch(Y){og(v,g,Y)}else try{Hr(v,pR,sg,v.stateNode)}catch(Y){og(v,g,Y)}break;case 18:sg!==null&&(c0?(r=sg,pW(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,v.stateNode),db(r)):pW(sg,v.stateNode));break;case 4:P=sg,G=c0,sg=v.stateNode.containerInfo,c0=!0,pv(r,g,v),sg=P,c0=G;break;case 0:case 11:case 14:case 15:yb(k0,v,g),dg||bO(v,g,W1),pv(r,g,v);break;case 1:dg||(Xv(v,g),P=v.stateNode,typeof P.componentWillUnmount==="function"&&iu(v,g,P)),pv(r,g,v);break;case 21:pv(r,g,v);break;case 22:dg=(P=dg)||v.memoizedState!==null,pv(r,g,v),dg=P;break;default:pv(r,g,v)}(v.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(v,Lr,Fr,Ig,Ng),h1(b),Av(l),Ng=o,Sg=q}function fu(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null))){r=r.dehydrated;try{Hr(g,HK,r)}catch(v){og(g,g.return,v)}}}function cu(r,g){if(g.memoizedState===null&&(r=g.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Hr(g,OK,r)}catch(v){og(g,g.return,v)}}function UR(r){switch(r.tag){case 31:case 13:case 19:var g=r.stateNode;return g===null&&(g=r.stateNode=new QM),g;case 22:return r=r.stateNode,g=r._retryCache,g===null&&(g=r._retryCache=new QM),g;default:throw Error("Unexpected Suspense handler tag ("+r.tag+"). This is a bug in React.")}}function Zo(r,g){var v=UR(r);g.forEach(function(b){if(!v.has(b)){if(v.add(b),Lv)if(Fh!==null&&Bh!==null)L2(Bh,Fh);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var l=CR.bind(null,r,b);b.then(l,l)}})}function t0(r,g){var v=g.deletions;if(v!==null)for(var b=0;b<v.length;b++){var l=r,o=g,q=v[b],P=b1(),G=o;r:for(;G!==null;){switch(G.tag){case 27:if(V5(G.type)){sg=G.stateNode,c0=!1;break r}break;case 5:sg=G.stateNode,c0=!1;break r;case 3:case 4:sg=G.stateNode.containerInfo,c0=!0;break r}G=G.return}if(sg===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");tu(l,o,q),sg=null,c0=!1,(q.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&ov(q,Lr,Fr,"Unmount"),h1(P),l=q,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(g.subtreeFlags&13886)for(g=g.child;g!==null;)pu(g,r),g=g.sibling}function pu(r,g){var v=b1(),b=qv(),l=Pv(),o=uv(),q=r.alternate,P=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:t0(g,r),f0(r),P&4&&(yb(k0|T1,r,r.return),z2(k0|T1,r),bO(r,r.return,W1|T1));break;case 1:if(t0(g,r),f0(r),P&512&&(dg||q===null||Xv(q,q.return)),P&64&&O5&&(P=r.updateQueue,P!==null&&(q=P.callbacks,q!==null))){var G=P.shared.hiddenCallbacks;P.shared.hiddenCallbacks=G===null?q:G.concat(q)}break;case 26:if(G=t1,t0(g,r),f0(r),P&512&&(dg||q===null||Xv(q,q.return)),P&4){var Y=q!==null?q.memoizedState:null;if(P=r.memoizedState,q===null)if(P===null)if(r.stateNode===null){r:{P=r.type,q=r.memoizedProps,G=G.ownerDocument||G;g:switch(P){case"title":if(Y=G.getElementsByTagName("title")[0],!Y||Y[D2]||Y[G0]||Y.namespaceURI===bh||Y.hasAttribute("itemprop"))Y=G.createElement(P),G.head.insertBefore(Y,G.querySelector("head > title"));M0(Y,P,q),Y[G0]=r,Ur(Y),P=Y;break r;case"link":var N=o7("link","href",G).get(P+(q.href||""));if(N){for(var Z=0;Z<N.length;Z++)if(Y=N[Z],Y.getAttribute("href")===(q.href==null||q.href===""?null:q.href)&&Y.getAttribute("rel")===(q.rel==null?null:q.rel)&&Y.getAttribute("title")===(q.title==null?null:q.title)&&Y.getAttribute("crossorigin")===(q.crossOrigin==null?null:q.crossOrigin)){N.splice(Z,1);break g}}Y=G.createElement(P),M0(Y,P,q),G.head.appendChild(Y);break;case"meta":if(N=o7("meta","content",G).get(P+(q.content||""))){for(Z=0;Z<N.length;Z++)if(Y=N[Z],ug(q.content,"content"),Y.getAttribute("content")===(q.content==null?null:""+q.content)&&Y.getAttribute("name")===(q.name==null?null:q.name)&&Y.getAttribute("property")===(q.property==null?null:q.property)&&Y.getAttribute("http-equiv")===(q.httpEquiv==null?null:q.httpEquiv)&&Y.getAttribute("charset")===(q.charSet==null?null:q.charSet)){N.splice(Z,1);break g}}Y=G.createElement(P),M0(Y,P,q),G.head.appendChild(Y);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+P+'". This is a bug in React.')}Y[G0]=r,Ur(Y),P=Y}r.stateNode=P}else H7(G,r.type,r.stateNode);else r.stateNode=l7(G,P,r.memoizedProps);else Y!==P?(Y===null?q.stateNode!==null&&(q=q.stateNode,q.parentNode.removeChild(q)):Y.count--,P===null?H7(G,r.type,r.stateNode):l7(G,P,r.memoizedProps)):P===null&&r.stateNode!==null&&lO(r,r.memoizedProps,q.memoizedProps)}break;case 27:t0(g,r),f0(r),P&512&&(dg||q===null||Xv(q,q.return)),q!==null&&P&4&&lO(r,r.memoizedProps,q.memoizedProps);break;case 5:if(t0(g,r),f0(r),P&512&&(dg||q===null||Xv(q,q.return)),r.flags&32){G=r.stateNode;try{Hr(r,fW,G)}catch(Wr){og(r,r.return,Wr)}}P&4&&r.stateNode!=null&&(G=r.memoizedProps,lO(r,G,q!==null?q.memoizedProps:G)),P&1024&&(eq=!0,r.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(t0(g,r),f0(r),P&4){if(r.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");P=r.memoizedProps,q=q!==null?q.memoizedProps:P,G=r.stateNode;try{Hr(r,cR,G,q,P)}catch(Wr){og(r,r.return,Wr)}}break;case 3:if(G=tv(),t6=null,Y=t1,t1=Do(g.containerInfo),t0(g,r),t1=Y,f0(r),P&4&&q!==null&&q.memoizedState.isDehydrated)try{Hr(r,oK,g.containerInfo)}catch(Wr){og(r,r.return,Wr)}eq&&(eq=!1,au(r)),g.effectDuration+=vo(G);break;case 4:P=t1,t1=Do(r.stateNode.containerInfo),t0(g,r),f0(r),t1=P;break;case 12:P=tv(),t0(g,r),f0(r),r.stateNode.effectDuration+=q2(P);break;case 31:t0(g,r),f0(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Zo(r,P)));break;case 13:t0(g,r),f0(r),r.child.flags&8192&&r.memoizedState!==null!==(q!==null&&q.memoizedState!==null)&&(x6=l0()),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Zo(r,P)));break;case 22:G=r.memoizedState!==null;var U=q!==null&&q.memoizedState!==null,T=O5,lr=dg;if(O5=T||G,dg=lr||U,t0(g,r),dg=lr,O5=T,U&&!G&&!T&&!lr&&(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&j4(r,Lr,Fr),f0(r),P&8192)r:for(g=r.stateNode,g._visibility=G?g._visibility&~t2:g._visibility|t2,!G||q===null||U||O5||dg||(fw(r),(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&ov(r,Lr,Fr,"Disconnect")),q=null,g=r;;){if(g.tag===5||g.tag===26){if(q===null){U=q=g;try{Y=U.stateNode,G?Hr(U,sR,Y):Hr(U,vK,U.stateNode,U.memoizedProps)}catch(Wr){og(U,U.return,Wr)}}}else if(g.tag===6){if(q===null){U=g;try{N=U.stateNode,G?Hr(U,rK,N):Hr(U,wK,N,U.memoizedProps)}catch(Wr){og(U,U.return,Wr)}}}else if(g.tag===18){if(q===null){U=g;try{Z=U.stateNode,G?Hr(U,dR,Z):Hr(U,gK,U.stateNode)}catch(Wr){og(U,U.return,Wr)}}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===r)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===r)break r;for(;g.sibling===null;){if(g.return===null||g.return===r)break r;q===g&&(q=null),g=g.return}q===g&&(q=null),g.sibling.return=g.return,g=g.sibling}P&4&&(P=r.updateQueue,P!==null&&(q=P.retryQueue,q!==null&&(P.retryQueue=null,Zo(r,q))));break;case 19:t0(g,r),f0(r),P&4&&(P=r.updateQueue,P!==null&&(r.updateQueue=null,Zo(r,P)));break;case 30:break;case 21:break;default:t0(g,r),f0(r)}(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&((Sg||0.05<Ig)&&Hv(r,Lr,Fr,Ig,Ng),r.alternate===null&&r.return!==null&&r.return.alternate!==null&&0.05<Fr-Lr&&(yu(r.return.alternate,r.return)||ov(r,Lr,Fr,"Mount"))),h1(v),Av(b),Ng=l,Sg=o}function f0(r){var g=r.flags;if(g&2){try{Hr(r,KR,r)}catch(v){og(r,r.return,v)}r.flags&=-3}g&4096&&(r.flags&=-4097)}function au(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var g=r;au(g),g.tag===5&&g.flags&1024&&g.stateNode.reset(),r=r.sibling}}function Yv(r,g){if(g.subtreeFlags&8772)for(g=g.child;g!==null;)nu(r,g.alternate,g),g=g.sibling}function du(r){var g=b1(),v=qv(),b=Pv(),l=uv();switch(r.tag){case 0:case 11:case 14:case 15:bO(r,r.return,W1),fw(r);break;case 1:Xv(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount==="function"&&iu(r,r.return,o),fw(r);break;case 27:Hr(r,I2,r.stateNode);case 26:case 5:Xv(r,r.return),fw(r);break;case 22:r.memoizedState===null&&fw(r);break;case 30:fw(r);break;default:fw(r)}(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(r,Lr,Fr,Ig,Ng),h1(g),Av(v),Ng=b,Sg=l}function fw(r){for(r=r.child;r!==null;)du(r),r=r.sibling}function su(r,g,v,b){var l=b1(),o=qv(),q=Pv(),P=uv(),G=v.flags;switch(v.tag){case 0:case 11:case 15:Jv(r,v,b),mu(v,W1);break;case 1:if(Jv(r,v,b),g=v.stateNode,typeof g.componentDidMount==="function"&&Hr(v,Nq,v,g),g=v.updateQueue,g!==null){r=v.stateNode;try{Hr(v,oR,g,r)}catch(Y){og(v,v.return,Y)}}b&&G&64&&Du(v),R2(v,v.return);break;case 27:Eu(v);case 26:case 5:Jv(r,v,b),b&&g===null&&G&4&&_u(v),R2(v,v.return);break;case 12:if(b&&G&4){G=tv(),Jv(r,v,b),b=v.stateNode,b.effectDuration+=q2(G);try{Hr(v,Vu,v,g,p5,b.effectDuration)}catch(Y){og(v,v.return,Y)}}else Jv(r,v,b);break;case 31:Jv(r,v,b),b&&G&4&&fu(r,v);break;case 13:Jv(r,v,b),b&&G&4&&cu(r,v);break;case 22:v.memoizedState===null&&Jv(r,v,b),R2(v,v.return);break;case 30:break;default:Jv(r,v,b)}(v.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(v,Lr,Fr,Ig,Ng),h1(l),Av(o),Ng=q,Sg=P}function Jv(r,g,v){v=v&&(g.subtreeFlags&8772)!==0;for(g=g.child;g!==null;)su(r,g.alternate,g,v),g=g.sibling}function OO(r,g){var v=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(v=r.memoizedState.cachePool.pool),r=null,g.memoizedState!==null&&g.memoizedState.cachePool!==null&&(r=g.memoizedState.cachePool.pool),r!==v&&(r!=null&&Ew(r),v!=null&&O2(v))}function qO(r,g){r=null,g.alternate!==null&&(r=g.alternate.memoizedState.cache),g=g.memoizedState.cache,g!==r&&(Ew(g),r!=null&&O2(r))}function _1(r,g,v,b,l){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(g=g.child;g!==null;){var o=g.sibling;rW(r,g,v,b,o!==null?o.actualStartTime:l),g=o}}function rW(r,g,v,b,l){var o=b1(),q=qv(),P=Pv(),G=uv(),Y=j5,N=g.flags;switch(g.tag){case 0:case 11:case 15:(g.mode&_r)!==Br&&0<g.actualStartTime&&(g.flags&1)!==0&&t4(g,g.actualStartTime,l,w0,v),_1(r,g,v,b,l),N&2048&&ku(g,D0|T1);break;case 1:(g.mode&_r)!==Br&&0<g.actualStartTime&&((g.flags&128)!==0?t8(g,g.actualStartTime,l,[]):(g.flags&1)!==0&&t4(g,g.actualStartTime,l,w0,v)),_1(r,g,v,b,l);break;case 3:var Z=tv(),U=w0;w0=g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)===0,_1(r,g,v,b,l),w0=U,N&2048&&(v=null,g.alternate!==null&&(v=g.alternate.memoizedState.cache),b=g.memoizedState.cache,b!==v&&(Ew(b),v!=null&&O2(v))),r.passiveEffectDuration+=vo(Z);break;case 12:if(N&2048){N=tv(),_1(r,g,v,b,l),r=g.stateNode,r.passiveEffectDuration+=q2(N);try{Hr(g,RR,g,g.alternate,p5,r.passiveEffectDuration)}catch(T){og(g,g.return,T)}}else _1(r,g,v,b,l);break;case 31:N=w0,Z=g.alternate!==null?g.alternate.memoizedState:null,U=g.memoizedState,Z!==null&&U===null?(U=g.deletions,U!==null&&0<U.length&&U[0].tag===18?(w0=!1,Z=Z.hydrationErrors,Z!==null&&t8(g,g.actualStartTime,l,Z)):w0=!0):w0=!1,_1(r,g,v,b,l),w0=N;break;case 13:N=w0,Z=g.alternate!==null?g.alternate.memoizedState:null,U=g.memoizedState,Z===null||Z.dehydrated===null||U!==null&&U.dehydrated!==null?w0=!1:(U=g.deletions,U!==null&&0<U.length&&U[0].tag===18?(w0=!1,Z=Z.hydrationErrors,Z!==null&&t8(g,g.actualStartTime,l,Z)):w0=!0),_1(r,g,v,b,l),w0=N;break;case 23:break;case 22:U=g.stateNode,Z=g.alternate,g.memoizedState!==null?U._visibility&sv?_1(r,g,v,b,l):K2(r,g,v,b,l):U._visibility&sv?_1(r,g,v,b,l):(U._visibility|=sv,nb(r,g,v,b,(g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child),l),(g.mode&_r)===Br||w0||(r=g.actualStartTime,0<=r&&0.05<l-r&&j4(g,r,l),0<=Lr&&0<=Fr&&0.05<Fr-Lr&&j4(g,Lr,Fr))),N&2048&&OO(Z,g);break;case 24:_1(r,g,v,b,l),N&2048&&qO(g.alternate,g);break;default:_1(r,g,v,b,l)}if((g.mode&_r)!==Br){if(r=!w0&&g.alternate===null&&g.return!==null&&g.return.alternate!==null)v=g.actualStartTime,0<=v&&0.05<l-v&&ov(g,v,l,"Mount");0<=Lr&&0<=Fr&&((Sg||0.05<Ig)&&Hv(g,Lr,Fr,Ig,Ng),r&&0.05<Fr-Lr&&ov(g,Lr,Fr,"Mount"))}h1(o),Av(q),Ng=P,Sg=G,j5=Y}function nb(r,g,v,b,l,o){l=l&&((g.subtreeFlags&10256)!==0||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child));for(g=g.child;g!==null;){var q=g.sibling;gW(r,g,v,b,l,q!==null?q.actualStartTime:o),g=q}}function gW(r,g,v,b,l,o){var q=b1(),P=qv(),G=Pv(),Y=uv(),N=j5;l&&(g.mode&_r)!==Br&&0<g.actualStartTime&&(g.flags&1)!==0&&t4(g,g.actualStartTime,o,w0,v);var Z=g.flags;switch(g.tag){case 0:case 11:case 15:nb(r,g,v,b,l,o),ku(g,D0);break;case 23:break;case 22:var U=g.stateNode;g.memoizedState!==null?U._visibility&sv?nb(r,g,v,b,l,o):K2(r,g,v,b,o):(U._visibility|=sv,nb(r,g,v,b,l,o)),l&&Z&2048&&OO(g.alternate,g);break;case 24:nb(r,g,v,b,l,o),l&&Z&2048&&qO(g.alternate,g);break;default:nb(r,g,v,b,l,o)}(g.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(g,Lr,Fr,Ig,Ng),h1(q),Av(P),Ng=G,Sg=Y,j5=N}function K2(r,g,v,b,l){if(g.subtreeFlags&10256||g.actualDuration!==0&&(g.alternate===null||g.alternate.child!==g.child))for(var o=g.child;o!==null;){g=o.sibling;var q=r,P=v,G=b,Y=g!==null?g.actualStartTime:l,N=j5;(o.mode&_r)!==Br&&0<o.actualStartTime&&(o.flags&1)!==0&&t4(o,o.actualStartTime,Y,w0,P);var Z=o.flags;switch(o.tag){case 22:K2(q,o,P,G,Y),Z&2048&&OO(o.alternate,o);break;case 24:K2(q,o,P,G,Y),Z&2048&&qO(o.alternate,o);break;default:K2(q,o,P,G,Y)}j5=N,o=g}}function jb(r,g,v){if(r.subtreeFlags&ul)for(r=r.child;r!==null;)vW(r,g,v),r=r.sibling}function vW(r,g,v){switch(r.tag){case 26:jb(r,g,v),r.flags&ul&&r.memoizedState!==null&&uK(v,t1,r.memoizedState,r.memoizedProps);break;case 5:jb(r,g,v);break;case 3:case 4:var b=t1;t1=Do(r.stateNode.containerInfo),jb(r,g,v),t1=b;break;case 22:r.memoizedState===null&&(b=r.alternate,b!==null&&b.memoizedState!==null?(b=ul,ul=16777216,jb(r,g,v),ul=b):jb(r,g,v));break;default:jb(r,g,v)}}function wW(r){var g=r.alternate;if(g!==null&&(r=g.child,r!==null)){g.child=null;do g=r.sibling,r.sibling=null,r=g;while(r!==null)}}function $2(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var v=0;v<g.length;v++){var b=g[v],l=b1();H0=b,lW(b,r),(b.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&ov(b,Lr,Fr,"Unmount"),h1(l)}wW(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bW(r),r=r.sibling}function bW(r){var g=b1(),v=qv(),b=Pv(),l=uv();switch(r.tag){case 0:case 11:case 15:$2(r),r.flags&2048&&hO(r,r.return,D0|T1);break;case 3:var o=tv();$2(r),r.stateNode.passiveEffectDuration+=vo(o);break;case 12:o=tv(),$2(r),r.stateNode.passiveEffectDuration+=q2(o);break;case 22:o=r.stateNode,r.memoizedState!==null&&o._visibility&sv&&(r.return===null||r.return.tag!==13)?(o._visibility&=~sv,Io(r),(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&ov(r,Lr,Fr,"Disconnect")):$2(r);break;default:$2(r)}(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(r,Lr,Fr,Ig,Ng),h1(g),Av(v),Sg=l,Ng=b}function Io(r){var g=r.deletions;if((r.flags&16)!==0){if(g!==null)for(var v=0;v<g.length;v++){var b=g[v],l=b1();H0=b,lW(b,r),(b.mode&_r)!==Br&&0<=Lr&&0<=Fr&&0.05<Fr-Lr&&ov(b,Lr,Fr,"Unmount"),h1(l)}wW(r)}for(r=r.child;r!==null;)hW(r),r=r.sibling}function hW(r){var g=b1(),v=qv(),b=Pv(),l=uv();switch(r.tag){case 0:case 11:case 15:hO(r,r.return,D0),Io(r);break;case 22:var o=r.stateNode;o._visibility&sv&&(o._visibility&=~sv,Io(r));break;default:Io(r)}(r.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(r,Lr,Fr,Ig,Ng),h1(g),Av(v),Sg=l,Ng=b}function lW(r,g){for(;H0!==null;){var v=H0,b=v,l=g,o=b1(),q=qv(),P=Pv(),G=uv();switch(b.tag){case 0:case 11:case 15:hO(b,l,D0);break;case 23:case 22:b.memoizedState!==null&&b.memoizedState.cachePool!==null&&(l=b.memoizedState.cachePool.pool,l!=null&&Ew(l));break;case 24:O2(b.memoizedState.cache)}if((b.mode&_r)!==Br&&0<=Lr&&0<=Fr&&(Sg||0.05<Ig)&&Hv(b,Lr,Fr,Ig,Ng),h1(o),Av(q),Sg=G,Ng=P,b=v.child,b!==null)b.return=v,H0=b;else r:for(v=r;H0!==null;){if(b=H0,o=b.sibling,q=b.return,ju(b),b===v){H0=null;break r}if(o!==null){o.return=q,H0=o;break r}H0=q}}}function LR(){t$.forEach(function(r){return r()})}function oW(){var r=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return r||k.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),r}function o1(r){if((vg&b0)!==O0&&Er!==0)return Er&-Er;var g=k.T;return g!==null?(g._updatedFibers||(g._updatedFibers=new Set),g._updatedFibers.add(r),YO()):x()}function HW(){if(a0===0)if((Er&536870912)===0||ar){var r=po;po<<=1,(po&3932160)===0&&(po=262144),a0=r}else a0=536870912;return r=u1.current,r!==null&&(r.flags|=32),a0}function Cg(r,g,v){if(Ih&&console.error("useInsertionEffect must not schedule updates."),sq&&(m6=!0),r===Yg&&(Ag===Ob||Ag===qb)||r.cancelPendingCommit!==null)fb(r,0),D5(r,Er,a0,!1);if(L5(r,v),(vg&b0)!==O0&&r===Yg){if($v)switch(g.tag){case 0:case 11:case 15:r=nr&&D(nr)||"Unknown",SM.has(r)||(SM.add(r),g=D(g)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",g,r,r));break;case 1:CM||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),CM=!0)}}else Lv&&dh(r,g,v),mR(g),r===Yg&&((vg&b0)===O0&&(hw|=v),xg===vw&&D5(r,Er,a0,!1)),Qv(r)}function OW(r,g,v){if((vg&(b0|M1))!==O0)throw Error("Should not already be working.");if(Er!==0&&nr!==null){var b=nr,l=l0();switch(F3){case Gl:case Ob:var o=s2;Ug&&((b=b._debugTask)?b.run(console.timeStamp.bind(console,"Suspended",o,l,U1,void 0,"primary-light")):console.timeStamp("Suspended",o,l,U1,void 0,"primary-light"));break;case qb:o=s2,Ug&&((b=b._debugTask)?b.run(console.timeStamp.bind(console,"Action",o,l,U1,void 0,"primary-light")):console.timeStamp("Action",o,l,U1,void 0,"primary-light"));break;default:Ug&&(b=l-s2,3>b||console.timeStamp("Blocked",s2,l,U1,void 0,5>b?"primary-light":10>b?"primary":100>b?"primary-dark":"error"))}}o=(v=!v&&(g&127)===0&&(g&r.expiredLanes)===0||Zw(r,g))?BR(r,g):PO(r,g,!0);var q=v;do{if(o===q5){Nh&&!v&&D5(r,g,0,!1),g=Ag,s2=cg(),F3=g;break}else{if(b=l0(),l=r.current.alternate,q&&!FR(l)){v1(g),l=o0,o=b,!Ug||o<=l||(ig?ig.run(console.timeStamp.bind(console,"Teared Render",l,o,cr,fr,"error")):console.timeStamp("Teared Render",l,o,cr,fr,"error")),cw(g,b),o=PO(r,g,!1),q=!1;continue}if(o===Hb){if(q=g,r.errorRecoveryDisabledLanes&q)var P=0;else P=r.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){v1(g),f8(o0,b,g,ig),cw(g,b),g=P;r:{b=r,o=q,q=Yl;var G=b.current.memoizedState.isDehydrated;if(G&&(fb(b,P).flags|=256),P=PO(b,P,!1),P!==Hb){if(nq&&!G){b.errorRecoveryDisabledLanes|=o,hw|=o,o=vw;break r}b=i0,i0=q,b!==null&&(i0===null?i0=b:i0.push.apply(i0,b))}o=P}if(q=!1,o!==Hb)continue;else b=l0()}}if(o===Ml){v1(g),f8(o0,b,g,ig),cw(g,b),fb(r,0),D5(r,g,0,!0);break}r:{switch(v=r,o){case q5:case Ml:throw Error("Root did not complete. This is a bug in React.");case vw:if((g&4194048)!==g)break;case B6:v1(g),O9(o0,b,g,ig),cw(g,b),l=g,(l&127)!==0?u6=b:(l&4194048)!==0&&(W6=b),D5(v,g,a0,!ww);break r;case Hb:i0=null;break;case F6:case zM:break;default:throw Error("Unknown root exit status.")}if(k.actQueue!==null)uO(v,l,g,i0,Jl,I6,a0,hw,Ab,o,null,null,o0,b);else{if((g&62914560)===g&&(q=x6+$M-l0(),10<q)){if(D5(v,g,a0,!ww),Nw(v,0,!0)!==0)break r;f1=g,v.timeoutHandle=EM(qW.bind(null,v,l,i0,Jl,I6,g,a0,hw,Ab,ww,o,"Throttled",o0,b),q);break r}qW(v,l,i0,Jl,I6,g,a0,hw,Ab,ww,o,null,o0,b)}}}break}while(1);Qv(r)}function qW(r,g,v,b,l,o,q,P,G,Y,N,Z,U,T){r.timeoutHandle=Gb;var lr=g.subtreeFlags,Wr=null;if(lr&8192||(lr&16785408)===16785408){if(Wr={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ev},vW(g,o,Wr),lr=(o&62914560)===o?x6-l0():(o&4194048)===o?KM-l0():0,lr=WK(Wr,lr),lr!==null){f1=o,r.cancelPendingCommit=lr(uO.bind(null,r,g,o,v,b,l,q,P,G,N,Wr,Wr.waitingForViewTransition?"Waiting for the previous Animation":0<Wr.count?0<Wr.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Wr.imgCount===1?"Suspended on an Image":0<Wr.imgCount?"Suspended on Images":null,U,T)),D5(r,o,q,!Y);return}}uO(r,g,o,v,b,l,q,P,G,N,Wr,Z,U,T)}function FR(r){for(var g=r;;){var v=g.tag;if((v===0||v===11||v===15)&&g.flags&16384&&(v=g.updateQueue,v!==null&&(v=v.stores,v!==null)))for(var b=0;b<v.length;b++){var l=v[b],o=l.getSnapshot;l=l.value;try{if(!S0(o(),l))return!1}catch(q){return!1}}if(v=g.child,g.subtreeFlags&16384&&v!==null)v.return=g,g=v;else{if(g===r)break;for(;g.sibling===null;){if(g.return===null||g.return===r)return!0;g=g.return}g.sibling.return=g.return,g=g.sibling}}return!0}function D5(r,g,v,b){g&=~jq,g&=~hw,r.suspendedLanes|=g,r.pingedLanes&=~g,b&&(r.warmLanes|=g),b=r.expirationTimes;for(var l=g;0<l;){var o=31-x0(l),q=1<<o;b[o]=-1,l&=~q}v!==0&&Iw(r,v,g)}function tb(){return(vg&(b0|M1))===O0?(F2(0,!1),!1):!0}function AO(){if(nr!==null){if(Ag===p0)var r=nr.return;else r=nr,s4(),RH(r),Qh=null,Hl=0,r=nr;for(;r!==null;)Su(r.alternate,r),r=r.return;nr=null}}function cw(r,g){(r&127)!==0&&(a5=g),(r&4194048)!==0&&(Iv=g),(r&62914560)!==0&&(U3=g),(r&2080374784)!==0&&(L3=g)}function fb(r,g){Ug&&(console.timeStamp("Blocking Track",0.003,0.003,"Blocking",fr,"primary-light"),console.timeStamp("Transition Track",0.003,0.003,"Transition",fr,"primary-light"),console.timeStamp("Suspense Track",0.003,0.003,"Suspense",fr,"primary-light"),console.timeStamp("Idle Track",0.003,0.003,"Idle",fr,"primary-light"));var v=o0;if(o0=cg(),Er!==0&&0<v){if(v1(Er),xg===F6||xg===vw)O9(v,o0,g,ig);else{var b=o0,l=ig;if(Ug&&!(b<=v)){var o=(g&738197653)===g?"tertiary-dark":"primary-dark",q=(g&536870912)===g?"Prewarm":(g&201326741)===g?"Interrupted Hydration":"Interrupted Render";l?l.run(console.timeStamp.bind(console,q,v,b,cr,fr,o)):console.timeStamp(q,v,b,cr,fr,o)}}cw(Er,o0)}if(v=ig,ig=null,(g&127)!==0){ig=p2,l=0<=Zv&&Zv<a5?a5:Zv,b=0<=rb&&rb<a5?a5:rb,o=0<=b?b:0<=l?l:o0,0<=u6?(v1(2),q9(u6,o,g,v)):(M6&127)!==0&&(v1(2),o2(a5,o,h5)),v=l;var P=b,G=a2,Y=0<Xh,N=d5===c2,Z=d5===P6;if(l=o0,b=p2,o=$q,q=Uq,Ug){if(cr="Blocking",0<v?v>l&&(v=l):v=l,0<P?P>v&&(P=v):P=v,G!==null&&v>P){var U=Y?"secondary-light":"warning";b?b.run(console.timeStamp.bind(console,Y?"Consecutive":"Event: "+G,P,v,cr,fr,U)):console.timeStamp(Y?"Consecutive":"Event: "+G,P,v,cr,fr,U)}l>v&&(P=N?"error":(g&738197653)===g?"tertiary-light":"primary-light",N=Z?"Promise Resolved":N?"Cascading Update":5<l-v?"Update Blocked":"Update",Z=[],q!=null&&Z.push(["Component name",q]),o!=null&&Z.push(["Method name",o]),v={start:v,end:l,detail:{devtools:{properties:Z,track:cr,trackGroup:fr,color:P}}},b?b.run(performance.measure.bind(performance,N,v)):performance.measure(N,v))}Zv=-1.1,d5=0,Uq=$q=null,u6=-1.1,Xh=rb,rb=-1.1,a5=cg()}if((g&4194048)!==0&&(ig=d2,l=0<=b5&&b5<Iv?Iv:b5,v=0<=I1&&I1<Iv?Iv:I1,b=0<=s5&&s5<Iv?Iv:s5,o=0<=b?b:0<=v?v:o0,0<=W6?(v1(256),q9(W6,o,g,ig)):(M6&4194048)!==0&&(v1(256),o2(Iv,o,h5)),Z=b,P=gb,G=0<rw,Y=Lq===P6,o=o0,b=d2,q=K3,N=$3,Ug&&(cr="Transition",0<v?v>o&&(v=o):v=o,0<l?l>v&&(l=v):l=v,0<Z?Z>l&&(Z=l):Z=l,l>Z&&P!==null&&(U=G?"secondary-light":"warning",b?b.run(console.timeStamp.bind(console,G?"Consecutive":"Event: "+P,Z,l,cr,fr,U)):console.timeStamp(G?"Consecutive":"Event: "+P,Z,l,cr,fr,U)),v>l&&(b?b.run(console.timeStamp.bind(console,"Action",l,v,cr,fr,"primary-dark")):console.timeStamp("Action",l,v,cr,fr,"primary-dark")),o>v&&(l=Y?"Promise Resolved":5<o-v?"Update Blocked":"Update",Z=[],N!=null&&Z.push(["Component name",N]),q!=null&&Z.push(["Method name",q]),v={start:v,end:o,detail:{devtools:{properties:Z,track:cr,trackGroup:fr,color:"primary-light"}}},b?b.run(performance.measure.bind(performance,l,v)):performance.measure(l,v))),I1=b5=-1.1,Lq=0,W6=-1.1,rw=s5,s5=-1.1,Iv=cg()),(g&62914560)!==0&&(M6&62914560)!==0&&(v1(4194304),o2(U3,o0,h5)),(g&2080374784)!==0&&(M6&2080374784)!==0&&(v1(268435456),o2(L3,o0,h5)),v=r.timeoutHandle,v!==Gb&&(r.timeoutHandle=Gb,lU(v)),v=r.cancelPendingCommit,v!==null&&(r.cancelPendingCommit=null,v()),f1=0,AO(),Yg=r,nr=v=yv(r.current,null),Er=g,Ag=p0,G1=null,ww=!1,Nh=Zw(r,g),nq=!1,xg=q5,Ab=a0=jq=hw=bw=0,i0=Yl=null,I6=!1,(g&8)!==0&&(g|=g&32),b=r.entangledLanes,b!==0)for(r=r.entanglements,b&=g;0<b;)l=31-x0(b),o=1<<l,g|=r[l],b&=~o;return Tv=g,f4(),r=X3(),1000<r-G3&&(k.recentlyCreatedOwnerStacks=0,G3=r),n1.discardPendingWarnings(),v}function AW(r,g){Nr=null,k.H=Pl,k.getCurrentStack=null,$v=!1,q1=null,g===Jh||g===J6?(g=x9(),Ag=Gl):g===Zq?(g=x9(),Ag=RM):Ag=g===Vq?yq:g!==null&&typeof g==="object"&&typeof g.then==="function"?Xl:N6,G1=g;var v=nr;v===null?(xg=Ml,$o(r,w1(g,r.current))):v.mode&_r&&OH(v)}function PW(){var r=u1.current;return r===null?!0:(Er&4194048)===Er?x1===null?!0:!1:(Er&62914560)===Er||(Er&536870912)!==0?r===x1:!1}function uW(){var r=k.H;return k.H=Pl,r===null?Pl:r}function WW(){var r=k.A;return k.A=j$,r}function xo(r){ig===null&&(ig=r._debugTask==null?null:r._debugTask)}function To(){xg=vw,ww||(Er&4194048)!==Er&&u1.current!==null||(Nh=!0),(bw&134217727)===0&&(hw&134217727)===0||Yg===null||D5(Yg,Er,a0,!1)}function PO(r,g,v){var b=vg;vg|=b0;var l=uW(),o=WW();if(Yg!==r||Er!==g){if(Lv){var q=r.memoizedUpdaters;0<q.size&&(L2(r,Er),q.clear()),F5(r,g)}Jl=null,fb(r,g)}g=!1,q=xg;r:do try{if(Ag!==p0&&nr!==null){var P=nr,G=G1;switch(Ag){case yq:AO(),q=B6;break r;case Gl:case Ob:case qb:case Xl:u1.current===null&&(g=!0);var Y=Ag;if(Ag=p0,G1=null,cb(r,P,G,Y),v&&Nh){q=q5;break r}break;default:Y=Ag,Ag=p0,G1=null,cb(r,P,G,Y)}}MW(),q=xg;break}catch(N){AW(r,N)}while(1);return g&&r.shellSuspendCounter++,s4(),vg=b,k.H=l,k.A=o,nr===null&&(Yg=null,Er=0,f4()),q}function MW(){for(;nr!==null;)GW(nr)}function BR(r,g){var v=vg;vg|=b0;var b=uW(),l=WW();if(Yg!==r||Er!==g){if(Lv){var o=r.memoizedUpdaters;0<o.size&&(L2(r,Er),o.clear()),F5(r,g)}Jl=null,T6=l0()+UM,fb(r,g)}else Nh=Zw(r,g);r:do try{if(Ag!==p0&&nr!==null)g:switch(g=nr,o=G1,Ag){case N6:Ag=p0,G1=null,cb(r,g,o,N6);break;case Ob:case qb:if(Z9(o)){Ag=p0,G1=null,XW(g);break}g=function(){Ag!==Ob&&Ag!==qb||Yg!==r||(Ag=Z6),Qv(r)},o.then(g,g);break r;case Gl:Ag=Z6;break r;case RM:Ag=Eq;break r;case Z6:Z9(o)?(Ag=p0,G1=null,XW(g)):(Ag=p0,G1=null,cb(r,g,o,Z6));break;case Eq:var q=null;switch(nr.tag){case 26:q=nr.memoizedState;case 5:case 27:var P=nr;if(q?O7(q):P.stateNode.complete){Ag=p0,G1=null;var G=P.sibling;if(G!==null)nr=G;else{var Y=P.return;Y!==null?(nr=Y,Co(Y)):nr=null}break g}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}Ag=p0,G1=null,cb(r,g,o,Eq);break;case Xl:Ag=p0,G1=null,cb(r,g,o,Xl);break;case yq:AO(),xg=B6;break r;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}k.actQueue!==null?MW():NR();break}catch(N){AW(r,N)}while(1);if(s4(),k.H=b,k.A=l,vg=v,nr!==null)return q5;return Yg=null,Er=0,f4(),xg}function NR(){for(;nr!==null&&!FK();)GW(nr)}function GW(r){var g=r.alternate;(r.mode&_r)!==Br?(HH(r),g=Hr(r,vO,g,r,Tv),OH(r)):g=Hr(r,vO,g,r,Tv),r.memoizedProps=r.pendingProps,g===null?Co(r):nr=g}function XW(r){var g=Hr(r,ZR,r);r.memoizedProps=r.pendingProps,g===null?Co(r):nr=g}function ZR(r){var g=r.alternate,v=(r.mode&_r)!==Br;switch(v&&HH(r),r.tag){case 15:case 0:g=Bu(g,r,r.pendingProps,r.type,void 0,Er);break;case 11:g=Bu(g,r,r.pendingProps,r.type.render,r.ref,Er);break;case 5:RH(r);default:Su(g,r),r=nr=G9(r,Tv),g=vO(g,r,Tv)}return v&&OH(r),g}function cb(r,g,v,b){s4(),RH(g),Qh=null,Hl=0;var l=g.return;try{if(WR(r,l,g,v,Er)){xg=Ml,$o(r,w1(v,r.current)),nr=null;return}}catch(o){if(l!==null)throw nr=l,o;xg=Ml,$o(r,w1(v,r.current)),nr=null;return}if(g.flags&32768){if(ar||b===N6)r=!0;else if(Nh||(Er&536870912)!==0)r=!1;else if(ww=r=!0,b===Ob||b===qb||b===Gl||b===Xl)b=u1.current,b!==null&&b.tag===13&&(b.flags|=16384);YW(g,r)}else Co(g)}function Co(r){var g=r;do{if((g.flags&32768)!==0){YW(g,ww);return}var v=g.alternate;if(r=g.return,HH(g),v=Hr(g,XR,v,g,Tv),(g.mode&_r)!==Br&&U9(g),v!==null){nr=v;return}if(g=g.sibling,g!==null){nr=g;return}nr=g=r}while(g!==null);xg===q5&&(xg=zM)}function YW(r,g){do{var v=YR(r.alternate,r);if(v!==null){v.flags&=32767,nr=v;return}if((r.mode&_r)!==Br){U9(r),v=r.actualDuration;for(var b=r.child;b!==null;)v+=b.actualDuration,b=b.sibling;r.actualDuration=v}if(v=r.return,v!==null&&(v.flags|=32768,v.subtreeFlags=0,v.deletions=null),!g&&(r=r.sibling,r!==null)){nr=r;return}nr=r=v}while(r!==null);xg=B6,nr=null}function uO(r,g,v,b,l,o,q,P,G,Y,N,Z,U,T){r.cancelPendingCommit=null;do U2();while(r0!==ow);if(n1.flushLegacyContextWarning(),n1.flushPendingUnsafeLifecycleWarnings(),(vg&(b0|M1))!==O0)throw Error("Should not already be working.");if(v1(v),Y===Hb?f8(U,T,v,ig):b!==null?gR(U,T,v,b,g!==null&&g.alternate!==null&&g.alternate.memoizedState.isDehydrated&&(g.flags&256)!==0,ig):rR(U,T,v,ig),g!==null){if(v===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),g===r.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");if(o=g.lanes|g.childLanes,o|=Jq,k4(r,v,o,q,P,G),r===Yg&&(nr=Yg=null,Er=0),Zh=g,Hw=r,f1=v,cq=o,aq=l,IM=b,pq=T,xM=Z,c1=C6,TM=null,g.actualDuration!==0||(g.subtreeFlags&10256)!==0||(g.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,SR(gh,function(){return Ul=window.event,c1===C6&&(c1=fq),KW(),null})):(r.callbackNode=null,r.callbackPriority=0),w5=null,p5=cg(),Z!==null&&vR(T,p5,Z,ig),b=(g.flags&13878)!==0,(g.subtreeFlags&13878)!==0||b){b=k.T,k.T=null,l=Hg.p,Hg.p=A1,q=vg,vg|=M1;try{$R(r,g,v)}finally{vg=q,Hg.p=l,k.T=b}}r0=FM,JW(),QW(),zW()}}function JW(){if(r0===FM){r0=ow;var r=Hw,g=Zh,v=f1,b=(g.flags&13878)!==0;if((g.subtreeFlags&13878)!==0||b){b=k.T,k.T=null;var l=Hg.p;Hg.p=A1;var o=vg;vg|=M1;try{Fh=v,Bh=r,wo(),pu(g,r),Bh=Fh=null,v=HA;var q=l9(r.containerInfo),P=v.focusedElem,G=v.selectionRange;if(q!==P&&P&&P.ownerDocument&&h9(P.ownerDocument.documentElement,P)){if(G!==null&&n8(P)){var{start:Y,end:N}=G;if(N===void 0&&(N=Y),"selectionStart"in P)P.selectionStart=Y,P.selectionEnd=Math.min(N,P.value.length);else{var Z=P.ownerDocument||document,U=Z&&Z.defaultView||window;if(U.getSelection){var T=U.getSelection(),lr=P.textContent.length,Wr=Math.min(G.start,lr),Rg=G.end===void 0?Wr:Math.min(G.end,lr);!T.extend&&Wr>Rg&&(q=Rg,Rg=Wr,Wr=q);var sr=b9(P,Wr),$=b9(P,Rg);if(sr&&$&&(T.rangeCount!==1||T.anchorNode!==sr.node||T.anchorOffset!==sr.offset||T.focusNode!==$.node||T.focusOffset!==$.offset)){var L=Z.createRange();L.setStart(sr.node,sr.offset),T.removeAllRanges(),Wr>Rg?(T.addRange(L),T.extend($.node,$.offset)):(L.setEnd($.node,$.offset),T.addRange(L))}}}}Z=[];for(T=P;T=T.parentNode;)T.nodeType===1&&Z.push({element:T,left:T.scrollLeft,top:T.scrollTop});typeof P.focus==="function"&&P.focus();for(P=0;P<Z.length;P++){var B=Z[P];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}p6=!!oA,HA=oA=null}finally{vg=o,Hg.p=l,k.T=b}}r.current=g,r0=BM}}function QW(){if(r0===BM){r0=ow;var r=TM;if(r!==null){p5=cg();var g=v5,v=p5;!Ug||v<=g||(h5?h5.run(console.timeStamp.bind(console,r,g,v,cr,fr,"secondary-light")):console.timeStamp(r,g,v,cr,fr,"secondary-light"))}r=Hw,g=Zh,v=f1;var b=(g.flags&8772)!==0;if((g.subtreeFlags&8772)!==0||b){b=k.T,k.T=null;var l=Hg.p;Hg.p=A1;var o=vg;vg|=M1;try{Fh=v,Bh=r,wo(),nu(r,g.alternate,g),Bh=Fh=null}finally{vg=o,Hg.p=l,k.T=b}}r=pq,g=xM,v5=cg(),r=g===null?r:p5,g=v5,v=c1===tq,b=ig,w5!==null?A9(r,g,w5,!1,b):!Ug||g<=r||(b?b.run(console.timeStamp.bind(console,v?"Commit Interrupted View Transition":"Commit",r,g,cr,fr,v?"error":"secondary-dark")):console.timeStamp(v?"Commit Interrupted View Transition":"Commit",r,g,cr,fr,v?"error":"secondary-dark")),r0=NM}}function zW(){if(r0===ZM||r0===NM){if(r0===ZM){var r=v5;v5=cg();var g=v5,v=c1===tq;!Ug||g<=r||(h5?h5.run(console.timeStamp.bind(console,v?"Interrupted View Transition":"Starting Animation",r,g,cr,fr,v?"error":"secondary-light")):console.timeStamp(v?"Interrupted View Transition":"Starting Animation",r,g,cr,fr,v?" error":"secondary-light")),c1!==tq&&(c1=LM)}r0=ow,BK(),r=Hw;var b=Zh;g=f1,v=IM;var l=b.actualDuration!==0||(b.subtreeFlags&10256)!==0||(b.flags&10256)!==0;l?r0=S6:(r0=ow,Zh=Hw=null,RW(r,r.pendingLanes),Pb=0,zl=null);var o=r.pendingLanes;if(o===0&&(lw=null),l||FW(r),o=J(g),b=b.stateNode,L0&&typeof L0.onCommitFiberRoot==="function")try{var q=(b.current.flags&128)===128;switch(o){case A1:var P=aO;break;case E1:P=dO;break;case Fv:P=gh;break;case so:P=sO;break;default:P=gh}L0.onCommitFiberRoot(vh,b,P,q)}catch(Z){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",Z))}if(Lv&&r.memoizedUpdaters.clear(),LR(),v!==null){q=k.T,P=Hg.p,Hg.p=A1,k.T=null;try{var G=r.onRecoverableError;for(b=0;b<v.length;b++){var Y=v[b],N=IR(Y.stack);Hr(Y.source,G,Y.value,N)}}finally{k.T=q,Hg.p=P}}(f1&3)!==0&&U2(),Qv(r),o=r.pendingLanes,(g&261930)!==0&&(o&42)!==0?(X6=!0,r===dq?Ql++:(Ql=0,dq=r)):Ql=0,l||cw(g,v5),F2(0,!1)}}function IR(r){return r={componentStack:r},Object.defineProperty(r,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),r}function RW(r,g){(r.pooledCacheLanes&=g)===0&&(g=r.pooledCache,g!=null&&(r.pooledCache=null,O2(g)))}function U2(){return JW(),QW(),zW(),KW()}function KW(){if(r0!==S6)return!1;var r=Hw,g=cq;cq=0;var v=J(f1),b=Fv===0||Fv>v?Fv:v;v=k.T;var l=Hg.p;try{Hg.p=b,k.T=null;var o=aq;aq=null,b=Hw;var q=f1;if(r0=ow,Zh=Hw=null,f1=0,(vg&(b0|M1))!==O0)throw Error("Cannot flush passive effects while already rendering.");v1(q),sq=!0,m6=!1;var P=0;if(w5=null,P=l0(),c1===LM)o2(v5,P,h5);else{var G=v5,Y=P,N=c1===fq;!Ug||Y<=G||(ig?ig.run(console.timeStamp.bind(console,N?"Waiting for Paint":"Waiting",G,Y,cr,fr,"secondary-light")):console.timeStamp(N?"Waiting for Paint":"Waiting",G,Y,cr,fr,"secondary-light"))}G=vg,vg|=M1;var Z=b.current;wo(),bW(Z);var U=b.current;Z=pq,wo(),rW(b,U,q,o,Z),FW(b),vg=G;var T=l0();if(U=P,Z=ig,w5!==null?A9(U,T,w5,!0,Z):!Ug||T<=U||(Z?Z.run(console.timeStamp.bind(console,"Remaining Effects",U,T,cr,fr,"secondary-dark")):console.timeStamp("Remaining Effects",U,T,cr,fr,"secondary-dark")),cw(q,T),F2(0,!1),m6?b===zl?Pb++:(Pb=0,zl=b):Pb=0,m6=sq=!1,L0&&typeof L0.onPostCommitFiberRoot==="function")try{L0.onPostCommitFiberRoot(vh,b)}catch(Wr){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",Wr))}var lr=b.current.stateNode;return lr.effectDuration=0,lr.passiveEffectDuration=0,!0}finally{Hg.p=l,k.T=v,RW(r,g)}}function $W(r,g,v){g=w1(v,g),L9(g),g=nH(r.stateNode,g,2),r=C5(r,g,2),r!==null&&(L5(r,2),Qv(r))}function og(r,g,v){if(Ih=!1,r.tag===3)$W(r,r,v);else{for(;g!==null;){if(g.tag===3){$W(g,r,v);return}if(g.tag===1){var b=g.stateNode;if(typeof g.type.getDerivedStateFromError==="function"||typeof b.componentDidCatch==="function"&&(lw===null||!lw.has(b))){r=w1(v,r),L9(r),v=jH(2),b=C5(g,v,2),b!==null&&(tH(v,b,g,r),L5(b,2),Qv(b));return}}g=g.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,v)}}function WO(r,g,v){var b=r.pingCache;if(b===null){b=r.pingCache=new f$;var l=new Set;b.set(g,l)}else l=b.get(g),l===void 0&&(l=new Set,b.set(g,l));l.has(v)||(nq=!0,l.add(v),b=xR.bind(null,r,g,v),Lv&&L2(r,v),g.then(b,b))}function xR(r,g,v){var b=r.pingCache;b!==null&&b.delete(g),r.pingedLanes|=r.suspendedLanes&v,r.warmLanes&=~v,(v&127)!==0?0>Zv&&(a5=Zv=cg(),p2=A6("Promise Resolved"),d5=P6):(v&4194048)!==0&&0>I1&&(Iv=I1=cg(),d2=A6("Promise Resolved"),Lq=P6),oW()&&k.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Yg===r&&(Er&v)===v&&(xg===vw||xg===F6&&(Er&62914560)===Er&&l0()-x6<$M?(vg&b0)===O0&&fb(r,0):jq|=v,Ab===Er&&(Ab=0)),Qv(r)}function UW(r,g){g===0&&(g=Tb()),r=U0(r,g),r!==null&&(L5(r,g),Qv(r))}function TR(r){var g=r.memoizedState,v=0;g!==null&&(v=g.retryLane),UW(r,v)}function CR(r,g){var v=0;switch(r.tag){case 31:case 13:var{stateNode:b,memoizedState:l}=r;l!==null&&(v=l.retryLane);break;case 19:b=r.stateNode;break;case 22:b=r.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}b!==null&&b.delete(g),UW(r,v)}function MO(r,g,v){if((g.subtreeFlags&67117056)!==0)for(g=g.child;g!==null;){var b=r,l=g,o=l.type===jo;o=v||o,l.tag!==22?l.flags&67108864?o&&Hr(l,LW,b,l):MO(b,l,o):l.memoizedState===null&&(o&&l.flags&8192?Hr(l,LW,b,l):l.subtreeFlags&67108864&&Hr(l,MO,b,l,o)),g=g.sibling}}function LW(r,g){Qg(!0);try{du(g),hW(g),su(r,g.alternate,g,!1),gW(r,g,0,null,!1,0)}finally{Qg(!1)}}function FW(r){var g=!0;r.current.mode&(F0|y1)||(g=!1),MO(r,r.current,g)}function BW(r){if((vg&b0)===O0){var g=r.tag;if(g===3||g===1||g===0||g===11||g===14||g===15){if(g=D(r)||"ReactComponent",k6!==null){if(k6.has(g))return;k6.add(g)}else k6=new Set([g]);Hr(r,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function L2(r,g){Lv&&r.memoizedUpdaters.forEach(function(v){dh(r,v,g)})}function SR(r,g){var v=k.actQueue;return v!==null?(v.push(g),a$):pO(r,g)}function mR(r){oW()&&k.actQueue===null&&Hr(r,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,D(r))})}function Qv(r){r!==xh&&r.next===null&&(xh===null?D6=xh=r:xh=xh.next=r),i6=!0,k.actQueue!==null?gA||(gA=!0,xW()):rA||(rA=!0,xW())}function F2(r,g){if(!vA&&i6){vA=!0;do{var v=!1;for(var b=D6;b!==null;){if(!g)if(r!==0){var l=b.pendingLanes;if(l===0)var o=0;else{var{suspendedLanes:q,pingedLanes:P}=b;o=(1<<31-x0(42|r)+1)-1,o&=l&~(q&~P),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(v=!0,IW(b,o))}else o=Er,o=Nw(b,b===Yg?o:0,b.cancelPendingCommit!==null||b.timeoutHandle!==Gb),(o&3)===0||Zw(b,o)||(v=!0,IW(b,o));b=b.next}}while(v);vA=!1}}function kR(){Ul=window.event,GO()}function GO(){i6=gA=rA=!1;var r=0;Ow!==0&&yR()&&(r=Ow);for(var g=l0(),v=null,b=D6;b!==null;){var l=b.next,o=NW(b,g);if(o===0)b.next=null,v===null?D6=l:v.next=l,l===null&&(xh=v);else if(v=b,r!==0||(o&3)!==0)i6=!0;b=l}r0!==ow&&r0!==S6||F2(r,!1),Ow!==0&&(Ow=0)}function NW(r,g){for(var{suspendedLanes:v,pingedLanes:b,expirationTimes:l}=r,o=r.pendingLanes&-62914561;0<o;){var q=31-x0(o),P=1<<q,G=l[q];if(G===-1){if((P&v)===0||(P&b)!==0)l[q]=C8(P,g)}else G<=g&&(r.expiredLanes|=P);o&=~P}if(g=Yg,v=Er,v=Nw(r,r===g?v:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Gb),b=r.callbackNode,v===0||r===g&&(Ag===Ob||Ag===qb)||r.cancelPendingCommit!==null)return b!==null&&XO(b),r.callbackNode=null,r.callbackPriority=0;if((v&3)===0||Zw(r,v)){if(g=v&-v,g!==r.callbackPriority||k.actQueue!==null&&b!==wA)XO(b);else return g;switch(J(v)){case A1:case E1:v=dO;break;case Fv:v=gh;break;case so:v=sO;break;default:v=gh}return b=ZW.bind(null,r),k.actQueue!==null?(k.actQueue.push(b),v=wA):v=pO(v,b),r.callbackPriority=g,r.callbackNode=v,g}return b!==null&&XO(b),r.callbackPriority=2,r.callbackNode=null,2}function ZW(r,g){if(X6=G6=!1,Ul=window.event,r0!==ow&&r0!==S6)return r.callbackNode=null,r.callbackPriority=0,null;var v=r.callbackNode;if(c1===C6&&(c1=fq),U2()&&r.callbackNode!==v)return null;var b=Er;if(b=Nw(r,r===Yg?b:0,r.cancelPendingCommit!==null||r.timeoutHandle!==Gb),b===0)return null;return OW(r,b,g),NW(r,l0()),r.callbackNode!=null&&r.callbackNode===v?ZW.bind(null,r):null}function IW(r,g){if(U2())return null;G6=X6,X6=!1,OW(r,g,!0)}function XO(r){r!==wA&&r!==null&&LK(r)}function xW(){k.actQueue!==null&&k.actQueue.push(function(){return GO(),null}),oU(function(){(vg&(b0|M1))!==O0?pO(aO,kR):GO()})}function YO(){if(Ow===0){var r=vb;r===0&&(r=co,co<<=1,(co&261888)===0&&(co=256)),Ow=r}return Ow}function TW(r){if(r==null||typeof r==="symbol"||typeof r==="boolean")return null;if(typeof r==="function")return r;return ug(r,"action"),b2(""+r)}function CW(r,g){var v=g.ownerDocument.createElement("input");return v.name=g.name,v.value=g.value,r.id&&v.setAttribute("form",r.id),g.parentNode.insertBefore(v,g),r=new FormData(r),v.parentNode.removeChild(v),r}function DR(r,g,v,b,l){if(g==="submit"&&v&&v.stateNode===l){var o=TW((l[T0]||null).action),q=b.submitter;q&&(g=(g=q[T0]||null)?TW(g.formAction):q.getAttribute("formAction"),g!==null&&(o=g,q=null));var P=new b6("action","action",null,b,l);r.push({event:P,listeners:[{instance:null,listener:function(){if(b.defaultPrevented){if(Ow!==0){var G=q?CW(l,q):new FormData(l),Y={pending:!0,data:G,method:l.method,action:o};Object.freeze(Y),DH(v,Y,null,G)}}else typeof o==="function"&&(P.preventDefault(),G=q?CW(l,q):new FormData(l),Y={pending:!0,data:G,method:l.method,action:o},Object.freeze(Y),DH(v,Y,o,G))},currentTarget:l}]})}}function So(r,g,v){r.currentTarget=v;try{g(r)}catch(b){Mq(b)}r.currentTarget=null}function SW(r,g){g=(g&4)!==0;for(var v=0;v<r.length;v++){var b=r[v];r:{var l=void 0,o=b.event;if(b=b.listeners,g)for(var q=b.length-1;0<=q;q--){var P=b[q],G=P.instance,Y=P.currentTarget;if(P=P.listener,G!==l&&o.isPropagationStopped())break r;G!==null?Hr(G,So,o,P,Y):So(o,P,Y),l=G}else for(q=0;q<b.length;q++){if(P=b[q],G=P.instance,Y=P.currentTarget,P=P.listener,G!==l&&o.isPropagationStopped())break r;G!==null?Hr(G,So,o,P,Y):So(o,P,Y),l=G}}}}function dr(r,g){bA.has(r)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',r);var v=g[rq];v===void 0&&(v=g[rq]=new Set);var b=r+"__bubble";v.has(b)||(mW(g,r,2,!1),v.add(b))}function JO(r,g,v){bA.has(r)&&!g&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',r);var b=0;g&&(b|=4),mW(v,r,b,g)}function QO(r){if(!r[V6]){r[V6]=!0,x7.forEach(function(v){v!=="selectionchange"&&(bA.has(v)||JO(v,!1,r),JO(v,!0,r))});var g=r.nodeType===9?r:r.ownerDocument;g===null||g[V6]||(g[V6]=!0,JO("selectionchange",!1,g))}}function mW(r,g,v,b){switch(M7(g)){case A1:var l=YK;break;case E1:l=JK;break;default:l=mO}v=l.bind(null,g,v,r),l=void 0,!hq||g!=="touchstart"&&g!=="touchmove"&&g!=="wheel"||(l=!0),b?l!==void 0?r.addEventListener(g,v,{capture:!0,passive:l}):r.addEventListener(g,v,!0):l!==void 0?r.addEventListener(g,v,{passive:l}):r.addEventListener(g,v,!1)}function zO(r,g,v,b,l){var o=b;if((g&1)===0&&(g&2)===0&&b!==null)r:for(;;){if(b===null)return;var q=b.tag;if(q===3||q===4){var P=b.stateNode.containerInfo;if(P===l)break;if(q===4)for(q=b.return;q!==null;){var G=q.tag;if((G===3||G===4)&&q.stateNode.containerInfo===l)return;q=q.return}for(;P!==null;){if(q=Jr(P),q===null)return;if(G=q.tag,G===5||G===6||G===26||G===27){b=o=q;continue r}P=P.parentNode}}b=b.return}tP(function(){var Y=o,N=E8(v),Z=[];r:{var U=M3.get(r);if(U!==void 0){var T=b6,lr=r;switch(r){case"keypress":if(E4(v)===0)break r;case"keydown":case"keyup":T=u$;break;case"focusin":lr="focus",T=Oq;break;case"focusout":lr="blur",T=Oq;break;case"beforeblur":case"afterblur":T=Oq;break;case"click":if(v.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=g3;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=g$;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=G$;break;case A3:case P3:case u3:T=b$;break;case W3:T=Y$;break;case"scroll":case"scrollend":T=sK;break;case"wheel":T=Q$;break;case"copy":case"cut":case"paste":T=l$;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=w3;break;case"toggle":case"beforetoggle":T=R$}var Wr=(g&4)!==0,Rg=!Wr&&(r==="scroll"||r==="scrollend"),sr=Wr?U!==null?U+"Capture":null:U;Wr=[];for(var $=Y,L;$!==null;){var B=$;if(L=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||L===null||sr===null||(B=h2($,sr),B!=null&&Wr.push(B2($,B,L))),Rg)break;$=$.return}0<Wr.length&&(U=new T(U,lr,null,v,N),Z.push({event:U,listeners:Wr}))}}if((g&7)===0){r:{if(U=r==="mouseover"||r==="pointerover",T=r==="mouseout"||r==="pointerout",U&&v!==i2&&(lr=v.relatedTarget||v.fromElement)&&(Jr(lr)||lr[y5]))break r;if(T||U){if(U=N.window===N?N:(U=N.ownerDocument)?U.defaultView||U.parentWindow:window,T){if(lr=v.relatedTarget||v.toElement,T=Y,lr=lr?Jr(lr):null,lr!==null&&(Rg=rr(lr),Wr=lr.tag,lr!==Rg||Wr!==5&&Wr!==27&&Wr!==6))lr=null}else T=null,lr=Y;if(T!==lr){if(Wr=g3,B="onMouseLeave",sr="onMouseEnter",$="mouse",r==="pointerout"||r==="pointerover")Wr=w3,B="onPointerLeave",sr="onPointerEnter",$="pointer";if(Rg=T==null?U:Cr(T),L=lr==null?U:Cr(lr),U=new Wr(B,$+"leave",T,v,N),U.target=Rg,U.relatedTarget=L,B=null,Jr(N)===Y&&(Wr=new Wr(sr,$+"enter",lr,v,N),Wr.target=L,Wr.relatedTarget=Rg,B=Wr),Rg=B,T&&lr)g:{Wr=iR,sr=T,$=lr,L=0;for(B=sr;B;B=Wr(B))L++;B=0;for(var e=$;e;e=Wr(e))B++;for(;0<L-B;)sr=Wr(sr),L--;for(;0<B-L;)$=Wr($),B--;for(;L--;){if(sr===$||$!==null&&sr===$.alternate){Wr=sr;break g}sr=Wr(sr),$=Wr($)}Wr=null}else Wr=null;T!==null&&kW(Z,U,T,Wr,!1),lr!==null&&Rg!==null&&kW(Z,Rg,lr,Wr,!0)}}}r:{if(U=Y?Cr(Y):window,T=U.nodeName&&U.nodeName.toLowerCase(),T==="select"||T==="input"&&U.type==="file")var qr=r9;else if(dP(U))if(O3)qr=az;else{qr=cz;var Zr=fz}else T=U.nodeName,!T||T.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?Y&&w2(Y.elementType)&&(qr=r9):qr=pz;if(qr&&(qr=qr(r,Y))){sP(Z,qr,v,N);break r}Zr&&Zr(r,U,Y),r==="focusout"&&Y&&U.type==="number"&&Y.memoizedProps.value!=null&&k8(U,"number",U.value)}switch(Zr=Y?Cr(Y):window,r){case"focusin":if(dP(Zr)||Zr.contentEditable==="true")Oh=Zr,Aq=Y,j2=null;break;case"focusout":j2=Aq=Oh=null;break;case"mousedown":Pq=!0;break;case"contextmenu":case"mouseup":case"dragend":Pq=!1,o9(Z,v,N);break;case"selectionchange":if(L$)break;case"keydown":case"keyup":o9(Z,v,N)}var $r;if(qq)r:{switch(r){case"compositionstart":var Qr="onCompositionStart";break r;case"compositionend":Qr="onCompositionEnd";break r;case"compositionupdate":Qr="onCompositionUpdate";break r}Qr=void 0}else Hh?pP(r,v)&&(Qr="onCompositionEnd"):r==="keydown"&&v.keyCode===b3&&(Qr="onCompositionStart");if(Qr&&(h3&&v.locale!=="ko"&&(Hh||Qr!=="onCompositionStart"?Qr==="onCompositionEnd"&&Hh&&($r=fP()):(n5=N,lq=("value"in n5)?n5.value:n5.textContent,Hh=!0)),Zr=mo(Y,Qr),0<Zr.length&&(Qr=new v3(Qr,r,null,v,N),Z.push({event:Qr,listeners:Zr}),$r?Qr.data=$r:($r=aP(v),$r!==null&&(Qr.data=$r)))),$r=$$?yz(r,v):nz(r,v))Qr=mo(Y,"onBeforeInput"),0<Qr.length&&(Zr=new H$("onBeforeInput","beforeinput",null,v,N),Z.push({event:Zr,listeners:Qr}),Zr.data=$r);DR(Z,r,Y,v,N)}SW(Z,g)})}function B2(r,g,v){return{instance:r,listener:g,currentTarget:v}}function mo(r,g){for(var v=g+"Capture",b=[];r!==null;){var l=r,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=h2(r,v),l!=null&&b.unshift(B2(r,l,o)),l=h2(r,g),l!=null&&b.push(B2(r,l,o))),r.tag===3)return b;r=r.return}return[]}function iR(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r?r:null}function kW(r,g,v,b,l){for(var o=g._reactName,q=[];v!==null&&v!==b;){var P=v,G=P.alternate,Y=P.stateNode;if(P=P.tag,G!==null&&G===b)break;P!==5&&P!==26&&P!==27||Y===null||(G=Y,l?(Y=h2(v,o),Y!=null&&q.unshift(B2(v,Y,G))):l||(Y=h2(v,o),Y!=null&&q.push(B2(v,Y,G)))),v=v.return}q.length!==0&&r.push({event:g,listeners:q})}function RO(r,g){Vz(r,g),r!=="input"&&r!=="textarea"&&r!=="select"||g==null||g.value!==null||s7||(s7=!0,r==="select"&&g.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",r):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",r));var v={registrationNameDependencies:pw,possibleRegistrationNames:gq};w2(r)||typeof g.is==="string"||ez(r,g,v),g.contentEditable&&!g.suppressContentEditableWarning&&g.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function h0(r,g,v,b){g!==v&&(v=i5(v),i5(g)!==v&&(b[r]=g))}function VR(r,g,v){g.forEach(function(b){v[VW(b)]=b==="style"?$O(r):r.getAttribute(b)})}function zv(r,g){g===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",r,r,r):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",r,typeof g)}function DW(r,g){return r=r.namespaceURI===g6||r.namespaceURI===bh?r.ownerDocument.createElementNS(r.namespaceURI,r.tagName):r.ownerDocument.createElement(r.tagName),r.innerHTML=g,r.innerHTML}function i5(r){return s0(r)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",K0(r)),tg(r)),(typeof r==="string"?r:""+r).replace(d$,`
`).replace(s$,"")}function iW(r,g){return g=i5(g),i5(r)===g?!0:!1}function Gg(r,g,v,b,l,o){switch(v){case"children":if(typeof b==="string")e4(b,g,!1),g==="body"||g==="textarea"&&b===""||v2(r,b);else if(typeof b==="number"||typeof b==="bigint")e4(""+b,g,!1),g!=="body"&&v2(r,""+b);break;case"className":i4(r,"class",b);break;case"tabIndex":i4(r,"tabindex",b);break;case"dir":case"role":case"viewBox":case"width":case"height":i4(r,v,b);break;case"style":yP(r,b,o);break;case"data":if(g!=="object"){i4(r,"data",b);break}case"src":case"href":if(b===""&&(g!=="a"||v!=="href")){v==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',v,v),r.removeAttribute(v);break}if(b==null||typeof b==="function"||typeof b==="symbol"||typeof b==="boolean"){r.removeAttribute(v);break}ug(b,v),b=b2(""+b),r.setAttribute(v,b);break;case"action":case"formAction":if(b!=null&&(g==="form"?v==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof b==="function"&&(l.encType==null&&l.method==null||E6||(E6=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),l.target==null||e6||(e6=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):g==="input"||g==="button"?v==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):g!=="input"||l.type==="submit"||l.type==="image"||_6?g!=="button"||l.type==null||l.type==="submit"||_6?typeof b==="function"&&(l.name==null||DM||(DM=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),l.formEncType==null&&l.formMethod==null||E6||(E6=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),l.formTarget==null||e6||(e6=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(_6=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(_6=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):v==="action"?console.error("You can only pass the action prop to <form>."):console.error("You can only pass the formAction prop to <input> or <button>.")),typeof b==="function"){r.setAttribute(v,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o==="function"&&(v==="formAction"?(g!=="input"&&Gg(r,g,"name",l.name,l,null),Gg(r,g,"formEncType",l.formEncType,l,null),Gg(r,g,"formMethod",l.formMethod,l,null),Gg(r,g,"formTarget",l.formTarget,l,null)):(Gg(r,g,"encType",l.encType,l,null),Gg(r,g,"method",l.method,l,null),Gg(r,g,"target",l.target,l,null)));if(b==null||typeof b==="symbol"||typeof b==="boolean"){r.removeAttribute(v);break}ug(b,v),b=b2(""+b),r.setAttribute(v,b);break;case"onClick":b!=null&&(typeof b!=="function"&&zv(v,b),r.onclick=Ev);break;case"onScroll":b!=null&&(typeof b!=="function"&&zv(v,b),dr("scroll",r));break;case"onScrollEnd":b!=null&&(typeof b!=="function"&&zv(v,b),dr("scrollend",r));break;case"dangerouslySetInnerHTML":if(b!=null){if(typeof b!=="object"||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=b.__html,v!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=v}}break;case"multiple":r.multiple=b&&typeof b!=="function"&&typeof b!=="symbol";break;case"muted":r.muted=b&&typeof b!=="function"&&typeof b!=="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(b==null||typeof b==="function"||typeof b==="boolean"||typeof b==="symbol"){r.removeAttribute("xlink:href");break}ug(b,v),v=b2(""+b),r.setAttributeNS(ub,"xlink:href",v);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":b!=null&&typeof b!=="function"&&typeof b!=="symbol"?(ug(b,v),r.setAttribute(v,""+b)):r.removeAttribute(v);break;case"inert":b!==""||y6[v]||(y6[v]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",v));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":b&&typeof b!=="function"&&typeof b!=="symbol"?r.setAttribute(v,""):r.removeAttribute(v);break;case"capture":case"download":b===!0?r.setAttribute(v,""):b!==!1&&b!=null&&typeof b!=="function"&&typeof b!=="symbol"?(ug(b,v),r.setAttribute(v,b)):r.removeAttribute(v);break;case"cols":case"rows":case"size":case"span":b!=null&&typeof b!=="function"&&typeof b!=="symbol"&&!isNaN(b)&&1<=b?(ug(b,v),r.setAttribute(v,b)):r.removeAttribute(v);break;case"rowSpan":case"start":b==null||typeof b==="function"||typeof b==="symbol"||isNaN(b)?r.removeAttribute(v):(ug(b,v),r.setAttribute(v,b));break;case"popover":dr("beforetoggle",r),dr("toggle",r),D4(r,"popover",b);break;case"xlinkActuate":ev(r,ub,"xlink:actuate",b);break;case"xlinkArcrole":ev(r,ub,"xlink:arcrole",b);break;case"xlinkRole":ev(r,ub,"xlink:role",b);break;case"xlinkShow":ev(r,ub,"xlink:show",b);break;case"xlinkTitle":ev(r,ub,"xlink:title",b);break;case"xlinkType":ev(r,ub,"xlink:type",b);break;case"xmlBase":ev(r,hA,"xml:base",b);break;case"xmlLang":ev(r,hA,"xml:lang",b);break;case"xmlSpace":ev(r,hA,"xml:space",b);break;case"is":o!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),D4(r,"is",b);break;case"innerText":case"textContent":break;case"popoverTarget":iM||b==null||typeof b!=="object"||(iM=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",b));default:!(2<v.length)||v[0]!=="o"&&v[0]!=="O"||v[1]!=="n"&&v[1]!=="N"?(v=nP(v),D4(r,v,b)):pw.hasOwnProperty(v)&&b!=null&&typeof b!=="function"&&zv(v,b)}}function KO(r,g,v,b,l,o){switch(v){case"style":yP(r,b,o);break;case"dangerouslySetInnerHTML":if(b!=null){if(typeof b!=="object"||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(v=b.__html,v!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");r.innerHTML=v}}break;case"children":typeof b==="string"?v2(r,b):(typeof b==="number"||typeof b==="bigint")&&v2(r,""+b);break;case"onScroll":b!=null&&(typeof b!=="function"&&zv(v,b),dr("scroll",r));break;case"onScrollEnd":b!=null&&(typeof b!=="function"&&zv(v,b),dr("scrollend",r));break;case"onClick":b!=null&&(typeof b!=="function"&&zv(v,b),r.onclick=Ev);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(pw.hasOwnProperty(v))b!=null&&typeof b!=="function"&&zv(v,b);else r:{if(v[0]==="o"&&v[1]==="n"&&(l=v.endsWith("Capture"),g=v.slice(2,l?v.length-7:void 0),o=r[T0]||null,o=o!=null?o[v]:null,typeof o==="function"&&r.removeEventListener(g,o,l),typeof b==="function")){typeof o!=="function"&&o!==null&&(v in r?r[v]=null:r.hasAttribute(v)&&r.removeAttribute(v)),r.addEventListener(g,b,l);break r}v in r?r[v]=b:b===!0?r.setAttribute(v,""):D4(r,v,b)}}}function M0(r,g,v){switch(RO(g,v),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dr("error",r),dr("load",r);var b=!1,l=!1,o;for(o in v)if(v.hasOwnProperty(o)){var q=v[o];if(q!=null)switch(o){case"src":b=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Gg(r,g,o,q,v,null)}}l&&Gg(r,g,"srcSet",v.srcSet,v,null),b&&Gg(r,g,"src",v.src,v,null);return;case"input":B5("input",v),dr("invalid",r);var P=o=q=l=null,G=null,Y=null;for(b in v)if(v.hasOwnProperty(b)){var N=v[b];if(N!=null)switch(b){case"name":l=N;break;case"type":q=N;break;case"checked":G=N;break;case"defaultChecked":Y=N;break;case"value":o=N;break;case"defaultValue":P=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Gg(r,g,b,N,v,null)}}BP(r,v),NP(r,o,P,G,Y,q,l,!1);return;case"select":B5("select",v),dr("invalid",r),b=q=o=null;for(l in v)if(v.hasOwnProperty(l)&&(P=v[l],P!=null))switch(l){case"value":o=P;break;case"defaultValue":q=P;break;case"multiple":b=P;default:Gg(r,g,l,P,v,null)}xP(r,v),g=o,v=q,r.multiple=!!b,g!=null?Sb(r,!!b,g,!1):v!=null&&Sb(r,!!b,v,!0);return;case"textarea":B5("textarea",v),dr("invalid",r),o=l=b=null;for(q in v)if(v.hasOwnProperty(q)&&(P=v[q],P!=null))switch(q){case"value":b=P;break;case"defaultValue":l=P;break;case"children":o=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Gg(r,g,q,P,v,null)}TP(r,v),SP(r,b,l,o);return;case"option":ZP(r,v);for(G in v)if(v.hasOwnProperty(G)&&(b=v[G],b!=null))switch(G){case"selected":r.selected=b&&typeof b!=="function"&&typeof b!=="symbol";break;default:Gg(r,g,G,b,v,null)}return;case"dialog":dr("beforetoggle",r),dr("toggle",r),dr("cancel",r),dr("close",r);break;case"iframe":case"object":dr("load",r);break;case"video":case"audio":for(b=0;b<Rl.length;b++)dr(Rl[b],r);break;case"image":dr("error",r),dr("load",r);break;case"details":dr("toggle",r);break;case"embed":case"source":case"link":dr("error",r),dr("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in v)if(v.hasOwnProperty(Y)&&(b=v[Y],b!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Gg(r,g,Y,b,v,null)}return;default:if(w2(g)){for(N in v)v.hasOwnProperty(N)&&(b=v[N],b!==void 0&&KO(r,g,N,b,v,void 0));return}}for(P in v)v.hasOwnProperty(P)&&(b=v[P],b!=null&&Gg(r,g,P,b,v,null))}function _R(r,g,v,b){switch(RO(g,b),g){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,q=null,P=null,G=null,Y=null,N=null;for(T in v){var Z=v[T];if(v.hasOwnProperty(T)&&Z!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":G=Z;default:b.hasOwnProperty(T)||Gg(r,g,T,null,b,Z)}}for(var U in b){var T=b[U];if(Z=v[U],b.hasOwnProperty(U)&&(T!=null||Z!=null))switch(U){case"type":o=T;break;case"name":l=T;break;case"checked":Y=T;break;case"defaultChecked":N=T;break;case"value":q=T;break;case"defaultValue":P=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:T!==Z&&Gg(r,g,U,T,b,Z)}}g=v.type==="checkbox"||v.type==="radio"?v.checked!=null:v.value!=null,b=b.type==="checkbox"||b.type==="radio"?b.checked!=null:b.value!=null,g||!b||kM||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),kM=!0),!g||b||mM||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),mM=!0),m8(r,q,P,G,Y,N,o,l);return;case"select":T=q=P=U=null;for(o in v)if(G=v[o],v.hasOwnProperty(o)&&G!=null)switch(o){case"value":break;case"multiple":T=G;default:b.hasOwnProperty(o)||Gg(r,g,o,null,b,G)}for(l in b)if(o=b[l],G=v[l],b.hasOwnProperty(l)&&(o!=null||G!=null))switch(l){case"value":U=o;break;case"defaultValue":P=o;break;case"multiple":q=o;default:o!==G&&Gg(r,g,l,o,b,G)}b=P,g=q,v=T,U!=null?Sb(r,!!g,U,!1):!!v!==!!g&&(b!=null?Sb(r,!!g,b,!0):Sb(r,!!g,g?[]:"",!1));return;case"textarea":T=U=null;for(P in v)if(l=v[P],v.hasOwnProperty(P)&&l!=null&&!b.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:Gg(r,g,P,null,b,l)}for(q in b)if(l=b[q],o=v[q],b.hasOwnProperty(q)&&(l!=null||o!=null))switch(q){case"value":U=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:l!==o&&Gg(r,g,q,l,b,o)}CP(r,U,T);return;case"option":for(var lr in v)if(U=v[lr],v.hasOwnProperty(lr)&&U!=null&&!b.hasOwnProperty(lr))switch(lr){case"selected":r.selected=!1;break;default:Gg(r,g,lr,null,b,U)}for(G in b)if(U=b[G],T=v[G],b.hasOwnProperty(G)&&U!==T&&(U!=null||T!=null))switch(G){case"selected":r.selected=U&&typeof U!=="function"&&typeof U!=="symbol";break;default:Gg(r,g,G,U,b,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wr in v)U=v[Wr],v.hasOwnProperty(Wr)&&U!=null&&!b.hasOwnProperty(Wr)&&Gg(r,g,Wr,null,b,U);for(Y in b)if(U=b[Y],T=v[Y],b.hasOwnProperty(Y)&&U!==T&&(U!=null||T!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(g+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Gg(r,g,Y,U,b,T)}return;default:if(w2(g)){for(var Rg in v)U=v[Rg],v.hasOwnProperty(Rg)&&U!==void 0&&!b.hasOwnProperty(Rg)&&KO(r,g,Rg,void 0,b,U);for(N in b)U=b[N],T=v[N],!b.hasOwnProperty(N)||U===T||U===void 0&&T===void 0||KO(r,g,N,U,b,T);return}}for(var sr in v)U=v[sr],v.hasOwnProperty(sr)&&U!=null&&!b.hasOwnProperty(sr)&&Gg(r,g,sr,null,b,U);for(Z in b)U=b[Z],T=v[Z],!b.hasOwnProperty(Z)||U===T||U==null&&T==null||Gg(r,g,Z,U,b,T)}function VW(r){switch(r){case"class":return"className";case"for":return"htmlFor";default:return r}}function $O(r){var g={};r=r.style;for(var v=0;v<r.length;v++){var b=r[v];g[b]=r.getPropertyValue(b)}return g}function _W(r,g,v){if(g!=null&&typeof g!=="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var b,l=b="",o;for(o in g)if(g.hasOwnProperty(o)){var q=g[o];q!=null&&typeof q!=="boolean"&&q!==""&&(o.indexOf("--")===0?(ah(q,o),b+=l+o+":"+(""+q).trim()):typeof q!=="number"||q===0||a7.has(o)?(ah(q,o),b+=l+o.replace(j7,"-$1").toLowerCase().replace(t7,"-ms-")+":"+(""+q).trim()):b+=l+o.replace(j7,"-$1").toLowerCase().replace(t7,"-ms-")+":"+q+"px",l=";")}b=b||null,g=r.getAttribute("style"),g!==b&&(b=i5(b),i5(g)!==b&&(v.style=$O(r)))}}function $1(r,g,v,b,l,o){if(l.delete(v),r=r.getAttribute(v),r===null)switch(typeof b){case"undefined":case"function":case"symbol":case"boolean":return}else if(b!=null)switch(typeof b){case"function":case"symbol":case"boolean":break;default:if(ug(b,g),r===""+b)return}h0(g,r,b,o)}function eW(r,g,v,b,l,o){if(l.delete(v),r=r.getAttribute(v),r===null){switch(typeof b){case"function":case"symbol":return}if(!b)return}else switch(typeof b){case"function":case"symbol":break;default:if(b)return}h0(g,r,b,o)}function UO(r,g,v,b,l,o){if(l.delete(v),r=r.getAttribute(v),r===null)switch(typeof b){case"undefined":case"function":case"symbol":return}else if(b!=null)switch(typeof b){case"function":case"symbol":break;default:if(ug(b,v),r===""+b)return}h0(g,r,b,o)}function EW(r,g,v,b,l,o){if(l.delete(v),r=r.getAttribute(v),r===null)switch(typeof b){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(b))return}else if(b!=null)switch(typeof b){case"function":case"symbol":case"boolean":break;default:if(!isNaN(b)&&(ug(b,g),r===""+b))return}h0(g,r,b,o)}function LO(r,g,v,b,l,o){if(l.delete(v),r=r.getAttribute(v),r===null)switch(typeof b){case"undefined":case"function":case"symbol":case"boolean":return}else if(b!=null)switch(typeof b){case"function":case"symbol":case"boolean":break;default:if(ug(b,g),v=b2(""+b),r===v)return}h0(g,r,b,o)}function yW(r,g,v,b){for(var l={},o=new Set,q=r.attributes,P=0;P<q.length;P++)switch(q[P].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;default:o.add(q[P].name)}if(w2(g)){for(var G in v)if(v.hasOwnProperty(G)){var Y=v[G];if(Y!=null){if(pw.hasOwnProperty(G))typeof Y!=="function"&&zv(G,Y);else if(v.suppressHydrationWarning!==!0)switch(G){case"children":typeof Y!=="string"&&typeof Y!=="number"||h0("children",r.textContent,Y,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":q=r.innerHTML,Y=Y?Y.__html:void 0,Y!=null&&(Y=DW(r,Y),h0(G,q,Y,l));continue;case"style":o.delete(G),_W(r,Y,l);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":o.delete(G.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",G);continue;case"className":o.delete("class"),q=UP(r,"class",Y),h0("className",q,Y,l);continue;default:b.context===A5&&g!=="svg"&&g!=="math"?o.delete(G.toLowerCase()):o.delete(G),q=UP(r,G,Y),h0(G,q,Y,l)}}}}else for(Y in v)if(v.hasOwnProperty(Y)&&(G=v[Y],G!=null)){if(pw.hasOwnProperty(Y))typeof G!=="function"&&zv(Y,G);else if(v.suppressHydrationWarning!==!0)switch(Y){case"children":typeof G!=="string"&&typeof G!=="number"||h0("children",r.textContent,G,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":q=r.innerHTML,G=G?G.__html:void 0,G!=null&&(G=DW(r,G),q!==G&&(l[Y]={__html:q}));continue;case"className":$1(r,Y,"class",G,o,l);continue;case"tabIndex":$1(r,Y,"tabindex",G,o,l);continue;case"style":o.delete(Y),_W(r,G,l);continue;case"multiple":o.delete(Y),h0(Y,r.multiple,G,l);continue;case"muted":o.delete(Y),h0(Y,r.muted,G,l);continue;case"autoFocus":o.delete("autofocus"),h0(Y,r.autofocus,G,l);continue;case"data":if(g!=="object"){o.delete(Y),q=r.getAttribute("data"),h0(Y,q,G,l);continue}case"src":case"href":if(!(G!==""||g==="a"&&Y==="href"||g==="object"&&Y==="data")){Y==="src"?console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Y,Y):console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',Y,Y);continue}LO(r,Y,Y,G,o,l);continue;case"action":case"formAction":if(q=r.getAttribute(Y),typeof G==="function"){o.delete(Y.toLowerCase()),Y==="formAction"?(o.delete("name"),o.delete("formenctype"),o.delete("formmethod"),o.delete("formtarget")):(o.delete("enctype"),o.delete("method"),o.delete("target"));continue}else if(q===rU){o.delete(Y.toLowerCase()),h0(Y,"function",G,l);continue}LO(r,Y,Y.toLowerCase(),G,o,l);continue;case"xlinkHref":LO(r,Y,"xlink:href",G,o,l);continue;case"contentEditable":UO(r,Y,"contenteditable",G,o,l);continue;case"spellCheck":UO(r,Y,"spellcheck",G,o,l);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":UO(r,Y,Y,G,o,l);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":eW(r,Y,Y.toLowerCase(),G,o,l);continue;case"capture":case"download":r:{P=r;var N=q=Y,Z=l;if(o.delete(N),P=P.getAttribute(N),P===null)switch(typeof G){case"undefined":case"function":case"symbol":break r;default:if(G===!1)break r}else if(G!=null)switch(typeof G){case"function":case"symbol":break;case"boolean":if(G===!0&&P==="")break r;break;default:if(ug(G,q),P===""+G)break r}h0(q,P,G,Z)}continue;case"cols":case"rows":case"size":case"span":r:{if(P=r,N=q=Y,Z=l,o.delete(N),P=P.getAttribute(N),P===null)switch(typeof G){case"undefined":case"function":case"symbol":case"boolean":break r;default:if(isNaN(G)||1>G)break r}else if(G!=null)switch(typeof G){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(G)||1>G)&&(ug(G,q),P===""+G))break r}h0(q,P,G,Z)}continue;case"rowSpan":EW(r,Y,"rowspan",G,o,l);continue;case"start":EW(r,Y,Y,G,o,l);continue;case"xHeight":$1(r,Y,"x-height",G,o,l);continue;case"xlinkActuate":$1(r,Y,"xlink:actuate",G,o,l);continue;case"xlinkArcrole":$1(r,Y,"xlink:arcrole",G,o,l);continue;case"xlinkRole":$1(r,Y,"xlink:role",G,o,l);continue;case"xlinkShow":$1(r,Y,"xlink:show",G,o,l);continue;case"xlinkTitle":$1(r,Y,"xlink:title",G,o,l);continue;case"xlinkType":$1(r,Y,"xlink:type",G,o,l);continue;case"xmlBase":$1(r,Y,"xml:base",G,o,l);continue;case"xmlLang":$1(r,Y,"xml:lang",G,o,l);continue;case"xmlSpace":$1(r,Y,"xml:space",G,o,l);continue;case"inert":G!==""||y6[Y]||(y6[Y]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",Y)),eW(r,Y,Y,G,o,l);continue;default:if(!(2<Y.length)||Y[0]!=="o"&&Y[0]!=="O"||Y[1]!=="n"&&Y[1]!=="N"){P=nP(Y),q=!1,b.context===A5&&g!=="svg"&&g!=="math"?o.delete(P.toLowerCase()):(N=Y.toLowerCase(),N=v6.hasOwnProperty(N)?v6[N]||null:null,N!==null&&N!==Y&&(q=!0,o.delete(N)),o.delete(P));r:if(N=r,Z=P,P=G,sh(Z))if(N.hasAttribute(Z))N=N.getAttribute(Z),ug(P,Z),P=N===""+P?P:N;else{switch(typeof P){case"function":case"symbol":break r;case"boolean":if(N=Z.toLowerCase().slice(0,5),N!=="data-"&&N!=="aria-")break r}P=P===void 0?void 0:null}else P=void 0;q||h0(Y,P,G,l)}}}return 0<o.size&&v.suppressHydrationWarning!==!0&&VR(r,o,l),Object.keys(l).length===0?null:l}function eR(r,g){switch(r.length){case 0:return"";case 1:return r[0];case 2:return r[0]+" "+g+" "+r[1];default:return r.slice(0,-1).join(", ")+", "+g+" "+r[r.length-1]}}function nW(r){switch(r){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ER(){if(typeof performance.getEntriesByType==="function"){for(var r=0,g=0,v=performance.getEntriesByType("resource"),b=0;b<v.length;b++){var l=v[b],o=l.transferSize,q=l.initiatorType,P=l.duration;if(o&&P&&nW(q)){q=0,P=l.responseEnd;for(b+=1;b<v.length;b++){var G=v[b],Y=G.startTime;if(Y>P)break;var{transferSize:N,initiatorType:Z}=G;N&&nW(Z)&&(G=G.responseEnd,q+=N*(G<P?1:(P-Y)/(G-Y)))}if(--b,g+=8*(o+q)/(l.duration/1000),r++,10<r)break}}if(0<r)return g/r/1e6}return navigator.connection&&(r=navigator.connection.downlink,typeof r==="number")?r:5}function ko(r){return r.nodeType===9?r:r.ownerDocument}function jW(r){switch(r){case bh:return Ch;case g6:return j6;default:return A5}}function tW(r,g){if(r===A5)switch(g){case"svg":return Ch;case"math":return j6;default:return A5}return r===Ch&&g==="foreignObject"?A5:r}function FO(r,g){return r==="textarea"||r==="noscript"||typeof g.children==="string"||typeof g.children==="number"||typeof g.children==="bigint"||typeof g.dangerouslySetInnerHTML==="object"&&g.dangerouslySetInnerHTML!==null&&g.dangerouslySetInnerHTML.__html!=null}function yR(){var r=window.event;if(r&&r.type==="popstate"){if(r===OA)return!1;return OA=r,!0}return OA=null,!1}function N2(){var r=window.event;return r&&r!==Ul?r.type:null}function Z2(){var r=window.event;return r&&r!==Ul?r.timeStamp:-1.1}function nR(r){setTimeout(function(){throw r})}function jR(r,g,v){switch(g){case"button":case"input":case"select":case"textarea":v.autoFocus&&r.focus();break;case"img":v.src?r.src=v.src:v.srcSet&&(r.srcset=v.srcSet)}}function tR(){}function fR(r,g,v,b){_R(r,g,v,b),r[T0]=b}function fW(r){v2(r,"")}function cR(r,g,v){r.nodeValue=v}function cW(r){if(!r.__reactWarnedAboutChildrenConflict){var g=r[T0]||null;if(g!==null){var v=Tr(r);v!==null&&(typeof g.children==="string"||typeof g.children==="number"?(r.__reactWarnedAboutChildrenConflict=!0,Hr(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):g.dangerouslySetInnerHTML!=null&&(r.__reactWarnedAboutChildrenConflict=!0,Hr(v,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function V5(r){return r==="head"}function pR(r,g){r.removeChild(g)}function aR(r,g){(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).removeChild(g)}function pW(r,g){var v=g,b=0;do{var l=v.nextSibling;if(r.removeChild(v),l&&l.nodeType===8)if(v=l.data,v===$l||v===n6){if(b===0){r.removeChild(l),db(g);return}b--}else if(v===Kl||v===qw||v===Mb||v===Th||v===Wb)b++;else if(v===vU)I2(r.ownerDocument.documentElement);else if(v===bU){v=r.ownerDocument.head,I2(v);for(var o=v.firstChild;o;){var{nextSibling:q,nodeName:P}=o;o[D2]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&o.rel.toLowerCase()==="stylesheet"||v.removeChild(o),o=q}}else v===wU&&I2(r.ownerDocument.body);v=l}while(v);db(g)}function aW(r,g){var v=r;r=0;do{var b=v.nextSibling;if(v.nodeType===1?g?(v._stashedDisplay=v.style.display,v.style.display="none"):(v.style.display=v._stashedDisplay||"",v.getAttribute("style")===""&&v.removeAttribute("style")):v.nodeType===3&&(g?(v._stashedText=v.nodeValue,v.nodeValue=""):v.nodeValue=v._stashedText||""),b&&b.nodeType===8)if(v=b.data,v===$l)if(r===0)break;else r--;else v!==Kl&&v!==qw&&v!==Mb&&v!==Th||r++;v=b}while(v)}function dR(r){aW(r,!0)}function sR(r){r=r.style,typeof r.setProperty==="function"?r.setProperty("display","none","important"):r.display="none"}function rK(r){r.nodeValue=""}function gK(r){aW(r,!1)}function vK(r,g){g=g[hU],g=g!==void 0&&g!==null&&g.hasOwnProperty("display")?g.display:null,r.style.display=g==null||typeof g==="boolean"?"":(""+g).trim()}function wK(r,g){r.nodeValue=g}function BO(r){var g=r.firstChild;g&&g.nodeType===10&&(g=g.nextSibling);for(;g;){var v=g;switch(g=g.nextSibling,v.nodeName){case"HTML":case"HEAD":case"BODY":BO(v),Or(v);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(v.rel.toLowerCase()==="stylesheet")continue}r.removeChild(v)}}function bK(r,g,v,b){for(;r.nodeType===1;){var l=v;if(r.nodeName.toLowerCase()!==g.toLowerCase()){if(!b&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(!b)if(g==="input"&&r.type==="hidden"){ug(l.name,"name");var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&r.getAttribute("name")===o)return r}else return r;else if(!r[D2])switch(g){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(o=r.getAttribute("rel"),o==="stylesheet"&&r.hasAttribute("data-precedence"))break;else if(o!==l.rel||r.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||r.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||r.getAttribute("title")!==(l.title==null?null:l.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(o=r.getAttribute("src"),(o!==(l.src==null?null:l.src)||r.getAttribute("type")!==(l.type==null?null:l.type)||r.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}if(r=H1(r.nextSibling),r===null)break}return null}function hK(r,g,v){if(g==="")return null;for(;r.nodeType!==3;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!v)return null;if(r=H1(r.nextSibling),r===null)return null}return r}function dW(r,g){for(;r.nodeType!==8;){if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!g)return null;if(r=H1(r.nextSibling),r===null)return null}return r}function NO(r){return r.data===qw||r.data===Mb}function ZO(r){return r.data===Th||r.data===qw&&r.ownerDocument.readyState!==_M}function lK(r,g){var v=r.ownerDocument;if(r.data===Mb)r._reactRetry=g;else if(r.data!==qw||v.readyState!==_M)g();else{var b=function(){g(),v.removeEventListener("DOMContentLoaded",b)};v.addEventListener("DOMContentLoaded",b),r._reactRetry=b}}function H1(r){for(;r!=null;r=r.nextSibling){var g=r.nodeType;if(g===1||g===3)break;if(g===8){if(g=r.data,g===Kl||g===Th||g===qw||g===Mb||g===Wb||g===lA||g===VM)break;if(g===$l||g===n6)return null}}return r}function sW(r){if(r.nodeType===1){for(var g=r.nodeName.toLowerCase(),v={},b=r.attributes,l=0;l<b.length;l++){var o=b[l];v[VW(o.name)]=o.name.toLowerCase()==="style"?$O(r):o.value}return{type:g,props:v}}return r.nodeType===8?r.data===Wb?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:r.nodeValue}function r7(r,g,v){return v===null||v[gU]!==!0?(r.nodeValue===g?r=null:(g=i5(g),r=i5(r.nodeValue)===g?null:r.nodeValue),r):null}function IO(r){r=r.nextSibling;for(var g=0;r;){if(r.nodeType===8){var v=r.data;if(v===$l||v===n6){if(g===0)return H1(r.nextSibling);g--}else v!==Kl&&v!==Th&&v!==qw&&v!==Mb&&v!==Wb||g++}r=r.nextSibling}return null}function g7(r){r=r.previousSibling;for(var g=0;r;){if(r.nodeType===8){var v=r.data;if(v===Kl||v===Th||v===qw||v===Mb||v===Wb){if(g===0)return r;g--}else v!==$l&&v!==n6||g++}r=r.previousSibling}return null}function oK(r){db(r)}function HK(r){db(r)}function OK(r){db(r)}function v7(r,g,v,b,l){switch(l&&e8(r,b.ancestorInfo),g=ko(v),r){case"html":if(r=g.documentElement,!r)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"head":if(r=g.head,!r)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return r;case"body":if(r=g.body,!r)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return r;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function qK(r,g,v,b){if(!v[y5]&&Tr(v)){var l=v.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",l,l,l)}switch(r){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(l=v.attributes;l.length;)v.removeAttributeNode(l[0]);M0(v,r,g),v[G0]=b,v[T0]=g}function I2(r){for(var g=r.attributes;g.length;)r.removeAttributeNode(g[0]);Or(r)}function Do(r){return typeof r.getRootNode==="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}function w7(r,g,v){var b=Sh;if(b&&typeof g==="string"&&g){var l=K1(g);l='link[rel="'+r+'"][href="'+l+'"]',typeof v==="string"&&(l+='[crossorigin="'+v+'"]'),tM.has(l)||(tM.add(l),r={rel:r,crossOrigin:v,href:g},b.querySelector(l)===null&&(g=b.createElement("link"),M0(g,"link",r),Ur(g),b.head.appendChild(g)))}}function b7(r,g,v,b){var l=(l=e5.current)?Do(l):null;if(!l)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(r){case"meta":case"title":return null;case"style":return typeof v.precedence==="string"&&typeof v.href==="string"?(v=pb(v.href),g=wg(l).hoistableStyles,b=g.get(v),b||(b={type:"style",instance:null,count:0,state:null},g.set(v,b)),b):{type:"void",instance:null,count:0,state:null};case"link":if(v.rel==="stylesheet"&&typeof v.href==="string"&&typeof v.precedence==="string"){r=pb(v.href);var o=wg(l).hoistableStyles,q=o.get(r);if(!q&&(l=l.ownerDocument||l,q={type:"stylesheet",instance:null,count:0,state:{loading:Xb,preload:null}},o.set(r,q),(o=l.querySelector(x2(r)))&&!o._p&&(q.instance=o,q.state.loading=Ll|S1),!m1.has(r))){var P={rel:"preload",as:"style",href:v.href,crossOrigin:v.crossOrigin,integrity:v.integrity,media:v.media,hrefLang:v.hrefLang,referrerPolicy:v.referrerPolicy};m1.set(r,P),o||AK(l,r,P,q.state)}if(g&&b===null)throw v=`

  - `+io(g)+`
  + `+io(v),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return q}if(g&&b!==null)throw v=`

  - `+io(g)+`
  + `+io(v),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+v);return null;case"script":return g=v.async,v=v.src,typeof v==="string"&&g&&typeof g!=="function"&&typeof g!=="symbol"?(v=ab(v),g=wg(l).hoistableScripts,b=g.get(v),b||(b={type:"script",instance:null,count:0,state:null},g.set(v,b)),b):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+r+'". this is a bug in React.')}}function io(r){var g=0,v="<link";return typeof r.rel==="string"?(g++,v+=' rel="'+r.rel+'"'):e1.call(r,"rel")&&(g++,v+=' rel="'+(r.rel===null?"null":"invalid type "+typeof r.rel)+'"'),typeof r.href==="string"?(g++,v+=' href="'+r.href+'"'):e1.call(r,"href")&&(g++,v+=' href="'+(r.href===null?"null":"invalid type "+typeof r.href)+'"'),typeof r.precedence==="string"?(g++,v+=' precedence="'+r.precedence+'"'):e1.call(r,"precedence")&&(g++,v+=" precedence={"+(r.precedence===null?"null":"invalid type "+typeof r.precedence)+"}"),Object.getOwnPropertyNames(r).length>g&&(v+=" ..."),v+" />"}function pb(r){return'href="'+K1(r)+'"'}function x2(r){return'link[rel="stylesheet"]['+r+"]"}function h7(r){return tr({},r,{"data-precedence":r.precedence,precedence:null})}function AK(r,g,v,b){r.querySelector('link[rel="preload"][as="style"]['+g+"]")?b.loading=Ll:(g=r.createElement("link"),b.preload=g,g.addEventListener("load",function(){return b.loading|=Ll}),g.addEventListener("error",function(){return b.loading|=nM}),M0(g,"link",v),Ur(g),r.head.appendChild(g))}function ab(r){return'[src="'+K1(r)+'"]'}function T2(r){return"script[async]"+r}function l7(r,g,v){if(g.count++,g.instance===null)switch(g.type){case"style":var b=r.querySelector('style[data-href~="'+K1(v.href)+'"]');if(b)return g.instance=b,Ur(b),b;var l=tr({},v,{"data-href":v.href,"data-precedence":v.precedence,href:null,precedence:null});return b=(r.ownerDocument||r).createElement("style"),Ur(b),M0(b,"style",l),Vo(b,v.precedence,r),g.instance=b;case"stylesheet":l=pb(v.href);var o=r.querySelector(x2(l));if(o)return g.state.loading|=S1,g.instance=o,Ur(o),o;b=h7(v),(l=m1.get(l))&&xO(b,l),o=(r.ownerDocument||r).createElement("link"),Ur(o);var q=o;return q._p=new Promise(function(P,G){q.onload=P,q.onerror=G}),M0(o,"link",b),g.state.loading|=S1,Vo(o,v.precedence,r),g.instance=o;case"script":if(o=ab(v.src),l=r.querySelector(T2(o)))return g.instance=l,Ur(l),l;if(b=v,l=m1.get(o))b=tr({},v),TO(b,l);return r=r.ownerDocument||r,l=r.createElement("script"),Ur(l),M0(l,"link",b),r.head.appendChild(l),g.instance=l;case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+g.type+'". this is a bug in React.')}else g.type==="stylesheet"&&(g.state.loading&S1)===Xb&&(b=g.instance,g.state.loading|=S1,Vo(b,v.precedence,r));return g.instance}function Vo(r,g,v){for(var b=v.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=b.length?b[b.length-1]:null,o=l,q=0;q<b.length;q++){var P=b[q];if(P.dataset.precedence===g)o=P;else if(o!==l)break}o?o.parentNode.insertBefore(r,o.nextSibling):(g=v.nodeType===9?v.head:v,g.insertBefore(r,g.firstChild))}function xO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.title==null&&(r.title=g.title)}function TO(r,g){r.crossOrigin==null&&(r.crossOrigin=g.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=g.referrerPolicy),r.integrity==null&&(r.integrity=g.integrity)}function o7(r,g,v){if(t6===null){var b=new Map,l=t6=new Map;l.set(v,b)}else l=t6,b=l.get(v),b||(b=new Map,l.set(v,b));if(b.has(r))return b;b.set(r,null),v=v.getElementsByTagName(r);for(l=0;l<v.length;l++){var o=v[l];if(!(o[D2]||o[G0]||r==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!==bh){var q=o.getAttribute(g)||"";q=r+q;var P=b.get(q);P?P.push(o):b.set(q,[o])}}return b}function H7(r,g,v){r=r.ownerDocument||r,r.head.insertBefore(v,g==="title"?r.querySelector("head > title"):null)}function PK(r,g,v){var b=!v.ancestorInfo.containerTagInScope;if(v.context===Ch||g.itemProp!=null)return!b||g.itemProp==null||r!=="meta"&&r!=="title"&&r!=="style"&&r!=="link"&&r!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",r,r),!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof g.precedence!=="string"||typeof g.href!=="string"||g.href===""){b&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""||g.onLoad||g.onError){if(g.rel==="stylesheet"&&typeof g.precedence==="string"){r=g.href;var{onError:l,disabled:o}=g;v=[],g.onLoad&&v.push("`onLoad`"),l&&v.push("`onError`"),o!=null&&v.push("`disabled`"),l=eR(v,"and"),l+=v.length===1?" prop":" props",o=v.length===1?"an "+l:"the "+l,v.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',r,o,l)}b&&(typeof g.rel!=="string"||typeof g.href!=="string"||g.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(g.onError||g.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}switch(g.rel){case"stylesheet":return r=g.precedence,g=g.disabled,typeof r!=="string"&&b&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof r==="string"&&g==null;default:return!0}case"script":if(r=g.async&&typeof g.async!=="function"&&typeof g.async!=="symbol",!r||g.onLoad||g.onError||!g.src||typeof g.src!=="string"){b&&(r?g.onLoad||g.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":b&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",r)}return!1}function O7(r){return r.type==="stylesheet"&&(r.state.loading&jM)===Xb?!1:!0}function uK(r,g,v,b){if(v.type==="stylesheet"&&(typeof b.media!=="string"||matchMedia(b.media).matches!==!1)&&(v.state.loading&S1)===Xb){if(v.instance===null){var l=pb(b.href),o=g.querySelector(x2(l));if(o){g=o._p,g!==null&&typeof g==="object"&&typeof g.then==="function"&&(r.count++,r=_o.bind(r),g.then(r,r)),v.state.loading|=S1,v.instance=o,Ur(o);return}o=g.ownerDocument||g,b=h7(b),(l=m1.get(l))&&xO(b,l),o=o.createElement("link"),Ur(o);var q=o;q._p=new Promise(function(P,G){q.onload=P,q.onerror=G}),M0(o,"link",b),v.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(v,g),(g=v.state.preload)&&(v.state.loading&jM)===Xb&&(r.count++,v=_o.bind(r),g.addEventListener("load",v),g.addEventListener("error",v))}}function WK(r,g){return r.stylesheets&&r.count===0&&eo(r,r.stylesheets),0<r.count||0<r.imgCount?function(v){var b=setTimeout(function(){if(r.stylesheets&&eo(r,r.stylesheets),r.unsuspend){var o=r.unsuspend;r.unsuspend=null,o()}},HU+g);0<r.imgBytes&&AA===0&&(AA=125*ER()*qU);var l=setTimeout(function(){if(r.waitingForImages=!1,r.count===0&&(r.stylesheets&&eo(r,r.stylesheets),r.unsuspend)){var o=r.unsuspend;r.unsuspend=null,o()}},(r.imgBytes>AA?50:OU)+g);return r.unsuspend=v,function(){r.unsuspend=null,clearTimeout(b),clearTimeout(l)}}:null}function _o(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eo(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}function eo(r,g){r.stylesheets=null,r.unsuspend!==null&&(r.count++,f6=new Map,g.forEach(MK,r),f6=null,_o.call(r))}function MK(r,g){if(!(g.state.loading&S1)){var v=f6.get(r);if(v)var b=v.get(PA);else{v=new Map,f6.set(r,v);for(var l=r.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var q=l[o];if(q.nodeName==="LINK"||q.getAttribute("media")!=="not all")v.set(q.dataset.precedence,q),b=q}b&&v.set(PA,b)}l=g.instance,q=l.getAttribute("data-precedence"),o=v.get(q)||b,o===b&&v.set(PA,l),v.set(q,l),this.count++,b=_o.bind(this),l.addEventListener("load",b),l.addEventListener("error",b),o?o.parentNode.insertBefore(l,o.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(l,r.firstChild)),g.state.loading|=S1}}function GK(r,g,v,b,l,o,q,P,G){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Gb,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cb(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cb(0),this.hiddenUpdates=Cb(null),this.identifierPrefix=b,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=q,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,r=this.pendingUpdatersLaneMap=[];for(g=0;31>g;g++)r.push(new Set);this._debugRootType=v?"hydrateRoot()":"createRoot()"}function q7(r,g,v,b,l,o,q,P,G,Y,N,Z){return r=new GK(r,g,v,q,G,Y,N,Z,P),g=S$,o===!0&&(g|=F0|y1),g|=_r,o=K(3,null,null,g),r.current=o,o.stateNode=r,g=oH(),Ew(g),r.pooledCache=g,Ew(g),o.memoizedState={element:b,isDehydrated:v,cache:g},PH(o),r}function A7(r){if(!r)return f5;return r=f5,r}function CO(r,g,v,b,l,o){if(L0&&typeof L0.onScheduleFiberRoot==="function")try{L0.onScheduleFiberRoot(vh,b,v)}catch(q){Uv||(Uv=!0,console.error("React instrumentation encountered an error: %o",q))}l=A7(l),b.context===null?b.context=l:b.pendingContext=l,$v&&q1!==null&&!aM&&(aM=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,D(q1)||"Unknown")),b=T5(g),b.payload={element:v},o=o===void 0?null:o,o!==null&&(typeof o!=="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",o),b.callback=o),v=C5(r,b,g),v!==null&&(Ov(g,"root.render()",null),Cg(v,r,g),u2(v,r,g))}function P7(r,g){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var v=r.retryLane;r.retryLane=v!==0&&v<g?v:g}}function SO(r,g){P7(r,g),(r=r.alternate)&&P7(r,g)}function u7(r){if(r.tag===13||r.tag===31){var g=U0(r,67108864);g!==null&&Cg(g,r,67108864),SO(r,67108864)}}function W7(r){if(r.tag===13||r.tag===31){var g=o1(r);g=Cw(g);var v=U0(r,g);v!==null&&Cg(v,r,g),SO(r,g)}}function XK(){return q1}function YK(r,g,v,b){var l=k.T;k.T=null;var o=Hg.p;try{Hg.p=A1,mO(r,g,v,b)}finally{Hg.p=o,k.T=l}}function JK(r,g,v,b){var l=k.T;k.T=null;var o=Hg.p;try{Hg.p=E1,mO(r,g,v,b)}finally{Hg.p=o,k.T=l}}function mO(r,g,v,b){if(p6){var l=kO(b);if(l===null)zO(r,g,b,a6,v),G7(r,b);else if(QK(l,r,g,v,b))b.stopPropagation();else if(G7(r,b),g&4&&-1<PU.indexOf(r)){for(;l!==null;){var o=Tr(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var q=hv(o.pendingLanes);if(q!==0){var P=o;P.pendingLanes|=2;for(P.entangledLanes|=2;q;){var G=1<<31-x0(q);P.entanglements[1]|=G,q&=~G}Qv(o),(vg&(b0|M1))===O0&&(T6=l0()+UM,F2(0,!1))}}break;case 31:case 13:P=U0(o,2),P!==null&&Cg(P,o,2),tb(),SO(o,2)}if(o=kO(b),o===null&&zO(r,g,b,a6,v),o===l)break;l=o}l!==null&&b.stopPropagation()}else zO(r,g,b,null,v)}}function kO(r){return r=E8(r),DO(r)}function DO(r){if(a6=null,r=Jr(r),r!==null){var g=rr(r);if(g===null)r=null;else{var v=g.tag;if(v===13){if(r=Pr(g),r!==null)return r;r=null}else if(v===31){if(r=wr(g),r!==null)return r;r=null}else if(v===3){if(g.stateNode.current.memoizedState.isDehydrated)return g.tag===3?g.stateNode.containerInfo:null;r=null}else g!==r&&(r=null)}}return a6=r,null}function M7(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return A1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return E1;case"message":switch(NK()){case aO:return A1;case dO:return E1;case gh:case ZK:return Fv;case sO:return so;default:return Fv}default:return Fv}}function G7(r,g){switch(r){case"focusin":case"focusout":Aw=null;break;case"dragenter":case"dragleave":Pw=null;break;case"mouseover":case"mouseout":uw=null;break;case"pointerover":case"pointerout":Bl.delete(g.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(g.pointerId)}}function C2(r,g,v,b,l,o){if(r===null||r.nativeEvent!==o)return r={blockedOn:g,domEventName:v,eventSystemFlags:b,nativeEvent:o,targetContainers:[l]},g!==null&&(g=Tr(g),g!==null&&u7(g)),r;return r.eventSystemFlags|=b,g=r.targetContainers,l!==null&&g.indexOf(l)===-1&&g.push(l),r}function QK(r,g,v,b,l){switch(g){case"focusin":return Aw=C2(Aw,r,g,v,b,l),!0;case"dragenter":return Pw=C2(Pw,r,g,v,b,l),!0;case"mouseover":return uw=C2(uw,r,g,v,b,l),!0;case"pointerover":var o=l.pointerId;return Bl.set(o,C2(Bl.get(o)||null,r,g,v,b,l)),!0;case"gotpointercapture":return o=l.pointerId,Nl.set(o,C2(Nl.get(o)||null,r,g,v,b,l)),!0}return!1}function X7(r){var g=Jr(r.target);if(g!==null){var v=rr(g);if(v!==null){if(g=v.tag,g===13){if(g=Pr(v),g!==null){r.blockedOn=g,gr(r.priority,function(){W7(v)});return}}else if(g===31){if(g=wr(v),g!==null){r.blockedOn=g,gr(r.priority,function(){W7(v)});return}}else if(g===3&&v.stateNode.current.memoizedState.isDehydrated){r.blockedOn=v.tag===3?v.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Eo(r){if(r.blockedOn!==null)return!1;for(var g=r.targetContainers;0<g.length;){var v=kO(r.nativeEvent);if(v===null){v=r.nativeEvent;var b=new v.constructor(v.type,v),l=b;i2!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),i2=l,v.target.dispatchEvent(b),i2===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),i2=null}else return g=Tr(v),g!==null&&u7(g),r.blockedOn=v,!1;g.shift()}return!0}function Y7(r,g,v){Eo(r)&&v.delete(g)}function zK(){uA=!1,Aw!==null&&Eo(Aw)&&(Aw=null),Pw!==null&&Eo(Pw)&&(Pw=null),uw!==null&&Eo(uw)&&(uw=null),Bl.forEach(Y7),Nl.forEach(Y7)}function yo(r,g){r.blockedOn===g&&(r.blockedOn=null,uA||(uA=!0,bg.unstable_scheduleCallback(bg.unstable_NormalPriority,zK)))}function J7(r){d6!==r&&(d6=r,bg.unstable_scheduleCallback(bg.unstable_NormalPriority,function(){d6===r&&(d6=null);for(var g=0;g<r.length;g+=3){var v=r[g],b=r[g+1],l=r[g+2];if(typeof b!=="function")if(DO(b||v)===null)continue;else break;var o=Tr(v);o!==null&&(r.splice(g,3),g-=3,v={pending:!0,data:l,method:v.method,action:b},Object.freeze(v),DH(o,v,b,l))}}))}function db(r){function g(G){return yo(G,r)}Aw!==null&&yo(Aw,r),Pw!==null&&yo(Pw,r),uw!==null&&yo(uw,r),Bl.forEach(g),Nl.forEach(g);for(var v=0;v<Ww.length;v++){var b=Ww[v];b.blockedOn===r&&(b.blockedOn=null)}for(;0<Ww.length&&(v=Ww[0],v.blockedOn===null);)X7(v),v.blockedOn===null&&Ww.shift();if(v=(r.ownerDocument||r).$$reactFormReplay,v!=null)for(b=0;b<v.length;b+=3){var l=v[b],o=v[b+1],q=l[T0]||null;if(typeof o==="function")q||J7(v);else if(q){var P=null;if(o&&o.hasAttribute("formAction")){if(l=o,q=o[T0]||null)P=q.formAction;else if(DO(l)!==null)continue}else P=q.action;typeof P==="function"?v[b+1]=P:(v.splice(b,3),b-=3),J7(v)}}}function Q7(){function r(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(q){return l=q})},focusReset:"manual",scroll:"manual"})}function g(){l!==null&&(l(),l=null),b||setTimeout(v,20)}function v(){if(!b&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation==="object"){var b=!1,l=null;return navigation.addEventListener("navigate",r),navigation.addEventListener("navigatesuccess",g),navigation.addEventListener("navigateerror",g),setTimeout(v,100),function(){b=!0,navigation.removeEventListener("navigate",r),navigation.removeEventListener("navigatesuccess",g),navigation.removeEventListener("navigateerror",g),l!==null&&(l(),l=null)}}}function iO(r){this._internalRoot=r}function no(r){this._internalRoot=r}function z7(r){r[y5]&&(r._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var tr=Object.assign,RK=Symbol.for("react.element"),Rv=Symbol.for("react.transitional.element"),sb=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),VO=Symbol.for("react.profiler"),_O=Symbol.for("react.consumer"),Kv=Symbol.for("react.context"),S2=Symbol.for("react.forward_ref"),eO=Symbol.for("react.suspense"),EO=Symbol.for("react.suspense_list"),to=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),yO=Symbol.for("react.activity"),KK=Symbol.for("react.memo_cache_sentinel"),R7=Symbol.iterator,$K=Symbol.for("react.client.reference"),v0=Array.isArray,k=kh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hg=GA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,UK=Object.freeze({pending:!1,data:null,method:null,action:null}),nO=[],jO=[],av=-1,_5=zr(null),m2=zr(null),e5=zr(null),fo=zr(null),k2=0,K7,$7,U7,L7,F7,B7,N7;i.__reactDisabledLog=!0;var tO,Z7,fO=!1,cO=new(typeof WeakMap==="function"?WeakMap:Map),q1=null,$v=!1,e1=Object.prototype.hasOwnProperty,pO=bg.unstable_scheduleCallback,LK=bg.unstable_cancelCallback,FK=bg.unstable_shouldYield,BK=bg.unstable_requestPaint,l0=bg.unstable_now,NK=bg.unstable_getCurrentPriorityLevel,aO=bg.unstable_ImmediatePriority,dO=bg.unstable_UserBlockingPriority,gh=bg.unstable_NormalPriority,ZK=bg.unstable_LowPriority,sO=bg.unstable_IdlePriority,IK=bg.log,xK=bg.unstable_setDisableYieldValue,vh=null,L0=null,Uv=!1,Lv=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",x0=Math.clz32?Math.clz32:m4,TK=Math.log,CK=Math.LN2,co=256,po=262144,ao=4194304,A1=2,E1=8,Fv=32,so=268435456,E5=Math.random().toString(36).slice(2),G0="__reactFiber$"+E5,T0="__reactProps$"+E5,y5="__reactContainer$"+E5,rq="__reactEvents$"+E5,SK="__reactListeners$"+E5,mK="__reactHandles$"+E5,I7="__reactResources$"+E5,D2="__reactMarker$"+E5,x7=new Set,pw={},gq={},kK={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},DK=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),T7={},C7={},iK=/[\n"\\]/g,S7=!1,m7=!1,k7=!1,D7=!1,i7=!1,V7=!1,_7=["value","defaultValue"],e7=!1,E7=/["'&<>\n\t]|^\s|\s$/,VK="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),y7="applet caption html table td th marquee object template foreignObject desc title".split(" "),_K=y7.concat(["button"]),eK="dd dt li option optgroup p rp rt".split(" "),n7={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},r6={},vq={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},j7=/([A-Z])/g,t7=/^ms-/,EK=/^(?:webkit|moz|o)[A-Z]/,yK=/^-ms-/,nK=/-(.)/g,f7=/;\s*$/,wh={},wq={},c7=!1,p7=!1,a7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),g6="http://www.w3.org/1998/Math/MathML",bh="http://www.w3.org/2000/svg",jK=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),v6={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},d7={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},hh={},tK=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fK=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),s7=!1,C0={},r3=/^on./,cK=/^on[^A-Z]/,pK=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aK=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dK=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,i2=null,lh=null,oh=null,bq=!1,Bv=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hq=!1;if(Bv)try{var V2={};Object.defineProperty(V2,"passive",{get:function(){hq=!0}}),window.addEventListener("test",V2,V2),window.removeEventListener("test",V2,V2)}catch(r){hq=!1}var n5=null,lq=null,w6=null,aw={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},b6=n0(aw),_2=tr({},aw,{view:0,detail:0}),sK=n0(_2),oq,Hq,e2,h6=tr({},_2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:y8,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){if("movementX"in r)return r.movementX;return r!==e2&&(e2&&r.type==="mousemove"?(oq=r.screenX-e2.screenX,Hq=r.screenY-e2.screenY):Hq=oq=0,e2=r),oq},movementY:function(r){return"movementY"in r?r.movementY:Hq}}),g3=n0(h6),r$=tr({},h6,{dataTransfer:0}),g$=n0(r$),v$=tr({},_2,{relatedTarget:0}),Oq=n0(v$),w$=tr({},aw,{animationName:0,elapsedTime:0,pseudoElement:0}),b$=n0(w$),h$=tr({},aw,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),l$=n0(h$),o$=tr({},aw,{data:0}),v3=n0(o$),H$=v3,O$={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q$={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},P$=tr({},_2,{key:function(r){if(r.key){var g=O$[r.key]||r.key;if(g!=="Unidentified")return g}return r.type==="keypress"?(r=E4(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?q$[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:y8,charCode:function(r){return r.type==="keypress"?E4(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?E4(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),u$=n0(P$),W$=tr({},h6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w3=n0(W$),M$=tr({},_2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:y8}),G$=n0(M$),X$=tr({},aw,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y$=n0(X$),J$=tr({},h6,{deltaX:function(r){return"deltaX"in r?r.deltaX:("wheelDeltaX"in r)?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:("wheelDeltaY"in r)?-r.wheelDeltaY:("wheelDelta"in r)?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Q$=n0(J$),z$=tr({},aw,{newState:0,oldState:0}),R$=n0(z$),K$=[9,13,27,32],b3=229,qq=Bv&&"CompositionEvent"in window,E2=null;Bv&&"documentMode"in document&&(E2=document.documentMode);var $$=Bv&&"TextEvent"in window&&!E2,h3=Bv&&(!qq||E2&&8<E2&&11>=E2),l3=32,o3=String.fromCharCode(l3),H3=!1,Hh=!1,U$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},y2=null,n2=null,O3=!1;Bv&&(O3=jz("input")&&(!document.documentMode||9<document.documentMode));var S0=typeof Object.is==="function"?Object.is:dz,L$=Bv&&"documentMode"in document&&11>=document.documentMode,Oh=null,Aq=null,j2=null,Pq=!1,qh={animationend:mw("Animation","AnimationEnd"),animationiteration:mw("Animation","AnimationIteration"),animationstart:mw("Animation","AnimationStart"),transitionrun:mw("Transition","TransitionRun"),transitionstart:mw("Transition","TransitionStart"),transitioncancel:mw("Transition","TransitionCancel"),transitionend:mw("Transition","TransitionEnd")},uq={},q3={};Bv&&(q3=document.createElement("div").style,("AnimationEvent"in window)||(delete qh.animationend.animation,delete qh.animationiteration.animation,delete qh.animationstart.animation),("TransitionEvent"in window)||delete qh.transitionend.transition);var A3=kw("animationend"),P3=kw("animationiteration"),u3=kw("animationstart"),F$=kw("transitionrun"),B$=kw("transitionstart"),N$=kw("transitioncancel"),W3=kw("transitionend"),M3=new Map,Wq="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wq.push("scrollEnd");var G3=0;if(typeof performance==="object"&&typeof performance.now==="function")var Z$=performance,X3=function(){return Z$.now()};else{var I$=Date;X3=function(){return I$.now()}}var Mq=typeof reportError==="function"?reportError:function(r){if(typeof window==="object"&&typeof window.ErrorEvent==="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r==="object"&&r!==null&&typeof r.message==="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(g))return}else if(typeof process==="object"&&typeof process.emit==="function"){process.emit("uncaughtException",r);return}console.error(r)},x$="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",l6=0,Gq=1,Xq=2,Yq=3,o6="– ",H6="+ ",Y3="  ",Ug=typeof console<"u"&&typeof console.timeStamp==="function"&&typeof performance<"u"&&typeof performance.measure==="function",U1="Components ⚛",fr="Scheduler ⚛",cr="Blocking",j5=!1,dv={color:"primary",properties:null,tooltipText:"",track:U1},t5={start:-0,end:-0,detail:{devtools:dv}},T$=["Changed Props",""],J3="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",C$=["Changed Props",J3],t2=1,sv=2,L1=[],Ah=0,Jq=0,f5={};Object.freeze(f5);var F1=null,Ph=null,Br=0,S$=1,_r=2,F0=8,y1=16,m$=32,Q3=!1;try{var z3=Object.preventExtensions({})}catch(r){Q3=!0}var Qq=new WeakMap,uh=[],Wh=0,O6=null,f2=0,B1=[],N1=0,dw=null,r5=1,g5="",X0=null,Lg=null,ar=!1,Nv=!1,P1=null,c5=null,Z1=!1,zq=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Rq=zr(null),Kq=zr(null),R3={},q6=null,Mh=null,Gh=!1,k$=typeof AbortController<"u"?AbortController:function(){var r=[],g=this.signal={aborted:!1,addEventListener:function(v,b){r.push(b)}};this.abort=function(){g.aborted=!0,r.forEach(function(v){return v()})}},D$=bg.unstable_scheduleCallback,i$=bg.unstable_NormalPriority,fg={$$typeof:Kv,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},cg=bg.unstable_now,A6=console.createTask?console.createTask:function(){return null},c2=1,P6=2,o0=-0,p5=-0,v5=-0,w5=null,m0=-1.1,sw=-0,Ig=-0,Lr=-1.1,Fr=-1.1,Ng=null,Sg=!1,a5=-0,Zv=-1.1,p2=null,d5=0,$q=null,Uq=null,rb=-1.1,a2=null,Xh=-1.1,u6=-1.1,Iv=-0,b5=-1.1,I1=-1.1,Lq=0,d2=null,K3=null,$3=null,s5=-1.1,gb=null,rw=-1.1,W6=-1.1,U3=-0,L3=-0,M6=0,h5=null,F3=0,s2=-1.1,G6=!1,X6=!1,rl=null,Fq=0,vb=0,Yh=null,B3=k.S;k.S=function(r,g){if(KM=l0(),typeof g==="object"&&g!==null&&typeof g.then==="function"){if(0>b5&&0>I1){b5=cg();var v=Z2(),b=N2();if(v!==rw||b!==gb)rw=-1.1;s5=v,gb=b}hR(r,g)}B3!==null&&B3(r,g)};var wb=zr(null),n1={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},gl=[],vl=[],wl=[],bl=[],hl=[],ll=[],bb=new Set;n1.recordUnsafeLifecycleWarnings=function(r,g){bb.has(r.type)||(typeof g.componentWillMount==="function"&&g.componentWillMount.__suppressDeprecationWarning!==!0&&gl.push(r),r.mode&F0&&typeof g.UNSAFE_componentWillMount==="function"&&vl.push(r),typeof g.componentWillReceiveProps==="function"&&g.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&wl.push(r),r.mode&F0&&typeof g.UNSAFE_componentWillReceiveProps==="function"&&bl.push(r),typeof g.componentWillUpdate==="function"&&g.componentWillUpdate.__suppressDeprecationWarning!==!0&&hl.push(r),r.mode&F0&&typeof g.UNSAFE_componentWillUpdate==="function"&&ll.push(r))},n1.flushPendingUnsafeLifecycleWarnings=function(){var r=new Set;0<gl.length&&(gl.forEach(function(P){r.add(D(P)||"Component"),bb.add(P.type)}),gl=[]);var g=new Set;0<vl.length&&(vl.forEach(function(P){g.add(D(P)||"Component"),bb.add(P.type)}),vl=[]);var v=new Set;0<wl.length&&(wl.forEach(function(P){v.add(D(P)||"Component"),bb.add(P.type)}),wl=[]);var b=new Set;0<bl.length&&(bl.forEach(function(P){b.add(D(P)||"Component"),bb.add(P.type)}),bl=[]);var l=new Set;0<hl.length&&(hl.forEach(function(P){l.add(D(P)||"Component"),bb.add(P.type)}),hl=[]);var o=new Set;if(0<ll.length&&(ll.forEach(function(P){o.add(D(P)||"Component"),bb.add(P.type)}),ll=[]),0<g.size){var q=X(g);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,q)}0<b.size&&(q=X(b),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,q)),0<o.size&&(q=X(o),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,q)),0<r.size&&(q=X(r),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,q)),0<v.size&&(q=X(v),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,q)),0<l.size&&(q=X(l),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,q))};var Y6=new Map,N3=new Set;n1.recordLegacyContextWarning=function(r,g){var v=null;for(var b=r;b!==null;)b.mode&F0&&(v=b),b=b.return;v===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!N3.has(r.type)&&(b=Y6.get(v),r.type.contextTypes!=null||r.type.childContextTypes!=null||g!==null&&typeof g.getChildContext==="function")&&(b===void 0&&(b=[],Y6.set(v,b)),b.push(r))},n1.flushLegacyContextWarning=function(){Y6.forEach(function(r){if(r.length!==0){var g=r[0],v=new Set;r.forEach(function(l){v.add(D(l)||"Component"),N3.add(l.type)});var b=X(v);Hr(g,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,b)})}})},n1.discardPendingWarnings=function(){gl=[],vl=[],wl=[],bl=[],hl=[],ll=[],Y6=new Map};var Z3={react_stack_bottom_frame:function(r,g,v){var b=$v;$v=!0;try{return r(g,v)}finally{$v=b}}},Bq=Z3.react_stack_bottom_frame.bind(Z3),I3={react_stack_bottom_frame:function(r){var g=$v;$v=!0;try{return r.render()}finally{$v=g}}},x3=I3.react_stack_bottom_frame.bind(I3),T3={react_stack_bottom_frame:function(r,g){try{g.componentDidMount()}catch(v){og(r,r.return,v)}}},Nq=T3.react_stack_bottom_frame.bind(T3),C3={react_stack_bottom_frame:function(r,g,v,b,l){try{g.componentDidUpdate(v,b,l)}catch(o){og(r,r.return,o)}}},S3=C3.react_stack_bottom_frame.bind(C3),m3={react_stack_bottom_frame:function(r,g){var v=g.stack;r.componentDidCatch(g.value,{componentStack:v!==null?v:""})}},V$=m3.react_stack_bottom_frame.bind(m3),k3={react_stack_bottom_frame:function(r,g,v){try{v.componentWillUnmount()}catch(b){og(r,g,b)}}},D3=k3.react_stack_bottom_frame.bind(k3),i3={react_stack_bottom_frame:function(r){var g=r.create;return r=r.inst,g=g(),r.destroy=g}},_$=i3.react_stack_bottom_frame.bind(i3),V3={react_stack_bottom_frame:function(r,g,v){try{v()}catch(b){og(r,g,b)}}},e$=V3.react_stack_bottom_frame.bind(V3),_3={react_stack_bottom_frame:function(r){var g=r._init;return g(r._payload)}},E$=_3.react_stack_bottom_frame.bind(_3),Jh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Zq=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),J6=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Q6={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},hb=null,ol=!1,Qh=null,Hl=0,er=null,Iq,e3=Iq=!1,E3={},y3={},n3={};z=function(r,g,v){if(v!==null&&typeof v==="object"&&v._store&&(!v._store.validated&&v.key==null||v._store.validated===2)){if(typeof v._store!=="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");v._store.validated=1;var b=D(r),l=b||"null";if(!E3[l]){E3[l]=!0,v=v._owner,r=r._debugOwner;var o="";r&&typeof r.tag==="number"&&(l=D(r))&&(o=`

Check the render method of \``+l+"`."),o||b&&(o=`

Check the top-level render call using <`+b+">.");var q="";v!=null&&r!==v&&(b=null,typeof v.tag==="number"?b=D(v):typeof v.name==="string"&&(b=v.name),b&&(q=" It was passed a child from "+b+".")),Hr(g,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',o,q)})}}};var lb=k9(!0),j3=k9(!1),t3=0,f3=1,c3=2,xq=3,gw=!1,p3=!1,Tq=null,Cq=!1,zh=zr(null),z6=zr(0),u1=zr(null),x1=null,Rh=1,Ol=2,eg=zr(0),R6=0,T1=1,k0=2,W1=4,D0=8,Kh,a3=new Set,d3=new Set,Sq=new Set,s3=new Set,l5=0,Nr=null,Xg=null,pg=null,K6=!1,$h=!1,ob=!1,$6=0,ql=0,o5=null,y$=0,n$=25,S=null,C1=null,H5=-1,Al=!1,Pl={readContext:Bg,use:k5,useCallback:Dg,useContext:Dg,useEffect:Dg,useImperativeHandle:Dg,useLayoutEffect:Dg,useInsertionEffect:Dg,useMemo:Dg,useReducer:Dg,useRef:Dg,useState:Dg,useDebugValue:Dg,useDeferredValue:Dg,useTransition:Dg,useSyncExternalStore:Dg,useId:Dg,useHostTransitionStatus:Dg,useFormState:Dg,useActionState:Dg,useOptimistic:Dg,useMemoCache:Dg,useCacheRefresh:Dg};Pl.useEffectEvent=Dg;var mq=null,rM=null,kq=null,gM=null,xv=null,j1=null,U6=null;mq={readContext:function(r){return Bg(r)},use:k5,useCallback:function(r,g){return S="useCallback",jr(),Vb(g),CH(r,g)},useContext:function(r){return S="useContext",jr(),Bg(r)},useEffect:function(r,g){return S="useEffect",jr(),Vb(g),Xo(r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",jr(),Vb(v),TH(r,g,v)},useInsertionEffect:function(r,g){S="useInsertionEffect",jr(),Vb(g),nw(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",jr(),Vb(g),xH(r,g)},useMemo:function(r,g){S="useMemo",jr(),Vb(g);var v=k.H;k.H=xv;try{return SH(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",jr();var b=k.H;k.H=xv;try{return KH(r,g,v)}finally{k.H=b}},useRef:function(r){return S="useRef",jr(),ZH(r)},useState:function(r){S="useState",jr();var g=k.H;k.H=xv;try{return FH(r)}finally{k.H=g}},useDebugValue:function(){S="useDebugValue",jr()},useDeferredValue:function(r,g){return S="useDeferredValue",jr(),mH(r,g)},useTransition:function(){return S="useTransition",jr(),iH()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",jr(),UH(r,g,v)},useId:function(){return S="useId",jr(),VH()},useFormState:function(r,g){return S="useFormState",jr(),Po(),eb(r,g)},useActionState:function(r,g){return S="useActionState",jr(),eb(r,g)},useOptimistic:function(r){return S="useOptimistic",jr(),BH(r)},useHostTransitionStatus:jw,useMemoCache:yw,useCacheRefresh:function(){return S="useCacheRefresh",jr(),_H()},useEffectEvent:function(r){return S="useEffectEvent",jr(),IH(r)}},rM={readContext:function(r){return Bg(r)},use:k5,useCallback:function(r,g){return S="useCallback",a(),CH(r,g)},useContext:function(r){return S="useContext",a(),Bg(r)},useEffect:function(r,g){return S="useEffect",a(),Xo(r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",a(),TH(r,g,v)},useInsertionEffect:function(r,g){S="useInsertionEffect",a(),nw(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",a(),xH(r,g)},useMemo:function(r,g){S="useMemo",a();var v=k.H;k.H=xv;try{return SH(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",a();var b=k.H;k.H=xv;try{return KH(r,g,v)}finally{k.H=b}},useRef:function(r){return S="useRef",a(),ZH(r)},useState:function(r){S="useState",a();var g=k.H;k.H=xv;try{return FH(r)}finally{k.H=g}},useDebugValue:function(){S="useDebugValue",a()},useDeferredValue:function(r,g){return S="useDeferredValue",a(),mH(r,g)},useTransition:function(){return S="useTransition",a(),iH()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",a(),UH(r,g,v)},useId:function(){return S="useId",a(),VH()},useActionState:function(r,g){return S="useActionState",a(),eb(r,g)},useFormState:function(r,g){return S="useFormState",a(),Po(),eb(r,g)},useOptimistic:function(r){return S="useOptimistic",a(),BH(r)},useHostTransitionStatus:jw,useMemoCache:yw,useCacheRefresh:function(){return S="useCacheRefresh",a(),_H()},useEffectEvent:function(r){return S="useEffectEvent",a(),IH(r)}},kq={readContext:function(r){return Bg(r)},use:k5,useCallback:function(r,g){return S="useCallback",a(),Qo(r,g)},useContext:function(r){return S="useContext",a(),Bg(r)},useEffect:function(r,g){S="useEffect",a(),j0(2048,D0,r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",a(),Jo(r,g,v)},useInsertionEffect:function(r,g){return S="useInsertionEffect",a(),j0(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",a(),j0(4,W1,r,g)},useMemo:function(r,g){S="useMemo",a();var v=k.H;k.H=j1;try{return zo(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",a();var b=k.H;k.H=j1;try{return _b(r,g,v)}finally{k.H=b}},useRef:function(){return S="useRef",a(),qg().memoizedState},useState:function(){S="useState",a();var r=k.H;k.H=j1;try{return _b(V1)}finally{k.H=r}},useDebugValue:function(){S="useDebugValue",a()},useDeferredValue:function(r,g){return S="useDeferredValue",a(),hu(r,g)},useTransition:function(){return S="useTransition",a(),Au()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",a(),Wo(r,g,v)},useId:function(){return S="useId",a(),qg().memoizedState},useFormState:function(r){return S="useFormState",a(),Po(),Mo(r)},useActionState:function(r){return S="useActionState",a(),Mo(r)},useOptimistic:function(r,g){return S="useOptimistic",a(),c9(r,g)},useHostTransitionStatus:jw,useMemoCache:yw,useCacheRefresh:function(){return S="useCacheRefresh",a(),qg().memoizedState},useEffectEvent:function(r){return S="useEffectEvent",a(),Yo(r)}},gM={readContext:function(r){return Bg(r)},use:k5,useCallback:function(r,g){return S="useCallback",a(),Qo(r,g)},useContext:function(r){return S="useContext",a(),Bg(r)},useEffect:function(r,g){S="useEffect",a(),j0(2048,D0,r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",a(),Jo(r,g,v)},useInsertionEffect:function(r,g){return S="useInsertionEffect",a(),j0(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",a(),j0(4,W1,r,g)},useMemo:function(r,g){S="useMemo",a();var v=k.H;k.H=U6;try{return zo(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",a();var b=k.H;k.H=U6;try{return X2(r,g,v)}finally{k.H=b}},useRef:function(){return S="useRef",a(),qg().memoizedState},useState:function(){S="useState",a();var r=k.H;k.H=U6;try{return X2(V1)}finally{k.H=r}},useDebugValue:function(){S="useDebugValue",a()},useDeferredValue:function(r,g){return S="useDeferredValue",a(),lu(r,g)},useTransition:function(){return S="useTransition",a(),Pu()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",a(),Wo(r,g,v)},useId:function(){return S="useId",a(),qg().memoizedState},useFormState:function(r){return S="useFormState",a(),Po(),Go(r)},useActionState:function(r){return S="useActionState",a(),Go(r)},useOptimistic:function(r,g){return S="useOptimistic",a(),a9(r,g)},useHostTransitionStatus:jw,useMemoCache:yw,useCacheRefresh:function(){return S="useCacheRefresh",a(),qg().memoizedState},useEffectEvent:function(r){return S="useEffectEvent",a(),Yo(r)}},xv={readContext:function(r){return Q(),Bg(r)},use:function(r){return M(),k5(r)},useCallback:function(r,g){return S="useCallback",M(),jr(),CH(r,g)},useContext:function(r){return S="useContext",M(),jr(),Bg(r)},useEffect:function(r,g){return S="useEffect",M(),jr(),Xo(r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",M(),jr(),TH(r,g,v)},useInsertionEffect:function(r,g){S="useInsertionEffect",M(),jr(),nw(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",M(),jr(),xH(r,g)},useMemo:function(r,g){S="useMemo",M(),jr();var v=k.H;k.H=xv;try{return SH(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",M(),jr();var b=k.H;k.H=xv;try{return KH(r,g,v)}finally{k.H=b}},useRef:function(r){return S="useRef",M(),jr(),ZH(r)},useState:function(r){S="useState",M(),jr();var g=k.H;k.H=xv;try{return FH(r)}finally{k.H=g}},useDebugValue:function(){S="useDebugValue",M(),jr()},useDeferredValue:function(r,g){return S="useDeferredValue",M(),jr(),mH(r,g)},useTransition:function(){return S="useTransition",M(),jr(),iH()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",M(),jr(),UH(r,g,v)},useId:function(){return S="useId",M(),jr(),VH()},useFormState:function(r,g){return S="useFormState",M(),jr(),eb(r,g)},useActionState:function(r,g){return S="useActionState",M(),jr(),eb(r,g)},useOptimistic:function(r){return S="useOptimistic",M(),jr(),BH(r)},useMemoCache:function(r){return M(),yw(r)},useHostTransitionStatus:jw,useCacheRefresh:function(){return S="useCacheRefresh",jr(),_H()},useEffectEvent:function(r){return S="useEffectEvent",M(),jr(),IH(r)}},j1={readContext:function(r){return Q(),Bg(r)},use:function(r){return M(),k5(r)},useCallback:function(r,g){return S="useCallback",M(),a(),Qo(r,g)},useContext:function(r){return S="useContext",M(),a(),Bg(r)},useEffect:function(r,g){S="useEffect",M(),a(),j0(2048,D0,r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",M(),a(),Jo(r,g,v)},useInsertionEffect:function(r,g){return S="useInsertionEffect",M(),a(),j0(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",M(),a(),j0(4,W1,r,g)},useMemo:function(r,g){S="useMemo",M(),a();var v=k.H;k.H=j1;try{return zo(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",M(),a();var b=k.H;k.H=j1;try{return _b(r,g,v)}finally{k.H=b}},useRef:function(){return S="useRef",M(),a(),qg().memoizedState},useState:function(){S="useState",M(),a();var r=k.H;k.H=j1;try{return _b(V1)}finally{k.H=r}},useDebugValue:function(){S="useDebugValue",M(),a()},useDeferredValue:function(r,g){return S="useDeferredValue",M(),a(),hu(r,g)},useTransition:function(){return S="useTransition",M(),a(),Au()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",M(),a(),Wo(r,g,v)},useId:function(){return S="useId",M(),a(),qg().memoizedState},useFormState:function(r){return S="useFormState",M(),a(),Mo(r)},useActionState:function(r){return S="useActionState",M(),a(),Mo(r)},useOptimistic:function(r,g){return S="useOptimistic",M(),a(),c9(r,g)},useMemoCache:function(r){return M(),yw(r)},useHostTransitionStatus:jw,useCacheRefresh:function(){return S="useCacheRefresh",a(),qg().memoizedState},useEffectEvent:function(r){return S="useEffectEvent",M(),a(),Yo(r)}},U6={readContext:function(r){return Q(),Bg(r)},use:function(r){return M(),k5(r)},useCallback:function(r,g){return S="useCallback",M(),a(),Qo(r,g)},useContext:function(r){return S="useContext",M(),a(),Bg(r)},useEffect:function(r,g){S="useEffect",M(),a(),j0(2048,D0,r,g)},useImperativeHandle:function(r,g,v){return S="useImperativeHandle",M(),a(),Jo(r,g,v)},useInsertionEffect:function(r,g){return S="useInsertionEffect",M(),a(),j0(4,k0,r,g)},useLayoutEffect:function(r,g){return S="useLayoutEffect",M(),a(),j0(4,W1,r,g)},useMemo:function(r,g){S="useMemo",M(),a();var v=k.H;k.H=j1;try{return zo(r,g)}finally{k.H=v}},useReducer:function(r,g,v){S="useReducer",M(),a();var b=k.H;k.H=j1;try{return X2(r,g,v)}finally{k.H=b}},useRef:function(){return S="useRef",M(),a(),qg().memoizedState},useState:function(){S="useState",M(),a();var r=k.H;k.H=j1;try{return X2(V1)}finally{k.H=r}},useDebugValue:function(){S="useDebugValue",M(),a()},useDeferredValue:function(r,g){return S="useDeferredValue",M(),a(),lu(r,g)},useTransition:function(){return S="useTransition",M(),a(),Pu()},useSyncExternalStore:function(r,g,v){return S="useSyncExternalStore",M(),a(),Wo(r,g,v)},useId:function(){return S="useId",M(),a(),qg().memoizedState},useFormState:function(r){return S="useFormState",M(),a(),Go(r)},useActionState:function(r){return S="useActionState",M(),a(),Go(r)},useOptimistic:function(r,g){return S="useOptimistic",M(),a(),a9(r,g)},useMemoCache:function(r){return M(),yw(r)},useHostTransitionStatus:jw,useCacheRefresh:function(){return S="useCacheRefresh",a(),qg().memoizedState},useEffectEvent:function(r){return S="useEffectEvent",M(),a(),Yo(r)}};var vM={},wM=new Set,bM=new Set,hM=new Set,lM=new Set,oM=new Set,HM=new Set,OM=new Set,qM=new Set,AM=new Set,PM=new Set;Object.freeze(vM);var Dq={enqueueSetState:function(r,g,v){r=r._reactInternals;var b=o1(r),l=T5(b);l.payload=g,v!==void 0&&v!==null&&(EH(v),l.callback=v),g=C5(r,l,b),g!==null&&(Ov(b,"this.setState()",r),Cg(g,r,b),u2(g,r,b))},enqueueReplaceState:function(r,g,v){r=r._reactInternals;var b=o1(r),l=T5(b);l.tag=f3,l.payload=g,v!==void 0&&v!==null&&(EH(v),l.callback=v),g=C5(r,l,b),g!==null&&(Ov(b,"this.replaceState()",r),Cg(g,r,b),u2(g,r,b))},enqueueForceUpdate:function(r,g){r=r._reactInternals;var v=o1(r),b=T5(v);b.tag=c3,g!==void 0&&g!==null&&(EH(g),b.callback=g),g=C5(r,b,v),g!==null&&(Ov(v,"this.forceUpdate()",r),Cg(g,r,v),u2(g,r,v))}},Uh=null,iq=null,Vq=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),ag=!1,uM={},WM={},MM={},GM={},Lh=!1,XM={},L6={},_q={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},YM=!1,JM=null;JM=new Set;var O5=!1,dg=!1,eq=!1,QM=typeof WeakSet==="function"?WeakSet:Set,H0=null,Fh=null,Bh=null,sg=null,c0=!1,t1=null,w0=!1,ul=8192,j$={getCacheForType:function(r){var g=Bg(fg),v=g.data.get(r);return v===void 0&&(v=r(),g.data.set(r,v)),v},cacheSignal:function(){return Bg(fg).controller.signal},getOwner:function(){return q1}};if(typeof Symbol==="function"&&Symbol.for){var Wl=Symbol.for;Wl("selector.component"),Wl("selector.has_pseudo_class"),Wl("selector.role"),Wl("selector.test_id"),Wl("selector.text")}var t$=[],f$=typeof WeakMap==="function"?WeakMap:Map,O0=0,b0=2,M1=4,q5=0,Ml=1,Hb=2,F6=3,vw=4,B6=6,zM=5,vg=O0,Yg=null,nr=null,Er=0,p0=0,N6=1,Ob=2,Gl=3,RM=4,Eq=5,Xl=6,Z6=7,yq=8,qb=9,Ag=p0,G1=null,ww=!1,Nh=!1,nq=!1,Tv=0,xg=q5,bw=0,hw=0,jq=0,a0=0,Ab=0,Yl=null,i0=null,I6=!1,x6=0,KM=0,$M=300,T6=1/0,UM=500,Jl=null,ig=null,lw=null,C6=0,tq=1,fq=2,LM=3,ow=0,FM=1,BM=2,NM=3,ZM=4,S6=5,r0=0,Hw=null,Zh=null,f1=0,cq=0,pq=-0,aq=null,IM=null,xM=null,c1=C6,TM=null,c$=50,Ql=0,dq=null,sq=!1,m6=!1,p$=50,Pb=0,zl=null,Ih=!1,k6=null,CM=!1,SM=new Set,a$={},D6=null,xh=null,rA=!1,gA=!1,i6=!1,vA=!1,Ow=0,wA={};(function(){for(var r=0;r<Wq.length;r++){var g=Wq[r],v=g.toLowerCase();g=g[0].toUpperCase()+g.slice(1),i1(v,"on"+g)}i1(A3,"onAnimationEnd"),i1(P3,"onAnimationIteration"),i1(u3,"onAnimationStart"),i1("dblclick","onDoubleClick"),i1("focusin","onFocus"),i1("focusout","onBlur"),i1(F$,"onTransitionRun"),i1(B$,"onTransitionStart"),i1(N$,"onTransitionCancel"),i1(W3,"onTransitionEnd")})(),r1("onMouseEnter",["mouseout","mouseover"]),r1("onMouseLeave",["mouseout","mouseover"]),r1("onPointerEnter",["pointerout","pointerover"]),r1("onPointerLeave",["pointerout","pointerover"]),$0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$0("onBeforeInput",["compositionend","keypress","textInput","paste"]),$0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl)),V6="_reactListening"+Math.random().toString(36).slice(2),mM=!1,kM=!1,_6=!1,DM=!1,e6=!1,E6=!1,iM=!1,y6={},d$=/\r\n?/g,s$=/\u0000|\uFFFD/g,ub="http://www.w3.org/1999/xlink",hA="http://www.w3.org/XML/1998/namespace",rU="javascript:throw new Error('React form unexpectedly submitted.')",gU="suppressHydrationWarning",Wb="&",n6="/&",Kl="$",$l="/$",qw="$?",Mb="$~",Th="$!",vU="html",wU="body",bU="head",lA="F!",VM="F",_M="loading",hU="style",A5=0,Ch=1,j6=2,oA=null,HA=null,eM={dialog:!0,webview:!0},OA=null,Ul=void 0,EM=typeof setTimeout==="function"?setTimeout:void 0,lU=typeof clearTimeout==="function"?clearTimeout:void 0,Gb=-1,yM=typeof Promise==="function"?Promise:void 0,oU=typeof queueMicrotask==="function"?queueMicrotask:typeof yM<"u"?function(r){return yM.resolve(null).then(r).catch(nR)}:EM,qA=null,Xb=0,Ll=1,nM=2,jM=3,S1=4,m1=new Map,tM=new Set,P5=Hg.d;Hg.d={f:function(){var r=P5.f(),g=tb();return r||g},r:function(r){var g=Tr(r);g!==null&&g.tag===5&&g.type==="form"?qu(g):P5.r(r)},D:function(r){P5.D(r),w7("dns-prefetch",r,null)},C:function(r,g){P5.C(r,g),w7("preconnect",r,g)},L:function(r,g,v){P5.L(r,g,v);var b=Sh;if(b&&r&&g){var l='link[rel="preload"][as="'+K1(g)+'"]';g==="image"?v&&v.imageSrcSet?(l+='[imagesrcset="'+K1(v.imageSrcSet)+'"]',typeof v.imageSizes==="string"&&(l+='[imagesizes="'+K1(v.imageSizes)+'"]')):l+='[href="'+K1(r)+'"]':l+='[href="'+K1(r)+'"]';var o=l;switch(g){case"style":o=pb(r);break;case"script":o=ab(r)}m1.has(o)||(r=tr({rel:"preload",href:g==="image"&&v&&v.imageSrcSet?void 0:r,as:g},v),m1.set(o,r),b.querySelector(l)!==null||g==="style"&&b.querySelector(x2(o))||g==="script"&&b.querySelector(T2(o))||(g=b.createElement("link"),M0(g,"link",r),Ur(g),b.head.appendChild(g)))}},m:function(r,g){P5.m(r,g);var v=Sh;if(v&&r){var b=g&&typeof g.as==="string"?g.as:"script",l='link[rel="modulepreload"][as="'+K1(b)+'"][href="'+K1(r)+'"]',o=l;switch(b){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ab(r)}if(!m1.has(o)&&(r=tr({rel:"modulepreload",href:r},g),m1.set(o,r),v.querySelector(l)===null)){switch(b){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(v.querySelector(T2(o)))return}b=v.createElement("link"),M0(b,"link",r),Ur(b),v.head.appendChild(b)}}},X:function(r,g){P5.X(r,g);var v=Sh;if(v&&r){var b=wg(v).hoistableScripts,l=ab(r),o=b.get(l);o||(o=v.querySelector(T2(l)),o||(r=tr({src:r,async:!0},g),(g=m1.get(l))&&TO(r,g),o=v.createElement("script"),Ur(o),M0(o,"link",r),v.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},b.set(l,o))}},S:function(r,g,v){P5.S(r,g,v);var b=Sh;if(b&&r){var l=wg(b).hoistableStyles,o=pb(r);g=g||"default";var q=l.get(o);if(!q){var P={loading:Xb,preload:null};if(q=b.querySelector(x2(o)))P.loading=Ll|S1;else{r=tr({rel:"stylesheet",href:r,"data-precedence":g},v),(v=m1.get(o))&&xO(r,v);var G=q=b.createElement("link");Ur(G),M0(G,"link",r),G._p=new Promise(function(Y,N){G.onload=Y,G.onerror=N}),G.addEventListener("load",function(){P.loading|=Ll}),G.addEventListener("error",function(){P.loading|=nM}),P.loading|=S1,Vo(q,g,b)}q={type:"stylesheet",instance:q,count:1,state:P},l.set(o,q)}}},M:function(r,g){P5.M(r,g);var v=Sh;if(v&&r){var b=wg(v).hoistableScripts,l=ab(r),o=b.get(l);o||(o=v.querySelector(T2(l)),o||(r=tr({src:r,async:!0,type:"module"},g),(g=m1.get(l))&&TO(r,g),o=v.createElement("script"),Ur(o),M0(o,"link",r),v.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},b.set(l,o))}}};var Sh=typeof document>"u"?null:document,t6=null,HU=60000,OU=800,qU=500,AA=0,PA=null,f6=null,Yb=UK,Fl={$$typeof:Kv,Provider:null,Consumer:null,_currentValue:Yb,_currentValue2:Yb,_threadCount:0},fM="%c%s%c",cM="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",pM="",c6=" ",AU=Function.prototype.bind,aM=!1,dM=null,sM=null,rG=null,gG=null,vG=null,wG=null,bG=null,hG=null,lG=null,oG=null;dM=function(r,g,v,b){g=w(r,g),g!==null&&(v=h(g.memoizedState,v,0,b),g.memoizedState=v,g.baseState=v,r.memoizedProps=tr({},r.memoizedProps),v=U0(r,2),v!==null&&Cg(v,r,2))},sM=function(r,g,v){g=w(r,g),g!==null&&(v=A(g.memoizedState,v,0),g.memoizedState=v,g.baseState=v,r.memoizedProps=tr({},r.memoizedProps),v=U0(r,2),v!==null&&Cg(v,r,2))},rG=function(r,g,v,b){g=w(r,g),g!==null&&(v=H(g.memoizedState,v,b),g.memoizedState=v,g.baseState=v,r.memoizedProps=tr({},r.memoizedProps),v=U0(r,2),v!==null&&Cg(v,r,2))},gG=function(r,g,v){r.pendingProps=h(r.memoizedProps,g,0,v),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=U0(r,2),g!==null&&Cg(g,r,2)},vG=function(r,g){r.pendingProps=A(r.memoizedProps,g,0),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=U0(r,2),g!==null&&Cg(g,r,2)},wG=function(r,g,v){r.pendingProps=H(r.memoizedProps,g,v),r.alternate&&(r.alternate.pendingProps=r.pendingProps),g=U0(r,2),g!==null&&Cg(g,r,2)},bG=function(r){var g=U0(r,2);g!==null&&Cg(g,r,2)},hG=function(r){var g=Tb(),v=U0(r,g);v!==null&&Cg(v,r,g)},lG=function(r){W=r},oG=function(r){u=r};var p6=!0,a6=null,uA=!1,Aw=null,Pw=null,uw=null,Bl=new Map,Nl=new Map,Ww=[],PU="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),d6=null;if(no.prototype.render=iO.prototype.render=function(r){var g=this._internalRoot;if(g===null)throw Error("Cannot update an unmounted root.");var v=arguments;typeof v[1]==="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):j(v[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof v[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),v=r;var b=g.current,l=o1(b);CO(b,l,v,g,null,null)},no.prototype.unmount=iO.prototype.unmount=function(){var r=arguments;if(typeof r[0]==="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),r=this._internalRoot,r!==null){this._internalRoot=null;var g=r.containerInfo;(vg&(b0|M1))!==O0&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),CO(r.current,2,null,r,null,null),tb(),g[y5]=null}},no.prototype.unstable_scheduleHydration=function(r){if(r){var g=x();r={blockedOn:null,target:r,priority:g};for(var v=0;v<Ww.length&&g!==0&&g<Ww[v].priority;v++);Ww.splice(v,0,r),v===0&&X7(r)}},function(){var r=kh.version;if(r!=="19.2.5")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(r+`
  - react-dom:  19.2.5
Learn more: https://react.dev/warnings/version-mismatch`))}(),typeof Map==="function"&&Map.prototype!=null&&typeof Map.prototype.forEach==="function"&&typeof Set==="function"&&Set.prototype!=null&&typeof Set.prototype.clear==="function"&&typeof Set.prototype.forEach==="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),Hg.findDOMNode=function(r){var g=r._reactInternals;if(g===void 0){if(typeof r.render==="function")throw Error("Unable to find node on an unmounted component.");throw r=Object.keys(r).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+r)}return r=s(g),r=r!==null?br(r):null,r=r===null?null:r.stateNode,r},!function(){var r={bundleType:1,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.5"};return r.overrideHookState=dM,r.overrideHookStateDeletePath=sM,r.overrideHookStateRenamePath=rG,r.overrideProps=gG,r.overridePropsDeletePath=vG,r.overridePropsRenamePath=wG,r.scheduleUpdate=bG,r.scheduleRetry=hG,r.setErrorHandler=lG,r.setSuspenseHandler=oG,r.scheduleRefresh=f,r.scheduleRoot=I,r.setRefreshHandler=C,r.getCurrentFiber=XK,xb(r)}()&&Bv&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var HG=window.location.protocol;/^(https?|file):$/.test(HG)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(HG==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}FU.createRoot=function(r,g){if(!j(r))throw Error("Target container is not a DOM element.");z7(r);var v=!1,b="",l=Yu,o=Ju,q=Qu;return g!==null&&g!==void 0&&(g.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof g==="object"&&g!==null&&g.$$typeof===Rv&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),g.unstable_strictMode===!0&&(v=!0),g.identifierPrefix!==void 0&&(b=g.identifierPrefix),g.onUncaughtError!==void 0&&(l=g.onUncaughtError),g.onCaughtError!==void 0&&(o=g.onCaughtError),g.onRecoverableError!==void 0&&(q=g.onRecoverableError)),g=q7(r,1,!1,null,null,v,b,null,l,o,q,Q7),r[y5]=g.current,QO(r),new iO(g)},FU.hydrateRoot=function(r,g,v){if(!j(r))throw Error("Target container is not a DOM element.");z7(r),g===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var b=!1,l="",o=Yu,q=Ju,P=Qu,G=null;return v!==null&&v!==void 0&&(v.unstable_strictMode===!0&&(b=!0),v.identifierPrefix!==void 0&&(l=v.identifierPrefix),v.onUncaughtError!==void 0&&(o=v.onUncaughtError),v.onCaughtError!==void 0&&(q=v.onCaughtError),v.onRecoverableError!==void 0&&(P=v.onRecoverableError),v.formState!==void 0&&(G=v.formState)),g=q7(r,1,!0,g,v!=null?v:null,b,l,G,o,q,P,Q7),g.context=A7(null),v=g.current,b=o1(v),b=Cw(b),l=T5(b),l.callback=null,C5(v,l,b),Ov(b,"hydrateRoot()",null),v=b,g.current.lanes=v,L5(g,v),Qv(g),r[y5]=g.current,QO(r),new no(g)},FU.version="19.2.5",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var WG=Jb((nx,uG)=>{uG.exports=PG()});var rg=Jb((_L)=>{var Ub=ur(hg());(function(){function w(i){if(i==null)return null;if(typeof i==="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i==="string")return i;switch(i){case C:return"Fragment";case rr:return"Profiler";case j:return"StrictMode";case s:return"Suspense";case br:return"SuspenseList";case t:return"Activity"}if(typeof i==="object")switch(typeof i.tag==="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),i.$$typeof){case f:return"Portal";case wr:return i.displayName||"Context";case Pr:return(i._context.displayName||"Context")+".Consumer";case p:var V=i.render;return i=i.displayName,i||(i=V.displayName||V.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case m:return V=i.displayName||null,V!==null?V:w(i.type)||"Memo";case E:V=i._payload,i=i._init;try{return w(i(V))}catch(Ar){}}return null}function h(i){return""+i}function H(i){try{h(i);var V=!1}catch(Yr){V=!0}if(V){V=console;var Ar=V.error,Kr=typeof Symbol==="function"&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||"Object";return Ar.call(V,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Kr),h(i)}}function O(i){if(i===C)return"<>";if(typeof i==="object"&&i!==null&&i.$$typeof===E)return"<...>";try{var V=w(i);return V?"<"+V+">":"<...>"}catch(Ar){return"<...>"}}function A(){var i=zr.A;return i===null?null:i.getOwner()}function u(){return Error("react-stack-top-frame")}function W(i){if(Xr.call(i,"key")){var V=Object.getOwnPropertyDescriptor(i,"key").get;if(V&&V.isReactWarning)return!1}return i.key!==void 0}function M(i,V){function Ar(){_||(_=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",V))}Ar.isReactWarning=!0,Object.defineProperty(i,"key",{get:Ar,configurable:!0})}function Q(){var i=w(this.type);return d[i]||(d[i]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),i=this.props.ref,i!==void 0?i:null}function R(i,V,Ar,Kr,Yr,kr){var or=Ar.ref;return i={$$typeof:I,type:i,key:V,props:Ar,_owner:Kr},(or!==void 0?or:null)!==null?Object.defineProperty(i,"ref",{enumerable:!1,get:Q}):Object.defineProperty(i,"ref",{enumerable:!1,value:null}),i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(i,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(i,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Yr}),Object.defineProperty(i,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:kr}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i}function z(i,V,Ar,Kr,Yr,kr){var or=V.children;if(or!==void 0)if(Kr)if(Rr(or)){for(Kr=0;Kr<or.length;Kr++)X(or[Kr]);Object.freeze&&Object.freeze(or)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else X(or);if(Xr.call(V,"key")){or=w(i);var Dr=Object.keys(V).filter(function(Jg){return Jg!=="key"});Kr=0<Dr.length?"{key: someKey, "+Dr.join(": ..., ")+": ...}":"{key: someKey}",Gr[or+Kr]||(Dr=0<Dr.length?"{"+Dr.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Kr,or,Dr,or),Gr[or+Kr]=!0)}if(or=null,Ar!==void 0&&(H(Ar),or=""+Ar),W(V)&&(H(V.key),or=""+V.key),"key"in V){Ar={};for(var pr in V)pr!=="key"&&(Ar[pr]=V[pr])}else Ar=V;return or&&M(Ar,typeof i==="function"?i.displayName||i.name||"Unknown":i),R(i,or,Ar,A(),Yr,kr)}function X(i){K(i)?i._store&&(i._store.validated=1):typeof i==="object"&&i!==null&&i.$$typeof===E&&(i._payload.status==="fulfilled"?K(i._payload.value)&&i._payload.value._store&&(i._payload.value._store.validated=1):i._store&&(i._store.validated=1))}function K(i){return typeof i==="object"&&i!==null&&i.$$typeof===I}var I=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),rr=Symbol.for("react.profiler"),Pr=Symbol.for("react.consumer"),wr=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),br=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),t=Symbol.for("react.activity"),D=Symbol.for("react.client.reference"),zr=Ub.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xr=Object.prototype.hasOwnProperty,Rr=Array.isArray,mr=console.createTask?console.createTask:function(){return null};Ub={react_stack_bottom_frame:function(i){return i()}};var _,d={},hr=Ub.react_stack_bottom_frame.bind(Ub,u)(),vr=mr(O(u)),Gr={};_L.Fragment=C,_L.jsxDEV=function(i,V,Ar,Kr){var Yr=1e4>zr.recentlyCreatedOwnerStacks++;return z(i,V,Ar,Kr,Yr?Error("react-stack-top-frame"):hr,Yr?mr(O(i)):vr)}})()});var KP=ur(hg(),1),$P=ur(WG(),1);var MG=`/* ── Panel layout ─────────────────────────────────────────────────────────── */\r
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
`;var GG=`/* ── Script list header ─────────────────────────────────────────────────── */\r
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
`;var XG=`/* ── Editor view ────────────────────────────────────────────────────────── */\r
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
`;var YG=`/* ── Console ────────────────────────────────────────────────────────────── */\r
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
`;var JG=`/* ── Bindings ────────────────────────────────────────────────────────────── */\r
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
`;var QG=`/* ── Triggers section ────────────────────────────────────────────────────── */\r
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
`;var zG=`/* ── Script modal ───────────────────────────────────────────────────────── */
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
`;var RG=`/* ── Status tab ─────────────────────────────────────────────────────────── */\r
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
`;var KG=`/* ── Settings panel ─────────────────────────────────────────────────────── */\r
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
`;var $G=`/* ── Reference tab ────────────────────────────────────────────────────────── */\r
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
`;var UG=MG+GG+XG+YG+JG+QG+zG+RG+KG+$G;var $g=ur(hg(),1);var v8=ur(hg(),1);var r8=(...w)=>w.filter((h,H,O)=>{return Boolean(h)&&h.trim()!==""&&O.indexOf(h)===H}).join(" ").trim();var LG=(w)=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var FG=(w)=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(h,H,O)=>O?O.toUpperCase():H.toLowerCase());var XA=(w)=>{let h=FG(w);return h.charAt(0).toUpperCase()+h.slice(1)};var Zl=ur(hg(),1);var g8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var BG=(w)=>{for(let h in w)if(h.startsWith("aria-")||h==="role"||h==="title")return!0;return!1};var Dh=ur(hg(),1),DU=Dh.createContext({});var NG=()=>Dh.useContext(DU);var ZG=Zl.forwardRef(({color:w,size:h,strokeWidth:H,absoluteStrokeWidth:O,className:A="",children:u,iconNode:W,...M},Q)=>{let{size:R=24,strokeWidth:z=2,absoluteStrokeWidth:X=!1,color:K="currentColor",className:I=""}=NG()??{},f=O??X?Number(H??z)*24/Number(h??R):H??z;return Zl.createElement("svg",{ref:Q,...g8,width:h??R??g8.width,height:h??R??g8.height,stroke:w??K,strokeWidth:f,className:r8("lucide",I,A),...!u&&!BG(M)&&{"aria-hidden":"true"},...M},[...W.map(([C,j])=>Zl.createElement(C,j)),...Array.isArray(u)?u:[u]])});var n=(w,h)=>{let H=v8.forwardRef(({className:O,...A},u)=>v8.createElement(ZG,{ref:u,iconNode:h,className:r8(`lucide-${LG(XA(w))}`,`lucide-${w}`,O),...A}));return H.displayName=XA(w),H};var iU=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],Cv=n("braces",iU);var VU=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Mw=n("chart-column",VU);var _U=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Y0=n("code-xml",_U);var eU=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],Sv=n("file-code-corner",eU);var EU=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Gw=n("layers",EU);var yU=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xw=n("loader-circle",yU);var nU=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],k1=n("triangle-alert",nU);var jU=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Yw=n("user-round",jU);var tU=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Il=n("activity",tU);var fU=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],xl=n("arrow-down-to-line",fU);var cU=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],Tl=n("arrow-up-to-line",cU);var pU=[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]],Cl=n("blocks",pU);var aU=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],zb=n("book-marked",aU);var dU=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Sl=n("book-open",dU);var sU=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ml=n("calendar",sU);var rL=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kl=n("check",rL);var gL=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],J0=n("chevron-down",gL);var vL=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Dl=n("chevron-left",vL);var wL=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],W5=n("chevron-right",wL);var bL=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],X1=n("chevron-up",bL);var hL=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],il=n("chevrons-up-down",hL);var lL=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Vl=n("clock",lL);var oL=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],p1=n("copy",oL);var HL=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],a1=n("database",HL);var OL=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Rb=n("download",OL);var qL=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_l=n("eye",qL);var AL=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Kb=n("folder-open",AL);var PL=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],el=n("hash",PL);var uL=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],El=n("link-2",uL);var WL=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],yl=n("list-ordered",WL);var ML=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],nl=n("list",ML);var GL=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jl=n("lock",GL);var XL=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]],ih=n("message-square-plus",XL);var YL=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],tl=n("message-square",YL);var JL=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fl=n("package",JL);var QL=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],d1=n("pencil",QL);var zL=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],cl=n("play",zL);var RL=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pl=n("plus",RL);var KL=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],al=n("radio",KL);var $L=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],M5=n("refresh-cw",$L);var UL=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],dl=n("save",UL);var LL=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Jw=n("search",LL);var FL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Vh=n("shield-alert",FL);var BL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],sl=n("shield",BL);var NL=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],r4=n("syringe",NL);var ZL=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],mv=n("terminal",ZL);var IL=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],$b=n("timer",IL);var xL=[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],g4=n("toggle-left",xL);var TL=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],v4=n("toggle-right",TL);var CL=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],B0=n("trash-2",CL);var SL=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],w4=n("type",SL);var mL=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],b4=n("upload",mL);var kL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],_h=n("user-plus",kL);var DL=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],h4=n("wrench",DL);var iL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],V0=n("x",iL);var VL=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],G5=n("zap",VL);var w8={enabled:!0,scriptTimeoutMs:60000,consoleHistoryLimit:500,editorFontSize:12,autosaveDebounceMs:1200,defaultTriggerTemplate:`// @description
// @author
// @version     1.0.0
// @tags

`,defaultLibraryTemplate:`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`};var I8=ur(hg(),1);var K4=ur(hg(),1);var mg=ur(rg(),1),eL={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"},IG=({script:w,selected:h,dot:H,duration:O,onSelect:A,onEdit:u,sendToBackend:W})=>{let M=(K)=>{K.stopPropagation(),W({type:"update_script",id:w.id,patch:{enabled:!w.enabled}})},Q=(K)=>{K.stopPropagation(),W({type:"duplicate_script",id:w.id})},R=(K)=>{if(K.stopPropagation(),!window.confirm(`Delete "${w.name}"?`))return;W({type:"delete_script",id:w.id})},z=(K)=>{K.stopPropagation(),u()},X=w.bindings?.length??0;return mg.jsxDEV("div",{className:`ls-item${h?" ls-selected":""}${!w.enabled&&w.type!=="library"?" ls-disabled":""}`,onClick:A,children:[mg.jsxDEV("span",{className:eL[H],title:H},void 0,!1,void 0,this),mg.jsxDEV("div",{className:"ls-item-body",children:[mg.jsxDEV("div",{className:"ls-item-name",title:w.name,children:w.name},void 0,!1,void 0,this),mg.jsxDEV("div",{className:"ls-item-meta",children:[w.type!=="library"&&mg.jsxDEV("span",{children:w.enabled?"Enabled":"Disabled"},void 0,!1,void 0,this),O!==void 0&&H!=="running"&&mg.jsxDEV("span",{style:{color:H==="error"?"#ef4444":"var(--lumiverse-text-muted)"},children:[O,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w.type!=="library"&&X>0&&mg.jsxDEV("div",{className:"ls-item-bindings",children:w.bindings.map((K,I)=>mg.jsxDEV("span",{className:"ls-binding-badge",children:[K.type==="character"?mg.jsxDEV(Yw,{size:9},void 0,!1,void 0,this):mg.jsxDEV(tl,{size:9},void 0,!1,void 0,this),mg.jsxDEV("span",{style:{maxWidth:70,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:K.displayName},void 0,!1,void 0,this)]},I,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),mg.jsxDEV("div",{className:"ls-item-actions",children:[mg.jsxDEV("button",{className:"ls-icon-btn",onClick:z,title:"Edit script",children:mg.jsxDEV(d1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),w.type!=="library"&&mg.jsxDEV("button",{className:"ls-icon-btn",onClick:M,title:w.enabled?"Disable":"Enable",children:w.enabled?mg.jsxDEV(v4,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):mg.jsxDEV(g4,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),mg.jsxDEV("button",{className:"ls-icon-btn",onClick:Q,title:"Duplicate",children:mg.jsxDEV(p1,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this),mg.jsxDEV("button",{className:"ls-icon-btn ls-danger",onClick:R,title:"Delete",children:mg.jsxDEV(B0,{size:13},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var kg=Uint8Array,Y1=Uint16Array,BA=Int32Array,h8=new kg([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l8=new kg([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),RA=new kg([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kG=function(w,h){var H=new Y1(31);for(var O=0;O<31;++O)H[O]=h+=1<<w[O-1];var A=new BA(H[30]);for(var O=1;O<30;++O)for(var u=H[O];u<H[O+1];++u)A[u]=u-H[O]<<5|O;return{b:H,r:A}},DG=kG(h8,2),iG=DG.b,KA=DG.r;iG[28]=258,KA[258]=28;var VG=kG(l8,0),EL=VG.b,xG=VG.r,$A=new Y1(32768);for(gg=0;gg<32768;++gg)kv=(gg&43690)>>1|(gg&21845)<<1,kv=(kv&52428)>>2|(kv&13107)<<2,kv=(kv&61680)>>4|(kv&3855)<<4,$A[gg]=((kv&65280)>>8|(kv&255)<<8)>>1;var kv,gg,iv=function(w,h,H){var O=w.length,A=0,u=new Y1(h);for(;A<O;++A)if(w[A])++u[w[A]-1];var W=new Y1(h);for(A=1;A<h;++A)W[A]=W[A-1]+u[A-1]<<1;var M;if(H){M=new Y1(1<<h);var Q=15-h;for(A=0;A<O;++A)if(w[A]){var R=A<<4|w[A],z=h-w[A],X=W[w[A]-1]++<<z;for(var K=X|(1<<z)-1;X<=K;++X)M[$A[X]>>Q]=R}}else{M=new Y1(O);for(A=0;A<O;++A)if(w[A])M[A]=$A[W[w[A]-1]++]>>15-w[A]}return M},Qw=new kg(288);for(gg=0;gg<144;++gg)Qw[gg]=8;var gg;for(gg=144;gg<256;++gg)Qw[gg]=9;var gg;for(gg=256;gg<280;++gg)Qw[gg]=7;var gg;for(gg=280;gg<288;++gg)Qw[gg]=8;var gg,H4=new kg(32);for(gg=0;gg<32;++gg)H4[gg]=5;var gg,yL=iv(Qw,9,0),nL=iv(Qw,9,1),jL=iv(H4,5,0),tL=iv(H4,5,1),YA=function(w){var h=w[0];for(var H=1;H<w.length;++H)if(w[H]>h)h=w[H];return h},s1=function(w,h,H){var O=h/8|0;return(w[O]|w[O+1]<<8)>>(h&7)&H},JA=function(w,h){var H=h/8|0;return(w[H]|w[H+1]<<8|w[H+2]<<16)>>(h&7)},NA=function(w){return(w+7)/8|0},O4=function(w,h,H){if(h==null||h<0)h=0;if(H==null||H>w.length)H=w.length;return new kg(w.subarray(h,H))};var fL=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_0=function(w,h,H){var O=Error(h||fL[w]);if(O.code=w,Error.captureStackTrace)Error.captureStackTrace(O,_0);if(!H)throw O;return O},cL=function(w,h,H,O){var A=w.length,u=O?O.length:0;if(!A||h.f&&!h.l)return H||new kg(0);var W=!H,M=W||h.i!=2,Q=h.i;if(W)H=new kg(A*3);var R=function(Hr){var y0=H.length;if(Hr>y0){var K0=new kg(Math.max(y0*2,Hr));K0.set(H),H=K0}},z=h.f||0,X=h.p||0,K=h.b||0,I=h.l,f=h.d,C=h.m,j=h.n,rr=A*8;do{if(!I){z=s1(w,X,1);var Pr=s1(w,X+1,3);if(X+=3,!Pr){var wr=NA(X)+4,p=w[wr-4]|w[wr-3]<<8,s=wr+p;if(s>A){if(Q)_0(0);break}if(M)R(K+p);H.set(w.subarray(wr,s),K),h.b=K+=p,h.p=X=s*8,h.f=z;continue}else if(Pr==1)I=nL,f=tL,C=9,j=5;else if(Pr==2){var br=s1(w,X,31)+257,m=s1(w,X+10,15)+4,E=br+s1(w,X+5,31)+1;X+=14;var t=new kg(E),D=new kg(19);for(var zr=0;zr<m;++zr)D[RA[zr]]=s1(w,X+zr*3,7);X+=m*3;var Xr=YA(D),Rr=(1<<Xr)-1,mr=iv(D,Xr,1);for(var zr=0;zr<E;){var _=mr[s1(w,X,Rr)];X+=_&15;var wr=_>>4;if(wr<16)t[zr++]=wr;else{var d=0,hr=0;if(wr==16)hr=3+s1(w,X,3),X+=2,d=t[zr-1];else if(wr==17)hr=3+s1(w,X,7),X+=3;else if(wr==18)hr=11+s1(w,X,127),X+=7;while(hr--)t[zr++]=d}}var vr=t.subarray(0,br),Gr=t.subarray(br);C=YA(vr),j=YA(Gr),I=iv(vr,C,1),f=iv(Gr,j,1)}else _0(1);if(X>rr){if(Q)_0(0);break}}if(M)R(K+131072);var i=(1<<C)-1,V=(1<<j)-1,Ar=X;for(;;Ar=X){var d=I[JA(w,X)&i],Kr=d>>4;if(X+=d&15,X>rr){if(Q)_0(0);break}if(!d)_0(2);if(Kr<256)H[K++]=Kr;else if(Kr==256){Ar=X,I=null;break}else{var Yr=Kr-254;if(Kr>264){var zr=Kr-257,kr=h8[zr];Yr=s1(w,X,(1<<kr)-1)+iG[zr],X+=kr}var or=f[JA(w,X)&V],Dr=or>>4;if(!or)_0(3);X+=or&15;var Gr=EL[Dr];if(Dr>3){var kr=l8[Dr];Gr+=JA(w,X)&(1<<kr)-1,X+=kr}if(X>rr){if(Q)_0(0);break}if(M)R(K+131072);var pr=K+Yr;if(K<Gr){var Jg=u-Gr,Z0=Math.min(Gr,pr);if(Jg+K<0)_0(3);for(;K<Z0;++K)H[K]=O[Jg+K]}for(;K<pr;++K)H[K]=H[K-Gr]}}if(h.l=I,h.p=Ar,h.b=K,h.f=z,I)z=1,h.m=C,h.d=f,h.n=j}while(!z);return K!=H.length&&W?O4(H,0,K):H.subarray(0,K)},X5=function(w,h,H){H<<=h&7;var O=h/8|0;w[O]|=H,w[O+1]|=H>>8},l4=function(w,h,H){H<<=h&7;var O=h/8|0;w[O]|=H,w[O+1]|=H>>8,w[O+2]|=H>>16},QA=function(w,h){var H=[];for(var O=0;O<w.length;++O)if(w[O])H.push({s:O,f:w[O]});var A=H.length,u=H.slice();if(!A)return{t:eG,l:0};if(A==1){var W=new kg(H[0].s+1);return W[H[0].s]=1,{t:W,l:1}}H.sort(function(s,br){return s.f-br.f}),H.push({s:-1,f:25001});var M=H[0],Q=H[1],R=0,z=1,X=2;H[0]={s:-1,f:M.f+Q.f,l:M,r:Q};while(z!=A-1)M=H[H[R].f<H[X].f?R++:X++],Q=H[R!=z&&H[R].f<H[X].f?R++:X++],H[z++]={s:-1,f:M.f+Q.f,l:M,r:Q};var K=u[0].s;for(var O=1;O<A;++O)if(u[O].s>K)K=u[O].s;var I=new Y1(K+1),f=UA(H[z-1],I,0);if(f>h){var O=0,C=0,j=f-h,rr=1<<j;u.sort(function(br,m){return I[m.s]-I[br.s]||br.f-m.f});for(;O<A;++O){var Pr=u[O].s;if(I[Pr]>h)C+=rr-(1<<f-I[Pr]),I[Pr]=h;else break}C>>=j;while(C>0){var wr=u[O].s;if(I[wr]<h)C-=1<<h-I[wr]++-1;else++O}for(;O>=0&&C;--O){var p=u[O].s;if(I[p]==h)--I[p],++C}f=h}return{t:new kg(I),l:f}},UA=function(w,h,H){return w.s==-1?Math.max(UA(w.l,h,H+1),UA(w.r,h,H+1)):h[w.s]=H},TG=function(w){var h=w.length;while(h&&!w[--h]);var H=new Y1(++h),O=0,A=w[0],u=1,W=function(Q){H[O++]=Q};for(var M=1;M<=h;++M)if(w[M]==A&&M!=h)++u;else{if(!A&&u>2){for(;u>138;u-=138)W(32754);if(u>2)W(u>10?u-11<<5|28690:u-3<<5|12305),u=0}else if(u>3){W(A),--u;for(;u>6;u-=6)W(8304);if(u>2)W(u-3<<5|8208),u=0}while(u--)W(A);u=1,A=w[M]}return{c:H.subarray(0,O),n:h}},o4=function(w,h){var H=0;for(var O=0;O<h.length;++O)H+=w[O]*h[O];return H},_G=function(w,h,H){var O=H.length,A=NA(h+2);w[A]=O&255,w[A+1]=O>>8,w[A+2]=w[A]^255,w[A+3]=w[A+1]^255;for(var u=0;u<O;++u)w[A+u+4]=H[u];return(A+4+O)*8},CG=function(w,h,H,O,A,u,W,M,Q,R,z){X5(h,z++,H),++A[256];var X=QA(A,15),K=X.t,I=X.l,f=QA(u,15),C=f.t,j=f.l,rr=TG(K),Pr=rr.c,wr=rr.n,p=TG(C),s=p.c,br=p.n,m=new Y1(19);for(var E=0;E<Pr.length;++E)++m[Pr[E]&31];for(var E=0;E<s.length;++E)++m[s[E]&31];var t=QA(m,7),D=t.t,zr=t.l,Xr=19;for(;Xr>4&&!D[RA[Xr-1]];--Xr);var Rr=R+5<<3,mr=o4(A,Qw)+o4(u,H4)+W,_=o4(A,K)+o4(u,C)+W+14+3*Xr+o4(m,D)+2*m[16]+3*m[17]+7*m[18];if(Q>=0&&Rr<=mr&&Rr<=_)return _G(h,z,w.subarray(Q,Q+R));var d,hr,vr,Gr;if(X5(h,z,1+(_<mr)),z+=2,_<mr){d=iv(K,I,0),hr=K,vr=iv(C,j,0),Gr=C;var i=iv(D,zr,0);X5(h,z,wr-257),X5(h,z+5,br-1),X5(h,z+10,Xr-4),z+=14;for(var E=0;E<Xr;++E)X5(h,z+3*E,D[RA[E]]);z+=3*Xr;var V=[Pr,s];for(var Ar=0;Ar<2;++Ar){var Kr=V[Ar];for(var E=0;E<Kr.length;++E){var Yr=Kr[E]&31;if(X5(h,z,i[Yr]),z+=D[Yr],Yr>15)X5(h,z,Kr[E]>>5&127),z+=Kr[E]>>12}}}else d=yL,hr=Qw,vr=jL,Gr=H4;for(var E=0;E<M;++E){var kr=O[E];if(kr>255){var Yr=kr>>18&31;if(l4(h,z,d[Yr+257]),z+=hr[Yr+257],Yr>7)X5(h,z,kr>>23&31),z+=h8[Yr];var or=kr&31;if(l4(h,z,vr[or]),z+=Gr[or],or>3)l4(h,z,kr>>5&8191),z+=l8[or]}else l4(h,z,d[kr]),z+=hr[kr]}return l4(h,z,d[256]),z+hr[256]},pL=new BA([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),eG=new kg(0),aL=function(w,h,H,O,A,u){var W=u.z||w.length,M=new kg(O+W+5*(1+Math.ceil(W/7000))+A),Q=M.subarray(O,M.length-A),R=u.l,z=(u.r||0)&7;if(h){if(z)Q[0]=u.r>>3;var X=pL[h-1],K=X>>13,I=X&8191,f=(1<<H)-1,C=u.p||new Y1(32768),j=u.h||new Y1(f+1),rr=Math.ceil(H/3),Pr=2*rr,wr=function(s0){return(w[s0]^w[s0+1]<<rr^w[s0+2]<<Pr)&f},p=new BA(25000),s=new Y1(288),br=new Y1(32),m=0,E=0,t=u.i||0,D=0,zr=u.w||0,Xr=0;for(;t+2<W;++t){var Rr=wr(t),mr=t&32767,_=j[Rr];if(C[mr]=_,j[Rr]=mr,zr<=t){var d=W-t;if((m>7000||D>24576)&&(d>423||!R)){z=CG(w,Q,0,p,s,br,E,D,Xr,t-Xr,z),D=m=E=0,Xr=t;for(var hr=0;hr<286;++hr)s[hr]=0;for(var hr=0;hr<30;++hr)br[hr]=0}var vr=2,Gr=0,i=I,V=mr-_&32767;if(d>2&&Rr==wr(t-V)){var Ar=Math.min(K,d)-1,Kr=Math.min(32767,t),Yr=Math.min(258,d);while(V<=Kr&&--i&&mr!=_){if(w[t+vr]==w[t+vr-V]){var kr=0;for(;kr<Yr&&w[t+kr]==w[t+kr-V];++kr);if(kr>vr){if(vr=kr,Gr=V,kr>Ar)break;var or=Math.min(V,kr-2),Dr=0;for(var hr=0;hr<or;++hr){var pr=t-V+hr&32767,Jg=C[pr],Z0=pr-Jg&32767;if(Z0>Dr)Dr=Z0,_=pr}}}mr=_,_=C[mr],V+=mr-_&32767}}if(Gr){p[D++]=268435456|KA[vr]<<18|xG[Gr];var Hr=KA[vr]&31,y0=xG[Gr]&31;E+=h8[Hr]+l8[y0],++s[257+Hr],++br[y0],zr=t+vr,++m}else p[D++]=w[t],++s[w[t]]}}for(t=Math.max(t,zr);t<W;++t)p[D++]=w[t],++s[w[t]];if(z=CG(w,Q,R,p,s,br,E,D,Xr,t-Xr,z),!R)u.r=z&7|Q[z/8|0]<<3,z-=7,u.h=j,u.p=C,u.i=t,u.w=zr}else{for(var t=u.w||0;t<W+R;t+=65535){var K0=t+65535;if(K0>=W)Q[z/8|0]=R,K0=W;z=_G(Q,z+1,w.subarray(t,K0))}u.i=W}return O4(M,0,O+NA(z)+A)},dL=function(){var w=new Int32Array(256);for(var h=0;h<256;++h){var H=h,O=9;while(--O)H=(H&1&&-306674912)^H>>>1;w[h]=H}return w}(),sL=function(){var w=-1;return{p:function(h){var H=w;for(var O=0;O<h.length;++O)H=dL[H&255^h[O]]^H>>>8;w=H},d:function(){return~w}}};var rF=function(w,h,H,O,A){if(!A){if(A={l:1},h.dictionary){var u=h.dictionary.subarray(-32768),W=new kg(u.length+w.length);W.set(u),W.set(w,u.length),w=W,A.w=u.length}}return aL(w,h.level==null?6:h.level,h.mem==null?A.l?Math.ceil(Math.max(8,Math.min(13,Math.log(w.length)))*1.5):20:12+h.mem,H,O,A)},EG=function(w,h){var H={};for(var O in w)H[O]=w[O];for(var O in h)H[O]=h[O];return H};var Dv=function(w,h){return w[h]|w[h+1]<<8},rv=function(w,h){return(w[h]|w[h+1]<<8|w[h+2]<<16|w[h+3]<<24)>>>0},zA=function(w,h){return rv(w,h)+rv(w,h+4)*4294967296},Q0=function(w,h,H){for(;H;++h)w[h]=H,H>>>=8};function gF(w,h){return rF(w,h||{},0,0)}function vF(w,h){return cL(w,{i:2},h&&h.out,h&&h.dictionary)}var yG=function(w,h,H,O){for(var A in w){var u=w[A],W=h+A,M=O;if(Array.isArray(u))M=EG(O,u[1]),u=u[0];if(u instanceof kg)H[W]=[u,M];else H[W+="/"]=[new kg(0),M],yG(u,W,H,O)}},SG=typeof TextEncoder<"u"&&new TextEncoder,LA=typeof TextDecoder<"u"&&new TextDecoder,wF=0;try{LA.decode(eG,{stream:!0}),wF=1}catch(w){}var bF=function(w){for(var h="",H=0;;){var O=w[H++],A=(O>127)+(O>223)+(O>239);if(H+A>w.length)return{s:h,r:O4(w,H-1)};if(!A)h+=String.fromCharCode(O);else if(A==3)O=((O&15)<<18|(w[H++]&63)<<12|(w[H++]&63)<<6|w[H++]&63)-65536,h+=String.fromCharCode(55296|O>>10,56320|O&1023);else if(A&1)h+=String.fromCharCode((O&31)<<6|w[H++]&63);else h+=String.fromCharCode((O&15)<<12|(w[H++]&63)<<6|w[H++]&63)}};function b8(w,h){if(h){var H=new kg(w.length);for(var O=0;O<w.length;++O)H[O]=w.charCodeAt(O);return H}if(SG)return SG.encode(w);var A=w.length,u=new kg(w.length+(w.length>>1)),W=0,M=function(z){u[W++]=z};for(var O=0;O<A;++O){if(W+5>u.length){var Q=new kg(W+8+(A-O<<1));Q.set(u),u=Q}var R=w.charCodeAt(O);if(R<128||h)M(R);else if(R<2048)M(192|R>>6),M(128|R&63);else if(R>55295&&R<57344)R=65536+(R&1047552)|w.charCodeAt(++O)&1023,M(240|R>>18),M(128|R>>12&63),M(128|R>>6&63),M(128|R&63);else M(224|R>>12),M(128|R>>6&63),M(128|R&63)}return O4(u,0,W)}function ZA(w,h){if(h){var H="";for(var O=0;O<w.length;O+=16384)H+=String.fromCharCode.apply(null,w.subarray(O,O+16384));return H}else if(LA)return LA.decode(w);else{var A=bF(w),u=A.s,H=A.r;if(H.length)_0(8);return u}}var hF=function(w,h){return h+30+Dv(w,h+26)+Dv(w,h+28)},lF=function(w,h,H){var O=Dv(w,h+28),A=ZA(w.subarray(h+46,h+46+O),!(Dv(w,h+8)&2048)),u=h+46+O,W=rv(w,h+20),M=H&&W==4294967295?oF(w,u):[W,rv(w,h+24),rv(w,h+42)],Q=M[0],R=M[1],z=M[2];return[Dv(w,h+10),Q,R,A,u+Dv(w,h+30)+Dv(w,h+32),z]},oF=function(w,h){for(;Dv(w,h)!=1;h+=4+Dv(w,h+2));return[zA(w,h+12),zA(w,h+4),zA(w,h+20)]},FA=function(w){var h=0;if(w)for(var H in w){var O=w[H].length;if(O>65535)_0(9);h+=O+4}return h},mG=function(w,h,H,O,A,u,W,M){var Q=O.length,R=H.extra,z=M&&M.length,X=FA(R);if(Q0(w,h,W!=null?33639248:67324752),h+=4,W!=null)w[h++]=20,w[h++]=H.os;w[h]=20,h+=2,w[h++]=H.flag<<1|(u<0&&8),w[h++]=A&&8,w[h++]=H.compression&255,w[h++]=H.compression>>8;var K=new Date(H.mtime==null?Date.now():H.mtime),I=K.getFullYear()-1980;if(I<0||I>119)_0(10);if(Q0(w,h,I<<25|K.getMonth()+1<<21|K.getDate()<<16|K.getHours()<<11|K.getMinutes()<<5|K.getSeconds()>>1),h+=4,u!=-1)Q0(w,h,H.crc),Q0(w,h+4,u<0?-u-2:u),Q0(w,h+8,H.size);if(Q0(w,h+12,Q),Q0(w,h+14,X),h+=16,W!=null)Q0(w,h,z),Q0(w,h+6,H.attrs),Q0(w,h+10,W),h+=14;if(w.set(O,h),h+=Q,X)for(var f in R){var C=R[f],j=C.length;Q0(w,h,+f),Q0(w,h+2,j),w.set(C,h+4),h+=4+j}if(z)w.set(M,h),h+=z;return h},HF=function(w,h,H,O,A){Q0(w,h,101010256),Q0(w,h+8,H),Q0(w,h+10,H),Q0(w,h+12,O),Q0(w,h+16,A)};function nG(w,h){if(!h)h={};var H={},O=[];yG(w,"",H,h);var A=0,u=0;for(var W in H){var M=H[W],Q=M[0],R=M[1],z=R.level==0?0:8,X=b8(W),K=X.length,I=R.comment,f=I&&b8(I),C=f&&f.length,j=FA(R.extra);if(K>65535)_0(11);var rr=z?gF(Q,R):Q,Pr=rr.length,wr=sL();wr.p(Q),O.push(EG(R,{size:Q.length,crc:wr.d(),c:rr,f:X,m:f,u:K!=W.length||f&&I.length!=C,o:A,compression:z})),A+=30+K+j+Pr,u+=76+2*(K+j)+(C||0)+Pr}var p=new kg(u+22),s=A,br=u-A;for(var m=0;m<O.length;++m){var X=O[m];mG(p,X.o,X,X.f,X.u,X.c.length);var E=30+X.f.length+FA(X.extra);p.set(X.c,X.o+E),mG(p,A,X,X.f,X.u,X.c.length,X.o,X.m),A+=16+E+(X.m?X.m.length:0)}return HF(p,A,O.length,br,s),p}function jG(w,h){var H={},O=w.length-22;for(;rv(w,O)!=101010256;--O)if(!O||w.length-O>65558)_0(13);var A=Dv(w,O+8);if(!A)return{};var u=rv(w,O+16),W=u==4294967295||A==65535;if(W){var M=rv(w,O-12);if(W=rv(w,M)==101075792,W)A=rv(w,M+32),u=rv(w,M+48)}var Q=h&&h.filter;for(var R=0;R<A;++R){var z=lF(w,u,W),X=z[0],K=z[1],I=z[2],f=z[3],C=z[4],j=z[5],rr=hF(w,j);if(u=C,!Q||Q({name:f,size:K,originalSize:I,compression:X}))if(!X)H[f]=O4(w,rr,rr+K);else if(X==8)H[f]=vF(w.subarray(rr,rr+K),{out:new kg(I)});else _0(14,"unknown compression type "+X)}return H}function IA(w){let h=w.map((O)=>({name:O.name,code:O.code,type:O.type,triggers:O.triggers,bindings:O.bindings,folder:O.folder,metadata:O.metadata})),H={format:"lumiscript-pack-v1",exportedAt:new Date().toISOString(),scripts:h};return nG({"pack.json":b8(JSON.stringify(H,null,2))})}function tG(w,h){let H=IA(w),O=new Blob([H.buffer],{type:"application/zip"}),A=URL.createObjectURL(O),u=document.createElement("a");u.href=A,u.download=`${h}.lumiscript.zip`,u.click(),URL.revokeObjectURL(A)}var pEg=Object.freeze({status:"aborted"});function y(w,h,H){function O(M,Q){if(!M._zod)Object.defineProperty(M,"_zod",{value:{def:Q,constr:W,traits:new Set},enumerable:!1});if(M._zod.traits.has(w))return;M._zod.traits.add(w),h(M,Q);let R=W.prototype,z=Object.keys(R);for(let X=0;X<z.length;X++){let K=z[X];if(!(K in M))M[K]=R[K].bind(M)}}let A=H?.Parent??Object;class u extends A{}Object.defineProperty(u,"name",{value:w});function W(M){var Q;let R=H?.Parent?new u:this;O(R,M),(Q=R._zod).deferred??(Q.deferred=[]);for(let z of R._zod.deferred)z();return R}return Object.defineProperty(W,"init",{value:O}),Object.defineProperty(W,Symbol.hasInstance,{value:(M)=>{if(H?.Parent&&M instanceof H.Parent)return!0;return M?._zod?.traits?.has(w)}}),Object.defineProperty(W,"name",{value:w}),W}var aEg=Symbol("zod_brand");class Y5 extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class q4 extends Error{constructor(w){super(`Encountered unidirectional transform during encode: ${w}`);this.name="ZodEncodeError"}}var o8={};function J5(w){if(w)Object.assign(o8,w);return o8}var Wg={};KU(Wg,{unwrapMessage:()=>A4,uint8ArrayToHex:()=>SF,uint8ArrayToBase64url:()=>TF,uint8ArrayToBase64:()=>wX,stringifyPrimitive:()=>dG,slugify:()=>TA,shallowClone:()=>pG,safeExtend:()=>LF,required:()=>NF,randomString:()=>JF,propertyKeyTypes:()=>SA,promiseAllObject:()=>YF,primitiveTypes:()=>aG,prefixIssues:()=>G4,pick:()=>KF,partial:()=>BF,parsedType:()=>ZF,optionalKeys:()=>mA,omit:()=>$F,objectClone:()=>MF,numKeys:()=>QF,nullish:()=>W4,normalizeParams:()=>yr,mergeDefs:()=>Q5,merge:()=>FF,jsonStringifyReplacer:()=>Eh,joinValues:()=>WF,issue:()=>yh,isPlainObject:()=>Lb,isObject:()=>eh,hexToUint8Array:()=>CF,getSizableOrigin:()=>gX,getParsedType:()=>zF,getLengthableOrigin:()=>X4,getEnumValues:()=>P4,getElementAtPath:()=>XF,floatSafeRemainder:()=>cG,finalizeIssue:()=>Vv,extend:()=>UF,escapeRegex:()=>z5,esc:()=>H8,defineLazy:()=>Pg,createTransparentProxy:()=>RF,cloneDef:()=>GF,clone:()=>gv,cleanRegex:()=>M4,cleanEnum:()=>IF,captureStackTrace:()=>O8,cached:()=>u4,base64urlToUint8Array:()=>xF,base64ToUint8Array:()=>vX,assignProp:()=>zw,assertNotEqual:()=>qF,assertNever:()=>PF,assertIs:()=>AF,assertEqual:()=>OF,assert:()=>uF,allowsEval:()=>CA,aborted:()=>Rw,NUMBER_FORMAT_RANGES:()=>sG,Class:()=>bX,BIGINT_FORMAT_RANGES:()=>rX});function OF(w){return w}function qF(w){return w}function AF(w){}function PF(w){throw Error("Unexpected value in exhaustive check")}function uF(w){}function P4(w){let h=Object.values(w).filter((O)=>typeof O==="number");return Object.entries(w).filter(([O,A])=>h.indexOf(+O)===-1).map(([O,A])=>A)}function WF(w,h="|"){return w.map((H)=>dG(H)).join(h)}function Eh(w,h){if(typeof h==="bigint")return h.toString();return h}function u4(w){return{get value(){{let H=w();return Object.defineProperty(this,"value",{value:H}),H}throw Error("cached value already set")}}}function W4(w){return w===null||w===void 0}function M4(w){let h=w.startsWith("^")?1:0,H=w.endsWith("$")?w.length-1:w.length;return w.slice(h,H)}function cG(w,h){let H=(w.toString().split(".")[1]||"").length,O=h.toString(),A=(O.split(".")[1]||"").length;if(A===0&&/\d?e-\d?/.test(O)){let Q=O.match(/\d?e-(\d?)/);if(Q?.[1])A=Number.parseInt(Q[1])}let u=H>A?H:A,W=Number.parseInt(w.toFixed(u).replace(".","")),M=Number.parseInt(h.toFixed(u).replace(".",""));return W%M/10**u}var fG=Symbol("evaluating");function Pg(w,h,H){let O=void 0;Object.defineProperty(w,h,{get(){if(O===fG)return;if(O===void 0)O=fG,O=H();return O},set(A){Object.defineProperty(w,h,{value:A})},configurable:!0})}function MF(w){return Object.create(Object.getPrototypeOf(w),Object.getOwnPropertyDescriptors(w))}function zw(w,h,H){Object.defineProperty(w,h,{value:H,writable:!0,enumerable:!0,configurable:!0})}function Q5(...w){let h={};for(let H of w){let O=Object.getOwnPropertyDescriptors(H);Object.assign(h,O)}return Object.defineProperties({},h)}function GF(w){return Q5(w._zod.def)}function XF(w,h){if(!h)return w;return h.reduce((H,O)=>H?.[O],w)}function YF(w){let h=Object.keys(w),H=h.map((O)=>w[O]);return Promise.all(H).then((O)=>{let A={};for(let u=0;u<h.length;u++)A[h[u]]=O[u];return A})}function JF(w=10){let H="";for(let O=0;O<w;O++)H+="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];return H}function H8(w){return JSON.stringify(w)}function TA(w){return w.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}var O8="captureStackTrace"in Error?Error.captureStackTrace:(...w)=>{};function eh(w){return typeof w==="object"&&w!==null&&!Array.isArray(w)}var CA=u4(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(w){return!1}});function Lb(w){if(eh(w)===!1)return!1;let h=w.constructor;if(h===void 0)return!0;if(typeof h!=="function")return!0;let H=h.prototype;if(eh(H)===!1)return!1;if(Object.prototype.hasOwnProperty.call(H,"isPrototypeOf")===!1)return!1;return!0}function pG(w){if(Lb(w))return{...w};if(Array.isArray(w))return[...w];return w}function QF(w){let h=0;for(let H in w)if(Object.prototype.hasOwnProperty.call(w,H))h++;return h}var zF=(w)=>{let h=typeof w;switch(h){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(w)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":if(Array.isArray(w))return"array";if(w===null)return"null";if(w.then&&typeof w.then==="function"&&w.catch&&typeof w.catch==="function")return"promise";if(typeof Map<"u"&&w instanceof Map)return"map";if(typeof Set<"u"&&w instanceof Set)return"set";if(typeof Date<"u"&&w instanceof Date)return"date";if(typeof File<"u"&&w instanceof File)return"file";return"object";default:throw Error(`Unknown data type: ${h}`)}},SA=new Set(["string","number","symbol"]),aG=new Set(["string","number","bigint","boolean","symbol","undefined"]);function z5(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gv(w,h,H){let O=new w._zod.constr(h??w._zod.def);if(!h||H?.parent)O._zod.parent=w;return O}function yr(w){let h=w;if(!h)return{};if(typeof h==="string")return{error:()=>h};if(h?.message!==void 0){if(h?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");h.error=h.message}if(delete h.message,typeof h.error==="string")return{...h,error:()=>h.error};return h}function RF(w){let h;return new Proxy({},{get(H,O,A){return h??(h=w()),Reflect.get(h,O,A)},set(H,O,A,u){return h??(h=w()),Reflect.set(h,O,A,u)},has(H,O){return h??(h=w()),Reflect.has(h,O)},deleteProperty(H,O){return h??(h=w()),Reflect.deleteProperty(h,O)},ownKeys(H){return h??(h=w()),Reflect.ownKeys(h)},getOwnPropertyDescriptor(H,O){return h??(h=w()),Reflect.getOwnPropertyDescriptor(h,O)},defineProperty(H,O,A){return h??(h=w()),Reflect.defineProperty(h,O,A)}})}function dG(w){if(typeof w==="bigint")return w.toString()+"n";if(typeof w==="string")return`"${w}"`;return`${w}`}function mA(w){return Object.keys(w).filter((h)=>{return w[h]._zod.optin==="optional"&&w[h]._zod.optout==="optional"})}var sG={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-340282346638528860000000000000000000000,340282346638528860000000000000000000000],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},rX={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function KF(w,h){let H=w._zod.def,O=H.checks;if(O&&O.length>0)throw Error(".pick() cannot be used on object schemas containing refinements");let u=Q5(w._zod.def,{get shape(){let W={};for(let M in h){if(!(M in H.shape))throw Error(`Unrecognized key: "${M}"`);if(!h[M])continue;W[M]=H.shape[M]}return zw(this,"shape",W),W},checks:[]});return gv(w,u)}function $F(w,h){let H=w._zod.def,O=H.checks;if(O&&O.length>0)throw Error(".omit() cannot be used on object schemas containing refinements");let u=Q5(w._zod.def,{get shape(){let W={...w._zod.def.shape};for(let M in h){if(!(M in H.shape))throw Error(`Unrecognized key: "${M}"`);if(!h[M])continue;delete W[M]}return zw(this,"shape",W),W},checks:[]});return gv(w,u)}function UF(w,h){if(!Lb(h))throw Error("Invalid input to extend: expected a plain object");let H=w._zod.def.checks;if(H&&H.length>0){let u=w._zod.def.shape;for(let W in h)if(Object.getOwnPropertyDescriptor(u,W)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}let A=Q5(w._zod.def,{get shape(){let u={...w._zod.def.shape,...h};return zw(this,"shape",u),u}});return gv(w,A)}function LF(w,h){if(!Lb(h))throw Error("Invalid input to safeExtend: expected a plain object");let H=Q5(w._zod.def,{get shape(){let O={...w._zod.def.shape,...h};return zw(this,"shape",O),O}});return gv(w,H)}function FF(w,h){let H=Q5(w._zod.def,{get shape(){let O={...w._zod.def.shape,...h._zod.def.shape};return zw(this,"shape",O),O},get catchall(){return h._zod.def.catchall},checks:[]});return gv(w,H)}function BF(w,h,H){let A=h._zod.def.checks;if(A&&A.length>0)throw Error(".partial() cannot be used on object schemas containing refinements");let W=Q5(h._zod.def,{get shape(){let M=h._zod.def.shape,Q={...M};if(H)for(let R in H){if(!(R in M))throw Error(`Unrecognized key: "${R}"`);if(!H[R])continue;Q[R]=w?new w({type:"optional",innerType:M[R]}):M[R]}else for(let R in M)Q[R]=w?new w({type:"optional",innerType:M[R]}):M[R];return zw(this,"shape",Q),Q},checks:[]});return gv(h,W)}function NF(w,h,H){let O=Q5(h._zod.def,{get shape(){let A=h._zod.def.shape,u={...A};if(H)for(let W in H){if(!(W in u))throw Error(`Unrecognized key: "${W}"`);if(!H[W])continue;u[W]=new w({type:"nonoptional",innerType:A[W]})}else for(let W in A)u[W]=new w({type:"nonoptional",innerType:A[W]});return zw(this,"shape",u),u}});return gv(h,O)}function Rw(w,h=0){if(w.aborted===!0)return!0;for(let H=h;H<w.issues.length;H++)if(w.issues[H]?.continue!==!0)return!0;return!1}function G4(w,h){return h.map((H)=>{var O;return(O=H).path??(O.path=[]),H.path.unshift(w),H})}function A4(w){return typeof w==="string"?w:w?.message}function Vv(w,h,H){let O={...w,path:w.path??[]};if(!w.message){let A=A4(w.inst?._zod.def?.error?.(w))??A4(h?.error?.(w))??A4(H.customError?.(w))??A4(H.localeError?.(w))??"Invalid input";O.message=A}if(delete O.inst,delete O.continue,!h?.reportInput)delete O.input;return O}function gX(w){if(w instanceof Set)return"set";if(w instanceof Map)return"map";if(w instanceof File)return"file";return"unknown"}function X4(w){if(Array.isArray(w))return"array";if(typeof w==="string")return"string";return"unknown"}function ZF(w){let h=typeof w;switch(h){case"number":return Number.isNaN(w)?"nan":"number";case"object":{if(w===null)return"null";if(Array.isArray(w))return"array";let H=w;if(H&&Object.getPrototypeOf(H)!==Object.prototype&&"constructor"in H&&H.constructor)return H.constructor.name}}return h}function yh(...w){let[h,H,O]=w;if(typeof h==="string")return{message:h,code:"custom",input:H,inst:O};return{...h}}function IF(w){return Object.entries(w).filter(([h,H])=>{return Number.isNaN(Number.parseInt(h,10))}).map((h)=>h[1])}function vX(w){let h=atob(w),H=new Uint8Array(h.length);for(let O=0;O<h.length;O++)H[O]=h.charCodeAt(O);return H}function wX(w){let h="";for(let H=0;H<w.length;H++)h+=String.fromCharCode(w[H]);return btoa(h)}function xF(w){let h=w.replace(/-/g,"+").replace(/_/g,"/"),H="=".repeat((4-h.length%4)%4);return vX(h+H)}function TF(w){return wX(w).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function CF(w){let h=w.replace(/^0x/,"");if(h.length%2!==0)throw Error("Invalid hex string length");let H=new Uint8Array(h.length/2);for(let O=0;O<h.length;O+=2)H[O/2]=Number.parseInt(h.slice(O,O+2),16);return H}function SF(w){return Array.from(w).map((h)=>h.toString(16).padStart(2,"0")).join("")}class bX{constructor(...w){}}var hX=(w,h)=>{w.name="$ZodError",Object.defineProperty(w,"_zod",{value:w._zod,enumerable:!1}),Object.defineProperty(w,"issues",{value:h,enumerable:!1}),w.message=JSON.stringify(h,Eh,2),Object.defineProperty(w,"toString",{value:()=>w.message,enumerable:!1})},q8=y("$ZodError",hX),kA=y("$ZodError",hX,{Parent:Error});function lX(w,h=(H)=>H.message){let H={},O=[];for(let A of w.issues)if(A.path.length>0)H[A.path[0]]=H[A.path[0]]||[],H[A.path[0]].push(h(A));else O.push(h(A));return{formErrors:O,fieldErrors:H}}function oX(w,h=(H)=>H.message){let H={_errors:[]},O=(A)=>{for(let u of A.issues)if(u.code==="invalid_union"&&u.errors.length)u.errors.map((W)=>O({issues:W}));else if(u.code==="invalid_key")O({issues:u.issues});else if(u.code==="invalid_element")O({issues:u.issues});else if(u.path.length===0)H._errors.push(h(u));else{let W=H,M=0;while(M<u.path.length){let Q=u.path[M];if(M!==u.path.length-1)W[Q]=W[Q]||{_errors:[]};else W[Q]=W[Q]||{_errors:[]},W[Q]._errors.push(h(u));W=W[Q],M++}}};return O(w),H}var A8=(w)=>(h,H,O,A)=>{let u=O?Object.assign(O,{async:!1}):{async:!1},W=h._zod.run({value:H,issues:[]},u);if(W instanceof Promise)throw new Y5;if(W.issues.length){let M=new(A?.Err??w)(W.issues.map((Q)=>Vv(Q,u,J5())));throw O8(M,A?.callee),M}return W.value};var P8=(w)=>async(h,H,O,A)=>{let u=O?Object.assign(O,{async:!0}):{async:!0},W=h._zod.run({value:H,issues:[]},u);if(W instanceof Promise)W=await W;if(W.issues.length){let M=new(A?.Err??w)(W.issues.map((Q)=>Vv(Q,u,J5())));throw O8(M,A?.callee),M}return W.value};var Y4=(w)=>(h,H,O)=>{let A=O?{...O,async:!1}:{async:!1},u=h._zod.run({value:H,issues:[]},A);if(u instanceof Promise)throw new Y5;return u.issues.length?{success:!1,error:new(w??q8)(u.issues.map((W)=>Vv(W,A,J5())))}:{success:!0,data:u.value}},HX=Y4(kA),J4=(w)=>async(h,H,O)=>{let A=O?Object.assign(O,{async:!0}):{async:!0},u=h._zod.run({value:H,issues:[]},A);if(u instanceof Promise)u=await u;return u.issues.length?{success:!1,error:new w(u.issues.map((W)=>Vv(W,A,J5())))}:{success:!0,data:u.value}},OX=J4(kA),qX=(w)=>(h,H,O)=>{let A=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return A8(w)(h,H,A)};var AX=(w)=>(h,H,O)=>{return A8(w)(h,H,O)};var PX=(w)=>async(h,H,O)=>{let A=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return P8(w)(h,H,A)};var uX=(w)=>async(h,H,O)=>{return P8(w)(h,H,O)};var WX=(w)=>(h,H,O)=>{let A=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return Y4(w)(h,H,A)};var MX=(w)=>(h,H,O)=>{return Y4(w)(h,H,O)};var GX=(w)=>async(h,H,O)=>{let A=O?Object.assign(O,{direction:"backward"}):{direction:"backward"};return J4(w)(h,H,A)};var XX=(w)=>async(h,H,O)=>{return J4(w)(h,H,O)};var YX=/^[cC][^\s-]{8,}$/,JX=/^[0-9a-z]+$/,QX=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,zX=/^[0-9a-vA-V]{20}$/,RX=/^[A-Za-z0-9]{27}$/,KX=/^[a-zA-Z0-9_-]{21}$/,$X=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var UX=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,DA=(w)=>{if(!w)return/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${w}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)};var LX=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var kF="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function FX(){return new RegExp(kF,"u")}var BX=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,NX=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;var ZX=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,IX=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,xX=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,iA=/^[A-Za-z0-9_-]*$/;var TX=/^\+[1-9]\d{6,14}$/,CX="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",SX=new RegExp(`^${CX}$`);function mX(w){return typeof w.precision==="number"?w.precision===-1?"(?:[01]\\d|2[0-3]):[0-5]\\d":w.precision===0?"(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d":`(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${w.precision}}`:"(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?"}function kX(w){return new RegExp(`^${mX(w)}$`)}function DX(w){let h=mX({precision:w.precision}),H=["Z"];if(w.local)H.push("");if(w.offset)H.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");let O=`${h}(?:${H.join("|")})`;return new RegExp(`^${CX}T(?:${O})$`)}var iX=(w)=>{let h=w?`[\\s\\S]{${w?.minimum??0},${w?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${h}$`)};var VX=/^[^A-Z]*$/,_X=/^[^a-z]*$/;var J1=y("$ZodCheck",(w,h)=>{var H;w._zod??(w._zod={}),w._zod.def=h,(H=w._zod).onattach??(H.onattach=[])});var eX=y("$ZodCheckMaxLength",(w,h)=>{var H;J1.init(w,h),(H=w._zod.def).when??(H.when=(O)=>{let A=O.value;return!W4(A)&&A.length!==void 0}),w._zod.onattach.push((O)=>{let A=O._zod.bag.maximum??Number.POSITIVE_INFINITY;if(h.maximum<A)O._zod.bag.maximum=h.maximum}),w._zod.check=(O)=>{let A=O.value;if(A.length<=h.maximum)return;let W=X4(A);O.issues.push({origin:W,code:"too_big",maximum:h.maximum,inclusive:!0,input:A,inst:w,continue:!h.abort})}}),EX=y("$ZodCheckMinLength",(w,h)=>{var H;J1.init(w,h),(H=w._zod.def).when??(H.when=(O)=>{let A=O.value;return!W4(A)&&A.length!==void 0}),w._zod.onattach.push((O)=>{let A=O._zod.bag.minimum??Number.NEGATIVE_INFINITY;if(h.minimum>A)O._zod.bag.minimum=h.minimum}),w._zod.check=(O)=>{let A=O.value;if(A.length>=h.minimum)return;let W=X4(A);O.issues.push({origin:W,code:"too_small",minimum:h.minimum,inclusive:!0,input:A,inst:w,continue:!h.abort})}}),yX=y("$ZodCheckLengthEquals",(w,h)=>{var H;J1.init(w,h),(H=w._zod.def).when??(H.when=(O)=>{let A=O.value;return!W4(A)&&A.length!==void 0}),w._zod.onattach.push((O)=>{let A=O._zod.bag;A.minimum=h.length,A.maximum=h.length,A.length=h.length}),w._zod.check=(O)=>{let A=O.value,u=A.length;if(u===h.length)return;let W=X4(A),M=u>h.length;O.issues.push({origin:W,...M?{code:"too_big",maximum:h.length}:{code:"too_small",minimum:h.length},inclusive:!0,exact:!0,input:O.value,inst:w,continue:!h.abort})}}),Q4=y("$ZodCheckStringFormat",(w,h)=>{var H,O;if(J1.init(w,h),w._zod.onattach.push((A)=>{let u=A._zod.bag;if(u.format=h.format,h.pattern)u.patterns??(u.patterns=new Set),u.patterns.add(h.pattern)}),h.pattern)(H=w._zod).check??(H.check=(A)=>{if(h.pattern.lastIndex=0,h.pattern.test(A.value))return;A.issues.push({origin:"string",code:"invalid_format",format:h.format,input:A.value,...h.pattern?{pattern:h.pattern.toString()}:{},inst:w,continue:!h.abort})});else(O=w._zod).check??(O.check=()=>{})}),nX=y("$ZodCheckRegex",(w,h)=>{Q4.init(w,h),w._zod.check=(H)=>{if(h.pattern.lastIndex=0,h.pattern.test(H.value))return;H.issues.push({origin:"string",code:"invalid_format",format:"regex",input:H.value,pattern:h.pattern.toString(),inst:w,continue:!h.abort})}}),jX=y("$ZodCheckLowerCase",(w,h)=>{h.pattern??(h.pattern=VX),Q4.init(w,h)}),tX=y("$ZodCheckUpperCase",(w,h)=>{h.pattern??(h.pattern=_X),Q4.init(w,h)}),fX=y("$ZodCheckIncludes",(w,h)=>{J1.init(w,h);let H=z5(h.includes),O=new RegExp(typeof h.position==="number"?`^.{${h.position}}${H}`:H);h.pattern=O,w._zod.onattach.push((A)=>{let u=A._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(O)}),w._zod.check=(A)=>{if(A.value.includes(h.includes,h.position))return;A.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:h.includes,input:A.value,inst:w,continue:!h.abort})}}),cX=y("$ZodCheckStartsWith",(w,h)=>{J1.init(w,h);let H=new RegExp(`^${z5(h.prefix)}.*`);h.pattern??(h.pattern=H),w._zod.onattach.push((O)=>{let A=O._zod.bag;A.patterns??(A.patterns=new Set),A.patterns.add(H)}),w._zod.check=(O)=>{if(O.value.startsWith(h.prefix))return;O.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:h.prefix,input:O.value,inst:w,continue:!h.abort})}}),pX=y("$ZodCheckEndsWith",(w,h)=>{J1.init(w,h);let H=new RegExp(`.*${z5(h.suffix)}$`);h.pattern??(h.pattern=H),w._zod.onattach.push((O)=>{let A=O._zod.bag;A.patterns??(A.patterns=new Set),A.patterns.add(H)}),w._zod.check=(O)=>{if(O.value.endsWith(h.suffix))return;O.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:h.suffix,input:O.value,inst:w,continue:!h.abort})}});var aX=y("$ZodCheckOverwrite",(w,h)=>{J1.init(w,h),w._zod.check=(H)=>{H.value=h.tx(H.value)}});class VA{constructor(w=[]){if(this.content=[],this.indent=0,this)this.args=w}indented(w){this.indent+=1,w(this),this.indent-=1}write(w){if(typeof w==="function"){w(this,{execution:"sync"}),w(this,{execution:"async"});return}let H=w.split(`
`).filter((u)=>u),O=Math.min(...H.map((u)=>u.length-u.trimStart().length)),A=H.map((u)=>u.slice(O)).map((u)=>" ".repeat(this.indent*2)+u);for(let u of A)this.content.push(u)}compile(){let w=Function,h=this?.args,O=[...(this?.content??[""]).map((A)=>`  ${A}`)];return new w(...h,O.join(`
`))}}var sX={major:4,minor:3,patch:6};var yg=y("$ZodType",(w,h)=>{var H;w??(w={}),w._zod.def=h,w._zod.bag=w._zod.bag||{},w._zod.version=sX;let O=[...w._zod.def.checks??[]];if(w._zod.traits.has("$ZodCheck"))O.unshift(w);for(let A of O)for(let u of A._zod.onattach)u(w);if(O.length===0)(H=w._zod).deferred??(H.deferred=[]),w._zod.deferred?.push(()=>{w._zod.run=w._zod.parse});else{let A=(W,M,Q)=>{let R=Rw(W),z;for(let X of M){if(X._zod.def.when){if(!X._zod.def.when(W))continue}else if(R)continue;let K=W.issues.length,I=X._zod.check(W);if(I instanceof Promise&&Q?.async===!1)throw new Y5;if(z||I instanceof Promise)z=(z??Promise.resolve()).then(async()=>{if(await I,W.issues.length===K)return;if(!R)R=Rw(W,K)});else{if(W.issues.length===K)continue;if(!R)R=Rw(W,K)}}if(z)return z.then(()=>{return W});return W},u=(W,M,Q)=>{if(Rw(W))return W.aborted=!0,W;let R=A(M,O,Q);if(R instanceof Promise){if(Q.async===!1)throw new Y5;return R.then((z)=>w._zod.parse(z,Q))}return w._zod.parse(R,Q)};w._zod.run=(W,M)=>{if(M.skipChecks)return w._zod.parse(W,M);if(M.direction==="backward"){let R=w._zod.parse({value:W.value,issues:[]},{...M,skipChecks:!0});if(R instanceof Promise)return R.then((z)=>{return u(z,W,M)});return u(R,W,M)}let Q=w._zod.parse(W,M);if(Q instanceof Promise){if(M.async===!1)throw new Y5;return Q.then((R)=>A(R,O,M))}return A(Q,O,M)}}Pg(w,"~standard",()=>({validate:(A)=>{try{let u=HX(w,A);return u.success?{value:u.data}:{issues:u.error?.issues}}catch(u){return OX(w,A).then((W)=>W.success?{value:W.data}:{issues:W.error?.issues})}},vendor:"zod",version:1}))}),G8=y("$ZodString",(w,h)=>{yg.init(w,h),w._zod.pattern=[...w?._zod.bag?.patterns??[]].pop()??iX(w._zod.bag),w._zod.parse=(H,O)=>{if(h.coerce)try{H.value=String(H.value)}catch(A){}if(typeof H.value==="string")return H;return H.issues.push({expected:"string",code:"invalid_type",input:H.value,inst:w}),H}}),Zg=y("$ZodStringFormat",(w,h)=>{Q4.init(w,h),G8.init(w,h)}),HY=y("$ZodGUID",(w,h)=>{h.pattern??(h.pattern=UX),Zg.init(w,h)}),OY=y("$ZodUUID",(w,h)=>{if(h.version){let O={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[h.version];if(O===void 0)throw Error(`Invalid UUID version: "${h.version}"`);h.pattern??(h.pattern=DA(O))}else h.pattern??(h.pattern=DA());Zg.init(w,h)}),qY=y("$ZodEmail",(w,h)=>{h.pattern??(h.pattern=LX),Zg.init(w,h)}),AY=y("$ZodURL",(w,h)=>{Zg.init(w,h),w._zod.check=(H)=>{try{let O=H.value.trim(),A=new URL(O);if(h.hostname){if(h.hostname.lastIndex=0,!h.hostname.test(A.hostname))H.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:h.hostname.source,input:H.value,inst:w,continue:!h.abort})}if(h.protocol){if(h.protocol.lastIndex=0,!h.protocol.test(A.protocol.endsWith(":")?A.protocol.slice(0,-1):A.protocol))H.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:h.protocol.source,input:H.value,inst:w,continue:!h.abort})}if(h.normalize)H.value=A.href;else H.value=O;return}catch(O){H.issues.push({code:"invalid_format",format:"url",input:H.value,inst:w,continue:!h.abort})}}}),PY=y("$ZodEmoji",(w,h)=>{h.pattern??(h.pattern=FX()),Zg.init(w,h)}),uY=y("$ZodNanoID",(w,h)=>{h.pattern??(h.pattern=KX),Zg.init(w,h)}),WY=y("$ZodCUID",(w,h)=>{h.pattern??(h.pattern=YX),Zg.init(w,h)}),MY=y("$ZodCUID2",(w,h)=>{h.pattern??(h.pattern=JX),Zg.init(w,h)}),GY=y("$ZodULID",(w,h)=>{h.pattern??(h.pattern=QX),Zg.init(w,h)}),XY=y("$ZodXID",(w,h)=>{h.pattern??(h.pattern=zX),Zg.init(w,h)}),YY=y("$ZodKSUID",(w,h)=>{h.pattern??(h.pattern=RX),Zg.init(w,h)}),JY=y("$ZodISODateTime",(w,h)=>{h.pattern??(h.pattern=DX(h)),Zg.init(w,h)}),QY=y("$ZodISODate",(w,h)=>{h.pattern??(h.pattern=SX),Zg.init(w,h)}),zY=y("$ZodISOTime",(w,h)=>{h.pattern??(h.pattern=kX(h)),Zg.init(w,h)}),RY=y("$ZodISODuration",(w,h)=>{h.pattern??(h.pattern=$X),Zg.init(w,h)}),KY=y("$ZodIPv4",(w,h)=>{h.pattern??(h.pattern=BX),Zg.init(w,h),w._zod.bag.format="ipv4"}),$Y=y("$ZodIPv6",(w,h)=>{h.pattern??(h.pattern=NX),Zg.init(w,h),w._zod.bag.format="ipv6",w._zod.check=(H)=>{try{new URL(`http://[${H.value}]`)}catch{H.issues.push({code:"invalid_format",format:"ipv6",input:H.value,inst:w,continue:!h.abort})}}});var UY=y("$ZodCIDRv4",(w,h)=>{h.pattern??(h.pattern=ZX),Zg.init(w,h)}),LY=y("$ZodCIDRv6",(w,h)=>{h.pattern??(h.pattern=IX),Zg.init(w,h),w._zod.check=(H)=>{let O=H.value.split("/");try{if(O.length!==2)throw Error();let[A,u]=O;if(!u)throw Error();let W=Number(u);if(`${W}`!==u)throw Error();if(W<0||W>128)throw Error();new URL(`http://[${A}]`)}catch{H.issues.push({code:"invalid_format",format:"cidrv6",input:H.value,inst:w,continue:!h.abort})}}});function FY(w){if(w==="")return!0;if(w.length%4!==0)return!1;try{return atob(w),!0}catch{return!1}}var BY=y("$ZodBase64",(w,h)=>{h.pattern??(h.pattern=xX),Zg.init(w,h),w._zod.bag.contentEncoding="base64",w._zod.check=(H)=>{if(FY(H.value))return;H.issues.push({code:"invalid_format",format:"base64",input:H.value,inst:w,continue:!h.abort})}});function DF(w){if(!iA.test(w))return!1;let h=w.replace(/[-_]/g,(O)=>O==="-"?"+":"/"),H=h.padEnd(Math.ceil(h.length/4)*4,"=");return FY(H)}var NY=y("$ZodBase64URL",(w,h)=>{h.pattern??(h.pattern=iA),Zg.init(w,h),w._zod.bag.contentEncoding="base64url",w._zod.check=(H)=>{if(DF(H.value))return;H.issues.push({code:"invalid_format",format:"base64url",input:H.value,inst:w,continue:!h.abort})}}),ZY=y("$ZodE164",(w,h)=>{h.pattern??(h.pattern=TX),Zg.init(w,h)});function iF(w,h=null){try{let H=w.split(".");if(H.length!==3)return!1;let[O]=H;if(!O)return!1;let A=JSON.parse(atob(O));if("typ"in A&&A?.typ!=="JWT")return!1;if(!A.alg)return!1;if(h&&(!("alg"in A)||A.alg!==h))return!1;return!0}catch{return!1}}var IY=y("$ZodJWT",(w,h)=>{Zg.init(w,h),w._zod.check=(H)=>{if(iF(H.value,h.alg))return;H.issues.push({code:"invalid_format",format:"jwt",input:H.value,inst:w,continue:!h.abort})}});var xY=y("$ZodUnknown",(w,h)=>{yg.init(w,h),w._zod.parse=(H)=>H}),TY=y("$ZodNever",(w,h)=>{yg.init(w,h),w._zod.parse=(H,O)=>{return H.issues.push({expected:"never",code:"invalid_type",input:H.value,inst:w}),H}});function rY(w,h,H){if(w.issues.length)h.issues.push(...G4(H,w.issues));h.value[H]=w.value}var CY=y("$ZodArray",(w,h)=>{yg.init(w,h),w._zod.parse=(H,O)=>{let A=H.value;if(!Array.isArray(A))return H.issues.push({expected:"array",code:"invalid_type",input:A,inst:w}),H;H.value=Array(A.length);let u=[];for(let W=0;W<A.length;W++){let M=A[W],Q=h.element._zod.run({value:M,issues:[]},O);if(Q instanceof Promise)u.push(Q.then((R)=>rY(R,H,W)));else rY(Q,H,W)}if(u.length)return Promise.all(u).then(()=>H);return H}});function M8(w,h,H,O,A){if(w.issues.length){if(A&&!(H in O))return;h.issues.push(...G4(H,w.issues))}if(w.value===void 0){if(H in O)h.value[H]=void 0}else h.value[H]=w.value}function SY(w){let h=Object.keys(w.shape);for(let O of h)if(!w.shape?.[O]?._zod?.traits?.has("$ZodType"))throw Error(`Invalid element at key "${O}": expected a Zod schema`);let H=mA(w.shape);return{...w,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(H)}}function mY(w,h,H,O,A,u){let W=[],M=A.keySet,Q=A.catchall._zod,R=Q.def.type,z=Q.optout==="optional";for(let X in h){if(M.has(X))continue;if(R==="never"){W.push(X);continue}let K=Q.run({value:h[X],issues:[]},O);if(K instanceof Promise)w.push(K.then((I)=>M8(I,H,X,h,z)));else M8(K,H,X,h,z)}if(W.length)H.issues.push({code:"unrecognized_keys",keys:W,input:h,inst:u});if(!w.length)return H;return Promise.all(w).then(()=>{return H})}var VF=y("$ZodObject",(w,h)=>{if(yg.init(w,h),!Object.getOwnPropertyDescriptor(h,"shape")?.get){let M=h.shape;Object.defineProperty(h,"shape",{get:()=>{let Q={...M};return Object.defineProperty(h,"shape",{value:Q}),Q}})}let O=u4(()=>SY(h));Pg(w._zod,"propValues",()=>{let M=h.shape,Q={};for(let R in M){let z=M[R]._zod;if(z.values){Q[R]??(Q[R]=new Set);for(let X of z.values)Q[R].add(X)}}return Q});let A=eh,u=h.catchall,W;w._zod.parse=(M,Q)=>{W??(W=O.value);let R=M.value;if(!A(R))return M.issues.push({expected:"object",code:"invalid_type",input:R,inst:w}),M;M.value={};let z=[],X=W.shape;for(let K of W.keys){let I=X[K],f=I._zod.optout==="optional",C=I._zod.run({value:R[K],issues:[]},Q);if(C instanceof Promise)z.push(C.then((j)=>M8(j,M,K,R,f)));else M8(C,M,K,R,f)}if(!u)return z.length?Promise.all(z).then(()=>M):M;return mY(z,R,M,Q,O.value,w)}}),kY=y("$ZodObjectJIT",(w,h)=>{VF.init(w,h);let H=w._zod.parse,O=u4(()=>SY(h)),A=(K)=>{let I=new VA(["shape","payload","ctx"]),f=O.value,C=(wr)=>{let p=H8(wr);return`shape[${p}]._zod.run({ value: input[${p}], issues: [] }, ctx)`};I.write("const input = payload.value;");let j=Object.create(null),rr=0;for(let wr of f.keys)j[wr]=`key_${rr++}`;I.write("const newResult = {};");for(let wr of f.keys){let p=j[wr],s=H8(wr),m=K[wr]?._zod?.optout==="optional";if(I.write(`const ${p} = ${C(wr)};`),m)I.write(`
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
        
      `);else I.write(`
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
        
      `)}I.write("payload.value = newResult;"),I.write("return payload;");let Pr=I.compile();return(wr,p)=>Pr(K,wr,p)},u,W=eh,M=!o8.jitless,R=M&&CA.value,z=h.catchall,X;w._zod.parse=(K,I)=>{X??(X=O.value);let f=K.value;if(!W(f))return K.issues.push({expected:"object",code:"invalid_type",input:f,inst:w}),K;if(M&&R&&I?.async===!1&&I.jitless!==!0){if(!u)u=A(h.shape);if(K=u(K,I),!z)return K;return mY([],f,K,I,X,w)}return H(K,I)}});function gY(w,h,H,O){for(let u of w)if(u.issues.length===0)return h.value=u.value,h;let A=w.filter((u)=>!Rw(u));if(A.length===1)return h.value=A[0].value,A[0];return h.issues.push({code:"invalid_union",input:h.value,inst:H,errors:w.map((u)=>u.issues.map((W)=>Vv(W,O,J5())))}),h}var DY=y("$ZodUnion",(w,h)=>{yg.init(w,h),Pg(w._zod,"optin",()=>h.options.some((A)=>A._zod.optin==="optional")?"optional":void 0),Pg(w._zod,"optout",()=>h.options.some((A)=>A._zod.optout==="optional")?"optional":void 0),Pg(w._zod,"values",()=>{if(h.options.every((A)=>A._zod.values))return new Set(h.options.flatMap((A)=>Array.from(A._zod.values)));return}),Pg(w._zod,"pattern",()=>{if(h.options.every((A)=>A._zod.pattern)){let A=h.options.map((u)=>u._zod.pattern);return new RegExp(`^(${A.map((u)=>M4(u.source)).join("|")})$`)}return});let H=h.options.length===1,O=h.options[0]._zod.run;w._zod.parse=(A,u)=>{if(H)return O(A,u);let W=!1,M=[];for(let Q of h.options){let R=Q._zod.run({value:A.value,issues:[]},u);if(R instanceof Promise)M.push(R),W=!0;else{if(R.issues.length===0)return R;M.push(R)}}if(!W)return gY(M,A,w,u);return Promise.all(M).then((Q)=>{return gY(Q,A,w,u)})}});var iY=y("$ZodIntersection",(w,h)=>{yg.init(w,h),w._zod.parse=(H,O)=>{let A=H.value,u=h.left._zod.run({value:A,issues:[]},O),W=h.right._zod.run({value:A,issues:[]},O);if(u instanceof Promise||W instanceof Promise)return Promise.all([u,W]).then(([Q,R])=>{return vY(H,Q,R)});return vY(H,u,W)}});function _A(w,h){if(w===h)return{valid:!0,data:w};if(w instanceof Date&&h instanceof Date&&+w===+h)return{valid:!0,data:w};if(Lb(w)&&Lb(h)){let H=Object.keys(h),O=Object.keys(w).filter((u)=>H.indexOf(u)!==-1),A={...w,...h};for(let u of O){let W=_A(w[u],h[u]);if(!W.valid)return{valid:!1,mergeErrorPath:[u,...W.mergeErrorPath]};A[u]=W.data}return{valid:!0,data:A}}if(Array.isArray(w)&&Array.isArray(h)){if(w.length!==h.length)return{valid:!1,mergeErrorPath:[]};let H=[];for(let O=0;O<w.length;O++){let A=w[O],u=h[O],W=_A(A,u);if(!W.valid)return{valid:!1,mergeErrorPath:[O,...W.mergeErrorPath]};H.push(W.data)}return{valid:!0,data:H}}return{valid:!1,mergeErrorPath:[]}}function vY(w,h,H){let O=new Map,A;for(let M of h.issues)if(M.code==="unrecognized_keys"){A??(A=M);for(let Q of M.keys){if(!O.has(Q))O.set(Q,{});O.get(Q).l=!0}}else w.issues.push(M);for(let M of H.issues)if(M.code==="unrecognized_keys")for(let Q of M.keys){if(!O.has(Q))O.set(Q,{});O.get(Q).r=!0}else w.issues.push(M);let u=[...O].filter(([,M])=>M.l&&M.r).map(([M])=>M);if(u.length&&A)w.issues.push({...A,keys:u});if(Rw(w))return w;let W=_A(h.value,H.value);if(!W.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(W.mergeErrorPath)}`);return w.value=W.data,w}var VY=y("$ZodEnum",(w,h)=>{yg.init(w,h);let H=P4(h.entries),O=new Set(H);w._zod.values=O,w._zod.pattern=new RegExp(`^(${H.filter((A)=>SA.has(typeof A)).map((A)=>typeof A==="string"?z5(A):A.toString()).join("|")})$`),w._zod.parse=(A,u)=>{let W=A.value;if(O.has(W))return A;return A.issues.push({code:"invalid_value",values:H,input:W,inst:w}),A}}),_Y=y("$ZodLiteral",(w,h)=>{if(yg.init(w,h),h.values.length===0)throw Error("Cannot create literal schema with no valid values");let H=new Set(h.values);w._zod.values=H,w._zod.pattern=new RegExp(`^(${h.values.map((O)=>typeof O==="string"?z5(O):O?z5(O.toString()):String(O)).join("|")})$`),w._zod.parse=(O,A)=>{let u=O.value;if(H.has(u))return O;return O.issues.push({code:"invalid_value",values:h.values,input:u,inst:w}),O}});var eY=y("$ZodTransform",(w,h)=>{yg.init(w,h),w._zod.parse=(H,O)=>{if(O.direction==="backward")throw new q4(w.constructor.name);let A=h.transform(H.value,H);if(O.async)return(A instanceof Promise?A:Promise.resolve(A)).then((W)=>{return H.value=W,H});if(A instanceof Promise)throw new Y5;return H.value=A,H}});function wY(w,h){if(w.issues.length&&h===void 0)return{issues:[],value:void 0};return w}var eA=y("$ZodOptional",(w,h)=>{yg.init(w,h),w._zod.optin="optional",w._zod.optout="optional",Pg(w._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,void 0]):void 0}),Pg(w._zod,"pattern",()=>{let H=h.innerType._zod.pattern;return H?new RegExp(`^(${M4(H.source)})?$`):void 0}),w._zod.parse=(H,O)=>{if(h.innerType._zod.optin==="optional"){let A=h.innerType._zod.run(H,O);if(A instanceof Promise)return A.then((u)=>wY(u,H.value));return wY(A,H.value)}if(H.value===void 0)return H;return h.innerType._zod.run(H,O)}}),EY=y("$ZodExactOptional",(w,h)=>{eA.init(w,h),Pg(w._zod,"values",()=>h.innerType._zod.values),Pg(w._zod,"pattern",()=>h.innerType._zod.pattern),w._zod.parse=(H,O)=>{return h.innerType._zod.run(H,O)}}),yY=y("$ZodNullable",(w,h)=>{yg.init(w,h),Pg(w._zod,"optin",()=>h.innerType._zod.optin),Pg(w._zod,"optout",()=>h.innerType._zod.optout),Pg(w._zod,"pattern",()=>{let H=h.innerType._zod.pattern;return H?new RegExp(`^(${M4(H.source)}|null)$`):void 0}),Pg(w._zod,"values",()=>{return h.innerType._zod.values?new Set([...h.innerType._zod.values,null]):void 0}),w._zod.parse=(H,O)=>{if(H.value===null)return H;return h.innerType._zod.run(H,O)}}),nY=y("$ZodDefault",(w,h)=>{yg.init(w,h),w._zod.optin="optional",Pg(w._zod,"values",()=>h.innerType._zod.values),w._zod.parse=(H,O)=>{if(O.direction==="backward")return h.innerType._zod.run(H,O);if(H.value===void 0)return H.value=h.defaultValue,H;let A=h.innerType._zod.run(H,O);if(A instanceof Promise)return A.then((u)=>bY(u,h));return bY(A,h)}});function bY(w,h){if(w.value===void 0)w.value=h.defaultValue;return w}var jY=y("$ZodPrefault",(w,h)=>{yg.init(w,h),w._zod.optin="optional",Pg(w._zod,"values",()=>h.innerType._zod.values),w._zod.parse=(H,O)=>{if(O.direction==="backward")return h.innerType._zod.run(H,O);if(H.value===void 0)H.value=h.defaultValue;return h.innerType._zod.run(H,O)}}),tY=y("$ZodNonOptional",(w,h)=>{yg.init(w,h),Pg(w._zod,"values",()=>{let H=h.innerType._zod.values;return H?new Set([...H].filter((O)=>O!==void 0)):void 0}),w._zod.parse=(H,O)=>{let A=h.innerType._zod.run(H,O);if(A instanceof Promise)return A.then((u)=>hY(u,w));return hY(A,w)}});function hY(w,h){if(!w.issues.length&&w.value===void 0)w.issues.push({code:"invalid_type",expected:"nonoptional",input:w.value,inst:h});return w}var fY=y("$ZodCatch",(w,h)=>{yg.init(w,h),Pg(w._zod,"optin",()=>h.innerType._zod.optin),Pg(w._zod,"optout",()=>h.innerType._zod.optout),Pg(w._zod,"values",()=>h.innerType._zod.values),w._zod.parse=(H,O)=>{if(O.direction==="backward")return h.innerType._zod.run(H,O);let A=h.innerType._zod.run(H,O);if(A instanceof Promise)return A.then((u)=>{if(H.value=u.value,u.issues.length)H.value=h.catchValue({...H,error:{issues:u.issues.map((W)=>Vv(W,O,J5()))},input:H.value}),H.issues=[];return H});if(H.value=A.value,A.issues.length)H.value=h.catchValue({...H,error:{issues:A.issues.map((u)=>Vv(u,O,J5()))},input:H.value}),H.issues=[];return H}});var cY=y("$ZodPipe",(w,h)=>{yg.init(w,h),Pg(w._zod,"values",()=>h.in._zod.values),Pg(w._zod,"optin",()=>h.in._zod.optin),Pg(w._zod,"optout",()=>h.out._zod.optout),Pg(w._zod,"propValues",()=>h.in._zod.propValues),w._zod.parse=(H,O)=>{if(O.direction==="backward"){let u=h.out._zod.run(H,O);if(u instanceof Promise)return u.then((W)=>W8(W,h.in,O));return W8(u,h.in,O)}let A=h.in._zod.run(H,O);if(A instanceof Promise)return A.then((u)=>W8(u,h.out,O));return W8(A,h.out,O)}});function W8(w,h,H){if(w.issues.length)return w.aborted=!0,w;return h._zod.run({value:w.value,issues:w.issues},H)}var pY=y("$ZodReadonly",(w,h)=>{yg.init(w,h),Pg(w._zod,"propValues",()=>h.innerType._zod.propValues),Pg(w._zod,"values",()=>h.innerType._zod.values),Pg(w._zod,"optin",()=>h.innerType?._zod?.optin),Pg(w._zod,"optout",()=>h.innerType?._zod?.optout),w._zod.parse=(H,O)=>{if(O.direction==="backward")return h.innerType._zod.run(H,O);let A=h.innerType._zod.run(H,O);if(A instanceof Promise)return A.then(lY);return lY(A)}});function lY(w){return w.value=Object.freeze(w.value),w}var aY=y("$ZodCustom",(w,h)=>{J1.init(w,h),yg.init(w,h),w._zod.parse=(H,O)=>{return H},w._zod.check=(H)=>{let O=H.value,A=h.fn(O);if(A instanceof Promise)return A.then((u)=>oY(u,H,O,w));oY(A,H,O,w);return}});function oY(w,h,H,O){if(!w){let A={code:"custom",input:H,inst:O,path:[...O._zod.def.path??[]],continue:!O._zod.def.abort};if(O._zod.def.params)A.params=O._zod.def.params;h.issues.push(yh(A))}}var dY,Yyg=Symbol("ZodOutput"),Jyg=Symbol("ZodInput");class sY{constructor(){this._map=new WeakMap,this._idmap=new Map}add(w,...h){let H=h[0];if(this._map.set(w,H),H&&typeof H==="object"&&"id"in H)this._idmap.set(H.id,w);return this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(w){let h=this._map.get(w);if(h&&typeof h==="object"&&"id"in h)this._idmap.delete(h.id);return this._map.delete(w),this}get(w){let h=w._zod.parent;if(h){let H={...this.get(h)??{}};delete H.id;let O={...H,...this._map.get(w)};return Object.keys(O).length?O:void 0}return this._map.get(w)}has(w){return this._map.has(w)}}function _F(){return new sY}(dY=globalThis).__zod_globalRegistry??(dY.__zod_globalRegistry=_F());var Fb=globalThis.__zod_globalRegistry;function rJ(w,h){return new w({type:"string",...yr(h)})}function gJ(w,h){return new w({type:"string",format:"email",check:"string_format",abort:!1,...yr(h)})}function EA(w,h){return new w({type:"string",format:"guid",check:"string_format",abort:!1,...yr(h)})}function vJ(w,h){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,...yr(h)})}function wJ(w,h){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...yr(h)})}function bJ(w,h){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...yr(h)})}function hJ(w,h){return new w({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...yr(h)})}function lJ(w,h){return new w({type:"string",format:"url",check:"string_format",abort:!1,...yr(h)})}function oJ(w,h){return new w({type:"string",format:"emoji",check:"string_format",abort:!1,...yr(h)})}function HJ(w,h){return new w({type:"string",format:"nanoid",check:"string_format",abort:!1,...yr(h)})}function OJ(w,h){return new w({type:"string",format:"cuid",check:"string_format",abort:!1,...yr(h)})}function qJ(w,h){return new w({type:"string",format:"cuid2",check:"string_format",abort:!1,...yr(h)})}function AJ(w,h){return new w({type:"string",format:"ulid",check:"string_format",abort:!1,...yr(h)})}function PJ(w,h){return new w({type:"string",format:"xid",check:"string_format",abort:!1,...yr(h)})}function uJ(w,h){return new w({type:"string",format:"ksuid",check:"string_format",abort:!1,...yr(h)})}function WJ(w,h){return new w({type:"string",format:"ipv4",check:"string_format",abort:!1,...yr(h)})}function MJ(w,h){return new w({type:"string",format:"ipv6",check:"string_format",abort:!1,...yr(h)})}function GJ(w,h){return new w({type:"string",format:"cidrv4",check:"string_format",abort:!1,...yr(h)})}function XJ(w,h){return new w({type:"string",format:"cidrv6",check:"string_format",abort:!1,...yr(h)})}function YJ(w,h){return new w({type:"string",format:"base64",check:"string_format",abort:!1,...yr(h)})}function JJ(w,h){return new w({type:"string",format:"base64url",check:"string_format",abort:!1,...yr(h)})}function QJ(w,h){return new w({type:"string",format:"e164",check:"string_format",abort:!1,...yr(h)})}function zJ(w,h){return new w({type:"string",format:"jwt",check:"string_format",abort:!1,...yr(h)})}function RJ(w,h){return new w({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...yr(h)})}function KJ(w,h){return new w({type:"string",format:"date",check:"string_format",...yr(h)})}function $J(w,h){return new w({type:"string",format:"time",check:"string_format",precision:null,...yr(h)})}function UJ(w,h){return new w({type:"string",format:"duration",check:"string_format",...yr(h)})}function LJ(w){return new w({type:"unknown"})}function FJ(w,h){return new w({type:"never",...yr(h)})}function X8(w,h){return new eX({check:"max_length",...yr(h),maximum:w})}function nh(w,h){return new EX({check:"min_length",...yr(h),minimum:w})}function Y8(w,h){return new yX({check:"length_equals",...yr(h),length:w})}function yA(w,h){return new nX({check:"string_format",format:"regex",...yr(h),pattern:w})}function nA(w){return new jX({check:"string_format",format:"lowercase",...yr(w)})}function jA(w){return new tX({check:"string_format",format:"uppercase",...yr(w)})}function tA(w,h){return new fX({check:"string_format",format:"includes",...yr(h),includes:w})}function fA(w,h){return new cX({check:"string_format",format:"starts_with",...yr(h),prefix:w})}function cA(w,h){return new pX({check:"string_format",format:"ends_with",...yr(h),suffix:w})}function Kw(w){return new aX({check:"overwrite",tx:w})}function pA(w){return Kw((h)=>h.normalize(w))}function aA(){return Kw((w)=>w.trim())}function dA(){return Kw((w)=>w.toLowerCase())}function sA(){return Kw((w)=>w.toUpperCase())}function rP(){return Kw((w)=>TA(w))}function BJ(w,h,H){return new w({type:"array",element:h,...yr(H)})}function NJ(w,h,H){return new w({type:"custom",check:"custom",fn:h,...yr(H)})}function ZJ(w){let h=eF((H)=>{return H.addIssue=(O)=>{if(typeof O==="string")H.issues.push(yh(O,H.value,h._zod.def));else{let A=O;if(A.fatal)A.continue=!1;A.code??(A.code="custom"),A.input??(A.input=H.value),A.inst??(A.inst=h),A.continue??(A.continue=!h._zod.def.abort),H.issues.push(yh(A))}},w(H.value,H)});return h}function eF(w,h){let H=new J1({check:"custom",...yr(h)});return H._zod.check=w,H}function gP(w){let h=w?.target??"draft-2020-12";if(h==="draft-4")h="draft-04";if(h==="draft-7")h="draft-07";return{processors:w.processors??{},metadataRegistry:w?.metadata??Fb,target:h,unrepresentable:w?.unrepresentable??"throw",override:w?.override??(()=>{}),io:w?.io??"output",counter:0,seen:new Map,cycles:w?.cycles??"ref",reused:w?.reused??"inline",external:w?.external??void 0}}function q0(w,h,H={path:[],schemaPath:[]}){var O;let A=w._zod.def,u=h.seen.get(w);if(u){if(u.count++,H.schemaPath.includes(w))u.cycle=H.path;return u.schema}let W={schema:{},count:1,cycle:void 0,path:H.path};h.seen.set(w,W);let M=w._zod.toJSONSchema?.();if(M)W.schema=M;else{let z={...H,schemaPath:[...H.schemaPath,w],path:H.path};if(w._zod.processJSONSchema)w._zod.processJSONSchema(h,W.schema,z);else{let K=W.schema,I=h.processors[A.type];if(!I)throw Error(`[toJSONSchema]: Non-representable type encountered: ${A.type}`);I(w,h,K,z)}let X=w._zod.parent;if(X){if(!W.ref)W.ref=X;q0(X,h,z),h.seen.get(X).isParent=!0}}let Q=h.metadataRegistry.get(w);if(Q)Object.assign(W.schema,Q);if(h.io==="input"&&e0(w))delete W.schema.examples,delete W.schema.default;if(h.io==="input"&&W.schema._prefault)(O=W.schema).default??(O.default=W.schema._prefault);return delete W.schema._prefault,h.seen.get(w).schema}function vP(w,h){let H=w.seen.get(h);if(!H)throw Error("Unprocessed schema. This is a bug in Zod.");let O=new Map;for(let W of w.seen.entries()){let M=w.metadataRegistry.get(W[0])?.id;if(M){let Q=O.get(M);if(Q&&Q!==W[0])throw Error(`Duplicate schema id "${M}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);O.set(M,W[0])}}let A=(W)=>{let M=w.target==="draft-2020-12"?"$defs":"definitions";if(w.external){let X=w.external.registry.get(W[0])?.id,K=w.external.uri??((f)=>f);if(X)return{ref:K(X)};let I=W[1].defId??W[1].schema.id??`schema${w.counter++}`;return W[1].defId=I,{defId:I,ref:`${K("__shared")}#/${M}/${I}`}}if(W[1]===H)return{ref:"#"};let R=`${"#"}/${M}/`,z=W[1].schema.id??`__schema${w.counter++}`;return{defId:z,ref:R+z}},u=(W)=>{if(W[1].schema.$ref)return;let M=W[1],{ref:Q,defId:R}=A(W);if(M.def={...M.schema},R)M.defId=R;let z=M.schema;for(let X in z)delete z[X];z.$ref=Q};if(w.cycles==="throw")for(let W of w.seen.entries()){let M=W[1];if(M.cycle)throw Error(`Cycle detected: #/${M.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let W of w.seen.entries()){let M=W[1];if(h===W[0]){u(W);continue}if(w.external){let R=w.external.registry.get(W[0])?.id;if(h!==W[0]&&R){u(W);continue}}if(w.metadataRegistry.get(W[0])?.id){u(W);continue}if(M.cycle){u(W);continue}if(M.count>1){if(w.reused==="ref"){u(W);continue}}}}function wP(w,h){let H=w.seen.get(h);if(!H)throw Error("Unprocessed schema. This is a bug in Zod.");let O=(W)=>{let M=w.seen.get(W);if(M.ref===null)return;let Q=M.def??M.schema,R={...Q},z=M.ref;if(M.ref=null,z){O(z);let K=w.seen.get(z),I=K.schema;if(I.$ref&&(w.target==="draft-07"||w.target==="draft-04"||w.target==="openapi-3.0"))Q.allOf=Q.allOf??[],Q.allOf.push(I);else Object.assign(Q,I);if(Object.assign(Q,R),W._zod.parent===z)for(let C in Q){if(C==="$ref"||C==="allOf")continue;if(!(C in R))delete Q[C]}if(I.$ref&&K.def)for(let C in Q){if(C==="$ref"||C==="allOf")continue;if(C in K.def&&JSON.stringify(Q[C])===JSON.stringify(K.def[C]))delete Q[C]}}let X=W._zod.parent;if(X&&X!==z){O(X);let K=w.seen.get(X);if(K?.schema.$ref){if(Q.$ref=K.schema.$ref,K.def)for(let I in Q){if(I==="$ref"||I==="allOf")continue;if(I in K.def&&JSON.stringify(Q[I])===JSON.stringify(K.def[I]))delete Q[I]}}}w.override({zodSchema:W,jsonSchema:Q,path:M.path??[]})};for(let W of[...w.seen.entries()].reverse())O(W[0]);let A={};if(w.target==="draft-2020-12")A.$schema="https://json-schema.org/draft/2020-12/schema";else if(w.target==="draft-07")A.$schema="http://json-schema.org/draft-07/schema#";else if(w.target==="draft-04")A.$schema="http://json-schema.org/draft-04/schema#";else if(w.target==="openapi-3.0");if(w.external?.uri){let W=w.external.registry.get(h)?.id;if(!W)throw Error("Schema is missing an `id` property");A.$id=w.external.uri(W)}Object.assign(A,H.def??H.schema);let u=w.external?.defs??{};for(let W of w.seen.entries()){let M=W[1];if(M.def&&M.defId)u[M.defId]=M.def}if(w.external);else if(Object.keys(u).length>0)if(w.target==="draft-2020-12")A.$defs=u;else A.definitions=u;try{let W=JSON.parse(JSON.stringify(A));return Object.defineProperty(W,"~standard",{value:{...h["~standard"],jsonSchema:{input:z4(h,"input",w.processors),output:z4(h,"output",w.processors)}},enumerable:!1,writable:!1}),W}catch(W){throw Error("Error converting schema to JSON.")}}function e0(w,h){let H=h??{seen:new Set};if(H.seen.has(w))return!1;H.seen.add(w);let O=w._zod.def;if(O.type==="transform")return!0;if(O.type==="array")return e0(O.element,H);if(O.type==="set")return e0(O.valueType,H);if(O.type==="lazy")return e0(O.getter(),H);if(O.type==="promise"||O.type==="optional"||O.type==="nonoptional"||O.type==="nullable"||O.type==="readonly"||O.type==="default"||O.type==="prefault")return e0(O.innerType,H);if(O.type==="intersection")return e0(O.left,H)||e0(O.right,H);if(O.type==="record"||O.type==="map")return e0(O.keyType,H)||e0(O.valueType,H);if(O.type==="pipe")return e0(O.in,H)||e0(O.out,H);if(O.type==="object"){for(let A in O.shape)if(e0(O.shape[A],H))return!0;return!1}if(O.type==="union"){for(let A of O.options)if(e0(A,H))return!0;return!1}if(O.type==="tuple"){for(let A of O.items)if(e0(A,H))return!0;if(O.rest&&e0(O.rest,H))return!0;return!1}return!1}var IJ=(w,h={})=>(H)=>{let O=gP({...H,processors:h});return q0(w,O),vP(O,w),wP(O,w)},z4=(w,h,H={})=>(O)=>{let{libraryOptions:A,target:u}=O??{},W=gP({...A??{},target:u,io:h,processors:H});return q0(w,W),vP(W,w),wP(W,w)};var EF={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},xJ=(w,h,H,O)=>{let A=H;A.type="string";let{minimum:u,maximum:W,format:M,patterns:Q,contentEncoding:R}=w._zod.bag;if(typeof u==="number")A.minLength=u;if(typeof W==="number")A.maxLength=W;if(M){if(A.format=EF[M]??M,A.format==="")delete A.format;if(M==="time")delete A.format}if(R)A.contentEncoding=R;if(Q&&Q.size>0){let z=[...Q];if(z.length===1)A.pattern=z[0].source;else if(z.length>1)A.allOf=[...z.map((X)=>({...h.target==="draft-07"||h.target==="draft-04"||h.target==="openapi-3.0"?{type:"string"}:{},pattern:X.source}))]}};var TJ=(w,h,H,O)=>{H.not={}};var CJ=(w,h,H,O)=>{};var SJ=(w,h,H,O)=>{let A=w._zod.def,u=P4(A.entries);if(u.every((W)=>typeof W==="number"))H.type="number";if(u.every((W)=>typeof W==="string"))H.type="string";H.enum=u},mJ=(w,h,H,O)=>{let A=w._zod.def,u=[];for(let W of A.values)if(W===void 0){if(h.unrepresentable==="throw")throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof W==="bigint")if(h.unrepresentable==="throw")throw Error("BigInt literals cannot be represented in JSON Schema");else u.push(Number(W));else u.push(W);if(u.length===0);else if(u.length===1){let W=u[0];if(H.type=W===null?"null":typeof W,h.target==="draft-04"||h.target==="openapi-3.0")H.enum=[W];else H.const=W}else{if(u.every((W)=>typeof W==="number"))H.type="number";if(u.every((W)=>typeof W==="string"))H.type="string";if(u.every((W)=>typeof W==="boolean"))H.type="boolean";if(u.every((W)=>W===null))H.type="null";H.enum=u}};var kJ=(w,h,H,O)=>{if(h.unrepresentable==="throw")throw Error("Custom types cannot be represented in JSON Schema")};var DJ=(w,h,H,O)=>{if(h.unrepresentable==="throw")throw Error("Transforms cannot be represented in JSON Schema")};var iJ=(w,h,H,O)=>{let A=H,u=w._zod.def,{minimum:W,maximum:M}=w._zod.bag;if(typeof W==="number")A.minItems=W;if(typeof M==="number")A.maxItems=M;A.type="array",A.items=q0(u.element,h,{...O,path:[...O.path,"items"]})},VJ=(w,h,H,O)=>{let A=H,u=w._zod.def;A.type="object",A.properties={};let W=u.shape;for(let R in W)A.properties[R]=q0(W[R],h,{...O,path:[...O.path,"properties",R]});let M=new Set(Object.keys(W)),Q=new Set([...M].filter((R)=>{let z=u.shape[R]._zod;if(h.io==="input")return z.optin===void 0;else return z.optout===void 0}));if(Q.size>0)A.required=Array.from(Q);if(u.catchall?._zod.def.type==="never")A.additionalProperties=!1;else if(!u.catchall){if(h.io==="output")A.additionalProperties=!1}else if(u.catchall)A.additionalProperties=q0(u.catchall,h,{...O,path:[...O.path,"additionalProperties"]})},_J=(w,h,H,O)=>{let A=w._zod.def,u=A.inclusive===!1,W=A.options.map((M,Q)=>q0(M,h,{...O,path:[...O.path,u?"oneOf":"anyOf",Q]}));if(u)H.oneOf=W;else H.anyOf=W},eJ=(w,h,H,O)=>{let A=w._zod.def,u=q0(A.left,h,{...O,path:[...O.path,"allOf",0]}),W=q0(A.right,h,{...O,path:[...O.path,"allOf",1]}),M=(R)=>("allOf"in R)&&Object.keys(R).length===1,Q=[...M(u)?u.allOf:[u],...M(W)?W.allOf:[W]];H.allOf=Q};var EJ=(w,h,H,O)=>{let A=w._zod.def,u=q0(A.innerType,h,O),W=h.seen.get(w);if(h.target==="openapi-3.0")W.ref=A.innerType,H.nullable=!0;else H.anyOf=[u,{type:"null"}]},yJ=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);u.ref=A.innerType},nJ=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);u.ref=A.innerType,H.default=JSON.parse(JSON.stringify(A.defaultValue))},jJ=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);if(u.ref=A.innerType,h.io==="input")H._prefault=JSON.parse(JSON.stringify(A.defaultValue))},tJ=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);u.ref=A.innerType;let W;try{W=A.catchValue(void 0)}catch{throw Error("Dynamic catch values are not supported in JSON Schema")}H.default=W},fJ=(w,h,H,O)=>{let A=w._zod.def,u=h.io==="input"?A.in._zod.def.type==="transform"?A.out:A.in:A.out;q0(u,h,O);let W=h.seen.get(w);W.ref=u},cJ=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);u.ref=A.innerType,H.readOnly=!0};var bP=(w,h,H,O)=>{let A=w._zod.def;q0(A.innerType,h,O);let u=h.seen.get(w);u.ref=A.innerType};var gB=y("ZodISODateTime",(w,h)=>{JY.init(w,h),Tg.init(w,h)});function pJ(w){return RJ(gB,w)}var vB=y("ZodISODate",(w,h)=>{QY.init(w,h),Tg.init(w,h)});function aJ(w){return KJ(vB,w)}var wB=y("ZodISOTime",(w,h)=>{zY.init(w,h),Tg.init(w,h)});function dJ(w){return $J(wB,w)}var bB=y("ZodISODuration",(w,h)=>{RY.init(w,h),Tg.init(w,h)});function sJ(w){return UJ(bB,w)}var rQ=(w,h)=>{q8.init(w,h),w.name="ZodError",Object.defineProperties(w,{format:{value:(H)=>oX(w,H)},flatten:{value:(H)=>lX(w,H)},addIssue:{value:(H)=>{w.issues.push(H),w.message=JSON.stringify(w.issues,Eh,2)}},addIssues:{value:(H)=>{w.issues.push(...H),w.message=JSON.stringify(w.issues,Eh,2)}},isEmpty:{get(){return w.issues.length===0}}})},syg=y("ZodError",rQ),Q1=y("ZodError",rQ,{Parent:Error});var gQ=A8(Q1),vQ=P8(Q1),wQ=Y4(Q1),bQ=J4(Q1),hQ=qX(Q1),lQ=AX(Q1),oQ=PX(Q1),HQ=uX(Q1),OQ=WX(Q1),qQ=MX(Q1),AQ=GX(Q1),PQ=XX(Q1);var g0=y("ZodType",(w,h)=>{return yg.init(w,h),Object.assign(w["~standard"],{jsonSchema:{input:z4(w,"input"),output:z4(w,"output")}}),w.toJSONSchema=IJ(w,{}),w.def=h,w.type=h.type,Object.defineProperty(w,"_def",{value:h}),w.check=(...H)=>{return w.clone(Wg.mergeDefs(h,{checks:[...h.checks??[],...H.map((O)=>typeof O==="function"?{_zod:{check:O,def:{check:"custom"},onattach:[]}}:O)]}),{parent:!0})},w.with=w.check,w.clone=(H,O)=>gv(w,H,O),w.brand=()=>w,w.register=(H,O)=>{return H.add(w,O),w},w.parse=(H,O)=>gQ(w,H,O,{callee:w.parse}),w.safeParse=(H,O)=>wQ(w,H,O),w.parseAsync=async(H,O)=>vQ(w,H,O,{callee:w.parseAsync}),w.safeParseAsync=async(H,O)=>bQ(w,H,O),w.spa=w.safeParseAsync,w.encode=(H,O)=>hQ(w,H,O),w.decode=(H,O)=>lQ(w,H,O),w.encodeAsync=async(H,O)=>oQ(w,H,O),w.decodeAsync=async(H,O)=>HQ(w,H,O),w.safeEncode=(H,O)=>OQ(w,H,O),w.safeDecode=(H,O)=>qQ(w,H,O),w.safeEncodeAsync=async(H,O)=>AQ(w,H,O),w.safeDecodeAsync=async(H,O)=>PQ(w,H,O),w.refine=(H,O)=>w.check(dB(H,O)),w.superRefine=(H)=>w.check(sB(H)),w.overwrite=(H)=>w.check(Kw(H)),w.optional=()=>MQ(w),w.exactOptional=()=>iB(w),w.nullable=()=>GQ(w),w.nullish=()=>MQ(GQ(w)),w.nonoptional=(H)=>nB(w,H),w.array=()=>R5(w),w.or=(H)=>xB([w,H]),w.and=(H)=>CB(w,H),w.transform=(H)=>XQ(w,kB(H)),w.default=(H)=>eB(w,H),w.prefault=(H)=>yB(w,H),w.catch=(H)=>tB(w,H),w.pipe=(H)=>XQ(w,H),w.readonly=()=>pB(w),w.describe=(H)=>{let O=w.clone();return Fb.add(O,{description:H}),O},Object.defineProperty(w,"description",{get(){return Fb.get(w)?.description},configurable:!0}),w.meta=(...H)=>{if(H.length===0)return Fb.get(w);let O=w.clone();return Fb.add(O,H[0]),O},w.isOptional=()=>w.safeParse(void 0).success,w.isNullable=()=>w.safeParse(null).success,w.apply=(H)=>H(w),w}),YQ=y("_ZodString",(w,h)=>{G8.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(O,A,u)=>xJ(w,O,A,u);let H=w._zod.bag;w.format=H.format??null,w.minLength=H.minimum??null,w.maxLength=H.maximum??null,w.regex=(...O)=>w.check(yA(...O)),w.includes=(...O)=>w.check(tA(...O)),w.startsWith=(...O)=>w.check(fA(...O)),w.endsWith=(...O)=>w.check(cA(...O)),w.min=(...O)=>w.check(nh(...O)),w.max=(...O)=>w.check(X8(...O)),w.length=(...O)=>w.check(Y8(...O)),w.nonempty=(...O)=>w.check(nh(1,...O)),w.lowercase=(O)=>w.check(nA(O)),w.uppercase=(O)=>w.check(jA(O)),w.trim=()=>w.check(aA()),w.normalize=(...O)=>w.check(pA(...O)),w.toLowerCase=()=>w.check(dA()),w.toUpperCase=()=>w.check(sA()),w.slugify=()=>w.check(rP())}),HB=y("ZodString",(w,h)=>{G8.init(w,h),YQ.init(w,h),w.email=(H)=>w.check(gJ(OB,H)),w.url=(H)=>w.check(lJ(qB,H)),w.jwt=(H)=>w.check(zJ(UB,H)),w.emoji=(H)=>w.check(oJ(AB,H)),w.guid=(H)=>w.check(EA(uQ,H)),w.uuid=(H)=>w.check(vJ(Q8,H)),w.uuidv4=(H)=>w.check(wJ(Q8,H)),w.uuidv6=(H)=>w.check(bJ(Q8,H)),w.uuidv7=(H)=>w.check(hJ(Q8,H)),w.nanoid=(H)=>w.check(HJ(PB,H)),w.guid=(H)=>w.check(EA(uQ,H)),w.cuid=(H)=>w.check(OJ(uB,H)),w.cuid2=(H)=>w.check(qJ(WB,H)),w.ulid=(H)=>w.check(AJ(MB,H)),w.base64=(H)=>w.check(YJ(RB,H)),w.base64url=(H)=>w.check(JJ(KB,H)),w.xid=(H)=>w.check(PJ(GB,H)),w.ksuid=(H)=>w.check(uJ(XB,H)),w.ipv4=(H)=>w.check(WJ(YB,H)),w.ipv6=(H)=>w.check(MJ(JB,H)),w.cidrv4=(H)=>w.check(GJ(QB,H)),w.cidrv6=(H)=>w.check(XJ(zB,H)),w.e164=(H)=>w.check(QJ($B,H)),w.datetime=(H)=>w.check(pJ(H)),w.date=(H)=>w.check(aJ(H)),w.time=(H)=>w.check(dJ(H)),w.duration=(H)=>w.check(sJ(H))});function ng(w){return rJ(HB,w)}var Tg=y("ZodStringFormat",(w,h)=>{Zg.init(w,h),YQ.init(w,h)}),OB=y("ZodEmail",(w,h)=>{qY.init(w,h),Tg.init(w,h)});var uQ=y("ZodGUID",(w,h)=>{HY.init(w,h),Tg.init(w,h)});var Q8=y("ZodUUID",(w,h)=>{OY.init(w,h),Tg.init(w,h)});var qB=y("ZodURL",(w,h)=>{AY.init(w,h),Tg.init(w,h)});var AB=y("ZodEmoji",(w,h)=>{PY.init(w,h),Tg.init(w,h)});var PB=y("ZodNanoID",(w,h)=>{uY.init(w,h),Tg.init(w,h)});var uB=y("ZodCUID",(w,h)=>{WY.init(w,h),Tg.init(w,h)});var WB=y("ZodCUID2",(w,h)=>{MY.init(w,h),Tg.init(w,h)});var MB=y("ZodULID",(w,h)=>{GY.init(w,h),Tg.init(w,h)});var GB=y("ZodXID",(w,h)=>{XY.init(w,h),Tg.init(w,h)});var XB=y("ZodKSUID",(w,h)=>{YY.init(w,h),Tg.init(w,h)});var YB=y("ZodIPv4",(w,h)=>{KY.init(w,h),Tg.init(w,h)});var JB=y("ZodIPv6",(w,h)=>{$Y.init(w,h),Tg.init(w,h)});var QB=y("ZodCIDRv4",(w,h)=>{UY.init(w,h),Tg.init(w,h)});var zB=y("ZodCIDRv6",(w,h)=>{LY.init(w,h),Tg.init(w,h)});var RB=y("ZodBase64",(w,h)=>{BY.init(w,h),Tg.init(w,h)});var KB=y("ZodBase64URL",(w,h)=>{NY.init(w,h),Tg.init(w,h)});var $B=y("ZodE164",(w,h)=>{ZY.init(w,h),Tg.init(w,h)});var UB=y("ZodJWT",(w,h)=>{IY.init(w,h),Tg.init(w,h)});var LB=y("ZodUnknown",(w,h)=>{xY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>CJ(w,H,O,A)});function WQ(){return LJ(LB)}var FB=y("ZodNever",(w,h)=>{TY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>TJ(w,H,O,A)});function BB(w){return FJ(FB,w)}var NB=y("ZodArray",(w,h)=>{CY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>iJ(w,H,O,A),w.element=h.element,w.min=(H,O)=>w.check(nh(H,O)),w.nonempty=(H)=>w.check(nh(1,H)),w.max=(H,O)=>w.check(X8(H,O)),w.length=(H,O)=>w.check(Y8(H,O)),w.unwrap=()=>w.element});function R5(w,h){return BJ(NB,w,h)}var ZB=y("ZodObject",(w,h)=>{kY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>VJ(w,H,O,A),Wg.defineLazy(w,"shape",()=>{return h.shape}),w.keyof=()=>R4(Object.keys(w._zod.def.shape)),w.catchall=(H)=>w.clone({...w._zod.def,catchall:H}),w.passthrough=()=>w.clone({...w._zod.def,catchall:WQ()}),w.loose=()=>w.clone({...w._zod.def,catchall:WQ()}),w.strict=()=>w.clone({...w._zod.def,catchall:BB()}),w.strip=()=>w.clone({...w._zod.def,catchall:void 0}),w.extend=(H)=>{return Wg.extend(w,H)},w.safeExtend=(H)=>{return Wg.safeExtend(w,H)},w.merge=(H)=>Wg.merge(w,H),w.pick=(H)=>Wg.pick(w,H),w.omit=(H)=>Wg.omit(w,H),w.partial=(...H)=>Wg.partial(JQ,w,H[0]),w.required=(...H)=>Wg.required(QQ,w,H[0])});function Bb(w,h){let H={type:"object",shape:w??{},...Wg.normalizeParams(h)};return new ZB(H)}var IB=y("ZodUnion",(w,h)=>{DY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>_J(w,H,O,A),w.options=h.options});function xB(w,h){return new IB({type:"union",options:w,...Wg.normalizeParams(h)})}var TB=y("ZodIntersection",(w,h)=>{iY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>eJ(w,H,O,A)});function CB(w,h){return new TB({type:"intersection",left:w,right:h})}var hP=y("ZodEnum",(w,h)=>{VY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(O,A,u)=>SJ(w,O,A,u),w.enum=h.entries,w.options=Object.values(h.entries);let H=new Set(Object.keys(h.entries));w.extract=(O,A)=>{let u={};for(let W of O)if(H.has(W))u[W]=h.entries[W];else throw Error(`Key ${W} not found in enum`);return new hP({...h,checks:[],...Wg.normalizeParams(A),entries:u})},w.exclude=(O,A)=>{let u={...h.entries};for(let W of O)if(H.has(W))delete u[W];else throw Error(`Key ${W} not found in enum`);return new hP({...h,checks:[],...Wg.normalizeParams(A),entries:u})}});function R4(w,h){let H=Array.isArray(w)?Object.fromEntries(w.map((O)=>[O,O])):w;return new hP({type:"enum",entries:H,...Wg.normalizeParams(h)})}var SB=y("ZodLiteral",(w,h)=>{_Y.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>mJ(w,H,O,A),w.values=new Set(h.values),Object.defineProperty(w,"value",{get(){if(h.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return h.values[0]}})});function lP(w,h){return new SB({type:"literal",values:Array.isArray(w)?w:[w],...Wg.normalizeParams(h)})}var mB=y("ZodTransform",(w,h)=>{eY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>DJ(w,H,O,A),w._zod.parse=(H,O)=>{if(O.direction==="backward")throw new q4(w.constructor.name);H.addIssue=(u)=>{if(typeof u==="string")H.issues.push(Wg.issue(u,H.value,h));else{let W=u;if(W.fatal)W.continue=!1;W.code??(W.code="custom"),W.input??(W.input=H.value),W.inst??(W.inst=w),H.issues.push(Wg.issue(W))}};let A=h.transform(H.value,H);if(A instanceof Promise)return A.then((u)=>{return H.value=u,H});return H.value=A,H}});function kB(w){return new mB({type:"transform",transform:w})}var JQ=y("ZodOptional",(w,h)=>{eA.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>bP(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function MQ(w){return new JQ({type:"optional",innerType:w})}var DB=y("ZodExactOptional",(w,h)=>{EY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>bP(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function iB(w){return new DB({type:"optional",innerType:w})}var VB=y("ZodNullable",(w,h)=>{yY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>EJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function GQ(w){return new VB({type:"nullable",innerType:w})}var _B=y("ZodDefault",(w,h)=>{nY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>nJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType,w.removeDefault=w.unwrap});function eB(w,h){return new _B({type:"default",innerType:w,get defaultValue(){return typeof h==="function"?h():Wg.shallowClone(h)}})}var EB=y("ZodPrefault",(w,h)=>{jY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>jJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function yB(w,h){return new EB({type:"prefault",innerType:w,get defaultValue(){return typeof h==="function"?h():Wg.shallowClone(h)}})}var QQ=y("ZodNonOptional",(w,h)=>{tY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>yJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function nB(w,h){return new QQ({type:"nonoptional",innerType:w,...Wg.normalizeParams(h)})}var jB=y("ZodCatch",(w,h)=>{fY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>tJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType,w.removeCatch=w.unwrap});function tB(w,h){return new jB({type:"catch",innerType:w,catchValue:typeof h==="function"?h:()=>h})}var fB=y("ZodPipe",(w,h)=>{cY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>fJ(w,H,O,A),w.in=h.in,w.out=h.out});function XQ(w,h){return new fB({type:"pipe",in:w,out:h})}var cB=y("ZodReadonly",(w,h)=>{pY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>cJ(w,H,O,A),w.unwrap=()=>w._zod.def.innerType});function pB(w){return new cB({type:"readonly",innerType:w})}var aB=y("ZodCustom",(w,h)=>{aY.init(w,h),g0.init(w,h),w._zod.processJSONSchema=(H,O,A)=>kJ(w,H,O,A)});function dB(w,h={}){return NJ(aB,w,h)}function sB(w){return ZJ(w)}var zQ=Bb({type:R4(["character","chat"]),characterId:ng().optional(),chatId:ng().optional(),displayName:ng().default("")}),RQ=Bb({description:ng().optional(),author:ng().optional(),version:ng().optional(),tags:R5(ng()).optional()}),rN=Bb({name:ng().min(1).max(200),code:ng(),type:R4(["trigger","library"]),triggers:R5(ng()).optional(),bindings:R5(zQ).optional(),folder:ng().optional(),metadata:RQ.optional()}),KQ=Bb({format:lP("lumiscript-pack-v1"),exportedAt:ng(),scripts:R5(rN).min(1).max(100)}),gN=Bb({name:ng().min(1).max(200),file:ng().min(1),type:R4(["trigger","library"]),triggers:R5(ng()).optional(),bindings:R5(zQ).optional(),folder:ng().optional(),metadata:RQ.optional()}),Rjg=Bb({format:lP("lumiscript-manifest-v1"),sourcePack:ng().optional(),sourceFormat:ng().optional(),exportedAt:ng().optional(),convertedAt:ng().optional(),scripts:R5(gN).min(1).max(100)});var $Q=1048576;async function UQ(w){let h=new Uint8Array(await w.arrayBuffer()),H;try{H=jG(h)}catch{throw Error("Could not read ZIP file. Is this a valid .zip archive?")}let O=H["pack.json"];if(!O)throw Error("Invalid script pack: missing pack.json");if(O.byteLength>$Q)throw Error(`Pack exceeds the ${$Q/1024/1024} MB decompressed size limit`);let A=ZA(O),u;try{u=JSON.parse(A)}catch{throw Error("Invalid script pack: pack.json is not valid JSON")}return KQ.parse(u).scripts}var lg=ur(rg(),1);function vN(w){let H="";for(let O=0;O<w.length;O+=32768)H+=String.fromCharCode(...w.subarray(O,O+32768));return btoa(H)}function wN(w){let h=new Map;for(let A of w){let u=A.folder??"";if(!h.has(u))h.set(u,[]);h.get(u).push(A)}let H=new Map;if(h.has(""))H.set("",h.get(""));let O=[...h.keys()].filter((A)=>A!=="").sort();for(let A of O)H.set(A,h.get(A));return H}var z8=({scripts:w,selectedId:h,execInfo:H,onSelect:O,onEdit:A,sendToBackend:u})=>{let[W,M]=K4.useState("trigger"),[Q,R]=K4.useState(new Set),z=K4.useRef(null),X=w.filter((p)=>p.type===W),K=wN(X),I=K.size>1||K.size===1&&!K.has(""),f=(p)=>{R((s)=>{let br=new Set(s);if(br.has(p))br.delete(p);else br.add(p);return br})},C=()=>{let p=W==="library"?"Library name:":"Script name:",s=window.prompt(p);if(!s?.trim())return;u({type:"create_script",name:s.trim(),scriptType:W})},j=(p)=>{if(X.length===0)return;if(p.shiftKey){let br=IA(X);u({type:"save_pack_to_disk",bytesB64:vN(br),scriptType:W});return}let s=window.prompt("Pack name:","my-scripts");if(!s?.trim())return;tG(X,s.trim())},rr=()=>{z.current?.click()},Pr=async(p)=>{let s=p.target.files?.[0];if(!s)return;p.target.value="";try{let br=await UQ(s),m=(D)=>D==="library"?"[L]":"[T]",E=br.map((D)=>`  ${m(D.type)} ${D.name}`).join(`
`);if(!window.confirm(`Import ${br.length} script${br.length>1?"s":""}?

${E}

Imported scripts will be disabled. Review and enable them manually.`))return;u({type:"import_scripts",entries:br})}catch(br){window.alert(`Import failed: ${br instanceof Error?br.message:String(br)}`)}},wr=(p)=>{let s=H[p.id];return lg.jsxDEV(IG,{script:p,selected:p.id===h,dot:s?.dot??"idle",duration:s?.duration,onSelect:()=>O(p.id),onEdit:()=>A(p.id),sendToBackend:u},p.id,!1,void 0,this)};return lg.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[lg.jsxDEV("div",{className:"ls-list-header",children:[lg.jsxDEV("div",{className:"ls-list-type-tabs",children:[lg.jsxDEV("button",{className:`ls-type-tab${W==="trigger"?" ls-active":""}`,onClick:()=>M("trigger"),title:"Scripts",children:lg.jsxDEV(Y0,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),lg.jsxDEV("button",{className:`ls-type-tab${W==="library"?" ls-active":""}`,onClick:()=>M("library"),title:"Libraries",children:lg.jsxDEV(zb,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),lg.jsxDEV("div",{className:"ls-list-actions",children:[lg.jsxDEV("button",{className:"ls-icon-btn",onClick:rr,title:"Import script pack",children:lg.jsxDEV(b4,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),lg.jsxDEV("button",{className:"ls-icon-btn",onClick:j,title:"Export current scripts as pack (Shift+click: save to extension storage)",disabled:X.length===0,children:lg.jsxDEV(Rb,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this),lg.jsxDEV("button",{className:"ls-icon-btn",onClick:C,title:"New script",children:lg.jsxDEV(pl,{size:15},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),lg.jsxDEV("input",{ref:z,type:"file",accept:".zip",style:{display:"none"},onChange:Pr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),lg.jsxDEV("div",{className:"ls-list-body",children:X.length===0?lg.jsxDEV("div",{className:"ls-list-empty",children:[lg.jsxDEV(Sv,{size:28,style:{color:"var(--lumiverse-border)",margin:"0 auto 8px"}},void 0,!1,void 0,this),lg.jsxDEV("p",{children:["No ",W==="library"?"libraries":"scripts"," yet"]},void 0,!0,void 0,this),lg.jsxDEV("p",{style:{marginTop:4,color:"var(--lumiverse-text-muted)"},children:"Click + to create one"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):I?[...K.entries()].map(([p,s])=>{let br=Q.has(p);return p===""?lg.jsxDEV("div",{children:s.map(wr)},"__unfiled",!1,void 0,this):lg.jsxDEV("div",{className:"ls-folder-group",children:[lg.jsxDEV("button",{className:"ls-folder-header",onClick:()=>f(p),children:[br?lg.jsxDEV(W5,{size:11},void 0,!1,void 0,this):lg.jsxDEV(J0,{size:11},void 0,!1,void 0,this),lg.jsxDEV(Kb,{size:11},void 0,!1,void 0,this),lg.jsxDEV("span",{className:"ls-folder-name",children:p},void 0,!1,void 0,this),lg.jsxDEV("span",{className:"ls-folder-rename",title:"Rename folder",role:"button",onClick:(m)=>{m.stopPropagation();let E=window.prompt("Rename folder:",p);if(E===null||E.trim()===""||E.trim()===p)return;for(let t of s)u({type:"update_script",id:t.id,patch:{folder:E.trim()}})},children:lg.jsxDEV(d1,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),lg.jsxDEV("span",{className:"ls-folder-count",children:s.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!br&&s.map(wr)]},`folder-${p}`,!0,void 0,this)}):X.map(wr)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var B4=ur(hg(),1),qz=ur(mh(),1);var z0=ur(hg(),1);function LQ(w,h){(h==null||h>w.length)&&(h=w.length);for(var H=0,O=Array(h);H<h;H++)O[H]=w[H];return O}function bN(w){if(Array.isArray(w))return w}function hN(w,h,H){return(h=qN(h))in w?Object.defineProperty(w,h,{value:H,enumerable:!0,configurable:!0,writable:!0}):w[h]=H,w}function lN(w,h){var H=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(H!=null){var O,A,u,W,M=[],Q=!0,R=!1;try{if(u=(H=H.call(w)).next,h===0);else for(;!(Q=(O=u.call(H)).done)&&(M.push(O.value),M.length!==h);Q=!0);}catch(z){R=!0,A=z}finally{try{if(!Q&&H.return!=null&&(W=H.return(),Object(W)!==W))return}finally{if(R)throw A}}return M}}function oN(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FQ(w,h){var H=Object.keys(w);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(w);h&&(O=O.filter(function(A){return Object.getOwnPropertyDescriptor(w,A).enumerable})),H.push.apply(H,O)}return H}function oP(w){for(var h=1;h<arguments.length;h++){var H=arguments[h]!=null?arguments[h]:{};h%2?FQ(Object(H),!0).forEach(function(O){hN(w,O,H[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(H)):FQ(Object(H)).forEach(function(O){Object.defineProperty(w,O,Object.getOwnPropertyDescriptor(H,O))})}return w}function BQ(w,h){if(w==null)return{};var H,O,A=HN(w,h);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(w);for(O=0;O<u.length;O++)H=u[O],h.indexOf(H)===-1&&{}.propertyIsEnumerable.call(w,H)&&(A[H]=w[H])}return A}function HN(w,h){if(w==null)return{};var H={};for(var O in w)if({}.hasOwnProperty.call(w,O)){if(h.indexOf(O)!==-1)continue;H[O]=w[O]}return H}function NQ(w,h){return bN(w)||lN(w,h)||AN(w,h)||oN()}function ON(w,h){if(typeof w!="object"||!w)return w;var H=w[Symbol.toPrimitive];if(H!==void 0){var O=H.call(w,h);if(typeof O!="object")return O;throw TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(w)}function qN(w){var h=ON(w,"string");return typeof h=="symbol"?h:h+""}function AN(w,h){if(w){if(typeof w=="string")return LQ(w,h);var H={}.toString.call(w).slice(8,-1);return H==="Object"&&w.constructor&&(H=w.constructor.name),H==="Map"||H==="Set"?Array.from(w):H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H)?LQ(w,h):void 0}}function PN(w,h,H){if(h in w)Object.defineProperty(w,h,{value:H,enumerable:!0,configurable:!0,writable:!0});else w[h]=H;return w}function ZQ(w,h){var H=Object.keys(w);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(w);if(h)O=O.filter(function(A){return Object.getOwnPropertyDescriptor(w,A).enumerable});H.push.apply(H,O)}return H}function IQ(w){for(var h=1;h<arguments.length;h++){var H=arguments[h]!=null?arguments[h]:{};if(h%2)ZQ(Object(H),!0).forEach(function(O){PN(w,O,H[O])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(w,Object.getOwnPropertyDescriptors(H));else ZQ(Object(H)).forEach(function(O){Object.defineProperty(w,O,Object.getOwnPropertyDescriptor(H,O))})}return w}function uN(){for(var w=arguments.length,h=Array(w),H=0;H<w;H++)h[H]=arguments[H];return function(O){return h.reduceRight(function(A,u){return u(A)},O)}}function $4(w){return function h(){var H=this;for(var O=arguments.length,A=Array(O),u=0;u<O;u++)A[u]=arguments[u];return A.length>=w.length?w.apply(this,A):function(){for(var W=arguments.length,M=Array(W),Q=0;Q<W;Q++)M[Q]=arguments[Q];return h.apply(H,[].concat(A,M))}}}function K8(w){return{}.toString.call(w).includes("Object")}function WN(w){return!Object.keys(w).length}function U4(w){return typeof w==="function"}function MN(w,h){return Object.prototype.hasOwnProperty.call(w,h)}function GN(w,h){if(!K8(h))$w("changeType");if(Object.keys(h).some(function(H){return!MN(w,H)}))$w("changeField");return h}function XN(w){if(!U4(w))$w("selectorType")}function YN(w){if(!(U4(w)||K8(w)))$w("handlerType");if(K8(w)&&Object.values(w).some(function(h){return!U4(h)}))$w("handlersType")}function JN(w){if(!w)$w("initialIsRequired");if(!K8(w))$w("initialType");if(WN(w))$w("initialContent")}function QN(w,h){throw Error(w[h]||w.default)}var zN={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$w=$4(QN)(zN),R8={changes:GN,selector:XN,handler:YN,initial:JN};function RN(w){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};R8.initial(w),R8.handler(h);var H={current:w},O=$4(UN)(H,h),A=$4($N)(H),u=$4(R8.changes)(w),W=$4(KN)(H);function M(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(z){return z};return R8.selector(R),R(H.current)}function Q(R){uN(O,A,u,W)(R)}return[M,Q]}function KN(w,h){return U4(h)?h(w.current):h}function $N(w,h){return w.current=IQ(IQ({},w.current),h),h}function UN(w,h,H){return U4(h)?h(w.current):Object.keys(H).forEach(function(O){var A;return(A=h[O])===null||A===void 0?void 0:A.call(h,w.current[O])}),H}var LN={create:RN},xQ=LN;var TQ={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function CQ(w){return function h(){var H=this;for(var O=arguments.length,A=Array(O),u=0;u<O;u++)A[u]=arguments[u];return A.length>=w.length?w.apply(this,A):function(){for(var W=arguments.length,M=Array(W),Q=0;Q<W;Q++)M[Q]=arguments[Q];return h.apply(H,[].concat(A,M))}}}function SQ(w){return{}.toString.call(w).includes("Object")}function FN(w){if(!w)mQ("configIsRequired");if(!SQ(w))mQ("configType");if(w.urls)return BN(),{paths:{vs:w.urls.monacoBase}};return w}function BN(){console.warn(kQ.deprecation)}function NN(w,h){throw Error(w[h]||w.default)}var kQ={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},mQ=CQ(NN)(kQ),DQ={config:FN};var iQ=function(){for(var h=arguments.length,H=Array(h),O=0;O<h;O++)H[O]=arguments[O];return function(A){return H.reduceRight(function(u,W){return W(u)},A)}};function HP(w,h){return Object.keys(h).forEach(function(H){if(h[H]instanceof Object){if(w[H])Object.assign(h[H],HP(w[H],h[H]))}}),oP(oP({},w),h)}var ZN={type:"cancelation",msg:"operation is manually canceled"};function $8(w){var h=!1,H=new Promise(function(O,A){w.then(function(u){return h?A(ZN):O(u)}),w.catch(A)});return H.cancel=function(){return h=!0},H}var IN=["monaco"],xN=xQ.create({config:TQ,isInitialized:!1,resolve:null,reject:null,monaco:null}),VQ=NQ(xN,2),L4=VQ[0],U8=VQ[1];function TN(w){var h=DQ.config(w),H=h.monaco,O=BQ(h,IN);U8(function(A){return{config:HP(A.config,O),monaco:H}})}function CN(){var w=L4(function(h){var{monaco:H,isInitialized:O,resolve:A}=h;return{monaco:H,isInitialized:O,resolve:A}});if(!w.isInitialized){if(U8({isInitialized:!0}),w.monaco)return w.resolve(w.monaco),$8(OP);if(window.monaco&&window.monaco.editor)return _Q(window.monaco),w.resolve(window.monaco),$8(OP);iQ(SN,kN)(DN)}return $8(OP)}function SN(w){return document.body.appendChild(w)}function mN(w){var h=document.createElement("script");return w&&(h.src=w),h}function kN(w){var h=L4(function(O){var{config:A,reject:u}=O;return{config:A,reject:u}}),H=mN("".concat(h.config.paths.vs,"/loader.js"));return H.onload=function(){return w()},H.onerror=h.reject,H}function DN(){var w=L4(function(H){var{config:O,resolve:A,reject:u}=H;return{config:O,resolve:A,reject:u}}),h=window.require;h.config(w.config),h(["vs/editor/editor.main"],function(H){var O=H.m||H;_Q(O),w.resolve(O)},function(H){w.reject(H)})}function _Q(w){if(!L4().monaco)U8({monaco:w})}function iN(){return L4(function(w){var h=w.monaco;return h})}var OP=new Promise(function(w,h){return U8({resolve:w,reject:h})}),Nb={config:TN,init:CN,__getMonacoInstance:iN};var eQ=ur(hg(),1),A0=ur(hg(),1);var EQ=ur(hg(),1),F8=ur(hg(),1),yQ=ur(hg(),1),jQ=ur(hg(),1),B8=ur(hg(),1),rZ=ur(hg(),1);var cQ=ur(hg(),1),Vg=ur(hg(),1);var N8=ur(hg(),1),VN={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},qP=VN,_N={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},eN=_N;function EN({children:w}){return yQ.default.createElement("div",{style:eN.container},w)}var yN=EN,nN=yN;function jN({width:w,height:h,isEditorReady:H,loading:O,_ref:A,className:u,wrapperProps:W}){return F8.default.createElement("section",{style:{...qP.wrapper,width:w,height:h},...W},!H&&F8.default.createElement(nN,null,O),F8.default.createElement("div",{ref:A,style:{...qP.fullWidth,...!H&&qP.hide},className:u}))}var tN=jN,nQ=EQ.memo(tN);function fN(w){jQ.useEffect(w,[])}var tQ=fN;function cN(w,h,H=!0){let O=B8.useRef(!0);B8.useEffect(O.current||!H?()=>{O.current=!1}:w,h)}var z1=cN;function F4(){}function jh(w,h,H,O){return pN(w,O)||aN(w,h,H,O)}function pN(w,h){return w.editor.getModel(fQ(w,h))}function aN(w,h,H,O){return w.editor.createModel(h,H,O?fQ(w,O):void 0)}function fQ(w,h){return w.Uri.parse(h)}function dN({original:w,modified:h,language:H,originalLanguage:O,modifiedLanguage:A,originalModelPath:u,modifiedModelPath:W,keepCurrentOriginalModel:M=!1,keepCurrentModifiedModel:Q=!1,theme:R="light",loading:z="Loading...",options:X={},height:K="100%",width:I="100%",className:f,wrapperProps:C={},beforeMount:j=F4,onMount:rr=F4}){let[Pr,wr]=A0.useState(!1),[p,s]=A0.useState(!0),br=A0.useRef(null),m=A0.useRef(null),E=A0.useRef(null),t=A0.useRef(rr),D=A0.useRef(j),zr=A0.useRef(!1);tQ(()=>{let _=Nb.init();return _.then((d)=>(m.current=d)&&s(!1)).catch((d)=>d?.type!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>br.current?mr():_.cancel()}),z1(()=>{if(br.current&&m.current){let _=br.current.getOriginalEditor(),d=jh(m.current,w||"",O||H||"text",u||"");d!==_.getModel()&&_.setModel(d)}},[u],Pr),z1(()=>{if(br.current&&m.current){let _=br.current.getModifiedEditor(),d=jh(m.current,h||"",A||H||"text",W||"");d!==_.getModel()&&_.setModel(d)}},[W],Pr),z1(()=>{let _=br.current.getModifiedEditor();_.getOption(m.current.editor.EditorOption.readOnly)?_.setValue(h||""):h!==_.getValue()&&(_.executeEdits("",[{range:_.getModel().getFullModelRange(),text:h||"",forceMoveMarkers:!0}]),_.pushUndoStop())},[h],Pr),z1(()=>{br.current?.getModel()?.original.setValue(w||"")},[w],Pr),z1(()=>{let{original:_,modified:d}=br.current.getModel();m.current.editor.setModelLanguage(_,O||H||"text"),m.current.editor.setModelLanguage(d,A||H||"text")},[H,O,A],Pr),z1(()=>{m.current?.editor.setTheme(R)},[R],Pr),z1(()=>{br.current?.updateOptions(X)},[X],Pr);let Xr=A0.useCallback(()=>{if(!m.current)return;D.current(m.current);let _=jh(m.current,w||"",O||H||"text",u||""),d=jh(m.current,h||"",A||H||"text",W||"");br.current?.setModel({original:_,modified:d})},[H,h,A,w,O,u,W]),Rr=A0.useCallback(()=>{!zr.current&&E.current&&(br.current=m.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...X}),Xr(),m.current?.editor.setTheme(R),wr(!0),zr.current=!0)},[X,R,Xr]);A0.useEffect(()=>{Pr&&t.current(br.current,m.current)},[Pr]),A0.useEffect(()=>{!p&&!Pr&&Rr()},[p,Pr,Rr]);function mr(){let _=br.current?.getModel();M||_?.original?.dispose(),Q||_?.modified?.dispose(),br.current?.dispose()}return A0.default.createElement(nQ,{width:I,height:K,isEditorReady:Pr,loading:z,_ref:E,className:f,wrapperProps:C})}var sN=dN,wtg=eQ.memo(sN);function gZ(w){let h=N8.useRef();return N8.useEffect(()=>{h.current=w},[w]),h.current}var vZ=gZ,L8=new Map;function wZ({defaultValue:w,defaultLanguage:h,defaultPath:H,value:O,language:A,path:u,theme:W="light",line:M,loading:Q="Loading...",options:R={},overrideServices:z={},saveViewState:X=!0,keepCurrentModel:K=!1,width:I="100%",height:f="100%",className:C,wrapperProps:j={},beforeMount:rr=F4,onMount:Pr=F4,onChange:wr,onValidate:p=F4}){let[s,br]=Vg.useState(!1),[m,E]=Vg.useState(!0),t=Vg.useRef(null),D=Vg.useRef(null),zr=Vg.useRef(null),Xr=Vg.useRef(Pr),Rr=Vg.useRef(rr),mr=Vg.useRef(),_=Vg.useRef(O),d=vZ(u),hr=Vg.useRef(!1),vr=Vg.useRef(!1);tQ(()=>{let V=Nb.init();return V.then((Ar)=>(t.current=Ar)&&E(!1)).catch((Ar)=>Ar?.type!=="cancelation"&&console.error("Monaco initialization: error:",Ar)),()=>D.current?i():V.cancel()}),z1(()=>{let V=jh(t.current,w||O||"",h||A||"",u||H||"");V!==D.current?.getModel()&&(X&&L8.set(d,D.current?.saveViewState()),D.current?.setModel(V),X&&D.current?.restoreViewState(L8.get(u)))},[u],s),z1(()=>{D.current?.updateOptions(R)},[R],s),z1(()=>{!D.current||O===void 0||(D.current.getOption(t.current.editor.EditorOption.readOnly)?D.current.setValue(O):O!==D.current.getValue()&&(vr.current=!0,D.current.executeEdits("",[{range:D.current.getModel().getFullModelRange(),text:O,forceMoveMarkers:!0}]),D.current.pushUndoStop(),vr.current=!1))},[O],s),z1(()=>{let V=D.current?.getModel();V&&A&&t.current?.editor.setModelLanguage(V,A)},[A],s),z1(()=>{M!==void 0&&D.current?.revealLine(M)},[M],s),z1(()=>{t.current?.editor.setTheme(W)},[W],s);let Gr=Vg.useCallback(()=>{if(!(!zr.current||!t.current)&&!hr.current){Rr.current(t.current);let V=u||H,Ar=jh(t.current,O||w||"",h||A||"",V||"");D.current=t.current?.editor.create(zr.current,{model:Ar,automaticLayout:!0,...R},z),X&&D.current.restoreViewState(L8.get(V)),t.current.editor.setTheme(W),M!==void 0&&D.current.revealLine(M),br(!0),hr.current=!0}},[w,h,H,O,A,u,R,z,X,W,M]);Vg.useEffect(()=>{s&&Xr.current(D.current,t.current)},[s]),Vg.useEffect(()=>{!m&&!s&&Gr()},[m,s,Gr]),_.current=O,Vg.useEffect(()=>{s&&wr&&(mr.current?.dispose(),mr.current=D.current?.onDidChangeModelContent((V)=>{vr.current||wr(D.current.getValue(),V)}))},[s,wr]),Vg.useEffect(()=>{if(s){let V=t.current.editor.onDidChangeMarkers((Ar)=>{let Kr=D.current.getModel()?.uri;if(Kr&&Ar.find((Yr)=>Yr.path===Kr.path)){let Yr=t.current.editor.getModelMarkers({resource:Kr});p?.(Yr)}});return()=>{V?.dispose()}}return()=>{}},[s,p]);function i(){mr.current?.dispose(),K?X&&L8.set(u,D.current.saveViewState()):D.current.getModel()?.dispose(),D.current.dispose()}return Vg.default.createElement(nQ,{width:I,height:f,isEditorReady:s,loading:Q,_ref:zr,className:C,wrapperProps:j})}var bZ=wZ,hZ=cQ.memo(bZ),pQ=hZ;var th=ur(hg(),1);var P0=ur(rg(),1),lZ={log:"ls-log",warn:"ls-warn",error:"ls-error",info:"ls-info",success:"ls-success"},aQ=({entries:w,isRunning:h,onClear:H})=>{let[O,A]=th.useState(!1),u=th.useRef(null);th.useEffect(()=>{if(!O&&u.current)u.current.scrollTop=u.current.scrollHeight},[w,O]);let W=()=>{let M=w.filter((Q)=>Q.type!=="separator").map((Q)=>`[${Q.timestamp}] ${Q.type.toUpperCase()}: ${Q.message}`).join(`
`);navigator.clipboard.writeText(M).catch(()=>{})};return P0.jsxDEV("div",{className:`ls-console${O?" ls-collapsed":""}`,children:[P0.jsxDEV("div",{className:"ls-console-header",onClick:()=>A((M)=>!M),children:[P0.jsxDEV(mv,{size:12,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),P0.jsxDEV("span",{className:"ls-console-title",children:["Console",h?" — running…":w.length>0?` (${w.length})`:""]},void 0,!0,void 0,this),P0.jsxDEV("button",{className:"ls-icon-btn",onClick:(M)=>{M.stopPropagation(),W()},title:"Copy output",disabled:w.length===0,children:P0.jsxDEV(p1,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),P0.jsxDEV("button",{className:"ls-icon-btn",onClick:(M)=>{M.stopPropagation(),H()},title:"Clear console",disabled:w.length===0,children:P0.jsxDEV(B0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),O?P0.jsxDEV(J0,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this):P0.jsxDEV(X1,{size:12,style:{color:"var(--lumiverse-text-muted)"}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&P0.jsxDEV("div",{className:"ls-console-output",ref:u,children:w.length===0?P0.jsxDEV("div",{className:"ls-console-empty",children:h?"Running…":"No output yet. Click Run to execute the script."},void 0,!1,void 0,this):w.map((M,Q)=>M.type==="separator"?P0.jsxDEV("div",{className:"ls-entry-separator","aria-hidden":"true"},Q,!1,void 0,this):P0.jsxDEV("div",{className:`ls-entry ${lZ[M.type]??"ls-log"}`,children:[P0.jsxDEV("span",{className:"ls-entry-time",children:M.timestamp},void 0,!1,void 0,this),P0.jsxDEV("span",{className:"ls-entry-type",children:M.type.toUpperCase()},void 0,!1,void 0,this),P0.jsxDEV("span",{className:"ls-entry-msg",children:M.message},void 0,!1,void 0,this)]},Q,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var E0=ur(rg(),1),dQ=({bindings:w,activeContext:h,onAdd:H,onRemove:O})=>{let A=()=>{let{characterId:W,characterName:M}=h;if(!W)return;if(w.some((Q)=>Q.type==="character"&&Q.characterId===W))return;H({type:"character",characterId:W,displayName:M??W})},u=()=>{let{chatId:W,characterName:M}=h;if(!W)return;if(w.some((R)=>R.type==="chat"&&R.chatId===W))return;let Q=M?`${M} — ${W.slice(0,8)}`:W.slice(0,8);H({type:"chat",chatId:W,displayName:Q})};return E0.jsxDEV("div",{className:"ls-bindings",children:E0.jsxDEV("div",{className:"ls-bindings-row",children:[E0.jsxDEV(El,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),w.length===0?E0.jsxDEV("span",{className:"ls-bindings-global",children:"Runs globally"},void 0,!1,void 0,this):w.map((W,M)=>E0.jsxDEV("span",{className:"ls-binding-chip",children:[W.type==="character"?E0.jsxDEV(_h,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this):E0.jsxDEV(ih,{size:10,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),E0.jsxDEV("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:W.displayName},void 0,!1,void 0,this),E0.jsxDEV("button",{className:"ls-chip-remove",onClick:()=>O(M),title:"Remove binding",children:E0.jsxDEV(V0,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},M,!0,void 0,this)),E0.jsxDEV("button",{className:"ls-bindings-add",onClick:A,disabled:!h.characterId,title:h.characterId?"Bind to current character":"Open a chat first",children:[E0.jsxDEV(_h,{size:10},void 0,!1,void 0,this),"+char"]},void 0,!0,void 0,this),E0.jsxDEV("button",{className:"ls-bindings-add",onClick:u,disabled:!h.chatId,title:h.chatId?"Bind to current chat":"Open a chat first",children:[E0.jsxDEV(ih,{size:10},void 0,!1,void 0,this),"+chat"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)};var sQ=ur(hg(),1);var d0=ur(rg(),1),rz=[{label:"LumiScript",events:[{name:"ls:startup",description:"Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init."},{name:"ls:teardown",description:"Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'."}]},{label:"Chat",events:[{name:"MESSAGE_SENT",description:"A message was appended to the chat"},{name:"MESSAGE_EDITED",description:"A message was edited"},{name:"MESSAGE_DELETED",description:"A message was deleted"},{name:"MESSAGE_SWIPED",description:"A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators"},{name:"SWIPE_EDITED",description:"Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics"},{name:"CHARACTER_MESSAGE_RENDERED",description:"A character message finished rendering"},{name:"USER_MESSAGE_RENDERED",description:"A user message finished rendering"}]},{label:"Generation",events:[{name:"GENERATION_STARTED",description:"LLM generation started"},{name:"GENERATION_ENDED",description:"LLM generation completed"},{name:"GENERATION_STOPPED",description:"LLM generation was stopped"}]},{label:"Entities",events:[{name:"CHAT_CHANGED",description:"A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use SETTINGS_UPDATED (key=activeChatId) for open/close."},{name:"CHARACTER_EDITED",description:"A character card was saved"},{name:"CHARACTER_DELETED",description:"A character was deleted"},{name:"CHARACTER_DUPLICATED",description:"A character was duplicated"},{name:"PERSONA_CHANGED",description:"Active persona changed"}]},{label:"Settings",events:[{name:"SETTINGS_UPDATED",description:'A setting was updated. Chat navigation: data.key=="activeChatId", data.value=chatId (opened) or null (closed).'},{name:"PRESET_CHANGED",description:"Active prompt preset changed"},{name:"CONNECTION_PROFILE_LOADED",description:"A connection profile was activated"},{name:"WORLD_INFO_ACTIVATED",description:"World Info entries were activated"}]}],Wtg=rz.flatMap((w)=>w.events.map((h)=>h.name)),gz=({scriptId:w,triggers:h,sendToBackend:H})=>{let[O,A]=sQ.useState(!0),u=new Set(h),W=(M)=>{let Q=u.has(M)?h.filter((R)=>R!==M):[...h,M];H({type:"update_script",id:w,patch:{triggers:Q}})};return d0.jsxDEV("div",{className:`ls-triggers${O?" ls-triggers-collapsed":""}`,children:[d0.jsxDEV("div",{className:"ls-triggers-header",onClick:()=>A((M)=>!M),children:[d0.jsxDEV(G5,{size:11,style:{color:"var(--lumiverse-text-muted)",flexShrink:0}},void 0,!1,void 0,this),d0.jsxDEV("span",{className:"ls-triggers-title",children:"Events"},void 0,!1,void 0,this),u.size>0&&d0.jsxDEV("span",{className:"ls-triggers-count",children:u.size},void 0,!1,void 0,this),d0.jsxDEV("span",{style:{color:"var(--lumiverse-text-muted)"},children:O?d0.jsxDEV(J0,{size:12},void 0,!1,void 0,this):d0.jsxDEV(X1,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),!O&&d0.jsxDEV("div",{className:"ls-triggers-body",children:rz.map((M)=>d0.jsxDEV("div",{className:"ls-trigger-group",children:[d0.jsxDEV("span",{className:"ls-trigger-group-label",children:M.label},void 0,!1,void 0,this),d0.jsxDEV("div",{className:"ls-trigger-chips",children:M.events.map((Q)=>d0.jsxDEV("button",{className:`ls-trigger-chip${u.has(Q.name)?" ls-trigger-chip-active":""}`,onClick:()=>W(Q.name),title:Q.description,children:Q.name},Q.name,!1,void 0,this))},void 0,!1,void 0,this)]},M.label,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var vz=`
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
`;var lz=ur(hg(),1);function wz(w){return w.split("`").map((H,O)=>{if(O%2===1)return H;return H.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}).join("`")}function oZ(w){return w.split("`").map((O,A)=>{if(A%2===1)return O;return O.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\|/g,"\\|")}).join("`").replace(/\r?\n/g,"<br>")}function Uw(w,h){let H=`| ${w.join(" | ")} |`,O=`| ${w.map(()=>"---").join(" | ")} |`,A=h.map((u)=>`| ${u.map(oZ).join(" | ")} |`);return[H,O,...A].join(`
`)}function HZ(w){return w.optional&&!w.field.endsWith("?")?`${w.field}?`:w.field}function OZ(w){if(w==="silent")return"*silent*";if(w==="boolean")return'`"true" / "false"`';return"`string`"}function qZ(w){return w.aliases==="—"?"—":`\`${w.aliases}\``}function AZ(w){let h=w.perms.length===0&&!w.note?"*none*":w.perms.map((H)=>`\`${H}\``).join(", ");return w.note?`${h}${w.perms.length?" ":""}${w.note}`:h}function PZ(){return`## Lumiverse Events

${Uw(["Event","Group","Payload shape"],AP.map((h)=>[`\`${h.name}\``,h.group,`\`${h.payload}\``]))}`}function uZ(){return`## Permission Matrix

${PP.map((h)=>{let H=Uw(["Method","Required permissions"],h.rows.map((O)=>[`\`${O.method}\``,AZ(O)]));return`### ${h.group}

${H}`}).join(`

`)}`}function WZ(){let w=Uw(["Event","Payload fields","Emitted by"],uP.map((H)=>[`\`${H.name}\``,`\`${H.payload}\``,H.emittedBy])),h="The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.";return`## LumiScript Events

${w}

*The \`ls:\` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.*`}function MZ(){let w=WP.map((H)=>{let O=Uw(["Macro","Aliases","Returns","Description"],H.rows.map((u)=>[`\`${u.macro}\``,qZ(u),OZ(u.returns),u.desc])),A=[`### ${H.label}`];if(H.description)A.push(`*${H.description}*`);return A.push(O),A.join(`

`)}),h='Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';return`## LumiScript Macros

${w.join(`

`)}

*Character variable macros read from and write to the active character's store at \`variables/characters/<id>.json\` in user storage. They resolve to \`""\` when no character is active.*`}function GZ(){return`## Key Types

${MP.map((w)=>bz(w)).join(`

`)}`}function bz(w,h="###"){let H=wz(w.name),O=w.note?`*${wz(w.note)}*

`:"",A=Uw(["Field","Type","Description"],w.fields.map((u)=>[`\`${HZ(u)}\``,`\`${u.type}\``,u.desc]));return`${h} ${H}

${O}${A}`}function XZ(){return`## API Functions

${GP.map((h)=>{let H=Uw(["Method","Arguments","Description"],h.rows.map((O)=>[`\`${O.name}\``,O.args,O.desc]));return`### ${h.group}

${H}`}).join(`

`)}`}function YZ(){let h=Uw(["Method","Arguments","Description"],XP.map((A)=>[`\`${A.name}\``,A.args,A.desc])),H=Uw(["Method","Arguments","Description"],YP.map((A)=>[`\`${A.name}\``,A.args,A.desc])),O=JP.map((A)=>bz(A,"####")).join(`

`);return["## Built-in Libraries","","Built-in libraries are loaded via `script.require('ls:<name>')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).","","### ls:components","",h,"","### ls:council-prompt","",H,"","### Built-in types","",O].join(`
`)}function JZ(){return["## Script Packs","","**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.","","**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually."].join(`
`)}function QZ(){let h=`# LumiScript Reference

*Exported ${new Date().toISOString().slice(0,10)}*`,H=[PZ(),uZ(),WZ(),MZ(),GZ(),XZ(),YZ(),JZ()];return`${h}

---

${H.join(`

---

`)}
`}function hz(){let w=QZ(),H=`lumiscript-reference-${new Date().toISOString().slice(0,10)}.md`,O=new Blob([w],{type:"text/markdown;charset=utf-8"}),A=URL.createObjectURL(O),u=document.createElement("a");u.href=A,u.download=H,u.click(),URL.revokeObjectURL(A)}var F=ur(rg(),1),Lw=({icon:w,title:h,defaultOpen:H=!1,children:O})=>{let[A,u]=lz.useState(H);return F.jsxDEV("div",{className:"ls-ref-section",children:[F.jsxDEV("button",{className:"ls-ref-section-header",onClick:()=>u((W)=>!W),children:[F.jsxDEV("span",{className:"ls-ref-section-title",children:[w,h]},void 0,!0,void 0,this),A?F.jsxDEV(J0,{size:12},void 0,!1,void 0,this):F.jsxDEV(W5,{size:12},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A&&F.jsxDEV("div",{className:"ls-ref-section-body",children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},Mg=({children:w})=>F.jsxDEV("code",{className:"ls-ref-code",children:w},void 0,!1,void 0,this),zZ=({children:w})=>F.jsxDEV("span",{className:"ls-ref-perm",children:w},void 0,!1,void 0,this),RZ=()=>F.jsxDEV("span",{className:"ls-ref-perm ls-ref-perm-none",children:"none"},void 0,!1,void 0,this),KZ=()=>F.jsxDEV("span",{className:"ls-ref-muted",style:{fontStyle:"italic"},children:"silent"},void 0,!1,void 0,this),fh=({label:w,cols:h})=>F.jsxDEV("tr",{children:F.jsxDEV("td",{colSpan:h,className:"ls-ref-group-header",children:w},void 0,!1,void 0,this)},void 0,!1,void 0,this),AP=[{group:"LumiScript",name:"ls:startup",payload:'{ __event: "ls:startup" }'},{group:"LumiScript",name:"ls:teardown",payload:"{ reason: 'disabled' | 'deleted', scriptId, scriptName }"},{group:"Chat",name:"MESSAGE_SENT",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_EDITED",payload:"{ chatId, message }"},{group:"Chat",name:"MESSAGE_DELETED",payload:"{ chatId, messageId }"},{group:"Chat",name:"MESSAGE_SWIPED",payload:"{ chatId, message, action, swipeId, previousSwipeId? }"},{group:"Chat",name:"SWIPE_EDITED",payload:"{ chatId, message, previousSwipeId }"},{group:"Chat",name:"CHARACTER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Chat",name:"USER_MESSAGE_RENDERED",payload:"{ chatId, messageId }"},{group:"Generation",name:"GENERATION_STARTED",payload:"{ generationId, chatId, model }"},{group:"Generation",name:"GENERATION_ENDED",payload:"{ generationId, chatId, messageId, content }"},{group:"Generation",name:"GENERATION_STOPPED",payload:"{ generationId, chatId, content }"},{group:"Generation",name:"STREAM_TOKEN_RECEIVED",payload:"{ generationId, chatId, token }"},{group:"Entities",name:"CHAT_CHANGED",payload:"{ chatId }"},{group:"Entities",name:"CHARACTER_EDITED",payload:"{ id, character }"},{group:"Entities",name:"CHARACTER_DELETED",payload:"{ id }"},{group:"Entities",name:"CHARACTER_DUPLICATED",payload:"{ id, newId }"},{group:"Entities",name:"PERSONA_CHANGED",payload:"{ persona }"},{group:"Settings",name:"SETTINGS_UPDATED",payload:"{ key, value }"},{group:"Settings",name:"PRESET_CHANGED",payload:"{ presetId }"},{group:"Settings",name:"CONNECTION_PROFILE_LOADED",payload:"{ connectionId }"},{group:"Settings",name:"WORLD_INFO_ACTIVATED",payload:"{ entries }"},{group:"Tools",name:"TOOL_INVOCATION",payload:"{ toolName, requestId, args }"}],$Z=()=>{let w="";return F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Group"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Payload shape"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:AP.map((h)=>{let H=h.group!==w?h.group:"";return w=h.group,F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:H},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.name,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},PP=[{group:"Chat",rows:[{method:"api.chat.getMessages",perms:["chat_mutation"]},{method:"api.chat.sendMessage",perms:["chat_mutation"]},{method:"api.chat.editMessage",perms:["chat_mutation"]},{method:"api.chat.deleteMessage",perms:["chat_mutation"]},{method:"api.chat.getChatId",perms:[]},{method:"api.chat.getMetadata",perms:["chats"]},{method:"api.chat.setMetadata",perms:["chats"]},{method:"api.chat.inject",perms:["interceptor"]},{method:"api.chat.removeInjection",perms:[]},{method:"api.chat.getInjections",perms:[]},{method:"api.chat.clearInjections",perms:["interceptor"]},{method:"api.chat.clearAllInjections",perms:["interceptor"],note:"+ allowDangerous"},{method:"api.chat.setMessageHidden",perms:["chat_mutation"]},{method:"api.chat.setMessagesHidden",perms:["chat_mutation"]},{method:"api.chat.isMessageHidden",perms:["chat_mutation"]}]},{group:"LLM",rows:[{method:"api.llm.generate",perms:["generation"]},{method:"api.llm.generateStructured",perms:["generation"]},{method:"api.llm.generateWithTools",perms:["generation"]},{method:"api.llm.dryRun",perms:["generation"]}]},{group:"Variables / JSON / Utils",rows:[{method:"api.variables.*",perms:[]},{method:"api.json.*",perms:[]},{method:"api.utils.uuid / shortId / wait",perms:[]},{method:"api.utils.random.*",perms:[]},{method:"api.utils.template.*",perms:[]},{method:"api.utils.macros.resolve",perms:[]},{method:"api.utils.image.*",perms:[]},{method:"api.utils.http.*",perms:["cors_proxy"],note:"+ allowDangerous"}]},{group:"UI",rows:[{method:"api.ui.toast",perms:[]},{method:"api.ui.prompt",perms:[]},{method:"api.ui.confirm",perms:[]},{method:"api.ui.showModal",perms:[]},{method:"api.ui.showAdvancedModal",perms:["app_manipulation"]},{method:"api.ui.editText",perms:[]},{method:"api.ui.pushNotification",perms:["push_notification"]},{method:"api.ui.getPushStatus",perms:["push_notification"]},{method:"api.ui.createFloatWidget",perms:["ui_panels"]},{method:"api.ui.dom.*",perms:["app_manipulation"]}]},{group:"Files",rows:[{method:"api.files.user*",perms:[],note:"allowDangerous"},{method:"api.files.shared*",perms:[],note:"allowDangerous"},{method:"api.files.temp*",perms:["ephemeral_storage"],note:"+ allowDangerous"}]},{group:"Entity APIs",rows:[{method:"api.characters.*",perms:["characters"]},{method:"api.chats.*",perms:["chats"]},{method:"api.worldInfo.*",perms:["world_books"]},{method:"api.personas.*",perms:["personas"]}]},{group:"Tools & Broadcast",rows:[{method:"api.tools.*",perms:["tools"]},{method:"api.macros.*",perms:[]},{method:"api.broadcast.*",perms:[]},{method:"api.commands.*",perms:[]},{method:"api.events.*",perms:["event_tracking"]},{method:"api.tokens.*",perms:[]},{method:"api.db.*",perms:[]}]}],UZ=()=>F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Required permissions"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:PP.map((w)=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV(fh,{label:w.group,cols:2},`hdr-${w.group}`,!1,void 0,this),w.rows.map((h)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.method},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:[h.perms.length===0&&!h.note?F.jsxDEV(RZ,{},void 0,!1,void 0,this):null,h.perms.map((H)=>F.jsxDEV(zZ,{children:H},H,!1,void 0,this)),h.note?F.jsxDEV("span",{className:"ls-ref-muted",style:{marginLeft:h.perms.length?4:0},children:h.note},void 0,!1,void 0,this):null]},void 0,!0,void 0,this)]},h.method,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),uP=[{name:"ls:tool:registered",payload:"{ name, scriptId }",emittedBy:"api.tools.register()"},{name:"ls:tool:unregistered",payload:"{ name, scriptId }",emittedBy:"api.tools.unregister() / auto-cleanup"},{name:"ls:tool:invoked",payload:"{ name, args, result, scriptId, callMs, councilMember? }",emittedBy:"api.tools.invoke() + TOOL_INVOCATION handler"},{name:"ls:macro:registered",payload:"{ name, scriptId, mode: 'push' | 'pull' }",emittedBy:"api.macros.register()"},{name:"ls:macro:unregistered",payload:"{ name, scriptId }",emittedBy:"api.macros.unregister() / auto-cleanup"},{name:"ls:collection:created",payload:"{ name, scope, scriptId, path }",emittedBy:"api.db.collection()"},{name:"ls:collection:dropped",payload:"{ name, scope, scriptId, path, deletedCount }",emittedBy:"api.db.drop()"},{name:"ls:collection:inserted",payload:"{ name, scope, scriptId, id, record }",emittedBy:"collection.insert()"},{name:"ls:collection:updated",payload:"{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }",emittedBy:"collection.update() (only when count > 0)"},{name:"ls:collection:deleted",payload:"{ name, scope, scriptId, count, filterKind }",emittedBy:"collection.delete() / clear() (clear emits count=-1)"},{name:"ls:collection:size-warning",payload:"{ name, scope, scriptId, bytes }",emittedBy:"auto — collection exceeds 10 MB soft threshold"}],LZ=()=>F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Event"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Payload fields"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Emitted by"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:uP.map((w)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.payload},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.emittedBy},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),WP=[{label:"Presence",rows:[{macro:"{{lumiScriptActive}}",aliases:"—",returns:"boolean",desc:'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}'}]},{label:"Character Variables",description:"reads/writes the active character's variable store. Write operations are silent.",rows:[{macro:"{{getcvar::key}}",aliases:"{{getcharvar::key}}",returns:"string",desc:'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.'},{macro:"{{setcvar::key::value}}",aliases:"{{setcharvar::key::value}}",returns:"silent",desc:"Set a character-scoped variable to value."},{macro:"{{addcvar::key::n}}",aliases:"{{addcharvar::key::n}}",returns:"silent",desc:"Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric)."},{macro:"{{inccvar::key}}",aliases:"—",returns:"silent",desc:"Increment a character-scoped variable by 1."},{macro:"{{deccvar::key}}",aliases:"—",returns:"silent",desc:"Decrement a character-scoped variable by 1."},{macro:"{{hascvar::key}}",aliases:"{{hascharvar::key}}",returns:"boolean",desc:`Returns "true" if the variable exists in the active character's store, "false" otherwise.`},{macro:"{{deletecvar::key}}",aliases:"{{deletecharvar::key}}",returns:"silent",desc:"Delete a character-scoped variable."}]}],FZ=({type:w})=>{if(w==="silent")return F.jsxDEV(KZ,{},void 0,!1,void 0,this);if(w==="boolean")return F.jsxDEV(Mg,{children:'"true" / "false"'},void 0,!1,void 0,this);return F.jsxDEV(Mg,{children:"string"},void 0,!1,void 0,this)},BZ=()=>F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Macro"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Aliases"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Returns"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:WP.map((w)=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV(fh,{label:w.description?F.jsxDEV(F.Fragment,{children:[w.label," — ",F.jsxDEV("span",{className:"ls-ref-muted",style:{fontWeight:"normal"},children:w.description},void 0,!1,void 0,this)]},void 0,!0,void 0,this):w.label,cols:4},`hdr-${w.label}`,!1,void 0,this),w.rows.map((h)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.macro},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:h.aliases==="—"?F.jsxDEV("span",{className:"ls-ref-muted",children:"—"},void 0,!1,void 0,this):F.jsxDEV(Mg,{children:h.aliases},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{style:{whiteSpace:"nowrap"},children:F.jsxDEV(FZ,{type:h.returns},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},h.macro,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),MP=[{name:"ChatMessage",note:"Returned by api.chat.getMessages().",fields:[{field:"id",type:"string",optional:!1,desc:"Message identifier."},{field:"content",type:"string",optional:!1,desc:"Plain-text message content."},{field:"role",type:"'user' | 'assistant' | 'system'",optional:!1,desc:"Sender role."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata attached to the message."},{field:"swipeId",type:"number",optional:!1,desc:"Index of the active swipe variant. 0 when the message has no alternates."},{field:"swipes",type:"string[]",optional:!1,desc:"All swipe variants. swipes[swipeId] equals content."},{field:"swipeDates",type:"number[]",optional:!1,desc:"Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27)."},{field:"extra",type:"Record<string, unknown>",optional:!1,desc:"Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts."}]},{name:"GetMessagesOptions",note:"Passed to api.chat.getMessages(options?).",fields:[{field:"first?",type:"number",optional:!0,desc:"Return only the first N messages."},{field:"last?",type:"number",optional:!0,desc:"Return only the last N messages."}]},{name:"SendMessageOptions",note:"Passed to api.chat.sendMessage(content, options?).",fields:[{field:"role?",type:"'user' | 'assistant' | 'system'",optional:!0,desc:"Sender role. Default 'user'."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata to attach."}]},{name:"MessagePatch",note:"Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.",fields:[{field:"content?",type:"string",optional:!0,desc:"Replace the active swipe's content."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Replace the host-maintained metadata bag. Host-side merge semantics apply."},{field:"swipes?",type:"string[]",optional:!0,desc:"Replace the full swipes array. Length changes are expressible here."},{field:"swipeId?",type:"number",optional:!0,desc:"Navigate to a different swipe index. Can be used alone to cycle without rewriting content."},{field:"swipeDates?",type:"number[]",optional:!0,desc:"Replace per-swipe timestamps. Length should match swipes after the patch applies."},{field:"reasoning?",type:"{ text?, duration? }",optional:!0,desc:"Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null."}]},{name:"InjectOptions",note:"Passed to api.chat.inject(id, content, options?).",fields:[{field:"mode?",type:"'intercept' | 'context'",optional:!0,desc:"Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly."},{field:"role?",type:"'system' | 'user' | 'assistant'",optional:!0,desc:"Message role. Default 'system'."},{field:"depth?",type:"number",optional:!0,desc:"intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message."},{field:"ephemeral?",type:"boolean",optional:!0,desc:"Auto-remove after the next generation cycle. Default false."}]},{name:"InjectionInfo",note:"Returned by api.chat.getInjections().",fields:[{field:"id",type:"string",optional:!1,desc:"Injection identifier."},{field:"content",type:"string",optional:!1,desc:"Injected message content."},{field:"mode",type:"'intercept' | 'context'",optional:!1,desc:"Pipeline phase this injection targets."},{field:"role",type:"string",optional:!1,desc:"Message role."},{field:"depth",type:"number",optional:!1,desc:"Position from end of assembled array (intercept mode)."},{field:"ephemeral",type:"boolean",optional:!1,desc:"Whether the injection auto-removes after generation."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that created this injection."}]},{name:"ModalItem",note:"A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.",fields:[{field:"type: 'text'",type:"{ content: string; muted?: boolean }",optional:!1,desc:"A text block. muted: true renders in dim/muted colour."},{field:"type: 'heading'",type:"{ content: string }",optional:!1,desc:"A section heading."},{field:"type: 'key_value'",type:"{ label: string; value: string }",optional:!1,desc:"Label–value row (left label, right value)."},{field:"type: 'divider'",type:"{}",optional:!1,desc:"A horizontal separator. No extra fields."},{field:"type: 'card'",type:"{ items: ModalItem[] }",optional:!1,desc:"A themed card grouping child items (1 level deep recommended)."}]},{name:"ShowModalOptions",note:"Options for api.ui.showModal(items, options).",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels (default: 420). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels (default: 520). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false."}]},{name:"ModalResult",note:"Dismissal payload inside ModalHandle.result.",fields:[{field:"dismissedBy",type:"'user' | 'extension' | 'cleanup'",optional:!1,desc:"'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded."}]},{name:"ModalHandle",note:"Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.",fields:[{field:"openRequestId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Immediately available on the returned handle."},{field:"result",type:"Promise<ModalResult>",optional:!1,desc:"Resolves with dismissal reason when the modal closes."},{field:"close()",type:"Promise<void>",optional:!1,desc:"Programmatically dismiss the modal."}]},{name:"AdvancedModalOptions",note:"Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal header title. Required."},{field:"width?",type:"number",optional:!0,desc:"Width in pixels. Default: 420 (host). Clamped to viewport."},{field:"maxHeight?",type:"number",optional:!0,desc:"Max height in pixels. Default: 520 (host). Clamped to viewport."},{field:"persistent?",type:"boolean",optional:!0,desc:"When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work."}]},{name:"AdvancedModalDismissReason",note:"Reason a modal was dismissed. Passed to onDismiss handlers.",fields:[{field:"'user'",type:"literal",optional:!1,desc:"Close button, backdrop click, or Escape key."},{field:"'script'",type:"literal",optional:!1,desc:"The script called handle.dismiss()."},{field:"'teardown'",type:"literal",optional:!1,desc:"Script was disabled or deleted while the modal was open."}]},{name:"AdvancedModalHandle",note:"Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.",fields:[{field:"modalId",type:"string",optional:!1,desc:"UUID identifying this modal instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal."},{field:"dismissed",type:"boolean",optional:!1,desc:"True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the modal header title."},{field:"dismiss()",type:"() => void",optional:!1,desc:"Close the modal programmatically. Safe to call after dismissal (no-op)."},{field:"onDismiss(handler)",type:"(fn: (reason) => void) => () => void",optional:!1,desc:"Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason."}]},{name:"ContextMenuItem",note:"A single entry in api.ui.showContextMenu()`s items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable key returned when this item is selected. Required."},{field:"label",type:"string",optional:!1,desc:"Display text. Ignored when type === 'divider'."},{field:"type?",type:"'item' | 'divider'",optional:!0,desc:"Entry type. Default: 'item'."},{field:"disabled?",type:"boolean",optional:!0,desc:"Greyed out and not clickable."},{field:"danger?",type:"boolean",optional:!0,desc:"Rendered in red / danger style."},{field:"active?",type:"boolean",optional:!0,desc:"Highlighted to indicate current selection."}]},{name:"ShowContextMenuOptions",note:"Options for api.ui.showContextMenu().",fields:[{field:"position",type:"{ x: number; y: number }",optional:!1,desc:"Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler)."},{field:"items",type:"ContextMenuItem[]",optional:!1,desc:"Menu entries."}]},{name:"InputBarActionOptions",note:"Options for api.ui.registerInputBarAction().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required."},{field:"label",type:"string",optional:!1,desc:"Display label shown in the Extras popover row."},{field:"subtitle?",type:"string",optional:!0,desc:'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.'},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Takes precedence over iconSvg if both are set."},{field:"enabled?",type:"boolean",optional:!0,desc:"When false, the action is hidden from the popover. Default: true."}]},{name:"InputBarActionHandle",note:"Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.",fields:[{field:"actionId",type:"string",optional:!1,desc:"The action id (same as the id passed in options)."},{field:"setLabel(label)",type:"(string) => void",optional:!1,desc:"Update the display label. Safe to call after destroy (no-op)."},{field:"setSubtitle(subtitle?)",type:"(string | undefined) => void",optional:!1,desc:"Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy."},{field:"setEnabled(enabled)",type:"(boolean) => void",optional:!1,desc:"Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy."},{field:"onClick(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour)."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the action from the popover and clear all click handlers. Idempotent."}]},{name:"FloatWidgetOptions",note:"Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.",fields:[{field:"width",type:"number",optional:!1,desc:"Widget width in pixels. Required."},{field:"height",type:"number",optional:!1,desc:"Widget height in pixels. Required."},{field:"initialPosition?",type:"{ x: number; y: number }",optional:!0,desc:"Starting position in viewport coordinates. If omitted, the host applies its own default placement."},{field:"snapToEdge?",type:"boolean",optional:!0,desc:"Snap to the nearest screen edge after drag. Default: false."},{field:"tooltip?",type:"string",optional:!0,desc:"Hover tooltip text."},{field:"chromeless?",type:"boolean",optional:!0,desc:"Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false."}]},{name:"FloatWidgetHandle",note:"Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.",fields:[{field:"widgetId",type:"string",optional:!1,desc:"UUID identifying this widget instance. Available synchronously."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget."},{field:"moveTo(x, y)",type:"(number, number) => void",optional:!1,desc:"Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it."},{field:"getPosition()",type:"() => { x: number; y: number }",optional:!1,desc:"Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative)."},{field:"setVisible(visible)",type:"(boolean) => void",optional:!1,desc:"Show or hide the widget."},{field:"isVisible()",type:"() => boolean",optional:!1,desc:"Current cached visibility state."},{field:"onDragEnd(handler)",type:"(fn: (pos) => void) => () => void",optional:!1,desc:"Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops."}]},{name:"DrawerTabOptions",note:"Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required."},{field:"title",type:"string",optional:!1,desc:"Full display title. Shown in the panel header and the command palette listing. Required."},{field:"shortName?",type:"string",optional:!0,desc:"Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title."},{field:"description?",type:"string",optional:!0,desc:'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".'},{field:"keywords?",type:"string[]",optional:!0,desc:"Extra terms for command-palette fuzzy search. The extension name is always included automatically."},{field:"headerTitle?",type:"string",optional:!0,desc:"Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title."},{field:"iconSvg?",type:"string",optional:!0,desc:"Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream."},{field:"iconUrl?",type:"string",optional:!0,desc:"URL to an icon image. Mutually exclusive with iconSvg."}]},{name:"DrawerTabHandle",note:"Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",fields:[{field:"tabId",type:"string",optional:!1,desc:"The tab id (same as the id passed in options)."},{field:"root",type:"DOMHandle",optional:!1,desc:"DOMHandle bound to the tab's content container."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Update the full title (command palette + panel header)."},{field:"setShortName(shortName)",type:"(string) => void",optional:!1,desc:"Update the sidebar icon label."},{field:"setBadge(text)",type:"(string | null) => void",optional:!1,desc:"Show a badge next to the tab icon. Pass null to clear."},{field:"activate()",type:"() => void",optional:!1,desc:"Programmatically switch the drawer to this tab."},{field:"onActivate(handler)",type:"(fn: () => void) => () => void",optional:!1,desc:"Register an activation handler. Multiple handlers supported. Returns unsubscribe."},{field:"destroy()",type:"() => void",optional:!1,desc:"Remove the tab from the sidebar and detach all handlers. Idempotent."}]},{name:"DOMInjectOptions",note:"Options for api.ui.dom.inject(target, html, options?).",fields:[{field:"position?",type:"'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'",optional:!0,desc:"Insertion position relative to the target element. Default: 'beforeend'."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMMessageInjectOptions",note:"Options for api.ui.dom.injectAtMessage(messageId, html, options?).",fields:[{field:"position?",type:"'header' | 'footer'",optional:!0,desc:"Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate."}]},{name:"DOMHandle",note:"Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.",fields:[{field:"id",type:"string",optional:!1,desc:"Unique element ID (generated or from stable ID)."},{field:"update(html)",type:"void",optional:!1,desc:"Replace the inner HTML of the injected element."},{field:"remove()",type:"void",optional:!1,desc:"Remove the element from the DOM and detach all listeners."},{field:"on(event, handler, options?)",type:"() => void",optional:!1,desc:"Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function."},{field:"makeDraggable(handleSelector?)",type:"void",optional:!1,desc:"Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable."}]},{name:"DOMEventData",note:"Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.",fields:[{field:"type",type:"string",optional:!1,desc:"Event type (e.g. 'click', 'input', 'change')."},{field:"targetId?",type:"string",optional:!0,desc:"The id attribute of the event target element."},{field:"targetValue?",type:"string",optional:!0,desc:"The value property (for input/select elements)."},{field:"targetChecked?",type:"boolean",optional:!0,desc:"The checked property (for checkbox/radio elements)."},{field:"dataset?",type:"Record<string, string>",optional:!0,desc:"All data-* attributes on the event target."},{field:"detail?",type:"unknown",optional:!0,desc:"CustomEvent.detail (must be JSON-serializable)."},{field:"clientX?",type:"number",optional:!0,desc:"Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor."},{field:"clientY?",type:"number",optional:!0,desc:"Viewport Y coordinate. Same event families as clientX."}]},{name:"DOMListenOptions",note:"Options bag for DOMHandle.on(event, handler, options?).",fields:[{field:"preventDefault?",type:"boolean",optional:!0,desc:"When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false."}]},{name:"LLMMessage",note:"A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.",fields:[{field:"role",type:"'system' | 'user' | 'assistant'",optional:!1,desc:"Message sender role."},{field:"content",type:"string",optional:!1,desc:"Message text content."}]},{name:"LLMOptions",note:"Resolution order: connectionId → connectionName → provider + model → active user connection.",fields:[{field:"connectionId?",type:"string",optional:!0,desc:"Connection profile ID. Takes precedence over all other options."},{field:"connectionName?",type:"string",optional:!0,desc:"Human-readable name (case-insensitive). Ignored when connectionId is set."},{field:"provider?",type:"LLMProvider",optional:!0,desc:'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.'},{field:"model?",type:"string",optional:!0,desc:"Model identifier. Used with provider for direct calls."},{field:"temperature?",type:"number",optional:!0,desc:"Override temperature (0–2)."},{field:"maxTokens?",type:"number",optional:!0,desc:"Override max tokens."},{field:"parallelToolCalls?",type:"boolean",optional:!0,desc:"When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use."},{field:"signal?",type:"AbortSignal",optional:!0,desc:"Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races)."}]},{name:"DryRunOptions",note:"Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat to assemble the prompt for. Defaults to the active chat."},{field:"connectionId?",type:"string",optional:!0,desc:"Override the connection profile used for assembly."},{field:"personaId?",type:"string",optional:!0,desc:"Override the persona used for assembly."},{field:"presetId?",type:"string",optional:!0,desc:"Override the generation preset."},{field:"generationType?",type:"'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'",optional:!0,desc:"Override generation type. Default 'normal'."},{field:"parameters?",type:"Record<string, unknown>",optional:!0,desc:"Override sampler parameters."}]},{name:"LLMRawResult",note:"Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.",fields:[{field:"content",type:"string",optional:!1,desc:"Text generated by the LLM. Empty string when tool_calls is present."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Function calls requested by the LLM. When present, content is typically empty."}]},{name:"LLMRawResultStructured<T>",note:"Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.",fields:[{field:"content?",type:"T",optional:!0,desc:"Final step: JSON-parsed and Zod-validated result typed as T."},{field:"tool_calls?",type:"ToolCall[]",optional:!0,desc:"Intermediate steps: function calls requested by the LLM. When present, content is absent."}]},{name:"ToolCall",note:"A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool name as given in the schema."},{field:"args",type:"Record<string, unknown>",optional:!1,desc:"Parsed arguments as returned by the LLM."},{field:"call_id",type:"string",optional:!1,desc:"Provider call ID (Anthropic id, OpenAI id, or synthetic UUID)."}]},{name:"DryRunResult",note:"Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.",fields:[{field:"messages",type:"LLMMessage[]",optional:!1,desc:"The fully assembled message array."},{field:"breakdown",type:"DryRunBlock[]",optional:!1,desc:"Ordered prompt composition blocks."},{field:"parameters",type:"Record<string, unknown>",optional:!1,desc:"Final merged sampler parameters."},{field:"model",type:"string",optional:!1,desc:"Resolved model identifier."},{field:"provider",type:"string",optional:!1,desc:"Resolved provider identifier."},{field:"tokenCount?",type:"DryRunTokenCount",optional:!0,desc:"Per-block token counts. Present only if a tokenizer is configured."},{field:"worldInfoStats?",type:"WorldInfoActivationStats",optional:!0,desc:"World info activation statistics."},{field:"memoryStats?",type:"DryRunMemoryStats",optional:!0,desc:"Long-term memory retrieval statistics."}]},{name:"DryRunBlock",note:"A single prompt composition block inside DryRunResult.breakdown.",fields:[{field:"type",type:"string",optional:!1,desc:'Block type (e.g. "block", "chat_history", "world_info", "authors_note").'},{field:"name",type:"string",optional:!1,desc:"Human-readable block name."},{field:"role?",type:"string",optional:!0,desc:"Message role for this block."},{field:"content?",type:"string",optional:!0,desc:"Block text content."},{field:"messageCount?",type:"number",optional:!0,desc:"Number of messages (for chat_history blocks)."},{field:"preCountedTokens?",type:"number",optional:!0,desc:"Pre-computed token estimate."},{field:"excludeFromTotal?",type:"boolean",optional:!0,desc:"Whether this block is excluded from the token total."}]},{name:"DryRunTokenCount",note:"Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count across all blocks."},{field:"breakdown",type:"Array",optional:!1,desc:"Per-block breakdown: [{ name, type, tokens, role? }]."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Tokenizer identifier used, or null."},{field:"tokenizerName",type:"string | null",optional:!1,desc:"Human-readable tokenizer name, or null."}]},{name:"WorldInfoActivationStats",note:"World info activation statistics inside DryRunResult.worldInfoStats.",fields:[{field:"totalCandidates",type:"number",optional:!1,desc:"Total number of WI entries evaluated."},{field:"activatedBeforeBudget",type:"number",optional:!1,desc:"Entries activated before budget enforcement."},{field:"activatedAfterBudget",type:"number",optional:!1,desc:"Entries that survived budget enforcement."},{field:"evictedByBudget",type:"number",optional:!1,desc:"Entries removed due to token budget."},{field:"evictedByMinPriority",type:"number",optional:!1,desc:"Entries removed due to minimum priority threshold."},{field:"estimatedTokens",type:"number",optional:!1,desc:"Total token estimate for activated entries."},{field:"recursionPassesUsed",type:"number",optional:!1,desc:"Number of recursive activation passes performed."}]},{name:"DryRunMemoryStats",note:"Long-term memory retrieval statistics inside DryRunResult.memoryStats.",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is configured and active."},{field:"chunksRetrieved",type:"number",optional:!1,desc:"Number of memory chunks returned by vector search."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization (results may be incomplete if > 0)."},{field:"injectionMethod",type:"'macro' | 'fallback' | 'disabled'",optional:!1,desc:"How memories are injected into the prompt."},{field:"queryPreview",type:"string",optional:!1,desc:"The query string used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"HttpRequestOptions",note:"Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.",fields:[{field:"method?",type:"'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'",optional:!0,desc:"HTTP method. Default depends on the helper used."},{field:"headers?",type:"Record<string, string>",optional:!0,desc:"Request headers."},{field:"body?",type:"string",optional:!0,desc:"Request body (string). Use JSON.stringify for JSON payloads."},{field:"timeout?",type:"number",optional:!0,desc:"Request timeout in milliseconds."}]},{name:"HttpResponse",note:"Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.",fields:[{field:"status",type:"number",optional:!1,desc:"HTTP status code (e.g. 200, 404)."},{field:"statusText",type:"string",optional:!1,desc:'HTTP status text (e.g. "OK", "Not Found").'},{field:"headers",type:"Record<string, string>",optional:!1,desc:"Response headers."},{field:"body",type:"string",optional:!1,desc:"Response body as a string. Use JSON.parse for JSON responses."}]},{name:"TempWriteOptions",note:"Passed to api.files.tempWrite(path, data, options?).",fields:[{field:"ttlMs?",type:"number",optional:!0,desc:"Time-to-live in milliseconds. If omitted the file persists until deleted or restart."}]},{name:"FileStatResult",note:"Returned by api.files.sharedStat(path).",fields:[{field:"exists",type:"boolean",optional:!1,desc:"Whether the path exists."},{field:"isFile",type:"boolean",optional:!1,desc:"Whether the path is a file."},{field:"isDirectory",type:"boolean",optional:!1,desc:"Whether the path is a directory."},{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"modifiedAt",type:"string",optional:!1,desc:"ISO 8601 timestamp of last modification."}]},{name:"TempStatResult",note:"Returned by api.files.tempStat(path).",fields:[{field:"sizeBytes",type:"number",optional:!1,desc:"File size in bytes."},{field:"createdAt",type:"string",optional:!1,desc:"ISO 8601 creation timestamp."},{field:"expiresAt?",type:"string",optional:!0,desc:"ISO 8601 expiration timestamp. Absent if no TTL was set."}]},{name:"Character",note:"Returned by api.characters.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Character UUID."},{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description",type:"string",optional:!1,desc:"Character description."},{field:"personality",type:"string",optional:!1,desc:"Personality summary."},{field:"scenario",type:"string",optional:!1,desc:"Scenario / setting."},{field:"firstMessage",type:"string",optional:!1,desc:"Opening message / greeting."},{field:"systemPrompt",type:"string",optional:!1,desc:"Character-level system prompt."},{field:"postHistoryInstructions",type:"string",optional:!1,desc:"Instructions appended after chat history."},{field:"tags",type:"string[]",optional:!1,desc:"Searchable tags."},{field:"alternateGreetings",type:"string[]",optional:!1,desc:"Additional greeting variants."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"worldBookIds",type:"string[]",optional:!1,desc:"World book IDs attached to this character."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"CharacterCreateInput",note:"Passed to api.characters.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"World book IDs to attach. Pass [] to detach all. Omit to leave unchanged."}]},{name:"CharacterUpdateInput",note:"Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.",fields:[{field:"name",type:"string",optional:!0,desc:"Character name."},{field:"description?",type:"string",optional:!0,desc:"Character description."},{field:"personality?",type:"string",optional:!0,desc:"Personality summary."},{field:"scenario?",type:"string",optional:!0,desc:"Scenario / setting."},{field:"firstMessage?",type:"string",optional:!0,desc:"Opening message."},{field:"systemPrompt?",type:"string",optional:!0,desc:"Character-level system prompt."},{field:"postHistoryInstructions?",type:"string",optional:!0,desc:"Post-history instructions."},{field:"tags?",type:"string[]",optional:!0,desc:"Searchable tags."},{field:"alternateGreetings?",type:"string[]",optional:!0,desc:"Additional greeting variants."},{field:"creator?",type:"string",optional:!0,desc:"Creator name / attribution."},{field:"worldBookIds?",type:"string[]",optional:!0,desc:"Replace world book attachments. Pass [] to detach all."}]},{name:"ChatSession",note:"Returned by api.chats.get / getActive / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Chat session UUID."},{field:"characterId",type:"string",optional:!1,desc:"UUID of the associated character."},{field:"name",type:"string",optional:!1,desc:"Chat session title."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata)."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"ChatSessionUpdateInput",note:"Passed to api.chats.update(id, input).",fields:[{field:"name?",type:"string",optional:!0,desc:"New chat session title."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Metadata to merge in (replaces entire metadata object)."}]},{name:"ChatMemoryChunk",note:"A single memory chunk inside ChatMemoryResult.chunks.",fields:[{field:"content",type:"string",optional:!1,desc:"Chunk text (concatenated messages from a conversation segment)."},{field:"score",type:"number",optional:!1,desc:"Cosine similarity score (lower = more similar to the query)."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Chunk metadata (may include startIndex, endIndex, etc.)."}]},{name:"ChatMemoryResult",note:"Returned by api.chats.getMemories().",fields:[{field:"enabled",type:"boolean",optional:!1,desc:"Whether long-term memory is active. When false, all other fields are empty/zero."},{field:"chunks",type:"ChatMemoryChunk[]",optional:!1,desc:"Retrieved memory chunks, sorted by relevance."},{field:"formatted",type:"string",optional:!1,desc:"Pre-formatted output using the user's memory template. Ready to inject directly."},{field:"count",type:"number",optional:!1,desc:"Number of chunks returned."},{field:"chunksAvailable",type:"number",optional:!1,desc:"Total vectorized chunks available."},{field:"chunksPending",type:"number",optional:!1,desc:"Chunks awaiting vectorization. Results may be incomplete if > 0."},{field:"queryPreview",type:"string",optional:!1,desc:"The query used for the vector search."},{field:"settingsSource",type:"'global' | 'per_chat'",optional:!1,desc:"Whether memory settings come from global or per-chat config."}]},{name:"WorldInfo",note:"A world book header. Returned by api.worldInfo.get / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"World book UUID."},{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description",type:"string",optional:!1,desc:"World book description."},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"WorldInfoCreateInput",note:"Passed to api.worldInfo.create(input).",fields:[{field:"name",type:"string",optional:!1,desc:"World book name."},{field:"description?",type:"string",optional:!0,desc:"World book description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"WorldInfoUpdateInput",note:"Passed to api.worldInfo.update(ref, input). All fields optional.",fields:[{field:"name?",type:"string",optional:!0,desc:"New world book name."},{field:"description?",type:"string",optional:!0,desc:"New description."},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"New metadata (replaces entire object)."}]},{name:"WorldInfoEntry",note:"A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.",fields:[{field:"id",type:"string",optional:!1,desc:"Entry UUID."},{field:"worldBookId",type:"string",optional:!1,desc:"Parent world book UUID."},{field:"content",type:"string",optional:!1,desc:"Entry text content injected into the prompt."},{field:"key",type:"string[]",optional:!1,desc:"Primary trigger keywords."},{field:"keysecondary",type:"string[]",optional:!1,desc:"Secondary trigger keywords (selective logic applies)."},{field:"position",type:"number",optional:!1,desc:"Injection position (0=WI Before, 1=WI After, 4=at depth)."},{field:"depth",type:"number",optional:!1,desc:"Injection depth from end of chat history."},{field:"priority",type:"number",optional:!1,desc:"Activation priority (higher = evicted last)."},{field:"constant",type:"boolean",optional:!1,desc:"Always active regardless of keyword matches."},{field:"disabled",type:"boolean",optional:!1,desc:"Entry is disabled and will not activate."},{field:"probability",type:"number",optional:!1,desc:"Activation probability (0–100) when useProbability is true."},{field:"selective",type:"boolean",optional:!1,desc:"Requires secondary key match when true."}]},{name:"WorldInfoEntryInput",note:"Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.",fields:[{field:"content?",type:"string",optional:!0,desc:"Entry text content."},{field:"key?",type:"string[]",optional:!0,desc:"Primary trigger keywords."},{field:"keysecondary?",type:"string[]",optional:!0,desc:"Secondary trigger keywords."},{field:"position?",type:"number",optional:!0,desc:"Injection position."},{field:"depth?",type:"number",optional:!0,desc:"Injection depth."},{field:"priority?",type:"number",optional:!0,desc:"Activation priority."},{field:"constant?",type:"boolean",optional:!0,desc:"Always active flag."},{field:"disabled?",type:"boolean",optional:!0,desc:"Disable this entry."},{field:"probability?",type:"number",optional:!0,desc:"Activation probability (0–100)."},{field:"selective?",type:"boolean",optional:!0,desc:"Require secondary key match."},{field:"(+ more)",type:"—",optional:!0,desc:"Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover."}]},{name:"ActivatedWorldInfoEntry",note:"Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.",fields:[{field:"(all WorldInfoEntry fields)",type:"—",optional:!1,desc:"All WorldInfoEntry fields are present."},{field:"source",type:"'keyword' | 'vector'",optional:!1,desc:"How this entry was activated."},{field:"score?",type:"number",optional:!0,desc:"Cosine similarity score for vector-activated entries. Absent for keyword-activated entries."}]},{name:"Persona",note:"Returned by api.personas.get / getDefault / getActive / create / update.",fields:[{field:"id",type:"string",optional:!1,desc:"Persona UUID."},{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title",type:"string",optional:!1,desc:"Short tagline shown in the persona picker."},{field:"description",type:"string",optional:!1,desc:"Persona description."},{field:"imageId",type:"string | null",optional:!1,desc:"Avatar image ID. Null if no avatar."},{field:"attachedWorldBookId",type:"string | null",optional:!1,desc:"World book attached to this persona. Null if none."},{field:"folder",type:"string",optional:!1,desc:"Organisational folder label."},{field:"isDefault",type:"boolean",optional:!1,desc:"Whether this is the default persona."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata",type:"Record<string, unknown>",optional:!1,desc:"Arbitrary metadata."},{field:"createdAt",type:"number",optional:!1,desc:"Creation timestamp (Unix ms)."},{field:"updatedAt",type:"number",optional:!1,desc:"Last update timestamp (Unix ms)."}]},{name:"PersonaCreateInput",note:"Passed to api.personas.create(input). Only name is required.",fields:[{field:"name",type:"string",optional:!1,desc:"Persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata."}]},{name:"PersonaUpdateInput",note:"Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.",fields:[{field:"name?",type:"string",optional:!0,desc:"New persona name."},{field:"title?",type:"string",optional:!0,desc:"Short tagline."},{field:"description?",type:"string",optional:!0,desc:"Persona description."},{field:"folder?",type:"string",optional:!0,desc:"Organisational folder label."},{field:"isDefault?",type:"boolean",optional:!0,desc:"Set as default persona (clears previous default)."},{field:"attachedWorldBookId?",type:"string",optional:!0,desc:"World book UUID to attach."},{field:"subjectivePronoun?",type:"string",optional:!0,desc:'Subjective pronoun (e.g. "he", "she", "they").'},{field:"objectivePronoun?",type:"string",optional:!0,desc:'Objective pronoun (e.g. "him", "her", "them").'},{field:"possessivePronoun?",type:"string",optional:!0,desc:'Possessive pronoun (e.g. "his", "her", "their").'},{field:"metadata?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary metadata (replaces entire object)."}]},{name:"ToolDefinition",note:"Passed to api.tools.register(name, def, handler).",fields:[{field:"display_name",type:"string",optional:!1,desc:"Human-readable name shown in the Lumiverse Council tools list."},{field:"description",type:"string",optional:!1,desc:"Description for the LLM — explains what the tool does and when to call it."},{field:"parameters?",type:"object",optional:!0,desc:'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.'},{field:"council_eligible?",type:"boolean",optional:!0,desc:"When true, the tool appears in the Council tools list and can be assigned to Council members. Default false."}]},{name:"ToolInvocationArgs",note:"Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.",fields:[{field:"context?",type:"string",optional:!0,desc:"Formatted chat context provided by Lumiverse (character info, world info, recent messages)."},{field:"__userId?",type:"string",optional:!0,desc:"User ID of the invoking user. Use for scoped api.* operations inside the handler."},{field:"__deadlineMs?",type:"number",optional:!0,desc:"Timestamp (ms) by which the handler must return a result."},{field:"[key]",type:"unknown",optional:!0,desc:"Tool-specific parameters from the registration schema are available as additional fields."}]},{name:"ToolInvocationContext",note:"Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.",fields:[{field:"requestId?",type:"string",optional:!0,desc:"Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs."},{field:"councilMember?",type:"CouncilMemberContext",optional:!0,desc:"Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts."}]},{name:"CouncilMemberContext",note:"Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.",fields:[{field:"memberId",type:"string",optional:!1,desc:"Unique Council member id (Council settings row id)."},{field:"itemId",type:"string",optional:!1,desc:"Source Lumia item id this member is backed by."},{field:"packId",type:"string",optional:!1,desc:"Pack id the Lumia item lives in."},{field:"packName",type:"string",optional:!1,desc:"Pack name the Lumia item lives in."},{field:"name",type:"string",optional:!1,desc:"Display name of the Lumia item (also used as the member name)."},{field:"role",type:"string",optional:!1,desc:'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").'},{field:"chance",type:"number",optional:!1,desc:"Probability (0–100) that this member participates in each generation."},{field:"avatarUrl",type:"string | null",optional:!1,desc:`Relative URL to the member's avatar (e.g. "/api/v1/images/{id}"), or null.`},{field:"definition",type:"string",optional:!1,desc:'Lumia "definition" field — physical/identity description.'},{field:"personality",type:"string",optional:!1,desc:'Lumia "personality" field.'},{field:"behavior",type:"string",optional:!1,desc:'Lumia "behavior" field — behavioural patterns.'},{field:"genderIdentity",type:"0 | 1 | 2",optional:!1,desc:"Gender identity marker (0=unspecified, 1=feminine, 2=masculine)."}]},{name:"RegisteredToolInfo",note:"Returned by api.tools.list(). A serialisable snapshot of a registered tool.",fields:[{field:"name",type:"string",optional:!1,desc:"Tool identifier (bare name, no prefix)."},{field:"display_name",type:"string",optional:!1,desc:"Human-readable name."},{field:"description",type:"string",optional:!1,desc:"LLM-facing description."},{field:"parameters?",type:"object",optional:!0,desc:"JSON Schema for the tool's input parameters."},{field:"council_eligible",type:"boolean",optional:!1,desc:"Whether the tool can be assigned to Council members."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the script that registered this tool."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the script that registered this tool."}]},{name:"MacroDefinition",note:"Passed to api.macros.register(name, def, handler?).",fields:[{field:"description",type:"string",optional:!1,desc:"Human-readable description shown in preset editors and macro browsers."},{field:"category?",type:"string",optional:!0,desc:"Category label. Default: 'extension:lumiscript:user'."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Hint for value-type coercion on resolution. Default string."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema shown to preset authors."}]},{name:"MacroContext",note:"Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.",fields:[{field:"name",type:"string",optional:!1,desc:"The bare macro name (no `{{}}`, no arguments)."},{field:"args",type:"string[]",optional:!1,desc:"Argument tokens parsed from the macro invocation."},{field:"env?",type:"{ character?, chat?, names?, variables?, … }",optional:!0,desc:"Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it)."},{field:"isScoped?",type:"boolean",optional:!0,desc:"True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}})."},{field:"body?",type:"string",optional:!0,desc:"Body text for scoped macros."}]},{name:"RegisteredMacroInfo",note:"Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).",fields:[{field:"name",type:"string",optional:!1,desc:"Macro identifier."},{field:"description",type:"string",optional:!1,desc:"Description as supplied at registration."},{field:"category",type:"string",optional:!1,desc:"Category label. User-registered macros default to `extension:lumiscript:user`."},{field:"returnType?",type:"'string'|'integer'|'number'|'boolean'",optional:!0,desc:"Return-type hint."},{field:"args?",type:"Array<{ name, description?, required? }>",optional:!0,desc:"Argument schema."},{field:"mode",type:"'push' | 'pull'",optional:!1,desc:"`push` when registered without a handler; `pull` when handler-backed."},{field:"lastValue?",type:"string",optional:!0,desc:"Most recent value pushed via updateValue. Only meaningful in push mode."},{field:"scriptId",type:"string",optional:!1,desc:"ID of the owning script."},{field:"scriptName",type:"string",optional:!1,desc:"Name of the owning script."}]},{name:"DbScope",note:"Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.",fields:[{field:"'script'",type:"'script'",optional:!1,desc:"Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present)."},{field:"'character'",type:"'character'",optional:!1,desc:"Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character."},{field:"'chat'",type:"'chat'",optional:!1,desc:"Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat."}]},{name:"CollectionOpts",note:"Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.",fields:[{field:"scope?",type:"DbScope",optional:!0,desc:"Scope of the collection. Defaults to 'script'."},{field:"schema?",type:"ZodLike<T>",optional:!0,desc:"Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration."}]},{name:"DbRecord",note:"Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.",fields:[{field:"id",type:"string",optional:!1,desc:"UUID v4 auto-assigned at insert (overridable by caller)."},{field:"createdAt",type:"number",optional:!1,desc:"Epoch ms — set once at insert. Immutable."},{field:"updatedAt",type:"number",optional:!1,desc:"Epoch ms — bumped to Date.now() on every successful update."},{field:"[key: string]",type:"unknown",optional:!1,desc:"User-supplied fields — anything JSON-serializable."}]},{name:"DbFilter",note:"Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.",fields:[{field:"undefined",type:"undefined",optional:!1,desc:'Matches all records. Used as sugar for "operate on everything".'},{field:"function",type:"(record: T) => boolean",optional:!1,desc:"Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate."},{field:"object (literal)",type:"Partial<T>",optional:!1,desc:"Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify."},{field:"object (envelope)",type:"{ $op: value, ... }",optional:!1,desc:'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.'}]},{name:"EventTrackOptions",note:"Options for api.events.track().",fields:[{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Severity level (default: info)."},{field:"chatId?",type:"string",optional:!0,desc:"Associate with a specific chat (defaults to active chat)."},{field:"retentionDays?",type:"number",optional:!0,desc:"Auto-expire after this many days."}]},{name:"EventQueryFilter",note:"Filter for api.events.query() and api.events.replay().",fields:[{field:"eventName?",type:"string",optional:!0,desc:"Filter by event name."},{field:"chatId?",type:"string",optional:!0,desc:"Filter by chat."},{field:"since?",type:"string",optional:!0,desc:"ISO 8601 — only events after this timestamp."},{field:"until?",type:"string",optional:!0,desc:"ISO 8601 — only events before this timestamp."},{field:"level?",type:"'debug'|'info'|'warn'|'error'",optional:!0,desc:"Filter by severity level."},{field:"limit?",type:"number",optional:!0,desc:"Maximum number of results."}]},{name:"EventRecord",note:"Returned by api.events.query() and api.events.replay().",fields:[{field:"id",type:"string",optional:!1,desc:"Unique event ID."},{field:"ts",type:"string",optional:!1,desc:"ISO 8601 timestamp."},{field:"eventName",type:"string",optional:!1,desc:"Name of the tracked event."},{field:"level",type:"'debug'|'info'|'warn'|'error'",optional:!1,desc:"Severity level."},{field:"chatId?",type:"string",optional:!0,desc:"Chat this event was associated with."},{field:"payload?",type:"Record<string, unknown>",optional:!0,desc:"Arbitrary event data."}]},{name:"MacrosResolveOptions",note:"Options for api.utils.macros.resolve(template, options?).",fields:[{field:"chatId?",type:"string",optional:!0,desc:"Chat ID for context-sensitive macros. Defaults to the active chat."},{field:"characterId?",type:"string",optional:!0,desc:"Character ID for character macros. Inferred from active chat if omitted."},{field:"commit?",type:"boolean",optional:!0,desc:"When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true."}]},{name:"MacrosResolveResult",note:"Returned by api.utils.macros.resolve().",fields:[{field:"text",type:"string",optional:!1,desc:"Resolved template text."},{field:"diagnostics",type:"Array<{ message, offset, length }>",optional:!1,desc:"Diagnostics from the macro engine (parse errors, unknown macros, etc.)."}]},{name:"TokenCountOptions",note:"Options for api.tokens.count* methods.",fields:[{field:"model?",type:"string",optional:!0,desc:"Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set."},{field:"modelSource?",type:"'main' | 'sidecar'",optional:!0,desc:"Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model."}]},{name:"TokenCountResult",note:"Returned by api.tokens.count* methods.",fields:[{field:"totalTokens",type:"number",optional:!1,desc:"Total token count."},{field:"model",type:"string",optional:!1,desc:"Model ID actually used to resolve the tokenizer."},{field:"modelSource",type:"'main' | 'sidecar' | 'explicit'",optional:!1,desc:"Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override."},{field:"tokenizerId",type:"string | null",optional:!1,desc:"Null when no exact tokenizer match was found and an approximate fallback was used."},{field:"tokenizerName",type:"string",optional:!1,desc:"Human-readable tokenizer name (empty string when approximate)."},{field:"approximate",type:"boolean",optional:!1,desc:"True when Lumiverse fell back to its approximate char/4 heuristic."}]},{name:"CharacterAvatarUpload",note:"Payload for api.characters.setAvatar(id, avatar).",fields:[{field:"data",type:"Uint8Array",optional:!1,desc:"Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc."},{field:"filename?",type:"string",optional:!0,desc:"Optional filename — preserves the file extension when stored."},{field:"mimeType?",type:"string",optional:!0,desc:"Optional content type. Defaults to 'image/png' on the host side."}]}],NZ=()=>F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:MP.map((w)=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV("tr",{children:F.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&F.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((h)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),GP=[{group:"api.chat",rows:[{name:"getMessages",args:"options?",desc:"Get messages in the current chat. Pass { last: N } for the N most recent."},{name:"sendMessage",args:"content, options?",desc:"Append a new message. Options: role, metadata."},{name:"editMessage",args:"id, contentOrPatch",desc:"Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED."},{name:"deleteMessage",args:"id",desc:"Delete a message by ID."},{name:"getChatId",args:"—",desc:"Return the active chat ID, or null."},{name:"getMetadata",args:"key",desc:"Get a metadata value from the current chat."},{name:"setMetadata",args:"key, value",desc:"Set a metadata key (read-modify-write)."},{name:"inject",args:"id, content, options?",desc:"Register a prompt injection. Options: mode, role, depth, ephemeral."},{name:"removeInjection",args:"id",desc:"Remove one injection by ID."},{name:"getInjections",args:"—",desc:"List all active injections across all scripts."},{name:"clearInjections",args:"—",desc:"Remove all injections from this script."},{name:"clearAllInjections",args:"—",desc:"Remove ALL injections across all scripts."}]},{group:"api.llm",rows:[{name:"generate",args:"messages, options?",desc:"Generate a text response from the LLM."},{name:"generateStructured",args:"messages, schema, options?",desc:"Generate and parse a structured JSON response against a Zod or JSON Schema."},{name:"generateWithTools",args:"messages, tools, options?, schema?",desc:"Generate with tool schemas. Returns text or function calls for an agentic loop."},{name:"dryRun",args:"options?",desc:"Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats."}]},{group:"api.variables.local / .global / .character",rows:[{name:"get",args:"key, defaultValue?",desc:"Get a variable. Returns defaultValue if the key does not exist."},{name:"set",args:"key, value",desc:"Set a variable (JSON-serialized)."},{name:"delete",args:"key",desc:"Delete a variable. Returns true if it existed."},{name:"has",args:"key",desc:"Check if a variable exists."},{name:"clear",args:"—",desc:"Delete all variables in this store."}]},{group:"api.json",rows:[{name:"parse",args:"text",desc:"Parse a JSON string. Throws on invalid JSON."},{name:"stringify",args:"data, pretty?",desc:"Serialize to JSON. Pass true for formatted output."},{name:"clone",args:"data",desc:"Deep clone a value."},{name:"get",args:"data, path, defaultValue?",desc:'Get a nested value by dot-path (e.g. "user.address.city").'},{name:"set",args:"data, path, value",desc:"Set a nested value by dot-path."},{name:"merge",args:"...objects",desc:"Deep merge objects. Later arguments override earlier ones."},{name:"isValid",args:"text",desc:"Check if a string is valid JSON."},{name:"filter",args:"data, predicate",desc:"Filter an array by predicate."},{name:"sort",args:"data, key, direction?",desc:"Sort array by key (asc or desc)."},{name:"uniq",args:"data",desc:"Deduplicate array."},{name:"flatten",args:"data",desc:"Flatten a nested array."},{name:"query",args:"data, queryString",desc:"Run a jsonquery pipeline (jq-like). See jsonquerylang.org."}]},{group:"api.utils",rows:[{name:"uuid",args:"—",desc:"Generate a UUID v4 string."},{name:"shortId",args:"—",desc:"Generate a short random ID (8 chars, URL-safe)."},{name:"wait",args:"ms",desc:"Pause execution for ms milliseconds."},{name:"random.int",args:"min, max",desc:"Random integer in [min, max] inclusive."},{name:"random.float",args:"min, max",desc:"Random float in [min, max)."},{name:"random.pick",args:"array",desc:"Pick a random element from an array."},{name:"random.bool",args:"—",desc:"Random true/false."},{name:"random.chance",args:"probability",desc:"Returns true with probability p (0–1)."},{name:"random.shuffle",args:"array",desc:"Return a shuffled copy of the array."},{name:"http.get",args:"url, options?",desc:"GET request via cors_proxy. Requires allowDangerous."},{name:"http.post",args:"url, body, options?",desc:"POST request via cors_proxy. Requires allowDangerous."},{name:"http.put",args:"url, body, options?",desc:"PUT request via cors_proxy. Requires allowDangerous."},{name:"http.delete",args:"url, options?",desc:"DELETE request via cors_proxy. Requires allowDangerous."},{name:"http.request",args:"url, options",desc:"Custom HTTP request via cors_proxy. Requires allowDangerous."},{name:"template.render",args:"template, data?, options?",desc:"Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>."},{name:"template.compile",args:"template",desc:"Pre-compile a Handlebars template for sync reuse. No macro resolution."},{name:"template.registerHelper",args:"name, fn",desc:"Register a custom Handlebars helper scoped to this script."},{name:"macros.resolve",args:"template, options?",desc:"Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>."},{name:"image.detectMime",args:"bytes",desc:"Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType."},{name:"image.dataUrlToBytes",args:"url",desc:"Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs."},{name:"image.bytesToDataUrl",args:"bytes, mimeType",desc:"Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar."}]},{group:"api.ui",rows:[{name:"toast",args:"message, type?, options?",desc:"Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration."},{name:"prompt",args:"message, defaultValue?, options?",desc:"Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline."},{name:"confirm",args:"message, title?, options?",desc:"Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel."},{name:"showModal",args:"items, options",desc:"Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent."},{name:"showAdvancedModal",args:"options",desc:"Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation."},{name:"showContextMenu",args:"options",desc:"Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier."},{name:"registerInputBarAction",args:"options",desc:"Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier."},{name:"createFloatWidget",args:"options",desc:"Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels."},{name:"registerDrawerTab",args:"options",desc:"Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier."},{name:"editText",args:"title?, value?, options?",desc:"Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder."},{name:"pushNotification",args:"title, body, options?",desc:"Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification."},{name:"getPushStatus",args:"—",desc:"Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification."}]},{group:"api.ui.dom",rows:[{name:"inject",args:"target, html, options?",desc:'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.'},{name:"injectAtMessage",args:"messageId, html, options?",desc:'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.'},{name:"addStyle",args:"css",desc:"Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation."},{name:"cleanup",args:"—",desc:"Remove all DOM injections and styles created by this script. Requires app_manipulation."}]},{group:"api.files — user* (per-user persistent)",rows:[{name:"userRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"userWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"userDelete",args:"path",desc:"Delete a file."},{name:"userExists",args:"path",desc:"Check if a path exists."},{name:"userList",args:"prefix?",desc:"List files under a prefix."},{name:"userMkdir",args:"path",desc:"Create a directory."}]},{group:"api.files — shared* (extension-wide persistent)",rows:[{name:"sharedRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"sharedWrite",args:"path, data",desc:"Write UTF-8 text (creates dirs as needed)."},{name:"sharedDelete",args:"path",desc:"Delete a file."},{name:"sharedExists",args:"path",desc:"Check if a path exists."},{name:"sharedList",args:"prefix?",desc:"List files under a prefix."},{name:"sharedStat",args:"path",desc:"Get file metadata (size, modifiedAt, isFile, isDirectory)."},{name:"sharedMkdir",args:"path",desc:"Create a directory."},{name:"sharedMove",args:"from, to",desc:"Move or rename a file."}]},{group:"api.files — temp* (TTL-bound, requires ephemeral_storage)",rows:[{name:"tempRead",args:"path",desc:"Read a file as UTF-8 text."},{name:"tempWrite",args:"path, data, options?",desc:"Write UTF-8 text. Options: { ttlMs } for expiry."},{name:"tempDelete",args:"path",desc:"Delete a file."},{name:"tempList",args:"prefix?",desc:"List files under a prefix."},{name:"tempStat",args:"path",desc:"Get file metadata (sizeBytes, createdAt, expiresAt?)."},{name:"tempClearExpired",args:"—",desc:"Remove all expired files. Returns count removed."}]},{group:"api.characters",rows:[{name:"list",args:"options?",desc:"List characters (paginated). Returns { data, total }."},{name:"get",args:"id",desc:"Get a character by ID. Returns null if not found."},{name:"getByName",args:"name",desc:"Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match."},{name:"create",args:"input",desc:"Create a new character."},{name:"setAvatar",args:"id, avatar",desc:"Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling."},{name:"update",args:"id, input",desc:"Update a character."},{name:"delete",args:"id",desc:"Delete a character. Returns true if deleted."}]},{group:"api.chats",rows:[{name:"list",args:"options?",desc:"List chat sessions (paginated). Options: characterId, limit, offset."},{name:"get",args:"id",desc:"Get a chat session by ID."},{name:"getActive",args:"—",desc:"Get the currently active chat session."},{name:"update",args:"id, input",desc:"Update a chat session name or metadata."},{name:"delete",args:"id",desc:"Delete a chat session and all its messages."},{name:"getMemories",args:"chatId?, options?",desc:"Retrieve long-term memory chunks via vector search. Falls back to active chat."}]},{group:"api.worldInfo",rows:[{name:"list",args:"options?",desc:"List world books (paginated)."},{name:"get",args:"ref",desc:"Get a world book by ID or name."},{name:"create",args:"input",desc:"Create a world book."},{name:"update",args:"ref, input",desc:"Update a world book by ID or name."},{name:"delete",args:"ref",desc:"Delete a world book and all its entries."},{name:"entries.list",args:"ref, options?",desc:"List entries in a world book."},{name:"entries.get",args:"entryId",desc:"Get a single entry by ID."},{name:"entries.create",args:"ref, input",desc:"Create a new entry in a world book."},{name:"entries.update",args:"entryId, input",desc:"Update an entry by ID."},{name:"entries.delete",args:"entryId",desc:"Delete an entry by ID."},{name:"entries.listByAutomationIdPrefix",args:"prefix",desc:'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).'},{name:"getCapturedActive",args:"chatId?",desc:"Get all entries that would activate for the current chat (full pipeline)."}]},{group:"api.personas",rows:[{name:"list",args:"options?",desc:"List personas (paginated)."},{name:"get",args:"personaId",desc:"Get a persona by ID."},{name:"getDefault",args:"—",desc:"Get the default persona (isDefault = true)."},{name:"getActive",args:"—",desc:"Get the currently active persona."},{name:"create",args:"input",desc:"Create a persona."},{name:"update",args:"personaId, input",desc:"Update a persona."},{name:"delete",args:"personaId",desc:"Delete a persona."},{name:"switchActive",args:"personaId | null",desc:"Switch the active persona. Pass null to deactivate."},{name:"getWorldBook",args:"personaId",desc:"Get the world book attached to a persona."}]},{group:"api.tools",rows:[{name:"register",args:"name, def, handler",desc:"Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging."},{name:"unregister",args:"name",desc:"Unregister a tool registered by this script. No-op if not found."},{name:"list",args:"—",desc:"List all currently registered tools across all scripts."},{name:"invoke",args:"name, args?",desc:"Invoke a registered tool handler directly (for use inside an agentic loop)."}]},{group:"api.macros",rows:[{name:"register",args:"name, def, handler?",desc:"Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution)."},{name:"updateValue",args:"name, value",desc:"Push a new value for a push-mode macro. Throws if the macro was registered with a handler."},{name:"unregister",args:"name",desc:"Unregister a macro owned by this script. No-op if not found or not owned."},{name:"list",args:"—",desc:"List all currently registered macros across all scripts."}]},{group:"api.broadcast",rows:[{name:"emit",args:"event, payload?",desc:"Fire a named event to all subscribed handlers across all scripts."},{name:"on",args:"event, handler",desc:"Subscribe to a named event. Returns an unsubscribe function."}]},{group:"api.commands",rows:[{name:"register",args:"commands[]",desc:"Register (or replace) command palette entries. Max 20 per extension."},{name:"unregister",args:"commandIds?",desc:"Remove specific commands by ID, or all if no IDs given."},{name:"onInvoked",args:"handler",desc:"Register a handler for when the user selects a command. Returns unsubscribe fn."}]},{group:"api.events",rows:[{name:"track",args:"eventName, payload?, options?",desc:"Record a named event. Options: level, chatId, retentionDays."},{name:"query",args:"filter?",desc:"Query events (newest-first). Filter by name, chat, date range, level, limit."},{name:"replay",args:"filter?",desc:"Replay events (oldest-first). Same filter options as query."},{name:"getLatestState",args:"keys[]",desc:"Retrieve latest known state for a set of keys. Useful for resuming after restarts."}]},{group:"api.enclave",rows:[{name:"put",args:"key, value",desc:"Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB."},{name:"get",args:"key",desc:"Retrieve a decrypted secret, or null if not found. Requires allowDangerous."},{name:"delete",args:"key",desc:"Delete a secret. Returns true if it existed. Requires allowDangerous."},{name:"has",args:"key",desc:"Check if a secret exists without decrypting it. Requires allowDangerous."},{name:"list",args:"—",desc:"List all secret keys for this user and extension. Requires allowDangerous."}]},{group:"api.tokens",rows:[{name:"countText",args:"text, options?",desc:"Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier."},{name:"countMessages",args:"messages, options?",desc:"Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier."},{name:"countChat",args:"chatId, options?",desc:"Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier."}]},{group:"api.db",rows:[{name:"collection",args:"name, opts?",desc:"Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric."},{name:"list",args:"scope?",desc:"List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported."},{name:"exists",args:"name, scope?",desc:"Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+)"},{name:"drop",args:"name, scope?",desc:"Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount."},{name:"collection.insert",args:"record",desc:"Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys."},{name:"collection.insertMany",args:"records",desc:"Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)"},{name:"collection.find",args:"filter?",desc:"Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }."},{name:"collection.findOne",args:"filter",desc:"First matching record or null."},{name:"collection.update",args:"filter, patch",desc:"Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails)."},{name:"collection.delete",args:"filter",desc:"Delete all matching records. Returns count."},{name:"collection.count",args:"filter?",desc:"Count matching records (or all if filter omitted)."},{name:"collection.clear",args:"—",desc:"Remove all records, leaving an empty collection file."},{name:"collection.query",args:"jsonQuery",desc:"Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries."}]},{group:"script",rows:[{name:"id",args:"(property)",desc:"This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)."},{name:"name",args:"(property)",desc:"This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)."},{name:"type",args:"(property)",desc:"Script type: 'trigger' or 'library'."},{name:"require",args:"nameOrId",desc:"Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')."}]}],ZZ=()=>F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:GP.map((w)=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV(fh,{label:w.group,cols:3},`hdr-${w.group}`,!1,void 0,this),w.rows.map((h)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.group}-${h.name}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),XP=[{name:"messageFooter",args:"messageId, html, options?",desc:"Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"messageHeader",args:"messageId, html, options?",desc:"Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }."},{name:"progressBar",args:"target, options?",desc:"Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }."},{name:"floatingButton",args:"label, options?",desc:"Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }."},{name:"badgeHtml",args:"text, options?",desc:"Returns badge/pill HTML string for composing inside other injections."},{name:"statBarHtml",args:"label, value, options?",desc:"Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }."},{name:"keyValueHtml",args:"label, value, options?",desc:"Returns label-value pair HTML string. Options: { muted?, className? }."},{name:"multiSelect",args:"options",desc:"Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal)."}],YP=[{name:"buildCouncilMessages",args:"options",desc:"Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing."},{name:"buildCouncilSystemPrompt",args:"options",desc:"Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure."},{name:"buildCouncilIdentity",args:"councilMember",desc:'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.'},{name:"roleNote",args:"role",desc:'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".'},{name:"brevityNote",args:"maxWords",desc:'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.'},{name:"userControlNote",args:"allow",desc:'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").'},{name:"debug.formatMember",args:"councilMember",desc:"Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log."},{name:"debug.formatIdentity",args:"councilMember",desc:'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.'},{name:"debug.formatSystemPrompt",args:"options",desc:"Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message."},{name:"debug.formatMessages",args:"options",desc:"Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone."},{name:"debug.formatReport",args:"options",desc:"Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log."}],IZ=[{name:"svg",args:"Record<IconName, string>",desc:"Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates."},{name:"sized",args:"name, pixels",desc:"Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged."},{name:"forInputBar",args:"name",desc:"Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine."},{name:"names",args:"()",desc:"All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers."}],JP=[{name:"MessageFooterOptions / MessageHeaderOptions",note:"Options for messageFooter() and messageHeader().",fields:[{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection (forwarded to injectAtMessage)."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class applied to the wrapper div."},{field:"collapsible?",type:"boolean",optional:!0,desc:"Render a persistent title bar with a click-to-toggle chevron. Default: false."},{field:"title?",type:"string",optional:!0,desc:"HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true."},{field:"defaultCollapsed?",type:"boolean",optional:!0,desc:"Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true."}]},{name:"CollapsibleDOMHandle",note:"Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.",fields:[{field:"isCollapsed()",type:"() => boolean",optional:!1,desc:"Current collapsed state (false = body visible)."},{field:"setCollapsed(collapsed)",type:"(boolean) => void",optional:!1,desc:"Set collapsed state explicitly. Re-renders the inner content."},{field:"toggle()",type:"() => void",optional:!1,desc:"Flip the collapsed state."},{field:"setTitle(title)",type:"(string) => void",optional:!1,desc:"Replace the persistent title. Preserves collapsed state and body."},{field:"update(bodyHtml)",type:"(string) => void",optional:!1,desc:'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".'}]},{name:"BadgeHtmlOptions",note:"Options for badgeHtml().",fields:[{field:"variant?",type:"'default'|'success'|'warning'|'danger'|'info'|'accent'",optional:!0,desc:"Color variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"dot?",type:"boolean",optional:!0,desc:"Prepend a colored dot indicator. Default: false."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class on the badge span."}]},{name:"StatBarHtmlOptions",note:"Options for statBarHtml().",fields:[{field:"max?",type:"number",optional:!0,desc:"Max value for percentage calc. Default: 100."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showValue?",type:"boolean",optional:!0,desc:"Show numeric value label. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 6."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"ProgressBarOptions",note:"Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).",fields:[{field:"value?",type:"number",optional:!0,desc:"Initial value (0-100). Default: 0."},{field:"label?",type:"string",optional:!0,desc:"Text label above the bar."},{field:"color?",type:"string",optional:!0,desc:"CSS color or gradient for the fill."},{field:"showPercent?",type:"boolean",optional:!0,desc:"Show percentage text. Default: true."},{field:"height?",type:"number",optional:!0,desc:"Bar height in px. Default: 8."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"MultiSelectItem",note:"A single selectable row in a multiSelect() items array.",fields:[{field:"key",type:"string",optional:!1,desc:"Stable identifier returned in the resolved array when this item is selected."},{field:"label",type:"string",optional:!1,desc:"Primary label shown next to the checkbox."},{field:"description?",type:"string",optional:!0,desc:"Secondary line shown below the label in dim text."},{field:"checked?",type:"boolean",optional:!0,desc:"Initial checked state. Default: false."},{field:"disabled?",type:"boolean",optional:!0,desc:"When true, the row is unclickable and visually dimmed."}]},{name:"MultiSelectOptions",note:"Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.",fields:[{field:"title",type:"string",optional:!1,desc:"Modal title. Required."},{field:"items",type:"MultiSelectItem[]",optional:!1,desc:"List of selectable items."},{field:"confirmLabel?",type:"string",optional:!0,desc:"Label for the confirm button. Default: 'Confirm'."},{field:"cancelLabel?",type:"string",optional:!0,desc:"Label for the cancel button. Default: 'Cancel'."},{field:"minSelect?",type:"number",optional:!0,desc:"Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0."},{field:"maxSelect?",type:"number",optional:!0,desc:"Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited."},{field:"width?",type:"number",optional:!0,desc:"Modal width in pixels. Default: 480."},{field:"maxHeight?",type:"number",optional:!0,desc:"Modal max-height in pixels. Clamped to viewport."}]},{name:"FloatingButtonOptions",note:"Options for floatingButton().",fields:[{field:"position?",type:"{ top?, right?, bottom?, left? }",optional:!0,desc:"Fixed position. Defaults to { bottom: '80px', right: '16px' }."},{field:"icon?",type:"string",optional:!0,desc:"HTML string for an icon (e.g. SVG)."},{field:"variant?",type:"'default' | 'accent' | 'ghost'",optional:!0,desc:"Visual variant. Default: 'default'."},{field:"size?",type:"'sm' | 'md'",optional:!0,desc:"Size preset. Default: 'md'."},{field:"draggable?",type:"boolean",optional:!0,desc:"Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false."},{field:"id?",type:"string",optional:!0,desc:"Stable ID for idempotent injection."},{field:"className?",type:"string",optional:!0,desc:"Additional CSS class."}]},{name:"CouncilSystemPromptOptions",note:"Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.",fields:[{field:"councilMember",type:"CouncilMemberContext",optional:!1,desc:"Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations."},{field:"tool",type:"{ display_name, description, prompt? }",optional:!1,desc:"Tool identification + optional per-tool directive. `prompt` is appended after the tool description."},{field:"maxWordsPerTool?",type:"number",optional:!0,desc:"Per-tool word budget. 0 or omitted → no brevity note."},{field:"allowUserControl?",type:"boolean",optional:!0,desc:"Whether the tool may direct the user-character. Default false (restrictive)."},{field:"dynamicSuffix?",type:"string",optional:!0,desc:"Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment."}]},{name:"CouncilMessagesOptions",note:"Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.",fields:[{field:"args",type:"ToolInvocationArgs",optional:!1,desc:"The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty."},{field:"contextMessages?",type:"LLMMessage[]",optional:!0,desc:"Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+."}]}],xZ=()=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV("p",{className:"ls-ref-muted",style:{marginBottom:8},children:["Built-in libraries are loaded via ",F.jsxDEV(Mg,{children:"script.require('ls:<name>')"},void 0,!1,void 0,this),". Three are currently shipped: ",F.jsxDEV(Mg,{children:"ls:components"},void 0,!1,void 0,this)," (DOM widget factories — all operations attributed to the calling script; injection components require"," ",F.jsxDEV(Mg,{children:"app_manipulation"},void 0,!1,void 0,this),", HTML builders are free); ",F.jsxDEV(Mg,{children:"ls:council-prompt"},void 0,!1,void 0,this)," ","(pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle); and ",F.jsxDEV(Mg,{children:"ls:icons"},void 0,!1,void 0,this)," (a curated ~150-icon Lucide subset as pre-serialized SVG strings, ready to drop into ",F.jsxDEV(Mg,{children:"iconSvg"},void 0,!1,void 0,this)," options or DOM templates; no permissions required)."]},void 0,!0,void 0,this),F.jsxDEV("table",{className:"ls-ref-table",children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Method"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Arguments"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:[F.jsxDEV(fh,{label:"ls:components",cols:3},void 0,!1,void 0,this),XP.map((w)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this)),F.jsxDEV(fh,{label:"ls:council-prompt",cols:3},void 0,!1,void 0,this),YP.map((w)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this)),F.jsxDEV(fh,{label:"ls:icons",cols:3},void 0,!1,void 0,this),IZ.map((w)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:w.name},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.args},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:w.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},w.name,!0,void 0,this))]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),F.jsxDEV("table",{className:"ls-ref-table",style:{marginTop:12},children:[F.jsxDEV("thead",{children:F.jsxDEV("tr",{children:[F.jsxDEV("th",{children:"Field"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Type"},void 0,!1,void 0,this),F.jsxDEV("th",{children:"Description"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("tbody",{children:JP.map((w)=>F.jsxDEV(F.Fragment,{children:[F.jsxDEV("tr",{children:F.jsxDEV("td",{colSpan:3,className:"ls-ref-group-header",children:[w.name,w.note&&F.jsxDEV("div",{className:"ls-ref-type-note",children:w.note},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},`hdr-${w.name}`,!1,void 0,this),w.fields.map((h)=>F.jsxDEV("tr",{children:[F.jsxDEV("td",{children:F.jsxDEV(Mg,{children:h.optional&&!h.field.endsWith("?")?`${h.field}?`:h.field},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.type},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV("td",{children:F.jsxDEV("span",{className:"ls-ref-muted",children:h.desc},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},`${w.name}-${h.field}`,!0,void 0,this))]},void 0,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),oz=()=>F.jsxDEV("div",{className:"ls-ref",children:[F.jsxDEV("div",{className:"ls-ref-toolbar",children:F.jsxDEV("button",{type:"button",className:"ls-ref-export-btn",onClick:()=>hz(),title:"Download the current reference as a Markdown file",children:[F.jsxDEV(Rb,{size:11},void 0,!1,void 0,this),"Export Markdown"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(G5,{size:11},void 0,!1,void 0,this),title:"Lumiverse Events",defaultOpen:!0,children:F.jsxDEV($Z,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(jl,{size:11},void 0,!1,void 0,this),title:"Permission Matrix",children:F.jsxDEV(UZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(al,{size:11},void 0,!1,void 0,this),title:"LumiScript Events",children:[F.jsxDEV(LZ,{},void 0,!1,void 0,this),F.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["The ",F.jsxDEV(Mg,{children:"ls:"},void 0,!1,void 0,this)," prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(el,{size:11},void 0,!1,void 0,this),title:"LumiScript Macros",children:[F.jsxDEV(BZ,{},void 0,!1,void 0,this),F.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:["Character variable macros read from and write to the active character's store at ",F.jsxDEV(Mg,{children:"variables/characters/<id>.json"},void 0,!1,void 0,this)," in user storage. They resolve to ",F.jsxDEV(Mg,{children:'""'},void 0,!1,void 0,this)," when no character is active."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(Cv,{size:11},void 0,!1,void 0,this),title:"Key Types",children:F.jsxDEV(NZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(nl,{size:11},void 0,!1,void 0,this),title:"API Functions",children:F.jsxDEV(ZZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(Cl,{size:11},void 0,!1,void 0,this),title:"Built-in Libraries",children:F.jsxDEV(xZ,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),F.jsxDEV(Lw,{icon:F.jsxDEV(fl,{size:11},void 0,!1,void 0,this),title:"Script Packs",children:[F.jsxDEV("p",{className:"ls-ref-muted",children:[F.jsxDEV("strong",{children:"Export"},void 0,!1,void 0,this)," — click the ",F.jsxDEV(Mg,{children:"↓"},void 0,!1,void 0,this)," button in the script list header to download the currently filtered scripts as a ",F.jsxDEV(Mg,{children:".lumiscript.zip"},void 0,!1,void 0,this)," file. The pack contains a ",F.jsxDEV(Mg,{children:"pack.json"},void 0,!1,void 0,this)," with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are ",F.jsxDEV("em",{children:"not"},void 0,!1,void 0,this)," included."]},void 0,!0,void 0,this),F.jsxDEV("p",{className:"ls-ref-muted",style:{marginTop:6},children:[F.jsxDEV("strong",{children:"Import"},void 0,!1,void 0,this)," — click the ",F.jsxDEV(Mg,{children:"↑"},void 0,!1,void 0,this)," button to pick a ",F.jsxDEV(Mg,{children:".lumiscript.zip"},void 0,!1,void 0,this),". After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with ",F.jsxDEV(Mg,{children:"enabled: false"},void 0,!1,void 0,this)," and ",F.jsxDEV(Mg,{children:"allowDangerous: false"},void 0,!1,void 0,this)," — review and enable them manually."]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this);var Ir=ur(rg(),1),Hz=!1,Oz=({script:w,allScripts:h,activeContext:H,isRunning:O,consoleEntries:A,editorFontSize:u,autosaveDebounceMs:W,onClearConsole:M,sendToBackend:Q})=>{let[R,z]=z0.useState(w.code),[X,K]=z0.useState(!1),[I,f]=z0.useState(!1),[C,j]=z0.useState(w.name),[rr,Pr]=z0.useState("code"),[wr,p]=z0.useState(!1),[s,br]=z0.useState(!1),m=z0.useRef(null),E=z0.useRef(null);z0.useEffect(()=>{z(w.code),K(!1),j(w.name),br(!1)},[w.id,w.code,w.name]),z0.useEffect(()=>{Q({type:"get_active_context"})},[w.id,Q]),z0.useEffect(()=>{let vr=setInterval(()=>{Q({type:"get_active_context"})},2000);return()=>clearInterval(vr)},[Q]);let t=z0.useCallback((vr)=>{Q({type:"update_script",id:w.id,patch:{code:vr}}),K(!1)},[w.id,Q]),D=(vr)=>{if(vr===void 0)return;if(z(vr),K(vr!==w.code),m.current)clearTimeout(m.current);m.current=setTimeout(()=>t(vr),W)},zr=(vr,Gr)=>{if(E.current=vr,!Hz){Hz=!0;let i=Gr.languages.typescript.javascriptDefaults;i.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1,diagnosticCodesToIgnore:[7044,80001]}),i.setCompilerOptions({target:Gr.languages.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,allowJs:!0,checkJs:!0,noEmit:!0}),i.addExtraLib(vz,"ts:lumiverse/lumiscript-api.d.ts")}vr.addCommand(Gr.KeyMod.CtrlCmd|Gr.KeyCode.KeyS,()=>{if(m.current)clearTimeout(m.current);t(vr.getValue())}),vr.getModel()?.setEOL(Gr.editor.EndOfLineSequence.LF)},Xr=()=>{if(O)return;if(m.current)clearTimeout(m.current),m.current=null;if(X)t(E.current?.getValue()??R);Q({type:"run_script",id:w.id})},Rr=()=>{let vr=C.trim();if(vr&&vr!==w.name)Q({type:"update_script",id:w.id,patch:{name:vr}});f(!1)},mr=(vr)=>{let Gr=w.bindings??[];Q({type:"update_script",id:w.id,patch:{bindings:[...Gr,vr]}})},_=(vr)=>{Q({type:"update_script",id:w.id,patch:{bindings:(w.bindings??[]).filter((Gr,i)=>i!==vr)}})},d=()=>{if(w.allowDangerous)Q({type:"update_script",id:w.id,patch:{allowDangerous:!1}});else if(s)br(!1),Q({type:"update_script",id:w.id,patch:{allowDangerous:!0}});else br(!0)},hr=(vr)=>new Date(vr).toLocaleString();return Ir.jsxDEV("div",{className:"ls-editor-root",children:[Ir.jsxDEV("div",{className:"ls-editor-topbar",children:[I?Ir.jsxDEV("input",{className:"ls-editor-name-input",value:C,autoFocus:!0,onChange:(vr)=>j(vr.target.value),onBlur:Rr,onKeyDown:(vr)=>{if(vr.key==="Enter")Rr();if(vr.key==="Escape")j(w.name),f(!1)}},void 0,!1,void 0,this):Ir.jsxDEV("span",{className:"ls-editor-name",onClick:()=>f(!0),title:"Click to rename",style:{cursor:"text"},children:w.name},void 0,!1,void 0,this),X&&Ir.jsxDEV("span",{className:"ls-editor-unsaved",title:"Unsaved changes"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="code"?" ls-active":""}`,onClick:()=>Pr("code"),title:"Code editor",children:[Ir.jsxDEV(Y0,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Code"]},void 0,!0,void 0,this),Ir.jsxDEV("button",{className:`ls-tab-pill${rr==="docs"?" ls-active":""}`,onClick:()=>Pr("docs"),title:"API reference",children:[Ir.jsxDEV(Sl,{size:10,style:{display:"inline",marginRight:3}},void 0,!1,void 0,this),"Docs"]},void 0,!0,void 0,this),w.type!=="library"&&Ir.jsxDEV("button",{className:`ls-btn${O?"":" ls-accent"}`,onClick:Xr,disabled:O,children:[O?Ir.jsxDEV(Xw,{size:15,style:{animation:"spin 1s linear infinite"}},void 0,!1,void 0,this):Ir.jsxDEV(cl,{size:15},void 0,!1,void 0,this),O?"Running…":"Run"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),rr==="code"&&Ir.jsxDEV("div",{className:"ls-editor-monaco",children:Ir.jsxDEV(pQ,{height:"100%",defaultLanguage:"javascript",theme:"vs-dark",value:R,onChange:D,onMount:zr,options:{minimap:{enabled:!1},fontSize:u,lineNumbers:"on",wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,tabSize:2,insertSpaces:!0,fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"}},w.id,!1,void 0,this)},void 0,!1,void 0,this),rr==="docs"&&Ir.jsxDEV("div",{className:"ls-editor-docs",children:Ir.jsxDEV(oz,{},void 0,!1,void 0,this)},void 0,!1,void 0,this),rr==="code"&&Ir.jsxDEV(aQ,{entries:A,isRunning:O,onClear:M},void 0,!1,void 0,this),w.type==="trigger"&&Ir.jsxDEV(gz,{scriptId:w.id,triggers:w.triggers??[],sendToBackend:Q},void 0,!1,void 0,this),w.type==="trigger"&&Ir.jsxDEV(dQ,{bindings:w.bindings??[],activeContext:H,onAdd:mr,onRemove:_},void 0,!1,void 0,this),s&&Ir.jsxDEV("div",{className:"ls-danger-confirm",children:[Ir.jsxDEV(Vh,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-danger-confirm-msg",children:"Enable dangerous mode? The script can make HTTP requests and access files."},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-yes",onClick:d,children:"Enable"},void 0,!1,void 0,this),Ir.jsxDEV("button",{className:"ls-danger-confirm-no",onClick:()=>br(!1),children:"Cancel"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("div",{className:"ls-meta-footer",children:[Ir.jsxDEV("span",{className:"ls-meta-item",children:Ir.jsxDEV("button",{className:"ls-danger-btn",onClick:d,title:"Toggle dangerous mode",children:[w.allowDangerous?Ir.jsxDEV(Vh,{size:11,className:"ls-dangerous"},void 0,!1,void 0,this):Ir.jsxDEV(sl,{size:11},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:w.allowDangerous?"ls-dangerous":"",children:w.allowDangerous?"Dangerous":"Safe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-folder",children:[Ir.jsxDEV(Kb,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("select",{className:"ls-folder-select",value:w.folder??"",onChange:(vr)=>{let Gr=vr.target.value;if(Gr==="__new__"){let i=window.prompt("New folder name:");if(i?.trim())Q({type:"update_script",id:w.id,patch:{folder:i.trim()}})}else Q({type:"update_script",id:w.id,patch:{folder:Gr}})},children:[Ir.jsxDEV("option",{value:"",children:"No folder"},void 0,!1,void 0,this),[...new Set(h.map((vr)=>vr.folder).filter((vr)=>!!vr))].sort().map((vr)=>Ir.jsxDEV("option",{value:vr,children:vr},vr,!1,void 0,this)),Ir.jsxDEV("option",{value:"__new__",children:"+ New folder..."},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(Vl,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Updated ",hr(w.updatedAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item",children:[Ir.jsxDEV(ml,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["Created ",hr(w.createdAt)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Ir.jsxDEV("span",{className:"ls-meta-item ls-meta-id",title:w.id,onClick:()=>{navigator.clipboard.writeText(w.id).catch(()=>{}),p(!0),setTimeout(()=>p(!1),1200)},style:{cursor:"pointer",userSelect:"none"},children:[wr?Ir.jsxDEV(kl,{size:10},void 0,!1,void 0,this):Ir.jsxDEV(p1,{size:10},void 0,!1,void 0,this),Ir.jsxDEV("span",{children:["ID ",w.id.slice(0,8)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var N0=ur(rg(),1),Az=({scripts:w,initialScriptId:h,activeContext:H,execInfo:O,activeRunScriptId:A,isRunning:u,consoleHistory:W,editorFontSize:M,autosaveDebounceMs:Q,onClearConsole:R,onClose:z,sendToBackend:X})=>{let[K,I]=B4.useState(h),f=w.find((wr)=>wr.id===K)??null;B4.useEffect(()=>{I(h)},[h]),B4.useEffect(()=>{let wr=(p)=>{if(p.key==="Escape")z()};return document.addEventListener("keydown",wr),()=>document.removeEventListener("keydown",wr)},[z]);let C=f?W[f.id]??[]:[],j=u&&f?.id===A;return qz.createPortal(N0.jsxDEV("div",{className:"ls-modal-overlay",onClick:(wr)=>{if(wr.target===wr.currentTarget)z()},children:N0.jsxDEV("div",{className:"ls-modal-card",onClick:(wr)=>wr.stopPropagation(),children:[N0.jsxDEV("div",{className:"ls-modal-header",children:[N0.jsxDEV("span",{className:"ls-modal-title",children:[N0.jsxDEV(mv,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Script Manager"]},void 0,!0,void 0,this),N0.jsxDEV("button",{className:"ls-modal-close",onClick:z,title:"Close (Esc)",children:N0.jsxDEV(V0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),N0.jsxDEV("div",{className:"ls-modal-body",children:[N0.jsxDEV("div",{className:"ls-modal-sidebar",children:N0.jsxDEV(z8,{scripts:w,selectedId:K,execInfo:O,onSelect:I,onEdit:I,sendToBackend:X},void 0,!1,void 0,this)},void 0,!1,void 0,this),N0.jsxDEV("div",{className:"ls-modal-main",children:f?N0.jsxDEV(Oz,{script:f,allScripts:w,activeContext:H,isRunning:j,consoleEntries:C,editorFontSize:M,autosaveDebounceMs:Q,onClearConsole:()=>{if(f)R(f.id)},sendToBackend:X},void 0,!1,void 0,this):N0.jsxDEV("div",{className:"ls-placeholder",children:[N0.jsxDEV(mv,{size:32,style:{color:"var(--lumiverse-border)"}},void 0,!1,void 0,this),N0.jsxDEV("p",{children:"Select a script from the left to edit it"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),document.body)};var Z8=ur(rg(),1),Pz=({scripts:w,activeContext:h,execInfo:H,activeRunScriptId:O,isRunning:A,consoleHistory:u,editorFontSize:W,autosaveDebounceMs:M,onClearConsole:Q,onScriptOpened:R,sendToBackend:z})=>{let[X,K]=I8.useState(null);return I8.useEffect(()=>{if(X&&R)R(X)},[X,R]),Z8.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[Z8.jsxDEV(z8,{scripts:w,selectedId:X,execInfo:H,onSelect:()=>{},onEdit:K,sendToBackend:z},void 0,!1,void 0,this),X!==null&&Z8.jsxDEV(Az,{scripts:w,initialScriptId:X,activeContext:h,execInfo:H,activeRunScriptId:O,isRunning:A,consoleHistory:u,editorFontSize:W,autosaveDebounceMs:M,onClearConsole:Q,onClose:()=>K(null),sendToBackend:z},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var uz=ur(hg(),1);var jg=ur(rg(),1),TZ=[{key:"local",label:"local",hint:"Per-chat ({{getvar}})"},{key:"global",label:"global",hint:"Cross-chat ({{getgvar}})"},{key:"chat",label:"chat",hint:"Chat metadata ({{@key}})"},{key:"character",label:"character",hint:"Per-character card"}];function CZ(w){if(w===void 0)return"undefined";if(w===null)return"null";if(typeof w==="string")return w.length>80?w.slice(0,77)+"…":w;try{let h=JSON.stringify(w);return h.length>80?h.slice(0,77)+"…":h}catch{return String(w)}}var Wz=({variables:w,sendToBackend:h})=>{let[H,O]=uz.useState(new Set(["local","global","chat","character"])),A=(W)=>{O((M)=>{let Q=new Set(M);if(Q.has(W))Q.delete(W);else Q.add(W);return Q})},u=w?Object.values(w).reduce((W,M)=>W+Object.keys(M).length,0):0;return jg.jsxDEV("div",{className:"ls-status-section",children:[jg.jsxDEV("div",{className:"ls-inject-header",children:[jg.jsxDEV(a1,{size:10},void 0,!1,void 0,this),"Variables",u>0&&jg.jsxDEV("span",{className:"ls-inject-count",children:u},void 0,!1,void 0,this),jg.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh variables",onClick:()=>h({type:"get_variables"}),children:jg.jsxDEV(M5,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),jg.jsxDEV("div",{className:"ls-status-section-body",children:!w?jg.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load variables"},void 0,!1,void 0,this):u===0?jg.jsxDEV("div",{className:"ls-section-empty",children:"No variables in active context"},void 0,!1,void 0,this):TZ.map(({key:W,label:M,hint:Q})=>{let R=w[W],z=Object.keys(R),X=H.has(W);if(z.length===0)return null;return jg.jsxDEV("div",{className:"ls-vars-scope",children:[jg.jsxDEV("button",{className:"ls-vars-scope-header",onClick:()=>A(W),children:[X?jg.jsxDEV(J0,{size:10},void 0,!1,void 0,this):jg.jsxDEV(X1,{size:10},void 0,!1,void 0,this),jg.jsxDEV("span",{className:"ls-vars-scope-name",children:M},void 0,!1,void 0,this),Q&&jg.jsxDEV("span",{className:"ls-vars-scope-hint",children:Q},void 0,!1,void 0,this),jg.jsxDEV("span",{className:"ls-vars-scope-count",children:z.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),X&&jg.jsxDEV("div",{className:"ls-vars-scope-body",children:z.sort().map((K)=>jg.jsxDEV("div",{className:"ls-vars-entry",children:[jg.jsxDEV("span",{className:"ls-vars-key",children:K},void 0,!1,void 0,this),jg.jsxDEV("span",{className:"ls-vars-value",title:String(R[K]),children:CZ(R[K])},void 0,!1,void 0,this)]},K,!0,void 0,this))},void 0,!1,void 0,this)]},W,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Fw=ur(hg(),1);function x8(w){if(!Number.isFinite(w)||w<=0)return"0 B";let h=["B","KB","MB","GB"],H=Math.min(h.length-1,Math.floor(Math.log(w)/Math.log(1024))),O=w/Math.pow(1024,H);return`${H===0?O.toFixed(0):O.toFixed(1)} ${h[H]}`}function N4(w){let h;if(typeof w==="number")h=w;else{if(!w)return"—";h=new Date(w).getTime()}if(!Number.isFinite(h)||h<=0)return"—";let H=Date.now()-h;if(H<60000)return"just now";if(H<3600000)return`${Math.floor(H/60000)}m ago`;if(H<86400000)return`${Math.floor(H/3600000)}h ago`;if(H<2592000000)return`${Math.floor(H/86400000)}d ago`;return new Date(h).toISOString().slice(0,10)}var QP={script:"script",character:"char",chat:"chat"},Mz={script:"Script-scoped",character:"Character-scoped",chat:"Chat-scoped"};function T8(w){return w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,(H,O,A,u,W,M,Q)=>{if(O)return`<span class="ls-json-key">${O}</span>${A}`;if(u)return`<span class="ls-json-string">${u}</span>`;if(W)return`<span class="ls-json-bool">${W}</span>`;if(M)return`<span class="ls-json-null">${M}</span>`;if(Q)return`<span class="ls-json-number">${Q}</span>`;return H})}async function zP(w){try{return await navigator.clipboard.writeText(w),!0}catch{return!1}}var xr=ur(rg(),1),ch=["script","character","chat"],SZ=10485760,mZ=41943040,kZ=52428800;function DZ(w){if(w>=mZ)return{tier:"danger",color:"var(--lumiverse-danger, rgb(246, 130, 130))"};if(w>=SZ)return{tier:"warn",color:"rgb(246, 175, 125)"};return{tier:"normal",color:"inherit"}}function iZ(w){if(w.scope==="character"){if(w.characterName)return`character: ${w.characterName} (${w.characterId})
${w.path}`;if(w.characterId)return`character: ${w.characterId} (not currently loaded)
${w.path}`}if(w.scope==="chat"){if(w.chatName)return`chat: ${w.chatName} (${w.chatId})
${w.path}`;if(w.chatId)return`chat: ${w.chatId} (not currently loaded)
${w.path}`}return w.path}function VZ(w,h,H,O){switch(H){case"name":return w.name.localeCompare(h.name,void 0,{sensitivity:"base"});case"scope":return w.scope.localeCompare(h.scope);case"owner":{let A=O.get(w.scriptId)??w.scriptId,u=O.get(h.scriptId)??h.scriptId;return A.localeCompare(u,void 0,{sensitivity:"base"})}case"size":return w.sizeBytes-h.sizeBytes;case"updated":return new Date(w.modifiedAt).getTime()-new Date(h.modifiedAt).getTime()}}var Gz=({collections:w,scripts:h,sendToBackend:H,onInspect:O,onDrop:A})=>{let[u,W]=Fw.useState(""),[M,Q]=Fw.useState(()=>new Set(ch)),[R,z]=Fw.useState(null),[X,K]=Fw.useState("asc"),I=Fw.useMemo(()=>{let m=new Map;for(let E of h)m.set(E.id,E.name);return m},[h]),f=Fw.useMemo(()=>{if(!w)return null;let m=w;if(M.size<ch.length)m=m.filter((t)=>M.has(t.scope));let E=u.trim().toLowerCase();if(E)m=m.filter((t)=>t.name.toLowerCase().includes(E));if(R){let t=X==="asc"?1:-1;m=m.slice().sort((D,zr)=>VZ(D,zr,R,I)*t)}return m},[w,M,u,R,X,I]),C=()=>H({type:"list_collections"}),j=(m)=>{Q((E)=>{let t=new Set(E);if(t.has(m))t.delete(m);else t.add(m);if(t.size===0)return new Set(ch);return t})},rr=(m)=>{if(R!==m){z(m),K("asc");return}if(X==="asc"){K("desc");return}z(null)},Pr=()=>{W(""),Q(new Set(ch))},wr=w?.length??0,p=f?.length??0,s=u.trim().length>0||M.size<ch.length,br=(m)=>{if(R!==m)return xr.jsxDEV(il,{size:9,className:"ls-collections-sort-icon"},void 0,!1,void 0,this);return X==="asc"?xr.jsxDEV(X1,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this):xr.jsxDEV(J0,{size:9,className:"ls-collections-sort-icon ls-collections-sort-icon-active"},void 0,!1,void 0,this)};return xr.jsxDEV("div",{className:"ls-status-section",children:[xr.jsxDEV("div",{className:"ls-inject-header",children:[xr.jsxDEV(a1,{size:10},void 0,!1,void 0,this),"Collections",wr>0&&xr.jsxDEV("span",{className:"ls-inject-count",children:wr},void 0,!1,void 0,this),xr.jsxDEV("button",{className:"ls-vars-refresh",title:"Refresh collections",onClick:C,children:xr.jsxDEV(M5,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-status-section-body",children:w===null?xr.jsxDEV("div",{className:"ls-section-empty",children:"Click refresh to load collections"},void 0,!1,void 0,this):w.length===0?xr.jsxDEV("div",{className:"ls-section-empty",children:"No api.db collections on disk"},void 0,!1,void 0,this):xr.jsxDEV(xr.Fragment,{children:[xr.jsxDEV("div",{className:"ls-collections-filter",children:[xr.jsxDEV("div",{className:"ls-collections-filter-search",children:[xr.jsxDEV(Jw,{size:10},void 0,!1,void 0,this),xr.jsxDEV("input",{type:"text",className:"ls-collections-filter-input",placeholder:"Filter by name…",value:u,onChange:(m)=>W(m.target.value)},void 0,!1,void 0,this),u&&xr.jsxDEV("button",{className:"ls-collections-filter-clear",title:"Clear search",onClick:()=>W(""),children:xr.jsxDEV(V0,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),xr.jsxDEV("div",{className:"ls-collections-filter-chips",children:ch.map((m)=>{let E=M.has(m);return xr.jsxDEV("button",{type:"button",className:"ls-collections-filter-chip","data-scope":m,"aria-pressed":E,title:E?`Hide ${m}-scoped`:`Show ${m}-scoped`,onClick:()=>j(m),children:QP[m]},m,!1,void 0,this)})},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-filter-count",children:s?`${p}/${wr}`:wr},void 0,!1,void 0,this)]},void 0,!0,void 0,this),p===0?xr.jsxDEV("div",{className:"ls-section-empty",children:[xr.jsxDEV("div",{children:"No collections match the filter"},void 0,!1,void 0,this),xr.jsxDEV("button",{onClick:Pr,style:{marginTop:8,padding:"4px 10px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:3,color:"inherit",font:"inherit",fontSize:11,cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):xr.jsxDEV("div",{className:"ls-collections-list",children:[xr.jsxDEV("div",{className:"ls-collections-row ls-collections-header-row",children:[xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("name"),title:"Sort by name",children:["Name ",br("name")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("scope"),title:"Sort by scope",children:["Scope ",br("scope")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("owner"),title:"Sort by owner",children:["Owner ",br("owner")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("size"),title:"Sort by size",children:["Size ",br("size")]},void 0,!0,void 0,this),xr.jsxDEV("span",{className:"ls-collections-sortable",onClick:()=>rr("updated"),title:"Sort by last updated",children:["Updated ",br("updated")]},void 0,!0,void 0,this),xr.jsxDEV("span",{},void 0,!1,void 0,this)]},void 0,!0,void 0,this),f.map((m)=>{let E=I.get(m.scriptId)??`(${m.scriptId.slice(0,8)}…)`,t=!I.has(m.scriptId),D=t?`scriptId: ${m.scriptId} (not currently loaded)`:`${E} (${m.scriptId})`;return xr.jsxDEV("div",{className:"ls-collections-row",children:[xr.jsxDEV("span",{className:"ls-collections-name",title:m.name,children:m.name},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-scope","data-scope":m.scope,title:iZ(m),children:QP[m.scope]},void 0,!1,void 0,this),xr.jsxDEV("span",{className:`ls-collections-owner${t?" ls-collections-owner-unknown":""}`,title:D,children:E},void 0,!1,void 0,this),(()=>{let zr=DZ(m.sizeBytes),Xr=(m.sizeBytes/kZ*100).toFixed(m.sizeBytes<1048576?2:1),Rr=`${m.sizeBytes.toLocaleString()} bytes (${Xr}% of 50 MB cap)`;return xr.jsxDEV("span",{className:"ls-collections-size","data-budget":zr.tier,title:Rr,style:zr.tier==="normal"?void 0:{color:zr.color,fontWeight:600},children:x8(m.sizeBytes)},void 0,!1,void 0,this)})(),xr.jsxDEV("span",{className:"ls-collections-updated",title:m.modifiedAt,children:N4(m.modifiedAt)},void 0,!1,void 0,this),xr.jsxDEV("span",{className:"ls-collections-actions",children:[xr.jsxDEV("button",{className:"ls-collections-action",title:"Inspect records",onClick:()=>O(m.path),children:xr.jsxDEV(_l,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this),xr.jsxDEV("button",{className:"ls-collections-action ls-collections-action-danger",title:"Drop collection",onClick:()=>A(m),children:xr.jsxDEV(B0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},m.path,!0,void 0,this)})]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var _g=ur(hg(),1),Jz=ur(mh(),1);var vv=ur(hg(),1),Xz=ur(mh(),1);var Kg=ur(rg(),1);function _Z(w){let{id:h,createdAt:H,updatedAt:O,...A}=w;try{return JSON.stringify(A,null,2)}catch{return"{}"}}var Yz=({path:w,record:h,onClose:H,sendToBackend:O})=>{let[A,u]=vv.useState(()=>_Z(h)),[W,M]=vv.useState(null),Q=vv.useRef(null),R=vv.useRef(null),z=vv.useRef(null);vv.useEffect(()=>{let C=(j)=>{if(j.key==="Escape")H()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[H]),vv.useEffect(()=>{let C=(j)=>{if(j.key!=="Tab")return;let rr=Q.current;if(!rr)return;let Pr=Array.from(rr.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(Pr.length===0)return;let wr=Pr[0],p=Pr[Pr.length-1],s=document.activeElement,br=s!==null&&rr.contains(s);if(j.shiftKey){if(!br||s===wr)j.preventDefault(),p.focus()}else if(!br||s===p)j.preventDefault(),wr.focus()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[]),vv.useEffect(()=>{let C=setTimeout(()=>R.current?.focus(),0);return()=>clearTimeout(C)},[]);let X=()=>{let C;try{C=JSON.parse(A)}catch(j){let rr=j instanceof Error?j.message:String(j);M(`JSON parse error: ${rr}`);return}if(C===null||typeof C!=="object"||Array.isArray(C)){M("Record must be a JSON object — not an array, null, or primitive.");return}M(null),O({type:"update_record",path:w,recordId:String(h.id),patch:C}),H()},K=(C)=>{if((C.metaKey||C.ctrlKey)&&C.key==="Enter")C.preventDefault(),X()},I=String(h.id),f=Kg.jsxDEV("div",{className:"ls-modal-overlay",onClick:(C)=>{if(C.target===C.currentTarget)H()},children:Kg.jsxDEV("div",{className:"ls-modal-card ls-edit-card",ref:Q,onClick:(C)=>C.stopPropagation(),children:[Kg.jsxDEV("div",{className:"ls-modal-header",children:[Kg.jsxDEV("span",{className:"ls-modal-title",children:[Kg.jsxDEV(d1,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"Edit record"]},void 0,!0,void 0,this),Kg.jsxDEV("button",{className:"ls-modal-close",onClick:H,title:"Cancel (Esc)",children:Kg.jsxDEV(V0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-edit-body",children:[Kg.jsxDEV("div",{className:"ls-edit-meta",children:[Kg.jsxDEV("span",{className:"ls-edit-meta-label",children:"id:"},void 0,!1,void 0,this),Kg.jsxDEV("code",{className:"ls-edit-meta-value",title:I,children:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("p",{className:"ls-edit-hint",children:["Reserved fields (",Kg.jsxDEV("code",{children:"id"},void 0,!1,void 0,this),", ",Kg.jsxDEV("code",{children:"createdAt"},void 0,!1,void 0,this),","," ",Kg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this),") are managed automatically and aren’t shown here. ",Kg.jsxDEV("code",{children:"updatedAt"},void 0,!1,void 0,this)," will be re-stamped on save."]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-edit-textarea-wrap",children:[Kg.jsxDEV("pre",{ref:z,className:"ls-edit-textarea-highlight","aria-hidden":"true",dangerouslySetInnerHTML:{__html:T8(A)+`
`}},void 0,!1,void 0,this),Kg.jsxDEV("textarea",{ref:R,className:"ls-edit-textarea",value:A,onChange:(C)=>{if(u(C.target.value),W)M(null)},onKeyDown:K,onScroll:(C)=>{let j=z.current;if(!j)return;j.scrollTop=C.currentTarget.scrollTop,j.scrollLeft=C.currentTarget.scrollLeft},spellCheck:!1,autoCorrect:"off",autoCapitalize:"off"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),W&&Kg.jsxDEV("div",{className:"ls-edit-error",role:"alert",children:[Kg.jsxDEV(k1,{size:12},void 0,!1,void 0,this),Kg.jsxDEV("span",{children:W},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Kg.jsxDEV("div",{className:"ls-drop-actions",children:[Kg.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:H,children:"Cancel"},void 0,!1,void 0,this),Kg.jsxDEV("button",{className:"ls-drop-btn ls-edit-btn-save",onClick:X,title:"Save (Ctrl/Cmd+Enter)",children:[Kg.jsxDEV(dl,{size:12},void 0,!1,void 0,this),"Save changes"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return Xz.createPortal(f,document.body)};var c=ur(rg(),1),Zb=50,eZ=150,EZ=1200,yZ=4000,Qz=({path:w,summary:h,records:H,total:O,error:A,stats:u,refreshToken:W,onClose:M,sendToBackend:Q})=>{let[R,z]=_g.useState(""),[X,K]=_g.useState(""),[I,f]=_g.useState(0),[C,j]=_g.useState("shallow"),[rr,Pr]=_g.useState(0),[wr,p]=_g.useState(()=>new Set),[s,br]=_g.useState(null),[m,E]=_g.useState(null),[t,D]=_g.useState("records");_g.useEffect(()=>{let V=setTimeout(()=>K(R),eZ);return()=>clearTimeout(V)},[R]),_g.useEffect(()=>{f(0)},[X,C]),_g.useEffect(()=>{let V=X.trim();if(C==="jsonquery")Q({type:"inspect_collection",path:w,jsonqueryFilter:V||void 0,limit:Zb,offset:I*Zb});else Q({type:"inspect_collection",path:w,textFilter:V||void 0,deepFilter:C==="deep"||void 0,limit:Zb,offset:I*Zb})},[w,X,C,I,W,rr,Q]),_g.useEffect(()=>{let V=(Ar)=>{if(Ar.key==="Escape")M()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[M]);let zr=Math.max(1,Math.ceil(O/Zb)),Xr=O===0?0:I*Zb+1,Rr=Math.min(O,(I+1)*Zb),mr=_g.useMemo(()=>{let V=w.match(/\/([^/]+)\.json$/);return V?V[1]:w},[w]),_=_g.useMemo(()=>{if(!h)return null;if(h.scope==="character"&&h.characterName)return`character: ${h.characterName}`;if(h.scope==="chat"&&h.chatName)return`chat: ${h.chatName}`;return null},[h]),d=(V)=>{p((Ar)=>{let Kr=new Set(Ar);return Kr.add(V),Kr}),setTimeout(()=>{p((Ar)=>{if(!Ar.has(V))return Ar;let Kr=new Set(Ar);return Kr.delete(V),Kr})},EZ)},hr=async(V)=>{if(await zP(String(V.id)))d(`${V.id}:id`)},vr=async(V)=>{if(await zP(JSON.stringify(V,null,2)))d(`${V.id}:json`)};_g.useEffect(()=>{if(m===null)return;let V=setTimeout(()=>E(null),yZ);return()=>clearTimeout(V)},[m]);let Gr=(V)=>{let Ar=String(V.id);if(m===Ar)Q({type:"delete_record",path:w,recordId:Ar}),E(null);else E(Ar)};_g.useEffect(()=>{E(null),br(null)},[I,X,C,w]),_g.useEffect(()=>{D("records")},[w]),_g.useEffect(()=>{if(t!=="stats")return;Q({type:"analyze_collection",path:w})},[t,w,W,rr,Q]);let i=c.jsxDEV("div",{className:"ls-modal-overlay",onClick:(V)=>{if(V.target===V.currentTarget)M()},children:c.jsxDEV("div",{className:"ls-modal-card ls-inspect-card",onClick:(V)=>V.stopPropagation(),children:[c.jsxDEV("div",{className:"ls-modal-header",children:[c.jsxDEV("span",{className:"ls-modal-title",children:[c.jsxDEV(a1,{size:15,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),c.jsxDEV("span",{className:"ls-inspect-title-name",children:mr},void 0,!1,void 0,this),_&&c.jsxDEV("span",{className:"ls-inspect-title-path",title:w,style:{color:"var(--lumiverse-accent)"},children:_},void 0,!1,void 0,this),c.jsxDEV("span",{className:"ls-inspect-title-path",title:w,children:w},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("button",{className:"ls-modal-close",onClick:()=>Pr((V)=>V+1),title:"Refresh records",style:{marginRight:4},children:c.jsxDEV(M5,{size:14},void 0,!1,void 0,this)},void 0,!1,void 0,this),c.jsxDEV("button",{className:"ls-modal-close",onClick:M,title:"Close (Esc)",children:c.jsxDEV(V0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-tabs",role:"tablist","aria-label":"Inspect view",children:[c.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":t==="records",onClick:()=>D("records"),children:[c.jsxDEV(yl,{size:12},void 0,!1,void 0,this),"Records"]},void 0,!0,void 0,this),c.jsxDEV("button",{type:"button",role:"tab",className:"ls-inspect-tab","aria-selected":t==="stats",onClick:()=>D("stats"),children:[c.jsxDEV(Mw,{size:12},void 0,!1,void 0,this),"Stats"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),t==="records"&&c.jsxDEV(c.Fragment,{children:[c.jsxDEV("div",{className:"ls-inspect-toolbar",children:[c.jsxDEV("div",{className:"ls-inspect-search",children:[c.jsxDEV(Jw,{size:12},void 0,!1,void 0,this),c.jsxDEV("input",{type:C==="jsonquery"?"text":"text",className:"ls-inspect-search-input",placeholder:C==="jsonquery"?"jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))":C==="deep"?"Filter records (deep string match — all nested fields)…":"Filter records (shallow string match)…",value:R,onChange:(V)=>z(V.target.value),autoFocus:!0,spellCheck:C!=="jsonquery",autoCorrect:C==="jsonquery"?"off":"on",autoCapitalize:C==="jsonquery"?"off":"sentences"},void 0,!1,void 0,this),c.jsxDEV("div",{className:"ls-inspect-mode-selector",role:"radiogroup","aria-label":"Filter mode",children:[c.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="shallow",title:"Shallow text filter — top-level string fields only",onClick:()=>j("shallow"),children:c.jsxDEV(Jw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),c.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="deep",title:"Deep text filter — search all nested string fields",onClick:()=>j("deep"),children:c.jsxDEV(Gw,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),c.jsxDEV("button",{type:"button",className:"ls-inspect-mode-btn",role:"radio","aria-checked":C==="jsonquery",title:"jsonquery expression — power-user typed query",onClick:()=>j("jsonquery"),children:c.jsxDEV(Y0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-pager",children:[c.jsxDEV("span",{className:"ls-inspect-pager-status",children:O===0?"No matching records":c.jsxDEV(c.Fragment,{children:["Showing ",c.jsxDEV("strong",{children:Xr},void 0,!1,void 0,this),"–",c.jsxDEV("strong",{children:Rr},void 0,!1,void 0,this)," of ",c.jsxDEV("strong",{children:O},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),c.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>f((V)=>Math.max(0,V-1)),disabled:I===0,title:"Previous page",children:c.jsxDEV(Dl,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this),c.jsxDEV("button",{className:"ls-inspect-pager-btn",onClick:()=>f((V)=>Math.min(zr-1,V+1)),disabled:I>=zr-1,title:"Next page",children:c.jsxDEV(W5,{size:12},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),A&&c.jsxDEV("div",{className:"ls-inspect-error",role:"alert",children:[c.jsxDEV(k1,{size:12},void 0,!1,void 0,this),c.jsxDEV("span",{children:A},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-body",children:H===null?c.jsxDEV("div",{className:"ls-inspect-empty",children:"Loading records…"},void 0,!1,void 0,this):H.length===0?c.jsxDEV("div",{className:"ls-inspect-empty",children:O===0&&X?c.jsxDEV(c.Fragment,{children:[c.jsxDEV("div",{children:["No records match “",X,"”"]},void 0,!0,void 0,this),c.jsxDEV("button",{onClick:()=>z(""),style:{marginTop:12,padding:"6px 12px",background:"var(--lumiverse-fill)",border:"1px solid var(--lumiverse-border)",borderRadius:4,color:"inherit",font:"inherit",cursor:"pointer"},children:"Clear filter"},void 0,!1,void 0,this)]},void 0,!0,void 0,this):O===0?"Collection is empty":"No records on this page"},void 0,!1,void 0,this):c.jsxDEV("div",{className:"ls-inspect-records",children:H.map((V)=>{let Ar=String(V.id),Kr=wr.has(`${V.id}:id`),Yr=wr.has(`${V.id}:json`);return c.jsxDEV("div",{className:"ls-inspect-record",children:[c.jsxDEV("div",{className:"ls-inspect-record-id",title:`id: ${Ar}`,children:[c.jsxDEV("code",{children:[Ar.slice(0,12),"…"]},void 0,!0,void 0,this),c.jsxDEV("span",{className:"ls-inspect-record-timestamps",children:["created ",c.jsxDEV("time",{title:new Date(V.createdAt).toISOString(),children:N4(V.createdAt)},void 0,!1,void 0,this),V.updatedAt!==V.createdAt&&c.jsxDEV(c.Fragment,{children:[" · ","updated ",c.jsxDEV("time",{title:new Date(V.updatedAt).toISOString(),children:N4(V.updatedAt)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("span",{style:{flex:1}},void 0,!1,void 0,this),c.jsxDEV("button",{className:"ls-inspect-record-action",title:Kr?"Copied!":"Copy ID",onClick:()=>hr(V),style:{background:"transparent",border:"none",padding:4,marginLeft:4,cursor:"pointer",color:Kr?"var(--lumiverse-accent)":"inherit",opacity:Kr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[c.jsxDEV(p1,{size:11},void 0,!1,void 0,this),"ID"]},void 0,!0,void 0,this),c.jsxDEV("button",{className:"ls-inspect-record-action",title:Yr?"Copied!":"Copy full JSON",onClick:()=>vr(V),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:Yr?"var(--lumiverse-accent)":"inherit",opacity:Yr?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[c.jsxDEV(Cv,{size:11},void 0,!1,void 0,this),"JSON"]},void 0,!0,void 0,this),c.jsxDEV("button",{className:"ls-inspect-record-action",title:"Edit record",onClick:()=>br(V),style:{background:"transparent",border:"none",padding:4,marginLeft:2,cursor:"pointer",color:"inherit",opacity:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10},children:[c.jsxDEV(d1,{size:11},void 0,!1,void 0,this),"Edit"]},void 0,!0,void 0,this),c.jsxDEV("button",{className:"ls-inspect-record-action"+(m===Ar?" ls-inspect-record-action-confirm":""),title:m===Ar?"Click again to confirm — auto-cancels in a few seconds":"Delete record",onClick:()=>Gr(V),style:{background:m===Ar?"rgba(246, 130, 130, 0.18)":"transparent",border:m===Ar?"1px solid rgba(246, 130, 130, 0.4)":"none",padding:m===Ar?"3px 6px":4,marginLeft:2,cursor:"pointer",color:m===Ar?"var(--lumiverse-danger, rgb(246, 130, 130))":"inherit",opacity:m===Ar?1:0.6,display:"inline-flex",alignItems:"center",gap:3,font:"inherit",fontSize:10,fontWeight:m===Ar?600:400,borderRadius:3},children:[c.jsxDEV(B0,{size:11},void 0,!1,void 0,this),m===Ar?"Confirm?":"Delete"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("pre",{className:"ls-inspect-record-json",dangerouslySetInnerHTML:{__html:T8(nZ(V))}},void 0,!1,void 0,this)]},Ar,!0,void 0,this)})},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),t==="stats"&&c.jsxDEV("div",{className:"ls-inspect-body ls-inspect-stats-body",children:u===null?c.jsxDEV("div",{className:"ls-inspect-empty",children:"Computing stats…"},void 0,!1,void 0,this):u.fields.length===0?c.jsxDEV("div",{className:"ls-inspect-empty",children:u.totalRecords===0?"Collection is empty — no fields to analyze.":"No user-data fields in this collection (only reserved fields)."},void 0,!1,void 0,this):c.jsxDEV(fZ,{stats:u},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return c.jsxDEV(c.Fragment,{children:[Jz.createPortal(i,document.body),s&&c.jsxDEV(Yz,{path:w,record:s,onClose:()=>br(null),sendToBackend:Q},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};function nZ(w){let{id:h,createdAt:H,updatedAt:O,...A}=w;try{return JSON.stringify(A,null,2)}catch{return String(w)}}var jZ={string:"ls-stats-type ls-stats-type-string",number:"ls-stats-type ls-stats-type-number",boolean:"ls-stats-type ls-stats-type-bool",null:"ls-stats-type ls-stats-type-null",array:"ls-stats-type ls-stats-type-complex",object:"ls-stats-type ls-stats-type-complex"};function tZ(w){if(typeof w==="string")return`"${w.length>32?w.slice(0,30)+"…":w}"`;if(w===null)return"null";return String(w)}function RP(w){if(!Number.isFinite(w))return"—";return Number.isInteger(w)?String(w):w.toFixed(2)}var fZ=({stats:w})=>{return c.jsxDEV("div",{className:"ls-inspect-stats",children:[c.jsxDEV("div",{className:"ls-inspect-stats-summary",children:["Aggregating across ",c.jsxDEV("strong",{children:w.totalRecords.toLocaleString()},void 0,!1,void 0,this)," ",w.totalRecords===1?"record":"records"," ·"," ",c.jsxDEV("strong",{children:w.fields.length},void 0,!1,void 0,this)," ",w.fields.length===1?"field":"fields"]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-stats-grid",children:w.fields.map((h)=>c.jsxDEV(cZ,{field:h,totalRecords:w.totalRecords},h.name,!1,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},cZ=({field:w,totalRecords:h})=>{let H=h===0?0:Math.round(w.presence/h*100),O=Object.entries(w.types);return O.sort((A,u)=>u[1]-A[1]),c.jsxDEV("div",{className:"ls-inspect-stats-card",children:[c.jsxDEV("div",{className:"ls-inspect-stats-card-head",children:[c.jsxDEV("code",{className:"ls-inspect-stats-card-name",title:w.name,children:w.name},void 0,!1,void 0,this),c.jsxDEV("span",{className:"ls-inspect-stats-card-presence",title:`${w.presence} of ${h} records`,children:[H,"%"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-stats-card-types",children:O.map(([A,u])=>c.jsxDEV("span",{className:jZ[A],children:[A," · ",u]},A,!0,void 0,this))},void 0,!1,void 0,this),w.numericRange&&c.jsxDEV("div",{className:"ls-inspect-stats-card-numeric",children:[c.jsxDEV("span",{children:["min ",c.jsxDEV("strong",{children:RP(w.numericRange.min)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),c.jsxDEV("span",{children:["max ",c.jsxDEV("strong",{children:RP(w.numericRange.max)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),c.jsxDEV("span",{children:"·"},void 0,!1,void 0,this),c.jsxDEV("span",{children:["mean ",c.jsxDEV("strong",{children:RP(w.numericRange.mean)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),w.topValues.length>0&&c.jsxDEV("div",{className:"ls-inspect-stats-card-values",children:[c.jsxDEV("div",{className:"ls-inspect-stats-card-values-label",children:["Top ",w.topValues.length," of ",w.cardinality.toLocaleString()," distinct"]},void 0,!0,void 0,this),c.jsxDEV("div",{className:"ls-inspect-stats-card-values-list",children:w.topValues.map((A,u)=>c.jsxDEV("span",{className:"ls-inspect-stats-value-chip",title:String(A.value),children:[c.jsxDEV("code",{children:tZ(A.value)},void 0,!1,void 0,this),c.jsxDEV("span",{className:"ls-inspect-stats-value-count",children:["×",A.count]},void 0,!0,void 0,this)]},u,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var Z4=ur(hg(),1),zz=ur(mh(),1);var Og=ur(rg(),1);function pZ(w){if(w.scope==="character"&&w.characterName&&w.characterId)return{label:"Character",name:w.characterName,id:w.characterId};if(w.scope==="chat"&&w.chatName&&w.chatId)return{label:"Chat",name:w.chatName,id:w.chatId};return null}var Rz=({target:w,recordCount:h,onConfirm:H,onCancel:O})=>{let A=Z4.useRef(null);Z4.useEffect(()=>{let W=(M)=>{if(M.key==="Escape")O()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[O]),Z4.useEffect(()=>{let W=(M)=>{if(M.key!=="Tab")return;let Q=A.current;if(!Q)return;let R=Array.from(Q.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'));if(R.length===0)return;let z=R[0],X=R[R.length-1],K=document.activeElement,I=K!==null&&Q.contains(K);if(M.shiftKey){if(!I||K===z)M.preventDefault(),X.focus()}else if(!I||K===X)M.preventDefault(),z.focus()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[]);let u=Og.jsxDEV("div",{className:"ls-modal-overlay",onClick:(W)=>{if(W.target===W.currentTarget)O()},children:Og.jsxDEV("div",{className:"ls-modal-card ls-drop-card",ref:A,onClick:(W)=>W.stopPropagation(),children:[Og.jsxDEV("div",{className:"ls-modal-header",children:[Og.jsxDEV("span",{className:"ls-modal-title",children:[Og.jsxDEV(B0,{size:15,style:{color:"var(--lumiverse-danger, rgb(246, 130, 130))"}},void 0,!1,void 0,this),"Drop collection?"]},void 0,!0,void 0,this),Og.jsxDEV("button",{className:"ls-modal-close",onClick:O,title:"Cancel (Esc)",children:Og.jsxDEV(V0,{size:16},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-body",children:[Og.jsxDEV("p",{className:"ls-drop-intro",children:"This will permanently delete the collection and all its records. Scripts that own this collection can re-create it, but any existing records will be gone."},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target",children:[Og.jsxDEV("div",{className:"ls-drop-target-name",children:w.name},void 0,!1,void 0,this),Og.jsxDEV("div",{className:"ls-drop-target-meta",children:[Og.jsxDEV("span",{className:"ls-drop-target-scope","data-scope":w.scope,children:Mz[w.scope]},void 0,!1,void 0,this),Og.jsxDEV("span",{className:"ls-drop-target-size",children:x8(w.sizeBytes)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),(()=>{let W=pZ(w);if(!W)return null;return Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.85},title:`${W.label.toLowerCase()}Id: ${W.id}`,children:[W.label,": ",Og.jsxDEV("strong",{children:W.name},void 0,!1,void 0,this)]},void 0,!0,void 0,this)})(),Og.jsxDEV("div",{className:"ls-drop-target-path",title:w.path,children:w.path},void 0,!1,void 0,this)]},void 0,!0,void 0,this),h===null?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12,opacity:0.55},children:"Counting records…"},void 0,!1,void 0,this):h>=0?Og.jsxDEV("div",{style:{marginTop:6,fontSize:12},children:h===0?"Collection is currently empty.":Og.jsxDEV(Og.Fragment,{children:["Will delete ",Og.jsxDEV("strong",{children:h.toLocaleString()},void 0,!1,void 0,this)," ",h===1?"record":"records","."]},void 0,!0,void 0,this)},void 0,!1,void 0,this):null,Og.jsxDEV("div",{className:"ls-drop-warning",children:[Og.jsxDEV(k1,{size:12},void 0,!1,void 0,this),Og.jsxDEV("span",{children:"This action cannot be undone."},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Og.jsxDEV("div",{className:"ls-drop-actions",children:[Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-cancel",onClick:O,autoFocus:!0,children:"Cancel"},void 0,!1,void 0,this),Og.jsxDEV("button",{className:"ls-drop-btn ls-drop-btn-confirm",onClick:H,children:[Og.jsxDEV(B0,{size:12},void 0,!1,void 0,this),"Drop collection"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this);return zz.createPortal(u,document.body)};var K5=ur(rg(),1),Kz=({variables:w,collections:h,scripts:H,sendToBackend:O,inspectPath:A,inspectRecords:u,inspectTotal:W,inspectError:M,inspectStats:Q,inspectRefreshToken:R,onInspect:z,dropTarget:X,dropTargetCount:K,onDrop:I,onDropConfirm:f})=>{return K5.jsxDEV(K5.Fragment,{children:[K5.jsxDEV("div",{className:"ls-storage-list",children:[K5.jsxDEV(Wz,{variables:w,sendToBackend:O},void 0,!1,void 0,this),K5.jsxDEV(Gz,{collections:h,scripts:H,sendToBackend:O,onInspect:z,onDrop:I},void 0,!1,void 0,this)]},void 0,!0,void 0,this),A!==null&&K5.jsxDEV(Qz,{path:A,summary:h?.find((C)=>C.path===A),records:u,total:W,error:M,stats:Q,refreshToken:R,onClose:()=>z(null),sendToBackend:O},void 0,!1,void 0,this),X!==null&&K5.jsxDEV(Rz,{target:X,recordCount:K,onConfirm:f,onCancel:()=>I(null)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)};var Mr=ur(rg(),1),$z=({onBackendMessage:w,sendToBackend:h})=>{let[H,O]=$g.useState("manage"),[A,u]=$g.useState([]),[W,M]=$g.useState(w8),[Q,R]=$g.useState({characterId:null,characterName:null,chatId:null}),[z,X]=$g.useState({activeScriptId:null,runId:null,isRunning:!1,consoleHistory:{},scriptExecInfo:{}}),[K,I]=$g.useState([]),[f,C]=$g.useState([]),[j,rr]=$g.useState(null),[Pr,wr]=$g.useState(null),[p,s]=$g.useState(null),[br,m]=$g.useState(null),[E,t]=$g.useState(0),[D,zr]=$g.useState(null),[Xr,Rr]=$g.useState(0),[mr,_]=$g.useState(null),[d,hr]=$g.useState(null),[vr,Gr]=$g.useState(null),[i,V]=$g.useState({});$g.useEffect(()=>{let Yr=w((kr)=>{let or=kr;switch(or.type){case"scripts_updated":u(or.scripts);break;case"script_patched":u((Dr)=>Dr.map((pr)=>pr.id===or.script.id?or.script:pr));break;case"settings_updated":M(or.settings);break;case"active_context":R({characterId:or.characterId,characterName:or.characterName,chatId:or.chatId}),h({type:"get_variables"});break;case"variables_updated":rr(or.variables);break;case"collections_list":wr(or.collections);break;case"collection_records":m((Dr)=>{return or.records}),t(or.total),zr(or.error??null);break;case"collection_stats":_((Dr)=>{return or.stats});break;case"collection_count":Gr((Dr)=>{return or.count});break;case"collections_updated":h({type:"list_collections"}),Rr((Dr)=>Dr+1);break;case"injections_updated":I(or.injections);break;case"tools_updated":C(or.tools);break;case"execution_started":{let Dr={timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"separator",message:""};X((pr)=>{let Jg=pr.consoleHistory[or.scriptId]??[],Z0=Jg.length>0?[...Jg,Dr]:Jg;return{...pr,activeScriptId:or.scriptId,runId:or.runId,isRunning:!0,consoleHistory:{...pr.consoleHistory,[or.scriptId]:Z0},scriptExecInfo:{...pr.scriptExecInfo,[or.scriptId]:{...pr.scriptExecInfo[or.scriptId],dot:"running"}}}}),V((pr)=>({...pr,[or.scriptId]:(pr[or.scriptId]??0)+1}));break}case"console_entry":{let Dr=W.consoleHistoryLimit;X((pr)=>{let Jg=pr.consoleHistory[or.scriptId]??[];if(Jg.length>=Dr)return pr;let Hr=Jg.length===Dr-1?{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"warn",message:`[Console output truncated at ${Dr} entries. Clear the console to resume capture.]`}:or.entry;return{...pr,consoleHistory:{...pr.consoleHistory,[or.scriptId]:[...Jg,Hr]}}});break}case"execution_ended":X((Dr)=>{let pr=Dr.consoleHistory[or.scriptId]??[],Jg=Dr.scriptExecInfo[or.scriptId],Z0=!or.success&&or.error?[{timestamp:new Date().toLocaleTimeString("en-US",{hour12:!1}),type:"error",message:or.error}]:[],Hr=!or.success?!0:Jg?.stickyError??!1,y0=!or.success||Hr?"error":"success",K0=or.duration??0,tg=or.success&&K0===0&&(Jg?.duration??0)>0?Jg.duration:or.duration;return{...Dr,isRunning:!1,consoleHistory:Z0.length?{...Dr.consoleHistory,[or.scriptId]:[...pr,...Z0]}:Dr.consoleHistory,scriptExecInfo:{...Dr.scriptExecInfo,[or.scriptId]:{dot:y0,duration:tg,error:or.error??Jg?.error,stickyError:Hr}}}});break;case"error":console.warn("[LumiScript]",or.message);break}});return h({type:"get_scripts"}),h({type:"get_settings"}),h({type:"get_active_context"}),h({type:"get_injections"}),h({type:"get_tools"}),Yr},[w,h]),$g.useEffect(()=>{if(H==="storage")h({type:"list_collections"})},[H,h]),$g.useEffect(()=>{if(Gr(null),d)h({type:"count_collection",path:d.path})},[d,h]);let Ar=$g.useCallback((Yr)=>{X((kr)=>({...kr,consoleHistory:{...kr.consoleHistory,[Yr]:[]}}))},[]),Kr=$g.useCallback((Yr)=>{X((kr)=>{let or=kr.scriptExecInfo[Yr];if(!or?.stickyError)return kr;return{...kr,scriptExecInfo:{...kr.scriptExecInfo,[Yr]:{...or,dot:"idle",stickyError:!1}}}})},[]);return Mr.jsxDEV("div",{className:"ls-panel",children:[Mr.jsxDEV("div",{className:"ls-tabs",children:[Mr.jsxDEV("button",{className:`ls-tab-pill${H==="manage"?" ls-active":""}`,onClick:()=>O("manage"),children:[Mr.jsxDEV(Y0,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Manage"]},void 0,!0,void 0,this),Mr.jsxDEV("button",{className:`ls-tab-pill${H==="status"?" ls-active":""}`,onClick:()=>O("status"),children:[Mr.jsxDEV(Il,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Status"]},void 0,!0,void 0,this),Mr.jsxDEV("button",{className:`ls-tab-pill${H==="storage"?" ls-active":""}`,onClick:()=>O("storage"),children:[Mr.jsxDEV(a1,{size:11,style:{display:"inline",marginRight:4}},void 0,!1,void 0,this),"Storage"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{style:{flex:1,minHeight:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[H==="manage"&&Mr.jsxDEV(Pz,{scripts:A,activeContext:Q,execInfo:z.scriptExecInfo,activeRunScriptId:z.activeScriptId,isRunning:z.isRunning,consoleHistory:z.consoleHistory,editorFontSize:W.editorFontSize,autosaveDebounceMs:W.autosaveDebounceMs,onClearConsole:Ar,onScriptOpened:Kr,sendToBackend:h},void 0,!1,void 0,this),H==="status"&&Mr.jsxDEV(dZ,{scripts:A,execInfo:z.scriptExecInfo,invocationCounts:i,injections:K,tools:f,sendToBackend:h},void 0,!1,void 0,this),H==="storage"&&Mr.jsxDEV(Kz,{variables:j,collections:Pr,scripts:A,sendToBackend:h,inspectPath:p,inspectRecords:br,inspectTotal:E,inspectError:D,inspectStats:mr,inspectRefreshToken:Xr,onInspect:(Yr)=>{s(Yr),m(null),t(0),_(null)},dropTarget:d,dropTargetCount:vr,onDrop:hr,onDropConfirm:()=>{if(!d)return;let Yr=d.path;if(p===Yr)s(null),m(null),t(0),_(null);h({type:"drop_collection",path:Yr}),hr(null)}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},aZ={idle:"Not yet run this session",running:"Running…",success:"Last run succeeded",error:"Last run failed"},dZ=({scripts:w,execInfo:h,invocationCounts:H,injections:O,tools:A,sendToBackend:u})=>{let W=w.filter((X)=>X.type==="trigger"&&X.enabled),M=Object.fromEntries(w.map((X)=>[X.id,X.name])),[Q,R]=$g.useState(new Set),z=(X)=>{R((K)=>{let I=new Set(K);if(I.has(X))I.delete(X);else I.add(X);return I})};return Mr.jsxDEV("div",{className:"ls-status-list",children:[Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(Y0,{size:10},void 0,!1,void 0,this),"Scripts",W.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:W.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:W.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No enabled trigger scripts"},void 0,!1,void 0,this):W.map((X)=>{let K=h[X.id],I=K?.dot??"idle",f={idle:"ls-item-dot",running:"ls-item-dot ls-dot-running",success:"ls-item-dot ls-dot-success",error:"ls-item-dot ls-dot-error"}[I],C=X.triggers??[],j=H[X.id];return Mr.jsxDEV("div",{className:"ls-status-row",children:[Mr.jsxDEV("div",{className:"ls-status-row-main",children:[Mr.jsxDEV("span",{className:f,title:aZ[I]},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-status-name",children:X.name},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-status-right",children:[j!==void 0&&j>0&&Mr.jsxDEV("span",{className:"ls-invoke-count",title:`Fired ${j} time${j!==1?"s":""} this session`,children:["×",j]},void 0,!0,void 0,this),K?.duration!==void 0&&I!=="running"&&Mr.jsxDEV("span",{className:"ls-status-duration",style:{color:I==="error"?"#ef4444":void 0},children:[K.duration,"ms"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),C.length>0?Mr.jsxDEV("div",{className:"ls-status-events",children:C.map((rr)=>Mr.jsxDEV("span",{className:"ls-event-badge",children:[Mr.jsxDEV(G5,{size:9},void 0,!1,void 0,this),rr]},rr,!0,void 0,this))},void 0,!1,void 0,this):Mr.jsxDEV("div",{className:"ls-no-handlers",children:"no events selected — choose events in the editor"},void 0,!1,void 0,this),I==="error"&&K?.error&&Mr.jsxDEV("div",{className:"ls-status-error-row",children:Mr.jsxDEV("span",{className:"ls-status-error-text",children:K.error},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(h4,{size:10},void 0,!1,void 0,this),"Active Tools",A.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:A.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:A.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No tools registered"},void 0,!1,void 0,this):A.map((X)=>Mr.jsxDEV("div",{className:"ls-tool-row",children:[Mr.jsxDEV("div",{className:"ls-tool-name",title:X.description,children:X.name},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-tool-meta",children:[X.council_eligible&&Mr.jsxDEV("span",{className:"ls-tool-badge ls-tool-council",title:"Available in Council",children:"council"},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-script",title:X.scriptId,children:X.scriptName},void 0,!1,void 0,this),Mr.jsxDEV("button",{type:"button",className:"ls-tool-remove","aria-label":`Unregister tool ${X.name}`,title:`Unregister "${X.name}" from Lumiverse.
`+"The owning script is not disabled — the next script edit/enable "+"will re-register declaratively-defined tools.",onClick:()=>u({type:"unregister_tool",name:X.name}),children:Mr.jsxDEV(B0,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.name,!0,void 0,this))},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section",children:[Mr.jsxDEV("div",{className:"ls-inject-header",children:[Mr.jsxDEV(r4,{size:10},void 0,!1,void 0,this),"Active Injections",O.length>0&&Mr.jsxDEV("span",{className:"ls-inject-count",children:O.length},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("div",{className:"ls-status-section-body",children:O.length===0?Mr.jsxDEV("div",{className:"ls-section-empty",children:"No injections active"},void 0,!1,void 0,this):O.map((X)=>{let K=Q.has(X.id);return Mr.jsxDEV("div",{className:"ls-inject-row ls-inject-row-clickable",onClick:()=>z(X.id),children:[Mr.jsxDEV("span",{className:`ls-inject-mode-icon ls-inject-${X.mode}`,title:X.mode==="intercept"?"Post-assembly intercept":"Pre-assembly context",children:X.mode==="intercept"?Mr.jsxDEV(xl,{size:11},void 0,!1,void 0,this):Mr.jsxDEV(Tl,{size:11},void 0,!1,void 0,this)},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-inject-body",children:[Mr.jsxDEV("div",{className:"ls-inject-header-row",children:[Mr.jsxDEV("span",{className:"ls-inject-id",title:X.id,children:X.id},void 0,!1,void 0,this),Mr.jsxDEV("div",{className:"ls-inject-meta",children:[Mr.jsxDEV("span",{className:"ls-inject-role",children:X.role},void 0,!1,void 0,this),X.mode==="intercept"&&X.depth>0&&Mr.jsxDEV("span",{className:"ls-inject-depth",title:`Insert before last ${X.depth} message${X.depth!==1?"s":""}`,children:["d:",X.depth]},void 0,!0,void 0,this),X.ephemeral&&Mr.jsxDEV("span",{className:"ls-inject-ephemeral",title:"Ephemeral — clears after next generation",children:Mr.jsxDEV($b,{size:9},void 0,!1,void 0,this)},void 0,!1,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-script",title:X.scriptId,children:M[X.scriptId]??X.scriptId.slice(0,8)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Mr.jsxDEV("span",{className:"ls-inject-chevron",children:K?Mr.jsxDEV(X1,{size:10},void 0,!1,void 0,this):Mr.jsxDEV(J0,{size:10},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),K&&Mr.jsxDEV("div",{className:"ls-inject-content",onClick:(I)=>I.stopPropagation(),children:X.content},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},X.id,!0,void 0,this)})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};var I4=ur(hg(),1);var Sr=ur(rg(),1),Uz=({onBackendMessage:w,sendToBackend:h})=>{let[H,O]=I4.useState(w8),[A,u]=I4.useState([]);I4.useEffect(()=>{let R=w((z)=>{let X=z;if(X.type==="scripts_updated")u(X.scripts);if(X.type==="settings_updated")O(X.settings)});return h({type:"get_settings"}),h({type:"get_scripts"}),R},[w,h]);let W=A.filter((R)=>R.type==="trigger").length,M=A.filter((R)=>R.type==="library").length,Q=(R)=>{h({type:"update_settings",patch:{enabled:R}})};return Sr.jsxDEV("div",{className:"ls-settings",children:[Sr.jsxDEV("div",{className:"ls-settings-header",children:Sr.jsxDEV("span",{className:"ls-settings-title",children:[Sr.jsxDEV(mv,{size:14,style:{color:"var(--lumiverse-accent)"}},void 0,!1,void 0,this),"LumiScript"]},void 0,!0,void 0,this)},void 0,!1,void 0,this),Sr.jsxDEV("div",{className:"ls-toggle-row",children:[Sr.jsxDEV("label",{className:"ls-toggle",children:[Sr.jsxDEV("input",{type:"checkbox",checked:H.enabled,onChange:(R)=>Q(R.target.checked)},void 0,!1,void 0,this),Sr.jsxDEV("span",{className:"ls-toggle-slider"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("span",{style:{fontSize:12},children:"Master Enable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-counts",children:[Sr.jsxDEV("div",{className:"ls-count-card",children:[Sr.jsxDEV(Y0,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Sr.jsxDEV("div",{className:"ls-count-num",children:W},void 0,!1,void 0,this),Sr.jsxDEV("div",{className:"ls-count-label",children:"Scripts"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-count-card",children:[Sr.jsxDEV(zb,{size:14,style:{color:"var(--lumiverse-accent)",margin:"0 auto 4px"}},void 0,!1,void 0,this),Sr.jsxDEV("div",{className:"ls-count-num",children:M},void 0,!1,void 0,this),Sr.jsxDEV("div",{className:"ls-count-label",children:"Libraries"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-section",children:[Sr.jsxDEV("div",{className:"ls-settings-section-label",children:[Sr.jsxDEV($b,{size:11},void 0,!1,void 0,this),"Script Execution"]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-field",children:[Sr.jsxDEV("label",{className:"ls-settings-field-label",title:"Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.",children:"Timeout (s)"},void 0,!1,void 0,this),Sr.jsxDEV("input",{type:"number",className:"ls-number-input",min:5,max:300,value:Math.round(H.scriptTimeoutMs/1000),onChange:(R)=>{let z=Math.max(5,Math.min(300,Number(R.target.value)||60));h({type:"update_settings",patch:{scriptTimeoutMs:z*1000}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-field",children:[Sr.jsxDEV("label",{className:"ls-settings-field-label",title:"Maximum console log entries kept per script. Older entries are dropped once this cap is reached.",children:"Console history"},void 0,!1,void 0,this),Sr.jsxDEV("input",{type:"number",className:"ls-number-input",min:50,max:2000,value:H.consoleHistoryLimit,onChange:(R)=>{let z=Math.max(50,Math.min(2000,Number(R.target.value)||500));h({type:"update_settings",patch:{consoleHistoryLimit:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-section",children:[Sr.jsxDEV("div",{className:"ls-settings-section-label",children:[Sr.jsxDEV(w4,{size:11},void 0,!1,void 0,this),"Editor"]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-field",children:[Sr.jsxDEV("label",{className:"ls-settings-field-label",title:"Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.",children:"Font size"},void 0,!1,void 0,this),Sr.jsxDEV("input",{type:"number",className:"ls-number-input",min:10,max:24,value:H.editorFontSize,onChange:(R)=>{let z=Math.max(10,Math.min(24,Number(R.target.value)||12));h({type:"update_settings",patch:{editorFontSize:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-field",children:[Sr.jsxDEV("label",{className:"ls-settings-field-label",title:"Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.",children:"Autosave (ms)"},void 0,!1,void 0,this),Sr.jsxDEV("input",{type:"number",className:"ls-number-input",min:300,max:5000,step:100,value:H.autosaveDebounceMs,onChange:(R)=>{let z=Math.max(300,Math.min(5000,Number(R.target.value)||1200));h({type:"update_settings",patch:{autosaveDebounceMs:z}})}},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-section",children:[Sr.jsxDEV("div",{className:"ls-settings-section-label",children:[Sr.jsxDEV(Sv,{size:11},void 0,!1,void 0,this),"New-Script Templates"]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-template-field",children:[Sr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created trigger scripts.",children:"Trigger"},void 0,!1,void 0,this),Sr.jsxDEV("textarea",{className:"ls-textarea",rows:6,spellCheck:!1,value:H.defaultTriggerTemplate,onChange:(R)=>h({type:"update_settings",patch:{defaultTriggerTemplate:R.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this),Sr.jsxDEV("div",{className:"ls-settings-template-field",children:[Sr.jsxDEV("label",{className:"ls-settings-template-label",title:"Starter code inserted into newly created library scripts.",children:"Library"},void 0,!1,void 0,this),Sr.jsxDEV("textarea",{className:"ls-textarea",rows:8,spellCheck:!1,value:H.defaultLibraryTemplate,onChange:(R)=>h({type:"update_settings",patch:{defaultLibraryTemplate:R.target.value}})},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)};function sZ(w){let h=w?.type;return typeof h==="string"&&h.startsWith("dom_")}var R0=new Map;function ph(w,h){R0.set(w,h)}function D1(w){let h=R0.get(w);for(let[H,O]of $5)if(O.elementId===w){if(h)h.removeEventListener(O.event,O.handler);$5.delete(H)}R0.delete(w)}var C4=new Map,x4=new Map,Ib=new Map,T4=new Map,$5=new Map;function Lz(w,h){return`${w}:${h}`}function rI(w){let h=w.target,H={type:w.type};if(h){if(h.id)H.targetId=h.id;if("value"in h)H.targetValue=h.value;if("checked"in h)H.targetChecked=h.checked;if(h.dataset&&Object.keys(h.dataset).length>0){let O={};for(let[A,u]of Object.entries(h.dataset))if(u!==void 0)O[A]=u;H.dataset=O}}if(w instanceof MouseEvent)H.clientX=w.clientX,H.clientY=w.clientY;else if(typeof TouchEvent<"u"&&w instanceof TouchEvent){let O=w.touches[0]??w.changedTouches[0];if(O)H.clientX=O.clientX,H.clientY=O.clientY}if(w instanceof CustomEvent&&w.detail!==void 0)try{JSON.stringify(w.detail),H.detail=w.detail}catch{}return H}function gI(w,h){return`@scope ([data-ls-script="${h}"]) {
${w}
}`}function vI(w,h=5000){let H=document.querySelector(w);if(H)return Promise.resolve(H);return new Promise((O,A)=>{let u=!1,W=new MutationObserver(()=>{let M=document.querySelector(w);if(M&&!u)u=!0,W.disconnect(),O(M)});W.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{if(!u)u=!0,W.disconnect(),A(Error(`waitForElement: timeout for "${w}"`))},h)})}function wI(w){return w.querySelector('[class*="_bubble_"]')}var wv=new Map,bI=50;function hI(w,h,H){if(wv.size>=bI){let O=wv.keys().next().value;if(O)wv.get(O)?.cancel(),wv.delete(O)}wv.set(w,{scriptId:h,cancel:H})}function lI(w){for(let[h,H]of wv)if(H.scriptId===w)H.cancel(),wv.delete(h)}function Bz(w,h,H){let O=h((A)=>{if(!sZ(A))return;let u=A;switch(u.type){case"dom_inject":{let{scriptId:W,elementId:M,target:Q,html:R,position:z,stableId:X,parentElementId:K}=u;if(R0.has(M)){console.warn(`[LumiScript] dom_inject: elementId "${M}" already in elementMap — skipping duplicate insert`);break}let I=`<div data-ls-script="${W}" data-ls-el="${M}">${R}</div>`,f=null;if(K){let C=R0.get(K);if(!C){console.warn(`[LumiScript] dom_inject: parentElementId "${K}" not in elementMap — drop`);break}let j=C.querySelector(Q);if(!j){console.warn(`[LumiScript] dom_inject: selector "${Q}" not found within parent "${K}" — drop`);break}let rr=document.createElement("div");rr.setAttribute("data-spindle-ext",""),rr.innerHTML=I,j.insertAdjacentElement(z,rr),f=rr}else f=w.dom.inject(Q,I,z);if(f){if(R0.set(M,f),C4.set(M,W),X)x4.set(Lz(W,X),M)}break}case"dom_inject_at_message":{let{scriptId:W,elementId:M,messageId:Q,html:R,position:z,stableId:X}=u,K=(rr)=>{let Pr=rr.querySelector("[data-part]"),wr=Pr?.getAttribute("data-part")??"character",p=Pr?.getAttribute("data-component")==="MinimalMessage"?"minimal":"bubble",s=z==="header"?` data-ls-tint="${wr}"`:"",br=` data-ls-mode="${p}"`,m=`<div data-ls-script="${W}" data-ls-el="${M}"${s}${br}>${R}</div>`,E,t;if(z==="header")E=rr,t="afterbegin";else if(z==="footer"&&p==="minimal")E=rr,t="beforeend";else E=wI(rr)??rr,t="beforeend";let D=w.dom.inject(E,m,t);if(R0.set(M,D),C4.set(M,W),X)x4.set(Lz(W,X),M)},I=`[data-message-id="${Q}"]`,f=document.querySelector(I);if(f){K(f);break}let C=!1;hI(M,W,()=>{C=!0}),vI(I).then((rr)=>{if(wv.delete(M),C)return;K(rr)}).catch(()=>{wv.delete(M)});break}case"dom_update":{let W=R0.get(u.elementId);if(!W)break;let M=W.querySelector(`[data-ls-el="${u.elementId}"]`)??W;M.innerHTML=u.html;break}case"dom_remove":{Fz(u.elementId);break}case"dom_add_style":{let{scriptId:W,styleId:M,css:Q}=u,R=gI(Q,W),z=w.dom.addStyle(R);Ib.set(M,z),T4.set(M,W);break}case"dom_remove_style":{let W=Ib.get(u.styleId);if(W)W(),Ib.delete(u.styleId),T4.delete(u.styleId);break}case"dom_listen":{let{elementId:W,listenerId:M,event:Q,preventDefault:R}=u,z=R0.get(W);if(!z)break;let X=(K)=>{if(R)K.preventDefault();let I=rI(K);H({type:"dom_event",elementId:W,listenerId:M,event:Q,data:I})};z.addEventListener(Q,X),$5.set(M,{elementId:W,event:Q,handler:X});break}case"dom_unlisten":{let W=$5.get(u.listenerId);if(!W)break;let M=R0.get(W.elementId);if(M)M.removeEventListener(W.event,W.handler);$5.delete(u.listenerId);break}case"dom_cleanup_script":{let{scriptId:W}=u;lI(W);for(let[M,Q]of C4)if(Q===W)Fz(M);for(let[M,Q]of T4)if(Q===W){let R=Ib.get(M);if(R)R();Ib.delete(M),T4.delete(M)}for(let[M]of x4)if(M.startsWith(W+":"))x4.delete(M);break}case"dom_make_draggable":{let{elementId:W,handleSelector:M}=u,Q=R0.get(W);if(!Q)break;let R=!1,z=!1;Q.addEventListener("pointerdown",(X)=>{if(X.button!==0)return;if(M&&!X.target.closest(M))return;let K=Q.firstElementChild?.firstElementChild??Q.firstElementChild??Q,I=K.getBoundingClientRect();K.style.transform="none",K.style.top=`${I.top}px`,K.style.left=`${I.left}px`,K.style.bottom="auto",K.style.right="auto",R=!0,z=!1;let f=X.clientX-I.left,C=X.clientY-I.top;K.style.cursor="grabbing";let j=(Pr)=>{if(!R)return;z=!0,K.style.top=`${Pr.clientY-C}px`,K.style.left=`${Pr.clientX-f}px`},rr=()=>{if(!R)return;R=!1,K.style.cursor="",document.removeEventListener("pointermove",j),document.removeEventListener("pointerup",rr),document.removeEventListener("pointercancel",rr)};document.addEventListener("pointermove",j),document.addEventListener("pointerup",rr),document.addEventListener("pointercancel",rr),X.preventDefault()}),Q.addEventListener("click",(X)=>{if(z)X.stopImmediatePropagation(),X.preventDefault(),z=!1},!0);break}}});return()=>{O();for(let[,A]of wv)A.cancel();wv.clear();for(let[,A]of $5){let u=R0.get(A.elementId);if(u)u.removeEventListener(A.event,A.handler)}$5.clear();for(let[,A]of R0)try{A.remove()}catch{}R0.clear(),C4.clear(),x4.clear();for(let[,A]of Ib)try{A()}catch{}Ib.clear(),T4.clear()}}function Fz(w){for(let[H,O]of $5)if(O.elementId===w){let A=R0.get(w);if(A)A.removeEventListener(O.event,O.handler);$5.delete(H)}let h=R0.get(w);if(h)try{h.remove()}catch{}R0.delete(w),C4.delete(w)}function oI(w){let h=w?.type;return h==="ls_modal_open"||h==="ls_modal_set_title"||h==="ls_modal_dismiss"}var Bw=new Map;function Nz(w,h,H){let O=h((A)=>{if(!oI(A))return;let u=A;switch(u.type){case"ls_modal_open":{let{scriptId:W,modalId:M,rootElementId:Q,options:R}=u;if(Bw.has(M))break;let z;try{z=w.ui.showModal({title:R.title,width:R.width,maxHeight:R.maxHeight,persistent:R.persistent})}catch(K){console.warn("[LumiScript] ctx.ui.showModal failed:",K),H({type:"ls_modal_dismissed",modalId:M});break}ph(Q,z.root),z.root.setAttribute("data-ls-script",W),z.root.setAttribute("data-ls-modal",M);let X={modalId:M,rootElementId:Q,handle:z,echoed:!1};Bw.set(M,X),z.onDismiss(()=>{if(X.echoed)return;X.echoed=!0,D1(Q),Bw.delete(M),H({type:"ls_modal_dismissed",modalId:M})});break}case"ls_modal_set_title":{let W=Bw.get(u.modalId);if(!W)break;try{W.handle.setTitle(u.title)}catch{}break}case"ls_modal_dismiss":{let W=Bw.get(u.modalId);if(!W)break;try{W.handle.dismiss()}catch{if(!W.echoed)W.echoed=!0,D1(W.rootElementId),Bw.delete(u.modalId),H({type:"ls_modal_dismissed",modalId:u.modalId})}break}}});return()=>{O();for(let A of Bw.values()){try{A.handle.dismiss()}catch{}D1(A.rootElementId)}Bw.clear()}}function HI(w){return w?.type==="ls_context_menu_show"}function Zz(w,h,H){let O=h(async(A)=>{if(!HI(A))return;let u=A,W=null;try{W=(await w.ui.showContextMenu({position:u.options.position,items:u.options.items})).selectedKey}catch(M){console.warn("[LumiScript] ctx.ui.showContextMenu failed:",M)}H({type:"ls_context_menu_result",requestId:u.requestId,selectedKey:W})});return()=>{O()}}function OI(w){let h=w?.type;return h==="ls_input_bar_action_register"||h==="ls_input_bar_action_set_label"||h==="ls_input_bar_action_set_subtitle"||h==="ls_input_bar_action_set_enabled"||h==="ls_input_bar_action_destroy"}var _v=new Map;function qI(w,h){return`${w}:${h}`}function Iz(w,h,H){let O=h((A)=>{if(!OI(A))return;let u=A,W=qI(u.scriptId,u.actionId);switch(u.type){case"ls_input_bar_action_register":{let M=_v.get(W);if(M){try{M.destroy()}catch{}_v.delete(W)}let Q;try{Q=w.ui.registerInputBarAction({id:u.actionId,label:u.options.label,subtitle:u.options.subtitle,iconSvg:u.options.iconSvg,iconUrl:u.options.iconUrl,enabled:u.options.enabled})}catch(R){console.warn("[LumiScript] ctx.ui.registerInputBarAction failed:",R);break}_v.set(W,Q),Q.onClick(()=>{H({type:"ls_input_bar_action_click",scriptId:u.scriptId,actionId:u.actionId})});break}case"ls_input_bar_action_set_label":{let M=_v.get(W);if(!M)break;try{M.setLabel(u.label)}catch{}break}case"ls_input_bar_action_set_subtitle":{let M=_v.get(W);if(!M)break;if(typeof M.setSubtitle!=="function")break;try{M.setSubtitle(u.subtitle)}catch{}break}case"ls_input_bar_action_set_enabled":{let M=_v.get(W);if(!M)break;try{M.setEnabled(u.enabled)}catch{}break}case"ls_input_bar_action_destroy":{let M=_v.get(W);if(!M)break;try{M.destroy()}catch{}_v.delete(W);break}}});return()=>{O();for(let A of _v.values())try{A.destroy()}catch{}_v.clear()}}function AI(w){let h=w?.type;return h==="ls_float_widget_create"||h==="ls_float_widget_move"||h==="ls_float_widget_set_visible"||h==="ls_float_widget_destroy"}var U5=new Map;function xz(w,h,H){let O=h((A)=>{if(!AI(A))return;let u=A;switch(u.type){case"ls_float_widget_create":{let{scriptId:W,widgetId:M,rootElementId:Q,options:R}=u,z=U5.get(M);if(z){try{z.handle.destroy()}catch{}D1(z.rootElementId),U5.delete(M)}let X;try{X=w.ui.createFloatWidget({width:R.width,height:R.height,initialPosition:R.initialPosition,snapToEdge:R.snapToEdge,tooltip:R.tooltip,chromeless:R.chromeless})}catch(K){console.warn("[LumiScript] ctx.ui.createFloatWidget failed:",K);break}ph(Q,X.root),X.root.setAttribute("data-ls-script",W),X.root.setAttribute("data-ls-widget",M),U5.set(M,{widgetId:M,rootElementId:Q,handle:X}),X.onDragEnd((K)=>{H({type:"ls_float_widget_drag_end",widgetId:M,x:K.x,y:K.y})});break}case"ls_float_widget_move":{let W=U5.get(u.widgetId);if(!W)break;try{W.handle.moveTo(u.x,u.y)}catch{}break}case"ls_float_widget_set_visible":{let W=U5.get(u.widgetId);if(!W)break;try{W.handle.setVisible(u.visible)}catch{}break}case"ls_float_widget_destroy":{let W=U5.get(u.widgetId);if(!W)break;try{W.handle.destroy()}catch{}D1(W.rootElementId),U5.delete(u.widgetId);break}}});return()=>{O();for(let A of U5.values()){try{A.handle.destroy()}catch{}D1(A.rootElementId)}U5.clear()}}function PI(w){let h=w?.type;return h==="ls_drawer_tab_register"||h==="ls_drawer_tab_set_title"||h==="ls_drawer_tab_set_short_name"||h==="ls_drawer_tab_set_badge"||h==="ls_drawer_tab_activate"||h==="ls_drawer_tab_destroy"}var bv=new Map;function uI(w,h){return`${w}:${h}`}function Tz(w,h,H){let O=h((A)=>{if(!PI(A))return;let u=A,W=uI(u.scriptId,u.tabId);switch(u.type){case"ls_drawer_tab_register":{let M=bv.get(W);if(M){try{M.handle.destroy()}catch{}D1(M.rootElementId),bv.delete(W)}let Q;try{Q=w.ui.registerDrawerTab({id:u.options.id,title:u.options.title,shortName:u.options.shortName,description:u.options.description,keywords:u.options.keywords,headerTitle:u.options.headerTitle,iconSvg:u.options.iconSvg,iconUrl:u.options.iconUrl})}catch(R){console.warn("[LumiScript] ctx.ui.registerDrawerTab failed:",R);break}ph(u.rootElementId,Q.root),Q.root.setAttribute("data-ls-script",u.scriptId),Q.root.setAttribute("data-ls-tab",u.tabId),bv.set(W,{scriptId:u.scriptId,tabId:u.tabId,rootElementId:u.rootElementId,handle:Q}),Q.onActivate(()=>{H({type:"ls_drawer_tab_activated",scriptId:u.scriptId,tabId:u.tabId})});break}case"ls_drawer_tab_set_title":{let M=bv.get(W);if(!M)break;try{M.handle.setTitle(u.title)}catch{}break}case"ls_drawer_tab_set_short_name":{let M=bv.get(W);if(!M)break;try{M.handle.setShortName(u.shortName)}catch{}break}case"ls_drawer_tab_set_badge":{let M=bv.get(W);if(!M)break;try{M.handle.setBadge(u.badge)}catch{}break}case"ls_drawer_tab_activate":{let M=bv.get(W);if(!M)break;try{M.handle.activate()}catch{}break}case"ls_drawer_tab_destroy":{let M=bv.get(W);if(!M)break;try{M.handle.destroy()}catch{}D1(M.rootElementId),bv.delete(W);break}}});return()=>{O();for(let A of bv.values()){try{A.handle.destroy()}catch{}D1(A.rootElementId)}bv.clear()}}var S4=ur(rg(),1);function mfg(w){let h=[],H=w.dom.addStyle(UG);h.push(H);let O=[],A=w.onBackendMessage((rr)=>{for(let Pr of O)Pr(rr)});h.push(A);let u=(rr)=>{return O.push(rr),()=>{let Pr=O.indexOf(rr);if(Pr!==-1)O.splice(Pr,1)}},W=(rr)=>{w.sendToBackend(rr)},M=Bz(w,u,W);h.push(M);let Q=Nz(w,u,W);h.push(Q);let R=Zz(w,u,W);h.push(R);let z=Iz(w,u,W);h.push(z);let X=xz(w,u,W);h.push(X);let K=Tz(w,u,W);h.push(K),W({type:"frontend_ready"});let I=w.ui.requestDockPanel({edge:"right",title:"LumiScript",size:420,minSize:280,maxSize:720,resizable:!0,startCollapsed:!0}),f=$P.createRoot(I.root);f.render(S4.jsxDEV(KP.StrictMode,{children:S4.jsxDEV($z,{onBackendMessage:u,sendToBackend:W},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>{try{f.unmount()}catch{}try{I.destroy()}catch{}});let C=w.ui.mount("settings_extensions"),j=$P.createRoot(C);return j.render(S4.jsxDEV(KP.StrictMode,{children:S4.jsxDEV(Uz,{onBackendMessage:u,sendToBackend:W},void 0,!1,void 0,this)},void 0,!1,void 0,this)),h.push(()=>j.unmount()),()=>{for(let rr of h)try{rr()}catch{}w.dom.cleanup()}}export{mfg as setup};
